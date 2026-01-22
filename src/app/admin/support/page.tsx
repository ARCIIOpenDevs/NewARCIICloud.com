'use client';

import { Suspense } from 'react';
import SupportContent from './SupportContent';

export default function SupportPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2">Cargando sistema de soporte...</span>
        </div>
      }>
        <SupportContent />
      </Suspense>
    </div>
  );
}