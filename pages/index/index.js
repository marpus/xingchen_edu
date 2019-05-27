//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    nav: [
      {
        url: '#',
        title: '首页',
        target: '#'
      },
      {
        url: '#',
        title: '首页',
        target: '#'
      },
      {
        url: '#',
        title: '首页',
        target: '#'
      },
      {
        url: '#',
        title: '首页',
        target: '#'
      },
      {
        url: '#',
        title: '首页',
        target: '#'
      },
      {
        url: '#',
        title: '首页',
        target: '#'
      }
    ],
    subNav: [
      {
        url: '#',
        title: 'vue',
        target: '#',
        img: '../../imgs/vue.png'
      },
      {
        url: '#',
        title: 'vue',
        target: '#',
        img: '../../imgs/vue.png'
      },
      {
        url: '#',
        title: 'vue',
        target: '#',
        img: '../../imgs/vue.png'
      },
      {
        url: '#',
        title: 'vue',
        target: '#',
        img: '../../imgs/vue.png'
      },
      {
        url: '#',
        title: 'vue',
        target: '#',
        img: '../../imgs/vue.png'
      }
    ],
    banner: [
      {
        img: '../../imgs/banner01.png'
      },
      {
        img: '../../imgs/banner01.png'
      },
      {
        img: '../../imgs/banner01.png'
      },
      {
        img: '../../imgs/banner01.png'
      },
      {
        img: '../../imgs/banner01.png'
      },
      {
        img: '../../imgs/banner01.png'
      }
    ],
    lsessionList: [
      {
        url: '#',
        title: 'textxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        target: '#',
        img: '../../imgs/list01.png'
      },
      {
        url: '#',
        title: 'textxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        target: '#',
        img: '../../imgs/list01.png'
      },
      {
        url: '#',
        title: 'textxxxxxxxxxxxxxxx',
        target: '#',
        img: '../../imgs/list01.png'
      },
      {
        url: '#',
        title: 'textxxxxxx',
        target: '#',
        img: '../../imgs/list01.png'
      },
      {
        url: '#',
        title: 'textxxxxxxxxxxxxxxxxxxxxxx',
        target: '#',
        img: '../../imgs/list01.png'
      },
      {
        url: '#',
        title: 'textxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        target: '#',
        img: '../../imgs/list01.png'
      },
      {
        url: '#',
        title: 'textxxxxxxxxxxxxxxxxx',
        target: '#',
        img: '../../imgs/list01.png'
      }
    ],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
  }
})
