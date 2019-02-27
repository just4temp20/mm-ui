<template>
  <div class="element" :class="config.style.animationName"
       style="display: block;"
       :style="config.style.basic" eletype="img">
    <div style="width: 100%; height: 100%; overflow: hidden;">
      <div style="width:100%;height:100%;position:relative;" class="element-last-box">
        <div class="element-mask">
          <img class="element-last" :style="config.style.image"
               style="-webkit-user-drag: none; transform: none;"
               :src="config.fields.imageUrl">
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'cube-general-image'

  export default {
    name: COMPONENT_NAME,
    props: {
      config: Object
    },
    data() {
      return {}
    },
    computed: {},
    mounted() {
    }
  }
</script>

<style lang="scss">
  @import "../../common/stylus/module.scss";
  @import "./general-image.scss";
</style>
