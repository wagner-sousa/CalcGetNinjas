<script setup lang="ts">
import InputField from './InputField.vue'
import ResultDisplay from './ResultDisplay.vue'
import { useCalculations } from '../composables/useCalculations'
import { formatBRL } from '../composables/useFormat'

const {
  amountPaid,
  coinsReceived,
  serviceValue,
  costPerCoin,
  activityCost,
  reset,
  setAmountPaid,
  setCoinsReceived,
  setServiceValue,
} = useCalculations()
</script>

<template>
  <div class="calculator">
    <img src="/logo.png" alt="GetNinjas" class="logo" />
    <div class="row">
      <InputField
        label="Valor Pago nas Moedas (R$)"
        :model-value="amountPaid"
        @update:model-value="setAmountPaid"
      />
      <InputField
        label="Quantidade de Moedas"
        :model-value="coinsReceived"
        integer
        @update:model-value="setCoinsReceived"
      />
      <ResultDisplay
        label="Custo por Moeda (R$)"
        :value="costPerCoin !== null ? formatBRL(costPerCoin) : null"
      />
    </div>
    <div class="row">
      <InputField
        label="Valor do Serviço (moedas)"
        :model-value="serviceValue"
        integer
        @update:model-value="setServiceValue"
      />
      <ResultDisplay
        label="Custo da Atividade (R$)"
        :value="activityCost !== null ? formatBRL(activityCost) : null"
      />
      <button class="limpar" title="Limpar todos os campos" @click="reset">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.logo {
  display: block;
  max-width: 180px;
  height: auto;
  margin: 0 auto 0.5rem;
}

.calculator {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.row {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}

.row > * {
  flex: 1;
  min-width: 0;
}

.limpar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--input-focus-border);
  color: #1a1a1a;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: opacity 0.2s;
  flex: 0 0 auto;
  align-self: flex-end;
  width: 2.6rem;
  height: 2.6rem;
  padding: 0;
}

.limpar:hover {
  opacity: 0.8;
}

.limpar svg {
  width: 1.4rem;
  height: 1.4rem;
  stroke: currentColor;
}

@media (max-width: 500px) {
  .row {
    flex-direction: column;
  }

  .limpar {
    width: 100%;
  }
}
</style>
