'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts';
import { 
  TrendingUp,
  TrendingDown,
  Target,
  AlertTriangle,
  Calendar,
  DollarSign,
  Users,
  Percent,
  RefreshCw,
  Settings,
  Download,
  Lightbulb
} from 'lucide-react';
import { RevenueForecasting } from '@/types/analytics';
import { format, addMonths, addQuarters } from 'date-fns';

interface ForecastingScenario {
  id: string;
  name: string;
  description: string;
  impact: number;
  probability: number;
  color: string;
}

const DEFAULT_SCENARIOS: ForecastingScenario[] = [
  {
    id: 'optimistic',
    name: 'Escenario Optimista',
    description: 'Crecimiento acelerado con nuevas adquisiciones',
    impact: 25,
    probability: 30,
    color: '#10b981'
  },
  {
    id: 'realistic',
    name: 'Escenario Realista',
    description: 'Crecimiento esperado basado en tendencias actuales',
    impact: 0,
    probability: 60,
    color: '#3b82f6'
  },
  {
    id: 'pessimistic',
    name: 'Escenario Pesimista',
    description: 'Desaceleración económica y mayor churn',
    impact: -15,
    probability: 10,
    color: '#ef4444'
  }
];

interface ForecastConfigProps {
  config: any;
  onChange: (config: any) => void;
}

const ForecastConfig: React.FC<ForecastConfigProps> = ({ config, onChange }) => {
  const updateAssumption = (key: string, value: number) => {
    onChange({
      ...config,
      assumptions: {
        ...config.assumptions,
        [key]: value
      }
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Settings className="h-5 w-5" />
          <span>Configuración del Pronóstico</span>
        </CardTitle>
        <CardDescription>
          Ajusta los parámetros para generar pronósticos más precisos
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div>
              <Label>Horizonte de Pronóstico</Label>
              <Select 
                value={config.horizon} 
                onValueChange={(value) => onChange({ ...config, horizon: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="quarterly">Trimestral (12 meses)</SelectItem>
                  <SelectItem value="yearly">Anual (24 meses)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Modelo de Predicción</Label>
              <Select 
                value={config.model} 
                onValueChange={(value) => onChange({ ...config, model: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="linear">Lineal</SelectItem>
                  <SelectItem value="seasonal">Estacional</SelectItem>
                  <SelectItem value="growth">Crecimiento</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label>Tasa de Crecimiento Anual (%)</Label>
              <div className="flex items-center space-x-4 mt-2">
                <Slider
                  value={[config.assumptions.growthRate]}
                  onValueChange={([value]) => updateAssumption('growthRate', value)}
                  max={50}
                  min={-20}
                  step={1}
                  className="flex-1"
                />
                <div className="w-16 text-center font-medium">
                  {config.assumptions.growthRate}%
                </div>
              </div>
            </div>

            <div>
              <Label>Tasa de Churn Mensual (%)</Label>
              <div className="flex items-center space-x-4 mt-2">
                <Slider
                  value={[config.assumptions.churnRate]}
                  onValueChange={([value]) => updateAssumption('churnRate', value)}
                  max={10}
                  min={0}
                  step={0.1}
                  className="flex-1"
                />
                <div className="w-16 text-center font-medium">
                  {config.assumptions.churnRate}%
                </div>
              </div>
            </div>

            <div>
              <Label>Tasa de Expansión (%)</Label>
              <div className="flex items-center space-x-4 mt-2">
                <Slider
                  value={[config.assumptions.expansionRate]}
                  onValueChange={([value]) => updateAssumption('expansionRate', value)}
                  max={30}
                  min={0}
                  step={1}
                  className="flex-1"
                />
                <div className="w-16 text-center font-medium">
                  {config.assumptions.expansionRate}%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scenarios */}
        <div className="space-y-3">
          <Label>Escenarios de Análisis</Label>
          <div className="space-y-2">
            {DEFAULT_SCENARIOS.map(scenario => (
              <div 
                key={scenario.id} 
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: scenario.color }}
                    />
                    <div>
                      <p className="font-medium text-sm">{scenario.name}</p>
                      <p className="text-xs text-gray-500">{scenario.description}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="text-center">
                    <p className="font-medium">{scenario.impact > 0 ? '+' : ''}{scenario.impact}%</p>
                    <p className="text-gray-500 text-xs">Impacto</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium">{scenario.probability}%</p>
                    <p className="text-gray-500 text-xs">Probabilidad</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface ForecastResultsProps {
  forecast: RevenueForecasting;
  currentRevenue: number;
}

const ForecastResults: React.FC<ForecastResultsProps> = ({ forecast, currentRevenue }) => {
  // Generar datos para la gráfica
  const chartData = forecast.forecast.map((item, index) => {
    const scenarios = DEFAULT_SCENARIOS.reduce((acc, scenario) => {
      const scenarioValue = item.predictedRevenue * (1 + (scenario.impact / 100));
      acc[scenario.id] = scenarioValue;
      return acc;
    }, {} as any);

    return {
      period: item.period,
      predicted: item.predictedRevenue,
      low: item.confidenceInterval.low,
      high: item.confidenceInterval.high,
      ...scenarios
    };
  });

  // Agregar punto actual
  const dataWithCurrent = [
    {
      period: 'Actual',
      predicted: currentRevenue,
      low: currentRevenue,
      high: currentRevenue,
      optimistic: currentRevenue,
      realistic: currentRevenue,
      pessimistic: currentRevenue
    },
    ...chartData
  ];

  const totalGrowth = forecast.forecast.length > 0 
    ? ((forecast.forecast[forecast.forecast.length - 1].predictedRevenue - currentRevenue) / currentRevenue) * 100
    : 0;

  const avgMonthlyGrowth = totalGrowth / forecast.forecast.length;

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Revenue Actual</p>
                <p className="text-2xl font-bold">${currentRevenue.toLocaleString()}</p>
              </div>
              <DollarSign className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Proyección 12M</p>
                <p className="text-2xl font-bold">
                  ${forecast.forecast[forecast.forecast.length - 1]?.predictedRevenue.toLocaleString()}
                </p>
                <div className="flex items-center space-x-1 mt-1">
                  {totalGrowth >= 0 ? (
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-500" />
                  )}
                  <span className={`text-sm ${totalGrowth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {totalGrowth.toFixed(1)}%
                  </span>
                </div>
              </div>
              <Target className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Crecimiento Mensual</p>
                <p className="text-2xl font-bold">{avgMonthlyGrowth.toFixed(1)}%</p>
                <p className="text-xs text-gray-500 mt-1">Promedio proyectado</p>
              </div>
              <Percent className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Confianza</p>
                <p className="text-2xl font-bold">85%</p>
                <p className="text-xs text-gray-500 mt-1">Modelo {forecast.model}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Forecast Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Pronóstico de Revenue - Múltiples Escenarios</CardTitle>
          <CardDescription>
            Proyecciones basadas en {forecast.model} con intervalos de confianza
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dataWithCurrent}>
                <defs>
                  <linearGradient id="confidenceGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="period" />
                <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <Tooltip 
                  formatter={(value, name) => [`$${Number(value).toLocaleString()}`, name]}
                  labelFormatter={(label) => `Período: ${label}`}
                />
                
                {/* Confidence Interval */}
                <Area
                  type="monotone"
                  dataKey="high"
                  stroke="none"
                  fill="url(#confidenceGradient)"
                />
                <Area
                  type="monotone"
                  dataKey="low"
                  stroke="none"
                  fill="white"
                />

                {/* Scenario Lines */}
                <Line 
                  type="monotone" 
                  dataKey="optimistic" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Optimista"
                />
                <Line 
                  type="monotone" 
                  dataKey="realistic" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  name="Realista"
                />
                <Line 
                  type="monotone" 
                  dataKey="pessimistic" 
                  stroke="#ef4444" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Pesimista"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center space-x-6 mt-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-2 bg-blue-500 rounded"></div>
              <span>Pronóstico Base</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-1 bg-blue-200 rounded"></div>
              <span>Intervalo de Confianza</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-1 bg-green-500 rounded border-dashed border-green-500" style={{ borderStyle: 'dashed' }}></div>
              <span>Escenario Optimista</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-1 bg-red-500 rounded border-dashed border-red-500" style={{ borderStyle: 'dashed' }}></div>
              <span>Escenario Pesimista</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Assumptions */}
      <Card>
        <CardHeader>
          <CardTitle>Supuestos del Modelo</CardTitle>
          <CardDescription>
            Factores clave utilizados en el pronóstico
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">Crecimiento Anual</p>
                <p className="text-sm text-gray-600">Tasa base de crecimiento</p>
              </div>
              <Badge variant="outline" className="text-green-600">
                +{forecast.assumptions.growthRate}%
              </Badge>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">Churn Rate</p>
                <p className="text-sm text-gray-600">Pérdida mensual de clientes</p>
              </div>
              <Badge variant="outline" className="text-red-600">
                {forecast.assumptions.churnRate}%
              </Badge>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">Expansión</p>
                <p className="text-sm text-gray-600">Upsell de clientes existentes</p>
              </div>
              <Badge variant="outline" className="text-blue-600">
                +{forecast.assumptions.expansionRate}%
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default function ForecastingPage() {
  const [loading, setLoading] = useState(false);
  const [forecast, setForecast] = useState<RevenueForecasting | null>(null);
  const [config, setConfig] = useState({
    horizon: 'yearly' as 'quarterly' | 'yearly',
    model: 'seasonal' as 'linear' | 'seasonal' | 'growth',
    assumptions: {
      growthRate: 20,
      churnRate: 2.5,
      expansionRate: 15,
      seasonalityFactor: 1.1
    }
  });

  const currentRevenue = 125000; // Mock current revenue

  const generateForecast = async () => {
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Generate mock forecast data
    const periods = config.horizon === 'quarterly' ? 4 : 12;
    const forecastData: RevenueForecasting = {
      horizon: config.horizon,
      model: config.model,
      forecast: Array.from({ length: periods }, (_, index) => {
        const baseGrowth = (config.assumptions.growthRate / 100) / (config.horizon === 'quarterly' ? 4 : 12);
        const churnImpact = -(config.assumptions.churnRate / 100);
        const expansionImpact = (config.assumptions.expansionRate / 100) / 12;
        
        const monthlyGrowth = baseGrowth + churnImpact + expansionImpact;
        const predictedRevenue = currentRevenue * Math.pow(1 + monthlyGrowth, index + 1);
        
        return {
          period: config.horizon === 'quarterly' 
            ? `Q${Math.floor(index / 3) + 1} ${new Date().getFullYear() + Math.floor(index / 4)}`
            : format(addMonths(new Date(), index + 1), 'MMM yyyy'),
          predictedRevenue: Math.round(predictedRevenue),
          confidenceInterval: {
            low: Math.round(predictedRevenue * 0.85),
            high: Math.round(predictedRevenue * 1.15)
          },
          factors: ['historical_trend', 'seasonal_adjustment', 'market_conditions']
        };
      }),
      assumptions: config.assumptions,
      scenarios: DEFAULT_SCENARIOS.map(scenario => ({
        name: scenario.name,
        description: scenario.description,
        impact: scenario.impact,
        probability: scenario.probability / 100
      }))
    };

    setForecast(forecastData);
    setLoading(false);
  };

  useEffect(() => {
    generateForecast();
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Forecasting de Revenue</h1>
          <p className="text-muted-foreground">
            Pronósticos inteligentes basados en datos históricos y tendencias del mercado
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button 
            onClick={generateForecast} 
            variant="outline" 
            disabled={loading}
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            {loading ? 'Generando...' : 'Regenerar'}
          </Button>
          
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Info Card */}
      <Card className="border-blue-200 bg-blue-50">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-blue-900">¿Cómo funciona el forecasting?</p>
              <p className="text-blue-700 mt-1">
                Nuestro sistema analiza patrones históricos, estacionalidad, y factores del mercado para 
                generar proyecciones de revenue con múltiples escenarios y intervalos de confianza.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Configuration */}
      <ForecastConfig 
        config={config} 
        onChange={setConfig}
      />

      {/* Results */}
      {forecast && !loading && (
        <ForecastResults 
          forecast={forecast} 
          currentRevenue={currentRevenue}
        />
      )}

      {loading && (
        <Card>
          <CardContent className="flex items-center justify-center h-64">
            <div className="text-center">
              <RefreshCw className="h-12 w-12 mx-auto mb-4 animate-spin text-blue-500" />
              <p className="text-lg font-medium">Generando pronósticos...</p>
              <p className="text-sm text-gray-500">Analizando datos históricos y tendencias</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}