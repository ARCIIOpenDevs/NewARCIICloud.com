import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicios SSL - NewARCII Cloud',
  description: 'Certificados SSL y seguridad web para proteger su sitio web y datos'
}

export default function SSLPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Certificados SSL</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-6">
              Proteja su sitio web y los datos de sus clientes con nuestros certificados SSL 
              de alta seguridad.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">SSL Básico</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">$29/año</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Validación de dominio</li>
                  <li>• Cifrado 256-bit</li>
                  <li>• 1 dominio</li>
                  <li>• Soporte básico</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg text-center border-2 border-green-200">
                <div className="bg-green-500 text-white text-sm px-3 py-1 rounded-full inline-block mb-2">
                  Recomendado
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-3">SSL Empresarial</h3>
                <p className="text-2xl font-bold text-green-600 mb-4">$89/año</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Validación de organización</li>
                  <li>• Cifrado 256-bit</li>
                  <li>• 5 dominios</li>
                  <li>• Soporte prioritario</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">SSL Premium</h3>
                <p className="text-2xl font-bold text-purple-600 mb-4">$199/año</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Validación extendida</li>
                  <li>• Cifrado 256-bit</li>
                  <li>• Dominios ilimitados</li>
                  <li>• Soporte 24/7</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">¿Por qué necesita SSL?</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Protege los datos sensibles de sus usuarios</li>
                <li>• Mejora el posicionamiento SEO en Google</li>
                <li>• Aumenta la confianza de sus visitantes</li>
                <li>• Cumple con estándares de seguridad PCI</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}