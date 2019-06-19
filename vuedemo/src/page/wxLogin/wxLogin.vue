<template>
  <div class="wxLogin">
    <div>wxLogin</div>
    {{ pageName }}
  </div>
</template>

<script>
import { getTokenByCodeApi, userRegistApi } from '../../libs/api'
// import configData from '../../libs/conf'
import {getUrlParam} from '../../libs/util'
import { Toast } from 'mint-ui'
// let { GAPPID } = configData
export default {
  name: 'wxLogin',
  data() {
    return {
      pageName: 'wxLogin'
    }
  },
  async created () {
    Toast('授权登录中...')
    alert(JSON.stringify(getUrlParam()))
    let oldToken = sessionStorage.getItem('token')
    let {code} = getUrlParam()
    if (code && !oldToken) {
      let codeData = await getTokenByCodeApi(code)
      alert(`getTokenByCodeApi接口返回： ${JSON.stringify(codeData)}`)
      if (codeData) {
        console.log(codeData)
        let { UnionId, AccessToken, OpenId } = codeData.data
        sessionStorage.setItem('openId', OpenId)
        let userData = await userRegistApi(UnionId, AccessToken, OpenId)
        alert(`userRegistApi接口返回： ${JSON.stringify(userData)}`)
        if (userData) {
          console.log(userData)
          sessionStorage.setItem('token',  userData.data)
          alert('本地存储token了')
          alert(sessionStorage.getItem('oldUrl'))
          this.$router.push({
            name: "knowledgegame"
          })
          if (sessionStorage.getItem('oldUrl')) {
            window.location.href = sessionStorage.getItem('oldUrl')
            sessionStorage.removeItem('oldUrl')
          }
        }
      }
    }
  }
}
</script>
