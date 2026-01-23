import { collection, query, where, getDocs, updateDoc, doc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

// Script para asignar rol de administrador
// Ejecutar desde la consola del navegador

(window as any).assignAdminRole = async function(userEmail: string, role: 'admin' | 'superadmin' = 'admin') {
  try {
    console.log(`🔍 Buscando usuario: ${userEmail}...`);
    
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', userEmail));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.error(`❌ Usuario ${userEmail} no encontrado`);
      return false;
    }

    const userDoc = querySnapshot.docs[0];
    const userId = userDoc.id;
    const userData = userDoc.data();

    console.log(`👤 Usuario encontrado: ${userData.displayName || 'Sin nombre'}`);
    console.log(`📧 Email: ${userData.email}`);
    console.log(`🏷️ Rol actual: ${userData.role}`);

    const permissions = role === 'superadmin' ? {
      clients: { read: true, write: true, delete: true },
      services: { read: true, write: true, delete: true },
      billing: { read: true, write: true, delete: true },
      support: { read: true, write: true, delete: true },
      cms: { read: true, write: true, delete: true },
      analytics: { read: true, write: true, delete: true },
    } : {
      clients: { read: true, write: true, delete: false },
      services: { read: true, write: true, delete: false },
      billing: { read: true, write: true, delete: false },
      support: { read: true, write: true, delete: false },
      cms: { read: true, write: true, delete: false },
      analytics: { read: true, write: false, delete: false },
    };

    await updateDoc(doc(db, 'users', userId), {
      role: role,
      permissions: permissions,
      updatedAt: Timestamp.now()
    });

    console.log(`✅ ¡Rol actualizado exitosamente!`);
    console.log(`🎉 ${userEmail} ahora es ${role}`);
    console.log(`🔄 Recarga la página e inicia sesión`);
    
    return true;
  } catch (error) {
    console.error('❌ Error:', error);
    return false;
  }
};

console.log(`
🚀 Script de asignación de roles cargado!

📝 INSTRUCCIONES:
1. Abre esta página: https://newarciicloud-com.onrender.com/admin/login
2. Abre la consola del navegador (F12 → Console)
3. Ejecuta uno de estos comandos:

   Para ADMIN:
   assignAdminRole('tu-email@ejemplo.com', 'admin')

   Para SUPERADMIN:
   assignAdminRole('tu-email@ejemplo.com', 'superadmin')

4. Recarga la página e inicia sesión

¡Listo! 🎯
`);

export {};