#!/usr/bin/env node

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs, updateDoc, doc, Timestamp } from 'firebase/firestore';

// Configuración de Firebase (usando la correcta del .env.local)
const firebaseConfig = {
  apiKey: "AIzaSyA9aoORDoYpDkN0E5OYSmObqG735fZZS2Y",
  authDomain: "newarciicloud.firebaseapp.com", 
  projectId: "newarciicloud",
  storageBucket: "newarciicloud.firebasestorage.app",
  messagingSenderId: "97444629257",
  appId: "1:97444629257:web:b5939807786aa4333061d8"
};

console.log('🚀 ASIGNANDO ROL SUPERADMIN A USUARIO REAL...');

async function assignSuperAdminRole() {
  try {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    console.log('✅ Firebase inicializado correctamente');
    
    const email = 'luisgbo@grupoarcii.com';
    
    console.log(`🔍 Buscando usuario con email: ${email}...`);
    
    // Buscar usuario por email
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      console.log('❌ Usuario no encontrado. Primero regístrate en la app.');
      console.log('📝 Ve a: https://newarciicloud-com.onrender.com/registro');
      process.exit(1);
    }
    
    // Actualizar el primer usuario encontrado
    const userDoc = querySnapshot.docs[0];
    const userId = userDoc.id;
    const userData = userDoc.data();
    
    console.log('👤 Usuario encontrado:', userData.displayName || 'Sin nombre');
    console.log('🏷️ Rol actual:', userData.role || 'sin rol');
    
    // Actualizar a superadmin
    await updateDoc(doc(db, 'users', userId), {
      role: 'superadmin',
      permissions: {
        clients: { read: true, write: true, delete: true },
        services: { read: true, write: true, delete: true },
        billing: { read: true, write: true, delete: true },
        support: { read: true, write: true, delete: true },
        cms: { read: true, write: true, delete: true },
        analytics: { read: true, write: true, delete: true }
      },
      updatedAt: Timestamp.now()
    });
    
    console.log('🎉 ¡ROL SUPERADMIN ASIGNADO EXITOSAMENTE!');
    console.log('📧 Email:', email);
    console.log('📋 Document ID:', userId);
    console.log('🔑 Nuevo rol: superadmin');
    console.log('🌐 Login URL: https://newarciicloud-com.onrender.com/admin/login');
    console.log('');
    console.log('✅ AHORA PUEDES HACER LOGIN CON TU PASSWORD');
    
  } catch (error) {
    console.error('❌ ERROR:', error.message);
    console.error('🔧 Stack trace:', error.stack);
    process.exit(1);
  }
}

// Ejecutar el script
assignSuperAdminRole()
  .then(() => {
    console.log('🏁 Script finalizado exitosamente');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Error fatal:', error);
    process.exit(1);
  });