import { Users, MapPin, Award, Coffee, Heart, Linkedin, Twitter, Github } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function EquipoPage() {
  const teamMembers = [
    {
      name: 'Carlos Mendoza',
      role: 'CEO & Fundador',
      department: 'Dirección',
      bio: 'Con más de 15 años en la industria del hosting, lidera la visión estratégica de ARCII Cloud.',
      image: '/images/team/carlos.jpg',
      location: 'Ciudad de México, MX',
      expertise: ['Estrategia Empresarial', 'Cloud Computing', 'Liderazgo'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Ana Rodríguez',
      role: 'CTO',
      department: 'Tecnología',
      bio: 'Experta en arquitectura cloud y sistemas distribuidos, supervisa toda la infraestructura técnica.',
      image: '/images/team/ana.jpg',
      location: 'Guadalajara, MX',
      expertise: ['Arquitectura Cloud', 'DevOps', 'Seguridad'],
      social: {
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Miguel Torres',
      role: 'Director de Ingeniería',
      department: 'Desarrollo',
      bio: 'Lidera el desarrollo de plataformas y la innovación tecnológica del equipo.',
      image: '/images/team/miguel.jpg',
      location: 'Monterrey, MX',
      expertise: ['Full Stack', 'Microservicios', 'AI/ML'],
      social: {
        github: '#',
        twitter: '#'
      }
    },
    {
      name: 'Laura Fernández',
      role: 'Head of Customer Success',
      department: 'Atención al Cliente',
      bio: 'Garantiza la satisfacción de nuestros clientes y mejora continua de la experiencia.',
      image: '/images/team/laura.jpg',
      location: 'Ciudad de México, MX',
      expertise: ['Customer Experience', 'Support Operations', 'Training'],
      social: {
        linkedin: '#'
      }
    },
    {
      name: 'Roberto Sánchez',
      role: 'Director de Seguridad',
      department: 'Seguridad',
      bio: 'Experto en ciberseguridad, protege la infraestructura y datos de nuestros clientes.',
      image: '/images/team/roberto.jpg',
      location: 'Querétaro, MX',
      expertise: ['Cybersecurity', 'Compliance', 'Risk Management'],
      social: {
        linkedin: '#'
      }
    },
    {
      name: 'María González',
      role: 'VP de Ventas',
      department: 'Ventas',
      bio: 'Desarrolla estrategias comerciales y relaciones con clientes empresariales.',
      image: '/images/team/maria.jpg',
      location: 'Ciudad de México, MX',
      expertise: ['Enterprise Sales', 'Business Development', 'Partner Relations'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'David Kim',
      role: 'Senior DevOps Engineer',
      department: 'Infraestructura',
      bio: 'Mantiene y optimiza la infraestructura cloud que soporta miles de sitios web.',
      image: '/images/team/david.jpg',
      location: 'León, MX',
      expertise: ['Kubernetes', 'AWS/Azure', 'Monitoring'],
      social: {
        github: '#'
      }
    },
    {
      name: 'Carmen López',
      role: 'UX/UI Designer',
      department: 'Diseño',
      bio: 'Diseña interfaces intuitivas y experiencias de usuario excepcionales.',
      image: '/images/team/carmen.jpg',
      location: 'Remote',
      expertise: ['UI/UX Design', 'User Research', 'Prototyping'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    }
  ]

  const departments = [
    {
      name: 'Tecnología',
      count: 12,
      description: 'Desarrolladores, ingenieros DevOps y arquitectos de sistemas',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      name: 'Atención al Cliente',
      count: 8,
      description: 'Especialistas en soporte técnico y success managers',
      color: 'bg-green-100 text-green-700'
    },
    {
      name: 'Ventas & Marketing',
      count: 6,
      description: 'Ejecutivos comerciales y especialistas en marketing digital',
      color: 'bg-purple-100 text-purple-700'
    },
    {
      name: 'Operaciones',
      count: 4,
      description: 'Administración, finanzas y recursos humanos',
      color: 'bg-orange-100 text-orange-700'
    }
  ]

  const values = [
    {
      title: 'Innovación Constante',
      description: 'Siempre buscamos las mejores tecnologías para ofrecer servicios de vanguardia.',
      icon: Award
    },
    {
      title: 'Transparencia',
      description: 'Comunicación clara y honesta con nuestros clientes y entre nosotros.',
      icon: Heart
    },
    {
      title: 'Excelencia Técnica',
      description: 'Mantenemos los más altos estándares de calidad en todos nuestros servicios.',
      icon: Users
    },
    {
      title: 'Trabajo en Equipo',
      description: 'Colaboramos para lograr objetivos comunes y apoyarnos mutuamente.',
      icon: Coffee
    }
  ]

  const perks = [
    'Trabajo remoto y horarios flexibles',
    'Seguro de gastos médicos mayores',
    'Presupuesto anual para capacitación',
    'Equipment allowance para home office',
    'Días de vacaciones adicionales',
    'Stock options para empleados clave',
    'Gym membership reembolsado',
    'Mental health support',
    'Viajes de equipo anuales',
    'Snacks y café ilimitado en oficinas'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Nuestro Equipo
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce a las personas apasionadas que hacen posible ARCII Cloud. Un equipo diverso y talentoso 
            comprometido con brindar los mejores servicios de hosting en la nube.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {departments.map((dept, index) => (
            <Card key={index}>
              <div className="p-6 text-center">
                <div className="text-3xl font-bold text-gray-800 mb-2">{dept.count}</div>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${dept.color}`}>
                  {dept.name}
                </div>
                <p className="text-sm text-gray-600">{dept.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Equipo de Liderazgo</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <Users className="w-24 h-24 text-gray-400" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white px-2 py-1 rounded-full text-xs font-medium text-gray-600">
                      {member.department}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <MapPin className="w-4 h-4" />
                    {member.location}
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Especialidades:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-blue-600 hover:text-blue-700">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-blue-400 hover:text-blue-500">
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="text-gray-800 hover:text-gray-900">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nuestros Valores</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <div className="p-8">
                  <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <Card className="mb-16">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Beneficios y Ventajas
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {perks.map((perk, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Join Team CTA */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="p-12 text-center">
            <Coffee className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">¿Te interesa unirte a nuestro equipo?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Estamos siempre buscando talento excepcional para seguir creciendo. 
              Revisa nuestras posiciones abiertas y forma parte de la revolución del cloud computing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Ver Vacantes
              </Button>
              <Button size="lg" variant="outline">
                Enviar CV
              </Button>
            </div>
          </div>
        </Card>

        {/* Location */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestras Oficinas</h2>
          <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
            <MapPin className="w-5 h-5" />
            <span>Oficina Principal: Ciudad de México, México</span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Con un equipo distribuido en todo México y algunos miembros trabajando remotamente desde diferentes partes del mundo, 
            nuestra cultura trasciende fronteras geográficas.
          </p>
        </div>
      </div>
    </div>
  )
}