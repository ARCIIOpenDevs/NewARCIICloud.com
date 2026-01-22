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
  Mail,
  Plus,
  Play,
  Pause,
  Edit,
  Trash2,
  Copy,
  BarChart3,
  Users,
  Send,
  Clock,
  Target,
  Eye,
  Settings,
  RefreshCw,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  AlertTriangle,
  Calendar,
  Zap,
  Brain,
  Filter,
  Search,
  Download,
  Upload,
  FileText,
  Layers,
  ArrowRight,
  TestTube,
  MousePointer
} from 'lucide-react';
import { useAutomation } from '@/hooks/useAutomation';
import { EmailSequence, EmailSequenceAdvanced, EmailSequenceSubscriber, EmailTemplate } from '@/types/automation';
import { format } from 'date-fns';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const TRIGGER_TYPES = [
  { value: 'signup', label: 'Nuevo Registro', icon: Users, description: 'Cuando se registra un nuevo usuario' },
  { value: 'purchase', label: 'Compra Realizada', icon: CheckCircle, description: 'Después de completar una compra' },
  { value: 'abandon_cart', label: 'Carrito Abandonado', icon: AlertTriangle, description: 'Cuando abandona items en el carrito' },
  { value: 'inactivity', label: 'Inactividad', icon: Clock, description: 'Después de período de inactividad' },
  { value: 'date_based', label: 'Fecha Específica', icon: Calendar, description: 'En fechas programadas' },
  { value: 'tag_added', label: 'Etiqueta Agregada', icon: Target, description: 'Cuando se agrega una etiqueta' },
  { value: 'custom_event', label: 'Evento Personalizado', icon: Zap, description: 'Evento personalizado del sistema' }
];

const EMAIL_CATEGORIES = [
  { value: 'welcome', label: 'Bienvenida', color: 'bg-blue-100 text-blue-700' },
  { value: 'promotional', label: 'Promocional', color: 'bg-green-100 text-green-700' },
  { value: 'educational', label: 'Educativo', color: 'bg-purple-100 text-purple-700' },
  { value: 'transactional', label: 'Transaccional', color: 'bg-gray-100 text-gray-700' },
  { value: 'retention', label: 'Retención', color: 'bg-orange-100 text-orange-700' },
  { value: 'other', label: 'Otro', color: 'bg-pink-100 text-pink-700' }
];

interface EmailSequenceBuilderProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSequenceCreated: () => void;
  editSequence?: EmailSequenceAdvanced;
}

const EmailSequenceBuilder: React.FC<EmailSequenceBuilderProps> = ({ 
  open, 
  onOpenChange, 
  onSequenceCreated,
  editSequence 
}) => {
  const { createEmailSequence, updateEmailSequence } = useAutomation();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('basic');
  
  const [sequenceConfig, setSequenceConfig] = useState({
    name: '',
    description: '',
    trigger: {
      type: 'signup' as any,
      conditions: {
        inactivityDays: 7
      } as any,
      delay: 0 as number | undefined
    },
    emails: [
      {
        id: 'email_1',
        name: 'Email de Bienvenida',
        subject: '¡Bienvenido a ARCIICloud!',
        content: 'Hola {{name}},\n\nGracias por unirte a ARCIICloud...',
        delay: 0,
        personalization: {
          enabled: true,
          variables: ['name', 'email', 'company']
        },
        sendSettings: {
          timezone: 'America/Mexico_City',
          preferredTime: '09:00',
          daysOfWeek: [1, 2, 3, 4, 5]
        },
        abTest: {
          enabled: false,
          variants: [],
          metric: 'open_rate'
        } as any
      }
    ],
    audience: {
      segments: [] as string[],
      filters: [] as Array<{
        field: string;
        operator: 'equals' | 'not_equals' | 'contains' | 'greater_than' | 'less_than' | 'in' | 'not_in';
        value: any;
      }>,
      excludeGroups: [] as string[],
      excludeUnsubscribed: true
    },
    tracking: {
      trackOpens: true,
      trackClicks: true,
      trackUnsubscribes: true,
      analytics: {
        conversionGoals: [] as Array<{ id: string; name: string; type: string; }>,
        customEvents: [] as Array<{ id: string; name: string; trigger: string; }>
      }
    },
    settings: {
      autoArchive: false,
      reEntryAllowed: true,
      unsubscribeHandling: {
        removeFromSequence: true,
        removeFromAllSequences: false,
        addToSuppressionList: true
      },
      failureHandling: {
        maxRetries: 3,
        retryDelay: 60,
        skipOnPermanentFailure: true
      }
    }
  });

  // Pre-cargar datos si estamos editando
  useEffect(() => {
    if (editSequence) {
      setSequenceConfig({
        name: editSequence.name,
        description: editSequence.description,
        trigger: {
          type: editSequence.trigger?.type || 'signup',
          conditions: editSequence.trigger?.conditions || {
            inactivityDays: 7
          },
          delay: editSequence.trigger?.delay || 0
        },
        emails: editSequence.emails.map(email => ({
          id: email.id,
          name: email.name,
          subject: email.subject,
          content: email.content || '',
          delay: email.delay,
          personalization: email.personalization || {
            enabled: true,
            variables: []
          },
          sendSettings: {
            timezone: email.sendSettings?.timezone || 'America/Mexico_City',
            preferredTime: email.sendSettings?.preferredTime || '09:00',
            daysOfWeek: email.sendSettings?.daysOfWeek || [1, 2, 3, 4, 5]
          },
          abTest: email.abTest || {
            enabled: false,
            variants: [],
            metric: 'open_rate'
          }
        })),
        audience: {
          segments: [],
          filters: [],
          excludeGroups: [],
          excludeUnsubscribed: true
        },
        tracking: {
          trackOpens: true,
          trackClicks: true,
          trackUnsubscribes: true,
          analytics: {
            conversionGoals: [],
            customEvents: []
          }
        },
        settings: {
          autoArchive: false,
          reEntryAllowed: true,
          unsubscribeHandling: {
            removeFromSequence: true,
            removeFromAllSequences: false,
            addToSuppressionList: true
          },
          failureHandling: {
            maxRetries: 3,
            retryDelay: 60,
            skipOnPermanentFailure: true
          }
        }
      });
    }
  }, [editSequence]);

  const handleSaveSequence = async () => {
    try {
      setLoading(true);
      
      // Transformar la estructura para que coincida con EmailSequence interface
      const transformedConfig = {
        name: sequenceConfig.name,
        description: sequenceConfig.description,
        type: 'onboarding' as const,
        triggers: [{
          event: 'client_created' as const,
          conditions: []
        }],
        emails: sequenceConfig.emails.map(email => ({
          id: email.id,
          name: email.name,
          subject: email.subject,
          template: email.content,
          delay: email.delay,
          sendTime: email.sendSettings?.preferredTime || '09:00',
          personalized: email.personalization?.enabled || false,
          dynamicContent: email.personalization?.enabled || false,
          aiOptimized: false,
          settings: {
            skipWeekends: !email.sendSettings?.daysOfWeek?.includes(0) && !email.sendSettings?.daysOfWeek?.includes(6),
            respectTimezone: true,
            maxDeliveryAttempts: 3
          }
        })),
        tracking: sequenceConfig.tracking,
        audience: sequenceConfig.audience,
        settings: {
          maxSubscribers: 10000,
          unsubscribeHandling: 'immediate' as 'immediate' | 'end_of_sequence',
          duplicateHandling: 'skip' as 'skip' | 'restart' | 'continue',
          abTesting: {
            enabled: false,
            variants: []
          }
        },
        metrics: {
          subscribers: 0,
          totalSent: 0,
          openRate: 0,
          clickRate: 0,
          unsubscribeRate: 0,
          conversionRate: 0,
          revenue: 0
        },
        status: 'draft' as const
      };
      
      if (editSequence) {
        await updateEmailSequence(editSequence.id, transformedConfig);
      } else {
        await createEmailSequence({
          ...transformedConfig,
          createdBy: 'current-user' // TODO: Get from auth
        });
      }
      
      onSequenceCreated();
      onOpenChange(false);
    } catch (error) {
      console.error('Error saving sequence:', error);
    } finally {
      setLoading(false);
    }
  };

  const addEmail = () => {
    const newEmail = {
      id: `email_${Date.now()}`,
      name: `Email ${sequenceConfig.emails.length + 1}`,
      subject: '',
      content: '',
      delay: sequenceConfig.emails.length > 0 ? 1440 : 0, // 24 horas por defecto
      personalization: {
        enabled: true,
        variables: ['name', 'email']
      },
      sendSettings: {
        timezone: 'America/Mexico_City',
        preferredTime: '09:00',
        daysOfWeek: [1, 2, 3, 4, 5]
      },
      abTest: {
        enabled: false,
        variants: [],
        metric: 'open_rate'
      } as any
    };
    
    setSequenceConfig(prev => ({
      ...prev,
      emails: [...prev.emails, newEmail]
    }));
  };

  const removeEmail = (emailId: string) => {
    setSequenceConfig(prev => ({
      ...prev,
      emails: prev.emails.filter(email => email.id !== emailId)
    }));
  };

  const updateEmail = (emailId: string, updates: any) => {
    setSequenceConfig(prev => ({
      ...prev,
      emails: prev.emails.map(email => 
        email.id === emailId ? { ...email, ...updates } : email
      )
    }));
  };

  const duplicateEmail = (emailId: string) => {
    const emailToDuplicate = sequenceConfig.emails.find(e => e.id === emailId);
    if (emailToDuplicate) {
      const duplicatedEmail = {
        ...emailToDuplicate,
        id: `email_${Date.now()}`,
        name: `${emailToDuplicate.name} (Copia)`,
        delay: emailToDuplicate.delay + 1440 // +24 horas
      };
      
      setSequenceConfig(prev => ({
        ...prev,
        emails: [...prev.emails, duplicatedEmail]
      }));
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {editSequence ? 'Editar' : 'Crear'} Secuencia de Email
          </DialogTitle>
          <DialogDescription>
            Diseña secuencias automatizadas de email marketing para nutrir leads y retener clientes
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="basic">Básico</TabsTrigger>
            <TabsTrigger value="emails">Emails</TabsTrigger>
            <TabsTrigger value="audience">Audiencia</TabsTrigger>
            <TabsTrigger value="tracking">Tracking</TabsTrigger>
            <TabsTrigger value="settings">Configuración</TabsTrigger>
          </TabsList>
          
          <TabsContent value="basic" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="sequence-name">Nombre de la Secuencia</Label>
                <Input
                  id="sequence-name"
                  value={sequenceConfig.name}
                  onChange={(e) => setSequenceConfig(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Ej: Bienvenida Nuevos Clientes"
                />
              </div>
              
              <div className="space-y-2">
                <Label>Disparador</Label>
                <Select 
                  value={sequenceConfig.trigger.type} 
                  onValueChange={(value: any) => 
                    setSequenceConfig(prev => ({ 
                      ...prev, 
                      trigger: { ...prev.trigger, type: value, conditions: {} }
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
            </div>

            <div className="space-y-2">
              <Label htmlFor="sequence-description">Descripción</Label>
              <Textarea
                id="sequence-description"
                value={sequenceConfig.description}
                onChange={(e) => setSequenceConfig(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Describe el propósito y estrategia de esta secuencia..."
                rows={3}
              />
            </div>

            {sequenceConfig.trigger.type === 'inactivity' && (
              <div className="space-y-2">
                <Label>Período de Inactividad (días)</Label>
                <div className="flex items-center space-x-4">
                  <Slider
                    value={[sequenceConfig.trigger.conditions.inactivityDays || 7]}
                    onValueChange={([value]) => 
                      setSequenceConfig(prev => ({ 
                        ...prev, 
                        trigger: { 
                          ...prev.trigger, 
                          conditions: { ...prev.trigger.conditions, inactivityDays: value }
                        }
                      }))
                    }
                    max={90}
                    min={1}
                    step={1}
                    className="flex-1"
                  />
                  <div className="w-16 text-center font-medium">
                    {sequenceConfig.trigger.conditions.inactivityDays || 7} días
                  </div>
                </div>
              </div>
            )}

            {sequenceConfig.trigger.type === 'date_based' && (
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Fecha de Inicio</Label>
                  <Input
                    type="datetime-local"
                    value={sequenceConfig.trigger.conditions.startDate || ''}
                    onChange={(e) => setSequenceConfig(prev => ({ 
                      ...prev, 
                      trigger: { 
                        ...prev.trigger, 
                        conditions: { ...prev.trigger.conditions, startDate: e.target.value }
                      }
                    }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Recurrencia</Label>
                  <Select 
                    value={sequenceConfig.trigger.conditions.recurrence || 'once'} 
                    onValueChange={(value) => 
                      setSequenceConfig(prev => ({ 
                        ...prev, 
                        trigger: { 
                          ...prev.trigger, 
                          conditions: { ...prev.trigger.conditions, recurrence: value }
                        }
                      }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="once">Una vez</SelectItem>
                      <SelectItem value="daily">Diario</SelectItem>
                      <SelectItem value="weekly">Semanal</SelectItem>
                      <SelectItem value="monthly">Mensual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="emails" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Emails de la Secuencia</h3>
              <Button onClick={addEmail} size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Agregar Email
              </Button>
            </div>

            <div className="space-y-4">
              {sequenceConfig.emails.map((email, index) => (
                <Card key={email.id} className="border-l-4 border-l-blue-500">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{index + 1}</Badge>
                        <Input
                          value={email.name}
                          onChange={(e) => updateEmail(email.id, { name: e.target.value })}
                          className="font-medium border-none p-0 h-auto"
                        />
                      </div>
                      <div className="flex items-center space-x-1">
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          onClick={() => duplicateEmail(email.id)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          onClick={() => removeEmail(email.id)}
                          disabled={sequenceConfig.emails.length === 1}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="space-y-2">
                        <Label>Delay {index === 0 ? '(desde trigger)' : '(desde email anterior)'}</Label>
                        <div className="flex items-center space-x-2">
                          <Input
                            type="number"
                            value={email.delay}
                            onChange={(e) => updateEmail(email.id, { delay: parseInt(e.target.value) || 0 })}
                            min="0"
                          />
                          <Select 
                            value="minutes"
                            onValueChange={() => {}} // TODO: Implement time unit conversion
                          >
                            <SelectTrigger className="w-24">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="minutes">min</SelectItem>
                              <SelectItem value="hours">hrs</SelectItem>
                              <SelectItem value="days">días</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Hora Preferida</Label>
                        <Input
                          type="time"
                          value={email.sendSettings.preferredTime}
                          onChange={(e) => updateEmail(email.id, { 
                            sendSettings: { ...email.sendSettings, preferredTime: e.target.value }
                          })}
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Switch
                          checked={email.personalization.enabled}
                          onCheckedChange={(checked) => updateEmail(email.id, { 
                            personalization: { ...email.personalization, enabled: checked }
                          })}
                        />
                        <Label>Personalización</Label>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Asunto del Email</Label>
                      <Input
                        value={email.subject}
                        onChange={(e) => updateEmail(email.id, { subject: e.target.value })}
                        placeholder="{{name}}, tu cuenta está lista - ¡Empecemos!"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Contenido del Email</Label>
                      <Textarea
                        value={email.content}
                        onChange={(e) => updateEmail(email.id, { content: e.target.value })}
                        placeholder="Hola {{name}},&#10;&#10;¡Bienvenido a ARCIICloud! Estamos emocionados de tenerte como parte de nuestra comunidad..."
                        rows={6}
                      />
                      {email.personalization.enabled && (
                        <p className="text-xs text-blue-600">
                          Variables disponibles: {'{name}'}, {'{email}'}, {'{company}'}, {'{plan}'}, {'{signup_date}'}
                        </p>
                      )}
                    </div>

                    {/* A/B Testing Configuration */}
                    <div className="border-t pt-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Switch
                          checked={email.abTest?.enabled || false}
                          onCheckedChange={(checked) => updateEmail(email.id, { 
                            abTest: checked ? {
                              enabled: true,
                              variants: [
                                { id: 'variant_a', name: 'Variante A', percentage: 50 },
                                { id: 'variant_b', name: 'Variante B', percentage: 50 }
                              ],
                              metric: 'open_rate'
                            } : { enabled: false }
                          })}
                        />
                        <Label>Habilitar A/B Testing</Label>
                        <TestTube className="h-4 w-4 text-purple-600" />
                      </div>

                      {email.abTest?.enabled && (
                        <div className="pl-4 space-y-2">
                          <div className="flex items-center space-x-2">
                            <Label className="text-sm">Métrica:</Label>
                            <Select 
                              value={email.abTest.metric} 
                              onValueChange={(value: any) => updateEmail(email.id, { 
                                abTest: { ...email.abTest, metric: value }
                              })}
                            >
                              <SelectTrigger className="w-32">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="open_rate">Open Rate</SelectItem>
                                <SelectItem value="click_rate">Click Rate</SelectItem>
                                <SelectItem value="conversion_rate">Conversiones</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="audience" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Segmentos de Audiencia</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar segmentos..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new_signups">Nuevos Registros</SelectItem>
                    <SelectItem value="trial_users">Usuarios de Prueba</SelectItem>
                    <SelectItem value="premium_users">Usuarios Premium</SelectItem>
                    <SelectItem value="inactive_users">Usuarios Inactivos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-4 md:grid-cols-1">

                <div className="flex items-center space-x-2">
                  <Switch
                    checked={sequenceConfig.audience.excludeUnsubscribed}
                    onCheckedChange={(checked) => setSequenceConfig(prev => ({ 
                      ...prev, 
                      audience: { ...prev.audience, excludeUnsubscribed: checked }
                    }))}
                  />
                  <Label>Excluir usuarios desinscritos</Label>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Filtros Adicionales</Label>
                <div className="p-4 border border-dashed rounded-lg text-center text-gray-500">
                  <Target className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>Los filtros avanzados estarán disponibles próximamente</p>
                  <p className="text-sm">Podrás filtrar por ubicación, comportamiento, propiedades personalizadas, etc.</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tracking" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="font-medium">Tracking de Email</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={sequenceConfig.tracking.trackOpens}
                      onCheckedChange={(checked) => setSequenceConfig(prev => ({ 
                        ...prev, 
                        tracking: { ...prev.tracking, trackOpens: checked }
                      }))}
                    />
                    <Label>Tracking de Aperturas</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={sequenceConfig.tracking.trackClicks}
                      onCheckedChange={(checked) => setSequenceConfig(prev => ({ 
                        ...prev, 
                        tracking: { ...prev.tracking, trackClicks: checked }
                      }))}
                    />
                    <Label>Tracking de Clicks</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Configuraciones Adicionales</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={sequenceConfig.tracking.trackUnsubscribes}
                      onCheckedChange={(checked) => setSequenceConfig(prev => ({ 
                        ...prev, 
                        tracking: { ...prev.tracking, trackUnsubscribes: checked }
                      }))}
                    />
                    <Label>Tracking de Desuscripciones</Label>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Tracking de Conversiones</h3>
              
              <div className="flex items-center space-x-2 mb-3">
                <Switch
                  checked={sequenceConfig.tracking.analytics.conversionGoals.length > 0}
                  onCheckedChange={(checked) => setSequenceConfig(prev => ({ 
                    ...prev, 
                    tracking: { 
                      ...prev.tracking, 
                      analytics: { 
                        ...prev.tracking.analytics,
                        conversionGoals: checked ? [{ id: 'default', name: 'Conversión', type: 'click' }] : []
                      }
                    }
                  }))}
                />
                <Label>Habilitar Tracking de Conversiones</Label>
              </div>

              {sequenceConfig.tracking.analytics.conversionGoals.length > 0 && (
                <div className="p-4 border border-dashed rounded-lg text-center text-gray-500">
                  <Target className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>Configuración de goals disponible próximamente</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="font-medium">Configuración General</h3>
                
                <div className="space-y-3">

                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={sequenceConfig.settings.reEntryAllowed}
                      onCheckedChange={(checked) => setSequenceConfig(prev => ({ 
                        ...prev, 
                        settings: { ...prev.settings, reEntryAllowed: checked }
                      }))}
                    />
                    <div>
                      <Label>Permitir re-entrada</Label>
                      <p className="text-xs text-gray-500">Los usuarios pueden volver a entrar en la secuencia si se cumple el trigger nuevamente</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Manejo de Errores</h3>
                
                <div className="space-y-2">
                  <Label>Máximo Reintentos</Label>
                  <Select 
                    value={sequenceConfig.settings.failureHandling.maxRetries.toString()} 
                    onValueChange={(value) => setSequenceConfig(prev => ({ 
                      ...prev, 
                      settings: { 
                        ...prev.settings, 
                        failureHandling: { 
                          ...prev.settings.failureHandling, 
                          maxRetries: parseInt(value) 
                        }
                      }
                    }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">Sin reintentos</SelectItem>
                      <SelectItem value="1">1 reintento</SelectItem>
                      <SelectItem value="3">3 reintentos</SelectItem>
                      <SelectItem value="5">5 reintentos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Delay entre Reintentos (minutos)</Label>
                  <Input
                    type="number"
                    value={sequenceConfig.settings.failureHandling.retryDelay}
                    onChange={(e) => setSequenceConfig(prev => ({ 
                      ...prev, 
                      settings: { 
                        ...prev.settings, 
                        failureHandling: { 
                          ...prev.settings.failureHandling, 
                          retryDelay: parseInt(e.target.value) || 60 
                        }
                      }
                    }))}
                    min="1"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Manejo de Desinscripciones</h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={sequenceConfig.settings.unsubscribeHandling.removeFromSequence}
                    onCheckedChange={(checked) => setSequenceConfig(prev => ({ 
                      ...prev, 
                      settings: { 
                        ...prev.settings, 
                        unsubscribeHandling: { 
                          ...prev.settings.unsubscribeHandling, 
                          removeFromSequence: checked 
                        }
                      }
                    }))}
                  />
                  <Label>Remover de esta secuencia</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    checked={sequenceConfig.settings.unsubscribeHandling.removeFromAllSequences}
                    onCheckedChange={(checked) => setSequenceConfig(prev => ({ 
                      ...prev, 
                      settings: { 
                        ...prev.settings, 
                        unsubscribeHandling: { 
                          ...prev.settings.unsubscribeHandling, 
                          removeFromAllSequences: checked 
                        }
                      }
                    }))}
                  />
                  <Label>Remover de todas las secuencias</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    checked={sequenceConfig.settings.unsubscribeHandling.addToSuppressionList}
                    onCheckedChange={(checked) => setSequenceConfig(prev => ({ 
                      ...prev, 
                      settings: { 
                        ...prev.settings, 
                        unsubscribeHandling: { 
                          ...prev.settings.unsubscribeHandling, 
                          addToSuppressionList: checked 
                        }
                      }
                    }))}
                  />
                  <Label>Agregar a lista de supresión</Label>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button 
            onClick={handleSaveSequence} 
            disabled={loading || !sequenceConfig.name || sequenceConfig.emails.length === 0}
          >
            {loading ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                {editSequence ? 'Guardando...' : 'Creando...'}
              </>
            ) : (
              <>
                {editSequence ? <Edit className="h-4 w-4 mr-2" /> : <Plus className="h-4 w-4 mr-2" />}
                {editSequence ? 'Guardar Cambios' : 'Crear Secuencia'}
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

interface EmailSequenceCardProps {
  sequence: EmailSequenceAdvanced;
  onToggleStatus: (sequenceId: string, status: 'active' | 'paused') => void;
  onEdit: (sequence: EmailSequenceAdvanced) => void;
  onDelete: (sequenceId: string) => void;
  onViewAnalytics: (sequenceId: string) => void;
}

const EmailSequenceCard: React.FC<EmailSequenceCardProps> = ({ 
  sequence, 
  onToggleStatus, 
  onEdit,
  onDelete,
  onViewAnalytics 
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'paused': return 'bg-yellow-100 text-yellow-700';
      case 'draft': return 'bg-gray-100 text-gray-700';
      case 'completed': return 'bg-blue-100 text-blue-700';
      case 'archived': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getTriggerIcon = (triggerType: string) => {
    const trigger = TRIGGER_TYPES.find(t => t.value === triggerType);
    return trigger?.icon || Mail;
  };

  const TriggerIcon = getTriggerIcon(sequence.trigger.type);

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="flex items-center space-x-2">
              <TriggerIcon className="h-5 w-5" />
              <span>{sequence.name}</span>
              <Badge className="text-xs">
                {sequence.emails.length} email{sequence.emails.length !== 1 ? 's' : ''}
              </Badge>
            </CardTitle>
            <CardDescription>{sequence.description}</CardDescription>
          </div>
          
          <div className="flex items-center space-x-2">
            <Badge className={getStatusColor(sequence.status)}>
              {sequence.status === 'active' ? 'Activa' : 
               sequence.status === 'paused' ? 'Pausada' : 
               sequence.status === 'draft' ? 'Borrador' :
               sequence.status === 'completed' ? 'Completada' : 'Archivada'}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {/* Key Metrics */}
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-blue-600">{sequence.stats.subscribers}</p>
              <p className="text-xs text-gray-500">Suscriptores</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">{sequence.stats.averageOpenRate.toFixed(1)}%</p>
              <p className="text-xs text-gray-500">Open Rate</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-600">{sequence.stats.averageClickRate.toFixed(1)}%</p>
              <p className="text-xs text-gray-500">Click Rate</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-600">{sequence.stats.totalCompleted}</p>
              <p className="text-xs text-gray-500">Completados</p>
            </div>
          </div>

          {/* Trigger Information */}
          <div className="p-2 bg-gray-50 rounded text-sm">
            <span className="text-gray-600">Trigger: </span>
            <span className="font-medium">
              {TRIGGER_TYPES.find(t => t.value === sequence.trigger.type)?.label}
            </span>
            {(sequence.trigger.delay || 0) > 0 && (
              <span className="text-gray-500 ml-2">
                (Delay: {sequence.trigger.delay || 0} min)
              </span>
            )}
          </div>

          {/* Email Timeline Preview */}
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-600">Timeline:</p>
            <div className="flex items-center space-x-2 overflow-x-auto pb-2">
              {sequence.emails.slice(0, 4).map((email, index) => (
                <div key={email.id} className="flex items-center space-x-1 min-w-max">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-xs font-medium text-blue-600">
                    {index + 1}
                  </div>
                  <div className="text-xs">
                    <p className="font-medium truncate max-w-20">{email.name}</p>
                    <p className="text-gray-500">
                      {email.delay === 0 ? 'Inmediato' : 
                       email.delay < 60 ? `${email.delay}m` :
                       email.delay < 1440 ? `${Math.round(email.delay/60)}h` :
                       `${Math.round(email.delay/1440)}d`}
                    </p>
                  </div>
                  {index < Math.min(sequence.emails.length - 1, 3) && (
                    <ArrowRight className="h-3 w-3 text-gray-400" />
                  )}
                </div>
              ))}
              {sequence.emails.length > 4 && (
                <div className="text-xs text-gray-500">+{sequence.emails.length - 4} más</div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2 pt-2 border-t">
            {sequence.status === 'draft' ? (
              <Button
                size="sm"
                onClick={() => onToggleStatus(sequence.id, 'active')}
              >
                <Play className="h-4 w-4 mr-1" />
                Activar
              </Button>
            ) : (
              <Button
                size="sm"
                variant={sequence.status === 'active' ? 'outline' : 'default'}
                onClick={() => onToggleStatus(sequence.id, sequence.status === 'active' ? 'paused' : 'active')}
              >
                {sequence.status === 'active' ? (
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
            )}
            
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => onViewAnalytics(sequence.id)}
            >
              <BarChart3 className="h-4 w-4 mr-1" />
              Analytics
            </Button>
            
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => onEdit(sequence)}
            >
              <Edit className="h-4 w-4 mr-1" />
              Editar
            </Button>
            
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => onDelete(sequence.id)}
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

export default function EmailSequencesPage() {
  const { 
    getEmailSequences, 
    updateEmailSequence, 
    deleteEmailSequence,
    getSequenceAnalytics 
  } = useAutomation();
  
  const [sequences, setSequences] = useState<EmailSequenceAdvanced[]>([]);
  const [loading, setLoading] = useState(true);
  const [builderOpen, setBuilderOpen] = useState(false);
  const [editingSequence, setEditingSequence] = useState<EmailSequenceAdvanced | undefined>();
  const [activeTab, setActiveTab] = useState('sequences');

  const loadSequences = async () => {
    try {
      setLoading(true);
      const sequencesData = await getEmailSequences();
      
      // Convertir EmailSequence a EmailSequenceAdvanced añadiendo campos faltantes
      const advancedSequences: EmailSequenceAdvanced[] = sequencesData.map(sequence => ({
        ...sequence,
        trigger: {
          type: 'custom_event', // Mapear tipo por defecto
          conditions: {},
          delay: 0
        },
        audience: {
          segments: ['all-subscribers'], // Segmento por defecto
          filters: [], // Filtros vacíos por defecto
          maxSubscribers: undefined,
          excludeUnsubscribed: sequence.audience?.excludeUnsubscribed ?? true
        },
        tracking: {
          openTracking: sequence.tracking?.trackOpens ?? true,
          clickTracking: sequence.tracking?.trackClicks ?? true,
          utmTracking: {
            enabled: true,
            source: 'email',
            medium: 'sequence',
            campaign: sequence.name
          },
          conversionTracking: {
            enabled: true,
            goals: sequence.tracking?.analytics?.conversionGoals?.map(goal => ({
              name: goal.name,
              event: goal.type || 'conversion',
              value: 100 // Valor por defecto
            })) ?? []
          }
        },
        emails: sequence.emails.map(email => ({
          id: email.id,
          name: email.name,
          subject: email.subject,
          content: email.template || '', // Mapear template a content
          delay: email.delay,
          personalization: {
            enabled: email.personalized,
            variables: email.dynamicContent ? ['name', 'company', 'industry'] : []
          },
          sendSettings: {
            timezone: 'America/New_York',
            skipWeekends: email.settings.skipWeekends,
            respectTimezone: email.settings.respectTimezone,
            maxRetries: email.settings.maxDeliveryAttempts,
            retryInterval: 24,
            priority: 'normal' as const,
            preferredTime: '09:00',
            daysOfWeek: [1, 2, 3, 4, 5], // Lunes a viernes
            throttle: 100
          }
        })),
        stats: {
          subscribers: Math.floor(Math.random() * 1000 + 100),
          totalSent: Math.floor(Math.random() * 5000 + 500),
          totalDelivered: Math.floor(Math.random() * 4500 + 450),
          totalOpened: Math.floor(Math.random() * 2000 + 200),
          totalClicked: Math.floor(Math.random() * 500 + 50),
          totalUnsubscribed: Math.floor(Math.random() * 50 + 5),
          totalCompleted: Math.floor(Math.random() * 300 + 30),
          averageOpenRate: Math.random() * 30 + 20,
          averageClickRate: Math.random() * 15 + 5,
          conversionRate: Math.random() * 5 + 1,
          revenue: Math.floor(Math.random() * 10000 + 1000)
        },
        settings: {
          autoArchive: false,
          reEntryAllowed: sequence.settings?.maxSubscribers ? false : true,
          unsubscribeHandling: {
            removeFromSequence: true,
            removeFromAllSequences: false,
            addToSuppressionList: true
          },
          failureHandling: {
            maxRetries: 3,
            retryDelay: 60,
            skipOnPermanentFailure: true
          }
        }
      }));
      
      setSequences(advancedSequences);
    } catch (error) {
      console.error('Error loading sequences:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleStatus = async (sequenceId: string, status: 'active' | 'paused') => {
    try {
      await updateEmailSequence(sequenceId, { status });
      await loadSequences();
    } catch (error) {
      console.error('Error updating sequence:', error);
    }
  };

  const handleEditSequence = (sequence: EmailSequenceAdvanced) => {
    setEditingSequence(sequence);
    setBuilderOpen(true);
  };

  const handleDeleteSequence = async (sequenceId: string) => {
    try {
      await deleteEmailSequence(sequenceId);
      await loadSequences();
    } catch (error) {
      console.error('Error deleting sequence:', error);
    }
  };

  const handleViewAnalytics = (sequenceId: string) => {
    // TODO: Navigate to analytics view or open modal
    console.log('View analytics for:', sequenceId);
  };

  const handleBuilderClose = () => {
    setBuilderOpen(false);
    setEditingSequence(undefined);
  };

  // Mock data for overview
  const overviewStats = {
    totalSequences: sequences.length,
    activeSequences: sequences.filter(s => s.status === 'active').length,
    totalSubscribers: sequences.reduce((sum, s) => sum + s.stats.subscribers, 0),
    averageOpenRate: sequences.length > 0 
      ? sequences.reduce((sum, s) => sum + s.stats.averageOpenRate, 0) / sequences.length
      : 0
  };

  useEffect(() => {
    loadSequences();
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Email Sequences</h1>
          <p className="text-muted-foreground">
            Automatiza tu email marketing con secuencias inteligentes y personalizadas
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Importar
          </Button>
          <Button onClick={() => setBuilderOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Nueva Secuencia
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="sequences">Secuencias</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="subscribers">Suscriptores</TabsTrigger>
        </TabsList>
        
        <TabsContent value="sequences" className="space-y-6">
          {/* Overview Cards */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Secuencias</p>
                    <p className="text-2xl font-bold">{overviewStats.totalSequences}</p>
                  </div>
                  <Mail className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Secuencias Activas</p>
                    <p className="text-2xl font-bold text-green-600">{overviewStats.activeSequences}</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Suscriptores</p>
                    <p className="text-2xl font-bold text-purple-600">{overviewStats.totalSubscribers}</p>
                  </div>
                  <Users className="h-8 w-8 text-purple-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Open Rate Promedio</p>
                    <p className="text-2xl font-bold text-orange-600">
                      {overviewStats.averageOpenRate.toFixed(1)}%
                    </p>
                  </div>
                  <MousePointer className="h-8 w-8 text-orange-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sequences Grid */}
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <RefreshCw className="h-8 w-8 animate-spin" />
            </div>
          ) : sequences.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {sequences.map(sequence => (
                <EmailSequenceCard
                  key={sequence.id}
                  sequence={sequence}
                  onToggleStatus={handleToggleStatus}
                  onEdit={handleEditSequence}
                  onDelete={handleDeleteSequence}
                  onViewAnalytics={handleViewAnalytics}
                />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="flex items-center justify-center h-64">
                <div className="text-center text-gray-500">
                  <Mail className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p className="text-lg font-medium">No hay secuencias de email</p>
                  <p className="text-sm mb-4">Crea tu primera secuencia para automatizar tu email marketing</p>
                  <Button onClick={() => setBuilderOpen(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Crear Primera Secuencia
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <Card>
            <CardContent className="flex items-center justify-center h-64">
              <div className="text-center text-gray-500">
                <FileText className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p className="text-lg font-medium">Templates de Email</p>
                <p className="text-sm mb-4">Gestiona y crea templates reutilizables para tus secuencias</p>
                <Button variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Próximamente
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardContent className="flex items-center justify-center h-64">
              <div className="text-center text-gray-500">
                <BarChart3 className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p className="text-lg font-medium">Analytics Avanzado</p>
                <p className="text-sm mb-4">Análisis detallado del rendimiento de tus secuencias</p>
                <Button variant="outline">
                  <Eye className="h-4 w-4 mr-2" />
                  Próximamente
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="subscribers" className="space-y-6">
          <Card>
            <CardContent className="flex items-center justify-center h-64">
              <div className="text-center text-gray-500">
                <Users className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p className="text-lg font-medium">Gestión de Suscriptores</p>
                <p className="text-sm mb-4">Administra suscriptores, segmentos y listas de supresión</p>
                <Button variant="outline">
                  <Settings className="h-4 w-4 mr-2" />
                  Próximamente
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Email Sequence Builder */}
      <EmailSequenceBuilder
        open={builderOpen}
        onOpenChange={handleBuilderClose}
        onSequenceCreated={loadSequences}
        editSequence={editingSequence}
      />
    </div>
  );
}