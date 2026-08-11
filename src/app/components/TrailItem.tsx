import { CheckCircle2, Circle, Clock, Video, FileText, Users, BookOpen } from 'lucide-react';
import { TrailItem as TrailItemType } from '../data/trails';
import { Checkbox } from './ui/checkbox';

interface TrailItemProps {
  item: TrailItemType;
  isCompleted: boolean;
  onToggle: (itemId: string) => void;
  onOpenContent: (item: TrailItemType) => void;
}

const typeIcons = {
  meeting: Users,
  video: Video,
  reading: FileText,
  tutorial: BookOpen,
};

const typeColors = {
  meeting: 'text-orange-600',
  video: 'text-orange-700',
  reading: 'text-orange-500',
  tutorial: 'text-amber-600',
};

const typeBgColors = {
  meeting: 'bg-orange-50',
  video: 'bg-orange-100',
  reading: 'bg-orange-50',
  tutorial: 'bg-amber-50',
};

export function TrailItem({ item, isCompleted, onToggle, onOpenContent }: TrailItemProps) {
  const Icon = typeIcons[item.type];
  const colorClass = typeColors[item.type];
  const bgColorClass = typeBgColors[item.type];

  return (
    <div 
      className={`p-4 border rounded-lg transition-all cursor-pointer ${
        isCompleted 
          ? 'bg-gray-50 border-gray-200' 
          : 'bg-white border-gray-200 hover:border-orange-300 hover:shadow-md'
      }`}
      onClick={() => onOpenContent(item)}
    >
      <div className="flex items-start gap-3">
        <div 
          className="flex items-center pt-1"
          onClick={(e) => e.stopPropagation()}
        >
          <Checkbox
            id={item.id}
            checked={isCompleted}
            onCheckedChange={() => onToggle(item.id)}
            className="h-5 w-5"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-3 mb-2">
            <div className={`p-2 rounded-lg ${bgColorClass} flex-shrink-0`}>
              <Icon className={`h-5 w-5 ${colorClass}`} />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 
                className={`font-medium transition-opacity ${
                  isCompleted ? 'opacity-60 line-through' : ''
                }`}
              >
                {item.title}
              </h3>
              
              <p className={`text-sm text-gray-600 mt-1 ${
                isCompleted ? 'opacity-60' : ''
              }`}>
                {item.description}
              </p>

              {item.duration && (
                <div className="flex items-center gap-1.5 mt-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>{item.duration}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {isCompleted && (
          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
        )}
      </div>
    </div>
  );
}
