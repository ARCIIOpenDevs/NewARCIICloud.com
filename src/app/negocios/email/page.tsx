import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Email Empresarial - NewARCII Cloud',
  description: 'Servicios de correo electrónico profesional para empresas'
}

export default function EmailPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Email Empresarial</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-6">
              Soluciones de correo electrónico profesional con la máxima seguridad 
              y disponibilidad para su empresa.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Características</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Buzones de hasta 50GB
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Filtro anti-spam avanzado
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Acceso desde cualquier dispositivo
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Calendario y contactos sincronizados
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Backup automático
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Planes Disponibles</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-blue-900">Email Básico</h4>
                      <span className="text-xl font-bold text-blue-600">$5/mes</span>
                    </div>
                    <p className="text-sm text-gray-600">10GB de almacenamiento por buzón</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-green-900">Email Pro</h4>
                      <span className="text-xl font-bold text-green-600">$12/mes</span>
                    </div>
                    <p className="text-sm text-gray-600">25GB + Herramientas colaborativas</p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-purple-900">Email Enterprise</h4>
                      <span className="text-xl font-bold text-purple-600">$25/mes</span>
                    </div>
                    <p className="text-sm text-gray-600">50GB + Seguridad avanzada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}