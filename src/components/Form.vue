<template>
  <div class="container">
    <div class="columns is-multiline is-mobile">
      <section class="column">
        <form>
          <b-steps
            v-model="activeStep"
            :animated="isAnimated"
            :has-navigation="hasNavigation"
            size="is-medium"
          >
            <b-step-item label="Basics" icon="fas fa-user">
              <Basics :formData="formData" />
            </b-step-item>
            <b-step-item label="Work" icon="fas fa-briefcase">
              <Work :formData="formData" />
            </b-step-item>
            <b-step-item label="Education" icon="fas fa-book">
              <Education :formData="formData" />
            </b-step-item>
            <b-step-item label="Skills" icon="fas fa-toolbox">
              <Skills :formData="formData" />
            </b-step-item>
            <b-step-item label="Social" icon="fas fa-users">
              <Social :formData="formData" />
            </b-step-item>
            <b-step-item label="Languages" icon="fas fa-language">
              <Languages :formData="formData" />
            </b-step-item>
            <template
              v-if="customNavigation"
              slot="navigation"
              slot-scope="{ previous, next }"
            >
              <b-button
                outlined
                type="is-danger"
                icon-pack="fas"
                icon-left="backward"
                :disabled="previous.disabled"
                @click.prevent="previous.action"
              >
                Previous
              </b-button>
              <b-button
                outlined
                type="is-success"
                icon-pack="fas"
                icon-right="forward"
                :disabled="next.disabled"
                @click.prevent="next.action"
              >
                Next
              </b-button>
            </template>
          </b-steps>
        </form>
      </section>
      <!-- <div class="column is-12-mobile is-6-tablet is-6-desktop">
        <div class="page" :id="$route.params.resumeid">
          <div class="page-inner">
            <component :is="$route.params.resumeid" :formData="formData">
            </component>
          </div>
        </div>
      </div> -->
    </div>
    <div>
      {{ formData }}
    </div>
  </div>
</template>

<script>
import Basics from "./Basics.vue";
import Work from "./Work.vue";
import Education from "./Education.vue";
import Skills from "./Skills.vue";
import Social from "./Social.vue";
import Languages from "./Languages.vue";

// import Cool from "../resumes/cool.vue";
// import Creative from "../resumes/creative.vue";

export default {
  name: "Form",
  components: {
    Basics,
    Work,
    Education,
    Skills,
    Social,
    Languages
    // Cool,
    // Creative
  },
  data() {
    return {
      activeStep: 0,
      isAnimated: true,
      hasNavigation: true,
      customNavigation: true,
      formData: {
        basics: {
          location: {}
        },
        works: [
          {
            jobTitle: "",
            employer: "",
            startDate: [],
            endDate: [],
            city: "",
            desc: ""
          }
        ],
        educations: [
          {
            educationTitle: "",
            degree: "",
            startDate: [],
            endDate: [],
            city: "",
            desc: ""
          }
        ],
        skills: [
          {
            skillTitle: "",
            level: ""
          }
        ],
        socials: [
          {
            socialTitle: "",
            link: [0]
          }
        ],
        languages: [
          {
            langTitle: "",
            level: ""
          }
        ]
      }
    };
  }
};
</script>
<style lang="scss">
$orange: #ef540e;
$steps-active-color: $orange;
.orange {
  color: $orange;
}
</style>
