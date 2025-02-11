import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue"; // ou "../pages/HomePage.vue" se estiver na pasta 'pages'

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
