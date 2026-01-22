'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/ButtonCRM';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const navigation = [
    {
      name: 'Dashboard',
      href: '/admin',
      icon: '📊',
      active: pathname === '/admin'
    },
    {
      name: 'Clientes',
      href: '/admin/clients',
      icon: '👥',
      active: pathname.startsWith('/admin/clients')
    },
    {
      name: 'Servicios',
      href: '/admin/services',
      icon: '🛠️',
      active: pathname.startsWith('/admin/services')
    },
    {
      name: 'Facturación',
      href: '/admin/billing',
      icon: '💰',
      active: pathname.startsWith('/admin/billing')
    },
    {
      name: 'Soporte',
      href: '/admin/support',
      icon: '🎫',
      active: pathname.startsWith('/admin/support'),
      submenu: [
        {
          name: 'Tickets',
          href: '/admin/support',
          icon: '📝',
          active: pathname === '/admin/support'
        },
        {
          name: 'Nuevo Ticket',
          href: '/admin/support/nuevo-ticket',
          icon: '➕',
          active: pathname === '/admin/support/nuevo-ticket'
        },
        {
          name: 'Agentes',
          href: '/admin/support/agentes',
          icon: '👤',
          active: pathname === '/admin/support/agentes'
        },
        {
          name: 'Reportes',
          href: '/admin/support/reportes',
          icon: '📊',
          active: pathname === '/admin/support/reportes'
        }
      ]
    },
    {
      name: 'CMS',
      href: '/admin/cms',
      icon: '📚',
      active: pathname.startsWith('/admin/cms'),
      submenu: [
        {
          name: 'Dashboard',
          href: '/admin/cms',
          icon: '🏠',
          active: pathname === '/admin/cms'
        },
        {
          name: 'Páginas',
          href: '/admin/cms/pages',
          icon: '📄',
          active: pathname.startsWith('/admin/cms/pages')
        },
        {
          name: 'Blog',
          href: '/admin/cms/blog',
          icon: '📝',
          active: pathname.startsWith('/admin/cms/blog')
        },
        {
          name: 'Testimonios',
          href: '/admin/cms/testimonios',
          icon: '💬',
          active: pathname.startsWith('/admin/cms/testimonios')
        },
        {
          name: 'Medios',
          href: '/admin/cms/media',
          icon: '🖼️',
          active: pathname.startsWith('/admin/cms/media')
        },
        {
          name: 'Configuración',
          href: '/admin/cms/configuracion',
          icon: '⚙️',
          active: pathname.startsWith('/admin/cms/configuracion')
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className={`bg-white shadow-lg transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-64'
      }`}>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className={`flex items-center ${collapsed ? 'justify-center' : ''}`}>
              <span className="text-2xl">⚡</span>
              {!collapsed && (
                <h1 className="ml-2 text-xl font-bold text-gray-900">ARCII Admin</h1>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCollapsed(!collapsed)}
              className="p-2"
            >
              {collapsed ? '→' : '←'}
            </Button>
          </div>
        </div>

        <nav className="mt-8">
          <div className="px-3">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center px-3 py-2 mb-2 rounded-lg transition-colors ${
                    item.active
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {!collapsed && (
                    <span className="ml-3 font-medium">{item.name}</span>
                  )}
                </Link>

                {/* Submenu */}
                {!collapsed && item.submenu && item.active && (
                  <div className="ml-6 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className={`flex items-center px-3 py-2 rounded-md text-sm transition-colors ${
                          subItem.active
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <span className="mr-2">{subItem.icon}</span>
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Quick Actions */}
        {!collapsed && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 text-white">
              <h3 className="font-semibold text-sm mb-2">Panel de Control</h3>
              <p className="text-xs opacity-90 mb-3">
                Gestiona todo desde un solo lugar
              </p>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => window.open('/', '_blank')}
                className="w-full text-xs"
              >
                🌐 Ver Sitio Web
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                  {pathname === '/admin' && 'Dashboard'}
                  {pathname.startsWith('/admin/clients') && 'Clientes'}
                  {pathname.startsWith('/admin/services') && 'Servicios'}
                  {pathname.startsWith('/admin/billing') && 'Facturación'}
                  {pathname.startsWith('/admin/support') && 'Soporte'}
                  {pathname.startsWith('/admin/cms') && 'CMS'}
                </h1>
                <p className="text-gray-600 text-sm">
                  {pathname === '/admin' && 'Resumen general del sistema'}
                  {pathname.startsWith('/admin/clients') && 'Gestión de clientes y contactos'}
                  {pathname.startsWith('/admin/services') && 'Administración de servicios'}
                  {pathname.startsWith('/admin/billing') && 'Sistema de facturación mexicano'}
                  {pathname.startsWith('/admin/support') && 'Sistema de tickets y soporte técnico'}
                  {pathname.startsWith('/admin/cms') && 'Gestión de contenido dinámico'}
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('/', '_blank')}
                >
                  🌐 Ver Sitio
                </Button>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">A</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;