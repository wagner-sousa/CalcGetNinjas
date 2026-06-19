import { describe, it, expect } from 'vitest'
import { formatBRL } from '../../src/composables/useFormat'

describe('formatBRL', () => {
  it('formats a number as BRL currency', () => {
    const result = formatBRL(2)
    expect(result).toContain('R$')
    expect(result).toContain('2,00')
  })

  it('formats large numbers with thousands separator', () => {
    const result = formatBRL(1234.56)
    expect(result).toContain('R$')
    expect(result).toContain('1.234,56')
  })

  it('formats zero', () => {
    const result = formatBRL(0)
    expect(result).toContain('R$')
    expect(result).toContain('0,00')
  })
})
