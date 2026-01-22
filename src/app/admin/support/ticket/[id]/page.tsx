'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useSupport } from '@/hooks/useSupport';
import { TicketFormData, RespuestaTicket, EstadoTicket } from '@/types/support';
import { format, formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

const TicketDetailPage: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const ticketId = params.id as string;
  
  const { 
    fetchTicketById,
    updateTicketStatus,
    addTicketResponse,
    assignTicket,
    getTicketResponses
  } = useSupport();

  const [ticket, setTicket] = useState<TicketFormData | null>(null);
  const [responses, setResponses] = useState<RespuestaTicket[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [newResponse, setNewResponse] = useState('');
  const [responseType, setResponseType] = useState<'publica' | 'interna'>('publica');

  useEffect(() => {
    loadTicketData();
  }, [ticketId]);

  const loadTicketData = async () => {
    try {
      setLoading(true);
      const ticketData = await fetchTicketById(ticketId);
      if (ticketData) {
        setTicket(ticketData);
        const ticketResponses = await getTicketResponses(ticketId);
        setResponses(ticketResponses);
      }
    } catch (error) {
      console.error('Error loading ticket:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (newStatus: EstadoTicket) => {
    if (!ticket) return;
    
    setUpdating(true);
    try {
      await updateTicketStatus(ticketId, newStatus);
      setTicket({ ...ticket, estado: newStatus, fechaActualizacion: new Date().toISOString() });
    } catch (error) {
      console.error('Error updating status:', error);
      alert('❌ Error al actualizar el estado del ticket');
    } finally {
      setUpdating(false);
    }
  };

  const handleAddResponse = async () => {
    if (!newResponse.trim() || !ticket) return;
    
    setUpdating(true);
    try {
      const response: Omit<RespuestaTicket, 'id' | 'fechaCreacion'> = {
        ticketId,
        autor: 'admin', // Cambiar por usuario actual
        autorNombre: 'Administrador', 
        autorTipo: 'agente',
        contenido: newResponse.trim(),
        esPublica: responseType === 'publica',
        esInterna: responseType === 'interna',
        editada: false,
        adjuntos: []
      };
      
      await addTicketResponse(ticketId, response);
      await loadTicketData();
      setNewResponse('');
    } catch (error) {
      console.error('Error adding response:', error);
      alert('❌ Error al agregar la respuesta');
    } finally {
      setUpdating(false);
    }
  };

  const getStatusColor = (estado: EstadoTicket) => {
    const colors = {
      'nuevo': 'bg-blue-100 text-blue-800',
      'abierto': 'bg-green-100 text-green-800',
      'asignado': 'bg-cyan-100 text-cyan-800',
      'en_progreso': 'bg-yellow-100 text-yellow-800',
      'esperando_cliente': 'bg-orange-100 text-orange-800',
      'esperando_tercero': 'bg-orange-100 text-orange-800',
      'escalado': 'bg-red-100 text-red-800',
      'resuelto': 'bg-purple-100 text-purple-800',
      'cerrado': 'bg-gray-100 text-gray-800',
      'cancelado': 'bg-red-100 text-red-800',
      'duplicado': 'bg-gray-100 text-gray-800'
    };
    return colors[estado as keyof typeof colors] || colors['nuevo'];
  };

  const getPriorityColor = (prioridad: string) => {
    const colors = {
      'baja': 'text-green-600',
      'normal': 'text-blue-600',
      'alta': 'text-yellow-600',
      'critica': 'text-red-600',
      'urgente': 'text-red-700 font-bold'
    };
    return colors[prioridad as keyof typeof colors] || colors['normal'];
  };

  const getPriorityIcon = (prioridad: string) => {
    const icons = {
      'baja': '🟢',
      'normal': '🔵',
      'alta': '🟡',
      'critica': '🔴',
      'urgente': '🚨'
    };
    return icons[prioridad as keyof typeof icons] || '🔵';
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2">Cargando ticket...</span>
        </div>
      </div>
    );
  }

  if (!ticket) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="text-center py-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Ticket no encontrado</h2>
            <p className="text-gray-600 mb-4">El ticket solicitado no existe o no tienes permisos para verlo.</p>
            <Button onClick={() => router.push('/admin/support')}>
              ← Volver al Soporte
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              🎫 Ticket #{ticket.numero}
            </h1>
            <p className="text-gray-600">{ticket.titulo}</p>
          </div>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={() => router.push('/admin/support')}
            >
              ← Volver al Soporte
            </Button>
            <Button
              variant="outline"
              onClick={() => router.push(`/admin/support/ticket/${ticketId}/editar`)}
            >
              ✏️ Editar
            </Button>
          </div>
        </div>

        {/* Status y acciones rápidas */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(ticket.estado)}`}>
            {ticket.estado.replace('-', ' ').toUpperCase()}
          </span>
          
          {ticket.estado !== 'cerrado' && ticket.estado !== 'cancelado' && (
            <>
              {ticket.estado === 'nuevo' && (
                <Button
                  size="sm"
                  onClick={() => handleStatusChange('abierto')}
                  disabled={updating}
                  className="bg-green-600 hover:bg-green-700"
                >
                  ✅ Tomar Ticket
                </Button>
              )}
              
              {(ticket.estado === 'abierto' || ticket.estado === 'en_progreso') && (
                <>
                  <Button
                    size="sm"
                    onClick={() => handleStatusChange('en_progreso')}
                    disabled={updating || ticket.estado === 'en_progreso'}
                    className="bg-yellow-600 hover:bg-yellow-700"
                  >
                    🔄 En Progreso
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => handleStatusChange('esperando_cliente')}
                    disabled={updating}
                    className="bg-orange-600 hover:bg-orange-700"
                  >
                    ⏳ Pendiente Cliente
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => handleStatusChange('resuelto')}
                    disabled={updating}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    ✅ Resolver
                  </Button>
                </>
              )}
              
              {ticket.estado === 'resuelto' && (
                <Button
                  size="sm"
                  onClick={() => handleStatusChange('cerrado')}
                  disabled={updating}
                  className="bg-gray-600 hover:bg-gray-700"
                >
                  🔒 Cerrar
                </Button>
              )}
            </>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Información del ticket */}
        <div className="lg:col-span-2 space-y-6">
          {/* Descripción */}
          <Card>
            <CardHeader>
              <CardTitle>📋 Descripción del Problema</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="whitespace-pre-wrap text-gray-700 bg-gray-50 p-4 rounded-lg">
                {ticket.descripcion}
              </div>
            </CardContent>
          </Card>

          {/* Respuestas */}
          <Card>
            <CardHeader>
              <CardTitle>💬 Conversación ({responses.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto mb-6">
                {responses.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">
                    No hay respuestas aún. Sé el primero en responder.
                  </p>
                ) : (
                  responses.map((response) => (
                    <div
                      key={response.id}
                      className={`p-4 rounded-lg ${
                        response.esInterna 
                          ? 'bg-yellow-50 border border-yellow-200' 
                          : 'bg-blue-50 border border-blue-200'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-gray-900">
                            {response.autorNombre}
                          </span>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            response.esInterna 
                              ? 'bg-yellow-200 text-yellow-800' 
                              : 'bg-blue-200 text-blue-800'
                          }`}>
                            {response.esInterna ? '🔒 Interna' : '👁️ Pública'}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          {format(new Date(response.fechaCreacion), 'dd/MM/yyyy HH:mm', { locale: es })}
                        </span>
                      </div>
                      <div className="text-gray-700 whitespace-pre-wrap">
                        {response.contenido}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Nueva respuesta */}
              <div className="border-t pt-6">
                <div className="mb-4">
                  <div className="flex space-x-4 mb-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="publica"
                        checked={responseType === 'publica'}
                        onChange={(e) => setResponseType(e.target.value as 'publica')}
                        className="mr-2"
                      />
                      👁️ Respuesta Pública
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="interna"
                        checked={responseType === 'interna'}
                        onChange={(e) => setResponseType(e.target.value as 'interna')}
                        className="mr-2"
                      />
                      🔒 Nota Interna
                    </label>
                  </div>
                  <textarea
                    value={newResponse}
                    onChange={(e) => setNewResponse(e.target.value)}
                    placeholder={responseType === 'publica' ? 'Escriba su respuesta al cliente...' : 'Escriba una nota interna...'}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <Button
                  onClick={handleAddResponse}
                  disabled={!newResponse.trim() || updating}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {updating ? '⏳ Enviando...' : '📤 Enviar Respuesta'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Panel lateral */}
        <div className="space-y-6">
          {/* Detalles del ticket */}
          <Card>
            <CardHeader>
              <CardTitle>ℹ️ Detalles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <span className="text-sm font-medium text-gray-600">Estado:</span>
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${getStatusColor(ticket.estado)}`}>
                  {ticket.estado.replace('-', ' ').toUpperCase()}
                </span>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-600">Prioridad:</span>
                <span className={`ml-2 ${getPriorityColor(ticket.prioridad)}`}>
                  {getPriorityIcon(ticket.prioridad)} {ticket.prioridad.toUpperCase()}
                </span>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-600">Categoría:</span>
                <span className="ml-2 text-gray-900">{ticket.categoria}</span>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-600">Tipo:</span>
                <span className="ml-2 text-gray-900">{ticket.tipo}</span>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-600">Canal:</span>
                <span className="ml-2 text-gray-900">{ticket.canal}</span>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-600">Creado:</span>
                <div className="text-sm text-gray-900">
                  {format(new Date(ticket.fechaCreacion), 'dd/MM/yyyy HH:mm', { locale: es })}
                  <div className="text-xs text-gray-500">
                    ({formatDistanceToNow(new Date(ticket.fechaCreacion), { addSuffix: true, locale: es })})
                  </div>
                </div>
              </div>
              
              {ticket.fechaActualizacion && (
                <div>
                  <span className="text-sm font-medium text-gray-600">Actualizado:</span>
                  <div className="text-sm text-gray-900">
                    {format(new Date(ticket.fechaActualizacion), 'dd/MM/yyyy HH:mm', { locale: es })}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Información del cliente */}
          <Card>
            <CardHeader>
              <CardTitle>👤 Cliente</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <span className="text-sm font-medium text-gray-600">Nombre:</span>
                <div className="text-gray-900">{ticket.clienteNombre}</div>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-600">Email:</span>
                <div className="text-gray-900">{ticket.clienteEmail}</div>
              </div>
              
              {ticket.clienteTelefono && (
                <div>
                  <span className="text-sm font-medium text-gray-600">Teléfono:</span>
                  <div className="text-gray-900">{ticket.clienteTelefono}</div>
                </div>
              )}
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => router.push(`/admin/clients/client/${ticket.clienteId}`)}
                className="w-full"
              >
                👁️ Ver Cliente
              </Button>
            </CardContent>
          </Card>

          {/* Servicio relacionado */}
          {ticket.servicioId && (
            <Card>
              <CardHeader>
                <CardTitle>🛠️ Servicio</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-gray-600">Nombre:</span>
                  <div className="text-gray-900">{ticket.servicioNombre}</div>
                </div>
                
                <div>
                  <span className="text-sm font-medium text-gray-600">Tipo:</span>
                  <div className="text-gray-900">{ticket.servicioTipo}</div>
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => router.push(`/admin/services/service/${ticket.servicioId}`)}
                  className="w-full"
                >
                  👁️ Ver Servicio
                </Button>
              </CardContent>
            </Card>
          )}

          {/* SLA Information */}
          {ticket.vencimientoResolucion && (
            <Card>
              <CardHeader>
                <CardTitle>⏰ SLA</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm font-medium text-gray-600">Vencimiento:</span>
                    <div className={`text-sm ${
                      new Date() > new Date(ticket.vencimientoResolucion) 
                        ? 'text-red-600 font-bold' 
                        : 'text-gray-900'
                    }`}>
                      {format(new Date(ticket.vencimientoResolucion), 'dd/MM/yyyy HH:mm', { locale: es })}
                    </div>
                  </div>
                  
                  {ticket.vencimientoResolucion && new Date() > new Date(ticket.vencimientoResolucion) && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <span className="text-red-800 font-medium">🚨 SLA Incumplido</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketDetailPage;