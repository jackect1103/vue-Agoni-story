import Vue from 'vue'
import Router from 'vue-router'
import bookShelfRouter from './bookShelf'
import bookCityRouter from './bookCity'
import bookCircleRouter from './bookCircle'
import selectedRouter from './Selected'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    bookShelfRouter,
    bookCityRouter,
    bookCircleRouter,
    selectedRouter,
    {
      path: '/search',
      component: () => import('@/components/search'),
      meta: 'search'
    }, 
    {
      path: '/personal',
      component: () => import('@/components/personal'),
    },
    {
      path: '/login',
      component: () => import('@/components/login'),
    },
    {
      path: '/register',
      component: () => import('@/components/register'),
    },
    {
      // 路由错误是跳转到该路由
      path: '/*',
      redirect: '/bookCity'
    }
  ]
})
