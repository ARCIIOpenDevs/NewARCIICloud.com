import type { Metadata } from 'next';
import { LoginForm } from '@/components/auth/LoginForm';

export const metadata: Metadata = {
  title: 'Iniciar Sesión - Panel de Administración | ARCII Cloud',
  description: 'Accede al panel de administración del CRM/ERP de ARCII Cloud. Gestiona clientes, servicios, facturación y más.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLoginPage() {
  return <LoginForm redirect="/admin/dashboard" />;
}