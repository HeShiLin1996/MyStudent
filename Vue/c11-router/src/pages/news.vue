<template>
     <div class="content">
         新闻
         <br>
         <!-- 访问路由参数 -->
         {{$route.params.name}}-{{$route.params.age}}-{{$route.params.job}}
    </div>
</template>

<script>
export default {
    name:'News',
    data(){
        return {
            
        }
    }    
}
</script>

<style scoped>

</style>
