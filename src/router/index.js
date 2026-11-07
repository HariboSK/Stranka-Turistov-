import { createRouter, createWebHistory } from 'vue-router'
import DomovView from '../views/DomovView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Domov',
      component: DomovView
    },
    {
      path: '/domov',
      name: 'domov',
      component: DomovView
    },
    { 
        path: '/onas', 
        name: 'onas', 
        component: () => import('../views/OnasView.vue') 
    },
    { 
        path: '/galeria', 
        name: 'galeria', 
        component: () => import('../views/GaleriaView.vue') 
    },
    { 
        path: '/kontakt', 
        name: 'kontakt', 
        component: () => import('../views/KontaktView.vue') },
    { 
        path: '/ucet', 
        name: 'ucet',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Prihlasenie',
        component: () => import('../views/LogIn.vue')
    },
    {
        path: '/admin',
        name: 'admin',
        redirect: '/login'
    },
    {
        path: '/admin/panel',
        name: 'admin-panel',
        component: () => import('../views/AdminPanelView.vue')
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('../views/UserView.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('../views/404View.vue')
    }
  ]
})

export default router
