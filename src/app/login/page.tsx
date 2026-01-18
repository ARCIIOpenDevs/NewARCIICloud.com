import type { Metadata } from 'next';
import { LoginForm } from '@/components/forms/LoginForm';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  CloudIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Iniciar Sesión | Área de Clientes',
  description: 'Accede a tu panel de control ARCII Cloud. Gestiona tus servicios de hosting, VPS, dominios y más desde un solo lugar.',
  keywords: [
    'login arcii cloud',
    'area de clientes',
    'panel de control',
    'acceso hosting',
    'cpanel arcii cloud',
    'gestionar servicios hosting'
  ],
  openGraph: {
    title: 'Área de Clientes | Panel de Control ARCII Cloud',
    description: '🔐 Accede a tu panel: gestiona hosting, VPS, dominios, facturas y soporte técnico 24/7.',
    url: 'https://new.arciicloud.com/login',
    type: 'website',
  },
};

const benefits = [
  {
    title: 'Panel Unificado',
    description: 'Gestiona todos tus servicios desde un solo lugar',
    icon: CloudIcon,
    gradient: 'from-blue-400 to-cyan-500',
  },
  {
    title: 'Seguridad Total',
    description: '2FA, SSL y encriptación end-to-end',
    icon: ShieldCheckIcon,
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    title: 'Soporte 24/7',
    description: 'Chat directo con técnicos certificados',
    icon: UserGroupIcon,
    gradient: 'from-purple-400 to-indigo-500',
  },
  {
    title: 'Recursos en Tiempo Real',
    description: 'Monitoring y métricas avanzadas',
    icon: CpuChipIcon,
    gradient: 'from-orange-400 to-red-500',
  },
];

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Login Form */}
          <div className="order-2 lg:order-1">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl flex items-center justify-center">
                    <CloudIcon className="h-7 w-7 text-white" />
                  </div>
                  <span className="text-3xl font-bold text-secondary-900">
                    ARCII<span className="text-primary-600">Cloud</span>
                  </span>
                </div>
                <h1 className="text-2xl font-bold text-secondary-900 mb-2">
                  Bienvenido de vuelta
                </h1>
                <p className="text-secondary-600">
                  Accede a tu panel de control y gestiona tus servicios
                </p>
              </div>

              <Card className="shadow-xl border-0">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl">Iniciar Sesión</CardTitle>
                  <CardDescription>
                    Ingresa tus credenciales para continuar
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <LoginForm />
                  
                  <div className="mt-6 text-center">
                    <p className="text-sm text-secondary-600">
                      ¿No tienes cuenta? {' '}
                      <Link href="/registro" className="text-primary-600 hover:text-primary-700 font-medium">
                        Crear cuenta gratuita
                      </Link>
                    </p>
                    <Link 
                      href="/recuperar-password" 
                      className="text-sm text-secondary-500 hover:text-primary-600 mt-2 inline-block"
                    >
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 text-center">
                <p className="text-xs text-secondary-500">
                  Protegido por encriptación SSL de 256 bits
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Benefits */}
          <div className="order-1 lg:order-2">
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
                Tu centro de control total
              </h2>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Gestiona hosting, VPS, dominios, facturas y obtén soporte técnico 
                especializado desde tu panel personalizado.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={benefit.title} className="hover:shadow-lg transition-all duration-300" hover={false}>
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center mb-4`}>
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-secondary-600 text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-1">¿Necesitas ayuda?</h3>
                  <p className="text-primary-100 text-sm">
                    Nuestros expertos están disponibles 24/7
                  </p>
                </div>
                <Button variant="secondary" size="sm" asChild>
                  <Link href="/contacto">Contactar</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}