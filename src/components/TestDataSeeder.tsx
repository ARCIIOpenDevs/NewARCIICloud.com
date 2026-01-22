'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/ButtonCRM';

export default function TestDataSeeder() {
  const [isSeeding, setIsSeeding] = useState(false);

  const seedTestData = async () => {
    setIsSeeding(true);
    try {
      // TODO: Update test data structure to match new Client and Service interfaces
      console.log('Test data seeding temporarily disabled for interface updates');
      alert('Test data seeding is temporarily disabled while we update the data interfaces');
    } catch (error) {
      console.error('Error seeding data:', error);
      alert('Error al crear los datos de prueba');
    } finally {
      setIsSeeding(false);
    }
  };

  return (
    <div className="p-6 border border-yellow-200 bg-yellow-50 rounded-lg">
      <h3 className="text-lg font-medium text-yellow-800 mb-4">
        🧪 Herramienta de Datos de Prueba
      </h3>
      <p className="text-sm text-yellow-700 mb-4">
        Temporalmente deshabilitado - actualizando interfaces de datos para compatibilidad con Client y Service.
      </p>
      <Button 
        onClick={seedTestData} 
        disabled={isSeeding}
        className="bg-yellow-600 hover:bg-yellow-700"
      >
        {isSeeding ? '⏳ Insertando...' : '🚀 Insertar Datos de Prueba (Deshabilitado)'}
      </Button>
    </div>
  );
}