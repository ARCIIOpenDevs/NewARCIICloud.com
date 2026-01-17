'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  ShoppingBagIcon,
  BuildingStorefrontIcon,
  GlobeAltIcon,
  UserGroupIcon,
  TruckIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/solid';
import { cn, formatCurrency } from '@/lib/utils';

const solutions = [
  {
    id: 'startup',
    title: 'Tienda Nueva',
    subtitle: 'Perfecta para empezar',
    icon: ShoppingBagIcon,
    gradient: 'from-green-400 to-emerald-500',
    price: { monthly: 599, setup: 0 },
    description: 'Todo lo necesario para lanzar tu primera tienda online con éxito',
    features: [
      '1-10 productos iniciales',
      'Diseño responsive incluido',
      'Integración con pagos',
      'SSL y seguridad básica',
      'Soporte en configuración',
      'Training básico incluido',
      'SEO inicial optimizado',
      'Analytics configurado'
    ],
    ideal: 'Emprendedores que quieren validar su idea de negocio',
    included: [
      'Instalación completa',
      'Tema premium',
      'Plugins esenciales',
      '1 mes de soporte gratis'
    ]
  },
  {
    id: 'growing',
    title: 'Tienda en Crecimiento',
    subtitle: 'Escala tu negocio',
    icon: BuildingStorefrontIcon,
    gradient: 'from-blue-400 to-cyan-500',
    price: { monthly: 999, setup: 199 },
    popular: true,
    description: 'Herramientas avanzadas para tiendas que buscan crecer rápidamente',
    features: [
      '10-500 productos',
      'Múltiples métodos de pago',
      'Integración con inventario',
      'Email marketing incluido',
      'Programas de fidelización',
      'Análisis de conversión',
      'Soporte prioritario',
      'Optimización continua'
    ],
    ideal: 'Tiendas con ventas establecidas que buscan acelerar crecimiento',
    included: [
      'Migración profesional',
      'Optimización de conversión',
      'Integración con CRM',
      'Soporte dedicado 24/7'
    ]
  },
  {
    id: 'enterprise',
    title: 'Tienda Corporativa',
    subtitle: 'Máximo rendimiento',
    icon: GlobeAltIcon,
    gradient: 'from-purple-400 to-pink-500',
    price: { monthly: 2499, setup: 499 },
    description: 'Solución enterprise para grandes catálogos y alto tráfico',
    features: [
      '500+ productos ilimitados',
      'Múltiples tiendas/idiomas',
      'Integración ERP/SAP',
      'API personalizada',
      'CDN global avanzado',
      'Servidor dedicado',
      'Account manager dedicado',
      'SLA 99.99% garantizado'
    ],
    ideal: 'Empresas establecidas con operaciones complejas',
    included: [
      'Consultoría estratégica',
      'Desarrollo personalizado',
      'Integración completa',
      'Soporte white-glove'
    ]
  },
  {
    id: 'b2b',
    title: 'eCommerce B2B',
    subtitle: 'Ventas empresariales',
    icon: UserGroupIcon,
    gradient: 'from-indigo-400 to-purple-500',
    price: { monthly: 1499, setup: 299 },
    description: 'Solución especializada para ventas empresa a empresa',
    features: [
      'Catálogos por cliente',
      'Precios personalizados',
      'Órdenes de compra',
      'Aprobaciones de compra',
      'Integración con CRM',
      'Portal de clientes',
      'Facturación avanzada',
      'Reportes personalizados'
    ],
    ideal: 'Distribuidores, mayoristas y proveedores industriales',
    included: [
      'Portal B2B completo',
      'Integración ERP',
      'Configuración personalizada',
      'Training para equipo'
    ]
  },
  {
    id: 'marketplace',
    title: 'Marketplace',
    subtitle: 'Multi-vendedor',
    icon: TruckIcon,
    gradient: 'from-orange-400 to-red-500',
    price: { monthly: 1999, setup: 399 },
    description: 'Plataforma completa para marketplace con múltiples vendedores',
    features: [
      'Múltiples vendedores',
      'Comisiones automáticas',
      'Panel de vendedores',
      'Sistema de reviews',
      'Gestión de disputas',
      'Analytics por vendedor',
      'Pagos distribuidos',
      'Moderación de contenido'
    ],
    ideal: 'Emprendedores que quieren crear un marketplace vertical',
    included: [
      'Plataforma marketplace',
      'Onboarding vendedores',
      'Sistema de pagos',
      'Moderación inicial'
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile Commerce',
    subtitle: 'Experiencia móvil',
    icon: DevicePhoneMobileIcon,
    gradient: 'from-pink-400 to-rose-500',
    price: { monthly: 1299, setup: 249 },
    description: 'Optimización extrema para compras desde dispositivos móviles',
    features: [
      'PWA (Progressive Web App)',
      'Checkout en 1 click',
      'Apple Pay / Google Pay',
      'Notificaciones push',
      'Geolocalización',
      'Modo offline básico',
      'Analytics móvil',
      'Optimización iOS/Android'
    ],
    ideal: 'Tiendas con +60% de tráfico móvil',
    included: [
      'Desarrollo PWA',
      'Optimización móvil',
      'Testing en dispositivos',
      'App store optimization'
    ]
  }
];

export function SolutionsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
            Soluciones para Cada Tipo de Negocio
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            No todas las tiendas online son iguales. Ofrecemos soluciones especializadas 
            para diferentes modelos de negocio y necesidades específicas
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution) => (
            <Card 
              key={solution.id} 
              className={cn(
                "relative overflow-hidden group hover:shadow-xl transition-all duration-300",
                solution.popular && "border-primary-500 shadow-lg"
              )}
            >
              {/* Popular Badge */}
              {solution.popular && (
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Más Popular
                </div>
              )}

              <CardHeader>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${solution.gradient} flex items-center justify-center`}>
                    <solution.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-secondary-900 mb-1">
                      {solution.title}
                    </h3>
                    <p className="text-secondary-600 text-sm mb-3">
                      {solution.subtitle}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-primary-600">
                        {formatCurrency(solution.price.monthly)}
                      </span>
                      <span className="text-secondary-500">/mes</span>
                      {solution.price.setup > 0 && (
                        <span className="text-xs text-secondary-500 ml-2">
                          +{formatCurrency(solution.price.setup)} setup
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <p className="text-secondary-700 mb-4">
                  {solution.description}
                </p>

                <div className="bg-secondary-50 rounded-lg p-3 mb-4">
                  <p className="text-sm text-secondary-800">
                    <strong>Ideal para:</strong> {solution.ideal}
                  </p>
                </div>
              </CardHeader>

              <CardContent>
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-secondary-900 mb-3">
                    Características principales:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {solution.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span className="text-secondary-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Included */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-secondary-900 mb-3">
                    Incluye sin costo adicional:
                  </h4>
                  <div className="space-y-1">
                    {solution.included.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-success-500 rounded-full flex-shrink-0"></div>
                        <span className="text-success-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-2">
                  <Button 
                    variant={solution.popular ? "gradient" : "default"} 
                    className="flex-1" 
                    size="sm"
                  >
                    Comenzar Ahora
                  </Button>
                  <Button variant="outline" size="sm">
                    Más Info
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Solution */}
        <Card className="bg-gradient-to-r from-secondary-900 to-secondary-800 text-white">
          <CardContent className="text-center py-12">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                ¿Necesitas una Solución Personalizada?
              </h3>
              <p className="text-lg text-secondary-200 mb-8">
                Cada negocio es único. Si ninguna de nuestras soluciones se adapta perfectamente 
                a tus necesidades, creamos una solución completamente personalizada para ti.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-400 mb-2">Desde $1,000</div>
                  <div className="text-secondary-300">Desarrollo personalizado</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-400 mb-2">30-60 días</div>
                  <div className="text-secondary-300">Tiempo de desarrollo</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-400 mb-2">1 año</div>
                  <div className="text-secondary-300">Soporte incluido</div>
                </div>
              </div>

              <Button variant="secondary" size="lg">
                Solicitar Consultoría Gratuita
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}