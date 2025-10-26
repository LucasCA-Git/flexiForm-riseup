// 1. Exporta o DynamicForm do arquivo dele (que usa export default)
// Export the ready-to-use component for clients (form + saved submissions)
export { default as FormWithStorage } from './components/FormWithStorage';
// Keep named export `DynamicForm` pointing to the client-ready component so both
// `import DynamicForm from 'flexiformriseup'` and `import { DynamicForm } ...` work.
export { default as DynamicForm } from './components/FormWithStorage';
// Default export is the client-ready component as well for compatibility with default imports
export { default } from './components/FormWithStorage';

// Export the playground separately
export { FlexiFormPlayground } from './FlexiFormPlayground';
