import { createRouter, createWebHistory } from 'vue-router'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import HomeView from '../views/HomeView.vue'

export const constantRoutes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }
]

const router = (parentBase:string)=>{
  const base = qiankunWindow.__POWERED_BY_QIANKUN__?`${parentBase}`:''
  return createRouter({
    history: createWebHistory(base),
    routes: constantRoutes
  })
} 

export default router
