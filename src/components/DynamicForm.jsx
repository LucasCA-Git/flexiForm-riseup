// src/components/DynamicForm.jsx

import React from 'react';
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';

const log = (type) => console.log.bind(console, type);

const DEFAULT_UI_SCHEMA = {
  "bio": { "ui:widget": "textarea" }, 
  "senha": { "ui:widget": "password" },
  "password": { "ui:widget": "password" } 
};

/**
 * Componente principal para geração de formulário dinâmico a partir de JSON Schema.
 */
const DynamicForm = (props) => {
  const { schema, onSubmit, uiSchema = {}, formData, onChange } = props;
  
  // Mescla o uiSchema Padrão da Lib com o uiSchema passado pelo App.jsx.
  const finalUiSchema = { 
    ...DEFAULT_UI_SCHEMA, 
    ...uiSchema 
  };

  return (
    <div className="flexiform-form-wrapper">
      <Form
        schema={schema}
        uiSchema={finalUiSchema} 
        formData={formData}
        validator={validator}
        onChange={onChange}
        onSubmit={onSubmit || log("Submitted (No Handler)")}
        onError={log("Errors")}
      />
    </div>
  );
};

export default DynamicForm;