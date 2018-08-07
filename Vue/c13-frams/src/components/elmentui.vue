<template>
    <div>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
        <el-button type="primary" icon="el-icon-search" @click = 'al'>搜索</el-button>
        <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>



        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item>
                <img src="../assets/01.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../assets/02.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../assets/03.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../assets/04.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../assets/05.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../assets/06.jpg" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name:'elmentui',
    data(){
        return{
            
        }
    },
    methods:{
        al(){
            alert(1);
        }
    }    
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
