'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  StarIcon,
  BuildingOfficeIcon,
  ShoppingBagIcon,
  ChartBarIcon,
  ClockIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import { cn } from '@/lib/utils';

const caseStudies = [
  {
    id: 'fashion-store',
    company: 'ModaStyle',
    industry: 'Moda & Lifestyle',
    logo: 'M',
    website: 'modastyle.com.mx',
    challenge: 'Tienda de moda con 5,000+ productos que tardaba más de 8 segundos en cargar',
    solution: 'Migración a hosting especializado + optimización WooCommerce + CDN global',
    results: {
      performance: '+78%',
      conversion: '+34%',
      revenue: '+156%',
      loading: '2.1s'
    },
    testimonial: {
      text: "Después de migrar a ARCIICloud, nuestras ventas online se duplicaron en 3 meses. El sitio es increíblemente rápido y ya no perdemos clientes por lentitud.",
      author: "María González",
      role: "Directora eCommerce"
    },
    details: [
      'Catálogo de 5,000+ productos de moda',
      'Peak de 10,000 visitantes concurrentes',
      'Integración con sistema de inventario',
      'Múltiples métodos de pago',
      'Envíos a toda Latinoamérica'
    ],
    color: 'from-pink-500 to-purple-500',
    stats: {
      monthlyVisitors: '450K',
      avgOrderValue: '$1,250',
      conversionRate: '3.8%'
    }
  },
  {
    id: 'electronics',
    company: 'TechnoWorld',
    industry: 'Tecnología & Electrónicos',
    logo: 'T',
    website: 'technoworld.com',
    challenge: 'Alto tráfico durante ofertas especiales causaba caídas del sitio',
    solution: 'Infraestructura escalable + cache inteligente + monitoreo 24/7',
    results: {
      performance: '+92%',
      conversion: '+41%',
      revenue: '+203%',
      loading: '1.8s'
    },
    testimonial: {
      text: "Durante el Black Friday manejamos 50,000 usuarios simultáneos sin ningún problema. ARCIICloud nos dio la confianza para hacer grandes campañas.",
      author: "Carlos Mendoza",
      role: "CTO"
    },
    details: [
      '15,000+ productos tecnológicos',
      'Picos de 50K usuarios simultáneos',
      'Integración con 3 proveedores',
      'Sistema de reviews complejo',
      'Chat en vivo integrado'
    ],
    color: 'from-blue-500 to-cyan-500',
    stats: {
      monthlyVisitors: '1.2M',
      avgOrderValue: '$2,800',
      conversionRate: '4.2%'
    }
  },
  {
    id: 'marketplace',
    company: 'AgroMarket',
    industry: 'Marketplace B2B',
    logo: 'A',
    website: 'agromarket.com',
    challenge: 'Marketplace con 200+ vendedores necesitaba solución robusta y escalable',
    solution: 'Servidor dedicado + arquitectura marketplace + panel multivendedor',
    results: {
      performance: '+65%',
      conversion: '+28%',
      revenue: '+189%',
      loading: '2.4s'
    },
    testimonial: {
      text: "ARCIICloud entendió perfectamente nuestras necesidades de marketplace. La plataforma es estable y el soporte técnico excepcional.",
      author: "Ana Rodríguez",
      role: "Fundadora"
    },
    details: [
      'Marketplace con 200+ vendedores',
      '25,000+ productos agrícolas',
      'Sistema de comisiones automático',
      'Pagos distribuidos',
      'Cobertura nacional México'
    ],
    color: 'from-green-500 to-emerald-500',
    stats: {
      monthlyVisitors: '680K',
      avgOrderValue: '$4,500',
      conversionRate: '2.9%'
    }
  }
];

export function CaseStudiesSection() {
  return (
    <section className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
            Casos de Éxito Reales
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Descubre cómo hemos ayudado a tiendas online a multiplicar sus ventas 
            con nuestras soluciones de hosting especializadas
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card key={study.id} className="overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Side - Content */}
                <CardContent className="p-8 lg:p-12">
                  {/* Company Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${study.color} flex items-center justify-center text-white font-bold text-xl`}>
                      {study.logo}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900">{study.company}</h3>
                      <p className="text-secondary-600">{study.industry}</p>
                      <p className="text-sm text-primary-600">{study.website}</p>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-2">Desafío:</h4>
                      <p className="text-secondary-700">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-2">Solución:</h4>
                      <p className="text-secondary-700">{study.solution}</p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-secondary-900 mb-3">Características del proyecto:</h4>
                    <ul className="space-y-2">
                      {study.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-secondary-700">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-primary-50 rounded-lg p-6 border-l-4 border-primary-500">
                    <blockquote className="text-secondary-800 mb-4">
                      "{study.testimonial.text}"
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <UserIcon className="h-8 w-8 text-primary-500" />
                      <div>
                        <div className="font-semibold text-secondary-900">{study.testimonial.author}</div>
                        <div className="text-sm text-secondary-600">{study.testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>

                {/* Right Side - Results */}
                <div className="bg-gradient-to-br from-secondary-900 to-secondary-800 p-8 lg:p-12 text-white">
                  <h4 className="text-2xl font-bold mb-8 text-center">
                    Resultados Obtenidos
                  </h4>

                  {/* Primary Results */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent-400 mb-2">
                        {study.results.performance}
                      </div>
                      <div className="text-sm text-secondary-300">Mejor rendimiento</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-success-400 mb-2">
                        {study.results.conversion}
                      </div>
                      <div className="text-sm text-secondary-300">Más conversiones</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-400 mb-2">
                        {study.results.revenue}
                      </div>
                      <div className="text-sm text-secondary-300">Aumento ingresos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400 mb-2">
                        {study.results.loading}
                      </div>
                      <div className="text-sm text-secondary-300">Tiempo de carga</div>
                    </div>
                  </div>

                  {/* Business Metrics */}
                  <div className="border-t border-secondary-700 pt-6 mb-8">
                    <h5 className="font-semibold mb-4 text-center">Métricas Actuales</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-secondary-300">Visitantes/mes</span>
                        <span className="font-semibold">{study.stats.monthlyVisitors}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-secondary-300">Ticket promedio</span>
                        <span className="font-semibold">{study.stats.avgOrderValue}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-secondary-300">Tasa conversión</span>
                        <span className="font-semibold">{study.stats.conversionRate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Timeframe */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <ClockIcon className="h-5 w-5 text-accent-400" />
                      <span className="text-sm text-secondary-300">Resultados obtenidos en</span>
                    </div>
                    <div className="text-lg font-bold">3-6 meses</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
            <CardContent className="py-12">
              <h3 className="text-2xl font-bold mb-4">
                ¿Tu Tienda Podría Ser la Siguiente Historia de Éxito?
              </h3>
              <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
                Agenda una consultoría gratuita y descubre cómo podemos ayudarte 
                a multiplicar las ventas de tu tienda online
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  Solicitar Consultoría Gratuita
                </Button>
                <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
                  Ver Más Casos de Éxito
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}