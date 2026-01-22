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
import TestDataSeeder from '@/components/TestDataSeeder';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const DashboardContent: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'today' | 'week' | 'month' | 'year'>('month');
  const router = useRouter();
  
  // Hooks para datos reales
  const { clients, getClientStats } = useClients();
  const { services, fetchServices, getServiceStats } = useServices();
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        await Promise.all([
          fetchServices()
        ]);
      } catch (error) {
        console.error('Error cargando datos del dashboard:', error);
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

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Dashboard</h1>
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
          {/* Mostrar herramienta de datos de prueba si no hay datos */}
          {clients.length === 0 && services.length === 0 && (
            <TestDataSeeder />
          )}

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
                      <span className="text-sm font-medium text-gray-900">Inactivos</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{serviceStats.total - serviceStats.active}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
                      <span className="text-sm font-medium text-gray-900">Expirados</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{serviceStats.expired}</span>
                  </div>
                </div>
                
                {/* Progress bar general */}
                <div className="mt-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Estado general de servicios</span>
                    <span>{serviceStats.total} total</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-400 h-2 rounded-full" 
                      style={{ 
                        width: serviceStats.total > 0 
                          ? `${Math.round((serviceStats.active / serviceStats.total) * 100)}%` 
                          : '0%' 
                      }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {serviceStats.total > 0 
                      ? `${Math.round((serviceStats.active / serviceStats.total) * 100)}% de servicios activos`
                      : 'No hay servicios registrados'
                    }
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Acciones rápidas */}
          <Card>
            <CardHeader>
              <CardTitle>Acciones Rápidas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/admin/clients/new">
                  <Button className="w-full" variant="outline">
                    👥 Agregar Cliente
                  </Button>
                </Link>
                <Link href="/admin/services/new">
                  <Button className="w-full" variant="outline">
                    🛠️ Crear Servicio
                  </Button>
                </Link>
                <Link href="/admin/billing">
                  <Button className="w-full" variant="outline">
                    💰 Generar Factura
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};