import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routers'
import configData from '../libs/conf'
// import {getHefUrlParam} from '../../libs/util'
let { GAPPID } = configData

Vue.use(Router)
const router = new Router({
  routes,
  // mode: 'history'
})

router.beforeEach((to, from, next) => {
  sessionStorage.setItem('token', 'feahvJWLZP88FddSbhv_1NMdddPJMEvXvNiUDCKxLIpMVgOpXvrqGjDhgs1mxKFP')
  console.log(to)
  console.log(from)
  to.meta.title ? document.title = to.meta.title : '小象编程'
  if (to.name === 'wxlogin' || to.name === 'otherRouter') {
    console.log('授权页面')
    next()
  } else {
    let sToken = sessionStorage.getItem('token')
    if (sToken && sToken !== '') {
      next()
    } else {
      let href = window.location.origin + window.location.pathname + '#' + to.fullPath
      sessionStorage.setItem('oldUrl', href)
      let authUrl = `${window.location.origin}${window.location.pathname}#/wxlogin`
      let callBackUrl = encodeURIComponent(authUrl)
      let authorizeUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${GAPPID}&redirect_uri=${callBackUrl}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
      window.location.replace(authorizeUrl)
      // next({name: 'wxlogin'})
    }
  }
})

router.afterEach(() => {
})

export default router
