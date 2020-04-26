var util = require("../../util.js");

Page({


  data: {

  },

  goPage: function (e) {//跳转页面
    var link = e.currentTarget.dataset.link;
    wx.navigateTo({
      url: link
    })
  },
  onLoad: function (options) {
    wx.getSystemInfo({
      success(res) {
        util.drawNavigation(res);
      }
    })
  },

})