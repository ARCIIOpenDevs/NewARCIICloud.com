import { Metadata } from 'next';
import { HeroSection } from '@/components/sections/ecommerce/HeroSection';
import { PlatformSection } from '@/components/sections/ecommerce/PlatformSection';
import { FeaturesSection } from '@/components/sections/ecommerce/FeaturesSection';
import { SolutionsSection } from '@/components/sections/ecommerce/SolutionsSection';
import { CaseStudiesSection } from '@/components/sections/ecommerce/CaseStudiesSection';
import { SecuritySection } from '@/components/sections/ecommerce/SecuritySection';
import { SupportSection } from '@/components/sections/ecommerce/SupportSection';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Hosting para eCommerce - Tiendas Online de Alto Rendimiento | ARCIICloud',
  description: 'Hosting optimizado para WooCommerce, Shopify, Magento y PrestaShop. Infraestructura de alta velocidad para tiendas online con máxima seguridad y soporte especializado.',
  keywords: ['hosting ecommerce', 'WooCommerce hosting', 'tienda online', 'hosting Shopify', 'hosting Magento', 'hosting PrestaShop', 'comercio electrónico'],
  openGraph: {
    title: 'Hosting Especializado para eCommerce - ARCIICloud',
    description: 'Potencia tu tienda online con nuestro hosting optimizado para plataformas de eCommerce. Velocidad, seguridad y soporte especializado.',
    url: 'https://arciicloud.com/ecommerce',
    type: 'website',
  },
};

export default function EcommercePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PlatformSection />
      <FeaturesSection />
      <SolutionsSection />
      <CaseStudiesSection />
      <SecuritySection />
      <SupportSection />
      <CTASection 
        title="¿Listo para Lanzar tu Tienda Online?"
        description="Obtén un hosting optimizado para eCommerce con todas las herramientas que necesitas para vender en línea"
        primaryAction={{
          text: "Comenzar Ahora",
          href: "/contacto?plan=ecommerce"
        }}
        secondaryAction={{
          text: "Ver Demo Gratuito",
          href: "/demo"
        }}
        bgColor="bg-primary-900"
      />
    </main>
  );
}