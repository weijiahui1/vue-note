<template lang="html">
  <div class="recommend">
    <Scroll ref="scroll" class="recommend-content" v-bind:data="hotsSongList">
      <div>
        <div class="slider-wrapper" v-if='recommends.length'>
          <slider>
            <div v-bind:key="item.id" v-for = "item in recommends">
              <a v-bind:href = "item.linkUrl">
                <img @load=loadImage v-bind:src = "item.picUrl" alt = "">
              </a>
            </div>
          </slider>
        </div>
        <div class="hostsonglist-wrapper" v-if='hotsSongList.length'>
          <h2>热门歌单</h2>
          <ul>
            <li class="hostsonglist" :key="item.id" v-for = "item in hotsSongList">
                <img v-lazy="item.picUrl" alt="">
                <div class="infordetail" v-show="item.songListDesc && item.songListAuthor">
                  <h4>{{item.songListDesc}}</h4>
                  <p>{{item.songListAuthor}}</p>
                </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!hotsSongList.length">
        <loading></loading>
      </div>
    </Scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import Scroll from '../../base/scroll/scroll'
import Loading from '../../base/loading/loading'
import Slider from '../../base/slider/slider'

import {ERR_OK} from 'api/config'
import {getRecommend, getDiscList} from 'api/recommend'

export default {
  data() {
    return {
      recommends: [],
      hotsSongList: []
    }
  },
  created() {
    this._getRecommend()
    this._getDiscList()
  },
  methods: {
    _getRecommend() {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          console.log(res)
          this.recommends = res.data.slider
          setTimeout(() => {
            this.hotsSongList = res.data.songList
            this.hotsSongList = [...res.data.radioList]
          }, 500)
        }
      })
    },
    _getDiscList() {
      getDiscList().then((res) => {
        if (res.status === 200) {
          console.log(res)
        }
      })
    },
    loadImage() {
      if (!this.checkLoaded) {
        this.$refs.scroll.refresh()
        this.checkLoaded = true
      }
    }
  },
  components: {
    Slider,
    Scroll,
    Loading
  }

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable'
@import '../../common/stylus/mixin'
.recommend
  position: fixed
  width: 100%
  top: 88px
  bottom: 0
  .recommend-content
     height: 100%
     overflow: hidden
    .slider-wrapper
       position: relative
       width: 100%
       overflow: hidden
    .hostsonglist-wrapper
      width: 100%
      height: auto
      h2
        padding-left: 2%
        padding-top: 2%
        color: $color-theme
        font-size: $font-size-medium
        text-align: center
        height: 40px
        line-height: 40px
      ul
        display: flex
        flex-direction: row
        flex-wrap: wrap
        .hostsonglist
          width: 46%
          padding: 2%
          img
            width: 100%
          .infordetail
            padding: 10px
            background-color: #fff
            color: #333
            h4
              width: 100%
              font-size: $font-size-medium
              no-wrap()
            p
              font-size: $font-size-small
              padding-top: 5px
  .loading-container
    position: absolute
    width: 100%
    top: 50%
    transform: translateY(-50%);
</style>
