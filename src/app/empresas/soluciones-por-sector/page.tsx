import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soluciones Cloud por Sector | Infraestructura Especializada México',
  description: '🏭 Soluciones cloud especializadas por sector ✅ Salud, Finanzas, Retail, Gobierno ✅ Compliance específico ✅ Arquitecturas optimizadas ✅ México',
  keywords: [
    'cloud por sector mexico',
    'soluciones verticales cloud',
    'cloud salud mexico',
    'cloud finanzas mexico',
    'cloud retail mexico',
    'cloud gobierno mexico'
  ],
};

export default function SolucionesPorSectorPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-700 to-teal-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Soluciones por Sector
          </h1>
          <p className="text-xl text-emerald-100 mb-8">
            Infraestructura cloud especializada para las necesidades específicas de tu industria.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">8+</div>
              <div className="text-emerald-200 text-sm">Sectores</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-emerald-200 text-sm">Clientes Empresas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-emerald-200 text-sm">Años Experiencia</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-emerald-200 text-sm">SLA Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Sectores Especializados</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Healthcare */}
            <div className="group bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border border-red-100 hover:shadow-lg transition-all cursor-pointer">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                🏥
              </div>
              <h3 className="text-lg font-bold text-center mb-2">Salud</h3>
              <p className="text-secondary-600 text-sm text-center">Infraestructura HIPAA compliant para hospitales, clínicas y sistemas de salud.</p>
            </div>

            {/* Financial */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                🏦
              </div>
              <h3 className="text-lg font-bold text-center mb-2">Financiero</h3>
              <p className="text-secondary-600 text-sm text-center">Soluciones PCI DSS para bancos, fintech y servicios financieros.</p>
            </div>

            {/* Retail */}
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-all cursor-pointer">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                🛒
              </div>
              <h3 className="text-lg font-bold text-center mb-2">Retail</h3>
              <p className="text-secondary-600 text-sm text-center">E-commerce escalable y sistemas omnicanal para retailers modernos.</p>
            </div>

            {/* Government */}
            <div className="group bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-100 hover:shadow-lg transition-all cursor-pointer">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                🏛️
              </div>
              <h3 className="text-lg font-bold text-center mb-2">Gobierno</h3>
              <p className="text-secondary-600 text-sm text-center">Cloud soberano y servicios digitales para entidades gubernamentales.</p>
            </div>

            {/* Education */}
            <div className="group bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-100 hover:shadow-lg transition-all cursor-pointer">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                🎓
              </div>
              <h3 className="text-lg font-bold text-center mb-2">Educación</h3>
              <p className="text-secondary-600 text-sm text-center">Plataformas educativas y campus virtuales para instituciones académicas.</p>
            </div>

            {/* Manufacturing */}
            <div className="group bg-gradient-to-br from-gray-50 to-slate-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
                🏭
              </div>
              <h3 className="text-lg font-bold text-center mb-2">Manufactura</h3>
              <p className="text-secondary-600 text-sm text-center">IoT industrial, ERP en la nube y sistemas de automatización.</p>
            </div>

            {/* Media */}
            <div className="group bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl border border-pink-100 hover:shadow-lg transition-all cursor-pointer">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-200 transition-colors">
                📺
              </div>
              <h3 className="text-lg font-bold text-center mb-2">Media</h3>
              <p className="text-secondary-600 text-sm text-center">Streaming, CDN global y procesamiento de contenido multimedia.</p>
            </div>

            {/* Legal */}
            <div className="group bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl border border-yellow-100 hover:shadow-lg transition-all cursor-pointer">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                ⚖️
              </div>
              <h3 className="text-lg font-bold text-center mb-2">Legal</h3>
              <p className="text-secondary-600 text-sm text-center">Gestión documental segura y sistemas de facturación legal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Detail */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  🏥
                </div>
                <h2 className="text-3xl font-bold text-secondary-900">Sector Salud</h2>
              </div>
              <p className="text-secondary-600 mb-6">
                Infraestructura especializada para el cuidado de la salud con cumplimiento total de normativas de privacidad y seguridad médica.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Compliance</h3>
                  <ul className="text-sm text-secondary-600 space-y-1">
                    <li>• HIPAA compliant</li>
                    <li>• LGPD healthcare</li>
                    <li>• Cifrado extremo a extremo</li>
                    <li>• Auditoría continua</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Soluciones</h3>
                  <ul className="text-sm text-secondary-600 space-y-1">
                    <li>• EHR en la nube</li>
                    <li>• PACS médico</li>
                    <li>• Telemedicina</li>
                    <li>• Backup clínico</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Casos de Éxito</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-400 pl-4">
                  <div className="font-semibold">Hospital General XYZ</div>
                  <div className="text-sm text-secondary-600">Migración de 50TB de expedientes médicos con cero tiempo de inactividad</div>
                </div>
                <div className="border-l-4 border-red-400 pl-4">
                  <div className="font-semibold">Red de Clínicas ABC</div>
                  <div className="text-sm text-secondary-600">Plataforma unificada para 25 ubicaciones con acceso instantáneo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Detail */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Arquitectura Financiera</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    🔒
                  </div>
                  <div>
                    <div className="font-semibold">Multi-Layer Security</div>
                    <div className="text-sm text-secondary-600">WAF, DDoS protection, HSM encryption</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    📊
                  </div>
                  <div>
                    <div className="font-semibold">Real-time Analytics</div>
                    <div className="text-sm text-secondary-600">Detección de fraude y análisis transaccional</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    🔄
                  </div>
                  <div>
                    <div className="font-semibold">High Availability</div>
                    <div className="text-sm text-secondary-600">99.99% uptime con failover automático</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  🏦
                </div>
                <h2 className="text-3xl font-bold text-secondary-900">Sector Financiero</h2>
              </div>
              <p className="text-secondary-600 mb-6">
                Infraestructura ultra-segura para instituciones financieras con cumplimiento PCI DSS y regulaciones bancarias mexicanas.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Regulaciones</h3>
                  <ul className="text-sm text-secondary-600 space-y-1">
                    <li>• PCI DSS Level 1</li>
                    <li>• CNBV compliance</li>
                    <li>• SOX controls</li>
                    <li>• COSO framework</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Servicios</h3>
                  <ul className="text-sm text-secondary-600 space-y-1">
                    <li>• Core banking</li>
                    <li>• Payment processing</li>
                    <li>• Risk management</li>
                    <li>• Digital banking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retail Detail */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  🛒
                </div>
                <h2 className="text-3xl font-bold text-secondary-900">Sector Retail</h2>
              </div>
              <p className="text-secondary-600 mb-6">
                Plataformas e-commerce escalables y sistemas omnicanal que soportan desde startups hasta grandes retailers.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">E-commerce Platform</h3>
                  <p className="text-sm text-secondary-600">Auto-scaling para picos de tráfico como Black Friday, con CDN global integrado.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Inventory Management</h3>
                  <p className="text-sm text-secondary-600">Sincronización en tiempo real entre tiendas físicas y online con ML predictivo.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Métricas de Performance</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">99.99%</div>
                  <div className="text-sm text-secondary-600">Uptime E-commerce</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">< 2s</div>
                  <div className="text-sm text-secondary-600">Page Load Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">10x</div>
                  <div className="text-sm text-secondary-600">Traffic Scaling</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">24/7</div>
                  <div className="text-sm text-secondary-600">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Detail */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                🏛️
              </div>
              <h2 className="text-3xl font-bold text-secondary-900">Sector Gobierno</h2>
            </div>
            <p className="text-secondary-600 max-w-3xl mx-auto">
              Cloud soberano con residencia de datos en México, diseñado para la transformación digital del sector público.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                🇲🇽
              </div>
              <h3 className="font-semibold text-lg mb-3">Soberanía de Datos</h3>
              <p className="text-secondary-600 text-sm">Datos almacenados exclusivamente en territorio mexicano con controles de acceso gubernamentales.</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                📋
              </div>
              <h3 className="font-semibold text-lg mb-3">Interoperabilidad</h3>
              <p className="text-secondary-600 text-sm">APIs estándar para integración entre dependencias y sistemas federales existentes.</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                👥
              </div>
              <h3 className="font-semibold text-lg mb-3">Servicios Ciudadanos</h3>
              <p className="text-secondary-600 text-sm">Plataformas digitales para trámites, servicios públicos y participación ciudadana.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sector-Specific */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">¿Por qué soluciones específicas por sector?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-left">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  ✅
                </div>
                <h3 className="font-semibold">Compliance Específico</h3>
              </div>
              <p className="text-secondary-600 text-sm mb-6">Cada industria tiene regulaciones únicas que requieren arquitecturas y controles especializados.</p>
              
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  ⚡
                </div>
                <h3 className="font-semibold">Optimización de Performance</h3>
              </div>
              <p className="text-secondary-600 text-sm">Arquitecturas diseñadas para los patrones de uso específicos de cada sector.</p>
            </div>
            <div className="text-left">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  🔧
                </div>
                <h3 className="font-semibold">Integraciones Pre-construidas</h3>
              </div>
              <p className="text-secondary-600 text-sm mb-6">Conectores listos para los sistemas y aplicaciones más utilizados en cada industria.</p>
              
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  👥
                </div>
                <h3 className="font-semibold">Expertise Vertical</h3>
              </div>
              <p className="text-secondary-600 text-sm">Equipos especializados que entienden los desafíos únicos de tu industria.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Tu sector no aparece aquí?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Diseñamos soluciones personalizadas para cualquier industria. Cuéntanos tu caso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
              Consulta Personalizada
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Ver Casos de Estudio
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}