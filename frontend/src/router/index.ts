import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from 'vue-router'
import { routes as webRoute } from './web'
import { routes as authRoute } from './auth'
import { ROUTE_META } from '@/constants/route'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/layouts/AuthLayout.vue'),
    meta: ROUTE_META.AUTH,
    children: [
      ...authRoute
    ]
  },
  {
    path: '/',
    name: 'Web',
    redirect: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    meta: ROUTE_META.USER,
    children: [
      ...webRoute
    ],
  },
]

/**
 * Router instance 💥 that can be used by a `App`.
 */
export const router: Router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = localStorage.getItem('token') !== null
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})
