<template>
  <div class="element" :class="config.style.animationName"
       :style="config.style.basic" eletype="div">
    <div
      style="width: 100%; height: 100%; overflow: hidden;  -webkit-writing-mode: horizontal-tb; writing-mode: horizontal-tb;"
      :style="config.style.middle">
      <div class="element-last" :style="config.style.middle2"
           style="width: 100%; min-height: inherit; overflow-wrap: break-word; word-break: break-all; font-size: 28px; cursor: default; font-family: FZZYJW;">
        <span :style="config.style.text">{{config.fields.text.default}}</span></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {CalcStyle} from '@/common/utils/utils.js'

  const COMPONENT_NAME = 'cube-general-text-two'

  export default {
    name: COMPONENT_NAME,
    props: {
      config: Object
    },
    data() {
      return {
        defaultImg: '../basic/css/components/pic/images/img-default.png',
        defaultRedirect: 'javascript:void(0);',
        ads: [],
        style: {},
        setting: {
          'fields': {
            'text': {
              'name': '通用文本',
              'default': '文本内容',
              'key': ''
            },
            'forwardUrl': {
              'name': 'URL',
              'default': '',
              'key': ''
            }
          },
          'fieldsDefault': {},
          'style': {
            'text': {
              'color': '#ffff',
              'fontSize': '30px',
              'fontWeight': 'normal',
              'fontStyle': 'normal',
              'textAlign': 'left',
              'textDecoration': 'none'
            },
            'basic': {
              'left': '0',  // x轴的值：负数为左边，不在屏幕内；整数位右边
              'top': '0',  // y轴的值：负数为下边；整数位上边，不在屏幕内
              'width': '100%',
              'height': 'auto',
              'zIndex': '100',  // 初始值10
              'originWidth': '287px',  // 后台管理预览宽度
              'originHeight': '462px'  //后台管理预览高度
            }

          }
        }
      }
    },
    computed: {
      styleBasic() {
        return CalcStyle(this.config.style.basic)
      },  //外围的圈圈的样式
      styleText() {
        if (this.from === 'preview') {
          return CalcStyle(this.config.style.text)
        } else {
          return {}
        }
      }  //圈圈里面内容的样式

    },
    mounted() {
    }
  }
</script>

<style lang="scss">
  @import "../../common/stylus/module.scss";
  @import "./general-text-two.scss";
</style>
