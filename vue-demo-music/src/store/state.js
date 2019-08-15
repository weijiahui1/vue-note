import {playMode} from 'common/js/config'
/**
 * singer: 歌手基本信息
 * playing: 播放与否
 * fullScreen：全屏播放与否
 * playlist: 播放列表
 * sequenceList: 顺序播放列表
 * mode: 播放模式
 * currentIndex: 当前播放的歌曲索引
**/
const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1
}
export default state