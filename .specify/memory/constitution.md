<!--
  Sync Impact Report

  Version change: (template) → 1.0.0
  Modified principles: N/A (initial fill)
  Added sections:
    - Core Principles (I-V)
    - Technology Constraints
    - Development Workflow
    - Governance
  Removed sections: N/A
  Templates requiring updates:
    - .specify/templates/constitution-template.md: ✅ aligned (source template)
    - .specify/templates/spec-template.md: ✅ compatible (generic structure)
    - .specify/templates/plan-template.md: ✅ compatible (no discipline-specific changes)
    - .specify/templates/tasks-template.md: ✅ compatible (follows standard layout)
  Follow-up TODOs: None
-->

# CalcGetNinjas Constitution

## Core Principles

### I. Web-First (Static SPA)

The application MUST be a single-page application (SPA) that runs entirely in the
browser without any backend dependency. All logic MUST execute client-side using
only HTML, CSS, and JavaScript served as static files.

### II. Simplicity (No Frameworks)

Zero build tools and zero JavaScript frameworks. Use vanilla HTML5, CSS3, and
vanilla JavaScript (ES modules if needed) ONLY. No bundler, transpiler, or
package manager required.

### III. Mobile-First Responsive Design (NON-NEGOTIABLE)

Every screen MUST work flawlessly on mobile (320px+) and desktop. CSS MUST use
responsive design principles: media queries, relative units, flexbox/grid
layouts. Touch interactions MUST be fully supported alongside mouse/keyboard.

### IV. Test-First Calculation Logic

All calculation logic MUST have automated unit tests. Tests MUST be written
before implementation (TDD) and MUST cover: coin-to-currency conversion,
zero/negative input handling, decimal precision, and edge cases.

### V. Clean & Accessible UI

The interface MUST be intuitive, professional, and accessible (WCAG AA
minimum). Users MUST be able to complete the calculation in under 3 steps.
Clear labels, visible error states, and unambiguous success feedback are
required.

## Technology Constraints

- Vanilla HTML, CSS, JS only — no React, Vue, Angular, or Svelte
- No build step — files served directly via HTTP (no bundler)
- All data stored in-memory (no persistence or backend required)
- Use semantic HTML5 elements for screen reader compatibility
- CSS custom properties (variables) encouraged for theming

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

**Version**: 1.0.0 | **Ratified**: 2026-06-18 | **Last Amended**: 2026-06-18
