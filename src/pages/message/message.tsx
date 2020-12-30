// @ts-ignore
import React from "react";
import {IndexProps, IndexState} from "./message.Interface";
import {Text} from "@tarojs/components";

export default class Index extends React.Component<IndexProps, IndexState>{
  render() {
    return (
      <Text>消息界面</Text>
    )
  }
}
