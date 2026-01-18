'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  CloudIcon,
  ServerIcon,
  GlobeAltIcon,
  EnvelopeIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';

const negociosMenu = [
  {
    name: 'Hosting Web',
    description: 'Planes optimizados para sitios web y WordPress',
    href: '/negocios/hosting-web',
    icon: GlobeAltIcon,
    subItems: [
      { name: 'Hosting Eco', href: '/negocios/hosting-web/eco', price: 'Desde $299/mes' },
      { name: 'Hosting Estándar', href: '/negocios/hosting-web/estandar', price: 'Desde $599/mes' },
      { name: 'Hosting Performance', href: '/negocios/hosting-web/performance', price: 'Desde $999/mes' },
    ],
  },
  {
    name: 'VPS Cloud',
    description: 'Servidores virtuales con recursos dedicados',
    href: '/negocios/vps-cloud',
    icon: CloudIcon,
    subItems: [
      { name: 'VPS Básico', href: '/negocios/vps-cloud/basico', price: 'Desde $899/mes' },
      { name: 'VPS Profesional', href: '/negocios/vps-cloud/profesional', price: 'Desde $1,499/mes' },
      { name: 'VPS Empresarial', href: '/negocios/vps-cloud/empresarial', price: 'Desde $2,999/mes' },
    ],
  },
  {
    name: 'Dominios',
    description: 'Registro y gestión de dominios',
    href: '/negocios/dominios',
    icon: GlobeAltIcon,
    subItems: [
      { name: 'Registro .com', href: '/negocios/dominios/registro', price: 'Desde $199/año' },
      { name: 'Dominios .mx', href: '/negocios/dominios/mx', price: 'Desde $299/año' },
      { name: 'Transferencias', href: '/negocios/dominios/transferencia', price: 'Gratis' },
    ],
  },
  {
    name: 'Email Corporativo',
    description: 'Cuentas de correo profesionales',
    href: '/negocios/email',
    icon: EnvelopeIcon,
    subItems: [
      { name: 'Email Business', href: '/negocios/email/business', price: 'Desde $99/mes' },
      { name: 'Email Premium', href: '/negocios/email/premium', price: 'Desde $199/mes' },
      { name: 'Email Enterprise', href: '/negocios/email/enterprise', price: 'Desde $399/mes' },
    ],
  },
];

const empresasMenu = [
  {
    name: 'Servidores Dedicados',
    description: 'Hardware exclusivo de alta performance',
    href: '/empresas/servidores-dedicados',
    icon: ServerIcon,
    subItems: [
      { name: 'Intel Xeon', href: '/empresas/servidores-dedicados/intel', price: 'Desde $4,999/mes' },
      { name: 'AMD EPYC', href: '/empresas/servidores-dedicados/amd', price: 'Desde $5,999/mes' },
      { name: 'Configuración Custom', href: '/empresas/servidores-dedicados/custom', price: 'Cotización' },
    ],
  },
  {
    name: 'Centro de Datos',
    description: 'Infraestructura y colocation',
    href: '/empresas/centro-datos',
    icon: BuildingOfficeIcon,
    subItems: [
      { name: 'Colocation', href: '/empresas/centro-datos/colocation', price: 'Personalizado' },
      { name: 'Private Cloud', href: '/empresas/centro-datos/private-cloud', price: 'Cotización' },
      { name: 'Hybrid Solutions', href: '/empresas/centro-datos/hybrid', price: 'Consulta' },
    ],
  },
  {
    name: 'Soluciones por Sector',
    description: 'Especializadas por industria',
    href: '/empresas/soluciones-sector',
    icon: ShieldCheckIcon,
    subItems: [
      { name: 'Fintech', href: '/empresas/soluciones-sector/fintech', price: 'Compliance PCI' },
      { name: 'Healthcare', href: '/empresas/soluciones-sector/healthcare', price: 'HIPAA Ready' },
      { name: 'E-commerce', href: '/empresas/soluciones-sector/ecommerce', price: 'Alta Performance' },
    ],
  },
  {
    name: 'Infraestructura Crítica',
    description: 'Soluciones de alta disponibilidad',
    href: '/empresas/infraestructura-critica',
    icon: CpuChipIcon,
    subItems: [
      { name: 'Alta Disponibilidad', href: '/empresas/infraestructura-critica/ha', price: '99.99% SLA' },
      { name: 'Disaster Recovery', href: '/empresas/infraestructura-critica/dr', price: 'RTO < 1hr' },
      { name: 'Backup Enterprise', href: '/empresas/infraestructura-critica/backup', price: 'Automatizado' },
    ],
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-success-400 rounded-full animate-pulse"></span>
                Todos los sistemas operando normalmente
              </span>
              <span>📞 +52 (55) 1234-5678</span>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Link href="/login" className="hover:text-primary-200 transition-colors">
                Área de Clientes
              </Link>
              <span>|</span>
              <Link href="/soporte" className="hover:text-primary-200 transition-colors">
                Soporte 24/7
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl flex items-center justify-center">
                <CloudIcon className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-secondary-900">
                ARCII<span className="text-primary-600">Cloud</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Negocios Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('negocios')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-secondary-700 hover:text-primary-600 font-medium transition-colors">
                Negocios
                <ChevronDownIcon className="h-4 w-4" />
              </button>
              
              {activeDropdown === 'negocios' && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-2xl shadow-2xl border border-secondary-200 p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {negociosMenu.map((item) => (
                      <div key={item.name}>
                        <Link 
                          href={item.href}
                          className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary-50 transition-colors group"
                        >
                          <div className="bg-primary-100 p-2 rounded-lg group-hover:bg-primary-200 transition-colors">
                            <item.icon className="h-5 w-5 text-primary-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-secondary-900 group-hover:text-primary-600">
                              {item.name}
                            </h3>
                            <p className="text-sm text-secondary-600 mb-2">
                              {item.description}
                            </p>
                            <div className="space-y-1">
                              {item.subItems.map((subItem) => (
                                <div key={subItem.name} className="flex justify-between text-xs">
                                  <span className="text-secondary-600">{subItem.name}</span>
                                  <span className="text-primary-600 font-medium">{subItem.price}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-secondary-200 mt-6 pt-4 flex justify-between items-center">
                    <span className="text-sm text-secondary-600">¿No encuentras lo que buscas?</span>
                    <Button variant="outline" size="sm">
                      Ver Todos los Planes
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Empresas Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('empresas')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-secondary-700 hover:text-primary-600 font-medium transition-colors">
                Empresas
                <ChevronDownIcon className="h-4 w-4" />
              </button>
              
              {activeDropdown === 'empresas' && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-2xl shadow-2xl border border-secondary-200 p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {empresasMenu.map((item) => (
                      <div key={item.name}>
                        <Link 
                          href={item.href}
                          className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary-50 transition-colors group"
                        >
                          <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-2 rounded-lg">
                            <item.icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-secondary-900 group-hover:text-primary-600">
                              {item.name}
                            </h3>
                            <p className="text-sm text-secondary-600 mb-2">
                              {item.description}
                            </p>
                            <div className="space-y-1">
                              {item.subItems.map((subItem) => (
                                <div key={subItem.name} className="flex justify-between text-xs">
                                  <span className="text-secondary-600">{subItem.name}</span>
                                  <span className="text-primary-600 font-medium">{subItem.price}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-secondary-200 mt-6 pt-4 flex justify-between items-center">
                    <span className="text-sm text-secondary-600">¿Necesitas una solución personalizada?</span>
                    <Button variant="gradient" size="sm">
                      Solicitar Consultoría
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Other Menu Items */}
            <Link href="/datacenter" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors">
              Datacenter
            </Link>
            <Link href="/testimonios" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors">
              Testimonios
            </Link>
            <Link href="/estado" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors">
              Estado
            </Link>
            <Link href="/afiliados" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors">
              Afiliados
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard">Mi Panel</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/empezar">Empezar Ahora</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-secondary-700 hover:text-primary-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-secondary-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
            <div>
              <h3 className="font-semibold text-secondary-900 mb-3">Negocios</h3>
              <div className="space-y-2 pl-4">
                {negociosMenu.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    className="block py-2 text-secondary-600 hover:text-primary-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-secondary-900 mb-3">Empresas</h3>
              <div className="space-y-2 pl-4">
                {empresasMenu.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    className="block py-2 text-secondary-600 hover:text-primary-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-secondary-900 mb-3">Herramientas</h3>
              <div className="space-y-2 pl-4">
                <Link href="/speed-test" className="block py-2 text-secondary-600 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>
                  Test de Velocidad
                </Link>
                <Link href="/calculadora-avanzada" className="block py-2 text-secondary-600 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>
                  Calculadora de Costos
                </Link>
                <Link href="/comparar-planes" className="block py-2 text-secondary-600 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>
                  Comparar Planes
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-secondary-900 mb-3">Soporte</h3>
              <div className="space-y-2 pl-4">
                <Link href="/mesa-de-ayuda" className="block py-2 text-secondary-600 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>
                  Mesa de Ayuda
                </Link>
                <Link href="/estado" className="block py-2 text-secondary-600 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>
                  Estado de Servicios
                </Link>
                <Link href="/testimonios" className="block py-2 text-secondary-600 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>
                  Testimonios
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-secondary-900 mb-3">Oportunidades</h3>
              <div className="space-y-2 pl-4">
                <Link href="/afiliados" className="block py-2 text-secondary-600 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>
                  Programa de Afiliados
                </Link>
              </div>
            </div>
            
            <div className="border-t border-secondary-200 pt-6">
              <div className="flex flex-col gap-3">
                <Button variant="ghost" className="w-full" asChild>
                  <Link href="/dashboard">Mi Panel</Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link href="/empezar">Empezar Ahora</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}