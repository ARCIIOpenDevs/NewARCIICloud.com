'use client';

import { Suspense } from 'react';
import CMSContent from './CMSContent';

export default function CMSPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          📚 Sistema de Gestión de Contenido
        </h1>
        <p className="text-gray-600">
          Administra todo el contenido dinámico de ARCIICloud.com
        </p>
      </div>
      
      <Suspense fallback={
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2">Cargando CMS...</span>
        </div>
      }>
        <CMSContent />
      </Suspense>
    </div>
  );
}