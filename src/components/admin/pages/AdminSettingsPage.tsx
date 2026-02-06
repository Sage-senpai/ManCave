import { AdminSidebar } from '../AdminSidebar';
import { Card } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Switch } from '../../ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import {
  Settings,
  Shield,
  Users,
  Key,
  Globe,
  Database,
  Bell,
  Lock,
  Save,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Copy,
  Eye,
  EyeOff,
  Trash2,
  Plus
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface AdminSettingsPageProps {
  onNavigate: (page: string) => void;
  currentAdminPage: string;
}

export function AdminSettingsPage({ onNavigate, currentAdminPage }: AdminSettingsPageProps) {
  const [showApiKey, setShowApiKey] = useState(false);
  const [copied, setCopied] = useState(false);

  const adminUsers = [
    { id: '1', name: 'Super Admin', email: 'admin@mancave.io', role: 'super-admin', lastActive: '2 min ago' },
    { id: '2', name: 'Dev Track Admin', email: 'dev@mancave.io', role: 'track-admin', lastActive: '1 hour ago' },
    { id: '3', name: 'Content Manager', email: 'content@mancave.io', role: 'content-manager', lastActive: '3 hours ago' },
    { id: '4', name: 'Moderator', email: 'mod@mancave.io', role: 'moderator', lastActive: '1 day ago' }
  ];

  const integrations = [
    { name: 'Twitter/X API', status: 'connected', icon: '🐦' },
    { name: 'Discord Bot', status: 'connected', icon: '💬' },
    { name: 'Telegram Bot', status: 'disconnected', icon: '📱' },
    { name: 'Mandala RPC', status: 'connected', icon: '⛓️' }
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'super-admin': return 'bg-red-500/20 text-red-400';
      case 'track-admin': return 'bg-purple-500/20 text-purple-400';
      case 'content-manager': return 'bg-blue-500/20 text-blue-400';
      case 'moderator': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
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
              <h1 className="text-4xl font-bold text-white mb-2">Admin Settings</h1>
              <p className="text-gray-400">
                Configure platform settings, integrations, and admin access
              </p>
            </motion.div>
          </div>

          <Tabs defaultValue="general" className="space-y-6">
            <TabsList className="bg-[#0a0a0a] border border-[#0AF3FF]/20">
              <TabsTrigger value="general" className="gap-2">
                <Settings className="w-4 h-4" />
                General
              </TabsTrigger>
              <TabsTrigger value="admins" className="gap-2">
                <Users className="w-4 h-4" />
                Admins
              </TabsTrigger>
              <TabsTrigger value="integrations" className="gap-2">
                <Key className="w-4 h-4" />
                Integrations
              </TabsTrigger>
              <TabsTrigger value="security" className="gap-2">
                <Shield className="w-4 h-4" />
                Security
              </TabsTrigger>
            </TabsList>

            {/* General Settings */}
            <TabsContent value="general">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Platform Settings */}
                <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-[#0AF3FF]/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-[#0AF3FF]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Platform Settings</h3>
                      <p className="text-sm text-gray-400">General platform configuration</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Platform Name</Label>
                      <Input defaultValue="Mancave" className="bg-black/50 border-[#0AF3FF]/20" />
                    </div>

                    <div className="space-y-2">
                      <Label>Support Email</Label>
                      <Input defaultValue="support@mancave.io" className="bg-black/50 border-[#0AF3FF]/20" />
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-black/50">
                      <div>
                        <Label>Maintenance Mode</Label>
                        <p className="text-xs text-gray-500">Temporarily disable platform access</p>
                      </div>
                      <Switch />
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-black/50">
                      <div>
                        <Label>New User Registration</Label>
                        <p className="text-xs text-gray-500">Allow new users to sign up</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </Card>

                {/* Network Settings */}
                <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                      <Database className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Network Settings</h3>
                      <p className="text-sm text-gray-400">Blockchain network configuration</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Active Network</Label>
                      <select className="w-full h-10 px-3 rounded-md bg-black/50 border border-[#0AF3FF]/20 text-white">
                        <option value="mainnet">Mandala Chain Mainnet</option>
                        <option value="testnet">Mandala Chain Testnet</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label>RPC Endpoint</Label>
                      <Input
                        defaultValue="wss://rpc.mandalachain.io"
                        className="bg-black/50 border-[#0AF3FF]/20 font-mono text-sm"
                      />
                    </div>

                    <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <div>
                        <p className="text-sm text-green-400 font-medium">Network Connected</p>
                        <p className="text-xs text-gray-400">Block #1,234,567 • 2.1s latency</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Notification Settings */}
                <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-6 lg:col-span-2">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                      <Bell className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Notification Settings</h3>
                      <p className="text-sm text-gray-400">Configure admin notifications</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { label: 'New User Signups', enabled: true },
                      { label: 'Quest Submissions', enabled: true },
                      { label: 'Flagged Content', enabled: true },
                      { label: 'High-Value Transactions', enabled: false },
                      { label: 'System Errors', enabled: true },
                      { label: 'Daily Summary', enabled: true }
                    ].map((notif) => (
                      <div
                        key={notif.label}
                        className="flex items-center justify-between p-3 rounded-lg bg-black/50"
                      >
                        <Label>{notif.label}</Label>
                        <Switch defaultChecked={notif.enabled} />
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <div className="flex justify-end mt-6">
                <Button className="bg-[#0AF3FF] text-black hover:bg-[#0AF3FF]/90 gap-2">
                  <Save className="w-4 h-4" />
                  Save Changes
                </Button>
              </div>
            </TabsContent>

            {/* Admin Users */}
            <TabsContent value="admins">
              <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20">
                <div className="p-6 border-b border-[#0AF3FF]/10 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Admin Users</h3>
                    <p className="text-sm text-gray-400">Manage admin access and roles</p>
                  </div>
                  <Button className="bg-[#0AF3FF] text-black hover:bg-[#0AF3FF]/90 gap-2">
                    <Plus className="w-4 h-4" />
                    Add Admin
                  </Button>
                </div>

                <div className="divide-y divide-[#0AF3FF]/10">
                  {adminUsers.map((admin, index) => (
                    <motion.div
                      key={admin.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="p-4 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#0AF3FF]/20 flex items-center justify-center text-[#0AF3FF] font-bold">
                          {admin.name.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-white">{admin.name}</span>
                            <Badge className={getRoleColor(admin.role)}>
                              {admin.role.replace('-', ' ')}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-400">{admin.email}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="text-xs text-gray-500">Active: {admin.lastActive}</span>
                        <Button variant="ghost" size="sm">
                          <Settings className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Integrations */}
            <TabsContent value="integrations">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* API Keys */}
                <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-[#0AF3FF]/10 flex items-center justify-center">
                      <Key className="w-5 h-5 text-[#0AF3FF]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">API Keys</h3>
                      <p className="text-sm text-gray-400">Manage integration credentials</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Public API Key</Label>
                      <div className="flex gap-2">
                        <Input
                          type={showApiKey ? 'text' : 'password'}
                          defaultValue="pk_live_mancave_a1b2c3d4e5f6"
                          className="bg-black/50 border-[#0AF3FF]/20 font-mono text-sm"
                          readOnly
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => setShowApiKey(!showApiKey)}
                        >
                          {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleCopy('pk_live_mancave_a1b2c3d4e5f6')}
                        >
                          {copied ? <CheckCircle className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full border-[#0AF3FF]/30 gap-2">
                      <RefreshCw className="w-4 h-4" />
                      Regenerate API Keys
                    </Button>
                  </div>
                </Card>

                {/* Connected Services */}
                <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Connected Services</h3>
                      <p className="text-sm text-gray-400">External service integrations</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {integrations.map((integration) => (
                      <div
                        key={integration.name}
                        className="flex items-center justify-between p-3 rounded-lg bg-black/50"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{integration.icon}</span>
                          <div>
                            <p className="text-white font-medium">{integration.name}</p>
                            <p className={`text-xs ${integration.status === 'connected' ? 'text-green-400' : 'text-gray-500'}`}>
                              {integration.status}
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className={integration.status === 'connected' ? 'border-red-500/30 text-red-400' : 'border-[#0AF3FF]/30'}
                        >
                          {integration.status === 'connected' ? 'Disconnect' : 'Connect'}
                        </Button>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Security */}
            <TabsContent value="security">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                      <Lock className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Security Settings</h3>
                      <p className="text-sm text-gray-400">Platform security configuration</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-black/50">
                      <div>
                        <Label>Two-Factor Authentication</Label>
                        <p className="text-xs text-gray-500">Require 2FA for all admins</p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-black/50">
                      <div>
                        <Label>Session Timeout</Label>
                        <p className="text-xs text-gray-500">Auto-logout after inactivity</p>
                      </div>
                      <select className="h-8 px-2 rounded bg-black border border-[#0AF3FF]/20 text-white text-sm">
                        <option value="30">30 minutes</option>
                        <option value="60">1 hour</option>
                        <option value="120">2 hours</option>
                        <option value="480">8 hours</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-black/50">
                      <div>
                        <Label>IP Whitelisting</Label>
                        <p className="text-xs text-gray-500">Restrict admin access by IP</p>
                      </div>
                      <Switch />
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-black/50">
                      <div>
                        <Label>Audit Logging</Label>
                        <p className="text-xs text-gray-500">Log all admin actions</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </Card>

                <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Danger Zone</h3>
                      <p className="text-sm text-gray-400">Irreversible actions</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-lg border border-yellow-500/30 bg-yellow-500/5">
                      <h4 className="text-yellow-400 font-medium mb-2">Reset All User Progress</h4>
                      <p className="text-sm text-gray-400 mb-3">
                        This will reset all user XP, coins, and quest progress. This action cannot be undone.
                      </p>
                      <Button variant="outline" className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10">
                        Reset Progress
                      </Button>
                    </div>

                    <div className="p-4 rounded-lg border border-red-500/30 bg-red-500/5">
                      <h4 className="text-red-400 font-medium mb-2">Purge All Data</h4>
                      <p className="text-sm text-gray-400 mb-3">
                        Permanently delete all platform data including users, quests, and content.
                      </p>
                      <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-500/10">
                        Purge Data
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
