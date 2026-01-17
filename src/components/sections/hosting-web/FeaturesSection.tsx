import { Card, CardContent } from '@/components/ui/Card';
import {
  BoltIcon,
  ShieldCheckIcon,
  CloudIcon,
  CpuChipIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'SSD NVMe Ultra Rápido',
    description: 'Almacenamiento SSD NVMe de última generación que es hasta 10x más rápido que los discos tradicionales.',
    icon: BoltIcon,
    gradient: 'from-yellow-400 to-orange-500',
    stats: 'Hasta 10x más rápido',
  },
  {
    title: 'WordPress Optimizado',
    description: 'Configuración especializada para WordPress con cache automático y actualizaciones de seguridad.',
    icon: RocketLaunchIcon,
    gradient: 'from-blue-400 to-cyan-500',
    stats: 'Carga en <1 segundo',
  },
  {
    title: 'SSL Certificado Gratuito',
    description: 'Certificado SSL de por vida completamente gratis para mantener tu sitio web seguro y confiable.',
    icon: ShieldCheckIcon,
    gradient: 'from-green-400 to-emerald-500',
    stats: 'Let\'s Encrypt incluido',
  },
  {
    title: 'CDN Global',
    description: 'Red de distribución de contenido mundial para entregar tu sitio desde el servidor más cercano.',
    icon: GlobeAltIcon,
    gradient: 'from-purple-400 to-indigo-500',
    stats: '200+ ubicaciones',
  },
  {
    title: 'Backups Automáticos',
    description: 'Copias de seguridad diarias automáticas de tu sitio web y bases de datos con restauración en un clic.',
    icon: CircleStackIcon,
    gradient: 'from-pink-400 to-rose-500',
    stats: 'Hasta 60 copias',
  },
  {
    title: 'cPanel en Español',
    description: 'Panel de control intuitivo en español para gestionar tu hosting fácilmente desde cualquier dispositivo.',
    icon: WrenchScrewdriverIcon,
    gradient: 'from-indigo-400 to-purple-500',
    stats: 'Interfaz amigable',
  },
  {
    title: 'Soporte Especializado',
    description: 'Equipo técnico especializado en WordPress y hosting web disponible 24/7 vía chat, teléfono y tickets.',
    icon: CloudIcon,
    gradient: 'from-teal-400 to-cyan-500',
    stats: 'Respuesta <5 min',
  },
  {
    title: 'Recursos Garantizados',
    description: 'CPU, RAM y ancho de banda garantizados para tu sitio web sin límites de inodos ni restricciones ocultas.',
    icon: CpuChipIcon,
    gradient: 'from-orange-400 to-red-500',
    stats: '99.9% uptime SLA',
  },
];

const technologies = [
  { name: 'PHP 8.2', description: 'Última versión con máximo rendimiento' },
  { name: 'MySQL 8.0', description: 'Base de datos optimizada' },
  { name: 'Redis Cache', description: 'Cache en memoria ultra rápido' },
  { name: 'HTTP/2', description: 'Protocolo web más rápido' },
  { name: 'Node.js', description: 'Para aplicaciones JavaScript' },
  { name: 'Python', description: 'Soporte para frameworks Python' },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Todo lo que necesitas para tu <span className="gradient-text">sitio web</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Tecnología de vanguardia, seguridad premium y soporte especializado incluidos en todos los planes
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 text-center">
              <CardContent>
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
                <div className="text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full inline-block">
                  {feature.stats}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Technologies Section */}
        <div className="bg-gradient-to-r from-secondary-50 to-primary-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary-900 mb-4">
              Tecnologías Modernas Incluidas
            </h3>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Nuestro stack tecnológico está siempre actualizado con las últimas versiones para máximo rendimiento
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="font-bold text-primary-600 text-lg mb-1">{tech.name}</div>
                <div className="text-xs text-secondary-600">{tech.description}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Performance Stats */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Rendimiento Comprobado
            </h3>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto">
              Métricas reales de nuestros servidores de hosting web en producción
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">&lt;1s</div>
              <div className="text-primary-100 font-medium">Tiempo de carga promedio</div>
              <div className="text-sm text-primary-200 mt-1">WordPress optimizado</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">99.9%</div>
              <div className="text-primary-100 font-medium">Uptime garantizado</div>
              <div className="text-sm text-primary-200 mt-1">SLA con compensación</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-primary-100 font-medium">Monitoreo automático</div>
              <div className="text-sm text-primary-200 mt-1">Alertas proactivas</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">&lt;5min</div>
              <div className="text-primary-100 font-medium">Respuesta soporte</div>
              <div className="text-sm text-primary-200 mt-1">Chat y tickets</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}