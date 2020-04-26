var util = require("../../util.js");
// var touchDot = 0;//触摸时的原点

// var time = 0;// 时间记录，用于滑动时且时间小于1s则执行左右滑动

// var interval = "";// 记录/清理 时间记录

// var nth = 0;// 设置活动菜单的index

// var nthMax = 5;//活动菜单的最大个数

// var tmpFlag = true;// 判断左右华东超出菜单最大值时不再执行滑动事件

Page({
  data:{
    width:''
  },
  onLoad: function () {
    wx.getSystemInfo({
      success(res) { 
        util.drawNavigation(res);
      }
    })

  },
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  

  
  /* 触摸开始事件

  touchStart: function (e) {

    touchDot = e.touches[0].pageX; // 获取触摸时的原点

    // 使用js计时器记录时间  

    interval = setInterval(function () {

      time++;

    }, 100);

  },

  // 触摸移动事件

  touchMove: function (e) {

    var touchMove = e.touches[0].pageX;

    console.log("touchMove:" + touchMove + " touchDot:" + touchDot + " diff:" + (touchMove - touchDot));
    // 向右滑动

    if (touchMove - touchDot >= 40 && time < 10){
      wx.navigateBack({
        delta:1
      })
    } 
    },
    touchEnd:function(){
      clearInterval(interval);
      time = 0;
      tmpFlag = true;
    },*/
  backHomePage: function () {//返回
    wx.navigateBack({
      delta: 1
    })
  }
    

});
