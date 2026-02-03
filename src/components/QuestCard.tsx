import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Trophy, Clock, Coins } from 'lucide-react';
import { motion } from 'motion/react';

export interface Quest {
  id: string;
  title: string;
  description: string;
  category: 'dev' | 'creator' | 'general';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  xpReward: number;
  coinReward: number;
  progress: number;
  status: 'not-started' | 'in-progress' | 'completed' | 'graded';
  deadline?: string;
}

interface QuestCardProps {
  quest: Quest;
  onClick?: () => void;
}

export function QuestCard({ quest, onClick }: QuestCardProps) {
  const categoryColors = {
    dev: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    creator: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    general: 'bg-[#0AF3FF]/20 text-[#0AF3FF] border-[#0AF3FF]/30',
  };

  const difficultyColors = {
    beginner: 'bg-green-500/20 text-green-400',
    intermediate: 'bg-yellow-500/20 text-yellow-400',
    advanced: 'bg-red-500/20 text-red-400',
  };

  const statusColors = {
    'not-started': 'bg-gray-500/20 text-gray-400',
    'in-progress': 'bg-[#0AF3FF]/20 text-[#0AF3FF]',
    'completed': 'bg-green-500/20 text-green-400',
    'graded': 'bg-purple-500/20 text-purple-400',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Card
        className="bg-[#0a0a0a] border-[#0AF3FF]/20 hover:border-[#0AF3FF]/50 transition-all cursor-pointer overflow-hidden group"
        onClick={onClick}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-white mb-2">{quest.title}</h3>
              <p className="text-sm text-gray-400 line-clamp-2">
                {quest.description}
              </p>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge
              variant="outline"
              className={categoryColors[quest.category]}
            >
              {quest.category}
            </Badge>
            <Badge
              variant="outline"
              className={difficultyColors[quest.difficulty]}
            >
              {quest.difficulty}
            </Badge>
            <Badge
              variant="outline"
              className={statusColors[quest.status]}
            >
              {quest.status.replace('-', ' ')}
            </Badge>
          </div>

          {/* Progress Bar */}
          {quest.progress > 0 && (
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400">Progress</span>
                <span className="text-xs text-[#0AF3FF]">{quest.progress}%</span>
              </div>
              <Progress value={quest.progress} className="h-2" />
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-[#0AF3FF]/10">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-yellow-400">
                <Trophy className="w-4 h-4" />
                <span className="text-sm">{quest.xpReward} XP</span>
              </div>
              <div className="flex items-center gap-1 text-[#0AF3FF]">
                <Coins className="w-4 h-4" />
                <span className="text-sm">{quest.coinReward}</span>
              </div>
            </div>
            {quest.deadline && (
              <div className="flex items-center gap-1 text-gray-400">
                <Clock className="w-4 h-4" />
                <span className="text-xs">{quest.deadline}</span>
              </div>
            )}
          </div>
        </div>

        {/* Hover Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0AF3FF]/0 to-[#0AF3FF]/0 group-hover:from-[#0AF3FF]/5 group-hover:to-[#0AF3FF]/10 transition-all pointer-events-none" />
      </Card>
    </motion.div>
  );
}
