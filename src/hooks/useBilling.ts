'use client';

import { useState, useEffect, useCallback } from 'react';
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
  Timestamp,
  writeBatch
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { FacturaFormData, PagoFormData, EstadisticasFacturacion } from '@/types/billing';

export const useBilling = () => {
  const [facturas, setFacturas] = useState<FacturaFormData[]>([]);
  const [pagos, setPagos] = useState<PagoFormData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ============ OPERACIONES DE FACTURAS ============

  const fetchFacturas = useCallback(async (clienteId?: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const facturasRef = collection(db, 'facturas');
      let q = query(facturasRef, orderBy('fechaCreacion', 'desc'));
      
      if (clienteId) {
        q = query(facturasRef, where('clienteId', '==', clienteId), orderBy('fechaCreacion', 'desc'));
      }
      
      const snapshot = await getDocs(q);
      const facturasData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as FacturaFormData[];
      
      setFacturas(facturasData);
      return facturasData;
    } catch (err) {
      console.error('Error fetching facturas:', err);
      setError('Error al cargar las facturas');
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  const createFactura = async (facturaData: Omit<FacturaFormData, 'id' | 'fechaCreacion' | 'fechaActualizacion'>): Promise<string> => {
    setError(null);
    
    try {
      const now = new Date().toISOString();
      const newFactura: Omit<FacturaFormData, 'id'> = {
        ...facturaData,
        fechaCreacion: now,
        fechaActualizacion: now,
      };

      const docRef = await addDoc(collection(db, 'facturas'), newFactura);
      
      // Actualizar estado local
      const facturaConId = { id: docRef.id, ...newFactura };
      setFacturas(prev => [facturaConId, ...prev]);
      
      return docRef.id;
    } catch (err) {
      console.error('Error creating factura:', err);
      setError('Error al crear la factura');
      throw err;
    }
  };

  const updateFactura = async (id: string, facturaData: Partial<FacturaFormData>): Promise<void> => {
    setError(null);
    
    try {
      const facturaRef = doc(db, 'facturas', id);
      const updateData = {
        ...facturaData,
        fechaActualizacion: new Date().toISOString(),
      };
      
      await updateDoc(facturaRef, updateData);
      
      // Actualizar estado local
      setFacturas(prev => 
        prev.map(factura => 
          factura.id === id 
            ? { ...factura, ...updateData }
            : factura
        )
      );
    } catch (err) {
      console.error('Error updating factura:', err);
      setError('Error al actualizar la factura');
      throw err;
    }
  };

  const deleteFactura = async (id: string): Promise<void> => {
    setError(null);
    
    try {
      await deleteDoc(doc(db, 'facturas', id));
      
      // Actualizar estado local
      setFacturas(prev => prev.filter(factura => factura.id !== id));
    } catch (err) {
      console.error('Error deleting factura:', err);
      setError('Error al eliminar la factura');
      throw err;
    }
  };

  const getFacturaById = async (id: string): Promise<FacturaFormData | null> => {
    try {
      const facturaDoc = await getDoc(doc(db, 'facturas', id));
      if (facturaDoc.exists()) {
        return { id: facturaDoc.id, ...facturaDoc.data() } as FacturaFormData;
      }
      return null;
    } catch (err) {
      console.error('Error getting factura by id:', err);
      setError('Error al obtener la factura');
      return null;
    }
  };

  // ============ OPERACIONES DE PAGOS ============

  const fetchPagos = useCallback(async (clienteId?: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const pagosRef = collection(db, 'pagos');
      let q = query(pagosRef, orderBy('fechaCreacion', 'desc'));
      
      if (clienteId) {
        q = query(pagosRef, where('clienteId', '==', clienteId), orderBy('fechaCreacion', 'desc'));
      }
      
      const snapshot = await getDocs(q);
      const pagosData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as PagoFormData[];
      
      setPagos(pagosData);
      return pagosData;
    } catch (err) {
      console.error('Error fetching pagos:', err);
      setError('Error al cargar los pagos');
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  const createPago = async (pagoData: Omit<PagoFormData, 'id' | 'fechaCreacion' | 'fechaActualizacion'>): Promise<string> => {
    setError(null);
    
    try {
      const now = new Date().toISOString();
      const newPago: Omit<PagoFormData, 'id'> = {
        ...pagoData,
        fechaCreacion: now,
        fechaActualizacion: now,
      };

      const docRef = await addDoc(collection(db, 'pagos'), newPago);
      
      // Actualizar estado local
      const pagoConId = { id: docRef.id, ...newPago };
      setPagos(prev => [pagoConId, ...prev]);
      
      return docRef.id;
    } catch (err) {
      console.error('Error creating pago:', err);
      setError('Error al crear el pago');
      throw err;
    }
  };

  // ============ OPERACIONES DE TIMBRADO ============

  const timbrarFactura = async (facturaId: string): Promise<boolean> => {
    setError(null);
    
    try {
      // Actualizar estado a "pendiente"
      await updateFactura(facturaId, { estado: 'pendiente' });
      
      // Simular llamada al PAC (reemplazar con integración real)
      const pacResponse = await simularTimbrado(facturaId);
      
      if (pacResponse.success) {
        await updateFactura(facturaId, {
          estado: 'timbrada',
          uuid: pacResponse.uuid,
          fechaTimbrado: pacResponse.fechaTimbrado,
          xmlPath: pacResponse.xml,
          pdfPath: pacResponse.pdf,
          qrCode: pacResponse.qrCode,
          pacResponse
        });
        return true;
      } else {
        await updateFactura(facturaId, {
          estado: 'error',
          pacResponse
        });
        setError(pacResponse.error || 'Error en el timbrado');
        return false;
      }
    } catch (err) {
      console.error('Error timbrar factura:', err);
      setError('Error al timbrar la factura');
      return false;
    }
  };

  const cancelarFactura = async (facturaId: string, motivo: string): Promise<boolean> => {
    setError(null);
    
    try {
      // Simular cancelación en el SAT
      const cancelResponse = await simularCancelacion(facturaId, motivo);
      
      if (cancelResponse.success) {
        await updateFactura(facturaId, {
          estado: 'cancelada'
        });
        return true;
      } else {
        setError(cancelResponse.error || 'Error en la cancelación');
        return false;
      }
    } catch (err) {
      console.error('Error cancelar factura:', err);
      setError('Error al cancelar la factura');
      return false;
    }
  };

  // ============ ESTADÍSTICAS ============

  const getEstadisticasFacturacion = useCallback(async (
    fechaInicio: string, 
    fechaFin: string
  ): Promise<EstadisticasFacturacion> => {
    try {
      const facturasRef = collection(db, 'facturas');
      const q = query(
        facturasRef,
        where('fecha', '>=', fechaInicio),
        where('fecha', '<=', fechaFin),
        orderBy('fecha', 'desc')
      );
      
      const snapshot = await getDocs(q);
      const facturasPeriodo = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as FacturaFormData[];

      // Calcular estadísticas
      const totalFacturas = facturasPeriodo.length;
      const facturasTimbradasExitosamente = facturasPeriodo.filter(f => f.estado === 'timbrada').length;
      const facturasConError = facturasPeriodo.filter(f => f.estado === 'error').length;
      const facturasCanceladas = facturasPeriodo.filter(f => f.estado === 'cancelada').length;

      const montoTotalFacturado = facturasPeriodo
        .filter(f => f.estado === 'timbrada' || f.estado === 'pagada')
        .reduce((sum, f) => sum + f.total, 0);

      const montoTotalCobrado = facturasPeriodo
        .filter(f => f.estado === 'pagada')
        .reduce((sum, f) => sum + f.total, 0);

      const montoPendienteCobro = montoTotalFacturado - montoTotalCobrado;

      // Agrupar por mes
      const facturasPorMes = facturasPeriodo.reduce((acc, factura) => {
        const mes = factura.fecha.substring(0, 7); // YYYY-MM
        const existing = acc.find(item => item.mes === mes);
        
        if (existing) {
          existing.cantidad++;
          existing.monto += factura.total;
        } else {
          acc.push({
            mes,
            cantidad: 1,
            monto: factura.total
          });
        }
        
        return acc;
      }, [] as Array<{ mes: string; cantidad: number; monto: number }>);

      // Top clientes
      const clientesMap = facturasPeriodo.reduce((acc, factura) => {
        if (!acc[factura.clienteId]) {
          acc[factura.clienteId] = {
            clienteId: factura.clienteId,
            clienteNombre: factura.clienteNombre,
            totalFacturado: 0,
            numeroFacturas: 0
          };
        }
        
        acc[factura.clienteId].totalFacturado += factura.total;
        acc[factura.clienteId].numeroFacturas++;
        
        return acc;
      }, {} as Record<string, any>);

      const topClientes = Object.values(clientesMap)
        .sort((a: any, b: any) => b.totalFacturado - a.totalFacturado)
        .slice(0, 10);

      return {
        periodo: {
          inicio: fechaInicio,
          fin: fechaFin
        },
        totalFacturas,
        facturasTimbradasExitosamente,
        facturasConError,
        facturasCanceladas,
        montoTotalFacturado,
        montoTotalCobrado,
        montoPendienteCobro,
        facturasPorMes,
        topClientes
      };
    } catch (err) {
      console.error('Error getting estadísticas:', err);
      throw err;
    }
  }, []);

  // ============ FUNCIONES AUXILIARES ============

  // Generar siguiente folio para una serie
  const getSiguienteFolio = async (serie: string, tipo: 'factura' | 'pago'): Promise<number> => {
    try {
      const collection_name = tipo === 'factura' ? 'facturas' : 'pagos';
      const q = query(
        collection(db, collection_name),
        where('serie', '==', serie),
        orderBy('folio', 'desc')
      );
      
      const snapshot = await getDocs(q);
      
      if (snapshot.empty) {
        return 1;
      }
      
      const ultimoDoc = snapshot.docs[0].data();
      return (ultimoDoc.folio || 0) + 1;
    } catch (err) {
      console.error('Error getting siguiente folio:', err);
      return 1;
    }
  };

  return {
    // Estados
    facturas,
    pagos,
    loading,
    error,
    
    // Operaciones de facturas
    fetchFacturas,
    createFactura,
    updateFactura,
    deleteFactura,
    getFacturaById,
    
    // Operaciones de pagos
    fetchPagos,
    createPago,
    
    // Operaciones de timbrado
    timbrarFactura,
    cancelarFactura,
    
    // Estadísticas
    getEstadisticasFacturacion,
    
    // Utilidades
    getSiguienteFolio
  };
};

// ============ FUNCIONES DE SIMULACIÓN PAC ============

const simularTimbrado = async (facturaId: string): Promise<any> => {
  // Simular delay de API
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Simular 90% de éxito
  const exito = Math.random() > 0.1;
  
  if (exito) {
    return {
      success: true,
      uuid: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      fechaTimbrado: new Date().toISOString(),
      xml: `/storage/xml/${facturaId}.xml`,
      pdf: `/storage/pdf/${facturaId}.pdf`,
      qrCode: `https://verificacfdi.facturaelectronica.sat.gob.mx/default.aspx?id=${Date.now()}`,
    };
  } else {
    return {
      success: false,
      error: 'Error en la validación del comprobante',
      codigoError: 'CFDI33101'
    };
  }
};

const simularCancelacion = async (facturaId: string, motivo: string): Promise<any> => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return {
    success: Math.random() > 0.05, // 95% de éxito en cancelaciones
    error: Math.random() > 0.05 ? null : 'No se puede cancelar: factura con complemento de pago'
  };
};