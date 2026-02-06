import { AdminSidebar } from '../AdminSidebar';
import { Card } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Input } from '../../ui/input';
import {
  FileText,
  Link as LinkIcon,
  Video,
  BookOpen,
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  Calendar,
  Tag,
  ExternalLink,
  MoreVertical
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../ui/dialog';
import { Label } from '../../ui/label';
import { Tabs, TabsList, TabsTrigger } from '../../ui/tabs';

interface AdminContentPageProps {
  onNavigate: (page: string) => void;
  currentAdminPage: string;
}

type ContentType = 'article' | 'tutorial' | 'video' | 'link' | 'documentation';
type ContentStatus = 'draft' | 'published' | 'archived';

interface ContentItem {
  id: string;
  title: string;
  type: ContentType;
  category: string;
  status: ContentStatus;
  author: string;
  createdAt: string;
  updatedAt: string;
  views: number;
  tags: string[];
}

export function AdminContentPage({ onNavigate, currentAdminPage }: AdminContentPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<ContentType | 'all'>('all');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'Introduction to Mandala Chain',
      type: 'article',
      category: 'Blockchain Basics',
      status: 'published',
      author: 'Admin',
      createdAt: '2024-01-15',
      updatedAt: '2024-01-20',
      views: 1250,
      tags: ['mandala', 'introduction', 'basics']
    },
    {
      id: '2',
      title: 'Building Your First Smart Contract',
      type: 'tutorial',
      category: 'Smart Contracts',
      status: 'published',
      author: 'Dev Team',
      createdAt: '2024-01-10',
      updatedAt: '2024-01-18',
      views: 890,
      tags: ['smart-contracts', 'development', 'tutorial']
    },
    {
      id: '3',
      title: 'Understanding Polkadot Parachains',
      type: 'video',
      category: 'Cross-Chain',
      status: 'published',
      author: 'Content Team',
      createdAt: '2024-01-08',
      updatedAt: '2024-01-08',
      views: 2100,
      tags: ['polkadot', 'parachains', 'video']
    },
    {
      id: '4',
      title: 'Mandala Chain Developer Docs',
      type: 'link',
      category: 'Documentation',
      status: 'published',
      author: 'System',
      createdAt: '2024-01-01',
      updatedAt: '2024-01-25',
      views: 5600,
      tags: ['docs', 'developer', 'reference']
    },
    {
      id: '5',
      title: 'Identity Verification Guide',
      type: 'documentation',
      category: 'Identity',
      status: 'draft',
      author: 'Admin',
      createdAt: '2024-01-22',
      updatedAt: '2024-01-22',
      views: 0,
      tags: ['identity', 'verification', 'guide']
    },
    {
      id: '6',
      title: 'Web3 Wallet Security Best Practices',
      type: 'article',
      category: 'Security',
      status: 'archived',
      author: 'Security Team',
      createdAt: '2023-12-15',
      updatedAt: '2024-01-05',
      views: 3200,
      tags: ['security', 'wallet', 'best-practices']
    }
  ];

  const getTypeIcon = (type: ContentType) => {
    switch (type) {
      case 'article': return FileText;
      case 'tutorial': return BookOpen;
      case 'video': return Video;
      case 'link': return LinkIcon;
      case 'documentation': return FileText;
      default: return FileText;
    }
  };

  const getStatusColor = (status: ContentStatus) => {
    switch (status) {
      case 'published': return 'bg-green-500/20 text-green-400';
      case 'draft': return 'bg-yellow-500/20 text-yellow-400';
      case 'archived': return 'bg-gray-500/20 text-gray-400';
    }
  };

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesType = selectedType === 'all' || item.type === selectedType;
    return matchesSearch && matchesType;
  });

  const stats = {
    total: contentItems.length,
    published: contentItems.filter(c => c.status === 'published').length,
    drafts: contentItems.filter(c => c.status === 'draft').length,
    totalViews: contentItems.reduce((acc, c) => acc + c.views, 0)
  };

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
              <h1 className="text-4xl font-bold text-white mb-2">Content Hub</h1>
              <p className="text-gray-400">
                Manage educational content, docs, and resources
              </p>
            </motion.div>

            <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-[#0AF3FF] text-black hover:bg-[#0AF3FF]/90 gap-2">
                  <Plus className="w-4 h-4" />
                  Add Content
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-[#0a0a0a] border-[#0AF3FF]/20 text-white max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">Add New Content</DialogTitle>
                </DialogHeader>
                <div className="space-y-6 py-4">
                  <div className="space-y-2">
                    <Label>Title</Label>
                    <Input
                      placeholder="Enter content title"
                      className="bg-black/50 border-[#0AF3FF]/20"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Content Type</Label>
                      <select className="w-full h-10 px-3 rounded-md bg-black/50 border border-[#0AF3FF]/20 text-white">
                        <option value="article">Article</option>
                        <option value="tutorial">Tutorial</option>
                        <option value="video">Video</option>
                        <option value="link">External Link</option>
                        <option value="documentation">Documentation</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label>Category</Label>
                      <select className="w-full h-10 px-3 rounded-md bg-black/50 border border-[#0AF3FF]/20 text-white">
                        <option value="blockchain-basics">Blockchain Basics</option>
                        <option value="smart-contracts">Smart Contracts</option>
                        <option value="cross-chain">Cross-Chain</option>
                        <option value="identity">Identity</option>
                        <option value="security">Security</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Description</Label>
                    <textarea
                      placeholder="Enter content description..."
                      className="w-full h-24 px-3 py-2 rounded-md bg-black/50 border border-[#0AF3FF]/20 text-white resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>URL / Content Link</Label>
                    <Input
                      placeholder="https://..."
                      className="bg-black/50 border-[#0AF3FF]/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Tags (comma separated)</Label>
                    <Input
                      placeholder="mandala, blockchain, tutorial"
                      className="bg-black/50 border-[#0AF3FF]/20"
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-4">
                    <Button variant="outline" onClick={() => setIsCreateModalOpen(false)}>
                      Cancel
                    </Button>
                    <Button
                      variant="outline"
                      className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10"
                    >
                      Save as Draft
                    </Button>
                    <Button className="bg-[#0AF3FF] text-black hover:bg-[#0AF3FF]/90">
                      Publish
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-4">
              <div className="text-2xl font-bold text-white">{stats.total}</div>
              <div className="text-sm text-gray-400">Total Content</div>
            </Card>
            <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-4">
              <div className="text-2xl font-bold text-green-400">{stats.published}</div>
              <div className="text-sm text-gray-400">Published</div>
            </Card>
            <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-4">
              <div className="text-2xl font-bold text-yellow-400">{stats.drafts}</div>
              <div className="text-sm text-gray-400">Drafts</div>
            </Card>
            <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-4">
              <div className="text-2xl font-bold text-[#0AF3FF]">{stats.totalViews.toLocaleString()}</div>
              <div className="text-sm text-gray-400">Total Views</div>
            </Card>
          </div>

          {/* Filters */}
          <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-4 mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-black/50 border-[#0AF3FF]/20"
                />
              </div>
              <Tabs value={selectedType} onValueChange={(v) => setSelectedType(v as ContentType | 'all')}>
                <TabsList className="bg-black/50 border border-[#0AF3FF]/20">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="article">Articles</TabsTrigger>
                  <TabsTrigger value="tutorial">Tutorials</TabsTrigger>
                  <TabsTrigger value="video">Videos</TabsTrigger>
                  <TabsTrigger value="link">Links</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </Card>

          {/* Content List */}
          <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20">
            <div className="divide-y divide-[#0AF3FF]/10">
              {filteredContent.map((item, index) => {
                const TypeIcon = getTypeIcon(item.type);
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#0AF3FF]/10 flex items-center justify-center flex-shrink-0">
                        <TypeIcon className="w-5 h-5 text-[#0AF3FF]" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-semibold text-white truncate">{item.title}</h3>
                            <div className="flex items-center gap-2 mt-1 text-sm text-gray-400">
                              <span>{item.category}</span>
                              <span>•</span>
                              <span>by {item.author}</span>
                              <span>•</span>
                              <Calendar className="w-3 h-3" />
                              <span>{item.updatedAt}</span>
                            </div>
                          </div>
                          <Badge className={getStatusColor(item.status)}>
                            {item.status}
                          </Badge>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-2">
                            {item.tags.slice(0, 3).map(tag => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs border-[#0AF3FF]/30 text-gray-400"
                              >
                                <Tag className="w-3 h-3 mr-1" />
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-400 flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {item.views.toLocaleString()}
                            </span>

                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <MoreVertical className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end" className="bg-[#0a0a0a] border-[#0AF3FF]/20">
                                <DropdownMenuItem className="text-white hover:bg-white/10">
                                  <Edit className="w-4 h-4 mr-2" />
                                  Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-white hover:bg-white/10">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  View
                                </DropdownMenuItem>
                                {item.status === 'published' ? (
                                  <DropdownMenuItem className="text-yellow-400 hover:bg-yellow-500/10">
                                    <EyeOff className="w-4 h-4 mr-2" />
                                    Unpublish
                                  </DropdownMenuItem>
                                ) : (
                                  <DropdownMenuItem className="text-green-400 hover:bg-green-500/10">
                                    <Eye className="w-4 h-4 mr-2" />
                                    Publish
                                  </DropdownMenuItem>
                                )}
                                <DropdownMenuItem className="text-red-400 hover:bg-red-500/10">
                                  <Trash2 className="w-4 h-4 mr-2" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {filteredContent.length === 0 && (
                <div className="p-12 text-center">
                  <FileText className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-white mb-2">No content found</h3>
                  <p className="text-gray-400">Try adjusting your search or filters</p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
