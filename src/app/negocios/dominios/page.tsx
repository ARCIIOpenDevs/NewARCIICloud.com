import type { Metadata } from 'next';
import { StructuredData } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'Dominios México | Registro .mx .com.mx .com desde $199/año',
  description: '🌐 Registro de dominios México: .mx, .com.mx, .com, .net, .org. Precios desde $199/año. DNS gratuito, Whois privacy, renovación automática. ¡Más de 500 extensiones!',
  keywords: [
    'dominios mexico',
    'registro dominios mx',
    'dominios com.mx',
    'dominios baratos mexico',
    'dns gratuito mexico',
    'whois privacy mexico',
    'renovacion automatica dominios'
  ],
};

export default function DominiosPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Dominios México
          </h1>
          <p className="text-xl text-green-100 mb-8">
            Registra tu dominio perfecto con más de 500 extensiones disponibles
          </p>
          
          {/* Domain Search */}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 shadow-xl">
            <div className="flex">
              <input 
                type="text" 
                placeholder="Busca tu dominio perfecto..."
                className="flex-1 px-4 py-3 border border-secondary-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="bg-primary-600 text-white px-8 py-3 rounded-r-lg hover:bg-primary-700 transition-colors font-semibold">
                Buscar
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              <span className="text-xs bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full">.com desde $299</span>
              <span className="text-xs bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full">.mx desde $499</span>
              <span className="text-xs bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full">.com.mx desde $399</span>
              <span className="text-xs bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full">.org desde $199</span>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Extensions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Extensiones Populares</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="text-center p-6 border rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary-600 mb-2">.com</div>
              <div className="text-2xl font-semibold text-secondary-900 mb-2">$299</div>
              <div className="text-sm text-secondary-600 mb-4">por año</div>
              <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
                Registrar
              </button>
            </div>

            <div className="text-center p-6 border rounded-xl hover:shadow-lg transition-shadow border-primary-200 bg-primary-25">
              <div className="text-4xl font-bold text-primary-600 mb-2">.mx</div>
              <div className="text-2xl font-semibold text-secondary-900 mb-2">$499</div>
              <div className="text-sm text-secondary-600 mb-4">por año</div>
              <div className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full mb-3">Nacional</div>
              <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
                Registrar
              </button>
            </div>

            <div className="text-center p-6 border rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary-600 mb-2">.com.mx</div>
              <div className="text-2xl font-semibold text-secondary-900 mb-2">$399</div>
              <div className="text-sm text-secondary-600 mb-4">por año</div>
              <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
                Registrar
              </button>
            </div>

            <div className="text-center p-6 border rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary-600 mb-2">.org</div>
              <div className="text-2xl font-semibold text-secondary-900 mb-2">$199</div>
              <div className="text-sm text-secondary-600 mb-4">por año</div>
              <div className="text-xs bg-success-100 text-success-700 px-2 py-1 rounded-full mb-3">¡Oferta!</div>
              <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
                Registrar
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-secondary-600 mb-4">¿Buscas otra extensión?</p>
            <button className="bg-secondary-100 text-secondary-700 px-6 py-3 rounded-lg hover:bg-secondary-200 transition-colors">
              Ver las 500+ extensiones disponibles
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Todo incluido con tu dominio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🌐
              </div>
              <h3 className="font-semibold text-lg mb-3">DNS Gratuito</h3>
              <p className="text-secondary-600">Gestión completa de DNS con panel intuitivo. Configura registros A, CNAME, MX y más.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🔒
              </div>
              <h3 className="font-semibold text-lg mb-3">Whois Privacy</h3>
              <p className="text-secondary-600">Protege tu información personal ocultando tus datos en el registro público WHOIS.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-warning-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🔄
              </div>
              <h3 className="font-semibold text-lg mb-3">Renovación Automática</h3>
              <p className="text-secondary-600">No pierdas tu dominio. Renovación automática para que nunca se venza tu registro.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                📧
              </div>
              <h3 className="font-semibold text-lg mb-3">Email Forwarding</h3>
              <p className="text-secondary-600">Redirecciona emails de tu dominio a cualquier cuenta existente. Gratis e ilimitado.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🚀
              </div>
              <h3 className="font-semibold text-lg mb-3">Transferencias Rápidas</h3>
              <p className="text-secondary-600">Transfiere dominios desde otros registradores de forma fácil y segura.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🎯
              </div>
              <h3 className="font-semibold text-lg mb-3">Gestión Centralizada</h3>
              <p className="text-secondary-600">Administra todos tus dominios desde un panel único junto con tu hosting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Tu dominio ideal está disponible?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Regístralo ahora y asegura tu presencia online. ¡Verificación instantánea!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
              Buscar Dominio
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Transferir Dominio
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}