var util = require("../../util.js");
Page({
  data: {
    scoreList:[{
        "course": "植发与护发技术",
        "credit": 4,
        "kind": "养生选修类",
        "score": 90,
        "info": {
          "peacetime": 100,
          "peacetimePro": "30%",
          "finalExam": 90,
          "finalExamPro": "70%",
          "total": 90
        }
      },
      {
        "course": "脱单从入门到放弃",
        "credit": 4,
        "kind": "专业必修",
        "score": "良好",
        "info": {
          "peacetime": 100,
          "peacetimePro": "30%",
          "finalExam": 90,
          "finalExamPro": "70%",
          "total": 90
        }
      },
      {
        "course": "离谱数学",
        "credit": 4,
        "kind": "坑爹必修类",
        "score": 90,
        "info": {
          "peacetime": 100,
          "peacetimePro": "30%",
          "finalExam": 90,
          "finalExamPro": "70%",
          "total": 90
        }
      },
      {
        "course": "命运与风水概论",
        "credit": 4,
        "kind": "五迷三道类",
        "score": 90,
        "info": {
          "peacetime": 100,
          "peacetimePro": "30%",
          "finalExam": 90,
          "finalExamPro": "70%",
          "total": 90
        }
      },
      {
        "course": "古今中外美女鉴赏",
        "credit": 4,
        "kind": "网课类",
        "score": 90,
        "info": {
          "peacetime": 100,
          "peacetimePro": "30%",
          "finalExam": 90,
          "finalExamPro": "70%",
          "total": 90
        }
      },
      {
        "course": "暴富后理财方法讲解",
        "credit": 4,
        "kind": "做梦类",
        "score": 90,
        "info": {
          "peacetime": 100,
          "peacetimePro": "30%",
          "finalExam": 90,
          "finalExamPro": "70%",
          "total": 90
        }
      },
    ], //scoreList End,
    showPop: false,//不需要传
    popInfo: "",//不需要传
    GPA: 4.5,//*需要传入绩点
    index: 2,//(选择学期初设置)  *需要传入当前学期
    userGrade:17//*需要传入获取用户的入学年份
  }, //data End
  
  bindPickerChange: function(e) {//切换学年
    this.setData({
      index: e.detail.value
      //需要重新传入scoreList
    })
  },

  onLoad: function() {//画波浪
    wx.getSystemInfo({
      success(res) {
        util.drawNavigation(res);
      }
    })
  },

  showPopUps: function(e) {//打开小窗
    var that = this;
    var currentScoreIndex = e.currentTarget.dataset.index;
    var currentInfo = that.data.scoreList[currentScoreIndex];
    var popInfo = currentInfo;
    this.setData({
      showPop: true,
      popInfo: popInfo
    });
  },
  closePop: function(e) {//关闭小窗
    this.setData({
      showPop: false
    })
  },
  backHomePage:function(){//返回主页
    wx.navigateBack({
      delta:1
    })
  }


})