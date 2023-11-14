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
    path: '/api/cars/:carId/modifications',
    name: 'ModList',
    component: loadPage('ModListPage'),
  },
  
  {
    path: '/topCars',
    name: 'TopCars',
    component: loadPage('TopCarsPage'),
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
  },
  {
    path: '/ThreeCarComparison',
    name: 'ComparisonThree',
    component: loadPage('ThreeCarComparisonPage'),
    beforeEnter: authGuard
  },
  {
    path: '/FourCarComparison',
    name: 'ComparisonFour',
    component: loadPage('FourCarComparisonPage'),
    beforeEnter: authGuard
  },
  {
    path: '/profile/:profileId',
    name: 'Profile',
    component: loadPage('ProfilePage'),
    beforeEnter: authGuard
  },
  

]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
