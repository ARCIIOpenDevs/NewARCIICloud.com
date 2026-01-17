import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { 
  CloudIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-success-400 rounded-full mr-2 animate-pulse" />
            99.9% Uptime garantizado
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            El Hosting <span className="text-yellow-300">#1</span> de México
          </h1>
          
          <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Servicios de <strong>hosting premium</strong>, servidores dedicados y soluciones empresariales 
            con centros de datos en todo el mundo
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="xl" 
              variant="secondary"
              className="min-w-[200px]"
              rightIcon={<RocketLaunchIcon className="h-5 w-5" />}
            >
              Empezar Ahora
            </Button>
            <Button 
              size="xl" 
              variant="ghost"
              className="text-white hover:bg-white/10 min-w-[200px]"
              rightIcon={<GlobeAltIcon className="h-5 w-5" />}
            >
              Ver Planes
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-blue-200 text-sm">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-blue-200 text-sm">Sitios alojados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-200 text-sm">Soporte técnico</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-200 text-sm">Uptime garantizado</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Feature Cards */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <Card variant="glass" className="text-center">
            <div className="bg-success-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ShieldCheckIcon className="h-8 w-8 text-success-600" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Seguridad Premium</h3>
            <p className="text-blue-100 text-sm">Protección avanzada con SSL gratuito, firewall y backups diarios automáticos</p>
          </Card>
          
          <Card variant="glass" className="text-center">
            <div className="bg-warning-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <RocketLaunchIcon className="h-8 w-8 text-warning-600" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Velocidad Extrema</h3>
            <p className="text-blue-100 text-sm">SSD NVMe, CDN global y tecnología de cache avanzada para máximo rendimiento</p>
          </Card>
          
          <Card variant="glass" className="text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <CloudIcon className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Cloud Moderno</h3>
            <p className="text-blue-100 text-sm">Infraestructura en la nube con escalabilidad automática y recursos garantizados</p>
          </Card>
        </div>
      </div>
    </section>
  );
}