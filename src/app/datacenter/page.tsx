import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Center - NewARCII Cloud',
  description: 'Servicios de data center empresariales con la máxima seguridad y disponibilidad'
}

export default function DataCenterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Data Center</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-6">
              Nuestros servicios de data center ofrecen la infraestructura más avanzada 
              para hospedar y gestionar sus sistemas críticos de negocio.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Características</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Disponibilidad 99.99%</li>
                  <li>• Seguridad física 24/7</li>
                  <li>• Redundancia eléctrica</li>
                  <li>• Control climático avanzado</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">Beneficios</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Reducción de costos</li>
                  <li>• Escalabilidad inmediata</li>
                  <li>• Soporte técnico especializado</li>
                  <li>• Conectividad de alta velocidad</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}