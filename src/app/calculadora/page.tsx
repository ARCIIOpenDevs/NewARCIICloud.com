import type { Metadata } from 'next';
import { PricingCalculator } from '@/components/tools/PricingCalculator';

export const metadata: Metadata = {
  title: 'Calculadora de Precios Hosting México | Encuentra tu Plan Ideal',
  description: '🔥 Calculadora GRATUITA de hosting México. Compara precios de hosting web, VPS Cloud, dominios y email corporativo. Encuentra el plan perfecto para tu proyecto. ¡Planes desde $299/mes!',
  keywords: [
    'calculadora hosting mexico',
    'precios hosting web',
    'comparar planes hosting',
    'calculadora vps mexico',
    'hosting barato mexico',
    'calculadora precios web',
    'planes hosting wordpress',
    'hosting cpanel mexico'
  ],
  openGraph: {
    title: 'Calculadora de Precios Hosting México | ARCII Cloud',
    description: '✨ Herramienta GRATUITA para calcular el costo de tu hosting. Compara planes, recursos y precios. Hosting desde $299/mes con SSL gratis.',
    images: [
      {
        url: '/images/og-calculadora.jpg',
        width: 1200,
        height: 630,
        alt: 'Calculadora de Precios Hosting México - ARCII Cloud',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora Hosting México | Precios desde $299',
    description: '💰 Calcula el precio exacto de tu hosting. Herramienta gratuita con planes personalizados. ¡Descubre tu plan ideal!',
  },
};

export default function CalculadoraPage() {
  return (
    <div className="pt-20">
      <PricingCalculator />
    </div>
  );
}