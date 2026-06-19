# Contracts: CalcGetNinjas Calculator

This project is a pure client-side SPA with no external service dependencies. There are no API endpoints, CLI interfaces, or library exports.

## UI Contract

The sole interface is the browser DOM. The application exposes:

1. **Input fields** (read-write): `<input type="text">` elements for `amountPaid`, `coinsReceived`, and `serviceValue`
2. **Output displays** (read-only): formatted text elements for `costPerCoin` and `activityCost`
3. **Action button**: "Limpar" button with Solar Icons icon and tooltip

## Data Flow Contract

```
User Input → Vue Reactivity (ref/computed) → DOM Update
                   ↓
           Pure Functions (useCalculations.ts)
                   ↓
           Computed Values (costPerCoin, activityCost)
```

All computation is synchronous and runs in the browser's main thread. No network calls, no persistence.
