import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/home"
import Shopcar from "@/pages/shopcar"
import Main from "@/pages/main"
import Search from "@/pages/search"
import Details from "@/pages/details"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:Home,
    },
    {
      path:'/shopcar',
      name:'shopcar',
      component:Shopcar
    },
    {
      path:'/Main',
      name:'main',
      component:Main
    },
    {
      path:'/Search',
      name:'search',
      component:Search
    },
    {
        path:'/details',
        name:'details',
        component:Details
    }
  ]
})

