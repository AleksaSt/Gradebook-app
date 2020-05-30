import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Gradebooks from '../views/Gradebooks.vue'
import SingleGradebook from '../views/SingleGradebook.vue'
import AddGradebook from '../views/AddGradebook.vue'
import Professors from '../views/Professors.vue'
import SingleProfessor from '../views/SingleProfessor.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/gradebooks',
    name: 'Gradebooks',
    component: Gradebooks
  },
  {
    path: '/gradebooks/single/:id',
    name: 'SingleGradebook',
    component: SingleGradebook
  },
  {
    path: '/gradebooks/add',
    name: 'AddGradebook',
    component: AddGradebook
  },
  {
    path: '/professors',
    name: 'Professors',
    component: Professors
  },
  {
    path: '/professors/single/:id',
    name: 'SingleProfessor',
    component: SingleProfessor
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
