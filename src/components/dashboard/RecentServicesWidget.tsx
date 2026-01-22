'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Service } from '@/types';
import { format, addMonths, isBefore } from 'date-fns';
import { es } from 'date-fns/locale';

interface RecentServicesWidgetProps {
  services: Service[];
  loading: boolean;
}

export const RecentServicesWidget: React.FC<RecentServicesWidgetProps> = ({ 
  services, 
  loading 
}) => {
  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Servicios Recientes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
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

  const recentServices = services
    .sort((a, b) => {
      const aDate = a.createdAt ? new Date(a.createdAt as any) : new Date();
      const bDate = b.createdAt ? new Date(b.createdAt as any) : new Date();
      return bDate.getTime() - aDate.getTime();
    })
    .slice(0, 5);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Servicios Recientes</CardTitle>
        <Link href="/admin/services">
          <Button variant="outline" size="sm">Ver todos</Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentServices.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-gray-400 text-4xl mb-2">🛠️</div>
              <p className="text-gray-500">No hay servicios registrados</p>
            </div>
          ) : (
            recentServices.map((service) => {
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

              const statusColors = {
                active: 'bg-green-100 text-green-800',
                inactive: 'bg-gray-100 text-gray-800',
                suspended: 'bg-red-100 text-red-800',
                pending: 'bg-yellow-100 text-yellow-800',
                expired: 'bg-red-100 text-red-800',
                cancelled: 'bg-gray-100 text-gray-800',
              };

              const statusColor = statusColors[service.status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800';
              const icon = typeIcons[service.serviceType as keyof typeof typeIcons] || '📦';

              // Verificar si está próximo a expirar (convertir Timestamp a Date)
              const proximoVencimiento = addMonths(new Date(), 1);
              const expirationDate = service.expirationDate ? new Date(service.expirationDate as any) : new Date();
              const isExpiringSoon = isBefore(expirationDate, proximoVencimiento);

              return (
                <div key={service.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm">{icon}</span>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {service.serviceName}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        Vence: {format(expirationDate, 'dd/MM/yyyy', { locale: es })}
                        {isExpiringSoon && (
                          <span className="ml-2 text-orange-600 font-medium">⚠️ Próximo</span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColor}`}>
                      {service.status}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentServicesWidget;