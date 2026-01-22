'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Users, 
  Server, 
  FileText,
  Headphones,
  BarChart3,
  Settings,
  ChevronDown,
  Building,
  CreditCard,
  TrendingUp,
  PieChart,
  LineChart,
  FileBarChart,
  Target,
  Bot,
  Zap,
  AlertTriangle,
  Workflow,
  Brain,
  MessageSquare,
  Mail
} from 'lucide-react';

interface NavigationItem {
  title: string;
  href?: string;
  icon: React.ReactNode;
  badge?: string;
  children?: NavigationItem[];
}

const navigation: NavigationItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <LayoutDashboard className="h-5 w-5" />
  },
  {
    title: 'Clientes',
    href: '/dashboard/clientes',
    icon: <Users className="h-5 w-5" />
  },
  {
    title: 'Servicios',
    href: '/dashboard/servicios',
    icon: <Server className="h-5 w-5" />
  },
  {
    title: 'Facturación',
    href: '/dashboard/facturacion',
    icon: <CreditCard className="h-5 w-5" />,
    badge: 'MX'
  },
  {
    title: 'Soporte',
    href: '/dashboard/soporte',
    icon: <Headphones className="h-5 w-5" />
  },
  {
    title: 'CMS',
    icon: <FileText className="h-5 w-5" />,
    children: [
      {
        title: 'Dashboard',
        href: '/dashboard/cms',
        icon: <LayoutDashboard className="h-4 w-4" />
      },
      {
        title: 'Páginas',
        href: '/dashboard/cms/pages',
        icon: <FileText className="h-4 w-4" />
      },
      {
        title: 'Blog',
        href: '/dashboard/cms/blog',
        icon: <FileBarChart className="h-4 w-4" />
      },
      {
        title: 'Testimonios',
        href: '/dashboard/cms/testimonios',
        icon: <Target className="h-4 w-4" />
      }
    ]
  },
  {
    title: 'Analytics',
    icon: <BarChart3 className="h-5 w-5" />,
    badge: 'NEW',
    children: [
      {
        title: 'Dashboard Ejecutivo',
        href: '/dashboard/analytics/ejecutivo',
        icon: <TrendingUp className="h-4 w-4" />
      },
      {
        title: 'Análisis de Cohortes',
        href: '/dashboard/analytics/cohortes',
        icon: <PieChart className="h-4 w-4" />
      },
      {
        title: 'Reportes Avanzados',
        href: '/dashboard/analytics/reportes',
        icon: <LineChart className="h-4 w-4" />
      },
      {
        title: 'Forecasting',
        href: '/dashboard/analytics/forecasting',
        icon: <TrendingUp className="h-4 w-4" />
      }
    ]
  },
  {
    title: 'Automatización',
    icon: <Bot className="h-5 w-5" />,
    badge: 'IA',
    children: [
      {
        title: 'Centro de Automatización',
        href: '/dashboard/automation',
        icon: <Zap className="h-4 w-4" />
      },
      {
        title: 'Alertas Inteligentes',
        href: '/dashboard/automation/alertas',
        icon: <AlertTriangle className="h-4 w-4" />
      },
      {
        title: 'Workflows',
        href: '/dashboard/automation/workflows',
        icon: <Workflow className="h-4 w-4" />
      },
      {
        title: 'Predicción de Churn',
        href: '/dashboard/automation/churn-prediction',
        icon: <Brain className="h-4 w-4" />
      },
      {
        title: 'Respuestas Automáticas',
        href: '/dashboard/automation/auto-respuestas',
        icon: <MessageSquare className="h-4 w-4" />
      },
      {
        title: 'Email Sequences',
        href: '/dashboard/automation/email-sequences',
        icon: <Mail className="h-4 w-4" />
      }
    ]
  },
  {
    title: 'Configuración',
    href: '/dashboard/configuracion',
    icon: <Settings className="h-5 w-5" />
  }
];

interface SidebarProps {
  className?: string;
}

function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>(['Analytics', 'CMS']);

  const toggleExpanded = (title: string) => {
    setExpandedItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === '/dashboard';
    }
    return pathname.startsWith(href);
  };

  const renderNavigationItem = (item: NavigationItem, depth = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.title);
    const active = item.href ? isActive(item.href) : false;

    return (
      <div key={item.title}>
        {hasChildren ? (
          <button
            onClick={() => toggleExpanded(item.title)}
            className={cn(
              "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors",
              depth > 0 ? "ml-4" : "",
              active ? "bg-primary-100 text-primary-700" : "text-gray-700 hover:bg-gray-100"
            )}
          >
            <div className="flex items-center space-x-3">
              {item.icon}
              <span>{item.title}</span>
              {item.badge && (
                <span className={cn(
                  "px-2 py-0.5 rounded text-xs font-semibold",
                  item.badge === 'NEW' ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                )}>
                  {item.badge}
                </span>
              )}
            </div>
            <ChevronDown className={cn(
              "h-4 w-4 transition-transform",
              isExpanded ? "rotate-180" : ""
            )} />
          </button>
        ) : (
          <Link
            href={item.href || '#'}
            className={cn(
              "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
              depth > 0 ? "ml-4" : "",
              active ? "bg-primary-100 text-primary-700" : "text-gray-700 hover:bg-gray-100"
            )}
          >
            {item.icon}
            <span>{item.title}</span>
            {item.badge && (
              <span className={cn(
                "px-2 py-0.5 rounded text-xs font-semibold",
                item.badge === 'NEW' ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
              )}>
                {item.badge}
              </span>
            )}
          </Link>
        )}

        {/* Render children if expanded */}
        {hasChildren && isExpanded && (
          <div className="mt-1 space-y-1">
            {item.children?.map(child => renderNavigationItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={cn("bg-white border-r border-gray-200 px-4 py-6", className)}>
      {/* Logo */}
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
          <Building className="h-5 w-5 text-white" />
        </div>
        <div>
          <h2 className="font-bold text-gray-900">ARCIICloud</h2>
          <p className="text-xs text-gray-500">Admin Panel</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {navigation.map(item => renderNavigationItem(item))}
      </nav>
    </div>
  );
}

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">
                Panel de Administración
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Sistema operativo</span>
              </div>
              
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">A</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <div className="flex-1 p-6">
          {children}
        </div>
      </div>
    </div>
  );
}