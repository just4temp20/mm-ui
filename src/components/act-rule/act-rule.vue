<template>
  <div class="m-module actRule">
    <!--按钮-->
    <div class="db-content ruleButton" :style="styleBasic">
      <div class="rule" v-on:click="openDialog"></div>
    </div>
    <!--规则弹窗-->
    <div class="rule-modal rule-modal-zcd" v-show="isShowDialog">
      <div class="bg-rule" style="background-image:url(//yun.tuisnake.com/h5-mami/activity/common/bg-rule2.png);">
        <div class="rule-modal-dialog">
          <header><i></i><span>活动说明</span><i></i></header>
          <section class="scroll-box">
            <div style="transform: translate(0px, 0px) translateZ(0px);">
              <div class="description rule-3">
                <div class="description-scroller">
                  <!--<p>肯德基卖手机了？对！你没有听错——肯德基联手华为，为登陆中国市场30周年特别定制！</p><p>活动说明：参与活动即有机会和获得幸运奖，每天7次免费参与机会。此活动为概率中奖，奖品数量有限，祝好运！</p><p>惊喜一：肯德基纪念版华为畅享7手机<br></p><p>惊喜二：肯德基WOW双堡套餐兑换券<br></p><p>惊喜三：肯德基新奥尔良烤翅兑换券<br></p><p>惊喜四：肯德基中杯拿铁兑换券<br></p><p>惊喜五：幸运福袋<br></p><p>－－－－－－－－－－－－－－－－<br></p><p>重要声明：</p><p>1、实物类奖品在活动结束后5-10个工作日安排发货，请耐心等待！</p><p>2、优惠券类奖品的使用规则详见每个优惠券的介绍页；</p><p>3、请兑换后仔细阅读使用流程，如有疑问，可直接联系客服专线：400-080-6659</p><p>或客服QQ：400-080-6659（工作日9:00至18:00）；</p><p>4、一定概率会获得金币收入，提现需下载客户端（当日收入金币需当日下载提现有效）；</p><p>5、通过非法途径获得奖品的，主办方有权不提供奖品。&nbsp;</p>-->
                </div>
              </div><div class="probability rule-3" :class="probabilityStatus">
              <div class="nav" v-on:click="toggleProbabilityStatus"><span>更多概率说明</span><i></i></div>
              <div class="text">
                <div class="probability-wrapper rule-3">
                  <div class="probability-scroller">
                    <!--<p>1.肯德基纪念版华为畅享7手机共2台，中奖概率为0.01%</p><p>2.肯德基WOW双堡套餐兑换券共20份，中奖概率为0.1%</p><p>3.肯德基新奥尔良烤翅兑换券共30份，中奖概率为0.3%</p><p>4.肯德基中杯拿铁兑换券共30份，中奖概率为0.3%</p>-->
                  </div>
                </div>
              </div>
            </div>
            </div>
          </section></div>

        <div class="close" v-on:click="closeDialog"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {CalcStyle} from '@/common/utils/utils'
  import HtmlCode from '@/common/utils/htmlCode'
  import IScroll from './iScroll'

  const COMPONENT_NAME = 'cube-act-rule'

  export default {
    name: COMPONENT_NAME,
    props: {
      config: Object
    },
    data() {
      return {
        //turntable
        content: this.config.fields.content,
        attachment: this.config.fields.attachment,
        //弹窗
        isShowDialog: false,
        rulesScroll: null,  //滑动对象
        probabilityStatus: '',  //附件伸缩状态
        //为了复用PC端代码
        from: 'preview'
      }
    },
    computed: {
      styleBasic() {
        if (this.from === 'preview') {
          var oStyle = Object.assign({}, this.config.style.basic)
          return CalcStyle(oStyle)
        } else {
          return {}
        }
      }
    },
    methods: {
      openDialog() {
        this.isShowDialog = true
        if (!this.rulesScroll) {
          this.$nextTick(function () {
            //弹窗内容滑动
            this.rulesScroll = new IScroll('.scroll-box', {
              mouseWheel: !0,
              scrollbars: !0,
              shrinkScrollbars: 'scale',
              click: !0,
              tap: !0
            })
          })
        } else {
          //弹窗内容滑动高度置顶
          this.rulesScroll.scrollTo(0, 0, 100, IScroll.utils.ease.elastic)
        }
      },

      closeDialog() {
        this.isShowDialog = false
      },

      toggleProbabilityStatus() {
        console.log('toggleProbabilityStatus')
        if (this.probabilityStatus === '') {
          this.probabilityStatus = 'active'
        } else {
          this.probabilityStatus = ''
        }
        this.$nextTick(function () {
          this.rulesScroll.refresh()
        })
      }

    },
    mounted() {
      //规则正文
      var $content = document.querySelector('.description-scroller')
      // $content.innerHTML = decodeURIComponent(this.content)
      $content.innerHTML = HtmlCode.decodeHtml(this.content)

      //规则附件
      $content = document.querySelector('.probability-scroller')
      // $content.innerHTML = decodeURIComponent(this.attachment.content)
      $content.innerHTML = HtmlCode.decodeHtml(this.attachment.content)
    }
  }
</script>

<style lang="scss">
  @import "./act-rule.scss";
</style>
