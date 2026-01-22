'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/ButtonCRM';
import { useCMS } from '@/hooks/useCMS';
import { PageContent, CMSFilter } from '@/types/cms';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const PagesManagementPage: React.FC = () => {
  const router = useRouter();
  const { pages, fetchPages, deletePage, loading, error } = useCMS();
  const [filters, setFilters] = useState<CMSFilter>({});
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPages(filters);
  }, [filters, fetchPages]);

  const handleDelete = async (pageId: string, pageTitle: string) => {
    if (confirm(`¿Estás seguro de que deseas eliminar la página "${pageTitle}"?`)) {
      try {
        await deletePage(pageId);
        alert('✅ Página eliminada exitosamente');
      } catch (error) {
        console.error('Error deleting page:', error);
        alert('❌ Error al eliminar la página');
      }
    }
  };

  const filteredPages = pages.filter(page => {
    if (searchTerm && !page.titulo.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true;
  });

  const getStatusColor = (estado: string) => {
    const colors = {
      'publicado': 'bg-green-100 text-green-800',
      'borrador': 'bg-yellow-100 text-yellow-800',
      'archivado': 'bg-gray-100 text-gray-800'
    };
    return colors[estado as keyof typeof colors] || colors['borrador'];
  };

  const getTypeIcon = (tipo: string) => {
    const icons = {
      'pagina': '📄',
      'landing': '🎯',
      'servicio': '🛠️',
      'empresa': '🏢'
    };
    return icons[tipo as keyof typeof icons] || '📄';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">📄 Gestión de Páginas</h1>
            <p className="text-gray-600">Administra las páginas de contenido del sitio web</p>
          </div>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={() => router.push('/admin/cms')}
            >
              ← Volver al CMS
            </Button>
            <Button
              onClick={() => router.push('/admin/cms/pages/nueva')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              ➕ Nueva Página
            </Button>
          </div>
        </div>
      </div>

      {/* Filtros y búsqueda */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Buscar páginas por título..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex gap-2">
              <select
                value={filters.estado || ''}
                onChange={(e) => setFilters(prev => ({ ...prev, estado: e.target.value || undefined }))}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Todos los estados</option>
                <option value="publicado">Publicado</option>
                <option value="borrador">Borrador</option>
                <option value="archivado">Archivado</option>
              </select>
              
              <select
                value={filters.tipo || ''}
                onChange={(e) => setFilters(prev => ({ ...prev, tipo: e.target.value as any }))}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Todos los tipos</option>
                <option value="pagina">Página</option>
                <option value="landing">Landing</option>
                <option value="servicio">Servicio</option>
                <option value="empresa">Empresa</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de páginas */}
      <Card>
        <CardHeader>
          <CardTitle>📄 Páginas ({filteredPages.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
              <span className="ml-2">Cargando páginas...</span>
            </div>
          ) : filteredPages.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {searchTerm || filters.estado ? 'No se encontraron páginas' : 'No hay páginas creadas'}
              </h3>
              <p className="text-gray-600 mb-4">
                {searchTerm || filters.estado 
                  ? 'Intenta ajustar los filtros de búsqueda' 
                  : 'Comienza creando tu primera página de contenido'
                }
              </p>
              {!searchTerm && !filters.estado && (
                <Button
                  onClick={() => router.push('/admin/cms/pages/nueva')}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  ➕ Crear Primera Página
                </Button>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredPages.map(page => (
                <div
                  key={page.id}
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl">{getTypeIcon(page.tipoContenido)}</span>
                        <h3 className="text-lg font-semibold text-gray-900">{page.titulo}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(page.estado)}`}>
                          {page.estado}
                        </span>
                        {page.seccionPrincipal && (
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                            Principal
                          </span>
                        )}
                      </div>
                      
                      <div className="mb-3">
                        <p className="text-gray-600 text-sm mb-2">/{page.slug}</p>
                        {page.descripcion && (
                          <p className="text-gray-700 text-sm line-clamp-2">{page.descripcion}</p>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>👤 {page.autorNombre}</span>
                        <span>•</span>
                        <span>📅 {format(page.fechaActualizacion.toDate(), 'dd/MM/yyyy HH:mm', { locale: es })}</span>
                        <span>•</span>
                        <span>📊 {page.vistas || 0} vistas</span>
                        {page.tipoContenido && (
                          <>
                            <span>•</span>
                            <span>🏷️ {page.tipoContenido}</span>
                          </>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 ml-4">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(`/${page.slug}`, '_blank')}
                        disabled={page.estado !== 'publicado'}
                      >
                        👁️ Ver
                      </Button>
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
                        onClick={() => handleDelete(page.id!, page.titulo)}
                        className="text-red-600 hover:text-red-700"
                      >
                        🗑️ Eliminar
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {error && (
        <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">❌ {error}</p>
        </div>
      )}
    </div>
  );
};

export default PagesManagementPage;