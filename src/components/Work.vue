<template>
  <div>
    <h1 class="title has-text-centered">Works</h1>
    <div class="columns is-multiline is-mobile box">
      <div
        v-for="(work, index) in formData.works"
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
              {{ work.jobTitle }}
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
                  <b-field label="Job Title">
                    <b-input
                      v-model="work.jobTitle"
                      name="jobTitle"
                      placeholder="Web Dev"
                    >
                    </b-input>
                  </b-field>
                </div>
                <div class="column is-12-mobile is-half-tablet is-half-desktop">
                  <b-field label="Employer">
                    <b-input
                      v-model="work.employer"
                      name="employer"
                      placeholder="Multiplica"
                    >
                    </b-input>
                  </b-field>
                </div>
                <div
                  class="column is-12-mobile is-one-quarter-tablet is-one-quarter-desktop"
                >
                  <b-field label="Start Date">
                    <b-datepicker
                      v-model="work.startDate"
                      name="startDate"
                      placeholder="Click to select..."
                      icon="far fa-calendar-alt"
                    >
                    </b-datepicker>
                  </b-field>
                </div>
                <div
                  class="column is-12-mobile is-one-quarter-tablet is-one-quarter-desktop"
                >
                  <b-field label="End Date">
                    <b-datepicker
                      v-model="work.endDate"
                      name="endDate"
                      placeholder="Click to select..."
                      icon="far fa-calendar-alt"
                    >
                    </b-datepicker>
                  </b-field>
                </div>
                <div class="column is-12-mobile is-half-tablet is-half-desktop">
                  <b-field label="City">
                    <b-input v-model="work.city" name="city" placeholder="CDMX">
                    </b-input>
                  </b-field>
                </div>
                <div class="column is-12-mobile is-12-tablet is-12-desktop">
                  <b-field label="Description">
                    <b-input
                      v-model="work.desc"
                      name="desc"
                      maxlength="200"
                      type="textarea"
                    >
                    </b-input>
                  </b-field>
                </div>
              </div>
            </div>
            <div class="column is-12-mobile is-12-tablet is-12-desktop">
              <b-button
                @click="deleteWork(index)"
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
        <b-button @click="addWork" type="is-info" icon-left="fas fa-plus">
          Add new work
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work",
  props: {
    formData: {}
  },
  methods: {
    addWork: function() {
      this.formData.works.push({
        jobTitle: "",
        employer: "",
        startDate: [],
        endDate: [],
        city: "",
        desc: ""
      });
    },
    deleteWork: function(index) {
      this.formData.works.splice(index, 1);
    }
  }
};
</script>
