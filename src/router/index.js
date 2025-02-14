import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"; // ou "../pages/Home.vue" se estiver na pasta 'pages'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
