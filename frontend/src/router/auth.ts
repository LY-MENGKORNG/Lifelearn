import { RouteRecordRaw } from "vue-router"

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/sign-in',
    name: 'Login',
    component: () => import('@/views/auth/SignIn.vue')
  },
]
