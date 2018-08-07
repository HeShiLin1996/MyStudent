// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'


import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.use(iView);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to,from,next)=>{
  switch(to.name){
    case 'search':{
    store.commit('changeTitle','搜索')
    }break;
    case 'home':{
    store.commit('changeTitle','主页')
    }break;
    case 'shopcar':{
    store.commit('changeTitle','购物车')
    }break;
    case 'main':{
    store.commit('changeTitle','内容')
    }break;
    case 'details':{
    store.commit('changeTitle','详情')
    }break;
}
  next();
})

export default router;