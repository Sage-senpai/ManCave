import { LayoutDashboard, FileEdit, ClipboardCheck, Users, BookOpen, Coins, BarChart3, Megaphone, Flag, Settings, ChevronRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAdmin } from '../AdminContext';
import { useState } from 'react';
import { Button } from '../ui/button';

interface AdminSidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  collapsed?: boolean;
}

export function AdminSidebar({ currentPage, onNavigate, collapsed = false }: AdminSidebarProps) {
  const { hasPermission } = useAdmin();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { 
      id: 'admin-overview', 
      label: 'Overview', 
      icon: LayoutDashboard,
      permission: 'all'
    },
    { 
      id: 'admin-quests', 
      label: 'Quest Management', 
      icon: FileEdit,
      permission: 'quests.manage'
    },
    { 
      id: 'admin-submissions', 
      label: 'Submissions & Reviews', 
      icon: ClipboardCheck,
      permission: 'submissions.review'
    },
    { 
      id: 'admin-users', 
      label: 'Users & Mentorship', 
      icon: Users,
      permission: 'users.view'
    },
    { 
      id: 'admin-content', 
      label: 'Content Hub', 
      icon: BookOpen,
      permission: 'content.manage'
    },
    { 
      id: 'admin-economy', 
      label: 'Economy & Rewards', 
      icon: Coins,
      permission: 'all'
    },
    { 
      id: 'admin-analytics', 
      label: 'Analytics', 
      icon: BarChart3,
      permission: 'all'
    },
    { 
      id: 'admin-announcements', 
      label: 'Announcements', 
      icon: Megaphone,
      permission: 'all'
    },
    { 
      id: 'admin-moderation', 
      label: 'Reports & Moderation', 
      icon: Flag,
      permission: 'reports.view'
    },
    { 
      id: 'admin-settings', 
      label: 'Settings', 
      icon: Settings,
      permission: 'all'
    },
  ];

  const visibleItems = menuItems.filter(item => 
    item.permission === 'all' || hasPermission(item.permission)
  );

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        className="lg:hidden fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#0AF3FF] text-black hover:bg-[#0AF3FF]/90 shadow-2xl shadow-[#0AF3FF]/50"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', damping: 25 }}
            className="lg:hidden fixed left-0 top-0 bottom-0 w-64 bg-[#0a0a0a] border-r border-[#0AF3FF]/20 z-50 pt-20"
          >
            <div className="p-4">
              <div className="space-y-2">
                {visibleItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.id;
                  
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleNavigate(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        isActive
                          ? 'bg-[#0AF3FF]/10 border border-[#0AF3FF]/30 text-[#0AF3FF]'
                          : 'text-gray-400 hover:text-white hover:bg-[#1a1a1a]'
                      }`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className="flex-1 text-left text-sm">{item.label}</span>
                      {isActive && <ChevronRight className="w-4 h-4" />}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <div className={`bg-[#0a0a0a] border-r border-[#0AF3FF]/20 transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-64'
      } hidden lg:block`}>
        <div className="p-4">
          <div className="space-y-2">
            {visibleItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => onNavigate(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? 'bg-[#0AF3FF]/10 border border-[#0AF3FF]/30 text-[#0AF3FF]'
                      : 'text-gray-400 hover:text-white hover:bg-[#1a1a1a]'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {!collapsed && (
                    <>
                      <span className="flex-1 text-left text-sm">{item.label}</span>
                      {isActive && <ChevronRight className="w-4 h-4" />}
                    </>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}