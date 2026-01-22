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
  Bot,
  MessageCircle,
  Plus,
  Edit,
  Trash2,
  Play,
  Pause,
  Settings,
  Brain,
  Zap,
  Clock,
  CheckCircle,
  XCircle,
  RefreshCw,
  Send,
  Eye,
  Star,
  ThumbsUp,
  ThumbsDown,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  Calendar,
  AlertCircle,
  Lightbulb,
  MessageSquare,
  Mail,
  Phone
} from 'lucide-react';
import { useAutomation } from '@/hooks/useAutomation';
import { AutoResponse } from '@/types/automation';
import { format } from 'date-fns';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const TRIGGER_TYPES = [
  { value: 'keyword', label: 'Palabra Clave', icon: Target },
  { value: 'category', label: 'Categoría de Ticket', icon: MessageSquare },
  { value: 'sentiment', label: 'Análisis de Sentimiento', icon: Brain },
  { value: 'time_based', label: 'Horario', icon: Clock },
  { value: 'priority', label: 'Prioridad', icon: AlertCircle },
  { value: 'channel', label: 'Canal de Contacto', icon: MessageCircle }
];

const RESPONSE_TYPES = [
  { value: 'template', label: 'Respuesta Predefinida', icon: MessageCircle },
  { value: 'ai_generated', label: 'Generada por IA', icon: Brain },
  { value: 'escalate', label: 'Escalar a Humano', icon: Users },
  { value: 'redirect', label: 'Redirigir a Recurso', icon: Target },
  { value: 'collect_info', label: 'Recopilar Información', icon: MessageSquare }
];

const SENTIMENT_OPTIONS = [
  { value: 'positive', label: 'Positivo', color: 'text-green-600' },
  { value: 'neutral', label: 'Neutral', color: 'text-gray-600' },
  { value: 'negative', label: 'Negativo', color: 'text-red-600' },
  { value: 'frustrated', label: 'Frustrado', color: 'text-orange-600' }
];

interface CreateAutoResponseDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onResponseCreated: () => void;
}

const CreateAutoResponseDialog: React.FC<CreateAutoResponseDialogProps> = ({ 
  open, 
  onOpenChange, 
  onResponseCreated 
}) => {
  const { createAutoResponse } = useAutomation();
  const [loading, setLoading] = useState(false);
  const [responseConfig, setResponseConfig] = useState({
    name: '',
    description: '',
    trigger: {
      type: 'keyword' as any,
      conditions: {
        keywords: '',
        category: '',
        sentiment: '',
        channel: 'all',
        startTime: '',
        endTime: ''
      },
      priority: 1
    },
    response: {
      type: 'template' as any,
      content: '',
      delay: 0,
      personalized: false,
      escalateTo: ''
    },
    ai: {
      enabled: false,
      model: 'gpt-4',
      temperature: 0.7,
      contextLength: 1000,
      personalityTone: 'professional'
    },
    constraints: {
      maxResponsesPerUser: 3,
      cooldownMinutes: 30,
      businessHoursOnly: false,
      languages: ['es']
    }
  });

  const handleCreateResponse = async () => {
    try {
      setLoading(true);
      await createAutoResponse({
        name: responseConfig.name,
        description: responseConfig.description,
        trigger: responseConfig.trigger,
        response: responseConfig.response,
        ai: responseConfig.ai,
        constraints: responseConfig.constraints,
        createdBy: 'current-user' // TODO: Get from auth
      });
      onResponseCreated();
      onOpenChange(false);
    } catch (error) {
      console.error('Error creating auto response:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Crear Respuesta Automática</DialogTitle>
          <DialogDescription>
            Configura respuestas inteligentes con IA para optimizar el soporte
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basic">Configuración</TabsTrigger>
            <TabsTrigger value="trigger">Disparadores</TabsTrigger>
            <TabsTrigger value="response">Respuesta</TabsTrigger>
            <TabsTrigger value="ai">IA & Personalización</TabsTrigger>
          </TabsList>
          
          <TabsContent value="basic" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre de la Respuesta</Label>
                <Input
                  id="name"
                  value={responseConfig.name}
                  onChange={(e) => setResponseConfig(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Ej: Respuesta FAQ Hosting"
                />
              </div>
              
              <div className="space-y-2">
                <Label>Prioridad</Label>
                <Select 
                  value={responseConfig.trigger.priority.toString()} 
                  onValueChange={(value) => 
                    setResponseConfig(prev => ({ 
                      ...prev, 
                      trigger: { ...prev.trigger, priority: parseInt(value) }
                    }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Alta (1)</SelectItem>
                    <SelectItem value="2">Media (2)</SelectItem>
                    <SelectItem value="3">Baja (3)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descripción</Label>
              <Textarea
                id="description"
                value={responseConfig.description}
                onChange={(e) => setResponseConfig(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Describe cuándo y cómo debe activarse esta respuesta..."
                rows={3}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-center space-x-2">
                <Switch
                  checked={responseConfig.constraints.businessHoursOnly}
                  onCheckedChange={(checked) => 
                    setResponseConfig(prev => ({ 
                      ...prev, 
                      constraints: { ...prev.constraints, businessHoursOnly: checked }
                    }))
                  }
                />
                <Label>Solo horario laboral</Label>
              </div>

              <div className="space-y-2">
                <Label>Max respuestas por usuario</Label>
                <Select 
                  value={responseConfig.constraints.maxResponsesPerUser.toString()} 
                  onValueChange={(value) => 
                    setResponseConfig(prev => ({ 
                      ...prev, 
                      constraints: { ...prev.constraints, maxResponsesPerUser: parseInt(value) }
                    }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 respuesta</SelectItem>
                    <SelectItem value="3">3 respuestas</SelectItem>
                    <SelectItem value="5">5 respuestas</SelectItem>
                    <SelectItem value="-1">Ilimitado</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Cooldown (minutos)</Label>
                <Input
                  type="number"
                  value={responseConfig.constraints.cooldownMinutes}
                  onChange={(e) => setResponseConfig(prev => ({ 
                    ...prev, 
                    constraints: { ...prev.constraints, cooldownMinutes: parseInt(e.target.value) || 0 }
                  }))}
                  min="0"
                  max="1440"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="trigger" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Tipo de Disparador</Label>
                <Select 
                  value={responseConfig.trigger.type} 
                  onValueChange={(value: any) => 
                    setResponseConfig(prev => ({ 
                      ...prev, 
                      trigger: { ...prev.trigger, type: value }
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

              {responseConfig.trigger.type === 'keyword' && (
                <div className="space-y-2">
                  <Label>Palabras Clave</Label>
                  <Textarea
                    value={responseConfig.trigger.conditions.keywords || ''}
                    onChange={(e) => setResponseConfig(prev => ({ 
                      ...prev, 
                      trigger: { 
                        ...prev.trigger, 
                        conditions: { ...prev.trigger.conditions, keywords: e.target.value }
                      }
                    }))}
                    placeholder="hosting, dominio, ssl, configuración, error"
                    rows={3}
                  />
                  <p className="text-xs text-gray-500">
                    Separa las palabras clave con comas. La respuesta se activará si el mensaje contiene alguna de estas palabras.
                  </p>
                </div>
              )}

              {responseConfig.trigger.type === 'category' && (
                <div className="space-y-2">
                  <Label>Categorías de Ticket</Label>
                  <Select 
                    value={responseConfig.trigger.conditions.category || ''} 
                    onValueChange={(value) => 
                      setResponseConfig(prev => ({ 
                        ...prev, 
                        trigger: { 
                          ...prev.trigger, 
                          conditions: { ...prev.trigger.conditions, category: value }
                        }
                      }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">Técnico</SelectItem>
                      <SelectItem value="billing">Facturación</SelectItem>
                      <SelectItem value="sales">Ventas</SelectItem>
                      <SelectItem value="general">General</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {responseConfig.trigger.type === 'sentiment' && (
                <div className="space-y-2">
                  <Label>Análisis de Sentimiento</Label>
                  <Select 
                    value={responseConfig.trigger.conditions.sentiment || ''} 
                    onValueChange={(value) => 
                      setResponseConfig(prev => ({ 
                        ...prev, 
                        trigger: { 
                          ...prev.trigger, 
                          conditions: { ...prev.trigger.conditions, sentiment: value }
                        }
                      }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {SENTIMENT_OPTIONS.map(sentiment => (
                        <SelectItem key={sentiment.value} value={sentiment.value}>
                          <span className={sentiment.color}>{sentiment.label}</span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {responseConfig.trigger.type === 'time_based' && (
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Hora de Inicio</Label>
                    <Input
                      type="time"
                      value={responseConfig.trigger.conditions.startTime || ''}
                      onChange={(e) => setResponseConfig(prev => ({ 
                        ...prev, 
                        trigger: { 
                          ...prev.trigger, 
                          conditions: { ...prev.trigger.conditions, startTime: e.target.value }
                        }
                      }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Hora de Fin</Label>
                    <Input
                      type="time"
                      value={responseConfig.trigger.conditions.endTime || ''}
                      onChange={(e) => setResponseConfig(prev => ({ 
                        ...prev, 
                        trigger: { 
                          ...prev.trigger, 
                          conditions: { ...prev.trigger.conditions, endTime: e.target.value }
                        }
                      }))}
                    />
                  </div>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="response" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Tipo de Respuesta</Label>
                <Select 
                  value={responseConfig.response.type} 
                  onValueChange={(value: any) => 
                    setResponseConfig(prev => ({ 
                      ...prev, 
                      response: { ...prev.response, type: value }
                    }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {RESPONSE_TYPES.map(response => (
                      <SelectItem key={response.value} value={response.value}>
                        <span className="flex items-center space-x-2">
                          <response.icon className="h-4 w-4" />
                          <span>{response.label}</span>
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {(responseConfig.response.type === 'template' || responseConfig.response.type === 'ai_generated') && (
                <div className="space-y-2">
                  <Label>Contenido de la Respuesta</Label>
                  <Textarea
                    value={responseConfig.response.content}
                    onChange={(e) => setResponseConfig(prev => ({ 
                      ...prev, 
                      response: { ...prev.response, content: e.target.value }
                    }))}
                    placeholder={
                      responseConfig.response.type === 'ai_generated' 
                        ? "Instrucciones para la IA: Responde de manera profesional y útil sobre problemas de hosting..."
                        : "Hola {{name}}, gracias por contactarnos. Para resolver tu consulta sobre {{topic}}, te sugiero..."
                    }
                    rows={6}
                  />
                  <p className="text-xs text-gray-500">
                    {responseConfig.response.type === 'ai_generated' 
                      ? "Describe las instrucciones para que la IA genere respuestas apropiadas."
                      : "Puedes usar variables como {{name}}, {{topic}}, {{company}}, etc."
                    }
                  </p>
                </div>
              )}

              {responseConfig.response.type === 'escalate' && (
                <div className="space-y-2">
                  <Label>Departamento de Escalamiento</Label>
                  <Select 
                    value={responseConfig.response.escalateTo || ''} 
                    onValueChange={(value) => 
                      setResponseConfig(prev => ({ 
                        ...prev, 
                        response: { ...prev.response, escalateTo: value }
                      }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">Soporte Técnico</SelectItem>
                      <SelectItem value="sales">Ventas</SelectItem>
                      <SelectItem value="billing">Facturación</SelectItem>
                      <SelectItem value="manager">Gerencia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Delay de Respuesta (segundos)</Label>
                  <div className="flex items-center space-x-4">
                    <Slider
                      value={[responseConfig.response.delay]}
                      onValueChange={([value]) => 
                        setResponseConfig(prev => ({ 
                          ...prev, 
                          response: { ...prev.response, delay: value }
                        }))
                      }
                      max={60}
                      min={0}
                      step={1}
                      className="flex-1"
                    />
                    <div className="w-16 text-center font-medium">
                      {responseConfig.response.delay}s
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    checked={responseConfig.response.personalized}
                    onCheckedChange={(checked) => 
                      setResponseConfig(prev => ({ 
                        ...prev, 
                        response: { ...prev.response, personalized: checked }
                      }))
                    }
                  />
                  <Label>Personalizar con datos del cliente</Label>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ai" className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <Switch
                checked={responseConfig.ai.enabled}
                onCheckedChange={(checked) => 
                  setResponseConfig(prev => ({ 
                    ...prev, 
                    ai: { ...prev.ai, enabled: checked }
                  }))
                }
              />
              <Label>Habilitar mejora con Inteligencia Artificial</Label>
            </div>

            {responseConfig.ai.enabled && (
              <div className="space-y-6 p-4 border rounded-lg bg-blue-50">
                <div className="flex items-center space-x-2 text-blue-700">
                  <Brain className="h-5 w-5" />
                  <span className="font-medium">Configuración de IA</span>
                </div>

                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Modelo de IA</Label>
                      <Select 
                        value={responseConfig.ai.model} 
                        onValueChange={(value) => 
                          setResponseConfig(prev => ({ 
                            ...prev, 
                            ai: { ...prev.ai, model: value }
                          }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gpt-4">GPT-4 (Más preciso)</SelectItem>
                          <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo (Más rápido)</SelectItem>
                          <SelectItem value="claude">Claude (Conversacional)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Tono de Personalidad</Label>
                      <Select 
                        value={responseConfig.ai.personalityTone} 
                        onValueChange={(value) => 
                          setResponseConfig(prev => ({ 
                            ...prev, 
                            ai: { ...prev.ai, personalityTone: value }
                          }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="professional">Profesional</SelectItem>
                          <SelectItem value="friendly">Amigable</SelectItem>
                          <SelectItem value="empathetic">Empático</SelectItem>
                          <SelectItem value="technical">Técnico</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label>Creatividad de Respuestas</Label>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-sm text-gray-500">Conservador</span>
                      <Slider
                        value={[responseConfig.ai.temperature * 10]}
                        onValueChange={([value]) => 
                          setResponseConfig(prev => ({ 
                            ...prev, 
                            ai: { ...prev.ai, temperature: value / 10 }
                          }))
                        }
                        max={10}
                        min={0}
                        step={1}
                        className="flex-1"
                      />
                      <span className="text-sm text-gray-500">Creativo</span>
                      <div className="w-16 text-center font-medium">
                        {responseConfig.ai.temperature.toFixed(1)}
                      </div>
                    </div>
                    <p className="text-xs text-blue-600 mt-1">
                      Mayor creatividad genera respuestas más variadas pero menos predecibles
                    </p>
                  </div>

                  <div>
                    <Label>Contexto Histórico (tokens)</Label>
                    <div className="flex items-center space-x-4 mt-2">
                      <Slider
                        value={[responseConfig.ai.contextLength]}
                        onValueChange={([value]) => 
                          setResponseConfig(prev => ({ 
                            ...prev, 
                            ai: { ...prev.ai, contextLength: value }
                          }))
                        }
                        max={4000}
                        min={500}
                        step={100}
                        className="flex-1"
                      />
                      <div className="w-24 text-center font-medium">
                        {responseConfig.ai.contextLength}
                      </div>
                    </div>
                    <p className="text-xs text-blue-600 mt-1">
                      Cantidad de contexto previo que la IA considerará para generar respuestas
                    </p>
                  </div>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button 
            onClick={handleCreateResponse} 
            disabled={loading || !responseConfig.name}
          >
            {loading ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Creando...
              </>
            ) : (
              <>
                <Plus className="h-4 w-4 mr-2" />
                Crear Respuesta Automática
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

interface AutoResponseCardProps {
  response: AutoResponse;
  onToggleStatus: (responseId: string, status: 'active' | 'paused') => void;
  onDelete: (responseId: string) => void;
}

const AutoResponseCard: React.FC<AutoResponseCardProps> = ({ 
  response, 
  onToggleStatus, 
  onDelete 
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
    return trigger?.icon || Target;
  };

  const getResponseTypeIcon = (responseType: string) => {
    const responseTypeConfig = RESPONSE_TYPES.find(r => r.value === responseType);
    return responseTypeConfig?.icon || MessageCircle;
  };

  const TriggerIcon = getTriggerIcon(response.triggers?.keywords?.[0] || 'general');
  const ResponseIcon = getResponseTypeIcon(response.response?.template ? 'template' : 'general');

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="flex items-center space-x-2">
              <TriggerIcon className="h-5 w-5" />
              <span>{response.name}</span>
              {response.response?.aiEnhanced && (
                <Badge variant="outline" className="text-blue-600">
                  <Brain className="h-3 w-3 mr-1" />
                  IA
                </Badge>
              )}
            </CardTitle>
            <CardDescription>Categoría: {response.category}</CardDescription>
          </div>
          
          <Badge className={getStatusColor(response.settings?.enabled ? 'enabled' : 'disabled')}>
            {response.settings?.enabled ? 'Activa' : 'Deshabilitada'}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {/* Configuration Summary */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Tipo:</span>
              <div className="flex items-center space-x-1 mt-1">
                <ResponseIcon className="h-4 w-4" />
                <span className="font-medium">
                  Respuesta automática
                </span>
              </div>
            </div>
            <div>
              <span className="text-gray-600">Prioridad:</span>
              <span className="ml-2 font-medium">{response.triggers?.urgency || 'medium'}</span>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Ejecutada:</span>
              <span className="ml-2 font-medium">{response.metrics?.usageCount || 0} veces</span>
            </div>
            <div>
              <span className="text-gray-600">Satisfacción:</span>
              <span className="ml-2 font-medium text-green-600">
                {response.metrics?.satisfactionRating || 0}%
              </span>
            </div>
            <div>
              <span className="text-gray-600">Última:</span>
              <span className="ml-2 font-medium">
                {response.updatedAt 
                  ? format(response.updatedAt.toDate(), 'dd/MM')
                  : 'Nunca'
                }
              </span>
            </div>
          </div>

          {/* Trigger Preview */}
          <div className="p-2 bg-gray-50 rounded text-xs">
            <span className="text-gray-600">Disparador: </span>
            {response.triggers?.keywords && response.triggers.keywords.length > 0 && 
              <span>{response.triggers.keywords.join(', ')}</span>
            }
            {response.category && 
              <span>Categoría: {response.category}</span>
            }
            {response.triggers?.sentiment && 
              <span>Sentimiento: {response.triggers.sentiment}</span>
            }
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2 pt-2 border-t">
            <Button
              size="sm"
              variant={response.settings?.enabled ? 'outline' : 'default'}
              onClick={() => onToggleStatus(response.id, response.settings?.enabled ? 'paused' : 'active')}
            >
              {response.settings?.enabled ? (
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
              <Eye className="h-4 w-4 mr-1" />
              Analytics
            </Button>
            
            <Button size="sm" variant="outline">
              <Edit className="h-4 w-4 mr-1" />
              Editar
            </Button>
            
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => onDelete(response.id)}
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

export default function AutoResponsesPage() {
  const { getActiveAutoResponses, updateAutoResponse, deleteAutoResponse } = useAutomation();
  const [responses, setResponses] = useState<AutoResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('responses');

  const loadResponses = async () => {
    try {
      setLoading(true);
      const responsesData = await getActiveAutoResponses();
      setResponses(responsesData);
    } catch (error) {
      console.error('Error loading auto responses:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleStatus = async (responseId: string, status: 'active' | 'paused') => {
    try {
      await updateAutoResponse(responseId, { status });
      await loadResponses();
    } catch (error) {
      console.error('Error updating auto response:', error);
    }
  };

  const handleDeleteResponse = async (responseId: string) => {
    try {
      await deleteAutoResponse(responseId);
      await loadResponses();
    } catch (error) {
      console.error('Error deleting auto response:', error);
    }
  };

  // Mock data for analytics
  const responseAnalytics = {
    totalExecutions: 1247,
    averageSatisfaction: 84,
    responseTime: 2.3,
    escalationRate: 12
  };

  const performanceData = [
    { month: 'Ene', executions: 89, satisfaction: 82 },
    { month: 'Feb', executions: 156, satisfaction: 85 },
    { month: 'Mar', executions: 203, satisfaction: 87 },
    { month: 'Abr', executions: 276, satisfaction: 89 },
    { month: 'May', executions: 234, satisfaction: 84 }
  ];

  const triggerDistributionData = [
    { name: 'Palabras Clave', value: 45, color: '#3b82f6' },
    { name: 'Categoría', value: 28, color: '#10b981' },
    { name: 'Sentimiento', value: 18, color: '#f59e0b' },
    { name: 'Horario', value: 9, color: '#ef4444' }
  ];

  useEffect(() => {
    loadResponses();
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Respuestas Automáticas</h1>
          <p className="text-muted-foreground">
            Soporte inteligente 24/7 con IA para resolver consultas automáticamente
          </p>
        </div>
        
        <Button onClick={() => setCreateDialogOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Nueva Respuesta
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="responses">Respuestas Automáticas</TabsTrigger>
          <TabsTrigger value="analytics">Analytics & Rendimiento</TabsTrigger>
          <TabsTrigger value="settings">Configuración Global</TabsTrigger>
        </TabsList>
        
        <TabsContent value="responses" className="space-y-6">
          {/* Statistics Cards */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Respuestas</p>
                    <p className="text-2xl font-bold">{responses.length}</p>
                  </div>
                  <Bot className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Activas</p>
                    <p className="text-2xl font-bold text-green-600">
                      {responses.filter(r => r.settings?.enabled).length}
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
                    <p className="text-sm font-medium text-gray-600">Con IA</p>
                    <p className="text-2xl font-bold text-orange-600">
                      {responses.filter(r => r.response.aiEnhanced).length}
                    </p>
                  </div>
                  <Brain className="h-8 w-8 text-orange-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Auto Responses Grid */}
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <RefreshCw className="h-8 w-8 animate-spin" />
            </div>
          ) : responses.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {responses.map(response => (
                <AutoResponseCard
                  key={response.id}
                  response={response}
                  onToggleStatus={handleToggleStatus}
                  onDelete={handleDeleteResponse}
                />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="flex items-center justify-center h-64">
                <div className="text-center text-gray-500">
                  <Bot className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p className="text-lg font-medium">No hay respuestas automáticas</p>
                  <p className="text-sm mb-4">Crea tu primera respuesta automática para optimizar el soporte</p>
                  <Button onClick={() => setCreateDialogOpen(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Crear Primera Respuesta
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          {/* Performance Overview */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Ejecuciones Total</p>
                    <p className="text-2xl font-bold">{responseAnalytics.totalExecutions}</p>
                    <p className="text-xs text-green-500">+18% vs mes anterior</p>
                  </div>
                  <BarChart3 className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Satisfacción Promedio</p>
                    <p className="text-2xl font-bold text-green-600">{responseAnalytics.averageSatisfaction}%</p>
                    <p className="text-xs text-green-500">+3% vs mes anterior</p>
                  </div>
                  <Star className="h-8 w-8 text-green-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Tiempo de Respuesta</p>
                    <p className="text-2xl font-bold text-purple-600">{responseAnalytics.responseTime}s</p>
                    <p className="text-xs text-green-500">-0.5s vs mes anterior</p>
                  </div>
                  <Clock className="h-8 w-8 text-purple-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Tasa de Escalamiento</p>
                    <p className="text-2xl font-bold text-orange-600">{responseAnalytics.escalationRate}%</p>
                    <p className="text-xs text-red-500">+2% vs mes anterior</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-orange-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Rendimiento Mensual</CardTitle>
                <CardDescription>Ejecuciones y satisfacción por mes</CardDescription>
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
                      dataKey="executions" 
                      stroke="#3b82f6" 
                      strokeWidth={2}
                      name="Ejecuciones"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="satisfaction" 
                      stroke="#10b981" 
                      strokeWidth={2}
                      name="Satisfacción %"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Distribución de Disparadores</CardTitle>
                <CardDescription>Tipos de triggers más utilizados</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={triggerDistributionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {triggerDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Configuración Global</CardTitle>
              <CardDescription>
                Ajustes generales para todas las respuestas automáticas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="font-medium">Horarios de Operación</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="business-hours" defaultChecked />
                      <Label htmlFor="business-hours">Respetar horarios laborales</Label>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label>Inicio</Label>
                        <Input type="time" defaultValue="09:00" />
                      </div>
                      <div>
                        <Label>Fin</Label>
                        <Input type="time" defaultValue="18:00" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Configuración de IA</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="ai-enabled" defaultChecked />
                      <Label htmlFor="ai-enabled">Habilitar IA por defecto</Label>
                    </div>
                    <div>
                      <Label>Modelo predeterminado</Label>
                      <Select defaultValue="gpt-3.5-turbo">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gpt-4">GPT-4</SelectItem>
                          <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                          <SelectItem value="claude">Claude</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <Button>
                  <Settings className="h-4 w-4 mr-2" />
                  Guardar Configuración
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Create Auto Response Dialog */}
      <CreateAutoResponseDialog
        open={createDialogOpen}
        onOpenChange={setCreateDialogOpen}
        onResponseCreated={loadResponses}
      />
    </div>
  );
}