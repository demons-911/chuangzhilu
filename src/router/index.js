import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import  Index from '../views/index/index.vue'
import Training from '../views/training/training.vue'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/',
    // redirect: '/index',
    name:'index',
    component: Index,
    alias:'/index'
  },
  {
    path: '/training',
    name:'training',
    component: Training
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
