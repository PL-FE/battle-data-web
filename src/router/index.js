import { createRouter, createWebHistory } from 'vue-router'
import BigScreenLayout from '@/layout/BigScreenLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'BigScreenLayout',
      component: BigScreenLayout
    },
  ]
})

export default router
