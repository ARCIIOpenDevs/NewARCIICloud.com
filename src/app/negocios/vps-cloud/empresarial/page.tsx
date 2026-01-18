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
  CloudIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'VPS Cloud Empresarial México | 16GB RAM 300GB SSD | ARCII Cloud',
  description: 'VPS Cloud Empresarial $2,999/mes: 16GB RAM, 300GB SSD, 8 CPU cores, balanceador de carga, alta disponibilidad. Para empresas grandes en México.',
  keywords: [
    'vps empresarial mexico',
    'vps 16gb ram',
    'vps 300gb ssd',
    'servidor empresarial mexico',
    'vps alta disponibilidad',
    'hosting empresarial mexico'
  ],
  openGraph: {
    title: 'VPS Cloud Empresarial | 16GB RAM desde $2,999/mes',
    description: '💼 VPS Empresarial: 16GB RAM, 300GB SSD, 8 cores, balanceador carga, alta disponibilidad incluida.',
    url: 'https://new.arciicloud.com/negocios/vps-cloud/empresarial',
    type: 'website',
  },
};

const features = [
  {
    title: '16GB RAM DDR4 ECC',
    description: 'Memoria con corrección de errores para máxima estabilidad',
    icon: CpuChipIcon,
    color: 'from-blue-400 to-blue-600',
  },
  {
    title: '300GB SSD NVMe',
    description: 'Almacenamiento empresarial de alta velocidad',
    icon: CircleStackIcon,
    color: 'from-purple-400 to-purple-600',
  },
  {
    title: '8 vCPU Cores',
    description: 'Procesamiento de nivel empresarial',
    icon: ServerIcon,
    color: 'from-green-400 to-green-600',
  },
  {
    title: 'Alta Disponibilidad',
    description: '99.99% uptime con failover automático',
    icon: ShieldCheckIcon,
    color: 'from-emerald-400 to-emerald-600',
  },
  {
    title: 'Balanceador de Carga',
    description: 'Distribución inteligente del tráfico',
    icon: ChartBarIcon,
    color: 'from-orange-400 to-orange-600',
  },
  {
    title: 'CDN Global Premium',
    description: 'Red de entrega de contenido mundial',
    icon: CloudIcon,
    color: 'from-indigo-400 to-indigo-600',
  },
];

const enterpriseFeatures = [
  {
    title: 'SLA Empresarial',
    description: '99.99% uptime garantizado con penalizaciones',
    guarantee: '4 horas downtime/año máximo',
  },
  {
    title: 'Soporte Dedicado',
    description: 'Gerente de cuenta y soporte prioritario',
    guarantee: 'Respuesta < 15 minutos',
  },
  {
    title: 'Backups Enterprise',
    description: 'Respaldos cada 6 horas con retención 30 días',
    guarantee: 'RPO: 6 horas | RTO: 1 hora',
  },
  {
    title: 'Monitoreo Proactivo',
    description: 'Monitoreo 24/7 con alertas instantáneas',
    guarantee: 'Detección < 60 segundos',
  },
  {
    title: 'Seguridad Avanzada',
    description: 'DDoS protection, WAF, vulnerability scanning',
    guarantee: 'Protección hasta 100 Gbps',
  },
  {
    title: 'Compliance Ready',
    description: 'Certificaciones SOC2, ISO 27001, PCI DSS',
    guarantee: 'Auditorías incluidas',
  },
];

const useCases = [
  {
    title: 'Plataformas E-commerce Grandes',
    description: 'Tiendas online con millones de productos y alto volumen',
    metrics: ['1M+ productos', '500K+ visitas/día', '24/7 operación'],
    tools: ['Magento Enterprise', 'SAP Commerce', 'Salesforce Commerce'],
  },
  {
    title: 'SaaS Empresariales',
    description: 'Software como servicio con miles de usuarios concurrentes',
    metrics: ['50K+ usuarios', 'Multi-tenant', 'APIs críticas'],
    tools: ['Kubernetes', 'Docker', 'Microservicios', 'Redis Cluster'],
  },
  {
    title: 'Aplicaciones Financieras',
    description: 'Sistemas bancarios, fintech y aplicaciones reguladas',
    metrics: ['PCI DSS', 'SOX compliance', 'Transacciones 24/7'],
    tools: ['PostgreSQL HA', 'Oracle', 'Spring Boot', 'Apache Kafka'],
  },
  {
    title: 'Media & Entertainment',
    description: 'Streaming, gaming, contenido multimedia masivo',
    metrics: ['100TB+ bandwidth', 'CDN global', 'Baja latencia'],
    tools: ['FFmpeg', 'NGINX Plus', 'ElasticSearch', 'InfluxDB'],
  },
];

const technicalSpecs = [
  { label: 'Memoria RAM', value: '16GB DDR4 ECC', included: true },
  { label: 'Almacenamiento', value: '300GB SSD NVMe RAID-10', included: true },
  { label: 'CPU Cores', value: '8 vCPU Intel Xeon/AMD EPYC', included: true },
  { label: 'Transferencia', value: '20TB/mes incluidos', included: true },
  { label: 'IPs dedicadas', value: '5 IPs IPv4 + IPv6 /64', included: true },
  { label: 'Load Balancer', value: 'HAProxy + Keepalived', included: true },
  { label: 'CDN Premium', value: '150+ PoPs globales', included: true },
  { label: 'DDoS Protection', value: 'Hasta 100 Gbps', included: true },
  { label: 'Uptime SLA', value: '99.99% con penalizaciones', included: true },
  { label: 'Soporte dedicado', value: 'Gerente de cuenta asignado', included: true },
  { label: 'Migración experta', value: 'Equipo especializado incluido', included: true },
  { label: 'Compliance', value: 'SOC2, ISO 27001, PCI DSS', included: true },
];

const infrastructureFeatures = [
  'Arquitectura multi-zona redundante',
  'Failover automático < 30 segundos',
  'Balanceador de carga L4/L7',
  'Auto-scaling bajo demanda',
  'Database clustering (MySQL/PostgreSQL)',
  'Redis/Memcached distribuido',
  'Almacenamiento distribuido (Ceph)',
  'Network attached storage (NAS)',
  'VPN site-to-site empresarial',
  'VLAN privadas dedicadas',
  'Firewall perimetral dedicado',
  'IDS/IPS enterprise grade',
  'Log management centralizado',
  'SIEM básico incluido',
  'Vulnerability scanning mensual',
  'Penetration testing anual',
];

const comparison = [
  { feature: 'RAM', basico: '2GB', profesional: '6GB', empresarial: '16GB' },
  { feature: 'SSD Storage', basico: '50GB', profesional: '100GB', empresarial: '300GB' },
  { feature: 'CPU Cores', basico: '2 vCPU', profesional: '4 vCPU', empresarial: '8 vCPU' },
  { feature: 'Transferencia', basico: '5TB', profesional: '10TB', empresarial: '20TB' },
  { feature: 'Uptime SLA', basico: '99.9%', profesional: '99.9%', empresarial: '99.99%' },
  { feature: 'Soporte', basico: 'Estándar', profesional: '24/7', empresarial: 'Dedicado' },
  { feature: 'Load Balancer', basico: '✗', profesional: 'Básico', empresarial: 'Avanzado' },
  { feature: 'Alta disponibilidad', basico: '✗', profesional: '✗', empresarial: '✓' },
  { feature: 'Precio/mes', basico: '$899', profesional: '$1,499', empresarial: '$2,999' },
];

const slaMetrics = [
  { metric: 'Uptime Garantizado', value: '99.99%', description: 'Máximo 4.38 horas downtime/año' },
  { metric: 'Tiempo de Respuesta', value: '< 15 min', description: 'Soporte crítico prioritario' },
  { metric: 'Tiempo Resolución', value: '< 4 horas', description: 'Problemas críticos nivel 1' },
  { metric: 'Créditos SLA', value: '10-50%', description: 'Por incumplimiento de uptime' },
];

export default function VPSEmpresarialPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-yellow-400 text-yellow-900 rounded-full text-sm font-semibold mb-6">
              🏢 PLAN EMPRESARIAL
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              VPS Cloud<br />
              <span className="text-yellow-300">Empresarial</span>
            </h1>
            <p className="text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Infraestructura empresarial de misión crítica. Alta disponibilidad, balanceador 
              de carga, soporte dedicado y SLA del 99.99% para empresas grandes.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto mb-8">
              <div className="text-3xl font-bold mb-2">
                $2,999
                <span className="text-lg font-normal text-primary-200">/mes</span>
              </div>
              <div className="text-primary-200 text-sm mb-4">
                Facturación anual • Descuentos por volumen disponibles
              </div>
              <div className="text-xs text-yellow-300 font-medium">
                ✓ Gerente de cuenta incluido
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" asChild>
                <Link href="/empezar?plan=vps-empresarial">
                  Solicitar Cotización
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-600" asChild>
                <Link href="/contacto?enterprise=true">
                  Hablar con Especialista
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Enterprise Features */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Características de Nivel Empresarial
            </h2>
            <p className="text-lg text-secondary-600">
              Infraestructura de misión crítica con los más altos estándares
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

        {/* Enterprise Services */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Servicios Empresariales Incluidos
            </h2>
            <p className="text-lg text-secondary-600">
              Servicios premium que garantizan el éxito de tu operación
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseFeatures.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary-500">
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <p className="text-secondary-600 text-sm">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="bg-primary-50 rounded-lg p-3">
                    <div className="text-primary-700 text-sm font-medium">
                      📊 {service.guarantee}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* SLA Metrics */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Acuerdo de Nivel de Servicio (SLA)
            </h2>
            <p className="text-lg text-secondary-600">
              Garantías respaldadas por créditos económicos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {slaMetrics.map((sla, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {sla.value}
                  </div>
                  <div className="text-lg font-semibold text-secondary-900 mb-2">
                    {sla.metric}
                  </div>
                  <div className="text-sm text-secondary-600">
                    {sla.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Casos de Uso Empresariales
            </h2>
            <p className="text-lg text-secondary-600">
              Aplicaciones de misión crítica que requieren máximo rendimiento
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
                        Métricas típicas:
                      </div>
                      <div className="space-y-1">
                        {useCase.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-secondary-600">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium text-secondary-700 mb-2">
                        Stack tecnológico:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {useCase.tools.map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
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
              Especificaciones Técnicas Enterprise
            </h2>
            <p className="text-lg text-secondary-600">
              Hardware y servicios de grado empresarial
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

        {/* Infrastructure Features */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Infraestructura Empresarial Completa
            </h2>
            <p className="text-lg text-secondary-600">
              Arquitectura redundante y servicios de nivel datacenter
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {infrastructureFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
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
              Comparación Completa de Planes VPS
            </h2>
            <p className="text-lg text-secondary-600">
              Encuentra el plan perfecto para tu empresa
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
                      <th className="text-center p-4 font-semibold text-secondary-600">VPS Profesional</th>
                      <th className="text-center p-4 font-semibold text-primary-600 bg-primary-50">VPS Empresarial</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((item, index) => (
                      <tr key={index} className="border-t border-secondary-100">
                        <td className="p-4 font-medium text-secondary-900">{item.feature}</td>
                        <td className="p-4 text-center text-secondary-600">{item.basico}</td>
                        <td className="p-4 text-center text-secondary-600">{item.profesional}</td>
                        <td className="p-4 text-center font-semibold text-primary-600 bg-primary-50">
                          {item.empresarial}
                        </td>
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
              <Button variant="outline" asChild>
                <Link href="/negocios/vps-cloud/profesional">
                  Ver VPS Profesional  
                </Link>
              </Button>
              <Button asChild>
                <Link href="/empezar?plan=vps-empresarial">
                  Elegir Empresarial
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Enterprise ROI */}
        <section className="mb-20">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-green-900 mb-4">
                💰 ROI Empresarial Calculado
              </h2>
              <p className="text-green-700 mb-6 max-w-3xl mx-auto">
                Una empresa con 1M de ingresos anuales puede perder $8,760 por cada hora de downtime. 
                Con 99.99% uptime vs 99.9%, ahorras $70,080 anuales en pérdidas evitadas.
              </p>
              
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6">
                  <div className="text-2xl font-bold text-green-600 mb-1">$70K</div>
                  <div className="text-sm text-secondary-600">Pérdidas evitadas/año</div>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <div className="text-2xl font-bold text-blue-600 mb-1">99.99%</div>
                  <div className="text-sm text-secondary-600">Uptime garantizado</div>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <div className="text-2xl font-bold text-orange-600 mb-1">< 15min</div>
                  <div className="text-sm text-secondary-600">Respuesta crítica</div>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
                  <div className="text-sm text-secondary-600">Gerente dedicado</div>
                </div>
              </div>
              
              <Button size="lg" asChild>
                <Link href="/calculadora-roi-empresarial">
                  Calcular ROI Personalizado
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Enterprise Support */}
        <section className="mb-20">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">
                    🤝 Soporte Dedicado de Nivel Enterprise
                  </h2>
                  <div className="space-y-4 text-blue-800">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Gerente de cuenta dedicado</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Escalación directa con C-level</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Revisiones trimestrales de arquitectura</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Planes de crecimiento personalizados</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="text-4xl font-bold text-blue-600 mb-2">< 15min</div>
                    <div className="text-blue-800 font-medium">Respuesta Garantizada</div>
                    <div className="text-sm text-blue-600 mt-2">Para incidencias críticas</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Final */}
        <section>
          <Card className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                ¿Listo para Infraestructura de Clase Mundial?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                Únete a empresas Fortune 500 que confían en ARCII Cloud para sus operaciones 
                más críticas. Migración experta y gerente dedicado incluido.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="xl" variant="secondary" asChild>
                  <Link href="/empezar?plan=vps-empresarial">
                    Solicitar Cotización Enterprise
                  </Link>
                </Button>
                
                <Button size="xl" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-600" asChild>
                  <Link href="/contacto?enterprise=true">
                    Hablar con Enterprise Sales
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-8 text-sm text-primary-200">
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="h-4 w-4" />
                  <span>99.99% SLA garantizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <CommandLineIcon className="h-4 w-4" />
                  <span>Migración experta</span>
                </div>
                <div className="flex items-center gap-2">
                  <BoltIcon className="h-4 w-4" />
                  <span>Gerente dedicado</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}