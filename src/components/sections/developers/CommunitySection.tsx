'use client';

import { ChatBubbleLeftRightIcon, UserGroupIcon, CodeBracketSquareIcon, HeartIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';

const communityStats = [
  {
    number: '15K+',
    label: 'Desarrolladores Activos',
    icon: UserGroupIcon
  },
  {
    number: '2.5K+',
    label: 'Proyectos Desplegados',
    icon: CodeBracketSquareIcon
  },
  {
    number: '500+',
    label: 'Contribuciones al Mes',
    icon: HeartIcon
  },
  {
    number: '24/7',
    label: 'Soporte Comunitario',
    icon: ChatBubbleLeftRightIcon
  }
];

const communityChannels = [
  {
    name: 'Discord',
    description: 'Chat en tiempo real con la comunidad',
    members: '8.2K miembros',
    color: 'bg-indigo-50 text-indigo-600',
    link: '#'
  },
  {
    name: 'GitHub',
    description: 'Reporta issues y contribuye al código',
    members: '1.5K stars',
    color: 'bg-gray-50 text-gray-600',
    link: '#'
  },
  {
    name: 'Stack Overflow',
    description: 'Haz preguntas técnicas específicas',
    members: '2.1K preguntas',
    color: 'bg-orange-50 text-orange-600',
    link: '#'
  },
  {
    name: 'Reddit',
    description: 'Discusiones y noticias de la comunidad',
    members: '4.8K miembros',
    color: 'bg-red-50 text-red-600',
    link: '#'
  }
];

const upcomingEvents = [
  {
    title: 'ARCIICloud DevTalk: Microservicios',
    date: '25 Enero, 2026',
    time: '19:00 GMT-6',
    type: 'Webinar',
    attendees: '120 registrados'
  },
  {
    title: 'Hackathon: Cloud Native Apps',
    date: '15-16 Febrero, 2026',
    time: '48 horas',
    type: 'Competencia',
    attendees: '85 equipos'
  },
  {
    title: 'Workshop: Kubernetes Avanzado',
    date: '5 Marzo, 2026',
    time: '10:00 GMT-6',
    type: 'Taller',
    attendees: '45 registrados'
  }
];

export default function CommunitySection() {
  return (
    <section className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
            Únete a Nuestra Comunidad
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Conecta con developers de toda Latinoamérica, comparte experiencias y construye el futuro del cloud computing
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 transition-colors">
                  <stat.icon className="h-6 w-6 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-secondary-900 mb-2">{stat.number}</div>
                <p className="text-secondary-600 text-sm">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Community Channels */}
          <div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-8">
              Canales de Comunidad
            </h3>
            <div className="space-y-4">
              {communityChannels.map((channel, index) => (
                <Card key={index} className="group hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-8 h-8 rounded-lg ${channel.color} flex items-center justify-center`}>
                            <span className="text-sm font-bold">{channel.name[0]}</span>
                          </div>
                          <h4 className="font-bold text-secondary-900">{channel.name}</h4>
                        </div>
                        <p className="text-secondary-600 text-sm mb-1">{channel.description}</p>
                        <p className="text-xs text-secondary-500">{channel.members}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Unirse
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-8">
              Próximos Eventos
            </h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="group hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                            event.type === 'Webinar' 
                              ? 'bg-blue-50 text-blue-700' 
                              : event.type === 'Competencia'
                              ? 'bg-green-50 text-green-700'
                              : 'bg-purple-50 text-purple-700'
                          }`}>
                            {event.type}
                          </span>
                        </div>
                        <h4 className="font-bold text-secondary-900 mb-2">{event.title}</h4>
                        <div className="text-sm text-secondary-600 space-y-1">
                          <p>{event.date} • {event.time}</p>
                          <p className="text-xs text-secondary-500">{event.attendees}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Registrarse
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-primary-50 to-secondary-50 border-0">
            <CardContent className="p-12">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                ¿Quieres contribuir al ecosistema?
              </h3>
              <p className="text-secondary-600 mb-8 max-w-2xl mx-auto">
                Desde documentación hasta código, hay muchas formas de ayudar a crecer la comunidad ARCIICloud
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" size="lg">
                  Ver Guía de Contribución
                </Button>
                <Button variant="outline" size="lg">
                  Programa de Embajadores
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}