import { createRouter, createWebHistory } from "vue-router";
import firebase from 'firebase'

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
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
      path: "/orders/:id",
      component: () => import("/src/views/order.vue"),
    },
    {
      path: "/checkout",
      component: () => import("/src/views/checkout.vue"),
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
    {
      path: "/admin/profile",
      component: () => import("/src/views/admin-profile.vue"),
    },
  ],
});

export default router;