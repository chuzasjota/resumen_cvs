<template>
  <div>
    <div class="columns is-multiline is-mobile box">
      <div class="column is-12-mobile is-12-tablet is-12-desktop">
        <h3 class="subtitle orange">Works</h3>
        <div class="columns is-multiline is-mobile">
          <div class="column is-12-mobile is-6-tablet is-6-desktop">
            <div class="columns is-multiline is-mobile">
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
              <div class="column is-12-mobile is-half-tablet is-half-desktop">
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
              <div
                v-if="edit == false"
                class="column is-12-mobile is-12-tablet is-12-desktop"
              >
                <b-button
                  @click="addWork"
                  type="is-info"
                  icon-left="fas fa-plus"
                >
                  Add new work
                </b-button>
              </div>
              <div
                v-if="edit == true"
                class="column is-12-mobile is-12-tablet is-12-desktop"
              >
                <b-button
                  @click="update()"
                  type="is-info"
                  icon-left="fas fa-plus"
                >
                  Update Work
                </b-button>
              </div>
            </div>
          </div>
          <div class="column is-12-mobile is-6-tablet is-6-desktop">
            <div v-for="(work, index) in formData.works" v-bind:key="index">
              <section>
                <b-collapse class="card" aria-id="contentIdForA11y3">
                  <div
                    slot="trigger"
                    slot-scope="props"
                    class="card-header"
                    role="button"
                    aria-controls="contentIdForA11y3"
                  >
                    <p class="card-header-title">
                      {{ work.jobTitle }} at {{ work.employer }} <br />
                      {{ work.startDate }} - {{ work.endDate }}
                    </p>
                    <a class="card-header-icon">
                      <b-icon
                        :icon="
                          props.open ? 'fas fa-angle-down' : 'fas fa-angle-up'
                        "
                      >
                      </b-icon>
                    </a>
                  </div>
                  <div class="card-content">
                    <div class="content">
                      {{ work.city }}
                      {{ work.desc }}
                    </div>
                  </div>
                  <footer class="card-footer">
                    <a class="card-footer-item">
                      <b-button
                        @click="editWork(index)"
                        icon-left="far fa-edit"
                        size="is-small"
                      >
                      </b-button>
                    </a>
                    <a class="card-footer-item">
                      <b-button
                        @click="deleteWork(index)"
                        icon-left="fas fa-trash"
                        size="is-small"
                      >
                      </b-button>
                    </a>
                  </footer>
                </b-collapse>
              </section>
            </div>
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
  data() {
    return {
      edit: false,
      idWork: 0,
      works: this.formData.works
    };
  },
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
    editWork(index) {
      this.idWork = index;
      this.formData.works.jobTitle = this.formData.works[this.idWork].jobTitle;
      this.formData.works.employer = this.formData.works[this.idWork].employer;
      this.formData.works.city = this.formData.works[this.idWork].city;
      this.formData.works.startDate = this.formData.works[
        this.idWork
      ].startDate;
      this.formData.works.endDate = this.formData.works[this.idWork].endDate;
      this.formData.works.desc = this.formData.works[this.idWork].desc;
      this.edit = true;
    },
    update() {
      this.formData.works[this.idWork].jobTitle = this.formData.works.jobTitle;
      this.formData.works[this.idWork].employer = this.formData.works.employer;
      this.formData.works[this.idWork].city = this.formData.works.city;
      this.formData.works[
        this.idWork
      ].startDate = this.formData.works.startDate;
      this.formData.works[this.idWork].endDate = this.formData.works.endDate;
      this.formData.works[this.idWork].desc = this.formData.works.desc;
      this.formData.works.jobTitle = "";
      this.formData.works.employer = "";
      this.formData.works.city = "";
      this.formData.works.startDate = [];
      this.formData.works.endDate = [];
      this.formData.works.desc = "";
      this.edit = false;
    },
    deleteWork(index) {
      this.formData.works.splice(index, 1);
    }
  }
};
</script>
<style lang="scss">
.card {
  margin-bottom: 1rem;
}
</style>
