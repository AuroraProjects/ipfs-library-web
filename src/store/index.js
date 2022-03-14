import { createStore } from 'vuex'

export default createStore({
  state: {
    darkTheme: ''
  },
  getters: {
  },
  mutations: {
    setTheme(state) {
      state.darkTheme = localStorage.getItem('theme')
    },
    saveTheme(state, data) {
      state.darkTheme = data
      localStorage.theme = data
      if (data === 'dark') {
        document.getElementById('body').classList.add('dark')
      } else {
        document.getElementById('body').classList.remove('dark')
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
