import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hosting-web/HeroSection';
import { PlansSection } from '@/components/sections/hosting-web/PlansSection';
import { FeaturesSection } from '@/components/sections/hosting-web/FeaturesSection';
import { ComparisonSection } from '@/components/sections/hosting-web/ComparisonSection';
import { FAQSection } from '@/components/sections/hosting-web/FAQSection';

export const metadata: Metadata = {
  title: 'Hosting Web - Planes Optimizados para WordPress y Sitios Web',
  description: 'Hosting web premium con SSD NVMe, SSL gratis, backups automáticos y soporte 24/7. Planes desde $299/mes con garantía de uptime 99.9%.',
};

export default function HostingWebPage() {
  return (
    <>
      <HeroSection />
      <PlansSection />
      <FeaturesSection />
      <ComparisonSection />
      <FAQSection />
    </>
  );
}