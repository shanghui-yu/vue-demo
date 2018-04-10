import fetch from './ajax'

export const DEBUG = false                  // 是否开发模式
const HTTP_DEV = 'https://didi.360che.com/nearby-api'      // 测试地址
const HTTPS = 'https://nearby-api.360che.com'              // 正式地址
const URLS = DEBUG ? HTTP_DEV : HTTPS

class XHR {
  // 商家入驻
  artcleDetail (json) {  // 文章详情
    return fetch({
      url: `https://wxcms-api.360che.com/api/app/apparticle/getarticle`,
      body: json,
      type: 'GET'
    })
  }
}
export default new XHR()
