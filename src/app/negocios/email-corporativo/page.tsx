import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Email Corporativo México | Cuentas Profesionales desde $99/mes',
  description: '📧 Email corporativo México con tu dominio. IMAP, SMTP, webmail, calendario, contactos. Antispam avanzado, sincronización móvil. ¡Desde $99/mes por cuenta!',
  keywords: [
    'email corporativo mexico',
    'correo empresarial mexico',
    'email profesional mexico',
    'webmail mexico',
    'email dominio propio',
    'outlook corporativo',
    'gmail empresarial mexico'
  ],
};

export default function EmailCorporativoPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Email Corporativo
          </h1>
          <p className="text-xl text-purple-100 mb-8">
            Correo profesional con tu dominio. Más credibilidad, mejor imagen empresarial.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-purple-200 text-sm">Uptime Email</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">25GB</div>
              <div className="text-purple-200 text-sm">Por Cuenta</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-purple-200 text-sm">Antispam</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">IMAP</div>
              <div className="text-purple-200 text-sm">Sincronización</div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Planes de Email Corporativo</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Básico */}
            <div className="border-2 border-secondary-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Email Básico</h3>
              <div className="text-4xl font-bold text-primary-600 mb-6">$99<span className="text-lg text-secondary-500">/mes</span></div>
              <div className="text-sm text-secondary-600 mb-6">por cuenta</div>
              <ul className="space-y-3 mb-8">
                <li>✅ 10 GB almacenamiento</li>
                <li>✅ Webmail moderno</li>
                <li>✅ IMAP/POP3/SMTP</li>
                <li>✅ Antispam básico</li>
                <li>✅ Sincronización móvil</li>
                <li>✅ Soporte email</li>
              </ul>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Comenzar
              </button>
            </div>

            {/* Profesional */}
            <div className="border-2 border-primary-500 rounded-2xl p-8 hover:shadow-lg transition-shadow relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm">
                Recomendado
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Email Profesional</h3>
              <div className="text-4xl font-bold text-primary-600 mb-6">$199<span className="text-lg text-secondary-500">/mes</span></div>
              <div className="text-sm text-secondary-600 mb-6">por cuenta</div>
              <ul className="space-y-3 mb-8">
                <li>✅ 25 GB almacenamiento</li>
                <li>✅ Webmail premium</li>
                <li>✅ IMAP/POP3/SMTP</li>
                <li>✅ Antispam avanzado</li>
                <li>✅ Calendario compartido</li>
                <li>✅ Contactos sincronizados</li>
                <li>✅ Archivos adjuntos 50MB</li>
                <li>✅ Soporte prioritario</li>
              </ul>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Comenzar
              </button>
            </div>

            {/* Enterprise */}
            <div className="border-2 border-secondary-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Email Enterprise</h3>
              <div className="text-4xl font-bold text-primary-600 mb-6">$399<span className="text-lg text-secondary-500">/mes</span></div>
              <div className="text-sm text-secondary-600 mb-6">por cuenta</div>
              <ul className="space-y-3 mb-8">
                <li>✅ 100 GB almacenamiento</li>
                <li>✅ Webmail empresarial</li>
                <li>✅ Exchange compatible</li>
                <li>✅ Antispam premium</li>
                <li>✅ Calendario empresarial</li>
                <li>✅ Directorio global</li>
                <li>✅ Archivos adjuntos 100MB</li>
                <li>✅ Soporte telefónico 24/7</li>
                <li>✅ Backup avanzado</li>
              </ul>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Comenzar
              </button>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-secondary-600 mb-4">¿Necesitas más de 10 cuentas?</p>
            <button className="text-primary-600 hover:text-primary-700 font-semibold">
              Solicitar precio empresarial →
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Características Incluidas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                📱
              </div>
              <h3 className="font-semibold text-lg mb-3">Webmail Responsive</h3>
              <p className="text-secondary-600">Accede a tu email desde cualquier dispositivo con nuestra interfaz web moderna y responsive.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                🛡️
              </div>
              <h3 className="font-semibold text-lg mb-3">Antispam Avanzado</h3>
              <p className="text-secondary-600">Filtrado inteligente que bloquea spam, virus y malware automáticamente las 24 horas.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                🔄
              </div>
              <h3 className="font-semibold text-lg mb-3">Sincronización Total</h3>
              <p className="text-secondary-600">IMAP para sincronizar emails, calendario y contactos en todos tus dispositivos automáticamente.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                📅
              </div>
              <h3 className="font-semibold text-lg mb-3">Calendario Compartido</h3>
              <p className="text-secondary-600">Comparte calendarios con tu equipo, programa reuniones y recibe notificaciones automáticas.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                👥
              </div>
              <h3 className="font-semibold text-lg mb-3">Libreta de Contactos</h3>
              <p className="text-secondary-600">Gestiona contactos de manera centralizada con sincronización automática entre dispositivos.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                🔒
              </div>
              <h3 className="font-semibold text-lg mb-3">Encriptación SSL/TLS</h3>
              <p className="text-secondary-600">Todas las comunicaciones protegidas con encriptación SSL/TLS para máxima seguridad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compatible Clients */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Compatible con tus clientes favoritos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                📧
              </div>
              <span className="text-sm text-secondary-600">Outlook</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-2">
                ✉️
              </div>
              <span className="text-sm text-secondary-600">Gmail</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
                🍎
              </div>
              <span className="text-sm text-secondary-600">Apple Mail</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                🦅
              </div>
              <span className="text-sm text-secondary-600">Thunderbird</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                📱
              </div>
              <span className="text-sm text-secondary-600">Android</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                📨
              </div>
              <span className="text-sm text-secondary-600">iOS Mail</span>
            </div>
          </div>
          <p className="text-secondary-600 mt-8">
            Configura tu email corporativo en cualquier cliente con nuestras guías paso a paso.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Listo para profesionalizar tu email?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Configura tu email corporativo en minutos. ¡Migración gratuita incluida!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
              Comenzar Ahora
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Ver Demo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}