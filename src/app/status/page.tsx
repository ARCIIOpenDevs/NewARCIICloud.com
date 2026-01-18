import { CheckCircle, AlertTriangle, XCircle, Clock, Activity, Zap } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function StatusPage() {
  const services = [
    {
      name: 'Hosting Web',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '180ms',
      description: 'Todos los planes de hosting web funcionando normalmente'
    },
    {
      name: 'VPS Cloud',
      status: 'operational', 
      uptime: '99.99%',
      responseTime: '95ms',
      description: 'Servidores VPS operando sin problemas'
    },
    {
      name: 'Email Corporativo',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '120ms',
      description: 'Servicios de email funcionando correctamente'
    },
    {
      name: 'DNS',
      status: 'operational',
      uptime: '100%',
      responseTime: '45ms',
      description: 'Resolución DNS funcionando normalmente'
    },
    {
      name: 'Panel de Control',
      status: 'maintenance',
      uptime: '99.95%',
      responseTime: '250ms',
      description: 'Mantenimiento programado - funcionalidad limitada'
    },
    {
      name: 'Backup Cloud',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '200ms',
      description: 'Backups automáticos funcionando correctamente'
    }
  ]

  const incidents = [
    {
      id: 1,
      title: 'Mantenimiento programado del Panel de Control',
      status: 'in-progress',
      severity: 'low',
      startTime: '2026-01-17T02:00:00Z',
      description: 'Actualización del panel de control para mejorar la experiencia de usuario.',
      updates: [
        {
          time: '2026-01-17T02:30:00Z',
          message: 'Mantenimiento en progreso. Algunas funciones pueden estar temporalmente no disponibles.'
        },
        {
          time: '2026-01-17T02:00:00Z', 
          message: 'Iniciando mantenimiento programado del panel de control.'
        }
      ]
    },
    {
      id: 2,
      title: 'Latencia elevada en CDN - Resuelto',
      status: 'resolved',
      severity: 'medium',
      startTime: '2026-01-16T14:30:00Z',
      endTime: '2026-01-16T15:45:00Z',
      description: 'Se experimentó latencia elevada en algunos nodos del CDN.',
      updates: [
        {
          time: '2026-01-16T15:45:00Z',
          message: 'Problema resuelto. La latencia del CDN ha vuelto a valores normales.'
        },
        {
          time: '2026-01-16T15:15:00Z',
          message: 'Identificada la causa del problema. Aplicando corrección.'
        },
        {
          time: '2026-01-16T14:30:00Z',
          message: 'Detectada latencia elevada en CDN. Investigando.'
        }
      ]
    }
  ]

  const metrics = [
    {
      name: 'Uptime Global',
      value: '99.98%',
      change: '+0.02%',
      period: 'Últimos 30 días'
    },
    {
      name: 'Tiempo de Respuesta',
      value: '142ms',
      change: '-8ms',
      period: 'Promedio 24h'
    },
    {
      name: 'Incidentes Resueltos',
      value: '12',
      change: '+2',
      period: 'Este mes'
    },
    {
      name: 'Tiempo Resolución',
      value: '23min',
      change: '-5min',
      period: 'Promedio'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'maintenance':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-orange-500" />
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />
      default:
        return <Clock className="w-5 h-5 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-600'
      case 'maintenance':
        return 'text-yellow-600'
      case 'degraded':
        return 'text-orange-600'
      case 'outage':
        return 'text-red-600'
      default:
        return 'text-gray-600'
    }
  }

  const getIncidentSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'bg-blue-100 text-blue-700'
      case 'medium':
        return 'bg-yellow-100 text-yellow-700'
      case 'high':
        return 'bg-orange-100 text-orange-700'
      case 'critical':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('es-MX')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Activity className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Estado de Servicios
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Monitor en tiempo real de todos nuestros servicios
          </p>
        </div>

        {/* Overall Status */}
        <Card className="mb-8">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">Todos los sistemas operativos</h2>
                  <p className="text-gray-600">Última actualización: hace 2 minutos</p>
                </div>
              </div>
              <Button variant="outline">
                Suscribirse a Actualizaciones
              </Button>
            </div>
          </div>
        </Card>

        {/* Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index}>
              <div className="p-6 text-center">
                <div className="text-2xl font-bold text-gray-800 mb-2">{metric.value}</div>
                <div className="text-sm font-medium text-gray-600 mb-1">{metric.name}</div>
                <div className="text-xs text-gray-500">
                  <span className={metric.change.startsWith('+') ? 'text-red-600' : 'text-green-600'}>
                    {metric.change}
                  </span> {metric.period}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Services Status */}
        <Card className="mb-8">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-800">Estado de Servicios</h2>
          </div>
          
          <div className="divide-y">
            {services.map((service, index) => (
              <div key={index} className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {getStatusIcon(service.status)}
                    <div>
                      <h3 className="font-semibold text-gray-800">{service.name}</h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className={`font-medium ${getStatusColor(service.status)}`}>
                      {service.status === 'operational' ? 'Operativo' :
                       service.status === 'maintenance' ? 'Mantenimiento' :
                       service.status === 'degraded' ? 'Degradado' : 'Fuera de servicio'}
                    </div>
                    <div className="text-sm text-gray-500">
                      {service.uptime} uptime • {service.responseTime} resp.
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Incidents */}
        <Card className="mb-8">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-800">Incidentes Recientes</h2>
          </div>
          
          <div className="divide-y">
            {incidents.map((incident) => (
              <div key={incident.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-800">{incident.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${getIncidentSeverityColor(incident.severity)}`}>
                        {incident.severity === 'low' ? 'Baja' :
                         incident.severity === 'medium' ? 'Media' :
                         incident.severity === 'high' ? 'Alta' : 'Crítica'}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{incident.description}</p>
                    <div className="text-xs text-gray-500">
                      Iniciado: {formatTime(incident.startTime)}
                      {incident.endTime && ` • Resuelto: ${formatTime(incident.endTime)}`}
                    </div>
                  </div>
                  
                  <div className={`px-3 py-1 text-xs rounded-full ${
                    incident.status === 'resolved' ? 'bg-green-100 text-green-700' :
                    incident.status === 'in-progress' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {incident.status === 'resolved' ? 'Resuelto' :
                     incident.status === 'in-progress' ? 'En Progreso' : 'Investigando'}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-3">Actualizaciones:</h4>
                  <div className="space-y-3">
                    {incident.updates.map((update, idx) => (
                      <div key={idx} className="flex gap-3">
                        <div className="text-xs text-gray-500 mt-1 w-20">
                          {new Date(update.time).toLocaleTimeString('es-MX', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </div>
                        <div className="text-sm text-gray-700">{update.message}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Uptime Chart Placeholder */}
        <Card className="mb-8">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-800">Uptime Últimos 30 Días</h2>
          </div>
          
          <div className="p-6">
            <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-lg p-8 text-center">
              <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <p className="text-green-800 font-semibold mb-2">99.98% Uptime Promedio</p>
              <p className="text-green-700 text-sm">Solo 8.6 minutos de downtime en los últimos 30 días</p>
            </div>
          </div>
        </Card>

        {/* Subscribe Section */}
        <Card>
          <div className="p-8 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <Activity className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Mantente Informado
            </h2>
            <p className="text-gray-600 mb-6">
              Recibe notificaciones inmediatas sobre el estado de nuestros servicios
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button size="lg">
                Suscribirse
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
              <button className="text-blue-600 hover:underline">RSS Feed</button>
              <button className="text-blue-600 hover:underline">Webhook API</button>
              <button className="text-blue-600 hover:underline">Slack Integration</button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}