import { AdminSidebar } from '../AdminSidebar';
import { Card } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import {
  Megaphone,
  Plus,
  Send,
  Clock,
  Users,
  Edit,
  Trash2,
  Eye,
  Calendar,
  Bell,
  Mail,
  Smartphone,
  CheckCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../ui/dialog';

interface AdminAnnouncementsPageProps {
  onNavigate: (page: string) => void;
  currentAdminPage: string;
}

type AnnouncementStatus = 'draft' | 'scheduled' | 'sent' | 'cancelled';
type AudienceType = 'all' | 'dev' | 'creator' | 'new-users' | 'inactive';

interface Announcement {
  id: string;
  title: string;
  content: string;
  audience: AudienceType;
  status: AnnouncementStatus;
  channels: ('in-app' | 'email' | 'push')[];
  scheduledFor?: string;
  sentAt?: string;
  readCount?: number;
  totalRecipients?: number;
  createdBy: string;
}

export function AdminAnnouncementsPage({ onNavigate, currentAdminPage }: AdminAnnouncementsPageProps) {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedChannels, setSelectedChannels] = useState<string[]>(['in-app']);

  const announcements: Announcement[] = [
    {
      id: '1',
      title: 'New Quest Series: Advanced Smart Contracts',
      content: 'We are excited to announce our new advanced smart contract quest series...',
      audience: 'dev',
      status: 'sent',
      channels: ['in-app', 'email'],
      sentAt: '2024-01-25 14:00',
      readCount: 1250,
      totalRecipients: 2100,
      createdBy: 'Admin'
    },
    {
      id: '2',
      title: 'Platform Maintenance - Jan 28',
      content: 'Scheduled maintenance on January 28th from 2:00 AM to 4:00 AM UTC...',
      audience: 'all',
      status: 'scheduled',
      channels: ['in-app', 'email', 'push'],
      scheduledFor: '2024-01-27 10:00',
      createdBy: 'System Admin'
    },
    {
      id: '3',
      title: 'Creator Track: New Video Quest',
      content: 'Attention all creators! We have added a new video creation quest...',
      audience: 'creator',
      status: 'sent',
      channels: ['in-app'],
      sentAt: '2024-01-20 09:00',
      readCount: 890,
      totalRecipients: 1500,
      createdBy: 'Content Team'
    },
    {
      id: '4',
      title: 'Welcome Back Campaign',
      content: 'We miss you! Come back and claim your bonus XP...',
      audience: 'inactive',
      status: 'draft',
      channels: ['email'],
      createdBy: 'Marketing'
    },
    {
      id: '5',
      title: 'Double XP Weekend',
      content: 'This weekend only: earn double XP on all quests!',
      audience: 'all',
      status: 'cancelled',
      channels: ['in-app', 'push'],
      createdBy: 'Admin'
    }
  ];

  const getStatusColor = (status: AnnouncementStatus) => {
    switch (status) {
      case 'sent': return 'bg-green-500/20 text-green-400';
      case 'scheduled': return 'bg-blue-500/20 text-blue-400';
      case 'draft': return 'bg-yellow-500/20 text-yellow-400';
      case 'cancelled': return 'bg-red-500/20 text-red-400';
    }
  };

  const getAudienceLabel = (audience: AudienceType) => {
    switch (audience) {
      case 'all': return 'All Users';
      case 'dev': return 'Developer Track';
      case 'creator': return 'Creator Track';
      case 'new-users': return 'New Users';
      case 'inactive': return 'Inactive Users';
    }
  };

  const toggleChannel = (channel: string) => {
    setSelectedChannels(prev =>
      prev.includes(channel)
        ? prev.filter(c => c !== channel)
        : [...prev, channel]
    );
  };

  const stats = {
    totalSent: announcements.filter(a => a.status === 'sent').length,
    scheduled: announcements.filter(a => a.status === 'scheduled').length,
    drafts: announcements.filter(a => a.status === 'draft').length,
    avgReadRate: '67%'
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
              <h1 className="text-4xl font-bold text-white mb-2">Announcements</h1>
              <p className="text-gray-400">
                Broadcast messages to users across the platform
              </p>
            </motion.div>

            <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-[#0AF3FF] text-black hover:bg-[#0AF3FF]/90 gap-2">
                  <Plus className="w-4 h-4" />
                  New Announcement
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-[#0a0a0a] border-[#0AF3FF]/20 text-white max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                    <Megaphone className="w-6 h-6 text-[#0AF3FF]" />
                    Create Announcement
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6 py-4">
                  <div className="space-y-2">
                    <Label>Title</Label>
                    <Input
                      placeholder="Announcement title..."
                      className="bg-black/50 border-[#0AF3FF]/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Message</Label>
                    <textarea
                      placeholder="Write your announcement message..."
                      className="w-full h-32 px-3 py-2 rounded-md bg-black/50 border border-[#0AF3FF]/20 text-white resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Target Audience</Label>
                      <select className="w-full h-10 px-3 rounded-md bg-black/50 border border-[#0AF3FF]/20 text-white">
                        <option value="all">All Users</option>
                        <option value="dev">Developer Track</option>
                        <option value="creator">Creator Track</option>
                        <option value="new-users">New Users (Last 7 days)</option>
                        <option value="inactive">Inactive Users (30+ days)</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label>Schedule</Label>
                      <Input
                        type="datetime-local"
                        className="bg-black/50 border-[#0AF3FF]/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Delivery Channels</Label>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleChannel('in-app')}
                        className={`gap-2 ${selectedChannels.includes('in-app') ? 'border-[#0AF3FF] text-[#0AF3FF]' : 'border-gray-600'}`}
                      >
                        <Bell className="w-4 h-4" />
                        In-App
                        {selectedChannels.includes('in-app') && <CheckCircle className="w-3 h-3" />}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleChannel('email')}
                        className={`gap-2 ${selectedChannels.includes('email') ? 'border-[#0AF3FF] text-[#0AF3FF]' : 'border-gray-600'}`}
                      >
                        <Mail className="w-4 h-4" />
                        Email
                        {selectedChannels.includes('email') && <CheckCircle className="w-3 h-3" />}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleChannel('push')}
                        className={`gap-2 ${selectedChannels.includes('push') ? 'border-[#0AF3FF] text-[#0AF3FF]' : 'border-gray-600'}`}
                      >
                        <Smartphone className="w-4 h-4" />
                        Push
                        {selectedChannels.includes('push') && <CheckCircle className="w-3 h-3" />}
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-4 border-t border-[#0AF3FF]/10">
                    <Button variant="outline" onClick={() => setIsCreateModalOpen(false)}>
                      Cancel
                    </Button>
                    <Button variant="outline" className="border-yellow-500 text-yellow-400">
                      Save Draft
                    </Button>
                    <Button className="bg-[#0AF3FF] text-black hover:bg-[#0AF3FF]/90 gap-2">
                      <Send className="w-4 h-4" />
                      Send Now
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-400">Sent</span>
              </div>
              <div className="text-2xl font-bold text-white">{stats.totalSent}</div>
            </Card>
            <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-400">Scheduled</span>
              </div>
              <div className="text-2xl font-bold text-white">{stats.scheduled}</div>
            </Card>
            <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Edit className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-400">Drafts</span>
              </div>
              <div className="text-2xl font-bold text-white">{stats.drafts}</div>
            </Card>
            <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-4 h-4 text-[#0AF3FF]" />
                <span className="text-sm text-gray-400">Avg Read Rate</span>
              </div>
              <div className="text-2xl font-bold text-white">{stats.avgReadRate}</div>
            </Card>
          </div>

          {/* Announcements List */}
          <Tabs defaultValue="all" className="space-y-6">
            <TabsList className="bg-[#0a0a0a] border border-[#0AF3FF]/20">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="sent">Sent</TabsTrigger>
              <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
              <TabsTrigger value="drafts">Drafts</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20">
                <div className="divide-y divide-[#0AF3FF]/10">
                  {announcements.map((announcement, index) => (
                    <motion.div
                      key={announcement.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="p-4 hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="w-10 h-10 rounded-lg bg-[#0AF3FF]/10 flex items-center justify-center flex-shrink-0">
                            <Megaphone className="w-5 h-5 text-[#0AF3FF]" />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                              <h3 className="font-semibold text-white">{announcement.title}</h3>
                              <Badge className={getStatusColor(announcement.status)}>
                                {announcement.status}
                              </Badge>
                            </div>

                            <p className="text-sm text-gray-400 line-clamp-1 mb-2">
                              {announcement.content}
                            </p>

                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                {getAudienceLabel(announcement.audience)}
                              </span>
                              <span className="flex items-center gap-1">
                                {announcement.channels.map(ch => (
                                  ch === 'in-app' ? <Bell key={ch} className="w-3 h-3" /> :
                                  ch === 'email' ? <Mail key={ch} className="w-3 h-3" /> :
                                  <Smartphone key={ch} className="w-3 h-3" />
                                ))}
                              </span>
                              {announcement.sentAt && (
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  Sent: {announcement.sentAt}
                                </span>
                              )}
                              {announcement.scheduledFor && (
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  Scheduled: {announcement.scheduledFor}
                                </span>
                              )}
                            </div>

                            {announcement.readCount !== undefined && (
                              <div className="mt-2">
                                <div className="flex items-center justify-between text-xs mb-1">
                                  <span className="text-gray-400">Read by users</span>
                                  <span className="text-[#0AF3FF]">
                                    {announcement.readCount}/{announcement.totalRecipients}
                                    ({Math.round((announcement.readCount / announcement.totalRecipients!) * 100)}%)
                                  </span>
                                </div>
                                <div className="h-1.5 bg-[#0AF3FF]/10 rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-[#0AF3FF] rounded-full"
                                    style={{ width: `${(announcement.readCount / announcement.totalRecipients!) * 100}%` }}
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {announcement.status === 'draft' && (
                            <Button size="sm" className="bg-[#0AF3FF] text-black hover:bg-[#0AF3FF]/90 gap-1">
                              <Send className="w-3 h-3" />
                              Send
                            </Button>
                          )}
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="sent">
              <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-8 text-center">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-white mb-2">Sent Announcements</h3>
                <p className="text-gray-400">Filter by sent status to view here</p>
              </Card>
            </TabsContent>

            <TabsContent value="scheduled">
              <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-8 text-center">
                <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-white mb-2">Scheduled Announcements</h3>
                <p className="text-gray-400">Announcements waiting to be sent</p>
              </Card>
            </TabsContent>

            <TabsContent value="drafts">
              <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-8 text-center">
                <Edit className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-white mb-2">Draft Announcements</h3>
                <p className="text-gray-400">Announcements saved as drafts</p>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
