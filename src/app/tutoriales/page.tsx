import { FileText, Search, Download, Play, BookOpen, Star } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function TutorialesPage() {
  const tutorials = [
    {
      id: 1,
      title: 'Configurar tu Primer Sitio Web',
      description: 'Aprende paso a paso cómo subir tu primer sitio web usando FTP, File Manager o Git.',
      category: 'Principiantes',
      duration: '12 min',
      level: 'Básico',
      rating: 4.9,
      views: '15.2K',
      thumbnail: '/tutorials/primer-sitio.jpg',
      type: 'video',
      updated: '2 días'
    },
    {
      id: 2,
      title: 'Instalar WordPress en un Clic',
      description: 'Guía completa para instalar WordPress usando nuestro instalador automático.',
      category: 'WordPress',
      duration: '8 min',
      level: 'Básico',
      rating: 4.8,
      views: '22.1K',
      thumbnail: '/tutorials/wordpress-install.jpg',
      type: 'video',
      updated: '1 semana'
    },
    {
      id: 3,
      title: 'Configurar SSL/HTTPS en tu Dominio',
      description: 'Activar certificados SSL gratuitos y forzar HTTPS en tu sitio web.',
      category: 'Seguridad',
      duration: '15 min',
      level: 'Intermedio',
      rating: 4.7,
      views: '18.5K',
      thumbnail: '/tutorials/ssl-setup.jpg',
      type: 'video',
      updated: '3 días'
    },
    {
      id: 4,
      title: 'Optimizar Velocidad de WordPress',
      description: 'Técnicas avanzadas para mejorar la velocidad de carga de tu sitio WordPress.',
      category: 'Performance',
      duration: '25 min',
      level: 'Avanzado',
      rating: 4.9,
      views: '11.8K',
      thumbnail: '/tutorials/wp-speed.jpg',
      type: 'video',
      updated: '5 días'
    },
    {
      id: 5,
      title: 'Configurar Email Corporativo',
      description: 'Crear y configurar cuentas de email profesionales con tu dominio.',
      category: 'Email',
      duration: '18 min',
      level: 'Intermedio',
      rating: 4.6,
      views: '9.3K',
      thumbnail: '/tutorials/email-setup.jpg',
      type: 'video',
      updated: '1 semana'
    },
    {
      id: 6,
      title: 'Migrar tu Sitio Web a ARCII Cloud',
      description: 'Proceso completo de migración desde otro proveedor sin downtime.',
      category: 'Migración',
      duration: '30 min',
      level: 'Intermedio',
      rating: 4.8,
      views: '7.9K',
      thumbnail: '/tutorials/migration.jpg',
      type: 'video',
      updated: '4 días'
    }
  ]

  const categories = [
    { name: 'Todos', count: tutorials.length, active: true },
    { name: 'Principiantes', count: 12, active: false },
    { name: 'WordPress', count: 18, active: false },
    { name: 'Seguridad', count: 8, active: false },
    { name: 'Performance', count: 6, active: false },
    { name: 'Email', count: 5, active: false },
    { name: 'VPS', count: 9, active: false }
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Básico': return 'bg-green-100 text-green-700'
      case 'Intermedio': return 'bg-yellow-100 text-yellow-700'
      case 'Avanzado': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Play className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tutoriales Video
            </h1>
          </div>
          <p className="text-gray-600 text-lg mb-8">
            Aprende hosting, WordPress y más con nuestros tutoriales paso a paso
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar tutoriales..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="text-center p-6">
            <div className="text-2xl font-bold text-blue-600">89</div>
            <div className="text-sm text-gray-600">Tutoriales</div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-2xl font-bold text-green-600">156K</div>
            <div className="text-sm text-gray-600">Visualizaciones</div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-2xl font-bold text-purple-600">4.8★</div>
            <div className="text-sm text-gray-600">Rating Promedio</div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-2xl font-bold text-orange-600">12h</div>
            <div className="text-sm text-gray-600">Contenido Total</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-800">Categorías</h2>
              </div>
              <div className="p-4 space-y-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                      category.active
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-medium">{category.name}</span>
                    <span className="text-sm text-gray-500">({category.count})</span>
                  </button>
                ))}
              </div>
            </Card>

            <Card className="mt-6">
              <div className="p-6">
                <h3 className="font-semibold text-gray-800 mb-4">Filtros</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nivel</label>
                    <select className="w-full p-2 border border-gray-300 rounded-lg text-sm">
                      <option>Todos los niveles</option>
                      <option>Básico</option>
                      <option>Intermedio</option>
                      <option>Avanzado</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Duración</label>
                    <select className="w-full p-2 border border-gray-300 rounded-lg text-sm">
                      <option>Cualquier duración</option>
                      <option>Menos de 10 min</option>
                      <option>10-20 min</option>
                      <option>Más de 20 min</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ordenar por</label>
                    <select className="w-full p-2 border border-gray-300 rounded-lg text-sm">
                      <option>Más populares</option>
                      <option>Más recientes</option>
                      <option>Mejor calificados</option>
                      <option>Duración</option>
                    </select>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Mostrando {tutorials.length} tutoriales
              </h2>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Descargar Lista
                </Button>
              </div>
            </div>

            {/* Tutorials Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {tutorials.map((tutorial) => (
                <Card key={tutorial.id} className="hover:shadow-lg transition-shadow">
                  {/* Thumbnail */}
                  <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {tutorial.duration}
                    </div>
                    <div className="absolute top-2 left-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${getLevelColor(tutorial.level)}`}>
                        {tutorial.level}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        {tutorial.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        Actualizado hace {tutorial.updated}
                      </span>
                    </div>

                    <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                      {tutorial.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {tutorial.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-current" />
                          <span>{tutorial.rating}</span>
                        </div>
                        <span>{tutorial.views} vistas</span>
                      </div>
                    </div>

                    <Button className="w-full" size="sm">
                      <Play className="w-4 h-4 mr-2" />
                      Ver Tutorial
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-8">
              <div className="text-sm text-gray-600">
                Mostrando 1-6 de 89 tutoriales
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" disabled>Anterior</Button>
                <Button variant="outline">1</Button>
                <Button>2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Siguiente</Button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Card className="mt-12">
          <div className="p-8 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <BookOpen className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              ¿Necesitas ayuda personalizada?
            </h2>
            <p className="text-gray-600 mb-6">
              Si no encuentras lo que buscas, contacta a nuestro equipo de soporte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Contactar Soporte
              </Button>
              <Button variant="outline" size="lg">
                Solicitar Tutorial
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}