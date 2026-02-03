import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { StatsCard } from '../StatsCard';
import { QuestCard, Quest } from '../QuestCard';
import { LeaderboardWidget } from '../LeaderboardWidget';
import { Trophy, Coins, Target, TrendingUp, Calendar, Bell } from 'lucide-react';
import { motion } from 'motion/react';

interface DashboardPageProps {
  onNavigate: (page: string) => void;
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  const activeQuests: Quest[] = [
    {
      id: '1',
      title: 'Setup Your First Polkadot Wallet',
      description: 'Install SubWallet and create your first Polkadot account',
      category: 'general',
      difficulty: 'beginner',
      xpReward: 500,
      coinReward: 100,
      progress: 75,
      status: 'in-progress',
      deadline: '2 days',
    },
    {
      id: '2',
      title: 'Learn About Substrate Framework',
      description: 'Complete the interactive tutorial on Substrate basics',
      category: 'dev',
      difficulty: 'intermediate',
      xpReward: 1000,
      coinReward: 250,
      progress: 30,
      status: 'in-progress',
      deadline: '5 days',
    },
    {
      id: '3',
      title: 'Write Your First Mandala Article',
      description: 'Create and publish an article about Mandala Chain features',
      category: 'creator',
      difficulty: 'beginner',
      xpReward: 750,
      coinReward: 200,
      progress: 0,
      status: 'not-started',
      deadline: '7 days',
    },
  ];

  const upcomingEvents = [
    {
      title: 'Weekly AMA with Core Team',
      date: 'Feb 5, 2026',
      time: '2:00 PM UTC',
      reward: '500 XP',
    },
    {
      title: 'Smart Contract Workshop',
      date: 'Feb 8, 2026',
      time: '6:00 PM UTC',
      reward: '1000 XP',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-white mb-2">
              Welcome back, <span className="text-[#0AF3FF]">Explorer</span>!
            </h1>
            <p className="text-gray-400">
              Continue your journey in the Mandala Chain ecosystem
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total ManXP"
            value="8,750"
            icon={Trophy}
            gradient="from-yellow-500 to-orange-500"
            change="+500 this week"
            trend="up"
          />
          <StatsCard
            title="ManCoins"
            value="2,450"
            icon={Coins}
            gradient="from-[#0AF3FF] to-[#0880FF]"
            change="+200 this week"
            trend="up"
          />
          <StatsCard
            title="Quests Completed"
            value="23"
            icon={Target}
            gradient="from-green-500 to-emerald-500"
            change="3 active"
            trend="neutral"
          />
          <StatsCard
            title="Leaderboard Rank"
            value="#127"
            icon={TrendingUp}
            gradient="from-purple-500 to-pink-500"
            change="Up 12 spots"
            trend="up"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Active Quests & Events */}
          <div className="lg:col-span-2 space-y-8">
            {/* Active Quests */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Active Quests</h2>
                <Button
                  variant="outline"
                  className="border-[#0AF3FF] text-[#0AF3FF] hover:bg-[#0AF3FF] hover:text-black"
                  onClick={() => onNavigate('quests')}
                >
                  View All
                </Button>
              </div>
              <div className="grid gap-6">
                {activeQuests.map((quest, index) => (
                  <motion.div
                    key={quest.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <QuestCard quest={quest} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Calendar className="w-5 h-5 text-[#0AF3FF]" />
                  <h3 className="text-xl font-bold text-white">Upcoming Events</h3>
                </div>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-[#1a1a1a] rounded-xl p-4 hover:bg-[#1a1a1a]/80 transition-all cursor-pointer"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-white font-medium mb-2">
                            {event.title}
                          </h4>
                          <p className="text-sm text-gray-400">
                            {event.date} • {event.time}
                          </p>
                        </div>
                        <div className="bg-[#0AF3FF]/20 text-[#0AF3FF] px-3 py-1 rounded-lg text-xs font-medium">
                          {event.reward}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="w-full mt-4 text-[#0AF3FF] hover:bg-[#0AF3FF]/10"
                >
                  View Calendar
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Column - Leaderboard & Quick Links */}
          <div className="space-y-8">
            {/* Leaderboard */}
            <LeaderboardWidget />

            {/* Quick Actions */}
            <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Button
                    className="w-full bg-[#0AF3FF]/10 text-[#0AF3FF] hover:bg-[#0AF3FF]/20 justify-start"
                    onClick={() => onNavigate('quests')}
                  >
                    <Target className="w-4 h-4 mr-2" />
                    Browse Quests
                  </Button>
                  <Button
                    className="w-full bg-[#0AF3FF]/10 text-[#0AF3FF] hover:bg-[#0AF3FF]/20 justify-start"
                    onClick={() => onNavigate('knowledge')}
                  >
                    <Trophy className="w-4 h-4 mr-2" />
                    Knowledge Hub
                  </Button>
                  <Button
                    className="w-full bg-[#0AF3FF]/10 text-[#0AF3FF] hover:bg-[#0AF3FF]/20 justify-start"
                    onClick={() => onNavigate('profile')}
                  >
                    <Coins className="w-4 h-4 mr-2" />
                    View Profile
                  </Button>
                </div>
              </div>
            </Card>

            {/* Notifications */}
            <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Bell className="w-5 h-5 text-[#0AF3FF]" />
                  <h3 className="text-xl font-bold text-white">Notifications</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-[#0AF3FF]/10 border border-[#0AF3FF]/30 rounded-lg p-3">
                    <p className="text-sm text-[#0AF3FF] font-medium mb-1">
                      New Quest Available!
                    </p>
                    <p className="text-xs text-gray-400">
                      Complete "Deploy Your First Smart Contract" to earn 1500 XP
                    </p>
                  </div>
                  <div className="bg-[#1a1a1a] rounded-lg p-3">
                    <p className="text-sm text-white font-medium mb-1">
                      Leaderboard Update
                    </p>
                    <p className="text-xs text-gray-400">
                      You moved up 12 spots this week!
                    </p>
                  </div>
                  <div className="bg-[#1a1a1a] rounded-lg p-3">
                    <p className="text-sm text-white font-medium mb-1">
                      Quest Completed
                    </p>
                    <p className="text-xs text-gray-400">
                      You earned 500 XP and 100 ManCoins
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
