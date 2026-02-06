import { AdminSidebar } from '../AdminSidebar';
import { Card } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  AreaChart,
  Area
} from 'recharts';
import {
  TrendingUp,
  TrendingDown,
  Users,
  Target,
  Clock,
  Download,
  Calendar,
  ChevronDown,
  Award,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../ui/dropdown-menu';

interface AdminAnalyticsPageProps {
  onNavigate: (page: string) => void;
  currentAdminPage: string;
}

export function AdminAnalyticsPage({ onNavigate, currentAdminPage }: AdminAnalyticsPageProps) {
  const [dateRange, setDateRange] = useState('7d');

  const retentionData = [
    { day: 'Day 1', retention: 100 },
    { day: 'Day 3', retention: 72 },
    { day: 'Day 7', retention: 58 },
    { day: 'Day 14', retention: 45 },
    { day: 'Day 30', retention: 38 },
    { day: 'Day 60', retention: 28 },
    { day: 'Day 90', retention: 22 }
  ];

  const questCompletionData = [
    { name: 'Mon', dev: 45, creator: 32 },
    { name: 'Tue', dev: 52, creator: 38 },
    { name: 'Wed', dev: 48, creator: 41 },
    { name: 'Thu', dev: 61, creator: 35 },
    { name: 'Fri', dev: 55, creator: 48 },
    { name: 'Sat', dev: 38, creator: 52 },
    { name: 'Sun', dev: 42, creator: 45 }
  ];

  const questDropoffData = [
    { stage: 'Started', users: 1000 },
    { stage: '25% Complete', users: 780 },
    { stage: '50% Complete', users: 620 },
    { stage: '75% Complete', users: 480 },
    { stage: 'Submitted', users: 420 },
    { stage: 'Approved', users: 380 }
  ];

  const trackDistribution = [
    { name: 'Developer', value: 58, color: '#0AF3FF' },
    { name: 'Creator', value: 42, color: '#A855F7' }
  ];

  const topContributors = [
    { rank: 1, name: 'CryptoNinja', xp: 45750, quests: 89, track: 'dev' },
    { rank: 2, name: 'BlockMaster', xp: 42300, quests: 76, track: 'dev' },
    { rank: 3, name: 'CreatorPro', xp: 38900, quests: 82, track: 'creator' },
    { rank: 4, name: 'ChainBuilder', xp: 35600, quests: 68, track: 'dev' },
    { rank: 5, name: 'WebThreeWiz', xp: 32400, quests: 71, track: 'creator' }
  ];

  const userGrowthData = [
    { date: 'Jan', users: 1200 },
    { date: 'Feb', users: 1850 },
    { date: 'Mar', users: 2400 },
    { date: 'Apr', users: 3100 },
    { date: 'May', users: 4200 },
    { date: 'Jun', users: 5600 },
    { date: 'Jul', users: 7100 },
    { date: 'Aug', users: 8234 }
  ];

  const kpiCards = [
    { title: 'Total Users', value: '8,234', change: 12.5, icon: Users, positive: true },
    { title: 'Quest Completion Rate', value: '68%', change: 3.2, icon: Target, positive: true },
    { title: 'Avg Session Time', value: '12m 34s', change: -2.1, icon: Clock, positive: false },
    { title: 'Active Streaks', value: '2,456', change: 8.7, icon: Zap, positive: true }
  ];

  return (
    <div className="flex min-h-screen bg-black">
      <AdminSidebar currentPage={currentAdminPage} onNavigate={onNavigate} />

      <div className="flex-1 pt-24 pb-12 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl font-bold text-white mb-2">Analytics</h1>
              <p className="text-gray-400">
                Platform metrics, retention, and user insights
              </p>
            </motion.div>

            <div className="flex items-center gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-[#0AF3FF]/30 gap-2">
                    <Calendar className="w-4 h-4" />
                    {dateRange === '7d' ? 'Last 7 days' : dateRange === '30d' ? 'Last 30 days' : 'Last 90 days'}
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#0a0a0a] border-[#0AF3FF]/20">
                  <DropdownMenuItem onClick={() => setDateRange('7d')} className="text-white">
                    Last 7 days
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setDateRange('30d')} className="text-white">
                    Last 30 days
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setDateRange('90d')} className="text-white">
                    Last 90 days
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="outline" className="border-[#0AF3FF]/30 gap-2">
                <Download className="w-4 h-4" />
                Export
              </Button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {kpiCards.map((kpi, index) => (
              <motion.div
                key={kpi.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <kpi.icon className="w-5 h-5 text-[#0AF3FF]" />
                    <div className={`flex items-center gap-1 text-sm ${kpi.positive ? 'text-green-400' : 'text-red-400'}`}>
                      {kpi.positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {Math.abs(kpi.change)}%
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white">{kpi.value}</div>
                  <div className="text-sm text-gray-400">{kpi.title}</div>
                </Card>
              </motion.div>
            ))}
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="bg-[#0a0a0a] border border-[#0AF3FF]/20">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="retention">Retention</TabsTrigger>
              <TabsTrigger value="quests">Quests</TabsTrigger>
              <TabsTrigger value="contributors">Top Contributors</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* User Growth Chart */}
                <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">User Growth</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={userGrowthData}>
                        <defs>
                          <linearGradient id="userGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0AF3FF" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#0AF3FF" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                        <XAxis dataKey="date" stroke="#666" />
                        <YAxis stroke="#666" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#0a0a0a',
                            border: '1px solid rgba(10, 243, 255, 0.2)',
                            borderRadius: '8px'
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="users"
                          stroke="#0AF3FF"
                          fill="url(#userGradient)"
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </Card>

                {/* Track Distribution */}
                <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Track Distribution</h3>
                  <div className="h-[300px] flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={trackDistribution}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {trackDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#0a0a0a',
                            border: '1px solid rgba(10, 243, 255, 0.2)',
                            borderRadius: '8px'
                          }}
                        />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Retention Tab */}
            <TabsContent value="retention">
              <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">User Retention Curve</h3>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={retentionData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="day" stroke="#666" />
                      <YAxis stroke="#666" unit="%" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#0a0a0a',
                          border: '1px solid rgba(10, 243, 255, 0.2)',
                          borderRadius: '8px'
                        }}
                        formatter={(value: number) => [`${value}%`, 'Retention']}
                      />
                      <Line
                        type="monotone"
                        dataKey="retention"
                        stroke="#0AF3FF"
                        strokeWidth={3}
                        dot={{ fill: '#0AF3FF', strokeWidth: 2 }}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#0AF3FF]">72%</div>
                    <div className="text-sm text-gray-400">Day 3 Retention</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0AF3FF]">38%</div>
                    <div className="text-sm text-gray-400">Day 30 Retention</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0AF3FF]">22%</div>
                    <div className="text-sm text-gray-400">Day 90 Retention</div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Quests Tab */}
            <TabsContent value="quests">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Quest Completions by Track */}
                <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Quest Completions by Track</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={questCompletionData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                        <XAxis dataKey="name" stroke="#666" />
                        <YAxis stroke="#666" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#0a0a0a',
                            border: '1px solid rgba(10, 243, 255, 0.2)',
                            borderRadius: '8px'
                          }}
                        />
                        <Legend />
                        <Bar dataKey="dev" name="Developer" fill="#0AF3FF" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="creator" name="Creator" fill="#A855F7" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>

                {/* Quest Drop-off Funnel */}
                <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Quest Completion Funnel</h3>
                  <div className="space-y-3">
                    {questDropoffData.map((stage, index) => {
                      const percentage = (stage.users / questDropoffData[0].users) * 100;
                      return (
                        <motion.div
                          key={stage.stage}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm text-gray-400">{stage.stage}</span>
                            <span className="text-sm text-white font-medium">
                              {stage.users.toLocaleString()} ({percentage.toFixed(0)}%)
                            </span>
                          </div>
                          <div className="h-6 bg-[#0AF3FF]/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${percentage}%` }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              className="h-full bg-gradient-to-r from-[#0AF3FF] to-[#0880FF] rounded-full"
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Top Contributors Tab */}
            <TabsContent value="contributors">
              <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20">
                <div className="p-6 border-b border-[#0AF3FF]/10">
                  <h3 className="text-lg font-semibold text-white">Top Contributors</h3>
                  <p className="text-sm text-gray-400">Highest XP earners this month</p>
                </div>

                <div className="divide-y divide-[#0AF3FF]/10">
                  {topContributors.map((user, index) => (
                    <motion.div
                      key={user.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 flex items-center gap-4"
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        user.rank === 1 ? 'bg-yellow-500 text-black' :
                        user.rank === 2 ? 'bg-gray-400 text-black' :
                        user.rank === 3 ? 'bg-orange-600 text-white' :
                        'bg-[#0AF3FF]/20 text-[#0AF3FF]'
                      }`}>
                        {user.rank}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-white">{user.name}</span>
                          <Badge className={user.track === 'dev' ? 'bg-[#0AF3FF]/20 text-[#0AF3FF]' : 'bg-purple-500/20 text-purple-400'}>
                            {user.track === 'dev' ? 'Developer' : 'Creator'}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-400">
                          {user.quests} quests completed
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center gap-1 text-[#0AF3FF] font-bold">
                          <Zap className="w-4 h-4" />
                          {user.xp.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500">ManXP</div>
                      </div>

                      <Award className={`w-6 h-6 ${
                        user.rank === 1 ? 'text-yellow-500' :
                        user.rank === 2 ? 'text-gray-400' :
                        user.rank === 3 ? 'text-orange-600' :
                        'text-gray-600'
                      }`} />
                    </motion.div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
