<template>
    <div class="content">
        <Navi />
        <div class="ma">
        内容
        </div>
        <Navlist />
    </div>
</template>

<script>
import Navlist from '../components/navList'
import Navi from '../components/navigationbar'
export default {
    name:"main",
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