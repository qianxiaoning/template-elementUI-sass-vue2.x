import Vue from 'vue'
import Router from 'vue-router'
// login
import login from '@/pages/login/login'
// notFound
import notFound from '@/pages/notFound/notFound'
// main
import main from '@/pages/main/main'
// 暂时只分引大路由块
import level1 from './level1'
import level2 from './level2'
import level3 from './level3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',      
      redirect: '/login'
    },
    {
      path: '/login',   
      name:'login',   
      component: login
    },    
    {
      path: '/main',      
      name:'name',
      component: main,
      redirect:'./main/level1',
      children:[        
        level1,
        level2,
        level3,
      ]
    },
    {
      path: '*',      
      component: notFound
    },
  ]
})
