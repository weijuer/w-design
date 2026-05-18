# AGENTS.md

Instructions for AI agents working with the W Design Vue repository.

## Repository Overview

W Design Vue is a modern Vue UI library built with **SCSS and modern CSS features**, organized as a **pnpm monorepo** managed by **Vite**. Components follow a compound component pattern similar to Element Plus UI.

### Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Node.js | 22+ | Runtime |
| pnpm | 10.26.2 | Package manager (via corepack) |
| Vue | 3.x+ | UI framework |
| SCSS and modern CSS features | Latest | Styling |
| TypeScript | 5.x | Type safety |
| Vite | 4.x+ | Build orchestration |
| VitePress | Latest | Documentation |
| Vitest | 4.x | Testing |
| Vue Aria Components | Latest | Accessibility primitives |

### Monorepo Structure

```
/
├── apps/
│   └── web-app/                # Web application demo (Vite)
├── docs/
│   └── docs/                   # Documentation site (VitePress)
├── examples/
│   └── web/                    # Example applications (Vite)
├── packages/
│   ├── components/             # All components in the library
│   ├── constants/              # Shared constants (colors, sizes, etc.)
│   ├── design-chat/            # Main UI library (w-design-chat)
│   ├── design-cli/             # CLI library (w-design-cli)
│   ├── design-vue/             # Main UI library (w-design-vue)
│   ├── eslint-config/          # ESLint configuration
│   ├── hooks/                  # Shared hooks
│   ├── icons/                  # Shared icon components
│   ├── utils/                  # Shared utilities
│   └── vitest/                 # Shared Vitest configurations
└── pnpm-workspace.yaml
```

## Commands

| Action | Command |
|---|---|
| Install dependencies | `pnpm i --hoist` |
| Build all packages | `pnpm build` |
| Dev (Storybook, port 6006) | `pnpm dev` |
| Dev (Docs site, port 3000) | `pnpm dev:docs` |
| Lint | `pnpm lint` |
| Test all | `pnpm test` |
| Bump version | `pnpm version-packages` |


## Git Commit Convention

All commits must follow [Conventional Commits](https://www.conventionalcommits.org/) and are validated by Husky + commitlint. Pre-commit also runs `lint-staged`.

```
<type>(<scope>): <message>
```

**Allowed types:** `feat`, `feature`, `fix`, `refactor`, `docs`, `build`, `test`, `ci`, `chore`

Examples:

```
feat(components): add select component
fix(button): resolve disabled state not applying
docs: update installation guide
```

## Component Architecture

### File Structure

Each component lives in `packages/components/<component-name>/`:

```
component-name/
├── style/
│   ├── component-name.css      # Component styles
│   └── index.ts                # Styles exports
├── component-name.vue          # Component implementation (uses Vue Aria)
├── component-name.ts           # TypeScript definitions
└── index.ts                    # Barrel exports
```

### Export Strategy

```tsx
// Named exports for compound components
export * as ComponentName from "./component-name";

// Direct exports for simple components
export {Component, type ComponentProps} from "./component";
```

### CSS / BEM Naming

Components use BEM-style CSS class names:

- **Block**: `w-button`, `w-card`, `w-alert`
- **Element**: `w-card__header`, `w-alert__icon`
- **Modifier**: `w-button--primary`, `w-button--lg`, `w-button--icon-only`

### Default Size Pattern (Critical)

All components must include default sizes in base classes so they work without explicit size props:

```css
.avatar {
  @apply relative flex size-10 shrink-0 overflow-hidden rounded-full;
  /* size-10 is the default (equivalent to --md) */
}

.avatar--sm { @apply size-8; }
.avatar--md { /* empty — this IS the default */ }
.avatar--lg { @apply size-12; }
```

### Interactive State Pattern

All interactive components must support both pseudo-classes and data attributes:

```css
.component {
  &:hover,
  &[data-hovered="true"] { @apply ...; }

  &:active,
  &[data-pressed="true"] { @apply ...; }

  &:focus-visible,
  &[data-focus-visible="true"] {
    outline: 2px solid var(--focus);
    outline-offset: 2px;
  }
}
```

## Current Components

### Completed

 alert, avatar, avatar-group, badge, breadcrumb, breadcrumb-item, button, card, checkbox,  chip, collapse, collapse-item, container, details, divider, footer, grid, grid-item, guide,  header, icon, image, input, input-mask, input-number, input-password, input-search, keyboard, layout, main, menu, menu-item, modal, pagination, preview, progress, radio, scroll-shadow, select, space, spinner, switch, table, tabs, textarea, tooltip

### In Progress

tree, drawer, uploader
