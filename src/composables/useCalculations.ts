import { ref, computed } from 'vue'

export function useCalculations() {
  const amountPaid = ref<number | null>(null)
  const coinsReceived = ref<number | null>(null)
  const serviceValue = ref<number | null>(null)

  const costPerCoin = computed(() => {
    if (amountPaid.value === null || coinsReceived.value === null) return null
    if (coinsReceived.value === 0) return null
    return amountPaid.value / coinsReceived.value
  })

  const activityCost = computed(() => {
    if (costPerCoin.value === null || serviceValue.value === null) return null
    return serviceValue.value * costPerCoin.value
  })

  function reset() {
    amountPaid.value = null
    coinsReceived.value = null
    serviceValue.value = null
  }

  function setAmountPaid(value: string) {
    const parsed = parseFloat(value.replace(',', '.'))
    amountPaid.value = isNaN(parsed) || parsed < 0 ? null : parsed
  }

  function setCoinsReceived(value: string) {
    const parsed = parseInt(value, 10)
    coinsReceived.value = isNaN(parsed) || parsed <= 0 ? null : parsed
  }

  function setServiceValue(value: string) {
    const parsed = parseInt(value, 10)
    serviceValue.value = isNaN(parsed) || parsed < 0 ? null : parsed
  }

  return {
    amountPaid,
    coinsReceived,
    serviceValue,
    costPerCoin,
    activityCost,
    reset,
    setAmountPaid,
    setCoinsReceived,
    setServiceValue,
  }
}
