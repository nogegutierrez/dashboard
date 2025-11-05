# Scanner Serial Manager

Aplicación web para gestionar números de serie escaneados desde dispositivos USB (scanners de código de barras).

## Características

- 📱 **Interfaz moderna y responsive** con diseño oscuro
- 🔍 **Detección de duplicados** en tiempo real
- 📊 **4 columnas organizadas**: ONT, EEROS, STB, STICKS
- 💾 **Persistencia local** usando localStorage
- 📤 **Exportación a CSV** de todos los seriales
- ⌨️ **Atajos de teclado** para navegación rápida
- 🔊 **Notificaciones visuales** y sonoras para duplicados

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

## Hosting en GitHub Pages

Esta aplicación está lista para ser hosteada en GitHub Pages:

1. Crea un repositorio en GitHub
2. Sube estos archivos al repositorio
3. Ve a **Settings** → **Pages**
4. Selecciona la rama principal (main/master) como fuente
5. La aplicación estará disponible en: `https://[tu-usuario].github.io/[nombre-repo]`

## Tecnologías

- HTML5
- CSS3 (Grid, Flexbox)
- JavaScript vanilla (ES6+)
- localStorage para persistencia

## Licencia

Libre para uso personal y comercial.

