<template>
  <section class="section">
    <h1>Resume Schem Form</h1>
    <div class="container">
      <div class="columns">
        <div class="column">
          <schema-form :schema="schema" v-model="formData" @submit="submit()" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import {SchemaForm} from 'vue-json-schema-form'
import schema from '../schemas/schema.json'

export default {
  name: "Form",
  components: {
    SchemaForm
  },
  data() {
    return {
      schema: schema,
      formData: {}
    };
  },
  methods: {
    submit() {
      console.log(JSON.stringify(this.formData, null, 2))
      // do things with the validated submission (this.formData)
    }
  }
}
</script>