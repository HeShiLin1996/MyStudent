<template>
  <div id="app">
    <transition name = 'rig'>
      <ul class="menu-list">
        <li data-page = 'Home' @click = 'btnClick'>主页
        </li>
        <li data-page = 'News' @click = 'btnClick'>新闻
        </li>
        <li data-page = 'About' @click = 'btnClick'>关于
        </li>
      </ul>
    </transition>
    <div class="container">
      <transition name="slide" mode="out-in">
        <component :is='page'></component>
      </transition>
    </div>
    <!-- <Anima /> -->
  </div>
</template>

<script>
  import Home from './components/home';
  import News from './components/news';
  import About from './components/about';
  import menuNav from './components/menuNav'
  import Anima from './components/trans-apim'

export default {

  name: 'App',
  components:{
    Home,
    News,
    About,
    menuNav,
    Anima
  },
  data(){
    return{
      page:Home
    }
  },
  methods:{
    btnClick(e){
      this.page = e.target.dataset.page;
      console.log(e);
    },
  },
}
</script>

<style>
.menu-list{
  list-style: none;
  font-size: 0;
}
.menu-list li{
  display: inline-block;
  cursor: pointer;
   width: 70px;
  line-height: 50px;
  background: gray;
  font-size: 16px;
}
.menu-list li:hover{
  text-decoration: underline;
}
.content{
  background: pink
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.rig-enter-active,.rig-leave-active{
  transition: transform .5s
}
.rig-enter{
  background: pink;
  opacity: 1;
  transform: translateX(-70px);
}
.rig-leave{
  background: pink;
  opacity: 1;
  transform: translateX(0);
}
.slide-enter-active, .slide-leave-active {
  transition: transform .5s;
}
.slide-enter, .slide-leave-to  {
  transform: translateX(500PX);
  opacity: 0;
}
.slide-enter-to,.slide-leave{
    opacity: 1;
    transform: translateX(0)
}
.container{
  width: 300px;
  position: relative;
}
.content{
  width: 300px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 0;
}
</style>