import * as Ot from "react";
import ie, { useRef as Se, useState as oe, useEffect as xe, useMemo as Fe, useCallback as Ee } from "react";
import { createPortal as Kt } from "react-dom";
import { NavLink as ct, Outlet as Jt } from "react-router-dom";
const Xt = Ot.createContext(null);
function be() {
  return Ot.useContext(Xt);
}
var Ue = { exports: {} }, Re = {};
var ut;
function Gt() {
  if (ut) return Re;
  ut = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function t(n, s, a) {
    var l = null;
    if (a !== void 0 && (l = "" + a), s.key !== void 0 && (l = "" + s.key), "key" in s) {
      a = {};
      for (var u in s)
        u !== "key" && (a[u] = s[u]);
    } else a = s;
    return s = a.ref, {
      $$typeof: e,
      type: n,
      key: l,
      ref: s !== void 0 ? s : null,
      props: a
    };
  }
  return Re.Fragment = r, Re.jsx = t, Re.jsxs = t, Re;
}
var Te = {};
var dt;
function Zt() {
  return dt || (dt = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(f) {
      if (f == null) return null;
      if (typeof f == "function")
        return f.$$typeof === we ? null : f.displayName || f.name || null;
      if (typeof f == "string") return f;
      switch (f) {
        case p:
          return "Fragment";
        case C:
          return "Profiler";
        case K:
          return "StrictMode";
        case Z:
          return "Suspense";
        case ae:
          return "SuspenseList";
        case J:
          return "Activity";
      }
      if (typeof f == "object")
        switch (typeof f.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), f.$$typeof) {
          case Y:
            return "Portal";
          case S:
            return f.displayName || "Context";
          case M:
            return (f._context.displayName || "Context") + ".Consumer";
          case A:
            var D = f.render;
            return f = f.displayName, f || (f = D.displayName || D.name || "", f = f !== "" ? "ForwardRef(" + f + ")" : "ForwardRef"), f;
          case he:
            return D = f.displayName || null, D !== null ? D : e(f.type) || "Memo";
          case le:
            D = f._payload, f = f._init;
            try {
              return e(f(D));
            } catch {
            }
        }
      return null;
    }
    function r(f) {
      return "" + f;
    }
    function t(f) {
      try {
        r(f);
        var D = !1;
      } catch {
        D = !0;
      }
      if (D) {
        D = console;
        var q = D.error, U = typeof Symbol == "function" && Symbol.toStringTag && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return q.call(
          D,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          U
        ), r(f);
      }
    }
    function n(f) {
      if (f === p) return "<>";
      if (typeof f == "object" && f !== null && f.$$typeof === le)
        return "<...>";
      try {
        var D = e(f);
        return D ? "<" + D + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var f = I.A;
      return f === null ? null : f.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function l(f) {
      if (L.call(f, "key")) {
        var D = Object.getOwnPropertyDescriptor(f, "key").get;
        if (D && D.isReactWarning) return !1;
      }
      return f.key !== void 0;
    }
    function u(f, D) {
      function q() {
        T || (T = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          D
        ));
      }
      q.isReactWarning = !0, Object.defineProperty(f, "key", {
        get: q,
        configurable: !0
      });
    }
    function _() {
      var f = e(this.type);
      return P[f] || (P[f] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), f = this.props.ref, f !== void 0 ? f : null;
    }
    function h(f, D, q, U, B, de) {
      var N = q.ref;
      return f = {
        $$typeof: $,
        type: f,
        key: D,
        props: q,
        _owner: U
      }, (N !== void 0 ? N : null) !== null ? Object.defineProperty(f, "ref", {
        enumerable: !1,
        get: _
      }) : Object.defineProperty(f, "ref", { enumerable: !1, value: null }), f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(f, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(f, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.defineProperty(f, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: de
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    }
    function m(f, D, q, U, B, de) {
      var N = D.children;
      if (N !== void 0)
        if (U)
          if (Q(N)) {
            for (U = 0; U < N.length; U++)
              y(N[U]);
            Object.freeze && Object.freeze(N);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(N);
      if (L.call(D, "key")) {
        N = e(f);
        var O = Object.keys(D).filter(function(ee) {
          return ee !== "key";
        });
        U = 0 < O.length ? "{key: someKey, " + O.join(": ..., ") + ": ...}" : "{key: someKey}", R[N + U] || (O = 0 < O.length ? "{" + O.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          U,
          N,
          O,
          N
        ), R[N + U] = !0);
      }
      if (N = null, q !== void 0 && (t(q), N = "" + q), l(D) && (t(D.key), N = "" + D.key), "key" in D) {
        q = {};
        for (var W in D)
          W !== "key" && (q[W] = D[W]);
      } else q = D;
      return N && u(
        q,
        typeof f == "function" ? f.displayName || f.name || "Unknown" : f
      ), h(
        f,
        N,
        q,
        s(),
        B,
        de
      );
    }
    function y(f) {
      V(f) ? f._store && (f._store.validated = 1) : typeof f == "object" && f !== null && f.$$typeof === le && (f._payload.status === "fulfilled" ? V(f._payload.value) && f._payload.value._store && (f._payload.value._store.validated = 1) : f._store && (f._store.validated = 1));
    }
    function V(f) {
      return typeof f == "object" && f !== null && f.$$typeof === $;
    }
    var v = ie, $ = /* @__PURE__ */ Symbol.for("react.transitional.element"), Y = /* @__PURE__ */ Symbol.for("react.portal"), p = /* @__PURE__ */ Symbol.for("react.fragment"), K = /* @__PURE__ */ Symbol.for("react.strict_mode"), C = /* @__PURE__ */ Symbol.for("react.profiler"), M = /* @__PURE__ */ Symbol.for("react.consumer"), S = /* @__PURE__ */ Symbol.for("react.context"), A = /* @__PURE__ */ Symbol.for("react.forward_ref"), Z = /* @__PURE__ */ Symbol.for("react.suspense"), ae = /* @__PURE__ */ Symbol.for("react.suspense_list"), he = /* @__PURE__ */ Symbol.for("react.memo"), le = /* @__PURE__ */ Symbol.for("react.lazy"), J = /* @__PURE__ */ Symbol.for("react.activity"), we = /* @__PURE__ */ Symbol.for("react.client.reference"), I = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.prototype.hasOwnProperty, Q = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(f) {
        return f();
      }
    };
    var T, P = {}, E = v.react_stack_bottom_frame.bind(
      v,
      a
    )(), w = k(n(a)), R = {};
    Te.Fragment = p, Te.jsx = function(f, D, q) {
      var U = 1e4 > I.recentlyCreatedOwnerStacks++;
      return m(
        f,
        D,
        q,
        !1,
        U ? Error("react-stack-top-frame") : E,
        U ? k(n(f)) : w
      );
    }, Te.jsxs = function(f, D, q) {
      var U = 1e4 > I.recentlyCreatedOwnerStacks++;
      return m(
        f,
        D,
        q,
        !0,
        U ? Error("react-stack-top-frame") : E,
        U ? k(n(f)) : w
      );
    };
  })()), Te;
}
var ft;
function Qt() {
  return ft || (ft = 1, process.env.NODE_ENV === "production" ? Ue.exports = Gt() : Ue.exports = Zt()), Ue.exports;
}
var c = Qt();
function er() {
  return /* @__PURE__ */ c.jsx("div", { className: "absolute top-0 left-0 flex items-center justify-center h-screen w-screen bg-transparent", children: /* @__PURE__ */ c.jsx("div", { className: "w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" }) });
}
function tr(e) {
  if (!e.asyncState)
    return e.onFinish ? e.onFinish({}, e.children) : e.children;
  if (e.asyncState.error) {
    if (e.onError)
      return e.onError(e.asyncState.error, e.children);
    throw e.asyncState.error;
  }
  return e.asyncState.finished ? e.onFinish ? e.onFinish(e.asyncState, e.children) : e.children : e.onFallback ? e.onFallback(e.asyncState.args, e.children) : /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    e.children,
    /* @__PURE__ */ c.jsx(er, {})
  ] });
}
function rr() {
  const e = Se((/* @__PURE__ */ new Date()).getTime()), [, r] = oe(!1);
  xe(() => {
    const n = setInterval(() => r((s) => !s), 100);
    return () => clearInterval(n);
  }, []);
  const t = (/* @__PURE__ */ new Date()).getTime() - e.current;
  return /* @__PURE__ */ c.jsx(c.Fragment, { children: nr(t) });
}
function nr(e) {
  const r = Math.floor(e / 100) % 10;
  e = Math.floor(e / 1e3);
  const t = e % 60;
  e = Math.floor(e / 60);
  const n = e;
  return (n ? `${n.toString().padStart(2, " ")}m ` : "") + `${t.toString().padStart(2, " ")}.${r}s`;
}
function cn() {
  return /* @__PURE__ */ c.jsxs("div", { children: [
    "Loading... ",
    /* @__PURE__ */ c.jsx(rr, {})
  ] });
}
async function un(e) {
  let r;
  return new Promise(
    (t) => {
      r = setTimeout(t, e);
    }
  ).finally(
    () => clearTimeout(r)
  );
}
function sr(e, r) {
  const [t, n] = oe(r), [s, a] = oe(), [l, u] = oe(r ? void 0 : (/* @__PURE__ */ new Date()).getTime()), [_, h] = oe(), [m, y] = oe();
  return xe(() => {
    let V = !1;
    return t && (a((/* @__PURE__ */ new Date()).getTime()), u(void 0), h(void 0), e(t).then(
      (v) => {
        V || (y(v), h(void 0), u((/* @__PURE__ */ new Date()).getTime()));
      },
      (v) => {
        V || (y(void 0), h(v), u((/* @__PURE__ */ new Date()).getTime()));
      }
    )), () => {
      V = !0;
    };
  }, [e, t]), Fe(
    () => ({ reload: n, update: y, args: t, started: s, finished: l, result: m, error: _ }),
    [l, t, m]
  );
}
function ar(e) {
  const r = Se(null), t = Se(void 0), n = Se(void 0), s = Se(void 0);
  t.current = void 0, s.current = void 0;
  const a = ({ resolve: u, reject: _ }) => {
    n.current = u?.args, s.current = u?.result, t.current = _, r.current?.close(_ ?? u?.action ?? r.current?.returnValue);
  };
  xe(() => {
    e.open && r.current?.showModal();
  }, [e.open]);
  const l = typeof e.children == "function" ? e.children({ open: e.open, close: a, args: e.args }) : e.children;
  return /* @__PURE__ */ c.jsxs(
    "dialog",
    {
      ref: r,
      className: "modal",
      onCancel: (u) => {
        u.preventDefault(), u.stopPropagation(), a({ resolve: {}, reject: "esc" });
      },
      onClose: () => {
        (t.current || s.current) && e.onClose?.({
          resolve: { args: n.current, action: t.current ?? r.current?.returnValue, result: s.current },
          reject: t.current
        });
      },
      children: [
        /* @__PURE__ */ c.jsxs(
          "div",
          {
            className: `modal-box w-fit resize max-h-[calc(100%-1em)] max-w-[calc(100%-1em)] flex-1 flex flex-col overflow-hidden ${e.variant === "full" ? "min-h-[calc(100%-1em)] min-w-[calc(100%-1em)]" : ""}`,
            children: [
              /* @__PURE__ */ c.jsx("div", { className: "font-bold text-lg grid gap-1 p-1", children: typeof e.header == "function" ? e.header({ close: a, args: e.args }) : e.header }, "dialog_header"),
              e.noWrapper ? l : /* @__PURE__ */ c.jsx("div", { className: "py-0 flex-1 overflow-y-auto", children: l }, "dialog_body"),
              e.footer && /* @__PURE__ */ c.jsx("div", { className: "modal-action grid gap-1 p-1", children: typeof e.footer == "function" ? e.footer({ close: a, args: e.args }) : e.footer }, "dialog_footer"),
              /* @__PURE__ */ c.jsx("form", { method: "dialog", children: /* @__PURE__ */ c.jsx("button", { formMethod: "dialog", className: "btn btn-sm btn-circle btn-ghost absolute right-2 top-2", onClick: () => t.current = "x", children: "✕" }) }, "dialog_close")
            ]
          },
          "dialog_container"
        ),
        /* @__PURE__ */ c.jsx("form", { method: "dialog", className: "modal-backdrop", onSubmit: () => t.current = "out", children: /* @__PURE__ */ c.jsx("button", { formMethod: "dialog", children: "close" }) }, "dialog_backdrop")
      ]
    },
    "dialog"
  );
}
const ir = document.getElementById("modal-root") ?? document.body;
function Ge(e) {
  const [r, t] = oe(e.args), [n, s] = oe(e.open), [a, l] = oe(null), u = Ee(
    ({ resolve: m, reject: y }) => {
      l(null), s(void 0), a?.(y ? { action: y } : m), e.onClose?.({ resolve: m, reject: y });
    },
    [a, e]
  ), _ = Ee((m) => (m !== void 0 && t(m), s(!0), new Promise((y) => {
    l(() => y);
  })), []), h = Fe(() => Kt(/* @__PURE__ */ c.jsx(ar, { ...e, open: n, args: r, onClose: u }), ir), [e, n, r, u]);
  return Fe(() => ({ component: h, value: _ }), [h, _]);
}
const mt = [
  [/YYYY/, "~0~", "(?<year>\\d{4})"],
  [/YY/, "~1~", "(?<year>\\d{2})"],
  [/MM/, "~2~", "(?<month>\\d{1,2})"],
  [/DD/, "~3~", "(?<day>\\d{1,2})"],
  [/HH/, "~4~", "(?<hour>\\d{1,2})?"],
  [/hh/, "~5~", "(?<hour>\\d{1,2})?"],
  [/mm/, "~6~", "(?<minute>\\d{1,2})?"],
  [/ss/, "~7~", "(?<second>\\d{1,2})?"],
  [/SSS/, "~8~", "(?<ms>\\d{1,3})?"],
  [/A/, "~9~", "(?<ampm>AM|PM)?"],
  [/a/, "~A~", "(?<ampm>am|pm)?"],
  [/Z/, "~B~", "(?<tz>[+-]\\d{2}:?\\d{2}|Z)?"]
], ht = /* @__PURE__ */ new Map();
function gt(e, r = "") {
  const t = e + "/" + r;
  let n = ht.get(t);
  if (!n) {
    let s = e;
    s = s.trim().replace(/\s+/g, "\\s*");
    for (const [a, l] of mt)
      s = s.replace(a, l);
    s = s.replace(/~[^~]~|([^~]+)/g, (a, l) => l ? `(${l.replaceAll(".", "\\.")})?` : a);
    for (const [, a, l] of mt)
      s = s.replace(a, l);
    n = new RegExp(`^${s}$`, r), ht.set(t, n);
  }
  return n;
}
function or(e) {
  return e instanceof Date && !isNaN(e.getTime());
}
const Ye = "YYYY-MM-DDTHH:mm:ss.SSSZ";
function Ie(e, r) {
  if (or(e)) return e;
  if (typeof e == "string") {
    if (e.endsWith("Z"))
      return new Date(e);
    const n = gt(r ?? Ye).exec(e) ?? (r ? null : gt(Ye).exec(e));
    if (!n || !n.groups) return null;
    const s = n.groups, a = {};
    if (s.year && (a.year = parseInt(s.year.length === 2 ? "20" + s.year : s.year, 10)), s.month && (a.month = parseInt(s.month, 10)), s.day && (a.day = parseInt(s.day, 10)), s.hour && (a.hour = parseInt(s.hour, 10)), s.minute && (a.minute = parseInt(s.minute, 10)), s.second && (a.second = parseInt(s.second, 10)), s.ms && (a.ms = parseInt(s.ms, 10)), s.ampm && (a.isPM = /pm/i.test(s.ampm), a.isPM && a.hour !== void 0 && a.hour < 12 && (a.hour += 12), !a.isPM && a.hour === 12 && (a.hour = 0)), s.tz && s.tz !== "Z") {
      const [u, _, h] = s.tz.match(/^([+-])(\d{2}):?(\d{2})$/).slice(1), m = parseInt(_, 10) * 60 + parseInt(h, 10);
      a.tzOffset = u === "+" ? -m : m;
    }
    const l = new Date(
      a.year ?? 1970,
      (a.month ?? 1) - 1,
      a.day ?? 1,
      a.hour ?? 0,
      a.minute ?? 0,
      a.second ?? 0,
      a.ms ?? 0
    );
    return a.tzOffset && a.tzOffset !== 0 && l.setMinutes(l.getMinutes() + (a.tzOffset ?? 0)), l;
  }
  return null;
}
function Ze(e, r) {
  let t;
  if (e) {
    const n = (s) => s.toString().padStart(2, "0");
    t = (r ?? Ye).replace(/YYYY/g, n(e.getFullYear())).replace(/DD/g, n(e.getDate())).replace(/MM/g, n(e.getMonth() + 1)).replace(/HH/g, n(e.getHours())).replace(/mm/g, n(e.getMinutes())).replace(/ss/g, n(e.getSeconds())).replace(/SSS/g, n(e.getMilliseconds()));
  }
  return t;
}
function yt(e, r) {
  const t = Object.entries(e).map(([n, s]) => n.toLowerCase().includes("date") ? [n, r(s, n)] : [n, s]);
  return Object.fromEntries(t);
}
function lr(e, r, t = 0, n, s, a, l) {
  const u = [], h = (new Date(e, r - 1, 1).getDay() - t + 7) % 7, m = new Date(e, r - 1, 1 - h, n, s, a, l), y = 42;
  for (let V = 0; V < y; V++) {
    const v = new Date(m);
    v.setDate(m.getDate() + V), u.push(v);
  }
  return u;
}
function dn(e) {
  const r = /* @__PURE__ */ new Date(), t = new Date(r);
  return t.setMonth(r.getMonth() + e), t.setHours(0, 0, 0, 0), t;
}
function fn(e, r) {
  const t = /* @__PURE__ */ new Date(), n = new Date(t);
  return n.setDate(t.getDate() + e), r === "to" ? n.setHours(23, 59, 59, 999) : n.setHours(0, 0, 0, 0), n;
}
const mn = /^[+\-]?(\d+(\.\d+)?|\.\d+)$/, hn = /^[+\-]?(\d+)$/, gn = (e, r) => `${e}`.padStart(r, "0"), yn = (e, r) => `${Number.parseFloat(e.toFixed(r))}`, bn = (e, r = 0) => +`${Math.round(+`${e}e${r}`)}e-${r}`, vn = (e, r = 0) => e.toFixed(r), cr = /^(?<p>#*)(?<i>0*)(?:\.(?<f>0*)(?<s>#*))?$/, ur = (e, r) => {
  const t = cr.exec(r)?.groups;
  if (!t) return null;
  let n = "";
  if (r.includes(".")) {
    const l = (t.f?.length ?? 0) + (t.s?.length ?? 0);
    if (n = e.toFixed(l), t.s) {
      let u = n.length - 1, _ = 0;
      for (; u >= 0 && n[u] === "0" && _ < t.s.length; )
        u--, _++;
      n[u] === "." && u--, n = n.slice(0, u + 1);
    }
  } else
    n = e.toFixed(0);
  const a = (t.i?.length ?? 0) + (t.p?.length ?? 0);
  if (a > 0) {
    const l = n.indexOf("."), u = l >= 0 ? l : n.length;
    n = n.padStart(a + n.length - u, "0");
  }
  return n;
}, dr = (e) => {
  let r = !1, t = "";
  for (let n = e.length - 1; n >= 0; n--) {
    const s = e[n];
    if (!(s === " " || s === " ")) {
      if (s === "." || s === ",") {
        if (r) continue;
        r = !0, t = "." + t;
        continue;
      }
      t = s + t;
    }
  }
  return t;
}, bt = (e, r, t = 1) => Array.from(
  { length: Math.floor((r - e) / t) + 1 },
  (n, s) => e + s * t
);
function fr(e) {
  const { t: r } = be(), [t, n] = oe(e.date ?? /* @__PURE__ */ new Date()), s = lr(
    t.getFullYear(),
    t.getMonth() + 1,
    1,
    t.getHours(),
    t.getMinutes(),
    t.getSeconds(),
    t.getMilliseconds()
  ), a = (m) => n(new Date(t.setMonth(t.getMonth() + m))), l = (m) => n(new Date(t.setMonth(m))), u = (m) => n(new Date(t.setFullYear(m))), _ = t.getMonth(), h = t.getFullYear();
  return /* @__PURE__ */ c.jsxs("div", { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "grid grid-cols-12 gap-2 text-center p-2", children: [
      /* @__PURE__ */ c.jsx("div", { className: "btn btn-sm btn-ghost", onClick: () => a(-12), children: "-" }, "m-12"),
      /* @__PURE__ */ c.jsx(
        "select",
        {
          className: "select select-sm col-span-4",
          onChange: (m) => u(Number(m.target.value)),
          defaultValue: h,
          children: bt(h - 4, h + 4).map((m) => /* @__PURE__ */ c.jsx("option", { value: m, children: m }, m))
        },
        `year_${h}`
      ),
      /* @__PURE__ */ c.jsx("div", { className: "btn btn-sm btn-ghost", onClick: () => a(12), children: "+" }, "m+12"),
      /* @__PURE__ */ c.jsx("div", { className: "btn btn-sm btn-ghost", onClick: () => a(-1), children: "-" }, "m-1"),
      /* @__PURE__ */ c.jsx(
        "select",
        {
          className: "select select-sm col-span-4",
          onChange: (m) => l(Number(m.target.value)),
          defaultValue: _,
          children: bt(0, 11).map((m) => /* @__PURE__ */ c.jsx("option", { value: m, children: r(`~month.${m}`) }, m))
        },
        `month_${_}`
      ),
      /* @__PURE__ */ c.jsx("div", { className: "btn btn-sm btn-ghost", onClick: () => a(1), children: "+" }, "m+1")
    ] }, "current"),
    /* @__PURE__ */ c.jsxs("div", { className: "grid grid-cols-7 gap-2 text-center", children: [
      /* @__PURE__ */ c.jsx("div", { className: "col-span-7 border-b-2" }),
      s.filter((m, y) => y < 7).map((m, y) => /* @__PURE__ */ c.jsx("div", { children: r(`~dayOfWeek.${m.getDay()}`) }, `dw_${y}`)),
      /* @__PURE__ */ c.jsx("div", { className: "col-span-7 border-b-2" }),
      s.map((m, y) => /* @__PURE__ */ c.jsx(
        "button",
        {
          className: `btn ${m.getMonth() !== t.getMonth() ? "btn-ghost opacity-20" : m.getDate() === t.getDate() ? "btn-primary" : "btn-ghost"}`,
          value: m.toISOString(),
          children: m.getDate()
        },
        y
      ))
    ] }, `dates_${h}_${_}`)
  ] }, "calendar");
}
function mr() {
  const { t: e } = be(), r = (n) => /* @__PURE__ */ c.jsx(
    "form",
    {
      method: "dialog",
      onSubmit: (s) => {
        const l = s.nativeEvent.submitter?.value, u = new Date(l);
        u ? n.close?.({ resolve: { action: "select", result: { date: u } } }) : n.close?.({ resolve: { action: "select", result: { date: void 0 } }, reject: "code" });
      },
      children: /* @__PURE__ */ c.jsx("div", { className: "grid grid-cols-2 gap-1 p-1 min-w-[20em]", children: /* @__PURE__ */ c.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ c.jsx(fr, { date: n.args?.date }) }, "content") })
    },
    "form"
  );
  return Ge(
    //useMemo( () => (
    {
      header: (n) => /* @__PURE__ */ c.jsx(c.Fragment, { children: n.args?.title ?? e("~calendar.title") }),
      children: (n) => /* @__PURE__ */ c.jsx(r, { close: n.close, ...n })
    }
  );
}
function hr() {
  const { t: e } = be(), r = (n) => {
    let s = /* @__PURE__ */ c.jsx(c.Fragment, {});
    return n.args?.buttons === void 0 || n.args?.buttons === "no_yes" ? s = /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx("button", { className: "w-full btn btn-sm btn-primary mt-4", name: "action", value: "no", children: e("~confirm.no") }, "no"),
      /* @__PURE__ */ c.jsx("button", { className: "w-full btn btn-sm btn-primary mt-4", name: "action", value: "yes", children: e("~confirm.yes") }, "yes")
    ] }) : n.args?.buttons === "ok" && (s = /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx("span", {}, "_"),
      /* @__PURE__ */ c.jsx("button", { className: "w-full btn btn-sm btn-primary mt-4", name: "action", value: "yes", children: e("~confirm.ok") }, "yes")
    ] })), /* @__PURE__ */ c.jsx(
      "form",
      {
        method: "dialog",
        onSubmit: (a) => {
          const u = a.nativeEvent.submitter?.value;
          n.close?.({ resolve: { action: u, result: { confirmed: u === "yes" } } });
        },
        children: /* @__PURE__ */ c.jsxs("div", { className: "grid grid-cols-2 gap-1 p-1 min-w-[20em]", children: [
          /* @__PURE__ */ c.jsx("div", { className: "col-span-2", children: n.args?.content }, "content"),
          s
        ] })
      },
      "form"
    );
  }, t = Fe(() => ({
    header: (n) => /* @__PURE__ */ c.jsx(c.Fragment, { children: n.args?.title ?? e("~confirm.title") }),
    children: (n) => /* @__PURE__ */ c.jsx(r, { close: n.close, ...n })
  }), []);
  return Ge(t);
}
const vt = "csv";
function gr() {
  const { t: e } = be(), r = (n) => {
    xe(() => {
      const a = localStorage.getItem(vt);
      if (!a) return;
      const l = JSON.parse(a);
      Object.entries(l).forEach(([u, _]) => {
        const h = document.querySelector(`[name="${u}"]`);
        h && (h.value = _);
      });
    });
    const s = /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx("button", { className: "w-full btn btn-sm btn-primary mt-4", name: "action", value: "no", children: e("~confirm.no") }, "no"),
      /* @__PURE__ */ c.jsx("button", { className: "w-full btn btn-sm btn-primary mt-4", name: "action", value: "yes", children: e("~confirm.yes") }, "yes")
    ] });
    return /* @__PURE__ */ c.jsx(
      "form",
      {
        method: "dialog",
        onSubmit: (a) => {
          const u = a.nativeEvent.submitter?.value, _ = new FormData(a.currentTarget), h = Object.fromEntries(_.entries());
          localStorage.setItem(vt, JSON.stringify(h)), n.close?.({ resolve: { action: u, result: { confirmed: u === "yes", ...h } } });
        },
        children: /* @__PURE__ */ c.jsxs("div", { className: "grid grid-cols-2 gap-1 p-1 min-w-[20em]", children: [
          /* @__PURE__ */ c.jsxs("details", { className: "collapse col-span-2", children: [
            /* @__PURE__ */ c.jsxs("summary", { className: "collapse-title text-center", children: [
              e("~setting.title"),
              " ..."
            ] }),
            /* @__PURE__ */ c.jsxs("div", { className: "collapse-content grid grid-cols-2 gap-1 p-1", children: [
              /* @__PURE__ */ c.jsx("label", { children: "OUT" }),
              /* @__PURE__ */ c.jsxs("select", { name: "out", className: "select select-sm", children: [
                /* @__PURE__ */ c.jsx("option", { value: "text", children: "TEXT" }),
                /* @__PURE__ */ c.jsx("option", { value: "xlsx", children: "XLSX" })
              ] }),
              /* @__PURE__ */ c.jsx("label", { children: "BOM" }),
              /* @__PURE__ */ c.jsxs("select", { name: "bom", className: "select select-sm", children: [
                /* @__PURE__ */ c.jsx("option", { value: "" }),
                /* @__PURE__ */ c.jsx("option", { value: "\uFEFF", children: "BOM" })
              ] }),
              /* @__PURE__ */ c.jsx("label", { children: "SEP" }),
              /* @__PURE__ */ c.jsxs("select", { name: "sep", className: "select select-sm", children: [
                /* @__PURE__ */ c.jsx("option", { value: " ", children: "Space" }),
                /* @__PURE__ */ c.jsx("option", { value: "	", children: "Tab" }),
                /* @__PURE__ */ c.jsx("option", { value: ",", children: "Comma" }),
                /* @__PURE__ */ c.jsx("option", { value: ";", children: "Semicolon" }),
                /* @__PURE__ */ c.jsx("option", { value: "|", children: "Pipe" })
              ] }),
              /* @__PURE__ */ c.jsx("label", { children: "EOL" }),
              /* @__PURE__ */ c.jsxs("select", { name: "eol", className: "select select-sm", children: [
                /* @__PURE__ */ c.jsx("option", { value: "\r", children: "CR" }),
                /* @__PURE__ */ c.jsx("option", { value: `
`, children: "LF" }),
                /* @__PURE__ */ c.jsx("option", { value: `\r
`, children: "CRLF" })
              ] })
            ] })
          ] }),
          s
        ] })
      },
      "form"
    );
  }, t = Fe(() => ({
    header: (n) => /* @__PURE__ */ c.jsx(c.Fragment, { children: n.args?.title ?? e("~confirm.title") }),
    children: (n) => /* @__PURE__ */ c.jsx(r, { close: n.close, ...n })
  }), []);
  return Ge(t);
}
function yr(e) {
  const { t: r } = be(), t = Se(null), n = Fe(
    () => e.layout.items?.filter((h) => h.mode !== "hidden") ?? [],
    [e.layout.items]
  ), [s, a] = oe([]);
  xe(() => {
    const h = n?.map((m) => {
      let y = parseInt(localStorage.getItem(`${e.context}${m.name}.width`) ?? "");
      return isFinite(y) || (m.size !== void 0 && (y = parseInt(m.size ?? "") * 11), isFinite(y) || (y = 100)), y;
    }) || [];
    a(h);
  }, [n, e.context]), xe(() => {
    n?.forEach((h, m) => {
      s?.[m] !== void 0 && localStorage.setItem(`${e.context}${h.name}.width`, `${s?.[m] ?? void 0}`);
    });
  }, [n, e.context, s]);
  const l = Ee((h, m) => {
    m.preventDefault();
    const y = m.clientX, V = s?.[h] ?? 0, v = (Y) => {
      const p = Math.max(V + Y.clientX - y, 0);
      a((K) => {
        const C = [...K ?? []];
        return C[h] = p, C;
      });
    }, $ = () => {
      document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", $);
    };
    document.addEventListener("mousemove", v), document.addEventListener("mouseup", $);
  }, [s]), u = e.pager?.("prev"), _ = e.pager?.("next");
  if (s.length)
    return (
      /* w-max */
      /* @__PURE__ */ c.jsxs("table", { className: "table", ref: (h) => {
        t.current = h, e.onTableRef?.(h);
      }, children: [
        /* @__PURE__ */ c.jsx("thead", { children: /* @__PURE__ */ c.jsxs("tr", { children: [
          /* @__PURE__ */ c.jsx("th", { className: "text-center selector", children: e.selector?.(e.data) }, "_"),
          n?.map((h, m) => {
            const y = s?.[m] ? `${s?.[m]}px` : "100px";
            return /* @__PURE__ */ c.jsxs(
              "th",
              {
                className: `${h.type === "hidden" || h.mode === "hidden" ? "hidden" : ""}`,
                style: { width: `${y}`, minWidth: `${y}` },
                children: [
                  /* @__PURE__ */ c.jsx(
                    "div",
                    {
                      className: "cursor-pointer",
                      onClick: (V) => {
                        e.onSort?.(h.name), V.preventDefault(), V.stopPropagation();
                      },
                      children: r(h.label)
                    },
                    "label"
                  ),
                  /* @__PURE__ */ c.jsx(
                    "div",
                    {
                      className: "resize-handle",
                      onMouseDown: (V) => l(m, V)
                    },
                    "resize"
                  )
                ]
              },
              h.name ?? m
            );
          })
        ] }, "0") }, "thead"),
        /* @__PURE__ */ c.jsxs("tbody", { children: [
          u && /* @__PURE__ */ c.jsx("tr", { children: /* @__PURE__ */ c.jsx("th", { colSpan: n?.length, children: u }, "prev") }, "row-1"),
          e.data.map((h, m) => {
            const y = h[e.dataKey], V = typeof y == "string" && y.trim() !== "" ? y : `row_${m}`;
            return /* @__PURE__ */ c.jsxs(
              "tr",
              {
                className: e.rowClassName?.(h, m),
                onClick: (v) => {
                  const $ = !v.shiftKey && v.target.classList.contains("checkbox");
                  e.onClick?.(e.data, m, v.ctrlKey || $, v.shiftKey), v.shiftKey && window.getSelection()?.removeAllRanges();
                },
                onDoubleClick: () => e.onDoubleClick?.(h, m),
                children: [
                  /* @__PURE__ */ c.jsx("td", { className: "text-center selector", children: e.selector?.(e.data, m) }, "_"),
                  e.children !== null && n?.map((v, $) => /* @__PURE__ */ c.jsx("td", { className: v.type === "hidden" || v.mode === "hidden" ? "hidden" : void 0, children: typeof e.children == "function" ? e.children({ entry: h, formatter: e.formatters[v.type ?? "none"], item: v, index: m }) : e.children }, v.name ?? $))
                ]
              },
              V
            );
          }),
          _ && /* @__PURE__ */ c.jsxs("tr", { className: "export-exclude", children: [
            /* @__PURE__ */ c.jsx("td", { className: "text-center selector", children: e.selector?.(e.data) }, "next-selector"),
            /* @__PURE__ */ c.jsx("td", { colSpan: n?.length, children: _ }, "next")
          ] }, "row+1")
        ] }, "tbody")
      ] }, "table")
    );
}
function br() {
  const { t: e } = be(), r = e("~format.datetime") ?? Ye, t = (a, l) => {
    const u = Ie(a, !l || r.includes(l) ? r : l) ?? Ie(a);
    if (u) {
      const _ = Ze(u, l);
      if (a !== _) return _;
    }
  }, n = (a, l) => l !== void 0 ? e(`${l}${a}`) : a;
  return {
    text: n,
    select: n,
    datetime: t,
    number: (a, l, u) => {
      l || (l = "0.####"), u && (a = dr(a));
      const _ = Number(a);
      if (isFinite(_)) {
        const h = ur(_, l);
        if (a !== h) return h;
      }
    }
  };
}
function xn(e, r) {
  return Number.isFinite(e) ? e.toFixed(r) : void 0;
}
function We(e) {
  return e.map((r) => r.addIf ? r.add : r.orElse).filter((r) => r).join(" ");
}
var Pe = (e) => e.type === "checkbox", Ae = (e) => e instanceof Date, fe = (e) => e == null;
const It = (e) => typeof e == "object";
var ne = (e) => !fe(e) && !Array.isArray(e) && It(e) && !Ae(e), vr = (e) => ne(e) && e.target ? Pe(e.target) ? e.target.checked : e.target.value : e, xr = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, wr = (e, r) => e.has(xr(r)), _r = (e) => {
  const r = e.constructor && e.constructor.prototype;
  return ne(r) && r.hasOwnProperty("isPrototypeOf");
}, Qe = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function se(e) {
  if (e instanceof Date)
    return new Date(e);
  const r = typeof FileList < "u" && e instanceof FileList;
  if (Qe && (e instanceof Blob || r))
    return e;
  const t = Array.isArray(e);
  if (!t && !(ne(e) && _r(e)))
    return e;
  const n = t ? [] : Object.create(Object.getPrototypeOf(e));
  for (const s in e)
    Object.prototype.hasOwnProperty.call(e, s) && (n[s] = se(e[s]));
  return n;
}
var ze = (e) => /^\w*$/.test(e), G = (e) => e === void 0, et = (e) => Array.isArray(e) ? e.filter(Boolean) : [], tt = (e) => et(e.replace(/["|']|\]/g, "").split(/\.|\[/)), j = (e, r, t) => {
  if (!r || !ne(e))
    return t;
  const n = (ze(r) ? [r] : tt(r)).reduce((s, a) => fe(s) ? s : s[a], e);
  return G(n) || n === e ? G(e[r]) ? t : e[r] : n;
}, ve = (e) => typeof e == "boolean", ge = (e) => typeof e == "function", X = (e, r, t) => {
  let n = -1;
  const s = ze(r) ? [r] : tt(r), a = s.length, l = a - 1;
  for (; ++n < a; ) {
    const u = s[n];
    let _ = t;
    if (n !== l) {
      const h = e[u];
      _ = ne(h) || Array.isArray(h) ? h : isNaN(+s[n + 1]) ? {} : [];
    }
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return;
    e[u] = _, e = e[u];
  }
};
const xt = {
  BLUR: "blur",
  FOCUS_OUT: "focusout"
}, ye = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, _e = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Sr = ie.createContext(null);
Sr.displayName = "HookFormControlContext";
var Er = (e, r, t, n = !0) => {
  const s = {
    defaultValues: r._defaultValues
  };
  for (const a in e)
    Object.defineProperty(s, a, {
      get: () => {
        const l = a;
        return r._proxyFormState[l] !== ye.all && (r._proxyFormState[l] = !n || ye.all), e[l];
      }
    });
  return s;
};
const jr = typeof window < "u" ? ie.useLayoutEffect : ie.useEffect;
var me = (e) => typeof e == "string", kr = (e, r, t, n, s) => me(e) ? (n && r.watch.add(e), j(t, e, s)) : Array.isArray(e) ? e.map((a) => (n && r.watch.add(a), j(t, a))) : (n && (r.watchAll = !0), t), Je = (e) => fe(e) || !It(e);
function De(e, r, t = /* @__PURE__ */ new WeakSet()) {
  if (Je(e) || Je(r))
    return Object.is(e, r);
  if (Ae(e) && Ae(r))
    return Object.is(e.getTime(), r.getTime());
  const n = Object.keys(e), s = Object.keys(r);
  if (n.length !== s.length)
    return !1;
  if (t.has(e) || t.has(r))
    return !0;
  t.add(e), t.add(r);
  for (const a of n) {
    const l = e[a];
    if (!s.includes(a))
      return !1;
    if (a !== "ref") {
      const u = r[a];
      if (Ae(l) && Ae(u) || ne(l) && ne(u) || Array.isArray(l) && Array.isArray(u) ? !De(l, u, t) : !Object.is(l, u))
        return !1;
    }
  }
  return !0;
}
const Dr = ie.createContext(null);
Dr.displayName = "HookFormContext";
var Fr = (e, r, t, n, s) => r ? {
  ...t[e],
  types: {
    ...t[e] && t[e].types ? t[e].types : {},
    [n]: s || !0
  }
} : {}, Me = (e) => Array.isArray(e) ? e : [e], wt = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (s) => {
      for (const a of e)
        a.next && a.next(s);
    },
    subscribe: (s) => (e.push(s), {
      unsubscribe: () => {
        e = e.filter((a) => a !== s);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
};
function Mt(e, r) {
  const t = {};
  for (const n in e)
    if (e.hasOwnProperty(n)) {
      const s = e[n], a = r[n];
      if (s && ne(s) && a) {
        const l = Mt(s, a);
        ne(l) && (t[n] = l);
      } else e[n] && (t[n] = a);
    }
  return t;
}
var ue = (e) => ne(e) && !Object.keys(e).length, rt = (e) => e.type === "file", qe = (e) => {
  if (!Qe)
    return !1;
  const r = e ? e.ownerDocument : 0;
  return e instanceof (r && r.defaultView ? r.defaultView.HTMLElement : HTMLElement);
}, Lt = (e) => e.type === "select-multiple", nt = (e) => e.type === "radio", Vr = (e) => nt(e) || Pe(e), Ke = (e) => qe(e) && e.isConnected;
function Ar(e, r) {
  const t = r.slice(0, -1).length;
  let n = 0;
  for (; n < t; )
    e = G(e) ? n++ : e[r[n++]];
  return e;
}
function Nr(e) {
  for (const r in e)
    if (e.hasOwnProperty(r) && !G(e[r]))
      return !1;
  return !0;
}
function re(e, r) {
  const t = Array.isArray(r) ? r : ze(r) ? [r] : tt(r), n = t.length === 1 ? e : Ar(e, t), s = t.length - 1, a = t[s];
  return n && delete n[a], s !== 0 && (ne(n) && ue(n) || Array.isArray(n) && Nr(n)) && re(e, t.slice(0, -1)), e;
}
var Cr = (e) => {
  for (const r in e)
    if (ge(e[r]))
      return !0;
  return !1;
};
function Pt(e) {
  return Array.isArray(e) || ne(e) && !Cr(e);
}
function Xe(e, r = {}) {
  for (const t in e) {
    const n = e[t];
    Pt(n) ? (r[t] = Array.isArray(n) ? [] : {}, Xe(n, r[t])) : G(n) || (r[t] = !0);
  }
  return r;
}
function Ce(e, r, t) {
  t || (t = Xe(r));
  for (const n in e) {
    const s = e[n];
    if (Pt(s))
      G(r) || Je(t[n]) ? t[n] = Xe(s, Array.isArray(s) ? [] : {}) : Ce(s, fe(r) ? {} : r[n], t[n]);
    else {
      const a = r[n];
      t[n] = !De(s, a);
    }
  }
  return t;
}
const _t = {
  value: !1,
  isValid: !1
}, St = { value: !0, isValid: !0 };
var $t = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const r = e.filter((t) => t && t.checked && !t.disabled).map((t) => t.value);
      return { value: r, isValid: !!r.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !G(e[0].attributes.value) ? G(e[0].value) || e[0].value === "" ? St : { value: e[0].value, isValid: !0 } : St
    ) : _t;
  }
  return _t;
}, Ut = (e, { valueAsNumber: r, valueAsDate: t, setValueAs: n }) => G(e) ? e : r ? e === "" ? NaN : e && +e : t && me(e) ? new Date(e) : n ? n(e) : e;
const Et = {
  isValid: !1,
  value: null
};
var Yt = (e) => Array.isArray(e) ? e.reduce((r, t) => t && t.checked && !t.disabled ? {
  isValid: !0,
  value: t.value
} : r, Et) : Et;
function jt(e) {
  const r = e.ref;
  return rt(r) ? r.files : nt(r) ? Yt(e.refs).value : Lt(r) ? [...r.selectedOptions].map(({ value: t }) => t) : Pe(r) ? $t(e.refs).value : Ut(G(r.value) ? e.ref.value : r.value, e);
}
var Rr = (e, r, t, n) => {
  const s = {};
  for (const a of e) {
    const l = j(r, a);
    l && X(s, a, l._f);
  }
  return {
    criteriaMode: t,
    names: [...e],
    fields: s,
    shouldUseNativeValidation: n
  };
}, Be = (e) => e instanceof RegExp, Oe = (e) => G(e) ? e : Be(e) ? e.source : ne(e) ? Be(e.value) ? e.value.source : e.value : e, kt = (e) => ({
  isOnSubmit: !e || e === ye.onSubmit,
  isOnBlur: e === ye.onBlur,
  isOnChange: e === ye.onChange,
  isOnAll: e === ye.all,
  isOnTouch: e === ye.onTouched
});
const Dt = "AsyncFunction";
var Tr = (e) => !!e && !!e.validate && !!(ge(e.validate) && e.validate.constructor.name === Dt || ne(e.validate) && Object.values(e.validate).find((r) => r.constructor.name === Dt)), Or = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate), Ft = (e, r, t) => !t && (r.watchAll || r.watch.has(e) || [...r.watch].some((n) => e.startsWith(n) && /^\.\w+/.test(e.slice(n.length))));
const Le = (e, r, t, n) => {
  for (const s of t || Object.keys(e)) {
    const a = j(e, s);
    if (a) {
      const { _f: l, ...u } = a;
      if (l) {
        if (l.refs && l.refs[0] && r(l.refs[0], s) && !n)
          return !0;
        if (l.ref && r(l.ref, l.name) && !n)
          return !0;
        if (Le(u, r))
          break;
      } else if (ne(u) && Le(u, r))
        break;
    }
  }
};
function Vt(e, r, t) {
  const n = j(e, t);
  if (n || ze(t))
    return {
      error: n,
      name: t
    };
  const s = t.split(".");
  for (; s.length; ) {
    const a = s.join("."), l = j(r, a), u = j(e, a);
    if (l && !Array.isArray(l) && t !== a)
      return { name: t };
    if (u && u.type)
      return {
        name: a,
        error: u
      };
    if (u && u.root && u.root.type)
      return {
        name: `${a}.root`,
        error: u.root
      };
    s.pop();
  }
  return {
    name: t
  };
}
var Ir = (e, r, t, n) => {
  t(e);
  const { name: s, ...a } = e;
  return ue(a) || Object.keys(a).length >= Object.keys(r).length || Object.keys(a).find((l) => r[l] === (!n || ye.all));
}, Mr = (e, r, t) => !e || !r || e === r || Me(e).some((n) => n && (t ? n === r : n.startsWith(r) || r.startsWith(n))), Lr = (e, r, t, n, s) => s.isOnAll ? !1 : !t && s.isOnTouch ? !(r || e) : (t ? n.isOnBlur : s.isOnBlur) ? !e : (t ? n.isOnChange : s.isOnChange) ? e : !0, Pr = (e, r) => !et(j(e, r)).length && re(e, r), $r = (e, r, t) => {
  const n = Me(j(e, t));
  return X(n, "root", r[t]), X(e, t, n), e;
};
function At(e, r, t = "validate") {
  if (me(e) || Array.isArray(e) && e.every(me) || ve(e) && !e)
    return {
      type: t,
      message: me(e) ? e : "",
      ref: r
    };
}
var Ne = (e) => ne(e) && !Be(e) ? e : {
  value: e,
  message: ""
}, Nt = async (e, r, t, n, s, a) => {
  const { ref: l, refs: u, required: _, maxLength: h, minLength: m, min: y, max: V, pattern: v, validate: $, name: Y, valueAsNumber: p, mount: K } = e._f, C = j(t, Y);
  if (!K || r.has(Y))
    return {};
  const M = u ? u[0] : l, S = (I) => {
    s && M.reportValidity && (M.setCustomValidity(ve(I) ? "" : I || ""), M.reportValidity());
  }, A = {}, Z = nt(l), ae = Pe(l), he = Z || ae, le = (p || rt(l)) && G(l.value) && G(C) || qe(l) && l.value === "" || C === "" || Array.isArray(C) && !C.length, J = Fr.bind(null, Y, n, A), we = (I, L, Q, k = _e.maxLength, T = _e.minLength) => {
    const P = I ? L : Q;
    A[Y] = {
      type: I ? k : T,
      message: P,
      ref: l,
      ...J(I ? k : T, P)
    };
  };
  if (a ? !Array.isArray(C) || !C.length : _ && (!he && (le || fe(C)) || ve(C) && !C || ae && !$t(u).isValid || Z && !Yt(u).isValid)) {
    const { value: I, message: L } = me(_) ? { value: !!_, message: _ } : Ne(_);
    if (I && (A[Y] = {
      type: _e.required,
      message: L,
      ref: M,
      ...J(_e.required, L)
    }, !n))
      return S(L), A;
  }
  if (!le && (!fe(y) || !fe(V))) {
    let I, L;
    const Q = Ne(V), k = Ne(y);
    if (!fe(C) && !isNaN(C)) {
      const T = l.valueAsNumber || C && +C;
      fe(Q.value) || (I = T > Q.value), fe(k.value) || (L = T < k.value);
    } else {
      const T = l.valueAsDate || new Date(C), P = (R) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + R), E = l.type == "time", w = l.type == "week";
      me(Q.value) && C && (I = E ? P(C) > P(Q.value) : w ? C > Q.value : T > new Date(Q.value)), me(k.value) && C && (L = E ? P(C) < P(k.value) : w ? C < k.value : T < new Date(k.value));
    }
    if ((I || L) && (we(!!I, Q.message, k.message, _e.max, _e.min), !n))
      return S(A[Y].message), A;
  }
  if ((h || m) && !le && (me(C) || a && Array.isArray(C))) {
    const I = Ne(h), L = Ne(m), Q = !fe(I.value) && C.length > +I.value, k = !fe(L.value) && C.length < +L.value;
    if ((Q || k) && (we(Q, I.message, L.message), !n))
      return S(A[Y].message), A;
  }
  if (v && !le && me(C)) {
    const { value: I, message: L } = Ne(v);
    if (Be(I) && !C.match(I) && (A[Y] = {
      type: _e.pattern,
      message: L,
      ref: l,
      ...J(_e.pattern, L)
    }, !n))
      return S(L), A;
  }
  if ($) {
    if (ge($)) {
      const I = await $(C, t), L = At(I, M);
      if (L && (A[Y] = {
        ...L,
        ...J(_e.validate, L.message)
      }, !n))
        return S(L.message), A;
    } else if (ne($)) {
      let I = {};
      for (const L in $) {
        if (!ue(I) && !n)
          break;
        const Q = At(await $[L](C, t), M, L);
        Q && (I = {
          ...Q,
          ...J(L, Q.message)
        }, S(Q.message), n && (A[Y] = I));
      }
      if (!ue(I) && (A[Y] = {
        ref: M,
        ...I
      }, !n))
        return A;
    }
  }
  return S(!0), A;
};
const Ur = {
  mode: ye.onSubmit,
  reValidateMode: ye.onChange,
  shouldFocusError: !0
};
function Yr(e = {}) {
  let r = {
    ...Ur,
    ...e
  }, t = {
    submitCount: 0,
    isDirty: !1,
    isReady: !1,
    isLoading: ge(r.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: r.errors || {},
    disabled: r.disabled || !1
  }, n = {}, s = ne(r.defaultValues) || ne(r.values) ? se(r.defaultValues || r.values) || {} : {}, a = r.shouldUnregister ? {} : se(s), l = {
    action: !1,
    mount: !1,
    watch: !1,
    keepIsValid: !1
  }, u = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, _, h = 0;
  const m = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, y = {
    ...m
  };
  let V = {
    ...y
  };
  const v = {
    array: wt(),
    state: wt()
  }, $ = r.criteriaMode === ye.all, Y = (i) => (o) => {
    clearTimeout(h), h = setTimeout(i, o);
  }, p = async (i) => {
    if (!l.keepIsValid && !r.disabled && (y.isValid || V.isValid || i)) {
      let o;
      r.resolver ? (o = ue((await he()).errors), K()) : o = await J(n, !0), o !== t.isValid && v.state.next({
        isValid: o
      });
    }
  }, K = (i, o) => {
    !r.disabled && (y.isValidating || y.validatingFields || V.isValidating || V.validatingFields) && ((i || Array.from(u.mount)).forEach((d) => {
      d && (o ? X(t.validatingFields, d, o) : re(t.validatingFields, d));
    }), v.state.next({
      validatingFields: t.validatingFields,
      isValidating: !ue(t.validatingFields)
    }));
  }, C = (i, o = [], d, x, b = !0, g = !0) => {
    if (x && d && !r.disabled) {
      if (l.action = !0, g && Array.isArray(j(n, i))) {
        const F = d(j(n, i), x.argA, x.argB);
        b && X(n, i, F);
      }
      if (g && Array.isArray(j(t.errors, i))) {
        const F = d(j(t.errors, i), x.argA, x.argB);
        b && X(t.errors, i, F), Pr(t.errors, i);
      }
      if ((y.touchedFields || V.touchedFields) && g && Array.isArray(j(t.touchedFields, i))) {
        const F = d(j(t.touchedFields, i), x.argA, x.argB);
        b && X(t.touchedFields, i, F);
      }
      (y.dirtyFields || V.dirtyFields) && (t.dirtyFields = Ce(s, a)), v.state.next({
        name: i,
        isDirty: I(i, o),
        dirtyFields: t.dirtyFields,
        errors: t.errors,
        isValid: t.isValid
      });
    } else
      X(a, i, o);
  }, M = (i, o) => {
    X(t.errors, i, o), v.state.next({
      errors: t.errors
    });
  }, S = (i) => {
    t.errors = i, v.state.next({
      errors: t.errors,
      isValid: !1
    });
  }, A = (i, o, d, x) => {
    const b = j(n, i);
    if (b) {
      const g = j(a, i, G(d) ? j(s, i) : d);
      G(g) || x && x.defaultChecked || o ? X(a, i, o ? g : jt(b._f)) : k(i, g), l.mount && !l.action && p();
    }
  }, Z = (i, o, d, x, b) => {
    let g = !1, F = !1;
    const z = {
      name: i
    };
    if (!r.disabled) {
      if (!d || x) {
        (y.isDirty || V.isDirty) && (F = t.isDirty, t.isDirty = z.isDirty = I(), g = F !== z.isDirty);
        const H = De(j(s, i), o);
        F = !!j(t.dirtyFields, i), H ? re(t.dirtyFields, i) : X(t.dirtyFields, i, !0), z.dirtyFields = t.dirtyFields, g = g || (y.dirtyFields || V.dirtyFields) && F !== !H;
      }
      if (d) {
        const H = j(t.touchedFields, i);
        H || (X(t.touchedFields, i, d), z.touchedFields = t.touchedFields, g = g || (y.touchedFields || V.touchedFields) && H !== d);
      }
      g && b && v.state.next(z);
    }
    return g ? z : {};
  }, ae = (i, o, d, x) => {
    const b = j(t.errors, i), g = (y.isValid || V.isValid) && ve(o) && t.isValid !== o;
    if (r.delayError && d ? (_ = Y(() => M(i, d)), _(r.delayError)) : (clearTimeout(h), _ = null, d ? X(t.errors, i, d) : re(t.errors, i)), (d ? !De(b, d) : b) || !ue(x) || g) {
      const F = {
        ...x,
        ...g && ve(o) ? { isValid: o } : {},
        errors: t.errors,
        name: i
      };
      t = {
        ...t,
        ...F
      }, v.state.next(F);
    }
  }, he = async (i) => (K(i, !0), await r.resolver(a, r.context, Rr(i || u.mount, n, r.criteriaMode, r.shouldUseNativeValidation))), le = async (i) => {
    const { errors: o } = await he(i);
    if (K(i), i)
      for (const d of i) {
        const x = j(o, d);
        x ? X(t.errors, d, x) : re(t.errors, d);
      }
    else
      t.errors = o;
    return o;
  }, J = async (i, o, d = {
    valid: !0
  }) => {
    for (const x in i) {
      const b = i[x];
      if (b) {
        const { _f: g, ...F } = b;
        if (g) {
          const z = u.array.has(g.name), H = b._f && Tr(b._f);
          H && y.validatingFields && K([g.name], !0);
          const ce = await Nt(b, u.disabled, a, $, r.shouldUseNativeValidation && !o, z);
          if (H && y.validatingFields && K([g.name]), ce[g.name] && (d.valid = !1, o || e.shouldUseNativeValidation))
            break;
          !o && (j(ce, g.name) ? z ? $r(t.errors, ce, g.name) : X(t.errors, g.name, ce[g.name]) : re(t.errors, g.name));
        }
        !ue(F) && await J(F, o, d);
      }
    }
    return d.valid;
  }, we = () => {
    for (const i of u.unMount) {
      const o = j(n, i);
      o && (o._f.refs ? o._f.refs.every((d) => !Ke(d)) : !Ke(o._f.ref)) && O(i);
    }
    u.unMount = /* @__PURE__ */ new Set();
  }, I = (i, o) => !r.disabled && (i && o && X(a, i, o), !De(f(), s)), L = (i, o, d) => kr(i, u, {
    ...l.mount ? a : G(o) ? s : me(i) ? { [i]: o } : o
  }, d, o), Q = (i) => et(j(l.mount ? a : s, i, r.shouldUnregister ? j(s, i, []) : [])), k = (i, o, d = {}) => {
    const x = j(n, i);
    let b = o;
    if (x) {
      const g = x._f;
      g && (!g.disabled && X(a, i, Ut(o, g)), b = qe(g.ref) && fe(o) ? "" : o, Lt(g.ref) ? [...g.ref.options].forEach((F) => F.selected = b.includes(F.value)) : g.refs ? Pe(g.ref) ? g.refs.forEach((F) => {
        (!F.defaultChecked || !F.disabled) && (Array.isArray(b) ? F.checked = !!b.find((z) => z === F.value) : F.checked = b === F.value || !!b);
      }) : g.refs.forEach((F) => F.checked = F.value === b) : rt(g.ref) ? g.ref.value = "" : (g.ref.value = b, g.ref.type || v.state.next({
        name: i,
        values: se(a)
      })));
    }
    (d.shouldDirty || d.shouldTouch) && Z(i, b, d.shouldTouch, d.shouldDirty, !0), d.shouldValidate && R(i);
  }, T = (i, o, d) => {
    for (const x in o) {
      if (!o.hasOwnProperty(x))
        return;
      const b = o[x], g = i + "." + x, F = j(n, g);
      (u.array.has(i) || ne(b) || F && !F._f) && !Ae(b) ? T(g, b, d) : k(g, b, d);
    }
  }, P = (i, o, d = {}) => {
    const x = j(n, i), b = u.array.has(i), g = se(o);
    X(a, i, g), b ? (v.array.next({
      name: i,
      values: se(a)
    }), (y.isDirty || y.dirtyFields || V.isDirty || V.dirtyFields) && d.shouldDirty && v.state.next({
      name: i,
      dirtyFields: Ce(s, a),
      isDirty: I(i, g)
    })) : x && !x._f && !fe(g) ? T(i, g, d) : k(i, g, d), Ft(i, u) ? v.state.next({
      ...t,
      name: i,
      values: se(a)
    }) : v.state.next({
      name: l.mount ? i : void 0,
      values: se(a)
    });
  }, E = async (i) => {
    l.mount = !0;
    const o = i.target;
    let d = o.name, x = !0;
    const b = j(n, d), g = (H) => {
      x = Number.isNaN(H) || Ae(H) && isNaN(H.getTime()) || De(H, j(a, d, H));
    }, F = kt(r.mode), z = kt(r.reValidateMode);
    if (b) {
      let H, ce;
      const Ve = o.type ? jt(b._f) : vr(i), ke = i.type === xt.BLUR || i.type === xt.FOCUS_OUT, zt = !Or(b._f) && !r.resolver && !j(t.errors, d) && !b._f.deps || Lr(ke, j(t.touchedFields, d), t.isSubmitted, z, F), He = Ft(d, u, ke);
      X(a, d, Ve), ke ? (!o || !o.readOnly) && (b._f.onBlur && b._f.onBlur(i), _ && _(0)) : b._f.onChange && b._f.onChange(i);
      const pe = Z(d, Ve, ke), Ht = !ue(pe) || He;
      if (!ke && v.state.next({
        name: d,
        type: i.type,
        values: se(a)
      }), zt)
        return (y.isValid || V.isValid) && (r.mode === "onBlur" ? ke && p() : ke || p()), Ht && v.state.next({ name: d, ...He ? {} : pe });
      if (!ke && He && v.state.next({ ...t }), r.resolver) {
        const { errors: ot } = await he([d]);
        if (K([d]), g(Ve), x) {
          const pt = Vt(t.errors, n, d), lt = Vt(ot, n, pt.name || d);
          H = lt.error, d = lt.name, ce = ue(ot);
        }
      } else
        K([d], !0), H = (await Nt(b, u.disabled, a, $, r.shouldUseNativeValidation))[d], K([d]), g(Ve), x && (H ? ce = !1 : (y.isValid || V.isValid) && (ce = await J(n, !0)));
      x && (b._f.deps && (!Array.isArray(b._f.deps) || b._f.deps.length > 0) && R(b._f.deps), ae(d, ce, H, pe));
    }
  }, w = (i, o) => {
    if (j(t.errors, o) && i.focus)
      return i.focus(), 1;
  }, R = async (i, o = {}) => {
    let d, x;
    const b = Me(i);
    if (r.resolver) {
      const g = await le(G(i) ? i : b);
      d = ue(g), x = i ? !b.some((F) => j(g, F)) : d;
    } else i ? (x = (await Promise.all(b.map(async (g) => {
      const F = j(n, g);
      return await J(F && F._f ? { [g]: F } : F);
    }))).every(Boolean), !(!x && !t.isValid) && p()) : x = d = await J(n);
    return v.state.next({
      ...!me(i) || (y.isValid || V.isValid) && d !== t.isValid ? {} : { name: i },
      ...r.resolver || !i ? { isValid: d } : {},
      errors: t.errors
    }), o.shouldFocus && !x && Le(n, w, i ? b : u.mount), x;
  }, f = (i, o) => {
    let d = {
      ...l.mount ? a : s
    };
    return o && (d = Mt(o.dirtyFields ? t.dirtyFields : t.touchedFields, d)), G(i) ? d : me(i) ? j(d, i) : i.map((x) => j(d, x));
  }, D = (i, o) => ({
    invalid: !!j((o || t).errors, i),
    isDirty: !!j((o || t).dirtyFields, i),
    error: j((o || t).errors, i),
    isValidating: !!j(t.validatingFields, i),
    isTouched: !!j((o || t).touchedFields, i)
  }), q = (i) => {
    const o = i ? Me(i) : void 0;
    o?.forEach((d) => re(t.errors, d)), o ? o.forEach((d) => {
      v.state.next({
        name: d,
        errors: t.errors
      });
    }) : v.state.next({
      errors: {}
    });
  }, U = (i, o, d) => {
    const x = (j(n, i, { _f: {} })._f || {}).ref, b = j(t.errors, i) || {}, { ref: g, message: F, type: z, ...H } = b;
    X(t.errors, i, {
      ...H,
      ...o,
      ref: x
    }), v.state.next({
      name: i,
      errors: t.errors,
      isValid: !1
    }), d && d.shouldFocus && x && x.focus && x.focus();
  }, B = (i, o) => ge(i) ? v.state.subscribe({
    next: (d) => "values" in d && i(L(void 0, o), d)
  }) : L(i, o, !0), de = (i) => v.state.subscribe({
    next: (o) => {
      Mr(i.name, o.name, i.exact) && Ir(o, i.formState || y, Wt, i.reRenderRoot) && i.callback({
        values: { ...a },
        ...t,
        ...o,
        defaultValues: s
      });
    }
  }).unsubscribe, N = (i) => (l.mount = !0, V = {
    ...V,
    ...i.formState
  }, de({
    ...i,
    formState: {
      ...m,
      ...i.formState
    }
  })), O = (i, o = {}) => {
    for (const d of i ? Me(i) : u.mount)
      u.mount.delete(d), u.array.delete(d), o.keepValue || (re(n, d), re(a, d)), !o.keepError && re(t.errors, d), !o.keepDirty && re(t.dirtyFields, d), !o.keepTouched && re(t.touchedFields, d), !o.keepIsValidating && re(t.validatingFields, d), !r.shouldUnregister && !o.keepDefaultValue && re(s, d);
    v.state.next({
      values: se(a)
    }), v.state.next({
      ...t,
      ...o.keepDirty ? { isDirty: I() } : {}
    }), !o.keepIsValid && p();
  }, W = ({ disabled: i, name: o }) => {
    if (ve(i) && l.mount || i || u.disabled.has(o)) {
      const b = u.disabled.has(o) !== !!i;
      i ? u.disabled.add(o) : u.disabled.delete(o), b && l.mount && !l.action && p();
    }
  }, ee = (i, o = {}) => {
    let d = j(n, i);
    const x = ve(o.disabled) || ve(r.disabled);
    return X(n, i, {
      ...d || {},
      _f: {
        ...d && d._f ? d._f : { ref: { name: i } },
        name: i,
        mount: !0,
        ...o
      }
    }), u.mount.add(i), d ? W({
      disabled: ve(o.disabled) ? o.disabled : r.disabled,
      name: i
    }) : A(i, !0, o.value), {
      ...x ? { disabled: o.disabled || r.disabled } : {},
      ...r.progressive ? {
        required: !!o.required,
        min: Oe(o.min),
        max: Oe(o.max),
        minLength: Oe(o.minLength),
        maxLength: Oe(o.maxLength),
        pattern: Oe(o.pattern)
      } : {},
      name: i,
      onChange: E,
      onBlur: E,
      ref: (b) => {
        if (b) {
          ee(i, o), d = j(n, i);
          const g = G(b.value) && b.querySelectorAll && b.querySelectorAll("input,select,textarea")[0] || b, F = Vr(g), z = d._f.refs || [];
          if (F ? z.find((H) => H === g) : g === d._f.ref)
            return;
          X(n, i, {
            _f: {
              ...d._f,
              ...F ? {
                refs: [
                  ...z.filter(Ke),
                  g,
                  ...Array.isArray(j(s, i)) ? [{}] : []
                ],
                ref: { type: g.type, name: i }
              } : { ref: g }
            }
          }), A(i, !1, void 0, g);
        } else
          d = j(n, i, {}), d._f && (d._f.mount = !1), (r.shouldUnregister || o.shouldUnregister) && !(wr(u.array, i) && l.action) && u.unMount.add(i);
      }
    };
  }, te = () => r.shouldFocusError && Le(n, w, u.mount), je = (i) => {
    ve(i) && (v.state.next({ disabled: i }), Le(n, (o, d) => {
      const x = j(n, d);
      x && (o.disabled = x._f.disabled || i, Array.isArray(x._f.refs) && x._f.refs.forEach((b) => {
        b.disabled = x._f.disabled || i;
      }));
    }, 0, !1));
  }, $e = (i, o) => async (d) => {
    let x;
    d && (d.preventDefault && d.preventDefault(), d.persist && d.persist());
    let b = se(a);
    if (v.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: g, values: F } = await he();
      K(), t.errors = g, b = se(F);
    } else
      await J(n);
    if (u.disabled.size)
      for (const g of u.disabled)
        re(b, g);
    if (re(t.errors, "root"), ue(t.errors)) {
      v.state.next({
        errors: {}
      });
      try {
        await i(b, d);
      } catch (g) {
        x = g;
      }
    } else
      o && await o({ ...t.errors }, d), te(), setTimeout(te);
    if (v.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: ue(t.errors) && !x,
      submitCount: t.submitCount + 1,
      errors: t.errors
    }), x)
      throw x;
  }, qt = (i, o = {}) => {
    j(n, i) && (G(o.defaultValue) ? P(i, se(j(s, i))) : (P(i, o.defaultValue), X(s, i, se(o.defaultValue))), o.keepTouched || re(t.touchedFields, i), o.keepDirty || (re(t.dirtyFields, i), t.isDirty = o.defaultValue ? I(i, se(j(s, i))) : I()), o.keepError || (re(t.errors, i), y.isValid && p()), v.state.next({ ...t }));
  }, st = (i, o = {}) => {
    const d = i ? se(i) : s, x = se(d), b = ue(i), g = b ? s : x;
    if (o.keepDefaultValues || (s = d), !o.keepValues) {
      if (o.keepDirtyValues) {
        const F = /* @__PURE__ */ new Set([
          ...u.mount,
          ...Object.keys(Ce(s, a))
        ]);
        for (const z of Array.from(F)) {
          const H = j(t.dirtyFields, z), ce = j(a, z), Ve = j(g, z);
          H && !G(ce) ? X(g, z, ce) : !H && !G(Ve) && P(z, Ve);
        }
      } else {
        if (Qe && G(i))
          for (const F of u.mount) {
            const z = j(n, F);
            if (z && z._f) {
              const H = Array.isArray(z._f.refs) ? z._f.refs[0] : z._f.ref;
              if (qe(H)) {
                const ce = H.closest("form");
                if (ce) {
                  ce.reset();
                  break;
                }
              }
            }
          }
        if (o.keepFieldsRef)
          for (const F of u.mount)
            P(F, j(g, F));
        else
          n = {};
      }
      a = r.shouldUnregister ? o.keepDefaultValues ? se(s) : {} : se(g), v.array.next({
        values: { ...g }
      }), v.state.next({
        values: { ...g }
      });
    }
    u = {
      mount: o.keepDirtyValues ? u.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, l.mount = !y.isValid || !!o.keepIsValid || !!o.keepDirtyValues || !r.shouldUnregister && !ue(g), l.watch = !!r.shouldUnregister, l.keepIsValid = !!o.keepIsValid, l.action = !1, o.keepErrors || (t.errors = {}), v.state.next({
      submitCount: o.keepSubmitCount ? t.submitCount : 0,
      isDirty: b ? !1 : o.keepDirty ? t.isDirty : !!(o.keepDefaultValues && !De(i, s)),
      isSubmitted: o.keepIsSubmitted ? t.isSubmitted : !1,
      dirtyFields: b ? {} : o.keepDirtyValues ? o.keepDefaultValues && a ? Ce(s, a) : t.dirtyFields : o.keepDefaultValues && i ? Ce(s, i) : o.keepDirty ? t.dirtyFields : {},
      touchedFields: o.keepTouched ? t.touchedFields : {},
      errors: o.keepErrors ? t.errors : {},
      isSubmitSuccessful: o.keepIsSubmitSuccessful ? t.isSubmitSuccessful : !1,
      isSubmitting: !1,
      defaultValues: s
    });
  }, at = (i, o) => st(ge(i) ? i(a) : i, { ...r.resetOptions, ...o }), Bt = (i, o = {}) => {
    const d = j(n, i), x = d && d._f;
    if (x) {
      const b = x.refs ? x.refs[0] : x.ref;
      b.focus && setTimeout(() => {
        b.focus(), o.shouldSelect && ge(b.select) && b.select();
      });
    }
  }, Wt = (i) => {
    t = {
      ...t,
      ...i
    };
  }, it = {
    control: {
      register: ee,
      unregister: O,
      getFieldState: D,
      handleSubmit: $e,
      setError: U,
      _subscribe: de,
      _runSchema: he,
      _updateIsValidating: K,
      _focusError: te,
      _getWatch: L,
      _getDirty: I,
      _setValid: p,
      _setFieldArray: C,
      _setDisabledField: W,
      _setErrors: S,
      _getFieldArray: Q,
      _reset: st,
      _resetDefaultValues: () => ge(r.defaultValues) && r.defaultValues().then((i) => {
        at(i, r.resetOptions), v.state.next({
          isLoading: !1
        });
      }),
      _removeUnmounted: we,
      _disableForm: je,
      _subjects: v,
      _proxyFormState: y,
      get _fields() {
        return n;
      },
      get _formValues() {
        return a;
      },
      get _state() {
        return l;
      },
      set _state(i) {
        l = i;
      },
      get _defaultValues() {
        return s;
      },
      get _names() {
        return u;
      },
      set _names(i) {
        u = i;
      },
      get _formState() {
        return t;
      },
      get _options() {
        return r;
      },
      set _options(i) {
        r = {
          ...r,
          ...i
        };
      }
    },
    subscribe: N,
    trigger: R,
    register: ee,
    handleSubmit: $e,
    watch: B,
    setValue: P,
    getValues: f,
    reset: at,
    resetField: qt,
    clearErrors: q,
    unregister: O,
    setError: U,
    setFocus: Bt,
    getFieldState: D
  };
  return {
    ...it,
    formControl: it
  };
}
function qr(e = {}) {
  const r = ie.useRef(void 0), t = ie.useRef(void 0), [n, s] = ie.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: ge(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    isReady: !1,
    defaultValues: ge(e.defaultValues) ? void 0 : e.defaultValues
  });
  if (!r.current)
    if (e.formControl)
      r.current = {
        ...e.formControl,
        formState: n
      }, e.defaultValues && !ge(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions);
    else {
      const { formControl: l, ...u } = Yr(e);
      r.current = {
        ...u,
        formState: n
      };
    }
  const a = r.current.control;
  return a._options = e, jr(() => {
    const l = a._subscribe({
      formState: a._proxyFormState,
      callback: () => s({ ...a._formState }),
      reRenderRoot: !0
    });
    return s((u) => ({
      ...u,
      isReady: !0
    })), a._formState.isReady = !0, l;
  }, [a]), ie.useEffect(() => a._disableForm(e.disabled), [a, e.disabled]), ie.useEffect(() => {
    e.mode && (a._options.mode = e.mode), e.reValidateMode && (a._options.reValidateMode = e.reValidateMode);
  }, [a, e.mode, e.reValidateMode]), ie.useEffect(() => {
    e.errors && (a._setErrors(e.errors), a._focusError());
  }, [a, e.errors]), ie.useEffect(() => {
    e.shouldUnregister && a._subjects.state.next({
      values: a._getWatch()
    });
  }, [a, e.shouldUnregister]), ie.useEffect(() => {
    if (a._proxyFormState.isDirty) {
      const l = a._getDirty();
      l !== n.isDirty && a._subjects.state.next({
        isDirty: l
      });
    }
  }, [a, n.isDirty]), ie.useEffect(() => {
    var l;
    e.values && !De(e.values, t.current) ? (a._reset(e.values, {
      keepFieldsRef: !0,
      ...a._options.resetOptions
    }), !((l = a._options.resetOptions) === null || l === void 0) && l.keepIsValid || a._setValid(), t.current = e.values, s((u) => ({ ...u }))) : a._resetDefaultValues();
  }, [a, e.values]), ie.useEffect(() => {
    a._state.mount || (a._setValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), r.current.formState = ie.useMemo(() => Er(n, a), [a, n]), r.current;
}
function Br(e) {
  const { t: r } = be(), [t, n] = oe(), { register: s } = e.form;
  let a = e.prefix;
  (!e.variant || !["label", "compact", "title"].includes(e.variant)) && (a = void 0), xe(() => {
    async function m() {
      try {
        n(await e.options?.(e.entry));
      } catch (y) {
        console.error(y);
      }
    }
    m();
  }, [e.options, e.entry]);
  const l = j(e.form.formState.errors, e.name), u = !!l, _ = [
    { addIf: !0, add: "w-full" },
    { addIf: !0, add: "select select-sm" },
    { addIf: e.variant === "label", add: "" },
    { addIf: e.variant === "title", add: "select-title" },
    { addIf: e.variant === "ghost", add: "select-ghost" },
    { addIf: u, add: "field-state-invalid" }
  ];
  let h = {};
  if (u) {
    const m = l?.type === "required" ? "~validation.required" : String(l?.message);
    h = {
      title: r(m)
      // "data-tooltip-id": "tooltip",
      // "data-tooltip-content": t(message),
      // "data-tooltip-place": "bottom-start",
    };
  }
  return /* @__PURE__ */ c.jsxs("label", { className: We(_), ...h, children: [
    a && /* @__PURE__ */ c.jsx("span", { className: "label", children: a }),
    /* @__PURE__ */ c.jsx(
      "select",
      {
        ...s(e.name, e.rules),
        disabled: e.disabled,
        className: "field-input",
        autoComplete: e.autoComplete,
        children: t?.map((m, y) => /* @__PURE__ */ c.jsx(
          "option",
          {
            value: m.value,
            disabled: m.disabled,
            children: r(m.label)
          },
          m.value ?? y
        ))
      },
      `${e.name}_${t?.length}`
    )
  ] });
}
function Ct(e) {
  let r = e.type;
  (e.type === "button" || e.type === "confirm") && (r = "submit");
  const t = e.action ?? e.name ?? "true", n = [
    { addIf: !0, add: "w-full btn btn-sm btn-primary" },
    { addIf: !!e.disabled, add: "btn-disabled" },
    { addIf: e.variant === "ghost", add: "btn-ghost" },
    { addIf: e.variant === "title", add: "btn-title" }
  ];
  return /* @__PURE__ */ c.jsx(
    "button",
    {
      type: r,
      name: "action",
      value: t,
      disabled: e.disabled,
      className: We(n),
      children: e.prefix
    }
  );
}
function Rt(e) {
  const { t: r } = be(), t = Se(!1), { register: n, getValues: s, setValue: a } = e.form, l = s(e.name), u = r(e.format), _ = Ee((A, Z) => {
    if (e.formatter && u && A !== void 0) {
      const ae = e.formatter(String(A ?? ""), u, Z);
      if (ae != null)
        return ae;
    }
    return A;
  }, [e.type, e.formatter, u]), [h, m] = oe(() => _(l));
  xe(() => {
    if (l != null) {
      const A = _(l);
      A != null && !t.current && m(A);
    }
  }, [l, _]);
  let y = e.prefix;
  (!e.variant || !["label", "compact", "title"].includes(e.variant)) && (y = void 0);
  let V;
  if (u) {
    const A = r(`${e.format}.pattern`);
    A && !A.startsWith("~") && (V = {
      ...e.rules,
      pattern: {
        value: new RegExp(A),
        message: `${e.format}.message`
      }
    });
  } else
    V = e.rules;
  const v = j(e.form.formState.errors, e.name), $ = !!v, Y = [
    { addIf: !0, add: "w-full" },
    { addIf: ["button", "submit", "reset", "toggle"].includes(e.type), add: "btn btn-sm", orElse: "input input-sm" },
    { addIf: !!e.disabled && ["button", "submit", "reset"].includes(e.type), add: "btn-disabled" },
    { addIf: e.type === "hidden", add: "hidden" },
    { addIf: e.type === "number", add: "number" },
    { addIf: e.type === "checkbox" || e.type === "radio", add: "bg-base-100 border border-base-300" },
    { addIf: e.variant === "label", add: "" },
    { addIf: e.variant === "title", add: "input-title" },
    { addIf: e.variant === "ghost", add: "input-ghost" },
    { addIf: e.variant === "compact", add: "input-compact" },
    { addIf: !!e.action, add: "input-action" },
    { addIf: $, add: "field-state-invalid" }
  ];
  let p = {};
  if ($) {
    const A = v.type === "required" ? "~validation.required" : String(v.message ?? "~validation.unknown");
    p = {
      title: r(A)
      // "data-tooltip-id": "tooltip",
      // "data-tooltip-content": t(message),
      // "data-tooltip-place": "bottom-start",
    };
  } else e.type !== "number" && (p = {
    title: h
  });
  const K = {
    ...V
    // ...(props.type === "number" && {
    //   setValueAs: (value: any) => {
    //     const num = Number(formatValue(value, true));
    //     return Number.isNaN(num) ? "" : num;
    //   }
    // })
  }, C = (A) => {
    const Z = _(A.target.value, !0);
    Z != null && Z !== A.target.value && m(Z), t.current = !1;
  }, M = n(e.name, K), S = e.format !== void 0 ? {
    value: h ?? "",
    onChange: (A) => {
      m(A.target.value), M.onChange?.(A);
    },
    onBlur: (A) => {
      C(A), M.onBlur?.(A);
    },
    name: M.name,
    ref: M.ref
  } : {
    ...M,
    onBlur: C
  };
  return /* @__PURE__ */ c.jsxs("label", { className: We(Y), ...p, children: [
    y && /* @__PURE__ */ c.jsx("span", { className: "label", title: `${y}`, children: y }),
    /* @__PURE__ */ c.jsx(
      "input",
      {
        ...S,
        type: e.type === "number" ? "text" : e.type,
        inputMode: e.type === "number" ? "decimal" : void 0,
        readOnly: e.disabled,
        className: "field-input",
        autoComplete: e.autoComplete,
        onFocus: () => t.current = !0
      }
    ),
    e.suffix && /* @__PURE__ */ c.jsx("span", { className: "label", children: e.suffix })
  ] });
}
function Wr(e) {
  const { register: r } = e.form, t = [
    { addIf: !0, add: "w-full btn btn-sm" },
    { addIf: !!e.disabled, add: "btn-disabled" },
    { addIf: e.variant === "ghost", add: "btn-ghost" }
  ];
  return /* @__PURE__ */ c.jsx(
    "input",
    {
      ...r(e.name),
      type: "checkbox",
      "aria-label": e.prefix?.toString(),
      disabled: e.disabled,
      className: We(t),
      value: e.action ?? "true"
    }
  );
}
function zr() {
  return /* @__PURE__ */ c.jsx("svg", { className: "h-[1em] opacity-50", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ c.jsxs(
    "g",
    {
      strokeLinejoin: "round",
      strokeLinecap: "round",
      strokeWidth: "2.5",
      fill: "none",
      stroke: "currentColor",
      children: [
        /* @__PURE__ */ c.jsx("circle", { cx: "11", cy: "11", r: "8" }),
        /* @__PURE__ */ c.jsx("path", { d: "m21 21-4.3-4.3" })
      ]
    }
  ) });
}
function Hr(e) {
  switch (e.type) {
    case "select":
      return Br(e);
    case "button":
    case "submit":
    case "reset":
    case "confirm":
      return Ct(e);
    case "toggle":
      return Wr(e);
    case "date":
    case "datetime":
    case "datetime-local":
    case "dialog":
      return Rt({
        ...e,
        type: "text",
        suffix: Ct({
          ...e,
          prefix: /* @__PURE__ */ c.jsx(zr, {}),
          type: "button",
          name: "action",
          action: [e.action, e.name].filter((r) => r).join(":"),
          variant: "ghost"
        })
      });
  }
  return Rt(e);
}
function Tt(e) {
  const { t: r } = be();
  let t;
  switch (e.item.type) {
    case "button":
    case "submit":
    case "reset":
    case "toggle":
    case "confirm":
      t = e.name ?? e.item.name;
      break;
    default:
      t = e.name ?? [e.item.group, e.item.name].filter((n) => n).join(".");
  }
  return /* @__PURE__ */ c.jsx("div", { className: `col-span-${Math.min(e.item.span ?? 1, 2)} lg:col-span-${e.item.span ?? 1} ${e.item.mode === "hidden" ? "hidden" : ""}`, children: e.item.name ? /* @__PURE__ */ c.jsx(
    Hr,
    {
      form: e.form,
      name: t,
      type: e.item.type,
      prefix: r(e.item.label),
      disabled: e.disabled ?? e.item.mode === "disabled",
      autoComplete: "off",
      rules: e.item.rules,
      formatter: e.formatter,
      format: e.item.format,
      options: e.options,
      action: e.item.source,
      variant: e.variant
    },
    t
  ) : /* @__PURE__ */ c.jsx(c.Fragment, { children: e.item.label }) }, e.item.name ?? e.index);
}
function pr(e, r, t, n, s, a, l) {
  let u = [];
  const _ = (h, m) => String(t === void 0 ? m : h?.[t] ?? "*");
  if (n && s === void 0)
    e === "many" && (u = n.map((h, m) => {
      const y = _(h, m);
      return r.includes(y) ? void 0 : y;
    }).filter((h) => h));
  else if (n && s !== void 0) {
    const h = _(n?.[s], s);
    if (e === "many" && a)
      u = r.includes(h) ? r.filter((m) => m !== h) : [...r, h];
    else if (e === "many" && l) {
      u = [...r];
      const m = r.at(-1), y = n.findIndex((V, v) => _(V, v) === m);
      if (y !== -1) {
        const V = r.includes(h), v = y <= s ? 1 : -1;
        for (let $ = y; $ != s + v; $ += v) {
          const Y = _(n[$], $);
          V ? $ !== s && (u = u.filter((p) => p !== Y)) : u.includes(Y) || u.push(Y);
        }
      }
    } else h !== "*" && (u = [h]);
  }
  return u;
}
const Kr = (e) => {
  const r = window.getComputedStyle(e);
  return r.display !== "none" && r.visibility !== "hidden";
}, Jr = (e) => /^[+-]?(0|[1-9]\d*)(\.\d+)?$/.test(e);
async function Xr(e, r = "table", t = "\uFEFF", n = "	", s = `
`, a, l) {
  const u = e.current;
  if (!u) return;
  const _ = [], h = u.querySelectorAll("thead tr:not(.export-exclude)");
  _.push(...Array.from(h));
  const m = Array.from(u.querySelectorAll("tbody tr:not(.export-exclude)"));
  let y = !0;
  const V = m.filter((C) => {
    if (C.querySelector("th"))
      return !0;
    const S = C.querySelector("td")?.querySelector(
      'input[type="checkbox"]'
    );
    return S ? (y = S.checked, S.checked) : y;
  });
  _.push(...V);
  const v = _.map((C) => Array.from(C.querySelectorAll("th, td")).filter(Kr).map((S) => {
    const A = S.querySelector("input, textarea, select"), Z = A ? A.value : S.textContent || "";
    return Jr(Z) ? Z : `"${`${Z.trim().replace(/"/g, '""')}`}"`;
  }).join(n)).join(s), $ = `${r}${Ze(/* @__PURE__ */ new Date(), "YYYY-MM-DD HH-mm-ss")}`;
  let Y = new Blob([t + v], { type: `${n === "	" ? "text/tab-separated-values" : "text/csv"}; charset=utf-8;` });
  a === "xlsx" && l && (Y = await l({ name: $, sep: n, eol: s, formData: { blob: Y } }));
  const p = URL.createObjectURL(Y), K = document.createElement("a");
  K.href = p, K.download = `${$}.${a === "xlsx" ? "xlsx" : n === "	" ? "tsv" : "csv"}`, K.click(), URL.revokeObjectURL(p);
}
const Gr = [
  "Escape",
  "Enter",
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
];
function Zr(e, r) {
  if (e instanceof HTMLInputElement) {
    const { selectionStart: t, selectionEnd: n, value: s } = e;
    if (t === null || n === null)
      return !1;
    const a = t === 0 && n === s.length, l = t === 0 && n === 0, u = t === s.length && n === s.length;
    return a || r === "Enter" || l && (r === "ArrowLeft" || r === "ArrowUp") || u && (r === "ArrowRight" || r === "ArrowDown");
  }
  return e instanceof HTMLSelectElement ? r === "ArrowUp" || r === "ArrowDown" ? !1 : r === "Enter" || r === "ArrowLeft" || r === "ArrowRight" : !1;
}
function Qr(e, r) {
  xe(() => {
    function t(n) {
      if (!Gr.includes(n.key)) return;
      const s = n.target;
      if (!(s instanceof HTMLInputElement || s instanceof HTMLSelectElement))
        return;
      const a = n.key;
      Zr(s, a) && e({
        current: s,
        key: a,
        event: n
      });
    }
    return window.addEventListener("keydown", t), () => window.removeEventListener("keydown", t);
  }, [...r, e]);
}
const wn = ["none", "left", "inner", "top", "table"], _n = ["open", "more", "hidden", "text", "number", "select", "radio", "checkbox", "dialog", "datetime", "password", "search", "button", "submit", "reset", "toggle", "confirm"];
function Sn(e) {
  return { span: e, label: "" };
}
function en(e, r, t) {
  if (!e) return;
  const n = e.findIndex(
    (s) => s.group === void 0 ? s.name === r : `${s.group}.${s.name}` === r
  );
  if (n !== -1) {
    for (let s = n + t; s >= 0 && s < e.length; s += t)
      if (e[s].mode === void 0 && e[s].type !== "hidden")
        return e[s];
  }
}
function En(e, r) {
  const t = e.split("."), n = t.slice(0, r);
  if (t.length > r) {
    const s = t.slice(r).join(".");
    return [...n, s];
  }
  return n;
}
const tn = ["args", "table", "modal"], rn = ["args", "table", "action"];
function jn(e) {
  const { t: r } = be(), t = e.model, n = t.form.inputId, [s, a] = oe(t.form.disabled ?? []), l = br(), [u, _] = oe(e.close ? tn : rn), h = hr(), m = mr(), y = gr(), V = e.close ? e.open !== !1 : !0, v = Se(null);
  async function $() {
    await h.value({ title: r("~confirm.info.title"), content: r("~action.select.required"), buttons: "ok" });
  }
  async function Y() {
    await h.value({ title: r("~confirm.info.title"), content: r("~action.select.one.required"), buttons: "ok" });
  }
  const p = Fe(
    () => (e.close ? "modal." : "") + (n.replace(/Id$/, "") + "."),
    [n, e.close]
  ), K = Fe(
    () => ({ ...t.form.args ?? {}, ...e.args }),
    [t.form.args, e.args]
  ), C = Ee((k) => {
    if (V) {
      const T = yt(
        k,
        (P) => Ie(P, r("~format.datetime"))?.toISOString()
      );
      return t.action.search(T);
    } else
      return new Promise((T) => {
        T({});
      });
  }, [t.action.search]), M = sr(C, K), S = qr({
    defaultValues: {
      ...t.form,
      selected: [],
      args: K
    },
    mode: "onChange",
    shouldUnregister: !1
  }), A = S.getValues("action"), Z = Ee((k, T) => {
    const P = T?.slice(3), E = P ? new RegExp(P) : void 0, w = k.items?.map((R) => E ? R.type !== "hidden" && R.name ? { ...R, mode: E.test(R.name) ? "hidden" : void 0 } : { ...R } : { ...R });
    return {
      ...k,
      items: w
    };
  }, [t]), [ae, he] = oe(() => Z(t.table.layout, t.form.args.view));
  Qr((k) => {
    const T = k.current.name;
    let P;
    const E = T.startsWith("input.");
    if (E) {
      if (k.key === "Escape")
        return J("cancel"), k.event.preventDefault(), k.event.stopPropagation(), null;
      if (k.key === "Enter")
        return J("save"), k.event.preventDefault(), k.event.stopPropagation(), null;
    } else if (k.key === "Enter")
      return J("search"), k.event.preventDefault(), k.event.stopPropagation(), null;
    const w = en(
      E ? ae.items : t.fields.layout.items,
      T,
      k.key === "ArrowLeft" || k.key === "ArrowUp" ? -1 : 1
    );
    return w && (P = w.group === void 0 ? w.name : `${w.group}.${w.name}`, P && (S.setFocus(P, { shouldSelect: !0 }), k.event.preventDefault(), k.event.stopPropagation())), null;
  }, [S, t.fields.layout.items, ae]);
  const le = Ee(async (k, T) => {
    const E = T?.nativeEvent?.submitter;
    E?.name;
    let w = E?.value ?? k.action;
    const R = k.selected ?? [], f = k.selected?.at(-1);
    function D(U, B) {
      return B === void 0 || !U || !U.length ? -1 : U.findIndex((de) => String(de[n]) === B);
    }
    function q(U, B) {
      return B.map((de) => U.find((N) => String(N[n]) === de)).filter(Boolean);
    }
    if (w) {
      const U = w, B = M.result?.content ?? [];
      if (e.onAction) {
        const N = q(B, R), O = await e.onAction(U, N);
        if (O)
          w = O;
        else
          return;
      }
      if (w === "search" || w === "default")
        M.reload({ ...k.args }), S.setValue("selected", []), S.setValue("action", "search");
      else if (w === "create" || w === "copy") {
        const N = w === "copy";
        if (N && R.length !== 1) {
          await Y();
          return;
        }
        const O = D(B, f) ?? 0, W = [...B.slice(0, O + 1), { [n]: 0 }, ...B.slice(O + 1)];
        M.update({ ...M.result, content: W });
        const ee = N ? B[O] : void 0, te = t.table.defaults ? await t.table.defaults?.(ee, w) : ee;
        S.setValue("selected", [...R, "0"]), S.setValue("input", { ...te, [n]: 0 }), S.setValue("action", w);
      } else if (w === "edit") {
        if (!R.length) {
          await $();
          return;
        }
        const N = D(B, f);
        N >= 0 && (S.setValue("action", w), S.setValue("input", B[N]));
      } else if (w === "save") {
        if (await S.trigger()) {
          const O = k.input;
          if (O) {
            const W = D(B, String(O[n] ?? f));
            if (W >= 0) {
              const ee = yt(
                O,
                (te) => Ie(te, r("~format.datetime"))?.toISOString()
              );
              try {
                if (O[n] && t.action.save) {
                  const te = Number(O[n]), je = await t.action.save({ id: te, requestBody: ee }), $e = [...B.slice(0, W), je, ...B.slice(W + 1)];
                  M.update({ ...M.result, content: $e });
                } else if (t.action.create) {
                  const te = await t.action.create({ requestBody: ee }), je = [...B.slice(0, W), te, ...B.slice(W + 1)];
                  M.update({ ...M.result, content: je }), S.setValue("selected", [`${te[n]}`]), S.setValue("input", void 0);
                }
                S.setValue("input", void 0), S.setValue("action", void 0);
              } catch (te) {
                alert(JSON.stringify(te));
              }
            }
          }
        }
      } else if (w === "cancel") {
        const N = k.input;
        if (String(N?.[n]) === "0") {
          const O = String(0), W = D(B, O);
          if (W >= 0) {
            const ee = [...B.slice(0, W), ...B.slice(W + 1)];
            S.setValue("selected", R.filter((te) => te !== O)), M.update({ ...M.result, content: ee });
          }
        }
        S.setValue("input", void 0), S.setValue("action", w);
      } else if (w === "delete") {
        if (!R.length) {
          await $();
          return;
        }
        if ((await h.value({
          title: r("~confirm.delete.title"),
          content: r("~confirm.question")
        })).result?.confirmed) {
          for (let W = 0; W < R.length; W++) {
            const ee = Number(R[W]);
            isFinite(ee) && t.action.remove && await t.action.remove({ id: ee });
          }
          const O = new Set(R);
          M.update({ ...M.result, content: M.result?.content?.filter((W) => !O.has(String(W[n]))) }), S.setValue("selected", []);
        }
        S.setValue("action", "search");
      } else if (w === "export") {
        if (!R.length) {
          await $();
          return;
        }
        const O = (await y.value({ title: r("~confirm.export.title") })).result;
        O?.confirmed && await Xr(v, p, O.bom, O.sep, O.eol, O.out, e.onExport);
      } else if (w === "close")
        e.close?.({ resolve: {}, reject: "code" }), S.setValue("action", "search");
      else if (w === "confirm") {
        if (!R.length) {
          await $();
          return;
        }
        const N = q(B, R);
        e.close?.({ resolve: { args: k.args, action: w, result: N } }), S.setValue("action", "search");
      } else {
        const N = w.indexOf(":"), O = Math.max(N, w.lastIndexOf("."));
        if (N >= 0 && O > 0) {
          const W = w.slice(0, N), ee = w.slice(N + 1);
          if (W === "calendar") {
            const te = await m.value(
              { date: Ie(S.getValues(ee), r("~format.datetime")) }
            );
            te.result && S.setValue(ee, Ze(te.result.date, r("~format.datetime")));
          } else if (e.onAction) {
            const te = q(B, R), je = await e.onAction(W, te, ee);
            je && S.setValue(ee, je);
          }
        }
      }
      const de = t.fields.layout.items?.find((N) => N.name === U);
      de && a((N) => {
        const O = new Set(N);
        return de.disable?.forEach(O.add, O), de.enable?.forEach(O.delete, O), N.length === O.size && N.every((W) => O.has(W)) ? N : [...O];
      });
    }
  }, [S, t, M, e]), J = Ee((k) => k ? S.handleSubmit((T) => le?.({ ...T, action: k }))() : S.handleSubmit(le)(), [S, t, le]);
  xe(() => {
    const k = S.watch((T, { name: P, type: E }) => {
      if (E === "change" && P)
        switch (P) {
          // case "args.page":
          // case "args.size":
          case "args.sort":
          case "args.direction":
            J("search");
            break;
          case "selected":
            break;
          case "mode":
            _(
              (w) => T.mode ? [...w.slice(0, -1), "action", ...w.slice(-1)] : w.filter((R) => R !== "action")
            );
            break;
          case "args.view":
            he(Z(ae, T?.args?.view));
            break;
          default:
            P.startsWith("args.");
            break;
        }
    });
    return () => k.unsubscribe();
  }, [S, Z, J, ae]);
  const we = !e.onAction && A !== void 0 && ["edit", "create", "copy"].includes(A), I = t.fields.layout.columns ?? 1, L = (k, T, P, E) => {
    if (!s.includes("edit")) {
      let w;
      if (T === null)
        w = [];
      else {
        const R = K.selection ?? (e.close ? "one" : "many"), f = S.getValues("selected") || [];
        w = pr(R, f, n, k, T, P, E);
      }
      S.setValue("selected", w, {
        shouldDirty: !1,
        shouldTouch: !1,
        shouldValidate: !1
      });
    }
  };
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsx("form", { onSubmit: S.handleSubmit(le), onReset: () => S.reset(), className: "flex-1 flex flex-col overflow-hidden", children: u.map((k) => {
      if (k !== "table") return /* @__PURE__ */ c.jsx("div", { children: /* @__PURE__ */ c.jsx("div", { className: `grid lg:grid-cols-${I} gap-1 p-1`, children: t.fields.layout.items?.filter((T) => T.group === k).map((T, P) => {
        const E = T.source, w = E ? t.fields.options[E] : void 0;
        return /* @__PURE__ */ c.jsx(
          Tt,
          {
            form: S,
            variant: T.variant ?? "title",
            item: T,
            index: P,
            formatter: l[T.type ?? "none"],
            options: w,
            disabled: !!T.name && s.includes(T.name)
          },
          T.name ?? P
        );
      }) }, "content") }, k);
      if (k === "table") {
        const P = (S.getValues("selected") ?? []).at(-1);
        return /* @__PURE__ */ c.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ c.jsx(
          tr,
          {
            asyncState: M,
            onError: (E, w) => /* @__PURE__ */ c.jsx("b", { style: { whiteSpace: "pre" }, children: JSON.stringify(E, null, "  ") }),
            children: /* @__PURE__ */ c.jsx(
              yr,
              {
                onTableRef: (E) => v.current = E,
                context: p,
                data: M.result?.content ?? [],
                dataKey: n,
                formatters: l,
                layout: ae,
                pager: (E) => {
                  const w = M.result?.page?.size, R = M.result?.page?.number, f = M.result?.page?.totalPages ?? 0, D = M.result?.page?.totalElements ?? 0;
                  if (R !== void 0 && w !== void 0 && f > 0) {
                    if (E === "next")
                      return /* @__PURE__ */ c.jsxs("div", { className: "pl-8 cursor-pointer", onMouseEnter: (q) => {
                        if (f > 1) {
                          const U = S.getValues();
                          S.reset(
                            {
                              ...U,
                              args: {
                                ...U.args,
                                size: Number(U.args.size ?? 0) + 100
                              }
                            }
                          ), J("search");
                        }
                      }, children: [
                        Math.min((R + 1) * w, D),
                        " / ",
                        D,
                        " (",
                        Math.round(100 * Math.min((R + 1) * w, D) / (D > 0 ? D : 1)),
                        "%)"
                      ] });
                  } else
                    return null;
                },
                selector: (E, w) => {
                  const R = w !== void 0 ? E?.[w]?.[n] : "*";
                  if (R == null) return null;
                  const f = String(R);
                  return /* @__PURE__ */ c.jsx(
                    "input",
                    {
                      ...S.register("selected", {
                        onChange: (D) => {
                          D.target.value === "*" && L(E, void 0);
                        }
                      }),
                      onDoubleClick: (D) => {
                        L(E, null), D.preventDefault(), D.stopPropagation();
                      },
                      type: "checkbox",
                      value: f,
                      className: f !== "*" ? "peer checkbox checkbox-lg bg-base-100" : "checkbox checkbox-lg bg-base-100",
                      disabled: we
                    },
                    f
                  );
                },
                onSort: (E) => {
                  if (E) {
                    const w = S.getValues();
                    S.reset(
                      {
                        ...w,
                        args: {
                          ...w.args,
                          sort: E.toString(),
                          direction: E === w.args.sort && w.args.direction === "ASC" ? "DESC" : "ASC"
                        }
                      }
                    ), J("search");
                  }
                },
                rowClassName: e.rowClassName,
                onClick: L,
                onDoubleClick: (E, w) => {
                  if (u.includes("action"))
                    s.includes("edit") || J("edit");
                  else {
                    const R = String(E?.[n] ?? "*");
                    S.setValue("selected", [R], {
                      shouldDirty: !1,
                      shouldTouch: !1,
                      shouldValidate: !1
                    }), J("confirm");
                  }
                },
                children: (E) => {
                  const w = E.item.source, R = w ? t.table.options[w] : void 0;
                  if (we && String(E.entry[n]) === P)
                    return /* @__PURE__ */ c.jsx(
                      Tt,
                      {
                        variant: "bordered",
                        form: S,
                        item: E.item,
                        index: E.index,
                        formatter: E.item.source ? void 0 : l[E.item.type ?? "none"],
                        options: R,
                        disabled: E.item.mode === "disabled" || !!E.item.name && s.includes(E.item.name)
                      },
                      E.item.name ?? E.index
                    );
                  let f = E.item.name ? E.entry[E.item.name]?.toString() : "";
                  return E.formatter && f && (f = E.formatter(f, E.item.source ? E.item.format : r(E.item.format)) ?? f), /* @__PURE__ */ c.jsx("div", { className: E.item.type === "number" ? "text-right" : void 0, children: f }, E.item.name ?? E.index);
                }
              }
            )
          }
        ) }, k);
      }
    }) }, "form"),
    h.component,
    m.component,
    y.component,
    e.children
  ] });
}
function nn(e, r) {
  if (e === r) return !0;
  if (!e || !r) return !1;
  const t = Object.keys(e), n = Object.keys(r);
  if (t.length !== n.length) return !1;
  for (const s of t)
    if (e[s] !== r[s]) return !1;
  return !0;
}
function kn() {
  const e = Se(void 0);
  return Ee((r) => ((!e.current || !nn(e.current, r)) && (e.current = r), e.current), []);
}
function Dn(e) {
  const { t: r } = be();
  return /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col h-screen", children: [
    /* @__PURE__ */ c.jsx("header", { className: "flex justify-between bg-base-200 text-black p-0", children: e.menu?.map(
      (t, n) => /* @__PURE__ */ c.jsx("ul", { className: "menu menu-horizontal p-1", children: t.map((s, a) => s.key === "home" ? /* @__PURE__ */ c.jsx("li", { className: "m-1", children: /* @__PURE__ */ c.jsx(ct, { to: { pathname: s.link }, children: /* @__PURE__ */ c.jsx("div", { className: "tooltip tooltip-bottom", "data-tip": r("~home.tooltip"), children: /* @__PURE__ */ c.jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "w-5 h-[1.5em]",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /* @__PURE__ */ c.jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            }
          )
        }
      ) }) }) }, a) : s.link ? /* @__PURE__ */ c.jsx("li", { children: /* @__PURE__ */ c.jsx(
        ct,
        {
          to: { pathname: s.link },
          className: ({ isActive: l }) => l ? "menu-active m-1" : "m-1",
          children: s.label
        }
      ) }, a) : /* @__PURE__ */ c.jsx("li", { className: "p-0 m-1", children: s.label }, a)) }, n)
    ) }),
    /* @__PURE__ */ c.jsx("main", { className: "flex-1 flex flex-col overflow-hidden bg-gray-100 p-0", children: /* @__PURE__ */ c.jsx(Jt, {}) }),
    /* @__PURE__ */ c.jsx("footer", { className: "bg-gray-800 text-white p-2", children: e.footer })
  ] });
}
export {
  tr as AsyncFragment,
  jn as CrudForm,
  mn as DECIMAL,
  Xt as I18nContext,
  hn as INTEGER,
  Hr as Input,
  Rt as InputCommon,
  Br as InputSelect,
  Wr as InputToggle,
  Tt as LayoutInput,
  cn as Loading,
  _n as MetaLayoutItemTypes,
  wn as MetaLayoutVariants,
  ar as Modal,
  yr as Table,
  Dn as VerticalLayout,
  Ye as defaultFormatDatetime,
  un as delay,
  Xr as downloadTable,
  en as findEnabled,
  Ze as formatDate,
  ur as formatNumber,
  lr as generateCalendarDates,
  fn as getDateOffset,
  dn as getDateOffsetMonth,
  pr as getSelection,
  or as isDate,
  Sn as layoutDivider,
  dr as normalizeDecimalInput,
  gn as padNumber,
  Ie as parseDate,
  yt as prepareDateProps,
  bt as range,
  bn as roundNumber,
  En as splitPath,
  We as toClassName,
  xn as toFixed,
  vn as toFixedNumber,
  yn as toOptionalFixed,
  sr as useAsyncState,
  mr as useCalendar,
  hr as useConfirm,
  gr as useExport,
  br as useFormat,
  be as useI18n,
  Qr as useKeyboardNavigation,
  Ge as useModal,
  kn as useStable
};
