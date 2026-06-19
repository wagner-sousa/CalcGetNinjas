import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ResultDisplay from '../../src/components/ResultDisplay.vue'

describe('ResultDisplay', () => {
  it('renders label and readonly input with value', () => {
    const wrapper = mount(ResultDisplay, {
      props: { label: 'Resultado', value: 'R$ 10,00' },
    })
    expect(wrapper.text()).toContain('Resultado')
    const input = wrapper.find('input')
    expect(input.exists()).toBe(true)
    expect(input.attributes('readonly')).toBeDefined()
    expect(input.element.value).toBe('R$ 10,00')
  })

  it('shows placeholder when value is null', () => {
    const wrapper = mount(ResultDisplay, {
      props: { label: 'Resultado', value: null },
    })
    const input = wrapper.find('input')
    expect(input.element.value).toBe('--')
  })
})
