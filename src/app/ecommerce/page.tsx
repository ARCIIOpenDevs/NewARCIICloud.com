import { Metadata } from 'next';
import { HeroSection } from '@/components/sections/ecommerce/HeroSection';
import { PlatformSection } from '@/components/sections/ecommerce/PlatformSection';
import { FeaturesSection } from '@/components/sections/ecommerce/FeaturesSection';
import { SolutionsSection } from '@/components/sections/ecommerce/SolutionsSection';
import { CaseStudiesSection } from '@/components/sections/ecommerce/CaseStudiesSection';
import { SecuritySection } from '@/components/sections/ecommerce/SecuritySection';
import { SupportSection } from '@/components/sections/ecommerce/SupportSection';
import CTASection from '@/components/sections/CTASection';
import { StructuredData } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'Hosting eCommerce México | Tiendas Online WooCommerce y Shopify',
  description: '🛒 Hosting especializado para tiendas online México. Optimizado para WooCommerce, Shopify, Magento. SSL gratis, CDN, backups automáticos. ¡Vende más desde $899/mes!',
  keywords: [
    'hosting ecommerce mexico',
    'woocommerce hosting mexico',
    'tienda online hosting',
    'hosting shopify mexico',
    'hosting magento mexico',
    'prestashop hosting mexico',
    'comercio electronico hosting',
    'hosting tienda virtual',
    'ecommerce hosting rapido',
    'ssl tienda online',
    'hosting optimizado ventas'
  ],
  openGraph: {
    title: 'Hosting eCommerce México | Tiendas Online de Alto Rendimiento',
    description: '💰 Hosting optimizado para tiendas online: WooCommerce, Shopify, Magento. Velocidad extrema, SSL gratis, soporte especializado.',
    url: 'https://new.arciicloud.com/ecommerce',
    type: 'website',
    images: [
      {
        url: '/images/og-ecommerce.jpg',
        width: 1200,
        height: 630,
        alt: 'Hosting eCommerce México - ARCII Cloud',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hosting eCommerce México | Tiendas de Alto Rendimiento',
    description: '🚀 Hosting optimizado para ventas online: WooCommerce, Shopify, Magento. Velocidad, seguridad y soporte especializado.',
  },
};

const ecommerceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Hosting para eCommerce México",
  "provider": {
    "@type": "Organization",
    "name": "ARCII Cloud"
  },
  "description": "Servicio de hosting especializado para tiendas online y comercio electrónico",
  "serviceType": "eCommerce Hosting",
  "areaServed": {
    "@type": "Country",
    "name": "México"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Planes eCommerce",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "eCommerce Starter",
        "price": "899",
        "priceCurrency": "MXN",
        "description": "Plan básico para tiendas pequeñas"
      },
      {
        "@type": "Offer", 
        "name": "eCommerce Business",
        "price": "1599",
        "priceCurrency": "MXN",
        "description": "Plan avanzado para tiendas en crecimiento"
      },
      {
        "@type": "Offer",
        "name": "eCommerce Enterprise", 
        "price": "2999",
        "priceCurrency": "MXN",
        "description": "Plan empresarial para grandes tiendas"
      }
    ]
  }
};

export default function EcommercePage() {
  return (
    <>
      <StructuredData data={ecommerceSchema} />
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
          description="Obtén un hosting optimizado para eCommerce con todas las herramientas que necesitas para vender más"
          primaryAction={{
            text: "Comenzar Ahora",
            href: "/configurador?type=ecommerce"
          }}
          secondaryAction={{
            text: "Ver Demo Gratuito",
            href: "/contacto?demo=ecommerce"
          }}
          bgColor="bg-primary-900"
        />
      </main>
    </>
  );
}