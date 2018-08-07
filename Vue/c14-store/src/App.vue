<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import CSS from '../static/css/common.css'

export default {
  name: 'App',
  data(){
    return{
      title:'主页'
    }
  },
}
</script>

<style>
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.content{
  height: 100%;
}
.ma{
  display: block;
  height: calc(100% - 49px - 64px);
  overflow-y: scroll
}
</style>
