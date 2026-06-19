<script setup lang="ts">
const props = defineProps<{
  label: string
  modelValue: string | number | null
  error?: string
  integer?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

function onInput(event: Event) {
  const input = event.target as HTMLInputElement
  const value = props.integer
    ? input.value.replace(/[^0-9]/g, '')
    : input.value.replace(/[^0-9,]/g, '')
  input.value = value
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="input-field">
    <label>{{ label }}</label>
    <input
      :value="modelValue === null ? '' : modelValue"
      :class="{ error: !!error }"
      type="text"
      :inputmode="integer ? 'numeric' : 'decimal'"
      :placeholder="integer ? '0' : '0,00'"
      @input="onInput"
    />
    <span v-if="error" class="error-text">{{ error }}</span>
  </div>
</template>

<style scoped>
.input-field {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

label {
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-weight: 500;
}

input {
  padding: 0.6rem 0.75rem;
  border: 2px solid var(--border-color);
  border-radius: 6px;
  font-size: 1rem;
  background: #ffffff;
  transition: border-color 0.2s;
}

input:focus {
  outline: none;
  border-color: var(--input-focus-border);
}

input.error {
  border-color: var(--error-color);
}

.error-text {
  font-size: 0.75rem;
  color: var(--error-color);
}
</style>
