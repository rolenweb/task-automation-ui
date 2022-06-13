<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    </base-header>
    <card>
      <b-form @submit.prevent="createAccount">
        <h6 class="heading-small text-muted mb-4">Account information</h6>

        <div class="pl-lg-4">
          <b-row>
            <b-col lg="6">
              <base-input
                type="text"
                label="Account name"
                placeholder="Account name"
                v-model="account.name"
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
export default {
  name: "AccountCreate",
  data() {
    return {
      account: {
        name: null,
      }
    };
  },
  methods: {
    createAccount() {
      this.$log.info('')
    }
  }
}
</script>

<style scoped>

</style>
