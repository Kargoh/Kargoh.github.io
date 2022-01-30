import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/home.vue"),
    },
    {
      path: "/about",
      component: () => import("../views/about.vue"),
    },
    {
        path: "/login",
        component: () => import("../views/login.vue"),
    },
    {
      path: "/products",
      component: () => import("../views/products.vue"),
    },
    {
        path: "/orders",
        component: () => import("../views/orders.vue"),
      },
    {
        path: "/admin",
        component: () => import("../views/admin.vue"),
    },
    {
        path: "/admin/orders",
        component: () => import("../views/admin-orders.vue"),
    },
    {
        path: "/admin/products",
        component: () => import("../views/admin-products.vue"),
    }
  ],
});

export default router;