import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue"

const router = createRouter({
  // Options
  history: createWebHistory(),
  routes: [
    {
        path: "/",
        component: HomePage,
    }
  ]
});


export default router;