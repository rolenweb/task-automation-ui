<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <b-container fluid class="d-flex align-items-center justify-content-end">
        <router-link to="/account/create" class="btn btn-info">Create account</router-link>
      </b-container>
    </base-header>
    <b-container fluid class="mt--7">
      <b-row>
        <b-col>
          <light-table/>
        </b-col>
      </b-row>
      <div class="mt-5"></div>
    </b-container>
  </div>
</template>

<script>
import LightTable from "../../Tables/RegularTables/LightTable";

export default {
  name: "AccountList",
  components: {LightTable},
  methods: {

  }
}
</script>

<style scoped>

</style>
