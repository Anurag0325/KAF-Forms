import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Kaf2 from '../components/sales/Kaf2.vue'
import Kaf3 from '../components/sales/Kaf3.vue'
import Kaf4 from '../components/sales/Kaf4.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/sales/kaf2', name: Kaf2, component: Kaf2 },
  { path: '/sales/kaf3', name: Kaf3, component: Kaf3 },
  { path: '/sales/kaf4', name: Kaf4, component: Kaf4 },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
