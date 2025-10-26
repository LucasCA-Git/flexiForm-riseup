(function(b,u){typeof exports=="object"&&typeof module<"u"?u(exports,require("react"),require("@rjsf/core"),require("@rjsf/validator-ajv8")):typeof define=="function"&&define.amd?define(["exports","react","@rjsf/core","@rjsf/validator-ajv8"],u):(b=typeof globalThis<"u"?globalThis:b||self,u(b.DynamicFormLib={},b.React,b.Form,b.validator))})(this,(function(b,u,K,$){"use strict";var _={exports:{}},O={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W;function ee(){if(W)return O;W=1;var a=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function m(g,i,s){var p=null;if(s!==void 0&&(p=""+s),i.key!==void 0&&(p=""+i.key),"key"in i){s={};for(var x in i)x!=="key"&&(s[x]=i[x])}else s=i;return i=s.ref,{$$typeof:a,type:g,key:p,ref:i!==void 0?i:null,props:s}}return O.Fragment=c,O.jsx=m,O.jsxs=m,O}var R={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y;function re(){return Y||(Y=1,process.env.NODE_ENV!=="production"&&(function(){function a(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===xe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case h:return"Fragment";case D:return"Profiler";case N:return"StrictMode";case de:return"Suspense";case fe:return"SuspenseList";case pe:return"Activity"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case t:return"Portal";case ce:return(e.displayName||"Context")+".Provider";case le:return(e._context.displayName||"Context")+".Consumer";case me:var o=e.render;return e=e.displayName,e||(e=o.displayName||o.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ue:return o=e.displayName||null,o!==null?o:a(e.type)||"Memo";case B:o=e._payload,e=e._init;try{return a(e(o))}catch{}}return null}function c(e){return""+e}function m(e){try{c(e);var o=!1}catch{o=!0}if(o){o=console;var l=o.error,d=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return l.call(o,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",d),c(e)}}function g(e){if(e===h)return"<>";if(typeof e=="object"&&e!==null&&e.$$typeof===B)return"<...>";try{var o=a(e);return o?"<"+o+">":"<...>"}catch{return"<...>"}}function i(){var e=C.A;return e===null?null:e.getOwner()}function s(){return Error("react-stack-top-frame")}function p(e){if(Z.call(e,"key")){var o=Object.getOwnPropertyDescriptor(e,"key").get;if(o&&o.isReactWarning)return!1}return e.key!==void 0}function x(e,o){function l(){G||(G=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",o))}l.isReactWarning=!0,Object.defineProperty(e,"key",{get:l,configurable:!0})}function y(){var e=a(this.type);return H[e]||(H[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function E(e,o,l,d,w,A,I,J){return l=A.ref,e={$$typeof:S,type:e,key:o,props:A,_owner:w},(l!==void 0?l:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:y}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(e,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:I}),Object.defineProperty(e,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:J}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function n(e,o,l,d,w,A,I,J){var f=o.children;if(f!==void 0)if(d)if(he(f)){for(d=0;d<f.length;d++)j(f[d]);Object.freeze&&Object.freeze(f)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else j(f);if(Z.call(o,"key")){f=a(e);var T=Object.keys(o).filter(function(ge){return ge!=="key"});d=0<T.length?"{key: someKey, "+T.join(": ..., ")+": ...}":"{key: someKey}",q[f+d]||(T=0<T.length?"{"+T.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,d,f,T,f),q[f+d]=!0)}if(f=null,l!==void 0&&(m(l),f=""+l),p(o)&&(m(o.key),f=""+o.key),"key"in o){l={};for(var M in o)M!=="key"&&(l[M]=o[M])}else l=o;return f&&x(l,typeof e=="function"?e.displayName||e.name||"Unknown":e),E(e,f,A,w,i(),l,I,J)}function j(e){typeof e=="object"&&e!==null&&e.$$typeof===S&&e._store&&(e._store.validated=1)}var v=u,S=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),le=Symbol.for("react.consumer"),ce=Symbol.for("react.context"),me=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),pe=Symbol.for("react.activity"),xe=Symbol.for("react.client.reference"),C=v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=Object.prototype.hasOwnProperty,he=Array.isArray,P=console.createTask?console.createTask:function(){return null};v={react_stack_bottom_frame:function(e){return e()}};var G,H={},X=v.react_stack_bottom_frame.bind(v,s)(),Q=P(g(s)),q={};R.Fragment=h,R.jsx=function(e,o,l,d,w){var A=1e4>C.recentlyCreatedOwnerStacks++;return n(e,o,l,!1,d,w,A?Error("react-stack-top-frame"):X,A?P(g(e)):Q)},R.jsxs=function(e,o,l,d,w){var A=1e4>C.recentlyCreatedOwnerStacks++;return n(e,o,l,!0,d,w,A?Error("react-stack-top-frame"):X,A?P(g(e)):Q)}})()),R}var U;function oe(){return U||(U=1,process.env.NODE_ENV==="production"?_.exports=ee():_.exports=re()),_.exports}var r=oe();const L=a=>console.log.bind(console,a),te={bio:{"ui:widget":"textarea"},senha:{"ui:widget":"password"},password:{"ui:widget":"password"}},ae=`
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
`,k=a=>{const{schema:c,onSubmit:m,uiSchema:g={},formData:i,onChange:s,formId:p="default",frameColor:x,showSchemaBadge:y=!1,badgeText:E="Schema aplicado"}=a,n={...te,...g},j=S=>{if(p){const t={schema:c,uiSchema:n,formData:S.formData,submittedAt:new Date().toISOString(),formId:p},h=`flexiform_cache_${p}`;localStorage.setItem(h,JSON.stringify(t)),console.log("Formulário salvo no cache:",h)}m?m(S):L("Submitted (No Handler)")(S)},v=x?{border:`2px solid ${x}`,padding:"12px",borderRadius:"8px"}:void 0;return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:ae}),r.jsxs("div",{className:"flexiform-form-wrapper",style:v,children:[y&&r.jsx("div",{className:"dynamicform-badge",role:"status",children:E}),r.jsx(K,{schema:c,uiSchema:n,formData:i,validator:$,onChange:s,onSubmit:j,onError:L("Errors")})]})]})};k.loadFromCache=(a="default")=>{const c=`flexiform_cache_${a}`,m=localStorage.getItem(c);return m?JSON.parse(m):null},k.clearCache=(a="default")=>{const c=`flexiform_cache_${a}`;localStorage.removeItem(c)};const V={title:"Formulário de Cadastro com Regras de Validação",description:"Exemplo simples de formulário demonstrando campos obrigatórios, tamanho mínimo e padrões de formato.",type:"object",required:["nome","sobrenome","email"],properties:{nome:{type:"string",title:"Nome",default:"Carlos",minLength:2,description:"Deve ter pelo menos 2 caracteres."},sobrenome:{type:"string",title:"Sobrenome"},email:{type:"string",title:"Endereço de E-mail",format:"email",description:"Por favor, insira um endereço de e-mail válido."},idade:{type:"integer",title:"Idade",minimum:18,description:"Idade mínima para cadastro é 18 anos."},bio:{type:"string",title:"Biografia"},senha:{type:"string",title:"Senha",minLength:8,description:"A senha deve ter no mínimo 8 caracteres."},telefone:{type:"string",title:"Telefone (Somente Números)",minLength:10,pattern:"^[0-9]*$",description:"Formato: 10 dígitos, somente números (Ex: 1234567890)."}}},ne="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAOCAMAAACICbUNAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAKyUExURf7+/v7//v///v////3+/fXv/c+x/sOc/sSf/t3I/fz7/f39/f39/oxC/45F/5VQ/5VR/5NN/4xB/5ZT/+PT/f7//fv6/bB9/o9G/8Wh/ta8/tS4/tO4/te+/rF+/v///f79/vn5+fv7+7B8/plX/9W7/p1e/6Fl/6Rq/5xd/698/s2t/tO4/bm6vHJ0eHZ4e6GjpZeYm9/f4KOkprCxs4WHinV3en+BhODh4f/+/ppY/9G0/pdU/9O3/rGA/qVs/sys/oaIi11gZL/AwcfHyU1QVMjIytLT1LGys+Pk5Nvb3NbX2Ojo6czNzrS1t6+wskBDSKanqcLDxOvs7MbHyOfn6Nzc3cPDxbu8vcXFx8fIybi5uvb29rB8/5ZS/7OD/riL/plY/6Zt/4iKjUZJTbu8vlVXW5iZnFBSVnFzd2JkaLW2uFxeYmlrb3R2eYWGiT9CRp6foaipq1FUWHJ0d2dqboGDhkNGS5udn0VITGdpbTk9QW5wczs+Q8PExa98/7mM/r2T/qZt/lpcYLO0ts7P0FVYXGNmalteYisuM3BydURHTJucn8HCw4CChd/g4Whrbuzs7UtNUsjJylJVWcDAwmBjZrGytJpZ/5BJ/4s//4tA/6Vs/4iJjPHx8lRWWpeZm4mLjre4uVlcYHBydoKEh1BTV+Pj5K6vsVJUWHl7fmRman1/goSGiezs7MrKzFZYXGJlaLKztZhV/9i//qhw/6Nn/6No/6Jm/7qO/syr/o1E/9TV1tHS0/j4+Orq68vLzaCho8/Q0dPT1NDR0uLj48nKy/Lz876/wKWmqNbX19PU1ff398HBw+vr7LF//o1D/86v/s6w/s+w/s6u/tS5/f7+/c+y/o5E/5BI/49H/6Bi/+re/f79/fr4/eLR/de+/de//te//djA/ezg/f3+/vc8QMcAAAABYktHRAMRDEzyAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6QoUDxoo5pAtnwAAAcRJREFUKM9jYGBgZIIDBkKAmYGBhZWNHQI4OLm4MQAPMgesnoOXjx8IBASFhEVEufEDoHoxcQlJKWlpGWlZOV4ZeQWQrTBZRSUkDly9soqqmrqGhqaWNp8Os66evoGhETMzAxMzA7OxiamZuQWQY8kMAQxg9VbWNhzWtnb2DkD1jk7OLq5u7h6eXt4+vn7+AYFBwSH+oWHhISERkVHRMSD1sVbWcfEJiRJJIPXJKcmpaekZmVnZObnpefkF+oVFxSWlZeUVlVXVNbV1IPX1QPUNjQJCTQ58MszJzS2tbTW1Ze1eHZ1GXWXdPb36ff3lE8wnTpo8Zeq06SD1WjOsZ86axTt7Dkj93DLmefMXtC0sW7Q4a8GSpcuWM69YuWr1mrXrXNdv6N24Cax+85at27Zv37Fz124dpj17GfYF7T9w8NDhI0fDjx3uPc6w78RJz1Onz5w9V+cz2ROonuv8hQS2i5cuXb7SxHtVnpkZFGjMcACMLlCwMIMEQcIMDNeuC964CQK3dt++A44vHgYFBYW7d3mwxxf3vfsPHj56BESPn0BSADjO7vI8BeriYeBB1qYAUs8tDwOQ1ABPXE+fgikkDTzMAPLzkivo50ppAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI1LTEwLTIwVDE1OjI2OjI4KzAwOjAwUtboSgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNS0xMC0yMFQxNToyNjoyOCswMDowMCOLUPYAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjUtMTAtMjBUMTU6MjY6NDArMDA6MDCBHjbJAAAAAElFTkSuQmCC",z="flexiform_saved_submissions";function se(){const[a,c]=u.useState(JSON.stringify(V,null,2)),[m,g]=u.useState({}),[i,s]=u.useState([]);u.useEffect(()=>{const t=localStorage.getItem(z);t&&s(JSON.parse(t))},[]),u.useEffect(()=>{localStorage.setItem(z,JSON.stringify(i))},[i]);const p=()=>{try{const t=JSON.parse(a),h=new Date().toLocaleString(),N={id:Date.now(),timestamp:h,schemaTitle:t.title||"Schema Sem Título",data:{},schemaJson:a,schemaUsed:t,uiSchema:{}};s(D=>[N,...D]),alert(`Schema salvo com sucesso! (${h})`)}catch{alert("Não foi possível salvar: JSON inválido. Corrija a sintaxe antes de salvar.")}},x=u.useMemo(()=>{try{return JSON.parse(a)}catch{return{type:"object",title:"JSON Inválido",properties:{}}}},[a]),y=({formData:t})=>{const h=new Date().toLocaleString(),N={id:Date.now(),timestamp:h,schemaTitle:x.title||"Formulário Sem Título",data:t,schemaJson:a,schemaUsed:x,uiSchema:{}};s(D=>[N,...D]),g({}),console.log("Dados Submetidos e Salvos:",N),alert(`Formulário salvo com sucesso! (${h})`)},E=t=>{g(t.formData)},n=x.title!=="JSON Inválido",j=()=>{window.prompt("Digite 'SIM' para apagar todo o histórico de formulários salvos:")==="SIM"&&s([])},v=t=>{c(t.schemaJson),g(t.data)},S=t=>{if(!t)return"";try{const h=JSON.parse(t);return JSON.stringify(h,null,2)}catch{return t}};return r.jsxs(r.Fragment,{children:[r.jsx("header",{className:"topbar",children:r.jsx("div",{className:"app-container",children:r.jsxs("div",{className:"playground-header",children:[r.jsx("img",{src:ne,alt:"FlexiForm"}),r.jsx("div",{className:"title",children:"FlexiForm Home"})]})})}),r.jsx("div",{className:"app-container",children:r.jsxs("div",{className:"content-wrapper-triple",children:[r.jsxs("div",{className:"json-editor-panel panel",children:[r.jsx("h2",{children:"JSON Schema Editor"}),r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx("textarea",{value:a,onChange:t=>c(t.target.value)}),r.jsxs("div",{style:{marginTop:"8px",display:"flex",gap:"8px"},children:[r.jsx("button",{onClick:p,children:"Salvar Schema"}),r.jsx("button",{onClick:()=>{c(JSON.stringify(V,null,2))},children:"Restaurar Padrão"})]})]}),!n&&r.jsx("p",{style:{color:"red"},children:"Erro: JSON Schema Inválido. Corrija a sintaxe."})]}),r.jsxs("div",{className:"form-preview-panel panel",children:[r.jsx("h2",{children:"Pré-visualização do Formulário"}),n?r.jsx(k,{schema:x,formData:m,onChange:E,onSubmit:y,formId:"playground"}):r.jsx("p",{children:"O formulário não pode ser carregado devido a erros no JSON Schema."}),r.jsx("h3",{children:"Dados Atuais (formData)"}),r.jsx("pre",{children:JSON.stringify(m,null,2)})]}),r.jsxs("div",{className:"saved-forms-panel panel",children:[r.jsxs("div",{className:"panel-header",children:[r.jsxs("h2",{children:["Formulários Salvos (",i.length,")"]}),i.length>0&&r.jsx("button",{onClick:j,children:"Limpar Todos"})]}),r.jsx("div",{className:"submissions-list",children:i.length===0?r.jsx("p",{children:"Nenhum formulário submetido foi salvo na memória."}):i.map(t=>r.jsxs("details",{className:"saved-form-item",children:[r.jsxs("summary",{children:[r.jsx("strong",{children:t.schemaTitle})," - ",t.timestamp]}),r.jsx("div",{className:"form-actions",children:r.jsx("button",{onClick:()=>v(t),children:"Carregar Schema e Dados"})}),r.jsx("h4",{children:"Dados do Formulário Preenchido:"}),r.jsx("pre",{className:"form-data",children:JSON.stringify(t.data,null,2)}),r.jsxs("details",{children:[r.jsx("summary",{children:r.jsx("strong",{children:"JSON Schema Usado para Criar este Formulário:"})}),r.jsx("pre",{className:"schema-json",children:S(t.schemaJson)})]})]},t.id))})]})]})})]})}const F="flexiform_saved_submissions";function ie({schema:a,formId:c="default",onSubmit:m}){const[g,i]=u.useState({}),[s,p]=u.useState([]);u.useEffect(()=>{try{const n=localStorage.getItem(F);n&&p(JSON.parse(n))}catch(n){console.error("Erro ao carregar savedForms:",n)}},[]),u.useEffect(()=>{try{localStorage.setItem(F,JSON.stringify(s))}catch(n){console.error("Erro ao salvar savedForms:",n)}},[s]);const x=({formData:n})=>{const j=new Date().toLocaleString(),v={id:Date.now(),timestamp:j,schemaTitle:a?.title||"Formulário Sem Título",data:n,schemaUsed:a};p(S=>[v,...S]),i({}),m&&m({formData:n})},y=({formData:n})=>i(n),E=()=>{window.confirm("Tem certeza que deseja apagar todo o histórico de formulários salvos?")&&(p([]),localStorage.removeItem(F))};return r.jsxs("div",{className:"content-wrapper-triple",children:[r.jsxs("div",{className:"form-preview-panel panel",children:[r.jsx("h2",{children:"Pré-visualização do Formulário"}),r.jsx(k,{schema:a,formData:g,onChange:y,onSubmit:x,formId:c}),r.jsx("h3",{style:{marginTop:"20px"},children:"Dados Atuais (formData)"}),r.jsx("pre",{style:{backgroundColor:"#f4f4f4",padding:"10px",overflowX:"auto",borderRadius:"4px"},children:JSON.stringify(g,null,2)})]}),r.jsxs("div",{className:"saved-forms-panel panel",children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsxs("h2",{children:["Formulários Salvos (",s.length,")"]}),s.length>0&&r.jsx("button",{onClick:E,style:{padding:"5px 10px",cursor:"pointer"},children:"Limpar Todos"})]}),r.jsx("div",{className:"submissions-list",children:s.length===0?r.jsx("p",{children:"Nenhum formulário submetido foi salvo na memória."}):s.map(n=>r.jsxs("details",{className:"saved-form-item",children:[r.jsxs("summary",{children:[r.jsx("strong",{children:n.schemaTitle})," - ",n.timestamp]}),r.jsx("pre",{style:{backgroundColor:"#fff",border:"1px dotted #ccc",padding:"10px",marginTop:"10px"},children:JSON.stringify(n.data,null,2)})]},n.id))})]})]})}b.DynamicForm=k,b.FlexiFormPlayground=se,b.FormWithStorage=ie,Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})}));
