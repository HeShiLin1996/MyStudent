import Vue from 'vue';
import $ from "jquery";

let model = {
  isadd:true,
  heroname:'',
  heroplace:'',
  heroposition:'',
  heroskills:'',
  hero:[
    {name:"我是谁",skills:"我在哪",position:"我该做啥",place:"喵喵喵"},
    {name:"我不是",skills:"我没有",position:"你瞎说",place:"汪汪汪"},
    {name:"怡宝",skills:"农夫三拳",position:"百岁山",place:"哞哞哞"},
  ]
}

let vm = new Vue({
  el:"#app",
  data:model,
  methods:{
    add(){
      this.hero.push({name:this.heroname,skills:this.heroskills,position:this.heroposition,place:this.heroplace});
    },
    remove(){
      console.log(this);
    },
    change(e){
      console.log(this);
    },
    changes(e){
      console.log(e)
    }
  }
})
