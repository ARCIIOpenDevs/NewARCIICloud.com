'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { Button } from '@/components/ui';
import { useBilling } from '@/hooks/useBilling';
import { useClients } from '@/hooks/useClients';
import { useServices } from '@/hooks/useServices';
import { FacturaFormData, ConceptoFactura, TipoComprobante, MetodoPago, FormaPago } from '@/types/billing';
import { ClientFormData, ServiceFormData } from '@/types/crm';

const NuevaFacturaPage: React.FC = () => {
  const router = useRouter();
  const { createFactura, getSiguienteFolio } = useBilling();
  const { clients } = useClients();
  const { services, fetchServices } = useServices();

  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedClient, setSelectedClient] = useState<ClientFormData | null>(null);
  const [selectedServices, setSelectedServices] = useState<ServiceFormData[]>([]);
  
  const [formData, setFormData] = useState<Partial<FacturaFormData>>({
    serie: 'A',
    tipoComprobante: 'I',
    moneda: 'MXN',
    metodoPago: 'PUE',
    formaPago: '03',
    fecha: new Date().toISOString().split('T')[0],
    conceptos: [],
    impuestos: [],
    estado: 'borrador',
    creadoPor: 'admin', // Cambiar por usuario actual
  });

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  useEffect(() => {
    if (formData.serie) {
      getSiguienteFolio(formData.serie, 'factura').then(folio => {
        setFormData(prev => ({ ...prev, folio }));
      });
    }
  }, [formData.serie, getSiguienteFolio]);

  const handleClientSelect = (client: ClientFormData) => {
    setSelectedClient(client);
    setFormData(prev => ({
      ...prev,
      clienteId: client.id!,
      clienteNombre: `${client.firstName} ${client.lastName}`,
      clienteRFC: client.fiscal?.rfc || '',
      clienteRazonSocial: client.fiscal?.businessName || `${client.firstName} ${client.lastName}`,
      clienteDomicilio: {
        calle: client.address?.street || '',
        codigoPostal: client.address?.zipCode || '',
        colonia: '',
        municipio: client.address?.city || '',
        estado: client.address?.state || '',
        pais: client.address?.country || 'México'
      },
      clienteRegimenFiscal: client.fiscal?.regimenFiscal || '',
      clienteUsoCFDI: client.fiscal?.usoCFDI || '',
    }));

    // Buscar servicios activos del cliente
    const serviciosCliente = services.filter(service => 
      service.clientId === client.id && service.status === 'active'
    ).map(service => ({
      ...service,
      activationDate: service.activationDate?.toDate(),
      expirationDate: service.expirationDate?.toDate(),
      expiresAt: service.expiresAt?.toDate(),
      nextRenewalDate: service.nextRenewalDate?.toDate(),
    }));
    setSelectedServices(serviciosCliente);
  };

  const agregarConcepto = () => {
    const nuevoConcepto: ConceptoFactura = {
      claveProdServ: '84111506', // Servicios de alojamiento web
      cantidad: 1,
      claveUnidad: 'E48', // Unidad de servicio
      unidad: 'Servicio',
      descripcion: '',
      valorUnitario: 0,
      importe: 0,
    };

    setFormData(prev => ({
      ...prev,
      conceptos: [...(prev.conceptos || []), nuevoConcepto]
    }));
  };

  const actualizarConcepto = (index: number, concepto: Partial<ConceptoFactura>) => {
    setFormData(prev => ({
      ...prev,
      conceptos: prev.conceptos?.map((c, i) => 
        i === index 
          ? { 
              ...c, 
              ...concepto,
              importe: (concepto.cantidad || c.cantidad) * (concepto.valorUnitario || c.valorUnitario)
            }
          : c
      )
    }));
  };

  const eliminarConcepto = (index: number) => {
    setFormData(prev => ({
      ...prev,
      conceptos: prev.conceptos?.filter((_, i) => i !== index)
    }));
  };

  const calcularTotales = () => {
    const conceptos = formData.conceptos || [];
    const subtotal = conceptos.reduce((sum, c) => sum + c.importe, 0);
    const iva = subtotal * 0.16; // 16% IVA
    const total = subtotal + iva;

    setFormData(prev => ({
      ...prev,
      subtotal,
      impuestos: [{
        tipo: 'Traslado',
        impuesto: '002', // IVA
        importe: iva
      }],
      total
    }));
  };

  useEffect(() => {
    calcularTotales();
  }, [formData.conceptos]);

  const agregarServicioComoConcepto = (service: ServiceFormData) => {
    const concepto: ConceptoFactura = {
      claveProdServ: getClaveProductoServicio(service.serviceType || 'hosting'),
      cantidad: 1,
      claveUnidad: 'E48',
      unidad: 'Servicio',
      descripcion: `${service.serviceName} - Plan: ${service.plan}`,
      valorUnitario: service.pricing?.price || 0,
      importe: service.pricing?.price || 0,
    };

    setFormData(prev => ({
      ...prev,
      conceptos: [...(prev.conceptos || []), concepto]
    }));
  };

  const getClaveProductoServicio = (tipoServicio: string) => {
    const claves = {
      hosting: '84111506',    // Servicios de alojamiento web
      vps: '81112001',        // Servicios de procesamiento de datos
      dedicated: '81112002',  // Servicios de servidor dedicado
      domain: '84111507',     // Servicios de registro de dominio
      ssl: '84111508',        // Servicios de certificado SSL
      email: '84111509',      // Servicios de correo electrónico
      cdn: '84111510',        // Servicios de red de distribución
      backup: '84111511',     // Servicios de respaldo
    };
    return claves[tipoServicio as keyof typeof claves] || '84111506';
  };

  const handleSubmit = async () => {
    if (!formData.clienteId || !formData.conceptos?.length) {
      alert('⚠️ Debe seleccionar un cliente y agregar al menos un concepto');
      return;
    }

    setLoading(true);
    try {
      const facturaId = await createFactura(formData as Omit<FacturaFormData, 'id' | 'fechaCreacion' | 'fechaActualizacion'>);
      alert('✅ Factura creada exitosamente');
      router.push(`/admin/billing/detalle/${facturaId}`);
    } catch (error) {
      console.error('Error creating factura:', error);
      alert('❌ Error al crear la factura');
    } finally {
      setLoading(false);
    }
  };

  const renderStep1 = () => (
    <Card>
      <CardHeader>
        <CardTitle>1️⃣ Información General</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Serie
            </label>
            <select
              value={formData.serie}
              onChange={(e) => setFormData(prev => ({ ...prev, serie: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="A">Serie A</option>
              <option value="B">Serie B</option>
              <option value="FAC">FAC</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Folio
            </label>
            <input
              type="number"
              value={formData.folio || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, folio: parseInt(e.target.value) }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fecha
            </label>
            <input
              type="date"
              value={formData.fecha}
              onChange={(e) => setFormData(prev => ({ ...prev, fecha: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Método de Pago
            </label>
            <select
              value={formData.metodoPago}
              onChange={(e) => setFormData(prev => ({ ...prev, metodoPago: e.target.value as MetodoPago }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="PUE">PUE - Pago en una sola exhibición</option>
              <option value="PPD">PPD - Pago en parcialidades</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Forma de Pago
            </label>
            <select
              value={formData.formaPago}
              onChange={(e) => setFormData(prev => ({ ...prev, formaPago: e.target.value as FormaPago }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="01">01 - Efectivo</option>
              <option value="02">02 - Cheque nominativo</option>
              <option value="03">03 - Transferencia electrónica</option>
              <option value="04">04 - Tarjeta de crédito</option>
              <option value="28">28 - Tarjeta de débito</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end">
          <Button 
            onClick={() => setCurrentStep(2)}
            disabled={!formData.serie || !formData.folio}
          >
            Siguiente: Seleccionar Cliente →
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderStep2 = () => (
    <Card>
      <CardHeader>
        <CardTitle>2️⃣ Seleccionar Cliente</CardTitle>
      </CardHeader>
      <CardContent>
        {selectedClient ? (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="font-medium text-green-800">✅ Cliente Seleccionado:</h3>
            <p className="text-green-700">{`${selectedClient.firstName} ${selectedClient.lastName}`}</p>
            <p className="text-sm text-green-600">RFC: {selectedClient.fiscal?.rfc || 'No disponible'}</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedClient(null);
                setSelectedServices([]);
                setFormData(prev => ({
                  ...prev,
                  clienteId: undefined,
                  clienteNombre: undefined,
                  clienteRFC: undefined
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
                    <p className="text-sm text-gray-600">RFC: {client.fiscal?.rfc}</p>
                    <p className="text-sm text-gray-500">{client.email}</p>
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

        <div className="flex justify-between mt-6">
          <Button variant="outline" onClick={() => setCurrentStep(1)}>
            ← Anterior
          </Button>
          <Button 
            onClick={() => setCurrentStep(3)}
            disabled={!selectedClient}
          >
            Siguiente: Agregar Conceptos →
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderStep3 = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          3️⃣ Conceptos de Facturación
          <Button onClick={agregarConcepto} size="sm">
            ➕ Agregar Concepto
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Servicios del cliente */}
        {selectedServices.length > 0 && (
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">🛠️ Servicios Activos del Cliente:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedServices.map((service, index) => (
                <div
                  key={`${service.serviceName}-${service.serviceType}-${index}`}
                  className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-medium text-sm">{service.serviceName}</h5>
                      <p className="text-xs text-gray-500">{service.serviceType}</p>
                      <p className="text-sm font-medium text-green-600">
                        ${service.pricing?.price || 0} MXN - {service.pricing?.billingCycle || 'monthly'}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => agregarServicioComoConcepto(service)}
                    >
                      ➕ Agregar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Conceptos agregados */}
        <div className="space-y-4">
          {(formData.conceptos || []).map((concepto, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Cantidad
                  </label>
                  <input
                    type="number"
                    value={concepto.cantidad}
                    onChange={(e) => actualizarConcepto(index, { cantidad: parseFloat(e.target.value) || 0 })}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                    min="0.01"
                    step="0.01"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Descripción
                  </label>
                  <input
                    type="text"
                    value={concepto.descripcion}
                    onChange={(e) => actualizarConcepto(index, { descripcion: e.target.value })}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                    placeholder="Descripción del producto/servicio"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Precio Unitario
                  </label>
                  <input
                    type="number"
                    value={concepto.valorUnitario}
                    onChange={(e) => actualizarConcepto(index, { valorUnitario: parseFloat(e.target.value) || 0 })}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                    min="0.01"
                    step="0.01"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Importe
                  </label>
                  <div className="w-full px-2 py-1 border border-gray-200 rounded text-sm bg-gray-50">
                    ${concepto.importe.toFixed(2)}
                  </div>
                </div>

                <div className="flex items-end">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => eliminarConcepto(index)}
                    className="text-red-600 hover:text-red-700"
                  >
                    🗑️
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {(formData.conceptos || []).length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <div className="text-4xl mb-2">📄</div>
            <p>No hay conceptos agregados</p>
            <p className="text-sm">Agregue productos o servicios a facturar</p>
          </div>
        )}

        <div className="flex justify-between mt-6">
          <Button variant="outline" onClick={() => setCurrentStep(2)}>
            ← Anterior
          </Button>
          <Button 
            onClick={() => setCurrentStep(4)}
            disabled={(formData.conceptos || []).length === 0}
          >
            Siguiente: Revisar →
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderStep4 = () => (
    <Card>
      <CardHeader>
        <CardTitle>4️⃣ Resumen y Confirmación</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Información general */}
          <div>
            <h4 className="font-medium text-gray-900 mb-2">📋 Información General:</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p><strong>Serie-Folio:</strong> {formData.serie}-{formData.folio}</p>
              <p><strong>Fecha:</strong> {formData.fecha}</p>
              <p><strong>Método de Pago:</strong> {formData.metodoPago}</p>
              <p><strong>Forma de Pago:</strong> {formData.formaPago}</p>
            </div>
          </div>

          {/* Cliente */}
          <div>
            <h4 className="font-medium text-gray-900 mb-2">👤 Cliente:</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p><strong>Nombre:</strong> {formData.clienteNombre}</p>
              <p><strong>RFC:</strong> {formData.clienteRFC}</p>
            </div>
          </div>

          {/* Conceptos y totales */}
          <div>
            <h4 className="font-medium text-gray-900 mb-2">📝 Conceptos:</h4>
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              {(formData.conceptos || []).map((concepto, index) => (
                <div key={index} className="flex justify-between">
                  <span>{concepto.descripcion} ({concepto.cantidad} x ${concepto.valorUnitario})</span>
                  <span>${concepto.importe.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Totales */}
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-2">
              <span>Subtotal:</span>
              <span>${(formData.subtotal || 0).toFixed(2)} MXN</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span>IVA (16%):</span>
              <span>${((formData.impuestos?.[0]?.importe || 0)).toFixed(2)} MXN</span>
            </div>
            <div className="flex justify-between items-center text-lg font-bold border-t pt-2">
              <span>Total:</span>
              <span>${(formData.total || 0).toFixed(2)} MXN</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <Button variant="outline" onClick={() => setCurrentStep(3)}>
            ← Anterior
          </Button>
          <Button 
            onClick={handleSubmit}
            disabled={loading}
            className="bg-green-600 hover:bg-green-700"
          >
            {loading ? '⏳ Creando...' : '✅ Crear Factura'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header con steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">📄 Nueva Factura CFDI 4.0</h1>
            <p className="text-gray-600">Crear comprobante fiscal digital</p>
          </div>
          <Button
            variant="outline"
            onClick={() => router.push('/admin/billing')}
          >
            ← Volver a Facturación
          </Button>
        </div>

        {/* Progress steps */}
        <div className="flex items-center space-x-4 mb-6">
          {[1, 2, 3, 4].map(step => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step === currentStep 
                  ? 'bg-blue-600 text-white' 
                  : step < currentStep
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-600'
              }`}>
                {step < currentStep ? '✓' : step}
              </div>
              {step < 4 && (
                <div className={`w-16 h-1 mx-2 ${
                  step < currentStep ? 'bg-green-600' : 'bg-gray-200'
                }`}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Steps content */}
      {currentStep === 1 && renderStep1()}
      {currentStep === 2 && renderStep2()}
      {currentStep === 3 && renderStep3()}
      {currentStep === 4 && renderStep4()}
    </div>
  );
};

export default NuevaFacturaPage;