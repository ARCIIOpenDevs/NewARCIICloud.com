import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  BookOpenIcon,
  CommandLineIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  PlayCircleIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Documentación ARCII Cloud | Guías, Tutoriales y API',
  description: 'Centro completo de documentación ARCII Cloud: guías de hosting, tutoriales paso a paso, referencia API, mejores prácticas y soporte técnico.',
  keywords: [
    'documentacion arcii cloud',
    'guias hosting mexico',
    'tutoriales hosting',
    'api documentation',
    'manual hosting',
    'soporte tecnico hosting'
  ],
  openGraph: {
    title: 'Documentación ARCII Cloud | Guías y Tutoriales',
    description: '📚 Centro completo: +500 guías, tutoriales, referencia API, mejores prácticas hosting México.',
    url: 'https://new.arciicloud.com/docs',
    type: 'website',
  },
};

const quickStart = [
  {
    title: 'Primeros Pasos',
    description: 'Configuración inicial de tu cuenta y primer sitio web',
    time: '5 minutos',
    difficulty: 'Principiante',
    icon: RocketLaunchIcon,
    href: '/docs/primeros-pasos',
    steps: ['Crear cuenta', 'Configurar dominio', 'Subir archivos', 'Activar SSL'],
  },
  {
    title: 'WordPress Instalación',
    description: 'Instalar WordPress con un clic en tu hosting',
    time: '2 minutos',
    difficulty: 'Principiante',
    icon: PlayCircleIcon,
    href: '/docs/wordpress-instalacion',
    steps: ['Acceder a cPanel', 'Softaculous', 'Configurar WordPress', 'Primer login'],
  },
  {
    title: 'Configurar Email',
    description: 'Crear cuentas de email corporativo profesional',
    time: '10 minutos',
    difficulty: 'Intermedio',
    icon: ChatBubbleLeftRightIcon,
    href: '/docs/email-setup',
    steps: ['Crear cuenta email', 'Configurar cliente', 'SPF/DKIM', 'Verificar funcionamiento'],
  },
  {
    title: 'Migración de Sitio',
    description: 'Mover tu sitio web desde otro hosting',
    time: '30 minutos',
    difficulty: 'Intermedio',
    icon: CommandLineIcon,
    href: '/docs/migracion-sitio',
    steps: ['Backup origen', 'Transferir archivos', 'Base datos', 'DNS'],
  },
];

const categories = [
  {
    title: 'Hosting Web',
    description: 'Guías completas para hosting compartido y WordPress',
    icon: BookOpenIcon,
    color: 'from-blue-400 to-blue-600',
    count: '125 artículos',
    topics: ['cPanel', 'WordPress', 'SSL', 'Dominios', 'Email', 'FTP'],
    href: '/docs/hosting-web',
  },
  {
    title: 'VPS Cloud',
    description: 'Administración y configuración de servidores virtuales',
    icon: CommandLineIcon,
    color: 'from-purple-400 to-purple-600',
    count: '89 artículos',
    topics: ['Linux', 'Windows Server', 'Docker', 'SSH', 'Firewall', 'Backups'],
    href: '/docs/vps-cloud',
  },
  {
    title: 'API Reference',
    description: 'Documentación completa de nuestra API RESTful',
    icon: CodeBracketIcon,
    color: 'from-green-400 to-green-600',
    count: '45 endpoints',
    topics: ['Authentication', 'Hosting', 'Dominios', 'DNS', 'Billing', 'Webhooks'],
    href: '/docs/api',
  },
  {
    title: 'Desarrollo Web',
    description: 'Mejores prácticas para desarrolladores',
    icon: AcademicCapIcon,
    color: 'from-orange-400 to-orange-600',
    count: '78 guías',
    topics: ['PHP', 'Node.js', 'Python', 'Databases', 'CDN', 'Performance'],
    href: '/docs/desarrollo',
  },
];

const popularGuides = [
  {
    title: 'Instalar WordPress paso a paso',
    description: 'Guía completa para instalar y configurar WordPress',
    views: '125,430',
    difficulty: 'Principiante',
    time: '10 min',
    updated: '2024-01-15',
    href: '/docs/wordpress-instalacion-completa',
  },
  {
    title: 'Acelerar WordPress: Guía definitiva',
    description: 'Optimización avanzada para máximo rendimiento',
    views: '98,250',
    difficulty: 'Intermedio',
    time: '45 min',
    updated: '2024-01-20',
    href: '/docs/wordpress-optimizacion',
  },
  {
    title: 'Migrar sitio web sin downtime',
    description: 'Proceso completo de migración sin interrupciones',
    views: '76,890',
    difficulty: 'Avanzado',
    time: '60 min',
    updated: '2024-01-18',
    href: '/docs/migracion-sin-downtime',
  },
  {
    title: 'Configurar SSL y HTTPS',
    description: 'Implementar certificados SSL correctamente',
    views: '65,420',
    difficulty: 'Principiante',
    time: '15 min',
    updated: '2024-01-22',
    href: '/docs/ssl-https-configuracion',
  },
  {
    title: 'Email profesional con cPanel',
    description: 'Crear y configurar cuentas de email corporativo',
    views: '54,180',
    difficulty: 'Principiante',
    time: '20 min',
    updated: '2024-01-19',
    href: '/docs/email-profesional-cpanel',
  },
  {
    title: 'Backup automático WordPress',
    description: 'Configurar respaldos automáticos seguros',
    views: '43,670',
    difficulty: 'Intermedio',
    time: '25 min',
    updated: '2024-01-16',
    href: '/docs/backup-wordpress-automatico',
  },
];

const apiEndpoints = [
  {
    method: 'GET',
    endpoint: '/api/v2/hosting/accounts',
    description: 'Listar todas las cuentas de hosting',
    auth: 'API Key required',
  },
  {
    method: 'POST',
    endpoint: '/api/v2/hosting/create',
    description: 'Crear nueva cuenta de hosting',
    auth: 'API Key required',
  },
  {
    method: 'GET',
    endpoint: '/api/v2/domains/list',
    description: 'Obtener lista de dominios',
    auth: 'API Key required',
  },
  {
    method: 'POST',
    endpoint: '/api/v2/dns/records',
    description: 'Gestionar registros DNS',
    auth: 'API Key required',
  },
];

const tutorials = [
  {
    title: 'Serie WordPress Profesional',
    description: '12 videos paso a paso para dominar WordPress',
    videos: 12,
    duration: '4.5 horas',
    level: 'Todos los niveles',
    thumbnail: '/tutorials/wordpress-series.jpg',
  },
  {
    title: 'VPS Linux para Principiantes',
    description: 'Aprende a administrar tu servidor Linux',
    videos: 8,
    duration: '3 horas',
    level: 'Principiante',
    thumbnail: '/tutorials/vps-linux.jpg',
  },
  {
    title: 'Performance Web Avanzada',
    description: 'Optimización profesional de sitios web',
    videos: 15,
    duration: '6 horas',
    level: 'Avanzado',
    thumbnail: '/tutorials/performance-web.jpg',
  },
  {
    title: 'E-commerce con WooCommerce',
    description: 'Crear tienda online profesional',
    videos: 20,
    duration: '8 horas',
    level: 'Intermedio',
    thumbnail: '/tutorials/woocommerce.jpg',
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Centro de<br />
              <span className="text-yellow-300">Documentación</span>
            </h1>
            <p className="text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Más de 500 guías, tutoriales y referencias técnicas para aprovechar 
              al máximo tu hosting. Todo actualizado y verificado por nuestros expertos.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar en la documentación... ej: WordPress, SSL, cPanel"
                  className="w-full px-6 py-4 text-secondary-900 rounded-2xl text-lg focus:outline-none focus:ring-4 focus:ring-primary-300"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  Buscar
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" asChild>
                <Link href="/docs/primeros-pasos">
                  Primeros Pasos
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-600" asChild>
                <Link href="/docs/api">
                  API Reference
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Start */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Guías de Inicio Rápido
            </h2>
            <p className="text-lg text-secondary-600">
              Empieza en minutos con estas guías paso a paso
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickStart.map((guide, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                      <guide.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-primary-600 font-medium">{guide.time}</div>
                      <div className="text-xs text-secondary-500">{guide.difficulty}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-secondary-600 text-sm mb-4">
                    {guide.description}
                  </p>
                  
                  <div className="space-y-1 mb-4">
                    {guide.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                        <span className="text-xs text-secondary-600">{step}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button size="sm" className="w-full" asChild>
                    <Link href={guide.href}>
                      Empezar Guía
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Categorías de Documentación
            </h2>
            <p className="text-lg text-secondary-600">
              Encuentra exactamente lo que necesitas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
                          {category.title}
                        </h3>
                        <span className="text-sm text-primary-600 font-medium">
                          {category.count}
                        </span>
                      </div>
                      
                      <p className="text-secondary-600 mb-4">
                        {category.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {category.topics.map((topic, topicIndex) => (
                          <span
                            key={topicIndex}
                            className="px-2 py-1 bg-secondary-100 text-secondary-600 text-xs rounded"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                      
                      <Button size="sm" asChild>
                        <Link href={category.href}>
                          Explorar Categoría
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Popular Guides */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Guías Más Populares
            </h2>
            <p className="text-lg text-secondary-600">
              Lo que más busca nuestra comunidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularGuides.map((guide, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        guide.difficulty === 'Principiante' ? 'bg-green-100 text-green-700' :
                        guide.difficulty === 'Intermedio' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {guide.difficulty}
                      </span>
                      <span className="text-xs text-secondary-500">{guide.time}</span>
                    </div>
                    <span className="text-xs text-secondary-400">{guide.views} vistas</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-secondary-600 text-sm mb-4">
                    {guide.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-secondary-500">
                      Actualizado: {guide.updated}
                    </span>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={guide.href}>
                        Leer Guía
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* API Reference */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              API Reference
            </h2>
            <p className="text-lg text-secondary-600">
              Integra ARCII Cloud con tu aplicación
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CodeBracketIcon className="h-6 w-6 text-primary-600" />
                  Endpoints Principales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {apiEndpoints.map((endpoint, index) => (
                    <div key={index} className="border border-secondary-200 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-2 py-1 text-xs font-mono rounded ${
                          endpoint.method === 'GET' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-sm text-secondary-700">{endpoint.endpoint}</code>
                      </div>
                      <p className="text-sm text-secondary-600 mb-2">{endpoint.description}</p>
                      <div className="text-xs text-orange-600">{endpoint.auth}</div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-secondary-200">
                  <Button asChild>
                    <Link href="/docs/api">
                      Ver Documentación Completa
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-primary-900 mb-4">
                  🚀 Empezar con la API
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <span className="text-primary-800">Obtén tu API Key gratis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <span className="text-primary-800">Prueba endpoints en sandbox</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <span className="text-primary-800">Integra en producción</span>
                  </div>
                </div>
                
                <div className="bg-primary-600 text-white p-4 rounded-lg font-mono text-sm mb-6">
                  curl -H "Authorization: Bearer YOUR_API_KEY" \<br/>
                  &nbsp;&nbsp;https://api.arciicloud.com/v2/hosting/accounts
                </div>
                
                <Button variant="secondary" asChild>
                  <Link href="/api-keys">
                    Obtener API Key Gratis
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Video Tutorials */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Video Tutoriales
            </h2>
            <p className="text-lg text-secondary-600">
              Aprende visualmente con nuestros cursos en video
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tutorials.map((tutorial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <PlayCircleIcon className="h-16 w-16 text-white group-hover:scale-110 transition-transform" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {tutorial.title}
                  </h3>
                  <p className="text-secondary-600 text-sm mb-4">
                    {tutorial.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-xs text-secondary-500">
                      <span>{tutorial.videos} videos</span>
                      <span>{tutorial.duration}</span>
                    </div>
                    <div className="text-xs text-primary-600 font-medium">
                      {tutorial.level}
                    </div>
                  </div>
                  
                  <Button size="sm" className="w-full" asChild>
                    <Link href="/tutoriales/1">
                      Ver Serie Completa
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Help & Support */}
        <section>
          <Card className="bg-gradient-to-r from-secondary-600 to-secondary-800 text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                ¿No Encontraste lo que Buscabas?
              </h2>
              <p className="text-xl text-secondary-100 mb-8 max-w-2xl mx-auto">
                Nuestro equipo de soporte está disponible 24/7 para ayudarte con 
                cualquier duda técnica o problema específico.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="xl" variant="secondary" asChild>
                  <Link href="/contacto">
                    Chat con Soporte 24/7
                  </Link>
                </Button>
                
                <Button size="xl" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary-600" asChild>
                  <Link href="/tickets">
                    Crear Ticket Técnico
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-8 text-sm text-secondary-200">
                <div className="flex items-center gap-2">
                  <ChatBubbleLeftRightIcon className="h-4 w-4" />
                  <span>Respuesta < 2 horas</span>
                </div>
                <div className="flex items-center gap-2">
                  <AcademicCapIcon className="h-4 w-4" />
                  <span>Expertos certificados</span>
                </div>
                <div className="flex items-center gap-2">
                  <DocumentTextIcon className="h-4 w-4" />
                  <span>+500 guías actualizadas</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}