import React from 'react';
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';

const log = (type) => console.log.bind(console, type);

const DEFAULT_UI_SCHEMA = {
  "bio": { "ui:widget": "textarea" }, 
  "senha": { "ui:widget": "password" },
  "password": { "ui:widget": "password" } 
};

// CSS embutido para quando o componente for usado isoladamente
const embeddedStyles = `
.flexiform-form-wrapper {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.flexiform-form-wrapper .form-group {
  margin-bottom: 1.5rem;
}

.flexiform-form-wrapper label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
}

.flexiform-form-wrapper input[type="text"],
.flexiform-form-wrapper input[type="email"],
.flexiform-form-wrapper input[type="tel"],
.flexiform-form-wrapper input[type="date"],
.flexiform-form-wrapper input[type="password"],
.flexiform-form-wrapper textarea,
.flexiform-form-wrapper select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.3s;
  font-family: Arial, sans-serif;
  font-size: 0.9em;
}

.flexiform-form-wrapper input:focus,
.flexiform-form-wrapper textarea:focus,
.flexiform-form-wrapper select:focus {
  border-color: #6a5acd;
  outline: none;
}

.flexiform-form-wrapper textarea {
  min-height: 100px;
  resize: vertical;
}

.flexiform-form-wrapper .btn {
  background-color: #6a5acd;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
  margin-right: 10px;
  margin-top: 10px;
}

.flexiform-form-wrapper .btn:hover {
  background-color: #5d4aa0;
}

.flexiform-form-wrapper button[type="submit"] {
  background-color: #6a5acd;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: bold;
  transition: background-color 0.3s;
  width: 100%;
  margin-top: 20px;
}

.flexiform-form-wrapper button[type="submit"]:hover {
  background-color: #5d4aa0;
}

.flexiform-form-wrapper .radio-group,
.flexiform-form-wrapper .field-radio-group {
  display: flex;
  gap: 20px;
  margin-top: 5px;
}

.flexiform-form-wrapper .radio-group label,
.flexiform-form-wrapper .field-radio-group label {
  font-weight: normal;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.flexiform-form-wrapper .field-array-items {
  margin-top: 10px;
}

.flexiform-form-wrapper .array-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
}

.flexiform-form-wrapper .array-item-toolbox {
  display: flex;
  gap: 5px;
}

.flexiform-form-wrapper .error-detail {
  color: #d32f2f;
  font-size: 0.8em;
  margin-top: 5px;
}

.flexiform-form-wrapper .required::after {
  content: " *";
  color: red;
}

.flexiform-form-wrapper fieldset {
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 15px;
}

.flexiform-form-wrapper legend {
  font-weight: bold;
  padding: 0 10px;
}

.dynamicform-badge {
  background: rgba(220, 38, 38, 0.06);
  color: #b91c1c;
  border: 1px solid rgba(220,38,38,0.2);
  padding: 6px 10px;
  border-radius: 6px;
  font-weight: 600;
  margin-bottom: 12px;
  display: inline-block;
}
`;

/**
 * Componente principal para geração de formulário dinâmico a partir de JSON Schema.
 * Agora aceita apenas JSON como entrada principal.
 */
const DynamicForm = (props) => {
  const {
    schema, // JSON Schema (obrigatório)
    onSubmit, // Função de submit
    uiSchema = {}, // UI Schema opcional
    formData, // Dados do formulário
    onChange, // Handler de mudanças
    formId = 'default', // ID para salvar no cache
    // extras visuais para quem importa a lib
    frameColor, // ex: "red" ou "#ff0000" - aplica borda ao redor do form
    showSchemaBadge = false, // exibe um badge textual acima do form
    badgeText = 'Schema aplicado' // texto do badge
  } = props;
  
  // Mescla o uiSchema Padrão da Lib com o uiSchema passado
  const finalUiSchema = { 
    ...DEFAULT_UI_SCHEMA, 
    ...uiSchema 
  };

  // Handler de submit que salva no cache
  const handleSubmit = (data) => {
    // Salva no cache local
    if (formId) {
      const cacheData = {
        schema: schema,
        uiSchema: finalUiSchema,
        formData: data.formData,
        submittedAt: new Date().toISOString(),
        formId: formId
      };
      
      const cacheKey = `flexiform_cache_${formId}`;
      localStorage.setItem(cacheKey, JSON.stringify(cacheData));
      console.log('Formulário salvo no cache:', cacheKey);
    }
    
    // Chama o onSubmit do usuário se existir
    if (onSubmit) {
      onSubmit(data);
    } else {
      log("Submitted (No Handler)")(data);
    }
  };

  // estilo inline opcional para o wrapper quando frameColor for passado
  const wrapperStyle = frameColor
    ? {
        border: `2px solid ${frameColor}`,
        padding: '12px',
        borderRadius: '8px',
      }
    : undefined;

  return (
    <>
      <style>{embeddedStyles}</style>
      <div className="flexiform-form-wrapper" style={wrapperStyle}>
        {showSchemaBadge && (
          <div className="dynamicform-badge" role="status">
            {badgeText}
          </div>
        )}
        <Form
          schema={schema}
          uiSchema={finalUiSchema} 
          formData={formData}
          validator={validator}
          onChange={onChange}
          onSubmit={handleSubmit}
          onError={log("Errors")}
        />
      </div>
    </>
  );
};

// Função utilitária para carregar dados do cache
DynamicForm.loadFromCache = (formId = 'default') => {
  const cacheKey = `flexiform_cache_${formId}`;
  const cached = localStorage.getItem(cacheKey);
  return cached ? JSON.parse(cached) : null;
};

// Função utilitária para limpar cache
DynamicForm.clearCache = (formId = 'default') => {
  const cacheKey = `flexiform_cache_${formId}`;
  localStorage.removeItem(cacheKey);
};

export default DynamicForm;