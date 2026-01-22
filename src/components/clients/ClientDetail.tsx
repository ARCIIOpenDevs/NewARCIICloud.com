'use client';

import React from 'react';
import { Client } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

interface ClientDetailProps {
  client: Client;
  onEdit: (client: Client) => void;
  onClose: () => void;
  loading?: boolean;
}

const formatDate = (date: any) => {
  if (!date) return 'N/A';
  const d = date.toDate ? date.toDate() : new Date(date);
  return d.toLocaleDateString('es-MX', {
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
    case 'inactive':
      return { label: 'Inactivo', color: 'bg-yellow-100 text-yellow-800' };
    case 'suspended':
      return { label: 'Suspendido', color: 'bg-red-100 text-red-800' };
    default:
      return { label: status, color: 'bg-gray-100 text-gray-800' };
  }
};

const getSegmentInfo = (segment: string) => {
  switch (segment) {
    case 'vip':
      return { label: 'VIP', color: 'bg-purple-100 text-purple-800' };
    case 'premium':
      return { label: 'Premium', color: 'bg-blue-100 text-blue-800' };
    case 'enterprise':
      return { label: 'Enterprise', color: 'bg-indigo-100 text-indigo-800' };
    default:
      return { label: 'Estándar', color: 'bg-gray-100 text-gray-800' };
  }
};

const getAccountTypeLabel = (type: string) => {
  switch (type) {
    case 'individual':
      return 'Individual';
    case 'business':
      return 'Negocio';
    case 'enterprise':
      return 'Empresa';
    default:
      return type;
  }
};

export const ClientDetail: React.FC<ClientDetailProps> = ({
  client,
  onEdit,
  onClose,
  loading = false,
}) => {
  const statusInfo = getStatusInfo(client.status);
  const segmentInfo = getSegmentInfo(client.segment);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl">
                {client.firstName} {client.lastName}
              </CardTitle>
              <p className="text-gray-600 mt-1">{client.email}</p>
              <div className="flex items-center gap-2 mt-2">
                <Badge className={statusInfo.color}>
                  {statusInfo.label}
                </Badge>
                <Badge className={segmentInfo.color}>
                  {segmentInfo.label}
                </Badge>
                <span className="text-sm text-gray-500">
                  {getAccountTypeLabel(client.accountType)}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button onClick={() => onEdit(client)}>
                Editar Cliente
              </Button>
              <Button variant="outline" onClick={onClose}>
                Volver
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Información de contacto */}
        <Card>
          <CardHeader>
            <CardTitle>Información de Contacto</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <p className="text-gray-900">{client.email}</p>
            </div>
            
            {client.phone && (
              <div>
                <label className="text-sm font-medium text-gray-700">Teléfono</label>
                <p className="text-gray-900">{client.phone}</p>
              </div>
            )}

            {client.address && (
              <div>
                <label className="text-sm font-medium text-gray-700">Dirección</label>
                <div className="text-gray-900">
                  {client.address.street && <p>{client.address.street}</p>}
                  <p>
                    {[client.address.city, client.address.state, client.address.zipCode]
                      .filter(Boolean)
                      .join(', ')}
                  </p>
                  {client.address.country && <p>{client.address.country}</p>}
                </div>
              </div>
            )}

            <div>
              <label className="text-sm font-medium text-gray-700">Preferencias</label>
              <div className="text-gray-900">
                <p>Idioma: {client.preferences?.language === 'es' ? 'Español' : 'English'}</p>
                <p>Zona horaria: {client.preferences?.timezone || 'N/A'}</p>
                {client.preferences?.communication && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">Métodos de comunicación:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {client.preferences.communication.email && (
                        <Badge variant="outline">Email</Badge>
                      )}
                      {client.preferences.communication.sms && (
                        <Badge variant="outline">SMS</Badge>
                      )}
                      {client.preferences.communication.whatsapp && (
                        <Badge variant="outline">WhatsApp</Badge>
                      )}
                      {client.preferences.communication.phone && (
                        <Badge variant="outline">Teléfono</Badge>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Información de empresa */}
        {client.company && (
          <Card>
            <CardHeader>
              <CardTitle>Información de Empresa</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Nombre</label>
                <p className="text-gray-900">{client.company.name}</p>
              </div>
              
              {client.company.size && (
                <div>
                  <label className="text-sm font-medium text-gray-700">Tamaño</label>
                  <p className="text-gray-900">
                    {client.company.size === 'small' ? 'Pequeña (1-50 empleados)' :
                     client.company.size === 'medium' ? 'Mediana (51-250 empleados)' :
                     'Grande (250+ empleados)'}
                  </p>
                </div>
              )}
              
              {client.company.industry && (
                <div>
                  <label className="text-sm font-medium text-gray-700">Industria</label>
                  <p className="text-gray-900">{client.company.industry}</p>
                </div>
              )}
              
              {client.company.website && (
                <div>
                  <label className="text-sm font-medium text-gray-700">Sitio Web</label>
                  <a 
                    href={client.company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    {client.company.website}
                  </a>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Información fiscal */}
        {client.fiscal && (Object.keys(client.fiscal).length > 0) && (
          <Card>
            <CardHeader>
              <CardTitle>Información Fiscal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {client.fiscal.rfc && (
                <div>
                  <label className="text-sm font-medium text-gray-700">RFC</label>
                  <p className="text-gray-900 font-mono">{client.fiscal.rfc}</p>
                </div>
              )}
              
              {client.fiscal.businessName && (
                <div>
                  <label className="text-sm font-medium text-gray-700">Razón Social</label>
                  <p className="text-gray-900">{client.fiscal.businessName}</p>
                </div>
              )}
              
              {client.fiscal.regimenFiscal && (
                <div>
                  <label className="text-sm font-medium text-gray-700">Régimen Fiscal</label>
                  <p className="text-gray-900">{client.fiscal.regimenFiscal}</p>
                </div>
              )}
              
              {client.fiscal.usoCFDI && (
                <div>
                  <label className="text-sm font-medium text-gray-700">Uso de CFDI</label>
                  <p className="text-gray-900">{client.fiscal.usoCFDI}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Estadísticas */}
        {client.stats && (
          <Card>
            <CardHeader>
              <CardTitle>Estadísticas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Facturación Total</label>
                  <p className="text-2xl font-bold text-green-600">
                    ${(client.stats.totalRevenue || 0).toLocaleString('es-MX')}
                  </p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">Servicios Activos</label>
                  <p className="text-2xl font-bold text-blue-600">
                    {client.stats.activeServices || 0}
                  </p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">Total de Facturas</label>
                  <p className="text-2xl font-bold text-purple-600">
                    {client.stats.totalInvoices || 0}
                  </p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">Tickets de Soporte</label>
                  <p className="text-2xl font-bold text-orange-600">
                    {client.stats.totalTickets || 0}
                  </p>
                </div>
              </div>

              {client.stats.lastPayment && (
                <div>
                  <label className="text-sm font-medium text-gray-700">Último Pago</label>
                  <p className="text-gray-900">{formatDate(client.stats.lastPayment)}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>

      {/* Tags */}
      {client.tags && client.tags.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Etiquetas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {client.tags.map((tag, index) => (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Fecha de Registro</label>
              <p className="text-gray-900">{formatDate(client.createdAt)}</p>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700">Última Actualización</label>
              <p className="text-gray-900">{formatDate(client.updatedAt)}</p>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700">ID del Cliente</label>
              <p className="text-gray-900 font-mono text-sm">{client.id}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};