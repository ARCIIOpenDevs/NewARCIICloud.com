import type { Metadata } from 'next';
import DashboardPageContent from './DashboardContent';

export const metadata: Metadata = {
  title: 'Panel de Control | ARCIICloud',
  description: 'Gestiona todos tus servicios de hosting, VPS y dominios desde un panel único. Estadísticas en tiempo real, facturación, soporte técnico y más.',
  alternates: {
    canonical: '/dashboard',
  },
};

export default function DashboardPage() {
  return <DashboardPageContent />;
}