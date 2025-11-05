# Scanner Serial Manager — Dashboard

Aplicación web React para gestionar números de serie escaneados desde dispositivos USB (scanners de código de barras). Dashboard modular y extensible construido con React y Vite.

## Características

- 📱 **Interfaz moderna y responsive** con diseño oscuro tipo dashboard
- 🔍 **Detección de duplicados** en tiempo real
- 📊 **4 columnas organizadas**: ONT, EEROS, STB, STICKS
- 💾 **Persistencia local** usando localStorage
- 📤 **Exportación a CSV** de todos los seriales
- ⌨️ **Atajos de teclado** para navegación rápida
- 🔊 **Notificaciones visuales** y sonoras para duplicados
- 🎨 **Arquitectura modular** - fácil agregar nuevas funcionalidades al dashboard

## Desarrollo

### Instalación

```bash
npm install
```

### Desarrollo local

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Build para producción

```bash
npm run build
```

Los archivos optimizados estarán en la carpeta `dist/`

### Preview del build

```bash
npm run preview
```

## Estructura del Proyecto

```
src/
  ├── components/          # Componentes React
  │   ├── Dashboard.jsx    # Componente principal del dashboard
  │   ├── ColumnCard.jsx   # Tarjeta de columna individual
  │   ├── SerialList.jsx   # Lista de seriales
  │   ├── Toast.jsx        # Sistema de notificaciones
  │   ├── ScannerInput.jsx # Input oculto para capturar escaneos
  │   └── Stats.jsx        # Estadísticas globales
  ├── hooks/               # Custom hooks
  │   ├── useScanner.js    # Hook para manejar el scanner
  │   └── useToast.js      # Hook para notificaciones
  ├── utils/               # Utilidades
  │   ├── beep.js          # Sonido de alerta
  │   └── storage.js       # Manejo de localStorage
  ├── styles/              # Estilos globales
  │   └── App.css          # Estilos principales
  ├── App.jsx              # Componente raíz
  └── main.jsx             # Entry point
```

## Uso

1. Abre la aplicación en tu navegador
2. Selecciona la columna activa donde quieres agregar seriales
3. Conecta tu scanner USB y escanea códigos de barras
4. Los seriales se agregarán automáticamente a la columna activa
5. Usa los botones para copiar, limpiar o exportar datos

### Atajos de teclado

- `Ctrl + 1-4`: Cambiar a columna ONT, EEROS, STB o STICKS
- `Ctrl + E`: Exportar CSV

## Configuración del Scanner

Recomendación: Configura tu scanner para que envíe `Enter` al final del escaneo. Si no envía Enter, la aplicación esperará 700ms sin actividad para finalizar el valor.

## Extender el Dashboard

El dashboard está diseñado para ser fácilmente extensible. Puedes agregar nuevas funcionalidades:

1. **Nuevos componentes**: Agrega componentes en `src/components/`
2. **Nuevos hooks**: Crea hooks personalizados en `src/hooks/`
3. **Nuevas secciones**: Agrega secciones al componente `Dashboard.jsx`
4. **Utilidades**: Agrega funciones auxiliares en `src/utils/`

Ejemplo de cómo agregar un nuevo módulo:

```jsx
// src/components/NewModule.jsx
export function NewModule() {
  return <div className="dashboard-module">Nuevo módulo</div>;
}

// En Dashboard.jsx
import { NewModule } from './NewModule';

// Agregar en el JSX del dashboard
<NewModule />
```

## Hosting en GitHub Pages

### Deploy Automático con GitHub Actions (Recomendado)

El proyecto incluye un workflow de GitHub Actions que automáticamente construye y despliega la aplicación en GitHub Pages cada vez que haces push a la rama `main`.

**Pasos para activar:**

1. **Habilita GitHub Pages en tu repositorio:**
   - Ve a **Settings** → **Pages** en tu repositorio de GitHub
   - En **Source**, selecciona **GitHub Actions**

2. **Haz push de los cambios:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

3. **El workflow se ejecutará automáticamente:**
   - Puedes ver el progreso en la pestaña **Actions** de tu repositorio
   - Una vez completado, la aplicación estará disponible en: 
   `https://nogegutierrez.github.io/scantool/`

### Deploy Manual (Alternativa)

Si prefieres hacer el deploy manualmente:

1. **Instala dependencias y construye:**
   ```bash
   npm install
   npm run build
   ```

2. **Configura GitHub Pages:**
   - Ve a **Settings** → **Pages** en GitHub
   - En **Source**, selecciona la rama `main` y carpeta `/dist`
   - Guarda los cambios

3. **Sube la carpeta dist al repositorio:**
   ```bash
   git add dist
   git commit -m "Deploy to GitHub Pages"
   git subtree push --prefix dist origin gh-pages
   ```

**Nota:** El `base` en `vite.config.js` está configurado como `/scantool/` para que funcione correctamente en GitHub Pages. Si tu repositorio tiene otro nombre, actualiza el `base` en `vite.config.js`.

## Tecnologías

- **React 18** - Biblioteca UI
- **Vite** - Build tool y dev server
- **CSS3** - Estilos (Grid, Flexbox)
- **localStorage** - Persistencia local

## Licencia

Libre para uso personal y comercial.

