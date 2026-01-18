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
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Hosting Estándar $599/mes | Plan Profesional ARCII Cloud',
  description: 'Hosting web profesional: 50GB SSD, 5 sitios, CDN incluido, SSL premium, 50 emails. Plan ideal para empresas desde $599/mes.',
  keywords: [
    'hosting estandar mexico',
    'hosting profesional',
    'hosting empresas',
    'hosting $599',
    'hosting multiple sitios',
    'hosting wordpress profesional',
    'cdn incluido hosting'
  ],
  openGraph: {
    title: 'Hosting Estándar $599/mes | Hosting Profesional México',
    description: '🚀 Para profesionales: 50GB SSD, 5 sitios, CDN, SSL premium, 50 emails. Potencia tu negocio desde $599/mes.',
    url: 'https://new.arciicloud.com/negocios/hosting-web/estandar',
    type: 'website',
  },
};

const planFeatures = [
  { name: '5 Sitios Web', included: true, description: 'Múltiples sitios en una sola cuenta', premium: true },
  { name: '50 GB Almacenamiento SSD', included: true, description: '5x más espacio que el plan Eco', premium: true },
  { name: '500 GB Transferencia Mensual', included: true, description: 'Para sitios con tráfico alto', premium: true },
  { name: '4 GB RAM Garantizada', included: true, description: '4x más memoria que el plan básico', premium: true },
  { name: '50 Cuentas de Email', included: true, description: 'Emails ilimitados para tu equipo', premium: true },
  { name: 'SSL Certificado Premium', included: true, description: 'Certificado con garantía extendida', premium: true },
  { name: 'cPanel Avanzado', included: true, description: 'Todas las funciones desbloqueadas' },
  { name: 'WordPress Optimizado', included: true, description: 'Instalación y optimización automática' },
  { name: 'Soporte Prioritario 24/7', included: true, description: 'Respuesta más rápida para tu negocio', premium: true },
  { name: 'Backup Diario', included: true, description: 'Copias automáticas cada 24h', premium: true },
  { name: 'CDN Global Incluido', included: true, description: 'Acelera tu sitio mundialmente', premium: true },
  { name: 'Staging Environment', included: true, description: 'Prueba cambios sin afectar producción', premium: true },
  { name: 'SSH Access', included: false, description: 'Disponible en plan Performance' },
  { name: 'WP-CLI Avanzado', included: false, description: 'Herramientas de línea de comandos' },
  { name: 'Monitoreo Avanzado', included: false, description: 'Métricas detalladas de rendimiento' },
];

const competitors = [
  {
    name: 'SiteGround México',
    price: 899,
    storage: '20GB',
    sites: '5',
    email: '∞',
    cdn: true,
    support: 'Chat/Phone',
  },
  {
    name: 'Hostinger México',
    price: 749,
    storage: '100GB',
    sites: '10',
    email: '100',
    cdn: true,
    support: 'Chat 24/7',
  },
  {
    name: 'ARCII Cloud Estándar',
    price: 599,
    storage: '50GB SSD',
    sites: '5',
    email: '50',
    cdn: true,
    support: 'Prioritario 24/7',
    highlighted: true,
  },
];

const specifications = {
  'Sitios Web': '5 dominios principales',
  'Almacenamiento': '50 GB SSD NVMe Ultra',
  'Transferencia': '500 GB/mes',
  'Bases de Datos': '5 MySQL 8.0',
  'Cuentas Email': '50 profesionales',
  'Subdominios': 'Ilimitados',
  'CPU': '2 vCores dedicados',
  'RAM': '4 GB garantizada',
  'Backups': 'Diarios (30 copias)',
  'Panel': 'cPanel Pro + Softaculous',
};

const businessFeatures = [
  {
    title: 'E-commerce Ready',
    description: 'Tienda online con WooCommerce pre-configurado',
    icon: GlobeAltIcon,
    features: ['SSL Premium incluido', 'Pasarelas de pago', 'Catálogo ilimitado', 'Reportes avanzados'],
  },
  {
    title: 'Sitios Corporativos',
    description: 'Múltiples sitios para tu empresa',
    icon: ServerIcon,
    features: ['Subdominios ilimitados', 'Gestión centralizada', 'Emails corporativos', 'Branding personalizado'],
  },
  {
    title: 'Agencias Digitales',
    description: 'Gestiona clientes desde una cuenta',
    icon: CloudIcon,
    features: ['White-label disponible', 'Acceso multi-usuario', 'Facturación separada', 'Reportes por cliente'],
  },
];

const performanceMetrics = [
  { metric: 'Tiempo de Carga', value: '< 2.5s', description: 'Con CDN global activado' },
  { metric: 'Uptime Garantizado', value: '99.95%', description: 'SLA mejorado para negocios' },
  { metric: 'Soporte Prioritario', value: '< 15min', description: 'Tiempo de respuesta promedio' },
  { metric: 'Backup Recovery', value: '< 1hr', description: 'Restauración completa' },
];

export default function HostingEstandarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-500 bg-opacity-20 rounded-full text-blue-100 text-sm font-medium mb-6">
                🚀 Plan Más Popular
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Hosting Estándar
              </h1>
              
              <div className="text-3xl font-bold mb-6">
                <span className="text-5xl">$599</span>
                <span className="text-xl text-blue-200">/mes</span>
                <div className="text-sm text-blue-200 mt-1">
                  $479/mes pagando anualmente (ahorra 20%)
                </div>
              </div>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                El equilibrio perfecto entre potencia y precio. Ideal para empresas, 
                e-commerce y agencias que necesitan rendimiento profesional.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" variant="secondary" asChild>
                  <Link href="/checkout?plan=estandar">
                    Empezar Ahora
                  </Link>
                </Button>
                
                <Button size="xl" variant="ghost" className="text-white hover:bg-white/10" asChild>
                  <Link href="#caracteristicas">
                    Ver Características
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-6 mt-8 text-blue-100">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5" />
                  <span className="text-sm">CDN global incluido</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5" />
                  <span className="text-sm">SSL Premium</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5" />
                  <span className="text-sm">Backup diario</span>
                </div>
              </div>
            </div>
            
            <div className="lg:text-right">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Incluye Todo del Plan Eco +
                  </h3>
                  <ul className="space-y-3 text-blue-100">
                    <li className="flex items-center gap-3">
                      <RocketLaunchIcon className="h-5 w-5 text-blue-300 flex-shrink-0" />
                      <span>5x más almacenamiento (50GB SSD)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <RocketLaunchIcon className="h-5 w-5 text-blue-300 flex-shrink-0" />
                      <span>5 sitios web simultáneos</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <RocketLaunchIcon className="h-5 w-5 text-blue-300 flex-shrink-0" />
                      <span>CDN global para máxima velocidad</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <RocketLaunchIcon className="h-5 w-5 text-blue-300 flex-shrink-0" />
                      <span>50 cuentas de email corporativo</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <RocketLaunchIcon className="h-5 w-5 text-blue-300 flex-shrink-0" />
                      <span>Soporte prioritario empresarial</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Performance Metrics */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Rendimiento Garantizado
            </h2>
            <p className="text-lg text-secondary-600">
              Métricas reales de nuestro plan más popular
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {performanceMetrics.map((metric) => (
              <Card key={metric.metric} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {metric.value}
                  </div>
                  <div className="font-medium text-secondary-900 mb-2">
                    {metric.metric}
                  </div>
                  <div className="text-sm text-secondary-600">
                    {metric.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Business Use Cases */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Casos de Uso Empresarial
            </h2>
            <p className="text-lg text-secondary-600">
              Potencia para proyectos profesionales y comerciales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {businessFeatures.map((feature) => (
              <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-600 mb-4 text-center">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.features.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-secondary-600">
                        <CheckCircleIcon className="h-4 w-4 text-blue-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Features Comparison */}
        <section id="caracteristicas" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Características Completas
            </h2>
            <p className="text-lg text-secondary-600">
              Todo lo que incluye el plan Hosting Estándar
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
                          <div className="flex items-center gap-3">
                            <div>
                              <div className={`font-medium ${feature.premium ? 'text-blue-900' : 'text-secondary-900'}`}>
                                {feature.name}
                                {feature.premium && (
                                  <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                                    Premium
                                  </span>
                                )}
                              </div>
                              <div className="text-sm text-secondary-600">{feature.description}</div>
                            </div>
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
              Recursos empresariales garantizados
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ServerIcon className="h-6 w-6 text-blue-600" />
                  Recursos Empresariales
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
                  <CpuChipIcon className="h-6 w-6 text-blue-600" />
                  Funciones Avanzadas
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
              Comparación Empresarial
            </h2>
            <p className="text-lg text-secondary-600">
              El mejor valor para profesionales
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
                  <th className="text-center p-4">CDN</th>
                  <th className="text-center p-4">Soporte</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((competitor) => (
                  <tr 
                    key={competitor.name} 
                    className={competitor.highlighted ? 'bg-blue-50 border-2 border-blue-200' : 'border-b'}
                  >
                    <td className="p-4 font-medium">
                      {competitor.name}
                      {competitor.highlighted && (
                        <span className="ml-2 px-2 py-1 bg-blue-600 text-white text-xs rounded">
                          Mejor Valor
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
                      {competitor.cdn ? (
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
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                Impulsa tu Negocio
              </h2>
              <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
                Únete a más de 10,000 empresas que confían en nuestro plan más popular. 
                Rendimiento profesional, soporte prioritario y todo lo que necesitas para crecer.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="xl" asChild>
                  <Link href="/checkout?plan=estandar">
                    Contratar Hosting Estándar - $599/mes
                  </Link>
                </Button>
                
                <Button size="xl" variant="outline" asChild>
                  <Link href="/negocios/hosting-web/performance">
                    Upgrade a Performance
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-8 mt-8 text-sm text-secondary-500">
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="h-4 w-4" />
                  <span>SLA 99.95% uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4" />
                  <span>Migración gratuita</span>
                </div>
                <div className="flex items-center gap-2">
                  <EnvelopeIcon className="h-4 w-4" />
                  <span>Soporte prioritario</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}