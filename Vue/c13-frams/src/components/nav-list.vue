<template>
    <div>
        <ul class="menu-list">
                <li v-for="(link,index) in links"  :key ='index'>
                    <router-link :to="link.url" exact>{{link.title}}</router-link>
                </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'nav-list',
    data(){
        return{
            links:[
                {
                    title:"自定义指令",
                    url:'/',
                },
                {
                    title:'elmentUI',
                    url:'/elmentui',
                },
                {
                    title:'echars',
                    url:'/echars',
                },
                {
                    title:'iview',
                    url:'iview'
                },
                {
                    title:'lazyload',
                    url:'lazyload'
                },
                {
                    title:'swiper',
                    url:"swiper"
                }
            ]
        }
    }
}
</script>

<style scoped>
.menu-list{
    list-style: none;
    padding: 0
}
.menu-list li{
   
    display: inline-block;
    padding: 50px;
    color: black
}
.menu-list li a {
    text-decoration: none;
}
.menu-list li :hover{
    text-decoration: underline;
}
.router-link-active{
    color: red;
}
</style>
