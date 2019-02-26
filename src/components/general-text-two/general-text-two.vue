<template>
  <div class="card-general-text m-module" :style="styleBasic">
    <div class="text-wrap">
      <a :href="setting.fields.forwardUrl.default||defaultRedirect">
                <textarea :style="styleText" disabled class="edit-text"
                          v-html="setting.fields.text.default">
                </textarea>
      </a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {CalcStyle, GetParam, PxToRem, Extend} from '@/common/utils/utils.js'

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
        },

        //为了复用
        from: 'preview'
      }
    },
    computed: {
      styleBasic() {
        if (this.from === 'preview') {
          return CalcStyle(this.config.style.basic)
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
      }  //圈圈里面内容的样式

    },
    mounted() {
      function setGeneralPic() {
        // var ratioW = winW / originWidth
        var ratio = 1080 / originWidth  // 比例计算关系: 287/462=1080/x   x为动态对应的rem值
        //参考后台预览界面的宽度进行转换
        //width不需要转换，按后台实际比例算占屏幕百分比
        vue.setting.style.basic.width = (curW / originWidth) * 100 + '%'
        vue.setting.style.basic.height = (curH * ratio) / 100 + 'rem'
        vue.setting.style.basic.left = (left / originWidth) * 100 + '%'
        vue.setting.style.basic.top = (top * ratio) / 100 + 'rem'
        //转换
        vue.setting.style.text = PxToRem(vue.setting.style.text)
        //合并
        vue.style = Extend({}, [vue.setting.style.text, vue.setting.style.basic], true)
      }

      if (GetParam('mock') === 'true') {
        this.config = ''
      }
      if (JSON.stringify(this.config) !== '{}') {
        this.$set(this, 'setting', this.config || this.setting)
        var vue = this
        // var winW = document.body.offsetWidth  // 网页正文全文宽
        // var winH = document.body.scrollHeight  // 网页正文全文高
        var basic = this.setting.style.basic

        var curW = parseInt(basic.width)
        var curH = parseInt(basic.height)
        var top = parseInt(basic.top)
        var left = parseInt(basic.left)
        var originWidth = parseInt(basic.originWidth)
        // var originHeight = parseInt(basic.originHeight)

        setGeneralPic()
      }
    }
  }
</script>

<style lang="scss">
  @import "./general-text-two.scss";
</style>
