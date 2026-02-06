import { useState } from 'react';
import { AdminSidebar } from '../AdminSidebar';
import { Card } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Textarea } from '../../ui/textarea';
import {
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle,
  Trophy,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { motion } from 'motion/react';

interface AdminSubmissionsPageProps {
  onNavigate: (page: string) => void;
  currentAdminPage: string;
}

export function AdminSubmissionsPage({ onNavigate, currentAdminPage }: AdminSubmissionsPageProps) {
  const [selectedSubmission, setSelectedSubmission] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');

  const submissions = [
    {
      id: 1,
      user: { name: 'CryptoNinja', avatar: '🥷', xp: 8500, trustScore: 95 },
      quest: 'Deploy Your First Smart Contract',
      track: 'dev',
      submittedAt: '2h ago',
      waitTime: '2h 15m',
      status: 'pending',
      content: 'I have successfully deployed my smart contract to Mandala testnet. Here is the contract address: 0x1234...5678',
      proof: 'https://explorer.mandala.network/tx/0x1234...5678',
      socialProof: 'https://twitter.com/cryptoninja/status/123',
    },
    {
      id: 2,
      user: { name: 'BlockchainMaster', avatar: '🧙', xp: 11200, trustScore: 88 },
      quest: 'Create Mandala Explainer Video',
      track: 'creator',
      submittedAt: '5h ago',
      waitTime: '5h 42m',
      status: 'pending',
      content: 'Video explaining Mandala Chain identity features. Duration: 8 minutes.',
      proof: 'https://youtube.com/watch?v=abc123',
    },
    {
      id: 3,
      user: { name: 'Web3Dev', avatar: '👨‍💻', xp: 10800, trustScore: 92 },
      quest: 'Write Mandala Chain Article',
      track: 'creator',
      submittedAt: '1d ago',
      waitTime: '1d 3h',
      status: 'revision',
      content: 'Article about cross-chain communication on Mandala. 1,500 words.',
      proof: 'https://medium.com/@web3dev/mandala-xcmp',
    },
  ];

  const handleReview = (submissionId: number, action: 'approve' | 'revision' | 'reject') => {
    console.log(`${action} submission ${submissionId}`, feedback);
    setSelectedSubmission(null);
    setFeedback('');
  };

  const currentSubmission = submissions.find(s => s.id === selectedSubmission);

  return (
    <div className="flex min-h-screen bg-black">
      <AdminSidebar currentPage={currentAdminPage} onNavigate={onNavigate} />
      
      <div className="flex-1 pt-24 pb-12 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Submissions & Reviews</h1>
            <p className="text-gray-400">Review and grade user quest submissions</p>
          </div>

          {!selectedSubmission ? (
            /* Submission Queue */
            <>
              {/* Filters */}
              <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
                {['All', 'Pending', 'Revision Requested', 'Dev Track', 'Creator Track'].map((filter) => (
                  <Button
                    key={filter}
                    variant="outline"
                    size="sm"
                    className="border-[#0AF3FF]/20 text-gray-400 hover:text-white whitespace-nowrap"
                  >
                    {filter}
                  </Button>
                ))}
              </div>

              <div className="grid gap-4">
                {submissions.map((submission, index) => (
                  <motion.div
                    key={submission.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card
                      className="bg-[#0a0a0a] border-[#0AF3FF]/20 hover:border-[#0AF3FF]/40 transition-all cursor-pointer"
                      onClick={() => setSelectedSubmission(submission.id)}
                    >
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          {/* Wait Time Indicator */}
                          <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${
                            submission.status === 'pending' ? 'bg-yellow-500/20' : 'bg-orange-500/20'
                          }`}>
                            <div className="text-center">
                              <Clock className="w-6 h-6 text-yellow-400 mx-auto mb-1" />
                              <span className="text-xs text-yellow-400">{submission.waitTime.split(' ')[0]}</span>
                            </div>
                          </div>

                          {/* Main Content */}
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="text-white font-bold mb-1">{submission.quest}</h3>
                                <div className="flex items-center gap-2">
                                  <span className="text-gray-400">by</span>
                                  <div className="flex items-center gap-2">
                                    <span className="text-2xl">{submission.user.avatar}</span>
                                    <span className="text-[#0AF3FF]">{submission.user.name}</span>
                                  </div>
                                  <Badge variant="outline" className="border-[#0AF3FF]/30 text-[#0AF3FF] text-xs">
                                    {submission.track}
                                  </Badge>
                                </div>
                              </div>
                              <Badge className={
                                submission.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-orange-500/20 text-orange-400'
                              }>
                                {submission.status}
                              </Badge>
                            </div>

                            <p className="text-gray-300 text-sm mb-3 line-clamp-2">{submission.content}</p>

                            <div className="flex items-center gap-4 text-sm">
                              <div className="flex items-center gap-1 text-gray-400">
                                <Trophy className="w-4 h-4" />
                                {submission.user.xp} XP
                              </div>
                              <div className="flex items-center gap-1 text-gray-400">
                                Trust: {submission.user.trustScore}%
                              </div>
                              <span className="text-gray-500">•</span>
                              <span className="text-gray-400">{submission.submittedAt}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            /* Review Screen */
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Submission Details */}
              <Card className="lg:col-span-2 bg-[#0a0a0a] border-[#0AF3FF]/20">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white">{currentSubmission?.quest}</h2>
                    <Button
                      variant="ghost"
                      onClick={() => setSelectedSubmission(null)}
                      className="text-gray-400"
                    >
                      Close
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {/* Submission Content */}
                    <div>
                      <h3 className="text-white font-medium mb-3">Submission Content</h3>
                      <div className="bg-[#1a1a1a] rounded-xl p-4">
                        <p className="text-gray-300">{currentSubmission?.content}</p>
                      </div>
                    </div>

                    {/* Proof Links */}
                    {currentSubmission?.proof && (
                      <div>
                        <h3 className="text-white font-medium mb-3">Proof of Completion</h3>
                        <a
                          href={currentSubmission.proof}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[#0AF3FF] hover:text-[#0AF3FF]/80"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {currentSubmission.proof}
                        </a>
                      </div>
                    )}

                    {/* Social Verification */}
                    {currentSubmission?.socialProof && (
                      <div>
                        <h3 className="text-white font-medium mb-3">Social Verification</h3>
                        <a
                          href={currentSubmission.socialProof}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[#0AF3FF] hover:text-[#0AF3FF]/80"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Twitter Post
                        </a>
                      </div>
                    )}

                    {/* Feedback */}
                    <div>
                      <h3 className="text-white font-medium mb-3">Reviewer Feedback</h3>
                      <Textarea
                        placeholder="Provide feedback for the user..."
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        rows={4}
                        className="bg-[#1a1a1a] border-[#0AF3FF]/20 text-white"
                      />
                    </div>

                    {/* Review Actions */}
                    <div className="flex gap-3">
                      <Button
                        className="flex-1 bg-green-500 text-white hover:bg-green-600 gap-2"
                        onClick={() => handleReview(currentSubmission!.id, 'approve')}
                      >
                        <CheckCircle className="w-5 h-5" />
                        Approve
                      </Button>
                      <Button
                        className="flex-1 bg-yellow-500 text-black hover:bg-yellow-600 gap-2"
                        onClick={() => handleReview(currentSubmission!.id, 'revision')}
                      >
                        <AlertCircle className="w-5 h-5" />
                        Request Revision
                      </Button>
                      <Button
                        className="flex-1 bg-red-500 text-white hover:bg-red-600 gap-2"
                        onClick={() => handleReview(currentSubmission!.id, 'reject')}
                      >
                        <XCircle className="w-5 h-5" />
                        Reject
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* User Snapshot */}
              <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20">
                <div className="p-6">
                  <h3 className="text-white font-medium mb-4">User Profile</h3>
                  
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-3">{currentSubmission?.user.avatar}</div>
                    <h4 className="text-xl text-white font-bold mb-1">
                      {currentSubmission?.user.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{currentSubmission?.track} Track</p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-[#1a1a1a] rounded-xl p-4">
                      <p className="text-xs text-gray-400 mb-1">Total XP</p>
                      <p className="text-2xl text-[#0AF3FF] font-bold">
                        {currentSubmission?.user.xp.toLocaleString()}
                      </p>
                    </div>

                    <div className="bg-[#1a1a1a] rounded-xl p-4">
                      <p className="text-xs text-gray-400 mb-1">Trust Score</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-[#0a0a0a] rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-[#0AF3FF] to-green-500"
                            style={{ width: `${currentSubmission?.user.trustScore}%` }}
                          />
                        </div>
                        <span className="text-[#0AF3FF] font-bold">
                          {currentSubmission?.user.trustScore}%
                        </span>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full border-[#0AF3FF] text-[#0AF3FF] gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Chat with User
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
