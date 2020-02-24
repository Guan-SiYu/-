/*单词：
velocity速度;
canvas画布;
random随机;
floor最低的;
radius半径;
*/

// 设定画布
const canvas = document.getElementById("canvas");//选定canvas对象
const ctx = canvas.getContext('2d');//获得一个2d绘画环境
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// 生成两个数之间的随机整数的函数
function randomNumber(min,max) {
    return Math.floor(Math.random()*(max-min)) + min;//floor()把小数点抹掉

}
// 生成随机颜色的函数
function randomColor() {
  return'rgb('+randomNumber(0, 255)+','+randomNumber(0, 255)+','+randomNumber(0,255)+')';
}
//小球构造器
function Ball(x, y, Xmove, Ymove, color, radius) {
    //小球圆心位置坐标，原点在浏览器左上定点
    this.x = x;
    this.y = y;
    //小球每次移动的长度
    this.Xmove = Xmove;
    this.Ymove = Ymove;
    //小球颜色和小球半径
    this.color = color;
    this.radius = radius;
}
Ball.prototype.draw = function () {//画布上出现小球
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
}
Ball.prototype.update = function () {//小球移动
    if ((this.x + this.radius) >= width) {
        this.Xmove = -(this.Xmove);
    }

    if ((this.x - this.radius) <= 0) {
        this.Xmove = -(this.Xmove);
    }

    if ((this.y + this.radius) >= height) {
        this.Ymove = -(this.Ymove);
    }

    if ((this.y - this.radius) <= 0) {
        this.Ymove = -(this.Ymove);
    }

    this.x += this.Xmove;
    this.y += this.Ymove;
}

Ball.prototype.collisionDetect = function() {//添加碰撞检测
    for (var j = 0; j < balls.length; j++) {
        if (!(this === balls[j])) {
            var dx = this.x - balls[j].x;
            var dy = this.y - balls[j].y;
            var distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.radius + balls[j].radius) {
                balls[j].color = this.color = randomColor();
            }
        }
    }
}


//让球动起来
var balls = [];
function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);

    while (balls.length < 25) {
        var ball = new Ball(randomNumber(0,width), randomNumber(0,height), randomNumber(-7,7), randomNumber(-7,7), randomColor(), randomNumber(10,20));
        balls.push(ball);
    }

    for (var i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();
    }
    requestAnimationFrame(loop);
}
loop();

