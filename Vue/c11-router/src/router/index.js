import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/home';
import Course from '@/pages/course';
import News from '@/pages/news';
import About from '@/pages/about';
import Html from '@/pages/html';
import Css from '@/pages/css';
import Js from '@/pages/js';
import Homect1 from '@/pages/home-ct1';
import Homect2 from '@/pages/home-ct2';


Vue.use(Router);

export default new Router({
  linkActiveClass:'active',
  routes:[
    {
        path: '/',      // 路由访问路径，‘/’表示当前目录
        name: 'home',   // 路由名称，传递数据时有用
        // 路由指向的组件
        components:{
            default:Home,
            Homect1,
            Homect2
        } 
    },
    {
        path: '/news/:name/:age/:job',
        name: 'news',
        component: News
    },
    {
        path: '/course',
        name: 'course',
        component: Course,
        redirect:'/course/html',//重定向 默认显示
        children:[
            {
                path:'html',
                component:Html
            },
            {
                path:'css',
                component:Css
            },
            {
                path:'js',
                component:Js
            }
        ]
    },
    {
        path: '/about',
        name: 'about',
        alias:'/niupi',
        component: About,
        props: (route) => ({ query: route.query.q })
    }   
  ]
})