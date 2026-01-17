import type { Metadata } from 'next';
import { PlansComparator } from '@/components/tools/PlansComparator';

export const metadata: Metadata = {
  title: 'Comparador de Planes - Encuentra la Mejor Opción',
  description: 'Compara todos nuestros planes de hosting, VPS y servidores dedicados lado a lado. Encuentra la opción perfecta para tu proyecto.',
};

export default function ComparadorPage() {
  return (
    <div className="pt-20">
      <PlansComparator />
    </div>
  );
}