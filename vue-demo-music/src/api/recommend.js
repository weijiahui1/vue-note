import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config.js'
import axios from 'axios'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export function getDiscList() {
  const url = '/api/yyd/api/getHomePageInfo'

  return axios.get(url, {
    // params: data
  }).then((response) => {
    // response.json(response)
    return Promise.resolve(response.data)
  }).catch((e) => {
    console.log(e)
  })
}
