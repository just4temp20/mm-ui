/* eslint-disable */
!function (a, b) {
  function c(a) {
    return "" === f ? a : (a = a.charAt(0).toUpperCase() + a.substr(1), f + a)
  }

  var d = Math, e = b.createElement("div").style, f = function () {
      for (var a, b = "t,webkitT,MozT,msT,OT".split(","), c = 0, d = b.length; d > c; c++) if (a = b[c] + "ransform", a in e) return b[c].substr(0, b[c].length - 1);
      return !1
    }(), g = f ? "-" + f.toLowerCase() + "-" : "", h = c("transform"), i = c("transitionProperty"),
    j = c("transitionDuration"), k = c("transformOrigin"), l = c("transitionTimingFunction"),
    m = c("transitionDelay"), n = /android/gi.test(navigator.appVersion),
    o = /iphone|ipad/gi.test(navigator.appVersion), p = /hp-tablet/gi.test(navigator.appVersion),
    q = c("perspective") in e, r = "ontouchstart" in a && !p, s = !!f, t = c("transition") in e,
    u = "onorientationchange" in a ? "orientationchange" : "resize", v = r ? "touchstart" : "mousedown",
    w = r ? "touchmove" : "mousemove", x = r ? "touchend" : "mouseup", y = r ? "touchcancel" : "mouseup",
    z = "Moz" == f ? "DOMMouseScroll" : "mousewheel", A = function () {
      if (f === !1) return !1;
      var a = {
        "": "transitionend",
        webkit: "webkitTransitionEnd",
        Moz: "transitionend",
        O: "oTransitionEnd",
        ms: "MSTransitionEnd"
      };
      return a[f]
    }(), B = function () {
      return a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function (a) {
        return setTimeout(a, 1)
      }
    }(), C = function () {
      return a.cancelAnimationFrame || a.cancelRequestAnimationFrame || a.webkitCancelAnimationFrame || a.cancelAnimationFrame || a.webkitCancelRequestAnimationFrame || a.mozCancelRequestAnimationFrame || a.oCancelRequestAnimationFrame || a.msCancelRequestAnimationFrame || clearTimeout
    }(), D = q ? " translateZ(0)" : "", E = function (c, d) {
      var e, f = this;
      f.wrapper = "object" == typeof c ? c : b.getElementById(c), f.wrapper.style.overflow = "hidden", f.scroller = f.wrapper.children[0], f.options = {
        hScroll: !0,
        vScroll: !0,
        x: 0,
        y: 0,
        bounce: !0,
        bounceLock: !1,
        momentum: !0,
        lockDirection: !0,
        useTransform: !0,
        useTransition: !1,
        topOffset: 0,
        checkDOMChanges: !1,
        handleClick: !0,
        hScrollbar: !0,
        vScrollbar: !0,
        fixedScrollbar: n,
        hideScrollbar: o,
        fadeScrollbar: o && q,
        scrollbarClass: "",
        zoom: !1,
        zoomMin: 1,
        zoomMax: 4,
        doubleTapZoom: 2,
        wheelAction: "scroll",
        snap: !1,
        snapThreshold: 1,
        onRefresh: null,
        onBeforeScrollStart: function (a) {
          for (var b = a.target; 1 != b.nodeType;) b = b.parentNode;
          "SELECT" !== b.tagName && "INPUT" !== b.tagName && "TEXTAREA" !== b.tagName && a.preventDefault()
        },
        onScrollStart: null,
        onBeforeScrollMove: null,
        onScrollMove: null,
        onScrollBottom: null,
        onScrollTop: null,
        onBeforeScrollEnd: null,
        onScrollEnd: null,
        onTouchEnd: null,
        onDestroy: null,
        onZoomStart: null,
        onZoom: null,
        onZoomEnd: null
      };
      for (e in d) f.options[e] = d[e];
      f.x = f.options.x, f.y = f.options.y, f.options.useTransform = s && f.options.useTransform, f.options.hScrollbar = f.options.hScroll && f.options.hScrollbar, f.options.vScrollbar = f.options.vScroll && f.options.vScrollbar, f.options.zoom = f.options.useTransform && f.options.zoom, f.options.useTransition = t && f.options.useTransition, f.options.zoom && n && (D = ""), f.scroller.style[i] = f.options.useTransform ? g + "transform" : "top left", f.scroller.style[j] = "0", f.scroller.style[k] = "0 0", f.options.useTransition && (f.scroller.style[l] = "cubic-bezier(0.33,0.66,0.66,1)"), f.options.useTransform ? f.scroller.style[h] = "translate(" + f.x + "px," + f.y + "px)" + D : f.scroller.style.cssText += ";position:absolute;top:" + f.y + "px;left:" + f.x + "px", f.options.useTransition && (f.options.fixedScrollbar = !0), f.refresh(), f._bind(u, a), f._bind(v), r || (f._bind("mouseout", f.wrapper), "none" != f.options.wheelAction && f._bind(z)), f.options.checkDOMChanges && (f.checkDOMTime = setInterval(function () {
        f._checkDOMChanges()
      }, 500))
    };
  E.prototype = {
    enabled: !0,
    x: 0,
    y: 0,
    steps: [],
    scale: 1,
    currPageX: 0,
    currPageY: 0,
    pagesX: [],
    pagesY: [],
    aniTime: null,
    wheelZoomCount: 0,
    handleEvent: function (a) {
      var b = this;
      switch (a.type) {
        case v:
          if (!r && 0 !== a.button) return;
          b._start(a);
          break;
        case w:
          b._move(a);
          break;
        case x:
        case y:
          b._end(a);
          break;
        case u:
          b._resize();
          break;
        case z:
          b._wheel(a);
          break;
        case"mouseout":
          b._mouseout(a);
          break;
        case A:
          b._transitionEnd(a)
      }
    },
    _checkDOMChanges: function () {
      this.moved || this.zoomed || this.animating || this.scrollerW == this.scroller.offsetWidth * this.scale && this.scrollerH == this.scroller.offsetHeight * this.scale || this.refresh()
    },
    _scrollbar: function (a) {
      var c, e = this;
      return e[a + "Scrollbar"] ? (e[a + "ScrollbarWrapper"] || (c = b.createElement("div"), e.options.scrollbarClass ? c.className = e.options.scrollbarClass + a.toUpperCase() : c.style.cssText = "position:absolute;z-index:100;" + ("h" == a ? "height:7px;bottom:1px;left:2px;right:" + (e.vScrollbar ? "7" : "2") + "px" : "width:7px;bottom:" + (e.hScrollbar ? "7" : "2") + "px;top:2px;right:1px"), c.style.cssText += ";pointer-events:none;" + g + "transition-property:opacity;" + g + "transition-duration:" + (e.options.fadeScrollbar ? "350ms" : "0") + ";overflow:hidden;opacity:" + (e.options.hideScrollbar ? "0" : "1"), e.wrapper.appendChild(c), e[a + "ScrollbarWrapper"] = c, c = b.createElement("div"), e.options.scrollbarClass || (c.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" + g + "background-clip:padding-box;" + g + "box-sizing:border-box;" + ("h" == a ? "height:100%" : "width:100%") + ";" + g + "border-radius:3px;border-radius:3px"), c.style.cssText += ";pointer-events:none;" + g + "transition-property:" + g + "transform;" + g + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" + g + "transition-duration:0;" + g + "transform: translate(0,0)" + D, e.options.useTransition && (c.style.cssText += ";" + g + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"), e[a + "ScrollbarWrapper"].appendChild(c), e[a + "ScrollbarIndicator"] = c), "h" == a ? (e.hScrollbarSize = e.hScrollbarWrapper.clientWidth, e.hScrollbarIndicatorSize = d.max(d.round(e.hScrollbarSize * e.hScrollbarSize / e.scrollerW), 8), e.hScrollbarIndicator.style.width = e.hScrollbarIndicatorSize + "px", e.hScrollbarMaxScroll = e.hScrollbarSize - e.hScrollbarIndicatorSize, e.hScrollbarProp = e.hScrollbarMaxScroll / e.maxScrollX) : (e.vScrollbarSize = e.vScrollbarWrapper.clientHeight, e.vScrollbarIndicatorSize = d.max(d.round(e.vScrollbarSize * e.vScrollbarSize / e.scrollerH), 8), e.vScrollbarIndicator.style.height = e.vScrollbarIndicatorSize + "px", e.vScrollbarMaxScroll = e.vScrollbarSize - e.vScrollbarIndicatorSize, e.vScrollbarProp = e.vScrollbarMaxScroll / e.maxScrollY), void e._scrollbarPos(a, !0)) : void(e[a + "ScrollbarWrapper"] && (s && (e[a + "ScrollbarIndicator"].style[h] = ""), e[a + "ScrollbarWrapper"].parentNode.removeChild(e[a + "ScrollbarWrapper"]), e[a + "ScrollbarWrapper"] = null, e[a + "ScrollbarIndicator"] = null))
    },
    _resize: function () {
      var a = this;
      setTimeout(function () {
        a.refresh()
      }, n ? 200 : 0)
    },
    _pos: function (a, b) {
      this.zoomed || (a = this.hScroll ? a : 0, b = this.vScroll ? b : 0, this.options.useTransform ? this.scroller.style[h] = "translate(" + a + "px," + b + "px) scale(" + this.scale + ")" + D : (a = d.round(a), b = d.round(b), this.scroller.style.left = a + "px", this.scroller.style.top = b + "px"), this.x = a, this.y = b, this._scrollbarPos("h"), this._scrollbarPos("v"))
    },
    _scrollbarPos: function (a, b) {
      var c, e = this, f = "h" == a ? e.x : e.y;
      e[a + "Scrollbar"] && (f = e[a + "ScrollbarProp"] * f, 0 > f ? (e.options.fixedScrollbar || (c = e[a + "ScrollbarIndicatorSize"] + d.round(3 * f), 8 > c && (c = 8), e[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px"), f = 0) : f > e[a + "ScrollbarMaxScroll"] && (e.options.fixedScrollbar ? f = e[a + "ScrollbarMaxScroll"] : (c = e[a + "ScrollbarIndicatorSize"] - d.round(3 * (f - e[a + "ScrollbarMaxScroll"])), 8 > c && (c = 8), e[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px", f = e[a + "ScrollbarMaxScroll"] + (e[a + "ScrollbarIndicatorSize"] - c))), e[a + "ScrollbarWrapper"].style[m] = "0", e[a + "ScrollbarWrapper"].style.opacity = b && e.options.hideScrollbar ? "0" : "1", e[a + "ScrollbarIndicator"].style[h] = "translate(" + ("h" == a ? f + "px,0)" : "0," + f + "px)") + D)
    },
    _start: function (a) {
      var b, c, e, f, g, i = this, j = r ? a.touches[0] : a;
      i.enabled && (i.options.onBeforeScrollStart && i.options.onBeforeScrollStart.call(i, a), (i.options.useTransition || i.options.zoom) && i._transitionTime(0), i.moved = !1, i.animating = !1, i.zoomed = !1, i.distX = 0, i.distY = 0, i.absDistX = 0, i.absDistY = 0, i.dirX = 0, i.dirY = 0, i.options.zoom && r && a.touches.length > 1 && (f = d.abs(a.touches[0].pageX - a.touches[1].pageX), g = d.abs(a.touches[0].pageY - a.touches[1].pageY), i.touchesDistStart = d.sqrt(f * f + g * g), i.originX = d.abs(a.touches[0].pageX + a.touches[1].pageX - 2 * i.wrapperOffsetLeft) / 2 - i.x, i.originY = d.abs(a.touches[0].pageY + a.touches[1].pageY - 2 * i.wrapperOffsetTop) / 2 - i.y, i.options.onZoomStart && i.options.onZoomStart.call(i, a)), i.options.momentum && (i.options.useTransform ? (b = getComputedStyle(i.scroller, null)[h].replace(/[^0-9\-.,]/g, "").split(","), c = 1 * b[4], e = 1 * b[5]) : (c = 1 * getComputedStyle(i.scroller, null).left.replace(/[^0-9-]/g, ""), e = 1 * getComputedStyle(i.scroller, null).top.replace(/[^0-9-]/g, "")), (c != i.x || e != i.y) && (i.options.useTransition ? i._unbind(A) : C(i.aniTime), i.steps = [], i._pos(c, e))), i.absStartX = i.x, i.absStartY = i.y, i.startX = i.x, i.startY = i.y, i.pointX = j.pageX, i.pointY = j.pageY, i.startTime = a.timeStamp || Date.now(), i.options.onScrollStart && i.options.onScrollStart.call(i, a), i._bind(w), i._bind(x), i._bind(y))
    },
    _move: function (a) {
      var b, c, e, f = this, g = r ? a.touches[0] : a, i = g.pageX - f.pointX, j = g.pageY - f.pointY,
        k = f.x + i, l = f.y + j, m = a.timeStamp || Date.now();
      return f.options.onBeforeScrollMove && f.options.onBeforeScrollMove.call(f, a), f.options.zoom && r && a.touches.length > 1 ? (b = d.abs(a.touches[0].pageX - a.touches[1].pageX), c = d.abs(a.touches[0].pageY - a.touches[1].pageY), f.touchesDist = d.sqrt(b * b + c * c), f.zoomed = !0, e = 1 / f.touchesDistStart * f.touchesDist * this.scale, e < f.options.zoomMin ? e = .5 * f.options.zoomMin * Math.pow(2, e / f.options.zoomMin) : e > f.options.zoomMax && (e = 2 * f.options.zoomMax * Math.pow(.5, f.options.zoomMax / e)), f.lastScale = e / this.scale, k = this.originX - this.originX * f.lastScale + this.x, l = this.originY - this.originY * f.lastScale + this.y, this.scroller.style[h] = "translate(" + k + "px," + l + "px) scale(" + e + ")" + D, void(f.options.onZoom && f.options.onZoom.call(f, a))) : (f.pointX = g.pageX, f.pointY = g.pageY, (k > 0 || k < f.maxScrollX) && (k = f.options.bounce ? f.x + i / 2 : k >= 0 || f.maxScrollX >= 0 ? 0 : f.maxScrollX), (l > f.minScrollY || l < f.maxScrollY) && (l = f.options.bounce ? f.y + j / 2 : l >= f.minScrollY || f.maxScrollY >= 0 ? f.minScrollY : f.maxScrollY), f.distX += i, f.distY += j, f.absDistX = d.abs(f.distX), f.absDistY = d.abs(f.distY), void(f.absDistX < 6 && f.absDistY < 6 || (f.options.lockDirection && (f.absDistX > f.absDistY + 5 ? (l = f.y, j = 0) : f.absDistY > f.absDistX + 5 && (k = f.x, i = 0)), f.moved = !0, f._pos(k, l), f.dirX = i > 0 ? -1 : 0 > i ? 1 : 0, f.dirY = j > 0 ? -1 : 0 > j ? 1 : 0, m - f.startTime > 300 && (f.startTime = m, f.startX = f.x, f.startY = f.y), f.options.onScrollMove && f.options.onScrollMove.call(f, a))))
    },
    _end: function (a) {
      if (!r || 0 === a.touches.length) {
        var c, e, f, g, i, k, l, m = this, n = r ? a.changedTouches[0] : a, o = {dist: 0, time: 0},
          p = {dist: 0, time: 0}, q = (a.timeStamp || Date.now()) - m.startTime, s = m.x, t = m.y;
        if (m._unbind(w), m._unbind(x), m._unbind(y), m.options.onBeforeScrollEnd && m.options.onBeforeScrollEnd.call(m, a), m.zoomed) return l = m.scale * m.lastScale, l = Math.max(m.options.zoomMin, l), l = Math.min(m.options.zoomMax, l), m.lastScale = l / m.scale, m.scale = l, m.x = m.originX - m.originX * m.lastScale + m.x, m.y = m.originY - m.originY * m.lastScale + m.y, m.scroller.style[j] = "200ms", m.scroller.style[h] = "translate(" + m.x + "px," + m.y + "px) scale(" + m.scale + ")" + D, m.zoomed = !1, m.refresh(), void(m.options.onZoomEnd && m.options.onZoomEnd.call(m, a));
        if (!m.moved) return r && (m.doubleTapTimer && m.options.zoom ? (clearTimeout(m.doubleTapTimer), m.doubleTapTimer = null, m.options.onZoomStart && m.options.onZoomStart.call(m, a), m.zoom(m.pointX, m.pointY, 1 == m.scale ? m.options.doubleTapZoom : 1), m.options.onZoomEnd && setTimeout(function () {
          m.options.onZoomEnd.call(m, a)
        }, 200)) : this.options.handleClick && (m.doubleTapTimer = setTimeout(function () {
          for (m.doubleTapTimer = null, c = n.target; 1 != c.nodeType;) c = c.parentNode;
          "SELECT" != c.tagName && "INPUT" != c.tagName && "TEXTAREA" != c.tagName && (e = b.createEvent("MouseEvents"), e.initMouseEvent("click", !0, !0, a.view, 1, n.screenX, n.screenY, n.clientX, n.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null), e._fake = !0, c.dispatchEvent(e))
        }, m.options.zoom ? 250 : 0))), m._resetPos(200), void(m.options.onTouchEnd && m.options.onTouchEnd.call(m, a));
        if (300 > q && m.options.momentum && (o = s ? m._momentum(s - m.startX, q, -m.x, m.scrollerW - m.wrapperW + m.x, m.options.bounce ? m.wrapperW : 0) : o, p = t ? m._momentum(t - m.startY, q, -m.y, m.maxScrollY < 0 ? m.scrollerH - m.wrapperH + m.y - m.minScrollY : 0, m.options.bounce ? m.wrapperH : 0) : p, s = m.x + o.dist, t = m.y + p.dist, (m.x > 0 && s > 0 || m.x < m.maxScrollX && s < m.maxScrollX) && (o = {
            dist: 0,
            time: 0
          }), (m.y > m.minScrollY && t > m.minScrollY || m.y < m.maxScrollY && t < m.maxScrollY) && (p = {
            dist: 0,
            time: 0
          })), o.dist || p.dist) return i = d.max(d.max(o.time, p.time), 10), m.options.snap && (f = s - m.absStartX, g = t - m.absStartY, d.abs(f) < m.options.snapThreshold && d.abs(g) < m.options.snapThreshold ? m.scrollTo(m.absStartX, m.absStartY, 200) : (k = m._snap(s, t), s = k.x, t = k.y, i = d.max(k.time, i))), m.scrollTo(d.round(s), d.round(t), i), void(m.options.onTouchEnd && m.options.onTouchEnd.call(m, a));
        if (m.options.snap) return f = s - m.absStartX, g = t - m.absStartY, d.abs(f) < m.options.snapThreshold && d.abs(g) < m.options.snapThreshold ? m.scrollTo(m.absStartX, m.absStartY, 200) : (k = m._snap(m.x, m.y), (k.x != m.x || k.y != m.y) && m.scrollTo(k.x, k.y, k.time)), void(m.options.onTouchEnd && m.options.onTouchEnd.call(m, a));
        m._resetPos(200), m.options.onTouchEnd && m.options.onTouchEnd.call(m, a), t <= m.maxScrollY && m.options.onScrollBottom && m.options.onScrollBottom.call(m, a), t >= 0 && m.options.onScrollTop && m.options.onScrollTop.call(m, a)
      }
    },
    _resetPos: function (a) {
      var b = this, c = b.x >= 0 ? 0 : b.x < b.maxScrollX ? b.maxScrollX : b.x,
        d = b.y >= b.minScrollY || b.maxScrollY > 0 ? b.minScrollY : b.y < b.maxScrollY ? b.maxScrollY : b.y;
      return c == b.x && d == b.y ? (b.moved && (b.moved = !1, b.options.onScrollEnd && b.options.onScrollEnd.call(b)), b.hScrollbar && b.options.hideScrollbar && ("webkit" == f && (b.hScrollbarWrapper.style[m] = "300ms"), b.hScrollbarWrapper.style.opacity = "0"), void(b.vScrollbar && b.options.hideScrollbar && ("webkit" == f && (b.vScrollbarWrapper.style[m] = "300ms"), b.vScrollbarWrapper.style.opacity = "0"))) : void b.scrollTo(c, d, a || 0)
    },
    _wheel: function (a) {
      var b, c, d, e, f, g = this;
      if ("wheelDeltaX" in a) b = a.wheelDeltaX / 12, c = a.wheelDeltaY / 12; else if ("wheelDelta" in a) b = c = a.wheelDelta / 12; else {
        if (!("detail" in a)) return;
        b = c = 3 * -a.detail
      }
      return "zoom" == g.options.wheelAction ? (f = g.scale * Math.pow(2, 1 / 3 * (c ? c / Math.abs(c) : 0)), f < g.options.zoomMin && (f = g.options.zoomMin), f > g.options.zoomMax && (f = g.options.zoomMax), void(f != g.scale && (!g.wheelZoomCount && g.options.onZoomStart && g.options.onZoomStart.call(g, a), g.wheelZoomCount++, g.zoom(a.pageX, a.pageY, f, 400), setTimeout(function () {
        g.wheelZoomCount--, !g.wheelZoomCount && g.options.onZoomEnd && g.options.onZoomEnd.call(g, a)
      }, 400)))) : (d = g.x + b, e = g.y + c, d > 0 ? d = 0 : d < g.maxScrollX && (d = g.maxScrollX), e > g.minScrollY ? e = g.minScrollY : e < g.maxScrollY && (e = g.maxScrollY), void(g.maxScrollY < 0 && g.scrollTo(d, e, 0)))
    },
    _mouseout: function (a) {
      var b = a.relatedTarget;
      if (!b) return void this._end(a);
      for (; b = b.parentNode;) if (b == this.wrapper) return;
      this._end(a)
    },
    _transitionEnd: function (a) {
      var b = this;
      a.target == b.scroller && (b._unbind(A), b._startAni())
    },
    _startAni: function () {
      var a, b, c, e = this, f = e.x, g = e.y, h = Date.now();
      if (!e.animating) {
        if (!e.steps.length) return void e._resetPos(400);
        if (a = e.steps.shift(), a.x == f && a.y == g && (a.time = 0), e.animating = !0, e.moved = !0, e.options.useTransition) return e._transitionTime(a.time), e._pos(a.x, a.y), e.animating = !1, void(a.time ? e._bind(A) : e._resetPos(0));
        c = function () {
          var i, j, k = Date.now();
          return k >= h + a.time ? (e._pos(a.x, a.y), e.animating = !1, e.options.onAnimationEnd && e.options.onAnimationEnd.call(e), void e._startAni()) : (k = (k - h) / a.time - 1, b = d.sqrt(1 - k * k), i = (a.x - f) * b + f, j = (a.y - g) * b + g, e._pos(i, j), void(e.animating && (e.aniTime = B(c))))
        }, c()
      }
    },
    _transitionTime: function (a) {
      a += "ms", this.scroller.style[j] = a, this.hScrollbar && (this.hScrollbarIndicator.style[j] = a), this.vScrollbar && (this.vScrollbarIndicator.style[j] = a)
    },
    _momentum: function (a, b, c, e, f) {
      var g = 6e-4, h = d.abs(a) / b, i = h * h / (2 * g), j = 0, k = 0;
      return a > 0 && i > c ? (k = f / (6 / (i / h * g)), c += k, h = h * c / i, i = c) : 0 > a && i > e && (k = f / (6 / (i / h * g)), e += k, h = h * e / i, i = e), i *= 0 > a ? -1 : 1, j = h / g, {
        dist: i,
        time: d.round(j)
      }
    },
    _offset: function (a) {
      for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent;) b -= a.offsetLeft, c -= a.offsetTop;
      return a != this.wrapper && (b *= this.scale, c *= this.scale), {left: b, top: c}
    },
    _snap: function (a, b) {
      var c, e, f, g, h, i, j = this;
      for (f = j.pagesX.length - 1, c = 0, e = j.pagesX.length; e > c; c++) if (a >= j.pagesX[c]) {
        f = c;
        break
      }
      for (f == j.currPageX && f > 0 && j.dirX < 0 && f--, a = j.pagesX[f], h = d.abs(a - j.pagesX[j.currPageX]), h = h ? d.abs(j.x - a) / h * 500 : 0, j.currPageX = f, f = j.pagesY.length - 1, c = 0; f > c; c++) if (b >= j.pagesY[c]) {
        f = c;
        break
      }
      return f == j.currPageY && f > 0 && j.dirY < 0 && f--, b = j.pagesY[f], i = d.abs(b - j.pagesY[j.currPageY]), i = i ? d.abs(j.y - b) / i * 500 : 0, j.currPageY = f, g = d.round(d.max(h, i)) || 200, {
        x: a,
        y: b,
        time: g
      }
    },
    _bind: function (a, b, c) {
      (b || this.scroller).addEventListener(a, this, !!c)
    },
    _unbind: function (a, b, c) {
      (b || this.scroller).removeEventListener(a, this, !!c)
    },
    destroy: function () {
      var b = this;
      b.scroller.style[h] = "", b.hScrollbar = !1, b.vScrollbar = !1, b._scrollbar("h"), b._scrollbar("v"), b._unbind(u, a), b._unbind(v), b._unbind(w), b._unbind(x), b._unbind(y), b.options.hasTouch || (b._unbind("mouseout", b.wrapper), b._unbind(z)), b.options.useTransition && b._unbind(A), b.options.checkDOMChanges && clearInterval(b.checkDOMTime), b.options.onDestroy && b.options.onDestroy.call(b)
    },
    refresh: function () {
      var a, b, c, e, f = this, g = 0, h = 0;
      if (f.scale < f.options.zoomMin && (f.scale = f.options.zoomMin), f.wrapperW = f.wrapper.clientWidth || 1, f.wrapperH = f.wrapper.clientHeight || 1, f.minScrollY = -f.options.topOffset || 0, f.scrollerW = d.round(f.scroller.offsetWidth * f.scale), f.scrollerH = d.round((f.scroller.offsetHeight + f.minScrollY) * f.scale), f.maxScrollX = f.wrapperW - f.scrollerW, f.maxScrollY = f.wrapperH - f.scrollerH + f.minScrollY, f.dirX = 0, f.dirY = 0, f.options.onRefresh && f.options.onRefresh.call(f), f.hScroll = f.options.hScroll && f.maxScrollX < 0, f.vScroll = f.options.vScroll && (!f.options.bounceLock && !f.hScroll || f.scrollerH > f.wrapperH), f.hScrollbar = f.hScroll && f.options.hScrollbar, f.vScrollbar = f.vScroll && f.options.vScrollbar && f.scrollerH > f.wrapperH, a = f._offset(f.wrapper), f.wrapperOffsetLeft = -a.left, f.wrapperOffsetTop = -a.top, "string" == typeof f.options.snap) for (f.pagesX = [], f.pagesY = [], e = f.scroller.querySelectorAll(f.options.snap), b = 0, c = e.length; c > b; b++) g = f._offset(e[b]), g.left += f.wrapperOffsetLeft, g.top += f.wrapperOffsetTop, f.pagesX[b] = g.left < f.maxScrollX ? f.maxScrollX : g.left * f.scale, f.pagesY[b] = g.top < f.maxScrollY ? f.maxScrollY : g.top * f.scale; else if (f.options.snap) {
        for (f.pagesX = []; g >= f.maxScrollX;) f.pagesX[h] = g, g -= f.wrapperW, h++;
        for (f.maxScrollX % f.wrapperW && (f.pagesX[f.pagesX.length] = f.maxScrollX - f.pagesX[f.pagesX.length - 1] + f.pagesX[f.pagesX.length - 1]), g = 0, h = 0, f.pagesY = []; g >= f.maxScrollY;) f.pagesY[h] = g, g -= f.wrapperH, h++;
        f.maxScrollY % f.wrapperH && (f.pagesY[f.pagesY.length] = f.maxScrollY - f.pagesY[f.pagesY.length - 1] + f.pagesY[f.pagesY.length - 1])
      }
      f._scrollbar("h"), f._scrollbar("v"), f.zoomed || (f.scroller.style[j] = "0", f._resetPos(200))
    },
    scrollTo: function (a, b, c, d) {
      var e, f, g = this, h = a;
      for (g.stop(), h.length || (h = [{
        x: a,
        y: b,
        time: c,
        relative: d
      }]), e = 0, f = h.length; f > e; e++) h[e].relative && (h[e].x = g.x - h[e].x, h[e].y = g.y - h[e].y), g.steps.push({
        x: h[e].x,
        y: h[e].y,
        time: h[e].time || 0
      });
      g._startAni()
    },
    scrollToElement: function (a, b) {
      var c, e = this;
      a = a.nodeType ? a : e.scroller.querySelector(a), a && (c = e._offset(a), c.left += e.wrapperOffsetLeft, c.top += e.wrapperOffsetTop, c.left = c.left > 0 ? 0 : c.left < e.maxScrollX ? e.maxScrollX : c.left,
        c.top = c.top > e.minScrollY ? e.minScrollY : c.top < e.maxScrollY ? e.maxScrollY : c.top, b = void 0 === b ? d.max(2 * d.abs(c.left), 2 * d.abs(c.top)) : b, e.scrollTo(c.left, c.top, b))
    },
    scrollToPage: function (a, b, c) {
      var d, e, f = this;
      c = void 0 === c ? 400 : c, f.options.onScrollStart && f.options.onScrollStart.call(f), f.options.snap ? (a = "next" == a ? f.currPageX + 1 : "prev" == a ? f.currPageX - 1 : a, b = "next" == b ? f.currPageY + 1 : "prev" == b ? f.currPageY - 1 : b, a = 0 > a ? 0 : a > f.pagesX.length - 1 ? f.pagesX.length - 1 : a, b = 0 > b ? 0 : b > f.pagesY.length - 1 ? f.pagesY.length - 1 : b, f.currPageX = a, f.currPageY = b, d = f.pagesX[a], e = f.pagesY[b]) : (d = -f.wrapperW * a, e = -f.wrapperH * b, d < f.maxScrollX && (d = f.maxScrollX), e < f.maxScrollY && (e = f.maxScrollY)), f.scrollTo(d, e, c)
    },
    disable: function () {
      this.stop(), this._resetPos(0), this.enabled = !1, this._unbind(w), this._unbind(x), this._unbind(y)
    },
    enable: function () {
      this.enabled = !0
    },
    stop: function () {
      this.options.useTransition ? this._unbind(A) : C(this.aniTime), this.steps = [], this.moved = !1, this.animating = !1
    },
    zoom: function (a, b, c, d) {
      var e = this, f = c / e.scale;
      e.options.useTransform && (e.zoomed = !0, d = void 0 === d ? 200 : d, a = a - e.wrapperOffsetLeft - e.x, b = b - e.wrapperOffsetTop - e.y, e.x = a - a * f + e.x, e.y = b - b * f + e.y, e.scale = c, e.refresh(), e.x = e.x > 0 ? 0 : e.x < e.maxScrollX ? e.maxScrollX : e.x, e.y = e.y > e.minScrollY ? e.minScrollY : e.y < e.maxScrollY ? e.maxScrollY : e.y, e.scroller.style[j] = d + "ms", e.scroller.style[h] = "translate(" + e.x + "px," + e.y + "px) scale(" + c + ")" + D, e.zoomed = !1)
    },
    isReady: function () {
      return !this.moved && !this.zoomed && !this.animating
    }
  },
    e = null,
    "undefined" != typeof exports ? exports.iScroll = E : a.iScroll = E
}(this, document)
/* eslint-enable */
