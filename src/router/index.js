import { createRouter, createWebHistory } from "vue-router";

const pageComponent = (path) => () => import(`../pages/${path}.vue`);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: pageComponent("Home"),
    },
    {
      path: "/about",
      name: "About",
      component: pageComponent("About"),
    },
  ],
});

export default router;
