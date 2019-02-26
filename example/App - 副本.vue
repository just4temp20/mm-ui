<template>
  <div id="app" :style="styleBasic">
    <!--动态生成-->
    <component v-for="(item, index) in ModuleInfo" :is="item.moduleName"
               :config="JSON.parse(item.exProperties)"></component>
    <!--<component v-for="item in moduleInfo" :is="item.moduleName" :config="JSON.parse(item.exProperties)"></component>-->
  </div>
</template>

<script type="text/ecmascript-6">
  import {CalcStyle} from '@/common/utils/utils'

  export default {
    components: {},
    data() {
      return {
        ModuleInfo: window.ModuleInfo
      }
    },
    computed: {
      styleBasic() {
        return CalcStyle(window.page.style)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  *
    box-sizing: border-box

  /*html, body, #app
    height: 100%*/

  body
    background-color: #fff
    font-size: 0

  #app
    overflow: hidden

  .m-module {
    position: absolute
  }
</style>
