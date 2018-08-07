<template>
  <div id="app">
    <MenuNav />
    <router-view  />
    <router-view name="Homect1"></router-view>
    <hr>
    <router-view name="Homect2"></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import MenuNav from './components/menuNav'

export default {
  name: 'App',
  data(){
    return{

    }
  },
  methods:{
  },
  components:{
    MenuNav
  },
  watch:{
    $route(to,from){
      console.log(to);
      console.log(from);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul{
  list-style: none;
  padding: 0;
}
a{
  text-decoration: none;
}
.active{
  color: red !important;
}

</style>