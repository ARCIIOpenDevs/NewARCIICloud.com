import { Heart, Leaf, Users, GraduationCap, Lightbulb, Recycle, Shield, Target, Award, Calendar } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function ResponsabilidadSocialPage() {
  const coreValues = [
    {
      title: 'Sostenibilidad Ambiental',
      description: 'Compromiso con la neutralidad de carbono y uso de energías renovables',
      icon: Leaf,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Inclusión Digital',
      description: 'Democratizar el acceso a tecnologías cloud para todas las comunidades',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Educación Tecnológica',
      description: 'Formar a las nuevas generaciones en habilidades digitales del futuro',
      icon: GraduationCap,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Innovación Social',
      description: 'Desarrollar soluciones tecnológicas para problemas sociales complejos',
      icon: Lightbulb,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ]

  const initiatives = [
    {
      id: 1,
      title: 'Green Cloud 2030',
      category: 'Ambiental',
      status: 'En progreso',
      progress: 65,
      description: 'Programa integral para alcanzar la neutralidad de carbono en todos nuestros centros de datos para 2030.',
      impact: '40% reducción en emisiones de CO2',
      investment: '$5M USD',
      timeline: '2023-2030',
      details: [
        'Migración a energías 100% renovables',
        'Implementación de sistemas de refrigeración eficientes',
        'Compensación de carbono mediante reforestación',
        'Certificación LEED para todas las instalaciones'
      ]
    },
    {
      id: 2,
      title: 'Código para México',
      category: 'Educación',
      status: 'Activo',
      progress: 78,
      description: 'Programa de becas y capacitación en programación para jóvenes de comunidades vulnerables.',
      impact: '1,200 jóvenes capacitados',
      investment: '$2.3M USD',
      timeline: '2022-ongoing',
      details: [
        'Bootcamps gratuitos de programación',
        'Mentorías con desarrolladores senior',
        'Garantía de empleabilidad del 85%',
        'Alianzas con universidades públicas'
      ]
    },
    {
      id: 3,
      title: 'Tech4Good Accelerator',
      category: 'Innovación Social',
      status: 'Lanzamiento 2026',
      progress: 25,
      description: 'Aceleradora de startups que desarrollan soluciones tecnológicas para problemas sociales.',
      impact: 'Meta: 50 startups en 3 años',
      investment: '$3.5M USD',
      timeline: '2026-2029',
      details: [
        'Incubación de startups de impacto social',
        'Inversión semilla hasta $100K USD',
        'Acceso gratuito a infraestructura cloud',
        'Mentoría especializada en tech for good'
      ]
    },
    {
      id: 4,
      title: 'Hosting Solidario',
      category: 'Acceso Digital',
      status: 'Activo',
      progress: 92,
      description: 'Hosting gratuito para ONGs, escuelas públicas y organizaciones sin fines de lucro.',
      impact: '450 organizaciones beneficiadas',
      investment: '$800K USD anuales',
      timeline: '2021-ongoing',
      details: [
        'Hosting web gratuito para ONGs registradas',
        'Soporte técnico especializado sin costo',
        'Capacitación en herramientas digitales',
        'Certificados SSL incluidos'
      ]
    }
  ]

  const partnerships = [
    {
      organization: 'UNICEF México',
      project: 'Plataforma Educativa Digital',
      contribution: 'Infraestructura cloud y desarrollo',
      impact: '500,000 niños beneficiados'
    },
    {
      organization: 'Fundación Televisa',
      project: 'Conectando Comunidades Rurales',
      contribution: 'Conectividad y capacitación técnica',
      impact: '120 comunidades conectadas'
    },
    {
      organization: 'Tecnológico de Monterrey',
      project: 'Centro de Innovación Social',
      contribution: 'Laboratorio de desarrollo y mentorías',
      impact: '200 proyectos de impacto social'
    },
    {
      organization: 'Ashoka México',
      project: 'Emprendedores Sociales Tech',
      contribution: 'Aceleración y recursos tecnológicos',
      impact: '80 emprendedores sociales apoyados'
    }
  ]

  const sustainabilityGoals = [
    {
      goal: 'Energía Renovable',
      target: '100%',
      current: '68%',
      deadline: '2027',
      status: 'on-track'
    },
    {
      goal: 'Reducción CO2',
      target: '80%',
      current: '45%',
      deadline: '2030',
      status: 'on-track'
    },
    {
      goal: 'Residuos Cero',
      target: '95%',
      current: '73%',
      deadline: '2029',
      status: 'on-track'
    },
    {
      goal: 'Agua Reciclada',
      target: '60%',
      current: '38%',
      deadline: '2028',
      status: 'at-risk'
    }
  ]

  const volunteering = [
    {
      program: 'Voluntariado Tech',
      description: 'Empleados donan tiempo para enseñar programación en escuelas',
      participation: '85% del equipo',
      hours: '2,400 horas anuales'
    },
    {
      program: 'Mentoría Profesional',
      description: 'Mentorías gratuitas para desarrolladores junior',
      participation: '40 mentores activos',
      hours: '1,600 horas anuales'
    },
    {
      program: 'Hackathons Sociales',
      description: 'Organizamos hackathons para resolver problemas comunitarios',
      participation: '6 eventos anuales',
      hours: '800 participantes'
    }
  ]

  const awards = [
    {
      year: '2025',
      award: 'Empresa Socialmente Responsable',
      organization: 'Centro Mexicano para la Filantropía (CEMEFI)',
      category: 'Tecnología e Innovación'
    },
    {
      year: '2024',
      award: 'Green Tech Award',
      organization: 'Greenpeace México',
      category: 'Mejor Iniciativa Ambiental'
    },
    {
      year: '2024',
      award: 'Digital Inclusion Champion',
      organization: 'ONU México',
      category: 'Objetivos de Desarrollo Sostenible'
    },
    {
      year: '2023',
      award: 'Best Corporate Volunteer Program',
      organization: 'Voluntarios Mexicanos',
      category: 'Programa Corporativo de Voluntariado'
    }
  ]

  const upcomingEvents = [
    {
      date: '2026-02-22',
      event: 'Día de Voluntariado Corporativo',
      location: 'Ciudad de México',
      description: 'Jornada de voluntariado en escuelas públicas'
    },
    {
      date: '2026-03-15',
      event: 'Tech4Good Summit',
      location: 'Guadalajara',
      description: 'Conferencia sobre tecnología e impacto social'
    },
    {
      date: '2026-04-22',
      event: 'Día de la Tierra - Green Tech Fair',
      location: 'Monterrey',
      description: 'Feria de tecnologías verdes y sostenibles'
    },
    {
      date: '2026-05-30',
      event: 'Graduación Código para México',
      location: 'Virtual',
      description: 'Ceremonia de graduación de becarios'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'activo':
      case 'en progreso':
        return 'bg-green-100 text-green-700'
      case 'lanzamiento 2026':
        return 'bg-blue-100 text-blue-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500'
    if (progress >= 60) return 'bg-yellow-500'
    if (progress >= 40) return 'bg-orange-500'
    return 'bg-red-500'
  }

  const getSustainabilityStatusColor = (status: string) => {
    switch (status) {
      case 'on-track':
        return 'text-green-600'
      case 'at-risk':
        return 'text-orange-600'
      case 'behind':
        return 'text-red-600'
      default:
        return 'text-gray-600'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-MX', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="h-8 w-8 text-red-500" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Responsabilidad Social Corporativa
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro compromiso va más allá de la tecnología. Trabajamos para crear un impacto positivo 
            en la sociedad, el medio ambiente y las comunidades que servimos.
          </p>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nuestros Pilares de RSC</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <Card key={index} className={`${value.bgColor} border-none hover:shadow-lg transition-shadow duration-300`}>
                <div className="p-8 text-center">
                  <value.icon className={`w-12 h-12 ${value.color} mx-auto mb-4`} />
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Initiatives */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Iniciativas Principales</h2>
          
          <div className="space-y-8">
            {initiatives.map((initiative) => (
              <Card key={initiative.id} className="hover:shadow-lg transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-gray-800">{initiative.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(initiative.status)}`}>
                          {initiative.status}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">{initiative.description}</p>
                      
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="font-semibold text-gray-700">Impacto: </span>
                          <span className="text-green-600">{initiative.impact}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-700">Inversión: </span>
                          <span className="text-blue-600">{initiative.investment}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-700">Timeline: </span>
                          <span className="text-purple-600">{initiative.timeline}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:w-48 lg:ml-6 mt-4 lg:mt-0">
                      <div className="text-center mb-3">
                        <div className="text-2xl font-bold text-gray-800">{initiative.progress}%</div>
                        <div className="text-sm text-gray-600">Progreso</div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full ${getProgressColor(initiative.progress)}`}
                          style={{ width: `${initiative.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-800 mb-4">Detalles de implementación:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {initiative.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Sustainability Goals */}
        <Card className="mb-16">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Objetivos de Sostenibilidad</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sustainabilityGoals.map((goal, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 relative">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                      />
                      <path
                        d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                        fill="none"
                        stroke={goal.status === 'on-track' ? '#10b981' : goal.status === 'at-risk' ? '#f59e0b' : '#ef4444'}
                        strokeWidth="2"
                        strokeDasharray={`${parseInt(goal.current)}, 100`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-800">{goal.current}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-gray-800 mb-2">{goal.goal}</h3>
                  <div className="text-sm text-gray-600 mb-2">
                    Meta: <span className="font-semibold">{goal.target}</span>
                  </div>
                  <div className="text-xs text-gray-500 mb-2">
                    Plazo: {goal.deadline}
                  </div>
                  <div className={`text-xs font-semibold ${getSustainabilityStatusColor(goal.status)}`}>
                    {goal.status === 'on-track' ? 'En tiempo' : 
                     goal.status === 'at-risk' ? 'En riesgo' : 'Retrasado'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Strategic Partnerships */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Alianzas Estratégicas</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {partnerships.map((partnership, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-lg mb-2">{partnership.organization}</h3>
                      <p className="text-blue-600 font-medium text-sm mb-3">{partnership.project}</p>
                      <p className="text-gray-600 text-sm mb-3">{partnership.contribution}</p>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <div className="text-green-800 font-semibold text-sm">Impacto:</div>
                        <div className="text-green-700 text-sm">{partnership.impact}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Volunteer Programs */}
        <Card className="mb-16 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Programas de Voluntariado</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {volunteering.map((program, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-purple-600" />
                  </div>
                  
                  <h3 className="font-bold text-gray-800 text-lg mb-3">{program.program}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-2">
                      <span className="font-semibold text-purple-600">{program.participation}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-semibold text-pink-600">{program.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button size="lg">
                Únete a Nuestros Programas
              </Button>
            </div>
          </div>
        </Card>

        {/* Awards & Recognition */}
        <Card className="mb-16">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Reconocimientos</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-800">{award.award}</div>
                    <div className="text-sm text-gray-600">{award.organization}</div>
                    <div className="text-xs text-gray-500">{award.year} • {award.category}</div>
                  </div>
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
                  <div className="flex items-start gap-4">
                    <Calendar className="w-8 h-8 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg mb-2">{event.event}</h3>
                      <p className="text-blue-600 text-sm mb-2">{formatDate(event.date)}</p>
                      <p className="text-gray-600 text-sm mb-3">{event.location}</p>
                      <p className="text-gray-700 text-sm leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="p-12 text-center">
            <Target className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Únete a Nuestro Impacto</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Creemos que la tecnología debe ser una fuerza para el bien. 
              Si compartes nuestra visión, te invitamos a ser parte del cambio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Ser Voluntario
              </Button>
              <Button size="lg" variant="outline">
                Proponer Proyecto
              </Button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-sm opacity-75">
              <span>📧 rsc@arciicloud.com</span>
              <span>📞 +52 55 1234-5678 ext. 250</span>
              <span>🌱 #TechForGood</span>
            </div>
          </div>
        </Card>

        {/* Impact Statistics */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Nuestro Impacto en Números (2025)</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">1,650</div>
              <div className="text-sm text-gray-600">Jóvenes capacitados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">450</div>
              <div className="text-sm text-gray-600">ONGs con hosting gratuito</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">4,800</div>
              <div className="text-sm text-gray-600">Horas de voluntariado</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">68%</div>
              <div className="text-sm text-gray-600">Energía renovable</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}