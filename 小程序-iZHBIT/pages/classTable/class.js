var util = require("../../util.js");

//页面加载数据
Page({
  data: {
    classCols: [
      //  列1
      [{
          "courseName": "脱贫与发家致富原理",
          "courseLocation": "ME888",
          "courseTime": "[01-02节]",
        },
        {
          "courseName": "撩妹理论与实践基础",
          "courseLocation": "HI520",
          "courseTime": "[03-04-05节]",

        },
        {
          "courseName": "撩妹理论与实践基础",
          "courseLocation": "HI520",
          "courseTime": "[03-04-05节]",
        },
        {

        },
        {
          "courseName": "通选-广东美食品鉴",
          "courseLocation": "xiangdemei",
          "courseTime": "[09-10节]"
        },
        {
          "courseName": "命运与风水概论",
          "courseLocation": "MC666",
          "courseTime": "[11-12-13-14节]"

        },
        {
          "courseName": "命运与风水概论",
          "courseLocation": "MC666",
          "courseTime": "[11-12-13-14节]"
        }
      ],
      //  列2
      [{

        },
        {

        },
        {
          "courseName": "体育2B（闭目养神）",
          "courseLocation": "学生宿舍",
          "courseTime": "[05-06节]"

        },
        {
          "courseName": "驱蚊技术实践",
          "courseLocation": "弘毅楼草坪",
          "courseTime": "[07-08节]"
        },
        {
          "courseName": "命运与风水概论",
          "courseLocation": "MC666",
          "courseTime": "[09-10-11-12节]"

        },
        {
          "courseName": "命运与风水概论",
          "courseLocation": "MC666",
          "courseTime": "[09-10-11-12节]"
        },
        {
          "courseName": "颈椎按摩与推拿",
          "courseLocation": "HH504",
          "courseTime": "[13-14节]"
        }
      ],//列2结束


    ],//单周课程结束
    startTermDate: "2019-9-5",//开学日期 
    showPop:false,
    popInfo:""
  },//data End
  
  bindPickerChange: function (e) {//选择周数
    console.log(e)
    this.setData({
      index: e.detail.value
    })
    //需重新传入当周课表
  },






  onLoad: function() {

    wx.getSystemInfo({
      success(res) {
        util.drawNavigation(res);
      }
    });
    
  },
  showPopUps: function (e) {//打开小窗
    var that = this;
    var popInfo= e.currentTarget.dataset.info;
    console.log(popInfo);
    that.setData({
      popInfo:popInfo,
      showPop:true
    })
    
  },
  closePop: function (e) {//关闭小窗
    this.setData({
      showPop: false
    })
  }


})

