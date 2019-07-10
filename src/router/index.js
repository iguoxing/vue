import Vue from 'vue'
import Router from 'vue-router'

const HomeIndexPhone = resolve => require(['@/components/Admore/Index_phone'], resolve) //广告官网-首页 移动版
const AppleSharePhone = resolve => require(['@/components/Apple/Share'], resolve) //苹果发布会 分享页

Vue.use(Router)
export default new Router({
    // 选中状态
    linkActiveClass: 'active',
    mode: 'history',
    // scrollBehavior: () => ({ y: 0 }),
    routes: [
        {path: '/',component: HomeIndexPhone,alias:'home'},
        {path: '/share',component: AppleSharePhone}
    ]
})
