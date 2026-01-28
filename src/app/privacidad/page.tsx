import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad - NewARCII Cloud',
  description: 'Política de privacidad y protección de datos de NewARCII Cloud'
}

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Política de Privacidad</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Información que Recopilamos</h2>
            <p className="text-gray-700 mb-6">
              Recopilamos información que usted nos proporciona directamente, como nombre, 
              email, y datos de contacto al registrarse en nuestros servicios.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Cómo Usamos Su Información</h2>
            <ul className="text-gray-700 mb-6 list-disc pl-6">
              <li>Proporcionar y mantener nuestros servicios</li>
              <li>Comunicarnos con usted sobre su cuenta</li>
              <li>Mejorar nuestros servicios</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Protección de Datos</h2>
            <p className="text-gray-700 mb-6">
              Implementamos medidas de seguridad técnicas y organizacionales apropiadas 
              para proteger su información personal.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Compartir Información</h2>
            <p className="text-gray-700 mb-6">
              No vendemos, intercambiamos ni transferimos su información personal a terceros 
              sin su consentimiento, excepto como se describe en esta política.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Sus Derechos</h2>
            <ul className="text-gray-700 mb-6 list-disc pl-6">
              <li>Acceder a su información personal</li>
              <li>Corregir datos inexactos</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Limitar el procesamiento de sus datos</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Contacto</h2>
            <p className="text-gray-700 mb-6">
              Si tiene preguntas sobre esta política de privacidad, contacte a: 
              <a href="mailto:privacy@newarcii.cloud" className="text-blue-600 hover:underline">
                privacy@newarcii.cloud
              </a>
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