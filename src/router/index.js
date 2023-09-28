import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '../views/SignUpView.vue'
import SignInView from '../views/SignInView.vue'
import MainDash from '../views/MainDash.vue'
import IntakeView from '../views/IntakeView.vue'

const HomeLayout = () => import('@/layouts/HomeLayout.vue');
const DashboardLayout = () => import('@/layouts/dashboardLayout.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeLayout',
      component: HomeLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: '/signup',
          name: 'signup',
          component: SignUpView
        },
        {
          path: '/signin',
          name: 'signin',
          component: SignInView
        }
      ]
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '/intake',
          name: 'intake',
          component: IntakeView
        },
        {
          path: '/dashboard',
          name: 'main',
          component: MainDash
        }
      ]
    }
  ]
});

export default router
