import { FileText, Download, Eye, CreditCard, Calendar, Filter } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function FacturacionPage() {
  const facturas = [
    {
      id: 'INV-2026-001',
      fecha: '15 Enero 2026',
      servicio: 'Hosting Web Performance',
      periodo: 'Enero 2026 - Enero 2027',
      monto: 899,
      estado: 'Pagada',
      metodoPago: 'Visa **** 4321'
    },
    {
      id: 'INV-2025-089',
      fecha: '20 Diciembre 2025',
      servicio: 'VPS Cloud Profesional',
      periodo: 'Diciembre 2025',
      monto: 2499,
      estado: 'Pagada',
      metodoPago: 'PayPal'
    },
    {
      id: 'INV-2025-078',
      fecha: '15 Noviembre 2025',
      servicio: 'Dominio midominio.com',
      periodo: 'Nov 2025 - Nov 2026',
      monto: 299,
      estado: 'Pagada',
      metodoPago: 'Transferencia'
    },
    {
      id: 'INV-2025-067',
      fecha: '10 Octubre 2025',
      servicio: 'SSL Certificado Wildcard',
      periodo: 'Oct 2025 - Oct 2026',
      monto: 899,
      estado: 'Vencida',
      metodoPago: 'Visa **** 4321'
    },
    {
      id: 'INV-2025-056',
      fecha: '05 Septiembre 2025',
      servicio: 'Backup Cloud 500GB',
      periodo: 'Septiembre 2025',
      monto: 199,
      estado: 'Pendiente',
      metodoPago: 'Cargo automático'
    }
  ]

  const estadoColor = {
    'Pagada': 'bg-green-100 text-green-700',
    'Pendiente': 'bg-yellow-100 text-yellow-700',
    'Vencida': 'bg-red-100 text-red-700'
  }

  const totalPagado = facturas
    .filter(f => f.estado === 'Pagada')
    .reduce((sum, f) => sum + f.monto, 0)

  const totalPendiente = facturas
    .filter(f => f.estado === 'Pendiente' || f.estado === 'Vencida')
    .reduce((sum, f) => sum + f.monto, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Facturación
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Gestiona todas tus facturas y pagos
          </p>
        </div>

        {/* Resumen */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <div className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Total Pagado</h3>
              <p className="text-2xl font-bold text-green-600">
                ${totalPagado.toLocaleString()} MXN
              </p>
              <p className="text-sm text-gray-500 mt-1">Este año</p>
            </div>
          </Card>

          <Card>
            <div className="p-6 text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Pendiente</h3>
              <p className="text-2xl font-bold text-yellow-600">
                ${totalPendiente.toLocaleString()} MXN
              </p>
              <p className="text-sm text-gray-500 mt-1">Por cobrar</p>
            </div>
          </Card>

          <Card>
            <div className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Total Facturas</h3>
              <p className="text-2xl font-bold text-blue-600">
                {facturas.length}
              </p>
              <p className="text-sm text-gray-500 mt-1">Últimos 12 meses</p>
            </div>
          </Card>
        </div>

        {/* Filtros y acciones */}
        <Card className="mb-6">
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex flex-wrap gap-4">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Todos los estados</option>
                  <option>Pagadas</option>
                  <option>Pendientes</option>
                  <option>Vencidas</option>
                </select>
                
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Últimos 12 meses</option>
                  <option>Último año</option>
                  <option>Últimos 2 años</option>
                  <option>Todo el historial</option>
                </select>
                
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Más filtros
                </Button>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline">
                  Exportar PDF
                </Button>
                <Button>
                  Descargar todas
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Lista de facturas */}
        <Card>
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-800">Historial de Facturas</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Factura
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Servicio
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Periodo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Monto
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {facturas.map((factura) => (
                  <tr key={factura.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {factura.id}
                        </div>
                        <div className="text-sm text-gray-500">
                          {factura.fecha}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{factura.servicio}</div>
                      <div className="text-sm text-gray-500">{factura.metodoPago}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {factura.periodo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        ${factura.monto.toLocaleString()} MXN
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${estadoColor[factura.estado]}`}>
                        {factura.estado}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex gap-2">
                        <button className="text-blue-600 hover:text-blue-900 p-1">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="text-green-600 hover:text-green-900 p-1">
                          <Download className="h-4 w-4" />
                        </button>
                        {factura.estado === 'Vencida' && (
                          <Button size="sm" className="ml-2">
                            Pagar
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Información adicional */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Configuración de Facturación
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Facturación automática</span>
                  <span className="text-green-600 font-medium">Activada</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Notificaciones por email</span>
                  <span className="text-green-600 font-medium">Activadas</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Método de pago principal</span>
                  <span className="text-gray-800">Visa **** 4321</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Modificar configuración
              </Button>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Soporte y Ayuda
              </h3>
              <div className="space-y-4">
                <div className="text-sm text-gray-600">
                  <p className="mb-2">
                    ¿Tienes preguntas sobre tu facturación?
                  </p>
                  <ul className="space-y-1 text-blue-600">
                    <li><a href="/faq" className="hover:underline">• Ver preguntas frecuentes</a></li>
                    <li><a href="/contacto" className="hover:underline">• Contactar soporte</a></li>
                    <li><a href="/legal/terminos" className="hover:underline">• Términos de facturación</a></li>
                  </ul>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Contactar Soporte
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}