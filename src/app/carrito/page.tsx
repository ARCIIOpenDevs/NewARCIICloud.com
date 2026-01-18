import { ShoppingCart, Plus, Minus, Trash2, CreditCard } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function CarritoPage() {
  // Datos de ejemplo del carrito
  const cartItems = [
    {
      id: 1,
      name: 'Hosting Web Performance',
      plan: 'Anual',
      price: 899,
      originalPrice: 1199,
      quantity: 1,
      domain: 'midominio.com',
      features: ['100 GB SSD', '10 Bases de datos', 'SSL Gratis']
    },
    {
      id: 2,
      name: 'VPS Cloud Profesional',
      plan: 'Mensual',
      price: 2499,
      originalPrice: 2999,
      quantity: 1,
      features: ['8 vCPUs', '16 GB RAM', '200 GB NVMe SSD']
    },
    {
      id: 3,
      name: 'Dominio .com',
      plan: 'Anual',
      price: 299,
      originalPrice: 399,
      quantity: 2,
      domain: 'nuevositio.com, otrodominio.com'
    }
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const descuentos = cartItems.reduce((sum, item) => sum + ((item.originalPrice - item.price) * item.quantity), 0)
  const impuestos = Math.round(subtotal * 0.16) // 16% IVA
  const total = subtotal + impuestos

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShoppingCart className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tu Carrito de Compras
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Revisa tus servicios seleccionados antes de proceder al pago
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Items del Carrito */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-800">
                  Servicios Seleccionados ({cartItems.length})
                </h2>
              </div>
              
              <div className="divide-y">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-2">{item.name}</h3>
                        <div className="text-sm text-gray-600 mb-2">
                          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                            Plan {item.plan}
                          </span>
                          {item.domain && (
                            <span className="ml-2 text-gray-500">• {item.domain}</span>
                          )}
                        </div>
                        
                        {/* Features */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.features?.map((feature, idx) => (
                            <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        {/* Precio */}
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-2xl font-bold text-blue-600">
                            ${item.price.toLocaleString()} MXN
                          </span>
                          {item.originalPrice > item.price && (
                            <span className="text-sm text-gray-500 line-through">
                              ${item.originalPrice.toLocaleString()} MXN
                            </span>
                          )}
                          <span className="text-sm text-gray-600">
                            / {item.plan.toLowerCase()}
                          </span>
                        </div>
                      </div>

                      {/* Controles de cantidad */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border rounded-lg">
                          <button className="p-2 hover:bg-gray-100 transition-colors">
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-4 py-2 border-x">{item.quantity}</span>
                          <button className="p-2 hover:bg-gray-100 transition-colors">
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Cupón de descuento */}
            <Card>
              <div className="p-6">
                <h3 className="font-semibold text-gray-800 mb-4">¿Tienes un cupón de descuento?</h3>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Ingresa tu código de cupón"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Button>Aplicar</Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Resumen del pedido */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-800">Resumen del Pedido</h2>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString()} MXN</span>
                </div>
                
                <div className="flex justify-between text-green-600">
                  <span>Descuentos</span>
                  <span>-${descuentos.toLocaleString()} MXN</span>
                </div>
                
                <div className="flex justify-between text-gray-600">
                  <span>Impuestos (IVA 16%)</span>
                  <span>${impuestos.toLocaleString()} MXN</span>
                </div>
                
                <hr />
                
                <div className="flex justify-between text-xl font-bold text-gray-800">
                  <span>Total</span>
                  <span>${total.toLocaleString()} MXN</span>
                </div>

                <div className="text-sm text-gray-500 text-center">
                  Total anual: ${(total * 12).toLocaleString()} MXN
                </div>
              </div>

              <div className="p-6 border-t bg-gray-50 rounded-b-lg">
                <Button className="w-full mb-4" size="lg">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Proceder al Pago
                </Button>
                
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">
                    ✓ Garantía de devolución de 30 días
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    ✓ Soporte 24/7 incluido
                  </p>
                  <p className="text-sm text-gray-600">
                    ✓ Configuración gratuita
                  </p>
                </div>
              </div>
            </Card>

            {/* Métodos de pago aceptados */}
            <Card className="mt-6">
              <div className="p-6">
                <h3 className="font-semibold text-gray-800 mb-4">Métodos de Pago Aceptados</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 border rounded-lg">
                    <div className="text-2xl mb-1">💳</div>
                    <div className="text-xs text-gray-600">Tarjetas</div>
                  </div>
                  <div className="text-center p-3 border rounded-lg">
                    <div className="text-2xl mb-1">🏦</div>
                    <div className="text-xs text-gray-600">Transferencia</div>
                  </div>
                  <div className="text-center p-3 border rounded-lg">
                    <div className="text-2xl mb-1">💰</div>
                    <div className="text-xs text-gray-600">PayPal</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}