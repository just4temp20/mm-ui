<template>
  <div id="app">
    <!--动态生成-->
    <component v-for="(item, index) in ModuleInfo" :is="item.moduleName" :config="JSON.parse(item.exProperties)"></component>
    <!--<component v-for="item in moduleInfo" :is="item.moduleName" :config="JSON.parse(item.exProperties)"></component>-->
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        ModuleInfo: window.ModuleInfo
      }
    },
    components: {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  *
    box-sizing: border-box

  html, body, #app
    height: 100%

  body
    background-color: #fff
</style>
