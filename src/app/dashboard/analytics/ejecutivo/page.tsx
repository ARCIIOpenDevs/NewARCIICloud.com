'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DatePickerWithRange } from '@/components/ui/date-range-picker';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar,
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  Minus,
  DollarSign,
  Users,
  Server,
  HeadphonesIcon,
  AlertTriangle,
  CheckCircle,
  Clock,
  Star,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  RefreshCw,
  Download,
  Filter
} from 'lucide-react';
import { useAdvancedAnalytics } from '@/hooks/useAdvancedAnalytics';
import { ExecutiveDashboard, MetricSummary, DateRange } from '@/types/analytics';
import { format, subDays, startOfMonth, endOfMonth } from 'date-fns';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

interface MetricCardProps {
  title: string;
  metric: MetricSummary;
  prefix?: string;
  suffix?: string;
  icon: React.ReactNode;
  format?: 'number' | 'currency' | 'percentage';
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  metric, 
  prefix = '', 
  suffix = '', 
  icon, 
  format = 'number' 
}) => {
  const formatValue = (value: number) => {
    switch (format) {
      case 'currency':
        return `$${value.toLocaleString()}`;
      case 'percentage':
        return `${value.toFixed(1)}%`;
      default:
        return value.toLocaleString();
    }
  };

  const getTrendIcon = () => {
    switch (metric.trend) {
      case 'up':
        return <ArrowUpRight className="h-4 w-4 text-green-500" />;
      case 'down':
        return <ArrowDownRight className="h-4 w-4 text-red-500" />;
      default:
        return <Minus className="h-4 w-4 text-gray-400" />;
    }
  };

  const getTrendColor = () => {
    switch (metric.trend) {
      case 'up':
        return 'text-green-500';
      case 'down':
        return 'text-red-500';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {prefix}{formatValue(metric.current)}{suffix}
        </div>
        <div className="flex items-center space-x-2 text-xs text-muted-foreground mt-1">
          {getTrendIcon()}
          <span className={getTrendColor()}>
            {metric.changePercent >= 0 ? '+' : ''}{metric.changePercent.toFixed(1)}%
          </span>
          <span>vs período anterior</span>
        </div>
        
        {/* Mini sparkline */}
        <div className="mt-2 h-8">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={metric.sparklineData.map((value, index) => ({ value, index }))}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke={metric.trend === 'up' ? '#10b981' : metric.trend === 'down' ? '#ef4444' : '#6b7280'} 
                strokeWidth={2} 
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

interface DateRangeSelectorProps {
  value: DateRange;
  onChange: (range: DateRange) => void;
}

const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({ value, onChange }) => {
  const presets = [
    {
      label: 'Últimos 7 días',
      range: {
        start: subDays(new Date(), 7),
        end: new Date()
      }
    },
    {
      label: 'Últimos 30 días',
      range: {
        start: subDays(new Date(), 30),
        end: new Date()
      }
    },
    {
      label: 'Este mes',
      range: {
        start: startOfMonth(new Date()),
        end: endOfMonth(new Date())
      }
    },
    {
      label: 'Últimos 90 días',
      range: {
        start: subDays(new Date(), 90),
        end: new Date()
      }
    }
  ];

  return (
    <div className="flex space-x-2">
      <Select onValueChange={(value) => {
        const preset = presets.find(p => p.label === value);
        if (preset) onChange(preset.range);
      }}>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Seleccionar período" />
        </SelectTrigger>
        <SelectContent>
          {presets.map(preset => (
            <SelectItem key={preset.label} value={preset.label}>
              {preset.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      <DatePickerWithRange
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default function ExecutiveDashboardPage() {
  const { generateExecutiveDashboard, loading } = useAdvancedAnalytics();
  const [dashboard, setDashboard] = useState<ExecutiveDashboard | null>(null);
  const [dateRange, setDateRange] = useState<DateRange>({
    start: subDays(new Date(), 30),
    end: new Date()
  });
  const [refreshing, setRefreshing] = useState(false);

  const loadDashboard = async () => {
    try {
      setRefreshing(true);
      const data = await generateExecutiveDashboard(dateRange);
      setDashboard(data);
    } catch (error) {
      console.error('Error loading dashboard:', error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, [dateRange]);

  const revenueChartData = dashboard ? [
    { name: 'Período Actual', revenue: dashboard.overview.totalRevenue.current },
    { name: 'Período Anterior', revenue: dashboard.overview.totalRevenue.previous }
  ] : [];

  const serviceTypeChartData = dashboard?.revenueBreakdown.byServiceType.map(item => ({
    name: item.serviceType,
    value: item.revenue,
    percentage: item.percentage
  })) || [];

  const clientSegmentData = dashboard?.revenueBreakdown.byClientSegment || [];

  if (loading && !dashboard) {
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
          <h1 className="text-3xl font-bold tracking-tight">Dashboard Ejecutivo</h1>
          <p className="text-muted-foreground">
            Visión general del rendimiento empresarial y métricas clave
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <DateRangeSelector value={dateRange} onChange={setDateRange} />
          <Button 
            onClick={loadDashboard} 
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

      {/* Período seleccionado */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">
                {format(dateRange.start, 'dd MMM yyyy')} - {format(dateRange.end, 'dd MMM yyyy')}
              </span>
            </div>
            <Badge variant="outline">
              {Math.ceil((dateRange.end.getTime() - dateRange.start.getTime()) / (1000 * 60 * 60 * 24))} días
            </Badge>
          </div>
        </CardContent>
      </Card>

      {dashboard && (
        <>
          {/* KPIs Principales */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <MetricCard
              title="Revenue Total"
              metric={dashboard.overview.totalRevenue}
              icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
              format="currency"
            />
            <MetricCard
              title="MRR"
              metric={dashboard.overview.mrr}
              icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
              format="currency"
            />
            <MetricCard
              title="Clientes Activos"
              metric={dashboard.overview.activeClients}
              icon={<Users className="h-4 w-4 text-muted-foreground" />}
            />
            <MetricCard
              title="Churn Rate"
              metric={dashboard.overview.churnRate}
              icon={<AlertTriangle className="h-4 w-4 text-muted-foreground" />}
              format="percentage"
            />
            <MetricCard
              title="Satisfacción"
              metric={dashboard.overview.customerSatisfaction}
              icon={<Star className="h-4 w-4 text-muted-foreground" />}
              suffix="/5"
            />
          </div>

          {/* Métricas de Clientes */}
          <Card>
            <CardHeader>
              <CardTitle>Métricas de Clientes</CardTitle>
              <CardDescription>
                Análisis detallado del comportamiento y valor de los clientes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Tasa de Retención</span>
                    <Badge variant="outline" className="text-green-600">
                      {dashboard.clientMetrics.retentionRate.current}%
                    </Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    +{dashboard.clientMetrics.retentionRate.changePercent.toFixed(1)}% vs período anterior
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Tasa de Expansión</span>
                    <Badge variant="outline" className="text-blue-600">
                      {dashboard.clientMetrics.expansionRate.current}%
                    </Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    +{dashboard.clientMetrics.expansionRate.changePercent.toFixed(1)}% vs período anterior
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">LTV Promedio</span>
                    <Badge variant="outline" className="text-purple-600">
                      ${dashboard.clientMetrics.averageLTV.current}
                    </Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    +{dashboard.clientMetrics.averageLTV.changePercent.toFixed(1)}% vs período anterior
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">CAC Promedio</span>
                    <Badge variant="outline" className="text-orange-600">
                      ${dashboard.clientMetrics.averageCAC.current}
                    </Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {dashboard.clientMetrics.averageCAC.changePercent.toFixed(1)}% vs período anterior
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Revenue Breakdown */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Revenue por Tipo de Servicio</CardTitle>
                <CardDescription>
                  Distribución de ingresos por categoría de servicio
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={serviceTypeChartData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percentage }) => `${name}: ${percentage.toFixed(1)}%`}
                      >
                        {serviceTypeChartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue por Segmento de Cliente</CardTitle>
                <CardDescription>
                  Ingresos y cantidad de clientes por segmento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={clientSegmentData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="segment" />
                      <YAxis yAxisId="revenue" orientation="left" />
                      <YAxis yAxisId="clients" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Bar yAxisId="revenue" dataKey="revenue" fill="#8884d8" name="Revenue" />
                      <Bar yAxisId="clients" dataKey="clientCount" fill="#82ca9d" name="Clientes" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Métricas Operacionales */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Métricas de Soporte</CardTitle>
                <CardDescription>
                  Rendimiento del equipo de soporte técnico
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 grid-cols-2">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <HeadphonesIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-2xl font-bold">
                        {dashboard.operationalMetrics.supportTickets.total}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">Total tickets</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-2xl font-bold text-green-600">
                        {dashboard.operationalMetrics.supportTickets.resolved}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">Resueltos</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Clock className="h-4 w-4 text-orange-500" />
                      <span className="text-2xl font-bold">
                        {dashboard.operationalMetrics.supportTickets.avgResolutionTime.toFixed(1)}h
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">Tiempo promedio</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-2xl font-bold">
                        {dashboard.operationalMetrics.supportTickets.satisfactionScore.toFixed(1)}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">Satisfacción</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Estado de Servicios</CardTitle>
                <CardDescription>
                  Salud general de la infraestructura
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 grid-cols-2">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Server className="h-4 w-4 text-green-500" />
                      <span className="text-2xl font-bold text-green-600">
                        {dashboard.operationalMetrics.servicesHealth.uptime}%
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">Uptime</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span className="text-2xl font-bold">
                        {dashboard.operationalMetrics.servicesHealth.activeServices}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">Servicios activos</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                      <span className="text-2xl font-bold text-red-600">
                        {dashboard.operationalMetrics.servicesHealth.criticalIssues}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">Issues críticos</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-center">
                      <Badge 
                        variant={dashboard.operationalMetrics.servicesHealth.criticalIssues === 0 ? "default" : "outline"}
                        className={`w-full justify-center ${
                          dashboard.operationalMetrics.servicesHealth.criticalIssues === 0 ? "" : "border-red-300 text-red-700 bg-red-50"
                        }`}
                      >
                        {dashboard.operationalMetrics.servicesHealth.criticalIssues === 0 ? "Estable" : "Atención requerida"}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground text-center">Estado general</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Comparación de Revenue */}
          <Card>
            <CardHeader>
              <CardTitle>Comparación de Revenue</CardTitle>
              <CardDescription>
                Revenue actual vs período anterior
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `$${value.toLocaleString()}`} />
                    <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} />
                    <Bar dataKey="revenue" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}