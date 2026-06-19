export interface CalculatorInputs {
  amountPaid: number | null
  coinsReceived: number | null
  serviceValue: number | null
}

export interface ComputedValues {
  costPerCoin: number | null
  activityCost: number | null
}
