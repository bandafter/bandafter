import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/views/MainPoster.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/lineup',
      name: 'lineup',
      component: () => import('@/views/LineUp.vue'),
    },
    {
      path: '/location',
      name: 'location',
      component: () => import('@/views/LocationMap.vue'),
    },
  ],
})

export default router
