'use client';

import { useState, useEffect } from 'react';
import type { Metadata } from 'next';

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  description: string;
  included?: string[];
  required?: boolean;
}

interface AddonService {
  id: string;
  name: string;
  price: number;
  unit: string;
  description: string;
  category: string;
}

export default function CalculadoraAvanzadaPage() {
  const [selectedPlan, setSelectedPlan] = useState<string>('profesional');
  const [selectedAddons, setSelectedAddons] = useState<Record<string, number>>({});
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [projectType, setProjectType] = useState<string>('business');
  const [expectedTraffic, setExpectedTraffic] = useState<string>('medium');
  
  const hostingPlans: ServiceOption[] = [
    {
      id: 'basico',
      name: 'Hosting Básico',
      basePrice: 99,
      description: '1 sitio, 5GB SSD, SSL gratuito',
      included: ['5GB SSD NVMe', '1 Sitio Web', '5 Cuentas Email', 'SSL Gratuito', 'Soporte 24/7'],
      required: true
    },
    {
      id: 'profesional',
      name: 'Hosting Profesional',
      basePrice: 199,
      description: '5 sitios, 20GB SSD, CDN incluido',
      included: ['20GB SSD NVMe', '5 Sitios Web', '25 Cuentas Email', 'SSL Wildcard', 'CDN Global', 'Staging'],
      required: true
    },
    {
      id: 'business',
      name: 'Hosting Business',
      basePrice: 399,
      description: '25 sitios, 50GB SSD, WAF incluido',
      included: ['50GB SSD NVMe', '25 Sitios Web', '100 Cuentas Email', 'WAF Avanzado', 'Backups 2x/día'],
      required: true
    },
    {
      id: 'enterprise',
      name: 'Hosting Enterprise',
      basePrice: 799,
      description: 'Ilimitado, 100GB SSD, Account Manager',
      included: ['100GB SSD NVMe', 'Sitios Ilimitados', 'Email Ilimitado', 'Security Suite', 'Account Manager'],
      required: true
    }
  ];

  const addonServices: AddonService[] = [
    // Dominios
    {
      id: 'domain-com',
      name: 'Dominio .com',
      price: 299,
      unit: 'año',
      description: 'Registro dominio .com por 1 año',
      category: 'domains'
    },
    {
      id: 'domain-mx',
      name: 'Dominio .mx',
      price: 599,
      unit: 'año', 
      description: 'Registro dominio .mx por 1 año',
      category: 'domains'
    },
    // Almacenamiento
    {
      id: 'storage-extra',
      name: 'Almacenamiento Extra',
      price: 49,
      unit: '10GB/mes',
      description: 'Espacio adicional SSD NVMe',
      category: 'resources'
    },
    // Email
    {
      id: 'email-extra',
      name: 'Cuentas Email Extra',
      price: 29,
      unit: '5 cuentas/mes',
      description: 'Cuentas email corporativo adicionales',
      category: 'email'
    },
    {
      id: 'email-premium',
      name: 'Email Premium',
      price: 199,
      unit: 'mes',
      description: 'Email con 50GB storage, calendario, contactos',
      category: 'email'
    },
    // SSL
    {
      id: 'ssl-wildcard',
      name: 'SSL Wildcard',
      price: 999,
      unit: 'año',
      description: 'Certificado para *.tudominio.com',
      category: 'security'
    },
    {
      id: 'ssl-ev',
      name: 'SSL Extended Validation',
      price: 1999,
      unit: 'año',
      description: 'Máximo nivel de validación SSL',
      category: 'security'
    },
    // CDN
    {
      id: 'cdn-extra',
      name: 'CDN Premium',
      price: 399,
      unit: 'mes',
      description: '1TB transferencia CDN adicional',
      category: 'performance'
    },
    // Backup
    {
      id: 'backup-extra',
      name: 'Backup Avanzado',
      price: 149,
      unit: 'mes',
      description: 'Backups cada 6 horas, 90 días retención',
      category: 'backup'
    },
    // Monitoreo
    {
      id: 'monitoring-basic',
      name: 'Monitoreo Básico',
      price: 199,
      unit: 'mes',
      description: '10 monitores, alertas email/SMS',
      category: 'monitoring'
    },
    {
      id: 'monitoring-pro',
      name: 'Monitoreo Profesional',
      price: 599,
      unit: 'mes',
      description: '50 monitores, performance analytics',
      category: 'monitoring'
    },
    // Desarrollo
    {
      id: 'staging-extra',
      name: 'Ambientes Staging Extra',
      price: 99,
      unit: 'ambiente/mes',
      description: 'Ambiente de pruebas adicional',
      category: 'development'
    },
    {
      id: 'git-integration',
      name: 'Git Integration Pro',
      price: 149,
      unit: 'mes',
      description: 'Auto-deploy, webhooks, CI/CD básico',
      category: 'development'
    },
    // Migración
    {
      id: 'migration-simple',
      name: 'Migración Simple',
      price: 499,
      unit: 'una vez',
      description: 'Migración de 1 sitio web básico',
      category: 'migration'
    },
    {
      id: 'migration-complex',
      name: 'Migración Compleja',
      price: 999,
      unit: 'una vez',
      description: 'Migración sitio complejo con BD',
      category: 'migration'
    },
    // Soporte
    {
      id: 'support-priority',
      name: 'Soporte Prioritario',
      price: 299,
      unit: 'mes',
      description: 'Respuesta &lt; 15 min, soporte telefónico',
      category: 'support'
    }
  ];

  const serviceCategories = [
    { id: 'domains', name: 'Dominios', icon: '🌐' },
    { id: 'resources', name: 'Recursos', icon: '🔧' },
    { id: 'email', name: 'Email', icon: '📧' },
    { id: 'security', name: 'Seguridad', icon: '🔒' },
    { id: 'performance', name: 'Performance', icon: '⚡' },
    { id: 'backup', name: 'Respaldos', icon: '💾' },
    { id: 'monitoring', name: 'Monitoreo', icon: '📊' },
    { id: 'development', name: 'Desarrollo', icon: '⚙️' },
    { id: 'migration', name: 'Migración', icon: '🔄' },
    { id: 'support', name: 'Soporte', icon: '🆘' }
  ];

  const calculateTotal = () => {
    const selectedPlanData = hostingPlans.find(p => p.id === selectedPlan);
    const baseCost = selectedPlanData?.basePrice || 0;
    
    let addonsCost = 0;
    let oneTimeCost = 0;
    
    Object.entries(selectedAddons).forEach(([addonId, quantity]) => {
      const addon = addonServices.find(a => a.id === addonId);
      if (addon && quantity > 0) {
        const cost = addon.price * quantity;
        if (addon.unit.includes('una vez') || addon.unit.includes('año')) {
          oneTimeCost += cost;
        } else {
          addonsCost += cost;
        }
      }
    });
    
    const monthlyRecurring = baseCost + addonsCost;
    const discount = billingCycle === 'annual' ? 0.2 : 0; // 20% descuento anual
    const discountedMonthly = monthlyRecurring * (1 - discount);
    const annualRecurring = discountedMonthly * 12;
    
    return {
      baseCost,
      addonsCost,
      monthlyRecurring,
      discountedMonthly,
      annualRecurring,
      oneTimeCost,
      discount,
      savings: monthlyRecurring * 12 - annualRecurring
    };
  };

  const totals = calculateTotal();

  const getRecommendedAddons = () => {
    const recommendations: string[] = [];
    
    if (projectType === 'ecommerce') {
      recommendations.push('ssl-ev', 'backup-extra', 'monitoring-pro', 'cdn-extra');
    } else if (projectType === 'business') {
      recommendations.push('ssl-wildcard', 'backup-extra', 'monitoring-basic', 'email-premium');
    } else if (projectType === 'blog') {
      recommendations.push('domain-com', 'backup-extra');
    }
    
    if (expectedTraffic === 'high') {
      recommendations.push('cdn-extra', 'monitoring-pro');
    }
    
    return recommendations;
  };

  const applyRecommendations = () => {
    const recommended = getRecommendedAddons();
    const newAddons: Record<string, number> = { ...selectedAddons };
    
    recommended.forEach(addonId => {
      if (!newAddons[addonId]) {
        newAddons[addonId] = 1;
      }
    });
    
    setSelectedAddons(newAddons);
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Calculadora Avanzada de Costos
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Calcula el costo exacto de tu proyecto. Precios transparentes, sin sorpresas.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Configuration Panel */}
          <div className="lg:col-span-2">
            
            {/* Project Configuration */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Configuración del Proyecto</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-3">
                    Tipo de Proyecto
                  </label>
                  <select 
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full p-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="blog">Blog Personal</option>
                    <option value="business">Sitio Corporativo</option>
                    <option value="ecommerce">Tienda Online</option>
                    <option value="saas">Aplicación SaaS</option>
                    <option value="agency">Agencia/Portfolio</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-3">
                    Tráfico Esperado
                  </label>
                  <select 
                    value={expectedTraffic}
                    onChange={(e) => setExpectedTraffic(e.target.value)}
                    className="w-full p-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="low">Bajo (&lt; 10k visitas/mes)</option>
                    <option value="medium">Medio (10k - 100k visitas/mes)</option>
                    <option value="high">Alto (&gt; 100k visitas/mes)</option>
                  </select>
                </div>
              </div>

              <div className="text-center">
                <button 
                  onClick={applyRecommendations}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  🤖 Aplicar Servicios Recomendados
                </button>
              </div>
            </div>

            {/* Plan Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Plan de Hosting</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {hostingPlans.map((plan) => (
                  <div 
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedPlan === plan.id 
                        ? 'border-primary-500 bg-primary-50' 
                        : 'border-secondary-200 hover:border-primary-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-lg">{plan.name}</h3>
                      <div className="text-2xl font-bold text-primary-600">
                        ${plan.basePrice}
                      </div>
                    </div>
                    <p className="text-secondary-600 text-sm mb-4">{plan.description}</p>
                    <div className="space-y-1">
                      {plan.included?.map((feature) => (
                        <div key={feature} className="text-sm text-secondary-700 flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Billing Cycle */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Ciclo de Facturación</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div 
                  onClick={() => setBillingCycle('monthly')}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                    billingCycle === 'monthly' 
                      ? 'border-primary-500 bg-primary-50' 
                      : 'border-secondary-200 hover:border-primary-300'
                  }`}
                >
                  <h3 className="font-bold text-lg mb-2">Mensual</h3>
                  <p className="text-secondary-600">Facturación mes a mes, mayor flexibilidad</p>
                </div>
                
                <div 
                  onClick={() => setBillingCycle('annual')}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all relative ${
                    billingCycle === 'annual' 
                      ? 'border-primary-500 bg-primary-50' 
                      : 'border-secondary-200 hover:border-primary-300'
                  }`}
                >
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs">
                    20% OFF
                  </div>
                  <h3 className="font-bold text-lg mb-2">Anual</h3>
                  <p className="text-secondary-600">Ahorra 20%, migración gratuita incluida</p>
                </div>
              </div>
            </div>

            {/* Addon Services */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Servicios Adicionales</h2>
              
              {serviceCategories.map((category) => {
                const categoryAddons = addonServices.filter(addon => addon.category === category.id);
                if (categoryAddons.length === 0) return null;
                
                return (
                  <div key={category.id} className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                    </h3>
                    
                    <div className="grid gap-4">
                      {categoryAddons.map((addon) => (
                        <div key={addon.id} className="flex items-center justify-between p-4 border border-secondary-200 rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-semibold">{addon.name}</h4>
                            <p className="text-secondary-600 text-sm">{addon.description}</p>
                            <div className="text-primary-600 font-bold">
                              ${addon.price}/{addon.unit}
                            </div>
                          </div>
                          
                          <div className="flex items-center ml-4">
                            <button 
                              onClick={() => setSelectedAddons(prev => ({
                                ...prev,
                                [addon.id]: Math.max(0, (prev[addon.id] || 0) - 1)
                              }))}
                              className="w-8 h-8 rounded-full bg-secondary-200 flex items-center justify-center hover:bg-secondary-300"
                            >
                              -
                            </button>
                            <span className="mx-3 min-w-[2rem] text-center">
                              {selectedAddons[addon.id] || 0}
                            </span>
                            <button 
                              onClick={() => setSelectedAddons(prev => ({
                                ...prev,
                                [addon.id]: (prev[addon.id] || 0) + 1
                              }))}
                              className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-700"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cost Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Resumen de Costos</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="font-semibold">Plan Base:</span>
                    <span className="font-bold text-primary-600">${totals.baseCost}/mes</span>
                  </div>
                  
                  {totals.addonsCost > 0 && (
                    <div className="flex justify-between items-center pb-4 border-b">
                      <span className="font-semibold">Servicios Adicionales:</span>
                      <span className="font-bold text-primary-600">${totals.addonsCost}/mes</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="font-semibold">Subtotal Mensual:</span>
                    <span className="text-secondary-600">${totals.monthlyRecurring}/mes</span>
                  </div>
                  
                  {billingCycle === 'annual' && totals.discount > 0 && (
                    <div className="flex justify-between items-center pb-4 border-b text-green-600">
                      <span className="font-semibold">Descuento Anual ({Math.round(totals.discount * 100)}%):</span>
                      <span className="font-bold">-${Math.round(totals.savings)}</span>
                    </div>
                  )}
                </div>
                
                <div className="bg-primary-50 p-6 rounded-xl mb-6">
                  <div className="text-center">
                    <div className="text-sm text-primary-600 mb-1">
                      {billingCycle === 'annual' ? 'Precio Mensual con Descuento' : 'Precio Mensual'}
                    </div>
                    <div className="text-4xl font-bold text-primary-600 mb-2">
                      ${Math.round(totals.discountedMonthly)}
                    </div>
                    <div className="text-sm text-primary-600">por mes</div>
                  </div>
                  
                  {billingCycle === 'annual' && (
                    <div className="text-center mt-4 pt-4 border-t border-primary-200">
                      <div className="text-sm text-primary-600">Total Anual</div>
                      <div className="text-2xl font-bold text-primary-600">
                        ${Math.round(totals.annualRecurring)}
                      </div>
                    </div>
                  )}
                </div>
                
                {totals.oneTimeCost > 0 && (
                  <div className="bg-orange-50 p-4 rounded-xl mb-6">
                    <div className="text-center">
                      <div className="text-sm text-orange-600 mb-1">Costos Únicos</div>
                      <div className="text-2xl font-bold text-orange-600">
                        ${totals.oneTimeCost}
                      </div>
                      <div className="text-xs text-orange-600">Dominios, migraciones, SSL anuales</div>
                    </div>
                  </div>
                )}
                
                {billingCycle === 'annual' && totals.savings > 0 && (
                  <div className="bg-green-50 p-4 rounded-xl mb-6">
                    <div className="text-center">
                      <div className="text-sm text-green-600 mb-1">🎉 Ahorras anualmente</div>
                      <div className="text-xl font-bold text-green-600">
                        ${Math.round(totals.savings)}
                      </div>
                      <div className="text-xs text-green-600">+ Migración gratuita incluida</div>
                    </div>
                  </div>
                )}
                
                <button className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-colors mb-4">
                  🚀 Comenzar Ahora
                </button>
                
                <div className="text-center text-sm text-secondary-600">
                  <p>✅ Garantía 30 días</p>
                  <p>✅ Soporte 24/7 incluido</p>
                  <p>✅ Sin costos ocultos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Comparison */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">¿Por Qué Elegir ARCIICloud?</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">💰</div>
              <h4 className="font-bold text-lg mb-2">Precios Transparentes</h4>
              <p className="text-secondary-600">Sin costos ocultos. Lo que ves es lo que pagas.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="font-bold text-lg mb-2">Performance Superior</h4>
              <p className="text-secondary-600">SSD NVMe, CDN global y optimización automática.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🛡️</div>
              <h4 className="font-bold text-lg mb-2">Seguridad Incluida</h4>
              <p className="text-secondary-600">SSL, firewall, backups y monitoreo sin costo extra.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}