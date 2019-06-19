import Cookies from 'js-cookie'
const TOKEN_KEY = 'token'
export const setToken = token => {
  // Cookies.set(TOKEN_KEY, token, { expires: config.cookieExpires })
  // Cookies.set(TOKEN_KEY, token)
  sessionStorage.setItem('token', token)
  Cookies.set(TOKEN_KEY, token, {
    path: '/',
    domain: '.knowbox.cn',
    expires: 30
  })
}

/**
 * @returns {Object} 获取地址上的参数
 */
export const getUrlParam = (myUrl) => {
  const url = myUrl ? myUrl : window.location.search
  let theRequest = {}
  if (url.indexOf('?') !== -1) {
    const str = url.substr(1)
    const strs = str.split('&')
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
    }
  }
  return theRequest
}

export const getHefUrlParam = (myUrl) => {
  const url = myUrl ? myUrl : window.location.href
  let theRequest = {}
  if (url.indexOf('?') !== -1) {
    const str = url.substr(1)
    const strs = str.split('&')
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
    }
  } else {
    theRequest.name = url.split('#/')[1]
  }
  return theRequest
}
/*
 *  {token: 1111, userId: 111} 将参数拼接 token=111&userId=111
 */
export const SortParams = data => {
  let param = ''
  for (let i in data) {
    if (param) {
      param += `&${i}=${data[i]}`
    } else {
      param += `${i}=${data[i]}`
    }
  }
  return param
}

// 判断当前屏幕是横屏还是竖屏 true是横屏, false是竖屏
export const orientationFn = () => {
  if (window.orientation === 90 || window.orientation === -90) {
    return true
  } else if (window.orientation === 0 || window.orientation === 180) {
    return false
  }
}

export const currenSystem = () => {
  const userAgentInfo = navigator.userAgent
  var ua = navigator.userAgent.toLowerCase()
  let currenSystemObj = {
    deviceType: '', // 是移动端还是iPad还是PC
    browserName: '未知', // 浏览器名字
    browserVer: '', // 浏览器版本号
    browserVerNum: -1, // 浏览器版本数字
    system: '', // 系统名字
    systemVer: '', // 系统版本号
    systemVerNum: -1, // 系统版本数字
    isSystem: 1 // 系统是否符合要求 1：符合 0：不符合
  }
  var re = /(msie|firefox|chrome|opera|version|crios|se).*?([\d.]+)/
  var m = ua.match(re)
  // 判断 浏览器版本
  if (m) {
    currenSystemObj.browserVer = m[2]
    currenSystemObj.browserVerNum = Number(m[2].split('.')[0])
  }
  // const screenWidth = window.screen.width
  // const screenHeight = window.screen.height
  // let screenScale = 0
  // if (screenWidth > screenHeight) {
  //   screenScale = Math.floor(screenWidth / screenHeight * 100) / 100
  // } else {
  //   screenScale = Math.floor(screenHeight / screenWidth * 100) / 100
  // }
  // if (userAgentInfo.indexOf('Android') !== -1 && screenScale >= 1.5) {
  //   currenSystemObj.deviceType = 'mobliePhone'
  // } else if (userAgentInfo.indexOf('Android') !== -1 && screenScale < 1.5) {
  //   currenSystemObj.deviceType = 'aPad'
  // }
  // 判断 是移动端还是iPad还是PC
  if (userAgentInfo.indexOf('Android') !== -1) {
    currenSystemObj.deviceType = 'Android'
  } else if (userAgentInfo.indexOf('iPhone') !== -1) {
    currenSystemObj.deviceType = 'mobliePhone'
  } else if (userAgentInfo.indexOf('iPad') !== -1) {
    currenSystemObj.deviceType = 'iPad'
    // 判断 系统版本
    if (ua.indexOf('cpu os') !== -1) {
      currenSystemObj.systemVer = ua.split('cpu os')[1].split('_')[0]
      currenSystemObj.systemVerNum = Number(ua.split('cpu os')[1].split('_')[0])
    }
  } else {
    currenSystemObj.deviceType = 'PC'
  }
  // 判断 系统
  if (userAgentInfo.indexOf('Windows NT 10.0') !== -1 || userAgentInfo.indexOf('Windows 10') > -1) {
    currenSystemObj.system = 'Windows 10'
    currenSystemObj.isSystem = 1
  } else if (userAgentInfo.indexOf('Windows NT 6.3') !== -1 || userAgentInfo.indexOf('Windows 8.1') > -1) {
    currenSystemObj.system = 'Windows 8.1'
    currenSystemObj.isSystem = 1
  } else if (userAgentInfo.indexOf('Windows NT 6.2') !== -1 || userAgentInfo.indexOf('Windows 8') > -1) {
    currenSystemObj.system = 'Windows 8'
    currenSystemObj.isSystem = 1
  } else if (userAgentInfo.indexOf('Windows NT 6.1') !== -1 || userAgentInfo.indexOf('Windows 7') > -1) {
    currenSystemObj.system = 'Windows 7'
    currenSystemObj.isSystem = 1
  } else if (userAgentInfo.indexOf('Windows NT 6.0') !== -1 || userAgentInfo.indexOf('Windows Vista') > -1) {
    currenSystemObj.system = 'Windows Vista'
    currenSystemObj.isSystem = 0
  } else if (userAgentInfo.indexOf('Windows NT 5.2') !== -1 || userAgentInfo.indexOf('Windows 2003') > -1) {
    currenSystemObj.system = 'Windows 2003'
    currenSystemObj.isSystem = 0
  } else if (userAgentInfo.indexOf('Windows NT 5.1') !== -1 || userAgentInfo.indexOf('Windows XP') > -1) {
    currenSystemObj.system = 'Windows XP'
    currenSystemObj.isSystem = 0
  } else if (userAgentInfo.indexOf('Windows NT 5.0') !== -1 || userAgentInfo.indexOf('Windows 2000') > -1) {
    currenSystemObj.system = 'Windows 2000'
    currenSystemObj.isSystem = 0
  } else if (ua.indexOf('mac os x') !== -1) {
    currenSystemObj.system = 'Mac OS X'
    currenSystemObj.isSystem = 1
  } else {
    currenSystemObj.system = '未知'
    currenSystemObj.isSystem = 1
  }
  // 判断浏览器
  if (ua.indexOf('ubrowser') !== -1) {
    currenSystemObj.browserName = 'UC'
  } else if (ua.indexOf('2345Explorer') !== -1) {
    currenSystemObj.browserName = '2345浏览器'
  } else if (ua.indexOf('baidu') !== -1) {
    currenSystemObj.browserName = '百度'
  } else if (ua.indexOf('liebao') !== -1) {
    currenSystemObj.browserName = '猎豹'
  } else if (ua.indexOf('micromessenger') !== -1) {
    currenSystemObj.browserName = '微信'
  } else if (ua.indexOf('se') !== -1) {
    currenSystemObj.browserName = '搜狗'
  } else if (ua.indexOf('firefoc') !== -1) {
    currenSystemObj.browserName = 'Firefox'
  } else if (ua.indexOf('qqbrowser') !== -1) {
    currenSystemObj.browserName = 'QQBrowser'
  } else if (ua.indexOf('opr') !== -1) {
    currenSystemObj.browserName = 'Opera'
  } else if ((ua.indexOf('chrome') !== -1 && window.chrome) || ua.indexOf('crios') !== -1) {
    currenSystemObj.browserName = 'Chrome'
  } else if (ua.indexOf('safari') !== -1) {
    currenSystemObj.browserName = 'Safari'
  } else if (window.ActiveXObject !== undefined && ua.indexOf('msie') !== -1) {
    currenSystemObj.browserName = 'IE'
  }
  return currenSystemObj
}

// 判断当前是不是PC
export const isPC = () => {
  const userAgentInfo = navigator.userAgent
  const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  let flag = true
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}

// 针对移动端小屏幕 加mate标签适配
export const setMeta = () => {
  if (window.screen.width <= 850 && window.screen.width >= 600) {
    let oMeta = document.createElement('meta')
    oMeta.content = 'width=device-width, initial-scale=0.75, maximum-scale=0.75,minimum-scale=0.75, user-scalable=0'
    oMeta.name = 'viewport'
    document.getElementsByTagName('head')[0].appendChild(oMeta)
  } else if (window.screen.width < 600) {
    let oMeta = document.createElement('meta')
    oMeta.content = 'width=device-width, initial-scale=0.4, maximum-scale=0.4,minimum-scale=0.4, user-scalable=0'
    oMeta.name = 'viewport'
    document.getElementsByTagName('head')[0].appendChild(oMeta)
  }
}
