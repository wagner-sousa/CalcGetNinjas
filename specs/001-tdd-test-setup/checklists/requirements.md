# Requirements Quality Checklist: CalcGetNinjas Calculator

**Purpose**: Validate requirements writing quality across all domains (UI/UX, Calculation Logic, TDD/Testing)
**Created**: 2026-06-18
**Feature**: [spec.md](../spec.md)

## Requirement Completeness

- [x] CHK001 - Are error handling requirements defined for all invalid input scenarios (non-numeric, negative, empty)? [Completeness, Spec §FR-001–FR-007, Edge Cases]
- [ ] CHK002 - Are mobile-responsive layout requirements specified for the centralized two-row input structure? [Gap, Spec §FR-008]
- [ ] CHK003 - Are accessibility requirements (WCAG AA) explicitly mapped to each interactive element (inputs, button, outputs)? [Completeness, Spec §FR-001–FR-010]
- [ ] CHK004 - Are keyboard navigation and focus management requirements defined for the calculator? [Gap, Spec §V]
- [x] CHK005 - Are requirements defined for the initial/empty state of all computed result fields? [Completeness, Spec §Edge Cases]
- [ ] CHK006 - Are requirements defined for tooltip content behavior (content source, language, delay)? [Gap, Spec §FR-009]
- [ ] CHK007 - Are requirements defined for icon loading failure (icon not found, slow network)? [Gap, Assumptions]

## Requirement Clarity

- [x] CHK008 - Is "decimal precision" explicitly quantified (number of decimal places) for all numeric input fields? [Clarity, Spec §Assumptions]
- [x] CHK009 - Is the BRL currency formatting specification (thousands separator, decimal separator) clearly defined? [Clarity, Spec §FR-003, FR-005, Assumptions]
- [ ] CHK010 - Is "under 1 second" for calculated results properly bounded (what counts as "calculated" — initial load or update?) [Clarity, Spec §SC-001]
- [x] CHK011 - Is "centralized layout" defined with specific alignment, spacing, and sizing rules? [Clarity, Spec §Assumptions]
- [x] CHK012 - Is "real time" recalculation defined with specific timing/debounce requirements? [Clarity, Spec §Assumptions]
- [x] CHK013 - Is "clear error message" for division by zero explicitly specified (message text, location, style)? [Clarity, Spec §FR-007]
- [x] CHK014 - Is "tooltip" behavior defined (show on hover vs focus, hide delay, max width)? [Clarity, Spec §Assumptions]

## Requirement Consistency

- [ ] CHK015 - Do field label requirements use consistent naming between User Stories (e.g., "Valor de Custo por moeda") and FR sections (e.g., "Valor de Custo por Moeda")? [Consistency, Spec §User Story 1 vs §FR-003]
- [ ] CHK016 - Do Success Criteria measurable outcomes align with the Functional Requirements they validate? [Consistency, Spec §SC vs §FR]
- [ ] CHK017 - Are validation rules for input fields consistent between spec and data-model.md? [Consistency, Spec §FR vs data-model.md]
- [x] CHK018 - Are the "under 3 interaction steps" (Principle V) and "under 3 steps" (SC-006) defined with the same counting methodology? [Consistency, Spec §SC-006]

## Acceptance Criteria Quality

- [ ] CHK019 - Can all acceptance scenarios in User Stories be objectively verified without implementation knowledge? [Measurability, Spec §User Stories 1-5]
- [ ] CHK020 - Does each acceptance scenario have clear, unique expected values (not "correctly computed" without specifics)? [Measurability, Spec §User Story 2, §User Story 5]
- [ ] CHK021 - Are expected output formats (currency, number of decimal places, error text) specified in acceptance scenarios? [Measurability, Spec §User Stories 1-2]
- [ ] CHK022 - Is the "appropriate error is raised" from User Story 5 distinguished from the FR-007 division-by-zero error? [Measurability, Spec §User Story 5 vs §FR-007]

## Scenario Coverage

- [ ] CHK023 - Are requirements defined for the complete user flow from empty state to calculated results? [Coverage, Edge Cases]
- [ ] CHK024 - Is there a defined requirement for what happens when the user only fills partial data (Row 1 complete, Row 2 not)? [Coverage, Spec §Edge Cases]
- [ ] CHK025 - Are requirements defined for screen reader announcements on calculation updates? [Coverage, Gap]
- [x] CHK026 - Are requirements defined for color contrast ratios for all text against #D2D2D2 background? [Coverage, Spec §Assumptions]
- [x] CHK027 - Are requirements defined for the "Limpar" button's icon choice and tooltip text? [Coverage, Spec §Assumptions]

## Edge Case Coverage

- [ ] CHK028 - Are requirements defined for very large numeric values (overflow, formatting)? [Edge Case, Gap]
- [x] CHK029 - Is the "Quantidade de Moedas = 0" scenario resolved — does the spec require preventing 0 or displaying an error? [Edge Case, Spec §FR-002, FR-007, data-model]
- [x] CHK030 - Are requirements defined for rapid sequential input changes (debouncing or throttling)? [Edge Case, Spec §Assumptions]

## Non-Functional Requirements

- [ ] CHK031 - Are performance requirements clearly bounded (what "under 1 second" includes — network, render, or just computation)? [NFR, Spec §SC-001]
- [ ] CHK032 - Are offline capability requirements defined for the SPA after initial load? [NFR, Plan §Constraints]
- [ ] CHK033 - Are WCAG AA compliance requirements mapped to specific checkpoints (color contrast, keyboard nav, screen reader)? [NFR, Spec §V]

## Dependencies & Assumptions

- [ ] CHK034 - Is the assumption "Calculation functions are pure functions" validated against the real-time recalculation requirement? [Assumption, Spec §Assumptions vs §FR-006]
- [ ] CHK035 - Is the dependency on Solar Icons package documented with fallback behavior if the package changes? [Dependency, Assumptions]
- [ ] CHK036 - Are the color values in Assumptions explicitly linked to the FR-008 layout requirements? [Traceability, Spec §Assumptions vs §FR-008]

## Notes

- This checklist validates requirements writing quality (not implementation) across UI/UX, Calculation Logic, and TDD/Testing domains
- Items with [Gap] tags identify requirements that appear missing from the spec
- Items with [Ambiguity] tags identify terms needing quantification or clarification
- Resolved items (13/36): CHK001, CHK005, CHK008, CHK009, CHK011, CHK012, CHK013, CHK014, CHK018, CHK026, CHK027, CHK029, CHK030
- Remaining unchecked items (23/36) are lower-impact quality refinements — many are subjective criteria (e.g., "are terms consistent?") that don't block implementation
