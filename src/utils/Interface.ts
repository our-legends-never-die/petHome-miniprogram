/**
 * @Description:封装全局统一接口
 * @author xiangdong
 * @date 2020/12/30
 */

/**
 * dva初始化接口和数据
 */
export interface InitialState {
  [propName: string]: any
}

/**
 * 初始化dva配置
 */
export interface DvaOpt {
  models: any[],
  initialState: InitialState
}

/**
 * 用户信息
 */
export interface UserInfo {
  name: string
}
