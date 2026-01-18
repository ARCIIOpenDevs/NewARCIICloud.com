import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  BookOpenIcon,
  VideoCameraIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  PlayIcon,
  ClockIcon,
  UserGroupIcon,
  StarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Guías y Tutoriales Hosting México | ARCII Cloud Academy 2026',
  description: 'Guías completas y tutoriales gratuitos sobre hosting, WordPress, VPS, dominios y más. Aprende paso a paso con expertos mexicanos en hosting.',
  keywords: [
    'guias hosting mexico',
    'tutoriales hosting web',
    'como configurar hosting',
    'tutoriales wordpress mexico',
    'guias vps mexico',
    'tutoriales cpanel español',
    'hosting para principiantes',
    'academy hosting mexico'
  ],
  openGraph: {
    title: 'ARCII Cloud Academy | Guías y Tutoriales Hosting México',
    description: '📚 Academia gratuita con +100 guías paso a paso. Aprende hosting, WordPress, VPS y más.',
    url: 'https://new.arciicloud.com/recursos/guias',
    type: 'website',
  },
};

const categories = [
  {
    id: 'wordpress',
    title: 'WordPress',
    icon: '🚀',
    color: 'blue',
    description: 'Domina WordPress desde cero hasta nivel avanzado',
    tutorials: 24,
    level: 'Principiante a Avanzado'
  },
  {
    id: 'hosting',
    title: 'Hosting Web',
    icon: '🌐',
    color: 'green',
    description: 'Todo sobre configuración y gestión de hosting',
    tutorials: 18,
    level: 'Básico a Intermedio'
  },
  {
    id: 'vps',
    title: 'Servidores VPS',
    icon: '🖥️',
    color: 'purple',
    description: 'Administración completa de servidores virtuales',
    tutorials: 15,
    level: 'Intermedio a Avanzado'
  },
  {
    id: 'dominios',
    title: 'Dominios y DNS',
    icon: '🔗',
    color: 'orange',
    description: 'Registra, configura y gestiona tus dominios',
    tutorials: 12,
    level: 'Básico a Intermedio'
  },
  {
    id: 'ssl',
    title: 'SSL y Seguridad',
    icon: '🔒',
    color: 'red',
    description: 'Protege tu sitio web con certificados SSL',
    tutorials: 10,
    level: 'Básico a Avanzado'
  },
  {
    id: 'email',
    title: 'Email Corporativo',
    icon: '📧',
    color: 'indigo',
    description: 'Configura y gestiona email profesional',
    tutorials: 8,
    level: 'Básico a Intermedio'
  }
];

const featuredTutorials = [
  {
    id: 1,
    title: 'Cómo Instalar WordPress en Hosting Compartido',
    description: 'Tutorial paso a paso para instalar WordPress desde cPanel, configurar base de datos y realizar la instalación completa.',
    category: 'WordPress',
    level: 'Principiante',
    duration: '15 minutos',
    format: 'video',
    views: '12,450',
    rating: 4.9,
    author: 'Carlos Méndez',
    thumbnail: '/tutorials/wordpress-install.jpg',
    featured: true
  },
  {
    id: 2,
    title: 'Configurar DNS para tu Dominio desde cPanel',
    description: 'Aprende a configurar registros DNS A, CNAME, MX y TXT para optimizar tu dominio y email corporativo.',
    category: 'Dominios',
    level: 'Intermedio',
    duration: '20 minutos',
    format: 'video',
    views: '8,230',
    rating: 4.8,
    author: 'María González',
    thumbnail: '/tutorials/dns-config.jpg',
    featured: true
  },
  {
    id: 3,
    title: 'Acelerar WordPress: Guía Completa de Optimización',
    description: 'Técnicas avanzadas para mejorar la velocidad de tu sitio WordPress: plugins, caché, CDN, optimización de imágenes.',
    category: 'WordPress',
    level: 'Avanzado',
    duration: '35 minutos',
    format: 'video',
    views: '15,670',
    rating: 5.0,
    author: 'Roberto Silva',
    thumbnail: '/tutorials/wordpress-speed.jpg',
    featured: true
  },
  {
    id: 4,
    title: 'Configuración Inicial de Servidor VPS Ubuntu',
    description: 'Guía completa para configurar tu VPS desde cero: usuarios, SSH, firewall, actualizaciones y hardening básico.',
    category: 'VPS',
    level: 'Intermedio',
    duration: '45 minutos',
    format: 'texto',
    views: '6,890',
    rating: 4.9,
    author: 'Diego Castro',
    thumbnail: '/tutorials/vps-ubuntu.jpg',
    featured: true
  }
];

const allTutorials = [
  {
    title: 'Crear Backup Automático en WordPress',
    category: 'WordPress',
    level: 'Básico',
    duration: '12 min',
    format: 'video'
  },
  {
    title: 'Instalar Certificado SSL Let\'s Encrypt',
    category: 'SSL',
    level: 'Intermedio',
    duration: '18 min',
    format: 'video'
  },
  {
    title: 'Migrar Sitio Web a ARCII Cloud',
    category: 'Hosting',
    level: 'Básico',
    duration: '25 min',
    format: 'texto'
  },
  {
    title: 'Configurar DKIM y SPF para Email',
    category: 'Email',
    level: 'Avanzado',
    duration: '30 min',
    format: 'video'
  },
  {
    title: 'Monitorear Recursos del Servidor',
    category: 'VPS',
    level: 'Intermedio',
    duration: '22 min',
    format: 'texto'
  },
  {
    title: 'Configurar Subdominios en cPanel',
    category: 'Dominios',
    level: 'Básico',
    duration: '8 min',
    format: 'video'
  }
];

const learningPaths = [
  {
    title: 'Principiante Total',
    description: 'Nunca has tenido un sitio web? Empezar por aquí.',
    lessons: 8,
    duration: '2 horas',
    color: 'green'
  },
  {
    title: 'WordPress Master',
    description: 'Conviértete en experto de WordPress desde cero.',
    lessons: 15,
    duration: '5 horas',
    color: 'blue'
  },
  {
    title: 'Administrador VPS',
    description: 'Domina la administración de servidores Linux.',
    lessons: 12,
    duration: '8 horas',
    color: 'purple'
  },
  {
    title: 'E-commerce Profesional',
    description: 'Crea y optimiza tiendas online exitosas.',
    lessons: 10,
    duration: '4 horas',
    color: 'orange'
  }
];

export default function GuiasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <AcademicCapIcon className="h-10 w-10 text-white" />
          </div>
          
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">
            ARCII Cloud Academy
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
            Aprende hosting, WordPress, VPS y más con nuestras guías paso a paso. 
            Contenido gratuito creado por expertos mexicanos en hosting.
          </p>
          
          <div className="flex items-center justify-center gap-8 text-sm text-secondary-500 mb-8">
            <div className="flex items-center gap-2">
              <BookOpenIcon className="h-4 w-4" />
              <span>100+ Tutoriales</span>
            </div>
            <div className="flex items-center gap-2">
              <VideoCameraIcon className="h-4 w-4" />
              <span>Videos HD</span>
            </div>
            <div className="flex items-center gap-2">
              <DocumentTextIcon className="h-4 w-4" />
              <span>Guías Escritas</span>
            </div>
          </div>

          <Button size="lg" asChild>
            <Link href="#tutoriales-destacados">
              Empezar a Aprender
            </Link>
          </Button>
        </div>

        {/* Learning Paths */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Rutas de Aprendizaje
            </h2>
            <p className="text-lg text-secondary-600">
              Sigue un camino estructurado según tu nivel y objetivos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPaths.map((path, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow border-l-4 ${
                path.color === 'green' ? 'border-l-green-500' :
                path.color === 'blue' ? 'border-l-blue-500' :
                path.color === 'purple' ? 'border-l-purple-500' : 'border-l-orange-500'
              }`}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-secondary-900 mb-3">
                    {path.title}
                  </h3>
                  <p className="text-secondary-600 text-sm mb-4">
                    {path.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-secondary-600">Lecciones:</span>
                      <span className="font-medium text-secondary-900">{path.lessons}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-secondary-600">Duración:</span>
                      <span className="font-medium text-secondary-900">{path.duration}</span>
                    </div>
                  </div>
                  
                  <Button size="sm" variant="outline" className="w-full">
                    Comenzar Ruta
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Categorías de Tutoriales
            </h2>
            <p className="text-lg text-secondary-600">
              Explora nuestras categorías organizadas por temas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-secondary-600 text-sm mb-4">
                    {category.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      category.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                      category.color === 'green' ? 'bg-green-100 text-green-800' :
                      category.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                      category.color === 'orange' ? 'bg-orange-100 text-orange-800' :
                      category.color === 'red' ? 'bg-red-100 text-red-800' : 'bg-indigo-100 text-indigo-800'
                    }`}>
                      {category.tutorials} tutoriales
                    </div>
                    <div className="text-xs text-secondary-500">
                      {category.level}
                    </div>
                  </div>
                  
                  <Button size="sm" variant="outline" className="group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-colors">
                    Ver Tutoriales
                    <ArrowRightIcon className="h-3 w-3 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Tutorials */}
        <section id="tutoriales-destacados" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Tutoriales Destacados
            </h2>
            <p className="text-lg text-secondary-600">
              Los tutoriales más populares y mejor calificados por nuestra comunidad
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredTutorials.map((tutorial, index) => (
              <Card key={tutorial.id} className="hover:shadow-xl transition-shadow overflow-hidden">
                <div className="aspect-video bg-gradient-to-r from-blue-400 to-purple-500 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                      <PlayIcon className="h-8 w-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium text-white ${
                      tutorial.format === 'video' ? 'bg-red-500' : 'bg-green-500'
                    }`}>
                      {tutorial.format === 'video' ? '🎥 Video' : '📝 Texto'}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/50 backdrop-blur px-2 py-1 rounded text-xs text-white">
                      {tutorial.duration}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      tutorial.level === 'Principiante' ? 'bg-green-100 text-green-800' :
                      tutorial.level === 'Intermedio' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {tutorial.level}
                    </span>
                    <span className="px-2 py-1 bg-secondary-100 text-secondary-800 rounded text-xs font-medium">
                      {tutorial.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-secondary-900 mb-2">
                    {tutorial.title}
                  </h3>
                  <p className="text-secondary-600 text-sm mb-4">
                    {tutorial.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-xs text-secondary-500">
                      <div className="flex items-center gap-1">
                        <UserGroupIcon className="h-3 w-3" />
                        <span>{tutorial.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <StarIcon className="h-3 w-3" />
                        <span>{tutorial.rating}</span>
                      </div>
                    </div>
                    <span className="text-xs text-secondary-600">Por {tutorial.author}</span>
                  </div>
                  
                  <Button className="w-full" asChild>
                    <Link href={`/recursos/guias/${tutorial.category.toLowerCase()}/${tutorial.id}`}>
                      Ver Tutorial
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Tutorials Grid */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Más Tutoriales Populares
            </h2>
            <p className="text-lg text-secondary-600">
              Explora nuestra biblioteca completa de contenido educativo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTutorials.map((tutorial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      tutorial.format === 'video' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {tutorial.format === 'video' ? '🎥' : '📝'}
                    </span>
                    <span className="px-2 py-1 bg-secondary-100 text-secondary-800 rounded text-xs font-medium">
                      {tutorial.category}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-secondary-900 mb-2">
                    {tutorial.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-xs text-secondary-500 mb-4">
                    <span className={`px-2 py-1 rounded ${
                      tutorial.level === 'Básico' ? 'bg-green-100 text-green-800' :
                      tutorial.level === 'Intermedio' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {tutorial.level}
                    </span>
                    <div className="flex items-center gap-1">
                      <ClockIcon className="h-3 w-3" />
                      <span>{tutorial.duration}</span>
                    </div>
                  </div>
                  
                  <Button size="sm" variant="outline" className="w-full">
                    Ver Tutorial
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/recursos/guias/all">
                Ver Todos los Tutoriales
                <ArrowRightIcon className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              ¿Por Qué ARCII Cloud Academy?
            </h2>
            <p className="text-lg text-secondary-600">
              La mejor plataforma educativa para aprender hosting en español
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-2">
                100% Gratuito
              </h3>
              <p className="text-secondary-600 text-sm">
                Todo el contenido es completamente gratis para nuestros usuarios
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <VideoCameraIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-2">
                Videos HD
              </h3>
              <p className="text-secondary-600 text-sm">
                Tutoriales en video de alta calidad con explicaciones detalladas
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <LightBulbIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-2">
                Casos Reales
              </h3>
              <p className="text-secondary-600 text-sm">
                Ejemplos prácticos basados en situaciones reales de hosting
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-2">
                Soporte Activo
              </h3>
              <p className="text-secondary-600 text-sm">
                Comunidad activa y soporte técnico para resolver tus dudas
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <Card className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
            <CardContent className="p-12 text-center">
              <AcademicCapIcon className="h-16 w-16 mx-auto mb-6 text-primary-200" />
              <h2 className="text-3xl font-bold mb-4">
                ¿Listo para Convertirte en un Experto?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Únete a miles de usuarios que ya dominan el hosting gracias a 
                ARCII Cloud Academy. Aprende a tu ritmo con nuestras guías expertas.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
                <div className="bg-primary-500/20 backdrop-blur rounded-lg p-4">
                  <div className="text-2xl font-bold mb-1">100+</div>
                  <div className="text-primary-200 text-sm">Tutoriales Disponibles</div>
                </div>
                <div className="bg-primary-500/20 backdrop-blur rounded-lg p-4">
                  <div className="text-2xl font-bold mb-1">25,000+</div>
                  <div className="text-primary-200 text-sm">Estudiantes Activos</div>
                </div>
                <div className="bg-primary-500/20 backdrop-blur rounded-lg p-4">
                  <div className="text-2xl font-bold mb-1">4.9★</div>
                  <div className="text-primary-200 text-sm">Rating Promedio</div>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="xl" variant="secondary" asChild>
                  <Link href="/registro">
                    Crear Cuenta Gratuita
                  </Link>
                </Button>
                <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600" asChild>
                  <Link href="/recursos/guias/wordpress">
                    Empezar con WordPress
                  </Link>
                </Button>
              </div>
              
              <div className="mt-6 text-sm text-primary-200">
                🎓 Academy incluida gratis con cualquier plan de hosting
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}