'use client';

import { useState, useEffect } from 'react';
import { useAutomation } from '@/hooks/useAutomation';
import { Lead, ScoringRule, LeadScoringAnalytics, LeadActivity } from '@/types/automation';
import { 
  Target, 
  TrendingUp, 
  Users, 
  Award,
  Filter,
  Plus,
  Search,
  Download,
  Mail,
  Phone,
  Calendar,
  Edit,
  Trash2,
  Eye,
  Star,
  Clock,
  CheckCircle,
  AlertCircle,
  Activity
} from 'lucide-react';

export default function LeadScoringPage() {
  const {
    getLeads,
    getScoringRules,
    createScoringRule,
    updateScoringRule,
    deleteScoringRule,
    getLeadScoringAnalytics,
    addLeadActivity,
    updateLead
  } = useAutomation();

  const [leads, setLeads] = useState<Lead[]>([]);
  const [scoringRules, setScoringRules] = useState<ScoringRule[]>([]);
  const [analytics, setAnalytics] = useState<LeadScoringAnalytics | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [showNewRule, setShowNewRule] = useState(false);
  const [showLeadDetails, setShowLeadDetails] = useState(false);
  const [activeTab, setActiveTab] = useState<'leads' | 'rules' | 'analytics'>('leads');
  const [filters, setFilters] = useState({
    status: '',
    grade: '',
    source: '',
    minScore: '',
    maxScore: ''
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [leadsData, rulesData, analyticsData] = await Promise.all([
        getLeads(),
        getScoringRules(),
        getLeadScoringAnalytics()
      ]);
      
      setLeads(leadsData);
      setScoringRules(rulesData);
      setAnalytics(analyticsData);
    } catch (error) {
      console.error('Error loading lead scoring data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const filteredLeads = leads.filter(lead => {
    if (filters.status && lead.status !== filters.status) return false;
    if (filters.grade && lead.grade !== filters.grade) return false;
    if (filters.source && lead.source !== filters.source) return false;
    if (filters.minScore && lead.score < parseInt(filters.minScore)) return false;
    if (filters.maxScore && lead.score > parseInt(filters.maxScore)) return false;
    return true;
  });

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'text-green-600 bg-green-100';
      case 'B': return 'text-blue-600 bg-blue-100';
      case 'C': return 'text-yellow-600 bg-yellow-100';
      case 'D': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'text-blue-600 bg-blue-100';
      case 'contacted': return 'text-orange-600 bg-orange-100';
      case 'qualified': return 'text-purple-600 bg-purple-100';
      case 'converted': return 'text-green-600 bg-green-100';
      case 'lost': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Lead Scoring</h1>
          <p className="text-gray-600 mt-1">
            Califica y gestiona tus leads automáticamente
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Download className="w-4 h-4" />
            Exportar
          </button>
          <button 
            onClick={() => setShowNewRule(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            Nueva Regla
          </button>
        </div>
      </div>

      {/* Analytics Overview */}
      {analytics && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Leads</p>
                <p className="text-2xl font-bold text-gray-900">{analytics.totalLeads}</p>
              </div>
              <Users className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Score Promedio</p>
                <p className="text-2xl font-bold text-gray-900">{analytics.averageScore}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Leads Grade A</p>
                <p className="text-2xl font-bold text-gray-900">{analytics.distributionByGrade.A || 0}</p>
              </div>
              <Award className="w-8 h-8 text-yellow-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Conv. Rate A</p>
                <p className="text-2xl font-bold text-gray-900">
                  {analytics.conversionRateByGrade.A?.toFixed(1) || 0}%
                </p>
              </div>
              <Target className="w-8 h-8 text-purple-600" />
            </div>
          </div>
        </div>
      )}

      {/* Insights */}
      {analytics?.insights && analytics.insights.length > 0 && (
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Insights Automáticos</h2>
          </div>
          <div className="p-6 space-y-4">
            {analytics.insights.map((insight) => (
              <div 
                key={insight.id}
                className={`p-4 rounded-lg border-l-4 ${
                  insight.severity === 'high' 
                    ? 'border-red-400 bg-red-50' 
                    : insight.severity === 'medium' 
                    ? 'border-yellow-400 bg-yellow-50'
                    : 'border-blue-400 bg-blue-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <AlertCircle className={`w-5 h-5 mt-0.5 ${
                    insight.severity === 'high' 
                      ? 'text-red-600' 
                      : insight.severity === 'medium' 
                      ? 'text-yellow-600'
                      : 'text-blue-600'
                  }`} />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{insight.title}</h3>
                    <p className="text-gray-600 mt-1">{insight.description}</p>
                    {insight.recommendedAction && (
                      <p className="text-sm text-gray-700 mt-2">
                        <span className="font-medium">Acción recomendada:</span> {insight.recommendedAction}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('leads')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'leads'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Leads ({filteredLeads.length})
          </button>
          <button
            onClick={() => setActiveTab('rules')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'rules'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Reglas ({scoringRules.length})
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'analytics'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Analytics
          </button>
        </nav>
      </div>

      {/* Leads Tab */}
      {activeTab === 'leads' && (
        <div className="space-y-6">
          {/* Filters */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-4 mb-4">
              <Filter className="w-5 h-5 text-gray-500" />
              <h3 className="font-medium text-gray-900">Filtros</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <select
                value={filters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Todos los estados</option>
                <option value="new">Nuevo</option>
                <option value="contacted">Contactado</option>
                <option value="qualified">Calificado</option>
                <option value="converted">Convertido</option>
                <option value="lost">Perdido</option>
              </select>

              <select
                value={filters.grade}
                onChange={(e) => handleFilterChange('grade', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Todos los grados</option>
                <option value="A">Grade A</option>
                <option value="B">Grade B</option>
                <option value="C">Grade C</option>
                <option value="D">Grade D</option>
              </select>

              <input
                type="text"
                placeholder="Fuente"
                value={filters.source}
                onChange={(e) => handleFilterChange('source', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              <input
                type="number"
                placeholder="Score mín."
                value={filters.minScore}
                onChange={(e) => handleFilterChange('minScore', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              <input
                type="number"
                placeholder="Score máx."
                value={filters.maxScore}
                onChange={(e) => handleFilterChange('maxScore', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Leads List */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Lead
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Score
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Grade
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Estado
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fuente
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Última actividad
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium">
                              {lead.firstName ? lead.firstName[0] : lead.email[0].toUpperCase()}
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {lead.firstName && lead.lastName 
                                ? `${lead.firstName} ${lead.lastName}` 
                                : lead.email}
                            </div>
                            <div className="text-sm text-gray-500">{lead.email}</div>
                            {lead.company && (
                              <div className="text-sm text-gray-500">{lead.company}</div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">{lead.score}</div>
                          <div className={`ml-2 w-16 bg-gray-200 rounded-full h-2`}>
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${Math.min(lead.score, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getGradeColor(lead.grade)}`}>
                          {lead.grade}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {lead.source}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {lead.lastActivityAt 
                          ? new Date(lead.lastActivityAt.toDate()).toLocaleDateString()
                          : 'Sin actividad'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => {
                              setSelectedLead(lead);
                              setShowLeadDetails(true);
                            }}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="text-blue-600 hover:text-blue-900">
                            <Mail className="w-4 h-4" />
                          </button>
                          <button className="text-gray-400 hover:text-gray-600">
                            <Edit className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Rules Tab */}
      {activeTab === 'rules' && (
        <ScoringRulesManager 
          rules={scoringRules}
          onRulesUpdate={loadData}
          showNewRule={showNewRule}
          setShowNewRule={setShowNewRule}
          createScoringRule={createScoringRule}
          updateScoringRule={updateScoringRule}
          deleteScoringRule={deleteScoringRule}
        />
      )}

      {/* Analytics Tab */}
      {activeTab === 'analytics' && analytics && (
        <AnalyticsDashboard analytics={analytics} />
      )}

      {/* Lead Details Modal */}
      {showLeadDetails && selectedLead && (
        <LeadDetailsModal
          lead={selectedLead}
          onClose={() => {
            setShowLeadDetails(false);
            setSelectedLead(null);
          }}
          onUpdate={loadData}
          addLeadActivity={addLeadActivity}
          updateLead={updateLead}
        />
      )}
    </div>
  );
}

// Componente para gestionar reglas de scoring
interface ScoringRulesManagerProps {
  rules: ScoringRule[];
  onRulesUpdate: () => void;
  showNewRule: boolean;
  setShowNewRule: (show: boolean) => void;
  createScoringRule: (rule: Omit<ScoringRule, 'id' | 'createdAt' | 'updatedAt'>) => Promise<string>;
  updateScoringRule: (id: string, updates: Partial<ScoringRule>) => Promise<void>;
  deleteScoringRule: (id: string) => Promise<void>;
}

function ScoringRulesManager({
  rules,
  onRulesUpdate,
  showNewRule,
  setShowNewRule,
  createScoringRule,
  updateScoringRule,
  deleteScoringRule
}: ScoringRulesManagerProps) {
  const [newRule, setNewRule] = useState({
    name: '',
    type: 'behavioral' as 'demographic' | 'behavioral' | 'engagement' | 'firmographic',
    condition: {
      field: '',
      operator: 'equals' as 'equals' | 'contains' | 'greater_than' | 'less_than' | 'in_range' | 'exists',
      value: ''
    },
    points: 0,
    isActive: true
  });

  const handleCreateRule = async () => {
    try {
      await createScoringRule(newRule);
      setNewRule({
        name: '',
        type: 'behavioral',
        condition: {
          field: '',
          operator: 'equals',
          value: ''
        },
        points: 0,
        isActive: true
      });
      setShowNewRule(false);
      onRulesUpdate();
    } catch (error) {
      console.error('Error creating rule:', error);
    }
  };

  const handleToggleRule = async (id: string, isActive: boolean) => {
    try {
      await updateScoringRule(id, { isActive });
      onRulesUpdate();
    } catch (error) {
      console.error('Error toggling rule:', error);
    }
  };

  const handleDeleteRule = async (id: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta regla?')) {
      try {
        await deleteScoringRule(id);
        onRulesUpdate();
      } catch (error) {
        console.error('Error deleting rule:', error);
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* New Rule Form */}
      {showNewRule && (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Nueva Regla de Scoring</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre de la regla
              </label>
              <input
                type="text"
                value={newRule.name}
                onChange={(e) => setNewRule(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ej: Lead con email corporativo"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de regla
              </label>
              <select
                value={newRule.type}
                onChange={(e) => setNewRule(prev => ({ 
                  ...prev, 
                  type: e.target.value as 'demographic' | 'behavioral' | 'engagement' | 'firmographic' 
                }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="demographic">Demográfica</option>
                <option value="behavioral">Comportamiento</option>
                <option value="engagement">Engagement</option>
                <option value="firmographic">Firmográfica</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Campo
              </label>
              <input
                type="text"
                value={newRule.condition.field}
                onChange={(e) => setNewRule(prev => ({ 
                  ...prev, 
                  condition: { ...prev.condition, field: e.target.value }
                }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ej: email, company, source"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Operador
              </label>
              <select
                value={newRule.condition.operator}
                onChange={(e) => setNewRule(prev => ({ 
                  ...prev, 
                  condition: { ...prev.condition, operator: e.target.value as any }
                }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="equals">Igual a</option>
                <option value="contains">Contiene</option>
                <option value="greater_than">Mayor que</option>
                <option value="less_than">Menor que</option>
                <option value="exists">Existe</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Valor
              </label>
              <input
                type="text"
                value={newRule.condition.value}
                onChange={(e) => setNewRule(prev => ({ 
                  ...prev, 
                  condition: { ...prev.condition, value: e.target.value }
                }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Valor a comparar"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Puntos
              </label>
              <input
                type="number"
                value={newRule.points}
                onChange={(e) => setNewRule(prev => ({ ...prev, points: parseInt(e.target.value) || 0 }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Puntos a otorgar"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={() => setShowNewRule(false)}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              onClick={handleCreateRule}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Crear Regla
            </button>
          </div>
        </div>
      )}

      {/* Rules List */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Reglas de Scoring</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {rules.map((rule) => (
            <div key={rule.id} className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-medium text-gray-900">{rule.name}</h4>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      rule.type === 'behavioral' ? 'text-blue-600 bg-blue-100' :
                      rule.type === 'demographic' ? 'text-green-600 bg-green-100' :
                      rule.type === 'engagement' ? 'text-purple-600 bg-purple-100' :
                      'text-orange-600 bg-orange-100'
                    }`}>
                      {rule.type}
                    </span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      rule.isActive ? 'text-green-600 bg-green-100' : 'text-gray-600 bg-gray-100'
                    }`}>
                      {rule.isActive ? 'Activa' : 'Inactiva'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">{rule.condition.field}</span> {rule.condition.operator} <span className="font-medium">{rule.condition.value}</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Puntos: <span className="font-medium">{rule.points > 0 ? '+' : ''}{rule.points}</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <button
                    onClick={() => handleToggleRule(rule.id, !rule.isActive)}
                    className={`p-2 rounded-lg ${
                      rule.isActive 
                        ? 'text-green-600 hover:bg-green-50' 
                        : 'text-gray-400 hover:bg-gray-50'
                    }`}
                  >
                    <CheckCircle className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg">
                    <Edit className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => handleDeleteRule(rule.id)}
                    className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Componente del dashboard de analytics
interface AnalyticsDashboardProps {
  analytics: LeadScoringAnalytics;
}

function AnalyticsDashboard({ analytics }: AnalyticsDashboardProps) {
  return (
    <div className="space-y-6">
      {/* Distribution Chart */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribución por Grado</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(analytics.distributionByGrade).map(([grade, count]) => (
            <div key={grade} className="text-center">
              <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-2xl font-bold ${
                grade === 'A' ? 'bg-green-100 text-green-600' :
                grade === 'B' ? 'bg-blue-100 text-blue-600' :
                grade === 'C' ? 'bg-yellow-100 text-yellow-600' :
                'bg-red-100 text-red-600'
              }`}>
                {count}
              </div>
              <p className="text-sm font-medium text-gray-900 mt-2">Grade {grade}</p>
              <p className="text-xs text-gray-500">
                {((count / analytics.totalLeads) * 100).toFixed(1)}%
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Conversion Rates */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tasas de Conversión por Grado</h3>
        <div className="space-y-4">
          {Object.entries(analytics.conversionRateByGrade).map(([grade, rate]) => (
            <div key={grade} className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-900">Grade {grade}</span>
              <div className="flex items-center gap-3">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      grade === 'A' ? 'bg-green-600' :
                      grade === 'B' ? 'bg-blue-600' :
                      grade === 'C' ? 'bg-yellow-600' :
                      'bg-red-600'
                    }`}
                    style={{ width: `${Math.min(rate, 100)}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-900 w-12 text-right">
                  {rate.toFixed(1)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Sources */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Fuentes de Leads</h3>
        <div className="space-y-4">
          {analytics.topSources.map((source, index) => (
            <div key={source.source} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-500">#{index + 1}</span>
                <span className="text-sm font-medium text-gray-900">{source.source}</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>{source.count} leads</span>
                <span className="font-medium">Score: {source.avgScore}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Modal para detalles del lead
interface LeadDetailsModalProps {
  lead: Lead;
  onClose: () => void;
  onUpdate: () => void;
  addLeadActivity: (leadId: string, activity: Omit<LeadActivity, 'id' | 'leadId' | 'timestamp'>) => Promise<void>;
  updateLead: (leadId: string, updates: Partial<Lead>) => Promise<void>;
}

function LeadDetailsModal({ lead, onClose, onUpdate, addLeadActivity, updateLead }: LeadDetailsModalProps) {
  const [activeTab, setActiveTab] = useState<'info' | 'activities' | 'notes'>('info');
  const [newActivity, setNewActivity] = useState({
    type: 'page_visit' as LeadActivity['type'],
    description: '',
    points: 0
  });

  const handleAddActivity = async () => {
    try {
      await addLeadActivity(lead.id, newActivity);
      setNewActivity({
        type: 'page_visit',
        description: '',
        points: 0
      });
      onUpdate();
    } catch (error) {
      console.error('Error adding activity:', error);
    }
  };

  const handleUpdateStatus = async (newStatus: Lead['status']) => {
    try {
      await updateLead(lead.id, { status: newStatus });
      onUpdate();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {lead.firstName && lead.lastName 
                  ? `${lead.firstName} ${lead.lastName}` 
                  : lead.email}
              </h2>
              <p className="text-gray-600">{lead.email}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="border-b border-gray-200">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('info')}
              className={`px-6 py-3 text-sm font-medium border-b-2 ${
                activeTab === 'info'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Información
            </button>
            <button
              onClick={() => setActiveTab('activities')}
              className={`px-6 py-3 text-sm font-medium border-b-2 ${
                activeTab === 'activities'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Actividades
            </button>
          </nav>
        </div>

        <div className="p-6 max-h-96 overflow-y-auto">
          {activeTab === 'info' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Información Personal</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Nombre</label>
                      <p className="text-sm text-gray-900">{lead.firstName || 'No especificado'}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Apellido</label>
                      <p className="text-sm text-gray-900">{lead.lastName || 'No especificado'}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Empresa</label>
                      <p className="text-sm text-gray-900">{lead.company || 'No especificado'}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                      <p className="text-sm text-gray-900">{lead.phone || 'No especificado'}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Scoring</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Score</label>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-gray-900">{lead.score}</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${Math.min(lead.score, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Grado</label>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        lead.grade === 'A' ? 'text-green-600 bg-green-100' :
                        lead.grade === 'B' ? 'text-blue-600 bg-blue-100' :
                        lead.grade === 'C' ? 'text-yellow-600 bg-yellow-100' :
                        'text-red-600 bg-red-100'
                      }`}>
                        Grade {lead.grade}
                      </span>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Estado</label>
                      <select
                        value={lead.status}
                        onChange={(e) => handleUpdateStatus(e.target.value as Lead['status'])}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="new">Nuevo</option>
                        <option value="contacted">Contactado</option>
                        <option value="qualified">Calificado</option>
                        <option value="converted">Convertido</option>
                        <option value="lost">Perdido</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Fuente</label>
                      <p className="text-sm text-gray-900">{lead.source}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'activities' && (
            <div className="space-y-6">
              {/* Add New Activity */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Agregar Actividad</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <select
                    value={newActivity.type}
                    onChange={(e) => setNewActivity(prev => ({ ...prev, type: e.target.value as LeadActivity['type'] }))}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="page_visit">Visita a página</option>
                    <option value="form_submit">Envío de formulario</option>
                    <option value="email_open">Email abierto</option>
                    <option value="email_click">Click en email</option>
                    <option value="download">Descarga</option>
                    <option value="call">Llamada</option>
                    <option value="meeting">Reunión</option>
                    <option value="demo">Demo</option>
                    <option value="purchase">Compra</option>
                  </select>

                  <input
                    type="text"
                    placeholder="Descripción"
                    value={newActivity.description}
                    onChange={(e) => setNewActivity(prev => ({ ...prev, description: e.target.value }))}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />

                  <input
                    type="number"
                    placeholder="Puntos"
                    value={newActivity.points}
                    onChange={(e) => setNewActivity(prev => ({ ...prev, points: parseInt(e.target.value) || 0 }))}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button
                  onClick={handleAddActivity}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Agregar Actividad
                </button>
              </div>

              {/* Activities List */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Historial de Actividades</h3>
                {lead.activities && lead.activities.length > 0 ? (
                  <div className="space-y-3">
                    {lead.activities.map((activity) => (
                      <div key={activity.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-medium text-gray-900">{activity.type}</h4>
                            <span className="text-sm text-gray-500">
                              {new Date(activity.timestamp.toDate()).toLocaleString()}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                          {activity.points !== 0 && (
                            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium mt-2 ${
                              activity.points > 0 ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'
                            }`}>
                              {activity.points > 0 ? '+' : ''}{activity.points} puntos
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">No hay actividades registradas</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}