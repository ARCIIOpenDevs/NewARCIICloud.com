'use client';

import React, { useState } from 'react';
import { Client } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/ButtonCRM';
import { Badge } from '@/components/ui/Badge';

interface ClientListProps {
  clients: Client[];
  loading: boolean;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onClientSelect: (client: Client) => void;
  onCreateClient: () => void;
  onEditClient: (client: Client) => void;
  onDeleteClient: (clientId: string) => void;
  onRefresh: () => void;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'bg-green-100 text-green-800';
    case 'inactive':
      return 'bg-yellow-100 text-yellow-800';
    case 'suspended':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getSegmentColor = (segment: string) => {
  switch (segment) {
    case 'vip':
      return 'bg-purple-100 text-purple-800';
    case 'premium':
      return 'bg-blue-100 text-blue-800';
    case 'enterprise':
      return 'bg-indigo-100 text-indigo-800';
    default:
      return 'bg-gray-100 text-gray-800';
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

const formatDate = (date: any) => {
  if (!date) return 'N/A';
  const d = date.toDate ? date.toDate() : new Date(date);
  return d.toLocaleDateString('es-MX');
};

export const ClientList: React.FC<ClientListProps> = ({
  clients,
  loading,
  searchQuery,
  onSearchChange,
  onClientSelect,
  onCreateClient,
  onEditClient,
  onDeleteClient,
  onRefresh,
}) => {
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterSegment, setFilterSegment] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'date' | 'revenue'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Filtrar y ordenar clientes
  const filteredAndSortedClients = clients
    .filter(client => {
      // Filtro de búsqueda
      const matchesSearch = 
        client.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (client.company?.name && client.company.name.toLowerCase().includes(searchQuery.toLowerCase()));

      // Filtro de estado
      const matchesStatus = filterStatus === 'all' || client.status === filterStatus;

      // Filtro de segmento
      const matchesSegment = filterSegment === 'all' || client.segment === filterSegment;

      return matchesSearch && matchesStatus && matchesSegment;
    })
    .sort((a, b) => {
      let aVal: any, bVal: any;

      switch (sortBy) {
        case 'name':
          aVal = `${a.firstName} ${a.lastName}`;
          bVal = `${b.firstName} ${b.lastName}`;
          break;
        case 'date':
          aVal = a.createdAt;
          bVal = b.createdAt;
          break;
        case 'revenue':
          aVal = a.stats?.totalRevenue || 0;
          bVal = b.stats?.totalRevenue || 0;
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

  const handleDeleteClick = (client: Client) => {
    if (window.confirm(`¿Estás seguro de que quieres eliminar al cliente ${client.firstName} ${client.lastName}?`)) {
      if (client.id) onDeleteClient(client.id);
    }
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-2">Cargando clientes...</span>
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
            placeholder="Buscar clientes..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Todos los estados</option>
            <option value="active">Activos</option>
            <option value="inactive">Inactivos</option>
            <option value="suspended">Suspendidos</option>
          </select>

          <select
            value={filterSegment}
            onChange={(e) => setFilterSegment(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Todos los segmentos</option>
            <option value="standard">Estándar</option>
            <option value="premium">Premium</option>
            <option value="vip">VIP</option>
            <option value="enterprise">Enterprise</option>
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
            <option value="revenue-desc">Mayor facturación</option>
            <option value="revenue-asc">Menor facturación</option>
          </select>

          <Button onClick={onRefresh} variant="outline">
            Actualizar
          </Button>

          <Button onClick={onCreateClient}>
            Nuevo Cliente
          </Button>
        </div>
      </div>

      {/* Lista de clientes */}
      {filteredAndSortedClients.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <div className="text-gray-500">
              {searchQuery || filterStatus !== 'all' || filterSegment !== 'all'
                ? 'No se encontraron clientes que coincidan con los filtros'
                : 'No hay clientes registrados'
              }
            </div>
            {(!searchQuery && filterStatus === 'all' && filterSegment === 'all') && (
              <Button onClick={onCreateClient} className="mt-4">
                Crear primer cliente
              </Button>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {filteredAndSortedClients.map((client) => (
            <Card 
              key={client.id} 
              className="hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => onClientSelect(client)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {client.firstName} {client.lastName}
                      </h3>
                      <Badge className={getStatusColor(client.status)}>
                        {client.status === 'active' ? 'Activo' : 
                         client.status === 'inactive' ? 'Inactivo' : 'Suspendido'}
                      </Badge>
                      <Badge className={getSegmentColor(client.segment)}>
                        {client.segment === 'standard' ? 'Estándar' :
                         client.segment === 'premium' ? 'Premium' :
                         client.segment === 'vip' ? 'VIP' : 'Enterprise'}
                      </Badge>
                    </div>

                    <div className="space-y-1 text-sm text-gray-600">
                      <p>{client.email}</p>
                      {client.phone && <p>{client.phone}</p>}
                      {client.company?.name && (
                        <p className="font-medium">{client.company.name}</p>
                      )}
                      <p>{getAccountTypeLabel(client.accountType)}</p>
                      <p>Registro: {formatDate(client.createdAt)}</p>
                    </div>

                    {client.stats && (
                      <div className="mt-3 flex gap-4 text-sm">
                        <span className="text-green-600 font-medium">
                          ${client.stats.totalRevenue?.toLocaleString('es-MX') || '0'} MXN
                        </span>
                        <span className="text-gray-600">
                          {client.stats.activeServices || 0} servicios
                        </span>
                        <span className="text-gray-600">
                          {client.stats.totalInvoices || 0} facturas
                        </span>
                      </div>
                    )}

                    {client.tags && client.tags.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {client.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center space-x-2 ml-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        onEditClient(client);
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
                        handleDeleteClick(client);
                      }}
                    >
                      Eliminar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Información de resultados */}
      <div className="text-sm text-gray-600 text-center">
        Mostrando {filteredAndSortedClients.length} de {clients.length} clientes
      </div>
    </div>
  );
};