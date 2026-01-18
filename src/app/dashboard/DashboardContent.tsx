'use client';

import { useState } from 'react';

// Simulamos datos del usuario para la demo
const userData = {
  name: 'Carlos Mendoza',
  email: 'carlos@tuempresa.mx',
  avatar: '/avatars/carlos.jpg',
  plan: 'Hosting Profesional',
  since: '2024',
  nextBilling: '17 Feb 2026',
  totalSpent: 4285
};

const services = [
  {
    id: 1,
    type: 'hosting',
    name: 'tuempresa.mx',
    plan: 'Hosting Profesional',
    status: 'active',
    nextRenewal: '17 Feb 2026',
    price: 199,
    usage: {
      storage: { used: 8.5, total: 20, unit: 'GB' },
      bandwidth: { used: 125, total: null, unit: 'GB' },
      emails: { used: 12, total: 25, unit: 'cuentas' }
    }
  },
  {
    id: 2,
    type: 'domain',
    name: 'tuempresa.com',
    plan: 'Dominio .com',
    status: 'active',
    nextRenewal: '15 Mar 2026',
    price: 299,
    autoRenew: true
  },
  {
    id: 3,
    type: 'ssl',
    name: 'SSL Wildcard',
    plan: 'Certificado SSL',
    status: 'active',
    nextRenewal: '10 Apr 2026',
    price: 999,
    coverage: '*.tuempresa.mx'
  }
];

const recentTickets = [
  {
    id: 'TK-2026-0123',
    subject: 'Configuración email en iPhone',
    status: 'resolved',
    priority: 'medium',
    created: '15 Ene 2026',
    lastUpdate: '15 Ene 2026',
    category: 'Email'
  },
  {
    id: 'TK-2026-0089',
    subject: 'Optimización de velocidad WordPress',
    status: 'in-progress',
    priority: 'low',
    created: '12 Ene 2026',
    lastUpdate: '16 Ene 2026',
    category: 'Performance'
  },
  {
    id: 'TK-2025-1456',
    subject: 'Migración desde hosting anterior',
    status: 'resolved',
    priority: 'high',
    created: '28 Dic 2025',
    lastUpdate: '30 Dic 2025',
    category: 'Migración'
  }
];

const invoices = [
  {
    id: 'INV-2026-001',
    date: '17 Ene 2026',
    amount: 2397,
    status: 'paid',
    description: 'Hosting Profesional + Dominio .com + SSL Wildcard',
    dueDate: '31 Ene 2026'
  },
  {
    id: 'INV-2025-012',
    date: '17 Dic 2025',
    amount: 1497,
    status: 'paid',
    description: 'Hosting Profesional + Dominio .com',
    dueDate: '31 Dic 2025'
  },
  {
    id: 'INV-2025-011',
    date: '17 Nov 2025',
    amount: 1497,
    status: 'paid',
    description: 'Hosting Profesional + Dominio .com',
    dueDate: '30 Nov 2025'
  }
];

export default function DashboardPageContent() {
  const [activeTab, setActiveTab] = useState('overview');

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'expired': return 'text-red-600 bg-red-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'suspended': return 'text-red-600 bg-red-100';
      default: return 'text-secondary-600 bg-secondary-100';
    }
  };

  const getTicketStatusColor = (status: string) => {
    switch(status) {
      case 'open': return 'text-blue-600 bg-blue-100';
      case 'in-progress': return 'text-yellow-600 bg-yellow-100';
      case 'resolved': return 'text-green-600 bg-green-100';
      case 'closed': return 'text-secondary-600 bg-secondary-100';
      default: return 'text-secondary-600 bg-secondary-100';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-secondary-600 bg-secondary-100';
    }
  };

  const renderOverview = () => (
    <div className="space-y-8">
      
      {/* Stats Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl">🌐</div>
            <div className="text-sm text-green-600 font-semibold">Activo</div>
          </div>
          <h3 className="text-2xl font-bold text-secondary-900 mb-1">3</h3>
          <p className="text-secondary-600 text-sm">Servicios Activos</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl">🎫</div>
            <div className="text-sm text-blue-600 font-semibold">1 Abierto</div>
          </div>
          <h3 className="text-2xl font-bold text-secondary-900 mb-1">7</h3>
          <p className="text-secondary-600 text-sm">Tickets Total</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl">📊</div>
            <div className="text-sm text-green-600 font-semibold">99.9%</div>
          </div>
          <h3 className="text-2xl font-bold text-secondary-900 mb-1">100%</h3>
          <p className="text-secondary-600 text-sm">Uptime Este Mes</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl">💰</div>
            <div className="text-sm text-primary-600 font-semibold">Al día</div>
          </div>
          <h3 className="text-2xl font-bold text-secondary-900 mb-1">${userData.totalSpent}</h3>
          <p className="text-secondary-600 text-sm">Total Invertido</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h3 className="text-xl font-bold mb-4">🚀 Acciones Rápidas</h3>
        <div className="grid md:grid-cols-3 gap-4">
          
          <button className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-left">
            <div className="text-2xl mb-2">🎫</div>
            <h4 className="font-semibold text-blue-800">Crear Ticket</h4>
            <p className="text-blue-600 text-sm">Reportar problema o hacer consulta</p>
          </button>

          <button className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors text-left">
            <div className="text-2xl mb-2">📧</div>
            <h4 className="font-semibold text-green-800">Configurar Email</h4>
            <p className="text-green-600 text-sm">Crear cuentas y configurar clientes</p>
          </button>

          <button className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors text-left">
            <div className="text-2xl mb-2">🔒</div>
            <h4 className="font-semibold text-purple-800">Gestionar SSL</h4>
            <p className="text-purple-600 text-sm">Ver certificados y configurar HTTPS</p>
          </button>
        </div>
      </div>

      {/* Services Status */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h3 className="text-xl font-bold mb-6">📋 Estado de Servicios</h3>
        <div className="space-y-4">
          {services.map((service) => (
            <div key={service.id} className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
              <div className="flex items-center">
                <div className="text-2xl mr-4">
                  {service.type === 'hosting' && '🌐'}
                  {service.type === 'domain' && '📍'}
                  {service.type === 'ssl' && '🔒'}
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900">{service.name}</h4>
                  <p className="text-secondary-600 text-sm">{service.plan}</p>
                </div>
              </div>
              <div className="text-right">
                <div className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(service.status)}`}>
                  {service.status === 'active' ? 'Activo' : service.status}
                </div>
                <p className="text-secondary-500 text-xs mt-1">Renovación: {service.nextRenewal}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderServices = () => (
    <div className="space-y-8">
      {services.map((service) => (
        <div key={service.id} className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="text-3xl mr-4">
                {service.type === 'hosting' && '🌐'}
                {service.type === 'domain' && '📍'}
                {service.type === 'ssl' && '🔒'}
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary-900">{service.name}</h3>
                <p className="text-secondary-600">{service.plan}</p>
              </div>
            </div>
            <div className="text-right">
              <div className={`inline-flex px-3 py-2 rounded-full text-sm font-semibold ${getStatusColor(service.status)}`}>
                {service.status === 'active' ? 'Activo' : service.status}
              </div>
              <p className="text-secondary-500 text-sm mt-1">${service.price}/mes</p>
            </div>
          </div>

          {service.type === 'hosting' && service.usage && (
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-secondary-700">Almacenamiento</span>
                  <span className="text-sm text-secondary-600">
                    {service.usage.storage.used}/{service.usage.storage.total} {service.usage.storage.unit}
                  </span>
                </div>
                <div className="w-full bg-secondary-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${(service.usage.storage.used / service.usage.storage.total) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-secondary-500 mt-1">
                  {Math.round((service.usage.storage.used / service.usage.storage.total) * 100)}% usado
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-secondary-700">Transferencia</span>
                  <span className="text-sm text-secondary-600">
                    {service.usage.bandwidth.used} {service.usage.bandwidth.unit}
                  </span>
                </div>
                <div className="w-full bg-secondary-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '12%' }}></div>
                </div>
                <p className="text-xs text-secondary-500 mt-1">Ilimitado</p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-secondary-700">Cuentas Email</span>
                  <span className="text-sm text-secondary-600">
                    {service.usage.emails.used}/{service.usage.emails.total} {service.usage.emails.unit}
                  </span>
                </div>
                <div className="w-full bg-secondary-200 rounded-full h-2">
                  <div 
                    className="bg-purple-600 h-2 rounded-full" 
                    style={{ width: `${(service.usage.emails.used / service.usage.emails.total) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-secondary-500 mt-1">
                  {Math.round((service.usage.emails.used / service.usage.emails.total) * 100)}% usado
                </p>
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm">
              Gestionar
            </button>
            {service.type === 'hosting' && (
              <>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  cPanel
                </button>
                <button className="border border-secondary-300 text-secondary-700 px-4 py-2 rounded-lg hover:bg-secondary-50 transition-colors text-sm">
                  Crear Email
                </button>
              </>
            )}
            <button className="border border-secondary-300 text-secondary-700 px-4 py-2 rounded-lg hover:bg-secondary-50 transition-colors text-sm">
              Renovar
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderTickets = () => (
    <div className="space-y-6">
      
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">🎫 Mis Tickets de Soporte</h3>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
          Crear Nuevo Ticket
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-700">Ticket ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-700">Asunto</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-700">Estado</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-700">Prioridad</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-700">Categoría</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-700">Última Act.</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-700">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {recentTickets.map((ticket, index) => (
                <tr key={ticket.id} className={index % 2 === 0 ? 'bg-white' : 'bg-secondary-25'}>
                  <td className="px-6 py-4 text-sm font-semibold text-secondary-900">{ticket.id}</td>
                  <td className="px-6 py-4 text-sm text-secondary-700">{ticket.subject}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${getTicketStatusColor(ticket.status)}`}>
                      {ticket.status === 'resolved' ? 'Resuelto' : 
                       ticket.status === 'in-progress' ? 'En Progreso' : 
                       ticket.status === 'open' ? 'Abierto' : ticket.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${getPriorityColor(ticket.priority)}`}>
                      {ticket.priority === 'medium' ? 'Media' : 
                       ticket.priority === 'low' ? 'Baja' : 
                       ticket.priority === 'high' ? 'Alta' : ticket.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-secondary-600">{ticket.category}</td>
                  <td className="px-6 py-4 text-sm text-secondary-600">{ticket.lastUpdate}</td>
                  <td className="px-6 py-4">
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-semibold">
                      Ver Detalles
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderBilling = () => (
    <div className="space-y-6">
      
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">💰 Facturación</h3>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
          Métodos de Pago
        </button>
      </div>

      {/* Current Plan */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h4 className="text-lg font-semibold mb-4">Plan Actual</h4>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <p className="text-secondary-600 text-sm">Plan</p>
            <p className="font-bold text-lg">{userData.plan}</p>
          </div>
          <div>
            <p className="text-secondary-600 text-sm">Próxima Facturación</p>
            <p className="font-bold text-lg">{userData.nextBilling}</p>
          </div>
          <div>
            <p className="text-secondary-600 text-sm">Total Mensual</p>
            <p className="font-bold text-lg text-primary-600">$2,397</p>
          </div>
        </div>
      </div>

      {/* Recent Invoices */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="p-6 border-b">
          <h4 className="text-lg font-semibold">Facturas Recientes</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-700">Factura</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-700">Fecha</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-700">Descripción</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-700">Monto</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-700">Estado</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-700">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice, index) => (
                <tr key={invoice.id} className={index % 2 === 0 ? 'bg-white' : 'bg-secondary-25'}>
                  <td className="px-6 py-4 text-sm font-semibold text-secondary-900">{invoice.id}</td>
                  <td className="px-6 py-4 text-sm text-secondary-700">{invoice.date}</td>
                  <td className="px-6 py-4 text-sm text-secondary-600">{invoice.description}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-secondary-900">${invoice.amount}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex px-2 py-1 rounded-full text-xs font-semibold text-green-600 bg-green-100">
                      Pagada
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-semibold mr-3">
                      Ver PDF
                    </button>
                    <button className="text-secondary-600 hover:text-secondary-700 text-sm font-semibold">
                      Descargar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen pt-20 bg-secondary-50">
      
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                {userData.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-secondary-900">¡Hola, {userData.name.split(' ')[0]}!</h1>
                <p className="text-secondary-600">Cliente desde {userData.since} • {userData.email}</p>
              </div>
            </div>
            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
              🆘 Obtener Soporte
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm border mb-8">
          <nav className="flex overflow-x-auto">
            {[
              { id: 'overview', name: 'Resumen', icon: '📊' },
              { id: 'services', name: 'Mis Servicios', icon: '🌐' },
              { id: 'tickets', name: 'Soporte', icon: '🎫' },
              { id: 'billing', name: 'Facturación', icon: '💰' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-secondary-600 hover:text-secondary-900 hover:border-secondary-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div>
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'services' && renderServices()}
          {activeTab === 'tickets' && renderTickets()}
          {activeTab === 'billing' && renderBilling()}
        </div>
      </div>
    </main>
  );
}