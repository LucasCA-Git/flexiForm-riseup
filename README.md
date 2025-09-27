# **Guia de Inicialização e Uso: FlexiForm-RiseUp**

O **FlexiForm-RiseUp** funciona como um **Playground** (para desenvolvimento e demonstração) e como uma **Lib** (para uso em outros projetos React).

## **1\. Guia para o Desenvolvedor (Playground)**

Se você está dentro do diretório FLEXIFORM-RISEUP e quer rodar o editor JSON, o formulário de demonstração e o console de memória (seu ambiente de trabalho), siga estes passos:

### **Pré-requisitos**

* Node.js (versão 18+) e npm instalados.

### **Iniciar o Desenvolvimento**

**Instalar Dependências:** Instala todos os pacotes necessários para o desenvolvimento, incluindo o próprio React, RJSF, e as ferramentas do Vite.  
npm install  
**Rodar o Ambiente de Demonstração:** Inicia o servidor local do Vite.  

```bash
npm run dev
```

1. O *playground* estará acessível em http://localhost:5173/ (ou outra porta). Você poderá editar o JSON Schema na coluna da esquerda e ver o formulário se atualizar instantaneamente.

### **Onde Editar as Configurações:**

**Schema Inicial** | src/initialSchema.js | Define o JSON que carrega o formulário ao iniciar (títulos, campos e regras de validação).

**Regras Padrão da Lib** | src/components/DynamicForm.jsx | Define regras de UI que se aplicam a todos os projetos (ex: o campo senha usa o password widget). 

**Lógica de Demonstração** | src/App.jsx | Contém a lógica do *playground*: salvar no localStorage, limpar formulário e a customização visual (via uiSchema). 

---

## **2\. Guia para o Consumidor (Uso em Projeto Externo)**

Se você estiver em um **novo projeto React** e quiser utilizar o componente \<FlexiFormPlayground />, siga este processo.

A Lib **FlexiForm-RiseUp** não inclui o React ou o RJSF em seu código final, sendo necessário instalá-los separadamente.

### **Instalação Completa**

### **1\. Instalar a biblioteca**

No projeto React do cliente:

```bash
npm install flexiformriseup
```
### **2\. Instalar peer dependencies (se ainda não tiver no projeto)**

Essas libs não vêm junto, porque estão listadas como `peerDependencies` no seu `package.json` (assim o cliente pode controlar as versões):

```bash
npm install react react-dom @rjsf/core @rjsf/validator-ajv8
```
---

### **3\. Importar e usar o componente**

No código React do cliente (por exemplo, `App.jsx` ou `App.tsx`):

```js
import React from "react";
import { FlexiFormPlayground } from "flexiformriseup"; // importação da lib
import "flexiformriseup/dist/flexiformriseup.css"; // importação do css da lib

export default function App() {
  return (
    <div>
      <h1>Exemplo com FlexiFormRiseup</h1>
      <FlexiFormPlayground /> Conteudo da Lib flexiform
    </div>
  );
}


```
---

### **4\. Rodar o projeto**

No projeto do cliente:
Dependendo da stack

```bash
npm run dev
```
