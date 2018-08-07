<template>
    <div class="navigationbar">
        <Icon class="goBtn" @click = 'goBackClick' type="chevron-left" v-if="goBack"></Icon>
        <h3 class="title">{{this.$store.state.title}}</h3>
    </div>
</template>

<script>
export default {
    name:"tabar",
    props:{
        goBack:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        goBackClick(){
            this.$router.go(-1);
        }
    },
    data(){
        return{
            title:'主页'
        }
    },
    watch:{
        $route(to,from){
        switch(to.name){
            case 'search':{
            this.$store.commit('changeTitle','搜索')
            }break;
            case 'home':{
            this.$store.commit('changeTitle','主页')
            }break;
            case 'shopcar':{
            this.$store.commit('changeTitle','购物车')
            }break;
            case 'main':{
            this.$store.commit('changeTitle','内容')
            }break;
            case 'details':{
            this.$store.commit('changeTitle','详情')
            }break;
        }
        }
    },  
}
</script>

<style>
.navigationbar{
    height: 64px;
    background: #333;
    color: #fff;
    position: relative;
}
.navigationbar .title{
    text-align: center;
    line-height: 49px;
    letter-spacing: 5px
}
.goBtn{
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%)
}
</style>
