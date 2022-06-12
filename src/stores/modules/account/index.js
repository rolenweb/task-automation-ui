export default {
  namespaced: true,
  modules: {},
  state: {
    account: {},
    accounts: []
  },
  getters: {
    account(state) {
      return state.account;
    },
    accounts(state) {
      return state.accounts;
    }
  }
}
