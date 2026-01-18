import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  CodeBracketIcon,
  KeyIcon,
  CubeIcon,
  DocumentTextIcon,
  CogIcon,
  CloudIcon,
  ServerIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  ClipboardDocumentIcon,
  BoltIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'API Documentation ARCII Cloud | Automatiza tu Hosting México 2026',
  description: 'Documentación completa de la API REST de ARCII Cloud México. Automatiza hosting, VPS, dominios y facturación. SDKs disponibles en PHP, Python, Node.js.',
  keywords: [
    'api arcii cloud',
    'api hosting mexico',
    'automatizar hosting',
    'api rest hosting',
    'sdk hosting mexico',
    'api documentacion hosting',
    'webhook hosting mexico',
    'api integracion hosting'
  ],
  openGraph: {
    title: 'API Documentation ARCII Cloud México | Automatización Total',
    description: '🔧 API REST completa para desarrolladores. Automatiza hosting, VPS y dominios desde tu aplicación.',
    url: 'https://new.arciicloud.com/api-docs',
    type: 'website',
  },
};

const endpoints = [
  {
    category: 'Autenticación',
    icon: KeyIcon,
    endpoints: [
      { method: 'POST', path: '/auth/login', description: 'Iniciar sesión y obtener token JWT' },
      { method: 'POST', path: '/auth/refresh', description: 'Refrescar token de acceso' },
      { method: 'POST', path: '/auth/logout', description: 'Cerrar sesión y revocar token' }
    ]
  },
  {
    category: 'Hosting',
    icon: CloudIcon,
    endpoints: [
      { method: 'GET', path: '/hosting/accounts', description: 'Listar todas las cuentas de hosting' },
      { method: 'POST', path: '/hosting/accounts', description: 'Crear nueva cuenta de hosting' },
      { method: 'GET', path: '/hosting/accounts/{id}', description: 'Obtener detalles de cuenta específica' },
      { method: 'PUT', path: '/hosting/accounts/{id}', description: 'Actualizar configuración de cuenta' },
      { method: 'DELETE', path: '/hosting/accounts/{id}', description: 'Suspender o cancelar cuenta' }
    ]
  },
  {
    category: 'VPS Cloud',
    icon: ServerIcon,
    endpoints: [
      { method: 'GET', path: '/vps/servers', description: 'Listar servidores VPS' },
      { method: 'POST', path: '/vps/servers', description: 'Crear nuevo servidor VPS' },
      { method: 'POST', path: '/vps/servers/{id}/reboot', description: 'Reiniciar servidor VPS' },
      { method: 'POST', path: '/vps/servers/{id}/resize', description: 'Escalar recursos del VPS' },
      { method: 'GET', path: '/vps/servers/{id}/stats', description: 'Obtener estadísticas de uso' }
    ]
  },
  {
    category: 'Dominios',
    icon: CubeIcon,
    endpoints: [
      { method: 'GET', path: '/domains', description: 'Listar dominios registrados' },
      { method: 'POST', path: '/domains/register', description: 'Registrar nuevo dominio' },
      { method: 'POST', path: '/domains/transfer', description: 'Transferir dominio existente' },
      { method: 'GET', path: '/domains/{domain}/dns', description: 'Obtener registros DNS' },
      { method: 'PUT', path: '/domains/{domain}/dns', description: 'Actualizar configuración DNS' }
    ]
  },
  {
    category: 'Facturación',
    icon: DocumentTextIcon,
    endpoints: [
      { method: 'GET', path: '/billing/invoices', description: 'Listar facturas del cliente' },
      { method: 'GET', path: '/billing/invoices/{id}', description: 'Obtener factura específica' },
      { method: 'POST', path: '/billing/payment', description: 'Procesar pago de factura' },
      { method: 'GET', path: '/billing/balance', description: 'Consultar saldo de cuenta' }
    ]
  }
];

const sdks = [
  {
    language: 'PHP',
    version: 'v2.1.0',
    install: 'composer require arciicloud/sdk-php',
    icon: '🐘',
    color: 'blue'
  },
  {
    language: 'Python',
    version: 'v2.0.3',
    install: 'pip install arciicloud-sdk',
    icon: '🐍',
    color: 'green'
  },
  {
    language: 'Node.js',
    version: 'v1.8.2',
    install: 'npm install @arciicloud/sdk',
    icon: '📦',
    color: 'yellow'
  },
  {
    language: 'cURL',
    version: 'REST API',
    install: 'curl https://api.arciicloud.com',
    icon: '🔧',
    color: 'gray'
  }
];

const quickStart = [
  {
    step: 1,
    title: 'Obtener API Key',
    description: 'Genera tu token de acceso desde el panel de control',
    code: 'Panel → Configuración → API Keys → Generar Nueva'
  },
  {
    step: 2,
    title: 'Instalar SDK',
    description: 'Usa tu gestor de paquetes favorito',
    code: 'composer require arciicloud/sdk-php'
  },
  {
    step: 3,
    title: 'Inicializar Cliente',
    description: 'Configura tu cliente de la API',
    code: `<?php
$client = new ARCIICloud\\Client([
    'api_key' => 'tu_api_key_aqui',
    'environment' => 'production'
]);`
  },
  {
    step: 4,
    title: 'Hacer Primera Llamada',
    description: 'Lista tus cuentas de hosting',
    code: `$accounts = $client->hosting()->list();
foreach ($accounts as $account) {
    echo $account->domain . "\\n";
}`
  }
];

const features = [
  {
    icon: BoltIcon,
    title: 'REST API Completa',
    description: 'Endpoints RESTful para todas las funcionalidades'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Seguridad OAuth 2.0',
    description: 'Autenticación segura con tokens JWT'
  },
  {
    icon: DocumentTextIcon,
    title: 'Documentación Interactiva',
    description: 'Swagger/OpenAPI con pruebas en vivo'
  },
  {
    icon: CogIcon,
    title: 'SDKs Oficiales',
    description: 'Librerías para PHP, Python y Node.js'
  },
  {
    icon: CloudIcon,
    title: 'Webhooks',
    description: 'Notificaciones automáticas de eventos'
  },
  {
    icon: ClipboardDocumentIcon,
    title: 'Rate Limiting',
    description: '1000 requests/hora por API key'
  }
];

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <CodeBracketIcon className="h-10 w-10 text-white" />
          </div>
          
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">
            ARCII Cloud API
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
            Automatiza completamente tu infraestructura de hosting con nuestra API REST. 
            Gestiona servidores, dominios, facturación y más desde tu aplicación.
          </p>
          
          <div className="flex items-center justify-center gap-8 text-sm text-secondary-500 mb-8">
            <div className="flex items-center gap-2">
              <ShieldCheckIcon className="h-4 w-4" />
              <span>OAuth 2.0 Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <BoltIcon className="h-4 w-4" />
              <span>RESTful JSON API</span>
            </div>
            <div className="flex items-center gap-2">
              <CodeBracketIcon className="h-4 w-4" />
              <span>OpenAPI 3.0</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="#quick-start">
                Empezar Ahora
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://api.arciicloud.com/docs" target="_blank">
                API Explorer
                <ArrowRightIcon className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Quick Start */}
        <section id="quick-start" className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Empezar en 4 Pasos
            </h2>
            <p className="text-lg text-secondary-600">
              De cero a tu primera integración en menos de 10 minutos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              {quickStart.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary-900 mb-2">{step.title}</h3>
                    <p className="text-secondary-600 text-sm mb-2">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CodeBracketIcon className="h-6 w-6 text-purple-600" />
                  Código de Ejemplo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-secondary-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
                  <pre>{quickStart[quickStart.length - 1].code}</pre>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button size="sm" variant="outline">
                    <ClipboardDocumentIcon className="h-4 w-4 mr-2" />
                    Copiar Código
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="https://github.com/arciicloud/examples" target="_blank">
                      Ver Más Ejemplos
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Características de la API
            </h2>
            <p className="text-lg text-secondary-600">
              Todo lo que necesitas para integrar ARCII Cloud en tu aplicación
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-secondary-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SDKs */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              SDKs Oficiales
            </h2>
            <p className="text-lg text-secondary-600">
              Librerías oficiales para acelerar tu desarrollo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdks.map((sdk, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{sdk.icon}</div>
                  <h3 className="text-lg font-bold text-secondary-900 mb-2">
                    {sdk.language}
                  </h3>
                  <div className={`inline-block px-2 py-1 rounded text-xs font-medium mb-4 ${
                    sdk.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                    sdk.color === 'green' ? 'bg-green-100 text-green-800' :
                    sdk.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {sdk.version}
                  </div>
                  <div className="bg-secondary-900 rounded-lg p-3 text-green-400 font-mono text-xs mb-4">
                    {sdk.install}
                  </div>
                  <Button size="sm" variant="outline" className="w-full" asChild>
                    <Link href={`https://github.com/arciicloud/sdk-${sdk.language.toLowerCase()}`} target="_blank">
                      Ver en GitHub
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Endpoints */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Endpoints Disponibles
            </h2>
            <p className="text-lg text-secondary-600">
              API REST completa para gestionar todos los servicios
            </p>
          </div>

          <div className="space-y-8">
            {endpoints.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <category.icon className="h-6 w-6 text-primary-600" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.endpoints.map((endpoint, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-3 bg-secondary-50 rounded-lg">
                        <span className={`px-2 py-1 rounded text-xs font-bold text-white ${
                          endpoint.method === 'GET' ? 'bg-green-500' :
                          endpoint.method === 'POST' ? 'bg-blue-500' :
                          endpoint.method === 'PUT' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="font-mono text-secondary-900 font-medium">
                          {endpoint.path}
                        </code>
                        <span className="text-secondary-600 text-sm flex-1">
                          {endpoint.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Authentication */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <KeyIcon className="h-6 w-6 text-orange-600" />
                Autenticación
              </CardTitle>
              <p className="text-secondary-600">
                Todas las requests requieren autenticación mediante JWT tokens
              </p>
            </CardHeader>
            
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-secondary-900 mb-4">Obtener Token de Acceso:</h4>
                  <div className="bg-secondary-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto mb-4">
                    <pre>{`curl -X POST https://api.arciicloud.com/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "tu@email.com",
    "password": "tu_password",
    "api_key": "tu_api_key"
  }'`}</pre>
                  </div>
                  
                  <h4 className="font-bold text-secondary-900 mb-4">Respuesta:</h4>
                  <div className="bg-secondary-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
                    <pre>{`{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "token_type": "Bearer",
  "expires_in": 3600
}`}</pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-secondary-900 mb-4">Usar Token en Requests:</h4>
                  <div className="bg-secondary-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto mb-6">
                    <pre>{`curl -X GET https://api.arciicloud.com/hosting/accounts \\
  -H "Authorization: Bearer tu_access_token" \\
  -H "Accept: application/json"`}</pre>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <h5 className="font-medium text-yellow-900 mb-1">⚠️ Seguridad</h5>
                      <p className="text-yellow-800 text-sm">
                        Nunca compartas tu API key o tokens de acceso. 
                        Mantén las credenciales seguras y rotálas regularmente.
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h5 className="font-medium text-blue-900 mb-1">💡 Rate Limits</h5>
                      <p className="text-blue-800 text-sm">
                        Límite: 1,000 requests por hora por API key. 
                        Usa headers X-RateLimit-* para monitorear tu uso.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Support */}
        <section>
          <Card className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
            <CardContent className="p-12 text-center">
              <CodeBracketIcon className="h-16 w-16 mx-auto mb-6 text-primary-200" />
              <h2 className="text-3xl font-bold mb-4">
                ¿Necesitas Ayuda con la Integración?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Nuestro equipo de desarrolladores está listo para ayudarte con tu integración. 
                Soporte técnico especializado en API y SDKs.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
                <div className="bg-primary-500/20 backdrop-blur rounded-lg p-4">
                  <h4 className="font-bold mb-2">Documentación Completa</h4>
                  <p className="text-primary-200 text-sm">Swagger UI interactivo con ejemplos</p>
                </div>
                <div className="bg-primary-500/20 backdrop-blur rounded-lg p-4">
                  <h4 className="font-bold mb-2">GitHub Examples</h4>
                  <p className="text-primary-200 text-sm">Código de ejemplo para casos comunes</p>
                </div>
                <div className="bg-primary-500/20 backdrop-blur rounded-lg p-4">
                  <h4 className="font-bold mb-2">Soporte Dedicado</h4>
                  <p className="text-primary-200 text-sm">Canal de Slack para desarrolladores</p>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="xl" variant="secondary" asChild>
                  <Link href="https://api.arciicloud.com/docs" target="_blank">
                    Ver Documentación Completa
                  </Link>
                </Button>
                <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600" asChild>
                  <Link href="/contacto">
                    Contactar Soporte API
                  </Link>
                </Button>
              </div>
              
              <div className="mt-6 text-sm text-primary-200">
                📧 developers@arciicloud.com • 💬 Slack: #arcii-cloud-api
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}