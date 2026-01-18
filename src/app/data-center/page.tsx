import { Server, Shield, Zap, Thermometer, Eye, Lock, Globe, Award, MapPin, Clock, CheckCircle, AlertTriangle } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function DataCenterPage() {
  const dataCenters = [
    {
      name: 'CDMX-DC1 (Principal)',
      location: 'Ciudad de México, México',
      tier: 'Tier III',
      status: 'Operativo',
      capacity: '2,400 servidores',
      power: '5.2 MW',
      cooling: 'Free cooling híbrido',
      connectivity: '40+ ISPs',
      certifications: ['ISO 27001', 'SOC 2 Type II', 'TIER III'],
      uptime: '99.982%',
      coordinates: { lat: 19.4326, lng: -99.1332 }
    },
    {
      name: 'MTY-DC2',
      location: 'Monterrey, México',
      tier: 'Tier III',
      status: 'Operativo',
      capacity: '1,800 servidores',
      power: '3.8 MW',
      cooling: 'Evaporativo indirecto',
      connectivity: '25+ ISPs',
      certifications: ['ISO 27001', 'SOC 2 Type II'],
      uptime: '99.978%',
      coordinates: { lat: 25.6866, lng: -100.3161 }
    },
    {
      name: 'GDL-DC3',
      location: 'Guadalajara, México',
      tier: 'Tier II+',
      status: 'En construcción',
      capacity: '1,200 servidores',
      power: '2.5 MW',
      cooling: 'Direct air cooling',
      connectivity: '20+ ISPs',
      certifications: ['ISO 27001 (en proceso)'],
      uptime: 'N/A (Q2 2026)',
      coordinates: { lat: 20.6597, lng: -103.3496 }
    },
    {
      name: 'BOG-DC4 (Internacional)',
      location: 'Bogotá, Colombia',
      tier: 'Tier III',
      status: 'Planeado',
      capacity: '1,000 servidores',
      power: '2.0 MW',
      cooling: 'Inmersión líquida',
      connectivity: '15+ ISPs',
      certifications: ['Planeadas: ISO 27001, SOC 2'],
      uptime: 'Meta: 99.975%',
      coordinates: { lat: 4.7110, lng: -74.0721 }
    }
  ]

  const specifications = [
    {
      category: 'Infraestructura Eléctrica',
      specs: [
        { name: 'Alimentación Principal', value: 'Doble acometida independiente' },
        { name: 'Generadores de Respaldo', value: 'N+1 redundancia, diesel' },
        { name: 'UPS', value: '2N configuración, 15 min autonomía' },
        { name: 'PDU', value: 'Inteligente con monitoreo remoto' },
        { name: 'Eficiencia Energética', value: 'PUE &lt; 1.4' }
      ]
    },
    {
      category: 'Sistema de Climatización',
      specs: [
        { name: 'Tipo de Enfriamiento', value: 'Aire acondicionado de precisión' },
        { name: 'Redundancia', value: 'N+1 en todos los sistemas' },
        { name: 'Temperatura', value: '20-22°C ±2°C' },
        { name: 'Humedad Relativa', value: '45-55% ±5%' },
        { name: 'Monitoreo', value: '24/7 con alertas automáticas' }
      ]
    },
    {
      category: 'Conectividad de Red',
      specs: [
        { name: 'Carriers', value: '40+ proveedores nacionales/internacionales' },
        { name: 'Capacidad Total', value: '2.5 Tbps agregado' },
        { name: 'Latencia CDMX-MTY', value: '&lt; 8ms' },
        { name: 'Peering', value: 'NAP México, Google, Cloudflare' },
        { name: 'IPv6', value: 'Soporte nativo completo' }
      ]
    },
    {
      category: 'Seguridad Física',
      specs: [
        { name: 'Control de Acceso', value: 'Biométrico + tarjetas + mantrap' },
        { name: 'Videovigilancia', value: '200+ cámaras HD con grabación' },
        { name: 'Detección de Humo', value: 'VESDA sistema aspirante' },
        { name: 'Supresión de Incendios', value: 'FM200 gas inerte' },
        { name: 'Personal de Seguridad', value: '24/7/365 en sitio' }
      ]
    }
  ]

  const environmentalMetrics = [
    {
      metric: 'PUE (Power Usage Effectiveness)',
      value: '1.38',
      target: '&lt; 1.4',
      status: 'excellent',
      description: 'Eficiencia energética líder en la industria'
    },
    {
      metric: 'Energía Renovable',
      value: '68%',
      target: '100% en 2027',
      status: 'good',
      description: 'Solar y eólica principalmente'
    },
    {
      metric: 'Reciclaje de Agua',
      value: '45%',
      target: '60% en 2028',
      status: 'fair',
      description: 'Sistema de recuperación de condensados'
    },
    {
      metric: 'Reducción CO2',
      value: '42%',
      target: '80% en 2030',
      status: 'good',
      description: 'Vs baseline 2020'
    }
  ]

  const services = [
    {
      service: 'Colocation',
      description: 'Espacios dedicados desde 1U hasta racks completos',
      features: ['1U, 2U, 4U disponibles', 'Racks de 42U', 'Gabinetes privados', 'Acceso 24/7'],
      pricing: 'Desde $899 MXN/mes'
    },
    {
      service: 'Cloud Privado',
      description: 'Infraestructura dedicada en nuestros centros de datos',
      features: ['VMware vSphere', 'Storage SAN', 'Red dedicada', 'Backup incluido'],
      pricing: 'Desde $2,500 MXN/mes'
    },
    {
      service: 'Conectividad',
      description: 'Múltiples opciones de conectividad y ancho de banda',
      features: ['IP Transit', 'Internet Dedicado', 'MPLS', 'Conectividad directa cloud'],
      pricing: 'Desde $1,200 MXN/mes'
    },
    {
      service: 'Disaster Recovery',
      description: 'Sitio de respaldo para continuidad de negocio',
      features: ['Replicación tiempo real', 'Hot/Cold standby', 'RTO &lt; 4 horas', 'RPO &lt; 15 min'],
      pricing: 'Consultar'
    }
  ]

  const certifications = [
    { name: 'Uptime Institute Tier III', authority: 'Uptime Institute', validity: '2024-2027' },
    { name: 'ISO 27001:2013', authority: 'SGS', validity: '2023-2026' },
    { name: 'SOC 2 Type II', authority: 'KPMG', validity: '2025-2026' },
    { name: 'PCI DSS Level 1', authority: 'QSA Certified', validity: '2025-2026' },
    { name: 'ICREA Clase A', authority: 'ICREA México', validity: '2024-2027' },
    { name: 'HIPAA Compliant', authority: 'Third Party Audit', validity: '2025-2026' }
  ]

  const realtimeMetrics = [
    { name: 'Temperatura Promedio', value: '21.5°C', status: 'normal', icon: Thermometer },
    { name: 'Humedad Relativa', value: '48%', status: 'normal', icon: Thermometer },
    { name: 'Carga Eléctrica', value: '72%', status: 'normal', icon: Zap },
    { name: 'Ancho de Banda', value: '1.2 Tbps', status: 'normal', icon: Globe },
    { name: 'Incidentes Activos', value: '0', status: 'excellent', icon: Shield },
    { name: 'Uptime Mensual', value: '100%', status: 'excellent', icon: CheckCircle }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Operativo':
        return 'bg-green-100 text-green-700'
      case 'En construcción':
        return 'bg-yellow-100 text-yellow-700'
      case 'Planeado':
        return 'bg-blue-100 text-blue-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  const getMetricStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'text-green-600'
      case 'good':
        return 'text-blue-600'
      case 'fair':
        return 'text-yellow-600'
      case 'poor':
        return 'text-red-600'
      default:
        return 'text-gray-600'
    }
  }

  const getRealtimeStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'bg-green-100 text-green-700 border-green-200'
      case 'normal':
        return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'warning':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'critical':
        return 'bg-red-100 text-red-700 border-red-200'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Server className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Centros de Datos ARCII Cloud
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Infraestructura de clase mundial con certificación Tier III, máxima seguridad 
            y conectividad premium en ubicaciones estratégicas de México y Latinoamérica.
          </p>
        </div>

        {/* Real-time Metrics Dashboard */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Estado en Tiempo Real</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {realtimeMetrics.map((metric, index) => (
              <Card key={index} className={`border-2 ${getRealtimeStatusColor(metric.status)}`}>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <metric.icon className={`w-8 h-8 ${getMetricStatusColor(metric.status)}`} />
                    <div className="w-3 h-3 rounded-full bg-current opacity-50"></div>
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-2">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.name}</div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <div className="text-sm text-gray-500">
              Última actualización: {new Date().toLocaleString('es-MX')} • 
              <a href="/status" className="text-blue-600 hover:underline ml-1">Ver página de estado completa</a>
            </div>
          </div>
        </div>

        {/* Data Centers Locations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Ubicaciones de Centros de Datos</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {dataCenters.map((dc, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{dc.name}</h3>
                      <div className="flex items-center gap-2 text-gray-600 mb-3">
                        <MapPin className="w-4 h-4" />
                        {dc.location}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {dc.tier}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(dc.status)}`}>
                          {dc.status}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{dc.uptime}</div>
                      <div className="text-sm text-gray-500">SLA Uptime</div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Especificaciones:</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li><strong>Capacidad:</strong> {dc.capacity}</li>
                        <li><strong>Potencia:</strong> {dc.power}</li>
                        <li><strong>Enfriamiento:</strong> {dc.cooling}</li>
                        <li><strong>Conectividad:</strong> {dc.connectivity}</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Certificaciones:</h4>
                      <div className="flex flex-wrap gap-2">
                        {dc.certifications.map((cert, i) => (
                          <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm">
                      Ver Tour Virtual
                    </Button>
                    <Button size="sm" variant="outline">
                      Solicitar Visita
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Especificaciones Técnicas</h2>
          
          <div className="space-y-8">
            {specifications.map((category, index) => (
              <Card key={index}>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">{category.category}</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <tbody className="divide-y divide-gray-200">
                        {category.specs.map((spec, i) => (
                          <tr key={i} className="hover:bg-gray-50">
                            <td className="py-4 pr-6 font-medium text-gray-800 w-1/3">
                              {spec.name}
                            </td>
                            <td className="py-4 text-gray-600" dangerouslySetInnerHTML={{ __html: spec.value }} />
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Environmental Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Métricas Ambientales</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {environmentalMetrics.map((metric, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <div className="p-6 text-center">
                  <div className="text-3xl font-bold text-gray-800 mb-2">{metric.value}</div>
                  <div className={`text-lg font-semibold mb-3 ${getMetricStatusColor(metric.status)}`}>
                    {metric.metric}
                  </div>
                  <div className="text-sm text-gray-500 mb-3" dangerouslySetInnerHTML={{ __html: `Meta: ${metric.target}` }} />
                  <div className="text-xs text-gray-600 leading-relaxed">
                    {metric.description}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Services Portfolio */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Servicios de Data Center</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.service}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Características incluidas:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: feature }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-600">{service.pricing}</div>
                    <Button>Cotizar</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <Card className="mb-16">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Certificaciones y Cumplimiento</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">{cert.name}</div>
                    <div className="text-sm text-gray-600">{cert.authority}</div>
                    <div className="text-xs text-gray-500">{cert.validity}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Virtual Tour Section */}
        <Card className="mb-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Tour Virtual 360°</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Explore nuestras instalaciones desde la comodidad de su oficina. 
                  Recorra virtualmente nuestros centros de datos y conozca la infraestructura 
                  que protege sus datos críticos.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" variant="secondary">
                    <Eye className="w-5 h-5 mr-2" />
                    Iniciar Tour Virtual
                  </Button>
                  <Button size="lg" variant="outline">
                    Programar Visita Presencial
                  </Button>
                </div>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-8 text-center">
                <Eye className="w-24 h-24 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-300">Vista previa del tour virtual</p>
                <p className="text-gray-400 text-sm">Experiencia inmersiva disponible</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Security Features */}
        <Card className="mb-16">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Seguridad Multicapa</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Seguridad Física</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>Control biométrico de acceso</li>
                  <li>Videovigilancia 24/7</li>
                  <li>Personal de seguridad en sitio</li>
                  <li>Sistema anti-intrusión</li>
                  <li>Mantrap de doble autenticación</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lock className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Seguridad Lógica</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>Firewall perimetral redundante</li>
                  <li>IDS/IPS de próxima generación</li>
                  <li>Monitoreo SOC 24/7</li>
                  <li>Análisis de vulnerabilidades</li>
                  <li>Gestión de identidades</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Monitoreo Continuo</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>SIEM centralizado</li>
                  <li>Alertas en tiempo real</li>
                  <li>Auditoría de logs</li>
                  <li>Análisis forense</li>
                  <li>Reportes de compliance</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Contact and Support */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="p-12 text-center">
            <Server className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">¿Necesita una Solución de Data Center?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Nuestros especialistas en infraestructura están listos para diseñar 
              una solución personalizada que se adapte a sus necesidades específicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Consulta Técnica Gratuita
              </Button>
              <Button size="lg" variant="outline">
                Solicitar Cotización
              </Button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-sm opacity-75">
              <span>📧 datacenter@arciicloud.com</span>
              <span>📞 +52 55 1234-5678 ext. 400</span>
              <span>🏢 Visitas programadas disponibles</span>
            </div>
          </div>
        </Card>

        {/* Footer Stats */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Infraestructura en Números</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">5,400</div>
              <div className="text-sm text-gray-600">Servidores Instalados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">13.5 MW</div>
              <div className="text-sm text-gray-600">Capacidad Eléctrica Total</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">2.5 Tbps</div>
              <div className="text-sm text-gray-600">Conectividad Agregada</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">99.982%</div>
              <div className="text-sm text-gray-600">Uptime Histórico</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}