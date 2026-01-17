'use client';

import { BookOpenIcon, CodeBracketIcon, DocumentTextIcon, PlayIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';

const documentationResources = [
  {
    title: 'Guía de Inicio Rápido',
    description: 'Aprende los fundamentos para comenzar con ARCIICloud en minutos',
    icon: PlayIcon,
    link: '/docs/quick-start',
    type: 'Guía'
  },
  {
    title: 'API Reference',
    description: 'Documentación completa de todos nuestros endpoints y métodos',
    icon: CodeBracketIcon,
    link: '/docs/api',
    type: 'API'
  },
  {
    title: 'SDK & Libraries',
    description: 'Bibliotecas oficiales para JavaScript, Python, PHP y más',
    icon: BookOpenIcon,
    link: '/docs/sdks',
    type: 'Código'
  },
  {
    title: 'Ejemplos de Código',
    description: 'Proyectos de ejemplo y snippets para implementaciones comunes',
    icon: DocumentTextIcon,
    link: '/docs/examples',
    type: 'Ejemplos'
  }
];

const popularTopics = [
  'Deployment con Docker',
  'Configuración de DNS',
  'SSL y Certificados',
  'Monitoreo y Logging',
  'Escalado Automático',
  'Base de Datos'
];

export default function DocumentationSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
            Documentación Completa
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Todo lo que necesitas para integrar y aprovechar al máximo ARCIICloud
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {documentationResources.map((resource, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                    <resource.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-secondary-900">{resource.title}</h3>
                      <span className="text-xs px-2 py-1 bg-primary-50 text-primary-700 rounded-full font-medium">
                        {resource.type}
                      </span>
                    </div>
                    <p className="text-secondary-600">{resource.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <Button variant="outline" className="w-full">
                  Ver Documentación
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-secondary-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-secondary-900 mb-6 text-center">
            Temas Populares
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {popularTopics.map((topic, index) => (
              <Button
                key={index}
                variant="ghost"
                className="text-left justify-start h-auto p-4 hover:bg-white transition-colors"
              >
                <span className="text-secondary-700 font-medium">{topic}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}