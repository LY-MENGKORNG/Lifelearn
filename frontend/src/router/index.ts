/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes as webRoutes } from '@/router/web/routes'
import { routes as systemRoutes } from './system/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts([
    ...webRoutes,
    ...systemRoutes,
  ]),
})
router.beforeEach((to, from, next) => {
  const isAuthenticated = false
  if (to.meta.requiresAuth && !isAuthenticated) {
      next({ path: '/' })
  } else {
      next()
  }
});

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
