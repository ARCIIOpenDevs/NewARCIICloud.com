// Script mejorado para la consola del navegador
// Copia y pega esto COMPLETO en la consola en https://newarciicloud-com.onrender.com

(function() {
  console.log('🚀 Iniciando script de creación de admin...');
  
  // Función para crear admin directamente en Firestore
  async function createSuperAdmin(email) {
    try {
      // Importar las funciones de Firebase necesarias
      const { doc, setDoc, Timestamp, collection, query, where, getDocs } = window.firebase.firestore;
      const { db } = window.firebase;
      
      if (!db) {
        throw new Error('Firebase no está inicializado');
      }
      
      console.log(`🔍 Buscando usuario existente con email: ${email}...`);
      
      // Buscar usuario existente por email
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('email', '==', email));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        // Usuario existe, actualizar rol
        const userDoc = querySnapshot.docs[0];
        const userId = userDoc.id;
        
        console.log(`👤 Usuario encontrado con ID: ${userId}`);
        console.log('⬆️ Actualizando permisos a SUPERADMIN...');
        
        const userData = {
          role: 'superadmin',
          permissions: {
            clients: { read: true, write: true, delete: true },
            services: { read: true, write: true, delete: true },
            billing: { read: true, write: true, delete: true },
            support: { read: true, write: true, delete: true },
            cms: { read: true, write: true, delete: true },
            analytics: { read: true, write: true, delete: true },
          },
          updatedAt: Timestamp.now(),
        };
        
        await setDoc(doc(db, 'users', userId), userData, { merge: true });
        console.log('✅ Usuario actualizado a SUPERADMIN exitosamente');
        return { success: true, userId, action: 'updated' };
      } else {
        // Usuario no existe, crear nuevo
        console.log('👥 Usuario no encontrado, creando nuevo...');
        
        const userId = 'admin-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
        
        const userData = {
          uid: userId,
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
        
        await setDoc(doc(db, 'users', userId), userData);
        console.log('✅ Usuario SUPERADMIN creado exitosamente');
        return { success: true, userId, action: 'created' };
      }
    } catch (error) {
      console.error('❌ Error:', error);
      return { success: false, error: error.message };
    }
  }
  
  // Exponer la función globalmente
  window.createSuperAdmin = createSuperAdmin;
  
  console.log('📋 Script cargado. Usa: createSuperAdmin("tu-email@ejemplo.com")');
})();

// Auto-ejecutar para el email específico
createSuperAdmin('luisgbo@grupoarcii.com').then(result => {
  if (result.success) {
    console.log('🎉 ¡Listo! Ahora puedes hacer login como SUPERADMIN');
    console.log('🔗 Ve a: https://newarciicloud-com.onrender.com/admin/login');
  } else {
    console.log('💥 Algo salió mal:', result.error);
  }
});