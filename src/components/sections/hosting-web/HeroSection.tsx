import { Button } from '@/components/ui/Button';
import {
  CheckCircleIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
              <GlobeAltIcon className="h-4 w-4 mr-2" />
              #1 en Hosting WordPress en México
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Hosting Web
              <span className="block text-yellow-300">Ultra Rápido</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Hosting optimizado para <strong>WordPress, Joomla y sitios web</strong> con 
              SSD NVMe, CDN global y soporte técnico especializado 24/7.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 text-white">
                <CheckCircleIcon className="h-5 w-5 text-success-400 flex-shrink-0" />
                <span>SSL Gratuito de por vida</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <CheckCircleIcon className="h-5 w-5 text-success-400 flex-shrink-0" />
                <span>Backups diarios automáticos</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <CheckCircleIcon className="h-5 w-5 text-success-400 flex-shrink-0" />
                <span>cPanel en español</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <CheckCircleIcon className="h-5 w-5 text-success-400 flex-shrink-0" />
                <span>Migración gratuita</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="xl" 
                variant="secondary"
                className="min-w-[200px]"
                rightIcon={<RocketLaunchIcon className="h-5 w-5" />}
              >
                Ver Planes
              </Button>
              <Button 
                size="xl" 
                variant="ghost"
                className="text-white hover:bg-white/10 min-w-[200px]"
              >
                Migración Gratuita
              </Button>
            </div>
            
            {/* Guarantee */}
            <div className="mt-8 flex items-center gap-3 text-success-300">
              <CheckCircleIcon className="h-5 w-5" />
              <span className="text-sm">Garantía de 30 días o te devolvemos tu dinero</span>
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                {/* Performance Stats */}
                <div className="bg-white/20 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Performance Garantizado</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-300">&lt;1s</div>
                      <div className="text-sm text-blue-100">Tiempo de carga</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-300">99.9%</div>
                      <div className="text-sm text-blue-100">Uptime SLA</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-300">24/7</div>
                      <div className="text-sm text-blue-100">Soporte</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-300">CDN</div>
                      <div className="text-sm text-blue-100">Global</div>
                    </div>
                  </div>
                </div>
                
                {/* Price Preview */}
                <div className="bg-white rounded-2xl p-6 text-center">
                  <div className="text-sm text-secondary-600 mb-2">Planes desde</div>
                  <div className="text-4xl font-bold text-primary-600 mb-2">$299</div>
                  <div className="text-sm text-secondary-600 mb-4">/mes por sitio web</div>
                  <div className="text-xs text-success-600 font-medium">✓ Sin permanencia mínima</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-300/20 rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-300/20 rounded-full animate-pulse delay-300" />
          </div>
        </div>
      </div>
    </section>
  );
}