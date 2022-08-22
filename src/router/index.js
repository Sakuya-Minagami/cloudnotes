import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import Notes from '@/components/Notes.vue'
import HomePage from '@/components/HomePage.vue'
import Groups from '@/components/Groups.vue'
import Center from '@/components/Center.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/notes',
    component: Notes
  },
  {
    path: '*',
    component: Login
  },
  {
    path: '/homepage',
    component: HomePage
  },
  {
    path: '/groups',
    component: Groups
  },
  {
    path: '/center',
    component: Center
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
