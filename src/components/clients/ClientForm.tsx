'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CreateClientForm } from '@/types';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

interface ClientFormProps {
  onSubmit: (data: CreateClientForm) => Promise<any>;
  onCancel: () => void;
  initialData?: Partial<CreateClientForm>;
  loading?: boolean;
  mode?: 'create' | 'edit';
}

const MEXICAN_STATES = [
  'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche',
  'Chiapas', 'Chihuahua', 'Ciudad de México', 'Coahuila', 'Colima',
  'Durango', 'Estado de México', 'Guanajuato', 'Guerrero', 'Hidalgo',
  'Jalisco', 'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca',
  'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa',
  'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas'
];

const REGIMEN_FISCAL_OPTIONS = [
  { value: '601', label: 'General de Ley Personas Morales' },
  { value: '603', label: 'Personas Morales con Fines no Lucrativos' },
  { value: '605', label: 'Sueldos y Salarios e Ingresos Asimilados a Salarios' },
  { value: '606', label: 'Arrendamiento' },
  { value: '607', label: 'Régimen de Enajenación o Adquisición de Bienes' },
  { value: '608', label: 'Demás ingresos' },
  { value: '610', label: 'Residentes en el Extranjero sin Establecimiento Permanente en México' },
  { value: '611', label: 'Ingresos por Dividendos (socios y accionistas)' },
  { value: '612', label: 'Personas Físicas con Actividades Empresariales y Profesionales' },
  { value: '614', label: 'Ingresos por intereses' },
  { value: '615', label: 'Régimen de los ingresos por obtención de premios' },
  { value: '616', label: 'Sin obligaciones fiscales' },
  { value: '620', label: 'Sociedades Cooperativas de Producción que optan por diferir sus ingresos' },
  { value: '621', label: 'Incorporación Fiscal' },
  { value: '622', label: 'Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras' },
  { value: '623', label: 'Opcional para Grupos de Sociedades' },
  { value: '624', label: 'Coordinados' },
  { value: '625', label: 'Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas' },
  { value: '626', label: 'Régimen Simplificado de Confianza' },
];

const USO_CFDI_OPTIONS = [
  { value: 'G01', label: 'Adquisición de mercancías' },
  { value: 'G02', label: 'Devoluciones, descuentos o bonificaciones' },
  { value: 'G03', label: 'Gastos en general' },
  { value: 'I01', label: 'Construcciones' },
  { value: 'I02', label: 'Mobilario y equipo de oficina por inversiones' },
  { value: 'I03', label: 'Equipo de transporte' },
  { value: 'I04', label: 'Equipo de computo y accesorios' },
  { value: 'I05', label: 'Dados, troqueles, moldes, matrices y herramental' },
  { value: 'I06', label: 'Comunicaciones telefónicas' },
  { value: 'I07', label: 'Comunicaciones satelitales' },
  { value: 'I08', label: 'Otra maquinaria y equipo' },
  { value: 'D01', label: 'Honorarios médicos, dentales y gastos hospitalarios' },
  { value: 'D02', label: 'Gastos médicos por incapacidad o discapacidad' },
  { value: 'D03', label: 'Gastos funerales' },
  { value: 'D04', label: 'Donativos' },
  { value: 'D05', label: 'Intereses reales efectivamente pagados por créditos hipotecarios' },
  { value: 'D06', label: 'Aportaciones voluntarias al SAR' },
  { value: 'D07', label: 'Primas por seguros de gastos médicos' },
  { value: 'D08', label: 'Gastos de transportación escolar obligatoria' },
  { value: 'D09', label: 'Depósitos en cuentas para el ahorro, primas que tengan como base planes de pensiones' },
  { value: 'D10', label: 'Pagos por servicios educativos (colegiaturas)' },
  { value: 'S01', label: 'Sin efectos fiscales' },
  { value: 'CP01', label: 'Pagos' },
  { value: 'CN01', label: 'Nómina' },
];

export const ClientForm: React.FC<ClientFormProps> = ({
  onSubmit,
  onCancel,
  initialData,
  loading = false,
  mode = 'create',
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<CreateClientForm>({
    defaultValues: {
      firstName: initialData?.firstName || '',
      lastName: initialData?.lastName || '',
      email: initialData?.email || '',
      phone: initialData?.phone || '',
      accountType: initialData?.accountType || 'individual',
      status: initialData?.status || 'active',
      segment: initialData?.segment || 'standard',
      tags: initialData?.tags || [],
      company: initialData?.company,
      fiscal: initialData?.fiscal || {},
      address: initialData?.address || {
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'México',
      },
      preferences: initialData?.preferences || {
        language: 'es',
        timezone: 'America/Mexico_City',
        communication: {
          email: true,
          sms: false,
          whatsapp: false,
          phone: false,
        },
        newsletter: false,
      },
    },
  });

  const accountType = watch('accountType');
  const hasCompany = accountType === 'business' || accountType === 'enterprise';

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

  const onFormSubmit = async (data: CreateClientForm) => {
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
                  Nombre *
                </label>
                <input
                  {...register('firstName', { required: 'Nombre es requerido' })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Juan"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Apellidos *
                </label>
                <input
                  {...register('lastName', { required: 'Apellidos son requeridos' })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Pérez García"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  {...register('email', {
                    required: 'Email es requerido',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Email inválido',
                    },
                  })}
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="juan@empresa.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+52 55 1234 5678"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de Cuenta *
                </label>
                <select
                  {...register('accountType', { required: 'Tipo de cuenta es requerido' })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="individual">Individual</option>
                  <option value="business">Negocio</option>
                  <option value="enterprise">Empresa</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Segmento
                </label>
                <select
                  {...register('segment')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="standard">Estándar</option>
                  <option value="premium">Premium</option>
                  <option value="vip">VIP</option>
                  <option value="enterprise">Enterprise</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            {hasCompany && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Información de la Empresa</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre de la Empresa *
                    </label>
                    <input
                      {...register('company.name', hasCompany ? { required: 'Nombre de empresa es requerido' } : {})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Mi Empresa SA de CV"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tamaño de Empresa
                    </label>
                    <select
                      {...register('company.size')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="small">Pequeña (1-50 empleados)</option>
                      <option value="medium">Mediana (51-250 empleados)</option>
                      <option value="enterprise">Grande (250+ empleados)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Industria
                    </label>
                    <input
                      {...register('company.industry')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tecnología, Comercio, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Sitio Web
                    </label>
                    <input
                      {...register('company.website')}
                      type="url"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://www.miempresa.com"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Dirección</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Calle y Número
                  </label>
                  <input
                    {...register('address.street')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Av. Reforma 123, Col. Centro"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ciudad
                  </label>
                  <input
                    {...register('address.city')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ciudad de México"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Estado
                  </label>
                  <select
                    {...register('address.state')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Seleccionar estado...</option>
                    {MEXICAN_STATES.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Código Postal
                  </label>
                  <input
                    {...register('address.zipCode')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="01000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    País
                  </label>
                  <input
                    {...register('address.country')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    defaultValue="México"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Información Fiscal (México)</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    RFC
                  </label>
                  <input
                    {...register('fiscal.rfc', {
                      pattern: {
                        value: /^([A-ZÑ&]{3,4})([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])([A-Z0-9]{2})([0-9A])$/,
                        message: 'RFC inválido',
                      },
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="GODE561231GR8"
                    style={{ textTransform: 'uppercase' }}
                  />
                  {errors.fiscal?.rfc && (
                    <p className="mt-1 text-sm text-red-600">{errors.fiscal.rfc.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Razón Social
                  </label>
                  <input
                    {...register('fiscal.businessName')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Mi Empresa SA de CV"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Régimen Fiscal
                  </label>
                  <select
                    {...register('fiscal.regimenFiscal')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Seleccionar régimen...</option>
                    {REGIMEN_FISCAL_OPTIONS.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.value} - {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Uso de CFDI
                  </label>
                  <select
                    {...register('fiscal.usoCFDI')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Seleccionar uso...</option>
                    {USO_CFDI_OPTIONS.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.value} - {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Preferencias</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Idioma
                  </label>
                  <select
                    {...register('preferences.language')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="es">Español</option>
                    <option value="en">English</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Zona Horaria
                  </label>
                  <select
                    {...register('preferences.timezone')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="America/Mexico_City">México (CDMX)</option>
                    <option value="America/Tijuana">México (Tijuana)</option>
                    <option value="America/Cancun">México (Cancún)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  Preferencias de Comunicación
                </label>
                
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      {...register('preferences.communication.email')}
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-200 focus:ring-opacity-50"
                    />
                    <span className="ml-2 text-sm text-gray-700">Email</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      {...register('preferences.communication.sms')}
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-200 focus:ring-opacity-50"
                    />
                    <span className="ml-2 text-sm text-gray-700">SMS</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      {...register('preferences.communication.whatsapp')}
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-200 focus:ring-opacity-50"
                    />
                    <span className="ml-2 text-sm text-gray-700">WhatsApp</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      {...register('preferences.communication.phone')}
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-200 focus:ring-opacity-50"
                    />
                    <span className="ml-2 text-sm text-gray-700">Teléfono</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="flex items-center">
                  <input
                    {...register('preferences.newsletter')}
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-200 focus:ring-opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Suscribirse al newsletter con novedades y ofertas
                  </span>
                </label>
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
          {mode === 'create' ? 'Crear Nuevo Cliente' : 'Editar Cliente'}
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
                  {mode === 'create' ? 'Crear Cliente' : 'Guardar Cambios'}
                </Button>
              )}
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};