import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StorsViewVue from '../views/StorsView.vue';
import SigninViewVue from "../views/SigninView.vue"
import JoinViewVue from '@/views/JoinView.vue';
import HelpViewVue from "@/views/HelpView.vue"
import JobsViewVue from "@/views/JobsView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/retail',
      name: 'about',
      component: StorsViewVue
    },
    {
      path: '/help',
      name: 'help',
      component: HelpViewVue
    },
    {
      path: '/signin',
      name: 'Signin',
      component: SigninViewVue
    },
    {
      path: '/join',
      name: 'Join Us',
      component: JoinViewVue
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsViewVue
    }
  ]
})

export default router