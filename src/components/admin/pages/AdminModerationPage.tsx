import { AdminSidebar } from '../AdminSidebar';
import { Card } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Input } from '../../ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import {
  AlertTriangle,
  Shield,
  Flag,
  UserX,
  MessageSquare,
  Search,
  Eye,
  Ban,
  AlertCircle,
  CheckCircle,
  Clock,
  User,
  MoreVertical
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../../ui/dialog';

interface AdminModerationPageProps {
  onNavigate: (page: string) => void;
  currentAdminPage: string;
}

type ReportStatus = 'pending' | 'investigating' | 'resolved' | 'dismissed';
type ReportType = 'spam' | 'abuse' | 'fraud' | 'inappropriate' | 'other';
type ActionType = 'warning' | 'suspension' | 'ban' | 'none';

interface Report {
  id: string;
  type: ReportType;
  status: ReportStatus;
  reportedUser: string;
  reportedBy: string;
  reason: string;
  context: string;
  createdAt: string;
  assignedTo?: string;
  resolution?: string;
  action?: ActionType;
}

export function AdminModerationPage({ onNavigate, currentAdminPage }: AdminModerationPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const reports: Report[] = [
    {
      id: '1',
      type: 'spam',
      status: 'pending',
      reportedUser: 'SpamBot123',
      reportedBy: 'CryptoNinja',
      reason: 'Posting repetitive promotional content',
      context: 'User posted the same link 15 times in chat',
      createdAt: '2024-01-25 14:30'
    },
    {
      id: '2',
      type: 'fraud',
      status: 'investigating',
      reportedUser: 'FakeAccount42',
      reportedBy: 'System',
      reason: 'Suspicious social verification',
      context: 'Twitter account used for verification appears to be purchased/fake',
      createdAt: '2024-01-25 12:00',
      assignedTo: 'Admin'
    },
    {
      id: '3',
      type: 'abuse',
      status: 'resolved',
      reportedUser: 'ToxicUser99',
      reportedBy: 'BlockMaster',
      reason: 'Harassment in chat',
      context: 'Sent threatening messages to multiple users',
      createdAt: '2024-01-24 18:45',
      assignedTo: 'Moderator',
      resolution: 'User suspended for 7 days',
      action: 'suspension'
    },
    {
      id: '4',
      type: 'inappropriate',
      status: 'dismissed',
      reportedUser: 'ContentCreator',
      reportedBy: 'Anonymous',
      reason: 'Inappropriate content submission',
      context: 'Quest submission flagged for review',
      createdAt: '2024-01-24 10:00',
      resolution: 'Content reviewed and found acceptable'
    },
    {
      id: '5',
      type: 'fraud',
      status: 'pending',
      reportedUser: 'MultiAccounter',
      reportedBy: 'System',
      reason: 'Multiple account detection',
      context: 'Same IP/device creating multiple accounts for rewards farming',
      createdAt: '2024-01-25 09:15'
    }
  ];

  const getStatusColor = (status: ReportStatus) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500/20 text-yellow-400';
      case 'investigating': return 'bg-blue-500/20 text-blue-400';
      case 'resolved': return 'bg-green-500/20 text-green-400';
      case 'dismissed': return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getTypeIcon = (type: ReportType) => {
    switch (type) {
      case 'spam': return MessageSquare;
      case 'abuse': return UserX;
      case 'fraud': return AlertTriangle;
      case 'inappropriate': return Flag;
      case 'other': return AlertCircle;
    }
  };

  const getTypeColor = (type: ReportType) => {
    switch (type) {
      case 'spam': return 'text-yellow-400';
      case 'abuse': return 'text-red-400';
      case 'fraud': return 'text-orange-400';
      case 'inappropriate': return 'text-purple-400';
      case 'other': return 'text-gray-400';
    }
  };

  const stats = {
    pending: reports.filter(r => r.status === 'pending').length,
    investigating: reports.filter(r => r.status === 'investigating').length,
    resolved: reports.filter(r => r.status === 'resolved').length,
    totalToday: reports.filter(r => r.createdAt.includes('2024-01-25')).length
  };

  const filteredReports = reports.filter(report =>
    report.reportedUser.toLowerCase().includes(searchQuery.toLowerCase()) ||
    report.reason.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openReportDetail = (report: Report) => {
    setSelectedReport(report);
    setIsDetailModalOpen(true);
  };

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
              <h1 className="text-4xl font-bold text-white mb-2">Moderation</h1>
              <p className="text-gray-400">
                Review reports, handle abuse, and maintain platform integrity
              </p>
            </motion.div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-400">Pending</span>
              </div>
              <div className="text-2xl font-bold text-white">{stats.pending}</div>
              <div className="text-xs text-yellow-400">Needs review</div>
            </Card>
            <Card className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-500/30 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-400">Investigating</span>
              </div>
              <div className="text-2xl font-bold text-white">{stats.investigating}</div>
              <div className="text-xs text-blue-400">In progress</div>
            </Card>
            <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30 p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-400">Resolved</span>
              </div>
              <div className="text-2xl font-bold text-white">{stats.resolved}</div>
              <div className="text-xs text-green-400">This month</div>
            </Card>
            <Card className="bg-gradient-to-br from-red-500/20 to-pink-500/20 border-red-500/30 p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span className="text-sm text-gray-400">Today</span>
              </div>
              <div className="text-2xl font-bold text-white">{stats.totalToday}</div>
              <div className="text-xs text-red-400">New reports</div>
            </Card>
          </div>

          {/* Search */}
          <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search reports by user or reason..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-black/50 border-[#0AF3FF]/20"
              />
            </div>
          </Card>

          {/* Reports Tabs */}
          <Tabs defaultValue="pending" className="space-y-6">
            <TabsList className="bg-[#0a0a0a] border border-[#0AF3FF]/20">
              <TabsTrigger value="pending" className="gap-2">
                Pending
                {stats.pending > 0 && (
                  <Badge className="bg-yellow-500/20 text-yellow-400 text-xs">
                    {stats.pending}
                  </Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="investigating">Investigating</TabsTrigger>
              <TabsTrigger value="resolved">Resolved</TabsTrigger>
              <TabsTrigger value="all">All Reports</TabsTrigger>
            </TabsList>

            {['pending', 'investigating', 'resolved', 'all'].map(tab => (
              <TabsContent key={tab} value={tab}>
                <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20">
                  <div className="divide-y divide-[#0AF3FF]/10">
                    {filteredReports
                      .filter(r => tab === 'all' || r.status === tab)
                      .map((report, index) => {
                        const TypeIcon = getTypeIcon(report.type);
                        return (
                          <motion.div
                            key={report.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="p-4 hover:bg-white/5 transition-colors cursor-pointer"
                            onClick={() => openReportDetail(report)}
                          >
                            <div className="flex items-start gap-4">
                              <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center ${getTypeColor(report.type)}`}>
                                <TypeIcon className="w-5 h-5" />
                              </div>

                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1 flex-wrap">
                                  <span className="font-semibold text-white">{report.reportedUser}</span>
                                  <Badge className={getStatusColor(report.status)}>
                                    {report.status}
                                  </Badge>
                                  <Badge variant="outline" className={`text-xs ${getTypeColor(report.type)} border-current/30`}>
                                    {report.type}
                                  </Badge>
                                </div>

                                <p className="text-sm text-gray-300 mb-2">{report.reason}</p>

                                <div className="flex items-center gap-4 text-xs text-gray-500">
                                  <span className="flex items-center gap-1">
                                    <User className="w-3 h-3" />
                                    Reported by: {report.reportedBy}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {report.createdAt}
                                  </span>
                                  {report.assignedTo && (
                                    <span className="flex items-center gap-1">
                                      <Shield className="w-3 h-3" />
                                      Assigned: {report.assignedTo}
                                    </span>
                                  )}
                                </div>
                              </div>

                              <DropdownMenu>
                                <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <MoreVertical className="w-4 h-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="bg-[#0a0a0a] border-[#0AF3FF]/20">
                                  <DropdownMenuItem className="text-white hover:bg-white/10">
                                    <Eye className="w-4 h-4 mr-2" />
                                    View Details
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="text-white hover:bg-white/10">
                                    <User className="w-4 h-4 mr-2" />
                                    View User Profile
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator className="bg-[#0AF3FF]/10" />
                                  <DropdownMenuItem className="text-yellow-400 hover:bg-yellow-500/10">
                                    <AlertCircle className="w-4 h-4 mr-2" />
                                    Issue Warning
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="text-orange-400 hover:bg-orange-500/10">
                                    <Clock className="w-4 h-4 mr-2" />
                                    Suspend User
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="text-red-400 hover:bg-red-500/10">
                                    <Ban className="w-4 h-4 mr-2" />
                                    Ban User
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator className="bg-[#0AF3FF]/10" />
                                  <DropdownMenuItem className="text-gray-400 hover:bg-white/10">
                                    <CheckCircle className="w-4 h-4 mr-2" />
                                    Dismiss Report
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </motion.div>
                        );
                      })}

                    {filteredReports.filter(r => tab === 'all' || r.status === tab).length === 0 && (
                      <div className="p-12 text-center">
                        <Shield className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-white mb-2">No reports found</h3>
                        <p className="text-gray-400">
                          {tab === 'pending' ? 'All caught up! No pending reports.' : 'No reports match your criteria.'}
                        </p>
                      </div>
                    )}
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          {/* Report Detail Modal */}
          <Dialog open={isDetailModalOpen} onOpenChange={setIsDetailModalOpen}>
            <DialogContent className="bg-[#0a0a0a] border-[#0AF3FF]/20 text-white max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                  <Flag className="w-6 h-6 text-[#0AF3FF]" />
                  Report Details
                </DialogTitle>
              </DialogHeader>
              {selectedReport && (
                <div className="space-y-6 py-4">
                  <div className="flex items-center gap-4">
                    <Badge className={getStatusColor(selectedReport.status)}>
                      {selectedReport.status}
                    </Badge>
                    <Badge variant="outline" className={`${getTypeColor(selectedReport.type)} border-current/30`}>
                      {selectedReport.type}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-400">Reported User</label>
                      <p className="text-white font-medium">{selectedReport.reportedUser}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400">Reported By</label>
                      <p className="text-white font-medium">{selectedReport.reportedBy}</p>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-gray-400">Reason</label>
                    <p className="text-white">{selectedReport.reason}</p>
                  </div>

                  <div>
                    <label className="text-sm text-gray-400">Context</label>
                    <p className="text-gray-300 bg-black/50 p-3 rounded-lg">
                      {selectedReport.context}
                    </p>
                  </div>

                  {selectedReport.resolution && (
                    <div>
                      <label className="text-sm text-gray-400">Resolution</label>
                      <p className="text-green-400">{selectedReport.resolution}</p>
                    </div>
                  )}

                  <div className="flex justify-end gap-3 pt-4 border-t border-[#0AF3FF]/10">
                    <Button variant="outline" onClick={() => setIsDetailModalOpen(false)}>
                      Close
                    </Button>
                    {selectedReport.status === 'pending' && (
                      <>
                        <Button variant="outline" className="border-gray-500 text-gray-400">
                          Dismiss
                        </Button>
                        <Button className="bg-[#0AF3FF] text-black hover:bg-[#0AF3FF]/90">
                          Take Action
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
