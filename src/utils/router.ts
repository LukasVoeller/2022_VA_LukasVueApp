import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/components/MainPage.vue";
import BookList from "@/components/BookList.vue";
import InfoBoxCluster from "@/components/InfoBoxCluster.vue";
import MouseCursor from "@/components/MouseCursor.vue";
import BookDetail from "@/components/BookDetail.vue";
import BookEdit from "@/components/BookEdit.vue";
import BookNew from "@/components/BookNew.vue";

const routes = [
  { path: "/", component: MainPage },
  { path: "/booklist", component: BookList },
  { path: "/infoboxcluster", component: InfoBoxCluster },
  { path: "/mousecursor", component: MouseCursor },
  { path: "/book/:isbn", name: "BookDetail", component: BookDetail },
  { path: "/:isbn/edit", name: "BookEdit", component: BookEdit },
  { path: "/book/new", name: "BookNew", component: BookNew },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;
