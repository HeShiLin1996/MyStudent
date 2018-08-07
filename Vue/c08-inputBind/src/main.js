import Vue from 'vue';

let vm = new Vue({
  el:"#app",
  data:{
    value:"唉哟不错哟",
    checkMsg: '',
    heros: [],
    selected:''
  },
  methods:{

  },
watch:{
    value(val){
      console.log(val);
    }
  }
})
