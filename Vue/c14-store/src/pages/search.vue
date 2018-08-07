<template>
    <div class="content">
        <Navi />
        <div class="ma">
        搜索
        </div>
        <Navlist />
    </div>
</template>

<script>
import Navlist from '../components/navList'
import Navi from '../components/navigationbar'
export default {
    
    name:"search",
    data(){
        return{

        }
    },
    components:{
        Navlist,
        Navi
    }      
}
</script>

<style scoped>

</style>