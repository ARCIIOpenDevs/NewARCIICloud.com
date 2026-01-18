'use client';

import { Button } from '@/components/ui/Button';
import { RocketLaunchIcon, CursorArrowRaysIcon } from '@heroicons/react/24/outline';

export function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Precios Transparentes
        </h1>
        <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Sin costos ocultos, sin sorpresas. Hosting de calidad con precios honestos desde $299/mes
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="xl" 
            variant="secondary"
            className="min-w-[200px]"
            rightIcon={<RocketLaunchIcon className="h-5 w-5" />}
          >
            Ver Todos los Planes
          </Button>
          <Button 
            size="xl" 
            variant="ghost"
            className="text-white hover:bg-white/10 min-w-[200px]"
            rightIcon={<CursorArrowRaysIcon className="h-5 w-5" />}
          >
            Calculadora Precios
          </Button>
        </div>

        {/* Price Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">$299</div>
            <div className="text-blue-200 text-sm">Hosting Web desde</div>
            <div className="text-xs text-blue-300 mt-1">por mes</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">$899</div>
            <div className="text-blue-200 text-sm">VPS Cloud desde</div>
            <div className="text-xs text-blue-300 mt-1">por mes</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">$4,999</div>
            <div className="text-blue-200 text-sm">Dedicado desde</div>
            <div className="text-xs text-blue-300 mt-1">por mes</div>
          </div>
        </div>

        <div className="mt-8 text-blue-100 text-sm">
          ✅ SSL Gratis • ✅ Soporte 24/7 • ✅ Backups Incluidos • ✅ Sin Costo de Setup
        </div>
      </div>
    </section>
  );
}