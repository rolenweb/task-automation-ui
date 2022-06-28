<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    </base-header>
    <card>
      <b-form @submit.prevent="createExtractorHandler">
        <h6 class="heading-small text-muted mb-4">Extractor information</h6>

        <div class="pl-lg-4">
          <b-row>
            <b-col lg="6">
              <base-input
                type="text"
                label="Extractor name"
                placeholder="Extractor name"
                v-model="extractor.name"
              >
              </base-input>
            </b-col>

          </b-row>
          <b-row v-for="(field, index) in extractor.fields" :key="index">
            <b-col lg="6">
              <base-input
                type="text"
                label="Field name"
                placeholder="Field name"
                v-model="field.name"
              >
              </base-input>
            </b-col>
            <b-col lg="6">
              <base-input
                type="text"
                label="Field value"
                placeholder="Field value"
                v-model="field.value"
              >
              </base-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col lg="12 d-flex flex-row-reverse">
              <button class="btn btn-info" @click="addFieldHandler">Add field</button>
            </b-col>
          </b-row>
          <hr>
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
  name: "ExtractorCreate",
  data() {
    return {
      extractor: {
        name: null,
        fields: [
          {
            name: '',
            value: ''
          }
        ]
      }
    };
  },
  computed: {
  //  ...mapGetters('auth', ['user']),
  },
  methods: {
    //...mapActions('account',['createAccount']),
    createExtractorHandler() {
      this.$log.info(this.extractor);
    },
    addFieldHandler() {
      this.extractor.fields.push({
        name: '',
        value: ''
      });
    }
  }
}
</script>

<style scoped>

</style>
