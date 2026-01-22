'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/ButtonCRM';
import { Client } from '@/types';

interface RecentClientsWidgetProps {
  clients: Client[];
  loading: boolean;
}

export const RecentClientsWidget: React.FC<RecentClientsWidgetProps> = ({ 
  clients, 
  loading 
}) => {
  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Clientes Recientes</CardTitle>
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

  const recentClients = clients
    .sort((a, b) => {
      const aDate = a.createdAt ? new Date(a.createdAt as any) : new Date();
      const bDate = b.createdAt ? new Date(b.createdAt as any) : new Date();
      return bDate.getTime() - aDate.getTime();
    })
    .slice(0, 5);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Clientes Recientes</CardTitle>
        <Link href="/admin/clients">
          <Button variant="outline" size="sm">Ver todos</Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentClients.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-gray-400 text-4xl mb-2">👥</div>
              <p className="text-gray-500">No hay clientes registrados</p>
            </div>
          ) : (
            recentClients.map((client) => {
              const statusColors = {
                active: 'bg-green-100 text-green-800',
                inactive: 'bg-gray-100 text-gray-800',
                suspended: 'bg-red-100 text-red-800',
              };

              const statusColor = statusColors[client.status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800';

              return (
                <div key={client.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-blue-800">
                          {client.firstName.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {client.firstName} {client.lastName}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {client.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColor}`}>
                      {client.status}
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

export default RecentClientsWidget;