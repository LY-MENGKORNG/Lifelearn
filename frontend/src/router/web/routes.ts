import { USER } from '@/libs/routes'
export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/web/Welcome.vue'),
    meta: USER
  },
]
