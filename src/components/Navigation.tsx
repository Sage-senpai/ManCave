import { Wallet, Menu, X, Shield, User, ArrowLeft, Settings } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { Badge } from './ui/badge';

interface NavigationProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
  showBackButton?: boolean;
  backButtonLabel?: string;
  isAdminMode?: boolean;
  toggleAdminMode?: () => void;
}

export function Navigation({ 
  onNavigate, 
  currentPage, 
  showBackButton, 
  backButtonLabel,
  isAdminMode = false,
  toggleAdminMode = () => {}
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (page: string) => {
    onNavigate?.(page);
    setMobileMenuOpen(false);
  };

  const isAdminPage = currentPage?.startsWith('admin-');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-[#0AF3FF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Back Button or Logo */}
          {showBackButton && !isAdminPage ? (
            <Button
              variant="ghost"
              onClick={() => handleNavigate('dashboard')}
              className="text-white hover:text-[#0AF3FF] gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{backButtonLabel || 'Back'}</span>
            </Button>
          ) : (
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => handleNavigate(isAdminMode ? 'admin-overview' : (currentPage === 'landing' ? 'landing' : 'dashboard'))}
            >
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br flex items-center justify-center ${
                isAdminMode ? 'from-purple-500 to-purple-600' : 'from-[#0AF3FF] to-[#0880FF]'
              }`}>
                <span className="text-black font-bold">{isAdminMode ? 'A' : 'M'}</span>
              </div>
              <div>
                <span className={`text-xl font-bold transition-colors ${
                  isAdminMode ? 'text-purple-400' : 'text-white group-hover:text-[#0AF3FF]'
                }`}>
                  Mancave
                </span>
                {isAdminMode && (
                  <Badge className="ml-2 bg-purple-500 text-white text-xs">Admin</Badge>
                )}
              </div>
            </div>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Admin Mode Toggle */}
            {(currentPage === 'dashboard' || isAdminPage) && (
              <Button
                variant="outline"
                size="sm"
                onClick={toggleAdminMode}
                className={`gap-2 transition-all ${
                  isAdminMode
                    ? 'border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
                    : 'border-[#0AF3FF] text-[#0AF3FF] hover:bg-[#0AF3FF] hover:text-black'
                }`}
              >
                {isAdminMode ? <Shield className="w-4 h-4" /> : <User className="w-4 h-4" />}
                <span className="hidden lg:inline">
                  {isAdminMode ? 'Admin Mode' : 'Switch to Admin'}
                </span>
              </Button>
            )}

            {(currentPage === 'dashboard' || currentPage === 'quests' || currentPage === 'knowledge' || currentPage === 'profile' || currentPage === 'chat' || currentPage === 'settings' || currentPage === 'wallet') && (
              <>
                <button
                  onClick={() => handleNavigate('dashboard')}
                  className={`transition-colors ${
                    currentPage === 'dashboard' 
                      ? 'text-[#0AF3FF]' 
                      : 'text-white hover:text-[#0AF3FF]'
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => handleNavigate('quests')}
                  className={`transition-colors ${
                    currentPage === 'quests' 
                      ? 'text-[#0AF3FF]' 
                      : 'text-white hover:text-[#0AF3FF]'
                  }`}
                >
                  Quests
                </button>
                <button
                  onClick={() => handleNavigate('knowledge')}
                  className={`transition-colors ${
                    currentPage === 'knowledge' 
                      ? 'text-[#0AF3FF]' 
                      : 'text-white hover:text-[#0AF3FF]'
                  }`}
                >
                  Knowledge Hub
                </button>
                <button
                  onClick={() => handleNavigate('profile')}
                  className={`transition-colors ${
                    currentPage === 'profile' 
                      ? 'text-[#0AF3FF]' 
                      : 'text-white hover:text-[#0AF3FF]'
                  }`}
                >
                  Profile
                </button>
                <button
                  onClick={() => handleNavigate('chat')}
                  className={`transition-colors ${
                    currentPage === 'chat'
                      ? 'text-[#0AF3FF]'
                      : 'text-white hover:text-[#0AF3FF]'
                  }`}
                >
                  Chat
                </button>
                <button
                  onClick={() => handleNavigate('settings')}
                  className={`transition-colors ${
                    currentPage === 'settings'
                      ? 'text-[#0AF3FF]'
                      : 'text-white hover:text-[#0AF3FF]'
                  }`}
                >
                  <Settings className="w-4 h-4" />
                </button>
              </>
            )}

            {currentPage === 'landing' ? (
              <>
                <Button
                  variant="ghost"
                  onClick={() => handleNavigate('onboarding')}
                  className="text-white hover:text-[#0AF3FF] hover:bg-[#0AF3FF]/10"
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="border-[#0AF3FF] text-[#0AF3FF] hover:bg-[#0AF3FF] hover:text-black"
                  onClick={() => window.open('https://mandalachain.io', '_blank')}
                >
                  Official Website
                </Button>
              </>
            ) : !isAdminPage && (
              <Button
                variant="outline"
                className="border-[#0AF3FF] text-[#0AF3FF] hover:bg-[#0AF3FF] hover:text-black gap-2"
                onClick={() => handleNavigate('wallet')}
              >
                <Wallet className="w-4 h-4" />
                <span className="hidden lg:inline">0x7a3f...92c4</span>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#0AF3FF]/20">
            {(currentPage === 'dashboard' || currentPage === 'quests' || currentPage === 'knowledge' || currentPage === 'profile' || currentPage === 'chat' || currentPage === 'settings' || currentPage === 'wallet') && (
              <div className="flex flex-col gap-2">
                {/* Admin Mode Toggle for Mobile */}
                {(currentPage === 'dashboard' || isAdminPage) && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleAdminMode}
                    className={`w-full gap-2 transition-all mb-2 ${
                      isAdminMode
                        ? 'border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
                        : 'border-[#0AF3FF] text-[#0AF3FF] hover:bg-[#0AF3FF] hover:text-black'
                    }`}
                  >
                    {isAdminMode ? <Shield className="w-4 h-4" /> : <User className="w-4 h-4" />}
                    {isAdminMode ? 'Admin Mode' : 'Switch to Admin'}
                  </Button>
                )}
                <button
                  onClick={() => handleNavigate('dashboard')}
                  className={`py-2 text-left ${
                    currentPage === 'dashboard' 
                      ? 'text-[#0AF3FF]' 
                      : 'text-white hover:text-[#0AF3FF]'
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => handleNavigate('quests')}
                  className={`py-2 text-left ${
                    currentPage === 'quests' 
                      ? 'text-[#0AF3FF]' 
                      : 'text-white hover:text-[#0AF3FF]'
                  }`}
                >
                  Quests
                </button>
                <button
                  onClick={() => handleNavigate('knowledge')}
                  className={`py-2 text-left ${
                    currentPage === 'knowledge' 
                      ? 'text-[#0AF3FF]' 
                      : 'text-white hover:text-[#0AF3FF]'
                  }`}
                >
                  Knowledge Hub
                </button>
                <button
                  onClick={() => handleNavigate('profile')}
                  className={`py-2 text-left ${
                    currentPage === 'profile' 
                      ? 'text-[#0AF3FF]' 
                      : 'text-white hover:text-[#0AF3FF]'
                  }`}
                >
                  Profile
                </button>
                <button
                  onClick={() => handleNavigate('chat')}
                  className={`py-2 text-left ${
                    currentPage === 'chat'
                      ? 'text-[#0AF3FF]'
                      : 'text-white hover:text-[#0AF3FF]'
                  }`}
                >
                  Chat
                </button>
                <button
                  onClick={() => handleNavigate('wallet')}
                  className={`py-2 text-left ${
                    currentPage === 'wallet'
                      ? 'text-[#0AF3FF]'
                      : 'text-white hover:text-[#0AF3FF]'
                  }`}
                >
                  Wallet
                </button>
                <button
                  onClick={() => handleNavigate('settings')}
                  className={`py-2 text-left ${
                    currentPage === 'settings'
                      ? 'text-[#0AF3FF]'
                      : 'text-white hover:text-[#0AF3FF]'
                  }`}
                >
                  Settings
                </button>
              </div>
            )}

            {currentPage === 'landing' && (
              <div className="flex flex-col gap-2">
                <Button
                  variant="ghost"
                  onClick={() => handleNavigate('onboarding')}
                  className="w-full text-white hover:text-[#0AF3FF] hover:bg-[#0AF3FF]/10"
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-[#0AF3FF] text-[#0AF3FF] hover:bg-[#0AF3FF] hover:text-black"
                >
                  Official Website
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}