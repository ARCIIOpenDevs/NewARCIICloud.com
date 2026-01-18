import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  KeyIcon,
  EnvelopeIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Recuperar Contraseña ARCII Cloud | Reset Password México 2026',
  description: 'Recupera tu contraseña de ARCII Cloud en minutos. Proceso seguro y rápido para acceder nuevamente a tu panel de hosting mexicano.',
  keywords: [
    'recuperar contraseña arcii cloud',
    'reset password hosting mexico',
    'olvidé contraseña arcii cloud',
    'restablecer password hosting',
    'recuperar acceso panel hosting',
    'forgot password arcii cloud'
  ],
  openGraph: {
    title: 'Recuperar Contraseña ARCII Cloud | Reset Seguro',
    description: '🔐 Recupera tu acceso de forma segura en minutos. Proceso automático y protegido.',
    url: 'https://new.arciicloud.com/recuperar-password',
    type: 'website',
  },
};

const steps = [
  {
    icon: EnvelopeIcon,
    title: 'Ingresa tu Email',
    description: 'Escribe el email asociado a tu cuenta ARCII Cloud',
    time: '30 segundos'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Verificación Segura',
    description: 'Enviamos un enlace de recuperación cifrado a tu correo',
    time: '1 minuto'
  },
  {
    icon: KeyIcon,
    title: 'Nueva Contraseña',
    description: 'Crea una nueva contraseña segura desde el enlace',
    time: '1 minuto'
  },
  {
    icon: CheckCircleIcon,
    title: 'Acceso Restaurado',
    description: 'Inicia sesión con tu nueva contraseña inmediatamente',
    time: 'Inmediato'
  }
];

const faqs = [
  {
    question: '¿Cuánto tiempo tarda el enlace en llegar?',
    answer: 'Los enlaces de recuperación se envían instantáneamente. Si no lo ves en tu bandeja de entrada, revisa la carpeta de spam o correo no deseado.'
  },
  {
    question: '¿Por cuánto tiempo es válido el enlace?',
    answer: 'Por seguridad, los enlaces de recuperación caducan en 24 horas. Si no lo usas en ese tiempo, deberás solicitar uno nuevo.'
  },
  {
    question: '¿Qué hago si no recuerdo mi email?',
    answer: 'Contacta a nuestro soporte técnico 24/7 con tu nombre de dominio o datos de facturación. Te ayudaremos a recuperar tu cuenta.'
  },
  {
    question: '¿El proceso afecta mi sitio web?',
    answer: 'No. Cambiar tu contraseña no afecta el funcionamiento de tu sitio web ni los servicios contratados. Todo sigue funcionando normalmente.'
  },
  {
    question: '¿Puedo usar la misma contraseña anterior?',
    answer: 'Por seguridad, recomendamos usar una contraseña nueva y más fuerte. El sistema te sugerirá crear una contraseña diferente.'
  }
];

const securityTips = [
  {
    icon: ShieldCheckIcon,
    title: 'Usa contraseñas únicas',
    description: 'No reutilices contraseñas de otras plataformas'
  },
  {
    icon: KeyIcon,
    title: 'Mínimo 12 caracteres',
    description: 'Combina letras, números y símbolos especiales'
  },
  {
    icon: CheckCircleIcon,
    title: 'Activar 2FA',
    description: 'Habilita autenticación de dos factores para mayor seguridad'
  }
];

export default function RecuperarPasswordPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-primary-600 to-primary-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <KeyIcon className="h-10 w-10 text-white" />
          </div>
          
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">
            Recuperar Contraseña
          </h1>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Te ayudamos a recuperar el acceso a tu cuenta ARCII Cloud de forma rápida y segura. 
            El proceso toma menos de 3 minutos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Recovery Form */}
          <div>
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <EnvelopeIcon className="h-6 w-6 text-primary-600" />
                  Solicitar Recuperación
                </CardTitle>
                <p className="text-secondary-600">
                  Ingresa tu email para recibir el enlace de recuperación
                </p>
              </CardHeader>
              
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                      Email de tu cuenta *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="tu@email.com"
                        required
                      />
                      <EnvelopeIcon className="h-5 w-5 text-secondary-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                    <div className="text-xs text-secondary-500 mt-2">
                      Usa el mismo email con el que creaste tu cuenta
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <ShieldCheckIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-blue-800">
                        <div className="font-medium mb-1">Proceso 100% Seguro</div>
                        <div>
                          El enlace de recuperación está cifrado y caduca en 24 horas. 
                          Solo tú podrás acceder desde tu email.
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Enviar Enlace de Recuperación
                    <ArrowRightIcon className="h-4 w-4 ml-2" />
                  </Button>
                </form>

                <div className="space-y-4 mt-8 pt-6 border-t border-secondary-200">
                  <div className="text-center">
                    <div className="text-sm text-secondary-600 mb-3">
                      ¿Recordaste tu contraseña?
                    </div>
                    <Button variant="outline" asChild>
                      <Link href="/login">
                        Volver a Iniciar Sesión
                      </Link>
                    </Button>
                  </div>

                  <div className="text-center">
                    <div className="text-sm text-secondary-600 mb-3">
                      ¿No tienes cuenta aún?
                    </div>
                    <Button variant="ghost" asChild>
                      <Link href="/registro" className="text-primary-600 hover:text-primary-700">
                        Crear Cuenta Gratuita
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support Card */}
            <Card className="mt-6 bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <QuestionMarkCircleIcon className="h-8 w-8 text-orange-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-orange-900 mb-2">
                      ¿Necesitas Ayuda Personalizada?
                    </h3>
                    <p className="text-orange-800 text-sm mb-4">
                      Nuestro equipo técnico está disponible 24/7 para ayudarte a recuperar tu cuenta. 
                      Contacta por WhatsApp, email o teléfono.
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-100" asChild>
                        <Link href="/contacto">
                          Contactar Soporte
                        </Link>
                      </Button>
                      <Button size="sm" variant="ghost" className="text-orange-700 hover:bg-orange-100" asChild>
                        <Link href="https://wa.me/5215551234567" target="_blank">
                          WhatsApp: +52 555 123 4567
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* How it Works */}
          <div>
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">
              Cómo Funciona la Recuperación
            </h2>
            
            <div className="space-y-6 mb-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <step.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-secondary-600 text-sm mb-1">
                      {step.description}
                    </p>
                    <div className="text-primary-600 text-xs font-medium">
                      ⏱️ {step.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Security Tips */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-green-900 mb-4">
                  💡 Tips de Seguridad
                </h3>
                
                <div className="space-y-4">
                  {securityTips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <tip.icon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-green-900 mb-1">
                          {tip.title}
                        </div>
                        <div className="text-green-800 text-sm">
                          {tip.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-secondary-600">
              Resolvemos las dudas más comunes sobre recuperación de contraseñas
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

        {/* Success Message Template */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
            <CardContent className="p-8 text-center">
              <CheckCircleIcon className="h-16 w-16 mx-auto mb-4 text-green-200" />
              <h2 className="text-2xl font-bold mb-4">
                ¡Enlace Enviado Exitosamente!
              </h2>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                Revisa tu bandeja de entrada (y carpeta de spam). Haz clic en el enlace 
                para crear tu nueva contraseña. El enlace caduca en 24 horas.
              </p>
              
              <div className="flex items-center justify-center gap-8 text-sm text-green-200">
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-4 w-4" />
                  <span>Válido 24 horas</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="h-4 w-4" />
                  <span>Enlace cifrado</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4" />
                  <span>Uso único</span>
                </div>
              </div>

              <div className="mt-6">
                <Button variant="secondary" asChild>
                  <Link href="/login">
                    Volver a Login
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Bottom CTA */}
        <section>
          <Card className="bg-gradient-to-r from-secondary-600 to-secondary-800 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                ¿Sigues Teniendo Problemas?
              </h2>
              <p className="text-secondary-100 mb-6 max-w-2xl mx-auto">
                Nuestro equipo de soporte técnico especializado está disponible 24/7 
                para ayudarte personalmente. No te quedes sin acceso a tu cuenta.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="secondary" asChild>
                  <Link href="/mesa-de-ayuda">
                    Abrir Ticket de Soporte
                  </Link>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-secondary-800" asChild>
                  <Link href="https://wa.me/5215551234567" target="_blank">
                    WhatsApp Directo
                  </Link>
                </Button>
                <Button variant="ghost" className="text-secondary-200 hover:text-white hover:bg-secondary-700" asChild>
                  <Link href="tel:+5215551234567">
                    📞 Llamar Ahora
                  </Link>
                </Button>
              </div>
              
              <div className="mt-4 text-sm text-secondary-300">
                Tiempo promedio de respuesta: menos de 5 minutos
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}