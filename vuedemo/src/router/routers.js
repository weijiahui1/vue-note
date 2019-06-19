import Test from '../page/test'
import WxLogin from '../page/wxLogin'
import KnowledgeGame from '../page/knowledgeGame'
import SkcUserInfo from '../page/skcUserInfo'

export const TestRouter = {
  path: '/hello',
  name: 'hello',
  component: Test
}

export const KnowledgeGameRouter = {
  path: '/knowledgegame',
  name: 'knowledgegame',
  meta: {
    title: '安全知识竞赛'
  },
  component: KnowledgeGame
}
//安全知识竞赛 - 填写个人信息页面 
export const SkcUserInfoRouter = {
  path: '/skcuserinfo',
  name: 'skcuserinfo',
  meta: {
    title: '安全知识竞赛'
  },
  component: SkcUserInfo
}

export const wxLoginRouter = {
  path: '/wxlogin',
  name: 'wxlogin',
  meta: {
    title: '微信授权登录'
  },
  component: WxLogin
}

export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  // redirect: '/hello',
  component: WxLogin
}

// export const page404 = {
//   path: '*',
//   name: 'error_404',
//   meta: {
//     title: '404-页面不存在'
//   },
//   component: error_404
// }

// 作为Work组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
// export const appRouter = [
//   {
//     path: '/lessons',
//     name: 'lessons',
//     component: () => import(''),
//     children: [
//       {
//         path: 'course',
//         name: 'course',
//         meta: {
//           keepAlive: true
//         },
//         component: () => import('@/view/course/course')
//       }
//     ]
//   }
// ]
// 所有上面定义的路由都要写在下面的routers里
export const routes = [
  KnowledgeGameRouter,
  SkcUserInfoRouter,
  wxLoginRouter,
  otherRouter,
  TestRouter
]
