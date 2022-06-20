import Vue from 'vue'

export default {
  namespaced: true,
  modules: {},
  state: {
    account: {},
    accounts: []
  },
  actions: {
    createAccount({commit, dispatch}, data) {
      this.$axios.post(process.env.VUE_APP_API + '/account/create/', data)
        .then((response) => {
          commit('setAccount', response.data);
          commit('setAccounts', [response.data]) // must be removed after the list account is ready
        })
        .catch((error) => {
          Vue.$log.info(error)
          dispatch('error/addError', error, {root: true})
        })
    },
    loadAccountByUserId({commit, dispatch}, id) {
      this.$axios.get(process.env.VUE_APP_API + '/account/get-by-user/' + id)
        .then((response) => {
          commit('setAccount', response.data)
        })
        .catch((error) => {
          Vue.$log.info(error)
          dispatch('error/addError', error, {root: true})
          dispatch('createAccount', {
            name: 'account',
            userid: id,
          })
        })
    }
  },
  mutations: {
      setAccount(state, account) {
        state.account = account;
      },
      setAccounts(state, accounts) {
        state.accounts = accounts;
      }
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
