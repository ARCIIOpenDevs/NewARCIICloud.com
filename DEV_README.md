# 🚀 ARCII Cloud CRM/ERP - Development Setup

Este documento contiene las instrucciones para comenzar con el desarrollo del sistema CRM/ERP/CMS.

## 📋 Pre-requisitos

- **Node.js** >= 18.0.0
- **npm** >= 8.0.0
- **Firebase CLI** (instalar con `npm install -g firebase-tools`)
- **Git**

## ⚡ Setup Rápido

```bash
# 1. Ejecutar script de setup
./scripts/setup.sh

# 2. Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus credenciales

# 3. Instalar dependencias (si no se hizo en step 1)
npm install

# 4. Iniciar desarrollo
npm run dev

# 5. (Opcional) Iniciar emuladores Firebase
npm run firebase:emulators
```

## 🔥 Configuración Firebase

### 1. Crear Proyecto Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com)
2. Crear nuevo proyecto: `arciicloud-crm`
3. Habilitar servicios:
   - **Authentication** (Email/Password)
   - **Firestore Database**
   - **Storage**
   - **Functions**
   - **Hosting**

### 2. Configurar Authentication

```bash
firebase auth:import users.json --project arciicloud-crm
```

### 3. Deploy Security Rules

```bash
firebase deploy --only firestore:rules,storage:rules
```

## 📁 Estructura del Proyecto

```
src/
├── app/                    # Next.js App Router
│   ├── admin/             # Panel de administración
│   │   ├── dashboard/     # Dashboard principal
│   │   ├── clients/       # Gestión de clientes
│   │   ├── services/      # Gestión de servicios
│   │   ├── billing/       # Facturación
│   │   └── tickets/       # Sistema de tickets
│   ├── api/              # API Routes
│   └── (public)/         # Sitio web público
├── components/           # Componentes React
│   ├── auth/            # Componentes de autenticación
│   ├── forms/           # Formularios
│   ├── ui/              # Componentes UI base
│   └── layout/          # Layout components
├── contexts/            # React Contexts
├── hooks/               # Custom hooks
├── lib/                 # Utilidades y configuraciones
├── types/               # TypeScript types
└── styles/              # Estilos globales

firebase/
├── firestore.rules      # Reglas de seguridad Firestore
├── firestore.indexes.json # Índices de Firestore
├── storage.rules        # Reglas de seguridad Storage
└── functions/           # Cloud Functions
```

## 🎯 Fases de Desarrollo

### ✅ FASE 1 - FUNDACIONES (Semanas 1-3) - EN PROGRESO
- [x] Setup inicial proyecto Next.js + TypeScript
- [x] Configuración Firebase y estructura
- [x] Sistema de autenticación básico
- [x] Componentes UI base
- [ ] Setup Render.com deployment

### 🔄 FASE 2 - CRM CORE (Semanas 4-7) - SIGUIENTE
- [ ] Gestión completa de clientes
- [ ] Sistema de servicios
- [ ] Dashboard con métricas
- [ ] Sistema de notificaciones

### 📋 FASE 3 - FACTURACIÓN MÉXICO (Semanas 8-11)
- [ ] Integración PAC factura.com
- [ ] CFDI 4.0 completo
- [ ] Complementos de pago
- [ ] Reportes fiscales

## 🔧 Scripts Disponibles

```bash
npm run dev                 # Desarrollo local
npm run build              # Build para producción
npm run start              # Iniciar producción
npm run lint               # Linting
npm run type-check         # Verificación TypeScript
npm run firebase:emulators # Emuladores Firebase
npm run firebase:deploy    # Deploy a Firebase
npm run test               # Tests unitarios
npm run db:seed            # Seed base de datos
```

## 🌐 URLs del Sistema

- **Desarrollo Local:**
  - Frontend: http://localhost:3000
  - Admin: http://localhost:3000/admin
  - Firebase UI: http://localhost:4000

- **Producción:** (Por definir)
  - Website: https://arciicloud.com
  - Admin: https://admin.arciicloud.com
  - Panel Cliente: https://panel.arciicloud.com

## 🔐 Sistema de Permisos

### Roles Disponibles
- **superadmin**: Acceso completo al sistema
- **admin**: Acceso administrativo (sin eliminaciones críticas)
- **support**: Acceso a soporte y tickets
- **sales**: Acceso a ventas y clientes
- **billing**: Acceso a facturación y pagos
- **client**: Acceso limitado a su información

### Permisos por Colección
- **clients**: read, write, delete
- **services**: read, write, delete  
- **billing**: read, write, delete
- **support**: read, write, delete
- **cms**: read, write, delete
- **analytics**: read, write, delete

## 🇲🇽 Facturación México

### PAC Configurado
- **Proveedor**: factura.com
- **Tipo**: CFDI 4.0
- **Flujo**: PPD → Pago → Complemento de Pago

### Certificados Requeridos
- Certificado SAT (.cer)
- Llave privada SAT (.key)
- Credenciales PAC factura.com

## 🚀 Deployment

### Render.com
```bash
# Build command
npm run build

# Start command  
npm start

# Environment variables
NODE_ENV=production
NEXT_PUBLIC_FIREBASE_*=...
```

### Firebase Hosting (Opcional)
```bash
npm run build
firebase deploy --only hosting
```

## 🐛 Debugging

### Emuladores Firebase
```bash
npm run firebase:emulators
```

### Logs
```bash
# Logs de desarrollo
npm run dev

# Logs de Firebase Functions
firebase functions:log --project arciicloud-crm
```

### Base de Datos
```bash
# Acceder a Firestore emulator
http://localhost:4000/firestore
```

## 📚 Documentación

- **Plan Completo**: [PROJECT_PLAN.md](PROJECT_PLAN.md)
- **Firebase**: https://firebase.google.com/docs
- **Next.js**: https://nextjs.org/docs
- **Tailwind**: https://tailwindcss.com/docs

## 🤝 Contribución

1. Revisar [PROJECT_PLAN.md](PROJECT_PLAN.md) para el plan completo
2. Crear branch para nueva feature: `git checkout -b feature/nombre-feature`
3. Seguir convenciones de código TypeScript/React
4. Hacer testing antes de push
5. Crear PR con descripción detallada

## 🆘 Soporte

- **Email**: desarrollo@arciicloud.com
- **Slack**: #desarrollo-crm
- **Issues**: GitHub Issues

---

🎉 **¡Happy Coding!** Estamos construyendo el mejor CRM/ERP para hosting en México.