import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mesa de Ayuda | Sistema de Tickets de Soporte - ARCIICloud',
  description: '🎫 Sistema de tickets de soporte profesional ✅ Seguimiento 24/7 ✅ Prioridades configurables ✅ Historial completo ✅ Respuesta garantizada',
  keywords: [
    'mesa de ayuda mexico',
    'sistema tickets soporte',
    'help desk mexico',
    'soporte tecnico tickets',
    'sistema helpdesk hosting'
  ],
};

export default function MesaAyudaPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Mesa de Ayuda
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Sistema profesional de tickets. Seguimiento completo de tu solicitud de soporte.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">&lt; 2min</div>
              <div className="text-blue-200 text-sm">Respuesta Inicial</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-blue-200 text-sm">Disponibilidad</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-blue-200 text-sm">Resolución 1er Contacto</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-blue-200 text-sm">Seguimiento</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Ticket Creation Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Crear Nuevo Ticket</h2>
              
              <form className="space-y-6">
                
                {/* Basic Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-3">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full p-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full p-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                {/* Account Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-3">
                      Dominio/Servicio
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="tudominio.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-3">
                      Plan de Hosting
                    </label>
                    <select className="w-full p-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                      <option value="">Selecciona tu plan</option>
                      <option value="basico">Hosting Básico</option>
                      <option value="profesional">Hosting Profesional</option>
                      <option value="business">Hosting Business</option>
                      <option value="enterprise">Hosting Enterprise</option>
                      <option value="vps">VPS Cloud</option>
                      <option value="otro">Otro servicio</option>
                    </select>
                  </div>
                </div>

                {/* Issue Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-3">
                      Categoría del Problema *
                    </label>
                    <select 
                      required
                      className="w-full p-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Selecciona categoría</option>
                      <option value="website-down">🔴 Sitio Web Caído</option>
                      <option value="email-issues">📧 Problemas de Email</option>
                      <option value="performance">⚡ Lentitud/Performance</option>
                      <option value="security">🛡️ Seguridad/Malware</option>
                      <option value="dns">🌐 Problemas DNS/Dominio</option>
                      <option value="ssl">🔒 Certificado SSL</option>
                      <option value="backup">💾 Backup/Restauración</option>
                      <option value="billing">💰 Facturación/Pagos</option>
                      <option value="migration">🔄 Migración</option>
                      <option value="technical">🔧 Consulta Técnica</option>
                      <option value="other">❓ Otro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-3">
                      Prioridad *
                    </label>
                    <select 
                      required
                      className="w-full p-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="low">🟢 Baja (Consulta general)</option>
                      <option value="medium">🟡 Media (Problema funcional)</option>
                      <option value="high">🟠 Alta (Afecta funcionamiento)</option>
                      <option value="critical">🔴 Crítica (Servicio inoperativo)</option>
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-3">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Describe brevemente tu problema"
                    maxLength={100}
                  />
                  <div className="text-xs text-secondary-500 mt-1">Máximo 100 caracteres</div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-3">
                    Descripción Detallada *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full p-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Describe detalladamente tu problema. Incluye:
• ¿Qué estás tratando de hacer?
• ¿Qué está pasando exactamente?
• ¿Cuándo comenzó el problema?
• ¿Has hecho algún cambio recientemente?
• ¿Qué navegador/dispositivo usas?"
                  ></textarea>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-3">
                    Archivos Adjuntos
                  </label>
                  <div className="border-2 border-dashed border-secondary-300 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-4">📎</div>
                    <p className="text-secondary-600 mb-2">
                      Arrastra archivos aquí o <button type="button" className="text-primary-600 hover:text-primary-700">selecciona archivos</button>
                    </p>
                    <p className="text-xs text-secondary-500">
                      Máximo 10MB por archivo. Formatos: JPG, PNG, GIF, PDF, TXT, LOG
                    </p>
                  </div>
                </div>

                {/* System Info Help */}
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-3">💡 Información Útil para Diagnóstico</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-blue-700 mb-2">Para problemas de sitio web:</p>
                      <ul className="text-blue-600 space-y-1">
                        <li>• Mensajes de error exactos</li>
                        <li>• Capturas de pantalla</li>
                        <li>• URL específica del problema</li>
                        <li>• Navegador y versión</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-700 mb-2">Para problemas de email:</p>
                      <ul className="text-blue-600 space-y-1">
                        <li>• Configuración del cliente email</li>
                        <li>• Mensajes de error del servidor</li>
                        <li>• Direcciones afectadas</li>
                        <li>• Logs de email si tienes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-6 border-t">
                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-colors"
                  >
                    🎫 Crear Ticket de Soporte
                  </button>
                  <p className="text-center text-sm text-secondary-600 mt-3">
                    Recibirás confirmación por email con tu número de ticket
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Support Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* Response Times */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">⏱️ Tiempos de Respuesta</h3>
                <div className="space-y-4">
                  
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                      <div>
                        <div className="font-semibold text-red-800 text-sm">Crítica</div>
                        <div className="text-xs text-red-600">Servicio caído</div>
                      </div>
                    </div>
                    <div className="text-red-700 font-bold text-sm">Inmediato</div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                      <div>
                        <div className="font-semibold text-orange-800 text-sm">Alta</div>
                        <div className="text-xs text-orange-600">Funcionalidad afectada</div>
                      </div>
                    </div>
                    <div className="text-orange-700 font-bold text-sm">&lt; 15min</div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                      <div>
                        <div className="font-semibold text-yellow-800 text-sm">Media</div>
                        <div className="text-xs text-yellow-600">Problema menor</div>
                      </div>
                    </div>
                    <div className="text-yellow-700 font-bold text-sm">&lt; 2h</div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <div>
                        <div className="font-semibold text-green-800 text-sm">Baja</div>
                        <div className="text-xs text-green-600">Consulta general</div>
                      </div>
                    </div>
                    <div className="text-green-700 font-bold text-sm">&lt; 4h</div>
                  </div>
                </div>
              </div>

              {/* Contact Alternatives */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">📞 Otras Formas de Contacto</h3>
                <div className="space-y-4">
                  
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">💬</span>
                      <div>
                        <div className="font-semibold text-blue-800">Chat en Vivo</div>
                        <div className="text-blue-600 text-sm">Respuesta inmediata</div>
                      </div>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                      Iniciar Chat
                    </button>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">📞</span>
                      <div>
                        <div className="font-semibold text-green-800">Teléfono</div>
                        <div className="text-green-600 text-sm">Línea gratuita 24/7</div>
                      </div>
                    </div>
                    <div className="text-center font-bold text-green-700">
                      800-ARCII-CLOUD
                    </div>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">📧</span>
                      <div>
                        <div className="font-semibold text-purple-800">Email Directo</div>
                        <div className="text-purple-600 text-sm">Para casos complejos</div>
                      </div>
                    </div>
                    <div className="text-center text-purple-700 text-sm">
                      soporte@arciicloud.com
                    </div>
                  </div>
                </div>
              </div>

              {/* Knowledge Base */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">📚 Base de Conocimientos</h3>
                <p className="text-secondary-600 text-sm mb-4">
                  Encuentra soluciones rápidas a problemas comunes
                </p>
                
                <div className="space-y-3">
                  <a href="#" className="block p-3 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
                    <div className="font-semibold text-secondary-800 text-sm">Configurar Email en Outlook</div>
                    <div className="text-secondary-600 text-xs">Guía paso a paso</div>
                  </a>
                  
                  <a href="#" className="block p-3 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
                    <div className="font-semibold text-secondary-800 text-sm">Acelerar mi WordPress</div>
                    <div className="text-secondary-600 text-xs">Tips de optimización</div>
                  </a>
                  
                  <a href="#" className="block p-3 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
                    <div className="font-semibold text-secondary-800 text-sm">Cambiar DNS del Dominio</div>
                    <div className="text-secondary-600 text-xs">Tutorial con capturas</div>
                  </a>
                </div>
                
                <button className="w-full mt-4 text-primary-600 hover:text-primary-700 font-semibold text-sm">
                  Ver Todos los Artículos →
                </button>
              </div>

              {/* Status */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">📊 Estado del Sistema</h3>
                <div className="space-y-3">
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-sm">Hosting Web</span>
                    </div>
                    <span className="text-green-600 text-sm font-semibold">Operacional</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-sm">Email Corporativo</span>
                    </div>
                    <span className="text-green-600 text-sm font-semibold">Operacional</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                      <span className="text-sm">CDN Global</span>
                    </div>
                    <span className="text-yellow-600 text-sm font-semibold">Degradado</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-sm">DNS</span>
                    </div>
                    <span className="text-green-600 text-sm font-semibold">Operacional</span>
                  </div>
                </div>
                
                <button className="w-full mt-4 text-primary-600 hover:text-primary-700 font-semibold text-sm">
                  Ver Estado Completo →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Tickets (for logged users) */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6">🎫 Mis Tickets Recientes</h3>
          <div className="text-center py-8">
            <div className="text-6xl mb-4">🔐</div>
            <h4 className="text-xl font-semibold text-secondary-700 mb-2">Inicia Sesión para Ver Tus Tickets</h4>
            <p className="text-secondary-600 mb-6">
              Accede a tu cuenta para ver el historial y estado de todos tus tickets de soporte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Iniciar Sesión
              </button>
              <button className="border border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors">
                Crear Cuenta
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}