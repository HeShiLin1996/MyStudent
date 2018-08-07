<template>
    <div class="content">
        <Navi :goBack='true'/>
        <div class="ma">
            {{val}}
        </div>
        <Navlist />
    </div>
</template>

<script>
import Navlist from '../components/navList'
import Navi from '../components/navigationbar'
export default {
    name:"details",
    data(){
        return{
            val : this.$route.query.msg
        }
    }
    ,
    components:{
        Navlist,
        Navi
    }      
}
</script>

<style scoped>

</style>
