import { Metadata } from 'next';
import { HeroSection } from '@/components/sections/developers/HeroSection';
import { TechnologiesSection } from '@/components/sections/developers/TechnologiesSection';
import { APISection } from '@/components/sections/developers/APISection';
import { DevToolsSection } from '@/components/sections/developers/DevToolsSection';
import { InfrastructureSection } from '@/components/sections/developers/InfrastructureSection';
import DocumentationSection from '@/components/sections/developers/DocumentationSection';
import CommunitySection from '@/components/sections/developers/CommunitySection';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Hosting para Desarrolladores - Infraestructura Cloud Avanzada | ARCIICloud',
  description: 'Hosting especializado para developers. SSH root, Git deployment, Docker, CI/CD, APIs REST, staging environments y herramientas avanzadas de desarrollo.',
  keywords: ['hosting developers', 'SSH root', 'Git deployment', 'Docker hosting', 'CI/CD', 'API hosting', 'staging environment', 'developer tools'],
  openGraph: {
    title: 'Hosting Especializado para Desarrolladores - ARCIICloud',
    description: 'Infraestructura cloud pensada para developers. Máximo control, herramientas avanzadas y flexibilidad total.',
    url: 'https://arciicloud.com/developers',
    type: 'website',
  },
};

export default function DevelopersPage() {
  return (
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
        description="Únete a miles de developers que confían en ARCIICloud para sus proyectos más ambiciosos"
        primaryAction={{
          text: "Comenzar Prueba Gratuita",
          href: "/trial?plan=developer"
        }}
        secondaryAction={{
          text: "Explorar Documentación",
          href: "/docs"
        }}
        bgColor="bg-secondary-900"
      />
    </main>
  );
}