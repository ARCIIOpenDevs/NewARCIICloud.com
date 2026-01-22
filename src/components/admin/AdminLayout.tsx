'use client';

import React, { useState } from 'react';
import { withAuth } from '@/components/auth/withAuth';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Componente de navegación lateral
const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const { user, signOut } = useAuth();

  const menuItems = [
    { 
      name: 'Dashboard', 
      href: '/admin/dashboard', 
      icon: '📊',
      description: 'Resumen general'
    },
    { 
      name: 'Clientes', 
      href: '/admin/clients', 
      icon: '👥',
      description: 'Gestión de clientes'
    },
    { 
      name: 'Servicios', 
      href: '/admin/services', 
      icon: '🛠️',
      description: 'Hosting, VPS, dominios'
    },
    { 
      name: 'Facturación', 
      href: '/admin/billing', 
      icon: '💰',
      description: 'Facturas y pagos'
    },
    { 
      name: 'Soporte', 
      href: '/admin/support', 
      icon: '🎧',
      description: 'Tickets y mesa de ayuda'
    },
    { 
      name: 'CMS', 
      href: '/admin/cms', 
      icon: '📝',
      description: 'Contenido del sitio'
    },
    { 
      name: 'Reportes', 
      href: '/admin/reports', 
      icon: '📈',
      description: 'Analytics y reportes'
    },
    { 
      name: 'Configuración', 
      href: '/admin/settings', 
      icon: '⚙️',
      description: 'Configuración del sistema'
    },
  ];

  return (
    <div className="w-64 bg-white shadow-lg h-screen overflow-y-auto">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">ARCIICloud</h2>
            <p className="text-sm text-gray-500">Admin Panel</p>
          </div>
        </div>
      </div>

      <nav className="mt-6">
        <div className="px-3 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.description}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">
              {user?.email?.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {user?.displayName || 'Admin'}
            </p>
            <p className="text-xs text-gray-500 truncate">{user?.email}</p>
          </div>
        </div>
        
        <button
          onClick={signOut}
          className="w-full flex items-center px-3 py-2 text-sm font-medium text-red-600 rounded-md hover:text-red-700 hover:bg-red-50 transition-colors"
        >
          <span className="mr-3">🚪</span>
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

// Componente de header
const Header: React.FC<{ title?: string; subtitle?: string }> = ({ 
  title, 
  subtitle 
}) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-6 py-4">
        {title && (
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            {subtitle && (
              <p className="text-gray-600 mt-1">{subtitle}</p>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

// Layout principal del admin
interface AdminLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ 
  children, 
  title, 
  subtitle 
}) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={title} subtitle={subtitle} />
        
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default withAuth(AdminLayout);