var util = require("../../util.js");

Page({
  data:{
    days:[],
    list:['周次',' ','一','二','三','四','五','六','七','八','九','十','十一','十二','十三','十四','十五','十六','十七','十八','十九'],
    holiday:'寒假',
    weekArr: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
    extraText:"①教学运行19周\n②2016级、2017级、2018级学生9月7日至8日注册，9日开始上课。\n③2019级学生9月5日至6日报到注册，9日开始上课\n④补考在9月11日至17日进行⑤中秋节放假安排：9月13日至15日",
  },
  markWeekend:function(){
    var query = wx.createSelectorQuery();
      query.selectAll('.day').boundingClientRect(function(rect){
      rect.width;
    }).exec();
    

  },
  pushDaytolist:function(){
    var that = this;
    var list = util.pushDaytolist();
    that.setData({
      days:list
    })
  },
  onLoad:function(){
    wx.getSystemInfo({
      success: function(res) {
        util.drawNavigation(res);
      },
    })
    this.pushDaytolist();
    this.markWeekend();
    
  }
})