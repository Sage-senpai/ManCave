import { Card } from '../ui/card';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface AdminKPICardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  gradient?: string;
  change?: number;
  changeLabel?: string;
  onClick?: () => void;
}

export function AdminKPICard({ 
  title, 
  value, 
  icon: Icon, 
  gradient = 'from-[#0AF3FF] to-[#0880FF]',
  change,
  changeLabel,
  onClick
}: AdminKPICardProps) {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={onClick ? 'cursor-pointer' : ''}
    >
      <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 hover:border-[#0AF3FF]/40 transition-all overflow-hidden group relative">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <p className="text-sm text-gray-400 mb-2">{title}</p>
              <p className="text-3xl font-bold text-white">{value}</p>
              {change !== undefined && (
                <div className="flex items-center gap-2 mt-2">
                  <div className={`flex items-center gap-1 text-sm ${
                    isPositive ? 'text-green-400' : isNegative ? 'text-red-400' : 'text-gray-400'
                  }`}>
                    {isPositive && <TrendingUp className="w-4 h-4" />}
                    {isNegative && <TrendingDown className="w-4 h-4" />}
                    <span>{Math.abs(change)}%</span>
                  </div>
                  {changeLabel && (
                    <span className="text-xs text-gray-400">{changeLabel}</span>
                  )}
                </div>
              )}
            </div>
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center`}>
              <Icon className="w-6 h-6 text-black" />
            </div>
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0AF3FF]/0 to-[#0AF3FF]/0 group-hover:from-[#0AF3FF]/5 group-hover:to-[#0AF3FF]/10 transition-all pointer-events-none" />
      </Card>
    </motion.div>
  );
}
