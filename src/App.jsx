import React, { useState, useMemo, useEffect } from 'react';
import { DynamicForm } from './index'; 
import { initialSchema } from './initialSchema';
import './index.css';

// Chave para armazenar o histórico no localStorage
const STORAGE_KEY = 'flexiform_saved_submissions';

function App() {
  const [schemaText, setSchemaText] = useState(JSON.stringify(initialSchema, null, 2));
  const [formData, setFormData] = useState({});
  // Novo estado para armazenar os formulários submetidos
  const [savedForms, setSavedForms] = useState([]); 

  // 1. Efeito para carregar dados do localStorage ao iniciar
  useEffect(() => {
    try {
      const storedData = localStorage.getItem(STORAGE_KEY);
      if (storedData) {
        setSavedForms(JSON.parse(storedData));
      }
    } catch (error) {
      console.error("Erro ao carregar dados do localStorage:", error);
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []); // Executa apenas na montagem

  // 2. Efeito para salvar dados no localStorage sempre que 'savedForms' mudar
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedForms));
  }, [savedForms]);

  // Tenta converter o texto para JSON Schema
  const schema = useMemo(() => {
    try {
      return JSON.parse(schemaText);
    } catch (e) {
      return { type: "object", title: "JSON Inválido", properties: {} };
    }
  }, [schemaText]);

  // Função para salvar o formulário submetido
  const handleSubmit = ({ formData }) => {
    const timestamp = new Date().toLocaleString();
    const newSubmission = {
      id: Date.now(),
      timestamp,
      schemaTitle: schema.title || "Formulário Sem Título",
      data: formData,
      schemaUsed: schema
    };

    // Adiciona a nova submissão ao topo da lista
    setSavedForms(prevForms => [newSubmission, ...prevForms]);
    
    // Opcional: Limpa o formulário após salvar
    setFormData({});

    console.log("Dados Submetidos e Salvos:", newSubmission.data);
    alert(`Formulário salvo com sucesso! (${timestamp})`);
  };

  const handleChange = (e) => {
    setFormData(e.formData);
  };
  
  const isSchemaValid = schema.title !== "JSON Inválido";
  
  const clearSavedForms = () => {
      if (window.confirm("Tem certeza que deseja apagar todo o histórico de formulários salvos?")) {
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
                            {/* Opcional: Adicionar um botão para re-editar o form */}
                        </details>
                    ))
                )}
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;