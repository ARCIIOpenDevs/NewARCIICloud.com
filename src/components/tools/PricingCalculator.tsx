'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  GlobeAltIcon,
  CloudIcon,
  ServerIcon,
  CpuChipIcon,
  CircleStackIcon,
  EnvelopeIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';
import { cn, formatCurrency } from '@/lib/utils';

interface ServiceRequirement {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  options: {
    id: string;
    name: string;
    monthlyPrice: number;
    yearlyPrice: number;
    features: string[];
  }[];
}

const serviceTypes: ServiceRequirement[] = [
  {
    id: 'hosting',
    name: 'Hosting Web',
    icon: GlobeAltIcon,
    description: 'Hosting optimizado para sitios web y WordPress',
    options: [
      {
        id: 'eco',
        name: 'Hosting Eco',
        monthlyPrice: 299,
        yearlyPrice: 2390,
        features: ['1 sitio web', '10GB SSD', '1GB RAM', 'SSL gratis'],
      },
      {
        id: 'estandar',
        name: 'Hosting Estándar',
        monthlyPrice: 599,
        yearlyPrice: 4792,
        features: ['5 sitios web', '50GB SSD', '4GB RAM', 'CDN incluido'],
      },
      {
        id: 'performance',
        name: 'Hosting Performance',
        monthlyPrice: 999,
        yearlyPrice: 7992,
        features: ['Sitios ilimitados', '100GB SSD', '8GB RAM', 'CDN Premium'],
      },
    ],
  },
  {
    id: 'vps',
    name: 'VPS Cloud',
    icon: CloudIcon,
    description: 'Servidores virtuales privados escalables',
    options: [
      {
        id: 'vps-basic',
        name: 'VPS Básico',
        monthlyPrice: 899,
        yearlyPrice: 7192,
        features: ['2GB RAM', '50GB SSD', '2 vCores', 'Root access'],
      },
      {
        id: 'vps-pro',
        name: 'VPS Profesional',
        monthlyPrice: 1499,
        yearlyPrice: 11992,
        features: ['4GB RAM', '100GB SSD', '4 vCores', 'Snapshots'],
      },
      {
        id: 'vps-enterprise',
        name: 'VPS Empresarial',
        monthlyPrice: 2999,
        yearlyPrice: 23992,
        features: ['8GB RAM', '200GB SSD', '8 vCores', 'Load balancer'],
      },
    ],
  },
  {
    id: 'dedicado',
    name: 'Servidor Dedicado',
    icon: ServerIcon,
    description: 'Hardware físico exclusivo de alto rendimiento',
    options: [
      {
        id: 'intel-basic',
        name: 'Intel Xeon Básico',
        monthlyPrice: 4999,
        yearlyPrice: 47990,
        features: ['Intel Xeon E5', '32GB RAM', '1TB SSD', 'Banda ancha ilimitada'],
      },
      {
        id: 'intel-pro',
        name: 'Intel Xeon Profesional',
        monthlyPrice: 7999,
        yearlyPrice: 76790,
        features: ['Intel Xeon Gold', '64GB RAM', '2TB SSD', 'IPs /29'],
      },
      {
        id: 'amd-epyc',
        name: 'AMD EPYC Enterprise',
        monthlyPrice: 9999,
        yearlyPrice: 95990,
        features: ['AMD EPYC 7002', '128GB RAM', '4TB NVMe', 'Gestión completa'],
      },
    ],
  },
];

const additionalServices = [
  {
    id: 'domain',
    name: 'Dominio .com',
    icon: GlobeAltIcon,
    monthlyPrice: 0,
    yearlyPrice: 199,
    description: 'Registro de dominio por 1 año',
  },
  {
    id: 'ssl-premium',
    name: 'SSL Premium',
    icon: ShieldCheckIcon,
    monthlyPrice: 299,
    yearlyPrice: 2990,
    description: 'Certificado SSL con validación extendida',
  },
  {
    id: 'email-business',
    name: 'Email Corporativo',
    icon: EnvelopeIcon,
    monthlyPrice: 99,
    yearlyPrice: 990,
    description: '10 cuentas de email profesionales',
  },
  {
    id: 'backup-premium',
    name: 'Backup Premium',
    icon: CircleStackIcon,
    monthlyPrice: 199,
    yearlyPrice: 1990,
    description: 'Backups automáticos con restauración 1-click',
  },
];

interface CalculatorState {
  selectedServices: { [key: string]: string };
  additionalServices: string[];
  billingCycle: 'monthly' | 'yearly';
  projectType: string;
  expectedTraffic: string;
  businessSize: string;
}

export function PricingCalculator() {
  const [state, setState] = useState<CalculatorState>({
    selectedServices: {},
    additionalServices: [],
    billingCycle: 'yearly',
    projectType: '',
    expectedTraffic: '',
    businessSize: '',
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [recommendations, setRecommendations] = useState<string[]>([]);

  // Generate smart recommendations based on user profile
  const generateRecommendations = () => {
    const recs: string[] = [];
    
    // Traffic-based recommendations
    if (state.expectedTraffic === 'high' && !state.selectedServices.vps) {
      recs.push('🚀 Para sitios de alto tráfico, recomendamos VPS Cloud para mejor rendimiento');
    }
    
    if (state.expectedTraffic === 'low' && state.selectedServices.dedicado) {
      recs.push('💡 Para sitios pequeños, el Hosting Web es más económico y suficiente');
    }

    // Business size recommendations
    if (state.businessSize === 'enterprise' && !state.additionalServices.includes('ssl-premium')) {
      recs.push('🔒 Las empresas necesitan SSL Premium para mayor confianza del cliente');
    }

    // Project type recommendations
    if (state.projectType === 'ecommerce' && !state.additionalServices.includes('backup-premium')) {
      recs.push('🛡️ Para e-commerce recomendamos Backup Premium para proteger transacciones');
    }

    // Billing cycle recommendations
    if (state.billingCycle === 'monthly') {
      recs.push('💰 Ahorra hasta 20% pagando anualmente en lugar de mensual');
    }

    // SSL recommendations
    if (Object.keys(state.selectedServices).length > 0 && !state.additionalServices.includes('ssl-premium')) {
      recs.push('✅ SSL básico incluido gratis, considera SSL Premium para validación extendida');
    }

    return recs;
  };

  // Calculate total price and savings
  useEffect(() => {
    let monthlyTotal = 0;
    let yearlyTotal = 0;
    
    // Calculate main services
    Object.entries(state.selectedServices).forEach(([serviceId, optionId]) => {
      const service = serviceTypes.find(s => s.id === serviceId);
      const option = service?.options.find(o => o.id === optionId);
      if (option) {
        monthlyTotal += option.monthlyPrice;
        yearlyTotal += option.yearlyPrice;
      }
    });

    // Calculate additional services
    state.additionalServices.forEach(serviceId => {
      const service = additionalServices.find(s => s.id === serviceId);
      if (service) {
        monthlyTotal += service.monthlyPrice;
        yearlyTotal += service.yearlyPrice;
      }
    });

    const currentPrice = state.billingCycle === 'yearly' ? yearlyTotal : monthlyTotal;
    setTotalPrice(currentPrice);
    setRecommendations(generateRecommendations());
  }, [state]);

  // Generate recommendations based on selections
  useEffect(() => {
    const newRecommendations: string[] = [];

    // Traffic-based recommendations
    if (state.expectedTraffic === 'high' && state.selectedServices.hosting === 'eco') {
      newRecommendations.push('Para tráfico alto, recomendamos Hosting Performance o VPS Cloud');
    }

    // Business size recommendations
    if (state.businessSize === 'enterprise' && !state.selectedServices.dedicado) {
      newRecommendations.push('Para empresas grandes, considera un Servidor Dedicado para máximo control');
    }

    // Additional services recommendations
    if (state.selectedServices.hosting && !state.additionalServices.includes('backup-premium')) {
      newRecommendations.push('Protege tu sitio web con Backup Premium');
    }

    if (state.businessSize !== 'personal' && !state.additionalServices.includes('email-business')) {
      newRecommendations.push('Email corporativo profesional recomendado para negocios');
    }

    setRecommendations(newRecommendations);
  }, [state]);

  const handleServiceSelection = (serviceId: string, optionId: string) => {
    setState(prev => ({
      ...prev,
      selectedServices: {
        ...prev.selectedServices,
        [serviceId]: optionId,
      },
    }));
  };

  const handleAdditionalService = (serviceId: string) => {
    setState(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(serviceId)
        ? prev.additionalServices.filter(id => id !== serviceId)
        : [...prev.additionalServices, serviceId],
    }));
  };

  const getSavingsPercentage = () => {
    let monthlyTotal = 0;
    let yearlyTotal = 0;

    Object.entries(state.selectedServices).forEach(([serviceId, optionId]) => {
      const service = serviceTypes.find(s => s.id === serviceId);
      const option = service?.options.find(o => o.id === optionId);
      if (option) {
        monthlyTotal += option.monthlyPrice * 12;
        yearlyTotal += option.yearlyPrice;
      }
    });

    state.additionalServices.forEach(serviceId => {
      const service = additionalServices.find(s => s.id === serviceId);
      if (service) {
        monthlyTotal += service.monthlyPrice * 12;
        yearlyTotal += service.yearlyPrice;
      }
    });

    if (monthlyTotal > 0) {
      return Math.round(((monthlyTotal - yearlyTotal) / monthlyTotal) * 100);
    }
    return 0;
  };

  return (
    <section className="py-16 bg-secondary-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Calculadora de Precios
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Encuentra el plan perfecto para tu proyecto. Configura tus necesidades y obtén una cotización personalizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CpuChipIcon className="h-5 w-5" />
                  Información del Proyecto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-3">
                    Tipo de proyecto
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['Sitio web personal', 'Blog/WordPress', 'E-commerce', 'Aplicación web'].map((type) => (
                      <button
                        key={type}
                        onClick={() => setState(prev => ({ ...prev, projectType: type }))}
                        className={cn(
                          'p-3 text-sm rounded-lg border-2 transition-colors',
                          state.projectType === type
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'border-secondary-200 bg-white text-secondary-600 hover:border-secondary-300'
                        )}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-3">
                    Tráfico esperado mensual
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { id: 'low', name: '< 10K visitas' },
                      { id: 'medium', name: '10K - 100K' },
                      { id: 'high', name: '100K - 1M' },
                      { id: 'enterprise', name: '> 1M visitas' },
                    ].map((traffic) => (
                      <button
                        key={traffic.id}
                        onClick={() => setState(prev => ({ ...prev, expectedTraffic: traffic.id }))}
                        className={cn(
                          'p-3 text-sm rounded-lg border-2 transition-colors',
                          state.expectedTraffic === traffic.id
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'border-secondary-200 bg-white text-secondary-600 hover:border-secondary-300'
                        )}
                      >
                        {traffic.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-3">
                    Tamaño del negocio
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { id: 'personal', name: 'Personal' },
                      { id: 'startup', name: 'Startup' },
                      { id: 'business', name: 'Negocio' },
                      { id: 'enterprise', name: 'Empresa' },
                    ].map((size) => (
                      <button
                        key={size.id}
                        onClick={() => setState(prev => ({ ...prev, businessSize: size.id }))}
                        className={cn(
                          'p-3 text-sm rounded-lg border-2 transition-colors',
                          state.businessSize === size.id
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'border-secondary-200 bg-white text-secondary-600 hover:border-secondary-300'
                        )}
                      >
                        {size.name}
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Main Services */}
            <Card>
              <CardHeader>
                <CardTitle>Servicios Principales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {serviceTypes.map((service) => (
                    <div key={service.id}>
                      <div className="flex items-center gap-3 mb-4">
                        <service.icon className="h-6 w-6 text-primary-600" />
                        <div>
                          <h3 className="text-lg font-semibold text-secondary-900">{service.name}</h3>
                          <p className="text-sm text-secondary-600">{service.description}</p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        {service.options.map((option) => (
                          <div
                            key={option.id}
                            className={cn(
                              'p-4 rounded-lg border-2 cursor-pointer transition-all',
                              state.selectedServices[service.id] === option.id
                                ? 'border-primary-500 bg-primary-50'
                                : 'border-secondary-200 bg-white hover:border-secondary-300'
                            )}
                            onClick={() => handleServiceSelection(service.id, option.id)}
                          >
                            <div className="text-center">
                              <h4 className="font-semibold text-secondary-900 mb-2">{option.name}</h4>
                              <div className="text-2xl font-bold text-primary-600 mb-2">
                                {formatCurrency(state.billingCycle === 'yearly' ? option.yearlyPrice / 12 : option.monthlyPrice)}
                                <span className="text-sm text-secondary-600">/mes</span>
                              </div>
                              <ul className="text-xs text-secondary-600 space-y-1">
                                {option.features.map((feature, index) => (
                                  <li key={index}>✓ {feature}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Services */}
            <Card>
              <CardHeader>
                <CardTitle>Servicios Adicionales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {additionalServices.map((service) => (
                    <div
                      key={service.id}
                      className={cn(
                        'p-4 rounded-lg border-2 cursor-pointer transition-all',
                        state.additionalServices.includes(service.id)
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-secondary-200 bg-white hover:border-secondary-300'
                      )}
                      onClick={() => handleAdditionalService(service.id)}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <service.icon className="h-5 w-5 text-primary-600" />
                        <h4 className="font-semibold text-secondary-900">{service.name}</h4>
                      </div>
                      <p className="text-sm text-secondary-600 mb-2">{service.description}</p>
                      <div className="text-lg font-bold text-primary-600">
                        {service.yearlyPrice > 0 
                          ? formatCurrency(state.billingCycle === 'yearly' ? service.yearlyPrice / 12 : service.monthlyPrice)
                          : 'Incluido'
                        }
                        {service.yearlyPrice > 0 && <span className="text-sm text-secondary-600">/mes</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Summary Panel */}
          <div className="space-y-6">
            {/* Billing Toggle */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="inline-flex items-center bg-secondary-100 rounded-full p-1">
                    <button
                      onClick={() => setState(prev => ({ ...prev, billingCycle: 'monthly' }))}
                      className={cn(
                        'px-4 py-2 rounded-full text-sm font-medium transition-all',
                        state.billingCycle === 'monthly'
                          ? 'bg-primary-600 text-white shadow-sm'
                          : 'text-secondary-600 hover:text-primary-600'
                      )}
                    >
                      Mensual
                    </button>
                    <button
                      onClick={() => setState(prev => ({ ...prev, billingCycle: 'yearly' }))}
                      className={cn(
                        'px-4 py-2 rounded-full text-sm font-medium transition-all relative',
                        state.billingCycle === 'yearly'
                          ? 'bg-primary-600 text-white shadow-sm'
                          : 'text-secondary-600 hover:text-primary-600'
                      )}
                    >
                      Anual
                      <span className="absolute -top-2 -right-2 bg-success-500 text-white text-xs px-2 py-1 rounded-full">
                        -{getSavingsPercentage()}%
                      </span>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Price Summary */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Resumen de Precios</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Selected Services */}
                  {Object.entries(state.selectedServices).map(([serviceId, optionId]) => {
                    const service = serviceTypes.find(s => s.id === serviceId);
                    const option = service?.options.find(o => o.id === optionId);
                    if (!option) return null;

                    const price = state.billingCycle === 'yearly' ? option.yearlyPrice / 12 : option.monthlyPrice;
                    return (
                      <div key={serviceId} className="flex justify-between items-center">
                        <span className="text-secondary-700">{option.name}</span>
                        <span className="font-semibold">{formatCurrency(price)}</span>
                      </div>
                    );
                  })}

                  {/* Additional Services */}
                  {state.additionalServices.map(serviceId => {
                    const service = additionalServices.find(s => s.id === serviceId);
                    if (!service) return null;

                    const price = state.billingCycle === 'yearly' ? service.yearlyPrice / 12 : service.monthlyPrice;
                    return (
                      <div key={serviceId} className="flex justify-between items-center">
                        <span className="text-secondary-700">{service.name}</span>
                        <span className="font-semibold">{price > 0 ? formatCurrency(price) : 'Incluido'}</span>
                      </div>
                    );
                  })}

                  <hr className="border-secondary-200" />

                  {/* Total */}
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total mensual</span>
                    <span className="text-primary-600">{formatCurrency(totalPrice)}</span>
                  </div>

                  {state.billingCycle === 'yearly' && totalPrice > 0 && (
                    <div className="text-center">
                      <div className="text-sm text-success-600 font-medium">
                        Ahorras {getSavingsPercentage()}% pagando anual
                      </div>
                      <div className="text-sm text-secondary-600">
                        Total anual: {formatCurrency(totalPrice * 12 * (1 - getSavingsPercentage() / 100))}
                      </div>
                    </div>
                  )}

                  <Button 
                    variant="gradient" 
                    className="w-full"
                    size="lg"
                    disabled={Object.keys(state.selectedServices).length === 0}
                    rightIcon={<RocketLaunchIcon className="h-5 w-5" />}
                  >
                    Contratar Ahora
                  </Button>

                  <Button 
                    variant="outline" 
                    className="w-full"
                    disabled={Object.keys(state.selectedServices).length === 0}
                  >
                    Solicitar Cotización
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            {recommendations.length > 0 && (
              <Card variant="outline" className="border-primary-200 bg-primary-25">
                <CardHeader>
                  <CardTitle className="text-primary-800">Recomendaciones</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {recommendations.map((recommendation, index) => (
                      <li key={index} className="text-sm text-primary-700 flex items-start gap-2">
                        <span className="text-primary-500 mt-1">💡</span>
                        {recommendation}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}