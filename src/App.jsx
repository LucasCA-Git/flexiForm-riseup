import React, { useState, useEffect } from 'react';
import { componentRegistry } from './components';
import formConfig from './config/formConfig.json';
import './App.css';

export default function App() {
  const [config, setConfig] = useState(formConfig);
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [jsonText, setJsonText] = useState(JSON.stringify(formConfig, null, 2));
  const [jsonError, setJsonError] = useState(null);

  useEffect(() => {
    const savedConfig = localStorage.getItem('formConfig');
    if (savedConfig) {
      try {
        const parsed = JSON.parse(savedConfig);
        setConfig(parsed);
      } catch (e) {
        console.error('Erro ao carregar configuração salva:', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formConfig', JSON.stringify(config));
    setJsonText(JSON.stringify(config, null, 2));
    setJsonError(null);
  }, [config]);

  const handleFieldChange = (fieldId, value, validation = {}) => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: value
    }));

    if (validation.error) {
      setFormErrors(prev => ({
        ...prev,
        [fieldId]: validation.error
      }));
    } else {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[fieldId];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = {};
    config.components.forEach(component => {
      const value = formData[component.id];
      if (component.required) {
        if (Array.isArray(value)) {
          if (value.length === 0) {
            errors[component.id] = `${component.label || component.id} é obrigatório`;
          }
        } else if (!value) {
          errors[component.id] = `${component.label || component.id} é obrigatório`;
        }
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    console.log('Dados do formulário:', formData);
    alert('Formulário enviado com sucesso!');
  };

  const renderComponent = (componentConfig) => {
    const Component = componentRegistry[componentConfig.type];
    
    if (!Component) {
      console.warn(`Componente do tipo "${componentConfig.type}" não encontrado no registro`);
      return null;
    }

    if (componentConfig.visible === false) {
      return null;
    }

    const baseProps = {
      id: componentConfig.id,
      label: componentConfig.label,
      required: componentConfig.required || false,
      visible: componentConfig.visible !== false,
      value: formData[componentConfig.id],
      onChange: handleFieldChange,
      className: componentConfig.className || '',
    };

    const specificProps = { ...componentConfig };
    delete specificProps.type;
    delete specificProps.id;
    delete specificProps.label;
    delete specificProps.required;
    delete specificProps.visible;
    delete specificProps.className;

    return (
      <Component
        key={componentConfig.id}
        {...baseProps}
        {...specificProps}
      />
    );
  };

  const handleConfigUpdate = (jsonString) => {
    try {
      const parsed = JSON.parse(jsonString);
      
      if (!parsed.components || !Array.isArray(parsed.components)) {
        throw new Error('O JSON deve conter um array "components"');
      }
      
      setConfig(parsed);
      setFormData({});
      setFormErrors({});
      setJsonError(null);
      
      const successMsg = document.createElement('div');
      successMsg.textContent = '✓ Configuração atualizada com sucesso!';
      successMsg.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #28a745; color: white; padding: 1rem 1.5rem; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 10000; font-weight: 600;';
      document.body.appendChild(successMsg);
      setTimeout(() => {
        successMsg.style.opacity = '0';
        successMsg.style.transition = 'opacity 0.3s';
        setTimeout(() => document.body.removeChild(successMsg), 300);
      }, 2000);
    } catch (e) {
      setJsonError(e.message);
      throw e;
    }
  };

  const handleJsonChange = (e) => {
    const value = e.target.value;
    setJsonText(value);
    
    try {
      JSON.parse(value);
      setJsonError(null);
    } catch (err) {
      setJsonError('JSON inválido: ' + err.message);
    }
  };

  return (
    <div className="app-container">
      <div className="form-wrapper">
        <div className="header-section">
          <div>
            <h1>{config.title || 'Formulário'}</h1>
            {config.description && (
              <p className="form-description">{config.description}</p>
            )}
          </div>
          <button 
            type="button"
            className="edit-config-button"
            onClick={() => {
              const configSection = document.getElementById('config-editor-section');
              if (configSection) {
                configSection.scrollIntoView({ behavior: 'smooth' });
                const textarea = configSection.querySelector('textarea');
                if (textarea) {
                  setTimeout(() => textarea.focus(), 300);
                }
              }
            }}
          >
            ⚙️ Editar Campos do Formulário
          </button>
        </div>

        <form onSubmit={handleSubmit} className="dynamic-form">
          {config.components && config.components.map(componentConfig => 
            renderComponent(componentConfig)
          )}

          <div className="form-actions">
            <button type="submit" className="submit-button">
              Enviar
            </button>
            <button 
              type="button" 
              className="reset-button"
              onClick={() => {
                setFormData({});
                setFormErrors({});
              }}
            >
              Limpar
            </button>
          </div>
        </form>

        <div id="config-editor-section" className="config-editor-section">
          <h2>📝 Editar Campos do Formulário</h2>
          <p className="config-help-text">
            Edite o JSON abaixo para adicionar, remover ou modificar os campos do formulário. 
            Você pode editar livremente - as mudanças serão aplicadas quando você clicar em "Aplicar Alterações" ou sair do campo (se o JSON estiver válido).
          </p>
          <textarea
            className={`config-editor ${jsonError ? 'config-editor-error' : ''}`}
            value={jsonText}
            onChange={handleJsonChange}
            onBlur={(e) => {
              try {
                handleConfigUpdate(e.target.value);
              } catch (err) {
              }
            }}
            placeholder="Cole ou edite o JSON de configuração aqui..."
          />
          {jsonError && (
            <div className="json-error-message">
              ⚠️ {jsonError}
            </div>
          )}
          <div className="config-actions">
            <button 
              onClick={() => {
                try {
                  handleConfigUpdate(jsonText);
                } catch (err) {
                }
              }}
              className="apply-config-button"
              disabled={!!jsonError}
            >
              ✅ Aplicar Alterações
            </button>
            <button 
              onClick={() => {
                if (window.confirm('Deseja restaurar a configuração padrão? Todas as alterações serão perdidas.')) {
                  setConfig(formConfig);
                  setFormData({});
                  setFormErrors({});
                  setJsonText(JSON.stringify(formConfig, null, 2));
                  setJsonError(null);
                }
              }}
              className="reset-config-button"
            >
              🔄 Restaurar Configuração Padrão
            </button>
            <button 
              onClick={() => {
                try {
                  navigator.clipboard.writeText(jsonText);
                  const msg = document.createElement('div');
                  msg.textContent = '✓ Configuração copiada!';
                  msg.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #28a745; color: white; padding: 1rem 1.5rem; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 10000; font-weight: 600;';
                  document.body.appendChild(msg);
                  setTimeout(() => {
                    msg.style.opacity = '0';
                    msg.style.transition = 'opacity 0.3s';
                    setTimeout(() => document.body.removeChild(msg), 300);
                  }, 1500);
                } catch (e) {
                  alert('Erro ao copiar configuração.');
                }
              }}
              className="copy-config-button"
            >
              📋 Copiar Configuração
            </button>
          </div>
        </div>

        <div className="debug-section">
          <details>
            <summary>Ver Dados do Formulário (Debug)</summary>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
          </details>
        </div>
      </div>
    </div>
  );
}
