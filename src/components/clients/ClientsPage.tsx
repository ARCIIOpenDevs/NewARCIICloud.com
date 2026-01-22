'use client';

import React, { useState } from 'react';
import { useClients } from '@/hooks/useClients';
import { Client } from '@/types';
import { ClientList } from '@/components/clients/ClientList';
import { ClientForm } from '@/components/clients/ClientForm';
import { ClientDetail } from '@/components/clients/ClientDetail';

type ViewMode = 'list' | 'create' | 'edit' | 'detail';

export const ClientsPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const {
    clients,
    loading,
    createClient,
    updateClient,
    deleteClient,
    searchClients,
    refresh,
  } = useClients();

  // Buscar clientes cuando cambia el query
  React.useEffect(() => {
    if (searchQuery.trim()) {
      searchClients(searchQuery.trim());
    } else {
      refresh();
    }
  }, [searchQuery, searchClients, refresh]);

  const handleCreateClient = () => {
    setSelectedClient(null);
    setViewMode('create');
  };

  const handleEditClient = (client: Client) => {
    setSelectedClient(client);
    setViewMode('edit');
  };

  const handleViewClient = (client: Client) => {
    setSelectedClient(client);
    setViewMode('detail');
  };

  const handleDeleteClient = async (clientId: string) => {
    try {
      await deleteClient(clientId);
      // Si el cliente eliminado era el seleccionado, volver a la lista
      if (selectedClient?.id === clientId) {
        setSelectedClient(null);
        setViewMode('list');
      }
    } catch (error) {
      console.error('Error deleting client:', error);
      alert('Error al eliminar el cliente. Intenta de nuevo.');
    }
  };

  const handleFormSubmit = async (formData: any) => {
    try {
      if (viewMode === 'create') {
        await createClient(formData);
        alert('Cliente creado exitosamente');
      } else if (viewMode === 'edit' && selectedClient) {
        if (selectedClient.id) await updateClient(selectedClient.id, formData);
        alert('Cliente actualizado exitosamente');
      }
      setViewMode('list');
      setSelectedClient(null);
    } catch (error) {
      console.error('Error saving client:', error);
      alert('Error al guardar el cliente. Intenta de nuevo.');
    }
  };

  const handleFormCancel = () => {
    setViewMode('list');
    setSelectedClient(null);
  };

  const handleBackToList = () => {
    setViewMode('list');
    setSelectedClient(null);
  };

  const renderContent = () => {
    switch (viewMode) {
      case 'create':
        return (
          <ClientForm
            mode="create"
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
            loading={loading}
          />
        );

      case 'edit':
        if (!selectedClient) {
          setViewMode('list');
          return null;
        }
        return (
          <ClientForm
            mode="edit"
            initialData={selectedClient}
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
            loading={loading}
          />
        );

      case 'detail':
        if (!selectedClient) {
          setViewMode('list');
          return null;
        }
        return (
          <ClientDetail
            client={selectedClient}
            onEdit={handleEditClient}
            onClose={handleBackToList}
          />
        );

      case 'list':
      default:
        return (
          <ClientList
            clients={clients}
            loading={loading}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onClientSelect={handleViewClient}
            onCreateClient={handleCreateClient}
            onEditClient={handleEditClient}
            onDeleteClient={handleDeleteClient}
            onRefresh={refresh}
          />
        );
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {viewMode === 'list' && (
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Gestión de Clientes</h1>
          <p className="text-gray-600 mt-2">
            Administra todos los clientes de ARCIICloud.com
          </p>
        </div>
      )}

      {renderContent()}
    </div>
  );
};