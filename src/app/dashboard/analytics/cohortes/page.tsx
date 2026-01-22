'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';
import { 
  Calendar,
  TrendingUp,
  Users,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  RefreshCw,
  Download,
  Info
} from 'lucide-react';
import { useAdvancedAnalytics } from '@/hooks/useAdvancedAnalytics';
import { CohortAnalysis } from '@/types/analytics';
import { format, startOfMonth, subMonths } from 'date-fns';

interface CohortHeatmapProps {
  cohorts: CohortAnalysis['cohorts'];
  type: 'retention' | 'revenue';
}

const CohortHeatmap: React.FC<CohortHeatmapProps> = ({ cohorts, type }) => {
  const getColorIntensity = (value: number, maxValue: number) => {
    const intensity = Math.min(value / maxValue, 1);
    if (type === 'retention') {
      return `rgba(34, 197, 94, ${intensity})`; // Green for retention
    } else {
      return `rgba(59, 130, 246, ${intensity})`; // Blue for revenue
    }
  };

  const maxValue = Math.max(...cohorts.flatMap(cohort => 
    type === 'retention' ? cohort.retentionRates : cohort.revenueRates
  ));

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[800px]">
        <div className="grid grid-cols-13 gap-1 text-xs">
          {/* Header row */}
          <div className="font-semibold text-center py-2">Cohorte</div>
          <div className="font-semibold text-center py-2">Tamaño</div>
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="font-semibold text-center py-2">
              Mes {i}
            </div>
          ))}
          
          {/* Data rows */}
          {cohorts.map((cohort, cohortIndex) => (
            <React.Fragment key={cohort.cohortDate}>
              <div className="font-medium py-2 px-2 bg-gray-50 rounded">
                {cohort.cohortDate}
              </div>
              <div className="text-center py-2 px-2 bg-gray-50 rounded font-semibold">
                {cohort.size}
              </div>
              {(type === 'retention' ? cohort.retentionRates : cohort.revenueRates).map((value, periodIndex) => (
                <div
                  key={`${cohortIndex}-${periodIndex}`}
                  className="text-center py-2 px-1 rounded text-white font-semibold text-xs"
                  style={{ 
                    backgroundColor: getColorIntensity(value, maxValue),
                    color: value > maxValue * 0.5 ? 'white' : 'black'
                  }}
                  title={`${cohort.cohortDate} - Mes ${periodIndex}: ${value.toFixed(1)}${type === 'retention' ? '%' : ''}`}
                >
                  {value.toFixed(0)}{type === 'retention' ? '%' : ''}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

interface CohortStatsProps {
  cohorts: CohortAnalysis['cohorts'];
}

const CohortStats: React.FC<CohortStatsProps> = ({ cohorts }) => {
  const totalClients = cohorts.reduce((sum, cohort) => sum + cohort.size, 0);
  
  // Calcular retención promedio por período
  const avgRetentionByPeriod = Array.from({ length: 12 }, (_, periodIndex) => {
    const totalRetention = cohorts.reduce((sum, cohort) => {
      return sum + (cohort.retentionRates[periodIndex] || 0);
    }, 0);
    return totalRetention / cohorts.length;
  });

  // Calcular tendencias
  const firstMonthRetention = avgRetentionByPeriod[1] || 0;
  const sixMonthRetention = avgRetentionByPeriod[6] || 0;
  const twelveMonthRetention = avgRetentionByPeriod[11] || 0;

  const retentionTrend = twelveMonthRetention - firstMonthRetention;

  const chartData = avgRetentionByPeriod.map((retention, index) => ({
    period: `Mes ${index}`,
    retention: retention.toFixed(1),
    index
  }));

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Stats Cards */}
      <div className="space-y-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total de Cohortes</p>
                <p className="text-2xl font-bold">{cohorts.length}</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Clientes</p>
                <p className="text-2xl font-bold">{totalClients.toLocaleString()}</p>
              </div>
              <Users className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Retención Mes 1</p>
                <p className="text-2xl font-bold">{firstMonthRetention.toFixed(1)}%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Retención Mes 12</p>
                <p className="text-2xl font-bold">{twelveMonthRetention.toFixed(1)}%</p>
                <div className="flex items-center space-x-1 mt-1">
                  {retentionTrend >= 0 ? (
                    <ArrowUpRight className="h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-500" />
                  )}
                  <span className={`text-sm ${retentionTrend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {Math.abs(retentionTrend).toFixed(1)}% vs Mes 1
                  </span>
                </div>
              </div>
              <DollarSign className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Retention Curve */}
      <Card>
        <CardHeader>
          <CardTitle>Curva de Retención Promedio</CardTitle>
          <CardDescription>
            Retención promedio de todas las cohortes por período
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="index" 
                  tickFormatter={(value) => `M${value}`}
                />
                <YAxis 
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Retención']}
                  labelFormatter={(label) => `Mes ${label}`}
                />
                <Line 
                  type="monotone" 
                  dataKey="retention" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default function CohortAnalysisPage() {
  const { generateCohortAnalysis, loading } = useAdvancedAnalytics();
  const [cohortData, setCohortData] = useState<CohortAnalysis | null>(null);
  const [period, setPeriod] = useState<'monthly' | 'quarterly'>('monthly');
  const [viewType, setViewType] = useState<'retention' | 'revenue'>('retention');
  const [refreshing, setRefreshing] = useState(false);

  const loadCohortAnalysis = async () => {
    try {
      setRefreshing(true);
      const data = await generateCohortAnalysis(period);
      setCohortData(data);
    } catch (error) {
      console.error('Error loading cohort analysis:', error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadCohortAnalysis();
  }, [period]);

  if (loading && !cohortData) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Análisis de Cohortes</h1>
          <p className="text-muted-foreground">
            Análisis de retención y revenue por cohortes de clientes
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Select value={period} onValueChange={(value: 'monthly' | 'quarterly') => setPeriod(value)}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Mensual</SelectItem>
              <SelectItem value="quarterly">Trimestral</SelectItem>
            </SelectContent>
          </Select>

          <Select value={viewType} onValueChange={(value: 'retention' | 'revenue') => setViewType(value)}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="retention">Retención</SelectItem>
              <SelectItem value="revenue">Revenue</SelectItem>
            </SelectContent>
          </Select>

          <Button 
            onClick={loadCohortAnalysis} 
            variant="outline" 
            size="sm"
            disabled={refreshing}
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
            Actualizar
          </Button>
          
          <Button size="sm">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Info Card */}
      <Card className="border-blue-200 bg-blue-50">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <Info className="h-5 w-5 text-blue-600 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-blue-900">¿Qué es el análisis de cohortes?</p>
              <p className="text-blue-700 mt-1">
                Las cohortes agrupan clientes por fecha de registro ({period === 'monthly' ? 'mes' : 'trimestre'}) y muestran cómo 
                su comportamiento cambia a lo largo del tiempo. Esto ayuda a identificar tendencias de retención y oportunidades de mejora.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {cohortData && (
        <>
          {/* Stats Overview */}
          <CohortStats cohorts={cohortData.cohorts} />

          {/* Cohort Table */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>
                    Tabla de Cohortes - {viewType === 'retention' ? 'Retención' : 'Revenue'}
                  </CardTitle>
                  <CardDescription>
                    {viewType === 'retention' 
                      ? 'Porcentaje de clientes que permanecen activos por período'
                      : 'Revenue promedio por cliente por período'
                    }
                  </CardDescription>
                </div>

                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-xs">
                    {cohortData.cohorts.length} cohortes
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Período: {period === 'monthly' ? 'Mensual' : 'Trimestral'}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CohortHeatmap 
                cohorts={cohortData.cohorts} 
                type={viewType}
              />
              
              {/* Legend */}
              <div className="flex items-center justify-center space-x-6 mt-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-200 rounded"></div>
                  <span>Bajo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-4 h-4 rounded ${
                    viewType === 'retention' ? 'bg-green-300' : 'bg-blue-300'
                  }`}></div>
                  <span>Medio</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-4 h-4 rounded ${
                    viewType === 'retention' ? 'bg-green-600' : 'bg-blue-600'
                  }`}></div>
                  <span>Alto</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Insights */}
          <Card>
            <CardHeader>
              <CardTitle>Insights Clave</CardTitle>
              <CardDescription>
                Análisis automático basado en los datos de cohortes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-700">✅ Fortalezas</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>La retención mes 1 promedio es {((cohortData.cohorts.reduce((sum, c) => sum + c.retentionRates[1], 0) / cohortData.cohorts.length)).toFixed(1)}%</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Cohortes más recientes muestran mejor performance inicial</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>La retención se estabiliza después del mes 6</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-orange-700">⚠️ Áreas de Mejora</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Mayor pérdida de clientes en los primeros 3 meses</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Oportunidad de mejorar onboarding inicial</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Revisar estrategia de retención mes 2-4</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900">🎯 Recomendaciones Estratégicas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-800 mb-2">Onboarding Mejorado</h5>
                  <p className="text-sm text-purple-700">
                    Implementar un programa de onboarding de 30 días con check-ins automatizados y contenido educativo.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-800 mb-2">Engagement Temprano</h5>
                  <p className="text-sm text-purple-700">
                    Crear campañas de engagement específicas para los primeros 90 días, con incentivos y soporte proactivo.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-800 mb-2">Análisis Predictivo</h5>
                  <p className="text-sm text-purple-700">
                    Usar los datos de cohortes para identificar clientes en riesgo y activar intervenciones automáticas.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}