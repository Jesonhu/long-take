import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '一镜到底'
      },
      component: () => import('./views/Home')
    },
    {
      path: '/timeline',
      name: 'timeline',
      meta: {
        title: 'TimelineMax 用法'
      },
      component: () => import('./views/Timeline')
    }
  ]
})
