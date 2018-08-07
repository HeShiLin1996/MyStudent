import Vue from 'vue';
import '../static/css/index.css'

new Vue({
  el:'#app',
  data:{
    time:new Date().toLocaleTimeString(),
    address:"四川省成都市",
    weather:"晴天",
    htmlStr:"<h3>莫出门，晒死你龟儿</h3>",
    imglink:"http://c.hiphotos.baidu.com/image/h%3D300/sign=2512fa1075310a55db24d8f487444387/09fa513d269759eeef490028befb43166d22df3c.jpg",
    imgtitle:"!!!!!!!",
    hidden:false
  }
})