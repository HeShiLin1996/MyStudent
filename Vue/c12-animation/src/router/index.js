import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'
import News from '@/components/news'
import About from '@/components/about'

Vue.use(Router)

export default new Router({
    linkActiveClass:'active',
    routes:[
        {
            path:'/',
            name:'Home',
            Router,
            component:Home
        },
        {
            path:'/news',
            name:'News',
            Router,
            component:News
        },
        {
            path:'/about',
            name:'About',
            Router,
            component:About
        },
    ]

})