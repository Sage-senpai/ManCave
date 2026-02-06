import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { 
  Book, 
  Video, 
  FileText, 
  Code, 
  Users, 
  Globe,
  Search,
  ExternalLink,
  BookOpen,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface KnowledgeHubPageProps {
  onNavigate?: (page: string) => void;
}

export function KnowledgeHubPage({ onNavigate: _onNavigate }: KnowledgeHubPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Resources', icon: Book },
    { id: 'blockchain', label: 'Blockchain Basics', icon: BookOpen },
    { id: 'smart-contracts', label: 'Smart Contracts', icon: Code },
    { id: 'cross-chain', label: 'Cross-Chain', icon: Globe },
    { id: 'identity', label: 'Identity', icon: Users },
  ];

  const resources = [
    {
      id: 1,
      title: 'Introduction to Mandala Chain',
      description: 'Learn the fundamentals of Mandala Chain and its role in the Polkadot ecosystem',
      category: 'blockchain',
      type: 'article',
      duration: '10 min read',
      difficulty: 'beginner',
      url: '#',
    },
    {
      id: 2,
      title: 'Substrate Framework Deep Dive',
      description: 'Comprehensive guide to building on Substrate, the framework powering Mandala',
      category: 'blockchain',
      type: 'video',
      duration: '45 min',
      difficulty: 'intermediate',
      url: '#',
    },
    {
      id: 3,
      title: 'Writing Smart Contracts with ink!',
      description: 'Step-by-step tutorial on developing smart contracts using Rust and ink!',
      category: 'smart-contracts',
      type: 'tutorial',
      duration: '2 hours',
      difficulty: 'advanced',
      url: '#',
    },
    {
      id: 4,
      title: 'Solidity on Mandala Chain',
      description: 'Deploy Ethereum-compatible smart contracts on Mandala\'s EVM environment',
      category: 'smart-contracts',
      type: 'article',
      duration: '20 min read',
      difficulty: 'intermediate',
      url: '#',
    },
    {
      id: 5,
      title: 'Understanding XCMP',
      description: 'Cross-Consensus Message Passing explained for developers',
      category: 'cross-chain',
      type: 'video',
      duration: '30 min',
      difficulty: 'intermediate',
      url: '#',
    },
    {
      id: 6,
      title: 'Decentralized Identity Systems',
      description: 'Building identity solutions on Mandala Chain',
      category: 'identity',
      type: 'tutorial',
      duration: '1.5 hours',
      difficulty: 'advanced',
      url: '#',
    },
    {
      id: 7,
      title: 'Polkadot.js API Guide',
      description: 'Complete reference for interacting with Polkadot and Mandala via JavaScript',
      category: 'blockchain',
      type: 'documentation',
      duration: '30 min read',
      difficulty: 'intermediate',
      url: '#',
    },
    {
      id: 8,
      title: 'Cross-Chain Asset Transfers',
      description: 'How to transfer assets between Mandala and other parachains',
      category: 'cross-chain',
      type: 'tutorial',
      duration: '25 min read',
      difficulty: 'beginner',
      url: '#',
    },
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const typeIcons = {
    article: FileText,
    video: Video,
    tutorial: Code,
    documentation: Book,
  };

  const difficultyColors = {
    beginner: 'bg-green-500/20 text-green-400',
    intermediate: 'bg-yellow-500/20 text-yellow-400',
    advanced: 'bg-red-500/20 text-red-400',
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-white mb-2">Knowledge Hub</h1>
            <p className="text-gray-400">
              Curated learning resources about Mandala Chain and the Polkadot ecosystem
            </p>
          </motion.div>
        </div>

        {/* Featured Section */}
        <Card className="bg-gradient-to-br from-[#0AF3FF]/10 to-[#0880FF]/10 border-[#0AF3FF]/30 mb-8 overflow-hidden">
          <div className="p-8">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0AF3FF] to-[#0880FF] flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-10 h-10 text-black" />
              </div>
              <div className="flex-1">
                <Badge className="bg-[#0AF3FF] text-black mb-3">Featured</Badge>
                <h2 className="text-2xl font-bold text-white mb-3">
                  Getting Started with Mandala Chain Development
                </h2>
                <p className="text-gray-300 mb-4">
                  A comprehensive guide covering everything from wallet setup to deploying your first smart contract. 
                  Perfect for developers new to the Polkadot ecosystem.
                </p>
                <Button className="bg-[#0AF3FF] text-black hover:bg-[#0AF3FF]/90">
                  Start Learning
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 bg-[#0a0a0a] border-[#0AF3FF]/20 text-white placeholder:text-gray-500 focus:border-[#0AF3FF]"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                className={
                  selectedCategory === category.id
                    ? 'bg-[#0AF3FF] text-black hover:bg-[#0AF3FF]/90'
                    : 'border-[#0AF3FF]/20 text-gray-400 hover:text-white hover:border-[#0AF3FF]/50'
                }
                onClick={() => setSelectedCategory(category.id)}
              >
                <Icon className="w-4 h-4 mr-2" />
                {category.label}
              </Button>
            );
          })}
        </div>

        {/* Resources Grid */}
        {filteredResources.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => {
              const TypeIcon = typeIcons[resource.type as keyof typeof typeIcons];
              
              return (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 hover:border-[#0AF3FF]/50 transition-all cursor-pointer group h-full">
                    <div className="p-6 flex flex-col h-full">
                      {/* Icon and Type */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0AF3FF] to-[#0880FF] flex items-center justify-center">
                          <TypeIcon className="w-6 h-6 text-black" />
                        </div>
                        <Badge className={difficultyColors[resource.difficulty as keyof typeof difficultyColors]}>
                          {resource.difficulty}
                        </Badge>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-white font-bold mb-2 group-hover:text-[#0AF3FF] transition-colors">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                          {resource.description}
                        </p>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-[#0AF3FF]/10">
                        <span className="text-xs text-gray-400">{resource.duration}</span>
                        <Badge variant="outline" className="border-[#0AF3FF]/30 text-[#0AF3FF] text-xs">
                          {resource.type}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No resources found
            </h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search or filter
            </p>
            <Button
              className="bg-[#0AF3FF] text-black hover:bg-[#0AF3FF]/90"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Quick Links Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Links</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Official Docs', icon: Book, url: '#', color: 'from-blue-500 to-blue-600' },
              { title: 'GitHub', icon: Code, url: '#', color: 'from-purple-500 to-purple-600' },
              { title: 'Community Forum', icon: Users, url: '#', color: 'from-green-500 to-green-600' },
              { title: 'Developer Portal', icon: Globe, url: '#', color: 'from-[#0AF3FF] to-[#0880FF]' },
            ].map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 hover:border-[#0AF3FF]/50 transition-all cursor-pointer group">
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-white font-medium">{link.title}</span>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#0AF3FF] transition-colors" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
