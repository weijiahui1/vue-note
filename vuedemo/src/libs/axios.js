import Axios from 'axios'
import configData from './conf'
// 设置baseURL
const baseURL = configData['HTTPURL']
const RESULTCODE = 99999
class httpRequest {
  constructor () {
    this.options = {
      method: '',
      url: ''
    }
    // 存储请求队列
    this.queue = {}
  }
  // 销毁请求实例
  destroy (url) {
    delete this.queue[url]
    const queue = Object.keys(this.queue)
    return queue.length
  }
  // 请求拦截
  interceptors (instance, url) {
    // 添加请求拦截器
    instance.interceptors.request.use(
      config => {
        // 在发送请求之前做些什么
        return config
      },
      error => {
        // 对请求错误做些什么
        return Promise.reject(error)
      }
    )
    // 添加响应拦截器
    instance.interceptors.response.use(
      res => {
        let { data } = res
        const is = this.destroy(url)
        if (!is) {
          setTimeout(() => {
            // Spin.hide()
          }, 500)
        }
        // 错误状态码处理
        if (data.code !== RESULTCODE) {
          if (data.code) {
            console.log(`error _ ${JSON.stringify(data)}`)
          }
          return false
        }
        return data
      },
      error => {
        console.log(`axios ____  ${error}`)
        // if (process.client) alert('信号好像飞到了外太空~')
        // 对响应错误做点什么
        return Promise.reject(error)
      }
    )
  }
  // 创建实例
  create (options) {
    let conf = {
      baseURL: baseURL,
      // timeout: 2000,
      'Content-Type': 'application/json; charset=utf-8'
    }
    if (options.method === 'post') {
      conf.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
      conf.data = options.data
    } else if (options.method === 'get') {
      conf.params = options.data
    }
    return Axios.create(conf)
  }
  // 合并请求实例
  // mergeReqest (instances = []) {
  // }
  // 请求实例
  request (options) {
    var instance = this.create(options)
    this.interceptors(instance, options.url)
    options = Object.assign({}, options)
    this.queue[options.url] = instance
    return instance(options)
  }
}
export default httpRequest
