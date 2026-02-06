import { AdminSidebar } from '../AdminSidebar';
import { Card } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Label } from '../../ui/label';
import { Switch } from '../../ui/switch';
import { Slider } from '../../ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import {
  Coins,
  Zap,
  TrendingUp,
  Settings,
  Gift,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Users,
  Target,
  Save
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface AdminEconomyPageProps {
  onNavigate: (page: string) => void;
  currentAdminPage: string;
}

export function AdminEconomyPage({ onNavigate, currentAdminPage }: AdminEconomyPageProps) {
  const [dailyXPCap, setDailyXPCap] = useState([5000]);
  const [dailyCoinCap, setDailyCoinCap] = useState([1000]);
  const [xpMultiplier, setXpMultiplier] = useState([1.0]);

  const economyStats = {
    totalXPIssued: '12.5M',
    totalCoinsIssued: '2.8M',
    activeUsers: '8,234',
    avgXPPerUser: '1,518',
    xpChange: 15.2,
    coinChange: 8.7
  };

  const rewardTiers = [
    { difficulty: 'Beginner', xpRange: '100-500', coinRange: '10-50', color: 'text-green-400' },
    { difficulty: 'Intermediate', xpRange: '500-1500', coinRange: '50-150', color: 'text-yellow-400' },
    { difficulty: 'Advanced', xpRange: '1500-5000', coinRange: '150-500', color: 'text-red-400' }
  ];

  const recentTransactions = [
    { id: 1, user: 'CryptoNinja', type: 'earn', amount: '+500 XP', source: 'Quest Completion', time: '2m ago' },
    { id: 2, user: 'BlockMaster', type: 'earn', amount: '+100 Coins', source: 'Daily Bonus', time: '5m ago' },
    { id: 3, user: 'DevExplorer', type: 'spend', amount: '-200 Coins', source: 'NFT Badge', time: '12m ago' },
    { id: 4, user: 'ChainBuilder', type: 'earn', amount: '+1,500 XP', source: 'Advanced Quest', time: '18m ago' },
    { id: 5, user: 'WebThreeWiz', type: 'earn', amount: '+250 Coins', source: 'Referral Bonus', time: '25m ago' },
    { id: 6, user: 'PolkadotPro', type: 'spend', amount: '-500 Coins', source: 'Course Unlock', time: '32m ago' }
  ];

  const redemptionOptions = [
    { name: 'NFT Badge', cost: 200, type: 'coins', enabled: true, claimed: 1250 },
    { name: 'Advanced Course', cost: 500, type: 'coins', enabled: true, claimed: 340 },
    { name: 'Exclusive Article', cost: 100, type: 'coins', enabled: true, claimed: 890 },
    { name: 'Merch Discount', cost: 1000, type: 'coins', enabled: false, claimed: 0 },
    { name: 'Early Access', cost: 2000, type: 'coins', enabled: true, claimed: 156 }
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
              <h1 className="text-4xl font-bold text-white mb-2">Economy & Rewards</h1>
              <p className="text-gray-400">
                Manage ManXP, ManCoins, caps, and redemption settings
              </p>
            </motion.div>
          </div>

          {/* Economy Overview Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="bg-gradient-to-br from-[#0AF3FF]/20 to-[#0880FF]/20 border-[#0AF3FF]/30 p-4">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-5 h-5 text-[#0AF3FF]" />
                <span className="text-sm text-gray-400">Total XP Issued</span>
              </div>
              <div className="text-2xl font-bold text-white">{economyStats.totalXPIssued}</div>
              <div className="flex items-center gap-1 mt-1 text-sm text-green-400">
                <TrendingUp className="w-3 h-3" />
                +{economyStats.xpChange}% this week
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30 p-4">
              <div className="flex items-center gap-3 mb-2">
                <Coins className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-gray-400">Total Coins Issued</span>
              </div>
              <div className="text-2xl font-bold text-white">{economyStats.totalCoinsIssued}</div>
              <div className="flex items-center gap-1 mt-1 text-sm text-green-400">
                <TrendingUp className="w-3 h-3" />
                +{economyStats.coinChange}% this week
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30 p-4">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-purple-400" />
                <span className="text-sm text-gray-400">Active Earners</span>
              </div>
              <div className="text-2xl font-bold text-white">{economyStats.activeUsers}</div>
              <div className="text-sm text-gray-400 mt-1">Past 7 days</div>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30 p-4">
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-5 h-5 text-green-400" />
                <span className="text-sm text-gray-400">Avg XP/User</span>
              </div>
              <div className="text-2xl font-bold text-white">{economyStats.avgXPPerUser}</div>
              <div className="text-sm text-gray-400 mt-1">All time</div>
            </Card>
          </div>

          <Tabs defaultValue="settings" className="space-y-6">
            <TabsList className="bg-[#0a0a0a] border border-[#0AF3FF]/20">
              <TabsTrigger value="settings">Economy Settings</TabsTrigger>
              <TabsTrigger value="rewards">Reward Tiers</TabsTrigger>
              <TabsTrigger value="redemptions">Redemptions</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
            </TabsList>

            {/* Economy Settings Tab */}
            <TabsContent value="settings">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* XP Settings */}
                <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-[#0AF3FF]/10 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-[#0AF3FF]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">ManXP Settings</h3>
                      <p className="text-sm text-gray-400">Configure XP earning limits</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label>Daily XP Cap</Label>
                        <span className="text-[#0AF3FF] font-medium">{dailyXPCap[0].toLocaleString()} XP</span>
                      </div>
                      <Slider
                        value={dailyXPCap}
                        onValueChange={setDailyXPCap}
                        max={10000}
                        step={100}
                        className="[&_[role=slider]]:bg-[#0AF3FF]"
                      />
                      <p className="text-xs text-gray-500">Maximum XP a user can earn per day</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label>XP Multiplier</Label>
                        <span className="text-[#0AF3FF] font-medium">{xpMultiplier[0]}x</span>
                      </div>
                      <Slider
                        value={xpMultiplier}
                        onValueChange={setXpMultiplier}
                        min={0.5}
                        max={3}
                        step={0.1}
                        className="[&_[role=slider]]:bg-[#0AF3FF]"
                      />
                      <p className="text-xs text-gray-500">Global XP multiplier for events</p>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-black/50">
                      <div>
                        <Label>Streak Bonus</Label>
                        <p className="text-xs text-gray-500">Extra XP for daily logins</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </Card>

                {/* Coin Settings */}
                <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                      <Coins className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">ManCoin Settings</h3>
                      <p className="text-sm text-gray-400">Configure coin earning limits</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label>Daily Coin Cap</Label>
                        <span className="text-yellow-400 font-medium">{dailyCoinCap[0].toLocaleString()} Coins</span>
                      </div>
                      <Slider
                        value={dailyCoinCap}
                        onValueChange={setDailyCoinCap}
                        max={5000}
                        step={50}
                        className="[&_[role=slider]]:bg-yellow-400"
                      />
                      <p className="text-xs text-gray-500">Maximum coins a user can earn per day</p>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-black/50">
                      <div>
                        <Label>Referral Bonus</Label>
                        <p className="text-xs text-gray-500">250 coins per referral</p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-black/50">
                      <div>
                        <Label>Anti-Farming Protection</Label>
                        <p className="text-xs text-gray-500">Detect suspicious patterns</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </Card>
              </div>

              <div className="flex justify-end mt-6">
                <Button className="bg-[#0AF3FF] text-black hover:bg-[#0AF3FF]/90 gap-2">
                  <Save className="w-4 h-4" />
                  Save Settings
                </Button>
              </div>
            </TabsContent>

            {/* Reward Tiers Tab */}
            <TabsContent value="rewards">
              <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20">
                <div className="p-6 border-b border-[#0AF3FF]/10">
                  <h3 className="text-lg font-semibold text-white">Quest Reward Tiers</h3>
                  <p className="text-sm text-gray-400">Configure rewards based on quest difficulty</p>
                </div>

                <div className="divide-y divide-[#0AF3FF]/10">
                  {rewardTiers.map((tier, index) => (
                    <motion.div
                      key={tier.difficulty}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Badge className={`${tier.color} bg-current/20`}>
                            {tier.difficulty}
                          </Badge>
                          <div>
                            <div className="flex items-center gap-4 text-white">
                              <span className="flex items-center gap-2">
                                <Zap className="w-4 h-4 text-[#0AF3FF]" />
                                {tier.xpRange} XP
                              </span>
                              <span className="flex items-center gap-2">
                                <Coins className="w-4 h-4 text-yellow-400" />
                                {tier.coinRange} Coins
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="border-[#0AF3FF]/30">
                          <Settings className="w-4 h-4 mr-2" />
                          Configure
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Redemptions Tab */}
            <TabsContent value="redemptions">
              <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20">
                <div className="p-6 border-b border-[#0AF3FF]/10 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Redemption Options</h3>
                    <p className="text-sm text-gray-400">What users can redeem with ManCoins</p>
                  </div>
                  <Button className="bg-[#0AF3FF] text-black hover:bg-[#0AF3FF]/90">
                    <Gift className="w-4 h-4 mr-2" />
                    Add Redemption
                  </Button>
                </div>

                <div className="divide-y divide-[#0AF3FF]/10">
                  {redemptionOptions.map((option, index) => (
                    <motion.div
                      key={option.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="p-4 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                          <Gift className="w-5 h-5 text-yellow-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">{option.name}</h4>
                          <p className="text-sm text-gray-400">
                            {option.cost} {option.type} • {option.claimed} claimed
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Switch checked={option.enabled} />
                        <Button variant="ghost" size="sm">
                          <Settings className="w-4 h-4" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Transactions Tab */}
            <TabsContent value="transactions">
              <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20">
                <div className="p-6 border-b border-[#0AF3FF]/10 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Recent Transactions</h3>
                    <p className="text-sm text-gray-400">XP and Coin activity across the platform</p>
                  </div>
                  <Button variant="outline" className="border-[#0AF3FF]/30">
                    Export CSV
                  </Button>
                </div>

                <div className="divide-y divide-[#0AF3FF]/10">
                  {recentTransactions.map((tx, index) => (
                    <motion.div
                      key={tx.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="p-4 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          tx.type === 'earn' ? 'bg-green-500/20' : 'bg-red-500/20'
                        }`}>
                          {tx.type === 'earn' ? (
                            <ArrowDownRight className="w-4 h-4 text-green-400" />
                          ) : (
                            <ArrowUpRight className="w-4 h-4 text-red-400" />
                          )}
                        </div>
                        <div>
                          <p className="text-white font-medium">{tx.user}</p>
                          <p className="text-sm text-gray-400">{tx.source}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-medium ${tx.type === 'earn' ? 'text-green-400' : 'text-red-400'}`}>
                          {tx.amount}
                        </p>
                        <p className="text-xs text-gray-500 flex items-center gap-1 justify-end">
                          <Clock className="w-3 h-3" />
                          {tx.time}
                        </p>
                      </div>
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
