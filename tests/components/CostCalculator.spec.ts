import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CostCalculator from '../../src/components/CostCalculator.vue'

describe('CostCalculator', () => {
  it('renders all input fields', () => {
    const wrapper = mount(CostCalculator)
    expect(wrapper.text()).toContain('Valor Pago nas Moedas')
    expect(wrapper.text()).toContain('Quantidade de Moedas')
    expect(wrapper.text()).toContain('Valor do Serviço')
  })

  it('renders the Limpar button as icon-only with tooltip', () => {
    const wrapper = mount(CostCalculator)
    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
    expect(button.attributes('title')).toBe('Limpar todos os campos')
    expect(button.find('svg').exists()).toBe(true)
  })

  it('renders computed result displays', () => {
    const wrapper = mount(CostCalculator)
    expect(wrapper.text()).toContain('Custo por Moeda')
    expect(wrapper.text()).toContain('Custo da Atividade')
  })

  it('shows three editable inputs and two readonly result inputs', () => {
    const wrapper = mount(CostCalculator)
    const inputs = wrapper.findAll('input')
    const readonly = inputs.filter(i => i.attributes('readonly') !== undefined)
    const editable = inputs.filter(i => i.attributes('readonly') === undefined)
    expect(editable.length).toBe(3)
    expect(readonly.length).toBe(2)
  })
})
