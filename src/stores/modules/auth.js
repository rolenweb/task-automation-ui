import Vue from 'vue'
import { loadUserInfo, logout} from "@/plugins/keycloak-util";

export default {
    namespaced: true,
    modules: {},
    state: {
        user: {},
    },
    actions: {
        loadUserInfo({commit, dispatch}) {
          loadUserInfo().then((response) => {
            commit('setUser', response)
          }).catch((error) => {
            Vue.$log.error(error);
            dispatch('error/addError', error, {root: true})
          })
        },
        logout() {
          logout();
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
