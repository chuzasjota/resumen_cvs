<template>
  <div>
    <div class="columns is-multiline is-mobile box">
      <div class="column is-12-mobile is-12-tablet is-12-desktop">
        <h3 class="subtitle orange">Educations</h3>
      </div>
      <div
        v-for="(education, index) in formData.educations"
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
              {{
                education.educationTitle === ""
                  ? "No title"
                  : education.educationTitle
              }}
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
                      v-model="education.educationTitle"
                      name="educationTitlte"
                      placeholder="School"
                    >
                    </b-input>
                  </b-field>
                </div>
                <div class="column is-12-mobile is-half-tablet is-half-desktop">
                  <b-field>
                    <b-input
                      v-model="education.degree"
                      name="degree"
                      placeholder="Degree"
                    >
                    </b-input>
                  </b-field>
                </div>
                <div class="column is-12-mobile is-half-tablet is-half-desktop">
                  <b-field>
                    <b-input
                      v-model="education.city"
                      name="city"
                      placeholder="City"
                    >
                    </b-input>
                  </b-field>
                </div>
                <div class="column is-12-mobile is-half-tablet is-half-desktop">
                  <b-field>
                    <b-datepicker
                      v-model="education.startDate"
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
                      v-model="education.endDate"
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
                      v-model="education.desc"
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
                @click="deleteEducation(index)"
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
        <b-button @click="addEducation" type="is-info" icon-left="fas fa-plus">
          Add new education
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Education",
  props: {
    formData: {}
  },
  methods: {
    addEducation: function() {
      this.formData.educations.push({
        educationTitle: "",
        degree: "",
        startDate: [],
        endDate: [],
        city: "",
        desc: ""
      });
    },
    deleteEducation: function(index) {
      this.formData.educations.splice(index, 1);
    }
  }
};
</script>
