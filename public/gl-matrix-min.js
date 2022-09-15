/*!
@fileoverview gl-matrix - High performance matrix and vector operations
@author Brandon Jones
@author Colin MacKenzie IV
@version 2.6.1

Copyright (c) 2015-2018, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
!(function (t, n) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = n();
  else if ("function" == typeof define && define.amd) define([], n);
  else {
    var r = n();
    for (var a in r) ("object" == typeof exports ? exports : t)[a] = r[a];
  }
})("undefined" != typeof self ? self : this, function () {
  return (function (t) {
    var n = {};
    function r(a) {
      if (n[a]) return n[a].exports;
      var e = (n[a] = { i: a, l: !1, exports: {} });
      return t[a].call(e.exports, e, e.exports, r), (e.l = !0), e.exports;
    }
    return (
      (r.m = t),
      (r.c = n),
      (r.d = function (t, n, a) {
        r.o(t, n) ||
          Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: a,
          });
      }),
      (r.r = function (t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (r.n = function (t) {
        var n =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return r.d(n, "a", n), n;
      }),
      (r.o = function (t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }),
      (r.p = ""),
      r((r.s = 10))
    );
  })([
    function (t, n, r) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.setMatrixArrayType = function (t) {
          n.ARRAY_TYPE = t;
        }),
        (n.toRadian = function (t) {
          return t * e;
        }),
        (n.equals = function (t, n) {
          return Math.abs(t - n) <= a * Math.max(1, Math.abs(t), Math.abs(n));
        });
      var a = (n.EPSILON = 1e-6);
      (n.ARRAY_TYPE =
        "undefined" != typeof Float32Array ? Float32Array : Array),
        (n.RANDOM = Math.random);
      var e = Math.PI / 180;
    },
    function (t, n, r) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.forEach =
          n.sqrLen =
          n.len =
          n.sqrDist =
          n.dist =
          n.div =
          n.mul =
          n.sub =
            void 0),
        (n.create = e),
        (n.clone = function (t) {
          var n = new a.ARRAY_TYPE(4);
          return (n[0] = t[0]), (n[1] = t[1]), (n[2] = t[2]), (n[3] = t[3]), n;
        }),
        (n.fromValues = function (t, n, r, e) {
          var u = new a.ARRAY_TYPE(4);
          return (u[0] = t), (u[1] = n), (u[2] = r), (u[3] = e), u;
        }),
        (n.copy = function (t, n) {
          return (t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), (t[3] = n[3]), t;
        }),
        (n.set = function (t, n, r, a, e) {
          return (t[0] = n), (t[1] = r), (t[2] = a), (t[3] = e), t;
        }),
        (n.add = function (t, n, r) {
          return (
            (t[0] = n[0] + r[0]),
            (t[1] = n[1] + r[1]),
            (t[2] = n[2] + r[2]),
            (t[3] = n[3] + r[3]),
            t
          );
        }),
        (n.subtract = u),
        (n.multiply = o),
        (n.divide = i),
        (n.ceil = function (t, n) {
          return (
            (t[0] = Math.ceil(n[0])),
            (t[1] = Math.ceil(n[1])),
            (t[2] = Math.ceil(n[2])),
            (t[3] = Math.ceil(n[3])),
            t
          );
        }),
        (n.floor = function (t, n) {
          return (
            (t[0] = Math.floor(n[0])),
            (t[1] = Math.floor(n[1])),
            (t[2] = Math.floor(n[2])),
            (t[3] = Math.floor(n[3])),
            t
          );
        }),
        (n.min = function (t, n, r) {
          return (
            (t[0] = Math.min(n[0], r[0])),
            (t[1] = Math.min(n[1], r[1])),
            (t[2] = Math.min(n[2], r[2])),
            (t[3] = Math.min(n[3], r[3])),
            t
          );
        }),
        (n.max = function (t, n, r) {
          return (
            (t[0] = Math.max(n[0], r[0])),
            (t[1] = Math.max(n[1], r[1])),
            (t[2] = Math.max(n[2], r[2])),
            (t[3] = Math.max(n[3], r[3])),
            t
          );
        }),
        (n.round = function (t, n) {
          return (
            (t[0] = Math.round(n[0])),
            (t[1] = Math.round(n[1])),
            (t[2] = Math.round(n[2])),
            (t[3] = Math.round(n[3])),
            t
          );
        }),
        (n.scale = s),
        (n.scaleAndAdd = function (t, n, r, a) {
          return (
            (t[0] = n[0] + r[0] * a),
            (t[1] = n[1] + r[1] * a),
            (t[2] = n[2] + r[2] * a),
            (t[3] = n[3] + r[3] * a),
            t
          );
        }),
        (n.distance = c),
        (n.squaredDistance = f),
        (n.length = h),
        (n.squaredLength = M),
        (n.negate = function (t, n) {
          return (
            (t[0] = -n[0]), (t[1] = -n[1]), (t[2] = -n[2]), (t[3] = -n[3]), t
          );
        }),
        (n.inverse = function (t, n) {
          return (
            (t[0] = 1 / n[0]),
            (t[1] = 1 / n[1]),
            (t[2] = 1 / n[2]),
            (t[3] = 1 / n[3]),
            t
          );
        }),
        (n.normalize = function (t, n) {
          var r = n[0],
            a = n[1],
            e = n[2],
            u = n[3],
            o = r * r + a * a + e * e + u * u;
          o > 0 &&
            ((o = 1 / Math.sqrt(o)),
            (t[0] = r * o),
            (t[1] = a * o),
            (t[2] = e * o),
            (t[3] = u * o));
          return t;
        }),
        (n.dot = function (t, n) {
          return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3];
        }),
        (n.lerp = function (t, n, r, a) {
          var e = n[0],
            u = n[1],
            o = n[2],
            i = n[3];
          return (
            (t[0] = e + a * (r[0] - e)),
            (t[1] = u + a * (r[1] - u)),
            (t[2] = o + a * (r[2] - o)),
            (t[3] = i + a * (r[3] - i)),
            t
          );
        }),
        (n.random = function (t, n) {
          var r, e, u, o, i, c;
          n = n || 1;
          do {
            (r = 2 * a.RANDOM() - 1),
              (e = 2 * a.RANDOM() - 1),
              (i = r * r + e * e);
          } while (i >= 1);
          do {
            (u = 2 * a.RANDOM() - 1),
              (o = 2 * a.RANDOM() - 1),
              (c = u * u + o * o);
          } while (c >= 1);
          var f = Math.sqrt((1 - i) / c);
          return (
            (t[0] = s * r),
            (t[1] = s * e),
            (t[2] = s * u * f),
            (t[3] = s * o * f),
            t
          );
        }),
        (n.transformMat4 = function (t, n, r) {
          var a = n[0],
            e = n[1],
            u = n[2],
            o = n[3];
          return (
            (t[0] = r[0] * a + r[4] * e + r[8] * u + r[12] * o),
            (t[1] = r[1] * a + r[5] * e + r[9] * u + r[13] * o),
            (t[2] = r[2] * a + r[6] * e + r[10] * u + r[14] * o),
            (t[3] = r[3] * a + r[7] * e + r[11] * u + r[15] * o),
            t
          );
        }),
        (n.transformQuat = function (t, n, r) {
          var a = n[0],
            e = n[1],
            u = n[2],
            o = r[0],
            i = r[1],
            s = r[2],
            c = r[3],
            f = c * a + i * u - s * e,
            h = c * e + s * a - o * u,
            M = c * u + o * e - i * a,
            l = -o * a - i * e - s * u;
          return (
            (t[0] = f * c + l * -o + h * -s - M * -i),
            (t[1] = h * c + l * -i + M * -o - f * -s),
            (t[2] = M * c + l * -s + f * -i - h * -o),
            (t[3] = n[3]),
            t
          );
        }),
        (n.str = function (t) {
          return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
        }),
        (n.exactEquals = function (t, n) {
          return (
            t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3]
          );
        }),
        (n.equals = function (t, n) {
          var r = t[0],
            e = t[1],
            u = t[2],
            o = t[3],
            i = n[0],
            s = n[1],
            c = n[2],
            f = n[3];
          return (
            Math.abs(r - i) <=
              a.EPSILON * Math.max(1, Math.abs(r), Math.abs(i)) &&
            Math.abs(e - s) <=
              a.EPSILON * Math.max(1, Math.abs(e), Math.abs(s)) &&
            Math.abs(u - c) <=
              a.EPSILON * Math.max(1, Math.abs(u), Math.abs(c)) &&
            Math.abs(o - f) <= a.EPSILON * Math.max(1, Math.abs(o), Math.abs(f))
          );
        });
      var a = (function (t) {
        if (t && t.__esModule) return t;
        var n = {};
        if (null != t)
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return (n.default = t), n;
      })(r(0));
      function e() {
        var t = new a.ARRAY_TYPE(4);
        return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 0), t;
      }
      function u(t, n, r) {
        return (
          (t[0] = n[0] - r[0]),
          (t[1] = n[1] - r[1]),
          (t[2] = n[2] - r[2]),
          (t[3] = n[3] - r[3]),
          t
        );
      }
      function o(t, n, r) {
        return (
          (t[0] = n[0] * r[0]),
          (t[1] = n[1] * r[1]),
          (t[2] = n[2] * r[2]),
          (t[3] = n[3] * r[3]),
          t
        );
      }
      function i(t, n, r) {
        return (
          (t[0] = n[0] / r[0]),
          (t[1] = n[1] / r[1]),
          (t[2] = n[2] / r[2]),
          (t[3] = n[3] / r[3]),
          t
        );
      }
      function s(t, n, r) {
        return (
          (t[0] = n[0] * r),
          (t[1] = n[1] * r),
          (t[2] = n[2] * r),
          (t[3] = n[3] * r),
          t
        );
      }
      function c(t, n) {
        var r = n[0] - t[0],
          a = n[1] - t[1],
          e = n[2] - t[2],
          u = n[3] - t[3];
        return Math.sqrt(r * r + a * a + e * e + u * u);
      }
      function f(t, n) {
        var r = n[0] - t[0],
          a = n[1] - t[1],
          e = n[2] - t[2],
          u = n[3] - t[3];
        return r * r + a * a + e * e + u * u;
      }
      function h(t) {
        var n = t[0],
          r = t[1],
          a = t[2],
          e = t[3];
        return Math.sqrt(n * n + r * r + a * a + e * e);
      }
      function M(t) {
        var n = t[0],
          r = t[1],
          a = t[2],
          e = t[3];
        return n * n + r * r + a * a + e * e;
      }
      var l;
      (n.sub = u),
        (n.mul = o),
        (n.div = i),
        (n.dist = c),
        (n.sqrDist = f),
        (n.len = h),
        (n.sqrLen = M),
        (n.forEach =
          ((l = e()),
          function (t, n, r, a, e, u) {
            var o = void 0,
              i = void 0;
            for (
              n || (n = 4),
                r || (r = 0),
                i = a ? Math.min(a * n + r, t.length) : t.length,
                o = r;
              o < i;
              o += n
            )
              (l[0] = t[o]),
                (l[1] = t[o + 1]),
                (l[2] = t[o + 2]),
                (l[3] = t[o + 3]),
                e(l, l, u),
                (t[o] = l[0]),
                (t[o + 1] = l[1]),
                (t[o + 2] = l[2]),
                (t[o + 3] = l[3]);
            return t;
          }));
    },
    function (t, n, r) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.forEach =
          n.sqrLen =
          n.len =
          n.sqrDist =
          n.dist =
          n.div =
          n.mul =
          n.sub =
            void 0),
        (n.create = e),
        (n.clone = function (t) {
          var n = new a.ARRAY_TYPE(3);
          return (n[0] = t[0]), (n[1] = t[1]), (n[2] = t[2]), n;
        }),
        (n.length = u),
        (n.fromValues = o),
        (n.copy = function (t, n) {
          return (t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), t;
        }),
        (n.set = function (t, n, r, a) {
          return (t[0] = n), (t[1] = r), (t[2] = a), t;
        }),
        (n.add = function (t, n, r) {
          return (
            (t[0] = n[0] + r[0]), (t[1] = n[1] + r[1]), (t[2] = n[2] + r[2]), t
          );
        }),
        (n.subtract = i),
        (n.multiply = s),
        (n.divide = c),
        (n.ceil = function (t, n) {
          return (
            (t[0] = Math.ceil(n[0])),
            (t[1] = Math.ceil(n[1])),
            (t[2] = Math.ceil(n[2])),
            t
          );
        }),
        (n.floor = function (t, n) {
          return (
            (t[0] = Math.floor(n[0])),
            (t[1] = Math.floor(n[1])),
            (t[2] = Math.floor(n[2])),
            t
          );
        }),
        (n.min = function (t, n, r) {
          return (
            (t[0] = Math.min(n[0], r[0])),
            (t[1] = Math.min(n[1], r[1])),
            (t[2] = Math.min(n[2], r[2])),
            t
          );
        }),
        (n.max = function (t, n, r) {
          return (
            (t[0] = Math.max(n[0], r[0])),
            (t[1] = Math.max(n[1], r[1])),
            (t[2] = Math.max(n[2], r[2])),
            t
          );
        }),
        (n.round = function (t, n) {
          return (
            (t[0] = Math.round(n[0])),
            (t[1] = Math.round(n[1])),
            (t[2] = Math.round(n[2])),
            t
          );
        }),
        (n.scale = function (t, n, r) {
          return (t[0] = n[0] * r), (t[1] = n[1] * r), (t[2] = n[2] * r), t;
        }),
        (n.scaleAndAdd = function (t, n, r, a) {
          return (
            (t[0] = n[0] + r[0] * a),
            (t[1] = n[1] + r[1] * a),
            (t[2] = n[2] + r[2] * a),
            t
          );
        }),
        (n.distance = f),
        (n.squaredDistance = h),
        (n.squaredLength = M),
        (n.negate = function (t, n) {
          return (t[0] = -n[0]), (t[1] = -n[1]), (t[2] = -n[2]), t;
        }),
        (n.inverse = function (t, n) {
          return (t[0] = 1 / n[0]), (t[1] = 1 / n[1]), (t[2] = 1 / n[2]), t;
        }),
        (n.normalize = l),
        (n.dot = v),
        (n.cross = function (t, n, r) {
          var a = n[0],
            e = n[1],
            u = n[2],
            o = r[0],
            i = r[1],
            s = r[2];
          return (
            (t[0] = e * s - u * i),
            (t[1] = u * o - a * s),
            (t[2] = a * i - e * o),
            t
          );
        }),
        (n.lerp = function (t, n, r, a) {
          var e = n[0],
            u = n[1],
            o = n[2];
          return (
            (t[0] = e + a * (r[0] - e)),
            (t[1] = u + a * (r[1] - u)),
            (t[2] = o + a * (r[2] - o)),
            t
          );
        }),
        (n.hermite = function (t, n, r, a, e, u) {
          var o = u * u,
            i = o * (2 * u - 3) + 1,
            s = o * (u - 2) + u,
            c = o * (u - 1),
            f = o * (3 - 2 * u);
          return (
            (t[0] = n[0] * i + r[0] * s + a[0] * c + e[0] * f),
            (t[1] = n[1] * i + r[1] * s + a[1] * c + e[1] * f),
            (t[2] = n[2] * i + r[2] * s + a[2] * c + e[2] * f),
            t
          );
        }),
        (n.bezier = function (t, n, r, a, e, u) {
          var o = 1 - u,
            i = o * o,
            s = u * u,
            c = i * o,
            f = 3 * u * i,
            h = 3 * s * o,
            M = s * u;
          return (
            (t[0] = n[0] * c + r[0] * f + a[0] * h + e[0] * M),
            (t[1] = n[1] * c + r[1] * f + a[1] * h + e[1] * M),
            (t[2] = n[2] * c + r[2] * f + a[2] * h + e[2] * M),
            t
          );
        }),
        (n.random = function (t, n) {
          n = n || 1;
          var r = 2 * a.RANDOM() * Math.PI,
            e = 2 * a.RANDOM() - 1,
            u = Math.sqrt(1 - e * e) * n;
          return (
            (t[0] = Math.cos(r) * u),
            (t[1] = Math.sin(r) * u),
            (t[2] = e * n),
            t
          );
        }),
        (n.transformMat4 = function (t, n, r) {
          var a = n[0],
            e = n[1],
            u = n[2],
            o = r[3] * a + r[7] * e + r[11] * u + r[15];
          return (
            (o = o || 1),
            (t[0] = (r[0] * a + r[4] * e + r[8] * u + r[12]) / o),
            (t[1] = (r[1] * a + r[5] * e + r[9] * u + r[13]) / o),
            (t[2] = (r[2] * a + r[6] * e + r[10] * u + r[14]) / o),
            t
          );
        }),
        (n.transformMat3 = function (t, n, r) {
          var a = n[0],
            e = n[1],
            u = n[2];
          return (
            (t[0] = a * r[0] + e * r[3] + u * r[6]),
            (t[1] = a * r[1] + e * r[4] + u * r[7]),
            (t[2] = a * r[2] + e * r[5] + u * r[8]),
            t
          );
        }),
        (n.transformQuat = function (t, n, r) {
          var a = r[0],
            e = r[1],
            u = r[2],
            o = r[3],
            i = n[0],
            s = n[1],
            c = n[2],
            f = e * c - u * s,
            h = u * i - a * c,
            M = a * s - e * i,
            l = e * M - u * h,
            v = u * f - a * M,
            d = a * h - e * f,
            b = 2 * o;
          return (
            (f *= b),
            (h *= b),
            (M *= b),
            (l *= 2),
            (v *= 2),
            (d *= 2),
            (t[0] = i + f + l),
            (t[1] = s + h + v),
            (t[2] = c + M + d),
            t
          );
        }),
        (n.rotateX = function (t, n, r, a) {
          var e = [],
            u = [];
          return (
            (e[0] = n[0] - r[0]),
            (e[1] = n[1] - r[1]),
            (e[2] = n[2] - r[2]),
            (u[0] = e[0]),
            (u[1] = e[1] * Math.cos(a) - e[2] * Math.sin(a)),
            (u[2] = e[1] * Math.sin(a) + e[2] * Math.cos(a)),
            (t[0] = u[0] + r[0]),
            (t[1] = u[1] + r[1]),
            (t[2] = u[2] + r[2]),
            t
          );
        }),
        (n.rotateY = function (t, n, r, a) {
          var e = [],
            u = [];
          return (
            (e[0] = n[0] - r[0]),
            (e[1] = n[1] - r[1]),
            (e[2] = n[2] - r[2]),
            (u[0] = e[2] * Math.sin(a) + e[0] * Math.cos(a)),
            (u[1] = e[1]),
            (u[2] = e[2] * Math.cos(a) - e[0] * Math.sin(a)),
            (t[0] = u[0] + r[0]),
            (t[1] = u[1] + r[1]),
            (t[2] = u[2] + r[2]),
            t
          );
        }),
        (n.rotateZ = function (t, n, r, a) {
          var e = [],
            u = [];
          return (
            (e[0] = n[0] - r[0]),
            (e[1] = n[1] - r[1]),
            (e[2] = n[2] - r[2]),
            (u[0] = e[0] * Math.cos(a) - e[1] * Math.sin(a)),
            (u[1] = e[0] * Math.sin(a) + e[1] * Math.cos(a)),
            (u[2] = e[2]),
            (t[0] = u[0] + r[0]),
            (t[1] = u[1] + r[1]),
            (t[2] = u[2] + r[2]),
            t
          );
        }),
        (n.angle = function (t, n) {
          var r = o(t[0], t[1], t[2]),
            a = o(n[0], n[1], n[2]);
          l(r, r), l(a, a);
          var e = v(r, a);
          return e > 1 ? 0 : e < -1 ? Math.PI : Math.acos(e);
        }),
        (n.str = function (t) {
          return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
        }),
        (n.exactEquals = function (t, n) {
          return t[0] === n[0] && t[1] === n[1] && t[2] === n[2];
        }),
        (n.equals = function (t, n) {
          var r = t[0],
            e = t[1],
            u = t[2],
            o = n[0],
            i = n[1],
            s = n[2];
          return (
            Math.abs(r - o) <=
              a.EPSILON * Math.max(1, Math.abs(r), Math.abs(o)) &&
            Math.abs(e - i) <=
              a.EPSILON * Math.max(1, Math.abs(e), Math.abs(i)) &&
            Math.abs(u - s) <= a.EPSILON * Math.max(1, Math.abs(u), Math.abs(s))
          );
        });
      var a = (function (t) {
        if (t && t.__esModule) return t;
        var n = {};
        if (null != t)
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return (n.default = t), n;
      })(r(0));
      function e() {
        var t = new a.ARRAY_TYPE(3);
        return (t[0] = 0), (t[1] = 0), (t[2] = 0), t;
      }
      function u(t) {
        var n = t[0],
          r = t[1],
          a = t[2];
        return Math.sqrt(n * n + r * r + a * a);
      }
      function o(t, n, r) {
        var e = new a.ARRAY_TYPE(3);
        return (e[0] = t), (e[1] = n), (e[2] = r), e;
      }
      function i(t, n, r) {
        return (
          (t[0] = n[0] - r[0]), (t[1] = n[1] - r[1]), (t[2] = n[2] - r[2]), t
        );
      }
      function s(t, n, r) {
        return (
          (t[0] = n[0] * r[0]), (t[1] = n[1] * r[1]), (t[2] = n[2] * r[2]), t
        );
      }
      function c(t, n, r) {
        return (
          (t[0] = n[0] / r[0]), (t[1] = n[1] / r[1]), (t[2] = n[2] / r[2]), t
        );
      }
      function f(t, n) {
        var r = n[0] - t[0],
          a = n[1] - t[1],
          e = n[2] - t[2];
        return Math.sqrt(r * r + a * a + e * e);
      }
      function h(t, n) {
        var r = n[0] - t[0],
          a = n[1] - t[1],
          e = n[2] - t[2];
        return r * r + a * a + e * e;
      }
      function M(t) {
        var n = t[0],
          r = t[1],
          a = t[2];
        return n * n + r * r + a * a;
      }
      function l(t, n) {
        var r = n[0],
          a = n[1],
          e = n[2],
          u = r * r + a * a + e * e;
        return (
          u > 0 &&
            ((u = 1 / Math.sqrt(u)),
            (t[0] = n[0] * u),
            (t[1] = n[1] * u),
            (t[2] = n[2] * u)),
          t
        );
      }
      function v(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
      }
      var d;
      (n.sub = i),
        (n.mul = s),
        (n.div = c),
        (n.dist = f),
        (n.sqrDist = h),
        (n.len = u),
        (n.sqrLen = M),
        (n.forEach =
          ((d = e()),
          function (t, n, r, a, e, u) {
            var o = void 0,
              i = void 0;
            for (
              n || (n = 3),
                r || (r = 0),
                i = a ? Math.min(a * n + r, t.length) : t.length,
                o = r;
              o < i;
              o += n
            )
              (d[0] = t[o]),
                (d[1] = t[o + 1]),
                (d[2] = t[o + 2]),
                e(d, d, u),
                (t[o] = d[0]),
                (t[o + 1] = d[1]),
                (t[o + 2] = d[2]);
            return t;
          }));
    },
    function (t, n, r) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.setAxes =
          n.sqlerp =
          n.rotationTo =
          n.equals =
          n.exactEquals =
          n.normalize =
          n.sqrLen =
          n.squaredLength =
          n.len =
          n.length =
          n.lerp =
          n.dot =
          n.scale =
          n.mul =
          n.add =
          n.set =
          n.copy =
          n.fromValues =
          n.clone =
            void 0),
        (n.create = s),
        (n.identity = function (t) {
          return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), t;
        }),
        (n.setAxisAngle = c),
        (n.getAxisAngle = function (t, n) {
          var r = 2 * Math.acos(n[3]),
            a = Math.sin(r / 2);
          0 != a
            ? ((t[0] = n[0] / a), (t[1] = n[1] / a), (t[2] = n[2] / a))
            : ((t[0] = 1), (t[1] = 0), (t[2] = 0));
          return r;
        }),
        (n.multiply = f),
        (n.rotateX = function (t, n, r) {
          r *= 0.5;
          var a = n[0],
            e = n[1],
            u = n[2],
            o = n[3],
            i = Math.sin(r),
            s = Math.cos(r);
          return (
            (t[0] = a * s + o * i),
            (t[1] = e * s + u * i),
            (t[2] = u * s - e * i),
            (t[3] = o * s - a * i),
            t
          );
        }),
        (n.rotateY = function (t, n, r) {
          r *= 0.5;
          var a = n[0],
            e = n[1],
            u = n[2],
            o = n[3],
            i = Math.sin(r),
            s = Math.cos(r);
          return (
            (t[0] = a * s - u * i),
            (t[1] = e * s + o * i),
            (t[2] = u * s + a * i),
            (t[3] = o * s - e * i),
            t
          );
        }),
        (n.rotateZ = function (t, n, r) {
          r *= 0.5;
          var a = n[0],
            e = n[1],
            u = n[2],
            o = n[3],
            i = Math.sin(r),
            s = Math.cos(r);
          return (
            (t[0] = a * s + e * i),
            (t[1] = e * s - a * i),
            (t[2] = u * s + o * i),
            (t[3] = o * s - u * i),
            t
          );
        }),
        (n.calculateW = function (t, n) {
          var r = n[0],
            a = n[1],
            e = n[2];
          return (
            (t[0] = r),
            (t[1] = a),
            (t[2] = e),
            (t[3] = Math.sqrt(Math.abs(1 - r * r - a * a - e * e))),
            t
          );
        }),
        (n.slerp = h),
        (n.invert = function (t, n) {
          var r = n[0],
            a = n[1],
            e = n[2],
            u = n[3],
            o = r * r + a * a + e * e + u * u,
            i = o ? 1 / o : 0;
          return (
            (t[0] = -r * i), (t[1] = -a * i), (t[2] = -e * i), (t[3] = u * i), t
          );
        }),
        (n.conjugate = function (t, n) {
          return (
            (t[0] = -n[0]), (t[1] = -n[1]), (t[2] = -n[2]), (t[3] = n[3]), t
          );
        }),
        (n.fromMat3 = M),
        (n.fromEuler = function (t, n, r, a) {
          var e = (0.5 * Math.PI) / 180;
          (n *= e), (r *= e), (a *= e);
          var u = Math.sin(n),
            o = Math.cos(n),
            i = Math.sin(r),
            s = Math.cos(r),
            c = Math.sin(a),
            f = Math.cos(a);
          return (
            (t[0] = u * s * f - o * i * c),
            (t[1] = o * i * f + u * s * c),
            (t[2] = o * s * c - u * i * f),
            (t[3] = o * s * f + u * i * c),
            t
          );
        }),
        (n.str = function (t) {
          return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
        });
      var a = i(r(0)),
        e = i(r(5)),
        u = i(r(2)),
        o = i(r(1));
      function i(t) {
        if (t && t.__esModule) return t;
        var n = {};
        if (null != t)
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return (n.default = t), n;
      }
      function s() {
        var t = new a.ARRAY_TYPE(4);
        return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), t;
      }
      function c(t, n, r) {
        r *= 0.5;
        var a = Math.sin(r);
        return (
          (t[0] = a * n[0]),
          (t[1] = a * n[1]),
          (t[2] = a * n[2]),
          (t[3] = Math.cos(r)),
          t
        );
      }
      function f(t, n, r) {
        var a = n[0],
          e = n[1],
          u = n[2],
          o = n[3],
          i = r[0],
          s = r[1],
          c = r[2],
          f = r[3];
        return (
          (t[0] = a * f + o * i + e * c - u * s),
          (t[1] = e * f + o * s + u * i - a * c),
          (t[2] = u * f + o * c + a * s - e * i),
          (t[3] = o * f - a * i - e * s - u * c),
          t
        );
      }
      function h(t, n, r, a) {
        var e = n[0],
          u = n[1],
          o = n[2],
          i = n[3],
          s = r[0],
          c = r[1],
          f = r[2],
          h = r[3],
          M = void 0,
          l = void 0,
          v = void 0,
          d = void 0,
          b = void 0;
        return (
          (l = e * s + u * c + o * f + i * h) < 0 &&
            ((l = -l), (s = -s), (c = -c), (f = -f), (h = -h)),
          1 - l > 1e-6
            ? ((M = Math.acos(l)),
              (v = Math.sin(M)),
              (d = Math.sin((1 - a) * M) / v),
              (b = Math.sin(a * M) / v))
            : ((d = 1 - a), (b = a)),
          (t[0] = d * e + b * s),
          (t[1] = d * u + b * c),
          (t[2] = d * o + b * f),
          (t[3] = d * i + b * h),
          t
        );
      }
      function M(t, n) {
        var r = n[0] + n[4] + n[8],
          a = void 0;
        if (r > 0)
          (a = Math.sqrt(r + 1)),
            (t[3] = 0.5 * a),
            (a = 0.5 / a),
            (t[0] = (n[5] - n[7]) * a),
            (t[1] = (n[6] - n[2]) * a),
            (t[2] = (n[1] - n[3]) * a);
        else {
          var e = 0;
          n[4] > n[0] && (e = 1), n[8] > n[3 * e + e] && (e = 2);
          var u = (e + 1) % 3,
            o = (e + 2) % 3;
          (a = Math.sqrt(n[3 * e + e] - n[3 * u + u] - n[3 * o + o] + 1)),
            (t[e] = 0.5 * a),
            (a = 0.5 / a),
            (t[3] = (n[3 * u + o] - n[3 * o + u]) * a),
            (t[u] = (n[3 * u + e] + n[3 * e + u]) * a),
            (t[o] = (n[3 * o + e] + n[3 * e + o]) * a);
        }
        return t;
      }
      (n.clone = o.clone),
        (n.fromValues = o.fromValues),
        (n.copy = o.copy),
        (n.set = o.set),
        (n.add = o.add),
        (n.mul = f),
        (n.scale = o.scale),
        (n.dot = o.dot),
        (n.lerp = o.lerp);
      var l,
        v,
        d,
        b,
        m,
        p,
        P = (n.length = o.length),
        E = ((n.len = P), (n.squaredLength = o.squaredLength)),
        O = ((n.sqrLen = E), (n.normalize = o.normalize));
      (n.exactEquals = o.exactEquals),
        (n.equals = o.equals),
        (n.rotationTo =
          ((l = u.create()),
          (v = u.fromValues(1, 0, 0)),
          (d = u.fromValues(0, 1, 0)),
          function (t, n, r) {
            var a = u.dot(n, r);
            return a < -0.999999
              ? (u.cross(l, v, n),
                u.len(l) < 1e-6 && u.cross(l, d, n),
                u.normalize(l, l),
                c(t, l, Math.PI),
                t)
              : a > 0.999999
              ? ((t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), t)
              : (u.cross(l, n, r),
                (t[0] = l[0]),
                (t[1] = l[1]),
                (t[2] = l[2]),
                (t[3] = 1 + a),
                O(t, t));
          })),
        (n.sqlerp =
          ((b = s()),
          (m = s()),
          function (t, n, r, a, e, u) {
            return h(b, n, e, u), h(m, r, a, u), h(t, b, m, 2 * u * (1 - u)), t;
          })),
        (n.setAxes =
          ((p = e.create()),
          function (t, n, r, a) {
            return (
              (p[0] = r[0]),
              (p[3] = r[1]),
              (p[6] = r[2]),
              (p[1] = a[0]),
              (p[4] = a[1]),
              (p[7] = a[2]),
              (p[2] = -n[0]),
              (p[5] = -n[1]),
              (p[8] = -n[2]),
              O(t, M(t, p))
            );
          }));
    },
    function (t, n, r) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.sub = n.mul = void 0),
        (n.create = function () {
          var t = new a.ARRAY_TYPE(16);
          return (
            (t[0] = 1),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = 0),
            (t[5] = 1),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = 0),
            (t[9] = 0),
            (t[10] = 1),
            (t[11] = 0),
            (t[12] = 0),
            (t[13] = 0),
            (t[14] = 0),
            (t[15] = 1),
            t
          );
        }),
        (n.clone = function (t) {
          var n = new a.ARRAY_TYPE(16);
          return (
            (n[0] = t[0]),
            (n[1] = t[1]),
            (n[2] = t[2]),
            (n[3] = t[3]),
            (n[4] = t[4]),
            (n[5] = t[5]),
            (n[6] = t[6]),
            (n[7] = t[7]),
            (n[8] = t[8]),
            (n[9] = t[9]),
            (n[10] = t[10]),
            (n[11] = t[11]),
            (n[12] = t[12]),
            (n[13] = t[13]),
            (n[14] = t[14]),
            (n[15] = t[15]),
            n
          );
        }),
        (n.copy = function (t, n) {
          return (
            (t[0] = n[0]),
            (t[1] = n[1]),
            (t[2] = n[2]),
            (t[3] = n[3]),
            (t[4] = n[4]),
            (t[5] = n[5]),
            (t[6] = n[6]),
            (t[7] = n[7]),
            (t[8] = n[8]),
            (t[9] = n[9]),
            (t[10] = n[10]),
            (t[11] = n[11]),
            (t[12] = n[12]),
            (t[13] = n[13]),
            (t[14] = n[14]),
            (t[15] = n[15]),
            t
          );
        }),
        (n.fromValues = function (
          t,
          n,
          r,
          e,
          u,
          o,
          i,
          s,
          c,
          f,
          h,
          M,
          l,
          v,
          d,
          b
        ) {
          var m = new a.ARRAY_TYPE(16);
          return (
            (m[0] = t),
            (m[1] = n),
            (m[2] = r),
            (m[3] = e),
            (m[4] = u),
            (m[5] = o),
            (m[6] = i),
            (m[7] = s),
            (m[8] = c),
            (m[9] = f),
            (m[10] = h),
            (m[11] = M),
            (m[12] = l),
            (m[13] = v),
            (m[14] = d),
            (m[15] = b),
            m
          );
        }),
        (n.set = function (t, n, r, a, e, u, o, i, s, c, f, h, M, l, v, d, b) {
          return (
            (t[0] = n),
            (t[1] = r),
            (t[2] = a),
            (t[3] = e),
            (t[4] = u),
            (t[5] = o),
            (t[6] = i),
            (t[7] = s),
            (t[8] = c),
            (t[9] = f),
            (t[10] = h),
            (t[11] = M),
            (t[12] = l),
            (t[13] = v),
            (t[14] = d),
            (t[15] = b),
            t
          );
        }),
        (n.identity = e),
        (n.transpose = function (t, n) {
          if (t === n) {
            var r = n[1],
              a = n[2],
              e = n[3],
              u = n[6],
              o = n[7],
              i = n[11];
            (t[1] = n[4]),
              (t[2] = n[8]),
              (t[3] = n[12]),
              (t[4] = r),
              (t[6] = n[9]),
              (t[7] = n[13]),
              (t[8] = a),
              (t[9] = u),
              (t[11] = n[14]),
              (t[12] = e),
              (t[13] = o),
              (t[14] = i);
          } else
            (t[0] = n[0]),
              (t[1] = n[4]),
              (t[2] = n[8]),
              (t[3] = n[12]),
              (t[4] = n[1]),
              (t[5] = n[5]),
              (t[6] = n[9]),
              (t[7] = n[13]),
              (t[8] = n[2]),
              (t[9] = n[6]),
              (t[10] = n[10]),
              (t[11] = n[14]),
              (t[12] = n[3]),
              (t[13] = n[7]),
              (t[14] = n[11]),
              (t[15] = n[15]);
          return t;
        }),
        (n.invert = function (t, n) {
          var r = n[0],
            a = n[1],
            e = n[2],
            u = n[3],
            o = n[4],
            i = n[5],
            s = n[6],
            c = n[7],
            f = n[8],
            h = n[9],
            M = n[10],
            l = n[11],
            v = n[12],
            d = n[13],
            b = n[14],
            m = n[15],
            p = r * i - a * o,
            P = r * s - e * o,
            E = r * c - u * o,
            O = a * s - e * i,
            A = a * c - u * i,
            q = e * c - u * s,
            x = f * d - h * v,
            R = f * b - M * v,
            y = f * m - l * v,
            L = h * b - M * d,
            w = h * m - l * d,
            _ = M * m - l * b,
            S = p * _ - P * w + E * L + O * y - A * R + q * x;
          if (!S) return null;
          return (
            (S = 1 / S),
            (t[0] = (i * _ - s * w + c * L) * S),
            (t[1] = (e * w - a * _ - u * L) * S),
            (t[2] = (d * q - b * A + m * O) * S),
            (t[3] = (M * A - h * q - l * O) * S),
            (t[4] = (s * y - o * _ - c * R) * S),
            (t[5] = (r * _ - e * y + u * R) * S),
            (t[6] = (b * E - v * q - m * P) * S),
            (t[7] = (f * q - M * E + l * P) * S),
            (t[8] = (o * w - i * y + c * x) * S),
            (t[9] = (a * y - r * w - u * x) * S),
            (t[10] = (v * A - d * E + m * p) * S),
            (t[11] = (h * E - f * A - l * p) * S),
            (t[12] = (i * R - o * L - s * x) * S),
            (t[13] = (r * L - a * R + e * x) * S),
            (t[14] = (d * P - v * O - b * p) * S),
            (t[15] = (f * O - h * P + M * p) * S),
            t
          );
        }),
        (n.adjoint = function (t, n) {
          var r = n[0],
            a = n[1],
            e = n[2],
            u = n[3],
            o = n[4],
            i = n[5],
            s = n[6],
            c = n[7],
            f = n[8],
            h = n[9],
            M = n[10],
            l = n[11],
            v = n[12],
            d = n[13],
            b = n[14],
            m = n[15];
          return (
            (t[0] =
              i * (M * m - l * b) - h * (s * m - c * b) + d * (s * l - c * M)),
            (t[1] = -(
              a * (M * m - l * b) -
              h * (e * m - u * b) +
              d * (e * l - u * M)
            )),
            (t[2] =
              a * (s * m - c * b) - i * (e * m - u * b) + d * (e * c - u * s)),
            (t[3] = -(
              a * (s * l - c * M) -
              i * (e * l - u * M) +
              h * (e * c - u * s)
            )),
            (t[4] = -(
              o * (M * m - l * b) -
              f * (s * m - c * b) +
              v * (s * l - c * M)
            )),
            (t[5] =
              r * (M * m - l * b) - f * (e * m - u * b) + v * (e * l - u * M)),
            (t[6] = -(
              r * (s * m - c * b) -
              o * (e * m - u * b) +
              v * (e * c - u * s)
            )),
            (t[7] =
              r * (s * l - c * M) - o * (e * l - u * M) + f * (e * c - u * s)),
            (t[8] =
              o * (h * m - l * d) - f * (i * m - c * d) + v * (i * l - c * h)),
            (t[9] = -(
              r * (h * m - l * d) -
              f * (a * m - u * d) +
              v * (a * l - u * h)
            )),
            (t[10] =
              r * (i * m - c * d) - o * (a * m - u * d) + v * (a * c - u * i)),
            (t[11] = -(
              r * (i * l - c * h) -
              o * (a * l - u * h) +
              f * (a * c - u * i)
            )),
            (t[12] = -(
              o * (h * b - M * d) -
              f * (i * b - s * d) +
              v * (i * M - s * h)
            )),
            (t[13] =
              r * (h * b - M * d) - f * (a * b - e * d) + v * (a * M - e * h)),
            (t[14] = -(
              r * (i * b - s * d) -
              o * (a * b - e * d) +
              v * (a * s - e * i)
            )),
            (t[15] =
              r * (i * M - s * h) - o * (a * M - e * h) + f * (a * s - e * i)),
            t
          );
        }),
        (n.determinant = function (t) {
          var n = t[0],
            r = t[1],
            a = t[2],
            e = t[3],
            u = t[4],
            o = t[5],
            i = t[6],
            s = t[7],
            c = t[8],
            f = t[9],
            h = t[10],
            M = t[11],
            l = t[12],
            v = t[13],
            d = t[14],
            b = t[15];
          return (
            (n * o - r * u) * (h * b - M * d) -
            (n * i - a * u) * (f * b - M * v) +
            (n * s - e * u) * (f * d - h * v) +
            (r * i - a * o) * (c * b - M * l) -
            (r * s - e * o) * (c * d - h * l) +
            (a * s - e * i) * (c * v - f * l)
          );
        }),
        (n.multiply = u),
        (n.translate = function (t, n, r) {
          var a = r[0],
            e = r[1],
            u = r[2],
            o = void 0,
            i = void 0,
            s = void 0,
            c = void 0,
            f = void 0,
            h = void 0,
            M = void 0,
            l = void 0,
            v = void 0,
            d = void 0,
            b = void 0,
            m = void 0;
          n === t
            ? ((t[12] = n[0] * a + n[4] * e + n[8] * u + n[12]),
              (t[13] = n[1] * a + n[5] * e + n[9] * u + n[13]),
              (t[14] = n[2] * a + n[6] * e + n[10] * u + n[14]),
              (t[15] = n[3] * a + n[7] * e + n[11] * u + n[15]))
            : ((o = n[0]),
              (i = n[1]),
              (s = n[2]),
              (c = n[3]),
              (f = n[4]),
              (h = n[5]),
              (M = n[6]),
              (l = n[7]),
              (v = n[8]),
              (d = n[9]),
              (b = n[10]),
              (m = n[11]),
              (t[0] = o),
              (t[1] = i),
              (t[2] = s),
              (t[3] = c),
              (t[4] = f),
              (t[5] = h),
              (t[6] = M),
              (t[7] = l),
              (t[8] = v),
              (t[9] = d),
              (t[10] = b),
              (t[11] = m),
              (t[12] = o * a + f * e + v * u + n[12]),
              (t[13] = i * a + h * e + d * u + n[13]),
              (t[14] = s * a + M * e + b * u + n[14]),
              (t[15] = c * a + l * e + m * u + n[15]));
          return t;
        }),
        (n.scale = function (t, n, r) {
          var a = r[0],
            e = r[1],
            u = r[2];
          return (
            (t[0] = n[0] * a),
            (t[1] = n[1] * a),
            (t[2] = n[2] * a),
            (t[3] = n[3] * a),
            (t[4] = n[4] * e),
            (t[5] = n[5] * e),
            (t[6] = n[6] * e),
            (t[7] = n[7] * e),
            (t[8] = n[8] * u),
            (t[9] = n[9] * u),
            (t[10] = n[10] * u),
            (t[11] = n[11] * u),
            (t[12] = n[12]),
            (t[13] = n[13]),
            (t[14] = n[14]),
            (t[15] = n[15]),
            t
          );
        }),
        (n.rotate = function (t, n, r, e) {
          var u = e[0],
            o = e[1],
            i = e[2],
            s = Math.sqrt(u * u + o * o + i * i),
            c = void 0,
            f = void 0,
            h = void 0,
            M = void 0,
            l = void 0,
            v = void 0,
            d = void 0,
            b = void 0,
            m = void 0,
            p = void 0,
            P = void 0,
            E = void 0,
            O = void 0,
            A = void 0,
            q = void 0,
            x = void 0,
            R = void 0,
            y = void 0,
            L = void 0,
            w = void 0,
            _ = void 0,
            S = void 0,
            I = void 0,
            N = void 0;
          if (s < a.EPSILON) return null;
          (u *= s = 1 / s),
            (o *= s),
            (i *= s),
            (c = Math.sin(r)),
            (f = Math.cos(r)),
            (h = 1 - f),
            (M = n[0]),
            (l = n[1]),
            (v = n[2]),
            (d = n[3]),
            (b = n[4]),
            (m = n[5]),
            (p = n[6]),
            (P = n[7]),
            (E = n[8]),
            (O = n[9]),
            (A = n[10]),
            (q = n[11]),
            (x = u * u * h + f),
            (R = o * u * h + i * c),
            (y = i * u * h - o * c),
            (L = u * o * h - i * c),
            (w = o * o * h + f),
            (_ = i * o * h + u * c),
            (S = u * i * h + o * c),
            (I = o * i * h - u * c),
            (N = i * i * h + f),
            (t[0] = M * x + b * R + E * y),
            (t[1] = l * x + m * R + O * y),
            (t[2] = v * x + p * R + A * y),
            (t[3] = d * x + P * R + q * y),
            (t[4] = M * L + b * w + E * _),
            (t[5] = l * L + m * w + O * _),
            (t[6] = v * L + p * w + A * _),
            (t[7] = d * L + P * w + q * _),
            (t[8] = M * S + b * I + E * N),
            (t[9] = l * S + m * I + O * N),
            (t[10] = v * S + p * I + A * N),
            (t[11] = d * S + P * I + q * N),
            n !== t &&
              ((t[12] = n[12]),
              (t[13] = n[13]),
              (t[14] = n[14]),
              (t[15] = n[15]));
          return t;
        }),
        (n.rotateX = function (t, n, r) {
          var a = Math.sin(r),
            e = Math.cos(r),
            u = n[4],
            o = n[5],
            i = n[6],
            s = n[7],
            c = n[8],
            f = n[9],
            h = n[10],
            M = n[11];
          n !== t &&
            ((t[0] = n[0]),
            (t[1] = n[1]),
            (t[2] = n[2]),
            (t[3] = n[3]),
            (t[12] = n[12]),
            (t[13] = n[13]),
            (t[14] = n[14]),
            (t[15] = n[15]));
          return (
            (t[4] = u * e + c * a),
            (t[5] = o * e + f * a),
            (t[6] = i * e + h * a),
            (t[7] = s * e + M * a),
            (t[8] = c * e - u * a),
            (t[9] = f * e - o * a),
            (t[10] = h * e - i * a),
            (t[11] = M * e - s * a),
            t
          );
        }),
        (n.rotateY = function (t, n, r) {
          var a = Math.sin(r),
            e = Math.cos(r),
            u = n[0],
            o = n[1],
            i = n[2],
            s = n[3],
            c = n[8],
            f = n[9],
            h = n[10],
            M = n[11];
          n !== t &&
            ((t[4] = n[4]),
            (t[5] = n[5]),
            (t[6] = n[6]),
            (t[7] = n[7]),
            (t[12] = n[12]),
            (t[13] = n[13]),
            (t[14] = n[14]),
            (t[15] = n[15]));
          return (
            (t[0] = u * e - c * a),
            (t[1] = o * e - f * a),
            (t[2] = i * e - h * a),
            (t[3] = s * e - M * a),
            (t[8] = u * a + c * e),
            (t[9] = o * a + f * e),
            (t[10] = i * a + h * e),
            (t[11] = s * a + M * e),
            t
          );
        }),
        (n.rotateZ = function (t, n, r) {
          var a = Math.sin(r),
            e = Math.cos(r),
            u = n[0],
            o = n[1],
            i = n[2],
            s = n[3],
            c = n[4],
            f = n[5],
            h = n[6],
            M = n[7];
          n !== t &&
            ((t[8] = n[8]),
            (t[9] = n[9]),
            (t[10] = n[10]),
            (t[11] = n[11]),
            (t[12] = n[12]),
            (t[13] = n[13]),
            (t[14] = n[14]),
            (t[15] = n[15]));
          return (
            (t[0] = u * e + c * a),
            (t[1] = o * e + f * a),
            (t[2] = i * e + h * a),
            (t[3] = s * e + M * a),
            (t[4] = c * e - u * a),
            (t[5] = f * e - o * a),
            (t[6] = h * e - i * a),
            (t[7] = M * e - s * a),
            t
          );
        }),
        (n.fromTranslation = function (t, n) {
          return (
            (t[0] = 1),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = 0),
            (t[5] = 1),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = 0),
            (t[9] = 0),
            (t[10] = 1),
            (t[11] = 0),
            (t[12] = n[0]),
            (t[13] = n[1]),
            (t[14] = n[2]),
            (t[15] = 1),
            t
          );
        }),
        (n.fromScaling = function (t, n) {
          return (
            (t[0] = n[0]),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = 0),
            (t[5] = n[1]),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = 0),
            (t[9] = 0),
            (t[10] = n[2]),
            (t[11] = 0),
            (t[12] = 0),
            (t[13] = 0),
            (t[14] = 0),
            (t[15] = 1),
            t
          );
        }),
        (n.fromRotation = function (t, n, r) {
          var e = r[0],
            u = r[1],
            o = r[2],
            i = Math.sqrt(e * e + u * u + o * o),
            s = void 0,
            c = void 0,
            f = void 0;
          if (i < a.EPSILON) return null;
          return (
            (e *= i = 1 / i),
            (u *= i),
            (o *= i),
            (s = Math.sin(n)),
            (c = Math.cos(n)),
            (f = 1 - c),
            (t[0] = e * e * f + c),
            (t[1] = u * e * f + o * s),
            (t[2] = o * e * f - u * s),
            (t[3] = 0),
            (t[4] = e * u * f - o * s),
            (t[5] = u * u * f + c),
            (t[6] = o * u * f + e * s),
            (t[7] = 0),
            (t[8] = e * o * f + u * s),
            (t[9] = u * o * f - e * s),
            (t[10] = o * o * f + c),
            (t[11] = 0),
            (t[12] = 0),
            (t[13] = 0),
            (t[14] = 0),
            (t[15] = 1),
            t
          );
        }),
        (n.fromXRotation = function (t, n) {
          var r = Math.sin(n),
            a = Math.cos(n);
          return (
            (t[0] = 1),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = 0),
            (t[5] = a),
            (t[6] = r),
            (t[7] = 0),
            (t[8] = 0),
            (t[9] = -r),
            (t[10] = a),
            (t[11] = 0),
            (t[12] = 0),
            (t[13] = 0),
            (t[14] = 0),
            (t[15] = 1),
            t
          );
        }),
        (n.fromYRotation = function (t, n) {
          var r = Math.sin(n),
            a = Math.cos(n);
          return (
            (t[0] = a),
            (t[1] = 0),
            (t[2] = -r),
            (t[3] = 0),
            (t[4] = 0),
            (t[5] = 1),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = r),
            (t[9] = 0),
            (t[10] = a),
            (t[11] = 0),
            (t[12] = 0),
            (t[13] = 0),
            (t[14] = 0),
            (t[15] = 1),
            t
          );
        }),
        (n.fromZRotation = function (t, n) {
          var r = Math.sin(n),
            a = Math.cos(n);
          return (
            (t[0] = a),
            (t[1] = r),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = -r),
            (t[5] = a),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = 0),
            (t[9] = 0),
            (t[10] = 1),
            (t[11] = 0),
            (t[12] = 0),
            (t[13] = 0),
            (t[14] = 0),
            (t[15] = 1),
            t
          );
        }),
        (n.fromRotationTranslation = o),
        (n.fromQuat2 = function (t, n) {
          var r = new a.ARRAY_TYPE(3),
            e = -n[0],
            u = -n[1],
            i = -n[2],
            s = n[3],
            c = n[4],
            f = n[5],
            h = n[6],
            M = n[7],
            l = e * e + u * u + i * i + s * s;
          l > 0
            ? ((r[0] = (2 * (c * s + M * e + f * i - h * u)) / l),
              (r[1] = (2 * (f * s + M * u + h * e - c * i)) / l),
              (r[2] = (2 * (h * s + M * i + c * u - f * e)) / l))
            : ((r[0] = 2 * (c * s + M * e + f * i - h * u)),
              (r[1] = 2 * (f * s + M * u + h * e - c * i)),
              (r[2] = 2 * (h * s + M * i + c * u - f * e)));
          return o(t, n, r), t;
        }),
        (n.getTranslation = function (t, n) {
          return (t[0] = n[12]), (t[1] = n[13]), (t[2] = n[14]), t;
        }),
        (n.getScaling = function (t, n) {
          var r = n[0],
            a = n[1],
            e = n[2],
            u = n[4],
            o = n[5],
            i = n[6],
            s = n[8],
            c = n[9],
            f = n[10];
          return (
            (t[0] = Math.sqrt(r * r + a * a + e * e)),
            (t[1] = Math.sqrt(u * u + o * o + i * i)),
            (t[2] = Math.sqrt(s * s + c * c + f * f)),
            t
          );
        }),
        (n.getRotation = function (t, n) {
          var r = n[0] + n[5] + n[10],
            a = 0;
          r > 0
            ? ((a = 2 * Math.sqrt(r + 1)),
              (t[3] = 0.25 * a),
              (t[0] = (n[6] - n[9]) / a),
              (t[1] = (n[8] - n[2]) / a),
              (t[2] = (n[1] - n[4]) / a))
            : n[0] > n[5] && n[0] > n[10]
            ? ((a = 2 * Math.sqrt(1 + n[0] - n[5] - n[10])),
              (t[3] = (n[6] - n[9]) / a),
              (t[0] = 0.25 * a),
              (t[1] = (n[1] + n[4]) / a),
              (t[2] = (n[8] + n[2]) / a))
            : n[5] > n[10]
            ? ((a = 2 * Math.sqrt(1 + n[5] - n[0] - n[10])),
              (t[3] = (n[8] - n[2]) / a),
              (t[0] = (n[1] + n[4]) / a),
              (t[1] = 0.25 * a),
              (t[2] = (n[6] + n[9]) / a))
            : ((a = 2 * Math.sqrt(1 + n[10] - n[0] - n[5])),
              (t[3] = (n[1] - n[4]) / a),
              (t[0] = (n[8] + n[2]) / a),
              (t[1] = (n[6] + n[9]) / a),
              (t[2] = 0.25 * a));
          return t;
        }),
        (n.fromRotationTranslationScale = function (t, n, r, a) {
          var e = n[0],
            u = n[1],
            o = n[2],
            i = n[3],
            s = e + e,
            c = u + u,
            f = o + o,
            h = e * s,
            M = e * c,
            l = e * f,
            v = u * c,
            d = u * f,
            b = o * f,
            m = i * s,
            p = i * c,
            P = i * f,
            E = a[0],
            O = a[1],
            A = a[2];
          return (
            (t[0] = (1 - (v + b)) * E),
            (t[1] = (M + P) * E),
            (t[2] = (l - p) * E),
            (t[3] = 0),
            (t[4] = (M - P) * O),
            (t[5] = (1 - (h + b)) * O),
            (t[6] = (d + m) * O),
            (t[7] = 0),
            (t[8] = (l + p) * A),
            (t[9] = (d - m) * A),
            (t[10] = (1 - (h + v)) * A),
            (t[11] = 0),
            (t[12] = r[0]),
            (t[13] = r[1]),
            (t[14] = r[2]),
            (t[15] = 1),
            t
          );
        }),
        (n.fromRotationTranslationScaleOrigin = function (t, n, r, a, e) {
          var u = n[0],
            o = n[1],
            i = n[2],
            s = n[3],
            c = u + u,
            f = o + o,
            h = i + i,
            M = u * c,
            l = u * f,
            v = u * h,
            d = o * f,
            b = o * h,
            m = i * h,
            p = s * c,
            P = s * f,
            E = s * h,
            O = a[0],
            A = a[1],
            q = a[2],
            x = e[0],
            R = e[1],
            y = e[2],
            L = (1 - (d + m)) * O,
            w = (l + E) * O,
            _ = (v - P) * O,
            S = (l - E) * A,
            I = (1 - (M + m)) * A,
            N = (b + p) * A,
            Y = (v + P) * q,
            g = (b - p) * q,
            T = (1 - (M + d)) * q;
          return (
            (t[0] = L),
            (t[1] = w),
            (t[2] = _),
            (t[3] = 0),
            (t[4] = S),
            (t[5] = I),
            (t[6] = N),
            (t[7] = 0),
            (t[8] = Y),
            (t[9] = g),
            (t[10] = T),
            (t[11] = 0),
            (t[12] = r[0] + x - (L * x + S * R + Y * y)),
            (t[13] = r[1] + R - (w * x + I * R + g * y)),
            (t[14] = r[2] + y - (_ * x + N * R + T * y)),
            (t[15] = 1),
            t
          );
        }),
        (n.fromQuat = function (t, n) {
          var r = n[0],
            a = n[1],
            e = n[2],
            u = n[3],
            o = r + r,
            i = a + a,
            s = e + e,
            c = r * o,
            f = a * o,
            h = a * i,
            M = e * o,
            l = e * i,
            v = e * s,
            d = u * o,
            b = u * i,
            m = u * s;
          return (
            (t[0] = 1 - h - v),
            (t[1] = f + m),
            (t[2] = M - b),
            (t[3] = 0),
            (t[4] = f - m),
            (t[5] = 1 - c - v),
            (t[6] = l + d),
            (t[7] = 0),
            (t[8] = M + b),
            (t[9] = l - d),
            (t[10] = 1 - c - h),
            (t[11] = 0),
            (t[12] = 0),
            (t[13] = 0),
            (t[14] = 0),
            (t[15] = 1),
            t
          );
        }),
        (n.frustum = function (t, n, r, a, e, u, o) {
          var i = 1 / (r - n),
            s = 1 / (e - a),
            c = 1 / (u - o);
          return (
            (t[0] = 2 * u * i),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = 0),
            (t[5] = 2 * u * s),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = (r + n) * i),
            (t[9] = (e + a) * s),
            (t[10] = (o + u) * c),
            (t[11] = -1),
            (t[12] = 0),
            (t[13] = 0),
            (t[14] = o * u * 2 * c),
            (t[15] = 0),
            t
          );
        }),
        (n.perspective = function (t, n, r, a, e) {
          var u = 1 / Math.tan(n / 2),
            o = 1 / (a - e);
          return (
            (t[0] = u / r),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = 0),
            (t[5] = u),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = 0),
            (t[9] = 0),
            (t[10] = (e + a) * o),
            (t[11] = -1),
            (t[12] = 0),
            (t[13] = 0),
            (t[14] = 2 * e * a * o),
            (t[15] = 0),
            t
          );
        }),
        (n.perspectiveFromFieldOfView = function (t, n, r, a) {
          var e = Math.tan((n.upDegrees * Math.PI) / 180),
            u = Math.tan((n.downDegrees * Math.PI) / 180),
            o = Math.tan((n.leftDegrees * Math.PI) / 180),
            i = Math.tan((n.rightDegrees * Math.PI) / 180),
            s = 2 / (o + i),
            c = 2 / (e + u);
          return (
            (t[0] = s),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = 0),
            (t[5] = c),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = -(o - i) * s * 0.5),
            (t[9] = (e - u) * c * 0.5),
            (t[10] = a / (r - a)),
            (t[11] = -1),
            (t[12] = 0),
            (t[13] = 0),
            (t[14] = (a * r) / (r - a)),
            (t[15] = 0),
            t
          );
        }),
        (n.ortho = function (t, n, r, a, e, u, o) {
          var i = 1 / (n - r),
            s = 1 / (a - e),
            c = 1 / (u - o);
          return (
            (t[0] = -2 * i),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = 0),
            (t[5] = -2 * s),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = 0),
            (t[9] = 0),
            (t[10] = 2 * c),
            (t[11] = 0),
            (t[12] = (n + r) * i),
            (t[13] = (e + a) * s),
            (t[14] = (o + u) * c),
            (t[15] = 1),
            t
          );
        }),
        (n.lookAt = function (t, n, r, u) {
          var o = void 0,
            i = void 0,
            s = void 0,
            c = void 0,
            f = void 0,
            h = void 0,
            M = void 0,
            l = void 0,
            v = void 0,
            d = void 0,
            b = n[0],
            m = n[1],
            p = n[2],
            P = u[0],
            E = u[1],
            O = u[2],
            A = r[0],
            q = r[1],
            x = r[2];
          if (
            Math.abs(b - A) < a.EPSILON &&
            Math.abs(m - q) < a.EPSILON &&
            Math.abs(p - x) < a.EPSILON
          )
            return e(t);
          (M = b - A),
            (l = m - q),
            (v = p - x),
            (d = 1 / Math.sqrt(M * M + l * l + v * v)),
            (o = E * (v *= d) - O * (l *= d)),
            (i = O * (M *= d) - P * v),
            (s = P * l - E * M),
            (d = Math.sqrt(o * o + i * i + s * s))
              ? ((o *= d = 1 / d), (i *= d), (s *= d))
              : ((o = 0), (i = 0), (s = 0));
          (c = l * s - v * i),
            (f = v * o - M * s),
            (h = M * i - l * o),
            (d = Math.sqrt(c * c + f * f + h * h))
              ? ((c *= d = 1 / d), (f *= d), (h *= d))
              : ((c = 0), (f = 0), (h = 0));
          return (
            (t[0] = o),
            (t[1] = c),
            (t[2] = M),
            (t[3] = 0),
            (t[4] = i),
            (t[5] = f),
            (t[6] = l),
            (t[7] = 0),
            (t[8] = s),
            (t[9] = h),
            (t[10] = v),
            (t[11] = 0),
            (t[12] = -(o * b + i * m + s * p)),
            (t[13] = -(c * b + f * m + h * p)),
            (t[14] = -(M * b + l * m + v * p)),
            (t[15] = 1),
            t
          );
        }),
        (n.targetTo = function (t, n, r, a) {
          var e = n[0],
            u = n[1],
            o = n[2],
            i = a[0],
            s = a[1],
            c = a[2],
            f = e - r[0],
            h = u - r[1],
            M = o - r[2],
            l = f * f + h * h + M * M;
          l > 0 && ((l = 1 / Math.sqrt(l)), (f *= l), (h *= l), (M *= l));
          var v = s * M - c * h,
            d = c * f - i * M,
            b = i * h - s * f;
          (l = v * v + d * d + b * b) > 0 &&
            ((l = 1 / Math.sqrt(l)), (v *= l), (d *= l), (b *= l));
          return (
            (t[0] = v),
            (t[1] = d),
            (t[2] = b),
            (t[3] = 0),
            (t[4] = h * b - M * d),
            (t[5] = M * v - f * b),
            (t[6] = f * d - h * v),
            (t[7] = 0),
            (t[8] = f),
            (t[9] = h),
            (t[10] = M),
            (t[11] = 0),
            (t[12] = e),
            (t[13] = u),
            (t[14] = o),
            (t[15] = 1),
            t
          );
        }),
        (n.str = function (t) {
          return (
            "mat4(" +
            t[0] +
            ", " +
            t[1] +
            ", " +
            t[2] +
            ", " +
            t[3] +
            ", " +
            t[4] +
            ", " +
            t[5] +
            ", " +
            t[6] +
            ", " +
            t[7] +
            ", " +
            t[8] +
            ", " +
            t[9] +
            ", " +
            t[10] +
            ", " +
            t[11] +
            ", " +
            t[12] +
            ", " +
            t[13] +
            ", " +
            t[14] +
            ", " +
            t[15] +
            ")"
          );
        }),
        (n.frob = function (t) {
          return Math.sqrt(
            Math.pow(t[0], 2) +
              Math.pow(t[1], 2) +
              Math.pow(t[2], 2) +
              Math.pow(t[3], 2) +
              Math.pow(t[4], 2) +
              Math.pow(t[5], 2) +
              Math.pow(t[6], 2) +
              Math.pow(t[7], 2) +
              Math.pow(t[8], 2) +
              Math.pow(t[9], 2) +
              Math.pow(t[10], 2) +
              Math.pow(t[11], 2) +
              Math.pow(t[12], 2) +
              Math.pow(t[13], 2) +
              Math.pow(t[14], 2) +
              Math.pow(t[15], 2)
          );
        }),
        (n.add = function (t, n, r) {
          return (
            (t[0] = n[0] + r[0]),
            (t[1] = n[1] + r[1]),
            (t[2] = n[2] + r[2]),
            (t[3] = n[3] + r[3]),
            (t[4] = n[4] + r[4]),
            (t[5] = n[5] + r[5]),
            (t[6] = n[6] + r[6]),
            (t[7] = n[7] + r[7]),
            (t[8] = n[8] + r[8]),
            (t[9] = n[9] + r[9]),
            (t[10] = n[10] + r[10]),
            (t[11] = n[11] + r[11]),
            (t[12] = n[12] + r[12]),
            (t[13] = n[13] + r[13]),
            (t[14] = n[14] + r[14]),
            (t[15] = n[15] + r[15]),
            t
          );
        }),
        (n.subtract = i),
        (n.multiplyScalar = function (t, n, r) {
          return (
            (t[0] = n[0] * r),
            (t[1] = n[1] * r),
            (t[2] = n[2] * r),
            (t[3] = n[3] * r),
            (t[4] = n[4] * r),
            (t[5] = n[5] * r),
            (t[6] = n[6] * r),
            (t[7] = n[7] * r),
            (t[8] = n[8] * r),
            (t[9] = n[9] * r),
            (t[10] = n[10] * r),
            (t[11] = n[11] * r),
            (t[12] = n[12] * r),
            (t[13] = n[13] * r),
            (t[14] = n[14] * r),
            (t[15] = n[15] * r),
            t
          );
        }),
        (n.multiplyScalarAndAdd = function (t, n, r, a) {
          return (
            (t[0] = n[0] + r[0] * a),
            (t[1] = n[1] + r[1] * a),
            (t[2] = n[2] + r[2] * a),
            (t[3] = n[3] + r[3] * a),
            (t[4] = n[4] + r[4] * a),
            (t[5] = n[5] + r[5] * a),
            (t[6] = n[6] + r[6] * a),
            (t[7] = n[7] + r[7] * a),
            (t[8] = n[8] + r[8] * a),
            (t[9] = n[9] + r[9] * a),
            (t[10] = n[10] + r[10] * a),
            (t[11] = n[11] + r[11] * a),
            (t[12] = n[12] + r[12] * a),
            (t[13] = n[13] + r[13] * a),
            (t[14] = n[14] + r[14] * a),
            (t[15] = n[15] + r[15] * a),
            t
          );
        }),
        (n.exactEquals = function (t, n) {
          return (
            t[0] === n[0] &&
            t[1] === n[1] &&
            t[2] === n[2] &&
            t[3] === n[3] &&
            t[4] === n[4] &&
            t[5] === n[5] &&
            t[6] === n[6] &&
            t[7] === n[7] &&
            t[8] === n[8] &&
            t[9] === n[9] &&
            t[10] === n[10] &&
            t[11] === n[11] &&
            t[12] === n[12] &&
            t[13] === n[13] &&
            t[14] === n[14] &&
            t[15] === n[15]
          );
        }),
        (n.equals = function (t, n) {
          var r = t[0],
            e = t[1],
            u = t[2],
            o = t[3],
            i = t[4],
            s = t[5],
            c = t[6],
            f = t[7],
            h = t[8],
            M = t[9],
            l = t[10],
            v = t[11],
            d = t[12],
            b = t[13],
            m = t[14],
            p = t[15],
            P = n[0],
            E = n[1],
            O = n[2],
            A = n[3],
            q = n[4],
            x = n[5],
            R = n[6],
            y = n[7],
            L = n[8],
            w = n[9],
            _ = n[10],
            S = n[11],
            I = n[12],
            N = n[13],
            Y = n[14],
            g = n[15];
          return (
            Math.abs(r - P) <=
              a.EPSILON * Math.max(1, Math.abs(r), Math.abs(P)) &&
            Math.abs(e - E) <=
              a.EPSILON * Math.max(1, Math.abs(e), Math.abs(E)) &&
            Math.abs(u - O) <=
              a.EPSILON * Math.max(1, Math.abs(u), Math.abs(O)) &&
            Math.abs(o - A) <=
              a.EPSILON * Math.max(1, Math.abs(o), Math.abs(A)) &&
            Math.abs(i - q) <=
              a.EPSILON * Math.max(1, Math.abs(i), Math.abs(q)) &&
            Math.abs(s - x) <=
              a.EPSILON * Math.max(1, Math.abs(s), Math.abs(x)) &&
            Math.abs(c - R) <=
              a.EPSILON * Math.max(1, Math.abs(c), Math.abs(R)) &&
            Math.abs(f - y) <=
              a.EPSILON * Math.max(1, Math.abs(f), Math.abs(y)) &&
            Math.abs(h - L) <=
              a.EPSILON * Math.max(1, Math.abs(h), Math.abs(L)) &&
            Math.abs(M - w) <=
              a.EPSILON * Math.max(1, Math.abs(M), Math.abs(w)) &&
            Math.abs(l - _) <=
              a.EPSILON * Math.max(1, Math.abs(l), Math.abs(_)) &&
            Math.abs(v - S) <=
              a.EPSILON * Math.max(1, Math.abs(v), Math.abs(S)) &&
            Math.abs(d - I) <=
              a.EPSILON * Math.max(1, Math.abs(d), Math.abs(I)) &&
            Math.abs(b - N) <=
              a.EPSILON * Math.max(1, Math.abs(b), Math.abs(N)) &&
            Math.abs(m - Y) <=
              a.EPSILON * Math.max(1, Math.abs(m), Math.abs(Y)) &&
            Math.abs(p - g) <= a.EPSILON * Math.max(1, Math.abs(p), Math.abs(g))
          );
        });
      var a = (function (t) {
        if (t && t.__esModule) return t;
        var n = {};
        if (null != t)
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return (n.default = t), n;
      })(r(0));
      function e(t) {
        return (
          (t[0] = 1),
          (t[1] = 0),
          (t[2] = 0),
          (t[3] = 0),
          (t[4] = 0),
          (t[5] = 1),
          (t[6] = 0),
          (t[7] = 0),
          (t[8] = 0),
          (t[9] = 0),
          (t[10] = 1),
          (t[11] = 0),
          (t[12] = 0),
          (t[13] = 0),
          (t[14] = 0),
          (t[15] = 1),
          t
        );
      }
      function u(t, n, r) {
        var a = n[0],
          e = n[1],
          u = n[2],
          o = n[3],
          i = n[4],
          s = n[5],
          c = n[6],
          f = n[7],
          h = n[8],
          M = n[9],
          l = n[10],
          v = n[11],
          d = n[12],
          b = n[13],
          m = n[14],
          p = n[15],
          P = r[0],
          E = r[1],
          O = r[2],
          A = r[3];
        return (
          (t[0] = P * a + E * i + O * h + A * d),
          (t[1] = P * e + E * s + O * M + A * b),
          (t[2] = P * u + E * c + O * l + A * m),
          (t[3] = P * o + E * f + O * v + A * p),
          (P = r[4]),
          (E = r[5]),
          (O = r[6]),
          (A = r[7]),
          (t[4] = P * a + E * i + O * h + A * d),
          (t[5] = P * e + E * s + O * M + A * b),
          (t[6] = P * u + E * c + O * l + A * m),
          (t[7] = P * o + E * f + O * v + A * p),
          (P = r[8]),
          (E = r[9]),
          (O = r[10]),
          (A = r[11]),
          (t[8] = P * a + E * i + O * h + A * d),
          (t[9] = P * e + E * s + O * M + A * b),
          (t[10] = P * u + E * c + O * l + A * m),
          (t[11] = P * o + E * f + O * v + A * p),
          (P = r[12]),
          (E = r[13]),
          (O = r[14]),
          (A = r[15]),
          (t[12] = P * a + E * i + O * h + A * d),
          (t[13] = P * e + E * s + O * M + A * b),
          (t[14] = P * u + E * c + O * l + A * m),
          (t[15] = P * o + E * f + O * v + A * p),
          t
        );
      }
      function o(t, n, r) {
        var a = n[0],
          e = n[1],
          u = n[2],
          o = n[3],
          i = a + a,
          s = e + e,
          c = u + u,
          f = a * i,
          h = a * s,
          M = a * c,
          l = e * s,
          v = e * c,
          d = u * c,
          b = o * i,
          m = o * s,
          p = o * c;
        return (
          (t[0] = 1 - (l + d)),
          (t[1] = h + p),
          (t[2] = M - m),
          (t[3] = 0),
          (t[4] = h - p),
          (t[5] = 1 - (f + d)),
          (t[6] = v + b),
          (t[7] = 0),
          (t[8] = M + m),
          (t[9] = v - b),
          (t[10] = 1 - (f + l)),
          (t[11] = 0),
          (t[12] = r[0]),
          (t[13] = r[1]),
          (t[14] = r[2]),
          (t[15] = 1),
          t
        );
      }
      function i(t, n, r) {
        return (
          (t[0] = n[0] - r[0]),
          (t[1] = n[1] - r[1]),
          (t[2] = n[2] - r[2]),
          (t[3] = n[3] - r[3]),
          (t[4] = n[4] - r[4]),
          (t[5] = n[5] - r[5]),
          (t[6] = n[6] - r[6]),
          (t[7] = n[7] - r[7]),
          (t[8] = n[8] - r[8]),
          (t[9] = n[9] - r[9]),
          (t[10] = n[10] - r[10]),
          (t[11] = n[11] - r[11]),
          (t[12] = n[12] - r[12]),
          (t[13] = n[13] - r[13]),
          (t[14] = n[14] - r[14]),
          (t[15] = n[15] - r[15]),
          t
        );
      }
      (n.mul = u), (n.sub = i);
    },
    function (t, n, r) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.sub = n.mul = void 0),
        (n.create = function () {
          var t = new a.ARRAY_TYPE(9);
          return (
            (t[0] = 1),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = 1),
            (t[5] = 0),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = 1),
            t
          );
        }),
        (n.fromMat4 = function (t, n) {
          return (
            (t[0] = n[0]),
            (t[1] = n[1]),
            (t[2] = n[2]),
            (t[3] = n[4]),
            (t[4] = n[5]),
            (t[5] = n[6]),
            (t[6] = n[8]),
            (t[7] = n[9]),
            (t[8] = n[10]),
            t
          );
        }),
        (n.clone = function (t) {
          var n = new a.ARRAY_TYPE(9);
          return (
            (n[0] = t[0]),
            (n[1] = t[1]),
            (n[2] = t[2]),
            (n[3] = t[3]),
            (n[4] = t[4]),
            (n[5] = t[5]),
            (n[6] = t[6]),
            (n[7] = t[7]),
            (n[8] = t[8]),
            n
          );
        }),
        (n.copy = function (t, n) {
          return (
            (t[0] = n[0]),
            (t[1] = n[1]),
            (t[2] = n[2]),
            (t[3] = n[3]),
            (t[4] = n[4]),
            (t[5] = n[5]),
            (t[6] = n[6]),
            (t[7] = n[7]),
            (t[8] = n[8]),
            t
          );
        }),
        (n.fromValues = function (t, n, r, e, u, o, i, s, c) {
          var f = new a.ARRAY_TYPE(9);
          return (
            (f[0] = t),
            (f[1] = n),
            (f[2] = r),
            (f[3] = e),
            (f[4] = u),
            (f[5] = o),
            (f[6] = i),
            (f[7] = s),
            (f[8] = c),
            f
          );
        }),
        (n.set = function (t, n, r, a, e, u, o, i, s, c) {
          return (
            (t[0] = n),
            (t[1] = r),
            (t[2] = a),
            (t[3] = e),
            (t[4] = u),
            (t[5] = o),
            (t[6] = i),
            (t[7] = s),
            (t[8] = c),
            t
          );
        }),
        (n.identity = function (t) {
          return (
            (t[0] = 1),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = 1),
            (t[5] = 0),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = 1),
            t
          );
        }),
        (n.transpose = function (t, n) {
          if (t === n) {
            var r = n[1],
              a = n[2],
              e = n[5];
            (t[1] = n[3]),
              (t[2] = n[6]),
              (t[3] = r),
              (t[5] = n[7]),
              (t[6] = a),
              (t[7] = e);
          } else
            (t[0] = n[0]),
              (t[1] = n[3]),
              (t[2] = n[6]),
              (t[3] = n[1]),
              (t[4] = n[4]),
              (t[5] = n[7]),
              (t[6] = n[2]),
              (t[7] = n[5]),
              (t[8] = n[8]);
          return t;
        }),
        (n.invert = function (t, n) {
          var r = n[0],
            a = n[1],
            e = n[2],
            u = n[3],
            o = n[4],
            i = n[5],
            s = n[6],
            c = n[7],
            f = n[8],
            h = f * o - i * c,
            M = -f * u + i * s,
            l = c * u - o * s,
            v = r * h + a * M + e * l;
          if (!v) return null;
          return (
            (v = 1 / v),
            (t[0] = h * v),
            (t[1] = (-f * a + e * c) * v),
            (t[2] = (i * a - e * o) * v),
            (t[3] = M * v),
            (t[4] = (f * r - e * s) * v),
            (t[5] = (-i * r + e * u) * v),
            (t[6] = l * v),
            (t[7] = (-c * r + a * s) * v),
            (t[8] = (o * r - a * u) * v),
            t
          );
        }),
        (n.adjoint = function (t, n) {
          var r = n[0],
            a = n[1],
            e = n[2],
            u = n[3],
            o = n[4],
            i = n[5],
            s = n[6],
            c = n[7],
            f = n[8];
          return (
            (t[0] = o * f - i * c),
            (t[1] = e * c - a * f),
            (t[2] = a * i - e * o),
            (t[3] = i * s - u * f),
            (t[4] = r * f - e * s),
            (t[5] = e * u - r * i),
            (t[6] = u * c - o * s),
            (t[7] = a * s - r * c),
            (t[8] = r * o - a * u),
            t
          );
        }),
        (n.determinant = function (t) {
          var n = t[0],
            r = t[1],
            a = t[2],
            e = t[3],
            u = t[4],
            o = t[5],
            i = t[6],
            s = t[7],
            c = t[8];
          return (
            n * (c * u - o * s) + r * (-c * e + o * i) + a * (s * e - u * i)
          );
        }),
        (n.multiply = e),
        (n.translate = function (t, n, r) {
          var a = n[0],
            e = n[1],
            u = n[2],
            o = n[3],
            i = n[4],
            s = n[5],
            c = n[6],
            f = n[7],
            h = n[8],
            M = r[0],
            l = r[1];
          return (
            (t[0] = a),
            (t[1] = e),
            (t[2] = u),
            (t[3] = o),
            (t[4] = i),
            (t[5] = s),
            (t[6] = M * a + l * o + c),
            (t[7] = M * e + l * i + f),
            (t[8] = M * u + l * s + h),
            t
          );
        }),
        (n.rotate = function (t, n, r) {
          var a = n[0],
            e = n[1],
            u = n[2],
            o = n[3],
            i = n[4],
            s = n[5],
            c = n[6],
            f = n[7],
            h = n[8],
            M = Math.sin(r),
            l = Math.cos(r);
          return (
            (t[0] = l * a + M * o),
            (t[1] = l * e + M * i),
            (t[2] = l * u + M * s),
            (t[3] = l * o - M * a),
            (t[4] = l * i - M * e),
            (t[5] = l * s - M * u),
            (t[6] = c),
            (t[7] = f),
            (t[8] = h),
            t
          );
        }),
        (n.scale = function (t, n, r) {
          var a = r[0],
            e = r[1];
          return (
            (t[0] = a * n[0]),
            (t[1] = a * n[1]),
            (t[2] = a * n[2]),
            (t[3] = e * n[3]),
            (t[4] = e * n[4]),
            (t[5] = e * n[5]),
            (t[6] = n[6]),
            (t[7] = n[7]),
            (t[8] = n[8]),
            t
          );
        }),
        (n.fromTranslation = function (t, n) {
          return (
            (t[0] = 1),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = 1),
            (t[5] = 0),
            (t[6] = n[0]),
            (t[7] = n[1]),
            (t[8] = 1),
            t
          );
        }),
        (n.fromRotation = function (t, n) {
          var r = Math.sin(n),
            a = Math.cos(n);
          return (
            (t[0] = a),
            (t[1] = r),
            (t[2] = 0),
            (t[3] = -r),
            (t[4] = a),
            (t[5] = 0),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = 1),
            t
          );
        }),
        (n.fromScaling = function (t, n) {
          return (
            (t[0] = n[0]),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = n[1]),
            (t[5] = 0),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = 1),
            t
          );
        }),
        (n.fromMat2d = function (t, n) {
          return (
            (t[0] = n[0]),
            (t[1] = n[1]),
            (t[2] = 0),
            (t[3] = n[2]),
            (t[4] = n[3]),
            (t[5] = 0),
            (t[6] = n[4]),
            (t[7] = n[5]),
            (t[8] = 1),
            t
          );
        }),
        (n.fromQuat = function (t, n) {
          var r = n[0],
            a = n[1],
            e = n[2],
            u = n[3],
            o = r + r,
            i = a + a,
            s = e + e,
            c = r * o,
            f = a * o,
            h = a * i,
            M = e * o,
            l = e * i,
            v = e * s,
            d = u * o,
            b = u * i,
            m = u * s;
          return (
            (t[0] = 1 - h - v),
            (t[3] = f - m),
            (t[6] = M + b),
            (t[1] = f + m),
            (t[4] = 1 - c - v),
            (t[7] = l - d),
            (t[2] = M - b),
            (t[5] = l + d),
            (t[8] = 1 - c - h),
            t
          );
        }),
        (n.normalFromMat4 = function (t, n) {
          var r = n[0],
            a = n[1],
            e = n[2],
            u = n[3],
            o = n[4],
            i = n[5],
            s = n[6],
            c = n[7],
            f = n[8],
            h = n[9],
            M = n[10],
            l = n[11],
            v = n[12],
            d = n[13],
            b = n[14],
            m = n[15],
            p = r * i - a * o,
            P = r * s - e * o,
            E = r * c - u * o,
            O = a * s - e * i,
            A = a * c - u * i,
            q = e * c - u * s,
            x = f * d - h * v,
            R = f * b - M * v,
            y = f * m - l * v,
            L = h * b - M * d,
            w = h * m - l * d,
            _ = M * m - l * b,
            S = p * _ - P * w + E * L + O * y - A * R + q * x;
          if (!S) return null;
          return (
            (S = 1 / S),
            (t[0] = (i * _ - s * w + c * L) * S),
            (t[1] = (s * y - o * _ - c * R) * S),
            (t[2] = (o * w - i * y + c * x) * S),
            (t[3] = (e * w - a * _ - u * L) * S),
            (t[4] = (r * _ - e * y + u * R) * S),
            (t[5] = (a * y - r * w - u * x) * S),
            (t[6] = (d * q - b * A + m * O) * S),
            (t[7] = (b * E - v * q - m * P) * S),
            (t[8] = (v * A - d * E + m * p) * S),
            t
          );
        }),
        (n.projection = function (t, n, r) {
          return (
            (t[0] = 2 / n),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = -2 / r),
            (t[5] = 0),
            (t[6] = -1),
            (t[7] = 1),
            (t[8] = 1),
            t
          );
        }),
        (n.str = function (t) {
          return (
            "mat3(" +
            t[0] +
            ", " +
            t[1] +
            ", " +
            t[2] +
            ", " +
            t[3] +
            ", " +
            t[4] +
            ", " +
            t[5] +
            ", " +
            t[6] +
            ", " +
            t[7] +
            ", " +
            t[8] +
            ")"
          );
        }),
        (n.frob = function (t) {
          return Math.sqrt(
            Math.pow(t[0], 2) +
              Math.pow(t[1], 2) +
              Math.pow(t[2], 2) +
              Math.pow(t[3], 2) +
              Math.pow(t[4], 2) +
              Math.pow(t[5], 2) +
              Math.pow(t[6], 2) +
              Math.pow(t[7], 2) +
              Math.pow(t[8], 2)
          );
        }),
        (n.add = function (t, n, r) {
          return (
            (t[0] = n[0] + r[0]),
            (t[1] = n[1] + r[1]),
            (t[2] = n[2] + r[2]),
            (t[3] = n[3] + r[3]),
            (t[4] = n[4] + r[4]),
            (t[5] = n[5] + r[5]),
            (t[6] = n[6] + r[6]),
            (t[7] = n[7] + r[7]),
            (t[8] = n[8] + r[8]),
            t
          );
        }),
        (n.subtract = u),
        (n.multiplyScalar = function (t, n, r) {
          return (
            (t[0] = n[0] * r),
            (t[1] = n[1] * r),
            (t[2] = n[2] * r),
            (t[3] = n[3] * r),
            (t[4] = n[4] * r),
            (t[5] = n[5] * r),
            (t[6] = n[6] * r),
            (t[7] = n[7] * r),
            (t[8] = n[8] * r),
            t
          );
        }),
        (n.multiplyScalarAndAdd = function (t, n, r, a) {
          return (
            (t[0] = n[0] + r[0] * a),
            (t[1] = n[1] + r[1] * a),
            (t[2] = n[2] + r[2] * a),
            (t[3] = n[3] + r[3] * a),
            (t[4] = n[4] + r[4] * a),
            (t[5] = n[5] + r[5] * a),
            (t[6] = n[6] + r[6] * a),
            (t[7] = n[7] + r[7] * a),
            (t[8] = n[8] + r[8] * a),
            t
          );
        }),
        (n.exactEquals = function (t, n) {
          return (
            t[0] === n[0] &&
            t[1] === n[1] &&
            t[2] === n[2] &&
            t[3] === n[3] &&
            t[4] === n[4] &&
            t[5] === n[5] &&
            t[6] === n[6] &&
            t[7] === n[7] &&
            t[8] === n[8]
          );
        }),
        (n.equals = function (t, n) {
          var r = t[0],
            e = t[1],
            u = t[2],
            o = t[3],
            i = t[4],
            s = t[5],
            c = t[6],
            f = t[7],
            h = t[8],
            M = n[0],
            l = n[1],
            v = n[2],
            d = n[3],
            b = n[4],
            m = n[5],
            p = n[6],
            P = n[7],
            E = n[8];
          return (
            Math.abs(r - M) <=
              a.EPSILON * Math.max(1, Math.abs(r), Math.abs(M)) &&
            Math.abs(e - l) <=
              a.EPSILON * Math.max(1, Math.abs(e), Math.abs(l)) &&
            Math.abs(u - v) <=
              a.EPSILON * Math.max(1, Math.abs(u), Math.abs(v)) &&
            Math.abs(o - d) <=
              a.EPSILON * Math.max(1, Math.abs(o), Math.abs(d)) &&
            Math.abs(i - b) <=
              a.EPSILON * Math.max(1, Math.abs(i), Math.abs(b)) &&
            Math.abs(s - m) <=
              a.EPSILON * Math.max(1, Math.abs(s), Math.abs(m)) &&
            Math.abs(c - p) <=
              a.EPSILON * Math.max(1, Math.abs(c), Math.abs(p)) &&
            Math.abs(f - P) <=
              a.EPSILON * Math.max(1, Math.abs(f), Math.abs(P)) &&
            Math.abs(h - E) <= a.EPSILON * Math.max(1, Math.abs(h), Math.abs(E))
          );
        });
      var a = (function (t) {
        if (t && t.__esModule) return t;
        var n = {};
        if (null != t)
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return (n.default = t), n;
      })(r(0));
      function e(t, n, r) {
        var a = n[0],
          e = n[1],
          u = n[2],
          o = n[3],
          i = n[4],
          s = n[5],
          c = n[6],
          f = n[7],
          h = n[8],
          M = r[0],
          l = r[1],
          v = r[2],
          d = r[3],
          b = r[4],
          m = r[5],
          p = r[6],
          P = r[7],
          E = r[8];
        return (
          (t[0] = M * a + l * o + v * c),
          (t[1] = M * e + l * i + v * f),
          (t[2] = M * u + l * s + v * h),
          (t[3] = d * a + b * o + m * c),
          (t[4] = d * e + b * i + m * f),
          (t[5] = d * u + b * s + m * h),
          (t[6] = p * a + P * o + E * c),
          (t[7] = p * e + P * i + E * f),
          (t[8] = p * u + P * s + E * h),
          t
        );
      }
      function u(t, n, r) {
        return (
          (t[0] = n[0] - r[0]),
          (t[1] = n[1] - r[1]),
          (t[2] = n[2] - r[2]),
          (t[3] = n[3] - r[3]),
          (t[4] = n[4] - r[4]),
          (t[5] = n[5] - r[5]),
          (t[6] = n[6] - r[6]),
          (t[7] = n[7] - r[7]),
          (t[8] = n[8] - r[8]),
          t
        );
      }
      (n.mul = e), (n.sub = u);
    },
    function (t, n, r) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.forEach =
          n.sqrLen =
          n.sqrDist =
          n.dist =
          n.div =
          n.mul =
          n.sub =
          n.len =
            void 0),
        (n.create = e),
        (n.clone = function (t) {
          var n = new a.ARRAY_TYPE(2);
          return (n[0] = t[0]), (n[1] = t[1]), n;
        }),
        (n.fromValues = function (t, n) {
          var r = new a.ARRAY_TYPE(2);
          return (r[0] = t), (r[1] = n), r;
        }),
        (n.copy = function (t, n) {
          return (t[0] = n[0]), (t[1] = n[1]), t;
        }),
        (n.set = function (t, n, r) {
          return (t[0] = n), (t[1] = r), t;
        }),
        (n.add = function (t, n, r) {
          return (t[0] = n[0] + r[0]), (t[1] = n[1] + r[1]), t;
        }),
        (n.subtract = u),
        (n.multiply = o),
        (n.divide = i),
        (n.ceil = function (t, n) {
          return (t[0] = Math.ceil(n[0])), (t[1] = Math.ceil(n[1])), t;
        }),
        (n.floor = function (t, n) {
          return (t[0] = Math.floor(n[0])), (t[1] = Math.floor(n[1])), t;
        }),
        (n.min = function (t, n, r) {
          return (
            (t[0] = Math.min(n[0], r[0])), (t[1] = Math.min(n[1], r[1])), t
          );
        }),
        (n.max = function (t, n, r) {
          return (
            (t[0] = Math.max(n[0], r[0])), (t[1] = Math.max(n[1], r[1])), t
          );
        }),
        (n.round = function (t, n) {
          return (t[0] = Math.round(n[0])), (t[1] = Math.round(n[1])), t;
        }),
        (n.scale = function (t, n, r) {
          return (t[0] = n[0] * r), (t[1] = n[1] * r), t;
        }),
        (n.scaleAndAdd = function (t, n, r, a) {
          return (t[0] = n[0] + r[0] * a), (t[1] = n[1] + r[1] * a), t;
        }),
        (n.distance = s),
        (n.squaredDistance = c),
        (n.length = f),
        (n.squaredLength = h),
        (n.negate = function (t, n) {
          return (t[0] = -n[0]), (t[1] = -n[1]), t;
        }),
        (n.inverse = function (t, n) {
          return (t[0] = 1 / n[0]), (t[1] = 1 / n[1]), t;
        }),
        (n.normalize = function (t, n) {
          var r = n[0],
            a = n[1],
            e = r * r + a * a;
          e > 0 &&
            ((e = 1 / Math.sqrt(e)), (t[0] = n[0] * e), (t[1] = n[1] * e));
          return t;
        }),
        (n.dot = function (t, n) {
          return t[0] * n[0] + t[1] * n[1];
        }),
        (n.cross = function (t, n, r) {
          var a = n[0] * r[1] - n[1] * r[0];
          return (t[0] = t[1] = 0), (t[2] = a), t;
        }),
        (n.lerp = function (t, n, r, a) {
          var e = n[0],
            u = n[1];
          return (t[0] = e + a * (r[0] - e)), (t[1] = u + a * (r[1] - u)), t;
        }),
        (n.random = function (t, n) {
          n = n || 1;
          var r = 2 * a.RANDOM() * Math.PI;
          return (t[0] = Math.cos(r) * n), (t[1] = Math.sin(r) * n), t;
        }),
        (n.transformMat2 = function (t, n, r) {
          var a = n[0],
            e = n[1];
          return (t[0] = r[0] * a + r[2] * e), (t[1] = r[1] * a + r[3] * e), t;
        }),
        (n.transformMat2d = function (t, n, r) {
          var a = n[0],
            e = n[1];
          return (
            (t[0] = r[0] * a + r[2] * e + r[4]),
            (t[1] = r[1] * a + r[3] * e + r[5]),
            t
          );
        }),
        (n.transformMat3 = function (t, n, r) {
          var a = n[0],
            e = n[1];
          return (
            (t[0] = r[0] * a + r[3] * e + r[6]),
            (t[1] = r[1] * a + r[4] * e + r[7]),
            t
          );
        }),
        (n.transformMat4 = function (t, n, r) {
          var a = n[0],
            e = n[1];
          return (
            (t[0] = r[0] * a + r[4] * e + r[12]),
            (t[1] = r[1] * a + r[5] * e + r[13]),
            t
          );
        }),
        (n.rotate = function (t, n, r, a) {
          var e = n[0] - r[0],
            u = n[1] - r[1],
            o = Math.sin(a),
            i = Math.cos(a);
          return (
            (t[0] = e * i - u * o + r[0]), (t[1] = e * o + u * i + r[1]), t
          );
        }),
        (n.angle = function (t, n) {
          var r = t[0],
            a = t[1],
            e = n[0],
            u = n[1],
            o = r * r + a * a;
          o > 0 && (o = 1 / Math.sqrt(o));
          var i = e * e + u * u;
          i > 0 && (i = 1 / Math.sqrt(i));
          var s = (r * e + a * u) * o * i;
          return s > 1 ? 0 : s < -1 ? Math.PI : Math.acos(s);
        }),
        (n.str = function (t) {
          return "vec2(" + t[0] + ", " + t[1] + ")";
        }),
        (n.exactEquals = function (t, n) {
          return t[0] === n[0] && t[1] === n[1];
        }),
        (n.equals = function (t, n) {
          var r = t[0],
            e = t[1],
            u = n[0],
            o = n[1];
          return (
            Math.abs(r - u) <=
              a.EPSILON * Math.max(1, Math.abs(r), Math.abs(u)) &&
            Math.abs(e - o) <= a.EPSILON * Math.max(1, Math.abs(e), Math.abs(o))
          );
        });
      var a = (function (t) {
        if (t && t.__esModule) return t;
        var n = {};
        if (null != t)
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return (n.default = t), n;
      })(r(0));
      function e() {
        var t = new a.ARRAY_TYPE(2);
        return (t[0] = 0), (t[1] = 0), t;
      }
      function u(t, n, r) {
        return (t[0] = n[0] - r[0]), (t[1] = n[1] - r[1]), t;
      }
      function o(t, n, r) {
        return (t[0] = n[0] * r[0]), (t[1] = n[1] * r[1]), t;
      }
      function i(t, n, r) {
        return (t[0] = n[0] / r[0]), (t[1] = n[1] / r[1]), t;
      }
      function s(t, n) {
        var r = n[0] - t[0],
          a = n[1] - t[1];
        return Math.sqrt(r * r + a * a);
      }
      function c(t, n) {
        var r = n[0] - t[0],
          a = n[1] - t[1];
        return r * r + a * a;
      }
      function f(t) {
        var n = t[0],
          r = t[1];
        return Math.sqrt(n * n + r * r);
      }
      function h(t) {
        var n = t[0],
          r = t[1];
        return n * n + r * r;
      }
      var M;
      (n.len = f),
        (n.sub = u),
        (n.mul = o),
        (n.div = i),
        (n.dist = s),
        (n.sqrDist = c),
        (n.sqrLen = h),
        (n.forEach =
          ((M = e()),
          function (t, n, r, a, e, u) {
            var o = void 0,
              i = void 0;
            for (
              n || (n = 2),
                r || (r = 0),
                i = a ? Math.min(a * n + r, t.length) : t.length,
                o = r;
              o < i;
              o += n
            )
              (M[0] = t[o]),
                (M[1] = t[o + 1]),
                e(M, M, u),
                (t[o] = M[0]),
                (t[o + 1] = M[1]);
            return t;
          }));
    },
    function (t, n, r) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.sqrLen =
          n.squaredLength =
          n.len =
          n.length =
          n.dot =
          n.mul =
          n.setReal =
          n.getReal =
            void 0),
        (n.create = function () {
          var t = new a.ARRAY_TYPE(8);
          return (
            (t[0] = 0),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 1),
            (t[4] = 0),
            (t[5] = 0),
            (t[6] = 0),
            (t[7] = 0),
            t
          );
        }),
        (n.clone = function (t) {
          var n = new a.ARRAY_TYPE(8);
          return (
            (n[0] = t[0]),
            (n[1] = t[1]),
            (n[2] = t[2]),
            (n[3] = t[3]),
            (n[4] = t[4]),
            (n[5] = t[5]),
            (n[6] = t[6]),
            (n[7] = t[7]),
            n
          );
        }),
        (n.fromValues = function (t, n, r, e, u, o, i, s) {
          var c = new a.ARRAY_TYPE(8);
          return (
            (c[0] = t),
            (c[1] = n),
            (c[2] = r),
            (c[3] = e),
            (c[4] = u),
            (c[5] = o),
            (c[6] = i),
            (c[7] = s),
            c
          );
        }),
        (n.fromRotationTranslationValues = function (t, n, r, e, u, o, i) {
          var s = new a.ARRAY_TYPE(8);
          (s[0] = t), (s[1] = n), (s[2] = r), (s[3] = e);
          var c = 0.5 * u,
            f = 0.5 * o,
            h = 0.5 * i;
          return (
            (s[4] = c * e + f * r - h * n),
            (s[5] = f * e + h * t - c * r),
            (s[6] = h * e + c * n - f * t),
            (s[7] = -c * t - f * n - h * r),
            s
          );
        }),
        (n.fromRotationTranslation = i),
        (n.fromTranslation = function (t, n) {
          return (
            (t[0] = 0),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 1),
            (t[4] = 0.5 * n[0]),
            (t[5] = 0.5 * n[1]),
            (t[6] = 0.5 * n[2]),
            (t[7] = 0),
            t
          );
        }),
        (n.fromRotation = function (t, n) {
          return (
            (t[0] = n[0]),
            (t[1] = n[1]),
            (t[2] = n[2]),
            (t[3] = n[3]),
            (t[4] = 0),
            (t[5] = 0),
            (t[6] = 0),
            (t[7] = 0),
            t
          );
        }),
        (n.fromMat4 = function (t, n) {
          var r = e.create();
          u.getRotation(r, n);
          var o = new a.ARRAY_TYPE(3);
          return u.getTranslation(o, n), i(t, r, o), t;
        }),
        (n.copy = s),
        (n.identity = function (t) {
          return (
            (t[0] = 0),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 1),
            (t[4] = 0),
            (t[5] = 0),
            (t[6] = 0),
            (t[7] = 0),
            t
          );
        }),
        (n.set = function (t, n, r, a, e, u, o, i, s) {
          return (
            (t[0] = n),
            (t[1] = r),
            (t[2] = a),
            (t[3] = e),
            (t[4] = u),
            (t[5] = o),
            (t[6] = i),
            (t[7] = s),
            t
          );
        }),
        (n.getDual = function (t, n) {
          return (t[0] = n[4]), (t[1] = n[5]), (t[2] = n[6]), (t[3] = n[7]), t;
        }),
        (n.setDual = function (t, n) {
          return (t[4] = n[0]), (t[5] = n[1]), (t[6] = n[2]), (t[7] = n[3]), t;
        }),
        (n.getTranslation = function (t, n) {
          var r = n[4],
            a = n[5],
            e = n[6],
            u = n[7],
            o = -n[0],
            i = -n[1],
            s = -n[2],
            c = n[3];
          return (
            (t[0] = 2 * (r * c + u * o + a * s - e * i)),
            (t[1] = 2 * (a * c + u * i + e * o - r * s)),
            (t[2] = 2 * (e * c + u * s + r * i - a * o)),
            t
          );
        }),
        (n.translate = function (t, n, r) {
          var a = n[0],
            e = n[1],
            u = n[2],
            o = n[3],
            i = 0.5 * r[0],
            s = 0.5 * r[1],
            c = 0.5 * r[2],
            f = n[4],
            h = n[5],
            M = n[6],
            l = n[7];
          return (
            (t[0] = a),
            (t[1] = e),
            (t[2] = u),
            (t[3] = o),
            (t[4] = o * i + e * c - u * s + f),
            (t[5] = o * s + u * i - a * c + h),
            (t[6] = o * c + a * s - e * i + M),
            (t[7] = -a * i - e * s - u * c + l),
            t
          );
        }),
        (n.rotateX = function (t, n, r) {
          var a = -n[0],
            u = -n[1],
            o = -n[2],
            i = n[3],
            s = n[4],
            c = n[5],
            f = n[6],
            h = n[7],
            M = s * i + h * a + c * o - f * u,
            l = c * i + h * u + f * a - s * o,
            v = f * i + h * o + s * u - c * a,
            d = h * i - s * a - c * u - f * o;
          return (
            e.rotateX(t, n, r),
            (a = t[0]),
            (u = t[1]),
            (o = t[2]),
            (i = t[3]),
            (t[4] = M * i + d * a + l * o - v * u),
            (t[5] = l * i + d * u + v * a - M * o),
            (t[6] = v * i + d * o + M * u - l * a),
            (t[7] = d * i - M * a - l * u - v * o),
            t
          );
        }),
        (n.rotateY = function (t, n, r) {
          var a = -n[0],
            u = -n[1],
            o = -n[2],
            i = n[3],
            s = n[4],
            c = n[5],
            f = n[6],
            h = n[7],
            M = s * i + h * a + c * o - f * u,
            l = c * i + h * u + f * a - s * o,
            v = f * i + h * o + s * u - c * a,
            d = h * i - s * a - c * u - f * o;
          return (
            e.rotateY(t, n, r),
            (a = t[0]),
            (u = t[1]),
            (o = t[2]),
            (i = t[3]),
            (t[4] = M * i + d * a + l * o - v * u),
            (t[5] = l * i + d * u + v * a - M * o),
            (t[6] = v * i + d * o + M * u - l * a),
            (t[7] = d * i - M * a - l * u - v * o),
            t
          );
        }),
        (n.rotateZ = function (t, n, r) {
          var a = -n[0],
            u = -n[1],
            o = -n[2],
            i = n[3],
            s = n[4],
            c = n[5],
            f = n[6],
            h = n[7],
            M = s * i + h * a + c * o - f * u,
            l = c * i + h * u + f * a - s * o,
            v = f * i + h * o + s * u - c * a,
            d = h * i - s * a - c * u - f * o;
          return (
            e.rotateZ(t, n, r),
            (a = t[0]),
            (u = t[1]),
            (o = t[2]),
            (i = t[3]),
            (t[4] = M * i + d * a + l * o - v * u),
            (t[5] = l * i + d * u + v * a - M * o),
            (t[6] = v * i + d * o + M * u - l * a),
            (t[7] = d * i - M * a - l * u - v * o),
            t
          );
        }),
        (n.rotateByQuatAppend = function (t, n, r) {
          var a = r[0],
            e = r[1],
            u = r[2],
            o = r[3],
            i = n[0],
            s = n[1],
            c = n[2],
            f = n[3];
          return (
            (t[0] = i * o + f * a + s * u - c * e),
            (t[1] = s * o + f * e + c * a - i * u),
            (t[2] = c * o + f * u + i * e - s * a),
            (t[3] = f * o - i * a - s * e - c * u),
            (i = n[4]),
            (s = n[5]),
            (c = n[6]),
            (f = n[7]),
            (t[4] = i * o + f * a + s * u - c * e),
            (t[5] = s * o + f * e + c * a - i * u),
            (t[6] = c * o + f * u + i * e - s * a),
            (t[7] = f * o - i * a - s * e - c * u),
            t
          );
        }),
        (n.rotateByQuatPrepend = function (t, n, r) {
          var a = n[0],
            e = n[1],
            u = n[2],
            o = n[3],
            i = r[0],
            s = r[1],
            c = r[2],
            f = r[3];
          return (
            (t[0] = a * f + o * i + e * c - u * s),
            (t[1] = e * f + o * s + u * i - a * c),
            (t[2] = u * f + o * c + a * s - e * i),
            (t[3] = o * f - a * i - e * s - u * c),
            (i = r[4]),
            (s = r[5]),
            (c = r[6]),
            (f = r[7]),
            (t[4] = a * f + o * i + e * c - u * s),
            (t[5] = e * f + o * s + u * i - a * c),
            (t[6] = u * f + o * c + a * s - e * i),
            (t[7] = o * f - a * i - e * s - u * c),
            t
          );
        }),
        (n.rotateAroundAxis = function (t, n, r, e) {
          if (Math.abs(e) < a.EPSILON) return s(t, n);
          var u = Math.sqrt(r[0] * r[0] + r[1] * r[1] + r[2] * r[2]);
          e *= 0.5;
          var o = Math.sin(e),
            i = (o * r[0]) / u,
            c = (o * r[1]) / u,
            f = (o * r[2]) / u,
            h = Math.cos(e),
            M = n[0],
            l = n[1],
            v = n[2],
            d = n[3];
          (t[0] = M * h + d * i + l * f - v * c),
            (t[1] = l * h + d * c + v * i - M * f),
            (t[2] = v * h + d * f + M * c - l * i),
            (t[3] = d * h - M * i - l * c - v * f);
          var b = n[4],
            m = n[5],
            p = n[6],
            P = n[7];
          return (
            (t[4] = b * h + P * i + m * f - p * c),
            (t[5] = m * h + P * c + p * i - b * f),
            (t[6] = p * h + P * f + b * c - m * i),
            (t[7] = P * h - b * i - m * c - p * f),
            t
          );
        }),
        (n.add = function (t, n, r) {
          return (
            (t[0] = n[0] + r[0]),
            (t[1] = n[1] + r[1]),
            (t[2] = n[2] + r[2]),
            (t[3] = n[3] + r[3]),
            (t[4] = n[4] + r[4]),
            (t[5] = n[5] + r[5]),
            (t[6] = n[6] + r[6]),
            (t[7] = n[7] + r[7]),
            t
          );
        }),
        (n.multiply = c),
        (n.scale = function (t, n, r) {
          return (
            (t[0] = n[0] * r),
            (t[1] = n[1] * r),
            (t[2] = n[2] * r),
            (t[3] = n[3] * r),
            (t[4] = n[4] * r),
            (t[5] = n[5] * r),
            (t[6] = n[6] * r),
            (t[7] = n[7] * r),
            t
          );
        }),
        (n.lerp = function (t, n, r, a) {
          var e = 1 - a;
          f(n, r) < 0 && (a = -a);
          return (
            (t[0] = n[0] * e + r[0] * a),
            (t[1] = n[1] * e + r[1] * a),
            (t[2] = n[2] * e + r[2] * a),
            (t[3] = n[3] * e + r[3] * a),
            (t[4] = n[4] * e + r[4] * a),
            (t[5] = n[5] * e + r[5] * a),
            (t[6] = n[6] * e + r[6] * a),
            (t[7] = n[7] * e + r[7] * a),
            t
          );
        }),
        (n.invert = function (t, n) {
          var r = M(n);
          return (
            (t[0] = -n[0] / r),
            (t[1] = -n[1] / r),
            (t[2] = -n[2] / r),
            (t[3] = n[3] / r),
            (t[4] = -n[4] / r),
            (t[5] = -n[5] / r),
            (t[6] = -n[6] / r),
            (t[7] = n[7] / r),
            t
          );
        }),
        (n.conjugate = function (t, n) {
          return (
            (t[0] = -n[0]),
            (t[1] = -n[1]),
            (t[2] = -n[2]),
            (t[3] = n[3]),
            (t[4] = -n[4]),
            (t[5] = -n[5]),
            (t[6] = -n[6]),
            (t[7] = n[7]),
            t
          );
        }),
        (n.normalize = function (t, n) {
          var r = M(n);
          r > 0 &&
            ((r = Math.sqrt(r)),
            (t[0] = n[0] / r),
            (t[1] = n[1] / r),
            (t[2] = n[2] / r),
            (t[3] = n[3] / r),
            (t[4] = n[4] / r),
            (t[5] = n[5] / r),
            (t[6] = n[6] / r),
            (t[7] = n[7] / r));
          return t;
        }),
        (n.str = function (t) {
          return (
            "quat2(" +
            t[0] +
            ", " +
            t[1] +
            ", " +
            t[2] +
            ", " +
            t[3] +
            ", " +
            t[4] +
            ", " +
            t[5] +
            ", " +
            t[6] +
            ", " +
            t[7] +
            ")"
          );
        }),
        (n.exactEquals = function (t, n) {
          return (
            t[0] === n[0] &&
            t[1] === n[1] &&
            t[2] === n[2] &&
            t[3] === n[3] &&
            t[4] === n[4] &&
            t[5] === n[5] &&
            t[6] === n[6] &&
            t[7] === n[7]
          );
        }),
        (n.equals = function (t, n) {
          var r = t[0],
            e = t[1],
            u = t[2],
            o = t[3],
            i = t[4],
            s = t[5],
            c = t[6],
            f = t[7],
            h = n[0],
            M = n[1],
            l = n[2],
            v = n[3],
            d = n[4],
            b = n[5],
            m = n[6],
            p = n[7];
          return (
            Math.abs(r - h) <=
              a.EPSILON * Math.max(1, Math.abs(r), Math.abs(h)) &&
            Math.abs(e - M) <=
              a.EPSILON * Math.max(1, Math.abs(e), Math.abs(M)) &&
            Math.abs(u - l) <=
              a.EPSILON * Math.max(1, Math.abs(u), Math.abs(l)) &&
            Math.abs(o - v) <=
              a.EPSILON * Math.max(1, Math.abs(o), Math.abs(v)) &&
            Math.abs(i - d) <=
              a.EPSILON * Math.max(1, Math.abs(i), Math.abs(d)) &&
            Math.abs(s - b) <=
              a.EPSILON * Math.max(1, Math.abs(s), Math.abs(b)) &&
            Math.abs(c - m) <=
              a.EPSILON * Math.max(1, Math.abs(c), Math.abs(m)) &&
            Math.abs(f - p) <= a.EPSILON * Math.max(1, Math.abs(f), Math.abs(p))
          );
        });
      var a = o(r(0)),
        e = o(r(3)),
        u = o(r(4));
      function o(t) {
        if (t && t.__esModule) return t;
        var n = {};
        if (null != t)
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return (n.default = t), n;
      }
      function i(t, n, r) {
        var a = 0.5 * r[0],
          e = 0.5 * r[1],
          u = 0.5 * r[2],
          o = n[0],
          i = n[1],
          s = n[2],
          c = n[3];
        return (
          (t[0] = o),
          (t[1] = i),
          (t[2] = s),
          (t[3] = c),
          (t[4] = a * c + e * s - u * i),
          (t[5] = e * c + u * o - a * s),
          (t[6] = u * c + a * i - e * o),
          (t[7] = -a * o - e * i - u * s),
          t
        );
      }
      function s(t, n) {
        return (
          (t[0] = n[0]),
          (t[1] = n[1]),
          (t[2] = n[2]),
          (t[3] = n[3]),
          (t[4] = n[4]),
          (t[5] = n[5]),
          (t[6] = n[6]),
          (t[7] = n[7]),
          t
        );
      }
      n.getReal = e.copy;
      n.setReal = e.copy;
      function c(t, n, r) {
        var a = n[0],
          e = n[1],
          u = n[2],
          o = n[3],
          i = r[4],
          s = r[5],
          c = r[6],
          f = r[7],
          h = n[4],
          M = n[5],
          l = n[6],
          v = n[7],
          d = r[0],
          b = r[1],
          m = r[2],
          p = r[3];
        return (
          (t[0] = a * p + o * d + e * m - u * b),
          (t[1] = e * p + o * b + u * d - a * m),
          (t[2] = u * p + o * m + a * b - e * d),
          (t[3] = o * p - a * d - e * b - u * m),
          (t[4] =
            a * f + o * i + e * c - u * s + h * p + v * d + M * m - l * b),
          (t[5] =
            e * f + o * s + u * i - a * c + M * p + v * b + l * d - h * m),
          (t[6] =
            u * f + o * c + a * s - e * i + l * p + v * m + h * b - M * d),
          (t[7] =
            o * f - a * i - e * s - u * c + v * p - h * d - M * b - l * m),
          t
        );
      }
      n.mul = c;
      var f = (n.dot = e.dot);
      var h = (n.length = e.length),
        M = ((n.len = h), (n.squaredLength = e.squaredLength));
      n.sqrLen = M;
    },
    function (t, n, r) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.sub = n.mul = void 0),
        (n.create = function () {
          var t = new a.ARRAY_TYPE(6);
          return (
            (t[0] = 1),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 1),
            (t[4] = 0),
            (t[5] = 0),
            t
          );
        }),
        (n.clone = function (t) {
          var n = new a.ARRAY_TYPE(6);
          return (
            (n[0] = t[0]),
            (n[1] = t[1]),
            (n[2] = t[2]),
            (n[3] = t[3]),
            (n[4] = t[4]),
            (n[5] = t[5]),
            n
          );
        }),
        (n.copy = function (t, n) {
          return (
            (t[0] = n[0]),
            (t[1] = n[1]),
            (t[2] = n[2]),
            (t[3] = n[3]),
            (t[4] = n[4]),
            (t[5] = n[5]),
            t
          );
        }),
        (n.identity = function (t) {
          return (
            (t[0] = 1),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 1),
            (t[4] = 0),
            (t[5] = 0),
            t
          );
        }),
        (n.fromValues = function (t, n, r, e, u, o) {
          var i = new a.ARRAY_TYPE(6);
          return (
            (i[0] = t),
            (i[1] = n),
            (i[2] = r),
            (i[3] = e),
            (i[4] = u),
            (i[5] = o),
            i
          );
        }),
        (n.set = function (t, n, r, a, e, u, o) {
          return (
            (t[0] = n),
            (t[1] = r),
            (t[2] = a),
            (t[3] = e),
            (t[4] = u),
            (t[5] = o),
            t
          );
        }),
        (n.invert = function (t, n) {
          var r = n[0],
            a = n[1],
            e = n[2],
            u = n[3],
            o = n[4],
            i = n[5],
            s = r * u - a * e;
          if (!s) return null;
          return (
            (s = 1 / s),
            (t[0] = u * s),
            (t[1] = -a * s),
            (t[2] = -e * s),
            (t[3] = r * s),
            (t[4] = (e * i - u * o) * s),
            (t[5] = (a * o - r * i) * s),
            t
          );
        }),
        (n.determinant = function (t) {
          return t[0] * t[3] - t[1] * t[2];
        }),
        (n.multiply = e),
        (n.rotate = function (t, n, r) {
          var a = n[0],
            e = n[1],
            u = n[2],
            o = n[3],
            i = n[4],
            s = n[5],
            c = Math.sin(r),
            f = Math.cos(r);
          return (
            (t[0] = a * f + u * c),
            (t[1] = e * f + o * c),
            (t[2] = a * -c + u * f),
            (t[3] = e * -c + o * f),
            (t[4] = i),
            (t[5] = s),
            t
          );
        }),
        (n.scale = function (t, n, r) {
          var a = n[0],
            e = n[1],
            u = n[2],
            o = n[3],
            i = n[4],
            s = n[5],
            c = r[0],
            f = r[1];
          return (
            (t[0] = a * c),
            (t[1] = e * c),
            (t[2] = u * f),
            (t[3] = o * f),
            (t[4] = i),
            (t[5] = s),
            t
          );
        }),
        (n.translate = function (t, n, r) {
          var a = n[0],
            e = n[1],
            u = n[2],
            o = n[3],
            i = n[4],
            s = n[5],
            c = r[0],
            f = r[1];
          return (
            (t[0] = a),
            (t[1] = e),
            (t[2] = u),
            (t[3] = o),
            (t[4] = a * c + u * f + i),
            (t[5] = e * c + o * f + s),
            t
          );
        }),
        (n.fromRotation = function (t, n) {
          var r = Math.sin(n),
            a = Math.cos(n);
          return (
            (t[0] = a),
            (t[1] = r),
            (t[2] = -r),
            (t[3] = a),
            (t[4] = 0),
            (t[5] = 0),
            t
          );
        }),
        (n.fromScaling = function (t, n) {
          return (
            (t[0] = n[0]),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = n[1]),
            (t[4] = 0),
            (t[5] = 0),
            t
          );
        }),
        (n.fromTranslation = function (t, n) {
          return (
            (t[0] = 1),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 1),
            (t[4] = n[0]),
            (t[5] = n[1]),
            t
          );
        }),
        (n.str = function (t) {
          return (
            "mat2d(" +
            t[0] +
            ", " +
            t[1] +
            ", " +
            t[2] +
            ", " +
            t[3] +
            ", " +
            t[4] +
            ", " +
            t[5] +
            ")"
          );
        }),
        (n.frob = function (t) {
          return Math.sqrt(
            Math.pow(t[0], 2) +
              Math.pow(t[1], 2) +
              Math.pow(t[2], 2) +
              Math.pow(t[3], 2) +
              Math.pow(t[4], 2) +
              Math.pow(t[5], 2) +
              1
          );
        }),
        (n.add = function (t, n, r) {
          return (
            (t[0] = n[0] + r[0]),
            (t[1] = n[1] + r[1]),
            (t[2] = n[2] + r[2]),
            (t[3] = n[3] + r[3]),
            (t[4] = n[4] + r[4]),
            (t[5] = n[5] + r[5]),
            t
          );
        }),
        (n.subtract = u),
        (n.multiplyScalar = function (t, n, r) {
          return (
            (t[0] = n[0] * r),
            (t[1] = n[1] * r),
            (t[2] = n[2] * r),
            (t[3] = n[3] * r),
            (t[4] = n[4] * r),
            (t[5] = n[5] * r),
            t
          );
        }),
        (n.multiplyScalarAndAdd = function (t, n, r, a) {
          return (
            (t[0] = n[0] + r[0] * a),
            (t[1] = n[1] + r[1] * a),
            (t[2] = n[2] + r[2] * a),
            (t[3] = n[3] + r[3] * a),
            (t[4] = n[4] + r[4] * a),
            (t[5] = n[5] + r[5] * a),
            t
          );
        }),
        (n.exactEquals = function (t, n) {
          return (
            t[0] === n[0] &&
            t[1] === n[1] &&
            t[2] === n[2] &&
            t[3] === n[3] &&
            t[4] === n[4] &&
            t[5] === n[5]
          );
        }),
        (n.equals = function (t, n) {
          var r = t[0],
            e = t[1],
            u = t[2],
            o = t[3],
            i = t[4],
            s = t[5],
            c = n[0],
            f = n[1],
            h = n[2],
            M = n[3],
            l = n[4],
            v = n[5];
          return (
            Math.abs(r - c) <=
              a.EPSILON * Math.max(1, Math.abs(r), Math.abs(c)) &&
            Math.abs(e - f) <=
              a.EPSILON * Math.max(1, Math.abs(e), Math.abs(f)) &&
            Math.abs(u - h) <=
              a.EPSILON * Math.max(1, Math.abs(u), Math.abs(h)) &&
            Math.abs(o - M) <=
              a.EPSILON * Math.max(1, Math.abs(o), Math.abs(M)) &&
            Math.abs(i - l) <=
              a.EPSILON * Math.max(1, Math.abs(i), Math.abs(l)) &&
            Math.abs(s - v) <= a.EPSILON * Math.max(1, Math.abs(s), Math.abs(v))
          );
        });
      var a = (function (t) {
        if (t && t.__esModule) return t;
        var n = {};
        if (null != t)
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return (n.default = t), n;
      })(r(0));
      function e(t, n, r) {
        var a = n[0],
          e = n[1],
          u = n[2],
          o = n[3],
          i = n[4],
          s = n[5],
          c = r[0],
          f = r[1],
          h = r[2],
          M = r[3],
          l = r[4],
          v = r[5];
        return (
          (t[0] = a * c + u * f),
          (t[1] = e * c + o * f),
          (t[2] = a * h + u * M),
          (t[3] = e * h + o * M),
          (t[4] = a * l + u * v + i),
          (t[5] = e * l + o * v + s),
          t
        );
      }
      function u(t, n, r) {
        return (
          (t[0] = n[0] - r[0]),
          (t[1] = n[1] - r[1]),
          (t[2] = n[2] - r[2]),
          (t[3] = n[3] - r[3]),
          (t[4] = n[4] - r[4]),
          (t[5] = n[5] - r[5]),
          t
        );
      }
      (n.mul = e), (n.sub = u);
    },
    function (t, n, r) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.sub = n.mul = void 0),
        (n.create = function () {
          var t = new a.ARRAY_TYPE(4);
          return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 1), t;
        }),
        (n.clone = function (t) {
          var n = new a.ARRAY_TYPE(4);
          return (n[0] = t[0]), (n[1] = t[1]), (n[2] = t[2]), (n[3] = t[3]), n;
        }),
        (n.copy = function (t, n) {
          return (t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), (t[3] = n[3]), t;
        }),
        (n.identity = function (t) {
          return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 1), t;
        }),
        (n.fromValues = function (t, n, r, e) {
          var u = new a.ARRAY_TYPE(4);
          return (u[0] = t), (u[1] = n), (u[2] = r), (u[3] = e), u;
        }),
        (n.set = function (t, n, r, a, e) {
          return (t[0] = n), (t[1] = r), (t[2] = a), (t[3] = e), t;
        }),
        (n.transpose = function (t, n) {
          if (t === n) {
            var r = n[1];
            (t[1] = n[2]), (t[2] = r);
          } else (t[0] = n[0]), (t[1] = n[2]), (t[2] = n[1]), (t[3] = n[3]);
          return t;
        }),
        (n.invert = function (t, n) {
          var r = n[0],
            a = n[1],
            e = n[2],
            u = n[3],
            o = r * u - e * a;
          if (!o) return null;
          return (
            (o = 1 / o),
            (t[0] = u * o),
            (t[1] = -a * o),
            (t[2] = -e * o),
            (t[3] = r * o),
            t
          );
        }),
        (n.adjoint = function (t, n) {
          var r = n[0];
          return (t[0] = n[3]), (t[1] = -n[1]), (t[2] = -n[2]), (t[3] = r), t;
        }),
        (n.determinant = function (t) {
          return t[0] * t[3] - t[2] * t[1];
        }),
        (n.multiply = e),
        (n.rotate = function (t, n, r) {
          var a = n[0],
            e = n[1],
            u = n[2],
            o = n[3],
            i = Math.sin(r),
            s = Math.cos(r);
          return (
            (t[0] = a * s + u * i),
            (t[1] = e * s + o * i),
            (t[2] = a * -i + u * s),
            (t[3] = e * -i + o * s),
            t
          );
        }),
        (n.scale = function (t, n, r) {
          var a = n[0],
            e = n[1],
            u = n[2],
            o = n[3],
            i = r[0],
            s = r[1];
          return (
            (t[0] = a * i), (t[1] = e * i), (t[2] = u * s), (t[3] = o * s), t
          );
        }),
        (n.fromRotation = function (t, n) {
          var r = Math.sin(n),
            a = Math.cos(n);
          return (t[0] = a), (t[1] = r), (t[2] = -r), (t[3] = a), t;
        }),
        (n.fromScaling = function (t, n) {
          return (t[0] = n[0]), (t[1] = 0), (t[2] = 0), (t[3] = n[1]), t;
        }),
        (n.str = function (t) {
          return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
        }),
        (n.frob = function (t) {
          return Math.sqrt(
            Math.pow(t[0], 2) +
              Math.pow(t[1], 2) +
              Math.pow(t[2], 2) +
              Math.pow(t[3], 2)
          );
        }),
        (n.LDU = function (t, n, r, a) {
          return (
            (t[2] = a[2] / a[0]),
            (r[0] = a[0]),
            (r[1] = a[1]),
            (r[3] = a[3] - t[2] * r[1]),
            [t, n, r]
          );
        }),
        (n.add = function (t, n, r) {
          return (
            (t[0] = n[0] + r[0]),
            (t[1] = n[1] + r[1]),
            (t[2] = n[2] + r[2]),
            (t[3] = n[3] + r[3]),
            t
          );
        }),
        (n.subtract = u),
        (n.exactEquals = function (t, n) {
          return (
            t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3]
          );
        }),
        (n.equals = function (t, n) {
          var r = t[0],
            e = t[1],
            u = t[2],
            o = t[3],
            i = n[0],
            s = n[1],
            c = n[2],
            f = n[3];
          return (
            Math.abs(r - i) <=
              a.EPSILON * Math.max(1, Math.abs(r), Math.abs(i)) &&
            Math.abs(e - s) <=
              a.EPSILON * Math.max(1, Math.abs(e), Math.abs(s)) &&
            Math.abs(u - c) <=
              a.EPSILON * Math.max(1, Math.abs(u), Math.abs(c)) &&
            Math.abs(o - f) <= a.EPSILON * Math.max(1, Math.abs(o), Math.abs(f))
          );
        }),
        (n.multiplyScalar = function (t, n, r) {
          return (
            (t[0] = n[0] * r),
            (t[1] = n[1] * r),
            (t[2] = n[2] * r),
            (t[3] = n[3] * r),
            t
          );
        }),
        (n.multiplyScalarAndAdd = function (t, n, r, a) {
          return (
            (t[0] = n[0] + r[0] * a),
            (t[1] = n[1] + r[1] * a),
            (t[2] = n[2] + r[2] * a),
            (t[3] = n[3] + r[3] * a),
            t
          );
        });
      var a = (function (t) {
        if (t && t.__esModule) return t;
        var n = {};
        if (null != t)
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return (n.default = t), n;
      })(r(0));
      function e(t, n, r) {
        var a = n[0],
          e = n[1],
          u = n[2],
          o = n[3],
          i = r[0],
          s = r[1],
          c = r[2],
          f = r[3];
        return (
          (t[0] = a * i + u * s),
          (t[1] = e * i + o * s),
          (t[2] = a * c + u * f),
          (t[3] = e * c + o * f),
          t
        );
      }
      function u(t, n, r) {
        return (
          (t[0] = n[0] - r[0]),
          (t[1] = n[1] - r[1]),
          (t[2] = n[2] - r[2]),
          (t[3] = n[3] - r[3]),
          t
        );
      }
      (n.mul = e), (n.sub = u);
    },
    function (t, n, r) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.vec4 =
          n.vec3 =
          n.vec2 =
          n.quat2 =
          n.quat =
          n.mat4 =
          n.mat3 =
          n.mat2d =
          n.mat2 =
          n.glMatrix =
            void 0);
      var a = l(r(0)),
        e = l(r(9)),
        u = l(r(8)),
        o = l(r(5)),
        i = l(r(4)),
        s = l(r(3)),
        c = l(r(7)),
        f = l(r(6)),
        h = l(r(2)),
        M = l(r(1));
      function l(t) {
        if (t && t.__esModule) return t;
        var n = {};
        if (null != t)
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return (n.default = t), n;
      }
      (n.glMatrix = a),
        (n.mat2 = e),
        (n.mat2d = u),
        (n.mat3 = o),
        (n.mat4 = i),
        (n.quat = s),
        (n.quat2 = c),
        (n.vec2 = f),
        (n.vec3 = h),
        (n.vec4 = M);
    },
  ]);
});
