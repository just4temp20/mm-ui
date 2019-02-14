<template>
  <cube-page type="button-view" title="Background">
    <div slot="content">
      <form action="/">
        <cube-background :data="config"></cube-background>
      </form>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'
  export default {
    data() {
      return {
        buttonStyle: ['inline', 'outline', 'primary'],
        config: {
          'fields': {
            'image': 'https://yun.tuipear.com/mami-media/img/1cgvust9aq.jpg?x-oss-process=image/format,webp',
            'color': '#B81B2B'
          },
          'isEditZIndex': false
        }
      }
    },
    computed: {
      inlineStyle() {
        return this.buttonStyle.indexOf('inline') >= 0
      },
      outlineStyle() {
        return this.buttonStyle.indexOf('outline') >= 0
      },
      primaryStyle() {
        return this.buttonStyle.indexOf('primary') >= 0
      }
    },
    components: {
      CubePage
    }
  }
</script>
