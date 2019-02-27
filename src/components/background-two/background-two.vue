<template>
  <div class="element element_pagebg"
       :style="config.style.basic">
    <img class="pagebg_img" :src="config.fields.imageUrl"
         :style="config.style.image"></div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'cube-background-two'

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
  @import "./background-two.scss";
</style>
