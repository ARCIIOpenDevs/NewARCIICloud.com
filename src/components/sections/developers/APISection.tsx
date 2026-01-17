'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  CodeBracketIcon,
  DocumentTextIcon,
  CommandLineIcon,
  GlobeAltIcon,
  BoltIcon,
  CpuChipIcon,
} from '@heroicons/react/24/solid';

const apiEndpoints = [
  {
    method: 'GET',
    endpoint: '/api/v1/servers',
    description: 'Lista todos los servidores de tu cuenta',
    response: {
      status: 200,
      data: [
        {
          id: 'srv_123456',
          name: 'production-web',
          status: 'running',
          ip: '192.168.1.100',
          created_at: '2026-01-15T10:30:00Z'
        }
      ]
    }
  },
  {
    method: 'POST',
    endpoint: '/api/v1/deploy',
    description: 'Deploys código desde repositorio Git',
    body: {
      repository: 'https://github.com/user/app.git',
      branch: 'main',
      environment: 'production'
    },
    response: {
      status: 202,
      data: {
        deployment_id: 'dep_789012',
        status: 'queued',
        estimated_time: '2 minutes'
      }
    }
  },
  {
    method: 'PUT',
    endpoint: '/api/v1/servers/{id}/scale',
    description: 'Escala recursos del servidor automáticamente',
    body: {
      cpu_cores: 4,
      memory_gb: 8,
      auto_scale: true
    },
    response: {
      status: 200,
      data: {
        message: 'Server scaling initiated',
        eta: '30 seconds'
      }
    }
  }
];

const sdks = [
  {
    language: 'JavaScript/Node.js',
    logo: '/tech/nodejs.svg',
    install: 'npm install @arciicloud/sdk',
    example: `import { ARCIICloud } from '@arciicloud/sdk';

const client = new ARCIICloud({
  apiKey: process.env.ARCII_API_KEY
});

// Deploy desde Git
await client.deploy({
  repository: 'https://github.com/user/app.git',
  branch: 'main',
  environment: 'production'
});

// Escalar servidor
await client.servers.scale('srv_123456', {
  cpu: 4, memory: 8
});`,
    features: ['TypeScript support', 'Async/await', 'Webhooks', 'Streaming logs']
  },
  {
    language: 'Python',
    logo: '/tech/python.svg',
    install: 'pip install arciicloud',
    example: `from arciicloud import ARCIICloud

client = ARCIICloud(api_key=os.getenv('ARCII_API_KEY'))

# Deploy application
deployment = client.deploy(
    repository='https://github.com/user/app.git',
    branch='main',
    environment='production'
)

# Monitor deployment
status = client.deployments.get_status(deployment.id)
print(f"Status: {status.current_stage}")`,
    features: ['Async support', 'Type hints', 'Django integration', 'Pandas compatible']
  },
  {
    language: 'PHP',
    logo: '/tech/php.svg',
    install: 'composer require arciicloud/sdk',
    example: `<?php
use ARCIICloud\\Client;

$client = new Client([
    'api_key' => $_ENV['ARCII_API_KEY']
]);

// Create new server
$server = $client->servers()->create([
    'name' => 'api-server',
    'plan' => 'vps-pro',
    'region' => 'us-east-1'
]);

// Configure SSL
$client->ssl()->create($server->id, [
    'domains' => ['api.myapp.com']
]);`,
    features: ['Laravel integration', 'Symfony support', 'PSR compliance', 'Guzzle HTTP']
  },
  {
    language: 'Go',
    logo: '/tech/golang.svg',
    install: 'go get github.com/arciicloud/go-sdk',
    example: `package main

import (
    "context"
    "github.com/arciicloud/go-sdk/arcii"
)

func main() {
    client := arcii.NewClient("your-api-key")
    
    // Deploy with context
    ctx := context.Background()
    deployment, err := client.Deploy(ctx, &arcii.DeployRequest{
        Repository: "https://github.com/user/app.git",
        Branch:     "main",
        Environment: "production",
    })
    
    if err != nil {
        log.Fatal(err)
    }
}`,
    features: ['Context support', 'Structured logging', 'Concurrent safe', 'Minimal dependencies']
  }
];

const webhookEvents = [
  {
    event: 'deployment.started',
    description: 'Se inicia un nuevo deployment',
    payload: {
      deployment_id: 'dep_789012',
      repository: 'user/app',
      branch: 'main',
      environment: 'production'
    }
  },
  {
    event: 'deployment.completed',
    description: 'Deployment completado exitosamente',
    payload: {
      deployment_id: 'dep_789012',
      status: 'success',
      url: 'https://app.arciicloud.dev',
      duration: '2m 15s'
    }
  },
  {
    event: 'server.scaled',
    description: 'Servidor escalado automáticamente',
    payload: {
      server_id: 'srv_123456',
      previous: { cpu: 2, memory: 4 },
      current: { cpu: 4, memory: 8 },
      trigger: 'cpu_threshold'
    }
  }
];

export function APISection() {
  return (
    <section className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
            APIs REST Completas
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Controla toda tu infraestructura mediante APIs REST modernas. Deploy automático, 
            escalado dinámico, monitoreo en tiempo real y mucho más.
          </p>
        </div>

        {/* API Examples */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Endpoints Principales
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {apiEndpoints.map((api, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-secondary-900 text-white">
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      api.method === 'GET' ? 'bg-green-600' :
                      api.method === 'POST' ? 'bg-blue-600' : 'bg-orange-600'
                    }`}>
                      {api.method}
                    </span>
                    <code className="font-mono text-accent-400">{api.endpoint}</code>
                  </div>
                  <p className="text-secondary-200 text-sm mt-2">{api.description}</p>
                </CardHeader>
                
                <CardContent className="p-0">
                  {/* Request Body */}
                  {api.body && (
                    <div className="border-b border-secondary-200">
                      <div className="px-4 py-2 bg-secondary-50 text-xs font-semibold text-secondary-700">
                        Request Body
                      </div>
                      <pre className="p-4 text-sm bg-secondary-900 text-green-400 font-mono overflow-x-auto">
                        {JSON.stringify(api.body, null, 2)}
                      </pre>
                    </div>
                  )}
                  
                  {/* Response */}
                  <div>
                    <div className="px-4 py-2 bg-secondary-50 text-xs font-semibold text-secondary-700">
                      Response ({api.response.status})
                    </div>
                    <pre className="p-4 text-sm bg-secondary-900 text-cyan-400 font-mono overflow-x-auto">
                      {JSON.stringify(api.response.data, null, 2)}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* SDKs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            SDKs Oficiales
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {sdks.map((sdk, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <img src={sdk.logo} alt={sdk.language} className="w-8 h-8" />
                    <h4 className="text-lg font-bold text-secondary-900">{sdk.language}</h4>
                  </div>
                  
                  <div className="bg-secondary-100 rounded-lg p-3 font-mono text-sm">
                    <span className="text-secondary-600">$ </span>
                    <span className="text-secondary-900">{sdk.install}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="p-0">
                  <div className="border-b border-secondary-200">
                    <div className="px-4 py-2 bg-secondary-50 text-xs font-semibold text-secondary-700">
                      Ejemplo de Uso
                    </div>
                    <pre className="p-4 text-sm bg-secondary-900 text-white font-mono overflow-x-auto">
                      <code>{sdk.example}</code>
                    </pre>
                  </div>
                  
                  <div className="p-4">
                    <div className="text-sm font-medium text-secondary-900 mb-2">Características:</div>
                    <div className="flex flex-wrap gap-2">
                      {sdk.features.map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Webhooks */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Webhooks en Tiempo Real
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {webhookEvents.map((webhook, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <h4 className="text-lg font-bold text-secondary-900 mb-2">
                    {webhook.event}
                  </h4>
                  <p className="text-sm text-secondary-600 mb-4">
                    {webhook.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="bg-secondary-50 rounded-lg p-3">
                    <div className="text-xs font-semibold text-secondary-700 mb-2">Payload:</div>
                    <pre className="text-xs font-mono text-secondary-900 overflow-x-auto">
                      {JSON.stringify(webhook.payload, null, 2)}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* API Stats & CTA */}
        <Card className="bg-gradient-to-r from-secondary-900 to-secondary-800 text-white">
          <CardContent className="py-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">
                API de Clase Mundial
              </h3>
              <p className="text-secondary-200 max-w-2xl mx-auto">
                Nuestras APIs están construidas siguiendo los estándares más modernos de la industria, 
                con documentación completa y soporte dedicado para developers.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400 mb-2">99.99%</div>
                <div className="text-secondary-300">API Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">&lt;50ms</div>
                <div className="text-secondary-300">Latencia promedio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success-400 mb-2">100+</div>
                <div className="text-secondary-300">Endpoints disponibles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-secondary-300">Developer support</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Explorar API Docs
              </Button>
              <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
                Obtener API Key
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}