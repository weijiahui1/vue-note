<template>
  <div class="knowledgeGame">
    <div>knowledgeGame</div>
    {{ pageName }}
    <mt-header fixed title="fixed top"></mt-header>
  </div>
</template>

<script>
export default {
  name: "knowledgeGame",
  data() {
    return {
      pageName: "knowledgeGame"
    }
  },
  created () {
    this.$toast('授权登录中...')
  }
}
</script>
