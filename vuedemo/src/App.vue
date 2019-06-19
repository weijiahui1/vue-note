<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import { getStudentInfoApi } from './libs/api'
export default {
  name: 'app',
  async created () {
    // console.log(this.$route)
    // let wxInfo = await getTokenByCodeApi()
    // console.log(wxInfo)
    // let res = await getStudentInfoApi()
    // console.log(res)
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
}
</style>
