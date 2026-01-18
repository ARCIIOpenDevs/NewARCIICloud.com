import { Cookie, Shield, Settings, Eye, UserCheck, AlertTriangle } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function CookiesPage() {
  const cookieTypes = [
    {
      name: 'Cookies Esenciales',
      description: 'Necesarias para el funcionamiento básico del sitio web',
      required: true,
      duration: 'Sesión',
      purpose: 'Autenticación, seguridad, navegación básica',
      examples: ['Sesión de usuario', 'Configuración de idioma', 'Estado de login'],
      icon: Shield
    },
    {
      name: 'Cookies de Rendimiento',
      description: 'Recopilan información sobre cómo los usuarios usan nuestro sitio',
      required: false,
      duration: '2 años',
      purpose: 'Analytics, optimización, monitoreo de errores',
      examples: ['Google Analytics', 'Hotjar', 'Error tracking'],
      icon: Settings
    },
    {
      name: 'Cookies de Funcionalidad',
      description: 'Permiten recordar las preferencias del usuario',
      required: false,
      duration: '1 año',
      purpose: 'Personalización, preferencias de usuario',
      examples: ['Tema oscuro/claro', 'Configuración de panel', 'Idioma preferido'],
      icon: UserCheck
    },
    {
      name: 'Cookies de Marketing',
      description: 'Utilizadas para mostrar anuncios relevantes y medir campañas',
      required: false,
      duration: '90 días',
      purpose: 'Publicidad dirigida, remarketing, análisis de campañas',
      examples: ['Facebook Pixel', 'Google Ads', 'LinkedIn Ads'],
      icon: Eye
    }
  ]

  const thirdPartyServices = [
    {
      name: 'Google Analytics',
      purpose: 'Análisis de tráfico y comportamiento de usuarios',
      cookies: ['_ga', '_ga_*', '_gid', '_gat'],
      retention: '26 meses',
      privacy: 'https://policies.google.com/privacy'
    },
    {
      name: 'Google Tag Manager',
      purpose: 'Gestión de etiquetas y scripts de seguimiento',
      cookies: ['_gcl_*', '_gac_*'],
      retention: '90 días',
      privacy: 'https://policies.google.com/privacy'
    },
    {
      name: 'Hotjar',
      purpose: 'Mapas de calor y grabaciones de sesiones',
      cookies: ['_hjSessionUser_*', '_hjSession_*'],
      retention: '1 año',
      privacy: 'https://www.hotjar.com/legal/policies/privacy'
    },
    {
      name: 'Intercom',
      purpose: 'Chat en vivo y soporte al cliente',
      cookies: ['intercom-*', 'intercom-session-*'],
      retention: '9 meses',
      privacy: 'https://www.intercom.com/legal/privacy'
    },
    {
      name: 'Stripe',
      purpose: 'Procesamiento de pagos',
      cookies: ['__stripe_sid', '__stripe_mid'],
      retention: '2 años',
      privacy: 'https://stripe.com/privacy'
    }
  ]

  const yourRights = [
    {
      title: 'Derecho de Acceso',
      description: 'Puedes solicitar información sobre qué datos personales procesamos sobre ti.'
    },
    {
      title: 'Derecho de Rectificación',
      description: 'Puedes solicitar la corrección de datos personales inexactos o incompletos.'
    },
    {
      title: 'Derecho de Supresión',
      description: 'Puedes solicitar la eliminación de tus datos personales en ciertas circunstancias.'
    },
    {
      title: 'Derecho a la Portabilidad',
      description: 'Puedes solicitar una copia de tus datos en un formato estructurado y de uso común.'
    },
    {
      title: 'Derecho de Oposición',
      description: 'Puedes oponerte al procesamiento de tus datos personales en cualquier momento.'
    },
    {
      title: 'Derecho de Limitación',
      description: 'Puedes solicitar la limitación del procesamiento de tus datos personales.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Cookie className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Política de Cookies
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Información detallada sobre cómo utilizamos cookies y tecnologías similares en nuestro sitio web.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Última actualización: 17 de enero de 2026
          </div>
        </div>

        {/* Cookie Notice */}
        <Card className="mb-8 bg-blue-50 border-blue-200">
          <div className="p-6">
            <div className="flex items-start gap-4">
              <Cookie className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-blue-800 mb-3">¿Qué son las cookies?</h2>
                <p className="text-blue-700 leading-relaxed">
                  Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. 
                  Nos ayudan a mejorar su experiencia, recordar sus preferencias y proporcionar contenido relevante.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Cookie Types */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Tipos de Cookies que Utilizamos</h2>
          
          <div className="space-y-6">
            {cookieTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <type.icon className={`w-8 h-8 mt-1 ${type.required ? 'text-red-600' : 'text-blue-600'}`} />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-800">{type.name}</h3>
                        {type.required ? (
                          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                            Obligatorias
                          </span>
                        ) : (
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                            Opcionales
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-4">{type.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Propósito:</h4>
                          <p className="text-sm text-gray-600">{type.purpose}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Duración:</h4>
                          <p className="text-sm text-gray-600">{type.duration}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Ejemplos:</h4>
                        <div className="flex flex-wrap gap-2">
                          {type.examples.map((example, i) => (
                            <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Third Party Services */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Servicios de Terceros</h2>
          
          <div className="space-y-4">
            {thirdPartyServices.map((service, index) => (
              <Card key={index}>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{service.name}</h3>
                      <p className="text-gray-600 mb-3">{service.purpose}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-semibold text-gray-700">Cookies: </span>
                          <span className="text-gray-600">{service.cookies.join(', ')}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-700">Retención: </span>
                          <span className="text-gray-600">{service.retention}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <a
                        href={service.privacy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 text-sm underline"
                      >
                        Política de Privacidad
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Cookie Control */}
        <Card className="mb-12">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Control de Cookies</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Gestión de Preferencias</h3>
                <p className="text-gray-600 mb-4">
                  Puede gestionar sus preferencias de cookies en cualquier momento haciendo clic en el botón "Configurar Cookies" 
                  en la parte inferior de nuestro sitio web.
                </p>
                <Button>Configurar Cookies</Button>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Configuración del Navegador</h3>
                <p className="text-gray-600 mb-4">
                  También puede controlar las cookies a través de la configuración de su navegador:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                    <span><strong>Chrome:</strong> Configuración &gt; Avanzado &gt; Privacidad y seguridad &gt; Cookies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                    <span><strong>Firefox:</strong> Opciones &gt; Privacidad y seguridad &gt; Cookies y datos del sitio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                    <span><strong>Safari:</strong> Preferencias &gt; Privacidad &gt; Cookies y datos de sitios web</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                    <span><strong>Edge:</strong> Configuración &gt; Privacidad y servicios &gt; Cookies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Your Rights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Sus Derechos</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {yourRights.map((right, index) => (
              <Card key={index}>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{right.title}</h3>
                  <p className="text-gray-600">{right.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Important Notice */}
        <Card className="mb-12 bg-yellow-50 border-yellow-200">
          <div className="p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-yellow-800 mb-3">Importante</h3>
                <p className="text-yellow-700 leading-relaxed">
                  Tenga en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad de nuestro sitio web. 
                  Las cookies esenciales no se pueden desactivar ya que son necesarias para el funcionamiento básico del sitio.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Contact Information */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="p-8 text-center">
            <Shield className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl font-bold mb-4">¿Tienes preguntas sobre cookies?</h2>
            <p className="text-lg opacity-90 mb-6">
              Si tiene preguntas sobre nuestra política de cookies o desea ejercer sus derechos, 
              no dude en contactarnos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Contactar DPO
              </Button>
              <Button size="lg" variant="outline">
                Ver Política de Privacidad
              </Button>
            </div>
          </div>
        </Card>

        {/* Last Updated */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Esta política de cookies fue actualizada por última vez el 17 de enero de 2026. 
            Nos reservamos el derecho de actualizar esta política en cualquier momento.
          </p>
        </div>
      </div>
    </div>
  )
}