import Vue from 'vue';
import Axios from 'axios';
import Qs from 'qs';

Vue.prototype.HOST = '/api'
//全局配置
//Axios.defaults.baseURL = 'http://route.showapi.com/';

// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  //参数处理                                                                                                                           
  if(config.method == 'post'){
    config.data = Qs.stringify(config.data);
  }
  console.log("请求：" + config)
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log("响应：" + response)
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

//将Axios挂载到Vue原型上
Vue.prototype.$axios = Axios;

let vm = new Vue({
  el:"#app",
  data:{
    contentlist:[],
    urls:{
      text:"341-1",
      img:'341-2'
    }
  },
  created(){
    //跨域请求
    let url = this.HOST + '/v2/movie/in_theaters';
    this.$axios.get(url,{
      params:{
        count:20,
      }
    })
    .then(res=>{
      console.log(res);
    })
    .catch(error=>{
      console.log(error);
    })
  },  
  methods:{
    get(){
      this.$axios.get(this.urls.img,{
        params:{
          showapi_appid:'66390',
          showapi_sign:'6b0dbfff76bf4ca49d9176551f144e67',
          page: '1',
          maxResult: '20'
        }
      })
      .then(res=>{
        this.contentlist = res['data']['showapi_res_body']['contentlist']
        console.log(res);
      })
      .catch(error=>{
        console.log(error);
      })
    },
    post(){
      this.$axios.post(this.urls.text,{
        showapi_appid:'66390',
        showapi_sign:'6b0dbfff76bf4ca49d9176551f144e67',
        page: '1',
        maxResult: '20'
      })
      .then(res=>{
        console.log(res);
      })
      .catch(error=>{
        console.log(error);
      })
    }
  },
})
