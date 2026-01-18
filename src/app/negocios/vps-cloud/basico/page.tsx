import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  CheckCircleIcon,
  XMarkIcon,
  CloudIcon,
  ServerIcon,
  ShieldCheckIcon,
  CommandLineIcon,
  CpuChipIcon,
  CircleStackIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'VPS Básico $899/mes | Servidor Virtual ARCII Cloud',
  description: 'VPS Linux/Windows: 2GB RAM, 50GB SSD, 2 vCores, Root access, snapshots incluidos. Servidor virtual desde $899/mes.',
  keywords: [
    'vps basico mexico',
    'servidor virtual',
    'vps $899',
    'vps linux',
    'vps windows',
    'root access',
    'servidor dedicado virtual'
  ],
  openGraph: {
    title: 'VPS Básico $899/mes | Servidor Virtual México',
    description: '☁️ Tu primer VPS: 2GB RAM, 50GB SSD, root access completo. Linux/Windows disponible.',
    url: 'https://new.arciicloud.com/negocios/vps-cloud/basico',
    type: 'website',
  },
};

const vpsFeatures = [
  { name: '2 GB RAM DDR4', included: true, description: 'Memoria dedicada garantizada' },
  { name: '50 GB SSD NVMe', included: true, description: 'Almacenamiento ultrarrápido' },
  { name: '2 vCPU Cores', included: true, description: 'Procesamiento dedicado' },
  { name: '1 TB Transferencia', included: true, description: 'Ancho de banda generoso' },
  { name: 'Root Access Completo', included: true, description: 'Control total del servidor' },
  { name: '1 IP Dedicada', included: true, description: 'Dirección IP exclusiva' },
  { name: 'Ubuntu/CentOS/Debian', included: true, description: 'Distribuciones Linux populares' },
  { name: 'Windows Server (Opcional)', included: true, description: '+$200/mes adicionales' },
  { name: 'Panel de Control VPS', included: true, description: 'Gestión desde navegador' },
  { name: 'Snapshots Incluidos', included: true, description: 'Backups instantáneos' },
  { name: 'Monitoreo 24/7', included: true, description: 'Supervisión automática' },
  { name: 'Soporte Técnico', included: true, description: 'Asistencia especializada' },
  { name: 'Load Balancer', included: false, description: 'Disponible en VPS Pro' },
  { name: 'Backup Automático', included: false, description: 'Servicio premium adicional' },
  { name: 'CDN Integrado', included: false, description: 'En planes superiores' },
];

const operatingSystems = [
  { name: 'Ubuntu 24.04 LTS', description: 'Más popular para desarrollo web', icon: '🐧', popular: true },
  { name: 'CentOS 9 Stream', description: 'Empresarial y estable', icon: '🐧' },
  { name: 'Debian 12', description: 'Ultra estable y minimalista', icon: '🐧' },
  { name: 'Rocky Linux 9', description: 'Alternativa a CentOS', icon: '🐧' },
  { name: 'AlmaLinux 9', description: 'Distribución empresarial', icon: '🐧' },
  { name: 'Windows Server 2022', description: '+$200/mes - Con licencia incluida', icon: '🪟' },
];

const useCases = [
  {
    title: 'Desarrollo Web',
    description: 'Proyectos Node.js, Python, PHP avanzados',
    icon: CommandLineIcon,
    requirements: ['Git repositories', 'CI/CD pipelines', 'Testing environments', 'Custom configs'],
  },
  {
    title: 'Aplicaciones SaaS',
    description: 'Software como servicio escalable',
    icon: CloudIcon,
    requirements: ['API backends', 'Database hosting', 'User management', 'Real-time features'],
  },
  {
    title: 'E-learning Platforms',
    description: 'Plataformas educativas y LMS',
    icon: ServerIcon,
    requirements: ['Moodle/Canvas', 'Video streaming', 'User tracking', 'Content delivery'],
  },
];

const specifications = {
  'CPU': '2 vCores Intel Xeon E5',
  'RAM': '2 GB DDR4 ECC dedicada',
  'Almacenamiento': '50 GB SSD NVMe RAID-10',
  'Transferencia': '1 TB/mes a 1 Gbps',
  'IP Address': '1 IPv4 dedicada',
  'Virtualización': 'KVM completa',
  'Panel': 'ARCII VPS Manager',
  'Snapshots': '5 snapshots incluidos',
  'Backups': 'Manuales (automáticos opcionales)',
  'Soporte': '24/7 especializado',
};

const management = [
  {
    feature: 'Panel Web',
    description: 'Gestión completa desde navegador',
    included: true,
  },
  {
    feature: 'API REST',
    description: 'Automatización y integración',
    included: true,
  },
  {
    feature: 'SSH/SFTP',
    description: 'Acceso seguro por terminal',
    included: true,
  },
  {
    feature: 'VNC Console',
    description: 'Acceso gráfico remoto',
    included: true,
  },
  {
    feature: 'Reinstalación OS',
    description: 'Cambio de sistema operativo',
    included: true,
  },
  {
    feature: 'Resize Resources',
    description: 'Escalar RAM/CPU/Storage',
    included: true,
  },
];

export default function VPSBasicoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-500 bg-opacity-20 rounded-full text-blue-100 text-sm font-medium mb-6">
                ☁️ Tu Primer VPS
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                VPS Básico
              </h1>
              
              <div className="text-3xl font-bold mb-6">
                <span className="text-5xl">$899</span>
                <span className="text-xl text-blue-200">/mes</span>
                <div className="text-sm text-blue-200 mt-1">
                  $719/mes pagando anualmente (ahorra $180)
                </div>
              </div>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Servidor virtual privado con recursos dedicados y control total. 
                Perfecto para desarrolladores y aplicaciones que necesitan más potencia.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" variant="secondary" asChild>
                  <Link href="/checkout?plan=vps-basico">
                    Crear VPS Ahora
                  </Link>
                </Button>
                
                <Button size="xl" variant="ghost" className="text-white hover:bg-white/10" asChild>
                  <Link href="#especificaciones">
                    Ver Especificaciones
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-6 mt-8 text-blue-100">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5" />
                  <span className="text-sm">Setup en 5 minutos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5" />
                  <span className="text-sm">Root access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5" />
                  <span className="text-sm">Snapshots gratis</span>
                </div>
              </div>
            </div>
            
            <div className="lg:text-right">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4">
                    ¿Por qué elegir VPS?
                  </h3>
                  <ul className="space-y-3 text-blue-100">
                    <li className="flex items-center gap-3">
                      <CommandLineIcon className="h-5 w-5 text-blue-300 flex-shrink-0" />
                      <span>Control total del servidor</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <ServerIcon className="h-5 w-5 text-blue-300 flex-shrink-0" />
                      <span>Recursos dedicados garantizados</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <ShieldCheckIcon className="h-5 w-5 text-blue-300 flex-shrink-0" />
                      <span>Aislamiento completo y seguridad</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CloudIcon className="h-5 w-5 text-blue-300 flex-shrink-0" />
                      <span>Escalabilidad bajo demanda</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Operating Systems */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Sistemas Operativos
            </h2>
            <p className="text-lg text-secondary-600">
              Elige la distribución que mejor se adapte a tu proyecto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operatingSystems.map((os) => (
              <Card key={os.name} className={`hover:shadow-lg transition-shadow ${os.popular ? 'ring-2 ring-blue-200 bg-blue-50' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">{os.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-secondary-900 mb-1">
                        {os.name}
                        {os.popular && (
                          <span className="ml-2 px-2 py-1 bg-blue-600 text-white text-xs rounded">
                            Popular
                          </span>
                        )}
                      </h3>
                      <p className="text-sm text-secondary-600">{os.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Casos de Uso Ideales
            </h2>
            <p className="text-lg text-secondary-600">
              Proyectos perfectos para VPS Básico
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center">
                    <useCase.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-3 text-center">
                    {useCase.title}
                  </h3>
                  <p className="text-secondary-600 mb-4 text-center">
                    {useCase.description}
                  </p>
                  <ul className="space-y-2">
                    {useCase.requirements.map((requirement) => (
                      <li key={requirement} className="flex items-center gap-2 text-sm text-secondary-600">
                        <CheckCircleIcon className="h-4 w-4 text-blue-500 flex-shrink-0" />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* VPS Features */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              ¿Qué Incluye?
            </h2>
            <p className="text-lg text-secondary-600">
              Características completas del VPS Básico
            </p>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    {vpsFeatures.map((feature, index) => (
                      <tr key={feature.name} className={index % 2 === 0 ? 'bg-blue-25' : 'bg-white'}>
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
        <section id="especificaciones" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Especificaciones Técnicas
            </h2>
            <p className="text-lg text-secondary-600">
              Hardware y características técnicas detalladas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ServerIcon className="h-6 w-6 text-blue-600" />
                  Hardware Dedicado
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
                  Gestión y Soporte
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

        {/* Management Features */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Panel de Gestión
            </h2>
            <p className="text-lg text-secondary-600">
              Control total de tu VPS desde cualquier lugar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {management.map((item) => (
              <Card key={item.feature} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-secondary-900">{item.feature}</h3>
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="text-sm text-secondary-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* VPS vs Hosting Comparison */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              VPS vs Hosting Compartido
            </h2>
            <p className="text-lg text-secondary-600">
              ¿Por qué elegir un servidor virtual?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CloudIcon className="h-6 w-6 text-blue-600" />
                  VPS Básico
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Recursos dedicados garantizados</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Root access y control total</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Instalar cualquier software</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Escalabilidad instantánea</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    <span className="text-sm">IP dedicada incluida</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ServerIcon className="h-6 w-6 text-secondary-400" />
                  Hosting Compartido
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <XMarkIcon className="h-5 w-5 text-red-500" />
                    <span className="text-sm">Recursos compartidos limitados</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <XMarkIcon className="h-5 w-5 text-red-500" />
                    <span className="text-sm">Sin acceso root o SSH</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <XMarkIcon className="h-5 w-5 text-red-500" />
                    <span className="text-sm">Software limitado predefinido</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <XMarkIcon className="h-5 w-5 text-red-500" />
                    <span className="text-sm">Escalabilidad limitada</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <XMarkIcon className="h-5 w-5 text-red-500" />
                    <span className="text-sm">IP compartida con otros sitios</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                ¿Listo para tu VPS?
              </h2>
              <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
                Servidor virtual configurado en menos de 5 minutos. 
                Control total, recursos dedicados y soporte especializado 24/7.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="xl" asChild>
                  <Link href="/checkout?plan=vps-basico">
                    Crear VPS Básico - $899/mes
                  </Link>
                </Button>
                
                <Button size="xl" variant="outline" asChild>
                  <Link href="/negocios/vps-cloud/profesional">
                    Ver VPS Profesional
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-8 mt-8 text-sm text-secondary-500">
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="h-4 w-4" />
                  <span>Setup automático</span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleStackIcon className="h-4 w-4" />
                  <span>Snapshots incluidos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CommandLineIcon className="h-4 w-4" />
                  <span>Root access</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}