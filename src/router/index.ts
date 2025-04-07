import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/experiment02',
    component: () => import('@/views/experiment01/Experiment02.vue')
  },
  {
    path: '/',
    component: () => import('@/views/example01/Example01-1.vue')
  },
  {
    path: '/homework01',
    component: () => import('@/views/homework01/Homework01.vue')
  },
  {
    path: '/homework02',
    component: () => import('@/views/homework02/Homework02.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
