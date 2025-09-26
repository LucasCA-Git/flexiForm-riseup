// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  
  // 1. CONFIGURAÇÃO BASE PARA GITHUB PAGES {{{{ NÃO MEXER }}}}
  base: '/flexiform-riseup/', 
  
  build: {
    // 2. CONFIGURAÇÃO DE BUILD PARA A LIB
    lib: {
      entry: path.resolve(__dirname, 'src/index.jsx'),
      name: 'DynamicFormLib', 
      fileName: (format) => `dynamic-form-lib.${format}.js` 
    },
    
    // 3. CONFIGURAÇÃO DE DEPENDÊNCIAS EXTERNAS (PARA NÃO INCLUIR REACT NO BUNDLE DA LIB)
    rollupOptions: {
      external: [
        'react', 
        'react-dom', 
        '@rjsf/core', 
        '@rjsf/validator-ajv8'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    outDir: 'dist', 
  },
});