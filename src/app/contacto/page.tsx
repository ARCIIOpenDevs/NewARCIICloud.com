import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto ARCII Cloud | Soporte 24/7 México',
  description: 'Contacta a ARCII Cloud: Chat 24/7, WhatsApp, teléfono México, email soporte. Respuesta inmediata de expertos en hosting y soluciones cloud.',
  keywords: [
    'contacto arcii cloud',
    'soporte 24/7 hosting',
    'telefono arcii cloud',
    'chat soporte hosting',
    'whatsapp hosting mexico',
    'email soporte hosting'
  ],
  openGraph: {
    title: 'Contacto ARCII Cloud | Soporte 24/7 México',
    description: '📞 Contacta expertos: Chat 24/7, WhatsApp inmediato, oficinas México DF, Guadalajara, Monterrey.',
    url: 'https://new.arciicloud.com/contacto',
    type: 'website',
  },
};

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const contactMethods = [
  {
    title: 'Chat en Vivo 24/7',
    description: 'Respuesta inmediata con técnicos especializados',
    icon: ChatBubbleLeftRightIcon,
    action: 'Iniciar Chat',
    href: '#chat',
    color: 'from-green-400 to-emerald-500',
    available: '24/7 - Siempre disponible',
    response: '< 30 segundos',
  },
  {
    title: 'WhatsApp Business',
    description: 'Soporte directo en tu celular',
    icon: PhoneIcon,
    action: 'Enviar WhatsApp',
    href: 'https://wa.me/52155123456789',
    color: 'from-green-500 to-green-600',
    available: 'Lunes a Domingo 7:00-23:00',
    response: '< 2 minutos',
  },
  {
    title: 'Teléfono México',
    description: 'Llamada directa con expertos',
    icon: PhoneIcon,
    action: 'Llamar Ahora',
    href: 'tel:+52155123456789',
    color: 'from-blue-400 to-blue-600',
    available: 'Lunes a Viernes 8:00-20:00',
    response: 'Sin espera',
  },
  {
    title: 'Email Especializado',
    description: 'Soporte técnico detallado por escrito',
    icon: EnvelopeIcon,
    action: 'Enviar Email',
    href: 'mailto:soporte@arciicloud.com',
    color: 'from-purple-400 to-purple-600',
    available: 'Respuesta garantizada',
    response: '< 2 horas',
  },
];

const departments = [
  {
    name: 'Soporte Técnico',
    description: 'Problemas con hosting, dominios, emails',
    email: 'soporte@arciicloud.com',
    phone: '+52 (55) 5123-4567',
    hours: '24/7',
    expertise: ['Hosting', 'Dominios', 'SSL', 'Email'],
  },
  {
    name: 'Ventas y Cotizaciones',
    description: 'Planes, precios y soluciones empresariales',
    email: 'ventas@arciicloud.com',
    phone: '+52 (55) 5123-4568',
    hours: 'Lun-Vie 8:00-20:00',
    expertise: ['Planes', 'Cotizaciones', 'Migración', 'Consultoría'],
  },
  {
    name: 'Facturación',
    description: 'Pagos, facturas, cambios de plan',
    email: 'facturacion@arciicloud.com',
    phone: '+52 (55) 5123-4569',
    hours: 'Lun-Vie 9:00-18:00',
    expertise: ['Pagos', 'Facturas', 'Renovaciones', 'Reembolsos'],
  },
  {
    name: 'Desarrollo Web',
    description: 'Desarrollo, optimización y consultoría',
    email: 'desarrollo@arciicloud.com',
    phone: '+52 (55) 5123-4570',
    hours: 'Lun-Vie 9:00-18:00',
    expertise: ['WordPress', 'E-commerce', 'Optimización', 'Migración'],
  },
];

const offices = [
  {
    city: 'Ciudad de México',
    address: 'Av. Insurgentes Sur 1234, Piso 15',
    colony: 'Col. Del Valle Norte, 03103',
    phone: '+52 (55) 5123-4567',
    hours: 'Lunes a Viernes 9:00 - 18:00',
    type: 'Oficina Principal',
    services: ['Soporte presencial', 'Consultoría', 'Capacitación'],
  },
  {
    city: 'Guadalajara',
    address: 'Av. López Mateos Norte 567',
    colony: 'Col. Zona Minerva, 44600',
    phone: '+52 (33) 3123-4567',
    hours: 'Lunes a Viernes 9:00 - 18:00',
    type: 'Centro de Operaciones',
    services: ['Soporte técnico', 'Monitoreo 24/7'],
  },
  {
    city: 'Monterrey',
    address: 'Av. Constitución 890',
    colony: 'Col. Centro, 64000',
    phone: '+52 (81) 8123-4567',
    hours: 'Lunes a Viernes 9:00 - 17:00',
    type: 'Oficina Regional',
    services: ['Ventas', 'Soporte empresarial'],
  },
];

const faqs = [
  {
    question: '¿Cuál es el tiempo de respuesta del soporte?',
    answer: 'Chat en vivo: < 30 segundos | WhatsApp: < 2 minutos | Email: < 2 horas | Teléfono: Sin espera',
  },
  {
    question: '¿El soporte está disponible fines de semana?',
    answer: 'Sí, nuestro chat y soporte técnico funcionan 24/7 incluyendo fines de semana y días festivos.',
  },
  {
    question: '¿Puedo agendar una llamada con un experto?',
    answer: 'Por supuesto, puedes agendar una consultoría gratuita a través de cualquier canal de contacto.',
  },
  {
    question: '¿Hay soporte en español?',
    answer: 'Todo nuestro equipo habla español nativo y está especializado en el mercado mexicano.',
  },
];

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Hablemos de tu<br />
              <span className="text-yellow-300">Proyecto Digital</span>
            </h1>
            <p className="text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Nuestro equipo de expertos está listo para ayudarte. Soporte 24/7 en español, 
              respuesta inmediata y soluciones personalizadas para tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" asChild>
                <Link href="#chat">
                  Chat Inmediato
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-600" asChild>
                <Link href="tel:+52155123456789">
                  Llamar Ahora
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Methods */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Múltiples Formas de Contactarnos
            </h2>
            <p className="text-lg text-secondary-600">
              Elige el canal que prefieras, todos con respuesta garantizada
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-secondary-600 text-sm mb-4">
                    {method.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="text-xs text-primary-600 font-medium">
                      {method.available}
                    </div>
                    <div className="text-xs text-secondary-500">
                      Respuesta: {method.response}
                    </div>
                  </div>
                  <Button className="w-full" size="sm" asChild>
                    <Link href={method.href}>
                      {method.action}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Envíanos un Mensaje
            </h2>
            <p className="text-lg text-secondary-600">
              Cuéntanos sobre tu proyecto y te contactaremos en menos de 2 horas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Card className="order-2 lg:order-1">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Email corporativo *
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="tu@empresa.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="+52 555 123 4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Tipo de consulta *
                    </label>
                    <select className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                      <option>Selecciona una opción</option>
                      <option>Soporte técnico</option>
                      <option>Cotización de servicios</option>
                      <option>Migración de hosting</option>
                      <option>Consultoría especializada</option>
                      <option>Problemas de facturación</option>
                      <option>Desarrollo web</option>
                      <option>Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Cuéntanos sobre tu proyecto *
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-y"
                      placeholder="Describe tu proyecto, necesidades técnicas, presupuesto estimado..."
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="mt-1 w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                      required
                    />
                    <label htmlFor="privacy" className="text-sm text-secondary-600">
                      Acepto el tratamiento de mis datos personales conforme a la{' '}
                      <Link href="/legal/privacidad" className="text-primary-600 hover:underline">
                        Política de Privacidad
                      </Link>
                    </label>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Enviar Mensaje
                    <EnvelopeIcon className="h-4 w-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="order-1 lg:order-2 space-y-6">
              <Card className="bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-primary-900 mb-4">
                    ¿Por qué elegir ARCII Cloud?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <ShieldCheckIcon className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span className="text-primary-800">10+ años de experiencia comprobada</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <UserGroupIcon className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span className="text-primary-800">+50,000 clientes satisfechos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ClockIcon className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span className="text-primary-800">Soporte 24/7 en español</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <GlobeAltIcon className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span className="text-primary-800">Infraestructura global premium</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-lg font-bold text-secondary-900 mb-4">
                    Respuesta Garantizada
                  </h3>
                  <div className="space-y-3 text-sm text-secondary-600">
                    <div className="flex justify-between">
                      <span>Chat en vivo:</span>
                      <span className="font-medium text-green-600">&lt; 30 segundos</span>
                    </div>
                    <div className="flex justify-between">
                      <span>WhatsApp:</span>
                      <span className="font-medium text-green-600">< 2 minutos</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Email:</span>
                      <span className="font-medium text-blue-600">< 2 horas</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Teléfono:</span>
                      <span className="font-medium text-primary-600">Sin espera</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Departamentos Especializados
            </h2>
            <p className="text-lg text-secondary-600">
              Contacta directamente al equipo que mejor puede ayudarte
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{dept.name}</CardTitle>
                  <p className="text-secondary-600 text-sm">{dept.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <EnvelopeIcon className="h-4 w-4 text-secondary-400" />
                      <a href={`mailto:${dept.email}`} className="text-primary-600 hover:underline text-sm">
                        {dept.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <PhoneIcon className="h-4 w-4 text-secondary-400" />
                      <a href={`tel:${dept.phone.replace(/\s/g, '')}`} className="text-primary-600 hover:underline text-sm">
                        {dept.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <ClockIcon className="h-4 w-4 text-secondary-400" />
                      <span className="text-secondary-600 text-sm">{dept.hours}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {dept.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Offices */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Nuestras Oficinas
            </h2>
            <p className="text-lg text-secondary-600">
              Visítanos en cualquiera de nuestras ubicaciones
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{office.city}</CardTitle>
                    <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">
                      {office.type}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPinIcon className="h-4 w-4 text-secondary-400 mt-1 flex-shrink-0" />
                      <div className="text-sm text-secondary-600">
                        <div>{office.address}</div>
                        <div>{office.colony}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <PhoneIcon className="h-4 w-4 text-secondary-400" />
                      <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-primary-600 hover:underline text-sm">
                        {office.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <ClockIcon className="h-4 w-4 text-secondary-400" />
                      <span className="text-secondary-600 text-sm">{office.hours}</span>
                    </div>
                    
                    <div className="pt-4 border-t border-secondary-100">
                      <div className="text-xs font-medium text-secondary-700 mb-2">Servicios:</div>
                      <div className="flex flex-wrap gap-1">
                        {office.services.map((service, serviceIndex) => (
                          <span
                            key={serviceIndex}
                            className="px-2 py-1 bg-secondary-100 text-secondary-600 text-xs rounded"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-secondary-600">
              Respuestas rápidas a las dudas más comunes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-secondary-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-secondary-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Emergency Contact */}
        <section>
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-red-900 mb-4">
                🚨 Soporte de Emergencia 24/7
              </h2>
              <p className="text-red-700 mb-6 max-w-2xl mx-auto">
                Si tienes una emergencia crítica que afecta tu sitio web o servicios, 
                contáctanos inmediatamente a través de estos canales prioritarios:
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-red-600 hover:bg-red-700 text-white" asChild>
                  <Link href="tel:+52155123456789">
                    📞 Llamar Emergencia
                  </Link>
                </Button>
                
                <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white" asChild>
                  <Link href="#chat">
                    💬 Chat Inmediato
                  </Link>
                </Button>
              </div>
              
              <div className="mt-6 text-sm text-red-600">
                <strong>Tiempo de respuesta garantizado:</strong> Menos de 5 minutos para emergencias críticas
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}