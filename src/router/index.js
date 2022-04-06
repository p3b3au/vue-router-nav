import Vue from 'vue'
import VueRouter from 'vue-router'
//import RatesView from '../views/RatesView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'accueil',
    component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/testimonials',
      name: 'testimonials',
      component: () => import('@/views/TestimonialsView.vue')
    },
    {
      path: '/rates',
      name: 'rates',
      component: () => import('@/views/RatesView.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('@/views/TeamView.vue')
    },
    {
      path: '/member:memberId',
      name: 'member',
      component: () => import('@/views/TeamMemberView.vue')
    },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
