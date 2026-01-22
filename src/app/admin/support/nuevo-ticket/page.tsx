'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/ButtonCRM';
import { useSupport } from '@/hooks/useSupport';
import { useClients } from '@/hooks/useClients';
import { useServices } from '@/hooks/useServices';
import { TicketFormData, CategoriaTicket, PrioridadTicket, TipoTicket, CanalTicket } from '@/types/support';
import { Client, Service } from '@/types';

const NuevoTicketPage: React.FC = () => {
  const router = useRouter();
  const { createTicket } = useSupport();
  const { clients } = useClients();
  const { services, fetchServices } = useServices();

  const [loading, setLoading] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [clientServices, setClientServices] = useState<Service[]>([]);
  
  const [formData, setFormData] = useState<Partial<TicketFormData>>({
    categoria: 'tecnico',
    prioridad: 'normal',
    tipo: 'incidente',
    canal: 'portal',
    creadoPor: 'admin', // Cambiar por usuario actual
  });

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  const handleClientSelect = (client: Client) => {
    setSelectedClient(client);
    setFormData(prev => ({
      ...prev,
      clienteId: client.id!,
      clienteNombre: `${client.firstName} ${client.lastName}`,
      clienteEmail: client.email,
      clienteTelefono: client.phone,
    }));

    // Buscar servicios del cliente
    const serviciosCliente = services.filter(service => service.clientId === client.id);
    setClientServices(serviciosCliente);
    setSelectedService(null);
  };

  const handleServiceSelect = (service: Service | null) => {
    setSelectedService(service);
    if (service) {
      setFormData(prev => ({
        ...prev,
        servicioId: service.id!,
        servicioNombre: service.serviceName,
        servicioTipo: service.serviceType,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        servicioId: undefined,
        servicioNombre: undefined,
        servicioTipo: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.titulo || !formData.descripcion || !formData.clienteId) {
      alert('⚠️ Debe completar todos los campos obligatorios');
      return;
    }

    setLoading(true);
    try {
      const ticketId = await createTicket(formData as Omit<TicketFormData, 'id' | 'fechaCreacion' | 'fechaActualizacion' | 'numero'>);
      alert('✅ Ticket creado exitosamente');
      router.push(`/admin/support/ticket/${ticketId}`);
    } catch (error) {
      console.error('Error creating ticket:', error);
      alert('❌ Error al crear el ticket');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">🎫 Nuevo Ticket de Soporte</h1>
            <p className="text-gray-600">Crear solicitud de soporte técnico</p>
          </div>
          <Button
            variant="outline"
            onClick={() => router.push('/admin/support')}
          >
            ← Volver al Soporte
          </Button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Información básica */}
        <Card>
          <CardHeader>
            <CardTitle>📋 Información del Ticket</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Título del Ticket *
                </label>
                <input
                  type="text"
                  value={formData.titulo || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, titulo: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe brevemente el problema"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Canal de Origen
                </label>
                <select
                  value={formData.canal}
                  onChange={(e) => setFormData(prev => ({ ...prev, canal: e.target.value as CanalTicket }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="portal">Portal Cliente</option>
                  <option value="email">Email</option>
                  <option value="telefono">Teléfono</option>
                  <option value="chat">Chat</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="presencial">Presencial</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Descripción del Problema *
              </label>
              <textarea
                value={formData.descripcion || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, descripcion: e.target.value }))}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe detalladamente el problema o solicitud..."
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* Clasificación */}
        <Card>
          <CardHeader>
            <CardTitle>🏷️ Clasificación</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Categoría
                </label>
                <select
                  value={formData.categoria}
                  onChange={(e) => setFormData(prev => ({ ...prev, categoria: e.target.value as CategoriaTicket }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="tecnico">🔧 Técnico</option>
                  <option value="facturacion">💰 Facturación</option>
                  <option value="comercial">💼 Comercial</option>
                  <option value="abuso">🚨 Abuso</option>
                  <option value="solicitud">📝 Solicitud</option>
                  <option value="incidente">⚠️ Incidente</option>
                  <option value="consulta">❓ Consulta</option>
                  <option value="sugerencia">💡 Sugerencia</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prioridad
                </label>
                <select
                  value={formData.prioridad}
                  onChange={(e) => setFormData(prev => ({ ...prev, prioridad: e.target.value as PrioridadTicket }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="baja">🟢 Baja</option>
                  <option value="normal">🔵 Normal</option>
                  <option value="alta">🟡 Alta</option>
                  <option value="critica">🔴 Crítica</option>
                  <option value="urgente">🚨 Urgente</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo
                </label>
                <select
                  value={formData.tipo}
                  onChange={(e) => setFormData(prev => ({ ...prev, tipo: e.target.value as TipoTicket }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="incidente">⚠️ Incidente</option>
                  <option value="solicitud">📝 Solicitud</option>
                  <option value="cambio">🔄 Cambio</option>
                  <option value="problema">🔍 Problema</option>
                  <option value="consulta">❓ Consulta</option>
                  <option value="queja">😠 Queja</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Seleccionar cliente */}
        <Card>
          <CardHeader>
            <CardTitle>👤 Cliente</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedClient ? (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="font-medium text-green-800">✅ Cliente Seleccionado:</h3>
                <p className="text-green-700">{selectedClient.firstName} {selectedClient.lastName}</p>
                <p className="text-sm text-green-600">Email: {selectedClient.email}</p>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSelectedClient(null);
                    setClientServices([]);
                    setSelectedService(null);
                    setFormData(prev => ({
                      ...prev,
                      clienteId: undefined,
                      clienteNombre: undefined,
                      clienteEmail: undefined,
                      servicioId: undefined,
                      servicioNombre: undefined
                    }));
                  }}
                  className="mt-2"
                >
                  🔄 Cambiar Cliente
                </Button>
              </div>
            ) : (
              <div className="space-y-4 max-h-64 overflow-y-auto">
                {clients.map(client => (
                  <div
                    key={client.id}
                    onClick={() => handleClientSelect(client)}
                    className="p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">{client.firstName} {client.lastName}</h3>
                        <p className="text-sm text-gray-600">{client.email}</p>
                        <p className="text-sm text-gray-500">{client.phone}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        client.status === 'active' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {client.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Seleccionar servicio (opcional) */}
        {selectedClient && clientServices.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>🛠️ Servicio Relacionado (Opcional)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div
                  onClick={() => handleServiceSelect(null)}
                  className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                    !selectedService 
                      ? 'border-blue-300 bg-blue-50' 
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <span className="font-medium">Sin servicio específico</span>
                  <p className="text-sm text-gray-500">Problema general no relacionado con un servicio específico</p>
                </div>
                
                {clientServices.map(service => (
                  <div
                    key={service.id}
                    onClick={() => handleServiceSelect(service)}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedService?.id === service.id 
                        ? 'border-blue-300 bg-blue-50' 
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-900">{service.serviceName}</h4>
                        <p className="text-sm text-gray-600">Tipo: {service.serviceType}</p>
                        <p className="text-sm text-gray-500">Estado: {service.status}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Botones de acción */}
        <div className="flex justify-end space-x-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push('/admin/support')}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            disabled={loading || !formData.titulo || !formData.descripcion || !selectedClient}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {loading ? '⏳ Creando...' : '✅ Crear Ticket'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NuevoTicketPage;