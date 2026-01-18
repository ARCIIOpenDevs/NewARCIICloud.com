import { Briefcase, MapPin, Clock, DollarSign, Users, Zap, Award, Heart, Send } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function CarrerasPage() {
  const openPositions = [
    {
      id: 1,
      title: 'Senior DevOps Engineer',
      department: 'Ingeniería',
      type: 'Tiempo Completo',
      location: 'Remoto/Ciudad de México',
      salary: '$80,000 - $120,000 MXN',
      experience: '5+ años',
      description: 'Buscamos un DevOps Engineer experimentado para optimizar nuestra infraestructura cloud y automatizar procesos de deployment.',
      requirements: [
        'Experiencia con Kubernetes, Docker, y AWS/Azure',
        'Conocimiento en CI/CD pipelines',
        'Experiencia con monitoring y logging',
        'Scripting en Python/Bash'
      ],
      skills: ['Kubernetes', 'AWS', 'Python', 'Terraform', 'Monitoring'],
      posted: '2026-01-15'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      department: 'Desarrollo',
      type: 'Tiempo Completo',
      location: 'Guadalajara/Remoto',
      salary: '$60,000 - $90,000 MXN',
      experience: '3+ años',
      description: 'Desarrollador Full Stack para trabajar en nuestras plataformas de administración y paneles de control.',
      requirements: [
        'React.js/Next.js y Node.js',
        'Experiencia con bases de datos SQL/NoSQL',
        'APIs RESTful y GraphQL',
        'Git y metodologías ágiles'
      ],
      skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'GraphQL'],
      posted: '2026-01-12'
    },
    {
      id: 3,
      title: 'Customer Success Manager',
      department: 'Atención al Cliente',
      type: 'Tiempo Completo',
      location: 'Ciudad de México',
      salary: '$45,000 - $65,000 MXN',
      experience: '2+ años',
      description: 'Especialista en éxito del cliente para garantizar la satisfacción y retención de nuestros clientes empresariales.',
      requirements: [
        'Experiencia en customer success o account management',
        'Excelentes habilidades de comunicación',
        'Conocimiento técnico básico en hosting/cloud',
        'Inglés conversacional'
      ],
      skills: ['Customer Success', 'Account Management', 'SaaS', 'Analytics'],
      posted: '2026-01-10'
    },
    {
      id: 4,
      title: 'Security Engineer',
      department: 'Seguridad',
      type: 'Tiempo Completo',
      location: 'Monterrey/Remoto',
      salary: '$90,000 - $130,000 MXN',
      experience: '4+ años',
      description: 'Ingeniero de seguridad para fortalecer nuestra infraestructura y mantener los más altos estándares de ciberseguridad.',
      requirements: [
        'Experiencia en security operations y incident response',
        'Conocimiento en compliance (SOC 2, ISO 27001)',
        'Penetration testing y vulnerability assessment',
        'Certificaciones de seguridad preferidas'
      ],
      skills: ['Cybersecurity', 'Compliance', 'Incident Response', 'SIEM', 'Penetration Testing'],
      posted: '2026-01-08'
    },
    {
      id: 5,
      title: 'UI/UX Designer',
      department: 'Diseño',
      type: 'Tiempo Completo',
      location: 'Remoto',
      salary: '$50,000 - $75,000 MXN',
      experience: '3+ años',
      description: 'Diseñador UI/UX para mejorar la experiencia de usuario en nuestros productos y crear interfaces intuitivas.',
      requirements: [
        'Portfolio sólido en diseño de productos digitales',
        'Experiencia con Figma, Sketch o herramientas similares',
        'User research y testing',
        'Conocimiento de design systems'
      ],
      skills: ['UI Design', 'UX Research', 'Figma', 'Prototyping', 'User Testing'],
      posted: '2026-01-05'
    },
    {
      id: 6,
      title: 'Technical Support Specialist',
      department: 'Soporte',
      type: 'Medio Tiempo',
      location: 'León/Remoto',
      salary: '$25,000 - $35,000 MXN',
      experience: '1+ años',
      description: 'Especialista en soporte técnico para ayudar a nuestros clientes con consultas relacionadas con hosting y servicios cloud.',
      requirements: [
        'Conocimientos básicos de hosting y servidores web',
        'Experiencia en atención al cliente',
        'Inglés intermedio',
        'Disponibilidad para turnos rotativos'
      ],
      skills: ['Customer Support', 'Web Hosting', 'Troubleshooting', 'Communication'],
      posted: '2026-01-03'
    }
  ]

  const benefits = [
    {
      category: 'Compensación',
      items: [
        'Salario competitivo basado en experiencia',
        'Bonos por desempeño trimestral',
        'Stock options para posiciones senior',
        'Incrementos salariales anuales'
      ]
    },
    {
      category: 'Salud y Bienestar',
      items: [
        'Seguro de gastos médicos mayores',
        'Seguro dental y de vida',
        'Gym membership reembolsado',
        'Mental health support program'
      ]
    },
    {
      category: 'Flexibilidad',
      items: [
        'Trabajo remoto o híbrido',
        'Horarios flexibles',
        'Días personales adicionales',
        'Política de vacaciones ilimitada para seniors'
      ]
    },
    {
      category: 'Desarrollo Profesional',
      items: [
        'Presupuesto anual para cursos y certificaciones',
        'Conferencias técnicas cubiertas',
        'Mentorship programs',
        'Career development plans'
      ]
    }
  ]

  const culture = [
    {
      title: 'Innovation First',
      description: 'Promovemos la experimentación y el uso de tecnologías de vanguardia.',
      icon: Zap
    },
    {
      title: 'Colaboración',
      description: 'Trabajamos juntos para resolver problemas complejos y alcanzar objetivos comunes.',
      icon: Users
    },
    {
      title: 'Excelencia',
      description: 'Mantenemos altos estándares de calidad en todo lo que hacemos.',
      icon: Award
    },
    {
      title: 'Work-Life Balance',
      description: 'Creemos en el equilibrio entre la vida personal y profesional.',
      icon: Heart
    }
  ]

  const process = [
    {
      step: 1,
      title: 'Aplicación',
      description: 'Envía tu CV y carta de presentación a través de nuestro formulario.'
    },
    {
      step: 2,
      title: 'Revisión',
      description: 'Nuestro equipo de HR revisará tu perfil en un plazo de 3-5 días hábiles.'
    },
    {
      step: 3,
      title: 'Entrevista Técnica',
      description: 'Entrevista técnica con el equipo de ingeniería (según la posición).'
    },
    {
      step: 4,
      title: 'Entrevista Cultural',
      description: 'Conversación con el equipo directivo sobre fit cultural y objetivos.'
    },
    {
      step: 5,
      title: 'Oferta',
      description: 'Si todo va bien, recibirás una oferta formal con todos los detalles.'
    }
  ]

  const formatSalary = (salary: string) => {
    return salary.replace('MXN', 'MXN/mes')
  }

  const getDaysAgo = (dateString: string) => {
    const posted = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - posted.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Carreras en ARCII Cloud
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Únete a nuestro equipo y ayúdanos a construir el futuro del cloud computing. 
            Buscamos personas apasionadas por la tecnología y comprometidas con la excelencia.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card>
            <div className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-gray-600">Posiciones Abiertas</div>
            </div>
          </Card>
          <Card>
            <div className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">30+</div>
              <div className="text-gray-600">Empleados</div>
            </div>
          </Card>
          <Card>
            <div className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
              <div className="text-gray-600">Oficinas</div>
            </div>
          </Card>
          <Card>
            <div className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">Satisfacción Empleados</div>
            </div>
          </Card>
        </div>

        {/* Job Listings */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Posiciones Abiertas</h2>
          
          <div className="space-y-6">
            {openPositions.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {formatSalary(job.salary)}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-4 lg:mt-0">
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Publicado hace</div>
                        <div className="font-semibold text-gray-800">{getDaysAgo(job.posted)} días</div>
                      </div>
                      <Button>
                        Aplicar
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">{job.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Requisitos:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Tecnologías:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, index) => (
                          <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm text-gray-500">
                      Experiencia requerida: <span className="font-semibold">{job.experience}</span>
                    </div>
                    <Button variant="outline">
                      Ver Detalles
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Culture */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nuestra Cultura</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culture.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <div className="p-8">
                  <item.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Beneficios y Ventajas</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((category, index) => (
              <Card key={index}>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Hiring Process */}
        <Card className="mb-16">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Proceso de Contratación</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-5 gap-6">
                {process.map((step, index) => (
                  <div key={step.step} className="text-center">
                    <div className="relative mb-4">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto">
                        {step.step}
                      </div>
                      {index < process.length - 1 && (
                        <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gray-300 -translate-x-6"></div>
                      )}
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="p-12 text-center">
            <Send className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">¿No encuentras la posición ideal?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Estamos siempre interesados en conocer talento excepcional. 
              Envíanos tu CV y te contactaremos cuando tengamos oportunidades que se ajusten a tu perfil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 border border-white/20 rounded-lg bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <Button size="lg" variant="secondary">
                Enviar CV
              </Button>
            </div>
          </div>
        </Card>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">¿Tienes preguntas?</h2>
          <p className="text-gray-600 mb-4">
            Nuestro equipo de Recursos Humanos está disponible para ayudarte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <span className="text-gray-600">📧 careers@arciicloud.com</span>
            <span className="text-gray-600">📞 +52 55 1234 5678</span>
          </div>
        </div>
      </div>
    </div>
  )
}