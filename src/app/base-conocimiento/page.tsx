import { BookOpen, Search, FileText, Video, Download, ExternalLink, Filter, Tag } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function BaseConocimientoPage() {
  const categorias = [
    {
      nombre: 'Primeros Pasos',
      icono: '🚀',
      color: 'bg-blue-100 text-blue-700',
      articulos: 12
    },
    {
      nombre: 'Hosting Web',
      icono: '🌐',
      color: 'bg-green-100 text-green-700',
      articulos: 28
    },
    {
      nombre: 'VPS Cloud',
      icono: '☁️',
      color: 'bg-purple-100 text-purple-700',
      articulos: 15
    },
    {
      nombre: 'Dominios',
      icono: '🔗',
      color: 'bg-orange-100 text-orange-700',
      articulos: 8
    },
    {
      nombre: 'Email',
      icono: '📧',
      color: 'bg-pink-100 text-pink-700',
      articulos: 10
    },
    {
      nombre: 'Seguridad',
      icono: '🔒',
      color: 'bg-red-100 text-red-700',
      articulos: 18
    }
  ]

  const articulosDestacados = [
    {
      titulo: 'Cómo configurar tu primer sitio web',
      descripcion: 'Guía completa para subir tu sitio web por primera vez usando FTP, File Manager o Git.',
      categoria: 'Primeros Pasos',
      tipo: 'Guía',
      tiempo: '10 min',
      popularidad: 'Muy popular',
      fecha: '15 Enero 2026'
    },
    {
      titulo: 'Instalar WordPress en un clic',
      descripcion: 'Aprende a instalar WordPress automáticamente desde tu panel de hosting.',
      categoria: 'Hosting Web',
      tipo: 'Tutorial',
      tiempo: '5 min',
      popularidad: 'Popular',
      fecha: '12 Enero 2026'
    },
    {
      titulo: 'Configurar SSL/TLS en tu dominio',
      descripcion: 'Activa HTTPS en tu sitio web con certificados SSL gratuitos de Let\'s Encrypt.',
      categoria: 'Seguridad',
      tipo: 'Guía',
      tiempo: '15 min',
      popularidad: 'Muy popular',
      fecha: '10 Enero 2026'
    },
    {
      titulo: 'Migración de hosting sin downtime',
      descripcion: 'Transfiere tu sitio web desde otro proveedor sin perder tráfico ni datos.',
      categoria: 'Hosting Web',
      tipo: 'Tutorial',
      tiempo: '25 min',
      popularidad: 'Popular',
      fecha: '08 Enero 2026'
    },
    {
      titulo: 'Configurar servidor VPS desde cero',
      descripcion: 'Instala y configura Ubuntu Server, Nginx, PHP y MySQL en tu VPS.',
      categoria: 'VPS Cloud',
      tipo: 'Guía Avanzada',
      tiempo: '45 min',
      popularidad: 'Popular',
      fecha: '05 Enero 2026'
    },
    {
      titulo: 'Optimizar velocidad de tu sitio web',
      descripcion: 'Técnicas para mejorar el rendimiento y velocidad de carga de tu sitio.',
      categoria: 'Hosting Web',
      tipo: 'Optimización',
      tiempo: '20 min',
      popularidad: 'Muy popular',
      fecha: '03 Enero 2026'
    }
  ]

  const tutorialesVideo = [
    {
      titulo: 'Panel de control: Tour completo',
      duracion: '8:45',
      vistas: '12.3K',
      categoria: 'Primeros Pasos'
    },
    {
      titulo: 'Instalar SSL en 3 minutos',
      duracion: '3:12',
      vistas: '8.7K',
      categoria: 'Seguridad'
    },
    {
      titulo: 'Configurar email corporativo',
      duracion: '6:30',
      vistas: '5.2K',
      categoria: 'Email'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Base de Conocimiento
            </h1>
          </div>
          <p className="text-gray-600 text-lg mb-8">
            Documentación completa, tutoriales y guías para aprovechar al máximo nuestros servicios
          </p>

          {/* Buscador avanzado */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar en la base de conocimiento..."
                className="w-full pl-12 pr-32 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
              <Button className="absolute right-2 top-2">
                Buscar
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              <span className="text-sm text-gray-500">Búsquedas populares:</span>
              <button className="text-sm text-blue-600 hover:underline">SSL</button>
              <button className="text-sm text-blue-600 hover:underline">WordPress</button>
              <button className="text-sm text-blue-600 hover:underline">FTP</button>
              <button className="text-sm text-blue-600 hover:underline">DNS</button>
              <button className="text-sm text-blue-600 hover:underline">Backup</button>
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6">
            <div className="text-2xl font-bold text-blue-600">156</div>
            <div className="text-sm text-gray-600">Artículos</div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-2xl font-bold text-green-600">43</div>
            <div className="text-sm text-gray-600">Tutoriales</div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-2xl font-bold text-purple-600">24</div>
            <div className="text-sm text-gray-600">Videos</div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-2xl font-bold text-orange-600">12</div>
            <div className="text-sm text-gray-600">Descargas</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar con categorías */}
          <div className="lg:col-span-1">
            <Card>
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-800">Categorías</h2>
              </div>
              <div className="p-4 space-y-2">
                {categorias.map((categoria, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{categoria.icono}</span>
                      <span className="font-medium text-gray-700">{categoria.nombre}</span>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${categoria.color}`}>
                      {categoria.articulos}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Tutoriales en video */}
            <Card className="mt-6">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Video className="w-5 h-5" />
                  Videos Populares
                </h2>
              </div>
              <div className="p-4 space-y-4">
                {tutorialesVideo.map((video, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="aspect-video bg-gray-200 rounded-lg mb-2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-80 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-l-4 border-l-white border-y-2 border-y-transparent ml-1"></div>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                        {video.duracion}
                      </div>
                    </div>
                    <h3 className="font-medium text-sm group-hover:text-blue-600 transition-colors">
                      {video.titulo}
                    </h3>
                    <div className="text-xs text-gray-500 mt-1">
                      {video.vistas} vistas • {video.categoria}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Contenido principal */}
          <div className="lg:col-span-3">
            {/* Filtros */}
            <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Todos
                </Button>
                <Button variant="ghost" size="sm">Más recientes</Button>
                <Button variant="ghost" size="sm">Más populares</Button>
                <Button variant="ghost" size="sm">Guías</Button>
                <Button variant="ghost" size="sm">Tutoriales</Button>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Descargar PDF
                </Button>
              </div>
            </div>

            {/* Artículos destacados */}
            <div className="space-y-6">
              {articulosDestacados.map((articulo, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="w-8 h-8 text-blue-600" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 cursor-pointer transition-colors">
                            {articulo.titulo}
                          </h3>
                          <ExternalLink className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
                        </div>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {articulo.descripcion}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Tag className="w-4 h-4" />
                            {articulo.categoria}
                          </span>
                          <span>{articulo.tipo}</span>
                          <span>⏱️ {articulo.tiempo} lectura</span>
                          <span className="text-green-600 font-medium">{articulo.popularidad}</span>
                          <span className="ml-auto">{articulo.fecha}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Paginación */}
            <div className="flex items-center justify-between mt-8">
              <div className="text-sm text-gray-600">
                Mostrando 1-6 de 156 artículos
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              ¿No encuentras lo que necesitas?
            </h2>
            <p className="text-gray-600 mb-6">
              Nuestro equipo está aquí para ayudarte. Contacta con soporte o sugiere nuevos artículos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Contactar Soporte
              </Button>
              <Button variant="outline" size="lg">
                Sugerir Artículo
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}