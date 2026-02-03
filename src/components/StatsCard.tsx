import { Card } from './ui/card';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  gradient?: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
}

export function StatsCard({ 
  title, 
  value, 
  icon: Icon, 
  gradient = 'from-[#0AF3FF] to-[#0880FF]',
  change,
  trend = 'neutral'
}: StatsCardProps) {
  const trendColors = {
    up: 'text-green-400',
    down: 'text-red-400',
    neutral: 'text-gray-400'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 hover:border-[#0AF3FF]/50 transition-all overflow-hidden group relative">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <p className="text-sm text-gray-400 mb-1">{title}</p>
              <p className="text-3xl font-bold text-white">{value}</p>
              {change && (
                <p className={`text-xs mt-2 ${trendColors[trend]}`}>
                  {change}
                </p>
              )}
            </div>
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center`}>
              <Icon className="w-6 h-6 text-black" />
            </div>
          </div>
        </div>

        {/* Animated Border Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5`} />
        </div>
      </Card>
    </motion.div>
  );
}
