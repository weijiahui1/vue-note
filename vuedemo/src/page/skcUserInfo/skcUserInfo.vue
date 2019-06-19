<template>
  <div class="SkcUserInfo">
    <div class="title">请完善个人信息</div>
    <div class="fromWrapper">
      <mt-field label="" placeholder="请输入您的姓名" v-model="username"></mt-field>
      <div class="line"></div>
      <mt-field label="" placeholder="请输入您的手机号" v-model="phone"></mt-field>
      <div class="line"></div>
      <mt-field label="" placeholder="请输入您的学校或单位" v-model="school"></mt-field>
      <div class="line"></div>
      <div class="cityWrapper">
        <div class="cityName">地区</div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import './skcUserInfo.less'
export default {
  name: "SkcUserInfo",
  data() {
    return {
      username: '',
      phone: '',
      school: ''
    }
  },
  created () {
  }
}
</script>
