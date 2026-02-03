import { Card } from './ui/card';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

interface Wallet {
  name: string;
  icon: string;
  installed?: boolean;
  connected?: boolean;
}

interface WalletConnectorProps {
  onConnect?: (walletName: string) => void;
  connectedWallet?: string;
}

export function WalletConnector({ onConnect, connectedWallet }: WalletConnectorProps) {
  const wallets: Wallet[] = [
    { name: 'SubWallet', icon: '🔷', installed: true },
    { name: 'Talisman', icon: '🔮', installed: true },
    { name: 'Polkadot.js', icon: '⚡', installed: true },
    { name: 'Nova Wallet', icon: '⭐', installed: false },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {wallets.map((wallet, index) => (
        <motion.div
          key={wallet.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card 
            className={`bg-[#0a0a0a] border-[#0AF3FF]/20 hover:border-[#0AF3FF]/50 transition-all cursor-pointer overflow-hidden group ${
              connectedWallet === wallet.name ? 'border-[#0AF3FF] bg-[#0AF3FF]/5' : ''
            }`}
            onClick={() => wallet.installed && onConnect?.(wallet.name)}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{wallet.icon}</div>
                  <div>
                    <h4 className="text-white font-medium">{wallet.name}</h4>
                    <p className="text-xs text-gray-400">
                      {wallet.installed ? 'Installed' : 'Not Installed'}
                    </p>
                  </div>
                </div>
                {connectedWallet === wallet.name && (
                  <CheckCircle2 className="w-5 h-5 text-[#0AF3FF]" />
                )}
              </div>
              
              <Button
                className={`w-full ${
                  connectedWallet === wallet.name
                    ? 'bg-[#0AF3FF] text-black hover:bg-[#0AF3FF]/90'
                    : 'bg-[#0AF3FF]/10 text-[#0AF3FF] hover:bg-[#0AF3FF]/20'
                }`}
                disabled={!wallet.installed || connectedWallet === wallet.name}
              >
                {connectedWallet === wallet.name ? 'Connected' : 'Connect'}
              </Button>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
