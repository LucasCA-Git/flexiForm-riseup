import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import RawDynamicForm from './DynamicForm';
// Import packaged CSS so consumers who import this component get styles automatically
import '../../dist/flexiformriseup.css';

const SCHEMA_KEY = 'flexiform_saved_schemas';

const STORAGE_KEY = 'flexiform_saved_submissions';

function FormWithStorage({ schema, formId = 'default', onSubmit, saveSchemaOnSubmit = true }, ref) {
  const [formData, setFormData] = useState({});
  const [savedForms, setSavedForms] = useState([]);
  const [savedSchemas, setSavedSchemas] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setSavedForms(JSON.parse(raw));
      const rawSchemas = localStorage.getItem(SCHEMA_KEY);
      if (rawSchemas) setSavedSchemas(JSON.parse(rawSchemas));
    } catch (e) {
      console.error('Erro ao carregar savedForms/schemas:', e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedForms));
      localStorage.setItem(SCHEMA_KEY, JSON.stringify(savedSchemas));
    } catch (e) {
      console.error('Erro ao salvar savedForms/schemas:', e);
    }
  }, [savedForms]);

  // keep schemas in sync when they change
  useEffect(() => {
    try {
      localStorage.setItem(SCHEMA_KEY, JSON.stringify(savedSchemas));
    } catch (e) {
      console.error('Erro ao salvar savedSchemas:', e);
    }
  }, [savedSchemas]);

  const handleSubmit = ({ formData: data }) => {
    const timestamp = new Date().toLocaleString();
    const entry = {
      id: Date.now(),
      timestamp,
      schemaTitle: schema?.title || 'Formulário Sem Título',
      data,
      schemaUsed: schema,
    };
    setSavedForms(prev => [entry, ...prev]);
    setFormData({});
    // Optionally save the schema itself when a submission is saved
    if (saveSchemaOnSubmit && schema) {
      try {
        const schemaText = JSON.stringify(schema);
        const exists = savedSchemas.some(s => JSON.stringify(s.schema) === schemaText);
        if (!exists) {
          const schemaEntry = { id: Date.now() + 1, timestamp, title: schema?.title || 'Schema Sem Título', schema };
          setSavedSchemas(prev => [schemaEntry, ...prev]);
        }
      } catch (e) {
        console.error('Erro ao salvar schema automaticamente:', e);
      }
    }

    if (onSubmit) onSubmit({ formData: data });
  };

  const handleChange = ({ formData: d }) => setFormData(d);

  const clearSaved = () => {
    if (window.confirm('Tem certeza que deseja apagar todo o histórico de formulários salvos?')) {
      setSavedForms([]);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  // --- Schema saving utilities ---
  const saveSchema = () => {
    try {
      const entry = {
        id: Date.now(),
        timestamp: new Date().toLocaleString(),
        title: schema?.title || 'Schema Sem Título',
        schema: schema,
      };
      setSavedSchemas(prev => [entry, ...prev]);
      alert('Schema salvo com sucesso!');
    } catch (e) {
      console.error('Erro ao salvar schema:', e);
      alert('Erro ao salvar schema');
    }
  };

  const clearSavedSchemas = () => {
    if (window.confirm("Tem certeza que deseja apagar todos os schemas salvos?")) {
      setSavedSchemas([]);
      localStorage.removeItem(SCHEMA_KEY);
    }
  };

  const applySchema = (entry) => {
    // Copy to clipboard as fallback to let developer paste it into code
    try {
      const text = JSON.stringify(entry.schema, null, 2);
      navigator.clipboard && navigator.clipboard.writeText(text);
      alert('Schema copiado para o clipboard. Cole no seu código onde desejar.');
    } catch (e) {
      console.error(e);
      alert('Não foi possível copiar o schema automaticamente.');
    }
  };

  const copySchema = (entry) => {
    try {
      const text = JSON.stringify(entry.schema, null, 2);
      navigator.clipboard && navigator.clipboard.writeText(text);
      alert('Schema copiado para o clipboard.');
    } catch (e) {
      console.error(e);
      alert('Erro ao copiar schema.');
    }
  };

  const downloadSchema = (entry) => {
    try {
      const text = JSON.stringify(entry.schema, null, 2);
      const blob = new Blob([text], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${entry.title.replace(/[^a-z0-9]/gi, '_').toLowerCase() || 'schema'}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error(e);
      alert('Erro ao baixar schema.');
    }
  };

  const deleteSchema = (id) => setSavedSchemas(prev => prev.filter(s => s.id !== id));

  // Expose imperative methods to parent via ref
  useImperativeHandle(ref, () => ({
    saveSchema: () => saveSchema(),
    getSavedSchemas: () => savedSchemas,
    clearSavedSchemas: () => clearSavedSchemas(),
  }));

  return (
    <div className="content-wrapper-triple">
      <div className="form-preview-panel panel">
        <h2>Pré-visualização do Formulário</h2>
        <RawDynamicForm
          schema={schema}
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          formId={formId}
        />

        <h3 style={{ marginTop: '20px' }}>Dados Atuais (formData)</h3>
        <pre style={{ backgroundColor: '#f4f4f4', padding: '10px', overflowX: 'auto', borderRadius: '4px' }}>
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>

      <div className="saved-forms-panel panel">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>Formulários Salvos ({savedForms.length})</h2>
          {savedForms.length > 0 && (
            <button onClick={clearSaved} style={{ padding: '5px 10px', cursor: 'pointer' }}>
              Limpar Todos
            </button>
          )}
        </div>

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
  )
}

export default forwardRef(FormWithStorage);
