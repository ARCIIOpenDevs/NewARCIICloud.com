import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hosting-web/HeroSection';
import { PlansSection } from '@/components/sections/hosting-web/PlansSection';
import { FeaturesSection } from '@/components/sections/hosting-web/FeaturesSection';
import { ComparisonSection } from '@/components/sections/hosting-web/ComparisonSection';
import { FAQSection } from '@/components/sections/hosting-web/FAQSection';
import { StructuredData } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'Hosting Web México | WordPress y Sitios Web desde $299/mes',
  description: '🌐 Hosting web premium México con SSD NVMe, SSL gratis, backups automáticos, cPanel y soporte 24/7. Garantía uptime 99.9%. ¡Ideal para WordPress desde $299/mes!',
  keywords: [
    'hosting web mexico',
    'hosting wordpress mexico',
    'hosting cpanel mexico',
    'hosting ssd mexico',
    'hosting economico mexico',
    'hosting rapido mexico',
    'hosting confiable mexico',
    'hosting ssl gratis',
    'hosting backup automatico',
    'hosting soporte 24/7'
  ],
  openGraph: {
    title: 'Hosting Web México | WordPress Premium desde $299/mes',
    description: '✨ Hosting web de calidad: SSD NVMe, SSL gratis, cPanel, backups automáticos. 99.9% uptime garantizado. ¡Perfecto para WordPress!',
    url: 'https://new.arciicloud.com/negocios/hosting-web',
    type: 'website',
    images: [
      {
        url: '/images/og-hosting-web.jpg',
        width: 1200,
        height: 630,
        alt: 'Hosting Web México - ARCII Cloud',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hosting Web México | WordPress desde $299/mes',
    description: '🔥 Hosting premium: SSD NVMe, SSL gratis, cPanel, soporte 24/7. 99.9% uptime. ¡Ideal para WordPress!',
  },
};

const hostingWebSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Hosting Web México",
  "provider": {
    "@type": "Organization",
    "name": "ARCII Cloud"
  },
  "description": "Servicio de hosting web optimizado para WordPress y sitios web empresariales",
  "serviceType": "Web Hosting",
  "areaServed": {
    "@type": "Country",
    "name": "México"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Planes de Hosting Web",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Hosting Eco",
        "price": "299",
        "priceCurrency": "MXN",
        "description": "Plan básico ideal para sitios web pequeños"
      },
      {
        "@type": "Offer", 
        "name": "Hosting Estándar",
        "price": "599",
        "priceCurrency": "MXN",
        "description": "Plan intermedio para sitios profesionales"
      },
      {
        "@type": "Offer",
        "name": "Hosting Performance", 
        "price": "999",
        "priceCurrency": "MXN",
        "description": "Plan avanzado para sitios de alto tráfico"
      }
    ]
  }
};

export default function HostingWebPage() {
  return (
    <>
      <StructuredData data={hostingWebSchema} />
      <main className="min-h-screen">
        <HeroSection />
        <PlansSection />
        <FeaturesSection />
        <ComparisonSection />
        <FAQSection />
      </main>
    </>
  );
}