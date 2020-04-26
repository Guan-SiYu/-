var util = require("../../util.js");


Page({
  data: {
    examList: [{
      name: "挖掘机技术",
      room: "MB666",
      sit: "38",
      date: "2019-11-09",
      time: "11:00-15:35"
    },
    {
      name: "自拍美颜处理",
      room: "MB402",
      sit: "52",
      date: "2019-11-09",
      time: "8:21-10:35"
    },
    {
      name: "王者荣耀",
      room: "MB208",
      sit: "52",
      date: "2019-10-20",
      time: "13:00-15:35"
    },
    {
      name: "眼保健操",
      room: "MB402",
      sit: "52",
      date: "2019-10-28",
      time: "10:00-15:35"
    },
    {
      name: "表情包运用扩展",
      room: "MB402",
      sit: "52",
      date: "2019-11-24",
      time: "16:00-15:35"
    },
    {
      name: "土味骚话写作",
      room: "MB402",
      sit: "52",
      date: "2019-11-24",
      time: "12:12-14:35"
    },
    ]
  }, //data End
  onLoad: function() {
    wx.getSystemInfo({//画波浪
      success: function(res) {
        util.drawNavigation(res);
      },
    })
  },
  backHomePage: function () {//返回主页
    wx.navigateBack({
      delta: 1
    })
  },
  consoleData:function(e){//测试
    console.log(e.currentTarget.dataset.info);
  }
  
})