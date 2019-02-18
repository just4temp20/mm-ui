// import axios from 'axios'

// css单位转换
export function CalcStyle(oStyle) {
  // var winW = document.body.offsetWidth  // 网页正文全文宽
  // var winH=document.body.scrollHeight  // 网页正文全文高
  // var radio = winW/320;
  var radio = parseFloat(document.documentElement.style.fontSize) / 100
  var oNewStyle = Object.assign({}, oStyle)
  for (var i in oNewStyle) {
    if (typeof oNewStyle[i] === 'string' && ~oNewStyle[i].indexOf('px')) {
      oNewStyle[i] = (parseInt(oNewStyle[i].replace('px', '')) * radio) + 'px'
    }
  }
  return oNewStyle
}

//  在区间内生成随机数
export function RandomFrom(lowerValue, upperValue) {
  return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue)
}

//  改变url中key对应的value
export function ChangeUrlArg(url, arg, argVal) {
  var pattern = arg + '=([^&]*)'
  var replaceText = arg + '=' + argVal
  if (url.match(pattern)) {
    var tmp = '/(' + arg + '=)([^&]*)/gi'
    /* eslint-disable */
    tmp = url.replace(eval(tmp), replaceText)
    /* eslint-enable */
    return tmp
  } else {
    /* eslint-disable */
    if (url.match('[\?]')) {
      return url + '&' + replaceText
    } else {
      return url + '?' + replaceText
    }
    /* eslint-enable */
  }
}

//  获取url中key对应的value
export function GetParam(name) {
  var value = window.location.search.match(new RegExp('[?&]' + name + '=([^&]*)(&?)', 'i'))
  value = value ? decodeURIComponent(value[1]) : ''
  return value
}

/**
 * px 转换为 rem，只针对不内嵌的object转换
 * @param style
 * @returns {*}
 */
export function PxToRem(style) {
  for (var key in style) {
    var reg = /px/ig
    if (reg.test(style[key])) {
      style[key] = parseInt(style[key]) / 100 + 'rem'
    }
  }
  return style
}

/**
 * 合并两个object
 * @param des
 * @param src
 * @param override 是否覆盖
 * @returns {*}
 * var a={1,3,4,5}; var b={2,3,4}
 * Extend({}, [a, b], true)
 */
export function Extend(des, src, override) {
  if (src instanceof Array) {
    for (var i = 0, len = src.length; i < len; i++) {
      Extend(des, src[i], override)
    }
  }
  for (var i1 in src) {
    if (override || !(i1 in des)) {
      des[i1] = src[i1]
    }
  }
  return des
}

// 获取某个对象key对应的value
export function UniqueFields(originFields) {
  var fields = []
  for (var i in originFields) {
    // 去重标志
    var flag = false
    for (var j = 0, len = fields.length; j < len; j++) {
      if (originFields[i].key === fields[j]) {
        flag = true
        break
      }
    }
    if (!flag) {
      fields.push(originFields[i].key)
    }
  }
  return fields
}

/**
 * 获取货架数据
 * @param {String} mock 是否启用模拟数据
 * @param {Array}  setting 类型id组合
 * @param {Function}callback
 */
/*export function getComData(mock, setting, callback) {
  var categoryIds = [
    {
      type: setting.contentType,
      categoryId: setting.categoryId,
      fields: uniqueFields(setting.fields)
    }
  ]
  if (setting.pageNo && setting.pageSize) {
    categoryIds[0].pageNo = setting.pageNo
    categoryIds[0].pageSize = setting.pageSize || 12
  }
  var postData = {
    categoryIds: categoryIds
  }
  var categoryId = categoryIds[0].categoryId
  // var url = 'http://183.192.162.228:28080/bis/index?com='+mock; // 现网
  var url = 'http://10.1.5.52:11020/bis/index?com=' + mock  //测试
  if (GetParam('mock') === 'true') {  // 本地访问,模拟数据
    url = '/smartve/h5/basic/mock/' + mock + '.json?rnd=' + new Date().getTime()
    axios.get(url, postData).then(
      function (res) {
        handleSuccess(res)
      },
      function (err) {
        console.log(err)
      }
    )
  } else {
    //校验
    if (setting.categoryId === '') {
      console.log(mock + '：空的categoryId')
      return
    }
    axios({
      method: 'post',
      url: url,
      data: postData
    }).then(
      function (res) {
        handleSuccess(res)
      },
      function (err) {
        console.log(err)
      })
  }

  function handleSuccess(res) {
    if (typeof callback === 'function') {
      var data = res.data.data[0]
      var ids = []
      if (!data) {
        data = {}
      }
      if (JSON.stringify(data) !== '{}') {
        ids = data[categoryId]
      }
      callback(ids)
    }
  }
}*/
