'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  CheckCircleIcon,
  XMarkIcon,
  StarIcon,
  GlobeAltIcon,
  CloudIcon,
  ServerIcon,
  CpuChipIcon,
} from '@heroicons/react/24/solid';
import { cn, formatCurrency } from '@/lib/utils';

interface Plan {
  id: string;
  category: 'hosting' | 'vps' | 'dedicado';
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  popular?: boolean;
  recommended?: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  specifications: {
    [key: string]: string | boolean | number;
  };
}

const allPlans: Plan[] = [
  // Hosting Plans
  {
    id: 'hosting-eco',
    category: 'hosting',
    name: 'Hosting Eco',
    price: { monthly: 299, yearly: 2390 },
    icon: GlobeAltIcon,
    gradient: 'from-green-400 to-emerald-500',
    specifications: {
      'Sitios Web': '1 sitio',
      'Almacenamiento': '10 GB SSD NVMe',
      'Ancho de Banda': '100 GB/mes',
      'CPU': '1 vCore',
      'RAM': '1 GB',
      'Bases de Datos': '1 MySQL',
      'Cuentas Email': '10 cuentas',
      'SSL Certificado': 'Let\'s Encrypt',
      'CDN Global': false,
      'Backups': 'Semanales',
      'Staging': false,
      'SSH Access': false,
      'Soporte': '24/7 Chat + Tickets',
      'Uptime SLA': '99.5%',
    },
  },
  {
    id: 'hosting-estandar',
    category: 'hosting',
    name: 'Hosting Estándar',
    price: { monthly: 599, yearly: 4792 },
    popular: true,
    icon: GlobeAltIcon,
    gradient: 'from-blue-400 to-cyan-500',
    specifications: {
      'Sitios Web': '5 sitios',
      'Almacenamiento': '50 GB SSD NVMe',
      'Ancho de Banda': '500 GB/mes',
      'CPU': '2 vCores',
      'RAM': '4 GB',
      'Bases de Datos': '5 MySQL',
      'Cuentas Email': '50 cuentas',
      'SSL Certificado': 'Let\'s Encrypt',
      'CDN Global': 'CloudFlare',
      'Backups': 'Diarios',
      'Staging': true,
      'SSH Access': false,
      'Soporte': '24/7 Chat + Phone',
      'Uptime SLA': '99.9%',
    },
  },
  {
    id: 'hosting-performance',
    category: 'hosting',
    name: 'Hosting Performance',
    price: { monthly: 999, yearly: 7992 },
    icon: GlobeAltIcon,
    gradient: 'from-purple-400 to-pink-500',
    specifications: {
      'Sitios Web': 'Ilimitados',
      'Almacenamiento': '100 GB SSD NVMe',
      'Ancho de Banda': 'Ilimitado',
      'CPU': '4 vCores',
      'RAM': '8 GB',
      'Bases de Datos': 'Ilimitadas',
      'Cuentas Email': 'Ilimitadas',
      'SSL Certificado': 'Let\'s Encrypt + Wildcard',
      'CDN Global': 'CloudFlare Pro',
      'Backups': 'Diarios + On-demand',
      'Staging': true,
      'SSH Access': true,
      'Soporte': 'Prioritario + Teléfono',
      'Uptime SLA': '99.95%',
    },
  },
  // VPS Plans
  {
    id: 'vps-basic',
    category: 'vps',
    name: 'VPS Básico',
    price: { monthly: 899, yearly: 7192 },
    icon: CloudIcon,
    gradient: 'from-indigo-400 to-purple-500',
    specifications: {
      'Sitios Web': 'Ilimitados',
      'Almacenamiento': '50 GB SSD NVMe',
      'Ancho de Banda': '1 TB/mes',
      'CPU': '2 vCores dedicados',
      'RAM': '4 GB dedicados',
      'Bases de Datos': 'Ilimitadas',
      'Cuentas Email': 'Ilimitadas',
      'SSL Certificado': 'Let\'s Encrypt',
      'CDN Global': 'Configurable',
      'Backups': 'Snapshots manuales',
      'Staging': 'Configuración manual',
      'SSH Access': 'Root completo',
      'Soporte': '24/7 Técnico',
      'Uptime SLA': '99.9%',
    },
  },
  {
    id: 'vps-pro',
    category: 'vps',
    name: 'VPS Profesional',
    price: { monthly: 1499, yearly: 11992 },
    recommended: 'Para desarrollo',
    icon: CloudIcon,
    gradient: 'from-cyan-400 to-blue-500',
    specifications: {
      'Sitios Web': 'Ilimitados',
      'Almacenamiento': '100 GB SSD NVMe',
      'Ancho de Banda': '2 TB/mes',
      'CPU': '4 vCores dedicados',
      'RAM': '8 GB dedicados',
      'Bases de Datos': 'Ilimitadas',
      'Cuentas Email': 'Ilimitadas',
      'SSL Certificado': 'Let\'s Encrypt',
      'CDN Global': 'Configurable',
      'Backups': 'Snapshots automáticos',
      'Staging': 'Configuración avanzada',
      'SSH Access': 'Root + Docker',
      'Soporte': '24/7 Prioritario',
      'Uptime SLA': '99.95%',
    },
  },
  {
    id: 'vps-enterprise',
    category: 'vps',
    name: 'VPS Enterprise',
    price: { monthly: 2999, yearly: 23992 },
    icon: CloudIcon,
    gradient: 'from-orange-400 to-red-500',
    specifications: {
      'Sitios Web': 'Ilimitados',
      'Almacenamiento': '200 GB SSD NVMe',
      'Ancho de Banda': '5 TB/mes',
      'CPU': '8 vCores dedicados',
      'RAM': '16 GB dedicados',
      'Bases de Datos': 'Ilimitadas',
      'Cuentas Email': 'Ilimitadas',
      'SSL Certificado': 'Certificados premium',
      'CDN Global': 'Enterprise CDN',
      'Backups': 'Automáticos + Réplica',
      'Staging': 'Environments múltiples',
      'SSH Access': 'Root + Kubernetes',
      'Soporte': 'Dedicated Account Manager',
      'Uptime SLA': '99.99%',
    },
  },
  // Dedicated Server Plans
  {
    id: 'dedicated-intel',
    category: 'dedicado',
    name: 'Intel Xeon E5',
    price: { monthly: 4999, yearly: 47990 },
    icon: ServerIcon,
    gradient: 'from-gray-600 to-gray-800',
    specifications: {
      'Sitios Web': 'Ilimitados',
      'Almacenamiento': '1 TB SSD NVMe',
      'Ancho de Banda': 'Ilimitado',
      'CPU': 'Intel Xeon E5-2690 (12 cores)',
      'RAM': '32 GB DDR4 ECC',
      'Bases de Datos': 'Ilimitadas',
      'Cuentas Email': 'Ilimitadas',
      'SSL Certificado': 'Certificados premium',
      'CDN Global': 'Enterprise CDN',
      'Backups': 'RAID + Backup externo',
      'Staging': 'Hardware dedicado',
      'SSH Access': 'Root + IPMI',
      'Soporte': 'Dedicated Engineer',
      'Uptime SLA': '99.99%',
    },
  },
  {
    id: 'dedicated-amd',
    category: 'dedicado',
    name: 'AMD EPYC 7002',
    price: { monthly: 9999, yearly: 95990 },
    recommended: 'Máximo rendimiento',
    icon: ServerIcon,
    gradient: 'from-red-600 to-red-800',
    specifications: {
      'Sitios Web': 'Ilimitados',
      'Almacenamiento': '2 TB SSD NVMe RAID',
      'Ancho de Banda': 'Ilimitado',
      'CPU': 'AMD EPYC 7542 (32 cores)',
      'RAM': '128 GB DDR4 ECC',
      'Bases de Datos': 'Ilimitadas',
      'Cuentas Email': 'Ilimitadas',
      'SSL Certificado': 'Certificados premium',
      'CDN Global': 'Enterprise CDN',
      'Backups': 'RAID + Réplica remota',
      'Staging': 'Infraestructura dedicada',
      'SSH Access': 'Root + Out-of-band',
      'Soporte': '24/7 White-glove',
      'Uptime SLA': '99.995%',
    },
  },
];

const categories = [
  { id: 'all', name: 'Todos los Planes', icon: CpuChipIcon },
  { id: 'hosting', name: 'Hosting Web', icon: GlobeAltIcon },
  { id: 'vps', name: 'VPS Cloud', icon: CloudIcon },
  { id: 'dedicado', name: 'Servidores Dedicados', icon: ServerIcon },
];

export function PlansComparator() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [selectedPlans, setSelectedPlans] = useState<string[]>(['hosting-estandar', 'vps-pro']);
  
  // Advanced filters
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [showOnlyPopular, setShowOnlyPopular] = useState(false);
  const [sortBy, setSortBy] = useState<'price' | 'name' | 'popular'>('price');

  const filteredPlans = allPlans.filter(plan => {
    // Category filter
    if (selectedCategory !== 'all' && plan.category !== selectedCategory) {
      return false;
    }
    
    // Price range filter
    const price = billingCycle === 'yearly' ? plan.price.yearly / 12 : plan.price.monthly;
    if (price < priceRange[0] || price > priceRange[1]) {
      return false;
    }
    
    // Popular filter
    if (showOnlyPopular && !plan.popular) {
      return false;
    }
    
    return true;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price':
        const priceA = billingCycle === 'yearly' ? a.price.yearly / 12 : a.price.monthly;
        const priceB = billingCycle === 'yearly' ? b.price.yearly / 12 : b.price.monthly;
        return priceA - priceB;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'popular':
        return b.popular ? 1 : -1;
      default:
        return 0;
    }
  });

  const plansToCompare = allPlans.filter(plan => selectedPlans.includes(plan.id));

  const getPrice = (plan: Plan) => {
    return billingCycle === 'yearly' ? plan.price.yearly / 12 : plan.price.monthly;
  };

  const getSavings = (plan: Plan) => {
    const monthlyCost = plan.price.monthly * 12;
    const yearlyCost = plan.price.yearly;
    const savings = ((monthlyCost - yearlyCost) / monthlyCost) * 100;
    return Math.round(savings);
  };

  const togglePlanSelection = (planId: string) => {
    if (selectedPlans.includes(planId)) {
      setSelectedPlans(prev => prev.filter(id => id !== planId));
    } else if (selectedPlans.length < 4) {
      setSelectedPlans(prev => [...prev, planId]);
    }
  };

  const renderSpecificationValue = (value: string | boolean | number) => {
    if (typeof value === 'boolean') {
      return value ? (
        <CheckCircleIcon className="h-5 w-5 text-success-500" />
      ) : (
        <XMarkIcon className="h-5 w-5 text-secondary-300" />
      );
    }
    return (
      <span className={cn(
        'text-sm',
        typeof value === 'string' && value.includes('Ilimitado') 
          ? 'text-primary-600 font-medium' 
          : 'text-secondary-900'
      )}>
        {value}
      </span>
    );
  };

  // Get all unique specification keys
  const allSpecs = Array.from(
    new Set(
      plansToCompare.flatMap(plan => Object.keys(plan.specifications))
    )
  );

  return (
    <section className="py-16 bg-secondary-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Comparador de Planes
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Compara todos nuestros servicios lado a lado para encontrar la opción perfecta para tu proyecto
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                'flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all',
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-secondary-700 hover:bg-secondary-50 shadow-sm'
              )}
            >
              <category.icon className="h-5 w-5" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Billing Toggle */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-sm border border-secondary-200">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={cn(
                'px-6 py-2 rounded-full text-sm font-medium transition-all',
                billingCycle === 'monthly'
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'text-secondary-600 hover:text-primary-600'
              )}
            >
              Mensual
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={cn(
                'px-6 py-2 rounded-full text-sm font-medium transition-all relative',
                billingCycle === 'yearly'
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'text-secondary-600 hover:text-primary-600'
              )}
            >
              Anual
              <span className="absolute -top-2 -right-2 bg-success-500 text-white text-xs px-2 py-1 rounded-full">
                -33%
              </span>
            </button>
          </div>
        </div>

        {/* Plan Selection Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredPlans.map((plan) => (
            <Card 
              key={plan.id}
              variant={selectedPlans.includes(plan.id) ? 'outline' : 'default'}
              className={cn(
                'relative cursor-pointer transition-all duration-300',
                selectedPlans.includes(plan.id)
                  ? 'border-primary-500 shadow-lg scale-105'
                  : 'hover:shadow-md'
              )}
              onClick={() => togglePlanSelection(plan.id)}
            >
              {/* Badges */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                {plan.popular && (
                  <div className="flex items-center gap-1 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    <StarIcon className="h-3 w-3" />
                    Popular
                  </div>
                )}
                {plan.recommended && (
                  <div className="bg-success-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {plan.recommended}
                  </div>
                )}
                {selectedPlans.includes(plan.id) && (
                  <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Seleccionado
                  </div>
                )}
              </div>

              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-primary-600">
                    {formatCurrency(getPrice(plan))}
                  </div>
                  <div className="text-sm text-secondary-600">/mes</div>
                  {billingCycle === 'yearly' && (
                    <div className="text-xs text-success-600 font-medium mt-1">
                      Ahorras {getSavings(plan)}% anual
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <Button
                    variant={selectedPlans.includes(plan.id) ? 'gradient' : 'outline'}
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlanSelection(plan.id);
                    }}
                  >
                    {selectedPlans.includes(plan.id) ? 'Seleccionado' : 'Comparar'}
                  </Button>
                  {selectedPlans.length >= 4 && !selectedPlans.includes(plan.id) && (
                    <p className="text-xs text-secondary-500 mt-2">
                      Máximo 4 planes para comparar
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        {plansToCompare.length > 0 && (
          <Card className="overflow-hidden">
            <CardHeader>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-secondary-900">
                  Comparación Detallada ({plansToCompare.length} planes)
                </h2>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedPlans([])}
                >
                  Limpiar selección
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  {/* Header Row */}
                  <thead>
                    <tr className="border-b border-secondary-200 bg-secondary-50">
                      <th className="text-left p-4 font-semibold text-secondary-900 min-w-[200px]">
                        Especificaciones
                      </th>
                      {plansToCompare.map((plan) => (
                        <th key={plan.id} className="text-center p-4 min-w-[180px]">
                          <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-r ${plan.gradient} flex items-center justify-center`}>
                            <plan.icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="font-bold text-secondary-900 mb-1">{plan.name}</div>
                          <div className="text-lg font-bold text-primary-600">
                            {formatCurrency(getPrice(plan))}/mes
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  
                  {/* Specification Rows */}
                  <tbody>
                    {allSpecs.map((spec, index) => (
                      <tr key={spec} className={cn(
                        'border-b border-secondary-100',
                        index % 2 === 0 ? 'bg-white' : 'bg-secondary-25'
                      )}>
                        <td className="p-4 font-medium text-secondary-900">
                          {spec}
                        </td>
                        {plansToCompare.map((plan) => (
                          <td key={plan.id} className="p-4 text-center">
                            {plan.specifications[spec] !== undefined 
                              ? renderSpecificationValue(plan.specifications[spec])
                              : <span className="text-secondary-400">—</span>
                            }
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                  
                  {/* Action Row */}
                  <tfoot>
                    <tr className="bg-secondary-50 border-t-2 border-secondary-200">
                      <td className="p-4 font-semibold text-secondary-900">
                        Acciones
                      </td>
                      {plansToCompare.map((plan) => (
                        <td key={plan.id} className="p-4 text-center">
                          <div className="space-y-2">
                            <Button variant="gradient" size="sm" className="w-full">
                              Contratar
                            </Button>
                            <Button variant="ghost" size="sm" className="w-full text-xs">
                              Más info
                            </Button>
                          </div>
                        </td>
                      ))}
                    </tr>
                  </tfoot>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Empty State */}
        {plansToCompare.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <CpuChipIcon className="h-16 w-16 text-secondary-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Selecciona planes para comparar
              </h3>
              <p className="text-secondary-600">
                Haz clic en los planes que quieras comparar (máximo 4) para ver una tabla detallada de especificaciones
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}