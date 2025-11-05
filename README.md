# SerialScan Pro

Aplicación web profesional para escanear y gestionar números de serie de equipos con soporte multiidioma (Español/Inglés).

## 🚀 Características

- ✅ **Escáner de Seriales**: Captura rápida de números de serie mediante escáner de código de barras
- ✅ **Multiidioma**: Soporte completo para Español e Inglés (inglés como idioma principal)
- ✅ **4 Columnas de Categorías**: ONT, EEROS, STB, STICKS
- ✅ **Detección de Duplicados**: Registro automático de seriales duplicados con contador
- ✅ **Almacenamiento Local**: Persistencia de datos en localStorage del navegador
- ✅ **Sidebar Colapsable**: Optimización de espacio con sidebar que se puede recoger
- ✅ **Estadísticas en Tiempo Real**: Dashboard con métricas de totales, únicos y duplicados
- ✅ **Exportación**: Funcionalidad para copiar datos de cada columna
- ✅ **Diseño Responsive**: Optimizado para desktop, tablet y móvil

## 📋 Requisitos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)

## 🛠️ Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/nogegutierrez/dashboard.git
```

2. Abre `index.html` en tu navegador

3. ¡Listo! La aplicación está lista para usar

## 📖 Uso

### Escaneo de Seriales

1. Selecciona la columna activa (ONT, EEROS, STB, STICKS)
2. Escanea el código de barras del serial con tu escáner
3. El serial se agregará automáticamente a la columna activa

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
└── README.md              # Este archivo
```

## 🔧 Tecnologías Utilizadas

- HTML5
- CSS3 (con variables CSS y animaciones)
- JavaScript (Vanilla JS)
- Font Awesome Icons
- LocalStorage API

## 📝 Notas

- Los datos se almacenan en localStorage del navegador
- Los datos persisten entre sesiones
- Al limpiar el navegador o cambiar de dispositivo, los datos se perderán (son locales)

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

- Font Awesome por los iconos
- La comunidad de desarrolladores web

---

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub!
