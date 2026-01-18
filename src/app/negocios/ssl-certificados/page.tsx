import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certificados SSL México | Seguridad Web desde $299/año',
  description: '🔒 Certificados SSL México ✅ DV, OV, EV ✅ Wildcard disponibles ✅ Instalación gratuita ✅ Soporte 24/7 ✅ Desde $299/año ¡Protege tu sitio web!',
  keywords: [
    'certificados ssl mexico',
    'ssl certificate mexico',
    'https mexico',
    'seguridad web mexico',
    'certificado ssl barato',
    'wildcard ssl mexico'
  ],
};

export default function SSLCertificadosPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Certificados SSL
          </h1>
          <p className="text-xl text-green-100 mb-8">
            Protege tu sitio web y gana la confianza de tus visitantes con HTTPS.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">🔒</div>
              <div className="text-green-200 text-sm">Encriptación 256-bit</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">✅</div>
              <div className="text-green-200 text-sm">Validación Instantánea</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">🌐</div>
              <div className="text-green-200 text-sm">Wildcard Disponible</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">📱</div>
              <div className="text-green-200 text-sm">Móvil Compatible</div>
            </div>
          </div>
        </div>
      </section>

      {/* SSL Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Tipos de Certificados SSL</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* DV SSL */}
            <div className="border-2 border-secondary-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  🔒
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">SSL Básico (DV)</h3>
                <div className="text-3xl font-bold text-primary-600 mb-2">$299<span className="text-lg text-secondary-500">/año</span></div>
              </div>
              <ul className="space-y-3 mb-8">
                <li>✅ Validación de dominio</li>
                <li>✅ Encriptación 256-bit</li>
                <li>✅ Emisión en minutos</li>
                <li>✅ Compatible 99.9% navegadores</li>
                <li>✅ Candado verde HTTPS</li>
                <li>✅ Garantía $10,000 USD</li>
                <li>✅ Soporte email</li>
              </ul>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Comprar Ahora
              </button>
            </div>

            {/* OV SSL */}
            <div className="border-2 border-primary-500 rounded-2xl p-8 hover:shadow-lg transition-shadow relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm">
                Recomendado
              </div>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  🏢
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">SSL Empresarial (OV)</h3>
                <div className="text-3xl font-bold text-primary-600 mb-2">$799<span className="text-lg text-secondary-500">/año</span></div>
              </div>
              <ul className="space-y-3 mb-8">
                <li>✅ Validación de organización</li>
                <li>✅ Encriptación 256-bit</li>
                <li>✅ Emisión 1-3 días</li>
                <li>✅ Muestra nombre empresa</li>
                <li>✅ Mayor confianza usuarios</li>
                <li>✅ Garantía $100,000 USD</li>
                <li>✅ Soporte prioritario</li>
              </ul>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Comprar Ahora
              </button>
            </div>

            {/* EV SSL */}
            <div className="border-2 border-secondary-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  👑
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">SSL Premium (EV)</h3>
                <div className="text-3xl font-bold text-primary-600 mb-2">$1,999<span className="text-lg text-secondary-500">/año</span></div>
              </div>
              <ul className="space-y-3 mb-8">
                <li>✅ Validación extendida</li>
                <li>✅ Encriptación 256-bit</li>
                <li>✅ Emisión 5-7 días</li>
                <li>✅ Barra verde navegador</li>
                <li>✅ Máxima confianza</li>
                <li>✅ Garantía $1,000,000 USD</li>
                <li>✅ Soporte telefónico 24/7</li>
              </ul>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Comprar Ahora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Wildcard SSL */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certificados Wildcard SSL</h2>
            <p className="text-xl text-secondary-600">Protege dominios ilimitados con un solo certificado</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Wildcard DV</h3>
              <div className="text-4xl font-bold text-primary-600 mb-6">$1,299<span className="text-lg text-secondary-500">/año</span></div>
              <ul className="space-y-3 mb-8">
                <li>✅ *.tudominio.com</li>
                <li>✅ Subdominios ilimitados</li>
                <li>✅ Validación de dominio</li>
                <li>✅ Emisión en minutos</li>
                <li>✅ Encriptación 256-bit</li>
                <li>✅ Garantía $10,000 USD</li>
              </ul>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Comprar Wildcard
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Wildcard OV</h3>
              <div className="text-4xl font-bold text-primary-600 mb-6">$2,499<span className="text-lg text-secondary-500">/año</span></div>
              <ul className="space-y-3 mb-8">
                <li>✅ *.tudominio.com</li>
                <li>✅ Subdominios ilimitados</li>
                <li>✅ Validación organización</li>
                <li>✅ Emisión 1-3 días</li>
                <li>✅ Mayor confianza</li>
                <li>✅ Garantía $100,000 USD</li>
              </ul>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Comprar Wildcard
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué necesitas SSL?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🔒
              </div>
              <h3 className="font-semibold text-lg mb-3">Seguridad de Datos</h3>
              <p className="text-secondary-600">Encripta toda la información entre tu sitio web y los visitantes.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                📈
              </div>
              <h3 className="font-semibold text-lg mb-3">Mejor SEO</h3>
              <p className="text-secondary-600">Google favorece sitios con SSL en los resultados de búsqueda.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                👥
              </div>
              <h3 className="font-semibold text-lg mb-3">Confianza del Usuario</h3>
              <p className="text-secondary-600">El candado verde genera confianza y reduce rebote.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                ⚡
              </div>
              <h3 className="font-semibold text-lg mb-3">HTTP/2 Habilitado</h3>
              <p className="text-secondary-600">Mejor rendimiento y velocidad de carga con HTTP/2.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🛡️
              </div>
              <h3 className="font-semibold text-lg mb-3">Protección MITM</h3>
              <p className="text-secondary-600">Previene ataques man-in-the-middle y alteración de datos.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                ✅
              </div>
              <h3 className="font-semibold text-lg mb-3">Cumplimiento PCI</h3>
              <p className="text-secondary-600">Requerido para procesar pagos online de forma segura.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Instalación Gratuita</h2>
          <p className="text-xl text-secondary-600 mb-12">
            Nuestro equipo instala tu certificado SSL sin costo adicional
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl font-bold text-primary-600 mb-2">1</div>
              <h3 className="font-semibold mb-3">Compra</h3>
              <p className="text-secondary-600">Selecciona el certificado SSL que necesitas.</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl font-bold text-primary-600 mb-2">2</div>
              <h3 className="font-semibold mb-3">Validación</h3>
              <p className="text-secondary-600">Completamos el proceso de validación del certificado.</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
              <h3 className="font-semibold mb-3">Instalación</h3>
              <p className="text-secondary-600">Instalamos el SSL en tu servidor gratuitamente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Listo para asegurar tu sitio web?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Instala tu certificado SSL hoy y mejora la confianza de tus usuarios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
              Ver Certificados
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Contactar Experto
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}