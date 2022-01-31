import { computed, ref, watchEffect } from 'vue'

interface State {
  enabled: boolean
  lastChanged: string
}
const STORAGE_KEY = 'nightMode'

const nightModeState = ref({
  enabled: JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'false'),
  lastChanged: new Date().toISOString()
})

// Keep track of state history
const history: State[] = []
watchEffect(() => {
  history.push(nightModeState.value)
  console.log(JSON.stringify(nightModeState.value))
})

// mutations
function toggleNightMode (): void {
  const state = nightModeState.value
  nightModeState.value = {
    ...state,
    enabled: !state.enabled,
    lastChanged: new Date().toISOString()
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(!state.enabled))
}

// actions

// getters
const getNightModeEnabled = computed(() => nightModeState.value.enabled)
const getNightModeLastChanged = computed(() => nightModeState.value.lastChanged)

export {
  getNightModeEnabled,
  getNightModeLastChanged,
  toggleNightMode
}
