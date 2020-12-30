/**
 * @Description:主模块
 * @author xiangdong
 * @date 2020/12/30
*/

import {UserInfo} from '../utils/Interface'
const UserInfo:UserInfo={
  name:'小米'
}
export default {
  namespace:'index',
  state:{
    userInfo:UserInfo
  },
  reducers:{
    handleSetUserInfo(state,{payload:data}){
        return {
          ...state.userInfo,
          name:data
        }
    }
  },
  effects:{

  },

}
