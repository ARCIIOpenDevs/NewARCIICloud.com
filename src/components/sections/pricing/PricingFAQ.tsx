'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const faqData = [
  {
    category: 'Precios y Facturación',
    questions: [
      {
        q: '¿Los precios incluyen IVA?',
        a: 'Sí, todos nuestros precios mostrados incluyen el 16% de IVA mexicano. No hay costos adicionales ocultos.'
      },
      {
        q: '¿Puedo cambiar de plan en cualquier momento?',
        a: 'Sí, puedes actualizar tu plan en cualquier momento. Los downgrades requieren aviso de 30 días. Se aplicará un cargo prorrateado por la diferencia.'
      },
      {
        q: '¿Ofrecen descuentos por pagos anuales?',
        a: 'Sí, obtienes hasta 20% de descuento pagando anualmente. El descuento se aplica automáticamente al seleccionar facturación anual.'
      },
      {
        q: '¿Hay costos de configuración inicial?',
        a: 'No, todos nuestros planes incluyen configuración gratuita. Tu servicio estará listo en minutos después del pago.'
      },
      {
        q: '¿Qué métodos de pago aceptan?',
        a: 'Aceptamos tarjetas de crédito/débito (Visa, MasterCard, AMEX), transferencia bancaria SPEI, OXXO Pay y PayPal.'
      }
    ]
  },
  {
    category: 'Planes y Características',
    questions: [
      {
        q: '¿Cuál es la diferencia entre hosting compartido y VPS?',
        a: 'El hosting compartido comparte recursos con otros usuarios, mientras que VPS te da recursos dedicados y control root. VPS es mejor para sitios de alto tráfico o aplicaciones personalizadas.'
      },
      {
        q: '¿Todos los planes incluyen SSL gratis?',
        a: 'Sí, todos nuestros planes incluyen certificados SSL Let\'s Encrypt gratuitos con renovación automática. Los planes superiores incluyen SSL Wildcard.'
      },
      {
        q: '¿Qué incluye el soporte 24/7?',
        a: 'Soporte técnico completo vía chat, email y teléfono. Incluye ayuda con configuración, resolución de problemas y optimización básica.'
      },
      {
        q: '¿Los backups son realmente automáticos?',
        a: 'Sí, realizamos backups automáticos según el plan: semanales en Eco, diarios en Estándar/Performance, y snapshots en VPS/Dedicados.'
      },
      {
        q: '¿Puedo instalar cualquier software en VPS/Dedicados?',
        a: 'Sí, con acceso root completo puedes instalar cualquier software compatible con el sistema operativo elegido.'
      }
    ]
  },
  {
    category: 'Garantías y Políticas',
    questions: [
      {
        q: '¿Qué garantiza el SLA de uptime?',
        a: 'Garantizamos 99.5% uptime en hosting compartido, 99.9% en VPS y 99.99% en dedicados. Si no cumplimos, compensamos con créditos de servicio.'
      },
      {
        q: '¿Cómo funciona la garantía de 30 días?',
        a: 'Si no estás satisfecho en los primeros 30 días, cancelamos tu cuenta y reembolsamos completamente el hosting. No aplica a dominios o servicios adicionales.'
      },
      {
        q: '¿Puedo cancelar en cualquier momento?',
        a: 'Sí, puedes cancelar tu servicio en cualquier momento sin penalizaciones. Los servicios anuales no tienen reembolso después de 30 días.'
      },
      {
        q: '¿Qué pasa si mi sitio es hackeado?',
        a: 'Ofrecemos limpieza gratuita de malware en todos los planes. Los planes superiores incluyen monitoreo proactivo y protección avanzada.'
      },
      {
        q: '¿Ayudan con la migración desde otro proveedor?',
        a: 'Sí, ofrecemos migración gratuita en todos los planes de hosting. Para VPS/Dedicados proporcionamos asistencia técnica especializada.'
      }
    ]
  },
  {
    category: 'Técnico',
    questions: [
      {
        q: '¿En qué datacenters están ubicados los servidores?',
        a: 'Tenemos datacenters en Ciudad de México (principal), Dallas, Miami y Madrid. Puedes elegir la ubicación más cercana a tu audiencia.'
      },
      {
        q: '¿Qué versiones de PHP soportan?',
        a: 'Soportamos PHP 7.4, 8.0, 8.1, 8.2 y 8.3. Puedes cambiar la versión desde cPanel o mediante configuración del servidor.'
      },
      {
        q: '¿Incluyen CDN en todos los planes?',
        a: 'CDN está incluido desde el plan Estándar hacia arriba. El plan Eco puede agregarlo por $99/mes adicionales.'
      },
      {
        q: '¿Qué bases de datos soportan?',
        a: 'MySQL 5.7/8.0, PostgreSQL, MongoDB (en VPS/Dedicados), y Redis para caché. Backups automáticos incluidos.'
      },
      {
        q: '¿Proporcionan acceso SSH?',
        a: 'SSH está disponible en VPS y servidores dedicados. En hosting compartido ofrecemos acceso SFTP seguro.'
      }
    ]
  }
];

export function PricingFAQ() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openQuestions, setOpenQuestions] = useState<{[key: string]: boolean}>({});

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Respuestas a las preguntas más comunes sobre nuestros precios, planes y servicios.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {faqData.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === index
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-secondary-600 hover:bg-secondary-100'
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>

          {/* Questions */}
          <div className="grid gap-4">
            {faqData[activeCategory].questions.map((faq, questionIndex) => {
              const isOpen = openQuestions[`${activeCategory}-${questionIndex}`];
              return (
                <Card key={questionIndex} className="overflow-hidden">
                  <button
                    onClick={() => toggleQuestion(activeCategory, questionIndex)}
                    className="w-full text-left p-6 hover:bg-secondary-25 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-secondary-900 pr-4">
                        {faq.q}
                      </h3>
                      {isOpen ? (
                        <ChevronUpIcon className="h-5 w-5 text-secondary-500 flex-shrink-0" />
                      ) : (
                        <ChevronDownIcon className="h-5 w-5 text-secondary-500 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                  
                  {isOpen && (
                    <CardContent className="pt-0 pb-6">
                      <div className="text-secondary-700 leading-relaxed">
                        {faq.a}
                      </div>
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-sm">
            <h3 className="text-xl font-bold text-secondary-900 mb-4">
              ¿No encuentras tu respuesta?
            </h3>
            <p className="text-secondary-600 mb-6">
              Nuestro equipo de soporte está aquí para ayudarte con cualquier duda específica sobre precios o planes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                Contactar Soporte
              </a>
              <a
                href="https://wa.me/525547381829"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-base font-medium rounded-lg text-primary-600 bg-white hover:bg-primary-50 transition-colors"
              >
                Chat WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}