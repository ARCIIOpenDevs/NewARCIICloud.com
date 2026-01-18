import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  VideoCameraIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  ClockIcon,
  StarIcon,
  PlayIcon,
  CheckCircleIcon,
  AcademicCapIcon,
  MicrophoneIcon,
  ChartBarIcon,
  ArrowRightIcon,
  BellIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Webinars Gratuitos Hosting México | ARCII Cloud Live 2026',
  description: 'Webinars gratuitos sobre hosting, WordPress, VPS y marketing digital. Aprende con expertos mexicanos en vivo. Sesiones semanales con Q&A incluido.',
  keywords: [
    'webinars hosting mexico',
    'seminarios web hosting',
    'webinars wordpress mexico',
    'capacitacion hosting gratis',
    'webinars marketing digital',
    'seminarios online hosting',
    'eventos hosting mexico',
    'webinars arcii cloud'
  ],
  openGraph: {
    title: 'Webinars Gratuitos ARCII Cloud | Aprende Hosting en Vivo',
    description: '🎥 Webinars semanales gratuitos. Expertos mexicanos, Q&A en vivo, certificados incluidos.',
    url: 'https://new.arciicloud.com/recursos/webinars',
    type: 'website',
  },
};

const upcomingWebinars = [
  {
    id: 1,
    title: 'Optimización Avanzada de WordPress para E-commerce',
    description: 'Técnicas profesionales para acelerar tiendas online: caché, CDN, optimización de base de datos, y plugins esenciales.',
    speaker: 'Carlos Mendoza',
    speakerTitle: 'WordPress Developer & Performance Specialist',
    speakerAvatar: '/speakers/carlos-mendoza.jpg',
    date: '2026-01-25',
    time: '18:00',
    duration: '90 minutos',
    timezone: 'CST (México)',
    level: 'Intermedio',
    category: 'WordPress',
    attendees: 234,
    maxAttendees: 500,
    featured: true,
    topics: [
      'Configuración avanzada de caché',
      'Optimización de imágenes automática',
      'CDN y contenido estático',
      'Monitoring de performance',
      'Plugins recomendados 2026'
    ]
  },
  {
    id: 2,
    title: 'VPS desde Cero: Administración Completa de Servidores',
    description: 'Aprende a administrar tu VPS como un profesional: SSH, usuarios, firewall, monitoreo y backup automatizado.',
    speaker: 'María González',
    speakerTitle: 'DevOps Engineer & Cloud Architect',
    speakerAvatar: '/speakers/maria-gonzalez.jpg',
    date: '2026-02-01',
    time: '19:00',
    duration: '120 minutos',
    timezone: 'CST (México)',
    level: 'Avanzado',
    category: 'VPS',
    attendees: 156,
    maxAttendees: 300,
    featured: true,
    topics: [
      'Configuración inicial segura',
      'Gestión de usuarios y permisos',
      'Firewall y hardening básico',
      'Backup automatizado',
      'Monitoreo con Nagios'
    ]
  },
  {
    id: 3,
    title: 'SEO Técnico: Hosting que Impulsa tu Posicionamiento',
    description: 'Como elegir el hosting correcto para SEO: velocidad, uptime, SSL, structured data y Core Web Vitals.',
    speaker: 'Roberto Silva',
    speakerTitle: 'SEO Specialist & Digital Marketing Expert',
    speakerAvatar: '/speakers/roberto-silva.jpg',
    date: '2026-02-08',
    time: '17:30',
    duration: '75 minutos',
    timezone: 'CST (México)',
    level: 'Intermedio',
    category: 'SEO',
    attendees: 189,
    maxAttendees: 400,
    featured: false,
    topics: [
      'Core Web Vitals y hosting',
      'SSL y certificados de seguridad',
      'CDN para mejores tiempos de carga',
      'Structured data y schema markup',
      'Herramientas de monitoreo SEO'
    ]
  }
];

const pastWebinars = [
  {
    id: 101,
    title: 'Migración Sin Downtime: Guía Completa',
    speaker: 'Diego Castro',
    date: '2026-01-10',
    duration: '85 minutos',
    views: 1247,
    rating: 4.9,
    category: 'Hosting',
    thumbnail: '/webinars/migracion-sin-downtime.jpg'
  },
  {
    id: 102,
    title: 'Email Corporativo Profesional con Outlook',
    speaker: 'Ana López',
    date: '2025-12-20',
    duration: '60 minutos',
    views: 892,
    rating: 4.8,
    category: 'Email',
    thumbnail: '/webinars/email-corporativo.jpg'
  },
  {
    id: 103,
    title: 'Backup y Recuperación: Estrategias Críticas',
    speaker: 'Fernando Ruiz',
    date: '2025-12-13',
    duration: '95 minutos',
    views: 1456,
    rating: 5.0,
    category: 'Seguridad',
    thumbnail: '/webinars/backup-recovery.jpg'
  },
  {
    id: 104,
    title: 'WordPress Multisite: Gestión Avanzada',
    speaker: 'Patricia Morales',
    date: '2025-11-28',
    duration: '110 minutos',
    views: 756,
    rating: 4.9,
    category: 'WordPress',
    thumbnail: '/webinars/wordpress-multisite.jpg'
  },
  {
    id: 105,
    title: 'SSL y Certificados: Seguridad Total',
    speaker: 'Alejandro Vega',
    date: '2025-11-15',
    duration: '70 minutos',
    views: 1123,
    rating: 4.7,
    category: 'SSL',
    thumbnail: '/webinars/ssl-certificates.jpg'
  },
  {
    id: 106,
    title: 'Dominios y DNS: Configuración Profesional',
    speaker: 'Sandra Jiménez',
    date: '2025-11-01',
    duration: '80 minutos',
    views: 934,
    rating: 4.8,
    category: 'Dominios',
    thumbnail: '/webinars/dominios-dns.jpg'
  }
];

const categories = [
  { name: 'WordPress', count: 12, color: 'blue' },
  { name: 'VPS', count: 8, color: 'purple' },
  { name: 'Hosting', count: 15, color: 'green' },
  { name: 'SEO', count: 6, color: 'orange' },
  { name: 'Seguridad', count: 9, color: 'red' },
  { name: 'Email', count: 5, color: 'indigo' }
];

const stats = [
  { icon: UserGroupIcon, value: '15,000+', label: 'Participantes Totales' },
  { icon: VideoCameraIcon, value: '85+', label: 'Webinars Realizados' },
  { icon: StarIcon, value: '4.9/5', label: 'Rating Promedio' },
  { icon: AcademicCapIcon, value: '2,500+', label: 'Certificados Emitidos' }
];

export default function WebinarsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-pink-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <VideoCameraIcon className="h-10 w-10 text-white" />
          </div>
          
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">
            ARCII Cloud Live
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
            Webinars gratuitos cada semana sobre hosting, WordPress, VPS y marketing digital. 
            Aprende con expertos mexicanos, participa en Q&A en vivo y obtén certificados.
          </p>
          
          <div className="flex items-center justify-center gap-8 text-sm text-secondary-500 mb-8">
            <div className="flex items-center gap-2">
              <CalendarDaysIcon className="h-4 w-4" />
              <span>Miércoles 6:00 PM CST</span>
            </div>
            <div className="flex items-center gap-2">
              <UserGroupIcon className="h-4 w-4" />
              <span>100% Gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <AcademicCapIcon className="h-4 w-4" />
              <span>Certificado Incluido</span>
            </div>
          </div>

          <Button size="lg" asChild>
            <Link href="#proximos-webinars">
              Ver Próximos Webinars
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <section className="mb-16">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <stat.icon className="h-10 w-10 text-primary-600 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-secondary-900 mb-2">{stat.value}</div>
                  <div className="text-secondary-600 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section id="proximos-webinars" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Próximos Webinars
            </h2>
            <p className="text-lg text-secondary-600">
              Regístrate gratis y participa en nuestras sesiones en vivo
            </p>
          </div>

          <div className="space-y-8">
            {upcomingWebinars.map((webinar, index) => (
              <Card key={webinar.id} className={`hover:shadow-xl transition-shadow ${
                webinar.featured ? 'border-2 border-primary-200 bg-gradient-to-r from-primary-25 to-white' : ''
              }`}>
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-3 mb-4">
                        {webinar.featured && (
                          <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                            ⭐ DESTACADO
                          </span>
                        )}
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          webinar.level === 'Básico' ? 'bg-green-100 text-green-800' :
                          webinar.level === 'Intermedio' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {webinar.level}
                        </span>
                        <span className="px-2 py-1 bg-secondary-100 text-secondary-800 rounded text-xs font-medium">
                          {webinar.category}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                        {webinar.title}
                      </h3>
                      
                      <p className="text-secondary-600 mb-6">
                        {webinar.description}
                      </p>

                      {/* Topics */}
                      <div className="mb-6">
                        <h4 className="font-bold text-secondary-900 mb-3">Lo que aprenderás:</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {webinar.topics.map((topic, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircleIcon className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-secondary-700 text-sm">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Speaker */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">
                            {webinar.speaker.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="font-bold text-secondary-900">{webinar.speaker}</div>
                          <div className="text-secondary-600 text-sm">{webinar.speakerTitle}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-6 text-sm text-secondary-600">
                        <div className="flex items-center gap-1">
                          <CalendarDaysIcon className="h-4 w-4" />
                          <span>{new Date(webinar.date).toLocaleDateString('es-MX', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ClockIcon className="h-4 w-4" />
                          <span>{webinar.time} {webinar.timezone}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <UserGroupIcon className="h-4 w-4" />
                          <span>{webinar.attendees}/{webinar.maxAttendees}</span>
                        </div>
                      </div>
                    </div>

                    {/* Registration */}
                    <div className="lg:col-span-1">
                      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                        <CardContent className="p-6 text-center">
                          <MicrophoneIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                          
                          <h4 className="font-bold text-green-900 mb-2">
                            Registro Gratuito
                          </h4>
                          
                          <div className="space-y-2 mb-6 text-sm text-green-800">
                            <div className="flex justify-between">
                              <span>Duración:</span>
                              <span className="font-medium">{webinar.duration}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Cupos:</span>
                              <span className="font-medium">{webinar.maxAttendees - webinar.attendees} disponibles</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Certificado:</span>
                              <span className="font-medium">Incluido</span>
                            </div>
                          </div>

                          <Button className="w-full mb-4" asChild>
                            <Link href={`/recursos/webinars/registro/${webinar.id}`}>
                              Registrarme Gratis
                            </Link>
                          </Button>
                          
                          <div className="flex items-center justify-center gap-2 text-xs text-green-700">
                            <BellIcon className="h-3 w-3" />
                            <span>Te recordaremos por email</span>
                          </div>

                          {/* Attendees progress */}
                          <div className="mt-4">
                            <div className="bg-green-200 rounded-full h-2 mb-2">
                              <div 
                                className="bg-green-600 h-2 rounded-full transition-all"
                                style={{width: `${(webinar.attendees / webinar.maxAttendees) * 100}%`}}
                              ></div>
                            </div>
                            <div className="text-xs text-green-700">
                              {Math.round((webinar.attendees / webinar.maxAttendees) * 100)}% de cupos ocupados
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Categorías de Webinars
            </h2>
            <p className="text-lg text-secondary-600">
              Explora webinars por tema de interés
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h3>
                  
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
                    category.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                    category.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                    category.color === 'green' ? 'bg-green-100 text-green-800' :
                    category.color === 'orange' ? 'bg-orange-100 text-orange-800' :
                    category.color === 'red' ? 'bg-red-100 text-red-800' : 'bg-indigo-100 text-indigo-800'
                  }`}>
                    {category.count} webinars
                  </div>
                  
                  <Button size="sm" variant="outline" className="group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-colors">
                    Ver Webinars
                    <ArrowRightIcon className="h-3 w-3 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Past Webinars */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Webinars Anteriores
            </h2>
            <p className="text-lg text-secondary-600">
              Accede a grabaciones de sesiones pasadas disponibles bajo demanda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastWebinars.map((webinar, index) => (
              <Card key={webinar.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-r from-gray-400 to-gray-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                      <PlayIcon className="h-8 w-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                      🎥 Grabación
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/50 backdrop-blur px-2 py-1 rounded text-xs text-white">
                      {webinar.duration}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-secondary-100 text-secondary-800 rounded text-xs font-medium">
                      {webinar.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-secondary-900 mb-2">
                    {webinar.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-sm text-secondary-600 mb-4">
                    <span>Por {webinar.speaker}</span>
                    <span>{new Date(webinar.date).toLocaleDateString('es-MX')}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-xs text-secondary-500">
                      <div className="flex items-center gap-1">
                        <PlayIcon className="h-3 w-3" />
                        <span>{webinar.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <StarIcon className="h-3 w-3" />
                        <span>{webinar.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button size="sm" variant="outline" className="w-full" asChild>
                    <Link href={`/recursos/webinars/replay/${webinar.id}`}>
                      Ver Grabación
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/recursos/webinars/archive">
                Ver Todas las Grabaciones
                <ArrowRightIcon className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
            <CardContent className="p-12 text-center">
              <BellIcon className="h-16 w-16 mx-auto mb-6 text-blue-200" />
              <h2 className="text-3xl font-bold mb-4">
                No Te Pierdas Ningún Webinar
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Suscríbete a nuestro newsletter y recibe notificaciones de nuevos webinars, 
                recursos exclusivos y contenido premium.
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="flex-1 px-4 py-3 rounded-lg text-secondary-900"
                  />
                  <Button variant="secondary">
                    Suscribirme
                  </Button>
                </div>
                <p className="text-blue-200 text-sm mt-3">
                  📧 Enviamos 1 email por semana • Sin spam • Cancela cuando quieras
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section>
          <Card className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
            <CardContent className="p-12 text-center">
              <VideoCameraIcon className="h-16 w-16 mx-auto mb-6 text-primary-200" />
              <h2 className="text-3xl font-bold mb-4">
                ¿Quieres Ser Ponente en Nuestros Webinars?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Si eres experto en hosting, WordPress, marketing digital o tecnología, 
                nos encantaría contar contigo como ponente invitado.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
                <div className="bg-primary-500/20 backdrop-blur rounded-lg p-4">
                  <h4 className="font-bold mb-2">Audiencia Comprometida</h4>
                  <p className="text-primary-200 text-sm">+500 participantes por webinar</p>
                </div>
                <div className="bg-primary-500/20 backdrop-blur rounded-lg p-4">
                  <h4 className="font-bold mb-2">Promoción Incluida</h4>
                  <p className="text-primary-200 text-sm">Marketing en redes sociales</p>
                </div>
                <div className="bg-primary-500/20 backdrop-blur rounded-lg p-4">
                  <h4 className="font-bold mb-2">Grabación Disponible</h4>
                  <p className="text-primary-200 text-sm">Contenido disponible permanente</p>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="xl" variant="secondary" asChild>
                  <Link href="/contacto">
                    Proponer Tema
                  </Link>
                </Button>
                <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600" asChild>
                  <Link href="/recursos/webinars/speaker-guidelines">
                    Guía para Ponentes
                  </Link>
                </Button>
              </div>
              
              <div className="mt-6 text-sm text-primary-200">
                📧 speakers@arciicloud.com • Respuesta en 24-48 horas
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}