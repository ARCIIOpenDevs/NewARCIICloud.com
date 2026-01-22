'use client';

import { useState, useEffect, useCallback } from 'react';
import { 
  collection, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  getDocs, 
  getDoc,
  query, 
  where, 
  orderBy, 
  limit,
  Timestamp,
  writeBatch
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { TicketFormData, RespuestaTicket, EstadisticasSoporte, AgenteSOporte, EstadoTicket, PrioridadTicket, CategoriaTicket } from '@/types/support';

export const useSupport = () => {
  const [tickets, setTickets] = useState<TicketFormData[]>([]);
  const [respuestas, setRespuestas] = useState<RespuestaTicket[]>([]);
  const [agentes, setAgentes] = useState<AgenteSOporte[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ============ OPERACIONES DE TICKETS ============

  const fetchTickets = useCallback(async (filtros?: {
    estado?: EstadoTicket;
    prioridad?: PrioridadTicket;
    categoria?: CategoriaTicket;
    clienteId?: string;
    asignadoA?: string;
  }) => {
    setLoading(true);
    setError(null);
    
    try {
      const ticketsRef = collection(db, 'tickets');
      let q = query(ticketsRef, orderBy('fechaCreacion', 'desc'));
      
      // Aplicar filtros
      if (filtros?.estado) {
        q = query(ticketsRef, where('estado', '==', filtros.estado), orderBy('fechaCreacion', 'desc'));
      }
      if (filtros?.clienteId) {
        q = query(ticketsRef, where('clienteId', '==', filtros.clienteId), orderBy('fechaCreacion', 'desc'));
      }
      if (filtros?.asignadoA) {
        q = query(ticketsRef, where('asignadoA', '==', filtros.asignadoA), orderBy('fechaCreacion', 'desc'));
      }
      
      const snapshot = await getDocs(q);
      const ticketsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as TicketFormData[];
      
      setTickets(ticketsData);
      return ticketsData;
    } catch (err) {
      console.error('Error fetching tickets:', err);
      setError('Error al cargar los tickets');
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  const createTicket = async (ticketData: Omit<TicketFormData, 'id' | 'fechaCreacion' | 'fechaActualizacion' | 'numero'>): Promise<string> => {
    setError(null);
    
    try {
      const now = new Date().toISOString();
      const numero = await generarNumeroTicket();
      
      // Calcular SLA
      const sla = calcularSLA(ticketData.categoria, ticketData.prioridad);
      
      const newTicket: Omit<TicketFormData, 'id'> = {
        ...ticketData,
        numero,
        fechaCreacion: now,
        fechaActualizacion: now,
        tiempoRespuestaSLA: sla.tiempoRespuesta,
        tiempoResolucionSLA: sla.tiempoResolucion,
        vencimientoRespuesta: calcularVencimiento(now, sla.tiempoRespuesta),
        vencimientoResolucion: calcularVencimiento(now, sla.tiempoResolucion),
        respuestas: [],
        adjuntos: [],
        etiquetas: [],
        escalado: false,
        facturable: false,
      };

      const docRef = await addDoc(collection(db, 'tickets'), newTicket);
      
      // Actualizar estado local
      const ticketConId = { id: docRef.id, ...newTicket };
      setTickets(prev => [ticketConId, ...prev]);
      
      // Auto-asignación si está configurada
      await autoAsignarTicket(docRef.id, ticketData.categoria, ticketData.prioridad);
      
      return docRef.id;
    } catch (err) {
      console.error('Error creating ticket:', err);
      setError('Error al crear el ticket');
      throw err;
    }
  };

  const updateTicket = async (id: string, ticketData: Partial<TicketFormData>): Promise<void> => {
    setError(null);
    
    try {
      const ticketRef = doc(db, 'tickets', id);
      const updateData = {
        ...ticketData,
        fechaActualizacion: new Date().toISOString(),
      };
      
      await updateDoc(ticketRef, updateData);
      
      // Actualizar estado local
      setTickets(prev => 
        prev.map(ticket => 
          ticket.id === id 
            ? { ...ticket, ...updateData }
            : ticket
        )
      );
    } catch (err) {
      console.error('Error updating ticket:', err);
      setError('Error al actualizar el ticket');
      throw err;
    }
  };

  const fetchTicketById = async (id: string): Promise<TicketFormData | null> => {
    setError(null);
    
    try {
      const ticketRef = doc(db, 'tickets', id);
      const docSnapshot = await getDoc(ticketRef);
      
      if (docSnapshot.exists()) {
        return {
          id: docSnapshot.id,
          ...docSnapshot.data()
        } as TicketFormData;
      }
      
      return null;
    } catch (err) {
      console.error('Error fetching ticket by ID:', err);
      setError('Error al cargar el ticket');
      return null;
    }
  };

  const updateTicketStatus = async (id: string, status: EstadoTicket): Promise<void> => {
    await cambiarEstado(id, status);
  };

  const addTicketResponse = async (ticketId: string, response: Omit<RespuestaTicket, 'id' | 'fechaCreacion'>): Promise<void> => {
    await agregarRespuesta(ticketId, {
      ...response,
      fechaCreacion: new Date().toISOString()
    });
  };

  const getTicketResponses = async (ticketId: string): Promise<RespuestaTicket[]> => {
    try {
      const respuestasRef = collection(db, 'respuestas');
      const q = query(
        respuestasRef, 
        where('ticketId', '==', ticketId), 
        orderBy('fechaCreacion', 'asc')
      );
      
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as RespuestaTicket[];
    } catch (err) {
      console.error('Error fetching ticket responses:', err);
      return [];
    }
  };

  const asignarTicket = async (ticketId: string, agenteId: string, agenteNombre: string): Promise<void> => {
    const ahora = new Date().toISOString();
    
    await updateTicket(ticketId, {
      asignadoA: agenteId,
      asignadoNombre: agenteNombre,
      estado: 'asignado',
      fechaAsignacion: ahora
    });
    
    // Crear respuesta interna de asignación
    await agregarRespuesta(ticketId, {
      autor: 'sistema',
      autorNombre: 'Sistema',
      autorTipo: 'sistema',
      contenido: `Ticket asignado a ${agenteNombre}`,
      esPublica: false,
      esInterna: true,
      fechaCreacion: ahora,
      editada: false,
      adjuntos: []
    });
  };

  const cambiarEstado = async (ticketId: string, nuevoEstado: EstadoTicket, motivo?: string): Promise<void> => {
    const ahora = new Date().toISOString();
    const updateData: Partial<TicketFormData> = {
      estado: nuevoEstado
    };
    
    // Actualizar fechas según el estado
    switch (nuevoEstado) {
      case 'resuelto':
        updateData.fechaResolucion = ahora;
        break;
      case 'cerrado':
        updateData.fechaCierre = ahora;
        break;
    }
    
    await updateTicket(ticketId, updateData);
    
    // Agregar respuesta del cambio de estado
    if (motivo) {
      await agregarRespuesta(ticketId, {
        autor: 'sistema',
        autorNombre: 'Sistema',
        autorTipo: 'sistema',
        contenido: `Estado cambiado a: ${nuevoEstado}${motivo ? `. Motivo: ${motivo}` : ''}`,
        esPublica: true,
        esInterna: false,
        fechaCreacion: ahora,
        editada: false,
        adjuntos: []
      });
    }
  };

  // ============ OPERACIONES DE RESPUESTAS ============

  const fetchRespuestas = useCallback(async (ticketId: string) => {
    try {
      const respuestasRef = collection(db, 'respuestas');
      const q = query(
        respuestasRef, 
        where('ticketId', '==', ticketId),
        orderBy('fechaCreacion', 'asc')
      );
      
      const snapshot = await getDocs(q);
      const respuestasData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as RespuestaTicket[];
      
      setRespuestas(respuestasData);
      return respuestasData;
    } catch (err) {
      console.error('Error fetching respuestas:', err);
      setError('Error al cargar las respuestas');
      return [];
    }
  }, []);

  const agregarRespuesta = async (ticketId: string, respuestaData: Omit<RespuestaTicket, 'id' | 'ticketId'>): Promise<string> => {
    setError(null);
    
    try {
      const newRespuesta: Omit<RespuestaTicket, 'id'> = {
        ticketId,
        ...respuestaData,
      };

      const docRef = await addDoc(collection(db, 'respuestas'), newRespuesta);
      
      // Actualizar estado local
      const respuestaConId = { id: docRef.id, ...newRespuesta };
      setRespuestas(prev => [...prev, respuestaConId]);
      
      // Actualizar fecha de primera respuesta si es la primera respuesta de un agente
      if (respuestaData.autorTipo === 'agente') {
        const ticket = tickets.find(t => t.id === ticketId);
        if (ticket && !ticket.fechaPrimeraRespuesta) {
          await updateTicket(ticketId, {
            fechaPrimeraRespuesta: respuestaData.fechaCreacion,
            estado: 'en_progreso'
          });
        }
      }
      
      return docRef.id;
    } catch (err) {
      console.error('Error adding respuesta:', err);
      setError('Error al agregar la respuesta');
      throw err;
    }
  };

  // ============ OPERACIONES DE AGENTES ============

  const fetchAgentes = useCallback(async () => {
    try {
      const agentesRef = collection(db, 'agentes');
      const q = query(agentesRef, where('activo', '==', true), orderBy('nombre'));
      
      const snapshot = await getDocs(q);
      const agentesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as AgenteSOporte[];
      
      setAgentes(agentesData);
      return agentesData;
    } catch (err) {
      console.error('Error fetching agentes:', err);
      return [];
    }
  }, []);

  // ============ ESTADÍSTICAS ============

  const getEstadisticasSoporte = useCallback(async (
    fechaInicio: string, 
    fechaFin: string
  ): Promise<EstadisticasSoporte> => {
    try {
      const ticketsRef = collection(db, 'tickets');
      const q = query(
        ticketsRef,
        where('fechaCreacion', '>=', fechaInicio),
        where('fechaCreacion', '<=', fechaFin),
        orderBy('fechaCreacion', 'desc')
      );
      
      const snapshot = await getDocs(q);
      const ticketsPeriodo = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as TicketFormData[];

      // Calcular estadísticas básicas
      const totalTickets = ticketsPeriodo.length;
      const ticketsNuevos = ticketsPeriodo.filter(t => t.estado === 'nuevo').length;
      const ticketsResueltos = ticketsPeriodo.filter(t => t.estado === 'resuelto' || t.estado === 'cerrado').length;
      const ticketsCerrados = ticketsPeriodo.filter(t => t.estado === 'cerrado').length;
      const ticketsPendientes = ticketsPeriodo.filter(t => 
        ['nuevo', 'abierto', 'asignado', 'en_progreso'].includes(t.estado)
      ).length;

      // Por categoría
      const ticketsPorCategoria = Object.entries(
        ticketsPeriodo.reduce((acc, ticket) => {
          acc[ticket.categoria] = (acc[ticket.categoria] || 0) + 1;
          return acc;
        }, {} as Record<string, number>)
      ).map(([categoria, cantidad]) => ({
        categoria: categoria as CategoriaTicket,
        cantidad,
        porcentaje: Math.round((cantidad / totalTickets) * 100)
      }));

      // Por prioridad
      const ticketsPorPrioridad = Object.entries(
        ticketsPeriodo.reduce((acc, ticket) => {
          acc[ticket.prioridad] = (acc[ticket.prioridad] || 0) + 1;
          return acc;
        }, {} as Record<string, number>)
      ).map(([prioridad, cantidad]) => ({
        prioridad: prioridad as PrioridadTicket,
        cantidad,
        porcentaje: Math.round((cantidad / totalTickets) * 100)
      }));

      // Calcular tiempos promedio
      const ticketsConRespuesta = ticketsPeriodo.filter(t => t.tiempoRespuesta);
      const tiempoRespuestaPromedio = ticketsConRespuesta.length > 0 
        ? Math.round(ticketsConRespuesta.reduce((sum, t) => sum + (t.tiempoRespuesta || 0), 0) / ticketsConRespuesta.length)
        : 0;

      const ticketsConResolucion = ticketsPeriodo.filter(t => t.tiempoResolucion);
      const tiempoResolucionPromedio = ticketsConResolucion.length > 0
        ? Math.round(ticketsConResolucion.reduce((sum, t) => sum + (t.tiempoResolucion || 0), 0) / ticketsConResolucion.length)
        : 0;

      // SLA
      const ticketsConSLA = ticketsPeriodo.filter(t => t.fechaPrimeraRespuesta);
      const cumplimientoSLARespuesta = ticketsConSLA.length > 0
        ? Math.round((ticketsConSLA.filter(t => {
            const respuesta = new Date(t.fechaPrimeraRespuesta!);
            const vencimiento = new Date(t.vencimientoRespuesta!);
            return respuesta <= vencimiento;
          }).length / ticketsConSLA.length) * 100)
        : 0;

      // Agrupar por día
      const ticketsPorDia = ticketsPeriodo.reduce((acc, ticket) => {
        const fecha = ticket.fechaCreacion.split('T')[0];
        const existing = acc.find(item => item.fecha === fecha);
        
        if (existing) {
          existing.cantidad++;
          if (['resuelto', 'cerrado'].includes(ticket.estado)) {
            existing.resueltos++;
          }
        } else {
          acc.push({
            fecha,
            cantidad: 1,
            resueltos: ['resuelto', 'cerrado'].includes(ticket.estado) ? 1 : 0
          });
        }
        
        return acc;
      }, [] as Array<{ fecha: string; cantidad: number; resueltos: number }>);

      return {
        periodo: {
          inicio: fechaInicio,
          fin: fechaFin
        },
        totalTickets,
        ticketsNuevos,
        ticketsResueltos,
        ticketsCerrados,
        ticketsPendientes,
        ticketsPorCategoria,
        ticketsPorPrioridad,
        tiempoRespuestaPromedio,
        tiempoResolucionPromedio,
        tiempoPrimeraRespuesta: tiempoRespuestaPromedio,
        cumplimientoSLARespuesta,
        cumplimientoSLAResolucion: cumplimientoSLARespuesta, // Simplificado
        ticketsVencidos: 0, // Calcular según SLA
        satisfaccionPromedio: 4.2, // Simulado
        encuestasRespondidas: Math.round(ticketsResueltos * 0.6),
        porcentajeRespuesta: 60,
        rendimientoAgentes: [], // Implementar según agentes
        ticketsPorDia,
        problemasRecurrentes: [] // Implementar análisis de patrones
      };
    } catch (err) {
      console.error('Error getting estadísticas soporte:', err);
      throw err;
    }
  }, []);

  // ============ FUNCIONES AUXILIARES ============

  const generarNumeroTicket = async (): Promise<string> => {
    const fecha = new Date();
    const año = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const dia = String(fecha.getDate()).padStart(2, '0');
    const fechaStr = `${año}${mes}${dia}`;
    
    // Buscar último ticket del día
    const ticketsRef = collection(db, 'tickets');
    const q = query(
      ticketsRef,
      where('numero', '>=', `TK-${fechaStr}-000000`),
      where('numero', '<=', `TK-${fechaStr}-999999`),
      orderBy('numero', 'desc'),
      limit(1)
    );
    
    const snapshot = await getDocs(q);
    let ultimoNumero = 0;
    
    if (!snapshot.empty) {
      const ultimoTicket = snapshot.docs[0].data();
      const partes = ultimoTicket.numero.split('-');
      if (partes.length === 3) {
        ultimoNumero = parseInt(partes[2]) || 0;
      }
    }
    
    const nuevoNumero = ultimoNumero + 1;
    return `TK-${fechaStr}-${String(nuevoNumero).padStart(6, '0')}`;
  };

  const calcularSLA = (categoria: CategoriaTicket, prioridad: PrioridadTicket) => {
    // Matriz de SLA (horas)
    const slaMatrix = {
      critica: { tiempoRespuesta: 1, tiempoResolucion: 4 },
      urgente: { tiempoRespuesta: 2, tiempoResolucion: 8 },
      alta: { tiempoRespuesta: 4, tiempoResolucion: 24 },
      normal: { tiempoRespuesta: 8, tiempoResolucion: 48 },
      baja: { tiempoRespuesta: 24, tiempoResolucion: 72 }
    };
    
    return slaMatrix[prioridad] || slaMatrix.normal;
  };

  const calcularVencimiento = (fechaInicio: string, horas: number): string => {
    const fecha = new Date(fechaInicio);
    fecha.setHours(fecha.getHours() + horas);
    return fecha.toISOString();
  };

  const autoAsignarTicket = async (ticketId: string, categoria: CategoriaTicket, prioridad: PrioridadTicket): Promise<void> => {
    try {
      // Buscar agente disponible con menos carga de trabajo
      const agentesDisponibles = agentes.filter(a => 
        a.disponible && 
        a.especialidades.includes(categoria) &&
        a.ticketsAsignados < a.maxTicketsSimultaneos
      );
      
      if (agentesDisponibles.length > 0) {
        // Seleccionar agente con menos tickets asignados
        const agenteSeleccionado = agentesDisponibles.reduce((min, agente) =>
          agente.ticketsAsignados < min.ticketsAsignados ? agente : min
        );
        
        await asignarTicket(ticketId, agenteSeleccionado.id, agenteSeleccionado.nombre);
      }
    } catch (error) {
      console.error('Error en auto-asignación:', error);
    }
  };

  return {
    // Estados
    tickets,
    respuestas,
    agentes,
    loading,
    error,
    
    // Operaciones de tickets
    fetchTickets,
    createTicket,
    updateTicket,
    fetchTicketById,
    updateTicketStatus,
    addTicketResponse,
    getTicketResponses,
    asignarTicket,
    assignTicket: asignarTicket, // Alias para compatibilidad
    cambiarEstado,
    
    // Operaciones de respuestas
    fetchRespuestas,
    agregarRespuesta,
    
    // Operaciones de agentes
    fetchAgentes,
    
    // Estadísticas
    getEstadisticasSoporte,
    
    // Utilidades
    generarNumeroTicket
  };
};