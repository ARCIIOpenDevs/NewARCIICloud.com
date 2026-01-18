import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comparar Planes de Hosting | Encuentra el Plan Perfecto para Ti',
  description: '⚖️ Compara todos los planes de hosting ✅ Características detalladas ✅ Precios transparentes ✅ Recomendaciones personalizadas ✅ Elige el plan ideal',
  keywords: [
    'comparar planes hosting mexico',
    'planes hosting comparacion',
    'que plan hosting elegir',
    'hosting barato vs premium',
    'mejor plan hosting mexico'
  ],
};

const hostingPlans = [
  {
    name: 'Básico',
    price: 99,
    originalPrice: 149,
    popular: false,
    color: 'blue',
    description: 'Ideal para sitios personales y pequeños proyectos',
    features: {
      websites: '1 sitio web',
      storage: '5GB SSD NVMe',
      bandwidth: 'Transferencia ilimitada',
      emails: '5 cuentas email',
      databases: '1 base de datos MySQL',
      subdomains: '5 subdominios',
      ssl: 'SSL gratuito',
      backup: 'Backup semanal',
      support: 'Soporte 24/7',
      uptime: '99.9% uptime',
      cdn: 'CDN básico',
      security: 'Firewall básico',
      ecommerce: false,
      staging: false,
      git: false,
      nodejs: false,
      python: false,
      composer: false,
      cron: '1 cron job'
    },
    limits: {
      visits: '10,000/mes',
      cpu: '1 vCPU',
      ram: '512MB',
      inodes: '50,000'
    },
    idealFor: ['Blog personal', 'Sitio corporativo básico', 'Portfolio'],
    notFor: ['E-commerce', 'Apps complejas', 'Alto tráfico']
  },
  {
    name: 'Profesional',
    price: 199,
    originalPrice: 299,
    popular: true,
    color: 'green',
    description: 'Perfecto para negocios en crecimiento y tiendas online',
    features: {
      websites: '5 sitios web',
      storage: '20GB SSD NVMe',
      bandwidth: 'Transferencia ilimitada',
      emails: '25 cuentas email',
      databases: '5 bases de datos MySQL',
      subdomains: 'Subdominios ilimitados',
      ssl: 'SSL Wildcard gratuito',
      backup: 'Backup diario',
      support: 'Soporte prioritario 24/7',
      uptime: '99.95% uptime',
      cdn: 'CDN global premium',
      security: 'Firewall + anti-malware',
      ecommerce: true,
      staging: true,
      git: true,
      nodejs: true,
      python: false,
      composer: true,
      cron: '10 cron jobs'
    },
    limits: {
      visits: '100,000/mes',
      cpu: '2 vCPU',
      ram: '2GB',
      inodes: '200,000'
    },
    idealFor: ['WooCommerce', 'Sitios corporativos', 'Agencias web', 'SaaS básicos'],
    notFor: ['Apps Python/Django', 'Tráfico masivo', 'Recursos intensivos']
  },
  {
    name: 'Business',
    price: 399,
    originalPrice: 599,
    popular: false,
    color: 'purple',
    description: 'Para empresas que necesitan máximo rendimiento',
    features: {
      websites: '25 sitios web',
      storage: '50GB SSD NVMe',
      bandwidth: 'Transferencia ilimitada',
      emails: '100 cuentas email',
      databases: '25 bases de datos MySQL',
      subdomains: 'Subdominios ilimitados',
      ssl: 'SSL dedicado + Wildcard',
      backup: 'Backup automático 2x/día',
      support: 'Soporte VIP + teléfono',
      uptime: '99.99% uptime SLA',
      cdn: 'CDN enterprise + optimización',
      security: 'WAF + DDoS protection',
      ecommerce: true,
      staging: true,
      git: true,
      nodejs: true,
      python: true,
      composer: true,
      cron: 'Cron jobs ilimitados'
    },
    limits: {
      visits: '500,000/mes',
      cpu: '4 vCPU',
      ram: '8GB',
      inodes: '500,000'
    },
    idealFor: ['E-commerce grande', 'Apps Django/Flask', 'SaaS escalables', 'Agencias'],
    notFor: ['Proyectos simples', 'Presupuesto limitado']
  },
  {
    name: 'Enterprise',
    price: 799,
    originalPrice: 1199,
    popular: false,
    color: 'red',
    description: 'Máxima potencia para aplicaciones críticas',
    features: {
      websites: 'Sitios ilimitados',
      storage: '100GB SSD NVMe',
      bandwidth: 'Transferencia ilimitada',
      emails: 'Cuentas email ilimitadas',
      databases: 'Bases de datos ilimitadas',
      subdomains: 'Subdominios ilimitados',
      ssl: 'SSL dedicado premium',
      backup: 'Backup tiempo real',
      support: 'Account manager dedicado',
      uptime: '99.99% uptime garantizado',
      cdn: 'CDN privado + edge computing',
      security: 'Security suite completo',
      ecommerce: true,
      staging: true,
      git: true,
      nodejs: true,
      python: true,
      composer: true,
      cron: 'Cron jobs ilimitados'
    },
    limits: {
      visits: 'Tráfico ilimitado',
      cpu: '8 vCPU',
      ram: '16GB',
      inodes: 'Ilimitado'
    },
    idealFor: ['Aplicaciones críticas', 'SaaS enterprise', 'Alto tráfico', 'Multinacionales'],
    notFor: ['Startups', 'Proyectos pequeños']
  }
];

const featureCategories = [
  {
    name: 'Recursos Básicos',
    features: ['websites', 'storage', 'bandwidth', 'emails', 'databases']
  },
  {
    name: 'Características Web',
    features: ['subdomains', 'ssl', 'backup', 'uptime', 'cdn']
  },
  {
    name: 'Soporte & Seguridad',
    features: ['support', 'security']
  },
  {
    name: 'Desarrollo',
    features: ['staging', 'git', 'nodejs', 'python', 'composer', 'cron']
  },
  {
    name: 'Límites de Rendimiento',
    features: ['visits', 'cpu', 'ram', 'inodes']
  }
];

export default function ComparePlanesPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Compara Planes
          </h1>
          <p className="text-xl text-primary-100 mb-8">
            Encuentra el plan perfecto para tu proyecto. Comparación detallada y transparente.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <div className="text-2xl font-bold text-white">4</div>
                <div className="text-primary-200 text-sm">Planes Disponibles</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">30+</div>
                <div className="text-primary-200 text-sm">Características</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-primary-200 text-sm">Transparente</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">30 días</div>
                <div className="text-primary-200 text-sm">Garantía</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Selector */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Resumen de Planes</h2>
            <p className="text-secondary-600">Precios mostrados son mensuales con facturación anual</p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-6 mb-12">
            {hostingPlans.map((plan) => (
              <div 
                key={plan.name} 
                className={`relative border-2 rounded-2xl p-6 ${
                  plan.popular 
                    ? 'border-primary-500 shadow-xl' 
                    : 'border-secondary-200 hover:shadow-lg'
                } transition-shadow bg-white`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm">
                    Más Popular
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary-600">${plan.price}</span>
                    <span className="text-secondary-500">/mes</span>
                    {plan.originalPrice > plan.price && (
                      <div className="text-sm">
                        <span className="line-through text-secondary-400">${plan.originalPrice}</span>
                        <span className="text-green-600 ml-1">
                          {Math.round((1 - plan.price / plan.originalPrice) * 100)}% OFF
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="text-secondary-600 text-sm mb-6">{plan.description}</p>
                  <button 
                    className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-secondary-100 text-secondary-800 hover:bg-secondary-200'
                    }`}
                  >
                    Elegir Plan
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-secondary-600 mb-4">¿No estás seguro cuál elegir?</p>
            <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
              🤖 Obtener Recomendación Personalizada
            </button>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Comparación Detallada</h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary-100">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-secondary-800 w-1/4">
                      Características
                    </th>
                    {hostingPlans.map((plan) => (
                      <th 
                        key={plan.name} 
                        className={`px-6 py-4 text-center font-semibold ${
                          plan.popular ? 'bg-primary-100 text-primary-800' : 'text-secondary-800'
                        }`}
                      >
                        {plan.name}
                        {plan.popular && (
                          <div className="text-xs bg-primary-600 text-white px-2 py-1 rounded-full mt-1 inline-block">
                            Popular
                          </div>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {featureCategories.map((category, categoryIndex) => (
                    <>
                      <tr key={category.name} className="bg-secondary-50">
                        <td colSpan={5} className="px-6 py-3 font-semibold text-secondary-700">
                          {category.name}
                        </td>
                      </tr>
                      {category.features.map((featureKey, featureIndex) => {
                        const isLimitFeature = category.name === 'Límites de Rendimiento';
                        
                        return (
                          <tr key={featureKey} className={featureIndex % 2 === 0 ? 'bg-white' : 'bg-secondary-25'}>
                            <td className="px-6 py-4 font-medium text-secondary-700">
                              {getFeatureLabel(featureKey)}
                            </td>
                            {hostingPlans.map((plan) => (
                              <td key={plan.name} className="px-6 py-4 text-center text-sm">
                                {renderFeatureValue(
                                  isLimitFeature ? plan.limits[featureKey as keyof typeof plan.limits] : plan.features[featureKey as keyof typeof plan.features], 
                                  featureKey
                                )}
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Recommendations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">¿Cuál Plan Es Para Ti?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {hostingPlans.map((plan) => (
              <div key={plan.name} className="border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <div className={`w-4 h-4 bg-${plan.color}-500 rounded-full mr-3`}></div>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div className="ml-auto text-2xl font-bold text-primary-600">
                    ${plan.price}/mes
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-3">✅ Ideal para:</h4>
                    <ul className="space-y-2">
                      {plan.idealFor.map((use) => (
                        <li key={use} className="text-sm text-green-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                          {use}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-red-700 mb-3">❌ No recomendado para:</h4>
                    <ul className="space-y-2">
                      {plan.notFor.map((notUse) => (
                        <li key={notUse} className="text-sm text-red-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                          {notUse}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <div className="text-sm text-secondary-600 mb-4">
                    <strong>Visitantes esperados:</strong> {plan.limits.visits}
                  </div>
                  <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                    Comenzar con {plan.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Decision Guide */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Guía de Decisión Rápida</h2>
          <p className="text-xl text-secondary-600 mb-12">
            Responde estas preguntas para encontrar tu plan ideal
          </p>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-4">¿Cuántos visitantes esperas al mes?</h3>
              <div className="grid md:grid-cols-4 gap-4 text-sm">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="font-semibold text-blue-800">&lt; 10k</div>
                  <div className="text-blue-600">Plan Básico</div>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="font-semibold text-green-800">10k - 100k</div>
                  <div className="text-green-600">Plan Profesional</div>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <div className="font-semibold text-purple-800">100k - 500k</div>
                  <div className="text-purple-600">Plan Business</div>
                </div>
                <div className="p-3 bg-red-50 rounded-lg">
                  <div className="font-semibold text-red-800">+500k</div>
                  <div className="text-red-600">Plan Enterprise</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-4">¿Qué tipo de sitio tienes?</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-left">
                  <div className="font-semibold mb-2">Blog / Portfolio / Corporativo:</div>
                  <div className="text-secondary-600">Plan Básico o Profesional</div>
                </div>
                <div className="text-left">
                  <div className="font-semibold mb-2">E-commerce / SaaS / App:</div>
                  <div className="text-secondary-600">Plan Profesional o superior</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            
            <div className="bg-secondary-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3">¿Puedo cambiar de plan después?</h3>
              <p className="text-secondary-600">
                Sí, puedes hacer upgrade o downgrade en cualquier momento. Los cambios son instantáneos y se prorratea el costo.
              </p>
            </div>

            <div className="bg-secondary-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3">¿Qué incluye la garantía de 30 días?</h3>
              <p className="text-secondary-600">
                Si no estás satisfecho por cualquier razón en los primeros 30 días, te devolvemos el 100% de tu dinero sin preguntas.
              </p>
            </div>

            <div className="bg-secondary-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3">¿Los precios son por año o por mes?</h3>
              <p className="text-secondary-600">
                Los precios mostrados son mensuales pero con facturación anual. También ofrecemos planes mensuales con un ligero recargo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Listo para elegir tu plan?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Todos los planes incluyen migración gratuita y soporte 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
              Ver Todos los Planes
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Hablar con Especialista
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function getFeatureLabel(key: string): string {
  const labels: Record<string, string> = {
    websites: 'Sitios web',
    storage: 'Almacenamiento',
    bandwidth: 'Ancho de banda',
    emails: 'Cuentas email',
    databases: 'Bases de datos',
    subdomains: 'Subdominios',
    ssl: 'Certificado SSL',
    backup: 'Backups',
    support: 'Soporte técnico',
    uptime: 'Tiempo actividad',
    cdn: 'Red CDN',
    security: 'Seguridad',
    staging: 'Ambiente pruebas',
    git: 'Integración Git',
    nodejs: 'Node.js',
    python: 'Python',
    composer: 'Composer/PHP',
    cron: 'Tareas programadas',
    visits: 'Visitantes/mes',
    cpu: 'Procesador',
    ram: 'Memoria RAM',
    inodes: 'Archivos máximos'
  };
  return labels[key] || key;
}

function renderFeatureValue(value: any, key: string): React.ReactElement {
  if (typeof value === 'boolean') {
    return value ? (
      <span className="text-green-600 font-semibold">✅</span>
    ) : (
      <span className="text-red-500">❌</span>
    );
  }
  
  if (typeof value === 'string') {
    return <span className="text-secondary-700">{value}</span>;
  }
  
  return <span className="text-secondary-700">{value}</span>;
}