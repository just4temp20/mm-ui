<template>
  <div class="card-grid m-module" :style="styleBasic">
    <ul>
      <li v-for="item in curGrids">
        <a :href="item.content[info.fields.forwardUrl.key]">
          <div>
            <img :src="item.content[info.fields.logo.key]||defaultImg">
            <span class="mTitle" :style="info.style.mTitle">{{item.content[info.fields.mTitle.key]}}</span><br/>
            <span class="sTitle" :style="info.style.sTitle">{{item.content[info.fields.sTitle.key]}}</span>
          </div>
        </a>
      </li>
    </ul>
    <!--换一换-->
    <div class="chg-item" v-if="info.chgFunc.isShow" @click="refresh()">
      <a><i class="icon-chg" :style="{'backgroundImage': 'url('+imgRefresh+')'}"></i>{{info.chgFunc.text}}</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {CalcStyle, UniqueFields} from '@/common/utils/utils'
  import imgIcon from '@/../img/default-grid-icon.png'
  import imgRefresh from '@/../img/icon-refresh.png'
  import Axios from 'axios'
  import Api from '@/data/api'
  import '@/data/mock'

  const COMPONENT_NAME = 'cube-grid-two'

  export default {
    name: COMPONENT_NAME,
    props: {
      config: Object
    },
    data() {
      return {
        defaultImg: imgIcon,
        imgRefresh: imgRefresh,
        ids: [],
        curGrids: [],
        index: 0,
        isRefresh: false,
        info: {
          'showCount': 2,
          'categoryId': 'x10005',
          'contentType': 'VIDEO',
          'fields': {
            'logo': {
              'name': 'Logo',
              'default': '我是logo',
              'key': 'LOGO'
            },
            'mTitle': {
              'name': '主标题',
              'default': '我是主标题',
              'key': 'VIDEONAME'
            },
            'sTitle': {
              'name': '副标题',
              'default': '我是副标题',
              'key': 'DIRECTION'
            },
            'latestUpdate': {
              'name': '集数',
              'default': '',
              'key': 'LUPDATE'
            },
            'forwardUrl': {
              'name': 'URL',
              'default': '',
              'key': 'URL'
            }
          },
          'chgFunc': {
            'isShow': true,
            'text': '换一批看看'
          },
          'style': {
            'basic': {
              'backgroundColor': '#ffffff'
            },
            'mTitle': {
              'color': '#333333',
              'fontSize': '36px',
              'fontWeight': 'bold',
              'fontStyle': 'normal',
              'textDecoration': 'none'
            },
            'sTitle': {
              'color': '#999999',
              'fontSize': '30px',
              'fontWeight': 'normal',
              'fontStyle': 'normal',
              'textDecoration': 'none'
            },
            'chgFuncTitle': {
              'color': '#666666',
              'fontSize': '30px',
              'fontWeight': 'normal',
              'fontStyle': 'normal',
              'textDecoration': 'none'
            },
            'chgFuncIcon': {
              'backgroundImage': 'url(../basic/css/components/grid2/images/icon-refresh.png)'
            }
          }
        },
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
      }
    },
    mounted() {
      // this.getAllItem()
    },
    methods: {
      /**
       * 按顺序更换
       * @param count 更新数量
       */
      refresh: function (count) {
        count = this.info.showCount || 2
        var len = this.ids.length
        var vue = this

        if (len > count) {
          this.$set(this, 'isRefresh', true)
          this.$set(this, 'curGrids', this.ids.slice(this.index, this.index + count))
          if (this.index + count < len) {
            this.index = this.index + count
          } else {
            this.index = 0
          }
          setTimeout(function () {
            vue.$set(vue, 'isRefresh', false)
          }, 500)
        } else {
          this.curGrids = this.ids
        }
      },
      /*getAllItem: function () {
        if (JSON.stringify(this.config) !== '{}') {
          this.$set(this, 'info', this.config || this.info)
          this.info.style.mTitle = pxToRem(this.info.style.mTitle)
          this.info.style.sTitle = pxToRem(this.info.style.sTitle)
          this.info.style.chgFuncTitle = pxToRem(this.info.style.chgFuncTitle)
          var vue = this
          var callbackFn = function (res) {
            vue.ids = res || []
            vue.refresh()
          }
          getComData('grid2', this.info, callbackFn)
        }
      },*/
      getData() {
        this.getDataByInterface()
      },
      getDataByInterface() {
        if (this.info.interface.categoryId.length) {
          var postData = {
            categoryIds: [
              {
                type: this.info.interface.contentType,
                categoryId: this.info.interface.categoryId,
                fields: UniqueFields(this.info.fields)
              }
            ]
          }
          Axios.post(Api.gridTwo, postData).then(
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
              this.refresh()
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
  @import "./grid-two.scss";
</style>
