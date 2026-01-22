'use client';

import { useState, useEffect } from 'react';
import { 
  collection, 
  query, 
  where, 
  orderBy, 
  limit, 
  getDocs, 
  doc, 
  setDoc, 
  updateDoc,
  deleteDoc,
  getDoc,
  addDoc,
  writeBatch,
  Timestamp,
  onSnapshot
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { 
  SmartAlert, 
  AlertExecution,
  AutomatedWorkflow, 
  WorkflowExecution,
  ChurnPrediction,
  AutoResponse,
  EmailSequence,
  EmailSequenceSubscriber,
  EmailTemplate,
  EmailEvent,
  ABTestResult,
  LeadScore,
  Lead,
  LeadActivity,
  LeadProperties,
  ScoringRule,
  ScoringCondition,
  LeadScoringConfig,
  LeadScoringInsight,
  LeadScoringAnalytics,
  AutomationConfig
} from '@/types/automation';
import { MetricType } from '@/types/analytics';

export const useAutomation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // =====================================
  // SISTEMA DE ALERTAS INTELIGENTES
  // =====================================

  const createSmartAlert = async (alertData: Omit<SmartAlert, 'id' | 'createdAt' | 'updatedAt' | 'triggerCount' | 'status'>): Promise<string> => {
    const alertId = `alert_${Date.now()}`;
    const alert: SmartAlert = {
      ...alertData,
      id: alertId,
      status: 'active',
      triggerCount: 0,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    };

    await setDoc(doc(db, 'smart_alerts', alertId), alert);
    return alertId;
  };

  const updateSmartAlert = async (alertId: string, updates: Partial<SmartAlert>) => {
    await updateDoc(doc(db, 'smart_alerts', alertId), {
      ...updates,
      updatedAt: Timestamp.now()
    });
  };

  const deleteSmartAlert = async (alertId: string) => {
    await deleteDoc(doc(db, 'smart_alerts', alertId));
  };

  const getActiveAlerts = async (): Promise<SmartAlert[]> => {
    const alertsQuery = query(
      collection(db, 'smart_alerts'),
      where('status', '==', 'active'),
      orderBy('createdAt', 'desc')
    );

    const alerts = await getDocs(alertsQuery);
    return alerts.docs.map(doc => ({ id: doc.id, ...doc.data() } as SmartAlert));
  };

  // Función para evaluar alertas (normalmente ejecutada por Cloud Functions)
  const evaluateAlerts = async (metric: MetricType, currentValue: number, previousValue?: number) => {
    const alerts = await getActiveAlerts();
    const triggeredAlerts: AlertExecution[] = [];

    for (const alert of alerts) {
      if (alert.trigger.metric !== metric) continue;

      let shouldTrigger = false;
      let anomalyScore = 0;

      // Evaluar condición
      switch (alert.trigger.condition) {
        case 'above':
          shouldTrigger = alert.trigger.value ? currentValue > alert.trigger.value : false;
          break;
        case 'below':
          shouldTrigger = alert.trigger.value ? currentValue < alert.trigger.value : false;
          break;
        case 'change_above':
          if (previousValue && alert.trigger.percentage) {
            const change = ((currentValue - previousValue) / previousValue) * 100;
            shouldTrigger = change > alert.trigger.percentage;
          }
          break;
        case 'change_below':
          if (previousValue && alert.trigger.percentage) {
            const change = ((currentValue - previousValue) / previousValue) * 100;
            shouldTrigger = change < -alert.trigger.percentage;
          }
          break;
      }

      // Detección de anomalías con ML (simplificado)
      if (alert.ml.enabled && previousValue) {
        const expectedChange = 0; // Aquí iría el modelo ML
        const actualChange = currentValue - previousValue;
        anomalyScore = Math.abs(actualChange - expectedChange) / (previousValue || 1);
        
        if (anomalyScore > (alert.ml.sensitivity === 'high' ? 0.1 : alert.ml.sensitivity === 'medium' ? 0.2 : 0.3)) {
          shouldTrigger = true;
        }
      }

      if (shouldTrigger) {
        const execution = await triggerAlert(alert, currentValue, previousValue, anomalyScore);
        triggeredAlerts.push(execution);
      }
    }

    return triggeredAlerts;
  };

  const triggerAlert = async (
    alert: SmartAlert, 
    currentValue: number, 
    previousValue?: number, 
    anomalyScore?: number
  ): Promise<AlertExecution> => {
    const executionId = `exec_${Date.now()}`;
    
    const execution: AlertExecution = {
      id: executionId,
      alertId: alert.id,
      triggeredAt: Timestamp.now(),
      triggerData: {
        metric: alert.trigger.metric,
        currentValue,
        previousValue,
        threshold: alert.trigger.value,
        anomalyScore
      },
      actions: [],
      metadata: {}
    };

    // Ejecutar notificaciones
    for (const notification of alert.notifications.channels) {
      try {
        const actionResult = await executeNotification(notification, alert, execution);
        execution.actions.push(actionResult);
      } catch (error) {
        execution.actions.push({
          type: 'notification',
          channel: notification.type,
          status: 'failed',
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }

    // Guardar ejecución
    await setDoc(doc(db, 'alert_executions', executionId), execution);

    // Actualizar contador de la alerta
    await updateDoc(doc(db, 'smart_alerts', alert.id), {
      triggerCount: alert.triggerCount + 1,
      lastTriggered: Timestamp.now()
    });

    return execution;
  };

  const executeNotification = async (
    notification: SmartAlert['notifications']['channels'][0],
    alert: SmartAlert,
    execution: AlertExecution
  ) => {
    const startTime = Date.now();

    switch (notification.type) {
      case 'email':
        // Integración con servicio de email
        await sendEmailNotification(notification.destination, alert, execution);
        break;
      case 'slack':
        // Integración con Slack
        await sendSlackNotification(notification.destination, alert, execution);
        break;
      case 'webhook':
        // Llamada a webhook
        await callWebhook(notification.destination, alert, execution);
        break;
      case 'in_app':
        // Notificación in-app
        await createInAppNotification(notification.destination, alert, execution);
        break;
    }

    return {
      type: 'notification' as const,
      channel: notification.type,
      status: 'sent' as const,
      responseTime: Date.now() - startTime
    };
  };

  // =====================================
  // WORKFLOWS AUTOMATIZADOS
  // =====================================

  const createWorkflow = async (workflowData: Omit<AutomatedWorkflow, 'id' | 'createdAt' | 'updatedAt' | 'executionCount' | 'successRate' | 'avgExecutionTime'>): Promise<string> => {
    const workflowId = `workflow_${Date.now()}`;
    const workflow: AutomatedWorkflow = {
      ...workflowData,
      id: workflowId,
      executionCount: 0,
      successRate: 0,
      avgExecutionTime: 0,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    };

    await setDoc(doc(db, 'workflows', workflowId), workflow);
    return workflowId;
  };

  const executeWorkflow = async (workflowId: string, context: any): Promise<WorkflowExecution> => {
    const workflowDoc = doc(db, 'workflows', workflowId);
    const workflowSnapshot = await getDoc(workflowDoc);
    const workflowData = workflowSnapshot.data() as AutomatedWorkflow;

    const executionId = `exec_${Date.now()}`;
    const execution: WorkflowExecution = {
      id: executionId,
      workflowId,
      triggeredBy: context.userId || 'system',
      startedAt: Timestamp.now(),
      status: 'running',
      steps: [],
      context,
      metrics: {
        executionTime: 0,
        stepsExecuted: 0,
        stepsSkipped: 0,
        stepsFailed: 0
      },
      logs: []
    };

    await setDoc(doc(db, 'workflow_executions', executionId), execution);

    // Ejecutar pasos del workflow
    try {
      for (const step of workflowData.steps) {
        await executeWorkflowStep(execution, step, workflowData);
      }

      execution.status = 'completed';
      execution.completedAt = Timestamp.now();
      execution.metrics.executionTime = execution.completedAt.seconds - execution.startedAt.seconds;
    } catch (error) {
      execution.status = 'failed';
      execution.logs.push({
        timestamp: Timestamp.now(),
        level: 'error',
        message: `Workflow execution failed: ${error instanceof Error ? error.message : 'Unknown error'}`
      });
    }

    await setDoc(doc(db, 'workflow_executions', executionId), execution);
    return execution;
  };

  const executeWorkflowStep = async (
    execution: WorkflowExecution, 
    step: AutomatedWorkflow['steps'][0],
    workflow: AutomatedWorkflow
  ) => {
    const stepExecution: {
      stepId: string;
      startedAt: Timestamp;
      status: 'pending' | 'running' | 'completed' | 'failed' | 'skipped';
      retries: number;
      completedAt?: Timestamp;
      error?: string;
    } = {
      stepId: step.id,
      startedAt: Timestamp.now(),
      status: 'running',
      retries: 0
    };

    execution.steps.push(stepExecution);

    try {
      switch (step.type) {
        case 'email':
          await executeEmailStep(step, execution.context);
          break;
        case 'delay':
          await executeDelayStep(step);
          break;
        case 'webhook':
          await executeWebhookStep(step, execution.context);
          break;
        case 'ai_decision':
          await executeAIDecisionStep(step, execution.context);
          break;
        // Más tipos de pasos...
      }

      stepExecution.status = 'completed';
      stepExecution.completedAt = Timestamp.now();
      execution.metrics.stepsExecuted++;
    } catch (error) {
      stepExecution.status = 'failed';
      stepExecution.error = error instanceof Error ? error.message : 'Unknown error';
      execution.metrics.stepsFailed++;

      if (step.onError === 'stop') {
        throw error;
      }
    }
  };

  const deleteWorkflow = async (workflowId: string): Promise<void> => {
    try {
      await deleteDoc(doc(db, 'workflows', workflowId));
    } catch (error) {
      throw error;
    }
  };

  const getActiveWorkflows = async (): Promise<AutomatedWorkflow[]> => {
    try {
      const q = query(
        collection(db, 'workflows'),
        where('active', '==', true),
        orderBy('createdAt', 'desc')
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as AutomatedWorkflow));
    } catch (error) {
      throw error;
    }
  };

  // =====================================
  // PREDICCIÓN DE CHURN CON IA
  // =====================================

  const generateChurnPrediction = async (clientId: string): Promise<ChurnPrediction> => {
    setLoading(true);
    
    try {
      // En un entorno real, esto llamaría a un modelo ML
      // Por ahora simulamos la predicción
      
      // Obtener datos del cliente
      const clientDoc = doc(db, 'clients', clientId);
      const clientSnapshot = await getDoc(clientDoc);
      const clientData = clientSnapshot.data();
      
      // Simular análisis ML
      const riskFactors = await analyzeClientRiskFactors(clientId, clientData);
      const churnProbability = calculateChurnProbability(riskFactors);
      
      const prediction: ChurnPrediction = {
        id: `churn_${clientId}_${Date.now()}`,
        clientId,
        prediction: {
          churnProbability,
          confidenceScore: 0.85,
          riskLevel: churnProbability > 0.7 ? 'critical' : churnProbability > 0.5 ? 'high' : churnProbability > 0.3 ? 'medium' : 'low',
          timeframe: '30d'
        },
        riskFactors,
        recommendations: generateRetentionRecommendations(riskFactors, churnProbability),
        model: {
          version: '2.1.0',
          features: ['usage_frequency', 'support_tickets', 'payment_history', 'engagement_score'],
          accuracy: 0.87,
          precision: 0.82,
          recall: 0.91
        },
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      };

      await setDoc(doc(db, 'churn_predictions', prediction.id), prediction);
      return prediction;
    } finally {
      setLoading(false);
    }
  };

  const analyzeClientRiskFactors = async (clientId: string, clientData: any) => {
    // Simular análisis de factores de riesgo
    const factors = [
      {
        factor: 'low_usage',
        impact: -0.3,
        description: 'Uso por debajo del promedio en los últimos 30 días',
        category: 'usage' as const
      },
      {
        factor: 'support_tickets',
        impact: -0.2,
        description: 'Múltiples tickets de soporte sin resolver',
        category: 'support' as const
      },
      {
        factor: 'payment_delays',
        impact: -0.4,
        description: 'Historial de pagos tardíos',
        category: 'billing' as const
      }
    ];

    return factors;
  };

  const calculateChurnProbability = (riskFactors: any[]) => {
    const totalImpact = riskFactors.reduce((sum, factor) => sum + Math.abs(factor.impact), 0);
    return Math.min(0.95, totalImpact);
  };

  const generateRetentionRecommendations = (riskFactors: any[], churnProbability: number) => {
    const recommendations = [];

    if (churnProbability > 0.7) {
      recommendations.push({
        action: 'immediate_outreach',
        priority: 'high' as const,
        description: 'Contacto inmediato del account manager',
        expectedImpact: 25,
        effort: 'high' as const,
        category: 'retention_campaign' as const
      });
    }

    if (churnProbability > 0.5) {
      recommendations.push({
        action: 'discount_offer',
        priority: 'medium' as const,
        description: 'Ofrecer descuento en renovación',
        expectedImpact: 15,
        effort: 'low' as const,
        category: 'pricing_adjustment' as const
      });
    }

    return recommendations;
  };

  const getChurnPredictions = async (): Promise<ChurnPrediction[]> => {
    try {
      const q = query(
        collection(db, 'churn_predictions'),
        orderBy('createdAt', 'desc'),
        limit(50)
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as ChurnPrediction));
    } catch (error) {
      throw error;
    }
  };

  const executeRetentionAction = async (clientId: string, action: string): Promise<void> => {
    try {
      // TODO: Implement retention action execution logic
      console.log(`Executing retention action "${action}" for client ${clientId}`);
    } catch (error) {
      throw error;
    }
  };

  // =====================================
  // AUTO RESPONSES
  // =====================================

  const createAutoResponse = async (responseData: any): Promise<string> => {
    try {
      const responseId = `autoresponse_${Date.now()}`;
      const response = {
        ...responseData,
        id: responseId,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      };
      await setDoc(doc(db, 'auto_responses', responseId), response);
      return responseId;
    } catch (error) {
      throw error;
    }
  };

  const updateAutoResponse = async (responseId: string, updates: any): Promise<void> => {
    try {
      await updateDoc(doc(db, 'auto_responses', responseId), {
        ...updates,
        updatedAt: Timestamp.now()
      });
    } catch (error) {
      throw error;
    }
  };

  const deleteAutoResponse = async (responseId: string): Promise<void> => {
    try {
      await deleteDoc(doc(db, 'auto_responses', responseId));
    } catch (error) {
      throw error;
    }
  };

  const getActiveAutoResponses = async (): Promise<any[]> => {
    try {
      const q = query(
        collection(db, 'auto_responses'),
        where('active', '==', true),
        orderBy('createdAt', 'desc')
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      throw error;
    }
  };

  // =====================================
  // EMAIL SEQUENCES AUTOMATIZADAS
  // =====================================

  const createEmailSequence = async (sequenceData: Omit<EmailSequence, 'id' | 'createdAt' | 'updatedAt' | 'metrics'>): Promise<string> => {
    const sequenceId = `sequence_${Date.now()}`;
    const sequence: EmailSequence = {
      ...sequenceData,
      id: sequenceId,
      metrics: {
        subscribers: 0,
        totalSent: 0,
        openRate: 0,
        clickRate: 0,
        unsubscribeRate: 0,
        conversionRate: 0,
        revenue: 0
      },
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    };

    await setDoc(doc(db, 'email_sequences', sequenceId), sequence);
    return sequenceId;
  };

  const enrollClientInSequence = async (sequenceId: string, clientId: string, context?: any) => {
    const enrollmentId = `enrollment_${sequenceId}_${clientId}_${Date.now()}`;
    
    // Get the sequence data
    const sequenceDoc = doc(db, 'email_sequences', sequenceId);
    const sequenceSnapshot = await getDoc(sequenceDoc);
    const sequence = sequenceSnapshot.data() as EmailSequence;
    
    // Create subscriber object
    const subscriber: EmailSequenceSubscriber = {
      id: enrollmentId,
      sequenceId,
      subscriberId: clientId,
      status: 'active',
      currentEmailIndex: 0,
      nextEmailAt: Timestamp.now(),
      variables: context || {},
      segment: 'default',
      progress: [],
      enteredAt: Timestamp.now(),
      entryTrigger: 'manual',
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    };
    
    await setDoc(doc(db, 'sequence_enrollments', enrollmentId), subscriber);

    // Programar primer email
    await scheduleNextEmail(subscriber, sequence, 0);
  };

  // =====================================
  // UTILIDADES AUXILIARES
  // =====================================

  const sendEmailNotification = async (destination: string, alert: SmartAlert, execution: AlertExecution) => {
    // Integración con servicio de email (SendGrid, etc.)
    console.log(`Sending email to ${destination}:`, {
      subject: `Alert: ${alert.name}`,
      body: `Alert ${alert.name} has been triggered with value ${execution.triggerData.currentValue}`
    });
  };

  const sendSlackNotification = async (webhook: string, alert: SmartAlert, execution: AlertExecution) => {
    // Integración con Slack
    const message = {
      text: `🚨 Alert: ${alert.name}`,
      attachments: [
        {
          color: 'danger',
          fields: [
            { title: 'Metric', value: alert.trigger.metric, short: true },
            { title: 'Value', value: execution.triggerData.currentValue.toString(), short: true }
          ]
        }
      ]
    };
    
    // await fetch(webhook, { method: 'POST', body: JSON.stringify(message) });
    console.log('Slack notification:', message);
  };

  const callWebhook = async (url: string, alert: SmartAlert, execution: AlertExecution) => {
    const payload = {
      alert: alert.name,
      metric: alert.trigger.metric,
      value: execution.triggerData.currentValue,
      timestamp: execution.triggeredAt
    };
    
    // await fetch(url, { method: 'POST', body: JSON.stringify(payload) });
    console.log('Webhook call:', payload);
  };

  const createInAppNotification = async (userId: string, alert: SmartAlert, execution: AlertExecution) => {
    await setDoc(doc(db, 'notifications', `${userId}_${Date.now()}`), {
      userId,
      type: 'alert',
      title: `Alert: ${alert.name}`,
      message: `${alert.trigger.metric} reached ${execution.triggerData.currentValue}`,
      read: false,
      createdAt: Timestamp.now()
    });
  };

  const executeEmailStep = async (step: any, context: any) => {
    console.log('Executing email step:', step.name);
    // Implementar envío de email
  };

  const executeDelayStep = async (step: any) => {
    const delay = step.config.duration || 0;
    const unit = step.config.unit || 'minutes';
    const milliseconds = unit === 'minutes' ? delay * 60 * 1000 : 
                       unit === 'hours' ? delay * 60 * 60 * 1000 : 
                       delay * 24 * 60 * 60 * 1000;
    
    // En producción, esto se manejaría con Cloud Functions y scheduling
    await new Promise(resolve => setTimeout(resolve, Math.min(milliseconds, 5000))); // Max 5s para demo
  };

  const executeWebhookStep = async (step: any, context: any) => {
    console.log('Executing webhook step:', step.config.url);
    // Implementar llamada a webhook
  };

  const executeAIDecisionStep = async (step: any, context: any) => {
    console.log('Executing AI decision step:', step.name);
    // Implementar decisión basada en IA
    return { decision: 'continue', confidence: 0.85 };
  };

  // =====================================
  // SISTEMA DE EMAIL SEQUENCES
  // =====================================

  const updateEmailSequence = async (sequenceId: string, updates: Partial<EmailSequence>): Promise<void> => {
    const sequenceRef = doc(db, 'emailSequences', sequenceId);
    await updateDoc(sequenceRef, {
      ...updates,
      updatedAt: Timestamp.now()
    });
    console.log('Email sequence updated:', sequenceId);
  };

  const deleteEmailSequence = async (sequenceId: string): Promise<void> => {
    await deleteDoc(doc(db, 'emailSequences', sequenceId));
    console.log('Email sequence deleted:', sequenceId);
  };

  const getEmailSequences = async (): Promise<EmailSequence[]> => {
    const sequencesRef = collection(db, 'emailSequences');
    const q = query(sequencesRef, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as EmailSequence));
  };

  const getActiveEmailSequences = async (): Promise<EmailSequence[]> => {
    const sequencesRef = collection(db, 'emailSequences');
    const q = query(
      sequencesRef, 
      where('status', '==', 'active'),
      orderBy('createdAt', 'desc')
    );
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as EmailSequence));
  };

  const unenrollClientFromSequence = async (subscriptionId: string, reason: string = 'manual'): Promise<void> => {
    const subscriptionRef = doc(db, 'emailSequenceSubscribers', subscriptionId);
    await updateDoc(subscriptionRef, {
      status: 'unsubscribed',
      exitedAt: Timestamp.now(),
      exitReason: reason,
      updatedAt: Timestamp.now()
    });
    console.log('Client unenrolled from sequence:', subscriptionId);
  };

  const getSequenceById = async (sequenceId: string): Promise<EmailSequence | null> => {
    const sequenceRef = doc(db, 'emailSequences', sequenceId);
    const snapshot = await getDocs(query(collection(db, 'emailSequences'), where('id', '==', sequenceId)));
    
    if (snapshot.empty) return null;
    
    return {
      id: snapshot.docs[0].id,
      ...snapshot.docs[0].data()
    } as EmailSequence;
  };

  const getSequenceSubscribers = async (sequenceId: string): Promise<EmailSequenceSubscriber[]> => {
    const subscribersRef = collection(db, 'emailSequenceSubscribers');
    const q = query(
      subscribersRef,
      where('sequenceId', '==', sequenceId),
      orderBy('enteredAt', 'desc')
    );
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as EmailSequenceSubscriber));
  };

  const sendScheduledEmails = async (): Promise<void> => {
    // Esta función sería ejecutada por un cron job o Cloud Function
    const now = Timestamp.now();
    const subscribersRef = collection(db, 'emailSequenceSubscribers');
    const q = query(
      subscribersRef,
      where('status', '==', 'active'),
      where('nextEmailAt', '<=', now)
    );
    
    const snapshot = await getDocs(q);
    
    for (const doc of snapshot.docs) {
      const subscriber = doc.data() as EmailSequenceSubscriber;
      await processNextEmailForSubscriber(subscriber);
    }
  };

  const processNextEmailForSubscriber = async (subscriber: EmailSequenceSubscriber): Promise<void> => {
    try {
      const sequence = await getSequenceById(subscriber.sequenceId);
      if (!sequence || subscriber.currentEmailIndex >= sequence.emails.length) {
        // Completar secuencia
        await updateDoc(doc(db, 'emailSequenceSubscribers', subscriber.id), {
          status: 'completed',
          exitedAt: Timestamp.now(),
          exitReason: 'completed',
          updatedAt: Timestamp.now()
        });
        return;
      }

      const email = sequence.emails[subscriber.currentEmailIndex];
      
      // Enviar email (sin verificar condiciones ya que no están en el tipo)
      const emailSent = await sendEmail(email, subscriber, sequence);
      
      if (emailSent) {
        // Actualizar progreso
        const newProgress = [...subscriber.progress];
        newProgress[subscriber.currentEmailIndex] = {
          emailId: email.id,
          sentAt: Timestamp.now(),
          status: 'sent',
          opens: 0,
          clicks: 0,
          links: []
        };

        // Programar siguiente email
        await scheduleNextEmail(subscriber, sequence, subscriber.currentEmailIndex + 1);
        
        await updateDoc(doc(db, 'emailSequenceSubscribers', subscriber.id), {
          progress: newProgress,
          currentEmailIndex: subscriber.currentEmailIndex + 1,
          updatedAt: Timestamp.now()
        });
      }
    } catch (error) {
      console.error('Error processing email for subscriber:', error);
      // Manejar error - pausar suscriptor o reintentar
    }
  };

  const evaluateEmailConditions = (conditions: any[], subscriber: EmailSequenceSubscriber): boolean => {
    // Evaluar condiciones lógicas para determinar si enviar el email
    return conditions.every(condition => {
      switch (condition.type) {
        case 'tag_has':
          return subscriber.variables.tags?.includes(condition.value);
        case 'tag_not_has':
          return !subscriber.variables.tags?.includes(condition.value);
        case 'property_equals':
          return subscriber.variables[condition.field] === condition.value;
        case 'previous_email_opened':
          const prevEmail = subscriber.progress[subscriber.currentEmailIndex - 1];
          return prevEmail?.openedAt !== undefined;
        case 'previous_email_clicked':
          const prevClickEmail = subscriber.progress[subscriber.currentEmailIndex - 1];
          return prevClickEmail?.clickedAt !== undefined;
        default:
          return true;
      }
    });
  };

  const scheduleNextEmail = async (
    subscriber: EmailSequenceSubscriber, 
    sequence: EmailSequence, 
    nextIndex: number
  ): Promise<void> => {
    if (nextIndex >= sequence.emails.length) {
      // Secuencia completada
      return;
    }

    const nextEmail = sequence.emails[nextIndex];
    const sendAt = new Date(Date.now() + (nextEmail.delay * 60 * 1000));
    
    // Ajustar por horario preferido y zona horaria
    const adjustedSendTime = adjustSendTimeForPreferences(sendAt, nextEmail.settings);
    
    await updateDoc(doc(db, 'emailSequenceSubscribers', subscriber.id), {
      nextEmailAt: Timestamp.fromDate(adjustedSendTime),
      updatedAt: Timestamp.now()
    });
  };

  const adjustSendTimeForPreferences = (sendTime: Date, settings: any): Date => {
    // Ajustar por zona horaria, horario preferido, días de semana, etc.
    let adjustedTime = new Date(sendTime);
    
    if (settings.preferredTime) {
      const [hours, minutes] = settings.preferredTime.split(':');
      adjustedTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    }
    
    if (settings.daysOfWeek && !settings.daysOfWeek.includes(adjustedTime.getDay())) {
      // Mover al próximo día válido
      while (!settings.daysOfWeek.includes(adjustedTime.getDay())) {
        adjustedTime.setDate(adjustedTime.getDate() + 1);
      }
    }
    
    return adjustedTime;
  };

  const sendEmail = async (
    email: any, 
    subscriber: EmailSequenceSubscriber, 
    sequence: EmailSequence
  ): Promise<boolean> => {
    try {
      // Personalizar contenido
      const personalizedContent = personalizeEmailContent(
        email.content, 
        subscriber.variables
      );
      const personalizedSubject = personalizeEmailContent(
        email.subject, 
        subscriber.variables
      );

      // Aplicar A/B testing si está habilitado
      let finalContent = personalizedContent;
      let finalSubject = personalizedSubject;
      let variant = 'original';

      if (email.abTest?.enabled) {
        const selectedVariant = selectABTestVariant(email.abTest);
        if (selectedVariant.subject) finalSubject = selectedVariant.subject;
        if (selectedVariant.content) finalContent = selectedVariant.content;
        variant = selectedVariant.id;
      }

      // Simular envío de email (en producción usar SendGrid, Mailgun, etc.)
      console.log('Sending email:', {
        to: subscriber.subscriberId,
        subject: finalSubject,
        content: finalContent.substring(0, 100) + '...',
        variant
      });

      // Registrar evento de envío
      await recordEmailEvent({
        sequenceId: sequence.id,
        subscriberId: subscriber.subscriberId,
        emailId: email.id,
        type: 'sent',
        variant
      });

      return true;
    } catch (error) {
      console.error('Failed to send email:', error);
      return false;
    }
  };

  const personalizeEmailContent = (content: string, variables: Record<string, string>): string => {
    let personalizedContent = content;
    
    Object.entries(variables).forEach(([key, value]) => {
      const regex = new RegExp(`{{${key}}}`, 'g');
      personalizedContent = personalizedContent.replace(regex, value || '');
    });
    
    return personalizedContent;
  };

  const selectABTestVariant = (abTest: any): any => {
    const random = Math.random() * 100;
    let cumulative = 0;
    
    for (const variant of abTest.variants) {
      cumulative += variant.percentage;
      if (random <= cumulative) {
        return variant;
      }
    }
    
    return abTest.variants[0]; // Fallback
  };

  const recordEmailEvent = async (eventData: {
    sequenceId: string;
    subscriberId: string;
    emailId: string;
    type: string;
    variant?: string;
  }): Promise<void> => {
    const eventId = `event_${Date.now()}_${Math.random()}`;
    const event: EmailEvent = {
      id: eventId,
      sequenceId: eventData.sequenceId,
      subscriberId: eventData.subscriberId,
      emailId: eventData.emailId,
      type: eventData.type as any,
      data: {
        timestamp: Timestamp.now()
      },
      context: {
        variant: eventData.variant,
        utm: {}
      },
      processed: false,
      createdAt: Timestamp.now()
    };

    await setDoc(doc(db, 'emailEvents', eventId), event);
  };

  // Funciones para templates
  const createEmailTemplate = async (templateData: Omit<EmailTemplate, 'id' | 'createdAt' | 'updatedAt' | 'usage'>): Promise<string> => {
    const templateId = `template_${Date.now()}`;
    const template: EmailTemplate = {
      ...templateData,
      id: templateId,
      usage: {
        timesUsed: 0,
        averageOpenRate: 0,
        averageClickRate: 0
      },
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    };

    await setDoc(doc(db, 'emailTemplates', templateId), template);
    return templateId;
  };

  const getEmailTemplates = async (): Promise<EmailTemplate[]> => {
    const templatesRef = collection(db, 'emailTemplates');
    const q = query(templatesRef, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as EmailTemplate));
  };

  // =====================================
  // LEAD SCORING SYSTEM
  // =====================================

  const createLead = async (leadData: any): Promise<string> => {
    try {
      const leadId = `lead_${Date.now()}`;
      const lead = {
        ...leadData,
        id: leadId,
        score: 0,
        activities: [],
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      };
      await setDoc(doc(db, 'leads', leadId), lead);
      return leadId;
    } catch (error) {
      throw error;
    }
  };

  const updateLead = async (leadId: string, updates: any): Promise<void> => {
    try {
      await updateDoc(doc(db, 'leads', leadId), {
        ...updates,
        updatedAt: Timestamp.now()
      });
    } catch (error) {
      throw error;
    }
  };

  const calculateLeadScore = async (leadId: string): Promise<number> => {
    try {
      // TODO: Implement lead scoring calculation
      return 0;
    } catch (error) {
      throw error;
    }
  };

  const getLeads = async (): Promise<any[]> => {
    try {
      const q = query(
        collection(db, 'leads'),
        orderBy('updatedAt', 'desc'),
        limit(100)
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      throw error;
    }
  };

  const getLeadById = async (leadId: string): Promise<any> => {
    try {
      const leadDoc = await getDoc(doc(db, 'leads', leadId));
      return leadDoc.exists() ? { id: leadDoc.id, ...leadDoc.data() } : null;
    } catch (error) {
      throw error;
    }
  };

  const addLeadActivity = async (leadId: string, activity: any): Promise<void> => {
    try {
      const leadDoc = doc(db, 'leads', leadId);
      const leadSnapshot = await getDoc(leadDoc);
      const leadData = leadSnapshot.data();
      
      if (leadData) {
        const activities = [...(leadData.activities || []), {
          ...activity,
          timestamp: Timestamp.now()
        }];
        
        await updateDoc(leadDoc, {
          activities,
          updatedAt: Timestamp.now()
        });
      }
    } catch (error) {
      throw error;
    }
  };

  const createScoringRule = async (ruleData: any): Promise<string> => {
    try {
      const ruleId = `rule_${Date.now()}`;
      const rule = {
        ...ruleData,
        id: ruleId,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      };
      await setDoc(doc(db, 'scoring_rules', ruleId), rule);
      return ruleId;
    } catch (error) {
      throw error;
    }
  };

  const getScoringRules = async (): Promise<any[]> => {
    try {
      const q = query(
        collection(db, 'scoring_rules'),
        where('active', '==', true),
        orderBy('createdAt', 'desc')
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      throw error;
    }
  };

  const updateScoringRule = async (ruleId: string, updates: any): Promise<void> => {
    try {
      await updateDoc(doc(db, 'scoring_rules', ruleId), {
        ...updates,
        updatedAt: Timestamp.now()
      });
    } catch (error) {
      throw error;
    }
  };

  const deleteScoringRule = async (ruleId: string): Promise<void> => {
    try {
      await deleteDoc(doc(db, 'scoring_rules', ruleId));
    } catch (error) {
      throw error;
    }
  };

  const getLeadScoringAnalytics = async (): Promise<any> => {
    try {
      // TODO: Implement lead scoring analytics
      return {
        totalLeads: 0,
        averageScore: 0,
        scoreDistribution: [],
        topLeads: []
      };
    } catch (error) {
      throw error;
    }
  };

  const applyScoreDecay = async (): Promise<void> => {
    try {
      // TODO: Implement score decay logic
      console.log('Applying score decay...');
    } catch (error) {
      throw error;
    }
  };

  // =====================================
  // ANALYTICS
  // =====================================

  // Analytics para sequences
  const getSequenceAnalytics = async (sequenceId: string): Promise<any> => {
    const eventsRef = collection(db, 'emailEvents');
    const q = query(eventsRef, where('sequenceId', '==', sequenceId));
    const snapshot = await getDocs(q);
    
    const events = snapshot.docs.map(doc => doc.data() as EmailEvent);
    
    // Calcular métricas
    const sent = events.filter(e => e.type === 'sent').length;
    const delivered = events.filter(e => e.type === 'delivered').length;
    const opened = events.filter(e => e.type === 'opened').length;
    const clicked = events.filter(e => e.type === 'clicked').length;
    
    return {
      sent,
      delivered,
      opened,
      clicked,
      deliveryRate: sent > 0 ? (delivered / sent) * 100 : 0,
      openRate: delivered > 0 ? (opened / delivered) * 100 : 0,
      clickRate: delivered > 0 ? (clicked / delivered) * 100 : 0,
      clickToOpenRate: opened > 0 ? (clicked / opened) * 100 : 0
    };
  };

  return {
    loading,
    error,
    
    // Smart Alerts
    createSmartAlert,
    updateSmartAlert,
    deleteSmartAlert,
    getActiveAlerts,
    evaluateAlerts,
    triggerAlert,
    
    // Workflows
    createWorkflow,
    executeWorkflow,
    deleteWorkflow,
    getActiveWorkflows,
    
    // Churn Prediction
    generateChurnPrediction,
    getChurnPredictions,
    executeRetentionAction,
    
    // Auto Responses
    createAutoResponse,
    updateAutoResponse,
    deleteAutoResponse,
    getActiveAutoResponses,
    
    // Email Sequences
    createEmailSequence,
    updateEmailSequence,
    deleteEmailSequence,
    getEmailSequences,
    getActiveEmailSequences,
    enrollClientInSequence,
    unenrollClientFromSequence,
    getSequenceSubscribers,
    sendScheduledEmails,
    
    // Email Templates
    createEmailTemplate,
    getEmailTemplates,
    
    // Analytics
    getSequenceAnalytics,
    
    // Lead Scoring
    createLead,
    updateLead,
    calculateLeadScore,
    getLeads,
    getLeadById,
    addLeadActivity,
    createScoringRule,
    getScoringRules,
    updateScoringRule,
    deleteScoringRule,
    getLeadScoringAnalytics,
    applyScoreDecay
  };
};
