import Vue from 'vue';
import Router from 'vue-router';
import Directive from '@/components/directive'
import Elment from '@/components/elmentui'
import Echars from '@/components/echars'
import Iview from '@/components/iview'
import Lazyload from '@/components/lazyload'
import Swiper from '@/components/swiper'

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            name:'directive',
            component:Directive
        },
        {
            path:'/elmentui',
            name:'elmentui',
            component:Elment
        },
        {
            path:'/echars',
            name:'echars',
            component:Echars
        },
        {
            path:'/iview',
            name:'iview',
            component:Iview
        },
        {
            path:'/lazyload',
            name:'lazyload',
            component:Lazyload
        },
        {
            path:'/swiper',
            name:'swiper',
            component:Swiper
        }
    ]
})