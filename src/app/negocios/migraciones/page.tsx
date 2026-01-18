import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Migración Web Profesional | Mudanza de Hosting sin Downtime',
  description: '🔄 Migración profesional de hosting ✅ 0% downtime ✅ Migración gratuita ✅ WordPress, Laravel, Custom ✅ Respaldos seguros ✅ Desde $499',
  keywords: [
    'migracion hosting mexico',
    'mudanza sitio web mexico',
    'migracion wordpress mexico',
    'migracion servidor mexico',
    'cambio hosting mexico'
  ],
};

export default function MigrationPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Migración Profesional
          </h1>
          <p className="text-xl text-indigo-100 mb-8">
            Cambia de hosting sin riesgos. Migración completa con 0% downtime garantizado.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">0%</div>
              <div className="text-indigo-200 text-sm">Downtime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">24h</div>
              <div className="text-indigo-200 text-sm">Migración Típica</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-indigo-200 text-sm">Éxito</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">FREE</div>
              <div className="text-indigo-200 text-sm">Con Planes Anuales</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Migrate */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">¿Por qué Cambiar de Hosting?</h2>
            <p className="text-xl text-secondary-600">Los motivos más comunes para migrar tu sitio web</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🐌
              </div>
              <h3 className="text-xl font-bold mb-3">Sitio Muy Lento</h3>
              <p className="text-secondary-600">Tu hosting actual no tiene SSD, CDN ni optimización de velocidad.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                💸
              </div>
              <h3 className="text-xl font-bold mb-3">Precio Muy Alto</h3>
              <p className="text-secondary-600">Pagas mucho por poco. Obtienes mejor servicio a menor costo.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                😤
              </div>
              <h3 className="text-xl font-bold mb-3">Soporte Deficiente</h3>
              <p className="text-secondary-600">Respuestas lentas, soporte técnico limitado o problemas sin resolver.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                📉
              </div>
              <h3 className="text-xl font-bold mb-3">Caídas Frecuentes</h3>
              <p className="text-secondary-600">Tu sitio se cae constantemente afectando ventas y SEO.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🚫
              </div>
              <h3 className="text-xl font-bold mb-3">Recursos Limitados</h3>
              <p className="text-secondary-600">Límites de RAM, CPU o tráfico que frenan el crecimiento.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🔓
              </div>
              <h3 className="text-xl font-bold mb-3">Falta de Seguridad</h3>
              <p className="text-secondary-600">Sin SSL, firewall, backups automáticos o protección malware.</p>
            </div>
          </div>

          {/* Benefits After Migration */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-center mb-8 text-green-800">✅ Después de Migrar a ARCIICloud</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🚀</div>
                <div className="font-semibold text-green-800">10x Más Rápido</div>
                <div className="text-sm text-green-600">SSD NVMe + CDN global</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💰</div>
                <div className="font-semibold text-green-800">Hasta 60% Menos</div>
                <div className="text-sm text-green-600">Mejor precio-rendimiento</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🤝</div>
                <div className="font-semibold text-green-800">Soporte 24/7</div>
                <div className="text-sm text-green-600">Respuesta &lt; 2 min</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-semibold text-green-800">99.9% Uptime</div>
                <div className="text-sm text-green-600">SLA garantizado</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🔧</div>
                <div className="font-semibold text-green-800">Recursos Ilimitados</div>
                <div className="text-sm text-green-600">Sin límites artificiales</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🛡️</div>
                <div className="font-semibold text-green-800">Seguridad Máxima</div>
                <div className="text-sm text-green-600">SSL, WAF, backups diarios</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Proceso de Migración</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>
              
              {/* Step 1 */}
              <div className="flex items-center mb-12">
                <div className="flex-1 pr-8 text-right">
                  <h3 className="text-xl font-bold mb-2">1. Análisis Inicial</h3>
                  <p className="text-secondary-600">Evaluamos tu sitio actual, identificamos tecnologías, bases de datos y dependencias.</p>
                  <div className="text-sm text-primary-600 mt-2">Tiempo: 30 minutos</div>
                </div>
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                  1
                </div>
                <div className="flex-1 pl-8">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-secondary-600">✅ Auditoría técnica completa</div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center mb-12">
                <div className="flex-1 pr-8">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-secondary-600">✅ Plan de migración personalizado</div>
                  </div>
                </div>
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                  2
                </div>
                <div className="flex-1 pl-8">
                  <h3 className="text-xl font-bold mb-2">2. Planificación</h3>
                  <p className="text-secondary-600">Creamos estrategia detallada, cronograma y configuramos ambiente de staging.</p>
                  <div className="text-sm text-primary-600 mt-2">Tiempo: 1 hora</div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center mb-12">
                <div className="flex-1 pr-8 text-right">
                  <h3 className="text-xl font-bold mb-2">3. Respaldo Completo</h3>
                  <p className="text-secondary-600">Creamos backup completo de archivos, bases de datos y configuraciones.</p>
                  <div className="text-sm text-primary-600 mt-2">Tiempo: 2-4 horas</div>
                </div>
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                  3
                </div>
                <div className="flex-1 pl-8">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-secondary-600">✅ Backup seguro y encriptado</div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-center mb-12">
                <div className="flex-1 pr-8">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-secondary-600">✅ Sitio funcionando en staging</div>
                  </div>
                </div>
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                  4
                </div>
                <div className="flex-1 pl-8">
                  <h3 className="text-xl font-bold mb-2">4. Migración y Pruebas</h3>
                  <p className="text-secondary-600">Transferimos todo a nuestros servidores, configuramos y realizamos pruebas exhaustivas.</p>
                  <div className="text-sm text-primary-600 mt-2">Tiempo: 4-8 horas</div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-center mb-12">
                <div className="flex-1 pr-8 text-right">
                  <h3 className="text-xl font-bold mb-2">5. Cambio de DNS</h3>
                  <p className="text-secondary-600">Actualizamos DNS para apuntar a nuestros servidores. Transición imperceptible.</p>
                  <div className="text-sm text-primary-600 mt-2">Tiempo: 15 minutos</div>
                </div>
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                  5
                </div>
                <div className="flex-1 pl-8">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-secondary-600">✅ Transición sin downtime</div>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="flex items-center">
                <div className="flex-1 pr-8">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-secondary-600">✅ Monitoreo y optimización</div>
                  </div>
                </div>
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                  ✓
                </div>
                <div className="flex-1 pl-8">
                  <h3 className="text-xl font-bold mb-2">6. Verificación Final</h3>
                  <p className="text-secondary-600">Validamos funcionamiento, optimizamos rendimiento y monitoreamos por 48h.</p>
                  <div className="text-sm text-green-600 mt-2">¡Migración Completada!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Plataformas Soportadas</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            
            <div className="text-center p-6 border rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                📝
              </div>
              <h3 className="font-semibold text-lg mb-2">WordPress</h3>
              <p className="text-secondary-600 text-sm">Sitios, tiendas WooCommerce, multisitio</p>
            </div>

            <div className="text-center p-6 border rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🏗️
              </div>
              <h3 className="font-semibold text-lg mb-2">Laravel</h3>
              <p className="text-secondary-600 text-sm">Aplicaciones PHP con composer</p>
            </div>

            <div className="text-center p-6 border rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                ⚛️
              </div>
              <h3 className="font-semibold text-lg mb-2">Node.js</h3>
              <p className="text-secondary-600 text-sm">React, Vue, Angular, Express</p>
            </div>

            <div className="text-center p-6 border rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🐍
              </div>
              <h3 className="font-semibold text-lg mb-2">Python</h3>
              <p className="text-secondary-600 text-sm">Django, Flask, FastAPI</p>
            </div>

            <div className="text-center p-6 border rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🛒
              </div>
              <h3 className="font-semibold text-lg mb-2">Magento</h3>
              <p className="text-secondary-600 text-sm">E-commerce complejo y personalizado</p>
            </div>

            <div className="text-center p-6 border rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                📚
              </div>
              <h3 className="font-semibold text-lg mb-2">Drupal</h3>
              <p className="text-secondary-600 text-sm">CMS empresarial y portales</p>
            </div>

            <div className="text-center p-6 border rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                ⚙️
              </div>
              <h3 className="font-semibold text-lg mb-2">Joomla</h3>
              <p className="text-secondary-600 text-sm">Sitios corporativos y comunitarios</p>
            </div>

            <div className="text-center p-6 border rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🌐
              </div>
              <h3 className="font-semibold text-lg mb-2">HTML/CSS/JS</h3>
              <p className="text-secondary-600 text-sm">Sitios estáticos y aplicaciones SPA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Precio de Migración</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Simple */}
            <div className="border-2 border-secondary-200 rounded-2xl p-8 hover:shadow-lg transition-shadow bg-white">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Sitio Simple</h3>
              <div className="text-4xl font-bold text-primary-600 mb-6">$499<span className="text-lg text-secondary-500">/una vez</span></div>
              <div className="text-sm text-secondary-600 mb-6">WordPress básico, HTML estático</div>
              <ul className="space-y-3 mb-8">
                <li>✅ Hasta 5GB de archivos</li>
                <li>✅ 1 base de datos</li>
                <li>✅ Hasta 10 cuentas email</li>
                <li>✅ Migración en 24h</li>
                <li>✅ Soporte post-migración 7 días</li>
                <li>✅ SSL gratuito configurado</li>
                <li>✅ Backup del sitio original</li>
              </ul>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Solicitar Migración
              </button>
            </div>

            {/* Professional */}
            <div className="border-2 border-primary-500 rounded-2xl p-8 hover:shadow-lg transition-shadow relative bg-white">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm">
                Más Popular
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Sitio Profesional</h3>
              <div className="text-4xl font-bold text-primary-600 mb-6">$999<span className="text-lg text-secondary-500">/una vez</span></div>
              <div className="text-sm text-secondary-600 mb-6">WooCommerce, Laravel, apps complejas</div>
              <ul className="space-y-3 mb-8">
                <li>✅ Hasta 20GB de archivos</li>
                <li>✅ Múltiples bases de datos</li>
                <li>✅ Cuentas email ilimitadas</li>
                <li>✅ Migración en 48h</li>
                <li>✅ Soporte post-migración 30 días</li>
                <li>✅ Optimización de performance</li>
                <li>✅ Configuración CDN</li>
                <li>✅ Testing completo</li>
              </ul>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Solicitar Migración
              </button>
            </div>

            {/* Enterprise */}
            <div className="border-2 border-secondary-200 rounded-2xl p-8 hover:shadow-lg transition-shadow bg-white">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-primary-600 mb-6">$2,499<span className="text-lg text-secondary-500">/una vez</span></div>
              <div className="text-sm text-secondary-600 mb-6">Aplicaciones críticas, multisitio</div>
              <ul className="space-y-3 mb-8">
                <li>✅ Sin límite de archivos</li>
                <li>✅ Múltiples aplicaciones</li>
                <li>✅ Configuración personalizada</li>
                <li>✅ Migración planificada</li>
                <li>✅ Soporte dedicado 90 días</li>
                <li>✅ Load balancing setup</li>
                <li>✅ Security hardening</li>
                <li>✅ Disaster recovery plan</li>
                <li>✅ Monitoreo avanzado</li>
              </ul>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Solicitar Migración
              </button>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="bg-green-100 border border-green-300 rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="font-bold text-green-800 mb-2">🎉 ¡Migración GRATUITA!</h3>
              <p className="text-green-700">
                Al contratar cualquier plan de hosting anual, la migración es completamente gratuita.
                Ahorra hasta $2,499 en migración profesional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Guarantee */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Garantía de Migración</h2>
          <p className="text-xl text-secondary-600 mb-12">
            Estamos tan seguros de nuestro proceso que ofrecemos garantías únicas
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-4">0% Downtime Garantizado</h3>
              <p className="text-secondary-600 mb-4">
                Si tu sitio tiene downtime durante la migración, te devolvemos el dinero completo.
              </p>
              <div className="text-sm text-indigo-600 font-semibold">
                100% de reembolso si no cumplimos
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <div className="text-4xl mb-4">↩️</div>
              <h3 className="text-xl font-bold mb-4">Rollback Gratuito</h3>
              <p className="text-secondary-600 mb-4">
                Si no estás satisfecho, revertimos todo a tu hosting original sin costo.
              </p>
              <div className="text-sm text-green-600 font-semibold">
                Disponible hasta 7 días post-migración
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-3">¿Cuánto tiempo toma la migración?</h3>
              <p className="text-secondary-600">
                Sitios simples: 24 horas. Sitios complejos: 48-72 horas. Aplicaciones enterprise: 3-7 días según complejidad.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-3">¿Mi sitio estará caído durante la migración?</h3>
              <p className="text-secondary-600">
                No. Trabajamos en paralelo y solo cambiamos los DNS al final. El cambio es imperceptible para usuarios.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-3">¿Qué necesito proporcionar?</h3>
              <p className="text-secondary-600">
                Acceso al hosting actual (cPanel/FTP), credenciales de base de datos y acceso al DNS del dominio.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-3">¿Migran emails también?</h3>
              <p className="text-secondary-600">
                Sí, migramos todas las cuentas de correo, emails existentes, forwarders y configuraciones de spam.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-3">¿Hay riesgo de perder información?</h3>
              <p className="text-secondary-600">
                Cero riesgo. Hacemos backup completo antes de comenzar y mantenemos tu hosting original activo hasta confirmar éxito.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Listo para migrar tu sitio web?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Obtén hosting más rápido, seguro y económico. Migración profesional garantizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
              Solicitar Migración Gratuita
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Hablar con Especialista
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}