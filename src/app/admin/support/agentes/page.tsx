'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useSupport } from '@/hooks/useSupport';

const SupportAgentsPage: React.FC = () => {
  const router = useRouter();
  const { agentes, fetchAgentes } = useSupport();
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingAgent, setEditingAgent] = useState<any>(null);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    departamento: 'tecnico',
    especialidades: [] as string[],
    cargaMaxima: 10,
    disponible: true,
    activo: true
  });

  const especialidadesDisponibles = [
    'Hosting', 'VPS', 'Servidores Dedicados', 'Dominios', 'SSL',
    'Email', 'Backup', 'CDN', 'Monitoreo', 'Migración'
  ];

  const departamentos = [
    { value: 'tecnico', label: '🔧 Técnico' },
    { value: 'comercial', label: '💼 Comercial' },
    { value: 'facturacion', label: '💰 Facturación' },
    { value: 'abuso', label: '🚨 Abuso' }
  ];

  useEffect(() => {
    loadAgents();
  }, []);

  const loadAgents = async () => {
    try {
      await fetchAgentes();
    } catch (error) {
      console.error('Error loading agents:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // TODO: Implementar funciones de crear/actualizar agentes
      /*
      if (editingAgent) {
        await updateAgent(editingAgent.id, formData);
        alert('✅ Agente actualizado exitosamente');
      } else {
        await createAgent(formData);
        alert('✅ Agente creado exitosamente');
      }
      */
      alert('⚠️ Funcionalidad en desarrollo');
      resetForm();
      // loadAgents();
    } catch (error) {
      console.error('Error saving agent:', error);
      alert('❌ Error al guardar el agente');
    }
  };

  const handleEdit = (agent: any) => {
    setEditingAgent(agent);
    setFormData({
      nombre: agent.nombre,
      email: agent.email,
      departamento: agent.departamento,
      especialidades: agent.especialidades || [],
      cargaMaxima: agent.cargaMaxima || 10,
      disponible: agent.disponible !== false,
      activo: agent.activo !== false
    });
    setShowForm(true);
  };

  const handleDelete = async (agentId: string, agentName: string) => {
    if (confirm(`¿Estás seguro de que deseas eliminar al agente ${agentName}?`)) {
      try {
        // TODO: Implementar función de eliminar agente
        // await deleteAgent(agentId);
        alert('⚠️ Funcionalidad en desarrollo');
        // loadAgents();
      } catch (error) {
        console.error('Error deleting agent:', error);
        alert('❌ Error al eliminar el agente');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      nombre: '',
      email: '',
      departamento: 'tecnico',
      especialidades: [],
      cargaMaxima: 10,
      disponible: true,
      activo: true
    });
    setEditingAgent(null);
    setShowForm(false);
  };

  const toggleEspecialidad = (especialidad: string) => {
    setFormData(prev => ({
      ...prev,
      especialidades: prev.especialidades.includes(especialidad)
        ? prev.especialidades.filter(e => e !== especialidad)
        : [...prev.especialidades, especialidad]
    }));
  };

  const getStatusColor = (agent: any) => {
    if (!agent.activo) return 'bg-gray-100 text-gray-800';
    if (!agent.disponible) return 'bg-yellow-100 text-yellow-800';
    return 'bg-green-100 text-green-800';
  };

  const getStatusText = (agent: any) => {
    if (!agent.activo) return 'Inactivo';
    if (!agent.disponible) return 'No Disponible';
    return 'Disponible';
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2">Cargando agentes...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">👥 Agentes de Soporte</h1>
            <p className="text-gray-600">Gestión del equipo de soporte técnico</p>
          </div>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={() => router.push('/admin/support')}
            >
              ← Volver al Soporte
            </Button>
            <Button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              ➕ Nuevo Agente
            </Button>
          </div>
        </div>
      </div>

      {/* Formulario */}
      {showForm && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              {editingAgent ? '✏️ Editar Agente' : '➕ Nuevo Agente'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    value={formData.nombre}
                    onChange={(e) => setFormData(prev => ({ ...prev, nombre: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Departamento
                  </label>
                  <select
                    value={formData.departamento}
                    onChange={(e) => setFormData(prev => ({ ...prev, departamento: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {departamentos.map(dept => (
                      <option key={dept.value} value={dept.value}>
                        {dept.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Carga Máxima de Tickets
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={formData.cargaMaxima}
                    onChange={(e) => setFormData(prev => ({ ...prev, cargaMaxima: parseInt(e.target.value) }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Especialidades
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                  {especialidadesDisponibles.map(especialidad => (
                    <label key={especialidad} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.especialidades.includes(especialidad)}
                        onChange={() => toggleEspecialidad(especialidad)}
                        className="mr-2"
                      />
                      <span className="text-sm">{especialidad}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.disponible}
                    onChange={(e) => setFormData(prev => ({ ...prev, disponible: e.target.checked }))}
                    className="mr-2"
                  />
                  Disponible para asignación automática
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.activo}
                    onChange={(e) => setFormData(prev => ({ ...prev, activo: e.target.checked }))}
                    className="mr-2"
                  />
                  Agente activo
                </label>
              </div>

              <div className="flex justify-end space-x-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={resetForm}
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {editingAgent ? '✅ Actualizar' : '✅ Crear'} Agente
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Lista de agentes */}
      <Card>
        <CardHeader>
          <CardTitle>👥 Agentes de Soporte ({agentes.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {agentes.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">No hay agentes registrados</p>
              <Button
                onClick={() => setShowForm(true)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                ➕ Crear Primer Agente
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {agentes.map(agent => (
                <div
                  key={agent.id}
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-medium text-gray-900">{agent.nombre}</h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(agent)}`}>
                          {getStatusText(agent)}
                        </span>
                        <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                          {agent.departamentos && agent.departamentos.length > 0 ? agent.departamentos[0] : 'Sin departamento'}
                        </span>
                      </div>

                      <div className="text-sm text-gray-600 space-y-1">
                        <p>📧 {agent.email}</p>
                        <p>📊 Carga máxima: {agent.maxTicketsSimultaneos || 10} tickets</p>
                        <p>🎯 Tickets activos: {agent.ticketsAsignados || 0}</p>
                        
                        {agent.especialidades && agent.especialidades.length > 0 && (
                          <div>
                            <span className="text-gray-500">🔧 Especialidades:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {agent.especialidades.map(esp => (
                                <span key={esp} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                                  {esp}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(agent)}
                      >
                        ✏️ Editar
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(agent.id, agent.nombre)}
                        className="text-red-600 hover:text-red-700"
                      >
                        🗑️ Eliminar
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SupportAgentsPage;