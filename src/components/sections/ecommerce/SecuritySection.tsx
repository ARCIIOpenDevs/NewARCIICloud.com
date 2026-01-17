'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import {
  ShieldCheckIcon,
  LockClosedIcon,
  EyeIcon,
  DocumentTextIcon,
  BanknotesIcon,
  ServerIcon,
  ClockIcon,
  UserIcon,
} from '@heroicons/react/24/solid';

const securityFeatures = [
  {
    icon: LockClosedIcon,
    title: 'SSL/TLS Enterprise',
    description: 'Certificados SSL premium con encriptación de grado empresarial para todas las transacciones.',
    details: [
      'Certificados Extended Validation (EV)',
      'Wildcard SSL para subdominios',
      'Renovación automática',
      'Instalación sin tiempo de inactividad',
      'Soporte para múltiples dominios'
    ]
  },
  {
    icon: ShieldCheckIcon,
    title: 'WAF Especializado',
    description: 'Firewall de aplicaciones web específicamente configurado para eCommerce.',
    details: [
      'Protección contra ataques OWASP Top 10',
      'Filtrado de inyección SQL',
      'Protección XSS avanzada',
      'Rate limiting inteligente',
      'Geoblocking personalizable'
    ]
  },
  {
    icon: BanknotesIcon,
    title: 'PCI DSS Compliance',
    description: 'Infraestructura certificada para el manejo seguro de datos de tarjetas.',
    details: [
      'Servidores PCI DSS Level 1',
      'Encriptación de datos en tránsito',
      'Tokenización de pagos',
      'Auditorías regulares de seguridad',
      'Logs de transacciones seguros'
    ]
  },
  {
    icon: EyeIcon,
    title: 'Monitoreo 24/7',
    description: 'Supervisión continua de amenazas y respuesta automática a incidentes.',
    details: [
      'Detección de malware en tiempo real',
      'Análisis de comportamiento anómalo',
      'Alertas inmediatas de seguridad',
      'Respuesta automática a ataques',
      'Reportes detallados de seguridad'
    ]
  },
  {
    icon: DocumentTextIcon,
    title: 'Backups Seguros',
    description: 'Copias de seguridad cifradas con versionado y recuperación granular.',
    details: [
      'Backups incrementales diarios',
      'Cifrado AES-256',
      'Almacenamiento geográficamente distribuido',
      'Recuperación punto en tiempo',
      'Testing automático de backups'
    ]
  },
  {
    icon: ServerIcon,
    title: 'Infraestructura Segura',
    description: 'Centros de datos con certificaciones SOC 2 Type II y ISO 27001.',
    details: [
      'Centros de datos certificados',
      'Control de acceso biométrico',
      'Redundancia N+1',
      'Generadores de emergencia',
      'Climatización redundante'
    ]
  },
  {
    icon: UserIcon,
    title: 'Autenticación Avanzada',
    description: 'Múltiples capas de autenticación y control de acceso granular.',
    details: [
      'Autenticación de dos factores (2FA)',
      'Single Sign-On (SSO)',
      'Control de acceso basado en roles',
      'Logs de acceso detallados',
      'Sesiones seguras con timeout'
    ]
  },
  {
    icon: ClockIcon,
    title: 'Respuesta a Incidentes',
    description: 'Equipo especializado disponible 24/7 para responder a emergencias.',
    details: [
      'Equipo de respuesta dedicado',
      'Tiempo de respuesta < 15 minutos',
      'Forensia digital disponible',
      'Comunicación transparente',
      'Plan de recuperación documentado'
    ]
  }
];

const complianceStandards = [
  {
    name: 'PCI DSS Level 1',
    description: 'Certificación máxima para procesamiento de pagos',
    logo: '/certifications/pci-dss.svg'
  },
  {
    name: 'ISO 27001',
    description: 'Estándar internacional de seguridad de información',
    logo: '/certifications/iso-27001.svg'
  },
  {
    name: 'SOC 2 Type II',
    description: 'Auditoría de controles de seguridad y disponibilidad',
    logo: '/certifications/soc2.svg'
  },
  {
    name: 'GDPR Compliant',
    description: 'Cumplimiento con regulaciones de privacidad europeas',
    logo: '/certifications/gdpr.svg'
  }
];

export function SecuritySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <ShieldCheckIcon className="h-12 w-12 text-primary-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900">
              Seguridad de Nivel Bancario
            </h2>
          </div>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            La confianza de tus clientes es fundamental. Protegemos cada transacción, 
            cada dato y cada interacción con los más altos estándares de seguridad
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-50 rounded-2xl flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-secondary-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 text-sm">
                  {feature.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-secondary-700">
                      <div className="w-1 h-1 bg-primary-500 rounded-full flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Compliance Standards */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-secondary-900 mb-8">
            Certificaciones y Cumplimiento Normativo
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceStandards.map((standard, index) => (
              <Card key={index} className="text-center group hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-secondary-100 rounded-xl flex items-center justify-center">
                    <img 
                      src={standard.logo} 
                      alt={standard.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h4 className="font-bold text-secondary-900 mb-2">{standard.name}</h4>
                  <p className="text-sm text-secondary-600">{standard.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security Stats */}
        <Card className="bg-gradient-to-r from-primary-600 to-primary-800 text-white mb-16">
          <CardContent className="py-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">
                Estadísticas de Seguridad en Tiempo Real
              </h3>
              <p className="text-primary-100 max-w-2xl mx-auto">
                Nuestros sistemas de seguridad trabajan continuamente para proteger 
                a todas las tiendas online hospedadas en nuestra plataforma
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-300 mb-2">99.9%</div>
                <div className="text-primary-200 mb-1">Amenazas Bloqueadas</div>
                <div className="text-sm text-primary-300">último mes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success-300 mb-2">&lt;15min</div>
                <div className="text-primary-200 mb-1">Tiempo de Respuesta</div>
                <div className="text-sm text-primary-300">a incidentes de seguridad</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-300 mb-2">24/7</div>
                <div className="text-primary-200 mb-1">Monitoreo Activo</div>
                <div className="text-sm text-primary-300">todos los días del año</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">100%</div>
                <div className="text-primary-200 mb-1">Uptime de Seguridad</div>
                <div className="text-sm text-primary-300">sistemas siempre activos</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Assessment CTA */}
        <Card className="border-2 border-primary-200">
          <CardContent className="text-center py-12">
            <ShieldCheckIcon className="h-16 w-16 text-primary-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Auditoría de Seguridad Gratuita
            </h3>
            <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
              ¿Quieres conocer el nivel de seguridad actual de tu tienda online? 
              Te ofrecemos una auditoría completa sin costo y sin compromiso
            </p>
            <div className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4 text-sm text-secondary-700 max-w-2xl mx-auto mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  <span>Análisis de vulnerabilidades</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  <span>Revisión de certificados</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  <span>Recomendaciones de mejora</span>
                </div>
              </div>
              <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                Solicitar Auditoría Gratuita
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}