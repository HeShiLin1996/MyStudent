import Vue from 'vue';

let model = {
  isLogin:true,
  loginType:"tel",
  fruit:'',
  keywords:'',
  stus:[
    {name:'张三',gender:"boy",address:"四川省成都市"},
    {name:'李四',gender:"boy",address:"四川省绵阳市"},
    {name:'王麻子',gender:"boy",address:"四川省广元市"},
    {name:'光太强',gender:"boy",address:"四川省广元市"},
    {name:'熊大',gender:"boy",address:"四川省广元市"},
    {name:'熊二',gender:"boy",address:"四川省广元市"},
    {name:'喜洋洋',gender:"boy",address:"四川省广元市"}
  ],
  infos:{
    name:"赵武",
    age:"25",
    address:"北京",
    school:"neusoft",
    job:"play snake"
  },
  fruits:['apple','orange','bananer'],
  goods:[
    {name:"钢笔",price:100},
    {name:"毛笔",price:150},
    {name:"铅笔",price:10},
    {name:"大笔",price:200},
    {name:"小笔",price:50},
    {name:"中等笔",price:75},
  ],
}

let vm = new Vue({
  el:"#app",
  data:model,
  filters:{
    addSymble(val){
      return "￥"+val;
    }
  }, 
  //方法定义
  methods:{
    toggleLoginType(){
      this.loginType = this.loginType == 'tel' ? 'email' : 'tel';
    },
    add(){
      if(this.fruit){
        this.fruits.push(this.fruit);
      }
    },
    remove(){
      this.fruits.pop();
    },
    modify(){
      //this.fruits[0] = '番茄'
      this.$set(this.fruits,0,'番茄')
    },
    filterArr(){
      return this.stus.filter((stu)=>{
        let reg = new RegExp(this.keywords);
        return reg.test(stu.name);
      })
    }
  }
})
