import { Percent, Clock, Gift, Star, Calendar, Tag, AlertCircle } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function OfertasPage() {
  const ofertasActuales = [
    {
      tipo: 'Oferta Limitada',
      titulo: 'Hosting Web Performance - 50% OFF',
      descripcion: 'Obtén nuestro plan más popular con 50% de descuento en tu primer año',
      precioOriginal: 1799,
      precioOferta: 899,
      ahorro: 900,
      validaHasta: '31 Enero 2026',
      codigo: 'PERFORMANCE50',
      etiqueta: 'Más Popular',
      color: 'bg-blue-500',
      destacada: true,
      incluye: [
        '100 GB almacenamiento SSD',
        '10 bases de datos MySQL',
        'SSL certificado gratis',
        'CDN global incluido',
        'Backups automáticos diarios'
      ]
    },
    {
      tipo: 'Black Friday',
      titulo: 'VPS Cloud Profesional - 40% OFF',
      descripcion: 'Potencia tu proyecto con un VPS de alto rendimiento',
      precioOriginal: 2999,
      precioOferta: 1799,
      ahorro: 1200,
      validaHasta: '15 Febrero 2026',
      codigo: 'VPS40OFF',
      etiqueta: 'Mejor Valor',
      color: 'bg-purple-500',
      destacada: false,
      incluye: [
        '8 vCPU cores',
        '16 GB RAM DDR4',
        '200 GB NVMe SSD',
        '5 TB transferencia',
        'IP dedicada incluida'
      ]
    },
    {
      tipo: 'Oferta de Temporada',
      titulo: 'Pack Completo Starter',
      descripcion: 'Todo lo que necesitas para empezar online',
      precioOriginal: 2398,
      precioOferta: 1199,
      ahorro: 1199,
      validaHasta: '28 Febrero 2026',
      codigo: 'STARTER50',
      etiqueta: 'Pack Completo',
      color: 'bg-green-500',
      destacada: false,
      incluye: [
        'Hosting Web Estándar (1 año)',
        'Dominio .com gratis',
        'SSL certificado premium',
        'Email corporativo (5 cuentas)',
        'Migración gratuita'
      ]
    }
  ]

  const ofertasPermanentes = [
    {
      titulo: 'Dominio Gratis',
      descripcion: 'Obtén un dominio .com gratis con cualquier plan de hosting anual',
      valor: '399 MXN',
      condicion: 'Con hosting web anual'
    },
    {
      titulo: 'Migración Gratuita',
      descripcion: 'Migramos tu sitio web desde cualquier proveedor sin costo',
      valor: '999 MXN',
      condicion: 'Todos los planes'
    },
    {
      titulo: 'SSL Premium Gratis',
      descripcion: 'Certificado SSL incluido gratis en todos los planes',
      valor: '599 MXN/año',
      condicion: 'Todos los planes'
    },
    {
      titulo: 'Soporte 24/7',
      descripcion: 'Acceso completo a nuestro soporte técnico especializado',
      valor: 'Sin costo',
      condicion: 'Todos los clientes'
    }
  ]

  const codigosDescuento = [
    {
      codigo: 'BIENVENIDO20',
      descuento: '20% OFF',
      descripcion: 'Para nuevos clientes en su primera compra',
      restricciones: 'Solo hosting web, válido 30 días',
      activo: true
    },
    {
      codigo: 'UPGRADE25',
      descuento: '25% OFF',
      descripcion: 'Al hacer upgrade de tu plan actual',
      restricciones: 'Solo clientes existentes, planes VPS',
      activo: true
    },
    {
      codigo: 'REFERIDO30',
      descuento: '30% OFF',
      descripcion: 'Por cada referido que traigas',
      restricciones: 'Ambas cuentas deben estar activas',
      activo: true
    },
    {
      codigo: 'STUDENT50',
      descuento: '50% OFF',
      descripcion: 'Descuento especial para estudiantes',
      restricciones: 'Requiere verificación académica',
      activo: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Percent className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ofertas Especiales
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Aprovecha nuestras promociones exclusivas y ahorra en hosting premium
          </p>
        </div>

        {/* Contador de urgencia */}
        <Card className="mb-8 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
          <div className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-red-600" />
              <span className="text-red-600 font-semibold">¡Oferta por tiempo limitado!</span>
            </div>
            <p className="text-gray-700 mb-4">Las ofertas actuales vencen pronto. No te las pierdas.</p>
            <div className="flex items-center justify-center gap-4 text-2xl font-bold text-red-600">
              <div className="bg-white px-4 py-2 rounded-lg shadow">15<span className="text-sm block">días</span></div>
              <div className="bg-white px-4 py-2 rounded-lg shadow">08<span className="text-sm block">horas</span></div>
              <div className="bg-white px-4 py-2 rounded-lg shadow">23<span className="text-sm block">min</span></div>
            </div>
          </div>
        </Card>

        {/* Ofertas destacadas */}
        <div className="space-y-8 mb-12">
          {ofertasActuales.map((oferta, index) => (
            <Card key={index} className={`relative overflow-hidden ${oferta.destacada ? 'ring-2 ring-blue-500 shadow-lg' : ''}`}>
              {oferta.destacada && (
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Más Popular
                </div>
              )}
              
              <div className="grid lg:grid-cols-3 gap-6 p-8">
                {/* Información principal */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`${oferta.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      {oferta.tipo}
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {oferta.etiqueta}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">{oferta.titulo}</h2>
                  <p className="text-gray-600 text-lg mb-6">{oferta.descripcion}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">Incluye:</h3>
                      <ul className="space-y-2">
                        {oferta.incluye.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Tag className="w-4 h-4 text-gray-600" />
                          <span className="text-sm font-medium text-gray-600">Código de descuento</span>
                        </div>
                        <div className="bg-white border-2 border-dashed border-gray-300 p-3 text-center rounded">
                          <code className="text-lg font-mono font-bold text-blue-600">{oferta.codigo}</code>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        Válida hasta: {oferta.validaHasta}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Precios y CTA */}
                <div className="lg:col-span-1 flex flex-col justify-center">
                  <div className="text-center lg:text-left">
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 line-through mb-1">
                        Precio normal: ${oferta.precioOriginal.toLocaleString()} MXN
                      </div>
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        ${oferta.precioOferta.toLocaleString()} MXN
                      </div>
                      <div className="text-green-600 font-semibold">
                        Ahorras ${oferta.ahorro.toLocaleString()} MXN
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button className="w-full" size="lg">
                        <Gift className="w-5 h-5 mr-2" />
                        Aprovechar Oferta
                      </Button>
                      <Button variant="outline" className="w-full">
                        Ver Detalles
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Ofertas permanentes */}
        <Card className="mb-12">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-500" />
              Beneficios Incluidos Siempre
            </h2>
            <p className="text-gray-600 mt-2">Estas ventajas están incluidas en todos nuestros planes</p>
          </div>
          
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {ofertasPermanentes.map((oferta, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Gift className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{oferta.titulo}</h3>
                    <p className="text-gray-600 text-sm mb-2">{oferta.descripcion}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 font-semibold">Valor: {oferta.valor}</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                        {oferta.condicion}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Códigos de descuento */}
        <Card className="mb-12">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-semibold text-gray-800">Códigos de Descuento Disponibles</h2>
            <p className="text-gray-600 mt-2">Cupones que puedes usar en tu próxima compra</p>
          </div>
          
          <div className="divide-y">
            {codigosDescuento.map((codigo, index) => (
              <div key={index} className={`p-6 ${!codigo.activo ? 'opacity-50' : ''}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-mono font-bold">
                      {codigo.codigo}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{codigo.descuento}</div>
                      <div className="text-gray-600">{codigo.descripcion}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {codigo.activo ? (
                      <Button size="sm">Usar Código</Button>
                    ) : (
                      <span className="text-gray-500 text-sm">No disponible</span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <AlertCircle className="w-4 h-4" />
                  {codigo.restricciones}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Newsletter de ofertas */}
        <Card className="mb-12">
          <div className="p-8 text-center bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              ¡No te pierdas nuestras ofertas exclusivas!
            </h2>
            <p className="text-gray-600 mb-6">
              Suscríbete a nuestro newsletter y recibe las mejores promociones directamente en tu email
            </p>
            
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button size="lg">
                Suscribirse
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              📧 Ofertas exclusivas • 🎯 Sin spam • ❌ Cancela cuando quieras
            </p>
          </div>
        </Card>

        {/* FAQ sobre ofertas */}
        <Card>
          <div className="p-6 border-b">
            <h2 className="text-2xl font-semibold text-gray-800">Preguntas Frecuentes sobre Ofertas</h2>
          </div>
          
          <div className="divide-y">
            <details className="group">
              <summary className="p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                <h3 className="font-medium text-gray-800 group-open:text-blue-600">
                  ¿Puedo combinar varios códigos de descuento?
                </h3>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                No, solo se puede aplicar un código de descuento por pedido. Sin embargo, las ofertas incluidas 
                (como dominio gratis o migración) se mantienen activas junto con cualquier código aplicado.
              </div>
            </details>
            
            <details className="group">
              <summary className="p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                <h3 className="font-medium text-gray-800 group-open:text-blue-600">
                  ¿Las ofertas se renuevan automáticamente?
                </h3>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Las ofertas promocionales aplican solo al primer período de facturación. Las renovaciones 
                se cobran a precio regular, aunque siempre mantienes los beneficios incluidos como SSL gratis y soporte 24/7.
              </div>
            </details>
            
            <details className="group">
              <summary className="p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                <h3 className="font-medium text-gray-800 group-open:text-blue-600">
                  ¿Qué pasa si mi código no funciona?
                </h3>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Verifica que el código esté escrito correctamente y que cumplas con todas las condiciones. 
                Si el problema persiste, contacta a nuestro soporte y te ayudaremos a aplicar el descuento manualmente.
              </div>
            </details>
          </div>
        </Card>
      </div>
    </div>
  )
}