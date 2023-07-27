import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/HomePage.vue";
import ShopPage from "@/pages/ShopPage.vue";



const router = createRouter({
  // Options
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/shop",
      component: ShopPage,
    },
  ],
});

export default router;
