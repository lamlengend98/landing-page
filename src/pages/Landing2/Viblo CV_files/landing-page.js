/* eslint-disable no-labels */
/* eslint-disable no-label-var */
/* eslint-disable default-case */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable no-new-func */
/* eslint-disable no-sequences */
/* eslint-disable no-cond-assign */
/* eslint-disable no-bitwise */
/* eslint-disable guard-for-in */
/* eslint-disable no-multi-assign */
!(function (t) {
  const e = {}
  function n(r) {
    if (e[r]) return e[r].exports
    const i = (e[r] = { i: r, l: !1, exports: {} })
    return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
  }
  (n.m = t),
  (n.c = e),
  (n.d = function (t, e, r) {
    n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r })
  }),
  (n.r = function (t) {
    typeof Symbol !== 'undefined'
        && Symbol.toStringTag
        && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
    Object.defineProperty(t, '__esModule', { value: !0 })
  }),
  (n.t = function (t, e) {
    if ((1 & e && (t = n(t)), 8 & e)) return t
    if (4 & e && typeof t === 'object' && t && t.__esModule) return t
    const r = Object.create(null)
    if (
      (n.r(r),
      Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
      2 & e && typeof t !== 'string')
    ) {
      for (const i in t) {
        n.d(
          r,
          i,
          ((e) => t[e]).bind(null, i),
        )
      }
    }
    return r
  }),
  (n.n = function (t) {
    const e = t && t.__esModule
      ? function () {
        return t.default
      }
      : function () {
        return t
      }
    return n.d(e, 'a', e), e
  }),
  (n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }),
  (n.p = '/'),
  n((n.s = 10))
}([
  function (t, e, n) {
    const r = n(2)
    const i = Object.prototype.toString
    function o(t) {
      return i.call(t) === '[object Array]'
    }
    function a(t) {
      return void 0 === t
    }
    function s(t) {
      return t !== null && typeof t === 'object'
    }
    function u(t) {
      return i.call(t) === '[object Function]'
    }
    function c(t, e) {
      if (t != null) {
        if ((typeof t !== 'object' && (t = [t]), o(t))) for (let n = 0, r = t.length; n < r; n++) e.call(null, t[n], n, t)
        else for (const i in t) Object.prototype.hasOwnProperty.call(t, i) && e.call(null, t[i], i, t)
      }
    }
    t.exports = {
      isArray: o,
      isArrayBuffer(t) {
        return i.call(t) === '[object ArrayBuffer]'
      },
      isBuffer(t) {
        return (
          t !== null
          && !a(t)
          && t.constructor !== null
          && !a(t.constructor)
          && typeof t.constructor.isBuffer === 'function'
          && t.constructor.isBuffer(t)
        )
      },
      isFormData(t) {
        return typeof FormData !== 'undefined' && t instanceof FormData
      },
      isArrayBufferView(t) {
        return typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView
          ? ArrayBuffer.isView(t)
          : t && t.buffer && t.buffer instanceof ArrayBuffer
      },
      isString(t) {
        return typeof t === 'string'
      },
      isNumber(t) {
        return typeof t === 'number'
      },
      isObject: s,
      isUndefined: a,
      isDate(t) {
        return i.call(t) === '[object Date]'
      },
      isFile(t) {
        return i.call(t) === '[object File]'
      },
      isBlob(t) {
        return i.call(t) === '[object Blob]'
      },
      isFunction: u,
      isStream(t) {
        return s(t) && u(t.pipe)
      },
      isURLSearchParams(t) {
        return typeof URLSearchParams !== 'undefined' && t instanceof URLSearchParams
      },
      isStandardBrowserEnv() {
        return (
          (typeof navigator === 'undefined'
            || (navigator.product !== 'ReactNative'
              && navigator.product !== 'NativeScript'
              && navigator.product !== 'NS'))
          && typeof window !== 'undefined'
          && typeof document !== 'undefined'
        )
      },
      forEach: c,
      merge: function t() {
        const e = {}
        function n(n, r) {
          typeof e[r] === 'object' && typeof n === 'object' ? (e[r] = t(e[r], n)) : (e[r] = n)
        }
        for (let r = 0, i = arguments.length; r < i; r++) c(arguments[r], n)
        return e
      },
      deepMerge: function t() {
        const e = {}
        function n(n, r) {
          typeof e[r] === 'object' && typeof n === 'object'
            ? (e[r] = t(e[r], n))
            : (e[r] = typeof n === 'object' ? t({}, n) : n)
        }
        for (let r = 0, i = arguments.length; r < i; r++) c(arguments[r], n)
        return e
      },
      extend(t, e, n) {
        return (
          c(e, (e, i) => {
            t[i] = n && typeof e === 'function' ? r(e, n) : e
          }),
          t
        )
      },
      trim(t) {
        return t.replace(/^\s*/, '').replace(/\s*$/, '')
      },
    }
  },
  function (t, e) {
    let n
    n = (function () {
      return this
    }())
    try {
      n = n || new Function('return this')()
    } catch (t) {
      typeof window === 'object' && (n = window)
    }
    t.exports = n
  },
  function (t, e, n) {
    t.exports = function (t, e) {
      return function () {
        for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r]
        return t.apply(e, n)
      }
    }
  },
  function (t, e, n) {
    const r = n(0)
    function i(t) {
      return encodeURIComponent(t)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']')
    }
    t.exports = function (t, e, n) {
      if (!e) return t
      let o
      if (n) o = n(e)
      else if (r.isURLSearchParams(e)) o = e.toString()
      else {
        const a = []
        r.forEach(e, (t, e) => {
          t != null
            && (r.isArray(t) ? (e += '[]') : (t = [t]),
            r.forEach(t, (t) => {
              r.isDate(t) ? (t = t.toISOString()) : r.isObject(t) && (t = JSON.stringify(t)),
              a.push(`${i(e)}=${i(t)}`)
            }))
        }),
        (o = a.join('&'))
      }
      if (o) {
        const s = t.indexOf('#')
        s !== -1 && (t = t.slice(0, s)), (t += (t.indexOf('?') === -1 ? '?' : '&') + o)
      }
      return t
    }
  },
  function (t, e, n) {
    t.exports = function (t) {
      return !(!t || !t.__CANCEL__)
    }
  },
  function (t, e, n) {
    (function (e) {
      const r = n(0)
      const i = n(25)
      const o = { 'Content-Type': 'application/x-www-form-urlencoded' }
      function a(t, e) {
        !r.isUndefined(t) && r.isUndefined(t['Content-Type']) && (t['Content-Type'] = e)
      }
      let s
      const u = {
        adapter:
            ((typeof XMLHttpRequest !== 'undefined'
              || (void 0 !== e && Object.prototype.toString.call(e) === '[object process]'))
              && (s = n(6)),
            s),
        transformRequest: [
          function (t, e) {
            return (
              i(e, 'Accept'),
              i(e, 'Content-Type'),
              r.isFormData(t)
                || r.isArrayBuffer(t)
                || r.isBuffer(t)
                || r.isStream(t)
                || r.isFile(t)
                || r.isBlob(t)
                ? t
                : r.isArrayBufferView(t)
                  ? t.buffer
                  : r.isURLSearchParams(t)
                    ? (a(e, 'application/x-www-form-urlencoded;charset=utf-8'), t.toString())
                    : r.isObject(t)
                      ? (a(e, 'application/json;charset=utf-8'), JSON.stringify(t))
                      : t
            )
          },
        ],
        transformResponse: [
          function (t) {
            if (typeof t === 'string') {
              try {
                t = JSON.parse(t)
              } catch (t) {}
            }
            return t
          },
        ],
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        validateStatus(t) {
          return t >= 200 && t < 300
        },
      };
      (u.headers = { common: { Accept: 'application/json, text/plain, */*' } }),
      r.forEach(['delete', 'get', 'head'], (t) => {
        u.headers[t] = {}
      }),
      r.forEach(['post', 'put', 'patch'], (t) => {
        u.headers[t] = r.merge(o)
      }),
      (t.exports = u)
    }.call(this, n(24)))
  },
  function (t, e, n) {
    const r = n(0)
    const i = n(26)
    const o = n(3)
    const a = n(28)
    const s = n(31)
    const u = n(32)
    const c = n(7)
    t.exports = function (t) {
      return new Promise(((e, l) => {
        let f = t.data
        const p = t.headers
        r.isFormData(f) && delete p['Content-Type']
        let d = new XMLHttpRequest()
        if (t.auth) {
          const h = t.auth.username || ''
          const v = t.auth.password || ''
          p.Authorization = `Basic ${btoa(`${h}:${v}`)}`
        }
        const g = a(t.baseURL, t.url)
        if (
          (d.open(t.method.toUpperCase(), o(g, t.params, t.paramsSerializer), !0),
          (d.timeout = t.timeout),
          (d.onreadystatechange = function () {
            if (
              d
              && d.readyState === 4
              && (d.status !== 0 || (d.responseURL && d.responseURL.indexOf('file:') === 0))
            ) {
              const n = 'getAllResponseHeaders' in d ? s(d.getAllResponseHeaders()) : null
              const r = {
                data: t.responseType && t.responseType !== 'text' ? d.response : d.responseText,
                status: d.status,
                statusText: d.statusText,
                headers: n,
                config: t,
                request: d,
              }
              i(e, l, r), (d = null)
            }
          }),
          (d.onabort = function () {
            d && (l(c('Request aborted', t, 'ECONNABORTED', d)), (d = null))
          }),
          (d.onerror = function () {
            l(c('Network Error', t, null, d)), (d = null)
          }),
          (d.ontimeout = function () {
            let e = `timeout of ${t.timeout}ms exceeded`
            t.timeoutErrorMessage && (e = t.timeoutErrorMessage),
            l(c(e, t, 'ECONNABORTED', d)),
            (d = null)
          }),
          r.isStandardBrowserEnv())
        ) {
          const m = n(33)
          const y = (t.withCredentials || u(g)) && t.xsrfCookieName ? m.read(t.xsrfCookieName) : void 0
          y && (p[t.xsrfHeaderName] = y)
        }
        if (
          ('setRequestHeader' in d
            && r.forEach(p, (t, e) => {
              void 0 === f && e.toLowerCase() === 'content-type'
                ? delete p[e]
                : d.setRequestHeader(e, t)
            }),
          r.isUndefined(t.withCredentials) || (d.withCredentials = !!t.withCredentials),
          t.responseType)
        ) {
          try {
            d.responseType = t.responseType
          } catch (e) {
            if (t.responseType !== 'json') throw e
          }
        }
        typeof t.onDownloadProgress === 'function'
          && d.addEventListener('progress', t.onDownloadProgress),
        typeof t.onUploadProgress === 'function'
            && d.upload
            && d.upload.addEventListener('progress', t.onUploadProgress),
        t.cancelToken
            && t.cancelToken.promise.then((t) => {
              d && (d.abort(), l(t), (d = null))
            }),
        void 0 === f && (f = null),
        d.send(f)
      }))
    }
  },
  function (t, e, n) {
    const r = n(27)
    t.exports = function (t, e, n, i, o) {
      const a = new Error(t)
      return r(a, e, n, i, o)
    }
  },
  function (t, e, n) {
    const r = n(0)
    t.exports = function (t, e) {
      e = e || {}
      const n = {}
      const i = ['url', 'method', 'params', 'data']
      const o = ['headers', 'auth', 'proxy']
      const a = [
        'baseURL',
        'url',
        'transformRequest',
        'transformResponse',
        'paramsSerializer',
        'timeout',
        'withCredentials',
        'adapter',
        'responseType',
        'xsrfCookieName',
        'xsrfHeaderName',
        'onUploadProgress',
        'onDownloadProgress',
        'maxContentLength',
        'validateStatus',
        'maxRedirects',
        'httpAgent',
        'httpsAgent',
        'cancelToken',
        'socketPath',
      ]
      r.forEach(i, (t) => {
        void 0 !== e[t] && (n[t] = e[t])
      }),
      r.forEach(o, (i) => {
        r.isObject(e[i])
          ? (n[i] = r.deepMerge(t[i], e[i]))
          : void 0 !== e[i]
            ? (n[i] = e[i])
            : r.isObject(t[i])
              ? (n[i] = r.deepMerge(t[i]))
              : void 0 !== t[i] && (n[i] = t[i])
      }),
      r.forEach(a, (r) => {
        void 0 !== e[r] ? (n[r] = e[r]) : void 0 !== t[r] && (n[r] = t[r])
      })
      const s = i.concat(o).concat(a)
      const u = Object.keys(e).filter((t) => s.indexOf(t) === -1)
      return (
        r.forEach(u, (r) => {
          void 0 !== e[r] ? (n[r] = e[r]) : void 0 !== t[r] && (n[r] = t[r])
        }),
        n
      )
    }
  },
  function (t, e, n) {
    function r(t) {
      this.message = t
    }
    (r.prototype.toString = function () {
      return `Cancel${this.message ? `: ${this.message}` : ''}`
    }),
    (r.prototype.__CANCEL__ = !0),
    (t.exports = r)
  },
  function (t, e, n) {
    n(11), (t.exports = n(36))
  },
  function (t, e, n) {
    function r(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t
        }(t))
        || (function (t, e) {
          if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(t))) return
          const n = []
          let r = !0
          let i = !1
          let o = void 0
          try {
            for (
              var a, s = t[Symbol.iterator]();
              !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e);
              r = !0
            );
          } catch (t) {
            (i = !0), (o = t)
          } finally {
            try {
              r || s.return == null || s.return()
            } finally {
              if (i) throw o
            }
          }
          return n
        }(t, e))
        || (function (t, e) {
          if (!t) return
          if (typeof t === 'string') return i(t, e)
          let n = Object.prototype.toString.call(t).slice(8, -1)
          n === 'Object' && t.constructor && (n = t.constructor.name)
          if (n === 'Map' || n === 'Set') return Array.from(n)
          if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(t, e)
        }(t, e))
        || (function () {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          )
        }())
      )
    }
    function i(t, e) {
      (e == null || e > t.length) && (e = t.length)
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]
      return r
    }
    n(12),
    new WOW().init(),
    $('.mobile-menu-item').on('click', (t) => {
      $('#header-button-handle').click(),
      $('html, body').animate(
        { scrollTop: $($(t.target).attr('data-target')).offset().top },
        1e3,
      )
    }),
    $('.header__nav--container--close').click((t) => {
      $('#header-button-handle').click()
    }),
    $(document).ready(() => {
      $(window).scroll(function () {
        return $(this).scrollTop() > 50 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut()
      })
    }),
    (window.addClassActive = function (t) {
      for (
        let e = document.getElementsByClassName('header__nav--desktop--item'),
          n = 0,
          i = Object.entries(e);
        n < i.length;
        n++
      ) {
        const o = r(i[n], 2)
        o[0]
        o[1].classList.remove('header-item-active')
      }
      document.getElementById('target-'.concat(t)).className = 'nav-item header__nav--desktop--item header-item-active'
    }),
    $(window).scroll(() => {
      window.scrollY > 60
          && ($('.header__navbar').addClass('header__top'), $('.bg-right').css('display', 'block')),
      window.scrollY == 0
            && ($('.header__navbar').removeClass('header__top'), $('.bg-right').css('display', 'none'))
    })
  },
  function (t, e, n) {
    window._ = n(13)
    try {
      (window.Popper = n(15).default), (window.$ = window.jQuery = n(16)), n(17)
    } catch (t) {}
    (window.axios = n(18)),
    (window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest')
    const r = document.head.querySelector('meta[name="csrf-token"]')
    r
      ? ((window.axios.defaults.headers.common['X-CSRF-TOKEN'] = r.content),
      $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': r.content } }))
      : console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token')
  },
  function (t, e, n) {
    (function (t, r) {
      let i;
      (function () {
        const o = 'Expected a function'
        const a = '__lodash_placeholder__'
        const s = [
          ['ary', 128],
          ['bind', 1],
          ['bindKey', 2],
          ['curry', 8],
          ['curryRight', 16],
          ['flip', 512],
          ['partial', 32],
          ['partialRight', 64],
          ['rearg', 256],
        ]
        const u = '[object Arguments]'
        const c = '[object Array]'
        const l = '[object Boolean]'
        const f = '[object Date]'
        const p = '[object Error]'
        const d = '[object Function]'
        const h = '[object GeneratorFunction]'
        const v = '[object Map]'
        const g = '[object Number]'
        const m = '[object Object]'
        const y = '[object RegExp]'
        const _ = '[object Set]'
        const b = '[object String]'
        const w = '[object Symbol]'
        const x = '[object WeakMap]'
        const E = '[object ArrayBuffer]'
        const T = '[object DataView]'
        const C = '[object Float32Array]'
        const S = '[object Float64Array]'
        const A = '[object Int8Array]'
        const D = '[object Int16Array]'
        const k = '[object Int32Array]'
        const N = '[object Uint8Array]'
        const O = '[object Uint16Array]'
        const j = '[object Uint32Array]'
        const I = /\b__p \+= '';/g
        const L = /\b(__p \+=) '' \+/g
        const R = /(__e\(.*?\)|\b__t\)) \+\n'';/g
        const P = /&(?:amp|lt|gt|quot|#39);/g
        const H = /[&<>"']/g
        const M = RegExp(P.source)
        const W = RegExp(H.source)
        const B = /<%-([\s\S]+?)%>/g
        const q = /<%([\s\S]+?)%>/g
        const F = /<%=([\s\S]+?)%>/g
        const U = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
        const $ = /^\w*$/
        const z = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
        const Q = /[\\^$.*+?()[\]{}|]/g
        const K = RegExp(Q.source)
        const V = /^\s+|\s+$/g
        const Y = /^\s+/
        const X = /\s+$/
        const G = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/
        const J = /\{\n\/\* \[wrapped with (.+)\] \*/
        const Z = /,? & /
        const tt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g
        const et = /\\(\\)?/g
        const nt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g
        const rt = /\w*$/
        const it = /^[-+]0x[0-9a-f]+$/i
        const ot = /^0b[01]+$/i
        const at = /^\[object .+?Constructor\]$/
        const st = /^0o[0-7]+$/i
        const ut = /^(?:0|[1-9]\d*)$/
        const ct = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g
        const lt = /($^)/
        const ft = /['\n\r\u2028\u2029\\]/g
        const pt = '\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff'
        const dt = '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000'
        const ht = '[\\ud800-\\udfff]'
        const vt = `[${dt}]`
        const gt = `[${pt}]`
        const mt = '\\d+'
        const yt = '[\\u2700-\\u27bf]'
        const _t = '[a-z\\xdf-\\xf6\\xf8-\\xff]'
        const bt = `[^\\ud800-\\udfff${
          dt
        }${mt
        }\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]`
        const wt = '\\ud83c[\\udffb-\\udfff]'
        const xt = '[^\\ud800-\\udfff]'
        const Et = '(?:\\ud83c[\\udde6-\\uddff]){2}'
        const Tt = '[\\ud800-\\udbff][\\udc00-\\udfff]'
        const Ct = '[A-Z\\xc0-\\xd6\\xd8-\\xde]'
        const St = `(?:${_t}|${bt})`
        const At = `(?:${Ct}|${bt})`
        const Dt = `(?:${gt}|${wt})` + '?'
        const kt = `[\\ufe0e\\ufe0f]?${
          Dt
        }(?:\\u200d(?:${[xt, Et, Tt].join('|')})[\\ufe0e\\ufe0f]?${Dt})*`
        const Nt = `(?:${[yt, Et, Tt].join('|')})${kt}`
        const Ot = `(?:${[`${xt + gt}?`, gt, Et, Tt, ht].join('|')})`
        const jt = RegExp("['’]", 'g')
        const It = RegExp(gt, 'g')
        const Lt = RegExp(`${wt}(?=${wt})|${Ot}${kt}`, 'g')
        const Rt = RegExp(
          [
            `${Ct}?${_t}+(?:['’](?:d|ll|m|re|s|t|ve))?(?=${[vt, Ct, '$'].join('|')})`,
            `${At}+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=${[vt, Ct + St, '$'].join('|')})`,
            `${Ct}?${St}+(?:['’](?:d|ll|m|re|s|t|ve))?`,
            `${Ct}+(?:['’](?:D|LL|M|RE|S|T|VE))?`,
            '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
            '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
            mt,
            Nt,
          ].join('|'),
          'g',
        )
        const Pt = RegExp(`[\\u200d\\ud800-\\udfff${pt}\\ufe0e\\ufe0f]`)
        const Ht = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/
        const Mt = [
          'Array',
          'Buffer',
          'DataView',
          'Date',
          'Error',
          'Float32Array',
          'Float64Array',
          'Function',
          'Int8Array',
          'Int16Array',
          'Int32Array',
          'Map',
          'Math',
          'Object',
          'Promise',
          'RegExp',
          'Set',
          'String',
          'Symbol',
          'TypeError',
          'Uint8Array',
          'Uint8ClampedArray',
          'Uint16Array',
          'Uint32Array',
          'WeakMap',
          '_',
          'clearTimeout',
          'isFinite',
          'parseInt',
          'setTimeout',
        ]
        let Wt = -1
        const Bt = {};
        (Bt[C] = Bt[S] = Bt[A] = Bt[D] = Bt[k] = Bt[N] = Bt['[object Uint8ClampedArray]'] = Bt[
          O
        ] = Bt[j] = !0),
        (Bt[u] = Bt[c] = Bt[E] = Bt[l] = Bt[T] = Bt[f] = Bt[p] = Bt[d] = Bt[v] = Bt[g] = Bt[
          m
        ] = Bt[y] = Bt[_] = Bt[b] = Bt[x] = !1)
        const qt = {};
        (qt[u] = qt[c] = qt[E] = qt[T] = qt[l] = qt[f] = qt[C] = qt[S] = qt[A] = qt[D] = qt[
          k
        ] = qt[v] = qt[g] = qt[m] = qt[y] = qt[_] = qt[b] = qt[w] = qt[N] = qt[
          '[object Uint8ClampedArray]'
        ] = qt[O] = qt[j] = !0),
        (qt[p] = qt[d] = qt[x] = !1)
        const Ft = {
          '\\': '\\',
          "'": "'",
          '\n': 'n',
          '\r': 'r',
          '\u2028': 'u2028',
          '\u2029': 'u2029',
        }
        const Ut = parseFloat
        const $t = parseInt
        const zt = typeof t === 'object' && t && t.Object === Object && t
        const Qt = typeof self === 'object' && self && self.Object === Object && self
        const Kt = zt || Qt || Function('return this')()
        const Vt = e && !e.nodeType && e
        const Yt = Vt && typeof r === 'object' && r && !r.nodeType && r
        const Xt = Yt && Yt.exports === Vt
        const Gt = Xt && zt.process
        const Jt = (function () {
          try {
            const t = Yt && Yt.require && Yt.require('util').types
            return t || (Gt && Gt.binding && Gt.binding('util'))
          } catch (t) {}
        }())
        const Zt = Jt && Jt.isArrayBuffer
        const te = Jt && Jt.isDate
        const ee = Jt && Jt.isMap
        const ne = Jt && Jt.isRegExp
        const re = Jt && Jt.isSet
        const ie = Jt && Jt.isTypedArray
        function oe(t, e, n) {
          switch (n.length) {
            case 0:
              return t.call(e)
            case 1:
              return t.call(e, n[0])
            case 2:
              return t.call(e, n[0], n[1])
            case 3:
              return t.call(e, n[0], n[1], n[2])
          }
          return t.apply(e, n)
        }
        function ae(t, e, n, r) {
          for (let i = -1, o = t == null ? 0 : t.length; ++i < o;) {
            const a = t[i]
            e(r, a, n(a), t)
          }
          return r
        }
        function se(t, e) {
          for (let n = -1, r = t == null ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););
          return t
        }
        function ue(t, e) {
          for (let n = t == null ? 0 : t.length; n-- && !1 !== e(t[n], n, t););
          return t
        }
        function ce(t, e) {
          for (let n = -1, r = t == null ? 0 : t.length; ++n < r;) if (!e(t[n], n, t)) return !1
          return !0
        }
        function le(t, e) {
          for (var n = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++n < r;) {
            const a = t[n]
            e(a, n, t) && (o[i++] = a)
          }
          return o
        }
        function fe(t, e) {
          return !!(t == null ? 0 : t.length) && we(t, e, 0) > -1
        }
        function pe(t, e, n) {
          for (let r = -1, i = t == null ? 0 : t.length; ++r < i;) if (n(e, t[r])) return !0
          return !1
        }
        function de(t, e) {
          for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t)
          return i
        }
        function he(t, e) {
          for (let n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n]
          return t
        }
        function ve(t, e, n, r) {
          let i = -1
          const o = t == null ? 0 : t.length
          for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t)
          return n
        }
        function ge(t, e, n, r) {
          let i = t == null ? 0 : t.length
          for (r && i && (n = t[--i]); i--;) n = e(n, t[i], i, t)
          return n
        }
        function me(t, e) {
          for (let n = -1, r = t == null ? 0 : t.length; ++n < r;) if (e(t[n], n, t)) return !0
          return !1
        }
        const ye = Ce('length')
        function _e(t, e, n) {
          let r
          return (
            n(t, (t, n, i) => {
              if (e(t, n, i)) return (r = n), !1
            }),
            r
          )
        }
        function be(t, e, n, r) {
          for (let i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;) if (e(t[o], o, t)) return o
          return -1
        }
        function we(t, e, n) {
          return e == e
            ? (function (t, e, n) {
              let r = n - 1
              const i = t.length
              for (; ++r < i;) if (t[r] === e) return r
              return -1
            }(t, e, n))
            : be(t, Ee, n)
        }
        function xe(t, e, n, r) {
          for (let i = n - 1, o = t.length; ++i < o;) if (r(t[i], e)) return i
          return -1
        }
        function Ee(t) {
          return t != t
        }
        function Te(t, e) {
          const n = t == null ? 0 : t.length
          return n ? De(t, e) / n : NaN
        }
        function Ce(t) {
          return function (e) {
            return e == null ? void 0 : e[t]
          }
        }
        function Se(t) {
          return function (e) {
            return t == null ? void 0 : t[e]
          }
        }
        function Ae(t, e, n, r, i) {
          return (
            i(t, (t, i, o) => {
              n = r ? ((r = !1), t) : e(n, t, i, o)
            }),
            n
          )
        }
        function De(t, e) {
          for (var n, r = -1, i = t.length; ++r < i;) {
            const o = e(t[r])
            void 0 !== o && (n = void 0 === n ? o : n + o)
          }
          return n
        }
        function ke(t, e) {
          for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n)
          return r
        }
        function Ne(t) {
          return function (e) {
            return t(e)
          }
        }
        function Oe(t, e) {
          return de(e, (e) => t[e])
        }
        function je(t, e) {
          return t.has(e)
        }
        function Ie(t, e) {
          for (var n = -1, r = t.length; ++n < r && we(e, t[n], 0) > -1;);
          return n
        }
        function Le(t, e) {
          for (var n = t.length; n-- && we(e, t[n], 0) > -1;);
          return n
        }
        function Re(t, e) {
          for (var n = t.length, r = 0; n--;) t[n] === e && ++r
          return r
        }
        const Pe = Se({
          À: 'A',
          Á: 'A',
          Â: 'A',
          Ã: 'A',
          Ä: 'A',
          Å: 'A',
          à: 'a',
          á: 'a',
          â: 'a',
          ã: 'a',
          ä: 'a',
          å: 'a',
          Ç: 'C',
          ç: 'c',
          Ð: 'D',
          ð: 'd',
          È: 'E',
          É: 'E',
          Ê: 'E',
          Ë: 'E',
          è: 'e',
          é: 'e',
          ê: 'e',
          ë: 'e',
          Ì: 'I',
          Í: 'I',
          Î: 'I',
          Ï: 'I',
          ì: 'i',
          í: 'i',
          î: 'i',
          ï: 'i',
          Ñ: 'N',
          ñ: 'n',
          Ò: 'O',
          Ó: 'O',
          Ô: 'O',
          Õ: 'O',
          Ö: 'O',
          Ø: 'O',
          ò: 'o',
          ó: 'o',
          ô: 'o',
          õ: 'o',
          ö: 'o',
          ø: 'o',
          Ù: 'U',
          Ú: 'U',
          Û: 'U',
          Ü: 'U',
          ù: 'u',
          ú: 'u',
          û: 'u',
          ü: 'u',
          Ý: 'Y',
          ý: 'y',
          ÿ: 'y',
          Æ: 'Ae',
          æ: 'ae',
          Þ: 'Th',
          þ: 'th',
          ß: 'ss',
          Ā: 'A',
          Ă: 'A',
          Ą: 'A',
          ā: 'a',
          ă: 'a',
          ą: 'a',
          Ć: 'C',
          Ĉ: 'C',
          Ċ: 'C',
          Č: 'C',
          ć: 'c',
          ĉ: 'c',
          ċ: 'c',
          č: 'c',
          Ď: 'D',
          Đ: 'D',
          ď: 'd',
          đ: 'd',
          Ē: 'E',
          Ĕ: 'E',
          Ė: 'E',
          Ę: 'E',
          Ě: 'E',
          ē: 'e',
          ĕ: 'e',
          ė: 'e',
          ę: 'e',
          ě: 'e',
          Ĝ: 'G',
          Ğ: 'G',
          Ġ: 'G',
          Ģ: 'G',
          ĝ: 'g',
          ğ: 'g',
          ġ: 'g',
          ģ: 'g',
          Ĥ: 'H',
          Ħ: 'H',
          ĥ: 'h',
          ħ: 'h',
          Ĩ: 'I',
          Ī: 'I',
          Ĭ: 'I',
          Į: 'I',
          İ: 'I',
          ĩ: 'i',
          ī: 'i',
          ĭ: 'i',
          į: 'i',
          ı: 'i',
          Ĵ: 'J',
          ĵ: 'j',
          Ķ: 'K',
          ķ: 'k',
          ĸ: 'k',
          Ĺ: 'L',
          Ļ: 'L',
          Ľ: 'L',
          Ŀ: 'L',
          Ł: 'L',
          ĺ: 'l',
          ļ: 'l',
          ľ: 'l',
          ŀ: 'l',
          ł: 'l',
          Ń: 'N',
          Ņ: 'N',
          Ň: 'N',
          Ŋ: 'N',
          ń: 'n',
          ņ: 'n',
          ň: 'n',
          ŋ: 'n',
          Ō: 'O',
          Ŏ: 'O',
          Ő: 'O',
          ō: 'o',
          ŏ: 'o',
          ő: 'o',
          Ŕ: 'R',
          Ŗ: 'R',
          Ř: 'R',
          ŕ: 'r',
          ŗ: 'r',
          ř: 'r',
          Ś: 'S',
          Ŝ: 'S',
          Ş: 'S',
          Š: 'S',
          ś: 's',
          ŝ: 's',
          ş: 's',
          š: 's',
          Ţ: 'T',
          Ť: 'T',
          Ŧ: 'T',
          ţ: 't',
          ť: 't',
          ŧ: 't',
          Ũ: 'U',
          Ū: 'U',
          Ŭ: 'U',
          Ů: 'U',
          Ű: 'U',
          Ų: 'U',
          ũ: 'u',
          ū: 'u',
          ŭ: 'u',
          ů: 'u',
          ű: 'u',
          ų: 'u',
          Ŵ: 'W',
          ŵ: 'w',
          Ŷ: 'Y',
          ŷ: 'y',
          Ÿ: 'Y',
          Ź: 'Z',
          Ż: 'Z',
          Ž: 'Z',
          ź: 'z',
          ż: 'z',
          ž: 'z',
          Ĳ: 'IJ',
          ĳ: 'ij',
          Œ: 'Oe',
          œ: 'oe',
          ŉ: "'n",
          ſ: 's',
        })
        const He = Se({
          '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
        })
        function Me(t) {
          return `\\${Ft[t]}`
        }
        function We(t) {
          return Pt.test(t)
        }
        function Be(t) {
          let e = -1
          const n = Array(t.size)
          return (
            t.forEach((t, r) => {
              n[++e] = [r, t]
            }),
            n
          )
        }
        function qe(t, e) {
          return function (n) {
            return t(e(n))
          }
        }
        function Fe(t, e) {
          for (var n = -1, r = t.length, i = 0, o = []; ++n < r;) {
            const s = t[n];
            (s !== e && s !== a) || ((t[n] = a), (o[i++] = n))
          }
          return o
        }
        function Ue(t) {
          let e = -1
          const n = Array(t.size)
          return (
            t.forEach((t) => {
              n[++e] = t
            }),
            n
          )
        }
        function $e(t) {
          let e = -1
          const n = Array(t.size)
          return (
            t.forEach((t) => {
              n[++e] = [t, t]
            }),
            n
          )
        }
        function ze(t) {
          return We(t)
            ? (function (t) {
              let e = (Lt.lastIndex = 0)
              for (; Lt.test(t);) ++e
              return e
            }(t))
            : ye(t)
        }
        function Qe(t) {
          return We(t)
            ? (function (t) {
              return t.match(Lt) || []
            }(t))
            : (function (t) {
              return t.split('')
            }(t))
        }
        const Ke = Se({
          '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'",
        })
        var Ve = (function t(e) {
          let n
          const r = (e = e == null ? Kt : Ve.defaults(Kt.Object(), e, Ve.pick(Kt, Mt))).Array
          const i = e.Date
          const pt = e.Error
          const dt = e.Function
          const ht = e.Math
          const vt = e.Object
          const gt = e.RegExp
          const mt = e.String
          const yt = e.TypeError
          const _t = r.prototype
          const bt = dt.prototype
          const wt = vt.prototype
          const xt = e['__core-js_shared__']
          const Et = bt.toString
          const Tt = wt.hasOwnProperty
          let Ct = 0
          const St = (n = /[^.]+$/.exec((xt && xt.keys && xt.keys.IE_PROTO) || ''))
            ? `Symbol(src)_1.${n}`
            : ''
          const At = wt.toString
          const Dt = Et.call(vt)
          const kt = Kt._
          const Nt = gt(
            `^${
              Et.call(Tt)
                .replace(Q, '\\$&')
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?')
            }$`,
          )
          const Ot = Xt ? e.Buffer : void 0
          const Lt = e.Symbol
          const Pt = e.Uint8Array
          const Ft = Ot ? Ot.allocUnsafe : void 0
          const zt = qe(vt.getPrototypeOf, vt)
          const Qt = vt.create
          const Vt = wt.propertyIsEnumerable
          const Yt = _t.splice
          const Gt = Lt ? Lt.isConcatSpreadable : void 0
          const Jt = Lt ? Lt.iterator : void 0
          const ye = Lt ? Lt.toStringTag : void 0
          const Se = (function () {
            try {
              const t = Zi(vt, 'defineProperty')
              return t({}, '', {}), t
            } catch (t) {}
          }())
          const Ye = e.clearTimeout !== Kt.clearTimeout && e.clearTimeout
          const Xe = i && i.now !== Kt.Date.now && i.now
          const Ge = e.setTimeout !== Kt.setTimeout && e.setTimeout
          const Je = ht.ceil
          const Ze = ht.floor
          const tn = vt.getOwnPropertySymbols
          const en = Ot ? Ot.isBuffer : void 0
          const nn = e.isFinite
          const rn = _t.join
          const on = qe(vt.keys, vt)
          const an = ht.max
          const sn = ht.min
          const un = i.now
          const cn = e.parseInt
          const ln = ht.random
          const fn = _t.reverse
          const pn = Zi(e, 'DataView')
          const dn = Zi(e, 'Map')
          const hn = Zi(e, 'Promise')
          const vn = Zi(e, 'Set')
          const gn = Zi(e, 'WeakMap')
          const mn = Zi(vt, 'create')
          const yn = gn && new gn()
          const _n = {}
          const bn = Ao(pn)
          const wn = Ao(dn)
          const xn = Ao(hn)
          const En = Ao(vn)
          const Tn = Ao(gn)
          const Cn = Lt ? Lt.prototype : void 0
          const Sn = Cn ? Cn.valueOf : void 0
          const An = Cn ? Cn.toString : void 0
          function Dn(t) {
            if ($a(t) && !Ia(t) && !(t instanceof jn)) {
              if (t instanceof On) return t
              if (Tt.call(t, '__wrapped__')) return Do(t)
            }
            return new On(t)
          }
          const kn = (function () {
            function t() {}
            return function (e) {
              if (!Ua(e)) return {}
              if (Qt) return Qt(e)
              t.prototype = e
              const n = new t()
              return (t.prototype = void 0), n
            }
          }())
          function Nn() {}
          function On(t, e) {
            (this.__wrapped__ = t),
            (this.__actions__ = []),
            (this.__chain__ = !!e),
            (this.__index__ = 0),
            (this.__values__ = void 0)
          }
          function jn(t) {
            (this.__wrapped__ = t),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = 4294967295),
            (this.__views__ = [])
          }
          function In(t) {
            let e = -1
            const n = t == null ? 0 : t.length
            for (this.clear(); ++e < n;) {
              const r = t[e]
              this.set(r[0], r[1])
            }
          }
          function Ln(t) {
            let e = -1
            const n = t == null ? 0 : t.length
            for (this.clear(); ++e < n;) {
              const r = t[e]
              this.set(r[0], r[1])
            }
          }
          function Rn(t) {
            let e = -1
            const n = t == null ? 0 : t.length
            for (this.clear(); ++e < n;) {
              const r = t[e]
              this.set(r[0], r[1])
            }
          }
          function Pn(t) {
            let e = -1
            const n = t == null ? 0 : t.length
            for (this.__data__ = new Rn(); ++e < n;) this.add(t[e])
          }
          function Hn(t) {
            const e = (this.__data__ = new Ln(t))
            this.size = e.size
          }
          function Mn(t, e) {
            const n = Ia(t)
            const r = !n && ja(t)
            const i = !n && !r && Ha(t)
            const o = !n && !r && !i && Ja(t)
            const a = n || r || i || o
            const s = a ? ke(t.length, mt) : []
            const u = s.length
            for (const c in t) {
              (!e && !Tt.call(t, c))
                || (a
                  && (c == 'length'
                    || (i && (c == 'offset' || c == 'parent'))
                    || (o && (c == 'buffer' || c == 'byteLength' || c == 'byteOffset'))
                    || ao(c, u)))
                || s.push(c)
            }
            return s
          }
          function Wn(t) {
            const e = t.length
            return e ? t[Pr(0, e - 1)] : void 0
          }
          function Bn(t, e) {
            return To(mi(t), Yn(e, 0, t.length))
          }
          function qn(t) {
            return To(mi(t))
          }
          function Fn(t, e, n) {
            ((void 0 !== n && !ka(t[e], n)) || (void 0 === n && !(e in t))) && Kn(t, e, n)
          }
          function Un(t, e, n) {
            const r = t[e];
            (Tt.call(t, e) && ka(r, n) && (void 0 !== n || e in t)) || Kn(t, e, n)
          }
          function $n(t, e) {
            for (let n = t.length; n--;) if (ka(t[n][0], e)) return n
            return -1
          }
          function zn(t, e, n, r) {
            return (
              tr(t, (t, i, o) => {
                e(r, t, n(t), o)
              }),
              r
            )
          }
          function Qn(t, e) {
            return t && yi(e, bs(e), t)
          }
          function Kn(t, e, n) {
            e == '__proto__' && Se
              ? Se(t, e, {
                configurable: !0, enumerable: !0, value: n, writable: !0,
              })
              : (t[e] = n)
          }
          function Vn(t, e) {
            for (var n = -1, i = e.length, o = r(i), a = t == null; ++n < i;) o[n] = a ? void 0 : vs(t, e[n])
            return o
          }
          function Yn(t, e, n) {
            return (
              t == t
                && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)),
              t
            )
          }
          function Xn(t, e, n, r, i, o) {
            let a
            const s = 1 & e
            const c = 2 & e
            const p = 4 & e
            if ((n && (a = i ? n(t, r, i, o) : n(t)), void 0 !== a)) return a
            if (!Ua(t)) return t
            const x = Ia(t)
            if (x) {
              if (
                ((a = (function (t) {
                  const e = t.length
                  const n = new t.constructor(e)
                  e
                    && typeof t[0] === 'string'
                    && Tt.call(t, 'index')
                    && ((n.index = t.index), (n.input = t.input))
                  return n
                }(t))),
                !s)
              ) return mi(t, a)
            } else {
              const I = no(t)
              const L = I == d || I == h
              if (Ha(t)) return fi(t, s)
              if (I == m || I == u || (L && !i)) {
                if (((a = c || L ? {} : io(t)), !s)) {
                  return c
                    ? (function (t, e) {
                      return yi(t, eo(t), e)
                    }(
                      t,
                      (function (t, e) {
                        return t && yi(e, ws(e), t)
                      }(a, t)),
                    ))
                    : (function (t, e) {
                      return yi(t, to(t), e)
                    }(t, Qn(a, t)))
                }
              } else {
                if (!qt[I]) return i ? t : {}
                a = (function (t, e, n) {
                  const r = t.constructor
                  switch (e) {
                    case E:
                      return pi(t)
                    case l:
                    case f:
                      return new r(+t)
                    case T:
                      return (function (t, e) {
                        const n = e ? pi(t.buffer) : t.buffer
                        return new t.constructor(n, t.byteOffset, t.byteLength)
                      }(t, n))
                    case C:
                    case S:
                    case A:
                    case D:
                    case k:
                    case N:
                    case '[object Uint8ClampedArray]':
                    case O:
                    case j:
                      return di(t, n)
                    case v:
                      return new r()
                    case g:
                    case b:
                      return new r(t)
                    case y:
                      return (function (t) {
                        const e = new t.constructor(t.source, rt.exec(t))
                        return (e.lastIndex = t.lastIndex), e
                      }(t))
                    case _:
                      return new r()
                    case w:
                      return (i = t), Sn ? vt(Sn.call(i)) : {}
                  }
                  let i
                }(t, I, s))
              }
            }
            o || (o = new Hn())
            const R = o.get(t)
            if (R) return R
            o.set(t, a),
            Ya(t)
              ? t.forEach((r) => {
                a.add(Xn(r, e, n, r, t, o))
              })
              : za(t)
                  && t.forEach((r, i) => {
                    a.set(i, Xn(r, e, n, i, t, o))
                  })
            const P = x ? void 0 : (p ? (c ? Qi : zi) : c ? ws : bs)(t)
            return (
              se(P || t, (r, i) => {
                P && (r = t[(i = r)]), Un(a, i, Xn(r, e, n, i, t, o))
              }),
              a
            )
          }
          function Gn(t, e, n) {
            let r = n.length
            if (t == null) return !r
            for (t = vt(t); r--;) {
              const i = n[r]
              const o = e[i]
              const a = t[i]
              if ((void 0 === a && !(i in t)) || !o(a)) return !1
            }
            return !0
          }
          function Jn(t, e, n) {
            if (typeof t !== 'function') throw new yt(o)
            return bo(() => {
              t.apply(void 0, n)
            }, e)
          }
          function Zn(t, e, n, r) {
            let i = -1
            let o = fe
            let a = !0
            const s = t.length
            const u = []
            const c = e.length
            if (!s) return u
            n && (e = de(e, Ne(n))),
            r ? ((o = pe), (a = !1)) : e.length >= 200 && ((o = je), (a = !1), (e = new Pn(e)))
            t: for (; ++i < s;) {
              let l = t[i]
              const f = n == null ? l : n(l)
              if (((l = r || l !== 0 ? l : 0), a && f == f)) {
                for (let p = c; p--;) if (e[p] === f) continue t
                u.push(l)
              } else o(e, f, r) || u.push(l)
            }
            return u
          }
          (Dn.templateSettings = {
            escape: B,
            evaluate: q,
            interpolate: F,
            variable: '',
            imports: { _: Dn },
          }),
          (Dn.prototype = Nn.prototype),
          (Dn.prototype.constructor = Dn),
          (On.prototype = kn(Nn.prototype)),
          (On.prototype.constructor = On),
          (jn.prototype = kn(Nn.prototype)),
          (jn.prototype.constructor = jn),
          (In.prototype.clear = function () {
            (this.__data__ = mn ? mn(null) : {}), (this.size = 0)
          }),
          (In.prototype.delete = function (t) {
            const e = this.has(t) && delete this.__data__[t]
            return (this.size -= e ? 1 : 0), e
          }),
          (In.prototype.get = function (t) {
            const e = this.__data__
            if (mn) {
              const n = e[t]
              return n === '__lodash_hash_undefined__' ? void 0 : n
            }
            return Tt.call(e, t) ? e[t] : void 0
          }),
          (In.prototype.has = function (t) {
            const e = this.__data__
            return mn ? void 0 !== e[t] : Tt.call(e, t)
          }),
          (In.prototype.set = function (t, e) {
            const n = this.__data__
            return (
              (this.size += this.has(t) ? 0 : 1),
              (n[t] = mn && void 0 === e ? '__lodash_hash_undefined__' : e),
              this
            )
          }),
          (Ln.prototype.clear = function () {
            (this.__data__ = []), (this.size = 0)
          }),
          (Ln.prototype.delete = function (t) {
            const e = this.__data__
            const n = $n(e, t)
            return !(n < 0) && (n == e.length - 1 ? e.pop() : Yt.call(e, n, 1), --this.size, !0)
          }),
          (Ln.prototype.get = function (t) {
            const e = this.__data__
            const n = $n(e, t)
            return n < 0 ? void 0 : e[n][1]
          }),
          (Ln.prototype.has = function (t) {
            return $n(this.__data__, t) > -1
          }),
          (Ln.prototype.set = function (t, e) {
            const n = this.__data__
            const r = $n(n, t)
            return r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this
          }),
          (Rn.prototype.clear = function () {
            (this.size = 0),
            (this.__data__ = { hash: new In(), map: new (dn || Ln)(), string: new In() })
          }),
          (Rn.prototype.delete = function (t) {
            const e = Gi(this, t).delete(t)
            return (this.size -= e ? 1 : 0), e
          }),
          (Rn.prototype.get = function (t) {
            return Gi(this, t).get(t)
          }),
          (Rn.prototype.has = function (t) {
            return Gi(this, t).has(t)
          }),
          (Rn.prototype.set = function (t, e) {
            const n = Gi(this, t)
            const r = n.size
            return n.set(t, e), (this.size += n.size == r ? 0 : 1), this
          }),
          (Pn.prototype.add = Pn.prototype.push = function (t) {
            return this.__data__.set(t, '__lodash_hash_undefined__'), this
          }),
          (Pn.prototype.has = function (t) {
            return this.__data__.has(t)
          }),
          (Hn.prototype.clear = function () {
            (this.__data__ = new Ln()), (this.size = 0)
          }),
          (Hn.prototype.delete = function (t) {
            const e = this.__data__
            const n = e.delete(t)
            return (this.size = e.size), n
          }),
          (Hn.prototype.get = function (t) {
            return this.__data__.get(t)
          }),
          (Hn.prototype.has = function (t) {
            return this.__data__.has(t)
          }),
          (Hn.prototype.set = function (t, e) {
            let n = this.__data__
            if (n instanceof Ln) {
              const r = n.__data__
              if (!dn || r.length < 199) return r.push([t, e]), (this.size = ++n.size), this
              n = this.__data__ = new Rn(r)
            }
            return n.set(t, e), (this.size = n.size), this
          })
          var tr = wi(ur)
          const er = wi(cr, !0)
          function nr(t, e) {
            let n = !0
            return (
              tr(t, (t, r, i) => (n = !!e(t, r, i))),
              n
            )
          }
          function rr(t, e, n) {
            for (let r = -1, i = t.length; ++r < i;) {
              const o = t[r]
              const a = e(o)
              if (a != null && (void 0 === s ? a == a && !Ga(a) : n(a, s))) var s = a
              var u = o
            }
            return u
          }
          function ir(t, e) {
            const n = []
            return (
              tr(t, (t, r, i) => {
                e(t, r, i) && n.push(t)
              }),
              n
            )
          }
          function or(t, e, n, r, i) {
            let o = -1
            const a = t.length
            for (n || (n = oo), i || (i = []); ++o < a;) {
              const s = t[o]
              e > 0 && n(s) ? (e > 1 ? or(s, e - 1, n, r, i) : he(i, s)) : r || (i[i.length] = s)
            }
            return i
          }
          const ar = xi()
          const sr = xi(!0)
          function ur(t, e) {
            return t && ar(t, e, bs)
          }
          function cr(t, e) {
            return t && sr(t, e, bs)
          }
          function lr(t, e) {
            return le(e, (e) => Ba(t[e]))
          }
          function fr(t, e) {
            for (var n = 0, r = (e = si(e, t)).length; t != null && n < r;) t = t[So(e[n++])]
            return n && n == r ? t : void 0
          }
          function pr(t, e, n) {
            const r = e(t)
            return Ia(t) ? r : he(r, n(t))
          }
          function dr(t) {
            return t == null
              ? void 0 === t
                ? '[object Undefined]'
                : '[object Null]'
              : ye && ye in vt(t)
                ? (function (t) {
                  const e = Tt.call(t, ye)
                  const n = t[ye]
                  try {
                    t[ye] = void 0
                    var r = !0
                  } catch (t) {}
                  const i = At.call(t)
                  r && (e ? (t[ye] = n) : delete t[ye])
                  return i
                }(t))
                : (function (t) {
                  return At.call(t)
                }(t))
          }
          function hr(t, e) {
            return t > e
          }
          function vr(t, e) {
            return t != null && Tt.call(t, e)
          }
          function gr(t, e) {
            return t != null && e in vt(t)
          }
          function mr(t, e, n) {
            for (
              var i = n ? pe : fe,
                o = t[0].length,
                a = t.length,
                s = a,
                u = r(a),
                c = 1 / 0,
                l = [];
              s--;

            ) {
              var f = t[s]
              s && e && (f = de(f, Ne(e))),
              (c = sn(f.length, c)),
              (u[s] = !n && (e || (o >= 120 && f.length >= 120)) ? new Pn(s && f) : void 0)
            }
            f = t[0]
            let p = -1
            const d = u[0]
            t: for (; ++p < o && l.length < c;) {
              let h = f[p]
              const v = e ? e(h) : h
              if (((h = n || h !== 0 ? h : 0), !(d ? je(d, v) : i(l, v, n)))) {
                for (s = a; --s;) {
                  const g = u[s]
                  if (!(g ? je(g, v) : i(t[s], v, n))) continue t
                }
                d && d.push(v), l.push(h)
              }
            }
            return l
          }
          function yr(t, e, n) {
            const r = (t = go(t, (e = si(e, t)))) == null ? t : t[So(Wo(e))]
            return r == null ? void 0 : oe(r, t, n)
          }
          function _r(t) {
            return $a(t) && dr(t) == u
          }
          function br(t, e, n, r, i) {
            return (
              t === e
              || (t == null || e == null || (!$a(t) && !$a(e))
                ? t != t && e != e
                : (function (t, e, n, r, i, o) {
                  let a = Ia(t)
                  const s = Ia(e)
                  let d = a ? c : no(t)
                  let h = s ? c : no(e)
                  let x = (d = d == u ? m : d) == m
                  const C = (h = h == u ? m : h) == m
                  const S = d == h
                  if (S && Ha(t)) {
                    if (!Ha(e)) return !1;
                    (a = !0), (x = !1)
                  }
                  if (S && !x) {
                    return (
                      o || (o = new Hn()),
                      a || Ja(t)
                        ? Ui(t, e, n, r, i, o)
                        : (function (t, e, n, r, i, o, a) {
                          switch (n) {
                            case T:
                              if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                              (t = t.buffer), (e = e.buffer)
                            case E:
                              return !(t.byteLength != e.byteLength || !o(new Pt(t), new Pt(e)))
                            case l:
                            case f:
                            case g:
                              return ka(+t, +e)
                            case p:
                              return t.name == e.name && t.message == e.message
                            case y:
                            case b:
                              return t == `${e}`
                            case v:
                              var s = Be
                            case _:
                              var u = 1 & r
                              if ((s || (s = Ue), t.size != e.size && !u)) return !1
                              var c = a.get(t)
                              if (c) return c == e;
                              (r |= 2), a.set(t, e)
                              var d = Ui(s(t), s(e), r, i, o, a)
                              return a.delete(t), d
                            case w:
                              if (Sn) return Sn.call(t) == Sn.call(e)
                          }
                          return !1
                        }(t, e, d, n, r, i, o))
                    )
                  }
                  if (!(1 & n)) {
                    const A = x && Tt.call(t, '__wrapped__')
                    const D = C && Tt.call(e, '__wrapped__')
                    if (A || D) {
                      const k = A ? t.value() : t
                      const N = D ? e.value() : e
                      return o || (o = new Hn()), i(k, N, n, r, o)
                    }
                  }
                  if (!S) return !1
                  return (
                    o || (o = new Hn()),
                    (function (t, e, n, r, i, o) {
                      const a = 1 & n
                      const s = zi(t)
                      const u = s.length
                      const c = zi(e).length
                      if (u != c && !a) return !1
                      let l = u
                      for (; l--;) {
                        var f = s[l]
                        if (!(a ? f in e : Tt.call(e, f))) return !1
                      }
                      const p = o.get(t)
                      if (p && o.get(e)) return p == e
                      let d = !0
                      o.set(t, e), o.set(e, t)
                      let h = a
                      for (; ++l < u;) {
                        f = s[l]
                        const v = t[f]
                        const g = e[f]
                        if (r) var m = a ? r(g, v, f, e, t, o) : r(v, g, f, t, e, o)
                        if (!(void 0 === m ? v === g || i(v, g, n, r, o) : m)) {
                          d = !1
                          break
                        }
                        h || (h = f == 'constructor')
                      }
                      if (d && !h) {
                        const y = t.constructor
                        const _ = e.constructor
                        y == _
                            || !('constructor' in t)
                            || !('constructor' in e)
                            || (typeof y === 'function'
                              && y instanceof y
                              && typeof _ === 'function'
                              && _ instanceof _)
                            || (d = !1)
                      }
                      return o.delete(t), o.delete(e), d
                    }(t, e, n, r, i, o))
                  )
                }(t, e, n, r, br, i)))
            )
          }
          function wr(t, e, n, r) {
            let i = n.length
            const o = i
            const a = !r
            if (t == null) return !o
            for (t = vt(t); i--;) {
              var s = n[i]
              if (a && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1
            }
            for (; ++i < o;) {
              const u = (s = n[i])[0]
              const c = t[u]
              const l = s[1]
              if (a && s[2]) {
                if (void 0 === c && !(u in t)) return !1
              } else {
                const f = new Hn()
                if (r) var p = r(c, l, u, t, e, f)
                if (!(void 0 === p ? br(l, c, 3, r, f) : p)) return !1
              }
            }
            return !0
          }
          function xr(t) {
            return !(!Ua(t) || ((e = t), St && St in e)) && (Ba(t) ? Nt : at).test(Ao(t))
            let e
          }
          function Er(t) {
            return typeof t === 'function'
              ? t
              : t == null
                ? Qs
                : typeof t === 'object'
                  ? Ia(t)
                    ? kr(t[0], t[1])
                    : Dr(t)
                  : eu(t)
          }
          function Tr(t) {
            if (!fo(t)) return on(t)
            const e = []
            for (const n in vt(t)) Tt.call(t, n) && n != 'constructor' && e.push(n)
            return e
          }
          function Cr(t) {
            if (!Ua(t)) {
              return (function (t) {
                const e = []
                if (t != null) for (const n in vt(t)) e.push(n)
                return e
              }(t))
            }
            const e = fo(t)
            const n = []
            for (const r in t) (r != 'constructor' || (!e && Tt.call(t, r))) && n.push(r)
            return n
          }
          function Sr(t, e) {
            return t < e
          }
          function Ar(t, e) {
            let n = -1
            const i = Ra(t) ? r(t.length) : []
            return (
              tr(t, (t, r, o) => {
                i[++n] = e(t, r, o)
              }),
              i
            )
          }
          function Dr(t) {
            const e = Ji(t)
            return e.length == 1 && e[0][2]
              ? ho(e[0][0], e[0][1])
              : function (n) {
                return n === t || wr(n, t, e)
              }
          }
          function kr(t, e) {
            return uo(t) && po(e)
              ? ho(So(t), e)
              : function (n) {
                const r = vs(n, t)
                return void 0 === r && r === e ? gs(n, t) : br(e, r, 3)
              }
          }
          function Nr(t, e, n, r, i) {
            t !== e
              && ar(
                e,
                (o, a) => {
                  if ((i || (i = new Hn()), Ua(o))) {
                    !(function (t, e, n, r, i, o, a) {
                      const s = yo(t, n)
                      const u = yo(e, n)
                      const c = a.get(u)
                      if (c) return void Fn(t, n, c)
                      let l = o ? o(s, u, `${n}`, t, e, a) : void 0
                      let f = void 0 === l
                      if (f) {
                        const p = Ia(u)
                        const d = !p && Ha(u)
                        const h = !p && !d && Ja(u);
                        (l = u),
                        p || d || h
                          ? Ia(s)
                            ? (l = s)
                            : Pa(s)
                              ? (l = mi(s))
                              : d
                                ? ((f = !1), (l = fi(u, !0)))
                                : h
                                  ? ((f = !1), (l = di(u, !0)))
                                  : (l = [])
                          : Ka(u) || ja(u)
                            ? ((l = s), ja(s) ? (l = as(s)) : (Ua(s) && !Ba(s)) || (l = io(u)))
                            : (f = !1)
                      }
                      f && (a.set(u, l), i(l, u, r, o, a), a.delete(u))
                      Fn(t, n, l)
                    }(t, e, a, n, Nr, r, i))
                  } else {
                    let s = r ? r(yo(t, a), o, `${a}`, t, e, i) : void 0
                    void 0 === s && (s = o), Fn(t, a, s)
                  }
                },
                ws,
              )
          }
          function Or(t, e) {
            const n = t.length
            if (n) return ao((e += e < 0 ? n : 0), n) ? t[e] : void 0
          }
          function jr(t, e, n) {
            let r = -1
            return (
              (e = de(e.length ? e : [Qs], Ne(Xi()))),
              (function (t, e) {
                let n = t.length
                for (t.sort(e); n--;) t[n] = t[n].value
                return t
              }(
                Ar(t, (t, n, i) => ({
                  criteria: de(e, (e) => e(t)),
                  index: ++r,
                  value: t,
                })),
                (t, e) => (function (t, e, n) {
                  let r = -1
                  const i = t.criteria
                  const o = e.criteria
                  const a = i.length
                  const s = n.length
                  for (; ++r < a;) {
                    const u = hi(i[r], o[r])
                    if (u) {
                      if (r >= s) return u
                      const c = n[r]
                      return u * (c == 'desc' ? -1 : 1)
                    }
                  }
                  return t.index - e.index
                }(t, e, n)),
              ))
            )
          }
          function Ir(t, e, n) {
            for (var r = -1, i = e.length, o = {}; ++r < i;) {
              const a = e[r]
              const s = fr(t, a)
              n(s, a) && qr(o, si(a, t), s)
            }
            return o
          }
          function Lr(t, e, n, r) {
            const i = r ? xe : we
            let o = -1
            const a = e.length
            let s = t
            for (t === e && (e = mi(e)), n && (s = de(t, Ne(n))); ++o < a;) for (let u = 0, c = e[o], l = n ? n(c) : c; (u = i(s, l, u, r)) > -1;) s !== t && Yt.call(s, u, 1), Yt.call(t, u, 1)
            return t
          }
          function Rr(t, e) {
            for (let n = t ? e.length : 0, r = n - 1; n--;) {
              const i = e[n]
              if (n == r || i !== o) {
                var o = i
                ao(i) ? Yt.call(t, i, 1) : Zr(t, i)
              }
            }
            return t
          }
          function Pr(t, e) {
            return t + Ze(ln() * (e - t + 1))
          }
          function Hr(t, e) {
            let n = ''
            if (!t || e < 1 || e > 9007199254740991) return n
            do {
              e % 2 && (n += t), (e = Ze(e / 2)) && (t += t)
            } while (e)
            return n
          }
          function Mr(t, e) {
            return wo(vo(t, e, Qs), `${t}`)
          }
          function Wr(t) {
            return Wn(ks(t))
          }
          function Br(t, e) {
            const n = ks(t)
            return To(n, Yn(e, 0, n.length))
          }
          function qr(t, e, n, r) {
            if (!Ua(t)) return t
            for (let i = -1, o = (e = si(e, t)).length, a = o - 1, s = t; s != null && ++i < o;) {
              const u = So(e[i])
              let c = n
              if (i != a) {
                const l = s[u]
                void 0 === (c = r ? r(l, u, s) : void 0) && (c = Ua(l) ? l : ao(e[i + 1]) ? [] : {})
              }
              Un(s, u, c), (s = s[u])
            }
            return t
          }
          const Fr = yn
            ? function (t, e) {
              return yn.set(t, e), t
            }
            : Qs
          const Ur = Se
            ? function (t, e) {
              return Se(t, 'toString', {
                configurable: !0,
                enumerable: !1,
                value: Us(e),
                writable: !0,
              })
            }
            : Qs
          function $r(t) {
            return To(ks(t))
          }
          function zr(t, e, n) {
            let i = -1
            let o = t.length
            e < 0 && (e = -e > o ? 0 : o + e),
            (n = n > o ? o : n) < 0 && (n += o),
            (o = e > n ? 0 : (n - e) >>> 0),
            (e >>>= 0)
            for (var a = r(o); ++i < o;) a[i] = t[i + e]
            return a
          }
          function Qr(t, e) {
            let n
            return (
              tr(t, (t, r, i) => !(n = e(t, r, i))),
              !!n
            )
          }
          function Kr(t, e, n) {
            let r = 0
            let i = t == null ? r : t.length
            if (typeof e === 'number' && e == e && i <= 2147483647) {
              for (; r < i;) {
                const o = (r + i) >>> 1
                const a = t[o]
                a !== null && !Ga(a) && (n ? a <= e : a < e) ? (r = o + 1) : (i = o)
              }
              return i
            }
            return Vr(t, e, Qs, n)
          }
          function Vr(t, e, n, r) {
            e = n(e)
            for (
              var i = 0,
                o = t == null ? 0 : t.length,
                a = e != e,
                s = e === null,
                u = Ga(e),
                c = void 0 === e;
              i < o;

            ) {
              const l = Ze((i + o) / 2)
              const f = n(t[l])
              const p = void 0 !== f
              const d = f === null
              const h = f == f
              const v = Ga(f)
              if (a) var g = r || h
              else {
                g = c
                  ? h && (r || p)
                  : s
                    ? h && p && (r || !d)
                    : u
                      ? h && p && !d && (r || !v)
                      : !d && !v && (r ? f <= e : f < e)
              }
              g ? (i = l + 1) : (o = l)
            }
            return sn(o, 4294967294)
          }
          function Yr(t, e) {
            for (var n = -1, r = t.length, i = 0, o = []; ++n < r;) {
              const a = t[n]
              const s = e ? e(a) : a
              if (!n || !ka(s, u)) {
                var u = s
                o[i++] = a === 0 ? 0 : a
              }
            }
            return o
          }
          function Xr(t) {
            return typeof t === 'number' ? t : Ga(t) ? NaN : +t
          }
          function Gr(t) {
            if (typeof t === 'string') return t
            if (Ia(t)) return `${de(t, Gr)}`
            if (Ga(t)) return An ? An.call(t) : ''
            const e = `${t}`
            return e == '0' && 1 / t == -1 / 0 ? '-0' : e
          }
          function Jr(t, e, n) {
            let r = -1
            let i = fe
            const o = t.length
            let a = !0
            const s = []
            let u = s
            if (n) (a = !1), (i = pe)
            else if (o >= 200) {
              const c = e ? null : Hi(t)
              if (c) return Ue(c);
              (a = !1), (i = je), (u = new Pn())
            } else u = e ? [] : s
            t: for (; ++r < o;) {
              let l = t[r]
              const f = e ? e(l) : l
              if (((l = n || l !== 0 ? l : 0), a && f == f)) {
                for (let p = u.length; p--;) if (u[p] === f) continue t
                e && u.push(f), s.push(l)
              } else i(u, f, n) || (u !== s && u.push(f), s.push(l))
            }
            return s
          }
          function Zr(t, e) {
            return (t = go(t, (e = si(e, t)))) == null || delete t[So(Wo(e))]
          }
          function ti(t, e, n, r) {
            return qr(t, e, n(fr(t, e)), r)
          }
          function ei(t, e, n, r) {
            for (var i = t.length, o = r ? i : -1; (r ? o-- : ++o < i) && e(t[o], o, t););
            return n ? zr(t, r ? 0 : o, r ? o + 1 : i) : zr(t, r ? o + 1 : 0, r ? i : o)
          }
          function ni(t, e) {
            let n = t
            return (
              n instanceof jn && (n = n.value()),
              ve(
                e,
                (t, e) => e.func.apply(e.thisArg, he([t], e.args)),
                n,
              )
            )
          }
          function ri(t, e, n) {
            const i = t.length
            if (i < 2) return i ? Jr(t[0]) : []
            for (var o = -1, a = r(i); ++o < i;) for (let s = t[o], u = -1; ++u < i;) u != o && (a[o] = Zn(a[o] || s, t[u], e, n))
            return Jr(or(a, 1), e, n)
          }
          function ii(t, e, n) {
            for (var r = -1, i = t.length, o = e.length, a = {}; ++r < i;) {
              const s = r < o ? e[r] : void 0
              n(a, t[r], s)
            }
            return a
          }
          function oi(t) {
            return Pa(t) ? t : []
          }
          function ai(t) {
            return typeof t === 'function' ? t : Qs
          }
          function si(t, e) {
            return Ia(t) ? t : uo(t, e) ? [t] : Co(ss(t))
          }
          const ui = Mr
          function ci(t, e, n) {
            const r = t.length
            return (n = void 0 === n ? r : n), !e && n >= r ? t : zr(t, e, n)
          }
          const li = Ye
            || function (t) {
              return Kt.clearTimeout(t)
            }
          function fi(t, e) {
            if (e) return t.slice()
            const n = t.length
            const r = Ft ? Ft(n) : new t.constructor(n)
            return t.copy(r), r
          }
          function pi(t) {
            const e = new t.constructor(t.byteLength)
            return new Pt(e).set(new Pt(t)), e
          }
          function di(t, e) {
            const n = e ? pi(t.buffer) : t.buffer
            return new t.constructor(n, t.byteOffset, t.length)
          }
          function hi(t, e) {
            if (t !== e) {
              const n = void 0 !== t
              const r = t === null
              const i = t == t
              const o = Ga(t)
              const a = void 0 !== e
              const s = e === null
              const u = e == e
              const c = Ga(e)
              if (
                (!s && !c && !o && t > e)
                || (o && a && u && !s && !c)
                || (r && a && u)
                || (!n && u)
                || !i
              ) return 1
              if (
                (!r && !o && !c && t < e)
                || (c && n && i && !r && !o)
                || (s && n && i)
                || (!a && i)
                || !u
              ) return -1
            }
            return 0
          }
          function vi(t, e, n, i) {
            for (
              var o = -1,
                a = t.length,
                s = n.length,
                u = -1,
                c = e.length,
                l = an(a - s, 0),
                f = r(c + l),
                p = !i;
              ++u < c;

            ) f[u] = e[u]
            for (; ++o < s;) (p || o < a) && (f[n[o]] = t[o])
            for (; l--;) f[u++] = t[o++]
            return f
          }
          function gi(t, e, n, i) {
            for (
              var o = -1,
                a = t.length,
                s = -1,
                u = n.length,
                c = -1,
                l = e.length,
                f = an(a - u, 0),
                p = r(f + l),
                d = !i;
              ++o < f;

            ) p[o] = t[o]
            for (var h = o; ++c < l;) p[h + c] = e[c]
            for (; ++s < u;) (d || o < a) && (p[h + n[s]] = t[o++])
            return p
          }
          function mi(t, e) {
            let n = -1
            const i = t.length
            for (e || (e = r(i)); ++n < i;) e[n] = t[n]
            return e
          }
          function yi(t, e, n, r) {
            const i = !n
            n || (n = {})
            for (let o = -1, a = e.length; ++o < a;) {
              const s = e[o]
              let u = r ? r(n[s], t[s], s, n, t) : void 0
              void 0 === u && (u = t[s]), i ? Kn(n, s, u) : Un(n, s, u)
            }
            return n
          }
          function _i(t, e) {
            return function (n, r) {
              const i = Ia(n) ? ae : zn
              const o = e ? e() : {}
              return i(n, t, Xi(r, 2), o)
            }
          }
          function bi(t) {
            return Mr((e, n) => {
              let r = -1
              let i = n.length
              let o = i > 1 ? n[i - 1] : void 0
              const a = i > 2 ? n[2] : void 0
              for (
                o = t.length > 3 && typeof o === 'function' ? (i--, o) : void 0,
                a && so(n[0], n[1], a) && ((o = i < 3 ? void 0 : o), (i = 1)),
                e = vt(e);
                ++r < i;

              ) {
                const s = n[r]
                s && t(e, s, r, o)
              }
              return e
            })
          }
          function wi(t, e) {
            return function (n, r) {
              if (n == null) return n
              if (!Ra(n)) return t(n, r)
              for (
                let i = n.length, o = e ? i : -1, a = vt(n);
                (e ? o-- : ++o < i) && !1 !== r(a[o], o, a);

              );
              return n
            }
          }
          function xi(t) {
            return function (e, n, r) {
              for (let i = -1, o = vt(e), a = r(e), s = a.length; s--;) {
                const u = a[t ? s : ++i]
                if (!1 === n(o[u], u, o)) break
              }
              return e
            }
          }
          function Ei(t) {
            return function (e) {
              const n = We((e = ss(e))) ? Qe(e) : void 0
              const r = n ? n[0] : e.charAt(0)
              const i = n ? ci(n, 1).join('') : e.slice(1)
              return r[t]() + i
            }
          }
          function Ti(t) {
            return function (e) {
              return ve(Bs(js(e).replace(jt, '')), t, '')
            }
          }
          function Ci(t) {
            return function () {
              const e = arguments
              switch (e.length) {
                case 0:
                  return new t()
                case 1:
                  return new t(e[0])
                case 2:
                  return new t(e[0], e[1])
                case 3:
                  return new t(e[0], e[1], e[2])
                case 4:
                  return new t(e[0], e[1], e[2], e[3])
                case 5:
                  return new t(e[0], e[1], e[2], e[3], e[4])
                case 6:
                  return new t(e[0], e[1], e[2], e[3], e[4], e[5])
                case 7:
                  return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
              }
              const n = kn(t.prototype)
              const r = t.apply(n, e)
              return Ua(r) ? r : n
            }
          }
          function Si(t) {
            return function (e, n, r) {
              const i = vt(e)
              if (!Ra(e)) {
                var o = Xi(n, 3);
                (e = bs(e)),
                (n = function (t) {
                  return o(i[t], t, i)
                })
              }
              const a = t(e, n, r)
              return a > -1 ? i[o ? e[a] : a] : void 0
            }
          }
          function Ai(t) {
            return $i((e) => {
              const n = e.length
              let r = n
              const i = On.prototype.thru
              for (t && e.reverse(); r--;) {
                var a = e[r]
                if (typeof a !== 'function') throw new yt(o)
                if (i && !s && Vi(a) == 'wrapper') var s = new On([], !0)
              }
              for (r = s ? r : n; ++r < n;) {
                const u = Vi((a = e[r]))
                const c = u == 'wrapper' ? Ki(a) : void 0
                s = c && co(c[0]) && c[1] == 424 && !c[4].length && c[9] == 1
                  ? s[Vi(c[0])].apply(s, c[3])
                  : a.length == 1 && co(a)
                    ? s[u]()
                    : s.thru(a)
              }
              return function () {
                const t = arguments
                const r = t[0]
                if (s && t.length == 1 && Ia(r)) return s.plant(r).value()
                for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n;) o = e[i].call(this, o)
                return o
              }
            })
          }
          function Di(t, e, n, i, o, a, s, u, c, l) {
            const f = 128 & e
            const p = 1 & e
            const d = 2 & e
            const h = 24 & e
            const v = 512 & e
            const g = d ? void 0 : Ci(t)
            return function m() {
              for (var y = arguments.length, _ = r(y), b = y; b--;) _[b] = arguments[b]
              if (h) var w = Yi(m)
              const x = Re(_, w)
              if ((i && (_ = vi(_, i, o, h)), a && (_ = gi(_, a, s, h)), (y -= x), h && y < l)) {
                const E = Fe(_, w)
                return Ri(t, e, Di, m.placeholder, n, _, E, u, c, l - y)
              }
              const T = p ? n : this
              let C = d ? T[t] : t
              return (
                (y = _.length),
                u ? (_ = mo(_, u)) : v && y > 1 && _.reverse(),
                f && c < y && (_.length = c),
                this && this !== Kt && this instanceof m && (C = g || Ci(C)),
                C.apply(T, _)
              )
            }
          }
          function ki(t, e) {
            return function (n, r) {
              return (function (t, e, n, r) {
                return (
                  ur(t, (t, i, o) => {
                    e(r, n(t), i, o)
                  }),
                  r
                )
              }(n, t, e(r), {}))
            }
          }
          function Ni(t, e) {
            return function (n, r) {
              let i
              if (void 0 === n && void 0 === r) return e
              if ((void 0 !== n && (i = n), void 0 !== r)) {
                if (void 0 === i) return r
                typeof n === 'string' || typeof r === 'string'
                  ? ((n = Gr(n)), (r = Gr(r)))
                  : ((n = Xr(n)), (r = Xr(r))),
                (i = t(n, r))
              }
              return i
            }
          }
          function Oi(t) {
            return $i((e) => ((
              (e = de(e, Ne(Xi()))),
              Mr(function (n) {
                const r = this
                return t(e, (t) => oe(t, r, n))
              })
            )))
          }
          function ji(t, e) {
            const n = (e = void 0 === e ? ' ' : Gr(e)).length
            if (n < 2) return n ? Hr(e, t) : e
            const r = Hr(e, Je(t / ze(e)))
            return We(e) ? ci(Qe(r), 0, t).join('') : r.slice(0, t)
          }
          function Ii(t) {
            return function (e, n, i) {
              return (
                i && typeof i !== 'number' && so(e, n, i) && (n = i = void 0),
                (e = ns(e)),
                void 0 === n ? ((n = e), (e = 0)) : (n = ns(n)),
                (function (t, e, n, i) {
                  for (var o = -1, a = an(Je((e - t) / (n || 1)), 0), s = r(a); a--;) (s[i ? a : ++o] = t), (t += n)
                  return s
                }(e, n, (i = void 0 === i ? (e < n ? 1 : -1) : ns(i)), t))
              )
            }
          }
          function Li(t) {
            return function (e, n) {
              return (
                (typeof e === 'string' && typeof n === 'string') || ((e = os(e)), (n = os(n))),
                t(e, n)
              )
            }
          }
          function Ri(t, e, n, r, i, o, a, s, u, c) {
            const l = 8 & e;
            (e |= l ? 32 : 64), 4 & (e &= ~(l ? 64 : 32)) || (e &= -4)
            const f = [
              t,
              e,
              i,
              l ? o : void 0,
              l ? a : void 0,
              l ? void 0 : o,
              l ? void 0 : a,
              s,
              u,
              c,
            ]
            const p = n.apply(void 0, f)
            return co(t) && _o(p, f), (p.placeholder = r), xo(p, t, e)
          }
          function Pi(t) {
            const e = ht[t]
            return function (t, n) {
              if (((t = os(t)), (n = n == null ? 0 : sn(rs(n), 292)) && nn(t))) {
                let r = (`${ss(t)}e`).split('e')
                return +(
                  `${(r = (`${ss(e(`${r[0]}e${+r[1] + n}`))}e`).split('e'))[0]
                  }e${
                    +r[1] - n}`
                )
              }
              return e(t)
            }
          }
          var Hi = vn && 1 / Ue(new vn([, -0]))[1] == 1 / 0
            ? function (t) {
              return new vn(t)
            }
            : Gs
          function Mi(t) {
            return function (e) {
              const n = no(e)
              return n == v
                ? Be(e)
                : n == _
                  ? $e(e)
                  : (function (t, e) {
                    return de(e, (e) => [e, t[e]])
                  }(e, t(e)))
            }
          }
          function Wi(t, e, n, i, s, u, c, l) {
            const f = 2 & e
            if (!f && typeof t !== 'function') throw new yt(o)
            let p = i ? i.length : 0
            if (
              (p || ((e &= -97), (i = s = void 0)),
              (c = void 0 === c ? c : an(rs(c), 0)),
              (l = void 0 === l ? l : rs(l)),
              (p -= s ? s.length : 0),
              64 & e)
            ) {
              var d = i
              var h = s
              i = s = void 0
            }
            const v = f ? void 0 : Ki(t)
            const g = [t, e, n, i, s, d, h, u, c, l]
            if (
              (v
                && (function (t, e) {
                  const n = t[1]
                  const r = e[1]
                  let i = n | r
                  const o = i < 131
                  const s = (r == 128 && n == 8)
                      || (r == 128 && n == 256 && t[7].length <= e[8])
                      || (r == 384 && e[7].length <= e[8] && n == 8)
                  if (!o && !s) return t
                  1 & r && ((t[2] = e[2]), (i |= 1 & n ? 0 : 4))
                  let u = e[3]
                  if (u) {
                    var c = t[3];
                    (t[3] = c ? vi(c, u, e[4]) : u), (t[4] = c ? Fe(t[3], a) : e[4])
                  }
                  (u = e[5])
                    && ((c = t[5]), (t[5] = c ? gi(c, u, e[6]) : u), (t[6] = c ? Fe(t[5], a) : e[6]));
                  (u = e[7]) && (t[7] = u)
                  128 & r && (t[8] = t[8] == null ? e[8] : sn(t[8], e[8]))
                  t[9] == null && (t[9] = e[9]);
                  (t[0] = e[0]), (t[1] = i)
                }(g, v)),
              (t = g[0]),
              (e = g[1]),
              (n = g[2]),
              (i = g[3]),
              (s = g[4]),
              !(l = g[9] = void 0 === g[9] ? (f ? 0 : t.length) : an(g[9] - p, 0))
                && 24 & e
                && (e &= -25),
              e && e != 1)
            ) {
              m = e == 8 || e == 16
                ? (function (t, e, n) {
                  const i = Ci(t)
                  return function o() {
                    for (var a = arguments.length, s = r(a), u = a, c = Yi(o); u--;) s[u] = arguments[u]
                    const l = a < 3 && s[0] !== c && s[a - 1] !== c ? [] : Fe(s, c)
                    if ((a -= l.length) < n) return Ri(t, e, Di, o.placeholder, void 0, s, l, void 0, void 0, n - a)
                    const f = this && this !== Kt && this instanceof o ? i : t
                    return oe(f, this, s)
                  }
                }(t, e, l))
                : (e != 32 && e != 33) || s.length
                  ? Di.apply(void 0, g)
                  : (function (t, e, n, i) {
                    const o = 1 & e
                    const a = Ci(t)
                    return function e() {
                      for (
                        var s = -1,
                          u = arguments.length,
                          c = -1,
                          l = i.length,
                          f = r(l + u),
                          p = this && this !== Kt && this instanceof e ? a : t;
                        ++c < l;

                      ) f[c] = i[c]
                      for (; u--;) f[c++] = arguments[++s]
                      return oe(p, o ? n : this, f)
                    }
                  }(t, e, n, i))
            } else {
              var m = (function (t, e, n) {
                const r = 1 & e
                const i = Ci(t)
                return function e() {
                  const o = this && this !== Kt && this instanceof e ? i : t
                  return o.apply(r ? n : this, arguments)
                }
              }(t, e, n))
            }
            return xo((v ? Fr : _o)(m, g), t, e)
          }
          function Bi(t, e, n, r) {
            return void 0 === t || (ka(t, wt[n]) && !Tt.call(r, n)) ? e : t
          }
          function qi(t, e, n, r, i, o) {
            return Ua(t) && Ua(e) && (o.set(e, t), Nr(t, e, void 0, qi, o), o.delete(e)), t
          }
          function Fi(t) {
            return Ka(t) ? void 0 : t
          }
          function Ui(t, e, n, r, i, o) {
            const a = 1 & n
            const s = t.length
            const u = e.length
            if (s != u && !(a && u > s)) return !1
            const c = o.get(t)
            if (c && o.get(e)) return c == e
            let l = -1
            let f = !0
            const p = 2 & n ? new Pn() : void 0
            for (o.set(t, e), o.set(e, t); ++l < s;) {
              var d = t[l]
              const h = e[l]
              if (r) var v = a ? r(h, d, l, e, t, o) : r(d, h, l, t, e, o)
              if (void 0 !== v) {
                if (v) continue
                f = !1
                break
              }
              if (p) {
                if (
                  !me(e, (t, e) => {
                    if (!je(p, e) && (d === t || i(d, t, n, r, o))) return p.push(e)
                  })
                ) {
                  f = !1
                  break
                }
              } else if (d !== h && !i(d, h, n, r, o)) {
                f = !1
                break
              }
            }
            return o.delete(t), o.delete(e), f
          }
          function $i(t) {
            return wo(vo(t, void 0, Lo), `${t}`)
          }
          function zi(t) {
            return pr(t, bs, to)
          }
          function Qi(t) {
            return pr(t, ws, eo)
          }
          var Ki = yn
            ? function (t) {
              return yn.get(t)
            }
            : Gs
          function Vi(t) {
            for (var e = `${t.name}`, n = _n[e], r = Tt.call(_n, e) ? n.length : 0; r--;) {
              const i = n[r]
              const o = i.func
              if (o == null || o == t) return i.name
            }
            return e
          }
          function Yi(t) {
            return (Tt.call(Dn, 'placeholder') ? Dn : t).placeholder
          }
          function Xi() {
            let t = Dn.iteratee || Ks
            return (t = t === Ks ? Er : t), arguments.length ? t(arguments[0], arguments[1]) : t
          }
          function Gi(t, e) {
            let n
            let r
            const i = t.__data__
            return (
              (r = typeof (n = e)) == 'string' || r == 'number' || r == 'symbol' || r == 'boolean'
                ? n !== '__proto__'
                : n === null
            )
              ? i[typeof e === 'string' ? 'string' : 'hash']
              : i.map
          }
          function Ji(t) {
            for (var e = bs(t), n = e.length; n--;) {
              const r = e[n]
              const i = t[r]
              e[n] = [r, i, po(i)]
            }
            return e
          }
          function Zi(t, e) {
            const n = (function (t, e) {
              return t == null ? void 0 : t[e]
            }(t, e))
            return xr(n) ? n : void 0
          }
          var to = tn
            ? function (t) {
              return t == null
                ? []
                : ((t = vt(t)),
                le(tn(t), (e) => Vt.call(t, e)))
            }
            : iu
          var eo = tn
            ? function (t) {
              for (var e = []; t;) he(e, to(t)), (t = zt(t))
              return e
            }
            : iu
          var no = dr
          function ro(t, e, n) {
            for (var r = -1, i = (e = si(e, t)).length, o = !1; ++r < i;) {
              var a = So(e[r])
              if (!(o = t != null && n(t, a))) break
              t = t[a]
            }
            return o || ++r != i
              ? o
              : !!(i = t == null ? 0 : t.length) && Fa(i) && ao(a, i) && (Ia(t) || ja(t))
          }
          function io(t) {
            return typeof t.constructor !== 'function' || fo(t) ? {} : kn(zt(t))
          }
          function oo(t) {
            return Ia(t) || ja(t) || !!(Gt && t && t[Gt])
          }
          function ao(t, e) {
            const n = typeof t
            return (
              !!(e = e == null ? 9007199254740991 : e)
              && (n == 'number' || (n != 'symbol' && ut.test(t)))
              && t > -1
              && t % 1 == 0
              && t < e
            )
          }
          function so(t, e, n) {
            if (!Ua(n)) return !1
            const r = typeof e
            return (
              !!(r == 'number' ? Ra(n) && ao(e, n.length) : r == 'string' && e in n) && ka(n[e], t)
            )
          }
          function uo(t, e) {
            if (Ia(t)) return !1
            const n = typeof t
            return (
              !(n != 'number' && n != 'symbol' && n != 'boolean' && t != null && !Ga(t))
              || $.test(t)
              || !U.test(t)
              || (e != null && t in vt(e))
            )
          }
          function co(t) {
            const e = Vi(t)
            const n = Dn[e]
            if (typeof n !== 'function' || !(e in jn.prototype)) return !1
            if (t === n) return !0
            const r = Ki(n)
            return !!r && t === r[0]
          }
          ((pn && no(new pn(new ArrayBuffer(1))) != T)
            || (dn && no(new dn()) != v)
            || (hn && no(hn.resolve()) != '[object Promise]')
            || (vn && no(new vn()) != _)
            || (gn && no(new gn()) != x))
            && (no = function (t) {
              const e = dr(t)
              const n = e == m ? t.constructor : void 0
              const r = n ? Ao(n) : ''
              if (r) {
                switch (r) {
                  case bn:
                    return T
                  case wn:
                    return v
                  case xn:
                    return '[object Promise]'
                  case En:
                    return _
                  case Tn:
                    return x
                }
              }
              return e
            })
          const lo = xt ? Ba : ou
          function fo(t) {
            const e = t && t.constructor
            return t === ((typeof e === 'function' && e.prototype) || wt)
          }
          function po(t) {
            return t == t && !Ua(t)
          }
          function ho(t, e) {
            return function (n) {
              return n != null && n[t] === e && (void 0 !== e || t in vt(n))
            }
          }
          function vo(t, e, n) {
            return (
              (e = an(void 0 === e ? t.length - 1 : e, 0)),
              function () {
                for (var i = arguments, o = -1, a = an(i.length - e, 0), s = r(a); ++o < a;) s[o] = i[e + o]
                o = -1
                for (var u = r(e + 1); ++o < e;) u[o] = i[o]
                return (u[e] = n(s)), oe(t, this, u)
              }
            )
          }
          function go(t, e) {
            return e.length < 2 ? t : fr(t, zr(e, 0, -1))
          }
          function mo(t, e) {
            for (let n = t.length, r = sn(e.length, n), i = mi(t); r--;) {
              const o = e[r]
              t[r] = ao(o, n) ? i[o] : void 0
            }
            return t
          }
          function yo(t, e) {
            if ((e !== 'constructor' || typeof t[e] !== 'function') && e != '__proto__') return t[e]
          }
          var _o = Eo(Fr)
          var bo = Ge
              || function (t, e) {
                return Kt.setTimeout(t, e)
              }
          var wo = Eo(Ur)
          function xo(t, e, n) {
            const r = `${e}`
            return wo(
              t,
              (function (t, e) {
                const n = e.length
                if (!n) return t
                const r = n - 1
                return (
                  (e[r] = (n > 1 ? '& ' : '') + e[r]),
                  (e = e.join(n > 2 ? ', ' : ' ')),
                  t.replace(G, `{\n/* [wrapped with ${e}] */\n`)
                )
              }(
                r,
                (function (t, e) {
                  return (
                    se(s, (n) => {
                      const r = `_.${n[0]}`
                      e & n[1] && !fe(t, r) && t.push(r)
                    }),
                    t.sort()
                  )
                }(
                  (function (t) {
                    const e = t.match(J)
                    return e ? e[1].split(Z) : []
                  }(r)),
                  n,
                )),
              )),
            )
          }
          function Eo(t) {
            let e = 0
            let n = 0
            return function () {
              const r = un()
              const i = 16 - (r - n)
              if (((n = r), i > 0)) {
                if (++e >= 800) return arguments[0]
              } else e = 0
              return t.apply(void 0, arguments)
            }
          }
          function To(t, e) {
            let n = -1
            const r = t.length
            const i = r - 1
            for (e = void 0 === e ? r : e; ++n < e;) {
              const o = Pr(n, i)
              const a = t[o];
              (t[o] = t[n]), (t[n] = a)
            }
            return (t.length = e), t
          }
          var Co = (function (t) {
            const e = Ea(t, (t) => (n.size === 500 && n.clear(), t))
            var n = e.cache
            return e
          }((t) => {
            const e = []
            return (
              t.charCodeAt(0) === 46 && e.push(''),
              t.replace(z, (t, n, r, i) => {
                e.push(r ? i.replace(et, '$1') : n || t)
              }),
              e
            )
          }))
          function So(t) {
            if (typeof t === 'string' || Ga(t)) return t
            const e = `${t}`
            return e == '0' && 1 / t == -1 / 0 ? '-0' : e
          }
          function Ao(t) {
            if (t != null) {
              try {
                return Et.call(t)
              } catch (t) {}
              try {
                return `${t}`
              } catch (t) {}
            }
            return ''
          }
          function Do(t) {
            if (t instanceof jn) return t.clone()
            const e = new On(t.__wrapped__, t.__chain__)
            return (
              (e.__actions__ = mi(t.__actions__)),
              (e.__index__ = t.__index__),
              (e.__values__ = t.__values__),
              e
            )
          }
          const ko = Mr((t, e) => (Pa(t) ? Zn(t, or(e, 1, Pa, !0)) : []))
          const No = Mr((t, e) => {
            let n = Wo(e)
            return Pa(n) && (n = void 0), Pa(t) ? Zn(t, or(e, 1, Pa, !0), Xi(n, 2)) : []
          })
          const Oo = Mr((t, e) => {
            let n = Wo(e)
            return Pa(n) && (n = void 0), Pa(t) ? Zn(t, or(e, 1, Pa, !0), void 0, n) : []
          })
          function jo(t, e, n) {
            const r = t == null ? 0 : t.length
            if (!r) return -1
            let i = n == null ? 0 : rs(n)
            return i < 0 && (i = an(r + i, 0)), be(t, Xi(e, 3), i)
          }
          function Io(t, e, n) {
            const r = t == null ? 0 : t.length
            if (!r) return -1
            let i = r - 1
            return (
              void 0 !== n && ((i = rs(n)), (i = n < 0 ? an(r + i, 0) : sn(i, r - 1))),
              be(t, Xi(e, 3), i, !0)
            )
          }
          function Lo(t) {
            return (t == null ? 0 : t.length) ? or(t, 1) : []
          }
          function Ro(t) {
            return t && t.length ? t[0] : void 0
          }
          const Po = Mr((t) => {
            const e = de(t, oi)
            return e.length && e[0] === t[0] ? mr(e) : []
          })
          const Ho = Mr((t) => {
            let e = Wo(t)
            const n = de(t, oi)
            return (
              e === Wo(n) ? (e = void 0) : n.pop(),
              n.length && n[0] === t[0] ? mr(n, Xi(e, 2)) : []
            )
          })
          const Mo = Mr((t) => {
            let e = Wo(t)
            const n = de(t, oi)
            return (
              (e = typeof e === 'function' ? e : void 0) && n.pop(),
              n.length && n[0] === t[0] ? mr(n, void 0, e) : []
            )
          })
          function Wo(t) {
            const e = t == null ? 0 : t.length
            return e ? t[e - 1] : void 0
          }
          const Bo = Mr(qo)
          function qo(t, e) {
            return t && t.length && e && e.length ? Lr(t, e) : t
          }
          const Fo = $i((t, e) => {
            const n = t == null ? 0 : t.length
            const r = Vn(t, e)
            return (
              Rr(
                t,
                de(e, (t) => (ao(t, n) ? +t : t)).sort(hi),
              ),
              r
            )
          })
          function Uo(t) {
            return t == null ? t : fn.call(t)
          }
          const $o = Mr((t) => Jr(or(t, 1, Pa, !0)))
          const zo = Mr((t) => {
            let e = Wo(t)
            return Pa(e) && (e = void 0), Jr(or(t, 1, Pa, !0), Xi(e, 2))
          })
          const Qo = Mr((t) => {
            let e = Wo(t)
            return (e = typeof e === 'function' ? e : void 0), Jr(or(t, 1, Pa, !0), void 0, e)
          })
          function Ko(t) {
            if (!t || !t.length) return []
            let e = 0
            return (
              (t = le(t, (t) => {
                if (Pa(t)) return (e = an(t.length, e)), !0
              })),
              ke(e, (e) => de(t, Ce(e)))
            )
          }
          function Vo(t, e) {
            if (!t || !t.length) return []
            const n = Ko(t)
            return e == null
              ? n
              : de(n, (t) => oe(e, void 0, t))
          }
          const Yo = Mr((t, e) => (Pa(t) ? Zn(t, e) : []))
          const Xo = Mr((t) => ri(le(t, Pa)))
          const Go = Mr((t) => {
            let e = Wo(t)
            return Pa(e) && (e = void 0), ri(le(t, Pa), Xi(e, 2))
          })
          const Jo = Mr((t) => {
            let e = Wo(t)
            return (e = typeof e === 'function' ? e : void 0), ri(le(t, Pa), void 0, e)
          })
          const Zo = Mr(Ko)
          const ta = Mr((t) => {
            const e = t.length
            let n = e > 1 ? t[e - 1] : void 0
            return (n = typeof n === 'function' ? (t.pop(), n) : void 0), Vo(t, n)
          })
          function ea(t) {
            const e = Dn(t)
            return (e.__chain__ = !0), e
          }
          function na(t, e) {
            return e(t)
          }
          const ra = $i(function (t) {
            const e = t.length
            const n = e ? t[0] : 0
            let r = this.__wrapped__
            const i = function (e) {
              return Vn(e, t)
            }
            return !(e > 1 || this.__actions__.length) && r instanceof jn && ao(n)
              ? ((r = r.slice(n, +n + (e ? 1 : 0))).__actions__.push({
                func: na,
                args: [i],
                thisArg: void 0,
              }),
              new On(r, this.__chain__).thru((t) => (e && !t.length && t.push(void 0), t)))
              : this.thru(i)
          })
          const ia = _i((t, e, n) => {
            Tt.call(t, n) ? ++t[n] : Kn(t, n, 1)
          })
          const oa = Si(jo)
          const aa = Si(Io)
          function sa(t, e) {
            return (Ia(t) ? se : tr)(t, Xi(e, 3))
          }
          function ua(t, e) {
            return (Ia(t) ? ue : er)(t, Xi(e, 3))
          }
          const ca = _i((t, e, n) => {
            Tt.call(t, n) ? t[n].push(e) : Kn(t, n, [e])
          })
          const la = Mr((t, e, n) => {
            let i = -1
            const o = typeof e === 'function'
            const a = Ra(t) ? r(t.length) : []
            return (
              tr(t, (t) => {
                a[++i] = o ? oe(e, t, n) : yr(t, e, n)
              }),
              a
            )
          })
          const fa = _i((t, e, n) => {
            Kn(t, n, e)
          })
          function pa(t, e) {
            return (Ia(t) ? de : Ar)(t, Xi(e, 3))
          }
          const da = _i(
            (t, e, n) => {
              t[n ? 0 : 1].push(e)
            },
            () => [[], []],
          )
          const ha = Mr((t, e) => {
            if (t == null) return []
            const n = e.length
            return (
              n > 1 && so(t, e[0], e[1])
                ? (e = [])
                : n > 2 && so(e[0], e[1], e[2]) && (e = [e[0]]),
              jr(t, or(e, 1), [])
            )
          })
          const va = Xe
              || function () {
                return Kt.Date.now()
              }
          function ga(t, e, n) {
            return (
              (e = n ? void 0 : e),
              Wi(t, 128, void 0, void 0, void 0, void 0, (e = t && e == null ? t.length : e))
            )
          }
          function ma(t, e) {
            let n
            if (typeof e !== 'function') throw new yt(o)
            return (
              (t = rs(t)),
              function () {
                return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = void 0), n
              }
            )
          }
          var ya = Mr((t, e, n) => {
            let r = 1
            if (n.length) {
              var i = Fe(n, Yi(ya))
              r |= 32
            }
            return Wi(t, r, e, n, i)
          })
          var _a = Mr((t, e, n) => {
            let r = 3
            if (n.length) {
              var i = Fe(n, Yi(_a))
              r |= 32
            }
            return Wi(e, r, t, n, i)
          })
          function ba(t, e, n) {
            let r
            let i
            let a
            let s
            let u
            let c
            let l = 0
            let f = !1
            let p = !1
            let d = !0
            if (typeof t !== 'function') throw new yt(o)
            function h(e) {
              const n = r
              const o = i
              return (r = i = void 0), (l = e), (s = t.apply(o, n))
            }
            function v(t) {
              return (l = t), (u = bo(m, e)), f ? h(t) : s
            }
            function g(t) {
              const n = t - c
              return void 0 === c || n >= e || n < 0 || (p && t - l >= a)
            }
            function m() {
              const t = va()
              if (g(t)) return y(t)
              u = bo(
                m,
                (function (t) {
                  const n = e - (t - c)
                  return p ? sn(n, a - (t - l)) : n
                }(t)),
              )
            }
            function y(t) {
              return (u = void 0), d && r ? h(t) : ((r = i = void 0), s)
            }
            function _() {
              const t = va()
              const n = g(t)
              if (((r = arguments), (i = this), (c = t), n)) {
                if (void 0 === u) return v(c)
                if (p) return li(u), (u = bo(m, e)), h(c)
              }
              return void 0 === u && (u = bo(m, e)), s
            }
            return (
              (e = os(e) || 0),
              Ua(n)
                && ((f = !!n.leading),
                (a = (p = 'maxWait' in n) ? an(os(n.maxWait) || 0, e) : a),
                (d = 'trailing' in n ? !!n.trailing : d)),
              (_.cancel = function () {
                void 0 !== u && li(u), (l = 0), (r = c = i = u = void 0)
              }),
              (_.flush = function () {
                return void 0 === u ? s : y(va())
              }),
              _
            )
          }
          const wa = Mr((t, e) => Jn(t, 1, e))
          const xa = Mr((t, e, n) => Jn(t, os(e) || 0, n))
          function Ea(t, e) {
            if (typeof t !== 'function' || (e != null && typeof e !== 'function')) throw new yt(o)
            var n = function () {
              const r = arguments
              const i = e ? e.apply(this, r) : r[0]
              const o = n.cache
              if (o.has(i)) return o.get(i)
              const a = t.apply(this, r)
              return (n.cache = o.set(i, a) || o), a
            }
            return (n.cache = new (Ea.Cache || Rn)()), n
          }
          function Ta(t) {
            if (typeof t !== 'function') throw new yt(o)
            return function () {
              const e = arguments
              switch (e.length) {
                case 0:
                  return !t.call(this)
                case 1:
                  return !t.call(this, e[0])
                case 2:
                  return !t.call(this, e[0], e[1])
                case 3:
                  return !t.call(this, e[0], e[1], e[2])
              }
              return !t.apply(this, e)
            }
          }
          Ea.Cache = Rn
          const Ca = ui((t, e) => {
            const n = (e = e.length == 1 && Ia(e[0]) ? de(e[0], Ne(Xi())) : de(or(e, 1), Ne(Xi())))
              .length
            return Mr(function (r) {
              for (let i = -1, o = sn(r.length, n); ++i < o;) r[i] = e[i].call(this, r[i])
              return oe(t, this, r)
            })
          })
          var Sa = Mr((t, e) => Wi(t, 32, void 0, e, Fe(e, Yi(Sa))))
          var Aa = Mr((t, e) => Wi(t, 64, void 0, e, Fe(e, Yi(Aa))))
          const Da = $i((t, e) => Wi(t, 256, void 0, void 0, void 0, e))
          function ka(t, e) {
            return t === e || (t != t && e != e)
          }
          const Na = Li(hr)
          const Oa = Li((t, e) => t >= e)
          var ja = _r(
            (function () {
              return arguments
            }()),
          )
            ? _r
            : function (t) {
              return $a(t) && Tt.call(t, 'callee') && !Vt.call(t, 'callee')
            }
          var Ia = r.isArray
          const La = Zt
            ? Ne(Zt)
            : function (t) {
              return $a(t) && dr(t) == E
            }
          function Ra(t) {
            return t != null && Fa(t.length) && !Ba(t)
          }
          function Pa(t) {
            return $a(t) && Ra(t)
          }
          var Ha = en || ou
          const Ma = te
            ? Ne(te)
            : function (t) {
              return $a(t) && dr(t) == f
            }
          function Wa(t) {
            if (!$a(t)) return !1
            const e = dr(t)
            return (
              e == p
              || e == '[object DOMException]'
              || (typeof t.message === 'string' && typeof t.name === 'string' && !Ka(t))
            )
          }
          function Ba(t) {
            if (!Ua(t)) return !1
            const e = dr(t)
            return e == d || e == h || e == '[object AsyncFunction]' || e == '[object Proxy]'
          }
          function qa(t) {
            return typeof t === 'number' && t == rs(t)
          }
          function Fa(t) {
            return typeof t === 'number' && t > -1 && t % 1 == 0 && t <= 9007199254740991
          }
          function Ua(t) {
            const e = typeof t
            return t != null && (e == 'object' || e == 'function')
          }
          function $a(t) {
            return t != null && typeof t === 'object'
          }
          var za = ee
            ? Ne(ee)
            : function (t) {
              return $a(t) && no(t) == v
            }
          function Qa(t) {
            return typeof t === 'number' || ($a(t) && dr(t) == g)
          }
          function Ka(t) {
            if (!$a(t) || dr(t) != m) return !1
            const e = zt(t)
            if (e === null) return !0
            const n = Tt.call(e, 'constructor') && e.constructor
            return typeof n === 'function' && n instanceof n && Et.call(n) == Dt
          }
          const Va = ne
            ? Ne(ne)
            : function (t) {
              return $a(t) && dr(t) == y
            }
          var Ya = re
            ? Ne(re)
            : function (t) {
              return $a(t) && no(t) == _
            }
          function Xa(t) {
            return typeof t === 'string' || (!Ia(t) && $a(t) && dr(t) == b)
          }
          function Ga(t) {
            return typeof t === 'symbol' || ($a(t) && dr(t) == w)
          }
          var Ja = ie
            ? Ne(ie)
            : function (t) {
              return $a(t) && Fa(t.length) && !!Bt[dr(t)]
            }
          const Za = Li(Sr)
          const ts = Li((t, e) => t <= e)
          function es(t) {
            if (!t) return []
            if (Ra(t)) return Xa(t) ? Qe(t) : mi(t)
            if (Jt && t[Jt]) {
              return (function (t) {
                for (var e, n = []; !(e = t.next()).done;) n.push(e.value)
                return n
              }(t[Jt]()))
            }
            const e = no(t)
            return (e == v ? Be : e == _ ? Ue : ks)(t)
          }
          function ns(t) {
            return t
              ? (t = os(t)) === 1 / 0 || t === -1 / 0
                ? 17976931348623157e292 * (t < 0 ? -1 : 1)
                : t == t
                  ? t
                  : 0
              : t === 0
                ? t
                : 0
          }
          function rs(t) {
            const e = ns(t)
            const n = e % 1
            return e == e ? (n ? e - n : e) : 0
          }
          function is(t) {
            return t ? Yn(rs(t), 0, 4294967295) : 0
          }
          function os(t) {
            if (typeof t === 'number') return t
            if (Ga(t)) return NaN
            if (Ua(t)) {
              const e = typeof t.valueOf === 'function' ? t.valueOf() : t
              t = Ua(e) ? `${e}` : e
            }
            if (typeof t !== 'string') return t === 0 ? t : +t
            t = t.replace(V, '')
            const n = ot.test(t)
            return n || st.test(t) ? $t(t.slice(2), n ? 2 : 8) : it.test(t) ? NaN : +t
          }
          function as(t) {
            return yi(t, ws(t))
          }
          function ss(t) {
            return t == null ? '' : Gr(t)
          }
          const us = bi((t, e) => {
            if (fo(e) || Ra(e)) yi(e, bs(e), t)
            else for (const n in e) Tt.call(e, n) && Un(t, n, e[n])
          })
          const cs = bi((t, e) => {
            yi(e, ws(e), t)
          })
          const ls = bi((t, e, n, r) => {
            yi(e, ws(e), t, r)
          })
          const fs = bi((t, e, n, r) => {
            yi(e, bs(e), t, r)
          })
          const ps = $i(Vn)
          const ds = Mr((t, e) => {
            t = vt(t)
            let n = -1
            let r = e.length
            const i = r > 2 ? e[2] : void 0
            for (i && so(e[0], e[1], i) && (r = 1); ++n < r;) {
              for (let o = e[n], a = ws(o), s = -1, u = a.length; ++s < u;) {
                const c = a[s]
                const l = t[c];
                (void 0 === l || (ka(l, wt[c]) && !Tt.call(t, c))) && (t[c] = o[c])
              }
            }
            return t
          })
          const hs = Mr((t) => (t.push(void 0, qi), oe(Es, void 0, t)))
          function vs(t, e, n) {
            const r = t == null ? void 0 : fr(t, e)
            return void 0 === r ? n : r
          }
          function gs(t, e) {
            return t != null && ro(t, e, gr)
          }
          const ms = ki((t, e, n) => {
            e != null && typeof e.toString !== 'function' && (e = At.call(e)), (t[e] = n)
          }, Us(Qs))
          const ys = ki((t, e, n) => {
            e != null && typeof e.toString !== 'function' && (e = At.call(e)),
            Tt.call(t, e) ? t[e].push(n) : (t[e] = [n])
          }, Xi)
          const _s = Mr(yr)
          function bs(t) {
            return Ra(t) ? Mn(t) : Tr(t)
          }
          function ws(t) {
            return Ra(t) ? Mn(t, !0) : Cr(t)
          }
          const xs = bi((t, e, n) => {
            Nr(t, e, n)
          })
          var Es = bi((t, e, n, r) => {
            Nr(t, e, n, r)
          })
          const Ts = $i((t, e) => {
            let n = {}
            if (t == null) return n
            let r = !1;
            (e = de(e, (e) => ((e = si(e, t)), r || (r = e.length > 1), e))),
            yi(t, Qi(t), n),
            r && (n = Xn(n, 7, Fi))
            for (let i = e.length; i--;) Zr(n, e[i])
            return n
          })
          const Cs = $i((t, e) => (t == null
            ? {}
            : (function (t, e) {
              return Ir(t, e, (e, n) => gs(t, n))
            }(t, e))))
          function Ss(t, e) {
            if (t == null) return {}
            const n = de(Qi(t), (t) => [t])
            return (
              (e = Xi(e)),
              Ir(t, n, (t, n) => e(t, n[0]))
            )
          }
          const As = Mi(bs)
          const Ds = Mi(ws)
          function ks(t) {
            return t == null ? [] : Oe(t, bs(t))
          }
          const Ns = Ti((t, e, n) => ((e = e.toLowerCase()), t + (n ? Os(e) : e)))
          function Os(t) {
            return Ws(ss(t).toLowerCase())
          }
          function js(t) {
            return (t = ss(t)) && t.replace(ct, Pe).replace(It, '')
          }
          const Is = Ti((t, e, n) => t + (n ? '-' : '') + e.toLowerCase())
          const Ls = Ti((t, e, n) => t + (n ? ' ' : '') + e.toLowerCase())
          const Rs = Ei('toLowerCase')
          const Ps = Ti((t, e, n) => t + (n ? '_' : '') + e.toLowerCase())
          const Hs = Ti((t, e, n) => t + (n ? ' ' : '') + Ws(e))
          const Ms = Ti((t, e, n) => t + (n ? ' ' : '') + e.toUpperCase())
          var Ws = Ei('toUpperCase')
          function Bs(t, e, n) {
            return (
              (t = ss(t)),
              void 0 === (e = n ? void 0 : e)
                ? (function (t) {
                  return Ht.test(t)
                }(t))
                  ? (function (t) {
                    return t.match(Rt) || []
                  }(t))
                  : (function (t) {
                    return t.match(tt) || []
                  }(t))
                : t.match(e) || []
            )
          }
          const qs = Mr((t, e) => {
            try {
              return oe(t, void 0, e)
            } catch (t) {
              return Wa(t) ? t : new pt(t)
            }
          })
          const Fs = $i((t, e) => ((
            se(e, (e) => {
              (e = So(e)), Kn(t, e, ya(t[e], t))
            }),
            t
          )))
          function Us(t) {
            return function () {
              return t
            }
          }
          const $s = Ai()
          const zs = Ai(!0)
          function Qs(t) {
            return t
          }
          function Ks(t) {
            return Er(typeof t === 'function' ? t : Xn(t, 1))
          }
          const Vs = Mr((t, e) => function (n) {
            return yr(n, t, e)
          })
          const Ys = Mr((t, e) => function (n) {
            return yr(t, n, e)
          })
          function Xs(t, e, n) {
            const r = bs(e)
            let i = lr(e, r)
            n != null
              || (Ua(e) && (i.length || !r.length))
              || ((n = e), (e = t), (t = this), (i = lr(e, bs(e))))
            const o = !(Ua(n) && 'chain' in n && !n.chain)
            const a = Ba(t)
            return (
              se(i, (n) => {
                const r = e[n];
                (t[n] = r),
                a
                    && (t.prototype[n] = function () {
                      const e = this.__chain__
                      if (o || e) {
                        const n = t(this.__wrapped__)
                        const i = (n.__actions__ = mi(this.__actions__))
                        return (
                          i.push({ func: r, args: arguments, thisArg: t }), (n.__chain__ = e), n
                        )
                      }
                      return r.apply(t, he([this.value()], arguments))
                    })
              }),
              t
            )
          }
          function Gs() {}
          const Js = Oi(de)
          const Zs = Oi(ce)
          const tu = Oi(me)
          function eu(t) {
            return uo(t)
              ? Ce(So(t))
              : (function (t) {
                return function (e) {
                  return fr(e, t)
                }
              }(t))
          }
          const nu = Ii()
          const ru = Ii(!0)
          function iu() {
            return []
          }
          function ou() {
            return !1
          }
          const au = Ni((t, e) => t + e, 0)
          const su = Pi('ceil')
          const uu = Ni((t, e) => t / e, 1)
          const cu = Pi('floor')
          let lu
          const fu = Ni((t, e) => t * e, 1)
          const pu = Pi('round')
          const du = Ni((t, e) => t - e, 0)
          return (
            (Dn.after = function (t, e) {
              if (typeof e !== 'function') throw new yt(o)
              return (
                (t = rs(t)),
                function () {
                  if (--t < 1) return e.apply(this, arguments)
                }
              )
            }),
            (Dn.ary = ga),
            (Dn.assign = us),
            (Dn.assignIn = cs),
            (Dn.assignInWith = ls),
            (Dn.assignWith = fs),
            (Dn.at = ps),
            (Dn.before = ma),
            (Dn.bind = ya),
            (Dn.bindAll = Fs),
            (Dn.bindKey = _a),
            (Dn.castArray = function () {
              if (!arguments.length) return []
              const t = arguments[0]
              return Ia(t) ? t : [t]
            }),
            (Dn.chain = ea),
            (Dn.chunk = function (t, e, n) {
              e = (n ? so(t, e, n) : void 0 === e) ? 1 : an(rs(e), 0)
              const i = t == null ? 0 : t.length
              if (!i || e < 1) return []
              for (var o = 0, a = 0, s = r(Je(i / e)); o < i;) s[a++] = zr(t, o, (o += e))
              return s
            }),
            (Dn.compact = function (t) {
              for (var e = -1, n = t == null ? 0 : t.length, r = 0, i = []; ++e < n;) {
                const o = t[e]
                o && (i[r++] = o)
              }
              return i
            }),
            (Dn.concat = function () {
              const t = arguments.length
              if (!t) return []
              for (var e = r(t - 1), n = arguments[0], i = t; i--;) e[i - 1] = arguments[i]
              return he(Ia(n) ? mi(n) : [n], or(e, 1))
            }),
            (Dn.cond = function (t) {
              const e = t == null ? 0 : t.length
              const n = Xi()
              return (
                (t = e
                  ? de(t, (t) => {
                    if (typeof t[1] !== 'function') throw new yt(o)
                    return [n(t[0]), t[1]]
                  })
                  : []),
                Mr(function (n) {
                  for (let r = -1; ++r < e;) {
                    const i = t[r]
                    if (oe(i[0], this, n)) return oe(i[1], this, n)
                  }
                })
              )
            }),
            (Dn.conforms = function (t) {
              return (function (t) {
                const e = bs(t)
                return function (n) {
                  return Gn(n, t, e)
                }
              }(Xn(t, 1)))
            }),
            (Dn.constant = Us),
            (Dn.countBy = ia),
            (Dn.create = function (t, e) {
              const n = kn(t)
              return e == null ? n : Qn(n, e)
            }),
            (Dn.curry = function t(e, n, r) {
              const i = Wi(e, 8, void 0, void 0, void 0, void 0, void 0, (n = r ? void 0 : n))
              return (i.placeholder = t.placeholder), i
            }),
            (Dn.curryRight = function t(e, n, r) {
              const i = Wi(e, 16, void 0, void 0, void 0, void 0, void 0, (n = r ? void 0 : n))
              return (i.placeholder = t.placeholder), i
            }),
            (Dn.debounce = ba),
            (Dn.defaults = ds),
            (Dn.defaultsDeep = hs),
            (Dn.defer = wa),
            (Dn.delay = xa),
            (Dn.difference = ko),
            (Dn.differenceBy = No),
            (Dn.differenceWith = Oo),
            (Dn.drop = function (t, e, n) {
              const r = t == null ? 0 : t.length
              return r ? zr(t, (e = n || void 0 === e ? 1 : rs(e)) < 0 ? 0 : e, r) : []
            }),
            (Dn.dropRight = function (t, e, n) {
              const r = t == null ? 0 : t.length
              return r ? zr(t, 0, (e = r - (e = n || void 0 === e ? 1 : rs(e))) < 0 ? 0 : e) : []
            }),
            (Dn.dropRightWhile = function (t, e) {
              return t && t.length ? ei(t, Xi(e, 3), !0, !0) : []
            }),
            (Dn.dropWhile = function (t, e) {
              return t && t.length ? ei(t, Xi(e, 3), !0) : []
            }),
            (Dn.fill = function (t, e, n, r) {
              const i = t == null ? 0 : t.length
              return i
                ? (n && typeof n !== 'number' && so(t, e, n) && ((n = 0), (r = i)),
                (function (t, e, n, r) {
                  const i = t.length
                  for (
                    (n = rs(n)) < 0 && (n = -n > i ? 0 : i + n),
                    (r = void 0 === r || r > i ? i : rs(r)) < 0 && (r += i),
                    r = n > r ? 0 : is(r);
                    n < r;

                  ) t[n++] = e
                  return t
                }(t, e, n, r)))
                : []
            }),
            (Dn.filter = function (t, e) {
              return (Ia(t) ? le : ir)(t, Xi(e, 3))
            }),
            (Dn.flatMap = function (t, e) {
              return or(pa(t, e), 1)
            }),
            (Dn.flatMapDeep = function (t, e) {
              return or(pa(t, e), 1 / 0)
            }),
            (Dn.flatMapDepth = function (t, e, n) {
              return (n = void 0 === n ? 1 : rs(n)), or(pa(t, e), n)
            }),
            (Dn.flatten = Lo),
            (Dn.flattenDeep = function (t) {
              return (t == null ? 0 : t.length) ? or(t, 1 / 0) : []
            }),
            (Dn.flattenDepth = function (t, e) {
              return (t == null ? 0 : t.length) ? or(t, (e = void 0 === e ? 1 : rs(e))) : []
            }),
            (Dn.flip = function (t) {
              return Wi(t, 512)
            }),
            (Dn.flow = $s),
            (Dn.flowRight = zs),
            (Dn.fromPairs = function (t) {
              for (var e = -1, n = t == null ? 0 : t.length, r = {}; ++e < n;) {
                const i = t[e]
                r[i[0]] = i[1]
              }
              return r
            }),
            (Dn.functions = function (t) {
              return t == null ? [] : lr(t, bs(t))
            }),
            (Dn.functionsIn = function (t) {
              return t == null ? [] : lr(t, ws(t))
            }),
            (Dn.groupBy = ca),
            (Dn.initial = function (t) {
              return (t == null ? 0 : t.length) ? zr(t, 0, -1) : []
            }),
            (Dn.intersection = Po),
            (Dn.intersectionBy = Ho),
            (Dn.intersectionWith = Mo),
            (Dn.invert = ms),
            (Dn.invertBy = ys),
            (Dn.invokeMap = la),
            (Dn.iteratee = Ks),
            (Dn.keyBy = fa),
            (Dn.keys = bs),
            (Dn.keysIn = ws),
            (Dn.map = pa),
            (Dn.mapKeys = function (t, e) {
              const n = {}
              return (
                (e = Xi(e, 3)),
                ur(t, (t, r, i) => {
                  Kn(n, e(t, r, i), t)
                }),
                n
              )
            }),
            (Dn.mapValues = function (t, e) {
              const n = {}
              return (
                (e = Xi(e, 3)),
                ur(t, (t, r, i) => {
                  Kn(n, r, e(t, r, i))
                }),
                n
              )
            }),
            (Dn.matches = function (t) {
              return Dr(Xn(t, 1))
            }),
            (Dn.matchesProperty = function (t, e) {
              return kr(t, Xn(e, 1))
            }),
            (Dn.memoize = Ea),
            (Dn.merge = xs),
            (Dn.mergeWith = Es),
            (Dn.method = Vs),
            (Dn.methodOf = Ys),
            (Dn.mixin = Xs),
            (Dn.negate = Ta),
            (Dn.nthArg = function (t) {
              return (
                (t = rs(t)),
                Mr((e) => Or(e, t))
              )
            }),
            (Dn.omit = Ts),
            (Dn.omitBy = function (t, e) {
              return Ss(t, Ta(Xi(e)))
            }),
            (Dn.once = function (t) {
              return ma(2, t)
            }),
            (Dn.orderBy = function (t, e, n, r) {
              return t == null
                ? []
                : (Ia(e) || (e = e == null ? [] : [e]),
                Ia((n = r ? void 0 : n)) || (n = n == null ? [] : [n]),
                jr(t, e, n))
            }),
            (Dn.over = Js),
            (Dn.overArgs = Ca),
            (Dn.overEvery = Zs),
            (Dn.overSome = tu),
            (Dn.partial = Sa),
            (Dn.partialRight = Aa),
            (Dn.partition = da),
            (Dn.pick = Cs),
            (Dn.pickBy = Ss),
            (Dn.property = eu),
            (Dn.propertyOf = function (t) {
              return function (e) {
                return t == null ? void 0 : fr(t, e)
              }
            }),
            (Dn.pull = Bo),
            (Dn.pullAll = qo),
            (Dn.pullAllBy = function (t, e, n) {
              return t && t.length && e && e.length ? Lr(t, e, Xi(n, 2)) : t
            }),
            (Dn.pullAllWith = function (t, e, n) {
              return t && t.length && e && e.length ? Lr(t, e, void 0, n) : t
            }),
            (Dn.pullAt = Fo),
            (Dn.range = nu),
            (Dn.rangeRight = ru),
            (Dn.rearg = Da),
            (Dn.reject = function (t, e) {
              return (Ia(t) ? le : ir)(t, Ta(Xi(e, 3)))
            }),
            (Dn.remove = function (t, e) {
              const n = []
              if (!t || !t.length) return n
              let r = -1
              const i = []
              const o = t.length
              for (e = Xi(e, 3); ++r < o;) {
                const a = t[r]
                e(a, r, t) && (n.push(a), i.push(r))
              }
              return Rr(t, i), n
            }),
            (Dn.rest = function (t, e) {
              if (typeof t !== 'function') throw new yt(o)
              return Mr(t, (e = void 0 === e ? e : rs(e)))
            }),
            (Dn.reverse = Uo),
            (Dn.sampleSize = function (t, e, n) {
              return (e = (n ? so(t, e, n) : void 0 === e) ? 1 : rs(e)), (Ia(t) ? Bn : Br)(t, e)
            }),
            (Dn.set = function (t, e, n) {
              return t == null ? t : qr(t, e, n)
            }),
            (Dn.setWith = function (t, e, n, r) {
              return (r = typeof r === 'function' ? r : void 0), t == null ? t : qr(t, e, n, r)
            }),
            (Dn.shuffle = function (t) {
              return (Ia(t) ? qn : $r)(t)
            }),
            (Dn.slice = function (t, e, n) {
              const r = t == null ? 0 : t.length
              return r
                ? (n && typeof n !== 'number' && so(t, e, n)
                  ? ((e = 0), (n = r))
                  : ((e = e == null ? 0 : rs(e)), (n = void 0 === n ? r : rs(n))),
                zr(t, e, n))
                : []
            }),
            (Dn.sortBy = ha),
            (Dn.sortedUniq = function (t) {
              return t && t.length ? Yr(t) : []
            }),
            (Dn.sortedUniqBy = function (t, e) {
              return t && t.length ? Yr(t, Xi(e, 2)) : []
            }),
            (Dn.split = function (t, e, n) {
              return (
                n && typeof n !== 'number' && so(t, e, n) && (e = n = void 0),
                (n = void 0 === n ? 4294967295 : n >>> 0)
                  ? (t = ss(t))
                    && (typeof e === 'string' || (e != null && !Va(e)))
                    && !(e = Gr(e))
                    && We(t)
                    ? ci(Qe(t), 0, n)
                    : t.split(e, n)
                  : []
              )
            }),
            (Dn.spread = function (t, e) {
              if (typeof t !== 'function') throw new yt(o)
              return (
                (e = e == null ? 0 : an(rs(e), 0)),
                Mr(function (n) {
                  const r = n[e]
                  const i = ci(n, 0, e)
                  return r && he(i, r), oe(t, this, i)
                })
              )
            }),
            (Dn.tail = function (t) {
              const e = t == null ? 0 : t.length
              return e ? zr(t, 1, e) : []
            }),
            (Dn.take = function (t, e, n) {
              return t && t.length ? zr(t, 0, (e = n || void 0 === e ? 1 : rs(e)) < 0 ? 0 : e) : []
            }),
            (Dn.takeRight = function (t, e, n) {
              const r = t == null ? 0 : t.length
              return r ? zr(t, (e = r - (e = n || void 0 === e ? 1 : rs(e))) < 0 ? 0 : e, r) : []
            }),
            (Dn.takeRightWhile = function (t, e) {
              return t && t.length ? ei(t, Xi(e, 3), !1, !0) : []
            }),
            (Dn.takeWhile = function (t, e) {
              return t && t.length ? ei(t, Xi(e, 3)) : []
            }),
            (Dn.tap = function (t, e) {
              return e(t), t
            }),
            (Dn.throttle = function (t, e, n) {
              let r = !0
              let i = !0
              if (typeof t !== 'function') throw new yt(o)
              return (
                Ua(n)
                  && ((r = 'leading' in n ? !!n.leading : r),
                  (i = 'trailing' in n ? !!n.trailing : i)),
                ba(t, e, { leading: r, maxWait: e, trailing: i })
              )
            }),
            (Dn.thru = na),
            (Dn.toArray = es),
            (Dn.toPairs = As),
            (Dn.toPairsIn = Ds),
            (Dn.toPath = function (t) {
              return Ia(t) ? de(t, So) : Ga(t) ? [t] : mi(Co(ss(t)))
            }),
            (Dn.toPlainObject = as),
            (Dn.transform = function (t, e, n) {
              const r = Ia(t)
              const i = r || Ha(t) || Ja(t)
              if (((e = Xi(e, 4)), n == null)) {
                const o = t && t.constructor
                n = i ? (r ? new o() : []) : Ua(t) && Ba(o) ? kn(zt(t)) : {}
              }
              return (
                (i ? se : ur)(t, (t, r, i) => e(n, t, r, i)),
                n
              )
            }),
            (Dn.unary = function (t) {
              return ga(t, 1)
            }),
            (Dn.union = $o),
            (Dn.unionBy = zo),
            (Dn.unionWith = Qo),
            (Dn.uniq = function (t) {
              return t && t.length ? Jr(t) : []
            }),
            (Dn.uniqBy = function (t, e) {
              return t && t.length ? Jr(t, Xi(e, 2)) : []
            }),
            (Dn.uniqWith = function (t, e) {
              return (
                (e = typeof e === 'function' ? e : void 0), t && t.length ? Jr(t, void 0, e) : []
              )
            }),
            (Dn.unset = function (t, e) {
              return t == null || Zr(t, e)
            }),
            (Dn.unzip = Ko),
            (Dn.unzipWith = Vo),
            (Dn.update = function (t, e, n) {
              return t == null ? t : ti(t, e, ai(n))
            }),
            (Dn.updateWith = function (t, e, n, r) {
              return (r = typeof r === 'function' ? r : void 0), t == null ? t : ti(t, e, ai(n), r)
            }),
            (Dn.values = ks),
            (Dn.valuesIn = function (t) {
              return t == null ? [] : Oe(t, ws(t))
            }),
            (Dn.without = Yo),
            (Dn.words = Bs),
            (Dn.wrap = function (t, e) {
              return Sa(ai(e), t)
            }),
            (Dn.xor = Xo),
            (Dn.xorBy = Go),
            (Dn.xorWith = Jo),
            (Dn.zip = Zo),
            (Dn.zipObject = function (t, e) {
              return ii(t || [], e || [], Un)
            }),
            (Dn.zipObjectDeep = function (t, e) {
              return ii(t || [], e || [], qr)
            }),
            (Dn.zipWith = ta),
            (Dn.entries = As),
            (Dn.entriesIn = Ds),
            (Dn.extend = cs),
            (Dn.extendWith = ls),
            Xs(Dn, Dn),
            (Dn.add = au),
            (Dn.attempt = qs),
            (Dn.camelCase = Ns),
            (Dn.capitalize = Os),
            (Dn.ceil = su),
            (Dn.clamp = function (t, e, n) {
              return (
                void 0 === n && ((n = e), (e = void 0)),
                void 0 !== n && (n = (n = os(n)) == n ? n : 0),
                void 0 !== e && (e = (e = os(e)) == e ? e : 0),
                Yn(os(t), e, n)
              )
            }),
            (Dn.clone = function (t) {
              return Xn(t, 4)
            }),
            (Dn.cloneDeep = function (t) {
              return Xn(t, 5)
            }),
            (Dn.cloneDeepWith = function (t, e) {
              return Xn(t, 5, (e = typeof e === 'function' ? e : void 0))
            }),
            (Dn.cloneWith = function (t, e) {
              return Xn(t, 4, (e = typeof e === 'function' ? e : void 0))
            }),
            (Dn.conformsTo = function (t, e) {
              return e == null || Gn(t, e, bs(e))
            }),
            (Dn.deburr = js),
            (Dn.defaultTo = function (t, e) {
              return t == null || t != t ? e : t
            }),
            (Dn.divide = uu),
            (Dn.endsWith = function (t, e, n) {
              (t = ss(t)), (e = Gr(e))
              const r = t.length
              const i = (n = void 0 === n ? r : Yn(rs(n), 0, r))
              return (n -= e.length) >= 0 && t.slice(n, i) == e
            }),
            (Dn.eq = ka),
            (Dn.escape = function (t) {
              return (t = ss(t)) && W.test(t) ? t.replace(H, He) : t
            }),
            (Dn.escapeRegExp = function (t) {
              return (t = ss(t)) && K.test(t) ? t.replace(Q, '\\$&') : t
            }),
            (Dn.every = function (t, e, n) {
              const r = Ia(t) ? ce : nr
              return n && so(t, e, n) && (e = void 0), r(t, Xi(e, 3))
            }),
            (Dn.find = oa),
            (Dn.findIndex = jo),
            (Dn.findKey = function (t, e) {
              return _e(t, Xi(e, 3), ur)
            }),
            (Dn.findLast = aa),
            (Dn.findLastIndex = Io),
            (Dn.findLastKey = function (t, e) {
              return _e(t, Xi(e, 3), cr)
            }),
            (Dn.floor = cu),
            (Dn.forEach = sa),
            (Dn.forEachRight = ua),
            (Dn.forIn = function (t, e) {
              return t == null ? t : ar(t, Xi(e, 3), ws)
            }),
            (Dn.forInRight = function (t, e) {
              return t == null ? t : sr(t, Xi(e, 3), ws)
            }),
            (Dn.forOwn = function (t, e) {
              return t && ur(t, Xi(e, 3))
            }),
            (Dn.forOwnRight = function (t, e) {
              return t && cr(t, Xi(e, 3))
            }),
            (Dn.get = vs),
            (Dn.gt = Na),
            (Dn.gte = Oa),
            (Dn.has = function (t, e) {
              return t != null && ro(t, e, vr)
            }),
            (Dn.hasIn = gs),
            (Dn.head = Ro),
            (Dn.identity = Qs),
            (Dn.includes = function (t, e, n, r) {
              (t = Ra(t) ? t : ks(t)), (n = n && !r ? rs(n) : 0)
              const i = t.length
              return (
                n < 0 && (n = an(i + n, 0)),
                Xa(t) ? n <= i && t.indexOf(e, n) > -1 : !!i && we(t, e, n) > -1
              )
            }),
            (Dn.indexOf = function (t, e, n) {
              const r = t == null ? 0 : t.length
              if (!r) return -1
              let i = n == null ? 0 : rs(n)
              return i < 0 && (i = an(r + i, 0)), we(t, e, i)
            }),
            (Dn.inRange = function (t, e, n) {
              return (
                (e = ns(e)),
                void 0 === n ? ((n = e), (e = 0)) : (n = ns(n)),
                (function (t, e, n) {
                  return t >= sn(e, n) && t < an(e, n)
                }((t = os(t)), e, n))
              )
            }),
            (Dn.invoke = _s),
            (Dn.isArguments = ja),
            (Dn.isArray = Ia),
            (Dn.isArrayBuffer = La),
            (Dn.isArrayLike = Ra),
            (Dn.isArrayLikeObject = Pa),
            (Dn.isBoolean = function (t) {
              return !0 === t || !1 === t || ($a(t) && dr(t) == l)
            }),
            (Dn.isBuffer = Ha),
            (Dn.isDate = Ma),
            (Dn.isElement = function (t) {
              return $a(t) && t.nodeType === 1 && !Ka(t)
            }),
            (Dn.isEmpty = function (t) {
              if (t == null) return !0
              if (
                Ra(t)
                && (Ia(t)
                  || typeof t === 'string'
                  || typeof t.splice === 'function'
                  || Ha(t)
                  || Ja(t)
                  || ja(t))
              ) return !t.length
              const e = no(t)
              if (e == v || e == _) return !t.size
              if (fo(t)) return !Tr(t).length
              for (const n in t) if (Tt.call(t, n)) return !1
              return !0
            }),
            (Dn.isEqual = function (t, e) {
              return br(t, e)
            }),
            (Dn.isEqualWith = function (t, e, n) {
              const r = (n = typeof n === 'function' ? n : void 0) ? n(t, e) : void 0
              return void 0 === r ? br(t, e, void 0, n) : !!r
            }),
            (Dn.isError = Wa),
            (Dn.isFinite = function (t) {
              return typeof t === 'number' && nn(t)
            }),
            (Dn.isFunction = Ba),
            (Dn.isInteger = qa),
            (Dn.isLength = Fa),
            (Dn.isMap = za),
            (Dn.isMatch = function (t, e) {
              return t === e || wr(t, e, Ji(e))
            }),
            (Dn.isMatchWith = function (t, e, n) {
              return (n = typeof n === 'function' ? n : void 0), wr(t, e, Ji(e), n)
            }),
            (Dn.isNaN = function (t) {
              return Qa(t) && t != +t
            }),
            (Dn.isNative = function (t) {
              if (lo(t)) throw new pt('Unsupported core-js use. Try https://npms.io/search?q=ponyfill.')
              return xr(t)
            }),
            (Dn.isNil = function (t) {
              return t == null
            }),
            (Dn.isNull = function (t) {
              return t === null
            }),
            (Dn.isNumber = Qa),
            (Dn.isObject = Ua),
            (Dn.isObjectLike = $a),
            (Dn.isPlainObject = Ka),
            (Dn.isRegExp = Va),
            (Dn.isSafeInteger = function (t) {
              return qa(t) && t >= -9007199254740991 && t <= 9007199254740991
            }),
            (Dn.isSet = Ya),
            (Dn.isString = Xa),
            (Dn.isSymbol = Ga),
            (Dn.isTypedArray = Ja),
            (Dn.isUndefined = function (t) {
              return void 0 === t
            }),
            (Dn.isWeakMap = function (t) {
              return $a(t) && no(t) == x
            }),
            (Dn.isWeakSet = function (t) {
              return $a(t) && dr(t) == '[object WeakSet]'
            }),
            (Dn.join = function (t, e) {
              return t == null ? '' : rn.call(t, e)
            }),
            (Dn.kebabCase = Is),
            (Dn.last = Wo),
            (Dn.lastIndexOf = function (t, e, n) {
              const r = t == null ? 0 : t.length
              if (!r) return -1
              let i = r
              return (
                void 0 !== n && (i = (i = rs(n)) < 0 ? an(r + i, 0) : sn(i, r - 1)),
                e == e
                  ? (function (t, e, n) {
                    for (var r = n + 1; r--;) if (t[r] === e) return r
                    return r
                  }(t, e, i))
                  : be(t, Ee, i, !0)
              )
            }),
            (Dn.lowerCase = Ls),
            (Dn.lowerFirst = Rs),
            (Dn.lt = Za),
            (Dn.lte = ts),
            (Dn.max = function (t) {
              return t && t.length ? rr(t, Qs, hr) : void 0
            }),
            (Dn.maxBy = function (t, e) {
              return t && t.length ? rr(t, Xi(e, 2), hr) : void 0
            }),
            (Dn.mean = function (t) {
              return Te(t, Qs)
            }),
            (Dn.meanBy = function (t, e) {
              return Te(t, Xi(e, 2))
            }),
            (Dn.min = function (t) {
              return t && t.length ? rr(t, Qs, Sr) : void 0
            }),
            (Dn.minBy = function (t, e) {
              return t && t.length ? rr(t, Xi(e, 2), Sr) : void 0
            }),
            (Dn.stubArray = iu),
            (Dn.stubFalse = ou),
            (Dn.stubObject = function () {
              return {}
            }),
            (Dn.stubString = function () {
              return ''
            }),
            (Dn.stubTrue = function () {
              return !0
            }),
            (Dn.multiply = fu),
            (Dn.nth = function (t, e) {
              return t && t.length ? Or(t, rs(e)) : void 0
            }),
            (Dn.noConflict = function () {
              return Kt._ === this && (Kt._ = kt), this
            }),
            (Dn.noop = Gs),
            (Dn.now = va),
            (Dn.pad = function (t, e, n) {
              t = ss(t)
              const r = (e = rs(e)) ? ze(t) : 0
              if (!e || r >= e) return t
              const i = (e - r) / 2
              return ji(Ze(i), n) + t + ji(Je(i), n)
            }),
            (Dn.padEnd = function (t, e, n) {
              t = ss(t)
              const r = (e = rs(e)) ? ze(t) : 0
              return e && r < e ? t + ji(e - r, n) : t
            }),
            (Dn.padStart = function (t, e, n) {
              t = ss(t)
              const r = (e = rs(e)) ? ze(t) : 0
              return e && r < e ? ji(e - r, n) + t : t
            }),
            (Dn.parseInt = function (t, e, n) {
              return n || e == null ? (e = 0) : e && (e = +e), cn(ss(t).replace(Y, ''), e || 0)
            }),
            (Dn.random = function (t, e, n) {
              if (
                (n && typeof n !== 'boolean' && so(t, e, n) && (e = n = void 0),
                void 0 === n
                  && (typeof e === 'boolean'
                    ? ((n = e), (e = void 0))
                    : typeof t === 'boolean' && ((n = t), (t = void 0))),
                void 0 === t && void 0 === e
                  ? ((t = 0), (e = 1))
                  : ((t = ns(t)), void 0 === e ? ((e = t), (t = 0)) : (e = ns(e))),
                t > e)
              ) {
                const r = t;
                (t = e), (e = r)
              }
              if (n || t % 1 || e % 1) {
                const i = ln()
                return sn(t + i * (e - t + Ut(`1e-${(`${i}`).length - 1}`)), e)
              }
              return Pr(t, e)
            }),
            (Dn.reduce = function (t, e, n) {
              const r = Ia(t) ? ve : Ae
              const i = arguments.length < 3
              return r(t, Xi(e, 4), n, i, tr)
            }),
            (Dn.reduceRight = function (t, e, n) {
              const r = Ia(t) ? ge : Ae
              const i = arguments.length < 3
              return r(t, Xi(e, 4), n, i, er)
            }),
            (Dn.repeat = function (t, e, n) {
              return (e = (n ? so(t, e, n) : void 0 === e) ? 1 : rs(e)), Hr(ss(t), e)
            }),
            (Dn.replace = function () {
              const t = arguments
              const e = ss(t[0])
              return t.length < 3 ? e : e.replace(t[1], t[2])
            }),
            (Dn.result = function (t, e, n) {
              let r = -1
              let i = (e = si(e, t)).length
              for (i || ((i = 1), (t = void 0)); ++r < i;) {
                let o = t == null ? void 0 : t[So(e[r])]
                void 0 === o && ((r = i), (o = n)), (t = Ba(o) ? o.call(t) : o)
              }
              return t
            }),
            (Dn.round = pu),
            (Dn.runInContext = t),
            (Dn.sample = function (t) {
              return (Ia(t) ? Wn : Wr)(t)
            }),
            (Dn.size = function (t) {
              if (t == null) return 0
              if (Ra(t)) return Xa(t) ? ze(t) : t.length
              const e = no(t)
              return e == v || e == _ ? t.size : Tr(t).length
            }),
            (Dn.snakeCase = Ps),
            (Dn.some = function (t, e, n) {
              const r = Ia(t) ? me : Qr
              return n && so(t, e, n) && (e = void 0), r(t, Xi(e, 3))
            }),
            (Dn.sortedIndex = function (t, e) {
              return Kr(t, e)
            }),
            (Dn.sortedIndexBy = function (t, e, n) {
              return Vr(t, e, Xi(n, 2))
            }),
            (Dn.sortedIndexOf = function (t, e) {
              const n = t == null ? 0 : t.length
              if (n) {
                const r = Kr(t, e)
                if (r < n && ka(t[r], e)) return r
              }
              return -1
            }),
            (Dn.sortedLastIndex = function (t, e) {
              return Kr(t, e, !0)
            }),
            (Dn.sortedLastIndexBy = function (t, e, n) {
              return Vr(t, e, Xi(n, 2), !0)
            }),
            (Dn.sortedLastIndexOf = function (t, e) {
              if (t == null ? 0 : t.length) {
                const n = Kr(t, e, !0) - 1
                if (ka(t[n], e)) return n
              }
              return -1
            }),
            (Dn.startCase = Hs),
            (Dn.startsWith = function (t, e, n) {
              return (
                (t = ss(t)),
                (n = n == null ? 0 : Yn(rs(n), 0, t.length)),
                (e = Gr(e)),
                t.slice(n, n + e.length) == e
              )
            }),
            (Dn.subtract = du),
            (Dn.sum = function (t) {
              return t && t.length ? De(t, Qs) : 0
            }),
            (Dn.sumBy = function (t, e) {
              return t && t.length ? De(t, Xi(e, 2)) : 0
            }),
            (Dn.template = function (t, e, n) {
              const r = Dn.templateSettings
              n && so(t, e, n) && (e = void 0), (t = ss(t)), (e = ls({}, e, r, Bi))
              let i
              let o
              const a = ls({}, e.imports, r.imports, Bi)
              const s = bs(a)
              const u = Oe(a, s)
              let c = 0
              const l = e.interpolate || lt
              let f = "__p += '"
              const p = gt(
                `${(e.escape || lt).source
                }|${
                  l.source
                }|${
                  (l === F ? nt : lt).source
                }|${
                  (e.evaluate || lt).source
                }|$`,
                'g',
              )
              const d = `//# sourceURL=${
                Tt.call(e, 'sourceURL')
                  ? (`${e.sourceURL}`).replace(/[\r\n]/g, ' ')
                  : `lodash.templateSources[${++Wt}]`
              }\n`
              t.replace(p, (e, n, r, a, s, u) => ((
                r || (r = a),
                (f += t.slice(c, u).replace(ft, Me)),
                n && ((i = !0), (f += `' +\n__e(${n}) +\n'`)),
                s && ((o = !0), (f += `';\n${s};\n__p += '`)),
                r && (f += `' +\n((__t = (${r})) == null ? '' : __t) +\n'`),
                (c = u + e.length),
                e
              ))),
              (f += "';\n")
              const h = Tt.call(e, 'variable') && e.variable
              h || (f = `with (obj) {\n${f}\n}\n`),
              (f = (o ? f.replace(I, '') : f).replace(L, '$1').replace(R, '$1;')),
              (f = `function(${
                h || 'obj'
              }) {\n${
                h ? '' : 'obj || (obj = {});\n'
              }var __t, __p = ''${
                i ? ', __e = _.escape' : ''
              }${o
                ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                : ';\n'
              }${f
              }return __p\n}`)
              const v = qs(() => dt(s, `${d}return ${f}`).apply(void 0, u))
              if (((v.source = f), Wa(v))) throw v
              return v
            }),
            (Dn.times = function (t, e) {
              if ((t = rs(t)) < 1 || t > 9007199254740991) return []
              let n = 4294967295
              const r = sn(t, 4294967295)
              t -= 4294967295
              for (var i = ke(r, (e = Xi(e))); ++n < t;) e(n)
              return i
            }),
            (Dn.toFinite = ns),
            (Dn.toInteger = rs),
            (Dn.toLength = is),
            (Dn.toLower = function (t) {
              return ss(t).toLowerCase()
            }),
            (Dn.toNumber = os),
            (Dn.toSafeInteger = function (t) {
              return t ? Yn(rs(t), -9007199254740991, 9007199254740991) : t === 0 ? t : 0
            }),
            (Dn.toString = ss),
            (Dn.toUpper = function (t) {
              return ss(t).toUpperCase()
            }),
            (Dn.trim = function (t, e, n) {
              if ((t = ss(t)) && (n || void 0 === e)) return t.replace(V, '')
              if (!t || !(e = Gr(e))) return t
              const r = Qe(t)
              const i = Qe(e)
              return ci(r, Ie(r, i), Le(r, i) + 1).join('')
            }),
            (Dn.trimEnd = function (t, e, n) {
              if ((t = ss(t)) && (n || void 0 === e)) return t.replace(X, '')
              if (!t || !(e = Gr(e))) return t
              const r = Qe(t)
              return ci(r, 0, Le(r, Qe(e)) + 1).join('')
            }),
            (Dn.trimStart = function (t, e, n) {
              if ((t = ss(t)) && (n || void 0 === e)) return t.replace(Y, '')
              if (!t || !(e = Gr(e))) return t
              const r = Qe(t)
              return ci(r, Ie(r, Qe(e))).join('')
            }),
            (Dn.truncate = function (t, e) {
              let n = 30
              let r = '...'
              if (Ua(e)) {
                var i = 'separator' in e ? e.separator : i;
                (n = 'length' in e ? rs(e.length) : n), (r = 'omission' in e ? Gr(e.omission) : r)
              }
              let o = (t = ss(t)).length
              if (We(t)) {
                var a = Qe(t)
                o = a.length
              }
              if (n >= o) return t
              let s = n - ze(r)
              if (s < 1) return r
              let u = a ? ci(a, 0, s).join('') : t.slice(0, s)
              if (void 0 === i) return u + r
              if ((a && (s += u.length - s), Va(i))) {
                if (t.slice(s).search(i)) {
                  let c
                  const l = u
                  for (
                    i.global || (i = gt(i.source, `${ss(rt.exec(i))}g`)), i.lastIndex = 0;
                    (c = i.exec(l));

                  ) var f = c.index
                  u = u.slice(0, void 0 === f ? s : f)
                }
              } else if (t.indexOf(Gr(i), s) != s) {
                const p = u.lastIndexOf(i)
                p > -1 && (u = u.slice(0, p))
              }
              return u + r
            }),
            (Dn.unescape = function (t) {
              return (t = ss(t)) && M.test(t) ? t.replace(P, Ke) : t
            }),
            (Dn.uniqueId = function (t) {
              const e = ++Ct
              return ss(t) + e
            }),
            (Dn.upperCase = Ms),
            (Dn.upperFirst = Ws),
            (Dn.each = sa),
            (Dn.eachRight = ua),
            (Dn.first = Ro),
            Xs(
              Dn,
              ((lu = {}),
              ur(Dn, (t, e) => {
                Tt.call(Dn.prototype, e) || (lu[e] = t)
              }),
              lu),
              { chain: !1 },
            ),
            (Dn.VERSION = '4.17.15'),
            se(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], (t) => {
              Dn[t].placeholder = Dn
            }),
            se(['drop', 'take'], (t, e) => {
              (jn.prototype[t] = function (n) {
                n = void 0 === n ? 1 : an(rs(n), 0)
                const r = this.__filtered__ && !e ? new jn(this) : this.clone()
                return (
                  r.__filtered__
                    ? (r.__takeCount__ = sn(n, r.__takeCount__))
                    : r.__views__.push({
                      size: sn(n, 4294967295),
                      type: t + (r.__dir__ < 0 ? 'Right' : ''),
                    }),
                  r
                )
              }),
              (jn.prototype[`${t}Right`] = function (e) {
                return this.reverse()[t](e).reverse()
              })
            }),
            se(['filter', 'map', 'takeWhile'], (t, e) => {
              const n = e + 1
              const r = n == 1 || n == 3
              jn.prototype[t] = function (t) {
                const e = this.clone()
                return (
                  e.__iteratees__.push({ iteratee: Xi(t, 3), type: n }),
                  (e.__filtered__ = e.__filtered__ || r),
                  e
                )
              }
            }),
            se(['head', 'last'], (t, e) => {
              const n = `take${e ? 'Right' : ''}`
              jn.prototype[t] = function () {
                return this[n](1).value()[0]
              }
            }),
            se(['initial', 'tail'], (t, e) => {
              const n = `drop${e ? '' : 'Right'}`
              jn.prototype[t] = function () {
                return this.__filtered__ ? new jn(this) : this[n](1)
              }
            }),
            (jn.prototype.compact = function () {
              return this.filter(Qs)
            }),
            (jn.prototype.find = function (t) {
              return this.filter(t).head()
            }),
            (jn.prototype.findLast = function (t) {
              return this.reverse().find(t)
            }),
            (jn.prototype.invokeMap = Mr(function (t, e) {
              return typeof t === 'function'
                ? new jn(this)
                : this.map((n) => yr(n, t, e))
            })),
            (jn.prototype.reject = function (t) {
              return this.filter(Ta(Xi(t)))
            }),
            (jn.prototype.slice = function (t, e) {
              t = rs(t)
              let n = this
              return n.__filtered__ && (t > 0 || e < 0)
                ? new jn(n)
                : (t < 0 ? (n = n.takeRight(-t)) : t && (n = n.drop(t)),
                void 0 !== e && (n = (e = rs(e)) < 0 ? n.dropRight(-e) : n.take(e - t)),
                n)
            }),
            (jn.prototype.takeRightWhile = function (t) {
              return this.reverse().takeWhile(t).reverse()
            }),
            (jn.prototype.toArray = function () {
              return this.take(4294967295)
            }),
            ur(jn.prototype, (t, e) => {
              const n = /^(?:filter|find|map|reject)|While$/.test(e)
              const r = /^(?:head|last)$/.test(e)
              const i = Dn[r ? `take${e == 'last' ? 'Right' : ''}` : e]
              const o = r || /^find/.test(e)
              i
                && (Dn.prototype[e] = function () {
                  let e = this.__wrapped__
                  const a = r ? [1] : arguments
                  let s = e instanceof jn
                  const u = a[0]
                  let c = s || Ia(e)
                  const l = function (t) {
                    const e = i.apply(Dn, he([t], a))
                    return r && f ? e[0] : e
                  }
                  c && n && typeof u === 'function' && u.length != 1 && (s = c = !1)
                  var f = this.__chain__
                  const p = !!this.__actions__.length
                  const d = o && !f
                  const h = s && !p
                  if (!o && c) {
                    e = h ? e : new jn(this)
                    var v = t.apply(e, a)
                    return (
                      v.__actions__.push({ func: na, args: [l], thisArg: void 0 }), new On(v, f)
                    )
                  }
                  return d && h
                    ? t.apply(this, a)
                    : ((v = this.thru(l)), d ? (r ? v.value()[0] : v.value()) : v)
                })
            }),
            se(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], (t) => {
              const e = _t[t]
              const n = /^(?:push|sort|unshift)$/.test(t) ? 'tap' : 'thru'
              const r = /^(?:pop|shift)$/.test(t)
              Dn.prototype[t] = function () {
                const t = arguments
                if (r && !this.__chain__) {
                  const i = this.value()
                  return e.apply(Ia(i) ? i : [], t)
                }
                return this[n]((n) => e.apply(Ia(n) ? n : [], t))
              }
            }),
            ur(jn.prototype, (t, e) => {
              const n = Dn[e]
              if (n) {
                const r = `${n.name}`
                Tt.call(_n, r) || (_n[r] = []), _n[r].push({ name: e, func: n })
              }
            }),
            (_n[Di(void 0, 2).name] = [{ name: 'wrapper', func: void 0 }]),
            (jn.prototype.clone = function () {
              const t = new jn(this.__wrapped__)
              return (
                (t.__actions__ = mi(this.__actions__)),
                (t.__dir__ = this.__dir__),
                (t.__filtered__ = this.__filtered__),
                (t.__iteratees__ = mi(this.__iteratees__)),
                (t.__takeCount__ = this.__takeCount__),
                (t.__views__ = mi(this.__views__)),
                t
              )
            }),
            (jn.prototype.reverse = function () {
              if (this.__filtered__) {
                var t = new jn(this);
                (t.__dir__ = -1), (t.__filtered__ = !0)
              } else (t = this.clone()).__dir__ *= -1
              return t
            }),
            (jn.prototype.value = function () {
              const t = this.__wrapped__.value()
              const e = this.__dir__
              const n = Ia(t)
              const r = e < 0
              const i = n ? t.length : 0
              const o = (function (t, e, n) {
                let r = -1
                const i = n.length
                for (; ++r < i;) {
                  const o = n[r]
                  const a = o.size
                  switch (o.type) {
                    case 'drop':
                      t += a
                      break
                    case 'dropRight':
                      e -= a
                      break
                    case 'take':
                      e = sn(e, t + a)
                      break
                    case 'takeRight':
                      t = an(t, e - a)
                  }
                }
                return { start: t, end: e }
              }(0, i, this.__views__))
              const a = o.start
              const s = o.end
              let u = s - a
              let c = r ? s : a - 1
              const l = this.__iteratees__
              const f = l.length
              let p = 0
              const d = sn(u, this.__takeCount__)
              if (!n || (!r && i == u && d == u)) return ni(t, this.__actions__)
              const h = []
              t: for (; u-- && p < d;) {
                for (var v = -1, g = t[(c += e)]; ++v < f;) {
                  const m = l[v]
                  const y = m.iteratee
                  const _ = m.type
                  const b = y(g)
                  if (_ == 2) g = b
                  else if (!b) {
                    if (_ == 1) continue t
                    break t
                  }
                }
                h[p++] = g
              }
              return h
            }),
            (Dn.prototype.at = ra),
            (Dn.prototype.chain = function () {
              return ea(this)
            }),
            (Dn.prototype.commit = function () {
              return new On(this.value(), this.__chain__)
            }),
            (Dn.prototype.next = function () {
              void 0 === this.__values__ && (this.__values__ = es(this.value()))
              const t = this.__index__ >= this.__values__.length
              return { done: t, value: t ? void 0 : this.__values__[this.__index__++] }
            }),
            (Dn.prototype.plant = function (t) {
              for (var e, n = this; n instanceof Nn;) {
                const r = Do(n);
                (r.__index__ = 0), (r.__values__ = void 0), e ? (i.__wrapped__ = r) : (e = r)
                var i = r
                n = n.__wrapped__
              }
              return (i.__wrapped__ = t), e
            }),
            (Dn.prototype.reverse = function () {
              const t = this.__wrapped__
              if (t instanceof jn) {
                let e = t
                return (
                  this.__actions__.length && (e = new jn(this)),
                  (e = e.reverse()).__actions__.push({ func: na, args: [Uo], thisArg: void 0 }),
                  new On(e, this.__chain__)
                )
              }
              return this.thru(Uo)
            }),
            (Dn.prototype.toJSON = Dn.prototype.valueOf = Dn.prototype.value = function () {
              return ni(this.__wrapped__, this.__actions__)
            }),
            (Dn.prototype.first = Dn.prototype.head),
            Jt
              && (Dn.prototype[Jt] = function () {
                return this
              }),
            Dn
          )
        }());
        (Kt._ = Ve),
        void 0
            === (i = function () {
              return Ve
            }.call(e, n, e, r)) || (r.exports = i)
      }.call(this))
    }.call(this, n(1), n(14)(t)))
  },
  function (t, e) {
    t.exports = function (t) {
      return (
        t.webpackPolyfill
          || ((t.deprecate = function () {}),
          (t.paths = []),
          t.children || (t.children = []),
          Object.defineProperty(t, 'loaded', {
            enumerable: !0,
            get() {
              return t.l
            },
          }),
          Object.defineProperty(t, 'id', {
            enumerable: !0,
            get() {
              return t.i
            },
          }),
          (t.webpackPolyfill = 1)),
        t
      )
    }
  },
  function (t, e, n) {
    n.r(e),
    function (t) {
      const n = typeof window !== 'undefined'
            && typeof document !== 'undefined'
            && typeof navigator !== 'undefined'
      const r = (function () {
        for (let t = ['Edge', 'Trident', 'Firefox'], e = 0; e < t.length; e += 1) if (n && navigator.userAgent.indexOf(t[e]) >= 0) return 1
        return 0
      }())
      const i = n && window.Promise
        ? function (t) {
          let e = !1
          return function () {
            e
                    || ((e = !0),
                    window.Promise.resolve().then(() => {
                      (e = !1), t()
                    }))
          }
        }
        : function (t) {
          let e = !1
          return function () {
            e
                    || ((e = !0),
                    setTimeout(() => {
                      (e = !1), t()
                    }, r))
          }
        }
      function o(t) {
        return t && {}.toString.call(t) === '[object Function]'
      }
      function a(t, e) {
        if (t.nodeType !== 1) return []
        const n = t.ownerDocument.defaultView.getComputedStyle(t, null)
        return e ? n[e] : n
      }
      function s(t) {
        return t.nodeName === 'HTML' ? t : t.parentNode || t.host
      }
      function u(t) {
        if (!t) return document.body
        switch (t.nodeName) {
          case 'HTML':
          case 'BODY':
            return t.ownerDocument.body
          case '#document':
            return t.body
        }
        const e = a(t)
        const n = e.overflow
        const r = e.overflowX
        const i = e.overflowY
        return /(auto|scroll|overlay)/.test(n + i + r) ? t : u(s(t))
      }
      function c(t) {
        return t && t.referenceNode ? t.referenceNode : t
      }
      const l = n && !(!window.MSInputMethodContext || !document.documentMode)
      const f = n && /MSIE 10/.test(navigator.userAgent)
      function p(t) {
        return t === 11 ? l : t === 10 ? f : l || f
      }
      function d(t) {
        if (!t) return document.documentElement
        for (
          var e = p(10) ? document.body : null, n = t.offsetParent || null;
          n === e && t.nextElementSibling;

        ) n = (t = t.nextElementSibling).offsetParent
        const r = n && n.nodeName
        return r && r !== 'BODY' && r !== 'HTML'
          ? ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) !== -1 && a(n, 'position') === 'static'
            ? d(n)
            : n
          : t
            ? t.ownerDocument.documentElement
            : document.documentElement
      }
      function h(t) {
        return t.parentNode !== null ? h(t.parentNode) : t
      }
      function v(t, e) {
        if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement
        const n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING
        const r = n ? t : e
        const i = n ? e : t
        const o = document.createRange()
        o.setStart(r, 0), o.setEnd(i, 0)
        let a
        let s
        const u = o.commonAncestorContainer
        if ((t !== u && e !== u) || r.contains(i)) {
          return (s = (a = u).nodeName) === 'BODY'
              || (s !== 'HTML' && d(a.firstElementChild) !== a)
            ? d(u)
            : u
        }
        const c = h(t)
        return c.host ? v(c.host, e) : v(t, h(e).host)
      }
      function g(t) {
        const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'top'
        const n = e === 'top' ? 'scrollTop' : 'scrollLeft'
        const r = t.nodeName
        if (r === 'BODY' || r === 'HTML') {
          const i = t.ownerDocument.documentElement
          const o = t.ownerDocument.scrollingElement || i
          return o[n]
        }
        return t[n]
      }
      function m(t, e) {
        const n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
        const r = g(e, 'top')
        const i = g(e, 'left')
        const o = n ? -1 : 1
        return (t.top += r * o), (t.bottom += r * o), (t.left += i * o), (t.right += i * o), t
      }
      function y(t, e) {
        const n = e === 'x' ? 'Left' : 'Top'
        const r = n === 'Left' ? 'Right' : 'Bottom'
        return parseFloat(t[`border${n}Width`]) + parseFloat(t[`border${r}Width`])
      }
      function _(t, e, n, r) {
        return Math.max(
          e[`offset${t}`],
          e[`scroll${t}`],
          n[`client${t}`],
          n[`offset${t}`],
          n[`scroll${t}`],
          p(10)
            ? parseInt(n[`offset${t}`])
                  + parseInt(r[`margin${t === 'Height' ? 'Top' : 'Left'}`])
                  + parseInt(r[`margin${t === 'Height' ? 'Bottom' : 'Right'}`])
            : 0,
        )
      }
      function b(t) {
        const e = t.body
        const n = t.documentElement
        const r = p(10) && getComputedStyle(n)
        return { height: _('Height', e, n, r), width: _('Width', e, n, r) }
      }
      const w = function (t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
      }
      const x = (function () {
        function t(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e
        }
      }())
      const E = function (t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
            : (t[e] = n),
          t
        )
      }
      const T = Object.assign
            || function (t) {
              for (let e = 1; e < arguments.length; e++) {
                const n = arguments[e]
                for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
              }
              return t
            }
      function C(t) {
        return { ...t, right: t.left + t.width, bottom: t.top + t.height }
      }
      function S(t) {
        let e = {}
        try {
          if (p(10)) {
            e = t.getBoundingClientRect()
            const n = g(t, 'top')
            const r = g(t, 'left');
            (e.top += n), (e.left += r), (e.bottom += n), (e.right += r)
          } else e = t.getBoundingClientRect()
        } catch (t) {}
        const i = {
          left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top,
        }
        const o = t.nodeName === 'HTML' ? b(t.ownerDocument) : {}
        const s = o.width || t.clientWidth || i.width
        const u = o.height || t.clientHeight || i.height
        let c = t.offsetWidth - s
        let l = t.offsetHeight - u
        if (c || l) {
          const f = a(t);
          (c -= y(f, 'x')), (l -= y(f, 'y')), (i.width -= c), (i.height -= l)
        }
        return C(i)
      }
      function A(t, e) {
        const n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
        const r = p(10)
        const i = e.nodeName === 'HTML'
        const o = S(t)
        const s = S(e)
        const c = u(t)
        const l = a(e)
        const f = parseFloat(l.borderTopWidth)
        const d = parseFloat(l.borderLeftWidth)
        n && i && ((s.top = Math.max(s.top, 0)), (s.left = Math.max(s.left, 0)))
        let h = C({
          top: o.top - s.top - f,
          left: o.left - s.left - d,
          width: o.width,
          height: o.height,
        })
        if (((h.marginTop = 0), (h.marginLeft = 0), !r && i)) {
          const v = parseFloat(l.marginTop)
          const g = parseFloat(l.marginLeft);
          (h.top -= f - v),
          (h.bottom -= f - v),
          (h.left -= d - g),
          (h.right -= d - g),
          (h.marginTop = v),
          (h.marginLeft = g)
        }
        return (r && !n ? e.contains(c) : e === c && c.nodeName !== 'BODY') && (h = m(h, e)), h
      }
      function D(t) {
        const e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
        const n = t.ownerDocument.documentElement
        const r = A(t, n)
        const i = Math.max(n.clientWidth, window.innerWidth || 0)
        const o = Math.max(n.clientHeight, window.innerHeight || 0)
        const a = e ? 0 : g(n)
        const s = e ? 0 : g(n, 'left')
        const u = {
          top: a - r.top + r.marginTop,
          left: s - r.left + r.marginLeft,
          width: i,
          height: o,
        }
        return C(u)
      }
      function k(t) {
        const e = t.nodeName
        if (e === 'BODY' || e === 'HTML') return !1
        if (a(t, 'position') === 'fixed') return !0
        const n = s(t)
        return !!n && k(n)
      }
      function N(t) {
        if (!t || !t.parentElement || p()) return document.documentElement
        for (var e = t.parentElement; e && a(e, 'transform') === 'none';) e = e.parentElement
        return e || document.documentElement
      }
      function O(t, e, n, r) {
        const i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
        let o = { top: 0, left: 0 }
        const a = i ? N(t) : v(t, c(e))
        if (r === 'viewport') o = D(a, i)
        else {
          let l = void 0
          r === 'scrollParent'
            ? (l = u(s(e))).nodeName === 'BODY' && (l = t.ownerDocument.documentElement)
            : (l = r === 'window' ? t.ownerDocument.documentElement : r)
          const f = A(l, a, i)
          if (l.nodeName !== 'HTML' || k(a)) o = f
          else {
            const p = b(t.ownerDocument)
            const d = p.height
            const h = p.width;
            (o.top += f.top - f.marginTop),
            (o.bottom = d + f.top),
            (o.left += f.left - f.marginLeft),
            (o.right = h + f.left)
          }
        }
        const g = typeof (n = n || 0) === 'number'
        return (
          (o.left += g ? n : n.left || 0),
          (o.top += g ? n : n.top || 0),
          (o.right -= g ? n : n.right || 0),
          (o.bottom -= g ? n : n.bottom || 0),
          o
        )
      }
      function j(t) {
        return t.width * t.height
      }
      function I(t, e, n, r, i) {
        const o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0
        if (t.indexOf('auto') === -1) return t
        const a = O(n, r, o, i)
        const s = {
          top: { width: a.width, height: e.top - a.top },
          right: { width: a.right - e.right, height: a.height },
          bottom: { width: a.width, height: a.bottom - e.bottom },
          left: { width: e.left - a.left, height: a.height },
        }
        const u = Object.keys(s)
          .map((t) => ({ key: t, ...s[t], area: j(s[t]) }))
          .sort((t, e) => e.area - t.area)
        const c = u.filter((t) => {
          const e = t.width
          const r = t.height
          return e >= n.clientWidth && r >= n.clientHeight
        })
        const l = c.length > 0 ? c[0].key : u[0].key
        const f = t.split('-')[1]
        return l + (f ? `-${f}` : '')
      }
      function L(t, e, n) {
        const r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
        const i = r ? N(e) : v(e, c(n))
        return A(n, i, r)
      }
      function R(t) {
        const e = t.ownerDocument.defaultView.getComputedStyle(t)
        const n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0)
        const r = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0)
        return { width: t.offsetWidth + r, height: t.offsetHeight + n }
      }
      function P(t) {
        const e = {
          left: 'right', right: 'left', bottom: 'top', top: 'bottom',
        }
        return t.replace(/left|right|bottom|top/g, (t) => e[t])
      }
      function H(t, e, n) {
        n = n.split('-')[0]
        const r = R(t)
        const i = { width: r.width, height: r.height }
        const o = ['right', 'left'].indexOf(n) !== -1
        const a = o ? 'top' : 'left'
        const s = o ? 'left' : 'top'
        const u = o ? 'height' : 'width'
        const c = o ? 'width' : 'height'
        return (i[a] = e[a] + e[u] / 2 - r[u] / 2), (i[s] = n === s ? e[s] - r[c] : e[P(s)]), i
      }
      function M(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0]
      }
      function W(t, e, n) {
        return (
          (void 0 === n
            ? t
            : t.slice(
              0,
              (function (t, e, n) {
                if (Array.prototype.findIndex) { return t.findIndex((t) => t[e] === n) }
                const r = M(t, (t) => t[e] === n)
                return t.indexOf(r)
              }(t, 'name', n)),
            )
          ).forEach((t) => {
            t.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!')
            const n = t.function || t.fn
            t.enabled
                && o(n)
                && ((e.offsets.popper = C(e.offsets.popper)),
                (e.offsets.reference = C(e.offsets.reference)),
                (e = n(e, t)))
          }),
          e
        )
      }
      function B() {
        if (!this.state.isDestroyed) {
          let t = {
            instance: this,
            styles: {},
            arrowStyles: {},
            attributes: {},
            flipped: !1,
            offsets: {},
          };
          (t.offsets.reference = L(
            this.state,
            this.popper,
            this.reference,
            this.options.positionFixed,
          )),
          (t.placement = I(
            this.options.placement,
            t.offsets.reference,
            this.popper,
            this.reference,
            this.options.modifiers.flip.boundariesElement,
            this.options.modifiers.flip.padding,
          )),
          (t.originalPlacement = t.placement),
          (t.positionFixed = this.options.positionFixed),
          (t.offsets.popper = H(this.popper, t.offsets.reference, t.placement)),
          (t.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'),
          (t = W(this.modifiers, t)),
          this.state.isCreated
            ? this.options.onUpdate(t)
            : ((this.state.isCreated = !0), this.options.onCreate(t))
        }
      }
      function q(t, e) {
        return t.some((t) => {
          const n = t.name
          return t.enabled && n === e
        })
      }
      function F(t) {
        for (
          let e = [!1, 'ms', 'Webkit', 'Moz', 'O'],
            n = t.charAt(0).toUpperCase() + t.slice(1),
            r = 0;
          r < e.length;
          r++
        ) {
          const i = e[r]
          const o = i ? `${i}${n}` : t
          if (void 0 !== document.body.style[o]) return o
        }
        return null
      }
      function U() {
        return (
          (this.state.isDestroyed = !0),
          q(this.modifiers, 'applyStyle')
              && (this.popper.removeAttribute('x-placement'),
              (this.popper.style.position = ''),
              (this.popper.style.top = ''),
              (this.popper.style.left = ''),
              (this.popper.style.right = ''),
              (this.popper.style.bottom = ''),
              (this.popper.style.willChange = ''),
              (this.popper.style[F('transform')] = '')),
          this.disableEventListeners(),
          this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
          this
        )
      }
      function $(t) {
        const e = t.ownerDocument
        return e ? e.defaultView : window
      }
      function z(t, e, n, r) {
        (n.updateBound = r), $(t).addEventListener('resize', n.updateBound, { passive: !0 })
        const i = u(t)
        return (
          (function t(e, n, r, i) {
            const o = e.nodeName === 'BODY'
            const a = o ? e.ownerDocument.defaultView : e
            a.addEventListener(n, r, { passive: !0 }), o || t(u(a.parentNode), n, r, i), i.push(a)
          }(i, 'scroll', n.updateBound, n.scrollParents)),
          (n.scrollElement = i),
          (n.eventsEnabled = !0),
          n
        )
      }
      function Q() {
        this.state.eventsEnabled
            || (this.state = z(this.reference, this.options, this.state, this.scheduleUpdate))
      }
      function K() {
        let t; let
          e
        this.state.eventsEnabled
            && (cancelAnimationFrame(this.scheduleUpdate),
            (this.state = ((t = this.reference),
            (e = this.state),
            $(t).removeEventListener('resize', e.updateBound),
            e.scrollParents.forEach((t) => {
              t.removeEventListener('scroll', e.updateBound)
            }),
            (e.updateBound = null),
            (e.scrollParents = []),
            (e.scrollElement = null),
            (e.eventsEnabled = !1),
            e)))
      }
      function V(t) {
        return t !== '' && !isNaN(parseFloat(t)) && isFinite(t)
      }
      function Y(t, e) {
        Object.keys(e).forEach((n) => {
          let r = '';
          ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(n) !== -1
              && V(e[n])
              && (r = 'px'),
          (t.style[n] = e[n] + r)
        })
      }
      const X = n && /Firefox/i.test(navigator.userAgent)
      function G(t, e, n) {
        const r = M(t, (t) => t.name === e)
        const i = !!r
              && t.some((t) => t.name === n && t.enabled && t.order < r.order)
        if (!i) {
          const o = `\`${e}\``
          const a = `\`${n}\``
          console.warn(
            `${a
            } modifier is required by ${
              o
            } modifier in order to work, be sure to include it before ${
              o
            }!`,
          )
        }
        return i
      }
      const J = [
        'auto-start',
        'auto',
        'auto-end',
        'top-start',
        'top',
        'top-end',
        'right-start',
        'right',
        'right-end',
        'bottom-end',
        'bottom',
        'bottom-start',
        'left-end',
        'left',
        'left-start',
      ]
      const Z = J.slice(3)
      function tt(t) {
        const e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
        const n = Z.indexOf(t)
        const r = Z.slice(n + 1).concat(Z.slice(0, n))
        return e ? r.reverse() : r
      }
      const et = 'flip'
      const nt = 'clockwise'
      const rt = 'counterclockwise'
      function it(t, e, n, r) {
        const i = [0, 0]
        const o = ['right', 'left'].indexOf(r) !== -1
        const a = t.split(/(\+|\-)/).map((t) => t.trim())
        const s = a.indexOf(
          M(a, (t) => t.search(/,|\s/) !== -1),
        )
        a[s]
            && a[s].indexOf(',') === -1
            && console.warn(
              'Offsets separated by white space(s) are deprecated, use a comma (,) instead.',
            )
        const u = /\s*,\s*|\s+/
        let c = s !== -1
          ? [
            a.slice(0, s).concat([a[s].split(u)[0]]),
            [a[s].split(u)[1]].concat(a.slice(s + 1)),
          ]
          : [a]
        return (
          (c = c.map((t, r) => {
            const i = (r === 1 ? !o : o) ? 'height' : 'width'
            let a = !1
            return t
              .reduce((t, e) => (t[t.length - 1] === '' && ['+', '-'].indexOf(e) !== -1
                ? ((t[t.length - 1] = e), (a = !0), t)
                : a
                  ? ((t[t.length - 1] += e), (a = !1), t)
                  : t.concat(e)), [])
              .map((t) => (function (t, e, n, r) {
                const i = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
                const o = +i[1]
                const a = i[2]
                if (!o) return t
                if (a.indexOf('%') === 0) {
                  let s = void 0
                  switch (a) {
                    case '%p':
                      s = n
                      break
                    case '%':
                    case '%r':
                    default:
                      s = r
                  }
                  return (C(s)[e] / 100) * o
                }
                if (a === 'vh' || a === 'vw') {
                  return (
                    ((a === 'vh'
                      ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
                      : Math.max(
                        document.documentElement.clientWidth,
                        window.innerWidth || 0,
                      ))
                          / 100)
                        * o
                  )
                }
                return o
              }(t, i, e, n)))
          })).forEach((t, e) => {
            t.forEach((n, r) => {
              V(n) && (i[e] += n * (t[r - 1] === '-' ? -1 : 1))
            })
          }),
          i
        )
      }
      const ot = {
        placement: 'bottom',
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate() {},
        onUpdate() {},
        modifiers: {
          shift: {
            order: 100,
            enabled: !0,
            fn(t) {
              const e = t.placement
              const n = e.split('-')[0]
              const r = e.split('-')[1]
              if (r) {
                const i = t.offsets
                const o = i.reference
                const a = i.popper
                const s = ['bottom', 'top'].indexOf(n) !== -1
                const u = s ? 'left' : 'top'
                const c = s ? 'width' : 'height'
                const l = { start: E({}, u, o[u]), end: E({}, u, o[u] + o[c] - a[c]) }
                t.offsets.popper = { ...a, ...l[r] }
              }
              return t
            },
          },
          offset: {
            order: 200,
            enabled: !0,
            fn(t, e) {
              const n = e.offset
              const r = t.placement
              const i = t.offsets
              const o = i.popper
              const a = i.reference
              const s = r.split('-')[0]
              let u = void 0
              return (
                (u = V(+n) ? [+n, 0] : it(n, o, a, s)),
                s === 'left'
                  ? ((o.top += u[0]), (o.left -= u[1]))
                  : s === 'right'
                    ? ((o.top += u[0]), (o.left += u[1]))
                    : s === 'top'
                      ? ((o.left += u[0]), (o.top -= u[1]))
                      : s === 'bottom' && ((o.left += u[0]), (o.top += u[1])),
                (t.popper = o),
                t
              )
            },
            offset: 0,
          },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn(t, e) {
              let n = e.boundariesElement || d(t.instance.popper)
              t.instance.reference === n && (n = d(n))
              const r = F('transform')
              const i = t.instance.popper.style
              const o = i.top
              const a = i.left
              const s = i[r];
              (i.top = ''), (i.left = ''), (i[r] = '')
              const u = O(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
              (i.top = o), (i.left = a), (i[r] = s), (e.boundaries = u)
              const c = e.priority
              let l = t.offsets.popper
              const f = {
                primary(t) {
                  let n = l[t]
                  return (
                    l[t] < u[t] && !e.escapeWithReference && (n = Math.max(l[t], u[t])),
                    E({}, t, n)
                  )
                },
                secondary(t) {
                  const n = t === 'right' ? 'left' : 'top'
                  let r = l[n]
                  return (
                    l[t] > u[t]
                            && !e.escapeWithReference
                            && (r = Math.min(l[n], u[t] - (t === 'right' ? l.width : l.height))),
                    E({}, n, r)
                  )
                },
              }
              return (
                c.forEach((t) => {
                  const e = ['left', 'top'].indexOf(t) !== -1 ? 'primary' : 'secondary'
                  l = { ...l, ...f[e](t) }
                }),
                (t.offsets.popper = l),
                t
              )
            },
            priority: ['left', 'right', 'top', 'bottom'],
            padding: 5,
            boundariesElement: 'scrollParent',
          },
          keepTogether: {
            order: 400,
            enabled: !0,
            fn(t) {
              const e = t.offsets
              const n = e.popper
              const r = e.reference
              const i = t.placement.split('-')[0]
              const o = Math.floor
              const a = ['top', 'bottom'].indexOf(i) !== -1
              const s = a ? 'right' : 'bottom'
              const u = a ? 'left' : 'top'
              const c = a ? 'width' : 'height'
              return (
                n[s] < o(r[u]) && (t.offsets.popper[u] = o(r[u]) - n[c]),
                n[u] > o(r[s]) && (t.offsets.popper[u] = o(r[s])),
                t
              )
            },
          },
          arrow: {
            order: 500,
            enabled: !0,
            fn(t, e) {
              let n
              if (!G(t.instance.modifiers, 'arrow', 'keepTogether')) return t
              let r = e.element
              if (typeof r === 'string') {
                if (!(r = t.instance.popper.querySelector(r))) return t
              } else if (!t.instance.popper.contains(r)) {
                return (
                  console.warn('WARNING: `arrow.element` must be child of its popper element!'),
                  t
                )
              }
              const i = t.placement.split('-')[0]
              const o = t.offsets
              const s = o.popper
              const u = o.reference
              const c = ['left', 'right'].indexOf(i) !== -1
              const l = c ? 'height' : 'width'
              const f = c ? 'Top' : 'Left'
              const p = f.toLowerCase()
              const d = c ? 'left' : 'top'
              const h = c ? 'bottom' : 'right'
              const v = R(r)[l]
              u[h] - v < s[p] && (t.offsets.popper[p] -= s[p] - (u[h] - v)),
              u[p] + v > s[h] && (t.offsets.popper[p] += u[p] + v - s[h]),
              (t.offsets.popper = C(t.offsets.popper))
              const g = u[p] + u[l] / 2 - v / 2
              const m = a(t.instance.popper)
              const y = parseFloat(m[`margin${f}`])
              const _ = parseFloat(m[`border${f}Width`])
              let b = g - t.offsets.popper[p] - y - _
              return (
                (b = Math.max(Math.min(s[l] - v, b), 0)),
                (t.arrowElement = r),
                (t.offsets.arrow = (E((n = {}), p, Math.round(b)), E(n, d, ''), n)),
                t
              )
            },
            element: '[x-arrow]',
          },
          flip: {
            order: 600,
            enabled: !0,
            fn(t, e) {
              if (q(t.instance.modifiers, 'inner')) return t
              if (t.flipped && t.placement === t.originalPlacement) return t
              const n = O(
                t.instance.popper,
                t.instance.reference,
                e.padding,
                e.boundariesElement,
                t.positionFixed,
              )
              let r = t.placement.split('-')[0]
              let i = P(r)
              let o = t.placement.split('-')[1] || ''
              let a = []
              switch (e.behavior) {
                case et:
                  a = [r, i]
                  break
                case nt:
                  a = tt(r)
                  break
                case rt:
                  a = tt(r, !0)
                  break
                default:
                  a = e.behavior
              }
              return (
                a.forEach((s, u) => {
                  if (r !== s || a.length === u + 1) return t;
                  (r = t.placement.split('-')[0]), (i = P(r))
                  const c = t.offsets.popper
                  const l = t.offsets.reference
                  const f = Math.floor
                  const p = (r === 'left' && f(c.right) > f(l.left))
                          || (r === 'right' && f(c.left) < f(l.right))
                          || (r === 'top' && f(c.bottom) > f(l.top))
                          || (r === 'bottom' && f(c.top) < f(l.bottom))
                  const d = f(c.left) < f(n.left)
                  const h = f(c.right) > f(n.right)
                  const v = f(c.top) < f(n.top)
                  const g = f(c.bottom) > f(n.bottom)
                  const m = (r === 'left' && d)
                          || (r === 'right' && h)
                          || (r === 'top' && v)
                          || (r === 'bottom' && g)
                  const y = ['top', 'bottom'].indexOf(r) !== -1
                  const _ = !!e.flipVariations
                          && ((y && o === 'start' && d)
                            || (y && o === 'end' && h)
                            || (!y && o === 'start' && v)
                            || (!y && o === 'end' && g))
                  const b = !!e.flipVariationsByContent
                          && ((y && o === 'start' && h)
                            || (y && o === 'end' && d)
                            || (!y && o === 'start' && g)
                            || (!y && o === 'end' && v))
                  const w = _ || b;
                  (p || m || w)
                        && ((t.flipped = !0),
                        (p || m) && (r = a[u + 1]),
                        w
                          && (o = (function (t) {
                            return t === 'end' ? 'start' : t === 'start' ? 'end' : t
                          }(o))),
                        (t.placement = r + (o ? `-${o}` : '')),
                        (t.offsets.popper = {

                          ...t.offsets.popper,
                          ...H(t.instance.popper, t.offsets.reference, t.placement),
                        }),
                        (t = W(t.instance.modifiers, t, 'flip')))
                }),
                t
              )
            },
            behavior: 'flip',
            padding: 5,
            boundariesElement: 'viewport',
            flipVariations: !1,
            flipVariationsByContent: !1,
          },
          inner: {
            order: 700,
            enabled: !1,
            fn(t) {
              const e = t.placement
              const n = e.split('-')[0]
              const r = t.offsets
              const i = r.popper
              const o = r.reference
              const a = ['left', 'right'].indexOf(n) !== -1
              const s = ['top', 'left'].indexOf(n) === -1
              return (
                (i[a ? 'left' : 'top'] = o[n] - (s ? i[a ? 'width' : 'height'] : 0)),
                (t.placement = P(e)),
                (t.offsets.popper = C(i)),
                t
              )
            },
          },
          hide: {
            order: 800,
            enabled: !0,
            fn(t) {
              if (!G(t.instance.modifiers, 'hide', 'preventOverflow')) return t
              const e = t.offsets.reference
              const n = M(t.instance.modifiers, (t) => t.name === 'preventOverflow').boundaries
              if (
                e.bottom < n.top
                    || e.left > n.right
                    || e.top > n.bottom
                    || e.right < n.left
              ) {
                if (!0 === t.hide) return t;
                (t.hide = !0), (t.attributes['x-out-of-boundaries'] = '')
              } else {
                if (!1 === t.hide) return t;
                (t.hide = !1), (t.attributes['x-out-of-boundaries'] = !1)
              }
              return t
            },
          },
          computeStyle: {
            order: 850,
            enabled: !0,
            fn(t, e) {
              const n = e.x
              const r = e.y
              const i = t.offsets.popper
              const o = M(t.instance.modifiers, (t) => t.name === 'applyStyle').gpuAcceleration
              void 0 !== o
                    && console.warn(
                      'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!',
                    )
              const a = void 0 !== o ? o : e.gpuAcceleration
              const s = d(t.instance.popper)
              const u = S(s)
              const c = { position: i.position }
              const l = (function (t, e) {
                const n = t.offsets
                const r = n.popper
                const i = n.reference
                const o = Math.round
                const a = Math.floor
                const s = function (t) {
                  return t
                }
                const u = o(i.width)
                const c = o(r.width)
                const l = ['left', 'right'].indexOf(t.placement) !== -1
                const f = t.placement.indexOf('-') !== -1
                const p = e ? (l || f || u % 2 == c % 2 ? o : a) : s
                const d = e ? o : s
                return {
                  left: p(u % 2 == 1 && c % 2 == 1 && !f && e ? r.left - 1 : r.left),
                  top: d(r.top),
                  bottom: d(r.bottom),
                  right: p(r.right),
                }
              }(t, window.devicePixelRatio < 2 || !X))
              const f = n === 'bottom' ? 'top' : 'bottom'
              const p = r === 'right' ? 'left' : 'right'
              const h = F('transform')
              let v = void 0
              let g = void 0
              if (
                ((g = f === 'bottom'
                  ? s.nodeName === 'HTML'
                    ? -s.clientHeight + l.bottom
                    : -u.height + l.bottom
                  : l.top),
                (v = p === 'right'
                  ? s.nodeName === 'HTML'
                    ? -s.clientWidth + l.right
                    : -u.width + l.right
                  : l.left),
                a && h)
              ) {
                (c[h] = `translate3d(${v}px, ${g}px, 0)`),
                (c[f] = 0),
                (c[p] = 0),
                (c.willChange = 'transform')
              } else {
                const m = f === 'bottom' ? -1 : 1
                const y = p === 'right' ? -1 : 1;
                (c[f] = g * m), (c[p] = v * y), (c.willChange = `${f}, ${p}`)
              }
              const _ = { 'x-placement': t.placement }
              return (
                (t.attributes = { ..._, ...t.attributes }),
                (t.styles = { ...c, ...t.styles }),
                (t.arrowStyles = { ...t.offsets.arrow, ...t.arrowStyles }),
                t
              )
            },
            gpuAcceleration: !0,
            x: 'bottom',
            y: 'right',
          },
          applyStyle: {
            order: 900,
            enabled: !0,
            fn(t) {
              let e; let
                n
              return (
                Y(t.instance.popper, t.styles),
                (e = t.instance.popper),
                (n = t.attributes),
                Object.keys(n).forEach((t) => {
                  !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t)
                }),
                t.arrowElement
                      && Object.keys(t.arrowStyles).length
                      && Y(t.arrowElement, t.arrowStyles),
                t
              )
            },
            onLoad(t, e, n, r, i) {
              const o = L(i, e, t, n.positionFixed)
              const a = I(
                n.placement,
                o,
                e,
                t,
                n.modifiers.flip.boundariesElement,
                n.modifiers.flip.padding,
              )
              return (
                e.setAttribute('x-placement', a),
                Y(e, { position: n.positionFixed ? 'fixed' : 'absolute' }),
                n
              )
            },
            gpuAcceleration: void 0,
          },
        },
      }
      const at = (function () {
        function t(e, n) {
          const r = this
          const a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          w(this, t),
          (this.scheduleUpdate = function () {
            return requestAnimationFrame(r.update)
          }),
          (this.update = i(this.update.bind(this))),
          (this.options = { ...t.Defaults, ...a }),
          (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
          (this.reference = e && e.jquery ? e[0] : e),
          (this.popper = n && n.jquery ? n[0] : n),
          (this.options.modifiers = {}),
          Object.keys({ ...t.Defaults.modifiers, ...a.modifiers }).forEach((e) => {
            r.options.modifiers[e] = {

              ...t.Defaults.modifiers[e] || {},
              ...(a.modifiers ? a.modifiers[e] : {}),
            }
          }),
          (this.modifiers = Object.keys(this.options.modifiers)
            .map((t) => ({ name: t, ...r.options.modifiers[t] }))
            .sort((t, e) => t.order - e.order)),
          this.modifiers.forEach((t) => {
            t.enabled && o(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state)
          }),
          this.update()
          const s = this.options.eventsEnabled
          s && this.enableEventListeners(), (this.state.eventsEnabled = s)
        }
        return (
          x(t, [
            {
              key: 'update',
              value() {
                return B.call(this)
              },
            },
            {
              key: 'destroy',
              value() {
                return U.call(this)
              },
            },
            {
              key: 'enableEventListeners',
              value() {
                return Q.call(this)
              },
            },
            {
              key: 'disableEventListeners',
              value() {
                return K.call(this)
              },
            },
          ]),
          t
        )
      }());
      (at.Utils = (typeof window !== 'undefined' ? window : t).PopperUtils),
      (at.placements = J),
      (at.Defaults = ot),
      (e.default = at)
    }.call(this, n(1))
  },
  function (t, e, n) {
    let r
    !(function (e, n) {
      typeof t.exports === 'object'
        ? (t.exports = e.document
          ? n(e, !0)
          : function (t) {
            if (!t.document) throw new Error('jQuery requires a window with a document')
            return n(t)
          })
        : n(e)
    }(typeof window !== 'undefined' ? window : this, (n, i) => {
      const o = []
      const a = n.document
      const s = Object.getPrototypeOf
      const u = o.slice
      const c = o.concat
      const l = o.push
      const f = o.indexOf
      const p = {}
      const d = p.toString
      const h = p.hasOwnProperty
      const v = h.toString
      const g = v.call(Object)
      const m = {}
      const y = function (t) {
        return typeof t === 'function' && typeof t.nodeType !== 'number'
      }
      const _ = function (t) {
        return t != null && t === t.window
      }
      const b = {
        type: !0, src: !0, nonce: !0, noModule: !0,
      }
      function w(t, e, n) {
        let r
        let i
        const o = (n = n || a).createElement('script')
        if (((o.text = t), e)) for (r in b) (i = e[r] || (e.getAttribute && e.getAttribute(r))) && o.setAttribute(r, i)
        n.head.appendChild(o).parentNode.removeChild(o)
      }
      function x(t) {
        return t == null
          ? `${t}`
          : typeof t === 'object' || typeof t === 'function'
            ? p[d.call(t)] || 'object'
            : typeof t
      }
      var E = function (t, e) {
        return new E.fn.init(t, e)
      }
      const T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      function C(t) {
        const e = !!t && 'length' in t && t.length
        const n = x(t)
        return (
          !y(t)
          && !_(t)
          && (n === 'array' || e === 0 || (typeof e === 'number' && e > 0 && e - 1 in t))
        )
      }
      (E.fn = E.prototype = {
        jquery: '3.4.1',
        constructor: E,
        length: 0,
        toArray() {
          return u.call(this)
        },
        get(t) {
          return t == null ? u.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack(t) {
          const e = E.merge(this.constructor(), t)
          return (e.prevObject = this), e
        },
        each(t) {
          return E.each(this, t)
        },
        map(t) {
          return this.pushStack(
            E.map(this, (e, n) => t.call(e, n, e)),
          )
        },
        slice() {
          return this.pushStack(u.apply(this, arguments))
        },
        first() {
          return this.eq(0)
        },
        last() {
          return this.eq(-1)
        },
        eq(t) {
          const e = this.length
          const n = +t + (t < 0 ? e : 0)
          return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
        },
        end() {
          return this.prevObject || this.constructor()
        },
        push: l,
        sort: o.sort,
        splice: o.splice,
      }),
      (E.extend = E.fn.extend = function () {
        let t
        let e
        let n
        let r
        let i
        let o
        let a = arguments[0] || {}
        let s = 1
        const u = arguments.length
        let c = !1
        for (
          typeof a === 'boolean' && ((c = a), (a = arguments[s] || {}), s++),
          typeof a === 'object' || y(a) || (a = {}),
          s === u && ((a = this), s--);
          s < u;
          s++
        ) {
          if ((t = arguments[s]) != null) {
            for (e in t) {
              (r = t[e]),
              '__proto__' !== e
                    && a !== r
                    && (c && r && (E.isPlainObject(r) || (i = Array.isArray(r)))
                      ? ((n = a[e]),
                      (o = i && !Array.isArray(n) ? [] : i || E.isPlainObject(n) ? n : {}),
                      (i = !1),
                      (a[e] = E.extend(c, o, r)))
                      : void 0 !== r && (a[e] = r))
            }
          }
        }
        return a
      }),
      E.extend({
        expando: `jQuery${(`3.4.1${Math.random()}`).replace(/\D/g, '')}`,
        isReady: !0,
        error(t) {
          throw new Error(t)
        },
        noop() {},
        isPlainObject(t) {
          let e; let
            n
          return (
            !(!t || d.call(t) !== '[object Object]')
              && (!(e = s(t))
                || (typeof (n = h.call(e, 'constructor') && e.constructor) === 'function'
                  && v.call(n) === g))
          )
        },
        isEmptyObject(t) {
          let e
          for (e in t) return !1
          return !0
        },
        globalEval(t, e) {
          w(t, { nonce: e && e.nonce })
        },
        each(t, e) {
          let n
          let r = 0
          if (C(t)) for (n = t.length; r < n && !1 !== e.call(t[r], r, t[r]); r++);
          else for (r in t) if (!1 === e.call(t[r], r, t[r])) break
          return t
        },
        trim(t) {
          return t == null ? '' : (`${t}`).replace(T, '')
        },
        makeArray(t, e) {
          const n = e || []
          return (
            t != null
                && (C(Object(t)) ? E.merge(n, typeof t === 'string' ? [t] : t) : l.call(n, t)),
            n
          )
        },
        inArray(t, e, n) {
          return e == null ? -1 : f.call(e, t, n)
        },
        merge(t, e) {
          for (var n = +e.length, r = 0, i = t.length; r < n; r++) t[i++] = e[r]
          return (t.length = i), t
        },
        grep(t, e, n) {
          for (var r = [], i = 0, o = t.length, a = !n; i < o; i++) !e(t[i], i) !== a && r.push(t[i])
          return r
        },
        map(t, e, n) {
          let r
          let i
          let o = 0
          const a = []
          if (C(t)) for (r = t.length; o < r; o++) (i = e(t[o], o, n)) != null && a.push(i)
          else for (o in t) (i = e(t[o], o, n)) != null && a.push(i)
          return c.apply([], a)
        },
        guid: 1,
        support: m,
      }),
      typeof Symbol === 'function' && (E.fn[Symbol.iterator] = o[Symbol.iterator]),
      E.each(
        'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '),
        (t, e) => {
          p[`[object ${e}]`] = e.toLowerCase()
        },
      )
      const S = (function (t) {
        let e
        let n
        let r
        let i
        let o
        let a
        let s
        let u
        let c
        let l
        let f
        let p
        let d
        let h
        let v
        let g
        let m
        let y
        let _
        const b = `sizzle${1 * new Date()}`
        const w = t.document
        let x = 0
        let E = 0
        const T = ut()
        const C = ut()
        const S = ut()
        const A = ut()
        let D = function (t, e) {
          return t === e && (f = !0), 0
        }
        const k = {}.hasOwnProperty
        let N = []
        const O = N.pop
        const j = N.push
        let I = N.push
        const L = N.slice
        const R = function (t, e) {
          for (let n = 0, r = t.length; n < r; n++) if (t[n] === e) return n
          return -1
        }
        const P = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped'
        const H = '[\\x20\\t\\r\\n\\f]'
        const M = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+'
        const W = `\\[${
          H
        }*(${
          M
        })(?:${
          H
        }*([*^$|!~]?=)${
          H
        }*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(${
          M
        }))|)${
          H
        }*\\]`
        const B = `:(${
          M
        })(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|${
          W
        })*)|.*)\\)|)`
        const q = new RegExp(`${H}+`, 'g')
        const F = new RegExp(`^${H}+|((?:^|[^\\\\])(?:\\\\.)*)${H}+$`, 'g')
        const U = new RegExp(`^${H}*,${H}*`)
        const $ = new RegExp(`^${H}*([>+~]|${H})${H}*`)
        const z = new RegExp(`${H}|>`)
        const Q = new RegExp(B)
        const K = new RegExp(`^${M}$`)
        const V = {
          ID: new RegExp(`^#(${M})`),
          CLASS: new RegExp(`^\\.(${M})`),
          TAG: new RegExp(`^(${M}|[*])`),
          ATTR: new RegExp(`^${W}`),
          PSEUDO: new RegExp(`^${B}`),
          CHILD: new RegExp(
            `^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(${
              H
            }*(even|odd|(([+-]|)(\\d*)n|)${
              H
            }*(?:([+-]|)${
              H
            }*(\\d+)|))${
              H
            }*\\)|)`,
            'i',
          ),
          bool: new RegExp(`^(?:${P})$`, 'i'),
          needsContext: new RegExp(
            `^${
              H
            }*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(${
              H
            }*((?:-\\d)?\\d*)${
              H
            }*\\)|)(?=[^-]|$)`,
            'i',
          ),
        }
        const Y = /HTML$/i
        const X = /^(?:input|select|textarea|button)$/i
        const G = /^h\d$/i
        const J = /^[^{]+\{\s*\[native \w/
        const Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/
        const tt = /[+~]/
        const et = new RegExp(`\\\\([\\da-f]{1,6}${H}?|(${H})|.)`, 'ig')
        const nt = function (t, e, n) {
          const r = `0x${e}` - 65536
          return r != r || n
            ? e
            : r < 0
              ? String.fromCharCode(r + 65536)
              : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320)
        }
        const rt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g
        const it = function (t, e) {
          return e
            ? t === '\0'
              ? '�'
              : `${t.slice(0, -1)}\\${t.charCodeAt(t.length - 1).toString(16)} `
            : `\\${t}`
        }
        const ot = function () {
          p()
        }
        const at = bt(
          (t) => !0 === t.disabled && t.nodeName.toLowerCase() === 'fieldset',
          { dir: 'parentNode', next: 'legend' },
        )
        try {
          I.apply((N = L.call(w.childNodes)), w.childNodes), N[w.childNodes.length].nodeType
        } catch (t) {
          I = {
            apply: N.length
              ? function (t, e) {
                j.apply(t, L.call(e))
              }
              : function (t, e) {
                for (var n = t.length, r = 0; (t[n++] = e[r++]););
                t.length = n - 1
              },
          }
        }
        function st(t, e, r, i) {
          let o
          let s
          let c
          let l
          let f
          let h
          let m
          let y = e && e.ownerDocument
          const x = e ? e.nodeType : 9
          if (((r = r || []), typeof t !== 'string' || !t || (x !== 1 && x !== 9 && x !== 11))) return r
          if (!i && ((e ? e.ownerDocument || e : w) !== d && p(e), (e = e || d), v)) {
            if (x !== 11 && (f = Z.exec(t))) {
              if ((o = f[1])) {
                if (x === 9) {
                  if (!(c = e.getElementById(o))) return r
                  if (c.id === o) return r.push(c), r
                } else if (y && (c = y.getElementById(o)) && _(e, c) && c.id === o) return r.push(c), r
              } else {
                if (f[2]) return I.apply(r, e.getElementsByTagName(t)), r
                if ((o = f[3]) && n.getElementsByClassName && e.getElementsByClassName) return I.apply(r, e.getElementsByClassName(o)), r
              }
            }
            if (
              n.qsa
              && !A[`${t} `]
              && (!g || !g.test(t))
              && (x !== 1 || e.nodeName.toLowerCase() !== 'object')
            ) {
              if (((m = t), (y = e), x === 1 && z.test(t))) {
                for (
                  (l = e.getAttribute('id'))
                    ? (l = l.replace(rt, it))
                    : e.setAttribute('id', (l = b)),
                  s = (h = a(t)).length;
                  s--;

                ) h[s] = `#${l} ${_t(h[s])}`;
                (m = h.join(',')), (y = (tt.test(t) && mt(e.parentNode)) || e)
              }
              try {
                return I.apply(r, y.querySelectorAll(m)), r
              } catch (e) {
                A(t, !0)
              } finally {
                l === b && e.removeAttribute('id')
              }
            }
          }
          return u(t.replace(F, '$1'), e, r, i)
        }
        function ut() {
          const t = []
          return function e(n, i) {
            return t.push(`${n} `) > r.cacheLength && delete e[t.shift()], (e[`${n} `] = i)
          }
        }
        function ct(t) {
          return (t[b] = !0), t
        }
        function lt(t) {
          let e = d.createElement('fieldset')
          try {
            return !!t(e)
          } catch (t) {
            return !1
          } finally {
            e.parentNode && e.parentNode.removeChild(e), (e = null)
          }
        }
        function ft(t, e) {
          for (let n = t.split('|'), i = n.length; i--;) r.attrHandle[n[i]] = e
        }
        function pt(t, e) {
          let n = e && t
          const r = n && t.nodeType === 1 && e.nodeType === 1 && t.sourceIndex - e.sourceIndex
          if (r) return r
          if (n) for (; (n = n.nextSibling);) if (n === e) return -1
          return t ? 1 : -1
        }
        function dt(t) {
          return function (e) {
            return e.nodeName.toLowerCase() === 'input' && e.type === t
          }
        }
        function ht(t) {
          return function (e) {
            const n = e.nodeName.toLowerCase()
            return (n === 'input' || n === 'button') && e.type === t
          }
        }
        function vt(t) {
          return function (e) {
            return 'form' in e
              ? e.parentNode && !1 === e.disabled
                ? 'label' in e
                  ? 'label' in e.parentNode
                    ? e.parentNode.disabled === t
                    : e.disabled === t
                  : e.isDisabled === t || (e.isDisabled !== !t && at(e) === t)
                : e.disabled === t
              : 'label' in e && e.disabled === t
          }
        }
        function gt(t) {
          return ct((e) => ((
            (e = +e),
            ct((n, r) => {
              for (var i, o = t([], n.length, e), a = o.length; a--;) n[(i = o[a])] && (n[i] = !(r[i] = n[i]))
            })
          )))
        }
        function mt(t) {
          return t && void 0 !== t.getElementsByTagName && t
        }
        for (e in ((n = st.support = {}),
        (o = st.isXML = function (t) {
          const e = t.namespaceURI
          const n = (t.ownerDocument || t).documentElement
          return !Y.test(e || (n && n.nodeName) || 'HTML')
        }),
        (p = st.setDocument = function (t) {
          let e
          let i
          const a = t ? t.ownerDocument || t : w
          return a !== d && a.nodeType === 9 && a.documentElement
            ? ((h = (d = a).documentElement),
            (v = !o(d)),
            w !== d
                && (i = d.defaultView)
                && i.top !== i
                && (i.addEventListener
                  ? i.addEventListener('unload', ot, !1)
                  : i.attachEvent && i.attachEvent('onunload', ot)),
            (n.attributes = lt((t) => ((t.className = 'i'), !t.getAttribute('className')))),
            (n.getElementsByTagName = lt((t) => (t.appendChild(d.createComment('')), !t.getElementsByTagName('*').length))),
            (n.getElementsByClassName = J.test(d.getElementsByClassName)),
            (n.getById = lt((t) => ((
              (h.appendChild(t).id = b), !d.getElementsByName || !d.getElementsByName(b).length
            )))),
            n.getById
              ? ((r.filter.ID = function (t) {
                const e = t.replace(et, nt)
                return function (t) {
                  return t.getAttribute('id') === e
                }
              }),
              (r.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && v) {
                  const n = e.getElementById(t)
                  return n ? [n] : []
                }
              }))
              : ((r.filter.ID = function (t) {
                const e = t.replace(et, nt)
                return function (t) {
                  const n = void 0 !== t.getAttributeNode && t.getAttributeNode('id')
                  return n && n.value === e
                }
              }),
              (r.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && v) {
                  let n
                  let r
                  let i
                  let o = e.getElementById(t)
                  if (o) {
                    if ((n = o.getAttributeNode('id')) && n.value === t) return [o]
                    for (i = e.getElementsByName(t), r = 0; (o = i[r++]);) if ((n = o.getAttributeNode('id')) && n.value === t) return [o]
                  }
                  return []
                }
              })),
            (r.find.TAG = n.getElementsByTagName
              ? function (t, e) {
                return void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t)
                  : n.qsa
                    ? e.querySelectorAll(t)
                    : void 0
              }
              : function (t, e) {
                let n
                const r = []
                let i = 0
                const o = e.getElementsByTagName(t)
                if (t === '*') {
                  for (; (n = o[i++]);) n.nodeType === 1 && r.push(n)
                  return r
                }
                return o
              }),
            (r.find.CLASS = n.getElementsByClassName
                && function (t, e) {
                  if (void 0 !== e.getElementsByClassName && v) return e.getElementsByClassName(t)
                }),
            (m = []),
            (g = []),
            (n.qsa = J.test(d.querySelectorAll))
                && (lt((t) => {
                  (h.appendChild(t).innerHTML = `<a id='${
                    b
                  }'></a><select id='${
                    b
                  }-\r\\' msallowcapture=''><option selected=''></option></select>`),
                  t.querySelectorAll("[msallowcapture^='']").length
                      && g.push(`[*^$]=${H}*(?:''|"")`),
                  t.querySelectorAll('[selected]').length
                      || g.push(`\\[${H}*(?:value|${P})`),
                  t.querySelectorAll(`[id~=${b}-]`).length || g.push('~='),
                  t.querySelectorAll(':checked').length || g.push(':checked'),
                  t.querySelectorAll(`a#${b}+*`).length || g.push('.#.+[+~]')
                }),
                lt((t) => {
                  t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"
                  const e = d.createElement('input')
                  e.setAttribute('type', 'hidden'),
                  t.appendChild(e).setAttribute('name', 'D'),
                  t.querySelectorAll('[name=d]').length && g.push(`name${H}*[*^$|!~]?=`),
                  t.querySelectorAll(':enabled').length !== 2 && g.push(':enabled', ':disabled'),
                  (h.appendChild(t).disabled = !0),
                  t.querySelectorAll(':disabled').length !== 2 && g.push(':enabled', ':disabled'),
                  t.querySelectorAll('*,:x'),
                  g.push(',.*:')
                })),
            (n.matchesSelector = J.test(
              (y = h.matches
                  || h.webkitMatchesSelector
                  || h.mozMatchesSelector
                  || h.oMatchesSelector
                  || h.msMatchesSelector),
            ))
                && lt((t) => {
                  (n.disconnectedMatch = y.call(t, '*')), y.call(t, "[s!='']:x"), m.push('!=', B)
                }),
            (g = g.length && new RegExp(g.join('|'))),
            (m = m.length && new RegExp(m.join('|'))),
            (e = J.test(h.compareDocumentPosition)),
            (_ = e || J.test(h.contains)
              ? function (t, e) {
                const n = t.nodeType === 9 ? t.documentElement : t
                const r = e && e.parentNode
                return (
                  t === r
                        || !(
                          !r
                          || r.nodeType !== 1
                          || !(n.contains
                            ? n.contains(r)
                            : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r))
                        )
                )
              }
              : function (t, e) {
                if (e) for (; (e = e.parentNode);) if (e === t) return !0
                return !1
              }),
            (D = e
              ? function (t, e) {
                if (t === e) return (f = !0), 0
                let r = !t.compareDocumentPosition - !e.compareDocumentPosition
                return (
                  r
                      || (1
                        & (r = (t.ownerDocument || t) === (e.ownerDocument || e)
                          ? t.compareDocumentPosition(e)
                          : 1)
                      || (!n.sortDetached && e.compareDocumentPosition(t) === r)
                        ? t === d || (t.ownerDocument === w && _(w, t))
                          ? -1
                          : e === d || (e.ownerDocument === w && _(w, e))
                            ? 1
                            : l
                              ? R(l, t) - R(l, e)
                              : 0
                        : 4 & r
                          ? -1
                          : 1)
                )
              }
              : function (t, e) {
                if (t === e) return (f = !0), 0
                let n
                let r = 0
                const i = t.parentNode
                const o = e.parentNode
                const a = [t]
                const s = [e]
                if (!i || !o) return t === d ? -1 : e === d ? 1 : i ? -1 : o ? 1 : l ? R(l, t) - R(l, e) : 0
                if (i === o) return pt(t, e)
                for (n = t; (n = n.parentNode);) a.unshift(n)
                for (n = e; (n = n.parentNode);) s.unshift(n)
                for (; a[r] === s[r];) r++
                return r ? pt(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
              }),
            d)
            : d
        }),
        (st.matches = function (t, e) {
          return st(t, null, null, e)
        }),
        (st.matchesSelector = function (t, e) {
          if (
            ((t.ownerDocument || t) !== d && p(t),
            n.matchesSelector && v && !A[`${e} `] && (!m || !m.test(e)) && (!g || !g.test(e)))
          ) {
            try {
              const r = y.call(t, e)
              if (r || n.disconnectedMatch || (t.document && t.document.nodeType !== 11)) return r
            } catch (t) {
              A(e, !0)
            }
          }
          return st(e, d, null, [t]).length > 0
        }),
        (st.contains = function (t, e) {
          return (t.ownerDocument || t) !== d && p(t), _(t, e)
        }),
        (st.attr = function (t, e) {
          (t.ownerDocument || t) !== d && p(t)
          const i = r.attrHandle[e.toLowerCase()]
          let o = i && k.call(r.attrHandle, e.toLowerCase()) ? i(t, e, !v) : void 0
          return void 0 !== o
            ? o
            : n.attributes || !v
              ? t.getAttribute(e)
              : (o = t.getAttributeNode(e)) && o.specified
                ? o.value
                : null
        }),
        (st.escape = function (t) {
          return (`${t}`).replace(rt, it)
        }),
        (st.error = function (t) {
          throw new Error(`Syntax error, unrecognized expression: ${t}`)
        }),
        (st.uniqueSort = function (t) {
          let e
          const r = []
          let i = 0
          let o = 0
          if (((f = !n.detectDuplicates), (l = !n.sortStable && t.slice(0)), t.sort(D), f)) {
            for (; (e = t[o++]);) e === t[o] && (i = r.push(o))
            for (; i--;) t.splice(r[i], 1)
          }
          return (l = null), t
        }),
        (i = st.getText = function (t) {
          let e
          let n = ''
          let r = 0
          const o = t.nodeType
          if (o) {
            if (o === 1 || o === 9 || o === 11) {
              if (typeof t.textContent === 'string') return t.textContent
              for (t = t.firstChild; t; t = t.nextSibling) n += i(t)
            } else if (o === 3 || o === 4) return t.nodeValue
          } else for (; (e = t[r++]);) n += i(e)
          return n
        }),
        ((r = st.selectors = {
          cacheLength: 50,
          createPseudo: ct,
          match: V,
          attrHandle: {},
          find: {},
          relative: {
            '>': { dir: 'parentNode', first: !0 },
            ' ': { dir: 'parentNode' },
            '+': { dir: 'previousSibling', first: !0 },
            '~': { dir: 'previousSibling' },
          },
          preFilter: {
            ATTR(t) {
              return (
                (t[1] = t[1].replace(et, nt)),
                (t[3] = (t[3] || t[4] || t[5] || '').replace(et, nt)),
                t[2] === '~=' && (t[3] = ` ${t[3]} `),
                t.slice(0, 4)
              )
            },
            CHILD(t) {
              return (
                (t[1] = t[1].toLowerCase()),
                t[1].slice(0, 3) === 'nth'
                  ? (t[3] || st.error(t[0]),
                  (t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * (t[3] === 'even' || t[3] === 'odd'))),
                  (t[5] = +(t[7] + t[8] || t[3] === 'odd')))
                  : t[3] && st.error(t[0]),
                t
              )
            },
            PSEUDO(t) {
              let e
              const n = !t[6] && t[2]
              return V.CHILD.test(t[0])
                ? null
                : (t[3]
                  ? (t[2] = t[4] || t[5] || '')
                  : n
                      && Q.test(n)
                      && (e = a(n, !0))
                      && (e = n.indexOf(')', n.length - e) - n.length)
                      && ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                t.slice(0, 3))
            },
          },
          filter: {
            TAG(t) {
              const e = t.replace(et, nt).toLowerCase()
              return t === '*'
                ? function () {
                  return !0
                }
                : function (t) {
                  return t.nodeName && t.nodeName.toLowerCase() === e
                }
            },
            CLASS(t) {
              let e = T[`${t} `]
              return (
                e
                || ((e = new RegExp(`(^|${H})${t}(${H}|$)`))
                  && T(t, (t) => e.test(
                    (typeof t.className === 'string' && t.className)
                        || (void 0 !== t.getAttribute && t.getAttribute('class'))
                        || '',
                  )))
              )
            },
            ATTR(t, e, n) {
              return function (r) {
                let i = st.attr(r, t)
                return i == null
                  ? e === '!='
                  : !e
                      || ((i += ''),
                      e === '='
                        ? i === n
                        : e === '!='
                          ? i !== n
                          : e === '^='
                            ? n && i.indexOf(n) === 0
                            : e === '*='
                              ? n && i.indexOf(n) > -1
                              : e === '$='
                                ? n && i.slice(-n.length) === n
                                : e === '~='
                                  ? (` ${i.replace(q, ' ')} `).indexOf(n) > -1
                                  : e === '|=' && (i === n || i.slice(0, n.length + 1) === `${n}-`))
              }
            },
            CHILD(t, e, n, r, i) {
              const o = t.slice(0, 3) !== 'nth'
              const a = t.slice(-4) !== 'last'
              const s = e === 'of-type'
              return r === 1 && i === 0
                ? function (t) {
                  return !!t.parentNode
                }
                : function (e, n, u) {
                  let c
                  let l
                  let f
                  let p
                  let d
                  let h
                  let v = o !== a ? 'nextSibling' : 'previousSibling'
                  const g = e.parentNode
                  const m = s && e.nodeName.toLowerCase()
                  const y = !u && !s
                  let _ = !1
                  if (g) {
                    if (o) {
                      for (; v;) {
                        for (p = e; (p = p[v]);) if (s ? p.nodeName.toLowerCase() === m : p.nodeType === 1) return !1
                        h = v = t === 'only' && !h && 'nextSibling'
                      }
                      return !0
                    }
                    if (((h = [a ? g.firstChild : g.lastChild]), a && y)) {
                      for (
                        _ = (d = (c = (l = (f = (p = g)[b] || (p[b] = {}))[p.uniqueID]
                                  || (f[p.uniqueID] = {}))[t] || [])[0] === x && c[1]) && c[2],
                        p = d && g.childNodes[d];
                        (p = (++d && p && p[v]) || (_ = d = 0) || h.pop());

                      ) {
                        if (p.nodeType === 1 && ++_ && p === e) {
                          l[t] = [x, d, _]
                          break
                        }
                      }
                    } else if (
                      (y
                          && (_ = d = (c = (l = (f = (p = e)[b] || (p[b] = {}))[p.uniqueID]
                                || (f[p.uniqueID] = {}))[t] || [])[0] === x && c[1]),
                      !1 === _)
                    ) {
                      for (
                        ;
                        (p = (++d && p && p[v]) || (_ = d = 0) || h.pop())
                          && ((s ? p.nodeName.toLowerCase() !== m : p.nodeType !== 1)
                            || !++_
                            || (y
                              && ((l = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[
                                t
                              ] = [x, _]),
                            p !== e));

                      );
                    }
                    return (_ -= i) === r || (_ % r == 0 && _ / r >= 0)
                  }
                }
            },
            PSEUDO(t, e) {
              let n
              const i = r.pseudos[t]
                  || r.setFilters[t.toLowerCase()]
                  || st.error(`unsupported pseudo: ${t}`)
              return i[b]
                ? i(e)
                : i.length > 1
                  ? ((n = [t, t, '', e]),
                  r.setFilters.hasOwnProperty(t.toLowerCase())
                    ? ct((t, n) => {
                      for (var r, o = i(t, e), a = o.length; a--;) t[(r = R(t, o[a]))] = !(n[r] = o[a])
                    })
                    : function (t) {
                      return i(t, 0, n)
                    })
                  : i
            },
          },
          pseudos: {
            not: ct((t) => {
              const e = []
              const n = []
              const r = s(t.replace(F, '$1'))
              return r[b]
                ? ct((t, e, n, i) => {
                  for (var o, a = r(t, null, i, []), s = t.length; s--;) (o = a[s]) && (t[s] = !(e[s] = o))
                })
                : function (t, i, o) {
                  return (e[0] = t), r(e, null, o, n), (e[0] = null), !n.pop()
                }
            }),
            has: ct((t) => function (e) {
              return st(t, e).length > 0
            }),
            contains: ct((t) => ((
              (t = t.replace(et, nt)),
              function (e) {
                return (e.textContent || i(e)).indexOf(t) > -1
              }
            ))),
            lang: ct((t) => ((
              K.test(t || '') || st.error(`unsupported lang: ${t}`),
              (t = t.replace(et, nt).toLowerCase()),
              function (e) {
                let n
                do {
                  if ((n = v ? e.lang : e.getAttribute('xml:lang') || e.getAttribute('lang'))) return (n = n.toLowerCase()) === t || n.indexOf(`${t}-`) === 0
                } while ((e = e.parentNode) && e.nodeType === 1)
                return !1
              }
            ))),
            target(e) {
              const n = t.location && t.location.hash
              return n && n.slice(1) === e.id
            },
            root(t) {
              return t === h
            },
            focus(t) {
              return (
                t === d.activeElement
                && (!d.hasFocus || d.hasFocus())
                && !!(t.type || t.href || ~t.tabIndex)
              )
            },
            enabled: vt(!1),
            disabled: vt(!0),
            checked(t) {
              const e = t.nodeName.toLowerCase()
              return (e === 'input' && !!t.checked) || (e === 'option' && !!t.selected)
            },
            selected(t) {
              return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
            },
            empty(t) {
              for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1
              return !0
            },
            parent(t) {
              return !r.pseudos.empty(t)
            },
            header(t) {
              return G.test(t.nodeName)
            },
            input(t) {
              return X.test(t.nodeName)
            },
            button(t) {
              const e = t.nodeName.toLowerCase()
              return (e === 'input' && t.type === 'button') || e === 'button'
            },
            text(t) {
              let e
              return (
                t.nodeName.toLowerCase() === 'input'
                && t.type === 'text'
                && ((e = t.getAttribute('type')) == null || e.toLowerCase() === 'text')
              )
            },
            first: gt(() => [0]),
            last: gt((t, e) => [e - 1]),
            eq: gt((t, e, n) => [n < 0 ? n + e : n]),
            even: gt((t, e) => {
              for (let n = 0; n < e; n += 2) t.push(n)
              return t
            }),
            odd: gt((t, e) => {
              for (let n = 1; n < e; n += 2) t.push(n)
              return t
            }),
            lt: gt((t, e, n) => {
              for (let r = n < 0 ? n + e : n > e ? e : n; --r >= 0;) t.push(r)
              return t
            }),
            gt: gt((t, e, n) => {
              for (let r = n < 0 ? n + e : n; ++r < e;) t.push(r)
              return t
            }),
          },
        }).pseudos.nth = r.pseudos.eq),
        {
          radio: !0, checkbox: !0, file: !0, password: !0, image: !0,
        })) r.pseudos[e] = dt(e)
        for (e in { submit: !0, reset: !0 }) r.pseudos[e] = ht(e)
        function yt() {}
        function _t(t) {
          for (var e = 0, n = t.length, r = ''; e < n; e++) r += t[e].value
          return r
        }
        function bt(t, e, n) {
          const r = e.dir
          const i = e.next
          const o = i || r
          const a = n && o === 'parentNode'
          const s = E++
          return e.first
            ? function (e, n, i) {
              for (; (e = e[r]);) if (e.nodeType === 1 || a) return t(e, n, i)
              return !1
            }
            : function (e, n, u) {
              let c
              let l
              let f
              const p = [x, s]
              if (u) {
                for (; (e = e[r]);) if ((e.nodeType === 1 || a) && t(e, n, u)) return !0
              } else {
                for (; (e = e[r]);) {
                  if (e.nodeType === 1 || a) {
                    if (
                      ((l = (f = e[b] || (e[b] = {}))[e.uniqueID] || (f[e.uniqueID] = {})),
                      i && i === e.nodeName.toLowerCase())
                    ) e = e[r] || e
                    else {
                      if ((c = l[o]) && c[0] === x && c[1] === s) return (p[2] = c[2])
                      if (((l[o] = p), (p[2] = t(e, n, u)))) return !0
                    }
                  }
                }
              }
              return !1
            }
        }
        function wt(t) {
          return t.length > 1
            ? function (e, n, r) {
              for (let i = t.length; i--;) if (!t[i](e, n, r)) return !1
              return !0
            }
            : t[0]
        }
        function xt(t, e, n, r, i) {
          for (var o, a = [], s = 0, u = t.length, c = e != null; s < u; s++) (o = t[s]) && ((n && !n(o, r, i)) || (a.push(o), c && e.push(s)))
          return a
        }
        function Et(t, e, n, r, i, o) {
          return (
            r && !r[b] && (r = Et(r)),
            i && !i[b] && (i = Et(i, o)),
            ct((o, a, s, u) => {
              let c
              let l
              let f
              const p = []
              const d = []
              const h = a.length
              const v = o
                  || (function (t, e, n) {
                    for (let r = 0, i = e.length; r < i; r++) st(t, e[r], n)
                    return n
                  }(e || '*', s.nodeType ? [s] : s, []))
              const g = !t || (!o && e) ? v : xt(v, p, t, s, u)
              let m = n ? (i || (o ? t : h || r) ? [] : a) : g
              if ((n && n(g, m, s, u), r)) for (c = xt(m, d), r(c, [], s, u), l = c.length; l--;) (f = c[l]) && (m[d[l]] = !(g[d[l]] = f))
              if (o) {
                if (i || t) {
                  if (i) {
                    for (c = [], l = m.length; l--;) (f = m[l]) && c.push((g[l] = f))
                    i(null, (m = []), c, u)
                  }
                  for (l = m.length; l--;) (f = m[l]) && (c = i ? R(o, f) : p[l]) > -1 && (o[c] = !(a[c] = f))
                }
              } else (m = xt(m === a ? m.splice(h, m.length) : m)), i ? i(null, a, m, u) : I.apply(a, m)
            })
          )
        }
        function Tt(t) {
          for (
            var e,
              n,
              i,
              o = t.length,
              a = r.relative[t[0].type],
              s = a || r.relative[' '],
              u = a ? 1 : 0,
              l = bt(
                (t) => t === e,
                s,
                !0,
              ),
              f = bt(
                (t) => R(e, t) > -1,
                s,
                !0,
              ),
              p = [
                function (t, n, r) {
                  const i = (!a && (r || n !== c)) || ((e = n).nodeType ? l(t, n, r) : f(t, n, r))
                  return (e = null), i
                },
              ];
            u < o;
            u++
          ) {
            if ((n = r.relative[t[u].type])) p = [bt(wt(p), n)]
            else {
              if ((n = r.filter[t[u].type].apply(null, t[u].matches))[b]) {
                for (i = ++u; i < o && !r.relative[t[i].type]; i++);
                return Et(
                  u > 1 && wt(p),
                  u > 1
                    && _t(
                      t.slice(0, u - 1).concat({ value: t[u - 2].type === ' ' ? '*' : '' }),
                    ).replace(F, '$1'),
                  n,
                  u < i && Tt(t.slice(u, i)),
                  i < o && Tt((t = t.slice(i))),
                  i < o && _t(t),
                )
              }
              p.push(n)
            }
          }
          return wt(p)
        }
        return (
          (yt.prototype = r.filters = r.pseudos),
          (r.setFilters = new yt()),
          (a = st.tokenize = function (t, e) {
            let n
            let i
            let o
            let a
            let s
            let u
            let c
            const l = C[`${t} `]
            if (l) return e ? 0 : l.slice(0)
            for (s = t, u = [], c = r.preFilter; s;) {
              for (a in ((n && !(i = U.exec(s)))
                || (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
              (n = !1),
              (i = $.exec(s))
                && ((n = i.shift()),
                o.push({ value: n, type: i[0].replace(F, ' ') }),
                (s = s.slice(n.length))),
              r.filter)) {
                !(i = V[a].exec(s))
                  || (c[a] && !(i = c[a](i)))
                  || ((n = i.shift()),
                  o.push({ value: n, type: a, matches: i }),
                  (s = s.slice(n.length)))
              }
              if (!n) break
            }
            return e ? s.length : s ? st.error(t) : C(t, u).slice(0)
          }),
          (s = st.compile = function (t, e) {
            let n
            const i = []
            const o = []
            let s = S[`${t} `]
            if (!s) {
              for (e || (e = a(t)), n = e.length; n--;) (s = Tt(e[n]))[b] ? i.push(s) : o.push(s);
              (s = S(
                t,
                (function (t, e) {
                  const n = e.length > 0
                  const i = t.length > 0
                  const o = function (o, a, s, u, l) {
                    let f
                    let h
                    let g
                    let m = 0
                    let y = '0'
                    const _ = o && []
                    let b = []
                    const w = c
                    const E = o || (i && r.find.TAG('*', l))
                    const T = (x += w == null ? 1 : Math.random() || 0.1)
                    const C = E.length
                    for (l && (c = a === d || a || l); y !== C && (f = E[y]) != null; y++) {
                      if (i && f) {
                        for (
                          h = 0, a || f.ownerDocument === d || (p(f), (s = !v));
                          (g = t[h++]);

                        ) {
                          if (g(f, a || d, s)) {
                            u.push(f)
                            break
                          }
                        }
                        l && (x = T)
                      }
                      n && ((f = !g && f) && m--, o && _.push(f))
                    }
                    if (((m += y), n && y !== m)) {
                      for (h = 0; (g = e[h++]);) g(_, b, a, s)
                      if (o) {
                        if (m > 0) for (; y--;) _[y] || b[y] || (b[y] = O.call(u))
                        b = xt(b)
                      }
                      I.apply(u, b),
                      l && !o && b.length > 0 && m + e.length > 1 && st.uniqueSort(u)
                    }
                    return l && ((x = T), (c = w)), _
                  }
                  return n ? ct(o) : o
                }(o, i)),
              )).selector = t
            }
            return s
          }),
          (u = st.select = function (t, e, n, i) {
            let o
            let u
            let c
            let l
            let f
            const p = typeof t === 'function' && t
            const d = !i && a((t = p.selector || t))
            if (((n = n || []), d.length === 1)) {
              if (
                (u = d[0] = d[0].slice(0)).length > 2
                && (c = u[0]).type === 'ID'
                && e.nodeType === 9
                && v
                && r.relative[u[1].type]
              ) {
                if (!(e = (r.find.ID(c.matches[0].replace(et, nt), e) || [])[0])) return n
                p && (e = e.parentNode), (t = t.slice(u.shift().value.length))
              }
              for (
                o = V.needsContext.test(t) ? 0 : u.length;
                o-- && ((c = u[o]), !r.relative[(l = c.type)]);

              ) {
                if (
                  (f = r.find[l])
                  && (i = f(
                    c.matches[0].replace(et, nt),
                    (tt.test(u[0].type) && mt(e.parentNode)) || e,
                  ))
                ) {
                  if ((u.splice(o, 1), !(t = i.length && _t(u)))) return I.apply(n, i), n
                  break
                }
              }
            }
            return (p || s(t, d))(i, e, !v, n, !e || (tt.test(t) && mt(e.parentNode)) || e), n
          }),
          (n.sortStable = b.split('').sort(D).join('') === b),
          (n.detectDuplicates = !!f),
          p(),
          (n.sortDetached = lt((t) => 1 & t.compareDocumentPosition(d.createElement('fieldset')))),
          lt((t) => ((t.innerHTML = "<a href='#'></a>"), t.firstChild.getAttribute('href') === '#'))
            || ft('type|href|height|width', (t, e, n) => {
              if (!n) return t.getAttribute(e, e.toLowerCase() === 'type' ? 1 : 2)
            }),
          (n.attributes
            && lt((t) => ((
              (t.innerHTML = '<input/>'),
              t.firstChild.setAttribute('value', ''),
              t.firstChild.getAttribute('value') === ''
            ))))
            || ft('value', (t, e, n) => {
              if (!n && t.nodeName.toLowerCase() === 'input') return t.defaultValue
            }),
          lt((t) => t.getAttribute('disabled') == null)
            || ft(P, (t, e, n) => {
              let r
              if (!n) {
                return !0 === t[e]
                  ? e.toLowerCase()
                  : (r = t.getAttributeNode(e)) && r.specified
                    ? r.value
                    : null
              }
            }),
          st
        )
      }(n));
      (E.find = S),
      (E.expr = S.selectors),
      (E.expr[':'] = E.expr.pseudos),
      (E.uniqueSort = E.unique = S.uniqueSort),
      (E.text = S.getText),
      (E.isXMLDoc = S.isXML),
      (E.contains = S.contains),
      (E.escapeSelector = S.escape)
      const A = function (t, e, n) {
        for (var r = [], i = void 0 !== n; (t = t[e]) && t.nodeType !== 9;) {
          if (t.nodeType === 1) {
            if (i && E(t).is(n)) break
            r.push(t)
          }
        }
        return r
      }
      const D = function (t, e) {
        for (var n = []; t; t = t.nextSibling) t.nodeType === 1 && t !== e && n.push(t)
        return n
      }
      const k = E.expr.match.needsContext
      function N(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
      }
      const O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
      function j(t, e, n) {
        return y(e)
          ? E.grep(t, (t, r) => !!e.call(t, r, t) !== n)
          : e.nodeType
            ? E.grep(t, (t) => (t === e) !== n)
            : typeof e !== 'string'
              ? E.grep(t, (t) => f.call(e, t) > -1 !== n)
              : E.filter(e, t, n)
      }
      (E.filter = function (t, e, n) {
        const r = e[0]
        return (
          n && (t = `:not(${t})`),
          e.length === 1 && r.nodeType === 1
            ? E.find.matchesSelector(r, t)
              ? [r]
              : []
            : E.find.matches(
              t,
              E.grep(e, (t) => t.nodeType === 1),
            )
        )
      }),
      E.fn.extend({
        find(t) {
          let e
          let n
          const r = this.length
          const i = this
          if (typeof t !== 'string') {
            return this.pushStack(
              E(t).filter(function () {
                for (e = 0; e < r; e++) if (E.contains(i[e], this)) return !0
              }),
            )
          }
          for (n = this.pushStack([]), e = 0; e < r; e++) E.find(t, i[e], n)
          return r > 1 ? E.uniqueSort(n) : n
        },
        filter(t) {
          return this.pushStack(j(this, t || [], !1))
        },
        not(t) {
          return this.pushStack(j(this, t || [], !0))
        },
        is(t) {
          return !!j(this, typeof t === 'string' && k.test(t) ? E(t) : t || [], !1).length
        },
      })
      let I
      const L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((E.fn.init = function (t, e, n) {
        let r; let
          i
        if (!t) return this
        if (((n = n || I), typeof t === 'string')) {
          if (
            !(r = t[0] === '<' && t[t.length - 1] === '>' && t.length >= 3
              ? [null, t, null]
              : L.exec(t))
            || (!r[1] && e)
          ) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t)
          if (r[1]) {
            if (
              ((e = e instanceof E ? e[0] : e),
              E.merge(this, E.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : a, !0)),
              O.test(r[1]) && E.isPlainObject(e))
            ) for (r in e) y(this[r]) ? this[r](e[r]) : this.attr(r, e[r])
            return this
          }
          return (i = a.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
        }
        return t.nodeType
          ? ((this[0] = t), (this.length = 1), this)
          : y(t)
            ? void 0 !== n.ready
              ? n.ready(t)
              : t(E)
            : E.makeArray(t, this)
      }).prototype = E.fn),
      (I = E(a))
      const R = /^(?:parents|prev(?:Until|All))/
      const P = {
        children: !0, contents: !0, next: !0, prev: !0,
      }
      function H(t, e) {
        for (; (t = t[e]) && t.nodeType !== 1;);
        return t
      }
      E.fn.extend({
        has(t) {
          const e = E(t, this)
          const n = e.length
          return this.filter(function () {
            for (let t = 0; t < n; t++) if (E.contains(this, e[t])) return !0
          })
        },
        closest(t, e) {
          let n
          let r = 0
          const i = this.length
          const o = []
          const a = typeof t !== 'string' && E(t)
          if (!k.test(t)) {
            for (; r < i; r++) {
              for (n = this[r]; n && n !== e; n = n.parentNode) {
 if (
                n.nodeType < 11
                  && (a ? a.index(n) > -1 : n.nodeType === 1 && E.find.matchesSelector(n, t))
              ) {
                o.push(n)
                break
              } 
} 
}
          }
          return this.pushStack(o.length > 1 ? E.uniqueSort(o) : o)
        },
        index(t) {
          return t
            ? typeof t === 'string'
              ? f.call(E(t), this[0])
              : f.call(this, t.jquery ? t[0] : t)
            : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1
        },
        add(t, e) {
          return this.pushStack(E.uniqueSort(E.merge(this.get(), E(t, e))))
        },
        addBack(t) {
          return this.add(t == null ? this.prevObject : this.prevObject.filter(t))
        },
      }),
      E.each(
        {
          parent(t) {
            const e = t.parentNode
            return e && e.nodeType !== 11 ? e : null
          },
          parents(t) {
            return A(t, 'parentNode')
          },
          parentsUntil(t, e, n) {
            return A(t, 'parentNode', n)
          },
          next(t) {
            return H(t, 'nextSibling')
          },
          prev(t) {
            return H(t, 'previousSibling')
          },
          nextAll(t) {
            return A(t, 'nextSibling')
          },
          prevAll(t) {
            return A(t, 'previousSibling')
          },
          nextUntil(t, e, n) {
            return A(t, 'nextSibling', n)
          },
          prevUntil(t, e, n) {
            return A(t, 'previousSibling', n)
          },
          siblings(t) {
            return D((t.parentNode || {}).firstChild, t)
          },
          children(t) {
            return D(t.firstChild)
          },
          contents(t) {
            return void 0 !== t.contentDocument
              ? t.contentDocument
              : (N(t, 'template') && (t = t.content || t), E.merge([], t.childNodes))
          },
        },
        (t, e) => {
          E.fn[t] = function (n, r) {
            let i = E.map(this, e, n)
            return (
              t.slice(-5) !== 'Until' && (r = n),
              r && typeof r === 'string' && (i = E.filter(r, i)),
              this.length > 1 && (P[t] || E.uniqueSort(i), R.test(t) && i.reverse()),
              this.pushStack(i)
            )
          }
        },
      )
      const M = /[^\x20\t\r\n\f]+/g
      function W(t) {
        return t
      }
      function B(t) {
        throw t
      }
      function q(t, e, n, r) {
        let i
        try {
          t && y((i = t.promise))
            ? i.call(t).done(e).fail(n)
            : t && y((i = t.then))
              ? i.call(t, e, n)
              : e.apply(void 0, [t].slice(r))
        } catch (t) {
          n.apply(void 0, [t])
        }
      }
      (E.Callbacks = function (t) {
        t = typeof t === 'string'
          ? (function (t) {
            const e = {}
            return (
              E.each(t.match(M) || [], (t, n) => {
                e[n] = !0
              }),
              e
            )
          }(t))
          : E.extend({}, t)
        let e
        let n
        let r
        let i
        let o = []
        let a = []
        let s = -1
        const u = function () {
          for (i = i || t.once, r = e = !0; a.length; s = -1) for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && t.stopOnFalse && ((s = o.length), (n = !1))
          t.memory || (n = !1), (e = !1), i && (o = n ? [] : '')
        }
        var c = {
          add() {
            return (
              o
                  && (n && !e && ((s = o.length - 1), a.push(n)),
                  (function e(n) {
                    E.each(n, (n, r) => {
                      y(r)
                        ? (t.unique && c.has(r)) || o.push(r)
                        : r && r.length && x(r) !== 'string' && e(r)
                    })
                  }(arguments)),
                  n && !e && u()),
              this
            )
          },
          remove() {
            return (
              E.each(arguments, (t, e) => {
                for (var n; (n = E.inArray(e, o, n)) > -1;) o.splice(n, 1), n <= s && s--
              }),
              this
            )
          },
          has(t) {
            return t ? E.inArray(t, o) > -1 : o.length > 0
          },
          empty() {
            return o && (o = []), this
          },
          disable() {
            return (i = a = []), (o = n = ''), this
          },
          disabled() {
            return !o
          },
          lock() {
            return (i = a = []), n || e || (o = n = ''), this
          },
          locked() {
            return !!i
          },
          fireWith(t, n) {
            return (
              i || ((n = [t, (n = n || []).slice ? n.slice() : n]), a.push(n), e || u()), this
            )
          },
          fire() {
            return c.fireWith(this, arguments), this
          },
          fired() {
            return !!r
          },
        }
        return c
      }),
      E.extend({
        Deferred(t) {
          const e = [
            ['notify', 'progress', E.Callbacks('memory'), E.Callbacks('memory'), 2],
            [
              'resolve',
              'done',
              E.Callbacks('once memory'),
              E.Callbacks('once memory'),
              0,
              'resolved',
            ],
            [
              'reject',
              'fail',
              E.Callbacks('once memory'),
              E.Callbacks('once memory'),
              1,
              'rejected',
            ],
          ]
          let r = 'pending'
          var i = {
            state() {
              return r
            },
            always() {
              return o.done(arguments).fail(arguments), this
            },
            catch(t) {
              return i.then(null, t)
            },
            pipe() {
              let t = arguments
              return E.Deferred((n) => {
                E.each(e, (e, r) => {
                  let i = y(t[r[4]]) && t[r[4]]
                  o[r[1]](function () {
                    let t = i && i.apply(this, arguments)
                    t && y(t.promise)
                      ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject)
                      : n[`${r[0] }With`](this, i ? [t] : arguments)
                  })
                }),
                (t = null)
              }).promise()
            },
            then(t, r, i) {
              let o = 0
              function a(t, e, r, i) {
                return function () {
                  let s = this
                  let u = arguments
                  let c = function () {
                    let n; let
                      c
                    if (!(t < o)) {
                      if ((n = r.apply(s, u)) === e.promise()) throw new TypeError('Thenable self-resolution');
                      (c = n && (typeof n === 'object' || typeof n === 'function') && n.then),
                      y(c)
                        ? i
                          ? c.call(n, a(o, e, W, i), a(o, e, B, i))
                          : (o++,
                          c.call(
                            n,
                            a(o, e, W, i),
                            a(o, e, B, i),
                            a(o, e, W, e.notifyWith),
                          ))
                        : (r !== W && ((s = void 0), (u = [n])), (i || e.resolveWith)(s, u))
                    }
                  }
                  var l = i
                    ? c
                    : function () {
                      try {
                        c()
                      } catch (n) {
                        E.Deferred.exceptionHook
                                  && E.Deferred.exceptionHook(n, l.stackTrace),
                        t + 1 >= o
                                    && (r !== B && ((s = void 0), (u = [n])), e.rejectWith(s, u))
                      }
                    }
                  t
                    ? l()
                    : (E.Deferred.getStackHook && (l.stackTrace = E.Deferred.getStackHook()),
                    n.setTimeout(l))
                }
              }
              return E.Deferred((n) => {
                e[0][3].add(a(0, n, y(i) ? i : W, n.notifyWith)),
                e[1][3].add(a(0, n, y(t) ? t : W)),
                e[2][3].add(a(0, n, y(r) ? r : B))
              }).promise()
            },
            promise(t) {
              return t != null ? E.extend(t, i) : i
            },
          }
          var o = {}
          return (
            E.each(e, (t, n) => {
              const a = n[2]
              const s = n[5];
              (i[n[1]] = a.add),
              s
                    && a.add(
                      () => {
                        r = s
                      },
                      e[3 - t][2].disable,
                      e[3 - t][3].disable,
                      e[0][2].lock,
                      e[0][3].lock,
                    ),
              a.add(n[3].fire),
              (o[n[0]] = function () {
                return o[`${n[0]}With`](this === o ? void 0 : this, arguments), this
              }),
              (o[`${n[0]}With`] = a.fireWith)
            }),
            i.promise(o),
            t && t.call(o, o),
            o
          )
        },
        when(t) {
          let e = arguments.length
          let n = e
          const r = Array(n)
          const i = u.call(arguments)
          const o = E.Deferred()
          const a = function (t) {
            return function (n) {
              (r[t] = this),
              (i[t] = arguments.length > 1 ? u.call(arguments) : n),
              --e || o.resolveWith(r, i)
            }
          }
          if (
            e <= 1
              && (q(t, o.done(a(n)).resolve, o.reject, !e),
              o.state() === 'pending' || y(i[n] && i[n].then))
          ) return o.then()
          for (; n--;) q(i[n], a(n), o.reject)
          return o.promise()
        },
      })
      const F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (E.Deferred.exceptionHook = function (t, e) {
        n.console
          && n.console.warn
          && t
          && F.test(t.name)
          && n.console.warn(`jQuery.Deferred exception: ${t.message}`, t.stack, e)
      }),
      (E.readyException = function (t) {
        n.setTimeout(() => {
          throw t
        })
      })
      const U = E.Deferred()
      function $() {
        a.removeEventListener('DOMContentLoaded', $), n.removeEventListener('load', $), E.ready()
      }
      (E.fn.ready = function (t) {
        return (
          U.then(t).catch((t) => {
            E.readyException(t)
          }),
          this
        )
      }),
      E.extend({
        isReady: !1,
        readyWait: 1,
        ready(t) {
          (!0 === t ? --E.readyWait : E.isReady)
              || ((E.isReady = !0), (!0 !== t && --E.readyWait > 0) || U.resolveWith(a, [E]))
        },
      }),
      (E.ready.then = U.then),
      a.readyState === 'complete' || (a.readyState !== 'loading' && !a.documentElement.doScroll)
        ? n.setTimeout(E.ready)
        : (a.addEventListener('DOMContentLoaded', $), n.addEventListener('load', $))
      var z = function (t, e, n, r, i, o, a) {
        let s = 0
        const u = t.length
        let c = n == null
        if (x(n) === 'object') for (s in ((i = !0), n)) z(t, e, s, n[s], !0, o, a)
        else if (
          void 0 !== r
            && ((i = !0),
            y(r) || (a = !0),
            c
              && (a
                ? (e.call(t, r), (e = null))
                : ((c = e),
                (e = function (t, e, n) {
                  return c.call(E(t), n)
                }))),
            e)
        ) for (; s < u; s++) e(t[s], n, a ? r : r.call(t[s], s, e(t[s], n)))
        return i ? t : c ? e.call(t) : u ? e(t[0], n) : o
      }
      const Q = /^-ms-/
      const K = /-([a-z])/g
      function V(t, e) {
        return e.toUpperCase()
      }
      function Y(t) {
        return t.replace(Q, 'ms-').replace(K, V)
      }
      const X = function (t) {
        return t.nodeType === 1 || t.nodeType === 9 || !+t.nodeType
      }
      function G() {
        this.expando = E.expando + G.uid++
      }
      (G.uid = 1),
      (G.prototype = {
        cache(t) {
          let e = t[this.expando]
          return (
            e
                || ((e = {}),
                X(t)
                  && (t.nodeType
                    ? (t[this.expando] = e)
                    : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))),
            e
          )
        },
        set(t, e, n) {
          let r
          const i = this.cache(t)
          if (typeof e === 'string') i[Y(e)] = n
          else for (r in e) i[Y(r)] = e[r]
          return i
        },
        get(t, e) {
          return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Y(e)]
        },
        access(t, e, n) {
          return void 0 === e || (e && typeof e === 'string' && void 0 === n)
            ? this.get(t, e)
            : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove(t, e) {
          let n
          const r = t[this.expando]
          if (void 0 !== r) {
            if (void 0 !== e) {
              n = (e = Array.isArray(e) ? e.map(Y) : (e = Y(e)) in r ? [e] : e.match(M) || [])
                .length
              for (; n--;) delete r[e[n]]
            }
            (void 0 === e || E.isEmptyObject(r))
                && (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando])
          }
        },
        hasData(t) {
          const e = t[this.expando]
          return void 0 !== e && !E.isEmptyObject(e)
        },
      })
      const J = new G()
      const Z = new G()
      const tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      const et = /[A-Z]/g
      function nt(t, e, n) {
        let r
        if (void 0 === n && t.nodeType === 1) {
          if (
            ((r = `data-${e.replace(et, '-$&').toLowerCase()}`),
            typeof (n = t.getAttribute(r)) === 'string')
          ) {
            try {
              n = (function (t) {
                return (
                  t === 'true'
                  || (t !== 'false'
                    && (t === 'null' ? null : t === `${+t}` ? +t : tt.test(t) ? JSON.parse(t) : t))
                )
              }(n))
            } catch (t) {}
            Z.set(t, e, n)
          } else n = void 0
        }
        return n
      }
      E.extend({
        hasData(t) {
          return Z.hasData(t) || J.hasData(t)
        },
        data(t, e, n) {
          return Z.access(t, e, n)
        },
        removeData(t, e) {
          Z.remove(t, e)
        },
        _data(t, e, n) {
          return J.access(t, e, n)
        },
        _removeData(t, e) {
          J.remove(t, e)
        },
      }),
      E.fn.extend({
        data(t, e) {
          let n
          let r
          let i
          const o = this[0]
          const a = o && o.attributes
          if (void 0 === t) {
            if (this.length && ((i = Z.get(o)), o.nodeType === 1 && !J.get(o, 'hasDataAttrs'))) {
              for (n = a.length; n--;) {
                a[n]
                    && (r = a[n].name).indexOf('data-') === 0
                    && ((r = Y(r.slice(5))), nt(o, r, i[r]))
              }
              J.set(o, 'hasDataAttrs', !0)
            }
            return i
          }
          return typeof t === 'object'
            ? this.each(function () {
              Z.set(this, t)
            })
            : z(
              this,
              function (e) {
                let n
                if (o && void 0 === e) return void 0 !== (n = Z.get(o, t)) || void 0 !== (n = nt(o, t)) ? n : void 0
                this.each(function () {
                  Z.set(this, t, e)
                })
              },
              null,
              e,
              arguments.length > 1,
              null,
              !0,
            )
        },
        removeData(t) {
          return this.each(function () {
            Z.remove(this, t)
          })
        },
      }),
      E.extend({
        queue(t, e, n) {
          let r
          if (t) {
            return (
              (e = `${e || 'fx'}queue`),
              (r = J.get(t, e)),
              n && (!r || Array.isArray(n) ? (r = J.access(t, e, E.makeArray(n))) : r.push(n)),
              r || []
            )
          }
        },
        dequeue(t, e) {
          e = e || 'fx'
          const n = E.queue(t, e)
          let r = n.length
          let i = n.shift()
          const o = E._queueHooks(t, e)
          i === 'inprogress' && ((i = n.shift()), r--),
          i
                && (e === 'fx' && n.unshift('inprogress'),
                delete o.stop,
                i.call(
                  t,
                  () => {
                    E.dequeue(t, e)
                  },
                  o,
                )),
          !r && o && o.empty.fire()
        },
        _queueHooks(t, e) {
          const n = `${e}queueHooks`
          return (
            J.get(t, n)
              || J.access(t, n, {
                empty: E.Callbacks('once memory').add(() => {
                  J.remove(t, [`${e}queue`, n])
                }),
              })
          )
        },
      }),
      E.fn.extend({
        queue(t, e) {
          let n = 2
          return (
            typeof t !== 'string' && ((e = t), (t = 'fx'), n--),
            arguments.length < n
              ? E.queue(this[0], t)
              : void 0 === e
                ? this
                : this.each(function () {
                  const n = E.queue(this, t, e)
                  E._queueHooks(this, t),
                  t === 'fx' && n[0] !== 'inprogress' && E.dequeue(this, t)
                })
          )
        },
        dequeue(t) {
          return this.each(function () {
            E.dequeue(this, t)
          })
        },
        clearQueue(t) {
          return this.queue(t || 'fx', [])
        },
        promise(t, e) {
          let n
          let r = 1
          const i = E.Deferred()
          const o = this
          let a = this.length
          const s = function () {
            --r || i.resolveWith(o, [o])
          }
          for (typeof t !== 'string' && ((e = t), (t = void 0)), t = t || 'fx'; a--;) (n = J.get(o[a], `${t}queueHooks`)) && n.empty && (r++, n.empty.add(s))
          return s(), i.promise(e)
        },
      })
      const rt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      const it = new RegExp(`^(?:([+-])=|)(${rt})([a-z%]*)$`, 'i')
      const ot = ['Top', 'Right', 'Bottom', 'Left']
      const at = a.documentElement
      let st = function (t) {
        return E.contains(t.ownerDocument, t)
      }
      const ut = { composed: !0 }
      at.getRootNode
        && (st = function (t) {
          return E.contains(t.ownerDocument, t) || t.getRootNode(ut) === t.ownerDocument
        })
      const ct = function (t, e) {
        return (
          (t = e || t).style.display === 'none'
            || (t.style.display === '' && st(t) && E.css(t, 'display') === 'none')
        )
      }
      const lt = function (t, e, n, r) {
        let i
        let o
        const a = {}
        for (o in e) (a[o] = t.style[o]), (t.style[o] = e[o])
        for (o in ((i = n.apply(t, r || [])), e)) t.style[o] = a[o]
        return i
      }
      function ft(t, e, n, r) {
        let i
        let o
        let a = 20
        const s = r
          ? function () {
            return r.cur()
          }
          : function () {
            return E.css(t, e, '')
          }
        let u = s()
        let c = (n && n[3]) || (E.cssNumber[e] ? '' : 'px')
        let l = t.nodeType && (E.cssNumber[e] || (c !== 'px' && +u)) && it.exec(E.css(t, e))
        if (l && l[3] !== c) {
          for (u /= 2, c = c || l[3], l = +u || 1; a--;) E.style(t, e, l + c), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), (l /= o);
          (l *= 2), E.style(t, e, l + c), (n = n || [])
        }
        return (
          n
            && ((l = +l || +u || 0),
            (i = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = c), (r.start = l), (r.end = i))),
          i
        )
      }
      const pt = {}
      function dt(t) {
        let e
        const n = t.ownerDocument
        const r = t.nodeName
        let i = pt[r]
        return (
          i
          || ((e = n.body.appendChild(n.createElement(r))),
          (i = E.css(e, 'display')),
          e.parentNode.removeChild(e),
          i === 'none' && (i = 'block'),
          (pt[r] = i),
          i)
        )
      }
      function ht(t, e) {
        for (var n, r, i = [], o = 0, a = t.length; o < a; o++) {
          (r = t[o]).style
            && ((n = r.style.display),
            e
              ? (n === 'none'
                  && ((i[o] = J.get(r, 'display') || null), i[o] || (r.style.display = '')),
              r.style.display === '' && ct(r) && (i[o] = dt(r)))
              : n !== 'none' && ((i[o] = 'none'), J.set(r, 'display', n)))
        }
        for (o = 0; o < a; o++) i[o] != null && (t[o].style.display = i[o])
        return t
      }
      E.fn.extend({
        show() {
          return ht(this, !0)
        },
        hide() {
          return ht(this)
        },
        toggle(t) {
          return typeof t === 'boolean'
            ? t
              ? this.show()
              : this.hide()
            : this.each(function () {
              ct(this) ? E(this).show() : E(this).hide()
            })
        },
      })
      const vt = /^(?:checkbox|radio)$/i
      const gt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
      const mt = /^$|^module$|\/(?:java|ecma)script/i
      const yt = {
        option: [1, "<select multiple='multiple'>", '</select>'],
        thead: [1, '<table>', '</table>'],
        col: [2, '<table><colgroup>', '</colgroup></table>'],
        tr: [2, '<table><tbody>', '</tbody></table>'],
        td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
        _default: [0, '', ''],
      }
      function _t(t, e) {
        let n
        return (
          (n = void 0 !== t.getElementsByTagName
            ? t.getElementsByTagName(e || '*')
            : void 0 !== t.querySelectorAll
              ? t.querySelectorAll(e || '*')
              : []),
          void 0 === e || (e && N(t, e)) ? E.merge([t], n) : n
        )
      }
      function bt(t, e) {
        for (let n = 0, r = t.length; n < r; n++) J.set(t[n], 'globalEval', !e || J.get(e[n], 'globalEval'))
      }
      (yt.optgroup = yt.option),
      (yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead),
      (yt.th = yt.td)
      let wt
      let xt
      const Et = /<|&#?\w+;/
      function Tt(t, e, n, r, i) {
        for (
          var o, a, s, u, c, l, f = e.createDocumentFragment(), p = [], d = 0, h = t.length;
          d < h;
          d++
        ) {
          if ((o = t[d]) || o === 0) {
            if (x(o) === 'object') E.merge(p, o.nodeType ? [o] : o)
            else if (Et.test(o)) {
              for (
                a = a || f.appendChild(e.createElement('div')),
                s = (gt.exec(o) || ['', ''])[1].toLowerCase(),
                u = yt[s] || yt._default,
                a.innerHTML = u[1] + E.htmlPrefilter(o) + u[2],
                l = u[0];
                l--;

              ) a = a.lastChild
              E.merge(p, a.childNodes), ((a = f.firstChild).textContent = '')
            } else p.push(e.createTextNode(o))
          }
        }
        for (f.textContent = '', d = 0; (o = p[d++]);) {
          if (r && E.inArray(o, r) > -1) i && i.push(o)
          else if (((c = st(o)), (a = _t(f.appendChild(o), 'script')), c && bt(a), n)) for (l = 0; (o = a[l++]);) mt.test(o.type || '') && n.push(o)
        }
        return f
      }
      (wt = a.createDocumentFragment().appendChild(a.createElement('div'))),
      (xt = a.createElement('input')).setAttribute('type', 'radio'),
      xt.setAttribute('checked', 'checked'),
      xt.setAttribute('name', 't'),
      wt.appendChild(xt),
      (m.checkClone = wt.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (wt.innerHTML = '<textarea>x</textarea>'),
      (m.noCloneChecked = !!wt.cloneNode(!0).lastChild.defaultValue)
      const Ct = /^key/
      const St = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      const At = /^([^.]*)(?:\.(.+)|)/
      function Dt() {
        return !0
      }
      function kt() {
        return !1
      }
      function Nt(t, e) {
        return (
          (t
            === (function () {
              try {
                return a.activeElement
              } catch (t) {}
            }()))
          == (e === 'focus')
        )
      }
      function Ot(t, e, n, r, i, o) {
        let a; let
          s
        if (typeof e === 'object') {
          for (s in (typeof n !== 'string' && ((r = r || n), (n = void 0)), e)) Ot(t, s, n, r, e[s], o)
          return t
        }
        if (
          (r == null && i == null
            ? ((i = n), (r = n = void 0))
            : i == null
              && (typeof n === 'string' ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))),
          !1 === i)
        ) i = kt
        else if (!i) return t
        return (
          o === 1
            && ((a = i),
            ((i = function (t) {
              return E().off(t), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = E.guid++))),
          t.each(function () {
            E.event.add(this, e, i, r, n)
          })
        )
      }
      function jt(t, e, n) {
        n
          ? (J.set(t, e, !1),
          E.event.add(t, e, {
            namespace: !1,
            handler(t) {
              let r
              let i
              let o = J.get(this, e)
              if (1 & t.isTrigger && this[e]) {
                if (o.length) (E.event.special[e] || {}).delegateType && t.stopPropagation()
                else if (
                  ((o = u.call(arguments)),
                  J.set(this, e, o),
                  (r = n(this, e)),
                  this[e](),
                  o !== (i = J.get(this, e)) || r ? J.set(this, e, !1) : (i = {}),
                  o !== i)
                ) return t.stopImmediatePropagation(), t.preventDefault(), i.value
              } else {
                o.length
                    && (J.set(this, e, {
                      value: E.event.trigger(E.extend(o[0], E.Event.prototype), o.slice(1), this),
                    }),
                    t.stopImmediatePropagation())
              }
            },
          }))
          : void 0 === J.get(t, e) && E.event.add(t, e, Dt)
      }
      (E.event = {
        global: {},
        add(t, e, n, r, i) {
          let o
          let a
          let s
          let u
          let c
          let l
          let f
          let p
          let d
          let h
          let v
          const g = J.get(t)
          if (g) {
            for (
              n.handler && ((n = (o = n).handler), (i = o.selector)),
              i && E.find.matchesSelector(at, i),
              n.guid || (n.guid = E.guid++),
              (u = g.events) || (u = g.events = {}),
              (a = g.handle)
                  || (a = g.handle = function (e) {
                    return void 0 !== E && E.event.triggered !== e.type
                      ? E.event.dispatch.apply(t, arguments)
                      : void 0
                  }),
              c = (e = (e || '').match(M) || ['']).length;
              c--;

            ) {
              (d = v = (s = At.exec(e[c]) || [])[1]),
              (h = (s[2] || '').split('.').sort()),
              d
                  && ((f = E.event.special[d] || {}),
                  (d = (i ? f.delegateType : f.bindType) || d),
                  (f = E.event.special[d] || {}),
                  (l = E.extend(
                    {
                      type: d,
                      origType: v,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: i,
                      needsContext: i && E.expr.match.needsContext.test(i),
                      namespace: h.join('.'),
                    },
                    o,
                  )),
                  (p = u[d])
                    || (((p = u[d] = []).delegateCount = 0),
                    (f.setup && !1 !== f.setup.call(t, r, h, a))
                      || (t.addEventListener && t.addEventListener(d, a))),
                  f.add && (f.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)),
                  i ? p.splice(p.delegateCount++, 0, l) : p.push(l),
                  (E.event.global[d] = !0))
            }
          }
        },
        remove(t, e, n, r, i) {
          let o
          let a
          let s
          let u
          let c
          let l
          let f
          let p
          let d
          let h
          let v
          const g = J.hasData(t) && J.get(t)
          if (g && (u = g.events)) {
            for (c = (e = (e || '').match(M) || ['']).length; c--;) {
              if (
                ((d = v = (s = At.exec(e[c]) || [])[1]), (h = (s[2] || '').split('.').sort()), d)
              ) {
                for (
                  f = E.event.special[d] || {},
                  p = u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                  s = s[2] && new RegExp(`(^|\\.)${h.join('\\.(?:.*\\.|)')}(\\.|$)`),
                  a = o = p.length;
                  o--;

                ) {
                  (l = p[o]),
                  (!i && v !== l.origType)
                      || (n && n.guid !== l.guid)
                      || (s && !s.test(l.namespace))
                      || (r && r !== l.selector && (r !== '**' || !l.selector))
                      || (p.splice(o, 1),
                      l.selector && p.delegateCount--,
                      f.remove && f.remove.call(t, l))
                }
                a
                  && !p.length
                  && ((f.teardown && !1 !== f.teardown.call(t, h, g.handle))
                    || E.removeEvent(t, d, g.handle),
                  delete u[d])
              } else for (d in u) E.event.remove(t, d + e[c], n, r, !0)
            }
            E.isEmptyObject(u) && J.remove(t, 'handle events')
          }
        },
        dispatch(t) {
          let e
          let n
          let r
          let i
          let o
          let a
          const s = E.event.fix(t)
          const u = new Array(arguments.length)
          const c = (J.get(this, 'events') || {})[s.type] || []
          const l = E.event.special[s.type] || {}
          for (u[0] = s, e = 1; e < arguments.length; e++) u[e] = arguments[e]
          if (((s.delegateTarget = this), !l.preDispatch || !1 !== l.preDispatch.call(this, s))) {
            for (
              a = E.event.handlers.call(this, s, c), e = 0;
              (i = a[e++]) && !s.isPropagationStopped();

            ) {
              for (
                s.currentTarget = i.elem, n = 0;
                (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();

              ) {
                (s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace))
                  || ((s.handleObj = o),
                  (s.data = o.data),
                  void 0
                    !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(
                      i.elem,
                      u,
                    ))
                    && !1 === (s.result = r)
                    && (s.preventDefault(), s.stopPropagation()))
              }
            }
            return l.postDispatch && l.postDispatch.call(this, s), s.result
          }
        },
        handlers(t, e) {
          let n
          let r
          let i
          let o
          let a
          const s = []
          const u = e.delegateCount
          let c = t.target
          if (u && c.nodeType && !(t.type === 'click' && t.button >= 1)) {
            for (; c !== this; c = c.parentNode || this) {
              if (c.nodeType === 1 && (t.type !== 'click' || !0 !== c.disabled)) {
                for (o = [], a = {}, n = 0; n < u; n++) {
 void 0 === a[(i = `${(r = e[n]).selector} `)]
                    && (a[i] = r.needsContext
                      ? E(i, this).index(c) > -1
                      : E.find(i, this, null, [c]).length),
                a[i] && o.push(r) 
}
                o.length && s.push({ elem: c, handlers: o })
              }
            }
          }
          return (c = this), u < e.length && s.push({ elem: c, handlers: e.slice(u) }), s
        },
        addProp(t, e) {
          Object.defineProperty(E.Event.prototype, t, {
            enumerable: !0,
            configurable: !0,
            get: y(e)
              ? function () {
                if (this.originalEvent) return e(this.originalEvent)
              }
              : function () {
                if (this.originalEvent) return this.originalEvent[t]
              },
            set(e) {
              Object.defineProperty(this, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              })
            },
          })
        },
        fix(t) {
          return t[E.expando] ? t : new E.Event(t)
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup(t) {
              const e = this || t
              return vt.test(e.type) && e.click && N(e, 'input') && jt(e, 'click', Dt), !1
            },
            trigger(t) {
              const e = this || t
              return vt.test(e.type) && e.click && N(e, 'input') && jt(e, 'click'), !0
            },
            _default(t) {
              const e = t.target
              return (vt.test(e.type) && e.click && N(e, 'input') && J.get(e, 'click')) || N(e, 'a')
            },
          },
          beforeunload: {
            postDispatch(t) {
              void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
            },
          },
        },
      }),
      (E.removeEvent = function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
      }),
      (E.Event = function (t, e) {
        if (!(this instanceof E.Event)) return new E.Event(t, e)
        t && t.type
          ? ((this.originalEvent = t),
          (this.type = t.type),
          (this.isDefaultPrevented = t.defaultPrevented || (void 0 === t.defaultPrevented && !1 === t.returnValue)
            ? Dt
            : kt),
          (this.target = t.target && t.target.nodeType === 3 ? t.target.parentNode : t.target),
          (this.currentTarget = t.currentTarget),
          (this.relatedTarget = t.relatedTarget))
          : (this.type = t),
        e && E.extend(this, e),
        (this.timeStamp = (t && t.timeStamp) || Date.now()),
        (this[E.expando] = !0)
      }),
      (E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: kt,
        isPropagationStopped: kt,
        isImmediatePropagationStopped: kt,
        isSimulated: !1,
        preventDefault() {
          const t = this.originalEvent;
          (this.isDefaultPrevented = Dt), t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation() {
          const t = this.originalEvent;
          (this.isPropagationStopped = Dt), t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation() {
          const t = this.originalEvent;
          (this.isImmediatePropagationStopped = Dt),
          t && !this.isSimulated && t.stopImmediatePropagation(),
          this.stopPropagation()
        },
      }),
      E.each(
        {
          altKey: !0,
          bubbles: !0,
          cancelable: !0,
          changedTouches: !0,
          ctrlKey: !0,
          detail: !0,
          eventPhase: !0,
          metaKey: !0,
          pageX: !0,
          pageY: !0,
          shiftKey: !0,
          view: !0,
          char: !0,
          code: !0,
          charCode: !0,
          key: !0,
          keyCode: !0,
          button: !0,
          buttons: !0,
          clientX: !0,
          clientY: !0,
          offsetX: !0,
          offsetY: !0,
          pointerId: !0,
          pointerType: !0,
          screenX: !0,
          screenY: !0,
          targetTouches: !0,
          toElement: !0,
          touches: !0,
          which(t) {
            const e = t.button
            return t.which == null && Ct.test(t.type)
              ? t.charCode != null
                ? t.charCode
                : t.keyCode
              : !t.which && void 0 !== e && St.test(t.type)
                ? 1 & e
                  ? 1
                  : 2 & e
                    ? 3
                    : 4 & e
                      ? 2
                      : 0
                : t.which
          },
        },
        E.event.addProp,
      ),
      E.each({ focus: 'focusin', blur: 'focusout' }, (t, e) => {
        E.event.special[t] = {
          setup() {
            return jt(this, t, Nt), !1
          },
          trigger() {
            return jt(this, t), !0
          },
          delegateType: e,
        }
      }),
      E.each(
        {
          mouseenter: 'mouseover',
          mouseleave: 'mouseout',
          pointerenter: 'pointerover',
          pointerleave: 'pointerout',
        },
        (t, e) => {
          E.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle(t) {
              let n
              const r = this
              const i = t.relatedTarget
              const o = t.handleObj
              return (
                (i && (i === r || E.contains(r, i)))
                    || ((t.type = o.origType), (n = o.handler.apply(this, arguments)), (t.type = e)),
                n
              )
            },
          }
        },
      ),
      E.fn.extend({
        on(t, e, n, r) {
          return Ot(this, t, e, n, r)
        },
        one(t, e, n, r) {
          return Ot(this, t, e, n, r, 1)
        },
        off(t, e, n) {
          let r; let
            i
          if (t && t.preventDefault && t.handleObj) {
            return (
              (r = t.handleObj),
              E(t.delegateTarget).off(
                r.namespace ? `${r.origType}.${r.namespace}` : r.origType,
                r.selector,
                r.handler,
              ),
              this
            )
          }
          if (typeof t === 'object') {
            for (i in t) this.off(i, e, t[i])
            return this
          }
          return (
            (!1 !== e && typeof e !== 'function') || ((n = e), (e = void 0)),
            !1 === n && (n = kt),
            this.each(function () {
              E.event.remove(this, t, n, e)
            })
          )
        },
      })
      const It = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      const Lt = /<script|<style|<link/i
      const Rt = /checked\s*(?:[^=]|=\s*.checked.)/i
      const Pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      function Ht(t, e) {
        return (
          (N(t, 'table')
            && N(e.nodeType !== 11 ? e : e.firstChild, 'tr')
            && E(t).children('tbody')[0])
          || t
        )
      }
      function Mt(t) {
        return (t.type = `${t.getAttribute('type') !== null}/${t.type}`), t
      }
      function Wt(t) {
        return (
          (t.type || '').slice(0, 5) === 'true/'
            ? (t.type = t.type.slice(5))
            : t.removeAttribute('type'),
          t
        )
      }
      function Bt(t, e) {
        let n; let r; let i; let o; let a; let s; let u; let
          c
        if (e.nodeType === 1) {
          if (J.hasData(t) && ((o = J.access(t)), (a = J.set(e, o)), (c = o.events))) for (i in (delete a.handle, (a.events = {}), c)) for (n = 0, r = c[i].length; n < r; n++) E.event.add(e, i, c[i][n])
          Z.hasData(t) && ((s = Z.access(t)), (u = E.extend({}, s)), Z.set(e, u))
        }
      }
      function qt(t, e) {
        const n = e.nodeName.toLowerCase()
        n === 'input' && vt.test(t.type)
          ? (e.checked = t.checked)
          : (n !== 'input' && n !== 'textarea') || (e.defaultValue = t.defaultValue)
      }
      function Ft(t, e, n, r) {
        e = c.apply([], e)
        let i
        let o
        let a
        let s
        let u
        let l
        let f = 0
        const p = t.length
        const d = p - 1
        const h = e[0]
        const v = y(h)
        if (v || (p > 1 && typeof h === 'string' && !m.checkClone && Rt.test(h))) {
          return t.each(function (i) {
            const o = t.eq(i)
            v && (e[0] = h.call(this, i, o.html())), Ft(o, e, n, r)
          })
        }
        if (
          p
          && ((o = (i = Tt(e, t[0].ownerDocument, !1, t, r)).firstChild),
          i.childNodes.length === 1 && (i = o),
          o || r)
        ) {
          for (s = (a = E.map(_t(i, 'script'), Mt)).length; f < p; f++) {
            (u = i),
            f !== d && ((u = E.clone(u, !0, !0)), s && E.merge(a, _t(u, 'script'))),
            n.call(t[f], u, f)
          }
          if (s) {
            for (l = a[a.length - 1].ownerDocument, E.map(a, Wt), f = 0; f < s; f++) {
              (u = a[f]),
              mt.test(u.type || '')
                  && !J.access(u, 'globalEval')
                  && E.contains(l, u)
                  && (u.src && (u.type || '').toLowerCase() !== 'module'
                    ? E._evalUrl
                      && !u.noModule
                      && E._evalUrl(u.src, { nonce: u.nonce || u.getAttribute('nonce') })
                    : w(u.textContent.replace(Pt, ''), u, l))
            }
          }
        }
        return t
      }
      function Ut(t, e, n) {
        for (var r, i = e ? E.filter(e, t) : t, o = 0; (r = i[o]) != null; o++) {
          n || r.nodeType !== 1 || E.cleanData(_t(r)),
          r.parentNode && (n && st(r) && bt(_t(r, 'script')), r.parentNode.removeChild(r))
        }
        return t
      }
      E.extend({
        htmlPrefilter(t) {
          return t.replace(It, '<$1></$2>')
        },
        clone(t, e, n) {
          let r
          let i
          let o
          let a
          const s = t.cloneNode(!0)
          const u = st(t)
          if (!(m.noCloneChecked || (t.nodeType !== 1 && t.nodeType !== 11) || E.isXMLDoc(t))) for (a = _t(s), r = 0, i = (o = _t(t)).length; r < i; r++) qt(o[r], a[r])
          if (e) {
            if (n) for (o = o || _t(t), a = a || _t(s), r = 0, i = o.length; r < i; r++) Bt(o[r], a[r])
            else Bt(t, s)
          }
          return (a = _t(s, 'script')).length > 0 && bt(a, !u && _t(t, 'script')), s
        },
        cleanData(t) {
          for (var e, n, r, i = E.event.special, o = 0; void 0 !== (n = t[o]); o++) {
            if (X(n)) {
              if ((e = n[J.expando])) {
                if (e.events) for (r in e.events) i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, e.handle)
                n[J.expando] = void 0
              }
              n[Z.expando] && (n[Z.expando] = void 0)
            }
          }
        },
      }),
      E.fn.extend({
        detach(t) {
          return Ut(this, t, !0)
        },
        remove(t) {
          return Ut(this, t)
        },
        text(t) {
          return z(
            this,
            function (t) {
              return void 0 === t
                ? E.text(this)
                : this.empty().each(function () {
                  (this.nodeType !== 1 && this.nodeType !== 11 && this.nodeType !== 9)
                        || (this.textContent = t)
                })
            },
            null,
            t,
            arguments.length,
          )
        },
        append() {
          return Ft(this, arguments, function (t) {
            (this.nodeType !== 1 && this.nodeType !== 11 && this.nodeType !== 9)
                || Ht(this, t).appendChild(t)
          })
        },
        prepend() {
          return Ft(this, arguments, function (t) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              const e = Ht(this, t)
              e.insertBefore(t, e.firstChild)
            }
          })
        },
        before() {
          return Ft(this, arguments, function (t) {
            this.parentNode && this.parentNode.insertBefore(t, this)
          })
        },
        after() {
          return Ft(this, arguments, function (t) {
            this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
          })
        },
        empty() {
          for (var t, e = 0; (t = this[e]) != null; e++) t.nodeType === 1 && (E.cleanData(_t(t, !1)), (t.textContent = ''))
          return this
        },
        clone(t, e) {
          return (
            (t = t != null && t),
            (e = e == null ? t : e),
            this.map(function () {
              return E.clone(this, t, e)
            })
          )
        },
        html(t) {
          return z(
            this,
            function (t) {
              let e = this[0] || {}
              let n = 0
              const r = this.length
              if (void 0 === t && e.nodeType === 1) return e.innerHTML
              if (
                typeof t === 'string'
                  && !Lt.test(t)
                  && !yt[(gt.exec(t) || ['', ''])[1].toLowerCase()]
              ) {
                t = E.htmlPrefilter(t)
                try {
                  for (; n < r; n++) {
                    (e = this[n] || {}).nodeType === 1
                        && (E.cleanData(_t(e, !1)), (e.innerHTML = t))
                  }
                  e = 0
                } catch (t) {}
              }
              e && this.empty().append(t)
            },
            null,
            t,
            arguments.length,
          )
        },
        replaceWith() {
          const t = []
          return Ft(
            this,
            arguments,
            function (e) {
              const n = this.parentNode
              E.inArray(this, t) < 0 && (E.cleanData(_t(this)), n && n.replaceChild(e, this))
            },
            t,
          )
        },
      }),
      E.each(
        {
          appendTo: 'append',
          prependTo: 'prepend',
          insertBefore: 'before',
          insertAfter: 'after',
          replaceAll: 'replaceWith',
        },
        (t, e) => {
          E.fn[t] = function (t) {
            for (var n, r = [], i = E(t), o = i.length - 1, a = 0; a <= o; a++) (n = a === o ? this : this.clone(!0)), E(i[a])[e](n), l.apply(r, n.get())
            return this.pushStack(r)
          }
        },
      )
      const $t = new RegExp(`^(${rt})(?!px)[a-z%]+$`, 'i')
      const zt = function (t) {
        let e = t.ownerDocument.defaultView
        return (e && e.opener) || (e = n), e.getComputedStyle(t)
      }
      const Qt = new RegExp(ot.join('|'), 'i')
      function Kt(t, e, n) {
        let r
        let i
        let o
        let a
        const s = t.style
        return (
          (n = n || zt(t))
            && ((a = n.getPropertyValue(e) || n[e]) !== '' || st(t) || (a = E.style(t, e)),
            !m.pixelBoxStyles()
              && $t.test(a)
              && Qt.test(e)
              && ((r = s.width),
              (i = s.minWidth),
              (o = s.maxWidth),
              (s.minWidth = s.maxWidth = s.width = a),
              (a = n.width),
              (s.width = r),
              (s.minWidth = i),
              (s.maxWidth = o))),
          void 0 !== a ? `${a}` : a
        )
      }
      function Vt(t, e) {
        return {
          get() {
            if (!t()) return (this.get = e).apply(this, arguments)
            delete this.get
          },
        }
      }
      !(function () {
        function t() {
          if (l) {
            (c.style.cssText = 'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
            (l.style.cssText = 'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
            at.appendChild(c).appendChild(l)
            const t = n.getComputedStyle(l);
            (r = t.top !== '1%'),
            (u = e(t.marginLeft) === 12),
            (l.style.right = '60%'),
            (s = e(t.right) === 36),
            (i = e(t.width) === 36),
            (l.style.position = 'absolute'),
            (o = e(l.offsetWidth / 3) === 12),
            at.removeChild(c),
            (l = null)
          }
        }
        function e(t) {
          return Math.round(parseFloat(t))
        }
        let r
        let i
        let o
        let s
        let u
        var c = a.createElement('div')
        var l = a.createElement('div')
        l.style
          && ((l.style.backgroundClip = 'content-box'),
          (l.cloneNode(!0).style.backgroundClip = ''),
          (m.clearCloneStyle = l.style.backgroundClip === 'content-box'),
          E.extend(m, {
            boxSizingReliable() {
              return t(), i
            },
            pixelBoxStyles() {
              return t(), s
            },
            pixelPosition() {
              return t(), r
            },
            reliableMarginLeft() {
              return t(), u
            },
            scrollboxSize() {
              return t(), o
            },
          }))
      }())
      const Yt = ['Webkit', 'Moz', 'ms']
      const Xt = a.createElement('div').style
      const Gt = {}
      function Jt(t) {
        const e = E.cssProps[t] || Gt[t]
        return (
          e
          || (t in Xt
            ? t
            : (Gt[t] = (function (t) {
              for (let e = t[0].toUpperCase() + t.slice(1), n = Yt.length; n--;) if ((t = Yt[n] + e) in Xt) return t
            }(t)) || t))
        )
      }
      const Zt = /^(none|table(?!-c[ea]).+)/
      const te = /^--/
      const ee = { position: 'absolute', visibility: 'hidden', display: 'block' }
      const ne = { letterSpacing: '0', fontWeight: '400' }
      function re(t, e, n) {
        const r = it.exec(e)
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : e
      }
      function ie(t, e, n, r, i, o) {
        let a = e === 'width' ? 1 : 0
        let s = 0
        let u = 0
        if (n === (r ? 'border' : 'content')) return 0
        for (; a < 4; a += 2) {
          n === 'margin' && (u += E.css(t, n + ot[a], !0, i)),
          r
            ? (n === 'content' && (u -= E.css(t, `padding${ot[a]}`, !0, i)),
            n !== 'margin' && (u -= E.css(t, `border${ot[a]}Width`, !0, i)))
            : ((u += E.css(t, `padding${ot[a]}`, !0, i)),
            n !== 'padding'
              ? (u += E.css(t, `border${ot[a]}Width`, !0, i))
              : (s += E.css(t, `border${ot[a]}Width`, !0, i)))
        }
        return (
          !r
            && o >= 0
            && (u
              += Math.max(
                0,
                Math.ceil(t[`offset${e[0].toUpperCase()}${e.slice(1)}`] - o - u - s - 0.5),
              ) || 0),
          u
        )
      }
      function oe(t, e, n) {
        const r = zt(t)
        let i = (!m.boxSizingReliable() || n) && E.css(t, 'boxSizing', !1, r) === 'border-box'
        let o = i
        let a = Kt(t, e, r)
        const s = `offset${e[0].toUpperCase()}${e.slice(1)}`
        if ($t.test(a)) {
          if (!n) return a
          a = 'auto'
        }
        return (
          ((!m.boxSizingReliable() && i)
            || a === 'auto'
            || (!parseFloat(a) && E.css(t, 'display', !1, r) === 'inline'))
            && t.getClientRects().length
            && ((i = E.css(t, 'boxSizing', !1, r) === 'border-box'), (o = s in t) && (a = t[s])),
          `${(a = parseFloat(a) || 0) + ie(t, e, n || (i ? 'border' : 'content'), o, r, a)}px`
        )
      }
      function ae(t, e, n, r, i) {
        return new ae.prototype.init(t, e, n, r, i)
      }
      E.extend({
        cssHooks: {
          opacity: {
            get(t, e) {
              if (e) {
                const n = Kt(t, 'opacity')
                return n === '' ? '1' : n
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style(t, e, n, r) {
          if (t && t.nodeType !== 3 && t.nodeType !== 8 && t.style) {
            let i
            let o
            let a
            const s = Y(e)
            const u = te.test(e)
            const c = t.style
            if ((u || (e = Jt(s)), (a = E.cssHooks[e] || E.cssHooks[s]), void 0 === n)) {
              return a && 'get' in a && void 0 !== (i = a.get(t, !1, r)) ? i : c[e](o = typeof n) === 'string'
              && (i = it.exec(n))
              && i[1]
              && ((n = ft(t, e, i)), (o = 'number')),
              n != null
                && n == n
                && (o !== 'number' || u || (n += (i && i[3]) || (E.cssNumber[s] ? '' : 'px')),
                m.clearCloneStyle
                  || n !== ''
                  || e.indexOf('background') !== 0
                  || (c[e] = 'inherit'),
                (a && 'set' in a && void 0 === (n = a.set(t, n, r)))
                  || (u ? c.setProperty(e, n) : (c[e] = n)))
            }
          }
        },
        css(t, e, n, r) {
          let i
          let o
          let a
          const s = Y(e)
          return (
            te.test(e) || (e = Jt(s)),
            (a = E.cssHooks[e] || E.cssHooks[s]) && 'get' in a && (i = a.get(t, !0, n)),
            void 0 === i && (i = Kt(t, e, r)),
            i === 'normal' && e in ne && (i = ne[e]),
            n === '' || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
          )
        },
      }),
      E.each(['height', 'width'], (t, e) => {
        E.cssHooks[e] = {
          get(t, n, r) {
            if (n) {
              return !Zt.test(E.css(t, 'display'))
                  || (t.getClientRects().length && t.getBoundingClientRect().width)
                ? oe(t, e, r)
                : lt(t, ee, () => oe(t, e, r))
            }
          },
          set(t, n, r) {
            let i
            const o = zt(t)
            const a = !m.scrollboxSize() && o.position === 'absolute'
            const s = (a || r) && E.css(t, 'boxSizing', !1, o) === 'border-box'
            let u = r ? ie(t, e, r, s, o) : 0
            return (
              s
                  && a
                  && (u -= Math.ceil(
                    t[`offset${e[0].toUpperCase()}${e.slice(1)}`]
                      - parseFloat(o[e])
                      - ie(t, e, 'border', !1, o)
                      - 0.5,
                  )),
              u
                  && (i = it.exec(n))
                  && (i[3] || 'px') !== 'px'
                  && ((t.style[e] = n), (n = E.css(t, e))),
              re(0, n, u)
            )
          },
        }
      }),
      (E.cssHooks.marginLeft = Vt(m.reliableMarginLeft, (t, e) => {
        if (e) {
          return (
            `${parseFloat(Kt(t, 'marginLeft'))
                || t.getBoundingClientRect().left
                  - lt(t, { marginLeft: 0 }, () => t.getBoundingClientRect().left)}px`
          )
        }
      })),
      E.each({ margin: '', padding: '', border: 'Width' }, (t, e) => {
        (E.cssHooks[t + e] = {
          expand(n) {
            for (var r = 0, i = {}, o = typeof n === 'string' ? n.split(' ') : [n]; r < 4; r++) i[t + ot[r] + e] = o[r] || o[r - 2] || o[0]
            return i
          },
        }),
        t !== 'margin' && (E.cssHooks[t + e].set = re)
      }),
      E.fn.extend({
        css(t, e) {
          return z(
            this,
            (t, e, n) => {
              let r
              let i
              const o = {}
              let a = 0
              if (Array.isArray(e)) {
                for (r = zt(t), i = e.length; a < i; a++) o[e[a]] = E.css(t, e[a], !1, r)
                return o
              }
              return void 0 !== n ? E.style(t, e, n) : E.css(t, e)
            },
            t,
            e,
            arguments.length > 1,
          )
        },
      }),
      (E.Tween = ae),
      (ae.prototype = {
        constructor: ae,
        init(t, e, n, r, i, o) {
          (this.elem = t),
          (this.prop = n),
          (this.easing = i || E.easing._default),
          (this.options = e),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (E.cssNumber[n] ? '' : 'px'))
        },
        cur() {
          const t = ae.propHooks[this.prop]
          return t && t.get ? t.get(this) : ae.propHooks._default.get(this)
        },
        run(t) {
          let e
          const n = ae.propHooks[this.prop]
          return (
            this.options.duration
              ? (this.pos = e = E.easing[this.easing](
                t,
                this.options.duration * t,
                0,
                1,
                this.options.duration,
              ))
              : (this.pos = e = t),
            (this.now = (this.end - this.start) * e + this.start),
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : ae.propHooks._default.set(this),
            this
          )
        },
      }),
      (ae.prototype.init.prototype = ae.prototype),
      (ae.propHooks = {
        _default: {
          get(t) {
            let e
            return t.elem.nodeType !== 1
                || (t.elem[t.prop] != null && t.elem.style[t.prop] == null)
              ? t.elem[t.prop]
              : (e = E.css(t.elem, t.prop, '')) && e !== 'auto'
                ? e
                : 0
          },
          set(t) {
            E.fx.step[t.prop]
              ? E.fx.step[t.prop](t)
              : t.elem.nodeType !== 1 || (!E.cssHooks[t.prop] && t.elem.style[Jt(t.prop)] == null)
                ? (t.elem[t.prop] = t.now)
                : E.style(t.elem, t.prop, t.now + t.unit)
          },
        },
      }),
      (ae.propHooks.scrollTop = ae.propHooks.scrollLeft = {
        set(t) {
          t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        },
      }),
      (E.easing = {
        linear(t) {
          return t
        },
        swing(t) {
          return 0.5 - Math.cos(t * Math.PI) / 2
        },
        _default: 'swing',
      }),
      (E.fx = ae.prototype.init),
      (E.fx.step = {})
      let se
      let ue
      const ce = /^(?:toggle|show|hide)$/
      const le = /queueHooks$/
      function fe() {
        ue
          && (!1 === a.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(fe)
            : n.setTimeout(fe, E.fx.interval),
          E.fx.tick())
      }
      function pe() {
        return (
          n.setTimeout(() => {
            se = void 0
          }),
          (se = Date.now())
        )
      }
      function de(t, e) {
        let n
        let r = 0
        const i = { height: t }
        for (e = e ? 1 : 0; r < 4; r += 2 - e) i[`margin${n = ot[r]}`] = i[`padding${n}`] = t
        return e && (i.opacity = i.width = t), i
      }
      function he(t, e, n) {
        for (
          var r, i = (ve.tweeners[e] || []).concat(ve.tweeners['*']), o = 0, a = i.length;
          o < a;
          o++
        ) if ((r = i[o].call(n, e, t))) return r
      }
      function ve(t, e, n) {
        let r
        let i
        let o = 0
        const a = ve.prefilters.length
        const s = E.Deferred().always(() => {
          delete u.elem
        })
        var u = function () {
          if (i) return !1
          for (
            var e = se || pe(),
              n = Math.max(0, c.startTime + c.duration - e),
              r = 1 - (n / c.duration || 0),
              o = 0,
              a = c.tweens.length;
            o < a;
            o++
          ) c.tweens[o].run(r)
          return (
            s.notifyWith(t, [c, r, n]),
            r < 1 && a ? n : (a || s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c]), !1)
          )
        }
        var c = s.promise({
          elem: t,
          props: E.extend({}, e),
          opts: E.extend(!0, { specialEasing: {}, easing: E.easing._default }, n),
          originalProperties: e,
          originalOptions: n,
          startTime: se || pe(),
          duration: n.duration,
          tweens: [],
          createTween(e, n) {
            const r = E.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing)
            return c.tweens.push(r), r
          },
          stop(e) {
            let n = 0
            const r = e ? c.tweens.length : 0
            if (i) return this
            for (i = !0; n < r; n++) c.tweens[n].run(1)
            return (
              e
                ? (s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c, e]))
                : s.rejectWith(t, [c, e]),
              this
            )
          },
        })
        const l = c.props
        for (
          !(function (t, e) {
            let n; let r; let i; let o; let
              a
            for (n in t) {
              if (
                ((i = e[(r = Y(n))]),
                (o = t[n]),
                Array.isArray(o) && ((i = o[1]), (o = t[n] = o[0])),
                n !== r && ((t[r] = o), delete t[n]),
                (a = E.cssHooks[r]) && ('expand' in a))
              ) for (n in ((o = a.expand(o)), delete t[r], o)) (n in t) || ((t[n] = o[n]), (e[n] = i))
              else e[r] = i
            }
          }(l, c.opts.specialEasing));
          o < a;
          o++
        ) if ((r = ve.prefilters[o].call(c, t, l, c.opts))) return y(r.stop) && (E._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), r
        return (
          E.map(l, he, c),
          y(c.opts.start) && c.opts.start.call(t, c),
          c
            .progress(c.opts.progress)
            .done(c.opts.done, c.opts.complete)
            .fail(c.opts.fail)
            .always(c.opts.always),
          E.fx.timer(E.extend(u, { elem: t, anim: c, queue: c.opts.queue })),
          c
        )
      }
      (E.Animation = E.extend(ve, {
        tweeners: {
          '*': [
            function (t, e) {
              const n = this.createTween(t, e)
              return ft(n.elem, t, it.exec(e), n), n
            },
          ],
        },
        tweener(t, e) {
          y(t) ? ((e = t), (t = ['*'])) : (t = t.match(M))
          for (var n, r = 0, i = t.length; r < i; r++) (n = t[r]), (ve.tweeners[n] = ve.tweeners[n] || []), ve.tweeners[n].unshift(e)
        },
        prefilters: [
          function (t, e, n) {
            let r
            let i
            let o
            let a
            let s
            let u
            let c
            let l
            const f = 'width' in e || 'height' in e
            const p = this
            const d = {}
            const h = t.style
            let v = t.nodeType && ct(t)
            let g = J.get(t, 'fxshow')
            for (r in (n.queue
              || ((a = E._queueHooks(t, 'fx')).unqueued == null
                && ((a.unqueued = 0),
                (s = a.empty.fire),
                (a.empty.fire = function () {
                  a.unqueued || s()
                })),
              a.unqueued++,
              p.always(() => {
                p.always(() => {
                  a.unqueued--, E.queue(t, 'fx').length || a.empty.fire()
                })
              })),
            e)) {
              if (((i = e[r]), ce.test(i))) {
                if ((delete e[r], (o = o || i === 'toggle'), i === (v ? 'hide' : 'show'))) {
                  if (i !== 'show' || !g || void 0 === g[r]) continue
                  v = !0
                }
                d[r] = (g && g[r]) || E.style(t, r)
              }
            }
            if ((u = !E.isEmptyObject(e)) || !E.isEmptyObject(d)) {
              for (r in (f
                && t.nodeType === 1
                && ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                (c = g && g.display) == null && (c = J.get(t, 'display')),
                (l = E.css(t, 'display')) === 'none'
                  && (c
                    ? (l = c)
                    : (ht([t], !0),
                    (c = t.style.display || c),
                    (l = E.css(t, 'display')),
                    ht([t]))),
                (l === 'inline' || (l === 'inline-block' && c != null))
                  && E.css(t, 'float') === 'none'
                  && (u
                    || (p.done(() => {
                      h.display = c
                    }),
                    c == null && ((l = h.display), (c = l === 'none' ? '' : l))),
                  (h.display = 'inline-block'))),
              n.overflow
                && ((h.overflow = 'hidden'),
                p.always(() => {
                  (h.overflow = n.overflow[0]),
                  (h.overflowX = n.overflow[1]),
                  (h.overflowY = n.overflow[2])
                })),
              (u = !1),
              d)) {
                u
                  || (g
                    ? 'hidden' in g && (v = g.hidden)
                    : (g = J.access(t, 'fxshow', { display: c })),
                  o && (g.hidden = !v),
                  v && ht([t], !0),
                  p.done(() => {
                    for (r in (v || ht([t]), J.remove(t, 'fxshow'), d)) E.style(t, r, d[r])
                  })),
                (u = he(v ? g[r] : 0, r, p)),
                r in g || ((g[r] = u.start), v && ((u.end = u.start), (u.start = 0)))
              }
            }
          },
        ],
        prefilter(t, e) {
          e ? ve.prefilters.unshift(t) : ve.prefilters.push(t)
        },
      })),
      (E.speed = function (t, e, n) {
        const r = t && typeof t === 'object'
          ? E.extend({}, t)
          : {
            complete: n || (!n && e) || (y(t) && t),
            duration: t,
            easing: (n && e) || (e && !y(e) && e),
          }
        return (
          E.fx.off
            ? (r.duration = 0)
            : typeof r.duration !== 'number'
                && (r.duration in E.fx.speeds
                  ? (r.duration = E.fx.speeds[r.duration])
                  : (r.duration = E.fx.speeds._default)),
          (r.queue != null && !0 !== r.queue) || (r.queue = 'fx'),
          (r.old = r.complete),
          (r.complete = function () {
            y(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue)
          }),
          r
        )
      }),
      E.fn.extend({
        fadeTo(t, e, n, r) {
          return this.filter(ct).css('opacity', 0).show().end()
            .animate({ opacity: e }, t, n, r)
        },
        animate(t, e, n, r) {
          const i = E.isEmptyObject(t)
          const o = E.speed(e, n, r)
          const a = function () {
            const e = ve(this, E.extend({}, t), o);
            (i || J.get(this, 'finish')) && e.stop(!0)
          }
          return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop(t, e, n) {
          const r = function (t) {
            const e = t.stop
            delete t.stop, e(n)
          }
          return (
            typeof t !== 'string' && ((n = e), (e = t), (t = void 0)),
            e && !1 !== t && this.queue(t || 'fx', []),
            this.each(function () {
              let e = !0
              let i = t != null && `${t}queueHooks`
              const o = E.timers
              const a = J.get(this)
              if (i) a[i] && a[i].stop && r(a[i])
              else for (i in a) a[i] && a[i].stop && le.test(i) && r(a[i])
              for (i = o.length; i--;) {
                o[i].elem !== this
                    || (t != null && o[i].queue !== t)
                    || (o[i].anim.stop(n), (e = !1), o.splice(i, 1))
              }
              (!e && n) || E.dequeue(this, t)
            })
          )
        },
        finish(t) {
          return (
            !1 !== t && (t = t || 'fx'),
            this.each(function () {
              let e
              const n = J.get(this)
              const r = n[`${t}queue`]
              const i = n[`${t}queueHooks`]
              const o = E.timers
              const a = r ? r.length : 0
              for (
                n.finish = !0,
                E.queue(this, t, []),
                i && i.stop && i.stop.call(this, !0),
                e = o.length;
                e--;

              ) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1))
              for (e = 0; e < a; e++) r[e] && r[e].finish && r[e].finish.call(this)
              delete n.finish
            })
          )
        },
      }),
      E.each(['toggle', 'show', 'hide'], (t, e) => {
        const n = E.fn[e]
        E.fn[e] = function (t, r, i) {
          return t == null || typeof t === 'boolean'
            ? n.apply(this, arguments)
            : this.animate(de(e, !0), t, r, i)
        }
      }),
      E.each(
        {
          slideDown: de('show'),
          slideUp: de('hide'),
          slideToggle: de('toggle'),
          fadeIn: { opacity: 'show' },
          fadeOut: { opacity: 'hide' },
          fadeToggle: { opacity: 'toggle' },
        },
        (t, e) => {
          E.fn[t] = function (t, n, r) {
            return this.animate(e, t, n, r)
          }
        },
      ),
      (E.timers = []),
      (E.fx.tick = function () {
        let t
        let e = 0
        const n = E.timers
        for (se = Date.now(); e < n.length; e++) (t = n[e])() || n[e] !== t || n.splice(e--, 1)
        n.length || E.fx.stop(), (se = void 0)
      }),
      (E.fx.timer = function (t) {
        E.timers.push(t), E.fx.start()
      }),
      (E.fx.interval = 13),
      (E.fx.start = function () {
        ue || ((ue = !0), fe())
      }),
      (E.fx.stop = function () {
        ue = null
      }),
      (E.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (E.fn.delay = function (t, e) {
        return (
          (t = (E.fx && E.fx.speeds[t]) || t),
          (e = e || 'fx'),
          this.queue(e, (e, r) => {
            const i = n.setTimeout(e, t)
            r.stop = function () {
              n.clearTimeout(i)
            }
          })
        )
      }),
      (function () {
        let t = a.createElement('input')
        const e = a.createElement('select').appendChild(a.createElement('option'));
        (t.type = 'checkbox'),
        (m.checkOn = t.value !== ''),
        (m.optSelected = e.selected),
        ((t = a.createElement('input')).value = 't'),
        (t.type = 'radio'),
        (m.radioValue = t.value === 't')
      }())
      let ge
      const me = E.expr.attrHandle
      E.fn.extend({
        attr(t, e) {
          return z(this, E.attr, t, e, arguments.length > 1)
        },
        removeAttr(t) {
          return this.each(function () {
            E.removeAttr(this, t)
          })
        },
      }),
      E.extend({
        attr(t, e, n) {
          let r
          let i
          const o = t.nodeType
          if (o !== 3 && o !== 8 && o !== 2) {
            return void 0 === t.getAttribute
              ? E.prop(t, e, n)
              : ((o === 1 && E.isXMLDoc(t))
                    || (i = E.attrHooks[e.toLowerCase()] || (E.expr.match.bool.test(e) ? ge : void 0)),
              void 0 !== n
                ? n === null
                  ? void E.removeAttr(t, e)
                  : i && 'set' in i && void 0 !== (r = i.set(t, n, e))
                    ? r
                    : (t.setAttribute(e, `${n}`), n)
                : i && 'get' in i && (r = i.get(t, e)) !== null
                  ? r
                  : (r = E.find.attr(t, e)) == null
                    ? void 0
                    : r)
          }
        },
        attrHooks: {
          type: {
            set(t, e) {
              if (!m.radioValue && e === 'radio' && N(t, 'input')) {
                const n = t.value
                return t.setAttribute('type', e), n && (t.value = n), e
              }
            },
          },
        },
        removeAttr(t, e) {
          let n
          let r = 0
          const i = e && e.match(M)
          if (i && t.nodeType === 1) for (; (n = i[r++]);) t.removeAttribute(n)
        },
      }),
      (ge = {
        set(t, e, n) {
          return !1 === e ? E.removeAttr(t, n) : t.setAttribute(n, n), n
        },
      }),
      E.each(E.expr.match.bool.source.match(/\w+/g), (t, e) => {
        const n = me[e] || E.find.attr
        me[e] = function (t, e, r) {
          let i
          let o
          const a = e.toLowerCase()
          return (
            r || ((o = me[a]), (me[a] = i), (i = n(t, e, r) != null ? a : null), (me[a] = o)), i
          )
        }
      })
      const ye = /^(?:input|select|textarea|button)$/i
      const _e = /^(?:a|area)$/i
      function be(t) {
        return (t.match(M) || []).join(' ')
      }
      function we(t) {
        return (t.getAttribute && t.getAttribute('class')) || ''
      }
      function xe(t) {
        return Array.isArray(t) ? t : (typeof t === 'string' && t.match(M)) || []
      }
      E.fn.extend({
        prop(t, e) {
          return z(this, E.prop, t, e, arguments.length > 1)
        },
        removeProp(t) {
          return this.each(function () {
            delete this[E.propFix[t] || t]
          })
        },
      }),
      E.extend({
        prop(t, e, n) {
          let r
          let i
          const o = t.nodeType
          if (o !== 3 && o !== 8 && o !== 2) {
            return (
              (o === 1 && E.isXMLDoc(t)) || ((e = E.propFix[e] || e), (i = E.propHooks[e])),
              void 0 !== n
                ? i && 'set' in i && void 0 !== (r = i.set(t, n, e))
                  ? r
                  : (t[e] = n)
                : i && 'get' in i && (r = i.get(t, e)) !== null
                  ? r
                  : t[e]
            )
          }
        },
        propHooks: {
          tabIndex: {
            get(t) {
              const e = E.find.attr(t, 'tabindex')
              return e
                ? parseInt(e, 10)
                : ye.test(t.nodeName) || (_e.test(t.nodeName) && t.href)
                  ? 0
                  : -1
            },
          },
        },
        propFix: { for: 'htmlFor', class: 'className' },
      }),
      m.optSelected
          || (E.propHooks.selected = {
            get(t) {
              const e = t.parentNode
              return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set(t) {
              const e = t.parentNode
              e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            },
          }),
      E.each(
        [
          'tabIndex',
          'readOnly',
          'maxLength',
          'cellSpacing',
          'cellPadding',
          'rowSpan',
          'colSpan',
          'useMap',
          'frameBorder',
          'contentEditable',
        ],
        function () {
          E.propFix[this.toLowerCase()] = this
        },
      ),
      E.fn.extend({
        addClass(t) {
          let e
          let n
          let r
          let i
          let o
          let a
          let s
          let u = 0
          if (y(t)) {
            return this.each(function (e) {
              E(this).addClass(t.call(this, e, we(this)))
            })
          }
          if ((e = xe(t)).length) {
            for (; (n = this[u++]);) {
              if (((i = we(n)), (r = n.nodeType === 1 && ` ${be(i)} `))) {
                for (a = 0; (o = e[a++]);) r.indexOf(` ${o} `) < 0 && (r += `${o} `)
                i !== (s = be(r)) && n.setAttribute('class', s)
              }
            }
          }
          return this
        },
        removeClass(t) {
          let e
          let n
          let r
          let i
          let o
          let a
          let s
          let u = 0
          if (y(t)) {
            return this.each(function (e) {
              E(this).removeClass(t.call(this, e, we(this)))
            })
          }
          if (!arguments.length) return this.attr('class', '')
          if ((e = xe(t)).length) {
            for (; (n = this[u++]);) {
              if (((i = we(n)), (r = n.nodeType === 1 && ` ${be(i)} `))) {
                for (a = 0; (o = e[a++]);) for (; r.indexOf(` ${o} `) > -1;) r = r.replace(` ${o} `, ' ')
                i !== (s = be(r)) && n.setAttribute('class', s)
              }
            }
          }
          return this
        },
        toggleClass(t, e) {
          const n = typeof t
          const r = n === 'string' || Array.isArray(t)
          return typeof e === 'boolean' && r
            ? e
              ? this.addClass(t)
              : this.removeClass(t)
            : y(t)
              ? this.each(function (n) {
                E(this).toggleClass(t.call(this, n, we(this), e), e)
              })
              : this.each(function () {
                let e; let i; let o; let
                  a
                if (r) for (i = 0, o = E(this), a = xe(t); (e = a[i++]);) o.hasClass(e) ? o.removeClass(e) : o.addClass(e)
                else {
                  (void 0 !== t && n !== 'boolean')
                      || ((e = we(this)) && J.set(this, '__className__', e),
                      this.setAttribute
                        && this.setAttribute(
                          'class',
                          e || !1 === t ? '' : J.get(this, '__className__') || '',
                        ))
                }
              })
        },
        hasClass(t) {
          let e
          let n
          let r = 0
          for (e = ` ${t} `; (n = this[r++]);) if (n.nodeType === 1 && (` ${be(we(n))} `).indexOf(e) > -1) return !0
          return !1
        },
      })
      const Ee = /\r/g
      E.fn.extend({
        val(t) {
          let e
          let n
          let r
          const i = this[0]
          return arguments.length
            ? ((r = y(t)),
            this.each(function (n) {
              let i
              this.nodeType === 1
                  && ((i = r ? t.call(this, n, E(this).val()) : t) == null
                    ? (i = '')
                    : typeof i === 'number'
                      ? (i += '')
                      : Array.isArray(i)
                      && (i = E.map(i, (t) => (t == null ? '' : `${t}`))),
                  ((e = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()])
                    && 'set' in e
                    && void 0 !== e.set(this, i, 'value'))
                    || (this.value = i))
            }))
            : i
              ? (e = E.valHooks[i.type] || E.valHooks[i.nodeName.toLowerCase()])
              && 'get' in e
              && void 0 !== (n = e.get(i, 'value'))
                ? n
                : typeof (n = i.value) === 'string'
                  ? n.replace(Ee, '')
                  : n == null
                    ? ''
                    : n
              : void 0
        },
      }),
      E.extend({
        valHooks: {
          option: {
            get(t) {
              const e = E.find.attr(t, 'value')
              return e != null ? e : be(E.text(t))
            },
          },
          select: {
            get(t) {
              let e
              let n
              let r
              const i = t.options
              const o = t.selectedIndex
              const a = t.type === 'select-one'
              const s = a ? null : []
              const u = a ? o + 1 : i.length
              for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
                if (
                  ((n = i[r]).selected || r === o)
                    && !n.disabled
                    && (!n.parentNode.disabled || !N(n.parentNode, 'optgroup'))
                ) {
                  if (((e = E(n).val()), a)) return e
                  s.push(e)
                }
              }
              return s
            },
            set(t, e) {
              for (var n, r, i = t.options, o = E.makeArray(e), a = i.length; a--;) ((r = i[a]).selected = E.inArray(E.valHooks.option.get(r), o) > -1) && (n = !0)
              return n || (t.selectedIndex = -1), o
            },
          },
        },
      }),
      E.each(['radio', 'checkbox'], function () {
        (E.valHooks[this] = {
          set(t, e) {
            if (Array.isArray(e)) return (t.checked = E.inArray(E(t).val(), e) > -1)
          },
        }),
        m.checkOn
              || (E.valHooks[this].get = function (t) {
                return t.getAttribute('value') === null ? 'on' : t.value
              })
      }),
      (m.focusin = 'onfocusin' in n)
      const Te = /^(?:focusinfocus|focusoutblur)$/
      const Ce = function (t) {
        t.stopPropagation()
      }
      E.extend(E.event, {
        trigger(t, e, r, i) {
          let o
          let s
          let u
          let c
          let l
          let f
          let p
          let d
          const v = [r || a]
          let g = h.call(t, 'type') ? t.type : t
          let m = h.call(t, 'namespace') ? t.namespace.split('.') : []
          if (
            ((s = d = u = r = r || a),
            r.nodeType !== 3
              && r.nodeType !== 8
              && !Te.test(g + E.event.triggered)
              && (g.indexOf('.') > -1 && ((m = g.split('.')), (g = m.shift()), m.sort()),
              (l = g.indexOf(':') < 0 && `on${g}`),
              ((t = t[E.expando] ? t : new E.Event(g, typeof t === 'object' && t)).isTrigger = i
                ? 2
                : 3),
              (t.namespace = m.join('.')),
              (t.rnamespace = t.namespace
                ? new RegExp(`(^|\\.)${m.join('\\.(?:.*\\.|)')}(\\.|$)`)
                : null),
              (t.result = void 0),
              t.target || (t.target = r),
              (e = e == null ? [t] : E.makeArray(e, [t])),
              (p = E.event.special[g] || {}),
              i || !p.trigger || !1 !== p.trigger.apply(r, e)))
          ) {
            if (!i && !p.noBubble && !_(r)) {
              for (
                c = p.delegateType || g, Te.test(c + g) || (s = s.parentNode);
                s;
                s = s.parentNode
              ) v.push(s), (u = s)
              u === (r.ownerDocument || a) && v.push(u.defaultView || u.parentWindow || n)
            }
            for (o = 0; (s = v[o++]) && !t.isPropagationStopped();) {
              (d = s),
              (t.type = o > 1 ? c : p.bindType || g),
              (f = (J.get(s, 'events') || {})[t.type] && J.get(s, 'handle')) && f.apply(s, e),
              (f = l && s[l])
                  && f.apply
                  && X(s)
                  && ((t.result = f.apply(s, e)), !1 === t.result && t.preventDefault())
            }
            return (
              (t.type = g),
              i
                || t.isDefaultPrevented()
                || (p._default && !1 !== p._default.apply(v.pop(), e))
                || !X(r)
                || (l
                  && y(r[g])
                  && !_(r)
                  && ((u = r[l]) && (r[l] = null),
                  (E.event.triggered = g),
                  t.isPropagationStopped() && d.addEventListener(g, Ce),
                  r[g](),
                  t.isPropagationStopped() && d.removeEventListener(g, Ce),
                  (E.event.triggered = void 0),
                  u && (r[l] = u))),
              t.result
            )
          }
        },
        simulate(t, e, n) {
          const r = E.extend(new E.Event(), n, { type: t, isSimulated: !0 })
          E.event.trigger(r, null, e)
        },
      }),
      E.fn.extend({
        trigger(t, e) {
          return this.each(function () {
            E.event.trigger(t, e, this)
          })
        },
        triggerHandler(t, e) {
          const n = this[0]
          if (n) return E.event.trigger(t, e, n, !0)
        },
      }),
      m.focusin
          || E.each({ focus: 'focusin', blur: 'focusout' }, (t, e) => {
            const n = function (t) {
              E.event.simulate(e, t.target, E.event.fix(t))
            }
            E.event.special[e] = {
              setup() {
                const r = this.ownerDocument || this
                const i = J.access(r, e)
                i || r.addEventListener(t, n, !0), J.access(r, e, (i || 0) + 1)
              },
              teardown() {
                const r = this.ownerDocument || this
                const i = J.access(r, e) - 1
                i ? J.access(r, e, i) : (r.removeEventListener(t, n, !0), J.remove(r, e))
              },
            }
          })
      const Se = n.location
      let Ae = Date.now()
      const De = /\?/
      E.parseXML = function (t) {
        let e
        if (!t || typeof t !== 'string') return null
        try {
          e = new n.DOMParser().parseFromString(t, 'text/xml')
        } catch (t) {
          e = void 0
        }
        return (
          (e && !e.getElementsByTagName('parsererror').length) || E.error(`Invalid XML: ${t}`), e
        )
      }
      const ke = /\[\]$/
      const Ne = /\r?\n/g
      const Oe = /^(?:submit|button|image|reset|file)$/i
      const je = /^(?:input|select|textarea|keygen)/i
      function Ie(t, e, n, r) {
        let i
        if (Array.isArray(e)) {
          E.each(e, (e, i) => {
            n || ke.test(t)
              ? r(t, i)
              : Ie(`${t}[${typeof i === 'object' && i != null ? e : ''}]`, i, n, r)
          })
        } else if (n || x(e) !== 'object') r(t, e)
        else for (i in e) Ie(`${t}[${i}]`, e[i], n, r)
      }
      (E.param = function (t, e) {
        let n
        const r = []
        const i = function (t, e) {
          const n = y(e) ? e() : e
          r[r.length] = `${encodeURIComponent(t)}=${encodeURIComponent(n == null ? '' : n)}`
        }
        if (t == null) return ''
        if (Array.isArray(t) || (t.jquery && !E.isPlainObject(t))) {
          E.each(t, function () {
            i(this.name, this.value)
          })
        } else for (n in t) Ie(n, t[n], e, i)
        return r.join('&')
      }),
      E.fn.extend({
        serialize() {
          return E.param(this.serializeArray())
        },
        serializeArray() {
          return this.map(function () {
            const t = E.prop(this, 'elements')
            return t ? E.makeArray(t) : this
          })
            .filter(function () {
              const t = this.type
              return (
                this.name
                  && !E(this).is(':disabled')
                  && je.test(this.nodeName)
                  && !Oe.test(t)
                  && (this.checked || !vt.test(t))
              )
            })
            .map(function (t, e) {
              const n = E(this).val()
              return n == null
                ? null
                : Array.isArray(n)
                  ? E.map(n, (t) => ({ name: e.name, value: t.replace(Ne, '\r\n') }))
                  : { name: e.name, value: n.replace(Ne, '\r\n') }
            })
            .get()
        },
      })
      const Le = /%20/g
      const Re = /#.*$/
      const Pe = /([?&])_=[^&]*/
      const He = /^(.*?):[ \t]*([^\r\n]*)$/gm
      const Me = /^(?:GET|HEAD)$/
      const We = /^\/\//
      const Be = {}
      const qe = {}
      const Fe = '*/'.concat('*')
      const Ue = a.createElement('a')
      function $e(t) {
        return function (e, n) {
          typeof e !== 'string' && ((n = e), (e = '*'))
          let r
          let i = 0
          const o = e.toLowerCase().match(M) || []
          if (y(n)) {
            for (; (r = o[i++]);) {
              r[0] === '+'
                ? ((r = r.slice(1) || '*'), (t[r] = t[r] || []).unshift(n))
                : (t[r] = t[r] || []).push(n)
            }
          }
        }
      }
      function ze(t, e, n, r) {
        const i = {}
        const o = t === qe
        function a(s) {
          let u
          return (
            (i[s] = !0),
            E.each(t[s] || [], (t, s) => {
              const c = s(e, n, r)
              return typeof c !== 'string' || o || i[c]
                ? o
                  ? !(u = c)
                  : void 0
                : (e.dataTypes.unshift(c), a(c), !1)
            }),
            u
          )
        }
        return a(e.dataTypes[0]) || (!i['*'] && a('*'))
      }
      function Qe(t, e) {
        let n
        let r
        const i = E.ajaxSettings.flatOptions || {}
        for (n in e) void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n])
        return r && E.extend(!0, t, r), t
      }
      (Ue.href = Se.href),
      E.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: Se.href,
          type: 'GET',
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Se.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          accepts: {
            '*': Fe,
            text: 'text/plain',
            html: 'text/html',
            xml: 'application/xml, text/xml',
            json: 'application/json, text/javascript',
          },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
          converters: {
            '* text': String,
            'text html': !0,
            'text json': JSON.parse,
            'text xml': E.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup(t, e) {
          return e ? Qe(Qe(t, E.ajaxSettings), e) : Qe(E.ajaxSettings, t)
        },
        ajaxPrefilter: $e(Be),
        ajaxTransport: $e(qe),
        ajax(t, e) {
          typeof t === 'object' && ((e = t), (t = void 0)), (e = e || {})
          let r
          let i
          let o
          let s
          let u
          let c
          let l
          let f
          let p
          let d
          const h = E.ajaxSetup({}, e)
          const v = h.context || h
          const g = h.context && (v.nodeType || v.jquery) ? E(v) : E.event
          const m = E.Deferred()
          const y = E.Callbacks('once memory')
          let _ = h.statusCode || {}
          const b = {}
          const w = {}
          let x = 'canceled'
          var T = {
            readyState: 0,
            getResponseHeader(t) {
              let e
              if (l) {
                if (!s) {
                  for (s = {}; (e = He.exec(o));) {
 s[`${e[1].toLowerCase()} `] = (s[`${e[1].toLowerCase()} `] || []).concat(
                    e[2],
                  ) 
} 
}
                e = s[`${t.toLowerCase()} `]
              }
              return e == null ? null : e.join(', ')
            },
            getAllResponseHeaders() {
              return l ? o : null
            },
            setRequestHeader(t, e) {
              return (
                l == null && ((t = w[t.toLowerCase()] = w[t.toLowerCase()] || t), (b[t] = e)),
                this
              )
            },
            overrideMimeType(t) {
              return l == null && (h.mimeType = t), this
            },
            statusCode(t) {
              let e
              if (t) {
                if (l) T.always(t[T.status])
                else for (e in t) _[e] = [_[e], t[e]]
              }
              return this
            },
            abort(t) {
              const e = t || x
              return r && r.abort(e), C(0, e), this
            },
          }
          if (
            (m.promise(T),
            (h.url = (`${t || h.url || Se.href}`).replace(We, `${Se.protocol}//`)),
            (h.type = e.method || e.type || h.method || h.type),
            (h.dataTypes = (h.dataType || '*').toLowerCase().match(M) || ['']),
            h.crossDomain == null)
          ) {
            c = a.createElement('a')
            try {
              (c.href = h.url),
              (c.href = c.href),
              (h.crossDomain = `${Ue.protocol}//${Ue.host}` != `${c.protocol}//${c.host}`)
            } catch (t) {
              h.crossDomain = !0
            }
          }
          if (
            (h.data
                && h.processData
                && typeof h.data !== 'string'
                && (h.data = E.param(h.data, h.traditional)),
            ze(Be, h, e, T),
            l)
          ) return T
          for (p in ((f = E.event && h.global) && E.active++ == 0 && E.event.trigger('ajaxStart'),
          (h.type = h.type.toUpperCase()),
          (h.hasContent = !Me.test(h.type)),
          (i = h.url.replace(Re, '')),
          h.hasContent
            ? h.data
                && h.processData
                && (h.contentType || '').indexOf('application/x-www-form-urlencoded') === 0
                && (h.data = h.data.replace(Le, '+'))
            : ((d = h.url.slice(i.length)),
            h.data
                  && (h.processData || typeof h.data === 'string')
                  && ((i += (De.test(i) ? '&' : '?') + h.data), delete h.data),
            !1 === h.cache
                  && ((i = i.replace(Pe, '$1')), (d = `${De.test(i) ? '&' : '?'}_=${Ae++}${d}`)),
            (h.url = i + d)),
          h.ifModified
              && (E.lastModified[i] && T.setRequestHeader('If-Modified-Since', E.lastModified[i]),
              E.etag[i] && T.setRequestHeader('If-None-Match', E.etag[i])),
          ((h.data && h.hasContent && !1 !== h.contentType) || e.contentType)
              && T.setRequestHeader('Content-Type', h.contentType),
          T.setRequestHeader(
            'Accept',
            h.dataTypes[0] && h.accepts[h.dataTypes[0]]
              ? h.accepts[h.dataTypes[0]] + (h.dataTypes[0] !== '*' ? `, ${Fe}; q=0.01` : '')
              : h.accepts['*'],
          ),
          h.headers)) T.setRequestHeader(p, h.headers[p])
          if (h.beforeSend && (!1 === h.beforeSend.call(v, T, h) || l)) return T.abort()
          if (
            ((x = 'abort'),
            y.add(h.complete),
            T.done(h.success),
            T.fail(h.error),
            (r = ze(qe, h, e, T)))
          ) {
            if (((T.readyState = 1), f && g.trigger('ajaxSend', [T, h]), l)) return T
            h.async
                && h.timeout > 0
                && (u = n.setTimeout(() => {
                  T.abort('timeout')
                }, h.timeout))
            try {
              (l = !1), r.send(b, C)
            } catch (t) {
              if (l) throw t
              C(-1, t)
            }
          } else C(-1, 'No Transport')
          function C(t, e, a, s) {
            let c
            let p
            let d
            let b
            let w
            let x = e
            l
                || ((l = !0),
                u && n.clearTimeout(u),
                (r = void 0),
                (o = s || ''),
                (T.readyState = t > 0 ? 4 : 0),
                (c = (t >= 200 && t < 300) || t === 304),
                a
                  && (b = (function (t, e, n) {
                    for (var r, i, o, a, s = t.contents, u = t.dataTypes; u[0] === '*';) {
                      u.shift(),
                      void 0 === r && (r = t.mimeType || e.getResponseHeader('Content-Type'))
                    }
                    if (r) {
                      for (i in s) {
                        if (s[i] && s[i].test(r)) {
                          u.unshift(i)
                          break
                        }
                      }
                    }
                    if (u[0] in n) o = u[0]
                    else {
                      for (i in n) {
                        if (!u[0] || t.converters[`${i} ${u[0]}`]) {
                          o = i
                          break
                        }
                        a || (a = i)
                      }
                      o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                  }(h, T, a))),
                (b = (function (t, e, n, r) {
                  let i
                  let o
                  let a
                  let s
                  let u
                  const c = {}
                  const l = t.dataTypes.slice()
                  if (l[1]) for (a in t.converters) c[a.toLowerCase()] = t.converters[a]
                  for (o = l.shift(); o;) {
                    if (
                      (t.responseFields[o] && (n[t.responseFields[o]] = e),
                      !u && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                      (u = o),
                      (o = l.shift()))
                    ) {
                      if (o === '*') o = u
                      else if (u !== '*' && u !== o) {
                        if (!(a = c[`${u} ${o}`] || c[`* ${o}`])) {
 for (i in c) { if (
                          (s = i.split(' '))[1] === o
                              && (a = c[`${u } ${s[0]}`] || c[`* ${s[0]}`])
                        ) {
                          !0 === a ? (a = c[i]) : !0 !== c[i] && ((o = s[0]), l.unshift(s[1]))
                          break
                        } } }
                        if (!0 !== a) {
 if (a && t.throws) e = a(e)
                        else { try {
                          e = a(e)
                        } catch (t) {
                          return {
                            state: 'parsererror',
                            error: a ? t : `No conversion from ${u } to ${o}`,
                          }
                        } } }
                      }
                    }
                  }
                  return { state: 'success', data: e }
                }(h, b, T, c))),
                c
                  ? (h.ifModified
                      && ((w = T.getResponseHeader('Last-Modified')) && (E.lastModified[i] = w),
                      (w = T.getResponseHeader('etag')) && (E.etag[i] = w)),
                  t === 204 || h.type === 'HEAD'
                    ? (x = 'nocontent')
                    : t === 304
                      ? (x = 'notmodified')
                      : ((x = b.state), (p = b.data), (c = !(d = b.error))))
                  : ((d = x), (!t && x) || ((x = 'error'), t < 0 && (t = 0))),
                (T.status = t),
                (T.statusText = `${e || x}`),
                c ? m.resolveWith(v, [p, x, T]) : m.rejectWith(v, [T, x, d]),
                T.statusCode(_),
                (_ = void 0),
                f && g.trigger(c ? 'ajaxSuccess' : 'ajaxError', [T, h, c ? p : d]),
                y.fireWith(v, [T, x]),
                f && (g.trigger('ajaxComplete', [T, h]), --E.active || E.event.trigger('ajaxStop')))
          }
          return T
        },
        getJSON(t, e, n) {
          return E.get(t, e, n, 'json')
        },
        getScript(t, e) {
          return E.get(t, void 0, e, 'script')
        },
      }),
      E.each(['get', 'post'], (t, e) => {
        E[e] = function (t, n, r, i) {
          return (
            y(n) && ((i = i || r), (r = n), (n = void 0)),
            E.ajax(
              E.extend(
                {
                  url: t, type: e, dataType: i, data: n, success: r,
                },
                E.isPlainObject(t) && t,
              ),
            )
          )
        }
      }),
      (E._evalUrl = function (t, e) {
        return E.ajax({
          url: t,
          type: 'GET',
          dataType: 'script',
          cache: !0,
          async: !1,
          global: !1,
          converters: { 'text script': function () {} },
          dataFilter(t) {
            E.globalEval(t, e)
          },
        })
      }),
      E.fn.extend({
        wrapAll(t) {
          let e
          return (
            this[0]
                && (y(t) && (t = t.call(this[0])),
                (e = E(t, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && e.insertBefore(this[0]),
                e
                  .map(function () {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild
                    return t
                  })
                  .append(this)),
            this
          )
        },
        wrapInner(t) {
          return y(t)
            ? this.each(function (e) {
              E(this).wrapInner(t.call(this, e))
            })
            : this.each(function () {
              const e = E(this)
              const n = e.contents()
              n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap(t) {
          const e = y(t)
          return this.each(function (n) {
            E(this).wrapAll(e ? t.call(this, n) : t)
          })
        },
        unwrap(t) {
          return (
            this.parent(t)
              .not('body')
              .each(function () {
                E(this).replaceWith(this.childNodes)
              }),
            this
          )
        },
      }),
      (E.expr.pseudos.hidden = function (t) {
        return !E.expr.pseudos.visible(t)
      }),
      (E.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
      }),
      (E.ajaxSettings.xhr = function () {
        try {
          return new n.XMLHttpRequest()
        } catch (t) {}
      })
      const Ke = { 0: 200, 1223: 204 }
      let Ve = E.ajaxSettings.xhr();
      (m.cors = !!Ve && 'withCredentials' in Ve),
      (m.ajax = Ve = !!Ve),
      E.ajaxTransport((t) => {
        let e; let
          r
        if (m.cors || (Ve && !t.crossDomain)) {
          return {
            send(i, o) {
              let a
              let s = t.xhr()
              if ((s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (a in t.xhrFields) s[a] = t.xhrFields[a]
              for (a in (t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
              t.crossDomain
                  || i['X-Requested-With']
                  || (i['X-Requested-With'] = 'XMLHttpRequest'),
              i)) s.setRequestHeader(a, i[a]);
              (e = function (t) {
                return function () {
                  e
                      && ((e = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                      t === 'abort'
                        ? s.abort()
                        : t === 'error'
                          ? typeof s.status !== 'number'
                            ? o(0, 'error')
                            : o(s.status, s.statusText)
                          : o(
                            Ke[s.status] || s.status,
                            s.statusText,
                            (s.responseType || 'text') !== 'text'
                              || typeof s.responseText !== 'string'
                              ? { binary: s.response }
                              : { text: s.responseText },
                            s.getAllResponseHeaders(),
                          ))
                }
              }),
              (s.onload = e()),
              (r = s.onerror = s.ontimeout = e('error')),
              void 0 !== s.onabort
                ? (s.onabort = r)
                : (s.onreadystatechange = function () {
                  s.readyState === 4
                          && n.setTimeout(() => {
                            e && r()
                          })
                }),
              (e = e('abort'))
              try {
                s.send((t.hasContent && t.data) || null)
              } catch (t) {
                if (e) throw t
              }
            },
            abort() {
              e && e()
            },
          }
        }
      }),
      E.ajaxPrefilter((t) => {
        t.crossDomain && (t.contents.script = !1)
      }),
      E.ajaxSetup({
        accepts: {
          script:
              'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          'text script': function (t) {
            return E.globalEval(t), t
          },
        },
      }),
      E.ajaxPrefilter('script', (t) => {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = 'GET')
      }),
      E.ajaxTransport('script', (t) => {
        let e; let
          n
        if (t.crossDomain || t.scriptAttrs) {
          return {
            send(r, i) {
              (e = E('<script>')
                .attr(t.scriptAttrs || {})
                .prop({ charset: t.scriptCharset, src: t.url })
                .on(
                  'load error',
                  (n = function (t) {
                    e.remove(), (n = null), t && i(t.type === 'error' ? 404 : 200, t.type)
                  }),
                )),
              a.head.appendChild(e[0])
            },
            abort() {
              n && n()
            },
          }
        }
      })
      let Ye
      const Xe = []
      const Ge = /(=)\?(?=&|$)|\?\?/
      E.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback() {
          const t = Xe.pop() || `${E.expando}_${Ae++}`
          return (this[t] = !0), t
        },
      }),
      E.ajaxPrefilter('json jsonp', (t, e, r) => {
        let i
        let o
        let a
        const s = !1 !== t.jsonp
              && (Ge.test(t.url)
                ? 'url'
                : typeof t.data === 'string'
                  && (t.contentType || '').indexOf('application/x-www-form-urlencoded') === 0
                  && Ge.test(t.data)
                  && 'data')
        if (s || t.dataTypes[0] === 'jsonp') {
          return (
            (i = t.jsonpCallback = y(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
            s
              ? (t[s] = t[s].replace(Ge, `$1${i}`))
              : !1 !== t.jsonp && (t.url += `${(De.test(t.url) ? '&' : '?') + t.jsonp}=${i}`),
            (t.converters['script json'] = function () {
              return a || E.error(`${i} was not called`), a[0]
            }),
            (t.dataTypes[0] = 'json'),
            (o = n[i]),
            (n[i] = function () {
              a = arguments
            }),
            r.always(() => {
              void 0 === o ? E(n).removeProp(i) : (n[i] = o),
              t[i] && ((t.jsonpCallback = e.jsonpCallback), Xe.push(i)),
              a && y(o) && o(a[0]),
              (a = o = void 0)
            }),
            'script'
          )
        }
      }),
      (m.createHTMLDocument = (((Ye = a.implementation.createHTMLDocument('').body).innerHTML = '<form></form><form></form>'),
      Ye.childNodes.length === 2)),
      (E.parseHTML = function (t, e, n) {
        return typeof t !== 'string'
          ? []
          : (typeof e === 'boolean' && ((n = e), (e = !1)),
          e
                || (m.createHTMLDocument
                  ? (((r = (e = a.implementation.createHTMLDocument('')).createElement(
                    'base',
                  )).href = a.location.href),
                  e.head.appendChild(r))
                  : (e = a)),
          (o = !n && []),
          (i = O.exec(t))
            ? [e.createElement(i[1])]
            : ((i = Tt([t], e, o)), o && o.length && E(o).remove(), E.merge([], i.childNodes)))
        let r; let i; let
          o
      }),
      (E.fn.load = function (t, e, n) {
        let r
        let i
        let o
        const a = this
        const s = t.indexOf(' ')
        return (
          s > -1 && ((r = be(t.slice(s))), (t = t.slice(0, s))),
          y(e) ? ((n = e), (e = void 0)) : e && typeof e === 'object' && (i = 'POST'),
          a.length > 0
              && E.ajax({
                url: t, type: i || 'GET', dataType: 'html', data: e,
              })
                .done(function (t) {
                  (o = arguments), a.html(r ? E('<div>').append(E.parseHTML(t)).find(r) : t)
                })
                .always(
                  n
                    && ((t, e) => {
                      a.each(function () {
                        n.apply(this, o || [t.responseText, e, t])
                      })
                    }),
                ),
          this
        )
      }),
      E.each(
        ['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'],
        (t, e) => {
          E.fn[e] = function (t) {
            return this.on(e, t)
          }
        },
      ),
      (E.expr.pseudos.animated = function (t) {
        return E.grep(E.timers, (e) => t === e.elem).length
      }),
      (E.offset = {
        setOffset(t, e, n) {
          let r
          let i
          let o
          let a
          let s
          let u
          const c = E.css(t, 'position')
          const l = E(t)
          const f = {}
          c === 'static' && (t.style.position = 'relative'),
          (s = l.offset()),
          (o = E.css(t, 'top')),
          (u = E.css(t, 'left')),
          (c === 'absolute' || c === 'fixed') && (o + u).indexOf('auto') > -1
            ? ((a = (r = l.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          y(e) && (e = e.call(t, n, E.extend({}, s))),
          e.top != null && (f.top = e.top - s.top + a),
          e.left != null && (f.left = e.left - s.left + i),
          'using' in e ? e.using.call(t, f) : l.css(f)
        },
      }),
      E.fn.extend({
        offset(t) {
          if (arguments.length) {
            return void 0 === t
              ? this
              : this.each(function (e) {
                E.offset.setOffset(this, t, e)
              })
          }
          let e
          let n
          const r = this[0]
          return r
            ? r.getClientRects().length
              ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
              : { top: 0, left: 0 }
            : void 0
        },
        position() {
          if (this[0]) {
            let t
            let e
            let n
            const r = this[0]
            let i = { top: 0, left: 0 }
            if (E.css(r, 'position') === 'fixed') e = r.getBoundingClientRect()
            else {
              for (
                e = this.offset(), n = r.ownerDocument, t = r.offsetParent || n.documentElement;
                t
                  && (t === n.body || t === n.documentElement)
                  && E.css(t, 'position') === 'static';

              ) t = t.parentNode
              t
                  && t !== r
                  && t.nodeType === 1
                  && (((i = E(t).offset()).top += E.css(t, 'borderTopWidth', !0)),
                  (i.left += E.css(t, 'borderLeftWidth', !0)))
            }
            return {
              top: e.top - i.top - E.css(r, 'marginTop', !0),
              left: e.left - i.left - E.css(r, 'marginLeft', !0),
            }
          }
        },
        offsetParent() {
          return this.map(function () {
            for (var t = this.offsetParent; t && E.css(t, 'position') === 'static';) t = t.offsetParent
            return t || at
          })
        },
      }),
      E.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, (t, e) => {
        const n = e === 'pageYOffset'
        E.fn[t] = function (r) {
          return z(
            this,
            (t, r, i) => {
              let o
              if ((_(t) ? (o = t) : t.nodeType === 9 && (o = t.defaultView), void 0 === i)) return o ? o[e] : t[r]
              o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : (t[r] = i)
            },
            t,
            r,
            arguments.length,
          )
        }
      }),
      E.each(['top', 'left'], (t, e) => {
        E.cssHooks[e] = Vt(m.pixelPosition, (t, n) => {
          if (n) return (n = Kt(t, e)), $t.test(n) ? `${E(t).position()[e]}px` : n
        })
      }),
      E.each({ Height: 'height', Width: 'width' }, (t, e) => {
        E.each({ padding: `inner${t}`, content: e, '': `outer${t}` }, (n, r) => {
          E.fn[r] = function (i, o) {
            const a = arguments.length && (n || typeof i !== 'boolean')
            const s = n || (!0 === i || !0 === o ? 'margin' : 'border')
            return z(
              this,
              (e, n, i) => {
                let o
                return _(e)
                  ? r.indexOf('outer') === 0
                    ? e[`inner${t}`]
                    : e.document.documentElement[`client${t}`]
                  : e.nodeType === 9
                    ? ((o = e.documentElement),
                    Math.max(
                      e.body[`scroll${t}`],
                      o[`scroll${t}`],
                      e.body[`offset${t}`],
                      o[`offset${t}`],
                      o[`client${t}`],
                    ))
                    : void 0 === i
                      ? E.css(e, n, s)
                      : E.style(e, n, i, s)
              },
              e,
              a ? i : void 0,
              a,
            )
          }
        })
      }),
      E.each(
        'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
          ' ',
        ),
        (t, e) => {
          E.fn[e] = function (t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
          }
        },
      ),
      E.fn.extend({
        hover(t, e) {
          return this.mouseenter(t).mouseleave(e || t)
        },
      }),
      E.fn.extend({
        bind(t, e, n) {
          return this.on(t, null, e, n)
        },
        unbind(t, e) {
          return this.off(t, null, e)
        },
        delegate(t, e, n, r) {
          return this.on(e, t, n, r)
        },
        undelegate(t, e, n) {
          return arguments.length === 1 ? this.off(t, '**') : this.off(e, t || '**', n)
        },
      }),
      (E.proxy = function (t, e) {
        let n; let r; let
          i
        if ((typeof e === 'string' && ((n = t[e]), (e = t), (t = n)), y(t))) {
          return (
            (r = u.call(arguments, 2)),
            ((i = function () {
              return t.apply(e || this, r.concat(u.call(arguments)))
            }).guid = t.guid = t.guid || E.guid++),
            i
          )
        }
      }),
      (E.holdReady = function (t) {
        t ? E.readyWait++ : E.ready(!0)
      }),
      (E.isArray = Array.isArray),
      (E.parseJSON = JSON.parse),
      (E.nodeName = N),
      (E.isFunction = y),
      (E.isWindow = _),
      (E.camelCase = Y),
      (E.type = x),
      (E.now = Date.now),
      (E.isNumeric = function (t) {
        const e = E.type(t)
        return (e === 'number' || e === 'string') && !isNaN(t - parseFloat(t))
      }),
      void 0
          === (r = function () {
            return E
          }.apply(e, [])) || (t.exports = r)
      const Je = n.jQuery
      const Ze = n.$
      return (
        (E.noConflict = function (t) {
          return n.$ === E && (n.$ = Ze), t && n.jQuery === E && (n.jQuery = Je), E
        }),
        i || (n.jQuery = n.$ = E),
        E
      )
    }))
  },
  function (t, e) {
    if (typeof jQuery === 'undefined') {
      throw new Error(
        "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.",
      )
    }
    !(function (t) {
      const e = jQuery.fn.jquery.split(' ')[0].split('.')
      if ((e[0] < 2 && e[1] < 9) || (e[0] == 1 && e[1] == 9 && e[2] < 1) || e[0] >= 4) {
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0",
        )
      }
    }()),
    (function () {
      const t = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
        ? function (t) {
          return typeof t
        }
        : function (t) {
          return t
                    && typeof Symbol === 'function'
                    && t.constructor === Symbol
                    && t !== Symbol.prototype
            ? 'symbol'
            : typeof t
        }
      const e = (function () {
        function t(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e
        }
      }())
      function n(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e
      }
      function r(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
      }
      const i = (function (t) {
        let e = !1
        const n = {
          WebkitTransition: 'webkitTransitionEnd',
          MozTransition: 'transitionend',
          OTransition: 'oTransitionEnd otransitionend',
          transition: 'transitionend',
        }
        function r(t) {
          return {}.toString
            .call(t)
            .match(/\s([a-zA-Z]+)/)[1]
            .toLowerCase()
        }
        function i(e) {
          const n = this
          let r = !1
          return (
            t(this).one(o.TRANSITION_END, () => {
              r = !0
            }),
            setTimeout(() => {
              r || o.triggerTransitionEnd(n)
            }, e),
            this
          )
        }
        var o = {
          TRANSITION_END: 'bsTransitionEnd',
          getUID(t) {
            do {
              t += ~~(1e6 * Math.random())
            } while (document.getElementById(t))
            return t
          },
          getSelectorFromElement(e) {
            let n = e.getAttribute('data-target');
            (n && n !== '#') || (n = e.getAttribute('href') || '')
            try {
              return t(n).length > 0 ? n : null
            } catch (t) {
              return null
            }
          },
          reflow(t) {
            return t.offsetHeight
          },
          triggerTransitionEnd(n) {
            t(n).trigger(e.end)
          },
          supportsTransitionEnd() {
            return Boolean(e)
          },
          typeCheckConfig(t, e, n) {
            for (const i in n) {
              if (n.hasOwnProperty(i)) {
                const o = n[i]
                const a = e[i]
                const s = a && ((u = a)[0] || u).nodeType ? 'element' : r(a)
                if (!new RegExp(o).test(s)) {
                  throw new Error(
                    `${t.toUpperCase()
                    }: Option "${
                      i
                    }" provided type "${
                      s
                    }" but expected type "${
                      o
                    }".`,
                  )
                }
              }
            }
            let u
          },
        }
        return (
          (e = (function () {
            if (window.QUnit) return !1
            const t = document.createElement('bootstrap')
            for (const e in n) if (void 0 !== t.style[e]) return { end: n[e] }
            return !1
          }())),
          (t.fn.emulateTransitionEnd = i),
          o.supportsTransitionEnd()
                && (t.event.special[o.TRANSITION_END] = {
                  bindType: e.end,
                  delegateType: e.end,
                  handle(e) {
                    if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                  },
                }),
          o
        )
      }(jQuery))
      const o = ((function (t) {
        const n = 'alert'
        const o = t.fn[n]
        const a = {
          CLOSE: 'close.bs.alert',
          CLOSED: 'closed.bs.alert',
          CLICK_DATA_API: 'click.bs.alert.data-api',
        }
        const s = 'alert'
        const u = 'fade'
        const c = 'show'
        const l = (function () {
          function n(t) {
            r(this, n), (this._element = t)
          }
          return (
            (n.prototype.close = function (t) {
              t = t || this._element
              const e = this._getRootElement(t)
              this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }),
            (n.prototype.dispose = function () {
              t.removeData(this._element, 'bs.alert'), (this._element = null)
            }),
            (n.prototype._getRootElement = function (e) {
              const n = i.getSelectorFromElement(e)
              let r = !1
              return n && (r = t(n)[0]), r || (r = t(e).closest(`.${s}`)[0]), r
            }),
            (n.prototype._triggerCloseEvent = function (e) {
              const n = t.Event(a.CLOSE)
              return t(e).trigger(n), n
            }),
            (n.prototype._removeElement = function (e) {
              const n = this
              t(e).removeClass(c),
              i.supportsTransitionEnd() && t(e).hasClass(u)
                ? t(e)
                  .one(i.TRANSITION_END, (t) => n._destroyElement(e, t))
                  .emulateTransitionEnd(150)
                : this._destroyElement(e)
            }),
            (n.prototype._destroyElement = function (e) {
              t(e).detach().trigger(a.CLOSED).remove()
            }),
            (n._jQueryInterface = function (e) {
              return this.each(function () {
                const r = t(this)
                let i = r.data('bs.alert')
                i || ((i = new n(this)), r.data('bs.alert', i)), e === 'close' && i[e](this)
              })
            }),
            (n._handleDismiss = function (t) {
              return function (e) {
                e && e.preventDefault(), t.close(this)
              }
            }),
            e(n, null, [
              {
                key: 'VERSION',
                get() {
                  return '4.0.0-beta'
                },
              },
            ]),
            n
          )
        }())
        t(document).on(a.CLICK_DATA_API, '[data-dismiss="alert"]', l._handleDismiss(new l())),
        (t.fn[n] = l._jQueryInterface),
        (t.fn[n].Constructor = l),
        (t.fn[n].noConflict = function () {
          return (t.fn[n] = o), l._jQueryInterface
        })
      }(jQuery)),
      (function (t) {
        const n = 'button'
        const i = t.fn[n]
        const o = 'active'
        const a = 'btn'
        const s = 'focus'
        const u = '[data-toggle^="button"]'
        const c = '[data-toggle="buttons"]'
        const l = 'input'
        const f = '.active'
        const p = '.btn'
        const d = {
          CLICK_DATA_API: 'click.bs.button.data-api',
          FOCUS_BLUR_DATA_API: 'focus.bs.button.data-api blur.bs.button.data-api',
        }
        const h = (function () {
          function n(t) {
            r(this, n), (this._element = t)
          }
          return (
            (n.prototype.toggle = function () {
              let e = !0
              let n = !0
              const r = t(this._element).closest(c)[0]
              if (r) {
                const i = t(this._element).find(l)[0]
                if (i) {
                  if (i.type === 'radio') {
                    if (i.checked && t(this._element).hasClass(o)) e = !1
                    else {
                      const a = t(r).find(f)[0]
                      a && t(a).removeClass(o)
                    }
                  }
                  if (e) {
                    if (
                      i.hasAttribute('disabled')
                              || r.hasAttribute('disabled')
                              || i.classList.contains('disabled')
                              || r.classList.contains('disabled')
                    ) return;
                    (i.checked = !t(this._element).hasClass(o)), t(i).trigger('change')
                  }
                  i.focus(), (n = !1)
                }
              }
              n
                        && this._element.setAttribute('aria-pressed', !t(this._element).hasClass(o)),
              e && t(this._element).toggleClass(o)
            }),
            (n.prototype.dispose = function () {
              t.removeData(this._element, 'bs.button'), (this._element = null)
            }),
            (n._jQueryInterface = function (e) {
              return this.each(function () {
                let r = t(this).data('bs.button')
                r || ((r = new n(this)), t(this).data('bs.button', r)),
                e === 'toggle' && r[e]()
              })
            }),
            e(n, null, [
              {
                key: 'VERSION',
                get() {
                  return '4.0.0-beta'
                },
              },
            ]),
            n
          )
        }())
        t(document)
          .on(d.CLICK_DATA_API, u, (e) => {
            e.preventDefault()
            let n = e.target
            t(n).hasClass(a) || (n = t(n).closest(p)), h._jQueryInterface.call(t(n), 'toggle')
          })
          .on(d.FOCUS_BLUR_DATA_API, u, (e) => {
            const n = t(e.target).closest(p)[0]
            t(n).toggleClass(s, /^focus(in)?$/.test(e.type))
          }),
        (t.fn[n] = h._jQueryInterface),
        (t.fn[n].Constructor = h),
        (t.fn[n].noConflict = function () {
          return (t.fn[n] = i), h._jQueryInterface
        })
      }(jQuery)),
      (function (n) {
        const o = 'carousel'
        const a = 'bs.carousel'
        const s = `.${a}`
        const u = n.fn[o]
        const c = {
          interval: 5e3, keyboard: !0, slide: !1, pause: 'hover', wrap: !0,
        }
        const l = {
          interval: '(number|boolean)',
          keyboard: 'boolean',
          slide: '(boolean|string)',
          pause: '(string|boolean)',
          wrap: 'boolean',
        }
        const f = 'next'
        const p = 'prev'
        const d = 'left'
        const h = 'right'
        const v = {
          SLIDE: `slide${s}`,
          SLID: `slid${s}`,
          KEYDOWN: `keydown${s}`,
          MOUSEENTER: `mouseenter${s}`,
          MOUSELEAVE: `mouseleave${s}`,
          TOUCHEND: `touchend${s}`,
          LOAD_DATA_API: `load${s}.data-api`,
          CLICK_DATA_API: `click${s}.data-api`,
        }
        const g = 'carousel'
        const m = 'active'
        const y = 'slide'
        const _ = 'carousel-item-right'
        const b = 'carousel-item-left'
        const w = 'carousel-item-next'
        const x = 'carousel-item-prev'
        const E = '.active'
        const T = '.active.carousel-item'
        const C = '.carousel-item'
        const S = '.carousel-item-next, .carousel-item-prev'
        const A = '.carousel-indicators'
        const D = '[data-slide], [data-slide-to]'
        const k = '[data-ride="carousel"]'
        const N = (function () {
          function u(t, e) {
            r(this, u),
            (this._items = null),
            (this._interval = null),
            (this._activeElement = null),
            (this._isPaused = !1),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this._config = this._getConfig(e)),
            (this._element = n(t)[0]),
            (this._indicatorsElement = n(this._element).find(A)[0]),
            this._addEventListeners()
          }
          return (
            (u.prototype.next = function () {
              this._isSliding || this._slide(f)
            }),
            (u.prototype.nextWhenVisible = function () {
              document.hidden || this.next()
            }),
            (u.prototype.prev = function () {
              this._isSliding || this._slide(p)
            }),
            (u.prototype.pause = function (t) {
              t || (this._isPaused = !0),
              n(this._element).find(S)[0]
                          && i.supportsTransitionEnd()
                          && (i.triggerTransitionEnd(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null)
            }),
            (u.prototype.cycle = function (t) {
              t || (this._isPaused = !1),
              this._interval && (clearInterval(this._interval), (this._interval = null)),
              this._config.interval
                          && !this._isPaused
                          && (this._interval = setInterval(
                            (document.visibilityState ? this.nextWhenVisible : this.next).bind(
                              this,
                            ),
                            this._config.interval,
                          ))
            }),
            (u.prototype.to = function (t) {
              const e = this
              this._activeElement = n(this._element).find(T)[0]
              const r = this._getItemIndex(this._activeElement)
              if (!(t > this._items.length - 1 || t < 0)) {
                if (this._isSliding) { n(this._element).one(v.SLID, () => e.to(t)) } else {
                  if (r === t) return this.pause(), void this.cycle()
                  const i = t > r ? f : p
                  this._slide(i, this._items[t])
                }
              }
            }),
            (u.prototype.dispose = function () {
              n(this._element).off(s),
              n.removeData(this._element, a),
              (this._items = null),
              (this._config = null),
              (this._element = null),
              (this._interval = null),
              (this._isPaused = null),
              (this._isSliding = null),
              (this._activeElement = null),
              (this._indicatorsElement = null)
            }),
            (u.prototype._getConfig = function (t) {
              return (t = n.extend({}, c, t)), i.typeCheckConfig(o, t, l), t
            }),
            (u.prototype._addEventListeners = function () {
              const t = this
              this._config.keyboard
                        && n(this._element).on(v.KEYDOWN, (e) => t._keydown(e)),
              this._config.pause === 'hover'
                          && (n(this._element)
                            .on(v.MOUSEENTER, (e) => t.pause(e))
                            .on(v.MOUSELEAVE, (e) => t.cycle(e)),
                          'ontouchstart' in document.documentElement
                            && n(this._element).on(v.TOUCHEND, () => {
                              t.pause(),
                              t.touchTimeout && clearTimeout(t.touchTimeout),
                              (t.touchTimeout = setTimeout((e) => t.cycle(e), 500 + t._config.interval))
                            }))
            }),
            (u.prototype._keydown = function (t) {
              if (!/input|textarea/i.test(t.target.tagName)) {
                switch (t.which) {
                  case 37:
                    t.preventDefault(), this.prev()
                    break
                  case 39:
                    t.preventDefault(), this.next()
                    break
                  default:
                }
              }
            }),
            (u.prototype._getItemIndex = function (t) {
              return (
                (this._items = n.makeArray(n(t).parent().find(C))), this._items.indexOf(t)
              )
            }),
            (u.prototype._getItemByDirection = function (t, e) {
              const n = t === f
              const r = t === p
              const i = this._getItemIndex(e)
              const o = this._items.length - 1
              if (((r && i === 0) || (n && i === o)) && !this._config.wrap) return e
              const a = (i + (t === p ? -1 : 1)) % this._items.length
              return a === -1 ? this._items[this._items.length - 1] : this._items[a]
            }),
            (u.prototype._triggerSlideEvent = function (t, e) {
              const r = this._getItemIndex(t)
              const i = this._getItemIndex(n(this._element).find(T)[0])
              const o = n.Event(v.SLIDE, {
                relatedTarget: t, direction: e, from: i, to: r,
              })
              return n(this._element).trigger(o), o
            }),
            (u.prototype._setActiveIndicatorElement = function (t) {
              if (this._indicatorsElement) {
                n(this._indicatorsElement).find(E).removeClass(m)
                const e = this._indicatorsElement.children[this._getItemIndex(t)]
                e && n(e).addClass(m)
              }
            }),
            (u.prototype._slide = function (t, e) {
              const r = this
              const o = n(this._element).find(T)[0]
              const a = this._getItemIndex(o)
              const s = e || (o && this._getItemByDirection(t, o))
              const u = this._getItemIndex(s)
              const c = Boolean(this._interval)
              let l = void 0
              let p = void 0
              let g = void 0
              if (
                (t === f ? ((l = b), (p = w), (g = d)) : ((l = _), (p = x), (g = h)),
                s && n(s).hasClass(m))
              ) this._isSliding = !1
              else if (!this._triggerSlideEvent(s, g).isDefaultPrevented() && o && s) {
                (this._isSliding = !0),
                c && this.pause(),
                this._setActiveIndicatorElement(s)
                const E = n.Event(v.SLID, {
                  relatedTarget: s, direction: g, from: a, to: u,
                })
                i.supportsTransitionEnd() && n(this._element).hasClass(y)
                  ? (n(s).addClass(p),
                  i.reflow(s),
                  n(o).addClass(l),
                  n(s).addClass(l),
                  n(o)
                    .one(i.TRANSITION_END, () => {
                      n(s)
                        .removeClass(`${l} ${p}`)
                        .addClass(m),
                      n(o).removeClass(`${m} ${p} ${l}`),
                      (r._isSliding = !1),
                      setTimeout(() => n(r._element).trigger(E), 0)
                    })
                    .emulateTransitionEnd(600))
                  : (n(o).removeClass(m),
                  n(s).addClass(m),
                  (this._isSliding = !1),
                  n(this._element).trigger(E)),
                c && this.cycle()
              }
            }),
            (u._jQueryInterface = function (e) {
              return this.each(function () {
                let r = n(this).data(a)
                var i = n.extend({}, c, n(this).data())(void 0 === e ? 'undefined' : t(e)) === 'object' && n.extend(i, e)
                const o = typeof e === 'string' ? e : i.slide
                if ((r || ((r = new u(this, i)), n(this).data(a, r)), typeof e === 'number')) r.to(e)
                else if (typeof o === 'string') {
                  if (void 0 === r[o]) throw new Error(`No method named "${o}"`)
                  r[o]()
                } else i.interval && (r.pause(), r.cycle())
              })
            }),
            (u._dataApiClickHandler = function (t) {
              const e = i.getSelectorFromElement(this)
              if (e) {
                const r = n(e)[0]
                if (r && n(r).hasClass(g)) {
                  const o = n.extend({}, n(r).data(), n(this).data())
                  const s = this.getAttribute('data-slide-to')
                  s && (o.interval = !1),
                  u._jQueryInterface.call(n(r), o),
                  s && n(r).data(a).to(s),
                  t.preventDefault()
                }
              }
            }),
            e(u, null, [
              {
                key: 'VERSION',
                get() {
                  return '4.0.0-beta'
                },
              },
              {
                key: 'Default',
                get() {
                  return c
                },
              },
            ]),
            u
          )
        }())
        n(document).on(v.CLICK_DATA_API, D, N._dataApiClickHandler),
        n(window).on(v.LOAD_DATA_API, () => {
          n(k).each(function () {
            const t = n(this)
            N._jQueryInterface.call(t, t.data())
          })
        }),
        (n.fn[o] = N._jQueryInterface),
        (n.fn[o].Constructor = N),
        (n.fn[o].noConflict = function () {
          return (n.fn[o] = u), N._jQueryInterface
        })
      }(jQuery)),
      (function (n) {
        const o = 'collapse'
        const a = 'bs.collapse'
        const s = n.fn[o]
        const u = { toggle: !0, parent: '' }
        const c = { toggle: 'boolean', parent: 'string' }
        const l = {
          SHOW: 'show.bs.collapse',
          SHOWN: 'shown.bs.collapse',
          HIDE: 'hide.bs.collapse',
          HIDDEN: 'hidden.bs.collapse',
          CLICK_DATA_API: 'click.bs.collapse.data-api',
        }
        const f = 'show'
        const p = 'collapse'
        const d = 'collapsing'
        const h = 'collapsed'
        const v = 'width'
        const g = 'height'
        const m = '.show, .collapsing'
        const y = '[data-toggle="collapse"]'
        const _ = (function () {
          function s(t, e) {
            r(this, s),
            (this._isTransitioning = !1),
            (this._element = t),
            (this._config = this._getConfig(e)),
            (this._triggerArray = n.makeArray(
              n(
                `[data-toggle="collapse"][href="#${
                  t.id
                }"],[data-toggle="collapse"][data-target="#${
                  t.id
                }"]`,
              ),
            ))
            for (let o = n(y), a = 0; a < o.length; a++) {
              const u = o[a]
              const c = i.getSelectorFromElement(u)
              c !== null && n(c).filter(t).length > 0 && this._triggerArray.push(u)
            }
            (this._parent = this._config.parent ? this._getParent() : null),
            this._config.parent
                        || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
          }
          return (
            (s.prototype.toggle = function () {
              n(this._element).hasClass(f) ? this.hide() : this.show()
            }),
            (s.prototype.show = function () {
              const t = this
              if (!this._isTransitioning && !n(this._element).hasClass(f)) {
                let e = void 0
                let r = void 0
                if (
                  (this._parent
                            && ((e = n.makeArray(n(this._parent).children().children(m))).length
                              || (e = null)),
                  !(e && (r = n(e).data(a)) && r._isTransitioning))
                ) {
                  const o = n.Event(l.SHOW)
                  if ((n(this._element).trigger(o), !o.isDefaultPrevented())) {
                    e && (s._jQueryInterface.call(n(e), 'hide'), r || n(e).data(a, null))
                    const u = this._getDimension()
                    n(this._element).removeClass(p).addClass(d),
                    (this._element.style[u] = 0),
                    this._triggerArray.length
                                && n(this._triggerArray).removeClass(h).attr('aria-expanded', !0),
                    this.setTransitioning(!0)
                    const c = function () {
                      n(t._element).removeClass(d).addClass(p).addClass(f),
                      (t._element.style[u] = ''),
                      t.setTransitioning(!1),
                      n(t._element).trigger(l.SHOWN)
                    }
                    if (i.supportsTransitionEnd()) {
                      const v = `scroll${u[0].toUpperCase() + u.slice(1)}`
                      n(this._element).one(i.TRANSITION_END, c).emulateTransitionEnd(600),
                      (this._element.style[u] = `${this._element[v]}px`)
                    } else c()
                  }
                }
              }
            }),
            (s.prototype.hide = function () {
              const t = this
              if (!this._isTransitioning && n(this._element).hasClass(f)) {
                const e = n.Event(l.HIDE)
                if ((n(this._element).trigger(e), !e.isDefaultPrevented())) {
                  const r = this._getDimension()
                  if (
                    ((this._element.style[r] = `${this._element.getBoundingClientRect()[r]}px`),
                    i.reflow(this._element),
                    n(this._element).addClass(d).removeClass(p).removeClass(f),
                    this._triggerArray.length)
                  ) {
                    for (let o = 0; o < this._triggerArray.length; o++) {
                      const a = this._triggerArray[o]
                      const s = i.getSelectorFromElement(a)
                      if (s !== null) n(s).hasClass(f) || n(a).addClass(h).attr('aria-expanded', !1)
                    }
                  }
                  this.setTransitioning(!0)
                  const u = function () {
                    t.setTransitioning(!1),
                    n(t._element).removeClass(d).addClass(p).trigger(l.HIDDEN)
                  };
                  (this._element.style[r] = ''),
                  i.supportsTransitionEnd()
                    ? n(this._element).one(i.TRANSITION_END, u).emulateTransitionEnd(600)
                    : u()
                }
              }
            }),
            (s.prototype.setTransitioning = function (t) {
              this._isTransitioning = t
            }),
            (s.prototype.dispose = function () {
              n.removeData(this._element, a),
              (this._config = null),
              (this._parent = null),
              (this._element = null),
              (this._triggerArray = null),
              (this._isTransitioning = null)
            }),
            (s.prototype._getConfig = function (t) {
              return (
                ((t = n.extend({}, u, t)).toggle = Boolean(t.toggle)),
                i.typeCheckConfig(o, t, c),
                t
              )
            }),
            (s.prototype._getDimension = function () {
              return n(this._element).hasClass(v) ? v : g
            }),
            (s.prototype._getParent = function () {
              const t = this
              const e = n(this._config.parent)[0]
              const r = `[data-toggle="collapse"][data-parent="${this._config.parent}"]`
              return (
                n(e)
                  .find(r)
                  .each((e, n) => {
                    t._addAriaAndCollapsedClass(s._getTargetFromElement(n), [n])
                  }),
                e
              )
            }),
            (s.prototype._addAriaAndCollapsedClass = function (t, e) {
              if (t) {
                const r = n(t).hasClass(f)
                e.length && n(e).toggleClass(h, !r).attr('aria-expanded', r)
              }
            }),
            (s._getTargetFromElement = function (t) {
              const e = i.getSelectorFromElement(t)
              return e ? n(e)[0] : null
            }),
            (s._jQueryInterface = function (e) {
              return this.each(function () {
                const r = n(this)
                let i = r.data(a)
                const o = n.extend(
                  {},
                  u,
                  r.data(),
                  (void 0 === e ? 'undefined' : t(e)) === 'object' && e,
                )
                if (
                  (!i && o.toggle && /show|hide/.test(e) && (o.toggle = !1),
                  i || ((i = new s(this, o)), r.data(a, i)),
                  typeof e === 'string')
                ) {
                  if (void 0 === i[e]) throw new Error(`No method named "${e}"`)
                  i[e]()
                }
              })
            }),
            e(s, null, [
              {
                key: 'VERSION',
                get() {
                  return '4.0.0-beta'
                },
              },
              {
                key: 'Default',
                get() {
                  return u
                },
              },
            ]),
            s
          )
        }())
        n(document).on(l.CLICK_DATA_API, y, function (t) {
          /input|textarea/i.test(t.target.tagName) || t.preventDefault()
          const e = n(this)
          const r = i.getSelectorFromElement(this)
          n(r).each(function () {
            const t = n(this)
            const r = t.data(a) ? 'toggle' : e.data()
            _._jQueryInterface.call(t, r)
          })
        }),
        (n.fn[o] = _._jQueryInterface),
        (n.fn[o].Constructor = _),
        (n.fn[o].noConflict = function () {
          return (n.fn[o] = s), _._jQueryInterface
        })
      }(jQuery)),
      (function (n) {
        if (typeof Popper === 'undefined') throw new Error('Bootstrap dropdown require Popper.js (https://popper.js.org)')
        const o = 'dropdown'
        const a = 'bs.dropdown'
        const s = `.${a}`
        const u = n.fn[o]
        const c = new RegExp('38|40|27')
        const l = {
          HIDE: `hide${s}`,
          HIDDEN: `hidden${s}`,
          SHOW: `show${s}`,
          SHOWN: `shown${s}`,
          CLICK: `click${s}`,
          CLICK_DATA_API: `click${s}.data-api`,
          KEYDOWN_DATA_API: `keydown${s}.data-api`,
          KEYUP_DATA_API: `keyup${s}.data-api`,
        }
        const f = 'disabled'
        const p = 'show'
        const d = 'dropup'
        const h = 'dropdown-menu-right'
        const v = 'dropdown-menu-left'
        const g = '[data-toggle="dropdown"]'
        const m = '.dropdown form'
        const y = '.dropdown-menu'
        const _ = '.navbar-nav'
        const b = '.dropdown-menu .dropdown-item:not(.disabled)'
        const w = {
          TOP: 'top-start',
          TOPEND: 'top-end',
          BOTTOM: 'bottom-start',
          BOTTOMEND: 'bottom-end',
        }
        const x = { placement: w.BOTTOM, offset: 0, flip: !0 }
        const E = { placement: 'string', offset: '(number|string)', flip: 'boolean' }
        const T = (function () {
          function u(t, e) {
            r(this, u),
            (this._element = t),
            (this._popper = null),
            (this._config = this._getConfig(e)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners()
          }
          return (
            (u.prototype.toggle = function () {
              if (!this._element.disabled && !n(this._element).hasClass(f)) {
                const t = u._getParentFromElement(this._element)
                const e = n(this._menu).hasClass(p)
                if ((u._clearMenus(), !e)) {
                  const r = { relatedTarget: this._element }
                  const i = n.Event(l.SHOW, r)
                  if ((n(t).trigger(i), !i.isDefaultPrevented())) {
                    let o = this._element
                    n(t).hasClass(d)
                              && (n(this._menu).hasClass(v) || n(this._menu).hasClass(h))
                              && (o = t),
                    (this._popper = new Popper(o, this._menu, this._getPopperConfig())),
                    'ontouchstart' in document.documentElement
                                && !n(t).closest(_).length
                                && n('body').children().on('mouseover', null, n.noop),
                    this._element.focus(),
                    this._element.setAttribute('aria-expanded', !0),
                    n(this._menu).toggleClass(p),
                    n(t).toggleClass(p).trigger(n.Event(l.SHOWN, r))
                  }
                }
              }
            }),
            (u.prototype.dispose = function () {
              n.removeData(this._element, a),
              n(this._element).off(s),
              (this._element = null),
              (this._menu = null),
              this._popper !== null && this._popper.destroy(),
              (this._popper = null)
            }),
            (u.prototype.update = function () {
              (this._inNavbar = this._detectNavbar()),
              this._popper !== null && this._popper.scheduleUpdate()
            }),
            (u.prototype._addEventListeners = function () {
              const t = this
              n(this._element).on(l.CLICK, (e) => {
                e.preventDefault(), e.stopPropagation(), t.toggle()
              })
            }),
            (u.prototype._getConfig = function (t) {
              const e = n(this._element).data()
              return (
                void 0 !== e.placement && (e.placement = w[e.placement.toUpperCase()]),
                (t = n.extend({}, this.constructor.Default, n(this._element).data(), t)),
                i.typeCheckConfig(o, t, this.constructor.DefaultType),
                t
              )
            }),
            (u.prototype._getMenuElement = function () {
              if (!this._menu) {
                const t = u._getParentFromElement(this._element)
                this._menu = n(t).find(y)[0]
              }
              return this._menu
            }),
            (u.prototype._getPlacement = function () {
              const t = n(this._element).parent()
              let e = this._config.placement
              return (
                t.hasClass(d) || this._config.placement === w.TOP
                  ? ((e = w.TOP), n(this._menu).hasClass(h) && (e = w.TOPEND))
                  : n(this._menu).hasClass(h) && (e = w.BOTTOMEND),
                e
              )
            }),
            (u.prototype._detectNavbar = function () {
              return n(this._element).closest('.navbar').length > 0
            }),
            (u.prototype._getPopperConfig = function () {
              const t = {
                placement: this._getPlacement(),
                modifiers: {
                  offset: { offset: this._config.offset },
                  flip: { enabled: this._config.flip },
                },
              }
              return (
                this._inNavbar && (t.modifiers.applyStyle = { enabled: !this._inNavbar }), t
              )
            }),
            (u._jQueryInterface = function (e) {
              return this.each(function () {
                let r = n(this).data(a)
                const i = (void 0 === e ? 'undefined' : t(e)) === 'object' ? e : null
                if (
                  (r || ((r = new u(this, i)), n(this).data(a, r)), typeof e === 'string')
                ) {
                  if (void 0 === r[e]) throw new Error(`No method named "${e}"`)
                  r[e]()
                }
              })
            }),
            (u._clearMenus = function (t) {
              if (!t || (t.which !== 3 && (t.type !== 'keyup' || t.which === 9))) {
                for (let e = n.makeArray(n(g)), r = 0; r < e.length; r++) {
                  const i = u._getParentFromElement(e[r])
                  const o = n(e[r]).data(a)
                  const s = { relatedTarget: e[r] }
                  if (o) {
                    const c = o._menu
                    if (
                      n(i).hasClass(p)
                              && !(
                                t
                                && ((t.type === 'click' && /input|textarea/i.test(t.target.tagName))
                                  || (t.type === 'keyup' && t.which === 9))
                                && n.contains(i, t.target)
                              )
                    ) {
                      const f = n.Event(l.HIDE, s)
                      n(i).trigger(f),
                      f.isDefaultPrevented()
                                  || ('ontouchstart' in document.documentElement
                                    && n('body').children().off('mouseover', null, n.noop),
                                  e[r].setAttribute('aria-expanded', 'false'),
                                  n(c).removeClass(p),
                                  n(i).removeClass(p).trigger(n.Event(l.HIDDEN, s)))
                    }
                  }
                }
              }
            }),
            (u._getParentFromElement = function (t) {
              let e = void 0
              const r = i.getSelectorFromElement(t)
              return r && (e = n(r)[0]), e || t.parentNode
            }),
            (u._dataApiKeydownHandler = function (t) {
              if (
                !(
                  !c.test(t.which)
                          || (/button/i.test(t.target.tagName) && t.which === 32)
                          || /input|textarea/i.test(t.target.tagName)
                          || (t.preventDefault(),
                          t.stopPropagation(),
                          this.disabled || n(this).hasClass(f))
                )
              ) {
                const e = u._getParentFromElement(this)
                const r = n(e).hasClass(p)
                if (
                  (r || (t.which === 27 && t.which === 32))
                          && (!r || (t.which !== 27 && t.which !== 32))
                ) {
                  const i = n(e).find(b).get()
                  if (i.length) {
                    let o = i.indexOf(t.target)
                    t.which === 38 && o > 0 && o--,
                    t.which === 40 && o < i.length - 1 && o++,
                    o < 0 && (o = 0),
                    i[o].focus()
                  }
                } else {
                  if (t.which === 27) {
                    const a = n(e).find(g)[0]
                    n(a).trigger('focus')
                  }
                  n(this).trigger('click')
                }
              }
            }),
            e(u, null, [
              {
                key: 'VERSION',
                get() {
                  return '4.0.0-beta'
                },
              },
              {
                key: 'Default',
                get() {
                  return x
                },
              },
              {
                key: 'DefaultType',
                get() {
                  return E
                },
              },
            ]),
            u
          )
        }())
        n(document)
          .on(l.KEYDOWN_DATA_API, g, T._dataApiKeydownHandler)
          .on(l.KEYDOWN_DATA_API, y, T._dataApiKeydownHandler)
          .on(`${l.CLICK_DATA_API} ${l.KEYUP_DATA_API}`, T._clearMenus)
          .on(l.CLICK_DATA_API, g, function (t) {
            t.preventDefault(),
            t.stopPropagation(),
            T._jQueryInterface.call(n(this), 'toggle')
          })
          .on(l.CLICK_DATA_API, m, (t) => {
            t.stopPropagation()
          }),
        (n.fn[o] = T._jQueryInterface),
        (n.fn[o].Constructor = T),
        (n.fn[o].noConflict = function () {
          return (n.fn[o] = u), T._jQueryInterface
        })
      }(jQuery)),
      (function (n) {
        const o = 'modal'
        const a = '.bs.modal'
        const s = n.fn[o]
        const u = {
          backdrop: !0, keyboard: !0, focus: !0, show: !0,
        }
        const c = {
          backdrop: '(boolean|string)',
          keyboard: 'boolean',
          focus: 'boolean',
          show: 'boolean',
        }
        const l = {
          HIDE: `hide${a}`,
          HIDDEN: `hidden${a}`,
          SHOW: `show${a}`,
          SHOWN: `shown${a}`,
          FOCUSIN: `focusin${a}`,
          RESIZE: `resize${a}`,
          CLICK_DISMISS: `click.dismiss${a}`,
          KEYDOWN_DISMISS: `keydown.dismiss${a}`,
          MOUSEUP_DISMISS: `mouseup.dismiss${a}`,
          MOUSEDOWN_DISMISS: `mousedown.dismiss${a}`,
          CLICK_DATA_API: `click${a}.data-api`,
        }
        const f = 'modal-scrollbar-measure'
        const p = 'modal-backdrop'
        const d = 'modal-open'
        const h = 'fade'
        const v = 'show'
        const g = '.modal-dialog'
        const m = '[data-toggle="modal"]'
        const y = '[data-dismiss="modal"]'
        const _ = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top'
        const b = '.navbar-toggler'
        const w = (function () {
          function s(t, e) {
            r(this, s),
            (this._config = this._getConfig(e)),
            (this._element = t),
            (this._dialog = n(t).find(g)[0]),
            (this._backdrop = null),
            (this._isShown = !1),
            (this._isBodyOverflowing = !1),
            (this._ignoreBackdropClick = !1),
            (this._originalBodyPadding = 0),
            (this._scrollbarWidth = 0)
          }
          return (
            (s.prototype.toggle = function (t) {
              return this._isShown ? this.hide() : this.show(t)
            }),
            (s.prototype.show = function (t) {
              const e = this
              if (!this._isTransitioning) {
                i.supportsTransitionEnd()
                          && n(this._element).hasClass(h)
                          && (this._isTransitioning = !0)
                const r = n.Event(l.SHOW, { relatedTarget: t })
                n(this._element).trigger(r),
                this._isShown
                            || r.isDefaultPrevented()
                            || ((this._isShown = !0),
                            this._checkScrollbar(),
                            this._setScrollbar(),
                            n(document.body).addClass(d),
                            this._setEscapeEvent(),
                            this._setResizeEvent(),
                            n(this._element).on(l.CLICK_DISMISS, y, (t) => e.hide(t)),
                            n(this._dialog).on(l.MOUSEDOWN_DISMISS, () => {
                              n(e._element).one(l.MOUSEUP_DISMISS, (t) => {
                                n(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                              })
                            }),
                            this._showBackdrop(() => e._showElement(t)))
              }
            }),
            (s.prototype.hide = function (t) {
              const e = this
              if ((t && t.preventDefault(), !this._isTransitioning && this._isShown)) {
                const r = i.supportsTransitionEnd() && n(this._element).hasClass(h)
                r && (this._isTransitioning = !0)
                const o = n.Event(l.HIDE)
                n(this._element).trigger(o),
                this._isShown
                            && !o.isDefaultPrevented()
                            && ((this._isShown = !1),
                            this._setEscapeEvent(),
                            this._setResizeEvent(),
                            n(document).off(l.FOCUSIN),
                            n(this._element).removeClass(v),
                            n(this._element).off(l.CLICK_DISMISS),
                            n(this._dialog).off(l.MOUSEDOWN_DISMISS),
                            r
                              ? n(this._element)
                                .one(i.TRANSITION_END, (t) => e._hideModal(t))
                                .emulateTransitionEnd(300)
                              : this._hideModal())
              }
            }),
            (s.prototype.dispose = function () {
              n.removeData(this._element, 'bs.modal'),
              n(window, document, this._element, this._backdrop).off(a),
              (this._config = null),
              (this._element = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._scrollbarWidth = null)
            }),
            (s.prototype.handleUpdate = function () {
              this._adjustDialog()
            }),
            (s.prototype._getConfig = function (t) {
              return (t = n.extend({}, u, t)), i.typeCheckConfig(o, t, c), t
            }),
            (s.prototype._showElement = function (t) {
              const e = this
              const r = i.supportsTransitionEnd() && n(this._element).hasClass(h);
              (this._element.parentNode
                        && this._element.parentNode.nodeType === Node.ELEMENT_NODE)
                        || document.body.appendChild(this._element),
              (this._element.style.display = 'block'),
              this._element.removeAttribute('aria-hidden'),
              (this._element.scrollTop = 0),
              r && i.reflow(this._element),
              n(this._element).addClass(v),
              this._config.focus && this._enforceFocus()
              const o = n.Event(l.SHOWN, { relatedTarget: t })
              const a = function () {
                e._config.focus && e._element.focus(),
                (e._isTransitioning = !1),
                n(e._element).trigger(o)
              }
              r ? n(this._dialog).one(i.TRANSITION_END, a).emulateTransitionEnd(300) : a()
            }),
            (s.prototype._enforceFocus = function () {
              const t = this
              n(document)
                .off(l.FOCUSIN)
                .on(l.FOCUSIN, (e) => {
                  document === e.target
                            || t._element === e.target
                            || n(t._element).has(e.target).length
                            || t._element.focus()
                })
            }),
            (s.prototype._setEscapeEvent = function () {
              const t = this
              this._isShown && this._config.keyboard
                ? n(this._element).on(l.KEYDOWN_DISMISS, (e) => {
                  e.which === 27 && (e.preventDefault(), t.hide())
                })
                : this._isShown || n(this._element).off(l.KEYDOWN_DISMISS)
            }),
            (s.prototype._setResizeEvent = function () {
              const t = this
              this._isShown
                ? n(window).on(l.RESIZE, (e) => t.handleUpdate(e))
                : n(window).off(l.RESIZE)
            }),
            (s.prototype._hideModal = function () {
              const t = this;
              (this._element.style.display = 'none'),
              this._element.setAttribute('aria-hidden', !0),
              (this._isTransitioning = !1),
              this._showBackdrop(() => {
                n(document.body).removeClass(d),
                t._resetAdjustments(),
                t._resetScrollbar(),
                n(t._element).trigger(l.HIDDEN)
              })
            }),
            (s.prototype._removeBackdrop = function () {
              this._backdrop && (n(this._backdrop).remove(), (this._backdrop = null))
            }),
            (s.prototype._showBackdrop = function (t) {
              const e = this
              const r = n(this._element).hasClass(h) ? h : ''
              if (this._isShown && this._config.backdrop) {
                const o = i.supportsTransitionEnd() && r
                if (
                  ((this._backdrop = document.createElement('div')),
                  (this._backdrop.className = p),
                  r && n(this._backdrop).addClass(r),
                  n(this._backdrop).appendTo(document.body),
                  n(this._element).on(l.CLICK_DISMISS, (t) => {
                    e._ignoreBackdropClick
                      ? (e._ignoreBackdropClick = !1)
                      : t.target === t.currentTarget
                                && (e._config.backdrop === 'static' ? e._element.focus() : e.hide())
                  }),
                  o && i.reflow(this._backdrop),
                  n(this._backdrop).addClass(v),
                  !t)
                ) return
                if (!o) return void t()
                n(this._backdrop).one(i.TRANSITION_END, t).emulateTransitionEnd(150)
              } else if (!this._isShown && this._backdrop) {
                n(this._backdrop).removeClass(v)
                const a = function () {
                  e._removeBackdrop(), t && t()
                }
                i.supportsTransitionEnd() && n(this._element).hasClass(h)
                  ? n(this._backdrop).one(i.TRANSITION_END, a).emulateTransitionEnd(150)
                  : a()
              } else t && t()
            }),
            (s.prototype._adjustDialog = function () {
              const t = this._element.scrollHeight > document.documentElement.clientHeight
              !this._isBodyOverflowing
                        && t
                        && (this._element.style.paddingLeft = `${this._scrollbarWidth}px`),
              this._isBodyOverflowing
                          && !t
                          && (this._element.style.paddingRight = `${this._scrollbarWidth}px`)
            }),
            (s.prototype._resetAdjustments = function () {
              (this._element.style.paddingLeft = ''),
              (this._element.style.paddingRight = '')
            }),
            (s.prototype._checkScrollbar = function () {
              (this._isBodyOverflowing = document.body.clientWidth < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth())
            }),
            (s.prototype._setScrollbar = function () {
              const t = this
              if (this._isBodyOverflowing) {
                n(_).each((e, r) => {
                  const i = n(r)[0].style.paddingRight
                  const o = n(r).css('padding-right')
                  n(r)
                    .data('padding-right', i)
                    .css('padding-right', `${parseFloat(o) + t._scrollbarWidth}px`)
                }),
                n(b).each((e, r) => {
                  const i = n(r)[0].style.marginRight
                  const o = n(r).css('margin-right')
                  n(r)
                    .data('margin-right', i)
                    .css('margin-right', `${parseFloat(o) + t._scrollbarWidth}px`)
                })
                const e = document.body.style.paddingRight
                const r = n('body').css('padding-right')
                n('body')
                  .data('padding-right', e)
                  .css('padding-right', `${parseFloat(r) + this._scrollbarWidth}px`)
              }
            }),
            (s.prototype._resetScrollbar = function () {
              n(_).each((t, e) => {
                const r = n(e).data('padding-right')
                void 0 !== r && n(e).css('padding-right', r).removeData('padding-right')
              }),
              n(b).each((t, e) => {
                const r = n(e).data('margin-right')
                void 0 !== r && n(e).css('margin-right', r).removeData('margin-right')
              })
              const t = n('body').data('padding-right')
              void 0 !== t && n('body').css('padding-right', t).removeData('padding-right')
            }),
            (s.prototype._getScrollbarWidth = function () {
              const t = document.createElement('div');
              (t.className = f), document.body.appendChild(t)
              const e = t.getBoundingClientRect().width - t.clientWidth
              return document.body.removeChild(t), e
            }),
            (s._jQueryInterface = function (e, r) {
              return this.each(function () {
                let i = n(this).data('bs.modal')
                const o = n.extend(
                  {},
                  s.Default,
                  n(this).data(),
                  (void 0 === e ? 'undefined' : t(e)) === 'object' && e,
                )
                if (
                  (i || ((i = new s(this, o)), n(this).data('bs.modal', i)),
                  typeof e === 'string')
                ) {
                  if (void 0 === i[e]) throw new Error(`No method named "${e}"`)
                  i[e](r)
                } else o.show && i.show(r)
              })
            }),
            e(s, null, [
              {
                key: 'VERSION',
                get() {
                  return '4.0.0-beta'
                },
              },
              {
                key: 'Default',
                get() {
                  return u
                },
              },
            ]),
            s
          )
        }())
        n(document).on(l.CLICK_DATA_API, m, function (t) {
          const e = this
          let r = void 0
          const o = i.getSelectorFromElement(this)
          o && (r = n(o)[0])
          const a = n(r).data('bs.modal') ? 'toggle' : n.extend({}, n(r).data(), n(this).data());
          (this.tagName !== 'A' && this.tagName !== 'AREA') || t.preventDefault()
          var s = n(r).one(l.SHOW, (t) => {
            t.isDefaultPrevented()
                    || s.one(l.HIDDEN, () => {
                      n(e).is(':visible') && e.focus()
                    })
          })
          w._jQueryInterface.call(n(r), a, this)
        }),
        (n.fn[o] = w._jQueryInterface),
        (n.fn[o].Constructor = w),
        (n.fn[o].noConflict = function () {
          return (n.fn[o] = s), w._jQueryInterface
        })
      }(jQuery)),
      (function (n) {
        const o = 'scrollspy'
        const a = n.fn[o]
        const s = { offset: 10, method: 'auto', target: '' }
        const u = { offset: 'number', method: 'string', target: '(string|element)' }
        const c = {
          ACTIVATE: 'activate.bs.scrollspy',
          SCROLL: 'scroll.bs.scrollspy',
          LOAD_DATA_API: 'load.bs.scrollspy.data-api',
        }
        const l = 'dropdown-item'
        const f = 'active'
        const p = '[data-spy="scroll"]'
        const d = '.active'
        const h = '.nav, .list-group'
        const v = '.nav-link'
        const g = '.list-group-item'
        const m = '.dropdown'
        const y = '.dropdown-item'
        const _ = '.dropdown-toggle'
        const b = 'offset'
        const w = 'position'
        const x = (function () {
          function a(t, e) {
            const i = this
            r(this, a),
            (this._element = t),
            (this._scrollElement = t.tagName === 'BODY' ? window : t),
            (this._config = this._getConfig(e)),
            (this._selector = `${this._config.target
            } ${
              v
            },${
              this._config.target
            } ${
              g
            },${
              this._config.target
            } ${
              y}`),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            n(this._scrollElement).on(c.SCROLL, (t) => i._process(t)),
            this.refresh(),
            this._process()
          }
          return (
            (a.prototype.refresh = function () {
              const t = this
              const e = this._scrollElement !== this._scrollElement.window ? w : b
              const r = this._config.method === 'auto' ? e : this._config.method
              const o = r === w ? this._getScrollTop() : 0;
              (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              n
                .makeArray(n(this._selector))
                .map((t) => {
                  let e = void 0
                  const a = i.getSelectorFromElement(t)
                  if ((a && (e = n(a)[0]), e)) {
                    const s = e.getBoundingClientRect()
                    if (s.width || s.height) return [n(e)[r]().top + o, a]
                  }
                  return null
                })
                .filter((t) => t)
                .sort((t, e) => t[0] - e[0])
                .forEach((e) => {
                  t._offsets.push(e[0]), t._targets.push(e[1])
                })
            }),
            (a.prototype.dispose = function () {
              n.removeData(this._element, 'bs.scrollspy'),
              n(this._scrollElement).off('.bs.scrollspy'),
              (this._element = null),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null)
            }),
            (a.prototype._getConfig = function (t) {
              if (typeof (t = n.extend({}, s, t)).target !== 'string') {
                let e = n(t.target).attr('id')
                e || ((e = i.getUID(o)), n(t.target).attr('id', e)), (t.target = `#${e}`)
              }
              return i.typeCheckConfig(o, t, u), t
            }),
            (a.prototype._getScrollTop = function () {
              return this._scrollElement === window
                ? this._scrollElement.pageYOffset
                : this._scrollElement.scrollTop
            }),
            (a.prototype._getScrollHeight = function () {
              return (
                this._scrollElement.scrollHeight
                        || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
              )
            }),
            (a.prototype._getOffsetHeight = function () {
              return this._scrollElement === window
                ? window.innerHeight
                : this._scrollElement.getBoundingClientRect().height
            }),
            (a.prototype._process = function () {
              const t = this._getScrollTop() + this._config.offset
              const e = this._getScrollHeight()
              const n = this._config.offset + e - this._getOffsetHeight()
              if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
                const r = this._targets[this._targets.length - 1]
                this._activeTarget !== r && this._activate(r)
              } else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return (this._activeTarget = null), void this._clear()
                for (let i = this._offsets.length; i--;) {
                  this._activeTarget !== this._targets[i]
                            && t >= this._offsets[i]
                            && (void 0 === this._offsets[i + 1] || t < this._offsets[i + 1])
                            && this._activate(this._targets[i])
                }
              }
            }),
            (a.prototype._activate = function (t) {
              (this._activeTarget = t), this._clear()
              let e = this._selector.split(',')
              e = e.map((e) => `${e}[data-target="${t}"],${e}[href="${t}"]`)
              const r = n(e.join(','))
              r.hasClass(l)
                ? (r.closest(m).find(_).addClass(f), r.addClass(f))
                : (r.addClass(f),
                r
                  .parents(h)
                  .prev(`${v}, ${g}`)
                  .addClass(f)),
              n(this._scrollElement).trigger(c.ACTIVATE, { relatedTarget: t })
            }),
            (a.prototype._clear = function () {
              n(this._selector).filter(d).removeClass(f)
            }),
            (a._jQueryInterface = function (e) {
              return this.each(function () {
                let r = n(this).data('bs.scrollspy')
                const i = (void 0 === e ? 'undefined' : t(e)) === 'object' && e
                if (
                  (r || ((r = new a(this, i)), n(this).data('bs.scrollspy', r)),
                  typeof e === 'string')
                ) {
                  if (void 0 === r[e]) throw new Error(`No method named "${e}"`)
                  r[e]()
                }
              })
            }),
            e(a, null, [
              {
                key: 'VERSION',
                get() {
                  return '4.0.0-beta'
                },
              },
              {
                key: 'Default',
                get() {
                  return s
                },
              },
            ]),
            a
          )
        }())
        n(window).on(c.LOAD_DATA_API, () => {
          for (let t = n.makeArray(n(p)), e = t.length; e--;) {
            const r = n(t[e])
            x._jQueryInterface.call(r, r.data())
          }
        }),
        (n.fn[o] = x._jQueryInterface),
        (n.fn[o].Constructor = x),
        (n.fn[o].noConflict = function () {
          return (n.fn[o] = a), x._jQueryInterface
        })
      }(jQuery)),
      (function (t) {
        const n = t.fn.tab
        const o = {
          HIDE: 'hide.bs.tab',
          HIDDEN: 'hidden.bs.tab',
          SHOW: 'show.bs.tab',
          SHOWN: 'shown.bs.tab',
          CLICK_DATA_API: 'click.bs.tab.data-api',
        }
        const a = 'dropdown-menu'
        const s = 'active'
        const u = 'disabled'
        const c = 'fade'
        const l = 'show'
        const f = '.dropdown'
        const p = '.nav, .list-group'
        const d = '.active'
        const h = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'
        const v = '.dropdown-toggle'
        const g = '> .dropdown-menu .active'
        const m = (function () {
          function n(t) {
            r(this, n), (this._element = t)
          }
          return (
            (n.prototype.show = function () {
              const e = this
              if (
                !(
                  (this._element.parentNode
                            && this._element.parentNode.nodeType === Node.ELEMENT_NODE
                            && t(this._element).hasClass(s))
                          || t(this._element).hasClass(u)
                )
              ) {
                let n = void 0
                let r = void 0
                const a = t(this._element).closest(p)[0]
                const c = i.getSelectorFromElement(this._element)
                a && (r = (r = t.makeArray(t(a).find(d)))[r.length - 1])
                const l = t.Event(o.HIDE, { relatedTarget: this._element })
                const f = t.Event(o.SHOW, { relatedTarget: r })
                if (
                  (r && t(r).trigger(l),
                  t(this._element).trigger(f),
                  !f.isDefaultPrevented() && !l.isDefaultPrevented())
                ) {
                  c && (n = t(c)[0]), this._activate(this._element, a)
                  const h = function () {
                    const n = t.Event(o.HIDDEN, { relatedTarget: e._element })
                    const i = t.Event(o.SHOWN, { relatedTarget: r })
                    t(r).trigger(n), t(e._element).trigger(i)
                  }
                  n ? this._activate(n, n.parentNode, h) : h()
                }
              }
            }),
            (n.prototype.dispose = function () {
              t.removeData(this._element, 'bs.tab'), (this._element = null)
            }),
            (n.prototype._activate = function (e, n, r) {
              const o = this
              const a = t(n).find(d)[0]
              const s = r && i.supportsTransitionEnd() && a && t(a).hasClass(c)
              const u = function () {
                return o._transitionComplete(e, a, s, r)
              }
              a && s ? t(a).one(i.TRANSITION_END, u).emulateTransitionEnd(150) : u(),
              a && t(a).removeClass(l)
            }),
            (n.prototype._transitionComplete = function (e, n, r, o) {
              if (n) {
                t(n).removeClass(s)
                const u = t(n.parentNode).find(g)[0]
                u && t(u).removeClass(s), n.setAttribute('aria-expanded', !1)
              }
              if (
                (t(e).addClass(s),
                e.setAttribute('aria-expanded', !0),
                r ? (i.reflow(e), t(e).addClass(l)) : t(e).removeClass(c),
                e.parentNode && t(e.parentNode).hasClass(a))
              ) {
                const p = t(e).closest(f)[0]
                p && t(p).find(v).addClass(s), e.setAttribute('aria-expanded', !0)
              }
              o && o()
            }),
            (n._jQueryInterface = function (e) {
              return this.each(function () {
                const r = t(this)
                let i = r.data('bs.tab')
                if ((i || ((i = new n(this)), r.data('bs.tab', i)), typeof e === 'string')) {
                  if (void 0 === i[e]) throw new Error(`No method named "${e}"`)
                  i[e]()
                }
              })
            }),
            e(n, null, [
              {
                key: 'VERSION',
                get() {
                  return '4.0.0-beta'
                },
              },
            ]),
            n
          )
        }())
        t(document).on(o.CLICK_DATA_API, h, function (e) {
          e.preventDefault(), m._jQueryInterface.call(t(this), 'show')
        }),
        (t.fn.tab = m._jQueryInterface),
        (t.fn.tab.Constructor = m),
        (t.fn.tab.noConflict = function () {
          return (t.fn.tab = n), m._jQueryInterface
        })
      }(jQuery)),
      (function (n) {
        if (typeof Popper === 'undefined') throw new Error('Bootstrap tooltips require Popper.js (https://popper.js.org)')
        const o = 'tooltip'
        const a = '.bs.tooltip'
        const s = n.fn[o]
        const u = new RegExp('(^|\\s)bs-tooltip\\S+', 'g')
        const c = {
          animation: 'boolean',
          template: 'string',
          title: '(string|element|function)',
          trigger: 'string',
          delay: '(number|object)',
          html: 'boolean',
          selector: '(string|boolean)',
          placement: '(string|function)',
          offset: '(number|string)',
          container: '(string|element|boolean)',
          fallbackPlacement: '(string|array)',
        }
        const l = {
          AUTO: 'auto', TOP: 'top', RIGHT: 'right', BOTTOM: 'bottom', LEFT: 'left',
        }
        const f = {
          animation: !0,
          template:
                    '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: 'hover focus',
          title: '',
          delay: 0,
          html: !1,
          selector: !1,
          placement: 'top',
          offset: 0,
          container: !1,
          fallbackPlacement: 'flip',
        }
        const p = 'show'
        const d = 'out'
        const h = {
          HIDE: `hide${a}`,
          HIDDEN: `hidden${a}`,
          SHOW: `show${a}`,
          SHOWN: `shown${a}`,
          INSERTED: `inserted${a}`,
          CLICK: `click${a}`,
          FOCUSIN: `focusin${a}`,
          FOCUSOUT: `focusout${a}`,
          MOUSEENTER: `mouseenter${a}`,
          MOUSELEAVE: `mouseleave${a}`,
        }
        const v = 'fade'
        const g = 'show'
        const m = '.tooltip-inner'
        const y = '.arrow'
        const _ = 'hover'
        const b = 'focus'
        const w = 'click'
        const x = 'manual'
        const E = (function () {
          function s(t, e) {
            r(this, s),
            (this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ''),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this.element = t),
            (this.config = this._getConfig(e)),
            (this.tip = null),
            this._setListeners()
          }
          return (
            (s.prototype.enable = function () {
              this._isEnabled = !0
            }),
            (s.prototype.disable = function () {
              this._isEnabled = !1
            }),
            (s.prototype.toggleEnabled = function () {
              this._isEnabled = !this._isEnabled
            }),
            (s.prototype.toggle = function (t) {
              if (t) {
                const e = this.constructor.DATA_KEY
                let r = n(t.currentTarget).data(e)
                r
                          || ((r = new this.constructor(t.currentTarget, this._getDelegateConfig())),
                          n(t.currentTarget).data(e, r)),
                (r._activeTrigger.click = !r._activeTrigger.click),
                r._isWithActiveTrigger() ? r._enter(null, r) : r._leave(null, r)
              } else {
                if (n(this.getTipElement()).hasClass(g)) return void this._leave(null, this)
                this._enter(null, this)
              }
            }),
            (s.prototype.dispose = function () {
              clearTimeout(this._timeout),
              n.removeData(this.element, this.constructor.DATA_KEY),
              n(this.element).off(this.constructor.EVENT_KEY),
              n(this.element).closest('.modal').off('hide.bs.modal'),
              this.tip && n(this.tip).remove(),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null),
              this._popper !== null && this._popper.destroy(),
              (this._popper = null),
              (this.element = null),
              (this.config = null),
              (this.tip = null)
            }),
            (s.prototype.show = function () {
              const t = this
              if (n(this.element).css('display') === 'none') throw new Error('Please use show on visible elements')
              const e = n.Event(this.constructor.Event.SHOW)
              if (this.isWithContent() && this._isEnabled) {
                n(this.element).trigger(e)
                const r = n.contains(this.element.ownerDocument.documentElement, this.element)
                if (e.isDefaultPrevented() || !r) return
                const o = this.getTipElement()
                const a = i.getUID(this.constructor.NAME)
                o.setAttribute('id', a),
                this.element.setAttribute('aria-describedby', a),
                this.setContent(),
                this.config.animation && n(o).addClass(v)
                const u = typeof this.config.placement === 'function'
                  ? this.config.placement.call(this, o, this.element)
                  : this.config.placement
                const c = this._getAttachment(u)
                this.addAttachmentClass(c)
                const l = !1 === this.config.container ? document.body : n(this.config.container)
                n(o).data(this.constructor.DATA_KEY, this),
                n.contains(this.element.ownerDocument.documentElement, this.tip)
                            || n(o).appendTo(l),
                n(this.element).trigger(this.constructor.Event.INSERTED),
                (this._popper = new Popper(this.element, o, {
                  placement: c,
                  modifiers: {
                    offset: { offset: this.config.offset },
                    flip: { behavior: this.config.fallbackPlacement },
                    arrow: { element: y },
                  },
                  onCreate(e) {
                    e.originalPlacement !== e.placement
                                && t._handlePopperPlacementChange(e)
                  },
                  onUpdate(e) {
                    t._handlePopperPlacementChange(e)
                  },
                })),
                n(o).addClass(g),
                'ontouchstart' in document.documentElement
                            && n('body').children().on('mouseover', null, n.noop)
                const f = function () {
                  t.config.animation && t._fixTransition()
                  const e = t._hoverState;
                  (t._hoverState = null),
                  n(t.element).trigger(t.constructor.Event.SHOWN),
                  e === d && t._leave(null, t)
                }
                i.supportsTransitionEnd() && n(this.tip).hasClass(v)
                  ? n(this.tip)
                    .one(i.TRANSITION_END, f)
                    .emulateTransitionEnd(s._TRANSITION_DURATION)
                  : f()
              }
            }),
            (s.prototype.hide = function (t) {
              const e = this
              const r = this.getTipElement()
              const o = n.Event(this.constructor.Event.HIDE)
              const a = function () {
                e._hoverState !== p && r.parentNode && r.parentNode.removeChild(r),
                e._cleanTipClass(),
                e.element.removeAttribute('aria-describedby'),
                n(e.element).trigger(e.constructor.Event.HIDDEN),
                e._popper !== null && e._popper.destroy(),
                t && t()
              }
              n(this.element).trigger(o),
              o.isDefaultPrevented()
                          || (n(r).removeClass(g),
                          'ontouchstart' in document.documentElement
                            && n('body').children().off('mouseover', null, n.noop),
                          (this._activeTrigger[w] = !1),
                          (this._activeTrigger[b] = !1),
                          (this._activeTrigger[_] = !1),
                          i.supportsTransitionEnd() && n(this.tip).hasClass(v)
                            ? n(r).one(i.TRANSITION_END, a).emulateTransitionEnd(150)
                            : a(),
                          (this._hoverState = ''))
            }),
            (s.prototype.update = function () {
              this._popper !== null && this._popper.scheduleUpdate()
            }),
            (s.prototype.isWithContent = function () {
              return Boolean(this.getTitle())
            }),
            (s.prototype.addAttachmentClass = function (t) {
              n(this.getTipElement()).addClass(`bs-tooltip-${t}`)
            }),
            (s.prototype.getTipElement = function () {
              return (this.tip = this.tip || n(this.config.template)[0])
            }),
            (s.prototype.setContent = function () {
              const t = n(this.getTipElement())
              this.setElementContent(t.find(m), this.getTitle()), t.removeClass(`${v} ${g}`)
            }),
            (s.prototype.setElementContent = function (e, r) {
              const i = this.config.html(void 0 === r ? 'undefined' : t(r)) === 'object' && (r.nodeType || r.jquery)
                ? i
                  ? n(r).parent().is(e) || e.empty().append(r)
                  : e.text(n(r).text())
                : e[i ? 'html' : 'text'](r)
            }),
            (s.prototype.getTitle = function () {
              let t = this.element.getAttribute('data-original-title')
              return (
                t
                          || (t = typeof this.config.title === 'function'
                            ? this.config.title.call(this.element)
                            : this.config.title),
                t
              )
            }),
            (s.prototype._getAttachment = function (t) {
              return l[t.toUpperCase()]
            }),
            (s.prototype._setListeners = function () {
              const t = this
              this.config.trigger.split(' ').forEach((e) => {
                if (e === 'click') {
                  n(t.element).on(t.constructor.Event.CLICK, t.config.selector, (
                    e,
                  ) => t.toggle(e))
                } else if (e !== x) {
                  const r = e === _
                    ? t.constructor.Event.MOUSEENTER
                    : t.constructor.Event.FOCUSIN
                  const i = e === _
                    ? t.constructor.Event.MOUSELEAVE
                    : t.constructor.Event.FOCUSOUT
                  n(t.element)
                    .on(r, t.config.selector, (e) => t._enter(e))
                    .on(i, t.config.selector, (e) => t._leave(e))
                }
                n(t.element)
                  .closest('.modal')
                  .on('hide.bs.modal', () => t.hide())
              }),
              this.config.selector
                ? (this.config = n.extend({}, this.config, {
                  trigger: 'manual',
                  selector: '',
                }))
                : this._fixTitle()
            }),
            (s.prototype._fixTitle = function () {
              const e = t(this.element.getAttribute('data-original-title'));
              (this.element.getAttribute('title') || e !== 'string')
                        && (this.element.setAttribute(
                          'data-original-title',
                          this.element.getAttribute('title') || '',
                        ),
                        this.element.setAttribute('title', ''))
            }),
            (s.prototype._enter = function (t, e) {
              const r = this.constructor.DATA_KEY;
              (e = e || n(t.currentTarget).data(r))
                        || ((e = new this.constructor(t.currentTarget, this._getDelegateConfig())),
                        n(t.currentTarget).data(r, e)),
              t && (e._activeTrigger[t.type === 'focusin' ? b : _] = !0),
              n(e.getTipElement()).hasClass(g) || e._hoverState === p
                ? (e._hoverState = p)
                : (clearTimeout(e._timeout),
                (e._hoverState = p),
                e.config.delay && e.config.delay.show
                  ? (e._timeout = setTimeout(() => {
                    e._hoverState === p && e.show()
                  }, e.config.delay.show))
                  : e.show())
            }),
            (s.prototype._leave = function (t, e) {
              const r = this.constructor.DATA_KEY;
              (e = e || n(t.currentTarget).data(r))
                        || ((e = new this.constructor(t.currentTarget, this._getDelegateConfig())),
                        n(t.currentTarget).data(r, e)),
              t && (e._activeTrigger[t.type === 'focusout' ? b : _] = !1),
              e._isWithActiveTrigger()
                          || (clearTimeout(e._timeout),
                          (e._hoverState = d),
                          e.config.delay && e.config.delay.hide
                            ? (e._timeout = setTimeout(() => {
                              e._hoverState === d && e.hide()
                            }, e.config.delay.hide))
                            : e.hide())
            }),
            (s.prototype._isWithActiveTrigger = function () {
              for (const t in this._activeTrigger) if (this._activeTrigger[t]) return !0
              return !1
            }),
            (s.prototype._getConfig = function (t) {
              return (
                (t = n.extend({}, this.constructor.Default, n(this.element).data(), t))
                  .delay
                          && typeof t.delay === 'number'
                          && (t.delay = { show: t.delay, hide: t.delay }),
                t.title && typeof t.title === 'number' && (t.title = t.title.toString()),
                t.content
                          && typeof t.content === 'number'
                          && (t.content = t.content.toString()),
                i.typeCheckConfig(o, t, this.constructor.DefaultType),
                t
              )
            }),
            (s.prototype._getDelegateConfig = function () {
              const t = {}
              if (this.config) for (const e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e])
              return t
            }),
            (s.prototype._cleanTipClass = function () {
              const t = n(this.getTipElement())
              const e = t.attr('class').match(u)
              e !== null && e.length > 0 && t.removeClass(e.join(''))
            }),
            (s.prototype._handlePopperPlacementChange = function (t) {
              this._cleanTipClass(),
              this.addAttachmentClass(this._getAttachment(t.placement))
            }),
            (s.prototype._fixTransition = function () {
              const t = this.getTipElement()
              const e = this.config.animation
              t.getAttribute('x-placement') === null
                        && (n(t).removeClass(v),
                        (this.config.animation = !1),
                        this.hide(),
                        this.show(),
                        (this.config.animation = e))
            }),
            (s._jQueryInterface = function (e) {
              return this.each(function () {
                let r = n(this).data('bs.tooltip')
                const i = (void 0 === e ? 'undefined' : t(e)) === 'object' && e
                if (
                  (r || !/dispose|hide/.test(e))
                          && (r || ((r = new s(this, i)), n(this).data('bs.tooltip', r)),
                          typeof e === 'string')
                ) {
                  if (void 0 === r[e]) throw new Error(`No method named "${e}"`)
                  r[e]()
                }
              })
            }),
            e(s, null, [
              {
                key: 'VERSION',
                get() {
                  return '4.0.0-beta'
                },
              },
              {
                key: 'Default',
                get() {
                  return f
                },
              },
              {
                key: 'NAME',
                get() {
                  return o
                },
              },
              {
                key: 'DATA_KEY',
                get() {
                  return 'bs.tooltip'
                },
              },
              {
                key: 'Event',
                get() {
                  return h
                },
              },
              {
                key: 'EVENT_KEY',
                get() {
                  return a
                },
              },
              {
                key: 'DefaultType',
                get() {
                  return c
                },
              },
            ]),
            s
          )
        }())
        return (
          (n.fn[o] = E._jQueryInterface),
          (n.fn[o].Constructor = E),
          (n.fn[o].noConflict = function () {
            return (n.fn[o] = s), E._jQueryInterface
          }),
          E
        )
      }(jQuery)))
      !(function (i) {
        const a = 'popover'
        const s = '.bs.popover'
        const u = i.fn[a]
        const c = new RegExp('(^|\\s)bs-popover\\S+', 'g')
        const l = i.extend({}, o.Default, {
          placement: 'right',
          trigger: 'click',
          content: '',
          template:
                '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        })
        const f = i.extend({}, o.DefaultType, { content: '(string|element|function)' })
        const p = 'fade'
        const d = 'show'
        const h = '.popover-header'
        const v = '.popover-body'
        const g = {
          HIDE: `hide${s}`,
          HIDDEN: `hidden${s}`,
          SHOW: `show${s}`,
          SHOWN: `shown${s}`,
          INSERTED: `inserted${s}`,
          CLICK: `click${s}`,
          FOCUSIN: `focusin${s}`,
          FOCUSOUT: `focusout${s}`,
          MOUSEENTER: `mouseenter${s}`,
          MOUSELEAVE: `mouseleave${s}`,
        }
        const m = (function (o) {
          function u() {
            return r(this, u), n(this, o.apply(this, arguments))
          }
          return (
            (function (t, e) {
              if (typeof e !== 'function' && e !== null) {
                throw new TypeError(
                  `Super expression must either be null or a function, not ${typeof e}`,
                )
              }
              (t.prototype = Object.create(e && e.prototype, {
                constructor: {
                  value: t, enumerable: !1, writable: !0, configurable: !0,
                },
              })),
              e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e))
            }(u, o)),
            (u.prototype.isWithContent = function () {
              return this.getTitle() || this._getContent()
            }),
            (u.prototype.addAttachmentClass = function (t) {
              i(this.getTipElement()).addClass(`bs-popover-${t}`)
            }),
            (u.prototype.getTipElement = function () {
              return (this.tip = this.tip || i(this.config.template)[0])
            }),
            (u.prototype.setContent = function () {
              const t = i(this.getTipElement())
              this.setElementContent(t.find(h), this.getTitle()),
              this.setElementContent(t.find(v), this._getContent()),
              t.removeClass(`${p} ${d}`)
            }),
            (u.prototype._getContent = function () {
              return (
                this.element.getAttribute('data-content')
                    || (typeof this.config.content === 'function'
                      ? this.config.content.call(this.element)
                      : this.config.content)
              )
            }),
            (u.prototype._cleanTipClass = function () {
              const t = i(this.getTipElement())
              const e = t.attr('class').match(c)
              e !== null && e.length > 0 && t.removeClass(e.join(''))
            }),
            (u._jQueryInterface = function (e) {
              return this.each(function () {
                let n = i(this).data('bs.popover')
                const r = (void 0 === e ? 'undefined' : t(e)) === 'object' ? e : null
                if (
                  (n || !/destroy|hide/.test(e))
                      && (n || ((n = new u(this, r)), i(this).data('bs.popover', n)),
                      typeof e === 'string')
                ) {
                  if (void 0 === n[e]) throw new Error(`No method named "${e}"`)
                  n[e]()
                }
              })
            }),
            e(u, null, [
              {
                key: 'VERSION',
                get() {
                  return '4.0.0-beta'
                },
              },
              {
                key: 'Default',
                get() {
                  return l
                },
              },
              {
                key: 'NAME',
                get() {
                  return a
                },
              },
              {
                key: 'DATA_KEY',
                get() {
                  return 'bs.popover'
                },
              },
              {
                key: 'Event',
                get() {
                  return g
                },
              },
              {
                key: 'EVENT_KEY',
                get() {
                  return s
                },
              },
              {
                key: 'DefaultType',
                get() {
                  return f
                },
              },
            ]),
            u
          )
        }(o));
        (i.fn[a] = m._jQueryInterface),
        (i.fn[a].Constructor = m),
        (i.fn[a].noConflict = function () {
          return (i.fn[a] = u), m._jQueryInterface
        })
      }(jQuery))
    }())
  },
  function (t, e, n) {
    t.exports = n(19)
  },
  function (t, e, n) {
    const r = n(0)
    const i = n(2)
    const o = n(20)
    const a = n(8)
    function s(t) {
      const e = new o(t)
      const n = i(o.prototype.request, e)
      return r.extend(n, o.prototype, e), r.extend(n, e), n
    }
    const u = s(n(5));
    (u.Axios = o),
    (u.create = function (t) {
      return s(a(u.defaults, t))
    }),
    (u.Cancel = n(9)),
    (u.CancelToken = n(34)),
    (u.isCancel = n(4)),
    (u.all = function (t) {
      return Promise.all(t)
    }),
    (u.spread = n(35)),
    (t.exports = u),
    (t.exports.default = u)
  },
  function (t, e, n) {
    const r = n(0)
    const i = n(3)
    const o = n(21)
    const a = n(22)
    const s = n(8)
    function u(t) {
      (this.defaults = t), (this.interceptors = { request: new o(), response: new o() })
    }
    (u.prototype.request = function (t) {
      typeof t === 'string' ? ((t = arguments[1] || {}).url = arguments[0]) : (t = t || {}),
      (t = s(this.defaults, t)).method
        ? (t.method = t.method.toLowerCase())
        : this.defaults.method
          ? (t.method = this.defaults.method.toLowerCase())
          : (t.method = 'get')
      const e = [a, void 0]
      let n = Promise.resolve(t)
      for (
        this.interceptors.request.forEach((t) => {
          e.unshift(t.fulfilled, t.rejected)
        }),
        this.interceptors.response.forEach((t) => {
          e.push(t.fulfilled, t.rejected)
        });
        e.length;

      ) n = n.then(e.shift(), e.shift())
      return n
    }),
    (u.prototype.getUri = function (t) {
      return (t = s(this.defaults, t)), i(t.url, t.params, t.paramsSerializer).replace(/^\?/, '')
    }),
    r.forEach(['delete', 'get', 'head', 'options'], (t) => {
      u.prototype[t] = function (e, n) {
        return this.request(r.merge(n || {}, { method: t, url: e }))
      }
    }),
    r.forEach(['post', 'put', 'patch'], (t) => {
      u.prototype[t] = function (e, n, i) {
        return this.request(r.merge(i || {}, { method: t, url: e, data: n }))
      }
    }),
    (t.exports = u)
  },
  function (t, e, n) {
    const r = n(0)
    function i() {
      this.handlers = []
    }
    (i.prototype.use = function (t, e) {
      return this.handlers.push({ fulfilled: t, rejected: e }), this.handlers.length - 1
    }),
    (i.prototype.eject = function (t) {
      this.handlers[t] && (this.handlers[t] = null)
    }),
    (i.prototype.forEach = function (t) {
      r.forEach(this.handlers, (e) => {
        e !== null && t(e)
      })
    }),
    (t.exports = i)
  },
  function (t, e, n) {
    const r = n(0)
    const i = n(23)
    const o = n(4)
    const a = n(5)
    function s(t) {
      t.cancelToken && t.cancelToken.throwIfRequested()
    }
    t.exports = function (t) {
      return (
        s(t),
        (t.headers = t.headers || {}),
        (t.data = i(t.data, t.headers, t.transformRequest)),
        (t.headers = r.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers)),
        r.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (e) => {
          delete t.headers[e]
        }),
        (t.adapter || a.adapter)(t).then(
          (e) => (s(t), (e.data = i(e.data, e.headers, t.transformResponse)), e),
          (e) => ((
            o(e)
                || (s(t),
                e
                  && e.response
                  && (e.response.data = i(e.response.data, e.response.headers, t.transformResponse))),
            Promise.reject(e)
          )),
        )
      )
    }
  },
  function (t, e, n) {
    const r = n(0)
    t.exports = function (t, e, n) {
      return (
        r.forEach(n, (n) => {
          t = n(t, e)
        }),
        t
      )
    }
  },
  function (t, e) {
    let n
    let r
    const i = (t.exports = {})
    function o() {
      throw new Error('setTimeout has not been defined')
    }
    function a() {
      throw new Error('clearTimeout has not been defined')
    }
    function s(t) {
      if (n === setTimeout) return setTimeout(t, 0)
      if ((n === o || !n) && setTimeout) return (n = setTimeout), setTimeout(t, 0)
      try {
        return n(t, 0)
      } catch (e) {
        try {
          return n.call(null, t, 0)
        } catch (e) {
          return n.call(this, t, 0)
        }
      }
    }
    !(function () {
      try {
        n = typeof setTimeout === 'function' ? setTimeout : o
      } catch (t) {
        n = o
      }
      try {
        r = typeof clearTimeout === 'function' ? clearTimeout : a
      } catch (t) {
        r = a
      }
    }())
    let u
    let c = []
    let l = !1
    let f = -1
    function p() {
      l && u && ((l = !1), u.length ? (c = u.concat(c)) : (f = -1), c.length && d())
    }
    function d() {
      if (!l) {
        const t = s(p)
        l = !0
        for (let e = c.length; e;) {
          for (u = c, c = []; ++f < e;) u && u[f].run();
          (f = -1), (e = c.length)
        }
        (u = null),
        (l = !1),
        (function (t) {
          if (r === clearTimeout) return clearTimeout(t)
          if ((r === a || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(t)
          try {
            r(t)
          } catch (e) {
            try {
              return r.call(null, t)
            } catch (e) {
              return r.call(this, t)
            }
          }
        }(t))
      }
    }
    function h(t, e) {
      (this.fun = t), (this.array = e)
    }
    function v() {}
    (i.nextTick = function (t) {
      const e = new Array(arguments.length - 1)
      if (arguments.length > 1) for (let n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]
      c.push(new h(t, e)), c.length !== 1 || l || s(d)
    }),
    (h.prototype.run = function () {
      this.fun.apply(null, this.array)
    }),
    (i.title = 'browser'),
    (i.browser = !0),
    (i.env = {}),
    (i.argv = []),
    (i.version = ''),
    (i.versions = {}),
    (i.on = v),
    (i.addListener = v),
    (i.once = v),
    (i.off = v),
    (i.removeListener = v),
    (i.removeAllListeners = v),
    (i.emit = v),
    (i.prependListener = v),
    (i.prependOnceListener = v),
    (i.listeners = function (t) {
      return []
    }),
    (i.binding = function (t) {
      throw new Error('process.binding is not supported')
    }),
    (i.cwd = function () {
      return '/'
    }),
    (i.chdir = function (t) {
      throw new Error('process.chdir is not supported')
    }),
    (i.umask = function () {
      return 0
    })
  },
  function (t, e, n) {
    const r = n(0)
    t.exports = function (t, e) {
      r.forEach(t, (n, r) => {
        r !== e && r.toUpperCase() === e.toUpperCase() && ((t[e] = n), delete t[r])
      })
    }
  },
  function (t, e, n) {
    const r = n(7)
    t.exports = function (t, e, n) {
      const i = n.config.validateStatus
      !i || i(n.status)
        ? t(n)
        : e(r(`Request failed with status code ${n.status}`, n.config, null, n.request, n))
    }
  },
  function (t, e, n) {
    t.exports = function (t, e, n, r, i) {
      return (
        (t.config = e),
        n && (t.code = n),
        (t.request = r),
        (t.response = i),
        (t.isAxiosError = !0),
        (t.toJSON = function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
          }
        }),
        t
      )
    }
  },
  function (t, e, n) {
    const r = n(29)
    const i = n(30)
    t.exports = function (t, e) {
      return t && !r(e) ? i(t, e) : e
    }
  },
  function (t, e, n) {
    t.exports = function (t) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
    }
  },
  function (t, e, n) {
    t.exports = function (t, e) {
      return e ? `${t.replace(/\/+$/, '')}/${e.replace(/^\/+/, '')}` : t
    }
  },
  function (t, e, n) {
    const r = n(0)
    const i = [
      'age',
      'authorization',
      'content-length',
      'content-type',
      'etag',
      'expires',
      'from',
      'host',
      'if-modified-since',
      'if-unmodified-since',
      'last-modified',
      'location',
      'max-forwards',
      'proxy-authorization',
      'referer',
      'retry-after',
      'user-agent',
    ]
    t.exports = function (t) {
      let e
      let n
      let o
      const a = {}
      return t
        ? (r.forEach(t.split('\n'), (t) => {
          if (
            ((o = t.indexOf(':')),
            (e = r.trim(t.substr(0, o)).toLowerCase()),
            (n = r.trim(t.substr(o + 1))),
            e)
          ) {
            if (a[e] && i.indexOf(e) >= 0) return
            a[e] = e === 'set-cookie' ? (a[e] ? a[e] : []).concat([n]) : a[e] ? `${a[e]}, ${n}` : n
          }
        }),
        a)
        : a
    }
  },
  function (t, e, n) {
    const r = n(0)
    t.exports = r.isStandardBrowserEnv()
      ? (function () {
        let t
        const e = /(msie|trident)/i.test(navigator.userAgent)
        const n = document.createElement('a')
        function i(t) {
          let r = t
          return (
            e && (n.setAttribute('href', r), (r = n.href)),
            n.setAttribute('href', r),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, '') : '',
              hash: n.hash ? n.hash.replace(/^#/, '') : '',
              hostname: n.hostname,
              port: n.port,
              pathname: n.pathname.charAt(0) === '/' ? n.pathname : `/${n.pathname}`,
            }
          )
        }
        return (
          (t = i(window.location.href)),
          function (e) {
            const n = r.isString(e) ? i(e) : e
            return n.protocol === t.protocol && n.host === t.host
          }
        )
      }())
      : function () {
        return !0
      }
  },
  function (t, e, n) {
    const r = n(0)
    t.exports = r.isStandardBrowserEnv()
      ? {
        write(t, e, n, i, o, a) {
          const s = []
          s.push(`${t}=${encodeURIComponent(e)}`),
          r.isNumber(n) && s.push(`expires=${new Date(n).toGMTString()}`),
          r.isString(i) && s.push(`path=${i}`),
          r.isString(o) && s.push(`domain=${o}`),
          !0 === a && s.push('secure'),
          (document.cookie = s.join('; '))
        },
        read(t) {
          const e = document.cookie.match(new RegExp(`(^|;\\s*)(${t})=([^;]*)`))
          return e ? decodeURIComponent(e[3]) : null
        },
        remove(t) {
          this.write(t, '', Date.now() - 864e5)
        },
      }
      : {
        write() {},
        read() {
          return null
        },
        remove() {},
      }
  },
  function (t, e, n) {
    const r = n(9)
    function i(t) {
      if (typeof t !== 'function') throw new TypeError('executor must be a function.')
      let e
      this.promise = new Promise(((t) => {
        e = t
      }))
      const n = this
      t((t) => {
        n.reason || ((n.reason = new r(t)), e(n.reason))
      })
    }
    (i.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason
    }),
    (i.source = function () {
      let t
      return {
        token: new i(((e) => {
          t = e
        })),
        cancel: t,
      }
    }),
    (t.exports = i)
  },
  function (t, e, n) {
    t.exports = function (t) {
      return function (e) {
        return t.apply(null, e)
      }
    }
  },
  function (t, e) {},
]))
