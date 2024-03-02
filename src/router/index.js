import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "TakyPok", // <-- Find how to insert :userId into page title
    },
  },
  {
    path: "/setting",
    name: "setting",
    component: () => import("../views/SettingView.vue"),
    meta: {
      title: "Setting", // <-- Find how to insert :userId into page title
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
    meta: {
      title: "About Me!", // <-- Find how to insert :userId into page title
    },
  },
  {
    path: "/stat",
    name: "stat",
    component: () => import("../views/StatView.vue"),
    meta: {
      title: "Stat", // <-- Find how to insert :userId into page title
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title =
    toRoute.meta && toRoute.meta.title ? toRoute.meta.title : "Home";

  next();
});

export default router;
