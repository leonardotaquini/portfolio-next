# Portfolio profesional - Leonardo Gabriel Taquini

Portfolio premium y modular construido con **Next.js (App Router) + TypeScript + Tailwind CSS + shadcn/ui patterns + next-intl**.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- next-intl (ES/EN)
- lucide-react
- framer-motion

## Arquitectura propuesta

El proyecto está organizado por capas para facilitar mantenimiento y escalado:

- `app/`: enrutado, layouts y páginas por locale.
- `components/`: piezas reutilizables (`ui`, `layout`, `shared`).
- `features/`: secciones de la home separadas por dominio.
- `content/`: datos editables desacoplados del render (perfil, experiencia, skills, proyectos).
- `config/`: configuración global del sitio.
- `lib/`: utilidades e integración i18n.
- `types/`: contratos tipados de dominio.
- `messages/`: traducciones por idioma.
- `public/cv`: CV por idioma.

## Estructura de carpetas

```bash
.
├── app
│   ├── [locale]
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── globals.css
│   └── layout.tsx
├── components
│   ├── layout
│   ├── shared
│   └── ui
├── config
├── content
│   ├── experience
│   ├── profile
│   ├── projects
│   └── skills
├── features
│   └── home/sections
├── lib
├── messages
├── public
│   └── cv
└── types
```

## i18n

- Locale switcher visible en header.
- Contenido ES/EN completo con `next-intl`.
- Metadata por idioma (`generateMetadata`).
- El botón **Descargar CV** selecciona automáticamente:
  - `/cv/leonardo-taquini-cv-es.pdf`
  - `/cv/leonardo-taquini-cv-en.pdf`

## Ejecutar en local

```bash
npm install
npm run dev
```

Abrir: `http://localhost:3000/es` o `http://localhost:3000/en`.

## Decisiones arquitectónicas

1. **Contenido desacoplado**: proyectos, experiencia y perfil viven en `content/*` para iterar sin tocar componentes.
2. **UI reutilizable**: `components/ui` concentra primitivas estilo shadcn-like (`Button`, `Card`, `Badge`).
3. **Secciones por feature**: cada sección de home está aislada en `features/home/sections`.
4. **Tipado fuerte**: modelos de dominio en `types/domain.ts` para evitar strings sueltos y asegurar consistencia.
5. **Escalabilidad i18n**: rutas localizadas con middleware + `next-intl` para crecimiento futuro a más idiomas.
