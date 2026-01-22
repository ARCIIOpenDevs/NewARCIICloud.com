'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/ButtonCRM';
import { useClients } from '@/hooks/useClients';
import { useServices } from '@/hooks/useServices';
import { DashboardStatsCard } from '@/components/dashboard/DashboardStatsCard';
import { ServiceTypeStats } from '@/components/dashboard/ServiceTypeStats';
import { RecentClientsWidget } from '@/components/dashboard/RecentClientsWidget';
import { RecentServicesWidget } from '@/components/dashboard/RecentServicesWidget';
import { ExpiringServicesWidget } from '@/components/dashboard/ExpiringServicesWidget';
import Link from 'next/link';
import { useRouter } from 'next/navigation';



export const DashboardContent: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'today' | 'week' | 'month' | 'year'>('month');
  const router = useRouter();
  
  // Hooks para datos reales
  const { clients, getClientStats } = useClients();
  const { services, fetchServices, getServiceStats } = useServices();
  
  const [loading, setLoading] = useState(true);

  // Cargar datos al montar
  useEffect(() => {
    const loadData = async () => {
      try {
        await Promise.all([
          fetchServices()
        ]);
      } catch (error) {
        console.error('Error loading dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [fetchServices]);

  // Calcular estadísticas reales
  const clientStats = getClientStats();
  const serviceStats = getServiceStats();

  // Calcular ingresos mensuales
  const calculateMonthlyRevenue = () => {
    return services
      .filter(service => service.status === 'active')
      .reduce((total, service) => {
        // Convertir el precio según el ciclo a mensual
        let monthlyPrice = service.pricing?.price || 0;
        switch (service.pricing?.billingCycle) {
          case 'quarterly':
            monthlyPrice = (service.pricing?.price || 0) / 3;
            break;
          case 'annually':
            monthlyPrice = (service.pricing?.price || 0) / 12;
            break;
          default: // monthly
            monthlyPrice = service.pricing?.price || 0;
        }
        return total + monthlyPrice;
      }, 0);
  };

  // Clientes recientes (últimos 5)
  const recentClients = clients
    .sort((a, b) => b.createdAt.toMillis() - a.createdAt.toMillis())
    .slice(0, 5);

  // Servicios próximos a expirar
  const expiringServices = services
    .filter(service => {
      if (service.status !== 'active' || !service.expiresAt) return false;
      const now = new Date();
      const expiresAt = service.expiresAt.toDate();
      const diffTime = expiresAt.getTime() - now.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays <= 30 && diffDays > 0;
    })
    .sort((a, b) => (a.expiresAt?.toMillis() || 0) - (b.expiresAt?.toMillis() || 0))
    .slice(0, 5);

  const stats = [
    {
      title: 'Total de Clientes',
      value: clientStats.total,
      change: clientStats.newThisMonth > 0 ? `+${clientStats.newThisMonth}` : '0',
      changeType: clientStats.newThisMonth > 0 ? 'positive' as const : 'neutral' as const,
      icon: '👥',
    },
    {
      title: 'Servicios Activos',
      value: serviceStats.active,
      change: serviceStats.total > 0 ? `${Math.round((serviceStats.active / serviceStats.total) * 100)}%` : '0%',
      changeType: 'positive' as const,
      icon: '🛠️',
    },
    {
      title: 'Ingresos Mensuales',
      value: `$${Math.round(calculateMonthlyRevenue()).toLocaleString()} MXN`,
      change: '+8.2%',
      changeType: 'positive' as const,
      icon: '💰',
    },
    {
      title: 'Expiran Pronto',
      value: serviceStats.expiringThisMonth,
      change: serviceStats.expiringThisMonth > 0 ? 'Requieren atención' : 'Todo al día',
      changeType: serviceStats.expiringThisMonth > 0 ? 'negative' as const : 'positive' as const,
      icon: '⚠️',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'open':
        return 'bg-red-100 text-red-800';
      case 'in_progress':
        return 'bg-blue-100 text-blue-800';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header con controles */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Panel de Control</h2>
          <p className="text-gray-600">Resumen de actividad y métricas clave</p>
        </div>
        <div className="flex items-center space-x-2">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value as any)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="today">Hoy</option>
            <option value="week">Esta semana</option>
            <option value="month">Este mes</option>
            <option value="year">Este año</option>
          </select>
          <Button variant="outline">
            Exportar Reporte
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2">Cargando métricas...</span>
        </div>
      ) : (
        <>
          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <DashboardStatsCard 
              title="Total de Clientes"
              value={clientStats.total}
              change={clientStats.newThisMonth > 0 ? `+${clientStats.newThisMonth}` : '0'}
              changeType={clientStats.newThisMonth > 0 ? 'positive' : 'neutral'}
              icon="👥"
              onClick={() => router.push('/admin/clients')}
            />
            <DashboardStatsCard 
              title="Servicios Activos"
              value={serviceStats.active}
              change={serviceStats.total > 0 ? `${Math.round((serviceStats.active / serviceStats.total) * 100)}%` : '0%'}
              changeType="positive"
              icon="🛠️"
              onClick={() => router.push('/admin/services')}
            />
            <DashboardStatsCard 
              title="Ingresos Mensuales"
              value={`$${Math.round(calculateMonthlyRevenue()).toLocaleString()} MXN`}
              change="+8.2%"
              changeType="positive"
              icon="💰"
            />
            <DashboardStatsCard 
              title="Expiran Pronto"
              value={serviceStats.expiringThisMonth}
              change={serviceStats.expiringThisMonth > 0 ? 'Requieren atención' : 'Todo al día'}
              changeType={serviceStats.expiringThisMonth > 0 ? 'negative' : 'positive'}
              icon="⚠️"
            />
          </div>

          {/* Segunda fila: Widgets de actividad reciente */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <RecentClientsWidget 
              clients={clients} 
              loading={loading} 
            />
            <RecentServicesWidget 
              services={services} 
              loading={loading} 
            />
            <ExpiringServicesWidget 
              services={services} 
              loading={loading} 
            />
          </div>

          {/* Resumen por tipo de servicio */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ServiceTypeStats serviceStats={serviceStats} />

            <Card>
              <CardHeader>
                <CardTitle>Estado de Servicios</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                      <span className="text-sm font-medium text-gray-900">Activos</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{serviceStats.active}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                      <span className="text-sm font-medium text-gray-900">Suspendidos</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{serviceStats.suspended}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                      <span className="text-sm font-medium text-gray-900">Pendientes</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{serviceStats.pending}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                      <span className="text-sm font-medium text-gray-900">Cancelados</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{serviceStats.cancelled}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                      <span className="text-sm font-medium text-gray-900">Expirados</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{serviceStats.expired}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Actividad reciente simulada */}
          <Card>
            <CardHeader>
              <CardTitle>Actividad Reciente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentClients.slice(0, 3).map((client, index) => (
                  <div key={client.id} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">👤</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">{client.firstName} {client.lastName}</span> se registró como nuevo cliente
                      </p>
                      <p className="text-xs text-gray-500">
                        {(() => {
                          const createdAt = client.createdAt.toDate();
                          const now = new Date();
                          const diffHours = Math.floor((now.getTime() - createdAt.getTime()) / (1000 * 60 * 60));
                          if (diffHours < 1) return 'Hace menos de 1 hora';
                          if (diffHours < 24) return `Hace ${diffHours} horas`;
                          const diffDays = Math.floor(diffHours / 24);
                          return `Hace ${diffDays} días`;
                        })()}
                      </p>
                    </div>
                  </div>
                ))}
                
                {services.slice(0, 2).map((service, index) => (
                  <div key={service.id} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">🛠️</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm">
                        Nuevo servicio <span className="font-medium">{service.name}</span> activado
                      </p>
                      <p className="text-xs text-gray-500">
                        {(() => {
                          const createdAt = service.createdAt.toDate();
                          const now = new Date();
                          const diffHours = Math.floor((now.getTime() - createdAt.getTime()) / (1000 * 60 * 60));
                          if (diffHours < 1) return 'Hace menos de 1 hora';
                          if (diffHours < 24) return `Hace ${diffHours} horas`;
                          const diffDays = Math.floor(diffHours / 24);
                          return `Hace ${diffDays} días`;
                        })()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};