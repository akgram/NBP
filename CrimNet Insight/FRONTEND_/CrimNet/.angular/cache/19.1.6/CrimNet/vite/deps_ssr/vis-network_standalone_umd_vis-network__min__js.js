import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  __commonJS
} from "./chunk-YHCV7DAQ.js";

// node_modules/vis-network/standalone/umd/vis-network.min.js
var require_vis_network_min = __commonJS({
  "node_modules/vis-network/standalone/umd/vis-network.min.js"(exports, module) {
    !function(g, t) {
      "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((g = "undefined" != typeof globalThis ? globalThis : g || self).vis = g.vis || {});
    }(exports, function(g) {
      var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
      function A(g2) {
        return g2 && g2.__esModule && Object.prototype.hasOwnProperty.call(g2, "default") ? g2.default : g2;
      }
      var e = function(g2) {
        return g2 && g2.Math === Math && g2;
      }, C = e("object" == typeof globalThis && globalThis) || e("object" == typeof window && window) || e("object" == typeof self && self) || e("object" == typeof t && t) || /* @__PURE__ */ function() {
        return this;
      }() || t || Function("return this")(), I = function(g2) {
        try {
          return !!g2();
        } catch (g3) {
          return true;
        }
      }, i = !I(function() {
        var g2 = function() {
        }.bind();
        return "function" != typeof g2 || g2.hasOwnProperty("prototype");
      }), o = i, n = Function.prototype, r = n.apply, s = n.call, a = "object" == typeof Reflect && Reflect.apply || (o ? s.bind(r) : function() {
        return s.apply(r, arguments);
      }), d = i, h = Function.prototype, l = h.call, c = d && h.bind.bind(l, l), u = d ? c : function(g2) {
        return function() {
          return l.apply(g2, arguments);
        };
      }, p = u, f = p({}.toString), v = p("".slice), y = function(g2) {
        return v(f(g2), 8, -1);
      }, m = y, b = u, w = function(g2) {
        if ("Function" === m(g2)) return b(g2);
      }, k = "object" == typeof document && document.all, x = {
        all: k,
        IS_HTMLDDA: void 0 === k && void 0 !== k
      }, E = x.all, O = x.IS_HTMLDDA ? function(g2) {
        return "function" == typeof g2 || g2 === E;
      } : function(g2) {
        return "function" == typeof g2;
      }, T = {}, D = !I(function() {
        return 7 !== Object.defineProperty({}, 1, {
          get: function() {
            return 7;
          }
        })[1];
      }), N = i, R = Function.prototype.call, P = N ? R.bind(R) : function() {
        return R.apply(R, arguments);
      }, M = {}, B = {}.propertyIsEnumerable, z = Object.getOwnPropertyDescriptor, S = z && !B.call({
        1: 2
      }, 1);
      M.f = S ? function(g2) {
        var t2 = z(this, g2);
        return !!t2 && t2.enumerable;
      } : B;
      var Z, F, G = function(g2, t2) {
        return {
          enumerable: !(1 & g2),
          configurable: !(2 & g2),
          writable: !(4 & g2),
          value: t2
        };
      }, j = I, L = y, V = Object, Y = u("".split), W = j(function() {
        return !V("z").propertyIsEnumerable(0);
      }) ? function(g2) {
        return "String" === L(g2) ? Y(g2, "") : V(g2);
      } : V, Q = function(g2) {
        return null == g2;
      }, U = Q, _ = TypeError, K = function(g2) {
        if (U(g2)) throw new _("Can't call method on " + g2);
        return g2;
      }, H = W, X = K, J = function(g2) {
        return H(X(g2));
      }, q = O, $ = x.all, gg = x.IS_HTMLDDA ? function(g2) {
        return "object" == typeof g2 ? null !== g2 : q(g2) || g2 === $;
      } : function(g2) {
        return "object" == typeof g2 ? null !== g2 : q(g2);
      }, tg = {}, Ag = tg, eg = C, Cg = O, Ig = function(g2) {
        return Cg(g2) ? g2 : void 0;
      }, ig = function(g2, t2) {
        return arguments.length < 2 ? Ig(Ag[g2]) || Ig(eg[g2]) : Ag[g2] && Ag[g2][t2] || eg[g2] && eg[g2][t2];
      }, og = u({}.isPrototypeOf), ng = "undefined" != typeof navigator && String(navigator.userAgent) || "", rg = C, sg = ng, ag = rg.process, dg = rg.Deno, hg = ag && ag.versions || dg && dg.version, lg = hg && hg.v8;
      lg && (F = (Z = lg.split("."))[0] > 0 && Z[0] < 4 ? 1 : +(Z[0] + Z[1])), !F && sg && (!(Z = sg.match(/Edge\/(\d+)/)) || Z[1] >= 74) && (Z = sg.match(/Chrome\/(\d+)/)) && (F = +Z[1]);
      var cg = F, ug = cg, pg = I, fg = C.String, vg = !!Object.getOwnPropertySymbols && !pg(function() {
        var g2 = Symbol("symbol detection");
        return !fg(g2) || !(Object(g2) instanceof Symbol) || !Symbol.sham && ug && ug < 41;
      }), yg = vg && !Symbol.sham && "symbol" == typeof Symbol.iterator, mg = ig, bg = O, wg = og, kg = Object, xg = yg ? function(g2) {
        return "symbol" == typeof g2;
      } : function(g2) {
        var t2 = mg("Symbol");
        return bg(t2) && wg(t2.prototype, kg(g2));
      }, Eg = String, Og = function(g2) {
        try {
          return Eg(g2);
        } catch (g3) {
          return "Object";
        }
      }, Tg = O, Dg = Og, Ng = TypeError, Rg = function(g2) {
        if (Tg(g2)) return g2;
        throw new Ng(Dg(g2) + " is not a function");
      }, Pg = Rg, Mg = Q, Bg = function(g2, t2) {
        var A2 = g2[t2];
        return Mg(A2) ? void 0 : Pg(A2);
      }, zg = P, Sg = O, Zg = gg, Fg = TypeError, Gg = {
        exports: {}
      }, jg = C, Lg = Object.defineProperty, Vg = function(g2, t2) {
        try {
          Lg(jg, g2, {
            value: t2,
            configurable: true,
            writable: true
          });
        } catch (A2) {
          jg[g2] = t2;
        }
        return t2;
      }, Yg = "__core-js_shared__", Wg = C[Yg] || Vg(Yg, {}), Qg = Wg;
      (Gg.exports = function(g2, t2) {
        return Qg[g2] || (Qg[g2] = void 0 !== t2 ? t2 : {});
      })("versions", []).push({
        version: "3.33.0",
        mode: "pure",
        copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE",
        source: "https://github.com/zloirock/core-js"
      });
      var Ug = Gg.exports, _g = K, Kg = Object, Hg = function(g2) {
        return Kg(_g(g2));
      }, Xg = Hg, Jg = u({}.hasOwnProperty), qg = Object.hasOwn || function(g2, t2) {
        return Jg(Xg(g2), t2);
      }, $g = u, gt = 0, tt = Math.random(), At = $g(1 .toString), et = function(g2) {
        return "Symbol(" + (void 0 === g2 ? "" : g2) + ")_" + At(++gt + tt, 36);
      }, Ct = Ug, It = qg, it = et, ot = vg, nt = yg, rt = C.Symbol, st = Ct("wks"), at = nt ? rt.for || rt : rt && rt.withoutSetter || it, dt = function(g2) {
        return It(st, g2) || (st[g2] = ot && It(rt, g2) ? rt[g2] : at("Symbol." + g2)), st[g2];
      }, ht = P, lt = gg, ct = xg, ut = Bg, pt = function(g2, t2) {
        var A2, e2;
        if ("string" === t2 && Sg(A2 = g2.toString) && !Zg(e2 = zg(A2, g2))) return e2;
        if (Sg(A2 = g2.valueOf) && !Zg(e2 = zg(A2, g2))) return e2;
        if ("string" !== t2 && Sg(A2 = g2.toString) && !Zg(e2 = zg(A2, g2))) return e2;
        throw new Fg("Can't convert object to primitive value");
      }, ft = TypeError, vt = dt("toPrimitive"), yt = function(g2, t2) {
        if (!lt(g2) || ct(g2)) return g2;
        var A2, e2 = ut(g2, vt);
        if (e2) {
          if (void 0 === t2 && (t2 = "default"), A2 = ht(e2, g2, t2), !lt(A2) || ct(A2)) return A2;
          throw new ft("Can't convert object to primitive value");
        }
        return void 0 === t2 && (t2 = "number"), pt(g2, t2);
      }, mt = xg, bt = function(g2) {
        var t2 = yt(g2, "string");
        return mt(t2) ? t2 : t2 + "";
      }, wt = gg, kt = C.document, xt = wt(kt) && wt(kt.createElement), Et = function(g2) {
        return xt ? kt.createElement(g2) : {};
      }, Ot = Et, Tt = !D && !I(function() {
        return 7 !== Object.defineProperty(Ot("div"), "a", {
          get: function() {
            return 7;
          }
        }).a;
      }), Dt = D, Nt = P, Rt = M, Pt = G, Mt = J, Bt = bt, zt = qg, St = Tt, Zt = Object.getOwnPropertyDescriptor;
      T.f = Dt ? Zt : function(g2, t2) {
        if (g2 = Mt(g2), t2 = Bt(t2), St) try {
          return Zt(g2, t2);
        } catch (g3) {
        }
        if (zt(g2, t2)) return Pt(!Nt(Rt.f, g2, t2), g2[t2]);
      };
      var Ft = I, Gt = O, jt = /#|\.prototype\./, Lt = function(g2, t2) {
        var A2 = Yt[Vt(g2)];
        return A2 === Qt || A2 !== Wt && (Gt(t2) ? Ft(t2) : !!t2);
      }, Vt = Lt.normalize = function(g2) {
        return String(g2).replace(jt, ".").toLowerCase();
      }, Yt = Lt.data = {}, Wt = Lt.NATIVE = "N", Qt = Lt.POLYFILL = "P", Ut = Lt, _t = Rg, Kt = i, Ht = w(w.bind), Xt = function(g2, t2) {
        return _t(g2), void 0 === t2 ? g2 : Kt ? Ht(g2, t2) : function() {
          return g2.apply(t2, arguments);
        };
      }, Jt = {}, qt = D && I(function() {
        return 42 !== Object.defineProperty(function() {
        }, "prototype", {
          value: 42,
          writable: false
        }).prototype;
      }), $t = gg, gA = String, tA = TypeError, AA = function(g2) {
        if ($t(g2)) return g2;
        throw new tA(gA(g2) + " is not an object");
      }, eA = D, CA = Tt, IA = qt, iA = AA, oA = bt, nA = TypeError, rA = Object.defineProperty, sA = Object.getOwnPropertyDescriptor, aA = "enumerable", dA = "configurable", hA = "writable";
      Jt.f = eA ? IA ? function(g2, t2, A2) {
        if (iA(g2), t2 = oA(t2), iA(A2), "function" == typeof g2 && "prototype" === t2 && "value" in A2 && hA in A2 && !A2[hA]) {
          var e2 = sA(g2, t2);
          e2 && e2[hA] && (g2[t2] = A2.value, A2 = {
            configurable: dA in A2 ? A2[dA] : e2[dA],
            enumerable: aA in A2 ? A2[aA] : e2[aA],
            writable: false
          });
        }
        return rA(g2, t2, A2);
      } : rA : function(g2, t2, A2) {
        if (iA(g2), t2 = oA(t2), iA(A2), CA) try {
          return rA(g2, t2, A2);
        } catch (g3) {
        }
        if ("get" in A2 || "set" in A2) throw new nA("Accessors not supported");
        return "value" in A2 && (g2[t2] = A2.value), g2;
      };
      var lA = Jt, cA = G, uA = D ? function(g2, t2, A2) {
        return lA.f(g2, t2, cA(1, A2));
      } : function(g2, t2, A2) {
        return g2[t2] = A2, g2;
      }, pA = C, fA = a, vA = w, yA = O, mA = T.f, bA = Ut, wA = tg, kA = Xt, xA = uA, EA = qg, OA = function(g2) {
        var t2 = function(A2, e2, C2) {
          if (this instanceof t2) {
            switch (arguments.length) {
              case 0:
                return new g2();
              case 1:
                return new g2(A2);
              case 2:
                return new g2(A2, e2);
            }
            return new g2(A2, e2, C2);
          }
          return fA(g2, this, arguments);
        };
        return t2.prototype = g2.prototype, t2;
      }, TA = function(g2, t2) {
        var A2, e2, C2, I2, i2, o2, n2, r2, s2, a2 = g2.target, d2 = g2.global, h2 = g2.stat, l2 = g2.proto, c2 = d2 ? pA : h2 ? pA[a2] : (pA[a2] || {}).prototype, u2 = d2 ? wA : wA[a2] || xA(wA, a2, {})[a2], p2 = u2.prototype;
        for (I2 in t2) e2 = !(A2 = bA(d2 ? I2 : a2 + (h2 ? "." : "#") + I2, g2.forced)) && c2 && EA(c2, I2), o2 = u2[I2], e2 && (n2 = g2.dontCallGetSet ? (s2 = mA(c2, I2)) && s2.value : c2[I2]), i2 = e2 && n2 ? n2 : t2[I2], e2 && typeof o2 == typeof i2 || (r2 = g2.bind && e2 ? kA(i2, pA) : g2.wrap && e2 ? OA(i2) : l2 && yA(i2) ? vA(i2) : i2, (g2.sham || i2 && i2.sham || o2 && o2.sham) && xA(r2, "sham", true), xA(u2, I2, r2), l2 && (EA(wA, C2 = a2 + "Prototype") || xA(wA, C2, {}), xA(wA[C2], I2, i2), g2.real && p2 && (A2 || !p2[I2]) && xA(p2, I2, i2)));
      }, DA = Math.ceil, NA = Math.floor, RA = Math.trunc || function(g2) {
        var t2 = +g2;
        return (t2 > 0 ? NA : DA)(t2);
      }, PA = function(g2) {
        var t2 = +g2;
        return t2 != t2 || 0 === t2 ? 0 : RA(t2);
      }, MA = PA, BA = Math.max, zA = Math.min, SA = function(g2, t2) {
        var A2 = MA(g2);
        return A2 < 0 ? BA(A2 + t2, 0) : zA(A2, t2);
      }, ZA = PA, FA = Math.min, GA = function(g2) {
        return g2 > 0 ? FA(ZA(g2), 9007199254740991) : 0;
      }, jA = function(g2) {
        return GA(g2.length);
      }, LA = J, VA = SA, YA = jA, WA = function(g2) {
        return function(t2, A2, e2) {
          var C2, I2 = LA(t2), i2 = YA(I2), o2 = VA(e2, i2);
          if (g2 && A2 != A2) {
            for (; i2 > o2; ) if ((C2 = I2[o2++]) != C2) return true;
          } else for (; i2 > o2; o2++) if ((g2 || o2 in I2) && I2[o2] === A2) return g2 || o2 || 0;
          return !g2 && -1;
        };
      }, QA = {
        includes: WA(true),
        indexOf: WA(false)
      }, UA = {}, _A = qg, KA = J, HA = QA.indexOf, XA = UA, JA = u([].push), qA = function(g2, t2) {
        var A2, e2 = KA(g2), C2 = 0, I2 = [];
        for (A2 in e2) !_A(XA, A2) && _A(e2, A2) && JA(I2, A2);
        for (; t2.length > C2; ) _A(e2, A2 = t2[C2++]) && (~HA(I2, A2) || JA(I2, A2));
        return I2;
      }, $A = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], ge = qA, te = $A, Ae = Object.keys || function(g2) {
        return ge(g2, te);
      }, ee = {};
      ee.f = Object.getOwnPropertySymbols;
      var Ce = D, Ie = u, ie = P, oe = I, ne = Ae, re = ee, se = M, ae = Hg, de = W, he = Object.assign, le = Object.defineProperty, ce = Ie([].concat), ue = !he || oe(function() {
        if (Ce && 1 !== he({
          b: 1
        }, he(le({}, "a", {
          enumerable: true,
          get: function() {
            le(this, "b", {
              value: 3,
              enumerable: false
            });
          }
        }), {
          b: 2
        })).b) return true;
        var g2 = {}, t2 = {}, A2 = Symbol("assign detection"), e2 = "abcdefghijklmnopqrst";
        return g2[A2] = 7, e2.split("").forEach(function(g3) {
          t2[g3] = g3;
        }), 7 !== he({}, g2)[A2] || ne(he({}, t2)).join("") !== e2;
      }) ? function(g2, t2) {
        for (var A2 = ae(g2), e2 = arguments.length, C2 = 1, I2 = re.f, i2 = se.f; e2 > C2; ) for (var o2, n2 = de(arguments[C2++]), r2 = I2 ? ce(ne(n2), I2(n2)) : ne(n2), s2 = r2.length, a2 = 0; s2 > a2; ) o2 = r2[a2++], Ce && !ie(i2, n2, o2) || (A2[o2] = n2[o2]);
        return A2;
      } : he, pe = ue;
      TA({
        target: "Object",
        stat: true,
        arity: 2,
        forced: Object.assign !== pe
      }, {
        assign: pe
      });
      var fe = A(tg.Object.assign), ve = u([].slice), ye = u, me = Rg, be = gg, we = qg, ke = ve, xe = i, Ee = Function, Oe = ye([].concat), Te = ye([].join), De = {}, Ne = xe ? Ee.bind : function(g2) {
        var t2 = me(this), A2 = t2.prototype, e2 = ke(arguments, 1), C2 = function() {
          var A3 = Oe(e2, ke(arguments));
          return this instanceof C2 ? function(g3, t3, A4) {
            if (!we(De, t3)) {
              for (var e3 = [], C3 = 0; C3 < t3; C3++) e3[C3] = "a[" + C3 + "]";
              De[t3] = Ee("C,a", "return new C(" + Te(e3, ",") + ")");
            }
            return De[t3](g3, A4);
          }(t2, A3.length, A3) : t2.apply(g2, A3);
        };
        return be(A2) && (C2.prototype = A2), C2;
      }, Re = Ne;
      TA({
        target: "Function",
        proto: true,
        forced: Function.bind !== Re
      }, {
        bind: Re
      });
      var Pe = tg, Me = function(g2) {
        return Pe[g2 + "Prototype"];
      }, Be = Me("Function").bind, ze = og, Se = Be, Ze = Function.prototype, Fe = function(g2) {
        var t2 = g2.bind;
        return g2 === Ze || ze(Ze, g2) && t2 === Ze.bind ? Se : t2;
      }, Ge = Fe, je = A(Ge);
      function Le(g2, t2, A2, e2) {
        g2.beginPath(), g2.arc(t2, A2, e2, 0, 2 * Math.PI, false), g2.closePath();
      }
      function Ve(g2, t2, A2, e2, C2, I2) {
        var i2 = Math.PI / 180;
        e2 - 2 * I2 < 0 && (I2 = e2 / 2), C2 - 2 * I2 < 0 && (I2 = C2 / 2), g2.beginPath(), g2.moveTo(t2 + I2, A2), g2.lineTo(t2 + e2 - I2, A2), g2.arc(t2 + e2 - I2, A2 + I2, I2, 270 * i2, 360 * i2, false), g2.lineTo(t2 + e2, A2 + C2 - I2), g2.arc(t2 + e2 - I2, A2 + C2 - I2, I2, 0, 90 * i2, false), g2.lineTo(t2 + I2, A2 + C2), g2.arc(t2 + I2, A2 + C2 - I2, I2, 90 * i2, 180 * i2, false), g2.lineTo(t2, A2 + I2), g2.arc(t2 + I2, A2 + I2, I2, 180 * i2, 270 * i2, false), g2.closePath();
      }
      function Ye(g2, t2, A2, e2, C2) {
        var I2 = 0.5522848, i2 = e2 / 2 * I2, o2 = C2 / 2 * I2, n2 = t2 + e2, r2 = A2 + C2, s2 = t2 + e2 / 2, a2 = A2 + C2 / 2;
        g2.beginPath(), g2.moveTo(t2, a2), g2.bezierCurveTo(t2, a2 - o2, s2 - i2, A2, s2, A2), g2.bezierCurveTo(s2 + i2, A2, n2, a2 - o2, n2, a2), g2.bezierCurveTo(n2, a2 + o2, s2 + i2, r2, s2, r2), g2.bezierCurveTo(s2 - i2, r2, t2, a2 + o2, t2, a2), g2.closePath();
      }
      function We(g2, t2, A2, e2, C2) {
        var I2 = C2 * (1 / 3), i2 = 0.5522848, o2 = e2 / 2 * i2, n2 = I2 / 2 * i2, r2 = t2 + e2, s2 = A2 + I2, a2 = t2 + e2 / 2, d2 = A2 + I2 / 2, h2 = A2 + (C2 - I2 / 2), l2 = A2 + C2;
        g2.beginPath(), g2.moveTo(r2, d2), g2.bezierCurveTo(r2, d2 + n2, a2 + o2, s2, a2, s2), g2.bezierCurveTo(a2 - o2, s2, t2, d2 + n2, t2, d2), g2.bezierCurveTo(t2, d2 - n2, a2 - o2, A2, a2, A2), g2.bezierCurveTo(a2 + o2, A2, r2, d2 - n2, r2, d2), g2.lineTo(r2, h2), g2.bezierCurveTo(r2, h2 + n2, a2 + o2, l2, a2, l2), g2.bezierCurveTo(a2 - o2, l2, t2, h2 + n2, t2, h2), g2.lineTo(t2, d2);
      }
      function Qe(g2, t2, A2, e2, C2, I2) {
        g2.beginPath(), g2.moveTo(t2, A2);
        for (var i2 = I2.length, o2 = e2 - t2, n2 = C2 - A2, r2 = n2 / o2, s2 = Math.sqrt(o2 * o2 + n2 * n2), a2 = 0, d2 = true, h2 = 0, l2 = +I2[0]; s2 >= 0.1; ) (l2 = +I2[a2++ % i2]) > s2 && (l2 = s2), h2 = Math.sqrt(l2 * l2 / (1 + r2 * r2)), t2 += h2 = o2 < 0 ? -h2 : h2, A2 += r2 * h2, true === d2 ? g2.lineTo(t2, A2) : g2.moveTo(t2, A2), s2 -= l2, d2 = !d2;
      }
      var Ue = {
        circle: Le,
        dashedLine: Qe,
        database: We,
        diamond: function(g2, t2, A2, e2) {
          g2.beginPath(), g2.lineTo(t2, A2 + e2), g2.lineTo(t2 + e2, A2), g2.lineTo(t2, A2 - e2), g2.lineTo(t2 - e2, A2), g2.closePath();
        },
        ellipse: Ye,
        ellipse_vis: Ye,
        hexagon: function(g2, t2, A2, e2) {
          g2.beginPath();
          var C2 = 2 * Math.PI / 6;
          g2.moveTo(t2 + e2, A2);
          for (var I2 = 1; I2 < 6; I2++) g2.lineTo(t2 + e2 * Math.cos(C2 * I2), A2 + e2 * Math.sin(C2 * I2));
          g2.closePath();
        },
        roundRect: Ve,
        square: function(g2, t2, A2, e2) {
          g2.beginPath(), g2.rect(t2 - e2, A2 - e2, 2 * e2, 2 * e2), g2.closePath();
        },
        star: function(g2, t2, A2, e2) {
          g2.beginPath(), A2 += 0.1 * (e2 *= 0.82);
          for (var C2 = 0; C2 < 10; C2++) {
            var I2 = C2 % 2 == 0 ? 1.3 * e2 : 0.5 * e2;
            g2.lineTo(t2 + I2 * Math.sin(2 * C2 * Math.PI / 10), A2 - I2 * Math.cos(2 * C2 * Math.PI / 10));
          }
          g2.closePath();
        },
        triangle: function(g2, t2, A2, e2) {
          g2.beginPath(), A2 += 0.275 * (e2 *= 1.15);
          var C2 = 2 * e2, I2 = C2 / 2, i2 = Math.sqrt(3) / 6 * C2, o2 = Math.sqrt(C2 * C2 - I2 * I2);
          g2.moveTo(t2, A2 - (o2 - i2)), g2.lineTo(t2 + I2, A2 + i2), g2.lineTo(t2 - I2, A2 + i2), g2.lineTo(t2, A2 - (o2 - i2)), g2.closePath();
        },
        triangleDown: function(g2, t2, A2, e2) {
          g2.beginPath(), A2 -= 0.275 * (e2 *= 1.15);
          var C2 = 2 * e2, I2 = C2 / 2, i2 = Math.sqrt(3) / 6 * C2, o2 = Math.sqrt(C2 * C2 - I2 * I2);
          g2.moveTo(t2, A2 + (o2 - i2)), g2.lineTo(t2 + I2, A2 - i2), g2.lineTo(t2 - I2, A2 - i2), g2.lineTo(t2, A2 + (o2 - i2)), g2.closePath();
        }
      };
      function _e(g2, t2) {
        void 0 === t2 && (t2 = {});
        var A2 = t2.insertAt;
        if (g2 && "undefined" != typeof document) {
          var e2 = document.head || document.getElementsByTagName("head")[0], C2 = document.createElement("style");
          C2.type = "text/css", "top" === A2 && e2.firstChild ? e2.insertBefore(C2, e2.firstChild) : e2.appendChild(C2), C2.styleSheet ? C2.styleSheet.cssText = g2 : C2.appendChild(document.createTextNode(g2));
        }
      }
      _e(".vis-overlay{bottom:0;left:0;position:absolute;right:0;top:0;z-index:10}.vis-active{box-shadow:0 0 10px #86d5f8}");
      _e(".vis [class*=span]{min-height:0;width:auto}");
      _e('div.vis-color-picker{background-color:#fff;border-radius:15px;box-shadow:0 0 10px 0 rgba(0,0,0,.5);display:none;height:444px;left:30px;margin-left:30px;margin-top:-140px;padding:10px;position:absolute;top:0;width:310px;z-index:1}div.vis-color-picker div.vis-arrow{left:5px;position:absolute;top:147px}div.vis-color-picker div.vis-arrow:after,div.vis-color-picker div.vis-arrow:before{border:solid transparent;content:" ";height:0;pointer-events:none;position:absolute;right:100%;top:50%;width:0}div.vis-color-picker div.vis-arrow:after{border-color:hsla(0,0%,100%,0) #fff hsla(0,0%,100%,0) hsla(0,0%,100%,0);border-width:30px;margin-top:-30px}div.vis-color-picker div.vis-color{cursor:pointer;height:289px;position:absolute;width:289px}div.vis-color-picker div.vis-brightness{position:absolute;top:313px}div.vis-color-picker div.vis-opacity{position:absolute;top:350px}div.vis-color-picker div.vis-selector{background:#4c4c4c;background:-moz-linear-gradient(top,#4c4c4c 0,#595959 12%,#666 25%,#474747 39%,#2c2c2c 50%,#000 51%,#111 60%,#2b2b2b 76%,#1c1c1c 91%,#131313 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#4c4c4c),color-stop(12%,#595959),color-stop(25%,#666),color-stop(39%,#474747),color-stop(50%,#2c2c2c),color-stop(51%,#000),color-stop(60%,#111),color-stop(76%,#2b2b2b),color-stop(91%,#1c1c1c),color-stop(100%,#131313));background:-webkit-linear-gradient(top,#4c4c4c,#595959 12%,#666 25%,#474747 39%,#2c2c2c 50%,#000 51%,#111 60%,#2b2b2b 76%,#1c1c1c 91%,#131313);background:-o-linear-gradient(top,#4c4c4c 0,#595959 12%,#666 25%,#474747 39%,#2c2c2c 50%,#000 51%,#111 60%,#2b2b2b 76%,#1c1c1c 91%,#131313 100%);background:-ms-linear-gradient(top,#4c4c4c 0,#595959 12%,#666 25%,#474747 39%,#2c2c2c 50%,#000 51%,#111 60%,#2b2b2b 76%,#1c1c1c 91%,#131313 100%);background:linear-gradient(180deg,#4c4c4c 0,#595959 12%,#666 25%,#474747 39%,#2c2c2c 50%,#000 51%,#111 60%,#2b2b2b 76%,#1c1c1c 91%,#131313);border:1px solid #fff;border-radius:15px;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#4c4c4c",endColorstr="#131313",GradientType=0);height:15px;left:137px;position:absolute;top:137px;width:15px}div.vis-color-picker div.vis-new-color{left:159px;padding-right:2px;text-align:right}div.vis-color-picker div.vis-initial-color,div.vis-color-picker div.vis-new-color{border:1px solid rgba(0,0,0,.1);border-radius:5px;color:rgba(0,0,0,.4);font-size:10px;height:20px;line-height:20px;position:absolute;top:380px;vertical-align:middle;width:140px}div.vis-color-picker div.vis-initial-color{left:10px;padding-left:2px;text-align:left}div.vis-color-picker div.vis-label{left:10px;position:absolute;width:300px}div.vis-color-picker div.vis-label.vis-brightness{top:300px}div.vis-color-picker div.vis-label.vis-opacity{top:338px}div.vis-color-picker div.vis-button{background-color:#f7f7f7;border:2px solid #d9d9d9;border-radius:10px;cursor:pointer;height:25px;line-height:25px;position:absolute;text-align:center;top:410px;vertical-align:middle;width:68px}div.vis-color-picker div.vis-button.vis-cancel{left:5px}div.vis-color-picker div.vis-button.vis-load{left:82px}div.vis-color-picker div.vis-button.vis-apply{left:159px}div.vis-color-picker div.vis-button.vis-save{left:236px}div.vis-color-picker input.vis-range{height:20px;width:290px}');
      _e('div.vis-configuration{display:block;float:left;font-size:12px;position:relative}div.vis-configuration-wrapper{display:block;width:700px}div.vis-configuration-wrapper:after{clear:both;content:"";display:block}div.vis-configuration.vis-config-option-container{background-color:#fff;border:2px solid #f7f8fa;border-radius:4px;display:block;left:10px;margin-top:20px;padding-left:5px;width:495px}div.vis-configuration.vis-config-button{background-color:#f7f8fa;border:2px solid #ceced0;border-radius:4px;cursor:pointer;display:block;height:25px;left:10px;line-height:25px;margin-bottom:30px;margin-top:20px;padding-left:5px;vertical-align:middle;width:495px}div.vis-configuration.vis-config-button.hover{background-color:#4588e6;border:2px solid #214373;color:#fff}div.vis-configuration.vis-config-item{display:block;float:left;height:25px;line-height:25px;vertical-align:middle;width:495px}div.vis-configuration.vis-config-item.vis-config-s2{background-color:#f7f8fa;border-radius:3px;left:10px;padding-left:5px}div.vis-configuration.vis-config-item.vis-config-s3{background-color:#e4e9f0;border-radius:3px;left:20px;padding-left:5px}div.vis-configuration.vis-config-item.vis-config-s4{background-color:#cfd8e6;border-radius:3px;left:30px;padding-left:5px}div.vis-configuration.vis-config-header{font-size:18px;font-weight:700}div.vis-configuration.vis-config-label{height:25px;line-height:25px;width:120px}div.vis-configuration.vis-config-label.vis-config-s3{width:110px}div.vis-configuration.vis-config-label.vis-config-s4{width:100px}div.vis-configuration.vis-config-colorBlock{border:1px solid #444;border-radius:2px;cursor:pointer;height:19px;margin:0;padding:0;top:1px;width:30px}input.vis-configuration.vis-config-checkbox{left:-5px}input.vis-configuration.vis-config-rangeinput{margin:0;padding:1px;pointer-events:none;position:relative;top:-5px;width:60px}input.vis-configuration.vis-config-range{-webkit-appearance:none;background-color:transparent;border:0 solid #fff;height:20px;width:300px}input.vis-configuration.vis-config-range::-webkit-slider-runnable-track{background:#dedede;background:-moz-linear-gradient(top,#dedede 0,#c8c8c8 99%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#dedede),color-stop(99%,#c8c8c8));background:-webkit-linear-gradient(top,#dedede,#c8c8c8 99%);background:-o-linear-gradient(top,#dedede 0,#c8c8c8 99%);background:-ms-linear-gradient(top,#dedede 0,#c8c8c8 99%);background:linear-gradient(180deg,#dedede 0,#c8c8c8 99%);border:1px solid #999;border-radius:3px;box-shadow:0 0 3px 0 #aaa;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#dedede",endColorstr="#c8c8c8",GradientType=0);height:5px;width:300px}input.vis-configuration.vis-config-range::-webkit-slider-thumb{-webkit-appearance:none;background:#3876c2;background:-moz-linear-gradient(top,#3876c2 0,#385380 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#3876c2),color-stop(100%,#385380));background:-webkit-linear-gradient(top,#3876c2,#385380);background:-o-linear-gradient(top,#3876c2 0,#385380 100%);background:-ms-linear-gradient(top,#3876c2 0,#385380 100%);background:linear-gradient(180deg,#3876c2 0,#385380);border:1px solid #14334b;border-radius:50%;box-shadow:0 0 1px 0 #111927;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#3876c2",endColorstr="#385380",GradientType=0);height:17px;margin-top:-7px;width:17px}input.vis-configuration.vis-config-range:focus{outline:none}input.vis-configuration.vis-config-range:focus::-webkit-slider-runnable-track{background:#9d9d9d;background:-moz-linear-gradient(top,#9d9d9d 0,#c8c8c8 99%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#9d9d9d),color-stop(99%,#c8c8c8));background:-webkit-linear-gradient(top,#9d9d9d,#c8c8c8 99%);background:-o-linear-gradient(top,#9d9d9d 0,#c8c8c8 99%);background:-ms-linear-gradient(top,#9d9d9d 0,#c8c8c8 99%);background:linear-gradient(180deg,#9d9d9d 0,#c8c8c8 99%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#9d9d9d",endColorstr="#c8c8c8",GradientType=0)}input.vis-configuration.vis-config-range::-moz-range-track{background:#dedede;background:-moz-linear-gradient(top,#dedede 0,#c8c8c8 99%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#dedede),color-stop(99%,#c8c8c8));background:-webkit-linear-gradient(top,#dedede,#c8c8c8 99%);background:-o-linear-gradient(top,#dedede 0,#c8c8c8 99%);background:-ms-linear-gradient(top,#dedede 0,#c8c8c8 99%);background:linear-gradient(180deg,#dedede 0,#c8c8c8 99%);border:1px solid #999;border-radius:3px;box-shadow:0 0 3px 0 #aaa;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#dedede",endColorstr="#c8c8c8",GradientType=0);height:10px;width:300px}input.vis-configuration.vis-config-range::-moz-range-thumb{background:#385380;border:none;border-radius:50%;height:16px;width:16px}input.vis-configuration.vis-config-range:-moz-focusring{outline:1px solid #fff;outline-offset:-1px}input.vis-configuration.vis-config-range::-ms-track{background:transparent;border-color:transparent;border-width:6px 0;color:transparent;height:5px;width:300px}input.vis-configuration.vis-config-range::-ms-fill-lower{background:#777;border-radius:10px}input.vis-configuration.vis-config-range::-ms-fill-upper{background:#ddd;border-radius:10px}input.vis-configuration.vis-config-range::-ms-thumb{background:#385380;border:none;border-radius:50%;height:16px;width:16px}input.vis-configuration.vis-config-range:focus::-ms-fill-lower{background:#888}input.vis-configuration.vis-config-range:focus::-ms-fill-upper{background:#ccc}.vis-configuration-popup{background:rgba(57,76,89,.85);border:2px solid #f2faff;border-radius:4px;color:#fff;font-size:14px;height:30px;line-height:30px;position:absolute;text-align:center;-webkit-transition:opacity .3s ease-in-out;-moz-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out;width:150px}.vis-configuration-popup:after,.vis-configuration-popup:before{border:solid transparent;content:" ";height:0;left:100%;pointer-events:none;position:absolute;top:50%;width:0}.vis-configuration-popup:after{border-color:rgba(136,183,213,0) rgba(136,183,213,0) rgba(136,183,213,0) rgba(57,76,89,.85);border-width:8px;margin-top:-8px}.vis-configuration-popup:before{border-color:rgba(194,225,245,0) rgba(194,225,245,0) rgba(194,225,245,0) #f2faff;border-width:12px;margin-top:-12px}');
      _e("div.vis-tooltip{background-color:#f5f4ed;border:1px solid #808074;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;box-shadow:3px 3px 10px rgba(0,0,0,.2);color:#000;font-family:verdana;font-size:14px;padding:5px;pointer-events:none;position:absolute;visibility:hidden;white-space:nowrap;z-index:5}");
      var Ke = {
        exports: {}
      };
      !function(g2) {
        function t2(g3) {
          if (g3) return function(g4) {
            for (var A2 in t2.prototype) g4[A2] = t2.prototype[A2];
            return g4;
          }(g3);
        }
        g2.exports = t2, t2.prototype.on = t2.prototype.addEventListener = function(g3, t3) {
          return this._callbacks = this._callbacks || {}, (this._callbacks["$" + g3] = this._callbacks["$" + g3] || []).push(t3), this;
        }, t2.prototype.once = function(g3, t3) {
          function A2() {
            this.off(g3, A2), t3.apply(this, arguments);
          }
          return A2.fn = t3, this.on(g3, A2), this;
        }, t2.prototype.off = t2.prototype.removeListener = t2.prototype.removeAllListeners = t2.prototype.removeEventListener = function(g3, t3) {
          if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
          var A2, e2 = this._callbacks["$" + g3];
          if (!e2) return this;
          if (1 == arguments.length) return delete this._callbacks["$" + g3], this;
          for (var C2 = 0; C2 < e2.length; C2++) if ((A2 = e2[C2]) === t3 || A2.fn === t3) {
            e2.splice(C2, 1);
            break;
          }
          return 0 === e2.length && delete this._callbacks["$" + g3], this;
        }, t2.prototype.emit = function(g3) {
          this._callbacks = this._callbacks || {};
          for (var t3 = new Array(arguments.length - 1), A2 = this._callbacks["$" + g3], e2 = 1; e2 < arguments.length; e2++) t3[e2 - 1] = arguments[e2];
          if (A2) {
            e2 = 0;
            for (var C2 = (A2 = A2.slice(0)).length; e2 < C2; ++e2) A2[e2].apply(this, t3);
          }
          return this;
        }, t2.prototype.listeners = function(g3) {
          return this._callbacks = this._callbacks || {}, this._callbacks["$" + g3] || [];
        }, t2.prototype.hasListeners = function(g3) {
          return !!this.listeners(g3).length;
        };
      }(Ke);
      var He = A(Ke.exports), Xe = {};
      Xe[dt("toStringTag")] = "z";
      var Je, qe, $e, gC = "[object z]" === String(Xe), tC = gC, AC = O, eC = y, CC = dt("toStringTag"), IC = Object, iC = "Arguments" === eC(/* @__PURE__ */ function() {
        return arguments;
      }()), oC = tC ? eC : function(g2) {
        var t2, A2, e2;
        return void 0 === g2 ? "Undefined" : null === g2 ? "Null" : "string" == typeof (A2 = function(g3, t3) {
          try {
            return g3[t3];
          } catch (g4) {
          }
        }(t2 = IC(g2), CC)) ? A2 : iC ? eC(t2) : "Object" === (e2 = eC(t2)) && AC(t2.callee) ? "Arguments" : e2;
      }, nC = oC, rC = String, sC = function(g2) {
        if ("Symbol" === nC(g2)) throw new TypeError("Cannot convert a Symbol value to a string");
        return rC(g2);
      }, aC = u, dC = PA, hC = sC, lC = K, cC = aC("".charAt), uC = aC("".charCodeAt), pC = aC("".slice), fC = function(g2) {
        return function(t2, A2) {
          var e2, C2, I2 = hC(lC(t2)), i2 = dC(A2), o2 = I2.length;
          return i2 < 0 || i2 >= o2 ? g2 ? "" : void 0 : (e2 = uC(I2, i2)) < 55296 || e2 > 56319 || i2 + 1 === o2 || (C2 = uC(I2, i2 + 1)) < 56320 || C2 > 57343 ? g2 ? cC(I2, i2) : e2 : g2 ? pC(I2, i2, i2 + 2) : C2 - 56320 + (e2 - 55296 << 10) + 65536;
        };
      }, vC = {
        codeAt: fC(false),
        charAt: fC(true)
      }, yC = O, mC = C.WeakMap, bC = yC(mC) && /native code/.test(String(mC)), wC = et, kC = Ug("keys"), xC = function(g2) {
        return kC[g2] || (kC[g2] = wC(g2));
      }, EC = bC, OC = C, TC = gg, DC = uA, NC = qg, RC = Wg, PC = xC, MC = UA, BC = "Object already initialized", zC = OC.TypeError, SC = OC.WeakMap;
      if (EC || RC.state) {
        var ZC = RC.state || (RC.state = new SC());
        ZC.get = ZC.get, ZC.has = ZC.has, ZC.set = ZC.set, Je = function(g2, t2) {
          if (ZC.has(g2)) throw new zC(BC);
          return t2.facade = g2, ZC.set(g2, t2), t2;
        }, qe = function(g2) {
          return ZC.get(g2) || {};
        }, $e = function(g2) {
          return ZC.has(g2);
        };
      } else {
        var FC = PC("state");
        MC[FC] = true, Je = function(g2, t2) {
          if (NC(g2, FC)) throw new zC(BC);
          return t2.facade = g2, DC(g2, FC, t2), t2;
        }, qe = function(g2) {
          return NC(g2, FC) ? g2[FC] : {};
        }, $e = function(g2) {
          return NC(g2, FC);
        };
      }
      var GC = {
        set: Je,
        get: qe,
        has: $e,
        enforce: function(g2) {
          return $e(g2) ? qe(g2) : Je(g2, {});
        },
        getterFor: function(g2) {
          return function(t2) {
            var A2;
            if (!TC(t2) || (A2 = qe(t2)).type !== g2) throw new zC("Incompatible receiver, " + g2 + " required");
            return A2;
          };
        }
      }, jC = D, LC = qg, VC = Function.prototype, YC = jC && Object.getOwnPropertyDescriptor, WC = LC(VC, "name"), QC = {
        EXISTS: WC,
        PROPER: WC && "something" === function() {
        }.name,
        CONFIGURABLE: WC && (!jC || jC && YC(VC, "name").configurable)
      }, UC = {}, _C = D, KC = qt, HC = Jt, XC = AA, JC = J, qC = Ae;
      UC.f = _C && !KC ? Object.defineProperties : function(g2, t2) {
        XC(g2);
        for (var A2, e2 = JC(t2), C2 = qC(t2), I2 = C2.length, i2 = 0; I2 > i2; ) HC.f(g2, A2 = C2[i2++], e2[A2]);
        return g2;
      };
      var $C, gI = ig("document", "documentElement"), tI = AA, AI = UC, eI = $A, CI = UA, II = gI, iI = Et, oI = "prototype", nI = "script", rI = xC("IE_PROTO"), sI = function() {
      }, aI = function(g2) {
        return "<" + nI + ">" + g2 + "</" + nI + ">";
      }, dI = function(g2) {
        g2.write(aI("")), g2.close();
        var t2 = g2.parentWindow.Object;
        return g2 = null, t2;
      }, hI = function() {
        try {
          $C = new ActiveXObject("htmlfile");
        } catch (g3) {
        }
        var g2, t2, A2;
        hI = "undefined" != typeof document ? document.domain && $C ? dI($C) : (t2 = iI("iframe"), A2 = "java" + nI + ":", t2.style.display = "none", II.appendChild(t2), t2.src = String(A2), (g2 = t2.contentWindow.document).open(), g2.write(aI("document.F=Object")), g2.close(), g2.F) : dI($C);
        for (var e2 = eI.length; e2--; ) delete hI[oI][eI[e2]];
        return hI();
      };
      CI[rI] = true;
      var lI, cI, uI, pI = Object.create || function(g2, t2) {
        var A2;
        return null !== g2 ? (sI[oI] = tI(g2), A2 = new sI(), sI[oI] = null, A2[rI] = g2) : A2 = hI(), void 0 === t2 ? A2 : AI.f(A2, t2);
      }, fI = !I(function() {
        function g2() {
        }
        return g2.prototype.constructor = null, Object.getPrototypeOf(new g2()) !== g2.prototype;
      }), vI = qg, yI = O, mI = Hg, bI = fI, wI = xC("IE_PROTO"), kI = Object, xI = kI.prototype, EI = bI ? kI.getPrototypeOf : function(g2) {
        var t2 = mI(g2);
        if (vI(t2, wI)) return t2[wI];
        var A2 = t2.constructor;
        return yI(A2) && t2 instanceof A2 ? A2.prototype : t2 instanceof kI ? xI : null;
      }, OI = uA, TI = function(g2, t2, A2, e2) {
        return e2 && e2.enumerable ? g2[t2] = A2 : OI(g2, t2, A2), g2;
      }, DI = I, NI = O, RI = gg, PI = pI, MI = EI, BI = TI, zI = dt("iterator"), SI = false;
      [].keys && ("next" in (uI = [].keys()) ? (cI = MI(MI(uI))) !== Object.prototype && (lI = cI) : SI = true);
      var ZI = !RI(lI) || DI(function() {
        var g2 = {};
        return lI[zI].call(g2) !== g2;
      });
      NI((lI = ZI ? {} : PI(lI))[zI]) || BI(lI, zI, function() {
        return this;
      });
      var FI = {
        IteratorPrototype: lI,
        BUGGY_SAFARI_ITERATORS: SI
      }, GI = oC, jI = gC ? {}.toString : function() {
        return "[object " + GI(this) + "]";
      }, LI = gC, VI = Jt.f, YI = uA, WI = qg, QI = jI, UI = dt("toStringTag"), _I = function(g2, t2, A2, e2) {
        if (g2) {
          var C2 = A2 ? g2 : g2.prototype;
          WI(C2, UI) || VI(C2, UI, {
            configurable: true,
            value: t2
          }), e2 && !LI && YI(C2, "toString", QI);
        }
      }, KI = {}, HI = FI.IteratorPrototype, XI = pI, JI = G, qI = _I, $I = KI, gi = function() {
        return this;
      }, ti = u, Ai = Rg, ei = O, Ci = String, Ii = TypeError, ii = function(g2, t2, A2) {
        try {
          return ti(Ai(Object.getOwnPropertyDescriptor(g2, t2)[A2]));
        } catch (g3) {
        }
      }, oi = AA, ni = function(g2) {
        if ("object" == typeof g2 || ei(g2)) return g2;
        throw new Ii("Can't set " + Ci(g2) + " as a prototype");
      }, ri = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var g2, t2 = false, A2 = {};
        try {
          (g2 = ii(Object.prototype, "__proto__", "set"))(A2, []), t2 = A2 instanceof Array;
        } catch (g3) {
        }
        return function(A3, e2) {
          return oi(A3), ni(e2), t2 ? g2(A3, e2) : A3.__proto__ = e2, A3;
        };
      }() : void 0), si = TA, ai = P, di = QC, hi = function(g2, t2, A2, e2) {
        var C2 = t2 + " Iterator";
        return g2.prototype = XI(HI, {
          next: JI(+!e2, A2)
        }), qI(g2, C2, false, true), $I[C2] = gi, g2;
      }, li = EI, ci = _I, ui = TI, pi = KI, fi = FI, vi = di.PROPER, yi = fi.BUGGY_SAFARI_ITERATORS, mi = dt("iterator"), bi = "keys", wi = "values", ki = "entries", xi = function() {
        return this;
      }, Ei = function(g2, t2, A2, e2, C2, I2, i2) {
        hi(A2, t2, e2);
        var o2, n2, r2, s2 = function(g3) {
          if (g3 === C2 && c2) return c2;
          if (!yi && g3 && g3 in h2) return h2[g3];
          switch (g3) {
            case bi:
            case wi:
            case ki:
              return function() {
                return new A2(this, g3);
              };
          }
          return function() {
            return new A2(this);
          };
        }, a2 = t2 + " Iterator", d2 = false, h2 = g2.prototype, l2 = h2[mi] || h2["@@iterator"] || C2 && h2[C2], c2 = !yi && l2 || s2(C2), u2 = "Array" === t2 && h2.entries || l2;
        if (u2 && (o2 = li(u2.call(new g2()))) !== Object.prototype && o2.next && (ci(o2, a2, true, true), pi[a2] = xi), vi && C2 === wi && l2 && l2.name !== wi && (d2 = true, c2 = function() {
          return ai(l2, this);
        }), C2) if (n2 = {
          values: s2(wi),
          keys: I2 ? c2 : s2(bi),
          entries: s2(ki)
        }, i2) for (r2 in n2) (yi || d2 || !(r2 in h2)) && ui(h2, r2, n2[r2]);
        else si({
          target: t2,
          proto: true,
          forced: yi || d2
        }, n2);
        return i2 && h2[mi] !== c2 && ui(h2, mi, c2, {
          name: C2
        }), pi[t2] = c2, n2;
      }, Oi = function(g2, t2) {
        return {
          value: g2,
          done: t2
        };
      }, Ti = vC.charAt, Di = sC, Ni = GC, Ri = Ei, Pi = Oi, Mi = "String Iterator", Bi = Ni.set, zi = Ni.getterFor(Mi);
      Ri(String, "String", function(g2) {
        Bi(this, {
          type: Mi,
          string: Di(g2),
          index: 0
        });
      }, function() {
        var g2, t2 = zi(this), A2 = t2.string, e2 = t2.index;
        return e2 >= A2.length ? Pi(void 0, true) : (g2 = Ti(A2, e2), t2.index += g2.length, Pi(g2, false));
      });
      var Si = P, Zi = AA, Fi = Bg, Gi = function(g2, t2, A2) {
        var e2, C2;
        Zi(g2);
        try {
          if (!(e2 = Fi(g2, "return"))) {
            if ("throw" === t2) throw A2;
            return A2;
          }
          e2 = Si(e2, g2);
        } catch (g3) {
          C2 = true, e2 = g3;
        }
        if ("throw" === t2) throw A2;
        if (C2) throw e2;
        return Zi(e2), A2;
      }, ji = AA, Li = Gi, Vi = KI, Yi = dt("iterator"), Wi = Array.prototype, Qi = function(g2) {
        return void 0 !== g2 && (Vi.Array === g2 || Wi[Yi] === g2);
      }, Ui = O, _i = Wg, Ki = u(Function.toString);
      Ui(_i.inspectSource) || (_i.inspectSource = function(g2) {
        return Ki(g2);
      });
      var Hi = _i.inspectSource, Xi = u, Ji = I, qi = O, $i = oC, go = Hi, to = function() {
      }, Ao = [], eo = ig("Reflect", "construct"), Co = /^\s*(?:class|function)\b/, Io = Xi(Co.exec), io = !Co.test(to), oo = function(g2) {
        if (!qi(g2)) return false;
        try {
          return eo(to, Ao, g2), true;
        } catch (g3) {
          return false;
        }
      }, no = function(g2) {
        if (!qi(g2)) return false;
        switch ($i(g2)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return false;
        }
        try {
          return io || !!Io(Co, go(g2));
        } catch (g3) {
          return true;
        }
      };
      no.sham = true;
      var ro = !eo || Ji(function() {
        var g2;
        return oo(oo.call) || !oo(Object) || !oo(function() {
          g2 = true;
        }) || g2;
      }) ? no : oo, so = bt, ao = Jt, ho = G, lo = function(g2, t2, A2) {
        var e2 = so(t2);
        e2 in g2 ? ao.f(g2, e2, ho(0, A2)) : g2[e2] = A2;
      }, co = oC, uo = Bg, po = Q, fo = KI, vo = dt("iterator"), yo = function(g2) {
        if (!po(g2)) return uo(g2, vo) || uo(g2, "@@iterator") || fo[co(g2)];
      }, mo = P, bo = Rg, wo = AA, ko = Og, xo = yo, Eo = TypeError, Oo = function(g2, t2) {
        var A2 = arguments.length < 2 ? xo(g2) : t2;
        if (bo(A2)) return wo(mo(A2, g2));
        throw new Eo(ko(g2) + " is not iterable");
      }, To = Xt, Do = P, No = Hg, Ro = function(g2, t2, A2, e2) {
        try {
          return e2 ? t2(ji(A2)[0], A2[1]) : t2(A2);
        } catch (t3) {
          Li(g2, "throw", t3);
        }
      }, Po = Qi, Mo = ro, Bo = jA, zo = lo, So = Oo, Zo = yo, Fo = Array, Go = dt("iterator"), jo = false;
      try {
        var Lo = 0, Vo = {
          next: function() {
            return {
              done: !!Lo++
            };
          },
          return: function() {
            jo = true;
          }
        };
        Vo[Go] = function() {
          return this;
        }, Array.from(Vo, function() {
          throw 2;
        });
      } catch (g2) {
      }
      var Yo = function(g2, t2) {
        try {
          if (!t2 && !jo) return false;
        } catch (g3) {
          return false;
        }
        var A2 = false;
        try {
          var e2 = {};
          e2[Go] = function() {
            return {
              next: function() {
                return {
                  done: A2 = true
                };
              }
            };
          }, g2(e2);
        } catch (g3) {
        }
        return A2;
      }, Wo = function(g2) {
        var t2 = No(g2), A2 = Mo(this), e2 = arguments.length, C2 = e2 > 1 ? arguments[1] : void 0, I2 = void 0 !== C2;
        I2 && (C2 = To(C2, e2 > 2 ? arguments[2] : void 0));
        var i2, o2, n2, r2, s2, a2, d2 = Zo(t2), h2 = 0;
        if (!d2 || this === Fo && Po(d2)) for (i2 = Bo(t2), o2 = A2 ? new this(i2) : Fo(i2); i2 > h2; h2++) a2 = I2 ? C2(t2[h2], h2) : t2[h2], zo(o2, h2, a2);
        else for (s2 = (r2 = So(t2, d2)).next, o2 = A2 ? new this() : []; !(n2 = Do(s2, r2)).done; h2++) a2 = I2 ? Ro(r2, C2, [n2.value, h2], true) : n2.value, zo(o2, h2, a2);
        return o2.length = h2, o2;
      };
      TA({
        target: "Array",
        stat: true,
        forced: !Yo(function(g2) {
          Array.from(g2);
        })
      }, {
        from: Wo
      });
      var Qo = tg.Array.from, Uo = A(Qo), _o = J, Ko = KI, Ho = GC;
      Jt.f;
      var Xo = Ei, Jo = Oi, qo = "Array Iterator", $o = Ho.set, gn = Ho.getterFor(qo);
      Xo(Array, "Array", function(g2, t2) {
        $o(this, {
          type: qo,
          target: _o(g2),
          index: 0,
          kind: t2
        });
      }, function() {
        var g2 = gn(this), t2 = g2.target, A2 = g2.kind, e2 = g2.index++;
        if (!t2 || e2 >= t2.length) return g2.target = void 0, Jo(void 0, true);
        switch (A2) {
          case "keys":
            return Jo(e2, false);
          case "values":
            return Jo(t2[e2], false);
        }
        return Jo([e2, t2[e2]], false);
      }, "values"), Ko.Arguments = Ko.Array;
      var tn = yo, An = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
      }, en = C, Cn = oC, In = uA, on = KI, nn = dt("toStringTag");
      for (var rn in An) {
        var sn = en[rn], an = sn && sn.prototype;
        an && Cn(an) !== nn && In(an, nn, rn), on[rn] = on.Array;
      }
      var dn = tn, hn = A(dn), ln = A(dn);
      function cn(g2, t2) {
        if (!(g2 instanceof t2)) throw new TypeError("Cannot call a class as a function");
      }
      var un = {
        exports: {}
      }, pn = TA, fn = D, vn = Jt.f;
      pn({
        target: "Object",
        stat: true,
        forced: Object.defineProperty !== vn,
        sham: !fn
      }, {
        defineProperty: vn
      });
      var yn = tg.Object, mn = un.exports = function(g2, t2, A2) {
        return yn.defineProperty(g2, t2, A2);
      };
      yn.defineProperty.sham && (mn.sham = true);
      var bn = un.exports, wn = bn, kn = A(wn), xn = y, En = Array.isArray || function(g2) {
        return "Array" === xn(g2);
      }, On = TypeError, Tn = function(g2) {
        if (g2 > 9007199254740991) throw On("Maximum allowed index exceeded");
        return g2;
      }, Dn = En, Nn = ro, Rn = gg, Pn = dt("species"), Mn = Array, Bn = function(g2) {
        var t2;
        return Dn(g2) && (t2 = g2.constructor, (Nn(t2) && (t2 === Mn || Dn(t2.prototype)) || Rn(t2) && null === (t2 = t2[Pn])) && (t2 = void 0)), void 0 === t2 ? Mn : t2;
      }, zn = function(g2, t2) {
        return new (Bn(g2))(0 === t2 ? 0 : t2);
      }, Sn = I, Zn = cg, Fn = dt("species"), Gn = function(g2) {
        return Zn >= 51 || !Sn(function() {
          var t2 = [];
          return (t2.constructor = {})[Fn] = function() {
            return {
              foo: 1
            };
          }, 1 !== t2[g2](Boolean).foo;
        });
      }, jn = TA, Ln = I, Vn = En, Yn = gg, Wn = Hg, Qn = jA, Un = Tn, _n = lo, Kn = zn, Hn = Gn, Xn = cg, Jn = dt("isConcatSpreadable"), qn = Xn >= 51 || !Ln(function() {
        var g2 = [];
        return g2[Jn] = false, g2.concat()[0] !== g2;
      }), $n = function(g2) {
        if (!Yn(g2)) return false;
        var t2 = g2[Jn];
        return void 0 !== t2 ? !!t2 : Vn(g2);
      };
      jn({
        target: "Array",
        proto: true,
        arity: 1,
        forced: !qn || !Hn("concat")
      }, {
        concat: function(g2) {
          var t2, A2, e2, C2, I2, i2 = Wn(this), o2 = Kn(i2, 0), n2 = 0;
          for (t2 = -1, e2 = arguments.length; t2 < e2; t2++) if ($n(I2 = -1 === t2 ? i2 : arguments[t2])) for (C2 = Qn(I2), Un(n2 + C2), A2 = 0; A2 < C2; A2++, n2++) A2 in I2 && _n(o2, n2, I2[A2]);
          else Un(n2 + 1), _n(o2, n2++, I2);
          return o2.length = n2, o2;
        }
      });
      var gr = {}, tr = qA, Ar = $A.concat("length", "prototype");
      gr.f = Object.getOwnPropertyNames || function(g2) {
        return tr(g2, Ar);
      };
      var er = {}, Cr = SA, Ir = jA, ir = lo, or = Array, nr = Math.max, rr = function(g2, t2, A2) {
        for (var e2 = Ir(g2), C2 = Cr(t2, e2), I2 = Cr(void 0 === A2 ? e2 : A2, e2), i2 = or(nr(I2 - C2, 0)), o2 = 0; C2 < I2; C2++, o2++) ir(i2, o2, g2[C2]);
        return i2.length = o2, i2;
      }, sr = y, ar = J, dr = gr.f, hr = rr, lr = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      er.f = function(g2) {
        return lr && "Window" === sr(g2) ? function(g3) {
          try {
            return dr(g3);
          } catch (g4) {
            return hr(lr);
          }
        }(g2) : dr(ar(g2));
      };
      var cr = Jt, ur = function(g2, t2, A2) {
        return cr.f(g2, t2, A2);
      }, pr = {}, fr = dt;
      pr.f = fr;
      var vr = tg, yr = qg, mr = pr, br = Jt.f, wr = function(g2) {
        var t2 = vr.Symbol || (vr.Symbol = {});
        yr(t2, g2) || br(t2, g2, {
          value: mr.f(g2)
        });
      }, kr = P, xr = ig, Er = dt, Or = TI, Tr = function() {
        var g2 = xr("Symbol"), t2 = g2 && g2.prototype, A2 = t2 && t2.valueOf, e2 = Er("toPrimitive");
        t2 && !t2[e2] && Or(t2, e2, function(g3) {
          return kr(A2, this);
        }, {
          arity: 1
        });
      }, Dr = Xt, Nr = W, Rr = Hg, Pr = jA, Mr = zn, Br = u([].push), zr = function(g2) {
        var t2 = 1 === g2, A2 = 2 === g2, e2 = 3 === g2, C2 = 4 === g2, I2 = 6 === g2, i2 = 7 === g2, o2 = 5 === g2 || I2;
        return function(n2, r2, s2, a2) {
          for (var d2, h2, l2 = Rr(n2), c2 = Nr(l2), u2 = Dr(r2, s2), p2 = Pr(c2), f2 = 0, v2 = a2 || Mr, y2 = t2 ? v2(n2, p2) : A2 || i2 ? v2(n2, 0) : void 0; p2 > f2; f2++) if ((o2 || f2 in c2) && (h2 = u2(d2 = c2[f2], f2, l2), g2)) if (t2) y2[f2] = h2;
          else if (h2) switch (g2) {
            case 3:
              return true;
            case 5:
              return d2;
            case 6:
              return f2;
            case 2:
              Br(y2, d2);
          }
          else switch (g2) {
            case 4:
              return false;
            case 7:
              Br(y2, d2);
          }
          return I2 ? -1 : e2 || C2 ? C2 : y2;
        };
      }, Sr = {
        forEach: zr(0),
        map: zr(1),
        filter: zr(2),
        some: zr(3),
        every: zr(4),
        find: zr(5),
        findIndex: zr(6),
        filterReject: zr(7)
      }, Zr = TA, Fr = C, Gr = P, jr = u, Lr = D, Vr = vg, Yr = I, Wr = qg, Qr = og, Ur = AA, _r = J, Kr = bt, Hr = sC, Xr = G, Jr = pI, qr = Ae, $r = gr, gs = er, ts = ee, As = T, es = Jt, Cs = UC, Is = M, is = TI, os = ur, ns = Ug, rs = UA, ss = et, as = dt, ds = pr, hs = wr, ls = Tr, cs = _I, us = GC, ps = Sr.forEach, fs = xC("hidden"), vs = "Symbol", ys = "prototype", ms = us.set, bs = us.getterFor(vs), ws = Object[ys], ks = Fr.Symbol, xs = ks && ks[ys], Es = Fr.RangeError, Os = Fr.TypeError, Ts = Fr.QObject, Ds = As.f, Ns = es.f, Rs = gs.f, Ps = Is.f, Ms = jr([].push), Bs = ns("symbols"), zs = ns("op-symbols"), Ss = ns("wks"), Zs = !Ts || !Ts[ys] || !Ts[ys].findChild, Fs = function(g2, t2, A2) {
        var e2 = Ds(ws, t2);
        e2 && delete ws[t2], Ns(g2, t2, A2), e2 && g2 !== ws && Ns(ws, t2, e2);
      }, Gs = Lr && Yr(function() {
        return 7 !== Jr(Ns({}, "a", {
          get: function() {
            return Ns(this, "a", {
              value: 7
            }).a;
          }
        })).a;
      }) ? Fs : Ns, js = function(g2, t2) {
        var A2 = Bs[g2] = Jr(xs);
        return ms(A2, {
          type: vs,
          tag: g2,
          description: t2
        }), Lr || (A2.description = t2), A2;
      }, Ls = function(g2, t2, A2) {
        g2 === ws && Ls(zs, t2, A2), Ur(g2);
        var e2 = Kr(t2);
        return Ur(A2), Wr(Bs, e2) ? (A2.enumerable ? (Wr(g2, fs) && g2[fs][e2] && (g2[fs][e2] = false), A2 = Jr(A2, {
          enumerable: Xr(0, false)
        })) : (Wr(g2, fs) || Ns(g2, fs, Xr(1, {})), g2[fs][e2] = true), Gs(g2, e2, A2)) : Ns(g2, e2, A2);
      }, Vs = function(g2, t2) {
        Ur(g2);
        var A2 = _r(t2), e2 = qr(A2).concat(Us(A2));
        return ps(e2, function(t3) {
          Lr && !Gr(Ys, A2, t3) || Ls(g2, t3, A2[t3]);
        }), g2;
      }, Ys = function(g2) {
        var t2 = Kr(g2), A2 = Gr(Ps, this, t2);
        return !(this === ws && Wr(Bs, t2) && !Wr(zs, t2)) && (!(A2 || !Wr(this, t2) || !Wr(Bs, t2) || Wr(this, fs) && this[fs][t2]) || A2);
      }, Ws = function(g2, t2) {
        var A2 = _r(g2), e2 = Kr(t2);
        if (A2 !== ws || !Wr(Bs, e2) || Wr(zs, e2)) {
          var C2 = Ds(A2, e2);
          return !C2 || !Wr(Bs, e2) || Wr(A2, fs) && A2[fs][e2] || (C2.enumerable = true), C2;
        }
      }, Qs = function(g2) {
        var t2 = Rs(_r(g2)), A2 = [];
        return ps(t2, function(g3) {
          Wr(Bs, g3) || Wr(rs, g3) || Ms(A2, g3);
        }), A2;
      }, Us = function(g2) {
        var t2 = g2 === ws, A2 = Rs(t2 ? zs : _r(g2)), e2 = [];
        return ps(A2, function(g3) {
          !Wr(Bs, g3) || t2 && !Wr(ws, g3) || Ms(e2, Bs[g3]);
        }), e2;
      };
      Vr || (ks = function() {
        if (Qr(xs, this)) throw new Os("Symbol is not a constructor");
        var g2 = arguments.length && void 0 !== arguments[0] ? Hr(arguments[0]) : void 0, t2 = ss(g2), A2 = function(g3) {
          this === ws && Gr(A2, zs, g3), Wr(this, fs) && Wr(this[fs], t2) && (this[fs][t2] = false);
          var e2 = Xr(1, g3);
          try {
            Gs(this, t2, e2);
          } catch (g4) {
            if (!(g4 instanceof Es)) throw g4;
            Fs(this, t2, e2);
          }
        };
        return Lr && Zs && Gs(ws, t2, {
          configurable: true,
          set: A2
        }), js(t2, g2);
      }, is(xs = ks[ys], "toString", function() {
        return bs(this).tag;
      }), is(ks, "withoutSetter", function(g2) {
        return js(ss(g2), g2);
      }), Is.f = Ys, es.f = Ls, Cs.f = Vs, As.f = Ws, $r.f = gs.f = Qs, ts.f = Us, ds.f = function(g2) {
        return js(as(g2), g2);
      }, Lr && os(xs, "description", {
        configurable: true,
        get: function() {
          return bs(this).description;
        }
      })), Zr({
        global: true,
        constructor: true,
        wrap: true,
        forced: !Vr,
        sham: !Vr
      }, {
        Symbol: ks
      }), ps(qr(Ss), function(g2) {
        hs(g2);
      }), Zr({
        target: vs,
        stat: true,
        forced: !Vr
      }, {
        useSetter: function() {
          Zs = true;
        },
        useSimple: function() {
          Zs = false;
        }
      }), Zr({
        target: "Object",
        stat: true,
        forced: !Vr,
        sham: !Lr
      }, {
        create: function(g2, t2) {
          return void 0 === t2 ? Jr(g2) : Vs(Jr(g2), t2);
        },
        defineProperty: Ls,
        defineProperties: Vs,
        getOwnPropertyDescriptor: Ws
      }), Zr({
        target: "Object",
        stat: true,
        forced: !Vr
      }, {
        getOwnPropertyNames: Qs
      }), ls(), cs(ks, vs), rs[fs] = true;
      var _s = vg && !!Symbol.for && !!Symbol.keyFor, Ks = TA, Hs = ig, Xs = qg, Js = sC, qs = Ug, $s = _s, ga = qs("string-to-symbol-registry"), ta = qs("symbol-to-string-registry");
      Ks({
        target: "Symbol",
        stat: true,
        forced: !$s
      }, {
        for: function(g2) {
          var t2 = Js(g2);
          if (Xs(ga, t2)) return ga[t2];
          var A2 = Hs("Symbol")(t2);
          return ga[t2] = A2, ta[A2] = t2, A2;
        }
      });
      var Aa = TA, ea = qg, Ca = xg, Ia = Og, ia = _s, oa = Ug("symbol-to-string-registry");
      Aa({
        target: "Symbol",
        stat: true,
        forced: !ia
      }, {
        keyFor: function(g2) {
          if (!Ca(g2)) throw new TypeError(Ia(g2) + " is not a symbol");
          if (ea(oa, g2)) return oa[g2];
        }
      });
      var na = En, ra = O, sa = y, aa = sC, da = u([].push), ha = TA, la = ig, ca = a, ua = P, pa = u, fa = I, va = O, ya = xg, ma = ve, ba = function(g2) {
        if (ra(g2)) return g2;
        if (na(g2)) {
          for (var t2 = g2.length, A2 = [], e2 = 0; e2 < t2; e2++) {
            var C2 = g2[e2];
            "string" == typeof C2 ? da(A2, C2) : "number" != typeof C2 && "Number" !== sa(C2) && "String" !== sa(C2) || da(A2, aa(C2));
          }
          var I2 = A2.length, i2 = true;
          return function(g3, t3) {
            if (i2) return i2 = false, t3;
            if (na(this)) return t3;
            for (var e3 = 0; e3 < I2; e3++) if (A2[e3] === g3) return t3;
          };
        }
      }, wa = vg, ka = String, xa = la("JSON", "stringify"), Ea = pa(/./.exec), Oa = pa("".charAt), Ta = pa("".charCodeAt), Da = pa("".replace), Na = pa(1 .toString), Ra = /[\uD800-\uDFFF]/g, Pa = /^[\uD800-\uDBFF]$/, Ma = /^[\uDC00-\uDFFF]$/, Ba = !wa || fa(function() {
        var g2 = la("Symbol")("stringify detection");
        return "[null]" !== xa([g2]) || "{}" !== xa({
          a: g2
        }) || "{}" !== xa(Object(g2));
      }), za = fa(function() {
        return '"\\udf06\\ud834"' !== xa("\uDF06\uD834") || '"\\udead"' !== xa("\uDEAD");
      }), Sa = function(g2, t2) {
        var A2 = ma(arguments), e2 = ba(t2);
        if (va(e2) || void 0 !== g2 && !ya(g2)) return A2[1] = function(g3, t3) {
          if (va(e2) && (t3 = ua(e2, this, ka(g3), t3)), !ya(t3)) return t3;
        }, ca(xa, null, A2);
      }, Za = function(g2, t2, A2) {
        var e2 = Oa(A2, t2 - 1), C2 = Oa(A2, t2 + 1);
        return Ea(Pa, g2) && !Ea(Ma, C2) || Ea(Ma, g2) && !Ea(Pa, e2) ? "\\u" + Na(Ta(g2, 0), 16) : g2;
      };
      xa && ha({
        target: "JSON",
        stat: true,
        arity: 3,
        forced: Ba || za
      }, {
        stringify: function(g2, t2, A2) {
          var e2 = ma(arguments), C2 = ca(Ba ? Sa : xa, null, e2);
          return za && "string" == typeof C2 ? Da(C2, Ra, Za) : C2;
        }
      });
      var Fa = ee, Ga = Hg;
      TA({
        target: "Object",
        stat: true,
        forced: !vg || I(function() {
          Fa.f(1);
        })
      }, {
        getOwnPropertySymbols: function(g2) {
          var t2 = Fa.f;
          return t2 ? t2(Ga(g2)) : [];
        }
      }), wr("asyncIterator"), wr("hasInstance"), wr("isConcatSpreadable"), wr("iterator"), wr("match"), wr("matchAll"), wr("replace"), wr("search"), wr("species"), wr("split");
      var ja = Tr;
      wr("toPrimitive"), ja();
      var La = ig, Va = _I;
      wr("toStringTag"), Va(La("Symbol"), "Symbol"), wr("unscopables"), _I(C.JSON, "JSON", true);
      var Ya = tg.Symbol, Wa = dt, Qa = Jt.f, Ua = Wa("metadata"), _a = Function.prototype;
      void 0 === _a[Ua] && Qa(_a, Ua, {
        value: null
      }), wr("asyncDispose"), wr("dispose"), wr("metadata");
      var Ka = Ya, Ha = u, Xa = ig("Symbol"), Ja = Xa.keyFor, qa = Ha(Xa.prototype.valueOf), $a = Xa.isRegisteredSymbol || function(g2) {
        try {
          return void 0 !== Ja(qa(g2));
        } catch (g3) {
          return false;
        }
      };
      TA({
        target: "Symbol",
        stat: true
      }, {
        isRegisteredSymbol: $a
      });
      for (var gd = Ug, td = ig, Ad = u, ed = xg, Cd = dt, Id = td("Symbol"), id = Id.isWellKnownSymbol, od = td("Object", "getOwnPropertyNames"), nd = Ad(Id.prototype.valueOf), rd = gd("wks"), sd = 0, ad = od(Id), dd = ad.length; sd < dd; sd++) try {
        var hd = ad[sd];
        ed(Id[hd]) && Cd(hd);
      } catch (g2) {
      }
      var ld = function(g2) {
        if (id && id(g2)) return true;
        try {
          for (var t2 = nd(g2), A2 = 0, e2 = od(rd), C2 = e2.length; A2 < C2; A2++) if (rd[e2[A2]] == t2) return true;
        } catch (g3) {
        }
        return false;
      };
      TA({
        target: "Symbol",
        stat: true,
        forced: true
      }, {
        isWellKnownSymbol: ld
      }), wr("matcher"), wr("observable"), TA({
        target: "Symbol",
        stat: true,
        name: "isRegisteredSymbol"
      }, {
        isRegistered: $a
      }), TA({
        target: "Symbol",
        stat: true,
        name: "isWellKnownSymbol",
        forced: true
      }, {
        isWellKnown: ld
      }), wr("metadataKey"), wr("patternMatch"), wr("replaceAll");
      var cd = Ka, ud = A(cd), pd = pr.f("iterator"), fd = pd, vd = A(fd);
      function yd(g2) {
        return yd = "function" == typeof ud && "symbol" == typeof vd ? function(g3) {
          return typeof g3;
        } : function(g3) {
          return g3 && "function" == typeof ud && g3.constructor === ud && g3 !== ud.prototype ? "symbol" : typeof g3;
        }, yd(g2);
      }
      var md = A(pr.f("toPrimitive"));
      function bd(g2) {
        var t2 = function(g3, t3) {
          if ("object" !== yd(g3) || null === g3) return g3;
          var A2 = g3[md];
          if (void 0 !== A2) {
            var e2 = A2.call(g3, t3 || "default");
            if ("object" !== yd(e2)) return e2;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t3 ? String : Number)(g3);
        }(g2, "string");
        return "symbol" === yd(t2) ? t2 : String(t2);
      }
      function wd(g2, t2) {
        for (var A2 = 0; A2 < t2.length; A2++) {
          var e2 = t2[A2];
          e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), kn(g2, bd(e2.key), e2);
        }
      }
      function kd(g2, t2, A2) {
        return t2 && wd(g2.prototype, t2), A2 && wd(g2, A2), kn(g2, "prototype", {
          writable: false
        }), g2;
      }
      TA({
        target: "Array",
        stat: true
      }, {
        isArray: En
      });
      var xd = tg.Array.isArray, Ed = A(xd);
      var Od = D, Td = En, Dd = TypeError, Nd = Object.getOwnPropertyDescriptor, Rd = Od && !function() {
        if (void 0 !== this) return true;
        try {
          Object.defineProperty([], "length", {
            writable: false
          }).length = 1;
        } catch (g2) {
          return g2 instanceof TypeError;
        }
      }() ? function(g2, t2) {
        if (Td(g2) && !Nd(g2, "length").writable) throw new Dd("Cannot set read only .length");
        return g2.length = t2;
      } : function(g2, t2) {
        return g2.length = t2;
      }, Pd = Hg, Md = jA, Bd = Rd, zd = Tn;
      TA({
        target: "Array",
        proto: true,
        arity: 1,
        forced: I(function() {
          return 4294967297 !== [].push.call({
            length: 4294967296
          }, 1);
        }) || !function() {
          try {
            Object.defineProperty([], "length", {
              writable: false
            }).push();
          } catch (g2) {
            return g2 instanceof TypeError;
          }
        }()
      }, {
        push: function(g2) {
          var t2 = Pd(this), A2 = Md(t2), e2 = arguments.length;
          zd(A2 + e2);
          for (var C2 = 0; C2 < e2; C2++) t2[A2] = arguments[C2], A2++;
          return Bd(t2, A2), A2;
        }
      });
      var Sd = Me("Array").push, Zd = og, Fd = Sd, Gd = Array.prototype, jd = function(g2) {
        var t2 = g2.push;
        return g2 === Gd || Zd(Gd, g2) && t2 === Gd.push ? Fd : t2;
      }, Ld = jd, Vd = A(Ld);
      var Yd = TA, Wd = En, Qd = ro, Ud = gg, _d = SA, Kd = jA, Hd = J, Xd = lo, Jd = dt, qd = ve, $d = Gn("slice"), gh = Jd("species"), th = Array, Ah = Math.max;
      Yd({
        target: "Array",
        proto: true,
        forced: !$d
      }, {
        slice: function(g2, t2) {
          var A2, e2, C2, I2 = Hd(this), i2 = Kd(I2), o2 = _d(g2, i2), n2 = _d(void 0 === t2 ? i2 : t2, i2);
          if (Wd(I2) && (A2 = I2.constructor, (Qd(A2) && (A2 === th || Wd(A2.prototype)) || Ud(A2) && null === (A2 = A2[gh])) && (A2 = void 0), A2 === th || void 0 === A2)) return qd(I2, o2, n2);
          for (e2 = new (void 0 === A2 ? th : A2)(Ah(n2 - o2, 0)), C2 = 0; o2 < n2; o2++, C2++) o2 in I2 && Xd(e2, C2, I2[o2]);
          return e2.length = C2, e2;
        }
      });
      var eh = Me("Array").slice, Ch = og, Ih = eh, ih = Array.prototype, oh = function(g2) {
        var t2 = g2.slice;
        return g2 === ih || Ch(ih, g2) && t2 === ih.slice ? Ih : t2;
      }, nh = oh, rh = nh, sh = A(rh), ah = A(Qo);
      function dh(g2, t2) {
        (null == t2 || t2 > g2.length) && (t2 = g2.length);
        for (var A2 = 0, e2 = new Array(t2); A2 < t2; A2++) e2[A2] = g2[A2];
        return e2;
      }
      function hh(g2, t2) {
        var A2;
        if (g2) {
          if ("string" == typeof g2) return dh(g2, t2);
          var e2 = sh(A2 = Object.prototype.toString.call(g2)).call(A2, 8, -1);
          return "Object" === e2 && g2.constructor && (e2 = g2.constructor.name), "Map" === e2 || "Set" === e2 ? ah(g2) : "Arguments" === e2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e2) ? dh(g2, t2) : void 0;
        }
      }
      function lh(g2, t2) {
        return function(g3) {
          if (Ed(g3)) return g3;
        }(g2) || function(g3, t3) {
          var A2 = null == g3 ? null : void 0 !== ud && hn(g3) || g3["@@iterator"];
          if (null != A2) {
            var e2, C2, I2, i2, o2 = [], n2 = true, r2 = false;
            try {
              if (I2 = (A2 = A2.call(g3)).next, 0 === t3) {
                if (Object(A2) !== A2) return;
                n2 = false;
              } else for (; !(n2 = (e2 = I2.call(A2)).done) && (Vd(o2).call(o2, e2.value), o2.length !== t3); n2 = true) ;
            } catch (g4) {
              r2 = true, C2 = g4;
            } finally {
              try {
                if (!n2 && null != A2.return && (i2 = A2.return(), Object(i2) !== i2)) return;
              } finally {
                if (r2) throw C2;
              }
            }
            return o2;
          }
        }(g2, t2) || hh(g2, t2) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function ch(g2) {
        return function(g3) {
          if (Ed(g3)) return dh(g3);
        }(g2) || function(g3) {
          if (void 0 !== ud && null != hn(g3) || null != g3["@@iterator"]) return ah(g3);
        }(g2) || hh(g2) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      var uh = A(Ya), ph = Me("Array").concat, fh = og, vh = ph, yh = Array.prototype, mh = function(g2) {
        var t2 = g2.concat;
        return g2 === yh || fh(yh, g2) && t2 === yh.concat ? vh : t2;
      }, bh = A(mh), wh = A(nh), kh = ig, xh = gr, Eh = ee, Oh = AA, Th = u([].concat), Dh = kh("Reflect", "ownKeys") || function(g2) {
        var t2 = xh.f(Oh(g2)), A2 = Eh.f;
        return A2 ? Th(t2, A2(g2)) : t2;
      };
      TA({
        target: "Reflect",
        stat: true
      }, {
        ownKeys: Dh
      });
      var Nh = A(tg.Reflect.ownKeys), Rh = A(xd), Ph = Sr.map;
      TA({
        target: "Array",
        proto: true,
        forced: !Gn("map")
      }, {
        map: function(g2) {
          return Ph(this, g2, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      var Mh = Me("Array").map, Bh = og, zh = Mh, Sh = Array.prototype, Zh = function(g2) {
        var t2 = g2.map;
        return g2 === Sh || Bh(Sh, g2) && t2 === Sh.map ? zh : t2;
      }, Fh = A(Zh), Gh = Hg, jh = Ae;
      TA({
        target: "Object",
        stat: true,
        forced: I(function() {
          jh(1);
        })
      }, {
        keys: function(g2) {
          return jh(Gh(g2));
        }
      });
      var Lh = A(tg.Object.keys), Vh = TA, Yh = Date, Wh = u(Yh.prototype.getTime);
      Vh({
        target: "Date",
        stat: true
      }, {
        now: function() {
          return Wh(new Yh());
        }
      });
      var Qh = A(tg.Date.now), Uh = I, _h = function(g2, t2) {
        var A2 = [][g2];
        return !!A2 && Uh(function() {
          A2.call(null, t2 || function() {
            return 1;
          }, 1);
        });
      }, Kh = Sr.forEach, Hh = _h("forEach") ? [].forEach : function(g2) {
        return Kh(this, g2, arguments.length > 1 ? arguments[1] : void 0);
      };
      TA({
        target: "Array",
        proto: true,
        forced: [].forEach !== Hh
      }, {
        forEach: Hh
      });
      var Xh = Me("Array").forEach, Jh = oC, qh = qg, $h = og, gl = Xh, tl = Array.prototype, Al = {
        DOMTokenList: true,
        NodeList: true
      }, el = function(g2) {
        var t2 = g2.forEach;
        return g2 === tl || $h(tl, g2) && t2 === tl.forEach || qh(Al, Jh(g2)) ? gl : t2;
      }, Cl = A(el), Il = TA, il = En, ol = u([].reverse), nl = [1, 2];
      Il({
        target: "Array",
        proto: true,
        forced: String(nl) === String(nl.reverse())
      }, {
        reverse: function() {
          return il(this) && (this.length = this.length), ol(this);
        }
      });
      var rl = Me("Array").reverse, sl = og, al = rl, dl = Array.prototype, hl = function(g2) {
        var t2 = g2.reverse;
        return g2 === dl || sl(dl, g2) && t2 === dl.reverse ? al : t2;
      }, ll = hl, cl = A(ll), ul = Og, pl = TypeError, fl = function(g2, t2) {
        if (!delete g2[t2]) throw new pl("Cannot delete property " + ul(t2) + " of " + ul(g2));
      }, vl = TA, yl = Hg, ml = SA, bl = PA, wl = jA, kl = Rd, xl = Tn, El = zn, Ol = lo, Tl = fl, Dl = Gn("splice"), Nl = Math.max, Rl = Math.min;
      vl({
        target: "Array",
        proto: true,
        forced: !Dl
      }, {
        splice: function(g2, t2) {
          var A2, e2, C2, I2, i2, o2, n2 = yl(this), r2 = wl(n2), s2 = ml(g2, r2), a2 = arguments.length;
          for (0 === a2 ? A2 = e2 = 0 : 1 === a2 ? (A2 = 0, e2 = r2 - s2) : (A2 = a2 - 2, e2 = Rl(Nl(bl(t2), 0), r2 - s2)), xl(r2 + A2 - e2), C2 = El(n2, e2), I2 = 0; I2 < e2; I2++) (i2 = s2 + I2) in n2 && Ol(C2, I2, n2[i2]);
          if (C2.length = e2, A2 < e2) {
            for (I2 = s2; I2 < r2 - e2; I2++) o2 = I2 + A2, (i2 = I2 + e2) in n2 ? n2[o2] = n2[i2] : Tl(n2, o2);
            for (I2 = r2; I2 > r2 - e2 + A2; I2--) Tl(n2, I2 - 1);
          } else if (A2 > e2) for (I2 = r2 - e2; I2 > s2; I2--) o2 = I2 + A2 - 1, (i2 = I2 + e2 - 1) in n2 ? n2[o2] = n2[i2] : Tl(n2, o2);
          for (I2 = 0; I2 < A2; I2++) n2[I2 + s2] = arguments[I2 + 2];
          return kl(n2, r2 - e2 + A2), C2;
        }
      });
      var Pl = Me("Array").splice, Ml = og, Bl = Pl, zl = Array.prototype, Sl = function(g2) {
        var t2 = g2.splice;
        return g2 === zl || Ml(zl, g2) && t2 === zl.splice ? Bl : t2;
      }, Zl = A(Sl), Fl = QA.includes;
      TA({
        target: "Array",
        proto: true,
        forced: I(function() {
          return !Array(1).includes();
        })
      }, {
        includes: function(g2) {
          return Fl(this, g2, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      var Gl = Me("Array").includes, jl = gg, Ll = y, Vl = dt("match"), Yl = function(g2) {
        var t2;
        return jl(g2) && (void 0 !== (t2 = g2[Vl]) ? !!t2 : "RegExp" === Ll(g2));
      }, Wl = TypeError, Ql = dt("match"), Ul = TA, _l = function(g2) {
        if (Yl(g2)) throw new Wl("The method doesn't accept regular expressions");
        return g2;
      }, Kl = K, Hl = sC, Xl = function(g2) {
        var t2 = /./;
        try {
          "/./"[g2](t2);
        } catch (A2) {
          try {
            return t2[Ql] = false, "/./"[g2](t2);
          } catch (g3) {
          }
        }
        return false;
      }, Jl = u("".indexOf);
      Ul({
        target: "String",
        proto: true,
        forced: !Xl("includes")
      }, {
        includes: function(g2) {
          return !!~Jl(Hl(Kl(this)), Hl(_l(g2)), arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      var ql = Me("String").includes, $l = og, gc = Gl, tc = ql, Ac = Array.prototype, ec = String.prototype, Cc = function(g2) {
        var t2 = g2.includes;
        return g2 === Ac || $l(Ac, g2) && t2 === Ac.includes ? gc : "string" == typeof g2 || g2 === ec || $l(ec, g2) && t2 === ec.includes ? tc : t2;
      }, Ic = A(Cc), ic = Hg, oc = EI, nc = fI;
      TA({
        target: "Object",
        stat: true,
        forced: I(function() {
          oc(1);
        }),
        sham: !nc
      }, {
        getPrototypeOf: function(g2) {
          return oc(ic(g2));
        }
      });
      var rc = tg.Object.getPrototypeOf, sc = A(rc), ac = Sr.filter;
      TA({
        target: "Array",
        proto: true,
        forced: !Gn("filter")
      }, {
        filter: function(g2) {
          return ac(this, g2, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      var dc = Me("Array").filter, hc = og, lc = dc, cc = Array.prototype, uc = function(g2) {
        var t2 = g2.filter;
        return g2 === cc || hc(cc, g2) && t2 === cc.filter ? lc : t2;
      }, pc = A(uc), fc = "	\n\v\f\r                　\u2028\u2029\uFEFF", vc = K, yc = sC, mc = fc, bc = u("".replace), wc = RegExp("^[" + mc + "]+"), kc = RegExp("(^|[^" + mc + "])[" + mc + "]+$"), xc = function(g2) {
        return function(t2) {
          var A2 = yc(vc(t2));
          return 1 & g2 && (A2 = bc(A2, wc, "")), 2 & g2 && (A2 = bc(A2, kc, "$1")), A2;
        };
      }, Ec = {
        start: xc(1),
        end: xc(2),
        trim: xc(3)
      }, Oc = C, Tc = I, Dc = u, Nc = sC, Rc = Ec.trim, Pc = fc, Mc = Oc.parseInt, Bc = Oc.Symbol, zc = Bc && Bc.iterator, Sc = /^[+-]?0x/i, Zc = Dc(Sc.exec), Fc = 8 !== Mc(Pc + "08") || 22 !== Mc(Pc + "0x16") || zc && !Tc(function() {
        Mc(Object(zc));
      }) ? function(g2, t2) {
        var A2 = Rc(Nc(g2));
        return Mc(A2, t2 >>> 0 || (Zc(Sc, A2) ? 16 : 10));
      } : Mc;
      TA({
        global: true,
        forced: parseInt !== Fc
      }, {
        parseInt: Fc
      });
      var Gc = A(tg.parseInt), jc = TA, Lc = QA.indexOf, Vc = _h, Yc = w([].indexOf), Wc = !!Yc && 1 / Yc([1], 1, -0) < 0;
      jc({
        target: "Array",
        proto: true,
        forced: Wc || !Vc("indexOf")
      }, {
        indexOf: function(g2) {
          var t2 = arguments.length > 1 ? arguments[1] : void 0;
          return Wc ? Yc(this, g2, t2) || 0 : Lc(this, g2, t2);
        }
      });
      var Qc = Me("Array").indexOf, Uc = og, _c = Qc, Kc = Array.prototype, Hc = function(g2) {
        var t2 = g2.indexOf;
        return g2 === Kc || Uc(Kc, g2) && t2 === Kc.indexOf ? _c : t2;
      }, Xc = A(Hc);
      TA({
        target: "Object",
        stat: true,
        sham: !D
      }, {
        create: pI
      });
      var Jc = tg.Object, qc = function(g2, t2) {
        return Jc.create(g2, t2);
      }, $c = A(qc), gu = tg, tu = a;
      gu.JSON || (gu.JSON = {
        stringify: JSON.stringify
      });
      var Au = function(g2, t2, A2) {
        return tu(gu.JSON.stringify, null, arguments);
      }, eu = A(Au), Cu = "function" == typeof Bun && Bun && "string" == typeof Bun.version, Iu = TypeError, iu = function(g2, t2) {
        if (g2 < t2) throw new Iu("Not enough arguments");
        return g2;
      }, ou = C, nu = a, ru = O, su = Cu, au = ng, du = ve, hu = iu, lu = ou.Function, cu = /MSIE .\./.test(au) || su && function() {
        var g2 = ou.Bun.version.split(".");
        return g2.length < 3 || "0" === g2[0] && (g2[1] < 3 || "3" === g2[1] && "0" === g2[2]);
      }(), uu = function(g2, t2) {
        var A2 = t2 ? 2 : 1;
        return cu ? function(e2, C2) {
          var I2 = hu(arguments.length, 1) > A2, i2 = ru(e2) ? e2 : lu(e2), o2 = I2 ? du(arguments, A2) : [], n2 = I2 ? function() {
            nu(i2, this, o2);
          } : i2;
          return t2 ? g2(n2, C2) : g2(n2);
        } : g2;
      }, pu = TA, fu = C, vu = uu(fu.setInterval, true);
      pu({
        global: true,
        bind: true,
        forced: fu.setInterval !== vu
      }, {
        setInterval: vu
      });
      var yu = TA, mu = C, bu = uu(mu.setTimeout, true);
      yu({
        global: true,
        bind: true,
        forced: mu.setTimeout !== bu
      }, {
        setTimeout: bu
      });
      var wu = A(tg.setTimeout), ku = Hg, xu = SA, Eu = jA, Ou = function(g2) {
        for (var t2 = ku(this), A2 = Eu(t2), e2 = arguments.length, C2 = xu(e2 > 1 ? arguments[1] : void 0, A2), I2 = e2 > 2 ? arguments[2] : void 0, i2 = void 0 === I2 ? A2 : xu(I2, A2); i2 > C2; ) t2[C2++] = g2;
        return t2;
      };
      TA({
        target: "Array",
        proto: true
      }, {
        fill: Ou
      });
      var Tu, Du = Me("Array").fill, Nu = og, Ru = Du, Pu = Array.prototype, Mu = function(g2) {
        var t2 = g2.fill;
        return g2 === Pu || Nu(Pu, g2) && t2 === Pu.fill ? Ru : t2;
      }, Bu = A(Mu);
      function zu() {
        return zu = Object.assign || function(g2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var A2 = arguments[t2];
            for (var e2 in A2) Object.prototype.hasOwnProperty.call(A2, e2) && (g2[e2] = A2[e2]);
          }
          return g2;
        }, zu.apply(this, arguments);
      }
      function Su(g2, t2) {
        g2.prototype = Object.create(t2.prototype), g2.prototype.constructor = g2, g2.__proto__ = t2;
      }
      function Zu(g2) {
        if (void 0 === g2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return g2;
      }
      Tu = "function" != typeof Object.assign ? function(g2) {
        if (null == g2) throw new TypeError("Cannot convert undefined or null to object");
        for (var t2 = Object(g2), A2 = 1; A2 < arguments.length; A2++) {
          var e2 = arguments[A2];
          if (null != e2) for (var C2 in e2) e2.hasOwnProperty(C2) && (t2[C2] = e2[C2]);
        }
        return t2;
      } : Object.assign;
      var Fu, Gu = Tu, ju = ["", "webkit", "Moz", "MS", "ms", "o"], Lu = "undefined" == typeof document ? {
        style: {}
      } : document.createElement("div"), Vu = Math.round, Yu = Math.abs, Wu = Date.now;
      function Qu(g2, t2) {
        for (var A2, e2, C2 = t2[0].toUpperCase() + t2.slice(1), I2 = 0; I2 < ju.length; ) {
          if ((e2 = (A2 = ju[I2]) ? A2 + C2 : t2) in g2) return e2;
          I2++;
        }
      }
      Fu = "undefined" == typeof window ? {} : window;
      var Uu = Qu(Lu.style, "touchAction"), _u = void 0 !== Uu;
      var Ku = "compute", Hu = "auto", Xu = "manipulation", Ju = "none", qu = "pan-x", $u = "pan-y", gp = function() {
        if (!_u) return false;
        var g2 = {}, t2 = Fu.CSS && Fu.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(A2) {
          return g2[A2] = !t2 || Fu.CSS.supports("touch-action", A2);
        }), g2;
      }(), tp = "ontouchstart" in Fu, Ap = void 0 !== Qu(Fu, "PointerEvent"), ep = tp && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent), Cp = "touch", Ip = "mouse", ip = 25, op = 1, np = 4, rp = 8, sp = 1, ap = 2, dp = 4, hp = 8, lp = 16, cp = ap | dp, up = hp | lp, pp = cp | up, fp = ["x", "y"], vp = ["clientX", "clientY"];
      function yp(g2, t2, A2) {
        var e2;
        if (g2) if (g2.forEach) g2.forEach(t2, A2);
        else if (void 0 !== g2.length) for (e2 = 0; e2 < g2.length; ) t2.call(A2, g2[e2], e2, g2), e2++;
        else for (e2 in g2) g2.hasOwnProperty(e2) && t2.call(A2, g2[e2], e2, g2);
      }
      function mp(g2, t2) {
        return "function" == typeof g2 ? g2.apply(t2 && t2[0] || void 0, t2) : g2;
      }
      function bp(g2, t2) {
        return g2.indexOf(t2) > -1;
      }
      var wp = function() {
        function g2(g3, t3) {
          this.manager = g3, this.set(t3);
        }
        var t2 = g2.prototype;
        return t2.set = function(g3) {
          g3 === Ku && (g3 = this.compute()), _u && this.manager.element.style && gp[g3] && (this.manager.element.style[Uu] = g3), this.actions = g3.toLowerCase().trim();
        }, t2.update = function() {
          this.set(this.manager.options.touchAction);
        }, t2.compute = function() {
          var g3 = [];
          return yp(this.manager.recognizers, function(t3) {
            mp(t3.options.enable, [t3]) && (g3 = g3.concat(t3.getTouchAction()));
          }), function(g4) {
            if (bp(g4, Ju)) return Ju;
            var t3 = bp(g4, qu), A2 = bp(g4, $u);
            return t3 && A2 ? Ju : t3 || A2 ? t3 ? qu : $u : bp(g4, Xu) ? Xu : Hu;
          }(g3.join(" "));
        }, t2.preventDefaults = function(g3) {
          var t3 = g3.srcEvent, A2 = g3.offsetDirection;
          if (this.manager.session.prevented) t3.preventDefault();
          else {
            var e2 = this.actions, C2 = bp(e2, Ju) && !gp[Ju], I2 = bp(e2, $u) && !gp[$u], i2 = bp(e2, qu) && !gp[qu];
            if (C2) {
              var o2 = 1 === g3.pointers.length, n2 = g3.distance < 2, r2 = g3.deltaTime < 250;
              if (o2 && n2 && r2) return;
            }
            if (!i2 || !I2) return C2 || I2 && A2 & cp || i2 && A2 & up ? this.preventSrc(t3) : void 0;
          }
        }, t2.preventSrc = function(g3) {
          this.manager.session.prevented = true, g3.preventDefault();
        }, g2;
      }();
      function kp(g2, t2) {
        for (; g2; ) {
          if (g2 === t2) return true;
          g2 = g2.parentNode;
        }
        return false;
      }
      function xp(g2) {
        var t2 = g2.length;
        if (1 === t2) return {
          x: Vu(g2[0].clientX),
          y: Vu(g2[0].clientY)
        };
        for (var A2 = 0, e2 = 0, C2 = 0; C2 < t2; ) A2 += g2[C2].clientX, e2 += g2[C2].clientY, C2++;
        return {
          x: Vu(A2 / t2),
          y: Vu(e2 / t2)
        };
      }
      function Ep(g2) {
        for (var t2 = [], A2 = 0; A2 < g2.pointers.length; ) t2[A2] = {
          clientX: Vu(g2.pointers[A2].clientX),
          clientY: Vu(g2.pointers[A2].clientY)
        }, A2++;
        return {
          timeStamp: Wu(),
          pointers: t2,
          center: xp(t2),
          deltaX: g2.deltaX,
          deltaY: g2.deltaY
        };
      }
      function Op(g2, t2, A2) {
        A2 || (A2 = fp);
        var e2 = t2[A2[0]] - g2[A2[0]], C2 = t2[A2[1]] - g2[A2[1]];
        return Math.sqrt(e2 * e2 + C2 * C2);
      }
      function Tp(g2, t2, A2) {
        A2 || (A2 = fp);
        var e2 = t2[A2[0]] - g2[A2[0]], C2 = t2[A2[1]] - g2[A2[1]];
        return 180 * Math.atan2(C2, e2) / Math.PI;
      }
      function Dp(g2, t2) {
        return g2 === t2 ? sp : Yu(g2) >= Yu(t2) ? g2 < 0 ? ap : dp : t2 < 0 ? hp : lp;
      }
      function Np(g2, t2, A2) {
        return {
          x: t2 / g2 || 0,
          y: A2 / g2 || 0
        };
      }
      function Rp(g2, t2) {
        var A2 = g2.session, e2 = t2.pointers, C2 = e2.length;
        A2.firstInput || (A2.firstInput = Ep(t2)), C2 > 1 && !A2.firstMultiple ? A2.firstMultiple = Ep(t2) : 1 === C2 && (A2.firstMultiple = false);
        var I2 = A2.firstInput, i2 = A2.firstMultiple, o2 = i2 ? i2.center : I2.center, n2 = t2.center = xp(e2);
        t2.timeStamp = Wu(), t2.deltaTime = t2.timeStamp - I2.timeStamp, t2.angle = Tp(o2, n2), t2.distance = Op(o2, n2), function(g3, t3) {
          var A3 = t3.center, e3 = g3.offsetDelta || {}, C3 = g3.prevDelta || {}, I3 = g3.prevInput || {};
          t3.eventType !== op && I3.eventType !== np || (C3 = g3.prevDelta = {
            x: I3.deltaX || 0,
            y: I3.deltaY || 0
          }, e3 = g3.offsetDelta = {
            x: A3.x,
            y: A3.y
          }), t3.deltaX = C3.x + (A3.x - e3.x), t3.deltaY = C3.y + (A3.y - e3.y);
        }(A2, t2), t2.offsetDirection = Dp(t2.deltaX, t2.deltaY);
        var r2, s2, a2 = Np(t2.deltaTime, t2.deltaX, t2.deltaY);
        t2.overallVelocityX = a2.x, t2.overallVelocityY = a2.y, t2.overallVelocity = Yu(a2.x) > Yu(a2.y) ? a2.x : a2.y, t2.scale = i2 ? (r2 = i2.pointers, Op((s2 = e2)[0], s2[1], vp) / Op(r2[0], r2[1], vp)) : 1, t2.rotation = i2 ? function(g3, t3) {
          return Tp(t3[1], t3[0], vp) + Tp(g3[1], g3[0], vp);
        }(i2.pointers, e2) : 0, t2.maxPointers = A2.prevInput ? t2.pointers.length > A2.prevInput.maxPointers ? t2.pointers.length : A2.prevInput.maxPointers : t2.pointers.length, function(g3, t3) {
          var A3, e3, C3, I3, i3 = g3.lastInterval || t3, o3 = t3.timeStamp - i3.timeStamp;
          if (t3.eventType !== rp && (o3 > ip || void 0 === i3.velocity)) {
            var n3 = t3.deltaX - i3.deltaX, r3 = t3.deltaY - i3.deltaY, s3 = Np(o3, n3, r3);
            e3 = s3.x, C3 = s3.y, A3 = Yu(s3.x) > Yu(s3.y) ? s3.x : s3.y, I3 = Dp(n3, r3), g3.lastInterval = t3;
          } else A3 = i3.velocity, e3 = i3.velocityX, C3 = i3.velocityY, I3 = i3.direction;
          t3.velocity = A3, t3.velocityX = e3, t3.velocityY = C3, t3.direction = I3;
        }(A2, t2);
        var d2, h2 = g2.element, l2 = t2.srcEvent;
        kp(d2 = l2.composedPath ? l2.composedPath()[0] : l2.path ? l2.path[0] : l2.target, h2) && (h2 = d2), t2.target = h2;
      }
      function Pp(g2, t2, A2) {
        var e2 = A2.pointers.length, C2 = A2.changedPointers.length, I2 = t2 & op && e2 - C2 == 0, i2 = t2 & (np | rp) && e2 - C2 == 0;
        A2.isFirst = !!I2, A2.isFinal = !!i2, I2 && (g2.session = {}), A2.eventType = t2, Rp(g2, A2), g2.emit("hammer.input", A2), g2.recognize(A2), g2.session.prevInput = A2;
      }
      function Mp(g2) {
        return g2.trim().split(/\s+/g);
      }
      function Bp(g2, t2, A2) {
        yp(Mp(t2), function(t3) {
          g2.addEventListener(t3, A2, false);
        });
      }
      function zp(g2, t2, A2) {
        yp(Mp(t2), function(t3) {
          g2.removeEventListener(t3, A2, false);
        });
      }
      function Sp(g2) {
        var t2 = g2.ownerDocument || g2;
        return t2.defaultView || t2.parentWindow || window;
      }
      var Zp = function() {
        function g2(g3, t3) {
          var A2 = this;
          this.manager = g3, this.callback = t3, this.element = g3.element, this.target = g3.options.inputTarget, this.domHandler = function(t4) {
            mp(g3.options.enable, [g3]) && A2.handler(t4);
          }, this.init();
        }
        var t2 = g2.prototype;
        return t2.handler = function() {
        }, t2.init = function() {
          this.evEl && Bp(this.element, this.evEl, this.domHandler), this.evTarget && Bp(this.target, this.evTarget, this.domHandler), this.evWin && Bp(Sp(this.element), this.evWin, this.domHandler);
        }, t2.destroy = function() {
          this.evEl && zp(this.element, this.evEl, this.domHandler), this.evTarget && zp(this.target, this.evTarget, this.domHandler), this.evWin && zp(Sp(this.element), this.evWin, this.domHandler);
        }, g2;
      }();
      function Fp(g2, t2, A2) {
        if (g2.indexOf && !A2) return g2.indexOf(t2);
        for (var e2 = 0; e2 < g2.length; ) {
          if (A2 && g2[e2][A2] == t2 || !A2 && g2[e2] === t2) return e2;
          e2++;
        }
        return -1;
      }
      var Gp = {
        pointerdown: op,
        pointermove: 2,
        pointerup: np,
        pointercancel: rp,
        pointerout: rp
      }, jp = {
        2: Cp,
        3: "pen",
        4: Ip,
        5: "kinect"
      }, Lp = "pointerdown", Vp = "pointermove pointerup pointercancel";
      Fu.MSPointerEvent && !Fu.PointerEvent && (Lp = "MSPointerDown", Vp = "MSPointerMove MSPointerUp MSPointerCancel");
      var Yp = function(g2) {
        function t2() {
          var A2, e2 = t2.prototype;
          return e2.evEl = Lp, e2.evWin = Vp, (A2 = g2.apply(this, arguments) || this).store = A2.manager.session.pointerEvents = [], A2;
        }
        return Su(t2, g2), t2.prototype.handler = function(g3) {
          var t3 = this.store, A2 = false, e2 = g3.type.toLowerCase().replace("ms", ""), C2 = Gp[e2], I2 = jp[g3.pointerType] || g3.pointerType, i2 = I2 === Cp, o2 = Fp(t3, g3.pointerId, "pointerId");
          C2 & op && (0 === g3.button || i2) ? o2 < 0 && (t3.push(g3), o2 = t3.length - 1) : C2 & (np | rp) && (A2 = true), o2 < 0 || (t3[o2] = g3, this.callback(this.manager, C2, {
            pointers: t3,
            changedPointers: [g3],
            pointerType: I2,
            srcEvent: g3
          }), A2 && t3.splice(o2, 1));
        }, t2;
      }(Zp);
      function Wp(g2) {
        return Array.prototype.slice.call(g2, 0);
      }
      function Qp(g2, t2, A2) {
        for (var e2 = [], C2 = [], I2 = 0; I2 < g2.length; ) {
          var i2 = t2 ? g2[I2][t2] : g2[I2];
          Fp(C2, i2) < 0 && e2.push(g2[I2]), C2[I2] = i2, I2++;
        }
        return A2 && (e2 = t2 ? e2.sort(function(g3, A3) {
          return g3[t2] > A3[t2];
        }) : e2.sort()), e2;
      }
      var Up = {
        touchstart: op,
        touchmove: 2,
        touchend: np,
        touchcancel: rp
      }, _p = function(g2) {
        function t2() {
          var A2;
          return t2.prototype.evTarget = "touchstart touchmove touchend touchcancel", (A2 = g2.apply(this, arguments) || this).targetIds = {}, A2;
        }
        return Su(t2, g2), t2.prototype.handler = function(g3) {
          var t3 = Up[g3.type], A2 = Kp.call(this, g3, t3);
          A2 && this.callback(this.manager, t3, {
            pointers: A2[0],
            changedPointers: A2[1],
            pointerType: Cp,
            srcEvent: g3
          });
        }, t2;
      }(Zp);
      function Kp(g2, t2) {
        var A2, e2, C2 = Wp(g2.touches), I2 = this.targetIds;
        if (t2 & (2 | op) && 1 === C2.length) return I2[C2[0].identifier] = true, [C2, C2];
        var i2 = Wp(g2.changedTouches), o2 = [], n2 = this.target;
        if (e2 = C2.filter(function(g3) {
          return kp(g3.target, n2);
        }), t2 === op) for (A2 = 0; A2 < e2.length; ) I2[e2[A2].identifier] = true, A2++;
        for (A2 = 0; A2 < i2.length; ) I2[i2[A2].identifier] && o2.push(i2[A2]), t2 & (np | rp) && delete I2[i2[A2].identifier], A2++;
        return o2.length ? [Qp(e2.concat(o2), "identifier", true), o2] : void 0;
      }
      var Hp = {
        mousedown: op,
        mousemove: 2,
        mouseup: np
      }, Xp = function(g2) {
        function t2() {
          var A2, e2 = t2.prototype;
          return e2.evEl = "mousedown", e2.evWin = "mousemove mouseup", (A2 = g2.apply(this, arguments) || this).pressed = false, A2;
        }
        return Su(t2, g2), t2.prototype.handler = function(g3) {
          var t3 = Hp[g3.type];
          t3 & op && 0 === g3.button && (this.pressed = true), 2 & t3 && 1 !== g3.which && (t3 = np), this.pressed && (t3 & np && (this.pressed = false), this.callback(this.manager, t3, {
            pointers: [g3],
            changedPointers: [g3],
            pointerType: Ip,
            srcEvent: g3
          }));
        }, t2;
      }(Zp), Jp = 2500;
      function qp(g2) {
        var t2 = g2.changedPointers[0];
        if (t2.identifier === this.primaryTouch) {
          var A2 = {
            x: t2.clientX,
            y: t2.clientY
          }, e2 = this.lastTouches;
          this.lastTouches.push(A2);
          setTimeout(function() {
            var g3 = e2.indexOf(A2);
            g3 > -1 && e2.splice(g3, 1);
          }, Jp);
        }
      }
      function $p(g2, t2) {
        g2 & op ? (this.primaryTouch = t2.changedPointers[0].identifier, qp.call(this, t2)) : g2 & (np | rp) && qp.call(this, t2);
      }
      function gf(g2) {
        for (var t2 = g2.srcEvent.clientX, A2 = g2.srcEvent.clientY, e2 = 0; e2 < this.lastTouches.length; e2++) {
          var C2 = this.lastTouches[e2], I2 = Math.abs(t2 - C2.x), i2 = Math.abs(A2 - C2.y);
          if (I2 <= 25 && i2 <= 25) return true;
        }
        return false;
      }
      var tf = function() {
        return function(g2) {
          function t2(t3, A2) {
            var e2;
            return (e2 = g2.call(this, t3, A2) || this).handler = function(g3, t4, A3) {
              var C2 = A3.pointerType === Cp, I2 = A3.pointerType === Ip;
              if (!(I2 && A3.sourceCapabilities && A3.sourceCapabilities.firesTouchEvents)) {
                if (C2) $p.call(Zu(Zu(e2)), t4, A3);
                else if (I2 && gf.call(Zu(Zu(e2)), A3)) return;
                e2.callback(g3, t4, A3);
              }
            }, e2.touch = new _p(e2.manager, e2.handler), e2.mouse = new Xp(e2.manager, e2.handler), e2.primaryTouch = null, e2.lastTouches = [], e2;
          }
          return Su(t2, g2), t2.prototype.destroy = function() {
            this.touch.destroy(), this.mouse.destroy();
          }, t2;
        }(Zp);
      }();
      function Af(g2, t2, A2) {
        return !!Array.isArray(g2) && (yp(g2, A2[t2], A2), true);
      }
      var ef = 32, Cf = 1;
      function If(g2, t2) {
        var A2 = t2.manager;
        return A2 ? A2.get(g2) : g2;
      }
      function of(g2) {
        return 16 & g2 ? "cancel" : 8 & g2 ? "end" : 4 & g2 ? "move" : 2 & g2 ? "start" : "";
      }
      var nf = function() {
        function g2(g3) {
          void 0 === g3 && (g3 = {}), this.options = zu({
            enable: true
          }, g3), this.id = Cf++, this.manager = null, this.state = 1, this.simultaneous = {}, this.requireFail = [];
        }
        var t2 = g2.prototype;
        return t2.set = function(g3) {
          return Gu(this.options, g3), this.manager && this.manager.touchAction.update(), this;
        }, t2.recognizeWith = function(g3) {
          if (Af(g3, "recognizeWith", this)) return this;
          var t3 = this.simultaneous;
          return t3[(g3 = If(g3, this)).id] || (t3[g3.id] = g3, g3.recognizeWith(this)), this;
        }, t2.dropRecognizeWith = function(g3) {
          return Af(g3, "dropRecognizeWith", this) || (g3 = If(g3, this), delete this.simultaneous[g3.id]), this;
        }, t2.requireFailure = function(g3) {
          if (Af(g3, "requireFailure", this)) return this;
          var t3 = this.requireFail;
          return -1 === Fp(t3, g3 = If(g3, this)) && (t3.push(g3), g3.requireFailure(this)), this;
        }, t2.dropRequireFailure = function(g3) {
          if (Af(g3, "dropRequireFailure", this)) return this;
          g3 = If(g3, this);
          var t3 = Fp(this.requireFail, g3);
          return t3 > -1 && this.requireFail.splice(t3, 1), this;
        }, t2.hasRequireFailures = function() {
          return this.requireFail.length > 0;
        }, t2.canRecognizeWith = function(g3) {
          return !!this.simultaneous[g3.id];
        }, t2.emit = function(g3) {
          var t3 = this, A2 = this.state;
          function e2(A3) {
            t3.manager.emit(A3, g3);
          }
          A2 < 8 && e2(t3.options.event + of(A2)), e2(t3.options.event), g3.additionalEvent && e2(g3.additionalEvent), A2 >= 8 && e2(t3.options.event + of(A2));
        }, t2.tryEmit = function(g3) {
          if (this.canEmit()) return this.emit(g3);
          this.state = ef;
        }, t2.canEmit = function() {
          for (var g3 = 0; g3 < this.requireFail.length; ) {
            if (!(33 & this.requireFail[g3].state)) return false;
            g3++;
          }
          return true;
        }, t2.recognize = function(g3) {
          var t3 = Gu({}, g3);
          if (!mp(this.options.enable, [this, t3])) return this.reset(), void (this.state = ef);
          56 & this.state && (this.state = 1), this.state = this.process(t3), 30 & this.state && this.tryEmit(t3);
        }, t2.process = function(g3) {
        }, t2.getTouchAction = function() {
        }, t2.reset = function() {
        }, g2;
      }(), rf = function(g2) {
        function t2(t3) {
          var A3;
          return void 0 === t3 && (t3 = {}), (A3 = g2.call(this, zu({
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
          }, t3)) || this).pTime = false, A3.pCenter = false, A3._timer = null, A3._input = null, A3.count = 0, A3;
        }
        Su(t2, g2);
        var A2 = t2.prototype;
        return A2.getTouchAction = function() {
          return [Xu];
        }, A2.process = function(g3) {
          var t3 = this, A3 = this.options, e2 = g3.pointers.length === A3.pointers, C2 = g3.distance < A3.threshold, I2 = g3.deltaTime < A3.time;
          if (this.reset(), g3.eventType & op && 0 === this.count) return this.failTimeout();
          if (C2 && I2 && e2) {
            if (g3.eventType !== np) return this.failTimeout();
            var i2 = !this.pTime || g3.timeStamp - this.pTime < A3.interval, o2 = !this.pCenter || Op(this.pCenter, g3.center) < A3.posThreshold;
            if (this.pTime = g3.timeStamp, this.pCenter = g3.center, o2 && i2 ? this.count += 1 : this.count = 1, this._input = g3, 0 === this.count % A3.taps) return this.hasRequireFailures() ? (this._timer = setTimeout(function() {
              t3.state = 8, t3.tryEmit();
            }, A3.interval), 2) : 8;
          }
          return ef;
        }, A2.failTimeout = function() {
          var g3 = this;
          return this._timer = setTimeout(function() {
            g3.state = ef;
          }, this.options.interval), ef;
        }, A2.reset = function() {
          clearTimeout(this._timer);
        }, A2.emit = function() {
          8 === this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
        }, t2;
      }(nf), sf = function(g2) {
        function t2(t3) {
          return void 0 === t3 && (t3 = {}), g2.call(this, zu({
            pointers: 1
          }, t3)) || this;
        }
        Su(t2, g2);
        var A2 = t2.prototype;
        return A2.attrTest = function(g3) {
          var t3 = this.options.pointers;
          return 0 === t3 || g3.pointers.length === t3;
        }, A2.process = function(g3) {
          var t3 = this.state, A3 = g3.eventType, e2 = 6 & t3, C2 = this.attrTest(g3);
          return e2 && (A3 & rp || !C2) ? 16 | t3 : e2 || C2 ? A3 & np ? 8 | t3 : 2 & t3 ? 4 | t3 : 2 : ef;
        }, t2;
      }(nf);
      function af(g2) {
        return g2 === lp ? "down" : g2 === hp ? "up" : g2 === ap ? "left" : g2 === dp ? "right" : "";
      }
      var df = function(g2) {
        function t2(t3) {
          var A3;
          return void 0 === t3 && (t3 = {}), (A3 = g2.call(this, zu({
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: pp
          }, t3)) || this).pX = null, A3.pY = null, A3;
        }
        Su(t2, g2);
        var A2 = t2.prototype;
        return A2.getTouchAction = function() {
          var g3 = this.options.direction, t3 = [];
          return g3 & cp && t3.push($u), g3 & up && t3.push(qu), t3;
        }, A2.directionTest = function(g3) {
          var t3 = this.options, A3 = true, e2 = g3.distance, C2 = g3.direction, I2 = g3.deltaX, i2 = g3.deltaY;
          return C2 & t3.direction || (t3.direction & cp ? (C2 = 0 === I2 ? sp : I2 < 0 ? ap : dp, A3 = I2 !== this.pX, e2 = Math.abs(g3.deltaX)) : (C2 = 0 === i2 ? sp : i2 < 0 ? hp : lp, A3 = i2 !== this.pY, e2 = Math.abs(g3.deltaY))), g3.direction = C2, A3 && e2 > t3.threshold && C2 & t3.direction;
        }, A2.attrTest = function(g3) {
          return sf.prototype.attrTest.call(this, g3) && (2 & this.state || !(2 & this.state) && this.directionTest(g3));
        }, A2.emit = function(t3) {
          this.pX = t3.deltaX, this.pY = t3.deltaY;
          var A3 = af(t3.direction);
          A3 && (t3.additionalEvent = this.options.event + A3), g2.prototype.emit.call(this, t3);
        }, t2;
      }(sf), hf = function(g2) {
        function t2(t3) {
          return void 0 === t3 && (t3 = {}), g2.call(this, zu({
            event: "swipe",
            threshold: 10,
            velocity: 0.3,
            direction: cp | up,
            pointers: 1
          }, t3)) || this;
        }
        Su(t2, g2);
        var A2 = t2.prototype;
        return A2.getTouchAction = function() {
          return df.prototype.getTouchAction.call(this);
        }, A2.attrTest = function(t3) {
          var A3, e2 = this.options.direction;
          return e2 & (cp | up) ? A3 = t3.overallVelocity : e2 & cp ? A3 = t3.overallVelocityX : e2 & up && (A3 = t3.overallVelocityY), g2.prototype.attrTest.call(this, t3) && e2 & t3.offsetDirection && t3.distance > this.options.threshold && t3.maxPointers === this.options.pointers && Yu(A3) > this.options.velocity && t3.eventType & np;
        }, A2.emit = function(g3) {
          var t3 = af(g3.offsetDirection);
          t3 && this.manager.emit(this.options.event + t3, g3), this.manager.emit(this.options.event, g3);
        }, t2;
      }(sf), lf = function(g2) {
        function t2(t3) {
          return void 0 === t3 && (t3 = {}), g2.call(this, zu({
            event: "pinch",
            threshold: 0,
            pointers: 2
          }, t3)) || this;
        }
        Su(t2, g2);
        var A2 = t2.prototype;
        return A2.getTouchAction = function() {
          return [Ju];
        }, A2.attrTest = function(t3) {
          return g2.prototype.attrTest.call(this, t3) && (Math.abs(t3.scale - 1) > this.options.threshold || 2 & this.state);
        }, A2.emit = function(t3) {
          if (1 !== t3.scale) {
            var A3 = t3.scale < 1 ? "in" : "out";
            t3.additionalEvent = this.options.event + A3;
          }
          g2.prototype.emit.call(this, t3);
        }, t2;
      }(sf), cf = function(g2) {
        function t2(t3) {
          return void 0 === t3 && (t3 = {}), g2.call(this, zu({
            event: "rotate",
            threshold: 0,
            pointers: 2
          }, t3)) || this;
        }
        Su(t2, g2);
        var A2 = t2.prototype;
        return A2.getTouchAction = function() {
          return [Ju];
        }, A2.attrTest = function(t3) {
          return g2.prototype.attrTest.call(this, t3) && (Math.abs(t3.rotation) > this.options.threshold || 2 & this.state);
        }, t2;
      }(sf), uf = function(g2) {
        function t2(t3) {
          var A3;
          return void 0 === t3 && (t3 = {}), (A3 = g2.call(this, zu({
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
          }, t3)) || this)._timer = null, A3._input = null, A3;
        }
        Su(t2, g2);
        var A2 = t2.prototype;
        return A2.getTouchAction = function() {
          return [Hu];
        }, A2.process = function(g3) {
          var t3 = this, A3 = this.options, e2 = g3.pointers.length === A3.pointers, C2 = g3.distance < A3.threshold, I2 = g3.deltaTime > A3.time;
          if (this._input = g3, !C2 || !e2 || g3.eventType & (np | rp) && !I2) this.reset();
          else if (g3.eventType & op) this.reset(), this._timer = setTimeout(function() {
            t3.state = 8, t3.tryEmit();
          }, A3.time);
          else if (g3.eventType & np) return 8;
          return ef;
        }, A2.reset = function() {
          clearTimeout(this._timer);
        }, A2.emit = function(g3) {
          8 === this.state && (g3 && g3.eventType & np ? this.manager.emit(this.options.event + "up", g3) : (this._input.timeStamp = Wu(), this.manager.emit(this.options.event, this._input)));
        }, t2;
      }(nf), pf = {
        domEvents: false,
        touchAction: Ku,
        enable: true,
        inputTarget: null,
        inputClass: null,
        cssProps: {
          userSelect: "none",
          touchSelect: "none",
          touchCallout: "none",
          contentZooming: "none",
          userDrag: "none",
          tapHighlightColor: "rgba(0,0,0,0)"
        }
      }, ff = [[cf, {
        enable: false
      }], [lf, {
        enable: false
      }, ["rotate"]], [hf, {
        direction: cp
      }], [df, {
        direction: cp
      }, ["swipe"]], [rf], [rf, {
        event: "doubletap",
        taps: 2
      }, ["tap"]], [uf]];
      function vf(g2, t2) {
        var A2, e2 = g2.element;
        e2.style && (yp(g2.options.cssProps, function(C2, I2) {
          A2 = Qu(e2.style, I2), t2 ? (g2.oldCssProps[A2] = e2.style[A2], e2.style[A2] = C2) : e2.style[A2] = g2.oldCssProps[A2] || "";
        }), t2 || (g2.oldCssProps = {}));
      }
      var yf = function() {
        function g2(g3, t3) {
          var A2, e2 = this;
          this.options = Gu({}, pf, t3 || {}), this.options.inputTarget = this.options.inputTarget || g3, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = g3, this.input = new ((A2 = this).options.inputClass || (Ap ? Yp : ep ? _p : tp ? tf : Xp))(A2, Pp), this.touchAction = new wp(this, this.options.touchAction), vf(this, true), yp(this.options.recognizers, function(g4) {
            var t4 = e2.add(new g4[0](g4[1]));
            g4[2] && t4.recognizeWith(g4[2]), g4[3] && t4.requireFailure(g4[3]);
          }, this);
        }
        var t2 = g2.prototype;
        return t2.set = function(g3) {
          return Gu(this.options, g3), g3.touchAction && this.touchAction.update(), g3.inputTarget && (this.input.destroy(), this.input.target = g3.inputTarget, this.input.init()), this;
        }, t2.stop = function(g3) {
          this.session.stopped = g3 ? 2 : 1;
        }, t2.recognize = function(g3) {
          var t3 = this.session;
          if (!t3.stopped) {
            var A2;
            this.touchAction.preventDefaults(g3);
            var e2 = this.recognizers, C2 = t3.curRecognizer;
            (!C2 || C2 && 8 & C2.state) && (t3.curRecognizer = null, C2 = null);
            for (var I2 = 0; I2 < e2.length; ) A2 = e2[I2], 2 === t3.stopped || C2 && A2 !== C2 && !A2.canRecognizeWith(C2) ? A2.reset() : A2.recognize(g3), !C2 && 14 & A2.state && (t3.curRecognizer = A2, C2 = A2), I2++;
          }
        }, t2.get = function(g3) {
          if (g3 instanceof nf) return g3;
          for (var t3 = this.recognizers, A2 = 0; A2 < t3.length; A2++) if (t3[A2].options.event === g3) return t3[A2];
          return null;
        }, t2.add = function(g3) {
          if (Af(g3, "add", this)) return this;
          var t3 = this.get(g3.options.event);
          return t3 && this.remove(t3), this.recognizers.push(g3), g3.manager = this, this.touchAction.update(), g3;
        }, t2.remove = function(g3) {
          if (Af(g3, "remove", this)) return this;
          var t3 = this.get(g3);
          if (g3) {
            var A2 = this.recognizers, e2 = Fp(A2, t3);
            -1 !== e2 && (A2.splice(e2, 1), this.touchAction.update());
          }
          return this;
        }, t2.on = function(g3, t3) {
          if (void 0 === g3 || void 0 === t3) return this;
          var A2 = this.handlers;
          return yp(Mp(g3), function(g4) {
            A2[g4] = A2[g4] || [], A2[g4].push(t3);
          }), this;
        }, t2.off = function(g3, t3) {
          if (void 0 === g3) return this;
          var A2 = this.handlers;
          return yp(Mp(g3), function(g4) {
            t3 ? A2[g4] && A2[g4].splice(Fp(A2[g4], t3), 1) : delete A2[g4];
          }), this;
        }, t2.emit = function(g3, t3) {
          this.options.domEvents && function(g4, t4) {
            var A3 = document.createEvent("Event");
            A3.initEvent(g4, true, true), A3.gesture = t4, t4.target.dispatchEvent(A3);
          }(g3, t3);
          var A2 = this.handlers[g3] && this.handlers[g3].slice();
          if (A2 && A2.length) {
            t3.type = g3, t3.preventDefault = function() {
              t3.srcEvent.preventDefault();
            };
            for (var e2 = 0; e2 < A2.length; ) A2[e2](t3), e2++;
          }
        }, t2.destroy = function() {
          this.element && vf(this, false), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
        }, g2;
      }(), mf = {
        touchstart: op,
        touchmove: 2,
        touchend: np,
        touchcancel: rp
      }, bf = function(g2) {
        function t2() {
          var A2, e2 = t2.prototype;
          return e2.evTarget = "touchstart", e2.evWin = "touchstart touchmove touchend touchcancel", (A2 = g2.apply(this, arguments) || this).started = false, A2;
        }
        return Su(t2, g2), t2.prototype.handler = function(g3) {
          var t3 = mf[g3.type];
          if (t3 === op && (this.started = true), this.started) {
            var A2 = wf.call(this, g3, t3);
            t3 & (np | rp) && A2[0].length - A2[1].length == 0 && (this.started = false), this.callback(this.manager, t3, {
              pointers: A2[0],
              changedPointers: A2[1],
              pointerType: Cp,
              srcEvent: g3
            });
          }
        }, t2;
      }(Zp);
      function wf(g2, t2) {
        var A2 = Wp(g2.touches), e2 = Wp(g2.changedTouches);
        return t2 & (np | rp) && (A2 = Qp(A2.concat(e2), "identifier", true)), [A2, e2];
      }
      function kf(g2, t2, A2) {
        var e2 = "DEPRECATED METHOD: " + t2 + "\n" + A2 + " AT \n";
        return function() {
          var t3 = new Error("get-stack-trace"), A3 = t3 && t3.stack ? t3.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", C2 = window.console && (window.console.warn || window.console.log);
          return C2 && C2.call(window.console, e2, A3), g2.apply(this, arguments);
        };
      }
      var xf = kf(function(g2, t2, A2) {
        for (var e2 = Object.keys(t2), C2 = 0; C2 < e2.length; ) (!A2 || A2 && void 0 === g2[e2[C2]]) && (g2[e2[C2]] = t2[e2[C2]]), C2++;
        return g2;
      }, "extend", "Use `assign`."), Ef = kf(function(g2, t2) {
        return xf(g2, t2, true);
      }, "merge", "Use `assign`.");
      function Of(g2, t2, A2) {
        var e2, C2 = t2.prototype;
        (e2 = g2.prototype = Object.create(C2)).constructor = g2, e2._super = C2, A2 && Gu(e2, A2);
      }
      function Tf(g2, t2) {
        return function() {
          return g2.apply(t2, arguments);
        };
      }
      var Df = function() {
        var g2 = function(g3, t2) {
          return void 0 === t2 && (t2 = {}), new yf(g3, zu({
            recognizers: ff.concat()
          }, t2));
        };
        return g2.VERSION = "2.0.17-rc", g2.DIRECTION_ALL = pp, g2.DIRECTION_DOWN = lp, g2.DIRECTION_LEFT = ap, g2.DIRECTION_RIGHT = dp, g2.DIRECTION_UP = hp, g2.DIRECTION_HORIZONTAL = cp, g2.DIRECTION_VERTICAL = up, g2.DIRECTION_NONE = sp, g2.DIRECTION_DOWN = lp, g2.INPUT_START = op, g2.INPUT_MOVE = 2, g2.INPUT_END = np, g2.INPUT_CANCEL = rp, g2.STATE_POSSIBLE = 1, g2.STATE_BEGAN = 2, g2.STATE_CHANGED = 4, g2.STATE_ENDED = 8, g2.STATE_RECOGNIZED = 8, g2.STATE_CANCELLED = 16, g2.STATE_FAILED = ef, g2.Manager = yf, g2.Input = Zp, g2.TouchAction = wp, g2.TouchInput = _p, g2.MouseInput = Xp, g2.PointerEventInput = Yp, g2.TouchMouseInput = tf, g2.SingleTouchInput = bf, g2.Recognizer = nf, g2.AttrRecognizer = sf, g2.Tap = rf, g2.Pan = df, g2.Swipe = hf, g2.Pinch = lf, g2.Rotate = cf, g2.Press = uf, g2.on = Bp, g2.off = zp, g2.each = yp, g2.merge = Ef, g2.extend = xf, g2.bindFn = Tf, g2.assign = Gu, g2.inherit = Of, g2.bindFn = Tf, g2.prefixed = Qu, g2.toArray = Wp, g2.inArray = Fp, g2.uniqueArray = Qp, g2.splitStr = Mp, g2.boolOrFn = mp, g2.hasParent = kp, g2.addEventListeners = Bp, g2.removeEventListeners = zp, g2.defaults = Gu({}, pf, {
          preset: ff
        }), g2;
      }();
      Df.defaults;
      var Nf = Df;
      function Rf(g2, t2) {
        var A2 = void 0 !== uh && ln(g2) || g2["@@iterator"];
        if (!A2) {
          if (Rh(g2) || (A2 = function(g3, t3) {
            var A3;
            if (!g3) return;
            if ("string" == typeof g3) return Pf(g3, t3);
            var e3 = wh(A3 = Object.prototype.toString.call(g3)).call(A3, 8, -1);
            "Object" === e3 && g3.constructor && (e3 = g3.constructor.name);
            if ("Map" === e3 || "Set" === e3) return Uo(g3);
            if ("Arguments" === e3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e3)) return Pf(g3, t3);
          }(g2)) || t2 && g2 && "number" == typeof g2.length) {
            A2 && (g2 = A2);
            var e2 = 0, C2 = function() {
            };
            return {
              s: C2,
              n: function() {
                return e2 >= g2.length ? {
                  done: true
                } : {
                  done: false,
                  value: g2[e2++]
                };
              },
              e: function(g3) {
                throw g3;
              },
              f: C2
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var I2, i2 = true, o2 = false;
        return {
          s: function() {
            A2 = A2.call(g2);
          },
          n: function() {
            var g3 = A2.next();
            return i2 = g3.done, g3;
          },
          e: function(g3) {
            o2 = true, I2 = g3;
          },
          f: function() {
            try {
              i2 || null == A2.return || A2.return();
            } finally {
              if (o2) throw I2;
            }
          }
        };
      }
      function Pf(g2, t2) {
        (null == t2 || t2 > g2.length) && (t2 = g2.length);
        for (var A2 = 0, e2 = new Array(t2); A2 < t2; A2++) e2[A2] = g2[A2];
        return e2;
      }
      var Mf = uh("DELETE");
      function Bf() {
        var g2 = zf.apply(void 0, arguments);
        return Zf(g2), g2;
      }
      function zf() {
        for (var g2 = arguments.length, t2 = new Array(g2), A2 = 0; A2 < g2; A2++) t2[A2] = arguments[A2];
        if (t2.length < 2) return t2[0];
        var e2;
        if (t2.length > 2) return zf.apply(void 0, bh(e2 = [Bf(t2[0], t2[1])]).call(e2, ch(wh(t2).call(t2, 2))));
        var C2 = t2[0], I2 = t2[1];
        if (C2 instanceof Date && I2 instanceof Date) return C2.setTime(I2.getTime()), C2;
        var i2, o2 = Rf(Nh(I2));
        try {
          for (o2.s(); !(i2 = o2.n()).done; ) {
            var n2 = i2.value;
            Object.prototype.propertyIsEnumerable.call(I2, n2) && (I2[n2] === Mf ? delete C2[n2] : null === C2[n2] || null === I2[n2] || "object" !== yd(C2[n2]) || "object" !== yd(I2[n2]) || Rh(C2[n2]) || Rh(I2[n2]) ? C2[n2] = Sf(I2[n2]) : C2[n2] = zf(C2[n2], I2[n2]));
          }
        } catch (g3) {
          o2.e(g3);
        } finally {
          o2.f();
        }
        return C2;
      }
      function Sf(g2) {
        return Rh(g2) ? Fh(g2).call(g2, function(g3) {
          return Sf(g3);
        }) : "object" === yd(g2) && null !== g2 ? g2 instanceof Date ? new Date(g2.getTime()) : zf({}, g2) : g2;
      }
      function Zf(g2) {
        for (var t2 = 0, A2 = Lh(g2); t2 < A2.length; t2++) {
          var e2 = A2[t2];
          g2[e2] === Mf ? delete g2[e2] : "object" === yd(g2[e2]) && null !== g2[e2] && Zf(g2[e2]);
        }
      }
      function Ff() {
        for (var g2 = arguments.length, t2 = new Array(g2), A2 = 0; A2 < g2; A2++) t2[A2] = arguments[A2];
        return function(g3) {
          var t3 = function() {
            for (var g4 = /* @__PURE__ */ function() {
              var g5 = 4022871197;
              return function(t5) {
                for (var A5 = t5.toString(), e4 = 0; e4 < A5.length; e4++) {
                  var C4 = 0.02519603282416938 * (g5 += A5.charCodeAt(e4));
                  C4 -= g5 = C4 >>> 0, g5 = (C4 *= g5) >>> 0, g5 += 4294967296 * (C4 -= g5);
                }
                return 23283064365386963e-26 * (g5 >>> 0);
              };
            }(), t4 = g4(" "), A4 = g4(" "), e3 = g4(" "), C3 = 0; C3 < arguments.length; C3++) (t4 -= g4(C3 < 0 || arguments.length <= C3 ? void 0 : arguments[C3])) < 0 && (t4 += 1), (A4 -= g4(C3 < 0 || arguments.length <= C3 ? void 0 : arguments[C3])) < 0 && (A4 += 1), (e3 -= g4(C3 < 0 || arguments.length <= C3 ? void 0 : arguments[C3])) < 0 && (e3 += 1);
            return [t4, A4, e3];
          }(g3), A3 = lh(t3, 3), e2 = A3[0], C2 = A3[1], I2 = A3[2], i2 = 1, o2 = function() {
            var g4 = 2091639 * e2 + 23283064365386963e-26 * i2;
            return e2 = C2, C2 = I2, I2 = g4 - (i2 = 0 | g4);
          };
          return o2.uint32 = function() {
            return 4294967296 * o2();
          }, o2.fract53 = function() {
            return o2() + 11102230246251565e-32 * (2097152 * o2() | 0);
          }, o2.algorithm = "Alea", o2.seed = g3, o2.version = "0.9", o2;
        }(t2.length ? t2 : [Qh()]);
      }
      var Gf = "undefined" != typeof window ? window.Hammer || Nf : function() {
        return /* @__PURE__ */ function() {
          var g2 = function() {
          };
          return {
            on: g2,
            off: g2,
            destroy: g2,
            emit: g2,
            get: function() {
              return {
                set: g2
              };
            }
          };
        }();
      };
      function jf(g2) {
        var t2, A2 = this;
        this._cleanupQueue = [], this.active = false, this._dom = {
          container: g2,
          overlay: document.createElement("div")
        }, this._dom.overlay.classList.add("vis-overlay"), this._dom.container.appendChild(this._dom.overlay), this._cleanupQueue.push(function() {
          A2._dom.overlay.parentNode.removeChild(A2._dom.overlay);
        });
        var e2 = Gf(this._dom.overlay);
        e2.on("tap", je(t2 = this._onTapOverlay).call(t2, this)), this._cleanupQueue.push(function() {
          e2.destroy();
        });
        var C2 = ["tap", "doubletap", "press", "pinch", "pan", "panstart", "panmove", "panend"];
        Cl(C2).call(C2, function(g3) {
          e2.on(g3, function(g4) {
            g4.srcEvent.stopPropagation();
          });
        }), document && document.body && (this._onClick = function(t3) {
          (function(g3, t4) {
            for (; g3; ) {
              if (g3 === t4) return true;
              g3 = g3.parentNode;
            }
            return false;
          })(t3.target, g2) || A2.deactivate();
        }, document.body.addEventListener("click", this._onClick), this._cleanupQueue.push(function() {
          document.body.removeEventListener("click", A2._onClick);
        })), this._escListener = function(g3) {
          ("key" in g3 ? "Escape" === g3.key : 27 === g3.keyCode) && A2.deactivate();
        };
      }
      He(jf.prototype), jf.current = null, jf.prototype.destroy = function() {
        var g2, t2;
        this.deactivate();
        var A2, e2 = Rf(cl(g2 = Zl(t2 = this._cleanupQueue).call(t2, 0)).call(g2));
        try {
          for (e2.s(); !(A2 = e2.n()).done; ) {
            (0, A2.value)();
          }
        } catch (g3) {
          e2.e(g3);
        } finally {
          e2.f();
        }
      }, jf.prototype.activate = function() {
        jf.current && jf.current.deactivate(), jf.current = this, this.active = true, this._dom.overlay.style.display = "none", this._dom.container.classList.add("vis-active"), this.emit("change"), this.emit("activate"), document.body.addEventListener("keydown", this._escListener);
      }, jf.prototype.deactivate = function() {
        this.active = false, this._dom.overlay.style.display = "block", this._dom.container.classList.remove("vis-active"), document.body.removeEventListener("keydown", this._escListener), this.emit("change"), this.emit("deactivate");
      }, jf.prototype._onTapOverlay = function(g2) {
        this.activate(), g2.srcEvent.stopPropagation();
      };
      var Lf = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i, Vf = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, Yf = /^rgb\( *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *\)$/i, Wf = /^rgba\( *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *([01]|0?\.\d+) *\)$/i;
      function Qf(g2) {
        if (g2) for (; true === g2.hasChildNodes(); ) {
          var t2 = g2.firstChild;
          t2 && (Qf(t2), g2.removeChild(t2));
        }
      }
      function Uf(g2) {
        return g2 instanceof String || "string" == typeof g2;
      }
      function _f(g2) {
        return "object" === yd(g2) && null !== g2;
      }
      function Kf(g2, t2, A2, e2) {
        var C2 = false;
        true === e2 && (C2 = null === t2[A2] && void 0 !== g2[A2]), C2 ? delete g2[A2] : g2[A2] = t2[A2];
      }
      function Hf(g2, t2) {
        var A2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        for (var e2 in g2) if (void 0 !== t2[e2]) if (null === t2[e2] || "object" !== yd(t2[e2])) Kf(g2, t2, e2, A2);
        else {
          var C2 = g2[e2], I2 = t2[e2];
          _f(C2) && _f(I2) && Hf(C2, I2, A2);
        }
      }
      function Xf(g2, t2, A2) {
        var e2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (Rh(A2)) throw new TypeError("Arrays are not supported by deepExtend");
        for (var C2 = 0; C2 < g2.length; C2++) {
          var I2 = g2[C2];
          if (Object.prototype.hasOwnProperty.call(A2, I2)) if (A2[I2] && A2[I2].constructor === Object) void 0 === t2[I2] && (t2[I2] = {}), t2[I2].constructor === Object ? qf(t2[I2], A2[I2], false, e2) : Kf(t2, A2, I2, e2);
          else {
            if (Rh(A2[I2])) throw new TypeError("Arrays are not supported by deepExtend");
            Kf(t2, A2, I2, e2);
          }
        }
        return t2;
      }
      function Jf(g2, t2, A2) {
        var e2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (Rh(A2)) throw new TypeError("Arrays are not supported by deepExtend");
        for (var C2 in A2) if (Object.prototype.hasOwnProperty.call(A2, C2) && !Ic(g2).call(g2, C2)) if (A2[C2] && A2[C2].constructor === Object) void 0 === t2[C2] && (t2[C2] = {}), t2[C2].constructor === Object ? qf(t2[C2], A2[C2]) : Kf(t2, A2, C2, e2);
        else if (Rh(A2[C2])) {
          t2[C2] = [];
          for (var I2 = 0; I2 < A2[C2].length; I2++) t2[C2].push(A2[C2][I2]);
        } else Kf(t2, A2, C2, e2);
        return t2;
      }
      function qf(g2, t2) {
        var A2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], e2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        for (var C2 in t2) if (Object.prototype.hasOwnProperty.call(t2, C2) || true === A2) if ("object" === yd(t2[C2]) && null !== t2[C2] && sc(t2[C2]) === Object.prototype) void 0 === g2[C2] ? g2[C2] = qf({}, t2[C2], A2) : "object" === yd(g2[C2]) && null !== g2[C2] && sc(g2[C2]) === Object.prototype ? qf(g2[C2], t2[C2], A2) : Kf(g2, t2, C2, e2);
        else if (Rh(t2[C2])) {
          var I2;
          g2[C2] = wh(I2 = t2[C2]).call(I2);
        } else Kf(g2, t2, C2, e2);
        return g2;
      }
      function $f(g2, t2) {
        var A2;
        return bh(A2 = []).call(A2, ch(g2), [t2]);
      }
      function gv(g2) {
        return g2.getBoundingClientRect().top;
      }
      function tv(g2, t2) {
        if (Rh(g2)) for (var A2 = g2.length, e2 = 0; e2 < A2; e2++) t2(g2[e2], e2, g2);
        else for (var C2 in g2) Object.prototype.hasOwnProperty.call(g2, C2) && t2(g2[C2], C2, g2);
      }
      function Av(g2) {
        var t2;
        switch (g2.length) {
          case 3:
          case 4:
            return (t2 = Vf.exec(g2)) ? {
              r: Gc(t2[1] + t2[1], 16),
              g: Gc(t2[2] + t2[2], 16),
              b: Gc(t2[3] + t2[3], 16)
            } : null;
          case 6:
          case 7:
            return (t2 = Lf.exec(g2)) ? {
              r: Gc(t2[1], 16),
              g: Gc(t2[2], 16),
              b: Gc(t2[3], 16)
            } : null;
          default:
            return null;
        }
      }
      function ev(g2, t2) {
        if (Ic(g2).call(g2, "rgba")) return g2;
        if (Ic(g2).call(g2, "rgb")) {
          var A2 = g2.substr(Xc(g2).call(g2, "(") + 1).replace(")", "").split(",");
          return "rgba(" + A2[0] + "," + A2[1] + "," + A2[2] + "," + t2 + ")";
        }
        var e2 = Av(g2);
        return null == e2 ? g2 : "rgba(" + e2.r + "," + e2.g + "," + e2.b + "," + t2 + ")";
      }
      function Cv(g2, t2, A2) {
        var e2;
        return "#" + wh(e2 = ((1 << 24) + (g2 << 16) + (t2 << 8) + A2).toString(16)).call(e2, 1);
      }
      function Iv(g2, t2) {
        if (Uf(g2)) {
          var A2 = g2;
          if (sv(A2)) {
            var e2, C2 = Fh(e2 = A2.substr(4).substr(0, A2.length - 5).split(",")).call(e2, function(g3) {
              return Gc(g3);
            });
            A2 = Cv(C2[0], C2[1], C2[2]);
          }
          if (true === rv(A2)) {
            var I2 = function(g3) {
              var t3 = Av(g3);
              if (!t3) throw new TypeError("'".concat(g3, "' is not a valid color."));
              return iv(t3.r, t3.g, t3.b);
            }(A2), i2 = {
              h: I2.h,
              s: 0.8 * I2.s,
              v: Math.min(1, 1.02 * I2.v)
            }, o2 = {
              h: I2.h,
              s: Math.min(1, 1.25 * I2.s),
              v: 0.8 * I2.v
            }, n2 = nv(o2.h, o2.s, o2.v), r2 = nv(i2.h, i2.s, i2.v);
            return {
              background: A2,
              border: n2,
              highlight: {
                background: r2,
                border: n2
              },
              hover: {
                background: r2,
                border: n2
              }
            };
          }
          return {
            background: A2,
            border: A2,
            highlight: {
              background: A2,
              border: A2
            },
            hover: {
              background: A2,
              border: A2
            }
          };
        }
        return t2 ? {
          background: g2.background || t2.background,
          border: g2.border || t2.border,
          highlight: Uf(g2.highlight) ? {
            border: g2.highlight,
            background: g2.highlight
          } : {
            background: g2.highlight && g2.highlight.background || t2.highlight.background,
            border: g2.highlight && g2.highlight.border || t2.highlight.border
          },
          hover: Uf(g2.hover) ? {
            border: g2.hover,
            background: g2.hover
          } : {
            border: g2.hover && g2.hover.border || t2.hover.border,
            background: g2.hover && g2.hover.background || t2.hover.background
          }
        } : {
          background: g2.background || void 0,
          border: g2.border || void 0,
          highlight: Uf(g2.highlight) ? {
            border: g2.highlight,
            background: g2.highlight
          } : {
            background: g2.highlight && g2.highlight.background || void 0,
            border: g2.highlight && g2.highlight.border || void 0
          },
          hover: Uf(g2.hover) ? {
            border: g2.hover,
            background: g2.hover
          } : {
            border: g2.hover && g2.hover.border || void 0,
            background: g2.hover && g2.hover.background || void 0
          }
        };
      }
      function iv(g2, t2, A2) {
        g2 /= 255, t2 /= 255, A2 /= 255;
        var e2 = Math.min(g2, Math.min(t2, A2)), C2 = Math.max(g2, Math.max(t2, A2));
        return e2 === C2 ? {
          h: 0,
          s: 0,
          v: e2
        } : {
          h: 60 * ((g2 === e2 ? 3 : A2 === e2 ? 1 : 5) - (g2 === e2 ? t2 - A2 : A2 === e2 ? g2 - t2 : A2 - g2) / (C2 - e2)) / 360,
          s: (C2 - e2) / C2,
          v: C2
        };
      }
      function ov(g2, t2, A2) {
        var e2, C2, I2, i2 = Math.floor(6 * g2), o2 = 6 * g2 - i2, n2 = A2 * (1 - t2), r2 = A2 * (1 - o2 * t2), s2 = A2 * (1 - (1 - o2) * t2);
        switch (i2 % 6) {
          case 0:
            e2 = A2, C2 = s2, I2 = n2;
            break;
          case 1:
            e2 = r2, C2 = A2, I2 = n2;
            break;
          case 2:
            e2 = n2, C2 = A2, I2 = s2;
            break;
          case 3:
            e2 = n2, C2 = r2, I2 = A2;
            break;
          case 4:
            e2 = s2, C2 = n2, I2 = A2;
            break;
          case 5:
            e2 = A2, C2 = n2, I2 = r2;
        }
        return {
          r: Math.floor(255 * e2),
          g: Math.floor(255 * C2),
          b: Math.floor(255 * I2)
        };
      }
      function nv(g2, t2, A2) {
        var e2 = ov(g2, t2, A2);
        return Cv(e2.r, e2.g, e2.b);
      }
      function rv(g2) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(g2);
      }
      function sv(g2) {
        return Yf.test(g2);
      }
      function av(g2) {
        if (null === g2 || "object" !== yd(g2)) return null;
        if (g2 instanceof Element) return g2;
        var t2 = $c(g2);
        for (var A2 in g2) Object.prototype.hasOwnProperty.call(g2, A2) && "object" == yd(g2[A2]) && (t2[A2] = av(g2[A2]));
        return t2;
      }
      function dv(g2, t2, A2) {
        var e2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, C2 = function(g3) {
          return null != g3;
        }, I2 = function(g3) {
          return null !== g3 && "object" === yd(g3);
        };
        if (!I2(g2)) throw new Error("Parameter mergeTarget must be an object");
        if (!I2(t2)) throw new Error("Parameter options must be an object");
        if (!C2(A2)) throw new Error("Parameter option must have a value");
        if (!I2(e2)) throw new Error("Parameter globalOptions must be an object");
        var i2 = t2[A2], o2 = I2(e2) && !function(g3) {
          for (var t3 in g3) if (Object.prototype.hasOwnProperty.call(g3, t3)) return false;
          return true;
        }(e2) ? e2[A2] : void 0, n2 = o2 ? o2.enabled : void 0;
        if (void 0 !== i2) {
          if ("boolean" == typeof i2) return I2(g2[A2]) || (g2[A2] = {}), void (g2[A2].enabled = i2);
          if (null === i2 && !I2(g2[A2])) {
            if (!C2(o2)) return;
            g2[A2] = $c(o2);
          }
          if (I2(i2)) {
            var r2 = true;
            void 0 !== i2.enabled ? r2 = i2.enabled : void 0 !== n2 && (r2 = o2.enabled), function(g3, t3, A3) {
              I2(g3[A3]) || (g3[A3] = {});
              var e3 = t3[A3], C3 = g3[A3];
              for (var i3 in e3) Object.prototype.hasOwnProperty.call(e3, i3) && (C3[i3] = e3[i3]);
            }(g2, t2, A2), g2[A2].enabled = r2;
          }
        }
      }
      var hv = {
        linear: function(g2) {
          return g2;
        },
        easeInQuad: function(g2) {
          return g2 * g2;
        },
        easeOutQuad: function(g2) {
          return g2 * (2 - g2);
        },
        easeInOutQuad: function(g2) {
          return g2 < 0.5 ? 2 * g2 * g2 : (4 - 2 * g2) * g2 - 1;
        },
        easeInCubic: function(g2) {
          return g2 * g2 * g2;
        },
        easeOutCubic: function(g2) {
          return --g2 * g2 * g2 + 1;
        },
        easeInOutCubic: function(g2) {
          return g2 < 0.5 ? 4 * g2 * g2 * g2 : (g2 - 1) * (2 * g2 - 2) * (2 * g2 - 2) + 1;
        },
        easeInQuart: function(g2) {
          return g2 * g2 * g2 * g2;
        },
        easeOutQuart: function(g2) {
          return 1 - --g2 * g2 * g2 * g2;
        },
        easeInOutQuart: function(g2) {
          return g2 < 0.5 ? 8 * g2 * g2 * g2 * g2 : 1 - 8 * --g2 * g2 * g2 * g2;
        },
        easeInQuint: function(g2) {
          return g2 * g2 * g2 * g2 * g2;
        },
        easeOutQuint: function(g2) {
          return 1 + --g2 * g2 * g2 * g2 * g2;
        },
        easeInOutQuint: function(g2) {
          return g2 < 0.5 ? 16 * g2 * g2 * g2 * g2 * g2 : 1 + 16 * --g2 * g2 * g2 * g2 * g2;
        }
      };
      function lv(g2, t2) {
        var A2;
        Rh(t2) || (t2 = [t2]);
        var e2, C2 = Rf(g2);
        try {
          for (C2.s(); !(e2 = C2.n()).done; ) {
            var I2 = e2.value;
            if (I2) {
              A2 = I2[t2[0]];
              for (var i2 = 1; i2 < t2.length; i2++) A2 && (A2 = A2[t2[i2]]);
              if (void 0 !== A2) break;
            }
          }
        } catch (g3) {
          C2.e(g3);
        } finally {
          C2.f();
        }
        return A2;
      }
      var cv = {
        black: "#000000",
        navy: "#000080",
        darkblue: "#00008B",
        mediumblue: "#0000CD",
        blue: "#0000FF",
        darkgreen: "#006400",
        green: "#008000",
        teal: "#008080",
        darkcyan: "#008B8B",
        deepskyblue: "#00BFFF",
        darkturquoise: "#00CED1",
        mediumspringgreen: "#00FA9A",
        lime: "#00FF00",
        springgreen: "#00FF7F",
        aqua: "#00FFFF",
        cyan: "#00FFFF",
        midnightblue: "#191970",
        dodgerblue: "#1E90FF",
        lightseagreen: "#20B2AA",
        forestgreen: "#228B22",
        seagreen: "#2E8B57",
        darkslategray: "#2F4F4F",
        limegreen: "#32CD32",
        mediumseagreen: "#3CB371",
        turquoise: "#40E0D0",
        royalblue: "#4169E1",
        steelblue: "#4682B4",
        darkslateblue: "#483D8B",
        mediumturquoise: "#48D1CC",
        indigo: "#4B0082",
        darkolivegreen: "#556B2F",
        cadetblue: "#5F9EA0",
        cornflowerblue: "#6495ED",
        mediumaquamarine: "#66CDAA",
        dimgray: "#696969",
        slateblue: "#6A5ACD",
        olivedrab: "#6B8E23",
        slategray: "#708090",
        lightslategray: "#778899",
        mediumslateblue: "#7B68EE",
        lawngreen: "#7CFC00",
        chartreuse: "#7FFF00",
        aquamarine: "#7FFFD4",
        maroon: "#800000",
        purple: "#800080",
        olive: "#808000",
        gray: "#808080",
        skyblue: "#87CEEB",
        lightskyblue: "#87CEFA",
        blueviolet: "#8A2BE2",
        darkred: "#8B0000",
        darkmagenta: "#8B008B",
        saddlebrown: "#8B4513",
        darkseagreen: "#8FBC8F",
        lightgreen: "#90EE90",
        mediumpurple: "#9370D8",
        darkviolet: "#9400D3",
        palegreen: "#98FB98",
        darkorchid: "#9932CC",
        yellowgreen: "#9ACD32",
        sienna: "#A0522D",
        brown: "#A52A2A",
        darkgray: "#A9A9A9",
        lightblue: "#ADD8E6",
        greenyellow: "#ADFF2F",
        paleturquoise: "#AFEEEE",
        lightsteelblue: "#B0C4DE",
        powderblue: "#B0E0E6",
        firebrick: "#B22222",
        darkgoldenrod: "#B8860B",
        mediumorchid: "#BA55D3",
        rosybrown: "#BC8F8F",
        darkkhaki: "#BDB76B",
        silver: "#C0C0C0",
        mediumvioletred: "#C71585",
        indianred: "#CD5C5C",
        peru: "#CD853F",
        chocolate: "#D2691E",
        tan: "#D2B48C",
        lightgrey: "#D3D3D3",
        palevioletred: "#D87093",
        thistle: "#D8BFD8",
        orchid: "#DA70D6",
        goldenrod: "#DAA520",
        crimson: "#DC143C",
        gainsboro: "#DCDCDC",
        plum: "#DDA0DD",
        burlywood: "#DEB887",
        lightcyan: "#E0FFFF",
        lavender: "#E6E6FA",
        darksalmon: "#E9967A",
        violet: "#EE82EE",
        palegoldenrod: "#EEE8AA",
        lightcoral: "#F08080",
        khaki: "#F0E68C",
        aliceblue: "#F0F8FF",
        honeydew: "#F0FFF0",
        azure: "#F0FFFF",
        sandybrown: "#F4A460",
        wheat: "#F5DEB3",
        beige: "#F5F5DC",
        whitesmoke: "#F5F5F5",
        mintcream: "#F5FFFA",
        ghostwhite: "#F8F8FF",
        salmon: "#FA8072",
        antiquewhite: "#FAEBD7",
        linen: "#FAF0E6",
        lightgoldenrodyellow: "#FAFAD2",
        oldlace: "#FDF5E6",
        red: "#FF0000",
        fuchsia: "#FF00FF",
        magenta: "#FF00FF",
        deeppink: "#FF1493",
        orangered: "#FF4500",
        tomato: "#FF6347",
        hotpink: "#FF69B4",
        coral: "#FF7F50",
        darkorange: "#FF8C00",
        lightsalmon: "#FFA07A",
        orange: "#FFA500",
        lightpink: "#FFB6C1",
        pink: "#FFC0CB",
        gold: "#FFD700",
        peachpuff: "#FFDAB9",
        navajowhite: "#FFDEAD",
        moccasin: "#FFE4B5",
        bisque: "#FFE4C4",
        mistyrose: "#FFE4E1",
        blanchedalmond: "#FFEBCD",
        papayawhip: "#FFEFD5",
        lavenderblush: "#FFF0F5",
        seashell: "#FFF5EE",
        cornsilk: "#FFF8DC",
        lemonchiffon: "#FFFACD",
        floralwhite: "#FFFAF0",
        snow: "#FFFAFA",
        yellow: "#FFFF00",
        lightyellow: "#FFFFE0",
        ivory: "#FFFFF0",
        white: "#FFFFFF"
      }, uv = function() {
        function g2() {
          var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
          cn(this, g2), this.pixelRatio = t2, this.generated = false, this.centerCoordinates = {
            x: 144.5,
            y: 144.5
          }, this.r = 289 * 0.49, this.color = {
            r: 255,
            g: 255,
            b: 255,
            a: 1
          }, this.hueCircle = void 0, this.initialColor = {
            r: 255,
            g: 255,
            b: 255,
            a: 1
          }, this.previousColor = void 0, this.applied = false, this.updateCallback = function() {
          }, this.closeCallback = function() {
          }, this._create();
        }
        return kd(g2, [{
          key: "insertTo",
          value: function(g3) {
            void 0 !== this.hammer && (this.hammer.destroy(), this.hammer = void 0), this.container = g3, this.container.appendChild(this.frame), this._bindHammer(), this._setSize();
          }
        }, {
          key: "setUpdateCallback",
          value: function(g3) {
            if ("function" != typeof g3) throw new Error("Function attempted to set as colorPicker update callback is not a function.");
            this.updateCallback = g3;
          }
        }, {
          key: "setCloseCallback",
          value: function(g3) {
            if ("function" != typeof g3) throw new Error("Function attempted to set as colorPicker closing callback is not a function.");
            this.closeCallback = g3;
          }
        }, {
          key: "_isColorString",
          value: function(g3) {
            if ("string" == typeof g3) return cv[g3];
          }
        }, {
          key: "setColor",
          value: function(g3) {
            var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if ("none" !== g3) {
              var A2, e2 = this._isColorString(g3);
              if (void 0 !== e2 && (g3 = e2), true === Uf(g3)) {
                if (true === sv(g3)) {
                  var C2 = g3.substr(4).substr(0, g3.length - 5).split(",");
                  A2 = {
                    r: C2[0],
                    g: C2[1],
                    b: C2[2],
                    a: 1
                  };
                } else if (true === function(g4) {
                  return Wf.test(g4);
                }(g3)) {
                  var I2 = g3.substr(5).substr(0, g3.length - 6).split(",");
                  A2 = {
                    r: I2[0],
                    g: I2[1],
                    b: I2[2],
                    a: I2[3]
                  };
                } else if (true === rv(g3)) {
                  var i2 = Av(g3);
                  A2 = {
                    r: i2.r,
                    g: i2.g,
                    b: i2.b,
                    a: 1
                  };
                }
              } else if (g3 instanceof Object && void 0 !== g3.r && void 0 !== g3.g && void 0 !== g3.b) {
                var o2 = void 0 !== g3.a ? g3.a : "1.0";
                A2 = {
                  r: g3.r,
                  g: g3.g,
                  b: g3.b,
                  a: o2
                };
              }
              if (void 0 === A2) throw new Error("Unknown color passed to the colorPicker. Supported are strings: rgb, hex, rgba. Object: rgb ({r:r,g:g,b:b,[a:a]}). Supplied: " + eu(g3));
              this._setColor(A2, t2);
            }
          }
        }, {
          key: "show",
          value: function() {
            void 0 !== this.closeCallback && (this.closeCallback(), this.closeCallback = void 0), this.applied = false, this.frame.style.display = "block", this._generateHueCircle();
          }
        }, {
          key: "_hide",
          value: function() {
            var g3 = this;
            true === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && (this.previousColor = fe({}, this.color)), true === this.applied && this.updateCallback(this.initialColor), this.frame.style.display = "none", wu(function() {
              void 0 !== g3.closeCallback && (g3.closeCallback(), g3.closeCallback = void 0);
            }, 0);
          }
        }, {
          key: "_save",
          value: function() {
            this.updateCallback(this.color), this.applied = false, this._hide();
          }
        }, {
          key: "_apply",
          value: function() {
            this.applied = true, this.updateCallback(this.color), this._updatePicker(this.color);
          }
        }, {
          key: "_loadLast",
          value: function() {
            void 0 !== this.previousColor ? this.setColor(this.previousColor, false) : alert("There is no last color to load...");
          }
        }, {
          key: "_setColor",
          value: function(g3) {
            true === (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && (this.initialColor = fe({}, g3)), this.color = g3;
            var t2 = iv(g3.r, g3.g, g3.b), A2 = 2 * Math.PI, e2 = this.r * t2.s, C2 = this.centerCoordinates.x + e2 * Math.sin(A2 * t2.h), I2 = this.centerCoordinates.y + e2 * Math.cos(A2 * t2.h);
            this.colorPickerSelector.style.left = C2 - 0.5 * this.colorPickerSelector.clientWidth + "px", this.colorPickerSelector.style.top = I2 - 0.5 * this.colorPickerSelector.clientHeight + "px", this._updatePicker(g3);
          }
        }, {
          key: "_setOpacity",
          value: function(g3) {
            this.color.a = g3 / 100, this._updatePicker(this.color);
          }
        }, {
          key: "_setBrightness",
          value: function(g3) {
            var t2 = iv(this.color.r, this.color.g, this.color.b);
            t2.v = g3 / 100;
            var A2 = ov(t2.h, t2.s, t2.v);
            A2.a = this.color.a, this.color = A2, this._updatePicker();
          }
        }, {
          key: "_updatePicker",
          value: function() {
            var g3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.color, t2 = iv(g3.r, g3.g, g3.b), A2 = this.colorPickerCanvas.getContext("2d");
            void 0 === this.pixelRation && (this.pixelRatio = (window.devicePixelRatio || 1) / (A2.webkitBackingStorePixelRatio || A2.mozBackingStorePixelRatio || A2.msBackingStorePixelRatio || A2.oBackingStorePixelRatio || A2.backingStorePixelRatio || 1)), A2.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
            var e2 = this.colorPickerCanvas.clientWidth, C2 = this.colorPickerCanvas.clientHeight;
            A2.clearRect(0, 0, e2, C2), A2.putImageData(this.hueCircle, 0, 0), A2.fillStyle = "rgba(0,0,0," + (1 - t2.v) + ")", A2.circle(this.centerCoordinates.x, this.centerCoordinates.y, this.r), Bu(A2).call(A2), this.brightnessRange.value = 100 * t2.v, this.opacityRange.value = 100 * g3.a, this.initialColorDiv.style.backgroundColor = "rgba(" + this.initialColor.r + "," + this.initialColor.g + "," + this.initialColor.b + "," + this.initialColor.a + ")", this.newColorDiv.style.backgroundColor = "rgba(" + this.color.r + "," + this.color.g + "," + this.color.b + "," + this.color.a + ")";
          }
        }, {
          key: "_setSize",
          value: function() {
            this.colorPickerCanvas.style.width = "100%", this.colorPickerCanvas.style.height = "100%", this.colorPickerCanvas.width = 289 * this.pixelRatio, this.colorPickerCanvas.height = 289 * this.pixelRatio;
          }
        }, {
          key: "_create",
          value: function() {
            var g3, t2, A2, e2;
            if (this.frame = document.createElement("div"), this.frame.className = "vis-color-picker", this.colorPickerDiv = document.createElement("div"), this.colorPickerSelector = document.createElement("div"), this.colorPickerSelector.className = "vis-selector", this.colorPickerDiv.appendChild(this.colorPickerSelector), this.colorPickerCanvas = document.createElement("canvas"), this.colorPickerDiv.appendChild(this.colorPickerCanvas), this.colorPickerCanvas.getContext) {
              var C2 = this.colorPickerCanvas.getContext("2d");
              this.pixelRatio = (window.devicePixelRatio || 1) / (C2.webkitBackingStorePixelRatio || C2.mozBackingStorePixelRatio || C2.msBackingStorePixelRatio || C2.oBackingStorePixelRatio || C2.backingStorePixelRatio || 1), this.colorPickerCanvas.getContext("2d").setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
            } else {
              var I2 = document.createElement("DIV");
              I2.style.color = "red", I2.style.fontWeight = "bold", I2.style.padding = "10px", I2.innerText = "Error: your browser does not support HTML canvas", this.colorPickerCanvas.appendChild(I2);
            }
            this.colorPickerDiv.className = "vis-color", this.opacityDiv = document.createElement("div"), this.opacityDiv.className = "vis-opacity", this.brightnessDiv = document.createElement("div"), this.brightnessDiv.className = "vis-brightness", this.arrowDiv = document.createElement("div"), this.arrowDiv.className = "vis-arrow", this.opacityRange = document.createElement("input");
            try {
              this.opacityRange.type = "range", this.opacityRange.min = "0", this.opacityRange.max = "100";
            } catch (g4) {
            }
            this.opacityRange.value = "100", this.opacityRange.className = "vis-range", this.brightnessRange = document.createElement("input");
            try {
              this.brightnessRange.type = "range", this.brightnessRange.min = "0", this.brightnessRange.max = "100";
            } catch (g4) {
            }
            this.brightnessRange.value = "100", this.brightnessRange.className = "vis-range", this.opacityDiv.appendChild(this.opacityRange), this.brightnessDiv.appendChild(this.brightnessRange);
            var i2 = this;
            this.opacityRange.onchange = function() {
              i2._setOpacity(this.value);
            }, this.opacityRange.oninput = function() {
              i2._setOpacity(this.value);
            }, this.brightnessRange.onchange = function() {
              i2._setBrightness(this.value);
            }, this.brightnessRange.oninput = function() {
              i2._setBrightness(this.value);
            }, this.brightnessLabel = document.createElement("div"), this.brightnessLabel.className = "vis-label vis-brightness", this.brightnessLabel.innerText = "brightness:", this.opacityLabel = document.createElement("div"), this.opacityLabel.className = "vis-label vis-opacity", this.opacityLabel.innerText = "opacity:", this.newColorDiv = document.createElement("div"), this.newColorDiv.className = "vis-new-color", this.newColorDiv.innerText = "new", this.initialColorDiv = document.createElement("div"), this.initialColorDiv.className = "vis-initial-color", this.initialColorDiv.innerText = "initial", this.cancelButton = document.createElement("div"), this.cancelButton.className = "vis-button vis-cancel", this.cancelButton.innerText = "cancel", this.cancelButton.onclick = je(g3 = this._hide).call(g3, this, false), this.applyButton = document.createElement("div"), this.applyButton.className = "vis-button vis-apply", this.applyButton.innerText = "apply", this.applyButton.onclick = je(t2 = this._apply).call(t2, this), this.saveButton = document.createElement("div"), this.saveButton.className = "vis-button vis-save", this.saveButton.innerText = "save", this.saveButton.onclick = je(A2 = this._save).call(A2, this), this.loadButton = document.createElement("div"), this.loadButton.className = "vis-button vis-load", this.loadButton.innerText = "load last", this.loadButton.onclick = je(e2 = this._loadLast).call(e2, this), this.frame.appendChild(this.colorPickerDiv), this.frame.appendChild(this.arrowDiv), this.frame.appendChild(this.brightnessLabel), this.frame.appendChild(this.brightnessDiv), this.frame.appendChild(this.opacityLabel), this.frame.appendChild(this.opacityDiv), this.frame.appendChild(this.newColorDiv), this.frame.appendChild(this.initialColorDiv), this.frame.appendChild(this.cancelButton), this.frame.appendChild(this.applyButton), this.frame.appendChild(this.saveButton), this.frame.appendChild(this.loadButton);
          }
        }, {
          key: "_bindHammer",
          value: function() {
            var g3 = this;
            this.drag = {}, this.pinch = {}, this.hammer = new Gf(this.colorPickerCanvas), this.hammer.get("pinch").set({
              enable: true
            }), this.hammer.on("hammer.input", function(t2) {
              t2.isFirst && g3._moveSelector(t2);
            }), this.hammer.on("tap", function(t2) {
              g3._moveSelector(t2);
            }), this.hammer.on("panstart", function(t2) {
              g3._moveSelector(t2);
            }), this.hammer.on("panmove", function(t2) {
              g3._moveSelector(t2);
            }), this.hammer.on("panend", function(t2) {
              g3._moveSelector(t2);
            });
          }
        }, {
          key: "_generateHueCircle",
          value: function() {
            if (false === this.generated) {
              var g3 = this.colorPickerCanvas.getContext("2d");
              void 0 === this.pixelRation && (this.pixelRatio = (window.devicePixelRatio || 1) / (g3.webkitBackingStorePixelRatio || g3.mozBackingStorePixelRatio || g3.msBackingStorePixelRatio || g3.oBackingStorePixelRatio || g3.backingStorePixelRatio || 1)), g3.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
              var t2, A2, e2, C2, I2 = this.colorPickerCanvas.clientWidth, i2 = this.colorPickerCanvas.clientHeight;
              g3.clearRect(0, 0, I2, i2), this.centerCoordinates = {
                x: 0.5 * I2,
                y: 0.5 * i2
              }, this.r = 0.49 * I2;
              var o2, n2 = 2 * Math.PI / 360, r2 = 1 / this.r;
              for (e2 = 0; e2 < 360; e2++) for (C2 = 0; C2 < this.r; C2++) t2 = this.centerCoordinates.x + C2 * Math.sin(n2 * e2), A2 = this.centerCoordinates.y + C2 * Math.cos(n2 * e2), o2 = ov(0.002777777777777778 * e2, C2 * r2, 1), g3.fillStyle = "rgb(" + o2.r + "," + o2.g + "," + o2.b + ")", g3.fillRect(t2 - 0.5, A2 - 0.5, 2, 2);
              g3.strokeStyle = "rgba(0,0,0,1)", g3.circle(this.centerCoordinates.x, this.centerCoordinates.y, this.r), g3.stroke(), this.hueCircle = g3.getImageData(0, 0, I2, i2);
            }
            this.generated = true;
          }
        }, {
          key: "_moveSelector",
          value: function(g3) {
            var t2 = this.colorPickerDiv.getBoundingClientRect(), A2 = g3.center.x - t2.left, e2 = g3.center.y - t2.top, C2 = 0.5 * this.colorPickerDiv.clientHeight, I2 = 0.5 * this.colorPickerDiv.clientWidth, i2 = A2 - I2, o2 = e2 - C2, n2 = Math.atan2(i2, o2), r2 = 0.98 * Math.min(Math.sqrt(i2 * i2 + o2 * o2), I2), s2 = Math.cos(n2) * r2 + C2, a2 = Math.sin(n2) * r2 + I2;
            this.colorPickerSelector.style.top = s2 - 0.5 * this.colorPickerSelector.clientHeight + "px", this.colorPickerSelector.style.left = a2 - 0.5 * this.colorPickerSelector.clientWidth + "px";
            var d2 = n2 / (2 * Math.PI);
            d2 = d2 < 0 ? d2 + 1 : d2;
            var h2 = r2 / this.r, l2 = iv(this.color.r, this.color.g, this.color.b);
            l2.h = d2, l2.s = h2;
            var c2 = ov(l2.h, l2.s, l2.v);
            c2.a = this.color.a, this.color = c2, this.initialColorDiv.style.backgroundColor = "rgba(" + this.initialColor.r + "," + this.initialColor.g + "," + this.initialColor.b + "," + this.initialColor.a + ")", this.newColorDiv.style.backgroundColor = "rgba(" + this.color.r + "," + this.color.g + "," + this.color.b + "," + this.color.a + ")";
          }
        }]), g2;
      }();
      function pv() {
        for (var g2 = arguments.length, t2 = new Array(g2), A2 = 0; A2 < g2; A2++) t2[A2] = arguments[A2];
        if (t2.length < 1) throw new TypeError("Invalid arguments.");
        if (1 === t2.length) return document.createTextNode(t2[0]);
        var e2 = document.createElement(t2[0]);
        return e2.appendChild(pv.apply(void 0, ch(wh(t2).call(t2, 1)))), e2;
      }
      var fv, vv = function() {
        function g2(t2, A2, e2) {
          var C2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, I2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {
            return false;
          };
          cn(this, g2), this.parent = t2, this.changedOptions = [], this.container = A2, this.allowCreation = false, this.hideOption = I2, this.options = {}, this.initialized = false, this.popupCounter = 0, this.defaultOptions = {
            enabled: false,
            filter: true,
            container: void 0,
            showButton: true
          }, fe(this.options, this.defaultOptions), this.configureOptions = e2, this.moduleOptions = {}, this.domElements = [], this.popupDiv = {}, this.popupLimit = 5, this.popupHistory = {}, this.colorPicker = new uv(C2), this.wrapper = void 0;
        }
        return kd(g2, [{
          key: "setOptions",
          value: function(g3) {
            if (void 0 !== g3) {
              this.popupHistory = {}, this._removePopup();
              var t2 = true;
              if ("string" == typeof g3) this.options.filter = g3;
              else if (Rh(g3)) this.options.filter = g3.join();
              else if ("object" === yd(g3)) {
                if (null == g3) throw new TypeError("options cannot be null");
                void 0 !== g3.container && (this.options.container = g3.container), void 0 !== pc(g3) && (this.options.filter = pc(g3)), void 0 !== g3.showButton && (this.options.showButton = g3.showButton), void 0 !== g3.enabled && (t2 = g3.enabled);
              } else "boolean" == typeof g3 ? (this.options.filter = true, t2 = g3) : "function" == typeof g3 && (this.options.filter = g3, t2 = true);
              false === pc(this.options) && (t2 = false), this.options.enabled = t2;
            }
            this._clean();
          }
        }, {
          key: "setModuleOptions",
          value: function(g3) {
            this.moduleOptions = g3, true === this.options.enabled && (this._clean(), void 0 !== this.options.container && (this.container = this.options.container), this._create());
          }
        }, {
          key: "_create",
          value: function() {
            this._clean(), this.changedOptions = [];
            var g3 = pc(this.options), t2 = 0, A2 = false;
            for (var e2 in this.configureOptions) Object.prototype.hasOwnProperty.call(this.configureOptions, e2) && (this.allowCreation = false, A2 = false, "function" == typeof g3 ? A2 = (A2 = g3(e2, [])) || this._handleObject(this.configureOptions[e2], [e2], true) : true !== g3 && -1 === Xc(g3).call(g3, e2) || (A2 = true), false !== A2 && (this.allowCreation = true, t2 > 0 && this._makeItem([]), this._makeHeader(e2), this._handleObject(this.configureOptions[e2], [e2])), t2++);
            this._makeButton(), this._push();
          }
        }, {
          key: "_push",
          value: function() {
            this.wrapper = document.createElement("div"), this.wrapper.className = "vis-configuration-wrapper", this.container.appendChild(this.wrapper);
            for (var g3 = 0; g3 < this.domElements.length; g3++) this.wrapper.appendChild(this.domElements[g3]);
            this._showPopupIfNeeded();
          }
        }, {
          key: "_clean",
          value: function() {
            for (var g3 = 0; g3 < this.domElements.length; g3++) this.wrapper.removeChild(this.domElements[g3]);
            void 0 !== this.wrapper && (this.container.removeChild(this.wrapper), this.wrapper = void 0), this.domElements = [], this._removePopup();
          }
        }, {
          key: "_getValue",
          value: function(g3) {
            for (var t2 = this.moduleOptions, A2 = 0; A2 < g3.length; A2++) {
              if (void 0 === t2[g3[A2]]) {
                t2 = void 0;
                break;
              }
              t2 = t2[g3[A2]];
            }
            return t2;
          }
        }, {
          key: "_makeItem",
          value: function(g3) {
            if (true === this.allowCreation) {
              var t2 = document.createElement("div");
              t2.className = "vis-configuration vis-config-item vis-config-s" + g3.length;
              for (var A2 = arguments.length, e2 = new Array(A2 > 1 ? A2 - 1 : 0), C2 = 1; C2 < A2; C2++) e2[C2 - 1] = arguments[C2];
              return Cl(e2).call(e2, function(g4) {
                t2.appendChild(g4);
              }), this.domElements.push(t2), this.domElements.length;
            }
            return 0;
          }
        }, {
          key: "_makeHeader",
          value: function(g3) {
            var t2 = document.createElement("div");
            t2.className = "vis-configuration vis-config-header", t2.innerText = g3, this._makeItem([], t2);
          }
        }, {
          key: "_makeLabel",
          value: function(g3, t2) {
            var A2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], e2 = document.createElement("div");
            if (e2.className = "vis-configuration vis-config-label vis-config-s" + t2.length, true === A2) {
              for (; e2.firstChild; ) e2.removeChild(e2.firstChild);
              e2.appendChild(pv("i", "b", g3));
            } else e2.innerText = g3 + ":";
            return e2;
          }
        }, {
          key: "_makeDropdown",
          value: function(g3, t2, A2) {
            var e2 = document.createElement("select");
            e2.className = "vis-configuration vis-config-select";
            var C2 = 0;
            void 0 !== t2 && -1 !== Xc(g3).call(g3, t2) && (C2 = Xc(g3).call(g3, t2));
            for (var I2 = 0; I2 < g3.length; I2++) {
              var i2 = document.createElement("option");
              i2.value = g3[I2], I2 === C2 && (i2.selected = "selected"), i2.innerText = g3[I2], e2.appendChild(i2);
            }
            var o2 = this;
            e2.onchange = function() {
              o2._update(this.value, A2);
            };
            var n2 = this._makeLabel(A2[A2.length - 1], A2);
            this._makeItem(A2, n2, e2);
          }
        }, {
          key: "_makeRange",
          value: function(g3, t2, A2) {
            var e2 = g3[0], C2 = g3[1], I2 = g3[2], i2 = g3[3], o2 = document.createElement("input");
            o2.className = "vis-configuration vis-config-range";
            try {
              o2.type = "range", o2.min = C2, o2.max = I2;
            } catch (g4) {
            }
            o2.step = i2;
            var n2 = "", r2 = 0;
            if (void 0 !== t2) {
              var s2 = 1.2;
              t2 < 0 && t2 * s2 < C2 ? (o2.min = Math.ceil(t2 * s2), r2 = o2.min, n2 = "range increased") : t2 / s2 < C2 && (o2.min = Math.ceil(t2 / s2), r2 = o2.min, n2 = "range increased"), t2 * s2 > I2 && 1 !== I2 && (o2.max = Math.ceil(t2 * s2), r2 = o2.max, n2 = "range increased"), o2.value = t2;
            } else o2.value = e2;
            var a2 = document.createElement("input");
            a2.className = "vis-configuration vis-config-rangeinput", a2.value = o2.value;
            var d2 = this;
            o2.onchange = function() {
              a2.value = this.value, d2._update(Number(this.value), A2);
            }, o2.oninput = function() {
              a2.value = this.value;
            };
            var h2 = this._makeLabel(A2[A2.length - 1], A2), l2 = this._makeItem(A2, h2, o2, a2);
            "" !== n2 && this.popupHistory[l2] !== r2 && (this.popupHistory[l2] = r2, this._setupPopup(n2, l2));
          }
        }, {
          key: "_makeButton",
          value: function() {
            var g3 = this;
            if (true === this.options.showButton) {
              var t2 = document.createElement("div");
              t2.className = "vis-configuration vis-config-button", t2.innerText = "generate options", t2.onclick = function() {
                g3._printOptions();
              }, t2.onmouseover = function() {
                t2.className = "vis-configuration vis-config-button hover";
              }, t2.onmouseout = function() {
                t2.className = "vis-configuration vis-config-button";
              }, this.optionsContainer = document.createElement("div"), this.optionsContainer.className = "vis-configuration vis-config-option-container", this.domElements.push(this.optionsContainer), this.domElements.push(t2);
            }
          }
        }, {
          key: "_setupPopup",
          value: function(g3, t2) {
            var A2 = this;
            if (true === this.initialized && true === this.allowCreation && this.popupCounter < this.popupLimit) {
              var e2 = document.createElement("div");
              e2.id = "vis-configuration-popup", e2.className = "vis-configuration-popup", e2.innerText = g3, e2.onclick = function() {
                A2._removePopup();
              }, this.popupCounter += 1, this.popupDiv = {
                html: e2,
                index: t2
              };
            }
          }
        }, {
          key: "_removePopup",
          value: function() {
            void 0 !== this.popupDiv.html && (this.popupDiv.html.parentNode.removeChild(this.popupDiv.html), clearTimeout(this.popupDiv.hideTimeout), clearTimeout(this.popupDiv.deleteTimeout), this.popupDiv = {});
          }
        }, {
          key: "_showPopupIfNeeded",
          value: function() {
            var g3 = this;
            if (void 0 !== this.popupDiv.html) {
              var t2 = this.domElements[this.popupDiv.index].getBoundingClientRect();
              this.popupDiv.html.style.left = t2.left + "px", this.popupDiv.html.style.top = t2.top - 30 + "px", document.body.appendChild(this.popupDiv.html), this.popupDiv.hideTimeout = wu(function() {
                g3.popupDiv.html.style.opacity = 0;
              }, 1500), this.popupDiv.deleteTimeout = wu(function() {
                g3._removePopup();
              }, 1800);
            }
          }
        }, {
          key: "_makeCheckbox",
          value: function(g3, t2, A2) {
            var e2 = document.createElement("input");
            e2.type = "checkbox", e2.className = "vis-configuration vis-config-checkbox", e2.checked = g3, void 0 !== t2 && (e2.checked = t2, t2 !== g3 && ("object" === yd(g3) ? t2 !== g3.enabled && this.changedOptions.push({
              path: A2,
              value: t2
            }) : this.changedOptions.push({
              path: A2,
              value: t2
            })));
            var C2 = this;
            e2.onchange = function() {
              C2._update(this.checked, A2);
            };
            var I2 = this._makeLabel(A2[A2.length - 1], A2);
            this._makeItem(A2, I2, e2);
          }
        }, {
          key: "_makeTextInput",
          value: function(g3, t2, A2) {
            var e2 = document.createElement("input");
            e2.type = "text", e2.className = "vis-configuration vis-config-text", e2.value = t2, t2 !== g3 && this.changedOptions.push({
              path: A2,
              value: t2
            });
            var C2 = this;
            e2.onchange = function() {
              C2._update(this.value, A2);
            };
            var I2 = this._makeLabel(A2[A2.length - 1], A2);
            this._makeItem(A2, I2, e2);
          }
        }, {
          key: "_makeColorField",
          value: function(g3, t2, A2) {
            var e2 = this, C2 = g3[1], I2 = document.createElement("div");
            "none" !== (t2 = void 0 === t2 ? C2 : t2) ? (I2.className = "vis-configuration vis-config-colorBlock", I2.style.backgroundColor = t2) : I2.className = "vis-configuration vis-config-colorBlock none", t2 = void 0 === t2 ? C2 : t2, I2.onclick = function() {
              e2._showColorPicker(t2, I2, A2);
            };
            var i2 = this._makeLabel(A2[A2.length - 1], A2);
            this._makeItem(A2, i2, I2);
          }
        }, {
          key: "_showColorPicker",
          value: function(g3, t2, A2) {
            var e2 = this;
            t2.onclick = function() {
            }, this.colorPicker.insertTo(t2), this.colorPicker.show(), this.colorPicker.setColor(g3), this.colorPicker.setUpdateCallback(function(g4) {
              var C2 = "rgba(" + g4.r + "," + g4.g + "," + g4.b + "," + g4.a + ")";
              t2.style.backgroundColor = C2, e2._update(C2, A2);
            }), this.colorPicker.setCloseCallback(function() {
              t2.onclick = function() {
                e2._showColorPicker(g3, t2, A2);
              };
            });
          }
        }, {
          key: "_handleObject",
          value: function(g3) {
            var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], A2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], e2 = false, C2 = pc(this.options), I2 = false;
            for (var i2 in g3) if (Object.prototype.hasOwnProperty.call(g3, i2)) {
              e2 = true;
              var o2 = g3[i2], n2 = $f(t2, i2);
              if ("function" == typeof C2 && false === (e2 = C2(i2, t2)) && !Rh(o2) && "string" != typeof o2 && "boolean" != typeof o2 && o2 instanceof Object && (this.allowCreation = false, e2 = this._handleObject(o2, n2, true), this.allowCreation = false === A2), false !== e2) {
                I2 = true;
                var r2 = this._getValue(n2);
                if (Rh(o2)) this._handleArray(o2, r2, n2);
                else if ("string" == typeof o2) this._makeTextInput(o2, r2, n2);
                else if ("boolean" == typeof o2) this._makeCheckbox(o2, r2, n2);
                else if (o2 instanceof Object) {
                  if (!this.hideOption(t2, i2, this.moduleOptions)) if (void 0 !== o2.enabled) {
                    var s2 = $f(n2, "enabled"), a2 = this._getValue(s2);
                    if (true === a2) {
                      var d2 = this._makeLabel(i2, n2, true);
                      this._makeItem(n2, d2), I2 = this._handleObject(o2, n2) || I2;
                    } else this._makeCheckbox(o2, a2, n2);
                  } else {
                    var h2 = this._makeLabel(i2, n2, true);
                    this._makeItem(n2, h2), I2 = this._handleObject(o2, n2) || I2;
                  }
                } else console.error("dont know how to handle", o2, i2, n2);
              }
            }
            return I2;
          }
        }, {
          key: "_handleArray",
          value: function(g3, t2, A2) {
            "string" == typeof g3[0] && "color" === g3[0] ? (this._makeColorField(g3, t2, A2), g3[1] !== t2 && this.changedOptions.push({
              path: A2,
              value: t2
            })) : "string" == typeof g3[0] ? (this._makeDropdown(g3, t2, A2), g3[0] !== t2 && this.changedOptions.push({
              path: A2,
              value: t2
            })) : "number" == typeof g3[0] && (this._makeRange(g3, t2, A2), g3[0] !== t2 && this.changedOptions.push({
              path: A2,
              value: Number(t2)
            }));
          }
        }, {
          key: "_update",
          value: function(g3, t2) {
            var A2 = this._constructOptions(g3, t2);
            this.parent.body && this.parent.body.emitter && this.parent.body.emitter.emit && this.parent.body.emitter.emit("configChange", A2), this.initialized = true, this.parent.setOptions(A2);
          }
        }, {
          key: "_constructOptions",
          value: function(g3, t2) {
            var A2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, e2 = A2;
            g3 = "false" !== (g3 = "true" === g3 || g3) && g3;
            for (var C2 = 0; C2 < t2.length; C2++) "global" !== t2[C2] && (void 0 === e2[t2[C2]] && (e2[t2[C2]] = {}), C2 !== t2.length - 1 ? e2 = e2[t2[C2]] : e2[t2[C2]] = g3);
            return A2;
          }
        }, {
          key: "_printOptions",
          value: function() {
            for (var g3 = this.getOptions(); this.optionsContainer.firstChild; ) this.optionsContainer.removeChild(this.optionsContainer.firstChild);
            this.optionsContainer.appendChild(pv("pre", "const options = " + eu(g3, null, 2)));
          }
        }, {
          key: "getOptions",
          value: function() {
            for (var g3 = {}, t2 = 0; t2 < this.changedOptions.length; t2++) this._constructOptions(this.changedOptions[t2].value, this.changedOptions[t2].path, g3);
            return g3;
          }
        }]), g2;
      }(), yv = function() {
        function g2(t2, A2) {
          cn(this, g2), this.container = t2, this.overflowMethod = A2 || "cap", this.x = 0, this.y = 0, this.padding = 5, this.hidden = false, this.frame = document.createElement("div"), this.frame.className = "vis-tooltip", this.container.appendChild(this.frame);
        }
        return kd(g2, [{
          key: "setPosition",
          value: function(g3, t2) {
            this.x = Gc(g3), this.y = Gc(t2);
          }
        }, {
          key: "setText",
          value: function(g3) {
            if (g3 instanceof Element) {
              for (; this.frame.firstChild; ) this.frame.removeChild(this.frame.firstChild);
              this.frame.appendChild(g3);
            } else this.frame.innerText = g3;
          }
        }, {
          key: "show",
          value: function(g3) {
            if (void 0 === g3 && (g3 = true), true === g3) {
              var t2 = this.frame.clientHeight, A2 = this.frame.clientWidth, e2 = this.frame.parentNode.clientHeight, C2 = this.frame.parentNode.clientWidth, I2 = 0, i2 = 0;
              if ("flip" == this.overflowMethod) {
                var o2 = false, n2 = true;
                this.y - t2 < this.padding && (n2 = false), this.x + A2 > C2 - this.padding && (o2 = true), I2 = o2 ? this.x - A2 : this.x, i2 = n2 ? this.y - t2 : this.y;
              } else (i2 = this.y - t2) + t2 + this.padding > e2 && (i2 = e2 - t2 - this.padding), i2 < this.padding && (i2 = this.padding), (I2 = this.x) + A2 + this.padding > C2 && (I2 = C2 - A2 - this.padding), I2 < this.padding && (I2 = this.padding);
              this.frame.style.left = I2 + "px", this.frame.style.top = i2 + "px", this.frame.style.visibility = "visible", this.hidden = false;
            } else this.hide();
          }
        }, {
          key: "hide",
          value: function() {
            this.hidden = true, this.frame.style.left = "0", this.frame.style.top = "0", this.frame.style.visibility = "hidden";
          }
        }, {
          key: "destroy",
          value: function() {
            this.frame.parentNode.removeChild(this.frame);
          }
        }]), g2;
      }(), mv = false, bv = "background: #FFeeee; color: #dd0000", wv = function() {
        function g2() {
          cn(this, g2);
        }
        return kd(g2, null, [{
          key: "validate",
          value: function(t2, A2, e2) {
            mv = false, fv = A2;
            var C2 = A2;
            return void 0 !== e2 && (C2 = A2[e2]), g2.parse(t2, C2, []), mv;
          }
        }, {
          key: "parse",
          value: function(t2, A2, e2) {
            for (var C2 in t2) Object.prototype.hasOwnProperty.call(t2, C2) && g2.check(C2, t2, A2, e2);
          }
        }, {
          key: "check",
          value: function(t2, A2, e2, C2) {
            if (void 0 !== e2[t2] || void 0 !== e2.__any__) {
              var I2 = t2, i2 = true;
              void 0 === e2[t2] && void 0 !== e2.__any__ && (I2 = "__any__", i2 = "object" === g2.getType(A2[t2]));
              var o2 = e2[I2];
              i2 && void 0 !== o2.__type__ && (o2 = o2.__type__), g2.checkFields(t2, A2, e2, I2, o2, C2);
            } else g2.getSuggestion(t2, e2, C2);
          }
        }, {
          key: "checkFields",
          value: function(t2, A2, e2, C2, I2, i2) {
            var o2 = function(A3) {
              console.error("%c" + A3 + g2.printLocation(i2, t2), bv);
            }, n2 = g2.getType(A2[t2]), r2 = I2[n2];
            void 0 !== r2 ? "array" === g2.getType(r2) && -1 === Xc(r2).call(r2, A2[t2]) ? (o2('Invalid option detected in "' + t2 + '". Allowed values are:' + g2.print(r2) + ' not "' + A2[t2] + '". '), mv = true) : "object" === n2 && "__any__" !== C2 && (i2 = $f(i2, t2), g2.parse(A2[t2], e2[C2], i2)) : void 0 === I2.any && (o2('Invalid type received for "' + t2 + '". Expected: ' + g2.print(Lh(I2)) + ". Received [" + n2 + '] "' + A2[t2] + '"'), mv = true);
          }
        }, {
          key: "getType",
          value: function(g3) {
            var t2 = yd(g3);
            return "object" === t2 ? null === g3 ? "null" : g3 instanceof Boolean ? "boolean" : g3 instanceof Number ? "number" : g3 instanceof String ? "string" : Rh(g3) ? "array" : g3 instanceof Date ? "date" : void 0 !== g3.nodeType ? "dom" : true === g3._isAMomentObject ? "moment" : "object" : "number" === t2 ? "number" : "boolean" === t2 ? "boolean" : "string" === t2 ? "string" : void 0 === t2 ? "undefined" : t2;
          }
        }, {
          key: "getSuggestion",
          value: function(t2, A2, e2) {
            var C2, I2 = g2.findInOptions(t2, A2, e2, false), i2 = g2.findInOptions(t2, fv, [], true);
            C2 = void 0 !== I2.indexMatch ? " in " + g2.printLocation(I2.path, t2, "") + 'Perhaps it was incomplete? Did you mean: "' + I2.indexMatch + '"?\n\n' : i2.distance <= 4 && I2.distance > i2.distance ? " in " + g2.printLocation(I2.path, t2, "") + "Perhaps it was misplaced? Matching option found at: " + g2.printLocation(i2.path, i2.closestMatch, "") : I2.distance <= 8 ? '. Did you mean "' + I2.closestMatch + '"?' + g2.printLocation(I2.path, t2) : ". Did you mean one of these: " + g2.print(Lh(A2)) + g2.printLocation(e2, t2), console.error('%cUnknown option detected: "' + t2 + '"' + C2, bv), mv = true;
          }
        }, {
          key: "findInOptions",
          value: function(t2, A2, e2) {
            var C2, I2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], i2 = 1e9, o2 = "", n2 = [], r2 = t2.toLowerCase(), s2 = void 0;
            for (var a2 in A2) {
              var d2 = void 0;
              if (void 0 !== A2[a2].__type__ && true === I2) {
                var h2 = g2.findInOptions(t2, A2[a2], $f(e2, a2));
                i2 > h2.distance && (o2 = h2.closestMatch, n2 = h2.path, i2 = h2.distance, s2 = h2.indexMatch);
              } else {
                var l2;
                -1 !== Xc(l2 = a2.toLowerCase()).call(l2, r2) && (s2 = a2), i2 > (d2 = g2.levenshteinDistance(t2, a2)) && (o2 = a2, n2 = wh(C2 = e2).call(C2), i2 = d2);
              }
            }
            return {
              closestMatch: o2,
              path: n2,
              distance: i2,
              indexMatch: s2
            };
          }
        }, {
          key: "printLocation",
          value: function(g3, t2) {
            for (var A2 = "\n\n" + (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Problem value found at: \n") + "options = {\n", e2 = 0; e2 < g3.length; e2++) {
              for (var C2 = 0; C2 < e2 + 1; C2++) A2 += "  ";
              A2 += g3[e2] + ": {\n";
            }
            for (var I2 = 0; I2 < g3.length + 1; I2++) A2 += "  ";
            A2 += t2 + "\n";
            for (var i2 = 0; i2 < g3.length + 1; i2++) {
              for (var o2 = 0; o2 < g3.length - i2; o2++) A2 += "  ";
              A2 += "}\n";
            }
            return A2 + "\n\n";
          }
        }, {
          key: "print",
          value: function(g3) {
            return eu(g3).replace(/(")|(\[)|(\])|(,"__type__")/g, "").replace(/(,)/g, ", ");
          }
        }, {
          key: "levenshteinDistance",
          value: function(g3, t2) {
            if (0 === g3.length) return t2.length;
            if (0 === t2.length) return g3.length;
            var A2, e2, C2 = [];
            for (A2 = 0; A2 <= t2.length; A2++) C2[A2] = [A2];
            for (e2 = 0; e2 <= g3.length; e2++) C2[0][e2] = e2;
            for (A2 = 1; A2 <= t2.length; A2++) for (e2 = 1; e2 <= g3.length; e2++) t2.charAt(A2 - 1) == g3.charAt(e2 - 1) ? C2[A2][e2] = C2[A2 - 1][e2 - 1] : C2[A2][e2] = Math.min(C2[A2 - 1][e2 - 1] + 1, Math.min(C2[A2][e2 - 1] + 1, C2[A2 - 1][e2] + 1));
            return C2[t2.length][g3.length];
          }
        }]), g2;
      }(), kv = jf, xv = vv, Ev = Gf, Ov = yv, Tv = bv, Dv = wv;
      function Nv(g2) {
        return zv = g2, function() {
          var g3 = {};
          Sv = 0, void (Zv = zv.charAt(0)), Kv(), "strict" === Fv && (g3.strict = true, Kv());
          "graph" !== Fv && "digraph" !== Fv || (g3.type = Fv, Kv());
          Gv === Mv.IDENTIFIER && (g3.id = Fv, Kv());
          if ("{" != Fv) throw gy("Angle bracket { expected");
          if (Kv(), Hv(g3), "}" != Fv) throw gy("Angle bracket } expected");
          if (Kv(), "" !== Fv) throw gy("End of file expected");
          return Kv(), delete g3.node, delete g3.edge, delete g3.graph, g3;
        }();
      }
      var Rv = {
        fontsize: "font.size",
        fontcolor: "font.color",
        labelfontcolor: "font.color",
        fontname: "font.face",
        color: ["color.border", "color.background"],
        fillcolor: "color.background",
        tooltip: "title",
        labeltooltip: "title"
      }, Pv = $c(Rv);
      Pv.color = "color.color", Pv.style = "dashes";
      var Mv = {
        NULL: 0,
        DELIMITER: 1,
        IDENTIFIER: 2,
        UNKNOWN: 3
      }, Bv = {
        "{": true,
        "}": true,
        "[": true,
        "]": true,
        ";": true,
        "=": true,
        ",": true,
        "->": true,
        "--": true
      }, zv = "", Sv = 0, Zv = "", Fv = "", Gv = Mv.NULL;
      function jv() {
        Sv++, Zv = zv.charAt(Sv);
      }
      function Lv() {
        return zv.charAt(Sv + 1);
      }
      function Vv(g2) {
        var t2 = g2.charCodeAt(0);
        return t2 < 47 ? 35 === t2 || 46 === t2 : t2 < 59 ? t2 > 47 : t2 < 91 ? t2 > 64 : t2 < 96 ? 95 === t2 : t2 < 123 && t2 > 96;
      }
      function Yv(g2, t2) {
        if (g2 || (g2 = {}), t2) for (var A2 in t2) t2.hasOwnProperty(A2) && (g2[A2] = t2[A2]);
        return g2;
      }
      function Wv(g2, t2, A2) {
        for (var e2 = t2.split("."), C2 = g2; e2.length; ) {
          var I2 = e2.shift();
          e2.length ? (C2[I2] || (C2[I2] = {}), C2 = C2[I2]) : C2[I2] = A2;
        }
      }
      function Qv(g2, t2) {
        for (var A2, e2, C2 = null, I2 = [g2], i2 = g2; i2.parent; ) I2.push(i2.parent), i2 = i2.parent;
        if (i2.nodes) {
          for (A2 = 0, e2 = i2.nodes.length; A2 < e2; A2++) if (t2.id === i2.nodes[A2].id) {
            C2 = i2.nodes[A2];
            break;
          }
        }
        for (C2 || (C2 = {
          id: t2.id
        }, g2.node && (C2.attr = Yv(C2.attr, g2.node))), A2 = I2.length - 1; A2 >= 0; A2--) {
          var o2, n2 = I2[A2];
          n2.nodes || (n2.nodes = []), -1 === Xc(o2 = n2.nodes).call(o2, C2) && n2.nodes.push(C2);
        }
        t2.attr && (C2.attr = Yv(C2.attr, t2.attr));
      }
      function Uv(g2, t2) {
        if (g2.edges || (g2.edges = []), g2.edges.push(t2), g2.edge) {
          var A2 = Yv({}, g2.edge);
          t2.attr = Yv(A2, t2.attr);
        }
      }
      function _v(g2, t2, A2, e2, C2) {
        var I2 = {
          from: t2,
          to: A2,
          type: e2
        };
        return g2.edge && (I2.attr = Yv({}, g2.edge)), I2.attr = Yv(I2.attr || {}, C2), null != C2 && C2.hasOwnProperty("arrows") && null != C2.arrows && (I2.arrows = {
          to: {
            enabled: true,
            type: C2.arrows.type
          }
        }, C2.arrows = null), I2;
      }
      function Kv() {
        for (Gv = Mv.NULL, Fv = ""; " " === Zv || "	" === Zv || "\n" === Zv || "\r" === Zv; ) jv();
        do {
          var g2 = false;
          if ("#" === Zv) {
            for (var t2 = Sv - 1; " " === zv.charAt(t2) || "	" === zv.charAt(t2); ) t2--;
            if ("\n" === zv.charAt(t2) || "" === zv.charAt(t2)) {
              for (; "" != Zv && "\n" != Zv; ) jv();
              g2 = true;
            }
          }
          if ("/" === Zv && "/" === Lv()) {
            for (; "" != Zv && "\n" != Zv; ) jv();
            g2 = true;
          }
          if ("/" === Zv && "*" === Lv()) {
            for (; "" != Zv; ) {
              if ("*" === Zv && "/" === Lv()) {
                jv(), jv();
                break;
              }
              jv();
            }
            g2 = true;
          }
          for (; " " === Zv || "	" === Zv || "\n" === Zv || "\r" === Zv; ) jv();
        } while (g2);
        if ("" !== Zv) {
          var A2 = Zv + Lv();
          if (Bv[A2]) return Gv = Mv.DELIMITER, Fv = A2, jv(), void jv();
          if (Bv[Zv]) return Gv = Mv.DELIMITER, Fv = Zv, void jv();
          if (Vv(Zv) || "-" === Zv) {
            for (Fv += Zv, jv(); Vv(Zv); ) Fv += Zv, jv();
            return "false" === Fv ? Fv = false : "true" === Fv ? Fv = true : isNaN(Number(Fv)) || (Fv = Number(Fv)), void (Gv = Mv.IDENTIFIER);
          }
          if ('"' === Zv) {
            for (jv(); "" != Zv && ('"' != Zv || '"' === Zv && '"' === Lv()); ) '"' === Zv ? (Fv += Zv, jv()) : "\\" === Zv && "n" === Lv() ? (Fv += "\n", jv()) : Fv += Zv, jv();
            if ('"' != Zv) throw gy('End of string " expected');
            return jv(), void (Gv = Mv.IDENTIFIER);
          }
          for (Gv = Mv.UNKNOWN; "" != Zv; ) Fv += Zv, jv();
          throw new SyntaxError('Syntax error in part "' + ty(Fv, 30) + '"');
        }
        Gv = Mv.DELIMITER;
      }
      function Hv(g2) {
        for (; "" !== Fv && "}" != Fv; ) Xv(g2), ";" === Fv && Kv();
      }
      function Xv(g2) {
        var t2 = Jv(g2);
        if (t2) qv(g2, t2);
        else {
          var A2 = function(g3) {
            if ("node" === Fv) return Kv(), g3.node = $v(), "node";
            if ("edge" === Fv) return Kv(), g3.edge = $v(), "edge";
            if ("graph" === Fv) return Kv(), g3.graph = $v(), "graph";
            return null;
          }(g2);
          if (!A2) {
            if (Gv != Mv.IDENTIFIER) throw gy("Identifier expected");
            var e2 = Fv;
            if (Kv(), "=" === Fv) {
              if (Kv(), Gv != Mv.IDENTIFIER) throw gy("Identifier expected");
              g2[e2] = Fv, Kv();
            } else !function(g3, t3) {
              var A3 = {
                id: t3
              }, e3 = $v();
              e3 && (A3.attr = e3);
              Qv(g3, A3), qv(g3, t3);
            }(g2, e2);
          }
        }
      }
      function Jv(g2) {
        var t2 = null;
        if ("subgraph" === Fv && ((t2 = {}).type = "subgraph", Kv(), Gv === Mv.IDENTIFIER && (t2.id = Fv, Kv())), "{" === Fv) {
          if (Kv(), t2 || (t2 = {}), t2.parent = g2, t2.node = g2.node, t2.edge = g2.edge, t2.graph = g2.graph, Hv(t2), "}" != Fv) throw gy("Angle bracket } expected");
          Kv(), delete t2.node, delete t2.edge, delete t2.graph, delete t2.parent, g2.subgraphs || (g2.subgraphs = []), g2.subgraphs.push(t2);
        }
        return t2;
      }
      function qv(g2, t2) {
        for (; "->" === Fv || "--" === Fv; ) {
          var A2, e2 = Fv;
          Kv();
          var C2 = Jv(g2);
          if (C2) A2 = C2;
          else {
            if (Gv != Mv.IDENTIFIER) throw gy("Identifier or subgraph expected");
            Qv(g2, {
              id: A2 = Fv
            }), Kv();
          }
          Uv(g2, _v(g2, t2, A2, e2, $v())), t2 = A2;
        }
      }
      function $v() {
        for (var g2, t2, A2 = null, e2 = {
          dashed: true,
          solid: false,
          dotted: [1, 5]
        }, C2 = {
          dot: "circle",
          box: "box",
          crow: "crow",
          curve: "curve",
          icurve: "inv_curve",
          normal: "triangle",
          inv: "inv_triangle",
          diamond: "diamond",
          tee: "bar",
          vee: "vee"
        }, I2 = new Array(), i2 = new Array(); "[" === Fv; ) {
          for (Kv(), A2 = {}; "" !== Fv && "]" != Fv; ) {
            if (Gv != Mv.IDENTIFIER) throw gy("Attribute name expected");
            var o2 = Fv;
            if (Kv(), "=" != Fv) throw gy("Equal sign = expected");
            if (Kv(), Gv != Mv.IDENTIFIER) throw gy("Attribute value expected");
            var n2 = Fv;
            "style" === o2 && (n2 = e2[n2]), "arrowhead" === o2 && (o2 = "arrows", n2 = {
              to: {
                enabled: true,
                type: C2[n2]
              }
            }), "arrowtail" === o2 && (o2 = "arrows", n2 = {
              from: {
                enabled: true,
                type: C2[n2]
              }
            }), I2.push({
              attr: A2,
              name: o2,
              value: n2
            }), i2.push(o2), Kv(), "," == Fv && Kv();
          }
          if ("]" != Fv) throw gy("Bracket ] expected");
          Kv();
        }
        if (Ic(i2).call(i2, "dir")) {
          var r2 = {
            arrows: {}
          };
          for (g2 = 0; g2 < I2.length; g2++) if ("arrows" === I2[g2].name) {
            if (null != I2[g2].value.to) r2.arrows.to = g2;
            else {
              if (null == I2[g2].value.from) throw gy("Invalid value of arrows");
              r2.arrows.from = g2;
            }
          } else "dir" === I2[g2].name && (r2.dir = g2);
          var s2, a2, d2 = I2[r2.dir].value;
          if (!Ic(i2).call(i2, "arrows")) if ("both" === d2) I2.push({
            attr: I2[r2.dir].attr,
            name: "arrows",
            value: {
              to: {
                enabled: true
              }
            }
          }), r2.arrows.to = I2.length - 1, I2.push({
            attr: I2[r2.dir].attr,
            name: "arrows",
            value: {
              from: {
                enabled: true
              }
            }
          }), r2.arrows.from = I2.length - 1;
          else if ("forward" === d2) I2.push({
            attr: I2[r2.dir].attr,
            name: "arrows",
            value: {
              to: {
                enabled: true
              }
            }
          }), r2.arrows.to = I2.length - 1;
          else if ("back" === d2) I2.push({
            attr: I2[r2.dir].attr,
            name: "arrows",
            value: {
              from: {
                enabled: true
              }
            }
          }), r2.arrows.from = I2.length - 1;
          else {
            if ("none" !== d2) throw gy('Invalid dir type "' + d2 + '"');
            I2.push({
              attr: I2[r2.dir].attr,
              name: "arrows",
              value: ""
            }), r2.arrows.to = I2.length - 1;
          }
          if ("both" === d2) r2.arrows.to && r2.arrows.from ? (a2 = I2[r2.arrows.to].value.to.type, s2 = I2[r2.arrows.from].value.from.type, I2[r2.arrows.to] = {
            attr: I2[r2.arrows.to].attr,
            name: I2[r2.arrows.to].name,
            value: {
              to: {
                enabled: true,
                type: a2
              },
              from: {
                enabled: true,
                type: s2
              }
            }
          }, Zl(I2).call(I2, r2.arrows.from, 1)) : r2.arrows.to ? (a2 = I2[r2.arrows.to].value.to.type, s2 = "arrow", I2[r2.arrows.to] = {
            attr: I2[r2.arrows.to].attr,
            name: I2[r2.arrows.to].name,
            value: {
              to: {
                enabled: true,
                type: a2
              },
              from: {
                enabled: true,
                type: s2
              }
            }
          }) : r2.arrows.from && (a2 = "arrow", s2 = I2[r2.arrows.from].value.from.type, I2[r2.arrows.from] = {
            attr: I2[r2.arrows.from].attr,
            name: I2[r2.arrows.from].name,
            value: {
              to: {
                enabled: true,
                type: a2
              },
              from: {
                enabled: true,
                type: s2
              }
            }
          });
          else if ("back" === d2) r2.arrows.to && r2.arrows.from ? (a2 = "", s2 = I2[r2.arrows.from].value.from.type, I2[r2.arrows.from] = {
            attr: I2[r2.arrows.from].attr,
            name: I2[r2.arrows.from].name,
            value: {
              to: {
                enabled: true,
                type: a2
              },
              from: {
                enabled: true,
                type: s2
              }
            }
          }) : r2.arrows.to ? (a2 = "", s2 = "arrow", r2.arrows.from = r2.arrows.to, I2[r2.arrows.from] = {
            attr: I2[r2.arrows.from].attr,
            name: I2[r2.arrows.from].name,
            value: {
              to: {
                enabled: true,
                type: a2
              },
              from: {
                enabled: true,
                type: s2
              }
            }
          }) : r2.arrows.from && (a2 = "", s2 = I2[r2.arrows.from].value.from.type, I2[r2.arrows.to] = {
            attr: I2[r2.arrows.from].attr,
            name: I2[r2.arrows.from].name,
            value: {
              to: {
                enabled: true,
                type: a2
              },
              from: {
                enabled: true,
                type: s2
              }
            }
          }), I2[r2.arrows.from] = {
            attr: I2[r2.arrows.from].attr,
            name: I2[r2.arrows.from].name,
            value: {
              from: {
                enabled: true,
                type: I2[r2.arrows.from].value.from.type
              }
            }
          };
          else if ("none" === d2) {
            var h2;
            I2[h2 = r2.arrows.to ? r2.arrows.to : r2.arrows.from] = {
              attr: I2[h2].attr,
              name: I2[h2].name,
              value: ""
            };
          } else {
            if ("forward" !== d2) throw gy('Invalid dir type "' + d2 + '"');
            r2.arrows.to && r2.arrows.from || r2.arrows.to ? (a2 = I2[r2.arrows.to].value.to.type, s2 = "", I2[r2.arrows.to] = {
              attr: I2[r2.arrows.to].attr,
              name: I2[r2.arrows.to].name,
              value: {
                to: {
                  enabled: true,
                  type: a2
                },
                from: {
                  enabled: true,
                  type: s2
                }
              }
            }) : r2.arrows.from && (a2 = "arrow", s2 = "", r2.arrows.to = r2.arrows.from, I2[r2.arrows.to] = {
              attr: I2[r2.arrows.to].attr,
              name: I2[r2.arrows.to].name,
              value: {
                to: {
                  enabled: true,
                  type: a2
                },
                from: {
                  enabled: true,
                  type: s2
                }
              }
            }), I2[r2.arrows.to] = {
              attr: I2[r2.arrows.to].attr,
              name: I2[r2.arrows.to].name,
              value: {
                to: {
                  enabled: true,
                  type: I2[r2.arrows.to].value.to.type
                }
              }
            };
          }
          Zl(I2).call(I2, r2.dir, 1);
        }
        if (Ic(i2).call(i2, "penwidth")) {
          var l2 = [];
          for (t2 = I2.length, g2 = 0; g2 < t2; g2++) "width" !== I2[g2].name && ("penwidth" === I2[g2].name && (I2[g2].name = "width"), l2.push(I2[g2]));
          I2 = l2;
        }
        for (t2 = I2.length, g2 = 0; g2 < t2; g2++) Wv(I2[g2].attr, I2[g2].name, I2[g2].value);
        return A2;
      }
      function gy(g2) {
        return new SyntaxError(g2 + ', got "' + ty(Fv, 30) + '" (char ' + Sv + ")");
      }
      function ty(g2, t2) {
        return g2.length <= t2 ? g2 : g2.substr(0, 27) + "...";
      }
      function Ay(g2, t2, A2) {
        for (var e2 = t2.split("."), C2 = e2.pop(), I2 = g2, i2 = 0; i2 < e2.length; i2++) {
          var o2 = e2[i2];
          o2 in I2 || (I2[o2] = {}), I2 = I2[o2];
        }
        return I2[C2] = A2, g2;
      }
      function ey(g2, t2) {
        var A2 = {};
        for (var e2 in g2) if (g2.hasOwnProperty(e2)) {
          var C2 = t2[e2];
          Rh(C2) ? Cl(C2).call(C2, function(t3) {
            Ay(A2, t3, g2[e2]);
          }) : Ay(A2, "string" == typeof C2 ? C2 : e2, g2[e2]);
        }
        return A2;
      }
      function Cy(g2) {
        var t2, A2 = Nv(g2), e2 = {
          nodes: [],
          edges: [],
          options: {}
        };
        A2.nodes && Cl(t2 = A2.nodes).call(t2, function(g3) {
          var t3 = {
            id: g3.id,
            label: String(g3.label || g3.id)
          };
          Yv(t3, ey(g3.attr, Rv)), t3.image && (t3.shape = "image"), e2.nodes.push(t3);
        });
        if (A2.edges) {
          var C2, I2 = function(g3) {
            var t3 = {
              from: g3.from,
              to: g3.to
            };
            return Yv(t3, ey(g3.attr, Pv)), null == t3.arrows && "->" === g3.type && (t3.arrows = "to"), t3;
          };
          Cl(C2 = A2.edges).call(C2, function(g3) {
            var t3, A3, C3, i2, o2, n2, r2;
            (t3 = g3.from instanceof Object ? g3.from.nodes : {
              id: g3.from
            }, A3 = g3.to instanceof Object ? g3.to.nodes : {
              id: g3.to
            }, g3.from instanceof Object && g3.from.edges) && Cl(C3 = g3.from.edges).call(C3, function(g4) {
              var t4 = I2(g4);
              e2.edges.push(t4);
            });
            (o2 = A3, n2 = function(t4, A4) {
              var C4 = _v(e2, t4.id, A4.id, g3.type, g3.attr), i3 = I2(C4);
              e2.edges.push(i3);
            }, Rh(i2 = t3) ? Cl(i2).call(i2, function(g4) {
              Rh(o2) ? Cl(o2).call(o2, function(t4) {
                n2(g4, t4);
              }) : n2(g4, o2);
            }) : Rh(o2) ? Cl(o2).call(o2, function(g4) {
              n2(i2, g4);
            }) : n2(i2, o2), g3.to instanceof Object && g3.to.edges) && Cl(r2 = g3.to.edges).call(r2, function(g4) {
              var t4 = I2(g4);
              e2.edges.push(t4);
            });
          });
        }
        return A2.attr && (e2.options = A2.attr), e2;
      }
      var Iy = Object.freeze({
        __proto__: null,
        DOTToGraph: Cy,
        parseDOT: Nv
      });
      function iy(g2, t2) {
        var A2, e2 = {
          edges: {
            inheritColor: false
          },
          nodes: {
            fixed: false,
            parseColor: false
          }
        };
        null != t2 && (null != t2.fixed && (e2.nodes.fixed = t2.fixed), null != t2.parseColor && (e2.nodes.parseColor = t2.parseColor), null != t2.inheritColor && (e2.edges.inheritColor = t2.inheritColor));
        var C2 = g2.edges, I2 = Fh(C2).call(C2, function(g3) {
          var t3 = {
            from: g3.source,
            id: g3.id,
            to: g3.target
          };
          return null != g3.attributes && (t3.attributes = g3.attributes), null != g3.label && (t3.label = g3.label), null != g3.attributes && null != g3.attributes.title && (t3.title = g3.attributes.title), "Directed" === g3.type && (t3.arrows = "to"), g3.color && false === e2.edges.inheritColor && (t3.color = g3.color), t3;
        });
        return {
          nodes: Fh(A2 = g2.nodes).call(A2, function(g3) {
            var t3 = {
              id: g3.id,
              fixed: e2.nodes.fixed && null != g3.x && null != g3.y
            };
            return null != g3.attributes && (t3.attributes = g3.attributes), null != g3.label && (t3.label = g3.label), null != g3.size && (t3.size = g3.size), null != g3.attributes && null != g3.attributes.title && (t3.title = g3.attributes.title), null != g3.title && (t3.title = g3.title), null != g3.x && (t3.x = g3.x), null != g3.y && (t3.y = g3.y), null != g3.color && (true === e2.nodes.parseColor ? t3.color = g3.color : t3.color = {
              background: g3.color,
              border: g3.color,
              highlight: {
                background: g3.color,
                border: g3.color
              },
              hover: {
                background: g3.color,
                border: g3.color
              }
            }), t3;
          }),
          edges: I2
        };
      }
      var oy = Object.freeze({
        __proto__: null,
        parseGephi: iy
      }), ny = Object.freeze({
        __proto__: null,
        cn: {
          addDescription: "单击空白处放置新节点。",
          addEdge: "添加连接线",
          addNode: "添加节点",
          back: "返回",
          close: "關閉",
          createEdgeError: "无法将连接线连接到群集。",
          del: "删除选定",
          deleteClusterError: "无法删除群集。",
          edgeDescription: "单击某个节点并将该连接线拖动到另一个节点以连接它们。",
          edit: "编辑",
          editClusterError: "无法编辑群集。",
          editEdge: "编辑连接线",
          editEdgeDescription: "单击控制节点并将它们拖到节点上连接。",
          editNode: "编辑节点"
        },
        cs: {
          addDescription: "Kluknutím do prázdného prostoru můžete přidat nový vrchol.",
          addEdge: "Přidat hranu",
          addNode: "Přidat vrchol",
          back: "Zpět",
          close: "Zavřít",
          createEdgeError: "Nelze připojit hranu ke shluku.",
          del: "Smazat výběr",
          deleteClusterError: "Nelze mazat shluky.",
          edgeDescription: "Přetažením z jednoho vrcholu do druhého můžete spojit tyto vrcholy novou hranou.",
          edit: "Upravit",
          editClusterError: "Nelze upravovat shluky.",
          editEdge: "Upravit hranu",
          editEdgeDescription: "Přetažením kontrolního vrcholu hrany ji můžete připojit k jinému vrcholu.",
          editNode: "Upravit vrchol"
        },
        de: {
          addDescription: "Klicke auf eine freie Stelle, um einen neuen Knoten zu plazieren.",
          addEdge: "Kante hinzufügen",
          addNode: "Knoten hinzufügen",
          back: "Zurück",
          close: "Schließen",
          createEdgeError: "Es ist nicht möglich, Kanten mit Clustern zu verbinden.",
          del: "Lösche Auswahl",
          deleteClusterError: "Cluster können nicht gelöscht werden.",
          edgeDescription: "Klicke auf einen Knoten und ziehe die Kante zu einem anderen Knoten, um diese zu verbinden.",
          edit: "Editieren",
          editClusterError: "Cluster können nicht editiert werden.",
          editEdge: "Kante editieren",
          editEdgeDescription: "Klicke auf die Verbindungspunkte und ziehe diese auf einen Knoten, um sie zu verbinden.",
          editNode: "Knoten editieren"
        },
        en: {
          addDescription: "Click in an empty space to place a new node.",
          addEdge: "Add Edge",
          addNode: "Add Node",
          back: "Back",
          close: "Close",
          createEdgeError: "Cannot link edges to a cluster.",
          del: "Delete selected",
          deleteClusterError: "Clusters cannot be deleted.",
          edgeDescription: "Click on a node and drag the edge to another node to connect them.",
          edit: "Edit",
          editClusterError: "Clusters cannot be edited.",
          editEdge: "Edit Edge",
          editEdgeDescription: "Click on the control points and drag them to a node to connect to it.",
          editNode: "Edit Node"
        },
        es: {
          addDescription: "Haga clic en un lugar vacío para colocar un nuevo nodo.",
          addEdge: "Añadir arista",
          addNode: "Añadir nodo",
          back: "Atrás",
          close: "Cerrar",
          createEdgeError: "No se puede conectar una arista a un grupo.",
          del: "Eliminar selección",
          deleteClusterError: "No es posible eliminar grupos.",
          edgeDescription: "Haga clic en un nodo y arrastre la arista hacia otro nodo para conectarlos.",
          edit: "Editar",
          editClusterError: "No es posible editar grupos.",
          editEdge: "Editar arista",
          editEdgeDescription: "Haga clic en un punto de control y arrastrelo a un nodo para conectarlo.",
          editNode: "Editar nodo"
        },
        fr: {
          addDescription: "Cliquez dans un endroit vide pour placer un nœud.",
          addEdge: "Ajouter un lien",
          addNode: "Ajouter un nœud",
          back: "Retour",
          close: "Fermer",
          createEdgeError: "Impossible de créer un lien vers un cluster.",
          del: "Effacer la sélection",
          deleteClusterError: "Les clusters ne peuvent pas être effacés.",
          edgeDescription: "Cliquez sur un nœud et glissez le lien vers un autre nœud pour les connecter.",
          edit: "Éditer",
          editClusterError: "Les clusters ne peuvent pas être édités.",
          editEdge: "Éditer le lien",
          editEdgeDescription: "Cliquez sur les points de contrôle et glissez-les pour connecter un nœud.",
          editNode: "Éditer le nœud"
        },
        it: {
          addDescription: "Clicca per aggiungere un nuovo nodo",
          addEdge: "Aggiungi un vertice",
          addNode: "Aggiungi un nodo",
          back: "Indietro",
          close: "Chiudere",
          createEdgeError: "Non si possono collegare vertici ad un cluster",
          del: "Cancella la selezione",
          deleteClusterError: "I cluster non possono essere cancellati",
          edgeDescription: "Clicca su un nodo e trascinalo ad un altro nodo per connetterli.",
          edit: "Modifica",
          editClusterError: "I clusters non possono essere modificati.",
          editEdge: "Modifica il vertice",
          editEdgeDescription: "Clicca sui Punti di controllo e trascinali ad un nodo per connetterli.",
          editNode: "Modifica il nodo"
        },
        nl: {
          addDescription: "Klik op een leeg gebied om een nieuwe node te maken.",
          addEdge: "Link toevoegen",
          addNode: "Node toevoegen",
          back: "Terug",
          close: "Sluiten",
          createEdgeError: "Kan geen link maken naar een cluster.",
          del: "Selectie verwijderen",
          deleteClusterError: "Clusters kunnen niet worden verwijderd.",
          edgeDescription: "Klik op een node en sleep de link naar een andere node om ze te verbinden.",
          edit: "Wijzigen",
          editClusterError: "Clusters kunnen niet worden aangepast.",
          editEdge: "Link wijzigen",
          editEdgeDescription: "Klik op de verbindingspunten en sleep ze naar een node om daarmee te verbinden.",
          editNode: "Node wijzigen"
        },
        pt: {
          addDescription: "Clique em um espaço em branco para adicionar um novo nó",
          addEdge: "Adicionar aresta",
          addNode: "Adicionar nó",
          back: "Voltar",
          close: "Fechar",
          createEdgeError: "Não foi possível linkar arestas a um cluster.",
          del: "Remover selecionado",
          deleteClusterError: "Clusters não puderam ser removidos.",
          edgeDescription: "Clique em um nó e arraste a aresta até outro nó para conectá-los",
          edit: "Editar",
          editClusterError: "Clusters não puderam ser editados.",
          editEdge: "Editar aresta",
          editEdgeDescription: "Clique nos pontos de controle e os arraste para um nó para conectá-los",
          editNode: "Editar nó"
        },
        ru: {
          addDescription: "Кликните в свободное место, чтобы добавить новый узел.",
          addEdge: "Добавить ребро",
          addNode: "Добавить узел",
          back: "Назад",
          close: "Закрывать",
          createEdgeError: "Невозможно соединить ребра в кластер.",
          del: "Удалить выбранное",
          deleteClusterError: "Кластеры не могут быть удалены",
          edgeDescription: "Кликните на узел и протяните ребро к другому узлу, чтобы соединить их.",
          edit: "Редактировать",
          editClusterError: "Кластеры недоступны для редактирования.",
          editEdge: "Редактировать ребро",
          editEdgeDescription: "Кликните на контрольные точки и перетащите их в узел, чтобы подключиться к нему.",
          editNode: "Редактировать узел"
        },
        uk: {
          addDescription: "Kлікніть на вільне місце, щоб додати новий вузол.",
          addEdge: "Додати край",
          addNode: "Додати вузол",
          back: "Назад",
          close: "Закрити",
          createEdgeError: "Не можливо об'єднати краї в групу.",
          del: "Видалити обране",
          deleteClusterError: "Групи не можуть бути видалені.",
          edgeDescription: "Клікніть на вузол і перетягніть край до іншого вузла, щоб їх з'єднати.",
          edit: "Редагувати",
          editClusterError: "Групи недоступні для редагування.",
          editEdge: "Редагувати край",
          editEdgeDescription: "Клікніть на контрольні точки і перетягніть їх у вузол, щоб підключитися до нього.",
          editNode: "Редагувати вузол"
        }
      });
      var ry = function() {
        function g2() {
          cn(this, g2), this.NUM_ITERATIONS = 4, this.image = new Image(), this.canvas = document.createElement("canvas");
        }
        return kd(g2, [{
          key: "init",
          value: function() {
            if (!this.initialized()) {
              this.src = this.image.src;
              var g3 = this.image.width, t2 = this.image.height;
              this.width = g3, this.height = t2;
              var A2 = Math.floor(t2 / 2), e2 = Math.floor(t2 / 4), C2 = Math.floor(t2 / 8), I2 = Math.floor(t2 / 16), i2 = Math.floor(g3 / 2), o2 = Math.floor(g3 / 4), n2 = Math.floor(g3 / 8), r2 = Math.floor(g3 / 16);
              this.canvas.width = 3 * o2, this.canvas.height = A2, this.coordinates = [[0, 0, i2, A2], [i2, 0, o2, e2], [i2, e2, n2, C2], [5 * n2, e2, r2, I2]], this._fillMipMap();
            }
          }
        }, {
          key: "initialized",
          value: function() {
            return void 0 !== this.coordinates;
          }
        }, {
          key: "_fillMipMap",
          value: function() {
            var g3 = this.canvas.getContext("2d"), t2 = this.coordinates[0];
            g3.drawImage(this.image, t2[0], t2[1], t2[2], t2[3]);
            for (var A2 = 1; A2 < this.NUM_ITERATIONS; A2++) {
              var e2 = this.coordinates[A2 - 1], C2 = this.coordinates[A2];
              g3.drawImage(this.canvas, e2[0], e2[1], e2[2], e2[3], C2[0], C2[1], C2[2], C2[3]);
            }
          }
        }, {
          key: "drawImageAtPosition",
          value: function(g3, t2, A2, e2, C2, I2) {
            if (this.initialized()) if (t2 > 2) {
              t2 *= 0.5;
              for (var i2 = 0; t2 > 2 && i2 < this.NUM_ITERATIONS; ) t2 *= 0.5, i2 += 1;
              i2 >= this.NUM_ITERATIONS && (i2 = this.NUM_ITERATIONS - 1);
              var o2 = this.coordinates[i2];
              g3.drawImage(this.canvas, o2[0], o2[1], o2[2], o2[3], A2, e2, C2, I2);
            } else g3.drawImage(this.image, A2, e2, C2, I2);
          }
        }]), g2;
      }(), sy = function() {
        function g2(t2) {
          cn(this, g2), this.images = {}, this.imageBroken = {}, this.callback = t2;
        }
        return kd(g2, [{
          key: "_tryloadBrokenUrl",
          value: function(g3, t2, A2) {
            void 0 !== g3 && void 0 !== A2 && (void 0 !== t2 ? (A2.image.onerror = function() {
              console.error("Could not load brokenImage:", t2);
            }, A2.image.src = t2) : console.warn("No broken url image defined"));
          }
        }, {
          key: "_redrawWithImage",
          value: function(g3) {
            this.callback && this.callback(g3);
          }
        }, {
          key: "load",
          value: function(g3, t2) {
            var A2 = this, e2 = this.images[g3];
            if (e2) return e2;
            var C2 = new ry();
            return this.images[g3] = C2, C2.image.onload = function() {
              A2._fixImageCoordinates(C2.image), C2.init(), A2._redrawWithImage(C2);
            }, C2.image.onerror = function() {
              console.error("Could not load image:", g3), A2._tryloadBrokenUrl(g3, t2, C2);
            }, C2.image.src = g3, C2;
          }
        }, {
          key: "_fixImageCoordinates",
          value: function(g3) {
            0 === g3.width && (document.body.appendChild(g3), g3.width = g3.offsetWidth, g3.height = g3.offsetHeight, document.body.removeChild(g3));
          }
        }]), g2;
      }(), ay = {
        exports: {}
      }, dy = I(function() {
        if ("function" == typeof ArrayBuffer) {
          var g2 = new ArrayBuffer(8);
          Object.isExtensible(g2) && Object.defineProperty(g2, "a", {
            value: 8
          });
        }
      }), hy = I, ly = gg, cy = y, uy = dy, py = Object.isExtensible, fy = hy(function() {
        py(1);
      }) || uy ? function(g2) {
        return !!ly(g2) && (!uy || "ArrayBuffer" !== cy(g2)) && (!py || py(g2));
      } : py, vy = !I(function() {
        return Object.isExtensible(Object.preventExtensions({}));
      }), yy = TA, my = u, by = UA, wy = gg, ky = qg, xy = Jt.f, Ey = gr, Oy = er, Ty = fy, Dy = vy, Ny = false, Ry = et("meta"), Py = 0, My = function(g2) {
        xy(g2, Ry, {
          value: {
            objectID: "O" + Py++,
            weakData: {}
          }
        });
      }, By = ay.exports = {
        enable: function() {
          By.enable = function() {
          }, Ny = true;
          var g2 = Ey.f, t2 = my([].splice), A2 = {};
          A2[Ry] = 1, g2(A2).length && (Ey.f = function(A3) {
            for (var e2 = g2(A3), C2 = 0, I2 = e2.length; C2 < I2; C2++) if (e2[C2] === Ry) {
              t2(e2, C2, 1);
              break;
            }
            return e2;
          }, yy({
            target: "Object",
            stat: true,
            forced: true
          }, {
            getOwnPropertyNames: Oy.f
          }));
        },
        fastKey: function(g2, t2) {
          if (!wy(g2)) return "symbol" == typeof g2 ? g2 : ("string" == typeof g2 ? "S" : "P") + g2;
          if (!ky(g2, Ry)) {
            if (!Ty(g2)) return "F";
            if (!t2) return "E";
            My(g2);
          }
          return g2[Ry].objectID;
        },
        getWeakData: function(g2, t2) {
          if (!ky(g2, Ry)) {
            if (!Ty(g2)) return true;
            if (!t2) return false;
            My(g2);
          }
          return g2[Ry].weakData;
        },
        onFreeze: function(g2) {
          return Dy && Ny && Ty(g2) && !ky(g2, Ry) && My(g2), g2;
        }
      };
      by[Ry] = true;
      var zy = ay.exports, Sy = Xt, Zy = P, Fy = AA, Gy = Og, jy = Qi, Ly = jA, Vy = og, Yy = Oo, Wy = yo, Qy = Gi, Uy = TypeError, _y = function(g2, t2) {
        this.stopped = g2, this.result = t2;
      }, Ky = _y.prototype, Hy = function(g2, t2, A2) {
        var e2, C2, I2, i2, o2, n2, r2, s2 = A2 && A2.that, a2 = !(!A2 || !A2.AS_ENTRIES), d2 = !(!A2 || !A2.IS_RECORD), h2 = !(!A2 || !A2.IS_ITERATOR), l2 = !(!A2 || !A2.INTERRUPTED), c2 = Sy(t2, s2), u2 = function(g3) {
          return e2 && Qy(e2, "normal", g3), new _y(true, g3);
        }, p2 = function(g3) {
          return a2 ? (Fy(g3), l2 ? c2(g3[0], g3[1], u2) : c2(g3[0], g3[1])) : l2 ? c2(g3, u2) : c2(g3);
        };
        if (d2) e2 = g2.iterator;
        else if (h2) e2 = g2;
        else {
          if (!(C2 = Wy(g2))) throw new Uy(Gy(g2) + " is not iterable");
          if (jy(C2)) {
            for (I2 = 0, i2 = Ly(g2); i2 > I2; I2++) if ((o2 = p2(g2[I2])) && Vy(Ky, o2)) return o2;
            return new _y(false);
          }
          e2 = Yy(g2, C2);
        }
        for (n2 = d2 ? g2.next : e2.next; !(r2 = Zy(n2, e2)).done; ) {
          try {
            o2 = p2(r2.value);
          } catch (g3) {
            Qy(e2, "throw", g3);
          }
          if ("object" == typeof o2 && o2 && Vy(Ky, o2)) return o2;
        }
        return new _y(false);
      }, Xy = og, Jy = TypeError, qy = function(g2, t2) {
        if (Xy(t2, g2)) return g2;
        throw new Jy("Incorrect invocation");
      }, $y = TA, gm = C, tm = zy, Am = I, em = uA, Cm = Hy, Im = qy, im = O, om = gg, nm = Q, rm = _I, sm = Jt.f, am = Sr.forEach, dm = D, hm = GC.set, lm = GC.getterFor, cm = function(g2, t2, A2) {
        var e2, C2 = -1 !== g2.indexOf("Map"), I2 = -1 !== g2.indexOf("Weak"), i2 = C2 ? "set" : "add", o2 = gm[g2], n2 = o2 && o2.prototype, r2 = {};
        if (dm && im(o2) && (I2 || n2.forEach && !Am(function() {
          new o2().entries().next();
        }))) {
          var s2 = (e2 = t2(function(t3, A3) {
            hm(Im(t3, s2), {
              type: g2,
              collection: new o2()
            }), nm(A3) || Cm(A3, t3[i2], {
              that: t3,
              AS_ENTRIES: C2
            });
          })).prototype, a2 = lm(g2);
          am(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function(g3) {
            var t3 = "add" === g3 || "set" === g3;
            !(g3 in n2) || I2 && "clear" === g3 || em(s2, g3, function(A3, e3) {
              var C3 = a2(this).collection;
              if (!t3 && I2 && !om(A3)) return "get" === g3 && void 0;
              var i3 = C3[g3](0 === A3 ? 0 : A3, e3);
              return t3 ? this : i3;
            });
          }), I2 || sm(s2, "size", {
            configurable: true,
            get: function() {
              return a2(this).collection.size;
            }
          });
        } else e2 = A2.getConstructor(t2, g2, C2, i2), tm.enable();
        return rm(e2, g2, false, true), r2[g2] = e2, $y({
          global: true,
          forced: true
        }, r2), I2 || A2.setStrong(e2, g2, C2), e2;
      }, um = TI, pm = function(g2, t2, A2) {
        for (var e2 in t2) A2 && A2.unsafe && g2[e2] ? g2[e2] = t2[e2] : um(g2, e2, t2[e2], A2);
        return g2;
      }, fm = ig, vm = ur, ym = D, mm = dt("species"), bm = function(g2) {
        var t2 = fm(g2);
        ym && t2 && !t2[mm] && vm(t2, mm, {
          configurable: true,
          get: function() {
            return this;
          }
        });
      }, wm = pI, km = ur, xm = pm, Em = Xt, Om = qy, Tm = Q, Dm = Hy, Nm = Ei, Rm = Oi, Pm = bm, Mm = D, Bm = zy.fastKey, zm = GC.set, Sm = GC.getterFor, Zm = {
        getConstructor: function(g2, t2, A2, e2) {
          var C2 = g2(function(g3, C3) {
            Om(g3, I2), zm(g3, {
              type: t2,
              index: wm(null),
              first: void 0,
              last: void 0,
              size: 0
            }), Mm || (g3.size = 0), Tm(C3) || Dm(C3, g3[e2], {
              that: g3,
              AS_ENTRIES: A2
            });
          }), I2 = C2.prototype, i2 = Sm(t2), o2 = function(g3, t3, A3) {
            var e3, C3, I3 = i2(g3), o3 = n2(g3, t3);
            return o3 ? o3.value = A3 : (I3.last = o3 = {
              index: C3 = Bm(t3, true),
              key: t3,
              value: A3,
              previous: e3 = I3.last,
              next: void 0,
              removed: false
            }, I3.first || (I3.first = o3), e3 && (e3.next = o3), Mm ? I3.size++ : g3.size++, "F" !== C3 && (I3.index[C3] = o3)), g3;
          }, n2 = function(g3, t3) {
            var A3, e3 = i2(g3), C3 = Bm(t3);
            if ("F" !== C3) return e3.index[C3];
            for (A3 = e3.first; A3; A3 = A3.next) if (A3.key === t3) return A3;
          };
          return xm(I2, {
            clear: function() {
              for (var g3 = i2(this), t3 = g3.index, A3 = g3.first; A3; ) A3.removed = true, A3.previous && (A3.previous = A3.previous.next = void 0), delete t3[A3.index], A3 = A3.next;
              g3.first = g3.last = void 0, Mm ? g3.size = 0 : this.size = 0;
            },
            delete: function(g3) {
              var t3 = this, A3 = i2(t3), e3 = n2(t3, g3);
              if (e3) {
                var C3 = e3.next, I3 = e3.previous;
                delete A3.index[e3.index], e3.removed = true, I3 && (I3.next = C3), C3 && (C3.previous = I3), A3.first === e3 && (A3.first = C3), A3.last === e3 && (A3.last = I3), Mm ? A3.size-- : t3.size--;
              }
              return !!e3;
            },
            forEach: function(g3) {
              for (var t3, A3 = i2(this), e3 = Em(g3, arguments.length > 1 ? arguments[1] : void 0); t3 = t3 ? t3.next : A3.first; ) for (e3(t3.value, t3.key, this); t3 && t3.removed; ) t3 = t3.previous;
            },
            has: function(g3) {
              return !!n2(this, g3);
            }
          }), xm(I2, A2 ? {
            get: function(g3) {
              var t3 = n2(this, g3);
              return t3 && t3.value;
            },
            set: function(g3, t3) {
              return o2(this, 0 === g3 ? 0 : g3, t3);
            }
          } : {
            add: function(g3) {
              return o2(this, g3 = 0 === g3 ? 0 : g3, g3);
            }
          }), Mm && km(I2, "size", {
            configurable: true,
            get: function() {
              return i2(this).size;
            }
          }), C2;
        },
        setStrong: function(g2, t2, A2) {
          var e2 = t2 + " Iterator", C2 = Sm(t2), I2 = Sm(e2);
          Nm(g2, t2, function(g3, t3) {
            zm(this, {
              type: e2,
              target: g3,
              state: C2(g3),
              kind: t3,
              last: void 0
            });
          }, function() {
            for (var g3 = I2(this), t3 = g3.kind, A3 = g3.last; A3 && A3.removed; ) A3 = A3.previous;
            return g3.target && (g3.last = A3 = A3 ? A3.next : g3.state.first) ? Rm("keys" === t3 ? A3.key : "values" === t3 ? A3.value : [A3.key, A3.value], false) : (g3.target = void 0, Rm(void 0, true));
          }, A2 ? "entries" : "values", !A2, true), Pm(t2);
        }
      };
      cm("Map", function(g2) {
        return function() {
          return g2(this, arguments.length ? arguments[0] : void 0);
        };
      }, Zm);
      var Fm = A(tg.Map), Gm = function() {
        function g2() {
          cn(this, g2), this.clear(), this._defaultIndex = 0, this._groupIndex = 0, this._defaultGroups = [{
            border: "#2B7CE9",
            background: "#97C2FC",
            highlight: {
              border: "#2B7CE9",
              background: "#D2E5FF"
            },
            hover: {
              border: "#2B7CE9",
              background: "#D2E5FF"
            }
          }, {
            border: "#FFA500",
            background: "#FFFF00",
            highlight: {
              border: "#FFA500",
              background: "#FFFFA3"
            },
            hover: {
              border: "#FFA500",
              background: "#FFFFA3"
            }
          }, {
            border: "#FA0A10",
            background: "#FB7E81",
            highlight: {
              border: "#FA0A10",
              background: "#FFAFB1"
            },
            hover: {
              border: "#FA0A10",
              background: "#FFAFB1"
            }
          }, {
            border: "#41A906",
            background: "#7BE141",
            highlight: {
              border: "#41A906",
              background: "#A1EC76"
            },
            hover: {
              border: "#41A906",
              background: "#A1EC76"
            }
          }, {
            border: "#E129F0",
            background: "#EB7DF4",
            highlight: {
              border: "#E129F0",
              background: "#F0B3F5"
            },
            hover: {
              border: "#E129F0",
              background: "#F0B3F5"
            }
          }, {
            border: "#7C29F0",
            background: "#AD85E4",
            highlight: {
              border: "#7C29F0",
              background: "#D3BDF0"
            },
            hover: {
              border: "#7C29F0",
              background: "#D3BDF0"
            }
          }, {
            border: "#C37F00",
            background: "#FFA807",
            highlight: {
              border: "#C37F00",
              background: "#FFCA66"
            },
            hover: {
              border: "#C37F00",
              background: "#FFCA66"
            }
          }, {
            border: "#4220FB",
            background: "#6E6EFD",
            highlight: {
              border: "#4220FB",
              background: "#9B9BFD"
            },
            hover: {
              border: "#4220FB",
              background: "#9B9BFD"
            }
          }, {
            border: "#FD5A77",
            background: "#FFC0CB",
            highlight: {
              border: "#FD5A77",
              background: "#FFD1D9"
            },
            hover: {
              border: "#FD5A77",
              background: "#FFD1D9"
            }
          }, {
            border: "#4AD63A",
            background: "#C2FABC",
            highlight: {
              border: "#4AD63A",
              background: "#E6FFE3"
            },
            hover: {
              border: "#4AD63A",
              background: "#E6FFE3"
            }
          }, {
            border: "#990000",
            background: "#EE0000",
            highlight: {
              border: "#BB0000",
              background: "#FF3333"
            },
            hover: {
              border: "#BB0000",
              background: "#FF3333"
            }
          }, {
            border: "#FF6000",
            background: "#FF6000",
            highlight: {
              border: "#FF6000",
              background: "#FF6000"
            },
            hover: {
              border: "#FF6000",
              background: "#FF6000"
            }
          }, {
            border: "#97C2FC",
            background: "#2B7CE9",
            highlight: {
              border: "#D2E5FF",
              background: "#2B7CE9"
            },
            hover: {
              border: "#D2E5FF",
              background: "#2B7CE9"
            }
          }, {
            border: "#399605",
            background: "#255C03",
            highlight: {
              border: "#399605",
              background: "#255C03"
            },
            hover: {
              border: "#399605",
              background: "#255C03"
            }
          }, {
            border: "#B70054",
            background: "#FF007E",
            highlight: {
              border: "#B70054",
              background: "#FF007E"
            },
            hover: {
              border: "#B70054",
              background: "#FF007E"
            }
          }, {
            border: "#AD85E4",
            background: "#7C29F0",
            highlight: {
              border: "#D3BDF0",
              background: "#7C29F0"
            },
            hover: {
              border: "#D3BDF0",
              background: "#7C29F0"
            }
          }, {
            border: "#4557FA",
            background: "#000EA1",
            highlight: {
              border: "#6E6EFD",
              background: "#000EA1"
            },
            hover: {
              border: "#6E6EFD",
              background: "#000EA1"
            }
          }, {
            border: "#FFC0CB",
            background: "#FD5A77",
            highlight: {
              border: "#FFD1D9",
              background: "#FD5A77"
            },
            hover: {
              border: "#FFD1D9",
              background: "#FD5A77"
            }
          }, {
            border: "#C2FABC",
            background: "#74D66A",
            highlight: {
              border: "#E6FFE3",
              background: "#74D66A"
            },
            hover: {
              border: "#E6FFE3",
              background: "#74D66A"
            }
          }, {
            border: "#EE0000",
            background: "#990000",
            highlight: {
              border: "#FF3333",
              background: "#BB0000"
            },
            hover: {
              border: "#FF3333",
              background: "#BB0000"
            }
          }], this.options = {}, this.defaultOptions = {
            useDefaultGroups: true
          }, fe(this.options, this.defaultOptions);
        }
        return kd(g2, [{
          key: "setOptions",
          value: function(g3) {
            var t2 = ["useDefaultGroups"];
            if (void 0 !== g3) {
              for (var A2 in g3) if (Object.prototype.hasOwnProperty.call(g3, A2) && -1 === Xc(t2).call(t2, A2)) {
                var e2 = g3[A2];
                this.add(A2, e2);
              }
            }
          }
        }, {
          key: "clear",
          value: function() {
            this._groups = new Fm(), this._groupNames = [];
          }
        }, {
          key: "get",
          value: function(g3) {
            var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], A2 = this._groups.get(g3);
            if (void 0 === A2 && t2) if (false === this.options.useDefaultGroups && this._groupNames.length > 0) {
              var e2 = this._groupIndex % this._groupNames.length;
              ++this._groupIndex, (A2 = {}).color = this._groups.get(this._groupNames[e2]), this._groups.set(g3, A2);
            } else {
              var C2 = this._defaultIndex % this._defaultGroups.length;
              this._defaultIndex++, (A2 = {}).color = this._defaultGroups[C2], this._groups.set(g3, A2);
            }
            return A2;
          }
        }, {
          key: "add",
          value: function(g3, t2) {
            return this._groups.has(g3) || this._groupNames.push(g3), this._groups.set(g3, t2), t2;
          }
        }]), g2;
      }();
      TA({
        target: "Number",
        stat: true
      }, {
        isNaN: function(g2) {
          return g2 != g2;
        }
      });
      var jm = A(tg.Number.isNaN), Lm = C.isFinite, Vm = Number.isFinite || function(g2) {
        return "number" == typeof g2 && Lm(g2);
      };
      TA({
        target: "Number",
        stat: true
      }, {
        isFinite: Vm
      });
      var Ym = A(tg.Number.isFinite), Wm = Sr.some;
      TA({
        target: "Array",
        proto: true,
        forced: !_h("some")
      }, {
        some: function(g2) {
          return Wm(this, g2, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      var Qm = Me("Array").some, Um = og, _m = Qm, Km = Array.prototype, Hm = function(g2) {
        var t2 = g2.some;
        return g2 === Km || Um(Km, g2) && t2 === Km.some ? _m : t2;
      }, Xm = A(Hm);
      function Jm(g2) {
        if (void 0 === g2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return g2;
      }
      var qm = qc, $m = A(qm);
      TA({
        target: "Object",
        stat: true
      }, {
        setPrototypeOf: ri
      });
      var gb = tg.Object.setPrototypeOf, tb = A(gb), Ab = A(Ge);
      function eb(g2, t2) {
        var A2;
        return eb = tb ? Ab(A2 = tb).call(A2) : function(g3, t3) {
          return g3.__proto__ = t3, g3;
        }, eb(g2, t2);
      }
      function Cb(g2, t2) {
        if ("function" != typeof t2 && null !== t2) throw new TypeError("Super expression must either be null or a function");
        g2.prototype = $m(t2 && t2.prototype, {
          constructor: {
            value: g2,
            writable: true,
            configurable: true
          }
        }), kn(g2, "prototype", {
          writable: false
        }), t2 && eb(g2, t2);
      }
      function Ib(g2, t2) {
        if (t2 && ("object" === yd(t2) || "function" == typeof t2)) return t2;
        if (void 0 !== t2) throw new TypeError("Derived constructors may only return object or undefined");
        return Jm(g2);
      }
      var ib = rc, ob = A(ib);
      function nb(g2) {
        var t2;
        return nb = tb ? Ab(t2 = ob).call(t2) : function(g3) {
          return g3.__proto__ || ob(g3);
        }, nb(g2);
      }
      function rb(g2, t2, A2) {
        return (t2 = bd(t2)) in g2 ? kn(g2, t2, {
          value: A2,
          enumerable: true,
          configurable: true,
          writable: true
        }) : g2[t2] = A2, g2;
      }
      var sb = {
        exports: {}
      }, ab = {
        exports: {}
      };
      !function(g2) {
        var t2 = cd, A2 = fd;
        function e2(C2) {
          return g2.exports = e2 = "function" == typeof t2 && "symbol" == typeof A2 ? function(g3) {
            return typeof g3;
          } : function(g3) {
            return g3 && "function" == typeof t2 && g3.constructor === t2 && g3 !== t2.prototype ? "symbol" : typeof g3;
          }, g2.exports.__esModule = true, g2.exports.default = g2.exports, e2(C2);
        }
        g2.exports = e2, g2.exports.__esModule = true, g2.exports.default = g2.exports;
      }(ab);
      var db = ab.exports, hb = el, lb = qg, cb = Dh, ub = T, pb = Jt, fb = gg, vb = uA, yb = Error, mb = u("".replace), bb = String(new yb("zxcasd").stack), wb = /\n\s*at [^:]*:[^\n]*/, kb = wb.test(bb), xb = G, Eb = !I(function() {
        var g2 = new Error("a");
        return !("stack" in g2) || (Object.defineProperty(g2, "stack", xb(1, 7)), 7 !== g2.stack);
      }), Ob = uA, Tb = function(g2, t2) {
        if (kb && "string" == typeof g2 && !yb.prepareStackTrace) for (; t2--; ) g2 = mb(g2, wb, "");
        return g2;
      }, Db = Eb, Nb = Error.captureStackTrace, Rb = sC, Pb = TA, Mb = og, Bb = EI, zb = ri, Sb = function(g2, t2, A2) {
        for (var e2 = cb(t2), C2 = pb.f, I2 = ub.f, i2 = 0; i2 < e2.length; i2++) {
          var o2 = e2[i2];
          lb(g2, o2) || A2 && lb(A2, o2) || C2(g2, o2, I2(t2, o2));
        }
      }, Zb = pI, Fb = uA, Gb = G, jb = function(g2, t2) {
        fb(t2) && "cause" in t2 && vb(g2, "cause", t2.cause);
      }, Lb = function(g2, t2, A2, e2) {
        Db && (Nb ? Nb(g2, t2) : Ob(g2, "stack", Tb(A2, e2)));
      }, Vb = Hy, Yb = function(g2, t2) {
        return void 0 === g2 ? arguments.length < 2 ? "" : t2 : Rb(g2);
      }, Wb = dt("toStringTag"), Qb = Error, Ub = [].push, _b = function(g2, t2) {
        var A2, e2 = Mb(Kb, this);
        zb ? A2 = zb(new Qb(), e2 ? Bb(this) : Kb) : (A2 = e2 ? this : Zb(Kb), Fb(A2, Wb, "Error")), void 0 !== t2 && Fb(A2, "message", Yb(t2)), Lb(A2, _b, A2.stack, 1), arguments.length > 2 && jb(A2, arguments[2]);
        var C2 = [];
        return Vb(g2, Ub, {
          that: C2
        }), Fb(A2, "errors", C2), A2;
      };
      zb ? zb(_b, Qb) : Sb(_b, Qb, {
        name: true
      });
      var Kb = _b.prototype = Zb(Qb.prototype, {
        constructor: Gb(1, _b),
        message: Gb(1, ""),
        name: Gb(1, "AggregateError")
      });
      Pb({
        global: true,
        constructor: true,
        arity: 2
      }, {
        AggregateError: _b
      });
      var Hb, Xb, Jb, qb, $b = "process" === y(C.process), gw = ro, tw = Og, Aw = TypeError, ew = function(g2) {
        if (gw(g2)) return g2;
        throw new Aw(tw(g2) + " is not a constructor");
      }, Cw = AA, Iw = ew, iw = Q, ow = dt("species"), nw = function(g2, t2) {
        var A2, e2 = Cw(g2).constructor;
        return void 0 === e2 || iw(A2 = Cw(e2)[ow]) ? t2 : Iw(A2);
      }, rw = /(?:ipad|iphone|ipod).*applewebkit/i.test(ng), sw = C, aw = a, dw = Xt, hw = O, lw = qg, cw = I, uw = gI, pw = ve, fw = Et, vw = iu, yw = rw, mw = $b, bw = sw.setImmediate, ww = sw.clearImmediate, kw = sw.process, xw = sw.Dispatch, Ew = sw.Function, Ow = sw.MessageChannel, Tw = sw.String, Dw = 0, Nw = {}, Rw = "onreadystatechange";
      cw(function() {
        Hb = sw.location;
      });
      var Pw = function(g2) {
        if (lw(Nw, g2)) {
          var t2 = Nw[g2];
          delete Nw[g2], t2();
        }
      }, Mw = function(g2) {
        return function() {
          Pw(g2);
        };
      }, Bw = function(g2) {
        Pw(g2.data);
      }, zw = function(g2) {
        sw.postMessage(Tw(g2), Hb.protocol + "//" + Hb.host);
      };
      bw && ww || (bw = function(g2) {
        vw(arguments.length, 1);
        var t2 = hw(g2) ? g2 : Ew(g2), A2 = pw(arguments, 1);
        return Nw[++Dw] = function() {
          aw(t2, void 0, A2);
        }, Xb(Dw), Dw;
      }, ww = function(g2) {
        delete Nw[g2];
      }, mw ? Xb = function(g2) {
        kw.nextTick(Mw(g2));
      } : xw && xw.now ? Xb = function(g2) {
        xw.now(Mw(g2));
      } : Ow && !yw ? (qb = (Jb = new Ow()).port2, Jb.port1.onmessage = Bw, Xb = dw(qb.postMessage, qb)) : sw.addEventListener && hw(sw.postMessage) && !sw.importScripts && Hb && "file:" !== Hb.protocol && !cw(zw) ? (Xb = zw, sw.addEventListener("message", Bw, false)) : Xb = Rw in fw("script") ? function(g2) {
        uw.appendChild(fw("script"))[Rw] = function() {
          uw.removeChild(this), Pw(g2);
        };
      } : function(g2) {
        setTimeout(Mw(g2), 0);
      });
      var Sw = {
        set: bw,
        clear: ww
      }, Zw = function() {
        this.head = null, this.tail = null;
      };
      Zw.prototype = {
        add: function(g2) {
          var t2 = {
            item: g2,
            next: null
          }, A2 = this.tail;
          A2 ? A2.next = t2 : this.head = t2, this.tail = t2;
        },
        get: function() {
          var g2 = this.head;
          if (g2) return null === (this.head = g2.next) && (this.tail = null), g2.item;
        }
      };
      var Fw, Gw, jw, Lw, Vw, Yw = Zw, Ww = /ipad|iphone|ipod/i.test(ng) && "undefined" != typeof Pebble, Qw = /web0s(?!.*chrome)/i.test(ng), Uw = C, _w = Xt, Kw = T.f, Hw = Sw.set, Xw = Yw, Jw = rw, qw = Ww, $w = Qw, gk = $b, tk = Uw.MutationObserver || Uw.WebKitMutationObserver, Ak = Uw.document, ek = Uw.process, Ck = Uw.Promise, Ik = Kw(Uw, "queueMicrotask"), ik = Ik && Ik.value;
      if (!ik) {
        var ok = new Xw(), nk = function() {
          var g2, t2;
          for (gk && (g2 = ek.domain) && g2.exit(); t2 = ok.get(); ) try {
            t2();
          } catch (g3) {
            throw ok.head && Fw(), g3;
          }
          g2 && g2.enter();
        };
        Jw || gk || $w || !tk || !Ak ? !qw && Ck && Ck.resolve ? ((Lw = Ck.resolve(void 0)).constructor = Ck, Vw = _w(Lw.then, Lw), Fw = function() {
          Vw(nk);
        }) : gk ? Fw = function() {
          ek.nextTick(nk);
        } : (Hw = _w(Hw, Uw), Fw = function() {
          Hw(nk);
        }) : (Gw = true, jw = Ak.createTextNode(""), new tk(nk).observe(jw, {
          characterData: true
        }), Fw = function() {
          jw.data = Gw = !Gw;
        }), ik = function(g2) {
          ok.head || Fw(), ok.add(g2);
        };
      }
      var rk = ik, sk = function(g2) {
        try {
          return {
            error: false,
            value: g2()
          };
        } catch (g3) {
          return {
            error: true,
            value: g3
          };
        }
      }, ak = C.Promise, dk = "object" == typeof Deno && Deno && "object" == typeof Deno.version, hk = !dk && !$b && "object" == typeof window && "object" == typeof document, lk = C, ck = ak, uk = O, pk = Ut, fk = Hi, vk = dt, yk = hk, mk = dk, bk = cg, wk = ck && ck.prototype, kk = vk("species"), xk = false, Ek = uk(lk.PromiseRejectionEvent), Ok = pk("Promise", function() {
        var g2 = fk(ck), t2 = g2 !== String(ck);
        if (!t2 && 66 === bk) return true;
        if (!wk.catch || !wk.finally) return true;
        if (!bk || bk < 51 || !/native code/.test(g2)) {
          var A2 = new ck(function(g3) {
            g3(1);
          }), e2 = function(g3) {
            g3(function() {
            }, function() {
            });
          };
          if ((A2.constructor = {})[kk] = e2, !(xk = A2.then(function() {
          }) instanceof e2)) return true;
        }
        return !t2 && (yk || mk) && !Ek;
      }), Tk = {
        CONSTRUCTOR: Ok,
        REJECTION_EVENT: Ek,
        SUBCLASSING: xk
      }, Dk = {}, Nk = Rg, Rk = TypeError, Pk = function(g2) {
        var t2, A2;
        this.promise = new g2(function(g3, e2) {
          if (void 0 !== t2 || void 0 !== A2) throw new Rk("Bad Promise constructor");
          t2 = g3, A2 = e2;
        }), this.resolve = Nk(t2), this.reject = Nk(A2);
      };
      Dk.f = function(g2) {
        return new Pk(g2);
      };
      var Mk, Bk, zk = TA, Sk = $b, Zk = C, Fk = P, Gk = TI, jk = _I, Lk = bm, Vk = Rg, Yk = O, Wk = gg, Qk = qy, Uk = nw, _k = Sw.set, Kk = rk, Hk = function(g2, t2) {
        try {
          1 === arguments.length ? console.error(g2) : console.error(g2, t2);
        } catch (g3) {
        }
      }, Xk = sk, Jk = Yw, qk = GC, $k = ak, gx = Tk, tx = Dk, Ax = "Promise", ex = gx.CONSTRUCTOR, Cx = gx.REJECTION_EVENT, Ix = qk.getterFor(Ax), ix = qk.set, ox = $k && $k.prototype, nx = $k, rx = ox, sx = Zk.TypeError, ax = Zk.document, dx = Zk.process, hx = tx.f, lx = hx, cx = !!(ax && ax.createEvent && Zk.dispatchEvent), ux = "unhandledrejection", px = function(g2) {
        var t2;
        return !(!Wk(g2) || !Yk(t2 = g2.then)) && t2;
      }, fx = function(g2, t2) {
        var A2, e2, C2, I2 = t2.value, i2 = 1 === t2.state, o2 = i2 ? g2.ok : g2.fail, n2 = g2.resolve, r2 = g2.reject, s2 = g2.domain;
        try {
          o2 ? (i2 || (2 === t2.rejection && wx(t2), t2.rejection = 1), true === o2 ? A2 = I2 : (s2 && s2.enter(), A2 = o2(I2), s2 && (s2.exit(), C2 = true)), A2 === g2.promise ? r2(new sx("Promise-chain cycle")) : (e2 = px(A2)) ? Fk(e2, A2, n2, r2) : n2(A2)) : r2(I2);
        } catch (g3) {
          s2 && !C2 && s2.exit(), r2(g3);
        }
      }, vx = function(g2, t2) {
        g2.notified || (g2.notified = true, Kk(function() {
          for (var A2, e2 = g2.reactions; A2 = e2.get(); ) fx(A2, g2);
          g2.notified = false, t2 && !g2.rejection && mx(g2);
        }));
      }, yx = function(g2, t2, A2) {
        var e2, C2;
        cx ? ((e2 = ax.createEvent("Event")).promise = t2, e2.reason = A2, e2.initEvent(g2, false, true), Zk.dispatchEvent(e2)) : e2 = {
          promise: t2,
          reason: A2
        }, !Cx && (C2 = Zk["on" + g2]) ? C2(e2) : g2 === ux && Hk("Unhandled promise rejection", A2);
      }, mx = function(g2) {
        Fk(_k, Zk, function() {
          var t2, A2 = g2.facade, e2 = g2.value;
          if (bx(g2) && (t2 = Xk(function() {
            Sk ? dx.emit("unhandledRejection", e2, A2) : yx(ux, A2, e2);
          }), g2.rejection = Sk || bx(g2) ? 2 : 1, t2.error)) throw t2.value;
        });
      }, bx = function(g2) {
        return 1 !== g2.rejection && !g2.parent;
      }, wx = function(g2) {
        Fk(_k, Zk, function() {
          var t2 = g2.facade;
          Sk ? dx.emit("rejectionHandled", t2) : yx("rejectionhandled", t2, g2.value);
        });
      }, kx = function(g2, t2, A2) {
        return function(e2) {
          g2(t2, e2, A2);
        };
      }, xx = function(g2, t2, A2) {
        g2.done || (g2.done = true, A2 && (g2 = A2), g2.value = t2, g2.state = 2, vx(g2, true));
      }, Ex = function(g2, t2, A2) {
        if (!g2.done) {
          g2.done = true, A2 && (g2 = A2);
          try {
            if (g2.facade === t2) throw new sx("Promise can't be resolved itself");
            var e2 = px(t2);
            e2 ? Kk(function() {
              var A3 = {
                done: false
              };
              try {
                Fk(e2, t2, kx(Ex, A3, g2), kx(xx, A3, g2));
              } catch (t3) {
                xx(A3, t3, g2);
              }
            }) : (g2.value = t2, g2.state = 1, vx(g2, false));
          } catch (t3) {
            xx({
              done: false
            }, t3, g2);
          }
        }
      };
      ex && (rx = (nx = function(g2) {
        Qk(this, rx), Vk(g2), Fk(Mk, this);
        var t2 = Ix(this);
        try {
          g2(kx(Ex, t2), kx(xx, t2));
        } catch (g3) {
          xx(t2, g3);
        }
      }).prototype, (Mk = function(g2) {
        ix(this, {
          type: Ax,
          done: false,
          notified: false,
          parent: false,
          reactions: new Jk(),
          rejection: false,
          state: 0,
          value: void 0
        });
      }).prototype = Gk(rx, "then", function(g2, t2) {
        var A2 = Ix(this), e2 = hx(Uk(this, nx));
        return A2.parent = true, e2.ok = !Yk(g2) || g2, e2.fail = Yk(t2) && t2, e2.domain = Sk ? dx.domain : void 0, 0 === A2.state ? A2.reactions.add(e2) : Kk(function() {
          fx(e2, A2);
        }), e2.promise;
      }), Bk = function() {
        var g2 = new Mk(), t2 = Ix(g2);
        this.promise = g2, this.resolve = kx(Ex, t2), this.reject = kx(xx, t2);
      }, tx.f = hx = function(g2) {
        return g2 === nx || void 0 === g2 ? new Bk(g2) : lx(g2);
      }), zk({
        global: true,
        constructor: true,
        wrap: true,
        forced: ex
      }, {
        Promise: nx
      }), jk(nx, Ax, false, true), Lk(Ax);
      var Ox = ak, Tx = Tk.CONSTRUCTOR || !Yo(function(g2) {
        Ox.all(g2).then(void 0, function() {
        });
      }), Dx = P, Nx = Rg, Rx = Dk, Px = sk, Mx = Hy;
      TA({
        target: "Promise",
        stat: true,
        forced: Tx
      }, {
        all: function(g2) {
          var t2 = this, A2 = Rx.f(t2), e2 = A2.resolve, C2 = A2.reject, I2 = Px(function() {
            var A3 = Nx(t2.resolve), I3 = [], i2 = 0, o2 = 1;
            Mx(g2, function(g3) {
              var n2 = i2++, r2 = false;
              o2++, Dx(A3, t2, g3).then(function(g4) {
                r2 || (r2 = true, I3[n2] = g4, --o2 || e2(I3));
              }, C2);
            }), --o2 || e2(I3);
          });
          return I2.error && C2(I2.value), A2.promise;
        }
      });
      var Bx = TA, zx = Tk.CONSTRUCTOR;
      ak && ak.prototype, Bx({
        target: "Promise",
        proto: true,
        forced: zx,
        real: true
      }, {
        catch: function(g2) {
          return this.then(void 0, g2);
        }
      });
      var Sx = P, Zx = Rg, Fx = Dk, Gx = sk, jx = Hy;
      TA({
        target: "Promise",
        stat: true,
        forced: Tx
      }, {
        race: function(g2) {
          var t2 = this, A2 = Fx.f(t2), e2 = A2.reject, C2 = Gx(function() {
            var C3 = Zx(t2.resolve);
            jx(g2, function(g3) {
              Sx(C3, t2, g3).then(A2.resolve, e2);
            });
          });
          return C2.error && e2(C2.value), A2.promise;
        }
      });
      var Lx = P, Vx = Dk;
      TA({
        target: "Promise",
        stat: true,
        forced: Tk.CONSTRUCTOR
      }, {
        reject: function(g2) {
          var t2 = Vx.f(this);
          return Lx(t2.reject, void 0, g2), t2.promise;
        }
      });
      var Yx = AA, Wx = gg, Qx = Dk, Ux = function(g2, t2) {
        if (Yx(g2), Wx(t2) && t2.constructor === g2) return t2;
        var A2 = Qx.f(g2);
        return (0, A2.resolve)(t2), A2.promise;
      }, _x = TA, Kx = ak, Hx = Tk.CONSTRUCTOR, Xx = Ux, Jx = ig("Promise"), qx = !Hx;
      _x({
        target: "Promise",
        stat: true,
        forced: true
      }, {
        resolve: function(g2) {
          return Xx(qx && this === Jx ? Kx : this, g2);
        }
      });
      var $x = P, gE = Rg, tE = Dk, AE = sk, eE = Hy;
      TA({
        target: "Promise",
        stat: true,
        forced: Tx
      }, {
        allSettled: function(g2) {
          var t2 = this, A2 = tE.f(t2), e2 = A2.resolve, C2 = A2.reject, I2 = AE(function() {
            var A3 = gE(t2.resolve), C3 = [], I3 = 0, i2 = 1;
            eE(g2, function(g3) {
              var o2 = I3++, n2 = false;
              i2++, $x(A3, t2, g3).then(function(g4) {
                n2 || (n2 = true, C3[o2] = {
                  status: "fulfilled",
                  value: g4
                }, --i2 || e2(C3));
              }, function(g4) {
                n2 || (n2 = true, C3[o2] = {
                  status: "rejected",
                  reason: g4
                }, --i2 || e2(C3));
              });
            }), --i2 || e2(C3);
          });
          return I2.error && C2(I2.value), A2.promise;
        }
      });
      var CE = P, IE = Rg, iE = ig, oE = Dk, nE = sk, rE = Hy, sE = "No one promise resolved";
      TA({
        target: "Promise",
        stat: true,
        forced: Tx
      }, {
        any: function(g2) {
          var t2 = this, A2 = iE("AggregateError"), e2 = oE.f(t2), C2 = e2.resolve, I2 = e2.reject, i2 = nE(function() {
            var e3 = IE(t2.resolve), i3 = [], o2 = 0, n2 = 1, r2 = false;
            rE(g2, function(g3) {
              var s2 = o2++, a2 = false;
              n2++, CE(e3, t2, g3).then(function(g4) {
                a2 || r2 || (r2 = true, C2(g4));
              }, function(g4) {
                a2 || r2 || (a2 = true, i3[s2] = g4, --n2 || I2(new A2(i3, sE)));
              });
            }), --n2 || I2(new A2(i3, sE));
          });
          return i2.error && I2(i2.value), e2.promise;
        }
      });
      var aE = TA, dE = ak, hE = I, lE = ig, cE = O, uE = nw, pE = Ux, fE = dE && dE.prototype;
      aE({
        target: "Promise",
        proto: true,
        real: true,
        forced: !!dE && hE(function() {
          fE.finally.call({
            then: function() {
            }
          }, function() {
          });
        })
      }, {
        finally: function(g2) {
          var t2 = uE(this, lE("Promise")), A2 = cE(g2);
          return this.then(A2 ? function(A3) {
            return pE(t2, g2()).then(function() {
              return A3;
            });
          } : g2, A2 ? function(A3) {
            return pE(t2, g2()).then(function() {
              throw A3;
            });
          } : g2);
        }
      });
      var vE = tg.Promise, yE = Dk;
      TA({
        target: "Promise",
        stat: true
      }, {
        withResolvers: function() {
          var g2 = yE.f(this);
          return {
            promise: g2.promise,
            resolve: g2.resolve,
            reject: g2.reject
          };
        }
      });
      var mE = vE, bE = Dk, wE = sk;
      TA({
        target: "Promise",
        stat: true,
        forced: true
      }, {
        try: function(g2) {
          var t2 = bE.f(this), A2 = wE(g2);
          return (A2.error ? t2.reject : t2.resolve)(A2.value), t2.promise;
        }
      });
      var kE = mE, xE = ll;
      !function(g2) {
        var t2 = db.default, A2 = wn, e2 = cd, C2 = qm, I2 = ib, i2 = hb, o2 = Ld, n2 = gb, r2 = kE, s2 = xE, a2 = rh;
        function d2() {
          g2.exports = d2 = function() {
            return l2;
          }, g2.exports.__esModule = true, g2.exports.default = g2.exports;
          var h2, l2 = {}, c2 = Object.prototype, u2 = c2.hasOwnProperty, p2 = A2 || function(g3, t3, A3) {
            g3[t3] = A3.value;
          }, f2 = "function" == typeof e2 ? e2 : {}, v2 = f2.iterator || "@@iterator", y2 = f2.asyncIterator || "@@asyncIterator", m2 = f2.toStringTag || "@@toStringTag";
          function b2(g3, t3, e3) {
            return A2(g3, t3, {
              value: e3,
              enumerable: true,
              configurable: true,
              writable: true
            }), g3[t3];
          }
          try {
            b2({}, "");
          } catch (h3) {
            b2 = function(g3, t3, A3) {
              return g3[t3] = A3;
            };
          }
          function w2(g3, t3, A3, e3) {
            var I3 = t3 && t3.prototype instanceof N2 ? t3 : N2, i3 = C2(I3.prototype), o3 = new V2(e3 || []);
            return p2(i3, "_invoke", {
              value: F2(g3, A3, o3)
            }), i3;
          }
          function k2(g3, t3, A3) {
            try {
              return {
                type: "normal",
                arg: g3.call(t3, A3)
              };
            } catch (g4) {
              return {
                type: "throw",
                arg: g4
              };
            }
          }
          l2.wrap = w2;
          var x2 = "suspendedStart", E2 = "suspendedYield", O2 = "executing", T2 = "completed", D2 = {};
          function N2() {
          }
          function R2() {
          }
          function P2() {
          }
          var M2 = {};
          b2(M2, v2, function() {
            return this;
          });
          var B2 = I2 && I2(I2(Y2([])));
          B2 && B2 !== c2 && u2.call(B2, v2) && (M2 = B2);
          var z2 = P2.prototype = N2.prototype = C2(M2);
          function S2(g3) {
            var t3;
            i2(t3 = ["next", "throw", "return"]).call(t3, function(t4) {
              b2(g3, t4, function(g4) {
                return this._invoke(t4, g4);
              });
            });
          }
          function Z2(g3, A3) {
            function e3(C4, I3, i3, o3) {
              var n3 = k2(g3[C4], g3, I3);
              if ("throw" !== n3.type) {
                var r3 = n3.arg, s3 = r3.value;
                return s3 && "object" == t2(s3) && u2.call(s3, "__await") ? A3.resolve(s3.__await).then(function(g4) {
                  e3("next", g4, i3, o3);
                }, function(g4) {
                  e3("throw", g4, i3, o3);
                }) : A3.resolve(s3).then(function(g4) {
                  r3.value = g4, i3(r3);
                }, function(g4) {
                  return e3("throw", g4, i3, o3);
                });
              }
              o3(n3.arg);
            }
            var C3;
            p2(this, "_invoke", {
              value: function(g4, t3) {
                function I3() {
                  return new A3(function(A4, C4) {
                    e3(g4, t3, A4, C4);
                  });
                }
                return C3 = C3 ? C3.then(I3, I3) : I3();
              }
            });
          }
          function F2(g3, t3, A3) {
            var e3 = x2;
            return function(C3, I3) {
              if (e3 === O2) throw new Error("Generator is already running");
              if (e3 === T2) {
                if ("throw" === C3) throw I3;
                return {
                  value: h2,
                  done: true
                };
              }
              for (A3.method = C3, A3.arg = I3; ; ) {
                var i3 = A3.delegate;
                if (i3) {
                  var o3 = G2(i3, A3);
                  if (o3) {
                    if (o3 === D2) continue;
                    return o3;
                  }
                }
                if ("next" === A3.method) A3.sent = A3._sent = A3.arg;
                else if ("throw" === A3.method) {
                  if (e3 === x2) throw e3 = T2, A3.arg;
                  A3.dispatchException(A3.arg);
                } else "return" === A3.method && A3.abrupt("return", A3.arg);
                e3 = O2;
                var n3 = k2(g3, t3, A3);
                if ("normal" === n3.type) {
                  if (e3 = A3.done ? T2 : E2, n3.arg === D2) continue;
                  return {
                    value: n3.arg,
                    done: A3.done
                  };
                }
                "throw" === n3.type && (e3 = T2, A3.method = "throw", A3.arg = n3.arg);
              }
            };
          }
          function G2(g3, t3) {
            var A3 = t3.method, e3 = g3.iterator[A3];
            if (e3 === h2) return t3.delegate = null, "throw" === A3 && g3.iterator.return && (t3.method = "return", t3.arg = h2, G2(g3, t3), "throw" === t3.method) || "return" !== A3 && (t3.method = "throw", t3.arg = new TypeError("The iterator does not provide a '" + A3 + "' method")), D2;
            var C3 = k2(e3, g3.iterator, t3.arg);
            if ("throw" === C3.type) return t3.method = "throw", t3.arg = C3.arg, t3.delegate = null, D2;
            var I3 = C3.arg;
            return I3 ? I3.done ? (t3[g3.resultName] = I3.value, t3.next = g3.nextLoc, "return" !== t3.method && (t3.method = "next", t3.arg = h2), t3.delegate = null, D2) : I3 : (t3.method = "throw", t3.arg = new TypeError("iterator result is not an object"), t3.delegate = null, D2);
          }
          function j2(g3) {
            var t3, A3 = {
              tryLoc: g3[0]
            };
            1 in g3 && (A3.catchLoc = g3[1]), 2 in g3 && (A3.finallyLoc = g3[2], A3.afterLoc = g3[3]), o2(t3 = this.tryEntries).call(t3, A3);
          }
          function L2(g3) {
            var t3 = g3.completion || {};
            t3.type = "normal", delete t3.arg, g3.completion = t3;
          }
          function V2(g3) {
            this.tryEntries = [{
              tryLoc: "root"
            }], i2(g3).call(g3, j2, this), this.reset(true);
          }
          function Y2(g3) {
            if (g3 || "" === g3) {
              var A3 = g3[v2];
              if (A3) return A3.call(g3);
              if ("function" == typeof g3.next) return g3;
              if (!isNaN(g3.length)) {
                var e3 = -1, C3 = function t3() {
                  for (; ++e3 < g3.length; ) if (u2.call(g3, e3)) return t3.value = g3[e3], t3.done = false, t3;
                  return t3.value = h2, t3.done = true, t3;
                };
                return C3.next = C3;
              }
            }
            throw new TypeError(t2(g3) + " is not iterable");
          }
          return R2.prototype = P2, p2(z2, "constructor", {
            value: P2,
            configurable: true
          }), p2(P2, "constructor", {
            value: R2,
            configurable: true
          }), R2.displayName = b2(P2, m2, "GeneratorFunction"), l2.isGeneratorFunction = function(g3) {
            var t3 = "function" == typeof g3 && g3.constructor;
            return !!t3 && (t3 === R2 || "GeneratorFunction" === (t3.displayName || t3.name));
          }, l2.mark = function(g3) {
            return n2 ? n2(g3, P2) : (g3.__proto__ = P2, b2(g3, m2, "GeneratorFunction")), g3.prototype = C2(z2), g3;
          }, l2.awrap = function(g3) {
            return {
              __await: g3
            };
          }, S2(Z2.prototype), b2(Z2.prototype, y2, function() {
            return this;
          }), l2.AsyncIterator = Z2, l2.async = function(g3, t3, A3, e3, C3) {
            void 0 === C3 && (C3 = r2);
            var I3 = new Z2(w2(g3, t3, A3, e3), C3);
            return l2.isGeneratorFunction(t3) ? I3 : I3.next().then(function(g4) {
              return g4.done ? g4.value : I3.next();
            });
          }, S2(z2), b2(z2, m2, "Generator"), b2(z2, v2, function() {
            return this;
          }), b2(z2, "toString", function() {
            return "[object Generator]";
          }), l2.keys = function(g3) {
            var t3 = Object(g3), A3 = [];
            for (var e3 in t3) o2(A3).call(A3, e3);
            return s2(A3).call(A3), function g4() {
              for (; A3.length; ) {
                var e4 = A3.pop();
                if (e4 in t3) return g4.value = e4, g4.done = false, g4;
              }
              return g4.done = true, g4;
            };
          }, l2.values = Y2, V2.prototype = {
            constructor: V2,
            reset: function(g3) {
              var t3;
              if (this.prev = 0, this.next = 0, this.sent = this._sent = h2, this.done = false, this.delegate = null, this.method = "next", this.arg = h2, i2(t3 = this.tryEntries).call(t3, L2), !g3) for (var A3 in this) "t" === A3.charAt(0) && u2.call(this, A3) && !isNaN(+a2(A3).call(A3, 1)) && (this[A3] = h2);
            },
            stop: function() {
              this.done = true;
              var g3 = this.tryEntries[0].completion;
              if ("throw" === g3.type) throw g3.arg;
              return this.rval;
            },
            dispatchException: function(g3) {
              if (this.done) throw g3;
              var t3 = this;
              function A3(A4, e4) {
                return I3.type = "throw", I3.arg = g3, t3.next = A4, e4 && (t3.method = "next", t3.arg = h2), !!e4;
              }
              for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
                var C3 = this.tryEntries[e3], I3 = C3.completion;
                if ("root" === C3.tryLoc) return A3("end");
                if (C3.tryLoc <= this.prev) {
                  var i3 = u2.call(C3, "catchLoc"), o3 = u2.call(C3, "finallyLoc");
                  if (i3 && o3) {
                    if (this.prev < C3.catchLoc) return A3(C3.catchLoc, true);
                    if (this.prev < C3.finallyLoc) return A3(C3.finallyLoc);
                  } else if (i3) {
                    if (this.prev < C3.catchLoc) return A3(C3.catchLoc, true);
                  } else {
                    if (!o3) throw new Error("try statement without catch or finally");
                    if (this.prev < C3.finallyLoc) return A3(C3.finallyLoc);
                  }
                }
              }
            },
            abrupt: function(g3, t3) {
              for (var A3 = this.tryEntries.length - 1; A3 >= 0; --A3) {
                var e3 = this.tryEntries[A3];
                if (e3.tryLoc <= this.prev && u2.call(e3, "finallyLoc") && this.prev < e3.finallyLoc) {
                  var C3 = e3;
                  break;
                }
              }
              C3 && ("break" === g3 || "continue" === g3) && C3.tryLoc <= t3 && t3 <= C3.finallyLoc && (C3 = null);
              var I3 = C3 ? C3.completion : {};
              return I3.type = g3, I3.arg = t3, C3 ? (this.method = "next", this.next = C3.finallyLoc, D2) : this.complete(I3);
            },
            complete: function(g3, t3) {
              if ("throw" === g3.type) throw g3.arg;
              return "break" === g3.type || "continue" === g3.type ? this.next = g3.arg : "return" === g3.type ? (this.rval = this.arg = g3.arg, this.method = "return", this.next = "end") : "normal" === g3.type && t3 && (this.next = t3), D2;
            },
            finish: function(g3) {
              for (var t3 = this.tryEntries.length - 1; t3 >= 0; --t3) {
                var A3 = this.tryEntries[t3];
                if (A3.finallyLoc === g3) return this.complete(A3.completion, A3.afterLoc), L2(A3), D2;
              }
            },
            catch: function(g3) {
              for (var t3 = this.tryEntries.length - 1; t3 >= 0; --t3) {
                var A3 = this.tryEntries[t3];
                if (A3.tryLoc === g3) {
                  var e3 = A3.completion;
                  if ("throw" === e3.type) {
                    var C3 = e3.arg;
                    L2(A3);
                  }
                  return C3;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function(g3, t3, A3) {
              return this.delegate = {
                iterator: Y2(g3),
                resultName: t3,
                nextLoc: A3
              }, "next" === this.method && (this.arg = h2), D2;
            }
          }, l2;
        }
        g2.exports = d2, g2.exports.__esModule = true, g2.exports.default = g2.exports;
      }(sb);
      var EE = (0, sb.exports)(), OE = EE;
      try {
        regeneratorRuntime = EE;
      } catch (g2) {
        "object" == typeof globalThis ? globalThis.regeneratorRuntime = EE : Function("r", "regeneratorRuntime = r")(EE);
      }
      var TE = A(OE), DE = Rg, NE = Hg, RE = W, PE = jA, ME = TypeError, BE = function(g2) {
        return function(t2, A2, e2, C2) {
          DE(A2);
          var I2 = NE(t2), i2 = RE(I2), o2 = PE(I2), n2 = g2 ? o2 - 1 : 0, r2 = g2 ? -1 : 1;
          if (e2 < 2) for (; ; ) {
            if (n2 in i2) {
              C2 = i2[n2], n2 += r2;
              break;
            }
            if (n2 += r2, g2 ? n2 < 0 : o2 <= n2) throw new ME("Reduce of empty array with no initial value");
          }
          for (; g2 ? n2 >= 0 : o2 > n2; n2 += r2) n2 in i2 && (C2 = A2(C2, i2[n2], n2, I2));
          return C2;
        };
      }, zE = {
        left: BE(false),
        right: BE(true)
      }.left;
      TA({
        target: "Array",
        proto: true,
        forced: !$b && cg > 79 && cg < 83 || !_h("reduce")
      }, {
        reduce: function(g2) {
          var t2 = arguments.length;
          return zE(this, g2, t2, t2 > 1 ? arguments[1] : void 0);
        }
      });
      var SE = Me("Array").reduce, ZE = og, FE = SE, GE = Array.prototype, jE = function(g2) {
        var t2 = g2.reduce;
        return g2 === GE || ZE(GE, g2) && t2 === GE.reduce ? FE : t2;
      }, LE = A(jE), VE = En, YE = jA, WE = Tn, QE = Xt, UE = function(g2, t2, A2, e2, C2, I2, i2, o2) {
        for (var n2, r2, s2 = C2, a2 = 0, d2 = !!i2 && QE(i2, o2); a2 < e2; ) a2 in A2 && (n2 = d2 ? d2(A2[a2], a2, t2) : A2[a2], I2 > 0 && VE(n2) ? (r2 = YE(n2), s2 = UE(g2, t2, n2, r2, s2, I2 - 1) - 1) : (WE(s2 + 1), g2[s2] = n2), s2++), a2++;
        return s2;
      }, _E = UE, KE = Rg, HE = Hg, XE = jA, JE = zn;
      TA({
        target: "Array",
        proto: true
      }, {
        flatMap: function(g2) {
          var t2, A2 = HE(this), e2 = XE(A2);
          return KE(g2), (t2 = JE(A2, 0)).length = _E(t2, A2, A2, e2, 0, 1, g2, arguments.length > 1 ? arguments[1] : void 0), t2;
        }
      });
      var qE = Me("Array").flatMap, $E = og, gO = qE, tO = Array.prototype, AO = function(g2) {
        var t2 = g2.flatMap;
        return g2 === tO || $E(tO, g2) && t2 === tO.flatMap ? gO : t2;
      }, eO = A(AO);
      cm("Set", function(g2) {
        return function() {
          return g2(this, arguments.length ? arguments[0] : void 0);
        };
      }, Zm);
      var CO = A(tg.Set), IO = A(pd), iO = A(Oo), oO = rr, nO = Math.floor, rO = function(g2, t2) {
        var A2 = g2.length, e2 = nO(A2 / 2);
        return A2 < 8 ? sO(g2, t2) : aO(g2, rO(oO(g2, 0, e2), t2), rO(oO(g2, e2), t2), t2);
      }, sO = function(g2, t2) {
        for (var A2, e2, C2 = g2.length, I2 = 1; I2 < C2; ) {
          for (e2 = I2, A2 = g2[I2]; e2 && t2(g2[e2 - 1], A2) > 0; ) g2[e2] = g2[--e2];
          e2 !== I2++ && (g2[e2] = A2);
        }
        return g2;
      }, aO = function(g2, t2, A2, e2) {
        for (var C2 = t2.length, I2 = A2.length, i2 = 0, o2 = 0; i2 < C2 || o2 < I2; ) g2[i2 + o2] = i2 < C2 && o2 < I2 ? e2(t2[i2], A2[o2]) <= 0 ? t2[i2++] : A2[o2++] : i2 < C2 ? t2[i2++] : A2[o2++];
        return g2;
      }, dO = rO, hO = ng.match(/firefox\/(\d+)/i), lO = !!hO && +hO[1], cO = /MSIE|Trident/.test(ng), uO = ng.match(/AppleWebKit\/(\d+)\./), pO = !!uO && +uO[1], fO = TA, vO = u, yO = Rg, mO = Hg, bO = jA, wO = fl, kO = sC, xO = I, EO = dO, OO = _h, TO = lO, DO = cO, NO = cg, RO = pO, PO = [], MO = vO(PO.sort), BO = vO(PO.push), zO = xO(function() {
        PO.sort(void 0);
      }), SO = xO(function() {
        PO.sort(null);
      }), ZO = OO("sort"), FO = !xO(function() {
        if (NO) return NO < 70;
        if (!(TO && TO > 3)) {
          if (DO) return true;
          if (RO) return RO < 603;
          var g2, t2, A2, e2, C2 = "";
          for (g2 = 65; g2 < 76; g2++) {
            switch (t2 = String.fromCharCode(g2), g2) {
              case 66:
              case 69:
              case 70:
              case 72:
                A2 = 3;
                break;
              case 68:
              case 71:
                A2 = 4;
                break;
              default:
                A2 = 2;
            }
            for (e2 = 0; e2 < 47; e2++) PO.push({
              k: t2 + e2,
              v: A2
            });
          }
          for (PO.sort(function(g3, t3) {
            return t3.v - g3.v;
          }), e2 = 0; e2 < PO.length; e2++) t2 = PO[e2].k.charAt(0), C2.charAt(C2.length - 1) !== t2 && (C2 += t2);
          return "DGBEFHACIJK" !== C2;
        }
      });
      fO({
        target: "Array",
        proto: true,
        forced: zO || !SO || !ZO || !FO
      }, {
        sort: function(g2) {
          void 0 !== g2 && yO(g2);
          var t2 = mO(this);
          if (FO) return void 0 === g2 ? MO(t2) : MO(t2, g2);
          var A2, e2, C2 = [], I2 = bO(t2);
          for (e2 = 0; e2 < I2; e2++) e2 in t2 && BO(C2, t2[e2]);
          for (EO(C2, /* @__PURE__ */ function(g3) {
            return function(t3, A3) {
              return void 0 === A3 ? -1 : void 0 === t3 ? 1 : void 0 !== g3 ? +g3(t3, A3) || 0 : kO(t3) > kO(A3) ? 1 : -1;
            };
          }(g2)), A2 = bO(C2), e2 = 0; e2 < A2; ) t2[e2] = C2[e2++];
          for (; e2 < I2; ) wO(t2, e2++);
          return t2;
        }
      });
      var GO = Me("Array").sort, jO = og, LO = GO, VO = Array.prototype, YO = function(g2) {
        var t2 = g2.sort;
        return g2 === VO || jO(VO, g2) && t2 === VO.sort ? LO : t2;
      }, WO = A(YO), QO = Me("Array").keys, UO = oC, _O = qg, KO = og, HO = QO, XO = Array.prototype, JO = {
        DOMTokenList: true,
        NodeList: true
      }, qO = function(g2) {
        var t2 = g2.keys;
        return g2 === XO || KO(XO, g2) && t2 === XO.keys || _O(JO, UO(g2)) ? HO : t2;
      }, $O = A(qO), gT = Me("Array").values, tT = oC, AT = qg, eT = og, CT = gT, IT = Array.prototype, iT = {
        DOMTokenList: true,
        NodeList: true
      }, oT = function(g2) {
        var t2 = g2.values;
        return g2 === IT || eT(IT, g2) && t2 === IT.values || AT(iT, tT(g2)) ? CT : t2;
      }, nT = A(oT), rT = Me("Array").entries, sT = oC, aT = qg, dT = og, hT = rT, lT = Array.prototype, cT = {
        DOMTokenList: true,
        NodeList: true
      }, uT = function(g2) {
        var t2 = g2.entries;
        return g2 === lT || dT(lT, g2) && t2 === lT.entries || aT(cT, sT(g2)) ? hT : t2;
      }, pT = A(uT), fT = A(bn), vT = TA, yT = a, mT = Ne, bT = ew, wT = AA, kT = gg, xT = pI, ET = I, OT = ig("Reflect", "construct"), TT = Object.prototype, DT = [].push, NT = ET(function() {
        function g2() {
        }
        return !(OT(function() {
        }, [], g2) instanceof g2);
      }), RT = !ET(function() {
        OT(function() {
        });
      }), PT = NT || RT;
      vT({
        target: "Reflect",
        stat: true,
        forced: PT,
        sham: PT
      }, {
        construct: function(g2, t2) {
          bT(g2), wT(t2);
          var A2 = arguments.length < 3 ? g2 : bT(arguments[2]);
          if (RT && !NT) return OT(g2, t2, A2);
          if (g2 === A2) {
            switch (t2.length) {
              case 0:
                return new g2();
              case 1:
                return new g2(t2[0]);
              case 2:
                return new g2(t2[0], t2[1]);
              case 3:
                return new g2(t2[0], t2[1], t2[2]);
              case 4:
                return new g2(t2[0], t2[1], t2[2], t2[3]);
            }
            var e2 = [null];
            return yT(DT, e2, t2), new (yT(mT, g2, e2))();
          }
          var C2 = A2.prototype, I2 = xT(kT(C2) ? C2 : TT), i2 = yT(g2, I2, t2);
          return kT(i2) ? i2 : I2;
        }
      });
      var MT = A(tg.Reflect.construct), BT = A(tg.Object.getOwnPropertySymbols), zT = {
        exports: {}
      }, ST = TA, ZT = I, FT = J, GT = T.f, jT = D;
      ST({
        target: "Object",
        stat: true,
        forced: !jT || ZT(function() {
          GT(1);
        }),
        sham: !jT
      }, {
        getOwnPropertyDescriptor: function(g2, t2) {
          return GT(FT(g2), t2);
        }
      });
      var LT = tg.Object, VT = zT.exports = function(g2, t2) {
        return LT.getOwnPropertyDescriptor(g2, t2);
      };
      LT.getOwnPropertyDescriptor.sham && (VT.sham = true);
      var YT = zT.exports, WT = A(YT), QT = Dh, UT = J, _T = T, KT = lo;
      TA({
        target: "Object",
        stat: true,
        sham: !D
      }, {
        getOwnPropertyDescriptors: function(g2) {
          for (var t2, A2, e2 = UT(g2), C2 = _T.f, I2 = QT(e2), i2 = {}, o2 = 0; I2.length > o2; ) void 0 !== (A2 = C2(e2, t2 = I2[o2++])) && KT(i2, t2, A2);
          return i2;
        }
      });
      var HT = A(tg.Object.getOwnPropertyDescriptors), XT = {
        exports: {}
      }, JT = TA, qT = D, $T = UC.f;
      JT({
        target: "Object",
        stat: true,
        forced: Object.defineProperties !== $T,
        sham: !qT
      }, {
        defineProperties: $T
      });
      var gD = tg.Object, tD = XT.exports = function(g2, t2) {
        return gD.defineProperties(g2, t2);
      };
      gD.defineProperties.sham && (tD.sham = true);
      var AD = A(XT.exports);
      let eD;
      const CD = new Uint8Array(16);
      function ID() {
        if (!eD && (eD = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !eD)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return eD(CD);
      }
      const iD = [];
      for (let g2 = 0; g2 < 256; ++g2) iD.push((g2 + 256).toString(16).slice(1));
      var oD, nD = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      function rD(g2, t2, A2) {
        if (nD.randomUUID && !t2 && !g2) return nD.randomUUID();
        const e2 = (g2 = g2 || {}).random || (g2.rng || ID)();
        if (e2[6] = 15 & e2[6] | 64, e2[8] = 63 & e2[8] | 128, t2) {
          A2 = A2 || 0;
          for (let g3 = 0; g3 < 16; ++g3) t2[A2 + g3] = e2[g3];
          return t2;
        }
        return function(g3, t3 = 0) {
          return iD[g3[t3 + 0]] + iD[g3[t3 + 1]] + iD[g3[t3 + 2]] + iD[g3[t3 + 3]] + "-" + iD[g3[t3 + 4]] + iD[g3[t3 + 5]] + "-" + iD[g3[t3 + 6]] + iD[g3[t3 + 7]] + "-" + iD[g3[t3 + 8]] + iD[g3[t3 + 9]] + "-" + iD[g3[t3 + 10]] + iD[g3[t3 + 11]] + iD[g3[t3 + 12]] + iD[g3[t3 + 13]] + iD[g3[t3 + 14]] + iD[g3[t3 + 15]];
        }(e2);
      }
      function sD(g2, t2) {
        var A2 = Lh(g2);
        if (BT) {
          var e2 = BT(g2);
          t2 && (e2 = pc(e2).call(e2, function(t3) {
            return WT(g2, t3).enumerable;
          })), A2.push.apply(A2, e2);
        }
        return A2;
      }
      function aD(g2) {
        for (var t2 = 1; t2 < arguments.length; t2++) {
          var A2, e2, C2 = null != arguments[t2] ? arguments[t2] : {};
          t2 % 2 ? Cl(A2 = sD(Object(C2), true)).call(A2, function(t3) {
            rb(g2, t3, C2[t3]);
          }) : HT ? AD(g2, HT(C2)) : Cl(e2 = sD(Object(C2))).call(e2, function(t3) {
            fT(g2, t3, WT(C2, t3));
          });
        }
        return g2;
      }
      function dD(g2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !MT) return false;
          if (MT.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(MT(Boolean, [], function() {
            })), true;
          } catch (g3) {
            return false;
          }
        }();
        return function() {
          var A2, e2 = nb(g2);
          if (t2) {
            var C2 = nb(this).constructor;
            A2 = MT(e2, arguments, C2);
          } else A2 = e2.apply(this, arguments);
          return Ib(this, A2);
        };
      }
      function hD(g2, t2) {
        var A2 = void 0 !== uh && ln(g2) || g2["@@iterator"];
        if (!A2) {
          if (Rh(g2) || (A2 = function(g3, t3) {
            var A3;
            if (!g3) return;
            if ("string" == typeof g3) return lD(g3, t3);
            var e3 = wh(A3 = Object.prototype.toString.call(g3)).call(A3, 8, -1);
            "Object" === e3 && g3.constructor && (e3 = g3.constructor.name);
            if ("Map" === e3 || "Set" === e3) return Uo(g3);
            if ("Arguments" === e3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e3)) return lD(g3, t3);
          }(g2)) || t2 && g2 && "number" == typeof g2.length) {
            A2 && (g2 = A2);
            var e2 = 0, C2 = function() {
            };
            return {
              s: C2,
              n: function() {
                return e2 >= g2.length ? {
                  done: true
                } : {
                  done: false,
                  value: g2[e2++]
                };
              },
              e: function(g3) {
                throw g3;
              },
              f: C2
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var I2, i2 = true, o2 = false;
        return {
          s: function() {
            A2 = A2.call(g2);
          },
          n: function() {
            var g3 = A2.next();
            return i2 = g3.done, g3;
          },
          e: function(g3) {
            o2 = true, I2 = g3;
          },
          f: function() {
            try {
              i2 || null == A2.return || A2.return();
            } finally {
              if (o2) throw I2;
            }
          }
        };
      }
      function lD(g2, t2) {
        (null == t2 || t2 > g2.length) && (t2 = g2.length);
        for (var A2 = 0, e2 = new Array(t2); A2 < t2; A2++) e2[A2] = g2[A2];
        return e2;
      }
      var cD = function() {
        function g2(t2, A2, e2) {
          var C2, I2, i2;
          cn(this, g2), rb(this, "_source", void 0), rb(this, "_transformers", void 0), rb(this, "_target", void 0), rb(this, "_listeners", {
            add: je(C2 = this._add).call(C2, this),
            remove: je(I2 = this._remove).call(I2, this),
            update: je(i2 = this._update).call(i2, this)
          }), this._source = t2, this._transformers = A2, this._target = e2;
        }
        return kd(g2, [{
          key: "all",
          value: function() {
            return this._target.update(this._transformItems(this._source.get())), this;
          }
        }, {
          key: "start",
          value: function() {
            return this._source.on("add", this._listeners.add), this._source.on("remove", this._listeners.remove), this._source.on("update", this._listeners.update), this;
          }
        }, {
          key: "stop",
          value: function() {
            return this._source.off("add", this._listeners.add), this._source.off("remove", this._listeners.remove), this._source.off("update", this._listeners.update), this;
          }
        }, {
          key: "_transformItems",
          value: function(g3) {
            var t2;
            return LE(t2 = this._transformers).call(t2, function(g4, t3) {
              return t3(g4);
            }, g3);
          }
        }, {
          key: "_add",
          value: function(g3, t2) {
            null != t2 && this._target.add(this._transformItems(this._source.get(t2.items)));
          }
        }, {
          key: "_update",
          value: function(g3, t2) {
            null != t2 && this._target.update(this._transformItems(this._source.get(t2.items)));
          }
        }, {
          key: "_remove",
          value: function(g3, t2) {
            null != t2 && this._target.remove(this._transformItems(t2.oldData));
          }
        }]), g2;
      }(), uD = function() {
        function g2(t2) {
          cn(this, g2), rb(this, "_source", void 0), rb(this, "_transformers", []), this._source = t2;
        }
        return kd(g2, [{
          key: "filter",
          value: function(g3) {
            return this._transformers.push(function(t2) {
              return pc(t2).call(t2, g3);
            }), this;
          }
        }, {
          key: "map",
          value: function(g3) {
            return this._transformers.push(function(t2) {
              return Fh(t2).call(t2, g3);
            }), this;
          }
        }, {
          key: "flatMap",
          value: function(g3) {
            return this._transformers.push(function(t2) {
              return eO(t2).call(t2, g3);
            }), this;
          }
        }, {
          key: "to",
          value: function(g3) {
            return new cD(this._source, this._transformers, g3);
          }
        }]), g2;
      }();
      function pD(g2) {
        return "string" == typeof g2 || "number" == typeof g2;
      }
      var fD = function() {
        function g2(t2) {
          cn(this, g2), rb(this, "delay", void 0), rb(this, "max", void 0), rb(this, "_queue", []), rb(this, "_timeout", null), rb(this, "_extended", null), this.delay = null, this.max = 1 / 0, this.setOptions(t2);
        }
        return kd(g2, [{
          key: "setOptions",
          value: function(g3) {
            g3 && void 0 !== g3.delay && (this.delay = g3.delay), g3 && void 0 !== g3.max && (this.max = g3.max), this._flushIfNeeded();
          }
        }, {
          key: "destroy",
          value: function() {
            if (this.flush(), this._extended) {
              for (var g3 = this._extended.object, t2 = this._extended.methods, A2 = 0; A2 < t2.length; A2++) {
                var e2 = t2[A2];
                e2.original ? g3[e2.name] = e2.original : delete g3[e2.name];
              }
              this._extended = null;
            }
          }
        }, {
          key: "replace",
          value: function(g3, t2) {
            var A2 = this, e2 = g3[t2];
            if (!e2) throw new Error("Method " + t2 + " undefined");
            g3[t2] = function() {
              for (var g4 = arguments.length, t3 = new Array(g4), C2 = 0; C2 < g4; C2++) t3[C2] = arguments[C2];
              A2.queue({
                args: t3,
                fn: e2,
                context: this
              });
            };
          }
        }, {
          key: "queue",
          value: function(g3) {
            "function" == typeof g3 ? this._queue.push({
              fn: g3
            }) : this._queue.push(g3), this._flushIfNeeded();
          }
        }, {
          key: "_flushIfNeeded",
          value: function() {
            var g3 = this;
            this._queue.length > this.max && this.flush(), null != this._timeout && (clearTimeout(this._timeout), this._timeout = null), this.queue.length > 0 && "number" == typeof this.delay && (this._timeout = wu(function() {
              g3.flush();
            }, this.delay));
          }
        }, {
          key: "flush",
          value: function() {
            var g3, t2;
            Cl(g3 = Zl(t2 = this._queue).call(t2, 0)).call(g3, function(g4) {
              g4.fn.apply(g4.context || g4.fn, g4.args || []);
            });
          }
        }], [{
          key: "extend",
          value: function(t2, A2) {
            var e2 = new g2(A2);
            if (void 0 !== t2.flush) throw new Error("Target object already has a property flush");
            t2.flush = function() {
              e2.flush();
            };
            var C2 = [{
              name: "flush",
              original: void 0
            }];
            if (A2 && A2.replace) for (var I2 = 0; I2 < A2.replace.length; I2++) {
              var i2 = A2.replace[I2];
              C2.push({
                name: i2,
                original: t2[i2]
              }), e2.replace(t2, i2);
            }
            return e2._extended = {
              object: t2,
              methods: C2
            }, e2;
          }
        }]), g2;
      }(), vD = function() {
        function g2() {
          cn(this, g2), rb(this, "_subscribers", {
            "*": [],
            add: [],
            remove: [],
            update: []
          }), rb(this, "subscribe", g2.prototype.on), rb(this, "unsubscribe", g2.prototype.off);
        }
        return kd(g2, [{
          key: "_trigger",
          value: function(g3, t2, A2) {
            var e2, C2;
            if ("*" === g3) throw new Error("Cannot trigger event *");
            Cl(e2 = bh(C2 = []).call(C2, ch(this._subscribers[g3]), ch(this._subscribers["*"]))).call(e2, function(e3) {
              e3(g3, t2, null != A2 ? A2 : null);
            });
          }
        }, {
          key: "on",
          value: function(g3, t2) {
            "function" == typeof t2 && this._subscribers[g3].push(t2);
          }
        }, {
          key: "off",
          value: function(g3, t2) {
            var A2;
            this._subscribers[g3] = pc(A2 = this._subscribers[g3]).call(A2, function(g4) {
              return g4 !== t2;
            });
          }
        }]), g2;
      }();
      oD = IO;
      var yD = function() {
        function g2(t2) {
          cn(this, g2), rb(this, "_pairs", void 0), this._pairs = t2;
        }
        return kd(g2, [{
          key: oD,
          value: TE.mark(function g3() {
            var t2, A2, e2, C2, I2;
            return TE.wrap(function(g4) {
              for (; ; ) switch (g4.prev = g4.next) {
                case 0:
                  t2 = hD(this._pairs), g4.prev = 1, t2.s();
                case 3:
                  if ((A2 = t2.n()).done) {
                    g4.next = 9;
                    break;
                  }
                  return e2 = lh(A2.value, 2), C2 = e2[0], I2 = e2[1], g4.next = 7, [C2, I2];
                case 7:
                  g4.next = 3;
                  break;
                case 9:
                  g4.next = 14;
                  break;
                case 11:
                  g4.prev = 11, g4.t0 = g4.catch(1), t2.e(g4.t0);
                case 14:
                  return g4.prev = 14, t2.f(), g4.finish(14);
                case 17:
                case "end":
                  return g4.stop();
              }
            }, g3, this, [[1, 11, 14, 17]]);
          })
        }, {
          key: "entries",
          value: TE.mark(function g3() {
            var t2, A2, e2, C2, I2;
            return TE.wrap(function(g4) {
              for (; ; ) switch (g4.prev = g4.next) {
                case 0:
                  t2 = hD(this._pairs), g4.prev = 1, t2.s();
                case 3:
                  if ((A2 = t2.n()).done) {
                    g4.next = 9;
                    break;
                  }
                  return e2 = lh(A2.value, 2), C2 = e2[0], I2 = e2[1], g4.next = 7, [C2, I2];
                case 7:
                  g4.next = 3;
                  break;
                case 9:
                  g4.next = 14;
                  break;
                case 11:
                  g4.prev = 11, g4.t0 = g4.catch(1), t2.e(g4.t0);
                case 14:
                  return g4.prev = 14, t2.f(), g4.finish(14);
                case 17:
                case "end":
                  return g4.stop();
              }
            }, g3, this, [[1, 11, 14, 17]]);
          })
        }, {
          key: "keys",
          value: TE.mark(function g3() {
            var t2, A2, e2, C2;
            return TE.wrap(function(g4) {
              for (; ; ) switch (g4.prev = g4.next) {
                case 0:
                  t2 = hD(this._pairs), g4.prev = 1, t2.s();
                case 3:
                  if ((A2 = t2.n()).done) {
                    g4.next = 9;
                    break;
                  }
                  return e2 = lh(A2.value, 1), C2 = e2[0], g4.next = 7, C2;
                case 7:
                  g4.next = 3;
                  break;
                case 9:
                  g4.next = 14;
                  break;
                case 11:
                  g4.prev = 11, g4.t0 = g4.catch(1), t2.e(g4.t0);
                case 14:
                  return g4.prev = 14, t2.f(), g4.finish(14);
                case 17:
                case "end":
                  return g4.stop();
              }
            }, g3, this, [[1, 11, 14, 17]]);
          })
        }, {
          key: "values",
          value: TE.mark(function g3() {
            var t2, A2, e2, C2;
            return TE.wrap(function(g4) {
              for (; ; ) switch (g4.prev = g4.next) {
                case 0:
                  t2 = hD(this._pairs), g4.prev = 1, t2.s();
                case 3:
                  if ((A2 = t2.n()).done) {
                    g4.next = 9;
                    break;
                  }
                  return e2 = lh(A2.value, 2), C2 = e2[1], g4.next = 7, C2;
                case 7:
                  g4.next = 3;
                  break;
                case 9:
                  g4.next = 14;
                  break;
                case 11:
                  g4.prev = 11, g4.t0 = g4.catch(1), t2.e(g4.t0);
                case 14:
                  return g4.prev = 14, t2.f(), g4.finish(14);
                case 17:
                case "end":
                  return g4.stop();
              }
            }, g3, this, [[1, 11, 14, 17]]);
          })
        }, {
          key: "toIdArray",
          value: function() {
            var g3;
            return Fh(g3 = ch(this._pairs)).call(g3, function(g4) {
              return g4[0];
            });
          }
        }, {
          key: "toItemArray",
          value: function() {
            var g3;
            return Fh(g3 = ch(this._pairs)).call(g3, function(g4) {
              return g4[1];
            });
          }
        }, {
          key: "toEntryArray",
          value: function() {
            return ch(this._pairs);
          }
        }, {
          key: "toObjectMap",
          value: function() {
            var g3, t2 = $c(null), A2 = hD(this._pairs);
            try {
              for (A2.s(); !(g3 = A2.n()).done; ) {
                var e2 = lh(g3.value, 2), C2 = e2[0], I2 = e2[1];
                t2[C2] = I2;
              }
            } catch (g4) {
              A2.e(g4);
            } finally {
              A2.f();
            }
            return t2;
          }
        }, {
          key: "toMap",
          value: function() {
            return new Fm(this._pairs);
          }
        }, {
          key: "toIdSet",
          value: function() {
            return new CO(this.toIdArray());
          }
        }, {
          key: "toItemSet",
          value: function() {
            return new CO(this.toItemArray());
          }
        }, {
          key: "cache",
          value: function() {
            return new g2(ch(this._pairs));
          }
        }, {
          key: "distinct",
          value: function(g3) {
            var t2, A2 = new CO(), e2 = hD(this._pairs);
            try {
              for (e2.s(); !(t2 = e2.n()).done; ) {
                var C2 = lh(t2.value, 2), I2 = C2[0], i2 = C2[1];
                A2.add(g3(i2, I2));
              }
            } catch (g4) {
              e2.e(g4);
            } finally {
              e2.f();
            }
            return A2;
          }
        }, {
          key: "filter",
          value: function(t2) {
            var A2 = this._pairs;
            return new g2(rb({}, IO, TE.mark(function g3() {
              var e2, C2, I2, i2, o2;
              return TE.wrap(function(g4) {
                for (; ; ) switch (g4.prev = g4.next) {
                  case 0:
                    e2 = hD(A2), g4.prev = 1, e2.s();
                  case 3:
                    if ((C2 = e2.n()).done) {
                      g4.next = 10;
                      break;
                    }
                    if (I2 = lh(C2.value, 2), i2 = I2[0], o2 = I2[1], !t2(o2, i2)) {
                      g4.next = 8;
                      break;
                    }
                    return g4.next = 8, [i2, o2];
                  case 8:
                    g4.next = 3;
                    break;
                  case 10:
                    g4.next = 15;
                    break;
                  case 12:
                    g4.prev = 12, g4.t0 = g4.catch(1), e2.e(g4.t0);
                  case 15:
                    return g4.prev = 15, e2.f(), g4.finish(15);
                  case 18:
                  case "end":
                    return g4.stop();
                }
              }, g3, null, [[1, 12, 15, 18]]);
            })));
          }
        }, {
          key: "forEach",
          value: function(g3) {
            var t2, A2 = hD(this._pairs);
            try {
              for (A2.s(); !(t2 = A2.n()).done; ) {
                var e2 = lh(t2.value, 2), C2 = e2[0];
                g3(e2[1], C2);
              }
            } catch (g4) {
              A2.e(g4);
            } finally {
              A2.f();
            }
          }
        }, {
          key: "map",
          value: function(t2) {
            var A2 = this._pairs;
            return new g2(rb({}, IO, TE.mark(function g3() {
              var e2, C2, I2, i2, o2;
              return TE.wrap(function(g4) {
                for (; ; ) switch (g4.prev = g4.next) {
                  case 0:
                    e2 = hD(A2), g4.prev = 1, e2.s();
                  case 3:
                    if ((C2 = e2.n()).done) {
                      g4.next = 9;
                      break;
                    }
                    return I2 = lh(C2.value, 2), i2 = I2[0], o2 = I2[1], g4.next = 7, [i2, t2(o2, i2)];
                  case 7:
                    g4.next = 3;
                    break;
                  case 9:
                    g4.next = 14;
                    break;
                  case 11:
                    g4.prev = 11, g4.t0 = g4.catch(1), e2.e(g4.t0);
                  case 14:
                    return g4.prev = 14, e2.f(), g4.finish(14);
                  case 17:
                  case "end":
                    return g4.stop();
                }
              }, g3, null, [[1, 11, 14, 17]]);
            })));
          }
        }, {
          key: "max",
          value: function(g3) {
            var t2 = iO(this._pairs), A2 = t2.next();
            if (A2.done) return null;
            for (var e2 = A2.value[1], C2 = g3(A2.value[1], A2.value[0]); !(A2 = t2.next()).done; ) {
              var I2 = lh(A2.value, 2), i2 = I2[0], o2 = I2[1], n2 = g3(o2, i2);
              n2 > C2 && (C2 = n2, e2 = o2);
            }
            return e2;
          }
        }, {
          key: "min",
          value: function(g3) {
            var t2 = iO(this._pairs), A2 = t2.next();
            if (A2.done) return null;
            for (var e2 = A2.value[1], C2 = g3(A2.value[1], A2.value[0]); !(A2 = t2.next()).done; ) {
              var I2 = lh(A2.value, 2), i2 = I2[0], o2 = I2[1], n2 = g3(o2, i2);
              n2 < C2 && (C2 = n2, e2 = o2);
            }
            return e2;
          }
        }, {
          key: "reduce",
          value: function(g3, t2) {
            var A2, e2 = hD(this._pairs);
            try {
              for (e2.s(); !(A2 = e2.n()).done; ) {
                var C2 = lh(A2.value, 2), I2 = C2[0];
                t2 = g3(t2, C2[1], I2);
              }
            } catch (g4) {
              e2.e(g4);
            } finally {
              e2.f();
            }
            return t2;
          }
        }, {
          key: "sort",
          value: function(t2) {
            var A2 = this;
            return new g2(rb({}, IO, function() {
              var g3;
              return iO(WO(g3 = ch(A2._pairs)).call(g3, function(g4, A3) {
                var e2 = lh(g4, 2), C2 = e2[0], I2 = e2[1], i2 = lh(A3, 2), o2 = i2[0], n2 = i2[1];
                return t2(I2, n2, C2, o2);
              }));
            }));
          }
        }]), g2;
      }();
      var mD = function(g2) {
        Cb(A2, g2);
        var t2 = dD(A2);
        function A2(g3, e2) {
          var C2;
          return cn(this, A2), rb(Jm(C2 = t2.call(this)), "flush", void 0), rb(Jm(C2), "length", void 0), rb(Jm(C2), "_options", void 0), rb(Jm(C2), "_data", void 0), rb(Jm(C2), "_idProp", void 0), rb(Jm(C2), "_queue", null), g3 && !Rh(g3) && (e2 = g3, g3 = []), C2._options = e2 || {}, C2._data = new Fm(), C2.length = 0, C2._idProp = C2._options.fieldId || "id", g3 && g3.length && C2.add(g3), C2.setOptions(e2), C2;
        }
        return kd(A2, [{
          key: "idProp",
          get: function() {
            return this._idProp;
          }
        }, {
          key: "setOptions",
          value: function(g3) {
            g3 && void 0 !== g3.queue && (false === g3.queue ? this._queue && (this._queue.destroy(), this._queue = null) : (this._queue || (this._queue = fD.extend(this, {
              replace: ["add", "update", "remove"]
            })), g3.queue && "object" === yd(g3.queue) && this._queue.setOptions(g3.queue)));
          }
        }, {
          key: "add",
          value: function(g3, t3) {
            var A3, e2 = this, C2 = [];
            if (Rh(g3)) {
              var I2 = Fh(g3).call(g3, function(g4) {
                return g4[e2._idProp];
              });
              if (Xm(I2).call(I2, function(g4) {
                return e2._data.has(g4);
              })) throw new Error("A duplicate id was found in the parameter array.");
              for (var i2 = 0, o2 = g3.length; i2 < o2; i2++) A3 = this._addItem(g3[i2]), C2.push(A3);
            } else {
              if (!g3 || "object" !== yd(g3)) throw new Error("Unknown dataType");
              A3 = this._addItem(g3), C2.push(A3);
            }
            return C2.length && this._trigger("add", {
              items: C2
            }, t3), C2;
          }
        }, {
          key: "update",
          value: function(g3, t3) {
            var A3 = this, e2 = [], C2 = [], I2 = [], i2 = [], o2 = this._idProp, n2 = function(g4) {
              var t4 = g4[o2];
              if (null != t4 && A3._data.has(t4)) {
                var n3 = g4, r3 = fe({}, A3._data.get(t4)), s3 = A3._updateItem(n3);
                C2.push(s3), i2.push(n3), I2.push(r3);
              } else {
                var a3 = A3._addItem(g4);
                e2.push(a3);
              }
            };
            if (Rh(g3)) for (var r2 = 0, s2 = g3.length; r2 < s2; r2++) g3[r2] && "object" === yd(g3[r2]) ? n2(g3[r2]) : console.warn("Ignoring input item, which is not an object at index " + r2);
            else {
              if (!g3 || "object" !== yd(g3)) throw new Error("Unknown dataType");
              n2(g3);
            }
            if (e2.length && this._trigger("add", {
              items: e2
            }, t3), C2.length) {
              var a2 = {
                items: C2,
                oldData: I2,
                data: i2
              };
              this._trigger("update", a2, t3);
            }
            return bh(e2).call(e2, C2);
          }
        }, {
          key: "updateOnly",
          value: function(g3, t3) {
            var A3, e2 = this;
            Rh(g3) || (g3 = [g3]);
            var C2 = Fh(A3 = Fh(g3).call(g3, function(g4) {
              var t4 = e2._data.get(g4[e2._idProp]);
              if (null == t4) throw new Error("Updating non-existent items is not allowed.");
              return {
                oldData: t4,
                update: g4
              };
            })).call(A3, function(g4) {
              var t4 = g4.oldData, A4 = g4.update, C3 = t4[e2._idProp], I3 = function(g5) {
                for (var t5, A5 = arguments.length, e3 = new Array(A5 > 1 ? A5 - 1 : 0), C4 = 1; C4 < A5; C4++) e3[C4 - 1] = arguments[C4];
                return Bf.apply(void 0, bh(t5 = [{}, g5]).call(t5, e3));
              }(t4, A4);
              return e2._data.set(C3, I3), {
                id: C3,
                oldData: t4,
                updatedData: I3
              };
            });
            if (C2.length) {
              var I2 = {
                items: Fh(C2).call(C2, function(g4) {
                  return g4.id;
                }),
                oldData: Fh(C2).call(C2, function(g4) {
                  return g4.oldData;
                }),
                data: Fh(C2).call(C2, function(g4) {
                  return g4.updatedData;
                })
              };
              return this._trigger("update", I2, t3), I2.items;
            }
            return [];
          }
        }, {
          key: "get",
          value: function(g3, t3) {
            var A3 = void 0, e2 = void 0, C2 = void 0;
            pD(g3) ? (A3 = g3, C2 = t3) : Rh(g3) ? (e2 = g3, C2 = t3) : C2 = g3;
            var I2, i2 = C2 && "Object" === C2.returnType ? "Object" : "Array", o2 = C2 && pc(C2), n2 = [], r2 = void 0, s2 = void 0, a2 = void 0;
            if (null != A3) (r2 = this._data.get(A3)) && o2 && !o2(r2) && (r2 = void 0);
            else if (null != e2) for (var d2 = 0, h2 = e2.length; d2 < h2; d2++) null == (r2 = this._data.get(e2[d2])) || o2 && !o2(r2) || n2.push(r2);
            else for (var l2, c2 = 0, u2 = (s2 = ch($O(l2 = this._data).call(l2))).length; c2 < u2; c2++) a2 = s2[c2], null == (r2 = this._data.get(a2)) || o2 && !o2(r2) || n2.push(r2);
            if (C2 && C2.order && null == A3 && this._sort(n2, C2.order), C2 && C2.fields) {
              var p2 = C2.fields;
              if (null != A3 && null != r2) r2 = this._filterFields(r2, p2);
              else for (var f2 = 0, v2 = n2.length; f2 < v2; f2++) n2[f2] = this._filterFields(n2[f2], p2);
            }
            if ("Object" == i2) {
              for (var y2 = {}, m2 = 0, b2 = n2.length; m2 < b2; m2++) {
                var w2 = n2[m2];
                y2[w2[this._idProp]] = w2;
              }
              return y2;
            }
            return null != A3 ? null !== (I2 = r2) && void 0 !== I2 ? I2 : null : n2;
          }
        }, {
          key: "getIds",
          value: function(g3) {
            var t3 = this._data, A3 = g3 && pc(g3), e2 = g3 && g3.order, C2 = ch($O(t3).call(t3)), I2 = [];
            if (A3) {
              if (e2) {
                for (var i2 = [], o2 = 0, n2 = C2.length; o2 < n2; o2++) {
                  var r2 = C2[o2], s2 = this._data.get(r2);
                  null != s2 && A3(s2) && i2.push(s2);
                }
                this._sort(i2, e2);
                for (var a2 = 0, d2 = i2.length; a2 < d2; a2++) I2.push(i2[a2][this._idProp]);
              } else for (var h2 = 0, l2 = C2.length; h2 < l2; h2++) {
                var c2 = C2[h2], u2 = this._data.get(c2);
                null != u2 && A3(u2) && I2.push(u2[this._idProp]);
              }
            } else if (e2) {
              for (var p2 = [], f2 = 0, v2 = C2.length; f2 < v2; f2++) {
                var y2 = C2[f2];
                p2.push(t3.get(y2));
              }
              this._sort(p2, e2);
              for (var m2 = 0, b2 = p2.length; m2 < b2; m2++) I2.push(p2[m2][this._idProp]);
            } else for (var w2 = 0, k2 = C2.length; w2 < k2; w2++) {
              var x2 = C2[w2], E2 = t3.get(x2);
              null != E2 && I2.push(E2[this._idProp]);
            }
            return I2;
          }
        }, {
          key: "getDataSet",
          value: function() {
            return this;
          }
        }, {
          key: "forEach",
          value: function(g3, t3) {
            var A3 = t3 && pc(t3), e2 = this._data, C2 = ch($O(e2).call(e2));
            if (t3 && t3.order) for (var I2 = this.get(t3), i2 = 0, o2 = I2.length; i2 < o2; i2++) {
              var n2 = I2[i2];
              g3(n2, n2[this._idProp]);
            }
            else for (var r2 = 0, s2 = C2.length; r2 < s2; r2++) {
              var a2 = C2[r2], d2 = this._data.get(a2);
              null == d2 || A3 && !A3(d2) || g3(d2, a2);
            }
          }
        }, {
          key: "map",
          value: function(g3, t3) {
            for (var A3 = t3 && pc(t3), e2 = [], C2 = this._data, I2 = ch($O(C2).call(C2)), i2 = 0, o2 = I2.length; i2 < o2; i2++) {
              var n2 = I2[i2], r2 = this._data.get(n2);
              null == r2 || A3 && !A3(r2) || e2.push(g3(r2, n2));
            }
            return t3 && t3.order && this._sort(e2, t3.order), e2;
          }
        }, {
          key: "_filterFields",
          value: function(g3, t3) {
            var A3;
            return g3 ? LE(A3 = Rh(t3) ? t3 : Lh(t3)).call(A3, function(t4, A4) {
              return t4[A4] = g3[A4], t4;
            }, {}) : g3;
          }
        }, {
          key: "_sort",
          value: function(g3, t3) {
            if ("string" == typeof t3) {
              var A3 = t3;
              WO(g3).call(g3, function(g4, t4) {
                var e2 = g4[A3], C2 = t4[A3];
                return e2 > C2 ? 1 : e2 < C2 ? -1 : 0;
              });
            } else {
              if ("function" != typeof t3) throw new TypeError("Order must be a function or a string");
              WO(g3).call(g3, t3);
            }
          }
        }, {
          key: "remove",
          value: function(g3, t3) {
            for (var A3 = [], e2 = [], C2 = Rh(g3) ? g3 : [g3], I2 = 0, i2 = C2.length; I2 < i2; I2++) {
              var o2 = this._remove(C2[I2]);
              if (o2) {
                var n2 = o2[this._idProp];
                null != n2 && (A3.push(n2), e2.push(o2));
              }
            }
            return A3.length && this._trigger("remove", {
              items: A3,
              oldData: e2
            }, t3), A3;
          }
        }, {
          key: "_remove",
          value: function(g3) {
            var t3;
            if (pD(g3) ? t3 = g3 : g3 && "object" === yd(g3) && (t3 = g3[this._idProp]), null != t3 && this._data.has(t3)) {
              var A3 = this._data.get(t3) || null;
              return this._data.delete(t3), --this.length, A3;
            }
            return null;
          }
        }, {
          key: "clear",
          value: function(g3) {
            for (var t3, A3 = ch($O(t3 = this._data).call(t3)), e2 = [], C2 = 0, I2 = A3.length; C2 < I2; C2++) e2.push(this._data.get(A3[C2]));
            return this._data.clear(), this.length = 0, this._trigger("remove", {
              items: A3,
              oldData: e2
            }, g3), A3;
          }
        }, {
          key: "max",
          value: function(g3) {
            var t3, A3, e2 = null, C2 = null, I2 = hD(nT(t3 = this._data).call(t3));
            try {
              for (I2.s(); !(A3 = I2.n()).done; ) {
                var i2 = A3.value, o2 = i2[g3];
                "number" == typeof o2 && (null == C2 || o2 > C2) && (e2 = i2, C2 = o2);
              }
            } catch (g4) {
              I2.e(g4);
            } finally {
              I2.f();
            }
            return e2 || null;
          }
        }, {
          key: "min",
          value: function(g3) {
            var t3, A3, e2 = null, C2 = null, I2 = hD(nT(t3 = this._data).call(t3));
            try {
              for (I2.s(); !(A3 = I2.n()).done; ) {
                var i2 = A3.value, o2 = i2[g3];
                "number" == typeof o2 && (null == C2 || o2 < C2) && (e2 = i2, C2 = o2);
              }
            } catch (g4) {
              I2.e(g4);
            } finally {
              I2.f();
            }
            return e2 || null;
          }
        }, {
          key: "distinct",
          value: function(g3) {
            for (var t3 = this._data, A3 = ch($O(t3).call(t3)), e2 = [], C2 = 0, I2 = 0, i2 = A3.length; I2 < i2; I2++) {
              for (var o2 = A3[I2], n2 = t3.get(o2)[g3], r2 = false, s2 = 0; s2 < C2; s2++) if (e2[s2] == n2) {
                r2 = true;
                break;
              }
              r2 || void 0 === n2 || (e2[C2] = n2, C2++);
            }
            return e2;
          }
        }, {
          key: "_addItem",
          value: function(g3) {
            var t3 = function(g4, t4) {
              return null == g4[t4] && (g4[t4] = rD()), g4;
            }(g3, this._idProp), A3 = t3[this._idProp];
            if (this._data.has(A3)) throw new Error("Cannot add item: item with id " + A3 + " already exists");
            return this._data.set(A3, t3), ++this.length, A3;
          }
        }, {
          key: "_updateItem",
          value: function(g3) {
            var t3 = g3[this._idProp];
            if (null == t3) throw new Error("Cannot update item: item has no id (item: " + eu(g3) + ")");
            var A3 = this._data.get(t3);
            if (!A3) throw new Error("Cannot update item: no item with id " + t3 + " found");
            return this._data.set(t3, aD(aD({}, A3), g3)), t3;
          }
        }, {
          key: "stream",
          value: function(g3) {
            if (g3) {
              var t3 = this._data;
              return new yD(rb({}, IO, TE.mark(function A4() {
                var e2, C2, I2, i2;
                return TE.wrap(function(A5) {
                  for (; ; ) switch (A5.prev = A5.next) {
                    case 0:
                      e2 = hD(g3), A5.prev = 1, e2.s();
                    case 3:
                      if ((C2 = e2.n()).done) {
                        A5.next = 11;
                        break;
                      }
                      if (I2 = C2.value, null == (i2 = t3.get(I2))) {
                        A5.next = 9;
                        break;
                      }
                      return A5.next = 9, [I2, i2];
                    case 9:
                      A5.next = 3;
                      break;
                    case 11:
                      A5.next = 16;
                      break;
                    case 13:
                      A5.prev = 13, A5.t0 = A5.catch(1), e2.e(A5.t0);
                    case 16:
                      return A5.prev = 16, e2.f(), A5.finish(16);
                    case 19:
                    case "end":
                      return A5.stop();
                  }
                }, A4, null, [[1, 13, 16, 19]]);
              })));
            }
            var A3;
            return new yD(rb({}, IO, je(A3 = pT(this._data)).call(A3, this._data)));
          }
        }]), A2;
      }(vD), bD = function(g2) {
        Cb(A2, g2);
        var t2 = dD(A2);
        function A2(g3, e2) {
          var C2, I2;
          return cn(this, A2), rb(Jm(I2 = t2.call(this)), "length", 0), rb(Jm(I2), "_listener", void 0), rb(Jm(I2), "_data", void 0), rb(Jm(I2), "_ids", new CO()), rb(Jm(I2), "_options", void 0), I2._options = e2 || {}, I2._listener = je(C2 = I2._onEvent).call(C2, Jm(I2)), I2.setData(g3), I2;
        }
        return kd(A2, [{
          key: "idProp",
          get: function() {
            return this.getDataSet().idProp;
          }
        }, {
          key: "setData",
          value: function(g3) {
            if (this._data) {
              this._data.off && this._data.off("*", this._listener);
              var t3 = this._data.getIds({
                filter: pc(this._options)
              }), A3 = this._data.get(t3);
              this._ids.clear(), this.length = 0, this._trigger("remove", {
                items: t3,
                oldData: A3
              });
            }
            if (null != g3) {
              this._data = g3;
              for (var e2 = this._data.getIds({
                filter: pc(this._options)
              }), C2 = 0, I2 = e2.length; C2 < I2; C2++) {
                var i2 = e2[C2];
                this._ids.add(i2);
              }
              this.length = e2.length, this._trigger("add", {
                items: e2
              });
            } else this._data = new mD();
            this._data.on && this._data.on("*", this._listener);
          }
        }, {
          key: "refresh",
          value: function() {
            for (var g3 = this._data.getIds({
              filter: pc(this._options)
            }), t3 = ch(this._ids), A3 = {}, e2 = [], C2 = [], I2 = [], i2 = 0, o2 = g3.length; i2 < o2; i2++) {
              var n2 = g3[i2];
              A3[n2] = true, this._ids.has(n2) || (e2.push(n2), this._ids.add(n2));
            }
            for (var r2 = 0, s2 = t3.length; r2 < s2; r2++) {
              var a2 = t3[r2], d2 = this._data.get(a2);
              null == d2 ? console.error("If you see this, report it please.") : A3[a2] || (C2.push(a2), I2.push(d2), this._ids.delete(a2));
            }
            this.length += e2.length - C2.length, e2.length && this._trigger("add", {
              items: e2
            }), C2.length && this._trigger("remove", {
              items: C2,
              oldData: I2
            });
          }
        }, {
          key: "get",
          value: function(g3, t3) {
            if (null == this._data) return null;
            var A3, e2 = null;
            pD(g3) || Rh(g3) ? (e2 = g3, A3 = t3) : A3 = g3;
            var C2 = fe({}, this._options, A3), I2 = pc(this._options), i2 = A3 && pc(A3);
            return I2 && i2 && (C2.filter = function(g4) {
              return I2(g4) && i2(g4);
            }), null == e2 ? this._data.get(C2) : this._data.get(e2, C2);
          }
        }, {
          key: "getIds",
          value: function(g3) {
            if (this._data.length) {
              var t3, A3 = pc(this._options), e2 = null != g3 ? pc(g3) : null;
              return t3 = e2 ? A3 ? function(g4) {
                return A3(g4) && e2(g4);
              } : e2 : A3, this._data.getIds({
                filter: t3,
                order: g3 && g3.order
              });
            }
            return [];
          }
        }, {
          key: "forEach",
          value: function(g3, t3) {
            if (this._data) {
              var A3, e2, C2 = pc(this._options), I2 = t3 && pc(t3);
              e2 = I2 ? C2 ? function(g4) {
                return C2(g4) && I2(g4);
              } : I2 : C2, Cl(A3 = this._data).call(A3, g3, {
                filter: e2,
                order: t3 && t3.order
              });
            }
          }
        }, {
          key: "map",
          value: function(g3, t3) {
            if (this._data) {
              var A3, e2, C2 = pc(this._options), I2 = t3 && pc(t3);
              return e2 = I2 ? C2 ? function(g4) {
                return C2(g4) && I2(g4);
              } : I2 : C2, Fh(A3 = this._data).call(A3, g3, {
                filter: e2,
                order: t3 && t3.order
              });
            }
            return [];
          }
        }, {
          key: "getDataSet",
          value: function() {
            return this._data.getDataSet();
          }
        }, {
          key: "stream",
          value: function(g3) {
            var t3;
            return this._data.stream(g3 || rb({}, IO, je(t3 = $O(this._ids)).call(t3, this._ids)));
          }
        }, {
          key: "dispose",
          value: function() {
            var g3;
            null !== (g3 = this._data) && void 0 !== g3 && g3.off && this._data.off("*", this._listener);
            var t3, e2 = "This data view has already been disposed of.", C2 = {
              get: function() {
                throw new Error(e2);
              },
              set: function() {
                throw new Error(e2);
              },
              configurable: false
            }, I2 = hD(Nh(A2.prototype));
            try {
              for (I2.s(); !(t3 = I2.n()).done; ) {
                var i2 = t3.value;
                fT(this, i2, C2);
              }
            } catch (g4) {
              I2.e(g4);
            } finally {
              I2.f();
            }
          }
        }, {
          key: "_onEvent",
          value: function(g3, t3, A3) {
            if (t3 && t3.items && this._data) {
              var e2 = t3.items, C2 = [], I2 = [], i2 = [], o2 = [], n2 = [], r2 = [];
              switch (g3) {
                case "add":
                  for (var s2 = 0, a2 = e2.length; s2 < a2; s2++) {
                    var d2 = e2[s2];
                    this.get(d2) && (this._ids.add(d2), C2.push(d2));
                  }
                  break;
                case "update":
                  for (var h2 = 0, l2 = e2.length; h2 < l2; h2++) {
                    var c2 = e2[h2];
                    this.get(c2) ? this._ids.has(c2) ? (I2.push(c2), n2.push(t3.data[h2]), o2.push(t3.oldData[h2])) : (this._ids.add(c2), C2.push(c2)) : this._ids.has(c2) && (this._ids.delete(c2), i2.push(c2), r2.push(t3.oldData[h2]));
                  }
                  break;
                case "remove":
                  for (var u2 = 0, p2 = e2.length; u2 < p2; u2++) {
                    var f2 = e2[u2];
                    this._ids.has(f2) && (this._ids.delete(f2), i2.push(f2), r2.push(t3.oldData[u2]));
                  }
              }
              this.length += C2.length - i2.length, C2.length && this._trigger("add", {
                items: C2
              }, A3), I2.length && this._trigger("update", {
                items: I2,
                oldData: o2,
                data: n2
              }, A3), i2.length && this._trigger("remove", {
                items: i2,
                oldData: r2
              }, A3);
            }
          }
        }]), A2;
      }(vD);
      function wD(g2, t2) {
        return "object" === yd(t2) && null !== t2 && g2 === t2.idProp && "function" == typeof t2.add && "function" == typeof t2.clear && "function" == typeof t2.distinct && "function" == typeof Cl(t2) && "function" == typeof t2.get && "function" == typeof t2.getDataSet && "function" == typeof t2.getIds && "number" == typeof t2.length && "function" == typeof Fh(t2) && "function" == typeof t2.max && "function" == typeof t2.min && "function" == typeof t2.off && "function" == typeof t2.on && "function" == typeof t2.remove && "function" == typeof t2.setOptions && "function" == typeof t2.stream && "function" == typeof t2.update && "function" == typeof t2.updateOnly;
      }
      function kD(g2, t2) {
        return "object" === yd(t2) && null !== t2 && g2 === t2.idProp && "function" == typeof Cl(t2) && "function" == typeof t2.get && "function" == typeof t2.getDataSet && "function" == typeof t2.getIds && "number" == typeof t2.length && "function" == typeof Fh(t2) && "function" == typeof t2.off && "function" == typeof t2.on && "function" == typeof t2.stream && wD(g2, t2.getDataSet());
      }
      var xD = Object.freeze({
        __proto__: null,
        DELETE: Mf,
        DataSet: mD,
        DataStream: yD,
        DataView: bD,
        Queue: fD,
        createNewDataPipeFrom: function(g2) {
          return new uD(g2);
        },
        isDataSetLike: wD,
        isDataViewLike: kD
      }), ED = C, OD = I, TD = sC, DD = Ec.trim, ND = fc, RD = u("".charAt), PD = ED.parseFloat, MD = ED.Symbol, BD = MD && MD.iterator, zD = 1 / PD(ND + "-0") != -1 / 0 || BD && !OD(function() {
        PD(Object(BD));
      }) ? function(g2) {
        var t2 = DD(TD(g2)), A2 = PD(t2);
        return 0 === A2 && "-" === RD(t2, 0) ? -0 : A2;
      } : PD;
      TA({
        global: true,
        forced: parseFloat !== zD
      }, {
        parseFloat: zD
      });
      var SD = A(tg.parseFloat), ZD = TA, FD = I, GD = er.f;
      ZD({
        target: "Object",
        stat: true,
        forced: FD(function() {
          return !Object.getOwnPropertyNames(1);
        })
      }, {
        getOwnPropertyNames: GD
      });
      var jD = tg.Object, LD = function(g2) {
        return jD.getOwnPropertyNames(g2);
      }, VD = A(LD);
      function YD(g2, t2) {
        var A2 = ["node", "edge", "label"], e2 = true, C2 = lv(t2, "chosen");
        if ("boolean" == typeof C2) e2 = C2;
        else if ("object" === yd(C2)) {
          if (-1 === Xc(A2).call(A2, g2)) throw new Error("choosify: subOption '" + g2 + "' should be one of '" + A2.join("', '") + "'");
          var I2 = lv(t2, ["chosen", g2]);
          "boolean" != typeof I2 && "function" != typeof I2 || (e2 = I2);
        }
        return e2;
      }
      function WD(g2, t2, A2) {
        if (g2.width <= 0 || g2.height <= 0) return false;
        if (void 0 !== A2) {
          var e2 = {
            x: t2.x - A2.x,
            y: t2.y - A2.y
          };
          if (0 !== A2.angle) {
            var C2 = -A2.angle;
            t2 = {
              x: Math.cos(C2) * e2.x - Math.sin(C2) * e2.y,
              y: Math.sin(C2) * e2.x + Math.cos(C2) * e2.y
            };
          } else t2 = e2;
        }
        var I2 = g2.x + g2.width, i2 = g2.y + g2.width;
        return g2.left < t2.x && I2 > t2.x && g2.top < t2.y && i2 > t2.y;
      }
      function QD(g2) {
        return "string" == typeof g2 && "" !== g2;
      }
      function UD(g2, t2, A2, e2) {
        var C2 = e2.x, I2 = e2.y;
        if ("function" == typeof e2.distanceToBorder) {
          var i2 = e2.distanceToBorder(g2, t2), o2 = Math.sin(t2) * i2, n2 = Math.cos(t2) * i2;
          n2 === i2 ? (C2 += i2, I2 = e2.y) : o2 === i2 ? (C2 = e2.x, I2 -= i2) : (C2 += n2, I2 -= o2);
        } else e2.shape.width > e2.shape.height ? (C2 = e2.x + 0.5 * e2.shape.width, I2 = e2.y - A2) : (C2 = e2.x + A2, I2 = e2.y - 0.5 * e2.shape.height);
        return {
          x: C2,
          y: I2
        };
      }
      var _D = function() {
        function g2(t2) {
          cn(this, g2), this.measureText = t2, this.current = 0, this.width = 0, this.height = 0, this.lines = [];
        }
        return kd(g2, [{
          key: "_add",
          value: function(g3, t2) {
            var A2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "normal";
            void 0 === this.lines[g3] && (this.lines[g3] = {
              width: 0,
              height: 0,
              blocks: []
            });
            var e2 = t2;
            void 0 !== t2 && "" !== t2 || (e2 = " ");
            var C2 = this.measureText(e2, A2), I2 = fe({}, nT(C2));
            I2.text = t2, I2.width = C2.width, I2.mod = A2, void 0 !== t2 && "" !== t2 || (I2.width = 0), this.lines[g3].blocks.push(I2), this.lines[g3].width += I2.width;
          }
        }, {
          key: "curWidth",
          value: function() {
            var g3 = this.lines[this.current];
            return void 0 === g3 ? 0 : g3.width;
          }
        }, {
          key: "append",
          value: function(g3) {
            var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "normal";
            this._add(this.current, g3, t2);
          }
        }, {
          key: "newLine",
          value: function(g3) {
            var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "normal";
            this._add(this.current, g3, t2), this.current++;
          }
        }, {
          key: "determineLineHeights",
          value: function() {
            for (var g3 = 0; g3 < this.lines.length; g3++) {
              var t2 = this.lines[g3], A2 = 0;
              if (void 0 !== t2.blocks) for (var e2 = 0; e2 < t2.blocks.length; e2++) {
                var C2 = t2.blocks[e2];
                A2 < C2.height && (A2 = C2.height);
              }
              t2.height = A2;
            }
          }
        }, {
          key: "determineLabelSize",
          value: function() {
            for (var g3 = 0, t2 = 0, A2 = 0; A2 < this.lines.length; A2++) {
              var e2 = this.lines[A2];
              e2.width > g3 && (g3 = e2.width), t2 += e2.height;
            }
            this.width = g3, this.height = t2;
          }
        }, {
          key: "removeEmptyBlocks",
          value: function() {
            for (var g3 = [], t2 = 0; t2 < this.lines.length; t2++) {
              var A2 = this.lines[t2];
              if (0 !== A2.blocks.length && (t2 !== this.lines.length - 1 || 0 !== A2.width)) {
                var e2 = {};
                fe(e2, A2), e2.blocks = [];
                for (var C2 = void 0, I2 = [], i2 = 0; i2 < A2.blocks.length; i2++) {
                  var o2 = A2.blocks[i2];
                  0 !== o2.width ? I2.push(o2) : void 0 === C2 && (C2 = o2);
                }
                0 === I2.length && void 0 !== C2 && I2.push(C2), e2.blocks = I2, g3.push(e2);
              }
            }
            return g3;
          }
        }, {
          key: "finalize",
          value: function() {
            this.determineLineHeights(), this.determineLabelSize();
            var g3 = this.removeEmptyBlocks();
            return {
              width: this.width,
              height: this.height,
              lines: g3
            };
          }
        }]), g2;
      }(), KD = {
        "<b>": /<b>/,
        "<i>": /<i>/,
        "<code>": /<code>/,
        "</b>": /<\/b>/,
        "</i>": /<\/i>/,
        "</code>": /<\/code>/,
        "*": /\*/,
        _: /_/,
        "`": /`/,
        afterBold: /[^*]/,
        afterItal: /[^_]/,
        afterMono: /[^`]/
      }, HD = function() {
        function g2(t2) {
          cn(this, g2), this.text = t2, this.bold = false, this.ital = false, this.mono = false, this.spacing = false, this.position = 0, this.buffer = "", this.modStack = [], this.blocks = [];
        }
        return kd(g2, [{
          key: "mod",
          value: function() {
            return 0 === this.modStack.length ? "normal" : this.modStack[0];
          }
        }, {
          key: "modName",
          value: function() {
            return 0 === this.modStack.length ? "normal" : "mono" === this.modStack[0] ? "mono" : this.bold && this.ital ? "boldital" : this.bold ? "bold" : this.ital ? "ital" : void 0;
          }
        }, {
          key: "emitBlock",
          value: function() {
            this.spacing && (this.add(" "), this.spacing = false), this.buffer.length > 0 && (this.blocks.push({
              text: this.buffer,
              mod: this.modName()
            }), this.buffer = "");
          }
        }, {
          key: "add",
          value: function(g3) {
            " " === g3 && (this.spacing = true), this.spacing && (this.buffer += " ", this.spacing = false), " " != g3 && (this.buffer += g3);
          }
        }, {
          key: "parseWS",
          value: function(g3) {
            return !!/[ \t]/.test(g3) && (this.mono ? this.add(g3) : this.spacing = true, true);
          }
        }, {
          key: "setTag",
          value: function(g3) {
            this.emitBlock(), this[g3] = true, this.modStack.unshift(g3);
          }
        }, {
          key: "unsetTag",
          value: function(g3) {
            this.emitBlock(), this[g3] = false, this.modStack.shift();
          }
        }, {
          key: "parseStartTag",
          value: function(g3, t2) {
            return !(this.mono || this[g3] || !this.match(t2)) && (this.setTag(g3), true);
          }
        }, {
          key: "match",
          value: function(g3) {
            var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], A2 = lh(this.prepareRegExp(g3), 2), e2 = A2[0], C2 = A2[1], I2 = e2.test(this.text.substr(this.position, C2));
            return I2 && t2 && (this.position += C2 - 1), I2;
          }
        }, {
          key: "parseEndTag",
          value: function(g3, t2, A2) {
            var e2 = this.mod() === g3;
            return !(!(e2 = "mono" === g3 ? e2 && this.mono : e2 && !this.mono) || !this.match(t2)) && (void 0 !== A2 ? (this.position === this.text.length - 1 || this.match(A2, false)) && this.unsetTag(g3) : this.unsetTag(g3), true);
          }
        }, {
          key: "replace",
          value: function(g3, t2) {
            return !!this.match(g3) && (this.add(t2), this.position += length - 1, true);
          }
        }, {
          key: "prepareRegExp",
          value: function(g3) {
            var t2, A2;
            if (g3 instanceof RegExp) A2 = g3, t2 = 1;
            else {
              var e2 = KD[g3];
              A2 = void 0 !== e2 ? e2 : new RegExp(g3), t2 = g3.length;
            }
            return [A2, t2];
          }
        }]), g2;
      }(), XD = function() {
        function g2(t2, A2, e2, C2) {
          var I2 = this;
          cn(this, g2), this.ctx = t2, this.parent = A2, this.selected = e2, this.hover = C2;
          this.lines = new _D(function(g3, A3) {
            if (void 0 === g3) return 0;
            var i2 = I2.parent.getFormattingValues(t2, e2, C2, A3), o2 = 0;
            "" !== g3 && (o2 = I2.ctx.measureText(g3).width);
            return {
              width: o2,
              values: i2
            };
          });
        }
        return kd(g2, [{
          key: "process",
          value: function(g3) {
            if (!QD(g3)) return this.lines.finalize();
            var t2 = this.parent.fontOptions;
            g3 = (g3 = g3.replace(/\r\n/g, "\n")).replace(/\r/g, "\n");
            var A2 = String(g3).split("\n"), e2 = A2.length;
            if (t2.multi) for (var C2 = 0; C2 < e2; C2++) {
              var I2 = this.splitBlocks(A2[C2], t2.multi);
              if (void 0 !== I2) if (0 !== I2.length) {
                if (t2.maxWdt > 0) for (var i2 = 0; i2 < I2.length; i2++) {
                  var o2 = I2[i2].mod, n2 = I2[i2].text;
                  this.splitStringIntoLines(n2, o2, true);
                }
                else for (var r2 = 0; r2 < I2.length; r2++) {
                  var s2 = I2[r2].mod, a2 = I2[r2].text;
                  this.lines.append(a2, s2);
                }
                this.lines.newLine();
              } else this.lines.newLine("");
            }
            else if (t2.maxWdt > 0) for (var d2 = 0; d2 < e2; d2++) this.splitStringIntoLines(A2[d2]);
            else for (var h2 = 0; h2 < e2; h2++) this.lines.newLine(A2[h2]);
            return this.lines.finalize();
          }
        }, {
          key: "decodeMarkupSystem",
          value: function(g3) {
            var t2 = "none";
            return "markdown" === g3 || "md" === g3 ? t2 = "markdown" : true !== g3 && "html" !== g3 || (t2 = "html"), t2;
          }
        }, {
          key: "splitHtmlBlocks",
          value: function(g3) {
            for (var t2 = new HD(g3), A2 = function(g4) {
              return !!/&/.test(g4) && (t2.replace(t2.text, "&lt;", "<") || t2.replace(t2.text, "&amp;", "&") || t2.add("&"), true);
            }; t2.position < t2.text.length; ) {
              var e2 = t2.text.charAt(t2.position);
              t2.parseWS(e2) || /</.test(e2) && (t2.parseStartTag("bold", "<b>") || t2.parseStartTag("ital", "<i>") || t2.parseStartTag("mono", "<code>") || t2.parseEndTag("bold", "</b>") || t2.parseEndTag("ital", "</i>") || t2.parseEndTag("mono", "</code>")) || A2(e2) || t2.add(e2), t2.position++;
            }
            return t2.emitBlock(), t2.blocks;
          }
        }, {
          key: "splitMarkdownBlocks",
          value: function(g3) {
            for (var t2 = this, A2 = new HD(g3), e2 = true, C2 = function(g4) {
              return !!/\\/.test(g4) && (A2.position < t2.text.length + 1 && (A2.position++, g4 = t2.text.charAt(A2.position), / \t/.test(g4) ? A2.spacing = true : (A2.add(g4), e2 = false)), true);
            }; A2.position < A2.text.length; ) {
              var I2 = A2.text.charAt(A2.position);
              A2.parseWS(I2) || C2(I2) || (e2 || A2.spacing) && (A2.parseStartTag("bold", "*") || A2.parseStartTag("ital", "_") || A2.parseStartTag("mono", "`")) || A2.parseEndTag("bold", "*", "afterBold") || A2.parseEndTag("ital", "_", "afterItal") || A2.parseEndTag("mono", "`", "afterMono") || (A2.add(I2), e2 = false), A2.position++;
            }
            return A2.emitBlock(), A2.blocks;
          }
        }, {
          key: "splitBlocks",
          value: function(g3, t2) {
            var A2 = this.decodeMarkupSystem(t2);
            return "none" === A2 ? [{
              text: g3,
              mod: "normal"
            }] : "markdown" === A2 ? this.splitMarkdownBlocks(g3) : "html" === A2 ? this.splitHtmlBlocks(g3) : void 0;
          }
        }, {
          key: "overMaxWidth",
          value: function(g3) {
            var t2 = this.ctx.measureText(g3).width;
            return this.lines.curWidth() + t2 > this.parent.fontOptions.maxWdt;
          }
        }, {
          key: "getLongestFit",
          value: function(g3) {
            for (var t2 = "", A2 = 0; A2 < g3.length; ) {
              var e2 = t2 + ("" === t2 ? "" : " ") + g3[A2];
              if (this.overMaxWidth(e2)) break;
              t2 = e2, A2++;
            }
            return A2;
          }
        }, {
          key: "getLongestFitWord",
          value: function(g3) {
            for (var t2 = 0; t2 < g3.length && !this.overMaxWidth(wh(g3).call(g3, 0, t2)); ) t2++;
            return t2;
          }
        }, {
          key: "splitStringIntoLines",
          value: function(g3) {
            var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "normal", A2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this.parent.getFormattingValues(this.ctx, this.selected, this.hover, t2);
            for (var e2 = (g3 = (g3 = g3.replace(/^( +)/g, "$1\r")).replace(/([^\r][^ ]*)( +)/g, "$1\r$2\r")).split("\r"); e2.length > 0; ) {
              var C2 = this.getLongestFit(e2);
              if (0 === C2) {
                var I2 = e2[0], i2 = this.getLongestFitWord(I2);
                this.lines.newLine(wh(I2).call(I2, 0, i2), t2), e2[0] = wh(I2).call(I2, i2);
              } else {
                var o2 = C2;
                " " === e2[C2 - 1] ? C2-- : " " === e2[o2] && o2++;
                var n2 = wh(e2).call(e2, 0, C2).join("");
                C2 == e2.length && A2 ? this.lines.append(n2, t2) : this.lines.newLine(n2, t2), e2 = wh(e2).call(e2, o2);
              }
            }
          }
        }]), g2;
      }(), JD = ["bold", "ital", "boldital", "mono"], qD = function() {
        function g2(t2, A2) {
          var e2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          cn(this, g2), this.body = t2, this.pointToSelf = false, this.baseSize = void 0, this.fontOptions = {}, this.setOptions(A2), this.size = {
            top: 0,
            left: 0,
            width: 0,
            height: 0,
            yLine: 0
          }, this.isEdgeLabel = e2;
        }
        return kd(g2, [{
          key: "setOptions",
          value: function(g3) {
            if (this.elementOptions = g3, this.initFontOptions(g3.font), QD(g3.label) ? this.labelDirty = true : g3.label = void 0, void 0 !== g3.font && null !== g3.font) {
              if ("string" == typeof g3.font) this.baseSize = this.fontOptions.size;
              else if ("object" === yd(g3.font)) {
                var t2 = g3.font.size;
                void 0 !== t2 && (this.baseSize = t2);
              }
            }
          }
        }, {
          key: "initFontOptions",
          value: function(t2) {
            var A2 = this;
            tv(JD, function(g3) {
              A2.fontOptions[g3] = {};
            }), g2.parseFontString(this.fontOptions, t2) ? this.fontOptions.vadjust = 0 : tv(t2, function(g3, t3) {
              null != g3 && "object" !== yd(g3) && (A2.fontOptions[t3] = g3);
            });
          }
        }, {
          key: "constrain",
          value: function(g3) {
            var t2 = {
              constrainWidth: false,
              maxWdt: -1,
              minWdt: -1,
              constrainHeight: false,
              minHgt: -1,
              valign: "middle"
            }, A2 = lv(g3, "widthConstraint");
            if ("number" == typeof A2) t2.maxWdt = Number(A2), t2.minWdt = Number(A2);
            else if ("object" === yd(A2)) {
              var e2 = lv(g3, ["widthConstraint", "maximum"]);
              "number" == typeof e2 && (t2.maxWdt = Number(e2));
              var C2 = lv(g3, ["widthConstraint", "minimum"]);
              "number" == typeof C2 && (t2.minWdt = Number(C2));
            }
            var I2 = lv(g3, "heightConstraint");
            if ("number" == typeof I2) t2.minHgt = Number(I2);
            else if ("object" === yd(I2)) {
              var i2 = lv(g3, ["heightConstraint", "minimum"]);
              "number" == typeof i2 && (t2.minHgt = Number(i2));
              var o2 = lv(g3, ["heightConstraint", "valign"]);
              "string" == typeof o2 && ("top" !== o2 && "bottom" !== o2 || (t2.valign = o2));
            }
            return t2;
          }
        }, {
          key: "update",
          value: function(g3, t2) {
            this.setOptions(g3, true), this.propagateFonts(t2), qf(this.fontOptions, this.constrain(t2)), this.fontOptions.chooser = YD("label", t2);
          }
        }, {
          key: "adjustSizes",
          value: function(g3) {
            var t2 = g3 ? g3.right + g3.left : 0;
            this.fontOptions.constrainWidth && (this.fontOptions.maxWdt -= t2, this.fontOptions.minWdt -= t2);
            var A2 = g3 ? g3.top + g3.bottom : 0;
            this.fontOptions.constrainHeight && (this.fontOptions.minHgt -= A2);
          }
        }, {
          key: "addFontOptionsToPile",
          value: function(g3, t2) {
            for (var A2 = 0; A2 < t2.length; ++A2) this.addFontToPile(g3, t2[A2]);
          }
        }, {
          key: "addFontToPile",
          value: function(g3, t2) {
            if (void 0 !== t2 && void 0 !== t2.font && null !== t2.font) {
              var A2 = t2.font;
              g3.push(A2);
            }
          }
        }, {
          key: "getBasicOptions",
          value: function(t2) {
            for (var A2 = {}, e2 = 0; e2 < t2.length; ++e2) {
              var C2 = t2[e2], I2 = {};
              g2.parseFontString(I2, C2) && (C2 = I2), tv(C2, function(g3, t3) {
                void 0 !== g3 && (Object.prototype.hasOwnProperty.call(A2, t3) || (-1 !== Xc(JD).call(JD, t3) ? A2[t3] = {} : A2[t3] = g3));
              });
            }
            return A2;
          }
        }, {
          key: "getFontOption",
          value: function(t2, A2, e2) {
            for (var C2, I2 = 0; I2 < t2.length; ++I2) {
              var i2 = t2[I2];
              if (Object.prototype.hasOwnProperty.call(i2, A2)) {
                if (null == (C2 = i2[A2])) continue;
                var o2 = {};
                if (g2.parseFontString(o2, C2) && (C2 = o2), Object.prototype.hasOwnProperty.call(C2, e2)) return C2[e2];
              }
            }
            if (Object.prototype.hasOwnProperty.call(this.fontOptions, e2)) return this.fontOptions[e2];
            throw new Error("Did not find value for multi-font for property: '" + e2 + "'");
          }
        }, {
          key: "getFontOptions",
          value: function(g3, t2) {
            for (var A2 = {}, e2 = ["color", "size", "face", "mod", "vadjust"], C2 = 0; C2 < e2.length; ++C2) {
              var I2 = e2[C2];
              A2[I2] = this.getFontOption(g3, t2, I2);
            }
            return A2;
          }
        }, {
          key: "propagateFonts",
          value: function(g3) {
            var t2 = this, A2 = [];
            this.addFontOptionsToPile(A2, g3), this.fontOptions = this.getBasicOptions(A2);
            for (var e2 = function() {
              var g4 = JD[C2], e3 = t2.fontOptions[g4];
              tv(t2.getFontOptions(A2, g4), function(g5, t3) {
                e3[t3] = g5;
              }), e3.size = Number(e3.size), e3.vadjust = Number(e3.vadjust);
            }, C2 = 0; C2 < JD.length; ++C2) e2();
          }
        }, {
          key: "draw",
          value: function(g3, t2, A2, e2, C2) {
            var I2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "middle";
            if (void 0 !== this.elementOptions.label) {
              var i2 = this.fontOptions.size * this.body.view.scale;
              this.elementOptions.label && i2 < this.elementOptions.scaling.label.drawThreshold - 1 || (i2 >= this.elementOptions.scaling.label.maxVisible && (i2 = Number(this.elementOptions.scaling.label.maxVisible) / this.body.view.scale), this.calculateLabelSize(g3, e2, C2, t2, A2, I2), this._drawBackground(g3), this._drawText(g3, t2, this.size.yLine, I2, i2));
            }
          }
        }, {
          key: "_drawBackground",
          value: function(g3) {
            if (void 0 !== this.fontOptions.background && "none" !== this.fontOptions.background) {
              g3.fillStyle = this.fontOptions.background;
              var t2 = this.getSize();
              g3.fillRect(t2.left, t2.top, t2.width, t2.height);
            }
          }
        }, {
          key: "_drawText",
          value: function(g3, t2, A2) {
            var e2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "middle", C2 = arguments.length > 4 ? arguments[4] : void 0, I2 = lh(this._setAlignment(g3, t2, A2, e2), 2);
            t2 = I2[0], A2 = I2[1], g3.textAlign = "left", t2 -= this.size.width / 2, this.fontOptions.valign && this.size.height > this.size.labelHeight && ("top" === this.fontOptions.valign && (A2 -= (this.size.height - this.size.labelHeight) / 2), "bottom" === this.fontOptions.valign && (A2 += (this.size.height - this.size.labelHeight) / 2));
            for (var i2 = 0; i2 < this.lineCount; i2++) {
              var o2 = this.lines[i2];
              if (o2 && o2.blocks) {
                var n2 = 0;
                this.isEdgeLabel || "center" === this.fontOptions.align ? n2 += (this.size.width - o2.width) / 2 : "right" === this.fontOptions.align && (n2 += this.size.width - o2.width);
                for (var r2 = 0; r2 < o2.blocks.length; r2++) {
                  var s2 = o2.blocks[r2];
                  g3.font = s2.font;
                  var a2 = lh(this._getColor(s2.color, C2, s2.strokeColor), 2), d2 = a2[0], h2 = a2[1];
                  s2.strokeWidth > 0 && (g3.lineWidth = s2.strokeWidth, g3.strokeStyle = h2, g3.lineJoin = "round"), g3.fillStyle = d2, s2.strokeWidth > 0 && g3.strokeText(s2.text, t2 + n2, A2 + s2.vadjust), g3.fillText(s2.text, t2 + n2, A2 + s2.vadjust), n2 += s2.width;
                }
                A2 += o2.height;
              }
            }
          }
        }, {
          key: "_setAlignment",
          value: function(g3, t2, A2, e2) {
            if (this.isEdgeLabel && "horizontal" !== this.fontOptions.align && false === this.pointToSelf) {
              t2 = 0, A2 = 0;
              "top" === this.fontOptions.align ? (g3.textBaseline = "alphabetic", A2 -= 4) : "bottom" === this.fontOptions.align ? (g3.textBaseline = "hanging", A2 += 4) : g3.textBaseline = "middle";
            } else g3.textBaseline = e2;
            return [t2, A2];
          }
        }, {
          key: "_getColor",
          value: function(g3, t2, A2) {
            var e2 = g3 || "#000000", C2 = A2 || "#ffffff";
            if (t2 <= this.elementOptions.scaling.label.drawThreshold) {
              var I2 = Math.max(0, Math.min(1, 1 - (this.elementOptions.scaling.label.drawThreshold - t2)));
              e2 = ev(e2, I2), C2 = ev(C2, I2);
            }
            return [e2, C2];
          }
        }, {
          key: "getTextSize",
          value: function(g3) {
            var t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], A2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return this._processLabel(g3, t2, A2), {
              width: this.size.width,
              height: this.size.height,
              lineCount: this.lineCount
            };
          }
        }, {
          key: "getSize",
          value: function() {
            var g3 = this.size.left, t2 = this.size.top - 1;
            if (this.isEdgeLabel) {
              var A2 = 0.5 * -this.size.width;
              switch (this.fontOptions.align) {
                case "middle":
                  g3 = A2, t2 = 0.5 * -this.size.height;
                  break;
                case "top":
                  g3 = A2, t2 = -(this.size.height + 2);
                  break;
                case "bottom":
                  g3 = A2, t2 = 2;
              }
            }
            return {
              left: g3,
              top: t2,
              width: this.size.width,
              height: this.size.height
            };
          }
        }, {
          key: "calculateLabelSize",
          value: function(g3, t2, A2) {
            var e2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, C2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, I2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "middle";
            this._processLabel(g3, t2, A2), this.size.left = e2 - 0.5 * this.size.width, this.size.top = C2 - 0.5 * this.size.height, this.size.yLine = C2 + 0.5 * (1 - this.lineCount) * this.fontOptions.size, "hanging" === I2 && (this.size.top += 0.5 * this.fontOptions.size, this.size.top += 4, this.size.yLine += 4);
          }
        }, {
          key: "getFormattingValues",
          value: function(g3, t2, A2, e2) {
            var C2 = function(g4, t3, A3) {
              return "normal" === t3 ? "mod" === A3 ? "" : g4[A3] : void 0 !== g4[t3][A3] ? g4[t3][A3] : g4[A3];
            }, I2 = {
              color: C2(this.fontOptions, e2, "color"),
              size: C2(this.fontOptions, e2, "size"),
              face: C2(this.fontOptions, e2, "face"),
              mod: C2(this.fontOptions, e2, "mod"),
              vadjust: C2(this.fontOptions, e2, "vadjust"),
              strokeWidth: this.fontOptions.strokeWidth,
              strokeColor: this.fontOptions.strokeColor
            };
            (t2 || A2) && ("normal" === e2 && true === this.fontOptions.chooser && this.elementOptions.labelHighlightBold ? I2.mod = "bold" : "function" == typeof this.fontOptions.chooser && this.fontOptions.chooser(I2, this.elementOptions.id, t2, A2));
            var i2 = "";
            return void 0 !== I2.mod && "" !== I2.mod && (i2 += I2.mod + " "), i2 += I2.size + "px " + I2.face, g3.font = i2.replace(/"/g, ""), I2.font = g3.font, I2.height = I2.size, I2;
          }
        }, {
          key: "differentState",
          value: function(g3, t2) {
            return g3 !== this.selectedState || t2 !== this.hoverState;
          }
        }, {
          key: "_processLabelText",
          value: function(g3, t2, A2, e2) {
            return new XD(g3, this, t2, A2).process(e2);
          }
        }, {
          key: "_processLabel",
          value: function(g3, t2, A2) {
            if (false !== this.labelDirty || this.differentState(t2, A2)) {
              var e2 = this._processLabelText(g3, t2, A2, this.elementOptions.label);
              this.fontOptions.minWdt > 0 && e2.width < this.fontOptions.minWdt && (e2.width = this.fontOptions.minWdt), this.size.labelHeight = e2.height, this.fontOptions.minHgt > 0 && e2.height < this.fontOptions.minHgt && (e2.height = this.fontOptions.minHgt), this.lines = e2.lines, this.lineCount = e2.lines.length, this.size.width = e2.width, this.size.height = e2.height, this.selectedState = t2, this.hoverState = A2, this.labelDirty = false;
            }
          }
        }, {
          key: "visible",
          value: function() {
            return 0 !== this.size.width && 0 !== this.size.height && void 0 !== this.elementOptions.label && !(this.fontOptions.size * this.body.view.scale < this.elementOptions.scaling.label.drawThreshold - 1);
          }
        }], [{
          key: "parseFontString",
          value: function(g3, t2) {
            if (!t2 || "string" != typeof t2) return false;
            var A2 = t2.split(" ");
            return g3.size = +A2[0].replace("px", ""), g3.face = A2[1], g3.color = A2[2], true;
          }
        }]), g2;
      }(), $D = function() {
        function g2(t2, A2, e2) {
          cn(this, g2), this.body = A2, this.labelModule = e2, this.setOptions(t2), this.top = void 0, this.left = void 0, this.height = void 0, this.width = void 0, this.radius = void 0, this.margin = void 0, this.refreshNeeded = true, this.boundingBox = {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          };
        }
        return kd(g2, [{
          key: "setOptions",
          value: function(g3) {
            this.options = g3;
          }
        }, {
          key: "_setMargins",
          value: function(g3) {
            this.margin = {}, this.options.margin && ("object" == yd(this.options.margin) ? (this.margin.top = this.options.margin.top, this.margin.right = this.options.margin.right, this.margin.bottom = this.options.margin.bottom, this.margin.left = this.options.margin.left) : (this.margin.top = this.options.margin, this.margin.right = this.options.margin, this.margin.bottom = this.options.margin, this.margin.left = this.options.margin)), g3.adjustSizes(this.margin);
          }
        }, {
          key: "_distanceToBorder",
          value: function(g3, t2) {
            var A2 = this.options.borderWidth;
            return g3 && this.resize(g3), Math.min(Math.abs(this.width / 2 / Math.cos(t2)), Math.abs(this.height / 2 / Math.sin(t2))) + A2;
          }
        }, {
          key: "enableShadow",
          value: function(g3, t2) {
            t2.shadow && (g3.shadowColor = t2.shadowColor, g3.shadowBlur = t2.shadowSize, g3.shadowOffsetX = t2.shadowX, g3.shadowOffsetY = t2.shadowY);
          }
        }, {
          key: "disableShadow",
          value: function(g3, t2) {
            t2.shadow && (g3.shadowColor = "rgba(0,0,0,0)", g3.shadowBlur = 0, g3.shadowOffsetX = 0, g3.shadowOffsetY = 0);
          }
        }, {
          key: "enableBorderDashes",
          value: function(g3, t2) {
            if (false !== t2.borderDashes) if (void 0 !== g3.setLineDash) {
              var A2 = t2.borderDashes;
              true === A2 && (A2 = [5, 15]), g3.setLineDash(A2);
            } else console.warn("setLineDash is not supported in this browser. The dashed borders cannot be used."), this.options.shapeProperties.borderDashes = false, t2.borderDashes = false;
          }
        }, {
          key: "disableBorderDashes",
          value: function(g3, t2) {
            false !== t2.borderDashes && (void 0 !== g3.setLineDash ? g3.setLineDash([0]) : (console.warn("setLineDash is not supported in this browser. The dashed borders cannot be used."), this.options.shapeProperties.borderDashes = false, t2.borderDashes = false));
          }
        }, {
          key: "needsRefresh",
          value: function(g3, t2) {
            return true === this.refreshNeeded ? (this.refreshNeeded = false, true) : void 0 === this.width || this.labelModule.differentState(g3, t2);
          }
        }, {
          key: "initContextForDraw",
          value: function(g3, t2) {
            var A2 = t2.borderWidth / this.body.view.scale;
            g3.lineWidth = Math.min(this.width, A2), g3.strokeStyle = t2.borderColor, g3.fillStyle = t2.color;
          }
        }, {
          key: "performStroke",
          value: function(g3, t2) {
            var A2 = t2.borderWidth / this.body.view.scale;
            g3.save(), A2 > 0 && (this.enableBorderDashes(g3, t2), g3.stroke(), this.disableBorderDashes(g3, t2)), g3.restore();
          }
        }, {
          key: "performFill",
          value: function(g3, t2) {
            g3.save(), g3.fillStyle = t2.color, this.enableShadow(g3, t2), Bu(g3).call(g3), this.disableShadow(g3, t2), g3.restore(), this.performStroke(g3, t2);
          }
        }, {
          key: "_addBoundingBoxMargin",
          value: function(g3) {
            this.boundingBox.left -= g3, this.boundingBox.top -= g3, this.boundingBox.bottom += g3, this.boundingBox.right += g3;
          }
        }, {
          key: "_updateBoundingBox",
          value: function(g3, t2, A2, e2, C2) {
            void 0 !== A2 && this.resize(A2, e2, C2), this.left = g3 - this.width / 2, this.top = t2 - this.height / 2, this.boundingBox.left = this.left, this.boundingBox.top = this.top, this.boundingBox.bottom = this.top + this.height, this.boundingBox.right = this.left + this.width;
          }
        }, {
          key: "updateBoundingBox",
          value: function(g3, t2, A2, e2, C2) {
            this._updateBoundingBox(g3, t2, A2, e2, C2);
          }
        }, {
          key: "getDimensionsFromLabel",
          value: function(g3, t2, A2) {
            this.textSize = this.labelModule.getTextSize(g3, t2, A2);
            var e2 = this.textSize.width, C2 = this.textSize.height;
            return 0 === e2 && (e2 = 14, C2 = 14), {
              width: e2,
              height: C2
            };
          }
        }]), g2;
      }();
      function gN(g2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !MT) return false;
          if (MT.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(MT(Boolean, [], function() {
            })), true;
          } catch (g3) {
            return false;
          }
        }();
        return function() {
          var A2, e2 = nb(g2);
          if (t2) {
            var C2 = nb(this).constructor;
            A2 = MT(e2, arguments, C2);
          } else A2 = e2.apply(this, arguments);
          return Ib(this, A2);
        };
      }
      var tN = function(g2) {
        Cb(A2, g2);
        var t2 = gN(A2);
        function A2(g3, e2, C2) {
          var I2;
          return cn(this, A2), (I2 = t2.call(this, g3, e2, C2))._setMargins(C2), I2;
        }
        return kd(A2, [{
          key: "resize",
          value: function(g3) {
            var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.selected, A3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.hover;
            if (this.needsRefresh(t3, A3)) {
              var e2 = this.getDimensionsFromLabel(g3, t3, A3);
              this.width = e2.width + this.margin.right + this.margin.left, this.height = e2.height + this.margin.top + this.margin.bottom, this.radius = this.width / 2;
            }
          }
        }, {
          key: "draw",
          value: function(g3, t3, A3, e2, C2, I2) {
            this.resize(g3, e2, C2), this.left = t3 - this.width / 2, this.top = A3 - this.height / 2, this.initContextForDraw(g3, I2), Ve(g3, this.left, this.top, this.width, this.height, I2.borderRadius), this.performFill(g3, I2), this.updateBoundingBox(t3, A3, g3, e2, C2), this.labelModule.draw(g3, this.left + this.textSize.width / 2 + this.margin.left, this.top + this.textSize.height / 2 + this.margin.top, e2, C2);
          }
        }, {
          key: "updateBoundingBox",
          value: function(g3, t3, A3, e2, C2) {
            this._updateBoundingBox(g3, t3, A3, e2, C2);
            var I2 = this.options.shapeProperties.borderRadius;
            this._addBoundingBoxMargin(I2);
          }
        }, {
          key: "distanceToBorder",
          value: function(g3, t3) {
            g3 && this.resize(g3);
            var A3 = this.options.borderWidth;
            return Math.min(Math.abs(this.width / 2 / Math.cos(t3)), Math.abs(this.height / 2 / Math.sin(t3))) + A3;
          }
        }]), A2;
      }($D);
      function AN(g2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !MT) return false;
          if (MT.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(MT(Boolean, [], function() {
            })), true;
          } catch (g3) {
            return false;
          }
        }();
        return function() {
          var A2, e2 = nb(g2);
          if (t2) {
            var C2 = nb(this).constructor;
            A2 = MT(e2, arguments, C2);
          } else A2 = e2.apply(this, arguments);
          return Ib(this, A2);
        };
      }
      var eN = function(g2) {
        Cb(A2, g2);
        var t2 = AN(A2);
        function A2(g3, e2, C2) {
          var I2;
          return cn(this, A2), (I2 = t2.call(this, g3, e2, C2)).labelOffset = 0, I2.selected = false, I2;
        }
        return kd(A2, [{
          key: "setOptions",
          value: function(g3, t3, A3) {
            this.options = g3, void 0 === t3 && void 0 === A3 || this.setImages(t3, A3);
          }
        }, {
          key: "setImages",
          value: function(g3, t3) {
            t3 && this.selected ? (this.imageObj = t3, this.imageObjAlt = g3) : (this.imageObj = g3, this.imageObjAlt = t3);
          }
        }, {
          key: "switchImages",
          value: function(g3) {
            var t3 = g3 && !this.selected || !g3 && this.selected;
            if (this.selected = g3, void 0 !== this.imageObjAlt && t3) {
              var A3 = this.imageObj;
              this.imageObj = this.imageObjAlt, this.imageObjAlt = A3;
            }
          }
        }, {
          key: "_getImagePadding",
          value: function() {
            var g3 = {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            };
            if (this.options.imagePadding) {
              var t3 = this.options.imagePadding;
              "object" == yd(t3) ? (g3.top = t3.top, g3.right = t3.right, g3.bottom = t3.bottom, g3.left = t3.left) : (g3.top = t3, g3.right = t3, g3.bottom = t3, g3.left = t3);
            }
            return g3;
          }
        }, {
          key: "_resizeImage",
          value: function() {
            var g3, t3;
            if (false === this.options.shapeProperties.useImageSize) {
              var A3 = 1, e2 = 1;
              this.imageObj.width && this.imageObj.height && (this.imageObj.width > this.imageObj.height ? A3 = this.imageObj.width / this.imageObj.height : e2 = this.imageObj.height / this.imageObj.width), g3 = 2 * this.options.size * A3, t3 = 2 * this.options.size * e2;
            } else {
              var C2 = this._getImagePadding();
              g3 = this.imageObj.width + C2.left + C2.right, t3 = this.imageObj.height + C2.top + C2.bottom;
            }
            this.width = g3, this.height = t3, this.radius = 0.5 * this.width;
          }
        }, {
          key: "_drawRawCircle",
          value: function(g3, t3, A3, e2) {
            this.initContextForDraw(g3, e2), Le(g3, t3, A3, e2.size), this.performFill(g3, e2);
          }
        }, {
          key: "_drawImageAtPosition",
          value: function(g3, t3) {
            if (0 != this.imageObj.width) {
              g3.globalAlpha = void 0 !== t3.opacity ? t3.opacity : 1, this.enableShadow(g3, t3);
              var A3 = 1;
              true === this.options.shapeProperties.interpolation && (A3 = this.imageObj.width / this.width / this.body.view.scale);
              var e2 = this._getImagePadding(), C2 = this.left + e2.left, I2 = this.top + e2.top, i2 = this.width - e2.left - e2.right, o2 = this.height - e2.top - e2.bottom;
              this.imageObj.drawImageAtPosition(g3, A3, C2, I2, i2, o2), this.disableShadow(g3, t3);
            }
          }
        }, {
          key: "_drawImageLabel",
          value: function(g3, t3, A3, e2, C2) {
            var I2 = 0;
            if (void 0 !== this.height) {
              I2 = 0.5 * this.height;
              var i2 = this.labelModule.getTextSize(g3, e2, C2);
              i2.lineCount >= 1 && (I2 += i2.height / 2);
            }
            var o2 = A3 + I2;
            this.options.label && (this.labelOffset = I2), this.labelModule.draw(g3, t3, o2, e2, C2, "hanging");
          }
        }]), A2;
      }($D);
      function CN(g2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !MT) return false;
          if (MT.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(MT(Boolean, [], function() {
            })), true;
          } catch (g3) {
            return false;
          }
        }();
        return function() {
          var A2, e2 = nb(g2);
          if (t2) {
            var C2 = nb(this).constructor;
            A2 = MT(e2, arguments, C2);
          } else A2 = e2.apply(this, arguments);
          return Ib(this, A2);
        };
      }
      var IN = function(g2) {
        Cb(A2, g2);
        var t2 = CN(A2);
        function A2(g3, e2, C2) {
          var I2;
          return cn(this, A2), (I2 = t2.call(this, g3, e2, C2))._setMargins(C2), I2;
        }
        return kd(A2, [{
          key: "resize",
          value: function(g3) {
            var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.selected, A3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.hover;
            if (this.needsRefresh(t3, A3)) {
              var e2 = this.getDimensionsFromLabel(g3, t3, A3), C2 = Math.max(e2.width + this.margin.right + this.margin.left, e2.height + this.margin.top + this.margin.bottom);
              this.options.size = C2 / 2, this.width = C2, this.height = C2, this.radius = this.width / 2;
            }
          }
        }, {
          key: "draw",
          value: function(g3, t3, A3, e2, C2, I2) {
            this.resize(g3, e2, C2), this.left = t3 - this.width / 2, this.top = A3 - this.height / 2, this._drawRawCircle(g3, t3, A3, I2), this.updateBoundingBox(t3, A3), this.labelModule.draw(g3, this.left + this.textSize.width / 2 + this.margin.left, A3, e2, C2);
          }
        }, {
          key: "updateBoundingBox",
          value: function(g3, t3) {
            this.boundingBox.top = t3 - this.options.size, this.boundingBox.left = g3 - this.options.size, this.boundingBox.right = g3 + this.options.size, this.boundingBox.bottom = t3 + this.options.size;
          }
        }, {
          key: "distanceToBorder",
          value: function(g3) {
            return g3 && this.resize(g3), 0.5 * this.width;
          }
        }]), A2;
      }(eN);
      function iN(g2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !MT) return false;
          if (MT.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(MT(Boolean, [], function() {
            })), true;
          } catch (g3) {
            return false;
          }
        }();
        return function() {
          var A2, e2 = nb(g2);
          if (t2) {
            var C2 = nb(this).constructor;
            A2 = MT(e2, arguments, C2);
          } else A2 = e2.apply(this, arguments);
          return Ib(this, A2);
        };
      }
      var oN = function(g2) {
        Cb(A2, g2);
        var t2 = iN(A2);
        function A2(g3, e2, C2, I2, i2) {
          var o2;
          return cn(this, A2), (o2 = t2.call(this, g3, e2, C2)).setImages(I2, i2), o2;
        }
        return kd(A2, [{
          key: "resize",
          value: function(g3) {
            var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.selected, A3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.hover;
            if (void 0 === this.imageObj.src || void 0 === this.imageObj.width || void 0 === this.imageObj.height) {
              var e2 = 2 * this.options.size;
              return this.width = e2, this.height = e2, void (this.radius = 0.5 * this.width);
            }
            this.needsRefresh(t3, A3) && this._resizeImage();
          }
        }, {
          key: "draw",
          value: function(g3, t3, A3, e2, C2, I2) {
            this.switchImages(e2), this.resize();
            var i2 = t3, o2 = A3;
            "top-left" === this.options.shapeProperties.coordinateOrigin ? (this.left = t3, this.top = A3, i2 += this.width / 2, o2 += this.height / 2) : (this.left = t3 - this.width / 2, this.top = A3 - this.height / 2), this._drawRawCircle(g3, i2, o2, I2), g3.save(), g3.clip(), this._drawImageAtPosition(g3, I2), g3.restore(), this._drawImageLabel(g3, i2, o2, e2, C2), this.updateBoundingBox(t3, A3);
          }
        }, {
          key: "updateBoundingBox",
          value: function(g3, t3) {
            "top-left" === this.options.shapeProperties.coordinateOrigin ? (this.boundingBox.top = t3, this.boundingBox.left = g3, this.boundingBox.right = g3 + 2 * this.options.size, this.boundingBox.bottom = t3 + 2 * this.options.size) : (this.boundingBox.top = t3 - this.options.size, this.boundingBox.left = g3 - this.options.size, this.boundingBox.right = g3 + this.options.size, this.boundingBox.bottom = t3 + this.options.size), this.boundingBox.left = Math.min(this.boundingBox.left, this.labelModule.size.left), this.boundingBox.right = Math.max(this.boundingBox.right, this.labelModule.size.left + this.labelModule.size.width), this.boundingBox.bottom = Math.max(this.boundingBox.bottom, this.boundingBox.bottom + this.labelOffset);
          }
        }, {
          key: "distanceToBorder",
          value: function(g3) {
            return g3 && this.resize(g3), 0.5 * this.width;
          }
        }]), A2;
      }(eN);
      function nN(g2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !MT) return false;
          if (MT.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(MT(Boolean, [], function() {
            })), true;
          } catch (g3) {
            return false;
          }
        }();
        return function() {
          var A2, e2 = nb(g2);
          if (t2) {
            var C2 = nb(this).constructor;
            A2 = MT(e2, arguments, C2);
          } else A2 = e2.apply(this, arguments);
          return Ib(this, A2);
        };
      }
      var rN = function(g2) {
        Cb(A2, g2);
        var t2 = nN(A2);
        function A2(g3, e2, C2) {
          return cn(this, A2), t2.call(this, g3, e2, C2);
        }
        return kd(A2, [{
          key: "resize",
          value: function(g3) {
            var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.selected, A3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.hover, e2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
              size: this.options.size
            };
            if (this.needsRefresh(t3, A3)) {
              var C2, I2;
              this.labelModule.getTextSize(g3, t3, A3);
              var i2 = 2 * e2.size;
              this.width = null !== (C2 = this.customSizeWidth) && void 0 !== C2 ? C2 : i2, this.height = null !== (I2 = this.customSizeHeight) && void 0 !== I2 ? I2 : i2, this.radius = 0.5 * this.width;
            }
          }
        }, {
          key: "_drawShape",
          value: function(g3, t3, A3, e2, C2, I2, i2, o2) {
            var n2, r2 = this;
            return this.resize(g3, I2, i2, o2), this.left = e2 - this.width / 2, this.top = C2 - this.height / 2, this.initContextForDraw(g3, o2), (n2 = t3, Object.prototype.hasOwnProperty.call(Ue, n2) ? Ue[n2] : function(g4) {
              for (var t4 = arguments.length, A4 = new Array(t4 > 1 ? t4 - 1 : 0), e3 = 1; e3 < t4; e3++) A4[e3 - 1] = arguments[e3];
              CanvasRenderingContext2D.prototype[n2].call(g4, A4);
            })(g3, e2, C2, o2.size), this.performFill(g3, o2), void 0 !== this.options.icon && void 0 !== this.options.icon.code && (g3.font = (I2 ? "bold " : "") + this.height / 2 + "px " + (this.options.icon.face || "FontAwesome"), g3.fillStyle = this.options.icon.color || "black", g3.textAlign = "center", g3.textBaseline = "middle", g3.fillText(this.options.icon.code, e2, C2)), {
              drawExternalLabel: function() {
                if (void 0 !== r2.options.label) {
                  r2.labelModule.calculateLabelSize(g3, I2, i2, e2, C2, "hanging");
                  var t4 = C2 + 0.5 * r2.height + 0.5 * r2.labelModule.size.height;
                  r2.labelModule.draw(g3, e2, t4, I2, i2, "hanging");
                }
                r2.updateBoundingBox(e2, C2);
              }
            };
          }
        }, {
          key: "updateBoundingBox",
          value: function(g3, t3) {
            this.boundingBox.top = t3 - this.options.size, this.boundingBox.left = g3 - this.options.size, this.boundingBox.right = g3 + this.options.size, this.boundingBox.bottom = t3 + this.options.size, void 0 !== this.options.label && this.labelModule.size.width > 0 && (this.boundingBox.left = Math.min(this.boundingBox.left, this.labelModule.size.left), this.boundingBox.right = Math.max(this.boundingBox.right, this.labelModule.size.left + this.labelModule.size.width), this.boundingBox.bottom = Math.max(this.boundingBox.bottom, this.boundingBox.bottom + this.labelModule.size.height));
          }
        }]), A2;
      }($D);
      function sN(g2, t2) {
        var A2 = Lh(g2);
        if (BT) {
          var e2 = BT(g2);
          t2 && (e2 = pc(e2).call(e2, function(t3) {
            return WT(g2, t3).enumerable;
          })), A2.push.apply(A2, e2);
        }
        return A2;
      }
      function aN(g2) {
        for (var t2 = 1; t2 < arguments.length; t2++) {
          var A2, e2, C2 = null != arguments[t2] ? arguments[t2] : {};
          t2 % 2 ? Cl(A2 = sN(Object(C2), true)).call(A2, function(t3) {
            rb(g2, t3, C2[t3]);
          }) : HT ? AD(g2, HT(C2)) : Cl(e2 = sN(Object(C2))).call(e2, function(t3) {
            fT(g2, t3, WT(C2, t3));
          });
        }
        return g2;
      }
      function dN(g2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !MT) return false;
          if (MT.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(MT(Boolean, [], function() {
            })), true;
          } catch (g3) {
            return false;
          }
        }();
        return function() {
          var A2, e2 = nb(g2);
          if (t2) {
            var C2 = nb(this).constructor;
            A2 = MT(e2, arguments, C2);
          } else A2 = e2.apply(this, arguments);
          return Ib(this, A2);
        };
      }
      var hN = function(g2) {
        Cb(A2, g2);
        var t2 = dN(A2);
        function A2(g3, e2, C2, I2) {
          var i2;
          return cn(this, A2), (i2 = t2.call(this, g3, e2, C2, I2)).ctxRenderer = I2, i2;
        }
        return kd(A2, [{
          key: "draw",
          value: function(g3, t3, A3, e2, C2, I2) {
            this.resize(g3, e2, C2, I2), this.left = t3 - this.width / 2, this.top = A3 - this.height / 2, g3.save();
            var i2 = this.ctxRenderer({
              ctx: g3,
              id: this.options.id,
              x: t3,
              y: A3,
              state: {
                selected: e2,
                hover: C2
              },
              style: aN({}, I2),
              label: this.options.label
            });
            if (null != i2.drawNode && i2.drawNode(), g3.restore(), i2.drawExternalLabel) {
              var o2 = i2.drawExternalLabel;
              i2.drawExternalLabel = function() {
                g3.save(), o2(), g3.restore();
              };
            }
            return i2.nodeDimensions && (this.customSizeWidth = i2.nodeDimensions.width, this.customSizeHeight = i2.nodeDimensions.height), i2;
          }
        }, {
          key: "distanceToBorder",
          value: function(g3, t3) {
            return this._distanceToBorder(g3, t3);
          }
        }]), A2;
      }(rN);
      function lN(g2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !MT) return false;
          if (MT.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(MT(Boolean, [], function() {
            })), true;
          } catch (g3) {
            return false;
          }
        }();
        return function() {
          var A2, e2 = nb(g2);
          if (t2) {
            var C2 = nb(this).constructor;
            A2 = MT(e2, arguments, C2);
          } else A2 = e2.apply(this, arguments);
          return Ib(this, A2);
        };
      }
      var cN = function(g2) {
        Cb(A2, g2);
        var t2 = lN(A2);
        function A2(g3, e2, C2) {
          var I2;
          return cn(this, A2), (I2 = t2.call(this, g3, e2, C2))._setMargins(C2), I2;
        }
        return kd(A2, [{
          key: "resize",
          value: function(g3, t3, A3) {
            if (this.needsRefresh(t3, A3)) {
              var e2 = this.getDimensionsFromLabel(g3, t3, A3).width + this.margin.right + this.margin.left;
              this.width = e2, this.height = e2, this.radius = this.width / 2;
            }
          }
        }, {
          key: "draw",
          value: function(g3, t3, A3, e2, C2, I2) {
            this.resize(g3, e2, C2), this.left = t3 - this.width / 2, this.top = A3 - this.height / 2, this.initContextForDraw(g3, I2), We(g3, t3 - this.width / 2, A3 - this.height / 2, this.width, this.height), this.performFill(g3, I2), this.updateBoundingBox(t3, A3, g3, e2, C2), this.labelModule.draw(g3, this.left + this.textSize.width / 2 + this.margin.left, this.top + this.textSize.height / 2 + this.margin.top, e2, C2);
          }
        }, {
          key: "distanceToBorder",
          value: function(g3, t3) {
            return this._distanceToBorder(g3, t3);
          }
        }]), A2;
      }($D);
      function uN(g2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !MT) return false;
          if (MT.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(MT(Boolean, [], function() {
            })), true;
          } catch (g3) {
            return false;
          }
        }();
        return function() {
          var A2, e2 = nb(g2);
          if (t2) {
            var C2 = nb(this).constructor;
            A2 = MT(e2, arguments, C2);
          } else A2 = e2.apply(this, arguments);
          return Ib(this, A2);
        };
      }
      var pN = function(g2) {
        Cb(A2, g2);
        var t2 = uN(A2);
        function A2(g3, e2, C2) {
          return cn(this, A2), t2.call(this, g3, e2, C2);
        }
        return kd(A2, [{
          key: "draw",
          value: function(g3, t3, A3, e2, C2, I2) {
            return this._drawShape(g3, "diamond", 4, t3, A3, e2, C2, I2);
          }
        }, {
          key: "distanceToBorder",
          value: function(g3, t3) {
            return this._distanceToBorder(g3, t3);
          }
        }]), A2;
      }(rN);
      function fN(g2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !MT) return false;
          if (MT.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(MT(Boolean, [], function() {
            })), true;
          } catch (g3) {
            return false;
          }
        }();
        return function() {
          var A2, e2 = nb(g2);
          if (t2) {
            var C2 = nb(this).constructor;
            A2 = MT(e2, arguments, C2);
          } else A2 = e2.apply(this, arguments);
          return Ib(this, A2);
        };
      }
      var vN = function(g2) {
        Cb(A2, g2);
        var t2 = fN(A2);
        function A2(g3, e2, C2) {
          return cn(this, A2), t2.call(this, g3, e2, C2);
        }
        return kd(A2, [{
          key: "draw",
          value: function(g3, t3, A3, e2, C2, I2) {
            return this._drawShape(g3, "circle", 2, t3, A3, e2, C2, I2);
          }
        }, {
          key: "distanceToBorder",
          value: function(g3) {
            return g3 && this.resize(g3), this.options.size;
          }
        }]), A2;
      }(rN);
      function yN(g2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !MT) return false;
          if (MT.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(MT(Boolean, [], function() {
            })), true;
          } catch (g3) {
            return false;
          }
        }();
        return function() {
          var A2, e2 = nb(g2);
          if (t2) {
            var C2 = nb(this).constructor;
            A2 = MT(e2, arguments, C2);
          } else A2 = e2.apply(this, arguments);
          return Ib(this, A2);
        };
      }
      var mN = function(g2) {
        Cb(A2, g2);
        var t2 = yN(A2);
        function A2(g3, e2, C2) {
          return cn(this, A2), t2.call(this, g3, e2, C2);
        }
        return kd(A2, [{
          key: "resize",
          value: function(g3) {
            var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.selected, A3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.hover;
            if (this.needsRefresh(t3, A3)) {
              var e2 = this.getDimensionsFromLabel(g3, t3, A3);
              this.height = 2 * e2.height, this.width = e2.width + e2.height, this.radius = 0.5 * this.width;
            }
          }
        }, {
          key: "draw",
          value: function(g3, t3, A3, e2, C2, I2) {
            this.resize(g3, e2, C2), this.left = t3 - 0.5 * this.width, this.top = A3 - 0.5 * this.height, this.initContextForDraw(g3, I2), Ye(g3, this.left, this.top, this.width, this.height), this.performFill(g3, I2), this.updateBoundingBox(t3, A3, g3, e2, C2), this.labelModule.draw(g3, t3, A3, e2, C2);
          }
        }, {
          key: "distanceToBorder",
          value: function(g3, t3) {
            g3 && this.resize(g3);
            var A3 = 0.5 * this.width, e2 = 0.5 * this.height, C2 = Math.sin(t3) * A3, I2 = Math.cos(t3) * e2;
            return A3 * e2 / Math.sqrt(C2 * C2 + I2 * I2);
          }
        }]), A2;
      }($D);
      function bN(g2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !MT) return false;
          if (MT.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(MT(Boolean, [], function() {
            })), true;
          } catch (g3) {
            return false;
          }
        }();
        return function() {
          var A2, e2 = nb(g2);
          if (t2) {
            var C2 = nb(this).constructor;
            A2 = MT(e2, arguments, C2);
          } else A2 = e2.apply(this, arguments);
          return Ib(this, A2);
        };
      }
      var wN = function(g2) {
        Cb(A2, g2);
        var t2 = bN(A2);
        function A2(g3, e2, C2) {
          var I2;
          return cn(this, A2), (I2 = t2.call(this, g3, e2, C2))._setMargins(C2), I2;
        }
        return kd(A2, [{
          key: "resize",
          value: function(g3, t3, A3) {
            this.needsRefresh(t3, A3) && (this.iconSize = {
              width: Number(this.options.icon.size),
              height: Number(this.options.icon.size)
            }, this.width = this.iconSize.width + this.margin.right + this.margin.left, this.height = this.iconSize.height + this.margin.top + this.margin.bottom, this.radius = 0.5 * this.width);
          }
        }, {
          key: "draw",
          value: function(g3, t3, A3, e2, C2, I2) {
            var i2 = this;
            return this.resize(g3, e2, C2), this.options.icon.size = this.options.icon.size || 50, this.left = t3 - this.width / 2, this.top = A3 - this.height / 2, this._icon(g3, t3, A3, e2, C2, I2), {
              drawExternalLabel: function() {
                if (void 0 !== i2.options.label) {
                  i2.labelModule.draw(g3, i2.left + i2.iconSize.width / 2 + i2.margin.left, A3 + i2.height / 2 + 5, e2);
                }
                i2.updateBoundingBox(t3, A3);
              }
            };
          }
        }, {
          key: "updateBoundingBox",
          value: function(g3, t3) {
            if (this.boundingBox.top = t3 - 0.5 * this.options.icon.size, this.boundingBox.left = g3 - 0.5 * this.options.icon.size, this.boundingBox.right = g3 + 0.5 * this.options.icon.size, this.boundingBox.bottom = t3 + 0.5 * this.options.icon.size, void 0 !== this.options.label && this.labelModule.size.width > 0) {
              this.boundingBox.left = Math.min(this.boundingBox.left, this.labelModule.size.left), this.boundingBox.right = Math.max(this.boundingBox.right, this.labelModule.size.left + this.labelModule.size.width), this.boundingBox.bottom = Math.max(this.boundingBox.bottom, this.boundingBox.bottom + this.labelModule.size.height + 5);
            }
          }
        }, {
          key: "_icon",
          value: function(g3, t3, A3, e2, C2, I2) {
            var i2 = Number(this.options.icon.size);
            void 0 !== this.options.icon.code ? (g3.font = [null != this.options.icon.weight ? this.options.icon.weight : e2 ? "bold" : "", (null != this.options.icon.weight && e2 ? 5 : 0) + i2 + "px", this.options.icon.face].join(" "), g3.fillStyle = this.options.icon.color || "black", g3.textAlign = "center", g3.textBaseline = "middle", this.enableShadow(g3, I2), g3.fillText(this.options.icon.code, t3, A3), this.disableShadow(g3, I2)) : console.error("When using the icon shape, you need to define the code in the icon options object. This can be done per node or globally.");
          }
        }, {
          key: "distanceToBorder",
          value: function(g3, t3) {
            return this._distanceToBorder(g3, t3);
          }
        }]), A2;
      }($D);
      function kN(g2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !MT) return false;
          if (MT.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(MT(Boolean, [], function() {
            })), true;
          } catch (g3) {
            return false;
          }
        }();
        return function() {
          var A2, e2 = nb(g2);
          if (t2) {
            var C2 = nb(this).constructor;
            A2 = MT(e2, arguments, C2);
          } else A2 = e2.apply(this, arguments);
          return Ib(this, A2);
        };
      }
      var xN = function(g2) {
        Cb(A2, g2);
        var t2 = kN(A2);
        function A2(g3, e2, C2, I2, i2) {
          var o2;
          return cn(this, A2), (o2 = t2.call(this, g3, e2, C2)).setImages(I2, i2), o2;
        }
        return kd(A2, [{
          key: "resize",
          value: function(g3) {
            var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.selected, A3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.hover;
            if (void 0 === this.imageObj.src || void 0 === this.imageObj.width || void 0 === this.imageObj.height) {
              var e2 = 2 * this.options.size;
              return this.width = e2, void (this.height = e2);
            }
            this.needsRefresh(t3, A3) && this._resizeImage();
          }
        }, {
          key: "draw",
          value: function(g3, t3, A3, e2, C2, I2) {
            g3.save(), this.switchImages(e2), this.resize();
            var i2 = t3, o2 = A3;
            if ("top-left" === this.options.shapeProperties.coordinateOrigin ? (this.left = t3, this.top = A3, i2 += this.width / 2, o2 += this.height / 2) : (this.left = t3 - this.width / 2, this.top = A3 - this.height / 2), true === this.options.shapeProperties.useBorderWithImage) {
              var n2 = this.options.borderWidth, r2 = this.options.borderWidthSelected || 2 * this.options.borderWidth, s2 = (e2 ? r2 : n2) / this.body.view.scale;
              g3.lineWidth = Math.min(this.width, s2), g3.beginPath();
              var a2 = e2 ? this.options.color.highlight.border : C2 ? this.options.color.hover.border : this.options.color.border, d2 = e2 ? this.options.color.highlight.background : C2 ? this.options.color.hover.background : this.options.color.background;
              void 0 !== I2.opacity && (a2 = ev(a2, I2.opacity), d2 = ev(d2, I2.opacity)), g3.strokeStyle = a2, g3.fillStyle = d2, g3.rect(this.left - 0.5 * g3.lineWidth, this.top - 0.5 * g3.lineWidth, this.width + g3.lineWidth, this.height + g3.lineWidth), Bu(g3).call(g3), this.performStroke(g3, I2), g3.closePath();
            }
            this._drawImageAtPosition(g3, I2), this._drawImageLabel(g3, i2, o2, e2, C2), this.updateBoundingBox(t3, A3), g3.restore();
          }
        }, {
          key: "updateBoundingBox",
          value: function(g3, t3) {
            this.resize(), "top-left" === this.options.shapeProperties.coordinateOrigin ? (this.left = g3, this.top = t3) : (this.left = g3 - this.width / 2, this.top = t3 - this.height / 2), this.boundingBox.left = this.left, this.boundingBox.top = this.top, this.boundingBox.bottom = this.top + this.height, this.boundingBox.right = this.left + this.width, void 0 !== this.options.label && this.labelModule.size.width > 0 && (this.boundingBox.left = Math.min(this.boundingBox.left, this.labelModule.size.left), this.boundingBox.right = Math.max(this.boundingBox.right, this.labelModule.size.left + this.labelModule.size.width), this.boundingBox.bottom = Math.max(this.boundingBox.bottom, this.boundingBox.bottom + this.labelOffset));
          }
        }, {
          key: "distanceToBorder",
          value: function(g3, t3) {
            return this._distanceToBorder(g3, t3);
          }
        }]), A2;
      }(eN);
      function EN(g2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !MT) return false;
          if (MT.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(MT(Boolean, [], function() {
            })), true;
          } catch (g3) {
            return false;
          }
        }();
        return function() {
          var A2, e2 = nb(g2);
          if (t2) {
            var C2 = nb(this).constructor;
            A2 = MT(e2, arguments, C2);
          } else A2 = e2.apply(this, arguments);
          return Ib(this, A2);
        };
      }
      var ON = function(g2) {
        Cb(A2, g2);
        var t2 = EN(A2);
        function A2(g3, e2, C2) {
          return cn(this, A2), t2.call(this, g3, e2, C2);
        }
        return kd(A2, [{
          key: "draw",
          value: function(g3, t3, A3, e2, C2, I2) {
            return this._drawShape(g3, "square", 2, t3, A3, e2, C2, I2);
          }
        }, {
          key: "distanceToBorder",
          value: function(g3, t3) {
            return this._distanceToBorder(g3, t3);
          }
        }]), A2;
      }(rN);
      function TN(g2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !MT) return false;
          if (MT.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(MT(Boolean, [], function() {
            })), true;
          } catch (g3) {
            return false;
          }
        }();
        return function() {
          var A2, e2 = nb(g2);
          if (t2) {
            var C2 = nb(this).constructor;
            A2 = MT(e2, arguments, C2);
          } else A2 = e2.apply(this, arguments);
          return Ib(this, A2);
        };
      }
      var DN = function(g2) {
        Cb(A2, g2);
        var t2 = TN(A2);
        function A2(g3, e2, C2) {
          return cn(this, A2), t2.call(this, g3, e2, C2);
        }
        return kd(A2, [{
          key: "draw",
          value: function(g3, t3, A3, e2, C2, I2) {
            return this._drawShape(g3, "hexagon", 4, t3, A3, e2, C2, I2);
          }
        }, {
          key: "distanceToBorder",
          value: function(g3, t3) {
            return this._distanceToBorder(g3, t3);
          }
        }]), A2;
      }(rN);
      function NN(g2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !MT) return false;
          if (MT.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(MT(Boolean, [], function() {
            })), true;
          } catch (g3) {
            return false;
          }
        }();
        return function() {
          var A2, e2 = nb(g2);
          if (t2) {
            var C2 = nb(this).constructor;
            A2 = MT(e2, arguments, C2);
          } else A2 = e2.apply(this, arguments);
          return Ib(this, A2);
        };
      }
      var RN = function(g2) {
        Cb(A2, g2);
        var t2 = NN(A2);
        function A2(g3, e2, C2) {
          return cn(this, A2), t2.call(this, g3, e2, C2);
        }
        return kd(A2, [{
          key: "draw",
          value: function(g3, t3, A3, e2, C2, I2) {
            return this._drawShape(g3, "star", 4, t3, A3, e2, C2, I2);
          }
        }, {
          key: "distanceToBorder",
          value: function(g3, t3) {
            return this._distanceToBorder(g3, t3);
          }
        }]), A2;
      }(rN);
      function PN(g2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !MT) return false;
          if (MT.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(MT(Boolean, [], function() {
            })), true;
          } catch (g3) {
            return false;
          }
        }();
        return function() {
          var A2, e2 = nb(g2);
          if (t2) {
            var C2 = nb(this).constructor;
            A2 = MT(e2, arguments, C2);
          } else A2 = e2.apply(this, arguments);
          return Ib(this, A2);
        };
      }
      var MN = function(g2) {
        Cb(A2, g2);
        var t2 = PN(A2);
        function A2(g3, e2, C2) {
          var I2;
          return cn(this, A2), (I2 = t2.call(this, g3, e2, C2))._setMargins(C2), I2;
        }
        return kd(A2, [{
          key: "resize",
          value: function(g3, t3, A3) {
            this.needsRefresh(t3, A3) && (this.textSize = this.labelModule.getTextSize(g3, t3, A3), this.width = this.textSize.width + this.margin.right + this.margin.left, this.height = this.textSize.height + this.margin.top + this.margin.bottom, this.radius = 0.5 * this.width);
          }
        }, {
          key: "draw",
          value: function(g3, t3, A3, e2, C2, I2) {
            this.resize(g3, e2, C2), this.left = t3 - this.width / 2, this.top = A3 - this.height / 2, this.enableShadow(g3, I2), this.labelModule.draw(g3, this.left + this.textSize.width / 2 + this.margin.left, this.top + this.textSize.height / 2 + this.margin.top, e2, C2), this.disableShadow(g3, I2), this.updateBoundingBox(t3, A3, g3, e2, C2);
          }
        }, {
          key: "distanceToBorder",
          value: function(g3, t3) {
            return this._distanceToBorder(g3, t3);
          }
        }]), A2;
      }($D);
      function BN(g2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !MT) return false;
          if (MT.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(MT(Boolean, [], function() {
            })), true;
          } catch (g3) {
            return false;
          }
        }();
        return function() {
          var A2, e2 = nb(g2);
          if (t2) {
            var C2 = nb(this).constructor;
            A2 = MT(e2, arguments, C2);
          } else A2 = e2.apply(this, arguments);
          return Ib(this, A2);
        };
      }
      var zN = function(g2) {
        Cb(A2, g2);
        var t2 = BN(A2);
        function A2(g3, e2, C2) {
          return cn(this, A2), t2.call(this, g3, e2, C2);
        }
        return kd(A2, [{
          key: "draw",
          value: function(g3, t3, A3, e2, C2, I2) {
            return this._drawShape(g3, "triangle", 3, t3, A3, e2, C2, I2);
          }
        }, {
          key: "distanceToBorder",
          value: function(g3, t3) {
            return this._distanceToBorder(g3, t3);
          }
        }]), A2;
      }(rN);
      function SN(g2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !MT) return false;
          if (MT.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(MT(Boolean, [], function() {
            })), true;
          } catch (g3) {
            return false;
          }
        }();
        return function() {
          var A2, e2 = nb(g2);
          if (t2) {
            var C2 = nb(this).constructor;
            A2 = MT(e2, arguments, C2);
          } else A2 = e2.apply(this, arguments);
          return Ib(this, A2);
        };
      }
      var ZN = function(g2) {
        Cb(A2, g2);
        var t2 = SN(A2);
        function A2(g3, e2, C2) {
          return cn(this, A2), t2.call(this, g3, e2, C2);
        }
        return kd(A2, [{
          key: "draw",
          value: function(g3, t3, A3, e2, C2, I2) {
            return this._drawShape(g3, "triangleDown", 3, t3, A3, e2, C2, I2);
          }
        }, {
          key: "distanceToBorder",
          value: function(g3, t3) {
            return this._distanceToBorder(g3, t3);
          }
        }]), A2;
      }(rN);
      function FN(g2, t2) {
        var A2 = Lh(g2);
        if (BT) {
          var e2 = BT(g2);
          t2 && (e2 = pc(e2).call(e2, function(t3) {
            return WT(g2, t3).enumerable;
          })), A2.push.apply(A2, e2);
        }
        return A2;
      }
      function GN(g2) {
        for (var t2 = 1; t2 < arguments.length; t2++) {
          var A2, e2, C2 = null != arguments[t2] ? arguments[t2] : {};
          t2 % 2 ? Cl(A2 = FN(Object(C2), true)).call(A2, function(t3) {
            rb(g2, t3, C2[t3]);
          }) : HT ? AD(g2, HT(C2)) : Cl(e2 = FN(Object(C2))).call(e2, function(t3) {
            fT(g2, t3, WT(C2, t3));
          });
        }
        return g2;
      }
      var jN = function() {
        function g2(t2, A2, e2, C2, I2, i2) {
          cn(this, g2), this.options = av(I2), this.globalOptions = I2, this.defaultOptions = i2, this.body = A2, this.edges = [], this.id = void 0, this.imagelist = e2, this.grouplist = C2, this.x = void 0, this.y = void 0, this.baseSize = this.options.size, this.baseFontSize = this.options.font.size, this.predefinedPosition = false, this.selected = false, this.hover = false, this.labelModule = new qD(this.body, this.options, false), this.setOptions(t2);
        }
        return kd(g2, [{
          key: "attachEdge",
          value: function(g3) {
            var t2;
            -1 === Xc(t2 = this.edges).call(t2, g3) && this.edges.push(g3);
          }
        }, {
          key: "detachEdge",
          value: function(g3) {
            var t2, A2, e2 = Xc(t2 = this.edges).call(t2, g3);
            -1 != e2 && Zl(A2 = this.edges).call(A2, e2, 1);
          }
        }, {
          key: "setOptions",
          value: function(t2) {
            var A2 = this.options.shape;
            if (t2) {
              if (void 0 !== t2.color && (this._localColor = t2.color), void 0 !== t2.id && (this.id = t2.id), void 0 === this.id) throw new Error("Node must have an id");
              g2.checkMass(t2, this.id), void 0 !== t2.x && (null === t2.x ? (this.x = void 0, this.predefinedPosition = false) : (this.x = Gc(t2.x), this.predefinedPosition = true)), void 0 !== t2.y && (null === t2.y ? (this.y = void 0, this.predefinedPosition = false) : (this.y = Gc(t2.y), this.predefinedPosition = true)), void 0 !== t2.size && (this.baseSize = t2.size), void 0 !== t2.value && (t2.value = SD(t2.value)), g2.parseOptions(this.options, t2, true, this.globalOptions, this.grouplist);
              var e2 = [t2, this.options, this.defaultOptions];
              return this.chooser = YD("node", e2), this._load_images(), this.updateLabelModule(t2), void 0 !== t2.opacity && g2.checkOpacity(t2.opacity) && (this.options.opacity = t2.opacity), this.updateShape(A2), void 0 !== t2.hidden || void 0 !== t2.physics;
            }
          }
        }, {
          key: "_load_images",
          value: function() {
            if (("circularImage" === this.options.shape || "image" === this.options.shape) && void 0 === this.options.image) throw new Error("Option image must be defined for node type '" + this.options.shape + "'");
            if (void 0 !== this.options.image) {
              if (void 0 === this.imagelist) throw new Error("Internal Error: No images provided");
              if ("string" == typeof this.options.image) this.imageObj = this.imagelist.load(this.options.image, this.options.brokenImage, this.id);
              else {
                if (void 0 === this.options.image.unselected) throw new Error("No unselected image provided");
                this.imageObj = this.imagelist.load(this.options.image.unselected, this.options.brokenImage, this.id), void 0 !== this.options.image.selected ? this.imageObjAlt = this.imagelist.load(this.options.image.selected, this.options.brokenImage, this.id) : this.imageObjAlt = void 0;
              }
            }
          }
        }, {
          key: "getFormattingValues",
          value: function() {
            var g3 = {
              color: this.options.color.background,
              opacity: this.options.opacity,
              borderWidth: this.options.borderWidth,
              borderColor: this.options.color.border,
              size: this.options.size,
              borderDashes: this.options.shapeProperties.borderDashes,
              borderRadius: this.options.shapeProperties.borderRadius,
              shadow: this.options.shadow.enabled,
              shadowColor: this.options.shadow.color,
              shadowSize: this.options.shadow.size,
              shadowX: this.options.shadow.x,
              shadowY: this.options.shadow.y
            };
            if (this.selected || this.hover ? true === this.chooser ? this.selected ? (null != this.options.borderWidthSelected ? g3.borderWidth = this.options.borderWidthSelected : g3.borderWidth *= 2, g3.color = this.options.color.highlight.background, g3.borderColor = this.options.color.highlight.border, g3.shadow = this.options.shadow.enabled) : this.hover && (g3.color = this.options.color.hover.background, g3.borderColor = this.options.color.hover.border, g3.shadow = this.options.shadow.enabled) : "function" == typeof this.chooser && (this.chooser(g3, this.options.id, this.selected, this.hover), false === g3.shadow && (g3.shadowColor === this.options.shadow.color && g3.shadowSize === this.options.shadow.size && g3.shadowX === this.options.shadow.x && g3.shadowY === this.options.shadow.y || (g3.shadow = true))) : g3.shadow = this.options.shadow.enabled, void 0 !== this.options.opacity) {
              var t2 = this.options.opacity;
              g3.borderColor = ev(g3.borderColor, t2), g3.color = ev(g3.color, t2), g3.shadowColor = ev(g3.shadowColor, t2);
            }
            return g3;
          }
        }, {
          key: "updateLabelModule",
          value: function(t2) {
            void 0 !== this.options.label && null !== this.options.label || (this.options.label = ""), g2.updateGroupOptions(this.options, GN(GN({}, t2), {}, {
              color: t2 && t2.color || this._localColor || void 0
            }), this.grouplist);
            var A2 = this.grouplist.get(this.options.group, false), e2 = [t2, this.options, A2, this.globalOptions, this.defaultOptions];
            this.labelModule.update(this.options, e2), void 0 !== this.labelModule.baseSize && (this.baseFontSize = this.labelModule.baseSize);
          }
        }, {
          key: "updateShape",
          value: function(g3) {
            if (g3 === this.options.shape && this.shape) this.shape.setOptions(this.options, this.imageObj, this.imageObjAlt);
            else switch (this.options.shape) {
              case "box":
                this.shape = new tN(this.options, this.body, this.labelModule);
                break;
              case "circle":
                this.shape = new IN(this.options, this.body, this.labelModule);
                break;
              case "circularImage":
                this.shape = new oN(this.options, this.body, this.labelModule, this.imageObj, this.imageObjAlt);
                break;
              case "custom":
                this.shape = new hN(this.options, this.body, this.labelModule, this.options.ctxRenderer);
                break;
              case "database":
                this.shape = new cN(this.options, this.body, this.labelModule);
                break;
              case "diamond":
                this.shape = new pN(this.options, this.body, this.labelModule);
                break;
              case "dot":
                this.shape = new vN(this.options, this.body, this.labelModule);
                break;
              case "ellipse":
              default:
                this.shape = new mN(this.options, this.body, this.labelModule);
                break;
              case "icon":
                this.shape = new wN(this.options, this.body, this.labelModule);
                break;
              case "image":
                this.shape = new xN(this.options, this.body, this.labelModule, this.imageObj, this.imageObjAlt);
                break;
              case "square":
                this.shape = new ON(this.options, this.body, this.labelModule);
                break;
              case "hexagon":
                this.shape = new DN(this.options, this.body, this.labelModule);
                break;
              case "star":
                this.shape = new RN(this.options, this.body, this.labelModule);
                break;
              case "text":
                this.shape = new MN(this.options, this.body, this.labelModule);
                break;
              case "triangle":
                this.shape = new zN(this.options, this.body, this.labelModule);
                break;
              case "triangleDown":
                this.shape = new ZN(this.options, this.body, this.labelModule);
            }
            this.needsRefresh();
          }
        }, {
          key: "select",
          value: function() {
            this.selected = true, this.needsRefresh();
          }
        }, {
          key: "unselect",
          value: function() {
            this.selected = false, this.needsRefresh();
          }
        }, {
          key: "needsRefresh",
          value: function() {
            this.shape.refreshNeeded = true;
          }
        }, {
          key: "getTitle",
          value: function() {
            return this.options.title;
          }
        }, {
          key: "distanceToBorder",
          value: function(g3, t2) {
            return this.shape.distanceToBorder(g3, t2);
          }
        }, {
          key: "isFixed",
          value: function() {
            return this.options.fixed.x && this.options.fixed.y;
          }
        }, {
          key: "isSelected",
          value: function() {
            return this.selected;
          }
        }, {
          key: "getValue",
          value: function() {
            return this.options.value;
          }
        }, {
          key: "getLabelSize",
          value: function() {
            return this.labelModule.size();
          }
        }, {
          key: "setValueRange",
          value: function(g3, t2, A2) {
            if (void 0 !== this.options.value) {
              var e2 = this.options.scaling.customScalingFunction(g3, t2, A2, this.options.value), C2 = this.options.scaling.max - this.options.scaling.min;
              if (true === this.options.scaling.label.enabled) {
                var I2 = this.options.scaling.label.max - this.options.scaling.label.min;
                this.options.font.size = this.options.scaling.label.min + e2 * I2;
              }
              this.options.size = this.options.scaling.min + e2 * C2;
            } else this.options.size = this.baseSize, this.options.font.size = this.baseFontSize;
            this.updateLabelModule();
          }
        }, {
          key: "draw",
          value: function(g3) {
            var t2 = this.getFormattingValues();
            return this.shape.draw(g3, this.x, this.y, this.selected, this.hover, t2) || {};
          }
        }, {
          key: "updateBoundingBox",
          value: function(g3) {
            this.shape.updateBoundingBox(this.x, this.y, g3);
          }
        }, {
          key: "resize",
          value: function(g3) {
            var t2 = this.getFormattingValues();
            this.shape.resize(g3, this.selected, this.hover, t2);
          }
        }, {
          key: "getItemsOnPoint",
          value: function(g3) {
            var t2 = [];
            return this.labelModule.visible() && WD(this.labelModule.getSize(), g3) && t2.push({
              nodeId: this.id,
              labelId: 0
            }), WD(this.shape.boundingBox, g3) && t2.push({
              nodeId: this.id
            }), t2;
          }
        }, {
          key: "isOverlappingWith",
          value: function(g3) {
            return this.shape.left < g3.right && this.shape.left + this.shape.width > g3.left && this.shape.top < g3.bottom && this.shape.top + this.shape.height > g3.top;
          }
        }, {
          key: "isBoundingBoxOverlappingWith",
          value: function(g3) {
            return this.shape.boundingBox.left < g3.right && this.shape.boundingBox.right > g3.left && this.shape.boundingBox.top < g3.bottom && this.shape.boundingBox.bottom > g3.top;
          }
        }], [{
          key: "checkOpacity",
          value: function(g3) {
            return 0 <= g3 && g3 <= 1;
          }
        }, {
          key: "checkCoordinateOrigin",
          value: function(g3) {
            return void 0 === g3 || "center" === g3 || "top-left" === g3;
          }
        }, {
          key: "updateGroupOptions",
          value: function(t2, A2, e2) {
            var C2;
            if (void 0 !== e2) {
              var I2 = t2.group;
              if (void 0 !== A2 && void 0 !== A2.group && I2 !== A2.group) throw new Error("updateGroupOptions: group values in options don't match.");
              if ("number" == typeof I2 || "string" == typeof I2 && "" != I2) {
                var i2 = e2.get(I2);
                void 0 !== i2.opacity && void 0 === A2.opacity && (g2.checkOpacity(i2.opacity) || (console.error("Invalid option for node opacity. Value must be between 0 and 1, found: " + i2.opacity), i2.opacity = void 0));
                var o2 = pc(C2 = VD(A2)).call(C2, function(g3) {
                  return null != A2[g3];
                });
                o2.push("font"), Jf(o2, t2, i2), t2.color = Iv(t2.color);
              }
            }
          }
        }, {
          key: "parseOptions",
          value: function(t2, A2) {
            var e2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], C2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, I2 = arguments.length > 4 ? arguments[4] : void 0;
            if (Jf(["color", "fixed", "shadow"], t2, A2, e2), g2.checkMass(A2), void 0 !== t2.opacity && (g2.checkOpacity(t2.opacity) || (console.error("Invalid option for node opacity. Value must be between 0 and 1, found: " + t2.opacity), t2.opacity = void 0)), void 0 !== A2.opacity && (g2.checkOpacity(A2.opacity) || (console.error("Invalid option for node opacity. Value must be between 0 and 1, found: " + A2.opacity), A2.opacity = void 0)), A2.shapeProperties && !g2.checkCoordinateOrigin(A2.shapeProperties.coordinateOrigin) && console.error("Invalid option for node coordinateOrigin, found: " + A2.shapeProperties.coordinateOrigin), dv(t2, A2, "shadow", C2), void 0 !== A2.color && null !== A2.color) {
              var i2 = Iv(A2.color);
              Hf(t2.color, i2);
            } else true === e2 && null === A2.color && (t2.color = av(C2.color));
            void 0 !== A2.fixed && null !== A2.fixed && ("boolean" == typeof A2.fixed ? (t2.fixed.x = A2.fixed, t2.fixed.y = A2.fixed) : (void 0 !== A2.fixed.x && "boolean" == typeof A2.fixed.x && (t2.fixed.x = A2.fixed.x), void 0 !== A2.fixed.y && "boolean" == typeof A2.fixed.y && (t2.fixed.y = A2.fixed.y))), true === e2 && null === A2.font && (t2.font = av(C2.font)), g2.updateGroupOptions(t2, A2, I2), void 0 !== A2.scaling && dv(t2.scaling, A2.scaling, "label", C2.scaling);
          }
        }, {
          key: "checkMass",
          value: function(g3, t2) {
            if (void 0 !== g3.mass && g3.mass <= 0) {
              var A2 = "";
              void 0 !== t2 && (A2 = " in node id: " + t2), console.error("%cNegative or zero mass disallowed" + A2 + ", setting mass to 1.", Tv), g3.mass = 1;
            }
          }
        }]), g2;
      }();
      function LN(g2, t2) {
        var A2 = void 0 !== uh && ln(g2) || g2["@@iterator"];
        if (!A2) {
          if (Rh(g2) || (A2 = function(g3, t3) {
            var A3;
            if (!g3) return;
            if ("string" == typeof g3) return VN(g3, t3);
            var e3 = wh(A3 = Object.prototype.toString.call(g3)).call(A3, 8, -1);
            "Object" === e3 && g3.constructor && (e3 = g3.constructor.name);
            if ("Map" === e3 || "Set" === e3) return Uo(g3);
            if ("Arguments" === e3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e3)) return VN(g3, t3);
          }(g2)) || t2 && g2 && "number" == typeof g2.length) {
            A2 && (g2 = A2);
            var e2 = 0, C2 = function() {
            };
            return {
              s: C2,
              n: function() {
                return e2 >= g2.length ? {
                  done: true
                } : {
                  done: false,
                  value: g2[e2++]
                };
              },
              e: function(g3) {
                throw g3;
              },
              f: C2
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var I2, i2 = true, o2 = false;
        return {
          s: function() {
            A2 = A2.call(g2);
          },
          n: function() {
            var g3 = A2.next();
            return i2 = g3.done, g3;
          },
          e: function(g3) {
            o2 = true, I2 = g3;
          },
          f: function() {
            try {
              i2 || null == A2.return || A2.return();
            } finally {
              if (o2) throw I2;
            }
          }
        };
      }
      function VN(g2, t2) {
        (null == t2 || t2 > g2.length) && (t2 = g2.length);
        for (var A2 = 0, e2 = new Array(t2); A2 < t2; A2++) e2[A2] = g2[A2];
        return e2;
      }
      var YN = function() {
        function g2(t2, A2, e2, C2) {
          var I2, i2 = this;
          if (cn(this, g2), this.body = t2, this.images = A2, this.groups = e2, this.layoutEngine = C2, this.body.functions.createNode = je(I2 = this.create).call(I2, this), this.nodesListeners = {
            add: function(g3, t3) {
              i2.add(t3.items);
            },
            update: function(g3, t3) {
              i2.update(t3.items, t3.data, t3.oldData);
            },
            remove: function(g3, t3) {
              i2.remove(t3.items);
            }
          }, this.defaultOptions = {
            borderWidth: 1,
            borderWidthSelected: void 0,
            brokenImage: void 0,
            color: {
              border: "#2B7CE9",
              background: "#97C2FC",
              highlight: {
                border: "#2B7CE9",
                background: "#D2E5FF"
              },
              hover: {
                border: "#2B7CE9",
                background: "#D2E5FF"
              }
            },
            opacity: void 0,
            fixed: {
              x: false,
              y: false
            },
            font: {
              color: "#343434",
              size: 14,
              face: "arial",
              background: "none",
              strokeWidth: 0,
              strokeColor: "#ffffff",
              align: "center",
              vadjust: 0,
              multi: false,
              bold: {
                mod: "bold"
              },
              boldital: {
                mod: "bold italic"
              },
              ital: {
                mod: "italic"
              },
              mono: {
                mod: "",
                size: 15,
                face: "monospace",
                vadjust: 2
              }
            },
            group: void 0,
            hidden: false,
            icon: {
              face: "FontAwesome",
              code: void 0,
              size: 50,
              color: "#2B7CE9"
            },
            image: void 0,
            imagePadding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            },
            label: void 0,
            labelHighlightBold: true,
            level: void 0,
            margin: {
              top: 5,
              right: 5,
              bottom: 5,
              left: 5
            },
            mass: 1,
            physics: true,
            scaling: {
              min: 10,
              max: 30,
              label: {
                enabled: false,
                min: 14,
                max: 30,
                maxVisible: 30,
                drawThreshold: 5
              },
              customScalingFunction: function(g3, t3, A3, e3) {
                if (t3 === g3) return 0.5;
                var C3 = 1 / (t3 - g3);
                return Math.max(0, (e3 - g3) * C3);
              }
            },
            shadow: {
              enabled: false,
              color: "rgba(0,0,0,0.5)",
              size: 10,
              x: 5,
              y: 5
            },
            shape: "ellipse",
            shapeProperties: {
              borderDashes: false,
              borderRadius: 6,
              interpolation: true,
              useImageSize: false,
              useBorderWithImage: false,
              coordinateOrigin: "center"
            },
            size: 25,
            title: void 0,
            value: void 0,
            x: void 0,
            y: void 0
          }, this.defaultOptions.mass <= 0) throw "Internal error: mass in defaultOptions of NodesHandler may not be zero or negative";
          this.options = av(this.defaultOptions), this.bindEventListeners();
        }
        return kd(g2, [{
          key: "bindEventListeners",
          value: function() {
            var g3, t2, A2 = this;
            this.body.emitter.on("refreshNodes", je(g3 = this.refresh).call(g3, this)), this.body.emitter.on("refresh", je(t2 = this.refresh).call(t2, this)), this.body.emitter.on("destroy", function() {
              tv(A2.nodesListeners, function(g4, t3) {
                A2.body.data.nodes && A2.body.data.nodes.off(t3, g4);
              }), delete A2.body.functions.createNode, delete A2.nodesListeners.add, delete A2.nodesListeners.update, delete A2.nodesListeners.remove, delete A2.nodesListeners;
            });
          }
        }, {
          key: "setOptions",
          value: function(g3) {
            if (void 0 !== g3) {
              if (jN.parseOptions(this.options, g3), void 0 !== g3.opacity && (jm(g3.opacity) || !Ym(g3.opacity) || g3.opacity < 0 || g3.opacity > 1 ? console.error("Invalid option for node opacity. Value must be between 0 and 1, found: " + g3.opacity) : this.options.opacity = g3.opacity), void 0 !== g3.shape) for (var t2 in this.body.nodes) Object.prototype.hasOwnProperty.call(this.body.nodes, t2) && this.body.nodes[t2].updateShape();
              if (void 0 !== g3.font || void 0 !== g3.widthConstraint || void 0 !== g3.heightConstraint) for (var A2 = 0, e2 = Lh(this.body.nodes); A2 < e2.length; A2++) {
                var C2 = e2[A2];
                this.body.nodes[C2].updateLabelModule(), this.body.nodes[C2].needsRefresh();
              }
              if (void 0 !== g3.size) for (var I2 in this.body.nodes) Object.prototype.hasOwnProperty.call(this.body.nodes, I2) && this.body.nodes[I2].needsRefresh();
              void 0 === g3.hidden && void 0 === g3.physics || this.body.emitter.emit("_dataChanged");
            }
          }
        }, {
          key: "setData",
          value: function(g3) {
            var t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], A2 = this.body.data.nodes;
            if (kD("id", g3)) this.body.data.nodes = g3;
            else if (Rh(g3)) this.body.data.nodes = new mD(), this.body.data.nodes.add(g3);
            else {
              if (g3) throw new TypeError("Array or DataSet expected");
              this.body.data.nodes = new mD();
            }
            if (A2 && tv(this.nodesListeners, function(g4, t3) {
              A2.off(t3, g4);
            }), this.body.nodes = {}, this.body.data.nodes) {
              var e2 = this;
              tv(this.nodesListeners, function(g4, t3) {
                e2.body.data.nodes.on(t3, g4);
              });
              var C2 = this.body.data.nodes.getIds();
              this.add(C2, true);
            }
            false === t2 && this.body.emitter.emit("_dataChanged");
          }
        }, {
          key: "add",
          value: function(g3) {
            for (var t2, A2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], e2 = [], C2 = 0; C2 < g3.length; C2++) {
              t2 = g3[C2];
              var I2 = this.body.data.nodes.get(t2), i2 = this.create(I2);
              e2.push(i2), this.body.nodes[t2] = i2;
            }
            this.layoutEngine.positionInitially(e2), false === A2 && this.body.emitter.emit("_dataChanged");
          }
        }, {
          key: "update",
          value: function(g3, t2, A2) {
            for (var e2 = this.body.nodes, C2 = false, I2 = 0; I2 < g3.length; I2++) {
              var i2 = g3[I2], o2 = e2[i2], n2 = t2[I2];
              void 0 !== o2 ? o2.setOptions(n2) && (C2 = true) : (C2 = true, o2 = this.create(n2), e2[i2] = o2);
            }
            C2 || void 0 === A2 || (C2 = Xm(t2).call(t2, function(g4, t3) {
              var e3 = A2[t3];
              return e3 && e3.level !== g4.level;
            })), true === C2 ? this.body.emitter.emit("_dataChanged") : this.body.emitter.emit("_dataUpdated");
          }
        }, {
          key: "remove",
          value: function(g3) {
            for (var t2 = this.body.nodes, A2 = 0; A2 < g3.length; A2++) {
              delete t2[g3[A2]];
            }
            this.body.emitter.emit("_dataChanged");
          }
        }, {
          key: "create",
          value: function(g3) {
            return new (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jN)(g3, this.body, this.images, this.groups, this.options, this.defaultOptions);
          }
        }, {
          key: "refresh",
          value: function() {
            var g3 = this, t2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            tv(this.body.nodes, function(A2, e2) {
              var C2 = g3.body.data.nodes.get(e2);
              void 0 !== C2 && (true === t2 && A2.setOptions({
                x: null,
                y: null
              }), A2.setOptions({
                fixed: false
              }), A2.setOptions(C2));
            });
          }
        }, {
          key: "getPositions",
          value: function(g3) {
            var t2 = {};
            if (void 0 !== g3) {
              if (true === Rh(g3)) {
                for (var A2 = 0; A2 < g3.length; A2++) if (void 0 !== this.body.nodes[g3[A2]]) {
                  var e2 = this.body.nodes[g3[A2]];
                  t2[g3[A2]] = {
                    x: Math.round(e2.x),
                    y: Math.round(e2.y)
                  };
                }
              } else if (void 0 !== this.body.nodes[g3]) {
                var C2 = this.body.nodes[g3];
                t2[g3] = {
                  x: Math.round(C2.x),
                  y: Math.round(C2.y)
                };
              }
            } else for (var I2 = 0; I2 < this.body.nodeIndices.length; I2++) {
              var i2 = this.body.nodes[this.body.nodeIndices[I2]];
              t2[this.body.nodeIndices[I2]] = {
                x: Math.round(i2.x),
                y: Math.round(i2.y)
              };
            }
            return t2;
          }
        }, {
          key: "getPosition",
          value: function(g3) {
            if (null == g3) throw new TypeError("No id was specified for getPosition method.");
            if (null == this.body.nodes[g3]) throw new ReferenceError("NodeId provided for getPosition does not exist. Provided: ".concat(g3));
            return {
              x: Math.round(this.body.nodes[g3].x),
              y: Math.round(this.body.nodes[g3].y)
            };
          }
        }, {
          key: "storePositions",
          value: function() {
            var g3, t2 = [], A2 = this.body.data.nodes.getDataSet(), e2 = LN(A2.get());
            try {
              for (e2.s(); !(g3 = e2.n()).done; ) {
                var C2 = g3.value, I2 = C2.id, i2 = this.body.nodes[I2], o2 = Math.round(i2.x), n2 = Math.round(i2.y);
                C2.x === o2 && C2.y === n2 || t2.push({
                  id: I2,
                  x: o2,
                  y: n2
                });
              }
            } catch (g4) {
              e2.e(g4);
            } finally {
              e2.f();
            }
            A2.update(t2);
          }
        }, {
          key: "getBoundingBox",
          value: function(g3) {
            if (void 0 !== this.body.nodes[g3]) return this.body.nodes[g3].shape.boundingBox;
          }
        }, {
          key: "getConnectedNodes",
          value: function(g3, t2) {
            var A2 = [];
            if (void 0 !== this.body.nodes[g3]) for (var e2 = this.body.nodes[g3], C2 = {}, I2 = 0; I2 < e2.edges.length; I2++) {
              var i2 = e2.edges[I2];
              "to" !== t2 && i2.toId == e2.id ? void 0 === C2[i2.fromId] && (A2.push(i2.fromId), C2[i2.fromId] = true) : "from" !== t2 && i2.fromId == e2.id && void 0 === C2[i2.toId] && (A2.push(i2.toId), C2[i2.toId] = true);
            }
            return A2;
          }
        }, {
          key: "getConnectedEdges",
          value: function(g3) {
            var t2 = [];
            if (void 0 !== this.body.nodes[g3]) for (var A2 = this.body.nodes[g3], e2 = 0; e2 < A2.edges.length; e2++) t2.push(A2.edges[e2].id);
            else console.error("NodeId provided for getConnectedEdges does not exist. Provided: ", g3);
            return t2;
          }
        }, {
          key: "moveNode",
          value: function(g3, t2, A2) {
            var e2 = this;
            void 0 !== this.body.nodes[g3] ? (this.body.nodes[g3].x = Number(t2), this.body.nodes[g3].y = Number(A2), wu(function() {
              e2.body.emitter.emit("startSimulation");
            }, 0)) : console.error("Node id supplied to moveNode does not exist. Provided: ", g3);
          }
        }]), g2;
      }(), WN = qg, QN = P, UN = gg, _N = AA, KN = function(g2) {
        return void 0 !== g2 && (WN(g2, "value") || WN(g2, "writable"));
      }, HN = T, XN = EI;
      TA({
        target: "Reflect",
        stat: true
      }, {
        get: function g2(t2, A2) {
          var e2, C2, I2 = arguments.length < 3 ? t2 : arguments[2];
          return _N(t2) === I2 ? t2[A2] : (e2 = HN.f(t2, A2)) ? KN(e2) ? e2.value : void 0 === e2.get ? void 0 : QN(e2.get, I2) : UN(C2 = XN(t2)) ? g2(C2, A2, I2) : void 0;
        }
      });
      var JN = A(tg.Reflect.get), qN = A(YT);
      function $N() {
        var g2;
        "undefined" != typeof Reflect && JN ? $N = Ab(g2 = JN).call(g2) : $N = function(g3, t2, A2) {
          var e2 = function(g4, t3) {
            for (; !Object.prototype.hasOwnProperty.call(g4, t3) && null !== (g4 = nb(g4)); ) ;
            return g4;
          }(g3, t2);
          if (e2) {
            var C2 = qN(e2, t2);
            return C2.get ? C2.get.call(arguments.length < 3 ? g3 : A2) : C2.value;
          }
        };
        return $N.apply(this, arguments);
      }
      var gR = TA, tR = Math.hypot, AR = Math.abs, eR = Math.sqrt;
      gR({
        target: "Math",
        stat: true,
        arity: 2,
        forced: !!tR && tR(1 / 0, NaN) !== 1 / 0
      }, {
        hypot: function(g2, t2) {
          for (var A2, e2, C2 = 0, I2 = 0, i2 = arguments.length, o2 = 0; I2 < i2; ) o2 < (A2 = AR(arguments[I2++])) ? (C2 = C2 * (e2 = o2 / A2) * e2 + 1, o2 = A2) : C2 += A2 > 0 ? (e2 = A2 / o2) * e2 : A2;
          return o2 === 1 / 0 ? 1 / 0 : o2 * eR(C2);
        }
      });
      var CR = A(tg.Math.hypot);
      function IR(g2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !MT) return false;
          if (MT.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(MT(Boolean, [], function() {
            })), true;
          } catch (g3) {
            return false;
          }
        }();
        return function() {
          var A2, e2 = nb(g2);
          if (t2) {
            var C2 = nb(this).constructor;
            A2 = MT(e2, arguments, C2);
          } else A2 = e2.apply(this, arguments);
          return Ib(this, A2);
        };
      }
      var iR = function() {
        function g2() {
          cn(this, g2);
        }
        return kd(g2, null, [{
          key: "transform",
          value: function(g3, t2) {
            Rh(g3) || (g3 = [g3]);
            for (var A2 = t2.point.x, e2 = t2.point.y, C2 = t2.angle, I2 = t2.length, i2 = 0; i2 < g3.length; ++i2) {
              var o2 = g3[i2], n2 = o2.x * Math.cos(C2) - o2.y * Math.sin(C2), r2 = o2.x * Math.sin(C2) + o2.y * Math.cos(C2);
              o2.x = A2 + I2 * n2, o2.y = e2 + I2 * r2;
            }
          }
        }, {
          key: "drawPath",
          value: function(g3, t2) {
            g3.beginPath(), g3.moveTo(t2[0].x, t2[0].y);
            for (var A2 = 1; A2 < t2.length; ++A2) g3.lineTo(t2[A2].x, t2[A2].y);
            g3.closePath();
          }
        }]), g2;
      }(), oR = function(g2) {
        Cb(A2, g2);
        var t2 = IR(A2);
        function A2() {
          return cn(this, A2), t2.apply(this, arguments);
        }
        return kd(A2, null, [{
          key: "draw",
          value: function(g3, t3) {
            if (t3.image) {
              g3.save(), g3.translate(t3.point.x, t3.point.y), g3.rotate(Math.PI / 2 + t3.angle);
              var A3 = null != t3.imageWidth ? t3.imageWidth : t3.image.width, e2 = null != t3.imageHeight ? t3.imageHeight : t3.image.height;
              t3.image.drawImageAtPosition(g3, 1, -A3 / 2, 0, A3, e2), g3.restore();
            }
            return false;
          }
        }]), A2;
      }(iR), nR = function(g2) {
        Cb(A2, g2);
        var t2 = IR(A2);
        function A2() {
          return cn(this, A2), t2.apply(this, arguments);
        }
        return kd(A2, null, [{
          key: "draw",
          value: function(g3, t3) {
            var A3 = [{
              x: 0,
              y: 0
            }, {
              x: -1,
              y: 0.3
            }, {
              x: -0.9,
              y: 0
            }, {
              x: -1,
              y: -0.3
            }];
            return iR.transform(A3, t3), iR.drawPath(g3, A3), true;
          }
        }]), A2;
      }(iR), rR = function() {
        function g2() {
          cn(this, g2);
        }
        return kd(g2, null, [{
          key: "draw",
          value: function(g3, t2) {
            var A2 = [{
              x: -1,
              y: 0
            }, {
              x: 0,
              y: 0.3
            }, {
              x: -0.4,
              y: 0
            }, {
              x: 0,
              y: -0.3
            }];
            return iR.transform(A2, t2), iR.drawPath(g3, A2), true;
          }
        }]), g2;
      }(), sR = function() {
        function g2() {
          cn(this, g2);
        }
        return kd(g2, null, [{
          key: "draw",
          value: function(g3, t2) {
            var A2 = {
              x: -0.4,
              y: 0
            };
            iR.transform(A2, t2), g3.strokeStyle = g3.fillStyle, g3.fillStyle = "rgba(0, 0, 0, 0)";
            var e2 = Math.PI, C2 = t2.angle - e2 / 2, I2 = t2.angle + e2 / 2;
            return g3.beginPath(), g3.arc(A2.x, A2.y, 0.4 * t2.length, C2, I2, false), g3.stroke(), true;
          }
        }]), g2;
      }(), aR = function() {
        function g2() {
          cn(this, g2);
        }
        return kd(g2, null, [{
          key: "draw",
          value: function(g3, t2) {
            var A2 = {
              x: -0.3,
              y: 0
            };
            iR.transform(A2, t2), g3.strokeStyle = g3.fillStyle, g3.fillStyle = "rgba(0, 0, 0, 0)";
            var e2 = Math.PI, C2 = t2.angle + e2 / 2, I2 = t2.angle + 3 * e2 / 2;
            return g3.beginPath(), g3.arc(A2.x, A2.y, 0.4 * t2.length, C2, I2, false), g3.stroke(), true;
          }
        }]), g2;
      }(), dR = function() {
        function g2() {
          cn(this, g2);
        }
        return kd(g2, null, [{
          key: "draw",
          value: function(g3, t2) {
            var A2 = [{
              x: 0.02,
              y: 0
            }, {
              x: -1,
              y: 0.3
            }, {
              x: -1,
              y: -0.3
            }];
            return iR.transform(A2, t2), iR.drawPath(g3, A2), true;
          }
        }]), g2;
      }(), hR = function() {
        function g2() {
          cn(this, g2);
        }
        return kd(g2, null, [{
          key: "draw",
          value: function(g3, t2) {
            var A2 = [{
              x: 0,
              y: 0.3
            }, {
              x: 0,
              y: -0.3
            }, {
              x: -1,
              y: 0
            }];
            return iR.transform(A2, t2), iR.drawPath(g3, A2), true;
          }
        }]), g2;
      }(), lR = function() {
        function g2() {
          cn(this, g2);
        }
        return kd(g2, null, [{
          key: "draw",
          value: function(g3, t2) {
            var A2 = {
              x: -0.4,
              y: 0
            };
            return iR.transform(A2, t2), Le(g3, A2.x, A2.y, 0.4 * t2.length), true;
          }
        }]), g2;
      }(), cR = function() {
        function g2() {
          cn(this, g2);
        }
        return kd(g2, null, [{
          key: "draw",
          value: function(g3, t2) {
            var A2 = [{
              x: 0,
              y: 0.5
            }, {
              x: 0,
              y: -0.5
            }, {
              x: -0.15,
              y: -0.5
            }, {
              x: -0.15,
              y: 0.5
            }];
            return iR.transform(A2, t2), iR.drawPath(g3, A2), true;
          }
        }]), g2;
      }(), uR = function() {
        function g2() {
          cn(this, g2);
        }
        return kd(g2, null, [{
          key: "draw",
          value: function(g3, t2) {
            var A2 = [{
              x: 0,
              y: 0.3
            }, {
              x: 0,
              y: -0.3
            }, {
              x: -0.6,
              y: -0.3
            }, {
              x: -0.6,
              y: 0.3
            }];
            return iR.transform(A2, t2), iR.drawPath(g3, A2), true;
          }
        }]), g2;
      }(), pR = function() {
        function g2() {
          cn(this, g2);
        }
        return kd(g2, null, [{
          key: "draw",
          value: function(g3, t2) {
            var A2 = [{
              x: 0,
              y: 0
            }, {
              x: -0.5,
              y: -0.3
            }, {
              x: -1,
              y: 0
            }, {
              x: -0.5,
              y: 0.3
            }];
            return iR.transform(A2, t2), iR.drawPath(g3, A2), true;
          }
        }]), g2;
      }(), fR = function() {
        function g2() {
          cn(this, g2);
        }
        return kd(g2, null, [{
          key: "draw",
          value: function(g3, t2) {
            var A2 = [{
              x: -1,
              y: 0.3
            }, {
              x: -0.5,
              y: 0
            }, {
              x: -1,
              y: -0.3
            }, {
              x: 0,
              y: 0
            }];
            return iR.transform(A2, t2), iR.drawPath(g3, A2), true;
          }
        }]), g2;
      }(), vR = function() {
        function g2() {
          cn(this, g2);
        }
        return kd(g2, null, [{
          key: "draw",
          value: function(g3, t2) {
            var A2;
            switch (t2.type && (A2 = t2.type.toLowerCase()), A2) {
              case "image":
                return oR.draw(g3, t2);
              case "circle":
                return lR.draw(g3, t2);
              case "box":
                return uR.draw(g3, t2);
              case "crow":
                return rR.draw(g3, t2);
              case "curve":
                return sR.draw(g3, t2);
              case "diamond":
                return pR.draw(g3, t2);
              case "inv_curve":
                return aR.draw(g3, t2);
              case "triangle":
                return dR.draw(g3, t2);
              case "inv_triangle":
                return hR.draw(g3, t2);
              case "bar":
                return cR.draw(g3, t2);
              case "vee":
                return fR.draw(g3, t2);
              default:
                return nR.draw(g3, t2);
            }
          }
        }]), g2;
      }();
      function yR(g2, t2) {
        var A2 = Lh(g2);
        if (BT) {
          var e2 = BT(g2);
          t2 && (e2 = pc(e2).call(e2, function(t3) {
            return WT(g2, t3).enumerable;
          })), A2.push.apply(A2, e2);
        }
        return A2;
      }
      function mR(g2) {
        for (var t2 = 1; t2 < arguments.length; t2++) {
          var A2, e2, C2 = null != arguments[t2] ? arguments[t2] : {};
          t2 % 2 ? Cl(A2 = yR(Object(C2), true)).call(A2, function(t3) {
            rb(g2, t3, C2[t3]);
          }) : HT ? AD(g2, HT(C2)) : Cl(e2 = yR(Object(C2))).call(e2, function(t3) {
            fT(g2, t3, WT(C2, t3));
          });
        }
        return g2;
      }
      var bR = function() {
        function g2(t2, A2, e2) {
          cn(this, g2), this._body = A2, this._labelModule = e2, this.color = {}, this.colorDirty = true, this.hoverWidth = 1.5, this.selectionWidth = 2, this.setOptions(t2), this.fromPoint = this.from, this.toPoint = this.to;
        }
        return kd(g2, [{
          key: "connect",
          value: function() {
            this.from = this._body.nodes[this.options.from], this.to = this._body.nodes[this.options.to];
          }
        }, {
          key: "cleanup",
          value: function() {
            return false;
          }
        }, {
          key: "setOptions",
          value: function(g3) {
            this.options = g3, this.from = this._body.nodes[this.options.from], this.to = this._body.nodes[this.options.to], this.id = this.options.id;
          }
        }, {
          key: "drawLine",
          value: function(g3, t2, A2, e2) {
            var C2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.getViaNode();
            g3.strokeStyle = this.getColor(g3, t2), g3.lineWidth = t2.width, false !== t2.dashes ? this._drawDashedLine(g3, t2, C2) : this._drawLine(g3, t2, C2);
          }
        }, {
          key: "_drawLine",
          value: function(g3, t2, A2, e2, C2) {
            if (this.from != this.to) this._line(g3, t2, A2, e2, C2);
            else {
              var I2 = lh(this._getCircleData(g3), 3), i2 = I2[0], o2 = I2[1], n2 = I2[2];
              this._circle(g3, t2, i2, o2, n2);
            }
          }
        }, {
          key: "_drawDashedLine",
          value: function(g3, t2, A2, e2, C2) {
            g3.lineCap = "round";
            var I2 = Rh(t2.dashes) ? t2.dashes : [5, 5];
            if (void 0 !== g3.setLineDash) {
              if (g3.save(), g3.setLineDash(I2), g3.lineDashOffset = 0, this.from != this.to) this._line(g3, t2, A2);
              else {
                var i2 = lh(this._getCircleData(g3), 3), o2 = i2[0], n2 = i2[1], r2 = i2[2];
                this._circle(g3, t2, o2, n2, r2);
              }
              g3.setLineDash([0]), g3.lineDashOffset = 0, g3.restore();
            } else {
              if (this.from != this.to) Qe(g3, this.from.x, this.from.y, this.to.x, this.to.y, I2);
              else {
                var s2 = lh(this._getCircleData(g3), 3), a2 = s2[0], d2 = s2[1], h2 = s2[2];
                this._circle(g3, t2, a2, d2, h2);
              }
              this.enableShadow(g3, t2), g3.stroke(), this.disableShadow(g3, t2);
            }
          }
        }, {
          key: "findBorderPosition",
          value: function(g3, t2, A2) {
            return this.from != this.to ? this._findBorderPosition(g3, t2, A2) : this._findBorderPositionCircle(g3, t2, A2);
          }
        }, {
          key: "findBorderPositions",
          value: function(g3) {
            if (this.from != this.to) return {
              from: this._findBorderPosition(this.from, g3),
              to: this._findBorderPosition(this.to, g3)
            };
            var t2, A2 = lh(wh(t2 = this._getCircleData(g3)).call(t2, 0, 2), 2), e2 = A2[0], C2 = A2[1];
            return {
              from: this._findBorderPositionCircle(this.from, g3, {
                x: e2,
                y: C2,
                low: 0.25,
                high: 0.6,
                direction: -1
              }),
              to: this._findBorderPositionCircle(this.from, g3, {
                x: e2,
                y: C2,
                low: 0.6,
                high: 0.8,
                direction: 1
              })
            };
          }
        }, {
          key: "_getCircleData",
          value: function(g3) {
            var t2 = this.options.selfReference.size;
            void 0 !== g3 && void 0 === this.from.shape.width && this.from.shape.resize(g3);
            var A2 = UD(g3, this.options.selfReference.angle, t2, this.from);
            return [A2.x, A2.y, t2];
          }
        }, {
          key: "_pointOnCircle",
          value: function(g3, t2, A2, e2) {
            var C2 = 2 * e2 * Math.PI;
            return {
              x: g3 + A2 * Math.cos(C2),
              y: t2 - A2 * Math.sin(C2)
            };
          }
        }, {
          key: "_findBorderPositionCircle",
          value: function(g3, t2, A2) {
            var e2, C2 = A2.x, I2 = A2.y, i2 = A2.low, o2 = A2.high, n2 = A2.direction, r2 = this.options.selfReference.size, s2 = 0.5 * (i2 + o2), a2 = 0;
            true === this.options.arrowStrikethrough && (-1 === n2 ? a2 = this.options.endPointOffset.from : 1 === n2 && (a2 = this.options.endPointOffset.to));
            var d2 = 0;
            do {
              s2 = 0.5 * (i2 + o2), e2 = this._pointOnCircle(C2, I2, r2, s2);
              var h2 = Math.atan2(g3.y - e2.y, g3.x - e2.x), l2 = g3.distanceToBorder(t2, h2) + a2 - Math.sqrt(Math.pow(e2.x - g3.x, 2) + Math.pow(e2.y - g3.y, 2));
              if (Math.abs(l2) < 0.05) break;
              l2 > 0 ? n2 > 0 ? i2 = s2 : o2 = s2 : n2 > 0 ? o2 = s2 : i2 = s2, ++d2;
            } while (i2 <= o2 && d2 < 10);
            return mR(mR({}, e2), {}, {
              t: s2
            });
          }
        }, {
          key: "getLineWidth",
          value: function(g3, t2) {
            return true === g3 ? Math.max(this.selectionWidth, 0.3 / this._body.view.scale) : true === t2 ? Math.max(this.hoverWidth, 0.3 / this._body.view.scale) : Math.max(this.options.width, 0.3 / this._body.view.scale);
          }
        }, {
          key: "getColor",
          value: function(g3, t2) {
            if (false !== t2.inheritsColor) {
              if ("both" === t2.inheritsColor && this.from.id !== this.to.id) {
                var A2 = g3.createLinearGradient(this.from.x, this.from.y, this.to.x, this.to.y), e2 = this.from.options.color.highlight.border, C2 = this.to.options.color.highlight.border;
                return false === this.from.selected && false === this.to.selected ? (e2 = ev(this.from.options.color.border, t2.opacity), C2 = ev(this.to.options.color.border, t2.opacity)) : true === this.from.selected && false === this.to.selected ? C2 = this.to.options.color.border : false === this.from.selected && true === this.to.selected && (e2 = this.from.options.color.border), A2.addColorStop(0, e2), A2.addColorStop(1, C2), A2;
              }
              return "to" === t2.inheritsColor ? ev(this.to.options.color.border, t2.opacity) : ev(this.from.options.color.border, t2.opacity);
            }
            return ev(t2.color, t2.opacity);
          }
        }, {
          key: "_circle",
          value: function(g3, t2, A2, e2, C2) {
            this.enableShadow(g3, t2);
            var I2 = 0, i2 = 2 * Math.PI;
            if (!this.options.selfReference.renderBehindTheNode) {
              var o2 = this.options.selfReference.angle, n2 = this.options.selfReference.angle + Math.PI, r2 = this._findBorderPositionCircle(this.from, g3, {
                x: A2,
                y: e2,
                low: o2,
                high: n2,
                direction: -1
              }), s2 = this._findBorderPositionCircle(this.from, g3, {
                x: A2,
                y: e2,
                low: o2,
                high: n2,
                direction: 1
              });
              I2 = Math.atan2(r2.y - e2, r2.x - A2), i2 = Math.atan2(s2.y - e2, s2.x - A2);
            }
            g3.beginPath(), g3.arc(A2, e2, C2, I2, i2, false), g3.stroke(), this.disableShadow(g3, t2);
          }
        }, {
          key: "getDistanceToEdge",
          value: function(g3, t2, A2, e2, C2, I2) {
            if (this.from != this.to) return this._getDistanceToEdge(g3, t2, A2, e2, C2, I2);
            var i2 = lh(this._getCircleData(void 0), 3), o2 = i2[0], n2 = i2[1], r2 = i2[2], s2 = o2 - C2, a2 = n2 - I2;
            return Math.abs(Math.sqrt(s2 * s2 + a2 * a2) - r2);
          }
        }, {
          key: "_getDistanceToLine",
          value: function(g3, t2, A2, e2, C2, I2) {
            var i2 = A2 - g3, o2 = e2 - t2, n2 = ((C2 - g3) * i2 + (I2 - t2) * o2) / (i2 * i2 + o2 * o2);
            n2 > 1 ? n2 = 1 : n2 < 0 && (n2 = 0);
            var r2 = g3 + n2 * i2 - C2, s2 = t2 + n2 * o2 - I2;
            return Math.sqrt(r2 * r2 + s2 * s2);
          }
        }, {
          key: "getArrowData",
          value: function(g3, t2, A2, e2, C2, I2) {
            var i2, o2, n2, r2, s2, a2, d2, h2 = I2.width;
            "from" === t2 ? (n2 = this.from, r2 = this.to, s2 = I2.fromArrowScale < 0, a2 = Math.abs(I2.fromArrowScale), d2 = I2.fromArrowType) : "to" === t2 ? (n2 = this.to, r2 = this.from, s2 = I2.toArrowScale < 0, a2 = Math.abs(I2.toArrowScale), d2 = I2.toArrowType) : (n2 = this.to, r2 = this.from, s2 = I2.middleArrowScale < 0, a2 = Math.abs(I2.middleArrowScale), d2 = I2.middleArrowType);
            var l2 = 15 * a2 + 3 * h2;
            if (n2 != r2) {
              var c2 = l2 / CR(n2.x - r2.x, n2.y - r2.y);
              if ("middle" !== t2) {
                if (true === this.options.smooth.enabled) {
                  var u2 = this._findBorderPosition(n2, g3, {
                    via: A2
                  }), p2 = this.getPoint(u2.t + c2 * ("from" === t2 ? 1 : -1), A2);
                  i2 = Math.atan2(u2.y - p2.y, u2.x - p2.x), o2 = u2;
                } else i2 = Math.atan2(n2.y - r2.y, n2.x - r2.x), o2 = this._findBorderPosition(n2, g3);
              } else {
                var f2 = (s2 ? -c2 : c2) / 2, v2 = this.getPoint(0.5 + f2, A2), y2 = this.getPoint(0.5 - f2, A2);
                i2 = Math.atan2(v2.y - y2.y, v2.x - y2.x), o2 = this.getPoint(0.5, A2);
              }
            } else {
              var m2 = lh(this._getCircleData(g3), 3), b2 = m2[0], w2 = m2[1], k2 = m2[2];
              if ("from" === t2) {
                var x2 = this.options.selfReference.angle, E2 = this.options.selfReference.angle + Math.PI, O2 = this._findBorderPositionCircle(this.from, g3, {
                  x: b2,
                  y: w2,
                  low: x2,
                  high: E2,
                  direction: -1
                });
                i2 = -2 * O2.t * Math.PI + 1.5 * Math.PI + 0.1 * Math.PI, o2 = O2;
              } else if ("to" === t2) {
                var T2 = this.options.selfReference.angle, D2 = this.options.selfReference.angle + Math.PI, N2 = this._findBorderPositionCircle(this.from, g3, {
                  x: b2,
                  y: w2,
                  low: T2,
                  high: D2,
                  direction: 1
                });
                i2 = -2 * N2.t * Math.PI + 1.5 * Math.PI - 1.1 * Math.PI, o2 = N2;
              } else {
                var R2 = this.options.selfReference.angle / (2 * Math.PI);
                o2 = this._pointOnCircle(b2, w2, k2, R2), i2 = -2 * R2 * Math.PI + 1.5 * Math.PI + 0.1 * Math.PI;
              }
            }
            return {
              point: o2,
              core: {
                x: o2.x - 0.9 * l2 * Math.cos(i2),
                y: o2.y - 0.9 * l2 * Math.sin(i2)
              },
              angle: i2,
              length: l2,
              type: d2
            };
          }
        }, {
          key: "drawArrowHead",
          value: function(g3, t2, A2, e2, C2) {
            g3.strokeStyle = this.getColor(g3, t2), g3.fillStyle = g3.strokeStyle, g3.lineWidth = t2.width, vR.draw(g3, C2) && (this.enableShadow(g3, t2), Bu(g3).call(g3), this.disableShadow(g3, t2));
          }
        }, {
          key: "enableShadow",
          value: function(g3, t2) {
            true === t2.shadow && (g3.shadowColor = t2.shadowColor, g3.shadowBlur = t2.shadowSize, g3.shadowOffsetX = t2.shadowX, g3.shadowOffsetY = t2.shadowY);
          }
        }, {
          key: "disableShadow",
          value: function(g3, t2) {
            true === t2.shadow && (g3.shadowColor = "rgba(0,0,0,0)", g3.shadowBlur = 0, g3.shadowOffsetX = 0, g3.shadowOffsetY = 0);
          }
        }, {
          key: "drawBackground",
          value: function(g3, t2) {
            if (false !== t2.background) {
              var A2 = {
                strokeStyle: g3.strokeStyle,
                lineWidth: g3.lineWidth,
                dashes: g3.dashes
              };
              g3.strokeStyle = t2.backgroundColor, g3.lineWidth = t2.backgroundSize, this.setStrokeDashed(g3, t2.backgroundDashes), g3.stroke(), g3.strokeStyle = A2.strokeStyle, g3.lineWidth = A2.lineWidth, g3.dashes = A2.dashes, this.setStrokeDashed(g3, t2.dashes);
            }
          }
        }, {
          key: "setStrokeDashed",
          value: function(g3, t2) {
            if (false !== t2) {
              if (void 0 !== g3.setLineDash) {
                var A2 = Rh(t2) ? t2 : [5, 5];
                g3.setLineDash(A2);
              } else console.warn("setLineDash is not supported in this browser. The dashed stroke cannot be used.");
            } else void 0 !== g3.setLineDash ? g3.setLineDash([]) : console.warn("setLineDash is not supported in this browser. The dashed stroke cannot be used.");
          }
        }]), g2;
      }();
      function wR(g2, t2) {
        var A2 = Lh(g2);
        if (BT) {
          var e2 = BT(g2);
          t2 && (e2 = pc(e2).call(e2, function(t3) {
            return WT(g2, t3).enumerable;
          })), A2.push.apply(A2, e2);
        }
        return A2;
      }
      function kR(g2) {
        for (var t2 = 1; t2 < arguments.length; t2++) {
          var A2, e2, C2 = null != arguments[t2] ? arguments[t2] : {};
          t2 % 2 ? Cl(A2 = wR(Object(C2), true)).call(A2, function(t3) {
            rb(g2, t3, C2[t3]);
          }) : HT ? AD(g2, HT(C2)) : Cl(e2 = wR(Object(C2))).call(e2, function(t3) {
            fT(g2, t3, WT(C2, t3));
          });
        }
        return g2;
      }
      function xR(g2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !MT) return false;
          if (MT.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(MT(Boolean, [], function() {
            })), true;
          } catch (g3) {
            return false;
          }
        }();
        return function() {
          var A2, e2 = nb(g2);
          if (t2) {
            var C2 = nb(this).constructor;
            A2 = MT(e2, arguments, C2);
          } else A2 = e2.apply(this, arguments);
          return Ib(this, A2);
        };
      }
      var ER = function(g2) {
        Cb(A2, g2);
        var t2 = xR(A2);
        function A2(g3, e2, C2) {
          return cn(this, A2), t2.call(this, g3, e2, C2);
        }
        return kd(A2, [{
          key: "_findBorderPositionBezier",
          value: function(g3, t3) {
            var A3, e2, C2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this._getViaCoordinates(), I2 = false, i2 = 1, o2 = 0, n2 = this.to, r2 = this.options.endPointOffset ? this.options.endPointOffset.to : 0;
            g3.id === this.from.id && (n2 = this.from, I2 = true, r2 = this.options.endPointOffset ? this.options.endPointOffset.from : 0), false === this.options.arrowStrikethrough && (r2 = 0);
            var s2 = 0;
            do {
              e2 = 0.5 * (o2 + i2), A3 = this.getPoint(e2, C2);
              var a2 = Math.atan2(n2.y - A3.y, n2.x - A3.x), d2 = n2.distanceToBorder(t3, a2) + r2 - Math.sqrt(Math.pow(A3.x - n2.x, 2) + Math.pow(A3.y - n2.y, 2));
              if (Math.abs(d2) < 0.2) break;
              d2 < 0 ? false === I2 ? o2 = e2 : i2 = e2 : false === I2 ? i2 = e2 : o2 = e2, ++s2;
            } while (o2 <= i2 && s2 < 10);
            return kR(kR({}, A3), {}, {
              t: e2
            });
          }
        }, {
          key: "_getDistanceToBezierEdge",
          value: function(g3, t3, A3, e2, C2, I2, i2) {
            var o2, n2, r2, s2, a2, d2 = 1e9, h2 = g3, l2 = t3;
            for (n2 = 1; n2 < 10; n2++) r2 = 0.1 * n2, s2 = Math.pow(1 - r2, 2) * g3 + 2 * r2 * (1 - r2) * i2.x + Math.pow(r2, 2) * A3, a2 = Math.pow(1 - r2, 2) * t3 + 2 * r2 * (1 - r2) * i2.y + Math.pow(r2, 2) * e2, n2 > 0 && (d2 = (o2 = this._getDistanceToLine(h2, l2, s2, a2, C2, I2)) < d2 ? o2 : d2), h2 = s2, l2 = a2;
            return d2;
          }
        }, {
          key: "_bezierCurve",
          value: function(g3, t3, A3, e2) {
            g3.beginPath(), g3.moveTo(this.fromPoint.x, this.fromPoint.y), null != A3 && null != A3.x ? null != e2 && null != e2.x ? g3.bezierCurveTo(A3.x, A3.y, e2.x, e2.y, this.toPoint.x, this.toPoint.y) : g3.quadraticCurveTo(A3.x, A3.y, this.toPoint.x, this.toPoint.y) : g3.lineTo(this.toPoint.x, this.toPoint.y), this.drawBackground(g3, t3), this.enableShadow(g3, t3), g3.stroke(), this.disableShadow(g3, t3);
          }
        }, {
          key: "getViaNode",
          value: function() {
            return this._getViaCoordinates();
          }
        }]), A2;
      }(bR);
      function OR(g2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !MT) return false;
          if (MT.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(MT(Boolean, [], function() {
            })), true;
          } catch (g3) {
            return false;
          }
        }();
        return function() {
          var A2, e2 = nb(g2);
          if (t2) {
            var C2 = nb(this).constructor;
            A2 = MT(e2, arguments, C2);
          } else A2 = e2.apply(this, arguments);
          return Ib(this, A2);
        };
      }
      var TR = function(g2) {
        Cb(A2, g2);
        var t2 = OR(A2);
        function A2(g3, e2, C2) {
          var I2;
          return cn(this, A2), (I2 = t2.call(this, g3, e2, C2)).via = I2.via, I2._boundFunction = function() {
            I2.positionBezierNode();
          }, I2._body.emitter.on("_repositionBezierNodes", I2._boundFunction), I2;
        }
        return kd(A2, [{
          key: "setOptions",
          value: function(g3) {
            $N(nb(A2.prototype), "setOptions", this).call(this, g3);
            var t3 = false;
            this.options.physics !== g3.physics && (t3 = true), this.options = g3, this.id = this.options.id, this.from = this._body.nodes[this.options.from], this.to = this._body.nodes[this.options.to], this.setupSupportNode(), this.connect(), true === t3 && (this.via.setOptions({
              physics: this.options.physics
            }), this.positionBezierNode());
          }
        }, {
          key: "connect",
          value: function() {
            this.from = this._body.nodes[this.options.from], this.to = this._body.nodes[this.options.to], void 0 === this.from || void 0 === this.to || false === this.options.physics || this.from.id === this.to.id ? this.via.setOptions({
              physics: false
            }) : this.via.setOptions({
              physics: true
            });
          }
        }, {
          key: "cleanup",
          value: function() {
            return this._body.emitter.off("_repositionBezierNodes", this._boundFunction), void 0 !== this.via && (delete this._body.nodes[this.via.id], this.via = void 0, true);
          }
        }, {
          key: "setupSupportNode",
          value: function() {
            if (void 0 === this.via) {
              var g3 = "edgeId:" + this.id, t3 = this._body.functions.createNode({
                id: g3,
                shape: "circle",
                physics: true,
                hidden: true
              });
              this._body.nodes[g3] = t3, this.via = t3, this.via.parentEdgeId = this.id, this.positionBezierNode();
            }
          }
        }, {
          key: "positionBezierNode",
          value: function() {
            void 0 !== this.via && void 0 !== this.from && void 0 !== this.to ? (this.via.x = 0.5 * (this.from.x + this.to.x), this.via.y = 0.5 * (this.from.y + this.to.y)) : void 0 !== this.via && (this.via.x = 0, this.via.y = 0);
          }
        }, {
          key: "_line",
          value: function(g3, t3, A3) {
            this._bezierCurve(g3, t3, A3);
          }
        }, {
          key: "_getViaCoordinates",
          value: function() {
            return this.via;
          }
        }, {
          key: "getViaNode",
          value: function() {
            return this.via;
          }
        }, {
          key: "getPoint",
          value: function(g3) {
            var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.via;
            if (this.from === this.to) {
              var A3 = lh(this._getCircleData(), 3), e2 = A3[0], C2 = A3[1], I2 = A3[2], i2 = 2 * Math.PI * (1 - g3);
              return {
                x: e2 + I2 * Math.sin(i2),
                y: C2 + I2 - I2 * (1 - Math.cos(i2))
              };
            }
            return {
              x: Math.pow(1 - g3, 2) * this.fromPoint.x + 2 * g3 * (1 - g3) * t3.x + Math.pow(g3, 2) * this.toPoint.x,
              y: Math.pow(1 - g3, 2) * this.fromPoint.y + 2 * g3 * (1 - g3) * t3.y + Math.pow(g3, 2) * this.toPoint.y
            };
          }
        }, {
          key: "_findBorderPosition",
          value: function(g3, t3) {
            return this._findBorderPositionBezier(g3, t3, this.via);
          }
        }, {
          key: "_getDistanceToEdge",
          value: function(g3, t3, A3, e2, C2, I2) {
            return this._getDistanceToBezierEdge(g3, t3, A3, e2, C2, I2, this.via);
          }
        }]), A2;
      }(ER);
      function DR(g2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !MT) return false;
          if (MT.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(MT(Boolean, [], function() {
            })), true;
          } catch (g3) {
            return false;
          }
        }();
        return function() {
          var A2, e2 = nb(g2);
          if (t2) {
            var C2 = nb(this).constructor;
            A2 = MT(e2, arguments, C2);
          } else A2 = e2.apply(this, arguments);
          return Ib(this, A2);
        };
      }
      var NR = function(g2) {
        Cb(A2, g2);
        var t2 = DR(A2);
        function A2(g3, e2, C2) {
          return cn(this, A2), t2.call(this, g3, e2, C2);
        }
        return kd(A2, [{
          key: "_line",
          value: function(g3, t3, A3) {
            this._bezierCurve(g3, t3, A3);
          }
        }, {
          key: "getViaNode",
          value: function() {
            return this._getViaCoordinates();
          }
        }, {
          key: "_getViaCoordinates",
          value: function() {
            var g3, t3, A3 = this.options.smooth.roundness, e2 = this.options.smooth.type, C2 = Math.abs(this.from.x - this.to.x), I2 = Math.abs(this.from.y - this.to.y);
            if ("discrete" === e2 || "diagonalCross" === e2) {
              var i2, o2;
              i2 = o2 = C2 <= I2 ? A3 * I2 : A3 * C2, this.from.x > this.to.x && (i2 = -i2), this.from.y >= this.to.y && (o2 = -o2);
              var n2 = this.from.x + i2, r2 = this.from.y + o2;
              return "discrete" === e2 && (C2 <= I2 ? n2 = C2 < A3 * I2 ? this.from.x : n2 : r2 = I2 < A3 * C2 ? this.from.y : r2), {
                x: n2,
                y: r2
              };
            }
            if ("straightCross" === e2) {
              var s2 = (1 - A3) * C2, a2 = (1 - A3) * I2;
              return C2 <= I2 ? (s2 = 0, this.from.y < this.to.y && (a2 = -a2)) : (this.from.x < this.to.x && (s2 = -s2), a2 = 0), {
                x: this.to.x + s2,
                y: this.to.y + a2
              };
            }
            if ("horizontal" === e2) {
              var d2 = (1 - A3) * C2;
              return this.from.x < this.to.x && (d2 = -d2), {
                x: this.to.x + d2,
                y: this.from.y
              };
            }
            if ("vertical" === e2) {
              var h2 = (1 - A3) * I2;
              return this.from.y < this.to.y && (h2 = -h2), {
                x: this.from.x,
                y: this.to.y + h2
              };
            }
            if ("curvedCW" === e2) {
              C2 = this.to.x - this.from.x, I2 = this.from.y - this.to.y;
              var l2 = Math.sqrt(C2 * C2 + I2 * I2), c2 = Math.PI, u2 = (Math.atan2(I2, C2) + (0.5 * A3 + 0.5) * c2) % (2 * c2);
              return {
                x: this.from.x + (0.5 * A3 + 0.5) * l2 * Math.sin(u2),
                y: this.from.y + (0.5 * A3 + 0.5) * l2 * Math.cos(u2)
              };
            }
            if ("curvedCCW" === e2) {
              C2 = this.to.x - this.from.x, I2 = this.from.y - this.to.y;
              var p2 = Math.sqrt(C2 * C2 + I2 * I2), f2 = Math.PI, v2 = (Math.atan2(I2, C2) + (0.5 * -A3 + 0.5) * f2) % (2 * f2);
              return {
                x: this.from.x + (0.5 * A3 + 0.5) * p2 * Math.sin(v2),
                y: this.from.y + (0.5 * A3 + 0.5) * p2 * Math.cos(v2)
              };
            }
            g3 = t3 = C2 <= I2 ? A3 * I2 : A3 * C2, this.from.x > this.to.x && (g3 = -g3), this.from.y >= this.to.y && (t3 = -t3);
            var y2 = this.from.x + g3, m2 = this.from.y + t3;
            return C2 <= I2 ? y2 = this.from.x <= this.to.x ? this.to.x < y2 ? this.to.x : y2 : this.to.x > y2 ? this.to.x : y2 : m2 = this.from.y >= this.to.y ? this.to.y > m2 ? this.to.y : m2 : this.to.y < m2 ? this.to.y : m2, {
              x: y2,
              y: m2
            };
          }
        }, {
          key: "_findBorderPosition",
          value: function(g3, t3) {
            var A3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return this._findBorderPositionBezier(g3, t3, A3.via);
          }
        }, {
          key: "_getDistanceToEdge",
          value: function(g3, t3, A3, e2, C2, I2) {
            var i2 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : this._getViaCoordinates();
            return this._getDistanceToBezierEdge(g3, t3, A3, e2, C2, I2, i2);
          }
        }, {
          key: "getPoint",
          value: function(g3) {
            var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._getViaCoordinates(), A3 = g3;
            return {
              x: Math.pow(1 - A3, 2) * this.fromPoint.x + 2 * A3 * (1 - A3) * t3.x + Math.pow(A3, 2) * this.toPoint.x,
              y: Math.pow(1 - A3, 2) * this.fromPoint.y + 2 * A3 * (1 - A3) * t3.y + Math.pow(A3, 2) * this.toPoint.y
            };
          }
        }]), A2;
      }(ER);
      function RR(g2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !MT) return false;
          if (MT.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(MT(Boolean, [], function() {
            })), true;
          } catch (g3) {
            return false;
          }
        }();
        return function() {
          var A2, e2 = nb(g2);
          if (t2) {
            var C2 = nb(this).constructor;
            A2 = MT(e2, arguments, C2);
          } else A2 = e2.apply(this, arguments);
          return Ib(this, A2);
        };
      }
      var PR = function(g2) {
        Cb(A2, g2);
        var t2 = RR(A2);
        function A2(g3, e2, C2) {
          return cn(this, A2), t2.call(this, g3, e2, C2);
        }
        return kd(A2, [{
          key: "_getDistanceToBezierEdge2",
          value: function(g3, t3, A3, e2, C2, I2, i2, o2) {
            for (var n2 = 1e9, r2 = g3, s2 = t3, a2 = [0, 0, 0, 0], d2 = 1; d2 < 10; d2++) {
              var h2 = 0.1 * d2;
              a2[0] = Math.pow(1 - h2, 3), a2[1] = 3 * h2 * Math.pow(1 - h2, 2), a2[2] = 3 * Math.pow(h2, 2) * (1 - h2), a2[3] = Math.pow(h2, 3);
              var l2 = a2[0] * g3 + a2[1] * i2.x + a2[2] * o2.x + a2[3] * A3, c2 = a2[0] * t3 + a2[1] * i2.y + a2[2] * o2.y + a2[3] * e2;
              if (d2 > 0) {
                var u2 = this._getDistanceToLine(r2, s2, l2, c2, C2, I2);
                n2 = u2 < n2 ? u2 : n2;
              }
              r2 = l2, s2 = c2;
            }
            return n2;
          }
        }]), A2;
      }(ER);
      function MR(g2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !MT) return false;
          if (MT.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(MT(Boolean, [], function() {
            })), true;
          } catch (g3) {
            return false;
          }
        }();
        return function() {
          var A2, e2 = nb(g2);
          if (t2) {
            var C2 = nb(this).constructor;
            A2 = MT(e2, arguments, C2);
          } else A2 = e2.apply(this, arguments);
          return Ib(this, A2);
        };
      }
      var BR = function(g2) {
        Cb(A2, g2);
        var t2 = MR(A2);
        function A2(g3, e2, C2) {
          return cn(this, A2), t2.call(this, g3, e2, C2);
        }
        return kd(A2, [{
          key: "_line",
          value: function(g3, t3, A3) {
            var e2 = A3[0], C2 = A3[1];
            this._bezierCurve(g3, t3, e2, C2);
          }
        }, {
          key: "_getViaCoordinates",
          value: function() {
            var g3, t3, A3, e2, C2 = this.from.x - this.to.x, I2 = this.from.y - this.to.y, i2 = this.options.smooth.roundness;
            return (Math.abs(C2) > Math.abs(I2) || true === this.options.smooth.forceDirection || "horizontal" === this.options.smooth.forceDirection) && "vertical" !== this.options.smooth.forceDirection ? (t3 = this.from.y, e2 = this.to.y, g3 = this.from.x - i2 * C2, A3 = this.to.x + i2 * C2) : (t3 = this.from.y - i2 * I2, e2 = this.to.y + i2 * I2, g3 = this.from.x, A3 = this.to.x), [{
              x: g3,
              y: t3
            }, {
              x: A3,
              y: e2
            }];
          }
        }, {
          key: "getViaNode",
          value: function() {
            return this._getViaCoordinates();
          }
        }, {
          key: "_findBorderPosition",
          value: function(g3, t3) {
            return this._findBorderPositionBezier(g3, t3);
          }
        }, {
          key: "_getDistanceToEdge",
          value: function(g3, t3, A3, e2, C2, I2) {
            var i2 = lh(arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : this._getViaCoordinates(), 2), o2 = i2[0], n2 = i2[1];
            return this._getDistanceToBezierEdge2(g3, t3, A3, e2, C2, I2, o2, n2);
          }
        }, {
          key: "getPoint",
          value: function(g3) {
            var t3 = lh(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._getViaCoordinates(), 2), A3 = t3[0], e2 = t3[1], C2 = g3, I2 = [Math.pow(1 - C2, 3), 3 * C2 * Math.pow(1 - C2, 2), 3 * Math.pow(C2, 2) * (1 - C2), Math.pow(C2, 3)];
            return {
              x: I2[0] * this.fromPoint.x + I2[1] * A3.x + I2[2] * e2.x + I2[3] * this.toPoint.x,
              y: I2[0] * this.fromPoint.y + I2[1] * A3.y + I2[2] * e2.y + I2[3] * this.toPoint.y
            };
          }
        }]), A2;
      }(PR);
      function zR(g2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !MT) return false;
          if (MT.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(MT(Boolean, [], function() {
            })), true;
          } catch (g3) {
            return false;
          }
        }();
        return function() {
          var A2, e2 = nb(g2);
          if (t2) {
            var C2 = nb(this).constructor;
            A2 = MT(e2, arguments, C2);
          } else A2 = e2.apply(this, arguments);
          return Ib(this, A2);
        };
      }
      var SR = function(g2) {
        Cb(A2, g2);
        var t2 = zR(A2);
        function A2(g3, e2, C2) {
          return cn(this, A2), t2.call(this, g3, e2, C2);
        }
        return kd(A2, [{
          key: "_line",
          value: function(g3, t3) {
            g3.beginPath(), g3.moveTo(this.fromPoint.x, this.fromPoint.y), g3.lineTo(this.toPoint.x, this.toPoint.y), this.enableShadow(g3, t3), g3.stroke(), this.disableShadow(g3, t3);
          }
        }, {
          key: "getViaNode",
          value: function() {
          }
        }, {
          key: "getPoint",
          value: function(g3) {
            return {
              x: (1 - g3) * this.fromPoint.x + g3 * this.toPoint.x,
              y: (1 - g3) * this.fromPoint.y + g3 * this.toPoint.y
            };
          }
        }, {
          key: "_findBorderPosition",
          value: function(g3, t3) {
            var A3 = this.to, e2 = this.from;
            g3.id === this.from.id && (A3 = this.from, e2 = this.to);
            var C2 = Math.atan2(A3.y - e2.y, A3.x - e2.x), I2 = A3.x - e2.x, i2 = A3.y - e2.y, o2 = Math.sqrt(I2 * I2 + i2 * i2), n2 = (o2 - g3.distanceToBorder(t3, C2)) / o2;
            return {
              x: (1 - n2) * e2.x + n2 * A3.x,
              y: (1 - n2) * e2.y + n2 * A3.y,
              t: 0
            };
          }
        }, {
          key: "_getDistanceToEdge",
          value: function(g3, t3, A3, e2, C2, I2) {
            return this._getDistanceToLine(g3, t3, A3, e2, C2, I2);
          }
        }]), A2;
      }(bR), ZR = function() {
        function g2(t2, A2, e2, C2, I2) {
          if (cn(this, g2), void 0 === A2) throw new Error("No body provided");
          this.options = av(C2), this.globalOptions = C2, this.defaultOptions = I2, this.body = A2, this.imagelist = e2, this.id = void 0, this.fromId = void 0, this.toId = void 0, this.selected = false, this.hover = false, this.labelDirty = true, this.baseWidth = this.options.width, this.baseFontSize = this.options.font.size, this.from = void 0, this.to = void 0, this.edgeType = void 0, this.connected = false, this.labelModule = new qD(this.body, this.options, true), this.setOptions(t2);
        }
        return kd(g2, [{
          key: "setOptions",
          value: function(t2) {
            if (t2) {
              var A2 = void 0 !== t2.physics && this.options.physics !== t2.physics || void 0 !== t2.hidden && (this.options.hidden || false) !== (t2.hidden || false) || void 0 !== t2.from && this.options.from !== t2.from || void 0 !== t2.to && this.options.to !== t2.to;
              g2.parseOptions(this.options, t2, true, this.globalOptions), void 0 !== t2.id && (this.id = t2.id), void 0 !== t2.from && (this.fromId = t2.from), void 0 !== t2.to && (this.toId = t2.to), void 0 !== t2.title && (this.title = t2.title), void 0 !== t2.value && (t2.value = SD(t2.value));
              var e2 = [t2, this.options, this.defaultOptions];
              return this.chooser = YD("edge", e2), this.updateLabelModule(t2), A2 = this.updateEdgeType() || A2, this._setInteractionWidths(), this.connect(), A2;
            }
          }
        }, {
          key: "getFormattingValues",
          value: function() {
            var g3 = true === this.options.arrows.to || true === this.options.arrows.to.enabled, t2 = true === this.options.arrows.from || true === this.options.arrows.from.enabled, A2 = true === this.options.arrows.middle || true === this.options.arrows.middle.enabled, e2 = this.options.color.inherit, C2 = {
              toArrow: g3,
              toArrowScale: this.options.arrows.to.scaleFactor,
              toArrowType: this.options.arrows.to.type,
              toArrowSrc: this.options.arrows.to.src,
              toArrowImageWidth: this.options.arrows.to.imageWidth,
              toArrowImageHeight: this.options.arrows.to.imageHeight,
              middleArrow: A2,
              middleArrowScale: this.options.arrows.middle.scaleFactor,
              middleArrowType: this.options.arrows.middle.type,
              middleArrowSrc: this.options.arrows.middle.src,
              middleArrowImageWidth: this.options.arrows.middle.imageWidth,
              middleArrowImageHeight: this.options.arrows.middle.imageHeight,
              fromArrow: t2,
              fromArrowScale: this.options.arrows.from.scaleFactor,
              fromArrowType: this.options.arrows.from.type,
              fromArrowSrc: this.options.arrows.from.src,
              fromArrowImageWidth: this.options.arrows.from.imageWidth,
              fromArrowImageHeight: this.options.arrows.from.imageHeight,
              arrowStrikethrough: this.options.arrowStrikethrough,
              color: e2 ? void 0 : this.options.color.color,
              inheritsColor: e2,
              opacity: this.options.color.opacity,
              hidden: this.options.hidden,
              length: this.options.length,
              shadow: this.options.shadow.enabled,
              shadowColor: this.options.shadow.color,
              shadowSize: this.options.shadow.size,
              shadowX: this.options.shadow.x,
              shadowY: this.options.shadow.y,
              dashes: this.options.dashes,
              width: this.options.width,
              background: this.options.background.enabled,
              backgroundColor: this.options.background.color,
              backgroundSize: this.options.background.size,
              backgroundDashes: this.options.background.dashes
            };
            if (this.selected || this.hover) {
              if (true === this.chooser) {
                if (this.selected) {
                  var I2 = this.options.selectionWidth;
                  "function" == typeof I2 ? C2.width = I2(C2.width) : "number" == typeof I2 && (C2.width += I2), C2.width = Math.max(C2.width, 0.3 / this.body.view.scale), C2.color = this.options.color.highlight, C2.shadow = this.options.shadow.enabled;
                } else if (this.hover) {
                  var i2 = this.options.hoverWidth;
                  "function" == typeof i2 ? C2.width = i2(C2.width) : "number" == typeof i2 && (C2.width += i2), C2.width = Math.max(C2.width, 0.3 / this.body.view.scale), C2.color = this.options.color.hover, C2.shadow = this.options.shadow.enabled;
                }
              } else "function" == typeof this.chooser && (this.chooser(C2, this.options.id, this.selected, this.hover), void 0 !== C2.color && (C2.inheritsColor = false), false === C2.shadow && (C2.shadowColor === this.options.shadow.color && C2.shadowSize === this.options.shadow.size && C2.shadowX === this.options.shadow.x && C2.shadowY === this.options.shadow.y || (C2.shadow = true)));
            } else C2.shadow = this.options.shadow.enabled, C2.width = Math.max(C2.width, 0.3 / this.body.view.scale);
            return C2;
          }
        }, {
          key: "updateLabelModule",
          value: function(g3) {
            var t2 = [g3, this.options, this.globalOptions, this.defaultOptions];
            this.labelModule.update(this.options, t2), void 0 !== this.labelModule.baseSize && (this.baseFontSize = this.labelModule.baseSize);
          }
        }, {
          key: "updateEdgeType",
          value: function() {
            var g3 = this.options.smooth, t2 = false, A2 = true;
            return void 0 !== this.edgeType && ((this.edgeType instanceof TR && true === g3.enabled && "dynamic" === g3.type || this.edgeType instanceof BR && true === g3.enabled && "cubicBezier" === g3.type || this.edgeType instanceof NR && true === g3.enabled && "dynamic" !== g3.type && "cubicBezier" !== g3.type || this.edgeType instanceof SR && false === g3.type.enabled) && (A2 = false), true === A2 && (t2 = this.cleanup())), true === A2 ? true === g3.enabled ? "dynamic" === g3.type ? (t2 = true, this.edgeType = new TR(this.options, this.body, this.labelModule)) : "cubicBezier" === g3.type ? this.edgeType = new BR(this.options, this.body, this.labelModule) : this.edgeType = new NR(this.options, this.body, this.labelModule) : this.edgeType = new SR(this.options, this.body, this.labelModule) : this.edgeType.setOptions(this.options), t2;
          }
        }, {
          key: "connect",
          value: function() {
            this.disconnect(), this.from = this.body.nodes[this.fromId] || void 0, this.to = this.body.nodes[this.toId] || void 0, this.connected = void 0 !== this.from && void 0 !== this.to, true === this.connected ? (this.from.attachEdge(this), this.to.attachEdge(this)) : (this.from && this.from.detachEdge(this), this.to && this.to.detachEdge(this)), this.edgeType.connect();
          }
        }, {
          key: "disconnect",
          value: function() {
            this.from && (this.from.detachEdge(this), this.from = void 0), this.to && (this.to.detachEdge(this), this.to = void 0), this.connected = false;
          }
        }, {
          key: "getTitle",
          value: function() {
            return this.title;
          }
        }, {
          key: "isSelected",
          value: function() {
            return this.selected;
          }
        }, {
          key: "getValue",
          value: function() {
            return this.options.value;
          }
        }, {
          key: "setValueRange",
          value: function(g3, t2, A2) {
            if (void 0 !== this.options.value) {
              var e2 = this.options.scaling.customScalingFunction(g3, t2, A2, this.options.value), C2 = this.options.scaling.max - this.options.scaling.min;
              if (true === this.options.scaling.label.enabled) {
                var I2 = this.options.scaling.label.max - this.options.scaling.label.min;
                this.options.font.size = this.options.scaling.label.min + e2 * I2;
              }
              this.options.width = this.options.scaling.min + e2 * C2;
            } else this.options.width = this.baseWidth, this.options.font.size = this.baseFontSize;
            this._setInteractionWidths(), this.updateLabelModule();
          }
        }, {
          key: "_setInteractionWidths",
          value: function() {
            "function" == typeof this.options.hoverWidth ? this.edgeType.hoverWidth = this.options.hoverWidth(this.options.width) : this.edgeType.hoverWidth = this.options.hoverWidth + this.options.width, "function" == typeof this.options.selectionWidth ? this.edgeType.selectionWidth = this.options.selectionWidth(this.options.width) : this.edgeType.selectionWidth = this.options.selectionWidth + this.options.width;
          }
        }, {
          key: "draw",
          value: function(g3) {
            var t2 = this.getFormattingValues();
            if (!t2.hidden) {
              var A2 = this.edgeType.getViaNode();
              this.edgeType.drawLine(g3, t2, this.selected, this.hover, A2), this.drawLabel(g3, A2);
            }
          }
        }, {
          key: "drawArrows",
          value: function(g3) {
            var t2 = this.getFormattingValues();
            if (!t2.hidden) {
              var A2 = this.edgeType.getViaNode(), e2 = {};
              this.edgeType.fromPoint = this.edgeType.from, this.edgeType.toPoint = this.edgeType.to, t2.fromArrow && (e2.from = this.edgeType.getArrowData(g3, "from", A2, this.selected, this.hover, t2), false === t2.arrowStrikethrough && (this.edgeType.fromPoint = e2.from.core), t2.fromArrowSrc && (e2.from.image = this.imagelist.load(t2.fromArrowSrc)), t2.fromArrowImageWidth && (e2.from.imageWidth = t2.fromArrowImageWidth), t2.fromArrowImageHeight && (e2.from.imageHeight = t2.fromArrowImageHeight)), t2.toArrow && (e2.to = this.edgeType.getArrowData(g3, "to", A2, this.selected, this.hover, t2), false === t2.arrowStrikethrough && (this.edgeType.toPoint = e2.to.core), t2.toArrowSrc && (e2.to.image = this.imagelist.load(t2.toArrowSrc)), t2.toArrowImageWidth && (e2.to.imageWidth = t2.toArrowImageWidth), t2.toArrowImageHeight && (e2.to.imageHeight = t2.toArrowImageHeight)), t2.middleArrow && (e2.middle = this.edgeType.getArrowData(g3, "middle", A2, this.selected, this.hover, t2), t2.middleArrowSrc && (e2.middle.image = this.imagelist.load(t2.middleArrowSrc)), t2.middleArrowImageWidth && (e2.middle.imageWidth = t2.middleArrowImageWidth), t2.middleArrowImageHeight && (e2.middle.imageHeight = t2.middleArrowImageHeight)), t2.fromArrow && this.edgeType.drawArrowHead(g3, t2, this.selected, this.hover, e2.from), t2.middleArrow && this.edgeType.drawArrowHead(g3, t2, this.selected, this.hover, e2.middle), t2.toArrow && this.edgeType.drawArrowHead(g3, t2, this.selected, this.hover, e2.to);
            }
          }
        }, {
          key: "drawLabel",
          value: function(g3, t2) {
            if (void 0 !== this.options.label) {
              var A2, e2 = this.from, C2 = this.to;
              if (this.labelModule.differentState(this.selected, this.hover) && this.labelModule.getTextSize(g3, this.selected, this.hover), e2.id != C2.id) {
                this.labelModule.pointToSelf = false, A2 = this.edgeType.getPoint(0.5, t2), g3.save();
                var I2 = this._getRotation(g3);
                0 != I2.angle && (g3.translate(I2.x, I2.y), g3.rotate(I2.angle)), this.labelModule.draw(g3, A2.x, A2.y, this.selected, this.hover), g3.restore();
              } else {
                this.labelModule.pointToSelf = true;
                var i2 = UD(g3, this.options.selfReference.angle, this.options.selfReference.size, e2);
                A2 = this._pointOnCircle(i2.x, i2.y, this.options.selfReference.size, this.options.selfReference.angle), this.labelModule.draw(g3, A2.x, A2.y, this.selected, this.hover);
              }
            }
          }
        }, {
          key: "getItemsOnPoint",
          value: function(g3) {
            var t2 = [];
            if (this.labelModule.visible()) {
              var A2 = this._getRotation();
              WD(this.labelModule.getSize(), g3, A2) && t2.push({
                edgeId: this.id,
                labelId: 0
              });
            }
            var e2 = {
              left: g3.x,
              top: g3.y
            };
            return this.isOverlappingWith(e2) && t2.push({
              edgeId: this.id
            }), t2;
          }
        }, {
          key: "isOverlappingWith",
          value: function(g3) {
            if (this.connected) {
              var t2 = this.from.x, A2 = this.from.y, e2 = this.to.x, C2 = this.to.y, I2 = g3.left, i2 = g3.top;
              return this.edgeType.getDistanceToEdge(t2, A2, e2, C2, I2, i2) < 10;
            }
            return false;
          }
        }, {
          key: "_getRotation",
          value: function(g3) {
            var t2 = this.edgeType.getViaNode(), A2 = this.edgeType.getPoint(0.5, t2);
            void 0 !== g3 && this.labelModule.calculateLabelSize(g3, this.selected, this.hover, A2.x, A2.y);
            var e2 = {
              x: A2.x,
              y: this.labelModule.size.yLine,
              angle: 0
            };
            if (!this.labelModule.visible()) return e2;
            if ("horizontal" === this.options.font.align) return e2;
            var C2 = this.from.y - this.to.y, I2 = this.from.x - this.to.x, i2 = Math.atan2(C2, I2);
            return (i2 < -1 && I2 < 0 || i2 > 0 && I2 < 0) && (i2 += Math.PI), e2.angle = i2, e2;
          }
        }, {
          key: "_pointOnCircle",
          value: function(g3, t2, A2, e2) {
            return {
              x: g3 + A2 * Math.cos(e2),
              y: t2 - A2 * Math.sin(e2)
            };
          }
        }, {
          key: "select",
          value: function() {
            this.selected = true;
          }
        }, {
          key: "unselect",
          value: function() {
            this.selected = false;
          }
        }, {
          key: "cleanup",
          value: function() {
            return this.edgeType.cleanup();
          }
        }, {
          key: "remove",
          value: function() {
            this.cleanup(), this.disconnect(), delete this.body.edges[this.id];
          }
        }, {
          key: "endPointsValid",
          value: function() {
            return void 0 !== this.body.nodes[this.fromId] && void 0 !== this.body.nodes[this.toId];
          }
        }], [{
          key: "parseOptions",
          value: function(g3, t2) {
            var A2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], e2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, C2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (Xf(["endPointOffset", "arrowStrikethrough", "id", "from", "hidden", "hoverWidth", "labelHighlightBold", "length", "line", "opacity", "physics", "scaling", "selectionWidth", "selfReferenceSize", "selfReference", "to", "title", "value", "width", "font", "chosen", "widthConstraint"], g3, t2, A2), void 0 !== t2.endPointOffset && void 0 !== t2.endPointOffset.from && (Ym(t2.endPointOffset.from) ? g3.endPointOffset.from = t2.endPointOffset.from : (g3.endPointOffset.from = void 0 !== e2.endPointOffset.from ? e2.endPointOffset.from : 0, console.error("endPointOffset.from is not a valid number"))), void 0 !== t2.endPointOffset && void 0 !== t2.endPointOffset.to && (Ym(t2.endPointOffset.to) ? g3.endPointOffset.to = t2.endPointOffset.to : (g3.endPointOffset.to = void 0 !== e2.endPointOffset.to ? e2.endPointOffset.to : 0, console.error("endPointOffset.to is not a valid number"))), QD(t2.label) ? g3.label = t2.label : QD(g3.label) || (g3.label = void 0), dv(g3, t2, "smooth", e2), dv(g3, t2, "shadow", e2), dv(g3, t2, "background", e2), void 0 !== t2.dashes && null !== t2.dashes ? g3.dashes = t2.dashes : true === A2 && null === t2.dashes && (g3.dashes = $c(e2.dashes)), void 0 !== t2.scaling && null !== t2.scaling ? (void 0 !== t2.scaling.min && (g3.scaling.min = t2.scaling.min), void 0 !== t2.scaling.max && (g3.scaling.max = t2.scaling.max), dv(g3.scaling, t2.scaling, "label", e2.scaling)) : true === A2 && null === t2.scaling && (g3.scaling = $c(e2.scaling)), void 0 !== t2.arrows && null !== t2.arrows) {
              if ("string" == typeof t2.arrows) {
                var I2 = t2.arrows.toLowerCase();
                g3.arrows.to.enabled = -1 != Xc(I2).call(I2, "to"), g3.arrows.middle.enabled = -1 != Xc(I2).call(I2, "middle"), g3.arrows.from.enabled = -1 != Xc(I2).call(I2, "from");
              } else {
                if ("object" !== yd(t2.arrows)) throw new Error("The arrow newOptions can only be an object or a string. Refer to the documentation. You used:" + eu(t2.arrows));
                dv(g3.arrows, t2.arrows, "to", e2.arrows), dv(g3.arrows, t2.arrows, "middle", e2.arrows), dv(g3.arrows, t2.arrows, "from", e2.arrows);
              }
            } else true === A2 && null === t2.arrows && (g3.arrows = $c(e2.arrows));
            if (void 0 !== t2.color && null !== t2.color) {
              var i2 = Uf(t2.color) ? {
                color: t2.color,
                highlight: t2.color,
                hover: t2.color,
                inherit: false,
                opacity: 1
              } : t2.color, o2 = g3.color;
              if (C2) qf(o2, e2.color, false, A2);
              else for (var n2 in o2) Object.prototype.hasOwnProperty.call(o2, n2) && delete o2[n2];
              if (Uf(o2)) o2.color = o2, o2.highlight = o2, o2.hover = o2, o2.inherit = false, void 0 === i2.opacity && (o2.opacity = 1);
              else {
                var r2 = false;
                void 0 !== i2.color && (o2.color = i2.color, r2 = true), void 0 !== i2.highlight && (o2.highlight = i2.highlight, r2 = true), void 0 !== i2.hover && (o2.hover = i2.hover, r2 = true), void 0 !== i2.inherit && (o2.inherit = i2.inherit), void 0 !== i2.opacity && (o2.opacity = Math.min(1, Math.max(0, i2.opacity))), true === r2 ? o2.inherit = false : void 0 === o2.inherit && (o2.inherit = "from");
              }
            } else true === A2 && null === t2.color && (g3.color = av(e2.color));
            true === A2 && null === t2.font && (g3.font = av(e2.font)), Object.prototype.hasOwnProperty.call(t2, "selfReferenceSize") && (console.warn("The selfReferenceSize property has been deprecated. Please use selfReference property instead. The selfReference can be set like thise selfReference:{size:30, angle:Math.PI / 4}"), g3.selfReference.size = t2.selfReferenceSize);
          }
        }]), g2;
      }(), FR = function() {
        function g2(t2, A2, e2) {
          var C2, I2 = this;
          cn(this, g2), this.body = t2, this.images = A2, this.groups = e2, this.body.functions.createEdge = je(C2 = this.create).call(C2, this), this.edgesListeners = {
            add: function(g3, t3) {
              I2.add(t3.items);
            },
            update: function(g3, t3) {
              I2.update(t3.items);
            },
            remove: function(g3, t3) {
              I2.remove(t3.items);
            }
          }, this.options = {}, this.defaultOptions = {
            arrows: {
              to: {
                enabled: false,
                scaleFactor: 1,
                type: "arrow"
              },
              middle: {
                enabled: false,
                scaleFactor: 1,
                type: "arrow"
              },
              from: {
                enabled: false,
                scaleFactor: 1,
                type: "arrow"
              }
            },
            endPointOffset: {
              from: 0,
              to: 0
            },
            arrowStrikethrough: true,
            color: {
              color: "#848484",
              highlight: "#848484",
              hover: "#848484",
              inherit: "from",
              opacity: 1
            },
            dashes: false,
            font: {
              color: "#343434",
              size: 14,
              face: "arial",
              background: "none",
              strokeWidth: 2,
              strokeColor: "#ffffff",
              align: "horizontal",
              multi: false,
              vadjust: 0,
              bold: {
                mod: "bold"
              },
              boldital: {
                mod: "bold italic"
              },
              ital: {
                mod: "italic"
              },
              mono: {
                mod: "",
                size: 15,
                face: "courier new",
                vadjust: 2
              }
            },
            hidden: false,
            hoverWidth: 1.5,
            label: void 0,
            labelHighlightBold: true,
            length: void 0,
            physics: true,
            scaling: {
              min: 1,
              max: 15,
              label: {
                enabled: true,
                min: 14,
                max: 30,
                maxVisible: 30,
                drawThreshold: 5
              },
              customScalingFunction: function(g3, t3, A3, e3) {
                if (t3 === g3) return 0.5;
                var C3 = 1 / (t3 - g3);
                return Math.max(0, (e3 - g3) * C3);
              }
            },
            selectionWidth: 1.5,
            selfReference: {
              size: 20,
              angle: Math.PI / 4,
              renderBehindTheNode: true
            },
            shadow: {
              enabled: false,
              color: "rgba(0,0,0,0.5)",
              size: 10,
              x: 5,
              y: 5
            },
            background: {
              enabled: false,
              color: "rgba(111,111,111,1)",
              size: 10,
              dashes: false
            },
            smooth: {
              enabled: true,
              type: "dynamic",
              forceDirection: "none",
              roundness: 0.5
            },
            title: void 0,
            width: 1,
            value: void 0
          }, qf(this.options, this.defaultOptions), this.bindEventListeners();
        }
        return kd(g2, [{
          key: "bindEventListeners",
          value: function() {
            var g3, t2, A2 = this;
            this.body.emitter.on("_forceDisableDynamicCurves", function(g4) {
              var t3 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              "dynamic" === g4 && (g4 = "continuous");
              var e2 = false;
              for (var C2 in A2.body.edges) if (Object.prototype.hasOwnProperty.call(A2.body.edges, C2)) {
                var I2 = A2.body.edges[C2], i2 = A2.body.data.edges.get(C2);
                if (null != i2) {
                  var o2 = i2.smooth;
                  void 0 !== o2 && true === o2.enabled && "dynamic" === o2.type && (void 0 === g4 ? I2.setOptions({
                    smooth: false
                  }) : I2.setOptions({
                    smooth: {
                      type: g4
                    }
                  }), e2 = true);
                }
              }
              true === t3 && true === e2 && A2.body.emitter.emit("_dataChanged");
            }), this.body.emitter.on("_dataUpdated", function() {
              A2.reconnectEdges();
            }), this.body.emitter.on("refreshEdges", je(g3 = this.refresh).call(g3, this)), this.body.emitter.on("refresh", je(t2 = this.refresh).call(t2, this)), this.body.emitter.on("destroy", function() {
              tv(A2.edgesListeners, function(g4, t3) {
                A2.body.data.edges && A2.body.data.edges.off(t3, g4);
              }), delete A2.body.functions.createEdge, delete A2.edgesListeners.add, delete A2.edgesListeners.update, delete A2.edgesListeners.remove, delete A2.edgesListeners;
            });
          }
        }, {
          key: "setOptions",
          value: function(g3) {
            if (void 0 !== g3) {
              ZR.parseOptions(this.options, g3, true, this.defaultOptions, true);
              var t2 = false;
              if (void 0 !== g3.smooth) for (var A2 in this.body.edges) Object.prototype.hasOwnProperty.call(this.body.edges, A2) && (t2 = this.body.edges[A2].updateEdgeType() || t2);
              if (void 0 !== g3.font) for (var e2 in this.body.edges) Object.prototype.hasOwnProperty.call(this.body.edges, e2) && this.body.edges[e2].updateLabelModule();
              void 0 === g3.hidden && void 0 === g3.physics && true !== t2 || this.body.emitter.emit("_dataChanged");
            }
          }
        }, {
          key: "setData",
          value: function(g3) {
            var t2 = this, A2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], e2 = this.body.data.edges;
            if (kD("id", g3)) this.body.data.edges = g3;
            else if (Rh(g3)) this.body.data.edges = new mD(), this.body.data.edges.add(g3);
            else {
              if (g3) throw new TypeError("Array or DataSet expected");
              this.body.data.edges = new mD();
            }
            if (e2 && tv(this.edgesListeners, function(g4, t3) {
              e2.off(t3, g4);
            }), this.body.edges = {}, this.body.data.edges) {
              tv(this.edgesListeners, function(g4, A3) {
                t2.body.data.edges.on(A3, g4);
              });
              var C2 = this.body.data.edges.getIds();
              this.add(C2, true);
            }
            this.body.emitter.emit("_adjustEdgesForHierarchicalLayout"), false === A2 && this.body.emitter.emit("_dataChanged");
          }
        }, {
          key: "add",
          value: function(g3) {
            for (var t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], A2 = this.body.edges, e2 = this.body.data.edges, C2 = 0; C2 < g3.length; C2++) {
              var I2 = g3[C2], i2 = A2[I2];
              i2 && i2.disconnect();
              var o2 = e2.get(I2, {
                showInternalIds: true
              });
              A2[I2] = this.create(o2);
            }
            this.body.emitter.emit("_adjustEdgesForHierarchicalLayout"), false === t2 && this.body.emitter.emit("_dataChanged");
          }
        }, {
          key: "update",
          value: function(g3) {
            for (var t2 = this.body.edges, A2 = this.body.data.edges, e2 = false, C2 = 0; C2 < g3.length; C2++) {
              var I2 = g3[C2], i2 = A2.get(I2), o2 = t2[I2];
              void 0 !== o2 ? (o2.disconnect(), e2 = o2.setOptions(i2) || e2, o2.connect()) : (this.body.edges[I2] = this.create(i2), e2 = true);
            }
            true === e2 ? (this.body.emitter.emit("_adjustEdgesForHierarchicalLayout"), this.body.emitter.emit("_dataChanged")) : this.body.emitter.emit("_dataUpdated");
          }
        }, {
          key: "remove",
          value: function(g3) {
            var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (0 !== g3.length) {
              var A2 = this.body.edges;
              tv(g3, function(g4) {
                var t3 = A2[g4];
                void 0 !== t3 && t3.remove();
              }), t2 && this.body.emitter.emit("_dataChanged");
            }
          }
        }, {
          key: "refresh",
          value: function() {
            var g3 = this;
            tv(this.body.edges, function(t2, A2) {
              var e2 = g3.body.data.edges.get(A2);
              void 0 !== e2 && t2.setOptions(e2);
            });
          }
        }, {
          key: "create",
          value: function(g3) {
            return new ZR(g3, this.body, this.images, this.options, this.defaultOptions);
          }
        }, {
          key: "reconnectEdges",
          value: function() {
            var g3, t2 = this.body.nodes, A2 = this.body.edges;
            for (g3 in t2) Object.prototype.hasOwnProperty.call(t2, g3) && (t2[g3].edges = []);
            for (g3 in A2) if (Object.prototype.hasOwnProperty.call(A2, g3)) {
              var e2 = A2[g3];
              e2.from = null, e2.to = null, e2.connect();
            }
          }
        }, {
          key: "getConnectedNodes",
          value: function(g3) {
            var t2 = [];
            if (void 0 !== this.body.edges[g3]) {
              var A2 = this.body.edges[g3];
              void 0 !== A2.fromId && t2.push(A2.fromId), void 0 !== A2.toId && t2.push(A2.toId);
            }
            return t2;
          }
        }, {
          key: "_updateState",
          value: function() {
            this._addMissingEdges(), this._removeInvalidEdges();
          }
        }, {
          key: "_removeInvalidEdges",
          value: function() {
            var g3 = this, t2 = [];
            tv(this.body.edges, function(A2, e2) {
              var C2 = g3.body.nodes[A2.toId], I2 = g3.body.nodes[A2.fromId];
              void 0 !== C2 && true === C2.isCluster || void 0 !== I2 && true === I2.isCluster || void 0 !== C2 && void 0 !== I2 || t2.push(e2);
            }), this.remove(t2, false);
          }
        }, {
          key: "_addMissingEdges",
          value: function() {
            var g3 = this.body.data.edges;
            if (null != g3) {
              var t2 = this.body.edges, A2 = [];
              Cl(g3).call(g3, function(g4, e2) {
                void 0 === t2[e2] && A2.push(e2);
              }), this.add(A2, true);
            }
          }
        }]), g2;
      }(), GR = function() {
        function g2(t2, A2, e2) {
          cn(this, g2), this.body = t2, this.physicsBody = A2, this.barnesHutTree, this.setOptions(e2), this._rng = Ff("BARNES HUT SOLVER");
        }
        return kd(g2, [{
          key: "setOptions",
          value: function(g3) {
            this.options = g3, this.thetaInversed = 1 / this.options.theta, this.overlapAvoidanceFactor = 1 - Math.max(0, Math.min(1, this.options.avoidOverlap));
          }
        }, {
          key: "solve",
          value: function() {
            if (0 !== this.options.gravitationalConstant && this.physicsBody.physicsNodeIndices.length > 0) {
              var g3, t2 = this.body.nodes, A2 = this.physicsBody.physicsNodeIndices, e2 = A2.length, C2 = this._formBarnesHutTree(t2, A2);
              this.barnesHutTree = C2;
              for (var I2 = 0; I2 < e2; I2++) (g3 = t2[A2[I2]]).options.mass > 0 && this._getForceContributions(C2.root, g3);
            }
          }
        }, {
          key: "_getForceContributions",
          value: function(g3, t2) {
            this._getForceContribution(g3.children.NW, t2), this._getForceContribution(g3.children.NE, t2), this._getForceContribution(g3.children.SW, t2), this._getForceContribution(g3.children.SE, t2);
          }
        }, {
          key: "_getForceContribution",
          value: function(g3, t2) {
            if (g3.childrenCount > 0) {
              var A2 = g3.centerOfMass.x - t2.x, e2 = g3.centerOfMass.y - t2.y, C2 = Math.sqrt(A2 * A2 + e2 * e2);
              C2 * g3.calcSize > this.thetaInversed ? this._calculateForces(C2, A2, e2, t2, g3) : 4 === g3.childrenCount ? this._getForceContributions(g3, t2) : g3.children.data.id != t2.id && this._calculateForces(C2, A2, e2, t2, g3);
            }
          }
        }, {
          key: "_calculateForces",
          value: function(g3, t2, A2, e2, C2) {
            0 === g3 && (t2 = g3 = 0.1), this.overlapAvoidanceFactor < 1 && e2.shape.radius && (g3 = Math.max(0.1 + this.overlapAvoidanceFactor * e2.shape.radius, g3 - e2.shape.radius));
            var I2 = this.options.gravitationalConstant * C2.mass * e2.options.mass / Math.pow(g3, 3), i2 = t2 * I2, o2 = A2 * I2;
            this.physicsBody.forces[e2.id].x += i2, this.physicsBody.forces[e2.id].y += o2;
          }
        }, {
          key: "_formBarnesHutTree",
          value: function(g3, t2) {
            for (var A2, e2 = t2.length, C2 = g3[t2[0]].x, I2 = g3[t2[0]].y, i2 = g3[t2[0]].x, o2 = g3[t2[0]].y, n2 = 1; n2 < e2; n2++) {
              var r2 = g3[t2[n2]], s2 = r2.x, a2 = r2.y;
              r2.options.mass > 0 && (s2 < C2 && (C2 = s2), s2 > i2 && (i2 = s2), a2 < I2 && (I2 = a2), a2 > o2 && (o2 = a2));
            }
            var d2 = Math.abs(i2 - C2) - Math.abs(o2 - I2);
            d2 > 0 ? (I2 -= 0.5 * d2, o2 += 0.5 * d2) : (C2 += 0.5 * d2, i2 -= 0.5 * d2);
            var h2 = Math.max(1e-5, Math.abs(i2 - C2)), l2 = 0.5 * h2, c2 = 0.5 * (C2 + i2), u2 = 0.5 * (I2 + o2), p2 = {
              root: {
                centerOfMass: {
                  x: 0,
                  y: 0
                },
                mass: 0,
                range: {
                  minX: c2 - l2,
                  maxX: c2 + l2,
                  minY: u2 - l2,
                  maxY: u2 + l2
                },
                size: h2,
                calcSize: 1 / h2,
                children: {
                  data: null
                },
                maxWidth: 0,
                level: 0,
                childrenCount: 4
              }
            };
            this._splitBranch(p2.root);
            for (var f2 = 0; f2 < e2; f2++) (A2 = g3[t2[f2]]).options.mass > 0 && this._placeInTree(p2.root, A2);
            return p2;
          }
        }, {
          key: "_updateBranchMass",
          value: function(g3, t2) {
            var A2 = g3.centerOfMass, e2 = g3.mass + t2.options.mass, C2 = 1 / e2;
            A2.x = A2.x * g3.mass + t2.x * t2.options.mass, A2.x *= C2, A2.y = A2.y * g3.mass + t2.y * t2.options.mass, A2.y *= C2, g3.mass = e2;
            var I2 = Math.max(Math.max(t2.height, t2.radius), t2.width);
            g3.maxWidth = g3.maxWidth < I2 ? I2 : g3.maxWidth;
          }
        }, {
          key: "_placeInTree",
          value: function(g3, t2, A2) {
            1 == A2 && void 0 !== A2 || this._updateBranchMass(g3, t2);
            var e2, C2 = g3.children.NW.range;
            e2 = C2.maxX > t2.x ? C2.maxY > t2.y ? "NW" : "SW" : C2.maxY > t2.y ? "NE" : "SE", this._placeInRegion(g3, t2, e2);
          }
        }, {
          key: "_placeInRegion",
          value: function(g3, t2, A2) {
            var e2 = g3.children[A2];
            switch (e2.childrenCount) {
              case 0:
                e2.children.data = t2, e2.childrenCount = 1, this._updateBranchMass(e2, t2);
                break;
              case 1:
                e2.children.data.x === t2.x && e2.children.data.y === t2.y ? (t2.x += this._rng(), t2.y += this._rng()) : (this._splitBranch(e2), this._placeInTree(e2, t2));
                break;
              case 4:
                this._placeInTree(e2, t2);
            }
          }
        }, {
          key: "_splitBranch",
          value: function(g3) {
            var t2 = null;
            1 === g3.childrenCount && (t2 = g3.children.data, g3.mass = 0, g3.centerOfMass.x = 0, g3.centerOfMass.y = 0), g3.childrenCount = 4, g3.children.data = null, this._insertRegion(g3, "NW"), this._insertRegion(g3, "NE"), this._insertRegion(g3, "SW"), this._insertRegion(g3, "SE"), null != t2 && this._placeInTree(g3, t2);
          }
        }, {
          key: "_insertRegion",
          value: function(g3, t2) {
            var A2, e2, C2, I2, i2 = 0.5 * g3.size;
            switch (t2) {
              case "NW":
                A2 = g3.range.minX, e2 = g3.range.minX + i2, C2 = g3.range.minY, I2 = g3.range.minY + i2;
                break;
              case "NE":
                A2 = g3.range.minX + i2, e2 = g3.range.maxX, C2 = g3.range.minY, I2 = g3.range.minY + i2;
                break;
              case "SW":
                A2 = g3.range.minX, e2 = g3.range.minX + i2, C2 = g3.range.minY + i2, I2 = g3.range.maxY;
                break;
              case "SE":
                A2 = g3.range.minX + i2, e2 = g3.range.maxX, C2 = g3.range.minY + i2, I2 = g3.range.maxY;
            }
            g3.children[t2] = {
              centerOfMass: {
                x: 0,
                y: 0
              },
              mass: 0,
              range: {
                minX: A2,
                maxX: e2,
                minY: C2,
                maxY: I2
              },
              size: 0.5 * g3.size,
              calcSize: 2 * g3.calcSize,
              children: {
                data: null
              },
              maxWidth: 0,
              level: g3.level + 1,
              childrenCount: 0
            };
          }
        }, {
          key: "_debug",
          value: function(g3, t2) {
            void 0 !== this.barnesHutTree && (g3.lineWidth = 1, this._drawBranch(this.barnesHutTree.root, g3, t2));
          }
        }, {
          key: "_drawBranch",
          value: function(g3, t2, A2) {
            void 0 === A2 && (A2 = "#FF0000"), 4 === g3.childrenCount && (this._drawBranch(g3.children.NW, t2), this._drawBranch(g3.children.NE, t2), this._drawBranch(g3.children.SE, t2), this._drawBranch(g3.children.SW, t2)), t2.strokeStyle = A2, t2.beginPath(), t2.moveTo(g3.range.minX, g3.range.minY), t2.lineTo(g3.range.maxX, g3.range.minY), t2.stroke(), t2.beginPath(), t2.moveTo(g3.range.maxX, g3.range.minY), t2.lineTo(g3.range.maxX, g3.range.maxY), t2.stroke(), t2.beginPath(), t2.moveTo(g3.range.maxX, g3.range.maxY), t2.lineTo(g3.range.minX, g3.range.maxY), t2.stroke(), t2.beginPath(), t2.moveTo(g3.range.minX, g3.range.maxY), t2.lineTo(g3.range.minX, g3.range.minY), t2.stroke();
          }
        }]), g2;
      }(), jR = function() {
        function g2(t2, A2, e2) {
          cn(this, g2), this._rng = Ff("REPULSION SOLVER"), this.body = t2, this.physicsBody = A2, this.setOptions(e2);
        }
        return kd(g2, [{
          key: "setOptions",
          value: function(g3) {
            this.options = g3;
          }
        }, {
          key: "solve",
          value: function() {
            for (var g3, t2, A2, e2, C2, I2, i2, o2, n2 = this.body.nodes, r2 = this.physicsBody.physicsNodeIndices, s2 = this.physicsBody.forces, a2 = this.options.nodeDistance, d2 = -2 / 3 / a2, h2 = 0; h2 < r2.length - 1; h2++) {
              i2 = n2[r2[h2]];
              for (var l2 = h2 + 1; l2 < r2.length; l2++) g3 = (o2 = n2[r2[l2]]).x - i2.x, t2 = o2.y - i2.y, 0 === (A2 = Math.sqrt(g3 * g3 + t2 * t2)) && (g3 = A2 = 0.1 * this._rng()), A2 < 2 * a2 && (I2 = A2 < 0.5 * a2 ? 1 : d2 * A2 + 1.3333333333333333, e2 = g3 * (I2 /= A2), C2 = t2 * I2, s2[i2.id].x -= e2, s2[i2.id].y -= C2, s2[o2.id].x += e2, s2[o2.id].y += C2);
            }
          }
        }]), g2;
      }(), LR = function() {
        function g2(t2, A2, e2) {
          cn(this, g2), this.body = t2, this.physicsBody = A2, this.setOptions(e2);
        }
        return kd(g2, [{
          key: "setOptions",
          value: function(g3) {
            this.options = g3, this.overlapAvoidanceFactor = Math.max(0, Math.min(1, this.options.avoidOverlap || 0));
          }
        }, {
          key: "solve",
          value: function() {
            for (var g3 = this.body.nodes, t2 = this.physicsBody.physicsNodeIndices, A2 = this.physicsBody.forces, e2 = this.options.nodeDistance, C2 = 0; C2 < t2.length - 1; C2++) for (var I2 = g3[t2[C2]], i2 = C2 + 1; i2 < t2.length; i2++) {
              var o2 = g3[t2[i2]];
              if (I2.level === o2.level) {
                var n2 = e2 + this.overlapAvoidanceFactor * ((I2.shape.radius || 0) / 2 + (o2.shape.radius || 0) / 2), r2 = o2.x - I2.x, s2 = o2.y - I2.y, a2 = Math.sqrt(r2 * r2 + s2 * s2), d2 = void 0;
                d2 = a2 < n2 ? -Math.pow(0.05 * a2, 2) + Math.pow(0.05 * n2, 2) : 0, 0 !== a2 && (d2 /= a2);
                var h2 = r2 * d2, l2 = s2 * d2;
                A2[I2.id].x -= h2, A2[I2.id].y -= l2, A2[o2.id].x += h2, A2[o2.id].y += l2;
              }
            }
          }
        }]), g2;
      }(), VR = function() {
        function g2(t2, A2, e2) {
          cn(this, g2), this.body = t2, this.physicsBody = A2, this.setOptions(e2);
        }
        return kd(g2, [{
          key: "setOptions",
          value: function(g3) {
            this.options = g3;
          }
        }, {
          key: "solve",
          value: function() {
            for (var g3, t2, A2, e2, C2, I2 = this.physicsBody.physicsEdgeIndices, i2 = this.body.edges, o2 = 0; o2 < I2.length; o2++) true === (t2 = i2[I2[o2]]).connected && t2.toId !== t2.fromId && void 0 !== this.body.nodes[t2.toId] && void 0 !== this.body.nodes[t2.fromId] && (void 0 !== t2.edgeType.via ? (g3 = void 0 === t2.options.length ? this.options.springLength : t2.options.length, A2 = t2.to, e2 = t2.edgeType.via, C2 = t2.from, this._calculateSpringForce(A2, e2, 0.5 * g3), this._calculateSpringForce(e2, C2, 0.5 * g3)) : (g3 = void 0 === t2.options.length ? 1.5 * this.options.springLength : t2.options.length, this._calculateSpringForce(t2.from, t2.to, g3)));
          }
        }, {
          key: "_calculateSpringForce",
          value: function(g3, t2, A2) {
            var e2 = g3.x - t2.x, C2 = g3.y - t2.y, I2 = Math.max(Math.sqrt(e2 * e2 + C2 * C2), 0.01), i2 = this.options.springConstant * (A2 - I2) / I2, o2 = e2 * i2, n2 = C2 * i2;
            void 0 !== this.physicsBody.forces[g3.id] && (this.physicsBody.forces[g3.id].x += o2, this.physicsBody.forces[g3.id].y += n2), void 0 !== this.physicsBody.forces[t2.id] && (this.physicsBody.forces[t2.id].x -= o2, this.physicsBody.forces[t2.id].y -= n2);
          }
        }]), g2;
      }(), YR = function() {
        function g2(t2, A2, e2) {
          cn(this, g2), this.body = t2, this.physicsBody = A2, this.setOptions(e2);
        }
        return kd(g2, [{
          key: "setOptions",
          value: function(g3) {
            this.options = g3;
          }
        }, {
          key: "solve",
          value: function() {
            for (var g3, t2, A2, e2, C2, I2, i2, o2, n2, r2, s2 = this.body.edges, a2 = 0.5, d2 = this.physicsBody.physicsEdgeIndices, h2 = this.physicsBody.physicsNodeIndices, l2 = this.physicsBody.forces, c2 = 0; c2 < h2.length; c2++) {
              var u2 = h2[c2];
              l2[u2].springFx = 0, l2[u2].springFy = 0;
            }
            for (var p2 = 0; p2 < d2.length; p2++) true === (t2 = s2[d2[p2]]).connected && (g3 = void 0 === t2.options.length ? this.options.springLength : t2.options.length, A2 = t2.from.x - t2.to.x, e2 = t2.from.y - t2.to.y, o2 = 0 === (o2 = Math.sqrt(A2 * A2 + e2 * e2)) ? 0.01 : o2, C2 = A2 * (i2 = this.options.springConstant * (g3 - o2) / o2), I2 = e2 * i2, t2.to.level != t2.from.level ? (void 0 !== l2[t2.toId] && (l2[t2.toId].springFx -= C2, l2[t2.toId].springFy -= I2), void 0 !== l2[t2.fromId] && (l2[t2.fromId].springFx += C2, l2[t2.fromId].springFy += I2)) : (void 0 !== l2[t2.toId] && (l2[t2.toId].x -= a2 * C2, l2[t2.toId].y -= a2 * I2), void 0 !== l2[t2.fromId] && (l2[t2.fromId].x += a2 * C2, l2[t2.fromId].y += a2 * I2)));
            i2 = 1;
            for (var f2 = 0; f2 < h2.length; f2++) {
              var v2 = h2[f2];
              n2 = Math.min(i2, Math.max(-i2, l2[v2].springFx)), r2 = Math.min(i2, Math.max(-i2, l2[v2].springFy)), l2[v2].x += n2, l2[v2].y += r2;
            }
            for (var y2 = 0, m2 = 0, b2 = 0; b2 < h2.length; b2++) {
              var w2 = h2[b2];
              y2 += l2[w2].x, m2 += l2[w2].y;
            }
            for (var k2 = y2 / h2.length, x2 = m2 / h2.length, E2 = 0; E2 < h2.length; E2++) {
              var O2 = h2[E2];
              l2[O2].x -= k2, l2[O2].y -= x2;
            }
          }
        }]), g2;
      }(), WR = function() {
        function g2(t2, A2, e2) {
          cn(this, g2), this.body = t2, this.physicsBody = A2, this.setOptions(e2);
        }
        return kd(g2, [{
          key: "setOptions",
          value: function(g3) {
            this.options = g3;
          }
        }, {
          key: "solve",
          value: function() {
            for (var g3, t2, A2, e2, C2 = this.body.nodes, I2 = this.physicsBody.physicsNodeIndices, i2 = this.physicsBody.forces, o2 = 0; o2 < I2.length; o2++) {
              g3 = -(e2 = C2[I2[o2]]).x, t2 = -e2.y, A2 = Math.sqrt(g3 * g3 + t2 * t2), this._calculateForces(A2, g3, t2, i2, e2);
            }
          }
        }, {
          key: "_calculateForces",
          value: function(g3, t2, A2, e2, C2) {
            var I2 = 0 === g3 ? 0 : this.options.centralGravity / g3;
            e2[C2.id].x = t2 * I2, e2[C2.id].y = A2 * I2;
          }
        }]), g2;
      }();
      function QR(g2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !MT) return false;
          if (MT.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(MT(Boolean, [], function() {
            })), true;
          } catch (g3) {
            return false;
          }
        }();
        return function() {
          var A2, e2 = nb(g2);
          if (t2) {
            var C2 = nb(this).constructor;
            A2 = MT(e2, arguments, C2);
          } else A2 = e2.apply(this, arguments);
          return Ib(this, A2);
        };
      }
      var UR = function(g2) {
        Cb(A2, g2);
        var t2 = QR(A2);
        function A2(g3, e2, C2) {
          var I2;
          return cn(this, A2), (I2 = t2.call(this, g3, e2, C2))._rng = Ff("FORCE ATLAS 2 BASED REPULSION SOLVER"), I2;
        }
        return kd(A2, [{
          key: "_calculateForces",
          value: function(g3, t3, A3, e2, C2) {
            0 === g3 && (t3 = g3 = 0.1 * this._rng()), this.overlapAvoidanceFactor < 1 && e2.shape.radius && (g3 = Math.max(0.1 + this.overlapAvoidanceFactor * e2.shape.radius, g3 - e2.shape.radius));
            var I2 = e2.edges.length + 1, i2 = this.options.gravitationalConstant * C2.mass * e2.options.mass * I2 / Math.pow(g3, 2), o2 = t3 * i2, n2 = A3 * i2;
            this.physicsBody.forces[e2.id].x += o2, this.physicsBody.forces[e2.id].y += n2;
          }
        }]), A2;
      }(GR);
      function _R(g2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !MT) return false;
          if (MT.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(MT(Boolean, [], function() {
            })), true;
          } catch (g3) {
            return false;
          }
        }();
        return function() {
          var A2, e2 = nb(g2);
          if (t2) {
            var C2 = nb(this).constructor;
            A2 = MT(e2, arguments, C2);
          } else A2 = e2.apply(this, arguments);
          return Ib(this, A2);
        };
      }
      var KR = function(g2) {
        Cb(A2, g2);
        var t2 = _R(A2);
        function A2(g3, e2, C2) {
          return cn(this, A2), t2.call(this, g3, e2, C2);
        }
        return kd(A2, [{
          key: "_calculateForces",
          value: function(g3, t3, A3, e2, C2) {
            if (g3 > 0) {
              var I2 = C2.edges.length + 1, i2 = this.options.centralGravity * I2 * C2.options.mass;
              e2[C2.id].x = t3 * i2, e2[C2.id].y = A3 * i2;
            }
          }
        }]), A2;
      }(WR), HR = function() {
        function g2(t2) {
          cn(this, g2), this.body = t2, this.physicsBody = {
            physicsNodeIndices: [],
            physicsEdgeIndices: [],
            forces: {},
            velocities: {}
          }, this.physicsEnabled = true, this.simulationInterval = 1e3 / 60, this.requiresTimeout = true, this.previousStates = {}, this.referenceState = {}, this.freezeCache = {}, this.renderTimer = void 0, this.adaptiveTimestep = false, this.adaptiveTimestepEnabled = false, this.adaptiveCounter = 0, this.adaptiveInterval = 3, this.stabilized = false, this.startedStabilization = false, this.stabilizationIterations = 0, this.ready = false, this.options = {}, this.defaultOptions = {
            enabled: true,
            barnesHut: {
              theta: 0.5,
              gravitationalConstant: -2e3,
              centralGravity: 0.3,
              springLength: 95,
              springConstant: 0.04,
              damping: 0.09,
              avoidOverlap: 0
            },
            forceAtlas2Based: {
              theta: 0.5,
              gravitationalConstant: -50,
              centralGravity: 0.01,
              springConstant: 0.08,
              springLength: 100,
              damping: 0.4,
              avoidOverlap: 0
            },
            repulsion: {
              centralGravity: 0.2,
              springLength: 200,
              springConstant: 0.05,
              nodeDistance: 100,
              damping: 0.09,
              avoidOverlap: 0
            },
            hierarchicalRepulsion: {
              centralGravity: 0,
              springLength: 100,
              springConstant: 0.01,
              nodeDistance: 120,
              damping: 0.09
            },
            maxVelocity: 50,
            minVelocity: 0.75,
            solver: "barnesHut",
            stabilization: {
              enabled: true,
              iterations: 1e3,
              updateInterval: 50,
              onlyDynamicEdges: false,
              fit: true
            },
            timestep: 0.5,
            adaptiveTimestep: true,
            wind: {
              x: 0,
              y: 0
            }
          }, fe(this.options, this.defaultOptions), this.timestep = 0.5, this.layoutFailed = false, this.bindEventListeners();
        }
        return kd(g2, [{
          key: "bindEventListeners",
          value: function() {
            var g3 = this;
            this.body.emitter.on("initPhysics", function() {
              g3.initPhysics();
            }), this.body.emitter.on("_layoutFailed", function() {
              g3.layoutFailed = true;
            }), this.body.emitter.on("resetPhysics", function() {
              g3.stopSimulation(), g3.ready = false;
            }), this.body.emitter.on("disablePhysics", function() {
              g3.physicsEnabled = false, g3.stopSimulation();
            }), this.body.emitter.on("restorePhysics", function() {
              g3.setOptions(g3.options), true === g3.ready && g3.startSimulation();
            }), this.body.emitter.on("startSimulation", function() {
              true === g3.ready && g3.startSimulation();
            }), this.body.emitter.on("stopSimulation", function() {
              g3.stopSimulation();
            }), this.body.emitter.on("destroy", function() {
              g3.stopSimulation(false), g3.body.emitter.off();
            }), this.body.emitter.on("_dataChanged", function() {
              g3.updatePhysicsData();
            });
          }
        }, {
          key: "setOptions",
          value: function(g3) {
            if (void 0 !== g3) if (false === g3) this.options.enabled = false, this.physicsEnabled = false, this.stopSimulation();
            else if (true === g3) this.options.enabled = true, this.physicsEnabled = true, this.startSimulation();
            else {
              this.physicsEnabled = true, Jf(["stabilization"], this.options, g3), dv(this.options, g3, "stabilization"), void 0 === g3.enabled && (this.options.enabled = true), false === this.options.enabled && (this.physicsEnabled = false, this.stopSimulation());
              var t2 = this.options.wind;
              t2 && (("number" != typeof t2.x || jm(t2.x)) && (t2.x = 0), ("number" != typeof t2.y || jm(t2.y)) && (t2.y = 0)), this.timestep = this.options.timestep;
            }
            this.init();
          }
        }, {
          key: "init",
          value: function() {
            var g3;
            "forceAtlas2Based" === this.options.solver ? (g3 = this.options.forceAtlas2Based, this.nodesSolver = new UR(this.body, this.physicsBody, g3), this.edgesSolver = new VR(this.body, this.physicsBody, g3), this.gravitySolver = new KR(this.body, this.physicsBody, g3)) : "repulsion" === this.options.solver ? (g3 = this.options.repulsion, this.nodesSolver = new jR(this.body, this.physicsBody, g3), this.edgesSolver = new VR(this.body, this.physicsBody, g3), this.gravitySolver = new WR(this.body, this.physicsBody, g3)) : "hierarchicalRepulsion" === this.options.solver ? (g3 = this.options.hierarchicalRepulsion, this.nodesSolver = new LR(this.body, this.physicsBody, g3), this.edgesSolver = new YR(this.body, this.physicsBody, g3), this.gravitySolver = new WR(this.body, this.physicsBody, g3)) : (g3 = this.options.barnesHut, this.nodesSolver = new GR(this.body, this.physicsBody, g3), this.edgesSolver = new VR(this.body, this.physicsBody, g3), this.gravitySolver = new WR(this.body, this.physicsBody, g3)), this.modelOptions = g3;
          }
        }, {
          key: "initPhysics",
          value: function() {
            true === this.physicsEnabled && true === this.options.enabled ? true === this.options.stabilization.enabled ? this.stabilize() : (this.stabilized = false, this.ready = true, this.body.emitter.emit("fit", {}, this.layoutFailed), this.startSimulation()) : (this.ready = true, this.body.emitter.emit("fit"));
          }
        }, {
          key: "startSimulation",
          value: function() {
            var g3;
            true === this.physicsEnabled && true === this.options.enabled ? (this.stabilized = false, this.adaptiveTimestep = false, this.body.emitter.emit("_resizeNodes"), void 0 === this.viewFunction && (this.viewFunction = je(g3 = this.simulationStep).call(g3, this), this.body.emitter.on("initRedraw", this.viewFunction), this.body.emitter.emit("_startRendering"))) : this.body.emitter.emit("_redraw");
          }
        }, {
          key: "stopSimulation",
          value: function() {
            var g3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            this.stabilized = true, true === g3 && this._emitStabilized(), void 0 !== this.viewFunction && (this.body.emitter.off("initRedraw", this.viewFunction), this.viewFunction = void 0, true === g3 && this.body.emitter.emit("_stopRendering"));
          }
        }, {
          key: "simulationStep",
          value: function() {
            var g3 = Qh();
            this.physicsTick(), (Qh() - g3 < 0.4 * this.simulationInterval || true === this.runDoubleSpeed) && false === this.stabilized && (this.physicsTick(), this.runDoubleSpeed = true), true === this.stabilized && this.stopSimulation();
          }
        }, {
          key: "_emitStabilized",
          value: function() {
            var g3 = this, t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.stabilizationIterations;
            (this.stabilizationIterations > 1 || true === this.startedStabilization) && wu(function() {
              g3.body.emitter.emit("stabilized", {
                iterations: t2
              }), g3.startedStabilization = false, g3.stabilizationIterations = 0;
            }, 0);
          }
        }, {
          key: "physicsStep",
          value: function() {
            this.gravitySolver.solve(), this.nodesSolver.solve(), this.edgesSolver.solve(), this.moveNodes();
          }
        }, {
          key: "adjustTimeStep",
          value: function() {
            true === this._evaluateStepQuality() ? this.timestep = 1.2 * this.timestep : this.timestep / 1.2 < this.options.timestep ? this.timestep = this.options.timestep : (this.adaptiveCounter = -1, this.timestep = Math.max(this.options.timestep, this.timestep / 1.2));
          }
        }, {
          key: "physicsTick",
          value: function() {
            if (this._startStabilizing(), true !== this.stabilized) {
              if (true === this.adaptiveTimestep && true === this.adaptiveTimestepEnabled) this.adaptiveCounter % this.adaptiveInterval == 0 ? (this.timestep = 2 * this.timestep, this.physicsStep(), this.revert(), this.timestep = 0.5 * this.timestep, this.physicsStep(), this.physicsStep(), this.adjustTimeStep()) : this.physicsStep(), this.adaptiveCounter += 1;
              else this.timestep = this.options.timestep, this.physicsStep();
              true === this.stabilized && this.revert(), this.stabilizationIterations++;
            }
          }
        }, {
          key: "updatePhysicsData",
          value: function() {
            this.physicsBody.forces = {}, this.physicsBody.physicsNodeIndices = [], this.physicsBody.physicsEdgeIndices = [];
            var g3 = this.body.nodes, t2 = this.body.edges;
            for (var A2 in g3) Object.prototype.hasOwnProperty.call(g3, A2) && true === g3[A2].options.physics && this.physicsBody.physicsNodeIndices.push(g3[A2].id);
            for (var e2 in t2) Object.prototype.hasOwnProperty.call(t2, e2) && true === t2[e2].options.physics && this.physicsBody.physicsEdgeIndices.push(t2[e2].id);
            for (var C2 = 0; C2 < this.physicsBody.physicsNodeIndices.length; C2++) {
              var I2 = this.physicsBody.physicsNodeIndices[C2];
              this.physicsBody.forces[I2] = {
                x: 0,
                y: 0
              }, void 0 === this.physicsBody.velocities[I2] && (this.physicsBody.velocities[I2] = {
                x: 0,
                y: 0
              });
            }
            for (var i2 in this.physicsBody.velocities) void 0 === g3[i2] && delete this.physicsBody.velocities[i2];
          }
        }, {
          key: "revert",
          value: function() {
            var g3 = Lh(this.previousStates), t2 = this.body.nodes, A2 = this.physicsBody.velocities;
            this.referenceState = {};
            for (var e2 = 0; e2 < g3.length; e2++) {
              var C2 = g3[e2];
              void 0 !== t2[C2] ? true === t2[C2].options.physics && (this.referenceState[C2] = {
                positions: {
                  x: t2[C2].x,
                  y: t2[C2].y
                }
              }, A2[C2].x = this.previousStates[C2].vx, A2[C2].y = this.previousStates[C2].vy, t2[C2].x = this.previousStates[C2].x, t2[C2].y = this.previousStates[C2].y) : delete this.previousStates[C2];
            }
          }
        }, {
          key: "_evaluateStepQuality",
          value: function() {
            var g3, t2, A2 = this.body.nodes, e2 = this.referenceState;
            for (var C2 in this.referenceState) if (Object.prototype.hasOwnProperty.call(this.referenceState, C2) && void 0 !== A2[C2] && (g3 = A2[C2].x - e2[C2].positions.x, t2 = A2[C2].y - e2[C2].positions.y, Math.sqrt(Math.pow(g3, 2) + Math.pow(t2, 2)) > 0.3)) return false;
            return true;
          }
        }, {
          key: "moveNodes",
          value: function() {
            for (var g3 = this.physicsBody.physicsNodeIndices, t2 = 0, A2 = 0, e2 = 0; e2 < g3.length; e2++) {
              var C2 = g3[e2], I2 = this._performStep(C2);
              t2 = Math.max(t2, I2), A2 += I2;
            }
            this.adaptiveTimestepEnabled = A2 / g3.length < 5, this.stabilized = t2 < this.options.minVelocity;
          }
        }, {
          key: "calculateComponentVelocity",
          value: function(g3, t2, A2) {
            g3 += (t2 - this.modelOptions.damping * g3) / A2 * this.timestep;
            var e2 = this.options.maxVelocity || 1e9;
            return Math.abs(g3) > e2 && (g3 = g3 > 0 ? e2 : -e2), g3;
          }
        }, {
          key: "_performStep",
          value: function(g3) {
            var t2 = this.body.nodes[g3], A2 = this.physicsBody.forces[g3];
            this.options.wind && (A2.x += this.options.wind.x, A2.y += this.options.wind.y);
            var e2 = this.physicsBody.velocities[g3];
            return this.previousStates[g3] = {
              x: t2.x,
              y: t2.y,
              vx: e2.x,
              vy: e2.y
            }, false === t2.options.fixed.x ? (e2.x = this.calculateComponentVelocity(e2.x, A2.x, t2.options.mass), t2.x += e2.x * this.timestep) : (A2.x = 0, e2.x = 0), false === t2.options.fixed.y ? (e2.y = this.calculateComponentVelocity(e2.y, A2.y, t2.options.mass), t2.y += e2.y * this.timestep) : (A2.y = 0, e2.y = 0), Math.sqrt(Math.pow(e2.x, 2) + Math.pow(e2.y, 2));
          }
        }, {
          key: "_freezeNodes",
          value: function() {
            var g3 = this.body.nodes;
            for (var t2 in g3) if (Object.prototype.hasOwnProperty.call(g3, t2) && g3[t2].x && g3[t2].y) {
              var A2 = g3[t2].options.fixed;
              this.freezeCache[t2] = {
                x: A2.x,
                y: A2.y
              }, A2.x = true, A2.y = true;
            }
          }
        }, {
          key: "_restoreFrozenNodes",
          value: function() {
            var g3 = this.body.nodes;
            for (var t2 in g3) Object.prototype.hasOwnProperty.call(g3, t2) && void 0 !== this.freezeCache[t2] && (g3[t2].options.fixed.x = this.freezeCache[t2].x, g3[t2].options.fixed.y = this.freezeCache[t2].y);
            this.freezeCache = {};
          }
        }, {
          key: "stabilize",
          value: function() {
            var g3 = this, t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.options.stabilization.iterations;
            "number" != typeof t2 && (t2 = this.options.stabilization.iterations, console.error("The stabilize method needs a numeric amount of iterations. Switching to default: ", t2)), 0 !== this.physicsBody.physicsNodeIndices.length ? (this.adaptiveTimestep = this.options.adaptiveTimestep, this.body.emitter.emit("_resizeNodes"), this.stopSimulation(), this.stabilized = false, this.body.emitter.emit("_blockRedraw"), this.targetIterations = t2, true === this.options.stabilization.onlyDynamicEdges && this._freezeNodes(), this.stabilizationIterations = 0, wu(function() {
              return g3._stabilizationBatch();
            }, 0)) : this.ready = true;
          }
        }, {
          key: "_startStabilizing",
          value: function() {
            return true !== this.startedStabilization && (this.body.emitter.emit("startStabilizing"), this.startedStabilization = true, true);
          }
        }, {
          key: "_stabilizationBatch",
          value: function() {
            var g3 = this, t2 = function() {
              return false === g3.stabilized && g3.stabilizationIterations < g3.targetIterations;
            }, A2 = function() {
              g3.body.emitter.emit("stabilizationProgress", {
                iterations: g3.stabilizationIterations,
                total: g3.targetIterations
              });
            };
            this._startStabilizing() && A2();
            for (var e2, C2 = 0; t2() && C2 < this.options.stabilization.updateInterval; ) this.physicsTick(), C2++;
            (A2(), t2()) ? wu(je(e2 = this._stabilizationBatch).call(e2, this), 0) : this._finalizeStabilization();
          }
        }, {
          key: "_finalizeStabilization",
          value: function() {
            this.body.emitter.emit("_allowRedraw"), true === this.options.stabilization.fit && this.body.emitter.emit("fit"), true === this.options.stabilization.onlyDynamicEdges && this._restoreFrozenNodes(), this.body.emitter.emit("stabilizationIterationsDone"), this.body.emitter.emit("_requestRedraw"), true === this.stabilized ? this._emitStabilized() : this.startSimulation(), this.ready = true;
          }
        }, {
          key: "_drawForces",
          value: function(g3) {
            for (var t2 = 0; t2 < this.physicsBody.physicsNodeIndices.length; t2++) {
              var A2 = this.physicsBody.physicsNodeIndices[t2], e2 = this.body.nodes[A2], C2 = this.physicsBody.forces[A2], I2 = Math.sqrt(Math.pow(C2.x, 2) + Math.pow(C2.x, 2)), i2 = Math.min(Math.max(5, I2), 15), o2 = 3 * i2, n2 = nv((180 - 180 * Math.min(1, Math.max(0, 0.03 * I2))) / 360, 1, 1), r2 = {
                x: e2.x + 20 * C2.x,
                y: e2.y + 20 * C2.y
              };
              g3.lineWidth = i2, g3.strokeStyle = n2, g3.beginPath(), g3.moveTo(e2.x, e2.y), g3.lineTo(r2.x, r2.y), g3.stroke();
              var s2 = Math.atan2(C2.y, C2.x);
              g3.fillStyle = n2, vR.draw(g3, {
                type: "arrow",
                point: r2,
                angle: s2,
                length: o2
              }), Bu(g3).call(g3);
            }
          }
        }]), g2;
      }(), XR = function() {
        function g2() {
          cn(this, g2);
        }
        return kd(g2, null, [{
          key: "getRange",
          value: function(g3) {
            var t2, A2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], e2 = 1e9, C2 = -1e9, I2 = 1e9, i2 = -1e9;
            if (A2.length > 0) for (var o2 = 0; o2 < A2.length; o2++) I2 > (t2 = g3[A2[o2]]).shape.boundingBox.left && (I2 = t2.shape.boundingBox.left), i2 < t2.shape.boundingBox.right && (i2 = t2.shape.boundingBox.right), e2 > t2.shape.boundingBox.top && (e2 = t2.shape.boundingBox.top), C2 < t2.shape.boundingBox.bottom && (C2 = t2.shape.boundingBox.bottom);
            return 1e9 === I2 && -1e9 === i2 && 1e9 === e2 && -1e9 === C2 && (e2 = 0, C2 = 0, I2 = 0, i2 = 0), {
              minX: I2,
              maxX: i2,
              minY: e2,
              maxY: C2
            };
          }
        }, {
          key: "getRangeCore",
          value: function(g3) {
            var t2, A2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], e2 = 1e9, C2 = -1e9, I2 = 1e9, i2 = -1e9;
            if (A2.length > 0) for (var o2 = 0; o2 < A2.length; o2++) I2 > (t2 = g3[A2[o2]]).x && (I2 = t2.x), i2 < t2.x && (i2 = t2.x), e2 > t2.y && (e2 = t2.y), C2 < t2.y && (C2 = t2.y);
            return 1e9 === I2 && -1e9 === i2 && 1e9 === e2 && -1e9 === C2 && (e2 = 0, C2 = 0, I2 = 0, i2 = 0), {
              minX: I2,
              maxX: i2,
              minY: e2,
              maxY: C2
            };
          }
        }, {
          key: "findCenter",
          value: function(g3) {
            return {
              x: 0.5 * (g3.maxX + g3.minX),
              y: 0.5 * (g3.maxY + g3.minY)
            };
          }
        }, {
          key: "cloneOptions",
          value: function(g3, t2) {
            var A2 = {};
            return void 0 === t2 || "node" === t2 ? (qf(A2, g3.options, true), A2.x = g3.x, A2.y = g3.y, A2.amountOfConnections = g3.edges.length) : qf(A2, g3.options, true), A2;
          }
        }]), g2;
      }();
      function JR(g2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !MT) return false;
          if (MT.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(MT(Boolean, [], function() {
            })), true;
          } catch (g3) {
            return false;
          }
        }();
        return function() {
          var A2, e2 = nb(g2);
          if (t2) {
            var C2 = nb(this).constructor;
            A2 = MT(e2, arguments, C2);
          } else A2 = e2.apply(this, arguments);
          return Ib(this, A2);
        };
      }
      var qR = function(g2) {
        Cb(A2, g2);
        var t2 = JR(A2);
        function A2(g3, e2, C2, I2, i2, o2) {
          var n2;
          return cn(this, A2), (n2 = t2.call(this, g3, e2, C2, I2, i2, o2)).isCluster = true, n2.containedNodes = {}, n2.containedEdges = {}, n2;
        }
        return kd(A2, [{
          key: "_openChildCluster",
          value: function(g3) {
            var t3 = this, A3 = this.body.nodes[g3];
            if (void 0 === this.containedNodes[g3]) throw new Error("node with id: " + g3 + " not in current cluster");
            if (!A3.isCluster) throw new Error("node with id: " + g3 + " is not a cluster");
            delete this.containedNodes[g3], tv(A3.edges, function(g4) {
              delete t3.containedEdges[g4.id];
            }), tv(A3.containedNodes, function(g4, A4) {
              t3.containedNodes[A4] = g4;
            }), A3.containedNodes = {}, tv(A3.containedEdges, function(g4, A4) {
              t3.containedEdges[A4] = g4;
            }), A3.containedEdges = {}, tv(A3.edges, function(g4) {
              tv(t3.edges, function(A4) {
                var e2, C2, I2 = Xc(e2 = A4.clusteringEdgeReplacingIds).call(e2, g4.id);
                -1 !== I2 && (tv(g4.clusteringEdgeReplacingIds, function(g5) {
                  A4.clusteringEdgeReplacingIds.push(g5), t3.body.edges[g5].edgeReplacedById = A4.id;
                }), Zl(C2 = A4.clusteringEdgeReplacingIds).call(C2, I2, 1));
              });
            }), A3.edges = [];
          }
        }]), A2;
      }(jN), $R = function() {
        function g2(t2) {
          var A2 = this;
          cn(this, g2), this.body = t2, this.clusteredNodes = {}, this.clusteredEdges = {}, this.options = {}, this.defaultOptions = {}, fe(this.options, this.defaultOptions), this.body.emitter.on("_resetData", function() {
            A2.clusteredNodes = {}, A2.clusteredEdges = {};
          });
        }
        return kd(g2, [{
          key: "clusterByHubsize",
          value: function(g3, t2) {
            void 0 === g3 ? g3 = this._getHubSize() : "object" === yd(g3) && (t2 = this._checkOptions(g3), g3 = this._getHubSize());
            for (var A2 = [], e2 = 0; e2 < this.body.nodeIndices.length; e2++) {
              var C2 = this.body.nodes[this.body.nodeIndices[e2]];
              C2.edges.length >= g3 && A2.push(C2.id);
            }
            for (var I2 = 0; I2 < A2.length; I2++) this.clusterByConnection(A2[I2], t2, true);
            this.body.emitter.emit("_dataChanged");
          }
        }, {
          key: "cluster",
          value: function() {
            var g3 = this, t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, A2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (void 0 === t2.joinCondition) throw new Error("Cannot call clusterByNodeData without a joinCondition function in the options.");
            t2 = this._checkOptions(t2);
            var e2 = {}, C2 = {};
            tv(this.body.nodes, function(A3, I2) {
              A3.options && true === t2.joinCondition(A3.options) && (e2[I2] = A3, tv(A3.edges, function(t3) {
                void 0 === g3.clusteredEdges[t3.id] && (C2[t3.id] = t3);
              }));
            }), this._cluster(e2, C2, t2, A2);
          }
        }, {
          key: "clusterByEdgeCount",
          value: function(g3, t2) {
            var A2 = this, e2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            t2 = this._checkOptions(t2);
            for (var C2, I2, i2, o2 = [], n2 = {}, r2 = function() {
              var e3 = {}, r3 = {}, a3 = A2.body.nodeIndices[s2], d2 = A2.body.nodes[a3];
              if (void 0 === n2[a3]) {
                i2 = 0, I2 = [];
                for (var h2 = 0; h2 < d2.edges.length; h2++) C2 = d2.edges[h2], void 0 === A2.clusteredEdges[C2.id] && (C2.toId !== C2.fromId && i2++, I2.push(C2));
                if (i2 === g3) {
                  for (var l2 = function(g4) {
                    if (void 0 === t2.joinCondition || null === t2.joinCondition) return true;
                    var A3 = XR.cloneOptions(g4);
                    return t2.joinCondition(A3);
                  }, c2 = true, u2 = 0; u2 < I2.length; u2++) {
                    C2 = I2[u2];
                    var p2 = A2._getConnectedId(C2, a3);
                    if (!l2(d2)) {
                      c2 = false;
                      break;
                    }
                    r3[C2.id] = C2, e3[a3] = d2, e3[p2] = A2.body.nodes[p2], n2[a3] = true;
                  }
                  if (Lh(e3).length > 0 && Lh(r3).length > 0 && true === c2) {
                    var f2 = function() {
                      for (var g4 = 0; g4 < o2.length; ++g4) for (var t3 in e3) if (void 0 !== o2[g4].nodes[t3]) return o2[g4];
                    }();
                    if (void 0 !== f2) {
                      for (var v2 in e3) void 0 === f2.nodes[v2] && (f2.nodes[v2] = e3[v2]);
                      for (var y2 in r3) void 0 === f2.edges[y2] && (f2.edges[y2] = r3[y2]);
                    } else o2.push({
                      nodes: e3,
                      edges: r3
                    });
                  }
                }
              }
            }, s2 = 0; s2 < this.body.nodeIndices.length; s2++) r2();
            for (var a2 = 0; a2 < o2.length; a2++) this._cluster(o2[a2].nodes, o2[a2].edges, t2, false);
            true === e2 && this.body.emitter.emit("_dataChanged");
          }
        }, {
          key: "clusterOutliers",
          value: function(g3) {
            var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.clusterByEdgeCount(1, g3, t2);
          }
        }, {
          key: "clusterBridges",
          value: function(g3) {
            var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.clusterByEdgeCount(2, g3, t2);
          }
        }, {
          key: "clusterByConnection",
          value: function(g3, t2) {
            var A2, e2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (void 0 === g3) throw new Error("No nodeId supplied to clusterByConnection!");
            if (void 0 === this.body.nodes[g3]) throw new Error("The nodeId given to clusterByConnection does not exist!");
            var C2 = this.body.nodes[g3];
            void 0 === (t2 = this._checkOptions(t2, C2)).clusterNodeProperties.x && (t2.clusterNodeProperties.x = C2.x), void 0 === t2.clusterNodeProperties.y && (t2.clusterNodeProperties.y = C2.y), void 0 === t2.clusterNodeProperties.fixed && (t2.clusterNodeProperties.fixed = {}, t2.clusterNodeProperties.fixed.x = C2.options.fixed.x, t2.clusterNodeProperties.fixed.y = C2.options.fixed.y);
            var I2 = {}, i2 = {}, o2 = C2.id, n2 = XR.cloneOptions(C2);
            I2[o2] = C2;
            for (var r2 = 0; r2 < C2.edges.length; r2++) {
              var s2 = C2.edges[r2];
              if (void 0 === this.clusteredEdges[s2.id]) {
                var a2 = this._getConnectedId(s2, o2);
                if (void 0 === this.clusteredNodes[a2]) if (a2 !== o2) {
                  if (void 0 === t2.joinCondition) i2[s2.id] = s2, I2[a2] = this.body.nodes[a2];
                  else {
                    var d2 = XR.cloneOptions(this.body.nodes[a2]);
                    true === t2.joinCondition(n2, d2) && (i2[s2.id] = s2, I2[a2] = this.body.nodes[a2]);
                  }
                } else i2[s2.id] = s2;
              }
            }
            var h2 = Fh(A2 = Lh(I2)).call(A2, function(g4) {
              return I2[g4].id;
            });
            for (var l2 in I2) if (Object.prototype.hasOwnProperty.call(I2, l2)) for (var c2 = I2[l2], u2 = 0; u2 < c2.edges.length; u2++) {
              var p2 = c2.edges[u2];
              Xc(h2).call(h2, this._getConnectedId(p2, c2.id)) > -1 && (i2[p2.id] = p2);
            }
            this._cluster(I2, i2, t2, e2);
          }
        }, {
          key: "_createClusterEdges",
          value: function(g3, t2, A2, e2) {
            for (var C2, I2, i2, o2, n2, r2, s2 = Lh(g3), a2 = [], d2 = 0; d2 < s2.length; d2++) {
              i2 = g3[I2 = s2[d2]];
              for (var h2 = 0; h2 < i2.edges.length; h2++) C2 = i2.edges[h2], void 0 === this.clusteredEdges[C2.id] && (C2.toId == C2.fromId ? t2[C2.id] = C2 : C2.toId == I2 ? (o2 = A2.id, r2 = n2 = C2.fromId) : (o2 = C2.toId, n2 = A2.id, r2 = o2), void 0 === g3[r2] && a2.push({
                edge: C2,
                fromId: n2,
                toId: o2
              }));
            }
            for (var l2 = [], c2 = function(g4) {
              for (var t3 = 0; t3 < l2.length; t3++) {
                var A3 = l2[t3], e3 = g4.fromId === A3.fromId && g4.toId === A3.toId, C3 = g4.fromId === A3.toId && g4.toId === A3.fromId;
                if (e3 || C3) return A3;
              }
              return null;
            }, u2 = 0; u2 < a2.length; u2++) {
              var p2 = a2[u2], f2 = p2.edge, v2 = c2(p2);
              null === v2 ? (v2 = this._createClusteredEdge(p2.fromId, p2.toId, f2, e2), l2.push(v2)) : v2.clusteringEdgeReplacingIds.push(f2.id), this.body.edges[f2.id].edgeReplacedById = v2.id, this._backupEdgeOptions(f2), f2.setOptions({
                physics: false
              });
            }
          }
        }, {
          key: "_checkOptions",
          value: function() {
            var g3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return void 0 === g3.clusterEdgeProperties && (g3.clusterEdgeProperties = {}), void 0 === g3.clusterNodeProperties && (g3.clusterNodeProperties = {}), g3;
          }
        }, {
          key: "_cluster",
          value: function(g3, t2, A2) {
            var e2 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], C2 = [];
            for (var I2 in g3) Object.prototype.hasOwnProperty.call(g3, I2) && void 0 !== this.clusteredNodes[I2] && C2.push(I2);
            for (var i2 = 0; i2 < C2.length; ++i2) delete g3[C2[i2]];
            if (0 != Lh(g3).length && (1 != Lh(g3).length || 1 == A2.clusterNodeProperties.allowSingleNodeCluster)) {
              var o2 = qf({}, A2.clusterNodeProperties);
              if (void 0 !== A2.processProperties) {
                var n2 = [];
                for (var r2 in g3) if (Object.prototype.hasOwnProperty.call(g3, r2)) {
                  var s2 = XR.cloneOptions(g3[r2]);
                  n2.push(s2);
                }
                var a2 = [];
                for (var d2 in t2) if (Object.prototype.hasOwnProperty.call(t2, d2) && "clusterEdge:" !== d2.substr(0, 12)) {
                  var h2 = XR.cloneOptions(t2[d2], "edge");
                  a2.push(h2);
                }
                if (!(o2 = A2.processProperties(o2, n2, a2))) throw new Error("The processProperties function does not return properties!");
              }
              void 0 === o2.id && (o2.id = "cluster:" + rD());
              var l2 = o2.id;
              void 0 === o2.label && (o2.label = "cluster");
              var c2 = void 0;
              void 0 === o2.x && (c2 = this._getClusterPosition(g3), o2.x = c2.x), void 0 === o2.y && (void 0 === c2 && (c2 = this._getClusterPosition(g3)), o2.y = c2.y), o2.id = l2;
              var u2 = this.body.functions.createNode(o2, qR);
              u2.containedNodes = g3, u2.containedEdges = t2, u2.clusterEdgeProperties = A2.clusterEdgeProperties, this.body.nodes[o2.id] = u2, this._clusterEdges(g3, t2, o2, A2.clusterEdgeProperties), o2.id = void 0, true === e2 && this.body.emitter.emit("_dataChanged");
            }
          }
        }, {
          key: "_backupEdgeOptions",
          value: function(g3) {
            void 0 === this.clusteredEdges[g3.id] && (this.clusteredEdges[g3.id] = {
              physics: g3.options.physics
            });
          }
        }, {
          key: "_restoreEdge",
          value: function(g3) {
            var t2 = this.clusteredEdges[g3.id];
            void 0 !== t2 && (g3.setOptions({
              physics: t2.physics
            }), delete this.clusteredEdges[g3.id]);
          }
        }, {
          key: "isCluster",
          value: function(g3) {
            return void 0 !== this.body.nodes[g3] ? true === this.body.nodes[g3].isCluster : (console.error("Node does not exist."), false);
          }
        }, {
          key: "_getClusterPosition",
          value: function(g3) {
            for (var t2, A2 = Lh(g3), e2 = g3[A2[0]].x, C2 = g3[A2[0]].x, I2 = g3[A2[0]].y, i2 = g3[A2[0]].y, o2 = 1; o2 < A2.length; o2++) e2 = (t2 = g3[A2[o2]]).x < e2 ? t2.x : e2, C2 = t2.x > C2 ? t2.x : C2, I2 = t2.y < I2 ? t2.y : I2, i2 = t2.y > i2 ? t2.y : i2;
            return {
              x: 0.5 * (e2 + C2),
              y: 0.5 * (I2 + i2)
            };
          }
        }, {
          key: "openCluster",
          value: function(g3, t2) {
            var A2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (void 0 === g3) throw new Error("No clusterNodeId supplied to openCluster.");
            var e2 = this.body.nodes[g3];
            if (void 0 === e2) throw new Error("The clusterNodeId supplied to openCluster does not exist.");
            if (true !== e2.isCluster || void 0 === e2.containedNodes || void 0 === e2.containedEdges) throw new Error("The node:" + g3 + " is not a valid cluster.");
            var C2 = this.findNode(g3), I2 = Xc(C2).call(C2, g3) - 1;
            if (I2 >= 0) {
              var i2 = C2[I2];
              return this.body.nodes[i2]._openChildCluster(g3), delete this.body.nodes[g3], void (true === A2 && this.body.emitter.emit("_dataChanged"));
            }
            var o2 = e2.containedNodes, n2 = e2.containedEdges;
            if (void 0 !== t2 && void 0 !== t2.releaseFunction && "function" == typeof t2.releaseFunction) {
              var r2 = {}, s2 = {
                x: e2.x,
                y: e2.y
              };
              for (var a2 in o2) if (Object.prototype.hasOwnProperty.call(o2, a2)) {
                var d2 = this.body.nodes[a2];
                r2[a2] = {
                  x: d2.x,
                  y: d2.y
                };
              }
              var h2 = t2.releaseFunction(s2, r2);
              for (var l2 in o2) if (Object.prototype.hasOwnProperty.call(o2, l2)) {
                var c2 = this.body.nodes[l2];
                void 0 !== h2[l2] && (c2.x = void 0 === h2[l2].x ? e2.x : h2[l2].x, c2.y = void 0 === h2[l2].y ? e2.y : h2[l2].y);
              }
            } else tv(o2, function(g4) {
              false === g4.options.fixed.x && (g4.x = e2.x), false === g4.options.fixed.y && (g4.y = e2.y);
            });
            for (var u2 in o2) if (Object.prototype.hasOwnProperty.call(o2, u2)) {
              var p2 = this.body.nodes[u2];
              p2.vx = e2.vx, p2.vy = e2.vy, p2.setOptions({
                physics: true
              }), delete this.clusteredNodes[u2];
            }
            for (var f2 = [], v2 = 0; v2 < e2.edges.length; v2++) f2.push(e2.edges[v2]);
            for (var y2 = 0; y2 < f2.length; y2++) {
              for (var m2 = f2[y2], b2 = this._getConnectedId(m2, g3), w2 = this.clusteredNodes[b2], k2 = 0; k2 < m2.clusteringEdgeReplacingIds.length; k2++) {
                var x2 = m2.clusteringEdgeReplacingIds[k2], E2 = this.body.edges[x2];
                if (void 0 !== E2) if (void 0 !== w2) {
                  var O2 = this.body.nodes[w2.clusterId];
                  O2.containedEdges[E2.id] = E2, delete n2[E2.id];
                  var T2 = E2.fromId, D2 = E2.toId;
                  E2.toId == b2 ? D2 = w2.clusterId : T2 = w2.clusterId, this._createClusteredEdge(T2, D2, E2, O2.clusterEdgeProperties, {
                    hidden: false,
                    physics: true
                  });
                } else this._restoreEdge(E2);
              }
              m2.remove();
            }
            for (var N2 in n2) Object.prototype.hasOwnProperty.call(n2, N2) && this._restoreEdge(n2[N2]);
            delete this.body.nodes[g3], true === A2 && this.body.emitter.emit("_dataChanged");
          }
        }, {
          key: "getNodesInCluster",
          value: function(g3) {
            var t2 = [];
            if (true === this.isCluster(g3)) {
              var A2 = this.body.nodes[g3].containedNodes;
              for (var e2 in A2) Object.prototype.hasOwnProperty.call(A2, e2) && t2.push(this.body.nodes[e2].id);
            }
            return t2;
          }
        }, {
          key: "findNode",
          value: function(g3) {
            for (var t2, A2 = [], e2 = 0; void 0 !== this.clusteredNodes[g3] && e2 < 100; ) {
              if (void 0 === (t2 = this.body.nodes[g3])) return [];
              A2.push(t2.id), g3 = this.clusteredNodes[g3].clusterId, e2++;
            }
            return void 0 === (t2 = this.body.nodes[g3]) ? [] : (A2.push(t2.id), cl(A2).call(A2), A2);
          }
        }, {
          key: "updateClusteredNode",
          value: function(g3, t2) {
            if (void 0 === g3) throw new Error("No clusteredNodeId supplied to updateClusteredNode.");
            if (void 0 === t2) throw new Error("No newOptions supplied to updateClusteredNode.");
            if (void 0 === this.body.nodes[g3]) throw new Error("The clusteredNodeId supplied to updateClusteredNode does not exist.");
            this.body.nodes[g3].setOptions(t2), this.body.emitter.emit("_dataChanged");
          }
        }, {
          key: "updateEdge",
          value: function(g3, t2) {
            if (void 0 === g3) throw new Error("No startEdgeId supplied to updateEdge.");
            if (void 0 === t2) throw new Error("No newOptions supplied to updateEdge.");
            if (void 0 === this.body.edges[g3]) throw new Error("The startEdgeId supplied to updateEdge does not exist.");
            for (var A2 = this.getClusteredEdges(g3), e2 = 0; e2 < A2.length; e2++) {
              this.body.edges[A2[e2]].setOptions(t2);
            }
            this.body.emitter.emit("_dataChanged");
          }
        }, {
          key: "getClusteredEdges",
          value: function(g3) {
            for (var t2 = [], A2 = 0; void 0 !== g3 && void 0 !== this.body.edges[g3] && A2 < 100; ) t2.push(this.body.edges[g3].id), g3 = this.body.edges[g3].edgeReplacedById, A2++;
            return cl(t2).call(t2), t2;
          }
        }, {
          key: "getBaseEdge",
          value: function(g3) {
            return this.getBaseEdges(g3)[0];
          }
        }, {
          key: "getBaseEdges",
          value: function(g3) {
            for (var t2 = [g3], A2 = [], e2 = [], C2 = 0; t2.length > 0 && C2 < 100; ) {
              var I2 = t2.pop();
              if (void 0 !== I2) {
                var i2 = this.body.edges[I2];
                if (void 0 !== i2) {
                  C2++;
                  var o2 = i2.clusteringEdgeReplacingIds;
                  if (void 0 === o2) e2.push(I2);
                  else for (var n2 = 0; n2 < o2.length; ++n2) {
                    var r2 = o2[n2];
                    -1 === Xc(t2).call(t2, o2) && -1 === Xc(A2).call(A2, o2) && t2.push(r2);
                  }
                  A2.push(I2);
                }
              }
            }
            return e2;
          }
        }, {
          key: "_getConnectedId",
          value: function(g3, t2) {
            return g3.toId != t2 ? g3.toId : (g3.fromId, g3.fromId);
          }
        }, {
          key: "_getHubSize",
          value: function() {
            for (var g3 = 0, t2 = 0, A2 = 0, e2 = 0, C2 = 0; C2 < this.body.nodeIndices.length; C2++) {
              var I2 = this.body.nodes[this.body.nodeIndices[C2]];
              I2.edges.length > e2 && (e2 = I2.edges.length), g3 += I2.edges.length, t2 += Math.pow(I2.edges.length, 2), A2 += 1;
            }
            g3 /= A2;
            var i2 = (t2 /= A2) - Math.pow(g3, 2), o2 = Math.sqrt(i2), n2 = Math.floor(g3 + 2 * o2);
            return n2 > e2 && (n2 = e2), n2;
          }
        }, {
          key: "_createClusteredEdge",
          value: function(g3, t2, A2, e2, C2) {
            var I2 = XR.cloneOptions(A2, "edge");
            qf(I2, e2), I2.from = g3, I2.to = t2, I2.id = "clusterEdge:" + rD(), void 0 !== C2 && qf(I2, C2);
            var i2 = this.body.functions.createEdge(I2);
            return i2.clusteringEdgeReplacingIds = [A2.id], i2.connect(), this.body.edges[i2.id] = i2, i2;
          }
        }, {
          key: "_clusterEdges",
          value: function(g3, t2, A2, e2) {
            if (t2 instanceof ZR) {
              var C2 = t2, I2 = {};
              I2[C2.id] = C2, t2 = I2;
            }
            if (g3 instanceof jN) {
              var i2 = g3, o2 = {};
              o2[i2.id] = i2, g3 = o2;
            }
            if (null == A2) throw new Error("_clusterEdges: parameter clusterNode required");
            for (var n2 in void 0 === e2 && (e2 = A2.clusterEdgeProperties), this._createClusterEdges(g3, t2, A2, e2), t2) if (Object.prototype.hasOwnProperty.call(t2, n2) && void 0 !== this.body.edges[n2]) {
              var r2 = this.body.edges[n2];
              this._backupEdgeOptions(r2), r2.setOptions({
                physics: false
              });
            }
            for (var s2 in g3) Object.prototype.hasOwnProperty.call(g3, s2) && (this.clusteredNodes[s2] = {
              clusterId: A2.id,
              node: this.body.nodes[s2]
            }, this.body.nodes[s2].setOptions({
              physics: false
            }));
          }
        }, {
          key: "_getClusterNodeForNode",
          value: function(g3) {
            if (void 0 !== g3) {
              var t2 = this.clusteredNodes[g3];
              if (void 0 !== t2) {
                var A2 = t2.clusterId;
                if (void 0 !== A2) return this.body.nodes[A2];
              }
            }
          }
        }, {
          key: "_filter",
          value: function(g3, t2) {
            var A2 = [];
            return tv(g3, function(g4) {
              t2(g4) && A2.push(g4);
            }), A2;
          }
        }, {
          key: "_updateState",
          value: function() {
            var g3, t2 = this, A2 = [], e2 = {}, C2 = function(g4) {
              tv(t2.body.nodes, function(t3) {
                true === t3.isCluster && g4(t3);
              });
            };
            for (g3 in this.clusteredNodes) {
              if (Object.prototype.hasOwnProperty.call(this.clusteredNodes, g3)) void 0 === this.body.nodes[g3] && A2.push(g3);
            }
            C2(function(g4) {
              for (var t3 = 0; t3 < A2.length; t3++) delete g4.containedNodes[A2[t3]];
            });
            for (var I2 = 0; I2 < A2.length; I2++) delete this.clusteredNodes[A2[I2]];
            tv(this.clusteredEdges, function(g4) {
              var A3 = t2.body.edges[g4];
              void 0 !== A3 && A3.endPointsValid() || (e2[g4] = g4);
            }), C2(function(g4) {
              tv(g4.containedEdges, function(g5, t3) {
                g5.endPointsValid() || e2[t3] || (e2[t3] = t3);
              });
            }), tv(this.body.edges, function(g4, A3) {
              var C3 = true, I3 = g4.clusteringEdgeReplacingIds;
              if (void 0 !== I3) {
                var i3 = 0;
                tv(I3, function(g5) {
                  var A4 = t2.body.edges[g5];
                  void 0 !== A4 && A4.endPointsValid() && (i3 += 1);
                }), C3 = i3 > 0;
              }
              g4.endPointsValid() && C3 || (e2[A3] = A3);
            }), C2(function(g4) {
              tv(e2, function(A3) {
                delete g4.containedEdges[A3], tv(g4.edges, function(C3, I3) {
                  C3.id !== A3 ? C3.clusteringEdgeReplacingIds = t2._filter(C3.clusteringEdgeReplacingIds, function(g5) {
                    return !e2[g5];
                  }) : g4.edges[I3] = null;
                }), g4.edges = t2._filter(g4.edges, function(g5) {
                  return null !== g5;
                });
              });
            }), tv(e2, function(g4) {
              delete t2.clusteredEdges[g4];
            }), tv(e2, function(g4) {
              delete t2.body.edges[g4];
            }), tv(Lh(this.body.edges), function(g4) {
              var A3 = t2.body.edges[g4], e3 = t2._isClusteredNode(A3.fromId) || t2._isClusteredNode(A3.toId);
              if (e3 !== t2._isClusteredEdge(A3.id)) if (e3) {
                var C3 = t2._getClusterNodeForNode(A3.fromId);
                void 0 !== C3 && t2._clusterEdges(t2.body.nodes[A3.fromId], A3, C3);
                var I3 = t2._getClusterNodeForNode(A3.toId);
                void 0 !== I3 && t2._clusterEdges(t2.body.nodes[A3.toId], A3, I3);
              } else delete t2._clusterEdges[g4], t2._restoreEdge(A3);
            });
            for (var i2 = false, o2 = true, n2 = function() {
              var g4 = [];
              C2(function(t3) {
                var A4 = Lh(t3.containedNodes).length, e3 = true === t3.options.allowSingleNodeCluster;
                (e3 && A4 < 1 || !e3 && A4 < 2) && g4.push(t3.id);
              });
              for (var A3 = 0; A3 < g4.length; ++A3) t2.openCluster(g4[A3], {}, false);
              o2 = g4.length > 0, i2 = i2 || o2;
            }; o2; ) n2();
            i2 && this._updateState();
          }
        }, {
          key: "_isClusteredNode",
          value: function(g3) {
            return void 0 !== this.clusteredNodes[g3];
          }
        }, {
          key: "_isClusteredEdge",
          value: function(g3) {
            return void 0 !== this.clusteredEdges[g3];
          }
        }]), g2;
      }();
      var gP = function() {
        function g2(t2, A2) {
          var e2;
          cn(this, g2), void 0 !== window && (e2 = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame), window.requestAnimationFrame = void 0 === e2 ? function(g3) {
            g3();
          } : e2, this.body = t2, this.canvas = A2, this.redrawRequested = false, this.renderTimer = void 0, this.requiresTimeout = true, this.renderingActive = false, this.renderRequests = 0, this.allowRedraw = true, this.dragging = false, this.zooming = false, this.options = {}, this.defaultOptions = {
            hideEdgesOnDrag: false,
            hideEdgesOnZoom: false,
            hideNodesOnDrag: false
          }, fe(this.options, this.defaultOptions), this._determineBrowserMethod(), this.bindEventListeners();
        }
        return kd(g2, [{
          key: "bindEventListeners",
          value: function() {
            var g3, t2 = this;
            this.body.emitter.on("dragStart", function() {
              t2.dragging = true;
            }), this.body.emitter.on("dragEnd", function() {
              t2.dragging = false;
            }), this.body.emitter.on("zoom", function() {
              t2.zooming = true, window.clearTimeout(t2.zoomTimeoutId), t2.zoomTimeoutId = wu(function() {
                var g4;
                t2.zooming = false, je(g4 = t2._requestRedraw).call(g4, t2)();
              }, 250);
            }), this.body.emitter.on("_resizeNodes", function() {
              t2._resizeNodes();
            }), this.body.emitter.on("_redraw", function() {
              false === t2.renderingActive && t2._redraw();
            }), this.body.emitter.on("_blockRedraw", function() {
              t2.allowRedraw = false;
            }), this.body.emitter.on("_allowRedraw", function() {
              t2.allowRedraw = true, t2.redrawRequested = false;
            }), this.body.emitter.on("_requestRedraw", je(g3 = this._requestRedraw).call(g3, this)), this.body.emitter.on("_startRendering", function() {
              t2.renderRequests += 1, t2.renderingActive = true, t2._startRendering();
            }), this.body.emitter.on("_stopRendering", function() {
              t2.renderRequests -= 1, t2.renderingActive = t2.renderRequests > 0, t2.renderTimer = void 0;
            }), this.body.emitter.on("destroy", function() {
              t2.renderRequests = 0, t2.allowRedraw = false, t2.renderingActive = false, true === t2.requiresTimeout ? clearTimeout(t2.renderTimer) : window.cancelAnimationFrame(t2.renderTimer), t2.body.emitter.off();
            });
          }
        }, {
          key: "setOptions",
          value: function(g3) {
            if (void 0 !== g3) {
              Xf(["hideEdgesOnDrag", "hideEdgesOnZoom", "hideNodesOnDrag"], this.options, g3);
            }
          }
        }, {
          key: "_requestNextFrame",
          value: function(g3, t2) {
            if ("undefined" != typeof window) {
              var A2, e2 = window;
              return true === this.requiresTimeout ? A2 = wu(g3, t2) : e2.requestAnimationFrame && (A2 = e2.requestAnimationFrame(g3)), A2;
            }
          }
        }, {
          key: "_startRendering",
          value: function() {
            var g3;
            true === this.renderingActive && void 0 === this.renderTimer && (this.renderTimer = this._requestNextFrame(je(g3 = this._renderStep).call(g3, this), this.simulationInterval));
          }
        }, {
          key: "_renderStep",
          value: function() {
            true === this.renderingActive && (this.renderTimer = void 0, true === this.requiresTimeout && this._startRendering(), this._redraw(), false === this.requiresTimeout && this._startRendering());
          }
        }, {
          key: "redraw",
          value: function() {
            this.body.emitter.emit("setSize"), this._redraw();
          }
        }, {
          key: "_requestRedraw",
          value: function() {
            var g3 = this;
            true !== this.redrawRequested && false === this.renderingActive && true === this.allowRedraw && (this.redrawRequested = true, this._requestNextFrame(function() {
              g3._redraw(false);
            }, 0));
          }
        }, {
          key: "_redraw",
          value: function() {
            var g3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (true === this.allowRedraw) {
              this.body.emitter.emit("initRedraw"), this.redrawRequested = false;
              var t2 = {
                drawExternalLabels: null
              };
              0 !== this.canvas.frame.canvas.width && 0 !== this.canvas.frame.canvas.height || this.canvas.setSize(), this.canvas.setTransform();
              var A2 = this.canvas.getContext(), e2 = this.canvas.frame.canvas.clientWidth, C2 = this.canvas.frame.canvas.clientHeight;
              if (A2.clearRect(0, 0, e2, C2), 0 === this.canvas.frame.clientWidth) return;
              if (A2.save(), A2.translate(this.body.view.translation.x, this.body.view.translation.y), A2.scale(this.body.view.scale, this.body.view.scale), A2.beginPath(), this.body.emitter.emit("beforeDrawing", A2), A2.closePath(), false === g3 && (false === this.dragging || true === this.dragging && false === this.options.hideEdgesOnDrag) && (false === this.zooming || true === this.zooming && false === this.options.hideEdgesOnZoom) && this._drawEdges(A2), false === this.dragging || true === this.dragging && false === this.options.hideNodesOnDrag) {
                var I2 = this._drawNodes(A2, g3).drawExternalLabels;
                t2.drawExternalLabels = I2;
              }
              false === g3 && (false === this.dragging || true === this.dragging && false === this.options.hideEdgesOnDrag) && (false === this.zooming || true === this.zooming && false === this.options.hideEdgesOnZoom) && this._drawArrows(A2), null != t2.drawExternalLabels && t2.drawExternalLabels(), false === g3 && this._drawSelectionBox(A2), A2.beginPath(), this.body.emitter.emit("afterDrawing", A2), A2.closePath(), A2.restore(), true === g3 && A2.clearRect(0, 0, e2, C2);
            }
          }
        }, {
          key: "_resizeNodes",
          value: function() {
            this.canvas.setTransform();
            var g3 = this.canvas.getContext();
            g3.save(), g3.translate(this.body.view.translation.x, this.body.view.translation.y), g3.scale(this.body.view.scale, this.body.view.scale);
            var t2, A2 = this.body.nodes;
            for (var e2 in A2) Object.prototype.hasOwnProperty.call(A2, e2) && ((t2 = A2[e2]).resize(g3), t2.updateBoundingBox(g3, t2.selected));
            g3.restore();
          }
        }, {
          key: "_drawNodes",
          value: function(g3) {
            for (var t2, A2, e2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], C2 = this.body.nodes, I2 = this.body.nodeIndices, i2 = [], o2 = [], n2 = this.canvas.DOMtoCanvas({
              x: -20,
              y: -20
            }), r2 = this.canvas.DOMtoCanvas({
              x: this.canvas.frame.canvas.clientWidth + 20,
              y: this.canvas.frame.canvas.clientHeight + 20
            }), s2 = {
              top: n2.y,
              left: n2.x,
              bottom: r2.y,
              right: r2.x
            }, a2 = [], d2 = 0; d2 < I2.length; d2++) if ((t2 = C2[I2[d2]]).hover) o2.push(I2[d2]);
            else if (t2.isSelected()) i2.push(I2[d2]);
            else if (true === e2) {
              var h2 = t2.draw(g3);
              null != h2.drawExternalLabel && a2.push(h2.drawExternalLabel);
            } else if (true === t2.isBoundingBoxOverlappingWith(s2)) {
              var l2 = t2.draw(g3);
              null != l2.drawExternalLabel && a2.push(l2.drawExternalLabel);
            } else t2.updateBoundingBox(g3, t2.selected);
            var c2 = i2.length, u2 = o2.length;
            for (A2 = 0; A2 < c2; A2++) {
              var p2 = (t2 = C2[i2[A2]]).draw(g3);
              null != p2.drawExternalLabel && a2.push(p2.drawExternalLabel);
            }
            for (A2 = 0; A2 < u2; A2++) {
              var f2 = (t2 = C2[o2[A2]]).draw(g3);
              null != f2.drawExternalLabel && a2.push(f2.drawExternalLabel);
            }
            return {
              drawExternalLabels: function() {
                for (var g4 = 0, t3 = a2; g4 < t3.length; g4++) {
                  (0, t3[g4])();
                }
              }
            };
          }
        }, {
          key: "_drawEdges",
          value: function(g3) {
            for (var t2 = this.body.edges, A2 = this.body.edgeIndices, e2 = 0; e2 < A2.length; e2++) {
              var C2 = t2[A2[e2]];
              true === C2.connected && C2.draw(g3);
            }
          }
        }, {
          key: "_drawArrows",
          value: function(g3) {
            for (var t2 = this.body.edges, A2 = this.body.edgeIndices, e2 = 0; e2 < A2.length; e2++) {
              var C2 = t2[A2[e2]];
              true === C2.connected && C2.drawArrows(g3);
            }
          }
        }, {
          key: "_determineBrowserMethod",
          value: function() {
            if ("undefined" != typeof window) {
              var g3 = navigator.userAgent.toLowerCase();
              this.requiresTimeout = false, (-1 != Xc(g3).call(g3, "msie 9.0") || -1 != Xc(g3).call(g3, "safari") && Xc(g3).call(g3, "chrome") <= -1) && (this.requiresTimeout = true);
            } else this.requiresTimeout = true;
          }
        }, {
          key: "_drawSelectionBox",
          value: function(g3) {
            if (this.body.selectionBox.show) {
              g3.beginPath();
              var t2 = this.body.selectionBox.position.end.x - this.body.selectionBox.position.start.x, A2 = this.body.selectionBox.position.end.y - this.body.selectionBox.position.start.y;
              g3.rect(this.body.selectionBox.position.start.x, this.body.selectionBox.position.start.y, t2, A2), g3.fillStyle = "rgba(151, 194, 252, 0.2)", g3.fillRect(this.body.selectionBox.position.start.x, this.body.selectionBox.position.start.y, t2, A2), g3.strokeStyle = "rgba(151, 194, 252, 1)", g3.stroke();
            } else g3.closePath();
          }
        }]), g2;
      }(), tP = A(tg.setInterval);
      function AP(g2, t2) {
        t2.inputHandler = function(g3) {
          g3.isFirst && t2(g3);
        }, g2.on("hammer.input", t2.inputHandler);
      }
      function eP(g2, t2) {
        return t2.inputHandler = function(g3) {
          g3.isFinal && t2(g3);
        }, g2.on("hammer.input", t2.inputHandler);
      }
      var CP = function() {
        function g2(t2) {
          cn(this, g2), this.body = t2, this.pixelRatio = 1, this.cameraState = {}, this.initialized = false, this.canvasViewCenter = {}, this._cleanupCallbacks = [], this.options = {}, this.defaultOptions = {
            autoResize: true,
            height: "100%",
            width: "100%"
          }, fe(this.options, this.defaultOptions), this.bindEventListeners();
        }
        return kd(g2, [{
          key: "bindEventListeners",
          value: function() {
            var g3, t2 = this;
            this.body.emitter.once("resize", function(g4) {
              0 !== g4.width && (t2.body.view.translation.x = 0.5 * g4.width), 0 !== g4.height && (t2.body.view.translation.y = 0.5 * g4.height);
            }), this.body.emitter.on("setSize", je(g3 = this.setSize).call(g3, this)), this.body.emitter.on("destroy", function() {
              t2.hammerFrame.destroy(), t2.hammer.destroy(), t2._cleanUp();
            });
          }
        }, {
          key: "setOptions",
          value: function(g3) {
            var t2 = this;
            if (void 0 !== g3) {
              Xf(["width", "height", "autoResize"], this.options, g3);
            }
            if (this._cleanUp(), true === this.options.autoResize) {
              var A2;
              if (window.ResizeObserver) {
                var e2 = new ResizeObserver(function() {
                  true === t2.setSize() && t2.body.emitter.emit("_requestRedraw");
                }), C2 = this.frame;
                e2.observe(C2), this._cleanupCallbacks.push(function() {
                  e2.unobserve(C2);
                });
              } else {
                var I2 = tP(function() {
                  true === t2.setSize() && t2.body.emitter.emit("_requestRedraw");
                }, 1e3);
                this._cleanupCallbacks.push(function() {
                  clearInterval(I2);
                });
              }
              var i2 = je(A2 = this._onResize).call(A2, this);
              window.addEventListener("resize", i2), this._cleanupCallbacks.push(function() {
                window.removeEventListener("resize", i2);
              });
            }
          }
        }, {
          key: "_cleanUp",
          value: function() {
            var g3, t2, A2;
            Cl(g3 = cl(t2 = Zl(A2 = this._cleanupCallbacks).call(A2, 0)).call(t2)).call(g3, function(g4) {
              try {
                g4();
              } catch (g5) {
                console.error(g5);
              }
            });
          }
        }, {
          key: "_onResize",
          value: function() {
            this.setSize(), this.body.emitter.emit("_redraw");
          }
        }, {
          key: "_getCameraState",
          value: function() {
            var g3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.pixelRatio;
            true === this.initialized && (this.cameraState.previousWidth = this.frame.canvas.width / g3, this.cameraState.previousHeight = this.frame.canvas.height / g3, this.cameraState.scale = this.body.view.scale, this.cameraState.position = this.DOMtoCanvas({
              x: 0.5 * this.frame.canvas.width / g3,
              y: 0.5 * this.frame.canvas.height / g3
            }));
          }
        }, {
          key: "_setCameraState",
          value: function() {
            if (void 0 !== this.cameraState.scale && 0 !== this.frame.canvas.clientWidth && 0 !== this.frame.canvas.clientHeight && 0 !== this.pixelRatio && this.cameraState.previousWidth > 0 && this.cameraState.previousHeight > 0) {
              var g3 = this.frame.canvas.width / this.pixelRatio / this.cameraState.previousWidth, t2 = this.frame.canvas.height / this.pixelRatio / this.cameraState.previousHeight, A2 = this.cameraState.scale;
              1 != g3 && 1 != t2 ? A2 = 0.5 * this.cameraState.scale * (g3 + t2) : 1 != g3 ? A2 = this.cameraState.scale * g3 : 1 != t2 && (A2 = this.cameraState.scale * t2), this.body.view.scale = A2;
              var e2 = this.DOMtoCanvas({
                x: 0.5 * this.frame.canvas.clientWidth,
                y: 0.5 * this.frame.canvas.clientHeight
              }), C2 = {
                x: e2.x - this.cameraState.position.x,
                y: e2.y - this.cameraState.position.y
              };
              this.body.view.translation.x += C2.x * this.body.view.scale, this.body.view.translation.y += C2.y * this.body.view.scale;
            }
          }
        }, {
          key: "_prepareValue",
          value: function(g3) {
            if ("number" == typeof g3) return g3 + "px";
            if ("string" == typeof g3) {
              if (-1 !== Xc(g3).call(g3, "%") || -1 !== Xc(g3).call(g3, "px")) return g3;
              if (-1 === Xc(g3).call(g3, "%")) return g3 + "px";
            }
            throw new Error("Could not use the value supplied for width or height:" + g3);
          }
        }, {
          key: "_create",
          value: function() {
            for (; this.body.container.hasChildNodes(); ) this.body.container.removeChild(this.body.container.firstChild);
            if (this.frame = document.createElement("div"), this.frame.className = "vis-network", this.frame.style.position = "relative", this.frame.style.overflow = "hidden", this.frame.tabIndex = 0, this.frame.canvas = document.createElement("canvas"), this.frame.canvas.style.position = "relative", this.frame.appendChild(this.frame.canvas), this.frame.canvas.getContext) this._setPixelRatio(), this.setTransform();
            else {
              var g3 = document.createElement("DIV");
              g3.style.color = "red", g3.style.fontWeight = "bold", g3.style.padding = "10px", g3.innerText = "Error: your browser does not support HTML canvas", this.frame.canvas.appendChild(g3);
            }
            this.body.container.appendChild(this.frame), this.body.view.scale = 1, this.body.view.translation = {
              x: 0.5 * this.frame.canvas.clientWidth,
              y: 0.5 * this.frame.canvas.clientHeight
            }, this._bindHammer();
          }
        }, {
          key: "_bindHammer",
          value: function() {
            var g3 = this;
            void 0 !== this.hammer && this.hammer.destroy(), this.drag = {}, this.pinch = {}, this.hammer = new Ev(this.frame.canvas), this.hammer.get("pinch").set({
              enable: true
            }), this.hammer.get("pan").set({
              threshold: 5,
              direction: Ev.DIRECTION_ALL
            }), AP(this.hammer, function(t2) {
              g3.body.eventListeners.onTouch(t2);
            }), this.hammer.on("tap", function(t2) {
              g3.body.eventListeners.onTap(t2);
            }), this.hammer.on("doubletap", function(t2) {
              g3.body.eventListeners.onDoubleTap(t2);
            }), this.hammer.on("press", function(t2) {
              g3.body.eventListeners.onHold(t2);
            }), this.hammer.on("panstart", function(t2) {
              g3.body.eventListeners.onDragStart(t2);
            }), this.hammer.on("panmove", function(t2) {
              g3.body.eventListeners.onDrag(t2);
            }), this.hammer.on("panend", function(t2) {
              g3.body.eventListeners.onDragEnd(t2);
            }), this.hammer.on("pinch", function(t2) {
              g3.body.eventListeners.onPinch(t2);
            }), this.frame.canvas.addEventListener("wheel", function(t2) {
              g3.body.eventListeners.onMouseWheel(t2);
            }), this.frame.canvas.addEventListener("mousemove", function(t2) {
              g3.body.eventListeners.onMouseMove(t2);
            }), this.frame.canvas.addEventListener("contextmenu", function(t2) {
              g3.body.eventListeners.onContext(t2);
            }), this.hammerFrame = new Ev(this.frame), eP(this.hammerFrame, function(t2) {
              g3.body.eventListeners.onRelease(t2);
            });
          }
        }, {
          key: "setSize",
          value: function() {
            var g3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.options.width, t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.options.height;
            g3 = this._prepareValue(g3), t2 = this._prepareValue(t2);
            var A2 = false, e2 = this.frame.canvas.width, C2 = this.frame.canvas.height, I2 = this.pixelRatio;
            if (this._setPixelRatio(), g3 != this.options.width || t2 != this.options.height || this.frame.style.width != g3 || this.frame.style.height != t2) this._getCameraState(I2), this.frame.style.width = g3, this.frame.style.height = t2, this.frame.canvas.style.width = "100%", this.frame.canvas.style.height = "100%", this.frame.canvas.width = Math.round(this.frame.canvas.clientWidth * this.pixelRatio), this.frame.canvas.height = Math.round(this.frame.canvas.clientHeight * this.pixelRatio), this.options.width = g3, this.options.height = t2, this.canvasViewCenter = {
              x: 0.5 * this.frame.clientWidth,
              y: 0.5 * this.frame.clientHeight
            }, A2 = true;
            else {
              var i2 = Math.round(this.frame.canvas.clientWidth * this.pixelRatio), o2 = Math.round(this.frame.canvas.clientHeight * this.pixelRatio);
              this.frame.canvas.width === i2 && this.frame.canvas.height === o2 || this._getCameraState(I2), this.frame.canvas.width !== i2 && (this.frame.canvas.width = i2, A2 = true), this.frame.canvas.height !== o2 && (this.frame.canvas.height = o2, A2 = true);
            }
            return true === A2 && (this.body.emitter.emit("resize", {
              width: Math.round(this.frame.canvas.width / this.pixelRatio),
              height: Math.round(this.frame.canvas.height / this.pixelRatio),
              oldWidth: Math.round(e2 / this.pixelRatio),
              oldHeight: Math.round(C2 / this.pixelRatio)
            }), this._setCameraState()), this.initialized = true, A2;
          }
        }, {
          key: "getContext",
          value: function() {
            return this.frame.canvas.getContext("2d");
          }
        }, {
          key: "_determinePixelRatio",
          value: function() {
            var g3 = this.getContext();
            if (void 0 === g3) throw new Error("Could not get canvax context");
            var t2 = 1;
            return "undefined" != typeof window && (t2 = window.devicePixelRatio || 1), t2 / (g3.webkitBackingStorePixelRatio || g3.mozBackingStorePixelRatio || g3.msBackingStorePixelRatio || g3.oBackingStorePixelRatio || g3.backingStorePixelRatio || 1);
          }
        }, {
          key: "_setPixelRatio",
          value: function() {
            this.pixelRatio = this._determinePixelRatio();
          }
        }, {
          key: "setTransform",
          value: function() {
            var g3 = this.getContext();
            if (void 0 === g3) throw new Error("Could not get canvax context");
            g3.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
          }
        }, {
          key: "_XconvertDOMtoCanvas",
          value: function(g3) {
            return (g3 - this.body.view.translation.x) / this.body.view.scale;
          }
        }, {
          key: "_XconvertCanvasToDOM",
          value: function(g3) {
            return g3 * this.body.view.scale + this.body.view.translation.x;
          }
        }, {
          key: "_YconvertDOMtoCanvas",
          value: function(g3) {
            return (g3 - this.body.view.translation.y) / this.body.view.scale;
          }
        }, {
          key: "_YconvertCanvasToDOM",
          value: function(g3) {
            return g3 * this.body.view.scale + this.body.view.translation.y;
          }
        }, {
          key: "canvasToDOM",
          value: function(g3) {
            return {
              x: this._XconvertCanvasToDOM(g3.x),
              y: this._YconvertCanvasToDOM(g3.y)
            };
          }
        }, {
          key: "DOMtoCanvas",
          value: function(g3) {
            return {
              x: this._XconvertDOMtoCanvas(g3.x),
              y: this._YconvertDOMtoCanvas(g3.y)
            };
          }
        }]), g2;
      }();
      var IP = function() {
        function g2(t2, A2) {
          var e2, C2, I2 = this;
          cn(this, g2), this.body = t2, this.canvas = A2, this.animationSpeed = 1 / this.renderRefreshRate, this.animationEasingFunction = "easeInOutQuint", this.easingTime = 0, this.sourceScale = 0, this.targetScale = 0, this.sourceTranslation = 0, this.targetTranslation = 0, this.lockedOnNodeId = void 0, this.lockedOnNodeOffset = void 0, this.touchTime = 0, this.viewFunction = void 0, this.body.emitter.on("fit", je(e2 = this.fit).call(e2, this)), this.body.emitter.on("animationFinished", function() {
            I2.body.emitter.emit("_stopRendering");
          }), this.body.emitter.on("unlockNode", je(C2 = this.releaseNode).call(C2, this));
        }
        return kd(g2, [{
          key: "setOptions",
          value: function() {
            var g3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.options = g3;
          }
        }, {
          key: "fit",
          value: function(g3) {
            var t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            g3 = function(g4, t3) {
              var A3 = fe({
                nodes: t3,
                minZoomLevel: Number.MIN_VALUE,
                maxZoomLevel: 1
              }, null != g4 ? g4 : {});
              if (!Rh(A3.nodes)) throw new TypeError("Nodes has to be an array of ids.");
              if (0 === A3.nodes.length && (A3.nodes = t3), !("number" == typeof A3.minZoomLevel && A3.minZoomLevel > 0)) throw new TypeError("Min zoom level has to be a number higher than zero.");
              if (!("number" == typeof A3.maxZoomLevel && A3.minZoomLevel <= A3.maxZoomLevel)) throw new TypeError("Max zoom level has to be a number higher than min zoom level.");
              return A3;
            }(g3, this.body.nodeIndices);
            var A2, e2, C2 = this.canvas.frame.canvas.clientWidth, I2 = this.canvas.frame.canvas.clientHeight;
            if (0 === C2 || 0 === I2) e2 = 1, A2 = XR.getRange(this.body.nodes, g3.nodes);
            else if (true === t2) {
              var i2 = 0;
              for (var o2 in this.body.nodes) {
                if (Object.prototype.hasOwnProperty.call(this.body.nodes, o2)) true === this.body.nodes[o2].predefinedPosition && (i2 += 1);
              }
              if (i2 > 0.5 * this.body.nodeIndices.length) return void this.fit(g3, false);
              A2 = XR.getRange(this.body.nodes, g3.nodes), e2 = 12.662 / (this.body.nodeIndices.length + 7.4147) + 0.0964822, e2 *= Math.min(C2 / 600, I2 / 600);
            } else {
              this.body.emitter.emit("_resizeNodes"), A2 = XR.getRange(this.body.nodes, g3.nodes);
              var n2 = C2 / (1.1 * Math.abs(A2.maxX - A2.minX)), r2 = I2 / (1.1 * Math.abs(A2.maxY - A2.minY));
              e2 = n2 <= r2 ? n2 : r2;
            }
            e2 > g3.maxZoomLevel ? e2 = g3.maxZoomLevel : e2 < g3.minZoomLevel && (e2 = g3.minZoomLevel);
            var s2 = {
              position: XR.findCenter(A2),
              scale: e2,
              animation: g3.animation
            };
            this.moveTo(s2);
          }
        }, {
          key: "focus",
          value: function(g3) {
            var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (void 0 !== this.body.nodes[g3]) {
              var A2 = {
                x: this.body.nodes[g3].x,
                y: this.body.nodes[g3].y
              };
              t2.position = A2, t2.lockedOnNode = g3, this.moveTo(t2);
            } else console.error("Node: " + g3 + " cannot be found.");
          }
        }, {
          key: "moveTo",
          value: function(g3) {
            if (void 0 !== g3) {
              if (null != g3.offset) {
                if (null != g3.offset.x) {
                  if (g3.offset.x = +g3.offset.x, !Ym(g3.offset.x)) throw new TypeError('The option "offset.x" has to be a finite number.');
                } else g3.offset.x = 0;
                if (null != g3.offset.y) {
                  if (g3.offset.y = +g3.offset.y, !Ym(g3.offset.y)) throw new TypeError('The option "offset.y" has to be a finite number.');
                } else g3.offset.x = 0;
              } else g3.offset = {
                x: 0,
                y: 0
              };
              if (null != g3.position) {
                if (null != g3.position.x) {
                  if (g3.position.x = +g3.position.x, !Ym(g3.position.x)) throw new TypeError('The option "position.x" has to be a finite number.');
                } else g3.position.x = 0;
                if (null != g3.position.y) {
                  if (g3.position.y = +g3.position.y, !Ym(g3.position.y)) throw new TypeError('The option "position.y" has to be a finite number.');
                } else g3.position.x = 0;
              } else g3.position = this.getViewPosition();
              if (null != g3.scale) {
                if (g3.scale = +g3.scale, !(g3.scale > 0)) throw new TypeError('The option "scale" has to be a number greater than zero.');
              } else g3.scale = this.body.view.scale;
              void 0 === g3.animation && (g3.animation = {
                duration: 0
              }), false === g3.animation && (g3.animation = {
                duration: 0
              }), true === g3.animation && (g3.animation = {}), void 0 === g3.animation.duration && (g3.animation.duration = 1e3), void 0 === g3.animation.easingFunction && (g3.animation.easingFunction = "easeInOutQuad"), this.animateView(g3);
            } else g3 = {};
          }
        }, {
          key: "animateView",
          value: function(g3) {
            if (void 0 !== g3) {
              this.animationEasingFunction = g3.animation.easingFunction, this.releaseNode(), true === g3.locked && (this.lockedOnNodeId = g3.lockedOnNode, this.lockedOnNodeOffset = g3.offset), 0 != this.easingTime && this._transitionRedraw(true), this.sourceScale = this.body.view.scale, this.sourceTranslation = this.body.view.translation, this.targetScale = g3.scale, this.body.view.scale = this.targetScale;
              var t2, A2, e2 = this.canvas.DOMtoCanvas({
                x: 0.5 * this.canvas.frame.canvas.clientWidth,
                y: 0.5 * this.canvas.frame.canvas.clientHeight
              }), C2 = e2.x - g3.position.x, I2 = e2.y - g3.position.y;
              if (this.targetTranslation = {
                x: this.sourceTranslation.x + C2 * this.targetScale + g3.offset.x,
                y: this.sourceTranslation.y + I2 * this.targetScale + g3.offset.y
              }, 0 === g3.animation.duration) {
                if (null != this.lockedOnNodeId) this.viewFunction = je(t2 = this._lockedRedraw).call(t2, this), this.body.emitter.on("initRedraw", this.viewFunction);
                else this.body.view.scale = this.targetScale, this.body.view.translation = this.targetTranslation, this.body.emitter.emit("_requestRedraw");
              } else this.animationSpeed = 1 / (60 * g3.animation.duration * 1e-3) || 1 / 60, this.animationEasingFunction = g3.animation.easingFunction, this.viewFunction = je(A2 = this._transitionRedraw).call(A2, this), this.body.emitter.on("initRedraw", this.viewFunction), this.body.emitter.emit("_startRendering");
            }
          }
        }, {
          key: "_lockedRedraw",
          value: function() {
            var g3 = this.body.nodes[this.lockedOnNodeId].x, t2 = this.body.nodes[this.lockedOnNodeId].y, A2 = this.canvas.DOMtoCanvas({
              x: 0.5 * this.canvas.frame.canvas.clientWidth,
              y: 0.5 * this.canvas.frame.canvas.clientHeight
            }), e2 = A2.x - g3, C2 = A2.y - t2, I2 = this.body.view.translation, i2 = {
              x: I2.x + e2 * this.body.view.scale + this.lockedOnNodeOffset.x,
              y: I2.y + C2 * this.body.view.scale + this.lockedOnNodeOffset.y
            };
            this.body.view.translation = i2;
          }
        }, {
          key: "releaseNode",
          value: function() {
            void 0 !== this.lockedOnNodeId && void 0 !== this.viewFunction && (this.body.emitter.off("initRedraw", this.viewFunction), this.lockedOnNodeId = void 0, this.lockedOnNodeOffset = void 0);
          }
        }, {
          key: "_transitionRedraw",
          value: function() {
            var g3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this.easingTime += this.animationSpeed, this.easingTime = true === g3 ? 1 : this.easingTime;
            var t2 = hv[this.animationEasingFunction](this.easingTime);
            if (this.body.view.scale = this.sourceScale + (this.targetScale - this.sourceScale) * t2, this.body.view.translation = {
              x: this.sourceTranslation.x + (this.targetTranslation.x - this.sourceTranslation.x) * t2,
              y: this.sourceTranslation.y + (this.targetTranslation.y - this.sourceTranslation.y) * t2
            }, this.easingTime >= 1) {
              var A2;
              if (this.body.emitter.off("initRedraw", this.viewFunction), this.easingTime = 0, null != this.lockedOnNodeId) this.viewFunction = je(A2 = this._lockedRedraw).call(A2, this), this.body.emitter.on("initRedraw", this.viewFunction);
              this.body.emitter.emit("animationFinished");
            }
          }
        }, {
          key: "getScale",
          value: function() {
            return this.body.view.scale;
          }
        }, {
          key: "getViewPosition",
          value: function() {
            return this.canvas.DOMtoCanvas({
              x: 0.5 * this.canvas.frame.canvas.clientWidth,
              y: 0.5 * this.canvas.frame.canvas.clientHeight
            });
          }
        }]), g2;
      }();
      function iP(g2) {
        var t2, A2 = g2 && g2.preventDefault || false, e2 = g2 && g2.container || window, C2 = {}, I2 = {
          keydown: {},
          keyup: {}
        }, i2 = {};
        for (t2 = 97; t2 <= 122; t2++) i2[String.fromCharCode(t2)] = {
          code: t2 - 97 + 65,
          shift: false
        };
        for (t2 = 65; t2 <= 90; t2++) i2[String.fromCharCode(t2)] = {
          code: t2,
          shift: true
        };
        for (t2 = 0; t2 <= 9; t2++) i2["" + t2] = {
          code: 48 + t2,
          shift: false
        };
        for (t2 = 1; t2 <= 12; t2++) i2["F" + t2] = {
          code: 111 + t2,
          shift: false
        };
        for (t2 = 0; t2 <= 9; t2++) i2["num" + t2] = {
          code: 96 + t2,
          shift: false
        };
        i2["num*"] = {
          code: 106,
          shift: false
        }, i2["num+"] = {
          code: 107,
          shift: false
        }, i2["num-"] = {
          code: 109,
          shift: false
        }, i2["num/"] = {
          code: 111,
          shift: false
        }, i2["num."] = {
          code: 110,
          shift: false
        }, i2.left = {
          code: 37,
          shift: false
        }, i2.up = {
          code: 38,
          shift: false
        }, i2.right = {
          code: 39,
          shift: false
        }, i2.down = {
          code: 40,
          shift: false
        }, i2.space = {
          code: 32,
          shift: false
        }, i2.enter = {
          code: 13,
          shift: false
        }, i2.shift = {
          code: 16,
          shift: void 0
        }, i2.esc = {
          code: 27,
          shift: false
        }, i2.backspace = {
          code: 8,
          shift: false
        }, i2.tab = {
          code: 9,
          shift: false
        }, i2.ctrl = {
          code: 17,
          shift: false
        }, i2.alt = {
          code: 18,
          shift: false
        }, i2.delete = {
          code: 46,
          shift: false
        }, i2.pageup = {
          code: 33,
          shift: false
        }, i2.pagedown = {
          code: 34,
          shift: false
        }, i2["="] = {
          code: 187,
          shift: false
        }, i2["-"] = {
          code: 189,
          shift: false
        }, i2["]"] = {
          code: 221,
          shift: false
        }, i2["["] = {
          code: 219,
          shift: false
        };
        var o2 = function(g3) {
          r2(g3, "keydown");
        }, n2 = function(g3) {
          r2(g3, "keyup");
        }, r2 = function(g3, t3) {
          if (void 0 !== I2[t3][g3.keyCode]) {
            for (var e3 = I2[t3][g3.keyCode], C3 = 0; C3 < e3.length; C3++) (void 0 === e3[C3].shift || 1 == e3[C3].shift && 1 == g3.shiftKey || 0 == e3[C3].shift && 0 == g3.shiftKey) && e3[C3].fn(g3);
            1 == A2 && g3.preventDefault();
          }
        };
        return C2.bind = function(g3, t3, A3) {
          if (void 0 === A3 && (A3 = "keydown"), void 0 === i2[g3]) throw new Error("unsupported key: " + g3);
          void 0 === I2[A3][i2[g3].code] && (I2[A3][i2[g3].code] = []), I2[A3][i2[g3].code].push({
            fn: t3,
            shift: i2[g3].shift
          });
        }, C2.bindAll = function(g3, t3) {
          for (var A3 in void 0 === t3 && (t3 = "keydown"), i2) i2.hasOwnProperty(A3) && C2.bind(A3, g3, t3);
        }, C2.getKey = function(g3) {
          for (var t3 in i2) if (i2.hasOwnProperty(t3)) {
            if (1 == g3.shiftKey && 1 == i2[t3].shift && g3.keyCode == i2[t3].code) return t3;
            if (0 == g3.shiftKey && 0 == i2[t3].shift && g3.keyCode == i2[t3].code) return t3;
            if (g3.keyCode == i2[t3].code && "shift" == t3) return t3;
          }
          return "unknown key, currently not supported";
        }, C2.unbind = function(g3, t3, A3) {
          if (void 0 === A3 && (A3 = "keydown"), void 0 === i2[g3]) throw new Error("unsupported key: " + g3);
          if (void 0 !== t3) {
            var e3 = [], C3 = I2[A3][i2[g3].code];
            if (void 0 !== C3) for (var o3 = 0; o3 < C3.length; o3++) C3[o3].fn == t3 && C3[o3].shift == i2[g3].shift || e3.push(I2[A3][i2[g3].code][o3]);
            I2[A3][i2[g3].code] = e3;
          } else I2[A3][i2[g3].code] = [];
        }, C2.reset = function() {
          I2 = {
            keydown: {},
            keyup: {}
          };
        }, C2.destroy = function() {
          I2 = {
            keydown: {},
            keyup: {}
          }, e2.removeEventListener("keydown", o2, true), e2.removeEventListener("keyup", n2, true);
        }, e2.addEventListener("keydown", o2, true), e2.addEventListener("keyup", n2, true), C2;
      }
      _e('div.vis-network div.vis-navigation div.vis-button{-webkit-touch-callout:none;background-position:2px 2px;background-repeat:no-repeat;-moz-border-radius:17px;border-radius:17px;cursor:pointer;display:inline-block;height:34px;position:absolute;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:34px}div.vis-network div.vis-navigation div.vis-button:hover{box-shadow:0 0 3px 3px rgba(56,207,21,.3)}div.vis-network div.vis-navigation div.vis-button:active{box-shadow:0 0 1px 3px rgba(56,207,21,.95)}div.vis-network div.vis-navigation div.vis-button.vis-up{background-image:url("data:image/png;base64,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");bottom:50px;left:55px}div.vis-network div.vis-navigation div.vis-button.vis-down{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAABpdJREFUeNqcV21QlNcVfp5zX9ikoAvLEsAIIgsoHwpqWAQUNKLNaNv8iZ1JMkNG6/Qj/dDUyCSTtCHpmEkwVk3TToZRMjXj5MOG2KidjIkxQYSAQUAtX6IgIN8su8KCoOzbH4sk4q5g77/33uee555z7rnneYmZDB2MKcJKlyYbqOsZVIgGEOgSHQoy4AKbFFjqAo5dWn/rNAh9OpO852oeJHYxtrmEu4WALhMbxG2ZE9uFAlImDRLY/t/y0b3Ig+u+iWOKsAlgIZSb0OIf15kWtKo1NXh1d5xxiSPEN2wUAHrGOg11jirjWVtJyFnb6YgrzoYwocClu0DI5guPDb43Y2LLp/Iaqf9JCGSErGvIifxd7aqQn/TOJCvFvZ8Hf9haEH+m/6sFQgHBv1Sts/15WmJLkeyl6FuFwFPzny1/ZdE7Nfg/xhv1uUmH2w6kggQp+yqze7d5JbZ8Im+KpucSwI6EN7/cYtlxZarBCts3ptfrtq9odjaGKihE+sV0vRC3u8RqWmmbij149W+Wd5p2rnET6bsqsntyb6+pO3KqkE8FvLxo74lNUX9s9uTJb8/9fG2L81KoogJFYfCm3b9usNq0MXxzw1RsUkDqQICPqf/b/q8sQi3j4WdmtV47OFgNAO6r+DEUFAtFAc9YtpXmRP6hxVsI24cvhyoqnFtrK6jM7isgBa3Dl0O94TeGb255MvzXpUIFjVrhxo/dzgoARBuwFQJkBK9reCnurxfvXX8CRW3yW1G749vT2Br7ysW0oNX1pKDTPG+rm1gHRbibAHLm/7522sKnQCZqFgCUaBCqaS/bEw9vqtWoQROf3dBBiT6KTACImZ3YueqhDdOWjDbFQ4IzIl4elNUX5begU1HD6lPRmULKeghhDcpqnUmZuD3+nkgTH6gZEE9ctlZSoGmG9UIynSCsQVndMyX+IZGiBoHMjHh2SreCglClaSBiSEG8cYnD24bv7CWms/3FocO3hnw13plTggAFb196NdlPM44tC0zrSg5ItXmyEz070UEKCMRqQgkkBQ9NvL2eSJ+revoJTORSpoT6do4/7/7UShBFHQexM+HdfyUHWO8iN/uaRzX3/QjUSLlnqM72F4cCRIY5u9Zf+Y+BAv4AvzpkQ7WAIBRujA/7Vg6cia9xlId6InafVEAAGnQMUCSkb6zTMPdBy8hU3JjrphIq+CrD+Mvxeyumrr+4IH9y7o2GF5eDghuuGx4L2zbWZ9Dc0RoQRbkkFNRdP2/0BH7EtLJLKCjr+zqh2l5u8haZ847vTBW24kRFQXKAtcsT5oqz3igQENIoECkjBJUDZSGewBlBj/ammjLrdX1c/t70ero34gMte9IByLLAjPrUwKweT5jawQshdIuGMiF5XEBU2koivBl9NeEfJeYHwuxtI81zPrn2z6ip60c6DkV1jLTOCTaE2HNjd5Z4s9MwWBOhqEHp/I9cWDtUrJNoHm4KO9P7hdnTBoMYXI8Gb6gVCg63FS53jg9O5tA57tSOdHywnCAygrJrfcTgUe5U2cvNHSPtYYoKCWlrTgsIneB2AfFR+4F4b6f9ZdTzF6P8Ytud407/dy/nL7k9X9i8J9l5y+Ef6RfbnjPvWa8N5suez+KFCgqyPY95Lnd3stv2AcBZ2+mFbze+lui1xc3dXCUUlPafXNx4/aKxcajWWNp/MklRw8/mPFntbd+h1oLE847KhQQxejVg36QQqD0MPTzHv42Ux+uGasJNBnPfwllJd71kkX7RQ3WDNf7dox3BLcNNs6vt34bbbvYHJhlTGp6O+JVHb0/2HJtX1PH+aqECqG/5YN1nlXcokGvvO6vCc4x+QskotxVHB/qa+xbOWuzw8NB3nuo+Ht0z2hHsuGU3GrWAoZfi3jrxgHpw3BPpobaCH7vbqOw6mHI836vYW3Eqcq9AtioqbJy7ufQ3lhfu8sR+s9+3vL8klACsQSu7AnxMY1MxH7YXJp7oPpLulrrj+9575Ni2aeVt1teWfEWfHQLCaspseHzOU7VWU+aM5G2NoyL4i+6j8XWDNQsmGsKu/cv+nTtjQb/mm7hfENyvqEAK5v8opjPJaL26KGBpd5TfguuBvuZRgBgY6zO0jlyZXXe9JqR+8MK8ntHOMHfHIkhu2b/0yIH7/oXJ0yFlxYnPUdRbvuILgO7+y+91l6Ka6M+cnCf4fMSypXvymHf/vzBTD3CuNGUFKT8lmK5Rs5ASqKiBlAGBXFaiSuni0fkp1pJ7Ed4e/xsAqLk46EWsG1EAAAAASUVORK5CYII=");bottom:10px;left:55px}div.vis-network div.vis-navigation div.vis-button.vis-left{background-image:url("data:image/png;base64,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");bottom:10px;left:15px}div.vis-network div.vis-navigation div.vis-button.vis-right{background-image:url("data:image/png;base64,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");bottom:10px;left:95px}div.vis-network div.vis-navigation div.vis-button.vis-zoomIn{background-image:url("data:image/png;base64,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");bottom:10px;right:15px}div.vis-network div.vis-navigation div.vis-button.vis-zoomOut{background-image:url("data:image/png;base64,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");bottom:10px;right:55px}div.vis-network div.vis-navigation div.vis-button.vis-zoomExtends{background-image:url("data:image/png;base64,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");bottom:50px;right:15px}');
      var oP = function() {
        function g2(t2, A2) {
          var e2 = this;
          cn(this, g2), this.body = t2, this.canvas = A2, this.iconsCreated = false, this.navigationHammers = [], this.boundFunctions = {}, this.touchTime = 0, this.activated = false, this.body.emitter.on("activate", function() {
            e2.activated = true, e2.configureKeyboardBindings();
          }), this.body.emitter.on("deactivate", function() {
            e2.activated = false, e2.configureKeyboardBindings();
          }), this.body.emitter.on("destroy", function() {
            void 0 !== e2.keycharm && e2.keycharm.destroy();
          }), this.options = {};
        }
        return kd(g2, [{
          key: "setOptions",
          value: function(g3) {
            void 0 !== g3 && (this.options = g3, this.create());
          }
        }, {
          key: "create",
          value: function() {
            true === this.options.navigationButtons ? false === this.iconsCreated && this.loadNavigationElements() : true === this.iconsCreated && this.cleanNavigation(), this.configureKeyboardBindings();
          }
        }, {
          key: "cleanNavigation",
          value: function() {
            if (0 != this.navigationHammers.length) {
              for (var g3 = 0; g3 < this.navigationHammers.length; g3++) this.navigationHammers[g3].destroy();
              this.navigationHammers = [];
            }
            this.navigationDOM && this.navigationDOM.wrapper && this.navigationDOM.wrapper.parentNode && this.navigationDOM.wrapper.parentNode.removeChild(this.navigationDOM.wrapper), this.iconsCreated = false;
          }
        }, {
          key: "loadNavigationElements",
          value: function() {
            var g3 = this;
            this.cleanNavigation(), this.navigationDOM = {};
            var t2 = ["up", "down", "left", "right", "zoomIn", "zoomOut", "zoomExtends"], A2 = ["_moveUp", "_moveDown", "_moveLeft", "_moveRight", "_zoomIn", "_zoomOut", "_fit"];
            this.navigationDOM.wrapper = document.createElement("div"), this.navigationDOM.wrapper.className = "vis-navigation", this.canvas.frame.appendChild(this.navigationDOM.wrapper);
            for (var e2 = 0; e2 < t2.length; e2++) {
              this.navigationDOM[t2[e2]] = document.createElement("div"), this.navigationDOM[t2[e2]].className = "vis-button vis-" + t2[e2], this.navigationDOM.wrapper.appendChild(this.navigationDOM[t2[e2]]);
              var C2, I2, i2 = new Ev(this.navigationDOM[t2[e2]]);
              if ("_fit" === A2[e2]) AP(i2, je(C2 = this._fit).call(C2, this));
              else AP(i2, je(I2 = this.bindToRedraw).call(I2, this, A2[e2]));
              this.navigationHammers.push(i2);
            }
            var o2 = new Ev(this.canvas.frame);
            eP(o2, function() {
              g3._stopMovement();
            }), this.navigationHammers.push(o2), this.iconsCreated = true;
          }
        }, {
          key: "bindToRedraw",
          value: function(g3) {
            var t2;
            void 0 === this.boundFunctions[g3] && (this.boundFunctions[g3] = je(t2 = this[g3]).call(t2, this), this.body.emitter.on("initRedraw", this.boundFunctions[g3]), this.body.emitter.emit("_startRendering"));
          }
        }, {
          key: "unbindFromRedraw",
          value: function(g3) {
            void 0 !== this.boundFunctions[g3] && (this.body.emitter.off("initRedraw", this.boundFunctions[g3]), this.body.emitter.emit("_stopRendering"), delete this.boundFunctions[g3]);
          }
        }, {
          key: "_fit",
          value: function() {
            (/* @__PURE__ */ new Date()).valueOf() - this.touchTime > 700 && (this.body.emitter.emit("fit", {
              duration: 700
            }), this.touchTime = (/* @__PURE__ */ new Date()).valueOf());
          }
        }, {
          key: "_stopMovement",
          value: function() {
            for (var g3 in this.boundFunctions) Object.prototype.hasOwnProperty.call(this.boundFunctions, g3) && (this.body.emitter.off("initRedraw", this.boundFunctions[g3]), this.body.emitter.emit("_stopRendering"));
            this.boundFunctions = {};
          }
        }, {
          key: "_moveUp",
          value: function() {
            this.body.view.translation.y += this.options.keyboard.speed.y;
          }
        }, {
          key: "_moveDown",
          value: function() {
            this.body.view.translation.y -= this.options.keyboard.speed.y;
          }
        }, {
          key: "_moveLeft",
          value: function() {
            this.body.view.translation.x += this.options.keyboard.speed.x;
          }
        }, {
          key: "_moveRight",
          value: function() {
            this.body.view.translation.x -= this.options.keyboard.speed.x;
          }
        }, {
          key: "_zoomIn",
          value: function() {
            var g3 = this.body.view.scale, t2 = this.body.view.scale * (1 + this.options.keyboard.speed.zoom), A2 = this.body.view.translation, e2 = t2 / g3, C2 = (1 - e2) * this.canvas.canvasViewCenter.x + A2.x * e2, I2 = (1 - e2) * this.canvas.canvasViewCenter.y + A2.y * e2;
            this.body.view.scale = t2, this.body.view.translation = {
              x: C2,
              y: I2
            }, this.body.emitter.emit("zoom", {
              direction: "+",
              scale: this.body.view.scale,
              pointer: null
            });
          }
        }, {
          key: "_zoomOut",
          value: function() {
            var g3 = this.body.view.scale, t2 = this.body.view.scale / (1 + this.options.keyboard.speed.zoom), A2 = this.body.view.translation, e2 = t2 / g3, C2 = (1 - e2) * this.canvas.canvasViewCenter.x + A2.x * e2, I2 = (1 - e2) * this.canvas.canvasViewCenter.y + A2.y * e2;
            this.body.view.scale = t2, this.body.view.translation = {
              x: C2,
              y: I2
            }, this.body.emitter.emit("zoom", {
              direction: "-",
              scale: this.body.view.scale,
              pointer: null
            });
          }
        }, {
          key: "configureKeyboardBindings",
          value: function() {
            var g3, t2, A2, e2, C2, I2, i2, o2, n2, r2, s2, a2, d2, h2, l2, c2, u2, p2, f2, v2, y2, m2, b2, w2, k2 = this;
            (void 0 !== this.keycharm && this.keycharm.destroy(), true === this.options.keyboard.enabled) && (true === this.options.keyboard.bindToWindow ? this.keycharm = iP({
              container: window,
              preventDefault: true
            }) : this.keycharm = iP({
              container: this.canvas.frame,
              preventDefault: true
            }), this.keycharm.reset(), true === this.activated && (je(g3 = this.keycharm).call(g3, "up", function() {
              k2.bindToRedraw("_moveUp");
            }, "keydown"), je(t2 = this.keycharm).call(t2, "down", function() {
              k2.bindToRedraw("_moveDown");
            }, "keydown"), je(A2 = this.keycharm).call(A2, "left", function() {
              k2.bindToRedraw("_moveLeft");
            }, "keydown"), je(e2 = this.keycharm).call(e2, "right", function() {
              k2.bindToRedraw("_moveRight");
            }, "keydown"), je(C2 = this.keycharm).call(C2, "=", function() {
              k2.bindToRedraw("_zoomIn");
            }, "keydown"), je(I2 = this.keycharm).call(I2, "num+", function() {
              k2.bindToRedraw("_zoomIn");
            }, "keydown"), je(i2 = this.keycharm).call(i2, "num-", function() {
              k2.bindToRedraw("_zoomOut");
            }, "keydown"), je(o2 = this.keycharm).call(o2, "-", function() {
              k2.bindToRedraw("_zoomOut");
            }, "keydown"), je(n2 = this.keycharm).call(n2, "[", function() {
              k2.bindToRedraw("_zoomOut");
            }, "keydown"), je(r2 = this.keycharm).call(r2, "]", function() {
              k2.bindToRedraw("_zoomIn");
            }, "keydown"), je(s2 = this.keycharm).call(s2, "pageup", function() {
              k2.bindToRedraw("_zoomIn");
            }, "keydown"), je(a2 = this.keycharm).call(a2, "pagedown", function() {
              k2.bindToRedraw("_zoomOut");
            }, "keydown"), je(d2 = this.keycharm).call(d2, "up", function() {
              k2.unbindFromRedraw("_moveUp");
            }, "keyup"), je(h2 = this.keycharm).call(h2, "down", function() {
              k2.unbindFromRedraw("_moveDown");
            }, "keyup"), je(l2 = this.keycharm).call(l2, "left", function() {
              k2.unbindFromRedraw("_moveLeft");
            }, "keyup"), je(c2 = this.keycharm).call(c2, "right", function() {
              k2.unbindFromRedraw("_moveRight");
            }, "keyup"), je(u2 = this.keycharm).call(u2, "=", function() {
              k2.unbindFromRedraw("_zoomIn");
            }, "keyup"), je(p2 = this.keycharm).call(p2, "num+", function() {
              k2.unbindFromRedraw("_zoomIn");
            }, "keyup"), je(f2 = this.keycharm).call(f2, "num-", function() {
              k2.unbindFromRedraw("_zoomOut");
            }, "keyup"), je(v2 = this.keycharm).call(v2, "-", function() {
              k2.unbindFromRedraw("_zoomOut");
            }, "keyup"), je(y2 = this.keycharm).call(y2, "[", function() {
              k2.unbindFromRedraw("_zoomOut");
            }, "keyup"), je(m2 = this.keycharm).call(m2, "]", function() {
              k2.unbindFromRedraw("_zoomIn");
            }, "keyup"), je(b2 = this.keycharm).call(b2, "pageup", function() {
              k2.unbindFromRedraw("_zoomIn");
            }, "keyup"), je(w2 = this.keycharm).call(w2, "pagedown", function() {
              k2.unbindFromRedraw("_zoomOut");
            }, "keyup")));
          }
        }]), g2;
      }();
      function nP(g2, t2) {
        var A2 = void 0 !== uh && ln(g2) || g2["@@iterator"];
        if (!A2) {
          if (Rh(g2) || (A2 = function(g3, t3) {
            var A3;
            if (!g3) return;
            if ("string" == typeof g3) return rP(g3, t3);
            var e3 = wh(A3 = Object.prototype.toString.call(g3)).call(A3, 8, -1);
            "Object" === e3 && g3.constructor && (e3 = g3.constructor.name);
            if ("Map" === e3 || "Set" === e3) return Uo(g3);
            if ("Arguments" === e3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e3)) return rP(g3, t3);
          }(g2)) || t2 && g2 && "number" == typeof g2.length) {
            A2 && (g2 = A2);
            var e2 = 0, C2 = function() {
            };
            return {
              s: C2,
              n: function() {
                return e2 >= g2.length ? {
                  done: true
                } : {
                  done: false,
                  value: g2[e2++]
                };
              },
              e: function(g3) {
                throw g3;
              },
              f: C2
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var I2, i2 = true, o2 = false;
        return {
          s: function() {
            A2 = A2.call(g2);
          },
          n: function() {
            var g3 = A2.next();
            return i2 = g3.done, g3;
          },
          e: function(g3) {
            o2 = true, I2 = g3;
          },
          f: function() {
            try {
              i2 || null == A2.return || A2.return();
            } finally {
              if (o2) throw I2;
            }
          }
        };
      }
      function rP(g2, t2) {
        (null == t2 || t2 > g2.length) && (t2 = g2.length);
        for (var A2 = 0, e2 = new Array(t2); A2 < t2; A2++) e2[A2] = g2[A2];
        return e2;
      }
      var sP = function() {
        function g2(t2, A2, e2) {
          var C2, I2, i2, o2, n2, r2, s2, a2, d2, h2, l2, c2, u2;
          cn(this, g2), this.body = t2, this.canvas = A2, this.selectionHandler = e2, this.navigationHandler = new oP(t2, A2), this.body.eventListeners.onTap = je(C2 = this.onTap).call(C2, this), this.body.eventListeners.onTouch = je(I2 = this.onTouch).call(I2, this), this.body.eventListeners.onDoubleTap = je(i2 = this.onDoubleTap).call(i2, this), this.body.eventListeners.onHold = je(o2 = this.onHold).call(o2, this), this.body.eventListeners.onDragStart = je(n2 = this.onDragStart).call(n2, this), this.body.eventListeners.onDrag = je(r2 = this.onDrag).call(r2, this), this.body.eventListeners.onDragEnd = je(s2 = this.onDragEnd).call(s2, this), this.body.eventListeners.onMouseWheel = je(a2 = this.onMouseWheel).call(a2, this), this.body.eventListeners.onPinch = je(d2 = this.onPinch).call(d2, this), this.body.eventListeners.onMouseMove = je(h2 = this.onMouseMove).call(h2, this), this.body.eventListeners.onRelease = je(l2 = this.onRelease).call(l2, this), this.body.eventListeners.onContext = je(c2 = this.onContext).call(c2, this), this.touchTime = 0, this.drag = {}, this.pinch = {}, this.popup = void 0, this.popupObj = void 0, this.popupTimer = void 0, this.body.functions.getPointer = je(u2 = this.getPointer).call(u2, this), this.options = {}, this.defaultOptions = {
            dragNodes: true,
            dragView: true,
            hover: false,
            keyboard: {
              enabled: false,
              speed: {
                x: 10,
                y: 10,
                zoom: 0.02
              },
              bindToWindow: true,
              autoFocus: true
            },
            navigationButtons: false,
            tooltipDelay: 300,
            zoomView: true,
            zoomSpeed: 1
          }, fe(this.options, this.defaultOptions), this.bindEventListeners();
        }
        return kd(g2, [{
          key: "bindEventListeners",
          value: function() {
            var g3 = this;
            this.body.emitter.on("destroy", function() {
              clearTimeout(g3.popupTimer), delete g3.body.functions.getPointer;
            });
          }
        }, {
          key: "setOptions",
          value: function(g3) {
            if (void 0 !== g3) {
              Jf(["hideEdgesOnDrag", "hideEdgesOnZoom", "hideNodesOnDrag", "keyboard", "multiselect", "selectable", "selectConnectedEdges"], this.options, g3), dv(this.options, g3, "keyboard"), g3.tooltip && (fe(this.options.tooltip, g3.tooltip), g3.tooltip.color && (this.options.tooltip.color = Iv(g3.tooltip.color)));
            }
            this.navigationHandler.setOptions(this.options);
          }
        }, {
          key: "getPointer",
          value: function(g3) {
            return {
              x: g3.x - (t2 = this.canvas.frame.canvas, t2.getBoundingClientRect().left),
              y: g3.y - gv(this.canvas.frame.canvas)
            };
            var t2;
          }
        }, {
          key: "onTouch",
          value: function(g3) {
            (/* @__PURE__ */ new Date()).valueOf() - this.touchTime > 50 && (this.drag.pointer = this.getPointer(g3.center), this.drag.pinched = false, this.pinch.scale = this.body.view.scale, this.touchTime = (/* @__PURE__ */ new Date()).valueOf());
          }
        }, {
          key: "onTap",
          value: function(g3) {
            var t2 = this.getPointer(g3.center), A2 = this.selectionHandler.options.multiselect && (g3.changedPointers[0].ctrlKey || g3.changedPointers[0].metaKey);
            this.checkSelectionChanges(t2, A2), this.selectionHandler.commitAndEmit(t2, g3), this.selectionHandler.generateClickEvent("click", g3, t2);
          }
        }, {
          key: "onDoubleTap",
          value: function(g3) {
            var t2 = this.getPointer(g3.center);
            this.selectionHandler.generateClickEvent("doubleClick", g3, t2);
          }
        }, {
          key: "onHold",
          value: function(g3) {
            var t2 = this.getPointer(g3.center), A2 = this.selectionHandler.options.multiselect;
            this.checkSelectionChanges(t2, A2), this.selectionHandler.commitAndEmit(t2, g3), this.selectionHandler.generateClickEvent("click", g3, t2), this.selectionHandler.generateClickEvent("hold", g3, t2);
          }
        }, {
          key: "onRelease",
          value: function(g3) {
            if ((/* @__PURE__ */ new Date()).valueOf() - this.touchTime > 10) {
              var t2 = this.getPointer(g3.center);
              this.selectionHandler.generateClickEvent("release", g3, t2), this.touchTime = (/* @__PURE__ */ new Date()).valueOf();
            }
          }
        }, {
          key: "onContext",
          value: function(g3) {
            var t2 = this.getPointer({
              x: g3.clientX,
              y: g3.clientY
            });
            this.selectionHandler.generateClickEvent("oncontext", g3, t2);
          }
        }, {
          key: "checkSelectionChanges",
          value: function(g3) {
            true === (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) ? this.selectionHandler.selectAdditionalOnPoint(g3) : this.selectionHandler.selectOnPoint(g3);
          }
        }, {
          key: "_determineDifference",
          value: function(g3, t2) {
            var A2 = function(g4, t3) {
              for (var A3 = [], e2 = 0; e2 < g4.length; e2++) {
                var C2 = g4[e2];
                -1 === Xc(t3).call(t3, C2) && A3.push(C2);
              }
              return A3;
            };
            return {
              nodes: A2(g3.nodes, t2.nodes),
              edges: A2(g3.edges, t2.edges)
            };
          }
        }, {
          key: "onDragStart",
          value: function(g3) {
            if (!this.drag.dragging) {
              void 0 === this.drag.pointer && this.onTouch(g3);
              var t2 = this.selectionHandler.getNodeAt(this.drag.pointer);
              if (this.drag.dragging = true, this.drag.selection = [], this.drag.translation = fe({}, this.body.view.translation), this.drag.nodeId = void 0, g3.srcEvent.shiftKey) {
                this.body.selectionBox.show = true;
                var A2 = this.getPointer(g3.center);
                this.body.selectionBox.position.start = {
                  x: this.canvas._XconvertDOMtoCanvas(A2.x),
                  y: this.canvas._YconvertDOMtoCanvas(A2.y)
                }, this.body.selectionBox.position.end = {
                  x: this.canvas._XconvertDOMtoCanvas(A2.x),
                  y: this.canvas._YconvertDOMtoCanvas(A2.y)
                };
              } else if (void 0 !== t2 && true === this.options.dragNodes) {
                this.drag.nodeId = t2.id, false === t2.isSelected() && this.selectionHandler.setSelection({
                  nodes: [t2.id]
                }), this.selectionHandler.generateClickEvent("dragStart", g3, this.drag.pointer);
                var e2, C2 = nP(this.selectionHandler.getSelectedNodes());
                try {
                  for (C2.s(); !(e2 = C2.n()).done; ) {
                    var I2 = e2.value, i2 = {
                      id: I2.id,
                      node: I2,
                      x: I2.x,
                      y: I2.y,
                      xFixed: I2.options.fixed.x,
                      yFixed: I2.options.fixed.y
                    };
                    I2.options.fixed.x = true, I2.options.fixed.y = true, this.drag.selection.push(i2);
                  }
                } catch (g4) {
                  C2.e(g4);
                } finally {
                  C2.f();
                }
              } else this.selectionHandler.generateClickEvent("dragStart", g3, this.drag.pointer, void 0, true);
            }
          }
        }, {
          key: "onDrag",
          value: function(g3) {
            var t2 = this;
            if (true !== this.drag.pinched) {
              this.body.emitter.emit("unlockNode");
              var A2 = this.getPointer(g3.center), e2 = this.drag.selection;
              if (e2 && e2.length && true === this.options.dragNodes) {
                this.selectionHandler.generateClickEvent("dragging", g3, A2);
                var C2 = A2.x - this.drag.pointer.x, I2 = A2.y - this.drag.pointer.y;
                Cl(e2).call(e2, function(g4) {
                  var A3 = g4.node;
                  false === g4.xFixed && (A3.x = t2.canvas._XconvertDOMtoCanvas(t2.canvas._XconvertCanvasToDOM(g4.x) + C2)), false === g4.yFixed && (A3.y = t2.canvas._YconvertDOMtoCanvas(t2.canvas._YconvertCanvasToDOM(g4.y) + I2));
                }), this.body.emitter.emit("startSimulation");
              } else {
                if (g3.srcEvent.shiftKey) {
                  if (this.selectionHandler.generateClickEvent("dragging", g3, A2, void 0, true), void 0 === this.drag.pointer) return void this.onDragStart(g3);
                  this.body.selectionBox.position.end = {
                    x: this.canvas._XconvertDOMtoCanvas(A2.x),
                    y: this.canvas._YconvertDOMtoCanvas(A2.y)
                  }, this.body.emitter.emit("_requestRedraw");
                }
                if (true === this.options.dragView && !g3.srcEvent.shiftKey) {
                  if (this.selectionHandler.generateClickEvent("dragging", g3, A2, void 0, true), void 0 === this.drag.pointer) return void this.onDragStart(g3);
                  var i2 = A2.x - this.drag.pointer.x, o2 = A2.y - this.drag.pointer.y;
                  this.body.view.translation = {
                    x: this.drag.translation.x + i2,
                    y: this.drag.translation.y + o2
                  }, this.body.emitter.emit("_requestRedraw");
                }
              }
            }
          }
        }, {
          key: "onDragEnd",
          value: function(g3) {
            var t2 = this;
            if (this.drag.dragging = false, this.body.selectionBox.show) {
              var A2;
              this.body.selectionBox.show = false;
              var e2 = this.body.selectionBox.position, C2 = {
                minX: Math.min(e2.start.x, e2.end.x),
                minY: Math.min(e2.start.y, e2.end.y),
                maxX: Math.max(e2.start.x, e2.end.x),
                maxY: Math.max(e2.start.y, e2.end.y)
              }, I2 = pc(A2 = this.body.nodeIndices).call(A2, function(g4) {
                var A3 = t2.body.nodes[g4];
                return A3.x >= C2.minX && A3.x <= C2.maxX && A3.y >= C2.minY && A3.y <= C2.maxY;
              });
              Cl(I2).call(I2, function(g4) {
                return t2.selectionHandler.selectObject(t2.body.nodes[g4]);
              });
              var i2 = this.getPointer(g3.center);
              this.selectionHandler.commitAndEmit(i2, g3), this.selectionHandler.generateClickEvent("dragEnd", g3, this.getPointer(g3.center), void 0, true), this.body.emitter.emit("_requestRedraw");
            } else {
              var o2 = this.drag.selection;
              o2 && o2.length ? (Cl(o2).call(o2, function(g4) {
                g4.node.options.fixed.x = g4.xFixed, g4.node.options.fixed.y = g4.yFixed;
              }), this.selectionHandler.generateClickEvent("dragEnd", g3, this.getPointer(g3.center)), this.body.emitter.emit("startSimulation")) : (this.selectionHandler.generateClickEvent("dragEnd", g3, this.getPointer(g3.center), void 0, true), this.body.emitter.emit("_requestRedraw"));
            }
          }
        }, {
          key: "onPinch",
          value: function(g3) {
            var t2 = this.getPointer(g3.center);
            this.drag.pinched = true, void 0 === this.pinch.scale && (this.pinch.scale = 1);
            var A2 = this.pinch.scale * g3.scale;
            this.zoom(A2, t2);
          }
        }, {
          key: "zoom",
          value: function(g3, t2) {
            if (true === this.options.zoomView) {
              var A2 = this.body.view.scale;
              g3 < 1e-5 && (g3 = 1e-5), g3 > 10 && (g3 = 10);
              var e2 = void 0;
              void 0 !== this.drag && true === this.drag.dragging && (e2 = this.canvas.DOMtoCanvas(this.drag.pointer));
              var C2 = this.body.view.translation, I2 = g3 / A2, i2 = (1 - I2) * t2.x + C2.x * I2, o2 = (1 - I2) * t2.y + C2.y * I2;
              if (this.body.view.scale = g3, this.body.view.translation = {
                x: i2,
                y: o2
              }, null != e2) {
                var n2 = this.canvas.canvasToDOM(e2);
                this.drag.pointer.x = n2.x, this.drag.pointer.y = n2.y;
              }
              this.body.emitter.emit("_requestRedraw"), A2 < g3 ? this.body.emitter.emit("zoom", {
                direction: "+",
                scale: this.body.view.scale,
                pointer: t2
              }) : this.body.emitter.emit("zoom", {
                direction: "-",
                scale: this.body.view.scale,
                pointer: t2
              });
            }
          }
        }, {
          key: "onMouseWheel",
          value: function(g3) {
            if (true === this.options.zoomView) {
              if (0 !== g3.deltaY) {
                var t2 = this.body.view.scale;
                t2 *= 1 + (g3.deltaY < 0 ? 1 : -1) * (0.1 * this.options.zoomSpeed);
                var A2 = this.getPointer({
                  x: g3.clientX,
                  y: g3.clientY
                });
                this.zoom(t2, A2);
              }
              g3.preventDefault();
            }
          }
        }, {
          key: "onMouseMove",
          value: function(g3) {
            var t2 = this, A2 = this.getPointer({
              x: g3.clientX,
              y: g3.clientY
            }), e2 = false;
            void 0 !== this.popup && (false === this.popup.hidden && this._checkHidePopup(A2), false === this.popup.hidden && (e2 = true, this.popup.setPosition(A2.x + 3, A2.y - 5), this.popup.show())), this.options.keyboard.autoFocus && false === this.options.keyboard.bindToWindow && true === this.options.keyboard.enabled && this.canvas.frame.focus(), false === e2 && (void 0 !== this.popupTimer && (clearInterval(this.popupTimer), this.popupTimer = void 0), this.drag.dragging || (this.popupTimer = wu(function() {
              return t2._checkShowPopup(A2);
            }, this.options.tooltipDelay))), true === this.options.hover && this.selectionHandler.hoverObject(g3, A2);
          }
        }, {
          key: "_checkShowPopup",
          value: function(g3) {
            var t2 = this.canvas._XconvertDOMtoCanvas(g3.x), A2 = this.canvas._YconvertDOMtoCanvas(g3.y), e2 = {
              left: t2,
              top: A2,
              right: t2,
              bottom: A2
            }, C2 = void 0 === this.popupObj ? void 0 : this.popupObj.id, I2 = false, i2 = "node";
            if (void 0 === this.popupObj) {
              for (var o2, n2 = this.body.nodeIndices, r2 = this.body.nodes, s2 = [], a2 = 0; a2 < n2.length; a2++) true === (o2 = r2[n2[a2]]).isOverlappingWith(e2) && (I2 = true, void 0 !== o2.getTitle() && s2.push(n2[a2]));
              s2.length > 0 && (this.popupObj = r2[s2[s2.length - 1]], I2 = true);
            }
            if (void 0 === this.popupObj && false === I2) {
              for (var d2, h2 = this.body.edgeIndices, l2 = this.body.edges, c2 = [], u2 = 0; u2 < h2.length; u2++) true === (d2 = l2[h2[u2]]).isOverlappingWith(e2) && true === d2.connected && void 0 !== d2.getTitle() && c2.push(h2[u2]);
              c2.length > 0 && (this.popupObj = l2[c2[c2.length - 1]], i2 = "edge");
            }
            void 0 !== this.popupObj ? this.popupObj.id !== C2 && (void 0 === this.popup && (this.popup = new Ov(this.canvas.frame)), this.popup.popupTargetType = i2, this.popup.popupTargetId = this.popupObj.id, this.popup.setPosition(g3.x + 3, g3.y - 5), this.popup.setText(this.popupObj.getTitle()), this.popup.show(), this.body.emitter.emit("showPopup", this.popupObj.id)) : void 0 !== this.popup && (this.popup.hide(), this.body.emitter.emit("hidePopup"));
          }
        }, {
          key: "_checkHidePopup",
          value: function(g3) {
            var t2 = this.selectionHandler._pointerToPositionObject(g3), A2 = false;
            if ("node" === this.popup.popupTargetType) {
              if (void 0 !== this.body.nodes[this.popup.popupTargetId] && true === (A2 = this.body.nodes[this.popup.popupTargetId].isOverlappingWith(t2))) {
                var e2 = this.selectionHandler.getNodeAt(g3);
                A2 = void 0 !== e2 && e2.id === this.popup.popupTargetId;
              }
            } else void 0 === this.selectionHandler.getNodeAt(g3) && void 0 !== this.body.edges[this.popup.popupTargetId] && (A2 = this.body.edges[this.popup.popupTargetId].isOverlappingWith(t2));
            false === A2 && (this.popupObj = void 0, this.popup.hide(), this.body.emitter.emit("hidePopup"));
          }
        }]), g2;
      }(), aP = u, dP = pm, hP = zy.getWeakData, lP = qy, cP = AA, uP = Q, pP = gg, fP = Hy, vP = qg, yP = GC.set, mP = GC.getterFor, bP = Sr.find, wP = Sr.findIndex, kP = aP([].splice), xP = 0, EP = function(g2) {
        return g2.frozen || (g2.frozen = new OP());
      }, OP = function() {
        this.entries = [];
      }, TP = function(g2, t2) {
        return bP(g2.entries, function(g3) {
          return g3[0] === t2;
        });
      };
      OP.prototype = {
        get: function(g2) {
          var t2 = TP(this, g2);
          if (t2) return t2[1];
        },
        has: function(g2) {
          return !!TP(this, g2);
        },
        set: function(g2, t2) {
          var A2 = TP(this, g2);
          A2 ? A2[1] = t2 : this.entries.push([g2, t2]);
        },
        delete: function(g2) {
          var t2 = wP(this.entries, function(t3) {
            return t3[0] === g2;
          });
          return ~t2 && kP(this.entries, t2, 1), !!~t2;
        }
      };
      var DP, NP = {
        getConstructor: function(g2, t2, A2, e2) {
          var C2 = g2(function(g3, C3) {
            lP(g3, I2), yP(g3, {
              type: t2,
              id: xP++,
              frozen: void 0
            }), uP(C3) || fP(C3, g3[e2], {
              that: g3,
              AS_ENTRIES: A2
            });
          }), I2 = C2.prototype, i2 = mP(t2), o2 = function(g3, t3, A3) {
            var e3 = i2(g3), C3 = hP(cP(t3), true);
            return true === C3 ? EP(e3).set(t3, A3) : C3[e3.id] = A3, g3;
          };
          return dP(I2, {
            delete: function(g3) {
              var t3 = i2(this);
              if (!pP(g3)) return false;
              var A3 = hP(g3);
              return true === A3 ? EP(t3).delete(g3) : A3 && vP(A3, t3.id) && delete A3[t3.id];
            },
            has: function(g3) {
              var t3 = i2(this);
              if (!pP(g3)) return false;
              var A3 = hP(g3);
              return true === A3 ? EP(t3).has(g3) : A3 && vP(A3, t3.id);
            }
          }), dP(I2, A2 ? {
            get: function(g3) {
              var t3 = i2(this);
              if (pP(g3)) {
                var A3 = hP(g3);
                return true === A3 ? EP(t3).get(g3) : A3 ? A3[t3.id] : void 0;
              }
            },
            set: function(g3, t3) {
              return o2(this, g3, t3);
            }
          } : {
            add: function(g3) {
              return o2(this, g3, true);
            }
          }), C2;
        }
      }, RP = vy, PP = C, MP = u, BP = pm, zP = zy, SP = cm, ZP = NP, FP = gg, GP = GC.enforce, jP = I, LP = bC, VP = Object, YP = Array.isArray, WP = VP.isExtensible, QP = VP.isFrozen, UP = VP.isSealed, _P = VP.freeze, KP = VP.seal, HP = {}, XP = {}, JP = !PP.ActiveXObject && "ActiveXObject" in PP, qP = function(g2) {
        return function() {
          return g2(this, arguments.length ? arguments[0] : void 0);
        };
      }, $P = SP("WeakMap", qP, ZP), gM = $P.prototype, tM = MP(gM.set);
      if (LP) if (JP) {
        DP = ZP.getConstructor(qP, "WeakMap", true), zP.enable();
        var AM = MP(gM.delete), eM = MP(gM.has), CM = MP(gM.get);
        BP(gM, {
          delete: function(g2) {
            if (FP(g2) && !WP(g2)) {
              var t2 = GP(this);
              return t2.frozen || (t2.frozen = new DP()), AM(this, g2) || t2.frozen.delete(g2);
            }
            return AM(this, g2);
          },
          has: function(g2) {
            if (FP(g2) && !WP(g2)) {
              var t2 = GP(this);
              return t2.frozen || (t2.frozen = new DP()), eM(this, g2) || t2.frozen.has(g2);
            }
            return eM(this, g2);
          },
          get: function(g2) {
            if (FP(g2) && !WP(g2)) {
              var t2 = GP(this);
              return t2.frozen || (t2.frozen = new DP()), eM(this, g2) ? CM(this, g2) : t2.frozen.get(g2);
            }
            return CM(this, g2);
          },
          set: function(g2, t2) {
            if (FP(g2) && !WP(g2)) {
              var A2 = GP(this);
              A2.frozen || (A2.frozen = new DP()), eM(this, g2) ? tM(this, g2, t2) : A2.frozen.set(g2, t2);
            } else tM(this, g2, t2);
            return this;
          }
        });
      } else RP && jP(function() {
        var g2 = _P([]);
        return tM(new $P(), g2, 1), !QP(g2);
      }) && BP(gM, {
        set: function(g2, t2) {
          var A2;
          return YP(g2) && (QP(g2) ? A2 = HP : UP(g2) && (A2 = XP)), tM(this, g2, t2), A2 === HP && _P(g2), A2 === XP && KP(g2), this;
        }
      });
      var IM, iM, oM, nM, rM, sM = A(tg.WeakMap);
      function aM(g2, t2, A2, e2) {
        if ("a" === A2 && !e2) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t2 ? g2 !== t2 || !e2 : !t2.has(g2)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === A2 ? e2 : "a" === A2 ? e2.call(g2) : e2 ? e2.value : t2.get(g2);
      }
      function dM(g2, t2, A2, e2, C2) {
        if ("m" === e2) throw new TypeError("Private method is not writable");
        if ("a" === e2 && !C2) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t2 ? g2 !== t2 || !C2 : !t2.has(g2)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === e2 ? C2.call(g2, A2) : C2 ? C2.value = A2 : t2.set(g2, A2), A2;
      }
      function hM(g2, t2) {
        var A2 = void 0 !== uh && ln(g2) || g2["@@iterator"];
        if (!A2) {
          if (Rh(g2) || (A2 = function(g3, t3) {
            var A3;
            if (!g3) return;
            if ("string" == typeof g3) return lM(g3, t3);
            var e3 = wh(A3 = Object.prototype.toString.call(g3)).call(A3, 8, -1);
            "Object" === e3 && g3.constructor && (e3 = g3.constructor.name);
            if ("Map" === e3 || "Set" === e3) return Uo(g3);
            if ("Arguments" === e3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e3)) return lM(g3, t3);
          }(g2)) || t2 && g2 && "number" == typeof g2.length) {
            A2 && (g2 = A2);
            var e2 = 0, C2 = function() {
            };
            return {
              s: C2,
              n: function() {
                return e2 >= g2.length ? {
                  done: true
                } : {
                  done: false,
                  value: g2[e2++]
                };
              },
              e: function(g3) {
                throw g3;
              },
              f: C2
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var I2, i2 = true, o2 = false;
        return {
          s: function() {
            A2 = A2.call(g2);
          },
          n: function() {
            var g3 = A2.next();
            return i2 = g3.done, g3;
          },
          e: function(g3) {
            o2 = true, I2 = g3;
          },
          f: function() {
            try {
              i2 || null == A2.return || A2.return();
            } finally {
              if (o2) throw I2;
            }
          }
        };
      }
      function lM(g2, t2) {
        (null == t2 || t2 > g2.length) && (t2 = g2.length);
        for (var A2 = 0, e2 = new Array(t2); A2 < t2; A2++) e2[A2] = g2[A2];
        return e2;
      }
      function cM(g2, t2) {
        var A2, e2 = new CO(), C2 = hM(t2);
        try {
          for (C2.s(); !(A2 = C2.n()).done; ) {
            var I2 = A2.value;
            g2.has(I2) || e2.add(I2);
          }
        } catch (g3) {
          C2.e(g3);
        } finally {
          C2.f();
        }
        return e2;
      }
      "function" == typeof SuppressedError && SuppressedError;
      var uM = function() {
        function g2() {
          cn(this, g2), IM.set(this, new CO()), iM.set(this, new CO());
        }
        return kd(g2, [{
          key: "size",
          get: function() {
            return aM(this, iM, "f").size;
          }
        }, {
          key: "add",
          value: function() {
            for (var g3 = arguments.length, t2 = new Array(g3), A2 = 0; A2 < g3; A2++) t2[A2] = arguments[A2];
            for (var e2 = 0, C2 = t2; e2 < C2.length; e2++) {
              var I2 = C2[e2];
              aM(this, iM, "f").add(I2);
            }
          }
        }, {
          key: "delete",
          value: function() {
            for (var g3 = arguments.length, t2 = new Array(g3), A2 = 0; A2 < g3; A2++) t2[A2] = arguments[A2];
            for (var e2 = 0, C2 = t2; e2 < C2.length; e2++) {
              var I2 = C2[e2];
              aM(this, iM, "f").delete(I2);
            }
          }
        }, {
          key: "clear",
          value: function() {
            aM(this, iM, "f").clear();
          }
        }, {
          key: "getSelection",
          value: function() {
            return ch(aM(this, iM, "f"));
          }
        }, {
          key: "getChanges",
          value: function() {
            return {
              added: ch(cM(aM(this, IM, "f"), aM(this, iM, "f"))),
              deleted: ch(cM(aM(this, iM, "f"), aM(this, IM, "f"))),
              previous: ch(new CO(aM(this, IM, "f"))),
              current: ch(new CO(aM(this, iM, "f")))
            };
          }
        }, {
          key: "commit",
          value: function() {
            var g3 = this.getChanges();
            dM(this, IM, aM(this, iM, "f"), "f"), dM(this, iM, new CO(aM(this, IM, "f")), "f");
            var t2, A2 = hM(g3.added);
            try {
              for (A2.s(); !(t2 = A2.n()).done; ) {
                t2.value.select();
              }
            } catch (g4) {
              A2.e(g4);
            } finally {
              A2.f();
            }
            var e2, C2 = hM(g3.deleted);
            try {
              for (C2.s(); !(e2 = C2.n()).done; ) {
                e2.value.unselect();
              }
            } catch (g4) {
              C2.e(g4);
            } finally {
              C2.f();
            }
            return g3;
          }
        }]), g2;
      }();
      IM = new sM(), iM = new sM();
      var pM = function() {
        function g2() {
          var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
          };
          cn(this, g2), oM.set(this, new uM()), nM.set(this, new uM()), rM.set(this, void 0), dM(this, rM, t2, "f");
        }
        return kd(g2, [{
          key: "sizeNodes",
          get: function() {
            return aM(this, oM, "f").size;
          }
        }, {
          key: "sizeEdges",
          get: function() {
            return aM(this, nM, "f").size;
          }
        }, {
          key: "getNodes",
          value: function() {
            return aM(this, oM, "f").getSelection();
          }
        }, {
          key: "getEdges",
          value: function() {
            return aM(this, nM, "f").getSelection();
          }
        }, {
          key: "addNodes",
          value: function() {
            var g3;
            (g3 = aM(this, oM, "f")).add.apply(g3, arguments);
          }
        }, {
          key: "addEdges",
          value: function() {
            var g3;
            (g3 = aM(this, nM, "f")).add.apply(g3, arguments);
          }
        }, {
          key: "deleteNodes",
          value: function(g3) {
            aM(this, oM, "f").delete(g3);
          }
        }, {
          key: "deleteEdges",
          value: function(g3) {
            aM(this, nM, "f").delete(g3);
          }
        }, {
          key: "clear",
          value: function() {
            aM(this, oM, "f").clear(), aM(this, nM, "f").clear();
          }
        }, {
          key: "commit",
          value: function() {
            for (var g3, t2, A2 = {
              nodes: aM(this, oM, "f").commit(),
              edges: aM(this, nM, "f").commit()
            }, e2 = arguments.length, C2 = new Array(e2), I2 = 0; I2 < e2; I2++) C2[I2] = arguments[I2];
            return (g3 = aM(this, rM, "f")).call.apply(g3, bh(t2 = [this, A2]).call(t2, C2)), A2;
          }
        }]), g2;
      }();
      function fM(g2, t2) {
        var A2 = void 0 !== uh && ln(g2) || g2["@@iterator"];
        if (!A2) {
          if (Rh(g2) || (A2 = function(g3, t3) {
            var A3;
            if (!g3) return;
            if ("string" == typeof g3) return vM(g3, t3);
            var e3 = wh(A3 = Object.prototype.toString.call(g3)).call(A3, 8, -1);
            "Object" === e3 && g3.constructor && (e3 = g3.constructor.name);
            if ("Map" === e3 || "Set" === e3) return Uo(g3);
            if ("Arguments" === e3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e3)) return vM(g3, t3);
          }(g2)) || t2 && g2 && "number" == typeof g2.length) {
            A2 && (g2 = A2);
            var e2 = 0, C2 = function() {
            };
            return {
              s: C2,
              n: function() {
                return e2 >= g2.length ? {
                  done: true
                } : {
                  done: false,
                  value: g2[e2++]
                };
              },
              e: function(g3) {
                throw g3;
              },
              f: C2
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var I2, i2 = true, o2 = false;
        return {
          s: function() {
            A2 = A2.call(g2);
          },
          n: function() {
            var g3 = A2.next();
            return i2 = g3.done, g3;
          },
          e: function(g3) {
            o2 = true, I2 = g3;
          },
          f: function() {
            try {
              i2 || null == A2.return || A2.return();
            } finally {
              if (o2) throw I2;
            }
          }
        };
      }
      function vM(g2, t2) {
        (null == t2 || t2 > g2.length) && (t2 = g2.length);
        for (var A2 = 0, e2 = new Array(t2); A2 < t2; A2++) e2[A2] = g2[A2];
        return e2;
      }
      oM = new sM(), nM = new sM(), rM = new sM();
      var yM = function() {
        function g2(t2, A2) {
          var e2 = this;
          cn(this, g2), this.body = t2, this.canvas = A2, this._selectionAccumulator = new pM(), this.hoverObj = {
            nodes: {},
            edges: {}
          }, this.options = {}, this.defaultOptions = {
            multiselect: false,
            selectable: true,
            selectConnectedEdges: true,
            hoverConnectedEdges: true
          }, fe(this.options, this.defaultOptions), this.body.emitter.on("_dataChanged", function() {
            e2.updateSelection();
          });
        }
        return kd(g2, [{
          key: "setOptions",
          value: function(g3) {
            if (void 0 !== g3) {
              Xf(["multiselect", "hoverConnectedEdges", "selectable", "selectConnectedEdges"], this.options, g3);
            }
          }
        }, {
          key: "selectOnPoint",
          value: function(g3) {
            var t2 = false;
            if (true === this.options.selectable) {
              var A2 = this.getNodeAt(g3) || this.getEdgeAt(g3);
              this.unselectAll(), void 0 !== A2 && (t2 = this.selectObject(A2)), this.body.emitter.emit("_requestRedraw");
            }
            return t2;
          }
        }, {
          key: "selectAdditionalOnPoint",
          value: function(g3) {
            var t2 = false;
            if (true === this.options.selectable) {
              var A2 = this.getNodeAt(g3) || this.getEdgeAt(g3);
              void 0 !== A2 && (t2 = true, true === A2.isSelected() ? this.deselectObject(A2) : this.selectObject(A2), this.body.emitter.emit("_requestRedraw"));
            }
            return t2;
          }
        }, {
          key: "_initBaseEvent",
          value: function(g3, t2) {
            var A2 = {};
            return A2.pointer = {
              DOM: {
                x: t2.x,
                y: t2.y
              },
              canvas: this.canvas.DOMtoCanvas(t2)
            }, A2.event = g3, A2;
          }
        }, {
          key: "generateClickEvent",
          value: function(g3, t2, A2, e2) {
            var C2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], I2 = this._initBaseEvent(t2, A2);
            if (true === C2) I2.nodes = [], I2.edges = [];
            else {
              var i2 = this.getSelection();
              I2.nodes = i2.nodes, I2.edges = i2.edges;
            }
            void 0 !== e2 && (I2.previousSelection = e2), "click" == g3 && (I2.items = this.getClickedItems(A2)), void 0 !== t2.controlEdge && (I2.controlEdge = t2.controlEdge), this.body.emitter.emit(g3, I2);
          }
        }, {
          key: "selectObject",
          value: function(g3) {
            var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.options.selectConnectedEdges;
            if (void 0 !== g3) {
              if (g3 instanceof jN) {
                var A2;
                if (true === t2) (A2 = this._selectionAccumulator).addEdges.apply(A2, ch(g3.edges));
                this._selectionAccumulator.addNodes(g3);
              } else this._selectionAccumulator.addEdges(g3);
              return true;
            }
            return false;
          }
        }, {
          key: "deselectObject",
          value: function(g3) {
            true === g3.isSelected() && (g3.selected = false, this._removeFromSelection(g3));
          }
        }, {
          key: "_getAllNodesOverlappingWith",
          value: function(g3) {
            for (var t2 = [], A2 = this.body.nodes, e2 = 0; e2 < this.body.nodeIndices.length; e2++) {
              var C2 = this.body.nodeIndices[e2];
              A2[C2].isOverlappingWith(g3) && t2.push(C2);
            }
            return t2;
          }
        }, {
          key: "_pointerToPositionObject",
          value: function(g3) {
            var t2 = this.canvas.DOMtoCanvas(g3);
            return {
              left: t2.x - 1,
              top: t2.y + 1,
              right: t2.x + 1,
              bottom: t2.y - 1
            };
          }
        }, {
          key: "getNodeAt",
          value: function(g3) {
            var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], A2 = this._pointerToPositionObject(g3), e2 = this._getAllNodesOverlappingWith(A2);
            return e2.length > 0 ? true === t2 ? this.body.nodes[e2[e2.length - 1]] : e2[e2.length - 1] : void 0;
          }
        }, {
          key: "_getEdgesOverlappingWith",
          value: function(g3, t2) {
            for (var A2 = this.body.edges, e2 = 0; e2 < this.body.edgeIndices.length; e2++) {
              var C2 = this.body.edgeIndices[e2];
              A2[C2].isOverlappingWith(g3) && t2.push(C2);
            }
          }
        }, {
          key: "_getAllEdgesOverlappingWith",
          value: function(g3) {
            var t2 = [];
            return this._getEdgesOverlappingWith(g3, t2), t2;
          }
        }, {
          key: "getEdgeAt",
          value: function(g3) {
            for (var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], A2 = this.canvas.DOMtoCanvas(g3), e2 = 10, C2 = null, I2 = this.body.edges, i2 = 0; i2 < this.body.edgeIndices.length; i2++) {
              var o2 = this.body.edgeIndices[i2], n2 = I2[o2];
              if (n2.connected) {
                var r2 = n2.from.x, s2 = n2.from.y, a2 = n2.to.x, d2 = n2.to.y, h2 = n2.edgeType.getDistanceToEdge(r2, s2, a2, d2, A2.x, A2.y);
                h2 < e2 && (C2 = o2, e2 = h2);
              }
            }
            return null !== C2 ? true === t2 ? this.body.edges[C2] : C2 : void 0;
          }
        }, {
          key: "_addToHover",
          value: function(g3) {
            g3 instanceof jN ? this.hoverObj.nodes[g3.id] = g3 : this.hoverObj.edges[g3.id] = g3;
          }
        }, {
          key: "_removeFromSelection",
          value: function(g3) {
            var t2;
            g3 instanceof jN ? (this._selectionAccumulator.deleteNodes(g3), (t2 = this._selectionAccumulator).deleteEdges.apply(t2, ch(g3.edges))) : this._selectionAccumulator.deleteEdges(g3);
          }
        }, {
          key: "unselectAll",
          value: function() {
            this._selectionAccumulator.clear();
          }
        }, {
          key: "getSelectedNodeCount",
          value: function() {
            return this._selectionAccumulator.sizeNodes;
          }
        }, {
          key: "getSelectedEdgeCount",
          value: function() {
            return this._selectionAccumulator.sizeEdges;
          }
        }, {
          key: "_hoverConnectedEdges",
          value: function(g3) {
            for (var t2 = 0; t2 < g3.edges.length; t2++) {
              var A2 = g3.edges[t2];
              A2.hover = true, this._addToHover(A2);
            }
          }
        }, {
          key: "emitBlurEvent",
          value: function(g3, t2, A2) {
            var e2 = this._initBaseEvent(g3, t2);
            true === A2.hover && (A2.hover = false, A2 instanceof jN ? (e2.node = A2.id, this.body.emitter.emit("blurNode", e2)) : (e2.edge = A2.id, this.body.emitter.emit("blurEdge", e2)));
          }
        }, {
          key: "emitHoverEvent",
          value: function(g3, t2, A2) {
            var e2 = this._initBaseEvent(g3, t2), C2 = false;
            return false === A2.hover && (A2.hover = true, this._addToHover(A2), C2 = true, A2 instanceof jN ? (e2.node = A2.id, this.body.emitter.emit("hoverNode", e2)) : (e2.edge = A2.id, this.body.emitter.emit("hoverEdge", e2))), C2;
          }
        }, {
          key: "hoverObject",
          value: function(g3, t2) {
            var A2 = this.getNodeAt(t2);
            void 0 === A2 && (A2 = this.getEdgeAt(t2));
            var e2 = false;
            for (var C2 in this.hoverObj.nodes) Object.prototype.hasOwnProperty.call(this.hoverObj.nodes, C2) && (void 0 === A2 || A2 instanceof jN && A2.id != C2 || A2 instanceof ZR) && (this.emitBlurEvent(g3, t2, this.hoverObj.nodes[C2]), delete this.hoverObj.nodes[C2], e2 = true);
            for (var I2 in this.hoverObj.edges) Object.prototype.hasOwnProperty.call(this.hoverObj.edges, I2) && (true === e2 ? (this.hoverObj.edges[I2].hover = false, delete this.hoverObj.edges[I2]) : (void 0 === A2 || A2 instanceof ZR && A2.id != I2 || A2 instanceof jN && !A2.hover) && (this.emitBlurEvent(g3, t2, this.hoverObj.edges[I2]), delete this.hoverObj.edges[I2], e2 = true));
            if (void 0 !== A2) {
              var i2 = Lh(this.hoverObj.edges).length, o2 = Lh(this.hoverObj.nodes).length;
              (e2 || A2 instanceof ZR && 0 === i2 && 0 === o2 || A2 instanceof jN && 0 === i2 && 0 === o2) && (e2 = this.emitHoverEvent(g3, t2, A2)), A2 instanceof jN && true === this.options.hoverConnectedEdges && this._hoverConnectedEdges(A2);
            }
            true === e2 && this.body.emitter.emit("_requestRedraw");
          }
        }, {
          key: "commitWithoutEmitting",
          value: function() {
            this._selectionAccumulator.commit();
          }
        }, {
          key: "commitAndEmit",
          value: function(g3, t2) {
            var A2 = false, e2 = this._selectionAccumulator.commit(), C2 = {
              nodes: e2.nodes.previous,
              edges: e2.edges.previous
            };
            e2.edges.deleted.length > 0 && (this.generateClickEvent("deselectEdge", t2, g3, C2), A2 = true), e2.nodes.deleted.length > 0 && (this.generateClickEvent("deselectNode", t2, g3, C2), A2 = true), e2.nodes.added.length > 0 && (this.generateClickEvent("selectNode", t2, g3), A2 = true), e2.edges.added.length > 0 && (this.generateClickEvent("selectEdge", t2, g3), A2 = true), true === A2 && this.generateClickEvent("select", t2, g3);
          }
        }, {
          key: "getSelection",
          value: function() {
            return {
              nodes: this.getSelectedNodeIds(),
              edges: this.getSelectedEdgeIds()
            };
          }
        }, {
          key: "getSelectedNodes",
          value: function() {
            return this._selectionAccumulator.getNodes();
          }
        }, {
          key: "getSelectedEdges",
          value: function() {
            return this._selectionAccumulator.getEdges();
          }
        }, {
          key: "getSelectedNodeIds",
          value: function() {
            var g3;
            return Fh(g3 = this._selectionAccumulator.getNodes()).call(g3, function(g4) {
              return g4.id;
            });
          }
        }, {
          key: "getSelectedEdgeIds",
          value: function() {
            var g3;
            return Fh(g3 = this._selectionAccumulator.getEdges()).call(g3, function(g4) {
              return g4.id;
            });
          }
        }, {
          key: "setSelection",
          value: function(g3) {
            var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!g3 || !g3.nodes && !g3.edges) throw new TypeError("Selection must be an object with nodes and/or edges properties");
            if ((t2.unselectAll || void 0 === t2.unselectAll) && this.unselectAll(), g3.nodes) {
              var A2, e2 = fM(g3.nodes);
              try {
                for (e2.s(); !(A2 = e2.n()).done; ) {
                  var C2 = A2.value, I2 = this.body.nodes[C2];
                  if (!I2) throw new RangeError('Node with id "' + C2 + '" not found');
                  this.selectObject(I2, t2.highlightEdges);
                }
              } catch (g4) {
                e2.e(g4);
              } finally {
                e2.f();
              }
            }
            if (g3.edges) {
              var i2, o2 = fM(g3.edges);
              try {
                for (o2.s(); !(i2 = o2.n()).done; ) {
                  var n2 = i2.value, r2 = this.body.edges[n2];
                  if (!r2) throw new RangeError('Edge with id "' + n2 + '" not found');
                  this.selectObject(r2);
                }
              } catch (g4) {
                o2.e(g4);
              } finally {
                o2.f();
              }
            }
            this.body.emitter.emit("_requestRedraw"), this._selectionAccumulator.commit();
          }
        }, {
          key: "selectNodes",
          value: function(g3) {
            var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (!g3 || void 0 === g3.length) throw "Selection must be an array with ids";
            this.setSelection({
              nodes: g3
            }, {
              highlightEdges: t2
            });
          }
        }, {
          key: "selectEdges",
          value: function(g3) {
            if (!g3 || void 0 === g3.length) throw "Selection must be an array with ids";
            this.setSelection({
              edges: g3
            });
          }
        }, {
          key: "updateSelection",
          value: function() {
            for (var g3 in this._selectionAccumulator.getNodes()) Object.prototype.hasOwnProperty.call(this.body.nodes, g3.id) || this._selectionAccumulator.deleteNodes(g3);
            for (var t2 in this._selectionAccumulator.getEdges()) Object.prototype.hasOwnProperty.call(this.body.edges, t2.id) || this._selectionAccumulator.deleteEdges(t2);
          }
        }, {
          key: "getClickedItems",
          value: function(g3) {
            for (var t2 = this.canvas.DOMtoCanvas(g3), A2 = [], e2 = this.body.nodeIndices, C2 = this.body.nodes, I2 = e2.length - 1; I2 >= 0; I2--) {
              var i2 = C2[e2[I2]].getItemsOnPoint(t2);
              A2.push.apply(A2, i2);
            }
            for (var o2 = this.body.edgeIndices, n2 = this.body.edges, r2 = o2.length - 1; r2 >= 0; r2--) {
              var s2 = n2[o2[r2]].getItemsOnPoint(t2);
              A2.push.apply(A2, s2);
            }
            return A2;
          }
        }]), g2;
      }();
      function mM(g2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !MT) return false;
          if (MT.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(MT(Boolean, [], function() {
            })), true;
          } catch (g3) {
            return false;
          }
        }();
        return function() {
          var A2, e2 = nb(g2);
          if (t2) {
            var C2 = nb(this).constructor;
            A2 = MT(e2, arguments, C2);
          } else A2 = e2.apply(this, arguments);
          return Ib(this, A2);
        };
      }
      var bM = function() {
        function g2() {
          cn(this, g2);
        }
        return kd(g2, [{
          key: "abstract",
          value: function() {
            throw new Error("Can't instantiate abstract class!");
          }
        }, {
          key: "fake_use",
          value: function() {
          }
        }, {
          key: "curveType",
          value: function() {
            return this.abstract();
          }
        }, {
          key: "getPosition",
          value: function(g3) {
            return this.fake_use(g3), this.abstract();
          }
        }, {
          key: "setPosition",
          value: function(g3, t2) {
            var A2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            this.fake_use(g3, t2, A2), this.abstract();
          }
        }, {
          key: "getTreeSize",
          value: function(g3) {
            return this.fake_use(g3), this.abstract();
          }
        }, {
          key: "sort",
          value: function(g3) {
            this.fake_use(g3), this.abstract();
          }
        }, {
          key: "fix",
          value: function(g3, t2) {
            this.fake_use(g3, t2), this.abstract();
          }
        }, {
          key: "shift",
          value: function(g3, t2) {
            this.fake_use(g3, t2), this.abstract();
          }
        }]), g2;
      }(), wM = function(g2) {
        Cb(A2, g2);
        var t2 = mM(A2);
        function A2(g3) {
          var e2;
          return cn(this, A2), (e2 = t2.call(this)).layout = g3, e2;
        }
        return kd(A2, [{
          key: "curveType",
          value: function() {
            return "horizontal";
          }
        }, {
          key: "getPosition",
          value: function(g3) {
            return g3.x;
          }
        }, {
          key: "setPosition",
          value: function(g3, t3) {
            var A3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            void 0 !== A3 && this.layout.hierarchical.addToOrdering(g3, A3), g3.x = t3;
          }
        }, {
          key: "getTreeSize",
          value: function(g3) {
            var t3 = this.layout.hierarchical.getTreeSize(this.layout.body.nodes, g3);
            return {
              min: t3.min_x,
              max: t3.max_x
            };
          }
        }, {
          key: "sort",
          value: function(g3) {
            WO(g3).call(g3, function(g4, t3) {
              return g4.x - t3.x;
            });
          }
        }, {
          key: "fix",
          value: function(g3, t3) {
            g3.y = this.layout.options.hierarchical.levelSeparation * t3, g3.options.fixed.y = true;
          }
        }, {
          key: "shift",
          value: function(g3, t3) {
            this.layout.body.nodes[g3].x += t3;
          }
        }]), A2;
      }(bM), kM = function(g2) {
        Cb(A2, g2);
        var t2 = mM(A2);
        function A2(g3) {
          var e2;
          return cn(this, A2), (e2 = t2.call(this)).layout = g3, e2;
        }
        return kd(A2, [{
          key: "curveType",
          value: function() {
            return "vertical";
          }
        }, {
          key: "getPosition",
          value: function(g3) {
            return g3.y;
          }
        }, {
          key: "setPosition",
          value: function(g3, t3) {
            var A3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            void 0 !== A3 && this.layout.hierarchical.addToOrdering(g3, A3), g3.y = t3;
          }
        }, {
          key: "getTreeSize",
          value: function(g3) {
            var t3 = this.layout.hierarchical.getTreeSize(this.layout.body.nodes, g3);
            return {
              min: t3.min_y,
              max: t3.max_y
            };
          }
        }, {
          key: "sort",
          value: function(g3) {
            WO(g3).call(g3, function(g4, t3) {
              return g4.y - t3.y;
            });
          }
        }, {
          key: "fix",
          value: function(g3, t3) {
            g3.x = this.layout.options.hierarchical.levelSeparation * t3, g3.options.fixed.x = true;
          }
        }, {
          key: "shift",
          value: function(g3, t3) {
            this.layout.body.nodes[g3].y += t3;
          }
        }]), A2;
      }(bM), xM = Sr.every;
      TA({
        target: "Array",
        proto: true,
        forced: !_h("every")
      }, {
        every: function(g2) {
          return xM(this, g2, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      var EM = Me("Array").every, OM = og, TM = EM, DM = Array.prototype, NM = function(g2) {
        var t2 = g2.every;
        return g2 === DM || OM(DM, g2) && t2 === DM.every ? TM : t2;
      }, RM = A(NM);
      function PM(g2, t2) {
        var A2 = void 0 !== uh && ln(g2) || g2["@@iterator"];
        if (!A2) {
          if (Rh(g2) || (A2 = function(g3, t3) {
            var A3;
            if (!g3) return;
            if ("string" == typeof g3) return MM(g3, t3);
            var e3 = wh(A3 = Object.prototype.toString.call(g3)).call(A3, 8, -1);
            "Object" === e3 && g3.constructor && (e3 = g3.constructor.name);
            if ("Map" === e3 || "Set" === e3) return Uo(g3);
            if ("Arguments" === e3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e3)) return MM(g3, t3);
          }(g2)) || t2 && g2 && "number" == typeof g2.length) {
            A2 && (g2 = A2);
            var e2 = 0, C2 = function() {
            };
            return {
              s: C2,
              n: function() {
                return e2 >= g2.length ? {
                  done: true
                } : {
                  done: false,
                  value: g2[e2++]
                };
              },
              e: function(g3) {
                throw g3;
              },
              f: C2
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var I2, i2 = true, o2 = false;
        return {
          s: function() {
            A2 = A2.call(g2);
          },
          n: function() {
            var g3 = A2.next();
            return i2 = g3.done, g3;
          },
          e: function(g3) {
            o2 = true, I2 = g3;
          },
          f: function() {
            try {
              i2 || null == A2.return || A2.return();
            } finally {
              if (o2) throw I2;
            }
          }
        };
      }
      function MM(g2, t2) {
        (null == t2 || t2 > g2.length) && (t2 = g2.length);
        for (var A2 = 0, e2 = new Array(t2); A2 < t2; A2++) e2[A2] = g2[A2];
        return e2;
      }
      function BM(g2, t2) {
        var A2 = new CO();
        return Cl(g2).call(g2, function(g3) {
          var t3;
          Cl(t3 = g3.edges).call(t3, function(g4) {
            g4.connected && A2.add(g4);
          });
        }), Cl(A2).call(A2, function(g3) {
          var A3 = g3.from.id, e2 = g3.to.id;
          null == t2[A3] && (t2[A3] = 0), (null == t2[e2] || t2[A3] >= t2[e2]) && (t2[e2] = t2[A3] + 1);
        }), t2;
      }
      function zM(g2, t2, A2, e2) {
        var C2, I2, i2 = $c(null), o2 = LE(C2 = ch(nT(e2).call(e2))).call(C2, function(g3, t3) {
          return g3 + 1 + t3.edges.length;
        }, 0), n2 = A2 + "Id", r2 = "to" === A2 ? 1 : -1, s2 = PM(e2);
        try {
          var a2, d2 = function() {
            var C3 = lh(I2.value, 2), s3 = C3[0], a3 = C3[1];
            if (!e2.has(s3) || !g2(a3)) return 0;
            i2[s3] = 0;
            for (var d3, h2, l2 = [a3], c2 = 0, u2 = function() {
              var g3, C4;
              if (!e2.has(s3)) return 0;
              var I3 = i2[d3.id] + r2;
              if (Cl(g3 = pc(C4 = d3.edges).call(C4, function(g4) {
                return g4.connected && g4.to !== g4.from && g4[A2] !== d3 && e2.has(g4.toId) && e2.has(g4.fromId);
              })).call(g3, function(g4) {
                var e3 = g4[n2], C5 = i2[e3];
                (null == C5 || t2(I3, C5)) && (i2[e3] = I3, l2.push(g4[A2]));
              }), c2 > o2) return {
                v: {
                  v: BM(e2, i2)
                }
              };
              ++c2;
            }; d3 = l2.pop(); ) if (0 !== (h2 = u2()) && h2) return h2.v;
          };
          for (s2.s(); !(I2 = s2.n()).done; ) if (0 !== (a2 = d2()) && a2) return a2.v;
        } catch (g3) {
          s2.e(g3);
        } finally {
          s2.f();
        }
        return i2;
      }
      var SM = function() {
        function g2() {
          cn(this, g2), this.childrenReference = {}, this.parentReference = {}, this.trees = {}, this.distributionOrdering = {}, this.levels = {}, this.distributionIndex = {}, this.isTree = false, this.treeIndex = -1;
        }
        return kd(g2, [{
          key: "addRelation",
          value: function(g3, t2) {
            void 0 === this.childrenReference[g3] && (this.childrenReference[g3] = []), this.childrenReference[g3].push(t2), void 0 === this.parentReference[t2] && (this.parentReference[t2] = []), this.parentReference[t2].push(g3);
          }
        }, {
          key: "checkIfTree",
          value: function() {
            for (var g3 in this.parentReference) if (this.parentReference[g3].length > 1) return void (this.isTree = false);
            this.isTree = true;
          }
        }, {
          key: "numTrees",
          value: function() {
            return this.treeIndex + 1;
          }
        }, {
          key: "setTreeIndex",
          value: function(g3, t2) {
            void 0 !== t2 && void 0 === this.trees[g3.id] && (this.trees[g3.id] = t2, this.treeIndex = Math.max(t2, this.treeIndex));
          }
        }, {
          key: "ensureLevel",
          value: function(g3) {
            void 0 === this.levels[g3] && (this.levels[g3] = 0);
          }
        }, {
          key: "getMaxLevel",
          value: function(g3) {
            var t2 = this, A2 = {};
            return function g4(e2) {
              if (void 0 !== A2[e2]) return A2[e2];
              var C2 = t2.levels[e2];
              if (t2.childrenReference[e2]) {
                var I2 = t2.childrenReference[e2];
                if (I2.length > 0) for (var i2 = 0; i2 < I2.length; i2++) C2 = Math.max(C2, g4(I2[i2]));
              }
              return A2[e2] = C2, C2;
            }(g3);
          }
        }, {
          key: "levelDownstream",
          value: function(g3, t2) {
            void 0 === this.levels[t2.id] && (void 0 === this.levels[g3.id] && (this.levels[g3.id] = 0), this.levels[t2.id] = this.levels[g3.id] + 1);
          }
        }, {
          key: "setMinLevelToZero",
          value: function(g3) {
            var t2 = 1e9;
            for (var A2 in g3) Object.prototype.hasOwnProperty.call(g3, A2) && void 0 !== this.levels[A2] && (t2 = Math.min(this.levels[A2], t2));
            for (var e2 in g3) Object.prototype.hasOwnProperty.call(g3, e2) && void 0 !== this.levels[e2] && (this.levels[e2] -= t2);
          }
        }, {
          key: "getTreeSize",
          value: function(g3, t2) {
            var A2 = 1e9, e2 = -1e9, C2 = 1e9, I2 = -1e9;
            for (var i2 in this.trees) if (Object.prototype.hasOwnProperty.call(this.trees, i2) && this.trees[i2] === t2) {
              var o2 = g3[i2];
              A2 = Math.min(o2.x, A2), e2 = Math.max(o2.x, e2), C2 = Math.min(o2.y, C2), I2 = Math.max(o2.y, I2);
            }
            return {
              min_x: A2,
              max_x: e2,
              min_y: C2,
              max_y: I2
            };
          }
        }, {
          key: "hasSameParent",
          value: function(g3, t2) {
            var A2 = this.parentReference[g3.id], e2 = this.parentReference[t2.id];
            if (void 0 === A2 || void 0 === e2) return false;
            for (var C2 = 0; C2 < A2.length; C2++) for (var I2 = 0; I2 < e2.length; I2++) if (A2[C2] == e2[I2]) return true;
            return false;
          }
        }, {
          key: "inSameSubNetwork",
          value: function(g3, t2) {
            return this.trees[g3.id] === this.trees[t2.id];
          }
        }, {
          key: "getLevels",
          value: function() {
            return Lh(this.distributionOrdering);
          }
        }, {
          key: "addToOrdering",
          value: function(g3, t2) {
            void 0 === this.distributionOrdering[t2] && (this.distributionOrdering[t2] = []);
            var A2 = false, e2 = this.distributionOrdering[t2];
            for (var C2 in e2) if (e2[C2] === g3) {
              A2 = true;
              break;
            }
            A2 || (this.distributionOrdering[t2].push(g3), this.distributionIndex[g3.id] = this.distributionOrdering[t2].length - 1);
          }
        }]), g2;
      }(), ZM = function() {
        function g2(t2) {
          cn(this, g2), this.body = t2, this._resetRNG(Math.random() + ":" + Qh()), this.setPhysics = false, this.options = {}, this.optionsBackup = {
            physics: {}
          }, this.defaultOptions = {
            randomSeed: void 0,
            improvedLayout: true,
            clusterThreshold: 150,
            hierarchical: {
              enabled: false,
              levelSeparation: 150,
              nodeSpacing: 100,
              treeSpacing: 200,
              blockShifting: true,
              edgeMinimization: true,
              parentCentralization: true,
              direction: "UD",
              sortMethod: "hubsize"
            }
          }, fe(this.options, this.defaultOptions), this.bindEventListeners();
        }
        return kd(g2, [{
          key: "bindEventListeners",
          value: function() {
            var g3 = this;
            this.body.emitter.on("_dataChanged", function() {
              g3.setupHierarchicalLayout();
            }), this.body.emitter.on("_dataLoaded", function() {
              g3.layoutNetwork();
            }), this.body.emitter.on("_resetHierarchicalLayout", function() {
              g3.setupHierarchicalLayout();
            }), this.body.emitter.on("_adjustEdgesForHierarchicalLayout", function() {
              if (true === g3.options.hierarchical.enabled) {
                var t2 = g3.direction.curveType();
                g3.body.emitter.emit("_forceDisableDynamicCurves", t2, false);
              }
            });
          }
        }, {
          key: "setOptions",
          value: function(g3, t2) {
            if (void 0 !== g3) {
              var A2 = this.options.hierarchical, e2 = A2.enabled;
              if (Xf(["randomSeed", "improvedLayout", "clusterThreshold"], this.options, g3), dv(this.options, g3, "hierarchical"), void 0 !== g3.randomSeed && this._resetRNG(g3.randomSeed), true === A2.enabled) return true === e2 && this.body.emitter.emit("refresh", true), "RL" === A2.direction || "DU" === A2.direction ? A2.levelSeparation > 0 && (A2.levelSeparation *= -1) : A2.levelSeparation < 0 && (A2.levelSeparation *= -1), this.setDirectionStrategy(), this.body.emitter.emit("_resetHierarchicalLayout"), this.adaptAllOptionsForHierarchicalLayout(t2);
              if (true === e2) return this.body.emitter.emit("refresh"), qf(t2, this.optionsBackup);
            }
            return t2;
          }
        }, {
          key: "_resetRNG",
          value: function(g3) {
            this.initialRandomSeed = g3, this._rng = Ff(this.initialRandomSeed);
          }
        }, {
          key: "adaptAllOptionsForHierarchicalLayout",
          value: function(g3) {
            if (true === this.options.hierarchical.enabled) {
              var t2 = this.optionsBackup.physics;
              void 0 === g3.physics || true === g3.physics ? (g3.physics = {
                enabled: void 0 === t2.enabled || t2.enabled,
                solver: "hierarchicalRepulsion"
              }, t2.enabled = void 0 === t2.enabled || t2.enabled, t2.solver = t2.solver || "barnesHut") : "object" === yd(g3.physics) ? (t2.enabled = void 0 === g3.physics.enabled || g3.physics.enabled, t2.solver = g3.physics.solver || "barnesHut", g3.physics.solver = "hierarchicalRepulsion") : false !== g3.physics && (t2.solver = "barnesHut", g3.physics = {
                solver: "hierarchicalRepulsion"
              });
              var A2 = this.direction.curveType();
              if (void 0 === g3.edges) this.optionsBackup.edges = {
                smooth: {
                  enabled: true,
                  type: "dynamic"
                }
              }, g3.edges = {
                smooth: false
              };
              else if (void 0 === g3.edges.smooth) this.optionsBackup.edges = {
                smooth: {
                  enabled: true,
                  type: "dynamic"
                }
              }, g3.edges.smooth = false;
              else if ("boolean" == typeof g3.edges.smooth) this.optionsBackup.edges = {
                smooth: g3.edges.smooth
              }, g3.edges.smooth = {
                enabled: g3.edges.smooth,
                type: A2
              };
              else {
                var e2 = g3.edges.smooth;
                void 0 !== e2.type && "dynamic" !== e2.type && (A2 = e2.type), this.optionsBackup.edges = {
                  smooth: {
                    enabled: void 0 === e2.enabled || e2.enabled,
                    type: void 0 === e2.type ? "dynamic" : e2.type,
                    roundness: void 0 === e2.roundness ? 0.5 : e2.roundness,
                    forceDirection: void 0 !== e2.forceDirection && e2.forceDirection
                  }
                }, g3.edges.smooth = {
                  enabled: void 0 === e2.enabled || e2.enabled,
                  type: A2,
                  roundness: void 0 === e2.roundness ? 0.5 : e2.roundness,
                  forceDirection: void 0 !== e2.forceDirection && e2.forceDirection
                };
              }
              this.body.emitter.emit("_forceDisableDynamicCurves", A2);
            }
            return g3;
          }
        }, {
          key: "positionInitially",
          value: function(g3) {
            if (true !== this.options.hierarchical.enabled) {
              this._resetRNG(this.initialRandomSeed);
              for (var t2 = g3.length + 50, A2 = 0; A2 < g3.length; A2++) {
                var e2 = g3[A2], C2 = 2 * Math.PI * this._rng();
                void 0 === e2.x && (e2.x = t2 * Math.cos(C2)), void 0 === e2.y && (e2.y = t2 * Math.sin(C2));
              }
            }
          }
        }, {
          key: "layoutNetwork",
          value: function() {
            if (true !== this.options.hierarchical.enabled && true === this.options.improvedLayout) {
              for (var g3 = this.body.nodeIndices, t2 = 0, A2 = 0; A2 < g3.length; A2++) {
                true === this.body.nodes[g3[A2]].predefinedPosition && (t2 += 1);
              }
              if (t2 < 0.5 * g3.length) {
                var e2 = 0, C2 = this.options.clusterThreshold, I2 = {
                  clusterNodeProperties: {
                    shape: "ellipse",
                    label: "",
                    group: "",
                    font: {
                      multi: false
                    }
                  },
                  clusterEdgeProperties: {
                    label: "",
                    font: {
                      multi: false
                    },
                    smooth: {
                      enabled: false
                    }
                  }
                };
                if (g3.length > C2) {
                  for (var i2 = g3.length; g3.length > C2 && e2 <= 10; ) {
                    e2 += 1;
                    var o2 = g3.length;
                    if (e2 % 3 == 0 ? this.body.modules.clustering.clusterBridges(I2) : this.body.modules.clustering.clusterOutliers(I2), o2 == g3.length && e2 % 3 != 0) return this._declusterAll(), this.body.emitter.emit("_layoutFailed"), void console.info("This network could not be positioned by this version of the improved layout algorithm. Please disable improvedLayout for better performance.");
                  }
                  this.body.modules.kamadaKawai.setOptions({
                    springLength: Math.max(150, 2 * i2)
                  });
                }
                e2 > 10 && console.info("The clustering didn't succeed within the amount of interations allowed, progressing with partial result."), this.body.modules.kamadaKawai.solve(g3, this.body.edgeIndices, true), this._shiftToCenter();
                for (var n2 = 0; n2 < g3.length; n2++) {
                  var r2 = this.body.nodes[g3[n2]];
                  false === r2.predefinedPosition && (r2.x += 70 * (0.5 - this._rng()), r2.y += 70 * (0.5 - this._rng()));
                }
                this._declusterAll(), this.body.emitter.emit("_repositionBezierNodes");
              }
            }
          }
        }, {
          key: "_shiftToCenter",
          value: function() {
            for (var g3 = XR.getRangeCore(this.body.nodes, this.body.nodeIndices), t2 = XR.findCenter(g3), A2 = 0; A2 < this.body.nodeIndices.length; A2++) {
              var e2 = this.body.nodes[this.body.nodeIndices[A2]];
              e2.x -= t2.x, e2.y -= t2.y;
            }
          }
        }, {
          key: "_declusterAll",
          value: function() {
            for (var g3 = true; true === g3; ) {
              g3 = false;
              for (var t2 = 0; t2 < this.body.nodeIndices.length; t2++) true === this.body.nodes[this.body.nodeIndices[t2]].isCluster && (g3 = true, this.body.modules.clustering.openCluster(this.body.nodeIndices[t2], {}, false));
              true === g3 && this.body.emitter.emit("_dataChanged");
            }
          }
        }, {
          key: "getSeed",
          value: function() {
            return this.initialRandomSeed;
          }
        }, {
          key: "setupHierarchicalLayout",
          value: function() {
            if (true === this.options.hierarchical.enabled && this.body.nodeIndices.length > 0) {
              var g3, t2, A2 = false, e2 = false;
              for (t2 in this.lastNodeOnLevel = {}, this.hierarchical = new SM(), this.body.nodes) Object.prototype.hasOwnProperty.call(this.body.nodes, t2) && (void 0 !== (g3 = this.body.nodes[t2]).options.level ? (A2 = true, this.hierarchical.levels[t2] = g3.options.level) : e2 = true);
              if (true === e2 && true === A2) throw new Error("To use the hierarchical layout, nodes require either no predefined levels or levels have to be defined for all nodes.");
              if (true === e2) {
                var C2 = this.options.hierarchical.sortMethod;
                "hubsize" === C2 ? this._determineLevelsByHubsize() : "directed" === C2 ? this._determineLevelsDirected() : "custom" === C2 && this._determineLevelsCustomCallback();
              }
              for (var I2 in this.body.nodes) Object.prototype.hasOwnProperty.call(this.body.nodes, I2) && this.hierarchical.ensureLevel(I2);
              var i2 = this._getDistribution();
              this._generateMap(), this._placeNodesByHierarchy(i2), this._condenseHierarchy(), this._shiftToCenter();
            }
          }
        }, {
          key: "_condenseHierarchy",
          value: function() {
            var g3 = this, t2 = false, A2 = {}, e2 = function(t3, A3) {
              var e3 = g3.hierarchical.trees;
              for (var C3 in e3) Object.prototype.hasOwnProperty.call(e3, C3) && e3[C3] === t3 && g3.direction.shift(C3, A3);
            }, C2 = function() {
              for (var t3 = [], A3 = 0; A3 < g3.hierarchical.numTrees(); A3++) t3.push(g3.direction.getTreeSize(A3));
              return t3;
            }, I2 = function t3(A3, e3) {
              if (!e3[A3.id] && (e3[A3.id] = true, g3.hierarchical.childrenReference[A3.id])) {
                var C3 = g3.hierarchical.childrenReference[A3.id];
                if (C3.length > 0) for (var I3 = 0; I3 < C3.length; I3++) t3(g3.body.nodes[C3[I3]], e3);
              }
            }, i2 = function(t3) {
              var A3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e9, e3 = 1e9, C3 = 1e9, I3 = 1e9, i3 = -1e9;
              for (var o3 in t3) if (Object.prototype.hasOwnProperty.call(t3, o3)) {
                var n3 = g3.body.nodes[o3], r3 = g3.hierarchical.levels[n3.id], s2 = g3.direction.getPosition(n3), a2 = lh(g3._getSpaceAroundNode(n3, t3), 2), d2 = a2[0], h2 = a2[1];
                e3 = Math.min(d2, e3), C3 = Math.min(h2, C3), r3 <= A3 && (I3 = Math.min(s2, I3), i3 = Math.max(s2, i3));
              }
              return [I3, i3, e3, C3];
            }, o2 = function(t3, A3, e3) {
              for (var C3 = g3.hierarchical, I3 = 0; I3 < A3.length; I3++) {
                var i3 = A3[I3], o3 = C3.distributionOrdering[i3];
                if (o3.length > 1) for (var n3 = 0; n3 < o3.length - 1; n3++) {
                  var r3 = o3[n3], s2 = o3[n3 + 1];
                  C3.hasSameParent(r3, s2) && C3.inSameSubNetwork(r3, s2) && t3(r3, s2, e3);
                }
              }
            }, n2 = function(A3, e3) {
              var C3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o3 = g3.direction.getPosition(A3), n3 = g3.direction.getPosition(e3), r3 = Math.abs(n3 - o3), s2 = g3.options.hierarchical.nodeSpacing;
              if (r3 > s2) {
                var a2 = {}, d2 = {};
                I2(A3, a2), I2(e3, d2);
                var h2 = function(t3, A4) {
                  var e4 = g3.hierarchical.getMaxLevel(t3.id), C4 = g3.hierarchical.getMaxLevel(A4.id);
                  return Math.min(e4, C4);
                }(A3, e3), l2 = i2(a2, h2), c2 = i2(d2, h2), u2 = l2[1], p2 = c2[0], f2 = c2[2];
                if (Math.abs(u2 - p2) > s2) {
                  var v2 = u2 - p2 + s2;
                  v2 < -f2 + s2 && (v2 = -f2 + s2), v2 < 0 && (g3._shiftBlock(e3.id, v2), t2 = true, true === C3 && g3._centerParent(e3));
                }
              }
            }, r2 = function(e3, C3) {
              for (var o3 = C3.id, n3 = C3.edges, r3 = g3.hierarchical.levels[C3.id], s2 = g3.options.hierarchical.levelSeparation * g3.options.hierarchical.levelSeparation, a2 = {}, d2 = [], h2 = 0; h2 < n3.length; h2++) {
                var l2 = n3[h2];
                if (l2.toId != l2.fromId) {
                  var c2 = l2.toId == o3 ? l2.from : l2.to;
                  a2[n3[h2].id] = c2, g3.hierarchical.levels[c2.id] < r3 && d2.push(l2);
                }
              }
              var u2 = function(t3, A3) {
                for (var e4 = 0, C4 = 0; C4 < A3.length; C4++) if (void 0 !== a2[A3[C4].id]) {
                  var I3 = g3.direction.getPosition(a2[A3[C4].id]) - t3;
                  e4 += I3 / Math.sqrt(I3 * I3 + s2);
                }
                return e4;
              }, p2 = function(t3, A3) {
                for (var e4 = 0, C4 = 0; C4 < A3.length; C4++) if (void 0 !== a2[A3[C4].id]) {
                  var I3 = g3.direction.getPosition(a2[A3[C4].id]) - t3;
                  e4 -= s2 * Math.pow(I3 * I3 + s2, -1.5);
                }
                return e4;
              }, f2 = function(t3, A3) {
                for (var e4 = g3.direction.getPosition(C3), I3 = {}, i3 = 0; i3 < t3; i3++) {
                  var o4 = u2(e4, A3), n4 = p2(e4, A3);
                  if (void 0 !== I3[e4 -= Math.max(-40, Math.min(40, Math.round(o4 / n4)))]) break;
                  I3[e4] = i3;
                }
                return e4;
              }, v2 = f2(e3, d2);
              !function(e4) {
                var o4 = g3.direction.getPosition(C3);
                if (void 0 === A2[C3.id]) {
                  var n4 = {};
                  I2(C3, n4), A2[C3.id] = n4;
                }
                var r4 = i2(A2[C3.id]), s3 = r4[2], a3 = r4[3], d3 = e4 - o4, h3 = 0;
                d3 > 0 ? h3 = Math.min(d3, a3 - g3.options.hierarchical.nodeSpacing) : d3 < 0 && (h3 = -Math.min(-d3, s3 - g3.options.hierarchical.nodeSpacing)), 0 != h3 && (g3._shiftBlock(C3.id, h3), t2 = true);
              }(v2), function(A3) {
                var e4 = g3.direction.getPosition(C3), I3 = lh(g3._getSpaceAroundNode(C3), 2), i3 = I3[0], o4 = I3[1], n4 = A3 - e4, r4 = e4;
                n4 > 0 ? r4 = Math.min(e4 + (o4 - g3.options.hierarchical.nodeSpacing), A3) : n4 < 0 && (r4 = Math.max(e4 - (i3 - g3.options.hierarchical.nodeSpacing), A3)), r4 !== e4 && (g3.direction.setPosition(C3, r4), t2 = true);
              }(v2 = f2(e3, n3));
            };
            true === this.options.hierarchical.blockShifting && (function(A3) {
              var e3 = g3.hierarchical.getLevels();
              e3 = cl(e3).call(e3);
              for (var C3 = 0; C3 < A3 && (t2 = false, o2(n2, e3, true), true === t2); C3++) ;
            }(5), function() {
              for (var t3 in g3.body.nodes) Object.prototype.hasOwnProperty.call(g3.body.nodes, t3) && g3._centerParent(g3.body.nodes[t3]);
            }()), true === this.options.hierarchical.edgeMinimization && function(A3) {
              var e3 = g3.hierarchical.getLevels();
              e3 = cl(e3).call(e3);
              for (var C3 = 0; C3 < A3; C3++) {
                t2 = false;
                for (var I3 = 0; I3 < e3.length; I3++) for (var i3 = e3[I3], o3 = g3.hierarchical.distributionOrdering[i3], n3 = 0; n3 < o3.length; n3++) r2(1e3, o3[n3]);
                if (true !== t2) break;
              }
            }(20), true === this.options.hierarchical.parentCentralization && function() {
              var t3 = g3.hierarchical.getLevels();
              t3 = cl(t3).call(t3);
              for (var A3 = 0; A3 < t3.length; A3++) for (var e3 = t3[A3], C3 = g3.hierarchical.distributionOrdering[e3], I3 = 0; I3 < C3.length; I3++) g3._centerParent(C3[I3]);
            }(), function() {
              for (var t3 = C2(), A3 = 0, I3 = 0; I3 < t3.length - 1; I3++) {
                A3 += t3[I3].max - t3[I3 + 1].min + g3.options.hierarchical.treeSpacing, e2(I3 + 1, A3);
              }
            }();
          }
        }, {
          key: "_getSpaceAroundNode",
          value: function(g3, t2) {
            var A2 = true;
            void 0 === t2 && (A2 = false);
            var e2 = this.hierarchical.levels[g3.id];
            if (void 0 !== e2) {
              var C2 = this.hierarchical.distributionIndex[g3.id], I2 = this.direction.getPosition(g3), i2 = this.hierarchical.distributionOrdering[e2], o2 = 1e9, n2 = 1e9;
              if (0 !== C2) {
                var r2 = i2[C2 - 1];
                if (true === A2 && void 0 === t2[r2.id] || false === A2) o2 = I2 - this.direction.getPosition(r2);
              }
              if (C2 != i2.length - 1) {
                var s2 = i2[C2 + 1];
                if (true === A2 && void 0 === t2[s2.id] || false === A2) {
                  var a2 = this.direction.getPosition(s2);
                  n2 = Math.min(n2, a2 - I2);
                }
              }
              return [o2, n2];
            }
            return [0, 0];
          }
        }, {
          key: "_centerParent",
          value: function(g3) {
            if (this.hierarchical.parentReference[g3.id]) for (var t2 = this.hierarchical.parentReference[g3.id], A2 = 0; A2 < t2.length; A2++) {
              var e2 = t2[A2], C2 = this.body.nodes[e2], I2 = this.hierarchical.childrenReference[e2];
              if (void 0 !== I2) {
                var i2 = this._getCenterPosition(I2), o2 = this.direction.getPosition(C2), n2 = lh(this._getSpaceAroundNode(C2), 2), r2 = n2[0], s2 = n2[1], a2 = o2 - i2;
                (a2 < 0 && Math.abs(a2) < s2 - this.options.hierarchical.nodeSpacing || a2 > 0 && Math.abs(a2) < r2 - this.options.hierarchical.nodeSpacing) && this.direction.setPosition(C2, i2);
              }
            }
          }
        }, {
          key: "_placeNodesByHierarchy",
          value: function(g3) {
            for (var t2 in this.positionedNodes = {}, g3) if (Object.prototype.hasOwnProperty.call(g3, t2)) {
              var A2, e2 = Lh(g3[t2]);
              e2 = this._indexArrayToNodes(e2), WO(A2 = this.direction).call(A2, e2);
              for (var C2 = 0, I2 = 0; I2 < e2.length; I2++) {
                var i2 = e2[I2];
                if (void 0 === this.positionedNodes[i2.id]) {
                  var o2 = this.options.hierarchical.nodeSpacing, n2 = o2 * C2;
                  C2 > 0 && (n2 = this.direction.getPosition(e2[I2 - 1]) + o2), this.direction.setPosition(i2, n2, t2), this._validatePositionAndContinue(i2, t2, n2), C2++;
                }
              }
            }
          }
        }, {
          key: "_placeBranchNodes",
          value: function(g3, t2) {
            var A2, e2 = this.hierarchical.childrenReference[g3];
            if (void 0 !== e2) {
              for (var C2 = [], I2 = 0; I2 < e2.length; I2++) C2.push(this.body.nodes[e2[I2]]);
              WO(A2 = this.direction).call(A2, C2);
              for (var i2 = 0; i2 < C2.length; i2++) {
                var o2 = C2[i2], n2 = this.hierarchical.levels[o2.id];
                if (!(n2 > t2 && void 0 === this.positionedNodes[o2.id])) return;
                var r2 = this.options.hierarchical.nodeSpacing, s2 = void 0;
                s2 = 0 === i2 ? this.direction.getPosition(this.body.nodes[g3]) : this.direction.getPosition(C2[i2 - 1]) + r2, this.direction.setPosition(o2, s2, n2), this._validatePositionAndContinue(o2, n2, s2);
              }
              var a2 = this._getCenterPosition(C2);
              this.direction.setPosition(this.body.nodes[g3], a2, t2);
            }
          }
        }, {
          key: "_validatePositionAndContinue",
          value: function(g3, t2, A2) {
            if (this.hierarchical.isTree) {
              if (void 0 !== this.lastNodeOnLevel[t2]) {
                var e2 = this.direction.getPosition(this.body.nodes[this.lastNodeOnLevel[t2]]);
                if (A2 - e2 < this.options.hierarchical.nodeSpacing) {
                  var C2 = e2 + this.options.hierarchical.nodeSpacing - A2, I2 = this._findCommonParent(this.lastNodeOnLevel[t2], g3.id);
                  this._shiftBlock(I2.withChild, C2);
                }
              }
              this.lastNodeOnLevel[t2] = g3.id, this.positionedNodes[g3.id] = true, this._placeBranchNodes(g3.id, t2);
            }
          }
        }, {
          key: "_indexArrayToNodes",
          value: function(g3) {
            for (var t2 = [], A2 = 0; A2 < g3.length; A2++) t2.push(this.body.nodes[g3[A2]]);
            return t2;
          }
        }, {
          key: "_getDistribution",
          value: function() {
            var g3, t2, A2 = {};
            for (g3 in this.body.nodes) if (Object.prototype.hasOwnProperty.call(this.body.nodes, g3)) {
              t2 = this.body.nodes[g3];
              var e2 = void 0 === this.hierarchical.levels[g3] ? 0 : this.hierarchical.levels[g3];
              this.direction.fix(t2, e2), void 0 === A2[e2] && (A2[e2] = {}), A2[e2][g3] = t2;
            }
            return A2;
          }
        }, {
          key: "_getActiveEdges",
          value: function(g3) {
            var t2 = this, A2 = [];
            return tv(g3.edges, function(g4) {
              var e2;
              -1 !== Xc(e2 = t2.body.edgeIndices).call(e2, g4.id) && A2.push(g4);
            }), A2;
          }
        }, {
          key: "_getHubSizes",
          value: function() {
            var g3 = this, t2 = {};
            tv(this.body.nodeIndices, function(A3) {
              var e2 = g3.body.nodes[A3], C2 = g3._getActiveEdges(e2).length;
              t2[C2] = true;
            });
            var A2 = [];
            return tv(t2, function(g4) {
              A2.push(Number(g4));
            }), WO(A2).call(A2, function(g4, t3) {
              return t3 - g4;
            }), A2;
          }
        }, {
          key: "_determineLevelsByHubsize",
          value: function() {
            for (var g3 = this, t2 = function(t3, A3) {
              g3.hierarchical.levelDownstream(t3, A3);
            }, A2 = this._getHubSizes(), e2 = function() {
              var e3 = A2[C2];
              if (0 === e3) return 1;
              tv(g3.body.nodeIndices, function(A3) {
                var C3 = g3.body.nodes[A3];
                e3 === g3._getActiveEdges(C3).length && g3._crawlNetwork(t2, A3);
              });
            }, C2 = 0; C2 < A2.length && !e2(); ++C2) ;
          }
        }, {
          key: "_determineLevelsCustomCallback",
          value: function() {
            var g3 = this;
            this._crawlNetwork(function(t2, A2, e2) {
              var C2 = g3.hierarchical.levels[t2.id];
              void 0 === C2 && (C2 = g3.hierarchical.levels[t2.id] = 1e5);
              var I2 = (XR.cloneOptions(t2, "node"), XR.cloneOptions(A2, "node"), void XR.cloneOptions(e2, "edge"));
              g3.hierarchical.levels[A2.id] = C2 + I2;
            }), this.hierarchical.setMinLevelToZero(this.body.nodes);
          }
        }, {
          key: "_determineLevelsDirected",
          value: function() {
            var g3, t2 = this, A2 = LE(g3 = this.body.nodeIndices).call(g3, function(g4, A3) {
              return g4.set(A3, t2.body.nodes[A3]), g4;
            }, new Fm());
            "roots" === this.options.hierarchical.shakeTowards ? this.hierarchical.levels = function(g4) {
              return zM(function(t3) {
                var A3, e2;
                return RM(A3 = pc(e2 = t3.edges).call(e2, function(t4) {
                  return g4.has(t4.toId);
                })).call(A3, function(g5) {
                  return g5.from === t3;
                });
              }, function(g5, t3) {
                return t3 < g5;
              }, "to", g4);
            }(A2) : this.hierarchical.levels = function(g4) {
              return zM(function(t3) {
                var A3, e2;
                return RM(A3 = pc(e2 = t3.edges).call(e2, function(t4) {
                  return g4.has(t4.toId);
                })).call(A3, function(g5) {
                  return g5.to === t3;
                });
              }, function(g5, t3) {
                return t3 > g5;
              }, "from", g4);
            }(A2), this.hierarchical.setMinLevelToZero(this.body.nodes);
          }
        }, {
          key: "_generateMap",
          value: function() {
            var g3 = this;
            this._crawlNetwork(function(t2, A2) {
              g3.hierarchical.levels[A2.id] > g3.hierarchical.levels[t2.id] && g3.hierarchical.addRelation(t2.id, A2.id);
            }), this.hierarchical.checkIfTree();
          }
        }, {
          key: "_crawlNetwork",
          value: function() {
            var g3 = this, t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
            }, A2 = arguments.length > 1 ? arguments[1] : void 0, e2 = {}, C2 = function A3(C3, I3) {
              if (void 0 === e2[C3.id]) {
                var i3;
                g3.hierarchical.setTreeIndex(C3, I3), e2[C3.id] = true;
                for (var o3 = g3._getActiveEdges(C3), n3 = 0; n3 < o3.length; n3++) {
                  var r2 = o3[n3];
                  true === r2.connected && (i3 = r2.toId == C3.id ? r2.from : r2.to, C3.id != i3.id && (t2(C3, i3, r2), A3(i3, I3)));
                }
              }
            };
            if (void 0 === A2) for (var I2 = 0, i2 = 0; i2 < this.body.nodeIndices.length; i2++) {
              var o2 = this.body.nodeIndices[i2];
              if (void 0 === e2[o2]) C2(this.body.nodes[o2], I2), I2 += 1;
            }
            else {
              var n2 = this.body.nodes[A2];
              if (void 0 === n2) return void console.error("Node not found:", A2);
              C2(n2);
            }
          }
        }, {
          key: "_shiftBlock",
          value: function(g3, t2) {
            var A2 = this, e2 = {};
            !function g4(C2) {
              if (!e2[C2]) {
                e2[C2] = true, A2.direction.shift(C2, t2);
                var I2 = A2.hierarchical.childrenReference[C2];
                if (void 0 !== I2) for (var i2 = 0; i2 < I2.length; i2++) g4(I2[i2]);
              }
            }(g3);
          }
        }, {
          key: "_findCommonParent",
          value: function(g3, t2) {
            var A2 = this, e2 = {};
            return function g4(t3, e3) {
              var C2 = A2.hierarchical.parentReference[e3];
              if (void 0 !== C2) for (var I2 = 0; I2 < C2.length; I2++) {
                var i2 = C2[I2];
                t3[i2] = true, g4(t3, i2);
              }
            }(e2, g3), function g4(t3, e3) {
              var C2 = A2.hierarchical.parentReference[e3];
              if (void 0 !== C2) for (var I2 = 0; I2 < C2.length; I2++) {
                var i2 = C2[I2];
                if (void 0 !== t3[i2]) return {
                  foundParent: i2,
                  withChild: e3
                };
                var o2 = g4(t3, i2);
                if (null !== o2.foundParent) return o2;
              }
              return {
                foundParent: null,
                withChild: e3
              };
            }(e2, t2);
          }
        }, {
          key: "setDirectionStrategy",
          value: function() {
            var g3 = "UD" === this.options.hierarchical.direction || "DU" === this.options.hierarchical.direction;
            this.direction = g3 ? new wM(this) : new kM(this);
          }
        }, {
          key: "_getCenterPosition",
          value: function(g3) {
            for (var t2 = 1e9, A2 = -1e9, e2 = 0; e2 < g3.length; e2++) {
              var C2 = void 0;
              if (void 0 !== g3[e2].id) C2 = g3[e2];
              else {
                var I2 = g3[e2];
                C2 = this.body.nodes[I2];
              }
              var i2 = this.direction.getPosition(C2);
              t2 = Math.min(t2, i2), A2 = Math.max(A2, i2);
            }
            return 0.5 * (t2 + A2);
          }
        }]), g2;
      }();
      function FM(g2, t2) {
        var A2 = void 0 !== uh && ln(g2) || g2["@@iterator"];
        if (!A2) {
          if (Rh(g2) || (A2 = function(g3, t3) {
            var A3;
            if (!g3) return;
            if ("string" == typeof g3) return GM(g3, t3);
            var e3 = wh(A3 = Object.prototype.toString.call(g3)).call(A3, 8, -1);
            "Object" === e3 && g3.constructor && (e3 = g3.constructor.name);
            if ("Map" === e3 || "Set" === e3) return Uo(g3);
            if ("Arguments" === e3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e3)) return GM(g3, t3);
          }(g2)) || t2 && g2 && "number" == typeof g2.length) {
            A2 && (g2 = A2);
            var e2 = 0, C2 = function() {
            };
            return {
              s: C2,
              n: function() {
                return e2 >= g2.length ? {
                  done: true
                } : {
                  done: false,
                  value: g2[e2++]
                };
              },
              e: function(g3) {
                throw g3;
              },
              f: C2
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var I2, i2 = true, o2 = false;
        return {
          s: function() {
            A2 = A2.call(g2);
          },
          n: function() {
            var g3 = A2.next();
            return i2 = g3.done, g3;
          },
          e: function(g3) {
            o2 = true, I2 = g3;
          },
          f: function() {
            try {
              i2 || null == A2.return || A2.return();
            } finally {
              if (o2) throw I2;
            }
          }
        };
      }
      function GM(g2, t2) {
        (null == t2 || t2 > g2.length) && (t2 = g2.length);
        for (var A2 = 0, e2 = new Array(t2); A2 < t2; A2++) e2[A2] = g2[A2];
        return e2;
      }
      _e('div.vis-network div.vis-manipulation{background:#fff;background:-moz-linear-gradient(top,#fff 0,#fcfcfc 48%,#fafafa 50%,#fcfcfc 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#fff),color-stop(48%,#fcfcfc),color-stop(50%,#fafafa),color-stop(100%,#fcfcfc));background:-webkit-linear-gradient(top,#fff,#fcfcfc 48%,#fafafa 50%,#fcfcfc);background:-o-linear-gradient(top,#fff 0,#fcfcfc 48%,#fafafa 50%,#fcfcfc 100%);background:-ms-linear-gradient(top,#fff 0,#fcfcfc 48%,#fafafa 50%,#fcfcfc 100%);background:linear-gradient(180deg,#fff 0,#fcfcfc 48%,#fafafa 50%,#fcfcfc);border:0 solid #d6d9d8;border-bottom:1px;box-sizing:content-box;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#fcfcfc",GradientType=0);height:28px;left:0;padding-top:4px;position:absolute;top:0;width:100%}div.vis-network button.vis-edit-mode,div.vis-network div.vis-edit-mode{height:30px;left:0;position:absolute;top:5px}div.vis-network button.vis-close{-webkit-touch-callout:none;background-color:transparent;background-image:url("data:image/png;base64,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/GMzLdsAADvGaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTQtMDItMTRUMTE6NTU6MzUrMDE6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDE0LTAyLTE0VDEyOjA1OjE3KzAxOjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNC0wMi0xNFQxMjowNToxNyswMTowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6NjU0YmM5YmQtMWI2Yi1jYjRhLTllOWQtNWY2MzgxNDVjZjk0PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOjk4MmM2MGIwLWUzZjMtMDk0MC04MjU0LTFiZTliNWE0ZTE4MzwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjk4MmM2MGIwLWUzZjMtMDk0MC04MjU0LTFiZTliNWE0ZTE4MzwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo5ODJjNjBiMC1lM2YzLTA5NDAtODI1NC0xYmU5YjVhNGUxODM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDItMTRUMTE6NTU6MzUrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjIxODYxNmM2LTM1MWMtNDI0OS04YWFkLWJkZDQ2ZTczNWE0NDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNC0wMi0xNFQxMTo1NTozNSswMTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6NjU0YmM5YmQtMWI2Yi1jYjRhLTllOWQtNWY2MzgxNDVjZjk0PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTAyLTE0VDEyOjA1OjE3KzAxOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6U2VxPgogICAgICAgICA8L3htcE1NOkhpc3Rvcnk+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjc8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+NzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+cZUZMwAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAA2ElEQVR42gDLADT/AS0tLUQFBQUVFxcXtPHx8fPl5eUNCAgITCkpKesEHx8fGgYGBjH+/v4a+Pj4qgQEBFU6OjodMTExzwQUFBSvEBAQEfX19SD19fVqNDQ0CElJSd/9/f2vAwEBAfrn5+fkBwcHLRYWFgsXFxfz29vbo9LS0uwDDQ0NDfPz81orKysXIyMj+ODg4Avh4eEa/f391gMkJCRYPz8/KUhISOMCAgKh8fHxHRsbGx4UFBQQBDk5OeY7Ozv7CAgItPb29vMEBASaJSUlTQ0NDesDAEwpT0Ko8Ri2AAAAAElFTkSuQmCC");background-position:20px 3px;background-repeat:no-repeat;border:none;cursor:pointer;height:30px;position:absolute;right:0;top:0;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:30px}div.vis-network button.vis-close:hover{opacity:.6}div.vis-network div.vis-edit-mode button.vis-button,div.vis-network div.vis-manipulation button.vis-button{-webkit-touch-callout:none;background-color:transparent;background-position:0 0;background-repeat:no-repeat;border:none;-moz-border-radius:15px;border-radius:15px;box-sizing:content-box;cursor:pointer;float:left;font-family:verdana;font-size:12px;height:24px;margin-left:10px;padding:0 8px;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}div.vis-network div.vis-manipulation button.vis-button:hover{box-shadow:1px 1px 8px rgba(0,0,0,.2)}div.vis-network div.vis-manipulation button.vis-button:active{box-shadow:1px 1px 8px rgba(0,0,0,.5)}div.vis-network div.vis-manipulation button.vis-button.vis-back{background-image:url("data:image/png;base64,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/GMzLdsAAEEOaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDE0LTAxLTIyVDE5OjI0OjUxKzAxOjAwPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNC0wMi0wNFQxNTowMTowOSswMTowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTQtMDItMDRUMTU6MDE6MDkrMDE6MDA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOmI2YjQwMjVkLTAxNjQtMzU0OC1hOTdlLTQ4ZmYxMWM3NTYzMzwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDpFQTc2MkY5Njc0ODNFMzExOTQ4QkQxM0UyQkU3OTlBMTwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTAxLTIyVDE5OjI0OjUxKzAxOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6RUE2MEEyNEUxOTg0RTMxMUFEQUZFRkU2RUMzMzNFMDM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDEtMjNUMTk6MTg6MDcrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDpmOWQ3OGY4ZC1lNzY0LTc1NDgtODZiNy1iNmQ1OGMzZDg2OTc8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDItMDRUMTU6MDE6MDkrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jb252ZXJ0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+ZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZzwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmRlcml2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+Y29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmc8L3N0RXZ0OnBhcmFtZXRlcnM+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOmI2YjQwMjVkLTAxNjQtMzU0OC1hOTdlLTQ4ZmYxMWM3NTYzMzwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNC0wMi0wNFQxNTowMTowOSswMTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOmY5ZDc4ZjhkLWU3NjQtNzU0OC04NmI3LWI2ZDU4YzNkODY5Nzwvc3RSZWY6aW5zdGFuY2VJRD4KICAgICAgICAgICAgPHN0UmVmOmRvY3VtZW50SUQ+eG1wLmRpZDpFQTc2MkY5Njc0ODNFMzExOTQ4QkQxM0UyQkU3OTlBMTwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgICAgPHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC9zdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDwveG1wTU06RGVyaXZlZEZyb20+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDA5MC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDkwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4jq1U/AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAVTSURBVHjanFVfTFNnFP+d77ve8qeVFbBrpcVgRrCRFikFByLxwSAaE32oRCHD6JMxxhhn8G2RxxH3MsOTbyYsmCAxPMmMMYtkIUYmK60OO0qAK23BFlNob0uh3x7WS5jLZPpLbm6+k/P9zrm5v9855PF4UFhYCABgjIExBgAgIqRSqRIi6gDQRkQ1RGTB3wgR0e8AHgH4Sa/XR/EBiAiJRAJ04cIF5Ofng4g2n0gkUkxENwF0c843LzHGQEQQQkCLExEA9ALotVgsUQAQQmgNQhJCbF5kjCEUCl0moj4t5na7fTU1NUpVVVXUYrEkASAcDhe8efOmxOfzWScmJqoBdBNR99LS0hWz2dynNSSEAF28eBGFhYVgjCEcDn9HRD1EhIMHD3o9Hs9kWVlZAh9BKBQqGB4edr58+dKZ+6JbJpOpBwBWV1fB6+rqIMsyIpHIFcZYL2MMra2tY5cuXRrfuXNnBtvAYDBk3G63oqpqZm5uzgrgSDKZjBoMhueZTAbc5XIhFouVEtFTxhiOHTs2dv78eS8+Efv374+oqpqZnZ21cs5PJJPJPlmWkyynnBuMMTQ0NHi7uro+mVyDx+Pxulwu71ZOlkqlSonoJhGhvb39s8k1nDx50ss5hyRJN9PpdKlERB2aWjSVaEilUvzBgwcORVEs5eXloXPnzk1sV8BkMiUdDofP7/dXZ7PZDilnIhw4cGBeS1pbW2P37t1zBwKBikQiUUREWFhYsHHO0d7evm0Ru90+/+rVq2rO+XGJiJxEhMrKyhgAjI6OWoeHh5tWVla+4JzDZrO9bW5unhwcHGzz+/32np4e+xaDbfoHAMxmc6ijo2O0oqIiJkkSNjY2HBIRmRljMJvNyWfPnln7+/tPMMZQXl6+0NbW9qK2tjYcj8floaEhqKpq+HCkbD3PzMwYBgYG0NXV9UuusFna2kEgELAQEQ4dOvSis7PzN41Ar9dnrl27NqCNkv/C3bt3zy4tLVmICJxzEBFJRBQmorLFxcWCqqqq0Pj4eO3Y2JhbUZTdra2tL2pra8OJRGLHnTt3zkqS9K+huHU4EhHMZnMoGo0W5OIh7nK5jjLGKq1W69vDhw8rRqMxMjc3t2t5eXnX5ORklc/nM+fl5SWnpqa+0uv1K/n5+Ws6nW5NluXNd15e3ppOp1uz2WyzZ86cGQ0Gg6ZAIFCZzWZ/lYjokRDiuN/vt7W0tMw3NTUpbrd78P79++5gMFgRiUTKHj58WMYYQ3V19etTp05tq6Lp6Wkb5xxCiEfc7XZPM8a6FxcXTfX19a/1en2Gcy5qamreNjY2/qGq6joRZe12+9Tp06e3JY/FYgWPHz8+mhvr3/CWlpbk+vp6PmOseWVlBS6XS9GSJUkSdrs93NDQ8Oe+ffvC/8fJIyMjddFo9Esi6pVleVjT2m0A8Hq9zqGhIefnjoknT544A4GAM/eDbxMReFNTE0pKSpKqqsaI6Pj8/LxVVdWM3W6PfCr5xMTE1zllXS0uLn6aSqXAGxsbodPpoNfrn6uqCs75EUVRrJFIZMfevXsXdTrdxseIE4mEPDIyUu/3++tynd8yGo29RIR0Og26fv06ioqKwBgD5xzv3r27zBjrIyJIkgSHwzFZWVmp7NmzJ1ZaWpoAgGg0WqgoSvHMzIw1GAw6tvjhitFo7NPW5fv370Hd3d0oKCgA53zTQMvLy+VCiKuSJH0rSdLmztZytIWv5RPRD0T0Y3Fx8dzWfby6ugopHo//w4mcc8iyPMc5v5FOp7/PZrOdQohWInIC2C2EgBBigYi8Qoifs9lsv06nWyIiaFxagXg8jr8GAGxuIe7LBeWhAAAAAElFTkSuQmCC")}div.vis-network div.vis-manipulation div.vis-none:hover{box-shadow:1px 1px 8px transparent;cursor:default}div.vis-network div.vis-manipulation div.vis-none:active{box-shadow:1px 1px 8px transparent}div.vis-network div.vis-manipulation div.vis-none{line-height:23px;padding:0}div.vis-network div.vis-manipulation div.notification{font-weight:700;margin:2px}div.vis-network div.vis-manipulation button.vis-button.vis-add{background-image:url("data:image/png;base64,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/GMzLdsAAEEOaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDE0LTAxLTIyVDE5OjI0OjUxKzAxOjAwPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNC0wMi0wNFQxNDo0MDoyOSswMTowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTQtMDItMDRUMTQ6NDA6MjkrMDE6MDA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjVkNWIwNmQwLTVmMjAtOGE0NC1hMzIwLWZmMTEzMzQwNDc0YjwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDpFQTc2MkY5Njc0ODNFMzExOTQ4QkQxM0UyQkU3OTlBMTwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTAxLTIyVDE5OjI0OjUxKzAxOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6RUE2MEEyNEUxOTg0RTMxMUFEQUZFRkU2RUMzMzNFMDM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDEtMjNUMTk6MTg6MDcrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo2OWVmYWE1NS01ZTI5LTIzNGUtYTUzMy0xNDkxYjM1NDNmYmE8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDItMDRUMTQ6NDA6MjkrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jb252ZXJ0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+ZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZzwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmRlcml2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+Y29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmc8L3N0RXZ0OnBhcmFtZXRlcnM+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjVkNWIwNmQwLTVmMjAtOGE0NC1hMzIwLWZmMTEzMzQwNDc0Yjwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNC0wMi0wNFQxNDo0MDoyOSswMTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOjY5ZWZhYTU1LTVlMjktMjM0ZS1hNTMzLTE0OTFiMzU0M2ZiYTwvc3RSZWY6aW5zdGFuY2VJRD4KICAgICAgICAgICAgPHN0UmVmOmRvY3VtZW50SUQ+eG1wLmRpZDpFQTc2MkY5Njc0ODNFMzExOTQ4QkQxM0UyQkU3OTlBMTwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgICAgPHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC9zdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDwveG1wTU06RGVyaXZlZEZyb20+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDA5MC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDkwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz5WKqp9AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAYXSURBVHjafFZtUFTXGX7e9z27sveuMCwYV8ElrA7YSFYHtJUPkaaI0aRqG8wP00zUzljDINNSA/2ROtpO24SxnahlxjYd7SSjmUkymcxYlDhQPzHGisEVp8HwYWCVVVgEsrsuLnL74+5uqTF9Z+7cO/d8PO95zvO851BlZSV0XQcAMDOYGQBARDhX3JRmMDYZwLPMWAzGHACYIgwS46oBNBNwtOL8CwE8EkSEUCgE2rJlC2w2G4go8Zwo/bMDgnoG6gxLfAAAYvPDMCCszKTAMIAGAhrWnf15AAAMwwARIRKJgDZv3gy73Q4iAjPjxIr9VVOMRhbAYKB8zvrO0llrfEsdKwLZek6YAPSFvtSu3GtLawu0ZJ6625SHGBQB1T88t6MxvopgMAjaunUrdF0HM+P4yv27DMYeJmB1RqW3Jnf3tQX2p0L4P9EXuqEd7PmDp+XuMU9sRbvXnnt1TxxACgoKYLVacbzsQDUJGkSATe6qi28uPtzusM6Kxie6NHLGUX3lxVUNX9StPHnn4wy3njuUYcu6n2pNi66avcEXnByP/nv8aiaIyrqz2gO5A9+9FI1GIfn5+WhZdTAdjFMkwMvZOy7uWnTAOz3L4Yk71m3t69fdfTDoUGTBeHTUfiHQ6lo7Z2OXJvpDAChKe+aOCdKRKWxZ2+1qb3yyd3GYmRkQ7GQBVs99wfv6on3eR2k4PdTkDEbH7IuS8/svld/561PJS/pDk1/bzwx94pze7xc5v/H+YPY6r5BAkdrJzODTK46lE6PeYEJt7u+8j+OZwCBiEAgAoNgKJoEQf6PvNvdrXgtZoNhSf7q0KZ3B2AQmVMze0Jmt54S/DcDCVig2NcvEUGxJAE4Pl+YOr0iv6BRSIPAmBeBZAmHlE2sH4p1uhrq1s0MnnEQMBsf8wRASAICQQCCITN1X7/sOuc0kgOVp3/fPs2WHv+coG7gQOJUnLGsUCTxEjPzUohEA+NfIWUdtx0+efzA1kSSkIGyBAQNCKgHAEBAJ3u79U7kiAcWoem/gb5Fd33nrH3kp+SMWtuAB+GllMJxMjCx9QRgA3uiqL5kwHiTlpxb3smlfMDGYGPP1hcMAkJvs8ScpfdJspdj+MK6Pf+5+u29vyb4lR4+BGEziVESAkEpw6Av1OhUpHCz4qOXbzFWz4Ncdj/v/o08Lt92ODDgZDCEFJYoUGH4mzugP92puPTf0pD3H7wvfdFZdqSxnMtWjoGAAmG9fOLxjwesdjT2/XzIQ7ks3sycYMSEwGHNtWf5bkX5NkYCJBxUBXiGV0XHvosOt54Zey33j/K+8P33++vjnbiGJbbLE+J9SANAb6nJ2B79wcUwETAwQQ7fMjPzMvfP8ja87HUIKMOiaAqMZhrGmLdAy78eZrwwsTS0eObTs+IdtgVanxBUExqGbb5VzrIISGIoUXsmqbgEhJldCQWqRf27SvPAn/o8XmgLhZsUkR4ll37mhk3n94Z4OlzY/7NLcYZfm7o1z2zT4vsvUNSXqprBCkmiTFbPX90/fh8GIT2sf+zTPdDMf4dVnNg4z+E0ixsGeBs9jd5ViSgLHjCb/peaR+MD3d4/ZJg2llyuG2Vwy7QWAs8PNnn1f7vkGSGxAzE6mk+kxkx/p/4unffSCR0hAoL1EBCYiPNdWNcwkNQTCR7feWX6g+7f/A7I8rcw/U6UEe0Ndrhc/W7mtL9ztmqlSgstSS/zTJ28dalpOpkRryrwbhwBACgsLMWPGDOT4ll3qyeqAkJTdCF7P/CrUY/GkLL1rE+2hTbSH8+0Lb/WEuhzhyaA905blf9Vd/895WnZwLHrPevir/cvOB1oLYpTtLrm6oYGIMDExAaqtrUVKSgqYGSKCk0WHq5ikkWEWtNL0imv5qUW+RclLRjJsrhBAuH1/QL8R7HR4xy5nescuP23E6hOA6mLv+sb4uTw6Ogqqq6uDpmkQkcStorX4XRcM1FjZ+kvFFjCJKU1WpkNJJUqIMtX1RyLeX3JtQ0JRhmGYZ/L27duRnJycuFGISOJ9pqh5lrB6iYgqGOxRrOaa54DcZmKvkJxk8JHC9rKh+KVhOsD4+Dj+MwADIf8n5m4xGwAAAABJRU5ErkJggg==")}div.vis-network div.vis-edit-mode button.vis-button.vis-edit,div.vis-network div.vis-manipulation button.vis-button.vis-edit{background-image:url("data:image/png;base64,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/GMzLdsAAEEOaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDE0LTAxLTIyVDE5OjI0OjUxKzAxOjAwPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNC0wMi0wNVQxNDoxMjoyNSswMTowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTQtMDItMDVUMTQ6MTI6MjUrMDE6MDA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjY5OTM3ZGZjLTJjNzQtYTU0YS05OTIzLTQyMmZhNDNkMjljNDwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDpFQTc2MkY5Njc0ODNFMzExOTQ4QkQxM0UyQkU3OTlBMTwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTAxLTIyVDE5OjI0OjUxKzAxOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6RUE2MEEyNEUxOTg0RTMxMUFEQUZFRkU2RUMzMzNFMDM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDEtMjNUMTk6MTg6MDcrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDozOWNhNzE5ZC03YzNlLTUyNGEtYmY1NS03NGVmMmM1MzE0YTc8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDItMDVUMTQ6MTI6MjUrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jb252ZXJ0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+ZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZzwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmRlcml2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+Y29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmc8L3N0RXZ0OnBhcmFtZXRlcnM+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjY5OTM3ZGZjLTJjNzQtYTU0YS05OTIzLTQyMmZhNDNkMjljNDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNC0wMi0wNVQxNDoxMjoyNSswMTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOjM5Y2E3MTlkLTdjM2UtNTI0YS1iZjU1LTc0ZWYyYzUzMTRhNzwvc3RSZWY6aW5zdGFuY2VJRD4KICAgICAgICAgICAgPHN0UmVmOmRvY3VtZW50SUQ+eG1wLmRpZDpFQTc2MkY5Njc0ODNFMzExOTQ4QkQxM0UyQkU3OTlBMTwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgICAgPHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC9zdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDwveG1wTU06RGVyaXZlZEZyb20+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDA5MC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDkwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4ykninAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAYpSURBVHjafFZtTFvnFX7Oea+NudiY2Hwam4CBlgQwXdKREDKUoYg0jbRJ29RJ2VZ1mjRFUxSpA3VTfkzJfkQbS7spU6rtx5Z2UtppScjaHxvLuiatWi2jLEoMIUDCh23g2gbj7+tPuPvhOurawPl1dc99n+c55z33fV46ceIEZFkGADAziAgAQERoe/9ZK4GPM/AcgbsIXAcABCgMvkfAqAa89eDoJyF8LogIqqqChoaGYDAYHr8kItS8uc8iIH6iAa9IkAo5EAQX8pqmgUVBCBggYFgDhv0/GAsBgKZpICJkMhnQ4OAgZFkGEYGZUXmp+0cS+CKBwWA0DVRPOg5Zl2q6zaHyJlnVAMQXVTkwHrUqH0Xsvn+tdQAAMQDgpPLS2MViFY8rkGUZzIzaS/t/xqCzGggtz9e697zsnKhoLUtim4jOq/LE6x7X0nsh16dEZ5a/O3a2SCAOHjwInU6Hujd6ThJ4mCDQ+b2G232v7v6vwarPbQn8MGlMr+X0kpE3Wr5Zt5hL5HPhqYSdQIfKJ+yhxDPKWC6Xg+jt7UXD5b5KBt1kCHS85Ljd8/On3NupfnhFaZj4rWff1B98B1R/hnUmKd36bdtCNl4g0en4edNE/cXwLq8qMTMIPAQwmo/WuHvObA8+9c58k/dKtD0TyZWXN5YGA7ej7epKxspM//7SoNOdWc/Jyq2wiwhDzPxT8cP0jys3VMM7OmL0/77zn4Ydui3b8uiK0jD7RrA77c9Wd57cefPpF+2T6bWsFPWkaiPTCWvTsZpHFU+XrS+8G3AR08F6X+1FJvBxQQzHQOWk2SmrW4FPX/U2LVwPuDZj+fJKl2khPpeyAqA9rzR/YqwuiWXX8taN/CabGkrVuq9YJlkQQDjOAJ5jAhz9Vt9W4N5/rNp8I+vtMV/aZm4zLnUNNt0urdYnF68HWoJj4Wo1mLGUNRr8LEgDgNqeCh8xQIKOsgC7iAjVe83rT9zQa8uNM28u70kspessu8q8zq/V3NcZpVzb9+0zmVhOvvvrhaMVzrJg0zeq7xMVCCwdpnWSGBqjUyJwLTFgbvxie3w31uoWR1Y74r60rdxZqrR8q85t2W2MGCp12bm/KC3hyaSTiMhxuGrKcahqpbjOaDOoEhOEoFqJQCCJvqA85I6bfTdDjQlf2lbxVNlS6wt19yy7jRHZZlDnrinNj/6sHMhnNw2Ogco7O79e5fm/xQywRBBCEAuwn4gQ96bkYj4Vyuq9N1Z3Bj4Od5bs0MXt/dZZ21ctiqFan174q985P+Lfp+U1g7XDON/1ctP458WlVjLyJhOISZE0wM0S1QfuRC3lTjkJAKKEtNC9eIOhSh9xHLZOJRZTFuXDsEoStLkR/768ummsaJG9Pb9oe+9J+xaeSVokiQDSJphAo5uaBuWjiKP4QTqS1cUWU7ayesN66wu22frD1vmVW6GW6T8u9eVjGyZzs+w78Nqu0a2mbvVu1KEJQAgeZRL0liQYyx+GOmKeQpu0rMYsAJPNEFGD2dLodLIy6c9Ys7G8yeSUl3tf2/X3rcBVJSOv34l3sCBogi7z1LH/rBHjl4IJ93/ncQFAnjeImJD0Z8zuCwu9q3djDXqTlAKID5xv+9t2R8n8VcUFBljQ8Gyfe40BYBM4DwDLt8Kue79ZcFkbzfEdbUbv+oN4c9KTtsfm1MbYQqqh+2zrVZYKs/7Ef+byimt1POYiJhDhPBFBIiIEXhxfs7/dfYoIF+auBfYTE/pebx/V8hqBP2ODvD34yvuh/WCAmU75Bx6sIgaI/v5+6PV6JLqUsYr7dpDAoehs0h73pHTWrvKgThYbRSt9UmSjef3MpaUvBz4O72UmADgTOPJguGiZor+/HyUlJWBmJFz+D8xTtlUiOpbwpmrmrweeSXrT+g11k4SBN3RGKUcAVCVdFhyP1nreDbY//NPyEXUlU/Pp4XYycGT6V0Ux2WwWdO7cOZSWlkII8diX7SPPNgDaKdbxoNAxwATBAEkEEgSWCEQAqPAMwqvMdCEwMO0tVqZpWsGTT58+DaPR+PhGIYQAAAgh0P7B3ioW/B0iGiCGiwXbCuOHFSJys6AbYFye2T+xWhT3WYJEIoH/DQBMw3kes8OJPgAAAABJRU5ErkJggg==")}div.vis-network div.vis-edit-mode button.vis-button.vis-edit.vis-edit-mode{background-color:#fcfcfc;border:1px solid #ccc}div.vis-network div.vis-manipulation button.vis-button.vis-connect{background-image:url("data:image/png;base64,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/GMzLdsAAEEOaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDE0LTAxLTIyVDE5OjI0OjUxKzAxOjAwPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNC0wMi0wNFQxNDozODo1NyswMTowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTQtMDItMDRUMTQ6Mzg6NTcrMDE6MDA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjlmYjUwMDU0LWE3ODEtMWQ0OC05ZTllLTU2ZWQ5YzhlYjdjNjwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDpFQTc2MkY5Njc0ODNFMzExOTQ4QkQxM0UyQkU3OTlBMTwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTAxLTIyVDE5OjI0OjUxKzAxOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6RUE2MEEyNEUxOTg0RTMxMUFEQUZFRkU2RUMzMzNFMDM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDEtMjNUMTk6MTg6MDcrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo3ZWRhMjI0MC0yYTQxLTNlNDQtYWM2My1iNzNiYTE5OWI3Y2E8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDItMDRUMTQ6Mzg6NTcrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jb252ZXJ0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+ZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZzwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmRlcml2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+Y29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmc8L3N0RXZ0OnBhcmFtZXRlcnM+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjlmYjUwMDU0LWE3ODEtMWQ0OC05ZTllLTU2ZWQ5YzhlYjdjNjwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNC0wMi0wNFQxNDozODo1NyswMTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOjdlZGEyMjQwLTJhNDEtM2U0NC1hYzYzLWI3M2JhMTk5YjdjYTwvc3RSZWY6aW5zdGFuY2VJRD4KICAgICAgICAgICAgPHN0UmVmOmRvY3VtZW50SUQ+eG1wLmRpZDpFQTc2MkY5Njc0ODNFMzExOTQ4QkQxM0UyQkU3OTlBMTwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgICAgPHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC9zdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDwveG1wTU06RGVyaXZlZEZyb20+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDA5MC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDkwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4ubxs+AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAUtSURBVHjajJZ/bNT1Gcdfz/P53PV6B4W7VltLqdAaplIOiMOoyxxJCSs/Gv/yB4gzJroAosmmDklwkYWR0bQsdmkykoojTpcsWYLxD/lRZdMQkTHRtkLZRqG0tIVe7662vTu43n32x/VKZ/jh89cn38/zvN7P5/l88zwf2blzJz6fDwARQUSm1n8s31CM0/VAnbNmsUPuAsDpgEO+Bg4C7//iyv5hvmMiQiqVQpqamvB6vVNwEeG1JZtCBrYi/MrkAwDNgjhwAlbzICBLA0rDb0+/839C6XQaaWxspLCw8Dp86cbNmqVFJQddE6KzdjZ9D89g+B6fSyCOcyn1nxil+O9xKg5HqWFSHGXLjrP7W/ICqVQK2bNnDz6fDxFh65KNvxbHDhF4rJj2bXPo+IGfcW5h5xL4f99P+FCEMIAob75x9t0dAMlkElNXV4e1lteXbNqiQoMaeOFOjrdU868SD2luYyEP6dUh+sYmSHeOU6GO5Z8VLx5+NNZxIpPJ5AS2L3upROCoCvz8Lo7vnkf77cAHhpiz/zIL9vWz8L8p/NvupmM0Q7pjnAoLqz8tDrc8MnQqYVUVhVdF4LEg7b+rvDn8wDDlH0WoPpukLJImSBaMwjcJqmwWts2jPZLG/8kwYVFeVdXXZcFf4yVDc2cNKfBFmD9X+0ncCP58F48eG+Feo2CAUkvs4dl0V/uJvdXLiiV+ut++n7YLSfxPfMMG54ChzB3WIesVWB2i82bw1AR6fJR7C4VsfYiv6u/k3A9nEgP4zXke8DiYHyAOMK+QxPIgnZ9GqSHr1itQJ8DK2fTerDQ+S/bHRXQJaHSCwNIZ2Xh+7+S3VAmwNMBA/tuPZtErgKquUmdMWIFlRURvdamRNEXGwIWrlP47pTMzLiunxghGMwTLvcTWlHAp77s4QNSrYMQtss6ZMgWqCm5cHoDHO1nbk6K8zEN8+3zatv2Hn1b59EqJZdxmYUERg9P9KwpIiAOTdWUWBXuLzB/vZG3P1Un4PNp2d1MbmyD45TWCxuCsQm0x56bHGHFYEZwxok7toAA9Sfw3hCcoL/NOwi9QO5wmWO1j4JEgZxTkodmcWRGkf3pcX0r8xoAaBixKu4U5/xwndM+0tpAvS6mP+PZK2nb1UBvPEKwKMLDvPj4ESGc55lGy303sdJKQdZB2rkMdctAB/4gzN+/Q2ENNd4LyUi/xN+bTtquX2thk5nk4wI3gAF+OMNcA1nFQDfK+BY5GqbkwWabTY5QZhXWlnNx1ntrY1Rz87fuvw29m/Sn8J+PUGAFj5T19baA1IspuBZp7cx1x4SwG1cEf+lgRSROs8jGwb+Ht4QB/GSSsAhYano39LWIBxNEIbP14hPDuiyS2VtJuHXQlKKvxM/jiXDq/D/xPlwifGMkJZB2NIoKpr69nxeiZxLHicFSFVWfGqBidIP3LSjrWltD94CyufF/4kQgPuVz2Lz93+dDRa9eu5QQ8Hg8/iXee+Dy4CKMs7xqn4nwKz9IirhQqmVuB42m8ey+x7LMoD6iAON782eChhqmRuXfvXgKBAKqKqtI0/8nNKrQI4BVYXkzHgzPpC88gWuHL/caXrhLoGiN0apSKr0ZZRBZM7q2w5ZnLR1oAnHOMjY0hra2tFBQUYIyZmstvVT1Z6eDlAuEVq7merxmwueNPDXy9PvybjKP5mctHLk4/XTKZRJqbm/H7/VNw1VyEMYbW4FN3WNWnnchKoy5sHeVGBRX6VWi3ymFx7r11Ix8MTX/y5C2RSPC/AQB61erowbpqSwAAAABJRU5ErkJggg==")}div.vis-network div.vis-manipulation button.vis-button.vis-delete{background-image:url("data:image/png;base64,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/GMzLdsAAEEOaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDE0LTAxLTIyVDE5OjI0OjUxKzAxOjAwPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNC0wMi0wNFQxNDo0MTowNCswMTowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTQtMDItMDRUMTQ6NDE6MDQrMDE6MDA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjc3NDkzYmUxLTEyZGItOTg0NC1iNDYyLTg2NGVmNGIzMzM3MTwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDpFQTc2MkY5Njc0ODNFMzExOTQ4QkQxM0UyQkU3OTlBMTwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTAxLTIyVDE5OjI0OjUxKzAxOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6RUE2MEEyNEUxOTg0RTMxMUFEQUZFRkU2RUMzMzNFMDM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDEtMjNUMTk6MTg6MDcrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDowNmE3NWYwMy04MDdhLWUzNGYtYjk1Zi1jZGU2MjM0Mzg4OGY8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDItMDRUMTQ6NDE6MDQrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jb252ZXJ0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+ZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZzwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmRlcml2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+Y29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmc8L3N0RXZ0OnBhcmFtZXRlcnM+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjc3NDkzYmUxLTEyZGItOTg0NC1iNDYyLTg2NGVmNGIzMzM3MTwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNC0wMi0wNFQxNDo0MTowNCswMTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOjA2YTc1ZjAzLTgwN2EtZTM0Zi1iOTVmLWNkZTYyMzQzODg4Zjwvc3RSZWY6aW5zdGFuY2VJRD4KICAgICAgICAgICAgPHN0UmVmOmRvY3VtZW50SUQ+eG1wLmRpZDpFQTc2MkY5Njc0ODNFMzExOTQ4QkQxM0UyQkU3OTlBMTwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgICAgPHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjczQjYyQUFEOTE4M0UzMTE5NDhCRDEzRTJCRTc5OUExPC9zdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDwveG1wTU06RGVyaXZlZEZyb20+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDA5MC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDkwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4aYJzYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAYGSURBVHjalJZ7UJTnFcZ/73m/72PdJY1RbhoQp6lkXRAvmIYxdCUadLVOozPNtGObap1JsKipjiShbdoRbeKEiQHpQK3xj0xa03aamTbaTGyAYV1QGeqFi+JyiZFLAlmESBkWRmS3fyzslGkmnZ5/v/M873Oe75zzvqqoqAibzQaAiKCUAkApRdHIK/NFsx2NR91nOSILADDoJyzNaM4xxbtvPHh0iC+JiYkJ1OHDh4mJiUEpFSXPv/ziPC28TIiXDCOSrAClQDSEpsCwJPIhrEBRQpiSytXlQwDhcBilFPfu3UMVFxdjt9ujFTzfcLBADCoEEAFr1ZbrrNjch2vtEImPBgHob7fTcWE+bVXJNJ/NiFQlEGLvieXHKmYqGB8fRx05cgSbzYaIsPvywV8pKFaA7fGtLTzz61YWpo/xVTHQbufsq5lcez9zWuWhk5mvFwMEg0H0+vXrMU2Tn1wp3CtCiQ5DjGd3A/m/v8IDCZP8r4iNmyRrWx/j/5qktykZpXKzAjVDVxPzGqemptDr1q1jX3NRnIJarcDKK2hgR2ULXRfncv7UYv7xpovhnhiW5Mz+kefeSKO6LJ1A1xzEuk/Ojm4mRibpuZaMZW3OCtRUND60NmiICCIUShisx7a2sLMiQn4s77uEQgIabnqdfHIlgT1/qQeg8vs5dHhdCNB1wYn3RIiC995j26stjAbsNH+YiZJCESnS1Y/XxIXu8r4YIPv/VkVs3CTnTy2ms34xro1+sp9po6sxlTu34ultmsPVvy6is86FCHgO+DDs49zpjufBpCG+seYOC9OHaTidieicb9ouVAhKtouAseI710ma7pLuqwmgYfHqAFt+6WdLoQ/LBl11Lm7VudAa8vb72PCin9TlAWIsGGhLACD+kSAZnusYBii1XQAPYWDllt6ov2lrBkDBR2+6Ofuak2//3M+G/T4wAAPW7fPhKfRTVeqk9qQbFKRmDUTxS3N7QYGYmwzCkqklBGlPDEcTNv+sg9tNCbTXuvBWujE0bHrZj9JE1B/wU1Pm5PwJN6YBS9a2kVvQEcWnrh5GTFD3lxkYkqRMgYQlwVldUvDnen73LHTUuqitdKM0eAr9AFQfd1J/yo2aJn+2sn4Wdn5qEFODJskgBIjx5T0uCrQA08pnIjS9PERDjPnfOKXAMEBECUoGEIHBj+2zkt76UQ6dXheGAev3+cg74Kf6uJPqcicbfuond7cPy4SOiy7+tD9nFvZurx00KOk3CNEC+mE+vjSPBc7IWqgqTaPT60IMcO/xsXGa3HfKjRgRdbl7/KDg0jtubje6aHj7c7J3dgLQ2zoPwwQ91SooOQdAW1VKVMHty0kA5Bb48BycJn/LjWFGbLv4thvvb53kFvjJ+XEdWkPfjQVR/CcNKYgGMc8JWt5Fa2j+MIPPuyI2pa4IoHSkt6vLIuRaQ9q32khzt4GCxtNu6k46GeiIR2lIfDQQsafPzq1LGRGL9Gk9d+vrwewvfHPQOoexQVjxdB/auk/zmaUMdsfz6bVUtIalT7bxveP1ZHh6GPDPYeSzeD69kcpIfxymFWLNrka+ljhBTWkWwz2JiJT84YHnz2iPx0P20PkmRF5i6HYiwZFJsn/YzdezbzE3cQibY5xV266z6RfXohakb+xB9CjanCD9qTbW7Grk4WV38VZm0l6dhQiEw9taHSuDqrS0FIfDwXM3X9mHMsvRAk/sauDpQy38P+GtzOTGB9mEpkD0C2dS8n8zOjqK9ng8WJZFU+JTjasGvaCNXPpvJBPoMlm0OoDNMfWVxONfWNSUPUZ7TUQ56tCZlPwSgMnJSVRpaSmxsbFE1raw82ZxAZZRQUiBYUKGp5UlOX2krBzmoUVjiIKhHge9rfPo+Wcy3ZeXIYASgL1/X5RfMXMvj46OosrLy7HZbGitUUohIuzoem0RofALaOsghgWGjky0MiJTL8b0lOvI8hN1DKXKP0jd3TNTWDgcJhgMoo4ePYrD4Yi+KmaeLlprnrtXFo9h/AAlG1AqE8yFmBrC+jO0bgH9EVpO/1F2Dc5g//OAsbEx/j0Af+USsQynL1UAAAAASUVORK5CYII=")}div.vis-network div.vis-edit-mode div.vis-label,div.vis-network div.vis-manipulation div.vis-label{line-height:25px;margin:0 0 0 23px}div.vis-network div.vis-manipulation div.vis-separator-line{background-color:#bdbdbd;display:inline-block;float:left;height:21px;margin:0 7px 0 15px;width:1px}');
      var jM = function() {
        function g2(t2, A2, e2, C2) {
          var I2, i2, o2 = this;
          cn(this, g2), this.body = t2, this.canvas = A2, this.selectionHandler = e2, this.interactionHandler = C2, this.editMode = false, this.manipulationDiv = void 0, this.editModeDiv = void 0, this.closeDiv = void 0, this._domEventListenerCleanupQueue = [], this.temporaryUIFunctions = {}, this.temporaryEventFunctions = [], this.touchTime = 0, this.temporaryIds = {
            nodes: [],
            edges: []
          }, this.guiEnabled = false, this.inMode = false, this.selectedControlNode = void 0, this.options = {}, this.defaultOptions = {
            enabled: false,
            initiallyActive: false,
            addNode: true,
            addEdge: true,
            editNode: void 0,
            editEdge: true,
            deleteNode: true,
            deleteEdge: true,
            controlNodeStyle: {
              shape: "dot",
              size: 6,
              color: {
                background: "#ff0000",
                border: "#3c3c3c",
                highlight: {
                  background: "#07f968",
                  border: "#3c3c3c"
                }
              },
              borderWidth: 2,
              borderWidthSelected: 2
            }
          }, fe(this.options, this.defaultOptions), this.body.emitter.on("destroy", function() {
            o2._clean();
          }), this.body.emitter.on("_dataChanged", je(I2 = this._restore).call(I2, this)), this.body.emitter.on("_resetData", je(i2 = this._restore).call(i2, this));
        }
        return kd(g2, [{
          key: "_restore",
          value: function() {
            false !== this.inMode && (true === this.options.initiallyActive ? this.enableEditMode() : this.disableEditMode());
          }
        }, {
          key: "setOptions",
          value: function(g3, t2, A2) {
            void 0 !== t2 && (void 0 !== t2.locale ? this.options.locale = t2.locale : this.options.locale = A2.locale, void 0 !== t2.locales ? this.options.locales = t2.locales : this.options.locales = A2.locales), void 0 !== g3 && ("boolean" == typeof g3 ? this.options.enabled = g3 : (this.options.enabled = true, qf(this.options, g3)), true === this.options.initiallyActive && (this.editMode = true), this._setup());
          }
        }, {
          key: "toggleEditMode",
          value: function() {
            true === this.editMode ? this.disableEditMode() : this.enableEditMode();
          }
        }, {
          key: "enableEditMode",
          value: function() {
            this.editMode = true, this._clean(), true === this.guiEnabled && (this.manipulationDiv.style.display = "block", this.closeDiv.style.display = "block", this.editModeDiv.style.display = "none", this.showManipulatorToolbar());
          }
        }, {
          key: "disableEditMode",
          value: function() {
            this.editMode = false, this._clean(), true === this.guiEnabled && (this.manipulationDiv.style.display = "none", this.closeDiv.style.display = "none", this.editModeDiv.style.display = "block", this._createEditButton());
          }
        }, {
          key: "showManipulatorToolbar",
          value: function() {
            if (this._clean(), this.manipulationDOM = {}, true === this.guiEnabled) {
              var g3, t2;
              this.editMode = true, this.manipulationDiv.style.display = "block", this.closeDiv.style.display = "block";
              var A2 = this.selectionHandler.getSelectedNodeCount(), e2 = this.selectionHandler.getSelectedEdgeCount(), C2 = A2 + e2, I2 = this.options.locales[this.options.locale], i2 = false;
              false !== this.options.addNode && (this._createAddNodeButton(I2), i2 = true), false !== this.options.addEdge && (true === i2 ? this._createSeperator(1) : i2 = true, this._createAddEdgeButton(I2)), 1 === A2 && "function" == typeof this.options.editNode ? (true === i2 ? this._createSeperator(2) : i2 = true, this._createEditNodeButton(I2)) : 1 === e2 && 0 === A2 && false !== this.options.editEdge && (true === i2 ? this._createSeperator(3) : i2 = true, this._createEditEdgeButton(I2)), 0 !== C2 && (A2 > 0 && false !== this.options.deleteNode || 0 === A2 && false !== this.options.deleteEdge) && (true === i2 && this._createSeperator(4), this._createDeleteButton(I2)), this._bindElementEvents(this.closeDiv, je(g3 = this.toggleEditMode).call(g3, this)), this._temporaryBindEvent("select", je(t2 = this.showManipulatorToolbar).call(t2, this));
            }
            this.body.emitter.emit("_redraw");
          }
        }, {
          key: "addNodeMode",
          value: function() {
            var g3;
            if (true !== this.editMode && this.enableEditMode(), this._clean(), this.inMode = "addNode", true === this.guiEnabled) {
              var t2, A2 = this.options.locales[this.options.locale];
              this.manipulationDOM = {}, this._createBackButton(A2), this._createSeperator(), this._createDescription(A2.addDescription || this.options.locales.en.addDescription), this._bindElementEvents(this.closeDiv, je(t2 = this.toggleEditMode).call(t2, this));
            }
            this._temporaryBindEvent("click", je(g3 = this._performAddNode).call(g3, this));
          }
        }, {
          key: "editNode",
          value: function() {
            var g3 = this;
            true !== this.editMode && this.enableEditMode(), this._clean();
            var t2 = this.selectionHandler.getSelectedNodes()[0];
            if (void 0 !== t2) {
              if (this.inMode = "editNode", "function" != typeof this.options.editNode) throw new Error("No function has been configured to handle the editing of nodes.");
              if (true !== t2.isCluster) {
                var A2 = qf({}, t2.options, false);
                if (A2.x = t2.x, A2.y = t2.y, 2 !== this.options.editNode.length) throw new Error("The function for edit does not support two arguments (data, callback)");
                this.options.editNode(A2, function(t3) {
                  null != t3 && "editNode" === g3.inMode && g3.body.data.nodes.getDataSet().update(t3), g3.showManipulatorToolbar();
                });
              } else alert(this.options.locales[this.options.locale].editClusterError || this.options.locales.en.editClusterError);
            } else this.showManipulatorToolbar();
          }
        }, {
          key: "addEdgeMode",
          value: function() {
            var g3, t2, A2, e2, C2;
            if (true !== this.editMode && this.enableEditMode(), this._clean(), this.inMode = "addEdge", true === this.guiEnabled) {
              var I2, i2 = this.options.locales[this.options.locale];
              this.manipulationDOM = {}, this._createBackButton(i2), this._createSeperator(), this._createDescription(i2.edgeDescription || this.options.locales.en.edgeDescription), this._bindElementEvents(this.closeDiv, je(I2 = this.toggleEditMode).call(I2, this));
            }
            this._temporaryBindUI("onTouch", je(g3 = this._handleConnect).call(g3, this)), this._temporaryBindUI("onDragEnd", je(t2 = this._finishConnect).call(t2, this)), this._temporaryBindUI("onDrag", je(A2 = this._dragControlNode).call(A2, this)), this._temporaryBindUI("onRelease", je(e2 = this._finishConnect).call(e2, this)), this._temporaryBindUI("onDragStart", je(C2 = this._dragStartEdge).call(C2, this)), this._temporaryBindUI("onHold", function() {
            });
          }
        }, {
          key: "editEdgeMode",
          value: function() {
            if (true !== this.editMode && this.enableEditMode(), this._clean(), this.inMode = "editEdge", "object" !== yd(this.options.editEdge) || "function" != typeof this.options.editEdge.editWithoutDrag || (this.edgeBeingEditedId = this.selectionHandler.getSelectedEdgeIds()[0], void 0 === this.edgeBeingEditedId)) {
              if (true === this.guiEnabled) {
                var g3, t2 = this.options.locales[this.options.locale];
                this.manipulationDOM = {}, this._createBackButton(t2), this._createSeperator(), this._createDescription(t2.editEdgeDescription || this.options.locales.en.editEdgeDescription), this._bindElementEvents(this.closeDiv, je(g3 = this.toggleEditMode).call(g3, this));
              }
              if (this.edgeBeingEditedId = this.selectionHandler.getSelectedEdgeIds()[0], void 0 !== this.edgeBeingEditedId) {
                var A2, e2, C2, I2, i2 = this.body.edges[this.edgeBeingEditedId], o2 = this._getNewTargetNode(i2.from.x, i2.from.y), n2 = this._getNewTargetNode(i2.to.x, i2.to.y);
                this.temporaryIds.nodes.push(o2.id), this.temporaryIds.nodes.push(n2.id), this.body.nodes[o2.id] = o2, this.body.nodeIndices.push(o2.id), this.body.nodes[n2.id] = n2, this.body.nodeIndices.push(n2.id), this._temporaryBindUI("onTouch", je(A2 = this._controlNodeTouch).call(A2, this)), this._temporaryBindUI("onTap", function() {
                }), this._temporaryBindUI("onHold", function() {
                }), this._temporaryBindUI("onDragStart", je(e2 = this._controlNodeDragStart).call(e2, this)), this._temporaryBindUI("onDrag", je(C2 = this._controlNodeDrag).call(C2, this)), this._temporaryBindUI("onDragEnd", je(I2 = this._controlNodeDragEnd).call(I2, this)), this._temporaryBindUI("onMouseMove", function() {
                }), this._temporaryBindEvent("beforeDrawing", function(g4) {
                  var t3 = i2.edgeType.findBorderPositions(g4);
                  false === o2.selected && (o2.x = t3.from.x, o2.y = t3.from.y), false === n2.selected && (n2.x = t3.to.x, n2.y = t3.to.y);
                }), this.body.emitter.emit("_redraw");
              } else this.showManipulatorToolbar();
            } else {
              var r2 = this.body.edges[this.edgeBeingEditedId];
              this._performEditEdge(r2.from.id, r2.to.id);
            }
          }
        }, {
          key: "deleteSelected",
          value: function() {
            var g3 = this;
            true !== this.editMode && this.enableEditMode(), this._clean(), this.inMode = "delete";
            var t2 = this.selectionHandler.getSelectedNodeIds(), A2 = this.selectionHandler.getSelectedEdgeIds(), e2 = void 0;
            if (t2.length > 0) {
              for (var C2 = 0; C2 < t2.length; C2++) if (true === this.body.nodes[t2[C2]].isCluster) return void alert(this.options.locales[this.options.locale].deleteClusterError || this.options.locales.en.deleteClusterError);
              "function" == typeof this.options.deleteNode && (e2 = this.options.deleteNode);
            } else A2.length > 0 && "function" == typeof this.options.deleteEdge && (e2 = this.options.deleteEdge);
            if ("function" == typeof e2) {
              var I2 = {
                nodes: t2,
                edges: A2
              };
              if (2 !== e2.length) throw new Error("The function for delete does not support two arguments (data, callback)");
              e2(I2, function(t3) {
                null != t3 && "delete" === g3.inMode ? (g3.body.data.edges.getDataSet().remove(t3.edges), g3.body.data.nodes.getDataSet().remove(t3.nodes), g3.body.emitter.emit("startSimulation"), g3.showManipulatorToolbar()) : (g3.body.emitter.emit("startSimulation"), g3.showManipulatorToolbar());
              });
            } else this.body.data.edges.getDataSet().remove(A2), this.body.data.nodes.getDataSet().remove(t2), this.body.emitter.emit("startSimulation"), this.showManipulatorToolbar();
          }
        }, {
          key: "_setup",
          value: function() {
            true === this.options.enabled ? (this.guiEnabled = true, this._createWrappers(), false === this.editMode ? this._createEditButton() : this.showManipulatorToolbar()) : (this._removeManipulationDOM(), this.guiEnabled = false);
          }
        }, {
          key: "_createWrappers",
          value: function() {
            var g3, t2;
            (void 0 === this.manipulationDiv && (this.manipulationDiv = document.createElement("div"), this.manipulationDiv.className = "vis-manipulation", true === this.editMode ? this.manipulationDiv.style.display = "block" : this.manipulationDiv.style.display = "none", this.canvas.frame.appendChild(this.manipulationDiv)), void 0 === this.editModeDiv && (this.editModeDiv = document.createElement("div"), this.editModeDiv.className = "vis-edit-mode", true === this.editMode ? this.editModeDiv.style.display = "none" : this.editModeDiv.style.display = "block", this.canvas.frame.appendChild(this.editModeDiv)), void 0 === this.closeDiv) && (this.closeDiv = document.createElement("button"), this.closeDiv.className = "vis-close", this.closeDiv.setAttribute("aria-label", null !== (g3 = null === (t2 = this.options.locales[this.options.locale]) || void 0 === t2 ? void 0 : t2.close) && void 0 !== g3 ? g3 : this.options.locales.en.close), this.closeDiv.style.display = this.manipulationDiv.style.display, this.canvas.frame.appendChild(this.closeDiv));
          }
        }, {
          key: "_getNewTargetNode",
          value: function(g3, t2) {
            var A2 = qf({}, this.options.controlNodeStyle);
            A2.id = "targetNode" + rD(), A2.hidden = false, A2.physics = false, A2.x = g3, A2.y = t2;
            var e2 = this.body.functions.createNode(A2);
            return e2.shape.boundingBox = {
              left: g3,
              right: g3,
              top: t2,
              bottom: t2
            }, e2;
          }
        }, {
          key: "_createEditButton",
          value: function() {
            var g3;
            this._clean(), this.manipulationDOM = {}, Qf(this.editModeDiv);
            var t2 = this.options.locales[this.options.locale], A2 = this._createButton("editMode", "vis-edit vis-edit-mode", t2.edit || this.options.locales.en.edit);
            this.editModeDiv.appendChild(A2), this._bindElementEvents(A2, je(g3 = this.toggleEditMode).call(g3, this));
          }
        }, {
          key: "_clean",
          value: function() {
            this.inMode = false, true === this.guiEnabled && (Qf(this.editModeDiv), Qf(this.manipulationDiv), this._cleanupDOMEventListeners()), this._cleanupTemporaryNodesAndEdges(), this._unbindTemporaryUIs(), this._unbindTemporaryEvents(), this.body.emitter.emit("restorePhysics");
          }
        }, {
          key: "_cleanupDOMEventListeners",
          value: function() {
            var g3, t2, A2 = FM(Zl(g3 = this._domEventListenerCleanupQueue).call(g3, 0));
            try {
              for (A2.s(); !(t2 = A2.n()).done; ) {
                (0, t2.value)();
              }
            } catch (g4) {
              A2.e(g4);
            } finally {
              A2.f();
            }
          }
        }, {
          key: "_removeManipulationDOM",
          value: function() {
            this._clean(), Qf(this.manipulationDiv), Qf(this.editModeDiv), Qf(this.closeDiv), this.manipulationDiv && this.canvas.frame.removeChild(this.manipulationDiv), this.editModeDiv && this.canvas.frame.removeChild(this.editModeDiv), this.closeDiv && this.canvas.frame.removeChild(this.closeDiv), this.manipulationDiv = void 0, this.editModeDiv = void 0, this.closeDiv = void 0;
          }
        }, {
          key: "_createSeperator",
          value: function() {
            var g3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            this.manipulationDOM["seperatorLineDiv" + g3] = document.createElement("div"), this.manipulationDOM["seperatorLineDiv" + g3].className = "vis-separator-line", this.manipulationDiv.appendChild(this.manipulationDOM["seperatorLineDiv" + g3]);
          }
        }, {
          key: "_createAddNodeButton",
          value: function(g3) {
            var t2, A2 = this._createButton("addNode", "vis-add", g3.addNode || this.options.locales.en.addNode);
            this.manipulationDiv.appendChild(A2), this._bindElementEvents(A2, je(t2 = this.addNodeMode).call(t2, this));
          }
        }, {
          key: "_createAddEdgeButton",
          value: function(g3) {
            var t2, A2 = this._createButton("addEdge", "vis-connect", g3.addEdge || this.options.locales.en.addEdge);
            this.manipulationDiv.appendChild(A2), this._bindElementEvents(A2, je(t2 = this.addEdgeMode).call(t2, this));
          }
        }, {
          key: "_createEditNodeButton",
          value: function(g3) {
            var t2, A2 = this._createButton("editNode", "vis-edit", g3.editNode || this.options.locales.en.editNode);
            this.manipulationDiv.appendChild(A2), this._bindElementEvents(A2, je(t2 = this.editNode).call(t2, this));
          }
        }, {
          key: "_createEditEdgeButton",
          value: function(g3) {
            var t2, A2 = this._createButton("editEdge", "vis-edit", g3.editEdge || this.options.locales.en.editEdge);
            this.manipulationDiv.appendChild(A2), this._bindElementEvents(A2, je(t2 = this.editEdgeMode).call(t2, this));
          }
        }, {
          key: "_createDeleteButton",
          value: function(g3) {
            var t2, A2;
            A2 = this.options.rtl ? "vis-delete-rtl" : "vis-delete";
            var e2 = this._createButton("delete", A2, g3.del || this.options.locales.en.del);
            this.manipulationDiv.appendChild(e2), this._bindElementEvents(e2, je(t2 = this.deleteSelected).call(t2, this));
          }
        }, {
          key: "_createBackButton",
          value: function(g3) {
            var t2, A2 = this._createButton("back", "vis-back", g3.back || this.options.locales.en.back);
            this.manipulationDiv.appendChild(A2), this._bindElementEvents(A2, je(t2 = this.showManipulatorToolbar).call(t2, this));
          }
        }, {
          key: "_createButton",
          value: function(g3, t2, A2) {
            var e2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vis-label";
            return this.manipulationDOM[g3 + "Div"] = document.createElement("button"), this.manipulationDOM[g3 + "Div"].className = "vis-button " + t2, this.manipulationDOM[g3 + "Label"] = document.createElement("div"), this.manipulationDOM[g3 + "Label"].className = e2, this.manipulationDOM[g3 + "Label"].innerText = A2, this.manipulationDOM[g3 + "Div"].appendChild(this.manipulationDOM[g3 + "Label"]), this.manipulationDOM[g3 + "Div"];
          }
        }, {
          key: "_createDescription",
          value: function(g3) {
            this.manipulationDOM.descriptionLabel = document.createElement("div"), this.manipulationDOM.descriptionLabel.className = "vis-none", this.manipulationDOM.descriptionLabel.innerText = g3, this.manipulationDiv.appendChild(this.manipulationDOM.descriptionLabel);
          }
        }, {
          key: "_temporaryBindEvent",
          value: function(g3, t2) {
            this.temporaryEventFunctions.push({
              event: g3,
              boundFunction: t2
            }), this.body.emitter.on(g3, t2);
          }
        }, {
          key: "_temporaryBindUI",
          value: function(g3, t2) {
            if (void 0 === this.body.eventListeners[g3]) throw new Error("This UI function does not exist. Typo? You tried: " + g3 + " possible are: " + eu(Lh(this.body.eventListeners)));
            this.temporaryUIFunctions[g3] = this.body.eventListeners[g3], this.body.eventListeners[g3] = t2;
          }
        }, {
          key: "_unbindTemporaryUIs",
          value: function() {
            for (var g3 in this.temporaryUIFunctions) Object.prototype.hasOwnProperty.call(this.temporaryUIFunctions, g3) && (this.body.eventListeners[g3] = this.temporaryUIFunctions[g3], delete this.temporaryUIFunctions[g3]);
            this.temporaryUIFunctions = {};
          }
        }, {
          key: "_unbindTemporaryEvents",
          value: function() {
            for (var g3 = 0; g3 < this.temporaryEventFunctions.length; g3++) {
              var t2 = this.temporaryEventFunctions[g3].event, A2 = this.temporaryEventFunctions[g3].boundFunction;
              this.body.emitter.off(t2, A2);
            }
            this.temporaryEventFunctions = [];
          }
        }, {
          key: "_bindElementEvents",
          value: function(g3, t2) {
            var A2 = new Ev(g3, {});
            AP(A2, t2), this._domEventListenerCleanupQueue.push(function() {
              A2.destroy();
            });
            var e2 = function(g4) {
              var A3 = g4.keyCode, e3 = g4.key;
              "Enter" !== e3 && " " !== e3 && 13 !== A3 && 32 !== A3 || t2();
            };
            g3.addEventListener("keyup", e2, false), this._domEventListenerCleanupQueue.push(function() {
              g3.removeEventListener("keyup", e2, false);
            });
          }
        }, {
          key: "_cleanupTemporaryNodesAndEdges",
          value: function() {
            for (var g3 = 0; g3 < this.temporaryIds.edges.length; g3++) {
              var t2;
              this.body.edges[this.temporaryIds.edges[g3]].disconnect(), delete this.body.edges[this.temporaryIds.edges[g3]];
              var A2, e2 = Xc(t2 = this.body.edgeIndices).call(t2, this.temporaryIds.edges[g3]);
              if (-1 !== e2) Zl(A2 = this.body.edgeIndices).call(A2, e2, 1);
            }
            for (var C2 = 0; C2 < this.temporaryIds.nodes.length; C2++) {
              var I2;
              delete this.body.nodes[this.temporaryIds.nodes[C2]];
              var i2, o2 = Xc(I2 = this.body.nodeIndices).call(I2, this.temporaryIds.nodes[C2]);
              if (-1 !== o2) Zl(i2 = this.body.nodeIndices).call(i2, o2, 1);
            }
            this.temporaryIds = {
              nodes: [],
              edges: []
            };
          }
        }, {
          key: "_controlNodeTouch",
          value: function(g3) {
            this.selectionHandler.unselectAll(), this.lastTouch = this.body.functions.getPointer(g3.center), this.lastTouch.translation = fe({}, this.body.view.translation);
          }
        }, {
          key: "_controlNodeDragStart",
          value: function() {
            var g3 = this.lastTouch, t2 = this.selectionHandler._pointerToPositionObject(g3), A2 = this.body.nodes[this.temporaryIds.nodes[0]], e2 = this.body.nodes[this.temporaryIds.nodes[1]], C2 = this.body.edges[this.edgeBeingEditedId];
            this.selectedControlNode = void 0;
            var I2 = A2.isOverlappingWith(t2), i2 = e2.isOverlappingWith(t2);
            true === I2 ? (this.selectedControlNode = A2, C2.edgeType.from = A2) : true === i2 && (this.selectedControlNode = e2, C2.edgeType.to = e2), void 0 !== this.selectedControlNode && this.selectionHandler.selectObject(this.selectedControlNode), this.body.emitter.emit("_redraw");
          }
        }, {
          key: "_controlNodeDrag",
          value: function(g3) {
            this.body.emitter.emit("disablePhysics");
            var t2 = this.body.functions.getPointer(g3.center), A2 = this.canvas.DOMtoCanvas(t2);
            void 0 !== this.selectedControlNode ? (this.selectedControlNode.x = A2.x, this.selectedControlNode.y = A2.y) : this.interactionHandler.onDrag(g3), this.body.emitter.emit("_redraw");
          }
        }, {
          key: "_controlNodeDragEnd",
          value: function(g3) {
            var t2 = this.body.functions.getPointer(g3.center), A2 = this.selectionHandler._pointerToPositionObject(t2), e2 = this.body.edges[this.edgeBeingEditedId];
            if (void 0 !== this.selectedControlNode) {
              this.selectionHandler.unselectAll();
              for (var C2 = this.selectionHandler._getAllNodesOverlappingWith(A2), I2 = void 0, i2 = C2.length - 1; i2 >= 0; i2--) if (C2[i2] !== this.selectedControlNode.id) {
                I2 = this.body.nodes[C2[i2]];
                break;
              }
              if (void 0 !== I2 && void 0 !== this.selectedControlNode) {
                if (true === I2.isCluster) alert(this.options.locales[this.options.locale].createEdgeError || this.options.locales.en.createEdgeError);
                else {
                  var o2 = this.body.nodes[this.temporaryIds.nodes[0]];
                  this.selectedControlNode.id === o2.id ? this._performEditEdge(I2.id, e2.to.id) : this._performEditEdge(e2.from.id, I2.id);
                }
              } else e2.updateEdgeType(), this.body.emitter.emit("restorePhysics");
              this.body.emitter.emit("_redraw");
            }
          }
        }, {
          key: "_handleConnect",
          value: function(g3) {
            if ((/* @__PURE__ */ new Date()).valueOf() - this.touchTime > 100) {
              this.lastTouch = this.body.functions.getPointer(g3.center), this.lastTouch.translation = fe({}, this.body.view.translation), this.interactionHandler.drag.pointer = this.lastTouch, this.interactionHandler.drag.translation = this.lastTouch.translation;
              var t2 = this.lastTouch, A2 = this.selectionHandler.getNodeAt(t2);
              if (void 0 !== A2) if (true === A2.isCluster) alert(this.options.locales[this.options.locale].createEdgeError || this.options.locales.en.createEdgeError);
              else {
                var e2 = this._getNewTargetNode(A2.x, A2.y);
                this.body.nodes[e2.id] = e2, this.body.nodeIndices.push(e2.id);
                var C2 = this.body.functions.createEdge({
                  id: "connectionEdge" + rD(),
                  from: A2.id,
                  to: e2.id,
                  physics: false,
                  smooth: {
                    enabled: true,
                    type: "continuous",
                    roundness: 0.5
                  }
                });
                this.body.edges[C2.id] = C2, this.body.edgeIndices.push(C2.id), this.temporaryIds.nodes.push(e2.id), this.temporaryIds.edges.push(C2.id);
              }
              this.touchTime = (/* @__PURE__ */ new Date()).valueOf();
            }
          }
        }, {
          key: "_dragControlNode",
          value: function(g3) {
            var t2 = this.body.functions.getPointer(g3.center), A2 = this.selectionHandler._pointerToPositionObject(t2), e2 = void 0;
            void 0 !== this.temporaryIds.edges[0] && (e2 = this.body.edges[this.temporaryIds.edges[0]].fromId);
            for (var C2 = this.selectionHandler._getAllNodesOverlappingWith(A2), I2 = void 0, i2 = C2.length - 1; i2 >= 0; i2--) {
              var o2;
              if (-1 === Xc(o2 = this.temporaryIds.nodes).call(o2, C2[i2])) {
                I2 = this.body.nodes[C2[i2]];
                break;
              }
            }
            if (g3.controlEdge = {
              from: e2,
              to: I2 ? I2.id : void 0
            }, this.selectionHandler.generateClickEvent("controlNodeDragging", g3, t2), void 0 !== this.temporaryIds.nodes[0]) {
              var n2 = this.body.nodes[this.temporaryIds.nodes[0]];
              n2.x = this.canvas._XconvertDOMtoCanvas(t2.x), n2.y = this.canvas._YconvertDOMtoCanvas(t2.y), this.body.emitter.emit("_redraw");
            } else this.interactionHandler.onDrag(g3);
          }
        }, {
          key: "_finishConnect",
          value: function(g3) {
            var t2 = this.body.functions.getPointer(g3.center), A2 = this.selectionHandler._pointerToPositionObject(t2), e2 = void 0;
            void 0 !== this.temporaryIds.edges[0] && (e2 = this.body.edges[this.temporaryIds.edges[0]].fromId);
            for (var C2 = this.selectionHandler._getAllNodesOverlappingWith(A2), I2 = void 0, i2 = C2.length - 1; i2 >= 0; i2--) {
              var o2;
              if (-1 === Xc(o2 = this.temporaryIds.nodes).call(o2, C2[i2])) {
                I2 = this.body.nodes[C2[i2]];
                break;
              }
            }
            this._cleanupTemporaryNodesAndEdges(), void 0 !== I2 && (true === I2.isCluster ? alert(this.options.locales[this.options.locale].createEdgeError || this.options.locales.en.createEdgeError) : void 0 !== this.body.nodes[e2] && void 0 !== this.body.nodes[I2.id] && this._performAddEdge(e2, I2.id)), g3.controlEdge = {
              from: e2,
              to: I2 ? I2.id : void 0
            }, this.selectionHandler.generateClickEvent("controlNodeDragEnd", g3, t2), this.body.emitter.emit("_redraw");
          }
        }, {
          key: "_dragStartEdge",
          value: function(g3) {
            var t2 = this.lastTouch;
            this.selectionHandler.generateClickEvent("dragStart", g3, t2, void 0, true);
          }
        }, {
          key: "_performAddNode",
          value: function(g3) {
            var t2 = this, A2 = {
              id: rD(),
              x: g3.pointer.canvas.x,
              y: g3.pointer.canvas.y,
              label: "new"
            };
            if ("function" == typeof this.options.addNode) {
              if (2 !== this.options.addNode.length) throw this.showManipulatorToolbar(), new Error("The function for add does not support two arguments (data,callback)");
              this.options.addNode(A2, function(g4) {
                null != g4 && "addNode" === t2.inMode && t2.body.data.nodes.getDataSet().add(g4), t2.showManipulatorToolbar();
              });
            } else this.body.data.nodes.getDataSet().add(A2), this.showManipulatorToolbar();
          }
        }, {
          key: "_performAddEdge",
          value: function(g3, t2) {
            var A2 = this, e2 = {
              from: g3,
              to: t2
            };
            if ("function" == typeof this.options.addEdge) {
              if (2 !== this.options.addEdge.length) throw new Error("The function for connect does not support two arguments (data,callback)");
              this.options.addEdge(e2, function(g4) {
                null != g4 && "addEdge" === A2.inMode && (A2.body.data.edges.getDataSet().add(g4), A2.selectionHandler.unselectAll(), A2.showManipulatorToolbar());
              });
            } else this.body.data.edges.getDataSet().add(e2), this.selectionHandler.unselectAll(), this.showManipulatorToolbar();
          }
        }, {
          key: "_performEditEdge",
          value: function(g3, t2) {
            var A2 = this, e2 = {
              id: this.edgeBeingEditedId,
              from: g3,
              to: t2,
              label: this.body.data.edges.get(this.edgeBeingEditedId).label
            }, C2 = this.options.editEdge;
            if ("object" === yd(C2) && (C2 = C2.editWithoutDrag), "function" == typeof C2) {
              if (2 !== C2.length) throw new Error("The function for edit does not support two arguments (data, callback)");
              C2(e2, function(g4) {
                null == g4 || "editEdge" !== A2.inMode ? (A2.body.edges[e2.id].updateEdgeType(), A2.body.emitter.emit("_redraw"), A2.showManipulatorToolbar()) : (A2.body.data.edges.getDataSet().update(g4), A2.selectionHandler.unselectAll(), A2.showManipulatorToolbar());
              });
            } else this.body.data.edges.getDataSet().update(e2), this.selectionHandler.unselectAll(), this.showManipulatorToolbar();
          }
        }]), g2;
      }(), LM = "string", VM = "boolean", YM = "number", WM = "array", QM = "object", UM = ["arrow", "bar", "box", "circle", "crow", "curve", "diamond", "image", "inv_curve", "inv_triangle", "triangle", "vee"], _M = {
        borderWidth: {
          number: YM
        },
        borderWidthSelected: {
          number: YM,
          undefined: "undefined"
        },
        brokenImage: {
          string: LM,
          undefined: "undefined"
        },
        chosen: {
          label: {
            boolean: VM,
            function: "function"
          },
          node: {
            boolean: VM,
            function: "function"
          },
          __type__: {
            object: QM,
            boolean: VM
          }
        },
        color: {
          border: {
            string: LM
          },
          background: {
            string: LM
          },
          highlight: {
            border: {
              string: LM
            },
            background: {
              string: LM
            },
            __type__: {
              object: QM,
              string: LM
            }
          },
          hover: {
            border: {
              string: LM
            },
            background: {
              string: LM
            },
            __type__: {
              object: QM,
              string: LM
            }
          },
          __type__: {
            object: QM,
            string: LM
          }
        },
        opacity: {
          number: YM,
          undefined: "undefined"
        },
        fixed: {
          x: {
            boolean: VM
          },
          y: {
            boolean: VM
          },
          __type__: {
            object: QM,
            boolean: VM
          }
        },
        font: {
          align: {
            string: LM
          },
          color: {
            string: LM
          },
          size: {
            number: YM
          },
          face: {
            string: LM
          },
          background: {
            string: LM
          },
          strokeWidth: {
            number: YM
          },
          strokeColor: {
            string: LM
          },
          vadjust: {
            number: YM
          },
          multi: {
            boolean: VM,
            string: LM
          },
          bold: {
            color: {
              string: LM
            },
            size: {
              number: YM
            },
            face: {
              string: LM
            },
            mod: {
              string: LM
            },
            vadjust: {
              number: YM
            },
            __type__: {
              object: QM,
              string: LM
            }
          },
          boldital: {
            color: {
              string: LM
            },
            size: {
              number: YM
            },
            face: {
              string: LM
            },
            mod: {
              string: LM
            },
            vadjust: {
              number: YM
            },
            __type__: {
              object: QM,
              string: LM
            }
          },
          ital: {
            color: {
              string: LM
            },
            size: {
              number: YM
            },
            face: {
              string: LM
            },
            mod: {
              string: LM
            },
            vadjust: {
              number: YM
            },
            __type__: {
              object: QM,
              string: LM
            }
          },
          mono: {
            color: {
              string: LM
            },
            size: {
              number: YM
            },
            face: {
              string: LM
            },
            mod: {
              string: LM
            },
            vadjust: {
              number: YM
            },
            __type__: {
              object: QM,
              string: LM
            }
          },
          __type__: {
            object: QM,
            string: LM
          }
        },
        group: {
          string: LM,
          number: YM,
          undefined: "undefined"
        },
        heightConstraint: {
          minimum: {
            number: YM
          },
          valign: {
            string: LM
          },
          __type__: {
            object: QM,
            boolean: VM,
            number: YM
          }
        },
        hidden: {
          boolean: VM
        },
        icon: {
          face: {
            string: LM
          },
          code: {
            string: LM
          },
          size: {
            number: YM
          },
          color: {
            string: LM
          },
          weight: {
            string: LM,
            number: YM
          },
          __type__: {
            object: QM
          }
        },
        id: {
          string: LM,
          number: YM
        },
        image: {
          selected: {
            string: LM,
            undefined: "undefined"
          },
          unselected: {
            string: LM,
            undefined: "undefined"
          },
          __type__: {
            object: QM,
            string: LM
          }
        },
        imagePadding: {
          top: {
            number: YM
          },
          right: {
            number: YM
          },
          bottom: {
            number: YM
          },
          left: {
            number: YM
          },
          __type__: {
            object: QM,
            number: YM
          }
        },
        label: {
          string: LM,
          undefined: "undefined"
        },
        labelHighlightBold: {
          boolean: VM
        },
        level: {
          number: YM,
          undefined: "undefined"
        },
        margin: {
          top: {
            number: YM
          },
          right: {
            number: YM
          },
          bottom: {
            number: YM
          },
          left: {
            number: YM
          },
          __type__: {
            object: QM,
            number: YM
          }
        },
        mass: {
          number: YM
        },
        physics: {
          boolean: VM
        },
        scaling: {
          min: {
            number: YM
          },
          max: {
            number: YM
          },
          label: {
            enabled: {
              boolean: VM
            },
            min: {
              number: YM
            },
            max: {
              number: YM
            },
            maxVisible: {
              number: YM
            },
            drawThreshold: {
              number: YM
            },
            __type__: {
              object: QM,
              boolean: VM
            }
          },
          customScalingFunction: {
            function: "function"
          },
          __type__: {
            object: QM
          }
        },
        shadow: {
          enabled: {
            boolean: VM
          },
          color: {
            string: LM
          },
          size: {
            number: YM
          },
          x: {
            number: YM
          },
          y: {
            number: YM
          },
          __type__: {
            object: QM,
            boolean: VM
          }
        },
        shape: {
          string: ["custom", "ellipse", "circle", "database", "box", "text", "image", "circularImage", "diamond", "dot", "star", "triangle", "triangleDown", "square", "icon", "hexagon"]
        },
        ctxRenderer: {
          function: "function"
        },
        shapeProperties: {
          borderDashes: {
            boolean: VM,
            array: WM
          },
          borderRadius: {
            number: YM
          },
          interpolation: {
            boolean: VM
          },
          useImageSize: {
            boolean: VM
          },
          useBorderWithImage: {
            boolean: VM
          },
          coordinateOrigin: {
            string: ["center", "top-left"]
          },
          __type__: {
            object: QM
          }
        },
        size: {
          number: YM
        },
        title: {
          string: LM,
          dom: "dom",
          undefined: "undefined"
        },
        value: {
          number: YM,
          undefined: "undefined"
        },
        widthConstraint: {
          minimum: {
            number: YM
          },
          maximum: {
            number: YM
          },
          __type__: {
            object: QM,
            boolean: VM,
            number: YM
          }
        },
        x: {
          number: YM
        },
        y: {
          number: YM
        },
        __type__: {
          object: QM
        }
      }, KM = {
        configure: {
          enabled: {
            boolean: VM
          },
          filter: {
            boolean: VM,
            string: LM,
            array: WM,
            function: "function"
          },
          container: {
            dom: "dom"
          },
          showButton: {
            boolean: VM
          },
          __type__: {
            object: QM,
            boolean: VM,
            string: LM,
            array: WM,
            function: "function"
          }
        },
        edges: {
          arrows: {
            to: {
              enabled: {
                boolean: VM
              },
              scaleFactor: {
                number: YM
              },
              type: {
                string: UM
              },
              imageHeight: {
                number: YM
              },
              imageWidth: {
                number: YM
              },
              src: {
                string: LM
              },
              __type__: {
                object: QM,
                boolean: VM
              }
            },
            middle: {
              enabled: {
                boolean: VM
              },
              scaleFactor: {
                number: YM
              },
              type: {
                string: UM
              },
              imageWidth: {
                number: YM
              },
              imageHeight: {
                number: YM
              },
              src: {
                string: LM
              },
              __type__: {
                object: QM,
                boolean: VM
              }
            },
            from: {
              enabled: {
                boolean: VM
              },
              scaleFactor: {
                number: YM
              },
              type: {
                string: UM
              },
              imageWidth: {
                number: YM
              },
              imageHeight: {
                number: YM
              },
              src: {
                string: LM
              },
              __type__: {
                object: QM,
                boolean: VM
              }
            },
            __type__: {
              string: ["from", "to", "middle"],
              object: QM
            }
          },
          endPointOffset: {
            from: {
              number: YM
            },
            to: {
              number: YM
            },
            __type__: {
              object: QM,
              number: YM
            }
          },
          arrowStrikethrough: {
            boolean: VM
          },
          background: {
            enabled: {
              boolean: VM
            },
            color: {
              string: LM
            },
            size: {
              number: YM
            },
            dashes: {
              boolean: VM,
              array: WM
            },
            __type__: {
              object: QM,
              boolean: VM
            }
          },
          chosen: {
            label: {
              boolean: VM,
              function: "function"
            },
            edge: {
              boolean: VM,
              function: "function"
            },
            __type__: {
              object: QM,
              boolean: VM
            }
          },
          color: {
            color: {
              string: LM
            },
            highlight: {
              string: LM
            },
            hover: {
              string: LM
            },
            inherit: {
              string: ["from", "to", "both"],
              boolean: VM
            },
            opacity: {
              number: YM
            },
            __type__: {
              object: QM,
              string: LM
            }
          },
          dashes: {
            boolean: VM,
            array: WM
          },
          font: {
            color: {
              string: LM
            },
            size: {
              number: YM
            },
            face: {
              string: LM
            },
            background: {
              string: LM
            },
            strokeWidth: {
              number: YM
            },
            strokeColor: {
              string: LM
            },
            align: {
              string: ["horizontal", "top", "middle", "bottom"]
            },
            vadjust: {
              number: YM
            },
            multi: {
              boolean: VM,
              string: LM
            },
            bold: {
              color: {
                string: LM
              },
              size: {
                number: YM
              },
              face: {
                string: LM
              },
              mod: {
                string: LM
              },
              vadjust: {
                number: YM
              },
              __type__: {
                object: QM,
                string: LM
              }
            },
            boldital: {
              color: {
                string: LM
              },
              size: {
                number: YM
              },
              face: {
                string: LM
              },
              mod: {
                string: LM
              },
              vadjust: {
                number: YM
              },
              __type__: {
                object: QM,
                string: LM
              }
            },
            ital: {
              color: {
                string: LM
              },
              size: {
                number: YM
              },
              face: {
                string: LM
              },
              mod: {
                string: LM
              },
              vadjust: {
                number: YM
              },
              __type__: {
                object: QM,
                string: LM
              }
            },
            mono: {
              color: {
                string: LM
              },
              size: {
                number: YM
              },
              face: {
                string: LM
              },
              mod: {
                string: LM
              },
              vadjust: {
                number: YM
              },
              __type__: {
                object: QM,
                string: LM
              }
            },
            __type__: {
              object: QM,
              string: LM
            }
          },
          hidden: {
            boolean: VM
          },
          hoverWidth: {
            function: "function",
            number: YM
          },
          label: {
            string: LM,
            undefined: "undefined"
          },
          labelHighlightBold: {
            boolean: VM
          },
          length: {
            number: YM,
            undefined: "undefined"
          },
          physics: {
            boolean: VM
          },
          scaling: {
            min: {
              number: YM
            },
            max: {
              number: YM
            },
            label: {
              enabled: {
                boolean: VM
              },
              min: {
                number: YM
              },
              max: {
                number: YM
              },
              maxVisible: {
                number: YM
              },
              drawThreshold: {
                number: YM
              },
              __type__: {
                object: QM,
                boolean: VM
              }
            },
            customScalingFunction: {
              function: "function"
            },
            __type__: {
              object: QM
            }
          },
          selectionWidth: {
            function: "function",
            number: YM
          },
          selfReferenceSize: {
            number: YM
          },
          selfReference: {
            size: {
              number: YM
            },
            angle: {
              number: YM
            },
            renderBehindTheNode: {
              boolean: VM
            },
            __type__: {
              object: QM
            }
          },
          shadow: {
            enabled: {
              boolean: VM
            },
            color: {
              string: LM
            },
            size: {
              number: YM
            },
            x: {
              number: YM
            },
            y: {
              number: YM
            },
            __type__: {
              object: QM,
              boolean: VM
            }
          },
          smooth: {
            enabled: {
              boolean: VM
            },
            type: {
              string: ["dynamic", "continuous", "discrete", "diagonalCross", "straightCross", "horizontal", "vertical", "curvedCW", "curvedCCW", "cubicBezier"]
            },
            roundness: {
              number: YM
            },
            forceDirection: {
              string: ["horizontal", "vertical", "none"],
              boolean: VM
            },
            __type__: {
              object: QM,
              boolean: VM
            }
          },
          title: {
            string: LM,
            undefined: "undefined"
          },
          width: {
            number: YM
          },
          widthConstraint: {
            maximum: {
              number: YM
            },
            __type__: {
              object: QM,
              boolean: VM,
              number: YM
            }
          },
          value: {
            number: YM,
            undefined: "undefined"
          },
          __type__: {
            object: QM
          }
        },
        groups: {
          useDefaultGroups: {
            boolean: VM
          },
          __any__: _M,
          __type__: {
            object: QM
          }
        },
        interaction: {
          dragNodes: {
            boolean: VM
          },
          dragView: {
            boolean: VM
          },
          hideEdgesOnDrag: {
            boolean: VM
          },
          hideEdgesOnZoom: {
            boolean: VM
          },
          hideNodesOnDrag: {
            boolean: VM
          },
          hover: {
            boolean: VM
          },
          keyboard: {
            enabled: {
              boolean: VM
            },
            speed: {
              x: {
                number: YM
              },
              y: {
                number: YM
              },
              zoom: {
                number: YM
              },
              __type__: {
                object: QM
              }
            },
            bindToWindow: {
              boolean: VM
            },
            autoFocus: {
              boolean: VM
            },
            __type__: {
              object: QM,
              boolean: VM
            }
          },
          multiselect: {
            boolean: VM
          },
          navigationButtons: {
            boolean: VM
          },
          selectable: {
            boolean: VM
          },
          selectConnectedEdges: {
            boolean: VM
          },
          hoverConnectedEdges: {
            boolean: VM
          },
          tooltipDelay: {
            number: YM
          },
          zoomView: {
            boolean: VM
          },
          zoomSpeed: {
            number: YM
          },
          __type__: {
            object: QM
          }
        },
        layout: {
          randomSeed: {
            undefined: "undefined",
            number: YM,
            string: LM
          },
          improvedLayout: {
            boolean: VM
          },
          clusterThreshold: {
            number: YM
          },
          hierarchical: {
            enabled: {
              boolean: VM
            },
            levelSeparation: {
              number: YM
            },
            nodeSpacing: {
              number: YM
            },
            treeSpacing: {
              number: YM
            },
            blockShifting: {
              boolean: VM
            },
            edgeMinimization: {
              boolean: VM
            },
            parentCentralization: {
              boolean: VM
            },
            direction: {
              string: ["UD", "DU", "LR", "RL"]
            },
            sortMethod: {
              string: ["hubsize", "directed"]
            },
            shakeTowards: {
              string: ["leaves", "roots"]
            },
            __type__: {
              object: QM,
              boolean: VM
            }
          },
          __type__: {
            object: QM
          }
        },
        manipulation: {
          enabled: {
            boolean: VM
          },
          initiallyActive: {
            boolean: VM
          },
          addNode: {
            boolean: VM,
            function: "function"
          },
          addEdge: {
            boolean: VM,
            function: "function"
          },
          editNode: {
            function: "function"
          },
          editEdge: {
            editWithoutDrag: {
              function: "function"
            },
            __type__: {
              object: QM,
              boolean: VM,
              function: "function"
            }
          },
          deleteNode: {
            boolean: VM,
            function: "function"
          },
          deleteEdge: {
            boolean: VM,
            function: "function"
          },
          controlNodeStyle: _M,
          __type__: {
            object: QM,
            boolean: VM
          }
        },
        nodes: _M,
        physics: {
          enabled: {
            boolean: VM
          },
          barnesHut: {
            theta: {
              number: YM
            },
            gravitationalConstant: {
              number: YM
            },
            centralGravity: {
              number: YM
            },
            springLength: {
              number: YM
            },
            springConstant: {
              number: YM
            },
            damping: {
              number: YM
            },
            avoidOverlap: {
              number: YM
            },
            __type__: {
              object: QM
            }
          },
          forceAtlas2Based: {
            theta: {
              number: YM
            },
            gravitationalConstant: {
              number: YM
            },
            centralGravity: {
              number: YM
            },
            springLength: {
              number: YM
            },
            springConstant: {
              number: YM
            },
            damping: {
              number: YM
            },
            avoidOverlap: {
              number: YM
            },
            __type__: {
              object: QM
            }
          },
          repulsion: {
            centralGravity: {
              number: YM
            },
            springLength: {
              number: YM
            },
            springConstant: {
              number: YM
            },
            nodeDistance: {
              number: YM
            },
            damping: {
              number: YM
            },
            __type__: {
              object: QM
            }
          },
          hierarchicalRepulsion: {
            centralGravity: {
              number: YM
            },
            springLength: {
              number: YM
            },
            springConstant: {
              number: YM
            },
            nodeDistance: {
              number: YM
            },
            damping: {
              number: YM
            },
            avoidOverlap: {
              number: YM
            },
            __type__: {
              object: QM
            }
          },
          maxVelocity: {
            number: YM
          },
          minVelocity: {
            number: YM
          },
          solver: {
            string: ["barnesHut", "repulsion", "hierarchicalRepulsion", "forceAtlas2Based"]
          },
          stabilization: {
            enabled: {
              boolean: VM
            },
            iterations: {
              number: YM
            },
            updateInterval: {
              number: YM
            },
            onlyDynamicEdges: {
              boolean: VM
            },
            fit: {
              boolean: VM
            },
            __type__: {
              object: QM,
              boolean: VM
            }
          },
          timestep: {
            number: YM
          },
          adaptiveTimestep: {
            boolean: VM
          },
          wind: {
            x: {
              number: YM
            },
            y: {
              number: YM
            },
            __type__: {
              object: QM
            }
          },
          __type__: {
            object: QM,
            boolean: VM
          }
        },
        autoResize: {
          boolean: VM
        },
        clickToUse: {
          boolean: VM
        },
        locale: {
          string: LM
        },
        locales: {
          __any__: {
            any: "any"
          },
          __type__: {
            object: QM
          }
        },
        height: {
          string: LM
        },
        width: {
          string: LM
        },
        __type__: {
          object: QM
        }
      }, HM = {
        nodes: {
          borderWidth: [1, 0, 10, 1],
          borderWidthSelected: [2, 0, 10, 1],
          color: {
            border: ["color", "#2B7CE9"],
            background: ["color", "#97C2FC"],
            highlight: {
              border: ["color", "#2B7CE9"],
              background: ["color", "#D2E5FF"]
            },
            hover: {
              border: ["color", "#2B7CE9"],
              background: ["color", "#D2E5FF"]
            }
          },
          opacity: [0, 0, 1, 0.1],
          fixed: {
            x: false,
            y: false
          },
          font: {
            color: ["color", "#343434"],
            size: [14, 0, 100, 1],
            face: ["arial", "verdana", "tahoma"],
            background: ["color", "none"],
            strokeWidth: [0, 0, 50, 1],
            strokeColor: ["color", "#ffffff"]
          },
          hidden: false,
          labelHighlightBold: true,
          physics: true,
          scaling: {
            min: [10, 0, 200, 1],
            max: [30, 0, 200, 1],
            label: {
              enabled: false,
              min: [14, 0, 200, 1],
              max: [30, 0, 200, 1],
              maxVisible: [30, 0, 200, 1],
              drawThreshold: [5, 0, 20, 1]
            }
          },
          shadow: {
            enabled: false,
            color: "rgba(0,0,0,0.5)",
            size: [10, 0, 20, 1],
            x: [5, -30, 30, 1],
            y: [5, -30, 30, 1]
          },
          shape: ["ellipse", "box", "circle", "database", "diamond", "dot", "square", "star", "text", "triangle", "triangleDown", "hexagon"],
          shapeProperties: {
            borderDashes: false,
            borderRadius: [6, 0, 20, 1],
            interpolation: true,
            useImageSize: false
          },
          size: [25, 0, 200, 1]
        },
        edges: {
          arrows: {
            to: {
              enabled: false,
              scaleFactor: [1, 0, 3, 0.05],
              type: "arrow"
            },
            middle: {
              enabled: false,
              scaleFactor: [1, 0, 3, 0.05],
              type: "arrow"
            },
            from: {
              enabled: false,
              scaleFactor: [1, 0, 3, 0.05],
              type: "arrow"
            }
          },
          endPointOffset: {
            from: [0, -10, 10, 1],
            to: [0, -10, 10, 1]
          },
          arrowStrikethrough: true,
          color: {
            color: ["color", "#848484"],
            highlight: ["color", "#848484"],
            hover: ["color", "#848484"],
            inherit: ["from", "to", "both", true, false],
            opacity: [1, 0, 1, 0.05]
          },
          dashes: false,
          font: {
            color: ["color", "#343434"],
            size: [14, 0, 100, 1],
            face: ["arial", "verdana", "tahoma"],
            background: ["color", "none"],
            strokeWidth: [2, 0, 50, 1],
            strokeColor: ["color", "#ffffff"],
            align: ["horizontal", "top", "middle", "bottom"]
          },
          hidden: false,
          hoverWidth: [1.5, 0, 5, 0.1],
          labelHighlightBold: true,
          physics: true,
          scaling: {
            min: [1, 0, 100, 1],
            max: [15, 0, 100, 1],
            label: {
              enabled: true,
              min: [14, 0, 200, 1],
              max: [30, 0, 200, 1],
              maxVisible: [30, 0, 200, 1],
              drawThreshold: [5, 0, 20, 1]
            }
          },
          selectionWidth: [1.5, 0, 5, 0.1],
          selfReferenceSize: [20, 0, 200, 1],
          selfReference: {
            size: [20, 0, 200, 1],
            angle: [Math.PI / 2, -6 * Math.PI, 6 * Math.PI, Math.PI / 8],
            renderBehindTheNode: true
          },
          shadow: {
            enabled: false,
            color: "rgba(0,0,0,0.5)",
            size: [10, 0, 20, 1],
            x: [5, -30, 30, 1],
            y: [5, -30, 30, 1]
          },
          smooth: {
            enabled: true,
            type: ["dynamic", "continuous", "discrete", "diagonalCross", "straightCross", "horizontal", "vertical", "curvedCW", "curvedCCW", "cubicBezier"],
            forceDirection: ["horizontal", "vertical", "none"],
            roundness: [0.5, 0, 1, 0.05]
          },
          width: [1, 0, 30, 1]
        },
        layout: {
          hierarchical: {
            enabled: false,
            levelSeparation: [150, 20, 500, 5],
            nodeSpacing: [100, 20, 500, 5],
            treeSpacing: [200, 20, 500, 5],
            blockShifting: true,
            edgeMinimization: true,
            parentCentralization: true,
            direction: ["UD", "DU", "LR", "RL"],
            sortMethod: ["hubsize", "directed"],
            shakeTowards: ["leaves", "roots"]
          }
        },
        interaction: {
          dragNodes: true,
          dragView: true,
          hideEdgesOnDrag: false,
          hideEdgesOnZoom: false,
          hideNodesOnDrag: false,
          hover: false,
          keyboard: {
            enabled: false,
            speed: {
              x: [10, 0, 40, 1],
              y: [10, 0, 40, 1],
              zoom: [0.02, 0, 0.1, 5e-3]
            },
            bindToWindow: true,
            autoFocus: true
          },
          multiselect: false,
          navigationButtons: false,
          selectable: true,
          selectConnectedEdges: true,
          hoverConnectedEdges: true,
          tooltipDelay: [300, 0, 1e3, 25],
          zoomView: true,
          zoomSpeed: [1, 0.1, 2, 0.1]
        },
        manipulation: {
          enabled: false,
          initiallyActive: false
        },
        physics: {
          enabled: true,
          barnesHut: {
            theta: [0.5, 0.1, 1, 0.05],
            gravitationalConstant: [-2e3, -3e4, 0, 50],
            centralGravity: [0.3, 0, 10, 0.05],
            springLength: [95, 0, 500, 5],
            springConstant: [0.04, 0, 1.2, 5e-3],
            damping: [0.09, 0, 1, 0.01],
            avoidOverlap: [0, 0, 1, 0.01]
          },
          forceAtlas2Based: {
            theta: [0.5, 0.1, 1, 0.05],
            gravitationalConstant: [-50, -500, 0, 1],
            centralGravity: [0.01, 0, 1, 5e-3],
            springLength: [95, 0, 500, 5],
            springConstant: [0.08, 0, 1.2, 5e-3],
            damping: [0.4, 0, 1, 0.01],
            avoidOverlap: [0, 0, 1, 0.01]
          },
          repulsion: {
            centralGravity: [0.2, 0, 10, 0.05],
            springLength: [200, 0, 500, 5],
            springConstant: [0.05, 0, 1.2, 5e-3],
            nodeDistance: [100, 0, 500, 5],
            damping: [0.09, 0, 1, 0.01]
          },
          hierarchicalRepulsion: {
            centralGravity: [0.2, 0, 10, 0.05],
            springLength: [100, 0, 500, 5],
            springConstant: [0.01, 0, 1.2, 5e-3],
            nodeDistance: [120, 0, 500, 5],
            damping: [0.09, 0, 1, 0.01],
            avoidOverlap: [0, 0, 1, 0.01]
          },
          maxVelocity: [50, 0, 150, 1],
          minVelocity: [0.1, 0.01, 0.5, 0.01],
          solver: ["barnesHut", "forceAtlas2Based", "repulsion", "hierarchicalRepulsion"],
          timestep: [0.5, 0.01, 1, 0.01],
          wind: {
            x: [0, -10, 10, 0.1],
            y: [0, -10, 10, 0.1]
          }
        }
      }, XM = function(g2, t2, A2) {
        var e2;
        return !(!Ic(g2).call(g2, "physics") || !Ic(e2 = HM.physics.solver).call(e2, t2) || A2.physics.solver === t2 || "wind" === t2);
      }, JM = Object.freeze({
        __proto__: null,
        allOptions: KM,
        configuratorHideOption: XM,
        configureOptions: HM
      }), qM = function() {
        function g2() {
          cn(this, g2);
        }
        return kd(g2, [{
          key: "getDistances",
          value: function(g3, t2, A2) {
            for (var e2 = {}, C2 = g3.edges, I2 = 0; I2 < t2.length; I2++) {
              var i2 = {};
              e2[t2[I2]] = i2;
              for (var o2 = 0; o2 < t2.length; o2++) i2[t2[o2]] = I2 == o2 ? 0 : 1e9;
            }
            for (var n2 = 0; n2 < A2.length; n2++) {
              var r2 = C2[A2[n2]];
              true === r2.connected && void 0 !== e2[r2.fromId] && void 0 !== e2[r2.toId] && (e2[r2.fromId][r2.toId] = 1, e2[r2.toId][r2.fromId] = 1);
            }
            for (var s2 = t2.length, a2 = 0; a2 < s2; a2++) for (var d2 = t2[a2], h2 = e2[d2], l2 = 0; l2 < s2 - 1; l2++) for (var c2 = t2[l2], u2 = e2[c2], p2 = l2 + 1; p2 < s2; p2++) {
              var f2 = t2[p2], v2 = e2[f2], y2 = Math.min(u2[f2], u2[d2] + h2[f2]);
              u2[f2] = y2, v2[c2] = y2;
            }
            return e2;
          }
        }]), g2;
      }(), $M = function() {
        function g2(t2, A2, e2) {
          cn(this, g2), this.body = t2, this.springLength = A2, this.springConstant = e2, this.distanceSolver = new qM();
        }
        return kd(g2, [{
          key: "setOptions",
          value: function(g3) {
            g3 && (g3.springLength && (this.springLength = g3.springLength), g3.springConstant && (this.springConstant = g3.springConstant));
          }
        }, {
          key: "solve",
          value: function(g3, t2) {
            var A2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], e2 = this.distanceSolver.getDistances(this.body, g3, t2);
            this._createL_matrix(e2), this._createK_matrix(e2), this._createE_matrix();
            for (var C2 = 0, I2 = Math.max(1e3, Math.min(10 * this.body.nodeIndices.length, 6e3)), i2 = 1e9, o2 = 0, n2 = 0, r2 = 0, s2 = 0, a2 = 0; i2 > 0.01 && C2 < I2; ) {
              C2 += 1;
              var d2 = lh(this._getHighestEnergyNode(A2), 4);
              for (o2 = d2[0], i2 = d2[1], n2 = d2[2], r2 = d2[3], s2 = i2, a2 = 0; s2 > 1 && a2 < 5; ) {
                a2 += 1, this._moveNode(o2, n2, r2);
                var h2 = lh(this._getEnergy(o2), 3);
                s2 = h2[0], n2 = h2[1], r2 = h2[2];
              }
            }
          }
        }, {
          key: "_getHighestEnergyNode",
          value: function(g3) {
            for (var t2 = this.body.nodeIndices, A2 = this.body.nodes, e2 = 0, C2 = t2[0], I2 = 0, i2 = 0, o2 = 0; o2 < t2.length; o2++) {
              var n2 = t2[o2];
              if (true !== A2[n2].predefinedPosition || true === A2[n2].isCluster && true === g3 || true !== A2[n2].options.fixed.x || true !== A2[n2].options.fixed.y) {
                var r2 = lh(this._getEnergy(n2), 3), s2 = r2[0], a2 = r2[1], d2 = r2[2];
                e2 < s2 && (e2 = s2, C2 = n2, I2 = a2, i2 = d2);
              }
            }
            return [C2, e2, I2, i2];
          }
        }, {
          key: "_getEnergy",
          value: function(g3) {
            var t2 = lh(this.E_sums[g3], 2), A2 = t2[0], e2 = t2[1];
            return [Math.sqrt(Math.pow(A2, 2) + Math.pow(e2, 2)), A2, e2];
          }
        }, {
          key: "_moveNode",
          value: function(g3, t2, A2) {
            for (var e2 = this.body.nodeIndices, C2 = this.body.nodes, I2 = 0, i2 = 0, o2 = 0, n2 = C2[g3].x, r2 = C2[g3].y, s2 = this.K_matrix[g3], a2 = this.L_matrix[g3], d2 = 0; d2 < e2.length; d2++) {
              var h2 = e2[d2];
              if (h2 !== g3) {
                var l2 = C2[h2].x, c2 = C2[h2].y, u2 = s2[h2], p2 = a2[h2], f2 = 1 / Math.pow(Math.pow(n2 - l2, 2) + Math.pow(r2 - c2, 2), 1.5);
                I2 += u2 * (1 - p2 * Math.pow(r2 - c2, 2) * f2), i2 += u2 * (p2 * (n2 - l2) * (r2 - c2) * f2), o2 += u2 * (1 - p2 * Math.pow(n2 - l2, 2) * f2);
              }
            }
            var v2 = (t2 / I2 + A2 / i2) / (i2 / I2 - o2 / i2), y2 = -(i2 * v2 + t2) / I2;
            C2[g3].x += y2, C2[g3].y += v2, this._updateE_matrix(g3);
          }
        }, {
          key: "_createL_matrix",
          value: function(g3) {
            var t2 = this.body.nodeIndices, A2 = this.springLength;
            this.L_matrix = [];
            for (var e2 = 0; e2 < t2.length; e2++) {
              this.L_matrix[t2[e2]] = {};
              for (var C2 = 0; C2 < t2.length; C2++) this.L_matrix[t2[e2]][t2[C2]] = A2 * g3[t2[e2]][t2[C2]];
            }
          }
        }, {
          key: "_createK_matrix",
          value: function(g3) {
            var t2 = this.body.nodeIndices, A2 = this.springConstant;
            this.K_matrix = [];
            for (var e2 = 0; e2 < t2.length; e2++) {
              this.K_matrix[t2[e2]] = {};
              for (var C2 = 0; C2 < t2.length; C2++) this.K_matrix[t2[e2]][t2[C2]] = A2 * Math.pow(g3[t2[e2]][t2[C2]], -2);
            }
          }
        }, {
          key: "_createE_matrix",
          value: function() {
            var g3 = this.body.nodeIndices, t2 = this.body.nodes;
            this.E_matrix = {}, this.E_sums = {};
            for (var A2 = 0; A2 < g3.length; A2++) this.E_matrix[g3[A2]] = [];
            for (var e2 = 0; e2 < g3.length; e2++) {
              for (var C2 = g3[e2], I2 = t2[C2].x, i2 = t2[C2].y, o2 = 0, n2 = 0, r2 = e2; r2 < g3.length; r2++) {
                var s2 = g3[r2];
                if (s2 !== C2) {
                  var a2 = t2[s2].x, d2 = t2[s2].y, h2 = 1 / Math.sqrt(Math.pow(I2 - a2, 2) + Math.pow(i2 - d2, 2));
                  this.E_matrix[C2][r2] = [this.K_matrix[C2][s2] * (I2 - a2 - this.L_matrix[C2][s2] * (I2 - a2) * h2), this.K_matrix[C2][s2] * (i2 - d2 - this.L_matrix[C2][s2] * (i2 - d2) * h2)], this.E_matrix[s2][e2] = this.E_matrix[C2][r2], o2 += this.E_matrix[C2][r2][0], n2 += this.E_matrix[C2][r2][1];
                }
              }
              this.E_sums[C2] = [o2, n2];
            }
          }
        }, {
          key: "_updateE_matrix",
          value: function(g3) {
            for (var t2 = this.body.nodeIndices, A2 = this.body.nodes, e2 = this.E_matrix[g3], C2 = this.K_matrix[g3], I2 = this.L_matrix[g3], i2 = A2[g3].x, o2 = A2[g3].y, n2 = 0, r2 = 0, s2 = 0; s2 < t2.length; s2++) {
              var a2 = t2[s2];
              if (a2 !== g3) {
                var d2 = e2[s2], h2 = d2[0], l2 = d2[1], c2 = A2[a2].x, u2 = A2[a2].y, p2 = 1 / Math.sqrt(Math.pow(i2 - c2, 2) + Math.pow(o2 - u2, 2)), f2 = C2[a2] * (i2 - c2 - I2[a2] * (i2 - c2) * p2), v2 = C2[a2] * (o2 - u2 - I2[a2] * (o2 - u2) * p2);
                e2[s2] = [f2, v2], n2 += f2, r2 += v2;
                var y2 = this.E_sums[a2];
                y2[0] += f2 - h2, y2[1] += v2 - l2;
              }
            }
            this.E_sums[g3] = [n2, r2];
          }
        }]), g2;
      }();
      function gB(g2, t2, A2) {
        var e2, C2, I2, i2, o2 = this;
        if (!(this instanceof gB)) throw new SyntaxError("Constructor must be called with the new operator");
        this.options = {}, this.defaultOptions = {
          locale: "en",
          locales: ny,
          clickToUse: false
        }, fe(this.options, this.defaultOptions), this.body = {
          container: g2,
          nodes: {},
          nodeIndices: [],
          edges: {},
          edgeIndices: [],
          emitter: {
            on: je(e2 = this.on).call(e2, this),
            off: je(C2 = this.off).call(C2, this),
            emit: je(I2 = this.emit).call(I2, this),
            once: je(i2 = this.once).call(i2, this)
          },
          eventListeners: {
            onTap: function() {
            },
            onTouch: function() {
            },
            onDoubleTap: function() {
            },
            onHold: function() {
            },
            onDragStart: function() {
            },
            onDrag: function() {
            },
            onDragEnd: function() {
            },
            onMouseWheel: function() {
            },
            onPinch: function() {
            },
            onMouseMove: function() {
            },
            onRelease: function() {
            },
            onContext: function() {
            }
          },
          data: {
            nodes: null,
            edges: null
          },
          functions: {
            createNode: function() {
            },
            createEdge: function() {
            },
            getPointer: function() {
            }
          },
          modules: {},
          view: {
            scale: 1,
            translation: {
              x: 0,
              y: 0
            }
          },
          selectionBox: {
            show: false,
            position: {
              start: {
                x: 0,
                y: 0
              },
              end: {
                x: 0,
                y: 0
              }
            }
          }
        }, this.bindEventListeners(), this.images = new sy(function() {
          return o2.body.emitter.emit("_requestRedraw");
        }), this.groups = new Gm(), this.canvas = new CP(this.body), this.selectionHandler = new yM(this.body, this.canvas), this.interactionHandler = new sP(this.body, this.canvas, this.selectionHandler), this.view = new IP(this.body, this.canvas), this.renderer = new gP(this.body, this.canvas), this.physics = new HR(this.body), this.layoutEngine = new ZM(this.body), this.clustering = new $R(this.body), this.manipulation = new jM(this.body, this.canvas, this.selectionHandler, this.interactionHandler), this.nodesHandler = new YN(this.body, this.images, this.groups, this.layoutEngine), this.edgesHandler = new FR(this.body, this.images, this.groups), this.body.modules.kamadaKawai = new $M(this.body, 150, 0.05), this.body.modules.clustering = this.clustering, this.canvas._create(), this.setOptions(A2), this.setData(t2);
      }
      He(gB.prototype), gB.prototype.setOptions = function(g2) {
        var t2 = this;
        if (null === g2 && (g2 = void 0), void 0 !== g2) {
          true === Dv.validate(g2, KM) && console.error("%cErrors have been found in the supplied options object.", Tv);
          if (Xf(["locale", "locales", "clickToUse"], this.options, g2), void 0 !== g2.locale && (g2.locale = function(g3, t3) {
            try {
              var A3 = lh(t3.split(/[-_ /]/, 2), 2), e2 = A3[0], C2 = A3[1], I2 = null != e2 ? e2.toLowerCase() : null, i2 = null != C2 ? C2.toUpperCase() : null;
              if (I2 && i2) {
                var o2, n2 = I2 + "-" + i2;
                if (Object.prototype.hasOwnProperty.call(g3, n2)) return n2;
                console.warn(bh(o2 = "Unknown variant ".concat(i2, " of language ")).call(o2, I2, "."));
              }
              if (I2) {
                var r2 = I2;
                if (Object.prototype.hasOwnProperty.call(g3, r2)) return r2;
                console.warn("Unknown language ".concat(I2));
              }
              return console.warn("Unknown locale ".concat(t3, ", falling back to English.")), "en";
            } catch (g4) {
              return console.error(g4), console.warn("Unexpected error while normalizing locale ".concat(t3, ", falling back to English.")), "en";
            }
          }(g2.locales || this.options.locales, g2.locale)), g2 = this.layoutEngine.setOptions(g2.layout, g2), this.canvas.setOptions(g2), this.groups.setOptions(g2.groups), this.nodesHandler.setOptions(g2.nodes), this.edgesHandler.setOptions(g2.edges), this.physics.setOptions(g2.physics), this.manipulation.setOptions(g2.manipulation, g2, this.options), this.interactionHandler.setOptions(g2.interaction), this.renderer.setOptions(g2.interaction), this.selectionHandler.setOptions(g2.interaction), void 0 !== g2.groups && this.body.emitter.emit("refreshNodes"), "configure" in g2 && (this.configurator || (this.configurator = new xv(this, this.body.container, HM, this.canvas.pixelRatio, XM)), this.configurator.setOptions(g2.configure)), this.configurator && true === this.configurator.options.enabled) {
            var A2 = {
              nodes: {},
              edges: {},
              layout: {},
              interaction: {},
              manipulation: {},
              physics: {},
              global: {}
            };
            qf(A2.nodes, this.nodesHandler.options), qf(A2.edges, this.edgesHandler.options), qf(A2.layout, this.layoutEngine.options), qf(A2.interaction, this.selectionHandler.options), qf(A2.interaction, this.renderer.options), qf(A2.interaction, this.interactionHandler.options), qf(A2.manipulation, this.manipulation.options), qf(A2.physics, this.physics.options), qf(A2.global, this.canvas.options), qf(A2.global, this.options), this.configurator.setModuleOptions(A2);
          }
          void 0 !== g2.clickToUse ? true === g2.clickToUse ? void 0 === this.activator && (this.activator = new kv(this.canvas.frame), this.activator.on("change", function() {
            t2.body.emitter.emit("activate");
          })) : (void 0 !== this.activator && (this.activator.destroy(), delete this.activator), this.body.emitter.emit("activate")) : this.body.emitter.emit("activate"), this.canvas.setSize(), this.body.emitter.emit("startSimulation");
        }
      }, gB.prototype._updateVisibleIndices = function() {
        var g2 = this.body.nodes, t2 = this.body.edges;
        for (var A2 in this.body.nodeIndices = [], this.body.edgeIndices = [], g2) Object.prototype.hasOwnProperty.call(g2, A2) && (this.clustering._isClusteredNode(A2) || false !== g2[A2].options.hidden || this.body.nodeIndices.push(g2[A2].id));
        for (var e2 in t2) if (Object.prototype.hasOwnProperty.call(t2, e2)) {
          var C2 = t2[e2], I2 = g2[C2.fromId], i2 = g2[C2.toId], o2 = void 0 !== I2 && void 0 !== i2;
          !this.clustering._isClusteredEdge(e2) && false === C2.options.hidden && o2 && false === I2.options.hidden && false === i2.options.hidden && this.body.edgeIndices.push(C2.id);
        }
      }, gB.prototype.bindEventListeners = function() {
        var g2 = this;
        this.body.emitter.on("_dataChanged", function() {
          g2.edgesHandler._updateState(), g2.body.emitter.emit("_dataUpdated");
        }), this.body.emitter.on("_dataUpdated", function() {
          g2.clustering._updateState(), g2._updateVisibleIndices(), g2._updateValueRange(g2.body.nodes), g2._updateValueRange(g2.body.edges), g2.body.emitter.emit("startSimulation"), g2.body.emitter.emit("_requestRedraw");
        });
      }, gB.prototype.setData = function(g2) {
        if (this.body.emitter.emit("resetPhysics"), this.body.emitter.emit("_resetData"), this.selectionHandler.unselectAll(), g2 && g2.dot && (g2.nodes || g2.edges)) throw new SyntaxError('Data must contain either parameter "dot" or  parameter pair "nodes" and "edges", but not both.');
        if (this.setOptions(g2 && g2.options), g2 && g2.dot) {
          console.warn("The dot property has been deprecated. Please use the static convertDot method to convert DOT into vis.network format and use the normal data format with nodes and edges. This converter is used like this: var data = vis.network.convertDot(dotString);");
          var t2 = Cy(g2.dot);
          this.setData(t2);
        } else if (g2 && g2.gephi) {
          console.warn("The gephi property has been deprecated. Please use the static convertGephi method to convert gephi into vis.network format and use the normal data format with nodes and edges. This converter is used like this: var data = vis.network.convertGephi(gephiJson);");
          var A2 = iy(g2.gephi);
          this.setData(A2);
        } else this.nodesHandler.setData(g2 && g2.nodes, true), this.edgesHandler.setData(g2 && g2.edges, true), this.body.emitter.emit("_dataChanged"), this.body.emitter.emit("_dataLoaded"), this.body.emitter.emit("initPhysics");
      }, gB.prototype.destroy = function() {
        for (var g2 in this.body.emitter.emit("destroy"), this.body.emitter.off(), this.off(), delete this.groups, delete this.canvas, delete this.selectionHandler, delete this.interactionHandler, delete this.view, delete this.renderer, delete this.physics, delete this.layoutEngine, delete this.clustering, delete this.manipulation, delete this.nodesHandler, delete this.edgesHandler, delete this.configurator, delete this.images, this.body.nodes) Object.prototype.hasOwnProperty.call(this.body.nodes, g2) && delete this.body.nodes[g2];
        for (var t2 in this.body.edges) Object.prototype.hasOwnProperty.call(this.body.edges, t2) && delete this.body.edges[t2];
        Qf(this.body.container);
      }, gB.prototype._updateValueRange = function(g2) {
        var t2, A2 = void 0, e2 = void 0, C2 = 0;
        for (t2 in g2) if (Object.prototype.hasOwnProperty.call(g2, t2)) {
          var I2 = g2[t2].getValue();
          void 0 !== I2 && (A2 = void 0 === A2 ? I2 : Math.min(I2, A2), e2 = void 0 === e2 ? I2 : Math.max(I2, e2), C2 += I2);
        }
        if (void 0 !== A2 && void 0 !== e2) for (t2 in g2) Object.prototype.hasOwnProperty.call(g2, t2) && g2[t2].setValueRange(A2, e2, C2);
      }, gB.prototype.isActive = function() {
        return !this.activator || this.activator.active;
      }, gB.prototype.setSize = function() {
        return this.canvas.setSize.apply(this.canvas, arguments);
      }, gB.prototype.canvasToDOM = function() {
        return this.canvas.canvasToDOM.apply(this.canvas, arguments);
      }, gB.prototype.DOMtoCanvas = function() {
        return this.canvas.DOMtoCanvas.apply(this.canvas, arguments);
      }, gB.prototype.findNode = function() {
        return this.clustering.findNode.apply(this.clustering, arguments);
      }, gB.prototype.isCluster = function() {
        return this.clustering.isCluster.apply(this.clustering, arguments);
      }, gB.prototype.openCluster = function() {
        return this.clustering.openCluster.apply(this.clustering, arguments);
      }, gB.prototype.cluster = function() {
        return this.clustering.cluster.apply(this.clustering, arguments);
      }, gB.prototype.getNodesInCluster = function() {
        return this.clustering.getNodesInCluster.apply(this.clustering, arguments);
      }, gB.prototype.clusterByConnection = function() {
        return this.clustering.clusterByConnection.apply(this.clustering, arguments);
      }, gB.prototype.clusterByHubsize = function() {
        return this.clustering.clusterByHubsize.apply(this.clustering, arguments);
      }, gB.prototype.updateClusteredNode = function() {
        return this.clustering.updateClusteredNode.apply(this.clustering, arguments);
      }, gB.prototype.getClusteredEdges = function() {
        return this.clustering.getClusteredEdges.apply(this.clustering, arguments);
      }, gB.prototype.getBaseEdge = function() {
        return this.clustering.getBaseEdge.apply(this.clustering, arguments);
      }, gB.prototype.getBaseEdges = function() {
        return this.clustering.getBaseEdges.apply(this.clustering, arguments);
      }, gB.prototype.updateEdge = function() {
        return this.clustering.updateEdge.apply(this.clustering, arguments);
      }, gB.prototype.clusterOutliers = function() {
        return this.clustering.clusterOutliers.apply(this.clustering, arguments);
      }, gB.prototype.getSeed = function() {
        return this.layoutEngine.getSeed.apply(this.layoutEngine, arguments);
      }, gB.prototype.enableEditMode = function() {
        return this.manipulation.enableEditMode.apply(this.manipulation, arguments);
      }, gB.prototype.disableEditMode = function() {
        return this.manipulation.disableEditMode.apply(this.manipulation, arguments);
      }, gB.prototype.addNodeMode = function() {
        return this.manipulation.addNodeMode.apply(this.manipulation, arguments);
      }, gB.prototype.editNode = function() {
        return this.manipulation.editNode.apply(this.manipulation, arguments);
      }, gB.prototype.editNodeMode = function() {
        return console.warn("Deprecated: Please use editNode instead of editNodeMode."), this.manipulation.editNode.apply(this.manipulation, arguments);
      }, gB.prototype.addEdgeMode = function() {
        return this.manipulation.addEdgeMode.apply(this.manipulation, arguments);
      }, gB.prototype.editEdgeMode = function() {
        return this.manipulation.editEdgeMode.apply(this.manipulation, arguments);
      }, gB.prototype.deleteSelected = function() {
        return this.manipulation.deleteSelected.apply(this.manipulation, arguments);
      }, gB.prototype.getPositions = function() {
        return this.nodesHandler.getPositions.apply(this.nodesHandler, arguments);
      }, gB.prototype.getPosition = function() {
        return this.nodesHandler.getPosition.apply(this.nodesHandler, arguments);
      }, gB.prototype.storePositions = function() {
        return this.nodesHandler.storePositions.apply(this.nodesHandler, arguments);
      }, gB.prototype.moveNode = function() {
        return this.nodesHandler.moveNode.apply(this.nodesHandler, arguments);
      }, gB.prototype.getBoundingBox = function() {
        return this.nodesHandler.getBoundingBox.apply(this.nodesHandler, arguments);
      }, gB.prototype.getConnectedNodes = function(g2) {
        return void 0 !== this.body.nodes[g2] ? this.nodesHandler.getConnectedNodes.apply(this.nodesHandler, arguments) : this.edgesHandler.getConnectedNodes.apply(this.edgesHandler, arguments);
      }, gB.prototype.getConnectedEdges = function() {
        return this.nodesHandler.getConnectedEdges.apply(this.nodesHandler, arguments);
      }, gB.prototype.startSimulation = function() {
        return this.physics.startSimulation.apply(this.physics, arguments);
      }, gB.prototype.stopSimulation = function() {
        return this.physics.stopSimulation.apply(this.physics, arguments);
      }, gB.prototype.stabilize = function() {
        return this.physics.stabilize.apply(this.physics, arguments);
      }, gB.prototype.getSelection = function() {
        return this.selectionHandler.getSelection.apply(this.selectionHandler, arguments);
      }, gB.prototype.setSelection = function() {
        return this.selectionHandler.setSelection.apply(this.selectionHandler, arguments);
      }, gB.prototype.getSelectedNodes = function() {
        return this.selectionHandler.getSelectedNodeIds.apply(this.selectionHandler, arguments);
      }, gB.prototype.getSelectedEdges = function() {
        return this.selectionHandler.getSelectedEdgeIds.apply(this.selectionHandler, arguments);
      }, gB.prototype.getNodeAt = function() {
        var g2 = this.selectionHandler.getNodeAt.apply(this.selectionHandler, arguments);
        return void 0 !== g2 && void 0 !== g2.id ? g2.id : g2;
      }, gB.prototype.getEdgeAt = function() {
        var g2 = this.selectionHandler.getEdgeAt.apply(this.selectionHandler, arguments);
        return void 0 !== g2 && void 0 !== g2.id ? g2.id : g2;
      }, gB.prototype.selectNodes = function() {
        return this.selectionHandler.selectNodes.apply(this.selectionHandler, arguments);
      }, gB.prototype.selectEdges = function() {
        return this.selectionHandler.selectEdges.apply(this.selectionHandler, arguments);
      }, gB.prototype.unselectAll = function() {
        this.selectionHandler.unselectAll.apply(this.selectionHandler, arguments), this.selectionHandler.commitWithoutEmitting.apply(this.selectionHandler), this.redraw();
      }, gB.prototype.redraw = function() {
        return this.renderer.redraw.apply(this.renderer, arguments);
      }, gB.prototype.getScale = function() {
        return this.view.getScale.apply(this.view, arguments);
      }, gB.prototype.getViewPosition = function() {
        return this.view.getViewPosition.apply(this.view, arguments);
      }, gB.prototype.fit = function() {
        return this.view.fit.apply(this.view, arguments);
      }, gB.prototype.moveTo = function() {
        return this.view.moveTo.apply(this.view, arguments);
      }, gB.prototype.focus = function() {
        return this.view.focus.apply(this.view, arguments);
      }, gB.prototype.releaseNode = function() {
        return this.view.releaseNode.apply(this.view, arguments);
      }, gB.prototype.getOptionsFromConfigurator = function() {
        var g2 = {};
        return this.configurator && (g2 = this.configurator.getOptions.apply(this.configurator)), g2;
      };
      var tB = Cy;
      g.DataSet = mD, g.DataView = bD, g.Network = gB, g.NetworkImages = sy, g.Queue = fD, g.data = xD, g.networkDOTParser = Iy, g.networkGephiParser = oy, g.networkOptions = JM, g.parseDOTNetwork = tB, g.parseGephiNetwork = iy;
    });
  }
});
export default require_vis_network_min();
/*! Bundled license information:

vis-network/standalone/umd/vis-network.min.js:
  (**
   * vis-network
   * https://visjs.github.io/vis-network/
   *
   * A dynamic, browser-based visualization library.
   *
   * @version 9.1.9
   * @date    2023-11-03T01:42:27.418Z
   *
   * @copyright (c) 2011-2017 Almende B.V, http://almende.com
   * @copyright (c) 2017-2019 visjs contributors, https://github.com/visjs
   *
   * @license
   * vis.js is dual licensed under both
   *
   *   1. The Apache 2.0 License
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   *   and
   *
   *   2. The MIT License
   *      http://opensource.org/licenses/MIT
   *
   * vis.js may be distributed under either license.
   *)
  (*! Hammer.JS - v2.0.17-rc - 2019-12-16
  	 * http://naver.github.io/egjs
  	 *
  	 * Forked By Naver egjs
  	 * Copyright (c) hammerjs
  	 * Licensed under the MIT license *)
*/
//# sourceMappingURL=vis-network_standalone_umd_vis-network__min__js.js.map
