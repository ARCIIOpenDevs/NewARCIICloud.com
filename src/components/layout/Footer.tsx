import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import {
  CloudIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon,
  ServerIcon,
  ShieldCheckIcon,
  ChatBubbleLeftEllipsisIcon,
} from '@heroicons/react/24/outline';

const serviciosNegocios = [
  { name: 'Hosting Web', href: '/negocios/hosting-web' },
  { name: 'VPS Cloud', href: '/negocios/vps-cloud' },
  { name: 'Dominios', href: '/negocios/dominios' },
  { name: 'Email Corporativo', href: '/negocios/email' },
  { name: 'SSL Certificados', href: '/negocios/ssl' },
  { name: 'Backup Cloud', href: '/negocios/backup' },
];

const serviciosEmpresas = [
  { name: 'Servidores Dedicados', href: '/empresas/servidores-dedicados' },
  { name: 'Centro de Datos', href: '/empresas/centro-datos' },
  { name: 'Soluciones por Sector', href: '/empresas/soluciones-sector' },
  { name: 'Infraestructura Crítica', href: '/empresas/infraestructura-critica' },
  { name: 'Compliance & Auditoría', href: '/empresas/compliance' },
  { name: 'Consultoría Técnica', href: '/empresas/consultoria' },
];

const recursos = [
  { name: 'Blog Técnico', href: '/blog' },
  { name: 'Documentación', href: '/docs' },
  { name: 'Tutoriales', href: '/tutoriales' },
  { name: 'API Reference', href: '/api-docs' },
  { name: 'Status Page', href: '/status' },
  { name: 'Calculadora de Precios', href: '/calculadora' },
];

const empresa = [
  { name: 'Acerca de Nosotros', href: '/acerca' },
  { name: 'Nuestro Equipo', href: '/equipo' },
  { name: 'Carreras', href: '/carreras' },
  { name: 'Prensa', href: '/prensa' },
  { name: 'Inversionistas', href: '/inversionistas' },
  { name: 'Responsabilidad Social', href: '/responsabilidad-social' },
];

const legal = [
  { name: 'Términos de Servicio', href: '/terminos' },
  { name: 'Política de Privacidad', href: '/privacidad' },
  { name: 'Política de Cookies', href: '/cookies' },
  { name: 'SLA Agreement', href: '/sla' },
  { name: 'Política de Abuse', href: '/abuse-policy' },
  { name: 'GDPR Compliance', href: '/gdpr' },
];

export function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl flex items-center justify-center">
                <CloudIcon className="h-7 w-7 text-white" />
              </div>
              <span className="text-3xl font-bold">
                ARCII<span className="text-primary-400">Cloud</span>
              </span>
            </div>
            <p className="text-secondary-300 mb-6 leading-relaxed">
              El hosting #1 de México. Servicios de infraestructura en la nube con 
              centros de datos en todo el mundo, soporte 24/7 y tecnología de vanguardia.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-secondary-300">
                <PhoneIcon className="h-5 w-5 text-primary-400" />
                <span>+52 (55) 1234-5678</span>
              </div>
              <div className="flex items-center gap-3 text-secondary-300">
                <EnvelopeIcon className="h-5 w-5 text-primary-400" />
                <span>contacto@arciicloud.com</span>
              </div>
              <div className="flex items-center gap-3 text-secondary-300">
                <MapPinIcon className="h-5 w-5 text-primary-400" />
                <span>Ciudad de México, México</span>
              </div>
            </div>
          </div>

          {/* Services Negocios */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-primary-400">Negocios</h3>
            <ul className="space-y-3">
              {serviciosNegocios.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-secondary-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Empresas */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-primary-400">Empresas</h3>
            <ul className="space-y-3">
              {serviciosEmpresas.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-secondary-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-primary-400">Recursos</h3>
            <ul className="space-y-3">
              {recursos.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-secondary-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-primary-400">Empresa</h3>
            <ul className="space-y-3">
              {empresa.slice(0, 6).map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-secondary-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter & CTA Section */}
        <div className="border-t border-secondary-800 mt-12 pt-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">¿Necesitas ayuda para elegir?</h3>
              <p className="text-secondary-300 mb-6">
                Nuestros expertos te ayudan a encontrar la solución perfecta para tu proyecto.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="gradient" rightIcon={<ChatBubbleLeftEllipsisIcon className="h-5 w-5" />}>
                  Chat con Experto
                </Button>
                <Button variant="ghost" className="text-white hover:bg-white/10">
                  Solicitar Llamada
                </Button>
              </div>
            </div>
            
            <div className="bg-secondary-800/50 rounded-2xl p-6 border border-secondary-700">
              <h4 className="font-semibold mb-3">Newsletter Técnico</h4>
              <p className="text-sm text-secondary-300 mb-4">
                Recibe tips, tutoriales y novedades del mundo hosting.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="tu@email.com"
                  className="flex-1 px-4 py-2 bg-secondary-700 border border-secondary-600 rounded-lg text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <Button size="sm">Suscribir</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-secondary-800 mt-12 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <ShieldCheckIcon className="h-6 w-6" />
              <span className="text-sm">ISO 27001</span>
            </div>
            <div className="flex items-center gap-2">
              <ServerIcon className="h-6 w-6" />
              <span className="text-sm">SOC 2 Type II</span>
            </div>
            <div className="flex items-center gap-2">
              <GlobeAltIcon className="h-6 w-6" />
              <span className="text-sm">Tier III+ DC</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">99.9%</span>
              <span className="text-sm">Uptime SLA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-secondary-400">
              © 2026 ARCII Cloud. Todos los derechos reservados.
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              {legal.slice(0, 4).map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className="text-secondary-400 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Support Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="gradient"
          size="lg"
          className="rounded-full shadow-2xl animate-pulse-slow"
          rightIcon={<ChatBubbleLeftEllipsisIcon className="h-5 w-5" />}
        >
          Soporte 24/7
        </Button>
      </div>
    </footer>
  );
}