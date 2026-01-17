'use client';

import { Button } from '@/components/ui/Button';
import { 
  CodeBracketIcon, 
  CommandLineIcon, 
  CpuChipIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  BoltIcon,
  CloudIcon,
  ServerIcon,
} from '@heroicons/react/24/solid';

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-20 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Code Rain Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent-500/30 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary-500/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-success-500/30 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <CodeBracketIcon className="h-8 w-8 text-accent-400" />
              <span className="text-accent-400 font-semibold text-lg">Developer Cloud</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Infraestructura{' '}
              <span className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
                para Devs
              </span>
            </h1>
            
            <p className="text-xl text-secondary-200 mb-8 max-w-2xl">
              SSH root, Git deployments, Docker, CI/CD pipelines, staging environments y todas 
              las herramientas que necesitas para desarrollar, probar y deployar sin límites.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="text-center bg-white/5 rounded-lg p-3 backdrop-blur-sm border border-white/10">
                <CommandLineIcon className="h-6 w-6 text-accent-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-white">SSH Root</div>
                <div className="text-xs text-secondary-300">Control total</div>
              </div>
              <div className="text-center bg-white/5 rounded-lg p-3 backdrop-blur-sm border border-white/10">
                <RocketLaunchIcon className="h-6 w-6 text-primary-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-white">Git Deploy</div>
                <div className="text-xs text-secondary-300">Auto deployment</div>
              </div>
              <div className="text-center bg-white/5 rounded-lg p-3 backdrop-blur-sm border border-white/10">
                <CloudIcon className="h-6 w-6 text-success-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-white">Docker</div>
                <div className="text-xs text-secondary-300">Containerization</div>
              </div>
              <div className="text-center bg-white/5 rounded-lg p-3 backdrop-blur-sm border border-white/10">
                <CpuChipIcon className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-white">APIs REST</div>
                <div className="text-xs text-secondary-300">Full control</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="gradient" size="lg">
                Comenzar Prueba Gratuita
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Explorar Documentación
              </Button>
            </div>

            {/* Developer Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-secondary-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse"></div>
                <span>15K+ developers activos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
                <span>99.9% uptime API</span>
              </div>
            </div>
          </div>

          {/* Visual - Terminal Mockup */}
          <div className="relative">
            <div className="bg-secondary-900 rounded-xl shadow-2xl border border-secondary-700 overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-secondary-800 px-4 py-3 flex items-center gap-2 border-b border-secondary-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-secondary-400 text-sm font-mono">
                    developer@arciicloud:~/project
                  </span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-accent-400">$</span>
                    <span className="text-white">git push origin main</span>
                  </div>
                  <div className="text-secondary-400 ml-4">
                    <div>Enumerating objects: 15, done.</div>
                    <div>Counting objects: 100% (15/15), done.</div>
                    <div>Compressing objects: 100% (8/8), done.</div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-accent-400">$</span>
                    <span className="text-white">arcii deploy --env=staging</span>
                  </div>
                  <div className="text-success-400 ml-4">
                    <div>✓ Building application...</div>
                    <div>✓ Running tests...</div>
                    <div>✓ Deploying to staging...</div>
                    <div className="text-primary-400">🚀 Deployed successfully!</div>
                    <div>URL: https://staging.myapp.arciicloud.dev</div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-accent-400">$</span>
                    <span className="text-white">docker-compose up -d</span>
                  </div>
                  <div className="text-secondary-400 ml-4">
                    <div>Creating network "app_default"...</div>
                    <div className="text-success-400">✓ Container app_web running</div>
                    <div className="text-success-400">✓ Container app_db running</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-accent-400">$</span>
                    <span className="text-white typing-animation">curl -X POST api.arciicloud.com/deploy</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent-500 rounded-lg p-3 shadow-lg animate-bounce">
              <BoltIcon className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary-500 rounded-lg p-3 shadow-lg animate-pulse">
              <CodeBracketIcon className="h-6 w-6 text-white" />
            </div>
            <div className="absolute top-1/2 -left-8 bg-success-500 rounded-full p-2 shadow-lg animate-ping">
              <ServerIcon className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="relative mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
              <div className="text-3xl font-bold text-accent-400 mb-2">50ms</div>
              <div className="text-secondary-300 text-sm">API Response</div>
              <div className="text-xs text-secondary-400">Average global</div>
            </div>
            <div className="text-center bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
              <div className="text-3xl font-bold text-primary-400 mb-2">30s</div>
              <div className="text-secondary-300 text-sm">Deploy Time</div>
              <div className="text-xs text-secondary-400">With Git hooks</div>
            </div>
            <div className="text-center bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
              <div className="text-3xl font-bold text-success-400 mb-2">100%</div>
              <div className="text-secondary-300 text-sm">Git Integration</div>
              <div className="text-xs text-secondary-400">All major providers</div>
            </div>
            <div className="text-center bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-secondary-300 text-sm">Dev Support</div>
              <div className="text-xs text-secondary-400">Technical experts</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .typing-animation {
          border-right: 2px solid #60A5FA;
          animation: typing 3s steps(40) infinite, blink 1s infinite;
        }

        @keyframes typing {
          0%, 50% { width: 0; }
          100% { width: 100%; }
        }

        @keyframes blink {
          0%, 50% { border-color: transparent; }
          51%, 100% { border-color: #60A5FA; }
        }
      `}</style>
    </section>
  );
}