'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  CheckCircleIcon,
  CodeBracketIcon,
  CommandLineIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/solid';
import { cn } from '@/lib/utils';

const technologiesCategories = [
  {
    id: 'languages',
    title: 'Lenguajes de Programación',
    icon: CodeBracketIcon,
    color: 'from-blue-500 to-cyan-500',
    description: 'Soporte nativo para todos los lenguajes principales',
    technologies: [
      {
        name: 'Node.js',
        logo: '/tech/nodejs.svg',
        versions: ['18.x', '20.x', 'Latest'],
        features: ['NPM/Yarn', 'PM2', 'NVM', 'Express.js'],
        performance: '99.9% uptime',
        specialty: 'APIs REST, microservicios'
      },
      {
        name: 'Python',
        logo: '/tech/python.svg',
        versions: ['3.9', '3.10', '3.11', '3.12'],
        features: ['pip', 'virtualenv', 'Django', 'Flask'],
        performance: 'Auto-scaling',
        specialty: 'ML, data science, web apps'
      },
      {
        name: 'PHP',
        logo: '/tech/php.svg',
        versions: ['8.1', '8.2', '8.3'],
        features: ['Composer', 'OPcache', 'JIT', 'Extensions'],
        performance: 'OpCode cache',
        specialty: 'Laravel, Symfony, WordPress'
      },
      {
        name: 'Java',
        logo: '/tech/java.svg',
        versions: ['11', '17', '21'],
        features: ['Maven', 'Gradle', 'Spring', 'Tomcat'],
        performance: 'JVM tuning',
        specialty: 'Enterprise applications'
      },
      {
        name: 'Ruby',
        logo: '/tech/ruby.svg',
        versions: ['3.0', '3.1', '3.2'],
        features: ['RubyGems', 'Bundler', 'Rails', 'rbenv'],
        performance: 'Puma server',
        specialty: 'Rails applications'
      },
      {
        name: 'Go',
        logo: '/tech/golang.svg',
        versions: ['1.20', '1.21'],
        features: ['Modules', 'Cross-compile', 'Goroutines'],
        performance: 'Native binary',
        specialty: 'High-performance APIs'
      }
    ]
  },
  {
    id: 'databases',
    title: 'Bases de Datos',
    icon: CommandLineIcon,
    color: 'from-green-500 to-emerald-500',
    description: 'Motores de BD optimizados y configurados',
    technologies: [
      {
        name: 'PostgreSQL',
        logo: '/tech/postgresql.svg',
        versions: ['13', '14', '15', '16'],
        features: ['Replication', 'Extensions', 'JSON support'],
        performance: 'Query optimization',
        specialty: 'Complex queries, ACID'
      },
      {
        name: 'MySQL',
        logo: '/tech/mysql.svg',
        versions: ['8.0', '8.1'],
        features: ['InnoDB', 'Replication', 'Partitioning'],
        performance: 'Query cache',
        specialty: 'Web applications'
      },
      {
        name: 'Redis',
        logo: '/tech/redis.svg',
        versions: ['6.x', '7.x'],
        features: ['Clustering', 'Pub/Sub', 'Streams'],
        performance: 'In-memory',
        specialty: 'Cache, sessions'
      },
      {
        name: 'MongoDB',
        logo: '/tech/mongodb.svg',
        versions: ['6.0', '7.0'],
        features: ['Replica sets', 'Sharding', 'Aggregation'],
        performance: 'Index optimization',
        specialty: 'Document storage'
      },
      {
        name: 'InfluxDB',
        logo: '/tech/influxdb.svg',
        versions: ['2.x'],
        features: ['Time series', 'Flux queries', 'Grafana'],
        performance: 'Time-optimized',
        specialty: 'Metrics, IoT data'
      }
    ]
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    icon: DocumentTextIcon,
    color: 'from-purple-500 to-pink-500',
    description: 'Frameworks modernos pre-configurados',
    technologies: [
      {
        name: 'Next.js',
        logo: '/tech/nextjs.svg',
        versions: ['13.x', '14.x'],
        features: ['SSR/SSG', 'API routes', 'Edge runtime'],
        performance: 'ISR + CDN',
        specialty: 'React applications'
      },
      {
        name: 'Vue.js',
        logo: '/tech/vuejs.svg',
        versions: ['3.x'],
        features: ['Vite', 'Nuxt', 'Composition API'],
        performance: 'Hot reload',
        specialty: 'Progressive apps'
      },
      {
        name: 'Laravel',
        logo: '/tech/laravel.svg',
        versions: ['10.x', '11.x'],
        features: ['Artisan', 'Eloquent', 'Forge'],
        performance: 'OPcache + Redis',
        specialty: 'PHP web applications'
      },
      {
        name: 'Django',
        logo: '/tech/django.svg',
        versions: ['4.2', '5.0'],
        features: ['ORM', 'Admin panel', 'REST framework'],
        performance: 'Gunicorn + Nginx',
        specialty: 'Python web framework'
      },
      {
        name: 'Express.js',
        logo: '/tech/express.svg',
        versions: ['4.x'],
        features: ['Middleware', 'Routing', 'Template engines'],
        performance: 'PM2 clustering',
        specialty: 'Node.js APIs'
      },
      {
        name: 'FastAPI',
        logo: '/tech/fastapi.svg',
        versions: ['0.104+'],
        features: ['Auto docs', 'Pydantic', 'Async'],
        performance: 'ASGI + Uvicorn',
        specialty: 'Python APIs'
      }
    ]
  }
];

export function TechnologiesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
            Stack Tecnológico Completo
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Desde lenguajes de programación hasta bases de datos y frameworks. 
            Todo optimizado, actualizado y listo para production desde el primer día.
          </p>
        </div>

        {/* Technologies by Category */}
        <div className="space-y-16">
          {technologiesCategories.map((category) => (
            <div key={category.id}>
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary-900">{category.title}</h3>
                  <p className="text-secondary-600">{category.description}</p>
                </div>
              </div>

              {/* Technologies Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.technologies.map((tech, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-secondary-50 rounded-xl flex items-center justify-center p-2">
                          <img 
                            src={tech.logo} 
                            alt={tech.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-secondary-900">{tech.name}</h4>
                          <p className="text-sm text-secondary-600">{tech.specialty}</p>
                        </div>
                      </div>

                      {/* Versions */}
                      <div className="mb-4">
                        <div className="text-sm font-medium text-secondary-700 mb-2">
                          Versiones disponibles:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {tech.versions.map((version, idx) => (
                            <span 
                              key={idx}
                              className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-md font-mono"
                            >
                              {version}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Performance Badge */}
                      <div className="bg-success-50 border border-success-200 rounded-lg p-2 mb-4">
                        <div className="text-xs text-success-700">
                          <strong>Optimización:</strong> {tech.performance}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      {/* Features */}
                      <div className="space-y-2">
                        {tech.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircleIcon className="h-4 w-4 text-success-500 flex-shrink-0" />
                            <span className="text-sm text-secondary-700">{feature}</span>
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

        {/* Custom Stack CTA */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-secondary-900 to-secondary-800 text-white">
            <CardContent className="text-center py-12">
              <CodeBracketIcon className="h-16 w-16 text-accent-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">
                ¿Necesitas una Tecnología Específica?
              </h3>
              <p className="text-lg text-secondary-200 mb-8 max-w-2xl mx-auto">
                Si tu proyecto requiere una tecnología que no está listada, podemos configurarla. 
                Rust, .NET Core, Elixir, Haskell... trabajamos con cualquier stack.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-xl font-bold text-accent-400 mb-1">48h</div>
                  <div className="text-sm text-secondary-300">Configuración personalizada</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-accent-400 mb-1">100+</div>
                  <div className="text-sm text-secondary-300">Tecnologías soportadas</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-accent-400 mb-1">24/7</div>
                  <div className="text-sm text-secondary-300">Soporte especializado</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  Solicitar Stack Personalizado
                </Button>
                <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
                  Ver Documentación Técnica
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}