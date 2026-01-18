import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Técnico ARCIICloud | Cloud Computing, DevOps, Seguridad',
  description: '📝 Blog técnico especializado en cloud computing, DevOps, seguridad, arquitecturas distribuidas. Artículos de expertos, tutoriales, mejores prácticas.',
  keywords: [
    'blog cloud computing',
    'devops mexico',
    'seguridad cloud',
    'arquitectura microservicios',
    'kubernetes mexico',
    'contenedores docker'
  ],
};

const blogPosts = [
  {
    id: 1,
    title: "Migración a Kubernetes: Guía Completa 2026",
    excerpt: "Estrategias probadas para migrar aplicaciones legacy a Kubernetes con cero downtime. Incluye casos reales y lessons learned.",
    author: "Carlos Mendoza",
    role: "Senior DevOps Engineer",
    date: "15 Enero 2026",
    readTime: "8 min",
    category: "DevOps",
    tags: ["Kubernetes", "Migration", "Containers"],
    image: "🚢",
    featured: true
  },
  {
    id: 2,
    title: "Zero Trust Security en el Cloud",
    excerpt: "Implementación de arquitectura Zero Trust para infraestructura cloud. Herramientas, políticas y mejores prácticas de seguridad.",
    author: "Ana García",
    role: "Cloud Security Architect",
    date: "12 Enero 2026",
    readTime: "12 min",
    category: "Seguridad",
    tags: ["Zero Trust", "Security", "IAM"],
    image: "🔒"
  },
  {
    id: 3,
    title: "Optimización de Costos en AWS: Técnicas Avanzadas",
    excerpt: "Cómo reducir hasta 60% los costos de AWS usando Reserved Instances, Spot Instances y right-sizing automático.",
    author: "Roberto Silva",
    role: "Cloud Cost Optimization Specialist",
    date: "10 Enero 2026",
    readTime: "6 min",
    category: "Cloud",
    tags: ["AWS", "Cost Optimization", "FinOps"],
    image: "💰"
  },
  {
    id: 4,
    title: "Microservicios con Service Mesh: Istio vs Linkerd",
    excerpt: "Comparación detallada de service mesh solutions. Cuándo usar cada una y cómo implementar observabilidad completa.",
    author: "Luis Ramírez",
    role: "Microservices Architect",
    date: "8 Enero 2026",
    readTime: "10 min",
    category: "Arquitectura",
    tags: ["Microservices", "Service Mesh", "Istio"],
    image: "🕸️"
  },
  {
    id: 5,
    title: "GitOps con ArgoCD: Deployment Automatizado",
    excerpt: "Implementa GitOps usando ArgoCD para deployments automáticos y rollbacks seguros en clusters Kubernetes.",
    author: "María González",
    role: "Platform Engineer",
    date: "5 Enero 2026",
    readTime: "7 min",
    category: "DevOps",
    tags: ["GitOps", "ArgoCD", "CI/CD"],
    image: "🔄"
  },
  {
    id: 6,
    title: "Monitoring Distribuido con OpenTelemetry",
    excerpt: "Observabilidad completa en sistemas distribuidos. Implementación de traces, metrics y logs con OpenTelemetry.",
    author: "Jorge Vargas",
    role: "SRE Lead",
    date: "3 Enero 2026",
    readTime: "9 min",
    category: "Observabilidad",
    tags: ["OpenTelemetry", "Monitoring", "SRE"],
    image: "📊"
  }
];

const categories = ["Todos", "DevOps", "Seguridad", "Cloud", "Arquitectura", "Observabilidad"];

export default function BlogTecnicoPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Blog Técnico
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Insights técnicos, tutoriales avanzados y mejores prácticas de nuestros expertos en cloud.
          </p>
          <div className="flex justify-center space-x-8 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">200+</div>
              <div className="text-slate-400">Artículos Publicados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50K+</div>
              <div className="text-slate-400">Lectores Mensuales</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-slate-400">Expertos Contribuyen</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Artículo Destacado</h2>
          </div>
          
          {blogPosts.filter(post => post.featured).map((post) => (
            <div key={post.id} className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 mb-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    <span className="text-secondary-500 text-sm">{post.readTime} lectura</span>
                  </div>
                  <h3 className="text-3xl font-bold text-secondary-900 mb-4">{post.title}</h3>
                  <p className="text-secondary-600 mb-6 text-lg leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-bold text-lg">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-secondary-900">{post.author}</div>
                      <div className="text-secondary-600 text-sm">{post.role}</div>
                    </div>
                    <div className="text-secondary-500 text-sm ml-auto">{post.date}</div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="bg-white text-secondary-600 px-3 py-1 rounded-full text-sm border">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                    Leer Artículo Completo
                  </button>
                </div>
                
                <div className="text-center">
                  <div className="text-9xl mb-4">{post.image}</div>
                  <div className="text-secondary-500 text-sm">Ilustración técnica</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-secondary-50 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  category === "Todos" 
                    ? "bg-primary-600 text-white" 
                    : "bg-white text-secondary-600 hover:bg-primary-50 hover:text-primary-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="bg-white border border-secondary-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="p-6">
                  {/* Category and Reading Time */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    <span className="text-secondary-500 text-sm">{post.readTime}</span>
                  </div>

                  {/* Icon */}
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{post.image}</div>

                  {/* Title and Excerpt */}
                  <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-secondary-600 mb-4 leading-relaxed">{post.excerpt}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-secondary-50 text-secondary-600 px-2 py-1 rounded-md text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Author and Date */}
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-bold text-sm">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-secondary-900 text-sm">{post.author}</div>
                      <div className="text-secondary-500 text-xs">{post.date}</div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-secondary-100 text-secondary-800 px-8 py-3 rounded-lg hover:bg-secondary-200 transition-colors font-semibold">
              Cargar Más Artículos
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Mantente al día con las últimas tendencias
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Recibe nuestros mejores artículos técnicos directamente en tu inbox. Sin spam, solo contenido valioso.
          </p>
          <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-6 py-3 rounded-lg border-0 focus:ring-2 focus:ring-primary-300 outline-none"
            />
            <button className="bg-secondary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-700 transition-colors">
              Suscribirse
            </button>
          </div>
          <p className="text-primary-200 text-sm mt-4">
            Únete a 10,000+ profesionales que ya reciben nuestro newsletter técnico.
          </p>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Temas Populares</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                ☸️
              </div>
              <h3 className="font-semibold text-lg mb-2">Kubernetes</h3>
              <p className="text-secondary-600 text-sm mb-3">Orchestradores, deployment strategies, networking</p>
              <div className="text-blue-600 text-sm font-semibold">25 artículos →</div>
            </div>

            <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                🐳
              </div>
              <h3 className="font-semibold text-lg mb-2">Docker</h3>
              <p className="text-secondary-600 text-sm mb-3">Contenedores, multi-stage builds, security</p>
              <div className="text-green-600 text-sm font-semibold">18 artículos →</div>
            </div>

            <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                ☁️
              </div>
              <h3 className="font-semibold text-lg mb-2">AWS</h3>
              <p className="text-secondary-600 text-sm mb-3">Servicios, arquitecturas, cost optimization</p>
              <div className="text-orange-600 text-sm font-semibold">32 artículos →</div>
            </div>

            <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                🔧
              </div>
              <h3 className="font-semibold text-lg mb-2">DevOps</h3>
              <p className="text-secondary-600 text-sm mb-3">CI/CD, automation, infrastructure as code</p>
              <div className="text-purple-600 text-sm font-semibold">28 artículos →</div>
            </div>

            <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                🛡️
              </div>
              <h3 className="font-semibold text-lg mb-2">Seguridad</h3>
              <p className="text-secondary-600 text-sm mb-3">Zero trust, compliance, threat detection</p>
              <div className="text-red-600 text-sm font-semibold">22 artículos →</div>
            </div>

            <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                📊
              </div>
              <h3 className="font-semibold text-lg mb-2">Monitoring</h3>
              <p className="text-secondary-600 text-sm mb-3">Observabilidad, alertas, métricas</p>
              <div className="text-indigo-600 text-sm font-semibold">15 artículos →</div>
            </div>

            <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                🏗️
              </div>
              <h3 className="font-semibold text-lg mb-2">Arquitectura</h3>
              <p className="text-secondary-600 text-sm mb-3">Microservicios, patterns, design systems</p>
              <div className="text-teal-600 text-sm font-semibold">20 artículos →</div>
            </div>

            <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                🚀
              </div>
              <h3 className="font-semibold text-lg mb-2">Performance</h3>
              <p className="text-secondary-600 text-sm mb-3">Optimization, scaling, load testing</p>
              <div className="text-pink-600 text-sm font-semibold">12 artículos →</div>
            </div>
          </div>
        </div>
      </section>

      {/* Authors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestros Expertos</h2>
            <p className="text-xl text-secondary-600">
              Conoce a los ingenieros y arquitectos detrás de nuestro contenido técnico
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-secondary-50 p-6 rounded-xl">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-2xl">CM</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Carlos Mendoza</h3>
              <p className="text-secondary-600 text-sm mb-3">Senior DevOps Engineer</p>
              <p className="text-secondary-600 text-sm mb-4">Especialista en Kubernetes, CI/CD y automatización. 8+ años en DevOps.</p>
              <div className="text-primary-600 text-sm font-semibold">15 artículos publicados</div>
            </div>

            <div className="text-center bg-secondary-50 p-6 rounded-xl">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-2xl">AG</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Ana García</h3>
              <p className="text-secondary-600 text-sm mb-3">Cloud Security Architect</p>
              <p className="text-secondary-600 text-sm mb-4">Experta en Zero Trust, compliance y seguridad cloud. CISSP certificada.</p>
              <div className="text-primary-600 text-sm font-semibold">12 artículos publicados</div>
            </div>

            <div className="text-center bg-secondary-50 p-6 rounded-xl">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-2xl">RS</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Roberto Silva</h3>
              <p className="text-secondary-600 text-sm mb-3">Cloud Cost Optimization Specialist</p>
              <p className="text-secondary-600 text-sm mb-4">FinOps practitioner, especialista en optimización de costos AWS/Azure.</p>
              <div className="text-primary-600 text-sm font-semibold">8 artículos publicados</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}