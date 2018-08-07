<template>
    <div class="content">
        个人中心
    </div>
</template>

<script>
export default {
    name:'Home',
    data(){
        return {

        }
    },
    beforeRouteEnter (to, from, next) {
        console.log('即将进入');
        next();
    },
    beforeRouteLeave (to, from, next) {
        console.log('即将离开');
        next();
    }    
}
</script>

<style scoped>

</style>
