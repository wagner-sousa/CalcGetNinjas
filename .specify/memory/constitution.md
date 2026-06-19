<!--
  Sync Impact Report

  Version change: 2.2.0 → 2.2.1
  Modified principles: I (added Docker as development environment)
  Added sections: Docker in Technology Constraints
  Removed sections: N/A
  Templates requiring updates:
    - .specify/templates/spec-template.md: ✅ compatible (generic structure)
    - .specify/templates/plan-template.md: ✅ compatible (no discipline-specific changes)
    - .specify/templates/tasks-template.md: ✅ compatible (follows standard layout)
    - .specify/memory/constitution.md: ✅ updated (this file)
  Follow-up TODOs: None
-->

# CalcGetNinjas Constitution

## Core Principles

### I. Vue SPA (Docker + Static Frontend)

The application MUST be a single-page application (SPA) built with Vue 3 (Composition
API, `<script setup>`) and TypeScript. Vite MUST be used as the build tool. The build
output MUST be deployable as static files without a running backend. All development
and build commands run inside Docker containers defined in `docker-compose.yml`.
Node.js is a development toolchain dependency only (inside the container) — it MUST
NOT be required at runtime.

### II. Vue + TypeScript Stack

Vue 3 (Composition API) + TypeScript + Vite. Dependencies MUST be kept minimal.
Third-party component libraries (e.g., PrimeVue, Vuetify) MUST NOT be used — only
lightweight utility packages (icons, formatters) are permitted.

### III. Mobile-First Responsive Design (NON-NEGOTIABLE)

Every screen MUST work flawlessly on mobile (320px+) and desktop. CSS MUST use
responsive design principles: media queries, relative units, flexbox/grid
layouts. Touch interactions MUST be fully supported alongside mouse/keyboard.

### IV. Test-First Development (TDD)

The entire codebase follows Test-Driven Development. Tests MUST be written
before implementation (red → green → refactor). For calculation logic, tests
MUST cover: cost-per-coin calculation, activity-cost calculation, zero/negative
input handling, decimal precision, and edge cases. All other modules
(components, composables, utilities) MUST also have corresponding unit tests
written before implementation.

### V. Clean & Accessible UI (pt-BR)

The interface MUST be intuitive, professional, and accessible (WCAG AA
minimum). All UI text — labels, tooltips, error messages, and feedback —
MUST be in Brazilian Portuguese (pt-BR). Users MUST be able to complete the
calculation in under 3 steps. Clear labels, visible error states, and
unambiguous success feedback are required.

## Technology Constraints

- **Runtime**: Vue 3 (Composition API, `<script setup>`)
- **Language**: TypeScript
- **Build**: Vite
- **Icons**: Solar Icons (via npm)
- **Testing**: Vitest (Vite-native test runner)
- **CSS**: Custom properties (variables) for theming — `--bg: #D2D2D2`,
  `--input-focus-border: #ffea52`, `--btn-bg: #195ca9`
- **Persistence**: None — all data stored in-memory (no persistence or backend required)
- **Packaging**: Built as static SPA via `vite build`, deployable to any static host
- **No backend**: Zero server-side logic; all computation happens client-side
- **Locale (UI)**: Brazilian Portuguese (pt-BR) — all user-facing strings, labels, tooltips, error messages, number/currency formatting, and date formats MUST follow Brazilian conventions
- **Locale (Code)**: English — all source code identifiers, comments, commit messages, and documentation MUST be written in English
- **Runtime Environment**: Docker — all development, build, and test commands run inside containers defined in `docker-compose.yml`. A Node.js service container provides the development toolchain.

## Development Workflow

- Spec-driven: every feature MUST have a written spec before implementation
- TDD: tests written → tests fail → implement → tests pass → refactor
- Git: feature branches prefixed with numeric ID (e.g., `001-feature-name`)
- Commit messages MUST follow conventional commits format:
  `feat:`, `fix:`, `docs:`, `test:`, `refactor:`, `style:`
- All code MUST be reviewed before merging

## Governance

- This constitution supersedes all other development practices and guidelines
- All pull requests MUST verify compliance with these principles
- Any deviation requires documented justification and team approval
- Complexity MUST be justified — simpler alternatives MUST always be
  considered first
- The constitution MUST be amended via documented proposals with version bumps
- Use AGENTS.md and .specify/memory/ for runtime development guidance

**Version**: 2.2.1 | **Ratified**: 2026-06-18 | **Last Amended**: 2026-06-18
