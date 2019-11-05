import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

import App from "./App.vue";
import router from "./router";

Vue.use(Buefy, {
  defaultIconPack: "fas"
});

Vue.use(require("vue-moment"));

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
