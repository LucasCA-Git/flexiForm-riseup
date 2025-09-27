import React, { useState, useMemo, useEffect } from 'react';
// CORREÇÃO: Importa o componente DynamicForm da sua Lib, 
// provavelmente de './components/DynamicForm' (ou o caminho correto).
import DynamicForm from './components/DynamicForm';
import { initialSchema } from './initialSchema';
import './index.css'; 

// Chave para armazenar o histórico no localStorage
const STORAGE_KEY = 'flexiform_saved_submissions';

// Renomeado de App para FlexiFormPlayground
export function FlexiFormPlayground() { // Mantenha o export aqui!
  const [schemaText, setSchemaText] = useState(JSON.stringify(initialSchema, null, 2));
  const [formData, setFormData] = useState({});
  const [savedForms, setSavedForms] = useState([]); 

  // ... (Restante da Lógica de Estado e Handlers) ...

  const schema = useMemo(() => {
    try {
      return JSON.parse(schemaText);
    } catch (e) {
      return { type: "object", title: "JSON Inválido", properties: {} };
    }
  }, [schemaText]);

  const handleSubmit = ({ formData }) => {
    const timestamp = new Date().toLocaleString();
    const newSubmission = {
      id: Date.now(),
      timestamp,
      schemaTitle: schema.title || "Formulário Sem Título",
      data: formData,
      schemaUsed: schema
    };

    setSavedForms(prevForms => [newSubmission, ...prevForms]);
    setFormData({});
    console.log("Dados Submetidos e Salvos:", newSubmission.data);
    alert(`Formulário salvo com sucesso! (${timestamp})`); 
  };

  const handleChange = (e) => {
    setFormData(e.formData);
  };
  
  const isSchemaValid = schema.title !== "JSON Inválido";
  
  const clearSavedForms = () => {
      // Usando uma modal simples/prompt como fallback para window.confirm
      if (window.prompt("Digite 'SIM' para apagar todo o histórico de formulários salvos:") === 'SIM') {
          setSavedForms([]);
          localStorage.removeItem(STORAGE_KEY);
      }
  };

  return (
    <div className="app-container">
      <h1>FlexiForm-RiseUp: Playground de Demonstração</h1>
      
      <div className="content-wrapper-triple">
        
        {/* COLUNA 1: Editor de JSON Schema */}
        <div className="json-editor-panel panel">
          <h2>JSON Schema Editor</h2>
          <textarea
            value={schemaText}
            onChange={(e) => setSchemaText(e.target.value)}
            style={{ width: '100%', minHeight: '400px', fontFamily: 'monospace' }}
          />
          {!isSchemaValid && (
             <p style={{color: 'red'}}>Erro: JSON Schema Inválido. Corrija a sintaxe.</p>
          )}
        </div>

        {/* COLUNA 2: O Formulário Gerado e Dados de Saída */}
        <div className="form-preview-panel panel">
          <h2>Pré-visualização do Formulário</h2>
          
          {isSchemaValid ? (
            <DynamicForm 
              schema={schema} 
              formData={formData}
              onChange={handleChange}
              onSubmit={handleSubmit} 
            />
          ) : (
            <p>O formulário não pode ser carregado devido a erros no JSON Schema.</p>
          )}
          
          <h3 style={{marginTop: '20px'}}>Dados Atuais (formData)</h3>
          <pre style={{ backgroundColor: '#f4f4f4', padding: '10px', overflowX: 'auto', borderRadius: '4px' }}>
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
        
        {/* COLUNA 3: Formulários Salvos na Memória (localStorage) */}
        <div className="saved-forms-panel panel">
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h2>Formulários Salvos ({savedForms.length})</h2>
                {savedForms.length > 0 && (
                    <button onClick={clearSavedForms} style={{padding: '5px 10px', cursor: 'pointer'}}>
                        Limpar Todos
                    </button>
                )}
            </div>
            
            <div className="submissions-list">
                {savedForms.length === 0 ? (
                    <p>Nenhum formulário submetido foi salvo na memória.</p>
                ) : (
                    savedForms.map((form) => (
                        <details key={form.id} className="saved-form-item">
                            <summary>
                                <strong>{form.schemaTitle}</strong> - {form.timestamp}
                            </summary>
                            <pre style={{ backgroundColor: '#fff', border: '1px dotted #ccc', padding: '10px', marginTop: '10px' }}>
                                {JSON.stringify(form.data, null, 2)}
                            </pre>
                        </details>
                    ))
                )}
            </div>
        </div>
      </div>
    </div>
  );
}
