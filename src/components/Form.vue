<template>
  <div class="container">
    <section>
      <form>
        <b-steps
          v-model="activeStep"
          :animated="isAnimated"
          :has-navigation="hasNavigation"
        >
          <b-step-item label="Basics" :clickable="isStepsClickable">
            <Basics :formData="formData" />
          </b-step-item>
          <b-step-item label="Work">
            <Work :formData="formData" />
          </b-step-item>
          <b-step-item label="Education" :clickable="isStepsClickable">
            <Education :formData="formData" />
          </b-step-item>
          <b-step-item label="Skills" :clickable="isStepsClickable">
            <Skills :formData="formData" />
          </b-step-item>
          <b-step-item label="Social" :clickable="isStepsClickable">
            <Social :formData="formData" />
          </b-step-item>
          <b-step-item label="Languages" :clickable="isStepsClickable">
            <Languages :formData="formData" />
          </b-step-item>
        </b-steps>
      </form>
    </section>
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

export default {
  name: "Form",
  components: { Basics, Work, Education, Skills, Social, Languages },
  data() {
    return {
      activeStep: 0,
      isAnimated: true,
      hasNavigation: true,
      isStepsClickable: false,
      formData: {
        basics: {
          location: {}
        },
        works: [],
        educations: [],
        skills: [],
        socials: [],
        languages: []
      }
    };
  }
};
</script>
