export default {
  namespaced: true,
  modules: {},
  state: {
    task: {},
    tasks: []
  },
  getters: {
    task(state) {
      return state.task;
    },
    tasks(state) {
      return state.tasks;
    }
  }
}
