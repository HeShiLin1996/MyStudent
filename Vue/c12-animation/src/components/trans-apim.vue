<template>
    <div class="content">
        <p>
            <button type="button" @click='isVisible = !isVisible'>ClickMe</button>
        </p>
        <transition name='slide'>
            <h1 v-show="isVisible">hhhhhhhhsasdasdsa</h1>
        </transition>

        <p>
            <button type="button" @click='isShow = !isShow'>ClickMe</button>
        </p>
        <transition name='anima'>
            <h1 v-show="isShow">sdadasdasdasdas</h1>
        </transition>

        <p>
            <button type="button" @click='flag = !flag'>ClickMe</button>
        </p>
        <transition
        name="custom-classes-transition"
        enter-active-class="animated rubberBand"
        leave-active-class="animated rotateOut">
            <h1 v-show="flag">sdadasdasdasdas</h1>
        </transition>
        <input v-model.number="num" type="number" step="20">
        <p>{{ animatedNumber }}</p>

        <div class="brn-wrap">
            <transition name= 'slideX' mode="out-in">
                <button v-bind:key="isEditing" @click = 'btnClick'>
                    {{isEditing ? "save":"edit"}}
                </button>
            </transition>
        </div>
    </div>
</template>

<script>

export default {
    name:"anima",
    data(){
        return{
            isEditing:true,
            isVisible:true,
            isShow:true,
            flag:true,
            num: 0,
            tweenedNumber: 0
        }
    },
    computed: {
        animatedNumber() {
        return this.tweenedNumber.toFixed(0);
        }
    },
    watch: {
        num: function(newValue) {
        TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
        }
    },
    methods:{
        btnClick(){
            this.isEditing = !this.isEditing;
        }
    }  
}
</script>

<style scoped>
.btn-wrap{
    position: relative;
}
.btn-wrap button{
    position: absolute;
    left: 500px;
    top:0;
}
.slideX-enter-active, .slideX-leave-active {
  transition: transform .5s;
}
.slideX-enter, .slideX-leave-to  {
  transform: translateX(100PX);
  opacity: 0;
}
.slideX-enter-to,.slideX-leave{
    opacity: 1;
    transform: translateX(-10PX)
}
/* 动画 */
@keyframes flip{
    from{transform: rotateY(0)}
    to{transform: rotateY(360deg)}
}
.anima-enter-active{
    animation: flip .5s linear;
}
.anima-leave-active{
    animation: flip .5s linear reverse;
}

 /*css  */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}
.slide-enter-active,.slide-leave-active{
    transition: all .5s linear;
    }
.slide-leave,.slide-enter-to{
    transform: translate(0);
    color: red;
}
.slide-leave-to,.slide-enter{
    transform: translate(200px);
    color: blue
}
</style>
