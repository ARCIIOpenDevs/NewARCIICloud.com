import { User, Settings, CreditCard, Shield, Bell, Globe, LogOut, Edit, Save, Camera } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function MiCuentaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Mi Cuenta
          </h1>
          <p className="text-gray-600">Gestiona tu perfil y configuración de cuenta</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar con navegación */}
          <div className="lg:col-span-1">
            <Card>
              <div className="p-6">
                {/* Avatar del usuario */}
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                      LG
                    </div>
                    <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                  <h3 className="font-semibold text-gray-800">Luis Gamer</h3>
                  <p className="text-sm text-gray-600">luis@ejemplo.com</p>
                  <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs mt-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Cuenta Activa
                  </div>
                </div>

                {/* Menú de navegación */}
                <nav className="space-y-2">
                  <button className="w-full flex items-center gap-3 p-3 text-left rounded-lg bg-blue-50 text-blue-700 font-medium">
                    <User className="w-5 h-5" />
                    Perfil Personal
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 text-left rounded-lg hover:bg-gray-50 text-gray-700 transition-colors">
                    <Settings className="w-5 h-5" />
                    Configuración
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 text-left rounded-lg hover:bg-gray-50 text-gray-700 transition-colors">
                    <CreditCard className="w-5 h-5" />
                    Facturación
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 text-left rounded-lg hover:bg-gray-50 text-gray-700 transition-colors">
                    <Shield className="w-5 h-5" />
                    Seguridad
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 text-left rounded-lg hover:bg-gray-50 text-gray-700 transition-colors">
                    <Bell className="w-5 h-5" />
                    Notificaciones
                  </button>
                  <hr className="my-4" />
                  <button className="w-full flex items-center gap-3 p-3 text-left rounded-lg hover:bg-red-50 text-red-600 transition-colors">
                    <LogOut className="w-5 h-5" />
                    Cerrar Sesión
                  </button>
                </nav>
              </div>
            </Card>

            {/* Resumen de servicios */}
            <Card className="mt-6">
              <div className="p-6">
                <h3 className="font-semibold text-gray-800 mb-4">Mis Servicios</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Hosting Web</span>
                    <span className="text-sm font-medium text-green-600">Activo</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">VPS Cloud</span>
                    <span className="text-sm font-medium text-green-600">Activo</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Dominios</span>
                    <span className="text-sm font-medium text-blue-600">3 activos</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contenido principal */}
          <div className="lg:col-span-3">
            {/* Información personal */}
            <Card className="mb-8">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-800">Información Personal</h2>
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4 mr-2" />
                    Editar
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      defaultValue="Luis Gamer Rodriguez"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="luis@ejemplo.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      defaultValue="+52 555 123 4567"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      País
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>México</option>
                      <option>Estados Unidos</option>
                      <option>España</option>
                      <option>Colombia</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dirección
                    </label>
                    <input
                      type="text"
                      defaultValue="Av. Insurgentes Sur 123, Col. Roma Norte"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ciudad
                    </label>
                    <input
                      type="text"
                      defaultValue="Ciudad de México"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Código Postal
                    </label>
                    <input
                      type="text"
                      defaultValue="06700"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <Button>
                    <Save className="w-4 h-4 mr-2" />
                    Guardar Cambios
                  </Button>
                </div>
              </div>
            </Card>

            {/* Configuración de cuenta */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <div className="p-6 border-b">
                  <h3 className="text-lg font-semibold text-gray-800">Preferencias</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-800">Idioma</p>
                      <p className="text-sm text-gray-600">Idioma de la interfaz</p>
                    </div>
                    <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                      <option>Español</option>
                      <option>English</option>
                      <option>Français</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-800">Zona horaria</p>
                      <p className="text-sm text-gray-600">Tu zona horaria local</p>
                    </div>
                    <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                      <option>GMT-6 México</option>
                      <option>GMT-5 Colombia</option>
                      <option>GMT+1 España</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-800">Moneda</p>
                      <p className="text-sm text-gray-600">Mostrar precios en</p>
                    </div>
                    <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                      <option>MXN (Pesos)</option>
                      <option>USD (Dólares)</option>
                      <option>EUR (Euros)</option>
                    </select>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="p-6 border-b">
                  <h3 className="text-lg font-semibold text-gray-800">Notificaciones</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-800">Email de facturas</p>
                      <p className="text-sm text-gray-600">Recibir facturas por email</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-800">Notificaciones de sistema</p>
                      <p className="text-sm text-gray-600">Mantenimientos y actualizaciones</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-800">Ofertas y promociones</p>
                      <p className="text-sm text-gray-600">Recibir ofertas especiales</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-800">SMS de seguridad</p>
                      <p className="text-sm text-gray-600">Alertas de acceso por SMS</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </Card>
            </div>

            {/* Seguridad */}
            <Card>
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Seguridad de la Cuenta
                </h3>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Cambiar Contraseña</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Última actualización: hace 3 meses
                      </p>
                      <Button variant="outline">
                        Cambiar Contraseña
                      </Button>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Autenticación de Dos Factores</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Agrega una capa extra de seguridad
                      </p>
                      <Button variant="outline">
                        Configurar 2FA
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Sesiones Activas</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Gestiona tus sesiones en otros dispositivos
                      </p>
                      <Button variant="outline">
                        Ver Sesiones
                      </Button>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Descargar Datos</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Exporta todos tus datos personales
                      </p>
                      <Button variant="outline">
                        Solicitar Descarga
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Eliminar cuenta */}
            <Card className="mt-6 border-red-200">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-red-600 mb-2">Zona Peligrosa</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Estas acciones son permanentes e irreversibles
                </p>
                <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
                  Eliminar mi cuenta
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}