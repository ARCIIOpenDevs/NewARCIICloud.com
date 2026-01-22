import { Timestamp } from 'firebase/firestore';

// ===============================
// CONTENIDO DE PÁGINAS
// ===============================

export interface PageContent {
  id?: string;
  slug: string;
  titulo: string;
  descripcion?: string;
  contenido: string;
  tipoContenido: 'pagina' | 'landing' | 'servicio' | 'empresa';
  estado: 'borrador' | 'publicado' | 'archivado';
  fechaCreacion: Timestamp;
  fechaActualizacion: Timestamp;
  fechaPublicacion?: Timestamp;
  autorId: string;
  autorNombre: string;
  
  // SEO
  metaTitulo?: string;
  metaDescripcion?: string;
  metaKeywords?: string[];
  imagenSEO?: string;
  canonicalUrl?: string;
  
  // Estructura
  seccionPrincipal?: boolean;
  ordenEnMenu?: number;
  menuPadre?: string;
  
  // Configuración avanzada
  configuracion?: {
    mostrarEnMenu: boolean;
    mostrarFecha: boolean;
    permitirComentarios: boolean;
    requiereAuth: boolean;
    templatePersonalizado?: string;
    claseCSS?: string;
  };
  
  // Medios
  imagenDestacada?: string;
  galeria?: string[];
  
  // Analytics
  vistas?: number;
  ultimaVista?: Timestamp;
}

export interface PageContentFormData extends Omit<PageContent, 'id' | 'fechaCreacion' | 'fechaActualizacion' | 'vistas' | 'ultimaVista'> {
  id?: string;
}

// ===============================
// BLOG Y ARTÍCULOS
// ===============================

export interface BlogPost {
  id?: string;
  titulo: string;
  slug: string;
  extracto: string;
  contenido: string;
  autorId: string;
  autorNombre: string;
  autorEmail: string;
  autorAvatar?: string;
  
  // Clasificación
  categoria: BlogCategoria;
  etiquetas: string[];
  dificultad: 'principiante' | 'intermedio' | 'avanzado' | 'experto';
  tiempoLectura?: number; // en minutos
  
  // Estado y fechas
  estado: 'borrador' | 'revision' | 'programado' | 'publicado' | 'archivado';
  fechaCreacion: Timestamp;
  fechaActualizacion: Timestamp;
  fechaPublicacion?: Timestamp;
  fechaProgramada?: Timestamp;
  
  // Medios
  imagenDestacada: string;
  imagenDestacadaAlt: string;
  galeria?: MediaFile[];
  
  // SEO
  metaTitulo?: string;
  metaDescripcion?: string;
  metaKeywords?: string[];
  
  // Configuración
  destacado?: boolean;
  permitirComentarios: boolean;
  
  // Analytics y engagement
  vistas: number;
  likes: number;
  shares: number;
  comentarios: number;
  tiempoPromedioLectura?: number;
  
  // Contenido relacionado
  relacionados?: string[];
}

export interface BlogCategoria {
  id?: string;
  nombre: string;
  slug: string;
  descripcion?: string;
  color: string;
  icono?: string;
  orden: number;
  activa: boolean;
  conteoPublicaciones?: number;
}

export interface BlogEtiqueta {
  id?: string;
  nombre: string;
  slug: string;
  descripcion?: string;
  color?: string;
  conteoPublicaciones: number;
  fechaCreacion: Timestamp;
}

export interface BlogFormData extends Omit<BlogPost, 'id' | 'fechaCreacion' | 'fechaActualizacion' | 'vistas' | 'likes' | 'shares' | 'comentarios'> {
  id?: string;
}

// ===============================
// MEDIOS Y ARCHIVOS
// ===============================

export interface MediaFile {
  id?: string;
  nombre: string;
  nombreOriginal: string;
  url: string;
  tipo: 'imagen' | 'video' | 'audio' | 'documento' | 'archivo';
  mimeType: string;
  tamaño: number; // en bytes
  dimensiones?: {
    ancho: number;
    alto: number;
  };
  duracion?: number; // para video/audio en segundos
  
  // Metadatos
  alt?: string;
  descripcion?: string;
  etiquetas?: string[];
  
  // Organización
  carpeta?: string;
  categoria: MediaCategoria;
  
  // Información del upload
  fechaSubida: Timestamp;
  subidoPorId: string;
  subidoPorNombre: string;
  
  // Uso y referencias
  utilizadoEn?: {
    tipo: 'pagina' | 'blog' | 'servicio' | 'testimonio';
    id: string;
    titulo: string;
  }[];
  
  // Optimización
  versiones?: {
    thumbnail: string;
    medium: string;
    large: string;
    webp?: string;
  };
  
  // Estado
  activo: boolean;
  publico: boolean;
}

export type MediaCategoria = 
  | 'banners'
  | 'logos'
  | 'iconos'
  | 'screenshots'
  | 'testimonios'
  | 'equipo'
  | 'blog'
  | 'servicios'
  | 'documentos'
  | 'otros';

// ===============================
// TESTIMONIOS Y CASOS DE ESTUDIO
// ===============================

export interface Testimonio {
  id?: string;
  clienteNombre: string;
  clienteEmpresa: string;
  clienteCargo: string;
  clienteEmail?: string;
  clienteAvatar?: string;
  clienteLogo?: string;
  
  // Contenido
  testimonio: string;
  extracto?: string;
  calificacion: 1 | 2 | 3 | 4 | 5;
  
  // Clasificación
  categoria: TestimonioCategoria;
  servicios: string[]; // IDs de servicios relacionados
  industria?: string;
  
  // Estado y fechas
  estado: 'pendiente' | 'aprobado' | 'rechazado' | 'destacado';
  fechaCreacion: Timestamp;
  fechaActualizacion: Timestamp;
  fechaAprobacion?: Timestamp;
  
  // Configuración
  mostrarEnHome: boolean;
  mostrarLogo: boolean;
  permitirContacto: boolean;
  
  // Metadata adicional
  verificado: boolean;
  destacado: boolean;
  orden?: number;
}

export type TestimonioCategoria = 
  | 'hosting'
  | 'vps'
  | 'dedicados'
  | 'dominios'
  | 'email'
  | 'soporte'
  | 'migracion'
  | 'general';

export interface CasoEstudio {
  id?: string;
  titulo: string;
  slug: string;
  clienteNombre: string;
  clienteEmpresa: string;
  clienteLogo?: string;
  clienteIndustria: string;
  clienteSitioWeb?: string;
  
  // Contenido
  resumenEjecutivo: string;
  problematica: string;
  solucion: string;
  implementacion: string;
  resultados: string;
  testimonioCliente?: string;
  
  // Métricas y resultados
  metricas?: {
    nombre: string;
    valorAntes: string;
    valorDespues: string;
    mejora: string;
  }[];
  
  // Clasificación
  serviciosUtilizados: string[];
  tecnologias: string[];
  industria: string;
  tamaño: 'startup' | 'pyme' | 'empresa' | 'corporativo';
  
  // Medios
  imagenDestacada: string;
  imagenes?: string[];
  video?: string;
  
  // Estado
  estado: 'borrador' | 'revision' | 'publicado';
  destacado: boolean;
  fechaCreacion: Timestamp;
  fechaActualizacion: Timestamp;
  fechaPublicacion?: Timestamp;
  
  // SEO
  metaTitulo?: string;
  metaDescripcion?: string;
  metaKeywords?: string[];
  
  // Analytics
  vistas: number;
  descargas: number;
}

// ===============================
// FAQ Y DOCUMENTACIÓN
// ===============================

export interface FAQ {
  id?: string;
  pregunta: string;
  respuesta: string;
  categoria: FAQCategoria;
  subcategoria?: string;
  
  // Organización
  orden: number;
  destacada: boolean;
  
  // Estado
  activa: boolean;
  fechaCreacion: Timestamp;
  fechaActualizacion: Timestamp;
  
  // Metadata
  etiquetas?: string[];
  serviciosRelacionados?: string[];
  
  // Analytics
  visualizaciones: number;
  votosUtiles: number;
  votosInutiles: number;
  
  // Contenido relacionado
  preguntasRelacionadas?: string[];
}

export type FAQCategoria = 
  | 'hosting'
  | 'vps'
  | 'dominios'
  | 'email'
  | 'facturacion'
  | 'soporte'
  | 'tecnico'
  | 'general';

export interface Tutorial {
  id?: string;
  titulo: string;
  slug: string;
  descripcion: string;
  contenido: string;
  
  // Clasificación
  categoria: TutorialCategoria;
  nivel: 'principiante' | 'intermedio' | 'avanzado';
  tiempoEstimado: number; // en minutos
  
  // Estructura
  pasos?: {
    numero: number;
    titulo: string;
    contenido: string;
    imagen?: string;
    codigo?: string;
  }[];
  
  // Requisitos
  requisitos?: string[];
  herramientas?: string[];
  
  // Estado
  estado: 'borrador' | 'revision' | 'publicado';
  fechaCreacion: Timestamp;
  fechaActualizacion: Timestamp;
  
  // Medios
  imagenDestacada?: string;
  video?: string;
  archivosDescarga?: string[];
  
  // SEO
  metaTitulo?: string;
  metaDescripcion?: string;
  metaKeywords?: string[];
  
  // Analytics y feedback
  vistas: number;
  calificacion: number;
  totalCalificaciones: number;
  completados: number;
  
  // Contenido relacionado
  tutorialesRelacionados?: string[];
}

export type TutorialCategoria = 
  | 'hosting'
  | 'wordpress'
  | 'cpanel'
  | 'email'
  | 'dominios'
  | 'ssl'
  | 'desarrollo'
  | 'seo'
  | 'seguridad';

// ===============================
// CONFIGURACIÓN DEL SITIO
// ===============================

export interface SiteConfig {
  id?: string;
  seccion: ConfigSeccion;
  configuraciones: Record<string, ConfigValue>;
  fechaActualizacion: Timestamp;
  actualizadoPorId: string;
  actualizadoPorNombre: string;
}

export type ConfigSeccion = 
  | 'general'
  | 'seo'
  | 'redes-sociales'
  | 'contacto'
  | 'legal'
  | 'analytics'
  | 'integraciones'
  | 'apariencia';

export interface ConfigValue {
  tipo: 'texto' | 'numero' | 'boolean' | 'email' | 'url' | 'imagen' | 'color' | 'fecha' | 'lista';
  valor: any;
  descripcion?: string;
  obligatorio?: boolean;
  validacion?: string;
}

// Configuraciones específicas
export interface GeneralConfig {
  nombreSitio: string;
  tagline: string;
  descripcionSitio: string;
  logoHeader: string;
  logoFooter: string;
  favicon: string;
  idiomaPredeterminado: string;
  zonaHoraria: string;
  formatoFecha: string;
  mantenimiento: boolean;
  mensajeMantenimiento?: string;
}

export interface SEOConfig {
  tituloGlobal: string;
  descripcionGlobal: string;
  keywordsGlobales: string[];
  imagenSocialPredeterminada: string;
  verificacionGoogle?: string;
  verificacionBing?: string;
  robotsTxt: string;
  sitemapUrl: string;
}

export interface ContactoConfig {
  emailPrincipal: string;
  emailSoporte: string;
  emailVentas: string;
  telefono: string;
  whatsapp: string;
  direccion: string;
  ciudad: string;
  estado: string;
  codigoPostal: string;
  pais: string;
  coordenadas?: {
    latitud: number;
    longitud: number;
  };
}

export interface RedesSocialesConfig {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  tiktok?: string;
  github?: string;
}

// ===============================
// FORMULARIOS Y TIPOS AUXILIARES
// ===============================

export interface CMSFilter {
  tipo?: 'pagina' | 'blog' | 'testimonio' | 'faq' | 'tutorial' | 'caso-estudio';
  estado?: string;
  categoria?: string;
  fechaDesde?: Date;
  fechaHasta?: Date;
  autor?: string;
  busqueda?: string;
  etiquetas?: string[];
  destacados?: boolean;
  activos?: boolean;
}

export interface CMSSearchResult {
  id: string;
  tipo: 'pagina' | 'blog' | 'testimonio' | 'faq' | 'tutorial' | 'caso-estudio' | 'media';
  titulo: string;
  descripcion?: string;
  url?: string;
  imagen?: string;
  fechaActualizacion: Timestamp;
  relevancia: number;
}

export interface CMSStats {
  contenido: {
    paginas: number;
    blog: number;
    testimonios: number;
    faq: number;
    tutoriales: number;
    casosEstudio: number;
  };
  medios: {
    total: number;
    imagenes: number;
    videos: number;
    documentos: number;
    espacioUsado: number; // en bytes
  };
  actividad: {
    publicacionesEsteMes: number;
    vistasEstaSeamana: number;
    ultimaActualizacion: Timestamp;
  };
}

export interface ContentTemplate {
  id: string;
  nombre: string;
  descripcion: string;
  tipo: 'pagina' | 'blog' | 'servicio';
  plantilla: string;
  campos: {
    nombre: string;
    tipo: string;
    requerido: boolean;
    valor_predeterminado?: any;
  }[];
}

// ===============================
// NOTIFICACIONES Y ACTIVIDAD
// ===============================

export interface CMSActivity {
  id?: string;
  tipo: 'crear' | 'editar' | 'publicar' | 'eliminar' | 'archivar';
  entidad: 'pagina' | 'blog' | 'testimonio' | 'faq' | 'tutorial' | 'media' | 'configuracion';
  entidadId: string;
  entidadTitulo: string;
  descripcion: string;
  usuarioId: string;
  usuarioNombre: string;
  fecha: Timestamp;
  metadatos?: Record<string, any>;
}

export interface CMSNotification {
  id?: string;
  tipo: 'info' | 'advertencia' | 'error' | 'exito';
  titulo: string;
  mensaje: string;
  usuarioId?: string; // null para notificaciones globales
  leida: boolean;
  fechaCreacion: Timestamp;
  fechaExpiracion?: Timestamp;
  accion?: {
    texto: string;
    url: string;
  };
}