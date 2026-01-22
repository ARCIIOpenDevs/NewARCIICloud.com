'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Service } from '@/types';
import { format, addDays, isBefore } from 'date-fns';
import { es } from 'date-fns/locale';

interface ExpiringServicesWidgetProps {
  services: Service[];
  loading: boolean;
}

export const ExpiringServicesWidget: React.FC<ExpiringServicesWidgetProps> = ({ 
  services, 
  loading 
}) => {
  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            ⚠️ Servicios por Expirar
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between animate-pulse">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="w-32 h-4 bg-gray-200 rounded"></div>
                    <div className="w-24 h-3 bg-gray-200 rounded mt-1"></div>
                  </div>
                </div>
                <div className="w-16 h-6 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  // Filtrar servicios que expiran en los próximos 30 días
  const thirtyDaysFromNow = addDays(new Date(), 30);
  const expiringServices = services
    .filter(service => {
      const expirationDate = service.expirationDate?.toDate ? service.expirationDate.toDate() : (service.expirationDate ? new Date(service.expirationDate as any) : new Date());
      return isBefore(expirationDate, thirtyDaysFromNow) && service.status === 'active';
    })
    .sort((a, b) => {
      const aDate = a.expirationDate?.toDate ? a.expirationDate.toDate() : (a.expirationDate ? new Date(a.expirationDate as any) : new Date());
      const bDate = b.expirationDate?.toDate ? b.expirationDate.toDate() : (b.expirationDate ? new Date(b.expirationDate as any) : new Date());
      return aDate.getTime() - bDate.getTime();
    })
    .slice(0, 10);

  const getUrgencyColor = (expirationTimestamp: any) => {
    const expDate = expirationTimestamp?.toDate ? expirationTimestamp.toDate() : new Date(expirationTimestamp);
    const now = new Date();
    const daysUntilExpiration = Math.ceil((expDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

    if (daysUntilExpiration <= 7) {
      return 'bg-red-100 text-red-800 border-red-200';
    } else if (daysUntilExpiration <= 15) {
      return 'bg-orange-100 text-orange-800 border-orange-200';
    } else {
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    }
  };

  const getDaysUntilExpiration = (expirationTimestamp: any) => {
    const expDate = expirationTimestamp?.toDate ? expirationTimestamp.toDate() : (expirationTimestamp ? new Date(expirationTimestamp) : new Date());
    const now = new Date();
    const daysUntilExpiration = Math.ceil((expDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    
    if (daysUntilExpiration < 0) {
      return `Expirado hace ${Math.abs(daysUntilExpiration)} días`;
    } else if (daysUntilExpiration === 0) {
      return 'Expira hoy';
    } else if (daysUntilExpiration === 1) {
      return 'Expira mañana';
    } else {
      return `${daysUntilExpiration} días`;
    }
  };

  const typeIcons = {
    hosting: '🌐',
    vps: '☁️',
    dedicated: '🖥️',
    domain: '🌍',
    ssl: '🔐',
    email: '📧',
    cdn: '🚀',
    backup: '💾',
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center">
            ⚠️ Servicios por Expirar
          </span>
          <span className="text-sm font-normal text-gray-500">
            Próximos 30 días
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {expiringServices.length === 0 ? (
            <div className="text-center py-6">
              <div className="text-green-400 text-4xl mb-2">✅</div>
              <p className="text-gray-500">No hay servicios por expirar</p>
              <p className="text-sm text-gray-400 mt-1">en los próximos 30 días</p>
            </div>
          ) : (
            expiringServices.map((service) => {
              const icon = typeIcons[service.serviceType as keyof typeof typeIcons] || '📦';
              const urgencyColor = getUrgencyColor(service.expirationDate);
              const daysText = getDaysUntilExpiration(service.expirationDate);
              const expirationDate = service.expirationDate?.toDate ? service.expirationDate.toDate() : (service.expirationDate ? new Date(service.expirationDate as any) : new Date());

              return (
                <div 
                  key={service.id} 
                  className={`flex items-center justify-between p-3 rounded-lg border ${urgencyColor.includes('red') ? 'border-red-200' : urgencyColor.includes('orange') ? 'border-orange-200' : 'border-yellow-200'}`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <span className="text-sm">{icon}</span>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {service.serviceName}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        Cliente: {service.clientId}
                      </p>
                      <p className="text-xs text-gray-500">
                        Vence: {format(expirationDate, 'dd/MM/yyyy', { locale: es })}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${urgencyColor}`}>
                      {daysText}
                    </span>
                    <span className="text-xs text-gray-600 mt-1">
                      ${service.pricing?.price || 0} MXN
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
        
        {expiringServices.length > 0 && (
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800 font-medium">
              📋 Recordatorio
            </p>
            <p className="text-xs text-blue-600 mt-1">
              Contacta a estos clientes para renovar sus servicios y evitar interrupciones.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ExpiringServicesWidget;