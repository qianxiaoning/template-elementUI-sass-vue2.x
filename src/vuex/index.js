import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
Vue.use(Vuex);

const vuex = new Vuex.Store({
    modules: {
        // 大模块引入
        ...modules
    }
})
export default vuex
