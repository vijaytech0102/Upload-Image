import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import { getAuth } from "firebase/auth";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/Signup.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
    meta: {
      requiresAuth: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const authenticatedUser = auth.currentUser;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !authenticatedUser) {
    alert("You are not authorized to access this area.");
    next("login");
  } else {
    next();
  }
});

export default router;
