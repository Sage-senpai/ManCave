import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Separator } from '../ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { motion } from 'motion/react';
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  Link as LinkIcon, 
  Mail, 
  Lock,
  Trash2,
  Save,
  ChevronRight
} from 'lucide-react';

interface SettingsPageProps {
  onNavigate: (page: string) => void;
}

export function SettingsPage({ onNavigate }: SettingsPageProps) {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">Settings</h1>
          <p className="text-gray-400">Manage your account preferences and settings</p>
        </motion.div>

        {/* Settings Tabs */}
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 bg-[#0a0a0a] border border-[#0AF3FF]/20">
            <TabsTrigger value="profile" className="data-[state=active]:bg-[#0AF3FF]/10 data-[state=active]:text-[#0AF3FF]">
              <User className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-[#0AF3FF]/10 data-[state=active]:text-[#0AF3FF]">
              <Bell className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Notifications</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="data-[state=active]:bg-[#0AF3FF]/10 data-[state=active]:text-[#0AF3FF]">
              <Shield className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Security</span>
            </TabsTrigger>
            <TabsTrigger value="appearance" className="data-[state=active]:bg-[#0AF3FF]/10 data-[state=active]:text-[#0AF3FF]">
              <Palette className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Appearance</span>
            </TabsTrigger>
            <TabsTrigger value="integrations" className="data-[state=active]:bg-[#0AF3FF]/10 data-[state=active]:text-[#0AF3FF]">
              <LinkIcon className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Integrations</span>
            </TabsTrigger>
          </TabsList>

          {/* Profile Settings */}
          <TabsContent value="profile">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-6">
                <h2 className="text-xl font-bold text-white mb-6">Profile Information</h2>
                
                <div className="space-y-6">
                  {/* Avatar */}
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0AF3FF] to-[#0880FF] flex items-center justify-center">
                      <span className="text-3xl font-bold text-black">JD</span>
                    </div>
                    <div className="flex-1">
                      <Button variant="outline" className="border-[#0AF3FF] text-[#0AF3FF] hover:bg-[#0AF3FF] hover:text-black">
                        Change Avatar
                      </Button>
                      <p className="text-sm text-gray-400 mt-2">JPG, PNG or GIF. Max size 2MB.</p>
                    </div>
                  </div>

                  <Separator className="bg-[#0AF3FF]/20" />

                  {/* Display Name */}
                  <div className="space-y-2">
                    <Label htmlFor="displayName">Display Name</Label>
                    <Input
                      id="displayName"
                      defaultValue="John Doe"
                      className="bg-[#1a1a1a] border-[#0AF3FF]/20 text-white"
                    />
                  </div>

                  {/* Username */}
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      defaultValue="@johndoe"
                      className="bg-[#1a1a1a] border-[#0AF3FF]/20 text-white"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="john.doe@example.com"
                      className="bg-[#1a1a1a] border-[#0AF3FF]/20 text-white"
                    />
                  </div>

                  {/* Bio */}
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <textarea
                      id="bio"
                      rows={4}
                      defaultValue="Web3 developer passionate about building on Mandala Chain"
                      className="w-full bg-[#1a1a1a] border border-[#0AF3FF]/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#0AF3FF]"
                    />
                  </div>

                  {/* Track */}
                  <div className="space-y-2">
                    <Label>Selected Track</Label>
                    <div className="flex gap-4">
                      <button className="flex-1 py-3 px-4 bg-[#0AF3FF]/10 border-2 border-[#0AF3FF] rounded-lg text-[#0AF3FF] font-semibold">
                        Developer Track
                      </button>
                      <button className="flex-1 py-3 px-4 bg-[#1a1a1a] border border-[#0AF3FF]/20 rounded-lg text-gray-400 hover:text-white">
                        Creator Track
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <Button variant="outline" className="border-[#0AF3FF]/20 text-gray-400">
                    Cancel
                  </Button>
                  <Button className="bg-[#0AF3FF] text-black hover:bg-[#0AF3FF]/90">
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Notifications Settings */}
          <TabsContent value="notifications">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-6">
                <h2 className="text-xl font-bold text-white mb-6">Notification Preferences</h2>
                
                <div className="space-y-6">
                  {/* Email Notifications */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Mail className="w-5 h-5 text-[#0AF3FF]" />
                      Email Notifications
                    </h3>
                    <div className="space-y-4">
                      {[
                        { label: 'Quest Completions', description: 'Get notified when you complete a quest' },
                        { label: 'New Quests Available', description: 'Alert when new quests are published' },
                        { label: 'Achievement Unlocked', description: 'Notify when you earn badges or achievements' },
                        { label: 'Weekly Progress Report', description: 'Receive weekly summary of your progress' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between py-3 border-b border-[#0AF3FF]/10 last:border-0">
                          <div>
                            <div className="text-white font-medium">{item.label}</div>
                            <div className="text-sm text-gray-400">{item.description}</div>
                          </div>
                          <Switch defaultChecked={index < 2} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator className="bg-[#0AF3FF]/20" />

                  {/* Push Notifications */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Bell className="w-5 h-5 text-[#0AF3FF]" />
                      Push Notifications
                    </h3>
                    <div className="space-y-4">
                      {[
                        { label: 'Chat Messages', description: 'New messages from mentors and community' },
                        { label: 'Quest Reminders', description: 'Reminders for quest deadlines' },
                        { label: 'Leaderboard Updates', description: 'When your ranking changes' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between py-3 border-b border-[#0AF3FF]/10 last:border-0">
                          <div>
                            <div className="text-white font-medium">{item.label}</div>
                            <div className="text-sm text-gray-400">{item.description}</div>
                          </div>
                          <Switch defaultChecked={index === 0} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-6">
                <h2 className="text-xl font-bold text-white mb-6">Security Settings</h2>
                
                <div className="space-y-6">
                  {/* Password */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Lock className="w-5 h-5 text-[#0AF3FF]" />
                      Password
                    </h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input
                          id="currentPassword"
                          type="password"
                          className="bg-[#1a1a1a] border-[#0AF3FF]/20 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input
                          id="newPassword"
                          type="password"
                          className="bg-[#1a1a1a] border-[#0AF3FF]/20 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          className="bg-[#1a1a1a] border-[#0AF3FF]/20 text-white"
                        />
                      </div>
                      <Button className="bg-[#0AF3FF] text-black hover:bg-[#0AF3FF]/90">
                        Update Password
                      </Button>
                    </div>
                  </div>

                  <Separator className="bg-[#0AF3FF]/20" />

                  {/* Two-Factor Authentication */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-[#0AF3FF]" />
                      Two-Factor Authentication
                    </h3>
                    <div className="flex items-center justify-between p-4 bg-[#1a1a1a] rounded-lg">
                      <div>
                        <div className="text-white font-medium">2FA Status</div>
                        <div className="text-sm text-gray-400">Add an extra layer of security</div>
                      </div>
                      <Button variant="outline" className="border-[#0AF3FF] text-[#0AF3FF] hover:bg-[#0AF3FF] hover:text-black">
                        Enable 2FA
                      </Button>
                    </div>
                  </div>

                  <Separator className="bg-[#0AF3FF]/20" />

                  {/* Connected Wallets */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Connected Wallets</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 bg-[#1a1a1a] rounded-lg border border-[#0AF3FF]/20">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-[#0AF3FF]/10 flex items-center justify-center">
                            <Globe className="w-5 h-5 text-[#0AF3FF]" />
                          </div>
                          <div>
                            <div className="text-white font-medium">Polkadot.js</div>
                            <div className="text-sm text-gray-400">0x7a3f...92c4</div>
                          </div>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-gray-400 hover:text-red-500"
                          onClick={() => onNavigate('wallet')}
                        >
                          Manage
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Danger Zone */}
              <Card className="bg-[#0a0a0a] border-red-500/50 p-6">
                <h2 className="text-xl font-bold text-red-500 mb-4">Danger Zone</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-[#1a1a1a] rounded-lg border border-red-500/20">
                    <div>
                      <div className="text-white font-medium">Delete Account</div>
                      <div className="text-sm text-gray-400">Permanently delete your account and all data</div>
                    </div>
                    <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Appearance Settings */}
          <TabsContent value="appearance">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-6">
                <h2 className="text-xl font-bold text-white mb-6">Appearance Settings</h2>
                
                <div className="space-y-6">
                  {/* Theme */}
                  <div>
                    <Label className="text-lg font-semibold mb-4 block">Theme</Label>
                    <div className="grid grid-cols-3 gap-4">
                      <button className="p-4 bg-black border-2 border-[#0AF3FF] rounded-lg text-center">
                        <div className="w-full h-20 bg-black border border-[#0AF3FF]/20 rounded mb-3"></div>
                        <div className="text-white font-medium">Dark</div>
                      </button>
                      <button className="p-4 bg-[#1a1a1a] border border-[#0AF3FF]/20 rounded-lg text-center hover:border-[#0AF3FF]">
                        <div className="w-full h-20 bg-white rounded mb-3"></div>
                        <div className="text-white font-medium">Light</div>
                      </button>
                      <button className="p-4 bg-[#1a1a1a] border border-[#0AF3FF]/20 rounded-lg text-center hover:border-[#0AF3FF]">
                        <div className="w-full h-20 bg-gradient-to-br from-black to-white rounded mb-3"></div>
                        <div className="text-white font-medium">Auto</div>
                      </button>
                    </div>
                  </div>

                  <Separator className="bg-[#0AF3FF]/20" />

                  {/* Interface */}
                  <div>
                    <Label className="text-lg font-semibold mb-4 block">Interface</Label>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white font-medium">Compact Mode</div>
                          <div className="text-sm text-gray-400">Reduce spacing between elements</div>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white font-medium">Animations</div>
                          <div className="text-sm text-gray-400">Enable smooth transitions and effects</div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white font-medium">Show Quest Progress</div>
                          <div className="text-sm text-gray-400">Display progress bars on quest cards</div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Integrations Settings */}
          <TabsContent value="integrations">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-6">
                <h2 className="text-xl font-bold text-white mb-6">Social Integrations</h2>
                
                <div className="space-y-4">
                  {[
                    { name: 'Discord', connected: true, username: 'johndoe#1234' },
                    { name: 'Twitter', connected: true, username: '@johndoe' },
                    { name: 'GitHub', connected: false, username: null },
                    { name: 'Telegram', connected: false, username: null },
                  ].map((integration, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-[#1a1a1a] rounded-lg border border-[#0AF3FF]/20">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-[#0AF3FF]/10 flex items-center justify-center">
                          <LinkIcon className="w-6 h-6 text-[#0AF3FF]" />
                        </div>
                        <div>
                          <div className="text-white font-medium">{integration.name}</div>
                          {integration.connected ? (
                            <div className="text-sm text-[#0AF3FF]">{integration.username}</div>
                          ) : (
                            <div className="text-sm text-gray-400">Not connected</div>
                          )}
                        </div>
                      </div>
                      <Button
                        variant={integration.connected ? 'outline' : 'default'}
                        className={integration.connected 
                          ? 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white' 
                          : 'bg-[#0AF3FF] text-black hover:bg-[#0AF3FF]/90'
                        }
                      >
                        {integration.connected ? 'Disconnect' : 'Connect'}
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-6">
                <h2 className="text-xl font-bold text-white mb-6">API Access</h2>
                <p className="text-gray-400 mb-4">Generate API keys to access Mancave data programmatically</p>
                <Button variant="outline" className="border-[#0AF3FF] text-[#0AF3FF] hover:bg-[#0AF3FF] hover:text-black">
                  Generate API Key
                </Button>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
