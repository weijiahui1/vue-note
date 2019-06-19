function setWindowConfigData () {
  let configData = {
    HTTPURL: '' // 请求地址
  }
  console.log(window.location.href)
  if (window.location.hostname === 'localhost') {
    configData.HTTPURL = 'https://qabianchengapi.knowbox.cn/v1'
    configData.GAPPID = 'wx4f89ed6bee5a8872'

  } else if (window.location.hostname === 'qacode2.knowbox.cn') {
    configData.HTTPURL = 'https://qabianchengapi2.knowbox.cn/v1'
    configData.GAPPID = 'wx4f89ed6bee5a8872'

  } else if (window.location.hostname === 'qacode.knowbox.cn') {
    // 测试:
    configData.HTTPURL = 'https://qabianchengapi.knowbox.cn/v1'
    configData.GAPPID = 'wx4f89ed6bee5a8872'

  } else if (window.location.hostname === 'precode.knowbox.cn') {
    // 预览：
    configData.HTTPURL = 'https://prebianchengapi.knowbox.cn/v1'
    configData.GAPPID = 'wx18236f89fed38ba8'

  } else if (window.location.hostname === 'code.knowbox.cn') {
    // 上线：
    configData.HTTPURL = 'https://bianchengapi.knowbox.cn/v1'
    configData.GAPPID = 'wx18236f89fed38ba8'

  }
  return configData
}
const configData = setWindowConfigData()
export default configData
