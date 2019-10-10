<template>
  <div>
    <h1 class="title has-text-centered">Personal Details</h1>
    <div class="columns is-multiline is-mobile box">
      <div class="column is-12-mobile is-3-tablet is-3-desktop">
        <b-field label="Full Name">
          <b-input placeholder="John Doe"></b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-3-tablet is-3-desktop">
        <b-field label="Email">
          <b-input placeholder="john@gmail.com"></b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-3-tablet is-3-desktop">
        <b-field label="Job Title">
          <b-input placeholder="Developer"></b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-3-tablet is-3-desktop">
        <b-field label="Image">
          <b-upload v-model="file">
            <a class="button is-primary">
              <b-icon icon="upload"></b-icon>
              <span>Click to upload Image</span>
            </a>
          </b-upload>
          <span class="file-name" v-if="file">
            {{ file.name }}
          </span>
        </b-field>
      </div>
      <div class="column is-12-mobile is-3-tablet is-3-desktop">
        <b-field label="Phone">
          <b-input placeholder="55 64 92 42"></b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-3-tablet is-3-desktop">
        <b-field label="Date of Birth">
          <b-datepicker
            placeholder="Click to select..."
            icon="far fa-calendar-alt"
          >
          </b-datepicker>
        </b-field>
      </div>
      <div class="column is-12-mobile is-3-tablet is-3-desktop">
        <b-field label="Nationality">
          <b-input placeholder="Mexicana"></b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-3-tablet is-3-desktop">
        <b-field label="website">
          <b-input placeholder="www.google.com"></b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-12-tablet is-12-desktop">
        <h3>Location</h3>
      </div>
      <div class="column is-12-mobile is-3-tablet is-3-desktop">
        <b-field label="Country">
          <b-input placeholder="México"></b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-3-tablet is-3-desktop">
        <b-field label="City">
          <b-input placeholder="CDMX"></b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-3-tablet is-3-desktop">
        <b-field label="Address">
          <b-input placeholder="Cll 4 prueba"></b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-3-tablet is-3-desktop">
        <b-field label="Postal Code">
          <b-input placeholder="024532"></b-input>
        </b-field>
      </div>
      <div class="column is-12-mobile is-12-tablet is-12-desktop">
        <b-field label="Summary">
          <b-input maxlength="200" type="textarea" placeholder="Text">
          </b-input>
        </b-field>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Basics"
};
</script>
