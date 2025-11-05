# Configuración de Firebase Authentication

## Pasos para configurar Firebase:

### 1. Crear un proyecto en Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Haz clic en "Add project" o "Crear un proyecto"
3. Ingresa un nombre para tu proyecto (ej: "serialscan-pro")
4. Sigue los pasos para crear el proyecto

### 2. Habilitar Authentication

1. En el panel de Firebase, ve a "Authentication"
2. Haz clic en "Get started"
3. Ve a la pestaña "Sign-in method"
4. Habilita "Email/Password"
   - Haz clic en "Email/Password"
   - Activa "Enable"
   - Haz clic en "Save"

### 3. Obtener las credenciales de configuración

1. En Firebase Console, ve a "Project settings" (ícono de engranaje)
2. Scroll hacia abajo hasta "Your apps"
3. Haz clic en el ícono de web (`</>`)
4. Registra un nombre para tu app (ej: "SerialScan Pro")
5. Copia las credenciales de configuración

### 4. Actualizar el código

Abre `index.html` y busca la sección de configuración de Firebase (alrededor de la línea 1596):

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

Reemplaza los valores `YOUR_*` con los valores que copiaste de Firebase Console.

### 5. Configurar dominios autorizados (para GitHub Pages)

1. En Firebase Console, ve a "Authentication" > "Settings"
2. Scroll hasta "Authorized domains"
3. Agrega tu dominio de GitHub Pages (ej: `tu-usuario.github.io`)
4. También puedes agregar `localhost` para desarrollo local

## Modo Demo (Sin Firebase)

Si no configuras Firebase, la aplicación funcionará en modo demo con estos usuarios:

- **Email:** `admin@serialscan.com` / **Password:** `admin123`
- **Email:** `user@serialscan.com` / **Password:** `user123`

⚠️ **Importante:** El modo demo NO es seguro para producción. Solo úsalo para pruebas locales.

## Características implementadas:

✅ Login con email y password
✅ Registro de nuevos usuarios
✅ Logout
✅ Persistencia de sesión (el usuario permanece logueado al recargar)
✅ Protección de rutas (no se puede acceder sin autenticación)
✅ Datos por usuario (cada usuario tiene sus propios datos en localStorage)

## Notas de seguridad:

- Las contraseñas se almacenan de forma segura en Firebase
- Los datos se guardan en localStorage del navegador (por usuario)
- Cada usuario solo puede ver sus propios datos
- Al hacer logout, se limpian todos los datos locales

