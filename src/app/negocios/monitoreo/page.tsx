import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Monitoreo Web 24/7 | Uptime & Performance Monitoring México',
  description: '📊 Monitoreo 24/7 para tu web ✅ 99.9% uptime ✅ Alertas instantáneas ✅ Performance analytics ✅ Monitoreo desde 15 ubicaciones ✅ Desde $199/mes',
  keywords: [
    'monitoreo web mexico',
    'uptime monitoring mexico',
    'performance monitoring mexico',
    'website monitoring mexico',
    'servidor monitoring mexico'
  ],
};

export default function MonitoringPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Monitoreo 24/7
          </h1>
          <p className="text-xl text-emerald-100 mb-8">
            Mantén tu sitio web siempre online con nuestro monitoreo profesional.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">30s</div>
              <div className="text-emerald-200 text-sm">Intervalo Mínimo</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">15</div>
              <div className="text-emerald-200 text-sm">Ubicaciones</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-emerald-200 text-sm">Uptime SLA</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">&lt; 2s</div>
              <div className="text-emerald-200 text-sm">Alertas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Monitor */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">¿Por qué Necesitas Monitoreo?</h2>
            <p className="text-xl text-secondary-600">Los sitios web caídos cuestan dinero y reputación</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-red-600">❌ Sin Monitoreo</h3>
              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                  <h4 className="font-bold text-red-800 mb-3">Problemas Ocultos</h4>
                  <ul className="space-y-2 text-red-700">
                    <li>• No sabes cuándo tu sitio está caído</li>
                    <li>• Los clientes encuentran errores antes que tú</li>
                    <li>• Pierdes ventas por horas sin darte cuenta</li>
                    <li>• No tienes datos de rendimiento</li>
                    <li>• Reaccionas demasiado tarde</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-green-600">✅ Con Monitoreo ARCIICloud</h3>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <h4 className="font-bold text-green-800 mb-3">Control Total</h4>
                  <ul className="space-y-2 text-green-700">
                    <li>• Alertas instantáneas por email/SMS/Slack</li>
                    <li>• Detectas problemas en segundos</li>
                    <li>• Mantienes 99.9% uptime garantizado</li>
                    <li>• Analytics completos de performance</li>
                    <li>• Actúas proactivamente</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="bg-secondary-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-center mb-8">Impacto Real del Downtime</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">-40%</div>
                <div className="text-sm font-semibold">Conversiones</div>
                <div className="text-xs text-secondary-600">por cada segundo extra de carga</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">$5,600</div>
                <div className="text-sm font-semibold">Pérdida/Minuto</div>
                <div className="text-xs text-secondary-600">promedio ecommerce mexicano</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">-75%</div>
                <div className="text-sm font-semibold">SEO Ranking</div>
                <div className="text-xs text-secondary-600">si uptime &lt; 99%</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">30%</div>
                <div className="text-sm font-semibold">No Regresan</div>
                <div className="text-xs text-secondary-600">usuarios tras error 500</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring Types */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Tipos de Monitoreo</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                🌐
              </div>
              <h3 className="font-semibold text-lg mb-3">Uptime HTTP/HTTPS</h3>
              <p className="text-secondary-600 mb-4">Verifica que tu sitio responda correctamente cada 30 segundos desde 15 ubicaciones.</p>
              <ul className="text-sm text-secondary-600 space-y-1">
                <li>• Códigos de respuesta HTTP</li>
                <li>• Tiempo de respuesta</li>
                <li>• Contenido específico</li>
                <li>• Certificados SSL</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                🔗
              </div>
              <h3 className="font-semibold text-lg mb-3">TCP/UDP Ports</h3>
              <p className="text-secondary-600 mb-4">Monitorea servicios específicos como bases de datos, email, FTP y aplicaciones custom.</p>
              <ul className="text-sm text-secondary-600 space-y-1">
                <li>• MySQL (3306)</li>
                <li>• SMTP (25, 587)</li>
                <li>• FTP (21)</li>
                <li>• Puertos personalizados</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                🖥️
              </div>
              <h3 className="font-semibold text-lg mb-3">Server Resources</h3>
              <p className="text-secondary-600 mb-4">Monitorea CPU, memoria, disco y red de tus servidores en tiempo real.</p>
              <ul className="text-sm text-secondary-600 space-y-1">
                <li>• CPU usage &amp; load avg</li>
                <li>• RAM &amp; swap usage</li>
                <li>• Disk space &amp; I/O</li>
                <li>• Network traffic</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                📊
              </div>
              <h3 className="font-semibold text-lg mb-3">Performance</h3>
              <p className="text-secondary-600 mb-4">Análisis detallado de velocidad, Core Web Vitals y experiencia del usuario.</p>
              <ul className="text-sm text-secondary-600 space-y-1">
                <li>• First Contentful Paint</li>
                <li>• Largest Contentful Paint</li>
                <li>• Cumulative Layout Shift</li>
                <li>• Time to Interactive</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                🛡️
              </div>
              <h3 className="font-semibold text-lg mb-3">Security Monitoring</h3>
              <p className="text-secondary-600 mb-4">Detecta malware, blacklist, certificados vencidos y vulnerabilidades.</p>
              <ul className="text-sm text-secondary-600 space-y-1">
                <li>• Malware scanning</li>
                <li>• Blacklist monitoring</li>
                <li>• SSL certificate expiry</li>
                <li>• DNS hijacking</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                🤖
              </div>
              <h3 className="font-semibold text-lg mb-3">API Monitoring</h3>
              <p className="text-secondary-600 mb-4">Verifica endpoints REST/GraphQL, tiempos de respuesta y validación de datos.</p>
              <ul className="text-sm text-secondary-600 space-y-1">
                <li>• REST API endpoints</li>
                <li>• GraphQL queries</li>
                <li>• JSON response validation</li>
                <li>• Authentication testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global Monitoring Network */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Red de Monitoreo Global</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 text-center mb-12">
            <div className="p-4">
              <div className="text-2xl mb-2">🇺🇸</div>
              <div className="font-semibold text-sm">USA</div>
              <div className="text-xs text-secondary-600">4 ubicaciones</div>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">🇪🇺</div>
              <div className="font-semibold text-sm">Europa</div>
              <div className="text-xs text-secondary-600">5 ubicaciones</div>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">🇦🇺</div>
              <div className="font-semibold text-sm">Asia-Pacific</div>
              <div className="text-xs text-secondary-600">3 ubicaciones</div>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">🇲🇽</div>
              <div className="font-semibold text-sm">México</div>
              <div className="text-xs text-secondary-600">2 ubicaciones</div>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">🌎</div>
              <div className="font-semibold text-sm">Sudamérica</div>
              <div className="text-xs text-secondary-600">1 ubicación</div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-secondary-600">
              Monitoreo desde múltiples ubicaciones para detectar problemas regionales y falsos positivos.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Planes de Monitoreo</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Basic */}
            <div className="border-2 border-secondary-200 rounded-2xl p-8 hover:shadow-lg transition-shadow bg-white">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Basic</h3>
              <div className="text-4xl font-bold text-primary-600 mb-6">$199<span className="text-lg text-secondary-500">/mes</span></div>
              <div className="text-sm text-secondary-600 mb-6">Hasta 10 monitores</div>
              <ul className="space-y-3 mb-8">
                <li>✅ Uptime HTTP/HTTPS</li>
                <li>✅ Intervalo 5 minutos</li>
                <li>✅ 5 ubicaciones de monitoreo</li>
                <li>✅ Alertas por email</li>
                <li>✅ Dashboard básico</li>
                <li>✅ 30 días histórico</li>
                <li>✅ Status page público</li>
              </ul>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Comenzar
              </button>
            </div>

            {/* Professional */}
            <div className="border-2 border-primary-500 rounded-2xl p-8 hover:shadow-lg transition-shadow relative bg-white">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm">
                Más Popular
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Professional</h3>
              <div className="text-4xl font-bold text-primary-600 mb-6">$599<span className="text-lg text-secondary-500">/mes</span></div>
              <div className="text-sm text-secondary-600 mb-6">Hasta 50 monitores</div>
              <ul className="space-y-3 mb-8">
                <li>✅ Todo de Basic +</li>
                <li>✅ Intervalo 30 segundos</li>
                <li>✅ 15 ubicaciones globales</li>
                <li>✅ TCP/UDP port monitoring</li>
                <li>✅ Alertas SMS &amp; Slack</li>
                <li>✅ Performance monitoring</li>
                <li>✅ API monitoring</li>
                <li>✅ 1 año histórico</li>
                <li>✅ Custom status pages</li>
              </ul>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Comenzar
              </button>
            </div>

            {/* Enterprise */}
            <div className="border-2 border-secondary-200 rounded-2xl p-8 hover:shadow-lg transition-shadow bg-white">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-primary-600 mb-6">$1,499<span className="text-lg text-secondary-500">/mes</span></div>
              <div className="text-sm text-secondary-600 mb-6">Monitores ilimitados</div>
              <ul className="space-y-3 mb-8">
                <li>✅ Todo de Professional +</li>
                <li>✅ Server resource monitoring</li>
                <li>✅ Security monitoring</li>
                <li>✅ Custom monitoring scripts</li>
                <li>✅ Multi-step transactions</li>
                <li>✅ Advanced analytics</li>
                <li>✅ White-label reports</li>
                <li>✅ Priority support 24/7</li>
                <li>✅ SLA 99.9% uptime</li>
              </ul>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Comenzar
              </button>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-secondary-600 mb-4">¿Necesitas monitoreo personalizado?</p>
            <button className="text-primary-600 hover:text-primary-700 font-semibold">
              Habla con nuestro equipo →
            </button>
          </div>
        </div>
      </section>

      {/* Alert Channels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Canales de Alertas</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                📧
              </div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-sm text-secondary-600 mt-1">Alertas detalladas por email</p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                📱
              </div>
              <h3 className="font-semibold">SMS</h3>
              <p className="text-sm text-secondary-600 mt-1">Mensajes de texto urgentes</p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                💬
              </div>
              <h3 className="font-semibold">Slack</h3>
              <p className="text-sm text-secondary-600 mt-1">Integración con tu workspace</p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                🔔
              </div>
              <h3 className="font-semibold">Discord</h3>
              <p className="text-sm text-secondary-600 mt-1">Notificaciones en servidor</p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                🚨
              </div>
              <h3 className="font-semibold">PagerDuty</h3>
              <p className="text-sm text-secondary-600 mt-1">Escalación automática</p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                🔗
              </div>
              <h3 className="font-semibold">Webhook</h3>
              <p className="text-sm text-secondary-600 mt-1">Integración personalizada</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Dashboard Intuitivo</h2>
          <p className="text-xl text-secondary-600 mb-12">
            Visualiza el estado de todos tus servicios de un vistazo
          </p>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-2">99.98%</div>
                <div className="text-sm font-semibold text-green-800">Uptime Promedio</div>
                <div className="text-xs text-green-600">Últimos 30 días</div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">1.2s</div>
                <div className="text-sm font-semibold text-blue-800">Tiempo Respuesta</div>
                <div className="text-xs text-blue-600">Promedio global</div>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
                <div className="text-sm font-semibold text-orange-800">Incidentes</div>
                <div className="text-xs text-orange-600">Este mes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Listo para monitorear tu sitio 24/7?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Evita pérdidas por downtime. Comienza a monitorear en 5 minutos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
              Comenzar Monitoreo Gratuito
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Ver Demo del Dashboard
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}