#!/usr/bin/env node

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc, Timestamp } from 'firebase/firestore';

// Configuración de Firebase ACTUALIZADA
const firebaseConfig = {
  apiKey: "AIzaSyA9aoORDoYpDkN0E5OYSmObqG735fZZS2Y",
  authDomain: "newarciicloud.firebaseapp.com",
  projectId: "newarciicloud",
  storageBucket: "newarciicloud.firebasestorage.app",
  messagingSenderId: "543583944045",
  appId: "1:543583944045:web:1f2a3b4c5d6e7f8g9h0i"
};

// Credenciales del superadmin
const SUPER_ADMIN = {
  email: 'admin@newarcii.cloud',
  password: 'SuperAdmin2026!',
  displayName: 'Super Administrador',
  role: 'superadmin'
};

console.log('🚀 INICIANDO CREACIÓN DE SUPERADMIN...');

async function createSuperAdmin() {
  try {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);
    
    console.log('✅ Firebase inicializado correctamente');
    console.log('🔥 Creando usuario superadmin...');
    
    // Crear usuario en Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      SUPER_ADMIN.email,
      SUPER_ADMIN.password
    );

    const user = userCredential.user;
    console.log('✅ Usuario creado en Auth:', user.uid);

    // Permisos completos de superadmin
    const permissions = {
      clients: { read: true, write: true, delete: true },
      services: { read: true, write: true, delete: true },
      billing: { read: true, write: true, delete: true },
      support: { read: true, write: true, delete: true },
      cms: { read: true, write: true, delete: true },
      analytics: { read: true, write: true, delete: true },
      settings: { read: true, write: true, delete: true },
      admin: { read: true, write: true, delete: true },
      dashboard: { read: true, write: true, delete: true }
    };

    // Crear documento del usuario en Firestore con ID específico
    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      email: SUPER_ADMIN.email,
      displayName: SUPER_ADMIN.displayName,
      role: SUPER_ADMIN.role,
      permissions: permissions,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
      isActive: true,
      lastLogin: null,
      loginCount: 0,
      department: 'IT',
      phone: null,
      twoFactorEnabled: false,
      metadata: {
        createdBy: 'system',
        createdVia: 'admin-script'
      }
    });

    console.log('✅ Documento de usuario creado en Firestore');
    console.log('');
    console.log('🎉 ¡USUARIO SUPERADMIN CREADO EXITOSAMENTE!');
    console.log('');
    console.log('📋 CREDENCIALES DE ACCESO:');
    console.log('================================');
    console.log('🌐 URL: https://newarciicloud-com.onrender.com/admin/login');
    console.log('📧 Email:', SUPER_ADMIN.email);
    console.log('🔑 Password:', SUPER_ADMIN.password);
    console.log('👤 UID:', user.uid);
    console.log('🚀 Rol: superadmin');
    console.log('================================');
    console.log('');
    console.log('✅ PROCESO COMPLETADO CON ÉXITO');
    
  } catch (error) {
    console.error('❌ ERROR:', error.message);
    
    if (error.code === 'auth/email-already-in-use') {
      console.log('');
      console.log('ℹ️  El email ya está en uso. Credenciales existentes:');
      console.log('📋 CREDENCIALES DE ACCESO:');
      console.log('================================');
      console.log('🌐 URL: https://newarciicloud-com.onrender.com/admin/login');
      console.log('📧 Email:', SUPER_ADMIN.email);
      console.log('🔑 Password:', SUPER_ADMIN.password);
      console.log('🚀 Rol: superadmin');
      console.log('================================');
    } else {
      console.error('🔧 Stack trace:', error.stack);
      process.exit(1);
    }
  }
}

// Ejecutar el script
createSuperAdmin()
  .catch((error) => {
    console.error('💥 Error fatal:', error);
    process.exit(1);
  });