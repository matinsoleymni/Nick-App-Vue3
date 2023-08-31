import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import StoresViewVue from '@/views/StoresView.vue';
import SigninViewVue from "@/views/SigninView.vue"
import JoinViewVue from '@/views/JoinView.vue';
import HelpViewVue from "@/views/HelpView.vue"
import JobsViewVue from "@/views/JobsView.vue"
import InvestorsViewVue from "@/views/InvestorsView.vue"
import ShopViewVue  from "@/views/ShopView.vue"

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
      name: 'Stiors',
      component: StoresViewVue
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
    },
    {
      path: '/investors',
      name: 'Investors',
      component: InvestorsViewVue
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopViewVue
    }
  ]
})

export default router