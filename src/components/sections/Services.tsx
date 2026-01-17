import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  ServerIcon,
  BuildingOfficeIcon,
  CloudIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

const negociosServices = [
  {
    id: 'hosting-web',
    title: 'Hosting Web',
    description: 'Planes de hosting optimizados para sitios web, WordPress, y aplicaciones web con soporte 24/7.',
    icon: GlobeAltIcon,
    plans: ['Eco', 'Estándar', 'Performance'],
    startingPrice: '$299',
    features: ['SSL Gratuito', 'Backups Diarios', 'Soporte 24/7', 'cPanel Incluido'],
    popular: true,
  },
  {
    id: 'vps-cloud',
    title: 'VPS Cloud',
    description: 'Servidores virtuales privados con recursos dedicados y escalabilidad instantánea.',
    icon: CloudIcon,
    plans: ['Básico', 'Profesional', 'Empresarial'],
    startingPrice: '$899',
    features: ['SSD NVMe', 'Root Access', 'IPs Dedicadas', 'Snapshot'],
  },
  {
    id: 'dominios',
    title: 'Dominios',
    description: 'Registro y gestión de dominios con más de 500 extensiones disponibles.',
    icon: GlobeAltIcon,
    plans: ['.com', '.mx', '.com.mx'],
    startingPrice: '$199',
    features: ['DNS Gratuito', 'Whois Privacy', 'Fácil Gestión', 'Renovación Auto'],
  },
  {
    id: 'email',
    title: 'Email Corporativo',
    description: 'Cuentas de correo profesionales con tu dominio y protección antispam.',
    icon: EnvelopeIcon,
    plans: ['Business', 'Premium', 'Enterprise'],
    startingPrice: '$99',
    features: ['Webmail', 'IMAP/POP3', 'Antispam', 'Sincronización'],
  },
];

const empresasServices = [
  {
    id: 'servidores-dedicados',
    title: 'Servidores Dedicados',
    description: 'Servidores físicos exclusivos con máximo rendimiento para aplicaciones críticas.',
    icon: ServerIcon,
    plans: ['Intel Xeon', 'AMD EPYC', 'Configuración Personalizada'],
    startingPrice: '$4,999',
    features: ['Hardware Exclusivo', 'Banda Ancha Ilimitada', 'IPs /29', 'Gestión Completa'],
  },
  {
    id: 'datacenter',
    title: 'Centro de Datos',
    description: 'Infraestructura de datacenter con certificaciones internacionales y máxima disponibilidad.',
    icon: BuildingOfficeIcon,
    plans: ['Colocation', 'Private Cloud', 'Hybrid Solutions'],
    startingPrice: 'Cotizar',
    features: ['Tier III+', 'Redundancia N+1', 'Seguridad 24/7', 'Compliance'],
  },
  {
    id: 'soluciones-sector',
    title: 'Soluciones por Sector',
    description: 'Soluciones especializadas para industrias específicas con compliance y certificaciones.',
    icon: ShieldCheckIcon,
    plans: ['Fintech', 'Healthcare', 'E-commerce'],
    startingPrice: 'Personalizado',
    features: ['Compliance', 'Alta Disponibilidad', 'Soporte Especializado', 'SLA Premium'],
  },
];

export function Services() {
  return (
    <section className="py-24 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Desde soluciones para pequeños negocios hasta infraestructura empresarial de alta disponibilidad
          </p>
        </div>
        
        {/* Negocios Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-3xl font-bold text-secondary-900 mb-2">Para Negocios</h3>
              <p className="text-lg text-secondary-600">Soluciones accesibles para emprendedores y pequeñas empresas</p>
            </div>
            <Button variant="outline">Ver Todos los Planes</Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {negociosServices.map((service) => (
              <Card 
                key={service.id} 
                variant={service.popular ? 'outline' : 'default'}
                className={`relative ${service.popular ? 'border-primary-500 shadow-lg' : ''}`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-xs font-medium">
                      Más Popular
                    </span>
                  </div>
                )}
                
                <CardHeader>
                  <div className="bg-primary-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <p className="text-sm text-secondary-600 mt-2">{service.description}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-secondary-900">{service.startingPrice}</span>
                    {service.startingPrice !== 'Cotizar' && service.startingPrice !== 'Personalizado' && (
                      <span className="text-secondary-600 text-sm">/mes</span>
                    )}
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-secondary-600">
                        <ShieldCheckIcon className="h-4 w-4 text-success-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full" variant={service.popular ? 'default' : 'secondary'}>
                    Ver Planes
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Empresas Section */}
        <div>
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-3xl font-bold text-secondary-900 mb-2">Para Empresas</h3>
              <p className="text-lg text-secondary-600">Infraestructura empresarial con máxima disponibilidad y soporte premium</p>
            </div>
            <Button variant="gradient">Solicitar Consultoría</Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {empresasServices.map((service) => (
              <Card key={service.id} variant="elevated" className="h-full">
                <CardHeader>
                  <div className="bg-gradient-to-r from-primary-600 to-primary-800 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <p className="text-secondary-600 mt-2">{service.description}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-secondary-900">{service.startingPrice}</span>
                    {service.startingPrice !== 'Cotizar' && service.startingPrice !== 'Personalizado' && (
                      <span className="text-secondary-600">/mes</span>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-secondary-900 mb-3">Planes disponibles:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.plans.map((plan, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                        >
                          {plan}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-secondary-600">
                        <ShieldCheckIcon className="h-4 w-4 text-success-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full" variant="gradient">
                    {service.startingPrice === 'Cotizar' || service.startingPrice === 'Personalizado' 
                      ? 'Solicitar Cotización' 
                      : 'Ver Configuraciones'
                    }
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}