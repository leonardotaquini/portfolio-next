# Portfolio Next — Agent Guidelines

## Build & Dev Commands

```bash
pnpm dev          # start dev server
pnpm build        # production build
pnpm start        # serve production build
pnpm lint         # ESLint
pnpm typecheck    # tsc --noEmit (no emit)
```

Package manager: **pnpm**. Do not use npm or yarn.

## Architecture

| Layer | Path | Purpose |
|---|---|---|
| UI primitives | `components/ui/` | `Button`, `Card`, `Badge` — shadcn/ui-style, hand-rolled |
| App chrome | `components/layout/` | `SiteHeader`, `SiteFooter`, `LanguageSwitcher`, `ThemeToggle` |
| Shared helpers | `components/shared/` | `SectionHeading`, `SocialLinks`, `CVDownloadButton`, `MotionFade` |
| Page sections | `features/home/sections/` | One file per section — intentionally outside `components/` |
| Content data | `content/` | Pure TS data files — no CMS, no MDX |
| Central config | `config/site.ts` | Single source of truth for locales, personal info, CV paths, social links |

## i18n

- Routes live under `app/[locale]/`; supported locales and `defaultLocale` (`es`) are defined in `config/site.ts`.
- **UI strings** → `messages/en.json` / `messages/es.json` (namespaced by section: `nav`, `hero`, `about`, etc.).
- **Data copy** (experience bullets, project descriptions, profile text) → `content/` as `LocalizedText` objects (`Record<Locale, string>`), e.g. `role[locale]`. Never put prose content in the message files.
- Server Components call `getTranslations({ locale, namespace })` directly. Pass `locale: Locale` as a prop down the tree rather than reading it from the URL in every leaf component.

## Content Management

To add or edit portfolio data, touch only the relevant file in `content/`:

| File | Type |
|---|---|
| `content/profile/profile.ts` | `headline`, `heroSummary`, `aboutSummary` (`LocalizedText`) |
| `content/experience/experience.ts` | `experienceItems: ExperienceItem[]` |
| `content/skills/skills.ts` | `skillsByCategory: SkillCategory[]` |
| `content/projects/projects.ts` | `projects: Project[]` (`featured` flag controls home-page display) |

Domain types: `types/domain.ts`. Never modify components to change copy.

## Component Conventions

- **Named exports only** — no `export default` from component files.
- **Server-first** — sections are `async` Server Components. Add `'use client'` only when browser APIs or React state are genuinely required.
- **`locale` prop pattern** — receive `locale: Locale` as a prop; call `getTranslations` inside the component rather than threading translation objects from a parent.
- **`MotionFade`** — use the shared wrapper for scroll-reveal animations instead of reaching for framer-motion directly.
- **`SectionHeading`** — use for all section titles; accepts `eyebrow`, `title`, and optional `align`.
- Styling: Tailwind utility classes in JSX. Design tokens via CSS variables (`hsl(var(--background))`, etc.). No CSS modules.
- Use `cn()` from `lib/utils.ts` to merge class names.
- All sections use `className="container"` — the container is pre-configured with max-width and padding in `tailwind.config.ts`.

## Naming Conventions

- **Files:** `kebab-case.tsx`
- **Components & Types:** `PascalCase`
- **Constants & data exports:** `camelCase`
- **Path alias:** `@/` resolves to the project root (configured in `tsconfig.json`)
