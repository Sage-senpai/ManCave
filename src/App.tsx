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
import { AdminOverviewPage } from './components/admin/pages/AdminOverviewPage';
import { AdminQuestsPage } from './components/admin/pages/AdminQuestsPage';
import { AdminSubmissionsPage } from './components/admin/pages/AdminSubmissionsPage';
import { AdminUsersPage } from './components/admin/pages/AdminUsersPage';

type Page = 'landing' | 'onboarding' | 'dashboard' | 'quests' | 'profile' | 'knowledge' | 'chat' |
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

  const isAdminPage = currentPage.startsWith('admin-');
  const showBackButton = ['quests', 'profile', 'knowledge', 'chat'].includes(currentPage);
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

      {/* Placeholder for remaining admin pages */}
      {['admin-content', 'admin-economy', 'admin-analytics', 
        'admin-announcements', 'admin-moderation', 'admin-settings'].includes(currentPage) && (
        <div className="min-h-screen pt-24 pb-12 px-4 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              {currentPage.split('-')[1].charAt(0).toUpperCase() + currentPage.split('-')[1].slice(1)} Page
            </h1>
            <p className="text-gray-400 mb-6">This admin section is under development</p>
            <button
              onClick={() => handleNavigate('admin-overview')}
              className="text-[#0AF3FF] hover:text-[#0AF3FF]/80"
            >
              ← Back to Overview
            </button>
          </div>
        </div>
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