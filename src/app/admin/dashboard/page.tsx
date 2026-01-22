'use client';

import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { DashboardContent } from './DashboardContent';

export default function AdminDashboard() {
  return (
    <AdminLayout 
      title="Dashboard" 
      subtitle="Resumen general del sistema ARCIICloud.com"
    >
      <div className="p-6">
        <DashboardContent />
      </div>
    </AdminLayout>
  );
}