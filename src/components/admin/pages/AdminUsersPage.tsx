import { AdminSidebar } from '../AdminSidebar';
import { Card } from '../../ui/card';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Badge } from '../../ui/badge';
import {
  Search,
  UserPlus,
  MessageSquare,
  Trophy,
  Target,
  Mail,
  Shield
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface AdminUsersPageProps {
  onNavigate: (page: string) => void;
  currentAdminPage: string;
}

export function AdminUsersPage({ onNavigate, currentAdminPage }: AdminUsersPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTrack, setFilterTrack] = useState('all');

  const users = [
    {
      id: 1,
      name: 'CryptoNinja',
      avatar: '🥷',
      track: 'dev',
      xp: 12500,
      level: 15,
      questsCompleted: 34,
      trustScore: 95,
      mentor: 'Dev Mentor - Sarah',
      joinedDate: '2026-01-10',
      lastActive: '2h ago',
      status: 'active',
    },
    {
      id: 2,
      name: 'BlockchainMaster',
      avatar: '🧙',
      track: 'dev',
      xp: 11200,
      level: 14,
      questsCompleted: 28,
      trustScore: 88,
      mentor: 'Dev Mentor - Sarah',
      joinedDate: '2026-01-12',
      lastActive: '1d ago',
      status: 'active',
    },
    {
      id: 3,
      name: 'Web3Dev',
      avatar: '👨‍💻',
      track: 'dev',
      xp: 10800,
      level: 13,
      questsCompleted: 26,
      trustScore: 92,
      mentor: null,
      joinedDate: '2026-01-15',
      lastActive: '3h ago',
      status: 'active',
    },
    {
      id: 4,
      name: 'ContentCreator',
      avatar: '🎨',
      track: 'creator',
      xp: 9500,
      level: 12,
      questsCompleted: 22,
      trustScore: 87,
      mentor: 'Creator Mentor - Alex',
      joinedDate: '2026-01-18',
      lastActive: '5h ago',
      status: 'active',
    },
  ];

  const mentors = [
    { id: 1, name: 'Dev Mentor - Sarah', track: 'dev', capacity: 3, assigned: 2 },
    { id: 2, name: 'Creator Mentor - Alex', track: 'creator', capacity: 4, assigned: 1 },
    { id: 3, name: 'Dev Mentor - Mike', track: 'dev', capacity: 3, assigned: 0 },
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTrack = filterTrack === 'all' || user.track === filterTrack;
    return matchesSearch && matchesTrack;
  });

  return (
    <div className="flex min-h-screen bg-black">
      <AdminSidebar currentPage={currentAdminPage} onNavigate={onNavigate} />
      
      <div className="flex-1 pt-24 pb-12 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Users & Mentorship</h1>
            <p className="text-gray-400">Manage users and assign mentors</p>
          </div>

          {/* Mentor Overview */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {mentors.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-white font-medium">{mentor.name}</h3>
                      <Badge className="bg-[#0AF3FF]/20 text-[#0AF3FF]">
                        {mentor.track}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Capacity</span>
                      <span className="text-white">
                        {mentor.assigned} / {mentor.capacity}
                      </span>
                    </div>
                    <div className="mt-2 h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#0AF3FF] to-[#0880FF]"
                        style={{ width: `${(mentor.assigned / mentor.capacity) * 100}%` }}
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search users..."
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
            </select>
          </div>

          {/* User List */}
          <div className="grid gap-4">
            {filteredUsers.map((user, index) => (
              <motion.div
                key={user.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 hover:border-[#0AF3FF]/40 transition-all">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Avatar */}
                      <div className="text-5xl">{user.avatar}</div>

                      {/* Main Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl text-white font-bold mb-2">{user.name}</h3>
                            <div className="flex flex-wrap items-center gap-3">
                              <Badge variant="outline" className="border-[#0AF3FF]/30 text-[#0AF3FF]">
                                {user.track} • Level {user.level}
                              </Badge>
                              <Badge className="bg-green-500/20 text-green-400">
                                {user.status}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <p className="text-xs text-gray-400 mb-1">Total XP</p>
                            <div className="flex items-center gap-1">
                              <Trophy className="w-4 h-4 text-yellow-400" />
                              <span className="text-white font-medium">{user.xp.toLocaleString()}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-gray-400 mb-1">Quests</p>
                            <div className="flex items-center gap-1">
                              <Target className="w-4 h-4 text-[#0AF3FF]" />
                              <span className="text-white font-medium">{user.questsCompleted}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-gray-400 mb-1">Trust Score</p>
                            <span className="text-green-400 font-medium">{user.trustScore}%</span>
                          </div>
                          <div>
                            <p className="text-xs text-gray-400 mb-1">Last Active</p>
                            <span className="text-white font-medium">{user.lastActive}</span>
                          </div>
                        </div>

                        {/* Mentor Info */}
                        <div className="flex items-center justify-between pt-4 border-t border-[#0AF3FF]/10">
                          <div className="flex items-center gap-2 text-sm">
                            {user.mentor ? (
                              <>
                                <Shield className="w-4 h-4 text-[#0AF3FF]" />
                                <span className="text-gray-400">Mentor:</span>
                                <span className="text-white">{user.mentor}</span>
                              </>
                            ) : (
                              <>
                                <Shield className="w-4 h-4 text-gray-500" />
                                <span className="text-gray-400">No mentor assigned</span>
                              </>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-[#0AF3FF] text-[#0AF3FF] gap-2"
                            >
                              <UserPlus className="w-4 h-4" />
                              <span className="hidden sm:inline">Assign Mentor</span>
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-[#0AF3FF] text-[#0AF3FF] gap-2"
                              onClick={() => onNavigate('chat')}
                            >
                              <MessageSquare className="w-4 h-4" />
                              <span className="hidden sm:inline">Chat</span>
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-[#0AF3FF] text-[#0AF3FF] gap-2"
                            >
                              <Mail className="w-4 h-4" />
                              <span className="hidden sm:inline">Email</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
