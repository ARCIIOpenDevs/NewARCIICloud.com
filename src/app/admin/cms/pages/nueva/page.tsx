'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/ButtonCRM';
import { useCMS } from '@/hooks/useCMS';
import { PageContentFormData } from '@/types/cms';

const NewPagePage: React.FC = () => {
  const router = useRouter();
  const { createPage } = useCMS();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'contenido' | 'seo' | 'configuracion'>('contenido');
  
  const [formData, setFormData] = useState<PageContentFormData>({
    slug: '',
    titulo: '',
    descripcion: '',
    contenido: '',
    tipoContenido: 'pagina',
    estado: 'borrador',
    autorId: 'admin',
    autorNombre: 'Administrador',
    seccionPrincipal: false,
    configuracion: {
      mostrarEnMenu: true,
      mostrarFecha: false,
      permitirComentarios: false,
      requiereAuth: false
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.titulo || !formData.slug || !formData.contenido) {
      alert('⚠️ Debe completar todos los campos obligatorios');
      return;
    }

    setLoading(true);
    try {
      const pageId = await createPage(formData);
      alert('✅ Página creada exitosamente');
      router.push(`/admin/cms/pages/${pageId}/editar`);
    } catch (error) {
      console.error('Error creating page:', error);
      alert('❌ Error al crear la página');
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (titulo: string) => {
    return titulo
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (titulo: string) => {
    setFormData(prev => ({
      ...prev,
      titulo,
      slug: prev.slug || generateSlug(titulo)
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">📄 Nueva Página</h1>
            <p className="text-gray-600">Crear nueva página de contenido</p>
          </div>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={() => router.push('/admin/cms/pages')}
            >
              ← Volver a Páginas
            </Button>
            <Button
              form="page-form"
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {loading ? '⏳ Creando...' : '✅ Crear Página'}
            </Button>
          </div>
        </div>
      </div>

      <form id="page-form" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Contenido principal */}
          <div className="lg:col-span-3 space-y-6">
            {/* Tabs */}
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
              {[
                { id: 'contenido', name: 'Contenido', icon: '📝' },
                { id: 'seo', name: 'SEO', icon: '🔍' },
                { id: 'configuracion', name: 'Configuración', icon: '⚙️' }
              ].map(tab => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md transition-colors ${
                    activeTab === tab.id
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>

            {/* Contenido del tab */}
            {activeTab === 'contenido' && (
              <Card>
                <CardHeader>
                  <CardTitle>📝 Contenido de la Página</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Título de la Página *
                    </label>
                    <input
                      type="text"
                      value={formData.titulo}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Ingresa el título de la página"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      URL Slug *
                    </label>
                    <div className="flex items-center">
                      <span className="px-3 py-2 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-gray-600">
                        arciicloud.com/
                      </span>
                      <input
                        type="text"
                        value={formData.slug}
                        onChange={(e) => setFormData(prev => ({ ...prev, slug: generateSlug(e.target.value) }))}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="url-de-la-pagina"
                        required
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      La URL será: https://arciicloud.com/{formData.slug}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Descripción Corta
                    </label>
                    <textarea
                      value={formData.descripcion || ''}
                      onChange={(e) => setFormData(prev => ({ ...prev, descripcion: e.target.value }))}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Descripción breve de la página (opcional)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contenido de la Página *
                    </label>
                    <textarea
                      value={formData.contenido}
                      onChange={(e) => setFormData(prev => ({ ...prev, contenido: e.target.value }))}
                      rows={20}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                      placeholder="Contenido HTML de la página..."
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Puedes usar HTML, Markdown o texto plano. Soporta componentes de React.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'seo' && (
              <Card>
                <CardHeader>
                  <CardTitle>🔍 Configuración SEO</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Título SEO
                    </label>
                    <input
                      type="text"
                      value={formData.metaTitulo || ''}
                      onChange={(e) => setFormData(prev => ({ ...prev, metaTitulo: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Título optimizado para SEO (opcional)"
                      maxLength={60}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Si está vacío, se usará el título de la página. Máximo 60 caracteres.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Meta Descripción
                    </label>
                    <textarea
                      value={formData.metaDescripcion || ''}
                      onChange={(e) => setFormData(prev => ({ ...prev, metaDescripcion: e.target.value }))}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Descripción que aparecerá en los resultados de búsqueda"
                      maxLength={160}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Máximo 160 caracteres. Describe brevemente el contenido de la página.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Palabras Clave
                    </label>
                    <input
                      type="text"
                      value={(formData.metaKeywords || []).join(', ')}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        metaKeywords: e.target.value.split(',').map(k => k.trim()).filter(k => k)
                      }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="hosting, vps, dominios, email"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Separa las palabras clave con comas. Ejemplo: hosting, vps, dominios
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      URL Canónica
                    </label>
                    <input
                      type="url"
                      value={formData.canonicalUrl || ''}
                      onChange={(e) => setFormData(prev => ({ ...prev, canonicalUrl: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="https://arciicloud.com/pagina-canonical"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      URL canónica para evitar contenido duplicado (opcional)
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'configuracion' && (
              <Card>
                <CardHeader>
                  <CardTitle>⚙️ Configuración Avanzada</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={formData.configuracion?.mostrarEnMenu}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            configuracion: {
                              ...prev.configuracion!,
                              mostrarEnMenu: e.target.checked
                            }
                          }))}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm font-medium text-gray-700">
                          Mostrar en menú de navegación
                        </span>
                      </label>
                    </div>

                    <div>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={formData.configuracion?.mostrarFecha}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            configuracion: {
                              ...prev.configuracion!,
                              mostrarFecha: e.target.checked
                            }
                          }))}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm font-medium text-gray-700">
                          Mostrar fecha de publicación
                        </span>
                      </label>
                    </div>

                    <div>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={formData.configuracion?.permitirComentarios}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            configuracion: {
                              ...prev.configuracion!,
                              permitirComentarios: e.target.checked
                            }
                          }))}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm font-medium text-gray-700">
                          Permitir comentarios
                        </span>
                      </label>
                    </div>

                    <div>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={formData.configuracion?.requiereAuth}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            configuracion: {
                              ...prev.configuracion!,
                              requiereAuth: e.target.checked
                            }
                          }))}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm font-medium text-gray-700">
                          Requiere autenticación
                        </span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={formData.seccionPrincipal}
                        onChange={(e) => setFormData(prev => ({ ...prev, seccionPrincipal: e.target.checked }))}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        Página principal de sección
                      </span>
                    </label>
                    <p className="text-xs text-gray-500 mt-1 ml-6">
                      Marcar como página principal de una sección específica
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Orden en menú
                    </label>
                    <input
                      type="number"
                      value={formData.ordenEnMenu || ''}
                      onChange={(e) => setFormData(prev => ({ ...prev, ordenEnMenu: parseInt(e.target.value) || undefined }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="0"
                      min="0"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Orden de aparición en el menú (menor número = mayor prioridad)
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Panel lateral */}
          <div className="space-y-6">
            {/* Estado y publicación */}
            <Card>
              <CardHeader>
                <CardTitle>📊 Estado</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estado de la página
                  </label>
                  <select
                    value={formData.estado}
                    onChange={(e) => setFormData(prev => ({ ...prev, estado: e.target.value as any }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="borrador">📝 Borrador</option>
                    <option value="publicado">✅ Publicado</option>
                    <option value="archivado">📦 Archivado</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de contenido
                  </label>
                  <select
                    value={formData.tipoContenido}
                    onChange={(e) => setFormData(prev => ({ ...prev, tipoContenido: e.target.value as any }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="pagina">📄 Página</option>
                    <option value="landing">🎯 Landing Page</option>
                    <option value="servicio">🛠️ Página de Servicio</option>
                    <option value="empresa">🏢 Página Corporativa</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Vista previa */}
            <Card>
              <CardHeader>
                <CardTitle>👁️ Vista Previa</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-sm text-gray-900 mb-1">
                      {formData.metaTitulo || formData.titulo || 'Título de la página'}
                    </h4>
                    <p className="text-green-600 text-xs mb-1">
                      arciicloud.com/{formData.slug || 'url'}
                    </p>
                    <p className="text-gray-600 text-xs line-clamp-2">
                      {formData.metaDescripcion || formData.descripcion || 'Descripción de la página...'}
                    </p>
                  </div>
                  <p className="text-xs text-gray-500">
                    Así se verá en Google y redes sociales
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Ayuda */}
            <Card>
              <CardHeader>
                <CardTitle>💡 Consejos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>• Usa títulos descriptivos y únicos</p>
                  <p>• Mantén las URLs cortas y legibles</p>
                  <p>• Optimiza la meta descripción para SEO</p>
                  <p>• Revisa el contenido antes de publicar</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewPagePage;