import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CDN México | Content Delivery Network Global desde $299/mes',
  description: '🌐 CDN México para acelerar tu sitio web ✅ 200+ PoPs globales ✅ 95% reducción latencia ✅ DDoS protection ✅ Cache inteligente ✅ Desde $299/mes',
  keywords: [
    'cdn mexico',
    'content delivery network mexico',
    'acelerar sitio web mexico',
    'cdn cloudflare mexico',
    'cdn global mexico'
  ],
};

export default function CDNPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cyan-600 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            CDN Global
          </h1>
          <p className="text-xl text-cyan-100 mb-8">
            Acelera tu sitio web con nuestra red de distribución de contenido global.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">200+</div>
              <div className="text-cyan-200 text-sm">PoPs Globales</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-cyan-200 text-sm">Reducción Latencia</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-cyan-200 text-sm">Uptime SLA</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-cyan-200 text-sm">Protección DDoS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Boost */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Acelera tu Sitio Web Instantáneamente</h2>
            <p className="text-xl text-secondary-600">Mejora la velocidad de carga hasta 10x con nuestra CDN global</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Antes vs Después del CDN</h3>
              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                  <h4 className="font-bold text-red-800 mb-3">❌ Sin CDN</h4>
                  <ul className="space-y-2 text-red-700">
                    <li>• Tiempo de carga: 3-8 segundos</li>
                    <li>• Una sola ubicación del servidor</li>
                    <li>• Sin protección contra ataques</li>
                    <li>• Ancho de banda limitado</li>
                    <li>• Mayor costo de transferencia</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <h4 className="font-bold text-green-800 mb-3">✅ Con CDN ARCIICloud</h4>
                  <ul className="space-y-2 text-green-700">
                    <li>• Tiempo de carga: 200-500ms</li>
                    <li>• 200+ ubicaciones globales</li>
                    <li>• Protección DDoS incluida</li>
                    <li>• Ancho de banda ilimitado</li>
                    <li>• 60% reducción en costos</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-cyan-100 to-blue-100 p-8 rounded-2xl">
                <div className="text-6xl mb-4">🚀</div>
                <div className="text-4xl font-bold text-blue-600 mb-2">10x</div>
                <div className="text-blue-800 font-semibold">Más Rápido</div>
                <div className="text-secondary-600 text-sm mt-2">Velocidad promedio de mejora</div>
              </div>
            </div>
          </div>

          {/* Global Coverage Map */}
          <div className="bg-secondary-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-center mb-8">Cobertura Global</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">🌎</div>
                <div className="font-bold">América</div>
                <div className="text-sm text-secondary-600">85+ PoPs</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🌍</div>
                <div className="font-bold">Europa</div>
                <div className="text-sm text-secondary-600">65+ PoPs</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🌏</div>
                <div className="font-bold">Asia</div>
                <div className="text-sm text-secondary-600">45+ PoPs</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🇲🇽</div>
                <div className="font-bold">México</div>
                <div className="text-sm text-secondary-600">8+ PoPs</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🌍</div>
                <div className="font-bold">África</div>
                <div className="text-sm text-secondary-600">12+ PoPs</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🦘</div>
                <div className="font-bold">Oceanía</div>
                <div className="text-sm text-secondary-600">8+ PoPs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Planes CDN</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Starter */}
            <div className="border-2 border-secondary-200 rounded-2xl p-8 hover:shadow-lg transition-shadow bg-white">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">CDN Starter</h3>
              <div className="text-4xl font-bold text-primary-600 mb-6">$299<span className="text-lg text-secondary-500">/mes</span></div>
              <div className="text-sm text-secondary-600 mb-6">Hasta 1TB transferencia</div>
              <ul className="space-y-3 mb-8">
                <li>✅ 200+ PoPs globales</li>
                <li>✅ Cache inteligente</li>
                <li>✅ Compresión automática</li>
                <li>✅ SSL/TLS gratuito</li>
                <li>✅ Protección DDoS básica</li>
                <li>✅ Analytics básicos</li>
                <li>✅ Soporte email</li>
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
              <h3 className="text-xl font-bold text-secondary-900 mb-4">CDN Professional</h3>
              <div className="text-4xl font-bold text-primary-600 mb-6">$899<span className="text-lg text-secondary-500">/mes</span></div>
              <div className="text-sm text-secondary-600 mb-6">Hasta 10TB transferencia</div>
              <ul className="space-y-3 mb-8">
                <li>✅ Todo de Starter +</li>
                <li>✅ WAF (Web Application Firewall)</li>
                <li>✅ Image Optimization</li>
                <li>✅ Real-time purge</li>
                <li>✅ Custom rules</li>
                <li>✅ Advanced analytics</li>
                <li>✅ API completa</li>
                <li>✅ Soporte prioritario</li>
              </ul>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Comenzar
              </button>
            </div>

            {/* Enterprise */}
            <div className="border-2 border-secondary-200 rounded-2xl p-8 hover:shadow-lg transition-shadow bg-white">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">CDN Enterprise</h3>
              <div className="text-4xl font-bold text-primary-600 mb-6">$2,499<span className="text-lg text-secondary-500">/mes</span></div>
              <div className="text-sm text-secondary-600 mb-6">Transferencia ilimitada</div>
              <ul className="space-y-3 mb-8">
                <li>✅ Todo de Professional +</li>
                <li>✅ Private PoPs dedicados</li>
                <li>✅ Advanced bot management</li>
                <li>✅ Load balancing global</li>
                <li>✅ Rate limiting avanzado</li>
                <li>✅ Custom SSL certificates</li>
                <li>✅ White-label reports</li>
                <li>✅ Soporte 24/7 telefónico</li>
                <li>✅ Dedicated account manager</li>
              </ul>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Comenzar
              </button>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-secondary-600 mb-4">¿Necesitas más transferencia?</p>
            <button className="text-primary-600 hover:text-primary-700 font-semibold">
              Precio personalizado para grandes volúmenes →
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Características Avanzadas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                ⚡
              </div>
              <h3 className="font-semibold text-lg mb-3">Cache Inteligente</h3>
              <p className="text-secondary-600">Algoritmos ML que aprenden patrones de tráfico para optimizar automáticamente el cacheo.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                🛡️
              </div>
              <h3 className="font-semibold text-lg mb-3">Protección DDoS</h3>
              <p className="text-secondary-600">Mitigación automática de ataques DDoS de hasta 100+ Gbps sin afectar usuarios legítimos.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                🖼️
              </div>
              <h3 className="font-semibold text-lg mb-3">Optimización de Imágenes</h3>
              <p className="text-secondary-600">Compresión automática WebP, AVIF y redimensionado dinámico según dispositivo.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                🌐
              </div>
              <h3 className="font-semibold text-lg mb-3">HTTP/3 & QUIC</h3>
              <p className="text-secondary-600">Protocolo más rápido con menor latencia y mejor rendimiento en conexiones móviles.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                🔥
              </div>
              <h3 className="font-semibold text-lg mb-3">Purge Instantáneo</h3>
              <p className="text-secondary-600">Limpia cache específico en segundos globalmente. Purge por URL, tag o wildcard.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                📊
              </div>
              <h3 className="font-semibold text-lg mb-3">Analytics Avanzado</h3>
              <p className="text-secondary-600">Métricas detalladas de rendimiento, tráfico, cache hit ratio y geografía usuarios.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Casos de Uso Ideales</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🛒
              </div>
              <h3 className="font-semibold mb-2">E-commerce</h3>
              <p className="text-secondary-600 text-sm">Tiendas online con catálogos grandes e imágenes pesadas que necesitan carga rápida.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                📺
              </div>
              <h3 className="font-semibold mb-2">Streaming</h3>
              <p className="text-secondary-600 text-sm">Plataformas de video y audio que requieren distribución global sin buffering.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                📱
              </div>
              <h3 className="font-semibold mb-2">Apps Móviles</h3>
              <p className="text-secondary-600 text-sm">APIs y contenido para aplicaciones móviles con usuarios globales.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🎮
              </div>
              <h3 className="font-semibold mb-2">Gaming</h3>
              <p className="text-secondary-600 text-sm">Juegos online que necesitan baja latencia y actualizaciones rápidas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Seguridad Incluida</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-4">DDoS Protection</h3>
              <ul className="text-left space-y-2 text-secondary-600">
                <li>• Mitigación automática 24/7</li>
                <li>• Capacidad 100+ Gbps</li>
                <li>• Layer 3, 4 y 7 protection</li>
                <li>• Zero downtime garantizado</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-4">Web Application Firewall</h3>
              <ul className="text-left space-y-2 text-secondary-600">
                <li>• OWASP Top 10 protection</li>
                <li>• Bot management avanzado</li>
                <li>• Rate limiting inteligente</li>
                <li>• Custom security rules</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Easy Setup */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Configuración en 5 Minutos</h2>
          <p className="text-xl text-secondary-600 mb-12">
            Activa tu CDN sin cambios técnicos complicados
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">1</div>
              <h3 className="font-semibold mb-3">Agrega tu Dominio</h3>
              <p className="text-secondary-600 text-sm">Simplemente ingresa tu dominio en nuestro panel de control.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">2</div>
              <h3 className="font-semibold mb-3">Actualiza DNS</h3>
              <p className="text-secondary-600 text-sm">Cambia tus registros DNS a nuestros servidores (te ayudamos).</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
              <h3 className="font-semibold mb-3">¡Listo!</h3>
              <p className="text-secondary-600 text-sm">Tu sitio ya está acelerado y protegido globalmente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Listo para acelerar tu sitio web?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Mejora la velocidad y protege tu sitio con nuestra CDN global. Prueba gratuita por 30 días.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-50 transition-colors">
              Comenzar Prueba Gratuita
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Ver Demo en Vivo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}