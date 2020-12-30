export default {
  pages: [
    'pages/index/index',
    'pages/square/square',
    'pages/message/message'
  ],
  tabBar:{
    list: [
      {
      // iconPath: 'resource/latest.png',
      // selectedIconPath: 'resource/lastest_on.png',
      pagePath: 'pages/index/index',
      text: '发布'
    },
      {
      // iconPath: 'resource/hotest.png',
      // selectedIconPath: 'resource/hotest_on.png',
      pagePath: 'pages/square/square',
      text: '广场'
    },
      {
        // iconPath: 'resource/hotest.png',
        // selectedIconPath: 'resource/hotest_on.png',
        pagePath: 'pages/message/message',
        text: '消息'
      },
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '萌宠回家',
    navigationBarTextStyle: 'black'
  }
}
