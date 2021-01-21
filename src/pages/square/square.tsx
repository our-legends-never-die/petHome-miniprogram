// @ts-ignore
import React from "react";
import {IndexProps, IndexState} from "./square.Interface";
import {Text,View} from "@tarojs/components";
import Sw from '../../component/sw/index'
export default class Index extends React.Component<IndexProps, IndexState>{
  render() {
    return (
      <View>
        <Sw/>
      </View>

    )
  }
}
