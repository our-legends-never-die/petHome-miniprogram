// @ts-ignore
import React from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import {connect} from "react-redux";
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'
import {IndexState,IndexProps} from './index.Interface'

@connect(({index={}}) => ({
  index
}))
 export default class Index extends React.Component<IndexProps,IndexState> {
  state:IndexState;
  props:IndexProps
  constructor(props:IndexProps) {
    super(props);
    this.state={

    }
  }
  componentWillMount () { }

  componentDidMount () {
    console.log("props",this.props)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>

      </View>
    )
  }
}



