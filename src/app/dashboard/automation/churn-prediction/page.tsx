'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { 
  AlertTriangle,
  TrendingDown,
  TrendingUp,
  Users,
  DollarSign,
  Calendar,
  Mail,
  Phone,
  MessageCircle,
  Target,
  Zap,
  RefreshCw,
  Download,
  Filter,
  Search,
  Brain,
  Shield,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  Send,
  UserX,
  UserCheck,
  Star,
  Activity,
  Settings
} from 'lucide-react';
import { useAutomation } from '@/hooks/useAutomation';
import { ChurnPrediction, ClientRiskProfile } from '@/types/automation';
import { format } from 'date-fns';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const RISK_LEVELS = [
  { level: 'low', label: 'Bajo', color: 'bg-green-100 text-green-700', bgColor: '#dcfce7', textColor: '#15803d' },
  { level: 'medium', label: 'Medio', color: 'bg-yellow-100 text-yellow-700', bgColor: '#fef3c7', textColor: '#d97706' },
  { level: 'high', label: 'Alto', color: 'bg-red-100 text-red-700', bgColor: '#fee2e2', textColor: '#dc2626' },
  { level: 'critical', label: 'Crítico', color: 'bg-red-200 text-red-800', bgColor: '#fecaca', textColor: '#991b1b' }
];

const RETENTION_ACTIONS = [
  { id: 'discount', label: 'Ofrecer Descuento', icon: DollarSign, description: 'Descuento especial para retener al cliente' },
  { id: 'call', label: 'Llamada Personal', icon: Phone, description: 'Contacto directo del account manager' },
  { id: 'email', label: 'Email Personalizado', icon: Mail, description: 'Email con oferta o solución específica' },
  { id: 'upgrade', label: 'Propuesta de Upgrade', icon: TrendingUp, description: 'Ofrecer mejor plan con beneficios' },
  { id: 'support', label: 'Soporte Especializado', icon: MessageCircle, description: 'Asignar soporte técnico especializado' },
  { id: 'meeting', label: 'Reunión Estratégica', icon: Users, description: 'Meeting para entender necesidades' }
];

interface ClientRiskCardProps {
  client: ClientRiskProfile;
  onTakeAction: (clientId: string, action: string) => void;
}

const ClientRiskCard: React.FC<ClientRiskCardProps> = ({ client, onTakeAction }) => {
  const riskConfig = RISK_LEVELS.find(r => r.level === client.riskLevel);
  const [actionModalOpen, setActionModalOpen] = useState(false);

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="flex items-center space-x-2">
              <span>{client.name}</span>
              <Badge className={riskConfig?.color}>
                {riskConfig?.label} Riesgo
              </Badge>
            </CardTitle>
            <CardDescription>{client.email}</CardDescription>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold" style={{ color: riskConfig?.textColor }}>
              {Math.round(client.churnProbability * 100)}%
            </div>
            <div className="text-xs text-gray-500">Prob. Churn</div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {/* Risk Progress */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Riesgo de Churn</span>
              <span>{Math.round(client.churnProbability * 100)}%</span>
            </div>
            <Progress 
              value={client.churnProbability * 100} 
              className="h-2"
              // TODO: Add color based on risk level
            />
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600">MRR:</span>
              <span className="ml-2 font-medium">${client.mrr}</span>
            </div>
            <div>
              <span className="text-gray-600">Días como cliente:</span>
              <span className="ml-2 font-medium">{client.daysSinceSignup}</span>
            </div>
            <div>
              <span className="text-gray-600">Tickets abiertos:</span>
              <span className="ml-2 font-medium">{client.openTickets}</span>
            </div>
            <div>
              <span className="text-gray-600">Uso del servicio:</span>
              <span className="ml-2 font-medium">{client.serviceUsage}%</span>
            </div>
          </div>

          {/* Risk Factors */}
          <div>
            <span className="text-sm font-medium text-gray-600">Factores de Riesgo:</span>
            <div className="mt-1 flex flex-wrap gap-1">
              {Object.entries(client.factors).slice(0, 3).map(([key, value], index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {key}: {value}
                </Badge>
              ))}
              {Object.keys(client.factors).length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{Object.keys(client.factors).length - 3} más
                </Badge>
              )}
            </div>
          </div>

          {/* Recommended Actions */}
          <div>
            <span className="text-sm font-medium text-gray-600">Acción Recomendada:</span>
            <div className="mt-1">
              {client.recommendations.slice(0, 1).map((action, index) => {
                const actionConfig = RETENTION_ACTIONS.find(a => a.id === action.type);
                return (
                  <div key={index} className="flex items-center justify-between p-2 bg-blue-50 rounded text-sm">
                    <div className="flex items-center space-x-2">
                      {actionConfig?.icon && <actionConfig.icon className="h-4 w-4 text-blue-600" />}
                      <span>{action.description}</span>
                    </div>
                    <Button 
                      size="sm" 
                      onClick={() => onTakeAction(client.id, action.type)}
                    >
                      <Send className="h-3 w-3 mr-1" />
                      Ejecutar
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 pt-2 border-t">
            <Button size="sm" variant="outline">
              <Eye className="h-4 w-4 mr-1" />
              Ver Detalle
            </Button>
            <Button size="sm" variant="outline">
              <MessageCircle className="h-4 w-4 mr-1" />
              Contactar
            </Button>
            <Button 
              size="sm" 
              className="ml-auto"
              onClick={() => setActionModalOpen(true)}
            >
              <Target className="h-4 w-4 mr-1" />
              Acciones
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface ChurnInsightsProps {
  predictions: ChurnPrediction[];
}

const ChurnInsights: React.FC<ChurnInsightsProps> = ({ predictions }) => {
  // Mock data for charts
  const churnTrendData = [
    { month: 'Ene', churn: 5.2, prediction: 4.8 },
    { month: 'Feb', churn: 6.1, prediction: 5.4 },
    { month: 'Mar', churn: 4.8, prediction: 4.2 },
    { month: 'Abr', churn: 7.3, prediction: 6.8 },
    { month: 'May', churn: 5.9, prediction: 5.2 },
    { month: 'Jun', churn: 0, prediction: 4.9 }
  ];

  const riskDistributionData = [
    { name: 'Bajo Riesgo', value: 156, color: '#10b981' },
    { name: 'Riesgo Medio', value: 43, color: '#f59e0b' },
    { name: 'Alto Riesgo', value: 18, color: '#ef4444' },
    { name: 'Riesgo Crítico', value: 7, color: '#991b1b' }
  ];

  const factorImpactData = [
    { factor: 'Baja Actividad', impact: 85, clients: 23 },
    { factor: 'Tickets Sin Resolver', impact: 76, clients: 18 },
    { factor: 'Falta de Pagos', impact: 92, clients: 12 },
    { factor: 'Sin Engagement', impact: 67, clients: 31 },
    { factor: 'Soporte Frecuente', impact: 54, clients: 15 }
  ];

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Clientes en Riesgo</p>
                <p className="text-2xl font-bold text-red-600">68</p>
                <p className="text-xs text-red-500">+12% vs mes anterior</p>
              </div>
              <UserX className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Tasa de Churn Prevista</p>
                <p className="text-2xl font-bold text-orange-600">4.9%</p>
                <p className="text-xs text-green-500">-0.8% vs predicción anterior</p>
              </div>
              <TrendingDown className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Retención Potencial</p>
                <p className="text-2xl font-bold text-green-600">$45.2K</p>
                <p className="text-xs text-gray-500">MRR en riesgo</p>
              </div>
              <Shield className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Precisión del Modelo</p>
                <p className="text-2xl font-bold text-blue-600">87.3%</p>
                <p className="text-xs text-blue-500">Últimos 30 días</p>
              </div>
              <Brain className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Churn Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Tendencia de Churn vs Predicción</CardTitle>
            <CardDescription>Comparación entre churn real y predicciones de IA</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={churnTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="churn" 
                  stroke="#ef4444" 
                  strokeWidth={2}
                  name="Churn Real"
                />
                <Line 
                  type="monotone" 
                  dataKey="prediction" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Predicción IA"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Risk Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Distribución de Riesgo</CardTitle>
            <CardDescription>Clientes segmentados por nivel de riesgo de churn</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={riskDistributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {riskDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Factor Impact Analysis */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Análisis de Factores de Riesgo</CardTitle>
            <CardDescription>Impacto de diferentes factores en la probabilidad de churn</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={factorImpactData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="factor" type="category" width={120} />
                <Tooltip />
                <Bar dataKey="impact" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default function ChurnPredictionPage() {
  const { getChurnPredictions, executeRetentionAction } = useAutomation();
  const [predictions, setPredictions] = useState<ChurnPrediction[]>([]);
  const [clients, setClients] = useState<ClientRiskProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('at-risk');
  const [riskFilter, setRiskFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const loadPredictions = async () => {
    try {
      setLoading(true);
      const predictionsData = await getChurnPredictions();
      setPredictions(predictionsData);
      
      // Extract clients from predictions for demo
      const clientsData: ClientRiskProfile[] = predictionsData.map((prediction: ChurnPrediction) => ({
        id: prediction.clientId,
        clientId: prediction.clientId,
        name: `Cliente ${prediction.clientId.slice(-4)}`,
        email: `cliente${prediction.clientId.slice(-4)}@empresa.com`,
        riskScore: prediction.prediction.churnProbability * 100,
        riskLevel: prediction.prediction.churnProbability > 0.8 ? 'critical' : 
                  prediction.prediction.churnProbability > 0.6 ? 'high' : 
                  prediction.prediction.churnProbability > 0.4 ? 'medium' : 'low',
        
        // Información adicional del cliente
        mrr: Math.floor(Math.random() * 2000) + 500,
        daysSinceSignup: Math.floor(Math.random() * 365) + 30,
        openTickets: Math.floor(Math.random() * 5),
        serviceUsage: Math.floor(Math.random() * 100),
        lastActivity: new Date(),
        segment: 'enterprise',
        
        // Factores de riesgo
        factors: {
          paymentHistory: Math.floor(Math.random() * 100),
          supportTickets: Math.floor(Math.random() * 100),
          usagePattern: Math.floor(Math.random() * 100),
          contractLength: Math.floor(Math.random() * 100),
          satisfaction: Math.floor(Math.random() * 100)
        },
        
        // Predicciones
        churnProbability: prediction.prediction.churnProbability,
        
        // Recomendaciones
        recommendations: [
          {
            type: 'contact' as const,
            priority: 'high' as const,
            description: 'Contactar al cliente para revisar su satisfacción'
          }
        ],
        
        lastUpdated: prediction.updatedAt
      }));
      setClients(clientsData);
    } catch (error) {
      console.error('Error loading churn predictions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTakeAction = async (clientId: string, action: string) => {
    try {
      await executeRetentionAction(clientId, action);
      // Refresh data
      await loadPredictions();
    } catch (error) {
      console.error('Error executing retention action:', error);
    }
  };

  const filteredClients = clients.filter(client => {
    const matchesSearch = (client.name?.toLowerCase().includes(searchTerm.toLowerCase()) || false) ||
                         (client.email?.toLowerCase().includes(searchTerm.toLowerCase()) || false);
    const matchesRisk = riskFilter === 'all' || client.riskLevel === riskFilter;
    return matchesSearch && matchesRisk;
  });

  const atRiskClients = filteredClients.filter(client => 
    ['medium', 'high', 'critical'].includes(client.riskLevel)
  );

  useEffect(() => {
    loadPredictions();
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Predicción de Churn con IA</h1>
          <p className="text-muted-foreground">
            Identifica clientes en riesgo y ejecuta acciones de retención automáticamente
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
          <Button onClick={loadPredictions} disabled={loading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Actualizar
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="at-risk">Clientes en Riesgo</TabsTrigger>
          <TabsTrigger value="insights">Insights & Analytics</TabsTrigger>
          <TabsTrigger value="actions">Acciones de Retención</TabsTrigger>
        </TabsList>
        
        <TabsContent value="at-risk" className="space-y-6">
          {/* Filters */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Buscar clientes..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8"
                    />
                  </div>
                </div>
                
                <Select value={riskFilter} onValueChange={setRiskFilter}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los riesgos</SelectItem>
                    <SelectItem value="critical">Riesgo Crítico</SelectItem>
                    <SelectItem value="high">Riesgo Alto</SelectItem>
                    <SelectItem value="medium">Riesgo Medio</SelectItem>
                    <SelectItem value="low">Riesgo Bajo</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Filter className="h-4 w-4" />
                  <span>{filteredClients.length} clientes</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* At Risk Clients */}
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <RefreshCw className="h-8 w-8 animate-spin" />
            </div>
          ) : atRiskClients.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {atRiskClients.map(client => (
                <ClientRiskCard
                  key={client.id}
                  client={client}
                  onTakeAction={handleTakeAction}
                />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="flex items-center justify-center h-64">
                <div className="text-center text-gray-500">
                  <UserCheck className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p className="text-lg font-medium">No hay clientes en riesgo</p>
                  <p className="text-sm">Todos los clientes tienen bajo riesgo de churn</p>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <ChurnInsights predictions={predictions} />
        </TabsContent>

        <TabsContent value="actions" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {RETENTION_ACTIONS.map(action => (
              <Card key={action.id}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <action.icon className="h-5 w-5" />
                    <span>{action.label}</span>
                  </CardTitle>
                  <CardDescription>{action.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Ejecutadas:</span>
                        <span className="ml-2 font-medium">24</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Éxito:</span>
                        <span className="ml-2 font-medium text-green-600">67%</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Efectividad</span>
                        <span>67%</span>
                      </div>
                      <Progress value={67} className="h-2" />
                    </div>

                    <Button className="w-full" variant="outline">
                      <Settings className="h-4 w-4 mr-2" />
                      Configurar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}