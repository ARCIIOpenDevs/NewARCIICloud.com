'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-red-600 mb-4">500</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Error interno del servidor
          </h2>
          <p className="text-gray-600 mb-8">
            Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo.
          </p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={reset}
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors mr-4"
          >
            Intentar de nuevo
          </button>
          
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
          >
            Ir al inicio
          </Link>
          
          <div className="mt-6">
            <p className="text-sm text-gray-500">
              Si el problema persiste,{' '}
              <Link
                href="/contacto"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                contáctanos
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}