'use client';

import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'María González',
    role: 'CEO',
    company: 'TechStartup México',
    avatar: '/testimonials/maria-gonzalez.jpg',
    rating: 5,
    category: 'hosting',
    plan: 'Hosting Empresarial',
    testimonial: 'ARCIICloud ha sido fundamental para el crecimiento de nuestra startup. Su velocidad y soporte técnico son excepcionales. Migramos desde otro proveedor y la diferencia es notable.',
    date: '2026-01-10',
    verified: true,
    featured: true,
    metrics: {
      uptime: '99.98%',
      speed: '0.8s',
      support: '2min'
    }
  },
  {
    id: 2,
    name: 'Carlos Mendoza',
    role: 'Desarrollador Web',
    company: 'Freelance',
    avatar: '/testimonials/carlos-mendoza.jpg',
    rating: 5,
    category: 'vps',
    plan: 'VPS Pro',
    testimonial: 'Como desarrollador manejo múltiples proyectos y ARCIICloud me da la flexibilidad que necesito. El panel de control es intuitivo y la velocidad de los servidores es impresionante.',
    date: '2026-01-08',
    verified: true,
    featured: true,
    metrics: {
      uptime: '99.99%',
      speed: '0.5s',
      support: '1min'
    }
  },
  {
    id: 3,
    name: 'Ana Ruiz',
    role: 'Marketing Manager',
    company: 'E-commerce Plus',
    avatar: '/testimonials/ana-ruiz.jpg',
    rating: 5,
    category: 'ecommerce',
    plan: 'E-commerce Pro',
    testimonial: 'Nuestro e-commerce procesa miles de transacciones diarias y ARCIICloud nunca nos ha fallado. El soporte 24/7 es realmente excepcional, siempre están disponibles.',
    date: '2026-01-05',
    verified: true,
    featured: false,
    metrics: {
      uptime: '99.97%',
      speed: '0.9s',
      support: '3min'
    }
  },
  {
    id: 4,
    name: 'Roberto Silva',
    role: 'Director IT',
    company: 'Corporativo ABC',
    avatar: '/testimonials/roberto-silva.jpg',
    rating: 5,
    category: 'dedicados',
    plan: 'Servidor Dedicado',
    testimonial: 'Para aplicaciones críticas necesitábamos máxima confiabilidad. ARCIICloud nos ofrece servidores dedicados con uptime del 99.99% y un equipo de soporte que entiende nuestras necesidades.',
    date: '2026-01-03',
    verified: true,
    featured: true,
    metrics: {
      uptime: '99.99%',
      speed: '0.4s',
      support: '30seg'
    }
  },
  {
    id: 5,
    name: 'Laura Jiménez',
    role: 'Blogger',
    company: 'VidaDigital.mx',
    avatar: '/testimonials/laura-jimenez.jpg',
    rating: 4,
    category: 'hosting',
    plan: 'Hosting Básico',
    testimonial: 'Como blogger necesitaba algo confiable pero económico. ARCIICloud me ha sorprendido gratamente. Mi blog carga súper rápido y el precio es muy competitivo.',
    date: '2025-12-28',
    verified: true,
    featured: false,
    metrics: {
      uptime: '99.95%',
      speed: '1.1s',
      support: '5min'
    }
  },
  {
    id: 6,
    name: 'Diego Herrera',
    role: 'CTO',
    company: 'FinTech Solutions',
    avatar: '/testimonials/diego-herrera.jpg',
    rating: 5,
    category: 'cloud',
    plan: 'Cloud Enterprise',
    testimonial: 'En el sector financiero la seguridad es primordial. ARCIICloud nos proporciona la infraestructura cloud que necesitamos con todos los certificados de seguridad requeridos.',
    date: '2025-12-25',
    verified: true,
    featured: true,
    metrics: {
      uptime: '100%',
      speed: '0.3s',
      support: 'Inmediato'
    }
  },
  {
    id: 7,
    name: 'Patricia López',
    role: 'Propietaria',
    company: 'Boutique Online',
    avatar: '/testimonials/patricia-lopez.jpg',
    rating: 5,
    category: 'ecommerce',
    plan: 'WooCommerce Pro',
    testimonial: 'Mi boutique online ha crecido 300% desde que migré a ARCIICloud. La optimización para WooCommerce es perfecta y las ventas no se detienen nunca.',
    date: '2025-12-20',
    verified: true,
    featured: false,
    metrics: {
      uptime: '99.96%',
      speed: '0.7s',
      support: '2min'
    }
  },
  {
    id: 8,
    name: 'Javier Morales',
    role: 'Desarrollador',
    company: 'Apps Móviles MX',
    avatar: '/testimonials/javier-morales.jpg',
    rating: 5,
    category: 'api',
    plan: 'Cloud API',
    testimonial: 'Desarrollo apps móviles que requieren APIs rápidas y confiables. La infraestructura de ARCIICloud me permite escalar sin problemas y el latency es mínimo.',
    date: '2025-12-15',
    verified: true,
    featured: false,
    metrics: {
      uptime: '99.99%',
      speed: '0.2s',
      support: '1min'
    }
  },
  {
    id: 9,
    name: 'Carmen Torres',
    role: 'Directora',
    company: 'ONG Educativa',
    avatar: '/testimonials/carmen-torres.jpg',
    rating: 4,
    category: 'hosting',
    plan: 'Hosting Organizaciones',
    testimonial: 'Como ONG necesitábamos una solución económica pero profesional. ARCIICloud nos ofreció un descuento especial y un servicio de primera calidad.',
    date: '2025-12-10',
    verified: true,
    featured: false,
    metrics: {
      uptime: '99.94%',
      speed: '1.0s',
      support: '4min'
    }
  },
  {
    id: 10,
    name: 'Ricardo Vega',
    role: 'Consultor',
    company: 'Transformación Digital',
    avatar: '/testimonials/ricardo-vega.jpg',
    rating: 5,
    category: 'vps',
    plan: 'VPS Escalable',
    testimonial: 'Manejo proyectos de transformación digital para varias empresas. ARCIICloud me da la flexibilidad de escalar recursos según las necesidades de cada proyecto.',
    date: '2025-12-05',
    verified: true,
    featured: false,
    metrics: {
      uptime: '99.97%',
      speed: '0.6s',
      support: '2min'
    }
  },
  {
    id: 11,
    name: 'Elena Castro',
    role: 'Fundadora',
    company: 'EdTech Innovación',
    avatar: '/testimonials/elena-castro.jpg',
    rating: 5,
    category: 'educacion',
    plan: 'Hosting Educativo',
    testimonial: 'Nuestra plataforma educativa maneja miles de estudiantes simultáneamente. ARCIICloud nos proporciona la estabilidad y velocidad que necesitamos para ofrecer la mejor experiencia de aprendizaje.',
    date: '2025-11-28',
    verified: true,
    featured: true,
    metrics: {
      uptime: '99.98%',
      speed: '0.8s',
      support: '1min'
    }
  },
  {
    id: 12,
    name: 'Andrés Ramírez',
    role: 'Arquitecto de Software',
    company: 'Enterprise Tech',
    avatar: '/testimonials/andres-ramirez.jpg',
    rating: 5,
    category: 'dedicados',
    plan: 'Infraestructura Híbrida',
    testimonial: 'Diseñamos soluciones enterprise complejas que requieren máximo rendimiento. La infraestructura de ARCIICloud nos permite implementar arquitecturas híbridas sin limitaciones.',
    date: '2025-11-20',
    verified: true,
    featured: false,
    metrics: {
      uptime: '100%',
      speed: '0.3s',
      support: 'Inmediato'
    }
  }
];

const categories = [
  { id: 'all', name: 'Todos', icon: '🌟', count: testimonials.length },
  { id: 'hosting', name: 'Hosting Web', icon: '🌐', count: testimonials.filter(t => t.category === 'hosting').length },
  { id: 'vps', name: 'VPS', icon: '⚡', count: testimonials.filter(t => t.category === 'vps').length },
  { id: 'dedicados', name: 'Servidores Dedicados', icon: '🖥️', count: testimonials.filter(t => t.category === 'dedicados').length },
  { id: 'ecommerce', name: 'E-commerce', icon: '🛒', count: testimonials.filter(t => t.category === 'ecommerce').length },
  { id: 'cloud', name: 'Cloud', icon: '☁️', count: testimonials.filter(t => t.category === 'cloud').length },
  { id: 'api', name: 'APIs', icon: '🔗', count: testimonials.filter(t => t.category === 'api').length },
  { id: 'educacion', name: 'Educación', icon: '🎓', count: testimonials.filter(t => t.category === 'educacion').length }
];

const stats = {
  totalReviews: testimonials.length,
  averageRating: (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1),
  verifiedReviews: testimonials.filter(t => t.verified).length,
  fiveStarReviews: testimonials.filter(t => t.rating === 5).length
};

export default function TestimoniosPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [showOnlyFeatured, setShowOnlyFeatured] = useState(false);

  const filteredTestimonials = testimonials
    .filter(testimonial => {
      if (activeCategory !== 'all' && testimonial.category !== activeCategory) return false;
      if (showOnlyFeatured && !testimonial.featured) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'date') return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-secondary-300'}>
        ⭐
      </span>
    ));
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <main className="min-h-screen pt-20">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            
            <div className="inline-flex items-center bg-primary-700/50 px-6 py-3 rounded-full mb-8">
              <span className="text-2xl mr-3">⭐</span>
              <span className="font-semibold">Testimonios Verificados</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Lo Que Dicen
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Nuestros Clientes</span>
            </h1>
            
            <p className="text-xl text-primary-100 mb-12 max-w-3xl mx-auto">
              Más de <strong>10,000 clientes</strong> confían en ARCIICloud para sus proyectos digitales. 
              Descubre por qué somos la primera opción para hosting en Latinoamérica.
            </p>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">{stats.totalReviews}+</div>
                <p className="text-primary-100">Testimonios</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">{stats.averageRating}/5</div>
                <p className="text-primary-100">Calificación</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">{stats.verifiedReviews}</div>
                <p className="text-primary-100">Verificados</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">98%</div>
                <p className="text-primary-100">Satisfacción</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-full font-semibold text-sm transition-colors ${
                    activeCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                  <span className="ml-2 text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>

            {/* Sort and Filter Controls */}
            <div className="flex items-center gap-4">
              
              <div className="flex items-center">
                <label className="text-sm font-semibold text-secondary-700 mr-2">Ordenar:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-secondary-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="date">Más Recientes</option>
                  <option value="rating">Mayor Calificación</option>
                  <option value="name">Nombre</option>
                </select>
              </div>

              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={showOnlyFeatured}
                  onChange={(e) => setShowOnlyFeatured(e.target.checked)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 border-2 rounded mr-2 flex items-center justify-center transition-colors ${
                  showOnlyFeatured ? 'bg-primary-600 border-primary-600' : 'border-secondary-300'
                }`}>
                  {showOnlyFeatured && <span className="text-white text-xs">✓</span>}
                </div>
                <span className="text-sm font-semibold text-secondary-700">Solo Destacados</span>
              </label>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-secondary-600">
              Mostrando <strong>{filteredTestimonials.length}</strong> de <strong>{stats.totalReviews}</strong> testimonios
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className={`bg-white p-8 rounded-2xl shadow-sm border-2 transition-all hover:shadow-lg ${
                  testimonial.featured ? 'border-primary-200 bg-gradient-to-br from-primary-25 to-white' : 'border-secondary-100'
                }`}
              >
                
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary-900">{testimonial.name}</h3>
                      <p className="text-secondary-600 text-sm">{testimonial.role}</p>
                      <p className="text-secondary-500 text-xs">{testimonial.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {testimonial.verified && (
                      <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                        ✓ Verificado
                      </div>
                    )}
                    {testimonial.featured && (
                      <div className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-semibold">
                        ⭐ Destacado
                      </div>
                    )}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex mr-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  <span className="text-secondary-600 text-sm">
                    {testimonial.rating}/5 • {testimonial.plan}
                  </span>
                </div>

                {/* Testimonial */}
                <blockquote className="text-secondary-700 mb-6 italic leading-relaxed">
                  "{testimonial.testimonial}"
                </blockquote>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-secondary-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-sm font-bold text-green-600">{testimonial.metrics.uptime}</div>
                    <div className="text-xs text-secondary-500">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-blue-600">{testimonial.metrics.speed}</div>
                    <div className="text-xs text-secondary-500">Carga</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-purple-600">{testimonial.metrics.support}</div>
                    <div className="text-xs text-secondary-500">Soporte</div>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center text-xs text-secondary-500 pt-4 border-t border-secondary-100">
                  <span>{formatDate(testimonial.date)}</span>
                  <span className="capitalize">{categories.find(c => c.id === testimonial.category)?.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Load More (if needed) */}
          {filteredTestimonials.length < testimonials.length && (
            <div className="text-center mt-12">
              <button className="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-colors">
                Ver Más Testimonios
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="text-6xl mb-6">🚀</div>
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para Ser Nuestro Próximo Cliente Satisfecho?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Únete a más de <strong>10,000 clientes</strong> que ya confían en ARCIICloud 
            para sus proyectos digitales. Comienza tu prueba gratuita hoy mismo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-colors">
              🎯 Comenzar Prueba Gratis
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
              📞 Hablar con Experto
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}