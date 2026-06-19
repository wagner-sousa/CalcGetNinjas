import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import InputField from '../../src/components/InputField.vue'

describe('InputField', () => {
  it('renders label and input', () => {
    const wrapper = mount(InputField, {
      props: { label: 'Test Label', modelValue: null },
    })
    expect(wrapper.text()).toContain('Test Label')
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('displays error message when error prop is set', () => {
    const wrapper = mount(InputField, {
      props: { label: 'Test', modelValue: null, error: 'Erro de validação' },
    })
    expect(wrapper.text()).toContain('Erro de validação')
  })
})
