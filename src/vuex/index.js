import Vue from 'vue'
import Vuex from 'vuex'
// import modules from './modules'
Vue.use(Vuex);

const vuex = new Vuex.Store({
    modules: {
        // ...modules
    }
})
export default vuex
