'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CreateServiceForm } from '@/types';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

interface ServiceFormProps {
  onSubmit: (data: CreateServiceForm) => Promise<any>;
  onCancel: () => void;
  initialData?: Partial<CreateServiceForm>;
  loading?: boolean;
  mode?: 'create' | 'edit';
  clients?: Array<{ id: string; firstName: string; lastName: string; email: string; }>;
}

const SERVICE_TYPES = [
  { value: 'hosting', label: 'Hosting Web', icon: '🌐' },
  { value: 'vps', label: 'VPS Cloud', icon: '☁️' },
  { value: 'dedicated', label: 'Servidor Dedicado', icon: '🖥️' },
  { value: 'domain', label: 'Dominio', icon: '🌍' },
  { value: 'ssl', label: 'Certificado SSL', icon: '🔐' },
  { value: 'email', label: 'Email Corporativo', icon: '📧' },
  { value: 'cdn', label: 'CDN', icon: '🚀' },
  { value: 'backup', label: 'Backup Cloud', icon: '💾' },
];

const BILLING_CYCLES = [
  { value: 'monthly', label: 'Mensual', months: 1 },
  { value: 'quarterly', label: 'Trimestral', months: 3 },
  { value: 'semiannual', label: 'Semestral', months: 6 },
  { value: 'annual', label: 'Anual', months: 12 },
  { value: 'biennial', label: 'Bienal', months: 24 },
];

const LOCATIONS = [
  { value: 'mexico-city', label: 'Ciudad de México, México' },
  { value: 'guadalajara', label: 'Guadalajara, México' },
  { value: 'monterrey', label: 'Monterrey, México' },
  { value: 'miami', label: 'Miami, Estados Unidos' },
  { value: 'dallas', label: 'Dallas, Estados Unidos' },
];

const CONTROL_PANELS = [
  { value: 'cpanel', label: 'cPanel' },
  { value: 'directadmin', label: 'DirectAdmin' },
  { value: 'plesk', label: 'Plesk' },
  { value: 'custom', label: 'Panel Personalizado' },
];

export const ServiceForm: React.FC<ServiceFormProps> = ({
  onSubmit,
  onCancel,
  initialData,
  loading = false,
  mode = 'create',
  clients = [],
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<CreateServiceForm>({
    defaultValues: {
      clientId: initialData?.clientId || '',
      serviceType: initialData?.serviceType || 'hosting',
      serviceName: initialData?.serviceName || '',
      plan: initialData?.plan || '',


      pricing: initialData?.pricing || {
        price: 0,
        billingCycle: 'monthly',
        currency: 'MXN',
        nextBillingAmount: 0,
      },
      expirationDate: initialData?.expirationDate || (() => {
        const date = new Date();
        date.setMonth(date.getMonth() + 1);
        return date;
      })(),

      notes: initialData?.notes || [],
    },
  });

  const serviceType = watch('serviceType');
  const billingCycle = watch('pricing.billingCycle');

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onFormSubmit = async (data: CreateServiceForm) => {
    try {
      await onSubmit(data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cliente *
                </label>
                <select
                  {...register('clientId', { required: 'Cliente es requerido' })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Seleccionar cliente...</option>
                  {clients.map(client => (
                    <option key={client.id} value={client.id}>
                      {client.firstName} {client.lastName} - {client.email}
                    </option>
                  ))}
                </select>
                {errors.clientId && (
                  <p className="mt-1 text-sm text-red-600">{errors.clientId.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de Servicio *
                </label>
                <select
                  {...register('serviceType', { required: 'Tipo es requerido' })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {SERVICE_TYPES.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.icon} {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre del Servicio *
                </label>
                <input
                  {...register('serviceName', { required: 'Nombre es requerido' })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Mi Hosting Web Premium"
                />
                {errors.serviceName && (
                  <p className="mt-1 text-sm text-red-600">{errors.serviceName.message}</p>
                )}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Plan y Recursos</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre del Plan *
                </label>
                <input
                  {...register('plan.name', { required: 'Nombre del plan es requerido' })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Plan Premium"
                />
              </div>

              {(serviceType === 'hosting' || serviceType === 'vps' || serviceType === 'dedicated') && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Almacenamiento (GB)
                    </label>
                    <input
                      {...register('plan.resources.storage')}
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Transferencia (GB)
                    </label>
                    <input
                      {...register('plan.resources.bandwidth')}
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="1000"
                    />
                  </div>

                  {serviceType === 'hosting' && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Dominios
                        </label>
                        <input
                          {...register('plan.resources.domains')}
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="5"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Bases de Datos
                        </label>
                        <input
                          {...register('plan.resources.databases')}
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="10"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Cuentas de Email
                        </label>
                        <input
                          {...register('plan.resources.emails')}
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="50"
                        />
                      </div>
                    </>
                  )}

                  {(serviceType === 'vps' || serviceType === 'dedicated') && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          CPU (Cores)
                        </label>
                        <input
                          {...register('plan.resources.cpu')}
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="4"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          RAM (GB)
                        </label>
                        <input
                          {...register('plan.resources.ram')}
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="8"
                        />
                      </div>
                    </>
                  )}
                </>
              )}

              {serviceType === 'email' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cuentas de Email
                  </label>
                  <input
                    {...register('plan.resources.emails')}
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="10"
                  />
                </div>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Configuración Técnica</h3>
            
            {(serviceType === 'hosting' || serviceType === 'vps' || serviceType === 'dedicated') && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Ubicación del Servidor
                    </label>
                    <select
                      {...register('server.location')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {LOCATIONS.map(location => (
                        <option key={location.value} value={location.value}>
                          {location.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Panel de Control
                    </label>
                    <select
                      {...register('server.controlPanel')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {CONTROL_PANELS.map(panel => (
                        <option key={panel.value} value={panel.value}>
                          {panel.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Hostname
                    </label>
                    <input
                      {...register('server.hostname')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="server1.arciicloud.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      IP Principal
                    </label>
                    <input
                      {...register('server.ip')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="192.168.1.100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Sistema Operativo
                    </label>
                    <input
                      {...register('server.os')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ubuntu 22.04 LTS"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center">
                    <input
                      {...register('config.backups')}
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-200 focus:ring-opacity-50"
                    />
                    <span className="ml-2 text-sm text-gray-700">Backups Automáticos</span>
                  </label>

                  <label className="flex items-center">
                    <input
                      {...register('config.ssl')}
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-200 focus:ring-opacity-50"
                    />
                    <span className="ml-2 text-sm text-gray-700">SSL Incluido</span>
                  </label>

                  <label className="flex items-center">
                    <input
                      {...register('config.staging')}
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-200 focus:ring-opacity-50"
                    />
                    <span className="ml-2 text-sm text-gray-700">Ambiente de Staging</span>
                  </label>

                  <label className="flex items-center">
                    <input
                      {...register('config.cdn')}
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-200 focus:ring-opacity-50"
                    />
                    <span className="ml-2 text-sm text-gray-700">CDN Incluido</span>
                  </label>
                </div>
              </div>
            )}

            {serviceType === 'domain' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre del Dominio *
                  </label>
                  <input
                    {...register('domain.name', serviceType === 'domain' ? { required: 'Dominio es requerido' } : {})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="miempresa.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center">
                    <input
                      {...register('domain.autoRenew')}
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-200 focus:ring-opacity-50"
                    />
                    <span className="ml-2 text-sm text-gray-700">Renovación Automática</span>
                  </label>

                  <label className="flex items-center">
                    <input
                      {...register('domain.privacy')}
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-200 focus:ring-opacity-50"
                    />
                    <span className="ml-2 text-sm text-gray-700">Protección de Privacidad</span>
                  </label>

                  <label className="flex items-center">
                    <input
                      {...register('domain.locked')}
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-200 focus:ring-opacity-50"
                    />
                    <span className="ml-2 text-sm text-gray-700">Bloqueado contra Transferencias</span>
                  </label>
                </div>
              </div>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Facturación y Detalles</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ciclo de Facturación *
                </label>
                <select
                  {...register('billing.cycle', { required: 'Ciclo de facturación es requerido' })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {BILLING_CYCLES.map(cycle => (
                    <option key={cycle.value} value={cycle.value}>
                      {cycle.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Precio *
                </label>
                <div className="relative">
                  <input
                    {...register('billing.price', { 
                      required: 'Precio es requerido',
                      min: { value: 0, message: 'Precio debe ser mayor a 0' }
                    })}
                    type="number"
                    step="0.01"
                    className="w-full px-3 py-2 pr-16 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="499.00"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <select
                      {...register('billing.currency')}
                      className="border-none bg-transparent text-gray-500 text-sm focus:ring-0"
                    >
                      <option value="MXN">MXN</option>
                      <option value="USD">USD</option>
                    </select>
                  </div>
                </div>
                {errors.billing?.price && (
                  <p className="mt-1 text-sm text-red-600">{errors.billing.price.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fecha de Expiración *
                </label>
                <input
                  {...register('expiresAt', { required: 'Fecha de expiración es requerida' })}
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex items-center">
                <label className="flex items-center">
                  <input
                    {...register('billing.autoRenew')}
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-200 focus:ring-opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-700">Renovación Automática</span>
                </label>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Notas Internas
                </label>
                <textarea
                  {...register('notes')}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Notas internas sobre el servicio..."
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>
          {mode === 'create' ? 'Crear Nuevo Servicio' : 'Editar Servicio'}
        </CardTitle>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Paso {currentStep} de {totalSteps}
          </p>
          <div className="flex space-x-2">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i + 1 === currentStep
                    ? 'bg-blue-600'
                    : i + 1 < currentStep
                    ? 'bg-green-500'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
          {renderStepContent()}

          <div className="flex justify-between border-t pt-6">
            <div>
              {currentStep > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                >
                  Anterior
                </Button>
              )}
            </div>
            
            <div className="space-x-3">
              <Button
                type="button"
                variant="ghost"
                onClick={onCancel}
              >
                Cancelar
              </Button>
              
              {currentStep < totalSteps ? (
                <Button
                  type="button"
                  onClick={nextStep}
                >
                  Siguiente
                </Button>
              ) : (
                <Button
                  type="submit"
                  loading={loading}
                  disabled={loading}
                >
                  {mode === 'create' ? 'Crear Servicio' : 'Guardar Cambios'}
                </Button>
              )}
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};