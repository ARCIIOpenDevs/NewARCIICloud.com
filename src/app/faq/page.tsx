import { HelpCircle, Search, BookOpen, MessageCircle, ChevronRight } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function FAQPage() {
  const categorias = [
    {
      titulo: 'Hosting Web',
      icono: '🌐',
      preguntas: [
        {
          pregunta: '¿Qué plan de hosting necesito?',
          respuesta: 'Depende del tamaño de tu sitio web. Para sitios pequeños recomendamos Eco, para sitios medianos Estándar, y para sitios con mucho tráfico Performance. Todos incluyen SSL gratis y soporte 24/7.'
        },
        {
          pregunta: '¿Puedo cambiar de plan cuando quiera?',
          respuesta: 'Sí, puedes actualizar tu plan en cualquier momento desde tu panel de control. Los cambios se aplican inmediatamente y solo pagas la diferencia prorrateada.'
        },
        {
          pregunta: '¿Qué es el uptime garantizado?',
          respuesta: 'Garantizamos un 99.9% de uptime para todos nuestros planes de hosting. Si no cumplimos con esta garantía, te compensamos con crédito de servicio.'
        }
      ]
    },
    {
      titulo: 'VPS Cloud',
      icono: '☁️',
      preguntas: [
        {
          pregunta: '¿Cuál es la diferencia entre VPS y hosting web?',
          respuesta: 'VPS te da recursos dedicados (RAM, CPU, almacenamiento) mientras que hosting web es compartido. VPS es ideal para aplicaciones que requieren más control y recursos.'
        },
        {
          pregunta: '¿Puedo instalar cualquier software en mi VPS?',
          respuesta: 'Sí, tienes acceso root completo. Puedes instalar cualquier software compatible con Ubuntu/CentOS, configurar tu servidor como necesites.'
        },
        {
          pregunta: '¿Cómo funciona el escalado de VPS?',
          respuesta: 'Puedes escalar verticalmente (más RAM/CPU) o horizontalmente (más servidores) según tus necesidades. Los cambios se aplican con reinicio mínimo.'
        }
      ]
    },
    {
      titulo: 'Dominios',
      icono: '🔗',
      preguntas: [
        {
          pregunta: '¿Cómo registro un dominio?',
          respuesta: 'Usa nuestro buscador de dominios, verifica disponibilidad, agrégalo al carrito y completa la compra. Se activa automáticamente en minutos.'
        },
        {
          pregunta: '¿Puedo transferir mi dominio existente?',
          respuesta: 'Sí, ofrecemos transferencia gratuita de dominios. El proceso toma 5-7 días y incluye 1 año adicional de registro.'
        },
        {
          pregunta: '¿Qué pasa si mi dominio expira?',
          respuesta: 'Tienes 30 días de gracia para renovar sin costo extra. Después entra en periodo de redención (90 días) con costo adicional de recuperación.'
        }
      ]
    },
    {
      titulo: 'Facturación',
      icono: '💳',
      preguntas: [
        {
          pregunta: '¿Qué métodos de pago aceptan?',
          respuesta: 'Aceptamos tarjetas de crédito/débito (Visa, Mastercard, AMEX), PayPal, transferencias bancarias y pagos en OXXO. Facturación automática disponible.'
        },
        {
          pregunta: '¿Puedo obtener reembolso?',
          respuesta: 'Ofrecemos garantía de devolución de 30 días en hosting web. VPS y dominios no son reembolsables por políticas del proveedor.'
        },
        {
          pregunta: '¿Cómo descargo mis facturas?',
          respuesta: 'Accede a tu panel de cliente, sección Facturación. Ahí puedes ver, descargar e imprimir todas tus facturas en formato PDF.'
        }
      ]
    },
    {
      titulo: 'Soporte Técnico',
      icono: '🔧',
      preguntas: [
        {
          pregunta: '¿Está disponible el soporte 24/7?',
          respuesta: 'Sí, ofrecemos soporte 24/7 por chat en vivo, tickets y teléfono. Los tickets críticos se atienden en menos de 1 hora.'
        },
        {
          pregunta: '¿Qué incluye el soporte gratuito?',
          respuesta: 'Incluye configuración inicial, resolución de problemas del servidor, migraciones gratuitas, actualizaciones de software y consultas técnicas básicas.'
        },
        {
          pregunta: '¿Ofrecen servicios de migración?',
          respuesta: 'Sí, migramos tu sitio web gratuitamente desde cualquier proveedor. Solo necesitamos acceso a tu hosting actual y dominio.'
        }
      ]
    },
    {
      titulo: 'Seguridad',
      icono: '🔒',
      preguntas: [
        {
          pregunta: '¿Qué medidas de seguridad implementan?',
          respuesta: 'Firewall DDoS, SSL gratuito, backups automáticos diarios, monitoreo 24/7, actualizaciones de seguridad automáticas y escaneo de malware.'
        },
        {
          pregunta: '¿Cómo funcionan los backups?',
          respuesta: 'Realizamos backups automáticos diarios que se conservan por 30 días. Puedes restaurar tu sitio en cualquier momento desde tu panel de control.'
        },
        {
          pregunta: '¿Qué hago si mi sitio fue hackeado?',
          respuesta: 'Contáctanos inmediatamente. Nuestro equipo de seguridad limpiará tu sitio, identificará la vulnerabilidad y restaurará desde backup limpio.'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Preguntas Frecuentes
            </h1>
          </div>
          <p className="text-gray-600 text-lg mb-8">
            Encuentra respuestas rápidas a las preguntas más comunes
          </p>

          {/* Buscador */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Busca tu pregunta aquí..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Acceso rápido */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <MessageCircle className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Chat en Vivo</h3>
            <p className="text-sm text-gray-600">Soporte instantáneo 24/7</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Base de Conocimiento</h3>
            <p className="text-sm text-gray-600">Guías y tutoriales detallados</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <HelpCircle className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Crear Ticket</h3>
            <p className="text-sm text-gray-600">Soporte personalizado</p>
          </Card>
        </div>

        {/* Preguntas por categoría */}
        <div className="space-y-8">
          {categorias.map((categoria, index) => (
            <Card key={index}>
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-3">
                  <span className="text-2xl">{categoria.icono}</span>
                  {categoria.titulo}
                </h2>
              </div>
              
              <div className="divide-y">
                {categoria.preguntas.map((item, idx) => (
                  <details key={idx} className="group">
                    <summary className="p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-800 group-open:text-blue-600">
                          {item.pregunta}
                        </h3>
                        <ChevronRight className="h-5 w-5 text-gray-400 group-open:rotate-90 transition-transform" />
                      </div>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {item.respuesta}
                    </div>
                  </details>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* CTA de contacto */}
        <Card className="mt-12">
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              ¿No encontraste lo que buscabas?
            </h2>
            <p className="text-gray-600 mb-6">
              Nuestro equipo de soporte está listo para ayudarte con cualquier pregunta
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Iniciar Chat
              </Button>
              <Button variant="outline" size="lg">
                Crear Ticket
              </Button>
            </div>
          </div>
        </Card>

        {/* Enlaces relacionados */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="text-center">
            <h3 className="font-semibold text-gray-800 mb-3">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/recursos/guias" className="text-blue-600 hover:underline">Guías de configuración</a></li>
              <li><a href="/recursos/blog-tecnico" className="text-blue-600 hover:underline">Blog técnico</a></li>
              <li><a href="/recursos/webinars" className="text-blue-600 hover:underline">Webinars</a></li>
            </ul>
          </div>
          
          <div className="text-center">
            <h3 className="font-semibold text-gray-800 mb-3">Soporte</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/mesa-de-ayuda" className="text-blue-600 hover:underline">Mesa de ayuda</a></li>
              <li><a href="/estado" className="text-blue-600 hover:underline">Estado del servicio</a></li>
              <li><a href="/contacto" className="text-blue-600 hover:underline">Contacto</a></li>
            </ul>
          </div>
          
          <div className="text-center">
            <h3 className="font-semibold text-gray-800 mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/legal/terminos" className="text-blue-600 hover:underline">Términos de servicio</a></li>
              <li><a href="/legal/privacidad" className="text-blue-600 hover:underline">Política de privacidad</a></li>
              <li><a href="/garantia" className="text-blue-600 hover:underline">Garantía de servicio</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}