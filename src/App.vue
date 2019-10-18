<template>
  <div id="app">
    <section class="section">
      <div class="container has-text-centered">
        <img alt="Multiplica logo" src="./assets/logo.svg" class="logo" />
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

<style scoped>
.logo {
  height: 30%;
  width: 40%;
}
</style>
