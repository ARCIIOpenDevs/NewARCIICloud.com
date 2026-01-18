import { Metadata } from 'next';
import ContactForm from '@/components/forms/ContactForm';
import { StructuredData } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'Contacto Hosting México | Soporte 24/7 y Ventas | ARCII Cloud',
  description: '📞 Contacta GRATIS a nuestros expertos en hosting México. Soporte técnico 24/7, ventas especializadas, chat en vivo. ¡Respuesta garantizada en menos de 2 horas!',
  keywords: [
    'contacto hosting mexico',
    'soporte tecnico hosting',
    'soporte 24/7 mexico',
    'chat hosting mexico',
    'telefono hosting',
    'contactar arciicloud',
    'ventas hosting mexico',
    'asesoria hosting'
  ],
  openGraph: {
    title: 'Contacto Hosting México | Soporte 24/7 | ARCII Cloud',
    description: '🎯 Habla con nuestros expertos AHORA. Soporte técnico 24/7, ventas especializadas, chat en vivo. ¡Te ayudamos con tu proyecto!',
    url: 'https://new.arciicloud.com/contacto',
    type: 'website',
    images: [
      {
        url: '/images/og-contacto.jpg',
        width: 1200,
        height: 630,
        alt: 'Contacto Hosting México - ARCII Cloud',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto Hosting México | Te Ayudamos 24/7',
    description: '💬 Soporte técnico 24/7, chat en vivo, email especializado. ¡Nuestros expertos te esperan!',
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contacto ARCII Cloud",
  "description": "Página de contacto para soporte técnico, ventas y consultas generales",
  "url": "https://new.arciicloud.com/contacto",
  "mainEntity": {
    "@type": "Organization",
    "name": "ARCII Cloud",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+52-55-4738-1829",
        "contactType": "technical support",
        "availableLanguage": "Spanish",
        "hoursAvailable": "24/7"
      },
      {
        "@type": "ContactPoint",
        "email": "ventas@arciicloud.com",
        "contactType": "sales",
        "availableLanguage": "Spanish"
      }
    ]
  }
};

export default function ContactPage() {
  return (
    <>
      <StructuredData data={contactSchema} />
      <main className="min-h-screen pt-20">
        <ContactForm />
      </main>
    </>
  );
}