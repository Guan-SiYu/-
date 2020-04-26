var util = require("../../util.js");
Page({
  data: {
    lectureList: [
      {
        "name": "广东凉茶神通广大",
        "time": "2018-2019-10",
        "result": 1
      },
      {
        "name": "广东凉茶神通广大",
        "time": "2018-2019-10",
        "result": 0
      }, {
        "name": "广东凉茶神通广大",
        "time": "2018-2019-10",
        "result": 0
      }, {
        "name": "广东凉茶神通广大",
        "time": "2018-2019-10",
        "result": 1
      }, {
        "name": "广东凉茶神通广大",
        "time": "2018-2019-10",
        "result": 0
      }
    ]
  },//data End
  
  
  onLoad: function (options) {//画波浪
    wx.getSystemInfo({
      success(res) {
        util.drawNavigation(res);
      }
    });
    
  },
  

  backHomePage: function () {//返回主页
    wx.navigateBack({
      delta: 1
    })
  }

})