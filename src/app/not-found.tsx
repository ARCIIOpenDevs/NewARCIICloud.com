'use client';

import React from 'react';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <title>404 - Page Not Found</title>
        <meta name="robots" content="noindex" />
      </head>
      <body suppressHydrationWarning>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          backgroundColor: '#f9fafb',
          color: '#374151'
        }}>
          <h1 style={{
            fontSize: '6rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#6b7280'
          }}>404</h1>
          <p style={{
            fontSize: '1.125rem',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>Esta página no pudo ser encontrada.</p>
          <a 
            href="/"
            style={{
              backgroundColor: '#3b82f6',
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
      </body>
    </html>
  );
}