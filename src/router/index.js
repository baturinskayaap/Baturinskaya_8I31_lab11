import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import NasaPage from '../views/NasaPage.vue'
import SpaceXPage from '../views/SpaceXPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/nasa',
    name: 'Nasa',
    component: NasaPage
  },
  {
    path: '/spacex',
    name: 'SpaceX',
    component: SpaceXPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router