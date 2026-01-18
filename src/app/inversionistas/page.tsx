import { TrendingUp, DollarSign, Users, BarChart3, Target, Calendar, Award, Download, Eye, PieChart } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function InversionistasPage() {
  const financialHighlights = [
    {
      metric: 'Ingresos Anuales 2025',
      value: '$48.2M USD',
      change: '+127% YoY',
      positive: true
    },
    {
      metric: 'ARR (Recurring Revenue)',
      value: '$42.8M USD',
      change: '+145% YoY',
      positive: true
    },
    {
      metric: 'EBITDA',
      value: '$12.4M USD',
      change: '+89% YoY',
      positive: true
    },
    {
      metric: 'Margen Bruto',
      value: '76.3%',
      change: '+4.2pp YoY',
      positive: true
    },
    {
      metric: 'Clientes Activos',
      value: '50,247',
      change: '+156% YoY',
      positive: true
    },
    {
      metric: 'ARPU (Avg Revenue/User)',
      value: '$79.4 USD',
      change: '+12% YoY',
      positive: true
    },
    {
      metric: 'Churn Rate',
      value: '2.8%',
      change: '-1.2pp YoY',
      positive: true
    },
    {
      metric: 'LTV/CAC Ratio',
      value: '4.7x',
      change: '+0.8x YoY',
      positive: true
    }
  ]

  const fundingRounds = [
    {
      series: 'Serie B',
      amount: '$15M USD',
      date: '2025-11-15',
      leadInvestor: 'ALLVP',
      participants: ['Kaszek Ventures', 'Softbank Latin America', 'Mountain Nazca'],
      valuation: '$85M USD',
      use: 'Expansión internacional y desarrollo de productos'
    },
    {
      series: 'Serie A',
      amount: '$6.5M USD',
      date: '2024-03-20',
      leadInvestor: 'Kaszek Ventures',
      participants: ['ALLVP', 'Monashees', 'Angel Investors'],
      valuation: '$32M USD',
      use: 'Escalamiento de infraestructura y equipo'
    },
    {
      series: 'Seed',
      amount: '$2.1M USD',
      date: '2022-08-10',
      leadInvestor: 'Angel Ventures',
      participants: ['500 Startups', 'Founders Fund LATAM'],
      valuation: '$12M USD',
      use: 'Desarrollo de plataforma y primeros contratos'
    }
  ]

  const keyMetrics = [
    {
      category: 'Crecimiento',
      metrics: [
        { name: 'Revenue Growth Rate', value: '127% YoY', trend: 'up' },
        { name: 'Customer Growth Rate', value: '156% YoY', trend: 'up' },
        { name: 'Market Share México', value: '8.4%', trend: 'up' },
        { name: 'International Revenue', value: '15%', trend: 'up' }
      ]
    },
    {
      category: 'Operaciones',
      metrics: [
        { name: 'Gross Margin', value: '76.3%', trend: 'up' },
        { name: 'Operating Margin', value: '18.7%', trend: 'up' },
        { name: 'Customer Acquisition Cost', value: '$45', trend: 'down' },
        { name: 'Payback Period', value: '8.2 months', trend: 'down' }
      ]
    },
    {
      category: 'Retención',
      metrics: [
        { name: 'Net Revenue Retention', value: '118%', trend: 'up' },
        { name: 'Customer Lifetime Value', value: '$2,847', trend: 'up' },
        { name: 'Monthly Churn Rate', value: '2.8%', trend: 'down' },
        { name: 'Net Promoter Score', value: '68', trend: 'up' }
      ]
    }
  ]

  const milestones = [
    {
      date: '2026 Q2',
      milestone: 'Lanzamiento en Colombia y Perú',
      status: 'planned',
      description: 'Expansión a dos nuevos mercados latinoamericanos'
    },
    {
      date: '2025 Q4',
      milestone: 'Serie B - $15M USD',
      status: 'completed',
      description: 'Ronda de financiación liderada por ALLVP'
    },
    {
      date: '2025 Q3',
      milestone: '50,000 clientes activos',
      status: 'completed',
      description: 'Hito importante de crecimiento de base de usuarios'
    },
    {
      date: '2025 Q2',
      milestone: 'Certificación ISO 27001',
      status: 'completed',
      description: 'Certificación internacional de seguridad de datos'
    },
    {
      date: '2024 Q4',
      milestone: 'Centro de datos Monterrey',
      status: 'completed',
      description: 'Apertura del segundo centro de datos en México'
    },
    {
      date: '2024 Q1',
      milestone: 'Serie A - $6.5M USD',
      status: 'completed',
      description: 'Primera ronda institucional liderada por Kaszek'
    }
  ]

  const boardMembers = [
    {
      name: 'Carlos Mendoza',
      role: 'CEO & Co-Founder',
      company: 'ARCII Cloud',
      bio: 'Ex-Amazon Web Services, 15+ años en cloud computing'
    },
    {
      name: 'Ana Rodríguez',
      role: 'CTO & Co-Founder',
      company: 'ARCII Cloud',
      bio: 'Ex-Microsoft Azure, experta en arquitectura distribuida'
    },
    {
      name: 'Roberto Silva',
      role: 'Managing Partner',
      company: 'ALLVP',
      bio: 'Inversionista líder en tech LATAM, 20+ años experiencia'
    },
    {
      name: 'María Fernández',
      role: 'Principal',
      company: 'Kaszek Ventures',
      bio: 'Especialista en SaaS B2B y infraestructura cloud'
    },
    {
      name: 'Diego Martínez',
      role: 'Independent Director',
      company: 'Ex-CEO Softtek',
      bio: 'Ejecutivo senior con experiencia en escalamiento internacional'
    }
  ]

  const upcomingEvents = [
    {
      date: '2026-02-15',
      event: 'Resultados Q4 2025',
      type: 'Earnings Call',
      time: '11:00 AM CST'
    },
    {
      date: '2026-03-20',
      event: 'LATAM Tech Conference',
      type: 'Presentación CEO',
      time: '2:00 PM EST'
    },
    {
      date: '2026-04-10',
      event: 'Asamblea de Inversionistas',
      type: 'Shareholder Meeting',
      time: '10:00 AM CST'
    },
    {
      date: '2026-05-15',
      event: 'Resultados Q1 2026',
      type: 'Earnings Call',
      time: '11:00 AM CST'
    }
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700'
      case 'planned':
        return 'bg-blue-100 text-blue-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Relaciones con Inversionistas
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Información financiera, métricas de crecimiento y actualizaciones estratégicas para nuestros inversionistas y potenciales socios de capital.
          </p>
        </div>

        {/* Key Financial Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Métricas Financieras Clave</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financialHighlights.map((metric, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <DollarSign className="w-8 h-8 text-green-600" />
                    <span className={`text-sm font-semibold px-2 py-1 rounded ${
                      metric.positive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-2">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.metric}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Funding History */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Historial de Financiamiento</h2>
          
          <div className="space-y-6">
            {fundingRounds.map((round, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {round.series}
                        </span>
                        <span className="text-2xl font-bold text-gray-800">{round.amount}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(round.date)}
                      </div>
                      <div className="text-sm text-gray-500">
                        Valuación: <span className="font-semibold text-gray-700">{round.valuation}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Lead Investor:</h4>
                      <p className="text-blue-600 font-medium">{round.leadInvestor}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Participantes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {round.participants.map((participant, i) => (
                          <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                            {participant}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Uso de fondos:</h4>
                    <p className="text-gray-600">{round.use}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Metrics Dashboard */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Dashboard de Métricas</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {keyMetrics.map((category, index) => (
              <Card key={index}>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">{category.category}</h3>
                  <div className="space-y-4">
                    {category.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{metric.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-800">{metric.value}</span>
                          <div className={`w-2 h-2 rounded-full ${
                            metric.trend === 'up' ? 'bg-green-500' : 
                            metric.trend === 'down' ? 'bg-red-500' : 'bg-gray-500'
                          }`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Roadmap & Milestones */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Roadmap e Hitos</h2>
          
          <Card>
            <div className="p-8">
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-4 h-4 rounded-full ${
                        milestone.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
                      }`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <h3 className="font-bold text-gray-800">{milestone.milestone}</h3>
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(milestone.status)}`}>
                            {milestone.status === 'completed' ? 'Completado' : 'Planeado'}
                          </span>
                          <span className="text-sm text-gray-500">{milestone.date}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Board of Directors */}
        <Card className="mb-16">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Consejo Directivo</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {boardMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-3">{member.company}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Próximos Eventos</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Calendar className="w-8 h-8 text-blue-600" />
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {event.type}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{event.event}</h3>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{formatDate(event.date)}</span>
                    <span>{event.time}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Financial Documents */}
        <Card className="mb-16">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Documentos Financieros</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Reporte Anual 2025', type: 'PDF', size: '2.4 MB' },
                { name: 'Estados Financieros Q4', type: 'PDF', size: '1.8 MB' },
                { name: 'Investor Deck', type: 'PDF', size: '5.2 MB' },
                { name: 'Unit Economics', type: 'Excel', size: '980 KB' }
              ].map((doc, index) => (
                <div key={index} className="text-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                  <Download className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">{doc.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{doc.type} • {doc.size}</p>
                  <Button size="sm" variant="outline">
                    Descargar
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Contact Information */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="p-12 text-center">
            <Eye className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Contacto de Inversionistas</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Para consultas de inversionistas, información financiera adicional o oportunidades de inversión, contacte nuestro equipo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Solicitar Reunión
              </Button>
              <Button size="lg" variant="outline">
                Descargar Investor Pack
              </Button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-sm opacity-75">
              <span>📧 investors@arciicloud.com</span>
              <span>📞 +52 55 1234-5678 ext. 300</span>
              <span>💼 LinkedIn: /company/arcii-cloud</span>
            </div>
          </div>
        </Card>

        {/* Legal Disclaimer */}
        <div className="mt-12 text-center text-xs text-gray-500 max-w-4xl mx-auto">
          <p className="mb-4">
            <strong>Aviso Legal:</strong> La información contenida en esta página es solo para fines informativos. 
            Los datos financieros están basados en estados financieros auditados y proyecciones internas. 
            Las inversiones conllevan riesgos y el rendimiento pasado no garantiza resultados futuros.
          </p>
          <p>
            Para información financiera oficial y regulada, consulte nuestros reportes auditados disponibles bajo solicitud.
          </p>
        </div>
      </div>
    </div>
  )
}