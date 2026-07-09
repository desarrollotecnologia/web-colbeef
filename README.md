# Colbeef — Sitio Web Corporativo

Sitio web corporativo para **Colbeef**, empresa líder en servicios alimentarios y producción de carne de res en Floridablanca, Santander.

## Stack tecnológico

- **React 19** + **TypeScript**
- **Vite** — bundler y dev server
- **Tailwind CSS v4** — estilos
- **Framer Motion** — animaciones
- **React Router** — navegación multipágina
- **Lucide React** — iconos

## Estructura del proyecto

```
src/
├── components/
│   ├── layout/       # Header, Footer, Layout
│   ├── sections/   # Secciones de la página de inicio
│   └── ui/         # Componentes reutilizables
├── data/           # Contenido y textos del sitio
├── pages/          # Páginas: Home, Servicios, Productos, Nosotros, Contacto
├── App.tsx
└── main.tsx
public/
└── images/         # Imágenes del sitio
```

## Comandos

```bash
npm install    # Instalar dependencias
npm run dev    # Servidor de desarrollo
npm run build  # Build de producción
npm run preview # Previsualizar build
```

## Insumos pendientes (reemplazar placeholders)

| Insumo | Ubicación | Descripción |
|--------|-----------|-------------|
| Logo oficial | `Header`, `Footer` | Reemplazar la "C" temporal por el logo SVG/PNG |
| Diagrama de cortes | `ProductosPage` | Imagen oficial del despiece bovino |
| Videos | `VideoPlayer` | URLs de YouTube/Vimeo para secciones "REPRODUCIR" |
| Certificaciones | `NosotrosPage` | Logos BPM, HACCP, ISO 22000, ONAC |
| Google Maps | `ContactoPage` | Embed del mapa de ubicación |
| Fotos adicionales | `public/images/` | Fotos de planta, procesos, equipo |
| Favicon | `public/favicon.svg` | Icono del sitio |

## Imágenes actuales

Las siguientes imágenes ya están en `public/images/`:
- `IMG_5280.JPG`
- `IMG_5282.JPG`
- `IMG_5288.JPG`
- `IMG_5289.JPG`

## Paleta de colores

- Rojo Colbeef: `#b91c1c`
- Oscuro: `#0f0f0f` / `#1a1a1a`
- Crema: `#f5f0eb`
- Dorado: `#c4a35a`
