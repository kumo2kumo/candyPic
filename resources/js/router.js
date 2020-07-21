import Vue from 'vue'
import VueRouter from 'vue-router'

// components
import PhotoList from './pages/PhotoList'
import Login from './pages/Login'

//<RouteView />を使えるようになる
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: PhotoList
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// app.jsで使うためにexport
export default router