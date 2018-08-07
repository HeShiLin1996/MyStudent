<template>
    <div>
        <ul>
            <li v-for="(item,index) in imgUrl">
                <img v-lazy="item.src" alt="" width="300" height="150"/>
             </li>
         </ul>
    </div>
</template>

<script>
export default {
    name: 'lazy',
    data() {
        return {
            // 引入图片，如果实在js中，必须require进来
            imgUrl: [
                {src: '../assets/logo.png'},
                {src: '../assets/01.jpg'},
                {src: '../assets/02.jpg'},
                {src: '../assets/03.jpg'},
                {src: '../assets/04.jpg'},
                {src: '../assets/05.jpg'},
            ]
        }
    }
}
</script>

<style scoped>
img[lazy=loaded]{
  animation:fade 0.5s;
}
@keyframes fade {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>
