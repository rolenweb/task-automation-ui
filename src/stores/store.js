import _ from "lodash";
import Vue from 'vue';
import Vuex from 'vuex';
import { axios } from '@/plugins/axios'
import auth from "./modules/auth";
import account from "./modules/account";
import task from "./modules/task";
import user from "./modules/user";
import error from "./modules/error";

const axiosPlugin = store => {
  store.$axios = axios
}

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth, account, task, user, error
  },
  actions: {
    setError({dispatch}, error) {
      dispatch('error/addError', error);
    },
    clearError({dispatch}) {
      dispatch('error/clearErrors')
    },
  },
  plugins: [axiosPlugin],
  strict: process.env.NODE_ENV !== 'production'
})
