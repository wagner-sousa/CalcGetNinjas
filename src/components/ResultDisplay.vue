<script setup lang="ts">
defineProps<{
  label: string
  value: string | null
}>()
</script>

<template>
  <div class="result-display">
    <label>{{ label }}</label>
    <input
      readonly
      :class="{ empty: value === null }"
      :value="value ?? '--'"
      tabindex="-1"
    />
  </div>
</template>

<style scoped>
.result-display {
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
  font-weight: 600;
  color: var(--text-primary);
  background: #f5f5f5;
  cursor: default;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  height: 2.6rem;
}

input.empty {
  color: var(--text-secondary);
  font-weight: 400;
}
</style>
