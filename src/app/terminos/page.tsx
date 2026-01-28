import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos y Condiciones - NewARCII Cloud',
  description: 'Términos y condiciones de uso de los servicios de NewARCII Cloud'
}

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Términos y Condiciones</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Aceptación de los Términos</h2>
            <p className="text-gray-700 mb-6">
              Al utilizar los servicios de NewARCII Cloud, usted acepta estar sujeto a estos 
              términos y condiciones.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Descripción del Servicio</h2>
            <p className="text-gray-700 mb-6">
              NewARCII Cloud proporciona servicios de hosting, cloud computing y soluciones 
              tecnológicas empresariales.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Responsabilidades del Usuario</h2>
            <ul className="text-gray-700 mb-6 list-disc pl-6">
              <li>Mantener la confidencialidad de sus credenciales</li>
              <li>Usar los servicios de manera legal y apropiada</li>
              <li>Cumplir con todas las políticas aplicables</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Limitaciones de Responsabilidad</h2>
            <p className="text-gray-700 mb-6">
              NewARCII Cloud no será responsable por daños indirectos, incidentales o 
              consecuenciales que resulten del uso de nuestros servicios.
            </p>
            
            <p className="text-sm text-gray-600 mt-8">
              Última actualización: Enero 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}