<template lang="html">
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot>
      </slot>
    </div>
    <div class="dots">
      <span v-bind:class="{active: currentPageIndex === index}" class="dot" v-bind:key='index' v-for= '(item, index) in dots'>
      </span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {addClass} from 'common/js/dom'
import BScroll from 'better-scroll'

export default {
  data() {
    return {
      dots: [],
      currentPageIndex: 0
    }
  },
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  mounted() {
    // 20毫秒延迟
    setTimeout(() => {
      this._setSliderWidth()
      this._initDots()
      this._initSlider()
      if (this.autoPlay) {
        this._play()
      }
    }, 20)

    // 监听窗口改变：
    window.addEventListener('resize', () => {
      if (!this.slider) {
        return
      }
      this._setSliderWidth(true)
      // refresh() 重新刷新
      this.slider.refresh()
    })
  },
  methods: {
    // 初始化 slider 的宽度
    _setSliderWidth(isResize) {
      this.children = this.$refs.sliderGroup.children
      let width = 0
      let sliderWidth = this.$refs.slider.clientWidth
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        addClass(child, 'slider-item')
        child.style.width = `${sliderWidth}px`
        width += sliderWidth
      }
      if (this.loop && !isResize) {
        width += 2 * sliderWidth
      }
      this.$refs.sliderGroup.style.width = `${width}px`
    },
    // 初始化 dot
    _initDots() {
      this.dots = new Array(this.children.length)
    },
    // 初始化 slider 的BScroll 的配置项
    _initSlider() {
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: true,
        snapLoop: this.loop,
        snapThreshold: 0.3,
        snapSpeed: 400
      })
      // 手动滑动：当滚动结束的时候，切换到下一张，getCurrentPage()获取当前pageX 就是pageIndex
      this.slider.on('scrollEnd', () => {
        let pageIndex = this.slider.getCurrentPage().pageX
        if (this.loop) {
          pageIndex -= 1
        }
        this.currentPageIndex = pageIndex
        if (this.autoPlay) {
          clearTimeout(this.timer)
          this._play()
        }
      })
    },
    // 自动轮播：更改currentPageIndex 改变dots的选中点 goToPage()
    _play() {
      let pageIndex = this.currentPageIndex + 1
      if (this.loop) {
        pageIndex += 1
      }
      this.timer = setTimeout(() => {
        this.slider.goToPage(pageIndex, 0, 400)
      }, this.interval)
    }
  },
  destroyed() {
    // do something after destroying vue instance
    clearTimeout(this.timer)
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable'
@import '../../common/stylus/mixin'

.slider
  min-height: 1px
  position: relative
  .slider-group
    position: relative
    overflow: hidden
    white-space: nowrap
    .slider-item
      float: left
      box-sizing: border-box
      overflow: hidden
      text-align: center
      a
        display: block
        width: 100%
        overflow: hidden
        text-decoration: none
      img
        display: block
        width: 100%
  .dots
    position: absolute
    right: 0
    left: 0
    bottom: 12px
    text-align: center
    font-size: 0
    .dot
      display: inline-block
      margin: 0 4px
      width: 8px
      height: 8px
      border-radius: 50%
      background-color: $color-text-l
      &.active
        width: 20px
        border-radius: 5px
        background-color: $color-text-ll
</style>
