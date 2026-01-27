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
  metadataBase: new URL('https://new.arciicloud.com'),
  title: {
    default: 'ARCII Cloud - Hosting Premium México | Servidores VPS y Dominios',
    template: '%s | ARCII Cloud',
  },
  description: 'Líder en hosting web México con 99.9% uptime garantizado. Hosting WordPress, VPS Cloud, servidores dedicados, dominios .mx y email corporativo. Soporte 24/7 desde $299/mes.',
  keywords: [
    'hosting mexico',
    'hosting web mexico', 
    'cloud hosting',
    'wordpress hosting mexico',
    'servidores dedicados mexico',
    'vps mexico',
    'vps cloud',
    'hosting empresarial',
    'dominios mexico',
    'dominios .mx',
    'email corporativo mexico',
    'datacenter mexico',
    'hosting barato mexico',
    'mejor hosting mexico 2026',
    'cpanel hosting',
    'ssl certificado',
    'backup hosting'
  ],
  authors: [{ name: 'ARCII Cloud Development Team' }],
  creator: 'ARCII Cloud',
  publisher: 'ARCII Cloud',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    alternateLocale: ['es_ES', 'en_US'],
    url: 'https://new.arciicloud.com',
    siteName: 'ARCII Cloud',
    title: 'ARCII Cloud - Hosting Premium México | El #1 en Confiabilidad',
    description: '🚀 Hosting web premium con 99.9% uptime. VPS Cloud desde $899/mes. SSL gratis, backups automáticos y soporte 24/7. 15+ años de experiencia. ¡Pruébalo gratis!',
    images: [
      {
        url: '/images/og-image-main.jpg',
        width: 1200,
        height: 630,
        alt: 'ARCII Cloud - Hosting Premium México',
        type: 'image/jpeg',
      },
      {
        url: '/images/og-image-square.jpg',
        width: 400,
        height: 400,
        alt: 'ARCII Cloud Logo',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@arciicloud',
    creator: '@arciicloud',
    title: 'ARCII Cloud - Hosting Premium México | VPS y Dominios',
    description: '🔥 El hosting más confiable de México. 99.9% uptime, SSL gratis, soporte 24/7. Planes desde $299/mes. ¡15 años de experiencia te respaldan!',
    images: [
      {
        url: '/images/twitter-card.jpg',
        width: 1200,
        height: 600,
        alt: 'ARCII Cloud - Hosting Premium México',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon-16x16.png',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'tu-codigo-google-verification',
    other: {
      'msvalidate.01': 'tu-codigo-bing-verification',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning={true}>
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