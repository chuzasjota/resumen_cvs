<template>
  <div>
    <div class="columns is-multiline is-mobile box">
      <div class="column is-12-mobile is-12-tablet is-12-desktop">
        <h3 class="subtitle orange">Links</h3>
      </div>
      <div
        v-for="(social, index) in formData.socials"
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
              {{ social.socialTitle === "" ? "No title" : social.socialTitle }}
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
                  <b-field>
                    <b-input
                      v-model="social.socialTitle"
                      name="socialTitle"
                      placeholder="Name"
                    >
                    </b-input>
                  </b-field>
                </div>
                <div class="column is-12-mobile is-half-tablet is-half-desktop">
                  <b-field>
                    <b-input
                      v-model="social.link"
                      name="link"
                      placeholder="Link"
                    >
                    </b-input>
                  </b-field>
                </div>
              </div>
            </div>
            <div class="column is-12-mobile is-12-tablet is-12-desktop">
              <b-button
                @click="deleteSocial(index)"
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
        <b-button @click="addSocial" type="is-info" icon-left="fas fa-plus">
          Add new social
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Social",
  props: {
    formData: {}
  },
  methods: {
    addSocial: function() {
      this.formData.socials.push({
        socialTitle: "",
        link: ""
      });
    },
    deleteSocial: function(index) {
      this.formData.socials.splice(index, 1);
    }
  }
};
</script>
