'use client';

import { ArrowRightIcon, ChatBubbleLeftRightIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  primaryAction?: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  bgColor?: string;
  variant?: 'default' | 'ecommerce' | 'developers';
}

export default function CTASection({ 
  title = "¿Listo para Transformar tu Negocio?",
  subtitle = "Únete a miles de empresas que ya confían en ARCIICloud para sus soluciones de hosting y cloud computing.",
  description,
  primaryCTA = "Comenzar Ahora",
  secondaryCTA = "Hablar con Ventas",
  primaryAction,
  secondaryAction,
  bgColor,
  variant = 'default'
}: CTASectionProps) {
  
  const getVariantStyles = () => {
    switch (variant) {
      case 'ecommerce':
        return {
          bgClass: 'bg-gradient-to-r from-emerald-600 via-primary-600 to-blue-600',
          title: "Impulsa tu E-commerce al Siguiente Nivel",
          subtitle: "Hosting optimizado para tiendas online con 99.9% uptime garantizado y soporte 24/7.",
          primaryCTA: "Migrar mi Tienda",
          secondaryCTA: "Ver Planes E-commerce"
        };
      case 'developers':
        return {
          bgClass: 'bg-gradient-to-r from-purple-600 via-primary-600 to-indigo-600',
          title: "Desarrolla sin Límites",
          subtitle: "Plataforma cloud diseñada por developers, para developers. Deploy, scale y monitorea con facilidad.",
          primaryCTA: "Crear Cuenta Gratis",
          secondaryCTA: "Ver Documentación"
        };
      default:
        return {
          bgClass: 'bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600',
          title,
          subtitle,
          primaryCTA,
          secondaryCTA
        };
    }
  };

  const styles = getVariantStyles();

  const features = [
    "Setup en menos de 5 minutos",
    "Migración gratuita asistida",
    "99.9% de uptime garantizado",
    "Soporte técnico 24/7"
  ];

  return (
    <section className={`py-20 ${styles.bgClass} relative overflow-hidden`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            {title || styles.title}
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-4xl mx-auto">
            {description || subtitle || styles.subtitle}
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center gap-2 text-white/90">
                <ArrowRightIcon className="h-4 w-4 text-white" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              variant="secondary" 
              size="xl"
              className="bg-white text-primary-600 hover:bg-white/90 shadow-2xl min-w-[200px]"
              onClick={() => primaryAction ? window.location.href = primaryAction.href : undefined}
            >
              {primaryAction?.text || primaryCTA || styles.primaryCTA}
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-white/30 text-white hover:bg-white/10 min-w-[200px]"
              onClick={() => secondaryAction ? window.location.href = secondaryAction.href : undefined}
            >
              {secondaryAction?.text || secondaryCTA || styles.secondaryCTA}
            </Button>
          </div>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-3 text-white/80">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <PhoneIcon className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium">Llamada directa</p>
                <p className="text-xs">+52 55 1234 5678</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-white/80">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <ChatBubbleLeftRightIcon className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium">Chat en vivo</p>
                <p className="text-xs">Disponible 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-16 pt-8 border-t border-white/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white/70 text-sm mb-6">
            Más de 10,000 clientes confían en ARCIICloud
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder para logos de clientes */}
            <div className="h-8 w-24 bg-white/20 rounded"></div>
            <div className="h-8 w-24 bg-white/20 rounded"></div>
            <div className="h-8 w-24 bg-white/20 rounded"></div>
            <div className="h-8 w-24 bg-white/20 rounded"></div>
            <div className="h-8 w-24 bg-white/20 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
}