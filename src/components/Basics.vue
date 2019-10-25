<template>
  <div>
    <div class="columns is-multiline is-mobile box">
      <div class="column is-12-mobile is-12-tablet is-12-desktop">
        <h3 class="subtitle orange">Personal Details</h3>
      </div>
      <div class="column is-12-mobile is-6-tablet is-6-desktop">
        <b-field>
          <b-input
            v-model="formData.basics.name"
            name="name"
            placeholder="Full name"
          >
          </b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-6-tablet is-6-desktop">
        <b-field>
          <b-input
            v-model="formData.basics.email"
            name="email"
            placeholder="Email"
          >
          </b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-6-tablet is-6-desktop">
        <b-field>
          <b-input
            v-model="formData.basics.jobTitle"
            name="jobTitle"
            placeholder="Job Title"
          >
          </b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-6-tablet is-6-desktop">
        <b-field>
          <b-upload v-model="formData.basics.picture" name="picture">
            <a class="button is-primary">
              <b-icon icon="upload"></b-icon>
              <span>Click to upload image</span>
            </a>
          </b-upload>
          <span class="file-name" v-if="formData.basics.picture">
            {{ formData.basics.picture }}
          </span>
        </b-field>
      </div>
      <div class="column is-12-mobile is-6-tablet is-6-desktop">
        <b-field>
          <b-input
            v-model="formData.basics.phone"
            name="phone"
            placeholder="Phone"
          >
          </b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-6-tablet is-6-desktop">
        <b-field>
          <b-datepicker
            v-model="formData.basics.date"
            name="date"
            placeholder="Birthday Date"
            icon="far fa-calendar-alt"
          >
          </b-datepicker>
        </b-field>
      </div>
      <div class="column is-12-mobile is-6-tablet is-6-desktop">
        <b-field>
          <b-input
            v-model="formData.basics.nationality"
            name="nationality"
            placeholder="Nationality"
          >
          </b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-6-tablet is-6-desktop">
        <b-field>
          <b-input
            v-model="formData.basics.website"
            name="website"
            placeholder="WebSite"
          >
          </b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-12-tablet is-12-desktop">
        <b-field>
          <b-input
            v-model="formData.basics.summary"
            maxlength="200"
            type="textarea"
            placeholder="Summary"
          >
          </b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-12-tablet is-12-desktop">
        <h3 class="subtitle orange">Location</h3>
      </div>
      <div class="column is-12-mobile is-6-tablet is-6-desktop">
        <b-field>
          <b-input
            v-model="formData.basics.location.country"
            name="country"
            placeholder="Country"
          >
          </b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-6-tablet is-6-desktop">
        <b-field>
          <b-input
            v-model="formData.basics.location.city"
            name="city"
            placeholder="City"
          >
          </b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-6-tablet is-6-desktop">
        <b-field>
          <b-input
            v-model="formData.basics.location.address"
            name="address"
            placeholder="Address"
          >
          </b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-6-tablet is-6-desktop">
        <b-field>
          <b-input
            v-model="formData.basics.location.postalCode"
            name="postalCode"
            placeholder="Postal Code"
          >
          </b-input>
        </b-field>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Basics",
  props: {
    formData: {}
  }
};
</script>
