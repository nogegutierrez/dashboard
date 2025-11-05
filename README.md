# SerialScan Pro

Aplicación web profesional para escanear y gestionar números de serie de equipos con soporte multiidioma (Español/Inglés) y autenticación de usuarios.

## 🚀 Características

- ✅ **Escáner de Seriales**: Captura rápida de números de serie mediante escáner de código de barras
- ✅ **Multiidioma**: Soporte completo para Español e Inglés (inglés como idioma principal)
- ✅ **Autenticación de Usuarios**: Sistema de login/registro con Firebase Authentication
- ✅ **4 Columnas de Categorías**: ONT, EEROS, STB, STICKS
- ✅ **Detección de Duplicados**: Registro automático de seriales duplicados con contador
- ✅ **Almacenamiento Local**: Persistencia de datos en localStorage del navegador
- ✅ **Sidebar Colapsable**: Optimización de espacio con sidebar que se puede recoger
- ✅ **Estadísticas en Tiempo Real**: Dashboard con métricas de totales, únicos y duplicados
- ✅ **Exportación**: Funcionalidad para copiar datos de cada columna
- ✅ **Diseño Responsive**: Optimizado para desktop, tablet y móvil

## 📋 Requisitos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Firebase (opcional, para autenticación en producción)

## 🛠️ Instalación

### Opción 1: Usar directamente (Modo Demo)

1. Clona este repositorio:
```bash
git clone https://github.com/nogegutierrez/dashboard.git
```

2. Abre `index.html` en tu navegador

3. Usa los usuarios de prueba:
   - Email: `admin@serialscan.com` / Password: `admin123`
   - Email: `user@serialscan.com` / Password: `user123`

### Opción 2: Con Firebase (Recomendado para Producción)

1. Configura Firebase siguiendo las instrucciones en [FIREBASE_SETUP.md](FIREBASE_SETUP.md)

2. Actualiza las credenciales de Firebase en `index.html` (línea ~1596)

3. Abre `index.html` en tu navegador

## 📖 Uso

### Escaneo de Seriales

1. Inicia sesión con tu cuenta
2. Selecciona la columna activa (ONT, EEROS, STB, STICKS)
3. Escanea el código de barras del serial con tu escáner
4. El serial se agregará automáticamente a la columna activa

### Gestión de Columnas

- **Seleccionar Columna**: Haz clic en el botón de "Seleccionar" (crosshairs) en la columna
- **Copiar Datos**: Haz clic en el botón de "Copiar" para copiar todos los seriales de una columna
- **Limpiar Columna**: Haz clic en el botón de "Limpiar" para eliminar todos los seriales de una columna

### Duplicados

- Los seriales duplicados se detectan automáticamente
- Se registran en la columna "DUPLICATES" con el formato: `serial (cantidad)`
- La cantidad se incrementa cada vez que se repite el mismo serial

### Cambiar Idioma

- Usa el selector de idioma en el sidebar
- El idioma preferido se guarda automáticamente

## 🌐 Despliegue en GitHub Pages

1. Ve a la configuración de tu repositorio en GitHub
2. Navega a "Pages" en el menú lateral
3. Selecciona la rama `main` como fuente
4. Guarda los cambios
5. Tu aplicación estará disponible en: `https://nogegutierrez.github.io/dashboard/`

## 📁 Estructura del Proyecto

```
dashboard/
├── index.html              # Aplicación principal (todo en un archivo)
├── FIREBASE_SETUP.md       # Guía de configuración de Firebase
└── README.md              # Este archivo
```

## 🔧 Tecnologías Utilizadas

- HTML5
- CSS3 (con variables CSS y animaciones)
- JavaScript (Vanilla JS)
- Firebase Authentication (opcional)
- Font Awesome Icons
- LocalStorage API

## 📝 Notas

- Los datos se almacenan en localStorage del navegador (por usuario)
- Cada usuario tiene sus propios datos independientes
- Los datos persisten entre sesiones
- Al hacer logout, se limpian todos los datos locales

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para detalles.

## 👨‍💻 Autor

**Norges Gutiérrez**

- GitHub: [@nogegutierrez](https://github.com/nogegutierrez)

## 🙏 Agradecimientos

- Firebase por el servicio de autenticación
- Font Awesome por los iconos
- La comunidad de desarrolladores web

---

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub!

