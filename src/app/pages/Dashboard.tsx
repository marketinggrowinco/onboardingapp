import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { TrailSection } from '../components/TrailSection';
import { companyTrail, teamTrails } from '../data/trails';
import { TrailItem as TrailItemType } from '../data/trails';
import { ContentModal } from '../components/ContentModal';
import { getCompletedItems, calculateProgress, clearUserProgress, toggleItemCompletion, isUserAdmin } from '../utils/storage';
import { getUserInfo } from '../utils/storage';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { User, Award, TrendingUp, LogOut, Shield } from 'lucide-react';
import logo from 'figma:asset/c5227dee504b71002bc73d45a51b9da53e9218b5.png';
import headerBanner from 'figma:asset/4f92ad3fb1abd4356de3e771bee1694e9a8fb17c.png';

export function Dashboard() {
  const navigate = useNavigate();
  const [userProgress, setUserProgress] = useState(getUserInfo());
  const [completedItems, setCompletedItems] = useState(getCompletedItems());
  const [currentItem, setCurrentItem] = useState<TrailItemType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAdmin, setShowAdmin] = useState(isUserAdmin());

  const teamTrail = userProgress ? teamTrails[userProgress.team] : undefined;

  useEffect(() => {
    if (!userProgress || !teamTrail) {
      navigate('/');
    }
  }, [userProgress, teamTrail, navigate]);

  if (!userProgress || !teamTrail) {
    return null;
  }

  const allItems = [...companyTrail.items, ...teamTrail.items];
  const completedCount = completedItems.length;
  const totalProgress = calculateProgress(allItems.length, completedCount);

  const handleToggleItem = (itemId: string) => {
    const updatedItems = toggleItemCompletion(itemId);
    if (updatedItems) {
      setCompletedItems(updatedItems);
    }
  };

  const handleLogout = () => {
    if (confirm('Tem certeza que deseja sair? Seu progresso está salvo e você pode voltar a qualquer momento.')) {
      navigate('/');
    }
  };

  const handleRestart = () => {
    if (confirm('Tem certeza que deseja reiniciar? Todo o seu progresso será perdido.')) {
      clearUserProgress();
      navigate('/');
    }
  };

  const openModal = (item: TrailItemType) => {
    setCurrentItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentItem(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative w-full h-20 md:h-24 lg:h-32 overflow-hidden">
        <img 
          src={headerBanner} 
          alt="Welcome to GrowinCo" 
          className="w-full h-full object-cover object-center"
          style={{ imageRendering: 'crisp-edges' }}
        />
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1.5">
                <img src={logo} alt="GrowinCo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-orange-600">GrowinCo</h1>
                <p className="text-sm text-gray-600">
                  Bem-vindo, {userProgress.displayName}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleRestart}
              >
                Reiniciar
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Progress Overview */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-8 text-white mb-8 shadow-lg">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <User className="h-5 w-5" />
                <span className="text-sm font-medium opacity-90">
                  {userProgress.team}
                </span>
              </div>
              <h2 className="text-white mb-2">Seu Progresso Geral</h2>
              <p className="text-orange-100">
                Continue aprendendo e completando as trilhas de onboarding
              </p>
            </div>
            <div className="text-right">
              <div className="text-5xl font-bold mb-1">{totalProgress}%</div>
              <div className="text-sm text-orange-100">completo</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-medium">Total de Itens</span>
              </div>
              <div className="text-2xl font-bold">{allItems.length}</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center gap-2 mb-1">
                <Award className="h-4 w-4" />
                <span className="text-sm font-medium">Concluídos</span>
              </div>
              <div className="text-2xl font-bold">{completedCount}</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-medium">Restantes</span>
              </div>
              <div className="text-2xl font-bold">{allItems.length - completedCount}</div>
            </div>
          </div>
        </div>

        {/* Trails */}
        <Tabs defaultValue="company" className="space-y-6">
          <TabsList className="bg-gray-100 border border-gray-300 p-1">
            <TabsTrigger value="company" className="flex-1 data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              Trilha da Empresa
            </TabsTrigger>
            <TabsTrigger value="team" className="flex-1 data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              Trilha de {userProgress.team}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="company" className="mt-6">
            <TrailSection
              trail={companyTrail}
              completedItems={completedItems}
              onToggleItem={handleToggleItem}
              onOpenContent={openModal}
            />
          </TabsContent>

          <TabsContent value="team" className="mt-6">
            <TrailSection
              trail={teamTrail}
              completedItems={completedItems}
              onToggleItem={handleToggleItem}
              onOpenContent={openModal}
            />
          </TabsContent>
        </Tabs>

        {totalProgress === 100 && (
          <div className="mt-8 bg-orange-50 border border-orange-200 rounded-xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 rounded-full mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-orange-900 mb-2">Parabéns! 🎉</h2>
            <p className="text-orange-700">
              Você completou todo o onboarding. Bem-vindo oficialmente ao time da GrowinCo!
            </p>
          </div>
        )}
      </main>

      {/* Content Modal */}
      {isModalOpen && currentItem && (
        <ContentModal
          item={currentItem}
          onClose={closeModal}
        />
      )}

      {/* Admin FAB - Floating Action Button */}
      {showAdmin && (
        <button
          onClick={() => navigate('/admin')}
          className="fixed bottom-6 right-6 bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 group z-50"
          title="Painel Administrativo"
        >
          <Shield className="h-6 w-6" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Painel Admin
          </span>
        </button>
      )}
    </div>
  );
}