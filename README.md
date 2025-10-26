# **Guia de Inicialização e Uso: FlexiForm-RiseUp**

O **FlexiForm-RiseUp** funciona como um **Playground** (para desenvolvimento e demonstração) e como uma **Lib** (para uso em outros projetos React).

## **1. Guia para o Desenvolvedor (Playground)**

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

---

## Testando em um ambiente de cliente (passo a passo)

Esta seção mostra como um cliente (outro projeto React) pode instalar, importar e testar rapidamente o `DynamicForm` publicado como pacote `flexiformriseup`.

Obs: os comandos abaixo usam PowerShell (Windows). Em macOS/Linux substitua por bash/zsh.

1) Criar/usar um projeto React mínimo (Vite)

```powershell
# se quiser criar um projeto novo de teste (opcional)
npm create vite@latest client-test -- --template react
cd client-test
npm install
```

2) Instalar o pacote publicado e peer-deps

```powershell
# instalar o pacote publicado
npm install flexiformriseup@latest

# instalar peer dependencies que o componente usa (se o seu projeto ainda não as tiver)
npm install react react-dom @rjsf/core @rjsf/validator-ajv8
```

3) Exemplo mínimo de uso (arquivo `src/App.jsx` no projeto cliente)

```jsx
import React from 'react';
import { FormWithStorage } from 'flexiformriseup';

const mySchema = {
  title: 'Formulário de Contato',
  type: 'object',
  properties: {
    nome: { type: 'string', title: 'Nome Completo' },
    email: { type: 'string', format: 'email', title: 'E-mail' }
  }
};

export default function MyApp() {
  return (
    <div style={{ maxWidth: 900, margin: '24px auto' }}>
      <h1>Meu Formulário</h1>
      <FormWithStorage
        schema={mySchema}
        formId="contato"
        onSubmit={(d) => console.log('submit', d.formData)}
      />
    </div>
  );
}
```

Antes de rodar, importe o CSS do pacote no entry do projeto (ex: `src/main.jsx`):

```js
import 'flexiformriseup/dist/flexiformriseup.css';
```

Nota: para aplicar os estilos incluídos no pacote, importe o CSS no entry do seu projeto cliente (por exemplo em `src/main.jsx`):

```js
import 'flexiformriseup/dist/flexiformriseup.css';
```

4) Rodar o projeto cliente

```powershell
npm run dev
# abra no navegador o endereço mostrado pelo Vite (ex.: http://localhost:5173)
```

5) O que verificar

- Visual: o formulário deve aparecer com o mesmo estilo (inputs, botões) e — se você passou `frameColor` — uma borda colorida ao redor. Se `showSchemaBadge` estiver true, verá um pequeno badge vermelho acima do form.
- Submissão: preencha e clique em Submit. Veja no console do navegador o objeto `formData` enviado.
- Cache local: o `DynamicForm` salva uma cópia no localStorage com chave `flexiform_cache_<formId>`. No console do navegador rode:

```js
JSON.parse(localStorage.getItem('flexiform_cache_cliente-teste'))
```

Isso deve retornar um objeto com `formData`, `schema`, `uiSchema` e `submittedAt`.

6) Alternativas para testar sem publicar (local)

- Usar `npm pack` para gerar um tarball e instalar no projeto cliente:

```powershell
# no diretório da lib
npm pack
# vai gerar flexiformriseup-1.0.1.tgz

# no projeto cliente
npm install ..\caminho\para\flexiformriseup-1.0.1.tgz
```

- Ou usar `npm link` para desenvolvimento em tempo real:

```powershell
# no diretório da lib
npm link

# no projeto cliente
npm link flexiformriseup
```

7) Problemas comuns e como resolver

- Se o componente não importar, verifique o nome do pacote (`flexiformriseup`) e o `node_modules` do projeto cliente.
- Se ver diferenças de estilo, confirme que não há CSS global sobrescrevendo `.flexiform-form-wrapper` e que o projeto cliente usa a mesma versão de `@rjsf/core` compatível.
- Se `localStorage` estiver vazio, confirme que `formId` foi passado e que o submit foi executado.

---

## Publicar / atualizar a biblioteca

Passos rápidos já executados no repositório principal (para referência): commit → `npm version` → `git push --tags` → `npm publish --access public`.

Para testar antes de publicar prefira `npm pack` ou `npm link` conforme mostrado acima.


1. O *playground* estará acessível em http://localhost:5173/ (ou outra porta). Você poderá editar o JSON Schema na coluna da esquerda e ver o formulário se atualizar instantaneamente.

### **Onde Editar as Configurações:**

**Schema Inicial** | src/initialSchema.js | Define o JSON que carrega o formulário ao iniciar (títulos, campos e regras de validação).

**Regras Padrão da Lib** | src/components/DynamicForm.jsx | Define regras de UI que se aplicam a todos os projetos (ex: o campo senha usa o password widget). 

**Lógica de Demonstração** | src/App.jsx | Contém a lógica do *playground*: salvar no localStorage, limpar formulário e a customização visual (via uiSchema). 

---

## **2. Guia para o Consumidor (Uso em Projeto Externo)**

Se você estiver em um **novo projeto React** e quiser utilizar o componente <FlexiFormPlayground />, siga este processo.

A Lib **FlexiForm-RiseUp** não inclui o React ou o RJSF em seu código final, sendo necessário instalá-los separadamente.

### **Instalação Completa**

### **1. Instalar a biblioteca**

No projeto React do cliente:

```bash
npm install flexiformriseup
```
### **2. Instalar peer dependencies (se ainda não tiver no projeto)**

Essas libs não vêm junto, porque estão listadas como `peerDependencies` no seu `package.json` (assim o cliente pode controlar as versões):

```bash
npm install react react-dom @rjsf/core @rjsf/validator-ajv8
```
---

### **3. Importar e usar o componente**

No código React do cliente (por exemplo, `App.jsx` ou `App.tsx`):

```js
// Exemplo de uso em outro projeto
import DynamicForm from 'flexiform-riseup';

// Schema JSON
const mySchema = {
  "title": "Formulário de Contato",
  "type": "object",
  "properties": {
    "nome": {
      "type": "string",
      "title": "Nome Completo"
    },
    "email": {
      "type": "string",
      "format": "email",
      "title": "E-mail"
    }
  }
};

// Usando o componente
function MyApp() {
  return (
    <div>
      <h1>Meu Formulário</h1>
      <DynamicForm 
        schema={mySchema}
        onSubmit={(data) => console.log(data)}
        formId="contato"
      />
    </div>
  );
}

```
---

### **4. Rodar o projeto**

No projeto do cliente:
Dependendo da stack

```bash
npm run dev
```

---

## Estrutura dos Componentes e Diferenças

Esta seção explica, de forma prática, a responsabilidade e quando usar cada peça do código presente neste repositório.

- `DynamicForm` (baixo nível — renderer)
  - Responsabilidade: é o wrapper leve em torno do `@rjsf/core` que recebe um `schema` (JSON Schema), `formData`, `uiSchema` e callbacks (`onChange`, `onSubmit`) e renderiza apenas o formulário.
  - Uso: importe quando você só precisa renderizar um formulário a partir de um schema e controlar armazenamento/UX externamente.
  - Export/expectativa: é pensado para ser reutilizável e não gerencia localStorage nem UI de listagem. Pode aceitar props visuais (ex.: `frameColor`, `showSchemaBadge`) para customização.

- `FormWithStorage` (comportamento pronto para cliente)
  - Responsabilidade: empacota `DynamicForm` e adiciona comportamento de "playground lite" — gestão de submissões em memória/localStorage, painel de visualização e (opcional) persistência de schemas.
  - Uso: essa é a opção que oferecemos para consumidores que querem o formulário já acompanhado de um painel de "salvados" sem precisar implementar a lógica de persistência. Ideal para demos, integrações rápidas e protótipos.
  - Funcionalidades principais:
    - Persistência de submissões em localStorage com chave `flexiform_saved_submissions`.
    - Persistência de schemas em localStorage com chave `flexiform_saved_schemas`.
    - Opção `saveSchemaOnSubmit` (por padrão true na implementação atual): salva o schema automaticamente quando uma submissão é realizada.
    - API imperativa (quando disponível) via `ref`: métodos expostos podem incluir `saveSchema()`, `getSavedSchemas()` e `clearSavedSchemas()` — chame com `const ref = useRef(); <FormWithStorage ref={ref} />` e depois `ref.current.saveSchema()` (se a versão instalada suportar).
    - Empacotado para consumidores: `dist/flexiformriseup.css` acompanha a lib e pode ser importado no projeto consumidor para manter estilos.

- `FlexiFormPlayground` (full playground — editor + preview)
  - Responsabilidade: é a aplicação de desenvolvimento com o editor JSON, preview ao vivo, painel de schemas e ferramentas para edição/depuração; não é ideal para uso direto em produção pelo cliente final.
  - Uso: abrir localmente (rodar `npm run dev`) para editar e testar schemas, ver o comportamento, e copiar um schema pronto para usar no projeto do cliente.

Quando usar cada um (resumo):
- Quer só renderizar um formulário no seu app e controlar armazenamento/UX você mesmo → use `DynamicForm`.
- Quer uma solução pronta com painel de submissões e gerenciamento de schemas → use `FormWithStorage`.
- Quer desenvolver/editar schemas interativamente e testar várias configurações → abra o `FlexiFormPlayground` localmente (playground do repositório).

Compatibilidade e notas importantes
- CSS: para garantir aparência idêntica ao playground, importe `import 'flexiformriseup/dist/flexiformriseup.css';` no entry (`src/main.jsx`) do projeto cliente.
- Peer dependencies: o pacote espera que o cliente instale `@rjsf/core` e `@rjsf/validator-ajv8` (ver `package.json`).
- API imperativa (`saveSchema`) pode depender da versão publicada — se `saveSchema()` não existir na versão instalada, use o fallback de salvar diretamente no `localStorage` sob `flexiform_saved_schemas`.

Chaves de localStorage usadas pela biblioteca

- `flexiform_saved_submissions` — array de submissões salvas (cada item contém id, timestamp, schemaTitle, data, schemaUsed).
- `flexiform_saved_schemas` — array de schemas salvos (cada item contém id, timestamp, title, schema).
- `flexiform_cache_<formId>` — (usado pelo `DynamicForm`/cache interno) cópia rápida do estado do formulário para restauração (se implementado).

Exemplo rápido de import para projeto cliente

```js
import React from 'react';
import { FormWithStorage } from 'flexiformriseup';
import 'flexiformriseup/dist/flexiformriseup.css';

// ... use FormWithStorage como mostrado nos exemplos acima
```
