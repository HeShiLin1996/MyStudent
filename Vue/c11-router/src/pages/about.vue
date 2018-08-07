<template>
     <div class="content">
         关于
         <br>
         {{$route.query.weather}}
         <button type="button" @click='goHome()'>回到主页</button>
    </div>
</template>

<script>
export default {
    name:'About',
    data(){
        return {
            goHome(){
                this.$router.push('/')
            }
        }
    }    
}
</script>

<style scoped>

</style>
