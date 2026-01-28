import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Configuración Sistema - Admin NewARCII Cloud',
  description: 'Panel de configuración general del sistema administrativo'
}

export default function SettingsPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Configuración del Sistema</h1>
        <p className="text-gray-600 mt-2">
          Gestione la configuración general del sistema administrativo
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Configuración de Usuario */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Configuración de Usuario</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tiempo de sesión (minutos)
              </label>
              <input
                type="number"
                defaultValue={60}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="mr-2" />
                <span className="text-sm text-gray-700">Requerir autenticación de dos factores</span>
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="mr-2" />
                <span className="text-sm text-gray-700">Logs de actividad de usuario</span>
              </label>
            </div>
          </div>
        </div>

        {/* Configuración de Seguridad */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Seguridad</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Intentos de login fallidos máximos
              </label>
              <input
                type="number"
                defaultValue={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tiempo de bloqueo (minutos)
              </label>
              <input
                type="number"
                defaultValue={15}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="mr-2" />
                <span className="text-sm text-gray-700">Habilitar firewall de aplicaciones</span>
              </label>
            </div>
          </div>
        </div>

        {/* Configuración de Email */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Configuración SMTP</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Servidor SMTP
              </label>
              <input
                type="text"
                placeholder="smtp.gmail.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Puerto
              </label>
              <input
                type="number"
                defaultValue={587}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Usuario SMTP
              </label>
              <input
                type="email"
                placeholder="noreply@newarcii.cloud"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña SMTP
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Configuración de Notificaciones */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Notificaciones</h2>
          <div className="space-y-4">
            <div>
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="mr-2" />
                <span className="text-sm text-gray-700">Notificar nuevos clientes</span>
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="mr-2" />
                <span className="text-sm text-gray-700">Notificar nuevos tickets</span>
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-gray-700">Resumen diario por email</span>
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email para notificaciones
              </label>
              <input
                type="email"
                defaultValue="admin@newarcii.cloud"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Configuración de Base de Datos */}
        <div className="bg-white rounded-lg shadow p-6 lg:col-span-2">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Mantenimiento de Base de Datos</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">Backup Automático</h3>
              <p className="text-sm text-gray-600 mb-3">Último: Hoy 03:00 AM</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm">
                Configurar
              </button>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">Optimizar BD</h3>
              <p className="text-sm text-gray-600 mb-3">Último: Hace 3 días</p>
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm">
                Optimizar Ahora
              </button>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">Logs del Sistema</h3>
              <p className="text-sm text-gray-600 mb-3">Tamaño: 125 MB</p>
              <button className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors text-sm">
                Limpiar Logs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Estado del sistema */}
      <div className="mt-6 bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Estado del Sistema</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <p className="text-sm font-medium text-gray-800">Base de Datos</p>
            <p className="text-xs text-gray-600">Operativo</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <p className="text-sm font-medium text-gray-800">Cache</p>
            <p className="text-xs text-gray-600">Operativo</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <p className="text-sm font-medium text-gray-800">SMTP</p>
            <p className="text-xs text-gray-600">Operativo</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            </div>
            <p className="text-sm font-medium text-gray-800">Backups</p>
            <p className="text-xs text-gray-600">Advertencia</p>
          </div>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="mt-8 flex justify-end space-x-4">
        <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
          Restablecer
        </button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Guardar Configuración
        </button>
      </div>
    </div>
  )
}