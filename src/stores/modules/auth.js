import Vue from 'vue'
import { loadUserInfo, logout} from "@/plugins/keycloak-util";

export default {
    namespaced: true,
    modules: {},
    state: {
        user: {},
    },
    actions: {
        loadUserInfo({commit}) {
          loadUserInfo().then((response) => {
            commit('setUser', response)
          }).catch((error) => {
            Vue.$log.error(error);
            commit('setError', error, true);
          })
        },
        logout() {
          logout();
        },
        clearError({commit}) {
            commit('setError', {}, true);
        },
        clear({commit}) {
            commit('setUser', {})
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        }
    },
    getters: {
        user(state) {
            return state.user;
        }
    }
}
