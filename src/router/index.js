import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import VideoDetail from '../views/VideoDetail.vue'
import VideoCreate from '../views/VideoCreate.vue'
import AdminVideos from '../views/AdminVideos.vue'
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
  },
  {
    path: '/video/new',
    name: 'video-create',
    component: VideoCreate
  },
  {
    path: '/admin/videos',
    name: 'admin-videos',
    component: AdminVideos
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
