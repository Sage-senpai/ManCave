import { createContext, useContext, useState, ReactNode } from 'react';

export type AdminRole = 'super-admin' | 'track-admin' | 'reviewer' | 'content-manager' | 'moderator' | 'user';

interface AdminContextType {
  isAdminMode: boolean;
  adminRole: AdminRole;
  toggleAdminMode: () => void;
  setAdminRole: (role: AdminRole) => void;
  hasPermission: (permission: string) => boolean;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const rolePermissions: Record<AdminRole, string[]> = {
  'super-admin': ['all'],
  'track-admin': ['quests.manage', 'submissions.review', 'users.view', 'users.mentor'],
  'reviewer': ['submissions.review', 'users.view'],
  'content-manager': ['content.manage', 'content.publish'],
  'moderator': ['reports.view', 'reports.action', 'submissions.flag'],
  'user': [],
};

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [adminRole, setAdminRole] = useState<AdminRole>('super-admin'); // Default for demo

  const toggleAdminMode = () => {
    setIsAdminMode(!isAdminMode);
  };

  const hasPermission = (permission: string): boolean => {
    const permissions = rolePermissions[adminRole];
    return permissions.includes('all') || permissions.includes(permission);
  };

  return (
    <AdminContext.Provider
      value={{ isAdminMode, adminRole, toggleAdminMode, setAdminRole, hasPermission }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
}
