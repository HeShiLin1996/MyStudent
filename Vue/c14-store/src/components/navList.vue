<template>
<div class="cr">
    <div class="cursor">

    </div>
    <ul class="menu-list">
        <li v-for="(src,index) in links" :key="index" class="item">
            <Icon class="icon" type="home"></Icon>
            <router-link :to ='src.href'>{{src.title}}</router-link>
        </li>
    </ul>
</div>   
</template>

<script>
export default {
    name:'nav-list',
    data(){
        return{
            links:[
                {title:'主页',href:"/"},
                {title:'购物车',href:"/shopcar"},
                {title:'内容',href:"/main"},
                {title:'搜索',href:"/search"}
            ]
        }
    },
    
}
</script>

<style scoped>
.cr{
    height: 49px;
    position: relative;
    background: #333;
    
}
.cursor{
    width: 25%;
    height: 49px;
    transition:left .5s linear;
    position: absolute;
    top: 0;
    left: 0;
    background: rgb(145, 49, 168);
}

.menu-list .item{
    line-height: 49px;
    text-align: center;
    width: 25%;
    height: 100%;
    display: inline-block;  
    position: relative;
}
.item a{
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    z-index: 1;
}
li .icon{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    size:50px
}
</style>
