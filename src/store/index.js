import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      count: 0,
      furkan: 'deneme12'
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
});

export default store;