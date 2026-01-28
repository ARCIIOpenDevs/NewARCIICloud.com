#!/usr/bin/env node

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase ACTUALIZADA
const firebaseConfig = {
  apiKey: "AIzaSyA9aoORDoYpDkN0E5OYSmObqG735fZZS2Y",
  authDomain: "newarciicloud.firebaseapp.com",
  projectId: "newarciicloud",
  storageBucket: "newarciicloud.firebasestorage.app",
  messagingSenderId: "543583944045",
  appId: "1:543583944045:web:1f2a3b4c5d6e7f8g9h0i"
};

console.log('🚀 CONFIGURANDO ÍNDICES DE FIRESTORE...');

async function createFirestoreIndexes() {
  try {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    console.log('✅ Firebase inicializado correctamente');
    console.log('');
    console.log('📋 ENLACES PARA CREAR ÍNDICES REQUERIDOS:');
    console.log('===============================================');
    console.log('');
    
    // Índice para agentes con campos: activo, nombre, __name__
    console.log('🔗 ÍNDICE PARA COLECCIÓN "agentes":');
    console.log('URL: https://console.firebase.google.com/v1/r/project/newarciicloud/firestore/indexes?create_composite=Ck1wcm9qZWN0cy9uZXdhcmNpaWNsb3VkL2RhdGFiYXNlcy8oZGVmYXVsdCkvY29sbGVjdGlvbkdyb3Vwcy9hZ2VudGVzL2luZGV4ZXMvXxABGgoKBmFjdGl2bxABGgoKBm5vbWJyZRABGgwKCF9fbmFtZV9fEAE');
    console.log('Campos: activo (Ascending), nombre (Ascending), __name__ (Ascending)');
    console.log('');
    
    console.log('📝 PASOS PARA CREAR LOS ÍNDICES:');
    console.log('1. Abra la URL anterior en su navegador');
    console.log('2. Inicie sesión en Firebase Console');
    console.log('3. Haga clic en "Crear índice"');
    console.log('4. Espere a que el índice se complete (puede tomar unos minutos)');
    console.log('');
    
    console.log('🔍 OTROS ÍNDICES RECOMENDADOS:');
    console.log('- tickets: estado + fechaCreacion');
    console.log('- clientes: activo + nombre');
    console.log('- servicios: activo + tipo');
    console.log('');
    
    console.log('✅ CONFIGURACIÓN COMPLETADA');
    console.log('Los índices se crearán automáticamente cuando acceda a las URLs.');
    
  } catch (error) {
    console.error('❌ ERROR:', error.message);
    process.exit(1);
  }
}

// Ejecutar el script
createFirestoreIndexes();