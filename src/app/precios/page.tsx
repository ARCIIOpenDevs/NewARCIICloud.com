import type { Metadata } from 'next';
import { PricingHero } from '@/components/sections/pricing/PricingHero';
import { PricingPlans } from '@/components/sections/pricing/PricingPlans';
import { PricingComparison } from '@/components/sections/pricing/PricingComparison';
import { PricingFAQ } from '@/components/sections/pricing/PricingFAQ';
import { StructuredData } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'Precios Hosting México 2026 | Planes desde $299/mes | ARCII Cloud',
  description: '💰 Precios transparentes de hosting México 2026. Hosting web desde $299, VPS desde $899, servidores dedicados desde $4,999. SSL gratis, soporte 24/7. ¡Sin costos ocultos!',
  keywords: [
    'precios hosting mexico',
    'planes hosting mexico',
    'costo hosting web mexico',
    'precio vps mexico',
    'servidor dedicado precio mexico',
    'hosting barato mexico',
    'hosting economico mexico',
    'tarifas hosting mexico 2026'
  ],
  openGraph: {
    title: 'Precios Hosting México 2026 | Planes Transparentes',
    description: '📊 Precios claros sin sorpresas: Hosting web $299, VPS $899, Dedicados $4,999. SSL gratis, soporte incluido.',
    url: 'https://new.arciicloud.com/precios',
    type: 'website',
    images: [
      {
        url: '/images/og-precios.jpg',
        width: 1200,
        height: 630,
        alt: 'Precios Hosting México 2026 - ARCII Cloud',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Precios Hosting México | Transparentes y Sin Sorpresas',
    description: '💸 Precios honestos: Web $299, VPS $899, Dedicados $4,999. Todo incluido, sin costos ocultos.',
  },
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "PriceSpecification",
  "name": "Precios Hosting México 2026",
  "description": "Listado completo de precios para servicios de hosting web, VPS y servidores dedicados",
  "url": "https://new.arciicloud.com/precios",
  "priceCurrency": "MXN",
  "eligibleRegion": {
    "@type": "Country",
    "name": "México"
  }
};

export default function PreciosPage() {
  return (
    <>
      <StructuredData data={pricingSchema} />
      <main className="min-h-screen">
        <PricingHero />
        <PricingPlans />
        <PricingComparison />
        <PricingFAQ />
      </main>
    </>
  );
}