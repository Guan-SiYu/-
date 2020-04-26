//数组格式化
function formatArr(arr, sliceSize) {
  let sliceNumber = arr.length % sliceSize == 0 ? arr.length / sliceSize : Math.floor((arr.length / sliceSize) + 1);
  let newArr = [];
  for (var i = 0; i < sliceNumber; i++) {
    let slice = arr.slice(i * sliceSize, i * sliceSize + sliceSize);
    newArr.push(slice);
  }
  return newArr;
}
//判断闰年
function isLeapYear(currentYear) {
  if ((currentYear % 100 != 0 && currentYear % 4 == 0) || (currentYear % 100 == 0 && currentYear % 400 == 0)) {
    return true;
  } else {
    return false;
  }
}
/*---------日历------------*/
var markStart = [2019, 8, 6]; //传入要显示的第一个日期
var startYear = markStart[0],
  startMonth = markStart[1],
  startDate = markStart[2];
var idate = new Date();
idate.setDate(startDate);
idate.setFullYear(startYear);
idate.setMonth(startMonth - 1);
var startWeek = idate.getDay();
var date = new Date();

var dayBox = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
isLeapYear(startYear) ? dayBox[1] = 29 : dayBox[1] = 28;
//日历数据
function pushDaytolist() {
  var length = 0;
  var show = [];
  //开学头月
  var beginMonth = [];
  if (startWeek == 0) {
    startWeek = 7;
  }
  var cell = 7 * 25; //总格数
  for (var x = 0; x < startWeek - 1; x++) {
    beginMonth.push('');
    length++;
  }
  for (var n = startDate; n <= dayBox[startMonth - 1]; n++) {
    beginMonth.push(n);
    length++;
  }
  show.push(beginMonth);
  //开学第二个月到12月
  var flag = 1;

  for (var i = startMonth; i < 12; i++) {
    show.push([]);
    show[flag].push(i + 1 + '月'); //处理第一天
    length++;
    for (var j = 2; j <= dayBox[i]; j++) {
      show[flag].push(j);
      length++;
      if (length >= cell) break;
    }
    if (length >= cell) break;
    flag++;
  }
  //第二年
  for (var a = 0; a < 12; a++) {
    if (length >= cell) break;
    show.push([]);
    switch (a) { //处理第一天
      case 0:
        show[flag].push('元旦');
        length++;
        break;
      case 5:
        show[flag].push('五一');
        length++;
        break;
      default:
        show[flag].push(a + 1 + '月');
        length++;
    } //我太难了 这个函数真尼玛长 咋优化啊
    for (var b = 2; b <= dayBox[a]; b++) {
      if (length >= cell) break;
      show[flag].push(b);
      length++;
    }
    if (length >= cell) break;
    flag++;
  }

  var days = [].concat.apply([], show); //二维数组转一维数组
  var formatDays = formatArr(days, 7);
  return formatDays;
}

// 判断当前第几周
function currentWeek(startTermDate) {
  var ONEDAY = 24 * 60 * 60 * 1000,
    WEEKLEN = 7;
  var start = new Date(startTermDate.replace('-', '/')); // new Date //set 0:0:0
  var startWeek = start.getDay() == 0 ? 7 : start.getDay(); //开学当天星期几

  var today = new Date(); //new Date();
  today = new Date(today.getFullYear(), today.getMonth(), today.getDate()); //set 0:0:0

  var distance = (today - start) / ONEDAY + 1;
  distance = startWeek != 1 ? distance - (WEEKLEN - startWeek) - 1 : distance; //去除开学不是星期一的那几天

  var result = Math.floor(distance / WEEKLEN) + 1;
  return result;
}


//波浪Navigation
function drawNavigation(windowWidth) {


  //《瞎蒙波浪》杰作 -----毕加索.巴勃罗关


  var ctx = wx.createCanvasContext('navigation');
  // 
  //画布属性设置
  var width = windowWidth;
  var h = 80;
  var waves = {
    A: 11,
    fi: -8,
    omg: 0.025,
    k: 60,
    colorStart: "rgba(157,192,249, 0.8)",
    colorEnd: "rgba(0,168,255, 0.2)"
  };
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, h);
  for (var x = 0; x < width; x += 0.1) { //波浪
    var y = waves.A * Math.sin(waves.omg * x + waves.fi) + waves.k;
    ctx.lineTo(x, y); //(x,y)
  }
  ctx.lineTo(width, 0);
  ctx.lineTo(0, 0);
  //add color
  const grd = ctx.createLinearGradient(0, 0, width, 0);
  grd.addColorStop(0, '#0076ff')
  grd.addColorStop(1, 'rgb(0,197,255)')
  ctx.setFillStyle(grd)
  ctx.fill()
  ctx.draw()
}
module.exports = {
  pushDaytolist: pushDaytolist,
  drawNavigation: drawNavigation,
  currentWeek: currentWeek
}