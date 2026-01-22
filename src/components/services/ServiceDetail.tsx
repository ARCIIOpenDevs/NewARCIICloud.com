'use client';

import React from 'react';
import { Service } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Timestamp } from 'firebase/firestore';

interface ServiceDetailProps {
  service: Service;
  onEdit: (service: Service) => void;
  onClose: () => void;
  onRenew: (serviceId: string) => void;
  clients?: Array<{ id: string; firstName: string; lastName: string; email: string; }>;
}

const SERVICE_TYPE_INFO = {
  hosting: { label: 'Hosting Web', icon: '🌐' },
  vps: { label: 'VPS Cloud', icon: '☁️' },
  dedicated: { label: 'Servidor Dedicado', icon: '🖥️' },
  domain: { label: 'Dominio', icon: '🌍' },
  ssl: { label: 'Certificado SSL', icon: '🔐' },
  email: { label: 'Email Corporativo', icon: '📧' },
  cdn: { label: 'CDN', icon: '🚀' },
  backup: { label: 'Backup Cloud', icon: '💾' },
};

const formatDate = (date: Timestamp | Date | string | undefined) => {
  if (!date) return 'N/A';
  
  let dateObj: Date;
  
  if (typeof date === 'string') {
    dateObj = new Date(date);
  } else if (date instanceof Date) {
    dateObj = date;
  } else if (typeof date === 'object' && 'toDate' in date && typeof date.toDate === 'function') {
    dateObj = date.toDate();
  } else {
    // Fallback for any other type
    dateObj = new Date();
  }
  
  return dateObj.toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const getStatusInfo = (status: string) => {
  switch (status) {
    case 'active':
      return { label: 'Activo', color: 'bg-green-100 text-green-800' };
    case 'suspended':
      return { label: 'Suspendido', color: 'bg-yellow-100 text-yellow-800' };
    case 'cancelled':
      return { label: 'Cancelado', color: 'bg-red-100 text-red-800' };
    case 'pending':
      return { label: 'Pendiente', color: 'bg-blue-100 text-blue-800' };
    case 'expired':
      return { label: 'Expirado', color: 'bg-gray-100 text-gray-800' };
    default:
      return { label: status, color: 'bg-gray-100 text-gray-800' };
  }
};

const isExpiringSoon = (expiresAt: any) => {
  if (!expiresAt) return false;
  const expDate = expiresAt.toDate ? expiresAt.toDate() : new Date(expiresAt);
  const now = new Date();
  const diffTime = expDate.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= 30 && diffDays > 0;
};

export const ServiceDetail: React.FC<ServiceDetailProps> = ({
  service,
  onEdit,
  onClose,
  onRenew,
  clients = [],
}) => {
  const typeInfo = SERVICE_TYPE_INFO[service.type || 'hosting'];
  const statusInfo = getStatusInfo(service.status);
  const expiringSoon = isExpiringSoon(service.expiresAt);
  
  const client = clients.find(c => c.id === service.clientId);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl flex items-center gap-2">
                {typeInfo.icon} {service.name}
              </CardTitle>
              <p className="text-gray-600 mt-1">
                {client ? `${client.firstName} ${client.lastName}` : 'Cliente desconocido'}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <Badge className={typeInfo.label ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}>
                  {typeInfo.label}
                </Badge>
                <Badge className={statusInfo.color}>
                  {statusInfo.label}
                </Badge>
                {expiringSoon && service.expiresAt && (
                  <Badge className="bg-yellow-100 text-yellow-800">
                    ⚠️ Expira en {Math.ceil((service.expiresAt.toDate().getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} días
                  </Badge>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-3">
              {expiringSoon && (
                <Button
                  variant="outline"
                  className="text-green-600 hover:text-green-700 hover:bg-green-50"
                  onClick={() => service.id && onRenew(service.id)}
                >
                  Renovar Servicio
                </Button>
              )}
              <Button onClick={() => onEdit(service)}>
                Editar Servicio
              </Button>
              <Button variant="outline" onClick={onClose}>
                Volver
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Información del plan */}
        <Card>
          <CardHeader>
            <CardTitle>Plan y Recursos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Plan</label>
              <p className="text-gray-900 font-semibold">
                {typeof service.plan === 'string' 
                  ? service.plan 
                  : (service.plan && typeof service.plan === 'object' && 'name' in service.plan 
                      ? (service.plan as any).name 
                      : 'Sin especificar'
                    )
                }
              </p>
            </div>
            
            {service.description && (
              <div>
                <label className="text-sm font-medium text-gray-700">Descripción</label>
                <p className="text-gray-900">{service.description}</p>
              </div>
            )}

            {(typeof service.plan === 'object' && service.plan && 'resources' in service.plan) && (
              <div>
                <label className="text-sm font-medium text-gray-700">Recursos</label>
                <div className="mt-2 grid grid-cols-2 gap-3 text-sm">
                  {((service.plan as any).resources?.storage) && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Almacenamiento:</span>
                      <span className="font-medium">{(service.plan as any).resources.storage} GB</span>
                    </div>
                  )}
                  {((service.plan as any).resources?.bandwidth) && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Transferencia:</span>
                      <span className="font-medium">{(service.plan as any).resources.bandwidth} GB</span>
                    </div>
                  )}
                  {((service.plan as any).resources?.domains) && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dominios:</span>
                      <span className="font-medium">{(service.plan as any).resources.domains}</span>
                    </div>
                  )}
                  {((service.plan as any).resources?.databases) && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bases de datos:</span>
                      <span className="font-medium">{(service.plan as any).resources.databases}</span>
                    </div>
                  )}
                  {((service.plan as any).resources?.emails) && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Emails:</span>
                      <span className="font-medium">{(service.plan as any).resources.emails}</span>
                    </div>
                  )}
                  {((service.plan as any).resources?.cpu) && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">CPU:</span>
                      <span className="font-medium">{(service.plan as any).resources.cpu} cores</span>
                    </div>
                  )}
                  {((service.plan as any).resources?.ram) && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">RAM:</span>
                      <span className="font-medium">{(service.plan as any).resources.ram} GB</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {(typeof service.plan === 'object' && service.plan && 'features' in service.plan && Array.isArray((service.plan as any).features) && (service.plan as any).features.length > 0) && (
              <div>
                <label className="text-sm font-medium text-gray-700">Características</label>
                <ul className="mt-2 space-y-1">
                  {((service.plan as any).features as string[]).map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center">
                      <span className="mr-2 text-green-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Información técnica */}
        {service.server && (
          <Card>
            <CardHeader>
              <CardTitle>Información Técnica</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {service.server.hostname && (
                <div>
                  <label className="text-sm font-medium text-gray-700">Hostname</label>
                  <p className="text-gray-900 font-mono">{service.server.hostname}</p>
                </div>
              )}
              
              {((service.server as any)?.ip) && (
                <div>
                  <label className="text-sm font-medium text-gray-700">IP Principal</label>
                  <p className="text-gray-900 font-mono">{(service.server as any).ip}</p>
                </div>
              )}
              
              <div>
                <label className="text-sm font-medium text-gray-700">Servidor</label>
                <p className="text-gray-900">Información disponible en panel de control</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Información de dominio */}
        {service.domain && (
          <Card>
            <CardHeader>
              <CardTitle>Información del Dominio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Dominio</label>
                <p className="text-gray-900 font-semibold">{service.domain.name}</p>
              </div>
              
              {/* Domain registrar info would be available if needed */}
              
              <div className="text-sm text-gray-600">
                Funciones de dominio disponibles en el panel de control
              </div>
            </CardContent>
          </Card>
        )}

        {/* Facturación */}
        <Card>
          <CardHeader>
            <CardTitle>Facturación</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Precio</label>
                <p className="text-2xl font-bold text-green-600">
                  ${service.pricing.price.toLocaleString('es-MX')} {service.pricing.currency}
                </p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700">Ciclo</label>
                <p className="text-gray-900 capitalize">
                  {service.pricing.billingCycle === 'monthly' ? 'Mensual' :
                   service.pricing.billingCycle === 'quarterly' ? 'Trimestral' :
                   service.pricing.billingCycle === 'annually' ? 'Anual' : service.pricing.billingCycle}
                </p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700">Próxima Facturación</label>
                <p className="text-gray-900">{formatDate(service.billing?.nextBilling || service.nextRenewalDate)}</p>
              </div>
              
              <div className="flex items-center">
                <span className={`w-3 h-3 rounded-full mr-2 ${service.autoRenew ? 'bg-green-400' : 'bg-gray-400'}`}></span>
                <span className="text-sm text-gray-600">Renovación automática</span>
              </div>
            </div>

            {service.pricing.setupFee && (
              <div>
                <label className="text-sm font-medium text-gray-700">Costo de Instalación</label>
                <p className="text-gray-900">
                  ${service.pricing.setupFee.toLocaleString('es-MX')} {service.pricing.currency}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Acceso */}
        {service.access && (
          <Card>
            <CardHeader>
              <CardTitle>Acceso al Servicio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {service.access.cpanelUrl && (
                <div>
                  <label className="text-sm font-medium text-gray-700">Panel de Control</label>
                  <a 
                    href={service.access.cpanelUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 underline"
                  >
                    Acceder al cPanel
                  </a>
                </div>
              )}
              
              <div className="text-sm text-gray-600">
                Las credenciales de acceso están disponibles en el panel de control
              </div>
            </CardContent>
          </Card>
        )}

        {/* Uso actual */}
        {service.usage && (
          <Card>
            <CardHeader>
              <CardTitle>Uso Actual</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {service.usage.storage && (
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Almacenamiento</span>
                    <span className="font-medium">
                      {service.usage.storage.used || 0} / {service.usage.storage.total || 0} GB
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{
                        width: `${service.usage.storage.total ? Math.min((service.usage.storage.used / service.usage.storage.total) * 100, 100) : 0}%`
                      }}
                    ></div>
                  </div>
                </div>
              )}

              {service.usage.bandwidth && (
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Transferencia este mes</span>
                    <span className="font-medium">
                      {service.usage.bandwidth.used || 0} / {service.usage.bandwidth.total || 0} GB
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{
                        width: `${service.usage.bandwidth.total ? Math.min((service.usage.bandwidth.used / service.usage.bandwidth.total) * 100, 100) : 0}%`
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>

      {/* Notes */}
      {service.notes && service.notes.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Notas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {service.notes.map((note, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <p className="text-sm text-gray-900">{note.content}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {formatDate(note.createdAt)} - {note.createdBy}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Información del sistema */}
      <Card>
        <CardHeader>
          <CardTitle>Información del Sistema</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Fecha de Creación</label>
              <p className="text-gray-900">{formatDate(service.createdAt)}</p>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700">Última Actualización</label>
              <p className="text-gray-900">{formatDate(service.updatedAt)}</p>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Expira</label>
              <p className="text-gray-900">{formatDate(service.expiresAt)}</p>
            </div>
            
            <div className="md:col-span-3">
              <label className="text-sm font-medium text-gray-700">ID del Servicio</label>
              <p className="text-gray-900 font-mono text-sm">{service.id}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};