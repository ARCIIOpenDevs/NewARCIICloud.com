'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
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
  ResponsiveContainer
} from 'recharts';
import { 
  Plus,
  Play,
  Edit,
  Trash2,
  Download,
  Share,
  Clock,
  BarChart3,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  Table as TableIcon,
  Calendar,
  Filter,
  Settings,
  RefreshCw,
  Eye,
  Copy
} from 'lucide-react';
import { useAdvancedAnalytics } from '@/hooks/useAdvancedAnalytics';
import { CustomReport, ReportResult, MetricType } from '@/types/analytics';
import { format } from 'date-fns';

const METRIC_OPTIONS: { value: MetricType; label: string; description: string }[] = [
  { value: 'revenue', label: 'Revenue', description: 'Ingresos totales' },
  { value: 'mrr', label: 'MRR', description: 'Revenue mensual recurrente' },
  { value: 'active_clients', label: 'Clientes Activos', description: 'Número de clientes activos' },
  { value: 'new_clients', label: 'Nuevos Clientes', description: 'Clientes adquiridos' },
  { value: 'churn_rate', label: 'Churn Rate', description: 'Tasa de cancelación' },
  { value: 'customer_satisfaction', label: 'Satisfacción', description: 'Rating de satisfacción' },
  { value: 'tickets_resolved', label: 'Tickets Resueltos', description: 'Tickets cerrados' },
  { value: 'avg_resolution_time', label: 'Tiempo Resolución', description: 'Tiempo promedio de resolución' }
];

const DIMENSION_OPTIONS = [
  { value: 'client_segment', label: 'Segmento de Cliente' },
  { value: 'service_type', label: 'Tipo de Servicio' },
  { value: 'period', label: 'Período' },
  { value: 'location', label: 'Ubicación' },
  { value: 'acquisition_channel', label: 'Canal de Adquisición' }
];

const VISUALIZATION_OPTIONS = [
  { value: 'table', label: 'Tabla', icon: TableIcon },
  { value: 'line_chart', label: 'Gráfica de Líneas', icon: LineChartIcon },
  { value: 'bar_chart', label: 'Gráfica de Barras', icon: BarChart3 },
  { value: 'pie_chart', label: 'Gráfica de Pastel', icon: PieChartIcon },
  { value: 'metric_cards', label: 'Tarjetas de Métricas', icon: BarChart3 }
];

interface CreateReportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onReportCreated: () => void;
}

const CreateReportDialog: React.FC<CreateReportDialogProps> = ({ 
  open, 
  onOpenChange, 
  onReportCreated 
}) => {
  const { createCustomReport } = useAdvancedAnalytics();
  const [loading, setLoading] = useState(false);
  const [reportConfig, setReportConfig] = useState({
    name: '',
    description: '',
    isPublic: false,
    metrics: [] as MetricType[],
    dimensions: [] as string[],
    visualization: {
      type: 'table' as const,
      options: {}
    },
    filters: [] as any[],
    schedule: null as any
  });

  const handleCreateReport = async () => {
    try {
      setLoading(true);
      await createCustomReport({
        name: reportConfig.name,
        description: reportConfig.description,
        createdBy: 'current-user', // TODO: Get from auth context
        isPublic: reportConfig.isPublic,
        config: reportConfig
      });
      onReportCreated();
      onOpenChange(false);
      
      // Reset form
      setReportConfig({
        name: '',
        description: '',
        isPublic: false,
        metrics: [],
        dimensions: [],
        visualization: { type: 'table', options: {} },
        filters: [],
        schedule: null
      });
    } catch (error) {
      console.error('Error creating report:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMetricToggle = (metric: MetricType) => {
    setReportConfig(prev => ({
      ...prev,
      metrics: prev.metrics.includes(metric)
        ? prev.metrics.filter(m => m !== metric)
        : [...prev.metrics, metric]
    }));
  };

  const handleDimensionToggle = (dimension: string) => {
    setReportConfig(prev => ({
      ...prev,
      dimensions: prev.dimensions.includes(dimension)
        ? prev.dimensions.filter(d => d !== dimension)
        : [...prev.dimensions, dimension]
    }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Crear Nuevo Reporte</DialogTitle>
          <DialogDescription>
            Configura un reporte personalizado con las métricas y visualizaciones que necesites
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Basic Info */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre del Reporte</Label>
              <Input
                id="name"
                value={reportConfig.name}
                onChange={(e) => setReportConfig(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Ej: Reporte Mensual de Revenue"
              />
            </div>
            <div className="space-y-2">
              <Label>Visualización</Label>
              <Select 
                value={reportConfig.visualization.type} 
                onValueChange={(value: any) => 
                  setReportConfig(prev => ({ 
                    ...prev, 
                    visualization: { ...prev.visualization, type: value }
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {VISUALIZATION_OPTIONS.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descripción</Label>
            <Textarea
              id="description"
              value={reportConfig.description}
              onChange={(e) => setReportConfig(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Describe el propósito de este reporte..."
              rows={3}
            />
          </div>

          {/* Metrics Selection */}
          <div className="space-y-3">
            <Label>Métricas</Label>
            <div className="grid gap-2 md:grid-cols-2">
              {METRIC_OPTIONS.map(metric => (
                <div key={metric.value} className="flex items-start space-x-3 p-3 border rounded-lg">
                  <Checkbox
                    id={metric.value}
                    checked={reportConfig.metrics.includes(metric.value)}
                    onCheckedChange={() => handleMetricToggle(metric.value)}
                  />
                  <div className="flex-1">
                    <Label htmlFor={metric.value} className="font-medium">
                      {metric.label}
                    </Label>
                    <p className="text-xs text-gray-500">{metric.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dimensions Selection */}
          <div className="space-y-3">
            <Label>Dimensiones</Label>
            <div className="grid gap-2 md:grid-cols-2">
              {DIMENSION_OPTIONS.map(dimension => (
                <div key={dimension.value} className="flex items-center space-x-3 p-3 border rounded-lg">
                  <Checkbox
                    id={dimension.value}
                    checked={reportConfig.dimensions.includes(dimension.value)}
                    onCheckedChange={() => handleDimensionToggle(dimension.value)}
                  />
                  <Label htmlFor={dimension.value} className="font-medium">
                    {dimension.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Options */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="public"
              checked={reportConfig.isPublic}
              onCheckedChange={(checked) => 
                setReportConfig(prev => ({ ...prev, isPublic: checked as boolean }))
              }
            />
            <Label htmlFor="public" className="text-sm">
              Hacer público para todo el equipo
            </Label>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button 
            onClick={handleCreateReport} 
            disabled={loading || !reportConfig.name || reportConfig.metrics.length === 0}
          >
            {loading ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Creando...
              </>
            ) : (
              <>
                <Plus className="h-4 w-4 mr-2" />
                Crear Reporte
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

interface ReportResultViewerProps {
  result: ReportResult;
  report: CustomReport;
}

const ReportResultViewer: React.FC<ReportResultViewerProps> = ({ result, report }) => {
  const renderVisualization = () => {
    switch (report.config.visualization.type) {
      case 'table':
        return (
          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  {Object.keys(result.data[0] || {}).map(key => (
                    <TableHead key={key} className="font-semibold">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {result.data.map((row, index) => (
                  <TableRow key={index}>
                    {Object.values(row).map((value, cellIndex) => (
                      <TableCell key={cellIndex}>
                        {typeof value === 'number' ? value.toLocaleString() : String(value)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        );

      case 'bar_chart':
        return (
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={result.data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        );

      case 'line_chart':
        return (
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={result.data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        );

      case 'pie_chart':
        return (
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={result.data}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="revenue"
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {result.data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={`hsl(${index * 45}, 70%, 50%)`} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        );

      case 'metric_cards':
        return (
          <div className="grid gap-4 md:grid-cols-3">
            {Object.entries(result.summary.aggregations || {}).map(([key, value]) => (
              <Card key={key}>
                <CardContent className="p-6">
                  <div className="text-2xl font-bold">{value.toLocaleString()}</div>
                  <p className="text-sm text-gray-600 capitalize">
                    {key.replace('_', ' ')}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      default:
        return (
          <div className="flex items-center justify-center h-40 text-gray-500">
            Tipo de visualización no soportado
          </div>
        );
    }
  };

  return (
    <div className="space-y-4">
      {/* Report Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{report.name}</h3>
          <p className="text-sm text-gray-600">
            Ejecutado: {format(result.executedAt.toDate(), 'dd/MM/yyyy HH:mm')}
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Badge variant="outline">
            {result.summary.totalRecords} registros
          </Badge>
          <Badge variant="outline">
            {result.metadata.executionTime}ms
          </Badge>
        </div>
      </div>

      {/* Visualization */}
      {renderVisualization()}

      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-3 text-sm">
        <div>
          <span className="font-medium">Total Registros:</span>
          <span className="ml-2">{result.summary.totalRecords}</span>
        </div>
        <div>
          <span className="font-medium">Tiempo de Ejecución:</span>
          <span className="ml-2">{result.metadata.executionTime}ms</span>
        </div>
        <div>
          <span className="font-medium">Último Update:</span>
          <span className="ml-2">{format(result.metadata.dataFreshness.toDate(), 'HH:mm')}</span>
        </div>
      </div>
    </div>
  );
};

export default function CustomReportsPage() {
  const { executeCustomReport } = useAdvancedAnalytics();
  const [reports, setReports] = useState<CustomReport[]>([]);
  const [reportResults, setReportResults] = useState<{ [key: string]: ReportResult }>({});
  const [loading, setLoading] = useState(false);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState<CustomReport | null>(null);

  // Mock data for demo
  useEffect(() => {
    const mockReports: CustomReport[] = [
      {
        id: 'report_1',
        name: 'Revenue Mensual',
        description: 'Análisis de ingresos mensuales por segmento',
        createdBy: 'admin',
        isPublic: true,
        config: {
          metrics: ['revenue', 'mrr'],
          dimensions: ['client_segment'],
          filters: [],
          visualization: {
            type: 'bar_chart',
            options: {}
          }
        },
        createdAt: new Date() as any,
        updatedAt: new Date() as any,
        lastRun: new Date() as any
      },
      {
        id: 'report_2',
        name: 'Análisis de Churn',
        description: 'Seguimiento de cancelaciones y retención',
        createdBy: 'admin',
        isPublic: false,
        config: {
          metrics: ['churn_rate', 'active_clients'],
          dimensions: ['period'],
          filters: [],
          visualization: {
            type: 'line_chart',
            options: {}
          }
        },
        createdAt: new Date() as any,
        updatedAt: new Date() as any
      }
    ];
    
    setReports(mockReports);
  }, []);

  const handleRunReport = async (report: CustomReport) => {
    try {
      setLoading(true);
      const result = await executeCustomReport(report.id);
      setReportResults(prev => ({
        ...prev,
        [report.id]: result
      }));
      setSelectedReport(report);
    } catch (error) {
      console.error('Error running report:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleReportCreated = () => {
    // In a real app, this would reload reports from the API
    console.log('Report created, reloading...');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reportes Personalizados</h1>
          <p className="text-muted-foreground">
            Crea y ejecuta reportes personalizados con las métricas que necesites
          </p>
        </div>
        
        <Button onClick={() => setCreateDialogOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Crear Reporte
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Reports List */}
        <div className="lg:col-span-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mis Reportes</CardTitle>
              <CardDescription>
                {reports.length} reportes disponibles
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {reports.map(report => (
                <div 
                  key={report.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedReport?.id === report.id 
                      ? 'border-primary-500 bg-primary-50' 
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedReport(report)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium">{report.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{report.description}</p>
                      
                      <div className="flex items-center space-x-2 mt-2">
                        {report.isPublic && (
                          <Badge variant="outline" className="text-xs border-green-300 text-green-700 bg-green-50">
                            Público
                          </Badge>
                        )}
                        <Badge variant="outline" className="text-xs">
                          {report.config.metrics.length} métricas
                        </Badge>
                      </div>
                      
                      {report.lastRun && (
                        <p className="text-xs text-gray-500 mt-1">
                          Último: {format(report.lastRun.toDate(), 'dd/MM HH:mm')}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mt-3">
                    <Button 
                      size="sm" 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRunReport(report);
                      }}
                      disabled={loading}
                    >
                      <Play className="h-4 w-4 mr-1" />
                      {loading ? 'Ejecutando...' : 'Ejecutar'}
                    </Button>
                    
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4" />
                    </Button>
                    
                    <Button size="sm" variant="outline">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              
              {reports.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <BarChart3 className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>No hay reportes creados</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-2"
                    onClick={() => setCreateDialogOpen(true)}
                  >
                    Crear el primero
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Report Results */}
        <div className="lg:col-span-2">
          {selectedReport && reportResults[selectedReport.id] ? (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Resultado del Reporte</CardTitle>
                    <CardDescription>
                      {selectedReport.name}
                    </CardDescription>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Exportar
                    </Button>
                    <Button size="sm" variant="outline">
                      <Share className="h-4 w-4 mr-2" />
                      Compartir
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ReportResultViewer 
                  result={reportResults[selectedReport.id]}
                  report={selectedReport}
                />
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="flex items-center justify-center h-96">
                <div className="text-center text-gray-500">
                  <Eye className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p className="text-lg font-medium">Selecciona un reporte</p>
                  <p className="text-sm">Elige un reporte de la lista para ver sus resultados</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Create Report Dialog */}
      <CreateReportDialog
        open={createDialogOpen}
        onOpenChange={setCreateDialogOpen}
        onReportCreated={handleReportCreated}
      />
    </div>
  );
}