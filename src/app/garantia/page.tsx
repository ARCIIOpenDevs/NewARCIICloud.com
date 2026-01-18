import { Shield, CheckCircle, RefreshCw, HeadphonesIcon, Clock, Award } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function GarantiaPage() {
  const garantias = [
    {
      icono: <RefreshCw className="w-8 h-8 text-green-500" />,
      titulo: 'Garantía de Devolución de 30 Días',
      descripcion: 'Si no estás completamente satisfecho con nuestro hosting web, te devolvemos tu dinero sin preguntas.',
      detalles: [
        'Aplica a todos los planes de hosting web',
        'Sin penalizaciones ni cargos ocultos',
        'Proceso de reembolso en 3-5 días hábiles',
        'No incluye dominios ni servicios de terceros'
      ]
    },
    {
      icono: <CheckCircle className="w-8 h-8 text-blue-500" />,
      titulo: 'Garantía de Uptime 99.9%',
      descripcion: 'Garantizamos que tu sitio web estará disponible al menos el 99.9% del tiempo, o te compensamos.',
      detalles: [
        'Monitoreo continuo 24/7 de todos nuestros servidores',
        'Compensación automática con créditos de servicio',
        'Cálculo mensual del tiempo de actividad',
        'Excluye mantenimientos programados notificados'
      ]
    },
    {
      icono: <HeadphonesIcon className="w-8 h-8 text-purple-500" />,
      titulo: 'Garantía de Soporte 24/7',
      descripción: 'Nuestro equipo de soporte técnico está disponible las 24 horas, todos los días del año.',
      detalles: [
        'Respuesta en tickets críticos en menos de 1 hora',
        'Chat en vivo disponible 24/7',
        'Soporte telefónico en horarios extendidos',
        'Equipo de expertos certificados'
      ]
    },
    {
      icono: <Clock className="w-8 h-8 text-orange-500" />,
      titulo: 'Garantía de Velocidad',
      descripcion: 'Tu sitio web cargará rápido gracias a nuestra infraestructura optimizada y CDN global.',
      detalles: [
        'Servidores SSD NVMe de alta velocidad',
        'CDN global incluido en todos los planes',
        'Optimización automática de imágenes',
        'Caché inteligente a nivel de servidor'
      ]
    },
    {
      icono: <Shield className="w-8 h-8 text-red-500" />,
      titulo: 'Garantía de Seguridad',
      descripcion: 'Protegemos tu sitio web con múltiples capas de seguridad y backups automáticos diarios.',
      detalles: [
        'SSL certificado gratuito incluido',
        'Firewall y protección anti-DDoS',
        'Backups automáticos diarios por 30 días',
        'Escaneo de malware y limpieza gratuita'
      ]
    },
    {
      icono: <Award className="w-8 h-8 text-yellow-500" />,
      titulo: 'Garantía de Migración Gratuita',
      descripcion: 'Migramos tu sitio web desde cualquier proveedor sin costo adicional y sin tiempo de inactividad.',
      detalles: [
        'Migración completa de sitios web y bases de datos',
        'Sin tiempo de inactividad durante la migración',
        'Verificación completa post-migración',
        'Soporte durante todo el proceso'
      ]
    }
  ]

  const terminosCondiciones = [
    {
      titulo: 'Condiciones Generales',
      puntos: [
        'Las garantías aplican únicamente a servicios contratados directamente con ARCIICloud',
        'El cliente debe proporcionar acceso completo para resolución de problemas',
        'Los reembolsos se procesan al método de pago original utilizado',
        'Mantenimientos programados no afectan el cálculo de uptime garantizado'
      ]
    },
    {
      titulo: 'Exclusiones',
      puntos: [
        'Problemas causados por modificaciones no autorizadas del cliente',
        'Ataques DDoS masivos que superen nuestra capacidad de mitigación',
        'Problemas de conectividad del ISP del usuario final',
        'Contenido que viole nuestros términos de servicio'
      ]
    },
    {
      titulo: 'Proceso de Reclamación',
      puntos: [
        'Contactar a soporte técnico con evidencia del problema',
        'Proporcionar información detallada del incidente',
        'Permitir hasta 48 horas para investigación',
        'La compensación se aplica automáticamente una vez verificado'
      ]
    }
  ]

  const calculadoraUptime = [
    { porcentaje: '99.9%', tiempoInactivo: '8.76 horas', compensacion: '5% crédito' },
    { porcentaje: '99.5%', tiempoInactivo: '3.65 días', compensacion: '10% crédito' },
    { porcentaje: '99.0%', tiempoInactivo: '7.30 días', compensacion: '25% crédito' },
    { porcentaje: '<99.0%', tiempoInactivo: '> 7.30 días', compensacion: '50% crédito' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Nuestras Garantías
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            En ARCIICloud, respaldamos la calidad de nuestros servicios con garantías sólidas que te dan la confianza 
            de que tu sitio web estará en las mejores manos.
          </p>
        </div>

        {/* Resumen de garantías */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-green-600 mb-2">30 Días</h3>
            <p className="text-gray-600">Garantía de devolución sin preguntas</p>
          </Card>
          
          <Card className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-2">99.9%</h3>
            <p className="text-gray-600">Uptime garantizado con compensación</p>
          </Card>
          
          <Card className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <HeadphonesIcon className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-purple-600 mb-2">24/7</h3>
            <p className="text-gray-600">Soporte técnico siempre disponible</p>
          </Card>
        </div>

        {/* Garantías detalladas */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {garantias.map((garantia, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    {garantia.icono}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {garantia.titulo}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {garantia.descripcion}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {garantia.detalles.map((detalle, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {detalle}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Calculadora de compensación por uptime */}
        <Card className="mb-12">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Calculadora de Compensación por Uptime
            </h2>
            <p className="text-gray-600">
              Así es como compensamos cuando no cumplimos nuestro SLA de 99.9% de uptime
            </p>
          </div>
          
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold text-gray-800">Uptime Mensual</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-800">Tiempo de Inactividad</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-800">Compensación</th>
                  </tr>
                </thead>
                <tbody>
                  {calculadoraUptime.map((fila, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-800">{fila.porcentaje}</td>
                      <td className="py-3 px-4 text-gray-600">{fila.tiempoInactivo}</td>
                      <td className="py-3 px-4">
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm font-medium">
                          {fila.compensacion}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-700">
                <strong>Nota:</strong> La compensación se aplica automáticamente como crédito en tu siguiente facturación. 
                Los mantenimientos programados con aviso de 24 horas no se cuentan como tiempo de inactividad.
              </p>
            </div>
          </div>
        </Card>

        {/* Términos y condiciones */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {terminosCondiciones.map((termino, index) => (
            <Card key={index}>
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold text-gray-800">{termino.titulo}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {termino.puntos.map((punto, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      {punto}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* FAQ sobre garantías */}
        <Card className="mb-12">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-semibold text-gray-800">Preguntas Frecuentes sobre Garantías</h2>
          </div>
          
          <div className="divide-y">
            <details className="group">
              <summary className="p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                <h3 className="font-medium text-gray-800 group-open:text-blue-600">
                  ¿Cómo puedo solicitar un reembolso bajo la garantía de 30 días?
                </h3>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Simplemente contacta a nuestro equipo de soporte a través del panel de cliente, chat en vivo o email. 
                Procesamos los reembolsos en 3-5 días hábiles al método de pago original. No hay preguntas difíciles ni penalizaciones.
              </div>
            </details>
            
            <details className="group">
              <summary className="p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                <h3 className="font-medium text-gray-800 group-open:text-blue-600">
                  ¿Qué pasa si mi sitio tiene más tiempo de inactividad del garantizado?
                </h3>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Automáticamente aplicamos créditos de servicio a tu cuenta según la tabla de compensación. 
                No necesitas solicitarlo, nuestro sistema lo detecta y procesa la compensación automáticamente.
              </div>
            </details>
            
            <details className="group">
              <summary className="p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                <h3 className="font-medium text-gray-800 group-open:text-blue-600">
                  ¿La migración gratuita incluye bases de datos y emails?
                </h3>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Sí, migramos todo: archivos del sitio web, bases de datos MySQL, cuentas de email, configuraciones de DNS y más. 
                Nuestro equipo técnico se encarga de todo el proceso sin costo adicional.
              </div>
            </details>
            
            <details className="group">
              <summary className="p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                <h3 className="font-medium text-gray-800 group-open:text-blue-600">
                  ¿Las garantías aplican a todos los planes?
                </h3>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                La mayoría de nuestras garantías aplican a todos los planes. La garantía de devolución de 30 días aplica 
                solo a hosting web. VPS y dominios tienen términos específicos que puedes consultar en nuestros términos de servicio.
              </div>
            </details>
          </div>
        </Card>

        {/* CTA */}
        <Card>
          <div className="p-8 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              ¿Listo para probarnos sin riesgo?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Con nuestras garantías sólidas, puedes migrar tu sitio web con total confianza. 
              Si no estás completamente satisfecho, te devolvemos tu dinero.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Comenzar Ahora
              </Button>
              <Button variant="outline" size="lg">
                Contactar Soporte
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}