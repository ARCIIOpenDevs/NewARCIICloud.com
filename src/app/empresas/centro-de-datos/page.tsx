import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Centro de Datos México | Tier III Certificado | Colocation Premium',
  description: '🏢 Centro de datos México certificado Tier III ✅ 99.982% uptime ✅ Colocation premium ✅ Conectividad redundante ✅ Seguridad física 24/7',
  keywords: [
    'centro de datos mexico',
    'datacenter mexico',
    'colocation mexico',
    'tier 3 datacenter mexico',
    'hosting fisico mexico'
  ],
};

export default function CentroDeDatosPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-900 to-purple-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Centro de Datos
          </h1>
          <p className="text-xl text-indigo-200 mb-8">
            Infraestructura de clase mundial certificada Tier III con máxima disponibilidad.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">Tier III</div>
              <div className="text-indigo-200 text-sm">Certificación</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">99.982%</div>
              <div className="text-indigo-200 text-sm">Uptime SLA</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-indigo-200 text-sm">Seguridad Física</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">N+1</div>
              <div className="text-indigo-200 text-sm">Redundancia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tier III Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certificación Tier III</h2>
            <p className="text-xl text-secondary-600">Estándares internacionales de disponibilidad y redundancia</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">99.982% Uptime</h3>
              <p className="text-secondary-600 text-sm">Máximo 1.6 horas de interrupción no planificada por año</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Redundancia N+1</h3>
              <p className="text-secondary-600 text-sm">Sistemas críticos duplicados para continuidad operativa</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Mantenimiento Online</h3>
              <p className="text-secondary-600 text-sm">Mantenimiento sin afectar operaciones críticas</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏱️</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">72 Horas Autonomía</h3>
              <p className="text-secondary-600 text-sm">Operación garantizada sin suministro eléctrico externo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Infraestructura de Clase Mundial</h2>
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Power */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                  ⚡
                </div>
                <h3 className="text-2xl font-bold text-secondary-900">Sistema Eléctrico</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Doble acometida eléctrica independiente
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  UPS N+1 con autonomía 15 minutos
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Generadores diésel con autonomía 72h
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  PDUs inteligentes monitoreadas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Transferencia automática &lt; 4ms
                </li>
              </ul>
            </div>

            {/* Cooling */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  ❄️
                </div>
                <h3 className="text-2xl font-bold text-secondary-900">Climatización</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Sistema HVAC redundante N+1
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Temperatura 22°C ± 2°C constante
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Humedad relativa 45-55% controlada
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Free cooling con economizadores
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Monitoreo ambiental 24/7
                </li>
              </ul>
            </div>

            {/* Security */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  🛡️
                </div>
                <h3 className="text-2xl font-bold text-secondary-900">Seguridad Física</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Perímetro blindado con detección
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Control biométrico multi-factor
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  CCTV 360° con grabación 90 días
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Guardia armada 24/7/365
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Sistema anti-intrusión certificado
                </li>
              </ul>
            </div>

            {/* Fire Protection */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  🔥
                </div>
                <h3 className="text-2xl font-bold text-secondary-900">Protección Contra Incendios</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Sistema de detección por aspiración
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Supresión con gas inerte FM-200
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Materiales ignífugos certificados
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Compartimentación por zonas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Evacuación automática de humo
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Connectivity */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Conectividad Premium</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🌐
              </div>
              <h3 className="font-semibold text-lg mb-3">Múltiples ISPs</h3>
              <p className="text-secondary-600">Conectividad redundante con los principales proveedores de internet del país para máxima disponibilidad.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                📡
              </div>
              <h3 className="font-semibold text-lg mb-3">BGP Routing</h3>
              <p className="text-secondary-600">Enrutamiento inteligente que optimiza automáticamente las rutas de red para mejor rendimiento.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                ⚡
              </div>
              <h3 className="font-semibold text-lg mb-3">Baja Latencia</h3>
              <p className="text-secondary-600">< 5ms latencia promedio a destinos nacionales y conexión directa a puntos de intercambio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Servicios de Centro de Datos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Colocation */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                🏢
              </div>
              <h3 className="font-semibold text-lg mb-3">Colocation</h3>
              <p className="text-secondary-600 mb-4">Aloja tu hardware en nuestras instalaciones certificadas Tier III.</p>
              <ul className="text-sm space-y-1">
                <li>• Racks de 42U/47U</li>
                <li>• Energía redundante</li>
                <li>• Conectividad premium</li>
                <li>• Hands-on support</li>
              </ul>
            </div>

            {/* Hybrid Cloud */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                ☁️
              </div>
              <h3 className="font-semibold text-lg mb-3">Hybrid Cloud</h3>
              <p className="text-secondary-600 mb-4">Combina infraestructura física con servicios cloud.</p>
              <ul className="text-sm space-y-1">
                <li>• Conexión directa cloud</li>
                <li>• Backup híbrido</li>
                <li>• DR as a Service</li>
                <li>• Migración asistida</li>
              </ul>
            </div>

            {/* Disaster Recovery */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                🔄
              </div>
              <h3 className="font-semibold text-lg mb-3">Disaster Recovery</h3>
              <p className="text-secondary-600 mb-4">Sitio secundario para continuidad de negocio.</p>
              <ul className="text-sm space-y-1">
                <li>• RTO/RPO garantizado</li>
                <li>• Replicación automática</li>
                <li>• Testing programado</li>
                <li>• Failover automático</li>
              </ul>
            </div>

            {/* Network Services */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                🌐
              </div>
              <h3 className="font-semibold text-lg mb-3">Network Services</h3>
              <p className="text-secondary-600 mb-4">Conectividad empresarial y servicios de red.</p>
              <ul className="text-sm space-y-1">
                <li>• MPLS/VPN dedicadas</li>
                <li>• SD-WAN managed</li>
                <li>• DDoS protection</li>
                <li>• CDN services</li>
              </ul>
            </div>

            {/* Managed Services */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                ⚙️
              </div>
              <h3 className="font-semibold text-lg mb-3">Managed Services</h3>
              <p className="text-secondary-600 mb-4">Gestión completa de tu infraestructura IT.</p>
              <ul className="text-sm space-y-1">
                <li>• Monitoreo 24/7</li>
                <li>• Mantenimiento proactivo</li>
                <li>• Gestión de patches</li>
                <li>• Soporte L1/L2/L3</li>
              </ul>
            </div>

            {/* Compliance */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                📋
              </div>
              <h3 className="font-semibold text-lg mb-3">Compliance</h3>
              <p className="text-secondary-600 mb-4">Cumplimiento normativo y certificaciones.</p>
              <ul className="text-sm space-y-1">
                <li>• ISO 27001 certified</li>
                <li>• SOC 2 Type II</li>
                <li>• PCI DSS ready</li>
                <li>• LGPD compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Certificaciones y Estándares</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-600">III</span>
              </div>
              <h3 className="font-semibold mb-2">Tier III</h3>
              <p className="text-secondary-600 text-sm">Certificación Uptime Institute</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="font-semibold mb-2">ISO 27001</h3>
              <p className="text-secondary-600 text-sm">Gestión de Seguridad</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold mb-2">SOC 2</h3>
              <p className="text-secondary-600 text-sm">Type II Certified</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="font-semibold mb-2">PCI DSS</h3>
              <p className="text-secondary-600 text-sm">Payment Security</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ubicación Estratégica</h2>
          <p className="text-xl text-secondary-600 mb-8">
            Centro de México con conectividad óptima a toda Latinoamérica
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl mb-2">📍</div>
              <h3 className="font-semibold mb-3">Ciudad de México</h3>
              <p className="text-secondary-600 text-sm">Hub de conectividad internacional con acceso directo a NAP del Pacífico.</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl mb-2">🌎</div>
              <h3 className="font-semibold mb-3">Conectividad Global</h3>
              <p className="text-secondary-600 text-sm">Punto de presencia de cables submarinos hacia Asia y Europa.</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-semibold mb-3">Baja Latencia</h3>
              <p className="text-secondary-600 text-sm">< 20ms a principales ciudades de América, < 150ms intercontinental.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-indigo-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Listo para infraestructura de clase mundial?
          </h2>
          <p className="text-xl text-indigo-200 mb-8">
            Conoce nuestras instalaciones y descubre por qué somos el centro de datos líder en México.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Agendar Visita
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Descargar Brochure
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}