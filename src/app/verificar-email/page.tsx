import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  EnvelopeIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  InboxIcon,
  EyeIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Verificar Email ARCII Cloud | Confirma tu Cuenta México 2026',
  description: 'Verifica tu email para activar tu cuenta ARCII Cloud. Proceso rápido y seguro para acceder a tu hosting premium mexicano.',
  keywords: [
    'verificar email arcii cloud',
    'confirmar cuenta hosting mexico',
    'activar cuenta arcii cloud',
    'verificación email hosting',
    'confirmar correo hosting mexico',
    'verify email arcii cloud'
  ],
  openGraph: {
    title: 'Verificar Email ARCII Cloud | Activa tu Cuenta',
    description: '📧 Verifica tu email en un clic. Activación instantánea para acceder a tu hosting premium.',
    url: 'https://new.arciicloud.com/verificar-email',
    type: 'website',
  },
};

const verificationSteps = [
  {
    icon: EnvelopeIcon,
    title: 'Email Enviado',
    description: 'Hemos enviado un código de verificación a tu correo',
    status: 'completed'
  },
  {
    icon: InboxIcon,
    title: 'Revisar Inbox',
    description: 'Busca el email en tu bandeja de entrada o spam',
    status: 'current'
  },
  {
    icon: CheckCircleIcon,
    title: 'Hacer Clic',
    description: 'Haz clic en el enlace o ingresa el código aquí',
    status: 'pending'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Cuenta Activada',
    description: 'Tu cuenta estará lista para usar inmediatamente',
    status: 'pending'
  }
];

const troubleshootingTips = [
  {
    icon: ClockIcon,
    title: 'Espera unos minutos',
    description: 'A veces los emails pueden tardar hasta 5 minutos en llegar'
  },
  {
    icon: InboxIcon,
    title: 'Revisa carpeta de spam',
    description: 'Los emails de verificación pueden llegar a correo no deseado'
  },
  {
    icon: EyeIcon,
    title: 'Busca "ARCII Cloud"',
    description: 'El asunto del email es "Verifica tu cuenta ARCII Cloud"'
  },
  {
    icon: ArrowPathIcon,
    title: 'Solicita nuevo código',
    description: 'Si no llega después de 10 minutos, pide uno nuevo'
  }
];

const benefits = [
  'Acceso inmediato a tu panel',
  'Migración gratuita incluida',
  'Certificado SSL automático',
  'Backup diario automatizado',
  'Soporte técnico prioritario',
  'Facturación automática',
  'Monitoreo 24/7 incluido',
  'Garantía 99.9% uptime'
];

export default function VerificarEmailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <EnvelopeIcon className="h-10 w-10 text-white" />
          </div>
          
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">
            Verifica tu Email
          </h1>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Te hemos enviado un email de verificación. Revisa tu bandeja de entrada 
            y haz clic en el enlace para activar tu cuenta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Verification Form */}
          <div>
            <Card className="hover:shadow-xl transition-shadow mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600" />
                  Email de Verificación Enviado
                </CardTitle>
                <p className="text-secondary-600">
                  Hemos enviado un código de verificación a:
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-2">
                  <div className="font-mono text-blue-900">user@example.com</div>
                </div>
              </CardHeader>
              
              <CardContent>
                {/* Manual Verification Code Input */}
                <div className="mb-8">
                  <h3 className="font-semibold text-secondary-900 mb-4">
                    Opción 1: Ingresa el código manualmente
                  </h3>
                  
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="verificationCode" className="block text-sm font-medium text-secondary-700 mb-2">
                        Código de verificación de 6 dígitos
                      </label>
                      <input
                        type="text"
                        id="verificationCode"
                        name="verificationCode"
                        className="w-full px-4 py-3 text-center text-2xl font-mono border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent tracking-widest"
                        placeholder="000000"
                        maxLength={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Verificar Código
                      <CheckCircleIcon className="h-4 w-4 ml-2" />
                    </Button>
                  </form>
                </div>

                <div className="border-t border-secondary-200 pt-6">
                  <h3 className="font-semibold text-secondary-900 mb-4">
                    Opción 2: Haz clic en el enlace del email
                  </h3>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-green-800">
                        <div className="font-medium mb-1">Método Recomendado</div>
                        <div>
                          Simplemente haz clic en el botón "Verificar Email" del correo 
                          que acabamos de enviarte. Es más rápido y seguro.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Resend Email */}
                <div className="mt-8 pt-6 border-t border-secondary-200">
                  <div className="text-center">
                    <p className="text-sm text-secondary-600 mb-4">
                      ¿No has recibido el email?
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button variant="outline" size="sm">
                        <ArrowPathIcon className="h-4 w-4 mr-2" />
                        Reenviar Código
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href="/contacto" className="text-primary-600">
                          Contactar Soporte
                        </Link>
                      </Button>
                    </div>
                    
                    <div className="text-xs text-secondary-500 mt-3">
                      Puedes solicitar un nuevo código cada 2 minutos
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Troubleshooting */}
            <Card className="bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ExclamationTriangleIcon className="h-6 w-6 text-orange-600" />
                  <h3 className="font-bold text-orange-900">
                    ¿No encuentras el email?
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {troubleshootingTips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <tip.icon className="h-4 w-4 text-orange-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium text-orange-900 text-sm">
                          {tip.title}
                        </div>
                        <div className="text-orange-800 text-xs">
                          {tip.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-orange-200">
                  <Button size="sm" variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-100" asChild>
                    <Link href="https://wa.me/5215551234567" target="_blank">
                      WhatsApp: +52 555 123 4567
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Process Steps */}
          <div>
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">
              Proceso de Verificación
            </h2>
            
            <div className="space-y-6 mb-8">
              {verificationSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    step.status === 'completed' ? 'bg-green-500' :
                    step.status === 'current' ? 'bg-blue-500' :
                    'bg-secondary-300'
                  }`}>
                    <step.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className={`font-bold mb-1 ${
                      step.status === 'current' ? 'text-blue-600' : 'text-secondary-900'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-secondary-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits After Verification */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-green-900 mb-4">
                  🎉 Después de la Verificación
                </h3>
                
                <div className="grid grid-cols-2 gap-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-green-800 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Email Preview */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">
              ¿Cómo se ve el Email de Verificación?
            </h2>
            <p className="text-secondary-600">
              Busca un email similar a este en tu bandeja de entrada
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              {/* Email Header */}
              <div className="border-b border-secondary-200 pb-4 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">AC</span>
                  </div>
                  <div>
                    <div className="font-bold text-secondary-900">ARCII Cloud</div>
                    <div className="text-sm text-secondary-600">noreply@arciicloud.com</div>
                  </div>
                </div>
                <div className="font-bold text-lg text-secondary-900">
                  ✅ Verifica tu cuenta ARCII Cloud
                </div>
              </div>

              {/* Email Content */}
              <div className="space-y-4 text-sm">
                <p className="text-secondary-700">
                  ¡Hola! Gracias por crear tu cuenta en ARCII Cloud.
                </p>
                
                <p className="text-secondary-700">
                  Para completar tu registro y acceder a tu panel de hosting, 
                  haz clic en el botón de abajo:
                </p>

                <div className="text-center py-6">
                  <Button className="bg-primary-600 hover:bg-primary-700" size="lg">
                    Verificar mi Email
                  </Button>
                </div>

                <p className="text-secondary-600 text-xs">
                  O copia y pega este código en la página web: <strong className="font-mono">ABC123</strong>
                </p>

                <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-3 text-xs text-secondary-600">
                  Este enlace caduca en 24 horas. Si no fuiste tú quien creó esta cuenta, 
                  puedes ignorar este email.
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Success State */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
            <CardContent className="p-8 text-center">
              <CheckCircleIcon className="h-16 w-16 mx-auto mb-4 text-green-200" />
              <h2 className="text-2xl font-bold mb-4">
                ¡Email Verificado Correctamente!
              </h2>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                Tu cuenta ARCII Cloud está ahora completamente activada. 
                Ya puedes acceder a tu panel de control y empezar a usar todos nuestros servicios.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/dashboard">
                    Acceder a mi Panel
                  </Link>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600" asChild>
                  <Link href="/empezar">
                    Configurar mi Hosting
                  </Link>
                </Button>
              </div>
              
              <div className="mt-6 text-sm text-green-200">
                🎉 ¡Bienvenido a la familia ARCII Cloud!
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Support Section */}
        <section>
          <Card className="bg-gradient-to-r from-secondary-600 to-secondary-800 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                ¿Necesitas Ayuda con la Verificación?
              </h2>
              <p className="text-secondary-100 mb-6 max-w-2xl mx-auto">
                Nuestro equipo técnico está disponible 24/7 para ayudarte con cualquier 
                problema durante el proceso de verificación.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <Button variant="secondary" asChild>
                  <Link href="/mesa-de-ayuda">
                    💬 Chat en Vivo
                  </Link>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-secondary-800" asChild>
                  <Link href="https://wa.me/5215551234567" target="_blank">
                    📱 WhatsApp
                  </Link>
                </Button>
                <Button variant="ghost" className="text-secondary-200 hover:text-white hover:bg-secondary-700" asChild>
                  <Link href="tel:+5215551234567">
                    📞 Teléfono
                  </Link>
                </Button>
              </div>
              
              <div className="mt-4 text-sm text-secondary-300">
                Tiempo promedio de respuesta: menos de 2 minutos
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}