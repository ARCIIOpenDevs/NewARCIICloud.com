import { Metadata } from 'next';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto - Habla con Nuestros Expertos | ARCIICloud',
  description: 'Contáctanos para una consulta personalizada. Nuestro equipo de expertos está listo para ayudarte con tu proyecto de hosting y cloud computing.',
  keywords: ['contacto', 'soporte', 'consulta', 'expertos hosting', 'soporte técnico', 'chat en vivo'],
  openGraph: {
    title: 'Contacta a Nuestros Expertos - ARCIICloud',
    description: 'Obtén una consulta personalizada para tu proyecto. Chat 24/7, teléfono y email disponibles.',
    url: 'https://arciicloud.com/contacto',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactForm />
    </main>
  );
}