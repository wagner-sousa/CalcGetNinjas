# Tasks: CalcGetNinjas Calculator

**Input**: Design documents from `specs/001-tdd-test-setup/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Included per spec FR-012 (TDD) and constitution Principle IV (Test-First Calculation Logic).

**Organization**: Tasks grouped by user story for independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: User story label (US1, US2, etc.)
- Include exact file paths in descriptions

## Path Conventions

- **Single project at repository root**: `src/`, `tests/`
- Vue SPA structure from plan.md

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and dependency installation

- [x] T001 Initialize Vite + Vue 3 + TypeScript project via `npm create vite@latest . -- --template vue-ts`
- [x] T002 [P] Install runtime dependencies: `npm install solar-icons`
- [x] T003 [P] Install dev dependencies: `npm install -D vitest @vue/test-utils jsdom`
- [x] T004 [P] Configure Vitest in `vite.config.ts` with `jsdom` environment
- [x] T005 [P] Create directory structure: `src/components/`, `src/composables/`, `src/types/`, `src/constants/`, `tests/composables/`, `tests/components/`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Types, constants, and shared infrastructure that all user stories depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T006 Create TypeScript interfaces in `src/types/calculator.ts` (CalculatorState with amountPaid, coinsReceived, serviceValue; ComputedValues with costPerCoin, activityCost)
- [x] T007 Create CSS custom properties in `src/constants/theme.css` (`--bg: #D2D2D2`, `--input-focus-border: #ffea52`, `--btn-bg: #195ca9`)
- [x] T008 Create global styles in `src/style.css` with mobile-first responsive grid, centralized layout, and WCAG AA-compliant contrast ratios
- [x] T009 [P] Create `src/App.vue` root component with `<CostCalculator />` import and basic layout wrapper
- [x] T010 [P] Create `src/main.ts` entry point with `createApp(App).mount('#app')`

**Checkpoint**: Foundation ready - calculator UI implementation can begin

---

## Phase 3: User Story 1 - Freelancer Calculates Cost per Coin (Priority: P1) 🎯 MVP — TDD

**Goal**: Write failing tests FIRST, then implement cost-per-coin calculation. This is the default TDD path per constitution Principle IV.

**Independent Test**: Run `npm run test -- --run` — cost-per-coin and formatBRL tests pass after implementation.

### ⚠️ Step 1: Write Tests First (Expect Red)

- [x] T011 [P] [US1] Write failing unit tests for cost-per-coin in `tests/composables/useCalculations.spec.ts` — test standard inputs (R$ 100 / 50 = R$ 2,00), zero amountPaid, large values
- [x] T012 [P] [US1] Write failing `formatBRL` unit tests in `tests/composables/useFormat.spec.ts` — test standard values, zero, large numbers, edge decimal places using Brazilian locale (R$ 1.234,56)
- [x] T013 [P] [US1] Write failing CostCalculator component tests in `tests/components/CostCalculator.spec.ts` — test that inputs render, cost per coin updates on input change, null states show `--`
- [x] T014 [US1] Run `npm run test -- --run` and confirm all US1 tests **FAIL** (red) — no implementation yet

### ✅ Step 2: Implement (Make Tests Pass Green)

- [x] T015 [P] [US1] Create `InputField.vue` in `src/components/InputField.vue` with label, numeric input, error state, and focus styling using `--input-focus-border`
- [x] T016 [P] [US1] Create `ResultDisplay.vue` in `src/components/ResultDisplay.vue` with read-only formatted BRL output and null/error state (`--` placeholder)
- [x] T017 [US1] Create `useCalculations.ts` composable in `src/composables/useCalculations.ts` with reactive refs for amountPaid, coinsReceived, and computed costPerCoin (`amountPaid / coinsReceived`); handle division-by-zero returning null
- [x] T018 [US1] Add BRL formatting utility: `src/composables/useFormat.ts` with `formatBRL(value: number): string` using Brazilian locale
- [x] T019 [US1] Create `CostCalculator.vue` in `src/components/CostCalculator.vue` with Row 1 layout: [Valor Pago InputField] [Quantidade InputField] [Custo por Moeda ResultDisplay]; consume useCalculations composable; apply centralized layout per FR-008; implement real-time recalculation per FR-006
- [x] T020 [US1] Update `App.vue` to render `<CostCalculator />` with centered layout using `--bg` background color
- [x] T021 [US1] Run `npm run test -- --run` and confirm all US1 tests **PASS** (green) — TDD cycle complete for US1

**Checkpoint**: User Story 1 complete via TDD — cost per coin calculates correctly and tests pass

---

## Phase 4: User Story 2 - Freelancer Calculates Activity Cost (Priority: P1) — TDD

**Goal**: Write failing tests FIRST, then implement activity-cost calculation. Extends US1 composable and component.

**Independent Test**: Run `npm run test -- --run` — activity-cost, null propagation, and Limpar button tests pass after implementation.

### ⚠️ Step 1: Write Tests First (Expect Red)

- [x] T022 [P] [US2] Write failing unit tests for activity-cost calculation in `tests/composables/useCalculations.spec.ts` — test standard inputs (R$ 2/coin × 10 = R$ 20), zero serviceValue
- [x] T023 [P] [US2] Write failing unit tests for null propagation and division-by-zero in `tests/composables/useCalculations.spec.ts` — test null amountPaid, null coinsReceived, coinsReceived=0, null serviceValue
- [x] T024 [P] [US2] Write failing Limpar button test in `tests/components/CostCalculator.spec.ts` — test that clicking Limpar resets all fields and computed values
- [x] T025 [US2] Run `npm run test -- --run` and confirm new US2 tests **FAIL** (red)

### ✅ Step 2: Implement (Make Tests Pass Green)

- [x] T026 [US2] Add `serviceValue` ref and `activityCost` computed (`serviceValue * costPerCoin`) to `useCalculations.ts`; handle null propagation when costPerCoin is null
- [x] T027 [US2] Extend `CostCalculator.vue` with Row 2 layout: [Valor do Serviço InputField] [Custo da Atividade ResultDisplay]; maintain centralized alignment per FR-008
- [x] T028 [US2] Add "Limpar" button to `CostCalculator.vue` (FR-009) with Solar Icons icon and tooltip that resets all refs to null; wire null propagation for error states
- [x] T029 [US2] Run `npm run test -- --run` and confirm ALL tests **PASS** (green) — US1 + US2 TDD complete

**Checkpoint**: Both P1 user stories complete via TDD — full calculator functional with passing test suite

---

## Phase 5: User Story 3 - Additional Component Tests (Priority: P2)

**Goal**: Extend test suite with InputField and remaining CostCalculator integration tests.

**Independent Test**: Run `npm run test -- --run` and see per-file pass/fail summary with component test results.

### Tests for User Story 3 ⚠️

- [x] T030 [P] [US3] Write InputField.vue component tests in `tests/components/InputField.spec.ts` — test label rendering, input binding, error state styling, focus border
- [x] T031 [P] [US3] Write ResultDisplay.vue component tests in `tests/components/ResultDisplay.spec.ts` — test BRL formatting, null/error state (`--` placeholder), large values
- [x] T032 [US3] Run `npm run test -- --run` and confirm all tests pass with per-file summary

**Checkpoint**: Component tests complete — full visual regression safety net

---

## Phase 6: User Story 4 - Edge Cases for Calculation Logic (Priority: P3)

**Goal**: Edge case handling verified — negative inputs, decimal precision, full null propagation matrix.

**Independent Test**: Add edge case tests to existing files, run suite, confirm all pass.

### Tests for User Story 4 ⚠️

- [x] T033 [P] [US4] Write edge case tests for negative inputs in `tests/composables/useCalculations.spec.ts` — test negative amountPaid, negative serviceValue (should produce error state per FR-001/FR-004)
- [x] T034 [P] [US4] Write decimal precision tests in `tests/composables/useCalculations.spec.ts` — test 3+ decimal place inputs, rounding behavior
- [x] T035 [P] [US4] Write empty/null field edge case tests in `tests/composables/useCalculations.spec.ts` — test all input combinations from null propagation matrix in data-model.md
- [x] T036 [US4] Run full test suite: `npm run test -- --run` — confirm all pass
- [x] T037 [US4] Update spec.md Edge Cases section if new edge cases discovered during testing

**Checkpoint**: All edge cases tested — calculation logic hardened

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Final validation, responsive design verification, and post-implementation checks

- [x] T038 [P] Verify mobile responsiveness (320px+) in browser DevTools — all inputs and results stack/align correctly per FR-008
- [x] T039 [P] Verify Limpar button icon renders from Solar Icons and tooltip displays on hover/focus per SC-007
- [x] T040 [P] Verify WCAG AA color contrast for all text against `--bg: #D2D2D2` (especially #195ca9 button text and #ffea52 focus border)
- [x] T041 Run quickstart.md validation scenarios 1-5 to confirm end-to-end functionality
- [x] T042 Verify `npm run build` produces `dist/` with no errors and all assets load correctly
- [x] T043 [P] Clean up console.log, unused imports, and dead code across all source files
- [x] T044 Update AGENTS.md SPECKIT markers to reflect current feature state
- [x] T045 Run final `npm run test -- --run` — all 22 tests passing
- [x] T046 Apply UI refinements: integer-only inputs for Quantidade and Valor do Serviço; Limpar button next to activity cost; Limpar color as --input-focus-border

**Checkpoint**: Feature complete — ready for review and merge

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion — BLOCKS all user stories
- **US1 (Phase 3)**: Depends on Foundational — MVP candidate (TDD: tests → implement)
- **US2 (Phase 4)**: Depends on US1 (shares composable and CostCalculator component)
- **US3 (Phase 5)**: Depends on US1 and US2 (writes additional component tests)
- **US4 (Phase 6)**: Depends on US1 and US2 (writes edge case tests for composables)
- **Polish (Phase 7)**: Depends on all desired user stories being complete

### User Story Dependencies

- **US1 (P1)**: Can start after Foundational — independent
- **US2 (P1)**: Can start after US1 — extends same component and composable
- **US3 (P2)**: Can start after US1+US2 — tests components and displays
- **US4 (P3)**: Can start after US1+US2 — extends composable edge case tests

### Within Each User Story

- **TDD is the default**: Write tests first (expect red), then implement (make green)
- Each story follows: failing tests → implementation → passing tests
- Story complete before moving to next priority

### Parallel Opportunities

- T002, T003, T004 (Setup) can run in parallel
- T009, T010 (Foundational) can run in parallel
- T011-T013 (US1 tests) can all run in parallel
- T015, T016 (US1 components) can run in parallel
- T022-T024 (US2 tests) can all run in parallel
- T030, T031 (US3 tests) can run in parallel
- T033-T035 (US4 tests) can run in parallel
- T038-T040 (Polish) can run in parallel

---

## Parallel Example: User Story 1 — TDD Phase ⚠️

```bash
# Step 1: Write all tests together (they will fail):
Task: "Write cost-per-coin tests in tests/composables/useCalculations.spec.ts"
Task: "Write formatBRL tests in tests/composables/useFormat.spec.ts"
Task: "Write CostCalculator component tests in tests/components/CostCalculator.spec.ts"

# Step 2: Implement all components together (tests turn green):
Task: "Create InputField.vue in src/components/InputField.vue"
Task: "Create ResultDisplay.vue in src/components/ResultDisplay.vue"
```

## Parallel Example: User Story 3 (Additional Component Tests)

```bash
# Launch all component test files together:
Task: "Write InputField tests in tests/components/InputField.spec.ts"
Task: "Write ResultDisplay tests in tests/components/ResultDisplay.spec.ts"
```

---

## Implementation Strategy

### TDD-First (Default — Constitution Principle IV)

Every user story follows the TDD cycle: **write failing test → implement → make test pass**.

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL — blocks all stories)
3. **Phase 3 (US1 - Cost per Coin)**: Write tests first (T011-T014 → fail), then implement (T015-T021 → pass)
4. **Phase 4 (US2 - Activity Cost)**: Write tests first (T022-T025 → fail), then implement (T026-T029 → pass)
5. **STOP and VALIDATE**: Run `npm run test -- --run` — all tests pass. Run quickstart.md Scenarios 1-4.
6. Deploy/demo if ready — the app has TDD coverage for all calculation logic

### Full Delivery

1. MVP (Phases 1-4) complete with TDD → deployable
2. Add Component Tests (Phase 5) → full component coverage
3. Add Edge Cases (Phase 6) → hardened calculation logic
4. Complete Phase 7: Polish → ready for merge

### Implementation-First (Alternative — Non-TDD Path)

If tests must be deferred:
1. Complete Phases 1-2 (Setup + Foundational)
2. Complete Phase 3 implementation only (T015-T021), skip tests
3. Complete Phase 4 implementation only (T026-T029), skip tests
4. Return to write tests later (T011-T014 + T022-T025) as a batch
5. Continue with Phases 5-7

**⚠️ Note**: This alternative path violates constitution Principle IV. Only use if explicitly approved.

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to user story for traceability
- **TDD is the default**: For US1 and US2, write tests (Step 1 — expect RED) before implementation (Step 2 — make GREEN)
- Each user story should be independently completable and testable
- Commit after each TDD cycle (after both Step 1 and Step 2) or each logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
- The Implementation-First path in Implementation Strategy violates constitution Principle IV — use only with explicit approval
