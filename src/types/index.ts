import { Timestamp } from 'firebase/firestore';

// ====================================
// USER TYPES
// ====================================

export type UserRole = 'superadmin' | 'admin' | 'support' | 'sales' | 'billing' | 'client';

export interface UserPermissions {
  clients: {
    read: boolean;
    write: boolean;
    delete: boolean;
  };
  services: {
    read: boolean;
    write: boolean;
    delete: boolean;
  };
  billing: {
    read: boolean;
    write: boolean;
    delete: boolean;
  };
  support: {
    read: boolean;
    write: boolean;
    delete: boolean;
  };
  cms: {
    read: boolean;
    write: boolean;
    delete: boolean;
  };
  analytics: {
    read: boolean;
    write: boolean;
    delete: boolean;
  };
}

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string | null;
  role: UserRole;
  permissions: UserPermissions;
  department?: string;
  phone?: string;
  active: boolean;
  lastLogin?: Timestamp;
  twoFactorEnabled: boolean;
  clientId?: string; // If user is a client
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// ====================================
// CLIENT TYPES
// ====================================

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Company {
  name: string;
  size: 'individual' | 'small' | 'medium' | 'enterprise';
  industry: string;
  website?: string;
}

export interface FiscalInfo {
  rfc?: string;
  businessName?: string;
  fiscalAddress?: Address;
  regimenFiscal?: string;
  usoCFDI?: string;
}

export interface ClientPreferences {
  language: 'es' | 'en';
  timezone: string;
  communication: {
    email: boolean;
    sms: boolean;
    whatsapp: boolean;
    phone: boolean;
  };
  newsletter: boolean;
}

export interface ClientMetrics {
  lifetimeValue: number;
  totalSpent: number;
  servicesCount: number;
  openTickets: number;
  satisfactionScore?: number;
}

export interface ClientStats {
  totalRevenue: number;
  activeServices: number;
  totalInvoices: number;
  totalTickets: number;
  lastPayment?: Timestamp;
}

export interface Note {
  id: string;
  content: string;
  createdBy: string;
  createdAt: Timestamp;
  private: boolean;
}

export interface Client {
  id?: string; // Firestore document ID
  clientId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: Company;
  fiscal: FiscalInfo;
  accountType: 'individual' | 'business' | 'enterprise';
  segment: string;
  tags: string[];
  status: 'active' | 'inactive' | 'suspended';
  customerSince: Timestamp;
  address: Address;
  preferences: ClientPreferences;
  metrics: ClientMetrics;
  stats?: ClientStats; // Agregamos stats para compatibilidad
  paymentMethods: string[]; // PaymentMethod IDs
  defaultPaymentMethod?: string;
  notes: Note[];
  assignedTo?: string; // User ID
  lastContact?: Timestamp;
  nextFollowUp?: Timestamp;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  createdBy: string;
}

// ====================================
// PAYMENT METHOD TYPES
// ====================================

export interface CardDetails {
  last4: string;
  brand: string;
  expiryMonth: number;
  expiryYear: number;
  holderName: string;
}

export interface BankAccount {
  bankName: string;
  accountNumber: string; // masked
  clabe?: string;
}

export interface PaymentMethod {
  methodId: string;
  clientId: string;
  type: 'card' | 'bank_account';
  card?: CardDetails;
  bankAccount?: BankAccount;
  default: boolean;
  status: 'active' | 'expired' | 'deleted';
  stripePaymentMethodId?: string;
  mercadoPagoCardId?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// ====================================
// SERVICE TYPES
// ====================================

export type ServiceType = 'hosting' | 'vps' | 'dedicated' | 'domain' | 'email' | 'ssl' | 'cdn' | 'backup';
export type ServiceStatus = 'active' | 'pending' | 'suspended' | 'canceled' | 'cancelled' | 'expired';
export type BillingCycle = 'monthly' | 'quarterly' | 'annually';

export interface ServiceSpecifications {
  cpu?: string;
  ram?: string;
  storage?: string;
  bandwidth?: string;
}

export interface ServiceTechnical {
  server?: string; // Server ID
  ip?: string[];
  domain?: string;
  specifications?: ServiceSpecifications;
}

export interface ResourceUsage {
  used: number;
  total: number;
}

export interface ServiceUsage {
  storage?: ResourceUsage;
  bandwidth?: ResourceUsage;
  emails?: ResourceUsage;
  databases?: ResourceUsage;
}

export interface ServicePricing {
  price: number;
  billingCycle: BillingCycle;
  currency: 'MXN' | 'USD';
  setupFee?: number;
  nextBillingAmount: number;
}

export interface ServiceAccess {
  cpanelUrl?: string;
  credentials?: string; // encrypted JSON
  ftpAccess?: string; // encrypted JSON
}

export interface Service {
  id?: string; // Firestore document ID
  serviceId: string;
  clientId: string;
  serviceType: ServiceType;
  serviceName: string;
  plan: string;
  status: ServiceStatus;
  activationDate?: Timestamp;
  expirationDate: Timestamp;
  expiresAt?: Timestamp; // Alias para compatibilidad
  nextRenewalDate: Timestamp;
  autoRenew: boolean;
  name?: string; // Alias para serviceName
  description?: string;
  type?: ServiceType; // Alias para serviceType
  technical: ServiceTechnical;
  domain?: { name: string }; // Para compatibilidad
  server?: { hostname?: string }; // Para compatibilidad
  billing?: { nextBilling: Timestamp }; // Para compatibilidad
  usage?: ServiceUsage;
  pricing: ServicePricing;
  access?: ServiceAccess;
  relatedInvoices: string[]; // Invoice IDs
  relatedTickets: string[]; // Ticket IDs
  notes: Note[];
  createdAt: Timestamp;
  updatedAt: Timestamp;
  createdBy: string;
}

// ====================================
// INVOICE TYPES (CFDI Mexico)
// ====================================

export interface CFDIReceptor {
  rfc: string;
  nombre: string;
  usoCFDI: string;
  regimenFiscal?: string;
}

export interface CFDIData {
  version: '4.0';
  uuid?: string; // Only when stamped
  tipoComprobante: 'I'; // Ingreso
  metodoPago: 'PPD' | 'PUE'; // Pago Por Definir / Pago en Una Exhibición
  formaPago: string; // "99", "03", "04", "28", etc.
  receptor: CFDIReceptor;
  pacProvider: 'factura.com';
  xmlUrl?: string;
  pdfUrl?: string;
  errorMessage?: string;
}

export interface InvoiceItem {
  description: string;
  quantity: number;
  unitPrice: number;
  discount: number;
  tax: number;
  total: number;
  // CFDI specific
  claveProdServ: string; // "81112002" for hosting
  claveUnidad: string; // "ACT"
  unidad: string; // "Actividad"
}

export interface Invoice {
  invoiceId: string;
  clientId: string;
  serviceIds?: string[];
  invoiceNumber: string;
  serie: string;
  folio: string;
  cfdi: CFDIData;
  items: InvoiceItem[];
  subtotal: number;
  taxes: number;
  discounts: number;
  total: number;
  paidAmount: number;
  balance: number;
  status: 'draft' | 'pending_payment' | 'paid' | 'overdue' | 'canceled';
  issueDate: Timestamp;
  dueDate: Timestamp;
  paymentDate?: Timestamp;
  fechaTimbrado?: Timestamp;
  relatedPayments: string[]; // Payment IDs
  complementosPago: string[]; // Complemento de pago IDs
  avisoReciboId?: string; // Visual document PPD
  notes?: string;
  internalNotes?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  createdBy: string;
}

// ====================================
// PAYMENT TYPES
// ====================================

export interface PaymentMethodDetails {
  last4?: string;
  brand?: string;
  bankName?: string;
  reference?: string;
  paypalTransactionId?: string;
  oxxoReference?: string;
}

export interface PaymentMethodInfo {
  type: 'card' | 'bank_transfer' | 'paypal' | 'cash' | 'oxxo';
  details: PaymentMethodDetails;
}

export interface PaymentGateway {
  provider: 'stripe' | 'mercadopago' | 'paypal' | 'manual';
  transactionId: string;
  gatewayResponse?: any;
  fees?: number;
}

export interface PaymentRefund {
  refundId: string;
  amount: number;
  reason: string;
  date: Timestamp;
}

export interface ComplementoPago {
  uuid?: string;
  xmlUrl?: string;
  pdfUrl?: string;
  generated: boolean;
  error?: string;
}

export interface Payment {
  paymentId: string;
  clientId: string;
  invoiceId: string;
  amount: number;
  currency: 'MXN' | 'USD';
  paymentDate: Timestamp;
  paymentMethod: PaymentMethodInfo;
  gateway: PaymentGateway;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  reconciled: boolean;
  reconciledDate?: Timestamp;
  reconciledBy?: string;
  complementoPago?: ComplementoPago;
  receipt?: string; // URL
  refunds?: PaymentRefund[];
  notes?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  createdBy?: string;
}

// ====================================
// TICKET TYPES
// ====================================

export type TicketPriority = 'low' | 'medium' | 'high' | 'critical';
export type TicketStatus = 'open' | 'in-progress' | 'waiting-customer' | 'resolved' | 'closed';

export interface TicketMessage {
  id: string;
  from: string; // User ID or email
  message: string;
  attachments: string[]; // URLs
  timestamp: Timestamp;
  isInternal: boolean;
}

export interface Ticket {
  ticketId: string;
  ticketNumber: string;
  clientId: string;
  serviceId?: string;
  subject: string;
  description: string;
  category: string;
  subcategory?: string;
  priority: TicketPriority;
  status: TicketStatus;
  assignedTo?: string; // User ID
  assignedTeam?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  firstResponseAt?: Timestamp;
  resolvedAt?: Timestamp;
  slaCompliance: boolean;
  messages: TicketMessage[];
  responseTime?: number; // minutes
  resolutionTime?: number; // minutes
  customerSatisfaction?: number; // 1-5
  relatedTickets: string[]; // Ticket IDs
  tags: string[];
  createdBy: string;
}

// ====================================
// CMS TYPES
// ====================================

export type ContentType = 'blog_post' | 'page' | 'faq' | 'testimonial' | 'team_member' | 'job' | 'press_release';
export type ContentStatus = 'draft' | 'published' | 'archived';

export interface SEOMeta {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
}

export interface CMSContent {
  contentId: string;
  type: ContentType;
  title: string;
  slug: string;
  content: string; // Rich text HTML
  excerpt?: string;
  author?: string; // User ID
  category?: string;
  tags: string[];
  featuredImage?: string;
  gallery?: string[]; // Image URLs
  seo: SEOMeta;
  featured: boolean;
  status: ContentStatus;
  publishedAt?: Timestamp;
  scheduledAt?: Timestamp;
  views: number;
  likes: number;
  comments?: number;
  relatedContent: string[]; // Content IDs
  createdAt: Timestamp;
  updatedAt: Timestamp;
  createdBy: string;
}

// ====================================
// SYSTEM CONFIGURATION TYPES
// ====================================

export interface CompanyInfo {
  name: string;
  rfc: string;
  address: Address;
  phone: string;
  email: string;
  website: string;
  logo?: string;
  favicon?: string;
}

export interface EmailSettings {
  smtpServer: string;
  port: number;
  username: string;
  fromName: string;
  fromEmail: string;
  templates: Record<string, any>;
}

export interface PaymentGateways {
  stripe: {
    apiKey: string;
    webhookSecret: string;
  };
  mercadopago: {
    accessToken: string;
    publicKey: string;
  };
  paypal: {
    clientId: string;
    clientSecret: string;
  };
}

export interface CFDIConfig {
  rfc: string;
  certificado: string;
  key: string;
  pac: {
    provider: string;
    credentials: Record<string, any>;
  };
}

export interface SLAConfig {
  uptimeGuarantee: number;
  supportResponseTime: Record<string, number>;
  compensationRules: any[];
}

export interface SystemConfig {
  companyInfo: CompanyInfo;
  emailSettings: EmailSettings;
  paymentGateways: PaymentGateways;
  cfdi: CFDIConfig;
  slaConfig: SLAConfig;
  integrations: Record<string, any>;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  updatedBy: string;
}

// ====================================
// AUDIT LOG TYPES
// ====================================

export interface AuditLog {
  logId: string;
  action: string;
  userId: string;
  userEmail: string;
  resourceType: string; // 'client', 'service', 'invoice', etc.
  resourceId: string;
  changes?: Record<string, any>; // Before/after values
  metadata?: Record<string, any>;
  ipAddress?: string;
  userAgent?: string;
  timestamp: Timestamp;
}

// ====================================
// API RESPONSE TYPES
// ====================================

export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface FilterParams {
  search?: string;
  status?: string;
  dateFrom?: string;
  dateTo?: string;
  [key: string]: any;
}

// ====================================
// UTILITY TYPES
// ====================================

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredBy<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Form types
export type CreateClientForm = Optional<Client, 'clientId' | 'createdAt' | 'updatedAt' | 'createdBy' | 'metrics'>;
export type UpdateClientForm = Partial<Omit<Client, 'clientId' | 'createdAt' | 'createdBy'>>;

// Simplified form types for complex structures
export interface ServicePlan {
  name: string;
  resources?: {
    storage?: string;
    bandwidth?: string;
    domains?: string;
    databases?: string;
    emails?: string;
    cpu?: string;
    ram?: string;
  };
  features?: string[];
}

export interface ServiceServer {
  hostname?: string;
  location?: string;
  controlPanel?: string;
  ip?: string;
  os?: string;
}

export interface ServiceDomain {
  name?: string;
  autoRenew?: boolean;
  locked?: boolean;
  privacy?: boolean;
}

export interface ServiceConfig {
  backups?: boolean;
  ssl?: boolean;
  staging?: boolean;
  cdn?: boolean;
}

export interface ServiceBilling {
  cycle?: string;
  price?: number;
  currency?: string;
  autoRenew?: boolean;
  nextBilling?: Timestamp;
}

export interface CreateServiceForm {
  clientId: string;
  serviceType: ServiceType;
  serviceName: string;
  plan?: ServicePlan | string;
  status?: ServiceStatus;
  activationDate?: Date;
  expirationDate?: Date;
  expiresAt?: Date;
  nextRenewalDate?: Date;
  autoRenew?: boolean;
  technical?: ServiceTechnical;
  usage?: ServiceUsage;
  pricing?: ServicePricing;
  access?: ServiceAccess;
  relatedInvoices?: string[];
  relatedTickets?: string[];
  notes?: Note[] | string;
  tags?: string[];
  config?: ServiceConfig;
  server?: ServiceServer;
  domain?: ServiceDomain;
  billing?: ServiceBilling;
}
export type UpdateServiceForm = Partial<Omit<Service, 'serviceId' | 'createdAt' | 'createdBy'>>;

export type CreateTicketForm = Optional<Ticket, 'ticketId' | 'ticketNumber' | 'createdAt' | 'updatedAt' | 'createdBy'>;
export type UpdateTicketForm = Partial<Omit<Ticket, 'ticketId' | 'createdAt' | 'createdBy'>>;

// Dashboard types
export interface DashboardStats {
  totalClients: number;
  activeServices: number;
  monthlyRevenue: number;
  openTickets: number;
  newClientsThisMonth: number;
  renewalsThisMonth: number;
  averageResolutionTime: number;
  customerSatisfaction: number;
}

export interface ChartData {
  label: string;
  value: number;
  date?: string;
  color?: string;
}

export interface RevenueData {
  month: string;
  revenue: number;
  growth: number;
}