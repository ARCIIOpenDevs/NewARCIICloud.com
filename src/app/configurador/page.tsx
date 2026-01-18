import { Metadata } from 'next';
import { ServerConfigurator } from '@/components/tools/ServerConfigurator';
import { StructuredData } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'Configurador de Servidores México | Diseña tu Servidor Perfecto',
  description: '🛠️ Configurador GRATUITO de servidores México. Personaliza VPS, servidores dedicados y cloud instances. CPU, RAM, almacenamiento y más. ¡Precios en tiempo real desde $899/mes!',
  keywords: [
    'configurador servidor mexico',
    'servidor personalizado mexico', 
    'configurar vps mexico',
    'servidor dedicado personalizado',
    'cloud instance mexico',
    'hosting personalizado mexico',
    'vps configurar recursos',
    'servidor a medida mexico'
  ],
  openGraph: {
    title: 'Configurador de Servidores México | Personaliza tu Servidor',
    description: '⚙️ Diseña tu servidor perfecto con nuestro configurador avanzado. VPS, dedicados y cloud. Precios transparentes en tiempo real.',
    url: 'https://new.arciicloud.com/configurador',
    type: 'website',
    images: [
      {
        url: '/images/og-configurador.jpg',
        width: 1200,
        height: 630,
        alt: 'Configurador de Servidores México - ARCII Cloud',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Configurador de Servidores México | A tu Medida',
    description: '🔧 Configura tu servidor ideal: CPU, RAM, almacenamiento, región. Precios transparentes desde $899/mes. ¡Pruébalo gratis!',
  },
};

const configuratorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Configurador de Servidores México",
  "description": "Herramienta gratuita para diseñar y configurar servidores personalizados VPS, dedicados y cloud instances",
  "url": "https://new.arciicloud.com/configurador",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "MXN",
    "description": "Herramienta gratuita de configuración de servidores"
  }
};

export default function ConfiguratorPage() {
  return (
    <>
      <StructuredData data={configuratorSchema} />
      <main className="min-h-screen pt-20">
        <ServerConfigurator />
      </main>
    </>
  );
}