import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AlbumView from '../views/AlbumView'
import PhotoView from '../views/PhotoView'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/album/:id',
    name: 'AlbumView',
    component: AlbumView,
    props: true
  },
  {
    path: '/photo/:id',
    name: 'PhotoView',
    component: PhotoView,
    props: true
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
