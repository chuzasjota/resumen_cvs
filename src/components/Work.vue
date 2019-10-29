<template>
  <div>
    <div class="columns is-multiline is-mobile box">
      <div class="column is-12-mobile is-12-tablet is-12-desktop">
        <h3 class="subtitle orange">Works</h3>
      </div>
      <div class="column is-12-mobile is-6-tablet is-6-desktop box">
        <div class="column is-12-mobile is-full-tablet is-full-desktop">
          <b-field>
            <b-input
              v-model="formData.works.jobTitle"
              name="jobTitle"
              placeholder="Job Title"
            >
            </b-input>
          </b-field>
        </div>
        <div class="column is-12-mobile is-half-tablet is-half-desktop">
          <b-field>
            <b-input
              v-model="formData.works.employer"
              name="employer"
              placeholder="Employer"
            >
            </b-input>
          </b-field>
        </div>
        <div class="column is-12-mobile is-6-tablet is-6-desktop">
          <b-field>
            <b-input
              v-model="formData.works.city"
              name="city"
              placeholder="City"
            >
            </b-input>
          </b-field>
        </div>
        <div class="column is-12-mobile is-half-tablet is-half-desktop">
          <b-field>
            <b-datepicker
              v-model="formData.works.startDate"
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
              v-model="formData.works.endDate"
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
              v-model="formData.works.desc"
              name="desc"
              maxlength="200"
              type="textarea"
              placeholder="Description"
            >
            </b-input>
          </b-field>
        </div>
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <b-button @click="addWork" type="is-info" icon-left="fas fa-plus">
            Add new work
          </b-button>
        </div>
      </div>
      <div class="column is-12-mobile is-6-tablet is-6-desktop box">
        <div v-for="(work, index) in formData.works" v-bind:key="index">
          <div class="column is-12-mobile is-full-tablet is-full-desktop">
            {{ work.jobTitle }}
            {{ work.employer }}
            {{ work.startDate }}
            {{ work.endDate }}
          </div>
          <div class="column is-12-mobile is-6-tablet is-6-desktop">
            <b-button
              @click="editWork(work)"
              icon-left="far fa-edit"
              size="is-small"
            >
            </b-button>
          </div>
          <div class="column is-12-mobile is-6-tablet is-6-desktop">
            <b-button
              @click="deleteWork(index)"
              icon-left="fas fa-trash"
              size="is-small"
            >
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Work",
  props: ["formData"],
  methods: {
    addWork() {
      this.formData.works.push({
        jobTitle: this.formData.works.jobTitle,
        employer: this.formData.works.employer,
        city: this.formData.works.city,
        startDate: this.formData.works.startDate,
        endDate: this.formData.works.endDate,
        desc: this.formData.works.desc
      });
      this.formData.works.jobTitle = "";
      this.formData.works.employer = "";
      this.formData.works.city = "";
      this.formData.works.startDate = [];
      this.formData.works.endDate = [];
      this.formData.works.desc = "";
    },
    editWork(work) {
      this.formData.works.jobTitle = work.jobTitle;
      this.formData.works.employer = work.employer;
      this.formData.works.city = work.city;
      this.formData.works.startDate = work.startDate;
      this.formData.works.endDate = work.endDate;
      this.formData.works.desc = work.desc;
    },
    deleteWork(index) {
      this.formData.works.splice(index, 1);
    }
  }
};
</script>
