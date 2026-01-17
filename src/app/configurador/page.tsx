import { Metadata } from 'next';
import { ServerConfigurator } from '@/components/tools/ServerConfigurator';

export const metadata: Metadata = {
  title: 'Configurador de Servidores - Diseña tu Servidor Ideal | ARCIICloud',
  description: 'Configura tu servidor personalizado con las especificaciones exactas que necesitas. VPS, servidores dedicados y cloud instances con precios en tiempo real.',
  keywords: ['configurador servidor', 'servidor personalizado', 'VPS configurar', 'servidor dedicado', 'cloud instance', 'hosting personalizado'],
  openGraph: {
    title: 'Configurador de Servidores Personalizado - ARCIICloud',
    description: 'Diseña tu servidor ideal con nuestro configurador interactivo. Especificaciones exactas, precios en tiempo real.',
    url: 'https://arciicloud.com/configurador',
    type: 'website',
  },
};

export default function ConfiguratorPage() {
  return (
    <main className="min-h-screen">
      <ServerConfigurator />
    </main>
  );
}