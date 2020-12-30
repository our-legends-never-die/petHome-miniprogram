/**
 * @Description:数据管理
 * @author xiangdong
 * @date 2020/12/30
 */
import {create} from 'dva-core';
import createLoading from 'dva-loading';
import {DvaOpt} from './Interface'

let app;
let store: { dispatch: any };
let dispatch: any;
let registered: boolean = false;

function createApp(opt: DvaOpt) {
  app = create(opt);//实例化dva
  app.use(createLoading({}));//使用插
  if (!registered) opt.models.forEach(model => app.model(model));//注入模块
  registered = true;
  app.start();//启动仓库
  store = app._store;// //获取私有属性 也是我们的状态管理仓库
  app.getStore = () => store;//返回整个状态的函数
  dispatch = store.dispatch;
  app.dispatch = dispatch;
  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  },
  getStore() {
    return app.getStore()
  }
};
