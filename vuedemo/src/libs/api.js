import axios from './api.request'
import { SortParams } from './util'
import configData from './conf'
let { HTTPURL, GAPPID } = configData

// 微信授权登录
export const getTokenByCodeApi = (code) => {
  let data = {
    code
  }
  return axios.request({
    url: `${HTTPURL}/wechart/getTokenByCode`,
    data: SortParams(data),
    method: 'POST'
  })
}
// 用户注册
export const userRegistApi = (unionId, accessToken, openId) => {
  let data = {
    unionId,
    appId: GAPPID,
    accessToken,
    openId,
    storeOpenId: ""
  }
  return axios.request({
    url: `${HTTPURL}/student/userRegist`,
    data: SortParams(data),
    method: 'POST'
  })
}

// 获取用户信息
export const getStudentInfoApi = () => {
  let data = {
    token: 'feahvJWLZP88FddSbhv_1NMdddPJMEvXvNiUDCKxLIpMVgOpXvrqGjDhgs1mxKFP'
  }
  return axios.request({
    url: `${HTTPURL}/student/getStudentInfo`,
    data: SortParams(data),
    method: 'POST'
  })
}
