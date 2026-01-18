import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servidores Dedicados México | Bare Metal desde $4,999/mes',
  description: '🖥️ Servidores dedicados México ✅ Hardware personalizable ✅ 100% recursos dedicados ✅ SSD NVMe ✅ Red 1Gbps ✅ Soporte 24/7 ✅ Desde $4,999/mes',
  keywords: [
    'servidores dedicados mexico',
    'bare metal server mexico',
    'servidor dedicado mexico',
    'hosting dedicado mexico',
    'servidor fisico mexico'
  ],
};

export default function ServidoresDedicadosPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Servidores Dedicados
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Máximo rendimiento con hardware 100% dedicado para tu empresa.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-slate-300 text-sm">Recursos Dedicados</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">1Gbps</div>
              <div className="text-slate-300 text-sm">Conexión Red</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">SSD</div>
              <div className="text-slate-300 text-sm">NVMe Storage</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-slate-300 text-sm">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </section>

      {/* Server Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Configuraciones Disponibles</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Essential */}
            <div className="border-2 border-secondary-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Essential Dedicated</h3>
              <div className="text-4xl font-bold text-primary-600 mb-6">$4,999<span className="text-lg text-secondary-500">/mes</span></div>
              <div className="bg-secondary-50 p-4 rounded-lg mb-6">
                <div className="text-sm text-secondary-600 mb-2">Configuración:</div>
                <div className="space-y-1 text-sm">
                  <div>• Intel Xeon E-2236 6 cores</div>
                  <div>• 32 GB DDR4 ECC RAM</div>
                  <div>• 1TB SSD NVMe</div>
                  <div>• 1Gbps conexión</div>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li>✅ Root access completo</li>
                <li>✅ Elección de OS</li>
                <li>✅ Backup semanal</li>
                <li>✅ Monitoreo 24/7</li>
                <li>✅ IP dedicada</li>
                <li>✅ KVM over IP</li>
                <li>✅ Soporte email</li>
              </ul>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Configurar
              </button>
            </div>

            {/* Performance */}
            <div className="border-2 border-primary-500 rounded-2xl p-8 hover:shadow-lg transition-shadow relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm">
                Recomendado
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Performance Dedicated</h3>
              <div className="text-4xl font-bold text-primary-600 mb-6">$8,999<span className="text-lg text-secondary-500">/mes</span></div>
              <div className="bg-secondary-50 p-4 rounded-lg mb-6">
                <div className="text-sm text-secondary-600 mb-2">Configuración:</div>
                <div className="space-y-1 text-sm">
                  <div>• Intel Xeon Gold 6230R 26 cores</div>
                  <div>• 64 GB DDR4 ECC RAM</div>
                  <div>• 2TB SSD NVMe RAID 1</div>
                  <div>• 10Gbps conexión</div>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li>✅ Root access completo</li>
                <li>✅ Elección de OS avanzada</li>
                <li>✅ Backup diario</li>
                <li>✅ Monitoreo avanzado</li>
                <li>✅ Multiple IPs</li>
                <li>✅ IPMI dedicado</li>
                <li>✅ Soporte prioritario</li>
                <li>✅ SLA 99.9% uptime</li>
              </ul>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Configurar
              </button>
            </div>

            {/* Enterprise */}
            <div className="border-2 border-secondary-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Enterprise Dedicated</h3>
              <div className="text-4xl font-bold text-primary-600 mb-6">$15,999<span className="text-lg text-secondary-500">/mes</span></div>
              <div className="bg-secondary-50 p-4 rounded-lg mb-6">
                <div className="text-sm text-secondary-600 mb-2">Configuración:</div>
                <div className="space-y-1 text-sm">
                  <div>• Dual Intel Xeon Platinum 8280</div>
                  <div>• 256 GB DDR4 ECC RAM</div>
                  <div>• 4TB NVMe + 8TB HDD RAID</div>
                  <div>• 10Gbps redundante</div>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li>✅ Hardware personalizable</li>
                <li>✅ OS empresarial</li>
                <li>✅ Backup en tiempo real</li>
                <li>✅ Monitoreo proactivo</li>
                <li>✅ Subnet dedicada /29</li>
                <li>✅ Console remota</li>
                <li>✅ Soporte telefónico 24/7</li>
                <li>✅ SLA 99.99% uptime</li>
                <li>✅ Ingeniero dedicado</li>
              </ul>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Configurar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Configuration */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Configuración Personalizada</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                ⚡
              </div>
              <h3 className="font-semibold text-lg mb-3">Procesadores</h3>
              <ul className="text-sm text-secondary-600 space-y-1">
                <li>• Intel Xeon E series</li>
                <li>• Intel Xeon Gold series</li>
                <li>• Intel Xeon Platinum</li>
                <li>• AMD EPYC series</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                💾
              </div>
              <h3 className="font-semibold text-lg mb-3">Memoria RAM</h3>
              <ul className="text-sm text-secondary-600 space-y-1">
                <li>• 16 GB - 1 TB DDR4</li>
                <li>• ECC Registered</li>
                <li>• Configuración dual channel</li>
                <li>• Upgrades disponibles</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                💿
              </div>
              <h3 className="font-semibold text-lg mb-3">Almacenamiento</h3>
              <ul className="text-sm text-secondary-600 space-y-1">
                <li>• SSD NVMe hasta 15TB</li>
                <li>• HDD SATA hasta 72TB</li>
                <li>• RAID 0, 1, 5, 6, 10</li>
                <li>• Hot-swap disponible</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🌐
              </div>
              <h3 className="font-semibold text-lg mb-3">Conectividad</h3>
              <ul className="text-sm text-secondary-600 space-y-1">
                <li>• 1Gbps - 100Gbps</li>
                <li>• Conexiones redundantes</li>
                <li>• IPs dedicadas</li>
                <li>• BGP routing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Systems */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Sistemas Operativos Disponibles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-secondary-50 p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <span className="text-2xl mr-3">🐧</span>
                Linux Distributions
              </h3>
              <ul className="space-y-2 text-secondary-600">
                <li>✅ Ubuntu 20.04/22.04 LTS</li>
                <li>✅ CentOS 8 Stream</li>
                <li>✅ Rocky Linux 8/9</li>
                <li>✅ Debian 11/12</li>
                <li>✅ Red Hat Enterprise Linux</li>
                <li>✅ SUSE Linux Enterprise</li>
              </ul>
            </div>
            <div className="bg-secondary-50 p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <span className="text-2xl mr-3">🪟</span>
                Windows Server
              </h3>
              <ul className="space-y-2 text-secondary-600">
                <li>✅ Windows Server 2019</li>
                <li>✅ Windows Server 2022</li>
                <li>✅ Licencias incluidas</li>
                <li>✅ Remote Desktop</li>
                <li>✅ Active Directory ready</li>
                <li>✅ IIS preconfigurado</li>
              </ul>
            </div>
            <div className="bg-secondary-50 p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <span className="text-2xl mr-3">⚙️</span>
                Virtualization
              </h3>
              <ul className="space-y-2 text-secondary-600">
                <li>✅ VMware vSphere</li>
                <li>✅ Proxmox VE</li>
                <li>✅ Hyper-V Server</li>
                <li>✅ XenServer</li>
                <li>✅ Docker pre-instalado</li>
                <li>✅ Kubernetes ready</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegir servidores dedicados?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                🚀
              </div>
              <h3 className="font-semibold text-lg mb-3">Máximo Rendimiento</h3>
              <p className="text-secondary-600">100% de los recursos del hardware dedicados exclusivamente para tu aplicación sin compartir.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                🔒
              </div>
              <h3 className="font-semibold text-lg mb-3">Máxima Seguridad</h3>
              <p className="text-secondary-600">Aislamiento físico completo, firewall dedicado y control total sobre la configuración de seguridad.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                ⚙️
              </div>
              <h3 className="font-semibold text-lg mb-3">Control Total</h3>
              <p className="text-secondary-600">Root access completo, instalación de cualquier software y configuración personalizada del sistema.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                📈
              </div>
              <h3 className="font-semibold text-lg mb-3">Escalabilidad</h3>
              <p className="text-secondary-600">Upgrade de hardware cuando necesites más recursos sin migración de datos compleja.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                🔧
              </div>
              <h3 className="font-semibold text-lg mb-3">Soporte Experto</h3>
              <p className="text-secondary-600">Equipo de ingenieros disponible 24/7 para resolver cualquier incidencia técnica.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                📊
              </div>
              <h3 className="font-semibold text-lg mb-3">SLA Garantizado</h3>
              <p className="text-secondary-600">99.9% de uptime garantizado con compensación automática por tiempo de inactividad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Casos de Uso Ideales</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🏢
              </div>
              <h3 className="font-semibold mb-2">ERP Empresarial</h3>
              <p className="text-secondary-600 text-sm">SAP, Oracle, Microsoft Dynamics con alto rendimiento y disponibilidad.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🛒
              </div>
              <h3 className="font-semibold mb-2">E-commerce</h3>
              <p className="text-secondary-600 text-sm">Tiendas online con alto tráfico, Magento, WooCommerce, Shopify Plus.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🎮
              </div>
              <h3 className="font-semibold mb-2">Game Servers</h3>
              <p className="text-secondary-600 text-sm">Servidores de juegos multijugador con baja latencia y alto rendimiento.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                📊
              </div>
              <h3 className="font-semibold mb-2">Big Data</h3>
              <p className="text-secondary-600 text-sm">Procesamiento de datos masivos, machine learning, análisis estadístico.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Listo para el máximo rendimiento?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Configura tu servidor dedicado personalizado y recibe una propuesta en 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Configurar Servidor
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Hablar con Experto
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}