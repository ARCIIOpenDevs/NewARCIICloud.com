'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

interface ProgressBarProps {
  label: string;
  value: number;
  total: number;
  color?: 'blue' | 'green' | 'yellow' | 'red' | 'purple';
  showPercentage?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  label, 
  value, 
  total, 
  color = 'blue', 
  showPercentage = true 
}) => {
  const percentage = total > 0 ? Math.round((value / total) * 100) : 0;
  
  const colorClasses = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    yellow: 'bg-yellow-600',
    red: 'bg-red-600',
    purple: 'bg-purple-600',
  };

  return (
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center space-x-2 flex-1">
        <span className="text-sm font-medium text-gray-900 min-w-0 flex-1">{label}</span>
        <div className="w-24 bg-gray-200 rounded-full h-2">
          <div
            className={`${colorClasses[color]} h-2 rounded-full transition-all duration-300`}
            style={{ width: `${Math.min(percentage, 100)}%` }}
          ></div>
        </div>
        {showPercentage ? (
          <span className="text-sm font-medium text-gray-700 w-12 text-right">
            {percentage}%
          </span>
        ) : (
          <span className="text-sm font-medium text-gray-700 w-8 text-right">
            {value}
          </span>
        )}
      </div>
    </div>
  );
};

interface ServiceTypeStatsProps {
  serviceStats: {
    total: number;
    byType: Record<string, number>;
  };
}

export const ServiceTypeStats: React.FC<ServiceTypeStatsProps> = ({ serviceStats }) => {
  const typeInfo = {
    hosting: { label: 'Hosting Web', icon: '🌐', color: 'blue' as const },
    vps: { label: 'VPS Cloud', icon: '☁️', color: 'purple' as const },
    dedicated: { label: 'Servidor Dedicado', icon: '🖥️', color: 'green' as const },
    domain: { label: 'Dominio', icon: '🌍', color: 'yellow' as const },
    ssl: { label: 'SSL', icon: '🔐', color: 'red' as const },
    email: { label: 'Email', icon: '📧', color: 'blue' as const },
    cdn: { label: 'CDN', icon: '🚀', color: 'purple' as const },
    backup: { label: 'Backup', icon: '💾', color: 'green' as const },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Servicios por Tipo</CardTitle>
      </CardHeader>
      <CardContent>
        {Object.keys(serviceStats.byType).length > 0 ? (
          <div className="space-y-1">
            {Object.entries(serviceStats.byType).map(([type, count]) => {
              const info = typeInfo[type as keyof typeof typeInfo] || { 
                label: type, 
                icon: '📦', 
                color: 'blue' as const 
              };
              
              return (
                <ProgressBar
                  key={type}
                  label={`${info.icon} ${info.label}`}
                  value={count}
                  total={serviceStats.total}
                  color={info.color}
                  showPercentage={false}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-8">
            <p>No hay servicios registrados</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};