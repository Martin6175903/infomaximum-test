var dw = Object.defineProperty;
var hw = (e, t, r) =>
  t in e
    ? dw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var pw = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var Zh = (e, t, r) => (hw(e, typeof t != 'symbol' ? t + '' : t, r), r);
var qN = pw((GN, cd) => {
  function Jm(e, t) {
    for (var r = 0; r < t.length; r++) {
      const n = t[r];
      if (typeof n != 'string' && !Array.isArray(n)) {
        for (const i in n)
          if (i !== 'default' && !(i in e)) {
            const o = Object.getOwnPropertyDescriptor(n, i);
            o &&
              Object.defineProperty(
                e,
                i,
                o.get ? o : { enumerable: !0, get: () => n[i] }
              );
          }
      }
    }
    return Object.freeze(
      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
    );
  }
  (function () {
    const t = document.createElement('link').relList;
    if (t && t.supports && t.supports('modulepreload')) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
      n(i);
    new MutationObserver(i => {
      for (const o of i)
        if (o.type === 'childList')
          for (const a of o.addedNodes)
            a.tagName === 'LINK' && a.rel === 'modulepreload' && n(a);
    }).observe(document, { childList: !0, subtree: !0 });
    function r(i) {
      const o = {};
      return (
        i.integrity && (o.integrity = i.integrity),
        i.referrerpolicy && (o.referrerPolicy = i.referrerpolicy),
        i.crossorigin === 'use-credentials'
          ? (o.credentials = 'include')
          : i.crossorigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
        o
      );
    }
    function n(i) {
      if (i.ep) return;
      i.ep = !0;
      const o = r(i);
      fetch(i.href, o);
    }
  })();
  function vw(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, 'default')
      ? e.default
      : e;
  }
  var b = { exports: {} },
    B = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Ea = Symbol.for('react.element'),
    mw = Symbol.for('react.portal'),
    yw = Symbol.for('react.fragment'),
    gw = Symbol.for('react.strict_mode'),
    _w = Symbol.for('react.profiler'),
    ww = Symbol.for('react.provider'),
    bw = Symbol.for('react.context'),
    Ew = Symbol.for('react.forward_ref'),
    Sw = Symbol.for('react.suspense'),
    xw = Symbol.for('react.memo'),
    Ow = Symbol.for('react.lazy'),
    ep = Symbol.iterator;
  function kw(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (ep && e[ep]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var Xm = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {}
    },
    Zm = Object.assign,
    ey = {};
  function qi(e, t, r) {
    (this.props = e),
      (this.context = t),
      (this.refs = ey),
      (this.updater = r || Xm);
  }
  qi.prototype.isReactComponent = {};
  qi.prototype.setState = function (e, t) {
    if (typeof e != 'object' && typeof e != 'function' && e != null)
      throw Error(
        'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
      );
    this.updater.enqueueSetState(this, e, t, 'setState');
  };
  qi.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
  };
  function ty() {}
  ty.prototype = qi.prototype;
  function fd(e, t, r) {
    (this.props = e),
      (this.context = t),
      (this.refs = ey),
      (this.updater = r || Xm);
  }
  var dd = (fd.prototype = new ty());
  dd.constructor = fd;
  Zm(dd, qi.prototype);
  dd.isPureReactComponent = !0;
  var tp = Array.isArray,
    ry = Object.prototype.hasOwnProperty,
    hd = { current: null },
    ny = { key: !0, ref: !0, __self: !0, __source: !0 };
  function iy(e, t, r) {
    var n,
      i = {},
      o = null,
      a = null;
    if (t != null)
      for (n in (t.ref !== void 0 && (a = t.ref),
      t.key !== void 0 && (o = '' + t.key),
      t))
        ry.call(t, n) && !ny.hasOwnProperty(n) && (i[n] = t[n]);
    var s = arguments.length - 2;
    if (s === 1) i.children = r;
    else if (1 < s) {
      for (var u = Array(s), l = 0; l < s; l++) u[l] = arguments[l + 2];
      i.children = u;
    }
    if (e && e.defaultProps)
      for (n in ((s = e.defaultProps), s)) i[n] === void 0 && (i[n] = s[n]);
    return {
      $$typeof: Ea,
      type: e,
      key: o,
      ref: a,
      props: i,
      _owner: hd.current
    };
  }
  function Cw(e, t) {
    return {
      $$typeof: Ea,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner
    };
  }
  function pd(e) {
    return typeof e == 'object' && e !== null && e.$$typeof === Ea;
  }
  function Tw(e) {
    var t = { '=': '=0', ':': '=2' };
    return (
      '$' +
      e.replace(/[=:]/g, function (r) {
        return t[r];
      })
    );
  }
  var rp = /\/+/g;
  function Dl(e, t) {
    return typeof e == 'object' && e !== null && e.key != null
      ? Tw('' + e.key)
      : t.toString(36);
  }
  function vs(e, t, r, n, i) {
    var o = typeof e;
    (o === 'undefined' || o === 'boolean') && (e = null);
    var a = !1;
    if (e === null) a = !0;
    else
      switch (o) {
        case 'string':
        case 'number':
          a = !0;
          break;
        case 'object':
          switch (e.$$typeof) {
            case Ea:
            case mw:
              a = !0;
          }
      }
    if (a)
      return (
        (a = e),
        (i = i(a)),
        (e = n === '' ? '.' + Dl(a, 0) : n),
        tp(i)
          ? ((r = ''),
            e != null && (r = e.replace(rp, '$&/') + '/'),
            vs(i, t, r, '', function (l) {
              return l;
            }))
          : i != null &&
            (pd(i) &&
              (i = Cw(
                i,
                r +
                  (!i.key || (a && a.key === i.key)
                    ? ''
                    : ('' + i.key).replace(rp, '$&/') + '/') +
                  e
              )),
            t.push(i)),
        1
      );
    if (((a = 0), (n = n === '' ? '.' : n + ':'), tp(e)))
      for (var s = 0; s < e.length; s++) {
        o = e[s];
        var u = n + Dl(o, s);
        a += vs(o, t, r, u, i);
      }
    else if (((u = kw(e)), typeof u == 'function'))
      for (e = u.call(e), s = 0; !(o = e.next()).done; )
        (o = o.value), (u = n + Dl(o, s++)), (a += vs(o, t, r, u, i));
    else if (o === 'object')
      throw (
        ((t = String(e)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (t === '[object Object]'
              ? 'object with keys {' + Object.keys(e).join(', ') + '}'
              : t) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      );
    return a;
  }
  function Ba(e, t, r) {
    if (e == null) return e;
    var n = [],
      i = 0;
    return (
      vs(e, n, '', '', function (o) {
        return t.call(r, o, i++);
      }),
      n
    );
  }
  function Nw(e) {
    if (e._status === -1) {
      var t = e._result;
      (t = t()),
        t.then(
          function (r) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1), (e._result = r));
          },
          function (r) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2), (e._result = r));
          }
        ),
        e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var Qe = { current: null },
    ms = { transition: null },
    Dw = {
      ReactCurrentDispatcher: Qe,
      ReactCurrentBatchConfig: ms,
      ReactCurrentOwner: hd
    };
  B.Children = {
    map: Ba,
    forEach: function (e, t, r) {
      Ba(
        e,
        function () {
          t.apply(this, arguments);
        },
        r
      );
    },
    count: function (e) {
      var t = 0;
      return (
        Ba(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        Ba(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!pd(e))
        throw Error(
          'React.Children.only expected to receive a single React element child.'
        );
      return e;
    }
  };
  B.Component = qi;
  B.Fragment = yw;
  B.Profiler = _w;
  B.PureComponent = fd;
  B.StrictMode = gw;
  B.Suspense = Sw;
  B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dw;
  B.cloneElement = function (e, t, r) {
    if (e == null)
      throw Error(
        'React.cloneElement(...): The argument must be a React element, but you passed ' +
          e +
          '.'
      );
    var n = Zm({}, e.props),
      i = e.key,
      o = e.ref,
      a = e._owner;
    if (t != null) {
      if (
        (t.ref !== void 0 && ((o = t.ref), (a = hd.current)),
        t.key !== void 0 && (i = '' + t.key),
        e.type && e.type.defaultProps)
      )
        var s = e.type.defaultProps;
      for (u in t)
        ry.call(t, u) &&
          !ny.hasOwnProperty(u) &&
          (n[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
    }
    var u = arguments.length - 2;
    if (u === 1) n.children = r;
    else if (1 < u) {
      s = Array(u);
      for (var l = 0; l < u; l++) s[l] = arguments[l + 2];
      n.children = s;
    }
    return { $$typeof: Ea, type: e.type, key: i, ref: o, props: n, _owner: a };
  };
  B.createContext = function (e) {
    return (
      (e = {
        $$typeof: bw,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
      }),
      (e.Provider = { $$typeof: ww, _context: e }),
      (e.Consumer = e)
    );
  };
  B.createElement = iy;
  B.createFactory = function (e) {
    var t = iy.bind(null, e);
    return (t.type = e), t;
  };
  B.createRef = function () {
    return { current: null };
  };
  B.forwardRef = function (e) {
    return { $$typeof: Ew, render: e };
  };
  B.isValidElement = pd;
  B.lazy = function (e) {
    return { $$typeof: Ow, _payload: { _status: -1, _result: e }, _init: Nw };
  };
  B.memo = function (e, t) {
    return { $$typeof: xw, type: e, compare: t === void 0 ? null : t };
  };
  B.startTransition = function (e) {
    var t = ms.transition;
    ms.transition = {};
    try {
      e();
    } finally {
      ms.transition = t;
    }
  };
  B.unstable_act = function () {
    throw Error('act(...) is not supported in production builds of React.');
  };
  B.useCallback = function (e, t) {
    return Qe.current.useCallback(e, t);
  };
  B.useContext = function (e) {
    return Qe.current.useContext(e);
  };
  B.useDebugValue = function () {};
  B.useDeferredValue = function (e) {
    return Qe.current.useDeferredValue(e);
  };
  B.useEffect = function (e, t) {
    return Qe.current.useEffect(e, t);
  };
  B.useId = function () {
    return Qe.current.useId();
  };
  B.useImperativeHandle = function (e, t, r) {
    return Qe.current.useImperativeHandle(e, t, r);
  };
  B.useInsertionEffect = function (e, t) {
    return Qe.current.useInsertionEffect(e, t);
  };
  B.useLayoutEffect = function (e, t) {
    return Qe.current.useLayoutEffect(e, t);
  };
  B.useMemo = function (e, t) {
    return Qe.current.useMemo(e, t);
  };
  B.useReducer = function (e, t, r) {
    return Qe.current.useReducer(e, t, r);
  };
  B.useRef = function (e) {
    return Qe.current.useRef(e);
  };
  B.useState = function (e) {
    return Qe.current.useState(e);
  };
  B.useSyncExternalStore = function (e, t, r) {
    return Qe.current.useSyncExternalStore(e, t, r);
  };
  B.useTransition = function () {
    return Qe.current.useTransition();
  };
  B.version = '18.2.0';
  (function (e) {
    e.exports = B;
  })(b);
  const qs = vw(b.exports),
    np = Jm({ __proto__: null, default: qs }, [b.exports]);
  var vd = { exports: {} },
    at = {},
    oy = { exports: {} },
    ay = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ (function (e) {
    function t(P, j) {
      var $ = P.length;
      P.push(j);
      e: for (; 0 < $; ) {
        var se = ($ - 1) >>> 1,
          ie = P[se];
        if (0 < i(ie, j)) (P[se] = j), (P[$] = ie), ($ = se);
        else break e;
      }
    }
    function r(P) {
      return P.length === 0 ? null : P[0];
    }
    function n(P) {
      if (P.length === 0) return null;
      var j = P[0],
        $ = P.pop();
      if ($ !== j) {
        P[0] = $;
        e: for (var se = 0, ie = P.length, Tr = ie >>> 1; se < Tr; ) {
          var Vt = 2 * (se + 1) - 1,
            Nl = P[Vt],
            fn = Vt + 1,
            za = P[fn];
          if (0 > i(Nl, $))
            fn < ie && 0 > i(za, Nl)
              ? ((P[se] = za), (P[fn] = $), (se = fn))
              : ((P[se] = Nl), (P[Vt] = $), (se = Vt));
          else if (fn < ie && 0 > i(za, $))
            (P[se] = za), (P[fn] = $), (se = fn);
          else break e;
        }
      }
      return j;
    }
    function i(P, j) {
      var $ = P.sortIndex - j.sortIndex;
      return $ !== 0 ? $ : P.id - j.id;
    }
    if (
      typeof performance == 'object' &&
      typeof performance.now == 'function'
    ) {
      var o = performance;
      e.unstable_now = function () {
        return o.now();
      };
    } else {
      var a = Date,
        s = a.now();
      e.unstable_now = function () {
        return a.now() - s;
      };
    }
    var u = [],
      l = [],
      c = 1,
      d = null,
      f = 3,
      v = !1,
      y = !1,
      g = !1,
      _ = typeof setTimeout == 'function' ? setTimeout : null,
      h = typeof clearTimeout == 'function' ? clearTimeout : null,
      p = typeof setImmediate < 'u' ? setImmediate : null;
    typeof navigator < 'u' &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(P) {
      for (var j = r(l); j !== null; ) {
        if (j.callback === null) n(l);
        else if (j.startTime <= P)
          n(l), (j.sortIndex = j.expirationTime), t(u, j);
        else break;
        j = r(l);
      }
    }
    function w(P) {
      if (((g = !1), m(P), !y))
        if (r(u) !== null) (y = !0), Hn(S);
        else {
          var j = r(l);
          j !== null && io(w, j.startTime - P);
        }
    }
    function S(P, j) {
      (y = !1), g && ((g = !1), h(C), (C = -1)), (v = !0);
      var $ = f;
      try {
        for (
          m(j), d = r(u);
          d !== null && (!(d.expirationTime > j) || (P && !ne()));

        ) {
          var se = d.callback;
          if (typeof se == 'function') {
            (d.callback = null), (f = d.priorityLevel);
            var ie = se(d.expirationTime <= j);
            (j = e.unstable_now()),
              typeof ie == 'function' ? (d.callback = ie) : d === r(u) && n(u),
              m(j);
          } else n(u);
          d = r(u);
        }
        if (d !== null) var Tr = !0;
        else {
          var Vt = r(l);
          Vt !== null && io(w, Vt.startTime - j), (Tr = !1);
        }
        return Tr;
      } finally {
        (d = null), (f = $), (v = !1);
      }
    }
    var x = !1,
      O = null,
      C = -1,
      M = 5,
      I = -1;
    function ne() {
      return !(e.unstable_now() - I < M);
    }
    function ct() {
      if (O !== null) {
        var P = e.unstable_now();
        I = P;
        var j = !0;
        try {
          j = O(!0, P);
        } finally {
          j ? le() : ((x = !1), (O = null));
        }
      } else x = !1;
    }
    var le;
    if (typeof p == 'function')
      le = function () {
        p(ct);
      };
    else if (typeof MessageChannel < 'u') {
      var Et = new MessageChannel(),
        no = Et.port2;
      (Et.port1.onmessage = ct),
        (le = function () {
          no.postMessage(null);
        });
    } else
      le = function () {
        _(ct, 0);
      };
    function Hn(P) {
      (O = P), x || ((x = !0), le());
    }
    function io(P, j) {
      C = _(function () {
        P(e.unstable_now());
      }, j);
    }
    (e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (P) {
        P.callback = null;
      }),
      (e.unstable_continueExecution = function () {
        y || v || ((y = !0), Hn(S));
      }),
      (e.unstable_forceFrameRate = function (P) {
        0 > P || 125 < P
          ? console.error(
              'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
            )
          : (M = 0 < P ? Math.floor(1e3 / P) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return r(u);
      }),
      (e.unstable_next = function (P) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var j = 3;
            break;
          default:
            j = f;
        }
        var $ = f;
        f = j;
        try {
          return P();
        } finally {
          f = $;
        }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (P, j) {
        switch (P) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            P = 3;
        }
        var $ = f;
        f = P;
        try {
          return j();
        } finally {
          f = $;
        }
      }),
      (e.unstable_scheduleCallback = function (P, j, $) {
        var se = e.unstable_now();
        switch (
          (typeof $ == 'object' && $ !== null
            ? (($ = $.delay), ($ = typeof $ == 'number' && 0 < $ ? se + $ : se))
            : ($ = se),
          P)
        ) {
          case 1:
            var ie = -1;
            break;
          case 2:
            ie = 250;
            break;
          case 5:
            ie = 1073741823;
            break;
          case 4:
            ie = 1e4;
            break;
          default:
            ie = 5e3;
        }
        return (
          (ie = $ + ie),
          (P = {
            id: c++,
            callback: j,
            priorityLevel: P,
            startTime: $,
            expirationTime: ie,
            sortIndex: -1
          }),
          $ > se
            ? ((P.sortIndex = $),
              t(l, P),
              r(u) === null &&
                P === r(l) &&
                (g ? (h(C), (C = -1)) : (g = !0), io(w, $ - se)))
            : ((P.sortIndex = ie), t(u, P), y || v || ((y = !0), Hn(S))),
          P
        );
      }),
      (e.unstable_shouldYield = ne),
      (e.unstable_wrapCallback = function (P) {
        var j = f;
        return function () {
          var $ = f;
          f = j;
          try {
            return P.apply(this, arguments);
          } finally {
            f = $;
          }
        };
      });
  })(ay);
  (function (e) {
    e.exports = ay;
  })(oy);
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var sy = b.exports,
    ot = oy.exports;
  function T(e) {
    for (
      var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
        r = 1;
      r < arguments.length;
      r++
    )
      t += '&args[]=' + encodeURIComponent(arguments[r]);
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var uy = new Set(),
    Wo = {};
  function jn(e, t) {
    Ni(e, t), Ni(e + 'Capture', t);
  }
  function Ni(e, t) {
    for (Wo[e] = t, e = 0; e < t.length; e++) uy.add(t[e]);
  }
  var yr = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Cc = Object.prototype.hasOwnProperty,
    Rw =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ip = {},
    op = {};
  function Pw(e) {
    return Cc.call(op, e)
      ? !0
      : Cc.call(ip, e)
      ? !1
      : Rw.test(e)
      ? (op[e] = !0)
      : ((ip[e] = !0), !1);
  }
  function Aw(e, t, r, n) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return n
          ? !1
          : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
      default:
        return !1;
    }
  }
  function Iw(e, t, r, n) {
    if (t === null || typeof t > 'u' || Aw(e, t, r, n)) return !0;
    if (n) return !1;
    if (r !== null)
      switch (r.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function qe(e, t, r, n, i, o, a) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = n),
      (this.attributeNamespace = i),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = a);
  }
  var Ae = {};
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      Ae[e] = new qe(e, 0, !1, e, null, !1, !1);
    });
  [
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv']
  ].forEach(function (e) {
    var t = e[0];
    Ae[t] = new qe(t, 1, !1, e[1], null, !1, !1);
  });
  ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
    Ae[e] = new qe(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  [
    'autoReverse',
    'externalResourcesRequired',
    'focusable',
    'preserveAlpha'
  ].forEach(function (e) {
    Ae[e] = new qe(e, 2, !1, e, null, !1, !1);
  });
  'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
    .split(' ')
    .forEach(function (e) {
      Ae[e] = new qe(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
  ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
    Ae[e] = new qe(e, 3, !0, e, null, !1, !1);
  });
  ['capture', 'download'].forEach(function (e) {
    Ae[e] = new qe(e, 4, !1, e, null, !1, !1);
  });
  ['cols', 'rows', 'size', 'span'].forEach(function (e) {
    Ae[e] = new qe(e, 6, !1, e, null, !1, !1);
  });
  ['rowSpan', 'start'].forEach(function (e) {
    Ae[e] = new qe(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var md = /[\-:]([a-z])/g;
  function yd(e) {
    return e[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(md, yd);
      Ae[t] = new qe(t, 1, !1, e, null, !1, !1);
    });
  'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(md, yd);
      Ae[t] = new qe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    });
  ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
    var t = e.replace(md, yd);
    Ae[t] = new qe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
  });
  ['tabIndex', 'crossOrigin'].forEach(function (e) {
    Ae[e] = new qe(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  Ae.xlinkHref = new qe(
    'xlinkHref',
    1,
    !1,
    'xlink:href',
    'http://www.w3.org/1999/xlink',
    !0,
    !1
  );
  ['src', 'href', 'action', 'formAction'].forEach(function (e) {
    Ae[e] = new qe(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function gd(e, t, r, n) {
    var i = Ae.hasOwnProperty(t) ? Ae[t] : null;
    (i !== null
      ? i.type !== 0
      : n ||
        !(2 < t.length) ||
        (t[0] !== 'o' && t[0] !== 'O') ||
        (t[1] !== 'n' && t[1] !== 'N')) &&
      (Iw(t, r, i, n) && (r = null),
      n || i === null
        ? Pw(t) &&
          (r === null ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
        : i.mustUseProperty
        ? (e[i.propertyName] = r === null ? (i.type === 3 ? !1 : '') : r)
        : ((t = i.attributeName),
          (n = i.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (r = i === 3 || (i === 4 && r === !0) ? '' : '' + r),
              n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
  }
  var kr = sy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ua = Symbol.for('react.element'),
    Xn = Symbol.for('react.portal'),
    Zn = Symbol.for('react.fragment'),
    _d = Symbol.for('react.strict_mode'),
    Tc = Symbol.for('react.profiler'),
    ly = Symbol.for('react.provider'),
    cy = Symbol.for('react.context'),
    wd = Symbol.for('react.forward_ref'),
    Nc = Symbol.for('react.suspense'),
    Dc = Symbol.for('react.suspense_list'),
    bd = Symbol.for('react.memo'),
    Rr = Symbol.for('react.lazy'),
    fy = Symbol.for('react.offscreen'),
    ap = Symbol.iterator;
  function oo(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (ap && e[ap]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var he = Object.assign,
    Rl;
  function bo(e) {
    if (Rl === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        Rl = (t && t[1]) || '';
      }
    return (
      `
` +
      Rl +
      e
    );
  }
  var Pl = !1;
  function Al(e, t) {
    if (!e || Pl) return '';
    Pl = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, 'props', {
            set: function () {
              throw Error();
            }
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (l) {
            var n = l;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (l) {
            n = l;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (l) {
          n = l;
        }
        e();
      }
    } catch (l) {
      if (l && n && typeof l.stack == 'string') {
        for (
          var i = l.stack.split(`
`),
            o = n.stack.split(`
`),
            a = i.length - 1,
            s = o.length - 1;
          1 <= a && 0 <= s && i[a] !== o[s];

        )
          s--;
        for (; 1 <= a && 0 <= s; a--, s--)
          if (i[a] !== o[s]) {
            if (a !== 1 || s !== 1)
              do
                if ((a--, s--, 0 > s || i[a] !== o[s])) {
                  var u =
                    `
` + i[a].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      u.includes('<anonymous>') &&
                      (u = u.replace('<anonymous>', e.displayName)),
                    u
                  );
                }
              while (1 <= a && 0 <= s);
            break;
          }
      }
    } finally {
      (Pl = !1), (Error.prepareStackTrace = r);
    }
    return (e = e ? e.displayName || e.name : '') ? bo(e) : '';
  }
  function Fw(e) {
    switch (e.tag) {
      case 5:
        return bo(e.type);
      case 16:
        return bo('Lazy');
      case 13:
        return bo('Suspense');
      case 19:
        return bo('SuspenseList');
      case 0:
      case 2:
      case 15:
        return (e = Al(e.type, !1)), e;
      case 11:
        return (e = Al(e.type.render, !1)), e;
      case 1:
        return (e = Al(e.type, !0)), e;
      default:
        return '';
    }
  }
  function Rc(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case Zn:
        return 'Fragment';
      case Xn:
        return 'Portal';
      case Tc:
        return 'Profiler';
      case _d:
        return 'StrictMode';
      case Nc:
        return 'Suspense';
      case Dc:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case cy:
          return (e.displayName || 'Context') + '.Consumer';
        case ly:
          return (e._context.displayName || 'Context') + '.Provider';
        case wd:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case bd:
          return (
            (t = e.displayName || null), t !== null ? t : Rc(e.type) || 'Memo'
          );
        case Rr:
          (t = e._payload), (e = e._init);
          try {
            return Rc(e(t));
          } catch {}
      }
    return null;
  }
  function Lw(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return 'Cache';
      case 9:
        return (t.displayName || 'Context') + '.Consumer';
      case 10:
        return (t._context.displayName || 'Context') + '.Provider';
      case 18:
        return 'DehydratedFragment';
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ''),
          t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
        );
      case 7:
        return 'Fragment';
      case 5:
        return t;
      case 4:
        return 'Portal';
      case 3:
        return 'Root';
      case 6:
        return 'Text';
      case 16:
        return Rc(t);
      case 8:
        return t === _d ? 'StrictMode' : 'Mode';
      case 22:
        return 'Offscreen';
      case 12:
        return 'Profiler';
      case 21:
        return 'Scope';
      case 13:
        return 'Suspense';
      case 19:
        return 'SuspenseList';
      case 25:
        return 'TracingMarker';
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == 'function') return t.displayName || t.name || null;
        if (typeof t == 'string') return t;
    }
    return null;
  }
  function Xr(e) {
    switch (typeof e) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function dy(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    );
  }
  function Mw(e) {
    var t = dy(e) ? 'checked' : 'value',
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      n = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < 'u' &&
      typeof r.get == 'function' &&
      typeof r.set == 'function'
    ) {
      var i = r.get,
        o = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (a) {
            (n = '' + a), o.call(this, a);
          }
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (a) {
            n = '' + a;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          }
        }
      );
    }
  }
  function Qa(e) {
    e._valueTracker || (e._valueTracker = Mw(e));
  }
  function hy(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      n = '';
    return (
      e && (n = dy(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = n),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function Ws(e) {
    if (
      ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Pc(e, t) {
    var r = t.checked;
    return he({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r != null ? r : e._wrapperState.initialChecked
    });
  }
  function sp(e, t) {
    var r = t.defaultValue == null ? '' : t.defaultValue,
      n = t.checked != null ? t.checked : t.defaultChecked;
    (r = Xr(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: n,
        initialValue: r,
        controlled:
          t.type === 'checkbox' || t.type === 'radio'
            ? t.checked != null
            : t.value != null
      });
  }
  function py(e, t) {
    (t = t.checked), t != null && gd(e, 'checked', t, !1);
  }
  function Ac(e, t) {
    py(e, t);
    var r = Xr(t.value),
      n = t.type;
    if (r != null)
      n === 'number'
        ? ((r === 0 && e.value === '') || e.value != r) && (e.value = '' + r)
        : e.value !== '' + r && (e.value = '' + r);
    else if (n === 'submit' || n === 'reset') {
      e.removeAttribute('value');
      return;
    }
    t.hasOwnProperty('value')
      ? Ic(e, t.type, r)
      : t.hasOwnProperty('defaultValue') && Ic(e, t.type, Xr(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function up(e, t, r) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var n = t.type;
      if (
        !(
          (n !== 'submit' && n !== 'reset') ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = '' + e._wrapperState.initialValue),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (r = e.name),
      r !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      r !== '' && (e.name = r);
  }
  function Ic(e, t, r) {
    (t !== 'number' || Ws(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + r && (e.defaultValue = '' + r));
  }
  var Eo = Array.isArray;
  function gi(e, t, r, n) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < r.length; i++) t['$' + r[i]] = !0;
      for (r = 0; r < e.length; r++)
        (i = t.hasOwnProperty('$' + e[r].value)),
          e[r].selected !== i && (e[r].selected = i),
          i && n && (e[r].defaultSelected = !0);
    } else {
      for (r = '' + Xr(r), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === r) {
          (e[i].selected = !0), n && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Fc(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
    return he({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue
    });
  }
  function lp(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(T(92));
        if (Eo(r)) {
          if (1 < r.length) throw Error(T(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ''), (r = t);
    }
    e._wrapperState = { initialValue: Xr(r) };
  }
  function vy(e, t) {
    var r = Xr(t.value),
      n = Xr(t.defaultValue);
    r != null &&
      ((r = '' + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      n != null && (e.defaultValue = '' + n);
  }
  function cp(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== '' &&
      t !== null &&
      (e.value = t);
  }
  function my(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function Lc(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? my(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
  }
  var qa,
    yy = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, r, n, i) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, n, i);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
        e.innerHTML = t;
      else {
        for (
          qa = qa || document.createElement('div'),
            qa.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = qa.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Ho(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var No = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    },
    jw = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(No).forEach(function (e) {
    jw.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (No[t] = No[e]);
    });
  });
  function gy(e, t, r) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : r || typeof t != 'number' || t === 0 || (No.hasOwnProperty(e) && No[e])
      ? ('' + t).trim()
      : t + 'px';
  }
  function _y(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var n = r.indexOf('--') === 0,
          i = gy(r, t[r], n);
        r === 'float' && (r = 'cssFloat'), n ? e.setProperty(r, i) : (e[r] = i);
      }
  }
  var Vw = he(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
    }
  );
  function Mc(e, t) {
    if (t) {
      if (Vw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(T(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(T(60));
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !('__html' in t.dangerouslySetInnerHTML)
        )
          throw Error(T(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(T(62));
    }
  }
  function jc(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string';
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var Vc = null;
  function Ed(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var $c = null,
    _i = null,
    wi = null;
  function fp(e) {
    if ((e = Oa(e))) {
      if (typeof $c != 'function') throw Error(T(280));
      var t = e.stateNode;
      t && ((t = Lu(t)), $c(e.stateNode, e.type, t));
    }
  }
  function wy(e) {
    _i ? (wi ? wi.push(e) : (wi = [e])) : (_i = e);
  }
  function by() {
    if (_i) {
      var e = _i,
        t = wi;
      if (((wi = _i = null), fp(e), t)) for (e = 0; e < t.length; e++) fp(t[e]);
    }
  }
  function Ey(e, t) {
    return e(t);
  }
  function Sy() {}
  var Il = !1;
  function xy(e, t, r) {
    if (Il) return e(t, r);
    Il = !0;
    try {
      return Ey(e, t, r);
    } finally {
      (Il = !1), (_i !== null || wi !== null) && (Sy(), by());
    }
  }
  function Go(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var n = Lu(r);
    if (n === null) return null;
    r = n[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        (n = !n.disabled) ||
          ((e = e.type),
          (n = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !n);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != 'function') throw Error(T(231, t, typeof r));
    return r;
  }
  var zc = !1;
  if (yr)
    try {
      var ao = {};
      Object.defineProperty(ao, 'passive', {
        get: function () {
          zc = !0;
        }
      }),
        window.addEventListener('test', ao, ao),
        window.removeEventListener('test', ao, ao);
    } catch {
      zc = !1;
    }
  function $w(e, t, r, n, i, o, a, s, u) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, l);
    } catch (c) {
      this.onError(c);
    }
  }
  var Do = !1,
    Hs = null,
    Gs = !1,
    Bc = null,
    zw = {
      onError: function (e) {
        (Do = !0), (Hs = e);
      }
    };
  function Bw(e, t, r, n, i, o, a, s, u) {
    (Do = !1), (Hs = null), $w.apply(zw, arguments);
  }
  function Uw(e, t, r, n, i, o, a, s, u) {
    if ((Bw.apply(this, arguments), Do)) {
      if (Do) {
        var l = Hs;
        (Do = !1), (Hs = null);
      } else throw Error(T(198));
      Gs || ((Gs = !0), (Bc = l));
    }
  }
  function Vn(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (r = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function Oy(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function dp(e) {
    if (Vn(e) !== e) throw Error(T(188));
  }
  function Qw(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Vn(e)), t === null)) throw Error(T(188));
      return t !== e ? null : e;
    }
    for (var r = e, n = t; ; ) {
      var i = r.return;
      if (i === null) break;
      var o = i.alternate;
      if (o === null) {
        if (((n = i.return), n !== null)) {
          r = n;
          continue;
        }
        break;
      }
      if (i.child === o.child) {
        for (o = i.child; o; ) {
          if (o === r) return dp(i), e;
          if (o === n) return dp(i), t;
          o = o.sibling;
        }
        throw Error(T(188));
      }
      if (r.return !== n.return) (r = i), (n = o);
      else {
        for (var a = !1, s = i.child; s; ) {
          if (s === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          if (s === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          s = s.sibling;
        }
        if (!a) {
          for (s = o.child; s; ) {
            if (s === r) {
              (a = !0), (r = o), (n = i);
              break;
            }
            if (s === n) {
              (a = !0), (n = o), (r = i);
              break;
            }
            s = s.sibling;
          }
          if (!a) throw Error(T(189));
        }
      }
      if (r.alternate !== n) throw Error(T(190));
    }
    if (r.tag !== 3) throw Error(T(188));
    return r.stateNode.current === r ? e : t;
  }
  function ky(e) {
    return (e = Qw(e)), e !== null ? Cy(e) : null;
  }
  function Cy(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Cy(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ty = ot.unstable_scheduleCallback,
    hp = ot.unstable_cancelCallback,
    qw = ot.unstable_shouldYield,
    Ww = ot.unstable_requestPaint,
    ye = ot.unstable_now,
    Hw = ot.unstable_getCurrentPriorityLevel,
    Sd = ot.unstable_ImmediatePriority,
    Ny = ot.unstable_UserBlockingPriority,
    Ks = ot.unstable_NormalPriority,
    Gw = ot.unstable_LowPriority,
    Dy = ot.unstable_IdlePriority,
    Pu = null,
    Ht = null;
  function Kw(e) {
    if (Ht && typeof Ht.onCommitFiberRoot == 'function')
      try {
        Ht.onCommitFiberRoot(Pu, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Nt = Math.clz32 ? Math.clz32 : Xw,
    Yw = Math.log,
    Jw = Math.LN2;
  function Xw(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Yw(e) / Jw) | 0)) | 0;
  }
  var Wa = 64,
    Ha = 4194304;
  function So(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Ys(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var n = 0,
      i = e.suspendedLanes,
      o = e.pingedLanes,
      a = r & 268435455;
    if (a !== 0) {
      var s = a & ~i;
      s !== 0 ? (n = So(s)) : ((o &= a), o !== 0 && (n = So(o)));
    } else (a = r & ~i), a !== 0 ? (n = So(a)) : o !== 0 && (n = So(o));
    if (n === 0) return 0;
    if (
      t !== 0 &&
      t !== n &&
      (t & i) === 0 &&
      ((i = n & -n), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
    )
      return t;
    if (((n & 4) !== 0 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= n; 0 < t; )
        (r = 31 - Nt(t)), (i = 1 << r), (n |= e[r]), (t &= ~i);
    return n;
  }
  function Zw(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function eb(e, t) {
    for (
      var r = e.suspendedLanes,
        n = e.pingedLanes,
        i = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;

    ) {
      var a = 31 - Nt(o),
        s = 1 << a,
        u = i[a];
      u === -1
        ? ((s & r) === 0 || (s & n) !== 0) && (i[a] = Zw(s, t))
        : u <= t && (e.expiredLanes |= s),
        (o &= ~s);
    }
  }
  function Uc(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Ry() {
    var e = Wa;
    return (Wa <<= 1), (Wa & 4194240) === 0 && (Wa = 64), e;
  }
  function Fl(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function Sa(e, t, r) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Nt(t)),
      (e[t] = r);
  }
  function tb(e, t) {
    var r = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var n = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var i = 31 - Nt(r),
        o = 1 << i;
      (t[i] = 0), (n[i] = -1), (e[i] = -1), (r &= ~o);
    }
  }
  function xd(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var n = 31 - Nt(r),
        i = 1 << n;
      (i & t) | (e[n] & t) && (e[n] |= t), (r &= ~i);
    }
  }
  var X = 0;
  function Py(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var Ay,
    Od,
    Iy,
    Fy,
    Ly,
    Qc = !1,
    Ga = [],
    Ur = null,
    Qr = null,
    qr = null,
    Ko = new Map(),
    Yo = new Map(),
    Lr = [],
    rb =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function pp(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Ur = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Qr = null;
        break;
      case 'mouseover':
      case 'mouseout':
        qr = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Ko.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Yo.delete(t.pointerId);
    }
  }
  function so(e, t, r, n, i, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: n,
          nativeEvent: o,
          targetContainers: [i]
        }),
        t !== null && ((t = Oa(t)), t !== null && Od(t)),
        e)
      : ((e.eventSystemFlags |= n),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function nb(e, t, r, n, i) {
    switch (t) {
      case 'focusin':
        return (Ur = so(Ur, e, t, r, n, i)), !0;
      case 'dragenter':
        return (Qr = so(Qr, e, t, r, n, i)), !0;
      case 'mouseover':
        return (qr = so(qr, e, t, r, n, i)), !0;
      case 'pointerover':
        var o = i.pointerId;
        return Ko.set(o, so(Ko.get(o) || null, e, t, r, n, i)), !0;
      case 'gotpointercapture':
        return (
          (o = i.pointerId), Yo.set(o, so(Yo.get(o) || null, e, t, r, n, i)), !0
        );
    }
    return !1;
  }
  function My(e) {
    var t = mn(e.target);
    if (t !== null) {
      var r = Vn(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = Oy(r)), t !== null)) {
            (e.blockedOn = t),
              Ly(e.priority, function () {
                Iy(r);
              });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ys(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = qc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var n = new r.constructor(r.type, r);
        (Vc = n), r.target.dispatchEvent(n), (Vc = null);
      } else return (t = Oa(r)), t !== null && Od(t), (e.blockedOn = r), !1;
      t.shift();
    }
    return !0;
  }
  function vp(e, t, r) {
    ys(e) && r.delete(t);
  }
  function ib() {
    (Qc = !1),
      Ur !== null && ys(Ur) && (Ur = null),
      Qr !== null && ys(Qr) && (Qr = null),
      qr !== null && ys(qr) && (qr = null),
      Ko.forEach(vp),
      Yo.forEach(vp);
  }
  function uo(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Qc ||
        ((Qc = !0),
        ot.unstable_scheduleCallback(ot.unstable_NormalPriority, ib)));
  }
  function Jo(e) {
    function t(i) {
      return uo(i, e);
    }
    if (0 < Ga.length) {
      uo(Ga[0], e);
      for (var r = 1; r < Ga.length; r++) {
        var n = Ga[r];
        n.blockedOn === e && (n.blockedOn = null);
      }
    }
    for (
      Ur !== null && uo(Ur, e),
        Qr !== null && uo(Qr, e),
        qr !== null && uo(qr, e),
        Ko.forEach(t),
        Yo.forEach(t),
        r = 0;
      r < Lr.length;
      r++
    )
      (n = Lr[r]), n.blockedOn === e && (n.blockedOn = null);
    for (; 0 < Lr.length && ((r = Lr[0]), r.blockedOn === null); )
      My(r), r.blockedOn === null && Lr.shift();
  }
  var bi = kr.ReactCurrentBatchConfig,
    Js = !0;
  function ob(e, t, r, n) {
    var i = X,
      o = bi.transition;
    bi.transition = null;
    try {
      (X = 1), kd(e, t, r, n);
    } finally {
      (X = i), (bi.transition = o);
    }
  }
  function ab(e, t, r, n) {
    var i = X,
      o = bi.transition;
    bi.transition = null;
    try {
      (X = 4), kd(e, t, r, n);
    } finally {
      (X = i), (bi.transition = o);
    }
  }
  function kd(e, t, r, n) {
    if (Js) {
      var i = qc(e, t, r, n);
      if (i === null) ql(e, t, n, Xs, r), pp(e, n);
      else if (nb(i, e, t, r, n)) n.stopPropagation();
      else if ((pp(e, n), t & 4 && -1 < rb.indexOf(e))) {
        for (; i !== null; ) {
          var o = Oa(i);
          if (
            (o !== null && Ay(o),
            (o = qc(e, t, r, n)),
            o === null && ql(e, t, n, Xs, r),
            o === i)
          )
            break;
          i = o;
        }
        i !== null && n.stopPropagation();
      } else ql(e, t, n, null, r);
    }
  }
  var Xs = null;
  function qc(e, t, r, n) {
    if (((Xs = null), (e = Ed(n)), (e = mn(e)), e !== null))
      if (((t = Vn(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = Oy(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Xs = e), null;
  }
  function jy(e) {
    switch (e) {
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 1;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 4;
      case 'message':
        switch (Hw()) {
          case Sd:
            return 1;
          case Ny:
            return 4;
          case Ks:
          case Gw:
            return 16;
          case Dy:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Vr = null,
    Cd = null,
    gs = null;
  function Vy() {
    if (gs) return gs;
    var e,
      t = Cd,
      r = t.length,
      n,
      i = 'value' in Vr ? Vr.value : Vr.textContent,
      o = i.length;
    for (e = 0; e < r && t[e] === i[e]; e++);
    var a = r - e;
    for (n = 1; n <= a && t[r - n] === i[o - n]; n++);
    return (gs = i.slice(e, 1 < n ? 1 - n : void 0));
  }
  function _s(e) {
    var t = e.keyCode;
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ka() {
    return !0;
  }
  function mp() {
    return !1;
  }
  function st(e) {
    function t(r, n, i, o, a) {
      (this._reactName = r),
        (this._targetInst = i),
        (this.type = n),
        (this.nativeEvent = o),
        (this.target = a),
        (this.currentTarget = null);
      for (var s in e)
        e.hasOwnProperty(s) && ((r = e[s]), (this[s] = r ? r(o) : o[s]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Ka
          : mp),
        (this.isPropagationStopped = mp),
        this
      );
    }
    return (
      he(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
            (this.isDefaultPrevented = Ka));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
            (this.isPropagationStopped = Ka));
        },
        persist: function () {},
        isPersistent: Ka
      }),
      t
    );
  }
  var Wi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    },
    Td = st(Wi),
    xa = he({}, Wi, { view: 0, detail: 0 }),
    sb = st(xa),
    Ll,
    Ml,
    lo,
    Au = he({}, xa, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Nd,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== lo &&
              (lo && e.type === 'mousemove'
                ? ((Ll = e.screenX - lo.screenX), (Ml = e.screenY - lo.screenY))
                : (Ml = Ll = 0),
              (lo = e)),
            Ll);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Ml;
      }
    }),
    yp = st(Au),
    ub = he({}, Au, { dataTransfer: 0 }),
    lb = st(ub),
    cb = he({}, xa, { relatedTarget: 0 }),
    jl = st(cb),
    fb = he({}, Wi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    db = st(fb),
    hb = he({}, Wi, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      }
    }),
    pb = st(hb),
    vb = he({}, Wi, { data: 0 }),
    gp = st(vb),
    mb = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified'
    },
    yb = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta'
    },
    gb = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey'
    };
  function _b(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = gb[e])
      ? !!t[e]
      : !1;
  }
  function Nd() {
    return _b;
  }
  var wb = he({}, xa, {
      key: function (e) {
        if (e.key) {
          var t = mb[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = _s(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
          ? yb[e.keyCode] || 'Unidentified'
          : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Nd,
      charCode: function (e) {
        return e.type === 'keypress' ? _s(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? _s(e)
          : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
      }
    }),
    bb = st(wb),
    Eb = he({}, Au, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }),
    _p = st(Eb),
    Sb = he({}, xa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Nd
    }),
    xb = st(Sb),
    Ob = he({}, Wi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    kb = st(Ob),
    Cb = he({}, Au, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }),
    Tb = st(Cb),
    Nb = [9, 13, 27, 32],
    Dd = yr && 'CompositionEvent' in window,
    Ro = null;
  yr && 'documentMode' in document && (Ro = document.documentMode);
  var Db = yr && 'TextEvent' in window && !Ro,
    $y = yr && (!Dd || (Ro && 8 < Ro && 11 >= Ro)),
    wp = String.fromCharCode(32),
    bp = !1;
  function zy(e, t) {
    switch (e) {
      case 'keyup':
        return Nb.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function By(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var ei = !1;
  function Rb(e, t) {
    switch (e) {
      case 'compositionend':
        return By(t);
      case 'keypress':
        return t.which !== 32 ? null : ((bp = !0), wp);
      case 'textInput':
        return (e = t.data), e === wp && bp ? null : e;
      default:
        return null;
    }
  }
  function Pb(e, t) {
    if (ei)
      return e === 'compositionend' || (!Dd && zy(e, t))
        ? ((e = Vy()), (gs = Cd = Vr = null), (ei = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return $y && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var Ab = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Ep(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Ab[e.type] : t === 'textarea';
  }
  function Uy(e, t, r, n) {
    wy(n),
      (t = Zs(t, 'onChange')),
      0 < t.length &&
        ((r = new Td('onChange', 'change', null, r, n)),
        e.push({ event: r, listeners: t }));
  }
  var Po = null,
    Xo = null;
  function Ib(e) {
    e0(e, 0);
  }
  function Iu(e) {
    var t = ni(e);
    if (hy(t)) return e;
  }
  function Fb(e, t) {
    if (e === 'change') return t;
  }
  var Qy = !1;
  if (yr) {
    var Vl;
    if (yr) {
      var $l = 'oninput' in document;
      if (!$l) {
        var Sp = document.createElement('div');
        Sp.setAttribute('oninput', 'return;'),
          ($l = typeof Sp.oninput == 'function');
      }
      Vl = $l;
    } else Vl = !1;
    Qy = Vl && (!document.documentMode || 9 < document.documentMode);
  }
  function xp() {
    Po && (Po.detachEvent('onpropertychange', qy), (Xo = Po = null));
  }
  function qy(e) {
    if (e.propertyName === 'value' && Iu(Xo)) {
      var t = [];
      Uy(t, Xo, e, Ed(e)), xy(Ib, t);
    }
  }
  function Lb(e, t, r) {
    e === 'focusin'
      ? (xp(), (Po = t), (Xo = r), Po.attachEvent('onpropertychange', qy))
      : e === 'focusout' && xp();
  }
  function Mb(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return Iu(Xo);
  }
  function jb(e, t) {
    if (e === 'click') return Iu(t);
  }
  function Vb(e, t) {
    if (e === 'input' || e === 'change') return Iu(t);
  }
  function $b(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var It = typeof Object.is == 'function' ? Object.is : $b;
  function Zo(e, t) {
    if (It(e, t)) return !0;
    if (
      typeof e != 'object' ||
      e === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1;
    var r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (n = 0; n < r.length; n++) {
      var i = r[n];
      if (!Cc.call(t, i) || !It(e[i], t[i])) return !1;
    }
    return !0;
  }
  function Op(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function kp(e, t) {
    var r = Op(e);
    e = 0;
    for (var n; r; ) {
      if (r.nodeType === 3) {
        if (((n = e + r.textContent.length), e <= t && n >= t))
          return { node: r, offset: t - e };
        e = n;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = Op(r);
    }
  }
  function Wy(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Wy(e, t.parentNode)
        : 'contains' in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Hy() {
    for (var e = window, t = Ws(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == 'string';
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = Ws(e.document);
    }
    return t;
  }
  function Rd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function zb(e) {
    var t = Hy(),
      r = e.focusedElem,
      n = e.selectionRange;
    if (
      t !== r &&
      r &&
      r.ownerDocument &&
      Wy(r.ownerDocument.documentElement, r)
    ) {
      if (n !== null && Rd(r)) {
        if (
          ((t = n.start),
          (e = n.end),
          e === void 0 && (e = t),
          'selectionStart' in r)
        )
          (r.selectionStart = t),
            (r.selectionEnd = Math.min(e, r.value.length));
        else if (
          ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var i = r.textContent.length,
            o = Math.min(n.start, i);
          (n = n.end === void 0 ? o : Math.min(n.end, i)),
            !e.extend && o > n && ((i = n), (n = o), (o = i)),
            (i = kp(r, o));
          var a = kp(r, n);
          i &&
            a &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== i.node ||
              e.anchorOffset !== i.offset ||
              e.focusNode !== a.node ||
              e.focusOffset !== a.offset) &&
            ((t = t.createRange()),
            t.setStart(i.node, i.offset),
            e.removeAllRanges(),
            o > n
              ? (e.addRange(t), e.extend(a.node, a.offset))
              : (t.setEnd(a.node, a.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == 'function' && r.focus(), r = 0; r < t.length; r++)
        (e = t[r]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Bb = yr && 'documentMode' in document && 11 >= document.documentMode,
    ti = null,
    Wc = null,
    Ao = null,
    Hc = !1;
  function Cp(e, t, r) {
    var n =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Hc ||
      ti == null ||
      ti !== Ws(n) ||
      ((n = ti),
      'selectionStart' in n && Rd(n)
        ? (n = { start: n.selectionStart, end: n.selectionEnd })
        : ((n = (
            (n.ownerDocument && n.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset
          })),
      (Ao && Zo(Ao, n)) ||
        ((Ao = n),
        (n = Zs(Wc, 'onSelect')),
        0 < n.length &&
          ((t = new Td('onSelect', 'select', null, t, r)),
          e.push({ event: t, listeners: n }),
          (t.target = ti))));
  }
  function Ya(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r['Webkit' + e] = 'webkit' + t),
      (r['Moz' + e] = 'moz' + t),
      r
    );
  }
  var ri = {
      animationend: Ya('Animation', 'AnimationEnd'),
      animationiteration: Ya('Animation', 'AnimationIteration'),
      animationstart: Ya('Animation', 'AnimationStart'),
      transitionend: Ya('Transition', 'TransitionEnd')
    },
    zl = {},
    Gy = {};
  yr &&
    ((Gy = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete ri.animationend.animation,
      delete ri.animationiteration.animation,
      delete ri.animationstart.animation),
    'TransitionEvent' in window || delete ri.transitionend.transition);
  function Fu(e) {
    if (zl[e]) return zl[e];
    if (!ri[e]) return e;
    var t = ri[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in Gy) return (zl[e] = t[r]);
    return e;
  }
  var Ky = Fu('animationend'),
    Yy = Fu('animationiteration'),
    Jy = Fu('animationstart'),
    Xy = Fu('transitionend'),
    Zy = new Map(),
    Tp =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function on(e, t) {
    Zy.set(e, t), jn(t, [e]);
  }
  for (var Bl = 0; Bl < Tp.length; Bl++) {
    var Ul = Tp[Bl],
      Ub = Ul.toLowerCase(),
      Qb = Ul[0].toUpperCase() + Ul.slice(1);
    on(Ub, 'on' + Qb);
  }
  on(Ky, 'onAnimationEnd');
  on(Yy, 'onAnimationIteration');
  on(Jy, 'onAnimationStart');
  on('dblclick', 'onDoubleClick');
  on('focusin', 'onFocus');
  on('focusout', 'onBlur');
  on(Xy, 'onTransitionEnd');
  Ni('onMouseEnter', ['mouseout', 'mouseover']);
  Ni('onMouseLeave', ['mouseout', 'mouseover']);
  Ni('onPointerEnter', ['pointerout', 'pointerover']);
  Ni('onPointerLeave', ['pointerout', 'pointerover']);
  jn(
    'onChange',
    'change click focusin focusout input keydown keyup selectionchange'.split(
      ' '
    )
  );
  jn(
    'onSelect',
    'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
      ' '
    )
  );
  jn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
  jn(
    'onCompositionEnd',
    'compositionend focusout keydown keypress keyup mousedown'.split(' ')
  );
  jn(
    'onCompositionStart',
    'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
  );
  jn(
    'onCompositionUpdate',
    'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
  );
  var xo =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    qb = new Set(
      'cancel close invalid load scroll toggle'.split(' ').concat(xo)
    );
  function Np(e, t, r) {
    var n = e.type || 'unknown-event';
    (e.currentTarget = r), Uw(n, t, void 0, e), (e.currentTarget = null);
  }
  function e0(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var n = e[r],
        i = n.event;
      n = n.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var a = n.length - 1; 0 <= a; a--) {
            var s = n[a],
              u = s.instance,
              l = s.currentTarget;
            if (((s = s.listener), u !== o && i.isPropagationStopped()))
              break e;
            Np(i, s, l), (o = u);
          }
        else
          for (a = 0; a < n.length; a++) {
            if (
              ((s = n[a]),
              (u = s.instance),
              (l = s.currentTarget),
              (s = s.listener),
              u !== o && i.isPropagationStopped())
            )
              break e;
            Np(i, s, l), (o = u);
          }
      }
    }
    if (Gs) throw ((e = Bc), (Gs = !1), (Bc = null), e);
  }
  function oe(e, t) {
    var r = t[Xc];
    r === void 0 && (r = t[Xc] = new Set());
    var n = e + '__bubble';
    r.has(n) || (t0(t, e, 2, !1), r.add(n));
  }
  function Ql(e, t, r) {
    var n = 0;
    t && (n |= 4), t0(r, e, n, t);
  }
  var Ja = '_reactListening' + Math.random().toString(36).slice(2);
  function ea(e) {
    if (!e[Ja]) {
      (e[Ja] = !0),
        uy.forEach(function (r) {
          r !== 'selectionchange' && (qb.has(r) || Ql(r, !1, e), Ql(r, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ja] || ((t[Ja] = !0), Ql('selectionchange', !1, t));
    }
  }
  function t0(e, t, r, n) {
    switch (jy(t)) {
      case 1:
        var i = ob;
        break;
      case 4:
        i = ab;
        break;
      default:
        i = kd;
    }
    (r = i.bind(null, t, r, e)),
      (i = void 0),
      !zc ||
        (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
        (i = !0),
      n
        ? i !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: i })
          : e.addEventListener(t, r, !0)
        : i !== void 0
        ? e.addEventListener(t, r, { passive: i })
        : e.addEventListener(t, r, !1);
  }
  function ql(e, t, r, n, i) {
    var o = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
      e: for (;;) {
        if (n === null) return;
        var a = n.tag;
        if (a === 3 || a === 4) {
          var s = n.stateNode.containerInfo;
          if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
          if (a === 4)
            for (a = n.return; a !== null; ) {
              var u = a.tag;
              if (
                (u === 3 || u === 4) &&
                ((u = a.stateNode.containerInfo),
                u === i || (u.nodeType === 8 && u.parentNode === i))
              )
                return;
              a = a.return;
            }
          for (; s !== null; ) {
            if (((a = mn(s)), a === null)) return;
            if (((u = a.tag), u === 5 || u === 6)) {
              n = o = a;
              continue e;
            }
            s = s.parentNode;
          }
        }
        n = n.return;
      }
    xy(function () {
      var l = o,
        c = Ed(r),
        d = [];
      e: {
        var f = Zy.get(e);
        if (f !== void 0) {
          var v = Td,
            y = e;
          switch (e) {
            case 'keypress':
              if (_s(r) === 0) break e;
            case 'keydown':
            case 'keyup':
              v = bb;
              break;
            case 'focusin':
              (y = 'focus'), (v = jl);
              break;
            case 'focusout':
              (y = 'blur'), (v = jl);
              break;
            case 'beforeblur':
            case 'afterblur':
              v = jl;
              break;
            case 'click':
              if (r.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              v = yp;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              v = lb;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              v = xb;
              break;
            case Ky:
            case Yy:
            case Jy:
              v = db;
              break;
            case Xy:
              v = kb;
              break;
            case 'scroll':
              v = sb;
              break;
            case 'wheel':
              v = Tb;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              v = pb;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              v = _p;
          }
          var g = (t & 4) !== 0,
            _ = !g && e === 'scroll',
            h = g ? (f !== null ? f + 'Capture' : null) : f;
          g = [];
          for (var p = l, m; p !== null; ) {
            m = p;
            var w = m.stateNode;
            if (
              (m.tag === 5 &&
                w !== null &&
                ((m = w),
                h !== null &&
                  ((w = Go(p, h)), w != null && g.push(ta(p, w, m)))),
              _)
            )
              break;
            p = p.return;
          }
          0 < g.length &&
            ((f = new v(f, y, null, r, c)), d.push({ event: f, listeners: g }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((f = e === 'mouseover' || e === 'pointerover'),
            (v = e === 'mouseout' || e === 'pointerout'),
            f &&
              r !== Vc &&
              (y = r.relatedTarget || r.fromElement) &&
              (mn(y) || y[gr]))
          )
            break e;
          if (
            (v || f) &&
            ((f =
              c.window === c
                ? c
                : (f = c.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
            v
              ? ((y = r.relatedTarget || r.toElement),
                (v = l),
                (y = y ? mn(y) : null),
                y !== null &&
                  ((_ = Vn(y)), y !== _ || (y.tag !== 5 && y.tag !== 6)) &&
                  (y = null))
              : ((v = null), (y = l)),
            v !== y)
          ) {
            if (
              ((g = yp),
              (w = 'onMouseLeave'),
              (h = 'onMouseEnter'),
              (p = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((g = _p),
                (w = 'onPointerLeave'),
                (h = 'onPointerEnter'),
                (p = 'pointer')),
              (_ = v == null ? f : ni(v)),
              (m = y == null ? f : ni(y)),
              (f = new g(w, p + 'leave', v, r, c)),
              (f.target = _),
              (f.relatedTarget = m),
              (w = null),
              mn(c) === l &&
                ((g = new g(h, p + 'enter', y, r, c)),
                (g.target = m),
                (g.relatedTarget = _),
                (w = g)),
              (_ = w),
              v && y)
            )
              t: {
                for (g = v, h = y, p = 0, m = g; m; m = Gn(m)) p++;
                for (m = 0, w = h; w; w = Gn(w)) m++;
                for (; 0 < p - m; ) (g = Gn(g)), p--;
                for (; 0 < m - p; ) (h = Gn(h)), m--;
                for (; p--; ) {
                  if (g === h || (h !== null && g === h.alternate)) break t;
                  (g = Gn(g)), (h = Gn(h));
                }
                g = null;
              }
            else g = null;
            v !== null && Dp(d, f, v, g, !1),
              y !== null && _ !== null && Dp(d, _, y, g, !0);
          }
        }
        e: {
          if (
            ((f = l ? ni(l) : window),
            (v = f.nodeName && f.nodeName.toLowerCase()),
            v === 'select' || (v === 'input' && f.type === 'file'))
          )
            var S = Fb;
          else if (Ep(f))
            if (Qy) S = Vb;
            else {
              S = Mb;
              var x = Lb;
            }
          else
            (v = f.nodeName) &&
              v.toLowerCase() === 'input' &&
              (f.type === 'checkbox' || f.type === 'radio') &&
              (S = jb);
          if (S && (S = S(e, l))) {
            Uy(d, S, r, c);
            break e;
          }
          x && x(e, f, l),
            e === 'focusout' &&
              (x = f._wrapperState) &&
              x.controlled &&
              f.type === 'number' &&
              Ic(f, 'number', f.value);
        }
        switch (((x = l ? ni(l) : window), e)) {
          case 'focusin':
            (Ep(x) || x.contentEditable === 'true') &&
              ((ti = x), (Wc = l), (Ao = null));
            break;
          case 'focusout':
            Ao = Wc = ti = null;
            break;
          case 'mousedown':
            Hc = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (Hc = !1), Cp(d, r, c);
            break;
          case 'selectionchange':
            if (Bb) break;
          case 'keydown':
          case 'keyup':
            Cp(d, r, c);
        }
        var O;
        if (Dd)
          e: {
            switch (e) {
              case 'compositionstart':
                var C = 'onCompositionStart';
                break e;
              case 'compositionend':
                C = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                C = 'onCompositionUpdate';
                break e;
            }
            C = void 0;
          }
        else
          ei
            ? zy(e, r) && (C = 'onCompositionEnd')
            : e === 'keydown' &&
              r.keyCode === 229 &&
              (C = 'onCompositionStart');
        C &&
          ($y &&
            r.locale !== 'ko' &&
            (ei || C !== 'onCompositionStart'
              ? C === 'onCompositionEnd' && ei && (O = Vy())
              : ((Vr = c),
                (Cd = 'value' in Vr ? Vr.value : Vr.textContent),
                (ei = !0))),
          (x = Zs(l, C)),
          0 < x.length &&
            ((C = new gp(C, e, null, r, c)),
            d.push({ event: C, listeners: x }),
            O ? (C.data = O) : ((O = By(r)), O !== null && (C.data = O)))),
          (O = Db ? Rb(e, r) : Pb(e, r)) &&
            ((l = Zs(l, 'onBeforeInput')),
            0 < l.length &&
              ((c = new gp('onBeforeInput', 'beforeinput', null, r, c)),
              d.push({ event: c, listeners: l }),
              (c.data = O)));
      }
      e0(d, t);
    });
  }
  function ta(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Zs(e, t) {
    for (var r = t + 'Capture', n = []; e !== null; ) {
      var i = e,
        o = i.stateNode;
      i.tag === 5 &&
        o !== null &&
        ((i = o),
        (o = Go(e, r)),
        o != null && n.unshift(ta(e, o, i)),
        (o = Go(e, t)),
        o != null && n.push(ta(e, o, i))),
        (e = e.return);
    }
    return n;
  }
  function Gn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Dp(e, t, r, n, i) {
    for (var o = t._reactName, a = []; r !== null && r !== n; ) {
      var s = r,
        u = s.alternate,
        l = s.stateNode;
      if (u !== null && u === n) break;
      s.tag === 5 &&
        l !== null &&
        ((s = l),
        i
          ? ((u = Go(r, o)), u != null && a.unshift(ta(r, u, s)))
          : i || ((u = Go(r, o)), u != null && a.push(ta(r, u, s)))),
        (r = r.return);
    }
    a.length !== 0 && e.push({ event: t, listeners: a });
  }
  var Wb = /\r\n?/g,
    Hb = /\u0000|\uFFFD/g;
  function Rp(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Wb,
        `
`
      )
      .replace(Hb, '');
  }
  function Xa(e, t, r) {
    if (((t = Rp(t)), Rp(e) !== t && r)) throw Error(T(425));
  }
  function eu() {}
  var Gc = null,
    Kc = null;
  function Yc(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Jc = typeof setTimeout == 'function' ? setTimeout : void 0,
    Gb = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Pp = typeof Promise == 'function' ? Promise : void 0,
    Kb =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Pp < 'u'
        ? function (e) {
            return Pp.resolve(null).then(e).catch(Yb);
          }
        : Jc;
  function Yb(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Wl(e, t) {
    var r = t,
      n = 0;
    do {
      var i = r.nextSibling;
      if ((e.removeChild(r), i && i.nodeType === 8))
        if (((r = i.data), r === '/$')) {
          if (n === 0) {
            e.removeChild(i), Jo(t);
            return;
          }
          n--;
        } else (r !== '$' && r !== '$?' && r !== '$!') || n++;
      r = i;
    } while (r);
    Jo(t);
  }
  function Wr(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  function Ap(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === '$' || r === '$!' || r === '$?') {
          if (t === 0) return e;
          t--;
        } else r === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Hi = Math.random().toString(36).slice(2),
    Qt = '__reactFiber$' + Hi,
    ra = '__reactProps$' + Hi,
    gr = '__reactContainer$' + Hi,
    Xc = '__reactEvents$' + Hi,
    Jb = '__reactListeners$' + Hi,
    Xb = '__reactHandles$' + Hi;
  function mn(e) {
    var t = e[Qt];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[gr] || r[Qt])) {
        if (
          ((r = t.alternate),
          t.child !== null || (r !== null && r.child !== null))
        )
          for (e = Ap(e); e !== null; ) {
            if ((r = e[Qt])) return r;
            e = Ap(e);
          }
        return t;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function Oa(e) {
    return (
      (e = e[Qt] || e[gr]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function ni(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(T(33));
  }
  function Lu(e) {
    return e[ra] || null;
  }
  var Zc = [],
    ii = -1;
  function an(e) {
    return { current: e };
  }
  function ae(e) {
    0 > ii || ((e.current = Zc[ii]), (Zc[ii] = null), ii--);
  }
  function te(e, t) {
    ii++, (Zc[ii] = e.current), (e.current = t);
  }
  var Zr = {},
    Ve = an(Zr),
    Ke = an(!1),
    On = Zr;
  function Di(e, t) {
    var r = e.type.contextTypes;
    if (!r) return Zr;
    var n = e.stateNode;
    if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
      return n.__reactInternalMemoizedMaskedChildContext;
    var i = {},
      o;
    for (o in r) i[o] = t[o];
    return (
      n &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      i
    );
  }
  function Ye(e) {
    return (e = e.childContextTypes), e != null;
  }
  function tu() {
    ae(Ke), ae(Ve);
  }
  function Ip(e, t, r) {
    if (Ve.current !== Zr) throw Error(T(168));
    te(Ve, t), te(Ke, r);
  }
  function r0(e, t, r) {
    var n = e.stateNode;
    if (((t = t.childContextTypes), typeof n.getChildContext != 'function'))
      return r;
    n = n.getChildContext();
    for (var i in n) if (!(i in t)) throw Error(T(108, Lw(e) || 'Unknown', i));
    return he({}, r, n);
  }
  function ru(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Zr),
      (On = Ve.current),
      te(Ve, e),
      te(Ke, Ke.current),
      !0
    );
  }
  function Fp(e, t, r) {
    var n = e.stateNode;
    if (!n) throw Error(T(169));
    r
      ? ((e = r0(e, t, On)),
        (n.__reactInternalMemoizedMergedChildContext = e),
        ae(Ke),
        ae(Ve),
        te(Ve, e))
      : ae(Ke),
      te(Ke, r);
  }
  var ar = null,
    Mu = !1,
    Hl = !1;
  function n0(e) {
    ar === null ? (ar = [e]) : ar.push(e);
  }
  function Zb(e) {
    (Mu = !0), n0(e);
  }
  function sn() {
    if (!Hl && ar !== null) {
      Hl = !0;
      var e = 0,
        t = X;
      try {
        var r = ar;
        for (X = 1; e < r.length; e++) {
          var n = r[e];
          do n = n(!0);
          while (n !== null);
        }
        (ar = null), (Mu = !1);
      } catch (i) {
        throw (ar !== null && (ar = ar.slice(e + 1)), Ty(Sd, sn), i);
      } finally {
        (X = t), (Hl = !1);
      }
    }
    return null;
  }
  var oi = [],
    ai = 0,
    nu = null,
    iu = 0,
    ft = [],
    dt = 0,
    kn = null,
    cr = 1,
    fr = '';
  function dn(e, t) {
    (oi[ai++] = iu), (oi[ai++] = nu), (nu = e), (iu = t);
  }
  function i0(e, t, r) {
    (ft[dt++] = cr), (ft[dt++] = fr), (ft[dt++] = kn), (kn = e);
    var n = cr;
    e = fr;
    var i = 32 - Nt(n) - 1;
    (n &= ~(1 << i)), (r += 1);
    var o = 32 - Nt(t) + i;
    if (30 < o) {
      var a = i - (i % 5);
      (o = (n & ((1 << a) - 1)).toString(32)),
        (n >>= a),
        (i -= a),
        (cr = (1 << (32 - Nt(t) + i)) | (r << i) | n),
        (fr = o + e);
    } else (cr = (1 << o) | (r << i) | n), (fr = e);
  }
  function Pd(e) {
    e.return !== null && (dn(e, 1), i0(e, 1, 0));
  }
  function Ad(e) {
    for (; e === nu; )
      (nu = oi[--ai]), (oi[ai] = null), (iu = oi[--ai]), (oi[ai] = null);
    for (; e === kn; )
      (kn = ft[--dt]),
        (ft[dt] = null),
        (fr = ft[--dt]),
        (ft[dt] = null),
        (cr = ft[--dt]),
        (ft[dt] = null);
  }
  var nt = null,
    rt = null,
    ue = !1,
    Ct = null;
  function o0(e, t) {
    var r = vt(5, null, null, 0);
    (r.elementType = 'DELETED'),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
  }
  function Lp(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t =
            t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (nt = e), (rt = Wr(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (nt = e), (rt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = kn !== null ? { id: cr, overflow: fr } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: r,
                retryLane: 1073741824
              }),
              (r = vt(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (nt = e),
              (rt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function ef(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function tf(e) {
    if (ue) {
      var t = rt;
      if (t) {
        var r = t;
        if (!Lp(e, t)) {
          if (ef(e)) throw Error(T(418));
          t = Wr(r.nextSibling);
          var n = nt;
          t && Lp(e, t)
            ? o0(n, r)
            : ((e.flags = (e.flags & -4097) | 2), (ue = !1), (nt = e));
        }
      } else {
        if (ef(e)) throw Error(T(418));
        (e.flags = (e.flags & -4097) | 2), (ue = !1), (nt = e);
      }
    }
  }
  function Mp(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    nt = e;
  }
  function Za(e) {
    if (e !== nt) return !1;
    if (!ue) return Mp(e), (ue = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== 'head' && t !== 'body' && !Yc(e.type, e.memoizedProps))),
      t && (t = rt))
    ) {
      if (ef(e)) throw (a0(), Error(T(418)));
      for (; t; ) o0(e, t), (t = Wr(t.nextSibling));
    }
    if ((Mp(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(T(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === '/$') {
              if (t === 0) {
                rt = Wr(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== '$' && r !== '$!' && r !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        rt = null;
      }
    } else rt = nt ? Wr(e.stateNode.nextSibling) : null;
    return !0;
  }
  function a0() {
    for (var e = rt; e; ) e = Wr(e.nextSibling);
  }
  function Ri() {
    (rt = nt = null), (ue = !1);
  }
  function Id(e) {
    Ct === null ? (Ct = [e]) : Ct.push(e);
  }
  var eE = kr.ReactCurrentBatchConfig;
  function Ot(e, t) {
    if (e && e.defaultProps) {
      (t = he({}, t)), (e = e.defaultProps);
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  var ou = an(null),
    au = null,
    si = null,
    Fd = null;
  function Ld() {
    Fd = si = au = null;
  }
  function Md(e) {
    var t = ou.current;
    ae(ou), (e._currentValue = t);
  }
  function rf(e, t, r) {
    for (; e !== null; ) {
      var n = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
          : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function Ei(e, t) {
    (au = e),
      (Fd = si = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Ge = !0), (e.firstContext = null));
  }
  function _t(e) {
    var t = e._currentValue;
    if (Fd !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), si === null)) {
        if (au === null) throw Error(T(308));
        (si = e), (au.dependencies = { lanes: 0, firstContext: e });
      } else si = si.next = e;
    return t;
  }
  var yn = null;
  function jd(e) {
    yn === null ? (yn = [e]) : yn.push(e);
  }
  function s0(e, t, r, n) {
    var i = t.interleaved;
    return (
      i === null ? ((r.next = r), jd(t)) : ((r.next = i.next), (i.next = r)),
      (t.interleaved = r),
      _r(e, n)
    );
  }
  function _r(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (r = e.alternate),
        r !== null && (r.childLanes |= t),
        (r = e),
        (e = e.return);
    return r.tag === 3 ? r.stateNode : null;
  }
  var Pr = !1;
  function Vd(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null
    };
  }
  function u0(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects
        });
  }
  function dr(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function Hr(e, t, r) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (((n = n.shared), (q & 2) !== 0)) {
      var i = n.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (n.pending = t),
        _r(e, r)
      );
    }
    return (
      (i = n.interleaved),
      i === null ? ((t.next = t), jd(n)) : ((t.next = i.next), (i.next = t)),
      (n.interleaved = t),
      _r(e, r)
    );
  }
  function ws(e, t, r) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
    ) {
      var n = t.lanes;
      (n &= e.pendingLanes), (r |= n), (t.lanes = r), xd(e, r);
    }
  }
  function jp(e, t) {
    var r = e.updateQueue,
      n = e.alternate;
    if (n !== null && ((n = n.updateQueue), r === n)) {
      var i = null,
        o = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var a = {
            eventTime: r.eventTime,
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null
          };
          o === null ? (i = o = a) : (o = o.next = a), (r = r.next);
        } while (r !== null);
        o === null ? (i = o = t) : (o = o.next = t);
      } else i = o = t;
      (r = {
        baseState: n.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: o,
        shared: n.shared,
        effects: n.effects
      }),
        (e.updateQueue = r);
      return;
    }
    (e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t);
  }
  function su(e, t, r, n) {
    var i = e.updateQueue;
    Pr = !1;
    var o = i.firstBaseUpdate,
      a = i.lastBaseUpdate,
      s = i.shared.pending;
    if (s !== null) {
      i.shared.pending = null;
      var u = s,
        l = u.next;
      (u.next = null), a === null ? (o = l) : (a.next = l), (a = u);
      var c = e.alternate;
      c !== null &&
        ((c = c.updateQueue),
        (s = c.lastBaseUpdate),
        s !== a &&
          (s === null ? (c.firstBaseUpdate = l) : (s.next = l),
          (c.lastBaseUpdate = u)));
    }
    if (o !== null) {
      var d = i.baseState;
      (a = 0), (c = l = u = null), (s = o);
      do {
        var f = s.lane,
          v = s.eventTime;
        if ((n & f) === f) {
          c !== null &&
            (c = c.next =
              {
                eventTime: v,
                lane: 0,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null
              });
          e: {
            var y = e,
              g = s;
            switch (((f = t), (v = r), g.tag)) {
              case 1:
                if (((y = g.payload), typeof y == 'function')) {
                  d = y.call(v, d, f);
                  break e;
                }
                d = y;
                break e;
              case 3:
                y.flags = (y.flags & -65537) | 128;
              case 0:
                if (
                  ((y = g.payload),
                  (f = typeof y == 'function' ? y.call(v, d, f) : y),
                  f == null)
                )
                  break e;
                d = he({}, d, f);
                break e;
              case 2:
                Pr = !0;
            }
          }
          s.callback !== null &&
            s.lane !== 0 &&
            ((e.flags |= 64),
            (f = i.effects),
            f === null ? (i.effects = [s]) : f.push(s));
        } else
          (v = {
            eventTime: v,
            lane: f,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null
          }),
            c === null ? ((l = c = v), (u = d)) : (c = c.next = v),
            (a |= f);
        if (((s = s.next), s === null)) {
          if (((s = i.shared.pending), s === null)) break;
          (f = s),
            (s = f.next),
            (f.next = null),
            (i.lastBaseUpdate = f),
            (i.shared.pending = null);
        }
      } while (1);
      if (
        (c === null && (u = d),
        (i.baseState = u),
        (i.firstBaseUpdate = l),
        (i.lastBaseUpdate = c),
        (t = i.shared.interleaved),
        t !== null)
      ) {
        i = t;
        do (a |= i.lane), (i = i.next);
        while (i !== t);
      } else o === null && (i.shared.lanes = 0);
      (Tn |= a), (e.lanes = a), (e.memoizedState = d);
    }
  }
  function Vp(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var n = e[t],
          i = n.callback;
        if (i !== null) {
          if (((n.callback = null), (n = r), typeof i != 'function'))
            throw Error(T(191, i));
          i.call(n);
        }
      }
  }
  var l0 = new sy.Component().refs;
  function nf(e, t, r, n) {
    (t = e.memoizedState),
      (r = r(n, t)),
      (r = r == null ? t : he({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var ju = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Vn(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var n = Be(),
        i = Kr(e),
        o = dr(n, i);
      (o.payload = t),
        r != null && (o.callback = r),
        (t = Hr(e, o, i)),
        t !== null && (Dt(t, e, i, n), ws(t, e, i));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var n = Be(),
        i = Kr(e),
        o = dr(n, i);
      (o.tag = 1),
        (o.payload = t),
        r != null && (o.callback = r),
        (t = Hr(e, o, i)),
        t !== null && (Dt(t, e, i, n), ws(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = Be(),
        n = Kr(e),
        i = dr(r, n);
      (i.tag = 2),
        t != null && (i.callback = t),
        (t = Hr(e, i, n)),
        t !== null && (Dt(t, e, n, r), ws(t, e, n));
    }
  };
  function $p(e, t, r, n, i, o, a) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(n, o, a)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Zo(r, n) || !Zo(i, o)
        : !0
    );
  }
  function c0(e, t, r) {
    var n = !1,
      i = Zr,
      o = t.contextType;
    return (
      typeof o == 'object' && o !== null
        ? (o = _t(o))
        : ((i = Ye(t) ? On : Ve.current),
          (n = t.contextTypes),
          (o = (n = n != null) ? Di(e, i) : Zr)),
      (t = new t(r, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = ju),
      (e.stateNode = t),
      (t._reactInternals = e),
      n &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = i),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function zp(e, t, r, n) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(r, n),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(r, n),
      t.state !== e && ju.enqueueReplaceState(t, t.state, null);
  }
  function of(e, t, r, n) {
    var i = e.stateNode;
    (i.props = r), (i.state = e.memoizedState), (i.refs = l0), Vd(e);
    var o = t.contextType;
    typeof o == 'object' && o !== null
      ? (i.context = _t(o))
      : ((o = Ye(t) ? On : Ve.current), (i.context = Di(e, o))),
      (i.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == 'function' && (nf(e, t, o, r), (i.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function' ||
        (typeof i.UNSAFE_componentWillMount != 'function' &&
          typeof i.componentWillMount != 'function') ||
        ((t = i.state),
        typeof i.componentWillMount == 'function' && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == 'function' &&
          i.UNSAFE_componentWillMount(),
        t !== i.state && ju.enqueueReplaceState(i, i.state, null),
        su(e, r, i, n),
        (i.state = e.memoizedState)),
      typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
  }
  function co(e, t, r) {
    if (
      ((e = r.ref),
      e !== null && typeof e != 'function' && typeof e != 'object')
    ) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(T(309));
          var n = r.stateNode;
        }
        if (!n) throw Error(T(147, e));
        var i = n,
          o = '' + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == 'function' &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (a) {
              var s = i.refs;
              s === l0 && (s = i.refs = {}),
                a === null ? delete s[o] : (s[o] = a);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != 'string') throw Error(T(284));
      if (!r._owner) throw Error(T(290, e));
    }
    return e;
  }
  function es(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        T(
          31,
          e === '[object Object]'
            ? 'object with keys {' + Object.keys(t).join(', ') + '}'
            : e
        )
      ))
    );
  }
  function Bp(e) {
    var t = e._init;
    return t(e._payload);
  }
  function f0(e) {
    function t(h, p) {
      if (e) {
        var m = h.deletions;
        m === null ? ((h.deletions = [p]), (h.flags |= 16)) : m.push(p);
      }
    }
    function r(h, p) {
      if (!e) return null;
      for (; p !== null; ) t(h, p), (p = p.sibling);
      return null;
    }
    function n(h, p) {
      for (h = new Map(); p !== null; )
        p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
      return h;
    }
    function i(h, p) {
      return (h = Yr(h, p)), (h.index = 0), (h.sibling = null), h;
    }
    function o(h, p, m) {
      return (
        (h.index = m),
        e
          ? ((m = h.alternate),
            m !== null
              ? ((m = m.index), m < p ? ((h.flags |= 2), p) : m)
              : ((h.flags |= 2), p))
          : ((h.flags |= 1048576), p)
      );
    }
    function a(h) {
      return e && h.alternate === null && (h.flags |= 2), h;
    }
    function s(h, p, m, w) {
      return p === null || p.tag !== 6
        ? ((p = ec(m, h.mode, w)), (p.return = h), p)
        : ((p = i(p, m)), (p.return = h), p);
    }
    function u(h, p, m, w) {
      var S = m.type;
      return S === Zn
        ? c(h, p, m.props.children, w, m.key)
        : p !== null &&
          (p.elementType === S ||
            (typeof S == 'object' &&
              S !== null &&
              S.$$typeof === Rr &&
              Bp(S) === p.type))
        ? ((w = i(p, m.props)), (w.ref = co(h, p, m)), (w.return = h), w)
        : ((w = ks(m.type, m.key, m.props, null, h.mode, w)),
          (w.ref = co(h, p, m)),
          (w.return = h),
          w);
    }
    function l(h, p, m, w) {
      return p === null ||
        p.tag !== 4 ||
        p.stateNode.containerInfo !== m.containerInfo ||
        p.stateNode.implementation !== m.implementation
        ? ((p = tc(m, h.mode, w)), (p.return = h), p)
        : ((p = i(p, m.children || [])), (p.return = h), p);
    }
    function c(h, p, m, w, S) {
      return p === null || p.tag !== 7
        ? ((p = Sn(m, h.mode, w, S)), (p.return = h), p)
        : ((p = i(p, m)), (p.return = h), p);
    }
    function d(h, p, m) {
      if ((typeof p == 'string' && p !== '') || typeof p == 'number')
        return (p = ec('' + p, h.mode, m)), (p.return = h), p;
      if (typeof p == 'object' && p !== null) {
        switch (p.$$typeof) {
          case Ua:
            return (
              (m = ks(p.type, p.key, p.props, null, h.mode, m)),
              (m.ref = co(h, null, p)),
              (m.return = h),
              m
            );
          case Xn:
            return (p = tc(p, h.mode, m)), (p.return = h), p;
          case Rr:
            var w = p._init;
            return d(h, w(p._payload), m);
        }
        if (Eo(p) || oo(p))
          return (p = Sn(p, h.mode, m, null)), (p.return = h), p;
        es(h, p);
      }
      return null;
    }
    function f(h, p, m, w) {
      var S = p !== null ? p.key : null;
      if ((typeof m == 'string' && m !== '') || typeof m == 'number')
        return S !== null ? null : s(h, p, '' + m, w);
      if (typeof m == 'object' && m !== null) {
        switch (m.$$typeof) {
          case Ua:
            return m.key === S ? u(h, p, m, w) : null;
          case Xn:
            return m.key === S ? l(h, p, m, w) : null;
          case Rr:
            return (S = m._init), f(h, p, S(m._payload), w);
        }
        if (Eo(m) || oo(m)) return S !== null ? null : c(h, p, m, w, null);
        es(h, m);
      }
      return null;
    }
    function v(h, p, m, w, S) {
      if ((typeof w == 'string' && w !== '') || typeof w == 'number')
        return (h = h.get(m) || null), s(p, h, '' + w, S);
      if (typeof w == 'object' && w !== null) {
        switch (w.$$typeof) {
          case Ua:
            return (
              (h = h.get(w.key === null ? m : w.key) || null), u(p, h, w, S)
            );
          case Xn:
            return (
              (h = h.get(w.key === null ? m : w.key) || null), l(p, h, w, S)
            );
          case Rr:
            var x = w._init;
            return v(h, p, m, x(w._payload), S);
        }
        if (Eo(w) || oo(w)) return (h = h.get(m) || null), c(p, h, w, S, null);
        es(p, w);
      }
      return null;
    }
    function y(h, p, m, w) {
      for (
        var S = null, x = null, O = p, C = (p = 0), M = null;
        O !== null && C < m.length;
        C++
      ) {
        O.index > C ? ((M = O), (O = null)) : (M = O.sibling);
        var I = f(h, O, m[C], w);
        if (I === null) {
          O === null && (O = M);
          break;
        }
        e && O && I.alternate === null && t(h, O),
          (p = o(I, p, C)),
          x === null ? (S = I) : (x.sibling = I),
          (x = I),
          (O = M);
      }
      if (C === m.length) return r(h, O), ue && dn(h, C), S;
      if (O === null) {
        for (; C < m.length; C++)
          (O = d(h, m[C], w)),
            O !== null &&
              ((p = o(O, p, C)),
              x === null ? (S = O) : (x.sibling = O),
              (x = O));
        return ue && dn(h, C), S;
      }
      for (O = n(h, O); C < m.length; C++)
        (M = v(O, h, C, m[C], w)),
          M !== null &&
            (e && M.alternate !== null && O.delete(M.key === null ? C : M.key),
            (p = o(M, p, C)),
            x === null ? (S = M) : (x.sibling = M),
            (x = M));
      return (
        e &&
          O.forEach(function (ne) {
            return t(h, ne);
          }),
        ue && dn(h, C),
        S
      );
    }
    function g(h, p, m, w) {
      var S = oo(m);
      if (typeof S != 'function') throw Error(T(150));
      if (((m = S.call(m)), m == null)) throw Error(T(151));
      for (
        var x = (S = null), O = p, C = (p = 0), M = null, I = m.next();
        O !== null && !I.done;
        C++, I = m.next()
      ) {
        O.index > C ? ((M = O), (O = null)) : (M = O.sibling);
        var ne = f(h, O, I.value, w);
        if (ne === null) {
          O === null && (O = M);
          break;
        }
        e && O && ne.alternate === null && t(h, O),
          (p = o(ne, p, C)),
          x === null ? (S = ne) : (x.sibling = ne),
          (x = ne),
          (O = M);
      }
      if (I.done) return r(h, O), ue && dn(h, C), S;
      if (O === null) {
        for (; !I.done; C++, I = m.next())
          (I = d(h, I.value, w)),
            I !== null &&
              ((p = o(I, p, C)),
              x === null ? (S = I) : (x.sibling = I),
              (x = I));
        return ue && dn(h, C), S;
      }
      for (O = n(h, O); !I.done; C++, I = m.next())
        (I = v(O, h, C, I.value, w)),
          I !== null &&
            (e && I.alternate !== null && O.delete(I.key === null ? C : I.key),
            (p = o(I, p, C)),
            x === null ? (S = I) : (x.sibling = I),
            (x = I));
      return (
        e &&
          O.forEach(function (ct) {
            return t(h, ct);
          }),
        ue && dn(h, C),
        S
      );
    }
    function _(h, p, m, w) {
      if (
        (typeof m == 'object' &&
          m !== null &&
          m.type === Zn &&
          m.key === null &&
          (m = m.props.children),
        typeof m == 'object' && m !== null)
      ) {
        switch (m.$$typeof) {
          case Ua:
            e: {
              for (var S = m.key, x = p; x !== null; ) {
                if (x.key === S) {
                  if (((S = m.type), S === Zn)) {
                    if (x.tag === 7) {
                      r(h, x.sibling),
                        (p = i(x, m.props.children)),
                        (p.return = h),
                        (h = p);
                      break e;
                    }
                  } else if (
                    x.elementType === S ||
                    (typeof S == 'object' &&
                      S !== null &&
                      S.$$typeof === Rr &&
                      Bp(S) === x.type)
                  ) {
                    r(h, x.sibling),
                      (p = i(x, m.props)),
                      (p.ref = co(h, x, m)),
                      (p.return = h),
                      (h = p);
                    break e;
                  }
                  r(h, x);
                  break;
                } else t(h, x);
                x = x.sibling;
              }
              m.type === Zn
                ? ((p = Sn(m.props.children, h.mode, w, m.key)),
                  (p.return = h),
                  (h = p))
                : ((w = ks(m.type, m.key, m.props, null, h.mode, w)),
                  (w.ref = co(h, p, m)),
                  (w.return = h),
                  (h = w));
            }
            return a(h);
          case Xn:
            e: {
              for (x = m.key; p !== null; ) {
                if (p.key === x)
                  if (
                    p.tag === 4 &&
                    p.stateNode.containerInfo === m.containerInfo &&
                    p.stateNode.implementation === m.implementation
                  ) {
                    r(h, p.sibling),
                      (p = i(p, m.children || [])),
                      (p.return = h),
                      (h = p);
                    break e;
                  } else {
                    r(h, p);
                    break;
                  }
                else t(h, p);
                p = p.sibling;
              }
              (p = tc(m, h.mode, w)), (p.return = h), (h = p);
            }
            return a(h);
          case Rr:
            return (x = m._init), _(h, p, x(m._payload), w);
        }
        if (Eo(m)) return y(h, p, m, w);
        if (oo(m)) return g(h, p, m, w);
        es(h, m);
      }
      return (typeof m == 'string' && m !== '') || typeof m == 'number'
        ? ((m = '' + m),
          p !== null && p.tag === 6
            ? (r(h, p.sibling), (p = i(p, m)), (p.return = h), (h = p))
            : (r(h, p), (p = ec(m, h.mode, w)), (p.return = h), (h = p)),
          a(h))
        : r(h, p);
    }
    return _;
  }
  var Pi = f0(!0),
    d0 = f0(!1),
    ka = {},
    Gt = an(ka),
    na = an(ka),
    ia = an(ka);
  function gn(e) {
    if (e === ka) throw Error(T(174));
    return e;
  }
  function $d(e, t) {
    switch ((te(ia, t), te(na, e), te(Gt, ka), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Lc(null, '');
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Lc(t, e));
    }
    ae(Gt), te(Gt, t);
  }
  function Ai() {
    ae(Gt), ae(na), ae(ia);
  }
  function h0(e) {
    gn(ia.current);
    var t = gn(Gt.current),
      r = Lc(t, e.type);
    t !== r && (te(na, e), te(Gt, r));
  }
  function zd(e) {
    na.current === e && (ae(Gt), ae(na));
  }
  var ce = an(0);
  function uu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (
          r !== null &&
          ((r = r.dehydrated), r === null || r.data === '$?' || r.data === '$!')
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Gl = [];
  function Bd() {
    for (var e = 0; e < Gl.length; e++)
      Gl[e]._workInProgressVersionPrimary = null;
    Gl.length = 0;
  }
  var bs = kr.ReactCurrentDispatcher,
    Kl = kr.ReactCurrentBatchConfig,
    Cn = 0,
    fe = null,
    Ee = null,
    Oe = null,
    lu = !1,
    Io = !1,
    oa = 0,
    tE = 0;
  function Ie() {
    throw Error(T(321));
  }
  function Ud(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!It(e[r], t[r])) return !1;
    return !0;
  }
  function Qd(e, t, r, n, i, o) {
    if (
      ((Cn = o),
      (fe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (bs.current = e === null || e.memoizedState === null ? oE : aE),
      (e = r(n, i)),
      Io)
    ) {
      o = 0;
      do {
        if (((Io = !1), (oa = 0), 25 <= o)) throw Error(T(301));
        (o += 1),
          (Oe = Ee = null),
          (t.updateQueue = null),
          (bs.current = sE),
          (e = r(n, i));
      } while (Io);
    }
    if (
      ((bs.current = cu),
      (t = Ee !== null && Ee.next !== null),
      (Cn = 0),
      (Oe = Ee = fe = null),
      (lu = !1),
      t)
    )
      throw Error(T(300));
    return e;
  }
  function qd() {
    var e = oa !== 0;
    return (oa = 0), e;
  }
  function zt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Oe === null ? (fe.memoizedState = Oe = e) : (Oe = Oe.next = e), Oe;
  }
  function wt() {
    if (Ee === null) {
      var e = fe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ee.next;
    var t = Oe === null ? fe.memoizedState : Oe.next;
    if (t !== null) (Oe = t), (Ee = e);
    else {
      if (e === null) throw Error(T(310));
      (Ee = e),
        (e = {
          memoizedState: Ee.memoizedState,
          baseState: Ee.baseState,
          baseQueue: Ee.baseQueue,
          queue: Ee.queue,
          next: null
        }),
        Oe === null ? (fe.memoizedState = Oe = e) : (Oe = Oe.next = e);
    }
    return Oe;
  }
  function aa(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Yl(e) {
    var t = wt(),
      r = t.queue;
    if (r === null) throw Error(T(311));
    r.lastRenderedReducer = e;
    var n = Ee,
      i = n.baseQueue,
      o = r.pending;
    if (o !== null) {
      if (i !== null) {
        var a = i.next;
        (i.next = o.next), (o.next = a);
      }
      (n.baseQueue = i = o), (r.pending = null);
    }
    if (i !== null) {
      (o = i.next), (n = n.baseState);
      var s = (a = null),
        u = null,
        l = o;
      do {
        var c = l.lane;
        if ((Cn & c) === c)
          u !== null &&
            (u = u.next =
              {
                lane: 0,
                action: l.action,
                hasEagerState: l.hasEagerState,
                eagerState: l.eagerState,
                next: null
              }),
            (n = l.hasEagerState ? l.eagerState : e(n, l.action));
        else {
          var d = {
            lane: c,
            action: l.action,
            hasEagerState: l.hasEagerState,
            eagerState: l.eagerState,
            next: null
          };
          u === null ? ((s = u = d), (a = n)) : (u = u.next = d),
            (fe.lanes |= c),
            (Tn |= c);
        }
        l = l.next;
      } while (l !== null && l !== o);
      u === null ? (a = n) : (u.next = s),
        It(n, t.memoizedState) || (Ge = !0),
        (t.memoizedState = n),
        (t.baseState = a),
        (t.baseQueue = u),
        (r.lastRenderedState = n);
    }
    if (((e = r.interleaved), e !== null)) {
      i = e;
      do (o = i.lane), (fe.lanes |= o), (Tn |= o), (i = i.next);
      while (i !== e);
    } else i === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function Jl(e) {
    var t = wt(),
      r = t.queue;
    if (r === null) throw Error(T(311));
    r.lastRenderedReducer = e;
    var n = r.dispatch,
      i = r.pending,
      o = t.memoizedState;
    if (i !== null) {
      r.pending = null;
      var a = (i = i.next);
      do (o = e(o, a.action)), (a = a.next);
      while (a !== i);
      It(o, t.memoizedState) || (Ge = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (r.lastRenderedState = o);
    }
    return [o, n];
  }
  function p0() {}
  function v0(e, t) {
    var r = fe,
      n = wt(),
      i = t(),
      o = !It(n.memoizedState, i);
    if (
      (o && ((n.memoizedState = i), (Ge = !0)),
      (n = n.queue),
      Wd(g0.bind(null, r, n, e), [e]),
      n.getSnapshot !== t || o || (Oe !== null && Oe.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        sa(9, y0.bind(null, r, n, i, t), void 0, null),
        Ce === null)
      )
        throw Error(T(349));
      (Cn & 30) !== 0 || m0(r, t, i);
    }
    return i;
  }
  function m0(e, t, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = fe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (fe.updateQueue = t),
          (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
  }
  function y0(e, t, r, n) {
    (t.value = r), (t.getSnapshot = n), _0(t) && w0(e);
  }
  function g0(e, t, r) {
    return r(function () {
      _0(t) && w0(e);
    });
  }
  function _0(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !It(e, r);
    } catch {
      return !0;
    }
  }
  function w0(e) {
    var t = _r(e, 1);
    t !== null && Dt(t, e, 1, -1);
  }
  function Up(e) {
    var t = zt();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: aa,
        lastRenderedState: e
      }),
      (t.queue = e),
      (e = e.dispatch = iE.bind(null, fe, e)),
      [t.memoizedState, e]
    );
  }
  function sa(e, t, r, n) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
      (t = fe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (fe.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
      e
    );
  }
  function b0() {
    return wt().memoizedState;
  }
  function Es(e, t, r, n) {
    var i = zt();
    (fe.flags |= e),
      (i.memoizedState = sa(1 | t, r, void 0, n === void 0 ? null : n));
  }
  function Vu(e, t, r, n) {
    var i = wt();
    n = n === void 0 ? null : n;
    var o = void 0;
    if (Ee !== null) {
      var a = Ee.memoizedState;
      if (((o = a.destroy), n !== null && Ud(n, a.deps))) {
        i.memoizedState = sa(t, r, o, n);
        return;
      }
    }
    (fe.flags |= e), (i.memoizedState = sa(1 | t, r, o, n));
  }
  function Qp(e, t) {
    return Es(8390656, 8, e, t);
  }
  function Wd(e, t) {
    return Vu(2048, 8, e, t);
  }
  function E0(e, t) {
    return Vu(4, 2, e, t);
  }
  function S0(e, t) {
    return Vu(4, 4, e, t);
  }
  function x0(e, t) {
    if (typeof t == 'function')
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function O0(e, t, r) {
    return (
      (r = r != null ? r.concat([e]) : null), Vu(4, 4, x0.bind(null, t, e), r)
    );
  }
  function Hd() {}
  function k0(e, t) {
    var r = wt();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && Ud(t, n[1])
      ? n[0]
      : ((r.memoizedState = [e, t]), e);
  }
  function C0(e, t) {
    var r = wt();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && Ud(t, n[1])
      ? n[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function T0(e, t, r) {
    return (Cn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Ge = !0)), (e.memoizedState = r))
      : (It(r, t) ||
          ((r = Ry()), (fe.lanes |= r), (Tn |= r), (e.baseState = !0)),
        t);
  }
  function rE(e, t) {
    var r = X;
    (X = r !== 0 && 4 > r ? r : 4), e(!0);
    var n = Kl.transition;
    Kl.transition = {};
    try {
      e(!1), t();
    } finally {
      (X = r), (Kl.transition = n);
    }
  }
  function N0() {
    return wt().memoizedState;
  }
  function nE(e, t, r) {
    var n = Kr(e);
    if (
      ((r = {
        lane: n,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }),
      D0(e))
    )
      R0(t, r);
    else if (((r = s0(e, t, r, n)), r !== null)) {
      var i = Be();
      Dt(r, e, n, i), P0(r, t, n);
    }
  }
  function iE(e, t, r) {
    var n = Kr(e),
      i = {
        lane: n,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
    if (D0(e)) R0(t, i);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var a = t.lastRenderedState,
            s = o(a, r);
          if (((i.hasEagerState = !0), (i.eagerState = s), It(s, a))) {
            var u = t.interleaved;
            u === null
              ? ((i.next = i), jd(t))
              : ((i.next = u.next), (u.next = i)),
              (t.interleaved = i);
            return;
          }
        } catch {
        } finally {
        }
      (r = s0(e, t, i, n)),
        r !== null && ((i = Be()), Dt(r, e, n, i), P0(r, t, n));
    }
  }
  function D0(e) {
    var t = e.alternate;
    return e === fe || (t !== null && t === fe);
  }
  function R0(e, t) {
    Io = lu = !0;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t);
  }
  function P0(e, t, r) {
    if ((r & 4194240) !== 0) {
      var n = t.lanes;
      (n &= e.pendingLanes), (r |= n), (t.lanes = r), xd(e, r);
    }
  }
  var cu = {
      readContext: _t,
      useCallback: Ie,
      useContext: Ie,
      useEffect: Ie,
      useImperativeHandle: Ie,
      useInsertionEffect: Ie,
      useLayoutEffect: Ie,
      useMemo: Ie,
      useReducer: Ie,
      useRef: Ie,
      useState: Ie,
      useDebugValue: Ie,
      useDeferredValue: Ie,
      useTransition: Ie,
      useMutableSource: Ie,
      useSyncExternalStore: Ie,
      useId: Ie,
      unstable_isNewReconciler: !1
    },
    oE = {
      readContext: _t,
      useCallback: function (e, t) {
        return (zt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: _t,
      useEffect: Qp,
      useImperativeHandle: function (e, t, r) {
        return (
          (r = r != null ? r.concat([e]) : null),
          Es(4194308, 4, x0.bind(null, t, e), r)
        );
      },
      useLayoutEffect: function (e, t) {
        return Es(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Es(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = zt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (r.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, r) {
        var n = zt();
        return (
          (t = r !== void 0 ? r(t) : t),
          (n.memoizedState = n.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
          }),
          (n.queue = e),
          (e = e.dispatch = nE.bind(null, fe, e)),
          [n.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = zt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Up,
      useDebugValue: Hd,
      useDeferredValue: function (e) {
        return (zt().memoizedState = e);
      },
      useTransition: function () {
        var e = Up(!1),
          t = e[0];
        return (e = rE.bind(null, e[1])), (zt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var n = fe,
          i = zt();
        if (ue) {
          if (r === void 0) throw Error(T(407));
          r = r();
        } else {
          if (((r = t()), Ce === null)) throw Error(T(349));
          (Cn & 30) !== 0 || m0(n, t, r);
        }
        i.memoizedState = r;
        var o = { value: r, getSnapshot: t };
        return (
          (i.queue = o),
          Qp(g0.bind(null, n, o, e), [e]),
          (n.flags |= 2048),
          sa(9, y0.bind(null, n, o, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = zt(),
          t = Ce.identifierPrefix;
        if (ue) {
          var r = fr,
            n = cr;
          (r = (n & ~(1 << (32 - Nt(n) - 1))).toString(32) + r),
            (t = ':' + t + 'R' + r),
            (r = oa++),
            0 < r && (t += 'H' + r.toString(32)),
            (t += ':');
        } else (r = tE++), (t = ':' + t + 'r' + r.toString(32) + ':');
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1
    },
    aE = {
      readContext: _t,
      useCallback: k0,
      useContext: _t,
      useEffect: Wd,
      useImperativeHandle: O0,
      useInsertionEffect: E0,
      useLayoutEffect: S0,
      useMemo: C0,
      useReducer: Yl,
      useRef: b0,
      useState: function () {
        return Yl(aa);
      },
      useDebugValue: Hd,
      useDeferredValue: function (e) {
        var t = wt();
        return T0(t, Ee.memoizedState, e);
      },
      useTransition: function () {
        var e = Yl(aa)[0],
          t = wt().memoizedState;
        return [e, t];
      },
      useMutableSource: p0,
      useSyncExternalStore: v0,
      useId: N0,
      unstable_isNewReconciler: !1
    },
    sE = {
      readContext: _t,
      useCallback: k0,
      useContext: _t,
      useEffect: Wd,
      useImperativeHandle: O0,
      useInsertionEffect: E0,
      useLayoutEffect: S0,
      useMemo: C0,
      useReducer: Jl,
      useRef: b0,
      useState: function () {
        return Jl(aa);
      },
      useDebugValue: Hd,
      useDeferredValue: function (e) {
        var t = wt();
        return Ee === null ? (t.memoizedState = e) : T0(t, Ee.memoizedState, e);
      },
      useTransition: function () {
        var e = Jl(aa)[0],
          t = wt().memoizedState;
        return [e, t];
      },
      useMutableSource: p0,
      useSyncExternalStore: v0,
      useId: N0,
      unstable_isNewReconciler: !1
    };
  function Ii(e, t) {
    try {
      var r = '',
        n = t;
      do (r += Fw(n)), (n = n.return);
      while (n);
      var i = r;
    } catch (o) {
      i =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function Xl(e, t, r) {
    return {
      value: e,
      source: null,
      stack: r != null ? r : null,
      digest: t != null ? t : null
    };
  }
  function af(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var uE = typeof WeakMap == 'function' ? WeakMap : Map;
  function A0(e, t, r) {
    (r = dr(-1, r)), (r.tag = 3), (r.payload = { element: null });
    var n = t.value;
    return (
      (r.callback = function () {
        du || ((du = !0), (mf = n)), af(e, t);
      }),
      r
    );
  }
  function I0(e, t, r) {
    (r = dr(-1, r)), (r.tag = 3);
    var n = e.type.getDerivedStateFromError;
    if (typeof n == 'function') {
      var i = t.value;
      (r.payload = function () {
        return n(i);
      }),
        (r.callback = function () {
          af(e, t);
        });
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == 'function' &&
        (r.callback = function () {
          af(e, t),
            typeof n != 'function' &&
              (Gr === null ? (Gr = new Set([this])) : Gr.add(this));
          var a = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : ''
          });
        }),
      r
    );
  }
  function qp(e, t, r) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new uE();
      var i = new Set();
      n.set(t, i);
    } else (i = n.get(t)), i === void 0 && ((i = new Set()), n.set(t, i));
    i.has(r) || (i.add(r), (e = EE.bind(null, e, t, r)), t.then(e, e));
  }
  function Wp(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Hp(e, t, r, n, i) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null
                ? (r.tag = 17)
                : ((t = dr(-1, 1)), (t.tag = 2), Hr(r, t, 1))),
            (r.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = i), e);
  }
  var lE = kr.ReactCurrentOwner,
    Ge = !1;
  function $e(e, t, r, n) {
    t.child = e === null ? d0(t, null, r, n) : Pi(t, e.child, r, n);
  }
  function Gp(e, t, r, n, i) {
    r = r.render;
    var o = t.ref;
    return (
      Ei(t, i),
      (n = Qd(e, t, r, n, o, i)),
      (r = qd()),
      e !== null && !Ge
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          wr(e, t, i))
        : (ue && r && Pd(t), (t.flags |= 1), $e(e, t, n, i), t.child)
    );
  }
  function Kp(e, t, r, n, i) {
    if (e === null) {
      var o = r.type;
      return typeof o == 'function' &&
        !th(o) &&
        o.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), F0(e, t, o, n, i))
        : ((e = ks(r.type, null, n, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), (e.lanes & i) === 0)) {
      var a = o.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : Zo), r(a, n) && e.ref === t.ref)
      )
        return wr(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = Yr(o, n)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function F0(e, t, r, n, i) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Zo(o, n) && e.ref === t.ref)
        if (((Ge = !1), (t.pendingProps = n = o), (e.lanes & i) !== 0))
          (e.flags & 131072) !== 0 && (Ge = !0);
        else return (t.lanes = e.lanes), wr(e, t, i);
    }
    return sf(e, t, r, n, i);
  }
  function L0(e, t, r) {
    var n = t.pendingProps,
      i = n.children,
      o = e !== null ? e.memoizedState : null;
    if (n.mode === 'hidden')
      if ((t.mode & 1) === 0)
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        }),
          te(li, Ze),
          (Ze |= r);
      else {
        if ((r & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null
            }),
            (t.updateQueue = null),
            te(li, Ze),
            (Ze |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        }),
          (n = o !== null ? o.baseLanes : r),
          te(li, Ze),
          (Ze |= n);
      }
    else
      o !== null ? ((n = o.baseLanes | r), (t.memoizedState = null)) : (n = r),
        te(li, Ze),
        (Ze |= n);
    return $e(e, t, i, r), t.child;
  }
  function M0(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function sf(e, t, r, n, i) {
    var o = Ye(r) ? On : Ve.current;
    return (
      (o = Di(t, o)),
      Ei(t, i),
      (r = Qd(e, t, r, n, o, i)),
      (n = qd()),
      e !== null && !Ge
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          wr(e, t, i))
        : (ue && n && Pd(t), (t.flags |= 1), $e(e, t, r, i), t.child)
    );
  }
  function Yp(e, t, r, n, i) {
    if (Ye(r)) {
      var o = !0;
      ru(t);
    } else o = !1;
    if ((Ei(t, i), t.stateNode === null))
      Ss(e, t), c0(t, r, n), of(t, r, n, i), (n = !0);
    else if (e === null) {
      var a = t.stateNode,
        s = t.memoizedProps;
      a.props = s;
      var u = a.context,
        l = r.contextType;
      typeof l == 'object' && l !== null
        ? (l = _t(l))
        : ((l = Ye(r) ? On : Ve.current), (l = Di(t, l)));
      var c = r.getDerivedStateFromProps,
        d =
          typeof c == 'function' ||
          typeof a.getSnapshotBeforeUpdate == 'function';
      d ||
        (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof a.componentWillReceiveProps != 'function') ||
        ((s !== n || u !== l) && zp(t, a, n, l)),
        (Pr = !1);
      var f = t.memoizedState;
      (a.state = f),
        su(t, n, a, i),
        (u = t.memoizedState),
        s !== n || f !== u || Ke.current || Pr
          ? (typeof c == 'function' && (nf(t, r, c, n), (u = t.memoizedState)),
            (s = Pr || $p(t, r, s, n, f, u, l))
              ? (d ||
                  (typeof a.UNSAFE_componentWillMount != 'function' &&
                    typeof a.componentWillMount != 'function') ||
                  (typeof a.componentWillMount == 'function' &&
                    a.componentWillMount(),
                  typeof a.UNSAFE_componentWillMount == 'function' &&
                    a.UNSAFE_componentWillMount()),
                typeof a.componentDidMount == 'function' &&
                  (t.flags |= 4194308))
              : (typeof a.componentDidMount == 'function' &&
                  (t.flags |= 4194308),
                (t.memoizedProps = n),
                (t.memoizedState = u)),
            (a.props = n),
            (a.state = u),
            (a.context = l),
            (n = s))
          : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
            (n = !1));
    } else {
      (a = t.stateNode),
        u0(e, t),
        (s = t.memoizedProps),
        (l = t.type === t.elementType ? s : Ot(t.type, s)),
        (a.props = l),
        (d = t.pendingProps),
        (f = a.context),
        (u = r.contextType),
        typeof u == 'object' && u !== null
          ? (u = _t(u))
          : ((u = Ye(r) ? On : Ve.current), (u = Di(t, u)));
      var v = r.getDerivedStateFromProps;
      (c =
        typeof v == 'function' ||
        typeof a.getSnapshotBeforeUpdate == 'function') ||
        (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof a.componentWillReceiveProps != 'function') ||
        ((s !== d || f !== u) && zp(t, a, n, u)),
        (Pr = !1),
        (f = t.memoizedState),
        (a.state = f),
        su(t, n, a, i);
      var y = t.memoizedState;
      s !== d || f !== y || Ke.current || Pr
        ? (typeof v == 'function' && (nf(t, r, v, n), (y = t.memoizedState)),
          (l = Pr || $p(t, r, l, n, f, y, u) || !1)
            ? (c ||
                (typeof a.UNSAFE_componentWillUpdate != 'function' &&
                  typeof a.componentWillUpdate != 'function') ||
                (typeof a.componentWillUpdate == 'function' &&
                  a.componentWillUpdate(n, y, u),
                typeof a.UNSAFE_componentWillUpdate == 'function' &&
                  a.UNSAFE_componentWillUpdate(n, y, u)),
              typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate == 'function' &&
                (t.flags |= 1024))
            : (typeof a.componentDidUpdate != 'function' ||
                (s === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate != 'function' ||
                (s === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = n),
              (t.memoizedState = y)),
          (a.props = n),
          (a.state = y),
          (a.context = u),
          (n = l))
        : (typeof a.componentDidUpdate != 'function' ||
            (s === e.memoizedProps && f === e.memoizedState) ||
            (t.flags |= 4),
          typeof a.getSnapshotBeforeUpdate != 'function' ||
            (s === e.memoizedProps && f === e.memoizedState) ||
            (t.flags |= 1024),
          (n = !1));
    }
    return uf(e, t, r, n, o, i);
  }
  function uf(e, t, r, n, i, o) {
    M0(e, t);
    var a = (t.flags & 128) !== 0;
    if (!n && !a) return i && Fp(t, r, !1), wr(e, t, o);
    (n = t.stateNode), (lE.current = t);
    var s =
      a && typeof r.getDerivedStateFromError != 'function' ? null : n.render();
    return (
      (t.flags |= 1),
      e !== null && a
        ? ((t.child = Pi(t, e.child, null, o)), (t.child = Pi(t, null, s, o)))
        : $e(e, t, s, o),
      (t.memoizedState = n.state),
      i && Fp(t, r, !0),
      t.child
    );
  }
  function j0(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Ip(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ip(e, t.context, !1),
      $d(e, t.containerInfo);
  }
  function Jp(e, t, r, n, i) {
    return Ri(), Id(i), (t.flags |= 256), $e(e, t, r, n), t.child;
  }
  var lf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function cf(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function V0(e, t, r) {
    var n = t.pendingProps,
      i = ce.current,
      o = !1,
      a = (t.flags & 128) !== 0,
      s;
    if (
      ((s = a) ||
        (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
      s
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (i |= 1),
      te(ce, i & 1),
      e === null)
    )
      return (
        tf(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824),
            null)
          : ((a = n.children),
            (e = n.fallback),
            o
              ? ((n = t.mode),
                (o = t.child),
                (a = { mode: 'hidden', children: a }),
                (n & 1) === 0 && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = a))
                  : (o = Bu(a, n, 0, null)),
                (e = Sn(e, n, r, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = cf(r)),
                (t.memoizedState = lf),
                e)
              : Gd(t, a))
      );
    if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
      return cE(e, t, a, n, s, i, r);
    if (o) {
      (o = n.fallback), (a = t.mode), (i = e.child), (s = i.sibling);
      var u = { mode: 'hidden', children: n.children };
      return (
        (a & 1) === 0 && t.child !== i
          ? ((n = t.child),
            (n.childLanes = 0),
            (n.pendingProps = u),
            (t.deletions = null))
          : ((n = Yr(i, u)), (n.subtreeFlags = i.subtreeFlags & 14680064)),
        s !== null ? (o = Yr(s, o)) : ((o = Sn(o, a, r, null)), (o.flags |= 2)),
        (o.return = t),
        (n.return = t),
        (n.sibling = o),
        (t.child = n),
        (n = o),
        (o = t.child),
        (a = e.child.memoizedState),
        (a =
          a === null
            ? cf(r)
            : {
                baseLanes: a.baseLanes | r,
                cachePool: null,
                transitions: a.transitions
              }),
        (o.memoizedState = a),
        (o.childLanes = e.childLanes & ~r),
        (t.memoizedState = lf),
        n
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (n = Yr(o, { mode: 'visible', children: n.children })),
      (t.mode & 1) === 0 && (n.lanes = r),
      (n.return = t),
      (n.sibling = null),
      e !== null &&
        ((r = t.deletions),
        r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = n),
      (t.memoizedState = null),
      n
    );
  }
  function Gd(e, t) {
    return (
      (t = Bu({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function ts(e, t, r, n) {
    return (
      n !== null && Id(n),
      Pi(t, e.child, null, r),
      (e = Gd(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function cE(e, t, r, n, i, o, a) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (n = Xl(Error(T(422)))), ts(e, t, a, n))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = n.fallback),
          (i = t.mode),
          (n = Bu({ mode: 'visible', children: n.children }, i, 0, null)),
          (o = Sn(o, i, a, null)),
          (o.flags |= 2),
          (n.return = t),
          (o.return = t),
          (n.sibling = o),
          (t.child = n),
          (t.mode & 1) !== 0 && Pi(t, e.child, null, a),
          (t.child.memoizedState = cf(a)),
          (t.memoizedState = lf),
          o);
    if ((t.mode & 1) === 0) return ts(e, t, a, null);
    if (i.data === '$!') {
      if (((n = i.nextSibling && i.nextSibling.dataset), n)) var s = n.dgst;
      return (
        (n = s), (o = Error(T(419))), (n = Xl(o, n, void 0)), ts(e, t, a, n)
      );
    }
    if (((s = (a & e.childLanes) !== 0), Ge || s)) {
      if (((n = Ce), n !== null)) {
        switch (a & -a) {
          case 4:
            i = 2;
            break;
          case 16:
            i = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            i = 32;
            break;
          case 536870912:
            i = 268435456;
            break;
          default:
            i = 0;
        }
        (i = (i & (n.suspendedLanes | a)) !== 0 ? 0 : i),
          i !== 0 &&
            i !== o.retryLane &&
            ((o.retryLane = i), _r(e, i), Dt(n, e, i, -1));
      }
      return eh(), (n = Xl(Error(T(421)))), ts(e, t, a, n);
    }
    return i.data === '$?'
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = SE.bind(null, e)),
        (i._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (rt = Wr(i.nextSibling)),
        (nt = t),
        (ue = !0),
        (Ct = null),
        e !== null &&
          ((ft[dt++] = cr),
          (ft[dt++] = fr),
          (ft[dt++] = kn),
          (cr = e.id),
          (fr = e.overflow),
          (kn = t)),
        (t = Gd(t, n.children)),
        (t.flags |= 4096),
        t);
  }
  function Xp(e, t, r) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), rf(e.return, t, r);
  }
  function Zl(e, t, r, n, i) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: n,
          tail: r,
          tailMode: i
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = n),
        (o.tail = r),
        (o.tailMode = i));
  }
  function $0(e, t, r) {
    var n = t.pendingProps,
      i = n.revealOrder,
      o = n.tail;
    if (($e(e, t, n.children, r), (n = ce.current), (n & 2) !== 0))
      (n = (n & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Xp(e, r, t);
          else if (e.tag === 19) Xp(e, r, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      n &= 1;
    }
    if ((te(ce, n), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (i) {
        case 'forwards':
          for (r = t.child, i = null; r !== null; )
            (e = r.alternate),
              e !== null && uu(e) === null && (i = r),
              (r = r.sibling);
          (r = i),
            r === null
              ? ((i = t.child), (t.child = null))
              : ((i = r.sibling), (r.sibling = null)),
            Zl(t, !1, i, r, o);
          break;
        case 'backwards':
          for (r = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && uu(e) === null)) {
              t.child = i;
              break;
            }
            (e = i.sibling), (i.sibling = r), (r = i), (i = e);
          }
          Zl(t, !0, r, null, o);
          break;
        case 'together':
          Zl(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Ss(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function wr(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Tn |= t.lanes),
      (r & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(T(153));
    if (t.child !== null) {
      for (
        e = t.child, r = Yr(e, e.pendingProps), t.child = r, r.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (r = r.sibling = Yr(e, e.pendingProps)),
          (r.return = t);
      r.sibling = null;
    }
    return t.child;
  }
  function fE(e, t, r) {
    switch (t.tag) {
      case 3:
        j0(t), Ri();
        break;
      case 5:
        h0(t);
        break;
      case 1:
        Ye(t.type) && ru(t);
        break;
      case 4:
        $d(t, t.stateNode.containerInfo);
        break;
      case 10:
        var n = t.type._context,
          i = t.memoizedProps.value;
        te(ou, n._currentValue), (n._currentValue = i);
        break;
      case 13:
        if (((n = t.memoizedState), n !== null))
          return n.dehydrated !== null
            ? (te(ce, ce.current & 1), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
            ? V0(e, t, r)
            : (te(ce, ce.current & 1),
              (e = wr(e, t, r)),
              e !== null ? e.sibling : null);
        te(ce, ce.current & 1);
        break;
      case 19:
        if (((n = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (n) return $0(e, t, r);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          te(ce, ce.current),
          n)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), L0(e, t, r);
    }
    return wr(e, t, r);
  }
  var z0, ff, B0, U0;
  z0 = function (e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
  };
  ff = function () {};
  B0 = function (e, t, r, n) {
    var i = e.memoizedProps;
    if (i !== n) {
      (e = t.stateNode), gn(Gt.current);
      var o = null;
      switch (r) {
        case 'input':
          (i = Pc(e, i)), (n = Pc(e, n)), (o = []);
          break;
        case 'select':
          (i = he({}, i, { value: void 0 })),
            (n = he({}, n, { value: void 0 })),
            (o = []);
          break;
        case 'textarea':
          (i = Fc(e, i)), (n = Fc(e, n)), (o = []);
          break;
        default:
          typeof i.onClick != 'function' &&
            typeof n.onClick == 'function' &&
            (e.onclick = eu);
      }
      Mc(r, n);
      var a;
      r = null;
      for (l in i)
        if (!n.hasOwnProperty(l) && i.hasOwnProperty(l) && i[l] != null)
          if (l === 'style') {
            var s = i[l];
            for (a in s) s.hasOwnProperty(a) && (r || (r = {}), (r[a] = ''));
          } else
            l !== 'dangerouslySetInnerHTML' &&
              l !== 'children' &&
              l !== 'suppressContentEditableWarning' &&
              l !== 'suppressHydrationWarning' &&
              l !== 'autoFocus' &&
              (Wo.hasOwnProperty(l)
                ? o || (o = [])
                : (o = o || []).push(l, null));
      for (l in n) {
        var u = n[l];
        if (
          ((s = i != null ? i[l] : void 0),
          n.hasOwnProperty(l) && u !== s && (u != null || s != null))
        )
          if (l === 'style')
            if (s) {
              for (a in s)
                !s.hasOwnProperty(a) ||
                  (u && u.hasOwnProperty(a)) ||
                  (r || (r = {}), (r[a] = ''));
              for (a in u)
                u.hasOwnProperty(a) &&
                  s[a] !== u[a] &&
                  (r || (r = {}), (r[a] = u[a]));
            } else r || (o || (o = []), o.push(l, r)), (r = u);
          else
            l === 'dangerouslySetInnerHTML'
              ? ((u = u ? u.__html : void 0),
                (s = s ? s.__html : void 0),
                u != null && s !== u && (o = o || []).push(l, u))
              : l === 'children'
              ? (typeof u != 'string' && typeof u != 'number') ||
                (o = o || []).push(l, '' + u)
              : l !== 'suppressContentEditableWarning' &&
                l !== 'suppressHydrationWarning' &&
                (Wo.hasOwnProperty(l)
                  ? (u != null && l === 'onScroll' && oe('scroll', e),
                    o || s === u || (o = []))
                  : (o = o || []).push(l, u));
      }
      r && (o = o || []).push('style', r);
      var l = o;
      (t.updateQueue = l) && (t.flags |= 4);
    }
  };
  U0 = function (e, t, r, n) {
    r !== n && (t.flags |= 4);
  };
  function fo(e, t) {
    if (!ue)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case 'collapsed':
          r = e.tail;
          for (var n = null; r !== null; )
            r.alternate !== null && (n = r), (r = r.sibling);
          n === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (n.sibling = null);
      }
  }
  function Fe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      n = 0;
    if (t)
      for (var i = e.child; i !== null; )
        (r |= i.lanes | i.childLanes),
          (n |= i.subtreeFlags & 14680064),
          (n |= i.flags & 14680064),
          (i.return = e),
          (i = i.sibling);
    else
      for (i = e.child; i !== null; )
        (r |= i.lanes | i.childLanes),
          (n |= i.subtreeFlags),
          (n |= i.flags),
          (i.return = e),
          (i = i.sibling);
    return (e.subtreeFlags |= n), (e.childLanes = r), t;
  }
  function dE(e, t, r) {
    var n = t.pendingProps;
    switch ((Ad(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Fe(t), null;
      case 1:
        return Ye(t.type) && tu(), Fe(t), null;
      case 3:
        return (
          (n = t.stateNode),
          Ai(),
          ae(Ke),
          ae(Ve),
          Bd(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (Za(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Ct !== null && (_f(Ct), (Ct = null)))),
          ff(e, t),
          Fe(t),
          null
        );
      case 5:
        zd(t);
        var i = gn(ia.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          B0(e, t, r, n, i),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(T(166));
            return Fe(t), null;
          }
          if (((e = gn(Gt.current)), Za(t))) {
            (n = t.stateNode), (r = t.type);
            var o = t.memoizedProps;
            switch (((n[Qt] = t), (n[ra] = o), (e = (t.mode & 1) !== 0), r)) {
              case 'dialog':
                oe('cancel', n), oe('close', n);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                oe('load', n);
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < xo.length; i++) oe(xo[i], n);
                break;
              case 'source':
                oe('error', n);
                break;
              case 'img':
              case 'image':
              case 'link':
                oe('error', n), oe('load', n);
                break;
              case 'details':
                oe('toggle', n);
                break;
              case 'input':
                sp(n, o), oe('invalid', n);
                break;
              case 'select':
                (n._wrapperState = { wasMultiple: !!o.multiple }),
                  oe('invalid', n);
                break;
              case 'textarea':
                lp(n, o), oe('invalid', n);
            }
            Mc(r, o), (i = null);
            for (var a in o)
              if (o.hasOwnProperty(a)) {
                var s = o[a];
                a === 'children'
                  ? typeof s == 'string'
                    ? n.textContent !== s &&
                      (o.suppressHydrationWarning !== !0 &&
                        Xa(n.textContent, s, e),
                      (i = ['children', s]))
                    : typeof s == 'number' &&
                      n.textContent !== '' + s &&
                      (o.suppressHydrationWarning !== !0 &&
                        Xa(n.textContent, s, e),
                      (i = ['children', '' + s]))
                  : Wo.hasOwnProperty(a) &&
                    s != null &&
                    a === 'onScroll' &&
                    oe('scroll', n);
              }
            switch (r) {
              case 'input':
                Qa(n), up(n, o, !0);
                break;
              case 'textarea':
                Qa(n), cp(n);
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof o.onClick == 'function' && (n.onclick = eu);
            }
            (n = i), (t.updateQueue = n), n !== null && (t.flags |= 4);
          } else {
            (a = i.nodeType === 9 ? i : i.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = my(r)),
              e === 'http://www.w3.org/1999/xhtml'
                ? r === 'script'
                  ? ((e = a.createElement('div')),
                    (e.innerHTML = '<script></script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof n.is == 'string'
                  ? (e = a.createElement(r, { is: n.is }))
                  : ((e = a.createElement(r)),
                    r === 'select' &&
                      ((a = e),
                      n.multiple
                        ? (a.multiple = !0)
                        : n.size && (a.size = n.size)))
                : (e = a.createElementNS(e, r)),
              (e[Qt] = t),
              (e[ra] = n),
              z0(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((a = jc(r, n)), r)) {
                case 'dialog':
                  oe('cancel', e), oe('close', e), (i = n);
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  oe('load', e), (i = n);
                  break;
                case 'video':
                case 'audio':
                  for (i = 0; i < xo.length; i++) oe(xo[i], e);
                  i = n;
                  break;
                case 'source':
                  oe('error', e), (i = n);
                  break;
                case 'img':
                case 'image':
                case 'link':
                  oe('error', e), oe('load', e), (i = n);
                  break;
                case 'details':
                  oe('toggle', e), (i = n);
                  break;
                case 'input':
                  sp(e, n), (i = Pc(e, n)), oe('invalid', e);
                  break;
                case 'option':
                  i = n;
                  break;
                case 'select':
                  (e._wrapperState = { wasMultiple: !!n.multiple }),
                    (i = he({}, n, { value: void 0 })),
                    oe('invalid', e);
                  break;
                case 'textarea':
                  lp(e, n), (i = Fc(e, n)), oe('invalid', e);
                  break;
                default:
                  i = n;
              }
              Mc(r, i), (s = i);
              for (o in s)
                if (s.hasOwnProperty(o)) {
                  var u = s[o];
                  o === 'style'
                    ? _y(e, u)
                    : o === 'dangerouslySetInnerHTML'
                    ? ((u = u ? u.__html : void 0), u != null && yy(e, u))
                    : o === 'children'
                    ? typeof u == 'string'
                      ? (r !== 'textarea' || u !== '') && Ho(e, u)
                      : typeof u == 'number' && Ho(e, '' + u)
                    : o !== 'suppressContentEditableWarning' &&
                      o !== 'suppressHydrationWarning' &&
                      o !== 'autoFocus' &&
                      (Wo.hasOwnProperty(o)
                        ? u != null && o === 'onScroll' && oe('scroll', e)
                        : u != null && gd(e, o, u, a));
                }
              switch (r) {
                case 'input':
                  Qa(e), up(e, n, !1);
                  break;
                case 'textarea':
                  Qa(e), cp(e);
                  break;
                case 'option':
                  n.value != null && e.setAttribute('value', '' + Xr(n.value));
                  break;
                case 'select':
                  (e.multiple = !!n.multiple),
                    (o = n.value),
                    o != null
                      ? gi(e, !!n.multiple, o, !1)
                      : n.defaultValue != null &&
                        gi(e, !!n.multiple, n.defaultValue, !0);
                  break;
                default:
                  typeof i.onClick == 'function' && (e.onclick = eu);
              }
              switch (r) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  n = !!n.autoFocus;
                  break e;
                case 'img':
                  n = !0;
                  break e;
                default:
                  n = !1;
              }
            }
            n && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Fe(t), null;
      case 6:
        if (e && t.stateNode != null) U0(e, t, e.memoizedProps, n);
        else {
          if (typeof n != 'string' && t.stateNode === null) throw Error(T(166));
          if (((r = gn(ia.current)), gn(Gt.current), Za(t))) {
            if (
              ((n = t.stateNode),
              (r = t.memoizedProps),
              (n[Qt] = t),
              (o = n.nodeValue !== r) && ((e = nt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Xa(n.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Xa(n.nodeValue, r, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
              (n[Qt] = t),
              (t.stateNode = n);
        }
        return Fe(t), null;
      case 13:
        if (
          (ae(ce),
          (n = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ue && rt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            a0(), Ri(), (t.flags |= 98560), (o = !1);
          else if (((o = Za(t)), n !== null && n.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(T(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(T(317));
              o[Qt] = t;
            } else
              Ri(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Fe(t), (o = !1);
          } else Ct !== null && (_f(Ct), (Ct = null)), (o = !0);
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((n = n !== null),
            n !== (e !== null && e.memoizedState !== null) &&
              n &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ce.current & 1) !== 0
                  ? Se === 0 && (Se = 3)
                  : eh())),
            t.updateQueue !== null && (t.flags |= 4),
            Fe(t),
            null);
      case 4:
        return (
          Ai(),
          ff(e, t),
          e === null && ea(t.stateNode.containerInfo),
          Fe(t),
          null
        );
      case 10:
        return Md(t.type._context), Fe(t), null;
      case 17:
        return Ye(t.type) && tu(), Fe(t), null;
      case 19:
        if ((ae(ce), (o = t.memoizedState), o === null)) return Fe(t), null;
        if (((n = (t.flags & 128) !== 0), (a = o.rendering), a === null))
          if (n) fo(o, !1);
          else {
            if (Se !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((a = uu(e)), a !== null)) {
                  for (
                    t.flags |= 128,
                      fo(o, !1),
                      n = a.updateQueue,
                      n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      n = r,
                      r = t.child;
                    r !== null;

                  )
                    (o = r),
                      (e = n),
                      (o.flags &= 14680066),
                      (a = o.alternate),
                      a === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = a.childLanes),
                          (o.lanes = a.lanes),
                          (o.child = a.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = a.memoizedProps),
                          (o.memoizedState = a.memoizedState),
                          (o.updateQueue = a.updateQueue),
                          (o.type = a.type),
                          (e = a.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext
                                })),
                      (r = r.sibling);
                  return te(ce, (ce.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              ye() > Fi &&
              ((t.flags |= 128), (n = !0), fo(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!n)
            if (((e = uu(a)), e !== null)) {
              if (
                ((t.flags |= 128),
                (n = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                fo(o, !0),
                o.tail === null &&
                  o.tailMode === 'hidden' &&
                  !a.alternate &&
                  !ue)
              )
                return Fe(t), null;
            } else
              2 * ye() - o.renderingStartTime > Fi &&
                r !== 1073741824 &&
                ((t.flags |= 128), (n = !0), fo(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((a.sibling = t.child), (t.child = a))
            : ((r = o.last),
              r !== null ? (r.sibling = a) : (t.child = a),
              (o.last = a));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = ye()),
            (t.sibling = null),
            (r = ce.current),
            te(ce, n ? (r & 1) | 2 : r & 1),
            t)
          : (Fe(t), null);
      case 22:
      case 23:
        return (
          Zd(),
          (n = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
          n && (t.mode & 1) !== 0
            ? (Ze & 1073741824) !== 0 &&
              (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Fe(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(T(156, t.tag));
  }
  function hE(e, t) {
    switch ((Ad(t), t.tag)) {
      case 1:
        return (
          Ye(t.type) && tu(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Ai(),
          ae(Ke),
          ae(Ve),
          Bd(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return zd(t), null;
      case 13:
        if (
          (ae(ce), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(T(340));
          Ri();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return ae(ce), null;
      case 4:
        return Ai(), null;
      case 10:
        return Md(t.type._context), null;
      case 22:
      case 23:
        return Zd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var rs = !1,
    Me = !1,
    pE = typeof WeakSet == 'function' ? WeakSet : Set,
    A = null;
  function ui(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == 'function')
        try {
          r(null);
        } catch (n) {
          pe(e, t, n);
        }
      else r.current = null;
  }
  function df(e, t, r) {
    try {
      r();
    } catch (n) {
      pe(e, t, n);
    }
  }
  var Zp = !1;
  function vE(e, t) {
    if (((Gc = Js), (e = Hy()), Rd(e))) {
      if ('selectionStart' in e)
        var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var n = r.getSelection && r.getSelection();
          if (n && n.rangeCount !== 0) {
            r = n.anchorNode;
            var i = n.anchorOffset,
              o = n.focusNode;
            n = n.focusOffset;
            try {
              r.nodeType, o.nodeType;
            } catch {
              r = null;
              break e;
            }
            var a = 0,
              s = -1,
              u = -1,
              l = 0,
              c = 0,
              d = e,
              f = null;
            t: for (;;) {
              for (
                var v;
                d !== r || (i !== 0 && d.nodeType !== 3) || (s = a + i),
                  d !== o || (n !== 0 && d.nodeType !== 3) || (u = a + n),
                  d.nodeType === 3 && (a += d.nodeValue.length),
                  (v = d.firstChild) !== null;

              )
                (f = d), (d = v);
              for (;;) {
                if (d === e) break t;
                if (
                  (f === r && ++l === i && (s = a),
                  f === o && ++c === n && (u = a),
                  (v = d.nextSibling) !== null)
                )
                  break;
                (d = f), (f = d.parentNode);
              }
              d = v;
            }
            r = s === -1 || u === -1 ? null : { start: s, end: u };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      Kc = { focusedElem: e, selectionRange: r }, Js = !1, A = t;
      A !== null;

    )
      if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (A = e);
      else
        for (; A !== null; ) {
          t = A;
          try {
            var y = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (y !== null) {
                    var g = y.memoizedProps,
                      _ = y.memoizedState,
                      h = t.stateNode,
                      p = h.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? g : Ot(t.type, g),
                        _
                      );
                    h.__reactInternalSnapshotBeforeUpdate = p;
                  }
                  break;
                case 3:
                  var m = t.stateNode.containerInfo;
                  m.nodeType === 1
                    ? (m.textContent = '')
                    : m.nodeType === 9 &&
                      m.documentElement &&
                      m.removeChild(m.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(T(163));
              }
          } catch (w) {
            pe(t, t.return, w);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (A = e);
            break;
          }
          A = t.return;
        }
    return (y = Zp), (Zp = !1), y;
  }
  function Fo(e, t, r) {
    var n = t.updateQueue;
    if (((n = n !== null ? n.lastEffect : null), n !== null)) {
      var i = (n = n.next);
      do {
        if ((i.tag & e) === e) {
          var o = i.destroy;
          (i.destroy = void 0), o !== void 0 && df(t, r, o);
        }
        i = i.next;
      } while (i !== n);
    }
  }
  function $u(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var r = (t = t.next);
      do {
        if ((r.tag & e) === e) {
          var n = r.create;
          r.destroy = n();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function hf(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == 'function' ? t(e) : (t.current = e);
    }
  }
  function Q0(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Q0(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Qt],
          delete t[ra],
          delete t[Xc],
          delete t[Jb],
          delete t[Xb])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function q0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ev(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || q0(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function pf(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6)
      (e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
              ? ((t = r.parentNode), t.insertBefore(e, r))
              : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = eu));
    else if (n !== 4 && ((e = e.child), e !== null))
      for (pf(e, t, r), e = e.sibling; e !== null; )
        pf(e, t, r), (e = e.sibling);
  }
  function vf(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6)
      (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (n !== 4 && ((e = e.child), e !== null))
      for (vf(e, t, r), e = e.sibling; e !== null; )
        vf(e, t, r), (e = e.sibling);
  }
  var De = null,
    kt = !1;
  function Nr(e, t, r) {
    for (r = r.child; r !== null; ) W0(e, t, r), (r = r.sibling);
  }
  function W0(e, t, r) {
    if (Ht && typeof Ht.onCommitFiberUnmount == 'function')
      try {
        Ht.onCommitFiberUnmount(Pu, r);
      } catch {}
    switch (r.tag) {
      case 5:
        Me || ui(r, t);
      case 6:
        var n = De,
          i = kt;
        (De = null),
          Nr(e, t, r),
          (De = n),
          (kt = i),
          De !== null &&
            (kt
              ? ((e = De),
                (r = r.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(r)
                  : e.removeChild(r))
              : De.removeChild(r.stateNode));
        break;
      case 18:
        De !== null &&
          (kt
            ? ((e = De),
              (r = r.stateNode),
              e.nodeType === 8
                ? Wl(e.parentNode, r)
                : e.nodeType === 1 && Wl(e, r),
              Jo(e))
            : Wl(De, r.stateNode));
        break;
      case 4:
        (n = De),
          (i = kt),
          (De = r.stateNode.containerInfo),
          (kt = !0),
          Nr(e, t, r),
          (De = n),
          (kt = i);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Me &&
          ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
        ) {
          i = n = n.next;
          do {
            var o = i,
              a = o.destroy;
            (o = o.tag),
              a !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && df(r, t, a),
              (i = i.next);
          } while (i !== n);
        }
        Nr(e, t, r);
        break;
      case 1:
        if (
          !Me &&
          (ui(r, t),
          (n = r.stateNode),
          typeof n.componentWillUnmount == 'function')
        )
          try {
            (n.props = r.memoizedProps),
              (n.state = r.memoizedState),
              n.componentWillUnmount();
          } catch (s) {
            pe(r, t, s);
          }
        Nr(e, t, r);
        break;
      case 21:
        Nr(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((Me = (n = Me) || r.memoizedState !== null), Nr(e, t, r), (Me = n))
          : Nr(e, t, r);
        break;
      default:
        Nr(e, t, r);
    }
  }
  function tv(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new pE()),
        t.forEach(function (n) {
          var i = xE.bind(null, e, n);
          r.has(n) || (r.add(n), n.then(i, i));
        });
    }
  }
  function St(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var n = 0; n < r.length; n++) {
        var i = r[n];
        try {
          var o = e,
            a = t,
            s = a;
          e: for (; s !== null; ) {
            switch (s.tag) {
              case 5:
                (De = s.stateNode), (kt = !1);
                break e;
              case 3:
                (De = s.stateNode.containerInfo), (kt = !0);
                break e;
              case 4:
                (De = s.stateNode.containerInfo), (kt = !0);
                break e;
            }
            s = s.return;
          }
          if (De === null) throw Error(T(160));
          W0(o, a, i), (De = null), (kt = !1);
          var u = i.alternate;
          u !== null && (u.return = null), (i.return = null);
        } catch (l) {
          pe(i, t, l);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) H0(t, e), (t = t.sibling);
  }
  function H0(e, t) {
    var r = e.alternate,
      n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((St(t, e), $t(e), n & 4)) {
          try {
            Fo(3, e, e.return), $u(3, e);
          } catch (g) {
            pe(e, e.return, g);
          }
          try {
            Fo(5, e, e.return);
          } catch (g) {
            pe(e, e.return, g);
          }
        }
        break;
      case 1:
        St(t, e), $t(e), n & 512 && r !== null && ui(r, r.return);
        break;
      case 5:
        if (
          (St(t, e),
          $t(e),
          n & 512 && r !== null && ui(r, r.return),
          e.flags & 32)
        ) {
          var i = e.stateNode;
          try {
            Ho(i, '');
          } catch (g) {
            pe(e, e.return, g);
          }
        }
        if (n & 4 && ((i = e.stateNode), i != null)) {
          var o = e.memoizedProps,
            a = r !== null ? r.memoizedProps : o,
            s = e.type,
            u = e.updateQueue;
          if (((e.updateQueue = null), u !== null))
            try {
              s === 'input' && o.type === 'radio' && o.name != null && py(i, o),
                jc(s, a);
              var l = jc(s, o);
              for (a = 0; a < u.length; a += 2) {
                var c = u[a],
                  d = u[a + 1];
                c === 'style'
                  ? _y(i, d)
                  : c === 'dangerouslySetInnerHTML'
                  ? yy(i, d)
                  : c === 'children'
                  ? Ho(i, d)
                  : gd(i, c, d, l);
              }
              switch (s) {
                case 'input':
                  Ac(i, o);
                  break;
                case 'textarea':
                  vy(i, o);
                  break;
                case 'select':
                  var f = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!o.multiple;
                  var v = o.value;
                  v != null
                    ? gi(i, !!o.multiple, v, !1)
                    : f !== !!o.multiple &&
                      (o.defaultValue != null
                        ? gi(i, !!o.multiple, o.defaultValue, !0)
                        : gi(i, !!o.multiple, o.multiple ? [] : '', !1));
              }
              i[ra] = o;
            } catch (g) {
              pe(e, e.return, g);
            }
        }
        break;
      case 6:
        if ((St(t, e), $t(e), n & 4)) {
          if (e.stateNode === null) throw Error(T(162));
          (i = e.stateNode), (o = e.memoizedProps);
          try {
            i.nodeValue = o;
          } catch (g) {
            pe(e, e.return, g);
          }
        }
        break;
      case 3:
        if (
          (St(t, e), $t(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            Jo(t.containerInfo);
          } catch (g) {
            pe(e, e.return, g);
          }
        break;
      case 4:
        St(t, e), $t(e);
        break;
      case 13:
        St(t, e),
          $t(e),
          (i = e.child),
          i.flags & 8192 &&
            ((o = i.memoizedState !== null),
            (i.stateNode.isHidden = o),
            !o ||
              (i.alternate !== null && i.alternate.memoizedState !== null) ||
              (Jd = ye())),
          n & 4 && tv(e);
        break;
      case 22:
        if (
          ((c = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((Me = (l = Me) || c), St(t, e), (Me = l)) : St(t, e),
          $t(e),
          n & 8192)
        ) {
          if (
            ((l = e.memoizedState !== null),
            (e.stateNode.isHidden = l) && !c && (e.mode & 1) !== 0)
          )
            for (A = e, c = e.child; c !== null; ) {
              for (d = A = c; A !== null; ) {
                switch (((f = A), (v = f.child), f.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Fo(4, f, f.return);
                    break;
                  case 1:
                    ui(f, f.return);
                    var y = f.stateNode;
                    if (typeof y.componentWillUnmount == 'function') {
                      (n = f), (r = f.return);
                      try {
                        (t = n),
                          (y.props = t.memoizedProps),
                          (y.state = t.memoizedState),
                          y.componentWillUnmount();
                      } catch (g) {
                        pe(n, r, g);
                      }
                    }
                    break;
                  case 5:
                    ui(f, f.return);
                    break;
                  case 22:
                    if (f.memoizedState !== null) {
                      nv(d);
                      continue;
                    }
                }
                v !== null ? ((v.return = f), (A = v)) : nv(d);
              }
              c = c.sibling;
            }
          e: for (c = null, d = e; ; ) {
            if (d.tag === 5) {
              if (c === null) {
                c = d;
                try {
                  (i = d.stateNode),
                    l
                      ? ((o = i.style),
                        typeof o.setProperty == 'function'
                          ? o.setProperty('display', 'none', 'important')
                          : (o.display = 'none'))
                      : ((s = d.stateNode),
                        (u = d.memoizedProps.style),
                        (a =
                          u != null && u.hasOwnProperty('display')
                            ? u.display
                            : null),
                        (s.style.display = gy('display', a)));
                } catch (g) {
                  pe(e, e.return, g);
                }
              }
            } else if (d.tag === 6) {
              if (c === null)
                try {
                  d.stateNode.nodeValue = l ? '' : d.memoizedProps;
                } catch (g) {
                  pe(e, e.return, g);
                }
            } else if (
              ((d.tag !== 22 && d.tag !== 23) ||
                d.memoizedState === null ||
                d === e) &&
              d.child !== null
            ) {
              (d.child.return = d), (d = d.child);
              continue;
            }
            if (d === e) break e;
            for (; d.sibling === null; ) {
              if (d.return === null || d.return === e) break e;
              c === d && (c = null), (d = d.return);
            }
            c === d && (c = null),
              (d.sibling.return = d.return),
              (d = d.sibling);
          }
        }
        break;
      case 19:
        St(t, e), $t(e), n & 4 && tv(e);
        break;
      case 21:
        break;
      default:
        St(t, e), $t(e);
    }
  }
  function $t(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (q0(r)) {
              var n = r;
              break e;
            }
            r = r.return;
          }
          throw Error(T(160));
        }
        switch (n.tag) {
          case 5:
            var i = n.stateNode;
            n.flags & 32 && (Ho(i, ''), (n.flags &= -33));
            var o = ev(e);
            vf(e, o, i);
            break;
          case 3:
          case 4:
            var a = n.stateNode.containerInfo,
              s = ev(e);
            pf(e, s, a);
            break;
          default:
            throw Error(T(161));
        }
      } catch (u) {
        pe(e, e.return, u);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function mE(e, t, r) {
    (A = e), G0(e);
  }
  function G0(e, t, r) {
    for (var n = (e.mode & 1) !== 0; A !== null; ) {
      var i = A,
        o = i.child;
      if (i.tag === 22 && n) {
        var a = i.memoizedState !== null || rs;
        if (!a) {
          var s = i.alternate,
            u = (s !== null && s.memoizedState !== null) || Me;
          s = rs;
          var l = Me;
          if (((rs = a), (Me = u) && !l))
            for (A = i; A !== null; )
              (a = A),
                (u = a.child),
                a.tag === 22 && a.memoizedState !== null
                  ? iv(i)
                  : u !== null
                  ? ((u.return = a), (A = u))
                  : iv(i);
          for (; o !== null; ) (A = o), G0(o), (o = o.sibling);
          (A = i), (rs = s), (Me = l);
        }
        rv(e);
      } else
        (i.subtreeFlags & 8772) !== 0 && o !== null
          ? ((o.return = i), (A = o))
          : rv(e);
    }
  }
  function rv(e) {
    for (; A !== null; ) {
      var t = A;
      if ((t.flags & 8772) !== 0) {
        var r = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Me || $u(5, t);
                break;
              case 1:
                var n = t.stateNode;
                if (t.flags & 4 && !Me)
                  if (r === null) n.componentDidMount();
                  else {
                    var i =
                      t.elementType === t.type
                        ? r.memoizedProps
                        : Ot(t.type, r.memoizedProps);
                    n.componentDidUpdate(
                      i,
                      r.memoizedState,
                      n.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var o = t.updateQueue;
                o !== null && Vp(t, o, n);
                break;
              case 3:
                var a = t.updateQueue;
                if (a !== null) {
                  if (((r = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode;
                        break;
                      case 1:
                        r = t.child.stateNode;
                    }
                  Vp(t, a, r);
                }
                break;
              case 5:
                var s = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = s;
                  var u = t.memoizedProps;
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      u.autoFocus && r.focus();
                      break;
                    case 'img':
                      u.src && (r.src = u.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var l = t.alternate;
                  if (l !== null) {
                    var c = l.memoizedState;
                    if (c !== null) {
                      var d = c.dehydrated;
                      d !== null && Jo(d);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(T(163));
            }
          Me || (t.flags & 512 && hf(t));
        } catch (f) {
          pe(t, t.return, f);
        }
      }
      if (t === e) {
        A = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        (r.return = t.return), (A = r);
        break;
      }
      A = t.return;
    }
  }
  function nv(e) {
    for (; A !== null; ) {
      var t = A;
      if (t === e) {
        A = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        (r.return = t.return), (A = r);
        break;
      }
      A = t.return;
    }
  }
  function iv(e) {
    for (; A !== null; ) {
      var t = A;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              $u(4, t);
            } catch (u) {
              pe(t, r, u);
            }
            break;
          case 1:
            var n = t.stateNode;
            if (typeof n.componentDidMount == 'function') {
              var i = t.return;
              try {
                n.componentDidMount();
              } catch (u) {
                pe(t, i, u);
              }
            }
            var o = t.return;
            try {
              hf(t);
            } catch (u) {
              pe(t, o, u);
            }
            break;
          case 5:
            var a = t.return;
            try {
              hf(t);
            } catch (u) {
              pe(t, a, u);
            }
        }
      } catch (u) {
        pe(t, t.return, u);
      }
      if (t === e) {
        A = null;
        break;
      }
      var s = t.sibling;
      if (s !== null) {
        (s.return = t.return), (A = s);
        break;
      }
      A = t.return;
    }
  }
  var yE = Math.ceil,
    fu = kr.ReactCurrentDispatcher,
    Kd = kr.ReactCurrentOwner,
    gt = kr.ReactCurrentBatchConfig,
    q = 0,
    Ce = null,
    be = null,
    Pe = 0,
    Ze = 0,
    li = an(0),
    Se = 0,
    ua = null,
    Tn = 0,
    zu = 0,
    Yd = 0,
    Lo = null,
    He = null,
    Jd = 0,
    Fi = 1 / 0,
    or = null,
    du = !1,
    mf = null,
    Gr = null,
    ns = !1,
    $r = null,
    hu = 0,
    Mo = 0,
    yf = null,
    xs = -1,
    Os = 0;
  function Be() {
    return (q & 6) !== 0 ? ye() : xs !== -1 ? xs : (xs = ye());
  }
  function Kr(e) {
    return (e.mode & 1) === 0
      ? 1
      : (q & 2) !== 0 && Pe !== 0
      ? Pe & -Pe
      : eE.transition !== null
      ? (Os === 0 && (Os = Ry()), Os)
      : ((e = X),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : jy(e.type))),
        e);
  }
  function Dt(e, t, r, n) {
    if (50 < Mo) throw ((Mo = 0), (yf = null), Error(T(185)));
    Sa(e, r, n),
      ((q & 2) === 0 || e !== Ce) &&
        (e === Ce && ((q & 2) === 0 && (zu |= r), Se === 4 && Mr(e, Pe)),
        Je(e, n),
        r === 1 &&
          q === 0 &&
          (t.mode & 1) === 0 &&
          ((Fi = ye() + 500), Mu && sn()));
  }
  function Je(e, t) {
    var r = e.callbackNode;
    eb(e, t);
    var n = Ys(e, e === Ce ? Pe : 0);
    if (n === 0)
      r !== null && hp(r), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = n & -n), e.callbackPriority !== t)) {
      if ((r != null && hp(r), t === 1))
        e.tag === 0 ? Zb(ov.bind(null, e)) : n0(ov.bind(null, e)),
          Kb(function () {
            (q & 6) === 0 && sn();
          }),
          (r = null);
      else {
        switch (Py(n)) {
          case 1:
            r = Sd;
            break;
          case 4:
            r = Ny;
            break;
          case 16:
            r = Ks;
            break;
          case 536870912:
            r = Dy;
            break;
          default:
            r = Ks;
        }
        r = rg(r, K0.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = r);
    }
  }
  function K0(e, t) {
    if (((xs = -1), (Os = 0), (q & 6) !== 0)) throw Error(T(327));
    var r = e.callbackNode;
    if (Si() && e.callbackNode !== r) return null;
    var n = Ys(e, e === Ce ? Pe : 0);
    if (n === 0) return null;
    if ((n & 30) !== 0 || (n & e.expiredLanes) !== 0 || t) t = pu(e, n);
    else {
      t = n;
      var i = q;
      q |= 2;
      var o = J0();
      (Ce !== e || Pe !== t) && ((or = null), (Fi = ye() + 500), En(e, t));
      do
        try {
          wE();
          break;
        } catch (s) {
          Y0(e, s);
        }
      while (1);
      Ld(),
        (fu.current = o),
        (q = i),
        be !== null ? (t = 0) : ((Ce = null), (Pe = 0), (t = Se));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((i = Uc(e)), i !== 0 && ((n = i), (t = gf(e, i)))),
        t === 1)
      )
        throw ((r = ua), En(e, 0), Mr(e, n), Je(e, ye()), r);
      if (t === 6) Mr(e, n);
      else {
        if (
          ((i = e.current.alternate),
          (n & 30) === 0 &&
            !gE(i) &&
            ((t = pu(e, n)),
            t === 2 && ((o = Uc(e)), o !== 0 && ((n = o), (t = gf(e, o)))),
            t === 1))
        )
          throw ((r = ua), En(e, 0), Mr(e, n), Je(e, ye()), r);
        switch (((e.finishedWork = i), (e.finishedLanes = n), t)) {
          case 0:
          case 1:
            throw Error(T(345));
          case 2:
            hn(e, He, or);
            break;
          case 3:
            if (
              (Mr(e, n),
              (n & 130023424) === n && ((t = Jd + 500 - ye()), 10 < t))
            ) {
              if (Ys(e, 0) !== 0) break;
              if (((i = e.suspendedLanes), (i & n) !== n)) {
                Be(), (e.pingedLanes |= e.suspendedLanes & i);
                break;
              }
              e.timeoutHandle = Jc(hn.bind(null, e, He, or), t);
              break;
            }
            hn(e, He, or);
            break;
          case 4:
            if ((Mr(e, n), (n & 4194240) === n)) break;
            for (t = e.eventTimes, i = -1; 0 < n; ) {
              var a = 31 - Nt(n);
              (o = 1 << a), (a = t[a]), a > i && (i = a), (n &= ~o);
            }
            if (
              ((n = i),
              (n = ye() - n),
              (n =
                (120 > n
                  ? 120
                  : 480 > n
                  ? 480
                  : 1080 > n
                  ? 1080
                  : 1920 > n
                  ? 1920
                  : 3e3 > n
                  ? 3e3
                  : 4320 > n
                  ? 4320
                  : 1960 * yE(n / 1960)) - n),
              10 < n)
            ) {
              e.timeoutHandle = Jc(hn.bind(null, e, He, or), n);
              break;
            }
            hn(e, He, or);
            break;
          case 5:
            hn(e, He, or);
            break;
          default:
            throw Error(T(329));
        }
      }
    }
    return Je(e, ye()), e.callbackNode === r ? K0.bind(null, e) : null;
  }
  function gf(e, t) {
    var r = Lo;
    return (
      e.current.memoizedState.isDehydrated && (En(e, t).flags |= 256),
      (e = pu(e, t)),
      e !== 2 && ((t = He), (He = r), t !== null && _f(t)),
      e
    );
  }
  function _f(e) {
    He === null ? (He = e) : He.push.apply(He, e);
  }
  function gE(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var n = 0; n < r.length; n++) {
            var i = r[n],
              o = i.getSnapshot;
            i = i.value;
            try {
              if (!It(o(), i)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
        (r.return = t), (t = r);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Mr(e, t) {
    for (
      t &= ~Yd,
        t &= ~zu,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var r = 31 - Nt(t),
        n = 1 << r;
      (e[r] = -1), (t &= ~n);
    }
  }
  function ov(e) {
    if ((q & 6) !== 0) throw Error(T(327));
    Si();
    var t = Ys(e, 0);
    if ((t & 1) === 0) return Je(e, ye()), null;
    var r = pu(e, t);
    if (e.tag !== 0 && r === 2) {
      var n = Uc(e);
      n !== 0 && ((t = n), (r = gf(e, n)));
    }
    if (r === 1) throw ((r = ua), En(e, 0), Mr(e, t), Je(e, ye()), r);
    if (r === 6) throw Error(T(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      hn(e, He, or),
      Je(e, ye()),
      null
    );
  }
  function Xd(e, t) {
    var r = q;
    q |= 1;
    try {
      return e(t);
    } finally {
      (q = r), q === 0 && ((Fi = ye() + 500), Mu && sn());
    }
  }
  function Nn(e) {
    $r !== null && $r.tag === 0 && (q & 6) === 0 && Si();
    var t = q;
    q |= 1;
    var r = gt.transition,
      n = X;
    try {
      if (((gt.transition = null), (X = 1), e)) return e();
    } finally {
      (X = n), (gt.transition = r), (q = t), (q & 6) === 0 && sn();
    }
  }
  function Zd() {
    (Ze = li.current), ae(li);
  }
  function En(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), Gb(r)), be !== null))
      for (r = be.return; r !== null; ) {
        var n = r;
        switch ((Ad(n), n.tag)) {
          case 1:
            (n = n.type.childContextTypes), n != null && tu();
            break;
          case 3:
            Ai(), ae(Ke), ae(Ve), Bd();
            break;
          case 5:
            zd(n);
            break;
          case 4:
            Ai();
            break;
          case 13:
            ae(ce);
            break;
          case 19:
            ae(ce);
            break;
          case 10:
            Md(n.type._context);
            break;
          case 22:
          case 23:
            Zd();
        }
        r = r.return;
      }
    if (
      ((Ce = e),
      (be = e = Yr(e.current, null)),
      (Pe = Ze = t),
      (Se = 0),
      (ua = null),
      (Yd = zu = Tn = 0),
      (He = Lo = null),
      yn !== null)
    ) {
      for (t = 0; t < yn.length; t++)
        if (((r = yn[t]), (n = r.interleaved), n !== null)) {
          r.interleaved = null;
          var i = n.next,
            o = r.pending;
          if (o !== null) {
            var a = o.next;
            (o.next = i), (n.next = a);
          }
          r.pending = n;
        }
      yn = null;
    }
    return e;
  }
  function Y0(e, t) {
    do {
      var r = be;
      try {
        if ((Ld(), (bs.current = cu), lu)) {
          for (var n = fe.memoizedState; n !== null; ) {
            var i = n.queue;
            i !== null && (i.pending = null), (n = n.next);
          }
          lu = !1;
        }
        if (
          ((Cn = 0),
          (Oe = Ee = fe = null),
          (Io = !1),
          (oa = 0),
          (Kd.current = null),
          r === null || r.return === null)
        ) {
          (Se = 1), (ua = t), (be = null);
          break;
        }
        e: {
          var o = e,
            a = r.return,
            s = r,
            u = t;
          if (
            ((t = Pe),
            (s.flags |= 32768),
            u !== null && typeof u == 'object' && typeof u.then == 'function')
          ) {
            var l = u,
              c = s,
              d = c.tag;
            if ((c.mode & 1) === 0 && (d === 0 || d === 11 || d === 15)) {
              var f = c.alternate;
              f
                ? ((c.updateQueue = f.updateQueue),
                  (c.memoizedState = f.memoizedState),
                  (c.lanes = f.lanes))
                : ((c.updateQueue = null), (c.memoizedState = null));
            }
            var v = Wp(a);
            if (v !== null) {
              (v.flags &= -257),
                Hp(v, a, s, o, t),
                v.mode & 1 && qp(o, l, t),
                (t = v),
                (u = l);
              var y = t.updateQueue;
              if (y === null) {
                var g = new Set();
                g.add(u), (t.updateQueue = g);
              } else y.add(u);
              break e;
            } else {
              if ((t & 1) === 0) {
                qp(o, l, t), eh();
                break e;
              }
              u = Error(T(426));
            }
          } else if (ue && s.mode & 1) {
            var _ = Wp(a);
            if (_ !== null) {
              (_.flags & 65536) === 0 && (_.flags |= 256),
                Hp(_, a, s, o, t),
                Id(Ii(u, s));
              break e;
            }
          }
          (o = u = Ii(u, s)),
            Se !== 4 && (Se = 2),
            Lo === null ? (Lo = [o]) : Lo.push(o),
            (o = a);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var h = A0(o, u, t);
                jp(o, h);
                break e;
              case 1:
                s = u;
                var p = o.type,
                  m = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof p.getDerivedStateFromError == 'function' ||
                    (m !== null &&
                      typeof m.componentDidCatch == 'function' &&
                      (Gr === null || !Gr.has(m))))
                ) {
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var w = I0(o, s, t);
                  jp(o, w);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Z0(r);
      } catch (S) {
        (t = S), be === r && r !== null && (be = r = r.return);
        continue;
      }
      break;
    } while (1);
  }
  function J0() {
    var e = fu.current;
    return (fu.current = cu), e === null ? cu : e;
  }
  function eh() {
    (Se === 0 || Se === 3 || Se === 2) && (Se = 4),
      Ce === null ||
        ((Tn & 268435455) === 0 && (zu & 268435455) === 0) ||
        Mr(Ce, Pe);
  }
  function pu(e, t) {
    var r = q;
    q |= 2;
    var n = J0();
    (Ce !== e || Pe !== t) && ((or = null), En(e, t));
    do
      try {
        _E();
        break;
      } catch (i) {
        Y0(e, i);
      }
    while (1);
    if ((Ld(), (q = r), (fu.current = n), be !== null)) throw Error(T(261));
    return (Ce = null), (Pe = 0), Se;
  }
  function _E() {
    for (; be !== null; ) X0(be);
  }
  function wE() {
    for (; be !== null && !qw(); ) X0(be);
  }
  function X0(e) {
    var t = tg(e.alternate, e, Ze);
    (e.memoizedProps = e.pendingProps),
      t === null ? Z0(e) : (be = t),
      (Kd.current = null);
  }
  function Z0(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = dE(r, t, Ze)), r !== null)) {
          be = r;
          return;
        }
      } else {
        if (((r = hE(r, t)), r !== null)) {
          (r.flags &= 32767), (be = r);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Se = 6), (be = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        be = t;
        return;
      }
      be = t = e;
    } while (t !== null);
    Se === 0 && (Se = 5);
  }
  function hn(e, t, r) {
    var n = X,
      i = gt.transition;
    try {
      (gt.transition = null), (X = 1), bE(e, t, r, n);
    } finally {
      (gt.transition = i), (X = n);
    }
    return null;
  }
  function bE(e, t, r, n) {
    do Si();
    while ($r !== null);
    if ((q & 6) !== 0) throw Error(T(327));
    r = e.finishedWork;
    var i = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
      throw Error(T(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = r.lanes | r.childLanes;
    if (
      (tb(e, o),
      e === Ce && ((be = Ce = null), (Pe = 0)),
      ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        ns ||
        ((ns = !0),
        rg(Ks, function () {
          return Si(), null;
        })),
      (o = (r.flags & 15990) !== 0),
      (r.subtreeFlags & 15990) !== 0 || o)
    ) {
      (o = gt.transition), (gt.transition = null);
      var a = X;
      X = 1;
      var s = q;
      (q |= 4),
        (Kd.current = null),
        vE(e, r),
        H0(r, e),
        zb(Kc),
        (Js = !!Gc),
        (Kc = Gc = null),
        (e.current = r),
        mE(r),
        Ww(),
        (q = s),
        (X = a),
        (gt.transition = o);
    } else e.current = r;
    if (
      (ns && ((ns = !1), ($r = e), (hu = i)),
      (o = e.pendingLanes),
      o === 0 && (Gr = null),
      Kw(r.stateNode),
      Je(e, ye()),
      t !== null)
    )
      for (n = e.onRecoverableError, r = 0; r < t.length; r++)
        (i = t[r]), n(i.value, { componentStack: i.stack, digest: i.digest });
    if (du) throw ((du = !1), (e = mf), (mf = null), e);
    return (
      (hu & 1) !== 0 && e.tag !== 0 && Si(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === yf ? Mo++ : ((Mo = 0), (yf = e))) : (Mo = 0),
      sn(),
      null
    );
  }
  function Si() {
    if ($r !== null) {
      var e = Py(hu),
        t = gt.transition,
        r = X;
      try {
        if (((gt.transition = null), (X = 16 > e ? 16 : e), $r === null))
          var n = !1;
        else {
          if (((e = $r), ($r = null), (hu = 0), (q & 6) !== 0))
            throw Error(T(331));
          var i = q;
          for (q |= 4, A = e.current; A !== null; ) {
            var o = A,
              a = o.child;
            if ((A.flags & 16) !== 0) {
              var s = o.deletions;
              if (s !== null) {
                for (var u = 0; u < s.length; u++) {
                  var l = s[u];
                  for (A = l; A !== null; ) {
                    var c = A;
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Fo(8, c, o);
                    }
                    var d = c.child;
                    if (d !== null) (d.return = c), (A = d);
                    else
                      for (; A !== null; ) {
                        c = A;
                        var f = c.sibling,
                          v = c.return;
                        if ((Q0(c), c === l)) {
                          A = null;
                          break;
                        }
                        if (f !== null) {
                          (f.return = v), (A = f);
                          break;
                        }
                        A = v;
                      }
                  }
                }
                var y = o.alternate;
                if (y !== null) {
                  var g = y.child;
                  if (g !== null) {
                    y.child = null;
                    do {
                      var _ = g.sibling;
                      (g.sibling = null), (g = _);
                    } while (g !== null);
                  }
                }
                A = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && a !== null)
              (a.return = o), (A = a);
            else
              e: for (; A !== null; ) {
                if (((o = A), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fo(9, o, o.return);
                  }
                var h = o.sibling;
                if (h !== null) {
                  (h.return = o.return), (A = h);
                  break e;
                }
                A = o.return;
              }
          }
          var p = e.current;
          for (A = p; A !== null; ) {
            a = A;
            var m = a.child;
            if ((a.subtreeFlags & 2064) !== 0 && m !== null)
              (m.return = a), (A = m);
            else
              e: for (a = p; A !== null; ) {
                if (((s = A), (s.flags & 2048) !== 0))
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        $u(9, s);
                    }
                  } catch (S) {
                    pe(s, s.return, S);
                  }
                if (s === a) {
                  A = null;
                  break e;
                }
                var w = s.sibling;
                if (w !== null) {
                  (w.return = s.return), (A = w);
                  break e;
                }
                A = s.return;
              }
          }
          if (
            ((q = i), sn(), Ht && typeof Ht.onPostCommitFiberRoot == 'function')
          )
            try {
              Ht.onPostCommitFiberRoot(Pu, e);
            } catch {}
          n = !0;
        }
        return n;
      } finally {
        (X = r), (gt.transition = t);
      }
    }
    return !1;
  }
  function av(e, t, r) {
    (t = Ii(r, t)),
      (t = A0(e, t, 1)),
      (e = Hr(e, t, 1)),
      (t = Be()),
      e !== null && (Sa(e, 1, t), Je(e, t));
  }
  function pe(e, t, r) {
    if (e.tag === 3) av(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          av(t, e, r);
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof n.componentDidCatch == 'function' &&
              (Gr === null || !Gr.has(n)))
          ) {
            (e = Ii(r, e)),
              (e = I0(t, e, 1)),
              (t = Hr(t, e, 1)),
              (e = Be()),
              t !== null && (Sa(t, 1, e), Je(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function EE(e, t, r) {
    var n = e.pingCache;
    n !== null && n.delete(t),
      (t = Be()),
      (e.pingedLanes |= e.suspendedLanes & r),
      Ce === e &&
        (Pe & r) === r &&
        (Se === 4 || (Se === 3 && (Pe & 130023424) === Pe && 500 > ye() - Jd)
          ? En(e, 0)
          : (Yd |= r)),
      Je(e, t);
  }
  function eg(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Ha), (Ha <<= 1), (Ha & 130023424) === 0 && (Ha = 4194304)));
    var r = Be();
    (e = _r(e, t)), e !== null && (Sa(e, t, r), Je(e, r));
  }
  function SE(e) {
    var t = e.memoizedState,
      r = 0;
    t !== null && (r = t.retryLane), eg(e, r);
  }
  function xE(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var n = e.stateNode,
          i = e.memoizedState;
        i !== null && (r = i.retryLane);
        break;
      case 19:
        n = e.stateNode;
        break;
      default:
        throw Error(T(314));
    }
    n !== null && n.delete(t), eg(e, r);
  }
  var tg;
  tg = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ke.current) Ge = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0)
          return (Ge = !1), fE(e, t, r);
        Ge = (e.flags & 131072) !== 0;
      }
    else (Ge = !1), ue && (t.flags & 1048576) !== 0 && i0(t, iu, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var n = t.type;
        Ss(e, t), (e = t.pendingProps);
        var i = Di(t, Ve.current);
        Ei(t, r), (i = Qd(null, t, n, e, i, r));
        var o = qd();
        return (
          (t.flags |= 1),
          typeof i == 'object' &&
          i !== null &&
          typeof i.render == 'function' &&
          i.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ye(n) ? ((o = !0), ru(t)) : (o = !1),
              (t.memoizedState =
                i.state !== null && i.state !== void 0 ? i.state : null),
              Vd(t),
              (i.updater = ju),
              (t.stateNode = i),
              (i._reactInternals = t),
              of(t, n, e, r),
              (t = uf(null, t, n, !0, o, r)))
            : ((t.tag = 0), ue && o && Pd(t), $e(null, t, i, r), (t = t.child)),
          t
        );
      case 16:
        n = t.elementType;
        e: {
          switch (
            (Ss(e, t),
            (e = t.pendingProps),
            (i = n._init),
            (n = i(n._payload)),
            (t.type = n),
            (i = t.tag = kE(n)),
            (e = Ot(n, e)),
            i)
          ) {
            case 0:
              t = sf(null, t, n, e, r);
              break e;
            case 1:
              t = Yp(null, t, n, e, r);
              break e;
            case 11:
              t = Gp(null, t, n, e, r);
              break e;
            case 14:
              t = Kp(null, t, n, Ot(n.type, e), r);
              break e;
          }
          throw Error(T(306, n, ''));
        }
        return t;
      case 0:
        return (
          (n = t.type),
          (i = t.pendingProps),
          (i = t.elementType === n ? i : Ot(n, i)),
          sf(e, t, n, i, r)
        );
      case 1:
        return (
          (n = t.type),
          (i = t.pendingProps),
          (i = t.elementType === n ? i : Ot(n, i)),
          Yp(e, t, n, i, r)
        );
      case 3:
        e: {
          if ((j0(t), e === null)) throw Error(T(387));
          (n = t.pendingProps),
            (o = t.memoizedState),
            (i = o.element),
            u0(e, t),
            su(t, n, null, r);
          var a = t.memoizedState;
          if (((n = a.element), o.isDehydrated))
            if (
              ((o = {
                element: n,
                isDehydrated: !1,
                cache: a.cache,
                pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                transitions: a.transitions
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              (i = Ii(Error(T(423)), t)), (t = Jp(e, t, n, r, i));
              break e;
            } else if (n !== i) {
              (i = Ii(Error(T(424)), t)), (t = Jp(e, t, n, r, i));
              break e;
            } else
              for (
                rt = Wr(t.stateNode.containerInfo.firstChild),
                  nt = t,
                  ue = !0,
                  Ct = null,
                  r = d0(t, null, n, r),
                  t.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
          else {
            if ((Ri(), n === i)) {
              t = wr(e, t, r);
              break e;
            }
            $e(e, t, n, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          h0(t),
          e === null && tf(t),
          (n = t.type),
          (i = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (a = i.children),
          Yc(n, i) ? (a = null) : o !== null && Yc(n, o) && (t.flags |= 32),
          M0(e, t),
          $e(e, t, a, r),
          t.child
        );
      case 6:
        return e === null && tf(t), null;
      case 13:
        return V0(e, t, r);
      case 4:
        return (
          $d(t, t.stateNode.containerInfo),
          (n = t.pendingProps),
          e === null ? (t.child = Pi(t, null, n, r)) : $e(e, t, n, r),
          t.child
        );
      case 11:
        return (
          (n = t.type),
          (i = t.pendingProps),
          (i = t.elementType === n ? i : Ot(n, i)),
          Gp(e, t, n, i, r)
        );
      case 7:
        return $e(e, t, t.pendingProps, r), t.child;
      case 8:
        return $e(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return $e(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (
            ((n = t.type._context),
            (i = t.pendingProps),
            (o = t.memoizedProps),
            (a = i.value),
            te(ou, n._currentValue),
            (n._currentValue = a),
            o !== null)
          )
            if (It(o.value, a)) {
              if (o.children === i.children && !Ke.current) {
                t = wr(e, t, r);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var s = o.dependencies;
                if (s !== null) {
                  a = o.child;
                  for (var u = s.firstContext; u !== null; ) {
                    if (u.context === n) {
                      if (o.tag === 1) {
                        (u = dr(-1, r & -r)), (u.tag = 2);
                        var l = o.updateQueue;
                        if (l !== null) {
                          l = l.shared;
                          var c = l.pending;
                          c === null
                            ? (u.next = u)
                            : ((u.next = c.next), (c.next = u)),
                            (l.pending = u);
                        }
                      }
                      (o.lanes |= r),
                        (u = o.alternate),
                        u !== null && (u.lanes |= r),
                        rf(o.return, r, t),
                        (s.lanes |= r);
                      break;
                    }
                    u = u.next;
                  }
                } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((a = o.return), a === null)) throw Error(T(341));
                  (a.lanes |= r),
                    (s = a.alternate),
                    s !== null && (s.lanes |= r),
                    rf(a, r, t),
                    (a = o.sibling);
                } else a = o.child;
                if (a !== null) a.return = o;
                else
                  for (a = o; a !== null; ) {
                    if (a === t) {
                      a = null;
                      break;
                    }
                    if (((o = a.sibling), o !== null)) {
                      (o.return = a.return), (a = o);
                      break;
                    }
                    a = a.return;
                  }
                o = a;
              }
          $e(e, t, i.children, r), (t = t.child);
        }
        return t;
      case 9:
        return (
          (i = t.type),
          (n = t.pendingProps.children),
          Ei(t, r),
          (i = _t(i)),
          (n = n(i)),
          (t.flags |= 1),
          $e(e, t, n, r),
          t.child
        );
      case 14:
        return (
          (n = t.type),
          (i = Ot(n, t.pendingProps)),
          (i = Ot(n.type, i)),
          Kp(e, t, n, i, r)
        );
      case 15:
        return F0(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (n = t.type),
          (i = t.pendingProps),
          (i = t.elementType === n ? i : Ot(n, i)),
          Ss(e, t),
          (t.tag = 1),
          Ye(n) ? ((e = !0), ru(t)) : (e = !1),
          Ei(t, r),
          c0(t, n, i),
          of(t, n, i, r),
          uf(null, t, n, !0, e, r)
        );
      case 19:
        return $0(e, t, r);
      case 22:
        return L0(e, t, r);
    }
    throw Error(T(156, t.tag));
  };
  function rg(e, t) {
    return Ty(e, t);
  }
  function OE(e, t, r, n) {
    (this.tag = e),
      (this.key = r),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = n),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function vt(e, t, r, n) {
    return new OE(e, t, r, n);
  }
  function th(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function kE(e) {
    if (typeof e == 'function') return th(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === wd)) return 11;
      if (e === bd) return 14;
    }
    return 2;
  }
  function Yr(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = vt(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 14680064),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      r
    );
  }
  function ks(e, t, r, n, i, o) {
    var a = 2;
    if (((n = e), typeof e == 'function')) th(e) && (a = 1);
    else if (typeof e == 'string') a = 5;
    else
      e: switch (e) {
        case Zn:
          return Sn(r.children, i, o, t);
        case _d:
          (a = 8), (i |= 8);
          break;
        case Tc:
          return (
            (e = vt(12, r, t, i | 2)), (e.elementType = Tc), (e.lanes = o), e
          );
        case Nc:
          return (e = vt(13, r, t, i)), (e.elementType = Nc), (e.lanes = o), e;
        case Dc:
          return (e = vt(19, r, t, i)), (e.elementType = Dc), (e.lanes = o), e;
        case fy:
          return Bu(r, i, o, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case ly:
                a = 10;
                break e;
              case cy:
                a = 9;
                break e;
              case wd:
                a = 11;
                break e;
              case bd:
                a = 14;
                break e;
              case Rr:
                (a = 16), (n = null);
                break e;
            }
          throw Error(T(130, e == null ? e : typeof e, ''));
      }
    return (
      (t = vt(a, r, t, i)), (t.elementType = e), (t.type = n), (t.lanes = o), t
    );
  }
  function Sn(e, t, r, n) {
    return (e = vt(7, e, n, t)), (e.lanes = r), e;
  }
  function Bu(e, t, r, n) {
    return (
      (e = vt(22, e, n, t)),
      (e.elementType = fy),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function ec(e, t, r) {
    return (e = vt(6, e, null, t)), (e.lanes = r), e;
  }
  function tc(e, t, r) {
    return (
      (t = vt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }),
      t
    );
  }
  function CE(e, t, r, n, i) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Fl(0)),
      (this.expirationTimes = Fl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Fl(0)),
      (this.identifierPrefix = n),
      (this.onRecoverableError = i),
      (this.mutableSourceEagerHydrationData = null);
  }
  function rh(e, t, r, n, i, o, a, s, u) {
    return (
      (e = new CE(e, t, r, s, u)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = vt(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: n,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
      }),
      Vd(o),
      e
    );
  }
  function TE(e, t, r) {
    var n =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Xn,
      key: n == null ? null : '' + n,
      children: e,
      containerInfo: t,
      implementation: r
    };
  }
  function ng(e) {
    if (!e) return Zr;
    e = e._reactInternals;
    e: {
      if (Vn(e) !== e || e.tag !== 1) throw Error(T(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ye(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(T(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (Ye(r)) return r0(e, r, t);
    }
    return t;
  }
  function ig(e, t, r, n, i, o, a, s, u) {
    return (
      (e = rh(r, n, !0, e, i, o, a, s, u)),
      (e.context = ng(null)),
      (r = e.current),
      (n = Be()),
      (i = Kr(r)),
      (o = dr(n, i)),
      (o.callback = t != null ? t : null),
      Hr(r, o, i),
      (e.current.lanes = i),
      Sa(e, i, n),
      Je(e, n),
      e
    );
  }
  function Uu(e, t, r, n) {
    var i = t.current,
      o = Be(),
      a = Kr(i);
    return (
      (r = ng(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = dr(o, a)),
      (t.payload = { element: e }),
      (n = n === void 0 ? null : n),
      n !== null && (t.callback = n),
      (e = Hr(i, t, a)),
      e !== null && (Dt(e, i, a, o), ws(e, i, a)),
      a
    );
  }
  function vu(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function sv(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function nh(e, t) {
    sv(e, t), (e = e.alternate) && sv(e, t);
  }
  function NE() {
    return null;
  }
  var og =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function ih(e) {
    this._internalRoot = e;
  }
  Qu.prototype.render = ih.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(T(409));
    Uu(e, t, null, null);
  };
  Qu.prototype.unmount = ih.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Nn(function () {
        Uu(null, e, null, null);
      }),
        (t[gr] = null);
    }
  };
  function Qu(e) {
    this._internalRoot = e;
  }
  Qu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Fy();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < Lr.length && t !== 0 && t < Lr[r].priority; r++);
      Lr.splice(r, 0, e), r === 0 && My(e);
    }
  };
  function oh(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function qu(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function uv() {}
  function DE(e, t, r, n, i) {
    if (i) {
      if (typeof n == 'function') {
        var o = n;
        n = function () {
          var l = vu(a);
          o.call(l);
        };
      }
      var a = ig(t, n, e, 0, null, !1, !1, '', uv);
      return (
        (e._reactRootContainer = a),
        (e[gr] = a.current),
        ea(e.nodeType === 8 ? e.parentNode : e),
        Nn(),
        a
      );
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof n == 'function') {
      var s = n;
      n = function () {
        var l = vu(u);
        s.call(l);
      };
    }
    var u = rh(e, 0, !1, null, null, !1, !1, '', uv);
    return (
      (e._reactRootContainer = u),
      (e[gr] = u.current),
      ea(e.nodeType === 8 ? e.parentNode : e),
      Nn(function () {
        Uu(t, u, r, n);
      }),
      u
    );
  }
  function Wu(e, t, r, n, i) {
    var o = r._reactRootContainer;
    if (o) {
      var a = o;
      if (typeof i == 'function') {
        var s = i;
        i = function () {
          var u = vu(a);
          s.call(u);
        };
      }
      Uu(t, a, e, i);
    } else a = DE(r, t, e, i, n);
    return vu(a);
  }
  Ay = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = So(t.pendingLanes);
          r !== 0 &&
            (xd(t, r | 1),
            Je(t, ye()),
            (q & 6) === 0 && ((Fi = ye() + 500), sn()));
        }
        break;
      case 13:
        Nn(function () {
          var n = _r(e, 1);
          if (n !== null) {
            var i = Be();
            Dt(n, e, 1, i);
          }
        }),
          nh(e, 1);
    }
  };
  Od = function (e) {
    if (e.tag === 13) {
      var t = _r(e, 134217728);
      if (t !== null) {
        var r = Be();
        Dt(t, e, 134217728, r);
      }
      nh(e, 134217728);
    }
  };
  Iy = function (e) {
    if (e.tag === 13) {
      var t = Kr(e),
        r = _r(e, t);
      if (r !== null) {
        var n = Be();
        Dt(r, e, t, n);
      }
      nh(e, t);
    }
  };
  Fy = function () {
    return X;
  };
  Ly = function (e, t) {
    var r = X;
    try {
      return (X = e), t();
    } finally {
      X = r;
    }
  };
  $c = function (e, t, r) {
    switch (t) {
      case 'input':
        if ((Ac(e, r), (t = r.name), r.type === 'radio' && t != null)) {
          for (r = e; r.parentNode; ) r = r.parentNode;
          for (
            r = r.querySelectorAll(
              'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
            ),
              t = 0;
            t < r.length;
            t++
          ) {
            var n = r[t];
            if (n !== e && n.form === e.form) {
              var i = Lu(n);
              if (!i) throw Error(T(90));
              hy(n), Ac(n, i);
            }
          }
        }
        break;
      case 'textarea':
        vy(e, r);
        break;
      case 'select':
        (t = r.value), t != null && gi(e, !!r.multiple, t, !1);
    }
  };
  Ey = Xd;
  Sy = Nn;
  var RE = { usingClientEntryPoint: !1, Events: [Oa, ni, Lu, wy, by, Xd] },
    ho = {
      findFiberByHostInstance: mn,
      bundleType: 0,
      version: '18.2.0',
      rendererPackageName: 'react-dom'
    },
    PE = {
      bundleType: ho.bundleType,
      version: ho.version,
      rendererPackageName: ho.rendererPackageName,
      rendererConfig: ho.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: kr.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = ky(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: ho.findFiberByHostInstance || NE,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.2.0-next-9e3b772b8-20220608'
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var is = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!is.isDisabled && is.supportsFiber)
      try {
        (Pu = is.inject(PE)), (Ht = is);
      } catch {}
  }
  at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = RE;
  at.createPortal = function (e, t) {
    var r =
      2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!oh(t)) throw Error(T(200));
    return TE(e, t, null, r);
  };
  at.createRoot = function (e, t) {
    if (!oh(e)) throw Error(T(299));
    var r = !1,
      n = '',
      i = og;
    return (
      t != null &&
        (t.unstable_strictMode === !0 && (r = !0),
        t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
      (t = rh(e, 1, !1, null, null, r, !1, n, i)),
      (e[gr] = t.current),
      ea(e.nodeType === 8 ? e.parentNode : e),
      new ih(t)
    );
  };
  at.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(T(188))
        : ((e = Object.keys(e).join(',')), Error(T(268, e)));
    return (e = ky(t)), (e = e === null ? null : e.stateNode), e;
  };
  at.flushSync = function (e) {
    return Nn(e);
  };
  at.hydrate = function (e, t, r) {
    if (!qu(t)) throw Error(T(200));
    return Wu(null, e, t, !0, r);
  };
  at.hydrateRoot = function (e, t, r) {
    if (!oh(e)) throw Error(T(405));
    var n = (r != null && r.hydratedSources) || null,
      i = !1,
      o = '',
      a = og;
    if (
      (r != null &&
        (r.unstable_strictMode === !0 && (i = !0),
        r.identifierPrefix !== void 0 && (o = r.identifierPrefix),
        r.onRecoverableError !== void 0 && (a = r.onRecoverableError)),
      (t = ig(t, null, e, 1, r != null ? r : null, i, !1, o, a)),
      (e[gr] = t.current),
      ea(e),
      n)
    )
      for (e = 0; e < n.length; e++)
        (r = n[e]),
          (i = r._getVersion),
          (i = i(r._source)),
          t.mutableSourceEagerHydrationData == null
            ? (t.mutableSourceEagerHydrationData = [r, i])
            : t.mutableSourceEagerHydrationData.push(r, i);
    return new Qu(t);
  };
  at.render = function (e, t, r) {
    if (!qu(t)) throw Error(T(200));
    return Wu(null, e, t, !1, r);
  };
  at.unmountComponentAtNode = function (e) {
    if (!qu(e)) throw Error(T(40));
    return e._reactRootContainer
      ? (Nn(function () {
          Wu(null, null, e, !1, function () {
            (e._reactRootContainer = null), (e[gr] = null);
          });
        }),
        !0)
      : !1;
  };
  at.unstable_batchedUpdates = Xd;
  at.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
    if (!qu(r)) throw Error(T(200));
    if (e == null || e._reactInternals === void 0) throw Error(T(38));
    return Wu(e, t, r, !1, n);
  };
  at.version = '18.2.0-next-9e3b772b8-20220608';
  (function (e) {
    function t() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
        } catch (r) {
          console.error(r);
        }
    }
    t(), (e.exports = at);
  })(vd);
  var ag,
    lv = vd.exports;
  (ag = lv.createRoot), lv.hydrateRoot;
  const AE = e =>
      b.exports.createElement(
        'svg',
        {
          width: '1em',
          height: '1em',
          viewBox: '0 0 134 20',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          ...e
        },
        b.exports.createElement('path', {
          d: 'M72.0971 18.9649H70.3746L76.9217 0.966951H78.6793L85.2264 18.9649H83.504L77.862 3.10245H77.739L72.0971 18.9649ZM73.3362 12.0662H82.2648V13.5426H73.3362V12.0662Z',
          fill: 'black'
        }),
        b.exports.createElement('path', {
          d: 'M88.311 18.9649V0.966951H94.3836C95.5553 0.966951 96.5308 1.17201 97.31 1.58211C98.095 1.99222 98.6838 2.55173 99.0764 3.26063C99.4689 3.96953 99.6652 4.7751 99.6652 5.67734C99.6652 6.42725 99.5392 7.06878 99.2873 7.60192C99.0354 8.13506 98.6926 8.56568 98.2591 8.89376C97.8255 9.22185 97.3422 9.45913 96.8091 9.60559V9.7462C97.3891 9.78721 97.9515 9.99227 98.4964 10.3614C99.0412 10.7246 99.4894 11.2343 99.8409 11.8905C100.192 12.5467 100.368 13.3317 100.368 14.2457C100.368 15.1538 100.166 15.9652 99.7618 16.68C99.3576 17.3889 98.7366 17.9484 97.8988 18.3585C97.0668 18.7627 96.0064 18.9649 94.7175 18.9649H88.311ZM89.9544 17.4885H94.7175C96.106 17.4885 97.1313 17.1809 97.7933 16.5657C98.4612 15.9506 98.7952 15.1772 98.7952 14.2457C98.7952 13.5602 98.6282 12.9392 98.2942 12.3826C97.9661 11.8202 97.5004 11.3749 96.8969 11.0468C96.2994 10.7187 95.5963 10.5547 94.7878 10.5547H89.9544V17.4885ZM89.9544 9.09589H94.533C95.2419 9.09589 95.8629 8.94942 96.396 8.65648C96.9292 8.36355 97.3451 7.9593 97.6439 7.44374C97.9427 6.92817 98.0921 6.33937 98.0921 5.67734C98.0921 4.72237 97.7816 3.9461 97.1606 3.34851C96.5396 2.74506 95.6139 2.44334 94.3836 2.44334H89.9544V9.09589Z',
          fill: 'black'
        }),
        b.exports.createElement('path', {
          d: 'M103.244 2.44334V0.966951H116.294V2.44334H110.591V18.9649H108.948V2.44334H103.244Z',
          fill: 'black'
        }),
        b.exports.createElement('path', {
          d: 'M134 9.9659C134 11.8407 133.666 13.4723 132.998 14.8608C132.33 16.2435 131.41 17.3156 130.239 18.0773C129.073 18.833 127.731 19.2109 126.214 19.2109C124.696 19.2109 123.352 18.833 122.18 18.0773C121.014 17.3156 120.097 16.2435 119.429 14.8608C118.767 13.4723 118.436 11.8407 118.436 9.9659C118.436 8.09112 118.767 6.4624 119.429 5.07975C120.097 3.69124 121.017 2.6191 122.189 1.86333C123.361 1.1017 124.702 0.720886 126.214 0.720886C127.731 0.720886 129.073 1.1017 130.239 1.86333C131.41 2.6191 132.33 3.69124 132.998 5.07975C133.666 6.4624 134 8.09112 134 9.9659ZM132.401 9.9659C132.401 8.35476 132.131 6.97504 131.592 5.82674C131.053 4.67257 130.318 3.79084 129.386 3.18154C128.455 2.57223 127.397 2.26758 126.214 2.26758C125.036 2.26758 123.982 2.57223 123.05 3.18154C122.119 3.79084 121.38 4.66964 120.836 5.81795C120.297 6.96625 120.027 8.3489 120.027 9.9659C120.027 11.577 120.297 12.9568 120.836 14.1051C121.375 15.2534 122.11 16.1351 123.041 16.7503C123.973 17.3596 125.03 17.6642 126.214 17.6642C127.397 17.6642 128.455 17.3596 129.386 16.7503C130.324 16.141 131.062 15.2622 131.601 14.1139C132.14 12.9597 132.406 11.577 132.401 9.9659Z',
          fill: 'black'
        }),
        b.exports.createElement('path', {
          d: 'M10.8884 18.9649L5.10585 11.2929H3.80522V18.9649H0V0.96698H3.80522V8.1556H4.56978L10.5456 0.96698H15.2824L8.26076 9.31562L15.6076 18.9649H10.8884Z',
          fill: '#6C47FF'
        }),
        b.exports.createElement('path', {
          d: 'M19.4633 19.2109V16.1176H20.4388C20.9251 16.1176 21.3176 16.059 21.6164 15.9418C21.9152 15.8188 22.1524 15.6401 22.3282 15.4057C22.5098 15.1655 22.6622 14.8667 22.7852 14.5093L23.0049 13.9205L16.4666 0.96698H20.4036L24.6395 9.82532L28.181 0.96698H32.0654L25.861 15.4321C25.5622 16.1 25.2078 16.721 24.7976 17.2952C24.3934 17.8693 23.8749 18.3321 23.2422 18.6837C22.6094 19.0352 21.8009 19.2109 20.8167 19.2109H19.4633Z',
          fill: '#6C47FF'
        }),
        b.exports.createElement('path', {
          d: 'M49.4239 0.96698V18.9649H45.6626V4.06037H38.3862V18.9649H34.6249V0.96698H49.4239Z',
          fill: '#6C47FF'
        }),
        b.exports.createElement('path', {
          d: 'M53.0468 0.96698H56.8432V12.286H56.9926L64.77 0.96698H68.1007V18.9649H64.2955V7.6371H64.1637L56.3423 18.9649H53.0468V0.96698Z',
          fill: '#6C47FF'
        })
      ),
    IE = e =>
      b.exports.createElement(
        'svg',
        {
          width: '1em',
          height: '1em',
          viewBox: '0 0 12 12',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          ...e
        },
        b.exports.createElement('path', {
          d: 'M12 0H0V2H12V0Z',
          fill: 'black'
        }),
        b.exports.createElement('path', {
          d: 'M12 5H0V7H12V5Z',
          fill: 'black'
        }),
        b.exports.createElement('path', {
          d: 'M12 10H0V12H12V10Z',
          fill: 'black'
        })
      ),
    sg = e =>
      b.exports.createElement(
        'svg',
        {
          width: '1em',
          height: '1em',
          viewBox: '0 0 14 12',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          ...e
        },
        b.exports.createElement(
          'g',
          { clipPath: 'url(#clip0_46_517)' },
          b.exports.createElement('path', {
            d: 'M6.75 12C6.612 12 6.47398 11.9618 6.35248 11.886C6.09298 11.724 0 7.86825 0 3.75C0 1.68225 1.68225 0 3.75 0C4.9455 0 6.05325 0.627717 6.75 1.55997C7.44675 0.627717 8.5545 0 9.75 0C11.8177 0 13.5 1.68225 13.5 3.75C13.5 7.86825 7.40702 11.724 7.14752 11.886C7.02602 11.9618 6.888 12 6.75 12Z',
            fill: '#4F2CD9'
          })
        ),
        b.exports.createElement(
          'defs',
          null,
          b.exports.createElement(
            'clipPath',
            { id: 'clip0_46_517' },
            b.exports.createElement('rect', {
              width: 13.5,
              height: 12,
              fill: 'white'
            })
          )
        )
      ),
    FE = 'modulepreload',
    LE = function (e) {
      return '/' + e;
    },
    cv = {},
    ME = function (t, r, n) {
      return !r || r.length === 0
        ? t()
        : Promise.all(
            r.map(i => {
              if (((i = LE(i)), i in cv)) return;
              cv[i] = !0;
              const o = i.endsWith('.css'),
                a = o ? '[rel="stylesheet"]' : '';
              if (document.querySelector(`link[href="${i}"]${a}`)) return;
              const s = document.createElement('link');
              if (
                ((s.rel = o ? 'stylesheet' : FE),
                o || ((s.as = 'script'), (s.crossOrigin = '')),
                (s.href = i),
                document.head.appendChild(s),
                o)
              )
                return new Promise((u, l) => {
                  s.addEventListener('load', u),
                    s.addEventListener('error', () =>
                      l(new Error(`Unable to preload CSS for ${i}`))
                    );
                });
            })
          ).then(() => t());
    };
  var ah = {};
  Object.defineProperty(ah, '__esModule', { value: !0 });
  ah.parse = QE;
  ah.serialize = qE;
  const jE = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    VE = /^[\u0021-\u003A\u003C-\u007E]*$/,
    $E =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    zE = /^[\u0020-\u003A\u003D-\u007E]*$/,
    BE = Object.prototype.toString,
    UE = (() => {
      const e = function () {};
      return (e.prototype = Object.create(null)), e;
    })();
  function QE(e, t) {
    const r = new UE(),
      n = e.length;
    if (n < 2) return r;
    const i = (t == null ? void 0 : t.decode) || WE;
    let o = 0;
    do {
      const a = e.indexOf('=', o);
      if (a === -1) break;
      const s = e.indexOf(';', o),
        u = s === -1 ? n : s;
      if (a > u) {
        o = e.lastIndexOf(';', a - 1) + 1;
        continue;
      }
      const l = fv(e, o, a),
        c = dv(e, a, l),
        d = e.slice(l, c);
      if (r[d] === void 0) {
        let f = fv(e, a + 1, u),
          v = dv(e, u, f);
        const y = i(e.slice(f, v));
        r[d] = y;
      }
      o = u + 1;
    } while (o < n);
    return r;
  }
  function fv(e, t, r) {
    do {
      const n = e.charCodeAt(t);
      if (n !== 32 && n !== 9) return t;
    } while (++t < r);
    return r;
  }
  function dv(e, t, r) {
    for (; t > r; ) {
      const n = e.charCodeAt(--t);
      if (n !== 32 && n !== 9) return t + 1;
    }
    return r;
  }
  function qE(e, t, r) {
    const n = (r == null ? void 0 : r.encode) || encodeURIComponent;
    if (!jE.test(e)) throw new TypeError(`argument name is invalid: ${e}`);
    const i = n(t);
    if (!VE.test(i)) throw new TypeError(`argument val is invalid: ${t}`);
    let o = e + '=' + i;
    if (!r) return o;
    if (r.maxAge !== void 0) {
      if (!Number.isInteger(r.maxAge))
        throw new TypeError(`option maxAge is invalid: ${r.maxAge}`);
      o += '; Max-Age=' + r.maxAge;
    }
    if (r.domain) {
      if (!$E.test(r.domain))
        throw new TypeError(`option domain is invalid: ${r.domain}`);
      o += '; Domain=' + r.domain;
    }
    if (r.path) {
      if (!zE.test(r.path))
        throw new TypeError(`option path is invalid: ${r.path}`);
      o += '; Path=' + r.path;
    }
    if (r.expires) {
      if (!HE(r.expires) || !Number.isFinite(r.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${r.expires}`);
      o += '; Expires=' + r.expires.toUTCString();
    }
    if (
      (r.httpOnly && (o += '; HttpOnly'),
      r.secure && (o += '; Secure'),
      r.partitioned && (o += '; Partitioned'),
      r.priority)
    )
      switch (
        typeof r.priority == 'string' ? r.priority.toLowerCase() : void 0
      ) {
        case 'low':
          o += '; Priority=Low';
          break;
        case 'medium':
          o += '; Priority=Medium';
          break;
        case 'high':
          o += '; Priority=High';
          break;
        default:
          throw new TypeError(`option priority is invalid: ${r.priority}`);
      }
    if (r.sameSite)
      switch (
        typeof r.sameSite == 'string' ? r.sameSite.toLowerCase() : r.sameSite
      ) {
        case !0:
        case 'strict':
          o += '; SameSite=Strict';
          break;
        case 'lax':
          o += '; SameSite=Lax';
          break;
        case 'none':
          o += '; SameSite=None';
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${r.sameSite}`);
      }
    return o;
  }
  function WE(e) {
    if (e.indexOf('%') === -1) return e;
    try {
      return decodeURIComponent(e);
    } catch {
      return e;
    }
  }
  function HE(e) {
    return BE.call(e) === '[object Date]';
  }
  function GE(e) {
    if (e.sheet) return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++)
      if (document.styleSheets[t].ownerNode === e)
        return document.styleSheets[t];
  }
  function KE(e) {
    var t = document.createElement('style');
    return (
      t.setAttribute('data-emotion', e.key),
      e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
      t.appendChild(document.createTextNode('')),
      t.setAttribute('data-s', ''),
      t
    );
  }
  var YE = (function () {
      function e(r) {
        var n = this;
        (this._insertTag = function (i) {
          var o;
          n.tags.length === 0
            ? n.insertionPoint
              ? (o = n.insertionPoint.nextSibling)
              : n.prepend
              ? (o = n.container.firstChild)
              : (o = n.before)
            : (o = n.tags[n.tags.length - 1].nextSibling),
            n.container.insertBefore(i, o),
            n.tags.push(i);
        }),
          (this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
          (this.tags = []),
          (this.ctr = 0),
          (this.nonce = r.nonce),
          (this.key = r.key),
          (this.container = r.container),
          (this.prepend = r.prepend),
          (this.insertionPoint = r.insertionPoint),
          (this.before = null);
      }
      var t = e.prototype;
      return (
        (t.hydrate = function (n) {
          n.forEach(this._insertTag);
        }),
        (t.insert = function (n) {
          this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
            this._insertTag(KE(this));
          var i = this.tags[this.tags.length - 1];
          if (this.isSpeedy) {
            var o = GE(i);
            try {
              o.insertRule(n, o.cssRules.length);
            } catch {}
          } else i.appendChild(document.createTextNode(n));
          this.ctr++;
        }),
        (t.flush = function () {
          this.tags.forEach(function (n) {
            return n.parentNode && n.parentNode.removeChild(n);
          }),
            (this.tags = []),
            (this.ctr = 0);
        }),
        e
      );
    })(),
    Le = '-ms-',
    mu = '-moz-',
    G = '-webkit-',
    ug = 'comm',
    sh = 'rule',
    uh = 'decl',
    JE = '@import',
    lg = '@keyframes',
    XE = Math.abs,
    Hu = String.fromCharCode,
    ZE = Object.assign;
  function eS(e, t) {
    return (
      (((((((t << 2) ^ We(e, 0)) << 2) ^ We(e, 1)) << 2) ^ We(e, 2)) << 2) ^
      We(e, 3)
    );
  }
  function cg(e) {
    return e.trim();
  }
  function tS(e, t) {
    return (e = t.exec(e)) ? e[0] : e;
  }
  function K(e, t, r) {
    return e.replace(t, r);
  }
  function wf(e, t) {
    return e.indexOf(t);
  }
  function We(e, t) {
    return e.charCodeAt(t) | 0;
  }
  function la(e, t, r) {
    return e.slice(t, r);
  }
  function Bt(e) {
    return e.length;
  }
  function lh(e) {
    return e.length;
  }
  function os(e, t) {
    return t.push(e), e;
  }
  function rS(e, t) {
    return e.map(t).join('');
  }
  var Gu = 1,
    Li = 1,
    fg = 0,
    Xe = 0,
    we = 0,
    Gi = '';
  function Ku(e, t, r, n, i, o, a) {
    return {
      value: e,
      root: t,
      parent: r,
      type: n,
      props: i,
      children: o,
      line: Gu,
      column: Li,
      length: a,
      return: ''
    };
  }
  function po(e, t) {
    return ZE(
      Ku('', null, null, '', null, null, 0),
      e,
      { length: -e.length },
      t
    );
  }
  function nS() {
    return we;
  }
  function iS() {
    return (
      (we = Xe > 0 ? We(Gi, --Xe) : 0), Li--, we === 10 && ((Li = 1), Gu--), we
    );
  }
  function it() {
    return (
      (we = Xe < fg ? We(Gi, Xe++) : 0), Li++, we === 10 && ((Li = 1), Gu++), we
    );
  }
  function Kt() {
    return We(Gi, Xe);
  }
  function Cs() {
    return Xe;
  }
  function Ca(e, t) {
    return la(Gi, e, t);
  }
  function ca(e) {
    switch (e) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function dg(e) {
    return (Gu = Li = 1), (fg = Bt((Gi = e))), (Xe = 0), [];
  }
  function hg(e) {
    return (Gi = ''), e;
  }
  function Ts(e) {
    return cg(Ca(Xe - 1, bf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function oS(e) {
    for (; (we = Kt()) && we < 33; ) it();
    return ca(e) > 2 || ca(we) > 3 ? '' : ' ';
  }
  function aS(e, t) {
    for (
      ;
      --t &&
      it() &&
      !(we < 48 || we > 102 || (we > 57 && we < 65) || (we > 70 && we < 97));

    );
    return Ca(e, Cs() + (t < 6 && Kt() == 32 && it() == 32));
  }
  function bf(e) {
    for (; it(); )
      switch (we) {
        case e:
          return Xe;
        case 34:
        case 39:
          e !== 34 && e !== 39 && bf(we);
          break;
        case 40:
          e === 41 && bf(e);
          break;
        case 92:
          it();
          break;
      }
    return Xe;
  }
  function sS(e, t) {
    for (; it() && e + we !== 47 + 10; )
      if (e + we === 42 + 42 && Kt() === 47) break;
    return '/*' + Ca(t, Xe - 1) + '*' + Hu(e === 47 ? e : it());
  }
  function uS(e) {
    for (; !ca(Kt()); ) it();
    return Ca(e, Xe);
  }
  function lS(e) {
    return hg(Ns('', null, null, null, [''], (e = dg(e)), 0, [0], e));
  }
  function Ns(e, t, r, n, i, o, a, s, u) {
    for (
      var l = 0,
        c = 0,
        d = a,
        f = 0,
        v = 0,
        y = 0,
        g = 1,
        _ = 1,
        h = 1,
        p = 0,
        m = '',
        w = i,
        S = o,
        x = n,
        O = m;
      _;

    )
      switch (((y = p), (p = it()))) {
        case 40:
          if (y != 108 && O.charCodeAt(d - 1) == 58) {
            wf((O += K(Ts(p), '&', '&\f')), '&\f') != -1 && (h = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          O += Ts(p);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          O += oS(y);
          break;
        case 92:
          O += aS(Cs() - 1, 7);
          continue;
        case 47:
          switch (Kt()) {
            case 42:
            case 47:
              os(cS(sS(it(), Cs()), t, r), u);
              break;
            default:
              O += '/';
          }
          break;
        case 123 * g:
          s[l++] = Bt(O) * h;
        case 125 * g:
        case 59:
        case 0:
          switch (p) {
            case 0:
            case 125:
              _ = 0;
            case 59 + c:
              v > 0 &&
                Bt(O) - d &&
                os(
                  v > 32
                    ? pv(O + ';', n, r, d - 1)
                    : pv(K(O, ' ', '') + ';', n, r, d - 2),
                  u
                );
              break;
            case 59:
              O += ';';
            default:
              if (
                (os((x = hv(O, t, r, l, c, i, s, m, (w = []), (S = []), d)), o),
                p === 123)
              )
                if (c === 0) Ns(O, t, x, x, w, o, d, s, S);
                else
                  switch (f) {
                    case 100:
                    case 109:
                    case 115:
                      Ns(
                        e,
                        x,
                        x,
                        n && os(hv(e, x, x, 0, 0, i, s, m, i, (w = []), d), S),
                        i,
                        S,
                        d,
                        s,
                        n ? w : S
                      );
                      break;
                    default:
                      Ns(O, x, x, x, [''], S, 0, s, S);
                  }
          }
          (l = c = v = 0), (g = h = 1), (m = O = ''), (d = a);
          break;
        case 58:
          (d = 1 + Bt(O)), (v = y);
        default:
          if (g < 1) {
            if (p == 123) --g;
            else if (p == 125 && g++ == 0 && iS() == 125) continue;
          }
          switch (((O += Hu(p)), p * g)) {
            case 38:
              h = c > 0 ? 1 : ((O += '\f'), -1);
              break;
            case 44:
              (s[l++] = (Bt(O) - 1) * h), (h = 1);
              break;
            case 64:
              Kt() === 45 && (O += Ts(it())),
                (f = Kt()),
                (c = d = Bt((m = O += uS(Cs())))),
                p++;
              break;
            case 45:
              y === 45 && Bt(O) == 2 && (g = 0);
          }
      }
    return o;
  }
  function hv(e, t, r, n, i, o, a, s, u, l, c) {
    for (
      var d = i - 1, f = i === 0 ? o : [''], v = lh(f), y = 0, g = 0, _ = 0;
      y < n;
      ++y
    )
      for (var h = 0, p = la(e, d + 1, (d = XE((g = a[y])))), m = e; h < v; ++h)
        (m = cg(g > 0 ? f[h] + ' ' + p : K(p, /&\f/g, f[h]))) && (u[_++] = m);
    return Ku(e, t, r, i === 0 ? sh : s, u, l, c);
  }
  function cS(e, t, r) {
    return Ku(e, t, r, ug, Hu(nS()), la(e, 2, -2), 0);
  }
  function pv(e, t, r, n) {
    return Ku(e, t, r, uh, la(e, 0, n), la(e, n + 1, -1), n);
  }
  function pg(e, t) {
    switch (eS(e, t)) {
      case 5103:
        return G + 'print-' + e + e;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return G + e + e;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return G + e + mu + e + Le + e + e;
      case 6828:
      case 4268:
        return G + e + Le + e + e;
      case 6165:
        return G + e + Le + 'flex-' + e + e;
      case 5187:
        return (
          G + e + K(e, /(\w+).+(:[^]+)/, G + 'box-$1$2' + Le + 'flex-$1$2') + e
        );
      case 5443:
        return G + e + Le + 'flex-item-' + K(e, /flex-|-self/, '') + e;
      case 4675:
        return (
          G +
          e +
          Le +
          'flex-line-pack' +
          K(e, /align-content|flex-|-self/, '') +
          e
        );
      case 5548:
        return G + e + Le + K(e, 'shrink', 'negative') + e;
      case 5292:
        return G + e + Le + K(e, 'basis', 'preferred-size') + e;
      case 6060:
        return (
          G +
          'box-' +
          K(e, '-grow', '') +
          G +
          e +
          Le +
          K(e, 'grow', 'positive') +
          e
        );
      case 4554:
        return G + K(e, /([^-])(transform)/g, '$1' + G + '$2') + e;
      case 6187:
        return (
          K(K(K(e, /(zoom-|grab)/, G + '$1'), /(image-set)/, G + '$1'), e, '') +
          e
        );
      case 5495:
      case 3959:
        return K(e, /(image-set\([^]*)/, G + '$1$`$1');
      case 4968:
        return (
          K(
            K(e, /(.+:)(flex-)?(.*)/, G + 'box-pack:$3' + Le + 'flex-pack:$3'),
            /s.+-b[^;]+/,
            'justify'
          ) +
          G +
          e +
          e
        );
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return K(e, /(.+)-inline(.+)/, G + '$1$2') + e;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (Bt(e) - 1 - t > 6)
          switch (We(e, t + 1)) {
            case 109:
              if (We(e, t + 4) !== 45) break;
            case 102:
              return (
                K(
                  e,
                  /(.+:)(.+)-([^]+)/,
                  '$1' +
                    G +
                    '$2-$3$1' +
                    mu +
                    (We(e, t + 3) == 108 ? '$3' : '$2-$3')
                ) + e
              );
            case 115:
              return ~wf(e, 'stretch')
                ? pg(K(e, 'stretch', 'fill-available'), t) + e
                : e;
          }
        break;
      case 4949:
        if (We(e, t + 1) !== 115) break;
      case 6444:
        switch (We(e, Bt(e) - 3 - (~wf(e, '!important') && 10))) {
          case 107:
            return K(e, ':', ':' + G) + e;
          case 101:
            return (
              K(
                e,
                /(.+:)([^;!]+)(;|!.+)?/,
                '$1' +
                  G +
                  (We(e, 14) === 45 ? 'inline-' : '') +
                  'box$3$1' +
                  G +
                  '$2$3$1' +
                  Le +
                  '$2box$3'
              ) + e
            );
        }
        break;
      case 5936:
        switch (We(e, t + 11)) {
          case 114:
            return G + e + Le + K(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
          case 108:
            return G + e + Le + K(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
          case 45:
            return G + e + Le + K(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
        }
        return G + e + Le + e + e;
    }
    return e;
  }
  function xi(e, t) {
    for (var r = '', n = lh(e), i = 0; i < n; i++) r += t(e[i], i, e, t) || '';
    return r;
  }
  function fS(e, t, r, n) {
    switch (e.type) {
      case JE:
      case uh:
        return (e.return = e.return || e.value);
      case ug:
        return '';
      case lg:
        return (e.return = e.value + '{' + xi(e.children, n) + '}');
      case sh:
        e.value = e.props.join(',');
    }
    return Bt((r = xi(e.children, n)))
      ? (e.return = e.value + '{' + r + '}')
      : '';
  }
  function dS(e) {
    var t = lh(e);
    return function (r, n, i, o) {
      for (var a = '', s = 0; s < t; s++) a += e[s](r, n, i, o) || '';
      return a;
    };
  }
  function hS(e) {
    return function (t) {
      t.root || ((t = t.return) && e(t));
    };
  }
  function pS(e, t, r, n) {
    if (e.length > -1 && !e.return)
      switch (e.type) {
        case uh:
          e.return = pg(e.value, e.length);
          break;
        case lg:
          return xi([po(e, { value: K(e.value, '@', '@' + G) })], n);
        case sh:
          if (e.length)
            return rS(e.props, function (i) {
              switch (tS(i, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return xi(
                    [po(e, { props: [K(i, /:(read-\w+)/, ':' + mu + '$1')] })],
                    n
                  );
                case '::placeholder':
                  return xi(
                    [
                      po(e, {
                        props: [K(i, /:(plac\w+)/, ':' + G + 'input-$1')]
                      }),
                      po(e, { props: [K(i, /:(plac\w+)/, ':' + mu + '$1')] }),
                      po(e, { props: [K(i, /:(plac\w+)/, Le + 'input-$1')] })
                    ],
                    n
                  );
              }
              return '';
            });
      }
  }
  function vS(e) {
    var t = Object.create(null);
    return function (r) {
      return t[r] === void 0 && (t[r] = e(r)), t[r];
    };
  }
  var mS = function (t, r, n) {
      for (
        var i = 0, o = 0;
        (i = o), (o = Kt()), i === 38 && o === 12 && (r[n] = 1), !ca(o);

      )
        it();
      return Ca(t, Xe);
    },
    yS = function (t, r) {
      var n = -1,
        i = 44;
      do
        switch (ca(i)) {
          case 0:
            i === 38 && Kt() === 12 && (r[n] = 1), (t[n] += mS(Xe - 1, r, n));
            break;
          case 2:
            t[n] += Ts(i);
            break;
          case 4:
            if (i === 44) {
              (t[++n] = Kt() === 58 ? '&\f' : ''), (r[n] = t[n].length);
              break;
            }
          default:
            t[n] += Hu(i);
        }
      while ((i = it()));
      return t;
    },
    gS = function (t, r) {
      return hg(yS(dg(t), r));
    },
    vv = new WeakMap(),
    _S = function (t) {
      if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
        for (
          var r = t.value,
            n = t.parent,
            i = t.column === n.column && t.line === n.line;
          n.type !== 'rule';

        )
          if (((n = n.parent), !n)) return;
        if (
          !(t.props.length === 1 && r.charCodeAt(0) !== 58 && !vv.get(n)) &&
          !i
        ) {
          vv.set(t, !0);
          for (
            var o = [], a = gS(r, o), s = n.props, u = 0, l = 0;
            u < a.length;
            u++
          )
            for (var c = 0; c < s.length; c++, l++)
              t.props[l] = o[u]
                ? a[u].replace(/&\f/g, s[c])
                : s[c] + ' ' + a[u];
        }
      }
    },
    wS = function (t) {
      if (t.type === 'decl') {
        var r = t.value;
        r.charCodeAt(0) === 108 &&
          r.charCodeAt(2) === 98 &&
          ((t.return = ''), (t.value = ''));
      }
    },
    bS = [pS],
    ES = function (t) {
      var r = t.key;
      if (r === 'css') {
        var n = document.querySelectorAll('style[data-emotion]:not([data-s])');
        Array.prototype.forEach.call(n, function (g) {
          var _ = g.getAttribute('data-emotion');
          _.indexOf(' ') !== -1 &&
            (document.head.appendChild(g), g.setAttribute('data-s', ''));
        });
      }
      var i = t.stylisPlugins || bS,
        o = {},
        a,
        s = [];
      (a = t.container || document.head),
        Array.prototype.forEach.call(
          document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
          function (g) {
            for (
              var _ = g.getAttribute('data-emotion').split(' '), h = 1;
              h < _.length;
              h++
            )
              o[_[h]] = !0;
            s.push(g);
          }
        );
      var u,
        l = [_S, wS];
      {
        var c,
          d = [
            fS,
            hS(function (g) {
              c.insert(g);
            })
          ],
          f = dS(l.concat(i, d)),
          v = function (_) {
            return xi(lS(_), f);
          };
        u = function (_, h, p, m) {
          (c = p),
            v(_ ? _ + '{' + h.styles + '}' : h.styles),
            m && (y.inserted[h.name] = !0);
        };
      }
      var y = {
        key: r,
        sheet: new YE({
          key: r,
          container: a,
          nonce: t.nonce,
          speedy: t.speedy,
          prepend: t.prepend,
          insertionPoint: t.insertionPoint
        }),
        nonce: t.nonce,
        inserted: o,
        registered: {},
        insert: u
      };
      return y.sheet.hydrate(s), y;
    },
    vg = { exports: {} },
    Z = {};
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Te = typeof Symbol == 'function' && Symbol.for,
    ch = Te ? Symbol.for('react.element') : 60103,
    fh = Te ? Symbol.for('react.portal') : 60106,
    Yu = Te ? Symbol.for('react.fragment') : 60107,
    Ju = Te ? Symbol.for('react.strict_mode') : 60108,
    Xu = Te ? Symbol.for('react.profiler') : 60114,
    Zu = Te ? Symbol.for('react.provider') : 60109,
    el = Te ? Symbol.for('react.context') : 60110,
    dh = Te ? Symbol.for('react.async_mode') : 60111,
    tl = Te ? Symbol.for('react.concurrent_mode') : 60111,
    rl = Te ? Symbol.for('react.forward_ref') : 60112,
    nl = Te ? Symbol.for('react.suspense') : 60113,
    SS = Te ? Symbol.for('react.suspense_list') : 60120,
    il = Te ? Symbol.for('react.memo') : 60115,
    ol = Te ? Symbol.for('react.lazy') : 60116,
    xS = Te ? Symbol.for('react.block') : 60121,
    OS = Te ? Symbol.for('react.fundamental') : 60117,
    kS = Te ? Symbol.for('react.responder') : 60118,
    CS = Te ? Symbol.for('react.scope') : 60119;
  function ut(e) {
    if (typeof e == 'object' && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case ch:
          switch (((e = e.type), e)) {
            case dh:
            case tl:
            case Yu:
            case Xu:
            case Ju:
            case nl:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case el:
                case rl:
                case ol:
                case il:
                case Zu:
                  return e;
                default:
                  return t;
              }
          }
        case fh:
          return t;
      }
    }
  }
  function mg(e) {
    return ut(e) === tl;
  }
  Z.AsyncMode = dh;
  Z.ConcurrentMode = tl;
  Z.ContextConsumer = el;
  Z.ContextProvider = Zu;
  Z.Element = ch;
  Z.ForwardRef = rl;
  Z.Fragment = Yu;
  Z.Lazy = ol;
  Z.Memo = il;
  Z.Portal = fh;
  Z.Profiler = Xu;
  Z.StrictMode = Ju;
  Z.Suspense = nl;
  Z.isAsyncMode = function (e) {
    return mg(e) || ut(e) === dh;
  };
  Z.isConcurrentMode = mg;
  Z.isContextConsumer = function (e) {
    return ut(e) === el;
  };
  Z.isContextProvider = function (e) {
    return ut(e) === Zu;
  };
  Z.isElement = function (e) {
    return typeof e == 'object' && e !== null && e.$$typeof === ch;
  };
  Z.isForwardRef = function (e) {
    return ut(e) === rl;
  };
  Z.isFragment = function (e) {
    return ut(e) === Yu;
  };
  Z.isLazy = function (e) {
    return ut(e) === ol;
  };
  Z.isMemo = function (e) {
    return ut(e) === il;
  };
  Z.isPortal = function (e) {
    return ut(e) === fh;
  };
  Z.isProfiler = function (e) {
    return ut(e) === Xu;
  };
  Z.isStrictMode = function (e) {
    return ut(e) === Ju;
  };
  Z.isSuspense = function (e) {
    return ut(e) === nl;
  };
  Z.isValidElementType = function (e) {
    return (
      typeof e == 'string' ||
      typeof e == 'function' ||
      e === Yu ||
      e === tl ||
      e === Xu ||
      e === Ju ||
      e === nl ||
      e === SS ||
      (typeof e == 'object' &&
        e !== null &&
        (e.$$typeof === ol ||
          e.$$typeof === il ||
          e.$$typeof === Zu ||
          e.$$typeof === el ||
          e.$$typeof === rl ||
          e.$$typeof === OS ||
          e.$$typeof === kS ||
          e.$$typeof === CS ||
          e.$$typeof === xS))
    );
  };
  Z.typeOf = ut;
  (function (e) {
    e.exports = Z;
  })(vg);
  var yg = vg.exports,
    TS = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0
    },
    NS = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0
    },
    gg = {};
  gg[yg.ForwardRef] = TS;
  gg[yg.Memo] = NS;
  var DS = !0;
  function RS(e, t, r) {
    var n = '';
    return (
      r.split(' ').forEach(function (i) {
        e[i] !== void 0 ? t.push(e[i] + ';') : (n += i + ' ');
      }),
      n
    );
  }
  var _g = function (t, r, n) {
      var i = t.key + '-' + r.name;
      (n === !1 || DS === !1) &&
        t.registered[i] === void 0 &&
        (t.registered[i] = r.styles);
    },
    PS = function (t, r, n) {
      _g(t, r, n);
      var i = t.key + '-' + r.name;
      if (t.inserted[r.name] === void 0) {
        var o = r;
        do t.insert(r === o ? '.' + i : '', o, t.sheet, !0), (o = o.next);
        while (o !== void 0);
      }
    };
  function AS(e) {
    for (var t = 0, r, n = 0, i = e.length; i >= 4; ++n, i -= 4)
      (r =
        (e.charCodeAt(n) & 255) |
        ((e.charCodeAt(++n) & 255) << 8) |
        ((e.charCodeAt(++n) & 255) << 16) |
        ((e.charCodeAt(++n) & 255) << 24)),
        (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
        (r ^= r >>> 24),
        (t =
          ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
          ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
    switch (i) {
      case 3:
        t ^= (e.charCodeAt(n + 2) & 255) << 16;
      case 2:
        t ^= (e.charCodeAt(n + 1) & 255) << 8;
      case 1:
        (t ^= e.charCodeAt(n) & 255),
          (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
    }
    return (
      (t ^= t >>> 13),
      (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
      ((t ^ (t >>> 15)) >>> 0).toString(36)
    );
  }
  var IS = {
      animationIterationCount: 1,
      aspectRatio: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1
    },
    FS = /[A-Z]|^ms/g,
    LS = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    wg = function (t) {
      return t.charCodeAt(1) === 45;
    },
    mv = function (t) {
      return t != null && typeof t != 'boolean';
    },
    rc = vS(function (e) {
      return wg(e) ? e : e.replace(FS, '-$&').toLowerCase();
    }),
    yv = function (t, r) {
      switch (t) {
        case 'animation':
        case 'animationName':
          if (typeof r == 'string')
            return r.replace(LS, function (n, i, o) {
              return (Ut = { name: i, styles: o, next: Ut }), i;
            });
      }
      return IS[t] !== 1 && !wg(t) && typeof r == 'number' && r !== 0
        ? r + 'px'
        : r;
    };
  function fa(e, t, r) {
    if (r == null) return '';
    if (r.__emotion_styles !== void 0) return r;
    switch (typeof r) {
      case 'boolean':
        return '';
      case 'object': {
        if (r.anim === 1)
          return (Ut = { name: r.name, styles: r.styles, next: Ut }), r.name;
        if (r.styles !== void 0) {
          var n = r.next;
          if (n !== void 0)
            for (; n !== void 0; )
              (Ut = { name: n.name, styles: n.styles, next: Ut }), (n = n.next);
          var i = r.styles + ';';
          return i;
        }
        return MS(e, t, r);
      }
      case 'function': {
        if (e !== void 0) {
          var o = Ut,
            a = r(e);
          return (Ut = o), fa(e, t, a);
        }
        break;
      }
    }
    if (t == null) return r;
    var s = t[r];
    return s !== void 0 ? s : r;
  }
  function MS(e, t, r) {
    var n = '';
    if (Array.isArray(r))
      for (var i = 0; i < r.length; i++) n += fa(e, t, r[i]) + ';';
    else
      for (var o in r) {
        var a = r[o];
        if (typeof a != 'object')
          t != null && t[a] !== void 0
            ? (n += o + '{' + t[a] + '}')
            : mv(a) && (n += rc(o) + ':' + yv(o, a) + ';');
        else if (
          Array.isArray(a) &&
          typeof a[0] == 'string' &&
          (t == null || t[a[0]] === void 0)
        )
          for (var s = 0; s < a.length; s++)
            mv(a[s]) && (n += rc(o) + ':' + yv(o, a[s]) + ';');
        else {
          var u = fa(e, t, a);
          switch (o) {
            case 'animation':
            case 'animationName': {
              n += rc(o) + ':' + u + ';';
              break;
            }
            default:
              n += o + '{' + u + '}';
          }
        }
      }
    return n;
  }
  var gv = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
    Ut,
    jS = function (t, r, n) {
      if (
        t.length === 1 &&
        typeof t[0] == 'object' &&
        t[0] !== null &&
        t[0].styles !== void 0
      )
        return t[0];
      var i = !0,
        o = '';
      Ut = void 0;
      var a = t[0];
      a == null || a.raw === void 0
        ? ((i = !1), (o += fa(n, r, a)))
        : (o += a[0]);
      for (var s = 1; s < t.length; s++)
        (o += fa(n, r, t[s])), i && (o += a[s]);
      gv.lastIndex = 0;
      for (var u = '', l; (l = gv.exec(o)) !== null; ) u += '-' + l[1];
      var c = AS(o) + u;
      return { name: c, styles: o, next: Ut };
    },
    VS = function (t) {
      return t();
    },
    $S = np['useInsertionEffect'] ? np['useInsertionEffect'] : !1,
    zS = $S || VS,
    al = {}.hasOwnProperty,
    bg = b.exports.createContext(
      typeof HTMLElement < 'u' ? ES({ key: 'css' }) : null
    );
  bg.Provider;
  var BS = function (t) {
      return b.exports.forwardRef(function (r, n) {
        var i = b.exports.useContext(bg);
        return t(r, i, n);
      });
    },
    US = b.exports.createContext({}),
    Ef = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
    Eg = function (t, r) {
      var n = {};
      for (var i in r) al.call(r, i) && (n[i] = r[i]);
      return (n[Ef] = t), n;
    },
    QS = function (t) {
      var r = t.cache,
        n = t.serialized,
        i = t.isStringTag;
      return (
        _g(r, n, i),
        zS(function () {
          return PS(r, n, i);
        }),
        null
      );
    },
    Sg = BS(function (e, t, r) {
      var n = e.css;
      typeof n == 'string' &&
        t.registered[n] !== void 0 &&
        (n = t.registered[n]);
      var i = e[Ef],
        o = [n],
        a = '';
      typeof e.className == 'string'
        ? (a = RS(t.registered, o, e.className))
        : e.className != null && (a = e.className + ' ');
      var s = jS(o, void 0, b.exports.useContext(US));
      a += t.key + '-' + s.name;
      var u = {};
      for (var l in e)
        al.call(e, l) && l !== 'css' && l !== Ef && (u[l] = e[l]);
      return (
        (u.ref = r),
        (u.className = a),
        b.exports.createElement(
          b.exports.Fragment,
          null,
          b.exports.createElement(QS, {
            cache: t,
            serialized: s,
            isStringTag: typeof i == 'string'
          }),
          b.exports.createElement(i, u)
        )
      );
    }),
    hh = { exports: {} },
    sl = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var qS = b.exports,
    WS = Symbol.for('react.element'),
    HS = Symbol.for('react.fragment'),
    GS = Object.prototype.hasOwnProperty,
    KS =
      qS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    YS = { key: !0, ref: !0, __self: !0, __source: !0 };
  function xg(e, t, r) {
    var n,
      i = {},
      o = null,
      a = null;
    r !== void 0 && (o = '' + r),
      t.key !== void 0 && (o = '' + t.key),
      t.ref !== void 0 && (a = t.ref);
    for (n in t) GS.call(t, n) && !YS.hasOwnProperty(n) && (i[n] = t[n]);
    if (e && e.defaultProps)
      for (n in ((t = e.defaultProps), t)) i[n] === void 0 && (i[n] = t[n]);
    return {
      $$typeof: WS,
      type: e,
      key: o,
      ref: a,
      props: i,
      _owner: KS.current
    };
  }
  sl.Fragment = HS;
  sl.jsx = xg;
  sl.jsxs = xg;
  (function (e) {
    e.exports = sl;
  })(hh);
  const _v = hh.exports.jsx,
    wv = hh.exports.jsxs;
  function L(e, t, r) {
    return al.call(t, 'css') ? _v(Sg, Eg(e, t), r) : _v(e, t, r);
  }
  function Q(e, t, r) {
    return al.call(t, 'css') ? wv(Sg, Eg(e, t), r) : wv(e, t, r);
  }
  var bv = 'popstate';
  function JS(e = {}) {
    function t(n, i) {
      let { pathname: o, search: a, hash: s } = n.location;
      return Sf(
        '',
        { pathname: o, search: a, hash: s },
        (i.state && i.state.usr) || null,
        (i.state && i.state.key) || 'default'
      );
    }
    function r(n, i) {
      return typeof i == 'string' ? i : da(i);
    }
    return ZS(t, r, null, e);
  }
  function de(e, t) {
    if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
  }
  function Zt(e, t) {
    if (!e) {
      typeof console < 'u' && console.warn(t);
      try {
        throw new Error(t);
      } catch {}
    }
  }
  function XS() {
    return Math.random().toString(36).substring(2, 10);
  }
  function Ev(e, t) {
    return { usr: e.state, key: e.key, idx: t };
  }
  function Sf(e, t, r = null, n) {
    return {
      pathname: typeof e == 'string' ? e : e.pathname,
      search: '',
      hash: '',
      ...(typeof t == 'string' ? Ki(t) : t),
      state: r,
      key: (t && t.key) || n || XS()
    };
  }
  function da({ pathname: e = '/', search: t = '', hash: r = '' }) {
    return (
      t && t !== '?' && (e += t.charAt(0) === '?' ? t : '?' + t),
      r && r !== '#' && (e += r.charAt(0) === '#' ? r : '#' + r),
      e
    );
  }
  function Ki(e) {
    let t = {};
    if (e) {
      let r = e.indexOf('#');
      r >= 0 && ((t.hash = e.substring(r)), (e = e.substring(0, r)));
      let n = e.indexOf('?');
      n >= 0 && ((t.search = e.substring(n)), (e = e.substring(0, n))),
        e && (t.pathname = e);
    }
    return t;
  }
  function ZS(e, t, r, n = {}) {
    let { window: i = document.defaultView, v5Compat: o = !1 } = n,
      a = i.history,
      s = 'POP',
      u = null,
      l = c();
    l == null && ((l = 0), a.replaceState({ ...a.state, idx: l }, ''));
    function c() {
      return (a.state || { idx: null }).idx;
    }
    function d() {
      s = 'POP';
      let _ = c(),
        h = _ == null ? null : _ - l;
      (l = _), u && u({ action: s, location: g.location, delta: h });
    }
    function f(_, h) {
      s = 'PUSH';
      let p = Sf(g.location, _, h);
      r && r(p, _), (l = c() + 1);
      let m = Ev(p, l),
        w = g.createHref(p);
      try {
        a.pushState(m, '', w);
      } catch (S) {
        if (S instanceof DOMException && S.name === 'DataCloneError') throw S;
        i.location.assign(w);
      }
      o && u && u({ action: s, location: g.location, delta: 1 });
    }
    function v(_, h) {
      s = 'REPLACE';
      let p = Sf(g.location, _, h);
      r && r(p, _), (l = c());
      let m = Ev(p, l),
        w = g.createHref(p);
      a.replaceState(m, '', w),
        o && u && u({ action: s, location: g.location, delta: 0 });
    }
    function y(_) {
      return ex(_);
    }
    let g = {
      get action() {
        return s;
      },
      get location() {
        return e(i, a);
      },
      listen(_) {
        if (u) throw new Error('A history only accepts one active listener');
        return (
          i.addEventListener(bv, d),
          (u = _),
          () => {
            i.removeEventListener(bv, d), (u = null);
          }
        );
      },
      createHref(_) {
        return t(i, _);
      },
      createURL: y,
      encodeLocation(_) {
        let h = y(_);
        return { pathname: h.pathname, search: h.search, hash: h.hash };
      },
      push: f,
      replace: v,
      go(_) {
        return a.go(_);
      }
    };
    return g;
  }
  function ex(e, t = !1) {
    let r = 'http://localhost';
    typeof window < 'u' &&
      (r =
        window.location.origin !== 'null'
          ? window.location.origin
          : window.location.href),
      de(r, 'No window.location.(origin|href) available to create URL');
    let n = typeof e == 'string' ? e : da(e);
    return (
      (n = n.replace(/ $/, '%20')),
      !t && n.startsWith('//') && (n = r + n),
      new URL(n, r)
    );
  }
  function Og(e, t, r = '/') {
    return tx(e, t, r, !1);
  }
  function tx(e, t, r, n) {
    let i = typeof t == 'string' ? Ki(t) : t,
      o = br(i.pathname || '/', r);
    if (o == null) return null;
    let a = kg(e);
    rx(a);
    let s = null;
    for (let u = 0; s == null && u < a.length; ++u) {
      let l = hx(o);
      s = fx(a[u], l, n);
    }
    return s;
  }
  function kg(e, t = [], r = [], n = '') {
    let i = (o, a, s) => {
      let u = {
        relativePath: s === void 0 ? o.path || '' : s,
        caseSensitive: o.caseSensitive === !0,
        childrenIndex: a,
        route: o
      };
      u.relativePath.startsWith('/') &&
        (de(
          u.relativePath.startsWith(n),
          `Absolute route path "${u.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
        ),
        (u.relativePath = u.relativePath.slice(n.length)));
      let l = hr([n, u.relativePath]),
        c = r.concat(u);
      o.children &&
        o.children.length > 0 &&
        (de(
          o.index !== !0,
          `Index routes must not have child routes. Please remove all child routes from route path "${l}".`
        ),
        kg(o.children, t, c, l)),
        !(o.path == null && !o.index) &&
          t.push({ path: l, score: lx(l, o.index), routesMeta: c });
    };
    return (
      e.forEach((o, a) => {
        var s;
        if (o.path === '' || !((s = o.path) != null && s.includes('?')))
          i(o, a);
        else for (let u of Cg(o.path)) i(o, a, u);
      }),
      t
    );
  }
  function Cg(e) {
    let t = e.split('/');
    if (t.length === 0) return [];
    let [r, ...n] = t,
      i = r.endsWith('?'),
      o = r.replace(/\?$/, '');
    if (n.length === 0) return i ? [o, ''] : [o];
    let a = Cg(n.join('/')),
      s = [];
    return (
      s.push(...a.map(u => (u === '' ? o : [o, u].join('/')))),
      i && s.push(...a),
      s.map(u => (e.startsWith('/') && u === '' ? '/' : u))
    );
  }
  function rx(e) {
    e.sort((t, r) =>
      t.score !== r.score
        ? r.score - t.score
        : cx(
            t.routesMeta.map(n => n.childrenIndex),
            r.routesMeta.map(n => n.childrenIndex)
          )
    );
  }
  var nx = /^:[\w-]+$/,
    ix = 3,
    ox = 2,
    ax = 1,
    sx = 10,
    ux = -2,
    Sv = e => e === '*';
  function lx(e, t) {
    let r = e.split('/'),
      n = r.length;
    return (
      r.some(Sv) && (n += ux),
      t && (n += ox),
      r
        .filter(i => !Sv(i))
        .reduce((i, o) => i + (nx.test(o) ? ix : o === '' ? ax : sx), n)
    );
  }
  function cx(e, t) {
    return e.length === t.length && e.slice(0, -1).every((n, i) => n === t[i])
      ? e[e.length - 1] - t[t.length - 1]
      : 0;
  }
  function fx(e, t, r = !1) {
    let { routesMeta: n } = e,
      i = {},
      o = '/',
      a = [];
    for (let s = 0; s < n.length; ++s) {
      let u = n[s],
        l = s === n.length - 1,
        c = o === '/' ? t : t.slice(o.length) || '/',
        d = yu(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: l },
          c
        ),
        f = u.route;
      if (
        (!d &&
          l &&
          r &&
          !n[n.length - 1].route.index &&
          (d = yu(
            { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
            c
          )),
        !d)
      )
        return null;
      Object.assign(i, d.params),
        a.push({
          params: i,
          pathname: hr([o, d.pathname]),
          pathnameBase: yx(hr([o, d.pathnameBase])),
          route: f
        }),
        d.pathnameBase !== '/' && (o = hr([o, d.pathnameBase]));
    }
    return a;
  }
  function yu(e, t) {
    typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
    let [r, n] = dx(e.path, e.caseSensitive, e.end),
      i = t.match(r);
    if (!i) return null;
    let o = i[0],
      a = o.replace(/(.)\/+$/, '$1'),
      s = i.slice(1);
    return {
      params: n.reduce((l, { paramName: c, isOptional: d }, f) => {
        if (c === '*') {
          let y = s[f] || '';
          a = o.slice(0, o.length - y.length).replace(/(.)\/+$/, '$1');
        }
        const v = s[f];
        return (
          d && !v ? (l[c] = void 0) : (l[c] = (v || '').replace(/%2F/g, '/')), l
        );
      }, {}),
      pathname: o,
      pathnameBase: a,
      pattern: e
    };
  }
  function dx(e, t = !1, r = !0) {
    Zt(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      `Route path "${e}" will be treated as if it were "${e.replace(
        /\*$/,
        '/*'
      )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(
        /\*$/,
        '/*'
      )}".`
    );
    let n = [],
      i =
        '^' +
        e
          .replace(/\/*\*?$/, '')
          .replace(/^\/*/, '/')
          .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
          .replace(
            /\/:([\w-]+)(\?)?/g,
            (a, s, u) => (
              n.push({ paramName: s, isOptional: u != null }),
              u ? '/?([^\\/]+)?' : '/([^\\/]+)'
            )
          );
    return (
      e.endsWith('*')
        ? (n.push({ paramName: '*' }),
          (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
        : r
        ? (i += '\\/*$')
        : e !== '' && e !== '/' && (i += '(?:(?=\\/|$))'),
      [new RegExp(i, t ? void 0 : 'i'), n]
    );
  }
  function hx(e) {
    try {
      return e
        .split('/')
        .map(t => decodeURIComponent(t).replace(/\//g, '%2F'))
        .join('/');
    } catch (t) {
      return (
        Zt(
          !1,
          `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
        ),
        e
      );
    }
  }
  function br(e, t) {
    if (t === '/') return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let r = t.endsWith('/') ? t.length - 1 : t.length,
      n = e.charAt(r);
    return n && n !== '/' ? null : e.slice(r) || '/';
  }
  function px(e, t = '/') {
    let {
      pathname: r,
      search: n = '',
      hash: i = ''
    } = typeof e == 'string' ? Ki(e) : e;
    return {
      pathname: r ? (r.startsWith('/') ? r : vx(r, t)) : t,
      search: gx(n),
      hash: _x(i)
    };
  }
  function vx(e, t) {
    let r = t.replace(/\/+$/, '').split('/');
    return (
      e.split('/').forEach(i => {
        i === '..' ? r.length > 1 && r.pop() : i !== '.' && r.push(i);
      }),
      r.length > 1 ? r.join('/') : '/'
    );
  }
  function nc(e, t, r, n) {
    return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
      n
    )}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function mx(e) {
    return e.filter(
      (t, r) => r === 0 || (t.route.path && t.route.path.length > 0)
    );
  }
  function Tg(e) {
    let t = mx(e);
    return t.map((r, n) => (n === t.length - 1 ? r.pathname : r.pathnameBase));
  }
  function Ng(e, t, r, n = !1) {
    let i;
    typeof e == 'string'
      ? (i = Ki(e))
      : ((i = { ...e }),
        de(
          !i.pathname || !i.pathname.includes('?'),
          nc('?', 'pathname', 'search', i)
        ),
        de(
          !i.pathname || !i.pathname.includes('#'),
          nc('#', 'pathname', 'hash', i)
        ),
        de(!i.search || !i.search.includes('#'), nc('#', 'search', 'hash', i)));
    let o = e === '' || i.pathname === '',
      a = o ? '/' : i.pathname,
      s;
    if (a == null) s = r;
    else {
      let d = t.length - 1;
      if (!n && a.startsWith('..')) {
        let f = a.split('/');
        for (; f[0] === '..'; ) f.shift(), (d -= 1);
        i.pathname = f.join('/');
      }
      s = d >= 0 ? t[d] : '/';
    }
    let u = px(i, s),
      l = a && a !== '/' && a.endsWith('/'),
      c = (o || a === '.') && r.endsWith('/');
    return !u.pathname.endsWith('/') && (l || c) && (u.pathname += '/'), u;
  }
  var hr = e => e.join('/').replace(/\/\/+/g, '/'),
    yx = e => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
    gx = e => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
    _x = e => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
  function wx(e) {
    return (
      e != null &&
      typeof e.status == 'number' &&
      typeof e.statusText == 'string' &&
      typeof e.internal == 'boolean' &&
      'data' in e
    );
  }
  var bx = ['POST', 'PUT', 'PATCH', 'DELETE'];
  [...bx];
  var Yi = b.exports.createContext(null);
  Yi.displayName = 'DataRouter';
  var ul = b.exports.createContext(null);
  ul.displayName = 'DataRouterState';
  var Dg = b.exports.createContext({ isTransitioning: !1 });
  Dg.displayName = 'ViewTransition';
  var Ex = b.exports.createContext(new Map());
  Ex.displayName = 'Fetchers';
  var Sx = b.exports.createContext(null);
  Sx.displayName = 'Await';
  var tr = b.exports.createContext(null);
  tr.displayName = 'Navigation';
  var Ta = b.exports.createContext(null);
  Ta.displayName = 'Location';
  var rr = b.exports.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
  });
  rr.displayName = 'Route';
  var ph = b.exports.createContext(null);
  ph.displayName = 'RouteError';
  function xx(e, { relative: t } = {}) {
    de(
      Na(),
      'useHref() may be used only in the context of a <Router> component.'
    );
    let { basename: r, navigator: n } = b.exports.useContext(tr),
      { hash: i, pathname: o, search: a } = Da(e, { relative: t }),
      s = o;
    return (
      r !== '/' && (s = o === '/' ? r : hr([r, o])),
      n.createHref({ pathname: s, search: a, hash: i })
    );
  }
  function Na() {
    return b.exports.useContext(Ta) != null;
  }
  function $n() {
    return (
      de(
        Na(),
        'useLocation() may be used only in the context of a <Router> component.'
      ),
      b.exports.useContext(Ta).location
    );
  }
  var Rg =
    'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
  function Pg(e) {
    b.exports.useContext(tr).static || b.exports.useLayoutEffect(e);
  }
  function Ox() {
    let { isDataRoute: e } = b.exports.useContext(rr);
    return e ? Vx() : kx();
  }
  function kx() {
    de(
      Na(),
      'useNavigate() may be used only in the context of a <Router> component.'
    );
    let e = b.exports.useContext(Yi),
      { basename: t, navigator: r } = b.exports.useContext(tr),
      { matches: n } = b.exports.useContext(rr),
      { pathname: i } = $n(),
      o = JSON.stringify(Tg(n)),
      a = b.exports.useRef(!1);
    return (
      Pg(() => {
        a.current = !0;
      }),
      b.exports.useCallback(
        (u, l = {}) => {
          if ((Zt(a.current, Rg), !a.current)) return;
          if (typeof u == 'number') {
            r.go(u);
            return;
          }
          let c = Ng(u, JSON.parse(o), i, l.relative === 'path');
          e == null &&
            t !== '/' &&
            (c.pathname = c.pathname === '/' ? t : hr([t, c.pathname])),
            (l.replace ? r.replace : r.push)(c, l.state, l);
        },
        [t, r, o, i, e]
      )
    );
  }
  b.exports.createContext(null);
  function Cx() {
    let { matches: e } = b.exports.useContext(rr),
      t = e[e.length - 1];
    return t ? t.params : {};
  }
  function Da(e, { relative: t } = {}) {
    let { matches: r } = b.exports.useContext(rr),
      { pathname: n } = $n(),
      i = JSON.stringify(Tg(r));
    return b.exports.useMemo(
      () => Ng(e, JSON.parse(i), n, t === 'path'),
      [e, i, n, t]
    );
  }
  function Tx(e, t) {
    return Ag(e, t);
  }
  function Ag(e, t, r, n) {
    var h;
    de(
      Na(),
      'useRoutes() may be used only in the context of a <Router> component.'
    );
    let { navigator: i } = b.exports.useContext(tr),
      { matches: o } = b.exports.useContext(rr),
      a = o[o.length - 1],
      s = a ? a.params : {},
      u = a ? a.pathname : '/',
      l = a ? a.pathnameBase : '/',
      c = a && a.route;
    {
      let p = (c && c.path) || '';
      Ig(
        u,
        !c || p.endsWith('*') || p.endsWith('*?'),
        `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${p}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${p}"> to <Route path="${
          p === '/' ? '*' : `${p}/*`
        }">.`
      );
    }
    let d = $n(),
      f;
    if (t) {
      let p = typeof t == 'string' ? Ki(t) : t;
      de(
        l === '/' || ((h = p.pathname) == null ? void 0 : h.startsWith(l)),
        `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${p.pathname}" was given in the \`location\` prop.`
      ),
        (f = p);
    } else f = d;
    let v = f.pathname || '/',
      y = v;
    if (l !== '/') {
      let p = l.replace(/^\//, '').split('/'),
        m = v.replace(/^\//, '').split('/');
      y = '/' + m.slice(p.length).join('/');
    }
    let g = Og(e, { pathname: y });
    Zt(
      c || g != null,
      `No routes matched location "${f.pathname}${f.search}${f.hash}" `
    ),
      Zt(
        g == null ||
          g[g.length - 1].route.element !== void 0 ||
          g[g.length - 1].route.Component !== void 0 ||
          g[g.length - 1].route.lazy !== void 0,
        `Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
      );
    let _ = Ax(
      g &&
        g.map(p =>
          Object.assign({}, p, {
            params: Object.assign({}, s, p.params),
            pathname: hr([
              l,
              i.encodeLocation
                ? i.encodeLocation(p.pathname).pathname
                : p.pathname
            ]),
            pathnameBase:
              p.pathnameBase === '/'
                ? l
                : hr([
                    l,
                    i.encodeLocation
                      ? i.encodeLocation(p.pathnameBase).pathname
                      : p.pathnameBase
                  ])
          })
        ),
      o,
      r,
      n
    );
    return t && _
      ? b.exports.createElement(
          Ta.Provider,
          {
            value: {
              location: {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
                ...f
              },
              navigationType: 'POP'
            }
          },
          _
        )
      : _;
  }
  function Nx() {
    let e = jx(),
      t = wx(e)
        ? `${e.status} ${e.statusText}`
        : e instanceof Error
        ? e.message
        : JSON.stringify(e),
      r = e instanceof Error ? e.stack : null,
      n = 'rgba(200,200,200, 0.5)',
      i = { padding: '0.5rem', backgroundColor: n },
      o = { padding: '2px 4px', backgroundColor: n },
      a = null;
    return (
      console.error('Error handled by React Router default ErrorBoundary:', e),
      (a = b.exports.createElement(
        b.exports.Fragment,
        null,
        b.exports.createElement('p', null, '\u{1F4BF} Hey developer \u{1F44B}'),
        b.exports.createElement(
          'p',
          null,
          'You can provide a way better UX than this when your app throws errors by providing your own ',
          b.exports.createElement('code', { style: o }, 'ErrorBoundary'),
          ' or',
          ' ',
          b.exports.createElement('code', { style: o }, 'errorElement'),
          ' prop on your route.'
        )
      )),
      b.exports.createElement(
        b.exports.Fragment,
        null,
        b.exports.createElement('h2', null, 'Unexpected Application Error!'),
        b.exports.createElement('h3', { style: { fontStyle: 'italic' } }, t),
        r ? b.exports.createElement('pre', { style: i }, r) : null,
        a
      )
    );
  }
  var Dx = b.exports.createElement(Nx, null),
    Rx = class extends b.exports.Component {
      constructor(e) {
        super(e),
          (this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error
          });
      }
      static getDerivedStateFromError(e) {
        return { error: e };
      }
      static getDerivedStateFromProps(e, t) {
        return t.location !== e.location ||
          (t.revalidation !== 'idle' && e.revalidation === 'idle')
          ? {
              error: e.error,
              location: e.location,
              revalidation: e.revalidation
            }
          : {
              error: e.error !== void 0 ? e.error : t.error,
              location: t.location,
              revalidation: e.revalidation || t.revalidation
            };
      }
      componentDidCatch(e, t) {
        console.error(
          'React Router caught the following error during render',
          e,
          t
        );
      }
      render() {
        return this.state.error !== void 0
          ? b.exports.createElement(
              rr.Provider,
              { value: this.props.routeContext },
              b.exports.createElement(ph.Provider, {
                value: this.state.error,
                children: this.props.component
              })
            )
          : this.props.children;
      }
    };
  function Px({ routeContext: e, match: t, children: r }) {
    let n = b.exports.useContext(Yi);
    return (
      n &&
        n.static &&
        n.staticContext &&
        (t.route.errorElement || t.route.ErrorBoundary) &&
        (n.staticContext._deepestRenderedBoundaryId = t.route.id),
      b.exports.createElement(rr.Provider, { value: e }, r)
    );
  }
  function Ax(e, t = [], r = null, n = null) {
    if (e == null) {
      if (!r) return null;
      if (r.errors) e = r.matches;
      else if (t.length === 0 && !r.initialized && r.matches.length > 0)
        e = r.matches;
      else return null;
    }
    let i = e,
      o = r == null ? void 0 : r.errors;
    if (o != null) {
      let u = i.findIndex(
        l => l.route.id && (o == null ? void 0 : o[l.route.id]) !== void 0
      );
      de(
        u >= 0,
        `Could not find a matching route for errors on route IDs: ${Object.keys(
          o
        ).join(',')}`
      ),
        (i = i.slice(0, Math.min(i.length, u + 1)));
    }
    let a = !1,
      s = -1;
    if (r)
      for (let u = 0; u < i.length; u++) {
        let l = i[u];
        if (
          ((l.route.HydrateFallback || l.route.hydrateFallbackElement) &&
            (s = u),
          l.route.id)
        ) {
          let { loaderData: c, errors: d } = r,
            f =
              l.route.loader &&
              !c.hasOwnProperty(l.route.id) &&
              (!d || d[l.route.id] === void 0);
          if (l.route.lazy || f) {
            (a = !0), s >= 0 ? (i = i.slice(0, s + 1)) : (i = [i[0]]);
            break;
          }
        }
      }
    return i.reduceRight((u, l, c) => {
      let d,
        f = !1,
        v = null,
        y = null;
      r &&
        ((d = o && l.route.id ? o[l.route.id] : void 0),
        (v = l.route.errorElement || Dx),
        a &&
          (s < 0 && c === 0
            ? (Ig(
                'route-fallback',
                !1,
                'No `HydrateFallback` element provided to render during initial hydration'
              ),
              (f = !0),
              (y = null))
            : s === c &&
              ((f = !0), (y = l.route.hydrateFallbackElement || null))));
      let g = t.concat(i.slice(0, c + 1)),
        _ = () => {
          let h;
          return (
            d
              ? (h = v)
              : f
              ? (h = y)
              : l.route.Component
              ? (h = b.exports.createElement(l.route.Component, null))
              : l.route.element
              ? (h = l.route.element)
              : (h = u),
            b.exports.createElement(Px, {
              match: l,
              routeContext: { outlet: u, matches: g, isDataRoute: r != null },
              children: h
            })
          );
        };
      return r && (l.route.ErrorBoundary || l.route.errorElement || c === 0)
        ? b.exports.createElement(Rx, {
            location: r.location,
            revalidation: r.revalidation,
            component: v,
            error: d,
            children: _(),
            routeContext: { outlet: null, matches: g, isDataRoute: !0 }
          })
        : _();
    }, null);
  }
  function vh(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function Ix(e) {
    let t = b.exports.useContext(Yi);
    return de(t, vh(e)), t;
  }
  function Fx(e) {
    let t = b.exports.useContext(ul);
    return de(t, vh(e)), t;
  }
  function Lx(e) {
    let t = b.exports.useContext(rr);
    return de(t, vh(e)), t;
  }
  function mh(e) {
    let t = Lx(e),
      r = t.matches[t.matches.length - 1];
    return (
      de(
        r.route.id,
        `${e} can only be used on routes that contain a unique "id"`
      ),
      r.route.id
    );
  }
  function Mx() {
    return mh('useRouteId');
  }
  function jx() {
    var n;
    let e = b.exports.useContext(ph),
      t = Fx('useRouteError'),
      r = mh('useRouteError');
    return e !== void 0 ? e : (n = t.errors) == null ? void 0 : n[r];
  }
  function Vx() {
    let { router: e } = Ix('useNavigate'),
      t = mh('useNavigate'),
      r = b.exports.useRef(!1);
    return (
      Pg(() => {
        r.current = !0;
      }),
      b.exports.useCallback(
        async (i, o = {}) => {
          Zt(r.current, Rg),
            r.current &&
              (typeof i == 'number'
                ? e.navigate(i)
                : await e.navigate(i, { fromRouteId: t, ...o }));
        },
        [e, t]
      )
    );
  }
  var xv = {};
  function Ig(e, t, r) {
    !t && !xv[e] && ((xv[e] = !0), Zt(!1, r));
  }
  b.exports.memo($x);
  function $x({ routes: e, future: t, state: r }) {
    return Ag(e, void 0, r, t);
  }
  function Fg(e) {
    de(
      !1,
      'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
    );
  }
  function zx({
    basename: e = '/',
    children: t = null,
    location: r,
    navigationType: n = 'POP',
    navigator: i,
    static: o = !1
  }) {
    de(
      !Na(),
      'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
    );
    let a = e.replace(/^\/*/, '/'),
      s = b.exports.useMemo(
        () => ({ basename: a, navigator: i, static: o, future: {} }),
        [a, i, o]
      );
    typeof r == 'string' && (r = Ki(r));
    let {
        pathname: u = '/',
        search: l = '',
        hash: c = '',
        state: d = null,
        key: f = 'default'
      } = r,
      v = b.exports.useMemo(() => {
        let y = br(u, a);
        return y == null
          ? null
          : {
              location: { pathname: y, search: l, hash: c, state: d, key: f },
              navigationType: n
            };
      }, [a, u, l, c, d, f, n]);
    return (
      Zt(
        v != null,
        `<Router basename="${a}"> is not able to match the URL "${u}${l}${c}" because it does not start with the basename, so the <Router> won't render anything.`
      ),
      v == null
        ? null
        : L(tr.Provider, {
            value: s,
            children: L(Ta.Provider, { children: t, value: v })
          })
    );
  }
  function Bx({ children: e, location: t }) {
    return Tx(xf(e), t);
  }
  function xf(e, t = []) {
    let r = [];
    return (
      b.exports.Children.forEach(e, (n, i) => {
        if (!b.exports.isValidElement(n)) return;
        let o = [...t, i];
        if (n.type === b.exports.Fragment) {
          r.push.apply(r, xf(n.props.children, o));
          return;
        }
        de(
          n.type === Fg,
          `[${
            typeof n.type == 'string' ? n.type : n.type.name
          }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
        ),
          de(
            !n.props.index || !n.props.children,
            'An index route cannot have child routes.'
          );
        let a = {
          id: n.props.id || o.join('-'),
          caseSensitive: n.props.caseSensitive,
          element: n.props.element,
          Component: n.props.Component,
          index: n.props.index,
          path: n.props.path,
          loader: n.props.loader,
          action: n.props.action,
          hydrateFallbackElement: n.props.hydrateFallbackElement,
          HydrateFallback: n.props.HydrateFallback,
          errorElement: n.props.errorElement,
          ErrorBoundary: n.props.ErrorBoundary,
          hasErrorBoundary:
            n.props.hasErrorBoundary === !0 ||
            n.props.ErrorBoundary != null ||
            n.props.errorElement != null,
          shouldRevalidate: n.props.shouldRevalidate,
          handle: n.props.handle,
          lazy: n.props.lazy
        };
        n.props.children && (a.children = xf(n.props.children, o)), r.push(a);
      }),
      r
    );
  }
  var Ds = 'get',
    Rs = 'application/x-www-form-urlencoded';
  function ll(e) {
    return e != null && typeof e.tagName == 'string';
  }
  function Ux(e) {
    return ll(e) && e.tagName.toLowerCase() === 'button';
  }
  function Qx(e) {
    return ll(e) && e.tagName.toLowerCase() === 'form';
  }
  function qx(e) {
    return ll(e) && e.tagName.toLowerCase() === 'input';
  }
  function Wx(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
  }
  function Hx(e, t) {
    return e.button === 0 && (!t || t === '_self') && !Wx(e);
  }
  var as = null;
  function Gx() {
    if (as === null)
      try {
        new FormData(document.createElement('form'), 0), (as = !1);
      } catch {
        as = !0;
      }
    return as;
  }
  var Kx = new Set([
    'application/x-www-form-urlencoded',
    'multipart/form-data',
    'text/plain'
  ]);
  function ic(e) {
    return e != null && !Kx.has(e)
      ? (Zt(
          !1,
          `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Rs}"`
        ),
        null)
      : e;
  }
  function Yx(e, t) {
    let r, n, i, o, a;
    if (Qx(e)) {
      let s = e.getAttribute('action');
      (n = s ? br(s, t) : null),
        (r = e.getAttribute('method') || Ds),
        (i = ic(e.getAttribute('enctype')) || Rs),
        (o = new FormData(e));
    } else if (
      Ux(e) ||
      (qx(e) && (e.type === 'submit' || e.type === 'image'))
    ) {
      let s = e.form;
      if (s == null)
        throw new Error(
          'Cannot submit a <button> or <input type="submit"> without a <form>'
        );
      let u = e.getAttribute('formaction') || s.getAttribute('action');
      if (
        ((n = u ? br(u, t) : null),
        (r = e.getAttribute('formmethod') || s.getAttribute('method') || Ds),
        (i =
          ic(e.getAttribute('formenctype')) ||
          ic(s.getAttribute('enctype')) ||
          Rs),
        (o = new FormData(s, e)),
        !Gx())
      ) {
        let { name: l, type: c, value: d } = e;
        if (c === 'image') {
          let f = l ? `${l}.` : '';
          o.append(`${f}x`, '0'), o.append(`${f}y`, '0');
        } else l && o.append(l, d);
      }
    } else {
      if (ll(e))
        throw new Error(
          'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
        );
      (r = Ds), (n = null), (i = Rs), (a = e);
    }
    return (
      o && i === 'text/plain' && ((a = o), (o = void 0)),
      { action: n, method: r.toLowerCase(), encType: i, formData: o, body: a }
    );
  }
  function yh(e, t) {
    if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
  }
  async function Jx(e, t) {
    if (e.id in t) return t[e.id];
    try {
      let r = await ME(() => import(e.module), []);
      return (t[e.id] = r), r;
    } catch (r) {
      return (
        console.error(
          `Error loading route module \`${e.module}\`, reloading page...`
        ),
        console.error(r),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise(() => {})
      );
    }
  }
  function Xx(e) {
    return e != null && typeof e.page == 'string';
  }
  function Zx(e) {
    return e == null
      ? !1
      : e.href == null
      ? e.rel === 'preload' &&
        typeof e.imageSrcSet == 'string' &&
        typeof e.imageSizes == 'string'
      : typeof e.rel == 'string' && typeof e.href == 'string';
  }
  async function eO(e, t, r) {
    let n = await Promise.all(
      e.map(async i => {
        let o = t.routes[i.route.id];
        if (o) {
          let a = await Jx(o, r);
          return a.links ? a.links() : [];
        }
        return [];
      })
    );
    return iO(
      n
        .flat(1)
        .filter(Zx)
        .filter(i => i.rel === 'stylesheet' || i.rel === 'preload')
        .map(i =>
          i.rel === 'stylesheet'
            ? { ...i, rel: 'prefetch', as: 'style' }
            : { ...i, rel: 'prefetch' }
        )
    );
  }
  function Ov(e, t, r, n, i, o) {
    let a = (u, l) => (r[l] ? u.route.id !== r[l].route.id : !0),
      s = (u, l) => {
        var c;
        return (
          r[l].pathname !== u.pathname ||
          (((c = r[l].route.path) == null ? void 0 : c.endsWith('*')) &&
            r[l].params['*'] !== u.params['*'])
        );
      };
    return o === 'assets'
      ? t.filter((u, l) => a(u, l) || s(u, l))
      : o === 'data'
      ? t.filter((u, l) => {
          var d;
          let c = n.routes[u.route.id];
          if (!c || !c.hasLoader) return !1;
          if (a(u, l) || s(u, l)) return !0;
          if (u.route.shouldRevalidate) {
            let f = u.route.shouldRevalidate({
              currentUrl: new URL(
                i.pathname + i.search + i.hash,
                window.origin
              ),
              currentParams: ((d = r[0]) == null ? void 0 : d.params) || {},
              nextUrl: new URL(e, window.origin),
              nextParams: u.params,
              defaultShouldRevalidate: !0
            });
            if (typeof f == 'boolean') return f;
          }
          return !0;
        })
      : [];
  }
  function tO(e, t, { includeHydrateFallback: r } = {}) {
    return rO(
      e
        .map(n => {
          let i = t.routes[n.route.id];
          if (!i) return [];
          let o = [i.module];
          return (
            i.clientActionModule && (o = o.concat(i.clientActionModule)),
            i.clientLoaderModule && (o = o.concat(i.clientLoaderModule)),
            r &&
              i.hydrateFallbackModule &&
              (o = o.concat(i.hydrateFallbackModule)),
            i.imports && (o = o.concat(i.imports)),
            o
          );
        })
        .flat(1)
    );
  }
  function rO(e) {
    return [...new Set(e)];
  }
  function nO(e) {
    let t = {},
      r = Object.keys(e).sort();
    for (let n of r) t[n] = e[n];
    return t;
  }
  function iO(e, t) {
    let r = new Set(),
      n = new Set(t);
    return e.reduce((i, o) => {
      if (t && !Xx(o) && o.as === 'script' && o.href && n.has(o.href)) return i;
      let s = JSON.stringify(nO(o));
      return r.has(s) || (r.add(s), i.push({ key: s, link: o })), i;
    }, []);
  }
  Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
  var oO = new Set([100, 101, 204, 205]);
  function aO(e, t) {
    let r =
      typeof e == 'string'
        ? new URL(
            e,
            typeof window > 'u'
              ? 'server://singlefetch/'
              : window.location.origin
          )
        : e;
    return (
      r.pathname === '/'
        ? (r.pathname = '_root.data')
        : t && br(r.pathname, t) === '/'
        ? (r.pathname = `${t.replace(/\/$/, '')}/_root.data`)
        : (r.pathname = `${r.pathname.replace(/\/$/, '')}.data`),
      r
    );
  }
  function Lg() {
    let e = b.exports.useContext(Yi);
    return (
      yh(
        e,
        'You must render this element inside a <DataRouterContext.Provider> element'
      ),
      e
    );
  }
  function sO() {
    let e = b.exports.useContext(ul);
    return (
      yh(
        e,
        'You must render this element inside a <DataRouterStateContext.Provider> element'
      ),
      e
    );
  }
  var gh = b.exports.createContext(void 0);
  gh.displayName = 'FrameworkContext';
  function Mg() {
    let e = b.exports.useContext(gh);
    return (
      yh(e, 'You must render this element inside a <HydratedRouter> element'), e
    );
  }
  function uO(e, t) {
    let r = b.exports.useContext(gh),
      [n, i] = b.exports.useState(!1),
      [o, a] = b.exports.useState(!1),
      {
        onFocus: s,
        onBlur: u,
        onMouseEnter: l,
        onMouseLeave: c,
        onTouchStart: d
      } = t,
      f = b.exports.useRef(null);
    b.exports.useEffect(() => {
      if ((e === 'render' && a(!0), e === 'viewport')) {
        let g = h => {
            h.forEach(p => {
              a(p.isIntersecting);
            });
          },
          _ = new IntersectionObserver(g, { threshold: 0.5 });
        return (
          f.current && _.observe(f.current),
          () => {
            _.disconnect();
          }
        );
      }
    }, [e]),
      b.exports.useEffect(() => {
        if (n) {
          let g = setTimeout(() => {
            a(!0);
          }, 100);
          return () => {
            clearTimeout(g);
          };
        }
      }, [n]);
    let v = () => {
        i(!0);
      },
      y = () => {
        i(!1), a(!1);
      };
    return r
      ? e !== 'intent'
        ? [o, f, {}]
        : [
            o,
            f,
            {
              onFocus: vo(s, v),
              onBlur: vo(u, y),
              onMouseEnter: vo(l, v),
              onMouseLeave: vo(c, y),
              onTouchStart: vo(d, v)
            }
          ]
      : [!1, f, {}];
  }
  function vo(e, t) {
    return r => {
      e && e(r), r.defaultPrevented || t(r);
    };
  }
  function lO({ page: e, ...t }) {
    let { router: r } = Lg(),
      n = b.exports.useMemo(
        () => Og(r.routes, e, r.basename),
        [r.routes, e, r.basename]
      );
    return n
      ? b.exports.createElement(fO, { page: e, matches: n, ...t })
      : null;
  }
  function cO(e) {
    let { manifest: t, routeModules: r } = Mg(),
      [n, i] = b.exports.useState([]);
    return (
      b.exports.useEffect(() => {
        let o = !1;
        return (
          eO(e, t, r).then(a => {
            o || i(a);
          }),
          () => {
            o = !0;
          }
        );
      }, [e, t, r]),
      n
    );
  }
  function fO({ page: e, matches: t, ...r }) {
    let n = $n(),
      { manifest: i, routeModules: o } = Mg(),
      { basename: a } = Lg(),
      { loaderData: s, matches: u } = sO(),
      l = b.exports.useMemo(() => Ov(e, t, u, i, n, 'data'), [e, t, u, i, n]),
      c = b.exports.useMemo(() => Ov(e, t, u, i, n, 'assets'), [e, t, u, i, n]),
      d = b.exports.useMemo(() => {
        if (e === n.pathname + n.search + n.hash) return [];
        let y = new Set(),
          g = !1;
        if (
          (t.forEach(h => {
            var m;
            let p = i.routes[h.route.id];
            !p ||
              !p.hasLoader ||
              ((!l.some(w => w.route.id === h.route.id) &&
                h.route.id in s &&
                ((m = o[h.route.id]) == null ? void 0 : m.shouldRevalidate)) ||
              p.hasClientLoader
                ? (g = !0)
                : y.add(h.route.id));
          }),
          y.size === 0)
        )
          return [];
        let _ = aO(e, a);
        return (
          g &&
            y.size > 0 &&
            _.searchParams.set(
              '_routes',
              t
                .filter(h => y.has(h.route.id))
                .map(h => h.route.id)
                .join(',')
            ),
          [_.pathname + _.search]
        );
      }, [a, s, n, i, l, t, e, o]),
      f = b.exports.useMemo(() => tO(c, i), [c, i]),
      v = cO(c);
    return b.exports.createElement(
      b.exports.Fragment,
      null,
      d.map(y =>
        b.exports.createElement('link', {
          key: y,
          rel: 'prefetch',
          as: 'fetch',
          href: y,
          ...r
        })
      ),
      f.map(y =>
        b.exports.createElement('link', {
          key: y,
          rel: 'modulepreload',
          href: y,
          ...r
        })
      ),
      v.map(({ key: y, link: g }) =>
        b.exports.createElement('link', { key: y, ...g })
      )
    );
  }
  function dO(...e) {
    return t => {
      e.forEach(r => {
        typeof r == 'function' ? r(t) : r != null && (r.current = t);
      });
    };
  }
  var jg =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u';
  try {
    jg && (window.__reactRouterVersion = '7.6.2');
  } catch {}
  function hO({ basename: e, children: t, window: r }) {
    let n = b.exports.useRef();
    n.current == null && (n.current = JS({ window: r, v5Compat: !0 }));
    let i = n.current,
      [o, a] = b.exports.useState({ action: i.action, location: i.location }),
      s = b.exports.useCallback(
        u => {
          b.exports.startTransition(() => a(u));
        },
        [a]
      );
    return (
      b.exports.useLayoutEffect(() => i.listen(s), [i, s]),
      b.exports.createElement(zx, {
        basename: e,
        children: t,
        location: o.location,
        navigationType: o.action,
        navigator: i
      })
    );
  }
  var Vg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    zr = b.exports.forwardRef(function (
      {
        onClick: t,
        discover: r = 'render',
        prefetch: n = 'none',
        relative: i,
        reloadDocument: o,
        replace: a,
        state: s,
        target: u,
        to: l,
        preventScrollReset: c,
        viewTransition: d,
        ...f
      },
      v
    ) {
      let { basename: y } = b.exports.useContext(tr),
        g = typeof l == 'string' && Vg.test(l),
        _,
        h = !1;
      if (typeof l == 'string' && g && ((_ = l), jg))
        try {
          let M = new URL(window.location.href),
            I = l.startsWith('//') ? new URL(M.protocol + l) : new URL(l),
            ne = br(I.pathname, y);
          I.origin === M.origin && ne != null
            ? (l = ne + I.search + I.hash)
            : (h = !0);
        } catch {
          Zt(
            !1,
            `<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
          );
        }
      let p = xx(l, { relative: i }),
        [m, w, S] = uO(n, f),
        x = yO(l, {
          replace: a,
          state: s,
          target: u,
          preventScrollReset: c,
          relative: i,
          viewTransition: d
        });
      function O(M) {
        t && t(M), M.defaultPrevented || x(M);
      }
      let C = b.exports.createElement('a', {
        ...f,
        ...S,
        href: _ || p,
        onClick: h || o ? t : O,
        ref: dO(v, w),
        target: u,
        'data-discover': !g && r === 'render' ? 'true' : void 0
      });
      return m && !g
        ? b.exports.createElement(
            b.exports.Fragment,
            null,
            C,
            b.exports.createElement(lO, { page: p })
          )
        : C;
    });
  zr.displayName = 'Link';
  var pO = b.exports.forwardRef(function (
    {
      'aria-current': t = 'page',
      caseSensitive: r = !1,
      className: n = '',
      end: i = !1,
      style: o,
      to: a,
      viewTransition: s,
      children: u,
      ...l
    },
    c
  ) {
    let d = Da(a, { relative: l.relative }),
      f = $n(),
      v = b.exports.useContext(ul),
      { navigator: y, basename: g } = b.exports.useContext(tr),
      _ = v != null && EO(d) && s === !0,
      h = y.encodeLocation ? y.encodeLocation(d).pathname : d.pathname,
      p = f.pathname,
      m =
        v && v.navigation && v.navigation.location
          ? v.navigation.location.pathname
          : null;
    r ||
      ((p = p.toLowerCase()),
      (m = m ? m.toLowerCase() : null),
      (h = h.toLowerCase())),
      m && g && (m = br(m, g) || m);
    const w = h !== '/' && h.endsWith('/') ? h.length - 1 : h.length;
    let S = p === h || (!i && p.startsWith(h) && p.charAt(w) === '/'),
      x =
        m != null &&
        (m === h || (!i && m.startsWith(h) && m.charAt(h.length) === '/')),
      O = { isActive: S, isPending: x, isTransitioning: _ },
      C = S ? t : void 0,
      M;
    typeof n == 'function'
      ? (M = n(O))
      : (M = [
          n,
          S ? 'active' : null,
          x ? 'pending' : null,
          _ ? 'transitioning' : null
        ]
          .filter(Boolean)
          .join(' '));
    let I = typeof o == 'function' ? o(O) : o;
    return b.exports.createElement(
      zr,
      {
        ...l,
        'aria-current': C,
        className: M,
        ref: c,
        style: I,
        to: a,
        viewTransition: s
      },
      typeof u == 'function' ? u(O) : u
    );
  });
  pO.displayName = 'NavLink';
  var vO = b.exports.forwardRef(
    (
      {
        discover: e = 'render',
        fetcherKey: t,
        navigate: r,
        reloadDocument: n,
        replace: i,
        state: o,
        method: a = Ds,
        action: s,
        onSubmit: u,
        relative: l,
        preventScrollReset: c,
        viewTransition: d,
        ...f
      },
      v
    ) => {
      let y = wO(),
        g = bO(s, { relative: l }),
        _ = a.toLowerCase() === 'get' ? 'get' : 'post',
        h = typeof s == 'string' && Vg.test(s),
        p = m => {
          if ((u && u(m), m.defaultPrevented)) return;
          m.preventDefault();
          let w = m.nativeEvent.submitter,
            S = (w == null ? void 0 : w.getAttribute('formmethod')) || a;
          y(w || m.currentTarget, {
            fetcherKey: t,
            method: S,
            navigate: r,
            replace: i,
            state: o,
            relative: l,
            preventScrollReset: c,
            viewTransition: d
          });
        };
      return b.exports.createElement('form', {
        ref: v,
        method: _,
        action: g,
        onSubmit: n ? u : p,
        ...f,
        'data-discover': !h && e === 'render' ? 'true' : void 0
      });
    }
  );
  vO.displayName = 'Form';
  function mO(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function $g(e) {
    let t = b.exports.useContext(Yi);
    return de(t, mO(e)), t;
  }
  function yO(
    e,
    {
      target: t,
      replace: r,
      state: n,
      preventScrollReset: i,
      relative: o,
      viewTransition: a
    } = {}
  ) {
    let s = Ox(),
      u = $n(),
      l = Da(e, { relative: o });
    return b.exports.useCallback(
      c => {
        if (Hx(c, t)) {
          c.preventDefault();
          let d = r !== void 0 ? r : da(u) === da(l);
          s(e, {
            replace: d,
            state: n,
            preventScrollReset: i,
            relative: o,
            viewTransition: a
          });
        }
      },
      [u, s, l, r, n, t, e, i, o, a]
    );
  }
  var gO = 0,
    _O = () => `__${String(++gO)}__`;
  function wO() {
    let { router: e } = $g('useSubmit'),
      { basename: t } = b.exports.useContext(tr),
      r = Mx();
    return b.exports.useCallback(
      async (n, i = {}) => {
        let {
          action: o,
          method: a,
          encType: s,
          formData: u,
          body: l
        } = Yx(n, t);
        if (i.navigate === !1) {
          let c = i.fetcherKey || _O();
          await e.fetch(c, r, i.action || o, {
            preventScrollReset: i.preventScrollReset,
            formData: u,
            body: l,
            formMethod: i.method || a,
            formEncType: i.encType || s,
            flushSync: i.flushSync
          });
        } else
          await e.navigate(i.action || o, {
            preventScrollReset: i.preventScrollReset,
            formData: u,
            body: l,
            formMethod: i.method || a,
            formEncType: i.encType || s,
            replace: i.replace,
            state: i.state,
            fromRouteId: r,
            flushSync: i.flushSync,
            viewTransition: i.viewTransition
          });
      },
      [e, t, r]
    );
  }
  function bO(e, { relative: t } = {}) {
    let { basename: r } = b.exports.useContext(tr),
      n = b.exports.useContext(rr);
    de(n, 'useFormAction must be used inside a RouteContext');
    let [i] = n.matches.slice(-1),
      o = { ...Da(e || '.', { relative: t }) },
      a = $n();
    if (e == null) {
      o.search = a.search;
      let s = new URLSearchParams(o.search),
        u = s.getAll('index');
      if (u.some(c => c === '')) {
        s.delete('index'), u.filter(d => d).forEach(d => s.append('index', d));
        let c = s.toString();
        o.search = c ? `?${c}` : '';
      }
    }
    return (
      (!e || e === '.') &&
        i.route.index &&
        (o.search = o.search ? o.search.replace(/^\?/, '?index&') : '?index'),
      r !== '/' && (o.pathname = o.pathname === '/' ? r : hr([r, o.pathname])),
      da(o)
    );
  }
  function EO(e, t = {}) {
    let r = b.exports.useContext(Dg);
    de(
      r != null,
      "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
    );
    let { basename: n } = $g('useViewTransitionState'),
      i = Da(e, { relative: t.relative });
    if (!r.isTransitioning) return !1;
    let o = br(r.currentLocation.pathname, n) || r.currentLocation.pathname,
      a = br(r.nextLocation.pathname, n) || r.nextLocation.pathname;
    return yu(i.pathname, a) != null || yu(i.pathname, o) != null;
  }
  [...oO];
  const SO = () =>
    Q('header', {
      className: 'header',
      children: [
        Q('nav', {
          className: 'header__nav nav',
          children: [
            L(zr, {
              to: '/',
              className: 'nav__link link',
              children: L(AE, { className: 'link__img' })
            }),
            Q('button', {
              className: 'nav__button button',
              children: [
                L(IE, { className: 'button__icon' }),
                L('span', {
                  className: 'button__text',
                  children: '\u041A\u0430\u0442\u0430\u043B\u043E\u0433'
                })
              ]
            })
          ]
        }),
        Q('div', {
          className: 'header__info info',
          children: [
            Q('div', {
              className: 'info__contacts',
              children: [
                L(zr, {
                  target: '_blank',
                  to: 'https://yandex.ru/maps/-/CHG8rE9l',
                  className: 'info__link info__link_address',
                  children:
                    '\u041C\u043E\u0441\u043A\u0432\u0430, \u0412\u043E\u043B\u0433\u043E\u0433\u0440\u0430\u0434\u0441\u043A\u0438\u0439 \u043F\u0440-\u043A\u0442, 43, \u0441\u0442\u0440 1'
                }),
                L(zr, {
                  className: 'info__link info__link_tel',
                  target: '_blank',
                  to: 'tel:78005553535',
                  children: '+7 800 555 35 35'
                })
              ]
            }),
            Q(zr, {
              to: '/favorites',
              className: 'info__favorites',
              children: [
                L(sg, { className: 'favorites__icon' }),
                L('span', {
                  className: 'favorites__text',
                  children:
                    '\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435'
                })
              ]
            })
          ]
        })
      ]
    });
  var Of = function (e, t) {
    return (
      (Of =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
        }),
      Of(e, t)
    );
  };
  function nr(e, t) {
    if (typeof t != 'function' && t !== null)
      throw new TypeError(
        'Class extends value ' + String(t) + ' is not a constructor or null'
      );
    Of(e, t);
    function r() {
      this.constructor = e;
    }
    e.prototype =
      t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
  }
  var E = function () {
    return (
      (E =
        Object.assign ||
        function (t) {
          for (var r, n = 1, i = arguments.length; n < i; n++) {
            r = arguments[n];
            for (var o in r)
              Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
          }
          return t;
        }),
      E.apply(this, arguments)
    );
  };
  function Rt(e, t) {
    var r = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
        t.indexOf(n[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
          (r[n[i]] = e[n[i]]);
    return r;
  }
  function Ar(e, t, r, n) {
    function i(o) {
      return o instanceof r
        ? o
        : new r(function (a) {
            a(o);
          });
    }
    return new (r || (r = Promise))(function (o, a) {
      function s(c) {
        try {
          l(n.next(c));
        } catch (d) {
          a(d);
        }
      }
      function u(c) {
        try {
          l(n.throw(c));
        } catch (d) {
          a(d);
        }
      }
      function l(c) {
        c.done ? o(c.value) : i(c.value).then(s, u);
      }
      l((n = n.apply(e, t || [])).next());
    });
  }
  function Ir(e, t) {
    var r = {
        label: 0,
        sent: function () {
          if (o[0] & 1) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      },
      n,
      i,
      o,
      a;
    return (
      (a = { next: s(0), throw: s(1), return: s(2) }),
      typeof Symbol == 'function' &&
        (a[Symbol.iterator] = function () {
          return this;
        }),
      a
    );
    function s(l) {
      return function (c) {
        return u([l, c]);
      };
    }
    function u(l) {
      if (n) throw new TypeError('Generator is already executing.');
      for (; r; )
        try {
          if (
            ((n = 1),
            i &&
              (o =
                l[0] & 2
                  ? i.return
                  : l[0]
                  ? i.throw || ((o = i.return) && o.call(i), 0)
                  : i.next) &&
              !(o = o.call(i, l[1])).done)
          )
            return o;
          switch (((i = 0), o && (l = [l[0] & 2, o.value]), l[0])) {
            case 0:
            case 1:
              o = l;
              break;
            case 4:
              return r.label++, { value: l[1], done: !1 };
            case 5:
              r.label++, (i = l[1]), (l = [0]);
              continue;
            case 7:
              (l = r.ops.pop()), r.trys.pop();
              continue;
            default:
              if (
                ((o = r.trys),
                !(o = o.length > 0 && o[o.length - 1]) &&
                  (l[0] === 6 || l[0] === 2))
              ) {
                r = 0;
                continue;
              }
              if (l[0] === 3 && (!o || (l[1] > o[0] && l[1] < o[3]))) {
                r.label = l[1];
                break;
              }
              if (l[0] === 6 && r.label < o[1]) {
                (r.label = o[1]), (o = l);
                break;
              }
              if (o && r.label < o[2]) {
                (r.label = o[2]), r.ops.push(l);
                break;
              }
              o[2] && r.ops.pop(), r.trys.pop();
              continue;
          }
          l = t.call(e, r);
        } catch (c) {
          (l = [6, c]), (i = 0);
        } finally {
          n = o = 0;
        }
      if (l[0] & 5) throw l[1];
      return { value: l[0] ? l[1] : void 0, done: !0 };
    }
  }
  function je(e, t, r) {
    if (r || arguments.length === 2)
      for (var n = 0, i = t.length, o; n < i; n++)
        (o || !(n in t)) &&
          (o || (o = Array.prototype.slice.call(t, 0, n)), (o[n] = t[n]));
    return e.concat(o || Array.prototype.slice.call(t));
  }
  var oc = 'Invariant Violation',
    kv = Object.setPrototypeOf,
    xO =
      kv === void 0
        ? function (e, t) {
            return (e.__proto__ = t), e;
          }
        : kv,
    zg = (function (e) {
      nr(t, e);
      function t(r) {
        r === void 0 && (r = oc);
        var n =
          e.call(
            this,
            typeof r == 'number'
              ? oc +
                  ': ' +
                  r +
                  ' (see https://github.com/apollographql/invariant-packages)'
              : r
          ) || this;
        return (n.framesToPop = 1), (n.name = oc), xO(n, t.prototype), n;
      }
      return t;
    })(Error);
  function vn(e, t) {
    if (!e) throw new zg(t);
  }
  var Bg = ['debug', 'log', 'warn', 'error', 'silent'],
    OO = Bg.indexOf('log');
  function ss(e) {
    return function () {
      if (Bg.indexOf(e) >= OO) {
        var t = console[e] || console.log;
        return t.apply(console, arguments);
      }
    };
  }
  (function (e) {
    (e.debug = ss('debug')),
      (e.log = ss('log')),
      (e.warn = ss('warn')),
      (e.error = ss('error'));
  })(vn || (vn = {}));
  var _h = '3.13.8';
  function Tt(e) {
    try {
      return e();
    } catch {}
  }
  const kf =
    Tt(function () {
      return globalThis;
    }) ||
    Tt(function () {
      return window;
    }) ||
    Tt(function () {
      return self;
    }) ||
    Tt(function () {
      return global;
    }) ||
    Tt(function () {
      return Tt.constructor('return this')();
    });
  var Cv = new Map();
  function Cf(e) {
    var t = Cv.get(e) || 1;
    return (
      Cv.set(e, t + 1),
      ''
        .concat(e, ':')
        .concat(t, ':')
        .concat(Math.random().toString(36).slice(2))
    );
  }
  function Ug(e, t) {
    t === void 0 && (t = 0);
    var r = Cf('stringifyForDisplay');
    return JSON.stringify(
      e,
      function (n, i) {
        return i === void 0 ? r : i;
      },
      t
    )
      .split(JSON.stringify(r))
      .join('<undefined>');
  }
  function us(e) {
    return function (t) {
      for (var r = [], n = 1; n < arguments.length; n++)
        r[n - 1] = arguments[n];
      if (typeof t == 'number') {
        var i = t;
        (t = wh(i)), t || ((t = bh(i, r)), (r = []));
      }
      e.apply(void 0, [t].concat(r));
    };
  }
  var R = Object.assign(
    function (t, r) {
      for (var n = [], i = 2; i < arguments.length; i++)
        n[i - 2] = arguments[i];
      t || vn(t, wh(r, n) || bh(r, n));
    },
    {
      debug: us(vn.debug),
      log: us(vn.log),
      warn: us(vn.warn),
      error: us(vn.error)
    }
  );
  function Ue(e) {
    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    return new zg(wh(e, t) || bh(e, t));
  }
  var Tv = Symbol.for('ApolloErrorMessageHandler_' + _h);
  function Qg(e) {
    if (typeof e == 'string') return e;
    try {
      return Ug(e, 2).slice(0, 1e3);
    } catch {
      return '<non-serializable>';
    }
  }
  function wh(e, t) {
    if ((t === void 0 && (t = []), !!e)) return kf[Tv] && kf[Tv](e, t.map(Qg));
  }
  function bh(e, t) {
    if ((t === void 0 && (t = []), !!e))
      return 'An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#'.concat(
        encodeURIComponent(
          JSON.stringify({ version: _h, message: e, args: t.map(Qg) })
        )
      );
  }
  function Ps(e, t) {
    if (!Boolean(e)) throw new Error(t);
  }
  function kO(e) {
    return typeof e == 'object' && e !== null;
  }
  function CO(e, t) {
    if (!Boolean(e))
      throw new Error(t != null ? t : 'Unexpected invariant triggered.');
  }
  const TO = /\r\n|[\n\r]/g;
  function Tf(e, t) {
    let r = 0,
      n = 1;
    for (const i of e.body.matchAll(TO)) {
      if ((typeof i.index == 'number' || CO(!1), i.index >= t)) break;
      (r = i.index + i[0].length), (n += 1);
    }
    return { line: n, column: t + 1 - r };
  }
  function NO(e) {
    return qg(e.source, Tf(e.source, e.start));
  }
  function qg(e, t) {
    const r = e.locationOffset.column - 1,
      n = ''.padStart(r) + e.body,
      i = t.line - 1,
      o = e.locationOffset.line - 1,
      a = t.line + o,
      s = t.line === 1 ? r : 0,
      u = t.column + s,
      l = `${e.name}:${a}:${u}
`,
      c = n.split(/\r\n|[\n\r]/g),
      d = c[i];
    if (d.length > 120) {
      const f = Math.floor(u / 80),
        v = u % 80,
        y = [];
      for (let g = 0; g < d.length; g += 80) y.push(d.slice(g, g + 80));
      return (
        l +
        Nv([
          [`${a} |`, y[0]],
          ...y.slice(1, f + 1).map(g => ['|', g]),
          ['|', '^'.padStart(v)],
          ['|', y[f + 1]]
        ])
      );
    }
    return (
      l +
      Nv([
        [`${a - 1} |`, c[i - 1]],
        [`${a} |`, d],
        ['|', '^'.padStart(u)],
        [`${a + 1} |`, c[i + 1]]
      ])
    );
  }
  function Nv(e) {
    const t = e.filter(([n, i]) => i !== void 0),
      r = Math.max(...t.map(([n]) => n.length));
    return t.map(([n, i]) => n.padStart(r) + (i ? ' ' + i : '')).join(`
`);
  }
  function DO(e) {
    const t = e[0];
    return t == null || 'kind' in t || 'length' in t
      ? {
          nodes: t,
          source: e[1],
          positions: e[2],
          path: e[3],
          originalError: e[4],
          extensions: e[5]
        }
      : t;
  }
  class Eh extends Error {
    constructor(t, ...r) {
      var n, i, o;
      const {
        nodes: a,
        source: s,
        positions: u,
        path: l,
        originalError: c,
        extensions: d
      } = DO(r);
      super(t),
        (this.name = 'GraphQLError'),
        (this.path = l != null ? l : void 0),
        (this.originalError = c != null ? c : void 0),
        (this.nodes = Dv(Array.isArray(a) ? a : a ? [a] : void 0));
      const f = Dv(
        (n = this.nodes) === null || n === void 0
          ? void 0
          : n.map(y => y.loc).filter(y => y != null)
      );
      (this.source =
        s != null
          ? s
          : f == null || (i = f[0]) === null || i === void 0
          ? void 0
          : i.source),
        (this.positions =
          u != null ? u : f == null ? void 0 : f.map(y => y.start)),
        (this.locations =
          u && s
            ? u.map(y => Tf(s, y))
            : f == null
            ? void 0
            : f.map(y => Tf(y.source, y.start)));
      const v = kO(c == null ? void 0 : c.extensions)
        ? c == null
          ? void 0
          : c.extensions
        : void 0;
      (this.extensions =
        (o = d != null ? d : v) !== null && o !== void 0
          ? o
          : Object.create(null)),
        Object.defineProperties(this, {
          message: { writable: !0, enumerable: !0 },
          name: { enumerable: !1 },
          nodes: { enumerable: !1 },
          source: { enumerable: !1 },
          positions: { enumerable: !1 },
          originalError: { enumerable: !1 }
        }),
        c != null && c.stack
          ? Object.defineProperty(this, 'stack', {
              value: c.stack,
              writable: !0,
              configurable: !0
            })
          : Error.captureStackTrace
          ? Error.captureStackTrace(this, Eh)
          : Object.defineProperty(this, 'stack', {
              value: Error().stack,
              writable: !0,
              configurable: !0
            });
    }
    get [Symbol.toStringTag]() {
      return 'GraphQLError';
    }
    toString() {
      let t = this.message;
      if (this.nodes)
        for (const r of this.nodes)
          r.loc &&
            (t +=
              `

` + NO(r.loc));
      else if (this.source && this.locations)
        for (const r of this.locations)
          t +=
            `

` + qg(this.source, r);
      return t;
    }
    toJSON() {
      const t = { message: this.message };
      return (
        this.locations != null && (t.locations = this.locations),
        this.path != null && (t.path = this.path),
        this.extensions != null &&
          Object.keys(this.extensions).length > 0 &&
          (t.extensions = this.extensions),
        t
      );
    }
  }
  function Dv(e) {
    return e === void 0 || e.length === 0 ? void 0 : e;
  }
  function ke(e, t, r) {
    return new Eh(`Syntax Error: ${r}`, { source: e, positions: [t] });
  }
  class RO {
    constructor(t, r, n) {
      (this.start = t.start),
        (this.end = r.end),
        (this.startToken = t),
        (this.endToken = r),
        (this.source = n);
    }
    get [Symbol.toStringTag]() {
      return 'Location';
    }
    toJSON() {
      return { start: this.start, end: this.end };
    }
  }
  class Wg {
    constructor(t, r, n, i, o, a) {
      (this.kind = t),
        (this.start = r),
        (this.end = n),
        (this.line = i),
        (this.column = o),
        (this.value = a),
        (this.prev = null),
        (this.next = null);
    }
    get [Symbol.toStringTag]() {
      return 'Token';
    }
    toJSON() {
      return {
        kind: this.kind,
        value: this.value,
        line: this.line,
        column: this.column
      };
    }
  }
  const Hg = {
      Name: [],
      Document: ['definitions'],
      OperationDefinition: [
        'name',
        'variableDefinitions',
        'directives',
        'selectionSet'
      ],
      VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
      Variable: ['name'],
      SelectionSet: ['selections'],
      Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
      Argument: ['name', 'value'],
      FragmentSpread: ['name', 'directives'],
      InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
      FragmentDefinition: [
        'name',
        'variableDefinitions',
        'typeCondition',
        'directives',
        'selectionSet'
      ],
      IntValue: [],
      FloatValue: [],
      StringValue: [],
      BooleanValue: [],
      NullValue: [],
      EnumValue: [],
      ListValue: ['values'],
      ObjectValue: ['fields'],
      ObjectField: ['name', 'value'],
      Directive: ['name', 'arguments'],
      NamedType: ['name'],
      ListType: ['type'],
      NonNullType: ['type'],
      SchemaDefinition: ['description', 'directives', 'operationTypes'],
      OperationTypeDefinition: ['type'],
      ScalarTypeDefinition: ['description', 'name', 'directives'],
      ObjectTypeDefinition: [
        'description',
        'name',
        'interfaces',
        'directives',
        'fields'
      ],
      FieldDefinition: [
        'description',
        'name',
        'arguments',
        'type',
        'directives'
      ],
      InputValueDefinition: [
        'description',
        'name',
        'type',
        'defaultValue',
        'directives'
      ],
      InterfaceTypeDefinition: [
        'description',
        'name',
        'interfaces',
        'directives',
        'fields'
      ],
      UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
      EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
      EnumValueDefinition: ['description', 'name', 'directives'],
      InputObjectTypeDefinition: [
        'description',
        'name',
        'directives',
        'fields'
      ],
      DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
      SchemaExtension: ['directives', 'operationTypes'],
      ScalarTypeExtension: ['name', 'directives'],
      ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
      InterfaceTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
      UnionTypeExtension: ['name', 'directives', 'types'],
      EnumTypeExtension: ['name', 'directives', 'values'],
      InputObjectTypeExtension: ['name', 'directives', 'fields']
    },
    PO = new Set(Object.keys(Hg));
  function Rv(e) {
    const t = e == null ? void 0 : e.kind;
    return typeof t == 'string' && PO.has(t);
  }
  var ci;
  (function (e) {
    (e.QUERY = 'query'),
      (e.MUTATION = 'mutation'),
      (e.SUBSCRIPTION = 'subscription');
  })(ci || (ci = {}));
  var Nf;
  (function (e) {
    (e.QUERY = 'QUERY'),
      (e.MUTATION = 'MUTATION'),
      (e.SUBSCRIPTION = 'SUBSCRIPTION'),
      (e.FIELD = 'FIELD'),
      (e.FRAGMENT_DEFINITION = 'FRAGMENT_DEFINITION'),
      (e.FRAGMENT_SPREAD = 'FRAGMENT_SPREAD'),
      (e.INLINE_FRAGMENT = 'INLINE_FRAGMENT'),
      (e.VARIABLE_DEFINITION = 'VARIABLE_DEFINITION'),
      (e.SCHEMA = 'SCHEMA'),
      (e.SCALAR = 'SCALAR'),
      (e.OBJECT = 'OBJECT'),
      (e.FIELD_DEFINITION = 'FIELD_DEFINITION'),
      (e.ARGUMENT_DEFINITION = 'ARGUMENT_DEFINITION'),
      (e.INTERFACE = 'INTERFACE'),
      (e.UNION = 'UNION'),
      (e.ENUM = 'ENUM'),
      (e.ENUM_VALUE = 'ENUM_VALUE'),
      (e.INPUT_OBJECT = 'INPUT_OBJECT'),
      (e.INPUT_FIELD_DEFINITION = 'INPUT_FIELD_DEFINITION');
  })(Nf || (Nf = {}));
  var D;
  (function (e) {
    (e.NAME = 'Name'),
      (e.DOCUMENT = 'Document'),
      (e.OPERATION_DEFINITION = 'OperationDefinition'),
      (e.VARIABLE_DEFINITION = 'VariableDefinition'),
      (e.SELECTION_SET = 'SelectionSet'),
      (e.FIELD = 'Field'),
      (e.ARGUMENT = 'Argument'),
      (e.FRAGMENT_SPREAD = 'FragmentSpread'),
      (e.INLINE_FRAGMENT = 'InlineFragment'),
      (e.FRAGMENT_DEFINITION = 'FragmentDefinition'),
      (e.VARIABLE = 'Variable'),
      (e.INT = 'IntValue'),
      (e.FLOAT = 'FloatValue'),
      (e.STRING = 'StringValue'),
      (e.BOOLEAN = 'BooleanValue'),
      (e.NULL = 'NullValue'),
      (e.ENUM = 'EnumValue'),
      (e.LIST = 'ListValue'),
      (e.OBJECT = 'ObjectValue'),
      (e.OBJECT_FIELD = 'ObjectField'),
      (e.DIRECTIVE = 'Directive'),
      (e.NAMED_TYPE = 'NamedType'),
      (e.LIST_TYPE = 'ListType'),
      (e.NON_NULL_TYPE = 'NonNullType'),
      (e.SCHEMA_DEFINITION = 'SchemaDefinition'),
      (e.OPERATION_TYPE_DEFINITION = 'OperationTypeDefinition'),
      (e.SCALAR_TYPE_DEFINITION = 'ScalarTypeDefinition'),
      (e.OBJECT_TYPE_DEFINITION = 'ObjectTypeDefinition'),
      (e.FIELD_DEFINITION = 'FieldDefinition'),
      (e.INPUT_VALUE_DEFINITION = 'InputValueDefinition'),
      (e.INTERFACE_TYPE_DEFINITION = 'InterfaceTypeDefinition'),
      (e.UNION_TYPE_DEFINITION = 'UnionTypeDefinition'),
      (e.ENUM_TYPE_DEFINITION = 'EnumTypeDefinition'),
      (e.ENUM_VALUE_DEFINITION = 'EnumValueDefinition'),
      (e.INPUT_OBJECT_TYPE_DEFINITION = 'InputObjectTypeDefinition'),
      (e.DIRECTIVE_DEFINITION = 'DirectiveDefinition'),
      (e.SCHEMA_EXTENSION = 'SchemaExtension'),
      (e.SCALAR_TYPE_EXTENSION = 'ScalarTypeExtension'),
      (e.OBJECT_TYPE_EXTENSION = 'ObjectTypeExtension'),
      (e.INTERFACE_TYPE_EXTENSION = 'InterfaceTypeExtension'),
      (e.UNION_TYPE_EXTENSION = 'UnionTypeExtension'),
      (e.ENUM_TYPE_EXTENSION = 'EnumTypeExtension'),
      (e.INPUT_OBJECT_TYPE_EXTENSION = 'InputObjectTypeExtension');
  })(D || (D = {}));
  function Df(e) {
    return e === 9 || e === 32;
  }
  function ha(e) {
    return e >= 48 && e <= 57;
  }
  function Gg(e) {
    return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
  }
  function Kg(e) {
    return Gg(e) || e === 95;
  }
  function AO(e) {
    return Gg(e) || ha(e) || e === 95;
  }
  function IO(e) {
    var t;
    let r = Number.MAX_SAFE_INTEGER,
      n = null,
      i = -1;
    for (let a = 0; a < e.length; ++a) {
      var o;
      const s = e[a],
        u = FO(s);
      u !== s.length &&
        ((n = (o = n) !== null && o !== void 0 ? o : a),
        (i = a),
        a !== 0 && u < r && (r = u));
    }
    return e
      .map((a, s) => (s === 0 ? a : a.slice(r)))
      .slice((t = n) !== null && t !== void 0 ? t : 0, i + 1);
  }
  function FO(e) {
    let t = 0;
    for (; t < e.length && Df(e.charCodeAt(t)); ) ++t;
    return t;
  }
  function LO(e, t) {
    const r = e.replace(/"""/g, '\\"""'),
      n = r.split(/\r\n|[\n\r]/g),
      i = n.length === 1,
      o =
        n.length > 1 &&
        n.slice(1).every(v => v.length === 0 || Df(v.charCodeAt(0))),
      a = r.endsWith('\\"""'),
      s = e.endsWith('"') && !a,
      u = e.endsWith('\\'),
      l = s || u,
      c = !(t != null && t.minimize) && (!i || e.length > 70 || l || o || a);
    let d = '';
    const f = i && Df(e.charCodeAt(0));
    return (
      ((c && !f) || o) &&
        (d += `
`),
      (d += r),
      (c || l) &&
        (d += `
`),
      '"""' + d + '"""'
    );
  }
  var k;
  (function (e) {
    (e.SOF = '<SOF>'),
      (e.EOF = '<EOF>'),
      (e.BANG = '!'),
      (e.DOLLAR = '$'),
      (e.AMP = '&'),
      (e.PAREN_L = '('),
      (e.PAREN_R = ')'),
      (e.SPREAD = '...'),
      (e.COLON = ':'),
      (e.EQUALS = '='),
      (e.AT = '@'),
      (e.BRACKET_L = '['),
      (e.BRACKET_R = ']'),
      (e.BRACE_L = '{'),
      (e.PIPE = '|'),
      (e.BRACE_R = '}'),
      (e.NAME = 'Name'),
      (e.INT = 'Int'),
      (e.FLOAT = 'Float'),
      (e.STRING = 'String'),
      (e.BLOCK_STRING = 'BlockString'),
      (e.COMMENT = 'Comment');
  })(k || (k = {}));
  class MO {
    constructor(t) {
      const r = new Wg(k.SOF, 0, 0, 0, 0);
      (this.source = t),
        (this.lastToken = r),
        (this.token = r),
        (this.line = 1),
        (this.lineStart = 0);
    }
    get [Symbol.toStringTag]() {
      return 'Lexer';
    }
    advance() {
      return (this.lastToken = this.token), (this.token = this.lookahead());
    }
    lookahead() {
      let t = this.token;
      if (t.kind !== k.EOF)
        do
          if (t.next) t = t.next;
          else {
            const r = VO(this, t.end);
            (t.next = r), (r.prev = t), (t = r);
          }
        while (t.kind === k.COMMENT);
      return t;
    }
  }
  function jO(e) {
    return (
      e === k.BANG ||
      e === k.DOLLAR ||
      e === k.AMP ||
      e === k.PAREN_L ||
      e === k.PAREN_R ||
      e === k.SPREAD ||
      e === k.COLON ||
      e === k.EQUALS ||
      e === k.AT ||
      e === k.BRACKET_L ||
      e === k.BRACKET_R ||
      e === k.BRACE_L ||
      e === k.PIPE ||
      e === k.BRACE_R
    );
  }
  function Ji(e) {
    return (e >= 0 && e <= 55295) || (e >= 57344 && e <= 1114111);
  }
  function cl(e, t) {
    return Yg(e.charCodeAt(t)) && Jg(e.charCodeAt(t + 1));
  }
  function Yg(e) {
    return e >= 55296 && e <= 56319;
  }
  function Jg(e) {
    return e >= 56320 && e <= 57343;
  }
  function Dn(e, t) {
    const r = e.source.body.codePointAt(t);
    if (r === void 0) return k.EOF;
    if (r >= 32 && r <= 126) {
      const n = String.fromCodePoint(r);
      return n === '"' ? `'"'` : `"${n}"`;
    }
    return 'U+' + r.toString(16).toUpperCase().padStart(4, '0');
  }
  function _e(e, t, r, n, i) {
    const o = e.line,
      a = 1 + r - e.lineStart;
    return new Wg(t, r, n, o, a, i);
  }
  function VO(e, t) {
    const r = e.source.body,
      n = r.length;
    let i = t;
    for (; i < n; ) {
      const o = r.charCodeAt(i);
      switch (o) {
        case 65279:
        case 9:
        case 32:
        case 44:
          ++i;
          continue;
        case 10:
          ++i, ++e.line, (e.lineStart = i);
          continue;
        case 13:
          r.charCodeAt(i + 1) === 10 ? (i += 2) : ++i,
            ++e.line,
            (e.lineStart = i);
          continue;
        case 35:
          return $O(e, i);
        case 33:
          return _e(e, k.BANG, i, i + 1);
        case 36:
          return _e(e, k.DOLLAR, i, i + 1);
        case 38:
          return _e(e, k.AMP, i, i + 1);
        case 40:
          return _e(e, k.PAREN_L, i, i + 1);
        case 41:
          return _e(e, k.PAREN_R, i, i + 1);
        case 46:
          if (r.charCodeAt(i + 1) === 46 && r.charCodeAt(i + 2) === 46)
            return _e(e, k.SPREAD, i, i + 3);
          break;
        case 58:
          return _e(e, k.COLON, i, i + 1);
        case 61:
          return _e(e, k.EQUALS, i, i + 1);
        case 64:
          return _e(e, k.AT, i, i + 1);
        case 91:
          return _e(e, k.BRACKET_L, i, i + 1);
        case 93:
          return _e(e, k.BRACKET_R, i, i + 1);
        case 123:
          return _e(e, k.BRACE_L, i, i + 1);
        case 124:
          return _e(e, k.PIPE, i, i + 1);
        case 125:
          return _e(e, k.BRACE_R, i, i + 1);
        case 34:
          return r.charCodeAt(i + 1) === 34 && r.charCodeAt(i + 2) === 34
            ? WO(e, i)
            : BO(e, i);
      }
      if (ha(o) || o === 45) return zO(e, i, o);
      if (Kg(o)) return HO(e, i);
      throw ke(
        e.source,
        i,
        o === 39
          ? `Unexpected single quote character ('), did you mean to use a double quote (")?`
          : Ji(o) || cl(r, i)
          ? `Unexpected character: ${Dn(e, i)}.`
          : `Invalid character: ${Dn(e, i)}.`
      );
    }
    return _e(e, k.EOF, n, n);
  }
  function $O(e, t) {
    const r = e.source.body,
      n = r.length;
    let i = t + 1;
    for (; i < n; ) {
      const o = r.charCodeAt(i);
      if (o === 10 || o === 13) break;
      if (Ji(o)) ++i;
      else if (cl(r, i)) i += 2;
      else break;
    }
    return _e(e, k.COMMENT, t, i, r.slice(t + 1, i));
  }
  function zO(e, t, r) {
    const n = e.source.body;
    let i = t,
      o = r,
      a = !1;
    if ((o === 45 && (o = n.charCodeAt(++i)), o === 48)) {
      if (((o = n.charCodeAt(++i)), ha(o)))
        throw ke(
          e.source,
          i,
          `Invalid number, unexpected digit after 0: ${Dn(e, i)}.`
        );
    } else (i = ac(e, i, o)), (o = n.charCodeAt(i));
    if (
      (o === 46 &&
        ((a = !0),
        (o = n.charCodeAt(++i)),
        (i = ac(e, i, o)),
        (o = n.charCodeAt(i))),
      (o === 69 || o === 101) &&
        ((a = !0),
        (o = n.charCodeAt(++i)),
        (o === 43 || o === 45) && (o = n.charCodeAt(++i)),
        (i = ac(e, i, o)),
        (o = n.charCodeAt(i))),
      o === 46 || Kg(o))
    )
      throw ke(
        e.source,
        i,
        `Invalid number, expected digit but got: ${Dn(e, i)}.`
      );
    return _e(e, a ? k.FLOAT : k.INT, t, i, n.slice(t, i));
  }
  function ac(e, t, r) {
    if (!ha(r))
      throw ke(
        e.source,
        t,
        `Invalid number, expected digit but got: ${Dn(e, t)}.`
      );
    const n = e.source.body;
    let i = t + 1;
    for (; ha(n.charCodeAt(i)); ) ++i;
    return i;
  }
  function BO(e, t) {
    const r = e.source.body,
      n = r.length;
    let i = t + 1,
      o = i,
      a = '';
    for (; i < n; ) {
      const s = r.charCodeAt(i);
      if (s === 34) return (a += r.slice(o, i)), _e(e, k.STRING, t, i + 1, a);
      if (s === 92) {
        a += r.slice(o, i);
        const u =
          r.charCodeAt(i + 1) === 117
            ? r.charCodeAt(i + 2) === 123
              ? UO(e, i)
              : QO(e, i)
            : qO(e, i);
        (a += u.value), (i += u.size), (o = i);
        continue;
      }
      if (s === 10 || s === 13) break;
      if (Ji(s)) ++i;
      else if (cl(r, i)) i += 2;
      else
        throw ke(e.source, i, `Invalid character within String: ${Dn(e, i)}.`);
    }
    throw ke(e.source, i, 'Unterminated string.');
  }
  function UO(e, t) {
    const r = e.source.body;
    let n = 0,
      i = 3;
    for (; i < 12; ) {
      const o = r.charCodeAt(t + i++);
      if (o === 125) {
        if (i < 5 || !Ji(n)) break;
        return { value: String.fromCodePoint(n), size: i };
      }
      if (((n = (n << 4) | Oo(o)), n < 0)) break;
    }
    throw ke(
      e.source,
      t,
      `Invalid Unicode escape sequence: "${r.slice(t, t + i)}".`
    );
  }
  function QO(e, t) {
    const r = e.source.body,
      n = Pv(r, t + 2);
    if (Ji(n)) return { value: String.fromCodePoint(n), size: 6 };
    if (Yg(n) && r.charCodeAt(t + 6) === 92 && r.charCodeAt(t + 7) === 117) {
      const i = Pv(r, t + 8);
      if (Jg(i)) return { value: String.fromCodePoint(n, i), size: 12 };
    }
    throw ke(
      e.source,
      t,
      `Invalid Unicode escape sequence: "${r.slice(t, t + 6)}".`
    );
  }
  function Pv(e, t) {
    return (
      (Oo(e.charCodeAt(t)) << 12) |
      (Oo(e.charCodeAt(t + 1)) << 8) |
      (Oo(e.charCodeAt(t + 2)) << 4) |
      Oo(e.charCodeAt(t + 3))
    );
  }
  function Oo(e) {
    return e >= 48 && e <= 57
      ? e - 48
      : e >= 65 && e <= 70
      ? e - 55
      : e >= 97 && e <= 102
      ? e - 87
      : -1;
  }
  function qO(e, t) {
    const r = e.source.body;
    switch (r.charCodeAt(t + 1)) {
      case 34:
        return { value: '"', size: 2 };
      case 92:
        return { value: '\\', size: 2 };
      case 47:
        return { value: '/', size: 2 };
      case 98:
        return { value: '\b', size: 2 };
      case 102:
        return { value: '\f', size: 2 };
      case 110:
        return {
          value: `
`,
          size: 2
        };
      case 114:
        return { value: '\r', size: 2 };
      case 116:
        return { value: '	', size: 2 };
    }
    throw ke(
      e.source,
      t,
      `Invalid character escape sequence: "${r.slice(t, t + 2)}".`
    );
  }
  function WO(e, t) {
    const r = e.source.body,
      n = r.length;
    let i = e.lineStart,
      o = t + 3,
      a = o,
      s = '';
    const u = [];
    for (; o < n; ) {
      const l = r.charCodeAt(o);
      if (
        l === 34 &&
        r.charCodeAt(o + 1) === 34 &&
        r.charCodeAt(o + 2) === 34
      ) {
        (s += r.slice(a, o)), u.push(s);
        const c = _e(
          e,
          k.BLOCK_STRING,
          t,
          o + 3,
          IO(u).join(`
`)
        );
        return (e.line += u.length - 1), (e.lineStart = i), c;
      }
      if (
        l === 92 &&
        r.charCodeAt(o + 1) === 34 &&
        r.charCodeAt(o + 2) === 34 &&
        r.charCodeAt(o + 3) === 34
      ) {
        (s += r.slice(a, o)), (a = o + 1), (o += 4);
        continue;
      }
      if (l === 10 || l === 13) {
        (s += r.slice(a, o)),
          u.push(s),
          l === 13 && r.charCodeAt(o + 1) === 10 ? (o += 2) : ++o,
          (s = ''),
          (a = o),
          (i = o);
        continue;
      }
      if (Ji(l)) ++o;
      else if (cl(r, o)) o += 2;
      else
        throw ke(e.source, o, `Invalid character within String: ${Dn(e, o)}.`);
    }
    throw ke(e.source, o, 'Unterminated string.');
  }
  function HO(e, t) {
    const r = e.source.body,
      n = r.length;
    let i = t + 1;
    for (; i < n; ) {
      const o = r.charCodeAt(i);
      if (AO(o)) ++i;
      else break;
    }
    return _e(e, k.NAME, t, i, r.slice(t, i));
  }
  const GO = 10,
    Xg = 2;
  function Sh(e) {
    return fl(e, []);
  }
  function fl(e, t) {
    switch (typeof e) {
      case 'string':
        return JSON.stringify(e);
      case 'function':
        return e.name ? `[function ${e.name}]` : '[function]';
      case 'object':
        return KO(e, t);
      default:
        return String(e);
    }
  }
  function KO(e, t) {
    if (e === null) return 'null';
    if (t.includes(e)) return '[Circular]';
    const r = [...t, e];
    if (YO(e)) {
      const n = e.toJSON();
      if (n !== e) return typeof n == 'string' ? n : fl(n, r);
    } else if (Array.isArray(e)) return XO(e, r);
    return JO(e, r);
  }
  function YO(e) {
    return typeof e.toJSON == 'function';
  }
  function JO(e, t) {
    const r = Object.entries(e);
    if (r.length === 0) return '{}';
    if (t.length > Xg) return '[' + ZO(e) + ']';
    const n = r.map(([i, o]) => i + ': ' + fl(o, t));
    return '{ ' + n.join(', ') + ' }';
  }
  function XO(e, t) {
    if (e.length === 0) return '[]';
    if (t.length > Xg) return '[Array]';
    const r = Math.min(GO, e.length),
      n = e.length - r,
      i = [];
    for (let o = 0; o < r; ++o) i.push(fl(e[o], t));
    return (
      n === 1
        ? i.push('... 1 more item')
        : n > 1 && i.push(`... ${n} more items`),
      '[' + i.join(', ') + ']'
    );
  }
  function ZO(e) {
    const t = Object.prototype.toString
      .call(e)
      .replace(/^\[object /, '')
      .replace(/]$/, '');
    if (t === 'Object' && typeof e.constructor == 'function') {
      const r = e.constructor.name;
      if (typeof r == 'string' && r !== '') return r;
    }
    return t;
  }
  const ek = globalThis.process && !0,
    tk = ek
      ? function (t, r) {
          return t instanceof r;
        }
      : function (t, r) {
          if (t instanceof r) return !0;
          if (typeof t == 'object' && t !== null) {
            var n;
            const i = r.prototype[Symbol.toStringTag],
              o =
                Symbol.toStringTag in t
                  ? t[Symbol.toStringTag]
                  : (n = t.constructor) === null || n === void 0
                  ? void 0
                  : n.name;
            if (i === o) {
              const a = Sh(t);
              throw new Error(`Cannot use ${i} "${a}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
            }
          }
          return !1;
        };
  class Zg {
    constructor(t, r = 'GraphQL request', n = { line: 1, column: 1 }) {
      typeof t == 'string' ||
        Ps(!1, `Body must be a string. Received: ${Sh(t)}.`),
        (this.body = t),
        (this.name = r),
        (this.locationOffset = n),
        this.locationOffset.line > 0 ||
          Ps(!1, 'line in locationOffset is 1-indexed and must be positive.'),
        this.locationOffset.column > 0 ||
          Ps(!1, 'column in locationOffset is 1-indexed and must be positive.');
    }
    get [Symbol.toStringTag]() {
      return 'Source';
    }
  }
  function rk(e) {
    return tk(e, Zg);
  }
  function nk(e, t) {
    const r = new ik(e, t),
      n = r.parseDocument();
    return (
      Object.defineProperty(n, 'tokenCount', {
        enumerable: !1,
        value: r.tokenCount
      }),
      n
    );
  }
  class ik {
    constructor(t, r = {}) {
      const n = rk(t) ? t : new Zg(t);
      (this._lexer = new MO(n)), (this._options = r), (this._tokenCounter = 0);
    }
    get tokenCount() {
      return this._tokenCounter;
    }
    parseName() {
      const t = this.expectToken(k.NAME);
      return this.node(t, { kind: D.NAME, value: t.value });
    }
    parseDocument() {
      return this.node(this._lexer.token, {
        kind: D.DOCUMENT,
        definitions: this.many(k.SOF, this.parseDefinition, k.EOF)
      });
    }
    parseDefinition() {
      if (this.peek(k.BRACE_L)) return this.parseOperationDefinition();
      const t = this.peekDescription(),
        r = t ? this._lexer.lookahead() : this._lexer.token;
      if (r.kind === k.NAME) {
        switch (r.value) {
          case 'schema':
            return this.parseSchemaDefinition();
          case 'scalar':
            return this.parseScalarTypeDefinition();
          case 'type':
            return this.parseObjectTypeDefinition();
          case 'interface':
            return this.parseInterfaceTypeDefinition();
          case 'union':
            return this.parseUnionTypeDefinition();
          case 'enum':
            return this.parseEnumTypeDefinition();
          case 'input':
            return this.parseInputObjectTypeDefinition();
          case 'directive':
            return this.parseDirectiveDefinition();
        }
        if (t)
          throw ke(
            this._lexer.source,
            this._lexer.token.start,
            'Unexpected description, descriptions are supported only on type definitions.'
          );
        switch (r.value) {
          case 'query':
          case 'mutation':
          case 'subscription':
            return this.parseOperationDefinition();
          case 'fragment':
            return this.parseFragmentDefinition();
          case 'extend':
            return this.parseTypeSystemExtension();
        }
      }
      throw this.unexpected(r);
    }
    parseOperationDefinition() {
      const t = this._lexer.token;
      if (this.peek(k.BRACE_L))
        return this.node(t, {
          kind: D.OPERATION_DEFINITION,
          operation: ci.QUERY,
          name: void 0,
          variableDefinitions: [],
          directives: [],
          selectionSet: this.parseSelectionSet()
        });
      const r = this.parseOperationType();
      let n;
      return (
        this.peek(k.NAME) && (n = this.parseName()),
        this.node(t, {
          kind: D.OPERATION_DEFINITION,
          operation: r,
          name: n,
          variableDefinitions: this.parseVariableDefinitions(),
          directives: this.parseDirectives(!1),
          selectionSet: this.parseSelectionSet()
        })
      );
    }
    parseOperationType() {
      const t = this.expectToken(k.NAME);
      switch (t.value) {
        case 'query':
          return ci.QUERY;
        case 'mutation':
          return ci.MUTATION;
        case 'subscription':
          return ci.SUBSCRIPTION;
      }
      throw this.unexpected(t);
    }
    parseVariableDefinitions() {
      return this.optionalMany(
        k.PAREN_L,
        this.parseVariableDefinition,
        k.PAREN_R
      );
    }
    parseVariableDefinition() {
      return this.node(this._lexer.token, {
        kind: D.VARIABLE_DEFINITION,
        variable: this.parseVariable(),
        type: (this.expectToken(k.COLON), this.parseTypeReference()),
        defaultValue: this.expectOptionalToken(k.EQUALS)
          ? this.parseConstValueLiteral()
          : void 0,
        directives: this.parseConstDirectives()
      });
    }
    parseVariable() {
      const t = this._lexer.token;
      return (
        this.expectToken(k.DOLLAR),
        this.node(t, { kind: D.VARIABLE, name: this.parseName() })
      );
    }
    parseSelectionSet() {
      return this.node(this._lexer.token, {
        kind: D.SELECTION_SET,
        selections: this.many(k.BRACE_L, this.parseSelection, k.BRACE_R)
      });
    }
    parseSelection() {
      return this.peek(k.SPREAD) ? this.parseFragment() : this.parseField();
    }
    parseField() {
      const t = this._lexer.token,
        r = this.parseName();
      let n, i;
      return (
        this.expectOptionalToken(k.COLON)
          ? ((n = r), (i = this.parseName()))
          : (i = r),
        this.node(t, {
          kind: D.FIELD,
          alias: n,
          name: i,
          arguments: this.parseArguments(!1),
          directives: this.parseDirectives(!1),
          selectionSet: this.peek(k.BRACE_L) ? this.parseSelectionSet() : void 0
        })
      );
    }
    parseArguments(t) {
      const r = t ? this.parseConstArgument : this.parseArgument;
      return this.optionalMany(k.PAREN_L, r, k.PAREN_R);
    }
    parseArgument(t = !1) {
      const r = this._lexer.token,
        n = this.parseName();
      return (
        this.expectToken(k.COLON),
        this.node(r, {
          kind: D.ARGUMENT,
          name: n,
          value: this.parseValueLiteral(t)
        })
      );
    }
    parseConstArgument() {
      return this.parseArgument(!0);
    }
    parseFragment() {
      const t = this._lexer.token;
      this.expectToken(k.SPREAD);
      const r = this.expectOptionalKeyword('on');
      return !r && this.peek(k.NAME)
        ? this.node(t, {
            kind: D.FRAGMENT_SPREAD,
            name: this.parseFragmentName(),
            directives: this.parseDirectives(!1)
          })
        : this.node(t, {
            kind: D.INLINE_FRAGMENT,
            typeCondition: r ? this.parseNamedType() : void 0,
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
          });
    }
    parseFragmentDefinition() {
      const t = this._lexer.token;
      return (
        this.expectKeyword('fragment'),
        this._options.allowLegacyFragmentVariables === !0
          ? this.node(t, {
              kind: D.FRAGMENT_DEFINITION,
              name: this.parseFragmentName(),
              variableDefinitions: this.parseVariableDefinitions(),
              typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
              directives: this.parseDirectives(!1),
              selectionSet: this.parseSelectionSet()
            })
          : this.node(t, {
              kind: D.FRAGMENT_DEFINITION,
              name: this.parseFragmentName(),
              typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
              directives: this.parseDirectives(!1),
              selectionSet: this.parseSelectionSet()
            })
      );
    }
    parseFragmentName() {
      if (this._lexer.token.value === 'on') throw this.unexpected();
      return this.parseName();
    }
    parseValueLiteral(t) {
      const r = this._lexer.token;
      switch (r.kind) {
        case k.BRACKET_L:
          return this.parseList(t);
        case k.BRACE_L:
          return this.parseObject(t);
        case k.INT:
          return (
            this.advanceLexer(), this.node(r, { kind: D.INT, value: r.value })
          );
        case k.FLOAT:
          return (
            this.advanceLexer(), this.node(r, { kind: D.FLOAT, value: r.value })
          );
        case k.STRING:
        case k.BLOCK_STRING:
          return this.parseStringLiteral();
        case k.NAME:
          switch ((this.advanceLexer(), r.value)) {
            case 'true':
              return this.node(r, { kind: D.BOOLEAN, value: !0 });
            case 'false':
              return this.node(r, { kind: D.BOOLEAN, value: !1 });
            case 'null':
              return this.node(r, { kind: D.NULL });
            default:
              return this.node(r, { kind: D.ENUM, value: r.value });
          }
        case k.DOLLAR:
          if (t)
            if (
              (this.expectToken(k.DOLLAR), this._lexer.token.kind === k.NAME)
            ) {
              const n = this._lexer.token.value;
              throw ke(
                this._lexer.source,
                r.start,
                `Unexpected variable "$${n}" in constant value.`
              );
            } else throw this.unexpected(r);
          return this.parseVariable();
        default:
          throw this.unexpected();
      }
    }
    parseConstValueLiteral() {
      return this.parseValueLiteral(!0);
    }
    parseStringLiteral() {
      const t = this._lexer.token;
      return (
        this.advanceLexer(),
        this.node(t, {
          kind: D.STRING,
          value: t.value,
          block: t.kind === k.BLOCK_STRING
        })
      );
    }
    parseList(t) {
      const r = () => this.parseValueLiteral(t);
      return this.node(this._lexer.token, {
        kind: D.LIST,
        values: this.any(k.BRACKET_L, r, k.BRACKET_R)
      });
    }
    parseObject(t) {
      const r = () => this.parseObjectField(t);
      return this.node(this._lexer.token, {
        kind: D.OBJECT,
        fields: this.any(k.BRACE_L, r, k.BRACE_R)
      });
    }
    parseObjectField(t) {
      const r = this._lexer.token,
        n = this.parseName();
      return (
        this.expectToken(k.COLON),
        this.node(r, {
          kind: D.OBJECT_FIELD,
          name: n,
          value: this.parseValueLiteral(t)
        })
      );
    }
    parseDirectives(t) {
      const r = [];
      for (; this.peek(k.AT); ) r.push(this.parseDirective(t));
      return r;
    }
    parseConstDirectives() {
      return this.parseDirectives(!0);
    }
    parseDirective(t) {
      const r = this._lexer.token;
      return (
        this.expectToken(k.AT),
        this.node(r, {
          kind: D.DIRECTIVE,
          name: this.parseName(),
          arguments: this.parseArguments(t)
        })
      );
    }
    parseTypeReference() {
      const t = this._lexer.token;
      let r;
      if (this.expectOptionalToken(k.BRACKET_L)) {
        const n = this.parseTypeReference();
        this.expectToken(k.BRACKET_R),
          (r = this.node(t, { kind: D.LIST_TYPE, type: n }));
      } else r = this.parseNamedType();
      return this.expectOptionalToken(k.BANG)
        ? this.node(t, { kind: D.NON_NULL_TYPE, type: r })
        : r;
    }
    parseNamedType() {
      return this.node(this._lexer.token, {
        kind: D.NAMED_TYPE,
        name: this.parseName()
      });
    }
    peekDescription() {
      return this.peek(k.STRING) || this.peek(k.BLOCK_STRING);
    }
    parseDescription() {
      if (this.peekDescription()) return this.parseStringLiteral();
    }
    parseSchemaDefinition() {
      const t = this._lexer.token,
        r = this.parseDescription();
      this.expectKeyword('schema');
      const n = this.parseConstDirectives(),
        i = this.many(k.BRACE_L, this.parseOperationTypeDefinition, k.BRACE_R);
      return this.node(t, {
        kind: D.SCHEMA_DEFINITION,
        description: r,
        directives: n,
        operationTypes: i
      });
    }
    parseOperationTypeDefinition() {
      const t = this._lexer.token,
        r = this.parseOperationType();
      this.expectToken(k.COLON);
      const n = this.parseNamedType();
      return this.node(t, {
        kind: D.OPERATION_TYPE_DEFINITION,
        operation: r,
        type: n
      });
    }
    parseScalarTypeDefinition() {
      const t = this._lexer.token,
        r = this.parseDescription();
      this.expectKeyword('scalar');
      const n = this.parseName(),
        i = this.parseConstDirectives();
      return this.node(t, {
        kind: D.SCALAR_TYPE_DEFINITION,
        description: r,
        name: n,
        directives: i
      });
    }
    parseObjectTypeDefinition() {
      const t = this._lexer.token,
        r = this.parseDescription();
      this.expectKeyword('type');
      const n = this.parseName(),
        i = this.parseImplementsInterfaces(),
        o = this.parseConstDirectives(),
        a = this.parseFieldsDefinition();
      return this.node(t, {
        kind: D.OBJECT_TYPE_DEFINITION,
        description: r,
        name: n,
        interfaces: i,
        directives: o,
        fields: a
      });
    }
    parseImplementsInterfaces() {
      return this.expectOptionalKeyword('implements')
        ? this.delimitedMany(k.AMP, this.parseNamedType)
        : [];
    }
    parseFieldsDefinition() {
      return this.optionalMany(k.BRACE_L, this.parseFieldDefinition, k.BRACE_R);
    }
    parseFieldDefinition() {
      const t = this._lexer.token,
        r = this.parseDescription(),
        n = this.parseName(),
        i = this.parseArgumentDefs();
      this.expectToken(k.COLON);
      const o = this.parseTypeReference(),
        a = this.parseConstDirectives();
      return this.node(t, {
        kind: D.FIELD_DEFINITION,
        description: r,
        name: n,
        arguments: i,
        type: o,
        directives: a
      });
    }
    parseArgumentDefs() {
      return this.optionalMany(k.PAREN_L, this.parseInputValueDef, k.PAREN_R);
    }
    parseInputValueDef() {
      const t = this._lexer.token,
        r = this.parseDescription(),
        n = this.parseName();
      this.expectToken(k.COLON);
      const i = this.parseTypeReference();
      let o;
      this.expectOptionalToken(k.EQUALS) && (o = this.parseConstValueLiteral());
      const a = this.parseConstDirectives();
      return this.node(t, {
        kind: D.INPUT_VALUE_DEFINITION,
        description: r,
        name: n,
        type: i,
        defaultValue: o,
        directives: a
      });
    }
    parseInterfaceTypeDefinition() {
      const t = this._lexer.token,
        r = this.parseDescription();
      this.expectKeyword('interface');
      const n = this.parseName(),
        i = this.parseImplementsInterfaces(),
        o = this.parseConstDirectives(),
        a = this.parseFieldsDefinition();
      return this.node(t, {
        kind: D.INTERFACE_TYPE_DEFINITION,
        description: r,
        name: n,
        interfaces: i,
        directives: o,
        fields: a
      });
    }
    parseUnionTypeDefinition() {
      const t = this._lexer.token,
        r = this.parseDescription();
      this.expectKeyword('union');
      const n = this.parseName(),
        i = this.parseConstDirectives(),
        o = this.parseUnionMemberTypes();
      return this.node(t, {
        kind: D.UNION_TYPE_DEFINITION,
        description: r,
        name: n,
        directives: i,
        types: o
      });
    }
    parseUnionMemberTypes() {
      return this.expectOptionalToken(k.EQUALS)
        ? this.delimitedMany(k.PIPE, this.parseNamedType)
        : [];
    }
    parseEnumTypeDefinition() {
      const t = this._lexer.token,
        r = this.parseDescription();
      this.expectKeyword('enum');
      const n = this.parseName(),
        i = this.parseConstDirectives(),
        o = this.parseEnumValuesDefinition();
      return this.node(t, {
        kind: D.ENUM_TYPE_DEFINITION,
        description: r,
        name: n,
        directives: i,
        values: o
      });
    }
    parseEnumValuesDefinition() {
      return this.optionalMany(
        k.BRACE_L,
        this.parseEnumValueDefinition,
        k.BRACE_R
      );
    }
    parseEnumValueDefinition() {
      const t = this._lexer.token,
        r = this.parseDescription(),
        n = this.parseEnumValueName(),
        i = this.parseConstDirectives();
      return this.node(t, {
        kind: D.ENUM_VALUE_DEFINITION,
        description: r,
        name: n,
        directives: i
      });
    }
    parseEnumValueName() {
      if (
        this._lexer.token.value === 'true' ||
        this._lexer.token.value === 'false' ||
        this._lexer.token.value === 'null'
      )
        throw ke(
          this._lexer.source,
          this._lexer.token.start,
          `${ls(
            this._lexer.token
          )} is reserved and cannot be used for an enum value.`
        );
      return this.parseName();
    }
    parseInputObjectTypeDefinition() {
      const t = this._lexer.token,
        r = this.parseDescription();
      this.expectKeyword('input');
      const n = this.parseName(),
        i = this.parseConstDirectives(),
        o = this.parseInputFieldsDefinition();
      return this.node(t, {
        kind: D.INPUT_OBJECT_TYPE_DEFINITION,
        description: r,
        name: n,
        directives: i,
        fields: o
      });
    }
    parseInputFieldsDefinition() {
      return this.optionalMany(k.BRACE_L, this.parseInputValueDef, k.BRACE_R);
    }
    parseTypeSystemExtension() {
      const t = this._lexer.lookahead();
      if (t.kind === k.NAME)
        switch (t.value) {
          case 'schema':
            return this.parseSchemaExtension();
          case 'scalar':
            return this.parseScalarTypeExtension();
          case 'type':
            return this.parseObjectTypeExtension();
          case 'interface':
            return this.parseInterfaceTypeExtension();
          case 'union':
            return this.parseUnionTypeExtension();
          case 'enum':
            return this.parseEnumTypeExtension();
          case 'input':
            return this.parseInputObjectTypeExtension();
        }
      throw this.unexpected(t);
    }
    parseSchemaExtension() {
      const t = this._lexer.token;
      this.expectKeyword('extend'), this.expectKeyword('schema');
      const r = this.parseConstDirectives(),
        n = this.optionalMany(
          k.BRACE_L,
          this.parseOperationTypeDefinition,
          k.BRACE_R
        );
      if (r.length === 0 && n.length === 0) throw this.unexpected();
      return this.node(t, {
        kind: D.SCHEMA_EXTENSION,
        directives: r,
        operationTypes: n
      });
    }
    parseScalarTypeExtension() {
      const t = this._lexer.token;
      this.expectKeyword('extend'), this.expectKeyword('scalar');
      const r = this.parseName(),
        n = this.parseConstDirectives();
      if (n.length === 0) throw this.unexpected();
      return this.node(t, {
        kind: D.SCALAR_TYPE_EXTENSION,
        name: r,
        directives: n
      });
    }
    parseObjectTypeExtension() {
      const t = this._lexer.token;
      this.expectKeyword('extend'), this.expectKeyword('type');
      const r = this.parseName(),
        n = this.parseImplementsInterfaces(),
        i = this.parseConstDirectives(),
        o = this.parseFieldsDefinition();
      if (n.length === 0 && i.length === 0 && o.length === 0)
        throw this.unexpected();
      return this.node(t, {
        kind: D.OBJECT_TYPE_EXTENSION,
        name: r,
        interfaces: n,
        directives: i,
        fields: o
      });
    }
    parseInterfaceTypeExtension() {
      const t = this._lexer.token;
      this.expectKeyword('extend'), this.expectKeyword('interface');
      const r = this.parseName(),
        n = this.parseImplementsInterfaces(),
        i = this.parseConstDirectives(),
        o = this.parseFieldsDefinition();
      if (n.length === 0 && i.length === 0 && o.length === 0)
        throw this.unexpected();
      return this.node(t, {
        kind: D.INTERFACE_TYPE_EXTENSION,
        name: r,
        interfaces: n,
        directives: i,
        fields: o
      });
    }
    parseUnionTypeExtension() {
      const t = this._lexer.token;
      this.expectKeyword('extend'), this.expectKeyword('union');
      const r = this.parseName(),
        n = this.parseConstDirectives(),
        i = this.parseUnionMemberTypes();
      if (n.length === 0 && i.length === 0) throw this.unexpected();
      return this.node(t, {
        kind: D.UNION_TYPE_EXTENSION,
        name: r,
        directives: n,
        types: i
      });
    }
    parseEnumTypeExtension() {
      const t = this._lexer.token;
      this.expectKeyword('extend'), this.expectKeyword('enum');
      const r = this.parseName(),
        n = this.parseConstDirectives(),
        i = this.parseEnumValuesDefinition();
      if (n.length === 0 && i.length === 0) throw this.unexpected();
      return this.node(t, {
        kind: D.ENUM_TYPE_EXTENSION,
        name: r,
        directives: n,
        values: i
      });
    }
    parseInputObjectTypeExtension() {
      const t = this._lexer.token;
      this.expectKeyword('extend'), this.expectKeyword('input');
      const r = this.parseName(),
        n = this.parseConstDirectives(),
        i = this.parseInputFieldsDefinition();
      if (n.length === 0 && i.length === 0) throw this.unexpected();
      return this.node(t, {
        kind: D.INPUT_OBJECT_TYPE_EXTENSION,
        name: r,
        directives: n,
        fields: i
      });
    }
    parseDirectiveDefinition() {
      const t = this._lexer.token,
        r = this.parseDescription();
      this.expectKeyword('directive'), this.expectToken(k.AT);
      const n = this.parseName(),
        i = this.parseArgumentDefs(),
        o = this.expectOptionalKeyword('repeatable');
      this.expectKeyword('on');
      const a = this.parseDirectiveLocations();
      return this.node(t, {
        kind: D.DIRECTIVE_DEFINITION,
        description: r,
        name: n,
        arguments: i,
        repeatable: o,
        locations: a
      });
    }
    parseDirectiveLocations() {
      return this.delimitedMany(k.PIPE, this.parseDirectiveLocation);
    }
    parseDirectiveLocation() {
      const t = this._lexer.token,
        r = this.parseName();
      if (Object.prototype.hasOwnProperty.call(Nf, r.value)) return r;
      throw this.unexpected(t);
    }
    node(t, r) {
      return (
        this._options.noLocation !== !0 &&
          (r.loc = new RO(t, this._lexer.lastToken, this._lexer.source)),
        r
      );
    }
    peek(t) {
      return this._lexer.token.kind === t;
    }
    expectToken(t) {
      const r = this._lexer.token;
      if (r.kind === t) return this.advanceLexer(), r;
      throw ke(
        this._lexer.source,
        r.start,
        `Expected ${e_(t)}, found ${ls(r)}.`
      );
    }
    expectOptionalToken(t) {
      return this._lexer.token.kind === t ? (this.advanceLexer(), !0) : !1;
    }
    expectKeyword(t) {
      const r = this._lexer.token;
      if (r.kind === k.NAME && r.value === t) this.advanceLexer();
      else
        throw ke(
          this._lexer.source,
          r.start,
          `Expected "${t}", found ${ls(r)}.`
        );
    }
    expectOptionalKeyword(t) {
      const r = this._lexer.token;
      return r.kind === k.NAME && r.value === t
        ? (this.advanceLexer(), !0)
        : !1;
    }
    unexpected(t) {
      const r = t != null ? t : this._lexer.token;
      return ke(this._lexer.source, r.start, `Unexpected ${ls(r)}.`);
    }
    any(t, r, n) {
      this.expectToken(t);
      const i = [];
      for (; !this.expectOptionalToken(n); ) i.push(r.call(this));
      return i;
    }
    optionalMany(t, r, n) {
      if (this.expectOptionalToken(t)) {
        const i = [];
        do i.push(r.call(this));
        while (!this.expectOptionalToken(n));
        return i;
      }
      return [];
    }
    many(t, r, n) {
      this.expectToken(t);
      const i = [];
      do i.push(r.call(this));
      while (!this.expectOptionalToken(n));
      return i;
    }
    delimitedMany(t, r) {
      this.expectOptionalToken(t);
      const n = [];
      do n.push(r.call(this));
      while (this.expectOptionalToken(t));
      return n;
    }
    advanceLexer() {
      const { maxTokens: t } = this._options,
        r = this._lexer.advance();
      if (
        r.kind !== k.EOF &&
        (++this._tokenCounter, t !== void 0 && this._tokenCounter > t)
      )
        throw ke(
          this._lexer.source,
          r.start,
          `Document contains more that ${t} tokens. Parsing aborted.`
        );
    }
  }
  function ls(e) {
    const t = e.value;
    return e_(e.kind) + (t != null ? ` "${t}"` : '');
  }
  function e_(e) {
    return jO(e) ? `"${e}"` : e;
  }
  function ok(e) {
    return `"${e.replace(ak, sk)}"`;
  }
  const ak = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
  function sk(e) {
    return uk[e.charCodeAt(0)];
  }
  const uk = [
      '\\u0000',
      '\\u0001',
      '\\u0002',
      '\\u0003',
      '\\u0004',
      '\\u0005',
      '\\u0006',
      '\\u0007',
      '\\b',
      '\\t',
      '\\n',
      '\\u000B',
      '\\f',
      '\\r',
      '\\u000E',
      '\\u000F',
      '\\u0010',
      '\\u0011',
      '\\u0012',
      '\\u0013',
      '\\u0014',
      '\\u0015',
      '\\u0016',
      '\\u0017',
      '\\u0018',
      '\\u0019',
      '\\u001A',
      '\\u001B',
      '\\u001C',
      '\\u001D',
      '\\u001E',
      '\\u001F',
      '',
      '',
      '\\"',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '\\\\',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '\\u007F',
      '\\u0080',
      '\\u0081',
      '\\u0082',
      '\\u0083',
      '\\u0084',
      '\\u0085',
      '\\u0086',
      '\\u0087',
      '\\u0088',
      '\\u0089',
      '\\u008A',
      '\\u008B',
      '\\u008C',
      '\\u008D',
      '\\u008E',
      '\\u008F',
      '\\u0090',
      '\\u0091',
      '\\u0092',
      '\\u0093',
      '\\u0094',
      '\\u0095',
      '\\u0096',
      '\\u0097',
      '\\u0098',
      '\\u0099',
      '\\u009A',
      '\\u009B',
      '\\u009C',
      '\\u009D',
      '\\u009E',
      '\\u009F'
    ],
    dl = Object.freeze({});
  function Ft(e, t, r = Hg) {
    const n = new Map();
    for (const h of Object.values(D)) n.set(h, lk(t, h));
    let i,
      o = Array.isArray(e),
      a = [e],
      s = -1,
      u = [],
      l = e,
      c,
      d;
    const f = [],
      v = [];
    do {
      s++;
      const h = s === a.length,
        p = h && u.length !== 0;
      if (h) {
        if (
          ((c = v.length === 0 ? void 0 : f[f.length - 1]),
          (l = d),
          (d = v.pop()),
          p)
        )
          if (o) {
            l = l.slice();
            let w = 0;
            for (const [S, x] of u) {
              const O = S - w;
              x === null ? (l.splice(O, 1), w++) : (l[O] = x);
            }
          } else {
            l = { ...l };
            for (const [w, S] of u) l[w] = S;
          }
        (s = i.index),
          (a = i.keys),
          (u = i.edits),
          (o = i.inArray),
          (i = i.prev);
      } else if (d) {
        if (((c = o ? s : a[s]), (l = d[c]), l == null)) continue;
        f.push(c);
      }
      let m;
      if (!Array.isArray(l)) {
        var y, g;
        Rv(l) || Ps(!1, `Invalid AST Node: ${Sh(l)}.`);
        const w = h
          ? (y = n.get(l.kind)) === null || y === void 0
            ? void 0
            : y.leave
          : (g = n.get(l.kind)) === null || g === void 0
          ? void 0
          : g.enter;
        if (((m = w == null ? void 0 : w.call(t, l, c, d, f, v)), m === dl))
          break;
        if (m === !1) {
          if (!h) {
            f.pop();
            continue;
          }
        } else if (m !== void 0 && (u.push([c, m]), !h))
          if (Rv(m)) l = m;
          else {
            f.pop();
            continue;
          }
      }
      if ((m === void 0 && p && u.push([c, l]), h)) f.pop();
      else {
        var _;
        (i = { inArray: o, index: s, keys: a, edits: u, prev: i }),
          (o = Array.isArray(l)),
          (a = o ? l : (_ = r[l.kind]) !== null && _ !== void 0 ? _ : []),
          (s = -1),
          (u = []),
          d && v.push(d),
          (d = l);
      }
    } while (i !== void 0);
    return u.length !== 0 ? u[u.length - 1][1] : e;
  }
  function lk(e, t) {
    const r = e[t];
    return typeof r == 'object'
      ? r
      : typeof r == 'function'
      ? { enter: r, leave: void 0 }
      : { enter: e.enter, leave: e.leave };
  }
  function ck(e) {
    return Ft(e, dk);
  }
  const fk = 80,
    dk = {
      Name: { leave: e => e.value },
      Variable: { leave: e => '$' + e.name },
      Document: {
        leave: e =>
          F(
            e.definitions,
            `

`
          )
      },
      OperationDefinition: {
        leave(e) {
          const t = z('(', F(e.variableDefinitions, ', '), ')'),
            r = F([e.operation, F([e.name, t]), F(e.directives, ' ')], ' ');
          return (r === 'query' ? '' : r + ' ') + e.selectionSet;
        }
      },
      VariableDefinition: {
        leave: ({ variable: e, type: t, defaultValue: r, directives: n }) =>
          e + ': ' + t + z(' = ', r) + z(' ', F(n, ' '))
      },
      SelectionSet: { leave: ({ selections: e }) => xt(e) },
      Field: {
        leave({
          alias: e,
          name: t,
          arguments: r,
          directives: n,
          selectionSet: i
        }) {
          const o = z('', e, ': ') + t;
          let a = o + z('(', F(r, ', '), ')');
          return (
            a.length > fk &&
              (a =
                o +
                z(
                  `(
`,
                  As(
                    F(
                      r,
                      `
`
                    )
                  ),
                  `
)`
                )),
            F([a, F(n, ' '), i], ' ')
          );
        }
      },
      Argument: { leave: ({ name: e, value: t }) => e + ': ' + t },
      FragmentSpread: {
        leave: ({ name: e, directives: t }) => '...' + e + z(' ', F(t, ' '))
      },
      InlineFragment: {
        leave: ({ typeCondition: e, directives: t, selectionSet: r }) =>
          F(['...', z('on ', e), F(t, ' '), r], ' ')
      },
      FragmentDefinition: {
        leave: ({
          name: e,
          typeCondition: t,
          variableDefinitions: r,
          directives: n,
          selectionSet: i
        }) =>
          `fragment ${e}${z('(', F(r, ', '), ')')} on ${t} ${z(
            '',
            F(n, ' '),
            ' '
          )}` + i
      },
      IntValue: { leave: ({ value: e }) => e },
      FloatValue: { leave: ({ value: e }) => e },
      StringValue: { leave: ({ value: e, block: t }) => (t ? LO(e) : ok(e)) },
      BooleanValue: { leave: ({ value: e }) => (e ? 'true' : 'false') },
      NullValue: { leave: () => 'null' },
      EnumValue: { leave: ({ value: e }) => e },
      ListValue: { leave: ({ values: e }) => '[' + F(e, ', ') + ']' },
      ObjectValue: { leave: ({ fields: e }) => '{' + F(e, ', ') + '}' },
      ObjectField: { leave: ({ name: e, value: t }) => e + ': ' + t },
      Directive: {
        leave: ({ name: e, arguments: t }) => '@' + e + z('(', F(t, ', '), ')')
      },
      NamedType: { leave: ({ name: e }) => e },
      ListType: { leave: ({ type: e }) => '[' + e + ']' },
      NonNullType: { leave: ({ type: e }) => e + '!' },
      SchemaDefinition: {
        leave: ({ description: e, directives: t, operationTypes: r }) =>
          z(
            '',
            e,
            `
`
          ) + F(['schema', F(t, ' '), xt(r)], ' ')
      },
      OperationTypeDefinition: {
        leave: ({ operation: e, type: t }) => e + ': ' + t
      },
      ScalarTypeDefinition: {
        leave: ({ description: e, name: t, directives: r }) =>
          z(
            '',
            e,
            `
`
          ) + F(['scalar', t, F(r, ' ')], ' ')
      },
      ObjectTypeDefinition: {
        leave: ({
          description: e,
          name: t,
          interfaces: r,
          directives: n,
          fields: i
        }) =>
          z(
            '',
            e,
            `
`
          ) +
          F(['type', t, z('implements ', F(r, ' & ')), F(n, ' '), xt(i)], ' ')
      },
      FieldDefinition: {
        leave: ({
          description: e,
          name: t,
          arguments: r,
          type: n,
          directives: i
        }) =>
          z(
            '',
            e,
            `
`
          ) +
          t +
          (Av(r)
            ? z(
                `(
`,
                As(
                  F(
                    r,
                    `
`
                  )
                ),
                `
)`
              )
            : z('(', F(r, ', '), ')')) +
          ': ' +
          n +
          z(' ', F(i, ' '))
      },
      InputValueDefinition: {
        leave: ({
          description: e,
          name: t,
          type: r,
          defaultValue: n,
          directives: i
        }) =>
          z(
            '',
            e,
            `
`
          ) + F([t + ': ' + r, z('= ', n), F(i, ' ')], ' ')
      },
      InterfaceTypeDefinition: {
        leave: ({
          description: e,
          name: t,
          interfaces: r,
          directives: n,
          fields: i
        }) =>
          z(
            '',
            e,
            `
`
          ) +
          F(
            ['interface', t, z('implements ', F(r, ' & ')), F(n, ' '), xt(i)],
            ' '
          )
      },
      UnionTypeDefinition: {
        leave: ({ description: e, name: t, directives: r, types: n }) =>
          z(
            '',
            e,
            `
`
          ) + F(['union', t, F(r, ' '), z('= ', F(n, ' | '))], ' ')
      },
      EnumTypeDefinition: {
        leave: ({ description: e, name: t, directives: r, values: n }) =>
          z(
            '',
            e,
            `
`
          ) + F(['enum', t, F(r, ' '), xt(n)], ' ')
      },
      EnumValueDefinition: {
        leave: ({ description: e, name: t, directives: r }) =>
          z(
            '',
            e,
            `
`
          ) + F([t, F(r, ' ')], ' ')
      },
      InputObjectTypeDefinition: {
        leave: ({ description: e, name: t, directives: r, fields: n }) =>
          z(
            '',
            e,
            `
`
          ) + F(['input', t, F(r, ' '), xt(n)], ' ')
      },
      DirectiveDefinition: {
        leave: ({
          description: e,
          name: t,
          arguments: r,
          repeatable: n,
          locations: i
        }) =>
          z(
            '',
            e,
            `
`
          ) +
          'directive @' +
          t +
          (Av(r)
            ? z(
                `(
`,
                As(
                  F(
                    r,
                    `
`
                  )
                ),
                `
)`
              )
            : z('(', F(r, ', '), ')')) +
          (n ? ' repeatable' : '') +
          ' on ' +
          F(i, ' | ')
      },
      SchemaExtension: {
        leave: ({ directives: e, operationTypes: t }) =>
          F(['extend schema', F(e, ' '), xt(t)], ' ')
      },
      ScalarTypeExtension: {
        leave: ({ name: e, directives: t }) =>
          F(['extend scalar', e, F(t, ' ')], ' ')
      },
      ObjectTypeExtension: {
        leave: ({ name: e, interfaces: t, directives: r, fields: n }) =>
          F(
            ['extend type', e, z('implements ', F(t, ' & ')), F(r, ' '), xt(n)],
            ' '
          )
      },
      InterfaceTypeExtension: {
        leave: ({ name: e, interfaces: t, directives: r, fields: n }) =>
          F(
            [
              'extend interface',
              e,
              z('implements ', F(t, ' & ')),
              F(r, ' '),
              xt(n)
            ],
            ' '
          )
      },
      UnionTypeExtension: {
        leave: ({ name: e, directives: t, types: r }) =>
          F(['extend union', e, F(t, ' '), z('= ', F(r, ' | '))], ' ')
      },
      EnumTypeExtension: {
        leave: ({ name: e, directives: t, values: r }) =>
          F(['extend enum', e, F(t, ' '), xt(r)], ' ')
      },
      InputObjectTypeExtension: {
        leave: ({ name: e, directives: t, fields: r }) =>
          F(['extend input', e, F(t, ' '), xt(r)], ' ')
      }
    };
  function F(e, t = '') {
    var r;
    return (r = e == null ? void 0 : e.filter(n => n).join(t)) !== null &&
      r !== void 0
      ? r
      : '';
  }
  function xt(e) {
    return z(
      `{
`,
      As(
        F(
          e,
          `
`
        )
      ),
      `
}`
    );
  }
  function z(e, t, r = '') {
    return t != null && t !== '' ? e + t + r : '';
  }
  function As(e) {
    return z(
      '  ',
      e.replace(
        /\n/g,
        `
  `
      )
    );
  }
  function Av(e) {
    var t;
    return (t =
      e == null
        ? void 0
        : e.some(r =>
            r.includes(`
`)
          )) !== null && t !== void 0
      ? t
      : !1;
  }
  function Iv(e) {
    return (
      e.kind === D.FIELD ||
      e.kind === D.FRAGMENT_SPREAD ||
      e.kind === D.INLINE_FRAGMENT
    );
  }
  function Ra(e, t) {
    var r = e.directives;
    return !r || !r.length
      ? !0
      : vk(r).every(function (n) {
          var i = n.directive,
            o = n.ifArgument,
            a = !1;
          return (
            o.value.kind === 'Variable'
              ? ((a = t && t[o.value.name.value]),
                R(a !== void 0, 78, i.name.value))
              : (a = o.value.value),
            i.name.value === 'skip' ? !a : a
          );
        });
  }
  function pa(e, t, r) {
    var n = new Set(e),
      i = n.size;
    return (
      Ft(t, {
        Directive: function (o) {
          if (n.delete(o.name.value) && (!r || !n.size)) return dl;
        }
      }),
      r ? !n.size : n.size < i
    );
  }
  function hk(e) {
    return e && pa(['client', 'export'], e, !0);
  }
  function pk(e) {
    var t = e.name.value;
    return t === 'skip' || t === 'include';
  }
  function vk(e) {
    var t = [];
    return (
      e &&
        e.length &&
        e.forEach(function (r) {
          if (!!pk(r)) {
            var n = r.arguments,
              i = r.name.value;
            R(n && n.length === 1, 79, i);
            var o = n[0];
            R(o.name && o.name.value === 'if', 80, i);
            var a = o.value;
            R(a && (a.kind === 'Variable' || a.kind === 'BooleanValue'), 81, i),
              t.push({ directive: r, ifArgument: o });
          }
        }),
      t
    );
  }
  function mk(e) {
    var t,
      r,
      n =
        (t = e.directives) === null || t === void 0
          ? void 0
          : t.find(function (o) {
              var a = o.name;
              return a.value === 'unmask';
            });
    if (!n) return 'mask';
    var i =
      (r = n.arguments) === null || r === void 0
        ? void 0
        : r.find(function (o) {
            var a = o.name;
            return a.value === 'mode';
          });
    return (
      globalThis.__DEV__ !== !1 &&
        i &&
        (i.value.kind === D.VARIABLE
          ? globalThis.__DEV__ !== !1 && R.warn(82)
          : i.value.kind !== D.STRING
          ? globalThis.__DEV__ !== !1 && R.warn(83)
          : i.value.value !== 'migrate' &&
            globalThis.__DEV__ !== !1 &&
            R.warn(84, i.value.value)),
      i && 'value' in i.value && i.value.value === 'migrate'
        ? 'migrate'
        : 'unmask'
    );
  }
  const yk = () => Object.create(null),
    { forEach: gk, slice: Fv } = Array.prototype,
    { hasOwnProperty: _k } = Object.prototype;
  class Cr {
    constructor(t = !0, r = yk) {
      (this.weakness = t), (this.makeData = r);
    }
    lookup() {
      return this.lookupArray(arguments);
    }
    lookupArray(t) {
      let r = this;
      return (
        gk.call(t, n => (r = r.getChildTrie(n))),
        _k.call(r, 'data') ? r.data : (r.data = this.makeData(Fv.call(t)))
      );
    }
    peek() {
      return this.peekArray(arguments);
    }
    peekArray(t) {
      let r = this;
      for (let n = 0, i = t.length; r && n < i; ++n) {
        const o = r.mapFor(t[n], !1);
        r = o && o.get(t[n]);
      }
      return r && r.data;
    }
    remove() {
      return this.removeArray(arguments);
    }
    removeArray(t) {
      let r;
      if (t.length) {
        const n = t[0],
          i = this.mapFor(n, !1),
          o = i && i.get(n);
        o &&
          ((r = o.removeArray(Fv.call(t, 1))),
          !o.data && !o.weak && !(o.strong && o.strong.size) && i.delete(n));
      } else (r = this.data), delete this.data;
      return r;
    }
    getChildTrie(t) {
      const r = this.mapFor(t, !0);
      let n = r.get(t);
      return n || r.set(t, (n = new Cr(this.weakness, this.makeData))), n;
    }
    mapFor(t, r) {
      return this.weakness && wk(t)
        ? this.weak || (r ? (this.weak = new WeakMap()) : void 0)
        : this.strong || (r ? (this.strong = new Map()) : void 0);
    }
  }
  function wk(e) {
    switch (typeof e) {
      case 'object':
        if (e === null) break;
      case 'function':
        return !0;
    }
    return !1;
  }
  var t_ =
      Tt(function () {
        return navigator.product;
      }) == 'ReactNative',
    zn = typeof WeakMap == 'function' && !(t_ && !global.HermesInternal),
    xh = typeof WeakSet == 'function',
    Oh = typeof Symbol == 'function' && typeof Symbol.for == 'function',
    hl = Oh && Symbol.asyncIterator,
    bk =
      typeof Tt(function () {
        return window.document.createElement;
      }) == 'function',
    Ek =
      Tt(function () {
        return navigator.userAgent.indexOf('jsdom') >= 0;
      }) || !1,
    Sk = (bk || t_) && !Ek;
  function ve(e) {
    return e !== null && typeof e == 'object';
  }
  function xk(e, t) {
    var r = t,
      n = [];
    e.definitions.forEach(function (o) {
      if (o.kind === 'OperationDefinition')
        throw Ue(
          85,
          o.operation,
          o.name ? " named '".concat(o.name.value, "'") : ''
        );
      o.kind === 'FragmentDefinition' && n.push(o);
    }),
      typeof r > 'u' &&
        (R(n.length === 1, 86, n.length), (r = n[0].name.value));
    var i = E(E({}, e), {
      definitions: je(
        [
          {
            kind: 'OperationDefinition',
            operation: 'query',
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: r } }
              ]
            }
          }
        ],
        e.definitions,
        !0
      )
    });
    return i;
  }
  function Xi(e) {
    e === void 0 && (e = []);
    var t = {};
    return (
      e.forEach(function (r) {
        t[r.name.value] = r;
      }),
      t
    );
  }
  function pl(e, t) {
    switch (e.kind) {
      case 'InlineFragment':
        return e;
      case 'FragmentSpread': {
        var r = e.name.value;
        if (typeof t == 'function') return t(r);
        var n = t && t[r];
        return R(n, 87, r), n || null;
      }
      default:
        return null;
    }
  }
  function Ok(e) {
    var t = !0;
    return (
      Ft(e, {
        FragmentSpread: function (r) {
          if (
            ((t =
              !!r.directives &&
              r.directives.some(function (n) {
                return n.name.value === 'unmask';
              })),
            !t)
          )
            return dl;
        }
      }),
      t
    );
  }
  function kk() {}
  class Rf {
    constructor(t = 1 / 0, r = kk) {
      (this.max = t),
        (this.dispose = r),
        (this.map = new Map()),
        (this.newest = null),
        (this.oldest = null);
    }
    has(t) {
      return this.map.has(t);
    }
    get(t) {
      const r = this.getNode(t);
      return r && r.value;
    }
    get size() {
      return this.map.size;
    }
    getNode(t) {
      const r = this.map.get(t);
      if (r && r !== this.newest) {
        const { older: n, newer: i } = r;
        i && (i.older = n),
          n && (n.newer = i),
          (r.older = this.newest),
          (r.older.newer = r),
          (r.newer = null),
          (this.newest = r),
          r === this.oldest && (this.oldest = i);
      }
      return r;
    }
    set(t, r) {
      let n = this.getNode(t);
      return n
        ? (n.value = r)
        : ((n = { key: t, value: r, newer: null, older: this.newest }),
          this.newest && (this.newest.newer = n),
          (this.newest = n),
          (this.oldest = this.oldest || n),
          this.map.set(t, n),
          n.value);
    }
    clean() {
      for (; this.oldest && this.map.size > this.max; )
        this.delete(this.oldest.key);
    }
    delete(t) {
      const r = this.map.get(t);
      return r
        ? (r === this.newest && (this.newest = r.older),
          r === this.oldest && (this.oldest = r.newer),
          r.newer && (r.newer.older = r.older),
          r.older && (r.older.newer = r.newer),
          this.map.delete(t),
          this.dispose(r.value, t),
          !0)
        : !1;
    }
  }
  function Pf() {}
  const Ck = Pf,
    Tk =
      typeof WeakRef < 'u'
        ? WeakRef
        : function (e) {
            return { deref: () => e };
          },
    Nk = typeof WeakMap < 'u' ? WeakMap : Map,
    Dk =
      typeof FinalizationRegistry < 'u'
        ? FinalizationRegistry
        : function () {
            return { register: Pf, unregister: Pf };
          },
    Rk = 10024;
  class gu {
    constructor(t = 1 / 0, r = Ck) {
      (this.max = t),
        (this.dispose = r),
        (this.map = new Nk()),
        (this.newest = null),
        (this.oldest = null),
        (this.unfinalizedNodes = new Set()),
        (this.finalizationScheduled = !1),
        (this.size = 0),
        (this.finalize = () => {
          const n = this.unfinalizedNodes.values();
          for (let i = 0; i < Rk; i++) {
            const o = n.next().value;
            if (!o) break;
            this.unfinalizedNodes.delete(o);
            const a = o.key;
            delete o.key,
              (o.keyRef = new Tk(a)),
              this.registry.register(a, o, o);
          }
          this.unfinalizedNodes.size > 0
            ? queueMicrotask(this.finalize)
            : (this.finalizationScheduled = !1);
        }),
        (this.registry = new Dk(this.deleteNode.bind(this)));
    }
    has(t) {
      return this.map.has(t);
    }
    get(t) {
      const r = this.getNode(t);
      return r && r.value;
    }
    getNode(t) {
      const r = this.map.get(t);
      if (r && r !== this.newest) {
        const { older: n, newer: i } = r;
        i && (i.older = n),
          n && (n.newer = i),
          (r.older = this.newest),
          (r.older.newer = r),
          (r.newer = null),
          (this.newest = r),
          r === this.oldest && (this.oldest = i);
      }
      return r;
    }
    set(t, r) {
      let n = this.getNode(t);
      return n
        ? (n.value = r)
        : ((n = { key: t, value: r, newer: null, older: this.newest }),
          this.newest && (this.newest.newer = n),
          (this.newest = n),
          (this.oldest = this.oldest || n),
          this.scheduleFinalization(n),
          this.map.set(t, n),
          this.size++,
          n.value);
    }
    clean() {
      for (; this.oldest && this.size > this.max; )
        this.deleteNode(this.oldest);
    }
    deleteNode(t) {
      t === this.newest && (this.newest = t.older),
        t === this.oldest && (this.oldest = t.newer),
        t.newer && (t.newer.older = t.older),
        t.older && (t.older.newer = t.newer),
        this.size--;
      const r = t.key || (t.keyRef && t.keyRef.deref());
      this.dispose(t.value, r),
        t.keyRef
          ? this.registry.unregister(t)
          : this.unfinalizedNodes.delete(t),
        r && this.map.delete(r);
    }
    delete(t) {
      const r = this.map.get(t);
      return r ? (this.deleteNode(r), !0) : !1;
    }
    scheduleFinalization(t) {
      this.unfinalizedNodes.add(t),
        this.finalizationScheduled ||
          ((this.finalizationScheduled = !0), queueMicrotask(this.finalize));
    }
  }
  var sc = new WeakSet();
  function r_(e) {
    e.size <= (e.max || -1) ||
      sc.has(e) ||
      (sc.add(e),
      setTimeout(function () {
        e.clean(), sc.delete(e);
      }, 100));
  }
  var kh = function (e, t) {
      var r = new gu(e, t);
      return (
        (r.set = function (n, i) {
          var o = gu.prototype.set.call(this, n, i);
          return r_(this), o;
        }),
        r
      );
    },
    Pk = function (e, t) {
      var r = new Rf(e, t);
      return (
        (r.set = function (n, i) {
          var o = Rf.prototype.set.call(this, n, i);
          return r_(this), o;
        }),
        r
      );
    },
    Ak = Symbol.for('apollo.cacheSize'),
    er = E({}, kf[Ak]),
    pn = {};
  function Ch(e, t) {
    pn[e] = t;
  }
  var Ik = globalThis.__DEV__ !== !1 ? jk : void 0,
    Fk = globalThis.__DEV__ !== !1 ? Vk : void 0,
    Lk = globalThis.__DEV__ !== !1 ? n_ : void 0;
  function Mk() {
    var e = {
      parser: 1e3,
      canonicalStringify: 1e3,
      print: 2e3,
      'documentTransform.cache': 2e3,
      'queryManager.getDocumentInfo': 2e3,
      'PersistedQueryLink.persistedQueryHashes': 2e3,
      'fragmentRegistry.transform': 2e3,
      'fragmentRegistry.lookup': 1e3,
      'fragmentRegistry.findFragmentSpreads': 4e3,
      'cache.fragmentQueryDocuments': 1e3,
      'removeTypenameFromVariables.getVariableDefinitions': 2e3,
      'inMemoryCache.maybeBroadcastWatch': 5e3,
      'inMemoryCache.executeSelectionSet': 5e4,
      'inMemoryCache.executeSubSelectedArray': 1e4
    };
    return Object.fromEntries(
      Object.entries(e).map(function (t) {
        var r = t[0],
          n = t[1];
        return [r, er[r] || n];
      })
    );
  }
  function jk() {
    var e, t, r, n, i;
    if (globalThis.__DEV__ === !1)
      throw new Error('only supported in development mode');
    return {
      limits: Mk(),
      sizes: E(
        {
          print: (e = pn.print) === null || e === void 0 ? void 0 : e.call(pn),
          parser:
            (t = pn.parser) === null || t === void 0 ? void 0 : t.call(pn),
          canonicalStringify:
            (r = pn.canonicalStringify) === null || r === void 0
              ? void 0
              : r.call(pn),
          links: If(this.link),
          queryManager: {
            getDocumentInfo: this.queryManager.transformCache.size,
            documentTransforms: o_(this.queryManager.documentTransform)
          }
        },
        (i = (n = this.cache).getMemoryInternals) === null || i === void 0
          ? void 0
          : i.call(n)
      )
    };
  }
  function n_() {
    return { cache: { fragmentQueryDocuments: Fr(this.getFragmentDoc) } };
  }
  function Vk() {
    var e = this.config.fragments;
    return E(E({}, n_.apply(this)), {
      addTypenameDocumentTransform: o_(this.addTypenameTransform),
      inMemoryCache: {
        executeSelectionSet: Fr(this.storeReader.executeSelectionSet),
        executeSubSelectedArray: Fr(this.storeReader.executeSubSelectedArray),
        maybeBroadcastWatch: Fr(this.maybeBroadcastWatch)
      },
      fragmentRegistry: {
        findFragmentSpreads: Fr(e == null ? void 0 : e.findFragmentSpreads),
        lookup: Fr(e == null ? void 0 : e.lookup),
        transform: Fr(e == null ? void 0 : e.transform)
      }
    });
  }
  function $k(e) {
    return !!e && 'dirtyKey' in e;
  }
  function Fr(e) {
    return $k(e) ? e.size : void 0;
  }
  function i_(e) {
    return e != null;
  }
  function o_(e) {
    return Af(e).map(function (t) {
      return { cache: t };
    });
  }
  function Af(e) {
    return e
      ? je(
          je(
            [Fr(e == null ? void 0 : e.performWork)],
            Af(e == null ? void 0 : e.left),
            !0
          ),
          Af(e == null ? void 0 : e.right),
          !0
        ).filter(i_)
      : [];
  }
  function If(e) {
    var t;
    return e
      ? je(
          je(
            [
              (t = e == null ? void 0 : e.getMemoryInternals) === null ||
              t === void 0
                ? void 0
                : t.call(e)
            ],
            If(e == null ? void 0 : e.left),
            !0
          ),
          If(e == null ? void 0 : e.right),
          !0
        ).filter(i_)
      : [];
  }
  var Jr = Object.assign(
    function (t) {
      return JSON.stringify(t, zk);
    },
    {
      reset: function () {
        fi = new Pk(er.canonicalStringify || 1e3);
      }
    }
  );
  globalThis.__DEV__ !== !1 &&
    Ch('canonicalStringify', function () {
      return fi.size;
    });
  var fi;
  Jr.reset();
  function zk(e, t) {
    if (t && typeof t == 'object') {
      var r = Object.getPrototypeOf(t);
      if (r === Object.prototype || r === null) {
        var n = Object.keys(t);
        if (n.every(Bk)) return t;
        var i = JSON.stringify(n),
          o = fi.get(i);
        if (!o) {
          n.sort();
          var a = JSON.stringify(n);
          (o = fi.get(a) || n), fi.set(i, o), fi.set(a, o);
        }
        var s = Object.create(r);
        return (
          o.forEach(function (u) {
            s[u] = t[u];
          }),
          s
        );
      }
    }
    return t;
  }
  function Bk(e, t, r) {
    return t === 0 || r[t - 1] <= e;
  }
  function Oi(e) {
    return { __ref: String(e) };
  }
  function Y(e) {
    return Boolean(e && typeof e == 'object' && typeof e.__ref == 'string');
  }
  function Uk(e) {
    return ve(e) && e.kind === 'Document' && Array.isArray(e.definitions);
  }
  function Qk(e) {
    return e.kind === 'StringValue';
  }
  function qk(e) {
    return e.kind === 'BooleanValue';
  }
  function Wk(e) {
    return e.kind === 'IntValue';
  }
  function Hk(e) {
    return e.kind === 'FloatValue';
  }
  function Gk(e) {
    return e.kind === 'Variable';
  }
  function Kk(e) {
    return e.kind === 'ObjectValue';
  }
  function Yk(e) {
    return e.kind === 'ListValue';
  }
  function Jk(e) {
    return e.kind === 'EnumValue';
  }
  function Xk(e) {
    return e.kind === 'NullValue';
  }
  function Mi(e, t, r, n) {
    if (Wk(r) || Hk(r)) e[t.value] = Number(r.value);
    else if (qk(r) || Qk(r)) e[t.value] = r.value;
    else if (Kk(r)) {
      var i = {};
      r.fields.map(function (a) {
        return Mi(i, a.name, a.value, n);
      }),
        (e[t.value] = i);
    } else if (Gk(r)) {
      var o = (n || {})[r.name.value];
      e[t.value] = o;
    } else if (Yk(r))
      e[t.value] = r.values.map(function (a) {
        var s = {};
        return Mi(s, t, a, n), s[t.value];
      });
    else if (Jk(r)) e[t.value] = r.value;
    else if (Xk(r)) e[t.value] = null;
    else throw Ue(96, t.value, r.kind);
  }
  function Zk(e, t) {
    var r = null;
    e.directives &&
      ((r = {}),
      e.directives.forEach(function (i) {
        (r[i.name.value] = {}),
          i.arguments &&
            i.arguments.forEach(function (o) {
              var a = o.name,
                s = o.value;
              return Mi(r[i.name.value], a, s, t);
            });
      }));
    var n = null;
    return (
      e.arguments &&
        e.arguments.length &&
        ((n = {}),
        e.arguments.forEach(function (i) {
          var o = i.name,
            a = i.value;
          return Mi(n, o, a, t);
        })),
      a_(e.name.value, n, r)
    );
  }
  var e4 = [
      'connection',
      'include',
      'skip',
      'client',
      'rest',
      'export',
      'nonreactive'
    ],
    mo = Jr,
    a_ = Object.assign(
      function (e, t, r) {
        if (t && r && r.connection && r.connection.key)
          if (r.connection.filter && r.connection.filter.length > 0) {
            var n = r.connection.filter ? r.connection.filter : [];
            n.sort();
            var i = {};
            return (
              n.forEach(function (s) {
                i[s] = t[s];
              }),
              ''.concat(r.connection.key, '(').concat(mo(i), ')')
            );
          } else return r.connection.key;
        var o = e;
        if (t) {
          var a = mo(t);
          o += '('.concat(a, ')');
        }
        return (
          r &&
            Object.keys(r).forEach(function (s) {
              e4.indexOf(s) === -1 &&
                (r[s] && Object.keys(r[s]).length
                  ? (o += '@'.concat(s, '(').concat(mo(r[s]), ')'))
                  : (o += '@'.concat(s)));
            }),
          o
        );
      },
      {
        setStringify: function (e) {
          var t = mo;
          return (mo = e), t;
        }
      }
    );
  function vl(e, t) {
    if (e.arguments && e.arguments.length) {
      var r = {};
      return (
        e.arguments.forEach(function (n) {
          var i = n.name,
            o = n.value;
          return Mi(r, i, o, t);
        }),
        r
      );
    }
    return null;
  }
  function Er(e) {
    return e.alias ? e.alias.value : e.name.value;
  }
  function Ff(e, t, r) {
    for (var n, i = 0, o = t.selections; i < o.length; i++) {
      var a = o[i];
      if (en(a)) {
        if (a.name.value === '__typename') return e[Er(a)];
      } else n ? n.push(a) : (n = [a]);
    }
    if (typeof e.__typename == 'string') return e.__typename;
    if (n)
      for (var s = 0, u = n; s < u.length; s++) {
        var a = u[s],
          l = Ff(e, pl(a, r).selectionSet, r);
        if (typeof l == 'string') return l;
      }
  }
  function en(e) {
    return e.kind === 'Field';
  }
  function t4(e) {
    return e.kind === 'InlineFragment';
  }
  function Zi(e) {
    R(e && e.kind === 'Document', 88);
    var t = e.definitions
      .filter(function (r) {
        return r.kind !== 'FragmentDefinition';
      })
      .map(function (r) {
        if (r.kind !== 'OperationDefinition') throw Ue(89, r.kind);
        return r;
      });
    return R(t.length <= 1, 90, t.length), e;
  }
  function Rn(e) {
    return (
      Zi(e),
      e.definitions.filter(function (t) {
        return t.kind === 'OperationDefinition';
      })[0]
    );
  }
  function ko(e) {
    return (
      e.definitions
        .filter(function (t) {
          return t.kind === 'OperationDefinition' && !!t.name;
        })
        .map(function (t) {
          return t.name.value;
        })[0] || null
    );
  }
  function eo(e) {
    return e.definitions.filter(function (t) {
      return t.kind === 'FragmentDefinition';
    });
  }
  function s_(e) {
    var t = Rn(e);
    return R(t && t.operation === 'query', 91), t;
  }
  function u_(e) {
    R(e.kind === 'Document', 92), R(e.definitions.length <= 1, 93);
    var t = e.definitions[0];
    return R(t.kind === 'FragmentDefinition', 94), t;
  }
  function Pa(e) {
    Zi(e);
    for (var t, r = 0, n = e.definitions; r < n.length; r++) {
      var i = n[r];
      if (i.kind === 'OperationDefinition') {
        var o = i.operation;
        if (o === 'query' || o === 'mutation' || o === 'subscription') return i;
      }
      i.kind === 'FragmentDefinition' && !t && (t = i);
    }
    if (t) return t;
    throw Ue(95);
  }
  function Th(e) {
    var t = Object.create(null),
      r = e && e.variableDefinitions;
    return (
      r &&
        r.length &&
        r.forEach(function (n) {
          n.defaultValue && Mi(t, n.variable.name, n.defaultValue);
        }),
      t
    );
  }
  let Ne = null;
  const Lv = {};
  let r4 = 1;
  const n4 = () =>
    class {
      constructor() {
        this.id = [
          'slot',
          r4++,
          Date.now(),
          Math.random().toString(36).slice(2)
        ].join(':');
      }
      hasValue() {
        for (let t = Ne; t; t = t.parent)
          if (this.id in t.slots) {
            const r = t.slots[this.id];
            if (r === Lv) break;
            return t !== Ne && (Ne.slots[this.id] = r), !0;
          }
        return Ne && (Ne.slots[this.id] = Lv), !1;
      }
      getValue() {
        if (this.hasValue()) return Ne.slots[this.id];
      }
      withValue(t, r, n, i) {
        const o = { __proto__: null, [this.id]: t },
          a = Ne;
        Ne = { parent: a, slots: o };
        try {
          return r.apply(i, n);
        } finally {
          Ne = a;
        }
      }
      static bind(t) {
        const r = Ne;
        return function () {
          const n = Ne;
          try {
            return (Ne = r), t.apply(this, arguments);
          } finally {
            Ne = n;
          }
        };
      }
      static noContext(t, r, n) {
        if (Ne) {
          const i = Ne;
          try {
            return (Ne = null), t.apply(n, r);
          } finally {
            Ne = i;
          }
        } else return t.apply(n, r);
      }
    };
  function Mv(e) {
    try {
      return e();
    } catch {}
  }
  const uc = '@wry/context:Slot',
    i4 = Mv(() => globalThis) || Mv(() => global) || Object.create(null),
    jv = i4,
    ml =
      jv[uc] ||
      Array[uc] ||
      (function (e) {
        try {
          Object.defineProperty(jv, uc, {
            value: e,
            enumerable: !1,
            writable: !1,
            configurable: !0
          });
        } finally {
          return e;
        }
      })(n4()),
    yl = new ml(),
    { hasOwnProperty: o4 } = Object.prototype,
    Nh =
      Array.from ||
      function (e) {
        const t = [];
        return e.forEach(r => t.push(r)), t;
      };
  function _u(e) {
    const { unsubscribe: t } = e;
    typeof t == 'function' && ((e.unsubscribe = void 0), t());
  }
  const va = [],
    a4 = 100;
  function ji(e, t) {
    if (!e) throw new Error(t || 'assertion failure');
  }
  function l_(e, t) {
    const r = e.length;
    return r > 0 && r === t.length && e[r - 1] === t[r - 1];
  }
  function c_(e) {
    switch (e.length) {
      case 0:
        throw new Error('unknown value');
      case 1:
        return e[0];
      case 2:
        throw e[1];
    }
  }
  function f_(e) {
    return e.slice(0);
  }
  class gl {
    constructor(t) {
      (this.fn = t),
        (this.parents = new Set()),
        (this.childValues = new Map()),
        (this.dirtyChildren = null),
        (this.dirty = !0),
        (this.recomputing = !1),
        (this.value = []),
        (this.deps = null),
        ++gl.count;
    }
    peek() {
      if (this.value.length === 1 && !tn(this)) return Vv(this), this.value[0];
    }
    recompute(t) {
      return (
        ji(!this.recomputing, 'already recomputing'),
        Vv(this),
        tn(this) ? s4(this, t) : c_(this.value)
      );
    }
    setDirty() {
      this.dirty || ((this.dirty = !0), d_(this), _u(this));
    }
    dispose() {
      this.setDirty(),
        y_(this),
        Dh(this, (t, r) => {
          t.setDirty(), g_(t, this);
        });
    }
    forget() {
      this.dispose();
    }
    dependOn(t) {
      t.add(this),
        this.deps || (this.deps = va.pop() || new Set()),
        this.deps.add(t);
    }
    forgetDeps() {
      this.deps &&
        (Nh(this.deps).forEach(t => t.delete(this)),
        this.deps.clear(),
        va.push(this.deps),
        (this.deps = null));
    }
  }
  gl.count = 0;
  function Vv(e) {
    const t = yl.getValue();
    if (t)
      return (
        e.parents.add(t),
        t.childValues.has(e) || t.childValues.set(e, []),
        tn(e) ? p_(t, e) : v_(t, e),
        t
      );
  }
  function s4(e, t) {
    return y_(e), yl.withValue(e, u4, [e, t]), c4(e, t) && l4(e), c_(e.value);
  }
  function u4(e, t) {
    e.recomputing = !0;
    const { normalizeResult: r } = e;
    let n;
    r && e.value.length === 1 && (n = f_(e.value)), (e.value.length = 0);
    try {
      if (((e.value[0] = e.fn.apply(null, t)), r && n && !l_(n, e.value)))
        try {
          e.value[0] = r(e.value[0], n[0]);
        } catch {}
    } catch (i) {
      e.value[1] = i;
    }
    e.recomputing = !1;
  }
  function tn(e) {
    return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size);
  }
  function l4(e) {
    (e.dirty = !1), !tn(e) && h_(e);
  }
  function d_(e) {
    Dh(e, p_);
  }
  function h_(e) {
    Dh(e, v_);
  }
  function Dh(e, t) {
    const r = e.parents.size;
    if (r) {
      const n = Nh(e.parents);
      for (let i = 0; i < r; ++i) t(n[i], e);
    }
  }
  function p_(e, t) {
    ji(e.childValues.has(t)), ji(tn(t));
    const r = !tn(e);
    if (!e.dirtyChildren) e.dirtyChildren = va.pop() || new Set();
    else if (e.dirtyChildren.has(t)) return;
    e.dirtyChildren.add(t), r && d_(e);
  }
  function v_(e, t) {
    ji(e.childValues.has(t)), ji(!tn(t));
    const r = e.childValues.get(t);
    r.length === 0
      ? e.childValues.set(t, f_(t.value))
      : l_(r, t.value) || e.setDirty(),
      m_(e, t),
      !tn(e) && h_(e);
  }
  function m_(e, t) {
    const r = e.dirtyChildren;
    r &&
      (r.delete(t),
      r.size === 0 && (va.length < a4 && va.push(r), (e.dirtyChildren = null)));
  }
  function y_(e) {
    e.childValues.size > 0 &&
      e.childValues.forEach((t, r) => {
        g_(e, r);
      }),
      e.forgetDeps(),
      ji(e.dirtyChildren === null);
  }
  function g_(e, t) {
    t.parents.delete(e), e.childValues.delete(t), m_(e, t);
  }
  function c4(e, t) {
    if (typeof e.subscribe == 'function')
      try {
        _u(e), (e.unsubscribe = e.subscribe.apply(null, t));
      } catch {
        return e.setDirty(), !1;
      }
    return !0;
  }
  const f4 = { setDirty: !0, dispose: !0, forget: !0 };
  function __(e) {
    const t = new Map(),
      r = e && e.subscribe;
    function n(i) {
      const o = yl.getValue();
      if (o) {
        let a = t.get(i);
        a || t.set(i, (a = new Set())),
          o.dependOn(a),
          typeof r == 'function' && (_u(a), (a.unsubscribe = r(i)));
      }
    }
    return (
      (n.dirty = function (o, a) {
        const s = t.get(o);
        if (s) {
          const u = a && o4.call(f4, a) ? a : 'setDirty';
          Nh(s).forEach(l => l[u]()), t.delete(o), _u(s);
        }
      }),
      n
    );
  }
  let $v;
  function d4(...e) {
    return ($v || ($v = new Cr(typeof WeakMap == 'function'))).lookupArray(e);
  }
  const lc = new Set();
  function ma(
    e,
    {
      max: t = Math.pow(2, 16),
      keyArgs: r,
      makeCacheKey: n = d4,
      normalizeResult: i,
      subscribe: o,
      cache: a = Rf
    } = Object.create(null)
  ) {
    const s = typeof a == 'function' ? new a(t, f => f.dispose()) : a,
      u = function () {
        const f = n.apply(null, r ? r.apply(null, arguments) : arguments);
        if (f === void 0) return e.apply(null, arguments);
        let v = s.get(f);
        v ||
          (s.set(f, (v = new gl(e))),
          (v.normalizeResult = i),
          (v.subscribe = o),
          (v.forget = () => s.delete(f)));
        const y = v.recompute(Array.prototype.slice.call(arguments));
        return (
          s.set(f, v),
          lc.add(s),
          yl.hasValue() || (lc.forEach(g => g.clean()), lc.clear()),
          y
        );
      };
    Object.defineProperty(u, 'size', {
      get: () => s.size,
      configurable: !1,
      enumerable: !1
    }),
      Object.freeze(
        (u.options = {
          max: t,
          keyArgs: r,
          makeCacheKey: n,
          normalizeResult: i,
          subscribe: o,
          cache: s
        })
      );
    function l(f) {
      const v = f && s.get(f);
      v && v.setDirty();
    }
    (u.dirtyKey = l),
      (u.dirty = function () {
        l(n.apply(null, arguments));
      });
    function c(f) {
      const v = f && s.get(f);
      if (v) return v.peek();
    }
    (u.peekKey = c),
      (u.peek = function () {
        return c(n.apply(null, arguments));
      });
    function d(f) {
      return f ? s.delete(f) : !1;
    }
    return (
      (u.forgetKey = d),
      (u.forget = function () {
        return d(n.apply(null, arguments));
      }),
      (u.makeCacheKey = n),
      (u.getKey = r
        ? function () {
            return n.apply(null, r.apply(null, arguments));
          }
        : n),
      Object.freeze(u)
    );
  }
  function h4(e) {
    return e;
  }
  var w_ = (function () {
      function e(t, r) {
        r === void 0 && (r = Object.create(null)),
          (this.resultCache = xh ? new WeakSet() : new Set()),
          (this.transform = t),
          r.getCacheKey && (this.getCacheKey = r.getCacheKey),
          (this.cached = r.cache !== !1),
          this.resetCache();
      }
      return (
        (e.prototype.getCacheKey = function (t) {
          return [t];
        }),
        (e.identity = function () {
          return new e(h4, { cache: !1 });
        }),
        (e.split = function (t, r, n) {
          return (
            n === void 0 && (n = e.identity()),
            Object.assign(
              new e(
                function (i) {
                  var o = t(i) ? r : n;
                  return o.transformDocument(i);
                },
                { cache: !1 }
              ),
              { left: r, right: n }
            )
          );
        }),
        (e.prototype.resetCache = function () {
          var t = this;
          if (this.cached) {
            var r = new Cr(zn);
            this.performWork = ma(e.prototype.performWork.bind(this), {
              makeCacheKey: function (n) {
                var i = t.getCacheKey(n);
                if (i) return R(Array.isArray(i), 77), r.lookupArray(i);
              },
              max: er['documentTransform.cache'],
              cache: gu
            });
          }
        }),
        (e.prototype.performWork = function (t) {
          return Zi(t), this.transform(t);
        }),
        (e.prototype.transformDocument = function (t) {
          if (this.resultCache.has(t)) return t;
          var r = this.performWork(t);
          return this.resultCache.add(r), r;
        }),
        (e.prototype.concat = function (t) {
          var r = this;
          return Object.assign(
            new e(
              function (n) {
                return t.transformDocument(r.transformDocument(n));
              },
              { cache: !1 }
            ),
            { left: this, right: t }
          );
        }),
        e
      );
    })(),
    jo,
    _n = Object.assign(
      function (e) {
        var t = jo.get(e);
        return t || ((t = ck(e)), jo.set(e, t)), t;
      },
      {
        reset: function () {
          jo = new kh(er.print || 2e3);
        }
      }
    );
  _n.reset();
  globalThis.__DEV__ !== !1 &&
    Ch('print', function () {
      return jo ? jo.size : 0;
    });
  var me = Array.isArray;
  function bt(e) {
    return Array.isArray(e) && e.length > 0;
  }
  var zv = { kind: D.FIELD, name: { kind: D.NAME, value: '__typename' } };
  function b_(e, t) {
    return (
      !e ||
      e.selectionSet.selections.every(function (r) {
        return r.kind === D.FRAGMENT_SPREAD && b_(t[r.name.value], t);
      })
    );
  }
  function p4(e) {
    return b_(Rn(e) || u_(e), Xi(eo(e))) ? null : e;
  }
  function v4(e) {
    var t = new Map(),
      r = new Map();
    return (
      e.forEach(function (n) {
        n && (n.name ? t.set(n.name, n) : n.test && r.set(n.test, n));
      }),
      function (n) {
        var i = t.get(n.name.value);
        return (
          !i &&
            r.size &&
            r.forEach(function (o, a) {
              a(n) && (i = o);
            }),
          i
        );
      }
    );
  }
  function Bv(e) {
    var t = new Map();
    return function (n) {
      n === void 0 && (n = e);
      var i = t.get(n);
      return (
        i ||
          t.set(n, (i = { variables: new Set(), fragmentSpreads: new Set() })),
        i
      );
    };
  }
  function E_(e, t) {
    Zi(t);
    for (
      var r = Bv(''),
        n = Bv(''),
        i = function (h) {
          for (var p = 0, m = void 0; p < h.length && (m = h[p]); ++p)
            if (!me(m)) {
              if (m.kind === D.OPERATION_DEFINITION)
                return r(m.name && m.name.value);
              if (m.kind === D.FRAGMENT_DEFINITION) return n(m.name.value);
            }
          return globalThis.__DEV__ !== !1 && R.error(97), null;
        },
        o = 0,
        a = t.definitions.length - 1;
      a >= 0;
      --a
    )
      t.definitions[a].kind === D.OPERATION_DEFINITION && ++o;
    var s = v4(e),
      u = function (h) {
        return (
          bt(h) &&
          h.map(s).some(function (p) {
            return p && p.remove;
          })
        );
      },
      l = new Map(),
      c = !1,
      d = {
        enter: function (h) {
          if (u(h.directives)) return (c = !0), null;
        }
      },
      f = Ft(t, {
        Field: d,
        InlineFragment: d,
        VariableDefinition: {
          enter: function () {
            return !1;
          }
        },
        Variable: {
          enter: function (h, p, m, w, S) {
            var x = i(S);
            x && x.variables.add(h.name.value);
          }
        },
        FragmentSpread: {
          enter: function (h, p, m, w, S) {
            if (u(h.directives)) return (c = !0), null;
            var x = i(S);
            x && x.fragmentSpreads.add(h.name.value);
          }
        },
        FragmentDefinition: {
          enter: function (h, p, m, w) {
            l.set(JSON.stringify(w), h);
          },
          leave: function (h, p, m, w) {
            var S = l.get(JSON.stringify(w));
            if (h === S) return h;
            if (
              o > 0 &&
              h.selectionSet.selections.every(function (x) {
                return x.kind === D.FIELD && x.name.value === '__typename';
              })
            )
              return (n(h.name.value).removed = !0), (c = !0), null;
          }
        },
        Directive: {
          leave: function (h) {
            if (s(h)) return (c = !0), null;
          }
        }
      });
    if (!c) return t;
    var v = function (h) {
        return (
          h.transitiveVars ||
            ((h.transitiveVars = new Set(h.variables)),
            h.removed ||
              h.fragmentSpreads.forEach(function (p) {
                v(n(p)).transitiveVars.forEach(function (m) {
                  h.transitiveVars.add(m);
                });
              })),
          h
        );
      },
      y = new Set();
    f.definitions.forEach(function (h) {
      h.kind === D.OPERATION_DEFINITION
        ? v(r(h.name && h.name.value)).fragmentSpreads.forEach(function (p) {
            y.add(p);
          })
        : h.kind === D.FRAGMENT_DEFINITION &&
          o === 0 &&
          !n(h.name.value).removed &&
          y.add(h.name.value);
    }),
      y.forEach(function (h) {
        v(n(h)).fragmentSpreads.forEach(function (p) {
          y.add(p);
        });
      });
    var g = function (h) {
        return !!(!y.has(h) || n(h).removed);
      },
      _ = {
        enter: function (h) {
          if (g(h.name.value)) return null;
        }
      };
    return p4(
      Ft(f, {
        FragmentSpread: _,
        FragmentDefinition: _,
        OperationDefinition: {
          leave: function (h) {
            if (h.variableDefinitions) {
              var p = v(r(h.name && h.name.value)).transitiveVars;
              if (p.size < h.variableDefinitions.length)
                return E(E({}, h), {
                  variableDefinitions: h.variableDefinitions.filter(function (
                    m
                  ) {
                    return p.has(m.variable.name.value);
                  })
                });
            }
          }
        }
      })
    );
  }
  var Rh = Object.assign(
    function (e) {
      return Ft(e, {
        SelectionSet: {
          enter: function (t, r, n) {
            if (!(n && n.kind === D.OPERATION_DEFINITION)) {
              var i = t.selections;
              if (!!i) {
                var o = i.some(function (s) {
                  return (
                    en(s) &&
                    (s.name.value === '__typename' ||
                      s.name.value.lastIndexOf('__', 0) === 0)
                  );
                });
                if (!o) {
                  var a = n;
                  if (
                    !(
                      en(a) &&
                      a.directives &&
                      a.directives.some(function (s) {
                        return s.name.value === 'export';
                      })
                    )
                  )
                    return E(E({}, t), {
                      selections: je(je([], i, !0), [zv], !1)
                    });
                }
              }
            }
          }
        }
      });
    },
    {
      added: function (e) {
        return e === zv;
      }
    }
  );
  function m4(e) {
    var t = Pa(e),
      r = t.operation;
    if (r === 'query') return e;
    var n = Ft(e, {
      OperationDefinition: {
        enter: function (i) {
          return E(E({}, i), { operation: 'query' });
        }
      }
    });
    return n;
  }
  function S_(e) {
    Zi(e);
    var t = E_(
      [
        {
          test: function (r) {
            return r.name.value === 'client';
          },
          remove: !0
        }
      ],
      e
    );
    return t;
  }
  function y4(e) {
    return (
      Zi(e),
      Ft(e, {
        FragmentSpread: function (t) {
          var r;
          if (
            !(
              !((r = t.directives) === null || r === void 0) &&
              r.some(function (n) {
                return n.name.value === 'unmask';
              })
            )
          )
            return E(E({}, t), {
              directives: je(
                je([], t.directives || [], !0),
                [
                  {
                    kind: D.DIRECTIVE,
                    name: { kind: D.NAME, value: 'nonreactive' }
                  }
                ],
                !1
              )
            });
        }
      })
    );
  }
  var g4 = Object.prototype.hasOwnProperty;
  function Uv() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return _l(e);
  }
  function _l(e) {
    var t = e[0] || {},
      r = e.length;
    if (r > 1) for (var n = new rn(), i = 1; i < r; ++i) t = n.merge(t, e[i]);
    return t;
  }
  var _4 = function (e, t, r) {
      return this.merge(e[r], t[r]);
    },
    rn = (function () {
      function e(t) {
        t === void 0 && (t = _4),
          (this.reconciler = t),
          (this.isObject = ve),
          (this.pastCopies = new Set());
      }
      return (
        (e.prototype.merge = function (t, r) {
          for (var n = this, i = [], o = 2; o < arguments.length; o++)
            i[o - 2] = arguments[o];
          return ve(r) && ve(t)
            ? (Object.keys(r).forEach(function (a) {
                if (g4.call(t, a)) {
                  var s = t[a];
                  if (r[a] !== s) {
                    var u = n.reconciler.apply(n, je([t, r, a], i, !1));
                    u !== s && ((t = n.shallowCopyForMerge(t)), (t[a] = u));
                  }
                } else (t = n.shallowCopyForMerge(t)), (t[a] = r[a]);
              }),
              t)
            : r;
        }),
        (e.prototype.shallowCopyForMerge = function (t) {
          return (
            ve(t) &&
              (this.pastCopies.has(t) ||
                (Array.isArray(t)
                  ? (t = t.slice(0))
                  : (t = E({ __proto__: Object.getPrototypeOf(t) }, t)),
                this.pastCopies.add(t))),
            t
          );
        }),
        e
      );
    })();
  function w4(e, t) {
    var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
    if (r) return (r = r.call(e)).next.bind(r);
    if (
      Array.isArray(e) ||
      (r = b4(e)) ||
      (t && e && typeof e.length == 'number')
    ) {
      r && (e = r);
      var n = 0;
      return function () {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function b4(e, t) {
    if (!!e) {
      if (typeof e == 'string') return Qv(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      if (
        (r === 'Object' && e.constructor && (r = e.constructor.name),
        r === 'Map' || r === 'Set')
      )
        return Array.from(e);
      if (
        r === 'Arguments' ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return Qv(e, t);
    }
  }
  function Qv(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function qv(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        'value' in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function Ph(e, t, r) {
    return (
      t && qv(e.prototype, t),
      r && qv(e, r),
      Object.defineProperty(e, 'prototype', { writable: !1 }),
      e
    );
  }
  var Ah = function () {
      return typeof Symbol == 'function';
    },
    Ih = function (e) {
      return Ah() && Boolean(Symbol[e]);
    },
    Fh = function (e) {
      return Ih(e) ? Symbol[e] : '@@' + e;
    };
  Ah() && !Ih('observable') && (Symbol.observable = Symbol('observable'));
  var E4 = Fh('iterator'),
    Lf = Fh('observable'),
    x_ = Fh('species');
  function wu(e, t) {
    var r = e[t];
    if (r != null) {
      if (typeof r != 'function') throw new TypeError(r + ' is not a function');
      return r;
    }
  }
  function yo(e) {
    var t = e.constructor;
    return (
      t !== void 0 && ((t = t[x_]), t === null && (t = void 0)),
      t !== void 0 ? t : ee
    );
  }
  function S4(e) {
    return e instanceof ee;
  }
  function Vi(e) {
    Vi.log
      ? Vi.log(e)
      : setTimeout(function () {
          throw e;
        });
  }
  function Is(e) {
    Promise.resolve().then(function () {
      try {
        e();
      } catch (t) {
        Vi(t);
      }
    });
  }
  function O_(e) {
    var t = e._cleanup;
    if (t !== void 0 && ((e._cleanup = void 0), !!t))
      try {
        if (typeof t == 'function') t();
        else {
          var r = wu(t, 'unsubscribe');
          r && r.call(t);
        }
      } catch (n) {
        Vi(n);
      }
  }
  function Mf(e) {
    (e._observer = void 0), (e._queue = void 0), (e._state = 'closed');
  }
  function x4(e) {
    var t = e._queue;
    if (!!t) {
      (e._queue = void 0), (e._state = 'ready');
      for (
        var r = 0;
        r < t.length && (k_(e, t[r].type, t[r].value), e._state !== 'closed');
        ++r
      );
    }
  }
  function k_(e, t, r) {
    e._state = 'running';
    var n = e._observer;
    try {
      var i = wu(n, t);
      switch (t) {
        case 'next':
          i && i.call(n, r);
          break;
        case 'error':
          if ((Mf(e), i)) i.call(n, r);
          else throw r;
          break;
        case 'complete':
          Mf(e), i && i.call(n);
          break;
      }
    } catch (o) {
      Vi(o);
    }
    e._state === 'closed'
      ? O_(e)
      : e._state === 'running' && (e._state = 'ready');
  }
  function cc(e, t, r) {
    if (e._state !== 'closed') {
      if (e._state === 'buffering') {
        e._queue.push({ type: t, value: r });
        return;
      }
      if (e._state !== 'ready') {
        (e._state = 'buffering'),
          (e._queue = [{ type: t, value: r }]),
          Is(function () {
            return x4(e);
          });
        return;
      }
      k_(e, t, r);
    }
  }
  var O4 = (function () {
      function e(r, n) {
        (this._cleanup = void 0),
          (this._observer = r),
          (this._queue = void 0),
          (this._state = 'initializing');
        var i = new k4(this);
        try {
          this._cleanup = n.call(void 0, i);
        } catch (o) {
          i.error(o);
        }
        this._state === 'initializing' && (this._state = 'ready');
      }
      var t = e.prototype;
      return (
        (t.unsubscribe = function () {
          this._state !== 'closed' && (Mf(this), O_(this));
        }),
        Ph(e, [
          {
            key: 'closed',
            get: function () {
              return this._state === 'closed';
            }
          }
        ]),
        e
      );
    })(),
    k4 = (function () {
      function e(r) {
        this._subscription = r;
      }
      var t = e.prototype;
      return (
        (t.next = function (n) {
          cc(this._subscription, 'next', n);
        }),
        (t.error = function (n) {
          cc(this._subscription, 'error', n);
        }),
        (t.complete = function () {
          cc(this._subscription, 'complete');
        }),
        Ph(e, [
          {
            key: 'closed',
            get: function () {
              return this._subscription._state === 'closed';
            }
          }
        ]),
        e
      );
    })(),
    ee = (function () {
      function e(r) {
        if (!(this instanceof e))
          throw new TypeError('Observable cannot be called as a function');
        if (typeof r != 'function')
          throw new TypeError('Observable initializer must be a function');
        this._subscriber = r;
      }
      var t = e.prototype;
      return (
        (t.subscribe = function (n) {
          return (
            (typeof n != 'object' || n === null) &&
              (n = { next: n, error: arguments[1], complete: arguments[2] }),
            new O4(n, this._subscriber)
          );
        }),
        (t.forEach = function (n) {
          var i = this;
          return new Promise(function (o, a) {
            if (typeof n != 'function') {
              a(new TypeError(n + ' is not a function'));
              return;
            }
            function s() {
              u.unsubscribe(), o();
            }
            var u = i.subscribe({
              next: function (l) {
                try {
                  n(l, s);
                } catch (c) {
                  a(c), u.unsubscribe();
                }
              },
              error: a,
              complete: o
            });
          });
        }),
        (t.map = function (n) {
          var i = this;
          if (typeof n != 'function')
            throw new TypeError(n + ' is not a function');
          var o = yo(this);
          return new o(function (a) {
            return i.subscribe({
              next: function (s) {
                try {
                  s = n(s);
                } catch (u) {
                  return a.error(u);
                }
                a.next(s);
              },
              error: function (s) {
                a.error(s);
              },
              complete: function () {
                a.complete();
              }
            });
          });
        }),
        (t.filter = function (n) {
          var i = this;
          if (typeof n != 'function')
            throw new TypeError(n + ' is not a function');
          var o = yo(this);
          return new o(function (a) {
            return i.subscribe({
              next: function (s) {
                try {
                  if (!n(s)) return;
                } catch (u) {
                  return a.error(u);
                }
                a.next(s);
              },
              error: function (s) {
                a.error(s);
              },
              complete: function () {
                a.complete();
              }
            });
          });
        }),
        (t.reduce = function (n) {
          var i = this;
          if (typeof n != 'function')
            throw new TypeError(n + ' is not a function');
          var o = yo(this),
            a = arguments.length > 1,
            s = !1,
            u = arguments[1],
            l = u;
          return new o(function (c) {
            return i.subscribe({
              next: function (d) {
                var f = !s;
                if (((s = !0), !f || a))
                  try {
                    l = n(l, d);
                  } catch (v) {
                    return c.error(v);
                  }
                else l = d;
              },
              error: function (d) {
                c.error(d);
              },
              complete: function () {
                if (!s && !a)
                  return c.error(
                    new TypeError('Cannot reduce an empty sequence')
                  );
                c.next(l), c.complete();
              }
            });
          });
        }),
        (t.concat = function () {
          for (
            var n = this, i = arguments.length, o = new Array(i), a = 0;
            a < i;
            a++
          )
            o[a] = arguments[a];
          var s = yo(this);
          return new s(function (u) {
            var l,
              c = 0;
            function d(f) {
              l = f.subscribe({
                next: function (v) {
                  u.next(v);
                },
                error: function (v) {
                  u.error(v);
                },
                complete: function () {
                  c === o.length
                    ? ((l = void 0), u.complete())
                    : d(s.from(o[c++]));
                }
              });
            }
            return (
              d(n),
              function () {
                l && (l.unsubscribe(), (l = void 0));
              }
            );
          });
        }),
        (t.flatMap = function (n) {
          var i = this;
          if (typeof n != 'function')
            throw new TypeError(n + ' is not a function');
          var o = yo(this);
          return new o(function (a) {
            var s = [],
              u = i.subscribe({
                next: function (c) {
                  if (n)
                    try {
                      c = n(c);
                    } catch (f) {
                      return a.error(f);
                    }
                  var d = o.from(c).subscribe({
                    next: function (f) {
                      a.next(f);
                    },
                    error: function (f) {
                      a.error(f);
                    },
                    complete: function () {
                      var f = s.indexOf(d);
                      f >= 0 && s.splice(f, 1), l();
                    }
                  });
                  s.push(d);
                },
                error: function (c) {
                  a.error(c);
                },
                complete: function () {
                  l();
                }
              });
            function l() {
              u.closed && s.length === 0 && a.complete();
            }
            return function () {
              s.forEach(function (c) {
                return c.unsubscribe();
              }),
                u.unsubscribe();
            };
          });
        }),
        (t[Lf] = function () {
          return this;
        }),
        (e.from = function (n) {
          var i = typeof this == 'function' ? this : e;
          if (n == null) throw new TypeError(n + ' is not an object');
          var o = wu(n, Lf);
          if (o) {
            var a = o.call(n);
            if (Object(a) !== a) throw new TypeError(a + ' is not an object');
            return S4(a) && a.constructor === i
              ? a
              : new i(function (s) {
                  return a.subscribe(s);
                });
          }
          if (Ih('iterator') && ((o = wu(n, E4)), o))
            return new i(function (s) {
              Is(function () {
                if (!s.closed) {
                  for (var u = w4(o.call(n)), l; !(l = u()).done; ) {
                    var c = l.value;
                    if ((s.next(c), s.closed)) return;
                  }
                  s.complete();
                }
              });
            });
          if (Array.isArray(n))
            return new i(function (s) {
              Is(function () {
                if (!s.closed) {
                  for (var u = 0; u < n.length; ++u)
                    if ((s.next(n[u]), s.closed)) return;
                  s.complete();
                }
              });
            });
          throw new TypeError(n + ' is not observable');
        }),
        (e.of = function () {
          for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
            i[o] = arguments[o];
          var a = typeof this == 'function' ? this : e;
          return new a(function (s) {
            Is(function () {
              if (!s.closed) {
                for (var u = 0; u < i.length; ++u)
                  if ((s.next(i[u]), s.closed)) return;
                s.complete();
              }
            });
          });
        }),
        Ph(e, null, [
          {
            key: x_,
            get: function () {
              return this;
            }
          }
        ]),
        e
      );
    })();
  Ah() &&
    Object.defineProperty(ee, Symbol('extensions'), {
      value: { symbol: Lf, hostReportError: Vi },
      configurable: !0
    });
  function C4(e) {
    var t,
      r = e.Symbol;
    if (typeof r == 'function')
      if (r.observable) t = r.observable;
      else {
        typeof r.for == 'function'
          ? (t = r.for('https://github.com/benlesh/symbol-observable'))
          : (t = r('https://github.com/benlesh/symbol-observable'));
        try {
          r.observable = t;
        } catch {}
      }
    else t = '@@observable';
    return t;
  }
  var Yn;
  typeof self < 'u'
    ? (Yn = self)
    : typeof window < 'u'
    ? (Yn = window)
    : typeof global < 'u'
    ? (Yn = global)
    : typeof cd < 'u'
    ? (Yn = cd)
    : (Yn = Function('return this')());
  C4(Yn);
  var Wv = ee.prototype,
    Hv = '@@observable';
  Wv[Hv] ||
    (Wv[Hv] = function () {
      return this;
    });
  function T4(e) {
    return e.catch(function () {}), e;
  }
  var N4 = Object.prototype.toString;
  function C_(e) {
    return jf(e);
  }
  function jf(e, t) {
    switch (N4.call(e)) {
      case '[object Array]': {
        if (((t = t || new Map()), t.has(e))) return t.get(e);
        var r = e.slice(0);
        return (
          t.set(e, r),
          r.forEach(function (i, o) {
            r[o] = jf(i, t);
          }),
          r
        );
      }
      case '[object Object]': {
        if (((t = t || new Map()), t.has(e))) return t.get(e);
        var n = Object.create(Object.getPrototypeOf(e));
        return (
          t.set(e, n),
          Object.keys(e).forEach(function (i) {
            n[i] = jf(e[i], t);
          }),
          n
        );
      }
      default:
        return e;
    }
  }
  function D4(e) {
    var t = new Set([e]);
    return (
      t.forEach(function (r) {
        ve(r) &&
          R4(r) === r &&
          Object.getOwnPropertyNames(r).forEach(function (n) {
            ve(r[n]) && t.add(r[n]);
          });
      }),
      e
    );
  }
  function R4(e) {
    if (globalThis.__DEV__ !== !1 && !Object.isFrozen(e))
      try {
        Object.freeze(e);
      } catch (t) {
        if (t instanceof TypeError) return null;
        throw t;
      }
    return e;
  }
  function $i(e) {
    return globalThis.__DEV__ !== !1 && D4(e), e;
  }
  function Vo(e, t, r) {
    var n = [];
    e.forEach(function (i) {
      return i[t] && n.push(i);
    }),
      n.forEach(function (i) {
        return i[t](r);
      });
  }
  function fc(e, t, r) {
    return new ee(function (n) {
      var i = {
        then: function (u) {
          return new Promise(function (l) {
            return l(u());
          });
        }
      };
      function o(u, l) {
        return function (c) {
          if (u) {
            var d = function () {
              return n.closed ? 0 : u(c);
            };
            i = i.then(d, d).then(
              function (f) {
                return n.next(f);
              },
              function (f) {
                return n.error(f);
              }
            );
          } else n[l](c);
        };
      }
      var a = {
          next: o(t, 'next'),
          error: o(r, 'error'),
          complete: function () {
            i.then(function () {
              return n.complete();
            });
          }
        },
        s = e.subscribe(a);
      return function () {
        return s.unsubscribe();
      };
    });
  }
  function T_(e) {
    function t(r) {
      Object.defineProperty(e, r, { value: ee });
    }
    return Oh && Symbol.species && t(Symbol.species), t('@@species'), e;
  }
  function Gv(e) {
    return e && typeof e.then == 'function';
  }
  var Jn = (function (e) {
    nr(t, e);
    function t(r) {
      var n =
        e.call(this, function (i) {
          return (
            n.addObserver(i),
            function () {
              return n.removeObserver(i);
            }
          );
        }) || this;
      return (
        (n.observers = new Set()),
        (n.promise = new Promise(function (i, o) {
          (n.resolve = i), (n.reject = o);
        })),
        (n.handlers = {
          next: function (i) {
            n.sub !== null &&
              ((n.latest = ['next', i]),
              n.notify('next', i),
              Vo(n.observers, 'next', i));
          },
          error: function (i) {
            var o = n.sub;
            o !== null &&
              (o &&
                setTimeout(function () {
                  return o.unsubscribe();
                }),
              (n.sub = null),
              (n.latest = ['error', i]),
              n.reject(i),
              n.notify('error', i),
              Vo(n.observers, 'error', i));
          },
          complete: function () {
            var i = n,
              o = i.sub,
              a = i.sources,
              s = a === void 0 ? [] : a;
            if (o !== null) {
              var u = s.shift();
              u
                ? Gv(u)
                  ? u.then(function (l) {
                      return (n.sub = l.subscribe(n.handlers));
                    }, n.handlers.error)
                  : (n.sub = u.subscribe(n.handlers))
                : (o &&
                    setTimeout(function () {
                      return o.unsubscribe();
                    }),
                  (n.sub = null),
                  n.latest && n.latest[0] === 'next'
                    ? n.resolve(n.latest[1])
                    : n.resolve(),
                  n.notify('complete'),
                  Vo(n.observers, 'complete'));
            }
          }
        }),
        (n.nextResultListeners = new Set()),
        (n.cancel = function (i) {
          n.reject(i), (n.sources = []), n.handlers.error(i);
        }),
        n.promise.catch(function (i) {}),
        typeof r == 'function' && (r = [new ee(r)]),
        Gv(r)
          ? r.then(function (i) {
              return n.start(i);
            }, n.handlers.error)
          : n.start(r),
        n
      );
    }
    return (
      (t.prototype.start = function (r) {
        this.sub === void 0 &&
          ((this.sources = Array.from(r)), this.handlers.complete());
      }),
      (t.prototype.deliverLastMessage = function (r) {
        if (this.latest) {
          var n = this.latest[0],
            i = r[n];
          i && i.call(r, this.latest[1]),
            this.sub === null && n === 'next' && r.complete && r.complete();
        }
      }),
      (t.prototype.addObserver = function (r) {
        this.observers.has(r) ||
          (this.deliverLastMessage(r), this.observers.add(r));
      }),
      (t.prototype.removeObserver = function (r) {
        this.observers.delete(r) &&
          this.observers.size < 1 &&
          this.handlers.complete();
      }),
      (t.prototype.notify = function (r, n) {
        var i = this.nextResultListeners;
        i.size &&
          ((this.nextResultListeners = new Set()),
          i.forEach(function (o) {
            return o(r, n);
          }));
      }),
      (t.prototype.beforeNext = function (r) {
        var n = !1;
        this.nextResultListeners.add(function (i, o) {
          n || ((n = !0), r(i, o));
        });
      }),
      t
    );
  })(ee);
  T_(Jn);
  function ki(e) {
    return 'incremental' in e;
  }
  function P4(e) {
    return 'hasNext' in e && 'data' in e;
  }
  function A4(e) {
    return ki(e) || P4(e);
  }
  function I4(e) {
    return ve(e) && 'payload' in e;
  }
  function N_(e, t) {
    var r = e,
      n = new rn();
    return (
      ki(t) &&
        bt(t.incremental) &&
        t.incremental.forEach(function (i) {
          for (var o = i.data, a = i.path, s = a.length - 1; s >= 0; --s) {
            var u = a[s],
              l = !isNaN(+u),
              c = l ? [] : {};
            (c[u] = o), (o = c);
          }
          r = n.merge(r, o);
        }),
      r
    );
  }
  function Fs(e) {
    var t = Vf(e);
    return bt(t);
  }
  function Vf(e) {
    var t = bt(e.errors) ? e.errors.slice(0) : [];
    return (
      ki(e) &&
        bt(e.incremental) &&
        e.incremental.forEach(function (r) {
          r.errors && t.push.apply(t, r.errors);
        }),
      t
    );
  }
  function Pn() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var r = Object.create(null);
    return (
      e.forEach(function (n) {
        !n ||
          Object.keys(n).forEach(function (i) {
            var o = n[i];
            o !== void 0 && (r[i] = o);
          });
      }),
      r
    );
  }
  function Ls(e, t) {
    return Pn(
      e,
      t,
      t.variables && { variables: Pn(E(E({}, e && e.variables), t.variables)) }
    );
  }
  function dc(e) {
    return new ee(function (t) {
      t.error(e);
    });
  }
  var D_ = function (e, t, r) {
    var n = new Error(r);
    throw (
      ((n.name = 'ServerError'),
      (n.response = e),
      (n.statusCode = e.status),
      (n.result = t),
      n)
    );
  };
  function F4(e) {
    for (
      var t = ['query', 'operationName', 'variables', 'extensions', 'context'],
        r = 0,
        n = Object.keys(e);
      r < n.length;
      r++
    ) {
      var i = n[r];
      if (t.indexOf(i) < 0) throw Ue(46, i);
    }
    return e;
  }
  function L4(e, t) {
    var r = E({}, e),
      n = function (o) {
        typeof o == 'function' ? (r = E(E({}, r), o(r))) : (r = E(E({}, r), o));
      },
      i = function () {
        return E({}, r);
      };
    return (
      Object.defineProperty(t, 'setContext', { enumerable: !1, value: n }),
      Object.defineProperty(t, 'getContext', { enumerable: !1, value: i }),
      t
    );
  }
  function M4(e) {
    var t = {
      variables: e.variables || {},
      extensions: e.extensions || {},
      operationName: e.operationName,
      query: e.query
    };
    return (
      t.operationName ||
        (t.operationName =
          typeof t.query != 'string' ? ko(t.query) || void 0 : ''),
      t
    );
  }
  function j4(e, t) {
    var r = E({}, e),
      n = new Set(Object.keys(e));
    return (
      Ft(t, {
        Variable: function (i, o, a) {
          a && a.kind !== 'VariableDefinition' && n.delete(i.name.value);
        }
      }),
      n.forEach(function (i) {
        delete r[i];
      }),
      r
    );
  }
  function Kv(e, t) {
    return t ? t(e) : ee.of();
  }
  function go(e) {
    return typeof e == 'function' ? new Aa(e) : e;
  }
  function cs(e) {
    return e.request.length <= 1;
  }
  var Aa = (function () {
      function e(t) {
        t && (this.request = t);
      }
      return (
        (e.empty = function () {
          return new e(function () {
            return ee.of();
          });
        }),
        (e.from = function (t) {
          return t.length === 0
            ? e.empty()
            : t.map(go).reduce(function (r, n) {
                return r.concat(n);
              });
        }),
        (e.split = function (t, r, n) {
          var i = go(r),
            o = go(n || new e(Kv)),
            a;
          return (
            cs(i) && cs(o)
              ? (a = new e(function (s) {
                  return t(s)
                    ? i.request(s) || ee.of()
                    : o.request(s) || ee.of();
                }))
              : (a = new e(function (s, u) {
                  return t(s)
                    ? i.request(s, u) || ee.of()
                    : o.request(s, u) || ee.of();
                })),
            Object.assign(a, { left: i, right: o })
          );
        }),
        (e.execute = function (t, r) {
          return t.request(L4(r.context, M4(F4(r)))) || ee.of();
        }),
        (e.concat = function (t, r) {
          var n = go(t);
          if (cs(n)) return globalThis.__DEV__ !== !1 && R.warn(38, n), n;
          var i = go(r),
            o;
          return (
            cs(i)
              ? (o = new e(function (a) {
                  return (
                    n.request(a, function (s) {
                      return i.request(s) || ee.of();
                    }) || ee.of()
                  );
                }))
              : (o = new e(function (a, s) {
                  return (
                    n.request(a, function (u) {
                      return i.request(u, s) || ee.of();
                    }) || ee.of()
                  );
                })),
            Object.assign(o, { left: n, right: i })
          );
        }),
        (e.prototype.split = function (t, r, n) {
          return this.concat(e.split(t, r, n || new e(Kv)));
        }),
        (e.prototype.concat = function (t) {
          return e.concat(this, t);
        }),
        (e.prototype.request = function (t, r) {
          throw Ue(39);
        }),
        (e.prototype.onError = function (t, r) {
          if (r && r.error) return r.error(t), !1;
          throw t;
        }),
        (e.prototype.setOnError = function (t) {
          return (this.onError = t), this;
        }),
        e
      );
    })(),
    $f = Aa.execute;
  function V4(e) {
    var t,
      r = e[Symbol.asyncIterator]();
    return (
      (t = {
        next: function () {
          return r.next();
        }
      }),
      (t[Symbol.asyncIterator] = function () {
        return this;
      }),
      t
    );
  }
  function $4(e) {
    var t = null,
      r = null,
      n = !1,
      i = [],
      o = [];
    function a(d) {
      if (!r) {
        if (o.length) {
          var f = o.shift();
          if (Array.isArray(f) && f[0]) return f[0]({ value: d, done: !1 });
        }
        i.push(d);
      }
    }
    function s(d) {
      r = d;
      var f = o.slice();
      f.forEach(function (v) {
        v[1](d);
      }),
        !t || t();
    }
    function u() {
      n = !0;
      var d = o.slice();
      d.forEach(function (f) {
        f[0]({ value: void 0, done: !0 });
      }),
        !t || t();
    }
    (t = function () {
      (t = null),
        e.removeListener('data', a),
        e.removeListener('error', s),
        e.removeListener('end', u),
        e.removeListener('finish', u),
        e.removeListener('close', u);
    }),
      e.on('data', a),
      e.on('error', s),
      e.on('end', u),
      e.on('finish', u),
      e.on('close', u);
    function l() {
      return new Promise(function (d, f) {
        if (r) return f(r);
        if (i.length) return d({ value: i.shift(), done: !1 });
        if (n) return d({ value: void 0, done: !0 });
        o.push([d, f]);
      });
    }
    var c = {
      next: function () {
        return l();
      }
    };
    return (
      hl &&
        (c[Symbol.asyncIterator] = function () {
          return this;
        }),
      c
    );
  }
  function z4(e) {
    var t = !1,
      r = {
        next: function () {
          return t
            ? Promise.resolve({ value: void 0, done: !0 })
            : ((t = !0),
              new Promise(function (n, i) {
                e.then(function (o) {
                  n({ value: o, done: !1 });
                }).catch(i);
              }));
        }
      };
    return (
      hl &&
        (r[Symbol.asyncIterator] = function () {
          return this;
        }),
      r
    );
  }
  function Yv(e) {
    var t = {
      next: function () {
        return e.read();
      }
    };
    return (
      hl &&
        (t[Symbol.asyncIterator] = function () {
          return this;
        }),
      t
    );
  }
  function B4(e) {
    return !!e.body;
  }
  function U4(e) {
    return !!e.getReader;
  }
  function Q4(e) {
    return !!(hl && e[Symbol.asyncIterator]);
  }
  function q4(e) {
    return !!e.stream;
  }
  function W4(e) {
    return !!e.arrayBuffer;
  }
  function H4(e) {
    return !!e.pipe;
  }
  function G4(e) {
    var t = e;
    if ((B4(e) && (t = e.body), Q4(t))) return V4(t);
    if (U4(t)) return Yv(t.getReader());
    if (q4(t)) return Yv(t.stream().getReader());
    if (W4(t)) return z4(t.arrayBuffer());
    if (H4(t)) return $4(t);
    throw new Error(
      'Unknown body type for responseIterator. Please pass a streamable response.'
    );
  }
  var Lh = Symbol();
  function K4(e) {
    return e.extensions ? Array.isArray(e.extensions[Lh]) : !1;
  }
  function R_(e) {
    return e.hasOwnProperty('graphQLErrors');
  }
  var Y4 = function (e) {
      var t = je(
        je(je([], e.graphQLErrors, !0), e.clientErrors, !0),
        e.protocolErrors,
        !0
      );
      return (
        e.networkError && t.push(e.networkError),
        t.map(function (r) {
          return (ve(r) && r.message) || 'Error message not found.';
        }).join(`
`)
      );
    },
    sr = (function (e) {
      nr(t, e);
      function t(r) {
        var n = r.graphQLErrors,
          i = r.protocolErrors,
          o = r.clientErrors,
          a = r.networkError,
          s = r.errorMessage,
          u = r.extraInfo,
          l = e.call(this, s) || this;
        return (
          (l.name = 'ApolloError'),
          (l.graphQLErrors = n || []),
          (l.protocolErrors = i || []),
          (l.clientErrors = o || []),
          (l.networkError = a || null),
          (l.message = s || Y4(l)),
          (l.extraInfo = u),
          (l.cause =
            je(je(je([a], n || [], !0), i || [], !0), o || [], !0).find(
              function (c) {
                return !!c;
              }
            ) || null),
          (l.__proto__ = t.prototype),
          l
        );
      }
      return t;
    })(Error),
    Jv = Object.prototype.hasOwnProperty;
  function J4(e, t) {
    return Ar(this, void 0, void 0, function () {
      var r,
        n,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        d,
        f,
        v,
        y,
        g,
        _,
        h,
        p,
        m,
        w,
        S,
        x,
        O,
        C,
        M;
      return Ir(this, function (I) {
        switch (I.label) {
          case 0:
            if (TextDecoder === void 0)
              throw new Error(
                'TextDecoder must be defined in the environment: please import a polyfill.'
              );
            (r = new TextDecoder('utf-8')),
              (n =
                (M = e.headers) === null || M === void 0
                  ? void 0
                  : M.get('content-type')),
              (i = 'boundary='),
              (o =
                n != null && n.includes(i)
                  ? n == null
                    ? void 0
                    : n
                        .substring(
                          (n == null ? void 0 : n.indexOf(i)) + i.length
                        )
                        .replace(/['"]/g, '')
                        .replace(/\;(.*)/gm, '')
                        .trim()
                  : '-'),
              (a = `\r
--`.concat(o)),
              (s = ''),
              (u = G4(e)),
              (l = !0),
              (I.label = 1);
          case 1:
            return l ? [4, u.next()] : [3, 3];
          case 2:
            for (
              c = I.sent(),
                d = c.value,
                f = c.done,
                v = typeof d == 'string' ? d : r.decode(d),
                y = s.length - a.length + 1,
                l = !f,
                s += v,
                g = s.indexOf(a, y);
              g > -1;

            ) {
              if (
                ((_ = void 0),
                (O = [s.slice(0, g), s.slice(g + a.length)]),
                (_ = O[0]),
                (s = O[1]),
                (h = _.indexOf(`\r
\r
`)),
                (p = X4(_.slice(0, h))),
                (m = p['content-type']),
                m && m.toLowerCase().indexOf('application/json') === -1)
              )
                throw new Error(
                  'Unsupported patch content type: application/json is required.'
                );
              if (((w = _.slice(h)), w)) {
                if (
                  ((S = P_(e, w)),
                  Object.keys(S).length > 1 ||
                    'data' in S ||
                    'incremental' in S ||
                    'errors' in S ||
                    'payload' in S)
                )
                  if (I4(S)) {
                    if (((x = {}), 'payload' in S)) {
                      if (Object.keys(S).length === 1 && S.payload === null)
                        return [2];
                      x = E({}, S.payload);
                    }
                    'errors' in S &&
                      (x = E(E({}, x), {
                        extensions: E(
                          E({}, 'extensions' in x ? x.extensions : null),
                          ((C = {}), (C[Lh] = S.errors), C)
                        )
                      })),
                      t(x);
                  } else t(S);
                else if (
                  Object.keys(S).length === 1 &&
                  'hasNext' in S &&
                  !S.hasNext
                )
                  return [2];
              }
              g = s.indexOf(a);
            }
            return [3, 1];
          case 3:
            return [2];
        }
      });
    });
  }
  function X4(e) {
    var t = {};
    return (
      e
        .split(
          `
`
        )
        .forEach(function (r) {
          var n = r.indexOf(':');
          if (n > -1) {
            var i = r.slice(0, n).trim().toLowerCase(),
              o = r.slice(n + 1).trim();
            t[i] = o;
          }
        }),
      t
    );
  }
  function P_(e, t) {
    if (e.status >= 300) {
      var r = function () {
        try {
          return JSON.parse(t);
        } catch {
          return t;
        }
      };
      D_(
        e,
        r(),
        'Response not successful: Received status code '.concat(e.status)
      );
    }
    try {
      return JSON.parse(t);
    } catch (i) {
      var n = i;
      throw (
        ((n.name = 'ServerParseError'),
        (n.response = e),
        (n.statusCode = e.status),
        (n.bodyText = t),
        n)
      );
    }
  }
  function Z4(e, t) {
    e.result && e.result.errors && e.result.data && t.next(e.result),
      t.error(e);
  }
  function e2(e) {
    return function (t) {
      return t
        .text()
        .then(function (r) {
          return P_(t, r);
        })
        .then(function (r) {
          return (
            !Array.isArray(r) &&
              !Jv.call(r, 'data') &&
              !Jv.call(r, 'errors') &&
              D_(
                t,
                r,
                "Server response was missing for query '".concat(
                  Array.isArray(e)
                    ? e.map(function (n) {
                        return n.operationName;
                      })
                    : e.operationName,
                  "'."
                )
              ),
            r
          );
        });
    };
  }
  var zf = function (e, t) {
      var r;
      try {
        r = JSON.stringify(e);
      } catch (i) {
        var n = Ue(42, t, i.message);
        throw ((n.parseError = i), n);
      }
      return r;
    },
    t2 = { includeQuery: !0, includeExtensions: !1, preserveHeaderCase: !1 },
    r2 = { accept: '*/*', 'content-type': 'application/json' },
    n2 = { method: 'POST' },
    i2 = { http: t2, headers: r2, options: n2 },
    o2 = function (e, t) {
      return t(e);
    };
  function a2(e, t) {
    for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
    var i = {},
      o = {};
    r.forEach(function (d) {
      (i = E(E(E({}, i), d.options), {
        headers: E(E({}, i.headers), d.headers)
      })),
        d.credentials && (i.credentials = d.credentials),
        (o = E(E({}, o), d.http));
    }),
      i.headers && (i.headers = s2(i.headers, o.preserveHeaderCase));
    var a = e.operationName,
      s = e.extensions,
      u = e.variables,
      l = e.query,
      c = { operationName: a, variables: u };
    return (
      o.includeExtensions && (c.extensions = s),
      o.includeQuery && (c.query = t(l, _n)),
      { options: i, body: c }
    );
  }
  function s2(e, t) {
    if (!t) {
      var r = {};
      return (
        Object.keys(Object(e)).forEach(function (o) {
          r[o.toLowerCase()] = e[o];
        }),
        r
      );
    }
    var n = {};
    Object.keys(Object(e)).forEach(function (o) {
      n[o.toLowerCase()] = { originalName: o, value: e[o] };
    });
    var i = {};
    return (
      Object.keys(n).forEach(function (o) {
        i[n[o].originalName] = n[o].value;
      }),
      i
    );
  }
  var u2 = function (e) {
      if (!e && typeof fetch > 'u') throw Ue(40);
    },
    l2 = function (e, t) {
      var r = e.getContext(),
        n = r.uri;
      return n || (typeof t == 'function' ? t(e) : t || '/graphql');
    };
  function c2(e, t) {
    var r = [],
      n = function (d, f) {
        r.push(''.concat(d, '=').concat(encodeURIComponent(f)));
      };
    if (
      ('query' in t && n('query', t.query),
      t.operationName && n('operationName', t.operationName),
      t.variables)
    ) {
      var i = void 0;
      try {
        i = zf(t.variables, 'Variables map');
      } catch (d) {
        return { parseError: d };
      }
      n('variables', i);
    }
    if (t.extensions) {
      var o = void 0;
      try {
        o = zf(t.extensions, 'Extensions map');
      } catch (d) {
        return { parseError: d };
      }
      n('extensions', o);
    }
    var a = '',
      s = e,
      u = e.indexOf('#');
    u !== -1 && ((a = e.substr(u)), (s = e.substr(0, u)));
    var l = s.indexOf('?') === -1 ? '?' : '&',
      c = s + l + r.join('&') + a;
    return { newURI: c };
  }
  var Xv = Tt(function () {
      return fetch;
    }),
    f2 = function (e) {
      e === void 0 && (e = {});
      var t = e.uri,
        r = t === void 0 ? '/graphql' : t,
        n = e.fetch,
        i = e.print,
        o = i === void 0 ? o2 : i,
        a = e.includeExtensions,
        s = e.preserveHeaderCase,
        u = e.useGETForQueries,
        l = e.includeUnusedVariables,
        c = l === void 0 ? !1 : l,
        d = Rt(e, [
          'uri',
          'fetch',
          'print',
          'includeExtensions',
          'preserveHeaderCase',
          'useGETForQueries',
          'includeUnusedVariables'
        ]);
      globalThis.__DEV__ !== !1 && u2(n || Xv);
      var f = {
        http: { includeExtensions: a, preserveHeaderCase: s },
        options: d.fetchOptions,
        credentials: d.credentials,
        headers: d.headers
      };
      return new Aa(function (v) {
        var y = l2(v, r),
          g = v.getContext(),
          _ = {};
        if (g.clientAwareness) {
          var h = g.clientAwareness,
            p = h.name,
            m = h.version;
          p && (_['apollographql-client-name'] = p),
            m && (_['apollographql-client-version'] = m);
        }
        var w = E(E({}, _), g.headers),
          S = {
            http: g.http,
            options: g.fetchOptions,
            credentials: g.credentials,
            headers: w
          };
        if (pa(['client'], v.query)) {
          var x = S_(v.query);
          if (!x)
            return dc(
              new Error(
                'HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`.'
              )
            );
          v.query = x;
        }
        var O = a2(v, o, i2, f, S),
          C = O.options,
          M = O.body;
        M.variables && !c && (M.variables = j4(M.variables, v.query));
        var I;
        !C.signal &&
          typeof AbortController < 'u' &&
          ((I = new AbortController()), (C.signal = I.signal));
        var ne = function (j) {
            return (
              j.kind === 'OperationDefinition' && j.operation === 'mutation'
            );
          },
          ct = function (j) {
            return (
              j.kind === 'OperationDefinition' && j.operation === 'subscription'
            );
          },
          le = ct(Pa(v.query)),
          Et = pa(['defer'], v.query);
        if (
          (u && !v.query.definitions.some(ne) && (C.method = 'GET'), Et || le)
        ) {
          C.headers = C.headers || {};
          var no = 'multipart/mixed;';
          le && Et && globalThis.__DEV__ !== !1 && R.warn(41),
            le
              ? (no += 'boundary=graphql;subscriptionSpec=1.0,application/json')
              : Et && (no += 'deferSpec=20220824,application/json'),
            (C.headers.accept = no);
        }
        if (C.method === 'GET') {
          var Hn = c2(y, M),
            io = Hn.newURI,
            P = Hn.parseError;
          if (P) return dc(P);
          y = io;
        } else
          try {
            C.body = zf(M, 'Payload');
          } catch (j) {
            return dc(j);
          }
        return new ee(function (j) {
          var $ =
              n ||
              Tt(function () {
                return fetch;
              }) ||
              Xv,
            se = j.next.bind(j);
          return (
            $(y, C)
              .then(function (ie) {
                var Tr;
                v.setContext({ response: ie });
                var Vt =
                  (Tr = ie.headers) === null || Tr === void 0
                    ? void 0
                    : Tr.get('content-type');
                return Vt !== null && /^multipart\/mixed/i.test(Vt)
                  ? J4(ie, se)
                  : e2(v)(ie).then(se);
              })
              .then(function () {
                (I = void 0), j.complete();
              })
              .catch(function (ie) {
                (I = void 0), Z4(ie, j);
              }),
            function () {
              I && I.abort();
            }
          );
        });
      });
    },
    d2 = (function (e) {
      nr(t, e);
      function t(r) {
        r === void 0 && (r = {});
        var n = e.call(this, f2(r).request) || this;
        return (n.options = r), n;
      }
      return t;
    })(Aa);
  const { toString: Zv, hasOwnProperty: h2 } = Object.prototype,
    em = Function.prototype.toString,
    Bf = new Map();
  function J(e, t) {
    try {
      return Uf(e, t);
    } finally {
      Bf.clear();
    }
  }
  function Uf(e, t) {
    if (e === t) return !0;
    const r = Zv.call(e),
      n = Zv.call(t);
    if (r !== n) return !1;
    switch (r) {
      case '[object Array]':
        if (e.length !== t.length) return !1;
      case '[object Object]': {
        if (rm(e, t)) return !0;
        const i = tm(e),
          o = tm(t),
          a = i.length;
        if (a !== o.length) return !1;
        for (let s = 0; s < a; ++s) if (!h2.call(t, i[s])) return !1;
        for (let s = 0; s < a; ++s) {
          const u = i[s];
          if (!Uf(e[u], t[u])) return !1;
        }
        return !0;
      }
      case '[object Error]':
        return e.name === t.name && e.message === t.message;
      case '[object Number]':
        if (e !== e) return t !== t;
      case '[object Boolean]':
      case '[object Date]':
        return +e == +t;
      case '[object RegExp]':
      case '[object String]':
        return e == `${t}`;
      case '[object Map]':
      case '[object Set]': {
        if (e.size !== t.size) return !1;
        if (rm(e, t)) return !0;
        const i = e.entries(),
          o = r === '[object Map]';
        for (;;) {
          const a = i.next();
          if (a.done) break;
          const [s, u] = a.value;
          if (!t.has(s) || (o && !Uf(u, t.get(s)))) return !1;
        }
        return !0;
      }
      case '[object Uint16Array]':
      case '[object Uint8Array]':
      case '[object Uint32Array]':
      case '[object Int32Array]':
      case '[object Int8Array]':
      case '[object Int16Array]':
      case '[object ArrayBuffer]':
        (e = new Uint8Array(e)), (t = new Uint8Array(t));
      case '[object DataView]': {
        let i = e.byteLength;
        if (i === t.byteLength) for (; i-- && e[i] === t[i]; );
        return i === -1;
      }
      case '[object AsyncFunction]':
      case '[object GeneratorFunction]':
      case '[object AsyncGeneratorFunction]':
      case '[object Function]': {
        const i = em.call(e);
        return i !== em.call(t) ? !1 : !m2(i, v2);
      }
    }
    return !1;
  }
  function tm(e) {
    return Object.keys(e).filter(p2, e);
  }
  function p2(e) {
    return this[e] !== void 0;
  }
  const v2 = '{ [native code] }';
  function m2(e, t) {
    const r = e.length - t.length;
    return r >= 0 && e.indexOf(t, r) === r;
  }
  function rm(e, t) {
    let r = Bf.get(e);
    if (r) {
      if (r.has(t)) return !0;
    } else Bf.set(e, (r = new Set()));
    return r.add(t), !1;
  }
  function A_(e, t, r, n) {
    var i = t.data,
      o = Rt(t, ['data']),
      a = r.data,
      s = Rt(r, ['data']);
    return (
      J(o, s) &&
      Ms(Pa(e).selectionSet, i, a, { fragmentMap: Xi(eo(e)), variables: n })
    );
  }
  function Ms(e, t, r, n) {
    if (t === r) return !0;
    var i = new Set();
    return e.selections.every(function (o) {
      if (i.has(o) || (i.add(o), !Ra(o, n.variables)) || nm(o)) return !0;
      if (en(o)) {
        var a = Er(o),
          s = t && t[a],
          u = r && r[a],
          l = o.selectionSet;
        if (!l) return J(s, u);
        var c = Array.isArray(s),
          d = Array.isArray(u);
        if (c !== d) return !1;
        if (c && d) {
          var f = s.length;
          if (u.length !== f) return !1;
          for (var v = 0; v < f; ++v) if (!Ms(l, s[v], u[v], n)) return !1;
          return !0;
        }
        return Ms(l, s, u, n);
      } else {
        var y = pl(o, n.fragmentMap);
        if (y) return nm(y) ? !0 : Ms(y.selectionSet, t, r, n);
      }
    });
  }
  function nm(e) {
    return !!e.directives && e.directives.some(y2);
  }
  function y2(e) {
    return e.name.value === 'nonreactive';
  }
  var I_ = zn ? WeakMap : Map,
    F_ = xh ? WeakSet : Set,
    Mh = new ml(),
    im = !1;
  function L_() {
    im || ((im = !0), globalThis.__DEV__ !== !1 && R.warn(52));
  }
  function M_(e, t, r) {
    return Mh.withValue(!0, function () {
      var n = Co(e, t, r, !1);
      return Object.isFrozen(e) && $i(n), n;
    });
  }
  function g2(e, t) {
    if (t.has(e)) return t.get(e);
    var r = Array.isArray(e) ? [] : Object.create(null);
    return t.set(e, r), r;
  }
  function Co(e, t, r, n, i) {
    var o,
      a = r.knownChanged,
      s = g2(e, r.mutableTargets);
    if (Array.isArray(e)) {
      for (var u = 0, l = Array.from(e.entries()); u < l.length; u++) {
        var c = l[u],
          d = c[0],
          f = c[1];
        if (f === null) {
          s[d] = null;
          continue;
        }
        var v = Co(
          f,
          t,
          r,
          n,
          globalThis.__DEV__ !== !1
            ? ''.concat(i || '', '[').concat(d, ']')
            : void 0
        );
        a.has(v) && a.add(s), (s[d] = v);
      }
      return a.has(s) ? s : e;
    }
    for (var y = 0, g = t.selections; y < g.length; y++) {
      var _ = g[y],
        h = void 0;
      if ((n && a.add(s), _.kind === D.FIELD)) {
        var p = Er(_),
          m = _.selectionSet;
        if (((h = s[p] || e[p]), h === void 0)) continue;
        if (m && h !== null) {
          var v = Co(
            e[p],
            m,
            r,
            n,
            globalThis.__DEV__ !== !1
              ? ''.concat(i || '', '.').concat(p)
              : void 0
          );
          a.has(v) && (h = v);
        }
        globalThis.__DEV__ === !1 && (s[p] = h),
          globalThis.__DEV__ !== !1 &&
            (n &&
            p !== '__typename' &&
            !(
              !(
                (o = Object.getOwnPropertyDescriptor(s, p)) === null ||
                o === void 0
              ) && o.value
            )
              ? Object.defineProperty(
                  s,
                  p,
                  _2(p, h, i || '', r.operationName, r.operationType)
                )
              : (delete s[p], (s[p] = h)));
      }
      if (
        (_.kind === D.INLINE_FRAGMENT &&
          (!_.typeCondition || r.cache.fragmentMatches(_, e.__typename)) &&
          (h = Co(e, _.selectionSet, r, n, i)),
        _.kind === D.FRAGMENT_SPREAD)
      ) {
        var w = _.name.value,
          S =
            r.fragmentMap[w] || (r.fragmentMap[w] = r.cache.lookupFragment(w));
        R(S, 47, w);
        var x = mk(_);
        x !== 'mask' && (h = Co(e, S.selectionSet, r, x === 'migrate', i));
      }
      a.has(h) && a.add(s);
    }
    return (
      '__typename' in e &&
        !('__typename' in s) &&
        (s.__typename = e.__typename),
      Object.keys(s).length !== Object.keys(e).length && a.add(s),
      a.has(s) ? s : e
    );
  }
  function _2(e, t, r, n, i) {
    var o = function () {
      return (
        Mh.getValue() ||
          (globalThis.__DEV__ !== !1 &&
            R.warn(
              48,
              n ? ''.concat(i, " '").concat(n, "'") : 'anonymous '.concat(i),
              ''.concat(r, '.').concat(e).replace(/^\./, '')
            ),
          (o = function () {
            return t;
          })),
        t
      );
    };
    return {
      get: function () {
        return o();
      },
      set: function (a) {
        o = function () {
          return a;
        };
      },
      enumerable: !0,
      configurable: !0
    };
  }
  function j_(e, t, r, n) {
    if (!r.fragmentMatches) return globalThis.__DEV__ !== !1 && L_(), e;
    var i = t.definitions.filter(function (a) {
      return a.kind === D.FRAGMENT_DEFINITION;
    });
    typeof n > 'u' && (R(i.length === 1, 49, i.length), (n = i[0].name.value));
    var o = i.find(function (a) {
      return a.name.value === n;
    });
    return (
      R(!!o, 50, n),
      e == null || J(e, {})
        ? e
        : M_(e, o.selectionSet, {
            operationType: 'fragment',
            operationName: o.name.value,
            fragmentMap: Xi(eo(t)),
            cache: r,
            mutableTargets: new I_(),
            knownChanged: new F_()
          })
    );
  }
  function w2(e, t, r) {
    var n;
    if (!r.fragmentMatches) return globalThis.__DEV__ !== !1 && L_(), e;
    var i = Rn(t);
    return (
      R(i, 51),
      e == null
        ? e
        : M_(e, i.selectionSet, {
            operationType: i.operation,
            operationName:
              (n = i.name) === null || n === void 0 ? void 0 : n.value,
            fragmentMap: Xi(eo(t)),
            cache: r,
            mutableTargets: new I_(),
            knownChanged: new F_()
          })
    );
  }
  var V_ = (function () {
    function e() {
      (this.assumeImmutableResults = !1),
        (this.getFragmentDoc = ma(xk, {
          max: er['cache.fragmentQueryDocuments'] || 1e3,
          cache: gu
        }));
    }
    return (
      (e.prototype.lookupFragment = function (t) {
        return null;
      }),
      (e.prototype.batch = function (t) {
        var r = this,
          n =
            typeof t.optimistic == 'string'
              ? t.optimistic
              : t.optimistic === !1
              ? null
              : void 0,
          i;
        return (
          this.performTransaction(function () {
            return (i = t.update(r));
          }, n),
          i
        );
      }),
      (e.prototype.recordOptimisticTransaction = function (t, r) {
        this.performTransaction(t, r);
      }),
      (e.prototype.transformDocument = function (t) {
        return t;
      }),
      (e.prototype.transformForLink = function (t) {
        return t;
      }),
      (e.prototype.identify = function (t) {}),
      (e.prototype.gc = function () {
        return [];
      }),
      (e.prototype.modify = function (t) {
        return !1;
      }),
      (e.prototype.readQuery = function (t, r) {
        return (
          r === void 0 && (r = !!t.optimistic),
          this.read(
            E(E({}, t), { rootId: t.id || 'ROOT_QUERY', optimistic: r })
          )
        );
      }),
      (e.prototype.watchFragment = function (t) {
        var r = this,
          n = t.fragment,
          i = t.fragmentName,
          o = t.from,
          a = t.optimistic,
          s = a === void 0 ? !0 : a,
          u = Rt(t, ['fragment', 'fragmentName', 'from', 'optimistic']),
          l = this.getFragmentDoc(n, i),
          c = typeof o > 'u' || typeof o == 'string' ? o : this.identify(o),
          d = !!t[Symbol.for('apollo.dataMasking')];
        if (globalThis.__DEV__ !== !1) {
          var f = i || u_(n).name.value;
          c || (globalThis.__DEV__ !== !1 && R.warn(1, f));
        }
        var v = E(E({}, u), {
            returnPartialData: !0,
            id: c,
            query: l,
            optimistic: s
          }),
          y;
        return new ee(function (g) {
          return r.watch(
            E(E({}, v), {
              immediate: !0,
              callback: function (_) {
                var h = d ? j_(_.result, n, r, i) : _.result;
                if (
                  !(y && A_(l, { data: y.result }, { data: h }, t.variables))
                ) {
                  var p = { data: h, complete: !!_.complete };
                  _.missing &&
                    (p.missing = _l(
                      _.missing.map(function (m) {
                        return m.missing;
                      })
                    )),
                    (y = E(E({}, _), { result: h })),
                    g.next(p);
                }
              }
            })
          );
        });
      }),
      (e.prototype.readFragment = function (t, r) {
        return (
          r === void 0 && (r = !!t.optimistic),
          this.read(
            E(E({}, t), {
              query: this.getFragmentDoc(t.fragment, t.fragmentName),
              rootId: t.id,
              optimistic: r
            })
          )
        );
      }),
      (e.prototype.writeQuery = function (t) {
        var r = t.id,
          n = t.data,
          i = Rt(t, ['id', 'data']);
        return this.write(
          Object.assign(i, { dataId: r || 'ROOT_QUERY', result: n })
        );
      }),
      (e.prototype.writeFragment = function (t) {
        var r = t.id,
          n = t.data,
          i = t.fragment,
          o = t.fragmentName,
          a = Rt(t, ['id', 'data', 'fragment', 'fragmentName']);
        return this.write(
          Object.assign(a, {
            query: this.getFragmentDoc(i, o),
            dataId: r,
            result: n
          })
        );
      }),
      (e.prototype.updateQuery = function (t, r) {
        return this.batch({
          update: function (n) {
            var i = n.readQuery(t),
              o = r(i);
            return o == null ? i : (n.writeQuery(E(E({}, t), { data: o })), o);
          }
        });
      }),
      (e.prototype.updateFragment = function (t, r) {
        return this.batch({
          update: function (n) {
            var i = n.readFragment(t),
              o = r(i);
            return o == null
              ? i
              : (n.writeFragment(E(E({}, t), { data: o })), o);
          }
        });
      }),
      e
    );
  })();
  globalThis.__DEV__ !== !1 && (V_.prototype.getMemoryInternals = Lk);
  var $_ = (function (e) {
      nr(t, e);
      function t(r, n, i, o) {
        var a,
          s = e.call(this, r) || this;
        if (
          ((s.message = r),
          (s.path = n),
          (s.query = i),
          (s.variables = o),
          Array.isArray(s.path))
        ) {
          s.missing = s.message;
          for (var u = s.path.length - 1; u >= 0; --u)
            s.missing = ((a = {}), (a[s.path[u]] = s.missing), a);
        } else s.missing = s.path;
        return (s.__proto__ = t.prototype), s;
      }
      return t;
    })(Error),
    xe = Object.prototype.hasOwnProperty;
  function _o(e) {
    return e == null;
  }
  function z_(e, t) {
    var r = e.__typename,
      n = e.id,
      i = e._id;
    if (
      typeof r == 'string' &&
      (t && (t.keyObject = _o(n) ? (_o(i) ? void 0 : { _id: i }) : { id: n }),
      _o(n) && !_o(i) && (n = i),
      !_o(n))
    )
      return ''
        .concat(r, ':')
        .concat(
          typeof n == 'number' || typeof n == 'string' ? n : JSON.stringify(n)
        );
  }
  var B_ = {
    dataIdFromObject: z_,
    addTypename: !0,
    resultCaching: !0,
    canonizeResults: !1
  };
  function b2(e) {
    return Pn(B_, e);
  }
  function U_(e) {
    var t = e.canonizeResults;
    return t === void 0 ? B_.canonizeResults : t;
  }
  function E2(e, t) {
    return Y(t) ? e.get(t.__ref, '__typename') : t && t.__typename;
  }
  var Q_ = /^[_a-z][_0-9a-z]*/i;
  function nn(e) {
    var t = e.match(Q_);
    return t ? t[0] : e;
  }
  function Qf(e, t, r) {
    return ve(t)
      ? me(t)
        ? t.every(function (n) {
            return Qf(e, n, r);
          })
        : e.selections.every(function (n) {
            if (en(n) && Ra(n, r)) {
              var i = Er(n);
              return (
                xe.call(t, i) &&
                (!n.selectionSet || Qf(n.selectionSet, t[i], r))
              );
            }
            return !0;
          })
      : !1;
  }
  function di(e) {
    return ve(e) && !Y(e) && !me(e);
  }
  function S2() {
    return new rn();
  }
  function q_(e, t) {
    var r = Xi(eo(e));
    return {
      fragmentMap: r,
      lookupFragment: function (n) {
        var i = r[n];
        return !i && t && (i = t.lookup(n)), i || null;
      }
    };
  }
  var js = Object.create(null),
    hc = function () {
      return js;
    },
    om = Object.create(null),
    ya = (function () {
      function e(t, r) {
        var n = this;
        (this.policies = t),
          (this.group = r),
          (this.data = Object.create(null)),
          (this.rootIds = Object.create(null)),
          (this.refs = Object.create(null)),
          (this.getFieldValue = function (i, o) {
            return $i(Y(i) ? n.get(i.__ref, o) : i && i[o]);
          }),
          (this.canRead = function (i) {
            return Y(i) ? n.has(i.__ref) : typeof i == 'object';
          }),
          (this.toReference = function (i, o) {
            if (typeof i == 'string') return Oi(i);
            if (Y(i)) return i;
            var a = n.policies.identify(i)[0];
            if (a) {
              var s = Oi(a);
              return o && n.merge(a, i), s;
            }
          });
      }
      return (
        (e.prototype.toObject = function () {
          return E({}, this.data);
        }),
        (e.prototype.has = function (t) {
          return this.lookup(t, !0) !== void 0;
        }),
        (e.prototype.get = function (t, r) {
          if ((this.group.depend(t, r), xe.call(this.data, t))) {
            var n = this.data[t];
            if (n && xe.call(n, r)) return n[r];
          }
          if (r === '__typename' && xe.call(this.policies.rootTypenamesById, t))
            return this.policies.rootTypenamesById[t];
          if (this instanceof Dr) return this.parent.get(t, r);
        }),
        (e.prototype.lookup = function (t, r) {
          if ((r && this.group.depend(t, '__exists'), xe.call(this.data, t)))
            return this.data[t];
          if (this instanceof Dr) return this.parent.lookup(t, r);
          if (this.policies.rootTypenamesById[t]) return Object.create(null);
        }),
        (e.prototype.merge = function (t, r) {
          var n = this,
            i;
          Y(t) && (t = t.__ref), Y(r) && (r = r.__ref);
          var o = typeof t == 'string' ? this.lookup((i = t)) : t,
            a = typeof r == 'string' ? this.lookup((i = r)) : r;
          if (!!a) {
            R(typeof i == 'string', 2);
            var s = new rn(O2).merge(o, a);
            if (
              ((this.data[i] = s),
              s !== o && (delete this.refs[i], this.group.caching))
            ) {
              var u = Object.create(null);
              o || (u.__exists = 1),
                Object.keys(a).forEach(function (l) {
                  if (!o || o[l] !== s[l]) {
                    u[l] = 1;
                    var c = nn(l);
                    c !== l &&
                      !n.policies.hasKeyArgs(s.__typename, c) &&
                      (u[c] = 1),
                      s[l] === void 0 && !(n instanceof Dr) && delete s[l];
                  }
                }),
                u.__typename &&
                  !(o && o.__typename) &&
                  this.policies.rootTypenamesById[i] === s.__typename &&
                  delete u.__typename,
                Object.keys(u).forEach(function (l) {
                  return n.group.dirty(i, l);
                });
            }
          }
        }),
        (e.prototype.modify = function (t, r) {
          var n = this,
            i = this.lookup(t);
          if (i) {
            var o = Object.create(null),
              a = !1,
              s = !0,
              u = {
                DELETE: js,
                INVALIDATE: om,
                isReference: Y,
                toReference: this.toReference,
                canRead: this.canRead,
                readField: function (l, c) {
                  return n.policies.readField(
                    typeof l == 'string'
                      ? { fieldName: l, from: c || Oi(t) }
                      : l,
                    { store: n }
                  );
                }
              };
            if (
              (Object.keys(i).forEach(function (l) {
                var c = nn(l),
                  d = i[l];
                if (d !== void 0) {
                  var f = typeof r == 'function' ? r : r[l] || r[c];
                  if (f) {
                    var v =
                      f === hc
                        ? js
                        : f(
                            $i(d),
                            E(E({}, u), {
                              fieldName: c,
                              storeFieldName: l,
                              storage: n.getStorage(t, l)
                            })
                          );
                    if (v === om) n.group.dirty(t, l);
                    else if (
                      (v === js && (v = void 0),
                      v !== d &&
                        ((o[l] = v),
                        (a = !0),
                        (d = v),
                        globalThis.__DEV__ !== !1))
                    ) {
                      var y = function (S) {
                        if (n.lookup(S.__ref) === void 0)
                          return globalThis.__DEV__ !== !1 && R.warn(3, S), !0;
                      };
                      if (Y(v)) y(v);
                      else if (Array.isArray(v))
                        for (
                          var g = !1, _ = void 0, h = 0, p = v;
                          h < p.length;
                          h++
                        ) {
                          var m = p[h];
                          if (Y(m)) {
                            if (((g = !0), y(m))) break;
                          } else if (typeof m == 'object' && !!m) {
                            var w = n.policies.identify(m)[0];
                            w && (_ = m);
                          }
                          if (g && _ !== void 0) {
                            globalThis.__DEV__ !== !1 && R.warn(4, _);
                            break;
                          }
                        }
                    }
                  }
                  d !== void 0 && (s = !1);
                }
              }),
              a)
            )
              return (
                this.merge(t, o),
                s &&
                  (this instanceof Dr
                    ? (this.data[t] = void 0)
                    : delete this.data[t],
                  this.group.dirty(t, '__exists')),
                !0
              );
          }
          return !1;
        }),
        (e.prototype.delete = function (t, r, n) {
          var i,
            o = this.lookup(t);
          if (o) {
            var a = this.getFieldValue(o, '__typename'),
              s =
                r && n
                  ? this.policies.getStoreFieldName({
                      typename: a,
                      fieldName: r,
                      args: n
                    })
                  : r;
            return this.modify(t, s ? ((i = {}), (i[s] = hc), i) : hc);
          }
          return !1;
        }),
        (e.prototype.evict = function (t, r) {
          var n = !1;
          return (
            t.id &&
              (xe.call(this.data, t.id) &&
                (n = this.delete(t.id, t.fieldName, t.args)),
              this instanceof Dr &&
                this !== r &&
                (n = this.parent.evict(t, r) || n),
              (t.fieldName || n) &&
                this.group.dirty(t.id, t.fieldName || '__exists')),
            n
          );
        }),
        (e.prototype.clear = function () {
          this.replace(null);
        }),
        (e.prototype.extract = function () {
          var t = this,
            r = this.toObject(),
            n = [];
          return (
            this.getRootIdSet().forEach(function (i) {
              xe.call(t.policies.rootTypenamesById, i) || n.push(i);
            }),
            n.length && (r.__META = { extraRootIds: n.sort() }),
            r
          );
        }),
        (e.prototype.replace = function (t) {
          var r = this;
          if (
            (Object.keys(this.data).forEach(function (o) {
              (t && xe.call(t, o)) || r.delete(o);
            }),
            t)
          ) {
            var n = t.__META,
              i = Rt(t, ['__META']);
            Object.keys(i).forEach(function (o) {
              r.merge(o, i[o]);
            }),
              n && n.extraRootIds.forEach(this.retain, this);
          }
        }),
        (e.prototype.retain = function (t) {
          return (this.rootIds[t] = (this.rootIds[t] || 0) + 1);
        }),
        (e.prototype.release = function (t) {
          if (this.rootIds[t] > 0) {
            var r = --this.rootIds[t];
            return r || delete this.rootIds[t], r;
          }
          return 0;
        }),
        (e.prototype.getRootIdSet = function (t) {
          return (
            t === void 0 && (t = new Set()),
            Object.keys(this.rootIds).forEach(t.add, t),
            this instanceof Dr
              ? this.parent.getRootIdSet(t)
              : Object.keys(this.policies.rootTypenamesById).forEach(t.add, t),
            t
          );
        }),
        (e.prototype.gc = function () {
          var t = this,
            r = this.getRootIdSet(),
            n = this.toObject();
          r.forEach(function (a) {
            xe.call(n, a) &&
              (Object.keys(t.findChildRefIds(a)).forEach(r.add, r),
              delete n[a]);
          });
          var i = Object.keys(n);
          if (i.length) {
            for (var o = this; o instanceof Dr; ) o = o.parent;
            i.forEach(function (a) {
              return o.delete(a);
            });
          }
          return i;
        }),
        (e.prototype.findChildRefIds = function (t) {
          if (!xe.call(this.refs, t)) {
            var r = (this.refs[t] = Object.create(null)),
              n = this.data[t];
            if (!n) return r;
            var i = new Set([n]);
            i.forEach(function (o) {
              Y(o) && (r[o.__ref] = !0),
                ve(o) &&
                  Object.keys(o).forEach(function (a) {
                    var s = o[a];
                    ve(s) && i.add(s);
                  });
            });
          }
          return this.refs[t];
        }),
        (e.prototype.makeCacheKey = function () {
          return this.group.keyMaker.lookupArray(arguments);
        }),
        e
      );
    })(),
    W_ = (function () {
      function e(t, r) {
        r === void 0 && (r = null),
          (this.caching = t),
          (this.parent = r),
          (this.d = null),
          this.resetCaching();
      }
      return (
        (e.prototype.resetCaching = function () {
          (this.d = this.caching ? __() : null), (this.keyMaker = new Cr(zn));
        }),
        (e.prototype.depend = function (t, r) {
          if (this.d) {
            this.d(pc(t, r));
            var n = nn(r);
            n !== r && this.d(pc(t, n)),
              this.parent && this.parent.depend(t, r);
          }
        }),
        (e.prototype.dirty = function (t, r) {
          this.d &&
            this.d.dirty(pc(t, r), r === '__exists' ? 'forget' : 'setDirty');
        }),
        e
      );
    })();
  function pc(e, t) {
    return t + '#' + e;
  }
  function am(e, t) {
    $o(e) && e.group.depend(t, '__exists');
  }
  (function (e) {
    var t = (function (r) {
      nr(n, r);
      function n(i) {
        var o = i.policies,
          a = i.resultCaching,
          s = a === void 0 ? !0 : a,
          u = i.seed,
          l = r.call(this, o, new W_(s)) || this;
        return (
          (l.stump = new x2(l)),
          (l.storageTrie = new Cr(zn)),
          u && l.replace(u),
          l
        );
      }
      return (
        (n.prototype.addLayer = function (i, o) {
          return this.stump.addLayer(i, o);
        }),
        (n.prototype.removeLayer = function () {
          return this;
        }),
        (n.prototype.getStorage = function () {
          return this.storageTrie.lookupArray(arguments);
        }),
        n
      );
    })(e);
    e.Root = t;
  })(ya || (ya = {}));
  var Dr = (function (e) {
      nr(t, e);
      function t(r, n, i, o) {
        var a = e.call(this, n.policies, o) || this;
        return (
          (a.id = r), (a.parent = n), (a.replay = i), (a.group = o), i(a), a
        );
      }
      return (
        (t.prototype.addLayer = function (r, n) {
          return new t(r, this, n, this.group);
        }),
        (t.prototype.removeLayer = function (r) {
          var n = this,
            i = this.parent.removeLayer(r);
          return r === this.id
            ? (this.group.caching &&
                Object.keys(this.data).forEach(function (o) {
                  var a = n.data[o],
                    s = i.lookup(o);
                  s
                    ? a
                      ? a !== s &&
                        Object.keys(a).forEach(function (u) {
                          J(a[u], s[u]) || n.group.dirty(o, u);
                        })
                      : (n.group.dirty(o, '__exists'),
                        Object.keys(s).forEach(function (u) {
                          n.group.dirty(o, u);
                        }))
                    : n.delete(o);
                }),
              i)
            : i === this.parent
            ? this
            : i.addLayer(this.id, this.replay);
        }),
        (t.prototype.toObject = function () {
          return E(E({}, this.parent.toObject()), this.data);
        }),
        (t.prototype.findChildRefIds = function (r) {
          var n = this.parent.findChildRefIds(r);
          return xe.call(this.data, r)
            ? E(E({}, n), e.prototype.findChildRefIds.call(this, r))
            : n;
        }),
        (t.prototype.getStorage = function () {
          for (var r = this.parent; r.parent; ) r = r.parent;
          return r.getStorage.apply(r, arguments);
        }),
        t
      );
    })(ya),
    x2 = (function (e) {
      nr(t, e);
      function t(r) {
        return (
          e.call(
            this,
            'EntityStore.Stump',
            r,
            function () {},
            new W_(r.group.caching, r.group)
          ) || this
        );
      }
      return (
        (t.prototype.removeLayer = function () {
          return this;
        }),
        (t.prototype.merge = function (r, n) {
          return this.parent.merge(r, n);
        }),
        t
      );
    })(Dr);
  function O2(e, t, r) {
    var n = e[r],
      i = t[r];
    return J(n, i) ? n : i;
  }
  function $o(e) {
    return !!(e instanceof ya && e.group.caching);
  }
  function k2(e) {
    return ve(e)
      ? me(e)
        ? e.slice(0)
        : E({ __proto__: Object.getPrototypeOf(e) }, e)
      : e;
  }
  var sm = (function () {
    function e() {
      (this.known = new (xh ? WeakSet : Set)()),
        (this.pool = new Cr(zn)),
        (this.passes = new WeakMap()),
        (this.keysByJSON = new Map()),
        (this.empty = this.admit({}));
    }
    return (
      (e.prototype.isKnown = function (t) {
        return ve(t) && this.known.has(t);
      }),
      (e.prototype.pass = function (t) {
        if (ve(t)) {
          var r = k2(t);
          return this.passes.set(r, t), r;
        }
        return t;
      }),
      (e.prototype.admit = function (t) {
        var r = this;
        if (ve(t)) {
          var n = this.passes.get(t);
          if (n) return n;
          var i = Object.getPrototypeOf(t);
          switch (i) {
            case Array.prototype: {
              if (this.known.has(t)) return t;
              var o = t.map(this.admit, this),
                a = this.pool.lookupArray(o);
              return (
                a.array ||
                  (this.known.add((a.array = o)),
                  globalThis.__DEV__ !== !1 && Object.freeze(o)),
                a.array
              );
            }
            case null:
            case Object.prototype: {
              if (this.known.has(t)) return t;
              var s = Object.getPrototypeOf(t),
                u = [s],
                l = this.sortedKeys(t);
              u.push(l.json);
              var c = u.length;
              l.sorted.forEach(function (v) {
                u.push(r.admit(t[v]));
              });
              var a = this.pool.lookupArray(u);
              if (!a.object) {
                var d = (a.object = Object.create(s));
                this.known.add(d),
                  l.sorted.forEach(function (v, y) {
                    d[v] = u[c + y];
                  }),
                  globalThis.__DEV__ !== !1 && Object.freeze(d);
              }
              return a.object;
            }
          }
        }
        return t;
      }),
      (e.prototype.sortedKeys = function (t) {
        var r = Object.keys(t),
          n = this.pool.lookupArray(r);
        if (!n.keys) {
          r.sort();
          var i = JSON.stringify(r);
          (n.keys = this.keysByJSON.get(i)) ||
            this.keysByJSON.set(i, (n.keys = { sorted: r, json: i }));
        }
        return n.keys;
      }),
      e
    );
  })();
  function um(e) {
    return [
      e.selectionSet,
      e.objectOrReference,
      e.context,
      e.context.canonizeResults
    ];
  }
  var C2 = (function () {
    function e(t) {
      var r = this;
      (this.knownResults = new (zn ? WeakMap : Map)()),
        (this.config = Pn(t, {
          addTypename: t.addTypename !== !1,
          canonizeResults: U_(t)
        })),
        (this.canon = t.canon || new sm()),
        (this.executeSelectionSet = ma(
          function (n) {
            var i,
              o = n.context.canonizeResults,
              a = um(n);
            a[3] = !o;
            var s = (i = r.executeSelectionSet).peek.apply(i, a);
            return s
              ? o
                ? E(E({}, s), { result: r.canon.admit(s.result) })
                : s
              : (am(n.context.store, n.enclosingRef.__ref),
                r.execSelectionSetImpl(n));
          },
          {
            max:
              this.config.resultCacheMaxSize ||
              er['inMemoryCache.executeSelectionSet'] ||
              5e4,
            keyArgs: um,
            makeCacheKey: function (n, i, o, a) {
              if ($o(o.store))
                return o.store.makeCacheKey(
                  n,
                  Y(i) ? i.__ref : i,
                  o.varString,
                  a
                );
            }
          }
        )),
        (this.executeSubSelectedArray = ma(
          function (n) {
            return (
              am(n.context.store, n.enclosingRef.__ref),
              r.execSubSelectedArrayImpl(n)
            );
          },
          {
            max:
              this.config.resultCacheMaxSize ||
              er['inMemoryCache.executeSubSelectedArray'] ||
              1e4,
            makeCacheKey: function (n) {
              var i = n.field,
                o = n.array,
                a = n.context;
              if ($o(a.store)) return a.store.makeCacheKey(i, o, a.varString);
            }
          }
        ));
    }
    return (
      (e.prototype.resetCanon = function () {
        this.canon = new sm();
      }),
      (e.prototype.diffQueryAgainstStore = function (t) {
        var r = t.store,
          n = t.query,
          i = t.rootId,
          o = i === void 0 ? 'ROOT_QUERY' : i,
          a = t.variables,
          s = t.returnPartialData,
          u = s === void 0 ? !0 : s,
          l = t.canonizeResults,
          c = l === void 0 ? this.config.canonizeResults : l,
          d = this.config.cache.policies;
        a = E(E({}, Th(s_(n))), a);
        var f = Oi(o),
          v = this.executeSelectionSet({
            selectionSet: Pa(n).selectionSet,
            objectOrReference: f,
            enclosingRef: f,
            context: E(
              {
                store: r,
                query: n,
                policies: d,
                variables: a,
                varString: Jr(a),
                canonizeResults: c
              },
              q_(n, this.config.fragments)
            )
          }),
          y;
        if (v.missing && ((y = [new $_(T2(v.missing), v.missing, n, a)]), !u))
          throw y[0];
        return { result: v.result, complete: !y, missing: y };
      }),
      (e.prototype.isFresh = function (t, r, n, i) {
        if ($o(i.store) && this.knownResults.get(t) === n) {
          var o = this.executeSelectionSet.peek(n, r, i, this.canon.isKnown(t));
          if (o && t === o.result) return !0;
        }
        return !1;
      }),
      (e.prototype.execSelectionSetImpl = function (t) {
        var r = this,
          n = t.selectionSet,
          i = t.objectOrReference,
          o = t.enclosingRef,
          a = t.context;
        if (
          Y(i) &&
          !a.policies.rootTypenamesById[i.__ref] &&
          !a.store.has(i.__ref)
        )
          return {
            result: this.canon.empty,
            missing: 'Dangling reference to missing '.concat(i.__ref, ' object')
          };
        var s = a.variables,
          u = a.policies,
          l = a.store,
          c = l.getFieldValue(i, '__typename'),
          d = [],
          f,
          v = new rn();
        this.config.addTypename &&
          typeof c == 'string' &&
          !u.rootIdsByTypename[c] &&
          d.push({ __typename: c });
        function y(m, w) {
          var S;
          return (
            m.missing && (f = v.merge(f, ((S = {}), (S[w] = m.missing), S))),
            m.result
          );
        }
        var g = new Set(n.selections);
        g.forEach(function (m) {
          var w, S;
          if (!!Ra(m, s))
            if (en(m)) {
              var x = u.readField(
                  {
                    fieldName: m.name.value,
                    field: m,
                    variables: a.variables,
                    from: i
                  },
                  a
                ),
                O = Er(m);
              x === void 0
                ? Rh.added(m) ||
                  (f = v.merge(
                    f,
                    ((w = {}),
                    (w[O] = "Can't find field '"
                      .concat(m.name.value, "' on ")
                      .concat(
                        Y(i)
                          ? i.__ref + ' object'
                          : 'object ' + JSON.stringify(i, null, 2)
                      )),
                    w)
                  ))
                : me(x)
                ? x.length > 0 &&
                  (x = y(
                    r.executeSubSelectedArray({
                      field: m,
                      array: x,
                      enclosingRef: o,
                      context: a
                    }),
                    O
                  ))
                : m.selectionSet
                ? x != null &&
                  (x = y(
                    r.executeSelectionSet({
                      selectionSet: m.selectionSet,
                      objectOrReference: x,
                      enclosingRef: Y(x) ? x : o,
                      context: a
                    }),
                    O
                  ))
                : a.canonizeResults && (x = r.canon.pass(x)),
                x !== void 0 && d.push(((S = {}), (S[O] = x), S));
            } else {
              var C = pl(m, a.lookupFragment);
              if (!C && m.kind === D.FRAGMENT_SPREAD)
                throw Ue(10, m.name.value);
              C &&
                u.fragmentMatches(C, c) &&
                C.selectionSet.selections.forEach(g.add, g);
            }
        });
        var _ = _l(d),
          h = { result: _, missing: f },
          p = a.canonizeResults ? this.canon.admit(h) : $i(h);
        return p.result && this.knownResults.set(p.result, n), p;
      }),
      (e.prototype.execSubSelectedArrayImpl = function (t) {
        var r = this,
          n = t.field,
          i = t.array,
          o = t.enclosingRef,
          a = t.context,
          s,
          u = new rn();
        function l(c, d) {
          var f;
          return (
            c.missing && (s = u.merge(s, ((f = {}), (f[d] = c.missing), f))),
            c.result
          );
        }
        return (
          n.selectionSet && (i = i.filter(a.store.canRead)),
          (i = i.map(function (c, d) {
            return c === null
              ? null
              : me(c)
              ? l(
                  r.executeSubSelectedArray({
                    field: n,
                    array: c,
                    enclosingRef: o,
                    context: a
                  }),
                  d
                )
              : n.selectionSet
              ? l(
                  r.executeSelectionSet({
                    selectionSet: n.selectionSet,
                    objectOrReference: c,
                    enclosingRef: Y(c) ? c : o,
                    context: a
                  }),
                  d
                )
              : (globalThis.__DEV__ !== !1 && N2(a.store, n, c), c);
          })),
          { result: a.canonizeResults ? this.canon.admit(i) : i, missing: s }
        );
      }),
      e
    );
  })();
  function T2(e) {
    try {
      JSON.stringify(e, function (t, r) {
        if (typeof r == 'string') throw r;
        return r;
      });
    } catch (t) {
      return t;
    }
  }
  function N2(e, t, r) {
    if (!t.selectionSet) {
      var n = new Set([r]);
      n.forEach(function (i) {
        ve(i) &&
          (R(!Y(i), 11, E2(e, i), t.name.value),
          Object.values(i).forEach(n.add, n));
      });
    }
  }
  var jh = new ml(),
    lm = new WeakMap();
  function zo(e) {
    var t = lm.get(e);
    return t || lm.set(e, (t = { vars: new Set(), dep: __() })), t;
  }
  function cm(e) {
    zo(e).vars.forEach(function (t) {
      return t.forgetCache(e);
    });
  }
  function D2(e) {
    zo(e).vars.forEach(function (t) {
      return t.attachCache(e);
    });
  }
  function R2(e) {
    var t = new Set(),
      r = new Set(),
      n = function (o) {
        if (arguments.length > 0) {
          if (e !== o) {
            (e = o),
              t.forEach(function (u) {
                zo(u).dep.dirty(n), P2(u);
              });
            var a = Array.from(r);
            r.clear(),
              a.forEach(function (u) {
                return u(e);
              });
          }
        } else {
          var s = jh.getValue();
          s && (i(s), zo(s).dep(n));
        }
        return e;
      };
    n.onNextChange = function (o) {
      return (
        r.add(o),
        function () {
          r.delete(o);
        }
      );
    };
    var i = (n.attachCache = function (o) {
      return t.add(o), zo(o).vars.add(n), n;
    });
    return (
      (n.forgetCache = function (o) {
        return t.delete(o);
      }),
      n
    );
  }
  function P2(e) {
    e.broadcastWatches && e.broadcastWatches();
  }
  var fm = Object.create(null);
  function Vh(e) {
    var t = JSON.stringify(e);
    return fm[t] || (fm[t] = Object.create(null));
  }
  function dm(e) {
    var t = Vh(e);
    return (
      t.keyFieldsFn ||
      (t.keyFieldsFn = function (r, n) {
        var i = function (a, s) {
            return n.readField(s, a);
          },
          o = (n.keyObject = $h(e, function (a) {
            var s = Ci(n.storeObject, a, i);
            return (
              s === void 0 &&
                r !== n.storeObject &&
                xe.call(r, a[0]) &&
                (s = Ci(r, a, G_)),
              R(s !== void 0, 5, a.join('.'), r),
              s
            );
          }));
        return ''.concat(n.typename, ':').concat(JSON.stringify(o));
      })
    );
  }
  function hm(e) {
    var t = Vh(e);
    return (
      t.keyArgsFn ||
      (t.keyArgsFn = function (r, n) {
        var i = n.field,
          o = n.variables,
          a = n.fieldName,
          s = $h(e, function (l) {
            var c = l[0],
              d = c.charAt(0);
            if (d === '@') {
              if (i && bt(i.directives)) {
                var f = c.slice(1),
                  v = i.directives.find(function (h) {
                    return h.name.value === f;
                  }),
                  y = v && vl(v, o);
                return y && Ci(y, l.slice(1));
              }
              return;
            }
            if (d === '$') {
              var g = c.slice(1);
              if (o && xe.call(o, g)) {
                var _ = l.slice(0);
                return (_[0] = g), Ci(o, _);
              }
              return;
            }
            if (r) return Ci(r, l);
          }),
          u = JSON.stringify(s);
        return (r || u !== '{}') && (a += ':' + u), a;
      })
    );
  }
  function $h(e, t) {
    var r = new rn();
    return H_(e).reduce(function (n, i) {
      var o,
        a = t(i);
      if (a !== void 0) {
        for (var s = i.length - 1; s >= 0; --s)
          a = ((o = {}), (o[i[s]] = a), o);
        n = r.merge(n, a);
      }
      return n;
    }, Object.create(null));
  }
  function H_(e) {
    var t = Vh(e);
    if (!t.paths) {
      var r = (t.paths = []),
        n = [];
      e.forEach(function (i, o) {
        me(i)
          ? (H_(i).forEach(function (a) {
              return r.push(n.concat(a));
            }),
            (n.length = 0))
          : (n.push(i), me(e[o + 1]) || (r.push(n.slice(0)), (n.length = 0)));
      });
    }
    return t.paths;
  }
  function G_(e, t) {
    return e[t];
  }
  function Ci(e, t, r) {
    return (
      (r = r || G_),
      K_(
        t.reduce(function n(i, o) {
          return me(i)
            ? i.map(function (a) {
                return n(a, o);
              })
            : i && r(i, o);
        }, e)
      )
    );
  }
  function K_(e) {
    return ve(e)
      ? me(e)
        ? e.map(K_)
        : $h(Object.keys(e).sort(), function (t) {
            return Ci(e, t);
          })
      : e;
  }
  function qf(e) {
    return e.args !== void 0
      ? e.args
      : e.field
      ? vl(e.field, e.variables)
      : null;
  }
  var A2 = function () {},
    pm = function (e, t) {
      return t.fieldName;
    },
    vm = function (e, t, r) {
      var n = r.mergeObjects;
      return n(e, t);
    },
    mm = function (e, t) {
      return t;
    },
    I2 = (function () {
      function e(t) {
        (this.config = t),
          (this.typePolicies = Object.create(null)),
          (this.toBeAdded = Object.create(null)),
          (this.supertypeMap = new Map()),
          (this.fuzzySubtypes = new Map()),
          (this.rootIdsByTypename = Object.create(null)),
          (this.rootTypenamesById = Object.create(null)),
          (this.usingPossibleTypes = !1),
          (this.config = E({ dataIdFromObject: z_ }, t)),
          (this.cache = this.config.cache),
          this.setRootTypename('Query'),
          this.setRootTypename('Mutation'),
          this.setRootTypename('Subscription'),
          t.possibleTypes && this.addPossibleTypes(t.possibleTypes),
          t.typePolicies && this.addTypePolicies(t.typePolicies);
      }
      return (
        (e.prototype.identify = function (t, r) {
          var n,
            i = this,
            o =
              (r &&
                (r.typename ||
                  ((n = r.storeObject) === null || n === void 0
                    ? void 0
                    : n.__typename))) ||
              t.__typename;
          if (o === this.rootTypenamesById.ROOT_QUERY) return ['ROOT_QUERY'];
          var a = (r && r.storeObject) || t,
            s = E(E({}, r), {
              typename: o,
              storeObject: a,
              readField:
                (r && r.readField) ||
                function () {
                  var d = zh(arguments, a);
                  return i.readField(d, {
                    store: i.cache.data,
                    variables: d.variables
                  });
                }
            }),
            u,
            l = o && this.getTypePolicy(o),
            c = (l && l.keyFn) || this.config.dataIdFromObject;
          return (
            Mh.withValue(!0, function () {
              for (; c; ) {
                var d = c(E(E({}, t), a), s);
                if (me(d)) c = dm(d);
                else {
                  u = d;
                  break;
                }
              }
            }),
            (u = u ? String(u) : void 0),
            s.keyObject ? [u, s.keyObject] : [u]
          );
        }),
        (e.prototype.addTypePolicies = function (t) {
          var r = this;
          Object.keys(t).forEach(function (n) {
            var i = t[n],
              o = i.queryType,
              a = i.mutationType,
              s = i.subscriptionType,
              u = Rt(i, ['queryType', 'mutationType', 'subscriptionType']);
            o && r.setRootTypename('Query', n),
              a && r.setRootTypename('Mutation', n),
              s && r.setRootTypename('Subscription', n),
              xe.call(r.toBeAdded, n)
                ? r.toBeAdded[n].push(u)
                : (r.toBeAdded[n] = [u]);
          });
        }),
        (e.prototype.updateTypePolicy = function (t, r) {
          var n = this,
            i = this.getTypePolicy(t),
            o = r.keyFields,
            a = r.fields;
          function s(u, l) {
            u.merge =
              typeof l == 'function'
                ? l
                : l === !0
                ? vm
                : l === !1
                ? mm
                : u.merge;
          }
          s(i, r.merge),
            (i.keyFn =
              o === !1
                ? A2
                : me(o)
                ? dm(o)
                : typeof o == 'function'
                ? o
                : i.keyFn),
            a &&
              Object.keys(a).forEach(function (u) {
                var l = n.getFieldPolicy(t, u, !0),
                  c = a[u];
                if (typeof c == 'function') l.read = c;
                else {
                  var d = c.keyArgs,
                    f = c.read,
                    v = c.merge;
                  (l.keyFn =
                    d === !1
                      ? pm
                      : me(d)
                      ? hm(d)
                      : typeof d == 'function'
                      ? d
                      : l.keyFn),
                    typeof f == 'function' && (l.read = f),
                    s(l, v);
                }
                l.read && l.merge && (l.keyFn = l.keyFn || pm);
              });
        }),
        (e.prototype.setRootTypename = function (t, r) {
          r === void 0 && (r = t);
          var n = 'ROOT_' + t.toUpperCase(),
            i = this.rootTypenamesById[n];
          r !== i &&
            (R(!i || i === t, 6, t),
            i && delete this.rootIdsByTypename[i],
            (this.rootIdsByTypename[r] = n),
            (this.rootTypenamesById[n] = r));
        }),
        (e.prototype.addPossibleTypes = function (t) {
          var r = this;
          (this.usingPossibleTypes = !0),
            Object.keys(t).forEach(function (n) {
              r.getSupertypeSet(n, !0),
                t[n].forEach(function (i) {
                  r.getSupertypeSet(i, !0).add(n);
                  var o = i.match(Q_);
                  (!o || o[0] !== i) && r.fuzzySubtypes.set(i, new RegExp(i));
                });
            });
        }),
        (e.prototype.getTypePolicy = function (t) {
          var r = this;
          if (!xe.call(this.typePolicies, t)) {
            var n = (this.typePolicies[t] = Object.create(null));
            n.fields = Object.create(null);
            var i = this.supertypeMap.get(t);
            !i &&
              this.fuzzySubtypes.size &&
              ((i = this.getSupertypeSet(t, !0)),
              this.fuzzySubtypes.forEach(function (a, s) {
                if (a.test(t)) {
                  var u = r.supertypeMap.get(s);
                  u &&
                    u.forEach(function (l) {
                      return i.add(l);
                    });
                }
              })),
              i &&
                i.size &&
                i.forEach(function (a) {
                  var s = r.getTypePolicy(a),
                    u = s.fields,
                    l = Rt(s, ['fields']);
                  Object.assign(n, l), Object.assign(n.fields, u);
                });
          }
          var o = this.toBeAdded[t];
          return (
            o &&
              o.length &&
              o.splice(0).forEach(function (a) {
                r.updateTypePolicy(t, a);
              }),
            this.typePolicies[t]
          );
        }),
        (e.prototype.getFieldPolicy = function (t, r, n) {
          if (t) {
            var i = this.getTypePolicy(t).fields;
            return i[r] || (n && (i[r] = Object.create(null)));
          }
        }),
        (e.prototype.getSupertypeSet = function (t, r) {
          var n = this.supertypeMap.get(t);
          return !n && r && this.supertypeMap.set(t, (n = new Set())), n;
        }),
        (e.prototype.fragmentMatches = function (t, r, n, i) {
          var o = this;
          if (!t.typeCondition) return !0;
          if (!r) return !1;
          var a = t.typeCondition.name.value;
          if (r === a) return !0;
          if (this.usingPossibleTypes && this.supertypeMap.has(a))
            for (
              var s = this.getSupertypeSet(r, !0),
                u = [s],
                l = function (y) {
                  var g = o.getSupertypeSet(y, !1);
                  g && g.size && u.indexOf(g) < 0 && u.push(g);
                },
                c = !!(n && this.fuzzySubtypes.size),
                d = !1,
                f = 0;
              f < u.length;
              ++f
            ) {
              var v = u[f];
              if (v.has(a))
                return (
                  s.has(a) ||
                    (d && globalThis.__DEV__ !== !1 && R.warn(7, r, a),
                    s.add(a)),
                  !0
                );
              v.forEach(l),
                c &&
                  f === u.length - 1 &&
                  Qf(t.selectionSet, n, i) &&
                  ((c = !1),
                  (d = !0),
                  this.fuzzySubtypes.forEach(function (y, g) {
                    var _ = r.match(y);
                    _ && _[0] === r && l(g);
                  }));
            }
          return !1;
        }),
        (e.prototype.hasKeyArgs = function (t, r) {
          var n = this.getFieldPolicy(t, r, !1);
          return !!(n && n.keyFn);
        }),
        (e.prototype.getStoreFieldName = function (t) {
          var r = t.typename,
            n = t.fieldName,
            i = this.getFieldPolicy(r, n, !1),
            o,
            a = i && i.keyFn;
          if (a && r)
            for (
              var s = {
                  typename: r,
                  fieldName: n,
                  field: t.field || null,
                  variables: t.variables
                },
                u = qf(t);
              a;

            ) {
              var l = a(u, s);
              if (me(l)) a = hm(l);
              else {
                o = l || n;
                break;
              }
            }
          return (
            o === void 0 &&
              (o = t.field ? Zk(t.field, t.variables) : a_(n, qf(t))),
            o === !1 ? n : n === nn(o) ? o : n + ':' + o
          );
        }),
        (e.prototype.readField = function (t, r) {
          var n = t.from;
          if (!!n) {
            var i = t.field || t.fieldName;
            if (!!i) {
              if (t.typename === void 0) {
                var o = r.store.getFieldValue(n, '__typename');
                o && (t.typename = o);
              }
              var a = this.getStoreFieldName(t),
                s = nn(a),
                u = r.store.getFieldValue(n, a),
                l = this.getFieldPolicy(t.typename, s, !1),
                c = l && l.read;
              if (c) {
                var d = ym(
                  this,
                  n,
                  t,
                  r,
                  r.store.getStorage(Y(n) ? n.__ref : n, a)
                );
                return jh.withValue(this.cache, c, [u, d]);
              }
              return u;
            }
          }
        }),
        (e.prototype.getReadFunction = function (t, r) {
          var n = this.getFieldPolicy(t, r, !1);
          return n && n.read;
        }),
        (e.prototype.getMergeFunction = function (t, r, n) {
          var i = this.getFieldPolicy(t, r, !1),
            o = i && i.merge;
          return (
            !o && n && ((i = this.getTypePolicy(n)), (o = i && i.merge)), o
          );
        }),
        (e.prototype.runMergeFunction = function (t, r, n, i, o) {
          var a = n.field,
            s = n.typename,
            u = n.merge;
          return u === vm
            ? Y_(i.store)(t, r)
            : u === mm
            ? r
            : (i.overwrite && (t = void 0),
              u(
                t,
                r,
                ym(
                  this,
                  void 0,
                  {
                    typename: s,
                    fieldName: a.name.value,
                    field: a,
                    variables: i.variables
                  },
                  i,
                  o || Object.create(null)
                )
              ));
        }),
        e
      );
    })();
  function ym(e, t, r, n, i) {
    var o = e.getStoreFieldName(r),
      a = nn(o),
      s = r.variables || n.variables,
      u = n.store,
      l = u.toReference,
      c = u.canRead;
    return {
      args: qf(r),
      field: r.field || null,
      fieldName: a,
      storeFieldName: o,
      variables: s,
      isReference: Y,
      toReference: l,
      storage: i,
      cache: e.cache,
      canRead: c,
      readField: function () {
        return e.readField(zh(arguments, t, s), n);
      },
      mergeObjects: Y_(n.store)
    };
  }
  function zh(e, t, r) {
    var n = e[0],
      i = e[1],
      o = e.length,
      a;
    return (
      typeof n == 'string'
        ? (a = { fieldName: n, from: o > 1 ? i : t })
        : ((a = E({}, n)), xe.call(a, 'from') || (a.from = t)),
      globalThis.__DEV__ !== !1 &&
        a.from === void 0 &&
        globalThis.__DEV__ !== !1 &&
        R.warn(8, Ug(Array.from(e))),
      a.variables === void 0 && (a.variables = r),
      a
    );
  }
  function Y_(e) {
    return function (r, n) {
      if (me(r) || me(n)) throw Ue(9);
      if (ve(r) && ve(n)) {
        var i = e.getFieldValue(r, '__typename'),
          o = e.getFieldValue(n, '__typename'),
          a = i && o && i !== o;
        if (a) return n;
        if (Y(r) && di(n)) return e.merge(r.__ref, n), r;
        if (di(r) && Y(n)) return e.merge(r, n.__ref), n;
        if (di(r) && di(n)) return E(E({}, r), n);
      }
      return n;
    };
  }
  function vc(e, t, r) {
    var n = ''.concat(t).concat(r),
      i = e.flavors.get(n);
    return (
      i ||
        e.flavors.set(
          n,
          (i =
            e.clientOnly === t && e.deferred === r
              ? e
              : E(E({}, e), { clientOnly: t, deferred: r }))
        ),
      i
    );
  }
  var F2 = (function () {
      function e(t, r, n) {
        (this.cache = t), (this.reader = r), (this.fragments = n);
      }
      return (
        (e.prototype.writeToStore = function (t, r) {
          var n = this,
            i = r.query,
            o = r.result,
            a = r.dataId,
            s = r.variables,
            u = r.overwrite,
            l = Rn(i),
            c = S2();
          s = E(E({}, Th(l)), s);
          var d = E(
              E(
                {
                  store: t,
                  written: Object.create(null),
                  merge: function (v, y) {
                    return c.merge(v, y);
                  },
                  variables: s,
                  varString: Jr(s)
                },
                q_(i, this.fragments)
              ),
              {
                overwrite: !!u,
                incomingById: new Map(),
                clientOnly: !1,
                deferred: !1,
                flavors: new Map()
              }
            ),
            f = this.processSelectionSet({
              result: o || Object.create(null),
              dataId: a,
              selectionSet: l.selectionSet,
              mergeTree: { map: new Map() },
              context: d
            });
          if (!Y(f)) throw Ue(12, o);
          return (
            d.incomingById.forEach(function (v, y) {
              var g = v.storeObject,
                _ = v.mergeTree,
                h = v.fieldNodeSet,
                p = Oi(y);
              if (_ && _.map.size) {
                var m = n.applyMerges(_, p, g, d);
                if (Y(m)) return;
                g = m;
              }
              if (globalThis.__DEV__ !== !1 && !d.overwrite) {
                var w = Object.create(null);
                h.forEach(function (O) {
                  O.selectionSet && (w[O.name.value] = !0);
                });
                var S = function (O) {
                    return w[nn(O)] === !0;
                  },
                  x = function (O) {
                    var C = _ && _.map.get(O);
                    return Boolean(C && C.info && C.info.merge);
                  };
                Object.keys(g).forEach(function (O) {
                  S(O) && !x(O) && L2(p, g, O, d.store);
                });
              }
              t.merge(y, g);
            }),
            t.retain(f.__ref),
            f
          );
        }),
        (e.prototype.processSelectionSet = function (t) {
          var r = this,
            n = t.dataId,
            i = t.result,
            o = t.selectionSet,
            a = t.context,
            s = t.mergeTree,
            u = this.cache.policies,
            l = Object.create(null),
            c =
              (n && u.rootTypenamesById[n]) ||
              Ff(i, o, a.fragmentMap) ||
              (n && a.store.get(n, '__typename'));
          typeof c == 'string' && (l.__typename = c);
          var d = function () {
              var m = zh(arguments, l, a.variables);
              if (Y(m.from)) {
                var w = a.incomingById.get(m.from.__ref);
                if (w) {
                  var S = u.readField(E(E({}, m), { from: w.storeObject }), a);
                  if (S !== void 0) return S;
                }
              }
              return u.readField(m, a);
            },
            f = new Set();
          this.flattenFields(o, i, a, c).forEach(function (m, w) {
            var S,
              x = Er(w),
              O = i[x];
            if ((f.add(w), O !== void 0)) {
              var C = u.getStoreFieldName({
                  typename: c,
                  fieldName: w.name.value,
                  field: w,
                  variables: m.variables
                }),
                M = gm(s, C),
                I = r.processFieldValue(
                  O,
                  w,
                  w.selectionSet ? vc(m, !1, !1) : m,
                  M
                ),
                ne = void 0;
              w.selectionSet && (Y(I) || di(I)) && (ne = d('__typename', I));
              var ct = u.getMergeFunction(c, w.name.value, ne);
              ct ? (M.info = { field: w, typename: c, merge: ct }) : _m(s, C),
                (l = m.merge(l, ((S = {}), (S[C] = I), S)));
            } else globalThis.__DEV__ !== !1 && !m.clientOnly && !m.deferred && !Rh.added(w) && !u.getReadFunction(c, w.name.value) && globalThis.__DEV__ !== !1 && R.error(13, Er(w), i);
          });
          try {
            var v = u.identify(i, {
                typename: c,
                selectionSet: o,
                fragmentMap: a.fragmentMap,
                storeObject: l,
                readField: d
              }),
              y = v[0],
              g = v[1];
            (n = n || y), g && (l = a.merge(l, g));
          } catch (m) {
            if (!n) throw m;
          }
          if (typeof n == 'string') {
            var _ = Oi(n),
              h = a.written[n] || (a.written[n] = []);
            if (
              h.indexOf(o) >= 0 ||
              (h.push(o), this.reader && this.reader.isFresh(i, _, o, a))
            )
              return _;
            var p = a.incomingById.get(n);
            return (
              p
                ? ((p.storeObject = a.merge(p.storeObject, l)),
                  (p.mergeTree = Wf(p.mergeTree, s)),
                  f.forEach(function (m) {
                    return p.fieldNodeSet.add(m);
                  }))
                : a.incomingById.set(n, {
                    storeObject: l,
                    mergeTree: bu(s) ? void 0 : s,
                    fieldNodeSet: f
                  }),
              _
            );
          }
          return l;
        }),
        (e.prototype.processFieldValue = function (t, r, n, i) {
          var o = this;
          return !r.selectionSet || t === null
            ? globalThis.__DEV__ !== !1
              ? C_(t)
              : t
            : me(t)
            ? t.map(function (a, s) {
                var u = o.processFieldValue(a, r, n, gm(i, s));
                return _m(i, s), u;
              })
            : this.processSelectionSet({
                result: t,
                selectionSet: r.selectionSet,
                context: n,
                mergeTree: i
              });
        }),
        (e.prototype.flattenFields = function (t, r, n, i) {
          i === void 0 && (i = Ff(r, t, n.fragmentMap));
          var o = new Map(),
            a = this.cache.policies,
            s = new Cr(!1);
          return (
            (function u(l, c) {
              var d = s.lookup(l, c.clientOnly, c.deferred);
              d.visited ||
                ((d.visited = !0),
                l.selections.forEach(function (f) {
                  if (!!Ra(f, n.variables)) {
                    var v = c.clientOnly,
                      y = c.deferred;
                    if (
                      (!(v && y) &&
                        bt(f.directives) &&
                        f.directives.forEach(function (h) {
                          var p = h.name.value;
                          if ((p === 'client' && (v = !0), p === 'defer')) {
                            var m = vl(h, n.variables);
                            (!m || m.if !== !1) && (y = !0);
                          }
                        }),
                      en(f))
                    ) {
                      var g = o.get(f);
                      g && ((v = v && g.clientOnly), (y = y && g.deferred)),
                        o.set(f, vc(n, v, y));
                    } else {
                      var _ = pl(f, n.lookupFragment);
                      if (!_ && f.kind === D.FRAGMENT_SPREAD)
                        throw Ue(14, f.name.value);
                      _ &&
                        a.fragmentMatches(_, i, r, n.variables) &&
                        u(_.selectionSet, vc(n, v, y));
                    }
                  }
                }));
            })(t, n),
            o
          );
        }),
        (e.prototype.applyMerges = function (t, r, n, i, o) {
          var a,
            s = this;
          if (t.map.size && !Y(n)) {
            var u = !me(n) && (Y(r) || di(r)) ? r : void 0,
              l = n;
            u && !o && (o = [Y(u) ? u.__ref : u]);
            var c,
              d = function (f, v) {
                return me(f)
                  ? typeof v == 'number'
                    ? f[v]
                    : void 0
                  : i.store.getFieldValue(f, String(v));
              };
            t.map.forEach(function (f, v) {
              var y = d(u, v),
                g = d(l, v);
              if (g !== void 0) {
                o && o.push(v);
                var _ = s.applyMerges(f, y, g, i, o);
                _ !== g && ((c = c || new Map()), c.set(v, _)),
                  o && R(o.pop() === v);
              }
            }),
              c &&
                ((n = me(l) ? l.slice(0) : E({}, l)),
                c.forEach(function (f, v) {
                  n[v] = f;
                }));
          }
          return t.info
            ? this.cache.policies.runMergeFunction(
                r,
                n,
                t.info,
                i,
                o && (a = i.store).getStorage.apply(a, o)
              )
            : n;
        }),
        e
      );
    })(),
    J_ = [];
  function gm(e, t) {
    var r = e.map;
    return r.has(t) || r.set(t, J_.pop() || { map: new Map() }), r.get(t);
  }
  function Wf(e, t) {
    if (e === t || !t || bu(t)) return e;
    if (!e || bu(e)) return t;
    var r = e.info && t.info ? E(E({}, e.info), t.info) : e.info || t.info,
      n = e.map.size && t.map.size,
      i = n ? new Map() : e.map.size ? e.map : t.map,
      o = { info: r, map: i };
    if (n) {
      var a = new Set(t.map.keys());
      e.map.forEach(function (s, u) {
        o.map.set(u, Wf(s, t.map.get(u))), a.delete(u);
      }),
        a.forEach(function (s) {
          o.map.set(s, Wf(t.map.get(s), e.map.get(s)));
        });
    }
    return o;
  }
  function bu(e) {
    return !e || !(e.info || e.map.size);
  }
  function _m(e, t) {
    var r = e.map,
      n = r.get(t);
    n && bu(n) && (J_.push(n), r.delete(t));
  }
  var wm = new Set();
  function L2(e, t, r, n) {
    var i = function (d) {
        var f = n.getFieldValue(d, r);
        return typeof f == 'object' && f;
      },
      o = i(e);
    if (!!o) {
      var a = i(t);
      if (
        !!a &&
        !Y(o) &&
        !J(o, a) &&
        !Object.keys(o).every(function (d) {
          return n.getFieldValue(a, d) !== void 0;
        })
      ) {
        var s =
            n.getFieldValue(e, '__typename') ||
            n.getFieldValue(t, '__typename'),
          u = nn(r),
          l = ''.concat(s, '.').concat(u);
        if (!wm.has(l)) {
          wm.add(l);
          var c = [];
          !me(o) &&
            !me(a) &&
            [o, a].forEach(function (d) {
              var f = n.getFieldValue(d, '__typename');
              typeof f == 'string' && !c.includes(f) && c.push(f);
            }),
            globalThis.__DEV__ !== !1 &&
              R.warn(
                15,
                u,
                s,
                c.length
                  ? 'either ensure all objects of type ' +
                      c.join(' and ') +
                      ' have an ID or a custom merge function, or '
                  : '',
                l,
                E({}, o),
                E({}, a)
              );
        }
      }
    }
  }
  var X_ = (function (e) {
    nr(t, e);
    function t(r) {
      r === void 0 && (r = {});
      var n = e.call(this) || this;
      return (
        (n.watches = new Set()),
        (n.addTypenameTransform = new w_(Rh)),
        (n.assumeImmutableResults = !0),
        (n.makeVar = R2),
        (n.txCount = 0),
        (n.config = b2(r)),
        (n.addTypename = !!n.config.addTypename),
        (n.policies = new I2({
          cache: n,
          dataIdFromObject: n.config.dataIdFromObject,
          possibleTypes: n.config.possibleTypes,
          typePolicies: n.config.typePolicies
        })),
        n.init(),
        n
      );
    }
    return (
      (t.prototype.init = function () {
        var r = (this.data = new ya.Root({
          policies: this.policies,
          resultCaching: this.config.resultCaching
        }));
        (this.optimisticData = r.stump), this.resetResultCache();
      }),
      (t.prototype.resetResultCache = function (r) {
        var n = this,
          i = this.storeReader,
          o = this.config.fragments;
        (this.storeWriter = new F2(
          this,
          (this.storeReader = new C2({
            cache: this,
            addTypename: this.addTypename,
            resultCacheMaxSize: this.config.resultCacheMaxSize,
            canonizeResults: U_(this.config),
            canon: r ? void 0 : i && i.canon,
            fragments: o
          })),
          o
        )),
          (this.maybeBroadcastWatch = ma(
            function (a, s) {
              return n.broadcastWatch(a, s);
            },
            {
              max:
                this.config.resultCacheMaxSize ||
                er['inMemoryCache.maybeBroadcastWatch'] ||
                5e3,
              makeCacheKey: function (a) {
                var s = a.optimistic ? n.optimisticData : n.data;
                if ($o(s)) {
                  var u = a.optimistic,
                    l = a.id,
                    c = a.variables;
                  return s.makeCacheKey(
                    a.query,
                    a.callback,
                    Jr({ optimistic: u, id: l, variables: c })
                  );
                }
              }
            }
          )),
          new Set([this.data.group, this.optimisticData.group]).forEach(
            function (a) {
              return a.resetCaching();
            }
          );
      }),
      (t.prototype.restore = function (r) {
        return this.init(), r && this.data.replace(r), this;
      }),
      (t.prototype.extract = function (r) {
        return (
          r === void 0 && (r = !1),
          (r ? this.optimisticData : this.data).extract()
        );
      }),
      (t.prototype.read = function (r) {
        var n = r.returnPartialData,
          i = n === void 0 ? !1 : n;
        try {
          return (
            this.storeReader.diffQueryAgainstStore(
              E(E({}, r), {
                store: r.optimistic ? this.optimisticData : this.data,
                config: this.config,
                returnPartialData: i
              })
            ).result || null
          );
        } catch (o) {
          if (o instanceof $_) return null;
          throw o;
        }
      }),
      (t.prototype.write = function (r) {
        try {
          return ++this.txCount, this.storeWriter.writeToStore(this.data, r);
        } finally {
          !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
        }
      }),
      (t.prototype.modify = function (r) {
        if (xe.call(r, 'id') && !r.id) return !1;
        var n = r.optimistic ? this.optimisticData : this.data;
        try {
          return ++this.txCount, n.modify(r.id || 'ROOT_QUERY', r.fields);
        } finally {
          !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
        }
      }),
      (t.prototype.diff = function (r) {
        return this.storeReader.diffQueryAgainstStore(
          E(E({}, r), {
            store: r.optimistic ? this.optimisticData : this.data,
            rootId: r.id || 'ROOT_QUERY',
            config: this.config
          })
        );
      }),
      (t.prototype.watch = function (r) {
        var n = this;
        return (
          this.watches.size || D2(this),
          this.watches.add(r),
          r.immediate && this.maybeBroadcastWatch(r),
          function () {
            n.watches.delete(r) && !n.watches.size && cm(n),
              n.maybeBroadcastWatch.forget(r);
          }
        );
      }),
      (t.prototype.gc = function (r) {
        var n;
        Jr.reset(),
          _n.reset(),
          this.addTypenameTransform.resetCache(),
          (n = this.config.fragments) === null ||
            n === void 0 ||
            n.resetCaches();
        var i = this.optimisticData.gc();
        return (
          r &&
            !this.txCount &&
            (r.resetResultCache
              ? this.resetResultCache(r.resetResultIdentities)
              : r.resetResultIdentities && this.storeReader.resetCanon()),
          i
        );
      }),
      (t.prototype.retain = function (r, n) {
        return (n ? this.optimisticData : this.data).retain(r);
      }),
      (t.prototype.release = function (r, n) {
        return (n ? this.optimisticData : this.data).release(r);
      }),
      (t.prototype.identify = function (r) {
        if (Y(r)) return r.__ref;
        try {
          return this.policies.identify(r)[0];
        } catch (n) {
          globalThis.__DEV__ !== !1 && R.warn(n);
        }
      }),
      (t.prototype.evict = function (r) {
        if (!r.id) {
          if (xe.call(r, 'id')) return !1;
          r = E(E({}, r), { id: 'ROOT_QUERY' });
        }
        try {
          return ++this.txCount, this.optimisticData.evict(r, this.data);
        } finally {
          !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
        }
      }),
      (t.prototype.reset = function (r) {
        var n = this;
        return (
          this.init(),
          Jr.reset(),
          r && r.discardWatches
            ? (this.watches.forEach(function (i) {
                return n.maybeBroadcastWatch.forget(i);
              }),
              this.watches.clear(),
              cm(this))
            : this.broadcastWatches(),
          Promise.resolve()
        );
      }),
      (t.prototype.removeOptimistic = function (r) {
        var n = this.optimisticData.removeLayer(r);
        n !== this.optimisticData &&
          ((this.optimisticData = n), this.broadcastWatches());
      }),
      (t.prototype.batch = function (r) {
        var n = this,
          i = r.update,
          o = r.optimistic,
          a = o === void 0 ? !0 : o,
          s = r.removeOptimistic,
          u = r.onWatchUpdated,
          l,
          c = function (f) {
            var v = n,
              y = v.data,
              g = v.optimisticData;
            ++n.txCount, f && (n.data = n.optimisticData = f);
            try {
              return (l = i(n));
            } finally {
              --n.txCount, (n.data = y), (n.optimisticData = g);
            }
          },
          d = new Set();
        return (
          u &&
            !this.txCount &&
            this.broadcastWatches(
              E(E({}, r), {
                onWatchUpdated: function (f) {
                  return d.add(f), !1;
                }
              })
            ),
          typeof a == 'string'
            ? (this.optimisticData = this.optimisticData.addLayer(a, c))
            : a === !1
            ? c(this.data)
            : c(),
          typeof s == 'string' &&
            (this.optimisticData = this.optimisticData.removeLayer(s)),
          u && d.size
            ? (this.broadcastWatches(
                E(E({}, r), {
                  onWatchUpdated: function (f, v) {
                    var y = u.call(this, f, v);
                    return y !== !1 && d.delete(f), y;
                  }
                })
              ),
              d.size &&
                d.forEach(function (f) {
                  return n.maybeBroadcastWatch.dirty(f);
                }))
            : this.broadcastWatches(r),
          l
        );
      }),
      (t.prototype.performTransaction = function (r, n) {
        return this.batch({ update: r, optimistic: n || n !== null });
      }),
      (t.prototype.transformDocument = function (r) {
        return this.addTypenameToDocument(this.addFragmentsToDocument(r));
      }),
      (t.prototype.fragmentMatches = function (r, n) {
        return this.policies.fragmentMatches(r, n);
      }),
      (t.prototype.lookupFragment = function (r) {
        var n;
        return (
          ((n = this.config.fragments) === null || n === void 0
            ? void 0
            : n.lookup(r)) || null
        );
      }),
      (t.prototype.broadcastWatches = function (r) {
        var n = this;
        this.txCount ||
          this.watches.forEach(function (i) {
            return n.maybeBroadcastWatch(i, r);
          });
      }),
      (t.prototype.addFragmentsToDocument = function (r) {
        var n = this.config.fragments;
        return n ? n.transform(r) : r;
      }),
      (t.prototype.addTypenameToDocument = function (r) {
        return this.addTypename
          ? this.addTypenameTransform.transformDocument(r)
          : r;
      }),
      (t.prototype.broadcastWatch = function (r, n) {
        var i = r.lastDiff,
          o = this.diff(r);
        (n &&
          (r.optimistic &&
            typeof n.optimistic == 'string' &&
            (o.fromOptimisticTransaction = !0),
          n.onWatchUpdated && n.onWatchUpdated.call(this, r, o, i) === !1)) ||
          ((!i || !J(i.result, o.result)) && r.callback((r.lastDiff = o), i));
      }),
      t
    );
  })(V_);
  globalThis.__DEV__ !== !1 && (X_.prototype.getMemoryInternals = Fk);
  var U;
  (function (e) {
    (e[(e.loading = 1)] = 'loading'),
      (e[(e.setVariables = 2)] = 'setVariables'),
      (e[(e.fetchMore = 3)] = 'fetchMore'),
      (e[(e.refetch = 4)] = 'refetch'),
      (e[(e.poll = 6)] = 'poll'),
      (e[(e.ready = 7)] = 'ready'),
      (e[(e.error = 8)] = 'error');
  })(U || (U = {}));
  function hi(e) {
    return e ? e < 7 : !1;
  }
  var bm = Object.assign,
    M2 = Object.hasOwnProperty,
    Bo = (function (e) {
      nr(t, e);
      function t(r) {
        var n = r.queryManager,
          i = r.queryInfo,
          o = r.options,
          a = this,
          s = t.inactiveOnCreation.getValue();
        (a =
          e.call(this, function (h) {
            s && (n.queries.set(a.queryId, i), (s = !1));
            try {
              var p = h._subscription._observer;
              p && !p.error && (p.error = j2);
            } catch {}
            var m = !a.observers.size;
            a.observers.add(h);
            var w = a.last;
            return (
              w && w.error
                ? h.error && h.error(w.error)
                : w && w.result && h.next && h.next(a.maskResult(w.result)),
              m && a.reobserve().catch(function () {}),
              function () {
                a.observers.delete(h) && !a.observers.size && a.tearDownQuery();
              }
            );
          }) || this),
          (a.observers = new Set()),
          (a.subscriptions = new Set()),
          (a.dirty = !1),
          (a.queryInfo = i),
          (a.queryManager = n),
          (a.waitForOwnResult = mc(o.fetchPolicy)),
          (a.isTornDown = !1),
          (a.subscribeToMore = a.subscribeToMore.bind(a)),
          (a.maskResult = a.maskResult.bind(a));
        var u = n.defaultOptions.watchQuery,
          l = u === void 0 ? {} : u,
          c = l.fetchPolicy,
          d = c === void 0 ? 'cache-first' : c,
          f = o.fetchPolicy,
          v = f === void 0 ? d : f,
          y = o.initialFetchPolicy,
          g = y === void 0 ? (v === 'standby' ? d : v) : y;
        (a.options = E(E({}, o), { initialFetchPolicy: g, fetchPolicy: v })),
          (a.queryId = i.queryId || n.generateQueryId());
        var _ = Rn(a.query);
        return (a.queryName = _ && _.name && _.name.value), a;
      }
      return (
        Object.defineProperty(t.prototype, 'query', {
          get: function () {
            return this.lastQuery || this.options.query;
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'variables', {
          get: function () {
            return this.options.variables;
          },
          enumerable: !1,
          configurable: !0
        }),
        (t.prototype.result = function () {
          var r = this;
          return new Promise(function (n, i) {
            var o = {
                next: function (s) {
                  n(s),
                    r.observers.delete(o),
                    r.observers.size || r.queryManager.removeQuery(r.queryId),
                    setTimeout(function () {
                      a.unsubscribe();
                    }, 0);
                },
                error: i
              },
              a = r.subscribe(o);
          });
        }),
        (t.prototype.resetDiff = function () {
          this.queryInfo.resetDiff();
        }),
        (t.prototype.getCurrentFullResult = function (r) {
          r === void 0 && (r = !0);
          var n = this.getLastResult(!0),
            i =
              this.queryInfo.networkStatus || (n && n.networkStatus) || U.ready,
            o = E(E({}, n), { loading: hi(i), networkStatus: i }),
            a = this.options.fetchPolicy,
            s = a === void 0 ? 'cache-first' : a;
          if (
            !(
              mc(s) ||
              this.queryManager.getDocumentInfo(this.query).hasForcedResolvers
            )
          )
            if (this.waitForOwnResult) this.queryInfo.updateWatch();
            else {
              var u = this.queryInfo.getDiff();
              (u.complete || this.options.returnPartialData) &&
                (o.data = u.result),
                J(o.data, {}) && (o.data = void 0),
                u.complete
                  ? (delete o.partial,
                    u.complete &&
                      o.networkStatus === U.loading &&
                      (s === 'cache-first' || s === 'cache-only') &&
                      ((o.networkStatus = U.ready), (o.loading = !1)))
                  : (o.partial = !0),
                o.networkStatus === U.ready &&
                  (o.error || o.errors) &&
                  (o.networkStatus = U.error),
                globalThis.__DEV__ !== !1 &&
                  !u.complete &&
                  !this.options.partialRefetch &&
                  !o.loading &&
                  !o.data &&
                  !o.error &&
                  Z_(u.missing);
            }
          return r && this.updateLastResult(o), o;
        }),
        (t.prototype.getCurrentResult = function (r) {
          return (
            r === void 0 && (r = !0),
            this.maskResult(this.getCurrentFullResult(r))
          );
        }),
        (t.prototype.isDifferentFromLastResult = function (r, n) {
          if (!this.last) return !0;
          var i = this.queryManager.getDocumentInfo(this.query),
            o = this.queryManager.dataMasking,
            a = o ? i.nonReactiveQuery : this.query,
            s =
              o || i.hasNonreactiveDirective
                ? !A_(a, this.last.result, r, this.variables)
                : !J(this.last.result, r);
          return s || (n && !J(this.last.variables, n));
        }),
        (t.prototype.getLast = function (r, n) {
          var i = this.last;
          if (i && i[r] && (!n || J(i.variables, this.variables))) return i[r];
        }),
        (t.prototype.getLastResult = function (r) {
          return this.getLast('result', r);
        }),
        (t.prototype.getLastError = function (r) {
          return this.getLast('error', r);
        }),
        (t.prototype.resetLastResults = function () {
          delete this.last, (this.isTornDown = !1);
        }),
        (t.prototype.resetQueryStoreErrors = function () {
          this.queryManager.resetErrors(this.queryId);
        }),
        (t.prototype.refetch = function (r) {
          var n,
            i = { pollInterval: 0 },
            o = this.options.fetchPolicy;
          if (
            (o === 'no-cache'
              ? (i.fetchPolicy = 'no-cache')
              : (i.fetchPolicy = 'network-only'),
            globalThis.__DEV__ !== !1 && r && M2.call(r, 'variables'))
          ) {
            var a = s_(this.query),
              s = a.variableDefinitions;
            (!s ||
              !s.some(function (u) {
                return u.variable.name.value === 'variables';
              })) &&
              globalThis.__DEV__ !== !1 &&
              R.warn(
                21,
                r,
                ((n = a.name) === null || n === void 0 ? void 0 : n.value) || a
              );
          }
          return (
            r &&
              !J(this.options.variables, r) &&
              (i.variables = this.options.variables =
                E(E({}, this.options.variables), r)),
            this.queryInfo.resetLastWrite(),
            this.reobserve(i, U.refetch)
          );
        }),
        (t.prototype.fetchMore = function (r) {
          var n = this,
            i = E(
              E(
                {},
                r.query
                  ? r
                  : E(
                      E(
                        E(E({}, this.options), { query: this.options.query }),
                        r
                      ),
                      {
                        variables: E(E({}, this.options.variables), r.variables)
                      }
                    )
              ),
              { fetchPolicy: 'no-cache' }
            );
          i.query = this.transformDocument(i.query);
          var o = this.queryManager.generateQueryId();
          this.lastQuery = r.query
            ? this.transformDocument(this.options.query)
            : i.query;
          var a = this.queryInfo,
            s = a.networkStatus;
          (a.networkStatus = U.fetchMore),
            i.notifyOnNetworkStatusChange && this.observe();
          var u = new Set(),
            l = r == null ? void 0 : r.updateQuery,
            c = this.options.fetchPolicy !== 'no-cache';
          return (
            c || R(l, 22),
            this.queryManager
              .fetchQuery(o, i, U.fetchMore)
              .then(function (d) {
                if (
                  (n.queryManager.removeQuery(o),
                  a.networkStatus === U.fetchMore && (a.networkStatus = s),
                  c)
                )
                  n.queryManager.cache.batch({
                    update: function (y) {
                      var g = r.updateQuery;
                      g
                        ? y.updateQuery(
                            {
                              query: n.query,
                              variables: n.variables,
                              returnPartialData: !0,
                              optimistic: !1
                            },
                            function (_) {
                              return g(_, {
                                fetchMoreResult: d.data,
                                variables: i.variables
                              });
                            }
                          )
                        : y.writeQuery({
                            query: i.query,
                            variables: i.variables,
                            data: d.data
                          });
                    },
                    onWatchUpdated: function (y) {
                      u.add(y.query);
                    }
                  });
                else {
                  var f = n.getLast('result'),
                    v = l(f.data, {
                      fetchMoreResult: d.data,
                      variables: i.variables
                    });
                  n.reportResult(
                    E(E({}, f), { networkStatus: s, loading: hi(s), data: v }),
                    n.variables
                  );
                }
                return n.maskResult(d);
              })
              .finally(function () {
                c && !u.has(n.query) && n.reobserveCacheFirst();
              })
          );
        }),
        (t.prototype.subscribeToMore = function (r) {
          var n = this,
            i = this.queryManager
              .startGraphQLSubscription({
                query: r.document,
                variables: r.variables,
                context: r.context
              })
              .subscribe({
                next: function (o) {
                  var a = r.updateQuery;
                  a &&
                    n.updateQuery(function (s, u) {
                      return a(s, E({ subscriptionData: o }, u));
                    });
                },
                error: function (o) {
                  if (r.onError) {
                    r.onError(o);
                    return;
                  }
                  globalThis.__DEV__ !== !1 && R.error(23, o);
                }
              });
          return (
            this.subscriptions.add(i),
            function () {
              n.subscriptions.delete(i) && i.unsubscribe();
            }
          );
        }),
        (t.prototype.setOptions = function (r) {
          return this.reobserve(r);
        }),
        (t.prototype.silentSetOptions = function (r) {
          var n = Pn(this.options, r || {});
          bm(this.options, n);
        }),
        (t.prototype.setVariables = function (r) {
          return J(this.variables, r)
            ? this.observers.size
              ? this.result()
              : Promise.resolve()
            : ((this.options.variables = r),
              this.observers.size
                ? this.reobserve(
                    {
                      fetchPolicy: this.options.initialFetchPolicy,
                      variables: r
                    },
                    U.setVariables
                  )
                : Promise.resolve());
        }),
        (t.prototype.updateQuery = function (r) {
          var n = this.queryManager,
            i = n.cache.diff({
              query: this.options.query,
              variables: this.variables,
              returnPartialData: !0,
              optimistic: !1
            }),
            o = i.result,
            a = i.complete,
            s = r(o, {
              variables: this.variables,
              complete: !!a,
              previousData: o
            });
          s &&
            (n.cache.writeQuery({
              query: this.options.query,
              data: s,
              variables: this.variables
            }),
            n.broadcastQueries());
        }),
        (t.prototype.startPolling = function (r) {
          (this.options.pollInterval = r), this.updatePolling();
        }),
        (t.prototype.stopPolling = function () {
          (this.options.pollInterval = 0), this.updatePolling();
        }),
        (t.prototype.applyNextFetchPolicy = function (r, n) {
          if (n.nextFetchPolicy) {
            var i = n.fetchPolicy,
              o = i === void 0 ? 'cache-first' : i,
              a = n.initialFetchPolicy,
              s = a === void 0 ? o : a;
            o === 'standby' ||
              (typeof n.nextFetchPolicy == 'function'
                ? (n.fetchPolicy = n.nextFetchPolicy(o, {
                    reason: r,
                    options: n,
                    observable: this,
                    initialFetchPolicy: s
                  }))
                : r === 'variables-changed'
                ? (n.fetchPolicy = s)
                : (n.fetchPolicy = n.nextFetchPolicy));
          }
          return n.fetchPolicy;
        }),
        (t.prototype.fetch = function (r, n, i) {
          var o = this.queryManager.getOrCreateQuery(this.queryId);
          return (
            o.setObservableQuery(this),
            this.queryManager.fetchConcastWithInfo(o, r, n, i)
          );
        }),
        (t.prototype.updatePolling = function () {
          var r = this;
          if (!this.queryManager.ssrMode) {
            var n = this,
              i = n.pollingInfo,
              o = n.options.pollInterval;
            if (!o || !this.hasObservers()) {
              i && (clearTimeout(i.timeout), delete this.pollingInfo);
              return;
            }
            if (!(i && i.interval === o)) {
              R(o, 24);
              var a = i || (this.pollingInfo = {});
              a.interval = o;
              var s = function () {
                  var l, c;
                  r.pollingInfo &&
                    (!hi(r.queryInfo.networkStatus) &&
                    !(
                      !(
                        (c = (l = r.options).skipPollAttempt) === null ||
                        c === void 0
                      ) && c.call(l)
                    )
                      ? r
                          .reobserve(
                            {
                              fetchPolicy:
                                r.options.initialFetchPolicy === 'no-cache'
                                  ? 'no-cache'
                                  : 'network-only'
                            },
                            U.poll
                          )
                          .then(u, u)
                      : u());
                },
                u = function () {
                  var l = r.pollingInfo;
                  l &&
                    (clearTimeout(l.timeout),
                    (l.timeout = setTimeout(s, l.interval)));
                };
              u();
            }
          }
        }),
        (t.prototype.updateLastResult = function (r, n) {
          n === void 0 && (n = this.variables);
          var i = this.getLastError();
          return (
            i && this.last && !J(n, this.last.variables) && (i = void 0),
            (this.last = E(
              {
                result: this.queryManager.assumeImmutableResults ? r : C_(r),
                variables: n
              },
              i ? { error: i } : null
            ))
          );
        }),
        (t.prototype.reobserveAsConcast = function (r, n) {
          var i = this;
          this.isTornDown = !1;
          var o = n === U.refetch || n === U.fetchMore || n === U.poll,
            a = this.options.variables,
            s = this.options.fetchPolicy,
            u = Pn(this.options, r || {}),
            l = o ? u : bm(this.options, u),
            c = this.transformDocument(l.query);
          (this.lastQuery = c),
            o ||
              (this.updatePolling(),
              r &&
                r.variables &&
                !J(r.variables, a) &&
                l.fetchPolicy !== 'standby' &&
                (l.fetchPolicy === s ||
                  typeof l.nextFetchPolicy == 'function') &&
                (this.applyNextFetchPolicy('variables-changed', l),
                n === void 0 && (n = U.setVariables))),
            this.waitForOwnResult &&
              (this.waitForOwnResult = mc(l.fetchPolicy));
          var d = function () {
              i.concast === y && (i.waitForOwnResult = !1);
            },
            f = l.variables && E({}, l.variables),
            v = this.fetch(l, n, c),
            y = v.concast,
            g = v.fromLink,
            _ = {
              next: function (h) {
                J(i.variables, f) && (d(), i.reportResult(h, f));
              },
              error: function (h) {
                J(i.variables, f) &&
                  (R_(h) || (h = new sr({ networkError: h })),
                  d(),
                  i.reportError(h, f));
              }
            };
          return (
            !o &&
              (g || !this.concast) &&
              (this.concast &&
                this.observer &&
                this.concast.removeObserver(this.observer),
              (this.concast = y),
              (this.observer = _)),
            y.addObserver(_),
            y
          );
        }),
        (t.prototype.reobserve = function (r, n) {
          return T4(
            this.reobserveAsConcast(r, n).promise.then(this.maskResult)
          );
        }),
        (t.prototype.resubscribeAfterError = function () {
          for (var r = [], n = 0; n < arguments.length; n++)
            r[n] = arguments[n];
          var i = this.last;
          this.resetLastResults();
          var o = this.subscribe.apply(this, r);
          return (this.last = i), o;
        }),
        (t.prototype.observe = function () {
          this.reportResult(this.getCurrentFullResult(!1), this.variables);
        }),
        (t.prototype.reportResult = function (r, n) {
          var i = this.getLastError(),
            o = this.isDifferentFromLastResult(r, n);
          (i || !r.partial || this.options.returnPartialData) &&
            this.updateLastResult(r, n),
            (i || o) && Vo(this.observers, 'next', this.maskResult(r));
        }),
        (t.prototype.reportError = function (r, n) {
          var i = E(E({}, this.getLastResult()), {
            error: r,
            errors: r.graphQLErrors,
            networkStatus: U.error,
            loading: !1
          });
          this.updateLastResult(i, n),
            Vo(this.observers, 'error', (this.last.error = r));
        }),
        (t.prototype.hasObservers = function () {
          return this.observers.size > 0;
        }),
        (t.prototype.tearDownQuery = function () {
          this.isTornDown ||
            (this.concast &&
              this.observer &&
              (this.concast.removeObserver(this.observer),
              delete this.concast,
              delete this.observer),
            this.stopPolling(),
            this.subscriptions.forEach(function (r) {
              return r.unsubscribe();
            }),
            this.subscriptions.clear(),
            this.queryManager.stopQuery(this.queryId),
            this.observers.clear(),
            (this.isTornDown = !0));
        }),
        (t.prototype.transformDocument = function (r) {
          return this.queryManager.transform(r);
        }),
        (t.prototype.maskResult = function (r) {
          return r && 'data' in r
            ? E(E({}, r), {
                data: this.queryManager.maskOperation({
                  document: this.query,
                  data: r.data,
                  fetchPolicy: this.options.fetchPolicy,
                  id: this.queryId
                })
              })
            : r;
        }),
        (t.prototype.resetNotifications = function () {
          this.cancelNotifyTimeout(), (this.dirty = !1);
        }),
        (t.prototype.cancelNotifyTimeout = function () {
          this.notifyTimeout &&
            (clearTimeout(this.notifyTimeout), (this.notifyTimeout = void 0));
        }),
        (t.prototype.scheduleNotify = function () {
          var r = this;
          this.dirty ||
            ((this.dirty = !0),
            this.notifyTimeout ||
              (this.notifyTimeout = setTimeout(function () {
                return r.notify();
              }, 0)));
        }),
        (t.prototype.notify = function () {
          if (
            (this.cancelNotifyTimeout(),
            this.dirty &&
              (this.options.fetchPolicy == 'cache-only' ||
                this.options.fetchPolicy == 'cache-and-network' ||
                !hi(this.queryInfo.networkStatus)))
          ) {
            var r = this.queryInfo.getDiff();
            r.fromOptimisticTransaction
              ? this.observe()
              : this.reobserveCacheFirst();
          }
          this.dirty = !1;
        }),
        (t.prototype.reobserveCacheFirst = function () {
          var r = this.options,
            n = r.fetchPolicy,
            i = r.nextFetchPolicy;
          return n === 'cache-and-network' || n === 'network-only'
            ? this.reobserve({
                fetchPolicy: 'cache-first',
                nextFetchPolicy: function (o, a) {
                  return (
                    (this.nextFetchPolicy = i),
                    typeof this.nextFetchPolicy == 'function'
                      ? this.nextFetchPolicy(o, a)
                      : n
                  );
                }
              })
            : this.reobserve();
        }),
        (t.inactiveOnCreation = new ml()),
        t
      );
    })(ee);
  T_(Bo);
  function j2(e) {
    globalThis.__DEV__ !== !1 && R.error(25, e.message, e.stack);
  }
  function Z_(e) {
    globalThis.__DEV__ !== !1 &&
      e &&
      globalThis.__DEV__ !== !1 &&
      R.debug(26, e);
  }
  function mc(e) {
    return e === 'network-only' || e === 'no-cache' || e === 'standby';
  }
  var pi = new (zn ? WeakMap : Map)();
  function yc(e, t) {
    var r = e[t];
    typeof r == 'function' &&
      (e[t] = function () {
        return pi.set(e, (pi.get(e) + 1) % 1e15), r.apply(this, arguments);
      });
  }
  var gc = (function () {
    function e(t, r) {
      r === void 0 && (r = t.generateQueryId()),
        (this.queryId = r),
        (this.document = null),
        (this.lastRequestId = 1),
        (this.stopped = !1),
        (this.observableQuery = null);
      var n = (this.cache = t.cache);
      pi.has(n) ||
        (pi.set(n, 0), yc(n, 'evict'), yc(n, 'modify'), yc(n, 'reset'));
    }
    return (
      (e.prototype.init = function (t) {
        var r = t.networkStatus || U.loading;
        return (
          this.variables &&
            this.networkStatus !== U.loading &&
            !J(this.variables, t.variables) &&
            (r = U.setVariables),
          J(t.variables, this.variables) ||
            ((this.lastDiff = void 0), this.cancel()),
          Object.assign(this, {
            document: t.document,
            variables: t.variables,
            networkError: null,
            graphQLErrors: this.graphQLErrors || [],
            networkStatus: r
          }),
          t.observableQuery && this.setObservableQuery(t.observableQuery),
          t.lastRequestId && (this.lastRequestId = t.lastRequestId),
          this
        );
      }),
      (e.prototype.resetDiff = function () {
        this.lastDiff = void 0;
      }),
      (e.prototype.getDiff = function () {
        var t = this.getDiffOptions();
        if (this.lastDiff && J(t, this.lastDiff.options))
          return this.lastDiff.diff;
        this.updateWatch(this.variables);
        var r = this.observableQuery;
        if (r && r.options.fetchPolicy === 'no-cache') return { complete: !1 };
        var n = this.cache.diff(t);
        return this.updateLastDiff(n, t), n;
      }),
      (e.prototype.updateLastDiff = function (t, r) {
        this.lastDiff = t
          ? { diff: t, options: r || this.getDiffOptions() }
          : void 0;
      }),
      (e.prototype.getDiffOptions = function (t) {
        var r;
        return (
          t === void 0 && (t = this.variables),
          {
            query: this.document,
            variables: t,
            returnPartialData: !0,
            optimistic: !0,
            canonizeResults:
              (r = this.observableQuery) === null || r === void 0
                ? void 0
                : r.options.canonizeResults
          }
        );
      }),
      (e.prototype.setDiff = function (t) {
        var r,
          n,
          i = this.lastDiff && this.lastDiff.diff;
        (t &&
          !t.complete &&
          ((r = this.observableQuery) === null || r === void 0
            ? void 0
            : r.getLastError())) ||
          (this.updateLastDiff(t),
          J(i && i.result, t && t.result) ||
            (n = this.observableQuery) === null ||
            n === void 0 ||
            n.scheduleNotify());
      }),
      (e.prototype.setObservableQuery = function (t) {
        t !== this.observableQuery &&
          ((this.observableQuery = t), t && (t.queryInfo = this));
      }),
      (e.prototype.stop = function () {
        var t;
        if (!this.stopped) {
          (this.stopped = !0),
            (t = this.observableQuery) === null ||
              t === void 0 ||
              t.resetNotifications(),
            this.cancel();
          var r = this.observableQuery;
          r && r.stopPolling();
        }
      }),
      (e.prototype.cancel = function () {
        var t;
        (t = this.cancelWatch) === null || t === void 0 || t.call(this),
          (this.cancelWatch = void 0);
      }),
      (e.prototype.updateWatch = function (t) {
        var r = this;
        t === void 0 && (t = this.variables);
        var n = this.observableQuery;
        if (!(n && n.options.fetchPolicy === 'no-cache')) {
          var i = E(E({}, this.getDiffOptions(t)), {
            watcher: this,
            callback: function (o) {
              return r.setDiff(o);
            }
          });
          (!this.lastWatch || !J(i, this.lastWatch)) &&
            (this.cancel(),
            (this.cancelWatch = this.cache.watch((this.lastWatch = i))));
        }
      }),
      (e.prototype.resetLastWrite = function () {
        this.lastWrite = void 0;
      }),
      (e.prototype.shouldWrite = function (t, r) {
        var n = this.lastWrite;
        return !(
          n &&
          n.dmCount === pi.get(this.cache) &&
          J(r, n.variables) &&
          J(t.data, n.result.data)
        );
      }),
      (e.prototype.markResult = function (t, r, n, i) {
        var o = this,
          a,
          s = new rn(),
          u = bt(t.errors) ? t.errors.slice(0) : [];
        if (
          ((a = this.observableQuery) === null ||
            a === void 0 ||
            a.resetNotifications(),
          'incremental' in t && bt(t.incremental))
        ) {
          var l = N_(this.getDiff().result, t);
          t.data = l;
        } else if ('hasNext' in t && t.hasNext) {
          var c = this.getDiff();
          t.data = s.merge(c.result, t.data);
        }
        (this.graphQLErrors = u),
          n.fetchPolicy === 'no-cache'
            ? this.updateLastDiff(
                { result: t.data, complete: !0 },
                this.getDiffOptions(n.variables)
              )
            : i !== 0 &&
              (Hf(t, n.errorPolicy)
                ? this.cache.performTransaction(function (d) {
                    if (o.shouldWrite(t, n.variables))
                      d.writeQuery({
                        query: r,
                        data: t.data,
                        variables: n.variables,
                        overwrite: i === 1
                      }),
                        (o.lastWrite = {
                          result: t,
                          variables: n.variables,
                          dmCount: pi.get(o.cache)
                        });
                    else if (o.lastDiff && o.lastDiff.diff.complete) {
                      t.data = o.lastDiff.diff.result;
                      return;
                    }
                    var f = o.getDiffOptions(n.variables),
                      v = d.diff(f);
                    !o.stopped &&
                      J(o.variables, n.variables) &&
                      o.updateWatch(n.variables),
                      o.updateLastDiff(v, f),
                      v.complete && (t.data = v.result);
                  })
                : (this.lastWrite = void 0));
      }),
      (e.prototype.markReady = function () {
        return (this.networkError = null), (this.networkStatus = U.ready);
      }),
      (e.prototype.markError = function (t) {
        var r;
        return (
          (this.networkStatus = U.error),
          (this.lastWrite = void 0),
          (r = this.observableQuery) === null ||
            r === void 0 ||
            r.resetNotifications(),
          t.graphQLErrors && (this.graphQLErrors = t.graphQLErrors),
          t.networkError && (this.networkError = t.networkError),
          t
        );
      }),
      e
    );
  })();
  function Hf(e, t) {
    t === void 0 && (t = 'none');
    var r = t === 'ignore' || t === 'all',
      n = !Fs(e);
    return !n && r && e.data && (n = !0), n;
  }
  var V2 = Object.prototype.hasOwnProperty,
    Em = Object.create(null),
    $2 = (function () {
      function e(t) {
        var r = this;
        (this.clientAwareness = {}),
          (this.queries = new Map()),
          (this.fetchCancelFns = new Map()),
          (this.transformCache = new kh(
            er['queryManager.getDocumentInfo'] || 2e3
          )),
          (this.queryIdCounter = 1),
          (this.requestIdCounter = 1),
          (this.mutationIdCounter = 1),
          (this.inFlightLinkObservables = new Cr(!1)),
          (this.noCacheWarningsByQueryId = new Set());
        var n = new w_(
          function (o) {
            return r.cache.transformDocument(o);
          },
          { cache: !1 }
        );
        (this.cache = t.cache),
          (this.link = t.link),
          (this.defaultOptions = t.defaultOptions),
          (this.queryDeduplication = t.queryDeduplication),
          (this.clientAwareness = t.clientAwareness),
          (this.localState = t.localState),
          (this.ssrMode = t.ssrMode),
          (this.assumeImmutableResults = t.assumeImmutableResults),
          (this.dataMasking = t.dataMasking);
        var i = t.documentTransform;
        (this.documentTransform = i ? n.concat(i).concat(n) : n),
          (this.defaultContext = t.defaultContext || Object.create(null)),
          (this.onBroadcast = t.onBroadcast) &&
            (this.mutationStore = Object.create(null));
      }
      return (
        (e.prototype.stop = function () {
          var t = this;
          this.queries.forEach(function (r, n) {
            t.stopQueryNoBroadcast(n);
          }),
            this.cancelPendingFetches(Ue(27));
        }),
        (e.prototype.cancelPendingFetches = function (t) {
          this.fetchCancelFns.forEach(function (r) {
            return r(t);
          }),
            this.fetchCancelFns.clear();
        }),
        (e.prototype.mutate = function (t) {
          return Ar(this, arguments, void 0, function (r) {
            var n,
              i,
              o,
              a,
              s,
              u,
              l,
              c = r.mutation,
              d = r.variables,
              f = r.optimisticResponse,
              v = r.updateQueries,
              y = r.refetchQueries,
              g = y === void 0 ? [] : y,
              _ = r.awaitRefetchQueries,
              h = _ === void 0 ? !1 : _,
              p = r.update,
              m = r.onQueryUpdated,
              w = r.fetchPolicy,
              S =
                w === void 0
                  ? ((u = this.defaultOptions.mutate) === null || u === void 0
                      ? void 0
                      : u.fetchPolicy) || 'network-only'
                  : w,
              x = r.errorPolicy,
              O =
                x === void 0
                  ? ((l = this.defaultOptions.mutate) === null || l === void 0
                      ? void 0
                      : l.errorPolicy) || 'none'
                  : x,
              C = r.keepRootFields,
              M = r.context;
            return Ir(this, function (I) {
              switch (I.label) {
                case 0:
                  return (
                    R(c, 28),
                    R(S === 'network-only' || S === 'no-cache', 29),
                    (n = this.generateMutationId()),
                    (c = this.cache.transformForLink(this.transform(c))),
                    (i = this.getDocumentInfo(c).hasClientExports),
                    (d = this.getVariables(c, d)),
                    i
                      ? [4, this.localState.addExportedVariables(c, d, M)]
                      : [3, 2]
                  );
                case 1:
                  (d = I.sent()), (I.label = 2);
                case 2:
                  return (
                    (o =
                      this.mutationStore &&
                      (this.mutationStore[n] = {
                        mutation: c,
                        variables: d,
                        loading: !0,
                        error: null
                      })),
                    (a =
                      f &&
                      this.markMutationOptimistic(f, {
                        mutationId: n,
                        document: c,
                        variables: d,
                        fetchPolicy: S,
                        errorPolicy: O,
                        context: M,
                        updateQueries: v,
                        update: p,
                        keepRootFields: C
                      })),
                    this.broadcastQueries(),
                    (s = this),
                    [
                      2,
                      new Promise(function (ne, ct) {
                        return fc(
                          s.getObservableFromLink(
                            c,
                            E(E({}, M), { optimisticResponse: a ? f : void 0 }),
                            d,
                            {},
                            !1
                          ),
                          function (le) {
                            if (Fs(le) && O === 'none')
                              throw new sr({ graphQLErrors: Vf(le) });
                            o && ((o.loading = !1), (o.error = null));
                            var Et = E({}, le);
                            return (
                              typeof g == 'function' && (g = g(Et)),
                              O === 'ignore' && Fs(Et) && delete Et.errors,
                              s.markMutationResult({
                                mutationId: n,
                                result: Et,
                                document: c,
                                variables: d,
                                fetchPolicy: S,
                                errorPolicy: O,
                                context: M,
                                update: p,
                                updateQueries: v,
                                awaitRefetchQueries: h,
                                refetchQueries: g,
                                removeOptimistic: a ? n : void 0,
                                onQueryUpdated: m,
                                keepRootFields: C
                              })
                            );
                          }
                        ).subscribe({
                          next: function (le) {
                            s.broadcastQueries(),
                              (!('hasNext' in le) || le.hasNext === !1) &&
                                ne(
                                  E(E({}, le), {
                                    data: s.maskOperation({
                                      document: c,
                                      data: le.data,
                                      fetchPolicy: S,
                                      id: n
                                    })
                                  })
                                );
                          },
                          error: function (le) {
                            o && ((o.loading = !1), (o.error = le)),
                              a && s.cache.removeOptimistic(n),
                              s.broadcastQueries(),
                              ct(
                                le instanceof sr
                                  ? le
                                  : new sr({ networkError: le })
                              );
                          }
                        });
                      })
                    ]
                  );
              }
            });
          });
        }),
        (e.prototype.markMutationResult = function (t, r) {
          var n = this;
          r === void 0 && (r = this.cache);
          var i = t.result,
            o = [],
            a = t.fetchPolicy === 'no-cache';
          if (!a && Hf(i, t.errorPolicy)) {
            if (
              (ki(i) ||
                o.push({
                  result: i.data,
                  dataId: 'ROOT_MUTATION',
                  query: t.document,
                  variables: t.variables
                }),
              ki(i) && bt(i.incremental))
            ) {
              var s = r.diff({
                  id: 'ROOT_MUTATION',
                  query: this.getDocumentInfo(t.document).asQuery,
                  variables: t.variables,
                  optimistic: !1,
                  returnPartialData: !0
                }),
                u = void 0;
              s.result && (u = N_(s.result, i)),
                typeof u < 'u' &&
                  ((i.data = u),
                  o.push({
                    result: u,
                    dataId: 'ROOT_MUTATION',
                    query: t.document,
                    variables: t.variables
                  }));
            }
            var l = t.updateQueries;
            l &&
              this.queries.forEach(function (d, f) {
                var v = d.observableQuery,
                  y = v && v.queryName;
                if (!(!y || !V2.call(l, y))) {
                  var g = l[y],
                    _ = n.queries.get(f),
                    h = _.document,
                    p = _.variables,
                    m = r.diff({
                      query: h,
                      variables: p,
                      returnPartialData: !0,
                      optimistic: !1
                    }),
                    w = m.result,
                    S = m.complete;
                  if (S && w) {
                    var x = g(w, {
                      mutationResult: i,
                      queryName: (h && ko(h)) || void 0,
                      queryVariables: p
                    });
                    x &&
                      o.push({
                        result: x,
                        dataId: 'ROOT_QUERY',
                        query: h,
                        variables: p
                      });
                  }
                }
              });
          }
          if (
            o.length > 0 ||
            (t.refetchQueries || '').length > 0 ||
            t.update ||
            t.onQueryUpdated ||
            t.removeOptimistic
          ) {
            var c = [];
            if (
              (this.refetchQueries({
                updateCache: function (d) {
                  a ||
                    o.forEach(function (g) {
                      return d.write(g);
                    });
                  var f = t.update,
                    v = !A4(i) || (ki(i) && !i.hasNext);
                  if (f) {
                    if (!a) {
                      var y = d.diff({
                        id: 'ROOT_MUTATION',
                        query: n.getDocumentInfo(t.document).asQuery,
                        variables: t.variables,
                        optimistic: !1,
                        returnPartialData: !0
                      });
                      y.complete &&
                        ((i = E(E({}, i), { data: y.result })),
                        'incremental' in i && delete i.incremental,
                        'hasNext' in i && delete i.hasNext);
                    }
                    v &&
                      f(d, i, { context: t.context, variables: t.variables });
                  }
                  !a &&
                    !t.keepRootFields &&
                    v &&
                    d.modify({
                      id: 'ROOT_MUTATION',
                      fields: function (g, _) {
                        var h = _.fieldName,
                          p = _.DELETE;
                        return h === '__typename' ? g : p;
                      }
                    });
                },
                include: t.refetchQueries,
                optimistic: !1,
                removeOptimistic: t.removeOptimistic,
                onQueryUpdated: t.onQueryUpdated || null
              }).forEach(function (d) {
                return c.push(d);
              }),
              t.awaitRefetchQueries || t.onQueryUpdated)
            )
              return Promise.all(c).then(function () {
                return i;
              });
          }
          return Promise.resolve(i);
        }),
        (e.prototype.markMutationOptimistic = function (t, r) {
          var n = this,
            i = typeof t == 'function' ? t(r.variables, { IGNORE: Em }) : t;
          return i === Em
            ? !1
            : (this.cache.recordOptimisticTransaction(function (o) {
                try {
                  n.markMutationResult(E(E({}, r), { result: { data: i } }), o);
                } catch (a) {
                  globalThis.__DEV__ !== !1 && R.error(a);
                }
              }, r.mutationId),
              !0);
        }),
        (e.prototype.fetchQuery = function (t, r, n) {
          return this.fetchConcastWithInfo(this.getOrCreateQuery(t), r, n)
            .concast.promise;
        }),
        (e.prototype.getQueryStore = function () {
          var t = Object.create(null);
          return (
            this.queries.forEach(function (r, n) {
              t[n] = {
                variables: r.variables,
                networkStatus: r.networkStatus,
                networkError: r.networkError,
                graphQLErrors: r.graphQLErrors
              };
            }),
            t
          );
        }),
        (e.prototype.resetErrors = function (t) {
          var r = this.queries.get(t);
          r && ((r.networkError = void 0), (r.graphQLErrors = []));
        }),
        (e.prototype.transform = function (t) {
          return this.documentTransform.transformDocument(t);
        }),
        (e.prototype.getDocumentInfo = function (t) {
          var r = this.transformCache;
          if (!r.has(t)) {
            var n = {
              hasClientExports: hk(t),
              hasForcedResolvers: this.localState.shouldForceResolvers(t),
              hasNonreactiveDirective: pa(['nonreactive'], t),
              nonReactiveQuery: y4(t),
              clientQuery: this.localState.clientQuery(t),
              serverQuery: E_(
                [
                  { name: 'client', remove: !0 },
                  { name: 'connection' },
                  { name: 'nonreactive' },
                  { name: 'unmask' }
                ],
                t
              ),
              defaultVars: Th(Rn(t)),
              asQuery: E(E({}, t), {
                definitions: t.definitions.map(function (i) {
                  return i.kind === 'OperationDefinition' &&
                    i.operation !== 'query'
                    ? E(E({}, i), { operation: 'query' })
                    : i;
                })
              })
            };
            r.set(t, n);
          }
          return r.get(t);
        }),
        (e.prototype.getVariables = function (t, r) {
          return E(E({}, this.getDocumentInfo(t).defaultVars), r);
        }),
        (e.prototype.watchQuery = function (t) {
          var r = this.transform(t.query);
          (t = E(E({}, t), { variables: this.getVariables(r, t.variables) })),
            typeof t.notifyOnNetworkStatusChange > 'u' &&
              (t.notifyOnNetworkStatusChange = !1);
          var n = new gc(this),
            i = new Bo({ queryManager: this, queryInfo: n, options: t });
          return (
            (i.lastQuery = r),
            Bo.inactiveOnCreation.getValue() || this.queries.set(i.queryId, n),
            n.init({ document: r, observableQuery: i, variables: i.variables }),
            i
          );
        }),
        (e.prototype.query = function (t, r) {
          var n = this;
          r === void 0 && (r = this.generateQueryId()),
            R(t.query, 30),
            R(t.query.kind === 'Document', 31),
            R(!t.returnPartialData, 32),
            R(!t.pollInterval, 33);
          var i = this.transform(t.query);
          return this.fetchQuery(r, E(E({}, t), { query: i }))
            .then(function (o) {
              return (
                o &&
                E(E({}, o), {
                  data: n.maskOperation({
                    document: i,
                    data: o.data,
                    fetchPolicy: t.fetchPolicy,
                    id: r
                  })
                })
              );
            })
            .finally(function () {
              return n.stopQuery(r);
            });
        }),
        (e.prototype.generateQueryId = function () {
          return String(this.queryIdCounter++);
        }),
        (e.prototype.generateRequestId = function () {
          return this.requestIdCounter++;
        }),
        (e.prototype.generateMutationId = function () {
          return String(this.mutationIdCounter++);
        }),
        (e.prototype.stopQueryInStore = function (t) {
          this.stopQueryInStoreNoBroadcast(t), this.broadcastQueries();
        }),
        (e.prototype.stopQueryInStoreNoBroadcast = function (t) {
          var r = this.queries.get(t);
          r && r.stop();
        }),
        (e.prototype.clearStore = function (t) {
          return (
            t === void 0 && (t = { discardWatches: !0 }),
            this.cancelPendingFetches(Ue(34)),
            this.queries.forEach(function (r) {
              r.observableQuery ? (r.networkStatus = U.loading) : r.stop();
            }),
            this.mutationStore && (this.mutationStore = Object.create(null)),
            this.cache.reset(t)
          );
        }),
        (e.prototype.getObservableQueries = function (t) {
          var r = this;
          t === void 0 && (t = 'active');
          var n = new Map(),
            i = new Map(),
            o = new Map(),
            a = new Set();
          return (
            Array.isArray(t) &&
              t.forEach(function (s) {
                if (typeof s == 'string') i.set(s, s), o.set(s, !1);
                else if (Uk(s)) {
                  var u = _n(r.transform(s));
                  i.set(u, ko(s)), o.set(u, !1);
                } else ve(s) && s.query && a.add(s);
              }),
            this.queries.forEach(function (s, u) {
              var l = s.observableQuery,
                c = s.document;
              if (l) {
                if (t === 'all') {
                  n.set(u, l);
                  return;
                }
                var d = l.queryName,
                  f = l.options.fetchPolicy;
                if (f === 'standby' || (t === 'active' && !l.hasObservers()))
                  return;
                (t === 'active' || (d && o.has(d)) || (c && o.has(_n(c)))) &&
                  (n.set(u, l), d && o.set(d, !0), c && o.set(_n(c), !0));
              }
            }),
            a.size &&
              a.forEach(function (s) {
                var u = Cf('legacyOneTimeQuery'),
                  l = r
                    .getOrCreateQuery(u)
                    .init({ document: s.query, variables: s.variables }),
                  c = new Bo({
                    queryManager: r,
                    queryInfo: l,
                    options: E(E({}, s), { fetchPolicy: 'network-only' })
                  });
                R(c.queryId === u), l.setObservableQuery(c), n.set(u, c);
              }),
            globalThis.__DEV__ !== !1 &&
              o.size &&
              o.forEach(function (s, u) {
                if (!s) {
                  var l = i.get(u);
                  l
                    ? globalThis.__DEV__ !== !1 && R.warn(35, l)
                    : globalThis.__DEV__ !== !1 && R.warn(36);
                }
              }),
            n
          );
        }),
        (e.prototype.reFetchObservableQueries = function (t) {
          var r = this;
          t === void 0 && (t = !1);
          var n = [];
          return (
            this.getObservableQueries(t ? 'all' : 'active').forEach(function (
              i,
              o
            ) {
              var a = i.options.fetchPolicy;
              i.resetLastResults(),
                (t || (a !== 'standby' && a !== 'cache-only')) &&
                  n.push(i.refetch()),
                (r.queries.get(o) || i.queryInfo).setDiff(null);
            }),
            this.broadcastQueries(),
            Promise.all(n)
          );
        }),
        (e.prototype.startGraphQLSubscription = function (t) {
          var r = this,
            n = t.query,
            i = t.variables,
            o = t.fetchPolicy,
            a = t.errorPolicy,
            s = a === void 0 ? 'none' : a,
            u = t.context,
            l = u === void 0 ? {} : u,
            c = t.extensions,
            d = c === void 0 ? {} : c;
          (n = this.transform(n)), (i = this.getVariables(n, i));
          var f = function (y) {
            return r.getObservableFromLink(n, l, y, d).map(function (g) {
              o !== 'no-cache' &&
                (Hf(g, s) &&
                  r.cache.write({
                    query: n,
                    result: g.data,
                    dataId: 'ROOT_SUBSCRIPTION',
                    variables: y
                  }),
                r.broadcastQueries());
              var _ = Fs(g),
                h = K4(g);
              if (_ || h) {
                var p = {};
                if (
                  (_ && (p.graphQLErrors = g.errors),
                  h && (p.protocolErrors = g.extensions[Lh]),
                  s === 'none' || h)
                )
                  throw new sr(p);
              }
              return s === 'ignore' && delete g.errors, g;
            });
          };
          if (this.getDocumentInfo(n).hasClientExports) {
            var v = this.localState.addExportedVariables(n, i, l).then(f);
            return new ee(function (y) {
              var g = null;
              return (
                v.then(function (_) {
                  return (g = _.subscribe(y));
                }, y.error),
                function () {
                  return g && g.unsubscribe();
                }
              );
            });
          }
          return f(i);
        }),
        (e.prototype.stopQuery = function (t) {
          this.stopQueryNoBroadcast(t), this.broadcastQueries();
        }),
        (e.prototype.stopQueryNoBroadcast = function (t) {
          this.stopQueryInStoreNoBroadcast(t), this.removeQuery(t);
        }),
        (e.prototype.removeQuery = function (t) {
          var r;
          this.fetchCancelFns.delete(t),
            this.queries.has(t) &&
              ((r = this.queries.get(t)) === null || r === void 0 || r.stop(),
              this.queries.delete(t));
        }),
        (e.prototype.broadcastQueries = function () {
          this.onBroadcast && this.onBroadcast(),
            this.queries.forEach(function (t) {
              var r;
              return (r = t.observableQuery) === null || r === void 0
                ? void 0
                : r.notify();
            });
        }),
        (e.prototype.getLocalState = function () {
          return this.localState;
        }),
        (e.prototype.getObservableFromLink = function (t, r, n, i, o) {
          var a = this,
            s;
          o === void 0 &&
            (o =
              (s = r == null ? void 0 : r.queryDeduplication) !== null &&
              s !== void 0
                ? s
                : this.queryDeduplication);
          var u,
            l = this.getDocumentInfo(t),
            c = l.serverQuery,
            d = l.clientQuery;
          if (c) {
            var f = this,
              v = f.inFlightLinkObservables,
              y = f.link,
              g = {
                query: c,
                variables: n,
                operationName: ko(c) || void 0,
                context: this.prepareContext(E(E({}, r), { forceFetch: !o })),
                extensions: i
              };
            if (((r = g.context), o)) {
              var _ = _n(c),
                h = Jr(n),
                p = v.lookup(_, h);
              if (((u = p.observable), !u)) {
                var m = new Jn([$f(y, g)]);
                (u = p.observable = m),
                  m.beforeNext(function w(S, x) {
                    S === 'next' && 'hasNext' in x && x.hasNext
                      ? m.beforeNext(w)
                      : v.remove(_, h);
                  });
              }
            } else u = new Jn([$f(y, g)]);
          } else
            (u = new Jn([ee.of({ data: {} })])), (r = this.prepareContext(r));
          return (
            d &&
              (u = fc(u, function (w) {
                return a.localState.runResolvers({
                  document: d,
                  remoteResult: w,
                  context: r,
                  variables: n
                });
              })),
            u
          );
        }),
        (e.prototype.getResultsFromLink = function (t, r, n) {
          var i = (t.lastRequestId = this.generateRequestId()),
            o = this.cache.transformForLink(n.query);
          return fc(
            this.getObservableFromLink(o, n.context, n.variables),
            function (a) {
              var s = Vf(a),
                u = s.length > 0,
                l = n.errorPolicy;
              if (i >= t.lastRequestId) {
                if (u && l === 'none')
                  throw t.markError(new sr({ graphQLErrors: s }));
                t.markResult(a, o, n, r), t.markReady();
              }
              var c = { data: a.data, loading: !1, networkStatus: U.ready };
              return (
                u && l === 'none' && (c.data = void 0),
                u &&
                  l !== 'ignore' &&
                  ((c.errors = s), (c.networkStatus = U.error)),
                c
              );
            },
            function (a) {
              var s = R_(a) ? a : new sr({ networkError: a });
              throw (i >= t.lastRequestId && t.markError(s), s);
            }
          );
        }),
        (e.prototype.fetchConcastWithInfo = function (t, r, n, i) {
          var o = this;
          n === void 0 && (n = U.loading), i === void 0 && (i = r.query);
          var a = this.getVariables(i, r.variables),
            s = this.defaultOptions.watchQuery,
            u = r.fetchPolicy,
            l = u === void 0 ? (s && s.fetchPolicy) || 'cache-first' : u,
            c = r.errorPolicy,
            d = c === void 0 ? (s && s.errorPolicy) || 'none' : c,
            f = r.returnPartialData,
            v = f === void 0 ? !1 : f,
            y = r.notifyOnNetworkStatusChange,
            g = y === void 0 ? !1 : y,
            _ = r.context,
            h = _ === void 0 ? {} : _,
            p = Object.assign({}, r, {
              query: i,
              variables: a,
              fetchPolicy: l,
              errorPolicy: d,
              returnPartialData: v,
              notifyOnNetworkStatusChange: g,
              context: h
            }),
            m = function (C) {
              p.variables = C;
              var M = o.fetchQueryByPolicy(t, p, n);
              return (
                p.fetchPolicy !== 'standby' &&
                  M.sources.length > 0 &&
                  t.observableQuery &&
                  t.observableQuery.applyNextFetchPolicy('after-fetch', r),
                M
              );
            },
            w = function () {
              return o.fetchCancelFns.delete(t.queryId);
            };
          this.fetchCancelFns.set(t.queryId, function (C) {
            w(),
              setTimeout(function () {
                return S.cancel(C);
              });
          });
          var S, x;
          if (this.getDocumentInfo(p.query).hasClientExports)
            (S = new Jn(
              this.localState
                .addExportedVariables(p.query, p.variables, p.context)
                .then(m)
                .then(function (C) {
                  return C.sources;
                })
            )),
              (x = !0);
          else {
            var O = m(p.variables);
            (x = O.fromLink), (S = new Jn(O.sources));
          }
          return S.promise.then(w, w), { concast: S, fromLink: x };
        }),
        (e.prototype.refetchQueries = function (t) {
          var r = this,
            n = t.updateCache,
            i = t.include,
            o = t.optimistic,
            a = o === void 0 ? !1 : o,
            s = t.removeOptimistic,
            u = s === void 0 ? (a ? Cf('refetchQueries') : void 0) : s,
            l = t.onQueryUpdated,
            c = new Map();
          i &&
            this.getObservableQueries(i).forEach(function (f, v) {
              c.set(v, {
                oq: f,
                lastDiff: (r.queries.get(v) || f.queryInfo).getDiff()
              });
            });
          var d = new Map();
          return (
            n &&
              this.cache.batch({
                update: n,
                optimistic: (a && u) || !1,
                removeOptimistic: u,
                onWatchUpdated: function (f, v, y) {
                  var g = f.watcher instanceof gc && f.watcher.observableQuery;
                  if (g) {
                    if (l) {
                      c.delete(g.queryId);
                      var _ = l(g, v, y);
                      return (
                        _ === !0 && (_ = g.refetch()),
                        _ !== !1 && d.set(g, _),
                        _
                      );
                    }
                    l !== null &&
                      c.set(g.queryId, { oq: g, lastDiff: y, diff: v });
                  }
                }
              }),
            c.size &&
              c.forEach(function (f, v) {
                var y = f.oq,
                  g = f.lastDiff,
                  _ = f.diff,
                  h;
                l &&
                  (_ || (_ = r.cache.diff(y.queryInfo.getDiffOptions())),
                  (h = l(y, _, g))),
                  (!l || h === !0) && (h = y.refetch()),
                  h !== !1 && d.set(y, h),
                  v.indexOf('legacyOneTimeQuery') >= 0 &&
                    r.stopQueryNoBroadcast(v);
              }),
            u && this.cache.removeOptimistic(u),
            d
          );
        }),
        (e.prototype.maskOperation = function (t) {
          var r,
            n,
            i,
            o = t.document,
            a = t.data;
          if (globalThis.__DEV__ !== !1) {
            var s = t.fetchPolicy,
              u = t.id,
              l = (r = Rn(o)) === null || r === void 0 ? void 0 : r.operation,
              c =
                ((n = l == null ? void 0 : l[0]) !== null && n !== void 0
                  ? n
                  : 'o') + u;
            this.dataMasking &&
              s === 'no-cache' &&
              !Ok(o) &&
              !this.noCacheWarningsByQueryId.has(c) &&
              (this.noCacheWarningsByQueryId.add(c),
              globalThis.__DEV__ !== !1 &&
                R.warn(
                  37,
                  (i = ko(o)) !== null && i !== void 0
                    ? i
                    : 'Unnamed '.concat(l != null ? l : 'operation')
                ));
          }
          return this.dataMasking ? w2(a, o, this.cache) : a;
        }),
        (e.prototype.maskFragment = function (t) {
          var r = t.data,
            n = t.fragment,
            i = t.fragmentName;
          return this.dataMasking ? j_(r, n, this.cache, i) : r;
        }),
        (e.prototype.fetchQueryByPolicy = function (t, r, n) {
          var i = this,
            o = r.query,
            a = r.variables,
            s = r.fetchPolicy,
            u = r.refetchWritePolicy,
            l = r.errorPolicy,
            c = r.returnPartialData,
            d = r.context,
            f = r.notifyOnNetworkStatusChange,
            v = t.networkStatus;
          t.init({ document: o, variables: a, networkStatus: n });
          var y = function () {
              return t.getDiff();
            },
            g = function (w, S) {
              S === void 0 && (S = t.networkStatus || U.loading);
              var x = w.result;
              globalThis.__DEV__ !== !1 && !c && !J(x, {}) && Z_(w.missing);
              var O = function (C) {
                return ee.of(
                  E(
                    { data: C, loading: hi(S), networkStatus: S },
                    w.complete ? null : { partial: !0 }
                  )
                );
              };
              return x && i.getDocumentInfo(o).hasForcedResolvers
                ? i.localState
                    .runResolvers({
                      document: o,
                      remoteResult: { data: x },
                      context: d,
                      variables: a,
                      onlyRunForcedResolvers: !0
                    })
                    .then(function (C) {
                      return O(C.data || void 0);
                    })
                : l === 'none' && S === U.refetch && Array.isArray(w.missing)
                ? O(void 0)
                : O(x);
            },
            _ = s === 'no-cache' ? 0 : n === U.refetch && u !== 'merge' ? 1 : 2,
            h = function () {
              return i.getResultsFromLink(t, _, {
                query: o,
                variables: a,
                context: d,
                fetchPolicy: s,
                errorPolicy: l
              });
            },
            p = f && typeof v == 'number' && v !== n && hi(n);
          switch (s) {
            default:
            case 'cache-first': {
              var m = y();
              return m.complete
                ? { fromLink: !1, sources: [g(m, t.markReady())] }
                : c || p
                ? { fromLink: !0, sources: [g(m), h()] }
                : { fromLink: !0, sources: [h()] };
            }
            case 'cache-and-network': {
              var m = y();
              return m.complete || c || p
                ? { fromLink: !0, sources: [g(m), h()] }
                : { fromLink: !0, sources: [h()] };
            }
            case 'cache-only':
              return { fromLink: !1, sources: [g(y(), t.markReady())] };
            case 'network-only':
              return p
                ? { fromLink: !0, sources: [g(y()), h()] }
                : { fromLink: !0, sources: [h()] };
            case 'no-cache':
              return p
                ? { fromLink: !0, sources: [g(t.getDiff()), h()] }
                : { fromLink: !0, sources: [h()] };
            case 'standby':
              return { fromLink: !1, sources: [] };
          }
        }),
        (e.prototype.getOrCreateQuery = function (t) {
          return (
            t && !this.queries.has(t) && this.queries.set(t, new gc(this, t)),
            this.queries.get(t)
          );
        }),
        (e.prototype.prepareContext = function (t) {
          t === void 0 && (t = {});
          var r = this.localState.prepareContext(t);
          return E(E(E({}, this.defaultContext), r), {
            clientAwareness: this.clientAwareness
          });
        }),
        e
      );
    })(),
    z2 = (function () {
      function e(t) {
        var r = t.cache,
          n = t.client,
          i = t.resolvers,
          o = t.fragmentMatcher;
        (this.selectionsToResolveCache = new WeakMap()),
          (this.cache = r),
          n && (this.client = n),
          i && this.addResolvers(i),
          o && this.setFragmentMatcher(o);
      }
      return (
        (e.prototype.addResolvers = function (t) {
          var r = this;
          (this.resolvers = this.resolvers || {}),
            Array.isArray(t)
              ? t.forEach(function (n) {
                  r.resolvers = Uv(r.resolvers, n);
                })
              : (this.resolvers = Uv(this.resolvers, t));
        }),
        (e.prototype.setResolvers = function (t) {
          (this.resolvers = {}), this.addResolvers(t);
        }),
        (e.prototype.getResolvers = function () {
          return this.resolvers || {};
        }),
        (e.prototype.runResolvers = function (t) {
          return Ar(this, arguments, void 0, function (r) {
            var n = r.document,
              i = r.remoteResult,
              o = r.context,
              a = r.variables,
              s = r.onlyRunForcedResolvers,
              u = s === void 0 ? !1 : s;
            return Ir(this, function (l) {
              return n
                ? [
                    2,
                    this.resolveDocument(
                      n,
                      i.data,
                      o,
                      a,
                      this.fragmentMatcher,
                      u
                    ).then(function (c) {
                      return E(E({}, i), { data: c.result });
                    })
                  ]
                : [2, i];
            });
          });
        }),
        (e.prototype.setFragmentMatcher = function (t) {
          this.fragmentMatcher = t;
        }),
        (e.prototype.getFragmentMatcher = function () {
          return this.fragmentMatcher;
        }),
        (e.prototype.clientQuery = function (t) {
          return pa(['client'], t) && this.resolvers ? t : null;
        }),
        (e.prototype.serverQuery = function (t) {
          return S_(t);
        }),
        (e.prototype.prepareContext = function (t) {
          var r = this.cache;
          return E(E({}, t), {
            cache: r,
            getCacheKey: function (n) {
              return r.identify(n);
            }
          });
        }),
        (e.prototype.addExportedVariables = function (t) {
          return Ar(this, arguments, void 0, function (r, n, i) {
            return (
              n === void 0 && (n = {}),
              i === void 0 && (i = {}),
              Ir(this, function (o) {
                return r
                  ? [
                      2,
                      this.resolveDocument(
                        r,
                        this.buildRootValueFromCache(r, n) || {},
                        this.prepareContext(i),
                        n
                      ).then(function (a) {
                        return E(E({}, n), a.exportedVariables);
                      })
                    ]
                  : [2, E({}, n)];
              })
            );
          });
        }),
        (e.prototype.shouldForceResolvers = function (t) {
          var r = !1;
          return (
            Ft(t, {
              Directive: {
                enter: function (n) {
                  if (
                    n.name.value === 'client' &&
                    n.arguments &&
                    ((r = n.arguments.some(function (i) {
                      return (
                        i.name.value === 'always' &&
                        i.value.kind === 'BooleanValue' &&
                        i.value.value === !0
                      );
                    })),
                    r)
                  )
                    return dl;
                }
              }
            }),
            r
          );
        }),
        (e.prototype.buildRootValueFromCache = function (t, r) {
          return this.cache.diff({
            query: m4(t),
            variables: r,
            returnPartialData: !0,
            optimistic: !1
          }).result;
        }),
        (e.prototype.resolveDocument = function (t, r) {
          return Ar(this, arguments, void 0, function (n, i, o, a, s, u) {
            var l, c, d, f, v, y, g, _, h, p, m;
            return (
              o === void 0 && (o = {}),
              a === void 0 && (a = {}),
              s === void 0 &&
                (s = function () {
                  return !0;
                }),
              u === void 0 && (u = !1),
              Ir(this, function (w) {
                return (
                  (l = Pa(n)),
                  (c = eo(n)),
                  (d = Xi(c)),
                  (f = this.collectSelectionsToResolve(l, d)),
                  (v = l.operation),
                  (y = v ? v.charAt(0).toUpperCase() + v.slice(1) : 'Query'),
                  (g = this),
                  (_ = g.cache),
                  (h = g.client),
                  (p = {
                    fragmentMap: d,
                    context: E(E({}, o), { cache: _, client: h }),
                    variables: a,
                    fragmentMatcher: s,
                    defaultOperationType: y,
                    exportedVariables: {},
                    selectionsToResolve: f,
                    onlyRunForcedResolvers: u
                  }),
                  (m = !1),
                  [
                    2,
                    this.resolveSelectionSet(l.selectionSet, m, i, p).then(
                      function (S) {
                        return {
                          result: S,
                          exportedVariables: p.exportedVariables
                        };
                      }
                    )
                  ]
                );
              })
            );
          });
        }),
        (e.prototype.resolveSelectionSet = function (t, r, n, i) {
          return Ar(this, void 0, void 0, function () {
            var o,
              a,
              s,
              u,
              l,
              c = this;
            return Ir(this, function (d) {
              return (
                (o = i.fragmentMap),
                (a = i.context),
                (s = i.variables),
                (u = [n]),
                (l = function (f) {
                  return Ar(c, void 0, void 0, function () {
                    var v, y;
                    return Ir(this, function (g) {
                      return !r && !i.selectionsToResolve.has(f)
                        ? [2]
                        : Ra(f, s)
                        ? en(f)
                          ? [
                              2,
                              this.resolveField(f, r, n, i).then(function (_) {
                                var h;
                                typeof _ < 'u' &&
                                  u.push(((h = {}), (h[Er(f)] = _), h));
                              })
                            ]
                          : (t4(f)
                              ? (v = f)
                              : ((v = o[f.name.value]), R(v, 19, f.name.value)),
                            v &&
                            v.typeCondition &&
                            ((y = v.typeCondition.name.value),
                            i.fragmentMatcher(n, y, a))
                              ? [
                                  2,
                                  this.resolveSelectionSet(
                                    v.selectionSet,
                                    r,
                                    n,
                                    i
                                  ).then(function (_) {
                                    u.push(_);
                                  })
                                ]
                              : [2])
                        : [2];
                    });
                  });
                }),
                [
                  2,
                  Promise.all(t.selections.map(l)).then(function () {
                    return _l(u);
                  })
                ]
              );
            });
          });
        }),
        (e.prototype.resolveField = function (t, r, n, i) {
          return Ar(this, void 0, void 0, function () {
            var o,
              a,
              s,
              u,
              l,
              c,
              d,
              f,
              v,
              y = this;
            return Ir(this, function (g) {
              return n
                ? ((o = i.variables),
                  (a = t.name.value),
                  (s = Er(t)),
                  (u = a !== s),
                  (l = n[s] || n[a]),
                  (c = Promise.resolve(l)),
                  (!i.onlyRunForcedResolvers || this.shouldForceResolvers(t)) &&
                    ((d = n.__typename || i.defaultOperationType),
                    (f = this.resolvers && this.resolvers[d]),
                    f &&
                      ((v = f[u ? a : s]),
                      v &&
                        (c = Promise.resolve(
                          jh.withValue(this.cache, v, [
                            n,
                            vl(t, o),
                            i.context,
                            { field: t, fragmentMap: i.fragmentMap }
                          ])
                        )))),
                  [
                    2,
                    c.then(function (_) {
                      var h, p;
                      if (
                        (_ === void 0 && (_ = l),
                        t.directives &&
                          t.directives.forEach(function (w) {
                            w.name.value === 'export' &&
                              w.arguments &&
                              w.arguments.forEach(function (S) {
                                S.name.value === 'as' &&
                                  S.value.kind === 'StringValue' &&
                                  (i.exportedVariables[S.value.value] = _);
                              });
                          }),
                        !t.selectionSet || _ == null)
                      )
                        return _;
                      var m =
                        (p =
                          (h = t.directives) === null || h === void 0
                            ? void 0
                            : h.some(function (w) {
                                return w.name.value === 'client';
                              })) !== null && p !== void 0
                          ? p
                          : !1;
                      if (Array.isArray(_))
                        return y.resolveSubSelectedArray(t, r || m, _, i);
                      if (t.selectionSet)
                        return y.resolveSelectionSet(
                          t.selectionSet,
                          r || m,
                          _,
                          i
                        );
                    })
                  ])
                : [2, null];
            });
          });
        }),
        (e.prototype.resolveSubSelectedArray = function (t, r, n, i) {
          var o = this;
          return Promise.all(
            n.map(function (a) {
              if (a === null) return null;
              if (Array.isArray(a))
                return o.resolveSubSelectedArray(t, r, a, i);
              if (t.selectionSet)
                return o.resolveSelectionSet(t.selectionSet, r, a, i);
            })
          );
        }),
        (e.prototype.collectSelectionsToResolve = function (t, r) {
          var n = function (a) {
              return !Array.isArray(a);
            },
            i = this.selectionsToResolveCache;
          function o(a) {
            if (!i.has(a)) {
              var s = new Set();
              i.set(a, s),
                Ft(a, {
                  Directive: function (u, l, c, d, f) {
                    u.name.value === 'client' &&
                      f.forEach(function (v) {
                        n(v) && Iv(v) && s.add(v);
                      });
                  },
                  FragmentSpread: function (u, l, c, d, f) {
                    var v = r[u.name.value];
                    R(v, 20, u.name.value);
                    var y = o(v);
                    y.size > 0 &&
                      (f.forEach(function (g) {
                        n(g) && Iv(g) && s.add(g);
                      }),
                      s.add(u),
                      y.forEach(function (g) {
                        s.add(g);
                      }));
                  }
                });
            }
            return i.get(a);
          }
          return o(t);
        }),
        e
      );
    })(),
    Sm = !1,
    e1 = (function () {
      function e(t) {
        var r = this,
          n;
        if (
          ((this.resetStoreCallbacks = []),
          (this.clearStoreCallbacks = []),
          !t.cache)
        )
          throw Ue(16);
        var i = t.uri,
          o = t.credentials,
          a = t.headers,
          s = t.cache,
          u = t.documentTransform,
          l = t.ssrMode,
          c = l === void 0 ? !1 : l,
          d = t.ssrForceFetchDelay,
          f = d === void 0 ? 0 : d,
          v = t.connectToDevTools,
          y = t.queryDeduplication,
          g = y === void 0 ? !0 : y,
          _ = t.defaultOptions,
          h = t.defaultContext,
          p = t.assumeImmutableResults,
          m = p === void 0 ? s.assumeImmutableResults : p,
          w = t.resolvers,
          S = t.typeDefs,
          x = t.fragmentMatcher,
          O = t.name,
          C = t.version,
          M = t.devtools,
          I = t.dataMasking,
          ne = t.link;
        ne ||
          (ne = i
            ? new d2({ uri: i, credentials: o, headers: a })
            : Aa.empty()),
          (this.link = ne),
          (this.cache = s),
          (this.disableNetworkFetches = c || f > 0),
          (this.queryDeduplication = g),
          (this.defaultOptions = _ || Object.create(null)),
          (this.typeDefs = S),
          (this.devtoolsConfig = E(E({}, M), {
            enabled:
              (n = M == null ? void 0 : M.enabled) !== null && n !== void 0
                ? n
                : v
          })),
          this.devtoolsConfig.enabled === void 0 &&
            (this.devtoolsConfig.enabled = globalThis.__DEV__ !== !1),
          f &&
            setTimeout(function () {
              return (r.disableNetworkFetches = !1);
            }, f),
          (this.watchQuery = this.watchQuery.bind(this)),
          (this.query = this.query.bind(this)),
          (this.mutate = this.mutate.bind(this)),
          (this.watchFragment = this.watchFragment.bind(this)),
          (this.resetStore = this.resetStore.bind(this)),
          (this.reFetchObservableQueries =
            this.reFetchObservableQueries.bind(this)),
          (this.version = _h),
          (this.localState = new z2({
            cache: s,
            client: this,
            resolvers: w,
            fragmentMatcher: x
          })),
          (this.queryManager = new $2({
            cache: this.cache,
            link: this.link,
            defaultOptions: this.defaultOptions,
            defaultContext: h,
            documentTransform: u,
            queryDeduplication: g,
            ssrMode: c,
            dataMasking: !!I,
            clientAwareness: { name: O, version: C },
            localState: this.localState,
            assumeImmutableResults: m,
            onBroadcast: this.devtoolsConfig.enabled
              ? function () {
                  r.devToolsHookCb &&
                    r.devToolsHookCb({
                      action: {},
                      state: {
                        queries: r.queryManager.getQueryStore(),
                        mutations: r.queryManager.mutationStore || {}
                      },
                      dataWithOptimisticResults: r.cache.extract(!0)
                    });
                }
              : void 0
          })),
          this.devtoolsConfig.enabled && this.connectToDevTools();
      }
      return (
        (e.prototype.connectToDevTools = function () {
          if (!(typeof window > 'u')) {
            var t = window,
              r = Symbol.for('apollo.devtools');
            (t[r] = t[r] || []).push(this),
              (t.__APOLLO_CLIENT__ = this),
              !Sm &&
                globalThis.__DEV__ !== !1 &&
                ((Sm = !0),
                window.document &&
                  window.top === window.self &&
                  /^(https?|file):$/.test(window.location.protocol) &&
                  setTimeout(function () {
                    if (!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
                      var n = window.navigator,
                        i = n && n.userAgent,
                        o = void 0;
                      typeof i == 'string' &&
                        (i.indexOf('Chrome/') > -1
                          ? (o =
                              'https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm')
                          : i.indexOf('Firefox/') > -1 &&
                            (o =
                              'https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/')),
                        o &&
                          globalThis.__DEV__ !== !1 &&
                          R.log(
                            'Download the Apollo DevTools for a better development experience: %s',
                            o
                          );
                    }
                  }, 1e4));
          }
        }),
        Object.defineProperty(e.prototype, 'documentTransform', {
          get: function () {
            return this.queryManager.documentTransform;
          },
          enumerable: !1,
          configurable: !0
        }),
        (e.prototype.stop = function () {
          this.queryManager.stop();
        }),
        (e.prototype.watchQuery = function (t) {
          return (
            this.defaultOptions.watchQuery &&
              (t = Ls(this.defaultOptions.watchQuery, t)),
            this.disableNetworkFetches &&
              (t.fetchPolicy === 'network-only' ||
                t.fetchPolicy === 'cache-and-network') &&
              (t = E(E({}, t), { fetchPolicy: 'cache-first' })),
            this.queryManager.watchQuery(t)
          );
        }),
        (e.prototype.query = function (t) {
          return (
            this.defaultOptions.query && (t = Ls(this.defaultOptions.query, t)),
            R(t.fetchPolicy !== 'cache-and-network', 17),
            this.disableNetworkFetches &&
              t.fetchPolicy === 'network-only' &&
              (t = E(E({}, t), { fetchPolicy: 'cache-first' })),
            this.queryManager.query(t)
          );
        }),
        (e.prototype.mutate = function (t) {
          return (
            this.defaultOptions.mutate &&
              (t = Ls(this.defaultOptions.mutate, t)),
            this.queryManager.mutate(t)
          );
        }),
        (e.prototype.subscribe = function (t) {
          var r = this,
            n = this.queryManager.generateQueryId();
          return this.queryManager
            .startGraphQLSubscription(t)
            .map(function (i) {
              return E(E({}, i), {
                data: r.queryManager.maskOperation({
                  document: t.query,
                  data: i.data,
                  fetchPolicy: t.fetchPolicy,
                  id: n
                })
              });
            });
        }),
        (e.prototype.readQuery = function (t, r) {
          return r === void 0 && (r = !1), this.cache.readQuery(t, r);
        }),
        (e.prototype.watchFragment = function (t) {
          var r;
          return this.cache.watchFragment(
            E(
              E({}, t),
              ((r = {}),
              (r[Symbol.for('apollo.dataMasking')] =
                this.queryManager.dataMasking),
              r)
            )
          );
        }),
        (e.prototype.readFragment = function (t, r) {
          return r === void 0 && (r = !1), this.cache.readFragment(t, r);
        }),
        (e.prototype.writeQuery = function (t) {
          var r = this.cache.writeQuery(t);
          return t.broadcast !== !1 && this.queryManager.broadcastQueries(), r;
        }),
        (e.prototype.writeFragment = function (t) {
          var r = this.cache.writeFragment(t);
          return t.broadcast !== !1 && this.queryManager.broadcastQueries(), r;
        }),
        (e.prototype.__actionHookForDevTools = function (t) {
          this.devToolsHookCb = t;
        }),
        (e.prototype.__requestRaw = function (t) {
          return $f(this.link, t);
        }),
        (e.prototype.resetStore = function () {
          var t = this;
          return Promise.resolve()
            .then(function () {
              return t.queryManager.clearStore({ discardWatches: !1 });
            })
            .then(function () {
              return Promise.all(
                t.resetStoreCallbacks.map(function (r) {
                  return r();
                })
              );
            })
            .then(function () {
              return t.reFetchObservableQueries();
            });
        }),
        (e.prototype.clearStore = function () {
          var t = this;
          return Promise.resolve()
            .then(function () {
              return t.queryManager.clearStore({ discardWatches: !0 });
            })
            .then(function () {
              return Promise.all(
                t.clearStoreCallbacks.map(function (r) {
                  return r();
                })
              );
            });
        }),
        (e.prototype.onResetStore = function (t) {
          var r = this;
          return (
            this.resetStoreCallbacks.push(t),
            function () {
              r.resetStoreCallbacks = r.resetStoreCallbacks.filter(function (
                n
              ) {
                return n !== t;
              });
            }
          );
        }),
        (e.prototype.onClearStore = function (t) {
          var r = this;
          return (
            this.clearStoreCallbacks.push(t),
            function () {
              r.clearStoreCallbacks = r.clearStoreCallbacks.filter(function (
                n
              ) {
                return n !== t;
              });
            }
          );
        }),
        (e.prototype.reFetchObservableQueries = function (t) {
          return this.queryManager.reFetchObservableQueries(t);
        }),
        (e.prototype.refetchQueries = function (t) {
          var r = this.queryManager.refetchQueries(t),
            n = [],
            i = [];
          r.forEach(function (a, s) {
            n.push(s), i.push(a);
          });
          var o = Promise.all(i);
          return (
            (o.queries = n),
            (o.results = i),
            o.catch(function (a) {
              globalThis.__DEV__ !== !1 && R.debug(18, a);
            }),
            o
          );
        }),
        (e.prototype.getObservableQueries = function (t) {
          return (
            t === void 0 && (t = 'active'),
            this.queryManager.getObservableQueries(t)
          );
        }),
        (e.prototype.extract = function (t) {
          return this.cache.extract(t);
        }),
        (e.prototype.restore = function (t) {
          return this.cache.restore(t);
        }),
        (e.prototype.addResolvers = function (t) {
          this.localState.addResolvers(t);
        }),
        (e.prototype.setResolvers = function (t) {
          this.localState.setResolvers(t);
        }),
        (e.prototype.getResolvers = function () {
          return this.localState.getResolvers();
        }),
        (e.prototype.setLocalStateFragmentMatcher = function (t) {
          this.localState.setFragmentMatcher(t);
        }),
        (e.prototype.setLink = function (t) {
          this.link = this.queryManager.link = t;
        }),
        Object.defineProperty(e.prototype, 'defaultContext', {
          get: function () {
            return this.queryManager.defaultContext;
          },
          enumerable: !1,
          configurable: !0
        }),
        e
      );
    })();
  globalThis.__DEV__ !== !1 && (e1.prototype.getMemoryInternals = Ik);
  var Vs = new Map(),
    Gf = new Map(),
    t1 = !0,
    Eu = !1;
  function r1(e) {
    return e.replace(/[\s,]+/g, ' ').trim();
  }
  function B2(e) {
    return r1(e.source.body.substring(e.start, e.end));
  }
  function U2(e) {
    var t = new Set(),
      r = [];
    return (
      e.definitions.forEach(function (n) {
        if (n.kind === 'FragmentDefinition') {
          var i = n.name.value,
            o = B2(n.loc),
            a = Gf.get(i);
          a && !a.has(o)
            ? t1 &&
              console.warn(
                'Warning: fragment with name ' +
                  i +
                  ` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`
              )
            : a || Gf.set(i, (a = new Set())),
            a.add(o),
            t.has(o) || (t.add(o), r.push(n));
        } else r.push(n);
      }),
      E(E({}, e), { definitions: r })
    );
  }
  function Q2(e) {
    var t = new Set(e.definitions);
    t.forEach(function (n) {
      n.loc && delete n.loc,
        Object.keys(n).forEach(function (i) {
          var o = n[i];
          o && typeof o == 'object' && t.add(o);
        });
    });
    var r = e.loc;
    return r && (delete r.startToken, delete r.endToken), e;
  }
  function q2(e) {
    var t = r1(e);
    if (!Vs.has(t)) {
      var r = nk(e, {
        experimentalFragmentVariables: Eu,
        allowLegacyFragmentVariables: Eu
      });
      if (!r || r.kind !== 'Document')
        throw new Error('Not a valid GraphQL document.');
      Vs.set(t, Q2(U2(r)));
    }
    return Vs.get(t);
  }
  function An(e) {
    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    typeof e == 'string' && (e = [e]);
    var n = e[0];
    return (
      t.forEach(function (i, o) {
        i && i.kind === 'Document' ? (n += i.loc.source.body) : (n += i),
          (n += e[o + 1]);
      }),
      q2(n)
    );
  }
  function W2() {
    Vs.clear(), Gf.clear();
  }
  function H2() {
    t1 = !1;
  }
  function G2() {
    Eu = !0;
  }
  function K2() {
    Eu = !1;
  }
  var wo = {
    gql: An,
    resetCaches: W2,
    disableFragmentWarnings: H2,
    enableExperimentalFragmentVariables: G2,
    disableExperimentalFragmentVariables: K2
  };
  (function (e) {
    (e.gql = wo.gql),
      (e.resetCaches = wo.resetCaches),
      (e.disableFragmentWarnings = wo.disableFragmentWarnings),
      (e.enableExperimentalFragmentVariables =
        wo.enableExperimentalFragmentVariables),
      (e.disableExperimentalFragmentVariables =
        wo.disableExperimentalFragmentVariables);
  })(An || (An = {}));
  An.default = An;
  var ge = { exports: {} };
  (function (e) {
    (e.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = void 0),
      (e.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
        void 0),
      (e.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
        void 0),
      Object.assign(e.exports, b.exports);
  })(ge);
  const Y2 = ge.exports,
    n1 = Jm({ __proto__: null, default: Y2 }, [ge.exports]);
  var xm = Oh ? Symbol.for('__APOLLO_CONTEXT__') : '__APOLLO_CONTEXT__';
  function Bh() {
    R('createContext' in n1, 54);
    var e = ge.exports.createContext[xm];
    return (
      e ||
        (Object.defineProperty(ge.exports.createContext, xm, {
          value: (e = ge.exports.createContext({})),
          enumerable: !1,
          writable: !1,
          configurable: !0
        }),
        (e.displayName = 'ApolloContext')),
      e
    );
  }
  var J2 = function (e) {
    var t = e.client,
      r = e.children,
      n = Bh(),
      i = ge.exports.useContext(n),
      o = ge.exports.useMemo(
        function () {
          return E(E({}, i), { client: t || i.client });
        },
        [i, t]
      );
    return (
      R(o.client, 55), ge.exports.createElement(n.Provider, { value: o }, r)
    );
  };
  function i1(e) {
    var t = ge.exports.useContext(Bh()),
      r = e || t.client;
    return R(!!r, 58), r;
  }
  var Om = !1,
    X2 = 'useSyncExternalStore',
    Z2 = n1[X2],
    eC =
      Z2 ||
      function (e, t, r) {
        var n = t();
        globalThis.__DEV__ !== !1 &&
          !Om &&
          n !== t() &&
          ((Om = !0), globalThis.__DEV__ !== !1 && R.error(68));
        var i = ge.exports.useState({ inst: { value: n, getSnapshot: t } }),
          o = i[0].inst,
          a = i[1];
        return (
          Sk
            ? ge.exports.useLayoutEffect(
                function () {
                  Object.assign(o, { value: n, getSnapshot: t }),
                    _c(o) && a({ inst: o });
                },
                [e, n, t]
              )
            : Object.assign(o, { value: n, getSnapshot: t }),
          ge.exports.useEffect(
            function () {
              return (
                _c(o) && a({ inst: o }),
                e(function () {
                  _c(o) && a({ inst: o });
                })
              );
            },
            [e]
          ),
          n
        );
      };
  function _c(e) {
    var t = e.value,
      r = e.getSnapshot;
    try {
      return t !== r();
    } catch {
      return !0;
    }
  }
  var pr;
  (function (e) {
    (e[(e.Query = 0)] = 'Query'),
      (e[(e.Mutation = 1)] = 'Mutation'),
      (e[(e.Subscription = 2)] = 'Subscription');
  })(pr || (pr = {}));
  var wn;
  function km(e) {
    var t;
    switch (e) {
      case pr.Query:
        t = 'Query';
        break;
      case pr.Mutation:
        t = 'Mutation';
        break;
      case pr.Subscription:
        t = 'Subscription';
        break;
    }
    return t;
  }
  function o1(e) {
    wn || (wn = new kh(er.parser || 1e3));
    var t = wn.get(e);
    if (t) return t;
    var r, n, i;
    R(!!e && !!e.kind, 70, e);
    for (
      var o = [], a = [], s = [], u = [], l = 0, c = e.definitions;
      l < c.length;
      l++
    ) {
      var d = c[l];
      if (d.kind === 'FragmentDefinition') {
        o.push(d);
        continue;
      }
      if (d.kind === 'OperationDefinition')
        switch (d.operation) {
          case 'query':
            a.push(d);
            break;
          case 'mutation':
            s.push(d);
            break;
          case 'subscription':
            u.push(d);
            break;
        }
    }
    R(!o.length || a.length || s.length || u.length, 71),
      R(
        a.length + s.length + u.length <= 1,
        72,
        e,
        a.length,
        u.length,
        s.length
      ),
      (n = a.length ? pr.Query : pr.Mutation),
      !a.length && !s.length && (n = pr.Subscription);
    var f = a.length ? a : s.length ? s : u;
    R(f.length === 1, 73, e, f.length);
    var v = f[0];
    (r = v.variableDefinitions || []),
      v.name && v.name.kind === 'Name' ? (i = v.name.value) : (i = 'data');
    var y = { name: i, type: n, variables: r };
    return wn.set(e, y), y;
  }
  o1.resetCache = function () {
    wn = void 0;
  };
  globalThis.__DEV__ !== !1 &&
    Ch('parser', function () {
      return wn ? wn.size : 0;
    });
  function tC(e, t) {
    var r = o1(e),
      n = km(t),
      i = km(r.type);
    R(r.type === t, 74, n, n, i);
  }
  var rC = Symbol.for('apollo.hook.wrappers');
  function nC(e, t, r) {
    var n = r.queryManager,
      i = n && n[rC],
      o = i && i[e];
    return o ? o(t) : t;
  }
  var iC = Object.prototype.hasOwnProperty;
  function Cm() {}
  var $s = Symbol();
  function a1(e, t) {
    return (
      t === void 0 && (t = Object.create(null)),
      nC('useQuery', oC, i1(t && t.client))(e, t)
    );
  }
  function oC(e, t) {
    var r = sC(e, t),
      n = r.result,
      i = r.obsQueryFields;
    return ge.exports.useMemo(
      function () {
        return E(E({}, n), i);
      },
      [n, i]
    );
  }
  function aC(e, t, r, n, i) {
    function o(d) {
      var f;
      tC(t, pr.Query);
      var v = {
        client: e,
        query: t,
        observable:
          (n && n.getSSRObservable(i())) ||
          Bo.inactiveOnCreation.withValue(!n, function () {
            return e.watchQuery(s1(void 0, e, r, i()));
          }),
        resultData: {
          previousData:
            (f = d == null ? void 0 : d.resultData.current) === null ||
            f === void 0
              ? void 0
              : f.data
        }
      };
      return v;
    }
    var a = ge.exports.useState(o),
      s = a[0],
      u = a[1];
    function l(d) {
      var f, v;
      Object.assign(s.observable, ((f = {}), (f[$s] = d), f));
      var y = s.resultData;
      u(
        E(E({}, s), {
          query: d.query,
          resultData: Object.assign(y, {
            previousData:
              ((v = y.current) === null || v === void 0 ? void 0 : v.data) ||
              y.previousData,
            current: void 0
          })
        })
      );
    }
    if (e !== s.client || t !== s.query) {
      var c = o(s);
      return u(c), [c, l];
    }
    return [s, l];
  }
  function sC(e, t) {
    var r = i1(t.client),
      n = ge.exports.useContext(Bh()).renderPromises,
      i = !!n,
      o = r.disableNetworkFetches,
      a = t.ssr !== !1 && !t.skip,
      s = t.partialRefetch,
      u = fC(r, e, t, i),
      l = aC(r, e, t, n, u),
      c = l[0],
      d = c.observable,
      f = c.resultData,
      v = l[1],
      y = u(d);
    cC(f, d, r, t, y);
    var g = ge.exports.useMemo(
      function () {
        return vC(d);
      },
      [d]
    );
    lC(d, n, a);
    var _ = uC(f, d, r, t, y, o, s, i, {
      onCompleted: t.onCompleted || Cm,
      onError: t.onError || Cm
    });
    return {
      result: _,
      obsQueryFields: g,
      observable: d,
      resultData: f,
      client: r,
      onQueryExecuted: v
    };
  }
  function uC(e, t, r, n, i, o, a, s, u) {
    var l = ge.exports.useRef(u);
    ge.exports.useEffect(function () {
      l.current = u;
    });
    var c =
        (s || o) && n.ssr === !1 && !n.skip
          ? l1
          : n.skip || i.fetchPolicy === 'standby'
          ? c1
          : void 0,
      d = e.previousData,
      f = ge.exports.useMemo(
        function () {
          return c && u1(c, d, t, r);
        },
        [r, t, c, d]
      );
    return eC(
      ge.exports.useCallback(
        function (v) {
          if (s) return function () {};
          var y = function () {
              var h = e.current,
                p = t.getCurrentResult();
              (h &&
                h.loading === p.loading &&
                h.networkStatus === p.networkStatus &&
                J(h.data, p.data)) ||
                Kf(p, e, t, r, a, v, l.current);
            },
            g = function (h) {
              if (
                (_.current.unsubscribe(),
                (_.current = t.resubscribeAfterError(y, g)),
                !iC.call(h, 'graphQLErrors'))
              )
                throw h;
              var p = e.current;
              (!p || (p && p.loading) || !J(h, p.error)) &&
                Kf(
                  {
                    data: p && p.data,
                    error: h,
                    loading: !1,
                    networkStatus: U.error
                  },
                  e,
                  t,
                  r,
                  a,
                  v,
                  l.current
                );
            },
            _ = { current: t.subscribe(y, g) };
          return function () {
            setTimeout(function () {
              return _.current.unsubscribe();
            });
          };
        },
        [o, s, t, e, a, r]
      ),
      function () {
        return f || Tm(e, t, l.current, a, r);
      },
      function () {
        return f || Tm(e, t, l.current, a, r);
      }
    );
  }
  function lC(e, t, r) {
    t &&
      r &&
      (t.registerSSRObservable(e),
      e.getCurrentResult().loading && t.addObservableQueryPromise(e));
  }
  function cC(e, t, r, n, i) {
    var o;
    t[$s] &&
      !J(t[$s], i) &&
      (t.reobserve(s1(t, r, n, i)),
      (e.previousData =
        ((o = e.current) === null || o === void 0 ? void 0 : o.data) ||
        e.previousData),
      (e.current = void 0)),
      (t[$s] = i);
  }
  function fC(e, t, r, n) {
    r === void 0 && (r = {});
    var i = r.skip;
    r.ssr, r.onCompleted, r.onError;
    var o = r.defaultOptions,
      a = Rt(r, ['skip', 'ssr', 'onCompleted', 'onError', 'defaultOptions']);
    return function (s) {
      var u = Object.assign(a, { query: t });
      return (
        n &&
          (u.fetchPolicy === 'network-only' ||
            u.fetchPolicy === 'cache-and-network') &&
          (u.fetchPolicy = 'cache-first'),
        u.variables || (u.variables = {}),
        i
          ? ((u.initialFetchPolicy =
              u.initialFetchPolicy || u.fetchPolicy || Nm(o, e.defaultOptions)),
            (u.fetchPolicy = 'standby'))
          : u.fetchPolicy ||
            (u.fetchPolicy =
              (s == null ? void 0 : s.options.initialFetchPolicy) ||
              Nm(o, e.defaultOptions)),
        u
      );
    };
  }
  function s1(e, t, r, n) {
    var i = [],
      o = t.defaultOptions.watchQuery;
    return (
      o && i.push(o),
      r.defaultOptions && i.push(r.defaultOptions),
      i.push(Pn(e && e.options, n)),
      i.reduce(Ls)
    );
  }
  function Kf(e, t, r, n, i, o, a) {
    var s = t.current;
    s && s.data && (t.previousData = s.data),
      !e.error &&
        bt(e.errors) &&
        (e.error = new sr({ graphQLErrors: e.errors })),
      (t.current = u1(pC(e, r, i), t.previousData, r, n)),
      o(),
      dC(e, s == null ? void 0 : s.networkStatus, a);
  }
  function dC(e, t, r) {
    if (!e.loading) {
      var n = hC(e);
      Promise.resolve()
        .then(function () {
          n
            ? r.onError(n)
            : e.data &&
              t !== e.networkStatus &&
              e.networkStatus === U.ready &&
              r.onCompleted(e.data);
        })
        .catch(function (i) {
          globalThis.__DEV__ !== !1 && R.warn(i);
        });
    }
  }
  function Tm(e, t, r, n, i) {
    return (
      e.current || Kf(t.getCurrentResult(), e, t, i, n, function () {}, r),
      e.current
    );
  }
  function Nm(e, t) {
    var r;
    return (
      (e == null ? void 0 : e.fetchPolicy) ||
      ((r = t == null ? void 0 : t.watchQuery) === null || r === void 0
        ? void 0
        : r.fetchPolicy) ||
      'cache-first'
    );
  }
  function hC(e) {
    return bt(e.errors) ? new sr({ graphQLErrors: e.errors }) : e.error;
  }
  function u1(e, t, r, n) {
    var i = e.data;
    e.partial;
    var o = Rt(e, ['data', 'partial']),
      a = E(E({ data: i }, o), {
        client: n,
        observable: r,
        variables: r.variables,
        called: e !== l1 && e !== c1,
        previousData: t
      });
    return a;
  }
  function pC(e, t, r) {
    return e.partial &&
      r &&
      !e.loading &&
      (!e.data || Object.keys(e.data).length === 0) &&
      t.options.fetchPolicy !== 'cache-only'
      ? (t.refetch(), E(E({}, e), { loading: !0, networkStatus: U.refetch }))
      : e;
  }
  var l1 = $i({
      loading: !0,
      data: void 0,
      error: void 0,
      networkStatus: U.loading
    }),
    c1 = $i({
      loading: !1,
      data: void 0,
      error: void 0,
      networkStatus: U.ready
    });
  function vC(e) {
    return {
      refetch: e.refetch.bind(e),
      reobserve: e.reobserve.bind(e),
      fetchMore: e.fetchMore.bind(e),
      updateQuery: e.updateQuery.bind(e),
      startPolling: e.startPolling.bind(e),
      stopPolling: e.stopPolling.bind(e),
      subscribeToMore: e.subscribeToMore.bind(e)
    };
  }
  let mC = { data: '' },
    yC = e =>
      typeof window == 'object'
        ? (
            (e ? e.querySelector('#_goober') : window._goober) ||
            Object.assign(
              (e || document.head).appendChild(document.createElement('style')),
              { innerHTML: ' ', id: '_goober' }
            )
          ).firstChild
        : e || mC,
    gC = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
    _C = /\/\*[^]*?\*\/|  +/g,
    Dm = /\n+/g,
    jr = (e, t) => {
      let r = '',
        n = '',
        i = '';
      for (let o in e) {
        let a = e[o];
        o[0] == '@'
          ? o[1] == 'i'
            ? (r = o + ' ' + a + ';')
            : (n +=
                o[1] == 'f'
                  ? jr(a, o)
                  : o + '{' + jr(a, o[1] == 'k' ? '' : t) + '}')
          : typeof a == 'object'
          ? (n += jr(
              a,
              t
                ? t.replace(/([^,])+/g, s =>
                    o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, u =>
                      /&/.test(u) ? u.replace(/&/g, s) : s ? s + ' ' + u : u
                    )
                  )
                : o
            ))
          : a != null &&
            ((o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, '-$&').toLowerCase()),
            (i += jr.p ? jr.p(o, a) : o + ':' + a + ';'));
      }
      return r + (t && i ? t + '{' + i + '}' : i) + n;
    },
    ir = {},
    f1 = e => {
      if (typeof e == 'object') {
        let t = '';
        for (let r in e) t += r + f1(e[r]);
        return t;
      }
      return e;
    },
    wC = (e, t, r, n, i) => {
      let o = f1(e),
        a =
          ir[o] ||
          (ir[o] = (u => {
            let l = 0,
              c = 11;
            for (; l < u.length; ) c = (101 * c + u.charCodeAt(l++)) >>> 0;
            return 'go' + c;
          })(o));
      if (!ir[a]) {
        let u =
          o !== e
            ? e
            : (l => {
                let c,
                  d,
                  f = [{}];
                for (; (c = gC.exec(l.replace(_C, ''))); )
                  c[4]
                    ? f.shift()
                    : c[3]
                    ? ((d = c[3].replace(Dm, ' ').trim()),
                      f.unshift((f[0][d] = f[0][d] || {})))
                    : (f[0][c[1]] = c[2].replace(Dm, ' ').trim());
                return f[0];
              })(e);
        ir[a] = jr(i ? { ['@keyframes ' + a]: u } : u, r ? '' : '.' + a);
      }
      let s = r && ir.g ? ir.g : null;
      return (
        r && (ir.g = ir[a]),
        ((u, l, c, d) => {
          d
            ? (l.data = l.data.replace(d, u))
            : l.data.indexOf(u) === -1 &&
              (l.data = c ? u + l.data : l.data + u);
        })(ir[a], t, n, s),
        a
      );
    },
    bC = (e, t, r) =>
      e.reduce((n, i, o) => {
        let a = t[o];
        if (a && a.call) {
          let s = a(r),
            u = (s && s.props && s.props.className) || (/^go/.test(s) && s);
          a = u
            ? '.' + u
            : s && typeof s == 'object'
            ? s.props
              ? ''
              : jr(s, '')
            : s === !1
            ? ''
            : s;
        }
        return n + i + (a == null ? '' : a);
      }, '');
  function wl(e) {
    let t = this || {},
      r = e.call ? e(t.p) : e;
    return wC(
      r.unshift
        ? r.raw
          ? bC(r, [].slice.call(arguments, 1), t.p)
          : r.reduce((n, i) => Object.assign(n, i && i.call ? i(t.p) : i), {})
        : r,
      yC(t.target),
      t.g,
      t.o,
      t.k
    );
  }
  let d1, Yf, Jf;
  wl.bind({ g: 1 });
  let Sr = wl.bind({ k: 1 });
  function EC(e, t, r, n) {
    (jr.p = t), (d1 = e), (Yf = r), (Jf = n);
  }
  function un(e, t) {
    let r = this || {};
    return function () {
      let n = arguments;
      function i(o, a) {
        let s = Object.assign({}, o),
          u = s.className || i.className;
        (r.p = Object.assign({ theme: Yf && Yf() }, s)),
          (r.o = / *go\d+/.test(u)),
          (s.className = wl.apply(r, n) + (u ? ' ' + u : '')),
          t && (s.ref = a);
        let l = e;
        return (
          e[0] && ((l = s.as || e), delete s.as), Jf && l[0] && Jf(s), d1(l, s)
        );
      }
      return t ? t(i) : i;
    };
  }
  var SC = e => typeof e == 'function',
    Su = (e, t) => (SC(e) ? e(t) : e),
    xC = (() => {
      let e = 0;
      return () => (++e).toString();
    })(),
    h1 = (() => {
      let e;
      return () => {
        if (e === void 0 && typeof window < 'u') {
          let t = matchMedia('(prefers-reduced-motion: reduce)');
          e = !t || t.matches;
        }
        return e;
      };
    })(),
    OC = 20,
    p1 = (e, t) => {
      switch (t.type) {
        case 0:
          return { ...e, toasts: [t.toast, ...e.toasts].slice(0, OC) };
        case 1:
          return {
            ...e,
            toasts: e.toasts.map(o =>
              o.id === t.toast.id ? { ...o, ...t.toast } : o
            )
          };
        case 2:
          let { toast: r } = t;
          return p1(e, {
            type: e.toasts.find(o => o.id === r.id) ? 1 : 0,
            toast: r
          });
        case 3:
          let { toastId: n } = t;
          return {
            ...e,
            toasts: e.toasts.map(o =>
              o.id === n || n === void 0
                ? { ...o, dismissed: !0, visible: !1 }
                : o
            )
          };
        case 4:
          return t.toastId === void 0
            ? { ...e, toasts: [] }
            : { ...e, toasts: e.toasts.filter(o => o.id !== t.toastId) };
        case 5:
          return { ...e, pausedAt: t.time };
        case 6:
          let i = t.time - (e.pausedAt || 0);
          return {
            ...e,
            pausedAt: void 0,
            toasts: e.toasts.map(o => ({
              ...o,
              pauseDuration: o.pauseDuration + i
            }))
          };
      }
    },
    zs = [],
    bn = { toasts: [], pausedAt: void 0 },
    Bn = e => {
      (bn = p1(bn, e)),
        zs.forEach(t => {
          t(bn);
        });
    },
    kC = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
    CC = (e = {}) => {
      let [t, r] = b.exports.useState(bn),
        n = b.exports.useRef(bn);
      b.exports.useEffect(
        () => (
          n.current !== bn && r(bn),
          zs.push(r),
          () => {
            let o = zs.indexOf(r);
            o > -1 && zs.splice(o, 1);
          }
        ),
        []
      );
      let i = t.toasts.map(o => {
        var a, s, u;
        return {
          ...e,
          ...e[o.type],
          ...o,
          removeDelay:
            o.removeDelay ||
            ((a = e[o.type]) == null ? void 0 : a.removeDelay) ||
            (e == null ? void 0 : e.removeDelay),
          duration:
            o.duration ||
            ((s = e[o.type]) == null ? void 0 : s.duration) ||
            (e == null ? void 0 : e.duration) ||
            kC[o.type],
          style: {
            ...e.style,
            ...((u = e[o.type]) == null ? void 0 : u.style),
            ...o.style
          }
        };
      });
      return { ...t, toasts: i };
    },
    TC = (e, t = 'blank', r) => ({
      createdAt: Date.now(),
      visible: !0,
      dismissed: !1,
      type: t,
      ariaProps: { role: 'status', 'aria-live': 'polite' },
      message: e,
      pauseDuration: 0,
      ...r,
      id: (r == null ? void 0 : r.id) || xC()
    }),
    Ia = e => (t, r) => {
      let n = TC(t, e, r);
      return Bn({ type: 2, toast: n }), n.id;
    },
    ze = (e, t) => Ia('blank')(e, t);
  ze.error = Ia('error');
  ze.success = Ia('success');
  ze.loading = Ia('loading');
  ze.custom = Ia('custom');
  ze.dismiss = e => {
    Bn({ type: 3, toastId: e });
  };
  ze.remove = e => Bn({ type: 4, toastId: e });
  ze.promise = (e, t, r) => {
    let n = ze.loading(t.loading, {
      ...r,
      ...(r == null ? void 0 : r.loading)
    });
    return (
      typeof e == 'function' && (e = e()),
      e
        .then(i => {
          let o = t.success ? Su(t.success, i) : void 0;
          return (
            o
              ? ze.success(o, {
                  id: n,
                  ...r,
                  ...(r == null ? void 0 : r.success)
                })
              : ze.dismiss(n),
            i
          );
        })
        .catch(i => {
          let o = t.error ? Su(t.error, i) : void 0;
          o
            ? ze.error(o, { id: n, ...r, ...(r == null ? void 0 : r.error) })
            : ze.dismiss(n);
        }),
      e
    );
  };
  var NC = (e, t) => {
      Bn({ type: 1, toast: { id: e, height: t } });
    },
    DC = () => {
      Bn({ type: 5, time: Date.now() });
    },
    Uo = new Map(),
    RC = 1e3,
    PC = (e, t = RC) => {
      if (Uo.has(e)) return;
      let r = setTimeout(() => {
        Uo.delete(e), Bn({ type: 4, toastId: e });
      }, t);
      Uo.set(e, r);
    },
    AC = e => {
      let { toasts: t, pausedAt: r } = CC(e);
      b.exports.useEffect(() => {
        if (r) return;
        let o = Date.now(),
          a = t.map(s => {
            if (s.duration === 1 / 0) return;
            let u = (s.duration || 0) + s.pauseDuration - (o - s.createdAt);
            if (u < 0) {
              s.visible && ze.dismiss(s.id);
              return;
            }
            return setTimeout(() => ze.dismiss(s.id), u);
          });
        return () => {
          a.forEach(s => s && clearTimeout(s));
        };
      }, [t, r]);
      let n = b.exports.useCallback(() => {
          r && Bn({ type: 6, time: Date.now() });
        }, [r]),
        i = b.exports.useCallback(
          (o, a) => {
            let {
                reverseOrder: s = !1,
                gutter: u = 8,
                defaultPosition: l
              } = a || {},
              c = t.filter(
                v => (v.position || l) === (o.position || l) && v.height
              ),
              d = c.findIndex(v => v.id === o.id),
              f = c.filter((v, y) => y < d && v.visible).length;
            return c
              .filter(v => v.visible)
              .slice(...(s ? [f + 1] : [0, f]))
              .reduce((v, y) => v + (y.height || 0) + u, 0);
          },
          [t]
        );
      return (
        b.exports.useEffect(() => {
          t.forEach(o => {
            if (o.dismissed) PC(o.id, o.removeDelay);
            else {
              let a = Uo.get(o.id);
              a && (clearTimeout(a), Uo.delete(o.id));
            }
          });
        }, [t]),
        {
          toasts: t,
          handlers: {
            updateHeight: NC,
            startPause: DC,
            endPause: n,
            calculateOffset: i
          }
        }
      );
    },
    IC = Sr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
    FC = Sr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
    LC = Sr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
    MC = un('div')`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e => e.primary || '#ff4b4b'};
  position: relative;
  transform: rotate(45deg);

  animation: ${IC} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${FC} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e => e.secondary || '#fff'};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${LC} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
    jC = Sr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
    VC = un('div')`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e => e.secondary || '#e0e0e0'};
  border-right-color: ${e => e.primary || '#616161'};
  animation: ${jC} 1s linear infinite;
`,
    $C = Sr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
    zC = Sr`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
    BC = un('div')`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e => e.primary || '#61d345'};
  position: relative;
  transform: rotate(45deg);

  animation: ${$C} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${zC} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e => e.secondary || '#fff'};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
    UC = un('div')`
  position: absolute;
`,
    QC = un('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
    qC = Sr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
    WC = un('div')`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${qC} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
    HC = ({ toast: e }) => {
      let { icon: t, type: r, iconTheme: n } = e;
      return t !== void 0
        ? typeof t == 'string'
          ? b.exports.createElement(WC, null, t)
          : t
        : r === 'blank'
        ? null
        : b.exports.createElement(
            QC,
            null,
            b.exports.createElement(VC, { ...n }),
            r !== 'loading' &&
              b.exports.createElement(
                UC,
                null,
                r === 'error'
                  ? b.exports.createElement(MC, { ...n })
                  : b.exports.createElement(BC, { ...n })
              )
          );
    },
    GC = e => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
    KC = e => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
    YC = '0%{opacity:0;} 100%{opacity:1;}',
    JC = '0%{opacity:1;} 100%{opacity:0;}',
    XC = un('div')`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
    ZC = un('div')`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
    e3 = (e, t) => {
      let r = e.includes('top') ? 1 : -1,
        [n, i] = h1() ? [YC, JC] : [GC(r), KC(r)];
      return {
        animation: t
          ? `${Sr(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
          : `${Sr(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
      };
    },
    t3 = b.exports.memo(({ toast: e, position: t, style: r, children: n }) => {
      let i = e.height
          ? e3(e.position || t || 'top-center', e.visible)
          : { opacity: 0 },
        o = b.exports.createElement(HC, { toast: e }),
        a = b.exports.createElement(ZC, { ...e.ariaProps }, Su(e.message, e));
      return b.exports.createElement(
        XC,
        { className: e.className, style: { ...i, ...r, ...e.style } },
        typeof n == 'function'
          ? n({ icon: o, message: a })
          : b.exports.createElement(b.exports.Fragment, null, o, a)
      );
    });
  EC(b.exports.createElement);
  var r3 = ({
      id: e,
      className: t,
      style: r,
      onHeightUpdate: n,
      children: i
    }) => {
      let o = b.exports.useCallback(
        a => {
          if (a) {
            let s = () => {
              let u = a.getBoundingClientRect().height;
              n(e, u);
            };
            s(),
              new MutationObserver(s).observe(a, {
                subtree: !0,
                childList: !0,
                characterData: !0
              });
          }
        },
        [e, n]
      );
      return b.exports.createElement(
        'div',
        { ref: o, className: t, style: r },
        i
      );
    },
    n3 = (e, t) => {
      let r = e.includes('top'),
        n = r ? { top: 0 } : { bottom: 0 },
        i = e.includes('center')
          ? { justifyContent: 'center' }
          : e.includes('right')
          ? { justifyContent: 'flex-end' }
          : {};
      return {
        left: 0,
        right: 0,
        display: 'flex',
        position: 'absolute',
        transition: h1() ? void 0 : 'all 230ms cubic-bezier(.21,1.02,.73,1)',
        transform: `translateY(${t * (r ? 1 : -1)}px)`,
        ...n,
        ...i
      };
    },
    i3 = wl`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
    fs = 16,
    o3 = ({
      reverseOrder: e,
      position: t = 'top-center',
      toastOptions: r,
      gutter: n,
      children: i,
      containerStyle: o,
      containerClassName: a
    }) => {
      let { toasts: s, handlers: u } = AC(r);
      return b.exports.createElement(
        'div',
        {
          id: '_rht_toaster',
          style: {
            position: 'fixed',
            zIndex: 9999,
            top: fs,
            left: fs,
            right: fs,
            bottom: fs,
            pointerEvents: 'none',
            ...o
          },
          className: a,
          onMouseEnter: u.startPause,
          onMouseLeave: u.endPause
        },
        s.map(l => {
          let c = l.position || t,
            d = u.calculateOffset(l, {
              reverseOrder: e,
              gutter: n,
              defaultPosition: t
            }),
            f = n3(c, d);
          return b.exports.createElement(
            r3,
            {
              id: l.id,
              key: l.id,
              onHeightUpdate: u.updateHeight,
              className: l.visible ? i3 : '',
              style: f
            },
            l.type === 'custom'
              ? Su(l.message, l)
              : i
              ? i(l)
              : b.exports.createElement(t3, { toast: l, position: c })
          );
        })
      );
    },
    To = ze;
  const a3 = e =>
      b.exports.createElement(
        'svg',
        {
          width: '1em',
          height: '1em',
          viewBox: '0 0 11 12',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          ...e
        },
        b.exports.createElement('path', {
          d: 'M5.05342 3.90121L5.94658 3L2.97329 0L0 3L0.893155 3.90121L2.34161 2.43977V9.82409H3.60497V2.43977L5.05342 3.90121Z',
          fill: 'black'
        }),
        b.exports.createElement('path', {
          d: 'M10.1069 8.09866L8.6584 9.5601V2.17578H7.39505V9.5601L5.94659 8.09866L5.05344 8.99987L8.02672 11.9999L11 8.99987L10.1069 8.09866Z',
          fill: 'black'
        })
      ),
    s3 = (e, t) => {
      const r = [...e];
      switch (t) {
        case 'availability':
          return r.sort(
            (n, i) => (i.availability ? 1 : 0) - (n.availability ? 1 : 0)
          );
        case 'brand':
          return r.sort((n, i) => n.brand.localeCompare(i.brand));
        case 'brand-reverse':
          return r.sort((n, i) => i.brand.localeCompare(n.brand));
        case 'date-newest':
          return r.sort((n, i) => i.model_year - n.model_year);
        case 'date-oldest':
          return r.sort((n, i) => n.model_year - i.model_year);
        case 'price-cheaper':
          return r.sort((n, i) => +n.price.slice(1) - +i.price.slice(1));
        case 'price-expensively':
          return r.sort((n, i) => +i.price.slice(1) - +n.price.slice(1));
        default:
          return r;
      }
    },
    Rm = [
      {
        label:
          '\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438',
        value: 'availability'
      },
      {
        label: '\u041F\u043E \u0438\u043C\u0435\u043D\u0438 (A-Z)',
        value: 'brand'
      },
      {
        label: '\u041F\u043E \u0438\u043C\u0435\u043D\u0438 (Z-A)',
        value: 'brand-reverse'
      },
      {
        label:
          '\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043D\u043E\u0432\u0435\u0435',
        value: 'date-newest'
      },
      {
        label:
          '\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0441\u0442\u0430\u0440\u0448\u0435',
        value: 'date-oldest'
      },
      {
        label:
          '\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u0435\u0448\u0435\u0432\u043B\u0435',
        value: 'price-cheaper'
      },
      {
        label:
          '\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u043E\u0440\u043E\u0436\u0435',
        value: 'price-expensively'
      }
    ],
    u3 = ({ cars: e, setCars: t }) => {
      const [r, n] = b.exports.useState(!1),
        [i, o] = b.exports.useState(Rm[0]);
      return (
        b.exports.useEffect(() => {
          t(s3(e, i.value));
        }, [i]),
        Q('div', {
          className: 'actions__sort sort',
          children: [
            Q('button', {
              onClick: () => n(!r),
              className: 'sort__button button',
              children: [
                L(a3, { className: 'button__icon' }),
                L('span', { className: 'button__text', children: i.label })
              ]
            }),
            L('ul', {
              className: `sort__list list ${r ? 'select-open' : ''}`,
              children: Rm.map(a =>
                L(
                  'li',
                  {
                    onClick: () => {
                      o(a), n(!1);
                    },
                    'data-sort': a.value,
                    className: 'list__item',
                    children: a.label
                  },
                  a.value
                )
              )
            })
          ]
        })
      );
    },
    l3 = e =>
      b.exports.createElement(
        'svg',
        {
          width: '1em',
          height: '1em',
          viewBox: '0 0 12 12',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          ...e
        },
        b.exports.createElement('path', {
          d: 'M12 11.139L8.7167 7.85508C9.37921 7.00502 9.74273 5.96681 9.74273 4.87137C9.74273 3.5701 9.23611 2.34678 8.31542 1.42731C7.39535 0.506622 6.17263 0 4.87137 0C3.5701 0 2.34739 0.506622 1.42731 1.42731C0.507227 2.34678 0 3.5701 0 4.87137C0 6.17263 0.507227 7.39595 1.42731 8.31542C2.34739 9.23611 3.5701 9.74273 4.87137 9.74273C5.96681 9.74273 7.00502 9.37981 7.85507 8.71609L11.139 11.9994L12 11.139ZM4.87137 8.52489C3.89587 8.52489 2.97823 8.14492 2.28832 7.45502C1.59781 6.76511 1.21784 5.84686 1.21784 4.87137C1.21784 3.89587 1.59781 2.97823 2.28832 2.28832C2.97823 1.59781 3.89587 1.21784 4.87137 1.21784C5.84686 1.21784 6.7645 1.59781 7.45441 2.28832C8.14493 2.97823 8.52489 3.89587 8.52489 4.87137C8.52489 5.84686 8.14493 6.76511 7.45441 7.45502C6.7645 8.14492 5.84686 8.52489 4.87137 8.52489Z',
          fill: 'black'
        })
      ),
    c3 = ({ setCars: e, data: t }) => {
      const [r, n] = b.exports.useState('');
      return Q('div', {
        className: 'actions__search search',
        children: [
          L('input', {
            type: 'text',
            className: 'search__field',
            placeholder:
              '\u041D\u0430\u0439\u0442\u0438 \u0430\u0432\u0442\u043E',
            value: r,
            onChange: o => n(o.target.value)
          }),
          L('button', {
            onClick: () => {
              e(
                t.filter(o =>
                  r.trim().toLowerCase().length === 0
                    ? !0
                    : o.brand.toLowerCase().includes(r.toLowerCase())
                )
              );
            },
            className: 'search__button button',
            children: L(l3, { className: 'button__icon' })
          })
        ]
      });
    },
    v1 = ({ children: e, width: t, availability: r = !0 }) =>
      L('button', {
        className: `button-primary ${r ? '' : 'button--active'}`,
        style: { width: t ? `${t}px` : '254px' },
        children: e
      }),
    f3 = e =>
      b.exports.createElement(
        'svg',
        {
          width: '1em',
          height: '1em',
          viewBox: '0 0 14 12',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          ...e
        },
        b.exports.createElement(
          'g',
          { clipPath: 'url(#clip0_9_134)' },
          b.exports.createElement('path', {
            d: 'M6.75 12C6.612 12 6.47398 11.9618 6.35248 11.886C6.09298 11.724 0 7.86825 0 3.75C0 1.68225 1.68225 0 3.75 0C4.9455 0 6.05325 0.627717 6.75 1.55997C7.44675 0.627717 8.5545 0 9.75 0C11.8177 0 13.5 1.68225 13.5 3.75C13.5 7.86825 7.40702 11.724 7.14752 11.886C7.02602 11.9618 6.888 12 6.75 12ZM3.75 1.5C2.5095 1.5 1.5 2.5095 1.5 3.75C1.5 6.27225 4.98225 9.15527 6.75 10.3545C8.51775 9.15527 12 6.273 12 3.75C12 2.5095 10.9905 1.5 9.75 1.5C8.48325 1.5 7.5 2.70975 7.5 3.75C7.5 4.164 7.164 4.5 6.75 4.5C6.336 4.5 6 4.164 6 3.75C6 2.70975 5.01675 1.5 3.75 1.5Z',
            fill: 'black'
          })
        ),
        b.exports.createElement(
          'defs',
          null,
          b.exports.createElement(
            'clipPath',
            { id: 'clip0_9_134' },
            b.exports.createElement('rect', {
              width: 13.5,
              height: 12,
              fill: 'white'
            })
          )
        )
      ),
    d3 = (e, t) => {
      const r = e.join('');
      return r.length > t ? `${r.slice(0, t)}...` : r;
    };
  function W(e) {
    for (
      var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
      n < t;
      n++
    )
      r[n - 1] = arguments[n];
    throw new Error(
      typeof e == 'number'
        ? '[MobX] minified error nr: ' +
          e +
          (r.length ? ' ' + r.map(String).join(',') : '') +
          '. Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts'
        : '[MobX] ' + e
    );
  }
  var h3 = {};
  function bl() {
    return typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : h3;
  }
  var m1 = Object.assign,
    xu = Object.getOwnPropertyDescriptor,
    Yt = Object.defineProperty,
    El = Object.prototype,
    Xf = [];
  Object.freeze(Xf);
  var y1 = {};
  Object.freeze(y1);
  var p3 = typeof Proxy < 'u',
    v3 = Object.toString();
  function g1() {
    p3 || W('Proxy not available');
  }
  function _1(e) {
    var t = !1;
    return function () {
      if (!t) return (t = !0), e.apply(this, arguments);
    };
  }
  var vi = function () {};
  function Lt(e) {
    return typeof e == 'function';
  }
  function In(e) {
    var t = typeof e;
    switch (t) {
      case 'string':
      case 'symbol':
      case 'number':
        return !0;
    }
    return !1;
  }
  function Sl(e) {
    return e !== null && typeof e == 'object';
  }
  function xr(e) {
    if (!Sl(e)) return !1;
    var t = Object.getPrototypeOf(e);
    if (t == null) return !0;
    var r = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
    return typeof r == 'function' && r.toString() === v3;
  }
  function w1(e) {
    var t = e == null ? void 0 : e.constructor;
    return t
      ? t.name === 'GeneratorFunction' || t.displayName === 'GeneratorFunction'
      : !1;
  }
  function Fa(e, t, r) {
    Yt(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
  }
  function b1(e, t, r) {
    Yt(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
  }
  function Un(e, t) {
    var r = 'isMobX' + e;
    return (
      (t.prototype[r] = !0),
      function (n) {
        return Sl(n) && n[r] === !0;
      }
    );
  }
  function to(e) {
    return e != null && Object.prototype.toString.call(e) === '[object Map]';
  }
  function m3(e) {
    var t = Object.getPrototypeOf(e),
      r = Object.getPrototypeOf(t),
      n = Object.getPrototypeOf(r);
    return n === null;
  }
  function ur(e) {
    return e != null && Object.prototype.toString.call(e) === '[object Set]';
  }
  var E1 = typeof Object.getOwnPropertySymbols < 'u';
  function y3(e) {
    var t = Object.keys(e);
    if (!E1) return t;
    var r = Object.getOwnPropertySymbols(e);
    return r.length
      ? [].concat(
          t,
          r.filter(function (n) {
            return El.propertyIsEnumerable.call(e, n);
          })
        )
      : t;
  }
  var zi =
    typeof Reflect < 'u' && Reflect.ownKeys
      ? Reflect.ownKeys
      : E1
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          );
        }
      : Object.getOwnPropertyNames;
  function S1(e) {
    return e === null ? null : typeof e == 'object' ? '' + e : e;
  }
  function vr(e, t) {
    return El.hasOwnProperty.call(e, t);
  }
  var g3 =
    Object.getOwnPropertyDescriptors ||
    function (t) {
      var r = {};
      return (
        zi(t).forEach(function (n) {
          r[n] = xu(t, n);
        }),
        r
      );
    };
  function et(e, t) {
    return !!(e & t);
  }
  function tt(e, t, r) {
    return r ? (e |= t) : (e &= ~t), e;
  }
  function Pm(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function Am(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        'value' in n && (n.writable = !0),
        Object.defineProperty(e, w3(n.key), n);
    }
  }
  function ro(e, t, r) {
    return (
      t && Am(e.prototype, t),
      r && Am(e, r),
      Object.defineProperty(e, 'prototype', { writable: !1 }),
      e
    );
  }
  function mi(e, t) {
    var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
    if (r) return (r = r.call(e)).next.bind(r);
    if (
      Array.isArray(e) ||
      (r = b3(e)) ||
      (t && e && typeof e.length == 'number')
    ) {
      r && (e = r);
      var n = 0;
      return function () {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Fn() {
    return (
      (Fn = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r) ({}.hasOwnProperty.call(r, n) && (e[n] = r[n]));
            }
            return e;
          }),
      Fn.apply(null, arguments)
    );
  }
  function x1(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      Zf(e, t);
  }
  function Zf(e, t) {
    return (
      (Zf = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (r, n) {
            return (r.__proto__ = n), r;
          }),
      Zf(e, t)
    );
  }
  function _3(e, t) {
    if (typeof e != 'object' || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
      var n = r.call(e, t || 'default');
      if (typeof n != 'object') return n;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
  }
  function w3(e) {
    var t = _3(e, 'string');
    return typeof t == 'symbol' ? t : t + '';
  }
  function b3(e, t) {
    if (e) {
      if (typeof e == 'string') return Pm(e, t);
      var r = {}.toString.call(e).slice(8, -1);
      return (
        r === 'Object' && e.constructor && (r = e.constructor.name),
        r === 'Map' || r === 'Set'
          ? Array.from(e)
          : r === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Pm(e, t)
          : void 0
      );
    }
  }
  var Wt = Symbol('mobx-stored-annotations');
  function Jt(e) {
    function t(r, n) {
      if (Ma(n)) return e.decorate_20223_(r, n);
      La(r, n, e);
    }
    return Object.assign(t, e);
  }
  function La(e, t, r) {
    vr(e, Wt) || Fa(e, Wt, Fn({}, e[Wt])), D3(r) || (e[Wt][t] = r);
  }
  function E3(e) {
    return vr(e, Wt) || Fa(e, Wt, Fn({}, e[Wt])), e[Wt];
  }
  function Ma(e) {
    return typeof e == 'object' && typeof e.kind == 'string';
  }
  var V = Symbol('mobx administration'),
    ln = (function () {
      function e(r) {
        r === void 0 && (r = 'Atom'),
          (this.name_ = void 0),
          (this.flags_ = 0),
          (this.observers_ = new Set()),
          (this.lastAccessedBy_ = 0),
          (this.lowestObserverState_ = H.NOT_TRACKING_),
          (this.onBOL = void 0),
          (this.onBUOL = void 0),
          (this.name_ = r);
      }
      var t = e.prototype;
      return (
        (t.onBO = function () {
          this.onBOL &&
            this.onBOL.forEach(function (n) {
              return n();
            });
        }),
        (t.onBUO = function () {
          this.onBUOL &&
            this.onBUOL.forEach(function (n) {
              return n();
            });
        }),
        (t.reportObserved = function () {
          return $1(this);
        }),
        (t.reportChanged = function () {
          mt(), z1(this), yt();
        }),
        (t.toString = function () {
          return this.name_;
        }),
        ro(e, [
          {
            key: 'isBeingObserved',
            get: function () {
              return et(this.flags_, e.isBeingObservedMask_);
            },
            set: function (n) {
              this.flags_ = tt(this.flags_, e.isBeingObservedMask_, n);
            }
          },
          {
            key: 'isPendingUnobservation',
            get: function () {
              return et(this.flags_, e.isPendingUnobservationMask_);
            },
            set: function (n) {
              this.flags_ = tt(this.flags_, e.isPendingUnobservationMask_, n);
            }
          },
          {
            key: 'diffValue',
            get: function () {
              return et(this.flags_, e.diffValueMask_) ? 1 : 0;
            },
            set: function (n) {
              this.flags_ = tt(this.flags_, e.diffValueMask_, n === 1);
            }
          }
        ])
      );
    })();
  ln.isBeingObservedMask_ = 1;
  ln.isPendingUnobservationMask_ = 2;
  ln.diffValueMask_ = 4;
  var Uh = Un('Atom', ln);
  function O1(e, t, r) {
    t === void 0 && (t = vi), r === void 0 && (r = vi);
    var n = new ln(e);
    return t !== vi && IT(n, t), r !== vi && W1(n, r), n;
  }
  function S3(e, t) {
    return e === t;
  }
  function x3(e, t) {
    return Yh(e, t);
  }
  function O3(e, t) {
    return Yh(e, t, 1);
  }
  function k3(e, t) {
    return Object.is
      ? Object.is(e, t)
      : e === t
      ? e !== 0 || 1 / e === 1 / t
      : e !== e && t !== t;
  }
  var Ou = { identity: S3, structural: x3, default: k3, shallow: O3 };
  function Ln(e, t, r) {
    return J1(e)
      ? e
      : Array.isArray(e)
      ? Re.array(e, { name: r })
      : xr(e)
      ? Re.object(e, void 0, { name: r })
      : to(e)
      ? Re.map(e, { name: r })
      : ur(e)
      ? Re.set(e, { name: r })
      : typeof e == 'function' && !_a(e) && !wa(e)
      ? w1(e)
        ? Bi(e)
        : ga(r, e)
      : e;
  }
  function C3(e, t, r) {
    if (e == null || ba(e) || Tl(e) || qn(e) || qt(e)) return e;
    if (Array.isArray(e)) return Re.array(e, { name: r, deep: !1 });
    if (xr(e)) return Re.object(e, void 0, { name: r, deep: !1 });
    if (to(e)) return Re.map(e, { name: r, deep: !1 });
    if (ur(e)) return Re.set(e, { name: r, deep: !1 });
  }
  function xl(e) {
    return e;
  }
  function T3(e, t) {
    return Yh(e, t) ? t : e;
  }
  var N3 = 'override';
  function D3(e) {
    return e.annotationType_ === N3;
  }
  function ja(e, t) {
    return {
      annotationType_: e,
      options_: t,
      make_: R3,
      extend_: P3,
      decorate_20223_: A3
    };
  }
  function R3(e, t, r, n) {
    var i;
    if ((i = this.options_) != null && i.bound)
      return this.extend_(e, t, r, !1) === null ? 0 : 1;
    if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
    if (_a(r.value)) return 1;
    var o = k1(e, this, t, r, !1);
    return Yt(n, t, o), 2;
  }
  function P3(e, t, r, n) {
    var i = k1(e, this, t, r);
    return e.defineProperty_(t, i, n);
  }
  function A3(e, t) {
    var r = t.kind,
      n = t.name,
      i = t.addInitializer,
      o = this,
      a = function (l) {
        var c, d, f, v;
        return Mn(
          (c = (d = o.options_) == null ? void 0 : d.name) != null
            ? c
            : n.toString(),
          l,
          (f = (v = o.options_) == null ? void 0 : v.autoAction) != null
            ? f
            : !1
        );
      };
    if (r == 'field')
      return function (u) {
        var l,
          c = u;
        return (
          _a(c) || (c = a(c)),
          (l = o.options_) != null &&
            l.bound &&
            ((c = c.bind(this)), (c.isMobxAction = !0)),
          c
        );
      };
    if (r == 'method') {
      var s;
      return (
        _a(e) || (e = a(e)),
        (s = this.options_) != null &&
          s.bound &&
          i(function () {
            var u = this,
              l = u[n].bind(u);
            (l.isMobxAction = !0), (u[n] = l);
          }),
        e
      );
    }
    W(
      "Cannot apply '" +
        o.annotationType_ +
        "' to '" +
        String(n) +
        "' (kind: " +
        r +
        '):' +
        (`
'` +
          o.annotationType_ +
          "' can only be used on properties with a function value.")
    );
  }
  function I3(e, t, r, n) {
    t.annotationType_, n.value;
  }
  function k1(e, t, r, n, i) {
    var o, a, s, u, l, c, d;
    i === void 0 && (i = N.safeDescriptors), I3(e, t, r, n);
    var f = n.value;
    if ((o = t.options_) != null && o.bound) {
      var v;
      f = f.bind((v = e.proxy_) != null ? v : e.target_);
    }
    return {
      value: Mn(
        (a = (s = t.options_) == null ? void 0 : s.name) != null
          ? a
          : r.toString(),
        f,
        (u = (l = t.options_) == null ? void 0 : l.autoAction) != null ? u : !1,
        (c = t.options_) != null && c.bound
          ? (d = e.proxy_) != null
            ? d
            : e.target_
          : void 0
      ),
      configurable: i ? e.isPlainObject_ : !0,
      enumerable: !1,
      writable: !i
    };
  }
  function C1(e, t) {
    return {
      annotationType_: e,
      options_: t,
      make_: F3,
      extend_: L3,
      decorate_20223_: M3
    };
  }
  function F3(e, t, r, n) {
    var i;
    if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
    if (
      (i = this.options_) != null &&
      i.bound &&
      (!vr(e.target_, t) || !wa(e.target_[t])) &&
      this.extend_(e, t, r, !1) === null
    )
      return 0;
    if (wa(r.value)) return 1;
    var o = T1(e, this, t, r, !1, !1);
    return Yt(n, t, o), 2;
  }
  function L3(e, t, r, n) {
    var i,
      o = T1(e, this, t, r, (i = this.options_) == null ? void 0 : i.bound);
    return e.defineProperty_(t, o, n);
  }
  function M3(e, t) {
    var r,
      n = t.name,
      i = t.addInitializer;
    return (
      wa(e) || (e = Bi(e)),
      (r = this.options_) != null &&
        r.bound &&
        i(function () {
          var o = this,
            a = o[n].bind(o);
          (a.isMobXFlow = !0), (o[n] = a);
        }),
      e
    );
  }
  function j3(e, t, r, n) {
    t.annotationType_, n.value;
  }
  function T1(e, t, r, n, i, o) {
    o === void 0 && (o = N.safeDescriptors), j3(e, t, r, n);
    var a = n.value;
    if ((wa(a) || (a = Bi(a)), i)) {
      var s;
      (a = a.bind((s = e.proxy_) != null ? s : e.target_)), (a.isMobXFlow = !0);
    }
    return {
      value: a,
      configurable: o ? e.isPlainObject_ : !0,
      enumerable: !1,
      writable: !o
    };
  }
  function Qh(e, t) {
    return {
      annotationType_: e,
      options_: t,
      make_: V3,
      extend_: $3,
      decorate_20223_: z3
    };
  }
  function V3(e, t, r) {
    return this.extend_(e, t, r, !1) === null ? 0 : 1;
  }
  function $3(e, t, r, n) {
    return (
      B3(e, this, t, r),
      e.defineComputedProperty_(
        t,
        Fn({}, this.options_, { get: r.get, set: r.set }),
        n
      )
    );
  }
  function z3(e, t) {
    var r = this,
      n = t.name,
      i = t.addInitializer;
    return (
      i(function () {
        var o = Wn(this)[V],
          a = Fn({}, r.options_, { get: e, context: this });
        a.name || (a.name = 'ObservableObject.' + n.toString()),
          o.values_.set(n, new Mt(a));
      }),
      function () {
        return this[V].getObservablePropValue_(n);
      }
    );
  }
  function B3(e, t, r, n) {
    t.annotationType_, n.get;
  }
  function Ol(e, t) {
    return {
      annotationType_: e,
      options_: t,
      make_: U3,
      extend_: Q3,
      decorate_20223_: q3
    };
  }
  function U3(e, t, r) {
    return this.extend_(e, t, r, !1) === null ? 0 : 1;
  }
  function Q3(e, t, r, n) {
    var i, o;
    return (
      W3(e, this),
      e.defineObservableProperty_(
        t,
        r.value,
        (i = (o = this.options_) == null ? void 0 : o.enhancer) != null
          ? i
          : Ln,
        n
      )
    );
  }
  function q3(e, t) {
    var r = this,
      n = t.kind,
      i = t.name,
      o = new WeakSet();
    function a(s, u) {
      var l,
        c,
        d = Wn(s)[V],
        f = new xn(
          u,
          (l = (c = r.options_) == null ? void 0 : c.enhancer) != null ? l : Ln,
          'ObservableObject.' + i.toString(),
          !1
        );
      d.values_.set(i, f), o.add(s);
    }
    if (n == 'accessor')
      return {
        get: function () {
          return (
            o.has(this) || a(this, e.get.call(this)),
            this[V].getObservablePropValue_(i)
          );
        },
        set: function (u) {
          return (
            o.has(this) || a(this, u), this[V].setObservablePropValue_(i, u)
          );
        },
        init: function (u) {
          return o.has(this) || a(this, u), u;
        }
      };
  }
  function W3(e, t, r, n) {
    t.annotationType_;
  }
  var H3 = 'true',
    G3 = N1();
  function N1(e) {
    return {
      annotationType_: H3,
      options_: e,
      make_: K3,
      extend_: Y3,
      decorate_20223_: J3
    };
  }
  function K3(e, t, r, n) {
    var i, o;
    if (r.get) return kl.make_(e, t, r, n);
    if (r.set) {
      var a = Mn(t.toString(), r.set);
      return n === e.target_
        ? e.defineProperty_(t, {
            configurable: N.safeDescriptors ? e.isPlainObject_ : !0,
            set: a
          }) === null
          ? 0
          : 2
        : (Yt(n, t, { configurable: !0, set: a }), 2);
    }
    if (n !== e.target_ && typeof r.value == 'function') {
      var s;
      if (w1(r.value)) {
        var u,
          l = (u = this.options_) != null && u.autoBind ? Bi.bound : Bi;
        return l.make_(e, t, r, n);
      }
      var c = (s = this.options_) != null && s.autoBind ? ga.bound : ga;
      return c.make_(e, t, r, n);
    }
    var d =
      ((i = this.options_) == null ? void 0 : i.deep) === !1 ? Re.ref : Re;
    if (
      typeof r.value == 'function' &&
      (o = this.options_) != null &&
      o.autoBind
    ) {
      var f;
      r.value = r.value.bind((f = e.proxy_) != null ? f : e.target_);
    }
    return d.make_(e, t, r, n);
  }
  function Y3(e, t, r, n) {
    var i, o;
    if (r.get) return kl.extend_(e, t, r, n);
    if (r.set)
      return e.defineProperty_(
        t,
        {
          configurable: N.safeDescriptors ? e.isPlainObject_ : !0,
          set: Mn(t.toString(), r.set)
        },
        n
      );
    if (
      typeof r.value == 'function' &&
      (i = this.options_) != null &&
      i.autoBind
    ) {
      var a;
      r.value = r.value.bind((a = e.proxy_) != null ? a : e.target_);
    }
    var s =
      ((o = this.options_) == null ? void 0 : o.deep) === !1 ? Re.ref : Re;
    return s.extend_(e, t, r, n);
  }
  function J3(e, t) {
    W("'" + this.annotationType_ + "' cannot be used as a decorator");
  }
  var X3 = 'observable',
    Z3 = 'observable.ref',
    eT = 'observable.shallow',
    tT = 'observable.struct',
    D1 = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
  Object.freeze(D1);
  function ds(e) {
    return e || D1;
  }
  var ed = Ol(X3),
    rT = Ol(Z3, { enhancer: xl }),
    nT = Ol(eT, { enhancer: C3 }),
    iT = Ol(tT, { enhancer: T3 }),
    R1 = Jt(ed);
  function hs(e) {
    return e.deep === !0 ? Ln : e.deep === !1 ? xl : aT(e.defaultDecorator);
  }
  function oT(e) {
    var t;
    return e ? ((t = e.defaultDecorator) != null ? t : N1(e)) : void 0;
  }
  function aT(e) {
    var t, r;
    return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null
      ? t
      : Ln;
  }
  function P1(e, t, r) {
    if (Ma(t)) return ed.decorate_20223_(e, t);
    if (In(t)) {
      La(e, t, ed);
      return;
    }
    return J1(e)
      ? e
      : xr(e)
      ? Re.object(e, t, r)
      : Array.isArray(e)
      ? Re.array(e, t)
      : to(e)
      ? Re.map(e, t)
      : ur(e)
      ? Re.set(e, t)
      : typeof e == 'object' && e !== null
      ? e
      : Re.box(e, t);
  }
  m1(P1, R1);
  var sT = {
      box: function (t, r) {
        var n = ds(r);
        return new xn(t, hs(n), n.name, !0, n.equals);
      },
      array: function (t, r) {
        var n = ds(r);
        return (N.useProxies === !1 || n.proxy === !1 ? oN : KT)(
          t,
          hs(n),
          n.name
        );
      },
      map: function (t, r) {
        var n = ds(r);
        return new Z1(t, hs(n), n.name);
      },
      set: function (t, r) {
        var n = ds(r);
        return new ew(t, hs(n), n.name);
      },
      object: function (t, r, n) {
        return cn(function () {
          return G1(
            N.useProxies === !1 || (n == null ? void 0 : n.proxy) === !1
              ? Wn({}, n)
              : QT({}, n),
            t,
            r
          );
        });
      },
      ref: Jt(rT),
      shallow: Jt(nT),
      deep: R1,
      struct: Jt(iT)
    },
    Re = m1(P1, sT),
    A1 = 'computed',
    uT = 'computed.struct',
    td = Qh(A1),
    lT = Qh(uT, { equals: Ou.structural }),
    kl = function (t, r) {
      if (Ma(r)) return td.decorate_20223_(t, r);
      if (In(r)) return La(t, r, td);
      if (xr(t)) return Jt(Qh(A1, t));
      var n = xr(r) ? r : {};
      return (n.get = t), n.name || (n.name = t.name || ''), new Mt(n);
    };
  Object.assign(kl, td);
  kl.struct = Jt(lT);
  var Im,
    Fm,
    ku = 0,
    cT = 1,
    fT =
      (Im =
        (Fm = xu(function () {}, 'name')) == null ? void 0 : Fm.configurable) !=
      null
        ? Im
        : !1,
    Lm = { value: 'action', configurable: !0, writable: !1, enumerable: !1 };
  function Mn(e, t, r, n) {
    r === void 0 && (r = !1);
    function i() {
      return dT(e, r, t, n || this, arguments);
    }
    return (
      (i.isMobxAction = !0),
      (i.toString = function () {
        return t.toString();
      }),
      fT && ((Lm.value = e), Yt(i, 'name', Lm)),
      i
    );
  }
  function dT(e, t, r, n, i) {
    var o = hT(e, t);
    try {
      return r.apply(n, i);
    } catch (a) {
      throw ((o.error_ = a), a);
    } finally {
      pT(o);
    }
  }
  function hT(e, t, r, n) {
    var i = !1,
      o = 0,
      a = N.trackingDerivation,
      s = !t || !a;
    mt();
    var u = N.allowStateChanges;
    s && (Qn(), (u = qh(!0)));
    var l = Hh(!0),
      c = {
        runAsAction_: s,
        prevDerivation_: a,
        prevAllowStateChanges_: u,
        prevAllowStateReads_: l,
        notifySpy_: i,
        startTime_: o,
        actionId_: cT++,
        parentActionId_: ku
      };
    return (ku = c.actionId_), c;
  }
  function pT(e) {
    ku !== e.actionId_ && W(30),
      (ku = e.parentActionId_),
      e.error_ !== void 0 && (N.suppressReactionErrors = !0),
      Wh(e.prevAllowStateChanges_),
      Qo(e.prevAllowStateReads_),
      yt(),
      e.runAsAction_ && mr(e.prevDerivation_),
      (N.suppressReactionErrors = !1);
  }
  function qh(e) {
    var t = N.allowStateChanges;
    return (N.allowStateChanges = e), t;
  }
  function Wh(e) {
    N.allowStateChanges = e;
  }
  var xn = (function (e) {
      function t(n, i, o, a, s) {
        var u;
        return (
          o === void 0 && (o = 'ObservableValue'),
          s === void 0 && (s = Ou.default),
          (u = e.call(this, o) || this),
          (u.enhancer = void 0),
          (u.name_ = void 0),
          (u.equals = void 0),
          (u.hasUnreportedChange_ = !1),
          (u.interceptors_ = void 0),
          (u.changeListeners_ = void 0),
          (u.value_ = void 0),
          (u.dehancer = void 0),
          (u.enhancer = i),
          (u.name_ = o),
          (u.equals = s),
          (u.value_ = i(n, void 0, o)),
          u
        );
      }
      x1(t, e);
      var r = t.prototype;
      return (
        (r.dehanceValue = function (i) {
          return this.dehancer !== void 0 ? this.dehancer(i) : i;
        }),
        (r.set = function (i) {
          this.value_,
            (i = this.prepareNewValue_(i)),
            i !== N.UNCHANGED && this.setNewValue_(i);
        }),
        (r.prepareNewValue_ = function (i) {
          if (ht(this)) {
            var o = pt(this, { object: this, type: Xt, newValue: i });
            if (!o) return N.UNCHANGED;
            i = o.newValue;
          }
          return (
            (i = this.enhancer(i, this.value_, this.name_)),
            this.equals(this.value_, i) ? N.UNCHANGED : i
          );
        }),
        (r.setNewValue_ = function (i) {
          var o = this.value_;
          (this.value_ = i),
            this.reportChanged(),
            Pt(this) &&
              At(this, { type: Xt, object: this, newValue: i, oldValue: o });
        }),
        (r.get = function () {
          return this.reportObserved(), this.dehanceValue(this.value_);
        }),
        (r.intercept_ = function (i) {
          return Va(this, i);
        }),
        (r.observe_ = function (i, o) {
          return (
            o &&
              i({
                observableKind: 'value',
                debugObjectName: this.name_,
                object: this,
                type: Xt,
                newValue: this.value_,
                oldValue: void 0
              }),
            $a(this, i)
          );
        }),
        (r.raw = function () {
          return this.value_;
        }),
        (r.toJSON = function () {
          return this.get();
        }),
        (r.toString = function () {
          return this.name_ + '[' + this.value_ + ']';
        }),
        (r.valueOf = function () {
          return S1(this.get());
        }),
        (r[Symbol.toPrimitive] = function () {
          return this.valueOf();
        }),
        t
      );
    })(ln),
    Mt = (function () {
      function e(r) {
        (this.dependenciesState_ = H.NOT_TRACKING_),
          (this.observing_ = []),
          (this.newObserving_ = null),
          (this.observers_ = new Set()),
          (this.runId_ = 0),
          (this.lastAccessedBy_ = 0),
          (this.lowestObserverState_ = H.UP_TO_DATE_),
          (this.unboundDepsCount_ = 0),
          (this.value_ = new Tu(null)),
          (this.name_ = void 0),
          (this.triggeredBy_ = void 0),
          (this.flags_ = 0),
          (this.derivation = void 0),
          (this.setter_ = void 0),
          (this.isTracing_ = Cu.NONE),
          (this.scope_ = void 0),
          (this.equals_ = void 0),
          (this.requiresReaction_ = void 0),
          (this.keepAlive_ = void 0),
          (this.onBOL = void 0),
          (this.onBUOL = void 0),
          r.get || W(31),
          (this.derivation = r.get),
          (this.name_ = r.name || 'ComputedValue'),
          r.set && (this.setter_ = Mn('ComputedValue-setter', r.set)),
          (this.equals_ =
            r.equals ||
            (r.compareStructural || r.struct ? Ou.structural : Ou.default)),
          (this.scope_ = r.context),
          (this.requiresReaction_ = r.requiresReaction),
          (this.keepAlive_ = !!r.keepAlive);
      }
      var t = e.prototype;
      return (
        (t.onBecomeStale_ = function () {
          _T(this);
        }),
        (t.onBO = function () {
          this.onBOL &&
            this.onBOL.forEach(function (n) {
              return n();
            });
        }),
        (t.onBUO = function () {
          this.onBUOL &&
            this.onBUOL.forEach(function (n) {
              return n();
            });
        }),
        (t.get = function () {
          if (
            (this.isComputing && W(32, this.name_, this.derivation),
            N.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
          )
            rd(this) &&
              (this.warnAboutUntrackedRead_(),
              mt(),
              (this.value_ = this.computeValue_(!1)),
              yt());
          else if (($1(this), rd(this))) {
            var n = N.trackingContext;
            this.keepAlive_ && !n && (N.trackingContext = this),
              this.trackAndCompute() && gT(this),
              (N.trackingContext = n);
          }
          var i = this.value_;
          if (Bs(i)) throw i.cause;
          return i;
        }),
        (t.set = function (n) {
          if (this.setter_) {
            this.isRunningSetter && W(33, this.name_),
              (this.isRunningSetter = !0);
            try {
              this.setter_.call(this.scope_, n);
            } finally {
              this.isRunningSetter = !1;
            }
          } else W(34, this.name_);
        }),
        (t.trackAndCompute = function () {
          var n = this.value_,
            i = this.dependenciesState_ === H.NOT_TRACKING_,
            o = this.computeValue_(!0),
            a = i || Bs(n) || Bs(o) || !this.equals_(n, o);
          return a && (this.value_ = o), a;
        }),
        (t.computeValue_ = function (n) {
          this.isComputing = !0;
          var i = qh(!1),
            o;
          if (n) o = I1(this, this.derivation, this.scope_);
          else if (N.disableErrorBoundaries === !0)
            o = this.derivation.call(this.scope_);
          else
            try {
              o = this.derivation.call(this.scope_);
            } catch (a) {
              o = new Tu(a);
            }
          return Wh(i), (this.isComputing = !1), o;
        }),
        (t.suspend_ = function () {
          this.keepAlive_ || (nd(this), (this.value_ = void 0));
        }),
        (t.observe_ = function (n, i) {
          var o = this,
            a = !0,
            s = void 0;
          return NT(function () {
            var u = o.get();
            if (!a || i) {
              var l = Qn();
              n({
                observableKind: 'computed',
                debugObjectName: o.name_,
                type: Xt,
                object: o,
                newValue: u,
                oldValue: s
              }),
                mr(l);
            }
            (a = !1), (s = u);
          });
        }),
        (t.warnAboutUntrackedRead_ = function () {}),
        (t.toString = function () {
          return this.name_ + '[' + this.derivation.toString() + ']';
        }),
        (t.valueOf = function () {
          return S1(this.get());
        }),
        (t[Symbol.toPrimitive] = function () {
          return this.valueOf();
        }),
        ro(e, [
          {
            key: 'isComputing',
            get: function () {
              return et(this.flags_, e.isComputingMask_);
            },
            set: function (n) {
              this.flags_ = tt(this.flags_, e.isComputingMask_, n);
            }
          },
          {
            key: 'isRunningSetter',
            get: function () {
              return et(this.flags_, e.isRunningSetterMask_);
            },
            set: function (n) {
              this.flags_ = tt(this.flags_, e.isRunningSetterMask_, n);
            }
          },
          {
            key: 'isBeingObserved',
            get: function () {
              return et(this.flags_, e.isBeingObservedMask_);
            },
            set: function (n) {
              this.flags_ = tt(this.flags_, e.isBeingObservedMask_, n);
            }
          },
          {
            key: 'isPendingUnobservation',
            get: function () {
              return et(this.flags_, e.isPendingUnobservationMask_);
            },
            set: function (n) {
              this.flags_ = tt(this.flags_, e.isPendingUnobservationMask_, n);
            }
          },
          {
            key: 'diffValue',
            get: function () {
              return et(this.flags_, e.diffValueMask_) ? 1 : 0;
            },
            set: function (n) {
              this.flags_ = tt(this.flags_, e.diffValueMask_, n === 1);
            }
          }
        ])
      );
    })();
  Mt.isComputingMask_ = 1;
  Mt.isRunningSetterMask_ = 2;
  Mt.isBeingObservedMask_ = 4;
  Mt.isPendingUnobservationMask_ = 8;
  Mt.diffValueMask_ = 16;
  var Cl = Un('ComputedValue', Mt),
    H;
  (function (e) {
    (e[(e.NOT_TRACKING_ = -1)] = 'NOT_TRACKING_'),
      (e[(e.UP_TO_DATE_ = 0)] = 'UP_TO_DATE_'),
      (e[(e.POSSIBLY_STALE_ = 1)] = 'POSSIBLY_STALE_'),
      (e[(e.STALE_ = 2)] = 'STALE_');
  })(H || (H = {}));
  var Cu;
  (function (e) {
    (e[(e.NONE = 0)] = 'NONE'),
      (e[(e.LOG = 1)] = 'LOG'),
      (e[(e.BREAK = 2)] = 'BREAK');
  })(Cu || (Cu = {}));
  var Tu = function (t) {
    (this.cause = void 0), (this.cause = t);
  };
  function Bs(e) {
    return e instanceof Tu;
  }
  function rd(e) {
    switch (e.dependenciesState_) {
      case H.UP_TO_DATE_:
        return !1;
      case H.NOT_TRACKING_:
      case H.STALE_:
        return !0;
      case H.POSSIBLY_STALE_: {
        for (
          var t = Hh(!0), r = Qn(), n = e.observing_, i = n.length, o = 0;
          o < i;
          o++
        ) {
          var a = n[o];
          if (Cl(a)) {
            if (N.disableErrorBoundaries) a.get();
            else
              try {
                a.get();
              } catch {
                return mr(r), Qo(t), !0;
              }
            if (e.dependenciesState_ === H.STALE_) return mr(r), Qo(t), !0;
          }
        }
        return L1(e), mr(r), Qo(t), !1;
      }
    }
  }
  function I1(e, t, r) {
    var n = Hh(!0);
    L1(e),
      (e.newObserving_ = new Array(e.runId_ === 0 ? 100 : e.observing_.length)),
      (e.unboundDepsCount_ = 0),
      (e.runId_ = ++N.runId);
    var i = N.trackingDerivation;
    (N.trackingDerivation = e), N.inBatch++;
    var o;
    if (N.disableErrorBoundaries === !0) o = t.call(r);
    else
      try {
        o = t.call(r);
      } catch (a) {
        o = new Tu(a);
      }
    return N.inBatch--, (N.trackingDerivation = i), vT(e), Qo(n), o;
  }
  function vT(e) {
    for (
      var t = e.observing_,
        r = (e.observing_ = e.newObserving_),
        n = H.UP_TO_DATE_,
        i = 0,
        o = e.unboundDepsCount_,
        a = 0;
      a < o;
      a++
    ) {
      var s = r[a];
      s.diffValue === 0 && ((s.diffValue = 1), i !== a && (r[i] = s), i++),
        s.dependenciesState_ > n && (n = s.dependenciesState_);
    }
    for (r.length = i, e.newObserving_ = null, o = t.length; o--; ) {
      var u = t[o];
      u.diffValue === 0 && j1(u, e), (u.diffValue = 0);
    }
    for (; i--; ) {
      var l = r[i];
      l.diffValue === 1 && ((l.diffValue = 0), yT(l, e));
    }
    n !== H.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
  }
  function nd(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var r = t.length; r--; ) j1(t[r], e);
    e.dependenciesState_ = H.NOT_TRACKING_;
  }
  function F1(e) {
    var t = Qn();
    try {
      return e();
    } finally {
      mr(t);
    }
  }
  function Qn() {
    var e = N.trackingDerivation;
    return (N.trackingDerivation = null), e;
  }
  function mr(e) {
    N.trackingDerivation = e;
  }
  function Hh(e) {
    var t = N.allowStateReads;
    return (N.allowStateReads = e), t;
  }
  function Qo(e) {
    N.allowStateReads = e;
  }
  function L1(e) {
    if (e.dependenciesState_ !== H.UP_TO_DATE_) {
      e.dependenciesState_ = H.UP_TO_DATE_;
      for (var t = e.observing_, r = t.length; r--; )
        t[r].lowestObserverState_ = H.UP_TO_DATE_;
    }
  }
  var Us = function () {
      (this.version = 6),
        (this.UNCHANGED = {}),
        (this.trackingDerivation = null),
        (this.trackingContext = null),
        (this.runId = 0),
        (this.mobxGuid = 0),
        (this.inBatch = 0),
        (this.pendingUnobservations = []),
        (this.pendingReactions = []),
        (this.isRunningReactions = !1),
        (this.allowStateChanges = !1),
        (this.allowStateReads = !0),
        (this.enforceActions = !0),
        (this.spyListeners = []),
        (this.globalReactionErrorHandlers = []),
        (this.computedRequiresReaction = !1),
        (this.reactionRequiresObservable = !1),
        (this.observableRequiresReaction = !1),
        (this.disableErrorBoundaries = !1),
        (this.suppressReactionErrors = !1),
        (this.useProxies = !0),
        (this.verifyProxies = !1),
        (this.safeDescriptors = !0);
    },
    Qs = !0,
    M1 = !1,
    N = (function () {
      var e = bl();
      return (
        e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (Qs = !1),
        e.__mobxGlobals &&
          e.__mobxGlobals.version !== new Us().version &&
          (Qs = !1),
        Qs
          ? e.__mobxGlobals
            ? ((e.__mobxInstanceCount += 1),
              e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
              e.__mobxGlobals)
            : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new Us()))
          : (setTimeout(function () {
              M1 || W(35);
            }, 1),
            new Us())
      );
    })();
  function mT() {
    if (
      ((N.pendingReactions.length || N.inBatch || N.isRunningReactions) &&
        W(36),
      (M1 = !0),
      Qs)
    ) {
      var e = bl();
      --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0),
        (N = new Us());
    }
  }
  function yT(e, t) {
    e.observers_.add(t),
      e.lowestObserverState_ > t.dependenciesState_ &&
        (e.lowestObserverState_ = t.dependenciesState_);
  }
  function j1(e, t) {
    e.observers_.delete(t), e.observers_.size === 0 && V1(e);
  }
  function V1(e) {
    e.isPendingUnobservation === !1 &&
      ((e.isPendingUnobservation = !0), N.pendingUnobservations.push(e));
  }
  function mt() {
    N.inBatch++;
  }
  function yt() {
    if (--N.inBatch === 0) {
      B1();
      for (var e = N.pendingUnobservations, t = 0; t < e.length; t++) {
        var r = e[t];
        (r.isPendingUnobservation = !1),
          r.observers_.size === 0 &&
            (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
            r instanceof Mt && r.suspend_());
      }
      N.pendingUnobservations = [];
    }
  }
  function $1(e) {
    var t = N.trackingDerivation;
    return t !== null
      ? (t.runId_ !== e.lastAccessedBy_ &&
          ((e.lastAccessedBy_ = t.runId_),
          (t.newObserving_[t.unboundDepsCount_++] = e),
          !e.isBeingObserved &&
            N.trackingContext &&
            ((e.isBeingObserved = !0), e.onBO())),
        e.isBeingObserved)
      : (e.observers_.size === 0 && N.inBatch > 0 && V1(e), !1);
  }
  function z1(e) {
    e.lowestObserverState_ !== H.STALE_ &&
      ((e.lowestObserverState_ = H.STALE_),
      e.observers_.forEach(function (t) {
        t.dependenciesState_ === H.UP_TO_DATE_ && t.onBecomeStale_(),
          (t.dependenciesState_ = H.STALE_);
      }));
  }
  function gT(e) {
    e.lowestObserverState_ !== H.STALE_ &&
      ((e.lowestObserverState_ = H.STALE_),
      e.observers_.forEach(function (t) {
        t.dependenciesState_ === H.POSSIBLY_STALE_
          ? (t.dependenciesState_ = H.STALE_)
          : t.dependenciesState_ === H.UP_TO_DATE_ &&
            (e.lowestObserverState_ = H.UP_TO_DATE_);
      }));
  }
  function _T(e) {
    e.lowestObserverState_ === H.UP_TO_DATE_ &&
      ((e.lowestObserverState_ = H.POSSIBLY_STALE_),
      e.observers_.forEach(function (t) {
        t.dependenciesState_ === H.UP_TO_DATE_ &&
          ((t.dependenciesState_ = H.POSSIBLY_STALE_), t.onBecomeStale_());
      }));
  }
  var Or = (function () {
    function e(r, n, i, o) {
      r === void 0 && (r = 'Reaction'),
        (this.name_ = void 0),
        (this.onInvalidate_ = void 0),
        (this.errorHandler_ = void 0),
        (this.requiresObservable_ = void 0),
        (this.observing_ = []),
        (this.newObserving_ = []),
        (this.dependenciesState_ = H.NOT_TRACKING_),
        (this.runId_ = 0),
        (this.unboundDepsCount_ = 0),
        (this.flags_ = 0),
        (this.isTracing_ = Cu.NONE),
        (this.name_ = r),
        (this.onInvalidate_ = n),
        (this.errorHandler_ = i),
        (this.requiresObservable_ = o);
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        this.schedule_();
      }),
      (t.schedule_ = function () {
        this.isScheduled ||
          ((this.isScheduled = !0), N.pendingReactions.push(this), B1());
      }),
      (t.runReaction_ = function () {
        if (!this.isDisposed) {
          mt(), (this.isScheduled = !1);
          var n = N.trackingContext;
          if (((N.trackingContext = this), rd(this))) {
            this.isTrackPending = !0;
            try {
              this.onInvalidate_();
            } catch (i) {
              this.reportExceptionInDerivation_(i);
            }
          }
          (N.trackingContext = n), yt();
        }
      }),
      (t.track = function (n) {
        if (!this.isDisposed) {
          mt(), (this.isRunning = !0);
          var i = N.trackingContext;
          N.trackingContext = this;
          var o = I1(this, n, void 0);
          (N.trackingContext = i),
            (this.isRunning = !1),
            (this.isTrackPending = !1),
            this.isDisposed && nd(this),
            Bs(o) && this.reportExceptionInDerivation_(o.cause),
            yt();
        }
      }),
      (t.reportExceptionInDerivation_ = function (n) {
        var i = this;
        if (this.errorHandler_) {
          this.errorHandler_(n, this);
          return;
        }
        if (N.disableErrorBoundaries) throw n;
        var o = "[mobx] uncaught error in '" + this + "'";
        N.suppressReactionErrors || console.error(o, n),
          N.globalReactionErrorHandlers.forEach(function (a) {
            return a(n, i);
          });
      }),
      (t.dispose = function () {
        this.isDisposed ||
          ((this.isDisposed = !0), this.isRunning || (mt(), nd(this), yt()));
      }),
      (t.getDisposer_ = function (n) {
        var i = this,
          o = function a() {
            i.dispose(),
              n == null ||
                n.removeEventListener == null ||
                n.removeEventListener('abort', a);
          };
        return (
          n == null ||
            n.addEventListener == null ||
            n.addEventListener('abort', o),
          (o[V] = this),
          o
        );
      }),
      (t.toString = function () {
        return 'Reaction[' + this.name_ + ']';
      }),
      (t.trace = function (n) {}),
      ro(e, [
        {
          key: 'isDisposed',
          get: function () {
            return et(this.flags_, e.isDisposedMask_);
          },
          set: function (n) {
            this.flags_ = tt(this.flags_, e.isDisposedMask_, n);
          }
        },
        {
          key: 'isScheduled',
          get: function () {
            return et(this.flags_, e.isScheduledMask_);
          },
          set: function (n) {
            this.flags_ = tt(this.flags_, e.isScheduledMask_, n);
          }
        },
        {
          key: 'isTrackPending',
          get: function () {
            return et(this.flags_, e.isTrackPendingMask_);
          },
          set: function (n) {
            this.flags_ = tt(this.flags_, e.isTrackPendingMask_, n);
          }
        },
        {
          key: 'isRunning',
          get: function () {
            return et(this.flags_, e.isRunningMask_);
          },
          set: function (n) {
            this.flags_ = tt(this.flags_, e.isRunningMask_, n);
          }
        },
        {
          key: 'diffValue',
          get: function () {
            return et(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = tt(this.flags_, e.diffValueMask_, n === 1);
          }
        }
      ])
    );
  })();
  Or.isDisposedMask_ = 1;
  Or.isScheduledMask_ = 2;
  Or.isTrackPendingMask_ = 4;
  Or.isRunningMask_ = 8;
  Or.diffValueMask_ = 16;
  var wT = 100,
    id = function (t) {
      return t();
    };
  function B1() {
    N.inBatch > 0 || N.isRunningReactions || id(bT);
  }
  function bT() {
    N.isRunningReactions = !0;
    for (var e = N.pendingReactions, t = 0; e.length > 0; ) {
      ++t === wT &&
        (console.error('[mobx] cycle in reaction: ' + e[0]), e.splice(0));
      for (var r = e.splice(0), n = 0, i = r.length; n < i; n++)
        r[n].runReaction_();
    }
    N.isRunningReactions = !1;
  }
  var Nu = Un('Reaction', Or);
  function ET(e) {
    var t = id;
    id = function (n) {
      return e(function () {
        return t(n);
      });
    };
  }
  function qo() {
    return !1;
  }
  function ST(e) {
    return (
      console.warn('[mobx.spy] Is a no-op in production builds'), function () {}
    );
  }
  var U1 = 'action',
    xT = 'action.bound',
    Q1 = 'autoAction',
    OT = 'autoAction.bound',
    kT = '<unnamed action>',
    od = ja(U1),
    CT = ja(xT, { bound: !0 }),
    ad = ja(Q1, { autoAction: !0 }),
    TT = ja(OT, { autoAction: !0, bound: !0 });
  function q1(e) {
    var t = function (n, i) {
      if (Lt(n)) return Mn(n.name || kT, n, e);
      if (Lt(i)) return Mn(n, i, e);
      if (Ma(i)) return (e ? ad : od).decorate_20223_(n, i);
      if (In(i)) return La(n, i, e ? ad : od);
      if (In(n)) return Jt(ja(e ? Q1 : U1, { name: n, autoAction: e }));
    };
    return t;
  }
  var yi = q1(!1);
  Object.assign(yi, od);
  var ga = q1(!0);
  Object.assign(ga, ad);
  yi.bound = Jt(CT);
  ga.bound = Jt(TT);
  function _a(e) {
    return Lt(e) && e.isMobxAction === !0;
  }
  function NT(e, t) {
    var r, n, i, o;
    t === void 0 && (t = y1);
    var a = (r = (n = t) == null ? void 0 : n.name) != null ? r : 'Autorun',
      s = !t.scheduler && !t.delay,
      u;
    if (s)
      u = new Or(
        a,
        function () {
          this.track(d);
        },
        t.onError,
        t.requiresObservable
      );
    else {
      var l = RT(t),
        c = !1;
      u = new Or(
        a,
        function () {
          c ||
            ((c = !0),
            l(function () {
              (c = !1), u.isDisposed || u.track(d);
            }));
        },
        t.onError,
        t.requiresObservable
      );
    }
    function d() {
      e(u);
    }
    return (
      ((i = t) != null && (i = i.signal) != null && i.aborted) || u.schedule_(),
      u.getDisposer_((o = t) == null ? void 0 : o.signal)
    );
  }
  var DT = function (t) {
    return t();
  };
  function RT(e) {
    return e.scheduler
      ? e.scheduler
      : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : DT;
  }
  var PT = 'onBO',
    AT = 'onBUO';
  function IT(e, t, r) {
    return H1(PT, e, t, r);
  }
  function W1(e, t, r) {
    return H1(AT, e, t, r);
  }
  function H1(e, t, r, n) {
    var i = typeof n == 'function' ? Ui(t, r) : Ui(t),
      o = Lt(n) ? n : r,
      a = e + 'L';
    return (
      i[a] ? i[a].add(o) : (i[a] = new Set([o])),
      function () {
        var s = i[a];
        s && (s.delete(o), s.size === 0 && delete i[a]);
      }
    );
  }
  var FT = 'never',
    ps = 'always',
    LT = 'observed';
  function MT(e) {
    e.isolateGlobalState === !0 && mT();
    var t = e.useProxies,
      r = e.enforceActions;
    if (
      (t !== void 0 &&
        (N.useProxies = t === ps ? !0 : t === FT ? !1 : typeof Proxy < 'u'),
      t === 'ifavailable' && (N.verifyProxies = !0),
      r !== void 0)
    ) {
      var n = r === ps ? ps : r === LT;
      (N.enforceActions = n), (N.allowStateChanges = !(n === !0 || n === ps));
    }
    [
      'computedRequiresReaction',
      'reactionRequiresObservable',
      'observableRequiresReaction',
      'disableErrorBoundaries',
      'safeDescriptors'
    ].forEach(function (i) {
      i in e && (N[i] = !!e[i]);
    }),
      (N.allowStateReads = !N.observableRequiresReaction),
      e.reactionScheduler && ET(e.reactionScheduler);
  }
  function G1(e, t, r, n) {
    var i = g3(t);
    return (
      cn(function () {
        var o = Wn(e, n)[V];
        zi(i).forEach(function (a) {
          o.extend_(a, i[a], r && a in r ? r[a] : !0);
        });
      }),
      e
    );
  }
  function jT(e, t) {
    return K1(Ui(e, t));
  }
  function K1(e) {
    var t = { name: e.name_ };
    return (
      e.observing_ &&
        e.observing_.length > 0 &&
        (t.dependencies = VT(e.observing_).map(K1)),
      t
    );
  }
  function VT(e) {
    return Array.from(new Set(e));
  }
  var $T = 0;
  function Y1() {
    this.message = 'FLOW_CANCELLED';
  }
  Y1.prototype = Object.create(Error.prototype);
  var wc = C1('flow'),
    zT = C1('flow.bound', { bound: !0 }),
    Bi = Object.assign(function (t, r) {
      if (Ma(r)) return wc.decorate_20223_(t, r);
      if (In(r)) return La(t, r, wc);
      var n = t,
        i = n.name || '<unnamed flow>',
        o = function () {
          var s = this,
            u = arguments,
            l = ++$T,
            c = yi(i + ' - runid: ' + l + ' - init', n).apply(s, u),
            d,
            f = void 0,
            v = new Promise(function (y, g) {
              var _ = 0;
              d = g;
              function h(w) {
                f = void 0;
                var S;
                try {
                  S = yi(i + ' - runid: ' + l + ' - yield ' + _++, c.next).call(
                    c,
                    w
                  );
                } catch (x) {
                  return g(x);
                }
                m(S);
              }
              function p(w) {
                f = void 0;
                var S;
                try {
                  S = yi(
                    i + ' - runid: ' + l + ' - yield ' + _++,
                    c.throw
                  ).call(c, w);
                } catch (x) {
                  return g(x);
                }
                m(S);
              }
              function m(w) {
                if (Lt(w == null ? void 0 : w.then)) {
                  w.then(m, g);
                  return;
                }
                return w.done
                  ? y(w.value)
                  : ((f = Promise.resolve(w.value)), f.then(h, p));
              }
              h(void 0);
            });
          return (
            (v.cancel = yi(i + ' - runid: ' + l + ' - cancel', function () {
              try {
                f && Mm(f);
                var y = c.return(void 0),
                  g = Promise.resolve(y.value);
                g.then(vi, vi), Mm(g), d(new Y1());
              } catch (_) {
                d(_);
              }
            })),
            v
          );
        };
      return (o.isMobXFlow = !0), o;
    }, wc);
  Bi.bound = Jt(zT);
  function Mm(e) {
    Lt(e.cancel) && e.cancel();
  }
  function wa(e) {
    return (e == null ? void 0 : e.isMobXFlow) === !0;
  }
  function BT(e, t) {
    return e
      ? t !== void 0
        ? ba(e)
          ? e[V].values_.has(t)
          : !1
        : ba(e) || !!e[V] || Uh(e) || Nu(e) || Cl(e)
      : !1;
  }
  function J1(e) {
    return BT(e);
  }
  function lr(e, t) {
    t === void 0 && (t = void 0), mt();
    try {
      return e.apply(t);
    } finally {
      yt();
    }
  }
  function Kn(e) {
    return e[V];
  }
  var UT = {
    has: function (t, r) {
      return Kn(t).has_(r);
    },
    get: function (t, r) {
      return Kn(t).get_(r);
    },
    set: function (t, r, n) {
      var i;
      return In(r) ? ((i = Kn(t).set_(r, n, !0)) != null ? i : !0) : !1;
    },
    deleteProperty: function (t, r) {
      var n;
      return In(r) ? ((n = Kn(t).delete_(r, !0)) != null ? n : !0) : !1;
    },
    defineProperty: function (t, r, n) {
      var i;
      return (i = Kn(t).defineProperty_(r, n)) != null ? i : !0;
    },
    ownKeys: function (t) {
      return Kn(t).ownKeys_();
    },
    preventExtensions: function (t) {
      W(13);
    }
  };
  function QT(e, t) {
    var r, n;
    return (
      g1(),
      (e = Wn(e, t)),
      (n = (r = e[V]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, UT))
    );
  }
  function ht(e) {
    return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
  }
  function Va(e, t) {
    var r = e.interceptors_ || (e.interceptors_ = []);
    return (
      r.push(t),
      _1(function () {
        var n = r.indexOf(t);
        n !== -1 && r.splice(n, 1);
      })
    );
  }
  function pt(e, t) {
    var r = Qn();
    try {
      for (
        var n = [].concat(e.interceptors_ || []), i = 0, o = n.length;
        i < o && ((t = n[i](t)), t && !t.type && W(14), !!t);
        i++
      );
      return t;
    } finally {
      mr(r);
    }
  }
  function Pt(e) {
    return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
  }
  function $a(e, t) {
    var r = e.changeListeners_ || (e.changeListeners_ = []);
    return (
      r.push(t),
      _1(function () {
        var n = r.indexOf(t);
        n !== -1 && r.splice(n, 1);
      })
    );
  }
  function At(e, t) {
    var r = Qn(),
      n = e.changeListeners_;
    if (!!n) {
      n = n.slice();
      for (var i = 0, o = n.length; i < o; i++) n[i](t);
      mr(r);
    }
  }
  function qT(e, t, r) {
    return (
      cn(function () {
        var n,
          i = Wn(e, r)[V];
        (n = t) != null || (t = E3(e)),
          zi(t).forEach(function (o) {
            return i.make_(o, t[o]);
          });
      }),
      e
    );
  }
  var bc = Symbol('mobx-keys');
  function WT(e, t, r) {
    return xr(e)
      ? G1(e, e, t, r)
      : (cn(function () {
          var n = Wn(e, r)[V];
          if (!e[bc]) {
            var i = Object.getPrototypeOf(e),
              o = new Set([].concat(zi(e), zi(i)));
            o.delete('constructor'), o.delete(V), Fa(i, bc, o);
          }
          e[bc].forEach(function (a) {
            return n.make_(a, t && a in t ? t[a] : !0);
          });
        }),
        e);
  }
  var jm = 'splice',
    Xt = 'update',
    HT = 1e4,
    GT = {
      get: function (t, r) {
        var n = t[V];
        return r === V
          ? n
          : r === 'length'
          ? n.getArrayLength_()
          : typeof r == 'string' && !isNaN(r)
          ? n.get_(parseInt(r))
          : vr(Du, r)
          ? Du[r]
          : t[r];
      },
      set: function (t, r, n) {
        var i = t[V];
        return (
          r === 'length' && i.setArrayLength_(n),
          typeof r == 'symbol' || isNaN(r)
            ? (t[r] = n)
            : i.set_(parseInt(r), n),
          !0
        );
      },
      preventExtensions: function () {
        W(15);
      }
    },
    Gh = (function () {
      function e(r, n, i, o) {
        r === void 0 && (r = 'ObservableArray'),
          (this.owned_ = void 0),
          (this.legacyMode_ = void 0),
          (this.atom_ = void 0),
          (this.values_ = []),
          (this.interceptors_ = void 0),
          (this.changeListeners_ = void 0),
          (this.enhancer_ = void 0),
          (this.dehancer = void 0),
          (this.proxy_ = void 0),
          (this.lastKnownLength_ = 0),
          (this.owned_ = i),
          (this.legacyMode_ = o),
          (this.atom_ = new ln(r)),
          (this.enhancer_ = function (a, s) {
            return n(a, s, 'ObservableArray[..]');
          });
      }
      var t = e.prototype;
      return (
        (t.dehanceValue_ = function (n) {
          return this.dehancer !== void 0 ? this.dehancer(n) : n;
        }),
        (t.dehanceValues_ = function (n) {
          return this.dehancer !== void 0 && n.length > 0
            ? n.map(this.dehancer)
            : n;
        }),
        (t.intercept_ = function (n) {
          return Va(this, n);
        }),
        (t.observe_ = function (n, i) {
          return (
            i === void 0 && (i = !1),
            i &&
              n({
                observableKind: 'array',
                object: this.proxy_,
                debugObjectName: this.atom_.name_,
                type: 'splice',
                index: 0,
                added: this.values_.slice(),
                addedCount: this.values_.length,
                removed: [],
                removedCount: 0
              }),
            $a(this, n)
          );
        }),
        (t.getArrayLength_ = function () {
          return this.atom_.reportObserved(), this.values_.length;
        }),
        (t.setArrayLength_ = function (n) {
          (typeof n != 'number' || isNaN(n) || n < 0) &&
            W('Out of range: ' + n);
          var i = this.values_.length;
          if (n !== i)
            if (n > i) {
              for (var o = new Array(n - i), a = 0; a < n - i; a++)
                o[a] = void 0;
              this.spliceWithArray_(i, 0, o);
            } else this.spliceWithArray_(n, i - n);
        }),
        (t.updateArrayLength_ = function (n, i) {
          n !== this.lastKnownLength_ && W(16),
            (this.lastKnownLength_ += i),
            this.legacyMode_ && i > 0 && iw(n + i + 1);
        }),
        (t.spliceWithArray_ = function (n, i, o) {
          var a = this;
          this.atom_;
          var s = this.values_.length;
          if (
            (n === void 0
              ? (n = 0)
              : n > s
              ? (n = s)
              : n < 0 && (n = Math.max(0, s + n)),
            arguments.length === 1
              ? (i = s - n)
              : i == null
              ? (i = 0)
              : (i = Math.max(0, Math.min(i, s - n))),
            o === void 0 && (o = Xf),
            ht(this))
          ) {
            var u = pt(this, {
              object: this.proxy_,
              type: jm,
              index: n,
              removedCount: i,
              added: o
            });
            if (!u) return Xf;
            (i = u.removedCount), (o = u.added);
          }
          if (
            ((o =
              o.length === 0
                ? o
                : o.map(function (d) {
                    return a.enhancer_(d, void 0);
                  })),
            this.legacyMode_)
          ) {
            var l = o.length - i;
            this.updateArrayLength_(s, l);
          }
          var c = this.spliceItemsIntoValues_(n, i, o);
          return (
            (i !== 0 || o.length !== 0) && this.notifyArraySplice_(n, o, c),
            this.dehanceValues_(c)
          );
        }),
        (t.spliceItemsIntoValues_ = function (n, i, o) {
          if (o.length < HT) {
            var a;
            return (a = this.values_).splice.apply(a, [n, i].concat(o));
          } else {
            var s = this.values_.slice(n, n + i),
              u = this.values_.slice(n + i);
            this.values_.length += o.length - i;
            for (var l = 0; l < o.length; l++) this.values_[n + l] = o[l];
            for (var c = 0; c < u.length; c++)
              this.values_[n + o.length + c] = u[c];
            return s;
          }
        }),
        (t.notifyArrayChildUpdate_ = function (n, i, o) {
          var a = !this.owned_ && qo(),
            s = Pt(this),
            u =
              s || a
                ? {
                    observableKind: 'array',
                    object: this.proxy_,
                    type: Xt,
                    debugObjectName: this.atom_.name_,
                    index: n,
                    newValue: i,
                    oldValue: o
                  }
                : null;
          this.atom_.reportChanged(), s && At(this, u);
        }),
        (t.notifyArraySplice_ = function (n, i, o) {
          var a = !this.owned_ && qo(),
            s = Pt(this),
            u =
              s || a
                ? {
                    observableKind: 'array',
                    object: this.proxy_,
                    debugObjectName: this.atom_.name_,
                    type: jm,
                    index: n,
                    removed: o,
                    added: i,
                    removedCount: o.length,
                    addedCount: i.length
                  }
                : null;
          this.atom_.reportChanged(), s && At(this, u);
        }),
        (t.get_ = function (n) {
          if (this.legacyMode_ && n >= this.values_.length) {
            console.warn('[mobx] Out of bounds read: ' + n);
            return;
          }
          return (
            this.atom_.reportObserved(), this.dehanceValue_(this.values_[n])
          );
        }),
        (t.set_ = function (n, i) {
          var o = this.values_;
          if (
            (this.legacyMode_ && n > o.length && W(17, n, o.length),
            n < o.length)
          ) {
            this.atom_;
            var a = o[n];
            if (ht(this)) {
              var s = pt(this, {
                type: Xt,
                object: this.proxy_,
                index: n,
                newValue: i
              });
              if (!s) return;
              i = s.newValue;
            }
            i = this.enhancer_(i, a);
            var u = i !== a;
            u && ((o[n] = i), this.notifyArrayChildUpdate_(n, i, a));
          } else {
            for (
              var l = new Array(n + 1 - o.length), c = 0;
              c < l.length - 1;
              c++
            )
              l[c] = void 0;
            (l[l.length - 1] = i), this.spliceWithArray_(o.length, 0, l);
          }
        }),
        e
      );
    })();
  function KT(e, t, r, n) {
    return (
      r === void 0 && (r = 'ObservableArray'),
      n === void 0 && (n = !1),
      g1(),
      cn(function () {
        var i = new Gh(r, t, n, !1);
        b1(i.values_, V, i);
        var o = new Proxy(i.values_, GT);
        return (i.proxy_ = o), e && e.length && i.spliceWithArray_(0, 0, e), o;
      })
    );
  }
  var Du = {
    clear: function () {
      return this.splice(0);
    },
    replace: function (t) {
      var r = this[V];
      return r.spliceWithArray_(0, r.values_.length, t);
    },
    toJSON: function () {
      return this.slice();
    },
    splice: function (t, r) {
      for (
        var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2;
        o < n;
        o++
      )
        i[o - 2] = arguments[o];
      var a = this[V];
      switch (arguments.length) {
        case 0:
          return [];
        case 1:
          return a.spliceWithArray_(t);
        case 2:
          return a.spliceWithArray_(t, r);
      }
      return a.spliceWithArray_(t, r, i);
    },
    spliceWithArray: function (t, r, n) {
      return this[V].spliceWithArray_(t, r, n);
    },
    push: function () {
      for (
        var t = this[V], r = arguments.length, n = new Array(r), i = 0;
        i < r;
        i++
      )
        n[i] = arguments[i];
      return t.spliceWithArray_(t.values_.length, 0, n), t.values_.length;
    },
    pop: function () {
      return this.splice(Math.max(this[V].values_.length - 1, 0), 1)[0];
    },
    shift: function () {
      return this.splice(0, 1)[0];
    },
    unshift: function () {
      for (
        var t = this[V], r = arguments.length, n = new Array(r), i = 0;
        i < r;
        i++
      )
        n[i] = arguments[i];
      return t.spliceWithArray_(0, 0, n), t.values_.length;
    },
    reverse: function () {
      return (
        N.trackingDerivation && W(37, 'reverse'),
        this.replace(this.slice().reverse()),
        this
      );
    },
    sort: function () {
      N.trackingDerivation && W(37, 'sort');
      var t = this.slice();
      return t.sort.apply(t, arguments), this.replace(t), this;
    },
    remove: function (t) {
      var r = this[V],
        n = r.dehanceValues_(r.values_).indexOf(t);
      return n > -1 ? (this.splice(n, 1), !0) : !1;
    }
  };
  re('at', lt);
  re('concat', lt);
  re('flat', lt);
  re('includes', lt);
  re('indexOf', lt);
  re('join', lt);
  re('lastIndexOf', lt);
  re('slice', lt);
  re('toString', lt);
  re('toLocaleString', lt);
  re('toSorted', lt);
  re('toSpliced', lt);
  re('with', lt);
  re('every', jt);
  re('filter', jt);
  re('find', jt);
  re('findIndex', jt);
  re('findLast', jt);
  re('findLastIndex', jt);
  re('flatMap', jt);
  re('forEach', jt);
  re('map', jt);
  re('some', jt);
  re('toReversed', jt);
  re('reduce', X1);
  re('reduceRight', X1);
  function re(e, t) {
    typeof Array.prototype[e] == 'function' && (Du[e] = t(e));
  }
  function lt(e) {
    return function () {
      var t = this[V];
      t.atom_.reportObserved();
      var r = t.dehanceValues_(t.values_);
      return r[e].apply(r, arguments);
    };
  }
  function jt(e) {
    return function (t, r) {
      var n = this,
        i = this[V];
      i.atom_.reportObserved();
      var o = i.dehanceValues_(i.values_);
      return o[e](function (a, s) {
        return t.call(r, a, s, n);
      });
    };
  }
  function X1(e) {
    return function () {
      var t = this,
        r = this[V];
      r.atom_.reportObserved();
      var n = r.dehanceValues_(r.values_),
        i = arguments[0];
      return (
        (arguments[0] = function (o, a, s) {
          return i(o, a, s, t);
        }),
        n[e].apply(n, arguments)
      );
    };
  }
  var YT = Un('ObservableArrayAdministration', Gh);
  function Tl(e) {
    return Sl(e) && YT(e[V]);
  }
  var JT = {},
    Br = 'add',
    Ru = 'delete',
    Z1 = (function () {
      function e(r, n, i) {
        var o = this;
        n === void 0 && (n = Ln),
          i === void 0 && (i = 'ObservableMap'),
          (this.enhancer_ = void 0),
          (this.name_ = void 0),
          (this[V] = JT),
          (this.data_ = void 0),
          (this.hasMap_ = void 0),
          (this.keysAtom_ = void 0),
          (this.interceptors_ = void 0),
          (this.changeListeners_ = void 0),
          (this.dehancer = void 0),
          (this.enhancer_ = n),
          (this.name_ = i),
          Lt(Map) || W(18),
          cn(function () {
            (o.keysAtom_ = O1('ObservableMap.keys()')),
              (o.data_ = new Map()),
              (o.hasMap_ = new Map()),
              r && o.merge(r);
          });
      }
      var t = e.prototype;
      return (
        (t.has_ = function (n) {
          return this.data_.has(n);
        }),
        (t.has = function (n) {
          var i = this;
          if (!N.trackingDerivation) return this.has_(n);
          var o = this.hasMap_.get(n);
          if (!o) {
            var a = (o = new xn(this.has_(n), xl, 'ObservableMap.key?', !1));
            this.hasMap_.set(n, a),
              W1(a, function () {
                return i.hasMap_.delete(n);
              });
          }
          return o.get();
        }),
        (t.set = function (n, i) {
          var o = this.has_(n);
          if (ht(this)) {
            var a = pt(this, {
              type: o ? Xt : Br,
              object: this,
              newValue: i,
              name: n
            });
            if (!a) return this;
            i = a.newValue;
          }
          return o ? this.updateValue_(n, i) : this.addValue_(n, i), this;
        }),
        (t.delete = function (n) {
          var i = this;
          if ((this.keysAtom_, ht(this))) {
            var o = pt(this, { type: Ru, object: this, name: n });
            if (!o) return !1;
          }
          if (this.has_(n)) {
            var a = qo(),
              s = Pt(this),
              u =
                s || a
                  ? {
                      observableKind: 'map',
                      debugObjectName: this.name_,
                      type: Ru,
                      object: this,
                      oldValue: this.data_.get(n).value_,
                      name: n
                    }
                  : null;
            return (
              lr(function () {
                var l;
                i.keysAtom_.reportChanged(),
                  (l = i.hasMap_.get(n)) == null || l.setNewValue_(!1);
                var c = i.data_.get(n);
                c.setNewValue_(void 0), i.data_.delete(n);
              }),
              s && At(this, u),
              !0
            );
          }
          return !1;
        }),
        (t.updateValue_ = function (n, i) {
          var o = this.data_.get(n);
          if (((i = o.prepareNewValue_(i)), i !== N.UNCHANGED)) {
            var a = qo(),
              s = Pt(this),
              u =
                s || a
                  ? {
                      observableKind: 'map',
                      debugObjectName: this.name_,
                      type: Xt,
                      object: this,
                      oldValue: o.value_,
                      name: n,
                      newValue: i
                    }
                  : null;
            o.setNewValue_(i), s && At(this, u);
          }
        }),
        (t.addValue_ = function (n, i) {
          var o = this;
          this.keysAtom_,
            lr(function () {
              var l,
                c = new xn(i, o.enhancer_, 'ObservableMap.key', !1);
              o.data_.set(n, c),
                (i = c.value_),
                (l = o.hasMap_.get(n)) == null || l.setNewValue_(!0),
                o.keysAtom_.reportChanged();
            });
          var a = qo(),
            s = Pt(this),
            u =
              s || a
                ? {
                    observableKind: 'map',
                    debugObjectName: this.name_,
                    type: Br,
                    object: this,
                    name: n,
                    newValue: i
                  }
                : null;
          s && At(this, u);
        }),
        (t.get = function (n) {
          return this.has(n)
            ? this.dehanceValue_(this.data_.get(n).get())
            : this.dehanceValue_(void 0);
        }),
        (t.dehanceValue_ = function (n) {
          return this.dehancer !== void 0 ? this.dehancer(n) : n;
        }),
        (t.keys = function () {
          return this.keysAtom_.reportObserved(), this.data_.keys();
        }),
        (t.values = function () {
          var n = this,
            i = this.keys();
          return Vm({
            next: function () {
              var a = i.next(),
                s = a.done,
                u = a.value;
              return { done: s, value: s ? void 0 : n.get(u) };
            }
          });
        }),
        (t.entries = function () {
          var n = this,
            i = this.keys();
          return Vm({
            next: function () {
              var a = i.next(),
                s = a.done,
                u = a.value;
              return { done: s, value: s ? void 0 : [u, n.get(u)] };
            }
          });
        }),
        (t[Symbol.iterator] = function () {
          return this.entries();
        }),
        (t.forEach = function (n, i) {
          for (var o = mi(this), a; !(a = o()).done; ) {
            var s = a.value,
              u = s[0],
              l = s[1];
            n.call(i, l, u, this);
          }
        }),
        (t.merge = function (n) {
          var i = this;
          return (
            qn(n) && (n = new Map(n)),
            lr(function () {
              xr(n)
                ? y3(n).forEach(function (o) {
                    return i.set(o, n[o]);
                  })
                : Array.isArray(n)
                ? n.forEach(function (o) {
                    var a = o[0],
                      s = o[1];
                    return i.set(a, s);
                  })
                : to(n)
                ? (m3(n) || W(19, n),
                  n.forEach(function (o, a) {
                    return i.set(a, o);
                  }))
                : n != null && W(20, n);
            }),
            this
          );
        }),
        (t.clear = function () {
          var n = this;
          lr(function () {
            F1(function () {
              for (var i = mi(n.keys()), o; !(o = i()).done; ) {
                var a = o.value;
                n.delete(a);
              }
            });
          });
        }),
        (t.replace = function (n) {
          var i = this;
          return (
            lr(function () {
              for (
                var o = XT(n), a = new Map(), s = !1, u = mi(i.data_.keys()), l;
                !(l = u()).done;

              ) {
                var c = l.value;
                if (!o.has(c)) {
                  var d = i.delete(c);
                  if (d) s = !0;
                  else {
                    var f = i.data_.get(c);
                    a.set(c, f);
                  }
                }
              }
              for (var v = mi(o.entries()), y; !(y = v()).done; ) {
                var g = y.value,
                  _ = g[0],
                  h = g[1],
                  p = i.data_.has(_);
                if ((i.set(_, h), i.data_.has(_))) {
                  var m = i.data_.get(_);
                  a.set(_, m), p || (s = !0);
                }
              }
              if (!s)
                if (i.data_.size !== a.size) i.keysAtom_.reportChanged();
                else
                  for (
                    var w = i.data_.keys(),
                      S = a.keys(),
                      x = w.next(),
                      O = S.next();
                    !x.done;

                  ) {
                    if (x.value !== O.value) {
                      i.keysAtom_.reportChanged();
                      break;
                    }
                    (x = w.next()), (O = S.next());
                  }
              i.data_ = a;
            }),
            this
          );
        }),
        (t.toString = function () {
          return '[object ObservableMap]';
        }),
        (t.toJSON = function () {
          return Array.from(this);
        }),
        (t.observe_ = function (n, i) {
          return $a(this, n);
        }),
        (t.intercept_ = function (n) {
          return Va(this, n);
        }),
        ro(e, [
          {
            key: 'size',
            get: function () {
              return this.keysAtom_.reportObserved(), this.data_.size;
            }
          },
          {
            key: Symbol.toStringTag,
            get: function () {
              return 'Map';
            }
          }
        ])
      );
    })(),
    qn = Un('ObservableMap', Z1);
  function Vm(e) {
    return (e[Symbol.toStringTag] = 'MapIterator'), Jh(e);
  }
  function XT(e) {
    if (to(e) || qn(e)) return e;
    if (Array.isArray(e)) return new Map(e);
    if (xr(e)) {
      var t = new Map();
      for (var r in e) t.set(r, e[r]);
      return t;
    } else return W(21, e);
  }
  var ZT = {},
    ew = (function () {
      function e(r, n, i) {
        var o = this;
        n === void 0 && (n = Ln),
          i === void 0 && (i = 'ObservableSet'),
          (this.name_ = void 0),
          (this[V] = ZT),
          (this.data_ = new Set()),
          (this.atom_ = void 0),
          (this.changeListeners_ = void 0),
          (this.interceptors_ = void 0),
          (this.dehancer = void 0),
          (this.enhancer_ = void 0),
          (this.name_ = i),
          Lt(Set) || W(22),
          (this.enhancer_ = function (a, s) {
            return n(a, s, i);
          }),
          cn(function () {
            (o.atom_ = O1(o.name_)), r && o.replace(r);
          });
      }
      var t = e.prototype;
      return (
        (t.dehanceValue_ = function (n) {
          return this.dehancer !== void 0 ? this.dehancer(n) : n;
        }),
        (t.clear = function () {
          var n = this;
          lr(function () {
            F1(function () {
              for (var i = mi(n.data_.values()), o; !(o = i()).done; ) {
                var a = o.value;
                n.delete(a);
              }
            });
          });
        }),
        (t.forEach = function (n, i) {
          for (var o = mi(this), a; !(a = o()).done; ) {
            var s = a.value;
            n.call(i, s, s, this);
          }
        }),
        (t.add = function (n) {
          var i = this;
          if ((this.atom_, ht(this))) {
            var o = pt(this, { type: Br, object: this, newValue: n });
            if (!o) return this;
            n = o.newValue;
          }
          if (!this.has(n)) {
            lr(function () {
              i.data_.add(i.enhancer_(n, void 0)), i.atom_.reportChanged();
            });
            var a = !1,
              s = Pt(this),
              u =
                s || a
                  ? {
                      observableKind: 'set',
                      debugObjectName: this.name_,
                      type: Br,
                      object: this,
                      newValue: n
                    }
                  : null;
            s && At(this, u);
          }
          return this;
        }),
        (t.delete = function (n) {
          var i = this;
          if (ht(this)) {
            var o = pt(this, { type: Ru, object: this, oldValue: n });
            if (!o) return !1;
          }
          if (this.has(n)) {
            var a = !1,
              s = Pt(this),
              u =
                s || a
                  ? {
                      observableKind: 'set',
                      debugObjectName: this.name_,
                      type: Ru,
                      object: this,
                      oldValue: n
                    }
                  : null;
            return (
              lr(function () {
                i.atom_.reportChanged(), i.data_.delete(n);
              }),
              s && At(this, u),
              !0
            );
          }
          return !1;
        }),
        (t.has = function (n) {
          return (
            this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(n))
          );
        }),
        (t.entries = function () {
          var n = this.values();
          return $m({
            next: function () {
              var o = n.next(),
                a = o.value,
                s = o.done;
              return s
                ? { value: void 0, done: s }
                : { value: [a, a], done: s };
            }
          });
        }),
        (t.keys = function () {
          return this.values();
        }),
        (t.values = function () {
          this.atom_.reportObserved();
          var n = this,
            i = this.data_.values();
          return $m({
            next: function () {
              var a = i.next(),
                s = a.value,
                u = a.done;
              return u
                ? { value: void 0, done: u }
                : { value: n.dehanceValue_(s), done: u };
            }
          });
        }),
        (t.intersection = function (n) {
          if (ur(n) && !qt(n)) return n.intersection(this);
          var i = new Set(this);
          return i.intersection(n);
        }),
        (t.union = function (n) {
          if (ur(n) && !qt(n)) return n.union(this);
          var i = new Set(this);
          return i.union(n);
        }),
        (t.difference = function (n) {
          return new Set(this).difference(n);
        }),
        (t.symmetricDifference = function (n) {
          if (ur(n) && !qt(n)) return n.symmetricDifference(this);
          var i = new Set(this);
          return i.symmetricDifference(n);
        }),
        (t.isSubsetOf = function (n) {
          return new Set(this).isSubsetOf(n);
        }),
        (t.isSupersetOf = function (n) {
          return new Set(this).isSupersetOf(n);
        }),
        (t.isDisjointFrom = function (n) {
          if (ur(n) && !qt(n)) return n.isDisjointFrom(this);
          var i = new Set(this);
          return i.isDisjointFrom(n);
        }),
        (t.replace = function (n) {
          var i = this;
          return (
            qt(n) && (n = new Set(n)),
            lr(function () {
              Array.isArray(n)
                ? (i.clear(),
                  n.forEach(function (o) {
                    return i.add(o);
                  }))
                : ur(n)
                ? (i.clear(),
                  n.forEach(function (o) {
                    return i.add(o);
                  }))
                : n != null && W('Cannot initialize set from ' + n);
            }),
            this
          );
        }),
        (t.observe_ = function (n, i) {
          return $a(this, n);
        }),
        (t.intercept_ = function (n) {
          return Va(this, n);
        }),
        (t.toJSON = function () {
          return Array.from(this);
        }),
        (t.toString = function () {
          return '[object ObservableSet]';
        }),
        (t[Symbol.iterator] = function () {
          return this.values();
        }),
        ro(e, [
          {
            key: 'size',
            get: function () {
              return this.atom_.reportObserved(), this.data_.size;
            }
          },
          {
            key: Symbol.toStringTag,
            get: function () {
              return 'Set';
            }
          }
        ])
      );
    })(),
    qt = Un('ObservableSet', ew);
  function $m(e) {
    return (e[Symbol.toStringTag] = 'SetIterator'), Jh(e);
  }
  var zm = Object.create(null),
    Bm = 'remove',
    tw = (function () {
      function e(r, n, i, o) {
        n === void 0 && (n = new Map()),
          o === void 0 && (o = G3),
          (this.target_ = void 0),
          (this.values_ = void 0),
          (this.name_ = void 0),
          (this.defaultAnnotation_ = void 0),
          (this.keysAtom_ = void 0),
          (this.changeListeners_ = void 0),
          (this.interceptors_ = void 0),
          (this.proxy_ = void 0),
          (this.isPlainObject_ = void 0),
          (this.appliedAnnotations_ = void 0),
          (this.pendingKeys_ = void 0),
          (this.target_ = r),
          (this.values_ = n),
          (this.name_ = i),
          (this.defaultAnnotation_ = o),
          (this.keysAtom_ = new ln('ObservableObject.keys')),
          (this.isPlainObject_ = xr(this.target_));
      }
      var t = e.prototype;
      return (
        (t.getObservablePropValue_ = function (n) {
          return this.values_.get(n).get();
        }),
        (t.setObservablePropValue_ = function (n, i) {
          var o = this.values_.get(n);
          if (o instanceof Mt) return o.set(i), !0;
          if (ht(this)) {
            var a = pt(this, {
              type: Xt,
              object: this.proxy_ || this.target_,
              name: n,
              newValue: i
            });
            if (!a) return null;
            i = a.newValue;
          }
          if (((i = o.prepareNewValue_(i)), i !== N.UNCHANGED)) {
            var s = Pt(this),
              u = !1,
              l =
                s || u
                  ? {
                      type: Xt,
                      observableKind: 'object',
                      debugObjectName: this.name_,
                      object: this.proxy_ || this.target_,
                      oldValue: o.value_,
                      name: n,
                      newValue: i
                    }
                  : null;
            o.setNewValue_(i), s && At(this, l);
          }
          return !0;
        }),
        (t.get_ = function (n) {
          return (
            N.trackingDerivation && !vr(this.target_, n) && this.has_(n),
            this.target_[n]
          );
        }),
        (t.set_ = function (n, i, o) {
          return (
            o === void 0 && (o = !1),
            vr(this.target_, n)
              ? this.values_.has(n)
                ? this.setObservablePropValue_(n, i)
                : o
                ? Reflect.set(this.target_, n, i)
                : ((this.target_[n] = i), !0)
              : this.extend_(
                  n,
                  { value: i, enumerable: !0, writable: !0, configurable: !0 },
                  this.defaultAnnotation_,
                  o
                )
          );
        }),
        (t.has_ = function (n) {
          if (!N.trackingDerivation) return n in this.target_;
          this.pendingKeys_ || (this.pendingKeys_ = new Map());
          var i = this.pendingKeys_.get(n);
          return (
            i ||
              ((i = new xn(n in this.target_, xl, 'ObservableObject.key?', !1)),
              this.pendingKeys_.set(n, i)),
            i.get()
          );
        }),
        (t.make_ = function (n, i) {
          if ((i === !0 && (i = this.defaultAnnotation_), i !== !1)) {
            if (!(n in this.target_)) {
              var o;
              if ((o = this.target_[Wt]) != null && o[n]) return;
              W(1, i.annotationType_, this.name_ + '.' + n.toString());
            }
            for (var a = this.target_; a && a !== El; ) {
              var s = xu(a, n);
              if (s) {
                var u = i.make_(this, n, s, a);
                if (u === 0) return;
                if (u === 1) break;
              }
              a = Object.getPrototypeOf(a);
            }
            Qm(this, i, n);
          }
        }),
        (t.extend_ = function (n, i, o, a) {
          if (
            (a === void 0 && (a = !1),
            o === !0 && (o = this.defaultAnnotation_),
            o === !1)
          )
            return this.defineProperty_(n, i, a);
          var s = o.extend_(this, n, i, a);
          return s && Qm(this, o, n), s;
        }),
        (t.defineProperty_ = function (n, i, o) {
          o === void 0 && (o = !1), this.keysAtom_;
          try {
            mt();
            var a = this.delete_(n);
            if (!a) return a;
            if (ht(this)) {
              var s = pt(this, {
                object: this.proxy_ || this.target_,
                name: n,
                type: Br,
                newValue: i.value
              });
              if (!s) return null;
              var u = s.newValue;
              i.value !== u && (i = Fn({}, i, { value: u }));
            }
            if (o) {
              if (!Reflect.defineProperty(this.target_, n, i)) return !1;
            } else Yt(this.target_, n, i);
            this.notifyPropertyAddition_(n, i.value);
          } finally {
            yt();
          }
          return !0;
        }),
        (t.defineObservableProperty_ = function (n, i, o, a) {
          a === void 0 && (a = !1), this.keysAtom_;
          try {
            mt();
            var s = this.delete_(n);
            if (!s) return s;
            if (ht(this)) {
              var u = pt(this, {
                object: this.proxy_ || this.target_,
                name: n,
                type: Br,
                newValue: i
              });
              if (!u) return null;
              i = u.newValue;
            }
            var l = Um(n),
              c = {
                configurable: N.safeDescriptors ? this.isPlainObject_ : !0,
                enumerable: !0,
                get: l.get,
                set: l.set
              };
            if (a) {
              if (!Reflect.defineProperty(this.target_, n, c)) return !1;
            } else Yt(this.target_, n, c);
            var d = new xn(i, o, 'ObservableObject.key', !1);
            this.values_.set(n, d), this.notifyPropertyAddition_(n, d.value_);
          } finally {
            yt();
          }
          return !0;
        }),
        (t.defineComputedProperty_ = function (n, i, o) {
          o === void 0 && (o = !1), this.keysAtom_;
          try {
            mt();
            var a = this.delete_(n);
            if (!a) return a;
            if (ht(this)) {
              var s = pt(this, {
                object: this.proxy_ || this.target_,
                name: n,
                type: Br,
                newValue: void 0
              });
              if (!s) return null;
            }
            i.name || (i.name = 'ObservableObject.key'),
              (i.context = this.proxy_ || this.target_);
            var u = Um(n),
              l = {
                configurable: N.safeDescriptors ? this.isPlainObject_ : !0,
                enumerable: !1,
                get: u.get,
                set: u.set
              };
            if (o) {
              if (!Reflect.defineProperty(this.target_, n, l)) return !1;
            } else Yt(this.target_, n, l);
            this.values_.set(n, new Mt(i)),
              this.notifyPropertyAddition_(n, void 0);
          } finally {
            yt();
          }
          return !0;
        }),
        (t.delete_ = function (n, i) {
          if ((i === void 0 && (i = !1), this.keysAtom_, !vr(this.target_, n)))
            return !0;
          if (ht(this)) {
            var o = pt(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Bm
            });
            if (!o) return null;
          }
          try {
            var a;
            mt();
            var s = Pt(this),
              u = !1,
              l = this.values_.get(n),
              c = void 0;
            if (!l && (s || u)) {
              var d;
              c = (d = xu(this.target_, n)) == null ? void 0 : d.value;
            }
            if (i) {
              if (!Reflect.deleteProperty(this.target_, n)) return !1;
            } else delete this.target_[n];
            if (
              (l &&
                (this.values_.delete(n),
                l instanceof xn && (c = l.value_),
                z1(l)),
              this.keysAtom_.reportChanged(),
              (a = this.pendingKeys_) == null ||
                (a = a.get(n)) == null ||
                a.set(n in this.target_),
              s || u)
            ) {
              var f = {
                type: Bm,
                observableKind: 'object',
                object: this.proxy_ || this.target_,
                debugObjectName: this.name_,
                oldValue: c,
                name: n
              };
              s && At(this, f);
            }
          } finally {
            yt();
          }
          return !0;
        }),
        (t.observe_ = function (n, i) {
          return $a(this, n);
        }),
        (t.intercept_ = function (n) {
          return Va(this, n);
        }),
        (t.notifyPropertyAddition_ = function (n, i) {
          var o,
            a = Pt(this),
            s = !1;
          if (a || s) {
            var u =
              a || s
                ? {
                    type: Br,
                    observableKind: 'object',
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    name: n,
                    newValue: i
                  }
                : null;
            a && At(this, u);
          }
          (o = this.pendingKeys_) == null ||
            (o = o.get(n)) == null ||
            o.set(!0),
            this.keysAtom_.reportChanged();
        }),
        (t.ownKeys_ = function () {
          return this.keysAtom_.reportObserved(), zi(this.target_);
        }),
        (t.keys_ = function () {
          return this.keysAtom_.reportObserved(), Object.keys(this.target_);
        }),
        e
      );
    })();
  function Wn(e, t) {
    var r;
    if (vr(e, V)) return e;
    var n = (r = t == null ? void 0 : t.name) != null ? r : 'ObservableObject',
      i = new tw(e, new Map(), String(n), oT(t));
    return Fa(e, V, i), e;
  }
  var eN = Un('ObservableObjectAdministration', tw);
  function Um(e) {
    return (
      zm[e] ||
      (zm[e] = {
        get: function () {
          return this[V].getObservablePropValue_(e);
        },
        set: function (r) {
          return this[V].setObservablePropValue_(e, r);
        }
      })
    );
  }
  function ba(e) {
    return Sl(e) ? eN(e[V]) : !1;
  }
  function Qm(e, t, r) {
    var n;
    (n = e.target_[Wt]) == null || delete n[r];
  }
  var tN = nw(0),
    rN = (function () {
      var e = !1,
        t = {};
      return (
        Object.defineProperty(t, '0', {
          set: function () {
            e = !0;
          }
        }),
        (Object.create(t)[0] = 1),
        e === !1
      );
    })(),
    Ec = 0,
    rw = function () {};
  function nN(e, t) {
    Object.setPrototypeOf
      ? Object.setPrototypeOf(e.prototype, t)
      : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
  }
  nN(rw, Array.prototype);
  var Kh = (function (e) {
    function t(n, i, o, a) {
      var s;
      return (
        o === void 0 && (o = 'ObservableArray'),
        a === void 0 && (a = !1),
        (s = e.call(this) || this),
        cn(function () {
          var u = new Gh(o, i, a, !0);
          (u.proxy_ = s),
            b1(s, V, u),
            n && n.length && s.spliceWithArray(0, 0, n),
            rN && Object.defineProperty(s, '0', tN);
        }),
        s
      );
    }
    x1(t, e);
    var r = t.prototype;
    return (
      (r.concat = function () {
        this[V].atom_.reportObserved();
        for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
          o[a] = arguments[a];
        return Array.prototype.concat.apply(
          this.slice(),
          o.map(function (s) {
            return Tl(s) ? s.slice() : s;
          })
        );
      }),
      (r[Symbol.iterator] = function () {
        var n = this,
          i = 0;
        return Jh({
          next: function () {
            return i < n.length
              ? { value: n[i++], done: !1 }
              : { done: !0, value: void 0 };
          }
        });
      }),
      ro(t, [
        {
          key: 'length',
          get: function () {
            return this[V].getArrayLength_();
          },
          set: function (i) {
            this[V].setArrayLength_(i);
          }
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return 'Array';
          }
        }
      ])
    );
  })(rw);
  Object.entries(Du).forEach(function (e) {
    var t = e[0],
      r = e[1];
    t !== 'concat' && Fa(Kh.prototype, t, r);
  });
  function nw(e) {
    return {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return this[V].get_(e);
      },
      set: function (r) {
        this[V].set_(e, r);
      }
    };
  }
  function iN(e) {
    Yt(Kh.prototype, '' + e, nw(e));
  }
  function iw(e) {
    if (e > Ec) {
      for (var t = Ec; t < e + 100; t++) iN(t);
      Ec = e;
    }
  }
  iw(1e3);
  function oN(e, t, r) {
    return new Kh(e, t, r);
  }
  function Ui(e, t) {
    if (typeof e == 'object' && e !== null) {
      if (Tl(e)) return t !== void 0 && W(23), e[V].atom_;
      if (qt(e)) return e.atom_;
      if (qn(e)) {
        if (t === void 0) return e.keysAtom_;
        var r = e.data_.get(t) || e.hasMap_.get(t);
        return r || W(25, t, sd(e)), r;
      }
      if (ba(e)) {
        if (!t) return W(26);
        var n = e[V].values_.get(t);
        return n || W(27, t, sd(e)), n;
      }
      if (Uh(e) || Cl(e) || Nu(e)) return e;
    } else if (Lt(e) && Nu(e[V])) return e[V];
    W(28);
  }
  function ow(e, t) {
    if ((e || W(29), t !== void 0)) return ow(Ui(e, t));
    if (Uh(e) || Cl(e) || Nu(e) || qn(e) || qt(e)) return e;
    if (e[V]) return e[V];
    W(24, e);
  }
  function sd(e, t) {
    var r;
    if (t !== void 0) r = Ui(e, t);
    else {
      if (_a(e)) return e.name;
      ba(e) || qn(e) || qt(e) ? (r = ow(e)) : (r = Ui(e));
    }
    return r.name_;
  }
  function cn(e) {
    var t = Qn(),
      r = qh(!0);
    mt();
    try {
      return e();
    } finally {
      yt(), Wh(r), mr(t);
    }
  }
  var qm = El.toString;
  function Yh(e, t, r) {
    return r === void 0 && (r = -1), ud(e, t, r);
  }
  function ud(e, t, r, n, i) {
    if (e === t) return e !== 0 || 1 / e === 1 / t;
    if (e == null || t == null) return !1;
    if (e !== e) return t !== t;
    var o = typeof e;
    if (o !== 'function' && o !== 'object' && typeof t != 'object') return !1;
    var a = qm.call(e);
    if (a !== qm.call(t)) return !1;
    switch (a) {
      case '[object RegExp]':
      case '[object String]':
        return '' + e == '' + t;
      case '[object Number]':
        return +e != +e ? +t != +t : +e == 0 ? 1 / +e === 1 / t : +e == +t;
      case '[object Date]':
      case '[object Boolean]':
        return +e == +t;
      case '[object Symbol]':
        return (
          typeof Symbol < 'u' &&
          Symbol.valueOf.call(e) === Symbol.valueOf.call(t)
        );
      case '[object Map]':
      case '[object Set]':
        r >= 0 && r++;
        break;
    }
    (e = Wm(e)), (t = Wm(t));
    var s = a === '[object Array]';
    if (!s) {
      if (typeof e != 'object' || typeof t != 'object') return !1;
      var u = e.constructor,
        l = t.constructor;
      if (
        u !== l &&
        !(Lt(u) && u instanceof u && Lt(l) && l instanceof l) &&
        'constructor' in e &&
        'constructor' in t
      )
        return !1;
    }
    if (r === 0) return !1;
    r < 0 && (r = -1), (n = n || []), (i = i || []);
    for (var c = n.length; c--; ) if (n[c] === e) return i[c] === t;
    if ((n.push(e), i.push(t), s)) {
      if (((c = e.length), c !== t.length)) return !1;
      for (; c--; ) if (!ud(e[c], t[c], r - 1, n, i)) return !1;
    } else {
      var d = Object.keys(e),
        f = d.length;
      if (Object.keys(t).length !== f) return !1;
      for (var v = 0; v < f; v++) {
        var y = d[v];
        if (!(vr(t, y) && ud(e[y], t[y], r - 1, n, i))) return !1;
      }
    }
    return n.pop(), i.pop(), !0;
  }
  function Wm(e) {
    return Tl(e)
      ? e.slice()
      : to(e) || qn(e) || ur(e) || qt(e)
      ? Array.from(e.entries())
      : e;
  }
  var Hm,
    aN = ((Hm = bl().Iterator) == null ? void 0 : Hm.prototype) || {};
  function Jh(e) {
    return (e[Symbol.iterator] = sN), Object.assign(Object.create(aN), e);
  }
  function sN() {
    return this;
  }
  ['Symbol', 'Map', 'Set'].forEach(function (e) {
    var t = bl();
    typeof t[e] > 'u' &&
      W("MobX requires global '" + e + "' to be available or polyfilled");
  });
  typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == 'object' &&
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
      spy: ST,
      extras: { getDebugName: sd },
      $mobx: V
    });
  if (!b.exports.useState)
    throw new Error('mobx-react-lite requires React with Hooks support');
  if (!qT)
    throw new Error(
      'mobx-react-lite@3 requires mobx at least version 6 to be available'
    );
  function uN(e) {
    e();
  }
  function lN(e) {
    e || (e = uN), MT({ reactionScheduler: e });
  }
  function cN(e) {
    return jT(e);
  }
  var fN = 1e4,
    dN = 1e4,
    hN = (function () {
      function e(t) {
        var r = this;
        Object.defineProperty(this, 'finalize', {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: t
        }),
          Object.defineProperty(this, 'registrations', {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: new Map()
          }),
          Object.defineProperty(this, 'sweepTimeout', {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
          }),
          Object.defineProperty(this, 'sweep', {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: function (n) {
              n === void 0 && (n = fN),
                clearTimeout(r.sweepTimeout),
                (r.sweepTimeout = void 0);
              var i = Date.now();
              r.registrations.forEach(function (o, a) {
                i - o.registeredAt >= n &&
                  (r.finalize(o.value), r.registrations.delete(a));
              }),
                r.registrations.size > 0 && r.scheduleSweep();
            }
          }),
          Object.defineProperty(this, 'finalizeAllImmediately', {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: function () {
              r.sweep(0);
            }
          });
      }
      return (
        Object.defineProperty(e.prototype, 'register', {
          enumerable: !1,
          configurable: !0,
          writable: !0,
          value: function (t, r, n) {
            this.registrations.set(n, { value: r, registeredAt: Date.now() }),
              this.scheduleSweep();
          }
        }),
        Object.defineProperty(e.prototype, 'unregister', {
          enumerable: !1,
          configurable: !0,
          writable: !0,
          value: function (t) {
            this.registrations.delete(t);
          }
        }),
        Object.defineProperty(e.prototype, 'scheduleSweep', {
          enumerable: !1,
          configurable: !0,
          writable: !0,
          value: function () {
            this.sweepTimeout === void 0 &&
              (this.sweepTimeout = setTimeout(this.sweep, dN));
          }
        }),
        e
      );
    })(),
    pN = typeof FinalizationRegistry < 'u' ? FinalizationRegistry : hN,
    ld = new pN(function (e) {
      var t;
      (t = e.reaction) === null || t === void 0 || t.dispose(),
        (e.reaction = null);
    }),
    aw = { exports: {} },
    sw = {};
  /**
   * @license React
   * use-sync-external-store-shim.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Qi = b.exports;
  function vN(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var mN = typeof Object.is == 'function' ? Object.is : vN,
    yN = Qi.useState,
    gN = Qi.useEffect,
    _N = Qi.useLayoutEffect,
    wN = Qi.useDebugValue;
  function bN(e, t) {
    var r = t(),
      n = yN({ inst: { value: r, getSnapshot: t } }),
      i = n[0].inst,
      o = n[1];
    return (
      _N(
        function () {
          (i.value = r), (i.getSnapshot = t), Sc(i) && o({ inst: i });
        },
        [e, r, t]
      ),
      gN(
        function () {
          return (
            Sc(i) && o({ inst: i }),
            e(function () {
              Sc(i) && o({ inst: i });
            })
          );
        },
        [e]
      ),
      wN(r),
      r
    );
  }
  function Sc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !mN(e, r);
    } catch {
      return !0;
    }
  }
  function EN(e, t) {
    return t();
  }
  var SN =
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
      ? EN
      : bN;
  sw.useSyncExternalStore =
    Qi.useSyncExternalStore !== void 0 ? Qi.useSyncExternalStore : SN;
  (function (e) {
    e.exports = sw;
  })(aw);
  function Gm(e) {
    e.reaction = new Or('observer'.concat(e.name), function () {
      var t;
      (e.stateVersion = Symbol()),
        (t = e.onStoreChange) === null || t === void 0 || t.call(e);
    });
  }
  function xN(e, t) {
    t === void 0 && (t = 'observed');
    var r = qs.useRef(null);
    if (!r.current) {
      var n = {
        reaction: null,
        onStoreChange: null,
        stateVersion: Symbol(),
        name: t,
        subscribe: function (s) {
          return (
            ld.unregister(n),
            (n.onStoreChange = s),
            n.reaction || (Gm(n), (n.stateVersion = Symbol())),
            function () {
              var u;
              (n.onStoreChange = null),
                (u = n.reaction) === null || u === void 0 || u.dispose(),
                (n.reaction = null);
            }
          );
        },
        getSnapshot: function () {
          return n.stateVersion;
        }
      };
      r.current = n;
    }
    var i = r.current;
    i.reaction || (Gm(i), ld.register(r, i, i)),
      qs.useDebugValue(i.reaction, cN),
      aw.exports.useSyncExternalStore(
        i.subscribe,
        i.getSnapshot,
        i.getSnapshot
      );
    var o, a;
    if (
      (i.reaction.track(function () {
        try {
          o = e();
        } catch (s) {
          a = s;
        }
      }),
      a)
    )
      throw a;
    return o;
  }
  var xc,
    Oc,
    uw = typeof Symbol == 'function' && Symbol.for,
    ON =
      (Oc =
        (xc = Object.getOwnPropertyDescriptor(function () {}, 'name')) ===
          null || xc === void 0
          ? void 0
          : xc.configurable) !== null && Oc !== void 0
        ? Oc
        : !1,
    Km = uw
      ? Symbol.for('react.forward_ref')
      : typeof b.exports.forwardRef == 'function' &&
        b.exports.forwardRef(function (e) {
          return null;
        }).$$typeof,
    Ym = uw
      ? Symbol.for('react.memo')
      : typeof b.exports.memo == 'function' &&
        b.exports.memo(function (e) {
          return null;
        }).$$typeof;
  function lw(e, t) {
    var r;
    if (Ym && e.$$typeof === Ym)
      throw new Error(
        "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you."
      );
    var n =
        (r = t == null ? void 0 : t.forwardRef) !== null && r !== void 0
          ? r
          : !1,
      i = e,
      o = e.displayName || e.name;
    if (
      Km &&
      e.$$typeof === Km &&
      ((n = !0), (i = e.render), typeof i != 'function')
    )
      throw new Error(
        '[mobx-react-lite] `render` property of ForwardRef was not a function'
      );
    var a = function (s, u) {
      return xN(function () {
        return i(s, u);
      }, o);
    };
    return (
      (a.displayName = e.displayName),
      ON &&
        Object.defineProperty(a, 'name', {
          value: e.name,
          writable: !0,
          configurable: !0
        }),
      e.contextTypes && (a.contextTypes = e.contextTypes),
      n && (a = b.exports.forwardRef(a)),
      (a = b.exports.memo(a)),
      CN(e, a),
      a
    );
  }
  var kN = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
  function CN(e, t) {
    Object.keys(e).forEach(function (r) {
      kN[r] ||
        Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  var kc;
  lN(vd.exports.unstable_batchedUpdates);
  kc = ld.finalizeAllImmediately;
  class TN {
    constructor() {
      Zh(this, 'favorites', []);
      WT(this);
    }
    addCarToFavorites(t) {
      if (this.favorites.some(r => r.id === t.id)) {
        To.error(
          '\u041C\u0430\u0448\u0438\u043D\u0430 \u0443\u0436\u0435 \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u043C!'
        );
        return;
      }
      (this.favorites = [...this.favorites, t]),
        To.success(
          '\u041C\u0430\u0448\u0438\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0430 \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435!'
        );
    }
    removeCarFromFavorites(t) {
      const r = this.favorites.length;
      if (
        ((this.favorites = this.favorites.filter(n => n.id !== t)),
        this.favorites.length === r)
      ) {
        To.error(
          '\u041C\u0430\u0448\u0438\u043D\u044B \u043D\u0435 \u0431\u044B\u043B\u043E \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u043C!'
        );
        return;
      }
      To.success(
        '\u041C\u0430\u0448\u0438\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u0430 \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E!'
      );
    }
  }
  const Ti = new TN(),
    NN = lw(({ car: e }) => {
      const [t, r] = b.exports.useState(
        !!Ti.favorites.find(o => o.id === e.id)
      );
      function n(o) {
        o ||
          To.error(
            '\u0414\u0430\u043D\u043D\u043E\u0433\u043E \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430 \u0441\u0435\u0439\u0447\u0430\u0441 \u043D\u0435\u0442 \u0432 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438.'
          );
      }
      function i() {
        r(!t), t ? Ti.removeCarFromFavorites(e.id) : Ti.addCarToFavorites(e);
      }
      return Q('div', {
        onClick: () => n(e.availability),
        className: `car-card ${e.availability ? '' : 'car-card--outstock'}`,
        children: [
          Q(zr, {
            to: `/${e.availability ? `cars/${e.id}` : ''}`,
            className: 'car-card__photo photo',
            children: [
              !e.availability &&
                L('p', {
                  className: 'photo__stock',
                  children:
                    '\u041D\u0435\u0442 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438'
                }),
              L('img', {
                src: `http://localhost:4000${e.img_src}`,
                alt: e.brand,
                className: `photo__img ${
                  e.availability ? '' : 'photo__img--outstock'
                }`
              })
            ]
          }),
          Q('div', {
            className: 'car-card__info info',
            children: [
              L('h3', {
                className: 'info__mark',
                children: d3([e.brand, e.model], 15)
              }),
              Q('div', {
                className: 'info__box box',
                children: [
                  Q('span', {
                    className: 'box__model-year',
                    children: ['\u0413\u043E\u0434: ', e.model_year]
                  }),
                  Q('span', {
                    className: 'box__color',
                    children: ['\u0426\u0432\u0435\u0442: ', e.color]
                  })
                ]
              }),
              Q('p', {
                className: 'info__price',
                children: ['\u043E\u0442 ', e.price]
              }),
              Q('div', {
                className: 'info__actions actions',
                children: [
                  L(v1, {
                    availability: e.availability,
                    children: '\u041A\u0443\u043F\u0438\u0442\u044C'
                  }),
                  L('button', {
                    onClick: i,
                    disabled: !e.availability,
                    className: 'actions__button button',
                    children: t
                      ? L(sg, { className: 'button__icon' })
                      : L(f3, { className: 'button__icon' })
                  })
                ]
              })
            ]
          })
        ]
      });
    }),
    DN = An`
  query GetAllCars {
    cars {
      id
      brand
      model
      availability
      color
      description
      img_src
      model_year
      price
    }
  }
`,
    RN = An`
  query GetCarByID($id: Int!) {
    car(id: $id) {
      id
      brand
      model
      availability
      color
      description
      img_src
      model_year
      price
    }
  }
`,
    PN = () => a1(DN),
    AN = '_wrapper_p5rsh_5',
    IN = { wrapper: AN },
    Xh = ({ children: e }) => L('div', { className: IN.wrapper, children: e }),
    FN = () => {
      const { data: e, loading: t } = PN(),
        [r, n] = b.exports.useState([]);
      return (
        b.exports.useEffect(() => {
          t || n(e != null && e.cars ? e.cars : []);
        }, [t]),
        L(Xh, {
          children: Q('main', {
            className: 'main',
            children: [
              Q('div', {
                className: 'main__actions actions',
                children: [
                  L(u3, { cars: r, setCars: n }),
                  L(c3, {
                    setCars: n,
                    data: e != null && e.cars ? e.cars : []
                  })
                ]
              }),
              L('div', {
                className: 'main__cars',
                children: t ? 'Loading...' : r.map(i => L(NN, { car: i }, i.id))
              })
            ]
          })
        })
      );
    },
    LN = e =>
      b.exports.createElement(
        'svg',
        {
          width: '1em',
          height: '1em',
          viewBox: '0 0 18 19',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          ...e
        },
        b.exports.createElement('path', {
          d: 'M2 17C2 18.103 2.897 19 4 19H14C15.103 19 16 18.103 16 17V5H2V17ZM4 7H14L14.002 17H4V7Z',
          fill: '#D73737'
        }),
        b.exports.createElement('path', {
          d: 'M12 2V0H6V2H0V4H18V2H12Z',
          fill: '#D73737'
        }),
        b.exports.createElement('path', {
          d: 'M8 9H6V15H8V9Z',
          fill: '#D73737'
        }),
        b.exports.createElement('path', {
          d: 'M12 9H10V15H12V9Z',
          fill: '#D73737'
        })
      ),
    MN = lw(() =>
      L('div', {
        className: 'favorites__items',
        children: Ti.favorites.map(e =>
          Q(
            'div',
            {
              className: 'favorites__item',
              children: [
                L('div', {
                  className: 'favorites__img-container',
                  children: L('img', {
                    className: 'favorites__img',
                    src: `http://localhost:4000${e.img_src}`,
                    alt: `${e.brand} ${e.model}`
                  })
                }),
                Q('div', {
                  className: 'favorites__info',
                  children: [
                    Q('h3', {
                      className: 'favorites__car-title',
                      children: [e.brand, ' ', e.model]
                    }),
                    L('p', {
                      className: 'favorites__description',
                      children: e.description
                    }),
                    Q('div', {
                      className: 'favorites__specs',
                      children: [
                        Q('p', {
                          className: 'favorites__spec',
                          children: ['\u0413\u043E\u0434: ', e.model_year]
                        }),
                        Q('p', {
                          className: 'favorites__spec',
                          children: ['\u0426\u0432\u0435\u0442: ', e.color]
                        }),
                        Q('p', {
                          className: 'favorites__spec',
                          children: ['\u043E\u0442 ', e.price, ' \u20BD']
                        })
                      ]
                    }),
                    Q('div', {
                      className: 'favorites__actions',
                      children: [
                        L(v1, {
                          width: 259,
                          children:
                            '\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0438\u044E'
                        }),
                        L('button', {
                          className: 'favorites__delete-button',
                          onClick: () => Ti.removeCarFromFavorites(e.id),
                          children: L(LN, {
                            className: 'favorites__delete-icon'
                          })
                        })
                      ]
                    })
                  ]
                })
              ]
            },
            e.id
          )
        )
      })
    ),
    jN = () =>
      L(Xh, {
        children: Q('main', {
          className: 'favorites',
          children: [
            Q('h1', {
              className: 'favorites__title',
              children: [
                '\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0442\u043E\u0432\u0430\u0440\u044B \u2014 ',
                Ti.favorites.length,
                ' \u043F\u043E\u0437\u0438\u0446\u0438\u0439'
              ]
            }),
            L(MN, {})
          ]
        })
      }),
    VN = () => {
      const e = Cx();
      return a1(RN, { variables: { id: e.id ? +e.id : null } });
    },
    $N = () => {
      var r, n, i, o;
      const { data: e, loading: t } = VN();
      return L(Xh, {
        children: L('main', {
          className: 'main car',
          children: t
            ? 'Loading...'
            : Q('div', {
                className: 'main__header-info header-info',
                children: [
                  L('div', {
                    className: 'header-info__box box',
                    children: L('img', {
                      src: `http://localhost:4000${
                        (r = e == null ? void 0 : e.car) == null
                          ? void 0
                          : r.img_src
                      }`,
                      alt: ''
                    })
                  }),
                  Q('div', {
                    className: 'header-info__box box',
                    children: [
                      Q('h1', {
                        className: 'box__title',
                        children: [
                          (n = e == null ? void 0 : e.car) == null
                            ? void 0
                            : n.brand,
                          ' ',
                          (i = e == null ? void 0 : e.car) == null
                            ? void 0
                            : i.model
                        ]
                      }),
                      L('p', {
                        className: 'box__description',
                        children:
                          (o = e == null ? void 0 : e.car) == null
                            ? void 0
                            : o.description
                      }),
                      L('blockquote', {
                        children:
                          '\u0427\u0442\u043E-\u0442\u043E \u0442\u0430\u043C \u0435\u0449\u0451...'
                      })
                    ]
                  })
                ]
              })
        })
      });
    },
    zN = () =>
      Q('main', {
        className: 'not-found',
        children: [
          L('h1', {
            className: 'not-found__title',
            children:
              '\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430!'
          }),
          L('p', {
            className: 'not-found__text',
            children: '\u041E\u0448\u0438\u0431\u043A\u0430 404!'
          }),
          L(zr, {
            className: 'not-found__link',
            to: '/',
            children:
              '\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443'
          })
        ]
      }),
    BN = [
      { path: '/', element: L(FN, {}) },
      { path: '/favorites', element: L(jN, {}) },
      { path: '/cars/:id', element: L($N, {}) },
      { path: '*', element: L(zN, {}) }
    ],
    UN = () => {
      const e = new e1({ uri: 'http://localhost:4000/api', cache: new X_() });
      return L(J2, {
        client: e,
        children: Q('div', {
          className: 'wrapper',
          children: [
            L(o3, { position: 'top-center' }),
            L(SO, {}),
            L(Bx, {
              children: BN.map(t =>
                L(Fg, { path: t.path, element: t.element }, t.path)
              )
            })
          ]
        })
      });
    },
    cw = 'root',
    fw = document.getElementById(cw);
  if (!fw)
    throw new Error(
      `\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D Dom \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0441 ${cw} `
    );
  const QN = ag(fw);
  QN.render(L(qs.StrictMode, { children: L(hO, { children: L(UN, {}) }) }));
});
export default qN();
