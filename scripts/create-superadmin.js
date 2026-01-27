#!/usr/bin/env node

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBmE87ivn_N9pWAjTrYvMxlOO5P8FnKzYE",
  authDomain: "newarciicloud.firebaseapp.com", 
  projectId: "newarciicloud",
  storageBucket: "newarciicloud.firebasestorage.app",
  messagingSenderId: "669688654301",
  appId: "1:669688654301:web:4a2bf45e0bd3ac5b57c6b3"
};

console.log('🚀 INICIANDO CREACIÓN DE SUPERADMIN...');

async function createSuperAdmin() {
  try {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    console.log('✅ Firebase inicializado correctamente');
    
    const email = 'luisgbo@grupoarcii.com';
    const userData = {
      uid: 'superadmin-' + Date.now(),
      email: email,
      displayName: 'Super Admin',
      photoURL: null,
      role: 'superadmin',
      permissions: {
        clients: { read: true, write: true, delete: true },
        services: { read: true, write: true, delete: true },
        billing: { read: true, write: true, delete: true },
        support: { read: true, write: true, delete: true },
        cms: { read: true, write: true, delete: true },
        analytics: { read: true, write: true, delete: true }
      },
      active: true,
      twoFactorEnabled: false,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
      department: 'IT',
      phone: null,
      lastLogin: null,
      loginCount: 0
    };
    
    console.log('📝 Creando documento de usuario...');
    const docRef = await addDoc(collection(db, 'users'), userData);
    
    console.log('🎉 ¡SUPERADMIN CREADO EXITOSAMENTE!');
    console.log('📧 Email:', email);
    console.log('📋 Document ID:', docRef.id);
    console.log('🔑 Rol: superadmin');
    console.log('🌐 Login URL: https://newarciicloud-com.onrender.com/admin/login');
    console.log('');
    console.log('✅ PROCESO COMPLETADO CON ÉXITO');
    
  } catch (error) {
    console.error('❌ ERROR:', error.message);
    console.error('🔧 Stack trace:', error.stack);
    process.exit(1);
  }
}

// Ejecutar el script
createSuperAdmin()
  .then(() => {
    console.log('🏁 Script finalizado exitosamente');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Error fatal:', error);
    process.exit(1);
  });