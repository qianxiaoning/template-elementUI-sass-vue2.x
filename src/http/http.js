import axios from 'axios';
//兼容localstorage的包
import storejs from 'storejs';
//配置axios实例
let instanceAxios = axios.create();
// 请求拦截器
instanceAxios.interceptors.request.use(
  (config)=>{
    // 发送请求之前    
    // moduleEvent.$emit('actionload', true);
    config.headers.token = storejs("token");
    return config
  },
  //请求错误
  (error)=>{    
    // moduleEvent.$emit('moduleload', false);
    moduleEvent.$emit("errorNetWork", '网络异常');
    return Promise.reject(error)
  },
)
// 响应拦截器
instanceAxios.interceptors.response.use(
  (response)=>{
    //响应数据  
    console.log(response);
    // let resData = response.data;
    // moduleEvent.$emit('moduleload', false);
    // moduleEvent.$emit('actionload', false);
    // if(resData.code == 200) return resData
    // // 302 掉线
    // else if(resData.code == 302) {
    //     moduleEvent.$emit("errorNetWork", '账号已掉线，请重新登录');
    //     location.href = '/#/login';
    //     return Promise.reject(response);
    // }
    // else {
    //     moduleEvent.$emit("errorNetWork", resData.msg);
    //     return Promise.reject(response);
    // }   
  },
  (error)=>{
    // moduleEvent.$emit("errorNetWork", error.message);
    // moduleEvent.$emit('moduleload', false);
    // moduleEvent.$emit('actionload', false);
    return Promise.reject(error)
  },
)
// 跨域请求是否需要凭证 是否带上cookie
instanceAxios.defaults.withCredentials = true
instanceAxios.defaults.timeout = 2000

//POST新增 DELETE删除 PUT更新 GET查询
const http = {
    post(url,params){
        return instanceAxios.post(url,params).then((res)=>{
            return res;
        })
    },
    delete(url,params){
        return instanceAxios.delete(url,{data:params}).then((res)=>{
            return res;
        })
    },
    put(url,params){
        return instanceAxios.put(url,params).then((res)=>{
            return res;
        })
    },
    get(url,params){
        return instanceAxios.get(url,{params:params}).then((res)=>{
            return res;
        })
    },
};

// import {backLogin,showModal} from '@/utils/index';
// //用wx改
// const httpFun = (url, method, data,opt) => {
//   //POST新增 GET查询 PUT更新 DELETE删除
//   let myHeader = {
//     'content-type': 'application/json',
//     'Cookie': "sso-token=" + wx.getStorageSync('login').token,
//   };

//   return new Promise((resolve, reject) => {
//     wx.showLoading({
//       title: '加载中'      
//     });
//     wx.request({
//       url: url,
//       method: method,
//       data: data,
//       header: myHeader,
//       success(res) {
//         if(opt=='direct'){
//           resolve(res.data);
//         }
//         if (res.data.code == 200) {
//           resolve(res.data.data);
//         }
//         else if(res.data.code == 302){
//           showModal({
//             content: '账号已掉线，请重新登录',
//             success(res) {
//               if (res.confirm) {
//                 backLogin();
//               }
//             }
//           });
//         }
//         else if(res.data.code == 500){
//           showModal({
//             content: res.data.msg,            
//           });          
//         }
//       },
//       complete() {
//         if(opt=='isLoading'){

//         }
//         else{
//           wx.hideLoading();
//         }        
//       },
//       fail(err) {
//         showModal({
//           content: '请求失败',
//         });
//         reject(err)
//       }
//     });
//   });
// }
export default http
