import { useEffect, useState } from 'react';
import { 
  User as FirebaseUser, 
  signInWithEmailAndPassword, 
  signOut as firebaseSignOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import { User, UserRole, UserPermissions } from '@/types';

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

// Default permissions for different roles
const getDefaultPermissions = (role: UserRole): UserPermissions => {
  const allFalse = {
    read: false,
    write: false,
    delete: false,
  };

  switch (role) {
    case 'superadmin':
      return {
        clients: { read: true, write: true, delete: true },
        services: { read: true, write: true, delete: true },
        billing: { read: true, write: true, delete: true },
        support: { read: true, write: true, delete: true },
        cms: { read: true, write: true, delete: true },
        analytics: { read: true, write: true, delete: true },
      };
    case 'admin':
      return {
        clients: { read: true, write: true, delete: false },
        services: { read: true, write: true, delete: false },
        billing: { read: true, write: true, delete: false },
        support: { read: true, write: true, delete: false },
        cms: { read: true, write: true, delete: false },
        analytics: { read: true, write: false, delete: false },
      };
    case 'support':
      return {
        clients: { read: true, write: false, delete: false },
        services: { read: true, write: false, delete: false },
        billing: { read: false, write: false, delete: false },
        support: { read: true, write: true, delete: false },
        cms: { read: false, write: false, delete: false },
        analytics: { read: false, write: false, delete: false },
      };
    case 'sales':
      return {
        clients: { read: true, write: true, delete: false },
        services: { read: true, write: true, delete: false },
        billing: { read: true, write: false, delete: false },
        support: { read: true, write: false, delete: false },
        cms: { read: false, write: false, delete: false },
        analytics: { read: true, write: false, delete: false },
      };
    case 'billing':
      return {
        clients: { read: true, write: false, delete: false },
        services: { read: true, write: false, delete: false },
        billing: { read: true, write: true, delete: false },
        support: { read: false, write: false, delete: false },
        cms: { read: false, write: false, delete: false },
        analytics: { read: true, write: false, delete: false },
      };
    case 'client':
      return {
        clients: allFalse,
        services: allFalse,
        billing: allFalse,
        support: allFalse,
        cms: allFalse,
        analytics: allFalse,
      };
    default:
      return {
        clients: allFalse,
        services: allFalse,
        billing: allFalse,
        support: allFalse,
        cms: allFalse,
        analytics: allFalse,
      };
  }
};

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null,
  });

  const fetchUserData = async (firebaseUser: FirebaseUser): Promise<User | null> => {
    try {
      const userDocRef = doc(db, 'users', firebaseUser.uid);
      const userDoc = await getDoc(userDocRef);
      
      if (userDoc.exists()) {
        const userData = userDoc.data() as User;
        return {
          ...userData,
          uid: firebaseUser.uid,
          email: firebaseUser.email || userData.email,
          displayName: firebaseUser.displayName || userData.displayName,
          photoURL: firebaseUser.photoURL || userData.photoURL,
        };
      } else {
        // Create default user document if it doesn't exist
        const newUser: User = {
          uid: firebaseUser.uid,
          email: firebaseUser.email || '',
          displayName: firebaseUser.displayName || '',
          photoURL: firebaseUser.photoURL || undefined,
          role: 'client', // Default role
          permissions: getDefaultPermissions('client'),
          active: true,
          twoFactorEnabled: false,
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now(),
        };
        
        await setDoc(userDocRef, newUser);
        return newUser;
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const userData = await fetchUserData(firebaseUser);
          setAuthState({
            user: userData,
            loading: false,
            error: null,
          });
        } catch (error) {
          setAuthState({
            user: null,
            loading: false,
            error: 'Error loading user data',
          });
        }
      } else {
        setAuthState({
          user: null,
          loading: false,
          error: null,
        });
      }
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      setAuthState(prev => ({ ...prev, loading: true, error: null }));
      const result = await signInWithEmailAndPassword(auth, email, password);
      const userData = await fetchUserData(result.user);
      
      // Update last login
      if (userData) {
        const userDocRef = doc(db, 'users', userData.uid);
        await setDoc(userDocRef, { 
          ...userData, 
          lastLogin: Timestamp.now(),
          updatedAt: Timestamp.now() 
        }, { merge: true });
      }
      
      setAuthState({
        user: userData,
        loading: false,
        error: null,
      });
      
      return { success: true };
    } catch (error: any) {
      const errorMessage = error.code === 'auth/invalid-credential' 
        ? 'Credenciales inválidas' 
        : 'Error al iniciar sesión';
        
      setAuthState({
        user: null,
        loading: false,
        error: errorMessage,
      });
      
      return { success: false, error: errorMessage };
    }
  };

  const signUp = async (
    email: string, 
    password: string, 
    displayName: string,
    role: UserRole = 'client'
  ) => {
    try {
      setAuthState(prev => ({ ...prev, loading: true, error: null }));
      const result = await createUserWithEmailAndPassword(auth, email, password);
      
      const newUser: User = {
        uid: result.user.uid,
        email: result.user.email || email,
        displayName,
        role,
        permissions: getDefaultPermissions(role),
        active: true,
        twoFactorEnabled: false,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      };
      
      const userDocRef = doc(db, 'users', result.user.uid);
      await setDoc(userDocRef, newUser);
      
      setAuthState({
        user: newUser,
        loading: false,
        error: null,
      });
      
      return { success: true };
    } catch (error: any) {
      const errorMessage = error.code === 'auth/email-already-in-use'
        ? 'Este email ya está registrado'
        : 'Error al crear cuenta';
        
      setAuthState({
        user: null,
        loading: false,
        error: errorMessage,
      });
      
      return { success: false, error: errorMessage };
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      setAuthState({
        user: null,
        loading: false,
        error: null,
      });
      return { success: true };
    } catch (error: any) {
      return { success: false, error: 'Error al cerrar sesión' };
    }
  };

  const hasPermission = (collection: keyof UserPermissions, operation: keyof UserPermissions['clients']) => {
    return authState.user?.permissions[collection][operation] || false;
  };

  const hasRole = (role: UserRole) => {
    return authState.user?.role === role;
  };

  const hasAnyRole = (roles: UserRole[]) => {
    return authState.user?.role ? roles.includes(authState.user.role) : false;
  };

  const isAdmin = () => {
    return hasAnyRole(['superadmin', 'admin']);
  };

  const isSuperAdmin = () => {
    return hasRole('superadmin');
  };

  return {
    user: authState.user,
    loading: authState.loading,
    error: authState.error,
    signIn,
    signUp,
    signOut,
    hasPermission,
    hasRole,
    hasAnyRole,
    isAdmin,
    isSuperAdmin,
  };
};