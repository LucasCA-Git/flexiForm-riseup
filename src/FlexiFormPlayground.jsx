import React, { useState, useMemo, useEffect } from 'react';
import DynamicForm from './components/DynamicForm';
import { initialSchema } from './initialSchema';
import './index.css'; 
import flexLogo from './icons/flexLogo.png';

// Chave para armazenar o histórico no localStorage
const STORAGE_KEY = 'flexiform_saved_submissions';

export function FlexiFormPlayground() {
  const [schemaText, setSchemaText] = useState(JSON.stringify(initialSchema, null, 2));
  const [formData, setFormData] = useState({});
  const [savedForms, setSavedForms] = useState([]); 

  // Carrega formulários salvos do localStorage ao iniciar
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setSavedForms(JSON.parse(saved));
    }
  }, []);

  // Salva no localStorage sempre que savedForms mudar
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedForms));
  }, [savedForms]);

  // Função para salvar apenas o JSON Schema atual (sem respostas)
  const saveSchema = () => {
    try {
      const parsed = JSON.parse(schemaText);
      const timestamp = new Date().toLocaleString();
      const newSchemaEntry = {
        id: Date.now(),
        timestamp,
        schemaTitle: parsed.title || 'Schema Sem Título',
        data: {},
        schemaJson: schemaText,
        schemaUsed: parsed,
        uiSchema: {}
      };

      setSavedForms(prev => [newSchemaEntry, ...prev]);
      alert(`Schema salvo com sucesso! (${timestamp})`);
    } catch (err) {
      alert('Não foi possível salvar: JSON inválido. Corrija a sintaxe antes de salvar.');
    }
  };

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
      // AQUI ESTÁ A CORREÇÃO: Salva o JSON schema COMPLETO que foi usado
      schemaJson: schemaText, // Isso salva o JSON inteiro que está no editor
      schemaUsed: schema,     // E também o schema parseado
      uiSchema: {}
    };

    setSavedForms(prevForms => [newSubmission, ...prevForms]);
    setFormData({});
    console.log("Dados Submetidos e Salvos:", newSubmission);
    alert(`Formulário salvo com sucesso! (${timestamp})`); 
  };

  const handleChange = (e) => {
    setFormData(e.formData);
  };
  
  const isSchemaValid = schema.title !== "JSON Inválido";
  
  const clearSavedForms = () => {
    if (window.prompt("Digite 'SIM' para apagar todo o histórico de formulários salvos:") === 'SIM') {
      setSavedForms([]);
    }
  };

  const loadSchemaFromSaved = (savedForm) => {
    // Carrega o JSON schema de volta no editor
    setSchemaText(savedForm.schemaJson);
    // Carrega os dados no formulário
    setFormData(savedForm.data);
  };

  // Renderiza o schema salvo por completo em formato legível (pretty-printed)
  const renderCompactSchema = (schemaJson) => {
    if (!schemaJson) return '';
    try {
      const parsed = JSON.parse(schemaJson);
      return JSON.stringify(parsed, null, 2);
    } catch (e) {
      // se não for JSON válido, retorna o texto original (sem truncar)
      return schemaJson;
    }
  };

  return (
    <>
      <header className="topbar">
        <div className="app-container">
          <div className="playground-header">
            <img src={flexLogo} alt="FlexiForm" />
            <div className="title">FlexiForm Home</div>
          </div>
        </div>
      </header>

      <div className="app-container">
      
      <div className="content-wrapper-triple">
        
        {/* COLUNA 1: Editor de JSON Schema */}
        <div className="json-editor-panel panel">
          <h2>JSON Schema Editor</h2>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <textarea
              value={schemaText}
              onChange={(e) => setSchemaText(e.target.value)}
            />
            <div style={{marginTop: '8px', display: 'flex', gap: '8px'}}>
              <button onClick={saveSchema}>Salvar Schema</button>
              <button onClick={() => { setSchemaText(JSON.stringify(initialSchema, null, 2)); }}>Restaurar Padrão</button>
            </div>
          </div>
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
              formId="playground"
            />
          ) : (
            <p>O formulário não pode ser carregado devido a erros no JSON Schema.</p>
          )}
          
          <h3>Dados Atuais (formData)</h3>
          <pre>
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
        
        {/* COLUNA 3: Formulários Salvos */}
        <div className="saved-forms-panel panel">
            <div className="panel-header">
                <h2>Formulários Salvos ({savedForms.length})</h2>
                {savedForms.length > 0 && (
                    <button onClick={clearSavedForms}>
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
                            <div className="form-actions">
                              <button onClick={() => loadSchemaFromSaved(form)}>
                                Carregar Schema e Dados
                              </button>
                            </div>
                            
                            <h4>Dados do Formulário Preenchido:</h4>
                            <pre className="form-data">
                                {JSON.stringify(form.data, null, 2)}
                            </pre>
                            
                            <details>
                              <summary><strong>JSON Schema Usado para Criar este Formulário:</strong></summary>
                              <pre className="schema-json">
                                {renderCompactSchema(form.schemaJson)}
                              </pre>
                            </details>
                        </details>
                    ))
                )}
            </div>
        </div>
      </div>
    </div>
    </>
  );
}