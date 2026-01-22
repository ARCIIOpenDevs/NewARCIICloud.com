import { useState, useCallback } from 'react';
import { Client, CreateClientForm, UpdateClientForm } from '@/types';
import { useFirestore, useFirestoreCRUD } from '@/hooks/useFirestore';
import { Timestamp } from 'firebase/firestore';

export const useClients = () => {
  const {
    data: clients,
    loading,
    error,
    refresh,
    fetchData,
    pagination,
  } = useFirestore<Client>('clients', { realtime: true });

  const {
    create,
    update,
    remove,
    loading: crudLoading,
    error: crudError,
  } = useFirestoreCRUD<Client>('clients');

  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    status: '',
    accountType: '',
    segment: '',
  });

  const createClient = useCallback(async (clientData: CreateClientForm) => {
    const newClient = {
      ...clientData,
      clientId: clientData.clientId || `client_${Date.now()}`, // Generar ID si no existe
      createdBy: clientData.createdBy || 'system', // Asignar createdBy por defecto
      metrics: {
        lifetimeValue: 0,
        totalSpent: 0,
        servicesCount: 0,
        openTickets: 0,
        satisfactionScore: undefined,
      },
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    };

    return await create(newClient);
  }, [create]);

  const updateClient = useCallback(async (clientId: string, clientData: UpdateClientForm) => {
    return await update(clientId, {
      ...clientData,
      updatedAt: Timestamp.now(),
    });
  }, [update]);

  const deleteClient = useCallback(async (clientId: string) => {
    return await remove(clientId);
  }, [remove]);

  const searchClients = useCallback((term: string) => {
    setSearchTerm(term);
    // TODO: Implement search functionality with Firestore
  }, []);

  const filterClients = useCallback((newFilters: typeof filters) => {
    setFilters(newFilters);
    fetchData(newFilters);
  }, [fetchData]);

  const getClientStats = useCallback(() => {
    const now = new Date();
    const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    
    const total = clients.length;
    const active = clients.filter(c => c.status === 'active').length;
    const inactive = clients.filter(c => c.status === 'inactive').length;
    const suspended = clients.filter(c => c.status === 'suspended').length;

    const newThisMonth = clients.filter(c => {
      const createdAt = c.createdAt.toDate();
      return createdAt >= thisMonth;
    }).length;

    const byAccountType = {
      individual: clients.filter(c => c.accountType === 'individual').length,
      business: clients.filter(c => c.accountType === 'business').length,
      enterprise: clients.filter(c => c.accountType === 'enterprise').length,
    };

    const bySegment = {
      standard: clients.filter(c => c.segment === 'standard').length,
      premium: clients.filter(c => c.segment === 'premium').length,
      vip: clients.filter(c => c.segment === 'vip').length,
      enterprise: clients.filter(c => c.segment === 'enterprise').length,
    };

    const totalLifetimeValue = clients.reduce((sum, client) => 
      sum + (client.metrics?.lifetimeValue || 0), 0
    );

    return {
      total,
      active,
      inactive,
      suspended,
      newThisMonth,
      byAccountType,
      bySegment,
      totalLifetimeValue,
    };
  }, [clients]);

  return {
    // Data
    clients,
    loading,
    error: error || crudError,
    
    // CRUD Operations
    createClient,
    updateClient,
    deleteClient,
    crudLoading,
    
    // Search & Filter
    searchTerm,
    searchClients,
    filters,
    filterClients,
    
    // Utils
    refresh,
    pagination,
    getClientStats,
  };
};