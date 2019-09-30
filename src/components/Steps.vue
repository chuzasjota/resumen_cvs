<template>
    <section>
        <b-steps
            v-model="activeStep"
            :animated="isAnimated"
            :has-navigation="hasNavigation"
            :icon-prev="prevIcon"
            :icon-next="nextIcon">
            <b-step-item label="Basics" :clickable="isStepsClickable">
              <schema-form :schema="schemaBasic" v-model="formBasic" />
            </b-step-item>

            <b-step-item label="Work" :clickable="isStepsClickable" :type="{'is-success': isProfileSuccess}">
              <schema-form :schema="schemaWork" v-model="formWork" @submit="submit()" />
            </b-step-item>

            <b-step-item label="Education" :clickable="isStepsClickable" disabled>
              <schema-form :schema="schemaEducation" v-model="formEducation" @submit="submit()" />
            </b-step-item>
        </b-steps>
    </section>
</template>
<script>
  import {SchemaForm} from 'vue-json-schema-form'
  import schemaBasic from '../schemas/basics.json'
  import schemaWork from '../schemas/work.json'
  import schemaEducation from '../schemas/education.json'
  
  export default {
    name: "Steps",
    components:{
      SchemaForm
    },
    data() {
        return {
          activeStep: 0,
          isAnimated: true,
          hasNavigation: true,
          prevIcon: 'chevron-left',
          nextIcon: 'chevron-right',
          isStepsClickable: false,
          isProfileSuccess: false,
          schemaBasic: schemaBasic,
          schemaWork: schemaWork,
          schemaEducation: schemaEducation,
          formBasic: {},
          formWork: {},
          formEducation: {}
        }
    },
    methods: {
      submit() {
        alert(JSON.stringify(this.formBasic, null, 2))
        alert(JSON.stringify(this.formWork, null, 2))
        alert(JSON.stringify(this.formEducation, null, 2))
      }
    }
  }
</script>