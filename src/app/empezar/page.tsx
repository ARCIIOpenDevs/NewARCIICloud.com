import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  CheckCircleIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  StarIcon,
  CreditCardIcon,
  GiftIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Empezar con ARCII Cloud | Registro Gratuito y Setup Inmediato',
  description: 'Crea tu cuenta ARCII Cloud gratis: setup en 5 minutos, migración gratuita, soporte 24/7. Hosting México premium desde $299/mes.',
  keywords: [
    'registro arcii cloud',
    'crear cuenta hosting',
    'hosting mexico registro',
    'empezar hosting',
    'cuenta gratuita hosting',
    'setup hosting rapido'
  ],
  openGraph: {
    title: 'Empezar con ARCII Cloud | Cuenta Gratuita en 5 Minutos',
    description: '🚀 Registro gratuito, setup instantáneo, migración sin costo. Únete a +50K empresas mexicanas.',
    url: 'https://new.arciicloud.com/empezar',
    type: 'website',
  },
};

const plans = [
  {
    name: 'Hosting Eco',
    description: 'Perfecto para sitios web personales y pequeños negocios',
    price: 299,
    originalPrice: 399,
    discount: '25% OFF',
    popular: false,
    features: [
      '20GB SSD almacenamiento',
      '1 sitio web incluido',
      'Email profesional ilimitado',
      'SSL gratuito automático',
      'Backup semanal',
      'Soporte 24/7 en español',
      'WordPress instalación 1-click',
      'Panel cPanel completo'
    ],
    ideal: 'Ideal para: Blogs, sitios personales, pequeños negocios',
    setupTime: '5 minutos',
    migration: 'Gratuita'
  },
  {
    name: 'Hosting Estándar',
    description: 'La elección más popular para empresas en crecimiento',
    price: 599,
    originalPrice: 799,
    discount: '25% OFF',
    popular: true,
    features: [
      '50GB SSD almacenamiento',
      '5 sitios web incluidos',
      'Email profesional ilimitado',
      'SSL gratuito automático',
      'Backup diario automático',
      'Soporte prioritario 24/7',
      'WordPress/WooCommerce optimizado',
      'CDN gratuito incluido',
      'Staging environment',
      'Git integration'
    ],
    ideal: 'Ideal para: E-commerce, agencias, empresas medianas',
    setupTime: '3 minutos',
    migration: 'Gratuita + Experta'
  },
  {
    name: 'Hosting Performance',
    description: 'Máximo rendimiento para sitios de alto tráfico',
    price: 999,
    originalPrice: 1299,
    discount: '23% OFF',
    popular: false,
    features: [
      'Almacenamiento SSD ilimitado',
      'Sitios web ilimitados',
      'Email profesional ilimitado',
      'SSL gratuito automático',
      'Backup diario + hourly',
      'Soporte dedicado 24/7',
      'Performance optimization',
      'CDN premium global',
      'Staging + Development',
      'SSH access completo',
      'WP-CLI incluido',
      'Database optimization'
    ],
    ideal: 'Ideal para: Alto tráfico, aplicaciones críticas',
    setupTime: '1 minuto',
    migration: 'Migración VIP gratuita'
  }
];

const vpsPlans = [
  {
    name: 'VPS Básico',
    price: 899,
    specs: '2GB RAM • 50GB SSD • 2 vCPU',
    description: 'Perfecto para desarrolladores y proyectos pequeños'
  },
  {
    name: 'VPS Profesional',
    price: 1499,
    specs: '6GB RAM • 100GB SSD • 4 vCPU',
    description: 'Ideal para empresas medianas y e-commerce'
  },
  {
    name: 'VPS Empresarial',
    price: 2999,
    specs: '16GB RAM • 300GB SSD • 8 vCPU',
    description: 'Máxima potencia para aplicaciones críticas'
  }
];

const benefits = [
  {
    icon: CheckCircleIcon,
    title: 'Setup en 5 Minutos',
    description: 'Tu sitio estará online en tiempo récord con nuestro proceso automatizado'
  },
  {
    icon: GiftIcon,
    title: 'Migración Gratuita',
    description: 'Nuestros expertos migran tu sitio desde cualquier proveedor sin costo'
  },
  {
    icon: ShieldCheckIcon,
    title: '30 Días Garantía',
    description: 'Prueba sin riesgo con garantía de devolución completa'
  },
  {
    icon: UserGroupIcon,
    title: 'Soporte Humano 24/7',
    description: 'Técnicos reales en español disponibles siempre que los necesites'
  }
];

const testimonials = [
  {
    name: 'María González',
    company: 'TechStart México',
    rating: 5,
    text: 'El proceso de registro fue increíblemente fácil. En 10 minutos ya tenía mi sitio funcionando perfectamente.',
    avatar: '/testimonials/maria-gonzalez.jpg'
  },
  {
    name: 'Carlos Ramírez',
    company: 'E-commerce Pro',
    rating: 5,
    text: 'La migración fue transparente. No perdí ni un segundo de uptime y el soporte fue excepcional.',
    avatar: '/testimonials/carlos-ramirez.jpg'
  },
  {
    name: 'Ana López',
    company: 'Agencia Digital',
    rating: 5,
    text: 'Llevo 3 años con ARCII Cloud. El mejor hosting de México sin duda. Soporte increíble.',
    avatar: '/testimonials/ana-lopez.jpg'
  }
];

const faqs = [
  {
    question: '¿Puedo cambiar de plan después?',
    answer: 'Sí, puedes actualizar o cambiar tu plan en cualquier momento desde tu panel de control. Los cambios se aplican inmediatamente.'
  },
  {
    question: '¿Qué incluye la migración gratuita?',
    answer: 'Incluye la transferencia completa de archivos, bases de datos, emails y configuraciones. Nuestros expertos se encargan de todo.'
  },
  {
    question: '¿Hay contratos o permanencias?',
    answer: 'No hay contratos ni permanencias. Puedes cancelar en cualquier momento sin penalizaciones.'
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos tarjetas de crédito/débito, transferencias bancarias, PayPal y OXXO. Facturación automática disponible.'
  },
  {
    question: '¿Cuánto tiempo toma activar mi cuenta?',
    answer: 'Tu cuenta se activa instantáneamente. Recibirás los datos de acceso por email en menos de 2 minutos.'
  }
];

export default function EmpezarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Empieza Ahora<br />
              <span className="text-yellow-300">en Solo 5 Minutos</span>
            </h1>
            <p className="text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Únete a más de 50,000 empresas mexicanas que confían en ARCII Cloud. 
              Setup instantáneo, migración gratuita y soporte humano 24/7.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="xl" variant="secondary" asChild>
                <Link href="#planes">
                  Ver Planes de Hosting
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-600" asChild>
                <Link href="#vps">
                  Explorar VPS Cloud
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center justify-center gap-8 text-sm text-primary-200">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-4 w-4" />
                <span>Setup en 5 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <GiftIcon className="h-4 w-4" />
                <span>Migración gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="h-4 w-4" />
                <span>30 días garantía</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Benefits */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              ¿Por Qué Elegir ARCII Cloud?
            </h2>
            <p className="text-lg text-secondary-600">
              Ventajas únicas que nos convierten en la opción preferida
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-secondary-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Hosting Plans */}
        <section id="planes" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Planes de Hosting Web
            </h2>
            <p className="text-lg text-secondary-600">
              Hosting optimizado para WordPress con todo incluido
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      🏆 MÁS POPULAR
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium">
                      {plan.discount}
                    </span>
                    <div className="text-right">
                      <div className="text-xs text-secondary-400 line-through">
                        ${plan.originalPrice}
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-secondary-900 mb-2">
                    {plan.name}
                  </CardTitle>
                  <p className="text-secondary-600 text-sm mb-4">
                    {plan.description}
                  </p>
                  
                  <div className="text-4xl font-bold text-primary-600 mb-1">
                    ${plan.price}
                    <span className="text-lg font-normal text-secondary-500">/mes</span>
                  </div>
                  <div className="text-sm text-secondary-500">
                    Facturación mensual • Sin permanencia
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-secondary-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-secondary-50 rounded-lg p-4 mb-6">
                    <div className="text-sm font-medium text-secondary-700 mb-2">
                      {plan.ideal}
                    </div>
                    <div className="flex justify-between text-xs text-secondary-600">
                      <span>⚡ Setup: {plan.setupTime}</span>
                      <span>🔄 {plan.migration}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full" 
                    size="lg"
                    variant={plan.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <Link href={`/checkout?plan=hosting-${plan.name.toLowerCase().replace(' ', '-')}`}>
                      Empezar con {plan.name}
                    </Link>
                  </Button>
                  
                  <div className="text-center mt-4">
                    <Link href={`/negocios/hosting-web/${plan.name.toLowerCase().replace(' hosting ', '').replace(' ', '-')}`} className="text-primary-600 hover:underline text-sm">
                      Ver detalles completos →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* VPS Plans Preview */}
        <section id="vps" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              ¿Necesitas Más Potencia? Prueba VPS Cloud
            </h2>
            <p className="text-lg text-secondary-600">
              Servidores virtuales privados con control total
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {vpsPlans.map((plan, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    ${plan.price}
                    <span className="text-lg font-normal text-secondary-500">/mes</span>
                  </div>
                  <div className="text-sm text-primary-600 font-medium mb-4">
                    {plan.specs}
                  </div>
                  <p className="text-secondary-600 text-sm mb-6">
                    {plan.description}
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/negocios/vps-cloud/${plan.name.toLowerCase().replace('vps ', '')}`}>
                      Ver Detalles VPS
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-lg text-secondary-600">
              Testimonios reales de empresas que ya transformaron su presencia digital
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-secondary-700 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-secondary-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-secondary-600">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-secondary-600">
              Respuestas rápidas a las dudas más comunes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-secondary-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-secondary-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section>
          <Card className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                🚀 ¿Listo para Transformar tu Presencia Digital?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                Únete a más de 50,000 empresas mexicanas que ya disfrutan de hosting 
                premium con soporte humano 24/7. Tu sitio estará online en 5 minutos.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="xl" variant="secondary" asChild>
                  <Link href="#planes">
                    Empezar por $299/mes
                  </Link>
                </Button>
                
                <Button size="xl" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-600" asChild>
                  <Link href="/contacto">
                    Hablar con Especialista
                  </Link>
                </Button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-yellow-300 mb-1">5 min</div>
                    <div className="text-xs text-primary-200">Setup completo</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-300 mb-1">24/7</div>
                    <div className="text-xs text-primary-200">Soporte humano</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-300 mb-1">30 días</div>
                    <div className="text-xs text-primary-200">Garantía total</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}