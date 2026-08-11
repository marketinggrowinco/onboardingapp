import { Trail, TrailItem as TrailItemType } from '../data/trails';
import { TrailItem } from './TrailItem';
import { Progress } from './ui/progress';
import { calculateProgress } from '../utils/storage';

interface TrailSectionProps {
  trail: Trail;
  completedItems: string[];
  onToggleItem: (itemId: string) => void;
  onOpenContent: (item: TrailItemType) => void;
}

export function TrailSection({ trail, completedItems, onToggleItem, onOpenContent }: TrailSectionProps) {
  const completedCount = trail.items.filter(item => 
    completedItems.includes(item.id)
  ).length;
  
  const progress = calculateProgress(trail.items.length, completedCount);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="mb-2">{trail.name}</h2>
        <p className="text-gray-600 mb-4">{trail.description}</p>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">
              {completedCount} de {trail.items.length} concluídos
            </span>
            <span className="font-medium text-gray-900">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      <div className="space-y-3">
        {trail.items.map(item => (
          <TrailItem
            key={item.id}
            item={item}
            isCompleted={completedItems.includes(item.id)}
            onToggle={onToggleItem}
            onOpenContent={onOpenContent}
          />
        ))}
      </div>
    </div>
  );
}