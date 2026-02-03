import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Trophy, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface LeaderboardEntry {
  rank: number;
  username: string;
  xp: number;
  avatar: string;
  trend?: 'up' | 'down' | 'same';
}

export function LeaderboardWidget() {
  const [timeframe, setTimeframe] = useState<'weekly' | 'all-time'>('weekly');

  const leaderboardData: LeaderboardEntry[] = [
    { rank: 1, username: 'CryptoNinja', xp: 12500, avatar: '🥷', trend: 'up' },
    { rank: 2, username: 'BlockchainMaster', xp: 11200, avatar: '🧙', trend: 'same' },
    { rank: 3, username: 'Web3Dev', xp: 10800, avatar: '👨‍💻', trend: 'up' },
    { rank: 4, username: 'MandalaQueen', xp: 9500, avatar: '👑', trend: 'down' },
    { rank: 5, username: 'You', xp: 8750, avatar: '🎯', trend: 'up' },
  ];

  const getRankColor = (rank: number) => {
    if (rank === 1) return 'text-yellow-400';
    if (rank === 2) return 'text-gray-300';
    if (rank === 3) return 'text-orange-400';
    return 'text-gray-400';
  };

  return (
    <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-[#0AF3FF]" />
            <h3 className="text-white">Leaderboard</h3>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setTimeframe('weekly')}
              className={`px-3 py-1 rounded-lg text-xs transition-all ${
                timeframe === 'weekly'
                  ? 'bg-[#0AF3FF] text-black'
                  : 'bg-[#0AF3FF]/10 text-[#0AF3FF] hover:bg-[#0AF3FF]/20'
              }`}
            >
              Weekly
            </button>
            <button
              onClick={() => setTimeframe('all-time')}
              className={`px-3 py-1 rounded-lg text-xs transition-all ${
                timeframe === 'all-time'
                  ? 'bg-[#0AF3FF] text-black'
                  : 'bg-[#0AF3FF]/10 text-[#0AF3FF] hover:bg-[#0AF3FF]/20'
              }`}
            >
              All Time
            </button>
          </div>
        </div>

        {/* Leaderboard List */}
        <div className="space-y-3">
          {leaderboardData.map((entry, index) => (
            <motion.div
              key={entry.rank}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                entry.username === 'You'
                  ? 'bg-[#0AF3FF]/10 border border-[#0AF3FF]/30'
                  : 'bg-[#1a1a1a] hover:bg-[#1a1a1a]/80'
              }`}
            >
              {/* Rank */}
              <div className={`text-xl font-bold ${getRankColor(entry.rank)} w-8 text-center`}>
                {entry.rank}
              </div>

              {/* Avatar */}
              <div className="text-2xl">{entry.avatar}</div>

              {/* User Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-white text-sm font-medium">
                    {entry.username}
                  </span>
                  {entry.username === 'You' && (
                    <Badge className="bg-[#0AF3FF] text-black text-xs px-2 py-0">
                      You
                    </Badge>
                  )}
                </div>
                <div className="text-xs text-gray-400 flex items-center gap-1">
                  <Trophy className="w-3 h-3" />
                  {entry.xp.toLocaleString()} XP
                </div>
              </div>

              {/* Trend */}
              {entry.trend && (
                <div className={`${
                  entry.trend === 'up' ? 'text-green-400' : 
                  entry.trend === 'down' ? 'text-red-400' : 
                  'text-gray-400'
                }`}>
                  {entry.trend === 'up' && <TrendingUp className="w-4 h-4" />}
                  {entry.trend === 'down' && <TrendingUp className="w-4 h-4 rotate-180" />}
                  {entry.trend === 'same' && <span className="text-xs">—</span>}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Card>
  );
}
