// SCRIPT DEFINITIVO PARA CREAR SUPERADMIN
// Ejecutar en la consola del navegador en https://newarciicloud-com.onrender.com

(function() {
  console.log('🚀 SCRIPT DEFINITIVO DE CREACIÓN DE SUPERADMIN');
  
  window.createSuperAdminDirect = async function(email) {
    try {
      console.log(`🔧 Creando superadmin para: ${email}`);
      
      // Importar Firebase directamente desde el objeto global
      if (!window.firebase || !window.firebase.db) {
        console.error('❌ Firebase no está disponible. Intentando cargar...');
        return false;
      }
      
      const { collection, addDoc, query, where, getDocs, updateDoc, doc, Timestamp } = await import('https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js');
      const db = window.firebase.db;
      
      // Crear usuario directamente
      const userData = {
        uid: 'superadmin-' + Date.now(),
        email: email,
        displayName: 'Super Admin',
        photoURL: undefined,
        role: 'superadmin',
        permissions: {
          clients: { read: true, write: true, delete: true },
          services: { read: true, write: true, delete: true },
          billing: { read: true, write: true, delete: true },
          support: { read: true, write: true, delete: true },
          cms: { read: true, write: true, delete: true },
          analytics: { read: true, write: true, delete: true },
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
      
      // Crear documento
      const usersRef = collection(db, 'users');
      const docRef = await addDoc(usersRef, userData);
      
      console.log('✅ SUPERADMIN CREADO EXITOSAMENTE');
      console.log('📋 ID del documento:', docRef.id);
      console.log('📧 Email:', email);
      console.log('🔑 Rol: superadmin');
      
      return true;
    } catch (error) {
      console.error('❌ ERROR:', error);
      return false;
    }
  };
  
  // Auto-ejecutar
  console.log('📋 Ejecutando automáticamente...');
  createSuperAdminDirect('luisgbo@grupoarcii.com');
})();