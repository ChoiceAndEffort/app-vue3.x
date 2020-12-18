import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/me',
    name: 'me',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/me/Index.vue')
  },
  {
    path: '/person-settings',
    name: 'personSettings',
    component: () => import(/* webpackChunkName: "about" */ '../views/me/personSettings/Index.vue')
  },
  {
    path: '/car',
    name: 'car',
    component: () => import(/* webpackChunkName: "about" */ '../views/car/Index.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
