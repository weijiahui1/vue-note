// 歌曲对象
export default class Song {
  constructor({id, mid, singer, name, album, duration, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }
}

// 工厂方法
export function createSong(musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url: setUrl(musicData.songmid)
  })
}
// http://dl.stream.qqmusic.qq.com/C400000QCwge3B6Ad1.m4a?vkey=1B97F5AA1EB249692B6FA5C5F96AA7B552DF526751DE794915E46882D39408872964D7A9E6286F9D690B335D8F7D2AA0C7CEAC05E28AA7DD&guid=2787797018&uin=0&fromtag=66
// 歌手的拼接
function filterSinger (singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach((s) => {
    ret.push(s.name)
  })
  return ret.join('/')
}

function setUrl (songmid) {
  if (songmid === '000QCwge3B6Ad1') {
    return 'http://dl.stream.qqmusic.qq.com/C400000QCwge3B6Ad1.m4a?vkey=C57BA9B796525E2CD8421309B36B52B23FECB9AA38CE7937B9C0C57994D91B3EF99F991A335FD4434C2E495D530AB4C2DB96DE2529F91E5E&guid=2787797018&uin=0&fromtag=66'
  } else if (songmid === '000fcbn33tw0lQ') {
    return 'http://dl.stream.qqmusic.qq.com/C400000fcbn33tw0lQ.m4a?vkey=9B52E0C22F6E0808120EC1FF933A5848BCE1B0E93E1751FEF9912CA21FE551B5762664E4A721A756B0B8BF3A0DB9A8226C573730E6267879&guid=2787797018&uin=0&fromtag=66'
  } else if (songmid === '003TfyNp47dm7E') {
    return 'http://dl.stream.qqmusic.qq.com/C400003TfyNp47dm7E.m4a?vkey=790EBCFD343CE93300E84673C3AFD5C7D950B0E0B9D45CB1AAAF4D2004F76B02192CED0A15555BCBE21E368E43E7B9BAE17C72B57E6D44C3&guid=2787797018&uin=0&fromtag=66'
  } else if (songmid === '001Qu4I30eVFYb') {
    return 'http://dl.stream.qqmusic.qq.com/C400001Qu4I30eVFYb.m4a?vkey=955EF89BD442395EDCCC0E3409CFB9E68A4059A90219179D591BDABEF855EEF87ABED120D5F86A92599FBD863B8F667428C5948F2CFA0EEA&guid=2787797018&uin=0&fromtag=66'
  } else if (songmid === '004RXylR0adkY1') {
    return 'http://dl.stream.qqmusic.qq.com/C400004RXylR0adkY1.m4a?vkey=B2B347528BFE27A3E69A6CC1254EC728F189AB7E36197C2BEEB051E31F0E230D9902825528147B055D5E1963E7CA34B911CE14E7E33B024D&guid=2787797018&uin=0&fromtag=66'
  } else if (songmid === '000X0zEl3v9hU2') {
    return 'http://dl.stream.qqmusic.qq.com/C4000025bbhu4ZKGnF.m4a?vkey=991F7FD4648B4B8A2A2E90398317C7E020B05BC711B8615F10A6D9F1E5595678EE4B0E0165434C67AF23D9F99D19C69E2DC57CF5A76FD035&guid=2787797018&uin=0&fromtag=66'
  } else {
    return `http://dl.stream.qqmusic.qq.com/C400${songmid}.m4a?vkey=2870BC181B61102DD95633E85A90597F2B6B58FA4AFE65B53D3115B1B3DF9C01EE7880798E5A5BB6981A782E88CFD01BCA25FA3A6414253C&guid=2787797018&uin=0&fromtag=66`
  }
}