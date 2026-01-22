import { Timestamp } from 'firebase/firestore';
import { MetricType } from './analytics';

// Sistema de Alertas Inteligentes
export interface SmartAlert {
  id: string;
  name: string;
  description: string;
  
  // Configuración de la alerta
  trigger: {
    type: 'threshold' | 'anomaly' | 'trend' | 'composite';
    metric: MetricType;
    condition: 'above' | 'below' | 'equals' | 'change_above' | 'change_below';
    value?: number;
    percentage?: number;
    timeframe: 'realtime' | 'hourly' | 'daily' | 'weekly';
  };

  // Machine Learning para detección de anomalías
  ml: {
    enabled: boolean;
    sensitivity: 'low' | 'medium' | 'high';
    learningPeriod: number; // días
    seasonalAdjustment: boolean;
  };

  // Canales de notificación
  notifications: {
    channels: Array<{
      type: 'email' | 'slack' | 'webhook' | 'sms' | 'in_app';
      destination: string;
      template?: string;
      priority: 'low' | 'medium' | 'high' | 'critical';
    }>;
    cooldown: number; // minutos entre alertas
    escalation?: {
      enabled: boolean;
      levels: Array<{
        delay: number; // minutos
        channels: string[];
        recipients: string[];
      }>;
    };
  };

  // Estado y estadísticas
  status: 'active' | 'paused' | 'disabled';
  lastTriggered?: Timestamp;
  triggerCount: number;
  falsePositiveRate?: number;
  
  // Configuración avanzada
  conditions?: {
    timeWindow: number; // minutos
    minimumDataPoints: number;
    ignoreBusinessHours: boolean;
    weekendsOnly?: boolean;
  };

  createdBy: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Log de alertas ejecutadas
export interface AlertExecution {
  id: string;
  alertId: string;
  triggeredAt: Timestamp;
  
  // Datos del trigger
  triggerData: {
    metric: MetricType;
    currentValue: number;
    previousValue?: number;
    threshold?: number;
    anomalyScore?: number;
  };

  // Acciones tomadas
  actions: Array<{
    type: 'notification' | 'webhook' | 'workflow_trigger';
    channel: string;
    status: 'sent' | 'failed' | 'pending';
    responseTime?: number;
    error?: string;
  }>;

  // Resolución
  resolution?: {
    status: 'acknowledged' | 'resolved' | 'false_positive';
    resolvedBy?: string;
    resolvedAt?: Timestamp;
    notes?: string;
  };

  metadata: Record<string, any>;
}

// Workflow steps
export interface WorkflowStep {
  id: string;
  name: string;
  type: 'email' | 'sms' | 'webhook' | 'api_call' | 'delay' | 'condition' | 'ai_decision' | 'add_tag';
  
  // Configuración específica por tipo
  config: {
    // Para emails/SMS
    template?: string;
    recipients?: string[];
    to?: string; // Destinatario para emails
    subject?: string; // Asunto para emails
    
    // Para delays
    duration?: number;
    unit?: 'minutes' | 'hours' | 'days';
    
    // Para condiciones
    condition?: string;
    trueStep?: string;
    falseStep?: string;
    
    // Para AI decisions
    model?: string;
    confidence?: number;
    
    // Para API calls
    url?: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: Record<string, string>;
    body?: any;
    
    // Para add_tag
    tag?: string;
  };
  
  // Control de flujo
  nextStep?: string;
  onError?: 'continue' | 'stop' | 'retry';
  retries?: number;
  
  // Propiedades adicionales usadas en el componente
  conditions?: any;
  order?: number;
}

// Workflows automatizados
export interface AutomatedWorkflow {
  id: string;
  name: string;
  description: string;
  category: 'client_lifecycle' | 'support' | 'billing' | 'marketing' | 'operations';
  
  // Triggers que inician el workflow
  triggers: Array<{
    type: 'event' | 'schedule' | 'metric' | 'manual';
    event?: string; // 'client_created', 'payment_failed', etc.
    schedule?: {
      frequency: 'daily' | 'weekly' | 'monthly';
      time: string;
      timezone: string;
    };
    metric?: {
      type: MetricType;
      condition: string;
      value: number;
    };
  }>;

  // Pasos del workflow
  steps: WorkflowStep[];

  // Estado y métricas
  status: 'active' | 'paused' | 'draft';
  executionCount: number;
  successRate: number;
  avgExecutionTime: number;

  // Configuración avanzada
  settings: {
    maxConcurrentExecutions: number;
    timeout: number; // segundos
    retryPolicy: 'exponential' | 'linear' | 'fixed';
    logging: boolean;
  };

  createdBy: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Ejecuciones de workflows
export interface WorkflowExecution {
  id: string;
  workflowId: string;
  triggeredBy: string;
  startedAt: Timestamp;
  completedAt?: Timestamp;
  
  // Estado de la ejecución
  status: 'running' | 'completed' | 'failed' | 'paused' | 'cancelled';
  currentStep?: string;
  
  // Pasos ejecutados
  steps: Array<{
    stepId: string;
    startedAt: Timestamp;
    completedAt?: Timestamp;
    status: 'pending' | 'running' | 'completed' | 'failed' | 'skipped';
    output?: any;
    error?: string;
    retries?: number;
  }>;

  // Datos del contexto
  context: {
    clientId?: string;
    serviceId?: string;
    ticketId?: string;
    invoiceId?: string;
    [key: string]: any;
  };

  // Métricas de ejecución
  metrics: {
    executionTime: number; // milliseconds
    stepsExecuted: number;
    stepsSkipped: number;
    stepsFailed: number;
  };

  logs: Array<{
    timestamp: Timestamp;
    level: 'info' | 'warn' | 'error' | 'debug';
    message: string;
    data?: any;
  }>;
}

// Predicción de Churn con IA
export interface ChurnPrediction {
  id: string;
  clientId: string;
  
  // Predicción
  prediction: {
    churnProbability: number; // 0-1
    confidenceScore: number; // 0-1
    riskLevel: 'low' | 'medium' | 'high' | 'critical';
    timeframe: '30d' | '60d' | '90d';
  };

  // Factores de riesgo identificados
  riskFactors: Array<{
    factor: string;
    impact: number; // -1 to 1
    description: string;
    category: 'usage' | 'support' | 'billing' | 'engagement';
  }>;

  // Recomendaciones automáticas
  recommendations: Array<{
    action: string;
    priority: 'low' | 'medium' | 'high';
    description: string;
    expectedImpact: number; // % reduction in churn probability
    effort: 'low' | 'medium' | 'high';
    category: 'retention_campaign' | 'proactive_support' | 'pricing_adjustment' | 'feature_education';
  }>;

  // Datos del modelo
  model: {
    version: string;
    features: string[];
    accuracy: number;
    precision: number;
    recall: number;
  };

  // Historial
  previousPredictions?: Array<{
    date: Timestamp;
    probability: number;
    actual?: boolean; // si el cliente realmente hizo churn
  }>;

  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Perfil de riesgo del cliente para análisis de churn
export interface ClientRiskProfile {
  id: string;
  clientId: string;
  name?: string; // Nombre del cliente
  email?: string; // Email del cliente
  riskScore: number;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  
  // Información adicional del cliente
  mrr?: number; // Monthly Recurring Revenue
  daysSinceSignup?: number; // Días desde registro
  openTickets?: number; // Tickets abiertos
  serviceUsage?: number; // Uso de servicios
  lastActivity?: Date; // Última actividad
  segment?: string; // Segmento del cliente
  
  // Factores de riesgo
  factors: {
    paymentHistory: number;
    supportTickets: number;
    usagePattern: number;
    contractLength: number;
    satisfaction: number;
  };

  // Predicciones
  churnProbability: number;
  
  // Recomendaciones
  recommendations: Array<{
    type: 'contact' | 'discount' | 'upgrade' | 'retention_call';
    priority: 'low' | 'medium' | 'high';
    description: string;
  }>;

  lastUpdated: Timestamp;
}

// Respuestas automáticas para soporte
export interface AutoResponse {
  id: string;
  name: string;
  category: 'faq' | 'technical' | 'billing' | 'general';
  
  // Triggers que activan la respuesta
  triggers: {
    keywords: string[];
    sentiment?: 'positive' | 'negative' | 'neutral';
    urgency?: 'low' | 'medium' | 'high';
    clientTier?: string;
  };

  // Respuesta generada
  response: {
    template: string;
    personalized: boolean;
    includeKnowledgeBase: boolean;
    escalateToHuman?: boolean;
    
    // AI-powered improvements
    aiEnhanced: boolean;
    contextAware: boolean;
    multiLanguage: boolean;
  };

  // Performance metrics
  metrics: {
    usageCount: number;
    satisfactionRating: number;
    escalationRate: number;
    resolutionRate: number;
  };

  // Configuración
  settings: {
    enabled: boolean;
    businessHoursOnly: boolean;
    maxResponsesPerDay: number;
    cooldownPeriod: number; // minutos
  };

  createdBy: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Email sequences automatizadas
export interface EmailSequence {
  id: string;
  name: string;
  description: string;
  type: 'onboarding' | 'retention' | 'upsell' | 'win_back' | 'nurture';
  
  // Triggers de entrada
  triggers: Array<{
    event: 'client_created' | 'service_activated' | 'payment_failed' | 'inactivity_detected' | 'trial_started';
    conditions?: Array<{
      field: string;
      operator: 'equals' | 'not_equals' | 'greater_than' | 'less_than' | 'contains';
      value: any;
    }>;
  }>;

  // Emails de la secuencia
  emails: Array<{
    id: string;
    name: string;
    subject: string;
    template: string;
    
    // Timing
    delay: number; // horas desde el trigger o email anterior
    sendTime?: string; // hora específica del día (HH:MM)
    
    // Personalization
    personalized: boolean;
    dynamicContent: boolean;
    aiOptimized: boolean;
    
    // Configuración
    settings: {
      skipWeekends: boolean;
      respectTimezone: boolean;
      maxDeliveryAttempts: number;
    };
  }>;

  // Configuración global
  settings: {
    maxSubscribers: number;
    unsubscribeHandling: 'immediate' | 'end_of_sequence';
    duplicateHandling: 'skip' | 'restart' | 'continue';
    
    // A/B Testing
    abTesting?: {
      enabled: boolean;
      variants: Array<{
        name: string;
        percentage: number;
        changes: Record<string, any>;
      }>;
    };
  };

  // Configuración de tracking
  tracking: {
    trackOpens: boolean;
    trackClicks: boolean;
    trackUnsubscribes: boolean;
    analytics: {
      conversionGoals: Array<{
        id: string;
        name: string;
        type: string;
      }>;
      customEvents: Array<{
        id: string;
        name: string;
        trigger: string;
      }>;
    };
  };

  // Configuración de audiencia
  audience: {
    excludeUnsubscribed: boolean;
  };

  // Métricas de performance
  metrics: {
    subscribers: number;
    totalSent: number;
    openRate: number;
    clickRate: number;
    unsubscribeRate: number;
    conversionRate: number;
    revenue: number;
  };

  status: 'active' | 'paused' | 'draft';
  createdBy: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Lead scoring automático
export interface LeadScore {
  id: string;
  leadId: string;
  
  // Score calculado
  score: {
    total: number; // 0-100
    demographic: number;
    behavioral: number;
    engagement: number;
    firmographic: number;
  };

  // Clasificación
  grade: 'A' | 'B' | 'C' | 'D';
  temperature: 'hot' | 'warm' | 'cold';
  
  // Factores que contribuyen al score
  scoringFactors: Array<{
    category: 'demographic' | 'behavioral' | 'engagement' | 'firmographic';
    factor: string;
    value: any;
    points: number;
    weight: number;
  }>;

  // Próximas acciones recomendadas
  recommendedActions: Array<{
    action: 'call' | 'email' | 'demo' | 'nurture' | 'qualify';
    priority: number;
    reasoning: string;
    expectedSuccess: number; // %
  }>;

  // Datos del modelo
  model: {
    version: string;
    lastTraining: Timestamp;
    accuracy: number;
  };

  // Historial de cambios
  history: Array<{
    date: Timestamp;
    score: number;
    grade: string;
    trigger: string;
  }>;

  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Configuración general de automatización
export interface AutomationConfig {
  // Configuración global
  global: {
    enabled: boolean;
    businessHours: {
      start: string;
      end: string;
      timezone: string;
      weekends: boolean;
    };
    rateLimit: {
      emailsPerHour: number;
      alertsPerHour: number;
      workflowsPerMinute: number;
    };
  };

  // Configuración de AI/ML
  ai: {
    models: {
      churnPrediction: {
        enabled: boolean;
        updateFrequency: 'daily' | 'weekly' | 'monthly';
        minDataPoints: number;
        retentionPeriod: number; // días
      };
      anomalyDetection: {
        enabled: boolean;
        sensitivity: 'low' | 'medium' | 'high';
        learningPeriod: number;
      };
      leadScoring: {
        enabled: boolean;
        updateFrequency: 'realtime' | 'hourly' | 'daily';
        minInteractions: number;
      };
    };
  };

  // Integraciones externas
  integrations: {
    slack: {
      enabled: boolean;
      webhook: string;
      channels: Record<string, string>;
    };
    zapier: {
      enabled: boolean;
      apiKey?: string;
    };
    webhooks: Array<{
      name: string;
      url: string;
      events: string[];
      headers?: Record<string, string>;
    }>;
  };

  // Configuración de notificaciones
  notifications: {
    templates: Record<string, {
      subject: string;
      body: string;
      variables: string[];
    }>;
    defaultSender: string;
    unsubscribeHandling: boolean;
  };

  updatedAt: Timestamp;
  updatedBy: string;
}

// Sistema de Email Sequences Automatizadas  
export interface EmailSequenceAdvanced {
  id: string;
  name: string;
  description: string;
  
  // Configuración de la secuencia
  trigger: {
    type: 'signup' | 'purchase' | 'abandon_cart' | 'inactivity' | 'custom_event' | 'date_based' | 'tag_added';
    conditions: Record<string, any>;
    delay?: number; // minutos de delay inicial
  };

  // Lista de emails en la secuencia
  emails: Array<{
    id: string;
    name: string;
    subject: string;
    content: string;
    delay: number; // minutos desde el email anterior o trigger
    
    // Personalización
    personalization: {
      enabled: boolean;
      variables: string[]; // {{name}}, {{company}}, {{product}}
      dynamicContent?: Array<{
        condition: string;
        content: string;
      }>;
    };

    // A/B Testing
    abTest?: {
      enabled: boolean;
      variants: Array<{
        id: string;
        name: string;
        subject?: string;
        content?: string;
        percentage: number; // % de audiencia
      }>;
      metric: 'open_rate' | 'click_rate' | 'conversion_rate';
    };

    // Condiciones para envío
    conditions?: Array<{
      type: 'tag_has' | 'tag_not_has' | 'property_equals' | 'previous_email_opened' | 'previous_email_clicked';
      value: string;
    }>;

    // Configuración de envío
    sendSettings: {
      timezone: string;
      preferredTime?: string; // HH:mm format
      daysOfWeek?: number[]; // 0-6, Sunday=0
      throttle?: number; // emails per minute
    };
  }>;

  // Audiencia y segmentación
  audience: {
    segments: string[]; // IDs de segmentos
    filters: Array<{
      field: string;
      operator: 'equals' | 'not_equals' | 'contains' | 'greater_than' | 'less_than' | 'in' | 'not_in';
      value: any;
    }>;
    maxSubscribers?: number;
    excludeUnsubscribed: boolean;
  };

  // Configuración de tracking
  tracking: {
    openTracking: boolean;
    clickTracking: boolean;
    utmTracking: {
      enabled: boolean;
      source?: string;
      medium?: string;
      campaign?: string;
    };
    conversionTracking: {
      enabled: boolean;
      goals: Array<{
        name: string;
        event: string;
        value?: number;
      }>;
    };
  };

  // Estado y estadísticas
  status: 'draft' | 'active' | 'paused' | 'completed' | 'archived';
  stats: {
    subscribers: number;
    totalSent: number;
    totalDelivered: number;
    totalOpened: number;
    totalClicked: number;
    totalUnsubscribed: number;
    totalCompleted: number;
    averageOpenRate: number;
    averageClickRate: number;
    conversionRate: number;
    revenue: number;
  };

  // Configuración avanzada
  settings: {
    autoArchive: boolean; // Archivar al completarse
    reEntryAllowed: boolean; // Permitir re-entrada
    unsubscribeHandling: {
      removeFromSequence: boolean;
      removeFromAllSequences: boolean;
      addToSuppressionList: boolean;
    };
    failureHandling: {
      maxRetries: number;
      retryDelay: number; // minutos
      skipOnPermanentFailure: boolean;
    };
  };

  createdBy: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Interfaz avanzada para Email Sequences con funcionalidades extendidas
export interface EmailSequenceAdvanced {
  id: string;
  name: string;
  description: string;
  
  // Configuración de la secuencia
  trigger: {
    type: 'signup' | 'purchase' | 'abandon_cart' | 'inactivity' | 'custom_event' | 'date_based' | 'tag_added';
    conditions: Record<string, any>;
    delay?: number; // minutos de delay inicial
  };

  // Lista de emails en la secuencia
  emails: Array<{
    id: string;
    name: string;
    subject: string;
    content: string;
    delay: number; // minutos desde el email anterior o trigger
    
    // Personalización
    personalization: {
      enabled: boolean;
      variables: string[]; // {{name}}, {{company}}, {{product}}
      dynamicContent?: Array<{
        condition: string;
        content: string;
      }>;
    };

    // A/B Testing
    abTest?: {
      enabled: boolean;
      variants: Array<{
        id: string;
        name: string;
        subject?: string;
        content?: string;
        percentage: number; // % de audiencia
      }>;
      metric: 'open_rate' | 'click_rate' | 'conversion_rate';
    };

    // Condiciones para envío
    conditions?: Array<{
      type: 'tag_has' | 'tag_not_has' | 'property_equals' | 'previous_email_opened' | 'previous_email_clicked';
      value: string;
    }>;

    // Configuración de envío
    sendSettings: {
      timezone: string;
      preferredTime?: string; // HH:mm format
      daysOfWeek?: number[]; // 0-6, Sunday=0
      throttle?: number; // emails per minute
    };
  }>;

  // Audiencia y segmentación
  audience: {
    segments: string[]; // IDs de segmentos
    filters: Array<{
      field: string;
      operator: 'equals' | 'not_equals' | 'contains' | 'greater_than' | 'less_than' | 'in' | 'not_in';
      value: any;
    }>;
    maxSubscribers?: number;
    excludeUnsubscribed: boolean;
  };

  // Configuración de tracking
  tracking: {
    openTracking: boolean;
    clickTracking: boolean;
    utmTracking: {
      enabled: boolean;
      source?: string;
      medium?: string;
      campaign?: string;
    };
    conversionTracking: {
      enabled: boolean;
      goals: Array<{
        name: string;
        event: string;
        value?: number;
      }>;
    };
  };

  // Estado y estadísticas
  status: 'draft' | 'active' | 'paused' | 'completed' | 'archived';
  stats: {
    subscribers: number;
    totalSent: number;
    totalDelivered: number;
    totalOpened: number;
    totalClicked: number;
    totalUnsubscribed: number;
    totalCompleted: number;
    averageOpenRate: number;
    averageClickRate: number;
    conversionRate: number;
    revenue: number;
  };

  // Configuración avanzada
  settings: {
    autoArchive: boolean; // Archivar al completarse
    reEntryAllowed: boolean; // Permitir re-entrada
    unsubscribeHandling: {
      removeFromSequence: boolean;
      removeFromAllSequences: boolean;
      addToSuppressionList: boolean;
    };
    failureHandling: {
      maxRetries: number;
      retryDelay: number; // minutos
      skipOnPermanentFailure: boolean;
    };
  };

  createdBy: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Suscriptor en una secuencia
export interface EmailSequenceSubscriber {
  id: string;
  sequenceId: string;
  subscriberId: string; // ID del cliente/lead
  
  // Estado actual
  status: 'active' | 'paused' | 'completed' | 'unsubscribed' | 'bounced' | 'failed';
  currentEmailIndex: number;
  nextEmailAt?: Timestamp;
  
  // Personalización
  variables: Record<string, string>;
  segment: string;
  
  // Tracking de progreso
  progress: Array<{
    emailId: string;
    sentAt?: Timestamp;
    deliveredAt?: Timestamp;
    openedAt?: Timestamp;
    clickedAt?: Timestamp;
    status: 'pending' | 'sent' | 'delivered' | 'opened' | 'clicked' | 'bounced' | 'failed';
    variant?: string; // Para A/B testing
    opens: number;
    clicks: number;
    links: Array<{
      url: string;
      clickedAt: Timestamp;
      count: number;
    }>;
  }>;

  // Entrada en la secuencia
  enteredAt: Timestamp;
  entryTrigger: string;
  
  // Salida de la secuencia
  exitedAt?: Timestamp;
  exitReason?: 'completed' | 'unsubscribed' | 'bounced' | 'manual' | 'error';
  
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Template de email reutilizable
export interface EmailTemplate {
  id: string;
  name: string;
  description?: string;
  category: 'welcome' | 'promotional' | 'transactional' | 'educational' | 'retention' | 'other';
  
  // Contenido del template
  subject: string;
  content: string;
  preheader?: string;
  
  // Variables disponibles
  variables: Array<{
    name: string;
    type: 'text' | 'number' | 'date' | 'boolean' | 'url';
    required: boolean;
    defaultValue?: string;
    description?: string;
  }>;

  // Diseño
  design: {
    layout: 'single_column' | 'two_column' | 'sidebar' | 'custom';
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
    fonts: {
      heading: string;
      body: string;
    };
    images: Array<{
      id: string;
      url: string;
      alt: string;
    }>;
  };

  // Configuración
  settings: {
    responsive: boolean;
    darkModeSupport: boolean;
    preheaderSupport: boolean;
    trackingPixel: boolean;
  };

  // Estadísticas de uso
  usage: {
    timesUsed: number;
    averageOpenRate: number;
    averageClickRate: number;
    lastUsedAt?: Timestamp;
  };

  // Versión y revisión
  version: string;
  isDefault: boolean;
  tags: string[];
  
  createdBy: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Eventos de email para analytics
export interface EmailEvent {
  id: string;
  sequenceId: string;
  subscriberId: string;
  emailId: string;
  
  // Tipo de evento
  type: 'sent' | 'delivered' | 'opened' | 'clicked' | 'bounced' | 'complained' | 'unsubscribed';
  
  // Datos del evento
  data: {
    timestamp: Timestamp;
    userAgent?: string;
    ip?: string;
    location?: {
      country: string;
      city: string;
      region: string;
    };
    device?: {
      type: 'desktop' | 'mobile' | 'tablet';
      os: string;
      browser: string;
    };
    link?: string; // Para clicks
    bounceReason?: string; // Para bounces
    complaintFeedback?: string; // Para complaints
  };

  // Contexto adicional
  context: {
    variant?: string; // Para A/B testing
    campaignId?: string;
    utm: {
      source?: string;
      medium?: string;
      campaign?: string;
      content?: string;
      term?: string;
    };
  };

  processed: boolean;
  createdAt: Timestamp;
}

// Configuración de A/B Testing
export interface ABTestResult {
  id: string;
  sequenceId: string;
  emailId: string;
  
  // Configuración del test
  testConfig: {
    name: string;
    metric: 'open_rate' | 'click_rate' | 'conversion_rate';
    confidenceLevel: number; // 0.95 para 95%
    minSampleSize: number;
    maxDuration: number; // días
  };

  // Variantes
  variants: Array<{
    id: string;
    name: string;
    traffic: number; // porcentaje de tráfico
    
    // Métricas
    sent: number;
    delivered: number;
    opened: number;
    clicked: number;
    converted: number;
    
    // Rates calculadas
    deliveryRate: number;
    openRate: number;
    clickRate: number;
    conversionRate: number;
  }>;

  // Resultados del test
  results: {
    status: 'running' | 'completed' | 'stopped' | 'inconclusive';
    winner?: string; // ID de la variante ganadora
    confidence: number;
    significance: number;
    liftPercentage?: number;
    
    // Recomendación
    recommendation: {
      action: 'continue_test' | 'declare_winner' | 'stop_test' | 'extend_test';
      reason: string;
      suggestedWinner?: string;
    };
  };

  startedAt: Timestamp;
  endedAt?: Timestamp;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Lead Scoring System Types
export interface Lead {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  phone?: string;
  source: string;
  score: number;
  grade: 'A' | 'B' | 'C' | 'D';
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  assignedTo?: string;
  tags: string[];
  activities: LeadActivity[];
  properties: LeadProperties;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  lastActivityAt?: Timestamp;
}

export interface LeadActivity {
  id: string;
  leadId: string;
  type: 'page_visit' | 'form_submit' | 'email_open' | 'email_click' | 'download' | 'call' | 'meeting' | 'demo' | 'purchase';
  description: string;
  points: number;
  timestamp: Timestamp;
  metadata?: Record<string, any>;
}

export interface LeadProperties {
  industry?: string;
  employees?: string;
  revenue?: string;
  budget?: string;
  decisionMaker?: boolean;
  timeline?: string;
  interests: string[];
  painPoints: string[];
}

export interface ScoringRule {
  id: string;
  name: string;
  type: 'demographic' | 'behavioral' | 'engagement' | 'firmographic';
  condition: ScoringCondition;
  points: number;
  isActive: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface ScoringCondition {
  field: string;
  operator: 'equals' | 'contains' | 'greater_than' | 'less_than' | 'in_range' | 'exists';
  value: any;
  weight?: number;
}

export interface LeadScoringConfig {
  id: string;
  name: string;
  rules: ScoringRule[];
  thresholds: {
    gradeA: number;
    gradeB: number;
    gradeC: number;
  };
  decaySettings: {
    enabled: boolean;
    decayRate: number; // percentage per day
    maxAge: number; // days
  };
  isActive: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface LeadScoringInsight {
  id: string;
  type: 'trend' | 'opportunity' | 'risk' | 'anomaly';
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
  affectedLeads: number;
  recommendedAction?: string;
  createdAt: Timestamp;
}

export interface LeadScoringAnalytics {
  totalLeads: number;
  averageScore: number;
  distributionByGrade: Record<string, number>;
  conversionRateByGrade: Record<string, number>;
  topSources: Array<{ source: string; count: number; avgScore: number }>;
  scoreTrend: Array<{ date: string; avgScore: number }>;
  insights: LeadScoringInsight[];
}