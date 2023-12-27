import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Index from "../Views/index.vue";
import Index2 from "../Views/index2.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/index2",
    name: "Index2",
    component: Index2,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
