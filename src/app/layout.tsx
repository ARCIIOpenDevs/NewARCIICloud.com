import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'ARCII Cloud - El Hosting #1 de México',
    template: '%s | ARCII Cloud',
  },
  description: 'ARCII Cloud es una empresa dedicada a la comercialización de servicios de infraestructura en la nube, como hosting web, hosting para agencias, correo electrónico y bases de datos como servicios.',
  keywords: [
    'hosting mexico',
    'cloud hosting',
    'servidores dedicados',
    'vps mexico',
    'hosting empresarial',
    'dominios mexico',
    'email corporativo',
    'datacenter mexico'
  ],
  authors: [{ name: 'ARCII Cloud Team' }],
  creator: 'ARCII Cloud',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://arciicloud.com',
    siteName: 'ARCII Cloud',
    title: 'ARCII Cloud - El Hosting #1 de México',
    description: 'Servicios de hosting web, cloud, servidores dedicados y soluciones empresariales con centros de datos en todo el mundo.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ARCII Cloud - Hosting Premium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARCII Cloud - El Hosting #1 de México',
    description: 'Servicios de hosting web, cloud, servidores dedicados y soluciones empresariales.',
    creator: '@arciicloud',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-secondary-900">
        <Header />
        <div id="__next">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}