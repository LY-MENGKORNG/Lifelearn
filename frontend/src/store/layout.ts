import { router } from "@/router";
import { defineStore } from "pinia";

export const useLayout = defineStore('layout', {
  state: () => ({
    layout: import('@/layouts/MainLayout.vue') as any
  }),

  actions: {
    getLayout() {
      const layout = router.currentRoute.value.meta
      return import(`@/layouts/${!!layout.LAYOUT ? layout : 'Main'}Layout.vue`)
    },
  }
})
