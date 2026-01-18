import { CreditCard, Shield, CheckCircle, ArrowLeft, Lock } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al carrito
          </Button>
          
          <div className="text-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Finalizar Compra
            </h1>
            
            {/* Progress steps */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <span className="ml-2 text-sm text-gray-600">Carrito</span>
              </div>
              <div className="w-12 h-0.5 bg-gray-300"></div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                  2
                </div>
                <span className="ml-2 text-sm font-medium">Pago</span>
              </div>
              <div className="w-12 h-0.5 bg-gray-300"></div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white text-sm">
                  3
                </div>
                <span className="ml-2 text-sm text-gray-500">Confirmación</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulario de pago */}
          <div className="lg:col-span-2">
            {/* Información personal */}
            <Card className="mb-6">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-800">Información de Facturación</h2>
              </div>
              
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Apellidos *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tus apellidos"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+52 555 123 4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      País *
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>México</option>
                      <option>Estados Unidos</option>
                      <option>España</option>
                      <option>Colombia</option>
                      <option>Argentina</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dirección
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Calle y número"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ciudad
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ciudad"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Estado
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Estado"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Código Postal
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="12345"
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Método de pago */}
            <Card className="mb-6">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                  <Lock className="w-5 h-5 mr-2" />
                  Método de Pago
                </h2>
              </div>
              
              <div className="p-6">
                {/* Opciones de pago */}
                <div className="space-y-4 mb-6">
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input type="radio" name="payment" defaultChecked className="mr-4" />
                    <CreditCard className="w-5 h-5 mr-3 text-blue-500" />
                    <span className="font-medium">Tarjeta de Crédito/Débito</span>
                  </label>
                  
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input type="radio" name="payment" className="mr-4" />
                    <div className="w-5 h-5 mr-3 bg-blue-500 rounded flex items-center justify-center text-white text-xs">
                      PP
                    </div>
                    <span className="font-medium">PayPal</span>
                  </label>
                  
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input type="radio" name="payment" className="mr-4" />
                    <div className="w-5 h-5 mr-3 bg-green-500 rounded flex items-center justify-center text-white text-xs">
                      T
                    </div>
                    <span className="font-medium">Transferencia Bancaria</span>
                  </label>
                </div>

                {/* Datos de la tarjeta */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Número de tarjeta *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Vencimiento *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="MM/AA"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="123"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre en la tarjeta *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Como aparece en la tarjeta"
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Términos y condiciones */}
            <Card>
              <div className="p-6">
                <div className="space-y-4">
                  <label className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-sm text-gray-700">
                      Acepto los <a href="/legal/terminos" className="text-blue-600 hover:underline">términos y condiciones</a> y la <a href="/legal/privacidad" className="text-blue-600 hover:underline">política de privacidad</a>
                    </span>
                  </label>
                  
                  <label className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-sm text-gray-700">
                      Quiero recibir ofertas especiales y actualizaciones por email
                    </span>
                  </label>
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
                {/* Items */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Hosting Web Performance (1 año)</span>
                    <span>$899 MXN</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>VPS Cloud Profesional (1 mes)</span>
                    <span>$2,499 MXN</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Dominios .com (2x)</span>
                    <span>$598 MXN</span>
                  </div>
                </div>
                
                <hr />
                
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>$3,996 MXN</span>
                </div>
                
                <div className="flex justify-between text-green-600">
                  <span>Descuentos</span>
                  <span>-$600 MXN</span>
                </div>
                
                <div className="flex justify-between text-gray-600">
                  <span>Impuestos (IVA 16%)</span>
                  <span>$639 MXN</span>
                </div>
                
                <hr />
                
                <div className="flex justify-between text-xl font-bold text-gray-800">
                  <span>Total</span>
                  <span>$4,035 MXN</span>
                </div>
              </div>

              <div className="p-6 border-t bg-gray-50 rounded-b-lg">
                <Button className="w-full mb-4" size="lg">
                  <Shield className="w-5 h-5 mr-2" />
                  Finalizar Compra Segura
                </Button>
                
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <Lock className="w-4 h-4 mr-1" />
                    Transacción 100% segura
                  </div>
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Garantía de 30 días
                  </div>
                </div>
              </div>
            </Card>

            {/* Seguridad */}
            <Card className="mt-6">
              <div className="p-6 text-center">
                <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Pago 100% Seguro</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Tus datos están protegidos con encriptación SSL de 256 bits
                </p>
                <div className="flex justify-center gap-2">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">SSL</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">PCI DSS</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">HTTPS</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}