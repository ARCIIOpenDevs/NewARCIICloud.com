import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programa de Afiliados | ARCIICloud',
  description: 'Únete al programa de afiliados de ARCIICloud y genera ingresos pasivos refiriendo clientes. Comisiones hasta 30%, dashboard en tiempo real y pagos mensuales.',
  keywords: 'afiliados, programa de referidos, comisiones hosting, ganar dinero online, marketing de afiliados',
  openGraph: {
    title: 'Programa de Afiliados | ARCIICloud',
    description: 'Genera ingresos pasivos refiriendo clientes a ARCIICloud. Comisiones hasta 30% y pagos mensuales.',
    type: 'website',
  },
  alternates: {
    canonical: '/afiliados',
  },
};

const commissionTiers = [
  {
    tier: 'Afiliado Bronce',
    icon: '🥉',
    referrals: '1-9 referidos',
    commission: '15%',
    bonus: 'N/A',
    color: 'from-amber-400 to-yellow-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200'
  },
  {
    tier: 'Afiliado Plata',
    icon: '🥈',
    referrals: '10-24 referidos',
    commission: '20%',
    bonus: '$500 Bono',
    color: 'from-gray-400 to-gray-600',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200'
  },
  {
    tier: 'Afiliado Oro',
    icon: '🥇',
    referrals: '25-49 referidos',
    commission: '25%',
    bonus: '$1,500 Bono',
    color: 'from-yellow-400 to-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200'
  },
  {
    tier: 'Afiliado Elite',
    icon: '💎',
    referrals: '50+ referidos',
    commission: '30%',
    bonus: '$5,000 Bono',
    color: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  }
];

const features = [
  {
    icon: '💰',
    title: 'Comisiones Altas',
    description: 'Hasta 30% de comisión recurrente en todas las ventas que generes'
  },
  {
    icon: '📊',
    title: 'Dashboard en Tiempo Real',
    description: 'Seguimiento completo de clicks, conversiones y ganancias'
  },
  {
    icon: '🎯',
    title: 'Material Promocional',
    description: 'Banners, landing pages y contenido optimizado para convertir'
  },
  {
    icon: '💳',
    title: 'Pagos Puntuales',
    description: 'Pagos automáticos cada mes vía transferencia o PayPal'
  },
  {
    icon: '🔗',
    title: 'Enlaces Únicos',
    description: 'Sistema de tracking avanzado con cookies de 90 días'
  },
  {
    icon: '📱',
    title: 'App Mobile',
    description: 'Gestiona tu programa desde cualquier dispositivo'
  }
];

const testimonials = [
  {
    name: 'María González',
    role: 'Bloguer de Tecnología',
    avatar: '/testimonials/maria-gonzalez.jpg',
    earnings: '$2,850',
    text: 'En solo 6 meses he generado $2,850 con el programa de afiliados de ARCIICloud. El dashboard es muy claro y los pagos siempre llegan a tiempo.',
    tier: 'Oro',
    referrals: 34
  },
  {
    name: 'Carlos Mendez',
    role: 'Desarrollador Web',
    avatar: '/testimonials/carlos-mendez.jpg',
    earnings: '$5,240',
    text: 'Como desarrollador web, siempre recomiendo ARCIICloud a mis clientes. Las comisiones han sido un ingreso extra excelente.',
    tier: 'Elite',
    referrals: 67
  },
  {
    name: 'Ana Ruiz',
    role: 'Consultora Marketing',
    avatar: '/testimonials/ana-ruiz.jpg',
    earnings: '$1,420',
    text: 'La calidad del servicio hace que sea muy fácil recomendar ARCIICloud. Los clientes están satisfechos y yo gano comisiones.',
    tier: 'Plata',
    referrals: 18
  }
];

const faqs = [
  {
    question: '¿Cómo funciona el programa de afiliados?',
    answer: 'Te registras, obtienes tu enlace único, compartes ARCIICloud con tu audiencia, y ganas comisión por cada venta que generes. Es así de simple.'
  },
  {
    question: '¿Cuándo y cómo recibo mis pagos?',
    answer: 'Los pagos se procesan automáticamente cada mes, el día 15, vía transferencia bancaria o PayPal. El mínimo de pago es $50.'
  },
  {
    question: '¿Las comisiones son recurrentes?',
    answer: 'Sí, recibes comisión mensual mientras el cliente que referiste mantenga activos sus servicios con nosotros.'
  },
  {
    question: '¿Hay un límite de ganancias?',
    answer: 'No hay límite. Mientras más clientes refistas, más ganas. Los afiliados Elite pueden generar $10,000+ mensuales.'
  },
  {
    question: '¿Qué material promocional proporcionan?',
    answer: 'Banners en múltiples tamaños, landing pages personalizadas, emails templates, contenido para redes sociales y más.'
  },
  {
    question: '¿Puedo promover en cualquier país?',
    answer: 'Sí, ARCIICloud acepta clientes de toda Latinoamérica. Puedes promover en cualquier país de la región.'
  }
];

export default function AfiliadosPage() {
  return (
    <main className="min-h-screen pt-20">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <div className="inline-flex items-center bg-primary-700/50 px-4 py-2 rounded-full mb-6">
                <span className="text-2xl mr-2">💰</span>
                <span className="font-semibold">Programa Elite de Afiliados</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Genera Ingresos
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Pasivos </span>
                Refiriendo Clientes
              </h1>
              
              <p className="text-xl text-primary-100 mb-8">
                Únete a nuestro programa de afiliados y gana hasta <strong>30% de comisión recurrente</strong> por cada cliente que refistas. 
                Miles de afiliados ya están generando ingresos pasivos con ARCIICloud.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-yellow-500 text-yellow-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-colors">
                  🚀 Registrarse Gratis
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
                  📊 Ver Demo del Dashboard
                </button>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✅</span>
                  <span>Sin costos de registro</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✅</span>
                  <span>Pagos automáticos</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✅</span>
                  <span>Material incluido</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-center">🏆 Calculadora de Ganancias</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Clientes Referidos por Mes</label>
                    <input 
                      type="number" 
                      defaultValue={10}
                      className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70"
                      placeholder="Ej: 10"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Valor Promedio por Cliente</label>
                    <input 
                      type="number" 
                      defaultValue={299}
                      className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70"
                      placeholder="Ej: 299"
                    />
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-xl text-center">
                  <p className="text-yellow-900 font-bold text-sm mb-2">Ganancias Mensuales Estimadas</p>
                  <p className="text-3xl font-black text-yellow-900">$597</p>
                  <p className="text-yellow-800 text-sm mt-2">Con comisión del 20% (nivel Plata)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commission Tiers */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-6">
              🎯 Niveles de Comisión
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Mientras más clientes refistas, mayor será tu comisión. Nuestro sistema de niveles 
              te recompensa por tu crecimiento con bonos adicionales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commissionTiers.map((tier, index) => (
              <div key={index} className={`${tier.bgColor} ${tier.borderColor} border-2 p-6 rounded-2xl relative overflow-hidden`}>
                
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{tier.icon}</div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">{tier.tier}</h3>
                  <p className="text-secondary-600 text-sm">{tier.referrals}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-black text-secondary-900 mb-1">{tier.commission}</div>
                    <p className="text-secondary-600 text-sm">Comisión Recurrente</p>
                  </div>
                  
                  {tier.bonus !== 'N/A' && (
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="font-bold text-green-600">{tier.bonus}</div>
                      <p className="text-secondary-600 text-xs">Al alcanzar nivel</p>
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <button className={`w-full bg-gradient-to-r ${tier.color} text-white px-4 py-3 rounded-xl font-bold hover:shadow-lg transition-all`}>
                    Alcanzar Nivel
                  </button>
                </div>

                {/* Decorative background */}
                <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r ${tier.color} rounded-full opacity-20`}></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-white p-6 rounded-2xl shadow-sm border">
              <span className="text-4xl mr-4">🔥</span>
              <div className="text-left">
                <h4 className="font-bold text-secondary-900 mb-1">¡Promoción Especial!</h4>
                <p className="text-secondary-600">Los primeros 100 afiliados obtienen <strong>+5% comisión</strong> los primeros 3 meses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-6">
              ⚡ ¿Por Qué Elegir Nuestro Programa?
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Ofrecemos las mejores condiciones del mercado para que puedas maximizar tus ganancias 
              y crecer tu negocio de afiliados de manera sostenible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-secondary-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">{feature.title}</h3>
                <p className="text-secondary-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-6">
              💪 Historias de Éxito
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Conoce a algunos de nuestros afiliados más exitosos y cómo han logrado generar 
              ingresos consistentes con ARCIICloud.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border">
                
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-900">{testimonial.name}</h4>
                    <p className="text-secondary-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <blockquote className="text-secondary-700 mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                <div className="flex justify-between items-center pt-6 border-t border-secondary-100">
                  <div>
                    <p className="text-2xl font-bold text-green-600">{testimonial.earnings}</p>
                    <p className="text-secondary-500 text-sm">Ganancias totales</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-secondary-900">{testimonial.referrals} referidos</p>
                    <p className="text-sm text-primary-600">Nivel {testimonial.tier}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-colors">
              🏆 Únete a los Exitosos
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-6">
              ❓ Preguntas Frecuentes
            </h2>
            <p className="text-xl text-secondary-600">
              Resolvemos las dudas más comunes sobre nuestro programa de afiliados.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-secondary-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-secondary-900 mb-3">{faq.question}</h3>
                <p className="text-secondary-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="text-6xl mb-6">🚀</div>
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para Empezar a Ganar?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Únete a más de <strong>1,500 afiliados</strong> que ya están generando ingresos pasivos 
            con ARCIICloud. El registro es gratis y puedes empezar hoy mismo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-colors">
              🎯 Registrarse Ahora
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
              📞 Hablar con Asesor
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">$45,000+</div>
              <p className="text-primary-100">Pagado a afiliados este mes</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1,500+</div>
              <p className="text-primary-100">Afiliados activos</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <p className="text-primary-100">Tasa de satisfacción</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}