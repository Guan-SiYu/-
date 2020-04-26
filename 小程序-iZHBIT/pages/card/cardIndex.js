var util = require("../../util.js");
Page({
  data: {
    info:[
      ["学号","170201106232"],
      ["姓名","无迪可艾.美得布型.关"],
      ["卡号","666666666666666"],
      ["手机号","15626948117"],
      ["状态","正常"],
    ]
     
  },//dataEnd



  goToCardPage:function(para){
    wx.navigateTo({//去捡卡页面
      url: "card",
    })
  },
  
  onLoad: function (options) {
    wx.getSystemInfo({//画波浪
      success(res) {
        util.drawNavigation(res);
      }
    })
  },
  backHomePage: function () {//返回主页
    wx.navigateBack({
      delta: 1
    })
  }
})