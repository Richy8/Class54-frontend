import Vue from "vue";
import VueRouter from "vue-router";

import authRoutes from "@/router/authRoutes";
import baseRoutes from "@/router/baseRoutes";
import errorRoutes from "@/router/errorRoutes";

Vue.use(VueRouter);

const routes = [...authRoutes, ...baseRoutes, ...errorRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  duplicateNavigationPolicy: "reload",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    else
      return {
        x: 0,
        y: 0,
      };
  },
});

export default router;
