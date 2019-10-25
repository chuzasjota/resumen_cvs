<template>
  <div>
    <div class="columns is-multiline is-mobile box">
      <div class="column is-12-mobile is-12-tablet is-12-desktop">
        <h3 class="subtitle orange">Skills</h3>
      </div>
      <div
        v-for="(skill, index) in formData.skills"
        v-bind:key="index"
        class="column is-12-mobile is-6-tablet is-6-desktop"
      >
        <b-collapse class="card" aria-id="contentIdForA11y3">
          <div
            slot="trigger"
            slot-scope="props"
            class="card-header"
            role="button"
            aria-controls="contentIdForA11y3"
          >
            <p class="card-header-title">
              {{ skill.skillTitle === "" ? "No title" : skill.skillTitle }}
            </p>
            <a class="card-header-icon">
              <b-icon
                :icon="props.open ? 'fas fa-angle-down' : 'fas fa-angle-up'"
              >
              </b-icon>
            </a>
          </div>
          <div class="card-content">
            <div class="content">
              <div class="columns is-multiline is-mobile">
                <div class="column is-12-mobile is-full-tablet is-full-desktop">
                  <b-field>
                    <b-input
                      v-model="skill.skillTitle"
                      name="skillTitle"
                      placeholder="Skill"
                    >
                    </b-input>
                  </b-field>
                </div>
                <div class="column is-12-mobile is-full-tablet is-full-desktop">
                  <b-field>
                    <b-slider
                      v-model="skill.level"
                      name="level"
                      :min="0"
                      :max="4"
                      aria-label="Level"
                      :tooltip="false"
                    >
                      <b-slider-tick :value="0">Novice</b-slider-tick>
                      <b-slider-tick :value="1">Beginner</b-slider-tick>
                      <b-slider-tick :value="2">Skillful</b-slider-tick>
                      <b-slider-tick :value="3">Experienced</b-slider-tick>
                      <b-slider-tick :value="4">Expert</b-slider-tick>
                    </b-slider>
                  </b-field>
                </div>
              </div>
            </div>
            <div class="column is-12-mobile is-12-tablet is-12-desktop">
              <b-button
                @click="deleteSkill(index)"
                type="is-danger"
                icon-left="fas fa-trash"
              >
                Delete
              </b-button>
            </div>
          </div>
        </b-collapse>
      </div>
      <div
        class="column is-12-mobile is-12-tablet is-12-desktop has-text-centered"
      >
        <b-button @click="addSkill" type="is-info" icon-left="fas fa-plus">
          Add new skill
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  props: {
    formData: {}
  },
  methods: {
    addSkill: function() {
      this.formData.skills.push({
        skillTitle: "",
        level: [0]
      });
    },
    deleteSkill: function(index) {
      this.formData.skills.splice(index, 1);
    }
  }
};
</script>
