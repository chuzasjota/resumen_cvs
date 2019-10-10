<template>
  <div>
    <h1 class="title has-text-centered">Social Links</h1>
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
              {{ SocialTitle }}
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
                  <b-field label="Name">
                    <b-input placeholder="Twitter" v-model="SocialTitle">
                    </b-input>
                  </b-field>
                </div>
                <div class="column is-12-mobile is-half-tablet is-half-desktop">
                  <b-field label="Link">
                    <b-input placeholder="www.twitter.com"></b-input>
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
  name: "Social"
};
</script>
