import page from '@freshinup/core-ui/src/store/modules/page'

export default (initialState = {}) => {
  let store = page(initialState)
  return {
    namespaced: true,
    state: {
      title: '',
      ...store.state
    },
    mutations: {
      title (state, value) {
        state.title = value
      },
      ...store.mutations
    },
    actions: {
      setTitle ({ commit }, value) {
        commit('title', value)
      },
      ...store.actions
    },
    getters: {
      title: state => state.title,
      ...store.getters
    }
  }
}
