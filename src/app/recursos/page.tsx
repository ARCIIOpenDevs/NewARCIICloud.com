import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  BookOpenIcon,
  FilmIcon,
  NewspaperIcon,
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
  AcademicCapIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  CloudArrowDownIcon,
  CheckCircleIcon,
  PresentationChartLineIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Recursos ARCII Cloud | Herramientas, Guías y Materiales Gratuitos',
  description: 'Centro completo de recursos gratuitos: herramientas web, plantillas, ebooks, webinars, casos de estudio y materiales para desarrolladores.',
  keywords: [
    'recursos hosting mexico',
    'herramientas gratuitas hosting',
    'plantillas wordpress',
    'ebooks hosting',
    'webinars hosting',
    'casos estudio hosting'
  ],
  openGraph: {
    title: 'Recursos Gratuitos ARCII Cloud | Herramientas y Guías',
    description: '🎁 +100 recursos gratuitos: herramientas web, plantillas, ebooks, webinars y casos de estudio.',
    url: 'https://new.arciicloud.com/recursos',
    type: 'website',
  },
};

const tools = [
  {
    title: 'Verificador de Velocidad',
    description: 'Analiza la velocidad de carga de tu sitio web',
    icon: ChartBarIcon,
    category: 'Performance',
    free: true,
    href: '/herramientas/speed-test',
    features: ['Test desde México', 'Métricas detalladas', 'Recomendaciones', 'Comparativas'],
  },
  {
    title: 'Generador SSL',
    description: 'Verifica y genera certificados SSL gratuitos',
    icon: CheckCircleIcon,
    category: 'Seguridad',
    free: true,
    href: '/herramientas/ssl-checker',
    features: ['Verificación SSL', 'Let\'s Encrypt', 'Renovación auto', 'Diagnóstico'],
  },
  {
    title: 'Calculadora de Hosting',
    description: 'Encuentra el plan perfecto para tus necesidades',
    icon: PresentationChartLineIcon,
    category: 'Planificación',
    free: true,
    href: '/herramientas/calculadora',
    features: ['Análisis de tráfico', 'Recomendaciones', 'Estimación costos', 'Comparativas'],
  },
  {
    title: 'Migrador Web',
    description: 'Herramienta para migrar sitios web fácilmente',
    icon: CloudArrowDownIcon,
    category: 'Migración',
    free: false,
    href: '/herramientas/migrador',
    features: ['Migración 1-click', 'Zero downtime', 'Backup incluido', 'Soporte experto'],
  },
];

const ebooks = [
  {
    title: 'Guía Completa de WordPress 2024',
    description: 'Todo lo que necesitas saber sobre WordPress',
    pages: 156,
    downloads: '25,430',
    category: 'WordPress',
    level: 'Todos los niveles',
    preview: '/ebooks/wordpress-2024-preview.pdf',
    download: '/ebooks/wordpress-2024.pdf',
    cover: '/ebooks/covers/wordpress-2024.jpg',
  },
  {
    title: 'E-commerce Exitoso con WooCommerce',
    description: 'Crea tu tienda online profesional paso a paso',
    pages: 198,
    downloads: '18,920',
    category: 'E-commerce',
    level: 'Intermedio',
    preview: '/ebooks/woocommerce-preview.pdf',
    download: '/ebooks/woocommerce.pdf',
    cover: '/ebooks/covers/woocommerce.jpg',
  },
  {
    title: 'SEO Técnico para Desarrolladores',
    description: 'Optimización SEO desde el código',
    pages: 134,
    downloads: '14,760',
    category: 'SEO',
    level: 'Avanzado',
    preview: '/ebooks/seo-tecnico-preview.pdf',
    download: '/ebooks/seo-tecnico.pdf',
    cover: '/ebooks/covers/seo-tecnico.jpg',
  },
  {
    title: 'Seguridad Web: Manual Práctico',
    description: 'Protege tu sitio web contra amenazas',
    pages: 112,
    downloads: '12,340',
    category: 'Seguridad',
    level: 'Intermedio',
    preview: '/ebooks/seguridad-web-preview.pdf',
    download: '/ebooks/seguridad-web.pdf',
    cover: '/ebooks/covers/seguridad-web.jpg',
  },
];

const webinars = [
  {
    title: 'WordPress Performance: De 0 a 100',
    description: 'Técnicas avanzadas de optimización WordPress',
    date: '2024-02-15',
    time: '18:00 GMT-6',
    duration: '90 minutos',
    presenter: 'Carlos Mendoza, CTO ARCII Cloud',
    attendees: 1250,
    status: 'upcoming',
    topics: ['Core Web Vitals', 'Caching avanzado', 'CDN optimización', 'Database tuning'],
  },
  {
    title: 'E-commerce Holiday Season Ready',
    description: 'Preparar tu tienda para temporadas altas',
    date: '2024-02-01',
    time: '19:00 GMT-6',
    duration: '60 minutos',
    presenter: 'Ana López, E-commerce Specialist',
    attendees: 890,
    status: 'recorded',
    topics: ['Scaling infrastructure', 'Performance tips', 'Security checks', 'Monitoring'],
  },
  {
    title: 'API Integration Masterclass',
    description: 'Integra ARCII Cloud API en tus proyectos',
    date: '2024-01-18',
    time: '17:00 GMT-6',
    duration: '120 minutos',
    presenter: 'Roberto Silva, Lead Developer',
    attendees: 654,
    status: 'recorded',
    topics: ['API Authentication', 'Webhooks', 'Rate limiting', 'Best practices'],
  },
];

const caseStudies = [
  {
    title: 'E-commerce 10x: Crecimiento de Mercado Libre Store',
    company: 'TechStore México',
    industry: 'E-commerce',
    challenge: 'Sitio lento con 500K productos, caídas en Black Friday',
    solution: 'Migración a VPS Empresarial + CDN + Optimizaciones',
    results: [
      '78% mejora en velocidad',
      'Zero downtime en Black Friday',
      '340% aumento en conversiones',
      'ROI de 1,250% en 6 meses'
    ],
    metrics: {
      before: '8.5s carga promedio',
      after: '1.9s carga promedio',
      revenue: '+$2.4M ingresos adicionales'
    }
  },
  {
    title: 'Startup to Unicorn: Plataforma SaaS Escalable',
    company: 'FinTech Solutions',
    industry: 'Fintech',
    challenge: 'Arquitectura no escalable, problemas de compliance',
    solution: 'Infraestructura cloud + Compliance SOC2 + Auto-scaling',
    results: [
      '99.99% uptime logrado',
      'SOC2 Type II certificado',
      '50K a 500K usuarios',
      'Serie A $15M levantada'
    ],
    metrics: {
      before: '99.2% uptime',
      after: '99.99% uptime',
      revenue: '$15M Series A funding'
    }
  },
  {
    title: 'Media Giant: Streaming con 2M Usuarios',
    company: 'StreamMX',
    industry: 'Media & Entertainment',
    challenge: 'Alto bandwidth, latencia global, costos elevados',
    solution: 'CDN Global + Edge Computing + Compresión adaptiva',
    results: [
      '67% reducción en latencia',
      '45% ahorro en bandwidth',
      '2M usuarios concurrentes',
      'Expansión a 12 países'
    ],
    metrics: {
      before: '450ms latencia promedio',
      after: '148ms latencia promedio',
      revenue: '45% reducción costos'
    }
  }
];

const templates = [
  {
    name: 'Business Pro WordPress',
    description: 'Tema empresarial responsive con página builder',
    category: 'WordPress',
    price: 'Gratis',
    downloads: '15,420',
    rating: 4.8,
    preview: '/templates/business-pro-preview.jpg',
    download: '/templates/business-pro.zip'
  },
  {
    name: 'E-commerce Minimal',
    description: 'Plantilla WooCommerce minimalista y rápida',
    category: 'WooCommerce',
    price: 'Gratis',
    downloads: '12,890',
    rating: 4.9,
    preview: '/templates/ecommerce-minimal-preview.jpg',
    download: '/templates/ecommerce-minimal.zip'
  },
  {
    name: 'Blog Magazine',
    description: 'Tema para blogs y revistas digitales',
    category: 'Blog',
    price: 'Gratis',
    downloads: '9,630',
    rating: 4.7,
    preview: '/templates/blog-magazine-preview.jpg',
    download: '/templates/blog-magazine.zip'
  },
  {
    name: 'Restaurant Deluxe',
    description: 'Sitio web completo para restaurantes',
    category: 'Restaurant',
    price: 'Premium',
    downloads: '7,240',
    rating: 4.9,
    preview: '/templates/restaurant-deluxe-preview.jpg',
    download: '/templates/restaurant-deluxe.zip'
  }
];

export default function RecursosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Centro de<br />
              <span className="text-yellow-300">Recursos Gratuitos</span>
            </h1>
            <p className="text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Más de 100 recursos gratuitos para impulsar tu presencia digital: 
              herramientas, plantillas, ebooks, webinars y casos de estudio reales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" asChild>
                <Link href="#herramientas">
                  Explorar Herramientas
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-600" asChild>
                <Link href="#ebooks">
                  Descargar Ebooks
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tools Section */}
        <section id="herramientas" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Herramientas Gratuitas
            </h2>
            <p className="text-lg text-secondary-600">
              Utilidades web para optimizar y analizar tu sitio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                      <tool.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                        tool.free ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {tool.free ? 'Gratis' : 'Premium'}
                      </span>
                      <div className="text-xs text-secondary-500 mt-1">{tool.category}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-secondary-600 text-sm mb-4">
                    {tool.description}
                  </p>
                  
                  <div className="space-y-1 mb-4">
                    {tool.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircleIcon className="w-3 h-3 text-green-500" />
                        <span className="text-xs text-secondary-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button size="sm" className="w-full" asChild>
                    <Link href={tool.href}>
                      {tool.free ? 'Usar Gratis' : 'Ver Premium'}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Ebooks Section */}
        <section id="ebooks" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Ebooks Gratuitos
            </h2>
            <p className="text-lg text-secondary-600">
              Guías completas descargables para dominar el desarrollo web
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ebooks.map((ebook, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group overflow-hidden">
                <div className="aspect-[3/4] bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <BookOpenIcon className="h-16 w-16 text-white group-hover:scale-110 transition-transform" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                      {ebook.category}
                    </span>
                    <span className="text-xs text-secondary-500">{ebook.pages} páginas</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {ebook.title}
                  </h3>
                  <p className="text-secondary-600 text-sm mb-4">
                    {ebook.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-secondary-500">
                      {ebook.downloads} descargas
                    </span>
                    <span className="text-xs text-primary-600 font-medium">
                      {ebook.level}
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <Link href={ebook.preview}>
                        Vista Previa
                      </Link>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <Link href={ebook.download}>
                        Descargar
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Webinars Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Webinars Exclusivos
            </h2>
            <p className="text-lg text-secondary-600">
              Aprende de nuestros expertos en sesiones en vivo y grabadas
            </p>
          </div>

          <div className="space-y-6">
            {webinars.map((webinar, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                          webinar.status === 'upcoming' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {webinar.status === 'upcoming' ? '🔴 Próximo' : '📺 Grabado'}
                        </span>
                        <span className="text-sm text-secondary-500">{webinar.duration}</span>
                        <span className="text-sm text-secondary-500">{webinar.attendees} asistentes</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">
                        {webinar.title}
                      </h3>
                      <p className="text-secondary-600 mb-4">
                        {webinar.description}
                      </p>
                      
                      <div className="grid sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="text-sm font-medium text-secondary-700">Fecha y hora:</div>
                          <div className="text-sm text-secondary-600">{webinar.date} • {webinar.time}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-secondary-700">Presentador:</div>
                          <div className="text-sm text-secondary-600">{webinar.presenter}</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {webinar.topics.map((topic, topicIndex) => (
                          <span key={topicIndex} className="px-2 py-1 bg-secondary-100 text-secondary-600 text-xs rounded">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <div className="w-32 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mb-4">
                        <FilmIcon className="h-8 w-8 text-white" />
                      </div>
                      <Button className="w-full" asChild>
                        <Link href={`/webinars/${index + 1}`}>
                          {webinar.status === 'upcoming' ? 'Registrarse' : 'Ver Grabación'}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Casos de Estudio Reales
            </h2>
            <p className="text-lg text-secondary-600">
              Historias de éxito de nuestros clientes más exitosos
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full font-medium">
                          {study.industry}
                        </span>
                        <h3 className="text-xl font-bold text-secondary-900">
                          {study.company}
                        </h3>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                        {study.title}
                      </h2>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-secondary-900 mb-2">🎯 Desafío:</h4>
                          <p className="text-secondary-600 text-sm">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-secondary-900 mb-2">💡 Solución:</h4>
                          <p className="text-secondary-600 text-sm">{study.solution}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-secondary-900 mb-3">🚀 Resultados:</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center gap-2">
                              <CheckCircleIcon className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-secondary-600">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-green-900 mb-4 text-center">📊 Métricas Clave</h4>
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-red-600">{study.metrics.before}</div>
                          <div className="text-xs text-secondary-600">Antes</div>
                        </div>
                        <div className="flex justify-center">
                          <div className="w-px h-8 bg-secondary-300"></div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-600">{study.metrics.after}</div>
                          <div className="text-xs text-secondary-600">Después</div>
                        </div>
                        <div className="pt-4 border-t border-green-200">
                          <div className="text-center">
                            <div className="text-lg font-bold text-blue-600">{study.metrics.revenue}</div>
                            <div className="text-xs text-secondary-600">Impacto</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-secondary-100 text-center">
                    <Button variant="outline" asChild>
                      <Link href={`/casos-estudio/${index + 1}`}>
                        Leer Caso Completo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Templates */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Plantillas Premium
            </h2>
            <p className="text-lg text-secondary-600">
              Temas y plantillas profesionales para impulsar tu proyecto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {templates.map((template, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-secondary-200 to-secondary-300 flex items-center justify-center">
                  <DocumentTextIcon className="h-12 w-12 text-secondary-600 group-hover:scale-110 transition-transform" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs rounded-full">
                      {template.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-xs text-secondary-600">{template.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {template.name}
                  </h3>
                  <p className="text-secondary-600 text-sm mb-4">
                    {template.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-sm font-semibold ${
                      template.price === 'Gratis' ? 'text-green-600' : 'text-blue-600'
                    }`}>
                      {template.price}
                    </span>
                    <span className="text-xs text-secondary-500">
                      {template.downloads} descargas
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <Link href={template.preview}>
                        Preview
                      </Link>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <Link href={template.download}>
                        Descargar
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section>
          <Card className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                🎁 Recibe Recursos Exclusivos Semanalmente
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Únete a +25,000 desarrolladores que reciben nuestros recursos premium, 
                herramientas nuevas y casos de estudio exclusivos cada semana.
              </p>
              
              <div className="max-w-lg mx-auto mb-8">
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="flex-1 px-4 py-3 text-secondary-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                  />
                  <Button variant="secondary" size="lg">
                    Suscribirse Gratis
                  </Button>
                </div>
                <div className="text-sm text-primary-200 mt-3">
                  ✅ Sin spam • ✅ Cancela cuando quieras • ✅ Recursos exclusivos
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-8 text-sm text-primary-200">
                <div className="flex items-center gap-2">
                  <UserGroupIcon className="h-4 w-4" />
                  <span>25,000+ suscriptores</span>
                </div>
                <div className="flex items-center gap-2">
                  <RocketLaunchIcon className="h-4 w-4" />
                  <span>Recursos semanales</span>
                </div>
                <div className="flex items-center gap-2">
                  <AcademicCapIcon className="h-4 w-4" />
                  <span>100% gratuito</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}