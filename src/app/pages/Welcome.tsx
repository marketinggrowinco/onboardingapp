import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Users } from 'lucide-react';
import { availableTeams } from '../data/trails';
import { saveUserProgress, getUserProgress } from '../utils/storage';
import logo from 'figma:asset/c5227dee504b71002bc73d45a51b9da53e9218b5.png';
import headerBanner from 'figma:asset/4f92ad3fb1abd4356de3e771bee1694e9a8fb17c.png';

export function Welcome() {
  const navigate = useNavigate();
  const existingProgress = getUserProgress();

  const [email, setEmail] = useState(existingProgress?.email || '');
  const [displayName, setDisplayName] = useState(existingProgress?.displayName || '');
  const [team, setTeam] = useState(existingProgress?.team || '');

  const handleStart = () => {
    if (!email.trim() || !displayName.trim() || !team) return;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      alert('Por favor, insira um email válido');
      return;
    }

    const progress = {
      email: email.trim().toLowerCase(),
      displayName: displayName.trim(),
      team,
      completedItems: existingProgress?.completedItems || [],
      createdAt: existingProgress?.createdAt || new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
    };

    saveUserProgress(progress);
    navigate('/dashboard');
  };

  const handleContinue = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Hero Banner */}
      <div className="relative w-full mb-8">
        <img 
          src={headerBanner} 
          alt="Welcome to GrowinCo" 
          className="w-full h-32 md:h-36 lg:h-40 object-cover object-center"
          style={{ imageRendering: 'crisp-edges' }}
        />
      </div>

      <div className="flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-4 p-3 shadow-sm">
              <img src={logo} alt="GrowinCo" className="w-full h-full object-contain" />
            </div>
            <h1 className="mb-2">Bem-vindo à GrowinCo!</h1>
            <p className="text-gray-600">
              Estamos felizes em ter você no time. Vamos começar sua jornada de onboarding.
            </p>
          </div>

          {existingProgress && (
            <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-orange-900">
                    Progresso encontrado!
                  </p>
                  <p className="text-sm text-orange-700 mt-1">
                    Olá {existingProgress.displayName} ({existingProgress.team}). Você já tem {existingProgress.completedItems.length} itens concluídos.
                  </p>
                  <Button
                    onClick={handleContinue}
                    variant="outline"
                    size="sm"
                    className="mt-3 border-orange-300 hover:bg-orange-100 text-orange-700"
                  >
                    Continuar de onde parei
                  </Button>
                </div>
              </div>
            </div>
          )}

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            {existingProgress ? (
              // Show continue message when existing progress found
              <div className="space-y-4 text-center">
                <p className="text-gray-600">
                  Clique no botão acima para continuar de onde você parou.
                </p>
              </div>
            ) : (
              // Full form for new users
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Seu email corporativo</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu.nome@growinco.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12"
                  />
                  <p className="text-xs text-gray-500">
                    Use seu email da GrowinCo. Ele será usado para identificar seu progresso.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="displayName">Como gostaria de ser chamado?</Label>
                  <Input
                    id="displayName"
                    type="text"
                    placeholder="Ex: Mari, Mariane, Mari Monteiro"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="h-12"
                  />
                  <p className="text-xs text-gray-500">
                    Pode ser seu apelido ou nome completo. Usaremos para personalizar sua experiência.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="team">Seu time</Label>
                  <Select value={team} onValueChange={setTeam}>
                    <SelectTrigger id="team" className="h-12">
                      <SelectValue placeholder="Selecione seu time" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableTeams.map((teamName) => (
                        <SelectItem key={teamName} value={teamName}>
                          {teamName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={handleStart}
                  disabled={!email.trim() || !displayName.trim() || !team}
                  className="w-full h-12 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                >
                  Começar Onboarding
                </Button>
              </div>
            )}
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Seu progresso será salvo automaticamente conforme você avança
          </p>
        </div>
      </div>
    </div>
  );
}