'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/ButtonCRM';
import { useSupport } from '@/hooks/useSupport';
import { format, subDays, startOfDay, endOfDay } from 'date-fns';
import { es } from 'date-fns/locale';

const SupportReportsPage: React.FC = () => {
  const router = useRouter();
  const { tickets, agentes: agents, fetchTickets, fetchAgentes: fetchAgents } = useSupport();
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState({
    start: format(subDays(new Date(), 30), 'yyyy-MM-dd'),
    end: format(new Date(), 'yyyy-MM-dd')
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      await Promise.all([fetchTickets(), fetchAgents()]);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filtrar tickets por rango de fechas
  const filteredTickets = tickets.filter(ticket => {
    const ticketDate = new Date(ticket.fechaCreacion);
    const startDate = startOfDay(new Date(dateRange.start));
    const endDate = endOfDay(new Date(dateRange.end));
    return ticketDate >= startDate && ticketDate <= endDate;
  });

  // Métricas generales
  const totalTickets = filteredTickets.length;
  const ticketsCerrados = filteredTickets.filter(t => t.estado === 'cerrado').length;
  const ticketsResueltos = filteredTickets.filter(t => t.estado === 'resuelto').length;
  const ticketsAbiertos = filteredTickets.filter(t => ['nuevo', 'abierto', 'en-progreso'].includes(t.estado)).length;
  // const ticketsEscalados = filteredTickets.filter(t => t.estado === 'escalado_nivel2').length; // Variable no utilizada
  const tasaResolucion = totalTickets > 0 ? ((ticketsCerrados + ticketsResueltos) / totalTickets * 100).toFixed(1) : 0;

  // Métricas por prioridad
  const ticketsPorPrioridad = {
    baja: filteredTickets.filter(t => t.prioridad === 'baja').length,
    normal: filteredTickets.filter(t => t.prioridad === 'normal').length,
    alta: filteredTickets.filter(t => t.prioridad === 'alta').length,
    critica: filteredTickets.filter(t => t.prioridad === 'critica').length,
    urgente: filteredTickets.filter(t => t.prioridad === 'urgente').length,
  };

  // Métricas por categoría
  const ticketsPorCategoria = {
    tecnico: filteredTickets.filter(t => t.categoria === 'tecnico').length,
    facturacion: filteredTickets.filter(t => t.categoria === 'facturacion').length,
    comercial: filteredTickets.filter(t => t.categoria === 'comercial').length,
    abuso: filteredTickets.filter(t => t.categoria === 'abuso').length,
    solicitud: filteredTickets.filter(t => t.categoria === 'solicitud').length,
    incidente: filteredTickets.filter(t => t.categoria === 'incidente').length,
    consulta: filteredTickets.filter(t => t.categoria === 'consulta').length,
    sugerencia: filteredTickets.filter(t => t.categoria === 'sugerencia').length,
  };

  // Métricas por agente
  const ticketsPorAgente = agents.map(agent => ({
    ...agent,
    tickets: filteredTickets.filter(t => t.asignadoA === agent.id).length,
    resueltos: filteredTickets.filter(t => t.asignadoA === agent.id && ['resuelto', 'cerrado'].includes(t.estado)).length,
    abiertos: filteredTickets.filter(t => t.asignadoA === agent.id && ['nuevo', 'abierto', 'en_progreso'].includes(t.estado)).length,
  }));

  // SLA metrics (propiedades no disponibles en el tipo actual)
  // const ticketsConSLA = filteredTickets.filter(t => t.slaVencimiento);
  // const ticketsIncumplidosSLA = ticketsConSLA.filter(t => t.slaIncumplido).length;
  // const cumplimientoSLA = ticketsConSLA.length > 0 ? 
  //   (((ticketsConSLA.length - ticketsIncumplidosSLA) / ticketsConSLA.length) * 100).toFixed(1) : 100;
  const cumplimientoSLA = "N/A"; // Temporalmente deshabilitado

  // Tickets por día (últimos 7 días)
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = subDays(new Date(), 6 - i);
    const dayTickets = filteredTickets.filter(ticket => {
      const ticketDate = new Date(ticket.fechaCreacion);
      return format(ticketDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd');
    }).length;
    
    return {
      date: format(date, 'dd/MM', { locale: es }),
      tickets: dayTickets
    };
  });

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2">Cargando reportes...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">📊 Reportes de Soporte</h1>
            <p className="text-gray-600">Análisis y métricas del sistema de soporte</p>
          </div>
          <Button
            variant="outline"
            onClick={() => router.push('/admin/support')}
          >
            ← Volver al Soporte
          </Button>
        </div>

        {/* Filtros */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fecha Inicio
                </label>
                <input
                  type="date"
                  value={dateRange.start}
                  onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fecha Fin
                </label>
                <input
                  type="date"
                  value={dateRange.end}
                  onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="pt-6">
                <Button onClick={loadData} className="bg-blue-600 hover:bg-blue-700">
                  🔄 Actualizar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Métricas principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Tickets</p>
                <p className="text-2xl font-bold text-gray-900">{totalTickets}</p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                🎫
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Tasa Resolución</p>
                <p className="text-2xl font-bold text-green-600">{tasaResolucion}%</p>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                ✅
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Tickets Abiertos</p>
                <p className="text-2xl font-bold text-yellow-600">{ticketsAbiertos}</p>
              </div>
              <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                🔄
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Cumplimiento SLA</p>
                <p className="text-2xl font-bold text-blue-600">{cumplimientoSLA}%</p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                ⏰
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Tickets por Prioridad */}
        <Card>
          <CardHeader>
            <CardTitle>🚨 Tickets por Prioridad</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(ticketsPorPrioridad).map(([prioridad, count]) => {
                const porcentaje = totalTickets > 0 ? (count / totalTickets * 100).toFixed(1) : 0;
                const colors = {
                  baja: 'bg-green-200 text-green-800',
                  normal: 'bg-blue-200 text-blue-800',
                  alta: 'bg-yellow-200 text-yellow-800',
                  critica: 'bg-red-200 text-red-800',
                  urgente: 'bg-purple-200 text-purple-800'
                };
                
                return (
                  <div key={prioridad} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors[prioridad as keyof typeof colors]}`}>
                        {prioridad.toUpperCase()}
                      </span>
                      <span className="text-gray-600">{count} tickets</span>
                    </div>
                    <span className="text-sm text-gray-500">{porcentaje}%</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Tickets por Categoría */}
        <Card>
          <CardHeader>
            <CardTitle>🏷️ Tickets por Categoría</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(ticketsPorCategoria)
                .filter(([_, count]) => count > 0)
                .sort((a, b) => b[1] - a[1])
                .map(([categoria, count]) => {
                  const porcentaje = totalTickets > 0 ? (count / totalTickets * 100).toFixed(1) : 0;
                  
                  return (
                    <div key={categoria} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium">
                          {categoria.toUpperCase()}
                        </span>
                        <span className="text-gray-600">{count} tickets</span>
                      </div>
                      <span className="text-sm text-gray-500">{porcentaje}%</span>
                    </div>
                  );
                })}
            </div>
          </CardContent>
        </Card>

        {/* Performance por Agente */}
        <Card>
          <CardHeader>
            <CardTitle>👥 Performance por Agente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {ticketsPorAgente
                .filter(agent => agent.tickets > 0)
                .sort((a, b) => b.tickets - a.tickets)
                .map(agent => {
                  const tasaResolucionAgente = agent.tickets > 0 ? (agent.resueltos / agent.tickets * 100).toFixed(1) : 0;
                  
                  return (
                    <div key={agent.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-medium text-gray-900">{agent.nombre}</h4>
                          <p className="text-sm text-gray-500">{agent.email}</p>
                        </div>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          agent.disponible ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {agent.disponible ? 'Disponible' : 'No disponible'}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Total:</span>
                          <span className="ml-1 font-medium">{agent.tickets}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Resueltos:</span>
                          <span className="ml-1 font-medium text-green-600">{agent.resueltos}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Abiertos:</span>
                          <span className="ml-1 font-medium text-yellow-600">{agent.abiertos}</span>
                        </div>
                      </div>
                      
                      <div className="mt-2">
                        <span className="text-sm text-gray-500">Tasa de resolución: </span>
                        <span className="text-sm font-medium text-blue-600">{tasaResolucionAgente}%</span>
                      </div>
                    </div>
                  );
                })}
              
              {ticketsPorAgente.filter(agent => agent.tickets > 0).length === 0 && (
                <p className="text-center text-gray-500 py-4">
                  No hay datos de agentes en el período seleccionado
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Tendencia de Tickets */}
        <Card>
          <CardHeader>
            <CardTitle>📈 Tickets por Día (Últimos 7 días)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {last7Days.map((day, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{day.date}</span>
                  <div className="flex items-center space-x-2">
                    <div className="bg-blue-200 h-2 rounded-full" style={{
                      width: `${Math.max(day.tickets / Math.max(...last7Days.map(d => d.tickets)) * 100, 5)}px`,
                      minWidth: '20px'
                    }}></div>
                    <span className="text-sm font-medium text-gray-900 w-8 text-right">
                      {day.tickets}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Resumen de SLA */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>⏰ Resumen de SLA</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">-</div>
              <div className="text-sm text-gray-500">Tickets con SLA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">-</div>
              <div className="text-sm text-gray-500">SLA Cumplidos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">-</div>
              <div className="text-sm text-gray-500">SLA Incumplidos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{cumplimientoSLA}%</div>
              <div className="text-sm text-gray-500">Cumplimiento Global</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupportReportsPage;