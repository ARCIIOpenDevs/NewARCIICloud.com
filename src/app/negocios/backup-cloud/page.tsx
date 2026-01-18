import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Backup Cloud México | Respaldo Automático desde $199/mes',
  description: '☁️ Backup Cloud México ✅ Respaldo automático 24/7 ✅ Cifrado AES-256 ✅ Recuperación instantánea ✅ Versionado ilimitado ✅ Desde $199/mes',
  keywords: [
    'backup cloud mexico',
    'respaldo en la nube mexico',
    'backup automatico mexico',
    'copia seguridad cloud',
    'backup empresarial mexico'
  ],
};

export default function BackupCloudPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Backup Cloud
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Protege tu información crítica con respaldos automáticos en la nube.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-blue-200 text-sm">Respaldo Automático</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">AES-256</div>
              <div className="text-blue-200 text-sm">Cifrado Militar</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">∞</div>
              <div className="text-blue-200 text-sm">Versiones</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-blue-200 text-sm">Disponibilidad</div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Planes de Backup Cloud</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Personal */}
            <div className="border-2 border-secondary-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Backup Personal</h3>
              <div className="text-4xl font-bold text-primary-600 mb-6">$199<span className="text-lg text-secondary-500">/mes</span></div>
              <div className="text-sm text-secondary-600 mb-6">100 GB almacenamiento</div>
              <ul className="space-y-3 mb-8">
                <li>✅ Respaldo automático</li>
                <li>✅ Cifrado AES-256</li>
                <li>✅ 30 versiones por archivo</li>
                <li>✅ Recuperación web</li>
                <li>✅ Sincronización 2 dispositivos</li>
                <li>✅ Soporte email</li>
              </ul>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Comenzar
              </button>
            </div>

            {/* Business */}
            <div className="border-2 border-primary-500 rounded-2xl p-8 hover:shadow-lg transition-shadow relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm">
                Más Popular
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Backup Business</h3>
              <div className="text-4xl font-bold text-primary-600 mb-6">$599<span className="text-lg text-secondary-500">/mes</span></div>
              <div className="text-sm text-secondary-600 mb-6">1 TB almacenamiento</div>
              <ul className="space-y-3 mb-8">
                <li>✅ Respaldo automático</li>
                <li>✅ Cifrado AES-256</li>
                <li>✅ Versiones ilimitadas</li>
                <li>✅ Recuperación granular</li>
                <li>✅ Múltiples dispositivos</li>
                <li>✅ Dashboard centralizado</li>
                <li>✅ Reportes automáticos</li>
                <li>✅ Soporte prioritario</li>
              </ul>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Comenzar
              </button>
            </div>

            {/* Enterprise */}
            <div className="border-2 border-secondary-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Backup Enterprise</h3>
              <div className="text-4xl font-bold text-primary-600 mb-6">$1,299<span className="text-lg text-secondary-500">/mes</span></div>
              <div className="text-sm text-secondary-600 mb-6">10 TB almacenamiento</div>
              <ul className="space-y-3 mb-8">
                <li>✅ Respaldo continuo</li>
                <li>✅ Cifrado personalizable</li>
                <li>✅ Retención personalizada</li>
                <li>✅ Recuperación bare-metal</li>
                <li>✅ Dispositivos ilimitados</li>
                <li>✅ API integración</li>
                <li>✅ SLA 99.9% uptime</li>
                <li>✅ Soporte 24/7 telefónico</li>
              </ul>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Comenzar
              </button>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-secondary-600 mb-4">¿Necesitas más almacenamiento?</p>
            <button className="text-primary-600 hover:text-primary-700 font-semibold">
              Configurar plan personalizado →
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Características Avanzadas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                🔄
              </div>
              <h3 className="font-semibold text-lg mb-3">Respaldo Continuo</h3>
              <p className="text-secondary-600">Protección automática 24/7 sin intervención manual. Tus archivos se respaldan en tiempo real.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                🔒
              </div>
              <h3 className="font-semibold text-lg mb-3">Cifrado de Extremo a Extremo</h3>
              <p className="text-secondary-600">AES-256 bit encryption. Tus datos están protegidos desde tu dispositivo hasta nuestros servidores.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                📋
              </div>
              <h3 className="font-semibold text-lg mb-3">Versionado Inteligente</h3>
              <p className="text-secondary-600">Mantén múltiples versiones de tus archivos. Recupera versiones anteriores cuando necesites.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                ⚡
              </div>
              <h3 className="font-semibold text-lg mb-3">Recuperación Instantánea</h3>
              <p className="text-secondary-600">Restaura archivos individuales o sistemas completos en minutos, no en horas.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                🌍
              </div>
              <h3 className="font-semibold text-lg mb-3">Replicación Geográfica</h3>
              <p className="text-secondary-600">Tus backups se almacenan en múltiples centros de datos para máxima redundancia.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                📊
              </div>
              <h3 className="font-semibold text-lg mb-3">Reportes Detallados</h3>
              <p className="text-secondary-600">Monitorea el estado de tus backups con reportes automáticos y alertas inteligentes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">¿Qué puedes respaldar?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                💻
              </div>
              <h3 className="font-semibold mb-2">Servidores</h3>
              <p className="text-secondary-600 text-sm">Respaldo completo de servidores Windows, Linux y aplicaciones críticas.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🗄️
              </div>
              <h3 className="font-semibold mb-2">Bases de Datos</h3>
              <p className="text-secondary-600 text-sm">MySQL, PostgreSQL, SQL Server con respaldo transaccional consistente.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                📱
              </div>
              <h3 className="font-semibold mb-2">Móviles</h3>
              <p className="text-secondary-600 text-sm">Sincronización y backup de dispositivos móviles iOS y Android.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🏢
              </div>
              <h3 className="font-semibold mb-2">Oficinas</h3>
              <p className="text-secondary-600 text-sm">Respaldo centralizado de múltiples ubicaciones y equipos de trabajo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Process */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Recuperación en 3 Pasos</h2>
          <p className="text-xl text-secondary-600 mb-12">
            Recupera tu información cuando la necesites, rápido y fácil
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl font-bold text-primary-600 mb-2">1</div>
              <h3 className="font-semibold mb-3">Selecciona</h3>
              <p className="text-secondary-600">Encuentra los archivos o versiones que necesitas recuperar desde el dashboard.</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl font-bold text-primary-600 mb-2">2</div>
              <h3 className="font-semibold mb-3">Recupera</h3>
              <p className="text-secondary-600">Elige recuperar en el lugar original o en una ubicación diferente.</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
              <h3 className="font-semibold mb-3">Verifica</h3>
              <p className="text-secondary-600">Confirma que los datos recuperados están íntegros y funcionando correctamente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Máxima Seguridad Garantizada</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center space-x-4 p-6 bg-secondary-50 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                🏛️
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Cumplimiento Normativo</h3>
                <p className="text-secondary-600 text-sm">SOC 2 Type II, ISO 27001, GDPR compliant</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-secondary-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                🔐
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Cifrado Militar</h3>
                <p className="text-secondary-600 text-sm">AES-256 bit encryption en tránsito y reposo</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-secondary-50 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                🌍
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Redundancia Global</h3>
                <p className="text-secondary-600 text-sm">Múltiples centros de datos en diferentes países</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-secondary-50 rounded-xl">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                🔍
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Auditoría Completa</h3>
                <p className="text-secondary-600 text-sm">Logs detallados de todas las operaciones</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            No esperes a perder tu información
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Configura tu backup automático hoy y duerme tranquilo sabiendo que tu información está protegida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
              Comenzar Prueba Gratuita
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Consultar Experto
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}