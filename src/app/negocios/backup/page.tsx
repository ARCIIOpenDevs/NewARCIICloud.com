import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Backup y Respaldo - NewARCII Cloud',
  description: 'Soluciones de backup y respaldo de datos para proteger su información empresarial'
}

export default function BackupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Backup y Respaldo</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-6">
              Proteja sus datos críticos con nuestras soluciones de backup automático 
              y recuperación de desastres.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Backup Automático</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Respaldos programados diarios</li>
                  <li>• Cifrado de extremo a extremo</li>
                  <li>• Retención configurable</li>
                  <li>• Verificación de integridad</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-4">Recuperación Rápida</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• RTO menor a 4 horas</li>
                  <li>• RPO menor a 15 minutos</li>
                  <li>• Recuperación granular</li>
                  <li>• Pruebas de restauración</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                ¿Sabía que el 60% de las empresas que pierden sus datos cierran en 6 meses?
              </h3>
              <p className="text-yellow-700">
                No espere a que sea demasiado tarde. Proteja su negocio con nuestras 
                soluciones de backup empresarial.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Backup Básico</h4>
                <p className="text-2xl font-bold text-blue-600 mb-3">$19/mes</p>
                <p className="text-sm text-gray-600">100GB de almacenamiento</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg border-2 border-green-200">
                <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full inline-block mb-2">
                  Popular
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Backup Pro</h4>
                <p className="text-2xl font-bold text-green-600 mb-3">$49/mes</p>
                <p className="text-sm text-gray-600">500GB + Soporte prioritario</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Backup Enterprise</h4>
                <p className="text-2xl font-bold text-purple-600 mb-3">$149/mes</p>
                <p className="text-sm text-gray-600">2TB + Gestión dedicada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}