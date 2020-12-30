/**
 * @Description:封装全局请求统一状态码
 * @author xiangdong
 * @date 2020/12/30
*/
import Taro from "@tarojs/cli"

class httpRequest {
  constructor() {

  }

  /**
   *
   * @param url
   * @param data
   */
  handleGet(url:string='',data:object={}):Promise<any>{
    return new Promise((r,j) => {
      Taro.request({
        url,
        method:'GET',
        data,
        dataType:'json',
        success:(res) => {
          r(res)
        },
        fail:(err => {
          j(err)
        })
      })
    })
  }

  /**
   *
   * @param url
   * @param data
   */
  handlePost(url:string='',data:object={}){
    return new Promise((r,j) => {
      Taro.request({
        url,
        method:'POST',
        data,
        dataType:'json',
        header:{
          'content-type':'application/json'
        },
        success:(res) => {
          r(res)
        },
        fail:(err => {
          j(err)
        })
      })
    })
  }
}
