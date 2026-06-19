# Data Model: CalcGetNinjas Calculator

## Overview

The calculator operates on a simple in-memory reactive state with no persistence. All values are pure numeric representations computed from user inputs.

## Entities

### CalculatorState

The single source of truth for all calculator fields.

| Field | Type | Source | Validation | Description |
|-------|------|--------|------------|-------------|
| `amountPaid` | `number \| null` | User input | >= 0, decimal | Valor Pago nas Moedas in BRL |
| `coinsReceived` | `number \| null` | User input | >= 0, integer | Quantidade de Moedas Recebidas |
| `serviceValue` | `number \| null` | User input | >= 0, decimal | Valor do Serviço em moedas |

### Computed Values (derived, not stored)

| Field | Type | Formula | Description |
|-------|------|---------|-------------|
| `costPerCoin` | `number \| null` | `amountPaid / coinsReceived` | Valor de Custo por Moeda in BRL |
| `activityCost` | `number \| null` | `serviceValue * costPerCoin` | Valor de Custo da Atividade in BRL |

### Null Propagation Rules

| Condition | costPerCoin | activityCost |
|-----------|-------------|--------------|
| `amountPaid` is null or `coinsReceived` is null | null | null |
| `coinsReceived` is 0 | null (division by zero) | null |
| `serviceValue` is null | computed normally | null |
| All fields filled and valid | computed | computed |

## Validation Rules

| Rule | FR Reference | Behavior |
|------|-------------|----------|
| `amountPaid` must be a non-negative decimal | FR-001 | Input rejection + error message shown on blur |
| `coinsReceived` must be a positive integer | FR-002 | Input rejection + error message; disallow 0 |
| `serviceValue` must be a non-negative decimal | FR-004 | Input rejection + error message |
| Division by zero (`coinsReceived` = 0) | FR-007 | Display "Divisão por zero" error message |
| Empty fields | — | Display "--" or placeholder for computed results |

## State Transitions

```
[Empty State] → user types → [Partial State] → user types → [Complete State]
                                                      ↕ (real-time)
                                              [Computed State]
```

The app has no explicit submit step. Computed values update reactively as any input changes (FR-006). The "Limpar" button transitions all fields back to [Empty State].
