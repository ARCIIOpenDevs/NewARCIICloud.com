import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos de Servicio | ARCII Cloud México',
  description: 'Términos y condiciones de servicio de ARCII Cloud México. Lee nuestros términos de uso, política de reembolsos y responsabilidades.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TerminosPage() {
  return (
    <main className="min-h-screen pt-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1>Términos de Servicio</h1>
          <p className="text-lg text-secondary-600 mb-8">
            Última actualización: 17 de enero de 2026
          </p>

          <h2>1. Aceptación de Términos</h2>
          <p>
            Al utilizar los servicios de ARCII Cloud, usted acepta estar sujeto a estos términos de servicio. 
            Si no está de acuerdo con alguno de estos términos, no utilice nuestros servicios.
          </p>

          <h2>2. Descripción del Servicio</h2>
          <p>
            ARCII Cloud ofrece servicios de hosting web, servidores VPS, servidores dedicados, 
            registro de dominios y servicios relacionados de infraestructura en la nube.
          </p>

          <h3>2.1 Tipos de Servicio</h3>
          <ul>
            <li>Hosting Web (compartido, WordPress optimizado)</li>
            <li>VPS Cloud (servidores virtuales privados)</li>
            <li>Servidores Dedicados</li>
            <li>Registro y gestión de dominios</li>
            <li>Email corporativo</li>
            <li>Servicios de backup y seguridad</li>
          </ul>

          <h2>3. Registro de Cuenta</h2>
          <p>
            Para utilizar nuestros servicios, debe crear una cuenta proporcionando información 
            precisa y actualizada. Es responsable de mantener la confidencialidad de su cuenta.
          </p>

          <h2>4. Política de Uso Aceptable</h2>
          <h3>4.1 Usos Prohibidos</h3>
          <ul>
            <li>Actividades ilegales o fraudulentas</li>
            <li>Spam o envío masivo de correos no solicitados</li>
            <li>Violación de derechos de propiedad intelectual</li>
            <li>Contenido obsceno, difamatorio o discriminatorio</li>
            <li>Actividades que consuman recursos excesivos</li>
            <li>Intentos de acceso no autorizado a sistemas</li>
          </ul>

          <h3>4.2 Consecuencias</h3>
          <p>
            El incumplimiento puede resultar en suspensión temporal o permanente del servicio, 
            sin reembolso de pagos realizados.
          </p>

          <h2>5. Facturación y Pagos</h2>
          <h3>5.1 Tarifas</h3>
          <ul>
            <li>Los precios están listados en pesos mexicanos (MXN)</li>
            <li>IVA incluido donde aplique</li>
            <li>Pueden cambiar con notificación previa de 30 días</li>
          </ul>

          <h3>5.2 Facturación</h3>
          <ul>
            <li>Facturación mensual o anual según el plan seleccionado</li>
            <li>Cargos automáticos en la fecha de renovación</li>
            <li>Facturas electrónicas disponibles</li>
          </ul>

          <h3>5.3 Retrasos en Pago</h3>
          <p>
            Los servicios pueden suspenderse por falta de pago después de 7 días del vencimiento, 
            con notificación previa por email.
          </p>

          <h2>6. Garantías de Servicio</h2>
          <h3>6.1 Uptime</h3>
          <ul>
            <li>Hosting Web: 99.5% uptime garantizado</li>
            <li>VPS Cloud: 99.9% uptime garantizado</li>
            <li>Servidores Dedicados: 99.95% uptime garantizado</li>
          </ul>

          <h3>6.2 Compensación por Downtime</h3>
          <p>
            En caso de incumplimiento del SLA, ofrecemos créditos de servicio según nuestro 
            acuerdo de nivel de servicio detallado.
          </p>

          <h2>7. Backups y Recuperación</h2>
          <ul>
            <li>Backups automáticos disponibles según el plan</li>
            <li>El cliente es responsable de verificar sus backups</li>
            <li>Servicios de recuperación disponibles con costo adicional</li>
            <li>No garantizamos recuperación completa en todos los casos</li>
          </ul>

          <h2>8. Soporte Técnico</h2>
          <h3>8.1 Canales de Soporte</h3>
          <ul>
            <li>Chat en vivo: 24/7</li>
            <li>Email: Respuesta en menos de 24 horas</li>
            <li>Teléfono: Horarios comerciales</li>
          </ul>

          <h3>8.2 Alcance del Soporte</h3>
          <p>
            El soporte cubre configuración básica, resolución de problemas de servidor y 
            orientación técnica. No incluye desarrollo de código personalizado.
          </p>

          <h2>9. Limitación de Responsabilidad</h2>
          <p>
            ARCII Cloud no será responsable por daños indirectos, pérdida de datos, 
            pérdida de ganancias o daños consecuenciales que excedan el monto pagado por el servicio.
          </p>

          <h2>10. Cancelación y Reembolsos</h2>
          <h3>10.1 Por Parte del Cliente</h3>
          <ul>
            <li>Cancelación en cualquier momento con 30 días de aviso</li>
            <li>Garantía de devolución de 30 días en hosting web</li>
            <li>No hay reembolsos por servicios adicionales (dominios, SSL premium)</li>
          </ul>

          <h3>10.2 Por Parte de ARCII Cloud</h3>
          <ul>
            <li>Podemos cancelar por violación de términos</li>
            <li>Notificación de 30 días para cambios importantes</li>
            <li>Reembolso prorrateado en cancelaciones justificadas</li>
          </ul>

          <h2>11. Propiedad Intelectual</h2>
          <p>
            El cliente retiene todos los derechos sobre su contenido. ARCII Cloud retiene 
            derechos sobre su plataforma, software y marca.
          </p>

          <h2>12. Privacidad</h2>
          <p>
            El manejo de datos personales se rige por nuestra 
            <a href="/legal/privacidad" className="text-primary-600 hover:text-primary-700">
              Política de Privacidad
            </a>.
          </p>

          <h2>13. Modificaciones</h2>
          <p>
            Nos reservamos el derecho de modificar estos términos con notificación previa de 30 días. 
            El uso continuado constituye aceptación de los cambios.
          </p>

          <h2>14. Ley Aplicable</h2>
          <p>
            Estos términos se rigen por las leyes mexicanas. Cualquier disputa se resolverá 
            en los tribunales competentes de México.
          </p>

          <h2>15. Contacto</h2>
          <p>Para preguntas sobre estos términos:</p>
          <ul>
            <li>Email: legal@arciicloud.com</li>
            <li>Teléfono: +52 55 4738-1829</li>
            <li>Horario: Lunes a Viernes, 9:00 AM - 6:00 PM (CST)</li>
          </ul>

          <div className="mt-12 p-6 bg-primary-50 rounded-lg">
            <h3 className="text-primary-700 font-semibold mb-2">Resumen Ejecutivo</h3>
            <p className="text-sm text-primary-600">
              Estos términos protegen tanto a ARCII Cloud como a nuestros clientes, estableciendo 
              expectativas claras para una relación comercial exitosa y duradera.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}