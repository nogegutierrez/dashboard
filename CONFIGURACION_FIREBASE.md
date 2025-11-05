# 🔐 Configuración de Firebase (Privada)

## ⚠️ IMPORTANTE: Este archivo NO se sube a GitHub

Las credenciales de Firebase están en un archivo separado que **NO** se sube al repositorio para mantenerlas privadas.

## 📋 Pasos para Configurar

### 1. Crear el archivo de configuración

1. Copia el archivo de ejemplo:
   ```bash
   cp firebase-config.js.example firebase-config.js
   ```

2. O crea manualmente el archivo `firebase-config.js` en la raíz del proyecto

### 2. Obtener las credenciales de Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Selecciona tu proyecto
3. Ve a "Project settings" (ícono de engranaje)
4. Scroll hacia abajo hasta "Your apps"
5. Haz clic en el ícono de web (`</>`)
6. Copia las credenciales de configuración

### 3. Actualizar firebase-config.js

Abre `firebase-config.js` y reemplaza los valores:

```javascript
const firebaseConfig = {
    apiKey: "TU_API_KEY_AQUI",
    authDomain: "TU_PROJECT_ID.firebaseapp.com",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_PROJECT_ID.appspot.com",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
};
```

### 4. Verificar que el archivo está en .gitignore

El archivo `firebase-config.js` debe estar en `.gitignore` para que NO se suba a GitHub.

Verifica que la línea `firebase-config.js` existe en `.gitignore`.

### 5. Habilitar Authentication en Firebase

1. En Firebase Console, ve a "Authentication"
2. Haz clic en "Get started"
3. Ve a la pestaña "Sign-in method"
4. Habilita "Email/Password"
5. Guarda los cambios

### 6. Crear Usuario Admin

1. En Firebase Console > Authentication > Users
2. Haz clic en "Add user"
3. Email: `admin@serialscan.com` (o el que prefieras)
4. Password: `123456` (o el que prefieras)
5. Haz clic en "Add user"

## ✅ Verificación

- ✅ El archivo `firebase-config.js` existe localmente
- ✅ El archivo `firebase-config.js` está en `.gitignore`
- ✅ El archivo `firebase-config.js` NO aparece en GitHub
- ✅ Authentication está habilitado en Firebase
- ✅ Usuario admin creado en Firebase

## 🚀 Para GitHub Pages

Cuando despliegues en GitHub Pages:

1. **Opción 1**: Sube `firebase-config.js` manualmente al servidor de GitHub Pages (no recomendado)

2. **Opción 2**: Usa Firebase Hosting directamente (recomendado):
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase init
   firebase deploy
   ```

3. **Opción 3**: Configura las credenciales directamente en `index.html` (solo para desarrollo, las credenciales de Firebase están diseñadas para ser públicas)

## 📝 Nota de Seguridad

Las credenciales de Firebase (API keys) están **diseñadas para ser públicas** en aplicaciones cliente. La seguridad real viene de:

- **Firebase Security Rules** (en Firestore, Realtime Database, etc.)
- **Authentication Rules** (en Firebase Authentication)
- **App Check** (para prevenir abuso)

Las API keys por sí solas no permiten acceso a datos si las Security Rules están configuradas correctamente.

## 🔒 Mejores Prácticas

1. ✅ Configura Firebase Security Rules apropiadamente
2. ✅ Habilita App Check en producción
3. ✅ Restringe dominios autorizados en Firebase Console
4. ✅ Usa HTTPS siempre
5. ✅ Monitorea el uso en Firebase Console

