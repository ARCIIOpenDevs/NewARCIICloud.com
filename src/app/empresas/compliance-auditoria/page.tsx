import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compliance & Auditoría México | Certificaciones SOC2, ISO27001, PCI DSS',
  description: '📋 Compliance & auditoría México ✅ SOC2 Type II ✅ ISO 27001 ✅ PCI DSS ✅ LGPD ✅ Auditorías continuas ✅ Reportes automáticos',
  keywords: [
    'compliance mexico',
    'auditoria mexico',
    'soc2 mexico',
    'iso27001 mexico',
    'pci dss mexico',
    'lgpd mexico',
    'certificaciones seguridad'
  ],
};

export default function ComplianceAuditoriaPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-800 to-purple-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Compliance & Auditoría
          </h1>
          <p className="text-xl text-indigo-200 mb-8">
            Certificaciones internacionales y cumplimiento normativo para tu tranquilidad empresarial.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">SOC 2</div>
              <div className="text-indigo-200 text-sm">Type II Certified</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">ISO</div>
              <div className="text-indigo-200 text-sm">27001 Certified</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">PCI</div>
              <div className="text-indigo-200 text-sm">DSS Level 1</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">100+</div>
              <div className="text-indigo-200 text-sm">Controles Activos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Certificaciones y Estándares</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* SOC 2 Type II */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">SOC</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">SOC 2 Type II</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Security - Protección contra acceso no autorizado
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Availability - Sistemas disponibles según acordado
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Processing Integrity - Procesamiento completo y preciso
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Confidentiality - Información confidencial protegida
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Privacy - Información personal según políticas
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="text-sm text-blue-800">
                  <strong>Auditoría:</strong> Anual por firma independiente<br/>
                  <strong>Vigencia:</strong> Renovada cada 12 meses<br/>
                  <strong>Alcance:</strong> Toda la infraestructura cloud
                </div>
              </div>
            </div>

            {/* ISO 27001 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">ISO</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">ISO 27001:2022</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  ISMS - Sistema gestión seguridad información
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Risk Management - Gestión integral de riesgos
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Asset Management - Control de activos IT
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Access Control - Gestión de accesos granular
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Incident Response - Respuesta a incidentes
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="text-sm text-green-800">
                  <strong>Certificación:</strong> Bureau Veritas<br/>
                  <strong>Vigencia:</strong> 3 años con auditorías anuales<br/>
                  <strong>Alcance:</strong> Operaciones y desarrollo
                </div>
              </div>
            </div>

            {/* PCI DSS */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl border border-red-100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-red-600">PCI</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">PCI DSS Level 1</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Network Security - Firewall y segmentación
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Data Protection - Protección datos tarjetahabientes
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Vulnerability Management - Gestión vulnerabilidades
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Access Control - Acceso restringido por negocio
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Monitoring - Monitoreo y testing regular
                </div>
              </div>
              <div className="mt-6 p-4 bg-red-50 rounded-lg">
                <div className="text-sm text-red-800">
                  <strong>QSA:</strong> Qualified Security Assessor<br/>
                  <strong>Validación:</strong> Trimestral ASV scanning<br/>
                  <strong>Alcance:</strong> Entorno de datos de tarjetas
                </div>
              </div>
            </div>

            {/* LGPD */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🇲🇽</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">LGPD México</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Aviso de Privacidad - Transparente y accesible
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Consentimiento - Libre, específico e informado
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Derechos ARCO - Acceso, rectificación, cancelación, oposición
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Transferencias - Controles para terceros países
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Breach Notification - Notificación violación datos
                </div>
              </div>
              <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                <div className="text-sm text-purple-800">
                  <strong>DPO:</strong> Data Protection Officer certificado<br/>
                  <strong>Registro:</strong> INAI (Instituto Nacional de Transparencia)<br/>
                  <strong>Alcance:</strong> Datos personales de mexicanos
                </div>
              </div>
            </div>

            {/* HIPAA */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-100">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">HIPAA Ready</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  PHI Protection - Información salud protegida
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  BAA Support - Business Associate Agreement
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Encryption - Cifrado datos en reposo y tránsito
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Audit Logs - Trazabilidad completa accesos
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Risk Assessment - Evaluación riesgos continua
                </div>
              </div>
              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <div className="text-sm text-orange-800">
                  <strong>Certificación:</strong> Third-party validated<br/>
                  <strong>BAA:</strong> Disponible para covered entities<br/>
                  <strong>Alcance:</strong> Infraestructura healthcare
                </div>
              </div>
            </div>

            {/* Additional Frameworks */}
            <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-8 rounded-2xl border border-gray-100">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Marcos Adicionales</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                  NIST Cybersecurity Framework
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                  COBIT 2019 IT Governance
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                  COSO Internal Control Framework
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                  ITIL 4 Service Management
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                  CSA Cloud Controls Matrix
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-800">
                  <strong>Implementación:</strong> Basada en mejores prácticas<br/>
                  <strong>Revisión:</strong> Anual con mejora continua<br/>
                  <strong>Documentación:</strong> Políticas y procedimientos
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Process */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Proceso de Auditoría Continua</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Planificación</h3>
              <p className="text-secondary-600 text-sm">Definición de alcance, objetivos y criterios de auditoría basados en estándares aplicables.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Ejecución</h3>
              <p className="text-secondary-600 text-sm">Recolección de evidencias, testing de controles y evaluación de efectividad operacional.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Reporte</h3>
              <p className="text-secondary-600 text-sm">Documentación de hallazgos, evaluación de riesgos y recomendaciones de mejora.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Seguimiento</h3>
              <p className="text-secondary-600 text-sm">Implementación de acciones correctivas y monitoreo continuo de mejoras.</p>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8">Cronograma Anual de Auditorías</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="font-semibold text-blue-800 mb-2">Q1</div>
                <div className="text-sm text-secondary-600">
                  • SOC 2 Type II Fieldwork<br/>
                  • PCI DSS ASV Scan<br/>
                  • ISO 27001 Internal Audit
                </div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="font-semibold text-green-800 mb-2">Q2</div>
                <div className="text-sm text-secondary-600">
                  • LGPD Assessment<br/>
                  • Penetration Testing<br/>
                  • Control Self-Assessment
                </div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="font-semibold text-purple-800 mb-2">Q3</div>
                <div className="text-sm text-secondary-600">
                  • ISO 27001 Surveillance<br/>
                  • Business Continuity Test<br/>
                  • Third-party Risk Review
                </div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="font-semibold text-orange-800 mb-2">Q4</div>
                <div className="text-sm text-secondary-600">
                  • SOC 2 Management Letter<br/>
                  • Annual Risk Assessment<br/>
                  • Policy Review & Update
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Controls Framework */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Marco de Controles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Technical Controls */}
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  🛡️
                </div>
                Controles Técnicos
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Seguridad de Red</h4>
                  <ul className="text-sm text-secondary-600 space-y-1">
                    <li>• Firewalls next-generation</li>
                    <li>• IDS/IPS monitoring</li>
                    <li>• Network segmentation</li>
                    <li>• VPN site-to-site</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Protección de Datos</h4>
                  <ul className="text-sm text-secondary-600 space-y-1">
                    <li>• Encryption AES-256</li>
                    <li>• Key management HSM</li>
                    <li>• DLP data classification</li>
                    <li>• Backup encryption</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Gestión Identidades</h4>
                  <ul className="text-sm text-secondary-600 space-y-1">
                    <li>• Multi-factor authentication</li>
                    <li>• Privileged access management</li>
                    <li>• Single sign-on (SSO)</li>
                    <li>• Identity governance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Administrative Controls */}
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  📋
                </div>
                Controles Administrativos
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Políticas y Procedimientos</h4>
                  <ul className="text-sm text-secondary-600 space-y-1">
                    <li>• Information security policy</li>
                    <li>• Incident response plan</li>
                    <li>• Change management</li>
                    <li>• Vendor management</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Recursos Humanos</h4>
                  <ul className="text-sm text-secondary-600 space-y-1">
                    <li>• Background screening</li>
                    <li>• Security awareness training</li>
                    <li>• Roles and responsibilities</li>
                    <li>• Termination procedures</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Gestión de Riesgos</h4>
                  <ul className="text-sm text-secondary-600 space-y-1">
                    <li>• Risk assessment annual</li>
                    <li>• Business impact analysis</li>
                    <li>• Treatment plans</li>
                    <li>• Risk monitoring KPIs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Physical Controls */}
            <div className="bg-purple-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  🏢
                </div>
                Controles Físicos
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Seguridad Perimetral</h4>
                  <ul className="text-sm text-secondary-600 space-y-1">
                    <li>• Cercado perimetral seguro</li>
                    <li>• Puntos de control acceso</li>
                    <li>• CCTV con grabación</li>
                    <li>• Detección de intrusión</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Control de Acceso</h4>
                  <ul className="text-sm text-secondary-600 space-y-1">
                    <li>• Biometric authentication</li>
                    <li>• Badge access system</li>
                    <li>• Visitor escort policy</li>
                    <li>• Access logging 24/7</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Protección Ambiental</h4>
                  <ul className="text-sm text-secondary-600 space-y-1">
                    <li>• Fire suppression system</li>
                    <li>• Environmental monitoring</li>
                    <li>• Power redundancy N+1</li>
                    <li>• Emergency procedures</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting Dashboard */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Dashboard de Compliance</h2>
          <p className="text-xl text-secondary-600 mb-12">
            Visibilidad en tiempo real del estado de cumplimiento y controles
          </p>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">98.2%</div>
                <div className="text-sm text-secondary-600">Control Effectiveness</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">127</div>
                <div className="text-sm text-secondary-600">Active Controls</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">3</div>
                <div className="text-sm text-secondary-600">Open Findings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">15</div>
                <div className="text-sm text-secondary-600">Days Avg Resolution</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-bold text-lg mb-4">Certificaciones Vigentes</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg flex justify-between items-center">
                  <span className="font-semibold">SOC 2 Type II</span>
                  <span className="text-green-600 text-sm">Válido hasta Dic 2026</span>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg flex justify-between items-center">
                  <span className="font-semibold">ISO 27001:2022</span>
                  <span className="text-blue-600 text-sm">Válido hasta Mar 2027</span>
                </div>
                <div className="bg-red-50 p-4 rounded-lg flex justify-between items-center">
                  <span className="font-semibold">PCI DSS Level 1</span>
                  <span className="text-red-600 text-sm">Válido hasta Jun 2026</span>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg flex justify-between items-center">
                  <span className="font-semibold">LGPD Assessment</span>
                  <span className="text-purple-600 text-sm">Revisión anual</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-indigo-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Necesitas cumplir con regulaciones específicas?
          </h2>
          <p className="text-xl text-indigo-200 mb-8">
            Nuestro equipo de compliance te ayuda a navegar los requisitos normativos de tu industria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-800 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
              Assessment Gratuito
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Descargar Certificados
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}