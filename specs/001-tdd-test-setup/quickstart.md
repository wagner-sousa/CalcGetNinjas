# Quickstart: CalcGetNinjas Calculator

## Prerequisites

- Node.js 18+ and npm

## Setup

```bash
# Create the project with Vite + Vue 3 + TypeScript
npm create vite@latest . -- --template vue-ts

# Install dependencies
npm install
npm install solar-icons
npm install -D vitest @vue/test-utils jsdom
```

## Development

```bash
npm run dev
# Opens at http://localhost:5173
```

## Run Tests

```bash
npm run test
# Vitest runs in watch mode by default
# Add --run for single-run (CI mode)
```

## Build for Production

```bash
npm run build
# Output in dist/
# Deploy dist/ to any static host
```

## Validation Scenarios

### Scenario 1: Cost per Coin

1. Open the app at `http://localhost:5173`
2. Enter **Valor Pago**: `100,00`
3. Enter **Quantidade de Moedas**: `50`
4. **Expected**: Valor de Custo por Moeda displays `R$ 2,00`

### Scenario 2: Activity Cost

1. With Scenario 1 values still entered
2. Enter **Valor do Serviço**: `10`
3. **Expected**: Valor de Custo da Atividade displays `R$ 20,00`

### Scenario 3: Division by Zero

1. Enter **Valor Pago**: `50,00`
2. Enter **Quantidade de Moedas**: `0`
3. **Expected**: Cost per coin shows error message "Divisão por zero"

### Scenario 4: Clear Button

1. Enter any values across all fields
2. Click the **Limpar** button
3. **Expected**: All fields reset to empty, computed values show `--`

### Scenario 5: TDD — Unit Tests

1. Run `npm run test -- --run`
2. **Expected**: All tests pass (cost-per-coin, activity-cost, zero/negative/edge cases)

## References

- [Specification](spec.md)
- [Data Model](data-model.md)
- [Plan](plan.md)
