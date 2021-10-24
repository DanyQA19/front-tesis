import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
import Home from "../views/Home.vue";
import Incidencia from "../components/Incidencia.vue";
import Login from "../components/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/incidencia",
    name: "incidencia",
    component: Incidencia,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
