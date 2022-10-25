import { auth } from "@/main";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.path === "/login") return next();

  const user = localStorage.getItem("user");

  if (!user) {
    router.push("/login");
    return;
  }

  const res = await auth(user);

  if (!res) {
    router.push("/login");
  } else {
    next();
  }
});

export default router;
