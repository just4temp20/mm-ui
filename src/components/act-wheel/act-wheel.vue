<template>
  <div class="m-module actTurntable" ref="ww">
    <!--大转盘-->
    <div class="wheel db-content" :style="styleBasic">
      <div class="core">
        <div class="core-overflow zw-rotary">
          <!--外围背景-->
          <div class="radius-group"></div>
          <!--外围星星-->
          <div class="radius-bg default" :class="toggle"></div>
          <!--奖品-->
          <div id="circle" class="zw-rotary-dial" style="transform: rotate3d(0, 0, 1, 0);">
            <div class="circle-box" id="circle-box">
              <div v-for="(item, index) in aPrice" class="prize" :key="index" :style="prizeStyle(index)">
                <div class="prize-dialog">
                  <p>{{item.name}}</p>
                  <img :src="item.pic" alt="">
                </div>
              </div>
            </div>
          </div>
          <!--按钮-->
          <div id="start" class="zw-rotary-indicator js-btn"></div>
        </div>
        <!--指针-->
        <div class="point"></div>
        <!--手指-->
        <div class="DB_guide" style="display: block;">
          <span class="DB_G_circle"></span>
          <span class="DB_G_hand"></span>
        </div>
      </div>
    </div>
    <!--中奖提示弹窗-->
    <div class="J_modalShowPrize coupon-modal-showPrize" v-show="isShowDrawDialog">
      <div class="coupon-modal-animate">
        <div class="coupon-modal-showPrize-dialog ">
          <span class="close coupon-modal-close" v-on:click="closeDrawDialog"></span>

          <div class="modal-light">
            <div class="l-shine"></div>
          </div>
          <div class="modal-header"></div>
          <div class="modal-body withoutCode">
            <i class="decoration"></i>
            <div class="body-header"></div>
            <div class="coupon-wrapper">
              <div class="coupon-mask"></div>
              <div class="coupon-wrapper-cell">
                <div class="coupon-image">
                  <img class="J_gotoDetail logandgo" data-pic="true" :src="awardImg">
                </div>
                <span class="coupon-win1">{{awardTips}}</span>
                <h3 class="coupon-name"><span>{{awardName}}</span></h3>

              </div>
            </div>
            <div class="body-footer">
              <button type="button" class="J_btnCoupon coupon-use" v-on:click="closeDrawDialog"><span
                class="wordNum-four">立即收下</span></button>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!--异常提示弹窗-->
    <div class="db-msg-modal" v-show="isShowErrDialog">
      <div class="msg-modal-wrapper">
        <div class="msg-modal-header"><i class="msg-modal-close" v-on:click="closeErrDialog"></i><h4 class="msg-title">
          {{errTips1}}</h4>
          <p class="msg-tip">再试一遍吧~</p></div>
        <div class="msg-modal-section"><img src="//yun.tuipear.com/h5/activity/showModal/1.0/networkError.png">
        </div>
        <div class="msg-modal-footer"><a href="javascript:;" class="msg-btn" v-on:click="closeErrDialog">再来一次</a></div>
      </div>
    </div>
    <!--登录提示弹窗-->
    <div class="db-msg-modal" v-show="isShowLoginDialog">
      <div class="msg-modal-wrapper">
        <div class="msg-modal-header"><i class="msg-modal-close" v-on:click="closeLoginDialog"></i><h4
          class="msg-title">
          您还没有登录哦！</h4>
          <!--<p class="msg-tip">再试一遍吧~</p>-->
        </div>
        <div class="msg-modal-section"><img src="//yun.tuipear.com/h5/activity/showModal/1.0/networkError.png">
        </div>
        <div class="msg-modal-footer"><a href="javascript:;" class="msg-btn" v-on:click="toLogin">登录</a></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  import Rotary from './actWheel'
  import {CalcStyle, RandomFrom, ChangeUrlArg} from '@/common/utils/utils'
  import Axios from 'axios'
  import Api from '@/data/api'
  import '@/data/mock'

  const COMPONENT_NAME = 'cube-act-wheel'

  export default {
    name: COMPONENT_NAME,
    props: {
      config: Object
    },
    data() {
      return {
        //转盘配置
        wheelConfig: this.config.fields.wheelConfig,
        rotary: {},
        actId: this.config.fields.actId,

        //turntable
        imgUrl: {
          turntable: this.config.fields.imgUrl.turntable,
          point: this.config.fields.imgUrl.point,
          button: this.config.fields.imgUrl.button,
          color: this.config.fields.imgUrl.color
        },
        aPrice: this.config.fields.price || [],

        //转盘外围闪动样式类
        toggle: 'toggle',
        end: 'end',

        //任务定时器
        taskTimer: null,

        //弹窗
        isShowDrawDialog: false,  // 中奖提示弹窗
        isShowErrDialog: false,  // 异常提示弹窗
        isShowLoginDialog: false,  // 登录提示窗
        errTips1: '噢哦，网络解析错误！',  // 异常提示文案1

        //中奖信息
        awardName: '',  //奖品名
        awardImg: '',  //奖品图
        awardTips: '',

        //为了复用PC端代码
        from: 'preview'
      }
    },
    computed: {
      styleBasic() {
        if (this.from === 'preview') {
          var oStyle = $.extend({}, this.config.style.basic)
          // delete oStyle.width;
          // delete oStyle.height;
          // delete oStyle.left;
          return CalcStyle(oStyle)
          // return oStyle
        } else {
          return {}
        }
      },  //外围的圈圈的样式
      styleText() {
        if (this.from === 'preview') {
          return CalcStyle(this.config.style.text)
        } else {
          return {}
        }
      },  //圈圈里面内容的样式
      prizeStyle(index) {
        return function (index) {
          var num = this.config.fields.price.length
          var n = 360 / num
          var offset = 0
          if (num === 8) {
            offset = 6
          }
          return {
            'transform': 'rotate(' + ((index + 1) * n + offset) + 'deg) skewY(30deg)'
          }
        }
      }
    },
    methods: {
      // 利用sessionStorage里的mmwaptoken判断登录状态
      validateCode() {
        // return window.sessionStorage.getItem('mmwaptoken')
        return '123456'
        /*'123456'*/
      },
      // 利用id计算是奖品数组中的第几个奖品
      calcWheelIndex(id) {
        console.log(id)
        var array = this.config.fields.price.map(function (value, index, array) {
          return value.id
        })
        var index = array.indexOf(id)
        if (~index === 0) {
          index = RandomFrom(0, array.length - 1)
        }
        return index
      },
      // 是否登录
      isLogin() {
        let _this = this
        return new Promise((resolve, reject) => {
          if (_this.validateCode() != null) {
            resolve()
          } else {
            /* eslint-disable */
            reject()
            /* eslint-enable */
          }
        })
      },
      // 跳转到登录页
      toLogin() {
        window.location.href = 'baidu.com'
      },
      // 点击抽奖按钮
      toDraw() {
        let _this = this
        return new Promise((resolve, reject) => {
          Axios.post(Api.luckyDraw, {
            activityId: _this.actId,
            phone: '13410982624',
            validateCode: _this.validateCode(),
            awardId: ''
          })
            .then(
              res => {
                resolve(res)
              },
              err => {
                reject(err)
              }
            )
        })
      },
      // 任务定时器
      startTimer() {
        /* eslint-disable */
        let timeout = arguments[0] && arguments[0].time || 500
        /* eslint-enable */
        if (this.taskTimer) {
          this.stopTimer()
        }

        this.taskTimer = setInterval(() => {
          if (this.toggle === 'toggle') {
            this.toggle = ''
          } else {
            this.toggle = 'toggle'
          }
        }, timeout)
      },
      stopTimer() {
        clearInterval(this.taskTimer)
        this.taskTimer = null
        this.toggle = 'end'
      },
      // 提示弹窗
      openDrawDialog() {
        this.isShowDrawDialog = true
      },
      closeDrawDialog() {
        //启动任务定时器
        this.startTimer()
        this.isShowDrawDialog = false
      },
      openErrDialog(msg) {
        if (msg) this.errTips1 = msg
        this.isShowErrDialog = true
      },
      openLoginDialog() {
        this.isShowLoginDialog = true
      },
      closeErrDialog() {
        this.isShowErrDialog = false
      },
      closeLoginDialog() {
        this.isShowLoginDialog = false
      },
      // 未中奖关键字判断
      isUnAwardKeyWord(word) {
        return /谢谢|参与|遗憾|下次/gi.test(word)
      },
      // 重新加载转盘
      refresh() {
        this.rotary.init({})
      },
      // utils
      // 添加样式
      addStyle(style) {
        var styleForBackground = document.createElement('style');
        (document.head || document.body).appendChild(styleForBackground)
        styleForBackground.innerText = style
      },
      // 获取url中的key对应的value
      getParam(name) {
        var value = window.location.search.match(new RegExp('[?&]' + name + '=([^&]*)(&?)', 'i'))
        value = value ? decodeURIComponent(value[1]) : ''
        return value
      }
    },
    created() {
      this.addStyle(`
            .db-content .point {
                background-image: url(${this.imgUrl.point}) !important;
            }
            .db-content #start {
                background-image: url(${this.imgUrl.button}) !important;
            }
            .db-content #circle{
                background-image: url(${this.imgUrl.turntable}) !important;
            }
            .db-content .radius-group{
                background-color:${this.imgUrl.color} !important;
            }
        `)
    },
    mounted() {
      let _this = this
      // 初始化转盘
      this.rotary = new Rotary('.zw-rotary', {
        clockwise: this.wheelConfig.clockwise,  //转动方向（是否顺时针）
        sections: this.wheelConfig.sections,  //宫格数量（单位：个）
        fixAngle: this.wheelConfig.fixAngle,  //宫格间距（单位：度数）
        duration: this.wheelConfig.duration,  //转动时间（单位：毫秒）
        minRotate: this.wheelConfig.minRotate,  //转几圈（单位：圈）
        onStart: function (e) {
          //是否登录
          _this.isLogin()
            .then(res => {
              //抽奖
              _this.toDraw()
                .then(res => {
                  if (res.data.code === 0) {
                    // 中奖奖品id
                    var awardId = res.data.data.awardId
                    var awardIndex = _this.calcWheelIndex(awardId)
                    console.log('awardIndex=' + awardIndex)
                    // 中奖奖品名字
                    _this.awardName = _this.config.fields.price[awardIndex].name || res.data.data.name
                    _this.awardImg = _this.config.fields.price[awardIndex].pic
                    if (_this.isUnAwardKeyWord(_this.awardName)) {
                      _this.awardTips = _this.config.fields.dialogTips.unAward
                    } else {
                      _this.awardTips = _this.config.fields.dialogTips.award
                    }
                    //转到那个位置
                    _this.rotary.setAward(awardIndex)
                    //伴随效果：外围闪动加速
                    _this.startTimer({
                      time: 200
                    })
                    //重新获取抽奖次数
                    $('body').trigger('getActCount')
                  } else {
                    //异常
                    if (res.data.code === 9999) {
                      //未登录
                      _this.openLoginDialog()
                    } else {
                      //其他异常
                      _this.openErrDialog(res.data.msg)
                    }
                    //开锁抽奖按钮
                    _this.rotary.disable(!!0)
                  }
                })
                .catch(err => {
                  console.log(err)
                  _this.openErrDialog()
                  //开锁抽奖按钮
                  _this.rotary.disable(false)
                })
            })
            .catch(err => {
              console.log(err)
              window.location.href = ChangeUrlArg('./login.html', 'backurl', encodeURIComponent(window.location.href))
            })
            .finally(() => {
            })
        },
        onOver: function (e) {
          //暂停任务定时器
          _this.stopTimer()
          //中奖弹窗
          setTimeout(() => {
            _this.openDrawDialog()

            _this.rotary.disable(!!0)
          }, 1000)
        }
      })
      // 启动任务定时器
      this.startTimer()
    }
  }
</script>

<style lang="scss">
  @import "./act-wheel.scss";
</style>
