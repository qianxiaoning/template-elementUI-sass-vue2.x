//level3模块
import level3 from '@/pages/main/level3/level3'
import level3_1 from '@/pages/main/level3/level3-1/level3-1'
import level3_2 from '@/pages/main/level3/level3-2/level3-2'
import level3_3 from '@/pages/main/level3/level3-3/level3-3'

export default {
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
}


