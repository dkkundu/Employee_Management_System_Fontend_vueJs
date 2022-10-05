import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/Dashboard.vue'
import EmployeeList from "@/views/EmployeeList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DashboardView',
      component: DashboardView
    },
    {
      path: '/employee-list',
      name: 'EmployeeList',
      component: EmployeeList
    }


  ]
})

export default router
