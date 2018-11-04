import Vue from 'vue'
import Router from 'vue-router'
// login
import login from '@/pages/login/login'
// notFound
import notFound from '@/pages/notFound/notFound'
// main
import main from '@/pages/main/main'

import level1 from '@/pages/main/level1/level1'
import level1_1 from '@/pages/main/level1/level1-1/level1-1'
import level1_2 from '@/pages/main/level1/level1-2/level1-2'
import level1_3 from '@/pages/main/level1/level1-3/level1-3'

import level2 from '@/pages/main/level2/level2'
import level2_1 from '@/pages/main/level2/level2-1/level2-1'
import level2_2 from '@/pages/main/level2/level2-2/level2-2'
import level2_3 from '@/pages/main/level2/level2-3/level2-3'

import level3 from '@/pages/main/level3/level3'
import level3_1 from '@/pages/main/level3/level3-1/level3-1'
import level3_2 from '@/pages/main/level3/level3-2/level3-2'
import level3_3 from '@/pages/main/level3/level3-3/level3-3'
// import left_sideBar from '@/structures/left_sideBar'

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
        {
          path:'level1',
          name:'level1',
          component:level1,
          redirect:'./level1/level1-1',
          children:[
            {
              path:'level1-1',
              name:'level1-1',
              component:level1_1,
            },
            {
              path:'level1-2',
              name:'level1-2',
              component:level1_2,
            },
            {
              path:'level1-3',
              name:'level1-3',
              component:level1_3,
            }            
          ]
        },
        {
          path:'level2',
          name:'level2',
          component:level2,
          redirect:'./level2/level2-1',
          children:[            
            {
              path:'level2-1',
              name:'level2-1',
              component:level2_1,
            },
            {
              path:'level2-2',
              name:'level2-2',
              component:level2_2,
            },
            {
              path:'level2-3',
              name:'level2-3',
              component:level2_3,
            }            
          ]
        },
        {
          path:'level3',
          name:'level3',
          component:level3,
          redirect:'./level3/level3-1',
          children:[            
            {
              path:'level3-1',
              name:'level3-1',
              component:level3_1,
            },
            {
              path:'level3-2',
              name:'level3-2',
              component:level3_2,
            },
            {
              path:'level3-3',
              name:'level3-3',
              component:level3_3,
            }            
          ]
        },
      ]
    },
    {
      path: '*',      
      component: notFound
    },
  ]
})
