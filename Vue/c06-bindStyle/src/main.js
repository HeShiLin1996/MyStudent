import Vue from 'vue';
import'../static/css/index.css'

let vm = new Vue({
  el:"#app",
  data:{
  className : "box",
  isBox:true,
  class1:'box',
  class2:'radius',
  classObj:{
    'box':true,
    "radius":true
  },
  //css
  radius:'20px',
  bgColor:'purple',
  styleObj:{
    borderRadius:"30px",
    backgroundColor:"green",
    boxSizing:"border-box",
    border:"5px solid red"
  }
  },
  methods:{
    
  }
})
