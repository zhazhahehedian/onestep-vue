import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Appindex from '@/components/home/Appindex'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/index',
    name: 'AppIndex',
    component: Appindex
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
