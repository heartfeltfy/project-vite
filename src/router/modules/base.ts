import { RouteRecordRaw } from "vue-router"

export const base: RouteRecordRaw[] = [
  {
    path: "/",
    name: "layout",
    component: async () => await import("@/layout/IndexView.vue")
  },
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: async () => await import("@/views/NotFound.vue")
  }
]
