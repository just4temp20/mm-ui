import $ from 'jquery'

// (function(t, $){
function a(t, param) {
  //配置参数
  this.configMap = {
    clockwise: true,  //转动方向
    sections: 6,  //宫格数量（单位：个）
    fixAngle: 5,  //宫格间距（单位：度数）
    duration: 2000,  //转动时间（单位：毫秒）
    minRotate: 3  //转几圈（单位：圈）
  }
  //一些属性和dom
  this.stateMap = {
    rotate3dZ: 1,  //转动方向，与configMap.clockwise联动
    awards: [
      /*{min_angle: 0, max_angle: 60},
      {min_angle: 60, max_angle: 120},
      {min_angle: 120, max_angle: 180},
      {min_angle: 180, max_angle: 240},
      {min_angle: 240, max_angle: 300},
      {min_angle: 300, max_angle: 360}*/

      /*{min_angle: 0, max_angle: 45},
      {min_angle: 45, max_angle: 90},
      {min_angle: 90, max_angle: 135},
      {min_angle: 135, max_angle: 180},
      {min_angle: 180, max_angle: 225},
      {min_angle: 225, max_angle: 270}
      {min_angle: 270, max_angle: 315}
      {min_angle: 315, max_angle: 360}
      */
    ],  //宫格信息，与sections和clockwise联动
    curIndex: 0,  //当前指向宫格index(从0开始）
    disable: !!0,  //按钮锁定
    curAngle: 0  //当前角度
  }

  this.$el = $(t)
  this.init(param)
  this.addEvent()
}

/*------------------内部变量-----------------*/
a.staticMap = {
  dial: '.zw-rotary-dial',
  indicator: '.zw-rotary-indicator',
  btn: '.js-btn',
  disable: 'disable'
}

/*------------------内部函数-----------------*/

//转动方向：clockwise与rotate3dZ联动
function clockwise2rotate3dZ() {
  if (this.configMap.clockwise) {
    this.stateMap.rotate3dZ = 1
  } else {
    this.stateMap.rotate3dZ = -1
  }
}

//宫格数量：sections与awards联动
function sections2awards() {
  let sections = this.configMap.sections
  let n = 360 / sections
  for (let i = 0; i < sections; i++) {
    this.stateMap.awards[i] = {
      min_angle: n * i/*+this.configMap.fixAngle*/,
      max_angle: n * (i + 1)/*-this.configMap.fixAngle*/
    }
  }
  //顺时针的话，要反转数组
  if (this.configMap.clockwise) {
    this.stateMap.awards.reverse()
  }
}

//区间随机数
function random(min, max) {
  var n = max - min + 1
  return Math.floor(Math.random() * n + min)
}

/*------------------对外-----------------*/
a.prototype = {
  //默认属性
  configMapDefault: {
    clockwise: true,  //转动方向
    sections: 6,  //宫格数量（单位：个）
    fixAngle: 5,  //宫格间距（单位：度数）
    duration: 2000,  //转动时间（单位：毫秒）
    minRotate: 3  //转几圈（单位：圈）
  },

  init: function (param) {
    $.extend(this.configMap, this.configMapDefault, param || {})
    var n = a.staticMap
    $.extend(this.stateMap, {
      $btn: this.$(n.btn),
      $dial: this.$(n.dial)
    })
    clockwise2rotate3dZ.call(this)
    sections2awards.call(this)

    this.animate(0, 0)
    this.stateMap.curAngle = 0
  },

  //jquery find功能
  $: function (t) {
    return this.$el.find(t)
  },

  //绑定点击按钮事件
  addEvent: function () {
    // var t = this;
    // t.stateMap;
    // t.$el.on('click.rotary.zwui', a.staticMap.btn, $.proxy(t.gamestart, t))
    this.$el.on('click.rotary.zwui', a.staticMap.btn, () => {
      this.gamestart()
    })
  },

  //开始
  gamestart: function () {
    if (!this.stateMap.disable) {
      //无锁
      this.animate(this.stateMap.curAngle, 0)
      this.disable(!!1)
      // this.$el.trigger('gamestart')
      this.configMap.onStart()
    } else {
      //有锁
    }
  },

  //转动：通过改变样式
  animate: function (angle, duration) {
    // console.log('animate - angle=')
    // console.log(angle)
    var n = void 0 === duration ? this.configMap.duration : duration
    //ww: 加入方向
    var rotate3dZ = this.stateMap.rotate3dZ
    this.stateMap.$dial.css({
      'transform': `rotate3d(0, 0, ${rotate3dZ}, ${angle}deg)`,
      '-webkit-transform': `rotate3d(0, 0, ${rotate3dZ}, ${angle}deg)`,
      '-moz-transform': `rotate3d(0, 0, ${rotate3dZ}, ${angle}deg)`,
      '-o-transform': `rotate3d(0, 0, ${rotate3dZ}, ${angle}deg)`,
      'transition-duration': `${n}ms`,
      '-webkit-transition-duration': `${n}ms`,
      '-moz-transition-duration': `${n}ms`,
      '-o-transition-duration': `${n}ms`,
      'transition-timing-function': 'ease-in-out'  //慢速开始和结束，中间先加速后减速
    })

    this.stateMap.curAngle = angle % 360
  },

  //加锁按钮
  disable: function (t) {
    var i = a.staticMap.disable
    this.stateMap.disable = !!t
    if (t) {
      this.stateMap.$btn.addClass(i)
    } else {
      this.stateMap.$btn.removeClass(i)
    }
  },

  //转到指定的奖品位置
  setAward: function (t) {
    var a
    var awards = this.stateMap.awards
    if (void 0 !== t && (a = awards[t])) {
      this.stateMap.curIndex = t
      var maxAngle, minAngle
      if (a.angles) {
        var r = random(0, a.angles.length - 1)
        maxAngle = a.angles[r].max_angle
        minAngle = a.angles[r].min_angle
      } else {
        maxAngle = a.max_angle
        minAngle = a.min_angle
      }

      //宫格间隔
      var min = parseInt(minAngle) + parseInt(this.configMap.fixAngle)
      var max = parseInt(maxAngle) - parseInt(this.configMap.fixAngle)
      var p = random(min, max)
      //ww
      // console.log('p='+p)

      //ww:没有setTimeout第二次转动时竟然不能转圈
      setTimeout(() => {
        this.rotate(p, t)
      }, 50)
    } else {
      // ww: t超过奖品数时也要执行gameover
      this.gameover()
    }
  },

  //计算转动的度数 和 设定转动结束事件
  rotate: function (angle) {
    var duration = this.configMap.duration
    angle += 360 * this.configMap.minRotate
    //转i毫秒
    this.animate(angle, duration)

    //i毫秒后触发结束事件
    setTimeout(() => {
      this.gameover()
    }, duration)
  },

  gameover: function () {
    this.disable(!!0)
    // this.$el.trigger('gameover', [this.stateMap.curIndex])
    this.configMap.onOver([this.stateMap.curIndex])
  }
}

// t.Rotary = a
console.log('ww-actWheel.js-module=')
console.log(module)

// })(window, $);
export default a
