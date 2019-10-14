<template>
  <div>
    <h1 class="title has-text-centered">Personal Details</h1>
    <div class="columns is-multiline is-mobile box">
      <div class="column is-12-mobile is-3-tablet is-3-desktop">
        <b-field label="Full Name">
          <b-input
            v-model="formData.basics.name"
            name="name"
            placeholder="John Doe"
          >
          </b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-3-tablet is-3-desktop">
        <b-field label="Email">
          <b-input
            v-model="formData.basics.email"
            name="email"
            placeholder="john@gmail.com"
          >
          </b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-3-tablet is-3-desktop">
        <b-field label="Job Title">
          <b-input
            v-model="formData.basics.jobTitle"
            name="jobTitle"
            placeholder="Developer"
          >
          </b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-3-tablet is-3-desktop">
        <b-field label="Image">
          <b-upload v-model="formData.basics.picture" name="picture">
            <a class="button is-primary">
              <b-icon icon="upload"></b-icon>
              <span>Click to upload Image</span>
            </a>
          </b-upload>
          <span class="file-name" v-if="formData.basics.picture">
            {{ formData.basics.picture }}
          </span>
        </b-field>
      </div>
      <div class="column is-12-mobile is-3-tablet is-3-desktop">
        <b-field label="Phone">
          <b-input
            v-model="formData.basics.phone"
            name="phone"
            placeholder="55 64 92 42"
          >
          </b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-3-tablet is-3-desktop">
        <b-field label="Date of Birth">
          <b-datepicker
            v-model="formData.basics.date"
            name="date"
            placeholder="Click to select..."
            icon="far fa-calendar-alt"
          >
          </b-datepicker>
        </b-field>
      </div>
      <div class="column is-12-mobile is-3-tablet is-3-desktop">
        <b-field label="Nationality">
          <b-input
            v-model="formData.basics.nationality"
            name="nationality"
            placeholder="Mexicana"
          >
          </b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-3-tablet is-3-desktop">
        <b-field label="website">
          <b-input
            v-model="formData.basics.website"
            name="website"
            placeholder="www.google.com"
          >
          </b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-12-tablet is-12-desktop">
        <h3>Location</h3>
      </div>
      <div class="column is-12-mobile is-3-tablet is-3-desktop">
        <b-field label="Country">
          <b-input
            v-model="formData.basics.location.country"
            name="country"
            placeholder="México"
          >
          </b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-3-tablet is-3-desktop">
        <b-field label="City">
          <b-input
            v-model="formData.basics.location.city"
            name="city"
            placeholder="CDMX"
          >
          </b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-3-tablet is-3-desktop">
        <b-field label="Address">
          <b-input
            v-model="formData.basics.location.address"
            name="address"
            placeholder="Cll 4 prueba"
          >
          </b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-3-tablet is-3-desktop">
        <b-field label="Postal Code">
          <b-input
            v-model="formData.basics.location.postalCode"
            name="postalCode"
            placeholder="024532"
          >
          </b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-12-tablet is-12-desktop">
        <b-field label="Summary">
          <b-input
            v-model="formData.basics.summary"
            maxlength="200"
            type="textarea"
            placeholder="Text"
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
