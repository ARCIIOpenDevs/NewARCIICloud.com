'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/ButtonCRM';
import { useBilling } from '@/hooks/useBilling';
import { useClients } from '@/hooks/useClients';
import { FacturaFormData, EstadoFactura } from '@/types/billing';
import Link from 'next/link';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const BillingContent: React.FC = () => {
  const { facturas, fetchFacturas, loading, timbrarFactura, cancelarFactura } = useBilling();
  const { clients } = useClients();
  
  const [selectedFilter, setSelectedFilter] = useState<'todas' | EstadoFactura>('todas');
  const [processingFactura, setProcessingFactura] = useState<string | null>(null);

  useEffect(() => {
    fetchFacturas();
  }, [fetchFacturas]);

  const filteredFacturas = facturas.filter(factura => 
    selectedFilter === 'todas' || factura.estado === selectedFilter
  );

  const getEstadoColor = (estado: EstadoFactura) => {
    const colors = {
      borrador: 'bg-gray-100 text-gray-800',
      pendiente: 'bg-yellow-100 text-yellow-800',
      timbrada: 'bg-green-100 text-green-800',
      cancelada: 'bg-red-100 text-red-800',
      pagada: 'bg-blue-100 text-blue-800',
      vencida: 'bg-orange-100 text-orange-800',
      error: 'bg-red-100 text-red-800',
    };
    return colors[estado] || 'bg-gray-100 text-gray-800';
  };

  const getEstadoIcon = (estado: EstadoFactura) => {
    const icons = {
      borrador: '📝',
      pendiente: '⏳',
      timbrada: '✅',
      cancelada: '❌',
      pagada: '💰',
      vencida: '⚠️',
      error: '🚫',
    };
    return icons[estado] || '📄';
  };

  const handleTimbrarFactura = async (facturaId: string) => {
    setProcessingFactura(facturaId);
    try {
      const success = await timbrarFactura(facturaId);
      if (success) {
        alert('✅ Factura timbrada exitosamente');
      }
    } catch (error) {
      alert('❌ Error al timbrar la factura');
    } finally {
      setProcessingFactura(null);
    }
  };

  const handleCancelarFactura = async (facturaId: string) => {
    const motivo = prompt('Ingresa el motivo de cancelación:');
    if (!motivo) return;
    
    setProcessingFactura(facturaId);
    try {
      const success = await cancelarFactura(facturaId, motivo);
      if (success) {
        alert('✅ Factura cancelada exitosamente');
      }
    } catch (error) {
      alert('❌ Error al cancelar la factura');
    } finally {
      setProcessingFactura(null);
    }
  };

  const estadisticas = {
    total: facturas.length,
    timbradas: facturas.filter(f => f.estado === 'timbrada').length,
    pendientes: facturas.filter(f => f.estado === 'pendiente' || f.estado === 'borrador').length,
    pagas: facturas.filter(f => f.estado === 'pagada').length,
    montoTotal: facturas
      .filter(f => f.estado === 'timbrada' || f.estado === 'pagada')
      .reduce((sum, f) => sum + f.total, 0)
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-24 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            💰 Sistema de Facturación
          </h1>
          <p className="text-gray-600">
            Gestión de facturas y complementos de pago con CFDI 4.0
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Link href="/admin/billing/nueva-factura">
            <Button className="bg-blue-600 hover:bg-blue-700">
              📄 Nueva Factura
            </Button>
          </Link>
          <Link href="/admin/billing/nuevo-pago">
            <Button variant="outline">
              💳 Nuevo Pago
            </Button>
          </Link>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="text-3xl">📊</div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Facturas
                  </dt>
                  <dd className="text-2xl font-semibold text-gray-900">
                    {estadisticas.total}
                  </dd>
                </dl>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="text-3xl">✅</div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Timbradas
                  </dt>
                  <dd className="text-2xl font-semibold text-gray-900">
                    {estadisticas.timbradas}
                  </dd>
                </dl>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="text-3xl">⏳</div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Pendientes
                  </dt>
                  <dd className="text-2xl font-semibold text-gray-900">
                    {estadisticas.pendientes}
                  </dd>
                </dl>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="text-3xl">💰</div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Monto Total
                  </dt>
                  <dd className="text-2xl font-semibold text-gray-900">
                    ${estadisticas.montoTotal.toLocaleString()} MXN
                  </dd>
                </dl>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filtros */}
      <Card>
        <CardHeader>
          <CardTitle>Facturas Emitidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedFilter === 'todas' ? 'default' : 'outline'}
                onClick={() => setSelectedFilter('todas')}
                size="sm"
              >
                Todas ({facturas.length})
              </Button>
              <Button
                variant={selectedFilter === 'borrador' ? 'default' : 'outline'}
                onClick={() => setSelectedFilter('borrador')}
                size="sm"
              >
                📝 Borrador ({facturas.filter(f => f.estado === 'borrador').length})
              </Button>
              <Button
                variant={selectedFilter === 'pendiente' ? 'default' : 'outline'}
                onClick={() => setSelectedFilter('pendiente')}
                size="sm"
              >
                ⏳ Pendiente ({facturas.filter(f => f.estado === 'pendiente').length})
              </Button>
              <Button
                variant={selectedFilter === 'timbrada' ? 'default' : 'outline'}
                onClick={() => setSelectedFilter('timbrada')}
                size="sm"
              >
                ✅ Timbrada ({facturas.filter(f => f.estado === 'timbrada').length})
              </Button>
              <Button
                variant={selectedFilter === 'pagada' ? 'default' : 'outline'}
                onClick={() => setSelectedFilter('pagada')}
                size="sm"
              >
                💰 Pagada ({facturas.filter(f => f.estado === 'pagada').length})
              </Button>
            </div>
          </div>

          {/* Lista de facturas */}
          <div className="space-y-4">
            {filteredFacturas.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">📄</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No hay facturas {selectedFilter !== 'todas' ? `en estado: ${selectedFilter}` : ''}
                </h3>
                <p className="text-gray-500 mb-6">
                  Comienza creando tu primera factura con CFDI 4.0
                </p>
                <Link href="/admin/billing/nueva-factura">
                  <Button>📄 Crear Primera Factura</Button>
                </Link>
              </div>
            ) : (
              filteredFacturas.map((factura) => (
                <div 
                  key={factura.id} 
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl">
                        {getEstadoIcon(factura.estado)}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="text-lg font-medium text-gray-900">
                            {factura.serie}-{factura.folio}
                          </h3>
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getEstadoColor(factura.estado)}`}>
                            {factura.estado}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Cliente: {factura.clienteNombre}
                        </p>
                        <p className="text-sm text-gray-500">
                          Fecha: {format(new Date(factura.fecha), 'dd/MM/yyyy', { locale: es })}
                        </p>
                        {factura.uuid && (
                          <p className="text-xs text-gray-400 font-mono">
                            UUID: {factura.uuid.substring(0, 20)}...
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-lg font-semibold text-gray-900">
                        ${factura.total.toLocaleString()} {factura.moneda}
                      </div>
                      <div className="flex items-center space-x-2 mt-2">
                        {factura.estado === 'borrador' && (
                          <>
                            <Link href={`/admin/billing/editar/${factura.id}`}>
                              <Button size="sm" variant="outline">
                                ✏️ Editar
                              </Button>
                            </Link>
                            <Button
                              size="sm"
                              onClick={() => handleTimbrarFactura(factura.id!)}
                              disabled={processingFactura === factura.id}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              {processingFactura === factura.id ? '⏳' : '🏷️'} Timbrar
                            </Button>
                          </>
                        )}
                        
                        {factura.estado === 'timbrada' && (
                          <>
                            <Button size="sm" variant="outline">
                              📄 Ver PDF
                            </Button>
                            <Button size="sm" variant="outline">
                              📧 Enviar
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleCancelarFactura(factura.id!)}
                              disabled={processingFactura === factura.id}
                              className="text-red-600 hover:text-red-700"
                            >
                              {processingFactura === factura.id ? '⏳' : '❌'} Cancelar
                            </Button>
                          </>
                        )}
                        
                        {factura.estado === 'error' && (
                          <Button
                            size="sm"
                            onClick={() => handleTimbrarFactura(factura.id!)}
                            disabled={processingFactura === factura.id}
                            className="bg-yellow-600 hover:bg-yellow-700"
                          >
                            {processingFactura === factura.id ? '⏳' : '🔄'} Reintentar
                          </Button>
                        )}
                        
                        <Link href={`/admin/billing/detalle/${factura.id}`}>
                          <Button size="sm" variant="outline">
                            👁️ Ver
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {factura.pacResponse?.error && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
                      <p className="text-sm text-red-800">
                        <strong>Error PAC:</strong> {factura.pacResponse.error}
                      </p>
                      {factura.pacResponse.codigoError && (
                        <p className="text-xs text-red-600 mt-1">
                          Código: {factura.pacResponse.codigoError}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* Acciones rápidas */}
      <Card>
        <CardHeader>
          <CardTitle>⚡ Acciones Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Link href="/admin/billing/nueva-factura">
              <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center">
                <span className="text-2xl mb-2">📄</span>
                <span>Nueva Factura</span>
              </Button>
            </Link>
            <Link href="/admin/billing/nuevo-pago">
              <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center">
                <span className="text-2xl mb-2">💳</span>
                <span>Complemento Pago</span>
              </Button>
            </Link>
            <Link href="/admin/billing/reportes">
              <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center">
                <span className="text-2xl mb-2">📊</span>
                <span>Reportes</span>
              </Button>
            </Link>
            <Link href="/admin/billing/configuracion">
              <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center">
                <span className="text-2xl mb-2">⚙️</span>
                <span>Configuración</span>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BillingContent;