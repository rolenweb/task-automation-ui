import Vue from 'vue'
import Keycloak from 'keycloak-js'

const initOptions = {
  url: 'http://keycloak:8080/auth',
  realm: 'task-automation',
  clientId: 'task-automation-public',
}

const keycloak = Keycloak(initOptions)

const KeycloakPlugin = {
  install: Vue => {
    Vue.$keycloak = keycloak
  }
}

export default KeycloakPlugin
