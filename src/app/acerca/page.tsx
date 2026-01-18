import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  UserGroupIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  TrophyIcon,
  ServerIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Acerca de ARCII Cloud | Líderes en Hosting México',
  description: 'Conoce la historia de ARCII Cloud: 10+ años siendo líderes en hosting México, +50,000 clientes, centros de datos mundiales y compromiso con la excelencia.',
  keywords: [
    'arcii cloud historia',
    'empresa hosting mexico',
    'lideres hosting',
    'hosting mexico 10 años',
    'centros de datos mexico',
    'equipo arcii cloud'
  ],
  openGraph: {
    title: 'Acerca de ARCII Cloud | 10+ Años de Experiencia',
    description: '🏢 Líderes en hosting México: +50K clientes, 10 centros de datos mundiales, soporte 24/7 desde 2014.',
    url: 'https://new.arciicloud.com/acerca',
    type: 'website',
  },
};

const stats = [
  { number: '10+', label: 'Años de Experiencia', description: 'Desde 2014 en el mercado' },
  { number: '50,000+', label: 'Clientes Satisfechos', description: 'En México y Latinoamérica' },
  { number: '10', label: 'Centros de Datos', description: 'Ubicaciones estratégicas mundiales' },
  { number: '99.9%', label: 'Uptime Garantizado', description: 'Disponibilidad comprobada' },
];

const values = [
  {
    title: 'Innovación Constante',
    description: 'Adoptamos las últimas tecnologías para ofrecer el mejor servicio',
    icon: ServerIcon,
    color: 'from-blue-400 to-cyan-500',
  },
  {
    title: 'Soporte Humano',
    description: 'Técnicos reales, especializados y disponibles 24/7',
    icon: HeartIcon,
    color: 'from-red-400 to-pink-500',
  },
  {
    title: 'Seguridad Máxima',
    description: 'Protección multicapa y cumplimiento de estándares internacionales',
    icon: ShieldCheckIcon,
    color: 'from-green-400 to-emerald-500',
  },
  {
    title: 'Crecimiento Conjunto',
    description: 'Escalamos contigo, desde startup hasta empresa líder',
    icon: TrophyIcon,
    color: 'from-yellow-400 to-orange-500',
  },
];

const timeline = [
  {
    year: '2014',
    title: 'Fundación de ARCII Cloud',
    description: 'Iniciamos con la visión de democratizar el hosting premium en México.',
    milestone: 'Primeros 100 clientes',
  },
  {
    year: '2016',
    title: 'Expansión Internacional',
    description: 'Apertura de nuestro primer centro de datos en Estados Unidos.',
    milestone: '1,000+ sitios web hospedados',
  },
  {
    year: '2018',
    title: 'Certificaciones de Seguridad',
    description: 'Obtención de certificaciones ISO 27001 y PCI DSS.',
    milestone: 'Primer proveedor certificado en México',
  },
  {
    year: '2020',
    title: 'Pandemia y Crecimiento',
    description: 'Apoyamos la digitalización masiva durante la pandemia.',
    milestone: '10,000+ nuevos clientes en un año',
  },
  {
    year: '2022',
    title: 'Infraestructura Global',
    description: 'Llegamos a 10 centros de datos en 3 continentes.',
    milestone: 'Red global completada',
  },
  {
    year: '2024',
    title: 'Liderazgo Reconocido',
    description: 'Reconocidos como el proveedor de hosting #1 en México.',
    milestone: '50,000+ clientes activos',
  },
];

const team = [
  {
    name: 'Carlos Mendoza',
    role: 'CEO & Founder',
    description: 'Visionario tecnológico con 15+ años en infraestructura cloud',
    image: '/team/carlos-mendoza.jpg',
  },
  {
    name: 'Ana López',
    role: 'CTO',
    description: 'Experta en arquitectura de sistemas y seguridad corporativa',
    image: '/team/ana-lopez.jpg',
  },
  {
    name: 'Roberto Silva',
    role: 'Head of Operations',
    description: 'Especialista en centros de datos y operaciones 24/7',
    image: '/team/roberto-silva.jpg',
  },
  {
    name: 'María González',
    role: 'Customer Success',
    description: 'Líder en experiencia del cliente y satisfacción',
    image: '/team/maria-gonzalez.jpg',
  },
];

const offices = [
  {
    city: 'Ciudad de México',
    address: 'Av. Insurgentes Sur 1234, Col. Del Valle',
    type: 'Oficina Principal',
    employees: 45,
  },
  {
    city: 'Guadalajara',
    address: 'Av. López Mateos 567, Zona Minerva',
    type: 'Centro de Operaciones',
    employees: 28,
  },
  {
    city: 'Monterrey',
    address: 'Av. Constitución 890, Centro',
    type: 'Oficina Regional',
    employees: 15,
  },
];

export default function AcercaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Más que Hosting,<br />
              <span className="text-yellow-300">Somos tu Socio Digital</span>
            </h1>
            <p className="text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Durante más de 10 años, hemos impulsado el crecimiento digital de empresas mexicanas 
              y latinoamericanas con tecnología de vanguardia y soporte humano excepcional.
            </p>
            <Button size="xl" variant="secondary" asChild>
              <Link href="#historia">
                Conoce Nuestra Historia
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <section className="mb-20">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-secondary-900 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-secondary-600">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Nuestra Misión y Visión
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Creemos en el poder de la tecnología para transformar negocios y vidas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center">
                    <GlobeAltIcon className="h-6 w-6 text-white" />
                  </div>
                  Misión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary-600 leading-relaxed">
                  Democratizar el acceso a tecnología de hosting premium para empresas mexicanas 
                  y latinoamericanas, proporcionando infraestructura confiable, soporte excepcional 
                  y soluciones innovadoras que impulsen su crecimiento digital.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-xl flex items-center justify-center">
                    <TrophyIcon className="h-6 w-6 text-white" />
                  </div>
                  Visión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary-600 leading-relaxed">
                  Ser reconocidos como la plataforma de hosting más confiable y innovadora 
                  de Latinoamérica, siendo el socio estratégico preferido para la transformación 
                  digital de empresas de todos los tamaños.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-secondary-600">
              Los principios que guían cada decisión que tomamos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-secondary-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section id="historia" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Nuestra Historia
            </h2>
            <p className="text-lg text-secondary-600">
              Un viaje de crecimiento, innovación y compromiso
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                    {item.year}
                  </div>
                </div>
                <Card className="flex-1 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-secondary-900">
                        {item.title}
                      </h3>
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                        {item.milestone}
                      </span>
                    </div>
                    <p className="text-secondary-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Nuestro Equipo Directivo
            </h2>
            <p className="text-lg text-secondary-600">
              Los líderes que impulsan nuestra visión
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                    <UserGroupIcon className="h-10 w-10 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary-900 mb-1">
                    {member.name}
                  </h3>
                  <div className="text-primary-600 font-medium text-sm mb-3">
                    {member.role}
                  </div>
                  <p className="text-secondary-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Offices */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Nuestras Oficinas
            </h2>
            <p className="text-lg text-secondary-600">
              Presencia física para estar cerca de ti
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-secondary-900">
                      {office.city}
                    </h3>
                    <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium">
                      {office.employees} empleados
                    </span>
                  </div>
                  <div className="text-sm text-secondary-600 mb-2">
                    {office.type}
                  </div>
                  <div className="text-secondary-700">
                    {office.address}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                ¿Quieres Ser Parte de Nuestra Historia?
              </h2>
              <p className="text-lg text-primary-700 mb-8 max-w-2xl mx-auto">
                Únete a más de 50,000 empresas que han confiado en nosotros para 
                impulsar su crecimiento digital. Tu éxito es nuestro éxito.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/empezar">
                    Empezar Ahora
                  </Link>
                </Button>
                
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contacto">
                    Hablar con Expertos
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-8 mt-8 text-sm text-primary-600">
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="h-4 w-4" />
                  <span>10+ años de confianza</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserGroupIcon className="h-4 w-4" />
                  <span>50,000+ clientes</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartIcon className="h-4 w-4" />
                  <span>Soporte humano 24/7</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}