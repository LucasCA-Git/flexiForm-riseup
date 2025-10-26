// 1. Exporta o DynamicForm do arquivo dele (que usa export default)
export { default as DynamicForm } from './components/DynamicForm';

// 2. Exporta o Playground do arquivo dele (que usa export function)
export { FlexiFormPlayground } from './FlexiFormPlayground'; 
// 3. Exporta o componente pronto para clientes: form + armazenamento local
export { default as FormWithStorage } from './components/FormWithStorage';
