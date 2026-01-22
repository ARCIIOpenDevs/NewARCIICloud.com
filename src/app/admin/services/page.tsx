'use client';

import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { ServicesPage } from '@/components/services/ServicesPage';

export default function AdminServicesPage() {
  return (
    <AdminLayout 
      title="Gestión de Servicios" 
      subtitle="Administra hosting, dominios, VPS y más servicios"
    >
      <ServicesPage />
    </AdminLayout>
  );
}