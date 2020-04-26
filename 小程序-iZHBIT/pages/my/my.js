var util = require("../../util.js");
var demo = require("../../demo.js");


const allCourse = demo.classCols;//整周课表数据
const start = demo.start; //termStartDate

Page({
  data: {
    startTermDate:"2019-9-5",
    allCourse:allCourse,
    userName: "关丝予",
    homework: ["撩妹技术原理", "命运与风水概论", "发家致富学"],
  },//data End
 
  onLoad: function(res) {//画波浪

  
    wx.getSystemInfo({
      success(res) {
        util.drawNavigation(res.windowWidth);
      }
    });
    
  },
  consoleData:function(e){//测试
    console.log(e.currentTarget.dataset.info);
  }

})