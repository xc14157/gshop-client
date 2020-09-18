/**
 * 入口js
 */
import Vue from 'vue'
import App from './App.vue'
//引入路由 引入之后会多两个组件标签 router-link router-view
import router from './router'

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})