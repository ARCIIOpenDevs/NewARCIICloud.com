'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  CheckCircleIcon,
  BoltIcon,
  ShieldCheckIcon,
  CogIcon,
  ChartBarIcon,
} from '@heroicons/react/24/solid';
import { cn } from '@/lib/utils';

const platforms = [
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    logo: '/logos/woocommerce.svg',
    description: 'La plataforma más flexible para WordPress',
    marketShare: '28%',
    color: 'from-purple-500 to-purple-700',
    features: [
      'Instalación automática con un click',
      'Optimización específica WooCommerce',
      'Cache avanzado para productos',
      'Backup automático de base de datos',
      'SSL optimizado para checkout',
      'Soporte para miles de productos',
      'Integración con plugins premium',
      'Monitoreo de rendimiento 24/7'
    ],
    stats: {
      performance: '+65% más rápido',
      conversion: '+23% conversión',
      uptime: '99.99% uptime'
    }
  },
  {
    id: 'shopify',
    name: 'Shopify',
    logo: '/logos/shopify.svg',
    description: 'Solución completa todo-en-uno',
    marketShare: '21%',
    color: 'from-green-500 to-green-700',
    features: [
      'Apps optimizadas para velocidad',
      'CDN global especializado',
      'Checkout ultrarápido',
      'Integración con Shopify Plus',
      'Backup automático completo',
      'Soporte multicurrency nativo',
      'APIs optimizadas',
      'Monitoreo proactivo'
    ],
    stats: {
      performance: '+58% más rápido',
      conversion: '+31% conversión',
      uptime: '99.99% uptime'
    }
  },
  {
    id: 'magento',
    name: 'Magento',
    logo: '/logos/magento.svg',
    description: 'Potencia enterprise para grandes catálogos',
    marketShare: '18%',
    color: 'from-orange-500 to-orange-700',
    features: [
      'Servidor dedicado disponible',
      'Cache Varnish + Redis',
      'Elasticsearch integrado',
      'Base de datos optimizada',
      'CDN especializado',
      'Soporte multicatalog',
      'Escalabilidad automática',
      'Soporte Adobe Commerce'
    ],
    stats: {
      performance: '+78% más rápido',
      conversion: '+19% conversión',
      uptime: '99.99% uptime'
    }
  },
  {
    id: 'prestashop',
    name: 'PrestaShop',
    logo: '/logos/prestashop.svg',
    description: 'Open source europeo líder',
    marketShare: '15%',
    color: 'from-blue-500 to-blue-700',
    features: [
      'Instalación PrestaShop 8.x',
      'Módulos premium incluidos',
      'Optimización para multiidioma',
      'Cache especializado',
      'Backup incremental',
      'Soporte para B2B',
      'Integración ERP/CRM',
      'Optimización SEO avanzada'
    ],
    stats: {
      performance: '+52% más rápido',
      conversion: '+27% conversión',
      uptime: '99.98% uptime'
    }
  },
];

export function PlatformSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
            Optimizado para Cada Plataforma
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            No importa qué plataforma uses, nuestro hosting está específicamente optimizado 
            para maximizar el rendimiento y las conversiones de tu tienda online
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {platforms.map((platform) => (
            <Card key={platform.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${platform.color} flex items-center justify-center p-2`}>
                      <img 
                        src={platform.logo} 
                        alt={platform.name}
                        className="w-full h-full object-contain filter brightness-0 invert"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900">{platform.name}</h3>
                      <p className="text-secondary-600 text-sm">{platform.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary-600">{platform.marketShare}</div>
                    <div className="text-xs text-secondary-500">Market Share</div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center bg-secondary-50 rounded-lg p-3">
                    <BoltIcon className="h-5 w-5 text-accent-500 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-secondary-900">{platform.stats.performance}</div>
                    <div className="text-xs text-secondary-500">velocidad</div>
                  </div>
                  <div className="text-center bg-secondary-50 rounded-lg p-3">
                    <ChartBarIcon className="h-5 w-5 text-success-500 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-secondary-900">{platform.stats.conversion}</div>
                    <div className="text-xs text-secondary-500">conversión</div>
                  </div>
                  <div className="text-center bg-secondary-50 rounded-lg p-3">
                    <ShieldCheckIcon className="h-5 w-5 text-primary-500 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-secondary-900">{platform.stats.uptime}</div>
                    <div className="text-xs text-secondary-500">disponibilidad</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                {/* Features List */}
                <div className="grid grid-cols-1 gap-2 mb-6">
                  {platform.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-success-500 flex-shrink-0" />
                      <span className="text-sm text-secondary-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex gap-2">
                  <Button variant="gradient" className="flex-1" size="sm">
                    Comenzar con {platform.name}
                  </Button>
                  <Button variant="outline" size="sm">
                    Ver Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Platform */}
        <Card className="bg-gradient-to-r from-secondary-900 to-secondary-800 text-white">
          <CardContent className="text-center py-12">
            <CogIcon className="h-16 w-16 text-accent-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">¿Usas una Plataforma Diferente?</h3>
            <p className="text-lg text-secondary-200 mb-6 max-w-2xl mx-auto">
              OpenCart, osCommerce, CS-Cart, o desarrollo personalizado. 
              Optimizamos cualquier plataforma de eCommerce para máximo rendimiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Consulta Personalizada
              </Button>
              <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
                Ver Todas las Plataformas
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}