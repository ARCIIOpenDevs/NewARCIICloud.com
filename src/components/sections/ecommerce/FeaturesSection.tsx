'use client';

import { Card, CardContent } from '@/components/ui/Card';
import { 
  BoltIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ClockIcon,
  CpuChipIcon,
  CloudIcon,
  ServerIcon,
  DocumentChartBarIcon,
  UserGroupIcon,
  CogIcon,
} from '@heroicons/react/24/solid';

const features = [
  {
    category: 'Rendimiento',
    icon: BoltIcon,
    color: 'text-accent-500',
    bgColor: 'bg-accent-50',
    items: [
      {
        title: 'Cache Especializado eCommerce',
        description: 'Sistema de cache inteligente que no cachea páginas de carrito, checkout ni cuenta de usuario.',
        icon: CpuChipIcon
      },
      {
        title: 'CDN Global Optimizado',
        description: 'Red de entrega de contenido con 200+ ubicaciones, optimizada para productos e imágenes.',
        icon: GlobeAltIcon
      },
      {
        title: 'Base de Datos Optimizada',
        description: 'Configuración MySQL/MariaDB específica para consultas de productos y transacciones.',
        icon: ServerIcon
      },
      {
        title: 'Compresión Avanzada',
        description: 'Compresión Brotli y GZIP para catálogos grandes con miles de productos.',
        icon: CloudIcon
      }
    ]
  },
  {
    category: 'Seguridad',
    icon: ShieldCheckIcon,
    color: 'text-primary-500',
    bgColor: 'bg-primary-50',
    items: [
      {
        title: 'SSL Certificado Premium',
        description: 'Certificados SSL EV y wildcard incluidos, con instalación automática.',
        icon: ShieldCheckIcon
      },
      {
        title: 'Firewall eCommerce',
        description: 'Protección específica contra ataques a formularios de pago y datos de clientes.',
        icon: ShieldCheckIcon
      },
      {
        title: 'PCI DSS Compliance',
        description: 'Infraestructura certificada para el manejo seguro de datos de tarjetas de crédito.',
        icon: CreditCardIcon
      },
      {
        title: 'Backup Inteligente',
        description: 'Copias de seguridad automáticas que incluyen base de datos y archivos de productos.',
        icon: CloudIcon
      }
    ]
  },
  {
    category: 'Conversión',
    icon: ChartBarIcon,
    color: 'text-success-500',
    bgColor: 'bg-success-50',
    items: [
      {
        title: 'Checkout Ultrarrápido',
        description: 'Optimización específica para páginas de checkout con carga en menos de 1 segundo.',
        icon: BoltIcon
      },
      {
        title: 'Monitoreo de Conversión',
        description: 'Alertas automáticas si la velocidad de carga afecta las tasas de conversión.',
        icon: ChartBarIcon
      },
      {
        title: 'A/B Testing Ready',
        description: 'Infraestructura preparada para pruebas A/B sin afectar el rendimiento.',
        icon: DocumentChartBarIcon
      },
      {
        title: 'Analytics Integrado',
        description: 'Métricas de rendimiento correlacionadas con datos de Google Analytics y ventas.',
        icon: DocumentChartBarIcon
      }
    ]
  },
  {
    category: 'Soporte',
    icon: UserGroupIcon,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    items: [
      {
        title: 'Expertos en eCommerce 24/7',
        description: 'Soporte especializado en plataformas de comercio electrónico disponible siempre.',
        icon: UserGroupIcon
      },
      {
        title: 'Monitoreo Proactivo',
        description: 'Monitoreamos transacciones en tiempo real y resolvemos problemas antes que los notes.',
        icon: ClockIcon
      },
      {
        title: 'Migración Gratuita',
        description: 'Migramos tu tienda sin downtime y con verificación completa de funcionamiento.',
        icon: CogIcon
      },
      {
        title: 'Optimización Continua',
        description: 'Análisis mensual de rendimiento con recomendaciones de mejora personalizadas.',
        icon: ChartBarIcon
      }
    ]
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
            Características que Marcan la Diferencia
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Cada característica está diseñada específicamente para maximizar las ventas 
            y mejorar la experiencia de compra de tus clientes
          </p>
        </div>

        {/* Features by Category */}
        <div className="space-y-16">
          {features.map((category) => (
            <div key={category.category}>
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center`}>
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900">{category.category}</h3>
              </div>

              {/* Category Features */}
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-lg ${category.bgColor} flex items-center justify-center flex-shrink-0`}>
                          <item.icon className={`h-5 w-5 ${category.color}`} />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                            {item.title}
                          </h4>
                          <p className="text-secondary-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Performance Comparison */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">
                  Comparación de Rendimiento Real
                </h3>
                <p className="text-primary-100 text-lg max-w-2xl mx-auto">
                  Datos promedio comparando tiendas online hospedadas en ARCIICloud vs. hosting tradicional
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-300 mb-2">+47%</div>
                  <div className="text-lg font-semibold mb-2">Más Conversiones</div>
                  <div className="text-primary-200 text-sm">
                    Gracias a tiempos de carga más rápidos en checkout
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-success-300 mb-2">-65%</div>
                  <div className="text-lg font-semibold mb-2">Menos Abandonos</div>
                  <div className="text-primary-200 text-sm">
                    Reducción en carritos abandonados por lentitud
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-300 mb-2">3.2s</div>
                  <div className="text-lg font-semibold mb-2">Tiempo de Carga</div>
                  <div className="text-primary-200 text-sm">
                    Promedio para páginas de producto con imágenes
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-300 mb-2">99.99%</div>
                  <div className="text-lg font-semibold mb-2">Uptime SLA</div>
                  <div className="text-primary-200 text-sm">
                    Garantía de disponibilidad para no perder ventas
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}