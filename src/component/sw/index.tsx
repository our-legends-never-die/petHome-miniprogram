// @ts-ignore
import React from "react";
import { Swiper, SwiperItem,View } from '@tarojs/components'
// @ts-ignore
import style from './index.module.scss'
const config={
  vertical:false,
  circular:true,
  indicatorDots:true,
  autoplay:true,
  indicatorColor:'#999',
  indicatorActiveColor:'#333'
}
export default class Index extends React.Component{
  constructor() {
    super();
  }
  render() {
    return (
      <Swiper
        className={style.sw}
        {...config}
        >
        {[...new Array(3)].map((item,index) => {
          const _class=`demoText${index+1}`;
          return (
            <SwiperItem>
              <View className={style[_class]}
                key={index}
              >{index}</View>
            </SwiperItem>
          )
        })}

      </Swiper>
    )
  }
}
