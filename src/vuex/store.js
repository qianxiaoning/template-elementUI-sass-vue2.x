// 生成一个公共的store
import $http from '@/http/http'
import urls from "@/http/urls";
/**
 *
 * @param {*} action  请求地址
 * @param {*} obj  参数对象，传入的参数可以替换默认store中的方法 
 */
// 以下是移动端的列表滚动加载 封装
const store = (action, obj = {}) => {        
    let api = urls[action];    
    class Store{
        constructor(){        
            this.namespaced=true,
            this.state= {
                //数据列表
                list:[],
                //现页数
                nowPage:1,                
                //总页数
                pages:1,
                //每页条数
                size:10
            },
            this.getters= {
                //获取数据
                data(state,getters){
                    return state
                }
            },
            this.mutations= {
                //更新列表
                setList(state,res){
                    state.pages = parseInt(res.count/state.size)+1;
                    state.list = res.docs;
                },
                //页数增加
                pagesIncrease(state,res){
                    state.nowPage++;
                },
                //列表增加
                listIncrease(state,res){
                    state.list.push(...res.docs);   
                },
                //页数归一
                pagesToOne(state,res){
                    state.nowPage=1;
                },                
            },
            this.actions= {
                //获取列表数据
                async getList({state,commit},paramO={}){
                    commit('pagesToOne');
                    let paramInit={page:1,size:state.size};
                    Object.assign(paramInit,paramO);
                    let res = await $http.get(api,paramInit);
                    commit('setList',res);                    
                    return res;                    
                },
                //列表数据增加
                async listIncrease({state,commit},paramO={}){
                    if(state.nowPage<state.pages){
                        commit('pagesIncrease');
                        let paramInit={page:state.nowPage,size:state.size};
                        Object.assign(paramInit,paramO);
                        let res = await $http.get(api,paramInit);
                        commit('listIncrease',res);
                        return res;
                    }
                    else{
                        wx.showToast({
                            title: '加载完成',
                            icon: 'success'        
                        });
                    }                    
                }
            }             
        }        
    }        
    return new Store;
}
export default store
