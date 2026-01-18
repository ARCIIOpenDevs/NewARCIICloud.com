import { Newspaper, Calendar, Download, Users, MessageSquare, Camera, Award, Zap } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function PrensaPage() {
  const pressReleases = [
    {
      id: 1,
      title: 'ARCII Cloud Alcanza los 50,000 Clientes y Expande su Infraestructura',
      date: '2026-01-15',
      category: 'Crecimiento',
      excerpt: 'La empresa de hosting mexicana celebra un hito importante con la apertura de su nuevo centro de datos en Monterrey y el crecimiento exponencial de su base de clientes.',
      image: '/images/press/growth-milestone.jpg',
      downloadUrl: '/press/arcii-cloud-50k-clientes.pdf'
    },
    {
      id: 2,
      title: 'Nueva Alianza Estratégica con Microsoft Azure para Servicios Cloud',
      date: '2026-01-08',
      category: 'Partnership',
      excerpt: 'ARCII Cloud anuncia una alianza estratégica con Microsoft que permitirá ofrecer servicios híbridos cloud de próxima generación a empresas mexicanas.',
      image: '/images/press/microsoft-partnership.jpg',
      downloadUrl: '/press/alianza-microsoft-azure.pdf'
    },
    {
      id: 3,
      title: 'Certificación ISO 27001 Refuerza el Compromiso con la Seguridad',
      date: '2025-12-20',
      category: 'Seguridad',
      excerpt: 'La compañía obtiene la certificación internacional de seguridad de la información, consolidando su posición como líder en hosting seguro.',
      image: '/images/press/iso-certification.jpg',
      downloadUrl: '/press/certificacion-iso-27001.pdf'
    },
    {
      id: 4,
      title: 'ARCII Cloud Lanza su Programa de Sostenibilidad "Green Cloud 2030"',
      date: '2025-12-10',
      category: 'Sostenibilidad',
      excerpt: 'Iniciativa ambiciosa para alcanzar la neutralidad de carbono en todos los centros de datos para el año 2030, con inversión de $5M USD.',
      image: '/images/press/green-cloud-program.jpg',
      downloadUrl: '/press/programa-green-cloud-2030.pdf'
    },
    {
      id: 5,
      title: 'Reconocimiento como "Mejor Proveedor de Hosting México 2025"',
      date: '2025-11-25',
      category: 'Premios',
      excerpt: 'La Cámara Nacional de la Industria Electrónica reconoce a ARCII Cloud por su excelencia en servicios de infraestructura cloud.',
      image: '/images/press/award-2025.jpg',
      downloadUrl: '/press/premio-mejor-hosting-2025.pdf'
    },
    {
      id: 6,
      title: 'Inversión de $10M USD para Expansión Internacional',
      date: '2025-11-15',
      category: 'Expansión',
      excerpt: 'La empresa anuncia una ronda de inversión Serie B que permitirá expandir operaciones a Colombia y Perú en 2026.',
      image: '/images/press/international-expansion.jpg',
      downloadUrl: '/press/inversion-expansion-internacional.pdf'
    }
  ]

  const mediaKit = [
    {
      name: 'Logos e Identidad Visual',
      description: 'Logos oficiales, paleta de colores, tipografías y guías de uso',
      files: ['PNG', 'SVG', 'PDF'],
      size: '15.2 MB'
    },
    {
      name: 'Fotos Corporativas',
      description: 'Imágenes de oficinas, centros de datos, equipo directivo',
      files: ['JPG alta resolución'],
      size: '42.8 MB'
    },
    {
      name: 'Información Corporativa',
      description: 'Fact sheets, biografías ejecutivas, datos financieros',
      files: ['PDF', 'DOCX'],
      size: '3.4 MB'
    },
    {
      name: 'Infografías y Gráficos',
      description: 'Estadísticas de la industria, comparativas, roadmaps',
      files: ['PNG', 'AI', 'PDF'],
      size: '8.7 MB'
    }
  ]

  const contactos = [
    {
      name: 'María González',
      role: 'Directora de Comunicaciones',
      email: 'prensa@arciicloud.com',
      phone: '+52 55 1234-5678 ext. 201',
      availability: 'Lun-Vie 9:00-18:00 CST'
    },
    {
      name: 'Carlos Mendoza',
      role: 'CEO - Entrevistas Ejecutivas',
      email: 'ceo@arciicloud.com',
      phone: '+52 55 1234-5678 ext. 100',
      availability: 'Por cita previa'
    },
    {
      name: 'Ana Rodríguez',
      role: 'CTO - Temas Técnicos',
      email: 'cto@arciicloud.com',
      phone: '+52 55 1234-5678 ext. 150',
      availability: 'Por cita previa'
    }
  ]

  const awards = [
    {
      year: '2025',
      award: 'Mejor Proveedor de Hosting México',
      organization: 'Cámara Nacional de la Industria Electrónica',
      category: 'Infraestructura Cloud'
    },
    {
      year: '2024',
      award: 'Top 10 Startups Tech México',
      organization: 'Endeavor México',
      category: 'Tecnología Empresarial'
    },
    {
      year: '2024',
      award: 'Certificación Great Place to Work',
      organization: 'Great Place to Work Institute',
      category: 'Ambiente Laboral'
    },
    {
      year: '2023',
      award: 'Empresa del Año - Tecnología',
      organization: 'Premios Expansión',
      category: 'Innovación Tecnológica'
    }
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'crecimiento':
        return 'bg-green-100 text-green-700'
      case 'partnership':
        return 'bg-blue-100 text-blue-700'
      case 'seguridad':
        return 'bg-red-100 text-red-700'
      case 'sostenibilidad':
        return 'bg-emerald-100 text-emerald-700'
      case 'premios':
        return 'bg-yellow-100 text-yellow-700'
      case 'expansión':
        return 'bg-purple-100 text-purple-700'
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
            <Newspaper className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sala de Prensa
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Manténgase informado sobre las últimas noticias, anuncios y desarrollos de ARCII Cloud. 
            Recursos completos para medios de comunicación y periodistas.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card>
            <div className="p-6 text-center">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-800">50,000+</div>
              <div className="text-sm text-gray-600">Clientes Activos</div>
            </div>
          </Card>
          <Card>
            <div className="p-6 text-center">
              <Award className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-800">4</div>
              <div className="text-sm text-gray-600">Premios en 2025</div>
            </div>
          </Card>
          <Card>
            <div className="p-6 text-center">
              <Zap className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-800">99.99%</div>
              <div className="text-sm text-gray-600">Uptime Garantizado</div>
            </div>
          </Card>
          <Card>
            <div className="p-6 text-center">
              <Calendar className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-800">8</div>
              <div className="text-sm text-gray-600">Años en el Mercado</div>
            </div>
          </Card>
        </div>

        {/* Latest Press Releases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Comunicados de Prensa</h2>
          
          <div className="space-y-6">
            {pressReleases.map((release) => (
              <Card key={release.id} className="hover:shadow-lg transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(release.category)}`}>
                          {release.category}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          {formatDate(release.date)}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 hover:text-blue-600 cursor-pointer">
                        {release.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {release.excerpt}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button>
                          Leer Comunicado Completo
                        </Button>
                        <Button variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Descargar PDF
                        </Button>
                      </div>
                    </div>
                    
                    <div className="lg:w-64">
                      <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                        <Camera className="w-12 h-12 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Media Kit */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Kit de Medios</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaKit.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Download className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                  
                  <div className="text-center mb-4">
                    <div className="text-xs text-gray-500 mb-2">
                      Formatos: {item.files.join(', ')}
                    </div>
                    <div className="text-xs text-gray-500">
                      Tamaño: {item.size}
                    </div>
                  </div>
                  
                  <Button size="sm" className="w-full">
                    Descargar
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg">
              <Download className="w-5 h-5 mr-2" />
              Descargar Kit Completo
            </Button>
          </div>
        </div>

        {/* Awards & Recognition */}
        <Card className="mb-16">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Premios y Reconocimientos</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">{award.award}</div>
                    <div className="text-sm text-gray-600">{award.organization}</div>
                    <div className="text-xs text-gray-500">{award.year} • {award.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Press Contacts */}
        <Card className="mb-16">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contactos de Prensa</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {contactos.map((contacto, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg mb-2">{contacto.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{contacto.role}</p>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>{contacto.email}</div>
                    <div>{contacto.phone}</div>
                    <div className="text-xs">{contacto.availability}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Newsletter Signup */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="p-12 text-center">
            <MessageSquare className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Manténgase Informado</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Suscríbase a nuestro boletín de prensa para recibir las últimas noticias y anuncios directamente en su bandeja de entrada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="email@periodista.com"
                className="flex-1 px-4 py-3 border border-white/20 rounded-lg bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <Button size="lg" variant="secondary">
                Suscribirse
              </Button>
            </div>
          </div>
        </Card>

        {/* Footer Info */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p className="mb-4">
            Para consultas de prensa urgentes fuera del horario comercial, contacte nuestro número de emergencia: +52 55 9999-0000
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span>📧 prensa@arciicloud.com</span>
            <span>📱 WhatsApp: +52 55 1234-5678</span>
            <span>🐦 Twitter: @ARCIICloud</span>
          </div>
        </div>
      </div>
    </div>
  )
}