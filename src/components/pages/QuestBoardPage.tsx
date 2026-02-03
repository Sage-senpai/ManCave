import { useState } from 'react';
import { QuestCard, Quest } from '../QuestCard';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Search, Filter, SlidersHorizontal, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

interface QuestBoardPageProps {
  onNavigate?: (page: string) => void;
}

export function QuestBoardPage({ onNavigate }: QuestBoardPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allQuests: Quest[] = [
    {
      id: '1',
      title: 'Setup Your First Polkadot Wallet',
      description: 'Install SubWallet or Talisman and create your first Polkadot account. Learn about wallet security and seed phrase management.',
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
      description: 'Complete the interactive tutorial on Substrate basics and understand how Polkadot parachains are built.',
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
      description: 'Create and publish an article about Mandala Chain features, use cases, or technical architecture.',
      category: 'creator',
      difficulty: 'beginner',
      xpReward: 750,
      coinReward: 200,
      progress: 0,
      status: 'not-started',
      deadline: '7 days',
    },
    {
      id: '4',
      title: 'Deploy a Smart Contract',
      description: 'Write and deploy your first smart contract on Mandala Chain testnet using Solidity or ink!',
      category: 'dev',
      difficulty: 'advanced',
      xpReward: 2000,
      coinReward: 500,
      progress: 0,
      status: 'not-started',
    },
    {
      id: '5',
      title: 'Create a Mandala Explainer Video',
      description: 'Produce a video explaining a key feature of Mandala Chain for the community.',
      category: 'creator',
      difficulty: 'intermediate',
      xpReward: 1500,
      coinReward: 400,
      progress: 0,
      status: 'not-started',
      deadline: '14 days',
    },
    {
      id: '6',
      title: 'Understanding Cross-Chain Communication',
      description: 'Learn how XCMP works and complete the cross-chain messaging tutorial.',
      category: 'general',
      difficulty: 'intermediate',
      xpReward: 1200,
      coinReward: 300,
      progress: 100,
      status: 'completed',
    },
    {
      id: '7',
      title: 'Build a Frontend DApp',
      description: 'Create a frontend application that interacts with Polkadot.js and Mandala Chain.',
      category: 'dev',
      difficulty: 'advanced',
      xpReward: 2500,
      coinReward: 600,
      progress: 0,
      status: 'not-started',
    },
    {
      id: '8',
      title: 'Design Mandala Brand Assets',
      description: 'Create custom graphics, logos, or promotional materials for the Mandala ecosystem.',
      category: 'creator',
      difficulty: 'intermediate',
      xpReward: 1000,
      coinReward: 250,
      progress: 100,
      status: 'graded',
    },
  ];

  const filteredQuests = allQuests.filter(quest => {
    const matchesCategory = selectedCategory === 'all' || quest.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || quest.difficulty === selectedDifficulty;
    const matchesStatus = selectedStatus === 'all' || quest.status === selectedStatus;
    const matchesSearch = quest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         quest.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesDifficulty && matchesStatus && matchesSearch;
  });

  const categories = [
    { value: 'all', label: 'All Quests', count: allQuests.length },
    { value: 'dev', label: 'Developer', count: allQuests.filter(q => q.category === 'dev').length },
    { value: 'creator', label: 'Creator', count: allQuests.filter(q => q.category === 'creator').length },
    { value: 'general', label: 'General', count: allQuests.filter(q => q.category === 'general').length },
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
            <h1 className="text-4xl font-bold text-white mb-2">Quest Board</h1>
            <p className="text-gray-400">
              Complete quests to earn ManXP, ManCoins, and unlock achievements
            </p>
          </motion.div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search quests..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 bg-[#0a0a0a] border-[#0AF3FF]/20 text-white placeholder:text-gray-500 focus:border-[#0AF3FF]"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? 'default' : 'outline'}
                className={
                  selectedCategory === category.value
                    ? 'bg-[#0AF3FF] text-black hover:bg-[#0AF3FF]/90'
                    : 'border-[#0AF3FF]/20 text-gray-400 hover:text-white hover:border-[#0AF3FF]/50'
                }
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.label}
                <Badge
                  className="ml-2 bg-black/20 text-current border-0"
                >
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Additional Filters */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">Filters:</span>
            </div>
            
            {/* Difficulty Filter */}
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="bg-[#0a0a0a] border border-[#0AF3FF]/20 rounded-lg px-4 py-2 text-sm text-white focus:border-[#0AF3FF] outline-none"
            >
              <option value="all">All Difficulties</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>

            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-[#0a0a0a] border border-[#0AF3FF]/20 rounded-lg px-4 py-2 text-sm text-white focus:border-[#0AF3FF] outline-none"
            >
              <option value="all">All Status</option>
              <option value="not-started">Not Started</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="graded">Graded</option>
            </select>

            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white"
              onClick={() => {
                setSelectedCategory('all');
                setSelectedDifficulty('all');
                setSelectedStatus('all');
                setSearchQuery('');
              }}
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Quest Grid */}
        {filteredQuests.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredQuests.map((quest, index) => (
              <motion.div
                key={quest.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <QuestCard quest={quest} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No quests found
            </h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your filters or search query
            </p>
            <Button
              className="bg-[#0AF3FF] text-black hover:bg-[#0AF3FF]/90"
              onClick={() => {
                setSelectedCategory('all');
                setSelectedDifficulty('all');
                setSelectedStatus('all');
                setSearchQuery('');
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}