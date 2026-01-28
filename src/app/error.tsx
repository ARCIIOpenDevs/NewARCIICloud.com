'use client';

import React from 'react';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div suppressHydrationWarning style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#fef2f2',
      color: '#991b1b'
    }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '1rem'
      }}>¡Algo salió mal!</h1>
      <p style={{
        fontSize: '1.125rem',
        marginBottom: '2rem',
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button 
          onClick={reset}
          style={{
            backgroundColor: '#dc2626',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            border: 'none',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
        >
          Intentar de nuevo
        </button>
        <a 
          href="/"
          style={{
            backgroundColor: '#6b7280',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'background-color 0.2s'
          }}
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
}