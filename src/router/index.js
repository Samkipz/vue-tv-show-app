import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import VideoDetail from '../views/VideoDetail.vue'
import VideoCreate from '../views/VideoCreate.vue'
import VideoEdit from '../views/VideoEdit.vue'
import AdminVideos from '../views/AdminVideos.vue'
import AdminUsersList from '../views/AdminUsersList.vue'
import UserLogin from '../views/UserLogin.vue'
import UserRegister from '../views/UserRegister.vue'
import UserProfile from '../views/UserProfile.vue'

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
    component: VideoCreate,
    beforeEnter(to, from, next) {
      let currentUser = JSON.parse(window.localStorage.currentUser)
      if (currentUser && currentUser.user.attributes.admin) {
        next()
      }
      else {
        next("/");
      }
    }
  },
  {
    path: '/admin/videos/:id/edit',
    name: 'video-edit',
    component: VideoEdit,
    params: true,
    beforeEnter(to, from, next) {
      let currentUser = JSON.parse(window.localStorage.currentUser)
      if (currentUser && currentUser.user.attributes.admin) {
        next()
      }
      else {
        next("/");
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: UserLogin
  },
  {
    path: '/register',
    name: 'register',
    component: UserRegister
  },
  {
    path: '/profile/:id',
    name: 'user-profile',
    component: UserProfile,
    params: true,
  },
  {
    path: '/admin/videos',
    name: 'admin-videos',
    component: AdminVideos,
    beforeEnter(to, from, next) {
      let currentUser = JSON.parse(window.localStorage.currentUser)
      if (currentUser && currentUser.user.attributes.admin) {
        next()
      }
      else {
        next("/");
      }
    }
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: AdminUsersList,
    beforeEnter(to, from, next) {
      let currentUser = JSON.parse(window.localStorage.currentUser)
      if (currentUser && currentUser.user.attributes.admin) {
        next()
      }
      else {
        next("/");
      }
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
