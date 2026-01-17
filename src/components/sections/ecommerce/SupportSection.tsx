'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  UserGroupIcon,
  ClockIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  CogIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/solid';
import { cn } from '@/lib/utils';

const supportTiers = [
  {
    id: 'standard',
    name: 'Soporte Estándar',
    subtitle: 'Incluido en todos los planes',
    icon: ChatBubbleLeftRightIcon,
    color: 'from-blue-500 to-blue-600',
    features: [
      'Chat 24/7 en español',
      'Tickets de soporte ilimitados',
      'Base de conocimiento completa',
      'Respuesta en < 2 horas',
      'Soporte por email',
      'Tutoriales en video',
      'FAQ especializada eCommerce'
    ],
    response: '< 2 horas',
    availability: '24/7',
    channels: ['Chat', 'Email', 'Tickets']
  },
  {
    id: 'priority',
    name: 'Soporte Prioritario',
    subtitle: 'Para planes Performance+',
    icon: PhoneIcon,
    color: 'from-purple-500 to-purple-600',
    popular: true,
    features: [
      'Todo lo del Soporte Estándar',
      'Soporte telefónico 24/7',
      'Respuesta prioritaria < 30 min',
      'Especialistas en eCommerce',
      'Sesiones de consultoría incluidas',
      'Acceso a webinars exclusivos',
      'Revisiones de rendimiento',
      'Optimizaciones proactivas'
    ],
    response: '< 30 minutos',
    availability: '24/7',
    channels: ['Teléfono', 'Chat', 'Email', 'Tickets']
  },
  {
    id: 'white-glove',
    name: 'White-Glove Support',
    subtitle: 'Soporte dedicado premium',
    icon: UserGroupIcon,
    color: 'from-amber-500 to-orange-500',
    features: [
      'Account Manager dedicado',
      'Ingeniero asignado 24/7',
      'Respuesta inmediata < 15 min',
      'Acceso directo por WhatsApp/Slack',
      'Consultoría estratégica mensual',
      'Desarrollo personalizado',
      'Migración white-glove',
      'SLA 99.99% garantizado'
    ],
    response: '< 15 minutos',
    availability: '24/7/365',
    channels: ['Dedicado', 'WhatsApp', 'Slack', 'Teléfono']
  }
];

const supportServices = [
  {
    icon: RocketLaunchIcon,
    title: 'Migración Completa',
    description: 'Migramos tu tienda sin downtime ni pérdida de datos',
    features: [
      'Análisis pre-migración',
      'Copia completa de archivos y BD',
      'Testing exhaustivo',
      'Migración DNS sin downtime',
      'Verificación post-migración',
      'Rollback si es necesario'
    ],
    duration: '24-48 horas',
    guarantee: '100% sin pérdida de datos'
  },
  {
    icon: CogIcon,
    title: 'Optimización de Rendimiento',
    description: 'Mejoramos la velocidad y conversión de tu tienda',
    features: [
      'Auditoría completa de rendimiento',
      'Optimización de imágenes',
      'Configuración de cache avanzado',
      'Optimización de base de datos',
      'CDN setup personalizado',
      'Monitoreo continuo'
    ],
    duration: '5-10 días hábiles',
    guarantee: 'Mejora mínima del 40%'
  },
  {
    icon: AcademicCapIcon,
    title: 'Training & Capacitación',
    description: 'Entrenamos a tu equipo en mejores prácticas',
    features: [
      'Sesiones de training personalizadas',
      'Mejores prácticas eCommerce',
      'Gestión de contenido optimizada',
      'Configuración de analytics',
      'Optimización SEO básica',
      'Materiales de referencia'
    ],
    duration: '2-4 sesiones',
    guarantee: 'Certificado de competencia'
  },
  {
    icon: DocumentTextIcon,
    title: 'Consultoría Estratégica',
    description: 'Asesoría especializada para hacer crecer tu negocio',
    features: [
      'Análisis de conversión',
      'Roadmap de crecimiento',
      'Optimización de UX',
      'Estrategia de contenido',
      'Análisis de competencia',
      'Recomendaciones personalizadas'
    ],
    duration: 'Sesiones mensuales',
    guarantee: 'ROI medible'
  }
];

const expertiseAreas = [
  {
    platform: 'WooCommerce',
    specialists: 8,
    certifications: ['WooExpert', 'WordPress VIP'],
    experience: '5+ años promedio'
  },
  {
    platform: 'Shopify',
    specialists: 6,
    certifications: ['Shopify Expert', 'Shopify Plus'],
    experience: '4+ años promedio'
  },
  {
    platform: 'Magento',
    specialists: 4,
    certifications: ['Adobe Commerce', 'Magento Expert'],
    experience: '6+ años promedio'
  },
  {
    platform: 'PrestaShop',
    specialists: 3,
    certifications: ['PrestaShop Certified', 'PrestaShop Expert'],
    experience: '4+ años promedio'
  }
];

export function SupportSection() {
  return (
    <section className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
            Soporte Especializado en eCommerce
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            No somos solo un proveedor de hosting, somos tu socio estratégico para el éxito online. 
            Nuestro equipo de expertos está aquí para hacer crecer tu negocio
          </p>
        </div>

        {/* Support Tiers */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {supportTiers.map((tier) => (
            <Card 
              key={tier.id}
              className={cn(
                "relative",
                tier.popular && "border-2 border-primary-500 shadow-lg scale-105"
              )}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Más Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${tier.color} flex items-center justify-center`}>
                  <tier.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">
                  {tier.name}
                </h3>
                <p className="text-secondary-600 mb-6">{tier.subtitle}</p>
                
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="bg-secondary-50 rounded-lg p-3">
                    <ClockIcon className="h-4 w-4 text-primary-500 mx-auto mb-1" />
                    <div className="font-semibold text-secondary-900">{tier.response}</div>
                    <div className="text-secondary-500">respuesta</div>
                  </div>
                  <div className="bg-secondary-50 rounded-lg p-3">
                    <UserGroupIcon className="h-4 w-4 text-primary-500 mx-auto mb-1" />
                    <div className="font-semibold text-secondary-900">{tier.availability}</div>
                    <div className="text-secondary-500">disponible</div>
                  </div>
                </div>

                {/* Channels */}
                <div className="mb-6">
                  <div className="text-sm text-secondary-600 mb-2">Canales disponibles:</div>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {tier.channels.map((channel, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-md"
                      >
                        {channel}
                      </span>
                    ))}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircleIcon className="h-4 w-4 text-success-500 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={tier.popular ? "gradient" : "outline"} 
                  className="w-full"
                >
                  {tier.id === 'white-glove' ? 'Contactar Ventas' : 'Más Información'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-secondary-900 mb-12">
            Servicios Especializados Incluidos
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {supportServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                      <service.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-secondary-900 mb-2">
                        {service.title}
                      </h4>
                      <p className="text-secondary-600 mb-4">
                        {service.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                        <div>
                          <span className="text-secondary-500">Duración:</span>
                          <div className="font-semibold text-secondary-900">{service.duration}</div>
                        </div>
                        <div>
                          <span className="text-secondary-500">Garantía:</span>
                          <div className="font-semibold text-success-600">{service.guarantee}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-secondary-700">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Expertise */}
        <Card className="bg-gradient-to-r from-secondary-900 to-secondary-800 text-white">
          <CardContent className="p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">
                Nuestro Equipo de Especialistas
              </h3>
              <p className="text-secondary-200 max-w-2xl mx-auto">
                Contamos con expertos certificados en las principales plataformas de eCommerce 
                con años de experiencia ayudando a tiendas online a crecer
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {expertiseAreas.map((area, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                    <h4 className="text-lg font-bold mb-3">{area.platform}</h4>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="text-2xl font-bold text-accent-400">{area.specialists}</div>
                        <div className="text-sm text-secondary-300">Especialistas</div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-secondary-300 mb-2">Certificaciones:</div>
                        <div className="space-y-1">
                          {area.certifications.map((cert, idx) => (
                            <div key={idx} className="text-xs bg-white/5 rounded px-2 py-1">
                              {cert}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-semibold text-primary-300">
                          {area.experience}
                        </div>
                        <div className="text-xs text-secondary-400">experiencia</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="secondary" size="lg">
                Conocer al Equipo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}