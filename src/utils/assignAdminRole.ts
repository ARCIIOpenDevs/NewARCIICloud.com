// Función temporal para asignar rol de admin
// USO: Ejecutar desde la consola del navegador en /admin/login

export const assignAdminRole = async (userEmail: string, role: 'admin' | 'superadmin' = 'admin') => {
  try {
    const { auth, db } = await import('@/lib/firebase');
    const { doc, updateDoc, Timestamp, collection, query, where, getDocs } = await import('firebase/firestore');

    // Buscar usuario por email
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', userEmail));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error(`Usuario con email ${userEmail} no encontrado`);
    }

    const userDoc = querySnapshot.docs[0];
    const userId = userDoc.id;

    // Permisos según el rol
    const getPermissions = (userRole: string) => {
      if (userRole === 'superadmin') {
        return {
          clients: { read: true, write: true, delete: true },
          services: { read: true, write: true, delete: true },
          billing: { read: true, write: true, delete: true },
          support: { read: true, write: true, delete: true },
          cms: { read: true, write: true, delete: true },
          analytics: { read: true, write: true, delete: true },
        };
      } else {
        return {
          clients: { read: true, write: true, delete: false },
          services: { read: true, write: true, delete: false },
          billing: { read: true, write: true, delete: false },
          support: { read: true, write: true, delete: false },
          cms: { read: true, write: true, delete: false },
          analytics: { read: true, write: false, delete: false },
        };
      }
    };

    // Actualizar el documento del usuario
    await updateDoc(doc(db, 'users', userId), {
      role: role,
      permissions: getPermissions(role),
      updatedAt: Timestamp.now()
    });

    console.log(`✅ Usuario ${userEmail} actualizado con rol: ${role}`);
    return { success: true, message: `Rol ${role} asignado correctamente` };

  } catch (error) {
    console.error('❌ Error asignando rol:', error);
    return { success: false, error: error };
  }
};

// Instrucciones de uso:
console.log(`
🔧 Para usar esta función:

1. Abre la consola del navegador (F12)
2. Ve a la página /admin/login
3. Ejecuta:

   const { assignAdminRole } = await import('/src/utils/assignAdminRole.ts');
   await assignAdminRole('tu-email@ejemplo.com', 'admin');

   O para superadmin:
   await assignAdminRole('tu-email@ejemplo.com', 'superadmin');
`);