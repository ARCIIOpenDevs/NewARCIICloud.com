import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soporte Técnico 24/7 | Hosting Support México Premium',
  description: '🆘 Soporte técnico experto 24/7 ✅ Respuesta &lt; 2 min ✅ Técnicos certificados ✅ Chat, teléfono, tickets ✅ Resolución garantizada ✅ Soporte premium incluido',
  keywords: [
    'soporte tecnico hosting mexico',
    'soporte 24/7 mexico',
    'ayuda tecnica hosting mexico',
    'soporte hosting profesional',
    'asistencia tecnica web mexico'
  ],
};

export default function SupportPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-500 to-red-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Soporte 24/7
          </h1>
          <p className="text-xl text-orange-100 mb-8">
            Soporte técnico experto disponible cuando lo necesites. Nunca te dejamos solo.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">&lt; 2min</div>
              <div className="text-orange-200 text-sm">Respuesta Chat</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">24/7/365</div>
              <div className="text-orange-200 text-sm">Disponibilidad</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">99%</div>
              <div className="text-orange-200 text-sm">Resolución 1er Contacto</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">5★</div>
              <div className="text-orange-200 text-sm">Satisfacción Cliente</div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Canales de Soporte</h2>
            <p className="text-xl text-secondary-600">Múltiples formas de contactarnos, siempre disponibles</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                💬
              </div>
              <h3 className="text-xl font-bold mb-3">Chat en Vivo</h3>
              <p className="text-secondary-600 text-sm mb-4">Respuesta instantánea. Ideal para consultas rápidas y troubleshooting.</p>
              <div className="text-sm">
                <div className="font-semibold text-blue-600">⏱️ &lt; 2 minutos</div>
                <div className="text-secondary-500">Disponible 24/7</div>
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                📞
              </div>
              <h3 className="text-xl font-bold mb-3">Llamada Telefónica</h3>
              <p className="text-secondary-600 text-sm mb-4">Soporte directo por teléfono. Para problemas complejos y urgentes.</p>
              <div className="text-sm">
                <div className="font-semibold text-green-600">⏱️ &lt; 5 minutos</div>
                <div className="text-secondary-500">Línea gratuita 800</div>
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🎫
              </div>
              <h3 className="text-xl font-bold mb-3">Sistema Tickets</h3>
              <p className="text-secondary-600 text-sm mb-4">Para consultas detalladas que requieren investigación profunda.</p>
              <div className="text-sm">
                <div className="font-semibold text-purple-600">⏱️ &lt; 15 minutos</div>
                <div className="text-secondary-500">Con seguimiento</div>
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                📧
              </div>
              <h3 className="text-xl font-bold mb-3">Email Directo</h3>
              <p className="text-secondary-600 text-sm mb-4">Para reportes detallados, solicitudes especiales y documentación.</p>
              <div className="text-sm">
                <div className="font-semibold text-orange-600">⏱️ &lt; 30 minutos</div>
                <div className="text-secondary-500">Con archivos adjuntos</div>
              </div>
            </div>
          </div>

          {/* Quick Access */}
          <div className="bg-secondary-50 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-6">Acceso Rápido al Soporte</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                💬 Iniciar Chat
              </button>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                📞 Llamar Ahora
              </button>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                🎫 Crear Ticket
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Equipo de Expertos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🧑‍💻
              </div>
              <h3 className="text-xl font-bold mb-3">Técnicos Certificados</h3>
              <p className="text-secondary-600 mb-4">Más de 5 años de experiencia promedio. Certificados en principales tecnologías web.</p>
              <div className="text-sm space-y-1">
                <div className="bg-secondary-100 rounded px-2 py-1 inline-block m-1">Linux</div>
                <div className="bg-secondary-100 rounded px-2 py-1 inline-block m-1">WordPress</div>
                <div className="bg-secondary-100 rounded px-2 py-1 inline-block m-1">PHP</div>
                <div className="bg-secondary-100 rounded px-2 py-1 inline-block m-1">MySQL</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🛡️
              </div>
              <h3 className="text-xl font-bold mb-3">Especialistas Seguridad</h3>
              <p className="text-secondary-600 mb-4">Expertos en hardening, malware removal y protección avanzada de servidores.</p>
              <div className="text-sm space-y-1">
                <div className="bg-secondary-100 rounded px-2 py-1 inline-block m-1">Security</div>
                <div className="bg-secondary-100 rounded px-2 py-1 inline-block m-1">Firewall</div>
                <div className="bg-secondary-100 rounded px-2 py-1 inline-block m-1">SSL</div>
                <div className="bg-secondary-100 rounded px-2 py-1 inline-block m-1">Malware</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-3">Expertos Performance</h3>
              <p className="text-secondary-600 mb-4">Optimización de velocidad, cacheo avanzado y tunning de servidores.</p>
              <div className="text-sm space-y-1">
                <div className="bg-secondary-100 rounded px-2 py-1 inline-block m-1">CDN</div>
                <div className="bg-secondary-100 rounded px-2 py-1 inline-block m-1">Cache</div>
                <div className="bg-secondary-100 rounded px-2 py-1 inline-block m-1">Nginx</div>
                <div className="bg-secondary-100 rounded px-2 py-1 inline-block m-1">Redis</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Tiempos de Respuesta Garantizados</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Por Tipo de Consulta</h3>
              <div className="space-y-4">
                
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl border border-red-200">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                    <div>
                      <div className="font-semibold text-red-800">🚨 Crítico/Emergencia</div>
                      <div className="text-sm text-red-600">Sitio caído, problemas de seguridad</div>
                    </div>
                  </div>
                  <div className="text-red-700 font-bold">Inmediato</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl border border-orange-200">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-orange-500 rounded-full mr-3"></div>
                    <div>
                      <div className="font-semibold text-orange-800">⚡ Alto</div>
                      <div className="text-sm text-orange-600">Performance, errores funcionales</div>
                    </div>
                  </div>
                  <div className="text-orange-700 font-bold">&lt; 15 min</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></div>
                    <div>
                      <div className="font-semibold text-yellow-800">⚠️ Medio</div>
                      <div className="text-sm text-yellow-600">Configuraciones, dudas técnicas</div>
                    </div>
                  </div>
                  <div className="text-yellow-700 font-bold">&lt; 1 hora</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                    <div>
                      <div className="font-semibold text-green-800">ℹ️ Información</div>
                      <div className="text-sm text-green-600">Consultas generales, tutoriales</div>
                    </div>
                  </div>
                  <div className="text-green-700 font-bold">&lt; 4 horas</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">SLA por Plan</h3>
              <div className="space-y-4">
                
                <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                  <h4 className="font-bold text-blue-800 text-lg mb-2">Plan Básico</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Chat/Tickets:</span>
                      <span className="font-semibold">&lt; 4 horas</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Email:</span>
                      <span className="font-semibold">&lt; 8 horas</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Horario:</span>
                      <span className="font-semibold">24/7</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <h4 className="font-bold text-green-800 text-lg mb-2">Plan Professional</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Chat/Tickets:</span>
                      <span className="font-semibold">&lt; 1 hora</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Teléfono:</span>
                      <span className="font-semibold">&lt; 5 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Horario:</span>
                      <span className="font-semibold">24/7</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                  <h4 className="font-bold text-purple-800 text-lg mb-2">Plan Enterprise</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Chat/Tickets:</span>
                      <span className="font-semibold">&lt; 15 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Teléfono prioritario:</span>
                      <span className="font-semibold">&lt; 2 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Account Manager:</span>
                      <span className="font-semibold">Dedicado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Support */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">¿En qué te Ayudamos?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                🌐
              </div>
              <h3 className="font-semibold text-lg mb-3">Problemas de Hosting</h3>
              <ul className="text-sm text-secondary-600 space-y-2">
                <li>• Sitio web no carga</li>
                <li>• Errores 500, 404, 403</li>
                <li>• Problemas de DNS</li>
                <li>• Configuración dominios</li>
                <li>• Subdominios y redirects</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                📧
              </div>
              <h3 className="font-semibold text-lg mb-3">Email Corporativo</h3>
              <ul className="text-sm text-secondary-600 space-y-2">
                <li>• Configurar cuentas email</li>
                <li>• Problemas envío/recepción</li>
                <li>• SMTP, IMAP, POP3</li>
                <li>• Filtros anti-spam</li>
                <li>• Webmail y clientes email</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                🔒
              </div>
              <h3 className="font-semibold text-lg mb-3">Seguridad Web</h3>
              <ul className="text-sm text-secondary-600 space-y-2">
                <li>• Instalación SSL</li>
                <li>• Limpieza malware</li>
                <li>• Configurar firewall</li>
                <li>• Hardening servidor</li>
                <li>• Monitoreo seguridad</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                📝
              </div>
              <h3 className="font-semibold text-lg mb-3">WordPress</h3>
              <ul className="text-sm text-secondary-600 space-y-2">
                <li>• Instalación y configuración</li>
                <li>• Actualizar WP/plugins/themes</li>
                <li>• Problemas white screen</li>
                <li>• Optimización velocidad</li>
                <li>• Backup y restauración</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                🗄️
              </div>
              <h3 className="font-semibold text-lg mb-3">Bases de Datos</h3>
              <ul className="text-sm text-secondary-600 space-y-2">
                <li>• MySQL/PostgreSQL</li>
                <li>• Optimización queries</li>
                <li>• Backup/restore BD</li>
                <li>• Errores conexión</li>
                <li>• Configurar usuarios</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                ⚡
              </div>
              <h3 className="font-semibold text-lg mb-3">Optimización</h3>
              <ul className="text-sm text-secondary-600 space-y-2">
                <li>• Acelerar sitio web</li>
                <li>• Configurar CDN</li>
                <li>• Cache avanzado</li>
                <li>• Compresión imágenes</li>
                <li>• Core Web Vitals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Service Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Recursos de Autoayuda</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                📚
              </div>
              <h3 className="font-semibold text-lg mb-3">Centro de Ayuda</h3>
              <p className="text-secondary-600 text-sm mb-4">500+ artículos con soluciones paso a paso</p>
              <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm">
                Ver Artículos →
              </button>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🎥
              </div>
              <h3 className="font-semibold text-lg mb-3">Tutoriales Video</h3>
              <p className="text-secondary-600 text-sm mb-4">Guías visuales para tareas comunes</p>
              <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm">
                Ver Videos →
              </button>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🗣️
              </div>
              <h3 className="font-semibold text-lg mb-3">Comunidad</h3>
              <p className="text-secondary-600 text-sm mb-4">Foro con otros usuarios y expertos</p>
              <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm">
                Unirse →
              </button>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                📋
              </div>
              <h3 className="font-semibold text-lg mb-3">Status Page</h3>
              <p className="text-secondary-600 text-sm mb-4">Estado de servicios y mantenimientos</p>
              <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm">
                Ver Estado →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Lo que Dicen Nuestros Clientes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
                <div className="ml-2 text-sm text-secondary-600">5.0/5</div>
              </div>
              <p className="text-secondary-600 mb-4">
                "El soporte es increíble. Tuve un problema crítico a las 2 AM y me respondieron en menos de 2 minutos por chat. Lo resolvieron en 15 minutos."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  👨‍💼
                </div>
                <div>
                  <div className="font-semibold">Carlos Mendoza</div>
                  <div className="text-sm text-secondary-600">CEO, TiendaOnline.mx</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
                <div className="ml-2 text-sm text-secondary-600">5.0/5</div>
              </div>
              <p className="text-secondary-600 mb-4">
                "Migré 5 sitios y el soporte fue excepcional. Me guiaron paso a paso, respondieron todas mis dudas y todo funcionó perfecto."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  👩‍💻
                </div>
                <div>
                  <div className="font-semibold">Ana García</div>
                  <div className="text-sm text-secondary-600">Desarrolladora Web</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Necesitas ayuda ahora?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Nuestro equipo de expertos está listo para ayudarte. Soporte disponible 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              💬 Iniciar Chat en Vivo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              📞 Llamar Soporte
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}