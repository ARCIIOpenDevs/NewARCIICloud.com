import { Timestamp } from 'firebase/firestore';

// Tipos de métricas principales
export type MetricType = 
  | 'revenue' 
  | 'mrr' 
  | 'arr' 
  | 'churn_rate' 
  | 'ltv' 
  | 'cac' 
  | 'net_revenue_retention'
  | 'gross_revenue_retention'
  | 'active_clients'
  | 'new_clients'
  | 'canceled_clients'
  | 'tickets_resolved'
  | 'avg_resolution_time'
  | 'customer_satisfaction';

export type MetricPeriod = 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly';

export type DateRange = {
  start: Date;
  end: Date;
};

// Estructura principal de métricas
export interface Metric {
  id: string;
  type: MetricType;
  period: MetricPeriod;
  date: Timestamp;
  value: number;
  previousValue?: number;
  change?: number;
  changePercent?: number;
  metadata?: Record<string, any>;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Métricas agregadas para reportes
export interface MetricSummary {
  type: MetricType;
  period: MetricPeriod;
  current: number;
  previous: number;
  change: number;
  changePercent: number;
  trend: 'up' | 'down' | 'stable';
  sparklineData: number[];
  lastUpdated: Timestamp;
}

// Dashboard ejecutivo
export interface ExecutiveDashboard {
  period: DateRange;
  overview: {
    totalRevenue: MetricSummary;
    mrr: MetricSummary;
    activeClients: MetricSummary;
    churnRate: MetricSummary;
    customerSatisfaction: MetricSummary;
  };
  
  revenueBreakdown: {
    byServiceType: Array<{
      serviceType: string;
      revenue: number;
      percentage: number;
      change: number;
    }>;
    byClientSegment: Array<{
      segment: string;
      revenue: number;
      percentage: number;
      clientCount: number;
    }>;
  };

  clientMetrics: {
    acquisitionRate: MetricSummary;
    retentionRate: MetricSummary;
    expansionRate: MetricSummary;
    averageLTV: MetricSummary;
    averageCAC: MetricSummary;
  };

  operationalMetrics: {
    supportTickets: {
      total: number;
      resolved: number;
      avgResolutionTime: number;
      satisfactionScore: number;
    };
    servicesHealth: {
      uptime: number;
      activeServices: number;
      criticalIssues: number;
    };
  };
}

// Análisis de cohortes
export interface CohortAnalysis {
  period: 'monthly' | 'quarterly';
  cohorts: Array<{
    cohortDate: string;
    size: number;
    retentionRates: number[]; // Por período (mes 0, mes 1, mes 2, etc.)
    revenueRates: number[];
  }>;
}

// Análisis de comportamiento de clientes
export interface CustomerBehaviorAnalytics {
  segmentation: {
    byValue: Array<{
      segment: string;
      clientCount: number;
      totalRevenue: number;
      avgRevenue: number;
      churnRate: number;
    }>;
    
    byUsage: Array<{
      segment: string;
      clientCount: number;
      avgServicesCount: number;
      avgTicketsPerMonth: number;
    }>;
    
    byLifecycle: Array<{
      stage: 'new' | 'growing' | 'mature' | 'declining';
      clientCount: number;
      avgAge: number; // en meses
      avgRevenue: number;
    }>;
  };

  riskAnalysis: Array<{
    clientId: string;
    riskScore: number; // 0-100
    riskFactors: string[];
    recommendedActions: string[];
  }>;

  upsellOpportunities: Array<{
    clientId: string;
    currentServices: string[];
    recommendedServices: string[];
    potentialRevenue: number;
    probability: number;
  }>;
}

// Forecasting
export interface RevenueForecasting {
  horizon: 'quarterly' | 'yearly';
  model: 'linear' | 'seasonal' | 'growth';
  
  forecast: Array<{
    period: string;
    predictedRevenue: number;
    confidenceInterval: {
      low: number;
      high: number;
    };
    factors: string[];
  }>;

  assumptions: {
    growthRate: number;
    churnRate: number;
    expansionRate: number;
    seasonalityFactor?: number;
  };

  scenarios: Array<{
    name: string;
    description: string;
    impact: number; // % change
    probability: number;
  }>;
}

// Reportes personalizables
export interface CustomReport {
  id: string;
  name: string;
  description?: string;
  createdBy: string;
  isPublic: boolean;
  
  config: {
    metrics: MetricType[];
    dimensions: string[]; // 'client_segment', 'service_type', 'period', etc.
    filters: Array<{
      field: string;
      operator: 'equals' | 'contains' | 'greater_than' | 'less_than' | 'between';
      value: any;
    }>;
    
    visualization: {
      type: 'table' | 'line_chart' | 'bar_chart' | 'pie_chart' | 'metric_cards';
      options: Record<string, any>;
    };
    
    schedule?: {
      frequency: 'daily' | 'weekly' | 'monthly';
      recipients: string[];
      format: 'pdf' | 'excel' | 'email';
    };
  };
  
  lastRun?: Timestamp;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Resultado de reporte personalizable
export interface ReportResult {
  reportId: string;
  executedAt: Timestamp;
  
  data: Array<Record<string, any>>;
  summary: {
    totalRecords: number;
    dateRange: DateRange;
    aggregations?: Record<string, number>;
  };
  
  metadata: {
    executionTime: number; // milliseconds
    dataFreshness: Timestamp;
    filters: Array<{field: string, value: any}>;
  };
}

// KPIs críticos para alertas
export interface KPIAlert {
  id: string;
  name: string;
  metric: MetricType;
  
  threshold: {
    type: 'above' | 'below' | 'change';
    value: number;
    period?: MetricPeriod;
  };
  
  channels: Array<{
    type: 'email' | 'slack' | 'webhook';
    destination: string;
    template?: string;
  }>;
  
  isActive: boolean;
  lastTriggered?: Timestamp;
  
  createdBy: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Logs de actividad para analytics
export interface AnalyticsActivityLog {
  id: string;
  userId: string;
  action: 'report_generated' | 'dashboard_viewed' | 'metric_calculated' | 'alert_triggered';
  
  details: {
    reportId?: string;
    metrics?: MetricType[];
    filters?: Record<string, any>;
    executionTime?: number;
  };
  
  timestamp: Timestamp;
  ip?: string;
  userAgent?: string;
}

// Configuración del sistema de analytics
export interface AnalyticsConfig {
  dataRetention: {
    rawData: number; // días
    aggregatedData: number; // días
    reports: number; // días
  };
  
  updateFrequency: {
    realtime: MetricType[]; // Métricas que se calculan en tiempo real
    hourly: MetricType[];   // Métricas que se calculan cada hora
    daily: MetricType[];    // Métricas que se calculan diariamente
  };
  
  performance: {
    maxConcurrentReports: number;
    cacheTimeout: number; // seconds
    batchSize: number;
  };
  
  alerts: {
    maxAlertsPerUser: number;
    cooldownPeriod: number; // minutes
  };
}