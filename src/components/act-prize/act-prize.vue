<template>
  <div class="m-module actPrize">
    <div class="record-incentive-container incentive" :style="styleBasic">
      <!--按钮-->
      <div class="record-incentive" v-on:click="showMyPrize" style="background-image: url(&quot;//yun.tuisnake.com/h5-mami/activity/components/incentive/gift.png?x-oss-process=image/format,webp&quot;);"></div>
      <!--背影-->
      <div class="record-s incentive-shadow"></div>
    </div>
    <!--奖品弹框-->
    <dialog-prize></dialog-prize>
  </div>
</template>

<script type="text/ecmascript-6">
  import {CalcStyle} from '@/common/utils/utils'
  import DialogPrize from '@/common/dialog/dialog-prize'

  const COMPONENT_NAME = 'cube-act-prize'

  export default {
    name: COMPONENT_NAME,
    props: {
      config: Object
    },
    components: {
      DialogPrize
    },
    data() {
      return {
        //活动id
        actId: this.config.fields.actId,
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
      showMyPrize() {
        // window.location.href = 'http://baidu.com?actId=' + this.actId
      }
    }
  }
</script>

<style lang="scss">
  @import "./act-prize.scss";
  @import "./act-prize-dialog.scss";
</style>
