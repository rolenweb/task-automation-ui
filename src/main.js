import Vue from 'vue';
import '@/plugins/logger'
import KeycloakPlugin from "./plugins/keycloak";
import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App.vue';
// router setup
import router from './routes/router';
// store setup
import store from "./stores/store";


// plugin setup
Vue.use(DashboardPlugin);
Vue.use(KeycloakPlugin)

Vue.$keycloak.init({ onLoad: 'login-required' }).then((auth) => {
  if (!auth) {
    // If a user is not authenticated a page will be reloaded
    window.location.reload();
  } else {
    Vue.$log.info("Authenticated");

    // If a user is authenticated Vue will be initiated
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      render: h => h(App),
      router,
      store
    });
  }

  // App is trying to update the token each 6 sec
  setInterval(() => {
    // If the token expires in during 70 sec the token will be updated
    Vue.$keycloak.updateToken(70).then((refreshed) => {
      if (refreshed) {
        Vue.$log.info('Token refreshed ' + refreshed);
      } else {
        Vue.$log.warn('Token not refreshed, valid for '
          + Math.round(Vue.$keycloak.tokenParsed.exp
            + Vue.$keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
      }
    }).catch(() => {
      Vue.$log.error('Failed to refresh token');
    });
  }, 6000)

}).catch(() => {
  Vue.$log.error("Authenticated Failed");
});

