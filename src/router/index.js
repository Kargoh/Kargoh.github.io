import { createRouter, createWebHistory } from "vue-router";
import firebase from 'firebase'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("/src/views/home.vue"),
    },
    {
      path: "/about",
      component: () => import("/src/views/about.vue"),
    },
    {
        path: "/login",
        component: () => import("/src/views/login.vue"),
    },
    {
      path: "/register",
      component: () => import("/src/views/register.vue"),
    },
    {
      path: "/products",
      component: () => import("/src/views/products.vue"),
    },
    {
      path: "/products/:id",
      component: () => import("/src/views/product.vue"),
    },
    {
      path: "/orders",
      component: () => import("/src/views/orders.vue"),
    },
    {
      path: "/admin",
      component: () => import("/src/views/admin.vue"),
    },
    {
      path: "/admin/orders",
      component: () => import("/src/views/admin-orders.vue"),
    },
    {
      path: "/admin/products",
      component: () => import("/src/views/admin-products.vue"),
    },
    {
      path: "/admin/products/:id",
      component: () => import("/src/views/admin-product.vue"),
    },
  ],
});

export default router;