import { ComponentType, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { UserRole } from '@/types';

interface WithAuthOptions {
  requireAuth?: boolean;
  requiredRole?: UserRole | UserRole[];
  redirectTo?: string;
}

export function withAuth<T extends {}>(
  WrappedComponent: ComponentType<T>,
  options: WithAuthOptions = {}
) {
  const {
    requireAuth = true,
    requiredRole,
    redirectTo = '/login'
  } = options;

  return function AuthComponent(props: T) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (loading) return;

      if (requireAuth && !user) {
        router.push(redirectTo);
        return;
      }

      if (user && requiredRole) {
        const allowedRoles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];
        if (!allowedRoles.includes(user.role)) {
          router.push('/dashboard');
          return;
        }
      }
    }, [user, loading, router]);

    if (loading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      );
    }

    if (requireAuth && !user) {
      return null;
    }

    if (user && requiredRole) {
      const allowedRoles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];
      if (!allowedRoles.includes(user.role)) {
        return null;
      }
    }

    return <WrappedComponent {...props} />;
  };
}