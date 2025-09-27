import oe, { useState as C, useMemo as ne } from "react";
import ae from "@rjsf/core";
import se from "@rjsf/validator-ajv8";
var T = { exports: {} }, x = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M;
function ie() {
  if (M) return x;
  M = 1;
  var i = Symbol.for("react.transitional.element"), p = Symbol.for("react.fragment");
  function m(d, n, l) {
    var u = null;
    if (l !== void 0 && (u = "" + l), n.key !== void 0 && (u = "" + n.key), "key" in n) {
      l = {};
      for (var v in n)
        v !== "key" && (l[v] = n[v]);
    } else l = n;
    return n = l.ref, {
      $$typeof: i,
      type: d,
      key: u,
      ref: n !== void 0 ? n : null,
      props: l
    };
  }
  return x.Fragment = p, x.jsx = m, x.jsxs = m, x;
}
var S = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U;
function le() {
  return U || (U = 1, process.env.NODE_ENV !== "production" && (function() {
    function i(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ee ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case w:
          return "Fragment";
        case z:
          return "Profiler";
        case V:
          return "StrictMode";
        case B:
          return "Suspense";
        case Z:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case y:
            return "Portal";
          case X:
            return (e.displayName || "Context") + ".Provider";
          case G:
            return (e._context.displayName || "Context") + ".Consumer";
          case H:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Q:
            return r = e.displayName || null, r !== null ? r : i(e.type) || "Memo";
          case F:
            r = e._payload, e = e._init;
            try {
              return i(e(r));
            } catch {
            }
        }
      return null;
    }
    function p(e) {
      return "" + e;
    }
    function m(e) {
      try {
        p(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var o = r.error, a = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          a
        ), p(e);
      }
    }
    function d(e) {
      if (e === w) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === F)
        return "<...>";
      try {
        var r = i(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var e = O.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function u(e) {
      if (D.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function v(e, r) {
      function o() {
        I || (I = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      o.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: o,
        configurable: !0
      });
    }
    function j() {
      var e = i(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function _(e, r, o, a, h, f, k, A) {
      return o = f.ref, e = {
        $$typeof: g,
        type: e,
        key: r,
        props: f,
        _owner: h
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: j
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
        value: k
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function R(e, r, o, a, h, f, k, A) {
      var s = r.children;
      if (s !== void 0)
        if (a)
          if (re(s)) {
            for (a = 0; a < s.length; a++)
              c(s[a]);
            Object.freeze && Object.freeze(s);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else c(s);
      if (D.call(r, "key")) {
        s = i(e);
        var E = Object.keys(r).filter(function(te) {
          return te !== "key";
        });
        a = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", $[s + a] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a,
          s,
          E,
          s
        ), $[s + a] = !0);
      }
      if (s = null, o !== void 0 && (m(o), s = "" + o), u(r) && (m(r.key), s = "" + r.key), "key" in r) {
        o = {};
        for (var P in r)
          P !== "key" && (o[P] = r[P]);
      } else o = r;
      return s && v(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), _(
        e,
        s,
        f,
        h,
        n(),
        o,
        k,
        A
      );
    }
    function c(e) {
      typeof e == "object" && e !== null && e.$$typeof === g && e._store && (e._store.validated = 1);
    }
    var b = oe, g = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), G = Symbol.for("react.consumer"), X = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), ee = Symbol.for("react.client.reference"), O = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, re = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var I, Y = {}, J = b.react_stack_bottom_frame.bind(
      b,
      l
    )(), L = N(d(l)), $ = {};
    S.Fragment = w, S.jsx = function(e, r, o, a, h) {
      var f = 1e4 > O.recentlyCreatedOwnerStacks++;
      return R(
        e,
        r,
        o,
        !1,
        a,
        h,
        f ? Error("react-stack-top-frame") : J,
        f ? N(d(e)) : L
      );
    }, S.jsxs = function(e, r, o, a, h) {
      var f = 1e4 > O.recentlyCreatedOwnerStacks++;
      return R(
        e,
        r,
        o,
        !0,
        a,
        h,
        f ? Error("react-stack-top-frame") : J,
        f ? N(d(e)) : L
      );
    };
  })()), S;
}
var W;
function ce() {
  return W || (W = 1, process.env.NODE_ENV === "production" ? T.exports = ie() : T.exports = le()), T.exports;
}
var t = ce();
const q = (i) => console.log.bind(console, i), ue = {
  bio: { "ui:widget": "textarea" },
  senha: { "ui:widget": "password" },
  password: { "ui:widget": "password" }
}, me = (i) => {
  const { schema: p, onSubmit: m, uiSchema: d = {}, formData: n, onChange: l } = i, u = {
    ...ue,
    ...d
  };
  return /* @__PURE__ */ t.jsx("div", { className: "flexiform-form-wrapper", children: /* @__PURE__ */ t.jsx(
    ae,
    {
      schema: p,
      uiSchema: u,
      formData: n,
      validator: se,
      onChange: l,
      onSubmit: m || q("Submitted (No Handler)"),
      onError: q("Errors")
    }
  ) });
}, de = {
  title: "Formulário de Cadastro com Regras de Validação",
  description: "Exemplo simples de formulário demonstrando campos obrigatórios, tamanho mínimo e padrões de formato.",
  type: "object",
  required: [
    "nome",
    "sobrenome",
    "email"
  ],
  properties: {
    nome: {
      type: "string",
      title: "Nome",
      default: "Carlos",
      minLength: 2,
      description: "Deve ter pelo menos 2 caracteres."
    },
    sobrenome: {
      type: "string",
      title: "Sobrenome"
    },
    email: {
      type: "string",
      title: "Endereço de E-mail",
      format: "email",
      description: "Por favor, insira um endereço de e-mail válido."
    },
    idade: {
      type: "integer",
      title: "Idade",
      minimum: 18,
      description: "Idade mínima para cadastro é 18 anos."
    },
    bio: {
      type: "string",
      title: "Biografia"
    },
    senha: {
      type: "string",
      title: "Senha",
      minLength: 8,
      description: "A senha deve ter no mínimo 8 caracteres."
    },
    telefone: {
      type: "string",
      title: "Telefone (Somente Números)",
      minLength: 10,
      pattern: "^[0-9]*$",
      description: "Formato: 10 dígitos, somente números (Ex: 1234567890)."
    }
  }
}, fe = "flexiform_saved_submissions";
function be() {
  const [i, p] = C(JSON.stringify(de, null, 2)), [m, d] = C({}), [n, l] = C([]), u = ne(() => {
    try {
      return JSON.parse(i);
    } catch {
      return { type: "object", title: "JSON Inválido", properties: {} };
    }
  }, [i]), v = ({ formData: c }) => {
    const b = (/* @__PURE__ */ new Date()).toLocaleString(), g = {
      id: Date.now(),
      timestamp: b,
      schemaTitle: u.title || "Formulário Sem Título",
      data: c,
      schemaUsed: u
    };
    l((y) => [g, ...y]), d({}), console.log("Dados Submetidos e Salvos:", g.data), alert(`Formulário salvo com sucesso! (${b})`);
  }, j = (c) => {
    d(c.formData);
  }, _ = u.title !== "JSON Inválido", R = () => {
    window.prompt("Digite 'SIM' para apagar todo o histórico de formulários salvos:") === "SIM" && (l([]), localStorage.removeItem(fe));
  };
  return /* @__PURE__ */ t.jsxs("div", { className: "app-container", children: [
    /* @__PURE__ */ t.jsx("h1", { children: "FlexiForm-RiseUp: Playground de Demonstração" }),
    /* @__PURE__ */ t.jsxs("div", { className: "content-wrapper-triple", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "json-editor-panel panel", children: [
        /* @__PURE__ */ t.jsx("h2", { children: "JSON Schema Editor" }),
        /* @__PURE__ */ t.jsx(
          "textarea",
          {
            value: i,
            onChange: (c) => p(c.target.value),
            style: { width: "100%", minHeight: "400px", fontFamily: "monospace" }
          }
        ),
        !_ && /* @__PURE__ */ t.jsx("p", { style: { color: "red" }, children: "Erro: JSON Schema Inválido. Corrija a sintaxe." })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "form-preview-panel panel", children: [
        /* @__PURE__ */ t.jsx("h2", { children: "Pré-visualização do Formulário" }),
        _ ? /* @__PURE__ */ t.jsx(
          me,
          {
            schema: u,
            formData: m,
            onChange: j,
            onSubmit: v
          }
        ) : /* @__PURE__ */ t.jsx("p", { children: "O formulário não pode ser carregado devido a erros no JSON Schema." }),
        /* @__PURE__ */ t.jsx("h3", { style: { marginTop: "20px" }, children: "Dados Atuais (formData)" }),
        /* @__PURE__ */ t.jsx("pre", { style: { backgroundColor: "#f4f4f4", padding: "10px", overflowX: "auto", borderRadius: "4px" }, children: JSON.stringify(m, null, 2) })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "saved-forms-panel panel", children: [
        /* @__PURE__ */ t.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
          /* @__PURE__ */ t.jsxs("h2", { children: [
            "Formulários Salvos (",
            n.length,
            ")"
          ] }),
          n.length > 0 && /* @__PURE__ */ t.jsx("button", { onClick: R, style: { padding: "5px 10px", cursor: "pointer" }, children: "Limpar Todos" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "submissions-list", children: n.length === 0 ? /* @__PURE__ */ t.jsx("p", { children: "Nenhum formulário submetido foi salvo na memória." }) : n.map((c) => /* @__PURE__ */ t.jsxs("details", { className: "saved-form-item", children: [
          /* @__PURE__ */ t.jsxs("summary", { children: [
            /* @__PURE__ */ t.jsx("strong", { children: c.schemaTitle }),
            " - ",
            c.timestamp
          ] }),
          /* @__PURE__ */ t.jsx("pre", { style: { backgroundColor: "#fff", border: "1px dotted #ccc", padding: "10px", marginTop: "10px" }, children: JSON.stringify(c.data, null, 2) })
        ] }, c.id)) })
      ] })
    ] })
  ] });
}
export {
  me as DynamicForm,
  be as FlexiFormPlayground
};
