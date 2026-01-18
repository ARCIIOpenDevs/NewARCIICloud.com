import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  ServerIcon,
  CpuChipIcon,
  CircleStackIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  BoltIcon,
  ClockIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'VPS Cloud Profesional México | 6GB RAM 100GB SSD | ARCII Cloud',
  description: 'VPS Cloud Profesional $1,499/mes: 6GB RAM, 100GB SSD, 4 CPU cores, IPs dedicadas, backups automáticos. Ideal para empresas medianas en México.',
  keywords: [
    'vps profesional mexico',
    'vps 6gb ram',
    'vps 100gb ssd',
    'servidor virtual profesional',
    'vps empresas mexico',
    'hosting profesional mexico'
  ],
  openGraph: {
    title: 'VPS Cloud Profesional | 6GB RAM desde $1,499/mes',
    description: '🚀 VPS Profesional: 6GB RAM, 100GB SSD, 4 cores, IPs dedicadas, panel cPanel/Plesk incluido.',
    url: 'https://new.arciicloud.com/negocios/vps-cloud/profesional',
    type: 'website',
  },
};

const features = [
  {
    title: '6GB RAM DDR4',
    description: 'Memoria RAM de alta velocidad para múltiples aplicaciones',
    icon: CpuChipIcon,
    color: 'from-blue-400 to-blue-600',
  },
  {
    title: '100GB SSD NVMe',
    description: 'Almacenamiento ultra rápido con tecnología NVMe',
    icon: CircleStackIcon,
    color: 'from-purple-400 to-purple-600',
  },
  {
    title: '4 vCPU Cores',
    description: 'Procesamiento potente para aplicaciones exigentes',
    icon: ServerIcon,
    color: 'from-green-400 to-green-600',
  },
  {
    title: 'Panel de Control',
    description: 'cPanel o Plesk incluido sin costo adicional',
    icon: CommandLineIcon,
    color: 'from-orange-400 to-orange-600',
  },
  {
    title: '3 IPs Dedicadas',
    description: 'IPs exclusivas para tus proyectos',
    icon: GlobeAltIcon,
    color: 'from-indigo-400 to-indigo-600',
  },
  {
    title: 'Backups Automáticos',
    description: 'Respaldos diarios automáticos incluidos',
    icon: ShieldCheckIcon,
    color: 'from-emerald-400 to-emerald-600',
  },
];

const operatingSystems = [
  { name: 'Ubuntu Server', versions: ['22.04 LTS', '20.04 LTS'], popular: true },
  { name: 'CentOS', versions: ['Stream 9', '7'], popular: true },
  { name: 'Debian', versions: ['11', '12'], popular: false },
  { name: 'Rocky Linux', versions: ['9'], popular: false },
  { name: 'AlmaLinux', versions: ['9'], popular: false },
  { name: 'Windows Server', versions: ['2019', '2022'], cost: '+$400/mes' },
];

const useCases = [
  {
    title: 'E-commerce Avanzado',
    description: 'Tiendas online con alto tráfico y múltiples productos',
    tools: ['WooCommerce', 'Magento', 'PrestaShop', 'OpenCart'],
    traffic: '50,000-200,000 visitas/mes',
  },
  {
    title: 'Aplicaciones SaaS',
    description: 'Software como servicio con base de usuarios mediana',
    tools: ['Laravel', 'Django', 'Node.js', 'Docker'],
    traffic: '10,000+ usuarios activos',
  },
  {
    title: 'Agencias Digitales',
    description: 'Múltiples sitios web de clientes en un servidor',
    tools: ['WordPress Multisite', 'cPanel', 'WHM', 'Git'],
    traffic: '20-50 sitios web',
  },
  {
    title: 'Aplicaciones Empresariales',
    description: 'ERP, CRM y sistemas internos de empresa',
    tools: ['MySQL', 'PostgreSQL', 'Redis', 'Elasticsearch'],
    traffic: '500+ empleados',
  },
];

const technicalSpecs = [
  { label: 'Memoria RAM', value: '6GB DDR4 ECC', included: true },
  { label: 'Almacenamiento', value: '100GB SSD NVMe', included: true },
  { label: 'CPU Cores', value: '4 vCPU Intel/AMD', included: true },
  { label: 'Transferencia', value: '10TB/mes incluidos', included: true },
  { label: 'IPs dedicadas', value: '3 IPs IPv4 incluidas', included: true },
  { label: 'Panel de control', value: 'cPanel/Plesk incluido', included: true },
  { label: 'Backups automáticos', value: 'Diarios (7 días retención)', included: true },
  { label: 'Soporte 24/7', value: 'Chat, teléfono, email', included: true },
  { label: 'Uptime SLA', value: '99.9% garantizado', included: true },
  { label: 'Migración gratuita', value: 'Desde cualquier proveedor', included: true },
  { label: 'SSL gratuito', value: 'Let\'s Encrypt automático', included: true },
  { label: 'Firewall avanzado', value: 'Configuración personalizada', included: true },
];

const managementFeatures = [
  'Panel de control web completo',
  'Acceso SSH con llaves',
  'Consola VNC integrada',
  'Reinicio automático en fallos',
  'Monitoreo en tiempo real',
  'Alertas por email/SMS',
  'Gestión de DNS avanzada',
  'Configuración de firewall',
  'Snapshots del sistema',
  'Clonación de VPS',
  'Balanceador de carga básico',
  'CDN gratuito incluido',
];

const comparison = [
  { feature: 'RAM', basico: '2GB', profesional: '6GB', empresarial: '16GB' },
  { feature: 'SSD Storage', basico: '50GB', profesional: '100GB', empresarial: '300GB' },
  { feature: 'CPU Cores', basico: '2 vCPU', profesional: '4 vCPU', empresarial: '8 vCPU' },
  { feature: 'Transferencia', basico: '5TB', profesional: '10TB', empresarial: '20TB' },
  { feature: 'IPs dedicadas', basico: '1 IP', profesional: '3 IPs', empresarial: '5 IPs' },
  { feature: 'Panel control', basico: 'Básico', profesional: 'cPanel/Plesk', empresarial: 'WHM completo' },
  { feature: 'Backups', basico: 'Semanales', profesional: 'Diarios', empresarial: 'Cada 6 horas' },
  { feature: 'Precio/mes', basico: '$899', profesional: '$1,499', empresarial: '$2,999' },
];

export default function VPSProfesionalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              VPS Cloud<br />
              <span className="text-yellow-300">Profesional</span>
            </h1>
            <p className="text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Potencia y flexibilidad profesional para empresas medianas. 6GB RAM, 100GB SSD, 
              múltiples IPs y panel de control completo para proyectos exigentes.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto mb-8">
              <div className="text-3xl font-bold mb-2">
                $1,499
                <span className="text-lg font-normal text-primary-200">/mes</span>
              </div>
              <div className="text-primary-200 text-sm">
                Precio fijo sin sorpresas • Cancela cuando quieras
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" asChild>
                <Link href="/empezar?plan=vps-profesional">
                  Empezar Ahora
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-600" asChild>
                <Link href="/demo">
                  Ver Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Features */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Características Principales
            </h2>
            <p className="text-lg text-secondary-600">
              Todo lo que necesitas para proyectos profesionales exigentes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Operating Systems */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Sistemas Operativos Disponibles
            </h2>
            <p className="text-lg text-secondary-600">
              Instalación con un clic del SO que prefieras
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operatingSystems.map((os, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${os.popular ? 'ring-2 ring-primary-200 bg-primary-50' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-secondary-900">
                      {os.name}
                    </h3>
                    {os.popular && (
                      <span className="px-2 py-1 bg-primary-600 text-white text-xs rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {os.versions.map((version, vIndex) => (
                      <div key={vIndex} className="text-sm text-secondary-600">
                        • {version}
                      </div>
                    ))}
                  </div>
                  
                  {os.cost && (
                    <div className="text-sm font-medium text-orange-600 mt-3">
                      {os.cost}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Casos de Uso Ideales
            </h2>
            <p className="text-lg text-secondary-600">
              Proyectos profesionales que se benefician de este plan VPS
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{useCase.title}</CardTitle>
                  <p className="text-secondary-600 text-sm">{useCase.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-medium text-secondary-700 mb-2">
                        Tecnologías recomendadas:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {useCase.tools.map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-sm text-secondary-600">
                      <strong>Capacidad:</strong> {useCase.traffic}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Especificaciones Técnicas Completas
            </h2>
            <p className="text-lg text-secondary-600">
              Todos los detalles técnicos de tu VPS Profesional
            </p>
          </div>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {technicalSpecs.map((spec, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-secondary-100 last:border-0">
                    <div className="text-secondary-700 font-medium">
                      {spec.label}
                    </div>
                    <div className="text-secondary-900 font-semibold text-right">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Management Features */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Herramientas de Gestión Avanzadas
            </h2>
            <p className="text-lg text-secondary-600">
              Panel completo para administrar tu VPS como un profesional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {managementFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                    <span className="text-secondary-700 text-sm">{feature}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Comparación de Planes VPS
            </h2>
            <p className="text-lg text-secondary-600">
              Encuentra el plan VPS perfecto para tu proyecto
            </p>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary-50">
                    <tr>
                      <th className="text-left p-4 font-semibold text-secondary-900">Característica</th>
                      <th className="text-center p-4 font-semibold text-secondary-600">VPS Básico</th>
                      <th className="text-center p-4 font-semibold text-primary-600 bg-primary-50">VPS Profesional</th>
                      <th className="text-center p-4 font-semibold text-secondary-600">VPS Empresarial</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((item, index) => (
                      <tr key={index} className="border-t border-secondary-100">
                        <td className="p-4 font-medium text-secondary-900">{item.feature}</td>
                        <td className="p-4 text-center text-secondary-600">{item.basico}</td>
                        <td className="p-4 text-center font-semibold text-primary-600 bg-primary-50">
                          {item.profesional}
                        </td>
                        <td className="p-4 text-center text-secondary-600">{item.empresarial}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link href="/negocios/vps-cloud/basico">
                  Ver VPS Básico
                </Link>
              </Button>
              <Button asChild>
                <Link href="/empezar?plan=vps-profesional">
                  Elegir Profesional
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/negocios/vps-cloud/empresarial">
                  Ver VPS Empresarial
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="mb-20">
          <Card className="bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">
                💰 Calculadora de ROI Instantánea
              </h2>
              <p className="text-primary-700 mb-6 max-w-2xl mx-auto">
                Con VPS Profesional puedes manejar hasta 200,000 visitas/mes. 
                Si cada visita vale $0.50 en ingresos, estarías generando $100,000/mes.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6">
                  <div className="text-2xl font-bold text-green-600 mb-1">$100,000</div>
                  <div className="text-sm text-secondary-600">Ingresos potenciales/mes</div>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <div className="text-2xl font-bold text-primary-600 mb-1">$1,499</div>
                  <div className="text-sm text-secondary-600">Costo del hosting/mes</div>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <div className="text-2xl font-bold text-blue-600 mb-1">6,567%</div>
                  <div className="text-sm text-secondary-600">ROI potencial</div>
                </div>
              </div>
              
              <Button size="lg" asChild>
                <Link href="/calculadora">
                  Calcular mi ROI Personalizado
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Performance Guarantee */}
        <section className="mb-20">
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-green-900 mb-4">
                🚀 Garantía de Rendimiento Premium
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                  <div className="text-green-700 text-sm">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">&lt; 200ms</div>
                  <div className="text-green-700 text-sm">Latencia promedio</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-green-700 text-sm">Monitoreo activo</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">30 días</div>
                  <div className="text-green-700 text-sm">Garantía devolución</div>
                </div>
              </div>
              
              <p className="text-green-700 mb-6">
                Si no cumplimos con estos estándares, te devolvemos el 100% de tu dinero.
              </p>
              
              <Button size="lg" variant="secondary" className="bg-green-600 hover:bg-green-700" asChild>
                <Link href="/garantias">
                  Ver Todas las Garantías
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* CTA Final */}
        <section>
          <Card className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                ¿Listo para el Siguiente Nivel Profesional?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Únete a miles de empresas que confían en ARCII Cloud para proyectos críticos. 
                Migración gratuita y soporte especializado incluido.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="xl" variant="secondary" asChild>
                  <Link href="/empezar?plan=vps-profesional">
                    Empezar por $1,499/mes
                  </Link>
                </Button>
                
                <Button size="xl" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-600" asChild>
                  <Link href="/contacto">
                    Hablar con Especialista
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-8 text-sm text-primary-200">
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="h-4 w-4" />
                  <span>Migración gratuita</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-4 w-4" />
                  <span>Setup en 15 minutos</span>
                </div>
                <div className="flex items-center gap-2">
                  <BoltIcon className="h-4 w-4" />
                  <span>Soporte 24/7</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}