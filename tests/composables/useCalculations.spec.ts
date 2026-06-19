import { describe, it, expect } from 'vitest'
import { useCalculations } from '../../src/composables/useCalculations'

describe('useCalculations', () => {
  // US1: Cost per Coin
  it('calculates costPerCoin from amountPaid and coinsReceived', () => {
    const calc = useCalculations()
    calc.setAmountPaid('100')
    calc.setCoinsReceived('50')
    expect(calc.costPerCoin.value).toBe(2)
  })

  it('returns null for costPerCoin when coinsReceived is zero', () => {
    const calc = useCalculations()
    calc.setAmountPaid('100')
    calc.setCoinsReceived('0')
    expect(calc.costPerCoin.value).toBeNull()
  })

  it('returns null for costPerCoin when inputs are null', () => {
    const calc = useCalculations()
    expect(calc.costPerCoin.value).toBeNull()
  })

  // US2: Activity Cost
  it('calculates activityCost from costPerCoin and serviceValue', () => {
    const calc = useCalculations()
    calc.setAmountPaid('100')
    calc.setCoinsReceived('50')
    calc.setServiceValue('10')
    expect(calc.costPerCoin.value).toBe(2)
    expect(calc.activityCost.value).toBe(20)
  })

  it('returns null for activityCost when costPerCoin is null', () => {
    const calc = useCalculations()
    calc.setServiceValue('10')
    expect(calc.activityCost.value).toBeNull()
  })

  it('returns null for activityCost when serviceValue is null', () => {
    const calc = useCalculations()
    calc.setAmountPaid('100')
    calc.setCoinsReceived('50')
    expect(calc.activityCost.value).toBeNull()
  })

  // Null propagation
  it('handles null propagation correctly', () => {
    const calc = useCalculations()
    expect(calc.costPerCoin.value).toBeNull()
    expect(calc.activityCost.value).toBeNull()

    calc.setAmountPaid('50')
    calc.setCoinsReceived('25')
    expect(calc.costPerCoin.value).toBe(2)

    calc.setServiceValue('5')
    expect(calc.activityCost.value).toBe(10)
  })

  // Edge cases
  it('handles decimal precision for costPerCoin', () => {
    const calc = useCalculations()
    calc.setAmountPaid('10')
    calc.setCoinsReceived('3')
    expect(calc.costPerCoin.value).toBeCloseTo(3.333, 3)
  })

  it('handles negative amountPaid', () => {
    const calc = useCalculations()
    calc.setAmountPaid('-50')
    calc.setCoinsReceived('25')
    expect(calc.costPerCoin.value).toBeNull()
  })

  it('handles negative serviceValue', () => {
    const calc = useCalculations()
    calc.setAmountPaid('100')
    calc.setCoinsReceived('50')
    calc.setServiceValue('-10')
    expect(calc.activityCost.value).toBeNull()
  })

  // Reset
  it('resets all values', () => {
    const calc = useCalculations()
    calc.setAmountPaid('100')
    calc.setCoinsReceived('50')
    calc.setServiceValue('10')
    calc.reset()
    expect(calc.amountPaid.value).toBeNull()
    expect(calc.coinsReceived.value).toBeNull()
    expect(calc.serviceValue.value).toBeNull()
    expect(calc.costPerCoin.value).toBeNull()
    expect(calc.activityCost.value).toBeNull()
  })
})
