import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'

export enum ACTIONS {
  TOGGLE_NIGHT_MODE = 'TOGGLE_NIGHT_MODE'
}

export enum MUTATIONS {
  TOGGLE_NIGHT_MODE = 'TOGGLE_NIGHT_MODE'
}

// define your typings for the store state
export interface State {
  nightMode: boolean
}

// define injection key
// eslint-disable-next-line symbol-description
export const key: InjectionKey<Store<State>> = Symbol()

export default createStore<State>({
  state: {
    nightMode: false
  },
  mutations: {
    [MUTATIONS.TOGGLE_NIGHT_MODE]: (state, newNightModeValue) => {
      state.nightMode = newNightModeValue
    }
  },
  actions: {
    [ACTIONS.TOGGLE_NIGHT_MODE]: ({ commit, state }) => {
      commit(MUTATIONS.TOGGLE_NIGHT_MODE, !state.nightMode)
    }
  },
  modules: {
  }
})

// define your own `useStore` composition function
export function useStore (): Store<State> {
  return baseUseStore(key)
}
