// Tipos para el Sistema de Tickets de Soporte
import { Timestamp } from 'firebase/firestore';

// ============ TIPOS PRINCIPALES DE SOPORTE ============

export interface TicketFormData {
  id?: string;
  // Información básica
  numero: string; // Formato: TK-YYYYMMDD-000001
  titulo: string;
  descripcion: string;
  
  // Cliente/Usuario
  clienteId: string;
  clienteNombre: string;
  clienteEmail: string;
  clienteTelefono?: string;
  
  // Clasificación
  categoria: CategoriaTicket;
  subcategoria?: string;
  prioridad: PrioridadTicket;
  severidad: SeveridadTicket;
  tipo: TipoTicket;
  
  // Servicio relacionado (opcional)
  servicioId?: string;
  servicioNombre?: string;
  servicioTipo?: string;
  
  // Estado y asignación
  estado: EstadoTicket;
  estadoInterno?: EstadoInternoTicket;
  asignadoA?: string; // ID del técnico/agente
  asignadoNombre?: string;
  departamento?: DepartamentoSoporte;
  
  // Tiempos y SLA
  fechaCreacion: string;
  fechaActualizacion: string;
  fechaAsignacion?: string;
  fechaPrimeraRespuesta?: string;
  fechaResolucion?: string;
  fechaCierre?: string;
  
  // SLA (Service Level Agreement)
  tiempoRespuestaSLA: number; // horas
  tiempoResolucionSLA: number; // horas
  vencimientoRespuesta?: string;
  vencimientoResolucion?: string;
  
  // Seguimiento
  respuestas: RespuestaTicket[];
  adjuntos: AdjuntoTicket[];
  etiquetas: string[];
  
  // Resolución
  solucion?: string;
  motivoCierre?: MotivoCierre;
  satisfaccionCliente?: number; // 1-5 estrellas
  comentarioSatisfaccion?: string;
  
  // Escalamiento
  escalado: boolean;
  fechaEscalamiento?: string;
  motivoEscalamiento?: string;
  escalonadoA?: string;
  
  // Auditoría
  creadoPor: string;
  canal: CanalTicket; // Email, Portal, Teléfono, Chat
  ipCliente?: string;
  userAgent?: string;
  
  // Facturación (si aplica)
  facturable: boolean;
  horasTrabajadas?: number;
  costoServicio?: number;
  
  // Métricas
  tiempoTotal?: number; // minutos desde creación hasta cierre
  tiempoRespuesta?: number; // minutos hasta primera respuesta
  tiempoResolucion?: number; // minutos hasta resolución
}

export interface RespuestaTicket {
  id: string;
  ticketId: string;
  autor: string; // ID del usuario
  autorNombre: string;
  autorTipo: 'cliente' | 'agente' | 'sistema';
  contenido: string;
  esPublica: boolean; // visible para el cliente
  esInterna: boolean; // solo para el equipo
  fechaCreacion: string;
  editada: boolean;
  fechaEdicion?: string;
  adjuntos: AdjuntoTicket[];
  mencionados?: string[]; // IDs de usuarios mencionados
}

export interface AdjuntoTicket {
  id: string;
  nombre: string;
  tipo: string; // MIME type
  tamaño: number; // bytes
  url: string;
  fechaSubida: string;
  subidoPor: string;
  esImagen: boolean;
  thumbnail?: string;
}

// ============ ENUMS Y CATÁLOGOS ============

export type CategoriaTicket = 
  | 'tecnico'         // Problemas técnicos
  | 'facturacion'     // Consultas de facturación
  | 'comercial'       // Ventas y cotizaciones
  | 'abuso'          // Reportes de abuso
  | 'solicitud'      // Solicitudes de cambio
  | 'incidente'      // Incidentes de servicio
  | 'consulta'       // Consultas generales
  | 'sugerencia';    // Sugerencias y mejoras

export type PrioridadTicket = 
  | 'baja'    // No urgente
  | 'normal'  // Prioridad estándar
  | 'alta'    // Requiere atención pronto
  | 'critica' // Requiere atención inmediata
  | 'urgente'; // Máxima prioridad

export type SeveridadTicket = 
  | 'minima'    // Problema cosmético
  | 'menor'     // Funcionalidad afectada pero hay workaround
  | 'mayor'     // Funcionalidad importante afectada
  | 'critica'   // Servicio completamente interrumpido
  | 'bloqueante'; // Impide operación normal

export type TipoTicket = 
  | 'incidente'   // Algo no funciona
  | 'solicitud'   // Petición de servicio
  | 'cambio'      // Solicitud de cambio
  | 'problema'    // Causa raíz de múltiples incidentes
  | 'consulta'    // Pregunta o información
  | 'queja';      // Queja o reclamo

export type EstadoTicket = 
  | 'nuevo'         // Recién creado
  | 'abierto'       // En proceso
  | 'asignado'      // Asignado a técnico
  | 'en_progreso'   // Siendo trabajado
  | 'esperando_cliente' // Esperando respuesta del cliente
  | 'esperando_tercero' // Esperando respuesta de tercero
  | 'resuelto'      // Resuelto, esperando confirmación
  | 'cerrado'       // Cerrado y completado
  | 'cancelado'     // Cancelado sin resolver
  | 'duplicado';    // Duplicado de otro ticket

export type EstadoInternoTicket = 
  | 'investigacion'     // Investigando el problema
  | 'desarrollo'        // Requiere desarrollo
  | 'testing'          // En fase de pruebas
  | 'esperando_aprobacion' // Esperando aprobación interna
  | 'escalado_nivel2'   // Escalado a nivel 2
  | 'escalado_nivel3'   // Escalado a nivel 3
  | 'proveedor'        // Enviado a proveedor externo
  | 'pendiente_compra'; // Esperando compra de equipo

export type DepartamentoSoporte = 
  | 'soporte_tecnico'   // Soporte técnico general
  | 'infraestructura'   // Servidores e infraestructura
  | 'redes'            // Problemas de red
  | 'seguridad'        // Seguridad y abuse
  | 'facturacion'      // Departamento de facturación
  | 'comercial'        // Equipo comercial
  | 'desarrollo'       // Equipo de desarrollo
  | 'administracion';  // Administración general

export type MotivoCierre = 
  | 'resuelto'          // Problema resuelto
  | 'resuelto_cliente'  // Resuelto por el cliente
  | 'no_reproducible'   // No se pudo reproducir
  | 'falta_informacion' // Cliente no proporcionó información
  | 'duplicado'         // Es duplicado de otro ticket
  | 'fuera_scope'       // Fuera del alcance del soporte
  | 'cancelado_cliente' // Cliente canceló la solicitud
  | 'spam';             // Ticket de spam

export type CanalTicket = 
  | 'email'      // Correo electrónico
  | 'portal'     // Portal de cliente
  | 'telefono'   // Llamada telefónica
  | 'chat'       // Chat en vivo
  | 'whatsapp'   // WhatsApp Business
  | 'sistema'    // Generado automáticamente
  | 'presencial'; // Presencial

// ============ CONFIGURACIÓN DE SLA ============

export interface ConfiguracionSLA {
  categoria: CategoriaTicket;
  prioridad: PrioridadTicket;
  tiempoRespuesta: number; // horas
  tiempoResolucion: number; // horas
  horariosLaborales: HorarioLaboral[];
  diasFestivos: string[]; // fechas en formato YYYY-MM-DD
}

export interface HorarioLaboral {
  diaSemana: number; // 0=Domingo, 1=Lunes, etc.
  horaInicio: string; // HH:MM
  horaFin: string; // HH:MM
}

// ============ USUARIOS Y AGENTES ============

export interface AgenteSOporte {
  id: string;
  nombre: string;
  email: string;
  telefono?: string;
  avatar?: string;
  
  // Rol y permisos
  rol: RolAgente;
  departamentos: DepartamentoSoporte[];
  especialidades: CategoriaTicket[];
  
  // Estado
  activo: boolean;
  disponible: boolean;
  estadoPresencia: EstadoPresencia;
  
  // Métricas
  ticketsAsignados: number;
  ticketsResueltos: number;
  satisfaccionPromedio: number;
  tiempoRespuestaPromedio: number;
  
  // Configuración
  notificacionEmail: boolean;
  notificacionPush: boolean;
  autoAsignacion: boolean;
  maxTicketsSimultaneos: number;
  
  // Horarios
  horarioLaboral: HorarioLaboral[];
  zonaHoraria: string;
}

export type RolAgente = 
  | 'agente'        // Agente básico
  | 'senior'        // Agente senior
  | 'supervisor'    // Supervisor de equipo
  | 'administrador' // Administrador del sistema
  | 'director';     // Director de soporte

export type EstadoPresencia = 
  | 'disponible'    // Disponible para nuevos tickets
  | 'ocupado'       // Ocupado pero puede recibir urgentes
  | 'ausente'       // Temporalmente ausente
  | 'almuerzo'      // En horario de almuerzo
  | 'reunion'       // En reunión
  | 'offline';      // Fuera de línea

// ============ PLANTILLAS Y AUTOMATIZACIÓN ============

export interface PlantillaRespuesta {
  id: string;
  titulo: string;
  contenido: string;
  categoria: CategoriaTicket;
  departamento?: DepartamentoSoporte;
  esPublica: boolean;
  activa: boolean;
  usosCount: number;
  creadaPor: string;
  fechaCreacion: string;
  etiquetas: string[];
}

export interface ReglaAutomatizacion {
  id: string;
  nombre: string;
  descripcion: string;
  activa: boolean;
  
  // Condiciones
  condiciones: CondicionAutomatizacion[];
  operadorLogico: 'AND' | 'OR';
  
  // Acciones
  acciones: AccionAutomatizacion[];
  
  // Configuración
  ejecutarSoloUnaVez: boolean;
  prioridad: number;
  
  // Auditoría
  creadaPor: string;
  fechaCreacion: string;
  ultimaEjecucion?: string;
  vecesEjecutada: number;
}

export interface CondicionAutomatizacion {
  campo: string; // 'categoria', 'prioridad', 'estado', etc.
  operador: 'equals' | 'contains' | 'starts_with' | 'greater_than' | 'less_than';
  valor: string;
}

export interface AccionAutomatizacion {
  tipo: 'asignar' | 'cambiar_estado' | 'cambiar_prioridad' | 'agregar_etiqueta' | 'enviar_email' | 'crear_respuesta';
  valor: string;
  parametros?: Record<string, any>;
}

// ============ REPORTES Y ESTADÍSTICAS ============

export interface EstadisticasSoporte {
  periodo: {
    inicio: string;
    fin: string;
  };
  
  // Tickets
  totalTickets: number;
  ticketsNuevos: number;
  ticketsResueltos: number;
  ticketsCerrados: number;
  ticketsPendientes: number;
  
  // Por categoría
  ticketsPorCategoria: Array<{
    categoria: CategoriaTicket;
    cantidad: number;
    porcentaje: number;
  }>;
  
  // Por prioridad
  ticketsPorPrioridad: Array<{
    prioridad: PrioridadTicket;
    cantidad: number;
    porcentaje: number;
  }>;
  
  // Tiempos promedio
  tiempoRespuestaPromedio: number; // minutos
  tiempoResolucionPromedio: number; // minutos
  tiempoPrimeraRespuesta: number; // minutos
  
  // SLA
  cumplimientoSLARespuesta: number; // porcentaje
  cumplimientoSLAResolucion: number; // porcentaje
  ticketsVencidos: number;
  
  // Satisfacción
  satisfaccionPromedio: number;
  encuestasRespondidas: number;
  porcentajeRespuesta: number;
  
  // Agentes
  rendimientoAgentes: Array<{
    agenteId: string;
    agenteNombre: string;
    ticketsAsignados: number;
    ticketsResueltos: number;
    tiempoRespuestaPromedio: number;
    satisfaccionPromedio: number;
  }>;
  
  // Tendencias
  ticketsPorDia: Array<{
    fecha: string;
    cantidad: number;
    resueltos: number;
  }>;
  
  // Top problemas
  problemasRecurrentes: Array<{
    titulo: string;
    categoria: CategoriaTicket;
    frecuencia: number;
    servicioAfectado?: string;
  }>;
}

// ============ NOTIFICACIONES ============

export interface NotificacionTicket {
  id: string;
  ticketId: string;
  ticketNumero: string;
  destinatario: string;
  tipo: TipoNotificacion;
  canal: CanalNotificacion;
  asunto: string;
  mensaje: string;
  enviada: boolean;
  fechaEnvio?: string;
  error?: string;
  intentos: number;
}

export type TipoNotificacion = 
  | 'ticket_creado'
  | 'ticket_asignado'
  | 'ticket_actualizado'
  | 'nueva_respuesta'
  | 'ticket_escalado'
  | 'sla_vencido'
  | 'ticket_resuelto'
  | 'encuesta_satisfaccion';

export type CanalNotificacion = 
  | 'email'
  | 'sms'
  | 'push'
  | 'webhook';

// ============ BASE DE CONOCIMIENTO ============

export interface ArticuloBaseConocimiento {
  id: string;
  titulo: string;
  contenido: string;
  resumen: string;
  categoria: CategoriaTicket;
  subcategoria?: string;
  etiquetas: string[];
  
  // Estado
  estado: 'borrador' | 'publicado' | 'archivado';
  publico: boolean; // visible para clientes
  
  // Métricas
  visualizaciones: number;
  valoraciones: number;
  valoracionPromedio: number;
  util: number; // votos "útil"
  noUtil: number; // votos "no útil"
  
  // SEO
  slug: string;
  metaDescripcion?: string;
  
  // Relaciones
  ticketsRelacionados: string[];
  serviciosRelacionados: string[];
  
  // Auditoría
  creadoPor: string;
  fechaCreacion: string;
  actualizadoPor?: string;
  fechaActualizacion?: string;
  
  // Adjuntos
  imagenes: string[];
  videos: string[];
  archivos: AdjuntoTicket[];
}