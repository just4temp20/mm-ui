let HtmlCode = {
  decodeHtml: function (s) {
    s = (s !== undefined) ? s : this.toString()
    var arrEntities = {'lt': '<', 'gt': '>', 'nbsp': ' ', 'amp': '&', 'quot': '"'}
    return s.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (all, t) {
      return arrEntities[t]
    })
  }
}
export default HtmlCode
