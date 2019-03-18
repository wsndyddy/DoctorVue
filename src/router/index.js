import iView from 'iview'
import router from './routers'
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  let isLogin = false
  isLogin = sessionStorage.getItem('isLogin')
  if (isLogin) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      alert('请重新登录')
      next({
        path: '/login'
      })
    }
  }
})

router.afterEach(to => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
