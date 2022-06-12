<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">

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
  name: "UserList",
  components: {LightTable}
}
</script>

<style scoped>

</style>
