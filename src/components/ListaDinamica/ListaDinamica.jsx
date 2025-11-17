import React, { useState } from 'react';
import './ListaDinamica.css';

// OBSERVAÇÃO: Este componente precisa que o Formulario Principal 
// saiba como renderizar os 'fields' internos (usando o componentRegistry).

export default function ListaDinamica({
  id = 'repeater',
  label = 'Itens',
  value = [], // Array de Objetos de dados
  onChange,
  visible = true,
  fields = [], // Array de JSON que descreve os campos internos
  renderComponent, // Função para renderizar um campo individual
}) {
  if (!visible) return null;

  const handleItemChange = (itemIndex, fieldId, fieldValue, validation) => {
    const updatedValue = value.map((item, index) => {
      if (index === itemIndex) {
        return { ...item, [fieldId]: fieldValue };
      }
      return item;
    });

    if (onChange) {
      onChange(id, updatedValue, { valid: true }); // Simplificado
    }
  };

  const addItem = () => {
    // Cria um novo item vazio, baseado nos IDs dos fields
    const newItem = fields.reduce((acc, field) => ({ ...acc, [field.id]: '' }), {});
    
    if (onChange) {
      onChange(id, [...value, newItem], { valid: true });
    }
  };

  const removeItem = (itemIndex) => {
    const updatedValue = value.filter((_, index) => index !== itemIndex);
    if (onChange) {
      onChange(id, updatedValue, { valid: true });
    }
  };

  return (
    <div className="repeater-field">
      <h3 className="repeater-header">{label}</h3>
      
      {value.map((item, itemIndex) => (
        <div key={itemIndex} className="repeater-item-container">
          <div className="repeater-item-fields">
            {/* Aqui, o componente pai (Form) chamaria a prop renderComponent para cada field */}
            {fields.map(field => (
              <div key={`${itemIndex}-${field.id}`}>
                {/* Isto é um placeholder. No Formulario Principal, você usaria:
                  {renderComponent({
                    ...field,
                    value: item[field.id],
                    onChange: (fId, fVal, validation) => handleItemChange(itemIndex, fId, fVal, validation)
                  })} 
                */}
                <p>Placeholder para Campo: {field.label || field.id}</p>
              </div>
            ))}
          </div>
          <button type="button" onClick={() => removeItem(itemIndex)} className="repeater-remove-button">
            Remover {itemIndex + 1}
          </button>
        </div>
      ))}
      
      <button type="button" onClick={addItem} className="repeater-add-button">
        + Adicionar Novo Item
      </button>
    </div>
  );
}