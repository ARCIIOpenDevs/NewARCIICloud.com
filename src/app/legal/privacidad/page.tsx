import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | ARCII Cloud México',
  description: 'Política de privacidad de ARCII Cloud. Conoce cómo protegemos y manejamos tus datos personales conforme a la ley mexicana de protección de datos.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen pt-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1>Política de Privacidad</h1>
          <p className="text-lg text-secondary-600 mb-8">
            Última actualización: 17 de enero de 2026
          </p>

          <h2>1. Información General</h2>
          <p>
            ARCII Cloud, con domicilio en México, se compromete a proteger la privacidad de nuestros usuarios 
            y clientes. Esta política describe cómo recopilamos, usamos y protegemos su información personal.
          </p>

          <h2>2. Información que Recopilamos</h2>
          <h3>2.1 Información Personal</h3>
          <ul>
            <li>Nombre completo y datos de contacto</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Dirección postal</li>
            <li>Información de facturación</li>
          </ul>

          <h3>2.2 Información Técnica</h3>
          <ul>
            <li>Dirección IP y ubicación aproximada</li>
            <li>Información del navegador y dispositivo</li>
            <li>Cookies y tecnologías similares</li>
            <li>Registros de uso de nuestros servicios</li>
          </ul>

          <h2>3. Uso de la Información</h2>
          <p>Utilizamos su información para:</p>
          <ul>
            <li>Proporcionar y mantener nuestros servicios</li>
            <li>Procesar pagos y facturación</li>
            <li>Ofrecer soporte técnico</li>
            <li>Enviar comunicaciones importantes</li>
            <li>Mejorar nuestros servicios</li>
            <li>Cumplir con obligaciones legales</li>
          </ul>

          <h2>4. Compartir Información</h2>
          <p>
            No vendemos, alquilamos ni compartimos su información personal con terceros, excepto:
          </p>
          <ul>
            <li>Con su consentimiento explícito</li>
            <li>Para cumplir con la ley o procesos legales</li>
            <li>Con proveedores de servicios bajo acuerdos de confidencialidad</li>
            <li>En caso de fusión o venta de la empresa</li>
          </ul>

          <h2>5. Seguridad de Datos</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas para proteger su información:
          </p>
          <ul>
            <li>Encriptación SSL/TLS para transmisión de datos</li>
            <li>Sistemas de autenticación robustos</li>
            <li>Auditorías regulares de seguridad</li>
            <li>Acceso limitado a información personal</li>
          </ul>

          <h2>6. Sus Derechos</h2>
          <p>Conforme a la Ley Federal de Protección de Datos Personales, usted tiene derecho a:</p>
          <ul>
            <li><strong>Acceso:</strong> Conocer qué datos tenemos sobre usted</li>
            <li><strong>Rectificación:</strong> Corregir datos inexactos</li>
            <li><strong>Cancelación:</strong> Solicitar eliminación de sus datos</li>
            <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos</li>
          </ul>

          <h2>7. Retención de Datos</h2>
          <p>
            Conservamos su información personal durante el tiempo necesario para cumplir con los 
            fines descritos en esta política, salvo que la ley requiera un período de retención más largo.
          </p>

          <h2>8. Cookies</h2>
          <p>
            Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web. 
            Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad.
          </p>

          <h2>9. Cambios a esta Política</h2>
          <p>
            Nos reservamos el derecho de modificar esta política de privacidad. Los cambios importantes 
            se comunicarán por correo electrónico o mediante notificación en nuestro sitio web.
          </p>

          <h2>10. Contacto</h2>
          <p>
            Para ejercer sus derechos ARCO o resolver dudas sobre esta política, contáctenos:
          </p>
          <ul>
            <li>Email: privacidad@arciicloud.com</li>
            <li>Teléfono: +52 55 4738-1829</li>
            <li>Horario: Lunes a Viernes, 9:00 AM - 6:00 PM (CST)</li>
          </ul>

          <div className="mt-12 p-6 bg-secondary-50 rounded-lg">
            <h3 className="text-primary-600 font-semibold mb-2">Compromiso con la Privacidad</h3>
            <p className="text-sm text-secondary-600">
              En ARCII Cloud, la protección de su privacidad es fundamental. Esta política se actualiza 
              regularmente para reflejar las mejores prácticas de la industria y el cumplimiento legal.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}