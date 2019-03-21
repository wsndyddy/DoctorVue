import Vue from 'vue'
import Router from 'vue-router'
import Report from '@/components/report/report'
import Home from '@/components/home/home'
import Check from '@/components/check/check'

import Checkresult from '@/components/checkResult/checkresult'
import Login from '@/components/login/login'
import Checkedlist from '@/components/checkedList/checkedlist'
import User from '@/components/user/user'
import Config from '@/components/config/config'
import About from '@/components/about'
import Nopage from '@/components/not_found'
import help from '@/components/help'
import bginfo from '@/components/baseinfo/bginfo'
Vue.use(Router)
const routerConfig = new Router({
  routes: [
    {
      path: '/base',
      name: 'base',
      meta: {
        notCache: true
      },
      component: bginfo,
      children: [
        {
          path: '/base/bginfo',
          name: 'bginfo',
          meta: {
            title: '背景情况-基础信息',
            notCache: true,
            icon: 'md-home'
          },
          component: bginfo
        }
      ]
    },
    {
      path: '/help',
      name: 'main',
      meta: {
        notCache: true
      },
      component: help
    },
    {
      path: '/',
      name: 'main',
      redirect: '/login',
      meta: {
        notCache: true
      },
      component: Home
    },
    {
      path: '/report',
      name: 'report',
      component: Report,
      meta: {
        hideInBread: true
      }
    },
    {
      path: '/check',
      name: 'checkproduct',
      component: Check,
      meta: {
        title: '待检产品',
        hideInBread: true
      }
    },
    {
      path: '/checkedList',
      name: 'checkproductList',
      component: Checkedlist,
      meta: {
        title: '已检产品',
        hideInBread: true
      }
    },
    {
      path: '/checkedResult',
      name: 'checkresult',
      component: Checkresult,
      meta: {
        title: '检查结果',
        hideInBread: true
      }
    },
    {
      path: '/login',
      name: 'userlogin',
      component: Login,
      meta: {
        title: '用户登录',
        hideInBread: true
      }
    },
    {
      path: '/user',
      name: 'user_page',
      component: User,
      meta: {
        hideInBread: true
      }
    },
    {
      path: '/config',
      name: 'config_page',
      component: Config,
      meta: {
        hideInBread: true
      }
    },
    {
      path: '/about',
      name: 'about_page',
      component: About,
      meta: {
        hideInBread: true
      }
    },
    {
      path: '*',
      name: 'not_found',
      meta: {
        title: '404 - 没有此页',
        hideInMenu: true
      },
      component: Nopage
    }
  ]
})
// 全局路由守卫,基本配置
export default routerConfig
