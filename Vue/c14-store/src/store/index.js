import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


  export default new Vuex.Store({
    state: {
        left:'0',
        isLogin:true,
        title:"主页",
    },
    mutations: {
        changeLeft(state,left){
          state.left = left;
        },
        changeTitle(state,title){
          state.title = title;
        }
    }
  });