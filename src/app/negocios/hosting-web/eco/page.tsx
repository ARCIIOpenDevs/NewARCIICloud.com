import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  CheckCircleIcon,
  XMarkIcon,
  GlobeAltIcon,
  ServerIcon,
  ShieldCheckIcon,
  CloudIcon,
  CpuChipIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Hosting Eco $299/mes | Plan Básico ARCII Cloud',
  description: 'Hosting web básico perfecto para sitios pequeños: 10GB SSD, SSL gratis, cPanel, 1 sitio web. Plan ideal para emprendedores desde $299/mes.',
  keywords: [
    'hosting eco mexico',
    'hosting barato mexico',
    'hosting basico',
    'hosting $299',
    'hosting emprendedores',
    'hosting wordpress eco',
    'hosting mexico barato'
  ],
  openGraph: {
    title: 'Hosting Eco $299/mes | Hosting Básico México',
    description: '🌱 Perfecto para empezar: 10GB SSD, SSL gratis, cPanel, WordPress. Tu primer sitio web desde $299/mes.',
    url: 'https://new.arciicloud.com/negocios/hosting-web/eco',
    type: 'website',
  },
};

const planFeatures = [
  { name: '1 Sitio Web', included: true, description: 'Perfecto para un sitio personal o negocio' },
  { name: '10 GB Almacenamiento SSD', included: true, description: 'Espacio rápido y confiable para tu contenido' },
  { name: '100 GB Transferencia Mensual', included: true, description: 'Suficiente para sitios con tráfico moderado' },
  { name: '1 GB RAM Garantizada', included: true, description: 'Recursos dedicados para mejor rendimiento' },
  { name: '5 Cuentas de Email', included: true, description: 'Emails profesionales @tudominio.com' },
  { name: 'SSL Certificado Gratuito', included: true, description: 'Seguridad y confianza para tus visitantes' },
  { name: 'cPanel Incluido', included: true, description: 'Panel de control fácil de usar' },
  { name: 'WordPress Pre-instalado', included: true, description: 'Instalación automática con un clic' },
  { name: 'Soporte 24/7', included: true, description: 'Ayuda especializada cuando la necesites' },
  { name: 'Backup Semanal', included: true, description: 'Copias de seguridad automáticas' },
  { name: 'CDN Básico', included: false, description: 'Disponible en planes superiores' },
  { name: 'Staging Environment', included: false, description: 'Para probar cambios sin afectar tu sitio' },
  { name: 'SSH Access', included: false, description: 'Acceso avanzado por línea de comandos' },
  { name: 'WP-CLI', included: false, description: 'Herramientas avanzadas de WordPress' },
];

const competitors = [
  {
    name: 'Hostgator México',
    price: 449,
    storage: '10GB',
    sites: '1',
    email: '10',
    ssl: true,
    support: 'Chat',
  },
  {
    name: 'GoDaddy México',
    price: 399,
    storage: '10GB',
    sites: '1',
    email: '1',
    ssl: true,
    support: 'Básico',
  },
  {
    name: 'ARCII Cloud Eco',
    price: 299,
    storage: '10GB SSD',
    sites: '1',
    email: '5',
    ssl: true,
    support: '24/7 Especializado',
    highlighted: true,
  },
];

const specifications = {
  'Sitios Web': '1 dominio principal',
  'Almacenamiento': '10 GB SSD NVMe',
  'Transferencia': '100 GB/mes',
  'Bases de Datos': '1 MySQL 8.0',
  'Cuentas Email': '5 cuentas profesionales',
  'Subdominios': '5 subdominios',
  'CPU': '1 vCore compartido',
  'RAM': '1 GB garantizada',
  'Backups': 'Semanales (4 copias)',
  'Panel': 'cPanel última versión',
};

const useCases = [
  {
    title: 'Sitio Web Personal',
    description: 'Blog personal, portafolio o CV online',
    icon: GlobeAltIcon,
    features: ['WordPress optimizado', 'Temas gratuitos', 'SSL incluido'],
  },
  {
    title: 'Negocio Pequeño',
    description: 'Presencia online para tu negocio local',
    icon: ServerIcon,
    features: ['5 emails profesionales', 'Formulario de contacto', 'Google My Business'],
  },
  {
    title: 'Proyecto de Prueba',
    description: 'Experimenta antes de crecer',
    icon: CloudIcon,
    features: ['Fácil upgrade', 'Sin compromisos', 'Migración gratuita'],
  },
];

export default function HostingEcoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-500 bg-opacity-20 rounded-full text-green-100 text-sm font-medium mb-6">
                🌱 Plan para Emprendedores
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Hosting Eco
              </h1>
              
              <div className="text-3xl font-bold mb-6">
                <span className="text-5xl">$299</span>
                <span className="text-xl text-green-200">/mes</span>
              </div>
              
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                El punto de entrada perfecto para tu presencia online. 
                Todo lo necesario para empezar con hosting confiable y soporte especializado.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" variant="secondary" asChild>
                  <Link href="/checkout?plan=eco">
                    Empezar Ahora
                  </Link>
                </Button>
                
                <Button size="xl" variant="ghost" className="text-white hover:bg-white/10" asChild>
                  <Link href="#especificaciones">
                    Ver Detalles
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-6 mt-8 text-green-100">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5" />
                  <span className="text-sm">Setup gratuito</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5" />
                  <span className="text-sm">SSL incluido</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5" />
                  <span className="text-sm">Soporte 24/7</span>
                </div>
              </div>
            </div>
            
            <div className="lg:text-right">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4">
                    ¿Por qué elegir Hosting Eco?
                  </h3>
                  <ul className="space-y-3 text-green-100">
                    <li className="flex items-center gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-300 flex-shrink-0" />
                      <span>Precio más bajo del mercado mexicano</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-300 flex-shrink-0" />
                      <span>SSD NVMe para máxima velocidad</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-300 flex-shrink-0" />
                      <span>Garantía de uptime 99.9%</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-300 flex-shrink-0" />
                      <span>Migración gratuita incluida</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Use Cases */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Perfecto Para
            </h2>
            <p className="text-lg text-secondary-600">
              El plan ideal para diferentes tipos de proyectos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <useCase.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-secondary-600 mb-4">
                    {useCase.description}
                  </p>
                  <ul className="space-y-2">
                    {useCase.features.map((feature) => (
                      <li key={feature} className="flex items-center justify-center gap-2 text-sm text-secondary-600">
                        <CheckCircleIcon className="h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Features Comparison */}
        <section id="especificaciones" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              ¿Qué Incluye?
            </h2>
            <p className="text-lg text-secondary-600">
              Características detalladas del plan Hosting Eco
            </p>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    {planFeatures.map((feature, index) => (
                      <tr key={feature.name} className={index % 2 === 0 ? 'bg-secondary-25' : 'bg-white'}>
                        <td className="px-6 py-4">
                          <div>
                            <div className="font-medium text-secondary-900">{feature.name}</div>
                            <div className="text-sm text-secondary-600">{feature.description}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          {feature.included ? (
                            <CheckCircleIcon className="h-6 w-6 text-green-500" />
                          ) : (
                            <XMarkIcon className="h-6 w-6 text-secondary-300" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Technical Specifications */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Especificaciones Técnicas
            </h2>
            <p className="text-lg text-secondary-600">
              Recursos garantizados y características técnicas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ServerIcon className="h-6 w-6 text-green-600" />
                  Recursos del Servidor
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(specifications).slice(0, 5).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-secondary-600">{key}:</span>
                    <span className="font-medium text-secondary-900">{value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CpuChipIcon className="h-6 w-6 text-green-600" />
                  Características Técnicas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(specifications).slice(5).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-secondary-600">{key}:</span>
                    <span className="font-medium text-secondary-900">{value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Price Comparison */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Comparación de Precios
            </h2>
            <p className="text-lg text-secondary-600">
              ¿Por qué somos la mejor opción?
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Proveedor</th>
                  <th className="text-center p-4">Precio/mes</th>
                  <th className="text-center p-4">Almacenamiento</th>
                  <th className="text-center p-4">Sitios</th>
                  <th className="text-center p-4">Emails</th>
                  <th className="text-center p-4">SSL</th>
                  <th className="text-center p-4">Soporte</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((competitor) => (
                  <tr 
                    key={competitor.name} 
                    className={competitor.highlighted ? 'bg-green-50 border-2 border-green-200' : 'border-b'}
                  >
                    <td className="p-4 font-medium">
                      {competitor.name}
                      {competitor.highlighted && (
                        <span className="ml-2 px-2 py-1 bg-green-600 text-white text-xs rounded">
                          Mejor Precio
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-center font-bold">
                      ${competitor.price}
                    </td>
                    <td className="p-4 text-center">{competitor.storage}</td>
                    <td className="p-4 text-center">{competitor.sites}</td>
                    <td className="p-4 text-center">{competitor.email}</td>
                    <td className="p-4 text-center">
                      {competitor.ssl ? (
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <XMarkIcon className="h-5 w-5 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 text-center text-sm">{competitor.support}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                ¿Listo para Empezar?
              </h2>
              <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
                Únete a miles de emprendedores que confían en ARCII Cloud. 
                Setup gratuito, migración incluida y soporte especializado.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="xl" asChild>
                  <Link href="/checkout?plan=eco">
                    Contratar Hosting Eco - $299/mes
                  </Link>
                </Button>
                
                <Button size="xl" variant="outline" asChild>
                  <Link href="/negocios/hosting-web">
                    Comparar Todos los Planes
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-8 mt-8 text-sm text-secondary-500">
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="h-4 w-4" />
                  <span>Garantía 30 días</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4" />
                  <span>99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <EnvelopeIcon className="h-4 w-4" />
                  <span>Soporte en español</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}