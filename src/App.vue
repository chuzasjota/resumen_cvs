<template>
  <div id="app">
    <!-- <Form /> -->
    <Steps />
  </div>
</template>

<script>
//import Form from './components/Form.vue'
import Steps from './components/Steps.vue'

export default {
  name: 'app',
  components: {
    //Form
    Steps
  }
}
</script>
<style lang="scss">
  // Import Bulma's core
  @import "~bulma/sass/utilities/_all";

  // Import Bulma and Buefy styles
  @import "~bulma";
  @import "~buefy/src/scss/buefy";

</style>