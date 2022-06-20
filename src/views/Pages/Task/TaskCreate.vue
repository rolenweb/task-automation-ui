<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    </base-header>
    <card>
      <b-form @submit.prevent="createTaskHandler">
        <h6 class="heading-small text-muted mb-4">Task information</h6>

        <div class="pl-lg-4">
          <b-row>
            <b-col lg="6">
              <base-input
                type="text"
                label="Task name"
                placeholder="Task name"
                v-model="task.name"
              >
              </base-input>
            </b-col>
            <b-col lg="6">
              <base-input
                type="text"
                label="Account"
                v-model="task.accountId"
              >
              </base-input>
            </b-col>

          </b-row>
          <b-row>
            <b-col lg="12">
              <button type="submit" class="btn btn-info">Save</button>
            </b-col>
          </b-row>
        </div>
        <hr class="my-4">

      </b-form>
    </card>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "TaskCreate",
  data() {
    return {
      task: {
        name: null,
        details: {},
        account: {},
      }
    };
  },
  computed: {
    ...mapGetters('auth', ['user']),
  },
  methods: {
    //...mapActions('account',['createAccount']),
    createTaskHandler() {
      this.$log.info('create task')

    }
  }
}
</script>

<style scoped>

</style>
