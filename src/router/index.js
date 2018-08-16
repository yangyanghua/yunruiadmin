import Vue from 'vue'
import Router from 'vue-router'
import Login from '../modules/Login.vue'
import NotFound from '../modules/404.vue'
import Home from '../modules/Home.vue'
import userRoutes from './modules/userMana.js' 
import console from './modules/console.js' 
import activitys from './modules/activityMana.js' 
import system from './modules/system.js' 
import sales from './modules/sales.js' 


Vue.use(Router)
export default new Router({
  routes: [
    {
        path: '/login',
        component: Login,
        name: '登录',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '404',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '用户管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
			...userRoutes,
        ]
    },
    {
        path: '/',
        component: Home,
        name: '控制台',
        iconCls: 'el-icon-message',//图标样式class
        children: [
			...console,
        ]
    },
    {
        path: '/',
        component: Home,
        name: '活动管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
			...activitys,
        ]
    },
    {
        path: '/',
        component: Home,
        name: '系统管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
			...system,
        ]
    },
    {
        path: '/',
        component: Home,
        name: '销售',
        iconCls: 'el-icon-message',//图标样式class
        children: [
			...sales,
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }    
    
//  {
//    path: '/',
//    component: pageWapper,
//    redirect: '/index',
//    children: [
//      ...indexRoutes,
//      ...managementRoutes,
//      ...editRoutes,     
//      ...homepageRoutes, 
//      ...productRoutes,
//      ...authorityManagement,
//      ...goodsGroup,
//      ...systemRoutes,
//      ...appHomeRoutes,
//    ]
//  },
//  { path: "*", redirect: '/index' },

  ]
})
