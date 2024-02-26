import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";
import CardPage from "../pages/CardPage.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/card/:id?", name: "Card", component: CardPage, props: true },
  ],
});

export default router;
