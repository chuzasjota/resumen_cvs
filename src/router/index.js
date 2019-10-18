import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/home";
import Form from "@/components/Form";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/resume/:resumeid",
      name: "resume",
      component: Form
    }
  ]
});
