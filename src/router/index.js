import Vue from 'vue'
import VueRouter from 'vue-router'


//Routes --
import Today from '../components/05-pages/01-today/index.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'today',
    component: Today
  },
  {
    path: '/backlog',
    name: 'Backlog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/05-pages/02-backlog/index.vue')
  },
  {
    path: '/completed',
    name: 'Completed',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/05-pages/03-completed/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
