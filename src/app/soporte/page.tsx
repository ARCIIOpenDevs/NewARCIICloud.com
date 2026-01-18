import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  ChatBubbleLeftEllipsisIcon,
  PhoneIcon,
  EnvelopeIcon,
  DocumentTextIcon,
  ClockIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Soporte Técnico 24/7 | ARCII Cloud',
  description: 'Soporte técnico especializado 24/7 en español. Chat en vivo, tickets, base de conocimientos y documentación completa para todos nuestros servicios.',
  keywords: [
    'soporte tecnico arcii cloud',
    'chat en vivo hosting',
    'ayuda hosting mexico',
    'soporte vps',
    'tickets soporte',
    'documentacion hosting',
    'ayuda cpanel'
  ],
  openGraph: {
    title: 'Soporte 24/7 | Expertos en Hosting México',
    description: '🚀 Soporte especializado: Chat, tickets, llamadas. Técnicos certificados disponibles 24/7 en español.',
    url: 'https://new.arciicloud.com/soporte',
    type: 'website',
  },
};

const supportChannels = [
  {
    title: 'Chat en Vivo',
    description: 'Habla directamente con nuestros técnicos certificados',
    icon: ChatBubbleLeftEllipsisIcon,
    gradient: 'from-blue-500 to-cyan-500',
    availability: '24/7',
    responseTime: '< 2 minutos',
    features: ['Respuesta instantánea', 'Técnicos certificados', 'Historial de conversaciones'],
    cta: 'Iniciar Chat',
    href: '/soporte/chat',
    popular: true,
  },
  {
    title: 'Sistema de Tickets',
    description: 'Seguimiento detallado de problemas complejos',
    icon: DocumentTextIcon,
    gradient: 'from-purple-500 to-indigo-500',
    availability: '24/7',
    responseTime: '< 30 minutos',
    features: ['Seguimiento completo', 'Prioridad por plan', 'Historial detallado'],
    cta: 'Crear Ticket',
    href: '/soporte/ticket',
  },
  {
    title: 'Soporte Telefónico',
    description: 'Atención personalizada para casos urgentes',
    icon: PhoneIcon,
    gradient: 'from-green-500 to-emerald-500',
    availability: 'Lun-Dom 8AM-10PM',
    responseTime: 'Inmediato',
    features: ['Atención inmediata', 'Casos urgentes', 'Asesoría personalizada'],
    cta: 'Llamar Ahora',
    href: 'tel:+525512345678',
  },
];

const supportTeam = [
  {
    name: 'Equipo WordPress',
    description: 'Especialistas en optimización, migraciones y troubleshooting',
    expertise: ['Performance', 'Plugins', 'Migraciones', 'Seguridad'],
    certifications: ['WordPress Professional', 'WooCommerce Expert'],
  },
  {
    name: 'Equipo Sistemas',
    description: 'Ingenieros en infraestrutura, VPS y servidores dedicados',
    expertise: ['Linux/Windows', 'Redes', 'Bases de Datos', 'Monitoreo'],
    certifications: ['RHCE', 'AWS Solutions Architect', 'Microsoft Certified'],
  },
  {
    name: 'Equipo Seguridad',
    description: 'Especialistas en ciberseguridad y protección de datos',
    expertise: ['SSL/TLS', 'Firewall', 'Malware', 'GDPR'],
    certifications: ['CISSP', 'CEH', 'CISM'],
  },
];

const knowledgeBaseCategories = [
  {
    title: 'Primeros Pasos',
    description: 'Configuración inicial y conceptos básicos',
    articles: 24,
    icon: RocketLaunchIcon,
    color: 'text-green-600',
    topics: ['Configurar dominio', 'Subir archivos', 'Crear email', 'Panel de control'],
  },
  {
    title: 'WordPress',
    description: 'Instalación, optimización y troubleshooting',
    articles: 42,
    icon: DocumentTextIcon,
    color: 'text-blue-600',
    topics: ['Instalar WordPress', 'Optimizar velocidad', 'Seguridad', 'Plugins recomendados'],
  },
  {
    title: 'VPS y Dedicados',
    description: 'Administración de servidores avanzada',
    articles: 18,
    icon: ShieldCheckIcon,
    color: 'text-purple-600',
    topics: ['Configurar VPS', 'SSH Access', 'Instalar software', 'Monitoreo'],
  },
  {
    title: 'Email Corporativo',
    description: 'Configuración y gestión de cuentas de correo',
    articles: 15,
    icon: EnvelopeIcon,
    color: 'text-orange-600',
    topics: ['Configurar Outlook', 'Antispam', 'Webmail', 'Migrar emails'],
  },
];

const faqData = [
  {
    question: '¿Cuál es el tiempo de respuesta del soporte?',
    answer: 'Chat en vivo: menos de 2 minutos. Tickets: menos de 30 minutos. Llamadas: inmediato en horario de atención.',
  },
  {
    question: '¿El soporte está incluido en todos los planes?',
    answer: 'Sí, todos nuestros planes incluyen soporte técnico. Los planes superiores tienen prioridad y canales adicionales.',
  },
  {
    question: '¿Pueden ayudarme a migrar mi sitio web?',
    answer: 'Absolutamente. Ofrecemos migración gratuita para la mayoría de los planes, con asistencia completa de nuestros técnicos.',
  },
  {
    question: '¿Qué idiomas maneja el soporte?',
    answer: 'Nuestro soporte principal es en español mexicano, también ofrecemos soporte en inglés para clientes internacionales.',
  },
];

export default function SoportePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Soporte Técnico Especializado
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Técnicos certificados disponibles 24/7 en español. 
              Chat en vivo, tickets, documentación completa y mucho más.
            </p>
            <Button size="xl" variant="secondary" asChild>
              <Link href="#canales">
                Obtener Ayuda Ahora
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Support Channels */}
        <section id="canales" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Canales de Soporte
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Múltiples formas de contactarnos. Elige la que mejor se adapte a tu necesidad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportChannels.map((channel) => (
              <Card 
                key={channel.title} 
                className={`hover:shadow-xl transition-all duration-300 ${channel.popular ? 'ring-2 ring-primary-200 bg-primary-50' : ''}`}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${channel.gradient} flex items-center justify-center`}>
                    <channel.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {channel.title}
                    {channel.popular && (
                      <span className="ml-2 px-2 py-1 bg-primary-600 text-white text-xs rounded-full">
                        Popular
                      </span>
                    )}
                  </CardTitle>
                  <p className="text-secondary-600">{channel.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <ClockIcon className="h-5 w-5 mx-auto text-secondary-500 mb-1" />
                      <div className="font-medium">{channel.availability}</div>
                    </div>
                    <div className="text-center">
                      <UserGroupIcon className="h-5 w-5 mx-auto text-secondary-500 mb-1" />
                      <div className="font-medium">{channel.responseTime}</div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <ul className="space-y-2">
                      {channel.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-secondary-600">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className="w-full" 
                    variant={channel.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <Link href={channel.href}>
                      {channel.cta}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Support Team */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Nuestro Equipo Técnico
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Ingenieros certificados y especialistas con años de experiencia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportTeam.map((team) => (
              <Card key={team.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{team.name}</CardTitle>
                  <p className="text-secondary-600 text-sm">{team.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-secondary-900 mb-2">Especialidades:</h4>
                    <div className="flex flex-wrap gap-1">
                      {team.expertise.map((skill) => (
                        <span 
                          key={skill}
                          className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-secondary-900 mb-2">Certificaciones:</h4>
                    <ul className="space-y-1">
                      {team.certifications.map((cert) => (
                        <li key={cert} className="flex items-center text-sm text-secondary-600">
                          <ShieldCheckIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Knowledge Base */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Base de Conocimientos
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Documentación completa, tutoriales y guías para resolver problemas comunes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {knowledgeBaseCategories.map((category) => (
              <Card key={category.title} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                    <span className="text-sm font-medium text-secondary-500">
                      {category.articles} artículos
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-secondary-900 mb-2">
                    {category.title}
                  </h3>
                  
                  <p className="text-sm text-secondary-600 mb-4">
                    {category.description}
                  </p>

                  <div className="space-y-1">
                    {category.topics.slice(0, 3).map((topic) => (
                      <div key={topic} className="flex items-center text-xs text-secondary-500">
                        <div className="w-1 h-1 bg-secondary-300 rounded-full mr-2" />
                        {topic}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link href="/docs">
                Ver Documentación Completa
              </Link>
            </Button>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Respuestas rápidas a las consultas más comunes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-secondary-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-secondary-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-primary-900 mb-2">
                  ¿No encuentras lo que buscas?
                </h3>
                <p className="text-primary-700 mb-6">
                  Nuestros técnicos especializados están listos para ayudarte con cualquier consulta.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild>
                    <Link href="/soporte/chat">
                      Chat en Vivo
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/soporte/ticket">
                      Crear Ticket
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}