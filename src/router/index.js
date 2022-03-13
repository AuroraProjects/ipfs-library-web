import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 切换路由后自动回滚到顶部
router.afterEach(() => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})

export default router
