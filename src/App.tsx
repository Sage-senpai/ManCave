import { useState, useEffect } from 'react';
import { AdminProvider, useAdmin } from './components/AdminContext';
import { Navigation } from './components/Navigation';
import { LandingPage } from './components/pages/LandingPage';
import { OnboardingPage } from './components/pages/OnboardingPage';
import { DashboardPage } from './components/pages/DashboardPage';
import { QuestBoardPage } from './components/pages/QuestBoardPage';
import { ProfilePage } from './components/pages/ProfilePage';
import { KnowledgeHubPage } from './components/pages/KnowledgeHubPage';
import { ChatPage } from './components/pages/ChatPage';
import { SettingsPage } from './components/pages/SettingsPage';
import { WalletPage } from './components/pages/WalletPage';
import { AdminOverviewPage } from './components/admin/pages/AdminOverviewPage';
import { AdminQuestsPage } from './components/admin/pages/AdminQuestsPage';
import { AdminSubmissionsPage } from './components/admin/pages/AdminSubmissionsPage';
import { AdminUsersPage } from './components/admin/pages/AdminUsersPage';
import { AdminContentPage } from './components/admin/pages/AdminContentPage';
import { AdminEconomyPage } from './components/admin/pages/AdminEconomyPage';
import { AdminAnalyticsPage } from './components/admin/pages/AdminAnalyticsPage';
import { AdminAnnouncementsPage } from './components/admin/pages/AdminAnnouncementsPage';
import { AdminModerationPage } from './components/admin/pages/AdminModerationPage';
import { AdminSettingsPage } from './components/admin/pages/AdminSettingsPage';

type Page = 'landing' | 'onboarding' | 'dashboard' | 'quests' | 'profile' | 'knowledge' | 'chat' | 'settings' | 'wallet' |
  'admin-overview' | 'admin-quests' | 'admin-submissions' | 'admin-users' | 'admin-content' |
  'admin-economy' | 'admin-analytics' | 'admin-announcements' | 'admin-moderation' | 'admin-settings';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const { isAdminMode, toggleAdminMode } = useAdmin();

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOnboardingComplete = () => {
    setCurrentPage('dashboard');
  };

  // Redirect to appropriate page when toggling admin mode
  useEffect(() => {
    if (isAdminMode && !currentPage.startsWith('admin-')) {
      setCurrentPage('admin-overview');
    } else if (!isAdminMode && currentPage.startsWith('admin-')) {
      setCurrentPage('dashboard');
    }
  }, [isAdminMode, currentPage]);

  const showBackButton = ['quests', 'profile', 'knowledge', 'chat', 'settings', 'wallet'].includes(currentPage);
  const showNavigation = currentPage !== 'onboarding';

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {showNavigation && (
        <Navigation 
          onNavigate={handleNavigate} 
          currentPage={currentPage}
          showBackButton={showBackButton}
          backButtonLabel="Dashboard"
          isAdminMode={isAdminMode}
          toggleAdminMode={toggleAdminMode}
        />
      )}
      
      {currentPage === 'landing' && (
        <LandingPage onNavigate={handleNavigate} />
      )}
      
      {currentPage === 'onboarding' && (
        <OnboardingPage onComplete={handleOnboardingComplete} />
      )}
      
      {currentPage === 'dashboard' && (
        <DashboardPage onNavigate={handleNavigate} />
      )}
      
      {currentPage === 'quests' && (
        <QuestBoardPage onNavigate={handleNavigate} />
      )}
      
      {currentPage === 'profile' && (
        <ProfilePage onNavigate={handleNavigate} />
      )}
      
      {currentPage === 'knowledge' && (
        <KnowledgeHubPage onNavigate={handleNavigate} />
      )}
      
      {currentPage === 'chat' && (
        <ChatPage onNavigate={handleNavigate} />
      )}

      {currentPage === 'settings' && (
        <SettingsPage onNavigate={handleNavigate} />
      )}

      {currentPage === 'wallet' && (
        <WalletPage onNavigate={handleNavigate} />
      )}

      {/* Admin Pages */}
      {currentPage === 'admin-overview' && (
        <AdminOverviewPage onNavigate={handleNavigate} currentAdminPage={currentPage} />
      )}

      {currentPage === 'admin-quests' && (
        <AdminQuestsPage onNavigate={handleNavigate} currentAdminPage={currentPage} />
      )}

      {currentPage === 'admin-submissions' && (
        <AdminSubmissionsPage onNavigate={handleNavigate} currentAdminPage={currentPage} />
      )}

      {currentPage === 'admin-users' && (
        <AdminUsersPage onNavigate={handleNavigate} currentAdminPage={currentPage} />
      )}

      {currentPage === 'admin-content' && (
        <AdminContentPage onNavigate={handleNavigate} currentAdminPage={currentPage} />
      )}

      {currentPage === 'admin-economy' && (
        <AdminEconomyPage onNavigate={handleNavigate} currentAdminPage={currentPage} />
      )}

      {currentPage === 'admin-analytics' && (
        <AdminAnalyticsPage onNavigate={handleNavigate} currentAdminPage={currentPage} />
      )}

      {currentPage === 'admin-announcements' && (
        <AdminAnnouncementsPage onNavigate={handleNavigate} currentAdminPage={currentPage} />
      )}

      {currentPage === 'admin-moderation' && (
        <AdminModerationPage onNavigate={handleNavigate} currentAdminPage={currentPage} />
      )}

      {currentPage === 'admin-settings' && (
        <AdminSettingsPage onNavigate={handleNavigate} currentAdminPage={currentPage} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <AdminProvider>
      <AppContent />
    </AdminProvider>
  );
}