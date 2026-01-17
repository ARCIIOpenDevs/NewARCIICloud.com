'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  CpuChipIcon,
  CircleStackIcon,
  ServerIcon,
  GlobeAltIcon,
  BoltIcon,
  ChartBarIcon,
  CloudIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/solid';
import { cn, formatCurrency } from '@/lib/utils';

interface ServerConfig {
  type: 'vps' | 'dedicated' | 'cloud';
  cpu: number;
  memory: number;
  storage: number;
  storageType: 'ssd' | 'nvme' | 'hdd';
  region: string;
  os: string;
  bandwidth: number;
  backups: boolean;
  monitoring: boolean;
  ssl: boolean;
  ddosProtection: boolean;
}

const serverTypes = [
  {
    id: 'vps',
    name: 'VPS Cloud',
    icon: CloudIcon,
    description: 'Servidor virtual escalable',
    basePrice: 899,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'dedicated',
    name: 'Servidor Dedicado',
    icon: ServerIcon,
    description: 'Hardware dedicado completo',
    basePrice: 4999,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'cloud',
    name: 'Cloud Instance',
    icon: BoltIcon,
    description: 'Instancia cloud auto-escalable',
    basePrice: 1299,
    gradient: 'from-green-500 to-emerald-500'
  }
];

const regions = [
  { id: 'mx-central-1', name: 'México Central', latency: '8ms', multiplier: 1.0 },
  { id: 'us-east-1', name: 'US East', latency: '45ms', multiplier: 1.1 },
  { id: 'us-west-1', name: 'US West', latency: '65ms', multiplier: 1.1 },
  { id: 'eu-central-1', name: 'Europa Central', latency: '180ms', multiplier: 1.2 },
  { id: 'ap-southeast-1', name: 'Asia Pacífico', latency: '220ms', multiplier: 1.3 }
];

const operatingSystems = [
  { id: 'ubuntu-22.04', name: 'Ubuntu 22.04 LTS', icon: '🐧', free: true },
  { id: 'ubuntu-20.04', name: 'Ubuntu 20.04 LTS', icon: '🐧', free: true },
  { id: 'centos-9', name: 'CentOS 9 Stream', icon: '🔴', free: true },
  { id: 'debian-12', name: 'Debian 12', icon: '🌀', free: true },
  { id: 'rocky-9', name: 'Rocky Linux 9', icon: '🏔️', free: true },
  { id: 'windows-2022', name: 'Windows Server 2022', icon: '🪟', free: false, price: 2000 },
  { id: 'windows-2019', name: 'Windows Server 2019', icon: '🪟', free: false, price: 1500 }
];

export function ServerConfigurator() {
  const [config, setConfig] = useState<ServerConfig>({
    type: 'vps',
    cpu: 2,
    memory: 4,
    storage: 50,
    storageType: 'ssd',
    region: 'mx-central-1',
    os: 'ubuntu-22.04',
    bandwidth: 1000,
    backups: true,
    monitoring: true,
    ssl: true,
    ddosProtection: false
  });

  const [monthlyPrice, setMonthlyPrice] = useState(0);
  const [yearlyPrice, setYearlyPrice] = useState(0);

  useEffect(() => {
    calculatePricing();
  }, [config]);

  const calculatePricing = () => {
    const serverType = serverTypes.find(t => t.id === config.type);
    if (!serverType) return;

    let basePrice = serverType.basePrice;
    
    // CPU pricing
    if (config.cpu > 2) {
      basePrice += (config.cpu - 2) * 400;
    }
    
    // Memory pricing
    if (config.memory > 4) {
      basePrice += (config.memory - 4) * 150;
    }
    
    // Storage pricing
    let storagePrice = 0;
    if (config.storage > 50) {
      const extraStorage = config.storage - 50;
      switch (config.storageType) {
        case 'hdd':
          storagePrice = extraStorage * 2;
          break;
        case 'ssd':
          storagePrice = extraStorage * 5;
          break;
        case 'nvme':
          storagePrice = extraStorage * 8;
          break;
      }
    }
    
    // Storage type base multiplier
    switch (config.storageType) {
      case 'nvme':
        basePrice *= 1.3;
        break;
      case 'ssd':
        basePrice *= 1.1;
        break;
      case 'hdd':
        basePrice *= 0.8;
        break;
    }
    
    // Region multiplier
    const region = regions.find(r => r.id === config.region);
    if (region) {
      basePrice *= region.multiplier;
    }
    
    // OS licensing
    const os = operatingSystems.find(o => o.id === config.os);
    if (os && !os.free) {
      basePrice += os.price || 0;
    }
    
    // Add-ons
    let addOnsPrice = 0;
    if (config.backups) addOnsPrice += 299;
    if (config.monitoring) addOnsPrice += 199;
    if (config.ssl) addOnsPrice += 99;
    if (config.ddosProtection) addOnsPrice += 599;
    
    const totalMonthly = Math.round(basePrice + storagePrice + addOnsPrice);
    const totalYearly = Math.round(totalMonthly * 12 * 0.85); // 15% discount
    
    setMonthlyPrice(totalMonthly);
    setYearlyPrice(totalYearly);
  };

  const selectedServerType = serverTypes.find(t => t.id === config.type);
  const selectedRegion = regions.find(r => r.id === config.region);
  const selectedOS = operatingSystems.find(o => o.id === config.os);

  const getPerformanceScore = () => {
    let score = 0;
    score += config.cpu * 25;
    score += config.memory * 12;
    score += config.storageType === 'nvme' ? 30 : config.storageType === 'ssd' ? 20 : 10;
    return Math.min(score, 1000);
  };

  const getRecommendation = () => {
    const score = getPerformanceScore();
    if (score < 200) return { text: 'Básico - Para sitios web simples', color: 'text-secondary-500' };
    if (score < 400) return { text: 'Estándar - Para aplicaciones web', color: 'text-primary-500' };
    if (score < 700) return { text: 'Alto rendimiento - Para e-commerce', color: 'text-success-500' };
    return { text: 'Enterprise - Para aplicaciones críticas', color: 'text-accent-500' };
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
            Configurador de Servidores
          </h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Diseña tu servidor ideal con especificaciones exactas para tus necesidades
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Server Type Selection */}
            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold text-secondary-900">Tipo de Servidor</h3>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {serverTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setConfig(prev => ({ ...prev, type: type.id as any }))}
                      className={cn(
                        'p-4 rounded-lg border-2 transition-all text-left',
                        config.type === type.id
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-secondary-200 hover:border-secondary-300'
                      )}
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${type.gradient} flex items-center justify-center mb-3`}>
                        <type.icon className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="font-semibold text-secondary-900 mb-1">{type.name}</h4>
                      <p className="text-sm text-secondary-600 mb-2">{type.description}</p>
                      <p className="text-sm font-medium text-primary-600">
                        Desde {formatCurrency(type.basePrice)}/mes
                      </p>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Hardware Configuration */}
            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold text-secondary-900">Configuración de Hardware</h3>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* CPU */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CpuChipIcon className="h-5 w-5 text-primary-500" />
                    <label className="font-medium text-secondary-900">
                      CPU Cores: {config.cpu} {config.cpu > 1 ? 'cores' : 'core'}
                    </label>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max={config.type === 'dedicated' ? 32 : 16}
                    value={config.cpu}
                    onChange={(e) => setConfig(prev => ({ ...prev, cpu: parseInt(e.target.value) }))}
                    className="w-full h-2 bg-secondary-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-secondary-500 mt-1">
                    <span>1 core</span>
                    <span>{config.type === 'dedicated' ? '32' : '16'} cores</span>
                  </div>
                </div>

                {/* Memory */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CircleStackIcon className="h-5 w-5 text-success-500" />
                    <label className="font-medium text-secondary-900">
                      RAM: {config.memory} GB
                    </label>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max={config.type === 'dedicated' ? 128 : 64}
                    value={config.memory}
                    onChange={(e) => setConfig(prev => ({ ...prev, memory: parseInt(e.target.value) }))}
                    className="w-full h-2 bg-secondary-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-secondary-500 mt-1">
                    <span>1 GB</span>
                    <span>{config.type === 'dedicated' ? '128' : '64'} GB</span>
                  </div>
                </div>

                {/* Storage */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <ServerIcon className="h-5 w-5 text-purple-500" />
                    <label className="font-medium text-secondary-900">
                      Almacenamiento: {config.storage} GB
                    </label>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max={config.type === 'dedicated' ? 2000 : 1000}
                    step="10"
                    value={config.storage}
                    onChange={(e) => setConfig(prev => ({ ...prev, storage: parseInt(e.target.value) }))}
                    className="w-full h-2 bg-secondary-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-secondary-500 mt-1">
                    <span>10 GB</span>
                    <span>{config.type === 'dedicated' ? '2000' : '1000'} GB</span>
                  </div>
                  
                  {/* Storage Type */}
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    {['hdd', 'ssd', 'nvme'].map((type) => (
                      <button
                        key={type}
                        onClick={() => setConfig(prev => ({ ...prev, storageType: type as any }))}
                        className={cn(
                          'px-3 py-2 rounded-lg text-sm font-medium transition-all',
                          config.storageType === type
                            ? 'bg-primary-500 text-white'
                            : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                        )}
                      >
                        {type.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Region & OS */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-bold text-secondary-900">Región</h3>
                </CardHeader>
                <CardContent>
                  <select
                    value={config.region}
                    onChange={(e) => setConfig(prev => ({ ...prev, region: e.target.value }))}
                    className="w-full p-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {regions.map((region) => (
                      <option key={region.id} value={region.id}>
                        {region.name} ({region.latency})
                      </option>
                    ))}
                  </select>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="text-lg font-bold text-secondary-900">Sistema Operativo</h3>
                </CardHeader>
                <CardContent>
                  <select
                    value={config.os}
                    onChange={(e) => setConfig(prev => ({ ...prev, os: e.target.value }))}
                    className="w-full p-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {operatingSystems.map((os) => (
                      <option key={os.id} value={os.id}>
                        {os.icon} {os.name} {!os.free ? `(+${formatCurrency(os.price || 0)}/mes)` : ''}
                      </option>
                    ))}
                  </select>
                </CardContent>
              </Card>
            </div>

            {/* Add-ons */}
            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold text-secondary-900">Servicios Adicionales</h3>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-secondary-200 cursor-pointer hover:bg-secondary-50">
                    <input
                      type="checkbox"
                      checked={config.backups}
                      onChange={(e) => setConfig(prev => ({ ...prev, backups: e.target.checked }))}
                      className="w-4 h-4 text-primary-600"
                    />
                    <div>
                      <div className="font-medium text-secondary-900">Backups Automáticos</div>
                      <div className="text-sm text-secondary-600">+$299/mes</div>
                    </div>
                  </label>
                  
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-secondary-200 cursor-pointer hover:bg-secondary-50">
                    <input
                      type="checkbox"
                      checked={config.monitoring}
                      onChange={(e) => setConfig(prev => ({ ...prev, monitoring: e.target.checked }))}
                      className="w-4 h-4 text-primary-600"
                    />
                    <div>
                      <div className="font-medium text-secondary-900">Monitoreo 24/7</div>
                      <div className="text-sm text-secondary-600">+$199/mes</div>
                    </div>
                  </label>
                  
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-secondary-200 cursor-pointer hover:bg-secondary-50">
                    <input
                      type="checkbox"
                      checked={config.ssl}
                      onChange={(e) => setConfig(prev => ({ ...prev, ssl: e.target.checked }))}
                      className="w-4 h-4 text-primary-600"
                    />
                    <div>
                      <div className="font-medium text-secondary-900">SSL Certificado</div>
                      <div className="text-sm text-secondary-600">+$99/mes</div>
                    </div>
                  </label>
                  
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-secondary-200 cursor-pointer hover:bg-secondary-50">
                    <input
                      type="checkbox"
                      checked={config.ddosProtection}
                      onChange={(e) => setConfig(prev => ({ ...prev, ddosProtection: e.target.checked }))}
                      className="w-4 h-4 text-primary-600"
                    />
                    <div>
                      <div className="font-medium text-secondary-900">Protección DDoS</div>
                      <div className="text-sm text-secondary-600">+$599/mes</div>
                    </div>
                  </label>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Summary Panel */}
          <div className="space-y-6">
            {/* Price Summary */}
            <Card className="sticky top-6">
              <CardHeader>
                <h3 className="text-xl font-bold text-secondary-900">Resumen de Configuración</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Server Type */}
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${selectedServerType?.gradient} flex items-center justify-center`}>
                    {selectedServerType && <selectedServerType.icon className="h-4 w-4 text-white" />}
                  </div>
                  <div>
                    <div className="font-medium text-secondary-900">{selectedServerType?.name}</div>
                    <div className="text-sm text-secondary-600">{selectedOS?.name}</div>
                  </div>
                </div>

                {/* Specs */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-secondary-600">CPU:</span>
                    <span className="font-medium">{config.cpu} cores</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-600">RAM:</span>
                    <span className="font-medium">{config.memory} GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-600">Storage:</span>
                    <span className="font-medium">{config.storage} GB {config.storageType.toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-600">Región:</span>
                    <span className="font-medium">{selectedRegion?.name}</span>
                  </div>
                </div>

                {/* Performance Score */}
                <div className="bg-secondary-50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-secondary-900">Performance Score</span>
                    <ChartBarIcon className="h-4 w-4 text-primary-500" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-secondary-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(getPerformanceScore() / 1000) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-bold text-secondary-900">{getPerformanceScore()}</span>
                  </div>
                  <div className={`text-xs mt-1 ${getRecommendation().color}`}>
                    {getRecommendation().text}
                  </div>
                </div>

                {/* Pricing */}
                <div className="border-t pt-4">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-primary-600 mb-1">
                      {formatCurrency(monthlyPrice)}
                    </div>
                    <div className="text-secondary-600">por mes</div>
                  </div>
                  
                  <div className="bg-success-50 rounded-lg p-3 mb-4">
                    <div className="text-sm font-medium text-success-800 mb-1">
                      Pago Anual - Ahorra 15%
                    </div>
                    <div className="text-lg font-bold text-success-600">
                      {formatCurrency(yearlyPrice)} /año
                    </div>
                    <div className="text-xs text-success-700">
                      = {formatCurrency(Math.round(yearlyPrice / 12))}/mes
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button variant="gradient" className="w-full" size="lg">
                      Configurar Servidor
                    </Button>
                    <Button variant="outline" className="w-full">
                      Obtener Cotización
                    </Button>
                  </div>

                  <div className="text-center mt-4">
                    <p className="text-xs text-secondary-500">
                      Configuración y soporte incluidos<br />
                      Setup en menos de 10 minutos
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </section>
  );
}