import le, { useState as R, useEffect as _, useMemo as ce } from "react";
import me from "@rjsf/core";
import de from "@rjsf/validator-ajv8";
var k = { exports: {} }, T = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Z;
function fe() {
  if (Z) return T;
  Z = 1;
  var t = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function m(h, i, s) {
    var u = null;
    if (s !== void 0 && (u = "" + s), i.key !== void 0 && (u = "" + i.key), "key" in i) {
      s = {};
      for (var p in i)
        p !== "key" && (s[p] = i[p]);
    } else s = i;
    return i = s.ref, {
      $$typeof: t,
      type: h,
      key: u,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return T.Fragment = c, T.jsx = m, T.jsxs = m, T;
}
var O = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G;
function ue() {
  return G || (G = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ne ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case x:
          return "Fragment";
        case N:
          return "Profiler";
        case y:
          return "StrictMode";
        case re:
          return "Suspense";
        case oe:
          return "SuspenseList";
        case te:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case a:
            return "Portal";
          case K:
            return (e.displayName || "Context") + ".Provider";
          case $:
            return (e._context.displayName || "Context") + ".Consumer";
          case ee:
            var o = e.render;
            return e = e.displayName, e || (e = o.displayName || o.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ae:
            return o = e.displayName || null, o !== null ? o : t(e.type) || "Memo";
          case Y:
            o = e._payload, e = e._init;
            try {
              return t(e(o));
            } catch {
            }
        }
      return null;
    }
    function c(e) {
      return "" + e;
    }
    function m(e) {
      try {
        c(e);
        var o = !1;
      } catch {
        o = !0;
      }
      if (o) {
        o = console;
        var l = o.error, d = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          d
        ), c(e);
      }
    }
    function h(e) {
      if (e === x) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === Y)
        return "<...>";
      try {
        var o = t(e);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var e = C.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function u(e) {
      if (W.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function p(e, o) {
      function l() {
        U || (U = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      l.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: l,
        configurable: !0
      });
    }
    function w() {
      var e = t(this.type);
      return L[e] || (L[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function j(e, o, l, d, S, v, P, I) {
      return l = v.ref, e = {
        $$typeof: b,
        type: e,
        key: o,
        props: v,
        _owner: S
      }, (l !== void 0 ? l : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: w
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
        value: P
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: I
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function n(e, o, l, d, S, v, P, I) {
      var f = o.children;
      if (f !== void 0)
        if (d)
          if (se(f)) {
            for (d = 0; d < f.length; d++)
              A(f[d]);
            Object.freeze && Object.freeze(f);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else A(f);
      if (W.call(o, "key")) {
        f = t(e);
        var E = Object.keys(o).filter(function(ie) {
          return ie !== "key";
        });
        d = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", B[f + d] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          d,
          f,
          E,
          f
        ), B[f + d] = !0);
      }
      if (f = null, l !== void 0 && (m(l), f = "" + l), u(o) && (m(o.key), f = "" + o.key), "key" in o) {
        l = {};
        for (var J in o)
          J !== "key" && (l[J] = o[J]);
      } else l = o;
      return f && p(
        l,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), j(
        e,
        f,
        v,
        S,
        i(),
        l,
        P,
        I
      );
    }
    function A(e) {
      typeof e == "object" && e !== null && e.$$typeof === b && e._store && (e._store.validated = 1);
    }
    var g = le, b = Symbol.for("react.transitional.element"), a = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), $ = Symbol.for("react.consumer"), K = Symbol.for("react.context"), ee = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), oe = Symbol.for("react.suspense_list"), ae = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), te = Symbol.for("react.activity"), ne = Symbol.for("react.client.reference"), C = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, se = Array.isArray, F = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var U, L = {}, V = g.react_stack_bottom_frame.bind(
      g,
      s
    )(), z = F(h(s)), B = {};
    O.Fragment = x, O.jsx = function(e, o, l, d, S) {
      var v = 1e4 > C.recentlyCreatedOwnerStacks++;
      return n(
        e,
        o,
        l,
        !1,
        d,
        S,
        v ? Error("react-stack-top-frame") : V,
        v ? F(h(e)) : z
      );
    }, O.jsxs = function(e, o, l, d, S) {
      var v = 1e4 > C.recentlyCreatedOwnerStacks++;
      return n(
        e,
        o,
        l,
        !0,
        d,
        S,
        v ? Error("react-stack-top-frame") : V,
        v ? F(h(e)) : z
      );
    };
  })()), O;
}
var H;
function pe() {
  return H || (H = 1, process.env.NODE_ENV === "production" ? k.exports = fe() : k.exports = ue()), k.exports;
}
var r = pe();
const X = (t) => console.log.bind(console, t), xe = {
  bio: { "ui:widget": "textarea" },
  senha: { "ui:widget": "password" },
  password: { "ui:widget": "password" }
}, he = `
.flexiform-form-wrapper {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.flexiform-form-wrapper .form-group {
  margin-bottom: 1.5rem;
}

.flexiform-form-wrapper label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
}

.flexiform-form-wrapper input[type="text"],
.flexiform-form-wrapper input[type="email"],
.flexiform-form-wrapper input[type="tel"],
.flexiform-form-wrapper input[type="date"],
.flexiform-form-wrapper input[type="password"],
.flexiform-form-wrapper textarea,
.flexiform-form-wrapper select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.3s;
  font-family: Arial, sans-serif;
  font-size: 0.9em;
}

.flexiform-form-wrapper input:focus,
.flexiform-form-wrapper textarea:focus,
.flexiform-form-wrapper select:focus {
  border-color: #6a5acd;
  outline: none;
}

.flexiform-form-wrapper textarea {
  min-height: 100px;
  resize: vertical;
}

.flexiform-form-wrapper .btn {
  background-color: #6a5acd;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
  margin-right: 10px;
  margin-top: 10px;
}

.flexiform-form-wrapper .btn:hover {
  background-color: #5d4aa0;
}

.flexiform-form-wrapper button[type="submit"] {
  background-color: #6a5acd;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: bold;
  transition: background-color 0.3s;
  width: 100%;
  margin-top: 20px;
}

.flexiform-form-wrapper button[type="submit"]:hover {
  background-color: #5d4aa0;
}

.flexiform-form-wrapper .radio-group,
.flexiform-form-wrapper .field-radio-group {
  display: flex;
  gap: 20px;
  margin-top: 5px;
}

.flexiform-form-wrapper .radio-group label,
.flexiform-form-wrapper .field-radio-group label {
  font-weight: normal;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.flexiform-form-wrapper .field-array-items {
  margin-top: 10px;
}

.flexiform-form-wrapper .array-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
}

.flexiform-form-wrapper .array-item-toolbox {
  display: flex;
  gap: 5px;
}

.flexiform-form-wrapper .error-detail {
  color: #d32f2f;
  font-size: 0.8em;
  margin-top: 5px;
}

.flexiform-form-wrapper .required::after {
  content: " *";
  color: red;
}

.flexiform-form-wrapper fieldset {
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 15px;
}

.flexiform-form-wrapper legend {
  font-weight: bold;
  padding: 0 10px;
}

.dynamicform-badge {
  background: rgba(220, 38, 38, 0.06);
  color: #b91c1c;
  border: 1px solid rgba(220,38,38,0.2);
  padding: 6px 10px;
  border-radius: 6px;
  font-weight: 600;
  margin-bottom: 12px;
  display: inline-block;
}
`, D = (t) => {
  const {
    schema: c,
    // JSON Schema (obrigatório)
    onSubmit: m,
    // Função de submit
    uiSchema: h = {},
    // UI Schema opcional
    formData: i,
    // Dados do formulário
    onChange: s,
    // Handler de mudanças
    formId: u = "default",
    // ID para salvar no cache
    // extras visuais para quem importa a lib
    frameColor: p,
    // ex: "red" ou "#ff0000" - aplica borda ao redor do form
    showSchemaBadge: w = !1,
    // exibe um badge textual acima do form
    badgeText: j = "Schema aplicado"
    // texto do badge
  } = t, n = {
    ...xe,
    ...h
  }, A = (b) => {
    if (u) {
      const a = {
        schema: c,
        uiSchema: n,
        formData: b.formData,
        submittedAt: (/* @__PURE__ */ new Date()).toISOString(),
        formId: u
      }, x = `flexiform_cache_${u}`;
      localStorage.setItem(x, JSON.stringify(a)), console.log("Formulário salvo no cache:", x);
    }
    m ? m(b) : X("Submitted (No Handler)")(b);
  }, g = p ? {
    border: `2px solid ${p}`,
    padding: "12px",
    borderRadius: "8px"
  } : void 0;
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx("style", { children: he }),
    /* @__PURE__ */ r.jsxs("div", { className: "flexiform-form-wrapper", style: g, children: [
      w && /* @__PURE__ */ r.jsx("div", { className: "dynamicform-badge", role: "status", children: j }),
      /* @__PURE__ */ r.jsx(
        me,
        {
          schema: c,
          uiSchema: n,
          formData: i,
          validator: de,
          onChange: s,
          onSubmit: A,
          onError: X("Errors")
        }
      )
    ] })
  ] });
};
D.loadFromCache = (t = "default") => {
  const c = `flexiform_cache_${t}`, m = localStorage.getItem(c);
  return m ? JSON.parse(m) : null;
};
D.clearCache = (t = "default") => {
  const c = `flexiform_cache_${t}`;
  localStorage.removeItem(c);
};
const q = {
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
}, ge = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAOCAMAAACICbUNAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAKyUExURf7+/v7//v///v////3+/fXv/c+x/sOc/sSf/t3I/fz7/f39/f39/oxC/45F/5VQ/5VR/5NN/4xB/5ZT/+PT/f7//fv6/bB9/o9G/8Wh/ta8/tS4/tO4/te+/rF+/v///f79/vn5+fv7+7B8/plX/9W7/p1e/6Fl/6Rq/5xd/698/s2t/tO4/bm6vHJ0eHZ4e6GjpZeYm9/f4KOkprCxs4WHinV3en+BhODh4f/+/ppY/9G0/pdU/9O3/rGA/qVs/sys/oaIi11gZL/AwcfHyU1QVMjIytLT1LGys+Pk5Nvb3NbX2Ojo6czNzrS1t6+wskBDSKanqcLDxOvs7MbHyOfn6Nzc3cPDxbu8vcXFx8fIybi5uvb29rB8/5ZS/7OD/riL/plY/6Zt/4iKjUZJTbu8vlVXW5iZnFBSVnFzd2JkaLW2uFxeYmlrb3R2eYWGiT9CRp6foaipq1FUWHJ0d2dqboGDhkNGS5udn0VITGdpbTk9QW5wczs+Q8PExa98/7mM/r2T/qZt/lpcYLO0ts7P0FVYXGNmalteYisuM3BydURHTJucn8HCw4CChd/g4Whrbuzs7UtNUsjJylJVWcDAwmBjZrGytJpZ/5BJ/4s//4tA/6Vs/4iJjPHx8lRWWpeZm4mLjre4uVlcYHBydoKEh1BTV+Pj5K6vsVJUWHl7fmRman1/goSGiezs7MrKzFZYXGJlaLKztZhV/9i//qhw/6Nn/6No/6Jm/7qO/syr/o1E/9TV1tHS0/j4+Orq68vLzaCho8/Q0dPT1NDR0uLj48nKy/Lz876/wKWmqNbX19PU1ff398HBw+vr7LF//o1D/86v/s6w/s+w/s6u/tS5/f7+/c+y/o5E/5BI/49H/6Bi/+re/f79/fr4/eLR/de+/de//te//djA/ezg/f3+/vc8QMcAAAABYktHRAMRDEzyAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6QoUDxoo5pAtnwAAAcRJREFUKM9jYGBgZIIDBkKAmYGBhZWNHQI4OLm4MQAPMgesnoOXjx8IBASFhEVEufEDoHoxcQlJKWlpGWlZOV4ZeQWQrTBZRSUkDly9soqqmrqGhqaWNp8Os66evoGhETMzAxMzA7OxiamZuQWQY8kMAQxg9VbWNhzWtnb2DkD1jk7OLq5u7h6eXt4+vn7+AYFBwSH+oWHhISERkVHRMSD1sVbWcfEJiRJJIPXJKcmpaekZmVnZObnpefkF+oVFxSWlZeUVlVXVNbV1IPX1QPUNjQJCTQ58MszJzS2tbTW1Ze1eHZ1GXWXdPb36ff3lE8wnTpo8Zeq06SD1WjOsZ86axTt7Dkj93DLmefMXtC0sW7Q4a8GSpcuWM69YuWr1mrXrXNdv6N24Cax+85at27Zv37Fz124dpj17GfYF7T9w8NDhI0fDjx3uPc6w78RJz1Onz5w9V+cz2ROonuv8hQS2i5cuXb7SxHtVnpkZFGjMcACMLlCwMIMEQcIMDNeuC964CQK3dt++A44vHgYFBYW7d3mwxxf3vfsPHj56BESPn0BSADjO7vI8BeriYeBB1qYAUs8tDwOQ1ABPXE+fgikkDTzMAPLzkivo50ppAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI1LTEwLTIwVDE1OjI2OjI4KzAwOjAwUtboSgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNS0xMC0yMFQxNToyNjoyOCswMDowMCOLUPYAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjUtMTAtMjBUMTU6MjY6NDArMDA6MDCBHjbJAAAAAElFTkSuQmCC", Q = "flexiform_saved_submissions";
function Se() {
  const [t, c] = R(JSON.stringify(q, null, 2)), [m, h] = R({}), [i, s] = R([]);
  _(() => {
    const a = localStorage.getItem(Q);
    a && s(JSON.parse(a));
  }, []), _(() => {
    localStorage.setItem(Q, JSON.stringify(i));
  }, [i]);
  const u = () => {
    try {
      const a = JSON.parse(t), x = (/* @__PURE__ */ new Date()).toLocaleString(), y = {
        id: Date.now(),
        timestamp: x,
        schemaTitle: a.title || "Schema Sem Título",
        data: {},
        schemaJson: t,
        schemaUsed: a,
        uiSchema: {}
      };
      s((N) => [y, ...N]), alert(`Schema salvo com sucesso! (${x})`);
    } catch {
      alert("Não foi possível salvar: JSON inválido. Corrija a sintaxe antes de salvar.");
    }
  }, p = ce(() => {
    try {
      return JSON.parse(t);
    } catch {
      return { type: "object", title: "JSON Inválido", properties: {} };
    }
  }, [t]), w = ({ formData: a }) => {
    const x = (/* @__PURE__ */ new Date()).toLocaleString(), y = {
      id: Date.now(),
      timestamp: x,
      schemaTitle: p.title || "Formulário Sem Título",
      data: a,
      // AQUI ESTÁ A CORREÇÃO: Salva o JSON schema COMPLETO que foi usado
      schemaJson: t,
      // Isso salva o JSON inteiro que está no editor
      schemaUsed: p,
      // E também o schema parseado
      uiSchema: {}
    };
    s((N) => [y, ...N]), h({}), console.log("Dados Submetidos e Salvos:", y), alert(`Formulário salvo com sucesso! (${x})`);
  }, j = (a) => {
    h(a.formData);
  }, n = p.title !== "JSON Inválido", A = () => {
    window.prompt("Digite 'SIM' para apagar todo o histórico de formulários salvos:") === "SIM" && s([]);
  }, g = (a) => {
    c(a.schemaJson), h(a.data);
  }, b = (a) => {
    if (!a) return "";
    try {
      const x = JSON.parse(a);
      return JSON.stringify(x, null, 2);
    } catch {
      return a;
    }
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx("header", { className: "topbar", children: /* @__PURE__ */ r.jsx("div", { className: "app-container", children: /* @__PURE__ */ r.jsxs("div", { className: "playground-header", children: [
      /* @__PURE__ */ r.jsx("img", { src: ge, alt: "FlexiForm" }),
      /* @__PURE__ */ r.jsx("div", { className: "title", children: "FlexiForm Home" })
    ] }) }) }),
    /* @__PURE__ */ r.jsx("div", { className: "app-container", children: /* @__PURE__ */ r.jsxs("div", { className: "content-wrapper-triple", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "json-editor-panel panel", children: [
        /* @__PURE__ */ r.jsx("h2", { children: "JSON Schema Editor" }),
        /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
          /* @__PURE__ */ r.jsx(
            "textarea",
            {
              value: t,
              onChange: (a) => c(a.target.value)
            }
          ),
          /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "8px", display: "flex", gap: "8px" }, children: [
            /* @__PURE__ */ r.jsx("button", { onClick: u, children: "Salvar Schema" }),
            /* @__PURE__ */ r.jsx("button", { onClick: () => {
              c(JSON.stringify(q, null, 2));
            }, children: "Restaurar Padrão" })
          ] })
        ] }),
        !n && /* @__PURE__ */ r.jsx("p", { style: { color: "red" }, children: "Erro: JSON Schema Inválido. Corrija a sintaxe." })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "form-preview-panel panel", children: [
        /* @__PURE__ */ r.jsx("h2", { children: "Pré-visualização do Formulário" }),
        n ? /* @__PURE__ */ r.jsx(
          D,
          {
            schema: p,
            formData: m,
            onChange: j,
            onSubmit: w,
            formId: "playground"
          }
        ) : /* @__PURE__ */ r.jsx("p", { children: "O formulário não pode ser carregado devido a erros no JSON Schema." }),
        /* @__PURE__ */ r.jsx("h3", { children: "Dados Atuais (formData)" }),
        /* @__PURE__ */ r.jsx("pre", { children: JSON.stringify(m, null, 2) })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "saved-forms-panel panel", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "panel-header", children: [
          /* @__PURE__ */ r.jsxs("h2", { children: [
            "Formulários Salvos (",
            i.length,
            ")"
          ] }),
          i.length > 0 && /* @__PURE__ */ r.jsx("button", { onClick: A, children: "Limpar Todos" })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "submissions-list", children: i.length === 0 ? /* @__PURE__ */ r.jsx("p", { children: "Nenhum formulário submetido foi salvo na memória." }) : i.map((a) => /* @__PURE__ */ r.jsxs("details", { className: "saved-form-item", children: [
          /* @__PURE__ */ r.jsxs("summary", { children: [
            /* @__PURE__ */ r.jsx("strong", { children: a.schemaTitle }),
            " - ",
            a.timestamp
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "form-actions", children: /* @__PURE__ */ r.jsx("button", { onClick: () => g(a), children: "Carregar Schema e Dados" }) }),
          /* @__PURE__ */ r.jsx("h4", { children: "Dados do Formulário Preenchido:" }),
          /* @__PURE__ */ r.jsx("pre", { className: "form-data", children: JSON.stringify(a.data, null, 2) }),
          /* @__PURE__ */ r.jsxs("details", { children: [
            /* @__PURE__ */ r.jsx("summary", { children: /* @__PURE__ */ r.jsx("strong", { children: "JSON Schema Usado para Criar este Formulário:" }) }),
            /* @__PURE__ */ r.jsx("pre", { className: "schema-json", children: b(a.schemaJson) })
          ] })
        ] }, a.id)) })
      ] })
    ] }) })
  ] });
}
const M = "flexiform_saved_submissions";
function we({ schema: t, formId: c = "default", onSubmit: m }) {
  const [h, i] = R({}), [s, u] = R([]);
  _(() => {
    try {
      const n = localStorage.getItem(M);
      n && u(JSON.parse(n));
    } catch (n) {
      console.error("Erro ao carregar savedForms:", n);
    }
  }, []), _(() => {
    try {
      localStorage.setItem(M, JSON.stringify(s));
    } catch (n) {
      console.error("Erro ao salvar savedForms:", n);
    }
  }, [s]);
  const p = ({ formData: n }) => {
    const A = (/* @__PURE__ */ new Date()).toLocaleString(), g = {
      id: Date.now(),
      timestamp: A,
      schemaTitle: t?.title || "Formulário Sem Título",
      data: n,
      schemaUsed: t
    };
    u((b) => [g, ...b]), i({}), m && m({ formData: n });
  }, w = ({ formData: n }) => i(n), j = () => {
    window.confirm("Tem certeza que deseja apagar todo o histórico de formulários salvos?") && (u([]), localStorage.removeItem(M));
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "content-wrapper-triple", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "form-preview-panel panel", children: [
      /* @__PURE__ */ r.jsx("h2", { children: "Pré-visualização do Formulário" }),
      /* @__PURE__ */ r.jsx(
        D,
        {
          schema: t,
          formData: h,
          onChange: w,
          onSubmit: p,
          formId: c
        }
      ),
      /* @__PURE__ */ r.jsx("h3", { style: { marginTop: "20px" }, children: "Dados Atuais (formData)" }),
      /* @__PURE__ */ r.jsx("pre", { style: { backgroundColor: "#f4f4f4", padding: "10px", overflowX: "auto", borderRadius: "4px" }, children: JSON.stringify(h, null, 2) })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "saved-forms-panel panel", children: [
      /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
        /* @__PURE__ */ r.jsxs("h2", { children: [
          "Formulários Salvos (",
          s.length,
          ")"
        ] }),
        s.length > 0 && /* @__PURE__ */ r.jsx("button", { onClick: j, style: { padding: "5px 10px", cursor: "pointer" }, children: "Limpar Todos" })
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "submissions-list", children: s.length === 0 ? /* @__PURE__ */ r.jsx("p", { children: "Nenhum formulário submetido foi salvo na memória." }) : s.map((n) => /* @__PURE__ */ r.jsxs("details", { className: "saved-form-item", children: [
        /* @__PURE__ */ r.jsxs("summary", { children: [
          /* @__PURE__ */ r.jsx("strong", { children: n.schemaTitle }),
          " - ",
          n.timestamp
        ] }),
        /* @__PURE__ */ r.jsx("pre", { style: { backgroundColor: "#fff", border: "1px dotted #ccc", padding: "10px", marginTop: "10px" }, children: JSON.stringify(n.data, null, 2) })
      ] }, n.id)) })
    ] })
  ] });
}
export {
  D as DynamicForm,
  Se as FlexiFormPlayground,
  we as FormWithStorage
};
