<template>
  <div class="background"></div>
</template>

<script>
  const COMPONENT_NAME = 'cube-background'
  export default {
    name: COMPONENT_NAME,
    props: {
      config: Object
    },
    data() {
      return {
        //turntable
        backgroundImage: this.config.fields.image,
        backgroundColor: this.config.fields.color
      }
    },
    created() {
      console.log(this.config)
      var styleForBackground = document.createElement('style');
      (document.head || document.body).appendChild(styleForBackground)
      styleForBackground.innerText = `
        body {
            background-color: ${this.backgroundColor} !important;
            background: url(${this.backgroundImage}) no-repeat;
            background-size: 100% auto;
        }`
    }
  }
</script>

<style scoped>

</style>
