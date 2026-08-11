import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, TrendingUp, CheckCircle, Clock, ArrowLeft, RefreshCw, ShieldAlert } from 'lucide-react';
import { teamTrails, companyTrail } from '../data/trails';
import { isUserAdmin } from '../utils/storage';

const API_URL = '/api';

interface UserData {
  userId: string;
  userName: string;
  userEmail?: string;
  userTeam: string | null;
  generalProgress: Record<string, boolean>;
  teamProgress: Record<string, boolean>;
  lastUpdated: string;
}

const COLORS = ['#ea580c', '#fb923c', '#fdba74', '#fed7aa', '#ffedd5'];

export function Admin() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  // Check admin access
  useEffect(() => {
    if (!isUserAdmin()) {
      // Not authorized, redirect to dashboard
      navigate('/dashboard');
    }
  }, [navigate]);

  const fetchUsers = async () => {
    try {
      setRefreshing(true);
      const response = await fetch(`${API_URL}/admin/users`);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to fetch users');
      }

      const data = await response.json();
      setUsers(data.users || []);
      setError(null);
    } catch (err) {
      console.error('Error fetching users:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
      setError(`Erro ao carregar dados dos usuários: ${errorMessage}`);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Calculate statistics
  const stats = {
    totalUsers: users.length,
    activeToday: users.filter(u => {
      const lastUpdate = new Date(u.lastUpdated);
      const today = new Date();
      return lastUpdate.toDateString() === today.toDateString();
    }).length,
    averageGeneralProgress: users.length > 0
      ? Math.round(
          users.reduce((sum, u) => {
            const completed = Object.keys(u.generalProgress || {}).filter(k => u.generalProgress[k]).length;
            const total = companyTrail.items.length;
            return sum + (completed / total) * 100;
          }, 0) / users.length
        )
      : 0,
    averageTeamProgress: users.length > 0
      ? Math.round(
          users.reduce((sum, u) => {
            if (!u.userTeam) return sum;
            const teamTrail = teamTrails[u.userTeam as keyof typeof teamTrails];
            if (!teamTrail) return sum;
            const completed = Object.keys(u.teamProgress || {}).filter(k => u.teamProgress[k]).length;
            const total = teamTrail.items.length;
            return sum + (completed / total) * 100;
          }, 0) / users.filter(u => u.userTeam).length
        )
      : 0,
  };

  // Team distribution
  const teamDistribution = Object.entries(
    users.reduce((acc, u) => {
      const team = u.userTeam || 'Sem time';
      acc[team] = (acc[team] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  ).map(([name, value], index) => ({ 
    id: `team-${index}-${name.toLowerCase().replace(/\s+/g, '-')}`,
    name, 
    value 
  }));

  // Progress distribution
  const progressRanges = [
    { range: '0-20%', count: 0, id: 'range-1' },
    { range: '21-40%', count: 0, id: 'range-2' },
    { range: '41-60%', count: 0, id: 'range-3' },
    { range: '61-80%', count: 0, id: 'range-4' },
    { range: '81-100%', count: 0, id: 'range-5' },
  ];

  users.forEach(u => {
    const completed = Object.keys(u.generalProgress || {}).filter(k => u.generalProgress[k]).length;
    const total = companyTrail.items.length;
    const percentage = (completed / total) * 100;
    
    if (percentage <= 20) progressRanges[0].count++;
    else if (percentage <= 40) progressRanges[1].count++;
    else if (percentage <= 60) progressRanges[2].count++;
    else if (percentage <= 80) progressRanges[3].count++;
    else progressRanges[4].count++;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Agora';
    if (diffMins < 60) return `${diffMins}min atrás`;
    if (diffHours < 24) return `${diffHours}h atrás`;
    if (diffDays === 1) return 'Ontem';
    if (diffDays < 7) return `${diffDays} dias atrás`;
    
    return date.toLocaleDateString('pt-BR', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric' 
    });
  };

  const calculateUserProgress = (user: UserData, type: 'general' | 'team') => {
    if (type === 'general') {
      const completed = Object.keys(user.generalProgress || {}).filter(k => user.generalProgress[k]).length;
      const total = companyTrail.items.length;
      return { completed, total, percentage: Math.round((completed / total) * 100) };
    } else {
      if (!user.userTeam) return { completed: 0, total: 0, percentage: 0 };
      const teamTrail = teamTrails[user.userTeam as keyof typeof teamTrails];
      if (!teamTrail) return { completed: 0, total: 0, percentage: 0 };
      const completed = Object.keys(user.teamProgress || {}).filter(k => user.teamProgress[k]).length;
      const total = teamTrail.items.length;
      return { completed, total, percentage: Math.round((completed / total) * 100) };
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando dados...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard Administrativo</h1>
                <p className="text-sm text-gray-600">Acompanhamento de progresso dos colaboradores</p>
              </div>
            </div>
            <button
              onClick={fetchUsers}
              disabled={refreshing}
              className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
              Atualizar
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total de Usuários</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalUsers}</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-lg">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Ativos Hoje</p>
                <p className="text-3xl font-bold text-gray-900">{stats.activeToday}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Progresso Geral Médio</p>
                <p className="text-3xl font-bold text-gray-900">{stats.averageGeneralProgress}%</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Progresso Time Médio</p>
                <p className="text-3xl font-bold text-gray-900">{stats.averageTeamProgress}%</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Team Distribution */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Distribuição por Time</h2>
            {teamDistribution.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    key="pie-team"
                    data={teamDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {teamDistribution.map((entry) => (
                      <Cell key={entry.id} fill={COLORS[teamDistribution.indexOf(entry) % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip key="tooltip-pie" />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-gray-500 text-center py-12">Sem dados disponíveis</p>
            )}
          </div>

          {/* Progress Distribution */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Distribuição de Progresso</h2>
            {users.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={progressRanges}>
                  <CartesianGrid key="grid" strokeDasharray="3 3" />
                  <XAxis key="xaxis" dataKey="range" />
                  <YAxis key="yaxis" />
                  <Tooltip key="tooltip" />
                  <Legend key="legend" />
                  <Bar key="bar-count" dataKey="count" fill="#ea580c" name="Usuários" />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-gray-500 text-center py-12">Sem dados disponíveis</p>
            )}
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Usuários e Progresso</h2>
          </div>
          
          {users.length === 0 ? (
            <div className="p-12 text-center">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">Nenhum usuário encontrado</p>
              <p className="text-sm text-gray-500">Os usuários aparecerão aqui assim que começarem a usar a plataforma</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nome
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Trilha Geral
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Trilha do Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Última Atividade
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => {
                    const generalProg = calculateUserProgress(user, 'general');
                    const teamProg = calculateUserProgress(user, 'team');
                    
                    return (
                      <tr key={user.userId} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                              <span className="text-orange-600 font-semibold text-sm">
                                {user.userName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                              </span>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{user.userName}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800">
                            {user.userTeam || 'Sem time'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-full bg-gray-200 rounded-full h-2 mr-2" style={{ width: '100px' }}>
                              <div 
                                className="bg-orange-600 h-2 rounded-full transition-all" 
                                style={{ width: `${generalProg.percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600 min-w-[80px]">
                              {generalProg.completed}/{generalProg.total} ({generalProg.percentage}%)
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {user.userTeam ? (
                            <div className="flex items-center">
                              <div className="w-full bg-gray-200 rounded-full h-2 mr-2" style={{ width: '100px' }}>
                                <div 
                                  className="bg-blue-600 h-2 rounded-full transition-all" 
                                  style={{ width: `${teamProg.percentage}%` }}
                                ></div>
                              </div>
                              <span className="text-sm text-gray-600 min-w-[80px]">
                                {teamProg.completed}/{teamProg.total} ({teamProg.percentage}%)
                              </span>
                            </div>
                          ) : (
                            <span className="text-sm text-gray-400">-</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(user.lastUpdated)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}