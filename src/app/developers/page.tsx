import { Metadata } from 'next';
import { HeroSection } from '@/components/sections/developers/HeroSection';
import { TechnologiesSection } from '@/components/sections/developers/TechnologiesSection';
import { APISection } from '@/components/sections/developers/APISection';
import { DevToolsSection } from '@/components/sections/developers/DevToolsSection';
import { InfrastructureSection } from '@/components/sections/developers/InfrastructureSection';
import DocumentationSection from '@/components/sections/developers/DocumentationSection';
import CommunitySection from '@/components/sections/developers/CommunitySection';
import CTASection from '@/components/sections/CTASection';
import { StructuredData } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'Hosting para Developers México | Infraestructura Cloud Avanzada',
  description: '👨‍💻 Hosting especializado para desarrolladores México. SSH root, Git deployment, Docker, CI/CD, APIs REST, staging environments. ¡Máximo control desde $599/mes!',
  keywords: [
    'hosting developers mexico',
    'hosting programadores mexico', 
    'ssh root hosting mexico',
    'git deployment mexico',
    'docker hosting mexico',
    'cicd hosting mexico',
    'api hosting mexico',
    'staging environment',
    'developer tools mexico',
    'nodejs hosting mexico',
    'python hosting mexico',
    'php hosting mexico'
  ],
  openGraph: {
    title: 'Hosting para Developers México | Infraestructura Avanzada',
    description: '🚀 Hosting pensado para programadores: SSH root, Docker, Git hooks, CI/CD, staging. Máximo control y flexibilidad.',
    url: 'https://new.arciicloud.com/developers',
    type: 'website',
    images: [
      {
        url: '/images/og-developers.jpg',
        width: 1200,
        height: 630,
        alt: 'Hosting para Developers México - ARCII Cloud',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hosting Developers México | SSH, Docker, CI/CD',
    description: '⚡ Hosting avanzado para programadores: SSH root, Docker, Git deployment, staging environments. ¡Control total!',
  },
};

const developersSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Hosting para Desarrolladores México",
  "provider": {
    "@type": "Organization",
    "name": "ARCII Cloud"
  },
  "description": "Servicio de hosting especializado para desarrolladores con herramientas avanzadas",
  "serviceType": "Developer Hosting",
  "areaServed": {
    "@type": "Country",
    "name": "México"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Planes Developer",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Developer Starter",
        "price": "599",
        "priceCurrency": "MXN",
        "description": "Plan básico con SSH y Git deployment"
      },
      {
        "@type": "Offer", 
        "name": "Developer Pro",
        "price": "1299",
        "priceCurrency": "MXN",
        "description": "Plan avanzado con Docker y CI/CD"
      }
    ]
  }
};

export default function DevelopersPage() {
  return (
    <>
      <StructuredData data={developersSchema} />
      <main className="min-h-screen">
        <HeroSection />
        <TechnologiesSection />
        <APISection />
        <DevToolsSection />
        <InfrastructureSection />
        <DocumentationSection />
        <CommunitySection />
        <CTASection 
          title="¿Listo para Desarrollar sin Límites?"
          description="Únete a miles de developers que confían en ARCII Cloud para sus proyectos más ambiciosos"
          primaryAction={{
            text: "Comenzar Prueba Gratuita",
            href: "/configurador?type=developer"
          }}
          secondaryAction={{
            text: "Ver Documentación",
            href: "/docs"
          }}
          bgColor="bg-secondary-900"
        />
      </main>
    </>
  );
}