import React, { useState, useEffect } from 'react';
import { DynamicForm as RawDynamicForm } from './DynamicForm';
// Import packaged CSS so consumers who import this component get styles automatically
import '../../dist/flexiformriseup.css';

const STORAGE_KEY = 'flexiform_saved_submissions';

export default function FormWithStorage({ schema, formId = 'default', onSubmit }) {
  const [formData, setFormData] = useState({});
  const [savedForms, setSavedForms] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setSavedForms(JSON.parse(raw));
    } catch (e) {
      console.error('Erro ao carregar savedForms:', e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedForms));
    } catch (e) {
      console.error('Erro ao salvar savedForms:', e);
    }
  }, [savedForms]);

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
    if (onSubmit) onSubmit({ formData: data });
  };

  const handleChange = ({ formData: d }) => setFormData(d);

  const clearSaved = () => {
    if (window.confirm('Tem certeza que deseja apagar todo o histórico de formulários salvos?')) {
      setSavedForms([]);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

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
  );
}
