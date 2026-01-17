'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon,
  ChatBubbleLeftRightIcon,
  ComputerDesktopIcon,
  CloudIcon,
  CogIcon 
} from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  currentProvider: string;
  subject: string;
  message: string;
  newsletter: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  projectType?: string;
}

const contactMethods = [
  {
    title: "Soporte Técnico 24/7",
    description: "Para emergencias y soporte técnico inmediato",
    value: "+52 55 4738-1829",
    available: "Disponible 24 horas, 7 días de la semana",
    actionText: "Llamar Ahora",
    icon: PhoneIcon,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50"
  },
  {
    title: "Ventas & Consultas",
    description: "Para nuevos proyectos y cotizaciones",
    value: "ventas@arciicloud.com",
    available: "Respuesta en menos de 2 horas",
    actionText: "Enviar Email",
    icon: EnvelopeIcon,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "Chat en Vivo",
    description: "Habla directamente con nuestros expertos",
    value: "Chat disponible",
    available: "Lun-Vie: 9AM-8PM, Sáb: 10AM-4PM",
    actionText: "Iniciar Chat",
    icon: ChatBubbleLeftRightIcon,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  }
];

const projectTypes = [
  { id: 'hosting', name: 'Hosting Web', icon: CloudIcon },
  { id: 'migration', name: 'Migración', icon: ComputerDesktopIcon },
  { id: 'custom', name: 'Proyecto Personalizado', icon: CogIcon }
];

const budgetRanges = [
  { id: '1', value: '500-2000', label: '$500 - $2,000 MXN/mes' },
  { id: '2', value: '2000-5000', label: '$2,000 - $5,000 MXN/mes' },
  { id: '3', value: '5000-10000', label: '$5,000 - $10,000 MXN/mes' },
  { id: '4', value: '10000+', label: '$10,000+ MXN/mes' }
];

const timelineOptions = [
  { id: '1', value: 'inmediato', label: 'Lo antes posible' },
  { id: '2', value: '1-2semanas', label: 'En 1-2 semanas' },
  { id: '3', value: '1mes', label: 'En el próximo mes' },
  { id: '4', value: '3meses', label: 'En los próximos 3 meses' }
];

const officeLocations = [
  {
    city: "Ciudad de México",
    address: "Av. Reforma 222, Col. Juárez, CDMX",
    phone: "+52 55 4738-1829",
    hours: "Lun-Vie: 9AM-7PM"
  },
  {
    city: "Guadalajara",
    address: "Av. Chapultepec 500, Col. Americana",
    phone: "+52 33 3615-8900",
    hours: "Lun-Vie: 9AM-6PM"
  },
  {
    city: "Monterrey",
    address: "Av. Constitución 1000, Centro",
    phone: "+52 81 8311-2200",
    hours: "Lun-Vie: 8AM-6PM"
  }
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    currentProvider: '',
    subject: '',
    message: '',
    newsletter: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'El asunto es requerido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Selecciona un tipo de proyecto';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        currentProvider: '',
        subject: '',
        message: '',
        newsletter: false
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <section className="py-20 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="p-8">
            <CardContent>
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                ¡Mensaje Enviado Exitosamente!
              </h2>
              <p className="text-xl text-secondary-600 mb-6">
                Gracias por contactarnos. Nuestro equipo revisará tu consulta y te responderá 
                en un plazo máximo de 2 horas durante horario laboral.
              </p>
              <div className="space-y-4">
                <Button variant="gradient" onClick={() => setShowSuccess(false)}>
                  Enviar Otra Consulta
                </Button>
                <Button variant="outline" onClick={() => window.open('#', '_blank')}>
                  Iniciar Chat en Vivo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Contáctanos
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            ¿Listo para llevar tu proyecto al siguiente nivel? Nuestro equipo de expertos 
            está aquí para ayudarte a encontrar la solución perfecta.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">
              Múltiples Formas de Contacto
            </h2>
            
            {contactMethods.map((method, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${method.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <method.icon className={`h-6 w-6 ${method.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-secondary-900 mb-1">{method.title}</h3>
                      <p className="text-secondary-600 text-sm mb-2">{method.description}</p>
                      <p className="font-medium text-secondary-900 mb-2">{method.value}</p>
                      <p className="text-xs text-secondary-500 mb-3">{method.available}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        {method.actionText}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold text-secondary-900">Cuéntanos sobre tu Proyecto</h2>
                <p className="text-secondary-600">
                  Completa este formulario y te contactaremos con una propuesta personalizada
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-secondary-900 mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={cn(
                          "w-full p-3 border rounded-lg focus:outline-none focus:ring-2",
                          errors.name
                            ? "border-red-300 focus:ring-red-500"
                            : "border-secondary-200 focus:ring-primary-500"
                        )}
                        placeholder="Tu nombre completo"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-secondary-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={cn(
                          "w-full p-3 border rounded-lg focus:outline-none focus:ring-2",
                          errors.email
                            ? "border-red-300 focus:ring-red-500"
                            : "border-secondary-200 focus:ring-primary-500"
                        )}
                        placeholder="tu@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-secondary-900 mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="w-full p-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-secondary-900 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full p-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="+52 55 1234 5678"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-sm font-medium text-secondary-900 mb-3">
                      Tipo de proyecto *
                    </label>
                    <div className="grid md:grid-cols-3 gap-3">
                      {projectTypes.map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => handleInputChange('projectType', type.id)}
                          className={cn(
                            "p-3 border rounded-lg text-left transition-all",
                            formData.projectType === type.id
                              ? "border-primary-500 bg-primary-50 text-primary-700"
                              : "border-secondary-200 hover:border-secondary-300 text-secondary-700"
                          )}
                        >
                          <div className="flex items-center gap-2">
                            <type.icon className="h-4 w-4" />
                            <span className="text-sm font-medium">{type.name}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                    {errors.projectType && (
                      <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>
                    )}
                  </div>

                  {/* Budget and Timeline */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-secondary-900 mb-2">
                        Presupuesto estimado
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                        className="w-full p-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      >
                        <option value="">Selecciona un rango</option>
                        {budgetRanges.map((range) => (
                          <option key={range.id} value={range.value}>
                            {range.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-secondary-900 mb-2">
                        Cronología
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => handleInputChange('timeline', e.target.value)}
                        className="w-full p-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      >
                        <option value="">¿Cuándo necesitas iniciar?</option>
                        {timelineOptions.map((option) => (
                          <option key={option.id} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Current Provider */}
                  <div>
                    <label className="block text-sm font-medium text-secondary-900 mb-2">
                      Proveedor actual (opcional)
                    </label>
                    <input
                      type="text"
                      value={formData.currentProvider}
                      onChange={(e) => handleInputChange('currentProvider', e.target.value)}
                      className="w-full p-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="¿Con quién tienes hosting actualmente?"
                    />
                  </div>

                  {/* Subject and Message */}
                  <div>
                    <label className="block text-sm font-medium text-secondary-900 mb-2">
                      Asunto *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className={cn(
                        "w-full p-3 border rounded-lg focus:outline-none focus:ring-2",
                        errors.subject
                          ? "border-red-300 focus:ring-red-500"
                          : "border-secondary-200 focus:ring-primary-500"
                      )}
                      placeholder="Resumen de tu consulta"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-900 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={5}
                      className={cn(
                        "w-full p-3 border rounded-lg focus:outline-none focus:ring-2 resize-none",
                        errors.message
                          ? "border-red-300 focus:ring-red-500"
                          : "border-secondary-200 focus:ring-primary-500"
                      )}
                      placeholder="Cuéntanos más detalles sobre tu proyecto, necesidades específicas, y cualquier pregunta que tengas..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Newsletter */}
                  <div>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.newsletter}
                        onChange={(e) => handleInputChange('newsletter', e.target.checked)}
                        className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                      />
                      <span className="text-sm text-secondary-700">
                        Suscribirme al newsletter para recibir tips técnicos y ofertas especiales
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      variant="gradient" 
                      size="lg" 
                      className="flex-1"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="lg"
                      onClick={() => window.open('#', '_blank')}
                    >
                      Chat en Vivo
                    </Button>
                  </div>

                  <p className="text-xs text-secondary-500 text-center">
                    Al enviar este formulario, aceptas nuestros términos de servicio y política de privacidad.
                    Respetamos tu privacidad y nunca compartimos tu información.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Office Locations */}
        <div>
          <h2 className="text-2xl font-bold text-center text-secondary-900 mb-12">
            Nuestras Oficinas en México
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {officeLocations.map((office, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 transition-colors">
                    <MapPinIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary-900 mb-2">{office.city}</h3>
                  <p className="text-secondary-600 text-sm mb-3">{office.address}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-secondary-700">
                      <PhoneIcon className="h-4 w-4" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-secondary-700">
                      <ClockIcon className="h-4 w-4" />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}