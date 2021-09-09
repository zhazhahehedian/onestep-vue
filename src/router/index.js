import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Appindex from '@/components/home/Appindex'
import Home from '@/components/Home'
import libraryIndex from '@/components/library/libraryIndex'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    // home页面并不需要被访问
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'AppIndex',
        component: Appindex,
        meta: {
          requireAuth: true
        }
      },
      {
        path: '/library',
        name: 'libraryIndex',
        component: libraryIndex,
        meta: {
          requireAuth: true
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
