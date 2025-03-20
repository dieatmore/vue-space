import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/experiment02',
    component: () => import('@/views/experiment02/IndexView.vue')
  },
  {
    path: '/example01',
    component: () => import('@/views/example01/Example01-1.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
