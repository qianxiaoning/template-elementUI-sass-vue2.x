// 主页面
//level2模块
import level2 from '@/pages/main/level2/level2'
import level2_1 from '@/pages/main/level2/level2-1/level2-1'
import level2_2 from '@/pages/main/level2/level2-2/level2-2'
import level2_3 from '@/pages/main/level2/level2-3/level2-3'

export default {
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
}
  

