(function (e, i) {
  var t = e.documentElement
  var n = navigator.userAgent.match(/iphone|ipod|ipad/gi)
  var a = n ? Math.min(i.devicePixelRatio, 3) : 1
  var m = 'orientationchange' in window ? 'orientationchange' : 'resize'
  t.dataset.dpr = a
  for (var d, l, c = !1, o = e.getElementsByTagName('meta'), r = 0; r < o.length; r++) {
    l = o[r]
    if (l.name === 'viewport') {
      c = !0
      d = l
    }
  }
  if (c) d.content = 'width=device-width,initial-scale=1.0,maximum-scale=1.0, minimum-scale=1.0,user-scalable=no'; else {
    var meta = e.createElement('meta')
    meta.name = 'viewport'
    meta.content = 'width=device-width,initial-scale=1.0,maximum-scale=1.0, minimum-scale=1.0,user-scalable=no'
    t.firstElementChild.appendChild(meta)
  }
  var s = function () {
    var e = t.clientWidth
    e / a > 640 && (e = 640 * a)
    window.remScale = e / 640
    t.style.fontSize = 200 * (e / 640) + 'px'
  }
  s()
  e.addEventListener && i.addEventListener(m, s, !1)
})(document, window)
