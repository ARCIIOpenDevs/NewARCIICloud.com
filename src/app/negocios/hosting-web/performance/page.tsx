import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  CheckCircleIcon,
  XMarkIcon,
  BoltIcon,
  ServerIcon,
  ShieldCheckIcon,
  CloudIcon,
  CpuChipIcon,
  EnvelopeIcon,
  RocketLaunchIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Hosting Performance $999/mes | Plan Premium ARCII Cloud',
  description: 'Hosting web premium: 100GB SSD, sitios ilimitados, CDN Pro, SSH, WP-CLI, monitoring 24/7. Plan para alto tráfico desde $999/mes.',
  keywords: [
    'hosting performance mexico',
    'hosting premium',
    'hosting alto trafico',
    'hosting $999',
    'hosting ilimitado',
    'hosting ssh access',
    'wp-cli hosting'
  ],
  openGraph: {
    title: 'Hosting Performance $999/mes | Premium México',
    description: '⚡ Máximo rendimiento: 100GB SSD, ilimitado, CDN Pro, SSH, monitoreo. Para sitios de alto tráfico.',
    url: 'https://new.arciicloud.com/negocios/hosting-web/performance',
    type: 'website',
  },
};

const planFeatures = [
  { name: 'Sitios Web Ilimitados', included: true, description: 'Todos los sitios que necesites', premium: true },
  { name: '100 GB Almacenamiento SSD', included: true, description: 'Espacio premium para proyectos grandes', premium: true },
  { name: 'Transferencia Ilimitada', included: true, description: 'Sin límites de ancho de banda', premium: true },
  { name: '8 GB RAM Garantizada', included: true, description: 'Memoria dedicada para máximo rendimiento', premium: true },
  { name: 'Cuentas Email Ilimitadas', included: true, description: 'Sin límite de emails corporativos', premium: true },
  { name: 'SSL Wildcard Premium', included: true, description: 'Certificado para subdominios', premium: true },
  { name: 'cPanel Pro + WHM', included: true, description: 'Panel administrativo avanzado', premium: true },
  { name: 'WordPress VIP', included: true, description: 'Optimización máxima para WordPress', premium: true },
  { name: 'Soporte Premium 24/7', included: true, description: 'Línea directa con ingenieros senior', premium: true },
  { name: 'Backup Diario + Versionado', included: true, description: '30 días de historial completo', premium: true },
  { name: 'CDN Pro Global', included: true, description: 'Red premium con 200+ ubicaciones', premium: true },
  { name: 'Staging + Testing', included: true, description: 'Entornos múltiples de desarrollo', premium: true },
  { name: 'SSH Access Completo', included: true, description: 'Acceso root limitado para desarrollo', premium: true },
  { name: 'WP-CLI + Git Integration', included: true, description: 'Herramientas profesionales', premium: true },
  { name: 'Monitoring Avanzado', included: true, description: 'Alertas y métricas en tiempo real', premium: true },
];

const performanceFeatures = [
  {
    title: 'Optimización Extrema',
    description: 'Cache multi-nivel y optimización automática',
    icon: BoltIcon,
    features: ['Varnish Cache', 'Redis/Memcached', 'PHP OPcache', 'CDN Edge Computing'],
  },
  {
    title: 'Recursos Dedicados',
    description: 'Hardware exclusivo para máximo rendimiento',
    icon: ServerIcon,
    features: ['8GB RAM garantizada', '4 vCores dedicados', 'SSD NVMe Premium', 'I/O ilimitado'],
  },
  {
    title: 'Herramientas Pro',
    description: 'Stack completo para desarrolladores',
    icon: CommandLineIcon,
    features: ['SSH/SFTP acceso', 'WP-CLI completo', 'Git deployment', 'Node.js/Python'],
  },
];

const specifications = {
  'Sitios Web': 'Ilimitados + subdominios',
  'Almacenamiento': '100 GB SSD NVMe Ultra',
  'Transferencia': 'Ilimitada',
  'Bases de Datos': 'MySQL/PostgreSQL ilimitadas',
  'Cuentas Email': 'Ilimitadas + webmail avanzado',
  'CPU': '4 vCores Intel Xeon dedicados',
  'RAM': '8 GB DDR4 ECC garantizada',
  'Backups': 'Diarios + snapshots on-demand',
  'Monitoreo': '24/7 + alertas avanzadas',
  'Panel': 'cPanel Pro + WHM + CLI tools',
};

const targetAudience = [
  {
    title: 'Sitios de Alto Tráfico',
    description: 'Más de 100,000 visitantes mensuales',
    metrics: ['< 1.5s tiempo de carga', '99.99% uptime', 'Auto-escalado', 'Cache inteligente'],
  },
  {
    title: 'E-commerce Premium',
    description: 'Tiendas online con miles de productos',
    metrics: ['PCI DSS compliant', 'SSL EV incluido', 'Checkout optimizado', 'Inventario en tiempo real'],
  },
  {
    title: 'Agencias & Desarrolladores',
    description: 'Proyectos múltiples y complejos',
    metrics: ['Git hooks automáticos', 'CI/CD integration', 'Multiple PHP versions', 'Debug tools'],
  },
];

export default function HostingPerformancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-purple-500 bg-opacity-20 rounded-full text-purple-100 text-sm font-medium mb-6">
                ⚡ Máximo Rendimiento
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Hosting Performance
              </h1>
              
              <div className="text-3xl font-bold mb-6">
                <span className="text-5xl">$999</span>
                <span className="text-xl text-purple-200">/mes</span>
                <div className="text-sm text-purple-200 mt-1">
                  $799/mes pagando anualmente (ahorra $200)
                </div>
              </div>
              
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Hosting sin límites para sitios de alto tráfico. Recursos dedicados, 
                herramientas profesionales y soporte premium para proyectos exigentes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" variant="secondary" asChild>
                  <Link href="/checkout?plan=performance">
                    Empezar Ahora
                  </Link>
                </Button>
                
                <Button size="xl" variant="ghost" className="text-white hover:bg-white/10" asChild>
                  <Link href="#especificaciones">
                    Ver Especificaciones
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-6 mt-8 text-purple-100">
                <div className="flex items-center gap-2">
                  <RocketLaunchIcon className="h-5 w-5" />
                  <span className="text-sm">Sites ilimitados</span>
                </div>
                <div className="flex items-center gap-2">
                  <CommandLineIcon className="h-5 w-5" />
                  <span className="text-sm">SSH + WP-CLI</span>
                </div>
                <div className="flex items-center gap-2">
                  <BoltIcon className="h-5 w-5" />
                  <span className="text-sm">CDN Premium</span>
                </div>
              </div>
            </div>
            
            <div className="lg:text-right">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Incluye Todo de Estándar +
                  </h3>
                  <ul className="space-y-3 text-purple-100">
                    <li className="flex items-center gap-3">
                      <BoltIcon className="h-5 w-5 text-purple-300 flex-shrink-0" />
                      <span>Sitios y transferencia ilimitados</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <BoltIcon className="h-5 w-5 text-purple-300 flex-shrink-0" />
                      <span>8GB RAM + 4 vCores dedicados</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <BoltIcon className="h-5 w-5 text-purple-300 flex-shrink-0" />
                      <span>SSH, WP-CLI y Git integration</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <BoltIcon className="h-5 w-5 text-purple-300 flex-shrink-0" />
                      <span>CDN Pro con 200+ ubicaciones</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <BoltIcon className="h-5 w-5 text-purple-300 flex-shrink-0" />
                      <span>Soporte premium + monitoring</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Performance Features */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Tecnología de Vanguardia
            </h2>
            <p className="text-lg text-secondary-600">
              Stack optimizado para máximo rendimiento
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {performanceFeatures.map((feature) => (
              <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center">
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
                        <CheckCircleIcon className="h-4 w-4 text-purple-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Target Audience */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Diseñado Para
            </h2>
            <p className="text-lg text-secondary-600">
              Proyectos que requieren máximo rendimiento
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {targetAudience.map((audience) => (
              <Card key={audience.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-center">{audience.title}</CardTitle>
                  <p className="text-secondary-600 text-sm text-center">{audience.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {audience.metrics.map((metric) => (
                      <div key={metric} className="bg-purple-50 p-3 rounded-lg text-center">
                        <span className="text-xs font-medium text-purple-700">{metric}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Features */}
        <section id="especificaciones" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Características Premium
            </h2>
            <p className="text-lg text-secondary-600">
              Todo lo que incluye nuestro plan más avanzado
            </p>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    {planFeatures.map((feature, index) => (
                      <tr key={feature.name} className={index % 2 === 0 ? 'bg-purple-25' : 'bg-white'}>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div>
                              <div className="font-medium text-purple-900">
                                {feature.name}
                                <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">
                                  Premium
                                </span>
                              </div>
                              <div className="text-sm text-secondary-600">{feature.description}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <CheckCircleIcon className="h-6 w-6 text-green-500" />
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
              Hardware y recursos dedicados
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ServerIcon className="h-6 w-6 text-purple-600" />
                  Recursos Premium
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
                  <CpuChipIcon className="h-6 w-6 text-purple-600" />
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

        {/* ROI Calculator */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                  Calculadora de ROI
                </h2>
                <p className="text-lg text-secondary-600">
                  ¿Vale la pena invertir en hosting premium?
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">+40%</div>
                  <div className="font-medium text-secondary-900 mb-1">Velocidad</div>
                  <div className="text-sm text-secondary-600">Tiempo de carga vs competencia</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">-60%</div>
                  <div className="font-medium text-secondary-900 mb-1">Downtime</div>
                  <div className="text-sm text-secondary-600">Menor tiempo fuera de línea</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">+25%</div>
                  <div className="font-medium text-secondary-900 mb-1">Conversión</div>
                  <div className="text-sm text-secondary-600">Mejora en tasa de conversión</div>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button size="lg" asChild>
                  <Link href="/calculadora-roi">
                    Calcular mi ROI
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-purple-900 to-pink-900 text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">
                Hosting sin Límites
              </h2>
              <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
                Para proyectos que no pueden esperar. Recursos dedicados, 
                soporte premium y todas las herramientas profesionales.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="xl" variant="secondary" asChild>
                  <Link href="/checkout?plan=performance">
                    Contratar Performance - $999/mes
                  </Link>
                </Button>
                
                <Button size="xl" variant="ghost" className="text-white hover:bg-white/10" asChild>
                  <Link href="/demo">
                    Solicitar Demo
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-8 mt-8 text-sm text-purple-200">
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="h-4 w-4" />
                  <span>99.99% SLA garantizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <CommandLineIcon className="h-4 w-4" />
                  <span>Acceso SSH completo</span>
                </div>
                <div className="flex items-center gap-2">
                  <EnvelopeIcon className="h-4 w-4" />
                  <span>Soporte premium</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}