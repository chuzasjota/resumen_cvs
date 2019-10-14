<template>
  <div>
    <h1 class="title has-text-centered">Languages</h1>
    <div class="columns is-multiline is-mobile box">
      <div
        v-for="(language, index) in formData.languages"
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
              {{ language.langTitle }}
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
                <div class="column is-12-mobile is-half-tablet is-half-desktop">
                  <b-field label="Language">
                    <b-input
                      v-model="language.langTitle"
                      name="langTitle"
                      placeholder="English"
                    >
                    </b-input>
                  </b-field>
                </div>
                <div class="column is-12-mobile is-half-tablet is-half-desktop">
                  <b-field label="Level">
                    <b-select
                      v-model="language.level"
                      name="langTitle"
                      placeholder="Select a level"
                      expanded
                    >
                      <option value="native-speaker">Native speaker</option>
                      <option value="highly-proficient">
                        Highly proficient
                      </option>
                      <option value="very-good">Very good command</option>
                    </b-select>
                  </b-field>
                </div>
              </div>
            </div>
            <div class="column is-12-mobile is-12-tablet is-12-desktop">
              <b-button
                @click="deleteLang(index)"
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
        <b-button @click="addLang" type="is-info" icon-left="fas fa-plus">
          Add new language
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Languages",
  props: {
    formData: {}
  },
  methods: {
    addLang: function() {
      this.formData.languages.push({
        langTitle: "",
        level: ""
      });
    },
    deleteLang: function(index) {
      this.formData.languages.splice(index, 1);
    }
  }
};
</script>
