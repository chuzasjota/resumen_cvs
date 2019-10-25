<template>
  <div id="app">
    <section class="navbar has-shadow">
      <div class="container container--header has-text-centered">
        <figure class="image">
          <img alt="Multiplica logo" src="./assets/logo.svg" class="logo" />
        </figure>
        <h1 class="title">Cv's creation</h1>
      </div>
    </section>
    <section>
      <router-view></router-view>
    </section>
    <footer class="section">
      <div class="container has-text-centered">
        <p>
          Footer CV multiplica
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #ef540e;
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "white": (
    $white,
    $black
  ),
  "black": (
    $black,
    $white
  ),
  "light": (
    $light,
    $light-invert
  ),
  "dark": (
    $dark,
    $dark-invert
  ),
  "primary": (
    $primary,
    $primary-invert
  ),
  "info": (
    $info,
    $info-invert
  ),
  "success": (
    $success,
    $success-invert
  ),
  "warning": (
    $warning,
    $warning-invert
  ),
  "danger": (
    $danger,
    $danger-invert
  ),
  "twitter": (
    $twitter,
    $twitter-invert
  )
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

$bg-color: #fafafa;
$orange: #ef540e;
#app {
  background-color: $bg-color;
}
.navbar {
  margin-bottom: 2rem;
}
.container--header {
  padding: 1rem;
}
.logo {
  height: 30px;
  text-align: center;
  margin-top: 0.2rem;
  width: 300px;
}
.title {
  color: $orange;
}
.image {
  margin-right: 1rem;
}
</style>
