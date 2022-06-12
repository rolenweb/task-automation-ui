import Vue from 'vue'

export async function logout() {
    await Vue.$keycloak.logout();
}

export async function loadUserInfo() {
  return await Vue.$keycloak.loadUserInfo();
}
