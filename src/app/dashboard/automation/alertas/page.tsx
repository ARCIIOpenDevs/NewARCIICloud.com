'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  AlertTriangle,
  Bell,
  BellRing,
  Plus,
  Edit,
  Trash2,
  Play,
  Pause,
  Settings,
  Zap,
  TrendingUp,
  TrendingDown,
  Eye,
  Clock,
  CheckCircle,
  XCircle,
  RefreshCw,
  Brain,
  Mail,
  MessageCircle,
  Webhook,
  Smartphone
} from 'lucide-react';
import { useAutomation } from '@/hooks/useAutomation';
import { SmartAlert, AlertExecution } from '@/types/automation';
import { MetricType } from '@/types/analytics';
import { format } from 'date-fns';

const METRIC_OPTIONS = [
  { value: 'revenue' as MetricType, label: 'Revenue', icon: '💰' },
  { value: 'mrr' as MetricType, label: 'MRR', icon: '📈' },
  { value: 'active_clients' as MetricType, label: 'Clientes Activos', icon: '👥' },
  { value: 'churn_rate' as MetricType, label: 'Churn Rate', icon: '⚠️' },
  { value: 'customer_satisfaction' as MetricType, label: 'Satisfacción', icon: '⭐' },
  { value: 'tickets_resolved' as MetricType, label: 'Tickets Resueltos', icon: '🎫' }
];

const CONDITION_OPTIONS = [
  { value: 'above', label: 'Mayor que' },
  { value: 'below', label: 'Menor que' },
  { value: 'change_above', label: 'Incremento mayor a' },
  { value: 'change_below', label: 'Disminución mayor a' }
];

const NOTIFICATION_CHANNELS = [
  { value: 'email', label: 'Email', icon: Mail },
  { value: 'slack', label: 'Slack', icon: MessageCircle },
  { value: 'webhook', label: 'Webhook', icon: Webhook },
  { value: 'sms', label: 'SMS', icon: Smartphone },
  { value: 'in_app', label: 'In-App', icon: Bell }
];

interface CreateAlertDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAlertCreated: () => void;
}

const CreateAlertDialog: React.FC<CreateAlertDialogProps> = ({ 
  open, 
  onOpenChange, 
  onAlertCreated 
}) => {
  const { createSmartAlert } = useAutomation();
  const [loading, setLoading] = useState(false);
  const [alertConfig, setAlertConfig] = useState({
    name: '',
    description: '',
    trigger: {
      type: 'threshold' as const,
      metric: 'revenue' as MetricType,
      condition: 'above' as const,
      value: 0,
      percentage: 0,
      timeframe: 'daily' as const
    },
    ml: {
      enabled: false,
      sensitivity: 'medium' as const,
      learningPeriod: 30,
      seasonalAdjustment: true
    },
    notifications: {
      channels: [{
        type: 'email' as const,
        destination: '',
        priority: 'medium' as const
      }],
      cooldown: 60
    }
  });

  const handleCreateAlert = async () => {
    try {
      setLoading(true);
      await createSmartAlert({
        name: alertConfig.name,
        description: alertConfig.description,
        trigger: alertConfig.trigger,
        ml: alertConfig.ml,
        notifications: alertConfig.notifications,
        createdBy: 'current-user' // TODO: Get from auth
      });
      onAlertCreated();
      onOpenChange(false);
    } catch (error) {
      console.error('Error creating alert:', error);
    } finally {
      setLoading(false);
    }
  };

  const addNotificationChannel = () => {
    setAlertConfig(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        channels: [...prev.notifications.channels, {
          type: 'email',
          destination: '',
          priority: 'medium'
        }]
      }
    }));
  };

  const updateNotificationChannel = (index: number, updates: any) => {
    setAlertConfig(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        channels: prev.notifications.channels.map((channel, i) => 
          i === index ? { ...channel, ...updates } : channel
        )
      }
    }));
  };

  const removeNotificationChannel = (index: number) => {
    setAlertConfig(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        channels: prev.notifications.channels.filter((_, i) => i !== index)
      }
    }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Crear Alerta Inteligente</DialogTitle>
          <DialogDescription>
            Configura alertas automáticas basadas en métricas y detectores de anomalías con IA
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basic">Configuración Básica</TabsTrigger>
            <TabsTrigger value="ml">IA & Machine Learning</TabsTrigger>
            <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
          </TabsList>
          
          <TabsContent value="basic" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre de la Alerta</Label>
                <Input
                  id="name"
                  value={alertConfig.name}
                  onChange={(e) => setAlertConfig(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Ej: Revenue por debajo de meta"
                />
              </div>
              
              <div className="space-y-2">
                <Label>Métrica a Monitorear</Label>
                <Select 
                  value={alertConfig.trigger.metric} 
                  onValueChange={(value: MetricType) => 
                    setAlertConfig(prev => ({ 
                      ...prev, 
                      trigger: { ...prev.trigger, metric: value }
                    }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {METRIC_OPTIONS.map(metric => (
                      <SelectItem key={metric.value} value={metric.value}>
                        <span className="flex items-center space-x-2">
                          <span>{metric.icon}</span>
                          <span>{metric.label}</span>
                        </span>
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
                value={alertConfig.description}
                onChange={(e) => setAlertConfig(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Describe cuándo debe activarse esta alerta..."
                rows={3}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label>Condición</Label>
                <Select 
                  value={alertConfig.trigger.condition} 
                  onValueChange={(value: any) => 
                    setAlertConfig(prev => ({ 
                      ...prev, 
                      trigger: { ...prev.trigger, condition: value }
                    }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {CONDITION_OPTIONS.map(condition => (
                      <SelectItem key={condition.value} value={condition.value}>
                        {condition.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Valor</Label>
                <Input
                  type="number"
                  value={alertConfig.trigger.value || ''}
                  onChange={(e) => setAlertConfig(prev => ({ 
                    ...prev, 
                    trigger: { ...prev.trigger, value: parseFloat(e.target.value) || 0 }
                  }))}
                  placeholder="0"
                />
              </div>

              <div className="space-y-2">
                <Label>Frecuencia</Label>
                <Select 
                  value={alertConfig.trigger.timeframe} 
                  onValueChange={(value: any) => 
                    setAlertConfig(prev => ({ 
                      ...prev, 
                      trigger: { ...prev.trigger, timeframe: value }
                    }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="realtime">Tiempo Real</SelectItem>
                    <SelectItem value="hourly">Cada Hora</SelectItem>
                    <SelectItem value="daily">Diario</SelectItem>
                    <SelectItem value="weekly">Semanal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ml" className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch
                checked={alertConfig.ml.enabled}
                onCheckedChange={(checked) => 
                  setAlertConfig(prev => ({ 
                    ...prev, 
                    ml: { ...prev.ml, enabled: checked }
                  }))
                }
              />
              <Label>Habilitar detección de anomalías con IA</Label>
            </div>

            {alertConfig.ml.enabled && (
              <div className="space-y-6 p-4 border rounded-lg bg-blue-50">
                <div className="flex items-center space-x-2 text-blue-700">
                  <Brain className="h-5 w-5" />
                  <span className="font-medium">Configuración de Machine Learning</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label>Sensibilidad del Modelo</Label>
                    <div className="mt-2">
                      <Select 
                        value={alertConfig.ml.sensitivity} 
                        onValueChange={(value: any) => 
                          setAlertConfig(prev => ({ 
                            ...prev, 
                            ml: { ...prev.ml, sensitivity: value }
                          }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Baja - Menos alertas</SelectItem>
                          <SelectItem value="medium">Media - Balance recomendado</SelectItem>
                          <SelectItem value="high">Alta - Más sensible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <p className="text-xs text-blue-600 mt-1">
                      Mayor sensibilidad detecta más anomalías pero puede generar más falsos positivos
                    </p>
                  </div>

                  <div>
                    <Label>Período de Aprendizaje (días)</Label>
                    <div className="flex items-center space-x-4 mt-2">
                      <Slider
                        value={[alertConfig.ml.learningPeriod]}
                        onValueChange={([value]) => 
                          setAlertConfig(prev => ({ 
                            ...prev, 
                            ml: { ...prev.ml, learningPeriod: value }
                          }))
                        }
                        max={90}
                        min={7}
                        step={1}
                        className="flex-1"
                      />
                      <div className="w-16 text-center font-medium">
                        {alertConfig.ml.learningPeriod} días
                      </div>
                    </div>
                    <p className="text-xs text-blue-600 mt-1">
                      Tiempo que el modelo necesita para aprender patrones normales
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={alertConfig.ml.seasonalAdjustment}
                      onCheckedChange={(checked) => 
                        setAlertConfig(prev => ({ 
                          ...prev, 
                          ml: { ...prev.ml, seasonalAdjustment: checked }
                        }))
                      }
                    />
                    <Label>Ajuste estacional</Label>
                    <p className="text-xs text-blue-600 ml-2">
                      Considera patrones por día de semana, mes, etc.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Canales de Notificación</Label>
                <Button 
                  size="sm" 
                  onClick={addNotificationChannel}
                  variant="outline"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Agregar Canal
                </Button>
              </div>

              {alertConfig.notifications.channels.map((channel, index) => (
                <div key={index} className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Canal {index + 1}</span>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      onClick={() => removeNotificationChannel(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="grid gap-3 md:grid-cols-3">
                    <div>
                      <Label>Tipo</Label>
                      <Select 
                        value={channel.type} 
                        onValueChange={(value) => 
                          updateNotificationChannel(index, { type: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {NOTIFICATION_CHANNELS.map(nc => (
                            <SelectItem key={nc.value} value={nc.value}>
                              <span className="flex items-center space-x-2">
                                <nc.icon className="h-4 w-4" />
                                <span>{nc.label}</span>
                              </span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Destino</Label>
                      <Input
                        value={channel.destination}
                        onChange={(e) => 
                          updateNotificationChannel(index, { destination: e.target.value })
                        }
                        placeholder={
                          channel.type === 'email' ? 'usuario@empresa.com' :
                          channel.type === 'slack' ? '#canal-alertas' :
                          channel.type === 'webhook' ? 'https://webhook.url' :
                          channel.type === 'sms' ? '+52 55 1234 5678' :
                          'ID de usuario'
                        }
                      />
                    </div>

                    <div>
                      <Label>Prioridad</Label>
                      <Select 
                        value={channel.priority} 
                        onValueChange={(value) => 
                          updateNotificationChannel(index, { priority: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Baja</SelectItem>
                          <SelectItem value="medium">Media</SelectItem>
                          <SelectItem value="high">Alta</SelectItem>
                          <SelectItem value="critical">Crítica</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              ))}

              <div>
                <Label>Cooldown entre Alertas (minutos)</Label>
                <div className="flex items-center space-x-4 mt-2">
                  <Slider
                    value={[alertConfig.notifications.cooldown]}
                    onValueChange={([value]) => 
                      setAlertConfig(prev => ({ 
                        ...prev, 
                        notifications: { ...prev.notifications, cooldown: value }
                      }))
                    }
                    max={1440}
                    min={1}
                    step={1}
                    className="flex-1"
                  />
                  <div className="w-24 text-center font-medium">
                    {alertConfig.notifications.cooldown} min
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Tiempo mínimo entre alertas para evitar spam
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button 
            onClick={handleCreateAlert} 
            disabled={loading || !alertConfig.name || alertConfig.notifications.channels.length === 0}
          >
            {loading ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Creando...
              </>
            ) : (
              <>
                <Plus className="h-4 w-4 mr-2" />
                Crear Alerta
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

interface AlertCardProps {
  alert: SmartAlert;
  onToggleStatus: (alertId: string, status: 'active' | 'paused') => void;
  onDelete: (alertId: string) => void;
}

const AlertCard: React.FC<AlertCardProps> = ({ alert, onToggleStatus, onDelete }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'paused': return 'bg-yellow-100 text-yellow-700';
      case 'disabled': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getMetricIcon = (metric: MetricType) => {
    const metricConfig = METRIC_OPTIONS.find(m => m.value === metric);
    return metricConfig?.icon || '📊';
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="flex items-center space-x-2">
              <span>{getMetricIcon(alert.trigger.metric)}</span>
              <span>{alert.name}</span>
            </CardTitle>
            <CardDescription>{alert.description}</CardDescription>
          </div>
          
          <div className="flex items-center space-x-2">
            <Badge className={getStatusColor(alert.status)}>
              {alert.status === 'active' ? 'Activa' : 
               alert.status === 'paused' ? 'Pausada' : 'Deshabilitada'}
            </Badge>
            
            {alert.ml.enabled && (
              <Badge variant="outline" className="text-blue-600">
                <Brain className="h-3 w-3 mr-1" />
                IA
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {/* Trigger Configuration */}
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Condición:</span>
            <span className="font-medium">
              {alert.trigger.metric} {alert.trigger.condition.replace('_', ' ')} {alert.trigger.value}
            </span>
          </div>

          {/* Notification Channels */}
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Notificaciones:</span>
            <div className="flex space-x-1">
              {alert.notifications.channels.map((channel, index) => {
                const ChannelIcon = NOTIFICATION_CHANNELS.find(nc => nc.value === channel.type)?.icon || Bell;
                return (
                  <div key={index} className="p-1 bg-gray-100 rounded">
                    <ChannelIcon className="h-3 w-3" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Activaciones:</span>
              <span className="ml-2 font-medium">{alert.triggerCount}</span>
            </div>
            <div>
              <span className="text-gray-600">Última:</span>
              <span className="ml-2 font-medium">
                {alert.lastTriggered 
                  ? format(alert.lastTriggered.toDate(), 'dd/MM HH:mm')
                  : 'Nunca'
                }
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2 pt-2 border-t">
            <Button
              size="sm"
              variant={alert.status === 'active' ? 'outline' : 'default'}
              onClick={() => onToggleStatus(alert.id, alert.status === 'active' ? 'paused' : 'active')}
            >
              {alert.status === 'active' ? (
                <>
                  <Pause className="h-4 w-4 mr-1" />
                  Pausar
                </>
              ) : (
                <>
                  <Play className="h-4 w-4 mr-1" />
                  Activar
                </>
              )}
            </Button>
            
            <Button size="sm" variant="outline">
              <Edit className="h-4 w-4 mr-1" />
              Editar
            </Button>
            
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => onDelete(alert.id)}
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Eliminar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function SmartAlertsPage() {
  const { getActiveAlerts, updateSmartAlert, deleteSmartAlert } = useAutomation();
  const [alerts, setAlerts] = useState<SmartAlert[]>([]);
  const [loading, setLoading] = useState(true);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);

  const loadAlerts = async () => {
    try {
      setLoading(true);
      const alertsData = await getActiveAlerts();
      setAlerts(alertsData);
    } catch (error) {
      console.error('Error loading alerts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleStatus = async (alertId: string, status: 'active' | 'paused') => {
    try {
      await updateSmartAlert(alertId, { status });
      await loadAlerts();
    } catch (error) {
      console.error('Error updating alert:', error);
    }
  };

  const handleDeleteAlert = async (alertId: string) => {
    try {
      await deleteSmartAlert(alertId);
      await loadAlerts();
    } catch (error) {
      console.error('Error deleting alert:', error);
    }
  };

  useEffect(() => {
    loadAlerts();
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Alertas Inteligentes</h1>
          <p className="text-muted-foreground">
            Monitoreo automático con detección de anomalías basada en IA
          </p>
        </div>
        
        <Button onClick={() => setCreateDialogOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Nueva Alerta
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Alertas</p>
                <p className="text-2xl font-bold">{alerts.length}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Activas</p>
                <p className="text-2xl font-bold text-green-600">
                  {alerts.filter(a => a.status === 'active').length}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Con IA</p>
                <p className="text-2xl font-bold text-purple-600">
                  {alerts.filter(a => a.ml.enabled).length}
                </p>
              </div>
              <Brain className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Activaciones Hoy</p>
                <p className="text-2xl font-bold">24</p>
              </div>
              <Zap className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts Grid */}
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <RefreshCw className="h-8 w-8 animate-spin" />
        </div>
      ) : alerts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {alerts.map(alert => (
            <AlertCard
              key={alert.id}
              alert={alert}
              onToggleStatus={handleToggleStatus}
              onDelete={handleDeleteAlert}
            />
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="flex items-center justify-center h-64">
            <div className="text-center text-gray-500">
              <AlertTriangle className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p className="text-lg font-medium">No hay alertas configuradas</p>
              <p className="text-sm mb-4">Crea tu primera alerta inteligente para monitorear métricas clave</p>
              <Button onClick={() => setCreateDialogOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Crear Primera Alerta
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Create Alert Dialog */}
      <CreateAlertDialog
        open={createDialogOpen}
        onOpenChange={setCreateDialogOpen}
        onAlertCreated={loadAlerts}
      />
    </div>
  );
}