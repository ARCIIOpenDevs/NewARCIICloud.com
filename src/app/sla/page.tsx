import { Shield, Clock, Award, AlertCircle, CheckCircle, Zap, Users, Phone } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function SLAPage() {
  const slaMetrics = [
    {
      service: 'Hosting Web',
      uptime: '99.9%',
      monthlyDowntime: '43.2 min',
      responseTime: '&lt; 300ms',
      support: '24/7',
      guarantee: 'Crédito del 5% por cada hora de downtime'
    },
    {
      service: 'VPS Cloud',
      uptime: '99.99%',
      monthlyDowntime: '4.32 min',
      responseTime: '&lt; 100ms',
      support: '24/7',
      guarantee: 'Crédito del 10% por cada hora de downtime'
    },
    {
      service: 'Servidores Dedicados',
      uptime: '99.99%',
      monthlyDowntime: '4.32 min',
      responseTime: '&lt; 50ms',
      support: '24/7',
      guarantee: 'Crédito del 15% por cada hora de downtime'
    },
    {
      service: 'Email Corporativo',
      uptime: '99.9%',
      monthlyDowntime: '43.2 min',
      responseTime: '&lt; 200ms',
      support: 'Horario comercial',
      guarantee: 'Crédito del 3% por cada 4 horas de downtime'
    },
    {
      service: 'CDN',
      uptime: '99.95%',
      monthlyDowntime: '21.6 min',
      responseTime: '&lt; 50ms',
      support: '24/7',
      guarantee: 'Crédito del 2% por cada hora de downtime'
    },
    {
      service: 'DNS',
      uptime: '100%',
      monthlyDowntime: '0 min',
      responseTime: '&lt; 20ms',
      support: '24/7',
      guarantee: 'Crédito del 25% por cada hora de downtime'
    }
  ]

  const supportTiers = [
    {
      tier: 'Básico',
      responseTime: '4 horas',
      resolutionTime: '24 horas',
      channels: ['Ticket', 'Email'],
      priority: 'Normal',
      coverage: 'Horario comercial',
      escalation: 'Supervisor (8 horas)'
    },
    {
      tier: 'Empresarial',
      responseTime: '2 horas',
      resolutionTime: '8 horas',
      channels: ['Ticket', 'Email', 'Chat', 'Teléfono'],
      priority: 'Alta',
      coverage: '24/7',
      escalation: 'Supervisor (4 horas)'
    },
    {
      tier: 'Premium',
      responseTime: '30 minutos',
      resolutionTime: '4 horas',
      channels: ['Ticket', 'Email', 'Chat', 'Teléfono', 'WhatsApp'],
      priority: 'Crítica',
      coverage: '24/7/365',
      escalation: 'Ingeniero Senior (1 hora)'
    },
    {
      tier: 'Enterprise',
      responseTime: '15 minutos',
      resolutionTime: '2 horas',
      channels: ['Todos los anteriores', 'Account Manager', 'Slack'],
      priority: 'Urgente',
      coverage: '24/7/365',
      escalation: 'CTO (30 minutos)'
    }
  ]

  const incidentTypes = [
    {
      severity: 'Crítico',
      description: 'Servicio completamente no disponible o pérdida total de datos',
      responseTime: '15 minutos',
      resolutionTime: '2 horas',
      examples: ['Caída total del servidor', 'Pérdida de datos', 'Brecha de seguridad'],
      color: 'bg-red-100 text-red-700'
    },
    {
      severity: 'Alto',
      description: 'Funcionalidad principal afectada, impacto significativo en el negocio',
      responseTime: '1 hora',
      resolutionTime: '4 horas',
      examples: ['Lentitud extrema', 'Error en servicios principales', 'Problemas de conectividad'],
      color: 'bg-orange-100 text-orange-700'
    },
    {
      severity: 'Medio',
      description: 'Funcionalidad secundaria afectada, impacto moderado',
      responseTime: '4 horas',
      resolutionTime: '24 horas',
      examples: ['Errores en panel de control', 'Problemas de email', 'Actualizaciones fallidas'],
      color: 'bg-yellow-100 text-yellow-700'
    },
    {
      severity: 'Bajo',
      description: 'Problemas menores que no afectan la operación principal',
      responseTime: '8 horas',
      resolutionTime: '72 horas',
      examples: ['Documentación incorrecta', 'Problemas cosméticos', 'Solicitudes de mejora'],
      color: 'bg-green-100 text-green-700'
    }
  ]

  const maintenanceTypes = [
    {
      type: 'Mantenimiento Programado',
      notice: '72 horas',
      window: 'Martes 2:00 - 4:00 AM (UTC-6)',
      frequency: 'Mensual',
      impact: 'Mínimo - servicios pueden funcionar con capacidad reducida'
    },
    {
      type: 'Actualizaciones de Seguridad',
      notice: '48 horas',
      window: 'Cualquier momento',
      frequency: 'Según necesidad',
      impact: 'Reinicio rápido - &lt; 5 minutos de interrupción'
    },
    {
      type: 'Mantenimiento de Emergencia',
      notice: 'ASAP',
      window: 'Inmediato',
      frequency: 'Excepcional',
      impact: 'Variable - se comunica en tiempo real'
    }
  ]

  const exclusions = [
    'Problemas causados por terceros (proveedores, ISPs, etc.)',
    'Desastres naturales o casos de fuerza mayor',
    'Ataques DDoS que excedan nuestra capacidad de mitigación',
    'Problemas causados por modificaciones no autorizadas del cliente',
    'Problemas derivados del uso de software no soportado',
    'Interrupciones durante mantenimientos programados notificados',
    'Problemas causados por exceder los límites de recursos contratados',
    'Vulnerabilidades en aplicaciones del cliente'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Acuerdo de Nivel de Servicio (SLA)
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro compromiso con la calidad y disponibilidad de servicios. 
            Garantías claras y medibles para su tranquilidad.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Última actualización: 17 de enero de 2026 • Vigente desde: 1 de febrero de 2026
          </div>
        </div>

        {/* Executive Summary */}
        <Card className="mb-12 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <div className="p-8">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-8 h-8 text-green-600 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Resumen Ejecutivo</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  ARCII Cloud se compromete a proporcionar servicios de hosting y cloud de alta calidad con 
                  garantías de disponibilidad del 99.9% al 100% según el servicio contratado.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">99.99%</div>
                    <div className="text-sm text-gray-600">Uptime Promedio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">&lt; 15min</div>
                    <div className="text-sm text-gray-600">Tiempo de Respuesta</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">24/7/365</div>
                    <div className="text-sm text-gray-600">Soporte Premium</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Service Level Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Niveles de Servicio por Producto</h2>
          
          <div className="overflow-x-auto">
            <div className="min-w-full">
              <Card>
                <div className="overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Servicio</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-800">Uptime</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-800">Downtime/Mes</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-800">Respuesta</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-800">Soporte</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-800">Garantía</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {slaMetrics.map((metric, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div className="font-medium text-gray-800">{metric.service}</div>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-semibold">
                              {metric.uptime}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-center text-sm text-gray-600">{metric.monthlyDowntime}</td>
                          <td className="px-6 py-4 text-center text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: metric.responseTime }} />
                          <td className="px-6 py-4 text-center text-sm text-gray-600">{metric.support}</td>
                          <td className="px-6 py-4 text-center text-sm text-gray-600">{metric.guarantee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Support Response Times */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Tiempos de Respuesta de Soporte</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportTiers.map((tier, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{tier.tier}</h3>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Respuesta:</span>
                      <div className="text-blue-600 font-semibold">{tier.responseTime}</div>
                    </div>
                    
                    <div>
                      <span className="font-medium text-gray-700">Resolución:</span>
                      <div className="text-green-600 font-semibold">{tier.resolutionTime}</div>
                    </div>
                    
                    <div>
                      <span className="font-medium text-gray-700">Cobertura:</span>
                      <div className="text-gray-600">{tier.coverage}</div>
                    </div>
                    
                    <div>
                      <span className="font-medium text-gray-700">Canales:</span>
                      <div className="text-gray-600 text-xs">{tier.channels.join(', ')}</div>
                    </div>
                    
                    <div>
                      <span className="font-medium text-gray-700">Escalación:</span>
                      <div className="text-orange-600 text-xs">{tier.escalation}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Incident Classification */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Clasificación de Incidentes</h2>
          
          <div className="space-y-6">
            {incidentTypes.map((incident, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <span className={`inline-block px-3 py-2 rounded-lg text-sm font-bold ${incident.color}`}>
                        {incident.severity}
                      </span>
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-gray-700 mb-4">{incident.description}</p>
                      
                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <span className="font-medium text-gray-700">Tiempo de Respuesta:</span>
                          <div className="text-blue-600 font-semibold">{incident.responseTime}</div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Tiempo de Resolución:</span>
                          <div className="text-green-600 font-semibold">{incident.resolutionTime}</div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">SLA Target:</span>
                          <div className="text-purple-600 font-semibold">95% cumplimiento</div>
                        </div>
                      </div>
                      
                      <div>
                        <span className="font-medium text-gray-700 mb-2 block">Ejemplos:</span>
                        <div className="flex flex-wrap gap-2">
                          {incident.examples.map((example, i) => (
                            <span key={i} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Maintenance Windows */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Ventanas de Mantenimiento</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {maintenanceTypes.map((maintenance, index) => (
              <Card key={index}>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                    <h3 className="text-lg font-bold text-gray-800">{maintenance.type}</h3>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Aviso Previo:</span>
                      <div className="text-gray-600">{maintenance.notice}</div>
                    </div>
                    
                    <div>
                      <span className="font-medium text-gray-700">Ventana:</span>
                      <div className="text-gray-600" dangerouslySetInnerHTML={{ __html: maintenance.window }} />
                    </div>
                    
                    <div>
                      <span className="font-medium text-gray-700">Frecuencia:</span>
                      <div className="text-gray-600">{maintenance.frequency}</div>
                    </div>
                    
                    <div>
                      <span className="font-medium text-gray-700">Impacto:</span>
                      <div className="text-gray-600 text-xs" dangerouslySetInnerHTML={{ __html: maintenance.impact }} />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Credits */}
        <Card className="mb-16">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Créditos de Servicio</h2>
            
            <div className="bg-green-50 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-4">
                <Award className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-green-800 mb-2">Política de Compensación</h3>
                  <p className="text-green-700">
                    Si no cumplimos con nuestros SLA garantizados, ofrecemos créditos automáticos 
                    que se aplicarán a su próxima factura sin necesidad de solicitud.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Cálculo de Créditos:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                    <span>El crédito se calcula basado en el tiempo de inactividad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                    <span>Se aplica automáticamente en la siguiente factura</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                    <span>Máximo del 100% del costo mensual del servicio afectado</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Solicitud de Crédito:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                    <span>Procesamiento automático dentro de 5 días hábiles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                    <span>Notificación por email del crédito aplicado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                    <span>Disponible para revisión en su panel de control</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Exclusions */}
        <Card className="mb-16 bg-yellow-50 border-yellow-200">
          <div className="p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-yellow-600 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-yellow-800 mb-6">Exclusiones del SLA</h2>
                <p className="text-yellow-700 mb-6">
                  Los siguientes eventos no están cubiertos por nuestras garantías de SLA:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {exclusions.map((exclusion, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-yellow-700 text-sm">{exclusion}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Monitoring and Reporting */}
        <Card className="mb-16">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Monitoreo y Reportes</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Monitoreo en Tiempo Real</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span>Monitoreo 24/7 desde múltiples ubicaciones</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Alertas automáticas ante incidencias</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-purple-600" />
                    <span>Dashboard público de estado de servicios</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Reportes de SLA</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-orange-600" />
                    <span>Reportes mensuales automatizados</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-blue-600" />
                    <span>Métricas de rendimiento histórico</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span>Análisis de tendencias y mejoras</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Contact and Support */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="p-12 text-center">
            <Phone className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">¿Necesita Soporte?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de soporte está disponible 24/7 para ayudarle con cualquier consulta 
              relacionada con nuestros acuerdos de nivel de servicio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Abrir Ticket de Soporte
              </Button>
              <Button size="lg" variant="outline">
                Ver Estado de Servicios
              </Button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-sm opacity-75">
              <span>📧 sla@arciicloud.com</span>
              <span>📞 +52 55 1234 5678</span>
              <span>💬 Chat en vivo 24/7</span>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p className="mb-2">
            Este SLA forma parte integral de nuestros Términos de Servicio. 
            Cualquier modificación será notificada con 30 días de antelación.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/legal/terminos" className="text-blue-600 hover:underline">Términos de Servicio</a>
            <a href="/legal/privacidad" className="text-blue-600 hover:underline">Política de Privacidad</a>
            <a href="/status" className="text-blue-600 hover:underline">Estado de Servicios</a>
          </div>
        </div>
      </div>
    </div>
  )
}