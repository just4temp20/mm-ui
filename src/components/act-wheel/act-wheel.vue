<template>
  <div class="m-module actTurntable" ref="ww">
    <!--大转盘-->
    <div class="wheel db-content" :style="styleBasic">
      <div class="core">
        <div class="core-overflow zw-rotary">
          <!--外围背景-->
          <div class="radius-group"></div>
          <!--外围星星-->
          <div class="radius-bg default" :class="toggle" ></div>
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
    <!--中奖弹窗-->
    <div class="J_modalShowPrize coupon-modal-showPrize" v-show="isShowDrawDialog" >
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
              <button type="button" class="J_btnCoupon coupon-use" v-on:click="closeDrawDialog"><span class="wordNum-four">立即收下</span></button>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!--异常弹窗-->
    <div class="db-msg-modal" v-show="isShowErrDialog">
      <div class="msg-modal-wrapper">
        <div class="msg-modal-header"><i class="msg-modal-close" v-on:click="closeErrDialog"></i><h4 class="msg-title">噢哦，网络解析错误！</h4>
          <p class="msg-tip">再试一遍吧~</p></div>
        <div class="msg-modal-section"><img src="//yun.tuipear.com/h5/activity/showModal/1.0/networkError.png">
        </div>
        <div class="msg-modal-footer"><a href="javascript:;" class="msg-btn" v-on:click="closeErrDialog">再来一次</a></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  import Rotary from './actWheel'
  import Utils from './utils'
  import Axios from 'axios'
  import Api from '@/data/api'
  // import '@/data/mock'

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
        isShowDrawDialog: false,  //中奖弹窗
        isShowErrDialog: false,  //异常弹窗

        //中奖信息
        awardName: '',  //奖品名
        awardImg: '',  //奖品图
        awardTips: '',

        //为了复用PC端代码
        from: 'preview',
        isDebug: !!0  //调试模式
      }
    },
    computed: {
      styleBasic() {
        if (this.from === 'preview') {
          var oStyle = $.extend({}, this.config.style.basic)
          // delete oStyle.width;
          // delete oStyle.height;
          // delete oStyle.left;
          return Utils.calcStyle(oStyle)
          // return oStyle
        } else {
          return {}
        }
      },  //外围的圈圈的样式
      styleText() {
        if (this.from === 'preview') {
          return Utils.calcStyle(this.config.style.text)
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
      //token
      validateCode() {
        // return window.sessionStorage.getItem('mmwaptoken')
        return '123456'
        /*'123456'*/
      },
      calcWheelIndex(id) {
        var array = this.config.fields.price.map(function (value, index, array) {
          return +value.id
        })

        var index = array.indexOf(id)
        if (~index === 0) {
          index = Utils.randomFrom(0, array.length - 1)
        }
        return index
        /*index*/
      },
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
      clickDrawBtn() {
        this.isLogin()
          .then(res => {

          })
          .catch(err => {
            console.log(err)
          })
      },
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
      //任务定时器
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
      //弹窗
      openDrawDialog() {
        this.isShowDrawDialog = true
      },
      closeDrawDialog() {
        //启动任务定时器
        this.startTimer()
        this.isShowDrawDialog = false
      },
      openErrDialog() {
        this.isShowErrDialog = true
      },
      closeErrDialog() {
        this.isShowErrDialog = false
      },
      //未中奖关键字判断
      isUnAwardKeyWord(word) {
        return /谢谢|参与|遗憾|下次/gi.test(word)
      },
      addStyle(style) {
        var styleForBackground = document.createElement('style');
        (document.head || document.body).appendChild(styleForBackground)
        styleForBackground.innerText = style
      },
      refresh() {
        this.rotary.init({})
      },
      getParam(name) {
        var value = window.location.search.match(new RegExp('[?&]' + name + '=([^&]*)(&?)', 'i'))
        value = value ? decodeURIComponent(value[1]) : ''
        return value
      }
    },
    created() {
      //调试模式
      if (this.getParam('db')) {
        this.isDebug = !!1
      }
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
      //  初始化大转盘
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
                    //中奖奖品ID
                    var awardId = res.data.data.awardId
                    //中奖奖品对应转盘第几个位置
                    var awardIndex = _this.calcWheelIndex(awardId)
                    console.log('awardIndex=' + awardIndex)
                    //中奖奖品名字
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
                      _this.openErrDialog()
                    } else {
                      //其他异常
                      _this.openErrDialog()
                    }
                  }
                })
                .catch(err => {
                  console.log(err)
                  _this.openErrDialog()
                  // _this.rotary.disable(false)
                })
            })
            .catch(err => {
              console.log(err)
              window.location.href = Utils.changeUrlArg('./login.html', 'backurl', encodeURIComponent(window.location.href))
            })
            .finally(() => {
              //开锁抽奖按钮
            })
        },
        onOver: function (e) {
          //暂停任务定时器
          _this.stopTimer()
          //中奖弹窗
          setTimeout(() => {
            _this.openDrawDialog()
          }, 1000)
        }
      })
      //启动任务定时器
      this.startTimer()
    }
  }
</script>

<style lang="scss">
  @import "./act-wheel.scss";
</style>
