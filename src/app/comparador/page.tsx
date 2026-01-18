import type { Metadata } from 'next';
import { PlansComparator } from '@/components/tools/PlansComparator';

export const metadata: Metadata = {
  title: 'Comparador de Planes Hosting México | Compara Precios y Recursos',
  description: '🔥 Comparador GRATIS de planes de hosting México. Compara hosting web, VPS Cloud y servidores dedicados lado a lado. Encuentra el plan perfecto para tu proyecto. ¡Análisis detallado!',
  keywords: [
    'comparar planes hosting mexico',
    'comparador hosting web',
    'diferencias planes hosting',
    'hosting vs vps mexico',
    'mejores planes hosting',
    'comparar precios hosting',
    'hosting economico vs premium',
    'vps vs dedicado mexico'
  ],
  openGraph: {
    title: 'Comparador de Planes Hosting México | ARCII Cloud',
    description: '⚡ Herramienta GRATUITA para comparar todos los planes de hosting. Hosting web, VPS Cloud y dedicados lado a lado. ¡Encuentra tu plan ideal!',
    images: [
      {
        url: '/images/og-comparador.jpg',
        width: 1200,
        height: 630,
        alt: 'Comparador de Planes Hosting México - ARCII Cloud',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comparador Hosting México | Todos los Planes',
    description: '📊 Compara TODOS los planes de hosting lado a lado. Recursos, precios y características. ¡Encuentra tu plan ideal!',
  },
};

export default function ComparadorPage() {
  return (
    <div className="pt-20">
      <PlansComparator />
    </div>
  );
}