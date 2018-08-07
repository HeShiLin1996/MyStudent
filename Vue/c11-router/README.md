#安装路由
- npm i -S vue-router
- 导入 import Router from 'vue-router'
- 使用 Vue.use(Router)
- 创建路由实例(配置路由)
- 注册路由 
    new Vue({
        el: '#app',
        router,//注册路由
        components: { App },
        template: '<App/>'
    })
- router-view 路由视图