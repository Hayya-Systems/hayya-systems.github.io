# Hayya System

Sitio web corporativo de Hayya System, construido con [Astro](https://astro.build). Soporte multilingüe (ES, EN, PT, HE).

**URL del sitio:** https://hayya-systems.github.io

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build
npm run preview
```

## Despliegue

El sitio se despliega automáticamente a GitHub Pages con cada `push` a `main` mediante GitHub Actions.

### Configuración inicial (una sola vez)

1. Ir a **Settings → Pages → Source** y seleccionar **GitHub Actions**.
2. Hacer push a `main`. Listo.

### Dominio personalizado (opcional)

1. En **Settings → Pages → Custom domain**, escribe tu dominio.
2. Crea un archivo `public/CNAME` con tu dominio:
   ```
   tudominio.com
   ```
3. Configura los registros DNS en tu proveedor según la [documentación de GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Estructura del proyecto

```
├── public/            # Archivos estáticos (imágenes, favicon)
├── src/
│   ├── components/    # Componentes reutilizables (Header, Footer, etc.)
│   ├── i18n/          # Traducciones (es, en, pt, he)
│   ├── layouts/       # Layout principal
│   ├── pages/         # Páginas del sitio
│   ├── scripts/       # Scripts cliente (i18n switcher)
│   └── styles/        # Variables CSS y estilos globales
├── astro.config.mjs   # Configuración de Astro
└── package.json
```

## Tecnologías

- **Astro 4** — Generador de sitios estáticos
- **TypeScript** — Tipado estático
- **CSS Custom Properties** — Sistema de diseño
- **i18n client-side** — Cambio de idioma sin recarga
