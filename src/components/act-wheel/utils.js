const Utils = {
  randomFrom(lowerValue, upperValue) {
    return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue)
  },
  calcStyle(oStyle) {
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
  },
  changeUrlArg(url, arg, argVal) {
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
}
export default Utils
