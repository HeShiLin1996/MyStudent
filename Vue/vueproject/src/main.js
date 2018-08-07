//引入vue
import Vue from 'vue';
import $ from "jquery";

let model = {
    message:"hello Vue",
    info:{}
};
//创建vue的实例
let vm = new Vue({
    //挂载元素
    el:'#app',
    //挂载Model
    data:model,
    //生命周期实例被创建
    created(){
        console.log("创建vue实例")
        console.log(this);
        
        let _this = this;
        $.ajax({
            url:"http://www.wwtliu.com/sxtstu/blueberrypai/getIndexBanner.php",
            type:"GET",
            success(response){
                _this.info = response['banner'][2];
            }
        })
    },
    //可以做dom操作
    mounted(){
        
    }
});


vm.message = 'hello hello'