//level1模块
import level1 from '@/pages/main/level1/level1'
import level1_1 from '@/pages/main/level1/level1-1/level1-1'
import level1_2 from '@/pages/main/level1/level1-2/level1-2'
import level1_3 from '@/pages/main/level1/level1-3/level1-3'

export default {
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
}
    
