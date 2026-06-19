# Implementation Plan: CalcGetNinjas Calculator

**Branch**: `001-tdd-test-setup` | **Date**: 2026-06-18 | **Spec**: `specs/001-tdd-test-setup/spec.md`

**Input**: Feature specification from `specs/001-tdd-test-setup/spec.md`

## Summary

Build a Vue 3 + TypeScript SPA that lets GetNinjas freelancers calculate effective coin costs and service activity costs in reais (BRL). The app has two rows of centralized fields: Row 1 computes cost per coin from amount paid and coins received; Row 2 computes activity cost from service value in coins. A single "Limpar" button resets all fields.

## Technical Context

**Language/Version**: TypeScript 5.x, Vue 3 (Composition API, `<script setup>`)

**Primary Dependencies**: vue@3, solar-icons, vite

**Storage**: N/A — in-memory only (no persistence)

**Testing**: Vitest + `@vue/test-utils` (for component tests)

**Target Platform**: Modern browsers (Chrome, Firefox, Safari, Edge — latest 2 major versions)

**Project Type**: Static SPA (web application, client-side only)

**Performance Goals**: Results visible to user in under 1 second from input change (per spec SC-001); initial load <2s on 3G

**Constraints**: No backend required; WCAG AA accessibility

**Scale/Scope**: Single-screen calculator, single user (no multi-user or auth)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Gate | Status | Notes |
|------|--------|-------|
| Vue SPA (Principle I) | ✅ Pass | Static SPA, no backend. Node.js only for dev toolchain. |
| Vue + TS Stack (Principle II) | ✅ Pass | Vue 3 + TypeScript + Vite. Solar Icons only utility package. |
| Mobile-First (Principle III) | ✅ Pass | Intended in spec; verified in UI design. |
| Test-First Development — TDD (Principle IV) | ✅ Pass | Project-wide TDD per constitution v2.2.0. All modules have tests before implementation. |
| Clean UI / WCAG AA (Principle V) | ✅ Pass | Spec requires accessibility. |

## Project Structure

### Documentation (this feature)

```text
specs/001-tdd-test-setup/
├── plan.md              # This file
├── spec.md              # Feature specification
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
└── checklists/          # Quality checklists
```

### Source Code (repository root)

```text
src/
├── components/
│   ├── CostCalculator.vue    # Main calculator component
│   ├── InputField.vue        # Reusable labeled input
│   └── ResultDisplay.vue     # Read-only calculated result
├── composables/
│   └── useCalculations.ts    # Calculation logic (pure functions)
├── types/
│   └── calculator.ts         # TS interfaces for calculator data
├── constants/
│   └── theme.css             # CSS custom properties (colors)
├── App.vue                   # Root component
├── main.ts                   # App entry point
└── style.css                 # Global styles (mobile-first grid)

tests/
├── composables/
│   └── useCalculations.spec.ts  # Unit tests for calculation logic
└── components/
    └── CostCalculator.spec.ts   # Component integration tests
```

**Structure Decision**: Standard Vite + Vue SPA layout. All business logic isolated in composables for testability. Components are thin wrappers over computed state.

## Complexity Tracking

> **Constitution Check passed with amendment to v2.0.0. No violations remain.**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Vue 3 + TypeScript (was: vanilla JS only) | User explicitly requested "principais bibliotecas do mercado" — Vue is the most popular Brazilian dev ecosystem choice | Vanilla JS would require manual DOM manipulation and lacks reactive data binding, increasing maintenance cost |
| Vite + npm (was: no build step) | Required by Vue + TypeScript compilation | Serving raw `.vue`/`.ts` files is not supported by browsers; Vite is the lightest build setup for Vue |
| Solar Icons (npm) | User explicitly requested Solar Icons package | CSS-drawn icons would lack the variety and polish of a dedicated icon set |
