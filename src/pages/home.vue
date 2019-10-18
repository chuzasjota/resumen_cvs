<template>
  <section class="section">
    <h3 class="title">Choose a template</h3>
    <div class="columns is-multiline is-mobile">
      <div class="column is-12-mobile is-3-tablet is-3-desktop">
        <router-link v-bind:to="'/resume/cool'">
          <div class="card">
            <div class="card-content">
              <p class="title">
                <img src="../assets/preview/resume-cool.png" />
              </p>
              <p class="subtitle">
                Resume Cool
              </p>
            </div>
          </div>
        </router-link>
      </div>
      <div class="column is-12-mobile is-3-tablet is-3-desktop">
        <router-link v-bind:to="'/resume/creative'">
          <div class="card">
            <div class="card-content">
              <p class="title">
                <img src="../assets/preview/resume-creative.png" />
              </p>
              <p class="subtitle">
                Resume Creative
              </p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home"
};
</script>
