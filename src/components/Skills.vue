<template>
  <div>
    <h1 class="title has-text-centered">Skills</h1>
    <div class="columns is-multiline is-mobile box">
      <div class="column is-12-mobile is-6-tablet is-6-desktop">
        <b-collapse class="card" aria-id="contentIdForA11y3">
          <div
            slot="trigger"
            slot-scope="props"
            class="card-header"
            role="button"
            aria-controls="contentIdForA11y3"
          >
            <p class="card-header-title">
              {{ SkillTitle }}
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
                <div
                  class="column is-12-mobile is-two-fifths-tablet is-two-fifths-desktop"
                >
                  <b-field label="Skill">
                    <b-input placeholder="Javascript" v-model="SkillTitle">
                    </b-input>
                  </b-field>
                </div>
                <div class="column is-12-mobile">
                  <b-field label="Level">
                    <b-slider
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
          </div>
        </b-collapse>
      </div>
      <div class="column is-12-mobile is-12-tablet is-12-desktop">
        <b-button type="is-danger" icon-left="fas fa-plus">
          Add new
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills"
};
</script>
