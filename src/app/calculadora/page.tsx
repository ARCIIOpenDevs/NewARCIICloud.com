import type { Metadata } from 'next';
import { PricingCalculator } from '@/components/tools/PricingCalculator';

export const metadata: Metadata = {
  title: 'Calculadora de Precios - Encuentra el Plan Perfecto',
  description: 'Calculadora interactiva para encontrar el plan de hosting perfecto según tus necesidades. Compara precios y recursos de todos nuestros servicios.',
};

export default function CalculadoraPage() {
  return (
    <div className="pt-20">
      <PricingCalculator />
    </div>
  );
}