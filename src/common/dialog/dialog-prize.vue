<template>
  <!--奖品弹框-->
  <div class="rrx-common-dialog">
    <div class="content-close bounceInUpAni">
      <img class="content-close-img" src="https://assets.rrxh5.cc/lib/weplus/image/close.png">
    </div>
    <div class="dialog-content bounceInUpAni">
      <div class="dialog-content-head" style="color:#FC5711">我的奖品</div>
      <div class="dialog-content-box" style="overflow: hidden;">
        <div class="scroll-list" style="transform-origin: 0px 0px; position: absolute; top: 0px; left: 0px;">
          <div class="content-list">
            <div class="prize-center">
              <div class="common-box prize-box">
                <div class="prize-small-icon-box"><img
                  src="https://file2.rrxh5.cc/g2/c1/2019/02/21/1550716178526.png"></div>
                <div class="prize-info">
                  <div class="prize-title">3元</div>
                  <div class="gold-time md-min-size">2019-02-25 12:02:25</div>
                  <div class="prize-over-tip md-min-size"></div>
                </div>
                <div class="prize-evt-0-1 prize-state prize-state-0 prize-isdeleted-1 prize-type-1-0  prize-apiway-"
                     data-id="7160983"><span style="vertical-align:middle">已失效 </span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'dialog-prize'

  export default {
    name: COMPONENT_NAME,
    props: {},
    data() {
      return {}
    },
    computed: {},
    methods: {}
  }
</script>

<style lang="scss">
  @import './dialog-prize';
</style>
