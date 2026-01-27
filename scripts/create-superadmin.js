#!/usr/bin/env node

const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp } = require('firebase-admin/firestore');

// Configuración de Firebase Admin usando variables de entorno
const serviceAccount = {
  type: "service_account",
  project_id: "newarciicloud",
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID || "dummy-key-id",
  private_key: (process.env.FIREBASE_PRIVATE_KEY || `-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC7VJTUt9Us8cKB\n-----END PRIVATE KEY-----\n`).replace(/\\n/g, '\n'),
  client_email: process.env.FIREBASE_CLIENT_EMAIL || "firebase-adminsdk-dummy@newarciicloud.iam.gserviceaccount.com",
  client_id: process.env.FIREBASE_CLIENT_ID || "dummy-client-id",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-dummy%40newarciicloud.iam.gserviceaccount.com`
};

// Configuración simple para reglas abiertas
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
    // Usar SDK web en lugar de admin para evitar problemas de autenticación
    const { initializeApp } = require('firebase/app');
    const { getFirestore, collection, addDoc, Timestamp: WebTimestamp } = require('firebase/firestore');
    
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
      createdAt: WebTimestamp.now(),
      updatedAt: WebTimestamp.now(),
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