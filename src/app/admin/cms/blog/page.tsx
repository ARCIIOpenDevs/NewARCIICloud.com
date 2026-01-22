'use client';

import React from 'react';

export default function BlogManagementPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">📝 Gestión del Blog</h1>
        <p className="text-gray-600">Administra artículos y contenido del blog técnico</p>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="text-center py-12">
          <div className="text-4xl mb-4">🚧</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Página en Construcción
          </h3>
          <p className="text-gray-600">
            El módulo de gestión del blog estará disponible próximamente
          </p>
        </div>
      </div>
    </div>
  );
}