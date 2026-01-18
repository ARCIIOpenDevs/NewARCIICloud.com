import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  UserCircleIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  ClockIcon,
  GiftIcon,
  UserGroupIcon,
  ArrowRightIcon,
  EyeIcon,
  EyeSlashIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Crear Cuenta ARCII Cloud | Registro Gratuito México 2026',
  description: 'Crea tu cuenta ARCII Cloud gratis en 2 minutos. Acceso inmediato, migración gratuita, soporte 24/7. Hosting premium México desde $299/mes.',
  keywords: [
    'crear cuenta arcii cloud',
    'registro hosting mexico',
    'cuenta gratuita hosting',
    'registrarse arcii cloud',
    'nueva cuenta hosting',
    'signup hosting mexico'
  ],
  openGraph: {
    title: 'Crear Cuenta ARCII Cloud | Registro Gratuito 2 Minutos',
    description: '✅ Registro gratuito, acceso inmediato, migración sin costo. Únete a +50K empresas mexicanas.',
    url: 'https://new.arciicloud.com/registro',
    type: 'website',
  },
};

const benefits = [
  {
    icon: ClockIcon,
    title: 'Acceso Inmediato',
    description: 'Tu cuenta estará lista en menos de 2 minutos'
  },
  {
    icon: GiftIcon,
    title: 'Migración Gratuita',
    description: 'Transferimos tu sitio desde cualquier proveedor sin costo'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Sin Compromisos',
    description: 'No hay contratos ni permanencias mínimas'
  },
  {
    icon: UserGroupIcon,
    title: 'Soporte Experto',
    description: 'Equipo técnico en español disponible 24/7'
  }
];

const steps = [
  {
    number: '1',
    title: 'Crear Cuenta',
    description: 'Completa el formulario con tus datos básicos',
    time: '30 segundos'
  },
  {
    number: '2',
    title: 'Verificar Email',
    description: 'Confirma tu dirección de correo electrónico',
    time: '1 minuto'
  },
  {
    number: '3',
    title: 'Elegir Plan',
    description: 'Selecciona el plan que mejor se adapte a tu proyecto',
    time: '30 segundos'
  },
  {
    number: '4',
    title: '¡Listo!',
    description: 'Accede a tu panel y empieza a crear',
    time: 'Inmediato'
  }
];

const features = [
  'Panel de control intuitivo',
  'Migración asistida gratuita',
  'Certificado SSL automático',
  'Backup automático incluido',
  'Soporte técnico 24/7',
  'Garantía 30 días',
  'Facturas automáticas',
  'API completa incluida'
];

const testimonials = [
  {
    name: 'Carlos Mendoza',
    company: 'TechStart México',
    text: 'El proceso de registro fue súper fácil. En 5 minutos ya tenía todo configurado y mi sitio funcionando.',
    rating: 5,
    avatar: '/testimonials/carlos-mendoza.jpg'
  },
  {
    name: 'María González',
    company: 'E-commerce Pro',
    text: 'Increíble la velocidad del registro. El soporte me ayudó con la migración el mismo día.',
    rating: 5,
    avatar: '/testimonials/maria-gonzalez.jpg'
  },
  {
    name: 'Roberto Silva',
    company: 'Agencia Digital',
    text: 'Llevo 2 años con ARCII Cloud. El registro fue el inicio de una excelente relación.',
    rating: 5,
    avatar: '/testimonials/roberto-silva.jpg'
  }
];

export default function RegistroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Crea tu Cuenta<br />
              <span className="text-yellow-300">en 2 Minutos</span>
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Únete a más de 50,000 empresas mexicanas que confían en ARCII Cloud. 
              Registro gratuito, acceso inmediato y soporte humano desde el primer día.
            </p>
            
            <div className="flex items-center justify-center gap-8 text-sm text-primary-200 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-4 w-4" />
                <span>Cuenta gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-4 w-4" />
                <span>Sin tarjeta requerida</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-4 w-4" />
                <span>Acceso inmediato</span>
              </div>
            </div>

            <Button size="xl" variant="secondary" asChild>
              <Link href="#registro-form">
                Crear Cuenta Gratis
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Registration Form */}
          <div id="registro-form">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <UserCircleIcon className="h-8 w-8 text-primary-600" />
                  Crear Cuenta Gratuita
                </CardTitle>
                <p className="text-secondary-600">
                  Completa el formulario y accede a tu panel en menos de 2 minutos
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-secondary-700 mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-secondary-700 mb-2">
                        Apellido *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Tu apellido"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                      Email corporativo *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="tu@empresa.com"
                      required
                    />
                    <div className="text-xs text-secondary-500 mt-1">
                      Usaremos este email para enviarte los datos de acceso
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2">
                      Empresa / Proyecto
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Nombre de tu empresa o proyecto"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="+52 555 123 4567"
                    />
                    <div className="text-xs text-secondary-500 mt-1">
                      Opcional: para soporte prioritario vía WhatsApp
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-secondary-700 mb-2">
                      Contraseña *
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent pr-12"
                        placeholder="Mínimo 8 caracteres"
                        required
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        <EyeSlashIcon className="h-5 w-5 text-secondary-400" />
                      </button>
                    </div>
                    <div className="text-xs text-secondary-500 mt-1">
                      Mínimo 8 caracteres, incluye mayúsculas y números
                    </div>
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-secondary-700 mb-2">
                      Confirmar contraseña *
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Confirma tu contraseña"
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="terms"
                        className="mt-1 w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        required
                      />
                      <label htmlFor="terms" className="text-sm text-secondary-600">
                        Acepto los{' '}
                        <Link href="/legal/terminos" className="text-primary-600 hover:underline">
                          Términos y Condiciones
                        </Link>{' '}
                        y la{' '}
                        <Link href="/legal/privacidad" className="text-primary-600 hover:underline">
                          Política de Privacidad
                        </Link>
                      </label>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="newsletter"
                        className="mt-1 w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                      />
                      <label htmlFor="newsletter" className="text-sm text-secondary-600">
                        Quiero recibir tips, guías y ofertas especiales (opcional)
                      </label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Crear Cuenta Gratis
                    <ArrowRightIcon className="h-4 w-4 ml-2" />
                  </Button>
                </form>

                <div className="text-center pt-6 border-t border-secondary-200">
                  <div className="text-sm text-secondary-600 mb-4">
                    ¿Ya tienes cuenta?
                  </div>
                  <Button variant="outline" asChild>
                    <Link href="/login">
                      Iniciar Sesión
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Benefits */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                ¿Por qué crear tu cuenta con ARCII Cloud?
              </h2>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-secondary-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-green-900 mb-4">
                  🎁 Beneficios Inmediatos
                </h3>
                
                <div className="space-y-2">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-600" />
                      <span className="text-green-800 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
                <div className="text-blue-800 font-medium mb-1">Empresas Confían en Nosotros</div>
                <div className="text-blue-600 text-sm">
                  Únete a la comunidad de hosting más grande de México
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How it Works */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Cómo Funciona el Registro
            </h2>
            <p className="text-lg text-secondary-600">
              Proceso simple y rápido para empezar en minutos
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold text-secondary-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-secondary-600 text-sm mb-2">
                  {step.description}
                </p>
                <div className="text-primary-600 text-xs font-medium">
                  ⏱️ {step.time}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Lo Que Dicen Nuestros Usuarios
            </h2>
            <p className="text-lg text-secondary-600">
              Experiencias reales de quienes ya se registraron
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <CheckCircleIcon key={i} className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-secondary-700 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-secondary-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-secondary-600">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Security Info */}
        <section className="mb-20">
          <Card className="bg-gradient-to-r from-secondary-600 to-secondary-800 text-white">
            <CardContent className="p-8 text-center">
              <ShieldCheckIcon className="h-16 w-16 mx-auto mb-4 text-secondary-200" />
              <h2 className="text-2xl font-bold mb-4">
                Tu Información Está Segura
              </h2>
              <p className="text-secondary-100 mb-6 max-w-2xl mx-auto">
                Utilizamos cifrado SSL de grado bancario y nunca compartimos tu información 
                personal con terceros. Cumplimos con todas las regulaciones de privacidad.
              </p>
              
              <div className="flex items-center justify-center gap-8 text-sm text-secondary-200">
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="h-4 w-4" />
                  <span>Cifrado SSL 256-bit</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="h-4 w-4" />
                  <span>ISO 27001 certificado</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="h-4 w-4" />
                  <span>GDPR compliant</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <section>
          <Card className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                ¿Listo para Empezar tu Proyecto Digital?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Crea tu cuenta gratuita ahora y accede a hosting premium mexicano 
                con soporte humano 24/7. Sin compromisos, sin sorpresas.
              </p>
              
              <Button size="xl" variant="secondary" asChild>
                <Link href="#registro-form">
                  Crear Cuenta Gratis Ahora
                </Link>
              </Button>
              
              <div className="mt-6 text-sm text-primary-200">
                ⚡ Acceso inmediato • 🎁 Migración gratuita • 🛡️ 30 días garantía
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}