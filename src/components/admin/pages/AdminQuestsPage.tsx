import { useState } from 'react';
import { AdminSidebar } from '../AdminSidebar';
import { Card } from '../../ui/card';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { Badge } from '../../ui/badge';
import { 
  Plus, 
  Search, 
  Edit, 
  Copy, 
  Trash2, 
  Play, 
  Pause, 
  Archive,
  Trophy,
  Coins,
  Calendar
} from 'lucide-react';
import { motion } from 'motion/react';

interface AdminQuestsPageProps {
  onNavigate: (page: string) => void;
  currentAdminPage: string;
}

export function AdminQuestsPage({ onNavigate, currentAdminPage }: AdminQuestsPageProps) {
  const [view, setView] = useState<'list' | 'create'>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTrack, setFilterTrack] = useState('all');

  const quests = [
    {
      id: 1,
      title: 'Deploy Your First Smart Contract',
      track: 'dev',
      difficulty: 'advanced',
      status: 'active',
      completions: 43,
      xpReward: 2000,
      coinReward: 500,
      deadline: '2026-02-15',
    },
    {
      id: 2,
      title: 'Create Mandala Explainer Video',
      track: 'creator',
      difficulty: 'intermediate',
      status: 'active',
      completions: 28,
      xpReward: 1500,
      coinReward: 400,
      deadline: '2026-02-20',
    },
    {
      id: 3,
      title: 'Understanding Substrate Framework',
      track: 'dev',
      difficulty: 'intermediate',
      status: 'paused',
      completions: 156,
      xpReward: 1000,
      coinReward: 250,
    },
    {
      id: 4,
      title: 'Write Mandala Chain Article',
      track: 'creator',
      difficulty: 'beginner',
      status: 'draft',
      completions: 0,
      xpReward: 750,
      coinReward: 200,
    },
  ];

  const filteredQuests = quests.filter(quest => {
    const matchesSearch = quest.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTrack = filterTrack === 'all' || quest.track === filterTrack;
    return matchesSearch && matchesTrack;
  });

  const statusColors = {
    active: 'bg-green-500/20 text-green-400',
    paused: 'bg-yellow-500/20 text-yellow-400',
    draft: 'bg-gray-500/20 text-gray-400',
    archived: 'bg-red-500/20 text-red-400',
  };

  return (
    <div className="flex min-h-screen bg-black">
      <AdminSidebar currentPage={currentAdminPage} onNavigate={onNavigate} />
      
      <div className="flex-1 pt-24 pb-12 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Quest Management</h1>
              <p className="text-gray-400">Create and manage quests for the ecosystem</p>
            </div>
            <Button
              className="bg-[#0AF3FF] text-black hover:bg-[#0AF3FF]/90 gap-2"
              onClick={() => setView('create')}
            >
              <Plus className="w-5 h-5" />
              Create Quest
            </Button>
          </div>

          {view === 'list' ? (
            <>
              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Search quests..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-[#0a0a0a] border-[#0AF3FF]/20 text-white"
                  />
                </div>
                <select
                  value={filterTrack}
                  onChange={(e) => setFilterTrack(e.target.value)}
                  className="bg-[#0a0a0a] border border-[#0AF3FF]/20 rounded-lg px-4 py-2 text-white"
                >
                  <option value="all">All Tracks</option>
                  <option value="dev">Developer</option>
                  <option value="creator">Creator</option>
                  <option value="general">General</option>
                </select>
              </div>

              {/* Quest List */}
              <div className="grid gap-4">
                {filteredQuests.map((quest, index) => (
                  <motion.div
                    key={quest.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 hover:border-[#0AF3FF]/40 transition-all">
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl text-white font-bold">{quest.title}</h3>
                              <Badge className={statusColors[quest.status as keyof typeof statusColors]}>
                                {quest.status}
                              </Badge>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 text-sm">
                              <Badge variant="outline" className="border-[#0AF3FF]/30 text-[#0AF3FF]">
                                {quest.track}
                              </Badge>
                              <Badge variant="outline" className="border-gray-500/30 text-gray-400">
                                {quest.difficulty}
                              </Badge>
                              <span className="text-gray-400">{quest.completions} completions</span>
                              {quest.deadline && (
                                <div className="flex items-center gap-1 text-gray-400">
                                  <Calendar className="w-4 h-4" />
                                  {quest.deadline}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

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

                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                              <Copy className="w-4 h-4" />
                            </Button>
                            {quest.status === 'active' ? (
                              <Button size="sm" variant="ghost" className="text-yellow-400 hover:text-yellow-300">
                                <Pause className="w-4 h-4" />
                              </Button>
                            ) : quest.status === 'paused' ? (
                              <Button size="sm" variant="ghost" className="text-green-400 hover:text-green-300">
                                <Play className="w-4 h-4" />
                              </Button>
                            ) : null}
                            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                              <Archive className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            /* Quest Builder */
            <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Create New Quest</h2>
                  <Button
                    variant="ghost"
                    onClick={() => setView('list')}
                    className="text-gray-400 hover:text-white"
                  >
                    Cancel
                  </Button>
                </div>

                <div className="space-y-6">
                  {/* Title */}
                  <div>
                    <label className="block text-white mb-2">Quest Title *</label>
                    <Input
                      placeholder="Enter quest title"
                      className="bg-[#1a1a1a] border-[#0AF3FF]/20 text-white"
                    />
                  </div>

                  {/* Track & Difficulty */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white mb-2">Track *</label>
                      <select className="w-full bg-[#1a1a1a] border border-[#0AF3FF]/20 rounded-lg px-4 py-2 text-white">
                        <option>Developer</option>
                        <option>Creator</option>
                        <option>General</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white mb-2">Difficulty *</label>
                      <select className="w-full bg-[#1a1a1a] border border-[#0AF3FF]/20 rounded-lg px-4 py-2 text-white">
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                      </select>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-white mb-2">Description *</label>
                    <Textarea
                      placeholder="Provide detailed instructions for completing this quest..."
                      rows={6}
                      className="bg-[#1a1a1a] border-[#0AF3FF]/20 text-white"
                    />
                    <p className="text-xs text-gray-400 mt-1">Supports Markdown formatting</p>
                  </div>

                  {/* Quest Type */}
                  <div>
                    <label className="block text-white mb-2">Quest Type *</label>
                    <select className="w-full bg-[#1a1a1a] border border-[#0AF3FF]/20 rounded-lg px-4 py-2 text-white">
                      <option>Reading</option>
                      <option>Quiz</option>
                      <option>Submission</option>
                      <option>Social Verification</option>
                      <option>Wallet Interaction</option>
                    </select>
                  </div>

                  {/* Rewards */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white mb-2">ManXP Reward *</label>
                      <Input
                        type="number"
                        placeholder="500"
                        className="bg-[#1a1a1a] border-[#0AF3FF]/20 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2">ManCoins Reward *</label>
                      <Input
                        type="number"
                        placeholder="100"
                        className="bg-[#1a1a1a] border-[#0AF3FF]/20 text-white"
                      />
                    </div>
                  </div>

                  {/* Time Rules */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white mb-2">Start Date (Optional)</label>
                      <Input
                        type="date"
                        className="bg-[#1a1a1a] border-[#0AF3FF]/20 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2">Expiry Date (Optional)</label>
                      <Input
                        type="date"
                        className="bg-[#1a1a1a] border-[#0AF3FF]/20 text-white"
                      />
                    </div>
                  </div>

                  {/* Visibility */}
                  <div>
                    <label className="block text-white mb-2">Visibility</label>
                    <select className="w-full bg-[#1a1a1a] border border-[#0AF3FF]/20 rounded-lg px-4 py-2 text-white">
                      <option>Public</option>
                      <option>Track Only</option>
                      <option>Invite Only</option>
                    </select>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 pt-6">
                    <Button className="flex-1 bg-[#0AF3FF] text-black hover:bg-[#0AF3FF]/90">
                      Publish Quest
                    </Button>
                    <Button variant="outline" className="border-[#0AF3FF] text-[#0AF3FF]">
                      Save as Draft
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
