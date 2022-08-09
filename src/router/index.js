import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes:[
		    {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'IboxHome',
            component: () => import( '../views/IboxHome.vue'), //主页面
            children:[{
                path:'/home',//与父组件一致时候默认加载
                name:'0',
                component: () => import('../views/content/0.vue'),
            },
            {
                path:'/home/1',
                name:'1',
                component: () => import('../views/content/1.vue'),
            },
            {
                path:'/home/2',
                name:'2',
                component: () => import('../views/content/2.vue'),
            },
            {
                path:'/home/3',
                name:'3',
                component: () => import('../views/content/3.vue'),
            },
            {
                path:'/home/4',
                name:'4',
                component: () => import('../views/content/4.vue'),
            },
            {
                path:'/home/5',
                name:'5',
                component: () => import('../views/content/5.vue'),
            },
            {
                path:'/home/6',
                name:'6',
                component: () => import('../views/content/6.vue'),
            },{
                path:'/home/7',
                name:'7',
                component: () => import('../views/content/7.vue'),
            },{
                path:'/home/8',
                name:'8',
                component: () => import('../views/content/8.vue'),
            },{
                path:'/home/9',
                name:'9',
                component: () => import('../views/content/9.vue'),
            },]
        },
	],
}
)

// 路由重复跳转报错解决
const routerPath = Router.prototype.push
Router.prototype.push = function push (location) {
    return routerPath.call(this, location).catch(e => e)
}