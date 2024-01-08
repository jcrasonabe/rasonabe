import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/User.vue')
    },
    {
      path: '/post',
      name: 'post',
      component: () => import('../views/Post.vue')
    },
    {
      path: '/comment',
      name: 'comment',
      component: () => import('../views/Comment.vue')
    }
  ]
})

export default router
