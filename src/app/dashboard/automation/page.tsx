'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { 
  Bot,
  Zap,
  AlertTriangle,
  Workflow,
  Brain,
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  Clock,
  CheckCircle,
  XCircle,
  RefreshCw,
  Settings,
  Activity,
  Mail,
  MessageCircle,
  Phone,
  Target,
  Shield,
  BarChart3,
  Calendar,
  ArrowRight,
  Plus,
  Eye,
  UserX,
  Star
} from 'lucide-react';
import { useAutomation } from '@/hooks/useAutomation';
import { SmartAlert, AutomatedWorkflow, ChurnPrediction } from '@/types/automation';
import { format } from 'date-fns';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Mock data for overview
const automationMetrics = {
  alertsTriggered: 156,
  workflowsExecuted: 1247,
  churnPrevented: 23,
  timeSaved: 45.6,
  costSavings: 12540,
  accuracy: 89.3
};

const recentActivity = [
  {
    id: 1,
    type: 'alert',
    title: 'Revenue Alert Triggered',
    description: 'Revenue dropped 15% below threshold',
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
    status: 'active',
    priority: 'high'
  },
  {
    id: 2,
    type: 'workflow',
    title: 'Welcome Sequence Executed',
    description: 'New client onboarding workflow completed',
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    status: 'completed',
    priority: 'medium'
  },
  {
    id: 3,
    type: 'churn',
    title: 'High Risk Client Identified',
    description: 'Client ABC Corp flagged for retention action',
    timestamp: new Date(Date.now() - 1000 * 60 * 45),
    status: 'pending',
    priority: 'critical'
  },
  {
    id: 4,
    type: 'workflow',
    title: 'Payment Reminder Sent',
    description: 'Automated payment reminder to 15 clients',
    timestamp: new Date(Date.now() - 1000 * 60 * 60),
    status: 'completed',
    priority: 'low'
  }
];

const performanceData = [
  { month: 'Ene', alerts: 120, workflows: 890, churn_prevented: 18, time_saved: 38.2 },
  { month: 'Feb', alerts: 145, workflows: 1034, churn_prevented: 21, time_saved: 41.7 },
  { month: 'Mar', alerts: 132, workflows: 976, churn_prevented: 19, time_saved: 39.8 },
  { month: 'Abr', alerts: 156, workflows: 1247, churn_prevented: 23, time_saved: 45.6 },
  { month: 'May', alerts: 0, workflows: 0, churn_prevented: 0, time_saved: 0 },
  { month: 'Jun', alerts: 0, workflows: 0, churn_prevented: 0, time_saved: 0 }
];

const alertDistributionData = [
  { name: 'Revenue', value: 35, color: '#3b82f6' },
  { name: 'Clientes', value: 28, color: '#10b981' },
  { name: 'Soporte', value: 22, color: '#f59e0b' },
  { name: 'Sistema', value: 15, color: '#ef4444' }
];

const workflowEfficiencyData = [
  { name: 'Bienvenida', efficiency: 94, executions: 156 },
  { name: 'Seguimiento', efficiency: 87, executions: 298 },
  { name: 'Retención', efficiency: 92, executions: 89 },
  { name: 'Soporte', efficiency: 78, executions: 234 },
  { name: 'Ventas', efficiency: 85, executions: 167 }
];

interface AutomationCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  href: string;
  stats: {
    primary: string;
    secondary?: string;
    trend?: 'up' | 'down' | 'neutral';
  };
  status: 'active' | 'warning' | 'success' | 'disabled';
}

const AutomationCard: React.FC<AutomationCardProps> = ({
  title,
  description,
  icon: Icon,
  href,
  stats,
  status
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-blue-100 text-blue-700';
      case 'warning': return 'bg-yellow-100 text-yellow-700';
      case 'success': return 'bg-green-100 text-green-700';
      case 'disabled': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getTrendColor = (trend?: string) => {
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const TrendIcon = stats.trend === 'up' ? TrendingUp : 
                   stats.trend === 'down' ? TrendingDown : 
                   Activity;

  return (
    <Link href={href}>
      <Card className="hover:shadow-md transition-all cursor-pointer group">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Icon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <CardTitle className="group-hover:text-blue-600 transition-colors">
                  {title}
                </CardTitle>
                <CardDescription>{description}</CardDescription>
              </div>
            </div>
            <Badge className={getStatusColor(status)}>
              {status === 'active' ? 'Activo' : 
               status === 'warning' ? 'Atención' : 
               status === 'success' ? 'Óptimo' : 'Inactivo'}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-2xl font-bold">{stats.primary}</div>
              {stats.secondary && (
                <div className={`flex items-center space-x-1 text-sm ${getTrendColor(stats.trend)}`}>
                  <TrendIcon className="h-3 w-3" />
                  <span>{stats.secondary}</span>
                </div>
              )}
            </div>
            <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

interface ActivityItemProps {
  activity: {
    id: number;
    type: string;
    title: string;
    description: string;
    timestamp: Date;
    status: string;
    priority: string;
  };
}

const ActivityItem: React.FC<ActivityItemProps> = ({ activity }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'alert': return AlertTriangle;
      case 'workflow': return Workflow;
      case 'churn': return UserX;
      default: return Activity;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600';
      case 'active': return 'text-blue-600';
      case 'pending': return 'text-yellow-600';
      case 'failed': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-700';
      case 'high': return 'bg-orange-100 text-orange-700';
      case 'medium': return 'bg-blue-100 text-blue-700';
      case 'low': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const Icon = getIcon(activity.type);

  return (
    <div className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
      <div className={`p-2 rounded-full ${getStatusColor(activity.status)} bg-opacity-10`}>
        <Icon className={`h-4 w-4 ${getStatusColor(activity.status)}`} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900 truncate">
            {activity.title}
          </p>
          <Badge className={getPriorityColor(activity.priority)}>
            {activity.priority}
          </Badge>
        </div>
        <p className="text-sm text-gray-500 truncate mt-1">
          {activity.description}
        </p>
        <p className="text-xs text-gray-400 mt-1">
          {format(activity.timestamp, 'HH:mm dd/MM/yyyy')}
        </p>
      </div>
    </div>
  );
};

export default function AutomationDashboard() {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Centro de Automatización</h1>
          <p className="text-muted-foreground">
            Gestiona alertas inteligentes, workflows y IA para optimizar tu negocio
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Configuración
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Nueva Automatización
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Alertas Disparadas</p>
                <p className="text-2xl font-bold">{automationMetrics.alertsTriggered}</p>
                <p className="text-xs text-green-500">+12% vs mes anterior</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Workflows Ejecutados</p>
                <p className="text-2xl font-bold">{automationMetrics.workflowsExecuted}</p>
                <p className="text-xs text-green-500">+8% vs mes anterior</p>
              </div>
              <Workflow className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Churn Prevenido</p>
                <p className="text-2xl font-bold">{automationMetrics.churnPrevented}</p>
                <p className="text-xs text-green-500">92% efectividad</p>
              </div>
              <Shield className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Tiempo Ahorrado</p>
                <p className="text-2xl font-bold">{automationMetrics.timeSaved}h</p>
                <p className="text-xs text-blue-500">Este mes</p>
              </div>
              <Clock className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Vista General</TabsTrigger>
          <TabsTrigger value="performance">Rendimiento</TabsTrigger>
          <TabsTrigger value="activity">Actividad Reciente</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          {/* Automation Modules */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AutomationCard
              title="Alertas Inteligentes"
              description="Monitoreo automático con IA"
              icon={AlertTriangle}
              href="/dashboard/automation/alertas"
              stats={{
                primary: "24 Activas",
                secondary: "+3 esta semana",
                trend: "up"
              }}
              status="active"
            />

            <AutomationCard
              title="Workflows Automatizados"
              description="Flujos de trabajo inteligentes"
              icon={Workflow}
              href="/dashboard/automation/workflows"
              stats={{
                primary: "12 Workflows",
                secondary: "87% eficiencia",
                trend: "up"
              }}
              status="success"
            />

            <AutomationCard
              title="Predicción de Churn"
              description="IA para prevenir cancelaciones"
              icon={UserX}
              href="/dashboard/automation/churn-prediction"
              stats={{
                primary: "68 En Riesgo",
                secondary: "4.9% tasa prevista",
                trend: "down"
              }}
              status="warning"
            />

            <AutomationCard
              title="Respuestas Automáticas"
              description="Soporte inteligente 24/7"
              icon={MessageCircle}
              href="/dashboard/automation/auto-respuestas"
              stats={{
                primary: "156 Resueltos",
                secondary: "78% satisfacción",
                trend: "up"
              }}
              status="active"
            />

            <AutomationCard
              title="Email Sequences"
              description="Campañas automatizadas"
              icon={Mail}
              href="/dashboard/automation/email-sequences"
              stats={{
                primary: "8 Secuencias",
                secondary: "87% entrega",
                trend: "up"
              }}
              status="success"
            />

            <AutomationCard
              title="Lead Scoring"
              description="Calificación automática de leads"
              icon={Target}
              href="/dashboard/automation/lead-scoring"
              stats={{
                primary: "234 Leads",
                secondary: "42 calificados",
                trend: "neutral"
              }}
              status="active"
            />
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Performance Trends */}
            <Card>
              <CardHeader>
                <CardTitle>Tendencias de Automatización</CardTitle>
                <CardDescription>Evolución mensual de métricas clave</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="alerts" 
                      stroke="#f59e0b" 
                      strokeWidth={2}
                      name="Alertas"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="workflows" 
                      stroke="#3b82f6" 
                      strokeWidth={2}
                      name="Workflows"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="churn_prevented" 
                      stroke="#10b981" 
                      strokeWidth={2}
                      name="Churn Prevenido"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Alert Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Distribución de Alertas</CardTitle>
                <CardDescription>Tipos de alertas más frecuentes</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={alertDistributionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {alertDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Workflow Efficiency */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Eficiencia de Workflows</CardTitle>
                <CardDescription>Rendimiento por tipo de workflow</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={workflowEfficiencyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="efficiency" fill="#3b82f6" name="Eficiencia %" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Actividad Reciente</CardTitle>
                  <CardDescription>Últimas acciones de automatización</CardDescription>
                </div>
                <Button size="sm" variant="outline">
                  <Eye className="h-4 w-4 mr-2" />
                  Ver Todo
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {recentActivity.map(activity => (
                  <ActivityItem key={activity.id} activity={activity} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}