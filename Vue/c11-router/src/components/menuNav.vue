<template>
    <ul class="menu-list">
      <li>
        <router-link exact :to='links.home'>主页</router-link>
      </li>
      <li>
        <router-link :to="links.course">课程</router-link>
      </li>
      <li>
        <!-- <router-link :to="links.about">关于</router-link> -->
        <router-link :to="{path:links.about ,query:{weather:'成都-26-33'}}">关于</router-link>
      </li>
      <li>
        <!-- <router-link to="/news/小明/5/背锅">新闻</router-link> -->
        <router-link :to="{name: 'news', params:{name:'明明',age:'6',job:'甩锅'}}">新闻</router-link>
      </li>
    </ul>
</template>

<script>
export default {
    name:"menuNav",
    data(){
        return{
            //集中管理路由跳转链接
            links:{
                home:'/',
                course:'/course',
                news:'/news',
                about:'/about'
            }
        }
    }
}
</script>

<style scoped>
ul{
 text-align: left;
 background: pink;
}
li{
    text-align: center;
  display: inline-block;
  margin: 0 16px;
  line-height: 50px;
  width: 70px;
}
a{
    color: black
}
</style>
