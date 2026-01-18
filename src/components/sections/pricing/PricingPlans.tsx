'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { formatCurrency } from '@/lib/utils';

const hostingPlans = [
  {
    name: 'Hosting Eco',
    price: { monthly: 299, yearly: 2390 },
    description: 'Perfecto para sitios web personales y pequeños proyectos',
    features: [
      '1 sitio web',
      '10 GB almacenamiento SSD',
      '100 GB transferencia',
      '1 GB RAM',
      '5 cuentas de email',
      'SSL gratuito',
      'cPanel incluido',
      'Soporte 24/7',
      'Backup semanal'
    ],
    popular: false,
    color: 'border-secondary-200'
  },
  {
    name: 'Hosting Estándar',
    price: { monthly: 599, yearly: 4792 },
    description: 'Ideal para sitios profesionales y pequeñas empresas',
    features: [
      '5 sitios web',
      '50 GB almacenamiento SSD',
      '500 GB transferencia',
      '4 GB RAM',
      '25 cuentas de email',
      'SSL gratuito',
      'cPanel incluido',
      'Soporte prioritario',
      'Backup diario',
      'CDN incluido'
    ],
    popular: true,
    color: 'border-primary-500'
  },
  {
    name: 'Hosting Performance',
    price: { monthly: 999, yearly: 7992 },
    description: 'Para sitios de alto tráfico y aplicaciones exigentes',
    features: [
      'Sitios ilimitados',
      '100 GB almacenamiento SSD NVMe',
      'Transferencia ilimitada',
      '8 GB RAM',
      'Email ilimitado',
      'SSL gratuito + Wildcard',
      'cPanel Pro incluido',
      'Soporte VIP',
      'Backup diario',
      'CDN Premium',
      'Staging incluido'
    ],
    popular: false,
    color: 'border-secondary-200'
  }
];

const vpsPlans = [
  {
    name: 'VPS Básico',
    price: { monthly: 899, yearly: 7192 },
    description: 'Servidor virtual con recursos dedicados',
    features: [
      '2 GB RAM DDR4',
      '50 GB SSD NVMe',
      '2 vCPU cores',
      '1 TB transferencia',
      'Root access completo',
      '1 IP dedicada',
      'Ubuntu/CentOS/Debian',
      'Soporte 24/7',
      'Snapshots incluidos'
    ],
    popular: false,
    color: 'border-secondary-200'
  },
  {
    name: 'VPS Profesional',
    price: { monthly: 1499, yearly: 11992 },
    description: 'Para aplicaciones y sitios de alto rendimiento',
    features: [
      '4 GB RAM DDR4',
      '100 GB SSD NVMe',
      '4 vCPU cores',
      '2 TB transferencia',
      'Root access completo',
      '2 IPs dedicadas',
      'Ubuntu/CentOS/Debian/Windows',
      'Soporte prioritario',
      'Snapshots automáticos',
      'Monitoring incluido'
    ],
    popular: true,
    color: 'border-primary-500'
  },
  {
    name: 'VPS Enterprise',
    price: { monthly: 2999, yearly: 23992 },
    description: 'Máximo rendimiento para aplicaciones críticas',
    features: [
      '8 GB RAM DDR4',
      '200 GB SSD NVMe',
      '8 vCPU cores',
      '5 TB transferencia',
      'Root access completo',
      '4 IPs dedicadas',
      'Cualquier OS',
      'Soporte VIP 24/7',
      'Snapshots automáticos',
      'Monitoring avanzado',
      'Backups automaticos'
    ],
    popular: false,
    color: 'border-secondary-200'
  }
];

const dedicatedPlans = [
  {
    name: 'Intel Xeon E5',
    price: { monthly: 4999, yearly: 47990 },
    description: 'Servidor físico dedicado de alto rendimiento',
    features: [
      'Intel Xeon E5-2690',
      '32 GB RAM DDR4 ECC',
      '1 TB SSD NVMe',
      '12 cores / 24 threads',
      'Transferencia ilimitada',
      '5 IPs dedicadas',
      'IPMI out-of-band',
      'Soporte VIP 24/7',
      'Setup gratuito',
      'Hardware warranty'
    ],
    popular: false,
    color: 'border-secondary-200'
  },
  {
    name: 'AMD EPYC 7542',
    price: { monthly: 9999, yearly: 95990 },
    description: 'Máximo rendimiento con tecnología AMD',
    features: [
      'AMD EPYC 7542',
      '128 GB RAM DDR4 ECC',
      '2 TB SSD NVMe RAID',
      '32 cores / 64 threads',
      'Transferencia ilimitada',
      '/29 subnet (8 IPs)',
      'IPMI out-of-band',
      'Soporte dedicado',
      'Setup gratuito',
      'Hardware warranty',
      'Gestión completa'
    ],
    popular: true,
    color: 'border-primary-500'
  }
];

export function PricingPlans() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [selectedCategory, setSelectedCategory] = useState<'hosting' | 'vps' | 'dedicated'>('hosting');

  const categories = [
    { id: 'hosting', name: 'Hosting Web', plans: hostingPlans },
    { id: 'vps', name: 'VPS Cloud', plans: vpsPlans },
    { id: 'dedicated', name: 'Servidores Dedicados', plans: dedicatedPlans }
  ];

  const selectedPlans = categories.find(c => c.id === selectedCategory)?.plans || hostingPlans;

  const getSavings = (plan: any) => {
    const monthlyCost = plan.price.monthly * 12;
    const yearlyCost = plan.price.yearly;
    return Math.round(((monthlyCost - yearlyCost) / monthlyCost) * 100);
  };

  return (
    <section className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
            Todos Nuestros Planes
          </h2>
          <p className="text-lg text-secondary-600 mb-8 max-w-3xl mx-auto">
            Encuentra el plan perfecto para tu proyecto. Todos incluyen SSL gratuito, soporte 24/7 y garantía de uptime.
          </p>

          {/* Category Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as any)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-secondary-600 hover:bg-secondary-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-1 mb-12">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full transition-colors ${
                billingCycle === 'monthly'
                  ? 'bg-primary-600 text-white'
                  : 'text-secondary-600'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full transition-colors ${
                billingCycle === 'yearly'
                  ? 'bg-primary-600 text-white'
                  : 'text-secondary-600'
              }`}
            >
              Anual
              <span className="ml-2 text-xs bg-success-100 text-success-700 px-2 py-1 rounded-full">
                Ahorra hasta 20%
              </span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {selectedPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.color} ${
                plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Más Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <h3 className="text-xl font-bold text-secondary-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-secondary-600 text-sm mb-4">
                  {plan.description}
                </p>
                
                <div className="mb-4">
                  <div className="text-4xl font-bold text-primary-600 mb-1">
                    {formatCurrency(billingCycle === 'yearly' ? plan.price.yearly / 12 : plan.price.monthly)}
                  </div>
                  <div className="text-secondary-500 text-sm">por mes</div>
                  {billingCycle === 'yearly' && (
                    <div className="text-success-600 text-sm font-medium mt-1">
                      Ahorras {getSavings(plan)}% anual
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <CheckCircleIcon className="h-5 w-5 text-success-500 flex-shrink-0" />
                      <span className="text-secondary-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "gradient" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  Seleccionar Plan
                </Button>
                
                <div className="text-center text-xs text-secondary-500 mt-2">
                  30 días garantía devolución
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-secondary-600 mb-4">
            ¿Necesitas algo personalizado?
          </p>
          <Button variant="outline" size="lg">
            Hablar con un Experto
          </Button>
        </div>
      </div>
    </section>
  );
}