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
  Timestamp,
  getDoc
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { 
  Metric, 
  MetricType, 
  MetricPeriod, 
  MetricSummary, 
  ExecutiveDashboard, 
  CustomerBehaviorAnalytics,
  RevenueForecasting,
  CustomReport,
  ReportResult,
  DateRange,
  CohortAnalysis,
  KPIAlert
} from '@/types/analytics';
import { addDays, subDays, startOfMonth, endOfMonth, format, differenceInDays } from 'date-fns';

export const useAdvancedAnalytics = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // =====================================
  // CÁLCULO DE MÉTRICAS PRINCIPALES
  // =====================================

  const calculateMetric = async (
    type: MetricType, 
    period: MetricPeriod, 
    dateRange: DateRange
  ): Promise<MetricSummary> => {
    setLoading(true);
    try {
      let current = 0;
      let previous = 0;

      switch (type) {
        case 'revenue':
          const revenue = await calculateRevenue(dateRange);
          current = revenue.current;
          previous = revenue.previous;
          break;

        case 'mrr':
          const mrr = await calculateMRR(dateRange);
          current = mrr.current;
          previous = mrr.previous;
          break;

        case 'active_clients':
          const clients = await calculateActiveClients(dateRange);
          current = clients.current;
          previous = clients.previous;
          break;

        case 'churn_rate':
          const churn = await calculateChurnRate(dateRange);
          current = churn.current;
          previous = churn.previous;
          break;

        case 'customer_satisfaction':
          const satisfaction = await calculateCustomerSatisfaction(dateRange);
          current = satisfaction.current;
          previous = satisfaction.previous;
          break;

        // Agregar más métricas según necesidad
      }

      const change = current - previous;
      const changePercent = previous > 0 ? (change / previous) * 100 : 0;
      const trend = Math.abs(changePercent) < 1 ? 'stable' : changePercent > 0 ? 'up' : 'down';

      // Generar sparkline data (últimos 7 puntos de datos)
      const sparklineData = await generateSparklineData(type, period, dateRange);

      return {
        type,
        period,
        current,
        previous,
        change,
        changePercent,
        trend,
        sparklineData,
        lastUpdated: Timestamp.now()
      };
    } catch (error) {
      console.error(`Error calculating ${type}:`, error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // =====================================
  // CÁLCULOS ESPECÍFICOS DE MÉTRICAS
  // =====================================

  const calculateRevenue = async (dateRange: DateRange) => {
    const currentQuery = query(
      collection(db, 'payments'),
      where('status', '==', 'completed'),
      where('paymentDate', '>=', Timestamp.fromDate(dateRange.start)),
      where('paymentDate', '<=', Timestamp.fromDate(dateRange.end))
    );

    const days = differenceInDays(dateRange.end, dateRange.start);
    const previousStart = subDays(dateRange.start, days);
    const previousEnd = subDays(dateRange.end, days);

    const previousQuery = query(
      collection(db, 'payments'),
      where('status', '==', 'completed'),
      where('paymentDate', '>=', Timestamp.fromDate(previousStart)),
      where('paymentDate', '<=', Timestamp.fromDate(previousEnd))
    );

    const [currentPayments, previousPayments] = await Promise.all([
      getDocs(currentQuery),
      getDocs(previousQuery)
    ]);

    const current = currentPayments.docs.reduce((sum, doc) => sum + doc.data().amount, 0);
    const previous = previousPayments.docs.reduce((sum, doc) => sum + doc.data().amount, 0);

    return { current, previous };
  };

  const calculateMRR = async (dateRange: DateRange) => {
    // MRR = suma de todos los servicios activos con facturación mensual
    const servicesQuery = query(
      collection(db, 'services'),
      where('status', '==', 'active'),
      where('billingCycle', '==', 'monthly')
    );

    const services = await getDocs(servicesQuery);
    const currentMRR = services.docs.reduce((sum, doc) => {
      const service = doc.data();
      return sum + service.price;
    }, 0);

    // Para obtener MRR anterior, buscar servicios que estaban activos hace 30 días
    const previousDate = subDays(new Date(), 30);
    const previousServices = services.docs.filter(doc => {
      const service = doc.data();
      return service.createdAt.toDate() <= previousDate;
    });

    const previousMRR = previousServices.reduce((sum, doc) => {
      return sum + doc.data().price;
    }, 0);

    return { current: currentMRR, previous: previousMRR };
  };

  const calculateActiveClients = async (dateRange: DateRange) => {
    const currentQuery = query(
      collection(db, 'clients'),
      where('status', '==', 'active')
    );

    const clients = await getDocs(currentQuery);
    const current = clients.size;

    // Clientes activos hace 30 días
    const previousDate = subDays(new Date(), 30);
    const previousActiveClients = clients.docs.filter(doc => {
      const client = doc.data();
      return client.createdAt.toDate() <= previousDate && client.status === 'active';
    }).length;

    return { current, previous: previousActiveClients };
  };

  const calculateChurnRate = async (dateRange: DateRange) => {
    const startOfPeriod = startOfMonth(dateRange.start);
    const endOfPeriod = endOfMonth(dateRange.end);

    // Clientes que se cancelaron en el período
    const churnedQuery = query(
      collection(db, 'clients'),
      where('status', '==', 'canceled'),
      where('updatedAt', '>=', Timestamp.fromDate(startOfPeriod)),
      where('updatedAt', '<=', Timestamp.fromDate(endOfPeriod))
    );

    // Clientes activos al inicio del período
    const activeQuery = query(
      collection(db, 'clients'),
      where('status', 'in', ['active', 'canceled']),
      where('createdAt', '<=', Timestamp.fromDate(startOfPeriod))
    );

    const [churnedClients, totalClients] = await Promise.all([
      getDocs(churnedQuery),
      getDocs(activeQuery)
    ]);

    const current = totalClients.size > 0 ? (churnedClients.size / totalClients.size) * 100 : 0;

    // Churn rate del período anterior
    const prevStartOfPeriod = subDays(startOfPeriod, 30);
    const prevEndOfPeriod = subDays(endOfPeriod, 30);

    const prevChurnedQuery = query(
      collection(db, 'clients'),
      where('status', '==', 'canceled'),
      where('updatedAt', '>=', Timestamp.fromDate(prevStartOfPeriod)),
      where('updatedAt', '<=', Timestamp.fromDate(prevEndOfPeriod))
    );

    const prevChurnedClients = await getDocs(prevChurnedQuery);
    const previous = totalClients.size > 0 ? (prevChurnedClients.size / totalClients.size) * 100 : 0;

    return { current, previous };
  };

  const calculateCustomerSatisfaction = async (dateRange: DateRange) => {
    const ticketsQuery = query(
      collection(db, 'tickets'),
      where('status', '==', 'closed'),
      where('closedAt', '>=', Timestamp.fromDate(dateRange.start)),
      where('closedAt', '<=', Timestamp.fromDate(dateRange.end)),
      where('satisfactionRating', '!=', null)
    );

    const tickets = await getDocs(ticketsQuery);
    
    if (tickets.empty) {
      return { current: 0, previous: 0 };
    }

    const current = tickets.docs.reduce((sum, doc) => {
      return sum + doc.data().satisfactionRating;
    }, 0) / tickets.size;

    // Período anterior
    const days = differenceInDays(dateRange.end, dateRange.start);
    const previousStart = subDays(dateRange.start, days);
    const previousEnd = subDays(dateRange.end, days);

    const prevTicketsQuery = query(
      collection(db, 'tickets'),
      where('status', '==', 'closed'),
      where('closedAt', '>=', Timestamp.fromDate(previousStart)),
      where('closedAt', '<=', Timestamp.fromDate(previousEnd)),
      where('satisfactionRating', '!=', null)
    );

    const prevTickets = await getDocs(prevTicketsQuery);
    const previous = prevTickets.empty ? 0 : prevTickets.docs.reduce((sum, doc) => {
      return sum + doc.data().satisfactionRating;
    }, 0) / prevTickets.size;

    return { current, previous };
  };

  // =====================================
  // DASHBOARD EJECUTIVO
  // =====================================

  const generateExecutiveDashboard = async (period: DateRange): Promise<ExecutiveDashboard> => {
    setLoading(true);
    try {
      const [
        totalRevenue,
        mrr,
        activeClients,
        churnRate,
        customerSatisfaction
      ] = await Promise.all([
        calculateMetric('revenue', 'monthly', period),
        calculateMetric('mrr', 'monthly', period),
        calculateMetric('active_clients', 'monthly', period),
        calculateMetric('churn_rate', 'monthly', period),
        calculateMetric('customer_satisfaction', 'monthly', period)
      ]);

      // Revenue breakdown
      const revenueBreakdown = await calculateRevenueBreakdown(period);

      // Client metrics
      const clientMetrics = await calculateClientMetrics(period);

      // Operational metrics
      const operationalMetrics = await calculateOperationalMetrics(period);

      return {
        period,
        overview: {
          totalRevenue,
          mrr,
          activeClients,
          churnRate,
          customerSatisfaction
        },
        revenueBreakdown,
        clientMetrics,
        operationalMetrics
      };
    } finally {
      setLoading(false);
    }
  };

  const calculateRevenueBreakdown = async (period: DateRange) => {
    // Revenue por tipo de servicio
    const servicesQuery = query(
      collection(db, 'services'),
      where('status', '==', 'active')
    );

    const services = await getDocs(servicesQuery);
    const serviceTypes: { [key: string]: { revenue: number; count: number } } = {};

    services.docs.forEach(doc => {
      const service = doc.data();
      const type = service.type;
      if (!serviceTypes[type]) {
        serviceTypes[type] = { revenue: 0, count: 0 };
      }
      serviceTypes[type].revenue += service.price;
      serviceTypes[type].count += 1;
    });

    const totalRevenue = Object.values(serviceTypes).reduce((sum, type) => sum + type.revenue, 0);

    const byServiceType = Object.entries(serviceTypes).map(([type, data]) => ({
      serviceType: type,
      revenue: data.revenue,
      percentage: totalRevenue > 0 ? (data.revenue / totalRevenue) * 100 : 0,
      change: 0 // TODO: Calcular cambio vs período anterior
    }));

    // Revenue por segmento de cliente
    const clientsQuery = query(
      collection(db, 'clients'),
      where('status', '==', 'active')
    );

    const clients = await getDocs(clientsQuery);
    const segments: { [key: string]: { revenue: number; clientCount: number } } = {};

    for (const clientDoc of clients.docs) {
      const client = clientDoc.data();
      const segment = client.segment || 'general';
      
      if (!segments[segment]) {
        segments[segment] = { revenue: 0, clientCount: 0 };
      }

      // Obtener servicios del cliente
      const clientServicesQuery = query(
        collection(db, 'services'),
        where('clientId', '==', clientDoc.id),
        where('status', '==', 'active')
      );

      const clientServices = await getDocs(clientServicesQuery);
      const clientRevenue = clientServices.docs.reduce((sum, serviceDoc) => {
        return sum + serviceDoc.data().price;
      }, 0);

      segments[segment].revenue += clientRevenue;
      segments[segment].clientCount += 1;
    }

    const byClientSegment = Object.entries(segments).map(([segment, data]) => ({
      segment,
      revenue: data.revenue,
      percentage: totalRevenue > 0 ? (data.revenue / totalRevenue) * 100 : 0,
      clientCount: data.clientCount
    }));

    return { byServiceType, byClientSegment };
  };

  const calculateClientMetrics = async (period: DateRange) => {
    // Métricas básicas de clientes (placeholder)
    return {
      acquisitionRate: await calculateMetric('new_clients', 'monthly', period),
      retentionRate: { 
        type: 'gross_revenue_retention' as const, 
        period: 'monthly' as const,
        current: 95, 
        previous: 93, 
        change: 2, 
        changePercent: 2.15, 
        trend: 'up' as const, 
        sparklineData: [93, 94, 95, 94, 96, 95, 95], 
        lastUpdated: Timestamp.now() 
      },
      expansionRate: { 
        type: 'net_revenue_retention' as const, 
        period: 'monthly' as const,
        current: 15, 
        previous: 12, 
        change: 3, 
        changePercent: 25, 
        trend: 'up' as const, 
        sparklineData: [12, 13, 14, 13, 15, 15, 15], 
        lastUpdated: Timestamp.now() 
      },
      averageLTV: { 
        type: 'ltv' as const, 
        period: 'monthly' as const,
        current: 2400, 
        previous: 2200, 
        change: 200, 
        changePercent: 9.09, 
        trend: 'up' as const, 
        sparklineData: [2200, 2250, 2300, 2280, 2350, 2400, 2400], 
        lastUpdated: Timestamp.now() 
      },
      averageCAC: { 
        type: 'cac' as const, 
        period: 'monthly' as const,
        current: 150, 
        previous: 160, 
        change: -10, 
        changePercent: -6.25, 
        trend: 'down' as const, 
        sparklineData: [160, 158, 155, 152, 150, 148, 150], 
        lastUpdated: Timestamp.now() 
      }
    };
  };

  const calculateOperationalMetrics = async (period: DateRange) => {
    const ticketsQuery = query(
      collection(db, 'tickets'),
      where('createdAt', '>=', Timestamp.fromDate(period.start)),
      where('createdAt', '<=', Timestamp.fromDate(period.end))
    );

    const tickets = await getDocs(ticketsQuery);
    const resolvedTickets = tickets.docs.filter(doc => doc.data().status === 'closed');

    const avgResolutionTime = resolvedTickets.length > 0 
      ? resolvedTickets.reduce((sum, doc) => {
          const ticket = doc.data();
          const created = ticket.createdAt.toDate();
          const closed = ticket.closedAt?.toDate() || new Date();
          return sum + (closed.getTime() - created.getTime());
        }, 0) / resolvedTickets.length / (1000 * 60 * 60) // Convert to hours
      : 0;

    const satisfactionScore = resolvedTickets.length > 0
      ? resolvedTickets.reduce((sum, doc) => {
          return sum + (doc.data().satisfactionRating || 0);
        }, 0) / resolvedTickets.length
      : 0;

    return {
      supportTickets: {
        total: tickets.size,
        resolved: resolvedTickets.length,
        avgResolutionTime,
        satisfactionScore
      },
      servicesHealth: {
        uptime: 99.9, // TODO: Conectar con sistema de monitoreo real
        activeServices: 0, // TODO: Calcular servicios activos
        criticalIssues: 0 // TODO: Conectar con sistema de alertas
      }
    };
  };

  // =====================================
  // ANÁLISIS DE COHORTES
  // =====================================

  const generateCohortAnalysis = async (period: 'monthly' | 'quarterly'): Promise<CohortAnalysis> => {
    setLoading(true);
    try {
      const clientsQuery = query(
        collection(db, 'clients'),
        orderBy('createdAt', 'asc')
      );

      const clients = await getDocs(clientsQuery);
      const cohorts: { [key: string]: any[] } = {};

      // Agrupar clientes por cohorte
      clients.docs.forEach(doc => {
        const client = doc.data();
        const cohortDate = format(client.createdAt.toDate(), period === 'monthly' ? 'yyyy-MM' : 'yyyy-[Q]Q');
        
        if (!cohorts[cohortDate]) {
          cohorts[cohortDate] = [];
        }
        
        cohorts[cohortDate].push({
          ...client,
          id: doc.id
        });
      });

      // Calcular retention rates para cada cohorte
      const cohortAnalysis = await Promise.all(
        Object.entries(cohorts).map(async ([cohortDate, cohortClients]) => {
          const retentionRates: number[] = [];
          const revenueRates: number[] = [];

          // Calcular retention para los próximos 12 períodos
          for (let periodOffset = 0; periodOffset < 12; periodOffset++) {
            const targetDate = period === 'monthly' 
              ? addDays(new Date(cohortDate + '-01'), periodOffset * 30)
              : addDays(new Date(cohortDate.replace('Q1', '01').replace('Q2', '04').replace('Q3', '07').replace('Q4', '10')), periodOffset * 90);

            const activeInPeriod = cohortClients.filter(client => {
              if (client.status === 'canceled' && client.updatedAt.toDate() <= targetDate) {
                return false;
              }
              return client.createdAt.toDate() <= targetDate;
            }).length;

            const retentionRate = cohortClients.length > 0 ? (activeInPeriod / cohortClients.length) * 100 : 0;
            retentionRates.push(retentionRate);

            // TODO: Calcular revenue rates
            revenueRates.push(retentionRate * 1.2); // Placeholder
          }

          return {
            cohortDate,
            size: cohortClients.length,
            retentionRates,
            revenueRates
          };
        })
      );

      return {
        period,
        cohorts: cohortAnalysis
      };
    } finally {
      setLoading(false);
    }
  };

  // =====================================
  // SPARKLINE DATA
  // =====================================

  const generateSparklineData = async (
    type: MetricType, 
    period: MetricPeriod, 
    dateRange: DateRange
  ): Promise<number[]> => {
    const data: number[] = [];
    const days = 7; // Últimos 7 puntos

    for (let i = days - 1; i >= 0; i--) {
      const pointDate = subDays(dateRange.end, i);
      const pointRange = {
        start: pointDate,
        end: pointDate
      };

      try {
        const metric = await calculateMetric(type, 'daily', pointRange);
        data.push(metric.current);
      } catch {
        data.push(0);
      }
    }

    return data;
  };

  // =====================================
  // REPORTES PERSONALIZABLES
  // =====================================

  const createCustomReport = async (report: Omit<CustomReport, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> => {
    const reportId = `report_${Date.now()}`;
    const reportData: CustomReport = {
      ...report,
      id: reportId,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    };

    await setDoc(doc(db, 'custom_reports', reportId), reportData);
    return reportId;
  };

  const executeCustomReport = async (reportId: string): Promise<ReportResult> => {
    setLoading(true);
    try {
      const reportDoc = await getDoc(doc(db, 'custom_reports', reportId));
      
      if (!reportDoc.exists()) {
        throw new Error('Report not found');
      }

      const report = reportDoc.data() as CustomReport;
      
      // TODO: Implementar lógica de ejecución de reportes
      const data: Array<Record<string, any>> = [];
      
      // Placeholder data
      data.push({
        date: format(new Date(), 'yyyy-MM-dd'),
        revenue: 15000,
        clients: 125,
        services: 340
      });

      const result: ReportResult = {
        reportId,
        executedAt: Timestamp.now(),
        data,
        summary: {
          totalRecords: data.length,
          dateRange: {
            start: subDays(new Date(), 30),
            end: new Date()
          },
          aggregations: {
            totalRevenue: data.reduce((sum, row) => sum + (row.revenue || 0), 0)
          }
        },
        metadata: {
          executionTime: 250,
          dataFreshness: Timestamp.now(),
          filters: report.config.filters
        }
      };

      // Actualizar lastRun
      await updateDoc(doc(db, 'custom_reports', reportId), {
        lastRun: Timestamp.now()
      });

      return result;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    
    // Métricas principales
    calculateMetric,
    generateExecutiveDashboard,
    generateCohortAnalysis,
    
    // Reportes personalizables
    createCustomReport,
    executeCustomReport,
    
    // Utilidades
    generateSparklineData
  };
};