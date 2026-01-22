'use client';

import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { ClientsPage } from '@/components/clients/ClientsPage';

export default function AdminClientsPage() {
  return (
    <AdminLayout 
      title="Gestión de Clientes" 
      subtitle="Administra todos los clientes de ARCIICloud.com"
    >
      <ClientsPage />
    </AdminLayout>
  );
}