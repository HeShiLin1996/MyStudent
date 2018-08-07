<template>

    <div class="content">
        <Navi  />
        <div class="ma">
        <Input class="input" v-model="val" placeholder="" clearable style="width: 200px"></Input>
        <Button @click='goDetails'>前往详情页</Button>
        </div>
        <Navlist />
    </div>
</template>

<script>

import Navlist from '../components/navList'
import Navi from '../components/navigationbar'

export default {
    name:"home",
    data(){
        return{
            val: '详情'
        }
    },
    methods:{
        goDetails(){
            this.$router.push({
                name:'details',
                query:{msg:this.val}
            })
        }
    },
    components:{
        Navlist,
        Navi
    }    
}
</script>

<style scoped>
.content{
    text-align: center;
}
.input{
    display: block;
    margin: 25px auto;
    font-size: 15px;
}
</style>