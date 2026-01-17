'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  ServerIcon,
  CloudIcon,
  CpuChipIcon,
  CircleStackIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  BoltIcon,
  ChartBarIcon,
} from '@heroicons/react/24/solid';

const infrastructureFeatures = [
  {
    category: 'Compute',
    icon: CpuChipIcon,
    color: 'from-blue-500 to-cyan-500',
    items: [
      {
        title: 'Auto-Scaling',
        description: 'Escala recursos automáticamente basado en demanda',
        specs: ['CPU: 1-32 cores', 'RAM: 1-128 GB', 'Scaling triggers', 'Custom policies']
      },
      {
        title: 'Load Balancers',
        description: 'Distribución de tráfico con alta disponibilidad',
        specs: ['Layer 4/7', 'SSL termination', 'Health checks', 'Sticky sessions']
      },
      {
        title: 'Container Orchestration',
        description: 'Kubernetes y Docker Swarm managedos',
        specs: ['K8s 1.28+', 'Helm charts', 'Service mesh', 'Auto-healing']
      }
    ]
  },
  {
    category: 'Storage',
    icon: CircleStackIcon,
    color: 'from-green-500 to-emerald-500',
    items: [
      {
        title: 'NVMe SSD Storage',
        description: 'Almacenamiento de alta velocidad con replicación',
        specs: ['100K+ IOPS', 'Replicación 3x', 'Snapshots', 'Encryption AES-256']
      },
      {
        title: 'Object Storage',
        description: 'Compatible con S3 para assets y backups',
        specs: ['S3 compatible', 'CDN integration', 'Versioning', 'Lifecycle policies']
      },
      {
        title: 'Database Clusters',
        description: 'Bases de datos managed con alta disponibilidad',
        specs: ['Master/Replica', 'Auto-failover', 'Point-in-time recovery', 'Read replicas']
      }
    ]
  },
  {
    category: 'Network',
    icon: GlobeAltIcon,
    color: 'from-purple-500 to-pink-500',
    items: [
      {
        title: 'Global CDN',
        description: 'Red de entrega con 200+ edge locations',
        specs: ['HTTP/3 support', 'Smart routing', 'DDoS protection', 'Real-time purge']
      },
      {
        title: 'Private Networks',
        description: 'Redes privadas virtuales entre servicios',
        specs: ['VPN site-to-site', 'VPC peering', 'Network ACLs', 'Traffic encryption']
      },
      {
        title: 'DNS Managed',
        description: 'DNS autoritativo con GeoDNS y failover',
        specs: ['Anycast DNS', 'GeoDNS', 'Health monitoring', 'DNSSEC']
      }
    ]
  },
  {
    category: 'Security',
    icon: ShieldCheckIcon,
    color: 'from-red-500 to-orange-500',
    items: [
      {
        title: 'WAF & DDoS Protection',
        description: 'Firewall de aplicaciones web con protección DDoS',
        specs: ['OWASP rules', 'Custom rules', 'Rate limiting', 'Bot protection']
      },
      {
        title: 'Zero-Trust Network',
        description: 'Arquitectura de seguridad zero-trust',
        specs: ['mTLS encryption', 'Service mesh', 'Identity verification', 'Micro-segmentation']
      },
      {
        title: 'Compliance Suite',
        description: 'Herramientas para cumplimiento regulatorio',
        specs: ['GDPR tools', 'Audit logs', 'Data classification', 'Retention policies']
      }
    ]
  }
];

const regions = [
  {
    name: 'US East (Virginia)',
    code: 'us-east-1',
    latency: '15ms',
    status: 'active',
    services: ['Compute', 'Storage', 'Database', 'CDN']
  },
  {
    name: 'US West (California)',
    code: 'us-west-1',
    latency: '12ms',
    status: 'active',
    services: ['Compute', 'Storage', 'Database', 'CDN']
  },
  {
    name: 'Europe (Frankfurt)',
    code: 'eu-central-1',
    latency: '18ms',
    status: 'active',
    services: ['Compute', 'Storage', 'Database', 'CDN']
  },
  {
    name: 'Asia Pacific (Singapore)',
    code: 'ap-southeast-1',
    latency: '25ms',
    status: 'active',
    services: ['Compute', 'Storage', 'Database', 'CDN']
  },
  {
    name: 'South America (São Paulo)',
    code: 'sa-east-1',
    latency: '35ms',
    status: 'active',
    services: ['Compute', 'Storage', 'CDN']
  },
  {
    name: 'Mexico (Ciudad de México)',
    code: 'mx-central-1',
    latency: '8ms',
    status: 'coming-soon',
    services: ['Compute', 'Storage', 'Database', 'CDN']
  }
];

const performanceMetrics = [
  {
    metric: '99.99%',
    label: 'Uptime SLA',
    description: 'Garantía de disponibilidad con compensación',
    icon: ChartBarIcon,
    color: 'text-success-500'
  },
  {
    metric: '<10ms',
    label: 'Network Latency',
    description: 'Entre regiones en la misma zona geográfica',
    icon: BoltIcon,
    color: 'text-accent-500'
  },
  {
    metric: '1M+',
    label: 'IOPS',
    description: 'Operations per second en storage NVMe',
    icon: CircleStackIcon,
    color: 'text-primary-500'
  },
  {
    metric: '100Gbps',
    label: 'Network Bandwidth',
    description: 'Ancho de banda disponible por región',
    icon: GlobeAltIcon,
    color: 'text-purple-500'
  }
];

export function InfrastructureSection() {
  return (
    <section className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
            Infraestructura Cloud Enterprise
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Infraestructura moderna, escalable y segura diseñada para aplicaciones críticas. 
            Desde auto-scaling hasta redes globales, todo managado para máximo performance.
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {performanceMetrics.map((metric, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <metric.icon className={`h-8 w-8 ${metric.color} mx-auto mb-3`} />
                <div className="text-2xl font-bold text-secondary-900 mb-2">{metric.metric}</div>
                <div className="text-lg font-semibold text-secondary-800 mb-2">{metric.label}</div>
                <div className="text-sm text-secondary-600">{metric.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Infrastructure Categories */}
        <div className="space-y-16 mb-16">
          {infrastructureFeatures.map((category) => (
            <div key={category.category}>
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900">{category.category}</h3>
              </div>

              {/* Category Items */}
              <div className="grid md:grid-cols-3 gap-6">
                {category.items.map((item, index) => (
                  <Card key={index} className="h-full group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <h4 className="text-lg font-bold text-secondary-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-secondary-600 text-sm">
                        {item.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {item.specs.map((spec, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-secondary-700">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Global Regions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-secondary-900 mb-12">
            Regiones Globales Disponibles
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <Card key={index} className={`${
                region.status === 'coming-soon' ? 'opacity-60' : ''
              } group hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-secondary-900">{region.name}</h4>
                      <code className="text-sm text-primary-600 font-mono">{region.code}</code>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-accent-600">{region.latency}</div>
                      <div className="text-xs text-secondary-500">latencia típica</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                      region.status === 'active' 
                        ? 'bg-success-100 text-success-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        region.status === 'active' ? 'bg-success-500' : 'bg-amber-500'
                      }`}></div>
                      {region.status === 'active' ? 'Disponible' : 'Próximamente'}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-secondary-700 mb-2">Servicios disponibles:</div>
                    <div className="flex flex-wrap gap-1">
                      {region.services.map((service, idx) => (
                        <span key={idx} className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs rounded">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Architecture Diagram CTA */}
        <Card className="bg-gradient-to-r from-secondary-900 to-secondary-800 text-white">
          <CardContent className="py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <ServerIcon className="h-16 w-16 text-accent-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">
                  Arquitectura de Referencia
                </h3>
                <p className="text-lg text-secondary-200 mb-6">
                  Descarga nuestros diagramas de arquitectura y mejores prácticas 
                  para diseñar aplicaciones cloud-native escalables y resilientes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="secondary" size="lg">
                    Descargar Diagramas
                  </Button>
                  <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
                    Ver Documentación
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
                  <h4 className="font-semibold mb-2">Microservicios</h4>
                  <p className="text-sm text-secondary-200">Patrones y herramientas para arquitecturas distribuidas</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
                  <h4 className="font-semibold mb-2">Event-Driven</h4>
                  <p className="text-sm text-secondary-200">Streaming de eventos con Kafka y Redis</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
                  <h4 className="font-semibold mb-2">Serverless</h4>
                  <p className="text-sm text-secondary-200">Functions-as-a-Service para workloads específicos</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}