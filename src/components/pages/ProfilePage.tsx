import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { 
  Trophy, 
  Coins, 
  Target, 
  Calendar,
  Award,
  Copy,
  ExternalLink,
  Edit,
  Settings
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface ProfilePageProps {
  onNavigate?: (page: string) => void;
}

export function ProfilePage({ onNavigate }: ProfilePageProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'badges' | 'history'>('overview');

  const badges = [
    { id: 1, name: 'Early Adopter', icon: '🌟', earned: true, rarity: 'legendary' },
    { id: 2, name: 'Quest Master', icon: '🎯', earned: true, rarity: 'epic' },
    { id: 3, name: 'Developer', icon: '💻', earned: true, rarity: 'rare' },
    { id: 4, name: 'Content Creator', icon: '🎨', earned: false, rarity: 'rare' },
    { id: 5, name: 'Community Leader', icon: '👑', earned: false, rarity: 'epic' },
    { id: 6, name: 'Smart Contract Expert', icon: '⚡', earned: false, rarity: 'legendary' },
  ];

  const questHistory = [
    { 
      id: 1, 
      title: 'Understanding Cross-Chain Communication', 
      completed: 'Jan 28, 2026',
      xp: 1200,
      coins: 300,
      status: 'completed'
    },
    { 
      id: 2, 
      title: 'Design Mandala Brand Assets', 
      completed: 'Jan 25, 2026',
      xp: 1000,
      coins: 250,
      status: 'graded'
    },
    { 
      id: 3, 
      title: 'Polkadot Basics Workshop', 
      completed: 'Jan 20, 2026',
      xp: 800,
      coins: 150,
      status: 'completed'
    },
  ];

  const walletAddress = '0x7a3f92c4e5d8b1f3a6c9e2d5f8a1b4c7e0d3f6a9';
  const shortAddress = `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`;

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
  };

  const rarityColors = {
    legendary: 'from-yellow-500 to-orange-500',
    epic: 'from-purple-500 to-pink-500',
    rare: 'from-blue-500 to-cyan-500',
    common: 'from-gray-500 to-gray-600',
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-[#0AF3FF]/20 to-[#0880FF]/20" />
            <div className="px-8 pb-8">
              <div className="flex flex-col md:flex-row md:items-end gap-6 -mt-16">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#0AF3FF] to-[#0880FF] flex items-center justify-center text-5xl border-4 border-black">
                    🎯
                  </div>
                  <button className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-[#0AF3FF] text-black flex items-center justify-center hover:bg-[#0AF3FF]/90 transition-all">
                    <Edit className="w-4 h-4" />
                  </button>
                </div>

                {/* User Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold text-white mb-2">Explorer</h1>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-[#0AF3FF] text-black">
                          Developer Track
                        </Badge>
                        <Badge variant="outline" className="border-purple-500 text-purple-400">
                          Level 12
                        </Badge>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Member since January 2026 • 23 quests completed
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="border-[#0AF3FF] text-[#0AF3FF] hover:bg-[#0AF3FF] hover:text-black"
                      onClick={() => onNavigate?.('settings')}
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </Button>
                  </div>

                  {/* Level Progress */}
                  <div className="bg-[#1a1a1a] rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Progress to Level 13</span>
                      <span className="text-sm text-[#0AF3FF]">8,750 / 10,000 XP</span>
                    </div>
                    <Progress value={87.5} className="h-3" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-black" />
                </div>
                <Award className="w-5 h-5 text-yellow-500" />
              </div>
              <p className="text-3xl font-bold text-white mb-1">8,750</p>
              <p className="text-sm text-gray-400">Total ManXP</p>
            </div>
          </Card>

          <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0AF3FF] to-[#0880FF] flex items-center justify-center">
                  <Coins className="w-6 h-6 text-black" />
                </div>
              </div>
              <p className="text-3xl font-bold text-white mb-1">2,450</p>
              <p className="text-sm text-gray-400">ManCoins</p>
            </div>
          </Card>

          <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <Target className="w-6 h-6 text-black" />
                </div>
              </div>
              <p className="text-3xl font-bold text-white mb-1">23</p>
              <p className="text-sm text-gray-400">Quests Completed</p>
            </div>
          </Card>

          <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Award className="w-6 h-6 text-black" />
                </div>
              </div>
              <p className="text-3xl font-bold text-white mb-1">3</p>
              <p className="text-sm text-gray-400">Badges Earned</p>
            </div>
          </Card>
        </div>

        {/* Wallet Section */}
        <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 mb-8">
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">Connected Wallets</h3>
            <div className="bg-[#1a1a1a] rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0AF3FF] to-[#0880FF] flex items-center justify-center">
                    🔷
                  </div>
                  <div>
                    <p className="text-white font-medium">SubWallet</p>
                    <p className="text-sm text-gray-400 font-mono">{shortAddress}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-gray-400 hover:text-white"
                    onClick={copyAddress}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-gray-400 hover:text-white"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-[#0AF3FF]/20">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'badges', label: 'Badges' },
            { id: 'history', label: 'Quest History' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-3 px-2 transition-all ${
                activeTab === tab.id
                  ? 'text-[#0AF3FF] border-b-2 border-[#0AF3FF]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {questHistory.slice(0, 3).map((quest, index) => (
                    <div key={quest.id} className="flex items-center gap-3 p-3 bg-[#1a1a1a] rounded-lg">
                      <Calendar className="w-5 h-5 text-[#0AF3FF]" />
                      <div className="flex-1">
                        <p className="text-white text-sm font-medium">{quest.title}</p>
                        <p className="text-xs text-gray-400">{quest.completed}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Latest Badges</h3>
                <div className="grid grid-cols-3 gap-4">
                  {badges.filter(b => b.earned).map((badge) => (
                    <div key={badge.id} className="text-center">
                      <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${rarityColors[badge.rarity as keyof typeof rarityColors]} flex items-center justify-center text-3xl mb-2`}>
                        {badge.icon}
                      </div>
                      <p className="text-xs text-white font-medium">{badge.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'badges' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {badges.map((badge, index) => (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className={`bg-[#0a0a0a] border-[#0AF3FF]/20 overflow-hidden ${
                  !badge.earned && 'opacity-50'
                }`}>
                  <div className="p-6 text-center">
                    <div className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${rarityColors[badge.rarity as keyof typeof rarityColors]} flex items-center justify-center text-5xl mb-4`}>
                      {badge.icon}
                    </div>
                    <h4 className="text-white font-medium mb-2">{badge.name}</h4>
                    <Badge variant="outline" className={`text-xs ${
                      badge.rarity === 'legendary' ? 'border-yellow-500 text-yellow-400' :
                      badge.rarity === 'epic' ? 'border-purple-500 text-purple-400' :
                      'border-blue-500 text-blue-400'
                    }`}>
                      {badge.rarity}
                    </Badge>
                    {!badge.earned && (
                      <p className="text-xs text-gray-400 mt-2">Locked</p>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'history' && (
          <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20">
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-6">Completed Quests</h3>
              <div className="space-y-4">
                {questHistory.map((quest, index) => (
                  <motion.div
                    key={quest.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-[#1a1a1a] rounded-xl hover:bg-[#1a1a1a]/80 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                        <Target className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{quest.title}</h4>
                        <p className="text-sm text-gray-400">{quest.completed}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Trophy className="w-4 h-4" />
                          <span className="text-sm">+{quest.xp}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[#0AF3FF]">
                          <Coins className="w-4 h-4" />
                          <span className="text-sm">+{quest.coins}</span>
                        </div>
                      </div>
                      <Badge className={
                        quest.status === 'completed' ? 'bg-green-500/20 text-green-400' : 'bg-purple-500/20 text-purple-400'
                      }>
                        {quest.status}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
