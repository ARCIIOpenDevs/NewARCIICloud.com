'use client';

import React, { useState } from 'react';
import { useServices } from '@/hooks/useServices';
import { useClients } from '@/hooks/useClients';
import { Service, CreateServiceForm } from '@/types';
import { ServiceList } from '@/components/services/ServiceList';
import { ServiceForm } from '@/components/services/ServiceForm';
import { ServiceDetail } from '@/components/services/ServiceDetail';

type ViewMode = 'list' | 'create' | 'edit' | 'detail';

export const ServicesPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const {
    services,
    loading: servicesLoading,
    createService,
    updateService,
    deleteService,
    renewService,
    searchServices,
    refetch,
  } = useServices();

  const {
    clients,
    loading: clientsLoading,
  } = useClients();

  // Cargar datos al montar
  React.useEffect(() => {
    refetch();
  }, [refetch]);

  // Buscar servicios cuando cambia el query
  React.useEffect(() => {
    if (searchQuery.trim()) {
      searchServices(searchQuery.trim());
    } else {
      refetch();
    }
  }, [searchQuery, searchServices, refetch]);

  const handleCreateService = () => {
    setSelectedService(null);
    setViewMode('create');
  };

  const handleEditService = (service: Service) => {
    setSelectedService(service);
    setViewMode('edit');
  };

  const handleViewService = (service: Service) => {
    setSelectedService(service);
    setViewMode('detail');
  };

  const handleDeleteService = async (serviceId: string) => {
    try {
      await deleteService(serviceId);
      // Si el servicio eliminado era el seleccionado, volver a la lista
      if (selectedService?.id === serviceId) {
        setSelectedService(null);
        setViewMode('list');
      }
    } catch (error) {
      console.error('Error deleting service:', error);
      alert('Error al eliminar el servicio. Intenta de nuevo.');
    }
  };

  const handleRenewService = async (serviceId: string) => {
    try {
      await renewService(serviceId, 12); // 12 meses por defecto
      alert('Servicio renovado exitosamente por 12 meses');
    } catch (error) {
      console.error('Error renewing service:', error);
      alert('Error al renovar el servicio. Intenta de nuevo.');
    }
  };

  const handleFormSubmit = async (formData: any) => {
    try {
      if (viewMode === 'create') {
        await createService(formData);
        alert('Servicio creado exitosamente');
      } else if (viewMode === 'edit' && selectedService && selectedService.id) {
        await updateService(selectedService.id, formData);
        alert('Servicio actualizado exitosamente');
      }
      setViewMode('list');
      setSelectedService(null);
    } catch (error) {
      console.error('Error saving service:', error);
      alert('Error al guardar el servicio. Intenta de nuevo.');
    }
  };

  const handleFormCancel = () => {
    setViewMode('list');
    setSelectedService(null);
  };

  const handleBackToList = () => {
    setViewMode('list');
    setSelectedService(null);
  };

  const renderContent = () => {
    switch (viewMode) {
      case 'create':
        return (
          <ServiceForm
            mode="create"
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
            loading={servicesLoading}
            clients={clients.filter(client => client.id).map(client => ({
              id: client.id!,
              firstName: client.firstName,
              lastName: client.lastName,
              email: client.email
            }))}
          />
        );

      case 'edit':
        if (!selectedService) {
          setViewMode('list');
          return null;
        }
        
        // Convert Service to CreateServiceForm format (Timestamps to Dates)
        const initialData: Partial<CreateServiceForm> = {
          ...selectedService,
          activationDate: selectedService.activationDate?.toDate(),
          expirationDate: selectedService.expirationDate?.toDate(),
          expiresAt: selectedService.expiresAt?.toDate(),
          nextRenewalDate: selectedService.nextRenewalDate?.toDate(),
        };
        
        return (
          <ServiceForm
            mode="edit"
            initialData={initialData}
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
            loading={servicesLoading}
            clients={clients.filter(client => client.id).map(client => ({
              id: client.id!,
              firstName: client.firstName,
              lastName: client.lastName,
              email: client.email
            }))}
          />
        );

      case 'detail':
        if (!selectedService) {
          setViewMode('list');
          return null;
        }
        return (
          <ServiceDetail
            service={selectedService}
            onEdit={handleEditService}
            onClose={handleBackToList}
            onRenew={handleRenewService}
            clients={clients.filter(client => client.id).map(client => ({
              id: client.id!,
              firstName: client.firstName,
              lastName: client.lastName,
              email: client.email
            }))}
          />
        );

      case 'list':
      default:
        return (
          <ServiceList
            services={services}
            loading={servicesLoading}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onServiceSelect={handleViewService}
            onCreateService={handleCreateService}
            onEditService={handleEditService}
            onDeleteService={handleDeleteService}
            onRenewService={handleRenewService}
            onRefresh={refetch}
          />
        );
    }
  };

  if (clientsLoading && clients.length === 0) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2">Cargando datos...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {viewMode === 'list' && (
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Gestión de Servicios</h1>
          <p className="text-gray-600 mt-2">
            Administra todos los servicios de hosting, dominios y más
          </p>
        </div>
      )}

      {renderContent()}
    </div>
  );
};