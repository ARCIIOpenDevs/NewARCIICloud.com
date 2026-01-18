'use client';

import { useState, useEffect } from 'react';

// Simulamos datos de estado en tiempo real
const systemStatus = {
  overall: 'operational', // operational, degraded, outage
  lastUpdate: new Date().toISOString(),
  uptime: '99.98%',
  incidents: 0
};

const services = [
  {
    id: 'hosting',
    name: 'Hosting Web',
    description: 'Servidores de hosting compartido y WordPress',
    status: 'operational',
    uptime: '99.99%',
    responseTime: 89,
    lastIncident: '2025-11-15',
    regions: [
      { name: 'México (CDMX)', status: 'operational', responseTime: 67 },
      { name: 'México (GDL)', status: 'operational', responseTime: 72 },
      { name: 'México (MTY)', status: 'operational', responseTime: 58 },
      { name: 'USA (Dallas)', status: 'operational', responseTime: 134 }
    ]
  },
  {
    id: 'vps',
    name: 'Servidores VPS',
    description: 'Servidores virtuales privados Linux y Windows',
    status: 'operational',
    uptime: '99.97%',
    responseTime: 45,
    lastIncident: '2025-12-03',
    regions: [
      { name: 'México (CDMX)', status: 'operational', responseTime: 42 },
      { name: 'México (GDL)', status: 'operational', responseTime: 48 },
      { name: 'USA (Dallas)', status: 'operational', responseTime: 67 }
    ]
  },
  {
    id: 'dedicados',
    name: 'Servidores Dedicados',
    description: 'Servidores físicos dedicados de alta performance',
    status: 'operational',
    uptime: '100%',
    responseTime: 28,
    lastIncident: '2025-10-22',
    regions: [
      { name: 'México (CDMX)', status: 'operational', responseTime: 25 },
      { name: 'USA (Dallas)', status: 'operational', responseTime: 89 }
    ]
  },
  {
    id: 'cloud',
    name: 'Cloud Storage',
    description: 'Almacenamiento en la nube y CDN',
    status: 'maintenance',
    uptime: '99.95%',
    responseTime: 156,
    lastIncident: '2026-01-17',
    maintenanceEnd: '2026-01-17T23:00:00Z',
    regions: [
      { name: 'México (CDMX)', status: 'maintenance', responseTime: 234 },
      { name: 'México (GDL)', status: 'operational', responseTime: 123 },
      { name: 'USA (Dallas)', status: 'operational', responseTime: 178 }
    ]
  },
  {
    id: 'dns',
    name: 'DNS & Email',
    description: 'Servicios de DNS y correo electrónico',
    status: 'operational',
    uptime: '99.99%',
    responseTime: 12,
    lastIncident: '2025-09-18',
    regions: [
      { name: 'México (CDMX)', status: 'operational', responseTime: 8 },
      { name: 'México (GDL)', status: 'operational', responseTime: 11 },
      { name: 'México (MTY)', status: 'operational', responseTime: 9 },
      { name: 'USA (Dallas)', status: 'operational', responseTime: 23 }
    ]
  },
  {
    id: 'api',
    name: 'API & Panel',
    description: 'API de gestión y panel de control',
    status: 'operational',
    uptime: '99.98%',
    responseTime: 234,
    lastIncident: '2025-12-28',
    regions: [
      { name: 'México (CDMX)', status: 'operational', responseTime: 201 },
      { name: 'USA (Dallas)', status: 'operational', responseTime: 298 }
    ]
  }
];

const recentIncidents = [
  {
    id: 1,
    title: 'Mantenimiento Programado - Cloud Storage',
    description: 'Actualización de infraestructura de almacenamiento en la nube para mejorar rendimiento',
    status: 'investigating',
    severity: 'maintenance',
    startTime: '2026-01-17T22:00:00Z',
    endTime: '2026-01-17T23:00:00Z',
    affectedServices: ['cloud'],
    updates: [
      {
        time: '2026-01-17T22:15:00Z',
        message: 'Mantenimiento en progreso. Tiempo estimado: 45 minutos',
        status: 'investigating'
      },
      {
        time: '2026-01-17T22:00:00Z',
        message: 'Iniciando mantenimiento programado del sistema de almacenamiento',
        status: 'investigating'
      }
    ]
  },
  {
    id: 2,
    title: 'Latencia elevada en VPS México (GDL)',
    description: 'Algunos servidores VPS experimentaron latencia elevada durante 12 minutos',
    status: 'resolved',
    severity: 'minor',
    startTime: '2025-12-03T14:23:00Z',
    endTime: '2025-12-03T14:35:00Z',
    affectedServices: ['vps'],
    updates: [
      {
        time: '2025-12-03T14:35:00Z',
        message: 'Problema resuelto. Todos los servicios operando normalmente',
        status: 'resolved'
      },
      {
        time: '2025-12-03T14:28:00Z',
        message: 'Implementando corrección. Latencia mejorando progresivamente',
        status: 'monitoring'
      },
      {
        time: '2025-12-03T14:23:00Z',
        message: 'Investigando reportes de latencia elevada en datacenter GDL',
        status: 'investigating'
      }
    ]
  },
  {
    id: 3,
    title: 'Degradación menor en Panel de Control',
    description: 'El panel de control experimentó cargas lentas durante el horario pico',
    status: 'resolved',
    severity: 'minor',
    startTime: '2025-12-28T19:45:00Z',
    endTime: '2025-12-28T20:12:00Z',
    affectedServices: ['api'],
    updates: [
      {
        time: '2025-12-28T20:12:00Z',
        message: 'Panel funcionando normalmente. Optimizaciones aplicadas exitosamente',
        status: 'resolved'
      },
      {
        time: '2025-12-28T19:58:00Z',
        message: 'Aplicando optimizaciones de base de datos para mejorar rendimiento',
        status: 'monitoring'
      },
      {
        time: '2025-12-28T19:45:00Z',
        message: 'Detectada degradación en tiempos de respuesta del panel',
        status: 'investigating'
      }
    ]
  }
];

const uptimeHistory = [
  { date: '2026-01', uptime: 99.98 },
  { date: '2025-12', uptime: 99.95 },
  { date: '2025-11', uptime: 99.99 },
  { date: '2025-10', uptime: 100.00 },
  { date: '2025-09', uptime: 99.97 },
  { date: '2025-08', uptime: 99.99 }
];

export default function EstadoPage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'operational': return 'text-green-600 bg-green-100';
      case 'degraded': return 'text-yellow-600 bg-yellow-100';
      case 'outage': return 'text-red-600 bg-red-100';
      case 'maintenance': return 'text-blue-600 bg-blue-100';
      default: return 'text-secondary-600 bg-secondary-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'operational': return '✅';
      case 'degraded': return '⚠️';
      case 'outage': return '🔴';
      case 'maintenance': return '🔧';
      default: return '❓';
    }
  };

  const getStatusText = (status: string) => {
    switch(status) {
      case 'operational': return 'Operativo';
      case 'degraded': return 'Degradado';
      case 'outage': return 'Fuera de Servicio';
      case 'maintenance': return 'Mantenimiento';
      default: return 'Desconocido';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch(severity) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'major': return 'text-orange-600 bg-orange-100';
      case 'minor': return 'text-yellow-600 bg-yellow-100';
      case 'maintenance': return 'text-blue-600 bg-blue-100';
      default: return 'text-secondary-600 bg-secondary-100';
    }
  };

  const getIncidentStatusColor = (status: string) => {
    switch(status) {
      case 'investigating': return 'text-blue-600 bg-blue-100';
      case 'identified': return 'text-yellow-600 bg-yellow-100';
      case 'monitoring': return 'text-orange-600 bg-orange-100';
      case 'resolved': return 'text-green-600 bg-green-100';
      default: return 'text-secondary-600 bg-secondary-100';
    }
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('es-MX', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });
  };

  const formatDuration = (start: string, end?: string) => {
    const startTime = new Date(start);
    const endTime = end ? new Date(end) : new Date();
    const diff = Math.round((endTime.getTime() - startTime.getTime()) / (1000 * 60));
    
    if (diff < 60) return `${diff} min`;
    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;
    return `${hours}h ${minutes}m`;
  };

  return (
    <main className="min-h-screen pt-20 bg-secondary-50">
      
      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            
            <div className="inline-flex items-center mb-6">
              <div className={`w-4 h-4 rounded-full mr-3 ${
                systemStatus.overall === 'operational' ? 'bg-green-500' :
                systemStatus.overall === 'degraded' ? 'bg-yellow-500' :
                'bg-red-500'
              }`}></div>
              <span className="text-2xl font-bold text-secondary-900">
                {systemStatus.overall === 'operational' ? '✅ Todos los Sistemas Operativos' :
                 systemStatus.overall === 'degraded' ? '⚠️ Degradación de Servicios' :
                 '🔴 Interrupción de Servicios'}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Estado de Servicios ARCIICloud
            </h1>
            
            <p className="text-xl text-secondary-600 mb-8 max-w-3xl mx-auto">
              Monitoreo en tiempo real del estado de todos nuestros servicios. 
              Mantente informado sobre el rendimiento y disponibilidad de la infraestructura.
            </p>

            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-2">{systemStatus.uptime}</div>
                <p className="text-green-700 font-semibold">Uptime Global</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
                <p className="text-blue-700 font-semibold">Servicios</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
                <p className="text-purple-700 font-semibold">Regiones</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                <div className="text-3xl font-bold text-yellow-600 mb-2">{systemStatus.incidents}</div>
                <p className="text-yellow-700 font-semibold">Incidentes Activos</p>
              </div>
            </div>

            <div className="mt-8 text-sm text-secondary-500">
              Última actualización: {currentTime.toLocaleString('es-MX')} (Actualización automática cada 30 segundos)
            </div>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
            🔍 Estado de Servicios
          </h2>

          <div className="space-y-4">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-xl shadow-sm border">
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-2xl mr-4">{getStatusIcon(service.status)}</div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900">{service.name}</h3>
                      <p className="text-secondary-600">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-secondary-900">{service.uptime}</div>
                      <div className="text-sm text-secondary-500">Uptime 30d</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{service.responseTime}ms</div>
                      <div className="text-sm text-secondary-500">Respuesta</div>
                    </div>
                    <div className={`inline-flex px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(service.status)}`}>
                      {getStatusText(service.status)}
                    </div>
                  </div>
                </div>

                {/* Maintenance notification */}
                {service.status === 'maintenance' && service.maintenanceEnd && (
                  <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-2">🔧</span>
                      <div>
                        <p className="text-blue-800 font-semibold">Mantenimiento Programado en Curso</p>
                        <p className="text-blue-700 text-sm">
                          Finalización estimada: {formatTime(service.maintenanceEnd)}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Regions Status */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {service.regions.map((region, index) => (
                    <div key={index} className="bg-secondary-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-secondary-900">{region.name}</span>
                        <span className="text-lg">{getStatusIcon(region.status)}</span>
                      </div>
                      <div className="text-sm text-secondary-600">
                        {region.responseTime}ms • {getStatusText(region.status)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-xs text-secondary-500">
                  Último incidente: {new Date(service.lastIncident).toLocaleDateString('es-MX')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
            📋 Historial de Incidentes
          </h2>

          <div className="space-y-6">
            {recentIncidents.map((incident) => (
              <div key={incident.id} className="bg-secondary-50 p-6 rounded-xl border">
                
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">{incident.title}</h3>
                    <p className="text-secondary-600 mb-4">{incident.description}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <div className={`inline-flex px-3 py-1 rounded-full font-semibold ${getIncidentStatusColor(incident.status)}`}>
                        {incident.status === 'investigating' ? 'Investigando' :
                         incident.status === 'identified' ? 'Identificado' :
                         incident.status === 'monitoring' ? 'Monitoreando' :
                         incident.status === 'resolved' ? 'Resuelto' : incident.status}
                      </div>
                      <div className={`inline-flex px-3 py-1 rounded-full font-semibold ${getSeverityColor(incident.severity)}`}>
                        {incident.severity === 'critical' ? 'Crítico' :
                         incident.severity === 'major' ? 'Mayor' :
                         incident.severity === 'minor' ? 'Menor' :
                         incident.severity === 'maintenance' ? 'Mantenimiento' : incident.severity}
                      </div>
                      <span className="text-secondary-500">
                        Duración: {formatDuration(incident.startTime, incident.endTime)}
                      </span>
                      <span className="text-secondary-500">
                        {formatTime(incident.startTime)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Updates Timeline */}
                <div className="mt-6">
                  <h4 className="font-semibold text-secondary-900 mb-4">Actualizaciones:</h4>
                  <div className="space-y-3">
                    {incident.updates.map((update, index) => (
                      <div key={index} className="flex items-start">
                        <div className={`w-3 h-3 rounded-full mt-2 mr-4 ${
                          update.status === 'resolved' ? 'bg-green-500' :
                          update.status === 'monitoring' ? 'bg-yellow-500' :
                          'bg-blue-500'
                        }`}></div>
                        <div>
                          <p className="text-secondary-700">{update.message}</p>
                          <p className="text-sm text-secondary-500">{formatTime(update.time)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
              Ver Historial Completo
            </button>
          </div>
        </div>
      </section>

      {/* Uptime History */}
      <section className="py-12 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
            📊 Historial de Disponibilidad
          </h2>

          <div className="bg-white p-8 rounded-xl shadow-sm border">
            <div className="grid md:grid-cols-6 gap-4 mb-6">
              {uptimeHistory.map((month, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-secondary-900 mb-1">
                    {month.uptime.toFixed(2)}%
                  </div>
                  <div className="text-sm text-secondary-500">{month.date}</div>
                  <div className={`w-full h-2 rounded-full mt-2 ${
                    month.uptime >= 99.9 ? 'bg-green-400' :
                    month.uptime >= 99.5 ? 'bg-yellow-400' :
                    'bg-red-400'
                  }`}></div>
                </div>
              ))}
            </div>
            
            <div className="text-center text-sm text-secondary-600">
              Promedio de disponibilidad últimos 6 meses: <strong>99.98%</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-12 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-3xl font-bold mb-6">
            🔔 Mantente Informado
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Suscríbete a notificaciones de estado para recibir actualizaciones 
            automáticas sobre el estado de nuestros servicios.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-8">
            <input 
              type="email" 
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 rounded-lg text-secondary-900 focus:ring-2 focus:ring-primary-300"
            />
            <button className="bg-yellow-500 text-yellow-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
              Suscribirse
            </button>
          </div>
          
          <div className="flex justify-center gap-6 text-sm">
            <div className="flex items-center">
              <span className="mr-2">📧</span>
              <span>Notificaciones por Email</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">📱</span>
              <span>Alertas SMS</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">🔔</span>
              <span>Push Notifications</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}