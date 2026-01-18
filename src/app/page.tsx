import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Features } from '@/components/sections/Features';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';
import { StructuredData, organizationSchema, hostingServiceSchema, faqSchema } from '@/components/seo/StructuredData';

export default function HomePage() {
  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={hostingServiceSchema} />
      <StructuredData data={faqSchema} />
      <main>
        <Hero />
        <Services />
        <Features />
        <Testimonials />
        <CTA />
      </main>
    </>
  );
}