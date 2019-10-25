<template>
  <div>
    <div class="columns is-multiline is-mobile box">
      <div class="column is-12-mobile is-12-tablet is-12-desktop">
        <h3 class="subtitle orange">Works</h3>
      </div>
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
              {{ work.jobTitle === "" ? "No title" : work.jobTitle }}
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
                      v-model="work.jobTitle"
                      name="jobTitle"
                      placeholder="Job Title"
                    >
                    </b-input>
                  </b-field>
                </div>
                <div class="column is-12-mobile is-half-tablet is-half-desktop">
                  <b-field>
                    <b-input
                      v-model="work.employer"
                      name="employer"
                      placeholder="Employer"
                    >
                    </b-input>
                  </b-field>
                </div>
                <div class="column is-12-mobile is-half-tablet is-half-desktop">
                  <b-field>
                    <b-input v-model="work.city" name="city" placeholder="City">
                    </b-input>
                  </b-field>
                </div>
                <div class="column is-12-mobile is-half-tablet is-half-desktop">
                  <b-field>
                    <b-datepicker
                      v-model="work.startDate"
                      name="startDate"
                      placeholder="Start Date"
                      icon="far fa-calendar-alt"
                    >
                    </b-datepicker>
                  </b-field>
                </div>
                <div class="column is-12-mobile is-half-tablet is-half-desktop">
                  <b-field>
                    <b-datepicker
                      v-model="work.endDate"
                      name="endDate"
                      placeholder="End Date"
                      icon="far fa-calendar-alt"
                    >
                    </b-datepicker>
                  </b-field>
                </div>
                <div class="column is-12-mobile is-12-tablet is-12-desktop">
                  <b-field>
                    <b-input
                      v-model="work.desc"
                      name="desc"
                      maxlength="200"
                      type="textarea"
                      placeholder="Description"
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
