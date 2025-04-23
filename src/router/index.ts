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
    component: () => import('@/views/homework01/IndexView.vue')
  },
  {
    path: '/homework02',
    component: () => import('@/views/homework02/IndexView.vue')
  },
  {
    path: '/homework03',
    component: () => import('@/views/homework03/IndexView.vue')
  },
  {
    path: '/homework04',
    component: () => import('@/views/homework04/IndexView.vue')
  },
  {
    path: '/experiment03',
    component: () => import('@/views/experiment03/IndexView.vue'),
    children: [
      {
        path: '/experiment03/orders',
        component: () => import('@/views/experiment03/OrderView.vue')
      },
      {
        path: '/experiment03/shoplist',
        component: () => import('@/views/experiment03/ShopListView.vue')
      },
      {
        path: '/experiment03/location',
        component: () => import('@/views/experiment03/LocationView.vue')
      },
      {
        path: '/experiment03/run',
        component: () => import('@/views/experiment03/RunView.vue')
      },
      {
        path: '/experiment03/shop/:sid',
        component: () => import('@/views/experiment03/ShopView.vue')
      }
    ]
  },
  {
    path: '/homework05',
    component: () => import('@/views/homework05/IndexView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
