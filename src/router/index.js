import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Vehicle from '../views/Vehicle.vue'
import Tires from '../views/Tires.vue'
import Wheels from '../views/Wheels.vue'
import Calculators from '../views/Calculators.vue'
import Account from '../views/Account.vue'
import Hardware from '../views/Hardware.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/vehicle',
      name: 'vehicle',
      component: Vehicle
    },
    {
      path: '/tires',
      name: 'tires',
      component: Tires
    },
    {
      path: '/wheels',
      name: 'wheels',
      component: Wheels
    },
    {
      path: '/calculators',
      name: 'calculators',
      component: Calculators
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/hardware',
      name: 'hardware',
      component: Hardware
    },
  ]
})

export default router
