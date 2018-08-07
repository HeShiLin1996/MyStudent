<template>
  <div id="app">
    <show />
     <Navlist />
  </div>
</template>

<script>
import Countent from 'countent'
import Navlist from './components/nav-list'

export default {
  name: 'App',
  components: {
    Countent,
    Navlist
  },
  data(){
    return{

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
</style>
