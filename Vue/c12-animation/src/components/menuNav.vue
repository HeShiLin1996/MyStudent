<template>
    <ul class="menu-list">
      <li>
        <router-link exact :to= 'links.home'>主页</router-link>
      </li>
      <li>
        <router-link :to="links.about">关于</router-link>
      </li>
      <li>
        <router-link to="/news/小明/5/背锅">新闻</router-link>
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
                news:'/news',
                about:'/about'
            }
        }
    }
}
</script>

<style scoped>

</style>
