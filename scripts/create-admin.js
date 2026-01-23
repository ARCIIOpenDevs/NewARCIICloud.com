// Script para crear un usuario admin directamente en Firestore
// Ejecutar con: node scripts/create-admin.js

import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, Timestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBmE87ivn_N9pWAjTrYvMxlOO5P8FnKzYE",
  authDomain: "newarciicloud.firebaseapp.com",
  projectId: "newarciicloud",
  storageBucket: "newarciicloud.firebasestorage.app",
  messagingSenderId: "669688654301",
  appId: "1:669688654301:web:4a2bf45e0bd3ac5b57c6b3",
  measurementId: "G-3GKX19GTMS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getDefaultPermissions = (role) => {
  const allTrue = { read: true, write: true, delete: true };
  const allFalse = { read: false, write: false, delete: false };

  switch (role) {
    case 'superadmin':
      return {
        clients: allTrue,
        services: allTrue,
        billing: allTrue,
        support: allTrue,
        cms: allTrue,
        analytics: allTrue,
      };
    case 'admin':
      return {
        clients: allTrue,
        services: allTrue,
        billing: allTrue,
        support: allTrue,
        cms: { read: true, write: true, delete: false },
        analytics: allTrue,
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

async function createAdminUser(email, role = 'superadmin') {
  try {
    // Crear un ID de usuario temporal (en producción usar el UID real de Firebase Auth)
    const userId = 'admin-' + Date.now();
    
    const userData = {
      uid: userId,
      email: email,
      displayName: 'Admin User',
      photoURL: null,
      role: role,
      permissions: getDefaultPermissions(role),
      active: true,
      twoFactorEnabled: false,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
      department: 'IT',
      phone: '+1234567890',
      lastLogin: null,
      loginCount: 0
    };

    const userDocRef = doc(db, 'users', userId);
    await setDoc(userDocRef, userData);
    
    console.log(`✅ Usuario ${role} creado exitosamente:`);
    console.log(`   Email: ${email}`);
    console.log(`   UID: ${userId}`);
    console.log(`   Role: ${role}`);
    
    return userData;
  } catch (error) {
    console.error('❌ Error creando usuario admin:', error);
    throw error;
  }
}

// Usar con el email real
const adminEmail = 'luisgbo@grupoarcii.com';
createAdminUser(adminEmail, 'superadmin')
  .then(() => {
    console.log('🎉 Proceso completado');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Error en el proceso:', error);
    process.exit(1);
  });