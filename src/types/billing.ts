// Tipos para el Sistema de Facturación Mexicana con CFDI 4.0
import { Timestamp } from 'firebase/firestore';

// ============ TIPOS PRINCIPALES DE FACTURACIÓN ============

export interface FacturaFormData {
  id?: string;
  // Información básica
  serie: string; // Ej: "A", "B", "FAC"
  folio: number; // Número consecutivo
  fecha: string; // Fecha de emisión ISO string
  tipoComprobante: TipoComprobante;
  moneda: 'MXN' | 'USD' | 'EUR';
  tipoCambio?: number;
  
  // Cliente/Receptor
  clienteId: string;
  clienteNombre: string;
  clienteRFC: string;
  clienteRazonSocial?: string;
  clienteDomicilio: DomicilioFiscal;
  clienteRegimenFiscal: string;
  clienteUsoCFDI: string;
  
  // Método y forma de pago
  metodoPago: MetodoPago;
  formaPago: FormaPago;
  condicionesPago?: string;
  
  // Conceptos/Servicios
  conceptos: ConceptoFactura[];
  
  // Totales
  subtotal: number;
  descuento?: number;
  impuestos: ImpuestoFactura[];
  total: number;
  
  // Estado y procesamiento
  estado: EstadoFactura;
  uuid?: string; // UUID del SAT después de timbrar
  fechaTimbrado?: string;
  qrCode?: string;
  xmlPath?: string;
  pdfPath?: string;
  
  // Relaciones
  serviciosIds?: string[]; // Servicios facturados
  pagoId?: string; // Pago asociado si existe
  
  // Auditoría
  fechaCreacion: string;
  fechaActualizacion: string;
  creadoPor: string;
  
  // PAC específico
  pacResponse?: PACResponse;
}

export interface ConceptoFactura {
  claveProdServ: string; // Clave SAT del producto/servicio
  noIdentificacion?: string;
  cantidad: number;
  claveUnidad: string; // Clave SAT de unidad
  unidad: string;
  descripcion: string;
  valorUnitario: number;
  importe: number;
  descuento?: number;
  
  // Impuestos del concepto
  impuestos?: ImpuestoConcepto[];
  
  // Información adicional
  cuentaPredial?: string;
  informacionAduanera?: InformacionAduanera[];
}

export interface ImpuestoConcepto {
  tipo: 'Traslado' | 'Retencion';
  impuesto: string; // '002' para IVA, '001' para ISR, etc.
  tipoFactor: 'Tasa' | 'Cuota' | 'Exento';
  tasaOCuota?: number;
  base: number;
  importe?: number;
}

export interface ImpuestoFactura {
  tipo: 'Traslado' | 'Retencion';
  impuesto: string;
  importe: number;
}

export interface InformacionAduanera {
  numero: string;
  fecha: string;
  aduana: string;
}

export interface DomicilioFiscal {
  calle: string;
  noExterior?: string;
  noInterior?: string;
  colonia: string;
  localidad?: string;
  municipio: string;
  estado: string;
  pais: string;
  codigoPostal: string;
}

// ============ TIPOS DE PAGO ============

export interface PagoFormData {
  id?: string;
  // Información básica
  serie: string;
  folio: number;
  fecha: string;
  
  // Cliente
  clienteId: string;
  clienteNombre: string;
  clienteRFC: string;
  
  // Documentos relacionados (facturas pagadas)
  documentosRelacionados: DocumentoRelacionado[];
  
  // Información del pago
  formaPago: FormaPago;
  moneda: 'MXN' | 'USD' | 'EUR';
  tipoCambio?: number;
  monto: number;
  fechaPago: string;
  
  // Cuenta ordenante/beneficiaria
  cuentaOrdenante?: string;
  rfcEmisorCtaOrd?: string;
  nombreBancoOrdExt?: string;
  cuentaBeneficiaria?: string;
  rfcEmisorCtaBen?: string;
  
  // Estado
  estado: EstadoPago;
  uuid?: string;
  xmlPath?: string;
  pdfPath?: string;
  
  // Auditoría
  fechaCreacion: string;
  fechaActualizacion: string;
  creadoPor: string;
}

export interface DocumentoRelacionado {
  idDocumento: string; // UUID de la factura
  serie?: string;
  folio?: string;
  metodoPagoDR: MetodoPago;
  numParcialidad?: number;
  impSaldoAnt: number; // Saldo anterior
  impPagado: number; // Importe pagado
  impSaldoInsoluto: number; // Saldo insoluto
  objetoImpDR: string; // '01' = No objeto de impuesto, '02' = Sí objeto de impuesto
  
  // Impuestos del documento relacionado
  impuestosDR?: ImpuestoDR[];
}

export interface ImpuestoDR {
  tipo: 'Traslado' | 'Retencion';
  impuesto: string;
  tipoFactor: 'Tasa' | 'Cuota' | 'Exento';
  tasaOCuota?: number;
  baseDR: number;
  importeDR?: number;
}

// ============ ENUMS Y CATÁLOGOS ============

export type TipoComprobante = 
  | 'I'   // Ingreso
  | 'E'   // Egreso  
  | 'T'   // Traslado
  | 'N'   // Nómina
  | 'P';  // Pago

export type MetodoPago = 
  | 'PUE' // Pago en una sola exhibición
  | 'PPD'; // Pago en parcialidades o diferido

export type FormaPago = 
  | '01'  // Efectivo
  | '02'  // Cheque nominativo
  | '03'  // Transferencia electrónica de fondos
  | '04'  // Tarjeta de crédito
  | '05'  // Monedero electrónico
  | '06'  // Dinero electrónico
  | '08'  // Vales de despensa
  | '12'  // Dación en pago
  | '13'  // Pago por subrogación
  | '14'  // Pago por consignación
  | '15'  // Condonación
  | '17'  // Compensación
  | '23'  // Novación
  | '24'  // Confusión
  | '25'  // Remisión de deuda
  | '26'  // Prescripción o caducidad
  | '27'  // A satisfacción del acreedor
  | '28'  // Tarjeta de débito
  | '29'  // Tarjeta de servicios
  | '30'  // Aplicación de anticipos
  | '99'; // Por definir

export type EstadoFactura = 
  | 'borrador'      // En edición
  | 'pendiente'     // Lista para timbrar
  | 'timbrada'      // Timbrada exitosamente
  | 'cancelada'     // Cancelada en el SAT
  | 'pagada'        // Pagada (complemento de pago)
  | 'vencida'       // Vencida sin pagar
  | 'error';        // Error en el timbrado

export type EstadoPago = 
  | 'borrador'
  | 'pendiente'
  | 'timbrado'
  | 'error';

// ============ RESPUESTA DEL PAC ============

export interface PACResponse {
  success: boolean;
  uuid?: string;
  fechaTimbrado?: string;
  selloSAT?: string;
  noCertificadoSAT?: string;
  xml?: string;
  pdf?: string;
  qrCode?: string;
  error?: string;
  codigoError?: string;
  mensajeOriginal?: string;
}

// ============ CONFIGURACIÓN DE EMPRESA ============

export interface ConfiguracionFacturacion {
  // Datos del emisor
  razonSocial: string;
  nombreComercial: string;
  rfc: string;
  regimenFiscal: string;
  
  // Domicilio fiscal
  domicilioFiscal: DomicilioFiscal;
  
  // Certificados
  certificadoPath?: string;
  llavePrivadaPath?: string;
  passwordLlavePrivada?: string;
  
  // PAC Configuration
  pacProvider: 'factura.com' | 'otro';
  pacApiKey?: string;
  pacUserId?: string;
  pacUrl?: string;
  pacTestMode: boolean;
  
  // Series y folios
  seriesFacturas: SerieFactura[];
  seriesPagos: SeriePago[];
  
  // Configuraciones adicionales
  logoPath?: string;
  leyendaFactura?: string;
  cuentasBancarias?: CuentaBancaria[];
}

export interface SerieFactura {
  serie: string;
  descripcion: string;
  siguienteFolio: number;
  activa: boolean;
  tipoComprobante: TipoComprobante;
}

export interface SeriePago {
  serie: string;
  descripcion: string;
  siguienteFolio: number;
  activa: boolean;
}

export interface CuentaBancaria {
  banco: string;
  numero: string;
  clabe: string;
  moneda: string;
  activa: boolean;
}

// ============ REPORTES Y ESTADÍSTICAS ============

export interface EstadisticasFacturacion {
  periodo: {
    inicio: string;
    fin: string;
  };
  
  // Facturas
  totalFacturas: number;
  facturasTimbradasExitosamente: number;
  facturasConError: number;
  facturasCanceladas: number;
  
  // Montos
  montoTotalFacturado: number;
  montoTotalCobrado: number;
  montoPendienteCobro: number;
  
  // Por mes
  facturasPorMes: Array<{
    mes: string;
    cantidad: number;
    monto: number;
  }>;
  
  // Top clientes
  topClientes: Array<{
    clienteId: string;
    clienteNombre: string;
    totalFacturado: number;
    numeroFacturas: number;
  }>;
}