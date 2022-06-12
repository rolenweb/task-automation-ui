export default {
  namespaced: true,
  modules: {},
  state: {
    user: {},
    users: []
  },
  getters: {
    user(state) {
      return state.user;
    },
    users(state) {
      return state.users;
    }
  }
}
