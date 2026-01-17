'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  CommandLineIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  EyeIcon,
  DocumentDuplicateIcon,
  ClockIcon,
  ArrowPathIcon,
  PlayIcon,
} from '@heroicons/react/24/solid';

const devTools = [
  {
    id: 'ssh',
    title: 'SSH Root Access',
    icon: CommandLineIcon,
    description: 'Acceso completo por SSH con permisos de root',
    color: 'from-green-500 to-green-600',
    features: [
      'SSH keys automáticas',
      'Acceso root completo',
      'Port forwarding',
      'Tunneling seguro',
      'Multi-user support',
      'Logs de acceso'
    ],
    codeExample: `# Conectar a tu servidor
ssh root@your-server.arciicloud.dev

# Instalar dependencias personalizadas  
apt update && apt install redis-server

# Configurar servicios
systemctl enable redis-server
systemctl start redis-server

# Monitorear recursos
htop`,
    benefits: ['Control total del servidor', 'Instalación de software personalizado', 'Debugging avanzado']
  },
  {
    id: 'git',
    title: 'Git Auto-Deploy',
    icon: RocketLaunchIcon,
    description: 'Deployment automático con Git hooks y CI/CD',
    color: 'from-blue-500 to-blue-600',
    features: [
      'Git hooks automáticos',
      'Deploy on push',
      'Branch management',
      'Rollback instantáneo',
      'Build logs detallados',
      'Slack/Discord notifications'
    ],
    codeExample: `# Configurar auto-deploy
git remote add production git@deploy.arciicloud.dev:myapp.git

# Deploy automático con push
git push production main

# Rollback si es necesario  
git push production HEAD~1:main --force

# Verificar status
curl https://api.arciicloud.dev/deploy/status`,
    benefits: ['Deploy en segundos', 'Zero-downtime deployments', 'Historial completo']
  },
  {
    id: 'staging',
    title: 'Staging Environments',
    icon: EyeIcon,
    description: 'Ambientes de testing con URLs temporales',
    color: 'from-purple-500 to-purple-600',
    features: [
      'URLs temporales únicas',
      'Branch previews',
      'Base de datos separadas',
      'SSL automático',
      'Password protection',
      'Auto-cleanup'
    ],
    codeExample: `# Crear staging desde branch
git checkout -b feature/new-ui
git push origin feature/new-ui

# ARCIICloud crea automáticamente:
# https://feature-new-ui.staging.myapp.dev

# Variables de entorno separadas
export NODE_ENV=staging
export DB_HOST=staging-db.internal

# Testing automatizado
npm run test:staging`,
    benefits: ['Testing sin riesgos', 'URLs shareables', 'Aislamiento completo']
  },
  {
    id: 'monitoring',
    title: 'Real-time Monitoring',
    icon: ArrowPathIcon,
    description: 'Métricas en tiempo real y alertas inteligentes',
    color: 'from-red-500 to-red-600',
    features: [
      'Métricas de rendimiento',
      'Error tracking',
      'Alertas customizables',
      'Dashboards personalizados',
      'Log aggregation',
      'APM integrado'
    ],
    codeExample: `# Métricas custom con API
curl -X POST https://api.arciicloud.dev/metrics \\
  -H "Authorization: Bearer $API_KEY" \\
  -d '{
    "metric": "user_signup",
    "value": 1,
    "tags": {"source": "mobile"}
  }'

# Logs estructurados
echo '{"level":"info","message":"User login","user_id":123}' | \\
  logger -t myapp`,
    benefits: ['Detección temprana de issues', 'Performance insights', 'Alertas proactivas']
  },
  {
    id: 'docker',
    title: 'Docker Support',
    icon: DocumentDuplicateIcon,
    description: 'Containerización completa con Docker y Docker Compose',
    color: 'from-cyan-500 to-cyan-600',
    features: [
      'Docker pre-instalado',
      'Docker Compose support',
      'Registry privado',
      'Multi-stage builds',
      'Health checks',
      'Resource limits'
    ],
    codeExample: `# docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
  
  redis:
    image: redis:alpine
    volumes:
      - redis_data:/data

# Deploy con compose
docker-compose up -d --build`,
    benefits: ['Entornos consistentes', 'Escalabilidad fácil', 'Isolation completo']
  },
  {
    id: 'databases',
    title: 'Database Management',
    icon: ClockIcon,
    description: 'Gestión avanzada de bases de datos con herramientas gráficas',
    color: 'from-indigo-500 to-indigo-600',
    features: [
      'phpMyAdmin / pgAdmin',
      'Backups automáticos',
      'Query profiler',
      'Performance tuning',
      'Replication setup',
      'Migration tools'
    ],
    codeExample: `# Crear base de datos
createdb myapp_production

# Migrar desde development  
pg_dump myapp_dev | psql myapp_production

# Backup automatizado (cron)
0 2 * * * pg_dump myapp_production | \\
  gzip > /backups/db_$(date +%Y%m%d).sql.gz

# Monitoreo de queries lentas
tail -f /var/log/postgresql/postgresql.log | \\
  grep "duration:"`,
    benefits: ['Administración visual', 'Backups automáticos', 'Optimización de queries']
  }
];

export function DevToolsSection() {
  const [activeTab, setActiveTab] = useState('ssh');
  const activeTool = devTools.find(tool => tool.id === activeTab);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
            Herramientas de Desarrollo Avanzadas
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Todo lo que necesitas para desarrollar, probar y deployar tus aplicaciones. 
            Desde SSH root hasta Docker, con herramientas que los developers realmente usan.
          </p>
        </div>

        {/* Tools Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {devTools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => setActiveTab(tool.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tool.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
              }`}
            >
              <tool.icon className="h-4 w-4" />
              {tool.title}
            </button>
          ))}
        </div>

        {/* Active Tool Details */}
        {activeTool && (
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Side - Info */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${activeTool.color} flex items-center justify-center`}>
                  <activeTool.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary-900">{activeTool.title}</h3>
                  <p className="text-secondary-600">{activeTool.description}</p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-secondary-900 mb-4">Características principales:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {activeTool.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-sm text-secondary-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-secondary-900 mb-4">Beneficios clave:</h4>
                <div className="space-y-2">
                  {activeTool.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <PlayIcon className="h-4 w-4 text-success-500" />
                      <span className="text-sm text-secondary-800 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button variant="gradient" size="lg" className="w-full lg:w-auto">
                Probar Ahora Gratis
              </Button>
            </div>

            {/* Right Side - Code Example */}
            <div>
              <Card className="overflow-hidden">
                <CardHeader className="bg-secondary-900 text-white">
                  <div className="flex items-center gap-2">
                    <CodeBracketIcon className="h-5 w-5" />
                    <span className="font-semibold">Ejemplo de Uso</span>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <pre className="p-6 bg-secondary-900 text-green-400 font-mono text-sm overflow-x-auto leading-relaxed">
                    <code>{activeTool.codeExample}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 transition-colors">
                <CommandLineIcon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-2">Terminal en el Navegador</h3>
              <p className="text-secondary-600 text-sm mb-4">
                Accede a tu servidor directamente desde el panel de control sin necesidad de clientes SSH.
              </p>
              <Button variant="outline" size="sm">
                Abrir Terminal
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-success-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-success-100 transition-colors">
                <DocumentDuplicateIcon className="h-6 w-6 text-success-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-2">File Manager</h3>
              <p className="text-secondary-600 text-sm mb-4">
                Gestiona archivos con una interfaz gráfica moderna. Upload, edit y organize desde el navegador.
              </p>
              <Button variant="outline" size="sm">
                Abrir Files
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-100 transition-colors">
                <ArrowPathIcon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-2">Process Monitor</h3>
              <p className="text-secondary-600 text-sm mb-4">
                Monitorea procesos, memoria y CPU en tiempo real con dashboards interactivos.
              </p>
              <Button variant="outline" size="sm">
                Ver Métricas
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Integration CTA */}
        <Card className="bg-gradient-to-r from-secondary-900 to-secondary-800 text-white">
          <CardContent className="text-center py-12">
            <CodeBracketIcon className="h-16 w-16 text-accent-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              ¿Necesitas una Integración Específica?
            </h3>
            <p className="text-lg text-secondary-200 mb-8 max-w-2xl mx-auto">
              GitHub Actions, GitLab CI, Jenkins, CircleCI... Trabajamos con todas las plataformas de CI/CD 
              y herramientas de desarrollo que ya usas.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mb-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-xl font-bold text-accent-400 mb-1">50+</div>
                <div className="text-sm text-secondary-300">Integraciones disponibles</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-accent-400 mb-1">5min</div>
                <div className="text-sm text-secondary-300">Setup promedio</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-accent-400 mb-1">24/7</div>
                <div className="text-sm text-secondary-300">Soporte técnico</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-accent-400 mb-1">0</div>
                <div className="text-sm text-secondary-300">Costo adicional</div>
              </div>
            </div>

            <Button variant="secondary" size="lg">
              Ver Todas las Integraciones
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}