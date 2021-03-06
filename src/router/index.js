import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  
  {
    path: "/",
    name: "main",
    component: () => import("../views/Main"),
  },
  {
    path: "/index",
    name: "index",
    component: () => import("../views/index"),
  },
  
];

const router = new VueRouter({
  routes,
});

export default router;
