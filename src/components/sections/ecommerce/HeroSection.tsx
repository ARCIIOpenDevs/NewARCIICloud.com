'use client';

import { Button } from '@/components/ui/Button';
import { 
  ShoppingBagIcon, 
  CreditCardIcon, 
  ChartBarIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  BoltIcon,
  CloudIcon,
  CpuChipIcon,
} from '@heroicons/react/24/solid';
import { cn, formatCurrency } from '@/lib/utils';

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <ShoppingBagIcon className="h-8 w-8 text-white" />
              <span className="text-white font-semibold text-lg">eCommerce Hosting</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Hosting que{' '}
              <span className="bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent">
                Impulsa Ventas
              </span>
            </h1>
            
            <p className="text-xl text-primary-100 mb-8 max-w-2xl">
              Infraestructura optimizada para WooCommerce, Shopify, Magento y todas las plataformas de comercio electrónico. 
              Convierte más visitantes en clientes con velocidad y seguridad garantizada.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.99%</div>
                <div className="text-sm text-primary-200">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">&lt;150ms</div>
                <div className="text-sm text-primary-200">Tiempo Carga</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-primary-200">Soporte eCommerce</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">SSL+</div>
                <div className="text-sm text-primary-200">Seguridad Avanzada</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-primary-50">
                Comenzar Gratis 15 Días
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Ver Planes eCommerce
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-8 opacity-80">
              <div className="text-white text-sm">Compatible con:</div>
              <div className="flex gap-4 items-center">
                <img src="/logos/woocommerce.svg" alt="WooCommerce" className="h-6 opacity-70" />
                <img src="/logos/shopify.svg" alt="Shopify" className="h-6 opacity-70" />
                <img src="/logos/magento.svg" alt="Magento" className="h-6 opacity-70" />
                <img src="/logos/prestashop.svg" alt="PrestaShop" className="h-6 opacity-70" />
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              {/* Performance Dashboard Mockup */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">Panel de Rendimiento</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success-400 rounded-full"></div>
                    <span className="text-success-400 text-sm">Online</span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <BoltIcon className="h-4 w-4 text-accent-400" />
                      <span className="text-white text-sm">Velocidad</span>
                    </div>
                    <div className="text-xl font-bold text-white">98/100</div>
                    <div className="text-xs text-primary-200">PageSpeed Score</div>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <ChartBarIcon className="h-4 w-4 text-success-400" />
                      <span className="text-white text-sm">Conversión</span>
                    </div>
                    <div className="text-xl font-bold text-white">+47%</div>
                    <div className="text-xs text-primary-200">vs hosting anterior</div>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <ShieldCheckIcon className="h-4 w-4 text-blue-400" />
                      <span className="text-white text-sm">Seguridad</span>
                    </div>
                    <div className="text-xl font-bold text-white">100%</div>
                    <div className="text-xs text-primary-200">Protegido</div>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <CpuChipIcon className="h-4 w-4 text-purple-400" />
                      <span className="text-white text-sm">Recursos</span>
                    </div>
                    <div className="text-xl font-bold text-white">15%</div>
                    <div className="text-xs text-primary-200">Uso promedio</div>
                  </div>
                </div>

                {/* Recent Orders Mockup */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <CreditCardIcon className="h-4 w-4 text-success-400" />
                    <span className="text-white text-sm font-medium">Ventas en Tiempo Real</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-primary-200">Pedido #12847</span>
                      <span className="text-success-400 font-medium">$299.99</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-primary-200">Pedido #12846</span>
                      <span className="text-success-400 font-medium">$156.50</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-primary-200">Pedido #12845</span>
                      <span className="text-success-400 font-medium">$89.99</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-success-500 rounded-full p-3 shadow-lg animate-bounce">
              <ChartBarIcon className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent-500 rounded-full p-3 shadow-lg animate-pulse">
              <ShoppingBagIcon className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}