'use client';

import { useState } from 'react';
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { cn } from '@/lib/utils';

const comparisonFeatures = [
  {
    category: 'Recursos del Servidor',
    features: [
      {
        name: 'Almacenamiento SSD NVMe',
        eco: '10 GB',
        estandar: '50 GB',
        performance: '100 GB',
      },
      {
        name: 'Ancho de Banda Mensual',
        eco: '100 GB',
        estandar: '500 GB',
        performance: 'Ilimitado',
      },
      {
        name: 'CPU vCores',
        eco: '1 vCore',
        estandar: '2 vCores',
        performance: '4 vCores',
      },
      {
        name: 'Memoria RAM',
        eco: '1 GB',
        estandar: '4 GB',
        performance: '8 GB',
      },
      {
        name: 'Inodos (archivos)',
        eco: '100,000',
        estandar: '500,000',
        performance: 'Ilimitados',
      },
    ],
  },
  {
    category: 'Sitios Web y Dominios',
    features: [
      {
        name: 'Sitios Web',
        eco: '1 sitio',
        estandar: '5 sitios',
        performance: 'Ilimitados',
      },
      {
        name: 'Dominios Incluidos',
        eco: '1 dominio',
        estandar: '5 dominios',
        performance: 'Ilimitados',
      },
      {
        name: 'Subdominios',
        eco: '5 subdominios',
        estandar: '25 subdominios',
        performance: 'Ilimitados',
      },
    ],
  },
  {
    category: 'Email y Bases de Datos',
    features: [
      {
        name: 'Cuentas de Email',
        eco: '10 cuentas',
        estandar: '50 cuentas',
        performance: 'Ilimitadas',
      },
      {
        name: 'Bases de Datos MySQL',
        eco: '1 base',
        estandar: '5 bases',
        performance: 'Ilimitadas',
      },
      {
        name: 'phpMyAdmin',
        eco: true,
        estandar: true,
        performance: true,
      },
    ],
  },
  {
    category: 'Seguridad y Backups',
    features: [
      {
        name: 'SSL Certificado',
        eco: 'Let\'s Encrypt',
        estandar: 'Let\'s Encrypt',
        performance: 'Let\'s Encrypt + Wildcard',
      },
      {
        name: 'Backups Automáticos',
        eco: 'Semanales (4 copias)',
        estandar: 'Diarios (30 copias)',
        performance: 'Diarios (60 copias)',
      },
      {
        name: 'Firewall Web (WAF)',
        eco: 'Básico',
        estandar: 'Avanzado',
        performance: 'Enterprise',
      },
      {
        name: 'Protección DDoS',
        eco: true,
        estandar: true,
        performance: true,
      },
      {
        name: 'Escaneo de Malware',
        eco: false,
        estandar: true,
        performance: true,
      },
    ],
  },
  {
    category: 'Performance y CDN',
    features: [
      {
        name: 'Cache Automático',
        eco: 'Básico',
        estandar: 'Avanzado',
        performance: 'Enterprise + Redis',
      },
      {
        name: 'CDN Global',
        eco: false,
        estandar: 'CloudFlare',
        performance: 'CloudFlare Pro',
      },
      {
        name: 'Compresión Gzip',
        eco: true,
        estandar: true,
        performance: true,
      },
      {
        name: 'HTTP/2',
        eco: true,
        estandar: true,
        performance: true,
      },
    ],
  },
  {
    category: 'Herramientas Desarrollo',
    features: [
      {
        name: 'cPanel en Español',
        eco: true,
        estandar: true,
        performance: true,
      },
      {
        name: 'Softaculous (1-click install)',
        eco: '100+ apps',
        estandar: '300+ apps',
        performance: '400+ apps',
      },
      {
        name: 'Staging Environment',
        eco: false,
        estandar: true,
        performance: true,
      },
      {
        name: 'WP-CLI Access',
        eco: false,
        estandar: false,
        performance: true,
      },
      {
        name: 'SSH Access',
        eco: false,
        estandar: false,
        performance: true,
      },
      {
        name: 'Git Integration',
        eco: false,
        estandar: false,
        performance: true,
      },
    ],
  },
  {
    category: 'Soporte y Servicios',
    features: [
      {
        name: 'Soporte 24/7',
        eco: 'Chat + Tickets',
        estandar: 'Chat + Tickets + Phone',
        performance: 'Prioritario + Teléfono',
      },
      {
        name: 'Migración Gratuita',
        eco: '1 sitio',
        estandar: '5 sitios',
        performance: 'Ilimitadas',
      },
      {
        name: 'Tiempo de Respuesta SLA',
        eco: '<24 horas',
        estandar: '<4 horas',
        performance: '<1 hora',
      },
      {
        name: 'Garantía de Uptime',
        eco: '99.5%',
        estandar: '99.9%',
        performance: '99.95%',
      },
    ],
  },
];

export function ComparisonSection() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    'Recursos del Servidor',
    'Sitios Web y Dominios'
  ]);

  const toggleCategory = (category: string) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(prev => prev.filter(c => c !== category));
    } else {
      setExpandedCategories(prev => [...prev, category]);
    }
  };

  const renderFeatureValue = (value: string | boolean, planType: string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <CheckCircleIcon className="h-5 w-5 text-success-500 mx-auto" />
      ) : (
        <XMarkIcon className="h-5 w-5 text-secondary-300 mx-auto" />
      );
    }

    const isHighlighted = planType === 'performance' && 
      (value.includes('Ilimitado') || value.includes('Enterprise') || value.includes('Pro'));

    return (
      <span className={cn(
        'text-sm',
        isHighlighted ? 'text-primary-600 font-medium' : 'text-secondary-900'
      )}>
        {value}
      </span>
    );
  };

  return (
    <section className="py-24 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Comparación Detallada de Planes
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Especificaciones técnicas completas para que puedas elegir el plan perfecto para tu proyecto
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header Row */}
          <div className="bg-secondary-50 border-b border-secondary-200">
            <div className="grid grid-cols-4 gap-4 p-6">
              <div className="text-lg font-semibold text-secondary-900">
                Características
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-secondary-900 mb-1">Hosting Eco</div>
                <div className="text-sm text-success-600 font-medium">Desde $299/mes</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-secondary-900 mb-1">Hosting Estándar</div>
                <div className="text-sm text-primary-600 font-medium">Desde $599/mes</div>
                <div className="text-xs bg-primary-100 text-primary-600 px-2 py-1 rounded-full mt-1 inline-block">
                  Más Popular
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-secondary-900 mb-1">Hosting Performance</div>
                <div className="text-sm text-purple-600 font-medium">Desde $999/mes</div>
              </div>
            </div>
          </div>

          {/* Feature Categories */}
          {comparisonFeatures.map((category, categoryIndex) => (
            <div key={category.category} className="border-b border-secondary-200 last:border-b-0">
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.category)}
                className="w-full p-6 text-left bg-secondary-25 hover:bg-secondary-50 transition-colors flex items-center justify-between"
              >
                <h3 className="text-lg font-semibold text-secondary-900">
                  {category.category}
                </h3>
                <div className={cn(
                  'transform transition-transform',
                  expandedCategories.includes(category.category) ? 'rotate-180' : ''
                )}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Category Features */}
              {expandedCategories.includes(category.category) && (
                <div>
                  {category.features.map((feature, featureIndex) => (
                    <div key={feature.name} className={cn(
                      'grid grid-cols-4 gap-4 p-4 border-t border-secondary-100',
                      featureIndex % 2 === 0 ? 'bg-white' : 'bg-secondary-25'
                    )}>
                      <div className="font-medium text-secondary-900">
                        {feature.name}
                      </div>
                      <div className="text-center">
                        {renderFeatureValue(feature.eco, 'eco')}
                      </div>
                      <div className="text-center">
                        {renderFeatureValue(feature.estandar, 'estandar')}
                      </div>
                      <div className="text-center">
                        {renderFeatureValue(feature.performance, 'performance')}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-secondary-600 mb-6">
            ¿Tienes dudas sobre qué plan elegir? Nuestros expertos te ayudan sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Chat con Experto
            </button>
            <button className="btn-secondary">
              Calculadora de Recursos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}