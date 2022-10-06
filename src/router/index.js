import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/Dashboard.vue'
import EmployeeList from "@/views/EmployeeList.vue";
import AddEmployee from "@/views/AddEmployee.vue";
import EditEmployee from "@/views/EditEmployee.vue";
import EmployeeDetails from "@/views/EmployeeDetails.vue";

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
    },
    {
      path: '/add-employee',
      name: 'AddEmployee',
      component: AddEmployee
    },
    {
      path: '/edit-employee',
      name: 'EditEmployee',
      component: EditEmployee
    },
    {
      path: '/employee-view',
      name: 'EmployeeDetails',
      component: EmployeeDetails
    }


  ]
})

export default router
