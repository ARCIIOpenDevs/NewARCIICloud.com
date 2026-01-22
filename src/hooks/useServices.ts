'use client';

import { useState, useEffect } from 'react';
import { 
  collection, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  getDocs, 
  getDoc,
  query, 
  where, 
  orderBy, 
  limit as firestoreLimit,
  startAfter,
  Timestamp 
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Service, CreateServiceForm, ServiceUsage } from '@/types';

export const useServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const servicesCollection = collection(db, 'services');

  // Crear servicio
  const createService = async (serviceData: CreateServiceForm): Promise<string> => {
    try {
      setLoading(true);
      setError(null);

      const now = Timestamp.now();
      const expirationTimestamp = serviceData.expiresAt ? Timestamp.fromDate(serviceData.expiresAt) : Timestamp.fromDate(new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)); // 1 año por defecto

      const serviceToCreate = {
        ...serviceData,
        serviceId: `service_${Date.now()}`,
        expiresAt: expirationTimestamp,
        expirationDate: expirationTimestamp,
        createdAt: now,
        updatedAt: now,
        status: 'pending' as const,
        usage: {
          storage: { used: 0, total: 1000 },
          bandwidth: { used: 0, total: 1000 },
        } as ServiceUsage,
      };

      const docRef = await addDoc(servicesCollection, serviceToCreate);
      
      // Actualizar la lista local
      const newService = {
        id: docRef.id,
        ...serviceToCreate,
      } as unknown as Service;
      
      setServices(prev => [newService, ...prev]);
      
      return docRef.id;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error creating service';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Actualizar servicio
  const updateService = async (serviceId: string, updates: Partial<CreateServiceForm>) => {
    try {
      setLoading(true);
      setError(null);

      const serviceRef = doc(db, 'services', serviceId);
      const updateData = {
        ...updates,
        updatedAt: Timestamp.now(),
        ...(updates.expiresAt && {
          expiresAt: Timestamp.fromDate(updates.expiresAt),
          expirationDate: Timestamp.fromDate(updates.expiresAt)
        }),
      };

      await updateDoc(serviceRef, updateData);

      // Actualizar la lista local
      setServices(prev => prev.map(service => 
        service.id === serviceId 
          ? { 
              ...service, 
              ...updateData,
              plan: typeof updateData.plan === 'string' ? updateData.plan : service.plan,
              expiresAt: updates.expiresAt ? Timestamp.fromDate(updates.expiresAt) : service.expiresAt,
              expirationDate: updates.expiresAt ? Timestamp.fromDate(updates.expiresAt) : service.expirationDate,
            } as Service
          : service
      ));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error updating service';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Eliminar servicio
  const deleteService = async (serviceId: string) => {
    try {
      setLoading(true);
      setError(null);

      const serviceRef = doc(db, 'services', serviceId);
      await deleteDoc(serviceRef);

      // Actualizar la lista local
      setServices(prev => prev.filter(service => service.id !== serviceId));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error deleting service';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Obtener todos los servicios
  const fetchServices = async (clientId?: string) => {
    try {
      setLoading(true);
      setError(null);

      let q = query(
        servicesCollection,
        orderBy('createdAt', 'desc')
      );

      // Filtrar por cliente si se especifica
      if (clientId) {
        q = query(
          servicesCollection,
          where('clientId', '==', clientId),
          orderBy('createdAt', 'desc')
        );
      }

      const querySnapshot = await getDocs(q);
      const servicesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as unknown as Service[];

      setServices(servicesData);
      return servicesData;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error fetching services';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Obtener servicio por ID
  const getServiceById = async (serviceId: string): Promise<Service | null> => {
    try {
      setLoading(true);
      setError(null);

      const serviceRef = doc(db, 'services', serviceId);
      const serviceSnap = await getDoc(serviceRef);

      if (serviceSnap.exists()) {
        return {
          id: serviceSnap.id,
          ...serviceSnap.data()
        } as unknown as Service;
      }
      
      return null;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error fetching service';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Buscar servicios
  const searchServices = async (searchTerm: string, filters?: {
    type?: Service['type'];
    status?: Service['status'];
    clientId?: string;
  }) => {
    try {
      setLoading(true);
      setError(null);

      let q = query(servicesCollection);

      // Aplicar filtros
      if (filters?.clientId) {
        q = query(q, where('clientId', '==', filters.clientId));
      }
      
      if (filters?.type) {
        q = query(q, where('serviceType', '==', filters.type));
      }
      
      if (filters?.status) {
        q = query(q, where('status', '==', filters.status));
      }

      q = query(q, orderBy('createdAt', 'desc'));

      const querySnapshot = await getDocs(q);
      let servicesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as unknown as Service[];

      // Filtrar por término de búsqueda (búsqueda cliente-side para mayor flexibilidad)
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        servicesData = servicesData.filter(service =>
          service.serviceName?.toLowerCase().includes(searchLower) ||
          service.name?.toLowerCase().includes(searchLower) ||
          service.description?.toLowerCase().includes(searchLower) ||
          service.domain?.name?.toLowerCase().includes(searchLower) ||
          service.server?.hostname?.toLowerCase().includes(searchLower) ||
          service.technical?.domain?.toLowerCase().includes(searchLower)
        );
      }

      setServices(servicesData);
      return servicesData;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error searching services';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Actualizar estado de servicio
  const updateServiceStatus = async (serviceId: string, status: Service['status']) => {
    try {
      const serviceRef = doc(db, 'services', serviceId);
      await updateDoc(serviceRef, {
        status,
        updatedAt: Timestamp.now()
      });

      setServices(prev => prev.map(service => 
        service.id === serviceId 
          ? { ...service, status, updatedAt: Timestamp.now() }
          : service
      ));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error updating service status';
      setError(errorMessage);
      throw err;
    }
  };

  // Renovar servicio
  const renewService = async (serviceId: string, months: number = 12) => {
    try {
      const service = services.find(s => s.id === serviceId);
      if (!service) throw new Error('Service not found');

      const currentExpiration = service.expiresAt?.toDate() || service.expirationDate.toDate();
      const newExpiration = new Date(currentExpiration);
      newExpiration.setMonth(newExpiration.getMonth() + months);

      const nextBilling = service.billing ? new Date(service.billing.nextBilling.toDate()) : new Date();
      nextBilling.setMonth(nextBilling.getMonth() + months);

      await updateDoc(doc(db, 'services', serviceId), {
        expiresAt: Timestamp.fromDate(newExpiration),
        expirationDate: Timestamp.fromDate(newExpiration),
        ...(service.billing && { 'billing.nextBilling': Timestamp.fromDate(nextBilling) }),
        status: 'active',
        updatedAt: Timestamp.now()
      });

      setServices(prev => prev.map(s => 
        s.id === serviceId 
          ? { 
              ...s, 
              expiresAt: Timestamp.fromDate(newExpiration),
              expirationDate: Timestamp.fromDate(newExpiration),
              ...(s.billing && {
                billing: {
                  ...s.billing,
                  nextBilling: Timestamp.fromDate(nextBilling)
                }
              }),
              status: 'active' as const,
              updatedAt: Timestamp.now()
            }
          : s
      ));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error renewing service';
      setError(errorMessage);
      throw err;
    }
  };

  // Obtener estadísticas de servicios
  const getServiceStats = () => {
    const stats = {
      total: services.length,
      active: services.filter(s => s.status === 'active').length,
      suspended: services.filter(s => s.status === 'suspended').length,
      cancelled: services.filter(s => s.status === 'cancelled' || s.status === 'canceled').length,
      pending: services.filter(s => s.status === 'pending').length,
      expired: services.filter(s => s.status === 'expired').length,
      byType: {} as Record<string, number>,
      totalRevenue: 0,
      expiringThisMonth: 0,
    };

    // Calcular por tipo
    services.forEach(service => {
      const serviceType = service.serviceType || service.type || 'unknown';
      stats.byType[serviceType] = (stats.byType[serviceType] || 0) + 1;
      
      // Calcular revenue si existe pricing
      if (service.pricing?.price) {
        stats.totalRevenue += service.pricing.price;
      }
      
      // Servicios que expiran este mes
      const expiresAt = service.expiresAt?.toDate() || service.expirationDate?.toDate();
      if (expiresAt) {
        const now = new Date();
        const isThisMonth = expiresAt.getMonth() === now.getMonth() && 
                           expiresAt.getFullYear() === now.getFullYear();
        if (isThisMonth) {
          stats.expiringThisMonth++;
        }
      }
    });

    return stats;
  };

  // Cargar servicios al montar
  const refetch = () => {
    return fetchServices();
  };

  return {
    services,
    loading,
    error,
    createService,
    updateService,
    deleteService,
    fetchServices,
    getServiceById,
    searchServices,
    updateServiceStatus,
    renewService,
    getServiceStats,
    refetch,
  };
};