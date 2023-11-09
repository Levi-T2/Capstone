import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },
  {
    path: '/api/cars/:carId',
    name: 'CarDetails',
    component: loadPage('CarDetailsPage'),
    beforeEnter: authGuard
  },
  {
    path: '/topCars',
    name: 'TopCars',
    component: loadPage('TopCarsPage'),
    beforeEnter: authGuard
  },
  {
    path: '/Comparison',
    name: 'Comparison',
    component: loadPage('ComparisonPage'),
    beforeEnter: authGuard
  },
  {
    path: '/TopMods',
    name: 'TopMods',
    component: loadPage('TopModsPage'),
    beforeEnter: authGuard
  },

]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
