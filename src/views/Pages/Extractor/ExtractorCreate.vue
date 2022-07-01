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
          <h6 class="heading-small text-muted mb-4">Spider</h6>
          <b-row v-for="(field, index) in extractor.spider.fields" :key="field.id">
            <b-col lg="5">
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
            <b-col lg="1" class="d-flex align-items-center">
              <button class="btn btn-danger" @click="removeFieldHandler('spider', field.id)"><i class="ni ni-fat-delete"></i></button>
            </b-col>
          </b-row>
          <b-row>
            <b-col lg="12 d-flex flex-row-reverse">
              <button class="btn btn-info" @click="addFieldHandler('spider')">Add field</button>
            </b-col>
          </b-row>
          <h6 class="heading-small text-muted mb-4">Scraper</h6>
          <b-row v-for="(field, index) in extractor.scraper.fields" :key="field.id">
            <b-col lg="5">
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
            <b-col lg="1" class="d-flex align-items-center">
              <button class="btn btn-danger" @click="removeFieldHandler('scraper', field.id)"><i class="ni ni-fat-delete"></i></button>
            </b-col>
          </b-row>
          <b-row>
            <b-col lg="12 d-flex flex-row-reverse">
              <button class="btn btn-info" @click="addFieldHandler('scraper')">Add field</button>
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
import { v4 as uuidv4 } from 'uuid';

export default {
  name: "ExtractorCreate",
  data() {
    return {
      extractor: {
        name: null,
        spider: {
          fields: [
            {
              id: uuidv4(),
              name: '',
              value: ''
            }
          ]
        },
        scraper: {
          fields: [
            {
              id: uuidv4(),
              name: '',
              value: ''
            }
          ]
        }
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
    addFieldHandler(type) {
      this.extractor[type].fields.push({
        id: uuidv4(),
        name: '',
        value: ''
      });
    },
    removeFieldHandler(type, id) {
      this.$log.info('remove field ' + id);
      this.extractor[type].fields = this.extractor[type].fields.filter(field => field.id !== id);
    }
  }
}
</script>

<style scoped>

</style>
