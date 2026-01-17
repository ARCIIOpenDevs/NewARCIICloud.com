import { Card, CardContent } from '@/components/ui/Card';
import {
  BoltIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CloudIcon,
  CpuChipIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Velocidad Extrema',
    description: 'SSD NVMe de última generación con tecnología de cache avanzada para tiempos de carga ultrarrápidos.',
    icon: BoltIcon,
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    title: 'Seguridad Premium',
    description: 'Protección multicapa con firewall, SSL gratuito, backups automáticos y monitoreo 24/7.',
    icon: ShieldCheckIcon,
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    title: 'Red Global',
    description: 'CDN mundial con más de 200 ubicaciones para entregar tu contenido desde el punto más cercano.',
    icon: GlobeAltIcon,
    gradient: 'from-blue-400 to-cyan-500',
  },
  {
    title: 'Cloud Nativo',
    description: 'Infraestructura moderna en la nube con escalabilidad automática y recursos garantizados.',
    icon: CloudIcon,
    gradient: 'from-purple-400 to-indigo-500',
  },
  {
    title: 'Hardware Premium',
    description: 'Servidores Intel Xeon y AMD EPYC con memoria ECC y conectividad de alta velocidad.',
    icon: CpuChipIcon,
    gradient: 'from-pink-400 to-rose-500',
  },
  {
    title: 'Privacidad Total',
    description: 'Cumplimiento GDPR, datos encriptados y políticas estrictas de privacidad y no logs.',
    icon: LockClosedIcon,
    gradient: 'from-indigo-400 to-purple-500',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            ¿Por qué elegir <span className="gradient-text">ARCII Cloud</span>?
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Tecnología de vanguardia, soporte excepcional y la confianza de miles de empresas en México
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300">
              <CardContent className="text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Stats */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">99.9%</div>
              <div className="text-primary-100">Uptime garantizado con SLA</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">&lt;2s</div>
              <div className="text-primary-100">Tiempo de respuesta promedio</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-primary-100">Soporte técnico especializado</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-primary-100">Años de experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}