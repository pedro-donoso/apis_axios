import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from '../views/Posts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Posts',
    component: Posts,
  },
  {
    path: '/Comments',
    name: 'Comments',

    component: () => import(/* webpackChunkName: "Busqueda" */ '../views/Comments.vue'),
  },
  {
    path: '/Todos',
    name: 'Todos',

    component: () => import(/* webpackChunkName: "Historial" */ '../views/Todos'),
  },
  {
    path: '/Users',
    name: 'Users',

    component: () => import(/* webpackChunkName: "Historial" */ '../views/Users.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
