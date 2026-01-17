import { Card, CardContent } from '@/components/ui/Card';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    id: 1,
    name: 'María González',
    role: 'CEO, TecnoSolutions',
    company: 'Empresa de Software',
    rating: 5,
    content: 'Llevamos 3 años con ARCII Cloud y ha sido excepcional. El uptime es realmente del 99.9% y el soporte técnico siempre responde rápido. Nuestras aplicaciones nunca han funcionado mejor.',
    avatar: '/testimonials/maria-gonzalez.jpg',
  },
  {
    id: 2,
    name: 'Carlos Ramírez',
    role: 'CTO, FinTech MX',
    company: 'Sector Financiero',
    rating: 5,
    content: 'Para nuestro sector necesitamos máxima seguridad y compliance. ARCII Cloud nos ofrece certificaciones internacionales y una infraestructura que cumple todos los estándares.',
    avatar: '/testimonials/carlos-ramirez.jpg',
  },
  {
    id: 3,
    name: 'Ana Martínez',
    role: 'Fundadora, E-commerce Plus',
    company: 'Comercio Electrónico',
    rating: 5,
    content: 'Migramos de otro proveedor y la diferencia es abismal. Velocidad increíble, cero problemas en Black Friday, y el equipo de migración hizo todo sin downtiem.',
    avatar: '/testimonials/ana-martinez.jpg',
  },
  {
    id: 4,
    name: 'Roberto Silva',
    role: 'Director IT, Grupo Empresarial',
    company: 'Holding Corporativo',
    rating: 5,
    content: 'Gestionar múltiples sitios web corporativos era complejo. Con ARCII Cloud centralizamos todo, mejor performance y costos más eficientes. Excelente decisión.',
    avatar: '/testimonials/roberto-silva.jpg',
  },
  {
    id: 5,
    name: 'Laura Hernández',
    role: 'Marketing Director, StartupMX',
    company: 'Startup Tecnológica',
    rating: 5,
    content: 'Como startup necesitábamos escalabilidad sin comprometer el presupuesto. Los planes de ARCII Cloud crecieron con nosotros. Su VPS es increíble por el precio.',
    avatar: '/testimonials/laura-hernandez.jpg',
  },
  {
    id: 6,
    name: 'Diego Torres',
    role: 'Desarrollador Full Stack',
    company: 'Agencia Digital',
    rating: 5,
    content: 'El panel de control es intuitivo, los deployments son rápidos y las herramientas para desarrolladores están muy bien integradas. Recomiendo ARCII Cloud 100%.',
    avatar: '/testimonials/diego-torres.jpg',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            La confianza de <span className="gradient-text">miles de empresas</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Desde startups hasta corporaciones, empresas de todos los tamaños confían en ARCII Cloud
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent>
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-secondary-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-primary-800 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-secondary-600">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-primary-600 font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-secondary-900 mb-2">
              Reconocimientos y Certificaciones
            </h3>
            <p className="text-secondary-600">
              Certificados por las principales organizaciones de la industria
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="bg-secondary-100 rounded-xl p-6 mb-3">
                <span className="text-2xl font-bold text-secondary-700">ISO</span>
                <div className="text-sm text-secondary-600">27001</div>
              </div>
              <div className="text-xs text-secondary-600">Seguridad de la Información</div>
            </div>
            
            <div className="text-center">
              <div className="bg-secondary-100 rounded-xl p-6 mb-3">
                <span className="text-2xl font-bold text-secondary-700">SOC</span>
                <div className="text-sm text-secondary-600">2 Type II</div>
              </div>
              <div className="text-xs text-secondary-600">Controles de Seguridad</div>
            </div>
            
            <div className="text-center">
              <div className="bg-secondary-100 rounded-xl p-6 mb-3">
                <span className="text-2xl font-bold text-secondary-700">TIER</span>
                <div className="text-sm text-secondary-600">III+</div>
              </div>
              <div className="text-xs text-secondary-600">Datacenter</div>
            </div>
            
            <div className="text-center">
              <div className="bg-secondary-100 rounded-xl p-6 mb-3">
                <span className="text-2xl font-bold text-secondary-700">99.9%</span>
                <div className="text-sm text-secondary-600">SLA</div>
              </div>
              <div className="text-xs text-secondary-600">Uptime Garantizado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}