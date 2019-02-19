<template>
  <div class="m-module gridMultiple card-grid" :style="styleBasic">
    <div class="edit-text m-preview">
      <!--货架-->
      <ul v-for="(ulItem, ulIndex) in countLine" v-if="info.dataSourcesType == 'interface'">
        <li v-for="(item, liIndex) in countPerLine" :class="{'hide': (liIndex+1)>num(ulIndex)}"
            v-if="ulIndex*countPerLine + liIndex < ids.length" :style="'width: ' +100/countPerLine+ '%'">
          <a :href="ids[ulIndex*countPerLine + liIndex].content[info.fields.forwardUrl.key]">
            <div v-if="ids[ulIndex*countPerLine + liIndex].content != undefined">
              <img :src="ids[ulIndex*countPerLine + liIndex].content[info.fields.logo.key]||defaultImg">
              <span class="title">{{ids[ulIndex*countPerLine + liIndex].content[info.fields.title.key]}}</span>
            </div>
          </a>
        </li>
      </ul>
      <!--手工-->
      <ul v-for="(ulItem, ulIndex) in countLineManual" v-if="info.dataSourcesType == 'manual'">
        <li v-for="(item, liIndex) in countPerLine" :class="{'hide': (liIndex+1)>numManual(ulIndex)}"
            v-if="ulIndex*countPerLine + liIndex < idsManual.length" :style="'width: ' +100/countPerLine+ '%'">
          <a :href="idsManual[ulIndex*countPerLine + liIndex].content[info.fields.forwardUrl.key]">
            <div v-if="idsManual[ulIndex*countPerLine + liIndex].content != undefined">
              <img :src="idsManual[ulIndex*countPerLine + liIndex].content[info.fields.logo.key]||defaultImg">
              <span class="title">{{idsManual[ulIndex*countPerLine + liIndex].content[info.fields.title.key]}}</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {CalcStyle, UniqueFields} from '@/common/utils/utils'
  import imgIcon from '../../../img/default-grid-icon.png'
  import Axios from 'axios'
  import Api from '@/data/api'

  const COMPONENT_NAME = 'cube-grid-multiple'

  export default {
    name: COMPONENT_NAME,
    props: {
      config: Object
    },
    data() {
      return {
        ids: [
          {
            type: 'PAD',
            content: {
              LOGO: '',
              TITLE: '标题',
              URL: ''
            }
          },
          {
            type: 'PAD',
            content: {
              LOGO: '',
              TITLE: '标题',
              URL: ''
            }
          },
          {
            type: 'PAD',
            content: {
              LOGO: '',
              TITLE: '标题',
              URL: ''
            }
          },
          {
            type: 'PAD',
            content: {
              LOGO: '',
              TITLE: '标题',
              URL: ''
            }
          },
          {
            type: 'PAD',
            content: {
              LOGO: '',
              TITLE: '标题',
              URL: ''
            }
          }
        ],
        idsManual: [
          {
            type: 'PAD',
            content: {
              LOGO: '',
              TITLE: '标题',
              URL: ''
            }
          },
          {
            type: 'PAD',
            content: {
              LOGO: '',
              TITLE: '标题',
              URL: ''
            }
          },
          {
            type: 'PAD',
            content: {
              LOGO: '',
              TITLE: '标题',
              URL: ''
            }
          },
          {
            type: 'PAD',
            content: {
              LOGO: '',
              TITLE: '标题',
              URL: ''
            }
          },
          {
            type: 'PAD',
            content: {
              LOGO: '',
              TITLE: '标题',
              URL: ''
            }
          }
        ],
        idsDefault: [
          {
            type: 'PAD',
            content: {
              LOGO: '',
              TITLE: '标题',
              URL: ''
            }
          },
          {
            type: 'PAD',
            content: {
              LOGO: '',
              TITLE: '标题',
              URL: ''
            }
          },
          {
            type: 'PAD',
            content: {
              LOGO: '',
              TITLE: '标题',
              URL: ''
            }
          },
          {
            type: 'PAD',
            content: {
              LOGO: '',
              TITLE: '标题',
              URL: ''
            }
          },
          {
            type: 'PAD',
            content: {
              LOGO: '',
              TITLE: '标题',
              URL: ''
            }
          }
        ],
        defaultImg: imgIcon,
        //为了复用PC端代码
        from: 'preview'
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
      },
      /**
       * 计算每行宫格的个数
       * @return {[type]} [description]
       */
      countPerLine() {
        return this.info.countPerLine || 5
      },

      /**
       * 计算有多少行宫格
       * @return {Number}
       */
      countLine() {
        if (this.info.interface.showCount > this.ids.length) {
          this.info.interface.showCount = this.ids.length
        }
        return Math.ceil(this.info.interface.showCount / this.countPerLine)
      },

      /**
       * 计算有多少行宫格
       * @return {Number}
       */
      countLineManual() {
        var count = Math.ceil(this.info.manual.showCount / this.countPerLine)
        return count
      }
    },
    methods: {
      num(index) {
        let n = this.info.interface.showCount - this.countPerLine * index
        return n > this.countPerLine ? this.countPerLine : n
      },
      numManual(index) {
        let n = this.info.manual.showCount - this.countPerLine * index
        return n > this.countPerLine ? this.countPerLine : n
      },
      getData() {
        if (this.info.dataSourcesType === 'manual') {
          this.getDataByManual()
        } else if (this.info.dataSourcesType === 'interface') {
          this.getDataByInterface()
        }
      },
      getDataByInterface() {
        if (this.info.interface.categoryId.length) {
          /*不封装ajax*/
          var postData = {
            categoryIds: [
              {
                type: this.info.interface.contentType,
                categoryId: this.info.interface.categoryId,
                fields: UniqueFields(this.info.fields)
              }
            ]
          }
          Axios.post(Api.gridMultiple, postData).then(
            (res) => {
              var data = res.data.data[0]
              var ids = []
              if (!data) {
                data = {}
              }
              if (JSON.stringify(data) !== '{}') {
                ids = data[this.info.interface.categoryId]
                this.ids = ids
              } else {
                this.ids = this.idsDefault
              }
            },
            (e) => {
              if (this.mockdata.open) {
                var res = this.mockdata.makeRetData(this.mockdata.gridMultiple.ret)
                var data = res.data.data[0]
                var ids = []
                if (!data) {
                  data = {}
                }
                if (JSON.stringify(data) !== '{}') {
                  ids = data[this.info.interface.categoryId]
                  this.ids = ids
                } else {
                  this.ids = this.idsDefault
                }
              }
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
        this.info = this.config
        this.getData()
      }
    }
  }
</script>

<style lang="scss">
  @import "./grid-multiple.scss";
</style>
