'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useCMS } from '@/hooks/useCMS';
import { CMSStats } from '@/types/cms';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const CMSContent: React.FC = () => {
  const router = useRouter();
  const { 
    loading, 
    error,
    getCMSStats,
    pages,
    blogPosts,
    testimonios,
    faqs,
    fetchPages,
    fetchBlogPosts,
    fetchTestimonios,
    fetchFAQs
  } = useCMS();

  const [stats, setStats] = useState<CMSStats | null>(null);
  const [activeTab, setActiveTab] = useState<'pages' | 'blog' | 'testimonios' | 'faq' | 'media' | 'config'>('pages');

  useEffect(() => {
    loadCMSData();
  }, []);

  const loadCMSData = async () => {
    try {
      const [statsData] = await Promise.all([
        getCMSStats(),
        fetchPages({ estado: 'publicado' }),
        fetchBlogPosts({ estado: 'publicado' }),
        fetchTestimonios({ estado: 'aprobado' }),
        fetchFAQs({ activos: true })
      ]);
      setStats(statsData);
    } catch (error) {
      console.error('Error loading CMS data:', error);
    }
  };

  const quickActions = [
    {
      title: 'Nueva Página',
      description: 'Crear una página de contenido',
      icon: '📄',
      action: () => router.push('/admin/cms/pages/nueva'),
      color: 'bg-blue-100 text-blue-700 hover:bg-blue-200'
    },
    {
      title: 'Nuevo Artículo',
      description: 'Escribir entrada de blog',
      icon: '✍️',
      action: () => router.push('/admin/cms/blog/nuevo'),
      color: 'bg-green-100 text-green-700 hover:bg-green-200'
    },
    {
      title: 'Subir Medios',
      description: 'Gestionar archivos e imágenes',
      icon: '📁',
      action: () => router.push('/admin/cms/media'),
      color: 'bg-purple-100 text-purple-700 hover:bg-purple-200'
    },
    {
      title: 'Configuración',
      description: 'Ajustes del sitio web',
      icon: '⚙️',
      action: () => router.push('/admin/cms/configuracion'),
      color: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
    }
  ];

  const contentTabs = [
    { id: 'pages', name: 'Páginas', icon: '📄', count: stats?.contenido.paginas || 0 },
    { id: 'blog', name: 'Blog', icon: '📝', count: stats?.contenido.blog || 0 },
    { id: 'testimonios', name: 'Testimonios', icon: '💬', count: stats?.contenido.testimonios || 0 },
    { id: 'faq', name: 'FAQ', icon: '❓', count: stats?.contenido.faq || 0 },
    { id: 'media', name: 'Medios', icon: '🖼️', count: stats?.medios.total || 0 },
    { id: 'config', name: 'Configuración', icon: '⚙️', count: 0 }
  ];

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  if (loading && !stats) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2">Cargando sistema CMS...</span>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header y acciones rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickActions.map((action, index) => (
          <Card 
            key={index} 
            className={`cursor-pointer transition-all duration-200 hover:shadow-md ${action.color}`}
            onClick={action.action}
          >
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="text-2xl">{action.icon}</div>
                <div>
                  <h3 className="font-semibold">{action.title}</h3>
                  <p className="text-sm opacity-80">{action.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Estadísticas principales */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Páginas</p>
                  <p className="text-2xl font-bold text-blue-600">{stats.contenido.paginas}</p>
                </div>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  📄
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Artículos Blog</p>
                  <p className="text-2xl font-bold text-green-600">{stats.contenido.blog}</p>
                </div>
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                  📝
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Archivos Medios</p>
                  <p className="text-2xl font-bold text-purple-600">{stats.medios.total}</p>
                </div>
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  🖼️
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Espacio Usado</p>
                  <p className="text-2xl font-bold text-orange-600">{formatBytes(stats.medios.espacioUsado)}</p>
                </div>
                <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  💾
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Navegación por pestañas */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>📚 Gestión de Contenido</CardTitle>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => router.push('/admin/cms/busqueda')}
              >
                🔍 Buscar Contenido
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => router.push('/admin/cms/actividad')}
              >
                📊 Ver Actividad
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 border-b">
            {contentTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-t-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Contenido de pestañas */}
          <div className="space-y-4">
            {activeTab === 'pages' && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">📄 Páginas de Contenido</h3>
                  <div className="space-x-2">
                    <Button
                      size="sm"
                      onClick={() => router.push('/admin/cms/pages')}
                    >
                      👁️ Ver Todas
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => router.push('/admin/cms/pages/nueva')}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      ➕ Nueva Página
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {pages.slice(0, 5).map(page => (
                    <div key={page.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <div>
                        <h4 className="font-medium text-gray-900">{page.titulo}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>/{page.slug}</span>
                          <span>•</span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            page.estado === 'publicado' ? 'bg-green-100 text-green-800' :
                            page.estado === 'borrador' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {page.estado}
                          </span>
                          <span>•</span>
                          <span>{format(page.fechaActualizacion.toDate(), 'dd/MM/yyyy', { locale: es })}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => router.push(`/admin/cms/pages/${page.id}/editar`)}
                        >
                          ✏️ Editar
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(`/${page.slug}`, '_blank')}
                        >
                          👁️ Ver
                        </Button>
                      </div>
                    </div>
                  ))}
                  
                  {pages.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <p className="mb-4">No hay páginas creadas aún</p>
                      <Button onClick={() => router.push('/admin/cms/pages/nueva')}>
                        ➕ Crear Primera Página
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'blog' && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">📝 Artículos del Blog</h3>
                  <div className="space-x-2">
                    <Button
                      size="sm"
                      onClick={() => router.push('/admin/cms/blog')}
                    >
                      👁️ Ver Todos
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => router.push('/admin/cms/blog/nuevo')}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      ✍️ Nuevo Artículo
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {blogPosts.slice(0, 5).map(post => (
                    <div key={post.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <div className="flex items-center space-x-4">
                        {post.imagenDestacada && (
                          <img 
                            src={post.imagenDestacada} 
                            alt={post.titulo}
                            className="w-16 h-12 object-cover rounded"
                          />
                        )}
                        <div>
                          <h4 className="font-medium text-gray-900">{post.titulo}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>Por {post.autorNombre}</span>
                            <span>•</span>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              post.estado === 'publicado' ? 'bg-green-100 text-green-800' :
                              post.estado === 'borrador' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {post.estado}
                            </span>
                            <span>•</span>
                            <span>{post.vistas} vistas</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => router.push(`/admin/cms/blog/${post.id}/editar`)}
                        >
                          ✏️ Editar
                        </Button>
                      </div>
                    </div>
                  ))}
                  
                  {blogPosts.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <p className="mb-4">No hay artículos publicados aún</p>
                      <Button onClick={() => router.push('/admin/cms/blog/nuevo')}>
                        ✍️ Escribir Primer Artículo
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'testimonios' && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">💬 Testimonios de Clientes</h3>
                  <div className="space-x-2">
                    <Button
                      size="sm"
                      onClick={() => router.push('/admin/cms/testimonios')}
                    >
                      👁️ Ver Todos
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => router.push('/admin/cms/testimonios/nuevo')}
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      ➕ Nuevo Testimonio
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {testimonios.slice(0, 5).map(testimonio => (
                    <div key={testimonio.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <div className="flex items-center space-x-4">
                        {testimonio.clienteAvatar && (
                          <img 
                            src={testimonio.clienteAvatar} 
                            alt={testimonio.clienteNombre}
                            className="w-12 h-12 object-cover rounded-full"
                          />
                        )}
                        <div>
                          <h4 className="font-medium text-gray-900">{testimonio.clienteNombre}</h4>
                          <p className="text-sm text-gray-600">{testimonio.clienteCargo} en {testimonio.clienteEmpresa}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="flex text-yellow-400">
                              {Array.from({ length: testimonio.calificacion }, (_, i) => (
                                <span key={i}>⭐</span>
                              ))}
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              testimonio.estado === 'aprobado' ? 'bg-green-100 text-green-800' :
                              testimonio.estado === 'pendiente' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {testimonio.estado}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => router.push(`/admin/cms/testimonios/${testimonio.id}/editar`)}
                        >
                          ✏️ Editar
                        </Button>
                      </div>
                    </div>
                  ))}
                  
                  {testimonios.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <p className="mb-4">No hay testimonios registrados aún</p>
                      <Button onClick={() => router.push('/admin/cms/testimonios/nuevo')}>
                        ➕ Agregar Primer Testimonio
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {(activeTab === 'faq' || activeTab === 'media' || activeTab === 'config') && (
              <div className="text-center py-8 text-gray-500">
                <p className="mb-4">Sección en desarrollo</p>
                <p className="text-sm">Esta funcionalidad estará disponible pronto</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">❌ {error}</p>
        </div>
      )}
    </div>
  );
};

export default CMSContent;