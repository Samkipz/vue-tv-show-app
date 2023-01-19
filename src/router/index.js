import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import VideoDetail from '../views/VideoDetail.vue'
// import HelloWorld from '@/components/HelloWorld.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Homepage
  },
  {
    path: '/video/:id',
    name: 'video-details',
    component: VideoDetail,
    params: true,
    props: true
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
