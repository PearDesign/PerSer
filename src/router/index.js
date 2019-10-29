import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Intro from "../views/Intro.vue";
import Tour from "../views/Tour.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard/",
    name: "home",
    component: Dashboard
  },
  {
    path: "/intro/",
    name: "intro",
    component: Intro
  },
  {
    path: "/tour/",
    name: "tour",
    component: Tour
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
