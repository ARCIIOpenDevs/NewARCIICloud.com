import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Infraestructura Crítica México | Sistemas de Misión Crítica Cloud',
  description: '🚨 Infraestructura crítica México ✅ 99.99% uptime ✅ Redundancia N+2 ✅ Failover automático ✅ RTO &lt; 5min ✅ Sistemas de misión crítica',
  keywords: [
    'infraestructura critica mexico',
    'sistemas mision critica',
    'alta disponibilidad mexico',
    'failover automatico mexico',
    'business continuity mexico'
  ],
};

export default function InfraestructuraCriticaPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-800 to-orange-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Infraestructura Crítica
          </h1>
          <p className="text-xl text-red-100 mb-8">
            Sistemas de misión crítica con máxima disponibilidad y continuidad operativa garantizada.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">99.99%</div>
              <div className="text-red-200 text-sm">SLA Uptime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">&lt; 5min</div>
              <div className="text-red-200 text-sm">RTO Objetivo</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">N+2</div>
              <div className="text-red-200 text-sm">Redundancia</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-red-200 text-sm">Monitoreo NOC</div>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Infrastructure Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Sistemas Críticos que Protegemos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Financial Systems */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                💳
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Sistemas Financieros</h3>
              <ul className="space-y-2 text-secondary-600 text-sm">
                <li>• Core banking en tiempo real</li>
                <li>• Procesamiento de pagos 24/7</li>
                <li>• Trading systems</li>
                <li>• Sistemas de riesgo</li>
                <li>• Clearing y settlement</li>
              </ul>
            </div>

            {/* Healthcare Systems */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl border border-red-100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🏥
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Sistemas de Salud</h3>
              <ul className="space-y-2 text-secondary-600 text-sm">
                <li>• Historia clínica electrónica</li>
                <li>• Sistemas de monitoreo UCI</li>
                <li>• PACS radiología</li>
                <li>• Gestión quirúrgica</li>
                <li>• Farmacia hospitalaria</li>
              </ul>
            </div>

            {/* Government Systems */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🏛️
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Sistemas Gubernamentales</h3>
              <ul className="space-y-2 text-secondary-600 text-sm">
                <li>• Servicios ciudadanos digitales</li>
                <li>• Sistemas electorales</li>
                <li>• Seguridad nacional</li>
                <li>• Registro civil</li>
                <li>• Hacienda y tributarios</li>
              </ul>
            </div>

            {/* Industrial Systems */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-100">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🏭
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Sistemas Industriales</h3>
              <ul className="space-y-2 text-secondary-600 text-sm">
                <li>• SCADA y control industrial</li>
                <li>• MES manufacturing</li>
                <li>• Supply chain crítica</li>
                <li>• Gestión energética</li>
                <li>• Mantenimiento predictivo</li>
              </ul>
            </div>

            {/* Telecom Systems */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                📡
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Telecomunicaciones</h3>
              <ul className="space-y-2 text-secondary-600 text-sm">
                <li>• Infraestructura de red</li>
                <li>• Sistemas de billing</li>
                <li>• NOC/SOC operations</li>
                <li>• VoIP y comunicaciones</li>
                <li>• IoT platforms</li>
              </ul>
            </div>

            {/* E-commerce */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl border border-teal-100">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🛒
              </div>
              <h3 className="text-xl font-bold text-center mb-4">E-commerce Crítico</h3>
              <ul className="space-y-2 text-secondary-600 text-sm">
                <li>• Plataformas de venta masiva</li>
                <li>• Sistemas de pago online</li>
                <li>• Gestión de inventario</li>
                <li>• Logística y fulfillment</li>
                <li>• Customer experience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Arquitectura de Alta Disponibilidad</h2>
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Multi-Zone Architecture */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  🌐
                </div>
                Arquitectura Multi-Zona
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold mb-2">Zona Primaria (México DF)</h4>
                  <p className="text-secondary-600 text-sm">Datacenter Tier III con procesamiento principal y almacenamiento primario.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold mb-2">Zona Secundaria (Guadalajara)</h4>
                  <p className="text-secondary-600 text-sm">Sitio de disaster recovery con replicación sincrónica de datos críticos.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold mb-2">Zona Terciaria (Monterrey)</h4>
                  <p className="text-secondary-600 text-sm">Backup asincrónico y procesamiento distribuido para balanceo de carga.</p>
                </div>
              </div>
            </div>

            {/* Redundancy Layers */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  🔄
                </div>
                Capas de Redundancia
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    ⚡
                  </div>
                  <div>
                    <div className="font-semibold">Energía N+2</div>
                    <div className="text-sm text-secondary-600">Doble redundancia eléctrica con UPS y generadores</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    🌐
                  </div>
                  <div>
                    <div className="font-semibold">Red Multi-Carrier</div>
                    <div className="text-sm text-secondary-600">5+ ISPs con BGP routing inteligente</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    💾
                  </div>
                  <div>
                    <div className="font-semibold">Storage Triple Mirror</div>
                    <div className="text-sm text-secondary-600">Replicación de datos en 3 ubicaciones físicas</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    🖥️
                  </div>
                  <div>
                    <div className="font-semibold">Compute Auto-Scale</div>
                    <div className="text-sm text-secondary-600">Escalado automático ante picos de demanda</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLA Guarantees */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Garantías de Nivel de Servicio</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Uptime SLA */}
            <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <div className="text-5xl font-bold text-green-600 mb-4">99.99%</div>
              <h3 className="text-xl font-bold mb-4">Uptime SLA</h3>
              <div className="space-y-2 text-sm text-secondary-600">
                <div>• Máximo 4.3 min/mes downtime</div>
                <div>• 52.6 min/año interrupción</div>
                <div>• Créditos automáticos por incumplimiento</div>
                <div>• Monitoreo 24/7/365</div>
              </div>
            </div>

            {/* Recovery SLA */}
            <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="text-5xl font-bold text-blue-600 mb-4">&lt; 5min</div>
              <h3 className="text-xl font-bold mb-4">Recovery Time</h3>
              <div className="space-y-2 text-sm text-secondary-600">
                <div>• RTO (Recovery Time Objective)</div>
                <div>• Failover automático sin intervención</div>
                <div>• Pruebas mensuales de DR</div>
                <div>• Runbooks automatizados</div>
              </div>
            </div>

            {/* Data SLA */}
            <div className="text-center bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl">
              <div className="text-5xl font-bold text-purple-600 mb-4">&lt; 15s</div>
              <h3 className="text-xl font-bold mb-4">Data Recovery</h3>
              <div className="space-y-2 text-sm text-secondary-600">
                <div>• RPO (Recovery Point Objective)</div>
                <div>• Replicación síncrona crítica</div>
                <div>• Backup continuo incremental</div>
                <div>• Integridad verificada 24/7</div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-secondary-50 p-6 rounded-xl max-w-4xl mx-auto">
              <h3 className="font-bold mb-3">Compensación por Incumplimiento de SLA</h3>
              <div className="grid md:grid-cols-4 gap-4 text-sm">
                <div>
                  <div className="font-semibold">99.99% - 99.95%</div>
                  <div className="text-secondary-600">10% crédito mensual</div>
                </div>
                <div>
                  <div className="font-semibold">99.95% - 99.00%</div>
                  <div className="text-secondary-600">25% crédito mensual</div>
                </div>
                <div>
                  <div className="font-semibold">&lt; 99.00%</div>
                  <div className="text-secondary-600">50% crédito mensual</div>
                </div>
                <div>
                  <div className="font-semibold">Falla crítica</div>
                  <div className="text-secondary-600">100% crédito mensual</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring & Response */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Monitoreo Proactivo y Respuesta</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Real-time Monitoring */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                📊
              </div>
              <h3 className="font-semibold text-lg mb-3">Monitoreo en Tiempo Real</h3>
              <ul className="space-y-2 text-secondary-600 text-sm">
                <li>• Métricas de infraestructura cada 30s</li>
                <li>• Health checks de aplicaciones</li>
                <li>• Monitoreo de transacciones</li>
                <li>• Alertas predictivas ML</li>
                <li>• Dashboard ejecutivo 24/7</li>
              </ul>
            </div>

            {/* Incident Response */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                🚨
              </div>
              <h3 className="font-semibold text-lg mb-3">Respuesta a Incidentes</h3>
              <ul className="space-y-2 text-secondary-600 text-sm">
                <li>• Escalación automática &lt; 2 min</li>
                <li>• Equipo dedicado 24/7/365</li>
                <li>• War room virtual instantáneo</li>
                <li>• Comunicación proactiva cliente</li>
                <li>• Post-mortem detallado</li>
              </ul>
            </div>

            {/* Preventive Maintenance */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                🔧
              </div>
              <h3 className="font-semibold text-lg mb-3">Mantenimiento Preventivo</h3>
              <ul className="space-y-2 text-secondary-600 text-sm">
                <li>• Ventanas programadas acordadas</li>
                <li>• Rolling updates sin downtime</li>
                <li>• Patches de seguridad automáticos</li>
                <li>• Capacity planning predictivo</li>
                <li>• Auditorías trimestrales</li>
              </ul>
            </div>

            {/* Performance Optimization */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                ⚡
              </div>
              <h3 className="font-semibold text-lg mb-3">Optimización Continua</h3>
              <ul className="space-y-2 text-secondary-600 text-sm">
                <li>• Análisis de rendimiento diario</li>
                <li>• Tuning automático de DB</li>
                <li>• CDN optimization</li>
                <li>• Resource right-sizing</li>
                <li>• Performance benchmarking</li>
              </ul>
            </div>

            {/* Security Monitoring */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                🛡️
              </div>
              <h3 className="font-semibold text-lg mb-3">Seguridad 24/7</h3>
              <ul className="space-y-2 text-secondary-600 text-sm">
                <li>• SOC con analistas especializados</li>
                <li>• SIEM con correlación avanzada</li>
                <li>• Threat hunting proactivo</li>
                <li>• Vulnerability scanning</li>
                <li>• Compliance monitoring</li>
              </ul>
            </div>

            {/* Business Intelligence */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                📈
              </div>
              <h3 className="font-semibold text-lg mb-3">Business Intelligence</h3>
              <ul className="space-y-2 text-secondary-600 text-sm">
                <li>• KPIs de negocio en tiempo real</li>
                <li>• Reporting ejecutivo automático</li>
                <li>• Trending y forecasting</li>
                <li>• Cost optimization insights</li>
                <li>• ROI metrics detalladas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Casos de Éxito Críticos</h2>
          <div className="space-y-8">
            
            {/* Banking Case */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl text-left">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  🏦
                </div>
                <div>
                  <h3 className="text-xl font-bold">Banco Nacional Líder</h3>
                  <p className="text-secondary-600">Core Banking de 15 millones de clientes</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div>
                  <div className="text-2xl font-bold text-blue-600">99.997%</div>
                  <div className="text-sm text-secondary-600">Uptime promedio 2025</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">2.3s</div>
                  <div className="text-sm text-secondary-600">Tiempo promedio failover</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">0</div>
                  <div className="text-sm text-secondary-600">Pérdida de transacciones</div>
                </div>
              </div>
            </div>

            {/* Healthcare Case */}
            <div className="bg-gradient-to-r from-red-50 to-pink-50 p-8 rounded-2xl text-left">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  🏥
                </div>
                <div>
                  <h3 className="text-xl font-bold">Red Hospitalaria Nacional</h3>
                  <p className="text-secondary-600">120 hospitales conectados</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div>
                  <div className="text-2xl font-bold text-red-600">24/7</div>
                  <div className="text-sm text-secondary-600">Disponibilidad crítica UCIs</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">&lt; 1s</div>
                  <div className="text-sm text-secondary-600">Latencia consulta HCE</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">100%</div>
                  <div className="text-sm text-secondary-600">Integridad de datos</div>
                </div>
              </div>
            </div>

            {/* Government Case */}
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-8 rounded-2xl text-left">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  🏛️
                </div>
                <div>
                  <h3 className="text-xl font-bold">Sistema Electoral Nacional</h3>
                  <p className="text-secondary-600">Elecciones presidenciales 2024</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div>
                  <div className="text-2xl font-bold text-purple-600">80M</div>
                  <div className="text-sm text-secondary-600">Votos procesados</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">0</div>
                  <div className="text-sm text-secondary-600">Interrupciones servicio</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">100%</div>
                  <div className="text-sm text-secondary-600">Transparencia auditada</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-red-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Tu sistema no puede fallar?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Diseñamos infraestructura crítica que garantiza la continuidad de tu operación más importante.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-800 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors">
              Evaluación Gratuita
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