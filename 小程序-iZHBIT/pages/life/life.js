var util = require("../../util.js");
Page({
  data: {
    userName: "关丝予",
    cardNumber: 170201106232
  },
  goToCardPage: function (para) {
    wx.navigateTo({
      url: "../card/cardIndex",
    })

  },
  goPage:function(e){//跳转页面
    var link = e.currentTarget.dataset.link;
    wx.navigateTo({
      url: link
    })
  },
  onLoad: function() {
    wx.getSystemInfo({
      success(res) {
        util.drawNavigation(res);
      }
    })
    

  }
  
})