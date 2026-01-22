'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/ButtonCRM';
import { useSupport } from '@/hooks/useSupport';
import { useClients } from '@/hooks/useClients';
import { TicketFormData, EstadoTicket, PrioridadTicket, CategoriaTicket } from '@/types/support';
import Link from 'next/link';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const SupportContent: React.FC = () => {
  const { tickets, fetchTickets, loading, cambiarEstado, asignarTicket } = useSupport();
  const { clients } = useClients();
  
  const [selectedFilter, setSelectedFilter] = useState<'todos' | EstadoTicket>('todos');
  const [selectedPriority, setSelectedPriority] = useState<'todas' | PrioridadTicket>('todas');
  const [processingTicket, setProcessingTicket] = useState<string | null>(null);

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

  const filteredTickets = tickets.filter(ticket => {
    const estadoMatch = selectedFilter === 'todos' || ticket.estado === selectedFilter;
    const prioridadMatch = selectedPriority === 'todas' || ticket.prioridad === selectedPriority;
    return estadoMatch && prioridadMatch;
  });

  const getEstadoColor = (estado: EstadoTicket) => {
    const colors = {
      nuevo: 'bg-blue-100 text-blue-800',
      abierto: 'bg-yellow-100 text-yellow-800',
      asignado: 'bg-purple-100 text-purple-800',
      en_progreso: 'bg-orange-100 text-orange-800',
      esperando_cliente: 'bg-gray-100 text-gray-800',
      esperando_tercero: 'bg-indigo-100 text-indigo-800',
      resuelto: 'bg-green-100 text-green-800',
      cerrado: 'bg-gray-100 text-gray-600',
      cancelado: 'bg-red-100 text-red-800',
      duplicado: 'bg-gray-100 text-gray-500',
    };
    return colors[estado] || 'bg-gray-100 text-gray-800';
  };

  const getPrioridadColor = (prioridad: PrioridadTicket) => {
    const colors = {
      baja: 'bg-green-100 text-green-800',
      normal: 'bg-blue-100 text-blue-800',
      alta: 'bg-yellow-100 text-yellow-800',
      critica: 'bg-red-100 text-red-800',
      urgente: 'bg-red-200 text-red-900 font-bold',
    };
    return colors[prioridad] || 'bg-gray-100 text-gray-800';
  };

  const getCategoriaIcon = (categoria: CategoriaTicket) => {
    const icons = {
      tecnico: '🔧',
      facturacion: '💰',
      comercial: '💼',
      abuso: '🚨',
      solicitud: '📝',
      incidente: '⚠️',
      consulta: '❓',
      sugerencia: '💡',
    };
    return icons[categoria] || '🎫';
  };

  const handleCambiarEstado = async (ticketId: string, nuevoEstado: EstadoTicket, motivo?: string) => {
    setProcessingTicket(ticketId);
    try {
      await cambiarEstado(ticketId, nuevoEstado, motivo);
      alert(`✅ Ticket cambiado a estado: ${nuevoEstado}`);
    } catch (error) {
      alert('❌ Error al cambiar el estado del ticket');
    } finally {
      setProcessingTicket(null);
    }
  };

  const handleAsignarTicket = async (ticketId: string) => {
    const agenteId = prompt('ID del agente:');
    const agenteNombre = prompt('Nombre del agente:');
    if (!agenteId || !agenteNombre) return;
    
    setProcessingTicket(ticketId);
    try {
      await asignarTicket(ticketId, agenteId, agenteNombre);
      alert('✅ Ticket asignado exitosamente');
    } catch (error) {
      alert('❌ Error al asignar el ticket');
    } finally {
      setProcessingTicket(null);
    }
  };

  const estadisticas = {
    total: tickets.length,
    nuevos: tickets.filter(t => t.estado === 'nuevo').length,
    abiertos: tickets.filter(t => ['abierto', 'asignado', 'en_progreso'].includes(t.estado)).length,
    resueltos: tickets.filter(t => t.estado === 'resuelto').length,
    cerrados: tickets.filter(t => t.estado === 'cerrado').length,
    criticos: tickets.filter(t => t.prioridad === 'critica').length,
    urgentes: tickets.filter(t => t.prioridad === 'urgente').length,
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
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
            🎧 Sistema de Soporte
          </h1>
          <p className="text-gray-600">
            Gestión de tickets y mesa de ayuda
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Link href="/admin/support/nuevo-ticket">
            <Button className="bg-blue-600 hover:bg-blue-700">
              🎫 Nuevo Ticket
            </Button>
          </Link>
          <Link href="/admin/support/agentes">
            <Button variant="outline">
              👥 Agentes
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
                <div className="text-3xl">🎫</div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Tickets
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
                <div className="text-3xl">🆕</div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Nuevos
                  </dt>
                  <dd className="text-2xl font-semibold text-gray-900">
                    {estadisticas.nuevos}
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
                <div className="text-3xl">🔄</div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    En Proceso
                  </dt>
                  <dd className="text-2xl font-semibold text-gray-900">
                    {estadisticas.abiertos}
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
                <div className="text-3xl">🚨</div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Críticos/Urgentes
                  </dt>
                  <dd className="text-2xl font-semibold text-gray-900">
                    {estadisticas.criticos + estadisticas.urgentes}
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
          <CardTitle>Tickets de Soporte</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filtrar por Estado:
              </label>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedFilter === 'todos' ? 'default' : 'outline'}
                  onClick={() => setSelectedFilter('todos')}
                  size="sm"
                >
                  Todos ({tickets.length})
                </Button>
                <Button
                  variant={selectedFilter === 'nuevo' ? 'default' : 'outline'}
                  onClick={() => setSelectedFilter('nuevo')}
                  size="sm"
                >
                  🆕 Nuevos ({estadisticas.nuevos})
                </Button>
                <Button
                  variant={selectedFilter === 'abierto' ? 'default' : 'outline'}
                  onClick={() => setSelectedFilter('abierto')}
                  size="sm"
                >
                  📂 Abiertos ({tickets.filter(t => t.estado === 'abierto').length})
                </Button>
                <Button
                  variant={selectedFilter === 'asignado' ? 'default' : 'outline'}
                  onClick={() => setSelectedFilter('asignado')}
                  size="sm"
                >
                  👤 Asignados ({tickets.filter(t => t.estado === 'asignado').length})
                </Button>
                <Button
                  variant={selectedFilter === 'en_progreso' ? 'default' : 'outline'}
                  onClick={() => setSelectedFilter('en_progreso')}
                  size="sm"
                >
                  🔄 En Progreso ({tickets.filter(t => t.estado === 'en_progreso').length})
                </Button>
                <Button
                  variant={selectedFilter === 'resuelto' ? 'default' : 'outline'}
                  onClick={() => setSelectedFilter('resuelto')}
                  size="sm"
                >
                  ✅ Resueltos ({estadisticas.resueltos})
                </Button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filtrar por Prioridad:
              </label>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedPriority === 'todas' ? 'default' : 'outline'}
                  onClick={() => setSelectedPriority('todas')}
                  size="sm"
                >
                  Todas
                </Button>
                <Button
                  variant={selectedPriority === 'urgente' ? 'default' : 'outline'}
                  onClick={() => setSelectedPriority('urgente')}
                  size="sm"
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  🚨 Urgente ({tickets.filter(t => t.prioridad === 'urgente').length})
                </Button>
                <Button
                  variant={selectedPriority === 'critica' ? 'default' : 'outline'}
                  onClick={() => setSelectedPriority('critica')}
                  size="sm"
                  className="bg-red-500 hover:bg-red-600 text-white"
                >
                  🔴 Crítica ({tickets.filter(t => t.prioridad === 'critica').length})
                </Button>
                <Button
                  variant={selectedPriority === 'alta' ? 'default' : 'outline'}
                  onClick={() => setSelectedPriority('alta')}
                  size="sm"
                >
                  🟡 Alta ({tickets.filter(t => t.prioridad === 'alta').length})
                </Button>
                <Button
                  variant={selectedPriority === 'normal' ? 'default' : 'outline'}
                  onClick={() => setSelectedPriority('normal')}
                  size="sm"
                >
                  🔵 Normal ({tickets.filter(t => t.prioridad === 'normal').length})
                </Button>
              </div>
            </div>
          </div>

          {/* Lista de tickets */}
          <div className="space-y-4">
            {filteredTickets.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🎫</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No hay tickets {selectedFilter !== 'todos' ? `en estado: ${selectedFilter}` : ''}
                </h3>
                <p className="text-gray-500 mb-6">
                  Los tickets aparecerán aquí cuando los clientes reporten problemas
                </p>
                <Link href="/admin/support/nuevo-ticket">
                  <Button>🎫 Crear Primer Ticket</Button>
                </Link>
              </div>
            ) : (
              filteredTickets.map((ticket) => (
                <div 
                  key={ticket.id} 
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">
                        {getCategoriaIcon(ticket.categoria)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-medium text-gray-900">
                            {ticket.numero}
                          </h3>
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getEstadoColor(ticket.estado)}`}>
                            {ticket.estado}
                          </span>
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPrioridadColor(ticket.prioridad)}`}>
                            {ticket.prioridad}
                          </span>
                        </div>
                        <h4 className="text-md font-medium text-gray-800 mb-2">
                          {ticket.titulo}
                        </h4>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>
                            <strong>Cliente:</strong> {ticket.clienteNombre}
                          </p>
                          <p>
                            <strong>Categoría:</strong> {ticket.categoria}
                          </p>
                          <p>
                            <strong>Creado:</strong> {format(new Date(ticket.fechaCreacion), 'dd/MM/yyyy HH:mm', { locale: es })}
                          </p>
                          {ticket.asignadoNombre && (
                            <p>
                              <strong>Asignado a:</strong> {ticket.asignadoNombre}
                            </p>
                          )}
                          {ticket.servicioNombre && (
                            <p>
                              <strong>Servicio:</strong> {ticket.servicioNombre}
                            </p>
                          )}
                        </div>
                        
                        {ticket.descripcion && (
                          <div className="mt-3 p-3 bg-gray-50 rounded-md">
                            <p className="text-sm text-gray-700 line-clamp-2">
                              {ticket.descripcion}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="text-right min-w-0 flex-shrink-0">
                      <div className="flex items-center space-x-2 mb-2">
                        {ticket.estado === 'nuevo' && (
                          <>
                            <Button
                              size="sm"
                              onClick={() => handleAsignarTicket(ticket.id!)}
                              disabled={processingTicket === ticket.id}
                              className="bg-purple-600 hover:bg-purple-700"
                            >
                              {processingTicket === ticket.id ? '⏳' : '👤'} Asignar
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => handleCambiarEstado(ticket.id!, 'abierto')}
                              disabled={processingTicket === ticket.id}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              {processingTicket === ticket.id ? '⏳' : '📂'} Abrir
                            </Button>
                          </>
                        )}
                        
                        {['abierto', 'asignado'].includes(ticket.estado) && (
                          <Button
                            size="sm"
                            onClick={() => handleCambiarEstado(ticket.id!, 'en_progreso')}
                            disabled={processingTicket === ticket.id}
                            className="bg-orange-600 hover:bg-orange-700"
                          >
                            {processingTicket === ticket.id ? '⏳' : '🔄'} En Progreso
                          </Button>
                        )}
                        
                        {ticket.estado === 'en_progreso' && (
                          <>
                            <Button
                              size="sm"
                              onClick={() => handleCambiarEstado(ticket.id!, 'resuelto', 'Problema resuelto')}
                              disabled={processingTicket === ticket.id}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              {processingTicket === ticket.id ? '⏳' : '✅'} Resolver
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleCambiarEstado(ticket.id!, 'esperando_cliente')}
                              disabled={processingTicket === ticket.id}
                            >
                              ⏰ Esperando Cliente
                            </Button>
                          </>
                        )}
                        
                        {ticket.estado === 'resuelto' && (
                          <Button
                            size="sm"
                            onClick={() => handleCambiarEstado(ticket.id!, 'cerrado', 'Confirmado por cliente')}
                            disabled={processingTicket === ticket.id}
                            className="bg-gray-600 hover:bg-gray-700"
                          >
                            {processingTicket === ticket.id ? '⏳' : '🔒'} Cerrar
                          </Button>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Link href={`/admin/support/ticket/${ticket.id}`}>
                          <Button size="sm" variant="outline">
                            👁️ Ver Detalle
                          </Button>
                        </Link>
                        <Button size="sm" variant="outline">
                          💬 Responder
                        </Button>
                      </div>
                      
                      {/* Alertas de SLA */}
                      {ticket.vencimientoRespuesta && new Date(ticket.vencimientoRespuesta) < new Date() && !ticket.fechaPrimeraRespuesta && (
                        <div className="mt-2 text-xs text-red-600 font-medium">
                          ⚠️ SLA de respuesta vencido
                        </div>
                      )}
                      
                      {ticket.vencimientoResolucion && new Date(ticket.vencimientoResolucion) < new Date() && ticket.estado !== 'resuelto' && ticket.estado !== 'cerrado' && (
                        <div className="mt-1 text-xs text-red-600 font-medium">
                          🚨 SLA de resolución vencido
                        </div>
                      )}
                    </div>
                  </div>
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
            <Link href="/admin/support/nuevo-ticket">
              <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center">
                <span className="text-2xl mb-2">🎫</span>
                <span>Nuevo Ticket</span>
              </Button>
            </Link>
            <Link href="/admin/support/agentes">
              <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center">
                <span className="text-2xl mb-2">👥</span>
                <span>Gestión Agentes</span>
              </Button>
            </Link>
            <Link href="/admin/support/reportes">
              <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center">
                <span className="text-2xl mb-2">📊</span>
                <span>Reportes SLA</span>
              </Button>
            </Link>
            <Link href="/admin/support/configuracion">
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

export default SupportContent;