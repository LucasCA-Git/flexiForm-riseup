import te from "react";
import ne from "@rjsf/core";
import oe from "@rjsf/validator-ajv8";
var p = { exports: {} }, b = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function ae() {
  if (D) return b;
  D = 1;
  var u = Symbol.for("react.transitional.element"), d = Symbol.for("react.fragment");
  function i(f, a, s) {
    var m = null;
    if (s !== void 0 && (m = "" + s), a.key !== void 0 && (m = "" + a.key), "key" in a) {
      s = {};
      for (var _ in a)
        _ !== "key" && (s[_] = a[_]);
    } else s = a;
    return a = s.ref, {
      $$typeof: u,
      type: f,
      key: m,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return b.Fragment = d, b.jsx = i, b.jsxs = i, b;
}
var R = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var I;
function se() {
  return I || (I = 1, process.env.NODE_ENV !== "production" && (function() {
    function u(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === K ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case T:
          return "Fragment";
        case z:
          return "Profiler";
        case J:
          return "StrictMode";
        case H:
          return "Suspense";
        case B:
          return "SuspenseList";
        case Q:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case q:
            return "Portal";
          case G:
            return (e.displayName || "Context") + ".Provider";
          case V:
            return (e._context.displayName || "Context") + ".Consumer";
          case X:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Z:
            return r = e.displayName || null, r !== null ? r : u(e.type) || "Memo";
          case P:
            r = e._payload, e = e._init;
            try {
              return u(e(r));
            } catch {
            }
        }
      return null;
    }
    function d(e) {
      return "" + e;
    }
    function i(e) {
      try {
        d(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), d(e);
      }
    }
    function f(e) {
      if (e === T) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === P)
        return "<...>";
      try {
        var r = u(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = k.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function m(e) {
      if (j.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function _(e, r) {
      function t() {
        y || (y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function M() {
      var e = u(this.type);
      return N[e] || (N[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function W(e, r, t, n, l, c, w, A) {
      return t = c.ref, e = {
        $$typeof: x,
        type: e,
        key: r,
        props: c,
        _owner: l
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: M
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: w
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function g(e, r, t, n, l, c, w, A) {
      var o = r.children;
      if (o !== void 0)
        if (n)
          if (ee(o)) {
            for (n = 0; n < o.length; n++)
              h(o[n]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(o);
      if (j.call(r, "key")) {
        o = u(e);
        var E = Object.keys(r).filter(function(re) {
          return re !== "key";
        });
        n = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", F[o + n] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          E,
          o
        ), F[o + n] = !0);
      }
      if (o = null, t !== void 0 && (i(t), o = "" + t), m(r) && (i(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var O in r)
          O !== "key" && (t[O] = r[O]);
      } else t = r;
      return o && _(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), W(
        e,
        o,
        c,
        l,
        a(),
        t,
        w,
        A
      );
    }
    function h(e) {
      typeof e == "object" && e !== null && e.$$typeof === x && e._store && (e._store.validated = 1);
    }
    var v = te, x = Symbol.for("react.transitional.element"), q = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), G = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), k = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, ee = Array.isArray, S = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var y, N = {}, C = v.react_stack_bottom_frame.bind(
      v,
      s
    )(), Y = S(f(s)), F = {};
    R.Fragment = T, R.jsx = function(e, r, t, n, l) {
      var c = 1e4 > k.recentlyCreatedOwnerStacks++;
      return g(
        e,
        r,
        t,
        !1,
        n,
        l,
        c ? Error("react-stack-top-frame") : C,
        c ? S(f(e)) : Y
      );
    }, R.jsxs = function(e, r, t, n, l) {
      var c = 1e4 > k.recentlyCreatedOwnerStacks++;
      return g(
        e,
        r,
        t,
        !0,
        n,
        l,
        c ? Error("react-stack-top-frame") : C,
        c ? S(f(e)) : Y
      );
    };
  })()), R;
}
var $;
function ue() {
  return $ || ($ = 1, process.env.NODE_ENV === "production" ? p.exports = ae() : p.exports = se()), p.exports;
}
var U = ue();
const L = (u) => console.log.bind(console, u), ce = {
  bio: { "ui:widget": "textarea" },
  senha: { "ui:widget": "password" },
  password: { "ui:widget": "password" }
}, me = (u) => {
  const { schema: d, onSubmit: i, uiSchema: f = {}, formData: a, onChange: s } = u, m = {
    ...ce,
    ...f
  };
  return /* @__PURE__ */ U.jsx("div", { className: "flexiform-form-wrapper", children: /* @__PURE__ */ U.jsx(
    ne,
    {
      schema: d,
      uiSchema: m,
      formData: a,
      validator: oe,
      onChange: s,
      onSubmit: i || L("Submitted (No Handler)"),
      onError: L("Errors")
    }
  ) });
};
export {
  me as DynamicForm
};
