<template>
    <div class="content">
        主页内容1
        <button type="button" @click = 'goAbout()'>前往关于</button>
    </div>
</template>

<script>
export default {
    name:'home-ct1',
    data(){
        return{

        }
    },
    methods:{
        goAbout(){
            this.$router.push({
                path:'/niupi',
                query:{
                    weather:'成都-12-31'
                }
            })
        }
    }
}
</script>


<style>

</style>
