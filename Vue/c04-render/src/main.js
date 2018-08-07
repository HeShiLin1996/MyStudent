import Vue from 'vue';

let vm = new Vue({
  el:"#app",
  data:{
    name:'henry'
  },
  methods:{
    sayhello(e){
      alert(e.target.textContent)
      alert(`hello,${this.name}`);
    }
  }
})
