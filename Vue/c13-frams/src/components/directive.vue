<template>
  <div class="content">
    <input type="text" v-focus ='{color:red}'>
    </div>  
</template>

<script>
export default {
  name:"directive",
  //自定义组件
  directives:{
    //指定名称
    focus:{
      //绑定元素插入到dom元素中
      inserted(el,binding){
        //自动获取焦点
        el.focus();
        el.style.outline = 'none';
        el.style.border = `1px solid ${binding.value.color}`;

      }
    }
  },
  data(){
    return{
      red:'red',
    }
  }
}
</script>

<style scoped>

</style>
