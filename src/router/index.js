import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import  Index from '../views/index/index.vue'
import Training from '../views/training/training.vue'
import Join from '../views/join/join.vue'
import Contact from '../views/contact/contact.vue'
import Internship from '../views/internship/internship.vue'
import Contacts from '../views/contacts/contacts.vue'
import Service from '../views/service/service.vue'
import Talent from '../views/talent/talent.vue'
import Cooperation from '../views/cooperation/cooperation.vue'
import School from '../views/school/school.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'index',
    component: Index,
    alias:'/index'
  },
  {
    path: '/training',
    name:'training',
    component: Training
  },
  {
    path: '/join',
    name: 'join',
    component: Join
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/internship',
    name: 'internship',
    component: Internship
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  },
  {
    path: '/service',
    name: 'service',
    component: Service
  },
  {
    path: '/talent',
    name: 'talent',
    component: Talent
  },
  {
    path: '/cooperation',
    name: 'cooperation',
    component: Cooperation
  },
  {
    path: '/school',
    name: 'school',
    component: School
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
