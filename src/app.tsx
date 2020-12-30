import React,{ Component } from 'react'
import './app.scss'
import {Provider} from 'react-redux';
import dva from "./utils/dva";
import {InitialState} from './utils/Interface';
import models from './models/index'
const initialState:InitialState={};
const dvaApp=dva.createApp({
  initialState,
  models:models
})
const store=dvaApp.getStore();//获取到实例
console.log("store",store)
class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return (
      <Provider store={store} >
        {this.props.children }
      </Provider>
    )
  }
}

export default App
