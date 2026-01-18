'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';

const comparisonData = [
  {
    category: 'Recursos Básicos',
    features: [
      {
        name: 'Almacenamiento',
        eco: '10 GB SSD',
        standard: '50 GB SSD',
        performance: '100 GB NVMe',
        vps: '50-200 GB NVMe',
        dedicated: '1-2 TB NVMe'
      },
      {
        name: 'RAM',
        eco: '1 GB',
        standard: '4 GB',
        performance: '8 GB',
        vps: '2-8 GB',
        dedicated: '32-128 GB'
      },
      {
        name: 'CPU',
        eco: '1 vCore compartido',
        standard: '2 vCore compartido',
        performance: '4 vCore compartido',
        vps: '2-8 vCore dedicado',
        dedicated: '12-32 cores físicos'
      }
    ]
  },
  {
    category: 'Características',
    features: [
      {
        name: 'SSL Certificado',
        eco: true,
        standard: true,
        performance: true,
        vps: true,
        dedicated: true
      },
      {
        name: 'Backups Automáticos',
        eco: 'Semanal',
        standard: 'Diario',
        performance: 'Diario',
        vps: 'Snapshots',
        dedicated: 'RAID + Réplica'
      },
      {
        name: 'CDN Incluido',
        eco: false,
        standard: true,
        performance: true,
        vps: 'Opcional',
        dedicated: 'Configurable'
      },
      {
        name: 'Root Access',
        eco: false,
        standard: false,
        performance: false,
        vps: true,
        dedicated: true
      }
    ]
  },
  {
    category: 'Soporte',
    features: [
      {
        name: 'Chat en Vivo',
        eco: '24/7',
        standard: '24/7',
        performance: '24/7',
        vps: '24/7 Prioritario',
        dedicated: '24/7 VIP'
      },
      {
        name: 'Soporte Telefónico',
        eco: 'Horario comercial',
        standard: '24/7',
        performance: '24/7',
        vps: '24/7',
        dedicated: '24/7 Dedicado'
      },
      {
        name: 'Tiempo Respuesta',
        eco: '< 24 horas',
        standard: '< 12 horas',
        performance: '< 6 horas',
        vps: '< 4 horas',
        dedicated: '< 2 horas'
      }
    ]
  },
  {
    category: 'Garantías',
    features: [
      {
        name: 'Uptime SLA',
        eco: '99.5%',
        standard: '99.9%',
        performance: '99.9%',
        vps: '99.95%',
        dedicated: '99.99%'
      },
      {
        name: 'Garantía Devolución',
        eco: '30 días',
        standard: '30 días',
        performance: '30 días',
        vps: '7 días',
        dedicated: 'No aplica'
      },
      {
        name: 'Migración Gratuita',
        eco: true,
        standard: true,
        performance: true,
        vps: 'Asistida',
        dedicated: 'Gestión completa'
      }
    ]
  }
];

const plans = [
  { id: 'eco', name: 'Hosting Eco', price: '$299' },
  { id: 'standard', name: 'Hosting Estándar', price: '$599' },
  { id: 'performance', name: 'Hosting Performance', price: '$999' },
  { id: 'vps', name: 'VPS Cloud', price: '$899+' },
  { id: 'dedicated', name: 'Dedicado', price: '$4,999+' }
];

export function PricingComparison() {
  const renderFeatureValue = (value: any) => {
    if (typeof value === 'boolean') {
      return value ? (
        <CheckCircleIcon className="h-5 w-5 text-success-500 mx-auto" />
      ) : (
        <XMarkIcon className="h-5 w-5 text-secondary-300 mx-auto" />
      );
    }
    return <span className="text-sm text-secondary-700">{value}</span>;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
            Comparación Detallada
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Compara todas las características de nuestros planes lado a lado para encontrar la opción perfecta.
          </p>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            {/* Header */}
            <div className="grid grid-cols-6 bg-secondary-50 border-b">
              <div className="p-4 font-semibold text-secondary-900">
                Características
              </div>
              {plans.map((plan) => (
                <div key={plan.id} className="p-4 text-center border-l">
                  <div className="font-semibold text-secondary-900 mb-1">
                    {plan.name}
                  </div>
                  <div className="text-primary-600 font-bold">
                    {plan.price}
                  </div>
                </div>
              ))}
            </div>

            {/* Categories */}
            {comparisonData.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                {/* Category Header */}
                <div className="grid grid-cols-6 bg-primary-50 border-b">
                  <div className="p-3 font-semibold text-primary-900 col-span-6">
                    {category.category}
                  </div>
                </div>

                {/* Features */}
                {category.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="grid grid-cols-6 border-b last:border-b-0 hover:bg-secondary-25 transition-colors"
                  >
                    <div className="p-4 font-medium text-secondary-700">
                      {feature.name}
                    </div>
                    <div className="p-4 text-center border-l">
                      {renderFeatureValue(feature.eco)}
                    </div>
                    <div className="p-4 text-center border-l">
                      {renderFeatureValue(feature.standard)}
                    </div>
                    <div className="p-4 text-center border-l">
                      {renderFeatureValue(feature.performance)}
                    </div>
                    <div className="p-4 text-center border-l">
                      {renderFeatureValue(feature.vps)}
                    </div>
                    <div className="p-4 text-center border-l">
                      {renderFeatureValue(feature.dedicated)}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <div className="bg-primary-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-primary-900 mb-4">
              ¿Necesitas ayuda para decidir?
            </h3>
            <p className="text-primary-700 mb-6">
              Nuestros expertos pueden ayudarte a elegir el plan perfecto para tu proyecto específico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/calculadora"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                Usar Calculadora
              </a>
              <a
                href="/contacto"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-base font-medium rounded-lg text-primary-600 bg-white hover:bg-primary-50 transition-colors"
              >
                Hablar con Experto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}