import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gestión de Medios - Admin NewARCII Cloud',
  description: 'Panel de gestión de archivos multimedia y recursos'
}

export default function MediaPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Gestión de Medios</h1>
        <p className="text-gray-600 mt-2">
          Suba y gestione archivos multimedia para su sitio web
        </p>
      </div>

      {/* Barra de herramientas */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Subir Archivo
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
              Nueva Carpeta
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Todos los tipos</option>
              <option>Imágenes</option>
              <option>Videos</option>
              <option>Documentos</option>
            </select>
            <div className="flex rounded-md border border-gray-300">
              <button className="p-2 hover:bg-gray-50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-50 border-l border-gray-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de archivos */}
      <div className="bg-white rounded-lg shadow">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-6">
          {/* Ejemplo de carpeta */}
          <div className="group cursor-pointer">
            <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center mb-2 group-hover:bg-gray-200 transition-colors">
              <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
              </svg>
            </div>
            <p className="text-sm text-gray-700 truncate">Imágenes</p>
            <p className="text-xs text-gray-500">24 archivos</p>
          </div>

          {/* Ejemplo de imagen */}
          <div className="group cursor-pointer">
            <div className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mb-2 group-hover:opacity-80 transition-opacity">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-sm text-gray-700 truncate">logo.png</p>
            <p className="text-xs text-gray-500">150 KB</p>
          </div>

          {/* Ejemplo de documento */}
          <div className="group cursor-pointer">
            <div className="aspect-square bg-red-100 rounded-lg flex items-center justify-center mb-2 group-hover:bg-red-200 transition-colors">
              <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-sm text-gray-700 truncate">manual.pdf</p>
            <p className="text-xs text-gray-500">2.1 MB</p>
          </div>

          {/* Ejemplo de video */}
          <div className="group cursor-pointer">
            <div className="aspect-square bg-purple-100 rounded-lg flex items-center justify-center mb-2 group-hover:bg-purple-200 transition-colors">
              <svg className="w-12 h-12 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm6 2.5v3l2.5-1.5L9 6.5z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-sm text-gray-700 truncate">demo.mp4</p>
            <p className="text-xs text-gray-500">15.3 MB</p>
          </div>

          {/* Zona de subida */}
          <div className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-colors group">
            <svg className="w-8 h-8 text-gray-400 group-hover:text-blue-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <p className="text-xs text-gray-500 group-hover:text-blue-500 text-center">
              Subir archivo
            </p>
          </div>
        </div>

        {/* Información de almacenamiento */}
        <div className="border-t p-4 bg-gray-50">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>Storage utilizado: 2.4 GB de 10 GB</span>
            <div className="w-48 bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '24%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}