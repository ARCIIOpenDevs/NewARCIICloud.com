'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  CheckCircleIcon,
  StarIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  CircleStackIcon,
} from '@heroicons/react/24/solid';
import { cn, formatCurrency } from '@/lib/utils';

interface PlanFeature {
  name: string;
  included: boolean;
  value?: string;
}

interface HostingPlan {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  price: {
    monthly: number;
    yearly: number;
  };
  popular?: boolean;
  features: PlanFeature[];
  specifications: {
    storage: string;
    bandwidth: string;
    domains: string;
    emails: string;
    databases: string;
    cpu: string;
    ram: string;
    backups: string;
  };
}

const hostingPlans: HostingPlan[] = [
  {
    id: 'eco',
    name: 'Hosting Eco',
    description: 'Perfecto para sitios web personales y pequeños proyectos',
    icon: CircleStackIcon,
    gradient: 'from-green-400 to-emerald-500',
    price: {
      monthly: 299,
      yearly: 2390, // 20% discount
    },
    features: [
      { name: '1 Sitio Web', included: true },
      { name: 'SSL Gratuito', included: true },
      { name: 'cPanel en Español', included: true },
      { name: 'WordPress Optimizado', included: true },
      { name: 'Backup Semanal', included: true },
      { name: 'Soporte 24/7', included: true },
      { name: 'Migración Gratuita', included: true },
      { name: 'CDN Básico', included: false },
      { name: 'Staging Environment', included: false },
      { name: 'WP-CLI Access', included: false },
    ],
    specifications: {
      storage: '10 GB SSD NVMe',
      bandwidth: '100 GB/mes',
      domains: '1 dominio',
      emails: '10 cuentas',
      databases: '1 MySQL',
      cpu: '1 vCore',
      ram: '1 GB',
      backups: 'Semanales (4 copias)',
    },
  },
  {
    id: 'estandar',
    name: 'Hosting Estándar',
    description: 'Ideal para sitios web de negocio y tiendas online pequeñas',
    icon: CpuChipIcon,
    gradient: 'from-blue-400 to-cyan-500',
    price: {
      monthly: 599,
      yearly: 4792, // 33% discount
    },
    popular: true,
    features: [
      { name: '5 Sitios Web', included: true },
      { name: 'SSL Gratuito', included: true },
      { name: 'cPanel en Español', included: true },
      { name: 'WordPress Optimizado', included: true },
      { name: 'Backup Diario', included: true },
      { name: 'Soporte 24/7', included: true },
      { name: 'Migración Gratuita', included: true },
      { name: 'CDN Global', included: true },
      { name: 'Staging Environment', included: true },
      { name: 'WP-CLI Access', included: false },
    ],
    specifications: {
      storage: '50 GB SSD NVMe',
      bandwidth: '500 GB/mes',
      domains: '5 dominios',
      emails: '50 cuentas',
      databases: '5 MySQL',
      cpu: '2 vCores',
      ram: '4 GB',
      backups: 'Diarios (30 copias)',
    },
  },
  {
    id: 'performance',
    name: 'Hosting Performance',
    description: 'Máximo rendimiento para sitios web de alto tráfico',
    icon: RocketLaunchIcon,
    gradient: 'from-purple-400 to-pink-500',
    price: {
      monthly: 999,
      yearly: 7992, // 33% discount
    },
    features: [
      { name: 'Sitios Ilimitados', included: true },
      { name: 'SSL Gratuito', included: true },
      { name: 'cPanel en Español', included: true },
      { name: 'WordPress Optimizado', included: true },
      { name: 'Backup Diario', included: true },
      { name: 'Soporte 24/7', included: true },
      { name: 'Migración Gratuita', included: true },
      { name: 'CDN Global Premium', included: true },
      { name: 'Staging Environment', included: true },
      { name: 'WP-CLI Access', included: true },
    ],
    specifications: {
      storage: '100 GB SSD NVMe',
      bandwidth: 'Ilimitado',
      domains: 'Ilimitados',
      emails: 'Ilimitadas',
      databases: 'Ilimitadas',
      cpu: '4 vCores',
      ram: '8 GB',
      backups: 'Diarios (60 copias)',
    },
  },
];

export function PlansSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  const getPrice = (plan: HostingPlan) => {
    return billingCycle === 'yearly' ? plan.price.yearly / 12 : plan.price.monthly;
  };

  const getSavings = (plan: HostingPlan) => {
    const monthlyCost = plan.price.monthly * 12;
    const yearlyCost = plan.price.yearly;
    const savings = ((monthlyCost - yearlyCost) / monthlyCost) * 100;
    return Math.round(savings);
  };

  return (
    <section className="py-24 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Elige tu Plan de Hosting
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
            Todos los planes incluyen migración gratuita, SSL certificado y soporte 24/7
          </p>
          
          {/* Billing Toggle */}
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
        
        {/* Plans Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {hostingPlans.map((plan) => (
            <Card 
              key={plan.id}
              variant={plan.popular ? 'outline' : 'default'}
              className={cn(
                'relative h-full transition-all duration-300 hover:scale-105',
                plan.popular ? 'border-primary-500 shadow-2xl' : 'hover:shadow-xl'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    <StarIcon className="h-4 w-4" />
                    Más Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <p className="text-secondary-600 mb-6">{plan.description}</p>
                
                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-4xl font-bold text-secondary-900">
                      {formatCurrency(getPrice(plan))}
                    </span>
                    <span className="text-secondary-600">/mes</span>
                  </div>
                  
                  {billingCycle === 'yearly' && (
                    <div className="text-sm text-success-600 font-medium">
                      Ahorras {getSavings(plan)}% pagando anual
                    </div>
                  )}
                  
                  <div className="text-xs text-secondary-500 mt-2">
                    {billingCycle === 'yearly' 
                      ? `Facturación anual: ${formatCurrency(plan.price.yearly)}`
                      : 'Facturación mensual'
                    }
                  </div>
                </div>
                
                <Button 
                  variant={plan.popular ? 'gradient' : 'default'} 
                  className="w-full mb-6"
                  size="lg"
                >
                  Empezar Ahora
                </Button>
              </CardHeader>
              
              <CardContent>
                {/* Specifications */}
                <div className="mb-6 p-4 bg-secondary-50 rounded-xl">
                  <h4 className="font-semibold text-secondary-900 mb-3 text-sm">Especificaciones:</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-secondary-600">Almacenamiento:</span>
                      <span className="font-medium">{plan.specifications.storage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary-600">Bandwidth:</span>
                      <span className="font-medium">{plan.specifications.bandwidth}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary-600">CPU:</span>
                      <span className="font-medium">{plan.specifications.cpu}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary-600">RAM:</span>
                      <span className="font-medium">{plan.specifications.ram}</span>
                    </div>
                  </div>
                </div>
                
                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircleIcon 
                        className={cn(
                          'h-5 w-5 flex-shrink-0',
                          feature.included ? 'text-success-500' : 'text-secondary-300'
                        )} 
                      />
                      <span 
                        className={cn(
                          'text-sm',
                          feature.included ? 'text-secondary-900' : 'text-secondary-400'
                        )}
                      >
                        {feature.name}
                      </span>
                      {feature.value && (
                        <span className="text-xs text-primary-600 bg-primary-50 px-2 py-1 rounded-full ml-auto">
                          {feature.value}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="text-center">
          <p className="text-secondary-600 mb-4">
            ¿Necesitas más recursos? Consulta nuestros <strong>VPS Cloud</strong> y <strong>Servidores Dedicados</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline">
              Comparar con VPS
            </Button>
            <Button variant="ghost">
              Hablar con un Experto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}