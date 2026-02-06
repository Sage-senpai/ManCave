import { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Progress } from '../ui/progress';
import { WalletConnector } from '../WalletConnector';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Code, 
  Palette, 
  Shield, 
  Twitter, 
  MessageCircle,
  Check
} from 'lucide-react';

interface OnboardingPageProps {
  onComplete: () => void;
}

export function OnboardingPage({ onComplete }: OnboardingPageProps) {
  const [step, setStep] = useState(1);
  const [connectedWallet, setConnectedWallet] = useState<string | null>(null);
  const [selectedPath, setSelectedPath] = useState<'dev' | 'creator' | null>(null);
  const [connectedSocials, setConnectedSocials] = useState<string[]>([]);

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const toggleSocial = (social: string) => {
    if (connectedSocials.includes(social)) {
      setConnectedSocials(connectedSocials.filter(s => s !== social));
    } else {
      setConnectedSocials([...connectedSocials, social]);
    }
  };

  const canProceed = () => {
    if (step === 1) return true;
    if (step === 2) return connectedWallet !== null;
    if (step === 3) return selectedPath !== null;
    return true;
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-2xl font-bold text-white">
              {step === 1 && 'Welcome to Mancave'}
              {step === 2 && 'Connect Your Wallet'}
              {step === 3 && 'Choose Your Path'}
              {step === 4 && 'Complete Your Profile'}
            </h2>
            <span className="text-sm text-gray-400">
              Step {step} of {totalSteps}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Step 1: Introduction */}
            {step === 1 && (
              <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-8">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#0AF3FF] to-[#0880FF] flex items-center justify-center mb-6">
                    <span className="text-5xl font-bold text-black">M</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Start Your Web3 Journey
                  </h3>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Mancave is your guided path to mastering Mandala Chain. Through gamified quests, 
                    you'll learn blockchain fundamentals, earn rewards, and become part of a thriving ecosystem.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {[
                    { icon: '🎯', title: 'Learn', desc: 'Interactive quests' },
                    { icon: '🏆', title: 'Earn', desc: 'XP & rewards' },
                    { icon: '🌐', title: 'Connect', desc: 'Join the community' },
                  ].map((item, index) => (
                    <div key={index} className="text-center p-4 bg-[#1a1a1a] rounded-xl">
                      <div className="text-4xl mb-2">{item.icon}</div>
                      <h4 className="text-white font-medium mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-[#0AF3FF]/10 border border-[#0AF3FF]/30 rounded-xl p-6">
                  <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#0AF3FF]" />
                    What You'll Need
                  </h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#0AF3FF]" />
                      A Polkadot-compatible wallet (SubWallet, Talisman, etc.)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#0AF3FF]" />
                      Social accounts for task verification (optional)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#0AF3FF]" />
                      Curiosity and eagerness to learn!
                    </li>
                  </ul>
                </div>
              </Card>
            )}

            {/* Step 2: Wallet Connection */}
            {step === 2 && (
              <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Connect Your Polkadot Wallet
                  </h3>
                  <p className="text-gray-400">
                    Choose a wallet to connect. This will be used to track your progress and rewards.
                  </p>
                </div>

                <WalletConnector
                  connectedWallet={connectedWallet || undefined}
                  onConnect={(wallet) => setConnectedWallet(wallet)}
                />

                <div className="mt-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                  <h4 className="text-yellow-400 font-medium mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Wallet Safety Reminder
                  </h4>
                  <ul className="space-y-1 text-sm text-yellow-300/80">
                    <li>• Never share your seed phrase with anyone</li>
                    <li>• Always verify transaction details before signing</li>
                    <li>• Keep your wallet software updated</li>
                    <li>• Use hardware wallets for large amounts</li>
                  </ul>
                </div>
              </Card>
            )}

            {/* Step 3: Path Selection */}
            {step === 3 && (
              <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Choose Your Learning Path
                  </h3>
                  <p className="text-gray-400">
                    Select the track that matches your interests. You can always explore both!
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Dev Track */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedPath('dev')}
                  >
                    <Card
                      className={`cursor-pointer transition-all ${
                        selectedPath === 'dev'
                          ? 'bg-[#0AF3FF]/10 border-[#0AF3FF] shadow-lg shadow-[#0AF3FF]/20'
                          : 'bg-[#1a1a1a] border-[#0AF3FF]/20 hover:border-[#0AF3FF]/50'
                      }`}
                    >
                      <div className="p-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                          <Code className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3">
                          Developer Track
                        </h4>
                        <p className="text-gray-400 mb-4 text-sm">
                          Learn smart contracts, Web3 development, and build on Mandala Chain
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <Check className="w-4 h-4 text-[#0AF3FF]" />
                            Smart Contract Development
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <Check className="w-4 h-4 text-[#0AF3FF]" />
                            Frontend & Backend Integration
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <Check className="w-4 h-4 text-[#0AF3FF]" />
                            API & Documentation
                          </div>
                        </div>
                        <div className="mt-6 pt-4 border-t border-[#0AF3FF]/20">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Difficulty</span>
                            <span className="text-[#0AF3FF]">Intermediate</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>

                  {/* Creator Track */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedPath('creator')}
                  >
                    <Card
                      className={`cursor-pointer transition-all ${
                        selectedPath === 'creator'
                          ? 'bg-purple-500/10 border-purple-500 shadow-lg shadow-purple-500/20'
                          : 'bg-[#1a1a1a] border-[#0AF3FF]/20 hover:border-[#0AF3FF]/50'
                      }`}
                    >
                      <div className="p-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4">
                          <Palette className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3">
                          Creator Track
                        </h4>
                        <p className="text-gray-400 mb-4 text-sm">
                          Create content, build community, and share knowledge about Mandala
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <Check className="w-4 h-4 text-purple-400" />
                            Content Creation & Writing
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <Check className="w-4 h-4 text-purple-400" />
                            Video & Visual Content
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <Check className="w-4 h-4 text-purple-400" />
                            Community Building
                          </div>
                        </div>
                        <div className="mt-6 pt-4 border-t border-purple-500/20">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Difficulty</span>
                            <span className="text-purple-400">Beginner</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>

                {selectedPath && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 bg-[#0AF3FF]/10 border border-[#0AF3FF]/30 rounded-xl p-4"
                  >
                    <p className="text-sm text-gray-300">
                      <strong className="text-[#0AF3FF]">Great choice!</strong> You've selected the{' '}
                      {selectedPath === 'dev' ? 'Developer' : 'Creator'} track. You'll receive personalized 
                      quest recommendations based on your path.
                    </p>
                  </motion.div>
                )}
              </Card>
            )}

            {/* Step 4: Social Links */}
            {step === 4 && (
              <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Connect Social Accounts (Optional)
                  </h3>
                  <p className="text-gray-400">
                    Link your social accounts to verify certain quests and engage with the community.
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  {[
                    { name: 'Twitter/X', icon: Twitter, color: 'from-blue-500 to-blue-600' },
                    { name: 'Discord', icon: MessageCircle, color: 'from-indigo-500 to-indigo-600' },
                    { name: 'Telegram', icon: MessageCircle, color: 'from-sky-500 to-sky-600' },
                  ].map((social, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-[#1a1a1a] rounded-xl hover:bg-[#1a1a1a]/80 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center`}>
                          <social.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium">{social.name}</h4>
                          <p className="text-xs text-gray-400">
                            {connectedSocials.includes(social.name) ? 'Connected' : 'Not connected'}
                          </p>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant={connectedSocials.includes(social.name) ? 'outline' : 'default'}
                        className={
                          connectedSocials.includes(social.name)
                            ? 'border-[#0AF3FF] text-[#0AF3FF]'
                            : 'bg-[#0AF3FF] text-black hover:bg-[#0AF3FF]/90'
                        }
                        onClick={() => toggleSocial(social.name)}
                      >
                        {connectedSocials.includes(social.name) ? 'Disconnect' : 'Connect'}
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="bg-[#0AF3FF]/10 border border-[#0AF3FF]/30 rounded-xl p-4">
                  <p className="text-sm text-gray-300">
                    <strong className="text-[#0AF3FF]">Privacy Note:</strong> Your social connections 
                    are only used for quest verification and optional community features. You can disconnect 
                    them anytime in settings.
                  </p>
                </div>
              </Card>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8">
          <Button
            variant="ghost"
            onClick={handleBack}
            disabled={step === 1}
            className="text-gray-400 hover:text-white"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            className="bg-[#0AF3FF] text-black hover:bg-[#0AF3FF]/90"
          >
            {step === totalSteps ? 'Complete Setup' : 'Next'}
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
