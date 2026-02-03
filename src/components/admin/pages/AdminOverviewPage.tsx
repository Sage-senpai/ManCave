import { AdminKPICard } from '../AdminKPICard';
import { AdminSidebar } from '../AdminSidebar';
import { Card } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { 
  Users, 
  Target, 
  TrendingUp, 
  Clock,
  FileEdit,
  UserPlus,
  Megaphone,
  AlertCircle,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { motion } from 'motion/react';

interface AdminOverviewPageProps {
  onNavigate: (page: string) => void;
  currentAdminPage: string;
}

export function AdminOverviewPage({ onNavigate, currentAdminPage }: AdminOverviewPageProps) {
  const recentActivity = [
    { id: 1, type: 'submission', user: 'CryptoNinja', action: 'submitted quest', quest: 'Deploy Smart Contract', time: '2m ago', status: 'pending' },
    { id: 2, type: 'flag', user: 'System', action: 'flagged submission', quest: 'Create Video Tutorial', time: '15m ago', status: 'flagged' },
    { id: 3, type: 'completion', user: 'BlockchainMaster', action: 'completed quest', quest: 'Substrate Basics', time: '1h ago', status: 'approved' },
    { id: 4, type: 'user', user: 'NewExplorer', action: 'joined platform', quest: 'Dev Track', time: '2h ago', status: 'active' },
  ];

  const funnelData = [
    { stage: 'Landing Visit', count: 1250, percentage: 100 },
    { stage: 'Signup Started', count: 875, percentage: 70 },
    { stage: 'Wallet Connected', count: 720, percentage: 58 },
    { stage: 'Track Selected', count: 650, percentage: 52 },
    { stage: 'First Quest', count: 480, percentage: 38 },
  ];

  return (
    <div className="flex min-h-screen bg-black">
      <AdminSidebar currentPage={currentAdminPage} onNavigate={onNavigate} />
      
      <div className="flex-1 pt-24 pb-12 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl font-bold text-white mb-2">Admin Overview</h1>
              <p className="text-gray-400">
                Real-time operational dashboard for Mandala Chain ecosystem
              </p>
            </motion.div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <AdminKPICard
              title="New Users (7d)"
              value="234"
              icon={Users}
              gradient="from-green-500 to-emerald-500"
              change={12}
              changeLabel="vs last week"
            />
            <AdminKPICard
              title="Active Quests"
              value="47"
              icon={Target}
              gradient="from-[#0AF3FF] to-[#0880FF]"
              change={5}
              changeLabel="new this week"
            />
            <AdminKPICard
              title="Completion Rate"
              value="68%"
              icon={TrendingUp}
              gradient="from-yellow-500 to-orange-500"
              change={3}
              changeLabel="vs last week"
            />
            <AdminKPICard
              title="Avg Onboarding Time"
              value="12m"
              icon={Clock}
              gradient="from-purple-500 to-pink-500"
              change={-8}
              changeLabel="faster"
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Recent Activity */}
            <Card className="lg:col-span-2 bg-[#0a0a0a] border-[#0AF3FF]/20">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Recent Activity</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[#0AF3FF] hover:text-[#0AF3FF]/80"
                  >
                    View All
                  </Button>
                </div>
                
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3 p-3 bg-[#1a1a1a] rounded-xl hover:bg-[#1a1a1a]/80 transition-all"
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        activity.status === 'pending' ? 'bg-yellow-500/20' :
                        activity.status === 'approved' ? 'bg-green-500/20' :
                        activity.status === 'flagged' ? 'bg-red-500/20' :
                        'bg-[#0AF3FF]/20'
                      }`}>
                        {activity.status === 'pending' && <Clock className="w-5 h-5 text-yellow-400" />}
                        {activity.status === 'approved' && <CheckCircle className="w-5 h-5 text-green-400" />}
                        {activity.status === 'flagged' && <AlertCircle className="w-5 h-5 text-red-400" />}
                        {activity.status === 'active' && <UserPlus className="w-5 h-5 text-[#0AF3FF]" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm">
                          <span className="font-medium">{activity.user}</span>{' '}
                          <span className="text-gray-400">{activity.action}</span>{' '}
                          <span className="text-[#0AF3FF]">{activity.quest}</span>
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                      <Badge className={`${
                        activity.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                        activity.status === 'approved' ? 'bg-green-500/20 text-green-400' :
                        activity.status === 'flagged' ? 'bg-red-500/20 text-red-400' :
                        'bg-[#0AF3FF]/20 text-[#0AF3FF]'
                      }`}>
                        {activity.status}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
                <div className="space-y-3">
                  <Button
                    className="w-full bg-[#0AF3FF] text-black hover:bg-[#0AF3FF]/90 justify-start gap-3"
                    onClick={() => onNavigate('admin-quests')}
                  >
                    <FileEdit className="w-5 h-5" />
                    Create Quest
                  </Button>
                  <Button
                    className="w-full bg-[#0AF3FF]/10 text-[#0AF3FF] hover:bg-[#0AF3FF]/20 justify-start gap-3"
                    onClick={() => onNavigate('admin-users')}
                  >
                    <UserPlus className="w-5 h-5" />
                    Assign Mentor
                  </Button>
                  <Button
                    className="w-full bg-[#0AF3FF]/10 text-[#0AF3FF] hover:bg-[#0AF3FF]/20 justify-start gap-3"
                    onClick={() => onNavigate('admin-announcements')}
                  >
                    <Megaphone className="w-5 h-5" />
                    Send Announcement
                  </Button>
                  <Button
                    className="w-full bg-red-500/10 text-red-400 hover:bg-red-500/20 justify-start gap-3"
                    onClick={() => onNavigate('admin-moderation')}
                  >
                    <AlertCircle className="w-5 h-5" />
                    Review Flagged Items
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Onboarding Funnel */}
          <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Onboarding Funnel</h2>
              <div className="space-y-4">
                {funnelData.map((stage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">{stage.stage}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-[#0AF3FF]">{stage.count} users</span>
                        <span className="text-gray-400">({stage.percentage}%)</span>
                      </div>
                    </div>
                    <div className="h-12 bg-[#1a1a1a] rounded-xl overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${stage.percentage}%` }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                        className="h-full bg-gradient-to-r from-[#0AF3FF] to-[#0880FF] flex items-center px-4"
                      >
                        <span className="text-black font-bold text-sm">{stage.percentage}%</span>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}