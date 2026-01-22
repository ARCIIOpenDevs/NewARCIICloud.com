'use client';

import React, { useState } from 'react';
import { Service } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/ButtonCRM';
import { Badge } from '@/components/ui/Badge';

interface ServiceListProps {
  services: Service[];
  loading: boolean;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onServiceSelect: (service: Service) => void;
  onCreateService: () => void;
  onEditService: (service: Service) => void;
  onDeleteService: (serviceId: string) => void;
  onRenewService: (serviceId: string) => void;
  onRefresh: () => void;
}

const SERVICE_TYPE_INFO = {
  hosting: { label: 'Hosting Web', icon: '🌐', color: 'bg-green-100 text-green-800' },
  vps: { label: 'VPS Cloud', icon: '☁️', color: 'bg-blue-100 text-blue-800' },
  dedicated: { label: 'Servidor Dedicado', icon: '🖥️', color: 'bg-purple-100 text-purple-800' },
  domain: { label: 'Dominio', icon: '🌍', color: 'bg-yellow-100 text-yellow-800' },
  ssl: { label: 'SSL', icon: '🔐', color: 'bg-red-100 text-red-800' },
  email: { label: 'Email', icon: '📧', color: 'bg-indigo-100 text-indigo-800' },
  cdn: { label: 'CDN', icon: '🚀', color: 'bg-pink-100 text-pink-800' },
  backup: { label: 'Backup', icon: '💾', color: 'bg-gray-100 text-gray-800' },
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'bg-green-100 text-green-800';
    case 'suspended':
      return 'bg-yellow-100 text-yellow-800';
    case 'cancelled':
      return 'bg-red-100 text-red-800';
    case 'pending':
      return 'bg-blue-100 text-blue-800';
    case 'expired':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'active':
      return 'Activo';
    case 'suspended':
      return 'Suspendido';
    case 'cancelled':
      return 'Cancelado';
    case 'pending':
      return 'Pendiente';
    case 'expired':
      return 'Expirado';
    default:
      return status;
  }
};

const formatDate = (date: any) => {
  if (!date) return 'N/A';
  const d = date.toDate ? date.toDate() : new Date(date);
  return d.toLocaleDateString('es-MX');
};

const isExpiringSoon = (expiresAt: any) => {
  if (!expiresAt) return false;
  const expDate = expiresAt.toDate ? expiresAt.toDate() : new Date(expiresAt);
  const now = new Date();
  const diffTime = expDate.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= 30 && diffDays > 0;
};

export const ServiceList: React.FC<ServiceListProps> = ({
  services,
  loading,
  searchQuery,
  onSearchChange,
  onServiceSelect,
  onCreateService,
  onEditService,
  onDeleteService,
  onRenewService,
  onRefresh,
}) => {
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'date' | 'expires' | 'price'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Filtrar y ordenar servicios
  const filteredAndSortedServices = services
    .filter(service => {
      // Filtro de búsqueda
      const matchesSearch = 
        (service.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.serviceName?.toLowerCase().includes(searchQuery.toLowerCase())) ||
        service.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.domain?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.server?.hostname?.toLowerCase().includes(searchQuery.toLowerCase());

      // Filtro de tipo
      const matchesType = filterType === 'all' || service.type === filterType;

      // Filtro de estado
      const matchesStatus = filterStatus === 'all' || service.status === filterStatus;

      return matchesSearch && matchesType && matchesStatus;
    })
    .sort((a, b) => {
      let aVal: any, bVal: any;

      switch (sortBy) {
        case 'name':
          aVal = a.name;
          bVal = b.name;
          break;
        case 'date':
          aVal = a.createdAt;
          bVal = b.createdAt;
          break;
        case 'expires':
          aVal = a.expiresAt;
          bVal = b.expiresAt;
          break;
        case 'price':
          aVal = a.pricing?.price || 0;
          bVal = b.pricing?.price || 0;
          break;
        default:
          return 0;
      }

      if (sortOrder === 'asc') {
        return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
      } else {
        return aVal > bVal ? -1 : aVal < bVal ? 1 : 0;
      }
    });

  const handleDeleteClick = (service: Service) => {
    if (window.confirm(`¿Estás seguro de que quieres eliminar el servicio "${service.name}"?`)) {
      if (service.id) onDeleteService(service.id);
    }
  };

  const handleRenewClick = (service: Service) => {
    if (window.confirm(`¿Renovar el servicio "${service.name}" por 12 meses más?`)) {
      if (service.id) onRenewService(service.id);
    }
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-2">Cargando servicios...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header con controles */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div className="flex-1 max-w-md">
          <input
            type="text"
            placeholder="Buscar servicios..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Todos los tipos</option>
            {Object.entries(SERVICE_TYPE_INFO).map(([key, info]) => (
              <option key={key} value={key}>
                {info.icon} {info.label}
              </option>
            ))}
          </select>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Todos los estados</option>
            <option value="active">Activos</option>
            <option value="suspended">Suspendidos</option>
            <option value="cancelled">Cancelados</option>
            <option value="pending">Pendientes</option>
            <option value="expired">Expirados</option>
          </select>

          <select
            value={`${sortBy}-${sortOrder}`}
            onChange={(e) => {
              const [field, order] = e.target.value.split('-');
              setSortBy(field as any);
              setSortOrder(order as any);
            }}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="name-asc">Nombre A-Z</option>
            <option value="name-desc">Nombre Z-A</option>
            <option value="date-desc">Más recientes</option>
            <option value="date-asc">Más antiguos</option>
            <option value="expires-asc">Expiran pronto</option>
            <option value="expires-desc">Expiran más tarde</option>
            <option value="price-desc">Mayor precio</option>
            <option value="price-asc">Menor precio</option>
          </select>

          <Button onClick={onRefresh} variant="outline">
            Actualizar
          </Button>

          <Button onClick={onCreateService}>
            Nuevo Servicio
          </Button>
        </div>
      </div>

      {/* Lista de servicios */}
      {filteredAndSortedServices.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <div className="text-gray-500">
              {searchQuery || filterType !== 'all' || filterStatus !== 'all'
                ? 'No se encontraron servicios que coincidan con los filtros'
                : 'No hay servicios registrados'
              }
            </div>
            {(!searchQuery && filterType === 'all' && filterStatus === 'all') && (
              <Button onClick={onCreateService} className="mt-4">
                Crear primer servicio
              </Button>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {filteredAndSortedServices.map((service) => {
            const typeInfo = SERVICE_TYPE_INFO[service.serviceType || service.type || 'hosting'];
            const expiringSoon = isExpiringSoon(service.expiresAt);
            
            return (
              <Card 
                key={service.id} 
                className={`hover:shadow-md transition-shadow cursor-pointer ${
                  expiringSoon ? 'ring-2 ring-yellow-200' : ''
                }`}
                onClick={() => onServiceSelect(service)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {typeInfo.icon} {service.name}
                        </h3>
                        <Badge className={typeInfo.color}>
                          {typeInfo.label}
                        </Badge>
                        <Badge className={getStatusColor(service.status)}>
                          {getStatusLabel(service.status)}
                        </Badge>
                        {expiringSoon && (
                          <Badge className="bg-yellow-100 text-yellow-800">
                            ⚠️ Expira pronto
                          </Badge>
                        )}
                      </div>

                      <div className="space-y-1 text-sm text-gray-600">
                        <p>Plan: {service.plan || 'N/A'}</p>
                        {service.domain?.name && <p>Dominio: {service.domain.name}</p>}
                        {service.server?.hostname && <p>Servidor: {service.server.hostname}</p>}
                        <p>Expira: {formatDate(service.expiresAt)}</p>
                        {service.description && <p className="italic">{service.description}</p>}
                      </div>

                      <div className="mt-3 flex gap-4 text-sm">
                        <span className="font-medium text-green-600">
                          ${service.pricing.price.toLocaleString('es-MX')} {service.pricing.currency}
                        </span>
                        <span className="text-gray-600">
                          {service.pricing.billingCycle === 'monthly' ? 'mensual' :
                           service.pricing.billingCycle === 'quarterly' ? 'trimestral' :
                           service.pricing.billingCycle === 'annually' ? 'anual' : service.pricing.billingCycle}
                        </span>
                        {service.autoRenew && (
                          <span className="text-blue-600">Auto-renovación</span>
                        )}
                      </div>

                    </div>

                    <div className="flex items-center space-x-2 ml-4">
                      {expiringSoon && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-green-600 hover:text-green-700 hover:bg-green-50"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRenewClick(service);
                          }}
                        >
                          Renovar
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          onEditService(service);
                        }}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteClick(service);
                        }}
                      >
                        Eliminar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {/* Información de resultados */}
      <div className="text-sm text-gray-600 text-center">
        Mostrando {filteredAndSortedServices.length} de {services.length} servicios
      </div>
    </div>
  );
};