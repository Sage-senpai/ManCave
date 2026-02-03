import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { motion } from 'motion/react';
import { 
  Wallet as WalletIcon,
  ArrowUpRight,
  ArrowDownLeft,
  Copy,
  ExternalLink,
  RefreshCw,
  Plus,
  Trash2,
  Check,
  TrendingUp,
  Coins
} from 'lucide-react';
import { useState } from 'react';

interface WalletPageProps {
  onNavigate: (page: string) => void;
}

export function WalletPage({ onNavigate }: WalletPageProps) {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('0x7a3f...92c4');
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const transactions = [
    {
      id: '1',
      type: 'receive',
      amount: '+500 ManXP',
      from: 'Quest Completion',
      timestamp: '2 hours ago',
      status: 'completed',
    },
    {
      id: '2',
      type: 'receive',
      amount: '+100 ManCoins',
      from: 'Daily Login Bonus',
      timestamp: '5 hours ago',
      status: 'completed',
    },
    {
      id: '3',
      type: 'send',
      amount: '-50 ManCoins',
      to: 'NFT Badge Purchase',
      timestamp: '1 day ago',
      status: 'completed',
    },
    {
      id: '4',
      type: 'receive',
      amount: '+1000 ManXP',
      from: 'Level Up Reward',
      timestamp: '2 days ago',
      status: 'completed',
    },
    {
      id: '5',
      type: 'receive',
      amount: '+250 ManCoins',
      from: 'Referral Bonus',
      timestamp: '3 days ago',
      status: 'completed',
    },
  ];

  const connectedWallets = [
    {
      name: 'Polkadot.js',
      address: '0x7a3f...92c4',
      balance: '12.5 DOT',
      primary: true,
    },
    {
      name: 'SubWallet',
      address: '0x8b4e...83d5',
      balance: '8.2 DOT',
      primary: false,
    },
  ];

  const nftBadges = [
    {
      id: '1',
      name: 'Genesis Builder',
      description: 'First 1000 users',
      rarity: 'Legendary',
      image: '🏆',
    },
    {
      id: '2',
      name: 'Quest Master',
      description: '100 quests completed',
      rarity: 'Epic',
      image: '⚔️',
    },
    {
      id: '3',
      name: 'Community Star',
      description: 'Top 10 contributor',
      rarity: 'Rare',
      image: '⭐',
    },
    {
      id: '4',
      name: 'Early Adopter',
      description: 'Beta tester badge',
      rarity: 'Uncommon',
      image: '🚀',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">Wallet</h1>
          <p className="text-gray-400">Manage your wallets, assets, and transactions</p>
        </motion.div>

        {/* Wallet Overview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* ManXP Balance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-gradient-to-br from-[#0AF3FF]/20 to-[#0880FF]/20 border-[#0AF3FF]/30 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#0AF3FF]/20 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-[#0AF3FF]" />
                </div>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  +15.2%
                </Badge>
              </div>
              <div className="text-3xl font-bold text-white mb-1">45,750</div>
              <div className="text-gray-400 text-sm">ManXP Balance</div>
            </Card>
          </motion.div>

          {/* ManCoins Balance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <Coins className="w-6 h-6 text-purple-400" />
                </div>
                <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                  +8.5%
                </Badge>
              </div>
              <div className="text-3xl font-bold text-white mb-1">3,420</div>
              <div className="text-gray-400 text-sm">ManCoins Balance</div>
            </Card>
          </motion.div>

          {/* NFT Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                  <WalletIcon className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">12</div>
              <div className="text-gray-400 text-sm">NFT Badges Earned</div>
            </Card>
          </motion.div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="wallets" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-[#0a0a0a] border border-[#0AF3FF]/20">
            <TabsTrigger value="wallets" className="data-[state=active]:bg-[#0AF3FF]/10 data-[state=active]:text-[#0AF3FF]">
              Wallets
            </TabsTrigger>
            <TabsTrigger value="transactions" className="data-[state=active]:bg-[#0AF3FF]/10 data-[state=active]:text-[#0AF3FF]">
              Transactions
            </TabsTrigger>
            <TabsTrigger value="nfts" className="data-[state=active]:bg-[#0AF3FF]/10 data-[state=active]:text-[#0AF3FF]">
              NFT Badges
            </TabsTrigger>
            <TabsTrigger value="rewards" className="data-[state=active]:bg-[#0AF3FF]/10 data-[state=active]:text-[#0AF3FF]">
              Rewards
            </TabsTrigger>
          </TabsList>

          {/* Connected Wallets */}
          <TabsContent value="wallets">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              {/* Primary Wallet Card */}
              <Card className="bg-gradient-to-br from-[#0AF3FF]/10 to-[#0880FF]/10 border-[#0AF3FF]/30 p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <Badge className="bg-[#0AF3FF] text-black mb-3">Primary Wallet</Badge>
                    <h3 className="text-2xl font-bold text-white mb-1">Polkadot.js</h3>
                    <p className="text-gray-400">Connected via browser extension</p>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0AF3FF] to-[#0880FF] flex items-center justify-center">
                    <WalletIcon className="w-8 h-8 text-black" />
                  </div>
                </div>

                <div className="bg-black/50 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Wallet Address</div>
                      <div className="text-white font-mono">0x7a3f891b2c5d6e4f8a9c0d1e2f3a4b5c6d7e8f90a1b2c3d4e5f6a7b8c9d0e1f2</div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCopyAddress}
                      className="text-[#0AF3FF] hover:bg-[#0AF3FF]/10"
                    >
                      {copiedAddress ? (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/50 rounded-xl p-4">
                    <div className="text-sm text-gray-400 mb-1">DOT Balance</div>
                    <div className="text-2xl font-bold text-white">12.5 DOT</div>
                    <div className="text-sm text-green-400">≈ $45.50 USD</div>
                  </div>
                  <div className="bg-black/50 rounded-xl p-4">
                    <div className="text-sm text-gray-400 mb-1">Network</div>
                    <div className="text-xl font-bold text-white">Mandala Chain</div>
                    <div className="flex items-center gap-1 text-sm text-green-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      Connected
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <Button className="flex-1 bg-[#0AF3FF] text-black hover:bg-[#0AF3FF]/90">
                    <ArrowUpRight className="w-4 h-4 mr-2" />
                    Send
                  </Button>
                  <Button variant="outline" className="flex-1 border-[#0AF3FF] text-[#0AF3FF] hover:bg-[#0AF3FF] hover:text-black">
                    <ArrowDownLeft className="w-4 h-4 mr-2" />
                    Receive
                  </Button>
                  <Button variant="outline" className="border-[#0AF3FF]/30 text-gray-400 hover:text-white">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </Card>

              {/* Other Wallets */}
              <div className="grid gap-4">
                {connectedWallets.filter(w => !w.primary).map((wallet, index) => (
                  <Card key={index} className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#0AF3FF]/10 flex items-center justify-center">
                          <WalletIcon className="w-6 h-6 text-[#0AF3FF]" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">{wallet.name}</div>
                          <div className="text-sm text-gray-400 font-mono">{wallet.address}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="text-white font-semibold">{wallet.balance}</div>
                          <div className="text-sm text-gray-400">Balance</div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-500">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Add Wallet Button */}
              <Button
                variant="outline"
                className="w-full border-[#0AF3FF]/30 border-dashed text-gray-400 hover:text-white hover:border-[#0AF3FF]"
              >
                <Plus className="w-4 h-4 mr-2" />
                Connect Another Wallet
              </Button>
            </motion.div>
          </TabsContent>

          {/* Transaction History */}
          <TabsContent value="transactions">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">Recent Transactions</h3>
                  <Button variant="ghost" size="sm" className="text-[#0AF3FF]">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Refresh
                  </Button>
                </div>

                <div className="space-y-3">
                  {transactions.map((tx) => (
                    <div
                      key={tx.id}
                      className="flex items-center justify-between p-4 bg-[#1a1a1a] rounded-lg border border-[#0AF3FF]/10 hover:border-[#0AF3FF]/30 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          tx.type === 'receive' ? 'bg-green-500/20' : 'bg-red-500/20'
                        }`}>
                          {tx.type === 'receive' ? (
                            <ArrowDownLeft className="w-5 h-5 text-green-400" />
                          ) : (
                            <ArrowUpRight className="w-5 h-5 text-red-400" />
                          )}
                        </div>
                        <div>
                          <div className="text-white font-medium">
                            {tx.type === 'receive' ? tx.from : tx.to}
                          </div>
                          <div className="text-sm text-gray-400">{tx.timestamp}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-semibold ${
                          tx.type === 'receive' ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {tx.amount}
                        </div>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                          {tx.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </TabsContent>

          {/* NFT Badges */}
          <TabsContent value="nfts">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-6">
                <h3 className="text-xl font-bold text-white mb-6">Your NFT Badge Collection</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {nftBadges.map((badge) => (
                    <div
                      key={badge.id}
                      className="bg-[#1a1a1a] border border-[#0AF3FF]/20 rounded-xl p-4 hover:border-[#0AF3FF]/50 transition-all cursor-pointer group"
                    >
                      <div className="text-6xl text-center mb-4 group-hover:scale-110 transition-transform">
                        {badge.image}
                      </div>
                      <div className="text-center">
                        <div className="text-white font-semibold mb-1">{badge.name}</div>
                        <div className="text-xs text-gray-400 mb-2">{badge.description}</div>
                        <Badge className={`text-xs ${
                          badge.rarity === 'Legendary' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                          badge.rarity === 'Epic' ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' :
                          badge.rarity === 'Rare' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                          'bg-gray-500/20 text-gray-400 border-gray-500/30'
                        }`}>
                          {badge.rarity}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Rewards */}
          <TabsContent value="rewards">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-6">
                <h3 className="text-xl font-bold text-white mb-6">Earn More Rewards</h3>
                <div className="space-y-4">
                  {[
                    { title: 'Complete Daily Quests', reward: '+50 ManCoins', icon: TrendingUp },
                    { title: 'Refer a Friend', reward: '+250 ManCoins', icon: Users },
                    { title: 'Join Community Events', reward: '+100 ManXP', icon: Coins },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-[#1a1a1a] rounded-lg border border-[#0AF3FF]/20"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#0AF3FF]/10 flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-[#0AF3FF]" />
                        </div>
                        <div>
                          <div className="text-white font-medium">{item.title}</div>
                          <div className="text-sm text-[#0AF3FF]">{item.reward}</div>
                        </div>
                      </div>
                      <Button className="bg-[#0AF3FF] text-black hover:bg-[#0AF3FF]/90">
                        Claim
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
