import type { Metadata } from 'next';
import { StructuredData } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'VPS Cloud México | Servidores Virtuales Privados desde $899/mes',
  description: '☁️ VPS Cloud México con recursos dedicados. Root access, SSD NVMe, snapshots automáticos, múltiples OS. Escalabilidad garantizada desde $899/mes. ¡99.95% uptime!',
  keywords: [
    'vps cloud mexico',
    'servidor virtual privado mexico',
    'vps ssd mexico',
    'vps root access mexico',
    'servidor cloud escalable',
    'vps docker mexico',
    'vps kubernetes mexico',
    'servidor virtual dedicado'
  ],
  openGraph: {
    title: 'VPS Cloud México | Servidores Virtuales Privados',
    description: '🚀 VPS con recursos dedicados: Root access, SSD NVMe, snapshots, múltiples OS. Escalabilidad bajo demanda desde $899/mes.',
    images: [{ url: '/images/og-vps.jpg', width: 1200, height: 630 }],
  },
};

const vpsSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "VPS Cloud México",
  "provider": { "@type": "Organization", "name": "ARCII Cloud" },
  "description": "Servidores virtuales privados con recursos dedicados y escalabilidad automática",
  "offers": {
    "@type": "Offer",
    "price": "899",
    "priceCurrency": "MXN",
    "description": "VPS Básico con 2GB RAM y 50GB SSD NVMe"
  }
};

export default function VPSCloudPage() {
  return (
    <>
      <StructuredData data={vpsSchema} />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              VPS Cloud México
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Servidores virtuales privados con recursos dedicados, control total y escalabilidad automática
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold text-white">99.95%</div>
                <div className="text-blue-200 text-sm">Uptime SLA</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold text-white">2-16GB</div>
                <div className="text-blue-200 text-sm">RAM Dedicada</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold text-white">SSD NVMe</div>
                <div className="text-blue-200 text-sm">Ultra Rápido</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold text-white">Root</div>
                <div className="text-blue-200 text-sm">Access Total</div>
              </div>
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Planes VPS Cloud</h2>
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* VPS Básico */}
              <div className="bg-white border-2 border-secondary-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-secondary-900 mb-4">VPS Básico</h3>
                <div className="text-4xl font-bold text-primary-600 mb-6">$899<span className="text-lg text-secondary-500">/mes</span></div>
                <ul className="space-y-3 mb-8">
                  <li>✅ 2 GB RAM DDR4</li>
                  <li>✅ 50 GB SSD NVMe</li>
                  <li>✅ 2 vCPU cores</li>
                  <li>✅ 1 TB transferencia</li>
                  <li>✅ Root access completo</li>
                  <li>✅ 1 IP dedicada</li>
                  <li>✅ Ubuntu/CentOS/Debian</li>
                  <li>✅ Snapshots incluidos</li>
                </ul>
                <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                  Seleccionar Plan
                </button>
              </div>

              {/* VPS Profesional */}
              <div className="bg-white border-2 border-primary-500 rounded-2xl p-8 hover:shadow-lg transition-shadow relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm">
                  Más Popular
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">VPS Profesional</h3>
                <div className="text-4xl font-bold text-primary-600 mb-6">$1,499<span className="text-lg text-secondary-500">/mes</span></div>
                <ul className="space-y-3 mb-8">
                  <li>✅ 4 GB RAM DDR4</li>
                  <li>✅ 100 GB SSD NVMe</li>
                  <li>✅ 4 vCPU cores</li>
                  <li>✅ 2 TB transferencia</li>
                  <li>✅ Root access completo</li>
                  <li>✅ 2 IPs dedicadas</li>
                  <li>✅ Windows Server opcional</li>
                  <li>✅ Monitoring incluido</li>
                </ul>
                <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                  Seleccionar Plan
                </button>
              </div>

              {/* VPS Enterprise */}
              <div className="bg-white border-2 border-secondary-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-secondary-900 mb-4">VPS Enterprise</h3>
                <div className="text-4xl font-bold text-primary-600 mb-6">$2,999<span className="text-lg text-secondary-500">/mes</span></div>
                <ul className="space-y-3 mb-8">
                  <li>✅ 8 GB RAM DDR4</li>
                  <li>✅ 200 GB SSD NVMe</li>
                  <li>✅ 8 vCPU cores</li>
                  <li>✅ 5 TB transferencia</li>
                  <li>✅ Root access completo</li>
                  <li>✅ 4 IPs dedicadas</li>
                  <li>✅ Cualquier OS</li>
                  <li>✅ Soporte VIP 24/7</li>
                </ul>
                <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                  Seleccionar Plan
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-secondary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegir nuestros VPS?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  ⚡
                </div>
                <h3 className="font-semibold text-lg mb-3">SSD NVMe Ultra Rápido</h3>
                <p className="text-secondary-600">Discos SSD NVMe de última generación que ofrecen velocidades hasta 10x más rápidas que los SSD tradicionales.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center mb-4">
                  🔧
                </div>
                <h3 className="font-semibold text-lg mb-3">Control Total Root</h3>
                <p className="text-secondary-600">Acceso root completo para instalar cualquier software, configurar servicios y personalizar tu servidor como necesites.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-warning-100 rounded-lg flex items-center justify-center mb-4">
                  📸
                </div>
                <h3 className="font-semibold text-lg mb-3">Snapshots Automáticos</h3>
                <p className="text-secondary-600">Snapshots automáticos de tu VPS para restaurar rápidamente en caso de problemas. Backups seguros y confiables.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  🌐
                </div>
                <h3 className="font-semibold text-lg mb-3">Múltiples Sistemas Operativos</h3>
                <p className="text-secondary-600">Ubuntu, CentOS, Debian, Rocky Linux, Windows Server. Instala el OS que prefieras con un solo clic.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  📈
                </div>
                <h3 className="font-semibold text-lg mb-3">Escalabilidad Automática</h3>
                <p className="text-secondary-600">Escala recursos (CPU, RAM, disco) sobre la marcha sin downtime. Paga solo por lo que uses cuando lo uses.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  🛡️
                </div>
                <h3 className="font-semibold text-lg mb-3">Seguridad Avanzada</h3>
                <p className="text-secondary-600">Firewall configurable, protección DDoS, monitoreo 24/7 y actualizaciones de seguridad automáticas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Listo para tu VPS Cloud?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Configura tu servidor virtual en menos de 5 minutos. Soporte técnico incluido.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/configurador?type=vps" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                Configurar Mi VPS
              </a>
              <a href="/contacto" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Hablar con Experto
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}