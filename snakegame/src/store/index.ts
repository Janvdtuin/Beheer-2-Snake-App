import { createStore } from 'vuex'

const state = {
  count: 0
}

const mutations = {
  increment (state: any) {
    state.count++
  },

  decrement (state: any) {
    state.count--
  }
}
export default createStore({
  state,
  mutations
})
