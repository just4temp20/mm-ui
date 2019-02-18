<template>
  <div class="m-module card-title" v-if="from=='preview'" :style="styleBasic">
    <!--接口-->
    <div v-if="info.dataSourcesType == null || info.dataSourcesType == 'interface' && index == 0"
         v-for="(item, index) in ids">
      <i class="forward" :style="info.style.forwardWords">{{item.content[info.fields.forwardWords.key]}}</i>
      <h2 :style="info.style.mTitle">{{item.content[info.fields.mTitle.key]}}</h2>
      <p :style="info.style.sTitle">{{item.content[info.fields.sTitle.key]}}</p>
      <a :href="item.content[info.fields.forwardUrl.key]"></a>
    </div>
    <!--手工-->
    <div v-if="info.dataSourcesType == 'manual' && index == 0" v-for="(item, index) in idsManual" class="manual">
      <a :href="item.content[info.fields.forwardUrl.key]">
        <i class="forward" :style="info.style.forwardWords">{{item.content[info.fields.forwardWords.key]}}</i>
        <h2 :style="info.style.mTitle">{{item.content[info.fields.mTitle.key]}}</h2>
        <p :style="info.style.sTitle">{{item.content[info.fields.sTitle.key]}}</p>
      </a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {CalcStyle, UniqueFields} from '@/common/utils/utils'
  import Axios from 'axios'
  import Api from '@/data/api'

  const COMPONENT_NAME = 'cube-title-box'

  export default {
    name: COMPONENT_NAME,
    props: {
      config: Object
    },
    data() {
      return {
        ids: [],
        idsDefault: [{
          'type': 'PAD',
          'content': {
            'NAME': '主标题5',  //mTitle
            'DESCS': '副标题5',  //sTitle
            'URL': 'https://m.kaola.com/',  //forwardUrl
            'MORE_TIPS': '跳转文案5'  //forwardWords
          }
        }],
        idsManual: [],
        lockCategoryId: false,
        //为了复用PC端代码
        from: 'preview'
      }
    },
    watch: {
      'info.categoryId': {
        handler(a, b) {
          if (!this.lockCategoryId) {
            this.lockCategoryId = true
            setTimeout(() => {
              this.getData()
              this.lockCategoryId = false
            }, 3000)
          }
        },
        deep: true
      },
      'info.dataSourcesType': {
        handler(a, b) {
          switch (a) {
            case 'interface':
            case 'manual':
              this.getData()
              break
            default:
              break
          }
        },
        deep: true
      }
    },
    computed: {
      styleBasic() {
        if (this.from === 'preview') {
          var oStyle = Object.assign({}, this.info.style.basic)
          return CalcStyle(oStyle)
        } else {
          return {}
        }
      }
    },
    methods: {
      getData() {
        if (this.info.dataSourcesType === 'manual') {
          this.getDataByManual()
        } else {
          this.getDataByInterface()
        }
      },
      getDataByInterface() {
        if (this.info.categoryId.length) {
          /*不封装ajax*/
          var postData = {
            categoryIds: [
              {
                type: this.info.contentType,
                categoryId: this.info.categoryId,
                fields: UniqueFields(this.info.fields)
              }
            ]
          }
          Axios.post(Api.titleBox, postData).then(
            (res) => {
              var data = res.data.data[0]
              var ids = []
              if (!data) {
                data = {}
              }
              if (JSON.stringify(data) !== '{}') {
                ids = data[this.info.categoryId]
                this.ids = ids
              } else {
                this.ids = this.idsDefault
              }
            },
            (e) => {
              console.log('axios error:', e)
            }
          )
        } else {
          this.ids = this.idsDefault
        }
      },
      getDataByManual() {
        this.idsManual = this.info.manual.data
      }
    },
    created() {
      if (this.from === 'preview') {
        //为了复用PC端代码
        this.info = this.config
        this.getData()
      }
    }
  }
</script>

<style lang="scss">
  @import "./title-box.scss";
</style>
