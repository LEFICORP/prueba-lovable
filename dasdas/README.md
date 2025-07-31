# Mi App

Este directorio contiene una implementación base de una aplicación web moderna siguiendo las directrices del repositorio de ejemplo.  
La aplicación está construida con **React 18** y **TypeScript**, utiliza **Tailwind CSS** para el diseño y define una arquitectura modular inspirada en las especificaciones incluidas en el archivo `docs/architecture.md` del repositorio original.  

## Qué hay incluido

- **Estructura de carpetas** que separa componentes, páginas, servicios, estado y estilos.  
- **Enrutamiento** con protección de rutas para secciones que requieren autenticación.  
- **Gestión de estado global** mediante [Zustand](https://github.com/pmndrs/zustand) para manejar el usuario actual y el tema (claro/oscuro).  
- **Formularios** construidos con [React Hook Form](https://react-hook-form.com/) que incluyen validación básica y mensajes de error.  
- **Dashboard** con tarjetas de métricas, gráficos responsivos usando [Recharts](https://recharts.org/) y tabla paginada.  
- **Diseño responsive** y soporte para modo oscuro siguiendo los lineamientos de diseño minimalista propuestos en `/prompts/lovable-setup.md`.  

## Scripts útiles

- `npm run dev` – Inicia la aplicación en modo desarrollo mediante Vite.  
- `npm run build` – Construye la versión optimizada de producción.  
- `npm run preview` – Sirve la versión de producción localmente para revisión.  

> **Nota**: Dado que este entorno carece de acceso a Internet, las dependencias no se instalan automáticamente.  
> Asegúrate de ejecutar `npm install` en un entorno con acceso al registro de NPM antes de ejecutar los comandos anteriores.

## Cómo continuar el desarrollo

1. Ajusta las rutas y servicios en `src/services/api.ts` para que apunten a tu backend real.  
2. Extiende los formularios y componentes para cumplir con tus requisitos específicos.  
3. Integra la lógica de autenticación en `src/services/authService.ts` utilizando tu API de autenticación real.  
4. Añade más páginas o componentes según sea necesario respetando la estructura de carpetas actual.

Con esta base puedes desplegar tu aplicación en Lovable o en cualquier proveedor compatible con Node.js.