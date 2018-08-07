<template>
     <div class="content">
         <ul class="l-menu">
             <li><router-link :to="links.html" >Html</router-link></li>
             <li><router-link :to="links.css" >Css</router-link></li>
             <li><router-link :to="links.js" >Js</router-link></li>
         </ul>
         <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'Course',
    data(){
        return {
            links:{
                html:"/course/html",
                css:'/course/css',
                js:"/course/js"
            }
        }
    }    
}
</script>

<style scoped>
.l-menu{
    height: 100%;
    width: 10%;
    text-align: left;
}
.r-content{
    height: 100%;
    width: 90%;
    
}
.content{
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;

}
</style>
