/**
 * 路由对象模块
 */
import Vue from 'vue'
import Router from 'vue-router'
// 安装路由插件  声明使用插件
Vue.use(Router);

const routes = [
    {
        path: '',
        redirect: '/msite',
        meta: {
            title: '外卖',
            isShowTabBar: true
        }
    },
    {
        path: '/msite',
        component: () => import('../views/Msite/Msite.vue'),
        meta: {
            title: '外卖',
            isShowTabBar: true
        }

    },
    {
        path: '/order',
        component: () => import('../views/Order/Order.vue'),
        meta: {
            title: '订单',
            isShowTabBar: true
        }
    },
    {
        path: '/profie',
        component: () => import('../views/Profie/Profie.vue'),
        meta: {
            title: '我的',
            isShowTabBar: true
        }
    },
    {
        path: '/search',
        component: () => import('../views/Seach/Search.vue'),
        meta: {
            title: '搜索',
            isShowTabBar: true
        }
    },
    {
        path: '/login',
        component: () => import('../views/Login/Login.vue'),
        meta: {
            title: '登录',
            isShowTabBar: false
        }
    }
]
const router = new Router({
    routes,
    mode: 'history'
})

router.beforeEach((to,from,next) => {
    document.title = to.matched[0].meta.title;
    next();
})

export default router;