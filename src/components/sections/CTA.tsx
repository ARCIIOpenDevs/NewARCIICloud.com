import { Button } from '@/components/ui/Button';
import { 
  RocketLaunchIcon,
  ChatBubbleLeftEllipsisIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main CTA */}
          <div className="mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              ¿Listo para migrar tu sitio?
            </h2>
            <p className="text-xl lg:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto">
              Únete a más de <strong>50,000 sitios web</strong> que confían en nuestra infraestructura. 
              <br />
              <strong>Migración gratuita</strong> y soporte 24/7 incluidos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="xl" 
                variant="secondary"
                className="min-w-[220px] text-lg"
                rightIcon={<RocketLaunchIcon className="h-6 w-6" />}
              >
                Empezar Ahora
              </Button>
              <Button 
                size="xl" 
                variant="ghost"
                className="text-white hover:bg-white/10 min-w-[220px] text-lg"
                rightIcon={<ChatBubbleLeftEllipsisIcon className="h-6 w-6" />}
              >
                Hablar con Experto
              </Button>
            </div>
          </div>
          
          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="bg-success-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ChatBubbleLeftEllipsisIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Chat en Vivo</h3>
              <p className="text-blue-100 mb-4">Habla con nuestros expertos en tiempo real</p>
              <Button variant="ghost" className="text-white hover:bg-white/10 w-full">
                Iniciar Chat
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="bg-warning-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Llamada Gratuita</h3>
              <p className="text-blue-100 mb-4">Consultoría personalizada sin costo</p>
              <Button variant="ghost" className="text-white hover:bg-white/10 w-full">
                <span>+52 (55) 1234-5678</span>
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="bg-primary-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <RocketLaunchIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Migración Express</h3>
              <p className="text-blue-100 mb-4">Migración completa en menos de 24h</p>
              <Button variant="ghost" className="text-white hover:bg-white/10 w-full">
                Solicitar Migración
              </Button>
            </div>
          </div>
          
          {/* Guarantee */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-success-500/20 border border-success-400/30 text-success-100">
              <span className="w-2 h-2 bg-success-400 rounded-full mr-3 animate-pulse" />
              <strong>Garantía de 30 días</strong> - Si no estás satisfecho, te devolvemos tu dinero
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}