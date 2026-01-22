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
  Workflow,
  Plus,
  Play,
  Pause,
  Edit,
  Trash2,
  Settings,
  ArrowRight,
  ArrowDown,
  CheckCircle,
  Clock,
  AlertTriangle,
  Zap,
  Send,
  User,
  Calendar,
  Database,
  Mail,
  MessageSquare,
  Phone,
  DollarSign,
  Target,
  Users,
  RefreshCw,
  Brain,
  Copy,
  Eye,
  BarChart3
} from 'lucide-react';
import { useAutomation } from '@/hooks/useAutomation';
import { AutomatedWorkflow, WorkflowExecution, WorkflowStep } from '@/types/automation';
import { format } from 'date-fns';

const TRIGGER_TYPES = [
  { value: 'metric_change', label: 'Cambio en Métrica', icon: BarChart3 },
  { value: 'new_client', label: 'Nuevo Cliente', icon: User },
  { value: 'client_churn', label: 'Cliente Perdido', icon: AlertTriangle },
  { value: 'ticket_created', label: 'Ticket Creado', icon: MessageSquare },
  { value: 'payment_received', label: 'Pago Recibido', icon: DollarSign },
  { value: 'signup', label: 'Nuevo Registro', icon: Users },
  { value: 'milestone', label: 'Hito Alcanzado', icon: Target },
  { value: 'schedule', label: 'Programado', icon: Calendar }
];

const ACTION_TYPES = [
  { value: 'email', label: 'Enviar Email', icon: Mail },
  { value: 'send_sms', label: 'Enviar SMS', icon: Phone },
  { value: 'create_task', label: 'Crear Tarea', icon: CheckCircle },
  { value: 'update_client', label: 'Actualizar Cliente', icon: User },
  { value: 'add_tag', label: 'Agregar Etiqueta', icon: Target },
  { value: 'create_opportunity', label: 'Crear Oportunidad', icon: DollarSign },
  { value: 'webhook', label: 'Webhook', icon: Zap },
  { value: 'delay', label: 'Esperar', icon: Clock },
  { value: 'condition', label: 'Condición', icon: ArrowRight }
];

interface WorkflowBuilderProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onWorkflowCreated: () => void;
}

const WorkflowBuilder: React.FC<WorkflowBuilderProps> = ({ 
  open, 
  onOpenChange, 
  onWorkflowCreated 
}) => {
  const { createWorkflow } = useAutomation();
  const [loading, setLoading] = useState(false);
  const [workflowConfig, setWorkflowConfig] = useState({
    name: '',
    description: '',
    triggers: [{
      type: 'event' as const,
      event: 'client_created',
    }],
    steps: [] as WorkflowStep[]
  });

  const addStep = (type: string) => {
    const newStep: WorkflowStep = {
      id: `step_${Date.now()}`,
      type: type as any,
      name: `${ACTION_TYPES.find(a => a.value === type)?.label || 'Acción'} ${workflowConfig.steps.length + 1}`,
      config: {},
      conditions: undefined,
      order: workflowConfig.steps.length
    };
    
    setWorkflowConfig(prev => ({
      ...prev,
      steps: [...prev.steps, newStep]
    }));
  };

  const updateStep = (stepId: string, updates: Partial<WorkflowStep>) => {
    setWorkflowConfig(prev => ({
      ...prev,
      steps: prev.steps.map(step => 
        step.id === stepId ? { ...step, ...updates } : step
      )
    }));
  };

  const removeStep = (stepId: string) => {
    setWorkflowConfig(prev => ({
      ...prev,
      steps: prev.steps.filter(step => step.id !== stepId)
    }));
  };

  const moveStep = (stepId: string, direction: 'up' | 'down') => {
    setWorkflowConfig(prev => {
      const steps = [...prev.steps];
      const currentIndex = steps.findIndex(s => s.id === stepId);
      const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
      
      if (newIndex >= 0 && newIndex < steps.length) {
        [steps[currentIndex], steps[newIndex]] = [steps[newIndex], steps[currentIndex]];
        steps.forEach((step, index) => {
          step.order = index;
        });
      }
      
      return { ...prev, steps };
    });
  };

  const handleCreateWorkflow = async () => {
    try {
      setLoading(true);
      await createWorkflow({
        name: workflowConfig.name,
        description: workflowConfig.description,
        category: 'operations' as const,
        status: 'draft' as const,
        triggers: workflowConfig.triggers,
        steps: workflowConfig.steps,
        settings: {
          maxConcurrentExecutions: 10,
          timeout: 3600,
          retryPolicy: 'exponential' as const,
          logging: true
        },
        createdBy: 'current-user' // TODO: Get from auth
      });
      onWorkflowCreated();
      onOpenChange(false);
    } catch (error) {
      console.error('Error creating workflow:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Constructor de Workflows</DialogTitle>
          <DialogDescription>
            Diseña flujos de trabajo automatizados para optimizar procesos de negocio
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Configuration Panel */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-medium">Configuración Básica</h3>
              
              <div className="space-y-2">
                <Label htmlFor="workflow-name">Nombre del Workflow</Label>
                <Input
                  id="workflow-name"
                  value={workflowConfig.name}
                  onChange={(e) => setWorkflowConfig(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Ej: Bienvenida nuevo cliente"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="workflow-description">Descripción</Label>
                <Textarea
                  id="workflow-description"
                  value={workflowConfig.description}
                  onChange={(e) => setWorkflowConfig(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Describe qué hace este workflow..."
                  rows={3}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Trigger</h3>
              <Select 
                value={workflowConfig.triggers[0]?.event || 'client_created'} 
                onValueChange={(value: any) => 
                  setWorkflowConfig(prev => ({ 
                    ...prev, 
                    triggers: [{ 
                      type: 'event' as const, 
                      event: value 
                    }]
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {TRIGGER_TYPES.map(trigger => (
                    <SelectItem key={trigger.value} value={trigger.value}>
                      <span className="flex items-center space-x-2">
                        <trigger.icon className="h-4 w-4" />
                        <span>{trigger.label}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Acciones Disponibles</h3>
              <div className="grid gap-2">
                {ACTION_TYPES.map(action => (
                  <Button
                    key={action.value}
                    variant="outline"
                    size="sm"
                    className="justify-start"
                    onClick={() => addStep(action.value)}
                  >
                    <action.icon className="h-4 w-4 mr-2" />
                    {action.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Workflow Canvas */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Canvas del Workflow</h3>
              <Badge variant="outline">
                {workflowConfig.steps.length} paso{workflowConfig.steps.length !== 1 ? 's' : ''}
              </Badge>
            </div>

            <div className="p-4 border-2 border-dashed rounded-lg min-h-[400px]">
              {/* Trigger Step */}
              <div className="mb-4">
                <div className="flex items-center space-x-4 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    {TRIGGER_TYPES.find(t => t.value === workflowConfig.triggers[0]?.event)?.icon && (
                      React.createElement(TRIGGER_TYPES.find(t => t.value === workflowConfig.triggers[0]?.event)!.icon, {
                        className: "h-4 w-4 text-white"
                      })
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-blue-900">
                      {TRIGGER_TYPES.find(t => t.value === workflowConfig.triggers[0]?.event)?.label}
                    </h4>
                    <p className="text-sm text-blue-700">Disparador del workflow</p>
                  </div>
                </div>
                {workflowConfig.steps.length > 0 && (
                  <div className="flex justify-center my-2">
                    <ArrowDown className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>

              {/* Workflow Steps */}
              {workflowConfig.steps.map((step, index) => (
                <div key={step.id} className="mb-4">
                  <div className="flex items-center space-x-4 p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-medium">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        {ACTION_TYPES.find(a => a.value === step.type)?.icon && (
                          React.createElement(ACTION_TYPES.find(a => a.value === step.type)!.icon, {
                            className: "h-4 w-4"
                          })
                        )}
                        <Input
                          value={step.name}
                          onChange={(e) => updateStep(step.id, { name: e.target.value })}
                          className="font-medium border-none p-0 h-auto"
                        />
                      </div>
                      
                      {/* Step Configuration */}
                      <div className="mt-2 space-y-2">
                        {step.type === 'email' && (
                          <div className="grid gap-2">
                            <Input
                              placeholder="Destinatario (email o campo)"
                              value={step.config.to || ''}
                              onChange={(e) => updateStep(step.id, { 
                                config: { ...step.config, to: e.target.value }
                              })}
                            />
                            <Input
                              placeholder="Asunto del email"
                              value={step.config.subject || ''}
                              onChange={(e) => updateStep(step.id, { 
                                config: { ...step.config, subject: e.target.value }
                              })}
                            />
                          </div>
                        )}
                        
                        {step.type === 'delay' && (
                          <div className="grid gap-2 grid-cols-2">
                            <Input
                              type="number"
                              placeholder="Cantidad"
                              value={step.config.duration || ''}
                              onChange={(e) => updateStep(step.id, { 
                                config: { ...step.config, duration: parseInt(e.target.value) }
                              })}
                            />
                            <Select 
                              value={step.config.unit || 'minutes'} 
                              onValueChange={(value) => updateStep(step.id, { 
                                config: { ...step.config, unit: value as 'minutes' | 'hours' | 'days' }
                              })}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="minutes">Minutos</SelectItem>
                                <SelectItem value="hours">Horas</SelectItem>
                                <SelectItem value="days">Días</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        )}
                        
                        {step.type === 'add_tag' && (
                          <Input
                            placeholder="Nombre de la etiqueta"
                            value={step.config.tag || ''}
                            onChange={(e) => updateStep(step.id, { 
                              config: { ...step.config, tag: e.target.value }
                            })}
                          />
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => moveStep(step.id, 'up')}
                        disabled={index === 0}
                      >
                        ↑
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => moveStep(step.id, 'down')}
                        disabled={index === workflowConfig.steps.length - 1}
                      >
                        ↓
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeStep(step.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  {index < workflowConfig.steps.length - 1 && (
                    <div className="flex justify-center my-2">
                      <ArrowDown className="h-6 w-6 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}

              {workflowConfig.steps.length === 0 && (
                <div className="text-center text-gray-500 py-12">
                  <Workflow className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>Arrastra acciones aquí para crear tu workflow</p>
                  <p className="text-sm">O haz clic en las acciones de la izquierda</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button 
            onClick={handleCreateWorkflow} 
            disabled={loading || !workflowConfig.name || workflowConfig.steps.length === 0}
          >
            {loading ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Creando...
              </>
            ) : (
              <>
                <Plus className="h-4 w-4 mr-2" />
                Crear Workflow
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

interface WorkflowCardProps {
  workflow: AutomatedWorkflow;
  onToggleStatus: (workflowId: string, status: 'active' | 'paused') => void;
  onDelete: (workflowId: string) => void;
  onViewExecutions: (workflowId: string) => void;
}

const WorkflowCard: React.FC<WorkflowCardProps> = ({ 
  workflow, 
  onToggleStatus, 
  onDelete, 
  onViewExecutions 
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'paused': return 'bg-yellow-100 text-yellow-700';
      case 'disabled': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getTriggerIcon = (triggerType: string) => {
    const trigger = TRIGGER_TYPES.find(t => t.value === triggerType);
    return trigger?.icon || Workflow;
  };

  const TriggerIcon = getTriggerIcon(workflow.triggers[0]?.type || 'manual');

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="flex items-center space-x-2">
              <TriggerIcon className="h-5 w-5" />
              <span>{workflow.name}</span>
            </CardTitle>
            <CardDescription>{workflow.description}</CardDescription>
          </div>
          
          <Badge className={getStatusColor(workflow.status)}>
            {workflow.status === 'active' ? 'Activo' : 
             workflow.status === 'paused' ? 'Pausado' : 'Deshabilitado'}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {/* Workflow Steps Preview */}
          <div className="space-y-2">
            <span className="text-sm font-medium text-gray-600">
              {workflow.steps.length} paso{workflow.steps.length !== 1 ? 's' : ''}:
            </span>
            <div className="flex flex-wrap gap-1">
              {workflow.steps.slice(0, 3).map((step, index) => {
                const ActionIcon = ACTION_TYPES.find(a => a.value === step.type)?.icon || CheckCircle;
                return (
                  <div key={step.id} className="flex items-center space-x-1 px-2 py-1 bg-gray-100 rounded text-xs">
                    <ActionIcon className="h-3 w-3" />
                    <span>{ACTION_TYPES.find(a => a.value === step.type)?.label}</span>
                  </div>
                );
              })}
              {workflow.steps.length > 3 && (
                <div className="px-2 py-1 bg-gray-100 rounded text-xs">
                  +{workflow.steps.length - 3} más
                </div>
              )}
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Ejecutado:</span>
              <span className="ml-2 font-medium">{workflow.executionCount} veces</span>
            </div>
            <div>
              <span className="text-gray-600">Última ejecución:</span>
              <span className="ml-2 font-medium">
                {/* TODO: Implementar fecha de última ejecución desde WorkflowExecution */}
                Nunca
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2 pt-2 border-t">
            <Button
              size="sm"
              variant={workflow.status === 'active' ? 'outline' : 'default'}
              onClick={() => onToggleStatus(workflow.id, workflow.status === 'active' ? 'paused' : 'active')}
            >
              {workflow.status === 'active' ? (
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
            
            <Button size="sm" variant="outline" onClick={() => onViewExecutions(workflow.id)}>
              <Eye className="h-4 w-4 mr-1" />
              Ver Ejecuciones
            </Button>
            
            <Button size="sm" variant="outline">
              <Copy className="h-4 w-4 mr-1" />
              Duplicar
            </Button>
            
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => onDelete(workflow.id)}
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

export default function WorkflowsPage() {
  const { getActiveWorkflows, deleteWorkflow } = useAutomation();
  const [workflows, setWorkflows] = useState<AutomatedWorkflow[]>([]);
  const [loading, setLoading] = useState(true);
  const [builderOpen, setBuilderOpen] = useState(false);

  const loadWorkflows = async () => {
    try {
      setLoading(true);
      const workflowsData = await getActiveWorkflows();
      setWorkflows(workflowsData);
    } catch (error) {
      console.error('Error loading workflows:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleStatus = async (workflowId: string, status: 'active' | 'paused') => {
    try {
      // TODO: Implement updateWorkflow function
      console.log('Toggling workflow status:', workflowId, status);
      await loadWorkflows();
    } catch (error) {
      console.error('Error updating workflow:', error);
    }
  };

  const handleDeleteWorkflow = async (workflowId: string) => {
    try {
      await deleteWorkflow(workflowId);
      await loadWorkflows();
    } catch (error) {
      console.error('Error deleting workflow:', error);
    }
  };

  const handleViewExecutions = (workflowId: string) => {
    // TODO: Navigate to executions view
    console.log('View executions for:', workflowId);
  };

  useEffect(() => {
    loadWorkflows();
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Workflows Automatizados</h1>
          <p className="text-muted-foreground">
            Automatiza procesos de negocio con flujos de trabajo inteligentes
          </p>
        </div>
        
        <Button onClick={() => setBuilderOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Workflow
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Workflows</p>
                <p className="text-2xl font-bold">{workflows.length}</p>
              </div>
              <Workflow className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Activos</p>
                <p className="text-2xl font-bold text-green-600">
                  {workflows.filter(w => w.status === 'active').length}
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
                <p className="text-sm font-medium text-gray-600">Ejecuciones Hoy</p>
                <p className="text-2xl font-bold text-purple-600">156</p>
              </div>
              <Zap className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Tiempo Ahorrado</p>
                <p className="text-2xl font-bold">12.5h</p>
              </div>
              <Clock className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Workflows Grid */}
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <RefreshCw className="h-8 w-8 animate-spin" />
        </div>
      ) : workflows.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workflows.map(workflow => (
            <WorkflowCard
              key={workflow.id}
              workflow={workflow}
              onToggleStatus={handleToggleStatus}
              onDelete={handleDeleteWorkflow}
              onViewExecutions={handleViewExecutions}
            />
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="flex items-center justify-center h-64">
            <div className="text-center text-gray-500">
              <Workflow className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p className="text-lg font-medium">No hay workflows configurados</p>
              <p className="text-sm mb-4">Crea tu primer workflow para automatizar procesos</p>
              <Button onClick={() => setBuilderOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Crear Primer Workflow
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Workflow Builder */}
      <WorkflowBuilder
        open={builderOpen}
        onOpenChange={setBuilderOpen}
        onWorkflowCreated={loadWorkflows}
      />
    </div>
  );
}