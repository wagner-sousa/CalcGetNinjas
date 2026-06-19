# Research: CalcGetNinjas Calculator

## Technology Decisions

### Vue 3 + TypeScript + Vite

**Decision**: Vue 3 Composition API with `<script setup>` + TypeScript + Vite build tool

**Rationale**: Vue 3 is the most popular framework in the Brazilian development ecosystem, matching the user's requirement for "principais bibliotecas do mercado." Composition API provides better TypeScript inference and reusable logic via composables. Vite is the recommended build tool for Vue 3, offering fast HMR and optimized production builds.

**Alternatives considered**:
- React + Create React App: More popular globally but less common in the BR dev ecosystem
- Svelte + Vite: Lighter but smaller ecosystem
- Vanilla JS (constitution v1): Rejected in favor of Vue per user's explicit request

### Vitest

**Decision**: Vitest for unit tests

**Rationale**: Vite-native test runner with Jest-compatible API. Zero config when used alongside Vite. Fast execution, built-in TypeScript support, and native ESM handling.

**Alternatives considered**:
- Jest: Requires separate config, slower, needs `ts-jest` or `@swc/jest` for TypeScript
- Playwright: Overkill for unit-testing pure calculation functions
- Vue Test Utils + Vitest: Standard combo for Vue component testing

### Solar Icons

**Decision**: Solar Icons (npm package) for button icons

**Rationale**: User explicitly requested Solar Icons. The package provides tree-shakeable SVG icons that can be imported individually, keeping bundle size minimal.

**Alternatives considered**:
- Lucide Icons: Similar quality, not what user requested
- Hand-drawn CSS icons: Too much effort for polished result
- Font Awesome: Heavier, not SVG-based

### Color Palette

**Decision**: CSS custom properties for theming

```css
:root {
  --bg: #D2D2D2;
  --input-focus-border: #ffea52;
  --btn-bg: #195ca9;
}
```

**Rationale**: CSS custom properties allow runtime theme overrides and keep color values centralized. Colors are user-specified.

### Project Setup

**Decision**: `npm create vite@latest` with Vue + TypeScript template

**Rationale**: Official Vite scaffolding tool provides optimal defaults for Vue 3 + TypeScript out of the box.

**Commands**:
```bash
npm create vite@latest calc-get-ninjas -- --template vue-ts
cd calc-get-ninjas
npm install
npm install solar-icons
npm install -D vitest @vue/test-utils jsdom
```
