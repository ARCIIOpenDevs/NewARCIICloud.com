import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  ClockIcon,
  UserIcon,
  TagIcon,
  EyeIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Blog Técnico | Tutoriales y Guías de Hosting',
  description: 'Aprende con nuestros expertos: tutoriales de hosting, WordPress, VPS, seguridad web y mejores prácticas. Contenido técnico actualizado semanalmente.',
  keywords: [
    'blog hosting',
    'tutoriales hosting',
    'guias wordpress',
    'tutoriales vps',
    'seguridad web',
    'optimizacion hosting',
    'cpanel tutorial',
    'ssl certificados'
  ],
  openGraph: {
    title: 'Blog Técnico | Expertos en Hosting México',
    description: '📚 Tutoriales exclusivos: WordPress, VPS, seguridad, optimización. Aprende con expertos certificados.',
    url: 'https://new.arciicloud.com/blog',
    type: 'website',
  },
};

const featuredArticles = [
  {
    id: 1,
    title: 'Guía Completa: Migrar WordPress sin Downtime',
    excerpt: 'Aprende a migrar tu sitio WordPress de forma segura usando nuestras herramientas profesionales sin perder tráfico.',
    author: 'Diego Martínez',
    authorRole: 'Sr. WordPress Developer',
    publishedAt: '15 Enero 2026',
    readTime: '12 min',
    category: 'WordPress',
    tags: ['migración', 'wordpress', 'downtime'],
    featured: true,
    image: '/blog/wordpress-migration.jpg',
    views: 2847,
  },
  {
    id: 2,
    title: 'Configurar VPS Ubuntu 24.04 para Producción',
    excerpt: 'Tutorial paso a paso para configurar un VPS Ubuntu con Nginx, PHP 8.3, MySQL y medidas de seguridad avanzadas.',
    author: 'Ana López',
    authorRole: 'DevOps Engineer',
    publishedAt: '12 Enero 2026',
    readTime: '18 min',
    category: 'VPS',
    tags: ['ubuntu', 'nginx', 'php', 'seguridad'],
    featured: true,
    image: '/blog/ubuntu-vps-setup.jpg',
    views: 1923,
  },
  {
    id: 3,
    title: 'SSL Gratuito vs Premium: ¿Cuál Elegir?',
    excerpt: 'Comparativa técnica entre certificados SSL gratuitos (Let\'s Encrypt) y premium (EV, OV) para diferentes tipos de sitios.',
    author: 'Roberto Silva',
    authorRole: 'Security Specialist',
    publishedAt: '10 Enero 2026',
    readTime: '8 min',
    category: 'Seguridad',
    tags: ['ssl', 'certificados', 'seguridad'],
    featured: false,
    image: '/blog/ssl-comparison.jpg',
    views: 1456,
  },
];

const categories = [
  { name: 'WordPress', count: 24, color: 'bg-blue-100 text-blue-700' },
  { name: 'VPS', count: 18, color: 'bg-purple-100 text-purple-700' },
  { name: 'Seguridad', count: 15, color: 'bg-red-100 text-red-700' },
  { name: 'Hosting', count: 32, color: 'bg-green-100 text-green-700' },
  { name: 'Dominios', count: 12, color: 'bg-orange-100 text-orange-700' },
  { name: 'Email', count: 9, color: 'bg-indigo-100 text-indigo-700' },
];

const recentArticles = [
  {
    id: 4,
    title: 'Optimización de Velocidad: Core Web Vitals 2026',
    author: 'María González',
    publishedAt: '8 Enero 2026',
    readTime: '10 min',
    category: 'Performance',
    views: 892,
  },
  {
    id: 5,
    title: 'Backup Automático con rsync y cron',
    author: 'Carlos Ruiz',
    publishedAt: '5 Enero 2026',
    readTime: '15 min',
    category: 'Backup',
    views: 743,
  },
  {
    id: 6,
    title: 'PHP 8.4: Nuevas Funcionalidades y Hosting',
    author: 'Luis Fernández',
    publishedAt: '3 Enero 2026',
    readTime: '12 min',
    category: 'PHP',
    views: 1234,
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Blog Técnico ARCII Cloud
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Tutoriales, guías y mejores prácticas de hosting escritas por nuestros 
              ingenieros certificados. Todo lo que necesitas saber para optimizar tu presencia web.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Articles */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-secondary-900">Artículos Destacados</h2>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/blog/todos">Ver Todos</Link>
                </Button>
              </div>

              <div className="space-y-8">
                {featuredArticles.map((article) => (
                  <Card key={article.id} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3">
                          <div className="aspect-video bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-lg flex items-center justify-center">
                            <span className="text-secondary-500 font-medium">
                              {article.category}
                            </span>
                          </div>
                        </div>
                        
                        <div className="md:w-2/3 space-y-4">
                          <div className="flex items-center gap-2 text-sm text-secondary-500">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              article.category === 'WordPress' ? 'bg-blue-100 text-blue-700' :
                              article.category === 'VPS' ? 'bg-purple-100 text-purple-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {article.category}
                            </span>
                            <ClockIcon className="h-4 w-4" />
                            <span>{article.readTime}</span>
                            <EyeIcon className="h-4 w-4 ml-2" />
                            <span>{article.views.toLocaleString()}</span>
                          </div>

                          <h3 className="text-xl font-bold text-secondary-900 hover:text-primary-600 transition-colors">
                            <Link href={`/blog/${article.id}`}>
                              {article.title}
                            </Link>
                          </h3>

                          <p className="text-secondary-600 leading-relaxed">
                            {article.excerpt}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-primary-800 rounded-full flex items-center justify-center">
                                <UserIcon className="h-4 w-4 text-white" />
                              </div>
                              <div className="text-sm">
                                <p className="font-medium text-secondary-900">{article.author}</p>
                                <p className="text-secondary-500">{article.authorRole}</p>
                              </div>
                              <span className="text-secondary-400 text-sm">•</span>
                              <span className="text-secondary-500 text-sm">{article.publishedAt}</span>
                            </div>

                            <Button variant="ghost" size="sm" asChild>
                              <Link href={`/blog/${article.id}`}>
                                Leer más <ArrowRightIcon className="h-4 w-4 ml-1" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Recent Articles */}
            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">Artículos Recientes</h2>
              <div className="space-y-4">
                {recentArticles.map((article) => (
                  <Card key={article.id} className="hover:shadow-md transition-all duration-200">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-secondary-900 hover:text-primary-600 transition-colors mb-2">
                            <Link href={`/blog/${article.id}`}>
                              {article.title}
                            </Link>
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-secondary-500">
                            <span>{article.author}</span>
                            <span>•</span>
                            <span>{article.publishedAt}</span>
                            <span>•</span>
                            <span>{article.readTime}</span>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <EyeIcon className="h-4 w-4" />
                              <span>{article.views}</span>
                            </div>
                          </div>
                        </div>
                        <span className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded text-xs font-medium">
                          {article.category}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categorías</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <Link 
                      key={category.name}
                      href={`/blog/categoria/${category.name.toLowerCase()}`}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary-50 transition-colors"
                    >
                      <span className="font-medium text-secondary-900">{category.name}</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${category.color}`}>
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200">
              <CardHeader>
                <CardTitle className="text-lg text-primary-900">
                  Newsletter Técnico
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-700 text-sm mb-4">
                  Recibe las últimas guías y tutoriales directo en tu email. 
                  Sin spam, solo contenido de valor.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full px-3 py-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <Button className="w-full" size="sm">
                    Suscribirse
                  </Button>
                </div>
                <p className="text-xs text-primary-600 mt-2">
                  Únete a más de 12,000 desarrolladores
                </p>
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tags Populares</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['wordpress', 'php', 'mysql', 'ssl', 'nginx', 'ubuntu', 'backup', 'cdn', 'email', 'dns'].map((tag) => (
                    <Link 
                      key={tag}
                      href={`/blog/tag/${tag}`}
                      className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded text-xs font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}