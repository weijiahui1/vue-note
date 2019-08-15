export default class Singer {
  constructor({ id, name, mid }) {
    this.id = id
    this.name = name
    this.mid = mid
    this.avatar = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${mid}.jpg?max_age=2592000`
  }
}
// https://y.gtimg.cn/music/photo_new/T001R300x300M000002J4UUk29y8BY.jpg?max_age=2592000
// https://y.gtimg.cn/music/photo_new/T001R300x300M000002LZVMH0zc8F4.jpg?max_age=2592000