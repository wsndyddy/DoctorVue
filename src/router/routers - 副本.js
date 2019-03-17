import Main from '@/components/main/main'

export default [
  {
    path: '/',
    name: 'main',
    redirect: '/home',
    meta: {
      notCache: true
    },
    component: Main,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/components/home/home')
      }
    ]
  },
  {
    path: '/report',
    name: 'report_page',
    component: Main,
    meta: {
      hideInBread: true
    },
    children: [
      {
        path: '/report',
        name: 'report',
        meta: {
          icon: 'md-stats',
          title: '报告管理',
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/components/report/report')
      }
    ]
  },
  {
    path: '/check',
    name: 'checkproduct',
    component: Main,
    meta: {
      title: '待检产品',
      hideInBread: true
    },
    children: [
      {
        path: '/check',
        name: 'user',
        meta: {
          title: '待检产品详情',
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/components/check/check')
      }
    ]
  },
  {
    path: '/checkedList',
    name: 'checkproductList',
    component: Main,
    meta: {
      title: '已检产品',
      hideInBread: true
    },
    children: [
      {
        path: '/checkedList',
        name: 'checked',
        meta: {
          title: '已检产品',
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/components/checkedList/checkedlist')
      }
    ]
  },
  {
    path: '/checkedResult',
    name: 'checkresult',
    component: () => import('@/components/checkResult/checkresult'),
    meta: {
      title: '检查结果',
      hideInBread: true
    }
  },
  {
    path: '/login',
    name: 'userlogin',
    component: Main,
    meta: {
      title: '用户登录',
      hideInBread: true
    },
    children: [
      {
        path: '/login',
        name: 'user',
        meta: {
          title: '用户登录',
          beforeCloseName: 'before_close_login'
        },
        component: () => import('@/components/login/login')
      }
    ]
  },
  {
    path: '/user',
    name: 'user_page',
    component: Main,
    meta: {
      hideInBread: true
    },
    children: [
      {
        path: '/user',
        name: 'user',
        meta: {
          icon: 'md-trending-up',
          title: '用户管理',
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/components/user/user')
      }
    ]
  },
  {
    path: '/config',
    name: 'config_page',
    component: Main,
    meta: {
      hideInBread: true
    },
    children: [
      {
        path: '/config',
        name: 'config',
        meta: {
          icon: 'md-trending-up',
          title: '配置',
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/components/config/config')
      }
    ]
  },
  {
    path: '/about',
    name: 'about_page',
    component: Main,
    meta: {
      hideInBread: true
    },
    children: [
      {
        path: '/about',
        name: 'about',
        meta: {
          icon: 'ios-hammer',
          title: '关于',
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/components/about')
      }
    ]
  },
  {
    path: '*',
    name: 'not_found',
    meta: {
      title: '404 - 没有此页',
      hideInMenu: true
    },
    component: () => import('@/components/not_found')
  }
]
