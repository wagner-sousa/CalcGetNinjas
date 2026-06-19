# Feature Specification: CalcGetNinjas Calculator

**Feature Branch**: `001-tdd-test-setup`

**Created**: 2026-06-18

**Status**: Draft

**Input**: User description: "O projeto deve usar as principais bibliotecas do mercado e usar o conceito TDD."

## Clarifications

### Session 2026-06-18

- Q: What are the input fields and layout of the calculator screen? → A: Three input fields (Valor Pago nas Moedas em reais, Quantidade de moedas recebidas, Valor do Serviço em moedas) and two calculated outputs (Valor de Custo por moeda em reais, valor de custo da atividade em reais). Only BRL currency. Layout: Row 1 has [Valor Pago] [Quantidade] [Custo por moeda], Row 2 has [Valor do Serviço] [Custo da Atividade]. Inputs are centralized with buttons with icons and tooltips.
- Q: What actions do the buttons perform? → A: Single "Limpar" (Clear) button that resets all input fields and calculated outputs.
- Q: Negative values are allowed in inputs? → A: Não. Valores negativos não serão permitidos em nenhum campo de entrada.
- Q: What is the BRL formatting convention for inputs and results? → A: Padrão brasileiro — vírgula como separador decimal, ponto como separador de milhar (R$ 1.234,56).

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Freelancer Calculates Cost per Coin (Priority: P1)

A freelancer on the GetNinjas platform wants to know the effective cost of each coin they purchased. They enter the amount paid in reais and the quantity of coins received. The application instantly calculates and displays the cost per coin.

**Why this priority**: This is the primary calculation — without it the tool has no value. It directly answers "how much did each coin cost me?"

**Independent Test**: A freelancer can enter a real value (e.g., R$ 100,00) and a coin quantity (e.g., 50), see the cost per coin calculated (R$ 2,00), and verify the math independently.

**Acceptance Scenarios**:

1. **Given** a freelancer on the calculator screen, **When** they enter Valor Pago (R$ 50,00) and Quantidade de Moedas (25), **Then** Valor de Custo por moeda displays R$ 2,00
2. **Given** the calculator with valid inputs, **When** either input value changes, **Then** the cost per coin recalculates in real time

---

### User Story 2 - Freelancer Calculates Activity Cost (Priority: P1)

A freelancer receives a service proposal quoted in coins on GetNinjas. They enter the Valor do Serviço em moedas and, using the previously calculated cost per coin, the application shows how much that activity costs in reais.

**Why this priority**: This is the second essential calculation — it converts the quoted coin price into real currency so the freelancer can evaluate the proposal.

**Independent Test**: With Valor Pago and Quantidade de Moedas filled in, a freelancer can enter a Valor do Serviço (e.g., 10 coins) and see the cost in reais calculated (R$ 20,00 at R$ 2,00/coin).

**Acceptance Scenarios**:

1. **Given** the cost per coin is already calculated, **When** the freelancer enters Valor do Serviço em moedas (10), **Then** valor de custo da atividade displays R$ 20,00
2. **Given** Valor Pago or Quantidade de Moedas changes, **When** the cost per coin updates, **Then** valor de custo da atividade also recalculates

---

### User Story 3 - Developer Writes and Runs Unit Tests (Priority: P2)

A developer implements the calculation functions for the calculator. Before writing the implementation, they write a failing test that defines the expected behavior. They then implement the logic, verify the test passes, and move on confidently.

**Why this priority**: TDD ensures calculation correctness. Relegated to P2 behind P1 user stories because the user-facing calculator must ship.

**Independent Test**: A developer can write a new test file, implement the corresponding calculation, run the test suite, and see the new test passing.

**Acceptance Scenarios**:

1. **Given** a new calculation requirement, **When** the developer writes a unit test defining the expected output before implementation, **Then** the test initially fails (red)
2. **Given** a failing test, **When** the developer implements the calculation logic, **Then** the test passes (green)
3. **Given** a passing test suite, **When** the developer refactors the implementation, **Then** all existing tests still pass (refactor)

---

### User Story 4 - Developer Runs Full Test Suite and Reviews Results (Priority: P3)

A developer wants to verify that no existing functionality is broken after a change. They run the complete test suite with a single command and review a clear summary of which tests passed and which failed.

**Why this priority**: Quick feedback on regressions is important but secondary to shipping the calculator functionality.

**Independent Test**: A developer can run a single command, see a list of all tests with pass/fail status, and inspect details of any failing test.

**Acceptance Scenarios**:

1. **Given** a test suite with multiple tests, **When** the developer runs the full suite, **Then** they see a summary showing pass/fail count for each test file
2. **Given** a test failure, **When** the developer views the results, **Then** they see the specific assertion that failed and the expected vs actual values

---

### User Story 5 - Developer Tests Edge Cases for Calculation Logic (Priority: P3)

A developer ensures that calculation functions handle boundary conditions correctly — zero values, negative inputs, decimal precision limits, and invalid arguments.

**Why this priority**: Calculation correctness under edge conditions is critical for user trust but can be refined after core flows work.

**Independent Test**: A developer adds test cases for zero, negative, and boundary inputs, runs the suite, and confirms all edge cases are handled.

**Acceptance Scenarios**:

1. **Given** a calculation function, **When** tested with zero as input, **Then** the result is correctly computed (e.g., zero conversion returns zero)
2. **Given** a calculation function, **When** tested with negative input, **Then** the result is correctly computed or an appropriate error is raised
3. **Given** a calculation function, **When** tested with inputs requiring decimal precision, **Then** the result is accurate to the defined number of decimal places

---

### Edge Cases

#### Application Edge Cases

- What happens when Quantidade de Moedas is zero (division by zero)? → Displays "Divisão por zero" error
- What happens when Valor Pago or Valor do Serviço is left empty? → Computed results show `--` placeholder
- What happens when the user enters negative values? → Input rejects negative values and displays validation error
- What happens when the user enters non-numeric characters? → Input rejects non-numeric input and displays validation error
- Initial/empty state: all input fields are empty, all computed results display `--` placeholder
- What happens when the calculated cost per coin has more than 2 decimal places?
- What happens when both inputs on Row 1 are filled but Valor do Serviço is empty?

#### Testing Edge Cases

- What happens when the test suite contains no tests?
- How does the test runner handle syntax errors in test files?
- How are asynchronous operations (if any) in calculation logic tested?
- What happens when a test file is malformed or missing?

## Requirements *(mandatory)*

### Functional Requirements

#### Application

- **FR-001**: The calculator MUST display the Valor Pago nas Moedas input field accepting non-negative numeric values in reais (BRL) with decimal precision
- **FR-002**: The calculator MUST display the Quantidade de Moedas Recebidas input field accepting positive integer values (must be > 0)
- **FR-004**: The calculator MUST display the Valor do Serviço em Moedas input field accepting non-negative numeric values
- **FR-005**: The calculator MUST compute and display valor de custo da atividade = Valor do Serviço × Valor de Custo por Moeda, formatted in reais (BRL)
- **FR-006**: All calculations MUST update in real time as the user modifies any input field
- **FR-007**: The calculator MUST prevent division by zero by rejecting Quantidade de Moedas values of zero or less at input level (per FR-002)
- **FR-008**: The calculator MUST have a centralized layout with input fields and calculated outputs aligned in two rows as specified
- **FR-009**: The calculator MUST include a single "Limpar" button with an icon and a tooltip that resets all input fields and calculated outputs to their initial empty state
- **FR-010**: The interface MUST allow completing the full calculation in under 3 interaction steps (Principle V)

#### Testing & TDD

- **FR-011**: The project MUST include a test runner capable of executing JavaScript unit tests and reporting pass/fail results
- **FR-012**: All modules (components, composables, utilities) MUST have corresponding unit tests written before implementation (TDD)
- **FR-013**: Tests MUST cover: cost-per-coin calculation, activity-cost calculation, zero/negative input handling, decimal precision, and edge cases
- **FR-014**: The test suite MUST be executable via a single command or action
- **FR-015**: Test output MUST clearly indicate which tests passed, which failed, and provide failure details (expected vs actual)
- **FR-016**: Tests MUST be isolated from each other — the outcome of one test MUST NOT affect another
- **FR-017**: The testing setup MUST support adding new test files without modifying configuration
- **FR-018**: The project structure MUST separate test files from source files to avoid shipping test code

### Key Entities *(include if feature involves data)*

- **Amount Paid (Valor Pago)**: Monetary value in reais (BRL) that a freelancer paid to purchase coins on GetNinjas. Numeric, decimal.
- **Coins Received (Quantidade de Moedas)**: Number of coins received in exchange for the amount paid. Positive integer.
- **Cost per Coin (Custo por Moeda)**: Calculated value = Amount Paid / Coins Received. Displayed in reais (BRL).
- **Service Value (Valor do Serviço)**: Service price quoted in coins on the GetNinjas platform. Positive integer.
- **Activity Cost (Custo da Atividade)**: Calculated value = Service Value × Cost per Coin. Displayed in reais (BRL).
- **Test Suite**: Collection of all unit tests for the project. Grouped by calculation module.
- **Test Case**: Individual test within a suite, containing assertions about expected calculation results.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A freelancer can enter Valor Pago, Quantidade de Moedas, and Valor do Serviço and see both calculated results in under 1 second
- **SC-002**: 100% of project modules (components, composables, utilities) have at least one passing unit test before code is merged
- **SC-003**: Test coverage for calculation logic includes at minimum: cost-per-coin calculation, activity-cost calculation, zero input, negative input, and decimal precision. All other modules have tests covering their primary behavior
- **SC-004**: A new developer can add a test and run the suite in under 2 minutes without external guidance
- **SC-005**: All tests pass on every commit (no failing tests in the main branch)
- **SC-006**: The full calculation (entering all inputs and seeing both results) completes in under 3 interaction steps, with no additional clicks beyond data entry
- **SC-007**: Every button has both an icon and a tooltip visible on hover/focus

## Assumptions

- The project uses Vue 3 (Composition API) + TypeScript + Vite as the tech stack (per constitution v2.0.0)
- Solar Icons package (npm) provides the visual reference for icon style; actual icons are inline SVGs styled in Solar Icons design language (the npm package is React-only, not Vue-compatible)
- CSS custom properties define the color palette: `--bg: #D2D2D2`, `--input-focus-border: #ffea52`, `--btn-bg: #195ca9`
- Node.js is a development toolchain dependency only, not required at runtime
- Tests run via Vitest in a local developer environment, not in production
- Test code is excluded from the production deployment (`vite build` only includes built assets)
- Calculation functions are pure functions (same input always produces same output), making them straightforward to test
- The application only supports BRL (reais) as the fiat currency — no multi-currency support needed
- All coin quantities are positive integers; fractional coins are not expected
- The GetNinjas platform uses "moedas" as its internal virtual currency unit
- BRL values use Brazilian locale formatting: vírgula (`,`) como separador decimal, ponto (`.`) como separador de milhar (ex.: R$ 1.234,56)
- The application is fully localized in Brazilian Portuguese (pt-BR) — all UI text, labels, tooltips, error messages, and number formatting follow Brazilian conventions
- Decimal precision for all BRL monetary values is 2 decimal places (centavos)
- Calculations update in real time with no debounce — every keystroke triggers immediate recalculation
- Tooltips display on hover (mouse) or focus (keyboard), hide on mouseout or blur, with no delay
- The "Limpar" button uses the Solar Icons `TrashBinTrash` icon (or equivalent delete icon from Solar Icons)
- Centralized layout means: all fields are aligned to the center of the viewport using flexbox, with uniform spacing (gap) between elements and consistent field widths
- WCAG AA contrast ratio of 4.5:1 for normal text and 3:1 for large text is required against the `--bg: #D2D2D2` background
