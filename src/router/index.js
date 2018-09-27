import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
const Index = resolve => require(['@/components/Index/Index'], resolve) //首页
const Left = resolve => require(['@/components/Index/Left'], resolve) //左侧菜单栏
    // const Toolbar = resolve => require(['@/components/Exam/Toolbar'], resolve) //上面菜单栏
const Content = resolve => require(['@/components/Index/Content'], resolve) //中间内容
const Approval = resolve => require(['@/components/Index/Approval'], resolve) //六个模块
const Application = resolve => require(['@/components/Exam/Application'], resolve) //申请页
const Exam = resolve => require(['@/components/Exam/Exam'], resolve) //待审批
const WaitApply = resolve => require(['@/components/Exam/Wait'], resolve) //待审批
const HomeIndex = resolve => require(['@/components/Admore/Index'], resolve) //广告官网-首页
const HomeIndexPhone = resolve => require(['@/components/Admore/Index_phone'], resolve) //广告官网-首页 移动版
const AppleSharePhone = resolve => require(['@/components/Apple/Share'], resolve) //苹果发布会 分享页
const AppleSharePhoneV2 = resolve => require(['@/components/Apple/ShareV2'], resolve) //苹果发布会 分享页 第二版

import Symbols from '@/components/Index/Symbols'


Vue.use(Router)
export default new Router({
    // 选中状态
    linkActiveClass: 'active',
    mode: 'history',
    // scrollBehavior: () => ({ y: 0 }),
    routes: [
        { path: '/index', component: Index },
        { path: '/left', component: Left },
        { path: '/hi', component: Hello },
        { path: '/symbol', component: Symbols },
        { path: '/content', component: Content },
        { path: '/approval', component: Approval },
        { path: '/apply', component: Application },
        {
            path: '/work',
            component: Exam,
            children: [
                { path: '/', component: Application, alias: 'apply' },
                { path: 'wait', component: WaitApply }
            ]
        },
        {path: '/homePhone',component: HomeIndexPhone},
        {path: '/home',component: HomeIndex},
        {path: '/share',component: AppleSharePhone},
        {path: '/sharev2',component: AppleSharePhoneV2}
    ]
})

// 创建根实例
// new Vue({
//   el: '#example',

// })