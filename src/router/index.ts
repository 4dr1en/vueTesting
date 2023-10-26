import { createWebHistory, createRouter } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/components/TodoList.vue"),
    },
    {
      path: "/about",
      component: () => import("@/components/About.vue"),
    },
  ],
});

export default router;
