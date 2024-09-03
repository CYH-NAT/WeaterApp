import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: ()=>import("../views/HomeView.vue"),
    meta: {
      title: "Home",
    },
  },
  {
    path: "/weather/:state/:city",
    name: "cityView",
    component: ()=>import("../views/CityView.vue"),
    meta: {
      title: "Weather",
    },
  },
  {
    path: "/test",
    name: "test",
    component: ()=>import("../views/test.vue"),
    meta: {
      title: "test",
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = `${
    to.params.state
      ? `${to.params.city}, ${to.params.state}`
      : to.meta.title
  } | The Local Weather`;
  next();
});

export default router;
