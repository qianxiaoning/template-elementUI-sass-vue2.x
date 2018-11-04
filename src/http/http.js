const http = {
    post(action, params) {
        return instanceAxios
            .post(action, params)
            .then((response)=> {
                console.log(action);
                console.log(params);
                console.log(response);
                return response
            })
    },
    get(action, params) {
        return instanceAxios
            .get(action, {params: params})
            .then((response)=> {
                return response
            })
    },
    put(action, params) {
        return instanceAxios
            .put(action, params)
            .then((response)=> {
                return response
            })
    },
    delete(action, params) {
        return instanceAxios
            .delete(action, {data: params})
            .then((response)=> {
                return response
            })
    }
}

export default http



import {backLogin,showModal} from '@/utils/index';
//用wx改
const httpFun = (url, method, data,opt) => {
  //POST新增 GET查询 PUT更新 DELETE删除
  let myHeader = {
    'content-type': 'application/json',
    'Cookie': "sso-token=" + wx.getStorageSync('login').token,
  };

  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: '加载中'      
    });
    wx.request({
      url: url,
      method: method,
      data: data,
      header: myHeader,
      success(res) {
        if(opt=='direct'){
          resolve(res.data);
        }
        if (res.data.code == 200) {
          resolve(res.data.data);
        }
        else if(res.data.code == 302){
          showModal({
            content: '账号已掉线，请重新登录',
            success(res) {
              if (res.confirm) {
                backLogin();
              }
            }
          });
        }
        else if(res.data.code == 500){
          showModal({
            content: res.data.msg,            
          });          
        }
      },
      complete() {
        if(opt=='isLoading'){

        }
        else{
          wx.hideLoading();
        }        
      },
      fail(err) {
        showModal({
          content: '请求失败',
        });
        reject(err)
      }
    });
  });
}
export default httpFun
