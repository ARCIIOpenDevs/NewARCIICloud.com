'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { User, UserRole, UserPermissions } from '@/types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signUp: (email: string, password: string, displayName: string, role?: UserRole) => Promise<{ success: boolean; error?: string }>;
  signOut: () => Promise<{ success: boolean; error?: string }>;
  hasPermission: (collection: keyof UserPermissions, operation: keyof UserPermissions['clients']) => boolean;
  hasRole: (role: UserRole) => boolean;
  hasAnyRole: (roles: UserRole[]) => boolean;
  isAdmin: () => boolean;
  isSuperAdmin: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const auth = useAuth();

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};

// Higher-order component for protected routes
interface WithAuthProps {
  requiredRole?: UserRole | UserRole[];
  requiredPermission?: {
    collection: keyof UserPermissions;
    operation: keyof UserPermissions['clients'];
  };
  fallback?: ReactNode;
}

export const withAuth = <P extends object>(
  Component: React.ComponentType<P>,
  options: WithAuthProps = {}
) => {
  const AuthenticatedComponent = (props: P) => {
    const { user, loading, hasRole, hasAnyRole, hasPermission } = useAuthContext();

    if (loading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      );
    }

    if (!user) {
      return options.fallback || (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Acceso Denegado</h1>
            <p className="text-gray-600">Debes iniciar sesión para acceder a esta página.</p>
          </div>
        </div>
      );
    }

    // Check role requirements
    if (options.requiredRole) {
      const roles = Array.isArray(options.requiredRole) ? options.requiredRole : [options.requiredRole];
      if (!hasAnyRole(roles)) {
        return options.fallback || (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Permisos Insuficientes</h1>
              <p className="text-gray-600">No tienes permisos para acceder a esta página.</p>
            </div>
          </div>
        );
      }
    }

    // Check permission requirements
    if (options.requiredPermission) {
      const { collection, operation } = options.requiredPermission;
      if (!hasPermission(collection, operation)) {
        return options.fallback || (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Permisos Insuficientes</h1>
              <p className="text-gray-600">No tienes permisos para realizar esta acción.</p>
            </div>
          </div>
        );
      }
    }

    return <Component {...props} />;
  };

  AuthenticatedComponent.displayName = `withAuth(${Component.displayName || Component.name})`;
  return AuthenticatedComponent;
};

// Hook for checking permissions in components
export const usePermissions = () => {
  const { hasPermission, hasRole, hasAnyRole, isAdmin, isSuperAdmin } = useAuthContext();

  return {
    hasPermission,
    hasRole,
    hasAnyRole,
    isAdmin,
    isSuperAdmin,
    canRead: (collection: keyof UserPermissions) => hasPermission(collection, 'read'),
    canWrite: (collection: keyof UserPermissions) => hasPermission(collection, 'write'),
    canDelete: (collection: keyof UserPermissions) => hasPermission(collection, 'delete'),
  };
};