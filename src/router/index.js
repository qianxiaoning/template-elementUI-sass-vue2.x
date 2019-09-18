// token所需
import http from '@/http/http'
import urls from '@/http/urls'
// 路由
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

const router = new Router({
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

// 获取token
let name;
function createToken(){
  if(location.hash.lastIndexOf('?')>0){
    const query = location.hash.split('?')[1];
    const queryArray = query.split('&');
    queryArray.forEach((item) => {
        if(item.indexOf('name')>-1){
          name = item.split('=')[1];
        }
    });

    const timestamp = Date.now();
    const md5_sign = jsmd5(`loginName=${name}&timestamp=${timestamp}&secret=123`);
    let loginUrl = `${urls.login}?loginName=${name}&timestamp=${timestamp}&sign=${md5_sign}`;
    return http.post(loginUrl);               
  }
}
// 路由守卫
router.beforeEach((to, from, next) => {
  const token = instanceAxios.defaults.headers.token;
  // token存在
  if(token){
    next();
  } else {
    // 不存在请求
    if(location.hash.lastIndexOf('?')>0){
      // 刷新 token 
      createToken().then((res) => {
        instanceAxios.defaults.headers.token = res.value;        
        next();                
        localStorage.token = res.value;
      })
    }else{
      instanceAxios.defaults.headers.token = localStorage.token;
      next();
    }    
  }
})

export default router;
