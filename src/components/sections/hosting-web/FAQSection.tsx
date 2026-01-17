'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: '¿Qué incluye la migración gratuita?',
    answer: 'Migramos completamente tu sitio web desde tu proveedor actual sin costo adicional. Incluye archivos, bases de datos, emails y configuraciones. Nuestro equipo técnico se encarga de todo el proceso y verifica que tu sitio funcione perfectamente antes de hacer el cambio de DNS.',
    category: 'migration',
  },
  {
    question: '¿Cuánto tiempo tarda la migración?',
    answer: 'La mayoría de migraciones se completan en 24-48 horas. Para sitios web complejos o con muchos datos puede tomar hasta 72 horas. Te mantenemos informado durante todo el proceso y programamos la migración en el horario que mejor te convenga.',
    category: 'migration',
  },
  {
    question: '¿Realmente el uptime es del 99.9%?',
    answer: 'Sí, garantizamos 99.9% de uptime con nuestro SLA. Si no cumplimos con este compromiso, te compensamos con créditos de hosting. Nuestros servidores están monitoreados 24/7 y tenemos redundancia en múltiples datacenters.',
    category: 'reliability',
  },
  {
    question: '¿Qué versiones de PHP y MySQL soportan?',
    answer: 'Soportamos múltiples versiones: PHP 7.4, 8.0, 8.1, 8.2 y MySQL 5.7, 8.0. Puedes cambiar la versión desde tu cPanel. Recomendamos usar siempre la última versión estable para mejor rendimiento y seguridad.',
    category: 'technical',
  },
  {
    question: '¿Puedo instalar WordPress con un clic?',
    answer: 'Sí, incluimos Softaculous con instalación automática de WordPress y más de 400 aplicaciones. También ofrecemos WordPress preconfigurado y optimizado específicamente para nuestros servidores con cache automático y plugins de seguridad.',
    category: 'wordpress',
  },
  {
    question: '¿Cómo funcionan los backups automáticos?',
    answer: 'Creamos backups automáticos según tu plan: semanales en Eco, diarios en Estándar y Performance. Los backups incluyen archivos, bases de datos y configuraciones. Puedes restaurar desde tu cPanel o solicitar restauración a nuestro equipo técnico.',
    category: 'backup',
  },
  {
    question: '¿Qué tan rápido es el soporte técnico?',
    answer: 'Nuestro tiempo promedio de respuesta es menos de 5 minutos para chat en vivo y menos de 2 horas para tickets. El soporte telefónico está disponible en planes Estándar y Performance. Todo nuestro equipo habla español nativo.',
    category: 'support',
  },
  {
    question: '¿Puedo cambiar de plan cuando quiera?',
    answer: 'Sí, puedes actualizar tu plan en cualquier momento desde tu área de cliente. Los upgrades son instantáneos y solo pagas la diferencia prorrateada. Los downgrades se aplican en tu próximo período de facturación.',
    category: 'billing',
  },
  {
    question: '¿Hay límites ocultos o restricciones?',
    answer: 'No tenemos límites ocultos. Los recursos son exactamente como se describen. No limitamos inodos en Performance, no restringimos CPU usage normal, y no cobramos por tráfico adicional hasta los límites especificados.',
    category: 'limits',
  },
  {
    question: '¿Qué pasa si mi sitio supera los recursos?',
    answer: 'Si tu sitio crece y necesita más recursos, te notificamos proactivamente y te recomendamos el upgrade apropiado. Nunca suspendemos sin aviso. Ofrecemos planes VPS y servidores dedicados para sitios de alto tráfico.',
    category: 'scaling',
  },
  {
    question: '¿Incluye protección contra malware?',
    answer: 'Los planes Estándar y Performance incluyen escaneo automático de malware y limpieza. También tenemos firewall web (WAF) y protección DDoS en todos los planes. El SSL está incluido de por vida sin costo adicional.',
    category: 'security',
  },
  {
    question: '¿Puedo usar mi propio dominio?',
    answer: 'Por supuesto. Puedes usar dominios que ya tengas o registrar nuevos con nosotros. Te ayudamos con la configuración de DNS y la transferencia de dominios. También incluimos subdominios ilimitados en Performance.',
    category: 'domains',
  },
];

const categories = [
  { id: 'all', name: 'Todas las preguntas', count: faqs.length },
  { id: 'migration', name: 'Migración', count: faqs.filter(faq => faq.category === 'migration').length },
  { id: 'wordpress', name: 'WordPress', count: faqs.filter(faq => faq.category === 'wordpress').length },
  { id: 'technical', name: 'Técnicas', count: faqs.filter(faq => faq.category === 'technical').length },
  { id: 'support', name: 'Soporte', count: faqs.filter(faq => faq.category === 'support').length },
  { id: 'billing', name: 'Facturación', count: faqs.filter(faq => faq.category === 'billing').length },
];

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredFAQs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-secondary-600">
            Resolvemos todas tus dudas sobre nuestro hosting web
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all',
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
              )}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 hover:bg-secondary-25 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-secondary-900 pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUpIcon className="h-5 w-5 text-secondary-500" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-secondary-500" />
                    )}
                  </div>
                </div>
              </button>
              
              {openFAQ === index && (
                <CardContent className="px-6 pb-6 pt-0">
                  <div className="border-t border-secondary-100 pt-4">
                    <p className="text-secondary-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              ¿No encuentras la respuesta que buscas?
            </h3>
            <p className="text-secondary-600 mb-6">
              Nuestro equipo de soporte está disponible 24/7 para resolver cualquier duda específica sobre tu proyecto
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Chat en Vivo
              </button>
              <button className="btn-secondary">
                Abrir Ticket de Soporte
              </button>
              <button className="btn-ghost">
                Llamar: +52 (55) 1234-5678
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}